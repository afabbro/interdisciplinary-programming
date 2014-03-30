/* http://mozilla.github.io/brick/download.html?byob=x-tag-core,x-tag-appbar,x-tag-layout */ 
window.Platform={};var logFlags={};(function(){function e(e){if(this._element=e,e.className!=this._classCache){if(this._classCache=e.className,!this._classCache)return;var t,n=this._classCache.replace(/^\s+|\s+$/g,"").split(/\s+/);for(t=0;n.length>t;t++)i.call(this,n[t])}}function t(e,t){e.className=t.join(" ")}function n(e,t,n){Object.defineProperty?Object.defineProperty(e,t,{get:n}):e.__defineGetter__(t,n)}if(!(window.Element===void 0||"classList"in document.documentElement)){var r=Array.prototype,o=r.indexOf,a=r.slice,i=r.push,s=r.splice,c=r.join;e.prototype={add:function(e){this.contains(e)||(i.call(this,e),t(this._element,a.call(this,0)))},contains:function(e){return-1!==o.call(this,e)},item:function(e){return this[e]||null},remove:function(e){var n=o.call(this,e);-1!==n&&(s.call(this,n,1),t(this._element,a.call(this,0)))},toString:function(){return c.call(this," ")},toggle:function(e){-1===o.call(this,e)?this.add(e):this.remove(e)}},window.DOMTokenList=e,n(Element.prototype,"classList",function(){return new e(this)})}})(),"undefined"==typeof WeakMap&&function(){var e=Object.defineProperty,t=Date.now()%1e9,n=function(){this.name="__st"+(1e9*Math.random()>>>0)+(t++ +"__")};n.prototype={set:function(t,n){var r=t[this.name];r&&r[0]===t?r[1]=n:e(t,this.name,{value:[t,n],writable:!0})},get:function(e){var t;return(t=e[this.name])&&t[0]===e?t[1]:void 0},"delete":function(e){this.set(e,void 0)}},window.WeakMap=n}(),function(e){function t(e){y.push(e),b||(b=!0,m(r))}function n(e){return window.ShadowDOMPolyfill&&window.ShadowDOMPolyfill.wrapIfNeeded(e)||e}function r(){b=!1;var e=y;y=[],e.sort(function(e,t){return e.uid_-t.uid_});var t=!1;e.forEach(function(e){var n=e.takeRecords();o(e),n.length&&(e.callback_(n,e),t=!0)}),t&&r()}function o(e){e.nodes_.forEach(function(t){var n=h.get(t);n&&n.forEach(function(t){t.observer===e&&t.removeTransientObservers()})})}function a(e,t){for(var n=e;n;n=n.parentNode){var r=h.get(n);if(r)for(var o=0;r.length>o;o++){var a=r[o],i=a.options;if(n===e||i.subtree){var s=t(i);s&&a.enqueue(s)}}}}function i(e){this.callback_=e,this.nodes_=[],this.records_=[],this.uid_=++E}function s(e,t){this.type=e,this.target=t,this.addedNodes=[],this.removedNodes=[],this.previousSibling=null,this.nextSibling=null,this.attributeName=null,this.attributeNamespace=null,this.oldValue=null}function c(e){var t=new s(e.type,e.target);return t.addedNodes=e.addedNodes.slice(),t.removedNodes=e.removedNodes.slice(),t.previousSibling=e.previousSibling,t.nextSibling=e.nextSibling,t.attributeName=e.attributeName,t.attributeNamespace=e.attributeNamespace,t.oldValue=e.oldValue,t}function u(e,t){return w=new s(e,t)}function d(e){return O?O:(O=c(w),O.oldValue=e,O)}function l(){w=O=void 0}function f(e){return e===O||e===w}function p(e,t){return e===t?e:O&&f(e)?O:null}function v(e,t,n){this.observer=e,this.target=t,this.options=n,this.transientObservedNodes=[]}var h=new WeakMap,m=window.msSetImmediate;if(!m){var _=[],g=Math.random()+"";window.addEventListener("message",function(e){if(e.data===g){var t=_;_=[],t.forEach(function(e){e()})}}),m=function(e){_.push(e),window.postMessage(g,"*")}}var b=!1,y=[],E=0;i.prototype={observe:function(e,t){if(e=n(e),!t.childList&&!t.attributes&&!t.characterData||t.attributeOldValue&&!t.attributes||t.attributeFilter&&t.attributeFilter.length&&!t.attributes||t.characterDataOldValue&&!t.characterData)throw new SyntaxError;var r=h.get(e);r||h.set(e,r=[]);for(var o,a=0;r.length>a;a++)if(r[a].observer===this){o=r[a],o.removeListeners(),o.options=t;break}o||(o=new v(this,e,t),r.push(o),this.nodes_.push(e)),o.addListeners()},disconnect:function(){this.nodes_.forEach(function(e){for(var t=h.get(e),n=0;t.length>n;n++){var r=t[n];if(r.observer===this){r.removeListeners(),t.splice(n,1);break}}},this),this.records_=[]},takeRecords:function(){var e=this.records_;return this.records_=[],e}};var w,O;v.prototype={enqueue:function(e){var n=this.observer.records_,r=n.length;if(n.length>0){var o=n[r-1],a=p(o,e);if(a)return n[r-1]=a,void 0}else t(this.observer);n[r]=e},addListeners:function(){this.addListeners_(this.target)},addListeners_:function(e){var t=this.options;t.attributes&&e.addEventListener("DOMAttrModified",this,!0),t.characterData&&e.addEventListener("DOMCharacterDataModified",this,!0),t.childList&&e.addEventListener("DOMNodeInserted",this,!0),(t.childList||t.subtree)&&e.addEventListener("DOMNodeRemoved",this,!0)},removeListeners:function(){this.removeListeners_(this.target)},removeListeners_:function(e){var t=this.options;t.attributes&&e.removeEventListener("DOMAttrModified",this,!0),t.characterData&&e.removeEventListener("DOMCharacterDataModified",this,!0),t.childList&&e.removeEventListener("DOMNodeInserted",this,!0),(t.childList||t.subtree)&&e.removeEventListener("DOMNodeRemoved",this,!0)},addTransientObserver:function(e){if(e!==this.target){this.addListeners_(e),this.transientObservedNodes.push(e);var t=h.get(e);t||h.set(e,t=[]),t.push(this)}},removeTransientObservers:function(){var e=this.transientObservedNodes;this.transientObservedNodes=[],e.forEach(function(e){this.removeListeners_(e);for(var t=h.get(e),n=0;t.length>n;n++)if(t[n]===this){t.splice(n,1);break}},this)},handleEvent:function(e){switch(e.stopImmediatePropagation(),e.type){case"DOMAttrModified":var t=e.attrName,n=e.relatedNode.namespaceURI,r=e.target,o=new u("attributes",r);o.attributeName=t,o.attributeNamespace=n;var i=e.attrChange===MutationEvent.ADDITION?null:e.prevValue;a(r,function(e){return!e.attributes||e.attributeFilter&&e.attributeFilter.length&&-1===e.attributeFilter.indexOf(t)&&-1===e.attributeFilter.indexOf(n)?void 0:e.attributeOldValue?d(i):o});break;case"DOMCharacterDataModified":var r=e.target,o=u("characterData",r),i=e.prevValue;a(r,function(e){return e.characterData?e.characterDataOldValue?d(i):o:void 0});break;case"DOMNodeRemoved":this.addTransientObserver(e.target);case"DOMNodeInserted":var s,c,r=e.relatedNode,f=e.target;"DOMNodeInserted"===e.type?(s=[f],c=[]):(s=[],c=[f]);var p=f.previousSibling,v=f.nextSibling,o=u("childList",r);o.addedNodes=s,o.removedNodes=c,o.previousSibling=p,o.nextSibling=v,a(r,function(e){return e.childList?o:void 0})}l()}},e.JsMutationObserver=i,!e.MutationObserver&&e.WebKitMutationObserver&&(e.MutationObserver=e.WebKitMutationObserver),e.MutationObserver||(e.MutationObserver=i)}(this),function(e){function t(t,a){var i=a||{};if(!t)throw Error("document.registerElement: first argument `name` must not be empty");if(0>t.indexOf("-"))throw Error("document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '"+(t+"")+"'.");if(f(t))throw Error("DuplicateDefinitionError: a type with name '"+(t+"")+"' is already registered");if(!i.prototype)throw Error("Options missing required prototype property");return i.__name=t.toLowerCase(),i.lifecycle=i.lifecycle||{},i.ancestry=n(i.extends),r(i),o(i),d(i.prototype),p(i.__name,i),i.ctor=v(i),i.ctor.prototype=i.prototype,i.prototype.constructor=i.ctor,e.ready&&e.upgradeAll(document),i.ctor}function n(e){var t=f(e);return t?n(t.extends).concat([t]):[]}function r(e){for(var t,n=e.extends,r=0;t=e.ancestry[r];r++)n=t.is&&t.tag;e.tag=n||e.__name,n&&(e.is=e.__name)}function o(e){if(!Object.__proto__){var t=HTMLElement.prototype;if(e.is){var n=document.createElement(e.tag);t=Object.getPrototypeOf(n)}for(var r,o=e.prototype;o&&o!==t;){var r=Object.getPrototypeOf(o);o.__proto__=r,o=r}}e.native=t}function a(e){return i(O(e.tag),e)}function i(t,n){return n.is&&t.setAttribute("is",n.is),t.removeAttribute("unresolved"),s(t,n),t.__upgraded__=!0,e.upgradeSubtree(t),u(t),t}function s(e,t){Object.__proto__?e.__proto__=t.prototype:(c(e,t.prototype,t.native),e.__proto__=t.prototype)}function c(e,t,n){for(var r={},o=t;o!==n&&o!==HTMLUnknownElement.prototype;){for(var a,i=Object.getOwnPropertyNames(o),s=0;a=i[s];s++)r[a]||(Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a)),r[a]=1);o=Object.getPrototypeOf(o)}}function u(e){e.createdCallback&&e.createdCallback()}function d(e){if(!e.setAttribute._polyfilled){var t=e.setAttribute;e.setAttribute=function(e,n){l.call(this,e,n,t)};var n=e.removeAttribute;e.removeAttribute=function(e){l.call(this,e,null,n)},e.setAttribute._polyfilled=!0}}function l(e,t,n){var r=this.getAttribute(e);n.apply(this,arguments);var o=this.getAttribute(e);this.attributeChangedCallback&&o!==r&&this.attributeChangedCallback(e,r,o)}function f(e){return e?w[e.toLowerCase()]:void 0}function p(e,t){w[e]=t}function v(e){return function(){return a(e)}}function h(e,t){var n=f(t||e);return n?new n.ctor:O(e)}function m(e){if(!e.__upgraded__&&e.nodeType===Node.ELEMENT_NODE){var t=e.getAttribute("is")||e.localName,n=f(t);return n&&i(e,n)}}function _(t){var n=N.call(this,t);return e.upgradeAll(n),n}e||(e=window.CustomElements={flags:{}});var g=e.flags,b=Boolean(document.registerElement),y=!g.register&&b;if(y){var E=function(){};e.registry={},e.upgradeElement=E,e.watchShadow=E,e.upgrade=E,e.upgradeAll=E,e.upgradeSubtree=E,e.observeDocument=E,e.upgradeDocument=E,e.takeRecords=E}else{var w={},O=document.createElement.bind(document),N=Node.prototype.cloneNode;document.registerElement=t,document.createElement=h,Node.prototype.cloneNode=_,e.registry=w,e.upgrade=m}document.register=document.registerElement,e.hasNative=b,e.useNative=y}(window.CustomElements),function(e){function t(e,n,r){var o=e.firstElementChild;if(!o)for(o=e.firstChild;o&&o.nodeType!==Node.ELEMENT_NODE;)o=o.nextSibling;for(;o;)n(o,r)!==!0&&t(o,n,r),o=o.nextElementSibling;return null}function n(e,t){for(var n=e.shadowRoot;n;)r(n,t),n=n.olderShadowRoot}function r(e,r){t(e,function(e){return r(e)?!0:(n(e,r),void 0)}),n(e,r)}function o(e){return s(e)?(c(e),!0):(l(e),void 0)}function a(e){r(e,function(e){return o(e)?!0:void 0})}function i(e){return o(e)||a(e)}function s(t){if(!t.__upgraded__&&t.nodeType===Node.ELEMENT_NODE){var n=t.getAttribute("is")||t.localName,r=e.registry[n];if(r)return N.dom&&console.group("upgrade:",t.localName),e.upgrade(t),N.dom&&console.groupEnd(),!0}}function c(e){l(e),m(e)&&r(e,function(e){l(e)})}function u(e){if(C.push(e),!k){k=!0;var t=window.Platform&&window.Platform.endOfMicrotask||setTimeout;t(d)}}function d(){k=!1;for(var e,t=C,n=0,r=t.length;r>n&&(e=t[n]);n++)e();C=[]}function l(e){L?u(function(){f(e)}):f(e)}function f(e){(e.attachedCallback||e.detachedCallback||e.__upgraded__&&N.dom)&&(N.dom&&console.group("inserted:",e.localName),m(e)&&(e.__inserted=(e.__inserted||0)+1,1>e.__inserted&&(e.__inserted=1),e.__inserted>1?N.dom&&console.warn("inserted:",e.localName,"insert/remove count:",e.__inserted):e.attachedCallback&&(N.dom&&console.log("inserted:",e.localName),e.attachedCallback())),N.dom&&console.groupEnd())}function p(e){v(e),r(e,function(e){v(e)})}function v(e){L?u(function(){h(e)}):h(e)}function h(e){(e.attachedCallback||e.detachedCallback||e.__upgraded__&&N.dom)&&(N.dom&&console.group("removed:",e.localName),m(e)||(e.__inserted=(e.__inserted||0)-1,e.__inserted>0&&(e.__inserted=0),0>e.__inserted?N.dom&&console.warn("removed:",e.localName,"insert/remove count:",e.__inserted):e.detachedCallback&&e.detachedCallback()),N.dom&&console.groupEnd())}function m(e){for(var t=e,n=window.ShadowDOMPolyfill&&window.ShadowDOMPolyfill.wrapIfNeeded(document)||document;t;){if(t==n)return!0;t=t.parentNode||t.host}}function _(e){if(e.shadowRoot&&!e.shadowRoot.__watched){N.dom&&console.log("watching shadow-root for: ",e.localName);for(var t=e.shadowRoot;t;)g(t),t=t.olderShadowRoot}}function g(e){e.__watched||(E(e),e.__watched=!0)}function b(e){if(N.dom){var t=e[0];if(t&&"childList"===t.type&&t.addedNodes&&t.addedNodes){for(var n=t.addedNodes[0];n&&n!==document&&!n.host;)n=n.parentNode;var r=n&&(n.URL||n._URL||n.host&&n.host.localName)||"";r=r.split("/?").shift().split("/").pop()}console.group("mutations (%d) [%s]",e.length,r||"")}e.forEach(function(e){"childList"===e.type&&(A(e.addedNodes,function(e){e.localName&&i(e)}),A(e.removedNodes,function(e){e.localName&&p(e)}))}),N.dom&&console.groupEnd()}function y(){b(M.takeRecords()),d()}function E(e){M.observe(e,{childList:!0,subtree:!0})}function w(e){E(e)}function O(e){N.dom&&console.group("upgradeDocument: ",(e.URL||e._URL||"").split("/").pop()),i(e),N.dom&&console.groupEnd()}var N=window.logFlags||{},L=!window.MutationObserver||window.MutationObserver===window.JsMutationObserver;e.hasPolyfillMutations=L;var k=!1,C=[],M=new MutationObserver(b),A=Array.prototype.forEach.call.bind(Array.prototype.forEach);e.watchShadow=_,e.upgradeAll=i,e.upgradeSubtree=a,e.observeDocument=w,e.upgradeDocument=O,e.takeRecords=y}(window.CustomElements),function(){function e(e){return"link"===e.localName&&e.getAttribute("rel")===t}var t=window.HTMLImports?HTMLImports.IMPORT_LINK_TYPE:"none",n={selectors:["link[rel="+t+"]"],map:{link:"parseLink"},parse:function(e){if(!e.__parsed){e.__parsed=!0;var t=e.querySelectorAll(n.selectors);r(t,function(e){n[n.map[e.localName]](e)}),CustomElements.upgradeDocument(e),CustomElements.observeDocument(e)}},parseLink:function(t){e(t)&&this.parseImport(t)},parseImport:function(e){e.content&&n.parse(e.content)}},r=Array.prototype.forEach.call.bind(Array.prototype.forEach);CustomElements.parser=n}(),function(e){function t(){CustomElements.parser.parse(document),CustomElements.upgradeDocument(document);var e=window.Platform&&Platform.endOfMicrotask?Platform.endOfMicrotask:setTimeout;e(function(){CustomElements.ready=!0,CustomElements.readyTime=Date.now(),window.HTMLImports&&(CustomElements.elapsed=CustomElements.readyTime-HTMLImports.readyTime),document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))})}if("function"!=typeof window.CustomEvent&&(window.CustomEvent=function(e){var t=document.createEvent("HTMLEvents");return t.initEvent(e,!0,!0),t}),"complete"===document.readyState||e.flags.eager)t();else if("interactive"!==document.readyState||window.attachEvent||window.HTMLImports&&!window.HTMLImports.ready){var n=window.HTMLImports&&!HTMLImports.ready?"HTMLImportsLoaded":"DOMContentLoaded";window.addEventListener(n,t)}else t()}(window.CustomElements),function(){function e(e){var t=I.call(e);return R[t]||(R[t]=t.match(F)[1].toLowerCase())}function t(n,r){var o=t[r||e(n)];return o?o(n):n}function n(t){return-1==H.indexOf(e(t))?Array.prototype.slice.call(t,0):[t]}function r(e,t){return(t||q).length?n(e.querySelectorAll(t)):[]}function o(e,t){var n={added:[],removed:[]};t.forEach(function(t){t._mutation=!0;for(var r in n)for(var o=e._records["added"==r?"inserted":"removed"],a=t[r+"Nodes"],i=a.length,s=0;i>s&&-1==n[r].indexOf(a[s]);s++)n[r].push(a[s]),o.forEach(function(e){e(a[s],t)})})}function a(n,r,o){var a=e(o);return"object"==a&&"object"==e(n[r])?B.merge(n[r],o):n[r]=t(o,a),n}function i(e,t,n,r,o){var a=o[t];t in o?"function"==typeof o[t]&&(a.__mixins__||(a.__mixins__=[]),a.__mixins__.push(B.applyPseudos(n,r,e.pseudos))):o[t]=r}function s(e,t,n,r){if(r){var o={};for(var a in n)o[a.split(":")[0]]=a;for(a in t)i(e,o[a.split(":")[0]]||a,a,t[a],n)}else for(var s in t)n[s+":__mixin__("+V++ +")"]=B.applyPseudos(s,t[s],e.pseudos)}function c(e){return e.mixins.forEach(function(t){var n=B.mixins[t];for(var r in n){var o=n[r],a=e[r];if(a)switch(r){case"accessors":case"prototype":for(var i in o)a[i]?s(e,o[i],a[i],!0):a[i]=o[i];break;default:s(e,o,a,"events"!=r)}else e[r]=o}}),e}function u(e,t){var n,r=t.target;if(!r.tagName)return null;if(B.matchSelector(r,e.value))n=r;else if(B.matchSelector(r,e.value+" *"))for(var o=r.parentNode;!n;)B.matchSelector(o,e.value)&&(n=o),o=o.parentNode;return n?e.listener=e.listener.bind(n):null}function d(e){if(e.type.match("touch"))e.target.__touched__=!0;else if(e.target.__touched__&&e.type.match("mouse"))return delete e.target.__touched__,void 0;return!0}function l(e){var t="over"==e;return{attach:"OverflowEvent"in N?"overflowchanged":[],condition:function(n){return n.flow=e,n.type==e+"flow"||0===n.orient&&n.horizontalOverflow==t||1==n.orient&&n.verticalOverflow==t||2==n.orient&&n.horizontalOverflow==t&&n.verticalOverflow==t}}}function f(e,t,n,r){r?t[e]=n[e]:Object.defineProperty(t,e,{writable:!0,enumerable:!0,value:n[e]})}function p(e,t){var n=Object.getOwnPropertyDescriptor(e,"target");for(var r in t)U[r]||f(r,e,t,n);e.baseEvent=t}function v(e,t){return{value:e.boolean?"":t,method:e.boolean&&!t?"removeAttribute":"setAttribute"}}function h(e,t,n,r){var o=v(t,r);e[o.method](n,o.value)}function m(e,t,n,r,o){for(var a=t.property?[e.xtag[t.property]]:t.selector?B.query(e,t.selector):[],i=a.length;i--;)a[i][o](n,r)}function _(e,t,n){e.__view__&&e.__view__.updateBindingValue(e,t,n)}function g(e,t,n,r,o,a){var i=n.split(":"),s=i[0];if("get"==s)i[0]=t,e.prototype[t].get=B.applyPseudos(i.join(":"),r[n],e.pseudos,r[n]);else if("set"==s){i[0]=t;var c=e.prototype[t].set=B.applyPseudos(i.join(":"),o?function(e){this.xtag._skipSet=!0,this.xtag._skipAttr||h(this,o,a,e),this.xtag._skipAttr&&o.skip&&delete this.xtag._skipAttr,r[n].call(this,o.boolean?!!e:e),_(this,a,e),delete this.xtag._skipSet}:r[n]?function(e){r[n].call(this,e),_(this,a,e)}:null,e.pseudos,r[n]);o&&(o.setter=c)}else e.prototype[t][n]=r[n]}function b(e,t){e.prototype[t]={};var n=e.accessors[t],r=n.attribute,o=r&&r.name?r.name.toLowerCase():t;r&&(r.key=t,e.attributes[o]=r);for(var a in n)g(e,t,a,n,r,o);if(r){if(!e.prototype[t].get){var i=(r.boolean?"has":"get")+"Attribute";e.prototype[t].get=function(){return this[i](o)}}e.prototype[t].set||(e.prototype[t].set=function(e){h(this,r,o,e),_(this,o,e)})}}function y(e){Y[e]=(Y[e]||[]).filter(function(t){return(t.tags=t.tags.filter(function(t){return t!=e&&!B.tags[t]})).length||t.fn()})}function E(e,t,n){e.__tap__||(e.__tap__={click:"mousedown"==n.type},e.__tap__.click?e.addEventListener("click",t.observer):(e.__tap__.scroll=t.observer.bind(e),window.addEventListener("scroll",e.__tap__.scroll,!0),e.addEventListener("touchmove",t.observer),e.addEventListener("touchcancel",t.observer),e.addEventListener("touchend",t.observer))),e.__tap__.click||(e.__tap__.x=n.touches[0].pageX,e.__tap__.y=n.touches[0].pageY)}function w(e,t){e.__tap__&&(e.__tap__.click?e.removeEventListener("click",t.observer):(window.removeEventListener("scroll",e.__tap__.scroll,!0),e.removeEventListener("touchmove",t.observer),e.removeEventListener("touchcancel",t.observer),e.removeEventListener("touchend",t.observer)),delete e.__tap__)}function O(e,t,n){var r=n.changedTouches[0],o=t.gesture.tolerance;return r.pageX<e.__tap__.x+o&&r.pageX>e.__tap__.x-o&&r.pageY<e.__tap__.y+o&&r.pageY>e.__tap__.y-o?!0:void 0}var N=window,L=document,k=L.createElement("div"),C=function(){},M=function(){return!0},A=/([\w-]+(?:\([^\)]+\))?)/g,x=/(\w*)(?:\(([^\)]*)\))?/,D=/(\d+)/g,T={action:function(e,t){return e.value.match(D).indexOf(t.keyCode+"")>-1==("keypass"==e.name)||null}},S=function(){var e=N.getComputedStyle(L.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"ms"==t?"MS":t,lowercase:t,css:"-"+t+"-",js:"ms"==t?t:t[0].toUpperCase()+t.substr(1)}}(),P=Element.prototype.matchesSelector||Element.prototype[S.lowercase+"MatchesSelector"],j=N.MutationObserver||N[S.js+"MutationObserver"],R={},I=R.toString,F=/\s([a-zA-Z]+)/;t.object=function(e){var n={};for(var r in e)n[r]=t(e[r]);return n},t.array=function(e){for(var n=e.length,r=Array(n);n--;)r[n]=t(e[n]);return r};var H=["undefined","null","number","boolean","string","function"],q="",V=0,U={};for(var W in L.createEvent("CustomEvent"))U[W]=1;var Y={},B={tags:{},defaultOptions:{pseudos:[],mixins:[],events:{},methods:{},accessors:{},lifecycle:{},attributes:{},prototype:{xtag:{get:function(){return this.__xtag__?this.__xtag__:this.__xtag__={data:{}}}}}},register:function(e,t){var r;if("string"==typeof e){r=e.toLowerCase();var o=t.prototype;delete t.prototype;var a=B.tags[r]=c(B.merge({},B.defaultOptions,t));for(var i in a.events)a.events[i]=B.parseEvent(i,a.events[i]);for(i in a.lifecycle)a.lifecycle[i.split(":")[0]]=B.applyPseudos(i,a.lifecycle[i],a.pseudos,a.lifecycle[i]);for(i in a.methods)a.prototype[i.split(":")[0]]={value:B.applyPseudos(i,a.methods[i],a.pseudos,a.methods[i]),enumerable:!0};for(i in a.accessors)b(a,i);var s=a.lifecycle.created||a.lifecycle.ready;a.prototype.createdCallback={enumerable:!0,value:function(){var e=this;B.addEvents(this,a.events),a.mixins.forEach(function(t){B.mixins[t].events&&B.addEvents(e,B.mixins[t].events)});var t=s?s.apply(this,arguments):null;for(var n in a.attributes){var r=a.attributes[n],o=this.hasAttribute(n);(o||r.boolean)&&(this[r.key]=r.boolean?o:this.getAttribute(n))}return a.pseudos.forEach(function(t){t.onAdd.call(e,t)}),t}};var u=a.lifecycle.inserted,d=a.lifecycle.removed;(u||d)&&(a.prototype.attachedCallback={value:function(){return d&&(this.xtag.__parentNode__=this.parentNode),u?u.apply(this,arguments):void 0},enumerable:!0}),d&&(a.prototype.detachedCallback={value:function(){var e=n(arguments);e.unshift(this.xtag.__parentNode__);var t=d.apply(this,e);return delete this.xtag.__parentNode__,t},enumerable:!0}),a.lifecycle.attributeChanged&&(a.prototype.attributeChangedCallback={value:a.lifecycle.attributeChanged,enumerable:!0});var l=a.prototype.setAttribute||HTMLElement.prototype.setAttribute;a.prototype.setAttribute={writable:!0,enumberable:!0,value:function(e,t){var n=a.attributes[e.toLowerCase()];this.xtag._skipAttr||l.call(this,e,n&&n.boolean?"":t),n&&(n.setter&&!this.xtag._skipSet&&(this.xtag._skipAttr=!0,n.setter.call(this,n.boolean?!0:t)),t=n.skip?n.boolean?this.hasAttribute(e):this.getAttribute(e):t,m(this,n,e,n.boolean?"":t,"setAttribute")),delete this.xtag._skipAttr}};var f=a.prototype.removeAttribute||HTMLElement.prototype.removeAttribute;a.prototype.removeAttribute={writable:!0,enumberable:!0,value:function(e){var t=a.attributes[e.toLowerCase()];this.xtag._skipAttr||f.call(this,e),t&&(t.setter&&!this.xtag._skipSet&&(this.xtag._skipAttr=!0,t.setter.call(this,t.boolean?!1:void 0)),m(this,t,e,void 0,"removeAttribute")),delete this.xtag._skipAttr}};var p=o?o:t["extends"]?Object.create(L.createElement(t["extends"]).constructor).prototype:N.HTMLElement.prototype,v={prototype:Object.create(p,a.prototype)};t["extends"]&&(v["extends"]=t["extends"]);var h=L.registerElement(r,v);return y(r),h}},ready:function(e,t){var r={tags:n(e),fn:t};r.tags.reduce(function(e,t){return B.tags[t]?e:((Y[t]=Y[t]||[]).push(r),void 0)},!0)&&t()},mixins:{},prefix:S,captureEvents:["focus","blur","scroll","underflow","overflow","overflowchanged","DOMMouseScroll"],customEvents:{overflow:l("over"),underflow:l("under"),animationstart:{attach:[S.dom+"AnimationStart"]},animationend:{attach:[S.dom+"AnimationEnd"]},transitionend:{attach:[S.dom+"TransitionEnd"]},move:{attach:["mousemove","touchmove"],condition:d},enter:{attach:["mouseover","touchenter"],condition:d},leave:{attach:["mouseout","touchleave"],condition:d},scrollwheel:{attach:["DOMMouseScroll","mousewheel"],condition:function(e){return e.delta=e.wheelDelta?e.wheelDelta/40:Math.round(-1*(e.detail/3.5)),!0}},tapstart:{observe:{mousedown:L,touchstart:L},condition:d},tapend:{observe:{mouseup:L,touchend:L},condition:d},tapmove:{attach:["tapstart","dragend","touchcancel"],condition:function(e,t){switch(e.type){case"move":return!0;case"dragover":var n=t.lastDrag||{};return t.lastDrag=e,n.pageX!=e.pageX&&n.pageY!=e.pageY||null;case"tapstart":t.move||(t.current=this,t.move=B.addEvents(this,{move:t.listener,dragover:t.listener}),t.tapend=B.addEvent(L,"tapend",t.listener));break;case"tapend":case"dragend":case"touchcancel":e.touches.length||(t.move&&B.removeEvents(t.current,t.move||{}),t.tapend&&B.removeEvent(L,t.tapend||{}),delete t.lastDrag,delete t.current,delete t.tapend,delete t.move)}}}},pseudos:{__mixin__:{},mixins:{onCompiled:function(e,t){var n=t.source.__mixins__;if(n)switch(t.value){case"before":return function(){var t=this,r=arguments;return n.forEach(function(e){e.apply(t,r)}),e.apply(t,r)};case"after":case null:return function(){var t=this,r=arguments;return returns=e.apply(t,r),n.forEach(function(e){e.apply(t,r)}),returns}}}},keypass:T,keyfail:T,delegate:{action:u},within:{action:u,onAdd:function(e){var t=e.source.condition;t&&(e.source.condition=function(n,r){return B.query(this,e.value).filter(function(e){return e==n.target||e.contains?e.contains(n.target):null})[0]?t.call(this,n,r):null})}},preventable:{action:function(e,t){return!t.defaultPrevented}}},clone:t,typeOf:e,toArray:n,wrap:function(e,t){return function(){var n=arguments,r=e.apply(this,n);return t.apply(this,n),r}},merge:function(t,n,r){if("string"==e(n))return a(t,n,r);for(var o=1,i=arguments.length;i>o;o++){var s=arguments[o];for(var c in s)a(t,c,s[c])}return t},uid:function(){return Math.random().toString(36).substr(2,10)},query:r,skipTransition:function(e,t,n){var r=S.js+"TransitionProperty";e.style[r]=e.style.transitionProperty="none";var o=t?t.call(n):null;return B.requestFrame(function(){B.requestFrame(function(){e.style[r]=e.style.transitionProperty="",o&&B.requestFrame(o)})})},requestFrame:function(){var e=N.requestAnimationFrame||N[S.lowercase+"RequestAnimationFrame"]||function(e){return N.setTimeout(e,20)};return function(t){return e(t)}}(),cancelFrame:function(){var e=N.cancelAnimationFrame||N[S.lowercase+"CancelAnimationFrame"]||N.clearTimeout;return function(t){return e(t)}}(),matchSelector:function(e,t){return P.call(e,t)},set:function(e,t,n){e[t]=n,window.CustomElements&&CustomElements.upgradeAll(e)},innerHTML:function(e,t){B.set(e,"innerHTML",t)},hasClass:function(e,t){return e.className.split(" ").indexOf(t.trim())>-1},addClass:function(e,t){var n=e.className.trim().split(" ");return t.trim().split(" ").forEach(function(e){~n.indexOf(e)||n.push(e)}),e.className=n.join(" ").trim(),e},removeClass:function(e,t){var n=t.trim().split(" ");return e.className=e.className.trim().split(" ").filter(function(e){return e&&!~n.indexOf(e)}).join(" "),e},toggleClass:function(e,t){return B[B.hasClass(e,t)?"removeClass":"addClass"].call(null,e,t)},queryChildren:function(e,t){var r=e.id,o=e.id=r||"x_"+B.uid(),a="#"+o+" > ",i=!1;e.parentNode||(i=!0,k.appendChild(e)),t=a+(t+"").replace(",",","+a,"g");var s=e.parentNode.querySelectorAll(t);return r||e.removeAttribute("id"),i&&k.removeChild(e),n(s)},createFragment:function(e){var t=L.createDocumentFragment();if(e){for(var r=t.appendChild(L.createElement("div")),o=n(e.nodeName?arguments:!(r.innerHTML=e)||r.children),a=o.length,i=0;a>i;)t.insertBefore(o[i++],r);t.removeChild(r)}return t},manipulate:function(e,t){var n=e.nextSibling,r=e.parentNode,o=L.createDocumentFragment(),a=t.call(o.appendChild(e),o)||e;n?r.insertBefore(a,n):r.appendChild(a)},applyPseudos:function(e,t,r,o){var a=t,i={};if(e.match(":"))for(var s=e.match(A),c=s.length;--c;)s[c].replace(x,function(t,u,d){if(!B.pseudos[u])throw"pseudo not found: "+u+" "+s;d=""===d||d===void 0?null:d;var l=i[c]=Object.create(B.pseudos[u]);l.key=e,l.name=u,l.value=d,l.arguments=(d||"").split(","),l.action=l.action||M,l.source=o;var f=a;a=function(){var t=n(arguments),r={key:e,name:u,value:d,source:o,arguments:l.arguments,listener:f},a=l.action.apply(this,[r].concat(t));return null===a||a===!1?a:r.listener.apply(this,t)},r&&l.onAdd&&(r.nodeName?l.onAdd.call(r,l):r.push(l))});for(var u in i)i[u].onCompiled&&(a=i[u].onCompiled(a,i[u])||a);return a},removePseudos:function(e,t){t.forEach(function(t){t.onRemove&&t.onRemove.call(e,t)})},parseEvent:function(e,t){var r=e.split(":"),o=r.shift(),a=B.customEvents[o],i=B.merge({type:o,stack:C,condition:M,attach:[],_attach:[],pseudos:"",_pseudos:[],onAdd:C,onRemove:C},a||{});i.attach=n(i.base||i.attach),i.chain=o+(i.pseudos.length?":"+i.pseudos:"")+(r.length?":"+r.join(":"):"");var s=i.condition;i.condition=function(e){return e.touches,e.targetTouches,s.apply(this,arguments)};var c=B.applyPseudos(i.chain,t,i._pseudos,i);if(i.stack=function(e){e.currentTarget=e.currentTarget||this,e.touches,e.targetTouches;var t=e.detail||{};return t.__stack__?t.__stack__==c?(e.stopPropagation(),e.cancelBubble=!0,c.apply(this,arguments)):void 0:c.apply(this,arguments)},i.listener=function(e){var t=n(arguments),r=i.condition.apply(this,t.concat([i]));return r?e.type==o?i.stack.apply(this,t):(B.fireEvent(e.target,o,{baseEvent:e,detail:r!==!0&&(r.__stack__=c)?r:{__stack__:c}}),void 0):r},i.attach.forEach(function(e){i._attach.push(B.parseEvent(e,i.listener))}),a&&a.observe&&!a.__observing__){a.observer=function(e){var t=i.condition.apply(this,n(arguments).concat([a]));return t?(B.fireEvent(e.target,o,{baseEvent:e,detail:t!==!0?t:{}}),void 0):t};for(var u in a.observe)B.addEvent(a.observe[u]||document,u,a.observer,!0);a.__observing__=!0}return i},addEvent:function(e,t,n,r){var o="function"==typeof n?B.parseEvent(t,n):n;return o._pseudos.forEach(function(t){t.onAdd.call(e,t)}),o._attach.forEach(function(t){B.addEvent(e,t.type,t)}),o.onAdd.call(e,o,o.listener),e.addEventListener(o.type,o.stack,r||B.captureEvents.indexOf(o.type)>-1),o},addEvents:function(e,t){var n={};for(var r in t)n[r]=B.addEvent(e,r,t[r]);return n},removeEvent:function(e,t,n){n=n||t,n.onRemove.call(e,n,n.listener),B.removePseudos(e,n._pseudos),n._attach.forEach(function(t){B.removeEvent(e,t)}),e.removeEventListener(n.type,n.stack)},removeEvents:function(e,t){for(var n in t)B.removeEvent(e,t[n])},fireEvent:function(e,t,n,r){var o=L.createEvent("CustomEvent");n=n||{},r&&console.warn("fireEvent has been modified"),o.initCustomEvent(t,n.bubbles!==!1,n.cancelable!==!1,n.detail),n.baseEvent&&p(o,n.baseEvent);try{e.dispatchEvent(o)}catch(a){console.warn("This error may have been caused by a change in the fireEvent method",a)}},addObserver:function(e,t,n){e._records||(e._records={inserted:[],removed:[]},j?(e._observer=new j(function(t){o(e,t)}),e._observer.observe(e,{subtree:!0,childList:!0,attributes:!!0,characterData:!1})):["Inserted","Removed"].forEach(function(t){e.addEventListener("DOMNode"+t,function(n){n._mutation=!0,e._records[t.toLowerCase()].forEach(function(e){e(n.target,n)})},!1)})),-1==e._records[t].indexOf(n)&&e._records[t].push(n)},removeObserver:function(e,t,n){var r=e._records;r&&n?r[t].splice(r[t].indexOf(n),1):r[t]=[]}},X=!1,z=null;L.addEventListener("mousedown",function(e){X=!0,z=e.target},!0),L.addEventListener("mouseup",function(){X=!1,z=null},!0),L.addEventListener("dragend",function(){X=!1,z=null},!0);var K={touches:{configurable:!0,get:function(){return this.__touches__||(this.identifier=0)||(this.__touches__=X?[this]:[])}},targetTouches:{configurable:!0,get:function(){return this.__targetTouches__||(this.__targetTouches__=X&&this.currentTarget&&(this.currentTarget==z||this.currentTarget.contains&&this.currentTarget.contains(z))?(this.identifier=0)||[this]:[])}},changedTouches:{configurable:!0,get:function(){return this.__changedTouches__||(this.identifier=0)||(this.__changedTouches__=[this])}}};for(W in K)UIEvent.prototype[W]=K[W],Object.defineProperty(UIEvent.prototype,W,K[W]);B.customEvents.tap={observe:{mousedown:document,touchstart:document},gesture:{tolerance:8},condition:function(e,t){var n=e.target;switch(e.type){case"touchstart":return n.__tap__&&n.__tap__.click&&w(n,t),E(n,t,e),void 0;case"mousedown":return n.__tap__||E(n,t,e),void 0;case"scroll":case"touchcancel":return w(this,t),void 0;case"touchmove":case"touchend":return this.__tap__&&!O(this,t,e)?(w(this,t),void 0):"touchend"==e.type||null;case"click":return w(this,t),!0}}},N.xtag=B,"function"==typeof define&&define.amd&&define(B),L.addEventListener("WebComponentsReady",function(){B.fireEvent(L.body,"DOMComponentsLoaded")})}();
!function(){xtag.register("x-appbar",{lifecycle:{created:function(){var a=xtag.queryChildren(this,"h1,h2,h3,h4,h5,h6")[0];a||(a=document.createElement("h1"),this.appendChild(a)),this.xtag.data.header=a,this.subheading=this.subheading}},accessors:{heading:{attribute:{},get:function(){return this.xtag.data.header.innerHTML},set:function(a){this.xtag.data.header.innerHTML=a}},subheading:{attribute:{},get:function(){return this.getAttribute("subheading")||""},set:function(a){this.xtag.data.header.setAttribute("subheading",a)}}}})}();
!function(){function a(a,b){var c=b.__layoutScroll__=b.__layoutScroll__||Object.defineProperty(b,"__layoutScroll__",{value:{last:b.scrollTop}}).__layoutScroll__,d=b.scrollTop,e=a.scrollBuffer;return c.max=c.max||Math.max(d+e,e),c.min=c.min||Math.max(d-e,e),c}function b(a){a.setAttribute("content-maximizing",null)}function c(a){a.removeAttribute("content-maximized"),a.removeAttribute("content-maximizing")}function d(d){var e=d.currentTarget;if("scroll"==e.hideTrigger&&!d.currentTarget.hasAttribute("content-maximizing")){var f=d.target;if(e.scrollTarget?xtag.matchSelector(f,e.scrollTarget):f.parentNode==e){var g=f.scrollTop,h=e.scrollBuffer,i=a(e,f);g>i.last?i.min=Math.max(g-h,h):g<i.last&&(i.max=Math.max(g+h,h)),e.maxcontent||(g>i.max&&!e.hasAttribute("content-maximized")?b(e):g<i.min&&c(e)),i.last=g}}}xtag.register("x-layout",{events:{scroll:d,transitionend:function(a){var b=a.target;!this.hasAttribute("content-maximizing")||b.parentNode!=this||"HEADER"!=b.nodeName&&"FOOTER"!=b.nodeName||(this.setAttribute("content-maximized",null),this.removeAttribute("content-maximizing"))},"tap:delegate(section)":function(a){var d=a.currentTarget;"tap"!=d.hideTrigger||d.maxcontent||this.parentNode!=d||(d.hasAttribute("content-maximizing")||d.hasAttribute("content-maximized")?c(d):b(d))},mouseout:function(a){"hover"!=this.hideTrigger||this.maxcontent||this.hasAttribute("content-maximized")||a.relatedTarget&&this.contains(a.relatedTarget)||b(this)},mouseover:function(a){"hover"!=this.hideTrigger||this.maxcontent||!this.hasAttribute("content-maximized")&&!this.hasAttribute("content-maximizing")||this!=a.relatedTarget&&this.contains(a.relatedTarget)||c(this)}},accessors:{scrollTarget:{attribute:{name:"scroll-target"}},scrollBuffer:{attribute:{name:"scroll-buffer"},get:function(){return Number(this.getAttribute("scroll-buffer"))||80}},hideTrigger:{attribute:{name:"hide-trigger"}},maxcontent:{attribute:{"boolean":!0},set:function(a){a?b(this):this.hasAttribute("content-maximizing")||c(this)}}}})}();