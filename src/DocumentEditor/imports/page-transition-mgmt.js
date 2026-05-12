
/**
 * Utility function that acts like an Array.filter on childNodes of "container"
 * @param {HTMLElement} container
 * @param {string} s_tag
 * @param {Map} sibling_cache Optional cache Map for faster lookups
 */
function find_sub_child_sibling_node (container, s_tag, sibling_cache = null){
  if(!container || !s_tag) return false;

  // Check cache first if available
  if (sibling_cache && sibling_cache.has(s_tag)) {
    const cached = sibling_cache.get(s_tag);
    // Verify the cached element is still a child of container
    if (container.contains(cached)) {
      return cached;
    }
    // Cache miss - remove stale entry
    sibling_cache.delete(s_tag);
  }

  // Fallback to linear search
  const child_nodes = container.childNodes;
  for(let i = 0; i < child_nodes.length; i++) {
    if(child_nodes[i].s_tag == s_tag) {
      // Cache the result if cache is available
      if (sibling_cache) {
        sibling_cache.set(s_tag, child_nodes[i]);
      }
      return child_nodes[i];
    }
  }
  return false;
}


/**
 * This function moves every sub-child of argument "child" to the start of the "child_sibling"
 * argument, beginning from the last child, with word splitting and format preserving.
 * Typically, "child" is the current page which content overflows, and "child_sibling" is the
 * next page.
 * @param {HTMLElement} child Element to take children from (current page)
 * @param {HTMLElement} child_sibling Element to copy children to (next page)
 * @param {function} stop_condition Check function that returns a boolean if content doesn't overflow anymore
 * @param {function(HTMLElement):boolean?} do_not_break Optional function that receives the current child element and should return true if the child should not be split over two pages but rather be moved directly to the next page
 * @param {boolean?} not_first_child Should be unset. Used internally to let at least one child in the page
 * @param {Map} sibling_cache Cache Map for sibling lookups to avoid linear searches
 * @param {Array} normalize_queue Array of elements to normalize at the end
 */
function move_children_forward_recursively(child, child_sibling, stop_condition, do_not_break, not_first_child, sibling_cache = null, normalize_queue = null) {

  // Initialize cache and queue on first call
  if (!sibling_cache) sibling_cache = new Map();
  if (!normalize_queue) normalize_queue = [];

  // if the child still has nodes and the current page still overflows
  while (child.childNodes.length && !stop_condition()) {

    // check if page has only one child tree left
    not_first_child = not_first_child || (child.childNodes.length !== 1);

    // select the last sub-child
    const sub_child = child.lastChild;

    // if it is a text node, move its content to next page word(/space) by word
    if(sub_child.nodeType === Node.TEXT_NODE){
      const sub_child_text = sub_child.textContent;

      if (sub_child_text.length > 0) {
        let sub_child_hashes = sub_child_text.match(/(\s|\S+)/g);

        // Handle long continuous words with binary search
        if (!sub_child_hashes || sub_child_hashes.length === 1) {
          const sub_child_continuation = document.createTextNode('');
          child_sibling.prepend(sub_child_continuation);

          let low = 0, high = sub_child_text.length, best_split = 0;
          while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            sub_child.textContent = sub_child_text.slice(0, mid);
            sub_child_continuation.textContent = sub_child_text.slice(mid);
            if (stop_condition()) {
              best_split = mid;
              low = mid + 1;
            } else {
              high = mid - 1;
            }
          }
          sub_child.textContent = sub_child_text.slice(0, best_split);
          sub_child_continuation.textContent = sub_child_text.slice(best_split);

          if (stop_condition()) break;
          continue;
        }

        // Binary search for the split point to minimize stop_condition calls
        const sub_child_continuation = document.createTextNode('');
        child_sibling.prepend(sub_child_continuation);
        const total_words = sub_child_hashes.length;

        // Find minimum words to move to next page such that page fits
        let low = 1;
        let high = not_first_child ? total_words : total_words - 1;
        let best_moved = 0;

        while (low <= high) {
          const mid = Math.floor((low + high) / 2);
          const keep = total_words - mid;
          sub_child.textContent = sub_child_hashes.slice(0, keep).join('');
          sub_child_continuation.textContent = sub_child_hashes.slice(keep).join('');
          if (stop_condition()) {
            best_moved = mid;
            high = mid - 1;
          } else {
            low = mid + 1;
          }
        }

        // Apply the best found split
        if (best_moved > 0) {
          const keep = total_words - best_moved;
          sub_child.textContent = sub_child_hashes.slice(0, keep).join('');
          sub_child_continuation.textContent = sub_child_hashes.slice(keep).join('');
        }
      }
    }
    // Handle elements that can be moved without breaking
    else if (!sub_child.childNodes.length || sub_child.tagName.match(/h\d|tr/i) || (typeof do_not_break === "function" && do_not_break(sub_child))) {
      if (!not_first_child) {
        return;
      }
      child_sibling.prepend(sub_child);
    }

    // for every other node that is not text and not the first child
    else {
      // check if sub child has already been cloned before (with cache)
      let sub_child_sibling = find_sub_child_sibling_node(child_sibling, sub_child.s_tag, sibling_cache);

      // if not, create it and watermark the relationship with a random tag
      if(!sub_child_sibling) {
        if(!sub_child.s_tag) {
          const new_random_tag = Math.random().toString(36).slice(2, 8);
          sub_child.s_tag = new_random_tag;
        }
        sub_child_sibling = sub_child.cloneNode(false);
        sub_child_sibling.s_tag = sub_child.s_tag;
        child_sibling.prepend(sub_child_sibling);

        // Cache the new sibling for future lookups
        sibling_cache.set(sub_child.s_tag, sub_child_sibling);
      }

      // then move/clone its children and sub-children recursively
      move_children_forward_recursively(sub_child, sub_child_sibling, stop_condition, do_not_break, not_first_child, sibling_cache, normalize_queue);

      // Queue normalize() call instead of executing immediately (defers expensive operation)
      if (sub_child_sibling.childNodes.length > 0) {
        normalize_queue.push(sub_child_sibling);
      }
    }

    // Clean up child if it's emptied during the process
    if (child.contains(sub_child)) {
      if(sub_child.childNodes.length == 0 || sub_child.innerHTML == "") {
        child.removeChild(sub_child);
      } else if (!stop_condition()) {
        console.error("Document editor is trying to remove a non-empty sub-child:", sub_child, "in parent:", child);

        throw Error("Document editor is trying to remove a non-empty sub-child. This "
      + "is a bug and should not happen. Please report a repeatable set of actions that "
      + "leaded to this error to https://github.com/motla/vue-document-editor/issues/new");
      }
    }
  }

  // Process normalize queue at the end (batch expensive normalize operations)
  for (const elt of normalize_queue) {
    if (elt.parentNode) { // Only normalize if element is still in DOM
      elt.normalize();
    }
  }
}



/**
 * This function moves the first element from "next_page_html_div" to the end of "page_html_div", with
 * merging sibling tags previously watermarked by "move_children_forward_recursively", if any.
 * @param {HTMLElement} page_html_div Current page element
 * @param {HTMLElement} next_page_html_div Next page element
 * @param {function} stop_condition Check function that returns a boolean if content overflows
 */
function move_children_backwards_with_merging(page_html_div, next_page_html_div, stop_condition) {
  // loop until content is overflowing
  while (!stop_condition()) {
    // find first child of next page
    const first_child = next_page_html_div.firstChild;
    
    // Exit loop if there are no more children to process
    if (!first_child) break;

    // merge it at the end of the current page
    var merge_recursively = (container, elt) => {
      if (elt) {
        // check if child had been split (= has a sibling on previous page)
        const elt_sibling = find_sub_child_sibling_node(container, elt.s_tag);
        if (elt_sibling && elt.childNodes.length) {
          // then dig for deeper children, in case of
          merge_recursively(elt_sibling, elt.firstChild);
        } else {
          // else move the child inside the right container at current page
          container.append(elt);
          container.normalize();
        }
      }
    };
    merge_recursively(page_html_div, first_child);
  }
}

export {
  move_children_forward_recursively,
  move_children_backwards_with_merging
};
