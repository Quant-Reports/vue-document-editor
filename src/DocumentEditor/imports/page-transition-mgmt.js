
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


// Global state for batch processing
let move_children_processing = false;
const MAX_OPERATIONS_PER_BATCH = 1000;

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
 * @param {number} operationCount Internal counter for batch processing
 */
function move_children_forward_recursively (child, child_sibling, stop_condition, do_not_break, not_first_child, operationCount = 0) {
  if(move_children_processing && operationCount === 0) {
    return;
  }
  move_children_processing = true;

  // Track progress to detect infinite loops
  let initial_child_height = child.clientHeight;
  let initial_child_nodes = child.childNodes.length;
  let progress_made = false;

  const process_batch = (child, child_sibling, not_first_child, opCount) => {
    // if the child still has nodes and the current page still overflows
    while(child.childNodes.length && !stop_condition()){

      // Check if we've exceeded the batch size and need to yield
      if(opCount >= MAX_OPERATIONS_PER_BATCH) {
        // Check if we made any progress in this batch
        const current_child_height = child.clientHeight;
        const current_child_nodes = child.childNodes.length;

        if (!progress_made && initial_child_height === current_child_height && initial_child_nodes === current_child_nodes) {
          // No progress made after a full batch - we're stuck (likely due to do_not_break element being too large)
          console.warn("move_children_forward_recursively: No progress detected. The content may be too large to fit. Aborting.");
          move_children_processing = false;
          return;
        }

        // Update initial state for next batch
        initial_child_height = current_child_height;
        initial_child_nodes = current_child_nodes;
        progress_made = false;

        requestAnimationFrame(() => {
          move_children_forward_recursively(child, child_sibling, stop_condition, do_not_break, not_first_child, 0);
        });
        return;
      }

      opCount++;

      // check if page has only one child tree left
      not_first_child = not_first_child || (child.childNodes.length != 1);

      // select the last sub-child
      const sub_child = child.lastChild;

      // if it is a text node, move its content to next page word(/space) by word
      if(sub_child.nodeType == Node.TEXT_NODE){
        const sub_child_hashes = sub_child.textContent.match(/(\s|\S+)/g);
        const sub_child_continuation = document.createTextNode('');
        child_sibling.prepend(sub_child_continuation);
        const l = sub_child_hashes ? sub_child_hashes.length : 0;
        for(let i = 0; i < l; i++) {
          if(i == l - 1 && !not_first_child) { // never remove the first word of the page
            move_children_processing = false;
            return;
          }
          sub_child.textContent = sub_child_hashes.slice(0, l - i - 1).join('');
          sub_child_continuation.textContent = sub_child_hashes.slice(l - i - 1, l).join('');
          if(stop_condition()) {
            move_children_processing = false;
            return;
          }
          progress_made = true; // We moved some text
        }
      }

      // we simply move it to the next page if it is either:
      // - a node with no content (e.g. <img>)
      // - a header title (e.g. <h1>)
      // - a table row (e.g. <tr>)
      // - any element on whose user-custom `do_not_break` function returns true
      else if(!sub_child.childNodes.length || sub_child.tagName.match(/h\d/i) || sub_child.tagName.match(/tr/i) || (typeof do_not_break === "function" && do_not_break(sub_child))) {
        // just prevent moving the last child of the page
        if(!not_first_child){
          console.log("Move-forward: first child reached with no stop condition. Aborting");
          move_children_processing = false;
          return;
        }
        child_sibling.prepend(sub_child);
        progress_made = true; // We moved an element
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
        move_children_forward_recursively(sub_child, sub_child_sibling, stop_condition, do_not_break, not_first_child, opCount);
        sub_child_sibling.normalize(); // merge consecutive text nodes

        // Check if we returned from a recursive call with yielded processing
        if(move_children_processing === false && opCount >= MAX_OPERATIONS_PER_BATCH) {
          return; // Exit early if the recursive call initiated a yield
        }
        // Reset processing flag if recursive call completed
        if(opCount < MAX_OPERATIONS_PER_BATCH) {
          move_children_processing = true;
        }

        // Check if we made progress in the recursive call
        if (sub_child.childNodes.length === 0 || sub_child.innerHTML === "") {
          progress_made = true; // We emptied a child
        }
      }

      // if sub_child was a container that was cloned and is now empty, we clean it
      if(child.contains(sub_child)){
        if(sub_child.childNodes.length == 0 || sub_child.innerHTML == "") {
          child.removeChild(sub_child);
          progress_made = true; // We removed a child
        } else if(!stop_condition()) {
          // the only case when it can be non empty should be when stop_condition is now true
          console.log("sub_child:", sub_child, "that is in child:", child);
          move_children_processing = false;
          throw Error("Document editor is trying to remove a non-empty sub-child. This "
      + "is a bug and should not happen. Please report a repeatable set of actions that "
      + "leaded to this error to https://github.com/motla/vue-document-editor/issues/new");
        }
      }
    }

    move_children_processing = false;
  };

  process_batch(child, child_sibling, not_first_child, operationCount);
}



/**
 * This function moves the first element from "next_page_html_div" to the end of "page_html_div", with
 * merging sibling tags previously watermarked by "move_children_forward_recursively", if any.
 * @param {HTMLElement} page_html_div Current page element
 * @param {HTMLElement} next_page_html_div Next page element
 * @param {function} stop_condition Check function that returns a boolean if content overflows
 */
function move_children_backwards_with_merging (page_html_div, next_page_html_div, stop_condition) {

  // loop until content is overflowing
  while(!stop_condition()){

    // find first child of next page
    const first_child = next_page_html_div.firstChild;

    // merge it at the end of the current page
    var merge_recursively = (container, elt) => {
      // check if child had been splitted (= has a sibling on previous page)
      const elt_sibling = find_sub_child_sibling_node(container, elt.s_tag);
      if(elt_sibling && elt.childNodes.length) {
        // then dig for deeper children, in case of
        merge_recursively(elt_sibling, elt.firstChild);
      }
      // else move the child inside the right container at current page
      else {
        container.append(elt);
        container.normalize();
      }
    }
    merge_recursively(page_html_div, first_child);
  }
}

export {
  move_children_forward_recursively,
  move_children_backwards_with_merging
};