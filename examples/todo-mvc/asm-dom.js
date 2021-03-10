!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("path"),require("fs")):"function"==typeof define&&define.amd?define(["path","fs"],t):"object"==typeof exports?exports.asmDom=t(require("path"),require("fs")):e.asmDom=t(e.path,e.fs)}(this,function(e,t){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={},o={2:0};return t.e=function(t){if(0!==o[t]){var n=require("./"+t+".asm-dom.js"),r=n.modules,i=n.ids;for(var a in r)e[a]=r[a];for(var u=0;i.length>u;u++)o[i[u]]=0}return Promise.resolve()},t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t.oe=function(e){process.nextTick(function(){throw e})},t(t.s=5)}([function(e,t,n){"use strict";t.__esModule=!0;var o={};t.default=function(e,t,n,r){var i=e.nodes[r],a=e.vnodesData[t],u=e.vnodesData[n],s=void 0!==a&&void 0!==a.raw?a.raw:o,d=void 0!==u&&void 0!==u.raw?u.raw:o;if(s!==d){for(var f in s)void 0===d[f]&&(i[f]=void 0);i.asmDomRaws={};for(var l in d)i.asmDomRaws[l]=!0,s[l]===d[l]&&("value"!==l&&"checked"!==l||i[l]===d[l])||(i[l]=d[l])}if(s=void 0!==a&&void 0!==a.events?a.events:o,d=void 0!==u&&void 0!==u.events?u.events:o,s!==d){for(var c in s)void 0===d[c]&&(i.removeEventListener(c,e.eventProxy,!1),delete i.asmDomEvents[c]);void 0===i.asmDomEvents&&(i.asmDomEvents={});for(var v in d)void 0===s[v]&&i.addEventListener(v,e.eventProxy,!1),i.asmDomEvents[v]=d[v]}s=void 0!==a&&void 0!==a.ref?a.ref:void 0,d=void 0!==u&&void 0!==u.ref?u.ref:void 0,s!==d&&(void 0!==s&&s(null),void 0!==d&&d(i))}},function(e,t,n){"use strict";t.__esModule=!0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Array.prototype.instanceofArray=!0;var r=function(e,t){for(var n=new e.VNodePtrVector,o=0;t.length>o;o++)"string"==typeof t[o]?n.push_back(e._h_ti(t[o],!0)):!1!==t[o]&&null!==t[o]&&void 0!==t[o]&&n.push_back(t[o]);return n},i=function(e,t){var n=void 0!==t.raw,o=!1,r=void 0,i=new e.MapStringString,a=void 0!==t.raw?t.raw:{},u={};"string"==typeof t.className&&i.set("class",t.className);for(var s=Object.keys(t),d=s.length;d--;){var f=s[d],l=t[f];"value"===f||"checked"===f?(a[f]=l,n=!0):"function"==typeof l?"ref"===f?r=l:(u[f.replace(/^on/,"")]=l,o=!0):!1!==l&&"raw"!==f&&"className"!==f&&i.set(f,""+l)}return{ref:r,raw:n?a:void 0,events:o?u:void 0,attrs:i}};t.default=function(e,t,n,a,u){var s=void 0,d=void 0;if(void 0===n)s=e._h_s(t);else if(void 0===a)if(!0===n.instanceofArray)s=e._h_sc(t,n=r(e,n)),n.delete();else switch(void 0===n?"undefined":o(n)){case"boolean":s=e._h_ti(t,n);break;case"string":s=e._h_st(t,n);break;case"number":s=e._h_sn(t,n);break;case"object":d=i(e,n),s=e._h_sd(t,d.attrs);break;default:throw Error("Invalid argument: ",n)}else{if(void 0!==u)throw Error("Invalid arguments provided to h function");if(d=i(e,n),!0===a.instanceofArray)s=e._h_sdc(t,d.attrs,a=r(e,a)),a.delete();else switch(void 0===a?"undefined":o(a)){case"string":s=e._h_sdt(t,d.attrs,a);break;case"number":s=e._h_sdn(t,d.attrs,a);break;default:throw Error("Invalid argument: ",a)}}return void 0!==d&&(d.attrs.delete(),void 0===d.raw&&void 0===d.events&&void 0===d.ref||(delete d.attrs,e.vnodesData[s]=d)),s}},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t,n){if(!1!==e.unsafePatch||e.currentNode===t||void 0===e.currentNode){if(t===n)return n;e.currentNode=n;var o=e.clearMemory;return"number"!=typeof t&&(o=!0,t=e.toVNode(t)),e._patch(t,n),!0===o&&setTimeout(e.deleteVNode.bind(null,t)),n}}},function(e,t,n){"use strict";t.__esModule=!0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r={attributes:!0,childElementCount:!0,children:!0,classList:!0,clientHeight:!0,clientLeft:!0,clientTop:!0,clientWidth:!0,currentStyle:!0,firstElementChild:!0,innerHTML:!0,lastElementChild:!0,nextElementSibling:!0,ongotpointercapture:!0,onlostpointercapture:!0,onwheel:!0,outerHTML:!0,previousElementSibling:!0,runtimeStyle:!0,scrollHeight:!0,scrollLeft:!0,scrollLeftMax:!0,scrollTop:!0,scrollTopMax:!0,scrollWidth:!0,tabStop:!0,tagName:!0},i={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&apos;","`":"&#96;"},a=function(e){return(e+"").replace(/[&<>"'`]/g,function(e){return i[e]})};t.appendProps=function(e,t){var n=e.vnodesData[t];if(void 0===n)return"";if(void 0===(n=n.raw))return"";var i="";for(var u in n){var s=o(n[u]);void 0===r[u]&&"function"!==s&&"undefined"!==s&&(i+=" "+u+'="'+a(n[u])+'"')}return i},t.insertInnerHTML=function(e,t){var n=e.vnodesData[t];return void 0!==n&&void 0!==n.raw&&void 0!==n.raw.innerHTML?n.raw.innerHTML+"":""},t.toHTML=function(e,t){if("number"!=typeof t)return"";var n=e._toHTML(t);return!0===e.clearMemory&&setTimeout(e.deleteVNode.bind(null,t)),n}},,function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(1),i=o(r),a=n(2),u=o(a),s=n(3),d=n(0),f=o(d);t.default=function(e){void 0===e&&(e={}),e.diff=f.default.bind(null,e),e.appendProps=s.appendProps.bind(null,e),e.insertInnerHTML=s.insertInnerHTML.bind(null,e),e.h=i.default.bind(null,e),e.patch=u.default.bind(null,e),e.reset=function(){e.currentNode=void 0,e.vnodesData={}},e.toHTML=s.toHTML.bind(null,e),e.getNode=function(t){return e.nodes[e._getNode(t)]},e.deleteVNode=function(t){e.vnodesData[t]=void 0,e._deleteVNode(t)},e.clearMemory=void 0===e.clearMemory||e.clearMemory,e.unsafePatch=void 0!==e.unsafePatch&&e.unsafePatch;var t=void 0;return t=(!0===e.useWasm||"undefined"!=typeof window&&"WebAssembly"in window||"undefined"!=typeof global&&"WebAssembly"in global)&&!0!==e.useAsmJS?new Promise(function(e){n.e(0).then(function(t){e(n(6))}.bind(null,n)).catch(n.oe)}).then(function(t){return t.default(e)}):new Promise(function(e){n.e(1).then(function(t){e(n(4))}.bind(null,n)).catch(n.oe)}),t.then(function(t){return t(e).then(function(e){return e.reset(),delete e.then,e})})}},,function(e,t){e.exports=require("path")},,function(e,t){e.exports=require("fs")}])});