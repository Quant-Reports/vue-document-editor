(function(e){function t(t){for(var i,s,o=t[0],c=t[1],u=t[2],d=0,m=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);l&&l(t);while(m.length)m.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(i=!1)}i&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},r={app:0},a=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1b19":function(e,t,n){},"1e9b":function(e,t,n){},2475:function(e,t,n){"use strict";n("f3ad")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("vue-file-toolbar-menu",{staticClass:"bar",attrs:{content:e.menu}}),n("vue-document-editor",{ref:"editor",staticClass:"editor",attrs:{content:e.content,overlay:e.overlay,zoom:e.zoom,page_format_mm:e.page_format_mm,page_margins:e.page_margins,display:e.display},on:{"update:content":function(t){e.content=t}}})],1)},a=[],s=n("1da1"),o=n("3835"),c=(n("96cf"),n("4057"),n("d81d"),n("7db0"),n("caad"),n("4d63"),n("ac1f"),n("25f0"),n("fb6a"),n("a434"),n("5319"),n("2340")),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"editor",staticClass:"editor"},[e.overlay?n("div",{staticClass:"overlays"},e._l(e.pages,(function(t,i){return n("div",{key:t.uuid+"-overlay",ref:t.uuid+"-overlay",refInFor:!0,staticClass:"overlay",style:e.page_style(i,!1),domProps:{innerHTML:e._s(e.overlay(i+1,e.pages.length))}})})),0):e._e(),n("div",{ref:"content",staticClass:"content",style:e.page_style(-1),attrs:{contenteditable:e.editable},on:{input:e.input,keyup:e.process_current_text_style}},e._l(e.pages,(function(t,i){return n("div",{key:t.uuid,ref:t.uuid,refInFor:!0,staticClass:"page",style:e.page_style(i,!t.template),attrs:{"data-content-idx":t.content_idx,"data-page-idx":i,contenteditable:!t.template}},[t.template?n(t.template,e._b({tag:"component"},"component",t.props,!1,!0)):e._e()],1)})),0)])},l=[],d=n("5530"),m=n("b85c");n("a9e3"),n("d3b7"),n("3ca3"),n("ddb0"),n("4de4"),n("a15b"),n("466d");function p(e,t){if(!e||!t)return!1;for(var n=e.childNodes,i=0;i<n.length;i++)if(n[i].s_tag==t)return n[i];return!1}function h(e,t,n,i){while(e.childNodes.length&&!n()){i=i||1!=e.childNodes.length;var r=e.lastChild;if(r.nodeType==Node.TEXT_NODE){var a=r.textContent.match(/(\s|\S+)/g),s=document.createTextNode("");t.prepend(s);for(var o=a?a.length:0,c=0;c<o;c++){if(c==o-1&&!i)return;if(r.textContent=a.slice(0,o-c-1).join(""),s.textContent=a.slice(o-c-1,o).join(""),n())return}}else if(!r.childNodes.length||r.tagName.match(/h\d/i)){if(!i)return void console.log("Move-forward: first child reached with no stop condition. Aborting");t.prepend(r)}else{var u=p(t,r.s_tag);if(!u){if(!r.s_tag){var l=Math.random().toString(36).slice(2,8);r.s_tag=l}u=r.cloneNode(!1),u.s_tag=r.s_tag,t.prepend(u)}h(r,u,n,i),u.normalize()}if(e.contains(r))if(0==r.childNodes.length||""==r.innerHTML)e.removeChild(r);else if(!n())throw console.log("sub_child:",r,"that is in child:",e),Error("Document editor is trying to remove a non-empty sub-child. This is a bug and should not happen. Please report a repeatable set of actions that leaded to this error to https://github.com/motla/vue-document-editor/issues/new")}}function f(e,t,n){while(!n()){var i=t.firstChild,r=function e(t,n){var i=p(t,n.s_tag);i&&n.childNodes.length?e(i,n.firstChild):(t.append(n),t.normalize())};r(e,i)}}var _={props:{content:{type:Array,required:!0},display:{type:String,default:"grid"},editable:{type:Boolean,default:!0},overlay:Function,page_format_mm:{type:Array,default:function(){return[210,297]}},page_margins:{type:String,default:"10mm 15mm"},zoom:{type:Number,default:1}},data:function(){return{pages:[],pages_height:0,editor_width:0,prevent_next_content_update_from_parent:!1,current_text_style:!1}},mounted:function(){this.update_editor_width(),this.update_css_media_style(),this.reset_content(),window.addEventListener("resize",this.update_editor_width),window.addEventListener("click",this.process_current_text_style),window.addEventListener("beforeprint",this.before_print),window.addEventListener("afterprint",this.after_print)},beforeDestroy:function(){window.removeEventListener("resize",this.update_editor_width),window.removeEventListener("click",this.process_current_text_style),window.removeEventListener("beforeprint",this.before_print),window.removeEventListener("afterprint",this.after_print)},computed:{css_media_style:function(){var e=document.createElement("style");return document.head.appendChild(e),e}},methods:{new_uuid:function(){return Math.random().toString(36).slice(-5)},reset_content:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,i,r,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.content.length){t.next=3;break}return e.$emit("update:content",[""]),t.abrupt("return");case 3:return e.pages=e.content.length?e.content.map((function(t,n){return{uuid:e.new_uuid(),content_idx:n,template:t.template,props:t.props}})):[{uuid:e.new_uuid(),content_idx:0}],t.next=6,e.$nextTick();case 6:n=e.$refs[e.pages[0].uuid][0],e.$refs.content.contains(n)||e.$refs.content.appendChild(n),e.pages_height=n.clientHeight+1,i=Object(m["a"])(e.pages);try{for(i.s();!(r=i.n()).done;)a=r.value,s=e.$refs[a.uuid][0],e.content[a.content_idx]?"string"==typeof e.content[a.content_idx]&&(s.innerHTML="<div>"+e.content[a.content_idx]+"</div>"):s.innerHTML="<div><br></div>",e.$refs.content.contains(s)||e.$refs.content.appendChild(s)}catch(o){i.e(o)}finally{i.f()}return t.next=13,e.fit_content_over_pages();case 13:e.$refs.content.blur();case 14:case"end":return t.stop()}}),t)})))()},fit_content_over_pages:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,i,r,a,s,o,c,u,l,d,p,_,g,v,b;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.pages_height){t.next=2;break}return t.abrupt("return");case 2:for(n=e.pages.length-1;n>=0;n--)i=e.pages[n],r=e.$refs[i.uuid]&&e.$refs[i.uuid][0],r&&document.body.contains(r)||e.pages.splice(n,1);if(e.pages.length){t.next=6;break}return e.reset_content(),t.abrupt("return");case 6:a=window.getSelection(),s=document.createElement("null"),o=document.createElement("null"),a.rangeCount&&(c=a.getRangeAt(0),c.insertNode(s),c.collapse(!1),c.insertNode(o)),u=!1,l=regeneratorRuntime.mark((function t(n){var i,r,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=e.pages[n],r=e.$refs[i.uuid][0],a=e.pages[n+1],s=a?e.$refs[a.uuid][0]:null,i.template||!(u||r.innerHTML!=i.prev_innerHTML||s&&!a.template&&s.innerHTML!=a.prev_innerHTML)){t.next=15;break}if(u=!0,r.clientHeight<=e.pages_height&&a&&a.content_idx==i.content_idx&&(f(r,s,(function(){return!s.childNodes.length||r.clientHeight>e.pages_height})),s.childNodes.length||e.pages.splice(n+1,1)),!(r.clientHeight>e.pages_height)){t.next=15;break}if(a&&a.content_idx==i.content_idx){t.next=14;break}return a={uuid:e.new_uuid(),content_idx:i.content_idx},e.pages.splice(n+1,0,a),t.next=13,e.$nextTick();case 13:s=e.$refs[a.uuid][0];case 14:h(r,s,(function(){return r.clientHeight<=e.pages_height}));case 15:case"end":return t.stop()}}),t)})),d=0;case 13:if(!(d<e.pages.length)){t.next=18;break}return t.delegateYield(l(d),"t0",15);case 15:d++,t.next=13;break;case 18:document.body.contains(s)&&(p=document.createRange(),p.setStart(s,0),document.body.contains(o)&&p.setEnd(o,0),a.removeAllRanges(),a.addRange(p)),s.parentElement&&s.parentElement.removeChild(s),o.parentElement&&o.parentElement.removeChild(o),_=Object(m["a"])(e.pages);try{for(_.s();!(g=_.n()).done;)v=g.value,b=e.$refs[v.uuid][0],b.normalize(),v.prev_innerHTML=b.innerHTML}catch(y){_.e(y)}finally{_.f()}case 23:case"end":return t.stop()}}),t)})))()},input:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,t.fit_content_over_pages();case 4:t.emit_new_content(),"insertText"!=e.inputType&&t.process_current_text_style();case 6:case"end":return n.stop()}}),n)})))()},emit_new_content:function(){var e=this,t=!1,n=this.content.map((function(n,i){var r=e.pages.filter((function(e){return e.content_idx==i}));return r.length?"string"==typeof n?r.map((function(t){var n=e.$refs[t.uuid][0];while(1==n.children.length&&n.firstChild.tagName&&"div"==n.firstChild.tagName.toLowerCase()&&!n.firstChild.getAttribute("style"))n=n.firstChild;return n.innerHTML})).join("")||!1:{template:n.template,props:Object(d["a"])({},n.props)}:(t=!0,!1)})).filter((function(e){return 0!=e}));t||(this.prevent_next_content_update_from_parent=!0),this.$emit("update:content",n)},process_current_text_style:function(){var e=!1,t=window.getSelection();if(t.focusNode){var n=t.focusNode.tagName?t.focusNode:t.focusNode.parentElement;if(n&&n.isContentEditable){e=window.getComputedStyle(n),e.textDecorationStack=[],e.headerLevel=0,e.isList=!1;var i=n;while(i){var r=window.getComputedStyle(i);if(e.textDecorationStack.push(r.textDecoration),"list-item"==r.display&&(e.isList=!0),!e.headerLevel)for(var a=1;a<=6;a++)if(i.tagName.toUpperCase()=="H"+a){e.headerLevel=a;break}i=i.parentElement}}}this.current_text_style=e},page_style:function(e,t){var n,i,r,a,s,o,c,u=.2645833333333,l=this.page_format_mm[0]/u,d=10,m=(d+this.page_format_mm[0])*this.zoom/u,p=20,h=this.editor_width-2*p,f=1;if("horizontal"==this.display)h>this.pages.length*m?(f=Math.floor(h/m),a=h/(2*f)*(1+2*e)-l/2):(f=this.pages.length,a=m*e+l/2*(this.zoom-1)),s=0,o=this.zoom*(this.page_format_mm[0]*f+(f-1)*d),c=this.page_format_mm[1]*this.zoom;else{f=Math.floor(h/m),(f<1||"vertical"==this.display)&&(f=1),n=e%f,i=h/(2*f)*(1+2*n)-l/2,r=Math.max(0,(l*this.zoom-h)/2),a=i+r,s=(this.page_format_mm[1]+d)*this.zoom*Math.floor(e/f);var _=Math.ceil(this.pages.length/f);o=this.zoom*(this.page_format_mm[0]*f+(f-1)*d),c=this.zoom*(this.page_format_mm[1]*_+(_-1)*d)}if(e>=0){var g={position:"absolute",left:"calc("+a+"px + "+p+"px)",top:"calc("+s+"mm + "+p+"px)",width:this.page_format_mm[0]+"mm",padding:this.page_margins,transform:"scale("+this.zoom+")"};return g[t?"minHeight":"height"]=this.page_format_mm[1]+"mm",g}return{width:"calc("+o+"mm + "+2*p+"px)",height:"calc("+c+"mm + "+2*p+"px)"}},update_editor_width:function(){this.$refs.editor.classList.add("hide_children"),this.editor_width=this.$refs.editor.clientWidth,this.$refs.editor.classList.remove("hide_children")},update_css_media_style:function(){this.css_media_style.innerHTML="@media print { @page { size: "+this.page_format_mm[0]+"mm "+this.page_format_mm[1]+"mm; margin: 0 !important; } }"},before_print:function(){this._page_body=document.body;var e=document.createElement("body");e.style.margin="0",e.style.padding="0",e.style.background="white";var t,n=Object(m["a"])(this.pages.entries());try{for(n.s();!(t=n.n()).done;){var i=Object(o["a"])(t.value,2),r=i[0],a=i[1],s=this.$refs[a.uuid][0],c=s.cloneNode(!0);c.style="",c.style.position="relative",c.style.padding=this.page_margins,c.style.breakBefore=r?"page":"auto";var u=this.$refs[a.uuid+"-overlay"];if(u&&u[0]){var l=u[0].cloneNode(!0);l.style.position="absolute",l.style.left="0",l.style.top="0",l.style.transform="none",l.style.padding="0",l.style.overflow="hidden",c.prepend(l)}e.append(c)}}catch(d){n.e(d)}finally{n.f()}document.body=e},after_print:function(){document.body=this._page_body,this.update_editor_width()}},watch:{page_format_mm:{handler:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.update_css_media_style(),t.next=3,e.reset_content();case 3:case"end":return t.stop()}}),t)})))()}},page_margins:{handler:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.reset_content();case 2:case"end":return t.stop()}}),t)})))()}},content:{handler:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.prevent_next_content_update_from_parent){t.next=4;break}e.prevent_next_content_update_from_parent=!1,t.next=6;break;case 4:return t.next=6,e.reset_content();case 6:case"end":return t.stop()}}),t)})))()}}}},g=_,v=(n("a766"),n("b246"),n("2877")),b=Object(v["a"])(g,u,l,!1,null,"dd9527ec",null),y=b.exports,x=function(){var e=this,t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"template"},[t._m(0),i("table",[t._m(1),i("tbody",[i("tr",[t._m(2),i("td",{staticStyle:{"min-width":"250px","text-align":"right"}},[i("div",[i("b",[t._v("Invoice number:")]),t._v(" "),i("span",{attrs:{contenteditable:""},on:{keydown:t.preventLineBreaks}},[t._v(t._s(t.invoice_number))])]),i("div",[i("b",[t._v("Invoice date:")]),t._v(" "),i("span",{attrs:{contenteditable:""},on:{keydown:t.preventLineBreaks}},[t._v(t._s(t.today))])]),i("div",[i("b",[t._v("Order number:")]),t._v(" "),i("span",{attrs:{contenteditable:""},on:{keydown:t.preventLineBreaks}},[t._v("W210984204")])]),i("div",[i("b",[t._v("Order date:")]),t._v(" "),i("span",{attrs:{contenteditable:""},on:{keydown:t.preventLineBreaks}},[t._v(t._s(t.today))])]),i("div",[i("b",[t._v("Your client number:")]),t._v(" "),i("span",{attrs:{contenteditable:""},on:{keydown:t.preventLineBreaks}},[t._v("120948")])])])])])]),i("table",{staticStyle:{margin:"10px 0 35px 0"}},[i("thead",[i("tr",[i("td",{staticStyle:{width:"50%"}},[t._v("BILLING ADDRESS")]),i("td",[t._v("SHIPPING ADDRESS "),i("label",{staticClass:"hide-in-print",staticStyle:{"margin-left":"10px"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.is_shipping_identical,expression:"is_shipping_identical"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.is_shipping_identical)?t._i(t.is_shipping_identical,null)>-1:t.is_shipping_identical},on:{change:function(e){var n=t.is_shipping_identical,i=e.target,r=!!i.checked;if(Array.isArray(n)){var a=null,s=t._i(n,a);i.checked?s<0&&(t.is_shipping_identical=n.concat([a])):s>-1&&(t.is_shipping_identical=n.slice(0,s).concat(n.slice(s+1)))}else t.is_shipping_identical=r}}}),t._v(" Identical ")])])])]),i("tbody",[i("tr",[i("td",{ref:"billing_address",attrs:{contenteditable:""},on:{input:function(t){return e.billing_address=t.target.innerHTML}}}),t.is_shipping_identical?i("td",{attrs:{contenteditable:"false"},domProps:{innerHTML:t._s(t.billing_address)}}):i("td",{attrs:{contenteditable:""}},[t._v("Insert custom shipping address")])])])]),i("h2",[t._v("Your order")]),i("table",{staticClass:"order-table",staticStyle:{"margin-top":"10px"}},[t._m(3),i("tbody",[t._l(t.items,(function(e,n){return i("tr",{key:e.key},[i("td",[i("div",{staticClass:"left-btn hide-in-print",on:{click:function(){return t.items.splice(n,1)}}},[t._v("➖")]),t._v(t._s(n+1))]),i("td",{attrs:{contenteditable:""}},[t._v(t._s(e.ref))]),i("td",{attrs:{contenteditable:""}},[t._v(t._s(e.desc))]),i("td",{staticStyle:{padding:"0","text-align":"center"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.qty,expression:"item.qty"}],staticStyle:{width:"3em"},attrs:{type:"number",min:"1"},domProps:{value:e.qty},on:{input:function(n){n.target.composing||t.$set(e,"qty",n.target.value)}}})]),i("td",{staticStyle:{padding:"0"}},[t._v("€ "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.price,expression:"item.price"}],staticStyle:{width:"4em"},attrs:{type:"number",step:"0.01"},domProps:{value:e.price},on:{input:function(n){n.target.composing||t.$set(e,"price",n.target.value)}}})]),i("td",{staticStyle:{"text-align":"right"}},[t._v("€ "+t._s((e.qty*e.price).toFixed(2)))])])})),i("tr",[i("td",[t.items.length<5?i("div",{staticClass:"left-btn hide-in-print",on:{click:function(){return t.items.push({key:Math.random(),ref:"MyRef",desc:"My description",qty:1,price:0})}}},[t._v("➕")]):t._e()]),i("td",{staticStyle:{"text-align":"right"},attrs:{colspan:"5"}},[t._v("Sub-total: € "+t._s(t.sub_total.toFixed(2)))])]),i("tr",[i("td",{staticStyle:{"text-align":"right"},attrs:{colspan:"6"}},[t._v("Taxes: "),i("span",{ref:"tax_percent",attrs:{contenteditable:""},on:{input:function(t){return e.tax_percent=parseFloat(t.target.innerText)}}}),t._v("%")])]),i("tr",[i("td",{staticStyle:{"text-align":"right"},attrs:{colspan:"6"}},[t._v("Shipping: € "),i("span",{ref:"shipping",attrs:{contenteditable:""},on:{input:function(t){return e.shipping=parseFloat(t.target.innerText)}}})])]),i("tr",[i("td",{staticStyle:{"text-align":"right","font-weight":"bold"},attrs:{colspan:"6"}},[t._v("Order total: € "+t._s(t.total.toFixed(2)))])])],2)]),i("div",{staticStyle:{"margin-bottom":"20px"}},[t._v("Thank you for your order.")]),i("div",[i("b",[t._v("Payment method:")]),t._v(" "),i("span",{attrs:{contenteditable:""},on:{keydown:t.preventLineBreaks}},[t._v("Bank transfer")])]),i("div",[i("b",[t._v("Payment term:")]),t._v(" "),i("span",{attrs:{contenteditable:""},on:{keydown:t.preventLineBreaks}},[t._v(t._s(t.next_month))])])])},w=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"header"},[i("div",[i("h1",[i("span",{staticClass:"hide-in-print"},[e._v("INTERACTIVE ")]),e._v("INVOICE")]),i("div",{staticClass:"hide-in-print",staticStyle:{"margin-bottom":"10px"}},[e._v('This page is rendered from a "template" Vue.js component.'),i("br"),e._v("You can modify the fields highlighted in green and interact with the buttons without having them in the print. Check out "),i("a",{attrs:{href:"https://github.com/motla/vue-document-editor/blob/master/src/Demo/InvoiceTemplate.vue",target:"_blank"}},[e._v("InvoiceTemplate.vue")])])]),i("div",[i("img",{staticStyle:{width:"80px"},attrs:{src:n("589f")}})])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("td",[e._v("OUR DETAILS")]),n("td",{staticStyle:{"text-align":"right"}},[e._v("INVOICE DETAILS")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("td",{attrs:{contenteditable:""}},[n("div",[n("b",[e._v("MyCompany")])]),n("div",[e._v("24 Poazkz Pazoek")]),n("div",[e._v("89232 Oijzrazro")]),n("div",[e._v("FRIGNEDRY")]),n("div",[e._v("AB251648730890")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",{staticStyle:{"font-size":"13px"}},[n("td",[e._v("ITEM #")]),n("td",[e._v("REFERENCE")]),n("td",[e._v("DESIGNATION")]),n("td",[e._v("QUANTITY")]),n("td",[e._v("UNIT PRICE")]),n("td",{staticStyle:{"text-align":"right"}},[e._v("TOTAL PRICE")])])])}],k=(n("bf19"),n("13d5"),{props:{invoice_number:String},data:function(){return{is_shipping_identical:!0,billing_address:"<b>M. John Doe</b><br>98 Ooezfjefoi Laozdij<br>09823 Ljeiznr<br>FOPKSOFOF<br>AC310592815039",items:[{key:Math.random(),ref:"X3000",desc:"My great product",qty:1,price:299}],tax_percent:20,shipping:15}},mounted:function(){this.$refs.billing_address.innerHTML=this.billing_address,this.$refs.tax_percent.innerHTML=this.tax_percent,this.$refs.shipping.innerHTML=this.shipping+".00"},computed:{today:function(){var e=new Date;return e.toJSON().slice(0,10).replace(/-/g,".")},next_month:function(){var e=new Date;return e.setDate(e.getDate()+30),e.toJSON().slice(0,10).replace(/-/g,".")},sub_total:function(){return this.items.reduce((function(e,t){return e+t.qty*t.price}),0)},total:function(){return this.sub_total*(1+this.tax_percent/100)+this.shipping}},methods:{preventLineBreaks:function(e){13==e.which&&e.preventDefault()}}}),L=k,C=(n("96c2"),Object(v["a"])(L,x,w,!1,null,"748c60ea",null)),M=C.exports,S={components:{VueDocumentEditor:y,VueFileToolbarMenu:c["a"]},data:function(){return{content:['<h1>Hello world!</h1><p>This is a rich-text editor built on top of <span contenteditable="false"><a href="https://vuejs.org/" target="_blank">Vue.js</a></span> using the native <span contenteditable="false"><a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content" target="_blank"><i>contenteditable</i></a></span> browser implementation and some JavaScript trickery to spread content over paper-sized pages.</p><p>Built-in functionality includes:</p><ul><li>Using Vue.js components as interactive page templates (see next page)</li><li>Word-by-word page splitting with forward and backward propagation (<u>still experimental</u>)</li><li>Native Print compatible</li><li>Dynamic document format and margins in millimeters</li><li>Custom page overlays (headers, footers, page numbers)</li><li>Page breaks</li><li>Smart zoom and page display modes</li><li>Computes text style at caret position</li></ul><p>This library may be useful if you design an application that generate documents and you would let the user to modify them slightly before printing / saving, but with limited / interactive possibilities. It does not intend to replace a proper document editor with full functionality.<br>Make sure this project is suitable to your needs before using it.</p><p>This demo adds:</p><ul><li>The top bar (<span contenteditable="false"><a href="https://github.com/motla/vue-file-toolbar-menu" target="_blank">vue-file-toolbar-menu</a></span> component) and the functions associated with it</li><li>Rewritten history stack (undo/redo) compatible with native commands</li><li>Pinch and trackpad zooming</li></ul><p>Check out the <span contenteditable="false"><a href="https://github.com/motla/vue-document-editor/blob/master/src/Demo/Demo.vue" target="_blank">Demo.vue</a></span> file if you need to add these functionalities to your application.</p><p>The link below is an example of non-editable block set with <code>contenteditable="false"</code>:</p><p style="text-align:center" contenteditable="false"><a href="https://github.com/motla/vue-document-editor">View docs on Github</a>, you can\'t edit me.</p><p>But you can still edit this.</p>',{template:M,props:{invoice_number:"AB38052985"}},'<br><br><h1>Headers / footers example</h1><br>Page numbers have been added on every page of this document.<br>Header and footer overlays will be added from page 3 to all subsequent ones.<br><br>Check out the <code>overlay</code> method of the <span contenteditable="false"><a href="https://github.com/motla/vue-document-editor/blob/master/src/Demo/Demo.vue" target="_blank">Demo.vue</a></span> file to customize this.','<h1>«</h1><div style="width:80%; text-align:justify; margin:auto"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.</p><p>Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue. Integer id felis. Curabitur aliquet pellentesque diam. Integer quis metus vitae elit lobortis egestas. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus, convallis id, congue eu, quam. Mauris ullamcorper felis vitae erat. Proin feugiat, augue non elementum posuere, metus purus iaculis lectus, et tristique ligula justo vitae magna.</p><p>Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo. Aliquam euismod libero eu enim. Nulla nec felis sed leo placerat imperdiet. Aenean suscipit nulla in justo. Suspendisse cursus rutrum augue. Nulla tincidunt tincidunt mi. Curabitur iaculis, lorem vel rhoncus faucibus, felis magna fermentum augue, et ultricies lacus lorem varius purus. Curabitur eu amet.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.</p><p>Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue. Integer id felis. Curabitur aliquet pellentesque diam. Integer quis metus vitae elit lobortis egestas. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus, convallis id, congue eu, quam. Mauris ullamcorper felis vitae erat. Proin feugiat, augue non elementum posuere, metus purus iaculis lectus, et tristique ligula justo vitae magna.</p><p>Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo. Aliquam euismod libero eu enim. Nulla nec felis sed leo placerat imperdiet. Aenean suscipit nulla in justo. Suspendisse cursus rutrum augue. Nulla tincidunt tincidunt mi. Curabitur iaculis, lorem vel rhoncus faucibus, felis magna fermentum augue, et ultricies lacus lorem varius purus. Curabitur eu amet.</p></div><h1 style="text-align:right">»</h1>','<h3 style="text-align:center">--- This is a page break. ---</h3>'],zoom:.8,zoom_min:.1,zoom_max:5,page_format_mm:[210,297],page_margins:"10mm 15mm",display:"grid",mounted:!1,undo_count:-1,content_history:[]}},created:function(){var e=this,t=!1,n=!1,i=!1;window.addEventListener("wheel",(function(t){t.ctrlKey&&(t.preventDefault(),e.zoom=Math.min(Math.max(e.zoom-.01*t.deltaY,e.zoom_min),e.zoom_max))}),{passive:!1}),window.addEventListener("gesturestart",(function(n){n.preventDefault(),t=e.zoom})),window.addEventListener("gesturechange",(function(n){n.preventDefault(),i||(e.zoom=Math.min(Math.max(t*n.scale,e.zoom_min),e.zoom_max))})),window.addEventListener("gestureend",(function(){t=!1})),window.addEventListener("touchstart",(function(t){2==t.touches.length&&(t.preventDefault(),n=Math.hypot(t.touches[0].pageX-t.touches[1].pageX,t.touches[0].pageY-t.touches[1].pageY),i=e.zoom)}),{passive:!1}),window.addEventListener("touchmove",(function(t){if(n&&i){t.preventDefault();var r=i*Math.hypot(t.touches[0].pageX-t.touches[1].pageX,t.touches[0].pageY-t.touches[1].pageY)/n;e.zoom=Math.min(Math.max(r,e.zoom_min),e.zoom_max)}}),{passive:!1}),window.addEventListener("touchend",(function(){n=!1,i=!1}),{passive:!1});var r=function(t){switch(t&&t.inputType){case"historyUndo":t.preventDefault(),t.stopPropagation(),e.undo();break;case"historyRedo":t.preventDefault(),t.stopPropagation(),e.redo();break}};window.addEventListener("beforeinput",r),window.addEventListener("input",r)},mounted:function(){this.mounted=!0},computed:{menu:function(){var e=this;return[{text:"New",title:"New",icon:"description",click:function(){confirm("This will create an empty document. Are you sure?")&&(e.content=[""],e.resetContentHistory())}},{text:"Print",title:"Print",icon:"print",click:function(){return window.print()}},{is:"spacer"},{title:"Undo",icon:"undo",disabled:!this.can_undo,hotkey:this.isMacLike?"command+z":"ctrl+z",click:function(){return e.undo()}},{title:"Redo",icon:"redo",disabled:!this.can_redo,hotkey:this.isMacLike?"shift+command+z":"ctrl+y",click:function(){return e.redo()}},{is:"spacer"},{icon:"format_align_left",title:"Align left",active:this.isLeftAligned,disabled:!this.current_text_style,hotkey:this.isMacLike?"shift+command+l":"ctrl+shift+l",click:function(){return document.execCommand("justifyLeft")}},{icon:"format_align_center",title:"Align center",active:this.isCentered,disabled:!this.current_text_style,hotkey:this.isMacLike?"shift+command+e":"ctrl+shift+e",click:function(){return document.execCommand("justifyCenter")}},{icon:"format_align_right",title:"Align right",active:this.isRightAligned,disabled:!this.current_text_style,hotkey:this.isMacLike?"shift+command+r":"ctrl+shift+r",click:function(){return document.execCommand("justifyRight")}},{icon:"format_align_justify",title:"Justify content",active:this.isJustified,disabled:!this.current_text_style,hotkey:this.isMacLike?"shift+command+j":"ctrl+shift+j",click:function(){return document.execCommand("justifyFull")}},{is:"separator"},{icon:"format_bold",title:"Bold",active:this.isBold,disabled:!this.current_text_style,hotkey:this.isMacLike?"command+b":"ctrl+b",click:function(){return document.execCommand("bold")}},{icon:"format_italic",title:"Italic",active:this.isItalic,disabled:!this.current_text_style,hotkey:this.isMacLike?"command+i":"ctrl+i",click:function(){return document.execCommand("italic")}},{icon:"format_underline",title:"Underline",active:this.isUnderline,disabled:!this.current_text_style,hotkey:this.isMacLike?"command+u":"ctrl+u",click:function(){return document.execCommand("underline")}},{icon:"format_strikethrough",title:"Strike through",active:this.isStrikeThrough,disabled:!this.current_text_style,click:function(){return document.execCommand("strikethrough")}},{is:"button-color",type:"compact",menu_class:"align-center",disabled:!this.current_text_style,color:this.curColor,update_color:function(e){return document.execCommand("foreColor",!1,e.hex8)}},{is:"separator"},{icon:"format_list_numbered",title:"Numbered list",active:this.isNumberedList,disabled:!this.current_text_style,click:function(){return document.execCommand("insertOrderedList")}},{icon:"format_list_bulleted",title:"Bulleted list",active:this.isBulletedList,disabled:!this.current_text_style,click:function(){return document.execCommand("insertUnorderedList")}},{html:"<b>H1</b>",title:"Header 1",active:this.isH1,disabled:!this.current_text_style,click:function(){return document.execCommand("formatBlock",!1,"<h1>")}},{html:"<b>H2</b>",title:"Header 2",active:this.isH2,disabled:!this.current_text_style,click:function(){return document.execCommand("formatBlock",!1,"<h2>")}},{html:"<b>H3</b>",title:"Header 3",active:this.isH3,disabled:!this.current_text_style,click:function(){return document.execCommand("formatBlock",!1,"<h3>")}},{icon:"format_clear",title:"Clear format",disabled:!this.current_text_style,click:function(){document.execCommand("removeFormat"),document.execCommand("formatBlock",!1,"<div>")}},{icon:"splitscreen",title:"Page break",disabled:!this.current_text_style,click:function(){return e.insertPageBreak()}},{is:"spacer"},{text:this.current_format_name,title:"Format",icon:"crop_free",chevron:!0,menu:this.formats.map((function(t){var n=Object(o["a"])(t,3),i=n[0],r=n[1],a=n[2];return{text:i,active:e.page_format_mm[0]==r&&e.page_format_mm[1]==a,click:function(){e.page_format_mm=[r,a]}}})),menu_width:80,menu_height:280},{text:this.current_margins_name,title:"Margins",icon:"select_all",chevron:!0,menu:this.margins.map((function(t){var n=Object(o["a"])(t,2),i=n[0],r=n[1];return{text:i+" ("+r+")",active:e.page_margins==r,click:function(){e.page_margins=r}}})),menu_width:200,menu_class:"align-center"},{text:Math.floor(100*this.zoom)+"%",title:"Zoom",icon:"zoom_in",chevron:!0,menu:[["200%",2],["150%",1.5],["125%",1.25],["100%",1],["75%",.75],["50%",.5],["25%",.25]].map((function(t){var n=Object(o["a"])(t,2),i=n[0],r=n[1];return{text:i,active:e.zoom==r,click:function(){e.zoom=r}}})),menu_width:80,menu_height:280,menu_class:"align-center"},{title:"Display",icon:"horizontal"==this.display?"view_column":"vertical"==this.display?"view_stream":"view_module",chevron:!0,menu:[{icon:"view_module",active:"grid"==this.display,click:function(){e.display="grid"}},{icon:"view_column",active:"horizontal"==this.display,click:function(){e.display="horizontal"}},{icon:"view_stream",active:"vertical"==this.display,click:function(){e.display="vertical"}}],menu_width:55,menu_class:"align-right"}]},current_format_name:function(){var e=this,t=this.formats.find((function(t){var n=Object(o["a"])(t,3),i=n[1],r=n[2];return e.page_format_mm[0]==i&&e.page_format_mm[1]==r}));return t?t[0]:this.page_format_mm[0]+"mm x "+this.page_format_mm[1]+"mm"},formats:function(){return[["A0",841,1189],["A0L",1189,841],["A1",594,841],["A1L",841,594],["A2",420,594],["A2L",594,420],["A3",297,420],["A3L",420,297],["A4",210,297],["A4L",297,210],["A5",148,210],["A5L",210,148],["A6",105,148],["A6L",148,105]]},current_margins_name:function(){var e=this,t=this.margins.find((function(t){var n=Object(o["a"])(t,2),i=n[1];return e.page_margins==i}));return t?t[0]:t[1]},margins:function(){return[["Medium","20mm"],["Small","15mm"],["Slim","10mm 15mm"],["Tiny","5mm"]]},current_text_style:function(){return!!this.mounted&&this.$refs.editor.current_text_style},isLeftAligned:function(){return["start","left","-moz-left"].includes(this.current_text_style.textAlign)},isRightAligned:function(){return["end","right","-moz-right"].includes(this.current_text_style.textAlign)},isCentered:function(){return["center","-moz-center"].includes(this.current_text_style.textAlign)},isJustified:function(){return["justify","justify-all"].includes(this.current_text_style.textAlign)},isBold:function(){var e=this.current_text_style.fontWeight;return e&&(parseInt(e)>400||0==e.indexOf("bold"))},isItalic:function(){return"italic"==this.current_text_style.fontStyle},isUnderline:function(){var e=this.current_text_style.textDecorationStack;return e&&e.some((function(e){return 0==e.indexOf("underline")}))},isStrikeThrough:function(){var e=this.current_text_style.textDecorationStack;return e&&e.some((function(e){return 0==e.indexOf("line-through")}))},isNumberedList:function(){return this.current_text_style.isList&&"decimal"==this.current_text_style.listStyleType},isBulletedList:function(){return this.current_text_style.isList&&["disc","circle"].includes(this.current_text_style.listStyleType)},isH1:function(){return 1==this.current_text_style.headerLevel},isH2:function(){return 2==this.current_text_style.headerLevel},isH3:function(){return 3==this.current_text_style.headerLevel},curColor:function(){return this.current_text_style.color||"transparent"},isMacLike:function(){return/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)},can_undo:function(){return this.undo_count>0},can_redo:function(){return this.content_history.length-this.undo_count-1>0}},methods:{overlay:function(e,t){var n='<div style="position: absolute; bottom: 8mm; '+(e%2?"right":"left")+': 10mm">Page '+e+" of "+t+"</div>";return e>=3&&(n+='<div style="position: absolute; left: 0; top: 0; right: 0; padding: 3mm 5mm; background: rgba(200, 220, 240, 0.5)"><strong>MYCOMPANY</strong> example.com /// This is a custom header overlay</div>',n+='<div style="position: absolute; left: 10mm; right: 10mm; bottom: 5mm; text-align:center; font-size:10pt">Copyright (c) 2020 Romain Lamothe, MIT License /// This is a custom footer overlay</div>'),n},undo:function(){this.can_undo&&(this._mute_next_content_watcher=!0,this.content=this.content_history[--this.undo_count])},redo:function(){this.can_redo&&(this._mute_next_content_watcher=!0,this.content=this.content_history[++this.undo_count])},resetContentHistory:function(){this.content_history=[],this.undo_count=-1},insertPageBreak:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,i,r,a,s,o,c,u,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return document.execCommand("insertParagraph"),n="###PB###",document.execCommand("insertText",!1,n),t.next=5,e.$nextTick();case 5:i=new RegExp("<(p|div|h\\d)( [^/>]+)*>(<[^/>]+>)*"+n),r=0;case 7:if(!(r<e.content.length)){t.next=21;break}if(a=e.content[r],"string"==typeof a){t.next=11;break}return t.abrupt("continue",18);case 11:if(s=i.exec(a),!s){t.next=18;break}return o=s[0].slice(0,-n.length),c=a.substr(s.index+s[0].length),0==c.indexOf("</")&&(c="<br>"+c),e.content.splice(r,1,a.substr(0,s.index),o+c),t.abrupt("return");case 18:r++,t.next=7;break;case 21:u=0;case 22:if(!(u<e.content.length)){t.next=31;break}if(l=e.content[u],!("string"!=typeof l||l.indexOf(n)<0)){t.next=26;break}return t.abrupt("continue",28);case 26:return e.content.splice(u,1,l.replace(n,"")),t.abrupt("break",31);case 28:u++,t.next=22;break;case 31:case"end":return t.stop()}}),t)})))()}},watch:{content:{immediate:!0,handler:function(e){this._mute_next_content_watcher||(this.content_history[++this.undo_count]=e,this.content_history.length=this.undo_count+1),this._mute_next_content_watcher=!1}}}},T=S,z=(n("bfab"),n("2475"),Object(v["a"])(T,r,a,!1,null,"381d42bf",null)),E=z.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(E)}}).$mount("#app")},"589f":function(e,t,n){e.exports=n.p+"img/vue-logo.82b9c7a5.png"},"96c2":function(e,t,n){"use strict";n("fa9a")},"9db8":function(e,t,n){},a766:function(e,t,n){"use strict";n("1b19")},b246:function(e,t,n){"use strict";n("9db8")},bfab:function(e,t,n){"use strict";n("1e9b")},f3ad:function(e,t,n){},fa9a:function(e,t,n){}});
//# sourceMappingURL=app.1253cf35.js.map