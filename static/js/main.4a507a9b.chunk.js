(window["webpackJsonpreact-textarea-markdown-editor-example"]=window["webpackJsonpreact-textarea-markdown-editor-example"]||[]).push([[0],{15:function(e){e.exports=JSON.parse('{"en":{"header1":"<h1></h1>","header2":"<h2></h2>","header3":"<h3></h3>","header4":"<h4></h4>","text":"Text","table":"Table","orderedList":"Ordered List","unorderedList":"Unordered List","link":"Link","preview":"Preview","edit":"Edit","bold":"Bold","italic":"Italic","strikethrough":"Strikethrough","blockquote":"Blockquote","inlineCode":"Inline code","code":"Code","hr":"<hr />","image":"Image","youtube":"Youtube"},"zh":{"header1":"<h1></h1>","header2":"<h2></h2>","header3":"<h3></h3>","header4":"<h4></h4>","text":"\u6587\u672c","table":"\u8868\u683c","orderedList":"\u6709\u5e8f\u5217\u8868","unorderedList":"\u65e0\u5e8f\u5217\u8868","link":"\u94fe\u63a5","preview":"\u9884\u89c8","edit":"\u7f16\u8f91","bold":"\u52a0\u7c97","italic":"\u659c\u4f53","strikethrough":"\u5212\u7ebf","blockquote":"\u5f15\u7528","inlineCode":"\u5185\u7f6e\u4ee3\u7801","code":"\u4ee3\u7801","hr":"<hr />","image":"\u56fe\u7247","youtube":"Youtube"}}')},177:function(e,t,r){e.exports=r(375)},184:function(e,t,r){},185:function(e,t,r){},186:function(e,t,r){},375:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),i=r(33),o=r.n(i),l=(r(184),r(185),r(68)),s=(r(186),function(e,t){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)});var c=function(){return(c=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function u(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var a=Array(e),n=0;for(t=0;t<r;t++)for(var i=arguments[t],o=0,l=i.length;o<l;o++,n++)a[n]=i[o];return a}function m(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function d(e,t){return e(t={exports:{}},t.exports),t.exports}var p=d(function(e){!function(){var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===i)for(var l in n)t.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r}()}),h=function(e,t){return(h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};var g=function(e){function t(t){var r=e.call(this,t)||this;return r.textareaRef=Object(a.createRef)(),r.state={value:t.value||t.defaultValue},r.onChange=r.onChange.bind(r),r.onKeyDown=r.onKeyDown.bind(r),r}return function(e,t){function r(){this.constructor=e}h(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),Object.defineProperty(t.prototype,"textarea",{get:function(){return this.textareaRef.current},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"value",{get:function(){return this.textarea.value},set:function(e){this.textarea.value=e,this.onChange()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"selectedText",{get:function(){return this.textarea.value.substring(this.textarea.selectionStart,this.textarea.selectionEnd)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"selectedFromLineStart",{get:function(){var e=this.value.substring(0,this.selectionStart).lastIndexOf("\n")+1;return this.value.substring(e,this.selectionStart)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"selectionStart",{get:function(){return this.textarea.selectionStart},set:function(e){this.textarea.selectionStart=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"selectionEnd",{get:function(){return this.textarea.selectionEnd},set:function(e){this.textarea.selectionEnd=e},enumerable:!0,configurable:!0}),t.prototype.focus=function(){this.textarea.focus()},t.prototype.replaceSelectedText=function(e){var t=this.textarea.selectionStart,r=this.textarea.selectionEnd;this.replaceText({from:t,text:e,to:r}),this.onChange()},t.prototype.select=function(e){var t=e.from,r=e.to,a=e.length;this.textarea.setSelectionRange(t,r||t+(a||0))},t.prototype.putCursorTo=function(e){this.textarea.selectionEnd=e||0},t.prototype.replaceText=function(e){var t=e.text,r=e.from,a=e.to,n=this.textarea.value.substring(0,r),i=this.textarea.value.substring(a);this.textarea.value=""+n+t+i,this.textarea.selectionEnd=r+t.length,this.onChange()},t.prototype.toggleTemplate=function(e){this.focus();var t=this.selectionStart;this.selectedText===e?this.replaceSelectedText(""):(this.replaceSelectedText(e),this.select({from:t,length:e.length}))},t.prototype.toggleMultipleLineTemplate=function(e){this.focus();var t=this.selectionStart;this.selectedText===e?(this.replaceSelectedText(""),this.replaceText({from:t-1,text:"",to:e.length+2})):(this.replaceSelectedText("\n"+e+"\n"),this.select({from:t+1,length:e.length}))},t.prototype.toggleMultipleLineMarker=function(e){var t=e.prefix,r=e.suffix,a=e.defaultText;this.focus();var n=this.selectedText||a,i=this.selectionStart,o=this.selectionEnd;this.value.substr(i-t.length-1,t.length)===t&&this.value.substr(o+1,r.length)===r?(this.replaceText({from:i-t.length-2,text:n===a?"":n,to:o+r.length+2}),n!==a&&this.select({from:i-t.length-2,length:n.length})):(this.replaceSelectedText("\n"+t+"\n"+n+"\n"+r+"\n"),this.select({from:i+t.length+2,length:n.length}))},t.prototype.toggleMarker=function(e){var t=e.prefix,r=e.suffix,a=e.defaultText;this.focus();var n=this.selectedText||a,i=this.selectionStart,o=this.selectionEnd;this.value.substr(i-t.length,t.length)===t&&this.value.substr(o,r.length)===r?(this.replaceText({from:i-t.length,text:n===a?"":n,to:o+r.length}),n!==a&&this.select({from:i-t.length,length:n.length})):(this.replaceSelectedText(""+t+n+r),this.select({from:i+t.length,length:n.length}))},t.prototype.toggleLineMarker=function(e){this.focus();var t=this.value,r=this.selectionStart,a=this.selectionEnd,n=t.substring(0,r).lastIndexOf("\n")+1,i=(this.props.lineMarkers||[]).filter(function(t){return t!==e}),o=t.substring(n,a).split("\n").map(function(t){if(0===t.indexOf(e))return t.substring(e.length);var r=i.find(function(e){return 0===t.indexOf(e)});return r?e+t.substring(r.length):e+t}).join("\n");this.replaceText({from:n,text:o,to:a})},t.prototype.render=function(){var e=this.props,t=Math.max((this.state.value||"").split("\n").length,e.rows||0);return Object(a.createElement)("textarea",{id:e.id,className:e.className,ref:this.textareaRef,style:e.style,rows:t,wrap:"virtual",autoComplete:"off",defaultValue:e.defaultValue,value:e.value,onKeyPress:e.onKeyPress,onKeyDown:this.onKeyDown,onChange:this.onChange,autoFocus:e.autoFocus,placeholder:e.placeholder,onPaste:e.onPaste,onPasteCapture:e.onPasteCapture,onCopy:e.onCopy,onCopyCapture:e.onCopyCapture})},t.prototype.onChange=function(){this.props.onChange&&this.props.onChange(this.textareaRef.current),this.setState({value:this.textareaRef.current.value})},t.prototype.onKeyDown=function(e){if("Enter"===e.key){var t=this.selectedFromLineStart,r=(this.props.lineMarkers||[]).find(function(e){return t.startsWith(e)});r&&(this.replaceSelectedText("\n"+r),e.preventDefault())}else this.props.onKeyDown&&this.props.onKeyDown(e)},t.defaultProps={autoFocus:!1,className:void 0,defaultValue:void 0,id:void 0,lineMarkers:[],onChange:void 0,onKeyDown:void 0,onKeyPress:void 0,placeholder:void 0,rows:5,style:void 0,value:void 0},t}(a.Component),f=Object(a.createContext)({}),y=function(e){var t=Object(a.useContext)(f),r=t.mark,n=t.markLine,i=t.registerLineMarker,o=t.template;Object(a.useEffect)(function(){"line-marker"===s.type&&i(s.marker)});var l,s=e.config;switch(s.type){case"marker":l=function(){return r(s.prefix,s.suffix,s.defaultText||"",s.multipleLine||!1)};break;case"line-marker":l=function(){return n(s.marker)};break;case"template":l=function(){return o(s.template,s.multipleLine||!1)};break;case"component":l=void 0}return Object(a.createElement)("span",{onClick:l,className:p("tme-menu-item-inner",e.className)},s.name)},k=d(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.isClient="object"===typeof window,t.on=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return e.addEventListener.apply(e,t)},t.off=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return e.removeEventListener.apply(e,t)}});m(k);k.isClient,k.on,k.off;var x=m(d(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=["mousedown","touchstart"];t.default=function(e,t,a){void 0===a&&(a=r);var i=n.a.useRef(t);n.a.useEffect(function(){i.current=t},[t]),n.a.useEffect(function(){for(var t=function(t){var r=e.current;r&&!r.contains(t.target)&&i.current(t)},r=0,n=a;r<n.length;r++){var o=n[r];k.on(document,o,t)}return function(){for(var e=0,r=a;e<r.length;e++){var n=r[e];k.off(document,n,t)}}},[a,e])}})),M=function(e){var t=e.config,r=Object(a.useState)(!1),n=r[0],i=r[1],o=Object(a.useState)(0),l=o[0],s=o[1],c=Object(a.useContext)(f).focus,u=Object(a.useRef)(null);return x(u,function(){i(!1)}),Object(a.createElement)("li",{ref:u,className:p("tme-menu-item tme-dropdown",e.className),title:t.markers[l].title},Object(a.createElement)(y,{config:t.markers[l]}),Object(a.createElement)("span",{className:"tme-dropdown-arrow",onClick:function(){i(!n),n||c()}},Object(a.createElement)("img",{alt:"",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNy40MSA4LjU5TDEyIDEzLjE3bDQuNTktNC41OEwxOCAxMGwtNiA2LTYtNiAxLjQxLTEuNDF6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+PC9zdmc+"})),Object(a.createElement)("div",{className:p("tme-dropdown-content",{show:n})},Object(a.createElement)("ul",null,t.markers.map(function(e,t){return Object(a.createElement)("li",{className:"tme-menu-item tme-dropdown-item",key:e.key,onClick:function(){s(t),i(!1)},title:e.title},Object(a.createElement)(y,{config:e}))}))))},b={en:{header1:"<h1></h1>",header2:"<h2></h2>",header3:"<h3></h3>",orderedList:"Ordered List",unorderedList:"Unordered List",link:"Link",preview:"Preview",edit:"Edit",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",blockquote:"Blockquote",inlineCode:"Inline code",code:"Code"},zh:{header1:"<h1></h1>",header2:"<h2></h2>",header3:"<h3></h3>",orderedList:"\u6709\u5e8f\u5217\u8868",unorderedList:"\u65e0\u5e8f\u5217\u8868",link:"\u94fe\u63a5",preview:"\u9884\u89c8",edit:"\u7f16\u8f91",bold:"\u52a0\u7c97",italic:"\u659c\u4f53",strikethrough:"\u5212\u7ebf",blockquote:"\u5f15\u7528",inlineCode:"\u5185\u7f6e\u4ee3\u7801",code:"\u4ee3\u7801"}},j=function(e){var t=e.toggleEdit,r=e.isEditing,n=e.language,i=e.readOnly,o=e.markers;return o||(o=[{key:"header",markers:[{key:"header",markers:[{key:"h1",marker:"# ",name:Object(a.createElement)("b",null,"H1"),title:b[n].header1,type:"line-marker"},{key:"h2",marker:"## ",name:Object(a.createElement)("b",null,"H2"),title:b[n].header2,type:"line-marker"},{key:"h3",marker:"### ",name:Object(a.createElement)("b",null,"H3"),title:b[n].header3,type:"line-marker"}],type:"dropdown"}]},{key:"text",markers:[{key:"text",markers:[{defaultText:"bold",key:"bold",name:Object(a.createElement)("b",null,b[n].bold),prefix:"**",suffix:"**",title:b[n].bold,type:"marker"},{defaultText:"italic",key:"italic",name:Object(a.createElement)("i",null,b[n].italic),prefix:"*",suffix:"*",title:b[n].italic,type:"marker"},{defaultText:"strikethrough",key:"strikethrough",name:Object(a.createElement)("del",null,b[n].strikethrough),prefix:"~~",suffix:"~~",title:b[n].strikethrough,type:"marker"},{key:"blockquote",marker:"> ",name:b[n].blockquote,title:b[n].blockquote,type:"line-marker"},{defaultText:"inline code",key:"inline-code",name:b[n].inlineCode,prefix:"`",suffix:"`",title:b[n].inlineCode,type:"marker"},{defaultText:"code",key:"code",multipleLine:!0,name:b[n].code,prefix:"```",suffix:"```",title:b[n].code,type:"marker"}],type:"dropdown"}]},{key:"list",markers:[{key:"unordered-list",marker:"* ",name:Object(a.createElement)("img",{alt:"",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNCAxMC41Yy0uODMgMC0xLjUuNjctMS41IDEuNXMuNjcgMS41IDEuNSAxLjUgMS41LS42NyAxLjUtMS41LS42Ny0xLjUtMS41LTEuNXptMC02Yy0uODMgMC0xLjUuNjctMS41IDEuNVMzLjE3IDcuNSA0IDcuNSA1LjUgNi44MyA1LjUgNiA0LjgzIDQuNSA0IDQuNXptMCAxMmMtLjgzIDAtMS41LjY4LTEuNSAxLjVzLjY4IDEuNSAxLjUgMS41IDEuNS0uNjggMS41LTEuNS0uNjctMS41LTEuNS0xLjV6TTcgMTloMTR2LTJIN3Yyem0wLTZoMTR2LTJIN3Yyem0wLTh2MmgxNFY1SDd6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgwVjB6Ii8+PC9zdmc+"}),title:b[n].unorderedList,type:"line-marker"},{key:"ordered-list",marker:"1. ",name:Object(a.createElement)("img",{alt:"",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMiAxN2gydi41SDN2MWgxdi41SDJ2MWgzdi00SDJ2MXptMS05aDFWNEgydjFoMXYzem0tMSAzaDEuOEwyIDEzLjF2LjloM3YtMUgzLjJMNSAxMC45VjEwSDJ2MXptNS02djJoMTRWNUg3em0wIDE0aDE0di0ySDd2MnptMC02aDE0di0ySDd2MnoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PC9zdmc+"}),title:b[n].orderedList,type:"line-marker"}]},{key:"additional",markers:[{defaultText:"text",key:"link",name:Object(a.createElement)("img",{alt:"",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTMuOSAxMmMwLTEuNzEgMS4zOS0zLjEgMy4xLTMuMWg0VjdIN2MtMi43NiAwLTUgMi4yNC01IDVzMi4yNCA1IDUgNWg0di0xLjlIN2MtMS43MSAwLTMuMS0xLjM5LTMuMS0zLjF6TTggMTNoOHYtMkg4djJ6bTktNmgtNHYxLjloNGMxLjcxIDAgMy4xIDEuMzkgMy4xIDMuMXMtMS4zOSAzLjEtMy4xIDMuMWgtNFYxN2g0YzIuNzYgMCA1LTIuMjQgNS01cy0yLjI0LTUtNS01eiIvPjwvc3ZnPg=="}),prefix:"[",suffix:"](url)",title:b[n].link,type:"marker"}]}]),Object(a.createElement)("div",{className:"tme-menu"},r&&o.map(function(e){return Object(a.createElement)("ul",{key:e.key,className:"tme-menu-group left"},e.markers.map(function(e){switch(e.type){case"line-marker":case"marker":case"template":return Object(a.createElement)("li",{className:"tme-menu-item",key:e.key,title:e.title},Object(a.createElement)(y,{config:e}));case"dropdown":return Object(a.createElement)(M,{key:e.key,config:e})}}))}),Object(a.createElement)("ul",{className:"tme-menu-group right"},Object(a.createElement)("li",{className:"tme-menu-item tme-link"},Object(a.createElement)("a",{href:"https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet",target:"_blank"},Object(a.createElement)("img",{alt:"",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBkPSJNMTEgMThoMnYtMmgtMnYyem0xLTE2QzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHptMC0xNGMtMi4yMSAwLTQgMS43OS00IDRoMmMwLTEuMS45LTIgMi0yczIgLjkgMiAyYzAgMi0zIDEuNzUtMyA1aDJjMC0yLjI1IDMtMi41IDMtNSAwLTIuMjEtMS43OS00LTQtNHoiLz48L3N2Zz4="}))),!i&&Object(a.createElement)("li",{className:"tme-menu-item",onClick:function(){return t()},title:r?b[n].preview:b[n].edit},Object(a.createElement)("span",{className:"tme-menu-item-inner"},Object(a.createElement)("img",{alt:"",src:r?"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEyIDQuNUM3IDQuNSAyLjczIDcuNjEgMSAxMmMxLjczIDQuMzkgNiA3LjUgMTEgNy41czkuMjctMy4xMSAxMS03LjVjLTEuNzMtNC4zOS02LTcuNS0xMS03LjV6TTEyIDE3Yy0yLjc2IDAtNS0yLjI0LTUtNXMyLjI0LTUgNS01IDUgMi4yNCA1IDUtMi4yNCA1LTUgNXptMC04Yy0xLjY2IDAtMyAxLjM0LTMgM3MxLjM0IDMgMyAzIDMtMS4zNCAzLTMtMS4zNC0zLTMtM3oiLz48L3N2Zz4=":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMyAxNy4yNVYyMWgzLjc1TDE3LjgxIDkuOTRsLTMuNzUtMy43NUwzIDE3LjI1ek0yMC43MSA3LjA0Yy4zOS0uMzkuMzktMS4wMiAwLTEuNDFsLTIuMzQtMi4zNGMtLjM5LS4zOS0xLjAyLS4zOS0xLjQxIDBsLTEuODMgMS44MyAzLjc1IDMuNzUgMS44My0xLjgzeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4="})))))},I=function(e){function t(t){var r=e.call(this,t)||this;return r.textareaRef=Object(a.createRef)(),r.state={edit:!t.readOnly,lineMarkers:[],value:t.defaultValue},r.toggleEdit=r.toggleEdit.bind(r),r.onChange=r.onChange.bind(r),r.focus=r.focus.bind(r),r.mark=r.mark.bind(r),r.markLine=r.markLine.bind(r),r.registerLineMarker=r.registerLineMarker.bind(r),r.markTemplate=r.markTemplate.bind(r),r}return function(e,t){function r(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.focus=function(){this.textareaRef.current.focus()},t.prototype.mark=function(e,t,r,a){a?this.textareaRef.current.toggleMultipleLineMarker({prefix:e,suffix:t,defaultText:r}):this.textareaRef.current.toggleMarker({prefix:e,suffix:t,defaultText:r})},t.prototype.markLine=function(e){this.textareaRef.current.toggleLineMarker(e)},t.prototype.registerLineMarker=function(e){this.state.lineMarkers.indexOf(e)<0&&this.setState(c(c({},this.state),{lineMarkers:u(this.state.lineMarkers,[e])}))},t.prototype.markTemplate=function(e,t){t?this.textareaRef.current.toggleMultipleLineTemplate(e):this.textareaRef.current.toggleTemplate(e)},t.prototype.render=function(){var e=this.props.readOnly,t=void 0!==e&&e;return Object(a.createElement)("div",{id:this.props.id,className:p("tme-container",this.props.className),style:this.props.style},Object(a.createElement)(f.Provider,{value:{focus:this.focus,mark:this.mark,markLine:this.markLine,registerLineMarker:this.registerLineMarker,template:this.markTemplate}},Object(a.createElement)(j,{markers:this.props.markers,readOnly:t,language:this.props.language,isEditing:this.state.edit,toggleEdit:this.toggleEdit}),this.state.edit?Object(a.createElement)(g,{id:this.props.textareaId,className:"tme-textarea",ref:this.textareaRef,rows:this.props.rows,style:this.props.textareaStyle,autoFocus:this.props.autoFocus,defaultValue:this.state.value,value:this.props.value,onChange:this.onChange,onKeyDown:this.props.onKeyDown,onKeyPress:this.props.onKeyPress,lineMarkers:this.state.lineMarkers,onPaste:this.props.onPaste,onPasteCapture:this.props.onPasteCapture,onCopy:this.props.onCopy,onCopyCapture:this.props.onCopyCapture,placeholder:this.props.placeholder}):Object(a.createElement)("div",{className:"tme-viewer",dangerouslySetInnerHTML:{__html:this.textareaRef.current?this.props.doParse(this.textareaRef.current.value):""}})))},t.prototype.toggleEdit=function(){this.setState(c(c({},this.state),{edit:!this.state.edit}))},t.prototype.onChange=function(e){this.props.defaultValue&&this.setState(c(c({},this.state),{value:e.value})),this.props.onChange&&this.props.onChange(e)},t.defaultProps={language:"en",readOnly:!1,rows:5},t}(a.Component),v=r(381),L=r(382),N=r(383),S=r(187)({}).use(r(242),{youtube:{width:640,height:390},vimeo:{width:500,height:281},vine:{width:600,height:600,embed:"simple"},prezi:{width:550,height:400}}),w=r(48),E=r.n(w),D=r(49),C=r(97),T=r(168),O=r(98),z=r.n(O),A=r(15),P=r(102);var H=function(e){var t=e.language,r=void 0===t?"en":t,i=Object(a.useState)([]),o=Object(l.a)(i,2),s=o[0],c=o[1],u=Object(T.a)({noClick:!0,noKeyboard:!0,multiple:!1,accept:"image/jpeg, image/png",onDropAccepted:function(){var e=Object(C.a)(E.a.mark(function e(t){var r;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.readAsDataURL(t[0]);case 2:r=e.sent,g.current.mark("![","][image".concat(s.length+1,"]"),"alt text"),c([].concat(Object(D.a)(s),[r]));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}),m=u.getRootProps,d=u.getInputProps,p=u.open,h=u.isDragActive,g=Object(a.useRef)(null),f=[].concat(Object(D.a)(function(e){return[{key:"header",markers:[{key:"header",markers:[{key:"h1",marker:"# ",name:n.a.createElement("b",null,"H1"),title:A[e].header1,type:"line-marker"},{key:"h2",marker:"## ",name:n.a.createElement("b",null,"H2"),title:A[e].header2,type:"line-marker"},{key:"h3",marker:"### ",name:n.a.createElement("b",null,"H3"),title:A[e].header3,type:"line-marker"},{key:"h4",marker:"#### ",name:n.a.createElement("b",null,"H4"),title:A[e].header4,type:"line-marker"}],type:"dropdown"}]},{key:"text",markers:[{key:"text",markers:[{defaultText:"bold",key:"bold",name:n.a.createElement("b",null,A[e].bold),prefix:"**",suffix:"**",title:A[e].bold,type:"marker"},{defaultText:"italic",key:"italic",name:n.a.createElement("i",null,A[e].italic),prefix:"*",suffix:"*",title:A[e].italic,type:"marker"},{defaultText:"strikethrough",key:"strikethrough",name:n.a.createElement("del",null,A[e].strikethrough),prefix:"~~",suffix:"~~",title:A[e].strikethrough,type:"marker"},{key:"blockquote",marker:"> ",name:A[e].blockquote,title:A[e].blockquote,type:"line-marker"},{defaultText:"inline code",key:"inline-code",name:A[e].inlineCode,prefix:"`",suffix:"`",title:A[e].inlineCode,type:"marker"},{defaultText:"code",key:"code",multipleLine:!0,name:A[e].code,prefix:"```",suffix:"```",title:A[e].code,type:"marker"},{key:"hr",multipleLine:!0,name:n.a.createElement("hr",{style:{width:"100%"}}),template:"---",title:A[e].hr,type:"template"}],type:"dropdown"}]},{key:"list",markers:[{key:"unordered-list",marker:"* ",name:n.a.createElement(P.a,{name:"list ul",fitted:!0,size:"large"}),title:A[e].unorderedList,type:"line-marker"},{key:"ordered-list",marker:"1. ",name:n.a.createElement(P.a,{name:"list ol",fitted:!0,size:"large"}),title:A[e].orderedList,type:"line-marker"},{key:"table",multipleLine:!0,name:n.a.createElement(P.a,{name:"table",fitted:!0,size:"large"}),template:"| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |",title:A[e].table,type:"template"}]},{key:"additional",markers:[{defaultText:"text",key:"link",name:n.a.createElement(P.a,{name:"linkify",fitted:!0,size:"large"}),prefix:"[",suffix:"](url)",title:A[e].link,type:"marker"},{defaultText:"YMmdQw17TU4",key:"youtube",name:n.a.createElement(P.a,{name:"youtube play",fitted:!0,size:"large"}),prefix:"@[youtube](",suffix:")",title:A[e].youtube,type:"marker"}]}]}(r)),[{key:"images",markers:[{key:"images",markers:[{key:"open",name:n.a.createElement(P.a,{name:"image",fitted:!0,size:"large",onClick:p}),title:"Open file",type:"component"}].concat(Object(D.a)(s.map(function(e,t){return{defaultText:"alt text",key:"image".concat(t+1),name:"image".concat(t+1),prefix:"![",suffix:"][image".concat(t+1,"]"),title:"image".concat(t+1),type:"marker"}}))),type:"dropdown"}]}]);function y(){return(y=Object(C.a)(E.a.mark(function e(t){var r,a,n,i;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.clipboardData){e.next=2;break}return e.abrupt("return");case 2:if(r=t.clipboardData.items){e.next=5;break}return e.abrupt("return");case 5:a=0;case 6:if(!(a<r.length)){e.next=24;break}if(-1!==r[a].type.indexOf("image")){e.next=9;break}return e.abrupt("continue",21);case 9:if(n=r[a].getAsFile(),console.log(r[a]),!n){e.next=21;break}return t.preventDefault(),t.stopPropagation(),console.log(t.clipboardData.getData("Text")),e.next=17,z.a.readAsDataURL(n);case 17:i=e.sent,console.log(i),g.current.mark("![","][image".concat(s.length+1,"]"),"alt text"),c([].concat(Object(D.a)(s),[i]));case 21:a++,e.next=6;break;case 24:case"end":return e.stop()}},e)}))).apply(this,arguments)}return n.a.createElement("div",Object.assign({},m({className:"dropzone"}),{className:h?"dropping":""}),n.a.createElement("input",d()),n.a.createElement(I,{ref:g,markers:f,language:r,rows:10,placeholder:"You can paste or drag your image here!",doParse:function(e){return S.render("".concat(e,"\n\n").concat(s.map(function(e,t){return"[image".concat(t+1,"]: ").concat(e)}).join("\n\n")))},onPaste:function(e){return y.apply(this,arguments)}}))},R="\n# react-textarea-markdown-editor\nA highly **customizable**, **light weight** *React* markdown editor which is\n* Based on pure textarea\n* Not bundled with any markdown parser. Free free to use [markdown-it](https://www.npmjs.com/package/markdown-it), [marked](https://www.npmjs.com/package/marked) or other markdown parsers.\n* Support dropping and pasting image by customization (Please check the example)\n* Customizable menu bar\n",B=[{key:"Chinese",text:"\u7b80\u4f53\u4e2d\u6587",value:"zh"},{key:"English",text:"English",value:"en"}];var Z=function(){var e=Object(a.useState)("en"),t=Object(l.a)(e,2),r=t[0],i=t[1],o=[{menuItem:"Default",render:function(){return n.a.createElement(I,{defaultValue:R,language:r,rows:10,doParse:function(e){return S.render(e)}})}},{menuItem:"Customized",render:function(){return n.a.createElement(H,{language:r})}}];return n.a.createElement(v.a,null,n.a.createElement(L.a,{button:!0,className:"icon",floating:!0,labeled:!0,icon:"world",options:B,defaultValue:r,text:B.find(function(e){return e.value===r}).text,onChange:function(e,t){i(t.value)}}),n.a.createElement(N.a,{menu:{secondary:!0,pointing:!0},panes:o}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[177,1,2]]]);
//# sourceMappingURL=main.4a507a9b.chunk.js.map