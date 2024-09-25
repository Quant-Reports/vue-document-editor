<template>
  <div class="template grid-2-cols" contenteditable="true">
    <h1>Hello world!</h1>
    <p>This is a rich-text editor built on top of <span contenteditable="false"><a href="https://vuejs.org/"
          target="_blank">Vue.js</a></span> using the native <span contenteditable="false"><a
          href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content"
          target="_blank"><i>contenteditable</i></a></span> browser implementation and some JavaScript trickery to
      spread content over paper-sized pages.</p>
    <p>Built-in functionality includes:</p>
    <ul>
      <li>Using Vue.js components as interactive page templates (see next page)</li>
      <li>Word-by-word page splitting (<u>still experimental - only for plain HTML content</u>)</li>
      <li>Native Print compatible</li>
      <li>Dynamic document format and margins in millimeters</li>
      <li>Custom page overlays (headers, footers, page numbers)</li>
      <li>Page breaks</li>
      <li>Smart zoom and page display modes</li>
      <li>Computes text style at caret position</li>
    </ul>
    
    <ul>
      <li>Using Vue.js components as interactive page templates (see next page)</li>
      <li>Word-by-word page splitting (<u>still experimental - only for plain HTML content</u>)</li>
      <li>Native Print compatible</li>
      <li>Dynamic document format and margins in millimeters</li>
      <li>Custom page overlays (headers, footers, page numbers)</li>
      <li>Page breaks</li>
      <li>Smart zoom and page display modes</li>
      <li>Computes text style at caret position</li>
    </ul>
    
    <ul>
      <li>Using Vue.js components as interactive page templates (see next page)</li>
      <li>Word-by-word page splitting (<u>still experimental - only for plain HTML content</u>)</li>
      <li>Native Print compatible</li>
      <li>Dynamic document format and margins in millimeters</li>
      <li>Custom page overlays (headers, footers, page numbers)</li>
      <li>Page breaks</li>
      <li>Smart zoom and page display modes</li>
      <li>Computes text style at caret position</li>
    </ul>
    
    <ul>
      <li>Using Vue.js components as interactive page templates (see next page)</li>
      <li>Word-by-word page splitting (<u>still experimental - only for plain HTML content</u>)</li>
      <li>Native Print compatible</li>
      <li>Dynamic document format and margins in millimeters</li>
      <li>Custom page overlays (headers, footers, page numbers)</li>
      <li>Page breaks</li>
      <li>Smart zoom and page display modes</li>
      <li>Computes text style at caret position</li>
    </ul>

    <p>This library may be useful if you design an application that generate documents and you would let the user to
      modify them slightly before printing / saving, but with limited / interactive possibilities. It does not intend to
      replace a proper document editor with full functionality.<br>Make sure this project is suitable to your needs
      before using it.</p>
    <p>This demo adds:</p>
    <ul>
      <li>The top bar (<span contenteditable="false"><a href="https://github.com/motla/vue-file-toolbar-menu"
            target="_blank">vue-file-toolbar-menu</a></span> component) and the functions associated with it</li>
      <li>Rewritten history stack (undo/redo) compatible with native commands</li>
      <li>Pinch and trackpad zooming</li>
    </ul>
    <p>Check out the <span contenteditable="false"><a
          href="https://github.com/motla/vue-document-editor/blob/master/src/Demo/Demo.vue"
          target="_blank">Demo.vue</a></span> file if you need to add these functionalities to your application.</p>
    <p>The link below is an example of non-editable block set with <code>contenteditable="false"</code>:</p>
    <p style="text-align:center" contenteditable="false"><a href="https://github.com/motla/vue-document-editor">View
        docs on Github</a>, you can\'t edit me.</p>
    <p>But you can still edit this.</p>
    <div style="break-after: always;"></div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.grid-2-cols {
  max-height: var(--page-height, 277mm);
  max-width: var(--page-width, 190mm);
  columns: 2;
  column-fill: auto;
}
</style>