
/**
 * Utility function that acts like an Array.filter on childNodes of "container"
 * @param {HTMLElement} container 
 * @param {string} s_tag 
 */
function find_sub_child_sibling_node (container, s_tag){
  if(!container || !s_tag) return false;
  const child_nodes = container.childNodes;
  for(let i = 0; i < child_nodes.length; i++) {
    if(child_nodes[i].s_tag == s_tag) return child_nodes[i];
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
 */
function move_children_forward_recursively(child, child_sibling, stop_condition, do_not_break, not_first_child) {
  const fragment = document.createDocumentFragment();
  let pending_operations = [];
  let should_stop = false;
  
  const h_or_tr_regex = /^(h[1-6]|tr)$/i;

  while(child.childNodes.length && !should_stop){
    const childNodes_length = child.childNodes.length;
    
    // check if page has only one child tree left
    not_first_child = not_first_child || (childNodes_length != 1);

    // select the last sub-child
    const sub_child = child.lastChild;

    // if it is a text node, move its content to next page word(/space) by word
    if(sub_child.nodeType == Node.TEXT_NODE){
      const sub_child_text = sub_child.textContent;
      
      if (sub_child_text.length > 0) {
        let sub_child_hashes = sub_child_text.match(/(\s|\S+)/g);

        // Handle long continuous words
        if (!sub_child_hashes || sub_child_hashes.length === 1) {
          // Binary search approach for large words
          let start = 0;
          let end = sub_child_text.length;
          
          while (start < end - 1 && !should_stop) {
            const mid = Math.floor((start + end) / 2);
            
            sub_child.textContent = sub_child_text.slice(0, mid);
            const sub_child_continuation = document.createTextNode(sub_child_text.slice(mid));
            child_sibling.prepend(sub_child_continuation);
            
            should_stop = stop_condition();
            if (!should_stop) {
              end = mid;
            } else {
              // Undo and try larger portion
              child_sibling.removeChild(sub_child_continuation);
              start = mid;
              should_stop = false;
            }
          }
          
          if (should_stop) return;
          continue;
        }

        // Proceed with normal text handling - optimized with batching
        const sub_child_continuation = document.createTextNode('');
        child_sibling.prepend(sub_child_continuation);
        const l = sub_child_hashes.length;
        
        // Binary search for optimal split point instead of linear
        let left = 0;
        let right = l;
        let best_split = 0;
        
        while (left < right && !should_stop) {
          const mid = Math.floor((left + right) / 2);
          
          if (mid == l - 1 && !not_first_child) {
            should_stop = true;
            return;
          }
          
          // Move content from current page to the next
          sub_child.textContent = sub_child_hashes.slice(0, l - mid - 1).join('');
          sub_child_continuation.textContent = sub_child_hashes.slice(l - mid - 1).join('');
          
          // Check stop condition
          should_stop = stop_condition();
          
          if (should_stop) {
            best_split = mid;
            right = mid;
            should_stop = false;
          } else {
            left = mid + 1;
          }
        }
        
        // Apply best split
        if (best_split > 0) {
          sub_child.textContent = sub_child_hashes.slice(0, l - best_split - 1).join('');
          sub_child_continuation.textContent = sub_child_hashes.slice(l - best_split - 1).join('');
          should_stop = stop_condition();
        }
        
        if (should_stop) return;
      }
    }
    // Handle elements that can be moved without breaking
    else if (!sub_child.childNodes.length || (sub_child.tagName && h_or_tr_regex.test(sub_child.tagName)) || (typeof do_not_break === "function" && do_not_break(sub_child))) {
      if (!not_first_child) {
        return;
      }
      child_sibling.prepend(sub_child);
      should_stop = stop_condition();
    }

    // for every other node that is not text and not the first child, clone it recursively to next page
    else {
      // check if sub child has already been cloned before
      let sub_child_sibling = find_sub_child_sibling_node(child_sibling, sub_child.s_tag);
      
      // if not, create it and watermark the relationship with a random tag
      if(!sub_child_sibling) {
        if(!sub_child.s_tag) {
          const new_random_tag = Math.random().toString(36).slice(2, 8);
          sub_child.s_tag = new_random_tag;
        }
        sub_child_sibling = sub_child.cloneNode(false);
        sub_child_sibling.s_tag = sub_child.s_tag;
        child_sibling.prepend(sub_child_sibling);
      }
      
      // then move/clone its children and sub-children recursively
      move_children_forward_recursively(sub_child, sub_child_sibling, stop_condition, do_not_break, not_first_child);
      sub_child_sibling.normalize(); // merge consecutive text nodes
      
      should_stop = stop_condition();
    }

    // Clean up child if it's emptied during the process
    if (child.contains(sub_child)) {
      const has_content = sub_child.childNodes.length > 0 && sub_child.innerHTML !== "";
      
      if(!has_content) {
        child.removeChild(sub_child);
      } else if (!stop_condition()) {
        console.error("Document editor is trying to remove a non-empty sub-child:", sub_child, "in parent:", child);

        throw Error("Document editor is trying to remove a non-empty sub-child. This "
      + "is a bug and should not happen. Please report a repeatable set of actions that "
      + "leaded to this error to https://github.com/motla/vue-document-editor/issues/new");
      }
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