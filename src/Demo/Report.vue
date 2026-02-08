<template>
    <div class="main">
  
      <!-- Top bar -->
      <vue-file-toolbar-menu :content="menu" class="bar" />
  
      <!-- Document editor -->
      <vue-document-editor class="editor" ref="editor"
        v-model:content="content"
        :overlay="overlay"
        :zoom="zoom"
        :do_not_break="(elt) => Array.from(elt.classList).includes('do-not-break')"
        :page_format_mm="page_format_mm"
        :page_margins="page_margins"
        :display="display" />
  
    </div>
  </template>
  
  <script>
  import VueFileToolbarMenu from 'vue-file-toolbar-menu';
  import VueDocumentEditor from '../DocumentEditor/DocumentEditor.vue'; // set from 'vue-document-editor' in your application
  import { markRaw } from 'vue';


function myContent(){

  let dummyText = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.</p>`
  let tableExample = `
    <div class="do-not-break" contenteditable="false">
      <h3>Fund Performance by Month and Financial Year (Net of all fees and expenses)</h3> 
      <div id="financial-performance-table" style="width: 100%;height:auto;"><table class="widget-table financial-performance" contenteditable="true"><thead><tr><th class="table-separator">FY</th><th>Jul</th><th>Aug</th><th>Sep</th><th>Oct</th><th>Nov</th><th>Dec</th><th>Jan</th><th>Feb</th><th>Mar</th><th>Apr</th><th>May</th><th class="table-separator">Jun</th><th class="table-separator">Total</th></tr></thead><tbody><tr><td class="table-separator">2026</td><td class="plus">5.01</td><td class="plus">7.70</td><td class="plus">1.76</td><td class="plus">2.42</td><td class="minus">-3.65</td><td class="minus">-0.60</td><td></td><td></td><td></td><td></td><td></td><td class="table-separator"></td><td class="table-separator plus">12.89</td></tr><tr><td class="table-separator">2025</td><td class="plus">1.57</td><td class="plus">1.22</td><td class="plus">3.29</td><td class="plus">1.58</td><td class="plus">8.17</td><td class="plus">1.63</td><td class="plus">2.93</td><td class="minus">-0.86</td><td class="minus">-2.87</td><td class="minus">-0.29</td><td class="plus">10.05</td><td class="table-separator plus">1.64</td><td class="table-separator plus">31.09</td></tr><tr><td class="table-separator">2024</td><td class="plus">4.18</td><td class="plus">1.51</td><td class="minus">-0.54</td><td class="minus">-6.45</td><td class="plus">4.76</td><td class="plus">7.14</td><td class="minus">-1.07</td><td class="plus">4.43</td><td class="plus">1.59</td><td class="plus">1.24</td><td class="minus">-0.51</td><td class="table-separator plus">1.66</td><td class="table-separator plus">18.69</td></tr><tr><td class="table-separator">2023</td><td class="plus">12.28</td><td class="plus">1.67</td><td class="minus">-6.53</td><td class="plus">7.58</td><td class="plus">5.75</td><td class="minus">-3.87</td><td class="plus">5.95</td><td class="minus">-4.62</td><td class="minus">-3.85</td><td class="plus">2.61</td><td class="plus">0.34</td><td class="table-separator plus">0.34</td><td class="table-separator plus">17.13</td></tr><tr><td class="table-separator">2022</td><td class="plus">5.01</td><td class="plus">2.58</td><td class="plus">0.45</td><td class="plus">1.57</td><td class="minus">-1.35</td><td class="plus">2.81</td><td class="minus">-7.55</td><td class="minus">-7.48</td><td class="plus">2.86</td><td class="minus">-7.29</td><td class="minus">-9.60</td><td class="table-separator minus">-12.30</td><td class="table-separator minus">-27.92</td></tr><tr><td class="table-separator">2021</td><td class="plus">3.70</td><td class="plus">18.80</td><td class="plus">2.00</td><td class="plus">7.79</td><td class="plus">13.22</td><td class="plus">3.56</td><td class="minus">-3.05</td><td class="plus">4.07</td><td class="plus">1.21</td><td class="plus">13.23</td><td class="plus">0.26</td><td class="table-separator plus">1.62</td><td class="table-separator plus">87.09</td></tr><tr><td class="table-separator">2020</td><td class="plus">6.67</td><td class="minus">-1.09</td><td class="plus">4.38</td><td class="plus">1.54</td><td class="minus">-3.22</td><td class="minus">-1.50</td><td class="plus">2.46</td><td class="minus">-10.97</td><td class="minus">-39.71</td><td class="plus">20.57</td><td class="plus">18.04</td><td class="table-separator minus">-2.16</td><td class="table-separator minus">-18.36</td></tr><tr><td class="table-separator">2019</td><td class="minus">-0.62</td><td class="minus">-1.90</td><td class="minus">-2.19</td><td class="minus">-6.16</td><td class="minus">-3.78</td><td class="minus">-3.68</td><td class="plus">0.98</td><td class="plus">4.46</td><td class="minus">-0.95</td><td class="minus">-2.02</td><td class="minus">-3.97</td><td class="table-separator minus">-1.46</td><td class="table-separator minus">-19.66</td></tr><tr><td class="table-separator">2018</td><td class="plus">2.32</td><td class="minus">-0.95</td><td class="plus">2.69</td><td class="plus">0.95</td><td class="plus">0.21</td><td class="plus">4.06</td><td class="minus">-0.57</td><td class="minus">-3.18</td><td class="minus">-2.64</td><td class="plus">2.77</td><td class="minus">-0.97</td><td class="table-separator plus">1.91</td><td class="table-separator plus">6.5</td></tr><tr><td class="table-separator">2017</td><td class="plus">6.99</td><td class="plus">3.25</td><td class="plus">4.50</td><td class="minus">-1.99</td><td class="minus">-4.65</td><td class="plus">1.76</td><td class="plus">7.20</td><td class="plus">1.29</td><td class="plus">1.60</td><td class="plus">1.16</td><td class="plus">1.16</td><td class="table-separator plus">1.00</td><td class="table-separator plus">25.17</td></tr><tr><td class="table-separator">2016</td><td class="plus">7.94</td><td class="minus">-4.46</td><td class="minus">-1.38</td><td class="plus">12.87</td><td class="minus">-2.97</td><td class="plus">0.22</td><td class="minus">-1.33</td><td class="plus">2.70</td><td class="plus">4.40</td><td class="plus">2.48</td><td class="plus">1.51</td><td class="table-separator minus">-3.91</td><td class="table-separator plus">18.05</td></tr><tr><td class="table-separator">2015</td><td class="plus">6.71</td><td class="plus">2.56</td><td class="minus">-1.22</td><td class="minus">-2.06</td><td class="minus">-0.21</td><td class="minus">-1.15</td><td class="plus">0.94</td><td class="plus">3.38</td><td class="plus">4.87</td><td class="minus">-2.42</td><td class="plus">3.13</td><td class="table-separator minus">-2.34</td><td class="table-separator plus">12.33</td></tr><tr><td class="table-separator">2014</td><td class="plus">10.46</td><td class="plus">1.13</td><td class="plus">4.77</td><td class="plus">2.50</td><td class="minus">-0.11</td><td class="plus">0.37</td><td class="plus">1.05</td><td class="plus">0.48</td><td class="minus">-1.28</td><td class="minus">-3.44</td><td class="plus">1.28</td><td class="table-separator minus">-0.15</td><td class="table-separator plus">17.72</td></tr><tr><td class="table-separator">2013</td><td class="plus">8.70</td><td class="plus">0.44</td><td class="plus">2.83</td><td class="minus">-3.07</td><td class="plus">4.57</td><td class="plus">0.33</td><td class="plus">5.83</td><td class="plus">4.86</td><td class="plus">4.51</td><td class="plus">1.41</td><td class="plus">2.65</td><td class="table-separator minus">-0.69</td><td class="table-separator plus">36.89</td></tr><tr><td class="table-separator">2012</td><td class="minus">-1.00</td><td class="minus">-2.61</td><td class="minus">-7.20</td><td class="plus">9.89</td><td class="minus">-0.02</td><td class="minus">-4.62</td><td class="plus">1.53</td><td class="plus">8.90</td><td class="plus">5.02</td><td class="plus">2.17</td><td class="minus">-0.51</td><td class="table-separator minus">-2.64</td><td class="table-separator plus">7.75</td></tr><tr><td class="table-separator">2011</td><td class="plus">4.97</td><td class="minus">-2.40</td><td class="minus">-2.80</td><td class="minus">-1.54</td><td class="plus">3.12</td><td class="plus">6.59</td><td class="plus">1.58</td><td class="plus">0.47</td><td class="minus">-1.49</td><td class="plus">3.40</td><td class="minus">-5.39</td><td class="table-separator minus">-0.82</td><td class="table-separator plus">5.13</td></tr><tr><td class="table-separator">2010</td><td></td><td></td><td></td><td></td><td class="minus">-0.69</td><td class="plus">2.52</td><td class="minus">-1.66</td><td class="plus">0.08</td><td class="minus">-0.34</td><td class="plus">4.60</td><td class="minus">-4.27</td><td class="table-separator minus">-4.40</td><td class="table-separator minus">-4.4</td></tr></tbody></table></div>
      <div class="footnote">
        <div contenteditable="true" ref="footnote_4">Past performance is not indicative of future performance and the value of your investments can rise or fall. The above figures assume all distributions have been reinvested. This fund is appropriate for investors with “High” risk and return profiles. A suitable investor for this fund is prepared to accept high risk in the pursuit of capital growth with a medium to long investment timeframe.</div>
      </div>
    </div>
  `;
    let content = [
      `<h1>A. Two Columns CSS Auto Height</h1>
        ` + tableExample.repeat(1) +`
        ` + dummyText.repeat(4)
    ]

    return Array.from({ length: 5 }, () => content).flat();
  };
  
  export default {
    components: { VueDocumentEditor, VueFileToolbarMenu },
  
    data () {
      return {
        // This is where the pages content is stored and synced
        zoom: 0.8,
        zoom_min: 0.10,
        zoom_max: 5.0,
        page_format_mm: [210, 297],
        page_margins: [10, 15, 10 ,15], // top, right, bottom, left
        display: "grid", // ["grid", "vertical", "horizontal"]
        mounted: false, // will be true after this component is mounted
        undo_count: -1, // contains the number of times user can undo (= current position in content_history)
        content_history: [] // contains the content states for undo/redo operations
      }
    },
  
    created () {
      // Initialize gesture flags
      let start_zoom_gesture = false;
      let start_dist_touch = false;
      let start_zoom_touch = false;
  
      // Manage ctrl+scroll zoom (or trackpad pinch)
      window.addEventListener("wheel", (e) => {
        if(e.ctrlKey){
          e.preventDefault();
          this.zoom = Math.min(Math.max(this.zoom - e.deltaY * 0.01, this.zoom_min), this.zoom_max);
        }
      }, { passive: false });
  
      // Manage trackpad pinch on Safari
      window.addEventListener("gesturestart", (e) => {
        e.preventDefault();
        start_zoom_gesture = this.zoom;
      });
      window.addEventListener("gesturechange", (e) => {
        e.preventDefault();
        if(!start_zoom_touch){
          this.zoom = Math.min(Math.max(start_zoom_gesture * e.scale, this.zoom_min), this.zoom_max);
        }
      });
      window.addEventListener("gestureend", () => {
        start_zoom_gesture = false;
      });
  
      // Manage pinch to zoom for touch devices
      window.addEventListener("touchstart", (e) => {
        if (e.touches.length == 2) {
          e.preventDefault();
          start_dist_touch = Math.hypot(
            e.touches[0].pageX - e.touches[1].pageX,
            e.touches[0].pageY - e.touches[1].pageY
          );
          start_zoom_touch = this.zoom;
        }
      }, { passive: false });
      window.addEventListener("touchmove", (e) => {
        if (start_dist_touch && start_zoom_touch) {
          e.preventDefault();
          let zoom = start_zoom_touch * Math.hypot(
            e.touches[0].pageX - e.touches[1].pageX,
            e.touches[0].pageY - e.touches[1].pageY
          ) / start_dist_touch;
          this.zoom = Math.min(Math.max(zoom, this.zoom_min), this.zoom_max);
        }
      }, { passive: false });
      window.addEventListener("touchend", () => {
        start_dist_touch = false;
        start_zoom_touch = false;
      }, { passive: false });
  
      // Manage history undo/redo events
      const manage_undo_redo = (e) => {
        switch(e && e.inputType){
          case "historyUndo": e.preventDefault(); e.stopPropagation(); this.undo(); break;
          case "historyRedo": e.preventDefault(); e.stopPropagation(); this.redo(); break;
        }
      }
      window.addEventListener("beforeinput", manage_undo_redo);
      window.addEventListener("input", manage_undo_redo); // in case of beforeinput event is not implemented (Firefox)
  
      // If your component is susceptible to be destroyed, don't forget to
      // use window.removeEventListener in the Vue.js beforeUnmount handler
    },
  
    mounted () { this.mounted = true; },
  
    computed: {
  
      // This is the menu content
      menu () {
        return [
          // Main commands
          { text: "New", title: "New", icon: "description", click: () => { if(confirm("This will create an empty document. Are you sure?")){ this.content = [""]; this.resetContentHistory(); } } },
          { text: "Print", title: "Print", icon: "print", click: () => window.print() },
  
          { is: "spacer" },
  
          // Undo / redo commands
          { title: "Undo", icon: "undo", disabled: !this.can_undo, hotkey: this.isMacLike ? "command+z" : "ctrl+z", click: () => this.undo() },
          { title: "Redo", icon: "redo", disabled: !this.can_redo, hotkey: this.isMacLike ? "shift+command+z" : "ctrl+y", click: () => this.redo() },
  
          { is: "spacer" },
  
          // Rich text menus
          { icon: "format_align_left", title: "Align left", active: this.isLeftAligned, disabled: !this.current_text_style, hotkey: this.isMacLike ? "shift+command+l" : "ctrl+shift+l", click: () => document.execCommand("justifyLeft") },
          { icon: "format_align_center", title: "Align center", active: this.isCentered, disabled: !this.current_text_style, hotkey: this.isMacLike ? "shift+command+e" : "ctrl+shift+e", click: () => document.execCommand("justifyCenter") },
          { icon: "format_align_right", title: "Align right", active: this.isRightAligned, disabled: !this.current_text_style, hotkey: this.isMacLike ? "shift+command+r" : "ctrl+shift+r", click: () => document.execCommand("justifyRight") },
          { icon: "format_align_justify", title: "Justify content", active: this.isJustified, disabled: !this.current_text_style, hotkey: this.isMacLike ? "shift+command+j" : "ctrl+shift+j", click: () => document.execCommand("justifyFull") },
          { is: "separator" },
          { icon: "format_bold", title: "Bold", active: this.isBold, disabled: !this.current_text_style, hotkey: this.isMacLike ? "command+b" : "ctrl+b", click: () => document.execCommand("bold") },
          { icon: "format_italic", title: "Italic", active: this.isItalic, disabled: !this.current_text_style, hotkey: this.isMacLike ? "command+i" : "ctrl+i", click: () => document.execCommand("italic") },
          { icon: "format_underline", title: "Underline", active: this.isUnderline, disabled: !this.current_text_style, hotkey: this.isMacLike ? "command+u" : "ctrl+u", click: () => document.execCommand("underline") },
          { icon: "format_strikethrough", title: "Strike through", active: this.isStrikeThrough, disabled: !this.current_text_style, click: () => document.execCommand("strikethrough") },
          { is: "button-color", type: "compact", menu_class: "align-center", disabled: !this.current_text_style, color: this.curColor, update_color: (new_color) => document.execCommand('foreColor', false, new_color.hex8) },
          { is: "separator" },
          { icon: "format_list_numbered", title: "Numbered list", active: this.isNumberedList, disabled: !this.current_text_style, click: () => document.execCommand("insertOrderedList") },
          { icon: "format_list_bulleted", title: "Bulleted list", active: this.isBulletedList, disabled: !this.current_text_style, click: () => document.execCommand("insertUnorderedList") },
          { html: "<b>H1</b>", title: "Header 1", active: this.isH1, disabled: !this.current_text_style, click: () => document.execCommand('formatBlock', false, '<h1>') },
          { html: "<b>H2</b>", title: "Header 2", active: this.isH2, disabled: !this.current_text_style, click: () => document.execCommand('formatBlock', false, '<h2>') },
          { html: "<b>H3</b>", title: "Header 3", active: this.isH3, disabled: !this.current_text_style, click: () => document.execCommand('formatBlock', false, '<h3>') },
          { icon: "format_clear", title: "Clear format", disabled: !this.current_text_style, click () { document.execCommand('removeFormat'); document.execCommand('formatBlock', false, '<div>'); } },
          { icon: "splitscreen", title: "Page break", disabled: !this.current_text_style, click: () => this.insertPageBreak() },
          
          { is: "spacer" },
  
          { // Format menu
            text: this.current_format_name,
            title: "Format",
            icon: "crop_free",
            chevron: true,
            menu: this.formats.map(([text, w, h]) => {
              return {
                text,
                active: (this.page_format_mm[0] == w && this.page_format_mm[1] == h),
                click: () => { this.page_format_mm = [w, h]; }
              }
            }),
            menu_width: 80,
            menu_height: 280
          },
          { // Margins menu
            text: this.current_margins_name,
            title: "Margins",
            icon: "select_all",
            chevron: true,
            menu: this.margins.map(([text, value]) => {
              return {
                text: text+" ("+value+")",
                active: (this.page_margins == value),
                click: () => { this.page_margins = value; }
              }
            }),
            menu_width: 200,
            menu_class: "align-center"
          },
          { // Zoom menu
            text: Math.floor(this.zoom * 100) + "%",
            title: "Zoom",
            icon: "zoom_in",
            chevron: true,
            menu: [
              ["200%", 2.0],
              ["150%", 1.5],
              ["125%", 1.25],
              ["100%", 1.0],
              ["75%", 0.75],
              ["50%", 0.5],
              ["25%", 0.25]
            ].map(([text, zoom]) => {
              return {
                text,
                active: this.zoom == zoom,
                click: () => { this.zoom = zoom; }
              }
            }),
            menu_width: 80,
            menu_height: 280,
            menu_class: "align-center"
          },
          { // Display mode menu
            title: "Display",
            icon: this.display == "horizontal" ? "view_column" : (this.display == "vertical" ? "view_stream" : "view_module"),
            chevron: true,
            menu: [{
              icon: "view_module",
              active: this.display == "grid",
              click: () => { this.display = "grid"; }
            }, {
              icon: "view_column",
              active: this.display == "horizontal",
              click: () => { this.display = "horizontal"; }
            }, {
              icon: "view_stream",
              active: this.display == "vertical",
              click: () => { this.display = "vertical"; }
            }],
            menu_width: 55,
            menu_class: "align-right"
          }
        ]
      },

      // This is the content
      content() {
        return myContent();
      },
  
      // Formats management
      current_format_name () {
        const format = this.formats.find(([, width_mm, height_mm]) => (this.page_format_mm[0] == width_mm && this.page_format_mm[1] == height_mm));
        return format ? format[0] : (this.page_format_mm[0]+"mm x "+this.page_format_mm[1]+"mm");
      },
      formats: () => [
        ["A0", 841, 1189],
        ["A0L", 1189, 841],
        ["A1", 594, 841],
        ["A1L", 841, 594],
        ["A2", 420, 594],
        ["A2L", 594, 420],
        ["A3", 297, 420],
        ["A3L", 420, 297],
        ["A4", 210, 297],
        ["A4L", 297, 210],
        ["A5", 148, 210],
        ["A5L", 210, 148],
        ["A6", 105, 148],
        ["A6L", 148, 105]
      ],
  
      // Margins management
      current_margins_name () {
        const margins = this.margins.find(([, margins]) => (this.page_margins == margins));
        return margins ? margins[0] : this.page_margins;
      },
      margins: () => [
        ["Medium", "20mm"],
        ["Small", "15mm"],
        ["Slim", "10mm 15mm"],
        ["Tiny", "5mm"]
      ],
  
      // Current text style management
      current_text_style () { return this.mounted ? this.$refs.editor.current_text_style : false; },
      isLeftAligned () { return ["start", "left", "-moz-left"].includes(this.current_text_style.textAlign); },
      isRightAligned () { return ["end", "right", "-moz-right"].includes(this.current_text_style.textAlign); },
      isCentered () { return ["center", "-moz-center"].includes(this.current_text_style.textAlign); },
      isJustified () { return ["justify", "justify-all"].includes(this.current_text_style.textAlign); },
      isBold () {
        const fontWeight = this.current_text_style.fontWeight;
        return fontWeight && (parseInt(fontWeight) > 400 || fontWeight.indexOf("bold") == 0);
      },
      isItalic () { return this.current_text_style.fontStyle == "italic"; },
      isUnderline () { // text-decoration is not overridden by children, so we query the parent stack
        const stack = this.current_text_style.textDecorationStack;
        return stack && stack.some(d => (d.indexOf("underline") == 0));
      },
      isStrikeThrough () { // text-decoration is not overridden by children, so we query the parent stack
        const stack = this.current_text_style.textDecorationStack;
        return stack && stack.some(d => (d.indexOf("line-through") == 0));
      },
      isNumberedList () { return this.current_text_style.isList && this.current_text_style.listStyleType == "decimal"; },
      isBulletedList () { return this.current_text_style.isList && ["disc", "circle"].includes(this.current_text_style.listStyleType); },
      isH1 () { return this.current_text_style.headerLevel == 1; },
      isH2 () { return this.current_text_style.headerLevel == 2; },
      isH3 () { return this.current_text_style.headerLevel == 3; },
      curColor () { return this.current_text_style.color || "transparent"; },
  
      // Platform management
      isMacLike: () => /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),
  
      // Undo / redo flags
      can_undo () { return this.undo_count > 0; },
      can_redo () { return this.content_history.length - this.undo_count - 1 > 0; }
    },
  
    methods: {
      // Page overlays (headers, footers, page numbers)
      overlay (page, total) {
        // Add page numbers on each page
        let html = '<div style="position: absolute; bottom: 8mm; ' + ((page % 2) ? 'right' : 'left') + ': 10mm">Page ' + page + ' of ' + total + '</div>';
  
        // Add custom headers and footers from page 3
        if(page >= 0) {
          html += '<div style="position: absolute; left: 0; top: 0; right: 0; padding: 3mm 5mm; background: rgba(200, 220, 240, 0.5)"><strong>MYCOMPANY</strong> example.com /// This is a custom header overlay</div>';
          html += '<div style="position: absolute; left: 10mm; right: 10mm; bottom: 5mm; text-align:center; font-size:10pt">MY COMPANY - example.com /// This is a custom footer overlay</div>';
        }
        return html;
      },
  
      // Undo / redo functions examples
      undo () { if(this.can_undo){ this._mute_next_content_watcher = true; this.content = this.content_history[--this.undo_count]; } },
      redo () { if(this.can_redo){ this._mute_next_content_watcher = true; this.content = this.content_history[++this.undo_count]; } },
      resetContentHistory () { this.content_history = []; this.undo_count = -1; },
  
      // Insert page break function example
      async insertPageBreak () {
        // insert paragraph at caret position
        document.execCommand("insertParagraph");
  
        // insert a marker at caret position (start of the new paragraph)
        const marker = "###PB###"; // must be regex compatible
        document.execCommand("insertText", false, marker);
  
        // wait for v-model content update (two ticks are needed to reactivate watch on content)
        await this.$nextTick();
        await this.$nextTick();
  
        // find the marker inside content items and split this content item in two items between the two paragraphs
        // only match root tags (p, div, h1, h2...) to avoid non-root tags like <li>
        const regexp = new RegExp("<(p|div|h\\d)( [^/>]+)*>(<[^/>]+>)*"+marker);
        for(let i = 0; i < this.content.length; i++) {
          const item = this.content[i];
          if(typeof item != "string") continue;
          const match = regexp.exec(item);
          if(match) {
            const tags_open = match[0].slice(0, -marker.length);
            let content_plus_tags_close = item.substr(match.index + match[0].length);
            // insert <br> to empty pages that would not be handled correctly by contenteditable
            if(content_plus_tags_close.indexOf("</") == 0) content_plus_tags_close = "<br>" + content_plus_tags_close;
            this.content.splice(i, 1, item.substr(0, match.index), tags_open + content_plus_tags_close);
            return;
          }
        }
  
        // if the code didn't return before, the split didn't work (e.g. inside a <li>). just remove the marker from the content
        for(let i = 0; i < this.content.length; i++) {
          const item = this.content[i];
          if(typeof item != "string" || item.indexOf(marker) < 0) continue;
          this.content.splice(i, 1, item.replace(marker, ''));
          break;
        }
      }
    },
  
    watch: {
      content: {
        immediate: true,
        // Fill undo / redo history stack on user input
        handler (new_content) {
          if(!this._mute_next_content_watcher) { // only update the stack when content is changed by user input, not undo/redo commands
            this.content_history[++this.undo_count] = new_content;
            this.content_history.length = this.undo_count + 1; // remove all redo items
          }
          this._mute_next_content_watcher = false;
        }
      }
    }
  }
  </script>
  
  <style>
  html {
    height: 100%;
  }
  body {
    margin: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: black;
    background: rgb(248, 249, 250);
  }
  ::-webkit-scrollbar {
    width: 16px;
    height: 16px;
  }
  ::-webkit-scrollbar-track, ::-webkit-scrollbar-corner {
    display: none;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
    border: 5px solid transparent;
    border-radius: 16px;
    background-clip: content-box;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  /* set 2 colums to the page that have .css-two-columns  */
  .page .css-two-columns {
    max-height: var(--page-height, 210mm);
    columns: 2;
    column-fill: auto;
  }
  </style>
  
  <style scoped>
    .main {
      width: fit-content;
      min-width: 100%;
    }
    .bar {
      position: sticky;
      left: 0;
      top: 0;
      width: calc(100vw - 16px);
      z-index: 1000;
      background: rgba(248, 249, 250, 0.8);
      border-bottom: solid 1px rgb(248, 249, 250);
      backdrop-filter: blur(10px);
      --bar-button-active-color: #188038;
      --bar-button-open-color: #188038;
      --bar-button-active-bkg: #e6f4ea;
      --bar-button-open-bkg: #e6f4ea;
    }
  </style>