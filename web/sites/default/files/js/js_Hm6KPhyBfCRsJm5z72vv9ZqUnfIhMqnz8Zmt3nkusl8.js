/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});
;
/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=window.getComputedStyle(e,null);return t?o[t]:o}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e||-1!==['HTML','BODY','#document'].indexOf(e.nodeName))return window.document.body;var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll)/.test(r+s+p)?e:n(o(e))}function r(e){var o=e&&e.offsetParent,i=o&&o.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(o.nodeName)&&'static'===t(o,'position')?r(o):o:window.document.documentElement}function p(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||r(e.firstElementChild)===e)}function s(e){return null===e.parentNode?e:s(e.parentNode)}function d(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return window.document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=o?e:t,n=o?t:e,a=document.createRange();a.setStart(i,0),a.setEnd(n,0);var l=a.commonAncestorContainer;if(e!==l&&t!==l||i.contains(n))return p(l)?l:r(l);var f=s(e);return f.host?d(f.host,t):d(e,s(t).host)}function a(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',i=e.nodeName;if('BODY'===i||'HTML'===i){var n=window.document.documentElement,r=window.document.scrollingElement||n;return r[o]}return e[o]}function l(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=a(t,'top'),n=a(t,'left'),r=o?-1:1;return e.top+=i*r,e.bottom+=i*r,e.left+=n*r,e.right+=n*r,e}function f(e,t){var o='x'===t?'Left':'Top',i='Left'==o?'Right':'Bottom';return+e['border'+o+'Width'].split('px')[0]+ +e['border'+i+'Width'].split('px')[0]}function m(e,t,o,i){return X(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],ne()?o['offset'+e]+i['margin'+('Height'===e?'Top':'Left')]+i['margin'+('Height'===e?'Bottom':'Right')]:0)}function c(){var e=window.document.body,t=window.document.documentElement,o=ne()&&window.getComputedStyle(t);return{height:m('Height',e,t,o),width:m('Width',e,t,o)}}function h(e){return de({},e,{right:e.left+e.width,bottom:e.top+e.height})}function g(e){var o={};if(ne())try{o=e.getBoundingClientRect();var i=a(e,'top'),n=a(e,'left');o.top+=i,o.left+=n,o.bottom+=i,o.right+=n}catch(e){}else o=e.getBoundingClientRect();var r={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},p='HTML'===e.nodeName?c():{},s=p.width||e.clientWidth||r.right-r.left,d=p.height||e.clientHeight||r.bottom-r.top,l=e.offsetWidth-s,m=e.offsetHeight-d;if(l||m){var g=t(e);l-=f(g,'x'),m-=f(g,'y'),r.width-=l,r.height-=m}return h(r)}function u(e,o){var i=ne(),r='HTML'===o.nodeName,p=g(e),s=g(o),d=n(e),a=t(o),f=+a.borderTopWidth.split('px')[0],m=+a.borderLeftWidth.split('px')[0],c=h({top:p.top-s.top-f,left:p.left-s.left-m,width:p.width,height:p.height});if(c.marginTop=0,c.marginLeft=0,!i&&r){var u=+a.marginTop.split('px')[0],b=+a.marginLeft.split('px')[0];c.top-=f-u,c.bottom-=f-u,c.left-=m-b,c.right-=m-b,c.marginTop=u,c.marginLeft=b}return(i?o.contains(d):o===d&&'BODY'!==d.nodeName)&&(c=l(c,o)),c}function b(e){var t=window.document.documentElement,o=u(e,t),i=X(t.clientWidth,window.innerWidth||0),n=X(t.clientHeight,window.innerHeight||0),r=a(t),p=a(t,'left'),s={top:r-o.top+o.marginTop,left:p-o.left+o.marginLeft,width:i,height:n};return h(s)}function y(e){var i=e.nodeName;return'BODY'===i||'HTML'===i?!1:'fixed'===t(e,'position')||y(o(e))}function w(e,t,i,r){var p={top:0,left:0},s=d(e,t);if('viewport'===r)p=b(s);else{var a;'scrollParent'===r?(a=n(o(e)),'BODY'===a.nodeName&&(a=window.document.documentElement)):'window'===r?a=window.document.documentElement:a=r;var l=u(a,s);if('HTML'===a.nodeName&&!y(s)){var f=c(),m=f.height,h=f.width;p.top+=l.top-l.marginTop,p.bottom=m+l.top,p.left+=l.left-l.marginLeft,p.right=h+l.left}else p=l}return p.left+=i,p.top+=i,p.right-=i,p.bottom-=i,p}function E(e){var t=e.width,o=e.height;return t*o}function v(e,t,o,i,n){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=w(o,i,r,n),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return de({key:e},s[e],{area:E(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,i=e.height;return t>=o.clientWidth&&i>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function x(e,t,o){var i=d(t,o);return u(o,i)}function O(e){var t=window.getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight),n={width:e.offsetWidth+i,height:e.offsetHeight+o};return n}function L(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function S(e,t,o){o=o.split('-')[0];var i=O(e),n={width:i.width,height:i.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return n[p]=t[p]+t[d]/2-i[d]/2,n[s]=o===s?t[s]-i[a]:t[L(s)],n}function T(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function C(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var i=T(e,function(e){return e[t]===o});return e.indexOf(i)}function N(t,o,i){var n=void 0===i?t:t.slice(0,C(t,'name',i));return n.forEach(function(t){t.function&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var i=t.function||t.fn;t.enabled&&e(i)&&(o.offsets.popper=h(o.offsets.popper),o.offsets.reference=h(o.offsets.reference),o=i(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=x(this.state,this.popper,this.reference),e.placement=v(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=S(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position='absolute',e=N(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,i=e.enabled;return i&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length-1;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof window.document.body.style[r])return r}return null}function P(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.left='',this.popper.style.position='',this.popper.style.top='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function D(e,t,o,i){var r='BODY'===e.nodeName,p=r?window:e;p.addEventListener(t,o,{passive:!0}),r||D(n(p.parentNode),t,o,i),i.push(p)}function H(e,t,o,i){o.updateBound=i,window.addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return D(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function A(){this.state.eventsEnabled||(this.state=H(this.reference,this.options,this.state,this.scheduleUpdate))}function M(e,t){return window.removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function I(){this.state.eventsEnabled&&(window.cancelAnimationFrame(this.scheduleUpdate),this.state=M(this.reference,this.state))}function R(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function U(e,t){Object.keys(t).forEach(function(o){var i='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&R(t[o])&&(i='px'),e.style[o]=t[o]+i})}function Y(e,t){Object.keys(t).forEach(function(o){var i=t[o];!1===i?e.removeAttribute(o):e.setAttribute(o,t[o])})}function F(e,t,o){var i=T(e,function(e){var o=e.name;return o===t}),n=!!i&&e.some(function(e){return e.name===o&&e.enabled&&e.order<i.order});if(!n){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return n}function j(e){return'end'===e?'start':'start'===e?'end':e}function K(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=le.indexOf(e),i=le.slice(o+1).concat(le.slice(0,o));return t?i.reverse():i}function q(e,t,o,i){var n=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+n[1],p=n[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=i;}var d=h(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?X(document.documentElement.clientHeight,window.innerHeight||0):X(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function G(e,t,o,i){var n=[0,0],r=-1!==['right','left'].indexOf(i),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(T(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,i){var n=(1===i?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return q(e,n,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,i){R(o)&&(n[t]+=o*('-'===e[i-1]?-1:1))})}),n}function z(e,t){var o,i=t.offset,n=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=n.split('-')[0];return o=R(+i)?[+i,0]:G(i,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var V=Math.min,_=Math.floor,X=Math.max,Q=['native code','[object MutationObserverConstructor]'],J=function(e){return Q.some(function(t){return-1<(e||'').toString().indexOf(t)})},Z='undefined'!=typeof window,$=['Edge','Trident','Firefox'],ee=0,te=0;te<$.length;te+=1)if(Z&&0<=navigator.userAgent.indexOf($[te])){ee=1;break}var i,oe=Z&&J(window.MutationObserver),ie=oe?function(e){var t=!1,o=0,i=document.createElement('span'),n=new MutationObserver(function(){e(),t=!1});return n.observe(i,{attributes:!0}),function(){t||(t=!0,i.setAttribute('x-index',o),++o)}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},ee))}},ne=function(){return void 0==i&&(i=-1!==navigator.appVersion.indexOf('MSIE 10')),i},re=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},pe=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),se=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},de=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var i in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},ae=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],le=ae.slice(3),fe={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},me=function(){function t(o,i){var n=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};re(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=ie(this.update.bind(this)),this.options=de({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o.jquery?o[0]:o,this.popper=i.jquery?i[0]:i,this.options.modifiers={},Object.keys(de({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){n.options.modifiers[e]=de({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return de({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return pe(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return P.call(this)}},{key:'enableEventListeners',value:function(){return A.call(this)}},{key:'disableEventListeners',value:function(){return I.call(this)}}]),t}();return me.Utils=('undefined'==typeof window?global:window).PopperUtils,me.placements=ae,me.Defaults={placement:'bottom',eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],i=t.split('-')[1];if(i){var n=e.offsets,r=n.reference,p=n.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:se({},d,r[d]),end:se({},d,r[d]+r[a]-p[a])};e.offsets.popper=de({},p,l[i])}return e}},offset:{order:200,enabled:!0,fn:z,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||r(e.instance.popper);e.instance.reference===o&&(o=r(o));var i=w(e.instance.popper,e.instance.reference,t.padding,o);t.boundaries=i;var n=t.priority,p=e.offsets.popper,s={primary:function(e){var o=p[e];return p[e]<i[e]&&!t.escapeWithReference&&(o=X(p[e],i[e])),se({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=p[o];return p[e]>i[e]&&!t.escapeWithReference&&(n=V(p[o],i[e]-('right'===e?p.width:p.height))),se({},o,n)}};return n.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';p=de({},p,s[t](e))}),e.offsets.popper=p,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,i=t.reference,n=e.placement.split('-')[0],r=_,p=-1!==['top','bottom'].indexOf(n),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(i[d])&&(e.offsets.popper[d]=r(i[d])-o[a]),o[d]>r(i[s])&&(e.offsets.popper[d]=r(i[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){if(!F(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var n=e.placement.split('-')[0],r=e.offsets,p=r.popper,s=r.reference,d=-1!==['left','right'].indexOf(n),a=d?'height':'width',l=d?'Top':'Left',f=l.toLowerCase(),m=d?'left':'top',c=d?'bottom':'right',g=O(i)[a];s[c]-g<p[f]&&(e.offsets.popper[f]-=p[f]-(s[c]-g)),s[f]+g>p[c]&&(e.offsets.popper[f]+=s[f]+g-p[c]);var u=s[f]+s[a]/2-g/2,b=t(e.instance.popper,'margin'+l).replace('px',''),y=u-h(e.offsets.popper)[f]-b;return y=X(V(p[a]-g,y),0),e.arrowElement=i,e.offsets.arrow={},e.offsets.arrow[f]=Math.round(y),e.offsets.arrow[m]='',e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=w(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),i=e.placement.split('-')[0],n=L(i),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case fe.FLIP:p=[i,n];break;case fe.CLOCKWISE:p=K(i);break;case fe.COUNTERCLOCKWISE:p=K(i,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(i!==s||p.length===d+1)return e;i=e.placement.split('-')[0],n=L(i);var a=e.offsets.popper,l=e.offsets.reference,f=_,m='left'===i&&f(a.right)>f(l.left)||'right'===i&&f(a.left)<f(l.right)||'top'===i&&f(a.bottom)>f(l.top)||'bottom'===i&&f(a.top)<f(l.bottom),c=f(a.left)<f(o.left),h=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===i&&c||'right'===i&&h||'top'===i&&g||'bottom'===i&&u,y=-1!==['top','bottom'].indexOf(i),w=!!t.flipVariations&&(y&&'start'===r&&c||y&&'end'===r&&h||!y&&'start'===r&&g||!y&&'end'===r&&u);(m||b||w)&&(e.flipped=!0,(m||b)&&(i=p[d+1]),w&&(r=j(r)),e.placement=i+(r?'-'+r:''),e.offsets.popper=de({},e.offsets.popper,S(e.instance.popper,e.offsets.reference,e.placement)),e=N(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],i=e.offsets,n=i.popper,r=i.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return n[p?'left':'top']=r[o]-(s?n[p?'width':'height']:0),e.placement=L(t),e.offsets.popper=h(n),e}},hide:{order:800,enabled:!0,fn:function(e){if(!F(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=T(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,i=t.y,n=e.offsets.popper,p=T(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==p&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===p?t.gpuAcceleration:p,l=r(e.instance.popper),f=g(l),m={position:n.position},c={left:_(n.left),top:_(n.top),bottom:_(n.bottom),right:_(n.right)},h='bottom'===o?'top':'bottom',u='right'===i?'left':'right',b=B('transform');if(d='bottom'==h?-f.height+c.bottom:c.top,s='right'==u?-f.width+c.right:c.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[h]=0,m[u]=0,m.willChange='transform';else{var y='bottom'==h?-1:1,w='right'==u?-1:1;m[h]=d*y,m[u]=s*w,m.willChange=h+', '+u}var E={"x-placement":e.placement};return e.attributes=de({},E,e.attributes),e.styles=de({},m,e.styles),e.arrowStyles=de({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return U(e.instance.popper,e.styles),Y(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&U(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,i,n){var r=x(n,t,e),p=v(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),U(t,{position:'absolute'}),o},gpuAcceleration:void 0}}},me});

;
/*!
 * jQuery Once v2.2.0 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){"use strict";var n=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};e.fn.once=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)!==true}).data(r,true)};e.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+n(e))};e.fn.findOnce=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)===true})}});

/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');

  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

window.Drupal = { behaviors: {}, locale: {} };

(function (Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };

  Drupal.formatString = function (str, args) {
    var processedArgs = {};

    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        case '!':
          processedArgs[key] = args[key];
          break;

        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });

    return Drupal.stringReplace(str, processedArgs, null);
  };

  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});

      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }

    if (keys.length === 0) {
      return str;
    }

    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };

  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    try {
      url = decodeURIComponent(url);
    } catch (e) {}

    urlParsingNode.setAttribute('href', url);

    return urlParsingNode.cloneNode(false).href;
  };

  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = window.location.protocol;

    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }
    var baseUrl = protocol + '//' + window.location.host + drupalSettings.path.baseUrl.slice(0, -1);

    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}
    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}

    return absoluteUrl === baseUrl || absoluteUrl.indexOf(baseUrl + '/') === 0;
  };

  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;

    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  Drupal.deprecationError = function (_ref) {
    var message = _ref.message;

    if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
      console.warn('[Deprecation] ' + message);
    }
  };

  Drupal.deprecatedProperty = function (_ref2) {
    var target = _ref2.target,
        deprecatedProperty = _ref2.deprecatedProperty,
        message = _ref2.message;

    if (!Proxy || !Reflect) {
      return target;
    }

    return new Proxy(target, {
      get: function get(target, key) {
        for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          rest[_key - 2] = arguments[_key];
        }

        if (key === deprecatedProperty) {
          Drupal.deprecationError({ message: message });
        }
        return Reflect.get.apply(Reflect, [target, key].concat(rest));
      }
    });
  };

  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;

      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };

  Drupal.theme.placeholder = function (str) {
    return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>';
  };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (window.jQuery) {
  jQuery.noConflict();
}

document.documentElement.className += ' js';

(function (Drupal, drupalSettings) {
  var domReady = function domReady(callback) {
    if (document.readyState !== 'loading') {
      callback();
    } else {
      var listener = function listener() {
        callback();
        document.removeEventListener('DOMContentLoaded', listener);
      };
      document.addEventListener('DOMContentLoaded', listener);
    }
  };

  domReady(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);;
!function(t){"use strict";Drupal.behaviors.droopler_theme={attach:function(e,o){var s=t("body");function r(){var e=document.querySelectorAll(".product-teaser-content .node__title");Array.prototype.forEach.call(e,function(e){for(var o=e.querySelector("span"),s=e.clientHeight;o.offsetHeight>s;)o.textContent=o.textContent.replace(/\W*\s(\S)*$/,"...")})}s.hasClass("d-theme-preceded")||(t(window).scroll(function(){50<t(this).scrollTop()?t("body").addClass("scrolled"):t("body").removeClass("scrolled")}),t(window).resize(function(){r()}),r(),t("#header .dropdown, .language-switcher-language-url").hover(function(){t(this).addClass("force-show"),t(this).find(".dropdown-menu").addClass("force-show")},function(){t(this).removeClass("force-show").removeClass("show"),t(this).find(".dropdown-menu").removeClass("force-show").removeClass("show")}),t(".menu-dropdown-icon").on({touchstart:function(){t(this).parent().removeClass("force-show"),t(this).parent().find(".dropdown-menu").removeClass("force-show")}}),s.addClass("d-theme-preceded"))}}}(jQuery);

;
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");!function(){var t=jQuery.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1==t[0]&&9==t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),function(){var b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I=function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t};function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function w(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o,e,n,r,S=(o=jQuery,e=!1,n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},r={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");e&&"#"!==e||(e=t.getAttribute("href")||"");try{return 0<o(e).length?e:null}catch(t){return null}},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){o(t).trigger(e.end)},supportsTransitionEnd:function(){return Boolean(e)},typeCheckConfig:function(t,e,n){for(var i in n)if(n.hasOwnProperty(i)){var o=n[i],r=e[i],s=r&&((l=r)[0]||l).nodeType?"element":(a=r,{}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a,l}},e=function(){if(window.QUnit)return!1;var t=document.createElement("bootstrap");for(var e in n)if(void 0!==t.style[e])return{end:n[e]};return!1}(),o.fn.emulateTransitionEnd=t,r.supportsTransitionEnd()&&(o.event.special[r.TRANSITION_END]={bindType:e.end,delegateType:e.end,handle:function(t){if(o(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}}),r);function t(t){var e=this,n=!1;return o(this).one(r.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||r.triggerTransitionEnd(e)},t),this}var s,a,l,h,c,u,d,f,p,g;s=jQuery,a="alert",h="."+(l="bs.alert"),c=s.fn[a],u={CLOSE:"close"+h,CLOSED:"closed"+h,CLICK_DATA_API:"click"+h+".data-api"},d="alert",f="fade",p="show",_.prototype.close=function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},_.prototype.dispose=function(){s.removeData(this._element,l),this._element=null},_.prototype._getRootElement=function(t){var e=S.getSelectorFromElement(t),n=!1;return e&&(n=s(e)[0]),n=n||s(t).closest("."+d)[0]},_.prototype._triggerCloseEvent=function(t){var e=s.Event(u.CLOSE);return s(t).trigger(e),e},_.prototype._removeElement=function(e){var n=this;s(e).removeClass(p),S.supportsTransitionEnd()&&s(e).hasClass(f)?s(e).one(S.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(150):this._destroyElement(e)},_.prototype._destroyElement=function(t){s(t).detach().trigger(u.CLOSED).remove()},_._jQueryInterface=function(n){return this.each(function(){var t=s(this),e=t.data(l);e||(e=new _(this),t.data(l,e)),"close"===n&&e[n](this)})},_._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},I(_,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}}]),g=_,s(document).on(u.CLICK_DATA_API,'[data-dismiss="alert"]',g._handleDismiss(new g)),s.fn[a]=g._jQueryInterface,s.fn[a].Constructor=g,s.fn[a].noConflict=function(){return s.fn[a]=c,g._jQueryInterface};function _(t){w(this,_),this._element=t}var m,v,y,E,C,T,D,A,N,O,k,P,j,x,H,L;m=jQuery,v="button",E="."+(y="bs.button"),C=".data-api",T=m.fn[v],D="active",A="btn",O='[data-toggle^="button"]',k='[data-toggle="buttons"]',P="input",j=".active",x=".btn",H={CLICK_DATA_API:"click"+E+C,FOCUS_BLUR_DATA_API:(N="focus")+E+C+" blur"+E+C},R.prototype.toggle=function(){var t=!0,e=!0,n=m(this._element).closest(k)[0];if(n){var i=m(this._element).find(P)[0];if(i){if("radio"===i.type)if(i.checked&&m(this._element).hasClass(D))t=!1;else{var o=m(n).find(j)[0];o&&m(o).removeClass(D)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!m(this._element).hasClass(D),m(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!m(this._element).hasClass(D)),t&&m(this._element).toggleClass(D)},R.prototype.dispose=function(){m.removeData(this._element,y),this._element=null},R._jQueryInterface=function(e){return this.each(function(){var t=m(this).data(y);t||(t=new R(this),m(this).data(y,t)),"toggle"===e&&t[e]()})},I(R,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}}]),L=R,m(document).on(H.CLICK_DATA_API,O,function(t){t.preventDefault();var e=t.target;m(e).hasClass(A)||(e=m(e).closest(x)),L._jQueryInterface.call(m(e),"toggle")}).on(H.FOCUS_BLUR_DATA_API,O,function(t){var e=m(t.target).closest(x)[0];m(e).toggleClass(N,/^focus(in)?$/.test(t.type))}),m.fn[v]=L._jQueryInterface,m.fn[v].Constructor=L,m.fn[v].noConflict=function(){return m.fn[v]=T,L._jQueryInterface};function R(t){w(this,R),this._element=t}var Q,W,U,K,M,B,F,V,Y,q,z,Z,J,G,$,X,tt,et,nt,it,ot,rt,st,at,lt,ht,ct,ut;Q=jQuery,W="carousel",K="."+(U="bs.carousel"),M=".data-api",B=Q.fn[W],F={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},V={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},Y="next",q="prev",z="left",Z="right",J={SLIDE:"slide"+K,SLID:"slid"+K,KEYDOWN:"keydown"+K,MOUSEENTER:"mouseenter"+K,MOUSELEAVE:"mouseleave"+K,TOUCHEND:"touchend"+K,LOAD_DATA_API:"load"+K+M,CLICK_DATA_API:"click"+K+M},G="carousel",$="active",X="slide",tt="carousel-item-right",et="carousel-item-left",nt="carousel-item-next",it="carousel-item-prev",ot=".active",rt=".active.carousel-item",st=".carousel-item",at=".carousel-item-next, .carousel-item-prev",lt=".carousel-indicators",ht="[data-slide], [data-slide-to]",ct='[data-ride="carousel"]',dt.prototype.next=function(){this._isSliding||this._slide(Y)},dt.prototype.nextWhenVisible=function(){document.hidden||this.next()},dt.prototype.prev=function(){this._isSliding||this._slide(q)},dt.prototype.pause=function(t){t||(this._isPaused=!0),Q(this._element).find(at)[0]&&S.supportsTransitionEnd()&&(S.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},dt.prototype.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},dt.prototype.to=function(t){var e=this;this._activeElement=Q(this._element).find(rt)[0];var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)Q(this._element).one(J.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?Y:q;this._slide(i,this._items[t])}},dt.prototype.dispose=function(){Q(this._element).off(K),Q.removeData(this._element,U),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},dt.prototype._getConfig=function(t){return t=Q.extend({},F,t),S.typeCheckConfig(W,t,V),t},dt.prototype._addEventListeners=function(){var e=this;this._config.keyboard&&Q(this._element).on(J.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(Q(this._element).on(J.MOUSEENTER,function(t){return e.pause(t)}).on(J.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&Q(this._element).on(J.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},dt.prototype._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next();break;default:return}},dt.prototype._getItemIndex=function(t){return this._items=Q.makeArray(Q(t).parent().find(st)),this._items.indexOf(t)},dt.prototype._getItemByDirection=function(t,e){var n=t===Y,i=t===q,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===q?-1:1))%this._items.length;return-1==s?this._items[this._items.length-1]:this._items[s]},dt.prototype._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(Q(this._element).find(rt)[0]),o=Q.Event(J.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return Q(this._element).trigger(o),o},dt.prototype._setActiveIndicatorElement=function(t){if(this._indicatorsElement){Q(this._indicatorsElement).find(ot).removeClass($);var e=this._indicatorsElement.children[this._getItemIndex(t)];e&&Q(e).addClass($)}},dt.prototype._slide=function(t,e){var n=this,i=Q(this._element).find(rt)[0],o=this._getItemIndex(i),r=e||i&&this._getItemByDirection(t,i),s=this._getItemIndex(r),a=Boolean(this._interval),l=void 0,h=void 0,c=void 0;if(c=t===Y?(l=et,h=nt,z):(l=tt,h=it,Z),r&&Q(r).hasClass($))this._isSliding=!1;else if(!this._triggerSlideEvent(r,c).isDefaultPrevented()&&i&&r){this._isSliding=!0,a&&this.pause(),this._setActiveIndicatorElement(r);var u=Q.Event(J.SLID,{relatedTarget:r,direction:c,from:o,to:s});S.supportsTransitionEnd()&&Q(this._element).hasClass(X)?(Q(r).addClass(h),S.reflow(r),Q(i).addClass(l),Q(r).addClass(l),Q(i).one(S.TRANSITION_END,function(){Q(r).removeClass(l+" "+h).addClass($),Q(i).removeClass($+" "+h+" "+l),n._isSliding=!1,setTimeout(function(){return Q(n._element).trigger(u)},0)}).emulateTransitionEnd(600)):(Q(i).removeClass($),Q(r).addClass($),this._isSliding=!1,Q(this._element).trigger(u)),a&&this.cycle()}},dt._jQueryInterface=function(i){return this.each(function(){var t=Q(this).data(U),e=Q.extend({},F,Q(this).data());"object"===(void 0===i?"undefined":b(i))&&Q.extend(e,i);var n="string"==typeof i?i:e.slide;if(t||(t=new dt(this,e),Q(this).data(U,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if(void 0===t[n])throw new Error('No method named "'+n+'"');t[n]()}else e.interval&&(t.pause(),t.cycle())})},dt._dataApiClickHandler=function(t){var e=S.getSelectorFromElement(this);if(e){var n=Q(e)[0];if(n&&Q(n).hasClass(G)){var i=Q.extend({},Q(n).data(),Q(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),dt._jQueryInterface.call(Q(n),i),o&&Q(n).data(U).to(o),t.preventDefault()}}},I(dt,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return F}}]),ut=dt,Q(document).on(J.CLICK_DATA_API,ht,ut._dataApiClickHandler),Q(window).on(J.LOAD_DATA_API,function(){Q(ct).each(function(){var t=Q(this);ut._jQueryInterface.call(t,t.data())})}),Q.fn[W]=ut._jQueryInterface,Q.fn[W].Constructor=ut,Q.fn[W].noConflict=function(){return Q.fn[W]=B,ut._jQueryInterface};function dt(t,e){w(this,dt),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(e),this._element=Q(t)[0],this._indicatorsElement=Q(this._element).find(lt)[0],this._addEventListeners()}var ft,pt,gt,_t,mt,vt,yt,Et,Ct,Tt,bt,It,wt,St,Dt,At,Nt;ft=jQuery,pt="collapse",_t="."+(gt="bs.collapse"),mt=ft.fn[pt],vt={toggle:!0,parent:""},yt={toggle:"boolean",parent:"string"},Et={SHOW:"show"+_t,SHOWN:"shown"+_t,HIDE:"hide"+_t,HIDDEN:"hidden"+_t,CLICK_DATA_API:"click"+_t+".data-api"},Ct="show",Tt="collapse",bt="collapsing",It="collapsed",wt="width",St="height",Dt=".show, .collapsing",At='[data-toggle="collapse"]',Ot.prototype.toggle=function(){ft(this._element).hasClass(Ct)?this.hide():this.show()},Ot.prototype.show=function(){var t=this;if(!this._isTransitioning&&!ft(this._element).hasClass(Ct)){var e=void 0,n=void 0;if(this._parent&&((e=ft.makeArray(ft(this._parent).children().children(Dt))).length||(e=null)),!(e&&(n=ft(e).data(gt))&&n._isTransitioning)){var i=ft.Event(Et.SHOW);if(ft(this._element).trigger(i),!i.isDefaultPrevented()){e&&(Ot._jQueryInterface.call(ft(e),"hide"),n||ft(e).data(gt,null));var o=this._getDimension();function r(){ft(t._element).removeClass(bt).addClass(Tt).addClass(Ct),t._element.style[o]="",t.setTransitioning(!1),ft(t._element).trigger(Et.SHOWN)}if(ft(this._element).removeClass(Tt).addClass(bt),this._element.style[o]=0,this._triggerArray.length&&ft(this._triggerArray).removeClass(It).attr("aria-expanded",!0),this.setTransitioning(!0),S.supportsTransitionEnd()){var s="scroll"+(o[0].toUpperCase()+o.slice(1));ft(this._element).one(S.TRANSITION_END,r).emulateTransitionEnd(600),this._element.style[o]=this._element[s]+"px"}else r()}}}},Ot.prototype.hide=function(){var t=this;if(!this._isTransitioning&&ft(this._element).hasClass(Ct)){var e=ft.Event(Et.HIDE);if(ft(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();if(this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",S.reflow(this._element),ft(this._element).addClass(bt).removeClass(Tt).removeClass(Ct),this._triggerArray.length)for(var i=0;i<this._triggerArray.length;i++){var o=this._triggerArray[i],r=S.getSelectorFromElement(o);null!==r&&(ft(r).hasClass(Ct)||ft(o).addClass(It).attr("aria-expanded",!1))}function s(){t.setTransitioning(!1),ft(t._element).removeClass(bt).addClass(Tt).trigger(Et.HIDDEN)}this.setTransitioning(!0),this._element.style[n]="",S.supportsTransitionEnd()?ft(this._element).one(S.TRANSITION_END,s).emulateTransitionEnd(600):s()}}},Ot.prototype.setTransitioning=function(t){this._isTransitioning=t},Ot.prototype.dispose=function(){ft.removeData(this._element,gt),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},Ot.prototype._getConfig=function(t){return(t=ft.extend({},vt,t)).toggle=Boolean(t.toggle),S.typeCheckConfig(pt,t,yt),t},Ot.prototype._getDimension=function(){return ft(this._element).hasClass(wt)?wt:St},Ot.prototype._getParent=function(){var n=this,t=ft(this._config.parent)[0],e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return ft(t).find(e).each(function(t,e){n._addAriaAndCollapsedClass(Ot._getTargetFromElement(e),[e])}),t},Ot.prototype._addAriaAndCollapsedClass=function(t,e){if(t){var n=ft(t).hasClass(Ct);e.length&&ft(e).toggleClass(It,!n).attr("aria-expanded",n)}},Ot._getTargetFromElement=function(t){var e=S.getSelectorFromElement(t);return e?ft(e)[0]:null},Ot._jQueryInterface=function(i){return this.each(function(){var t=ft(this),e=t.data(gt),n=ft.extend({},vt,t.data(),"object"===(void 0===i?"undefined":b(i))&&i);if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new Ot(this,n),t.data(gt,e)),"string"==typeof i){if(void 0===e[i])throw new Error('No method named "'+i+'"');e[i]()}})},I(Ot,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return vt}}]),Nt=Ot,ft(document).on(Et.CLICK_DATA_API,At,function(t){/input|textarea/i.test(t.target.tagName)||t.preventDefault();var n=ft(this),e=S.getSelectorFromElement(this);ft(e).each(function(){var t=ft(this),e=t.data(gt)?"toggle":n.data();Nt._jQueryInterface.call(t,e)})}),ft.fn[pt]=Nt._jQueryInterface,ft.fn[pt].Constructor=Nt,ft.fn[pt].noConflict=function(){return ft.fn[pt]=mt,Nt._jQueryInterface};function Ot(t,e){w(this,Ot),this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=ft.makeArray(ft('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=ft(At),i=0;i<n.length;i++){var o=n[i],r=S.getSelectorFromElement(o);null!==r&&0<ft(r).filter(t).length&&this._triggerArray.push(o)}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var kt,Pt,jt,xt,Ht,Lt,Rt,Qt,Wt,Ut,Kt,Mt,Bt,Ft,Vt,Yt,qt,zt,Zt;(function(l){if("undefined"==typeof Popper)throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)");var n="dropdown",h="bs.dropdown",t="."+h,e=".data-api",i=l.fn[n],s=new RegExp("38|40|27"),c={HIDE:"hide"+t,HIDDEN:"hidden"+t,SHOW:"show"+t,SHOWN:"shown"+t,CLICK:"click"+t,CLICK_DATA_API:"click"+t+e,KEYDOWN_DATA_API:"keydown"+t+e,KEYUP_DATA_API:"keyup"+t+e},a="disabled",u="show",r="dropup",d="dropdown-menu-right",f="dropdown-menu-left",p='[data-toggle="dropdown"]',o=".dropdown form",g=".dropdown-menu",_=".navbar-nav",m=".dropdown-menu .dropdown-item:not(.disabled)",v={TOP:"top-start",TOPEND:"top-end",BOTTOM:"bottom-start",BOTTOMEND:"bottom-end"},y={placement:v.BOTTOM,offset:0,flip:!0},E={placement:"string",offset:"(number|string)",flip:"boolean"},C=(T.prototype.toggle=function(){if(!this._element.disabled&&!l(this._element).hasClass(a)){var t=T._getParentFromElement(this._element),e=l(this._menu).hasClass(u);if(T._clearMenus(),!e){var n={relatedTarget:this._element},i=l.Event(c.SHOW,n);if(l(t).trigger(i),!i.isDefaultPrevented()){var o=this._element;l(t).hasClass(r)&&(l(this._menu).hasClass(f)||l(this._menu).hasClass(d))&&(o=t),this._popper=new Popper(o,this._menu,this._getPopperConfig()),"ontouchstart"in document.documentElement&&!l(t).closest(_).length&&l("body").children().on("mouseover",null,l.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),l(this._menu).toggleClass(u),l(t).toggleClass(u).trigger(l.Event(c.SHOWN,n))}}}},T.prototype.dispose=function(){l.removeData(this._element,h),l(this._element).off(t),this._element=null,(this._menu=null)!==this._popper&&this._popper.destroy(),this._popper=null},T.prototype.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},T.prototype._addEventListeners=function(){var e=this;l(this._element).on(c.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},T.prototype._getConfig=function(t){var e=l(this._element).data();return void 0!==e.placement&&(e.placement=v[e.placement.toUpperCase()]),t=l.extend({},this.constructor.Default,l(this._element).data(),t),S.typeCheckConfig(n,t,this.constructor.DefaultType),t},T.prototype._getMenuElement=function(){if(!this._menu){var t=T._getParentFromElement(this._element);this._menu=l(t).find(g)[0]}return this._menu},T.prototype._getPlacement=function(){var t=l(this._element).parent(),e=this._config.placement;return t.hasClass(r)||this._config.placement===v.TOP?(e=v.TOP,l(this._menu).hasClass(d)&&(e=v.TOPEND)):l(this._menu).hasClass(d)&&(e=v.BOTTOMEND),e},T.prototype._detectNavbar=function(){return 0<l(this._element).closest(".navbar").length},T.prototype._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:{offset:this._config.offset},flip:{enabled:this._config.flip}}};return this._inNavbar&&(t.modifiers.applyStyle={enabled:!this._inNavbar}),t},T._jQueryInterface=function(n){return this.each(function(){var t=l(this).data(h),e="object"===(void 0===n?"undefined":b(n))?n:null;if(t||(t=new T(this,e),l(this).data(h,t)),"string"==typeof n){if(void 0===t[n])throw new Error('No method named "'+n+'"');t[n]()}})},T._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=l.makeArray(l(p)),n=0;n<e.length;n++){var i=T._getParentFromElement(e[n]),o=l(e[n]).data(h),r={relatedTarget:e[n]};if(o){var s=o._menu;if(l(i).hasClass(u)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&l.contains(i,t.target))){var a=l.Event(c.HIDE,r);l(i).trigger(a),a.isDefaultPrevented()||("ontouchstart"in document.documentElement&&l("body").children().off("mouseover",null,l.noop),e[n].setAttribute("aria-expanded","false"),l(s).removeClass(u),l(i).removeClass(u).trigger(l.Event(c.HIDDEN,r)))}}}},T._getParentFromElement=function(t){var e=void 0,n=S.getSelectorFromElement(t);return n&&(e=l(n)[0]),e||t.parentNode},T._dataApiKeydownHandler=function(t){if(!(!s.test(t.which)||/button/i.test(t.target.tagName)&&32===t.which||/input|textarea/i.test(t.target.tagName)||(t.preventDefault(),t.stopPropagation(),this.disabled||l(this).hasClass(a)))){var e=T._getParentFromElement(this),n=l(e).hasClass(u);if((n||27===t.which&&32===t.which)&&(!n||27!==t.which&&32!==t.which)){var i=l(e).find(m).get();if(i.length){var o=i.indexOf(t.target);38===t.which&&0<o&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var r=l(e).find(p)[0];l(r).trigger("focus")}l(this).trigger("click")}}},I(T,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return y}},{key:"DefaultType",get:function(){return E}}]),T);function T(t,e){w(this,T),this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}l(document).on(c.KEYDOWN_DATA_API,p,C._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API,g,C._dataApiKeydownHandler).on(c.CLICK_DATA_API+" "+c.KEYUP_DATA_API,C._clearMenus).on(c.CLICK_DATA_API,p,function(t){t.preventDefault(),t.stopPropagation(),C._jQueryInterface.call(l(this),"toggle")}).on(c.CLICK_DATA_API,o,function(t){t.stopPropagation()}),l.fn[n]=C._jQueryInterface,l.fn[n].Constructor=C,l.fn[n].noConflict=function(){return l.fn[n]=i,C._jQueryInterface}})(jQuery),kt=jQuery,Pt="modal",xt="."+(jt="bs.modal"),Ht=kt.fn[Pt],Lt={backdrop:!0,keyboard:!0,focus:!0,show:!0},Rt={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},Qt={HIDE:"hide"+xt,HIDDEN:"hidden"+xt,SHOW:"show"+xt,SHOWN:"shown"+xt,FOCUSIN:"focusin"+xt,RESIZE:"resize"+xt,CLICK_DISMISS:"click.dismiss"+xt,KEYDOWN_DISMISS:"keydown.dismiss"+xt,MOUSEUP_DISMISS:"mouseup.dismiss"+xt,MOUSEDOWN_DISMISS:"mousedown.dismiss"+xt,CLICK_DATA_API:"click"+xt+".data-api"},Wt="modal-scrollbar-measure",Ut="modal-backdrop",Kt="modal-open",Mt="fade",Bt="show",Ft=".modal-dialog",Vt='[data-toggle="modal"]',Yt='[data-dismiss="modal"]',qt=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",zt=".navbar-toggler",Jt.prototype.toggle=function(t){return this._isShown?this.hide():this.show(t)},Jt.prototype.show=function(t){var e=this;if(!this._isTransitioning){S.supportsTransitionEnd()&&kt(this._element).hasClass(Mt)&&(this._isTransitioning=!0);var n=kt.Event(Qt.SHOW,{relatedTarget:t});kt(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),kt(document.body).addClass(Kt),this._setEscapeEvent(),this._setResizeEvent(),kt(this._element).on(Qt.CLICK_DISMISS,Yt,function(t){return e.hide(t)}),kt(this._dialog).on(Qt.MOUSEDOWN_DISMISS,function(){kt(e._element).one(Qt.MOUSEUP_DISMISS,function(t){kt(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},Jt.prototype.hide=function(t){var e=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var n=S.supportsTransitionEnd()&&kt(this._element).hasClass(Mt);n&&(this._isTransitioning=!0);var i=kt.Event(Qt.HIDE);kt(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()&&(this._isShown=!1,this._setEscapeEvent(),this._setResizeEvent(),kt(document).off(Qt.FOCUSIN),kt(this._element).removeClass(Bt),kt(this._element).off(Qt.CLICK_DISMISS),kt(this._dialog).off(Qt.MOUSEDOWN_DISMISS),n?kt(this._element).one(S.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(300):this._hideModal())}},Jt.prototype.dispose=function(){kt.removeData(this._element,jt),kt(window,document,this._element,this._backdrop).off(xt),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},Jt.prototype.handleUpdate=function(){this._adjustDialog()},Jt.prototype._getConfig=function(t){return t=kt.extend({},Lt,t),S.typeCheckConfig(Pt,t,Rt),t},Jt.prototype._showElement=function(t){var e=this,n=S.supportsTransitionEnd()&&kt(this._element).hasClass(Mt);function i(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,kt(e._element).trigger(o)}this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,n&&S.reflow(this._element),kt(this._element).addClass(Bt),this._config.focus&&this._enforceFocus();var o=kt.Event(Qt.SHOWN,{relatedTarget:t});n?kt(this._dialog).one(S.TRANSITION_END,i).emulateTransitionEnd(300):i()},Jt.prototype._enforceFocus=function(){var e=this;kt(document).off(Qt.FOCUSIN).on(Qt.FOCUSIN,function(t){document===t.target||e._element===t.target||kt(e._element).has(t.target).length||e._element.focus()})},Jt.prototype._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?kt(this._element).on(Qt.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||kt(this._element).off(Qt.KEYDOWN_DISMISS)},Jt.prototype._setResizeEvent=function(){var e=this;this._isShown?kt(window).on(Qt.RESIZE,function(t){return e.handleUpdate(t)}):kt(window).off(Qt.RESIZE)},Jt.prototype._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){kt(document.body).removeClass(Kt),t._resetAdjustments(),t._resetScrollbar(),kt(t._element).trigger(Qt.HIDDEN)})},Jt.prototype._removeBackdrop=function(){this._backdrop&&(kt(this._backdrop).remove(),this._backdrop=null)},Jt.prototype._showBackdrop=function(t){var e=this,n=kt(this._element).hasClass(Mt)?Mt:"";if(this._isShown&&this._config.backdrop){var i=S.supportsTransitionEnd()&&n;if(this._backdrop=document.createElement("div"),this._backdrop.className=Ut,n&&kt(this._backdrop).addClass(n),kt(this._backdrop).appendTo(document.body),kt(this._element).on(Qt.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),i&&S.reflow(this._backdrop),kt(this._backdrop).addClass(Bt),!t)return;if(!i)return void t();kt(this._backdrop).one(S.TRANSITION_END,t).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){function o(){e._removeBackdrop(),t&&t()}kt(this._backdrop).removeClass(Bt),S.supportsTransitionEnd()&&kt(this._element).hasClass(Mt)?kt(this._backdrop).one(S.TRANSITION_END,o).emulateTransitionEnd(150):o()}else t&&t()},Jt.prototype._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},Jt.prototype._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},Jt.prototype._checkScrollbar=function(){this._isBodyOverflowing=document.body.clientWidth<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},Jt.prototype._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){kt(qt).each(function(t,e){var n=kt(e)[0].style.paddingRight,i=kt(e).css("padding-right");kt(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),kt(zt).each(function(t,e){var n=kt(e)[0].style.marginRight,i=kt(e).css("margin-right");kt(e).data("margin-right",n).css("margin-right",parseFloat(i)+o._scrollbarWidth+"px")});var t=document.body.style.paddingRight,e=kt("body").css("padding-right");kt("body").data("padding-right",t).css("padding-right",parseFloat(e)+this._scrollbarWidth+"px")}},Jt.prototype._resetScrollbar=function(){kt(qt).each(function(t,e){var n=kt(e).data("padding-right");void 0!==n&&kt(e).css("padding-right",n).removeData("padding-right")}),kt(zt).each(function(t,e){var n=kt(e).data("margin-right");void 0!==n&&kt(e).css("margin-right",n).removeData("margin-right")});var t=kt("body").data("padding-right");void 0!==t&&kt("body").css("padding-right",t).removeData("padding-right")},Jt.prototype._getScrollbarWidth=function(){var t=document.createElement("div");t.className=Wt,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},Jt._jQueryInterface=function(n,i){return this.each(function(){var t=kt(this).data(jt),e=kt.extend({},Jt.Default,kt(this).data(),"object"===(void 0===n?"undefined":b(n))&&n);if(t||(t=new Jt(this,e),kt(this).data(jt,t)),"string"==typeof n){if(void 0===t[n])throw new Error('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},I(Jt,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return Lt}}]),Zt=Jt,kt(document).on(Qt.CLICK_DATA_API,Vt,function(t){var e=this,n=void 0,i=S.getSelectorFromElement(this);i&&(n=kt(i)[0]);var o=kt(n).data(jt)?"toggle":kt.extend({},kt(n).data(),kt(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=kt(n).one(Qt.SHOW,function(t){t.isDefaultPrevented()||r.one(Qt.HIDDEN,function(){kt(e).is(":visible")&&e.focus()})});Zt._jQueryInterface.call(kt(n),o,this)}),kt.fn[Pt]=Zt._jQueryInterface,kt.fn[Pt].Constructor=Zt,kt.fn[Pt].noConflict=function(){return kt.fn[Pt]=Ht,Zt._jQueryInterface};function Jt(t,e){w(this,Jt),this._config=this._getConfig(e),this._element=t,this._dialog=kt(t).find(Ft)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}var Gt,$t,Xt,te,ee,ne,ie,oe,re,se,ae,le,he,ce,ue,de,fe,pe,ge,_e,me;Gt=jQuery,$t="scrollspy",te="."+(Xt="bs.scrollspy"),ee=Gt.fn[$t],ne={offset:10,method:"auto",target:""},ie={offset:"number",method:"string",target:"(string|element)"},oe={ACTIVATE:"activate"+te,SCROLL:"scroll"+te,LOAD_DATA_API:"load"+te+".data-api"},re="dropdown-item",se="active",ae='[data-spy="scroll"]',le=".active",he=".nav, .list-group",ce=".nav-link",ue=".list-group-item",de=".dropdown",fe=".dropdown-item",pe=".dropdown-toggle",ge="offset",_e="position",ve.prototype.refresh=function(){var e=this,t=this._scrollElement!==this._scrollElement.window?_e:ge,o="auto"===this._config.method?t:this._config.method,r=o===_e?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),Gt.makeArray(Gt(this._selector)).map(function(t){var e=void 0,n=S.getSelectorFromElement(t);if(n&&(e=Gt(n)[0]),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[Gt(e)[o]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},ve.prototype.dispose=function(){Gt.removeData(this._element,Xt),Gt(this._scrollElement).off(te),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},ve.prototype._getConfig=function(t){if("string"!=typeof(t=Gt.extend({},ne,t)).target){var e=Gt(t.target).attr("id");e||(e=S.getUID($t),Gt(t.target).attr("id",e)),t.target="#"+e}return S.typeCheckConfig($t,t,ie),t},ve.prototype._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},ve.prototype._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},ve.prototype._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},ve.prototype._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;)this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&(void 0===this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}},ve.prototype._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",");t=t.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var n=Gt(t.join(","));n.hasClass(re)?(n.closest(de).find(pe).addClass(se),n.addClass(se)):(n.addClass(se),n.parents(he).prev(ce+", "+ue).addClass(se)),Gt(this._scrollElement).trigger(oe.ACTIVATE,{relatedTarget:e})},ve.prototype._clear=function(){Gt(this._selector).filter(le).removeClass(se)},ve._jQueryInterface=function(n){return this.each(function(){var t=Gt(this).data(Xt),e="object"===(void 0===n?"undefined":b(n))&&n;if(t||(t=new ve(this,e),Gt(this).data(Xt,t)),"string"==typeof n){if(void 0===t[n])throw new Error('No method named "'+n+'"');t[n]()}})},I(ve,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return ne}}]),me=ve,Gt(window).on(oe.LOAD_DATA_API,function(){for(var t=Gt.makeArray(Gt(ae)),e=t.length;e--;){var n=Gt(t[e]);me._jQueryInterface.call(n,n.data())}}),Gt.fn[$t]=me._jQueryInterface,Gt.fn[$t].Constructor=me,Gt.fn[$t].noConflict=function(){return Gt.fn[$t]=ee,me._jQueryInterface};function ve(t,e){var n=this;w(this,ve),this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+ce+","+this._config.target+" "+ue+","+this._config.target+" "+fe,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,Gt(this._scrollElement).on(oe.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var ye,Ee,Ce,Te,be,Ie,we,Se,De,Ae,Ne,Oe,ke,Pe,je,xe,He;ye=jQuery,Ce="."+(Ee="bs.tab"),Te=ye.fn.tab,be={HIDE:"hide"+Ce,HIDDEN:"hidden"+Ce,SHOW:"show"+Ce,SHOWN:"shown"+Ce,CLICK_DATA_API:"click"+Ce+".data-api"},Ie="dropdown-menu",we="active",Se="disabled",De="fade",Ae="show",Ne=".dropdown",Oe=".nav, .list-group",ke=".active",Pe='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',je=".dropdown-toggle",xe="> .dropdown-menu .active",Le.prototype.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&ye(this._element).hasClass(we)||ye(this._element).hasClass(Se))){var t=void 0,i=void 0,e=ye(this._element).closest(Oe)[0],o=S.getSelectorFromElement(this._element);e&&(i=(i=ye.makeArray(ye(e).find(ke)))[i.length-1]);var r=ye.Event(be.HIDE,{relatedTarget:this._element}),s=ye.Event(be.SHOW,{relatedTarget:i});if(i&&ye(i).trigger(r),ye(this._element).trigger(s),!s.isDefaultPrevented()&&!r.isDefaultPrevented()){function a(){var t=ye.Event(be.HIDDEN,{relatedTarget:n._element}),e=ye.Event(be.SHOWN,{relatedTarget:i});ye(i).trigger(t),ye(n._element).trigger(e)}o&&(t=ye(o)[0]),this._activate(this._element,e),t?this._activate(t,t.parentNode,a):a()}}},Le.prototype.dispose=function(){ye.removeData(this._element,Ee),this._element=null},Le.prototype._activate=function(t,e,n){function i(){return o._transitionComplete(t,r,s,n)}var o=this,r=ye(e).find(ke)[0],s=n&&S.supportsTransitionEnd()&&r&&ye(r).hasClass(De);r&&s?ye(r).one(S.TRANSITION_END,i).emulateTransitionEnd(150):i(),r&&ye(r).removeClass(Ae)},Le.prototype._transitionComplete=function(t,e,n,i){if(e){ye(e).removeClass(we);var o=ye(e.parentNode).find(xe)[0];o&&ye(o).removeClass(we),e.setAttribute("aria-expanded",!1)}if(ye(t).addClass(we),t.setAttribute("aria-expanded",!0),n?(S.reflow(t),ye(t).addClass(Ae)):ye(t).removeClass(De),t.parentNode&&ye(t.parentNode).hasClass(Ie)){var r=ye(t).closest(Ne)[0];r&&ye(r).find(je).addClass(we),t.setAttribute("aria-expanded",!0)}i&&i()},Le._jQueryInterface=function(n){return this.each(function(){var t=ye(this),e=t.data(Ee);if(e||(e=new Le(this),t.data(Ee,e)),"string"==typeof n){if(void 0===e[n])throw new Error('No method named "'+n+'"');e[n]()}})},I(Le,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}}]),He=Le,ye(document).on(be.CLICK_DATA_API,Pe,function(t){t.preventDefault(),He._jQueryInterface.call(ye(this),"show")}),ye.fn.tab=He._jQueryInterface,ye.fn.tab.Constructor=He,ye.fn.tab.noConflict=function(){return ye.fn.tab=Te,He._jQueryInterface};function Le(t){w(this,Le),this._element=t}var Re,Qe,We,Ue,Ke,Me,Be,Fe,Ve,Ye,qe,ze,Ze,Je,Ge,$e,Xe=function(h){if("undefined"==typeof Popper)throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)");var e="tooltip",i="bs.tooltip",t="."+i,n=h.fn[e],o="bs-tooltip",r=new RegExp("(^|\\s)"+o+"\\S+","g"),s={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)"},a={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},l={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip"},c="show",u="out",d={HIDE:"hide"+t,HIDDEN:"hidden"+t,SHOW:"show"+t,SHOWN:"shown"+t,INSERTED:"inserted"+t,CLICK:"click"+t,FOCUSIN:"focusin"+t,FOCUSOUT:"focusout"+t,MOUSEENTER:"mouseenter"+t,MOUSELEAVE:"mouseleave"+t},f="fade",p="show",g=".tooltip-inner",_=".arrow",m="hover",v="focus",y="click",E="manual",C=(T.prototype.enable=function(){this._isEnabled=!0},T.prototype.disable=function(){this._isEnabled=!1},T.prototype.toggleEnabled=function(){this._isEnabled=!this._isEnabled},T.prototype.toggle=function(t){if(t){var e=this.constructor.DATA_KEY,n=h(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),h(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(h(this.getTipElement()).hasClass(p))return void this._leave(null,this);this._enter(null,this)}},T.prototype.dispose=function(){clearTimeout(this._timeout),h.removeData(this.element,this.constructor.DATA_KEY),h(this.element).off(this.constructor.EVENT_KEY),h(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&h(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},T.prototype.show=function(){var e=this;if("none"===h(this.element).css("display"))throw new Error("Please use show on visible elements");var t=h.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){h(this.element).trigger(t);var n=h.contains(this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!n)return;var i=this.getTipElement(),o=S.getUID(this.constructor.NAME);i.setAttribute("id",o),this.element.setAttribute("aria-describedby",o),this.setContent(),this.config.animation&&h(i).addClass(f);var r="function"==typeof this.config.placement?this.config.placement.call(this,i,this.element):this.config.placement,s=this._getAttachment(r);this.addAttachmentClass(s);var a=!1===this.config.container?document.body:h(this.config.container);function l(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,h(e.element).trigger(e.constructor.Event.SHOWN),t===u&&e._leave(null,e)}h(i).data(this.constructor.DATA_KEY,this),h.contains(this.element.ownerDocument.documentElement,this.tip)||h(i).appendTo(a),h(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new Popper(this.element,i,{placement:s,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:_}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),h(i).addClass(p),"ontouchstart"in document.documentElement&&h("body").children().on("mouseover",null,h.noop),S.supportsTransitionEnd()&&h(this.tip).hasClass(f)?h(this.tip).one(S.TRANSITION_END,l).emulateTransitionEnd(T._TRANSITION_DURATION):l()}},T.prototype.hide=function(t){function e(){n._hoverState!==c&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),h(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()}var n=this,i=this.getTipElement(),o=h.Event(this.constructor.Event.HIDE);h(this.element).trigger(o),o.isDefaultPrevented()||(h(i).removeClass(p),"ontouchstart"in document.documentElement&&h("body").children().off("mouseover",null,h.noop),this._activeTrigger[y]=!1,this._activeTrigger[v]=!1,this._activeTrigger[m]=!1,S.supportsTransitionEnd()&&h(this.tip).hasClass(f)?h(i).one(S.TRANSITION_END,e).emulateTransitionEnd(150):e(),this._hoverState="")},T.prototype.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},T.prototype.isWithContent=function(){return Boolean(this.getTitle())},T.prototype.addAttachmentClass=function(t){h(this.getTipElement()).addClass(o+"-"+t)},T.prototype.getTipElement=function(){return this.tip=this.tip||h(this.config.template)[0]},T.prototype.setContent=function(){var t=h(this.getTipElement());this.setElementContent(t.find(g),this.getTitle()),t.removeClass(f+" "+p)},T.prototype.setElementContent=function(t,e){var n=this.config.html;"object"===(void 0===e?"undefined":b(e))&&(e.nodeType||e.jquery)?n?h(e).parent().is(t)||t.empty().append(e):t.text(h(e).text()):t[n?"html":"text"](e)},T.prototype.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t=t||("function"==typeof this.config.title?this.config.title.call(this.element):this.config.title)},T.prototype._getAttachment=function(t){return a[t.toUpperCase()]},T.prototype._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)h(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==E){var e=t===m?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===m?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;h(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}h(i.element).closest(".modal").on("hide.bs.modal",function(){return i.hide()})}),this.config.selector?this.config=h.extend({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},T.prototype._fixTitle=function(){var t=b(this.element.getAttribute("data-original-title"));!this.element.getAttribute("title")&&"string"===t||(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},T.prototype._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||h(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),h(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?v:m]=!0),h(e.getTipElement()).hasClass(p)||e._hoverState===c?e._hoverState=c:(clearTimeout(e._timeout),e._hoverState=c,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===c&&e.show()},e.config.delay.show):e.show())},T.prototype._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||h(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),h(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?v:m]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=u,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===u&&e.hide()},e.config.delay.hide):e.hide())},T.prototype._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},T.prototype._getConfig=function(t){return(t=h.extend({},this.constructor.Default,h(this.element).data(),t)).delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t.title&&"number"==typeof t.title&&(t.title=t.title.toString()),t.content&&"number"==typeof t.content&&(t.content=t.content.toString()),S.typeCheckConfig(e,t,this.constructor.DefaultType),t},T.prototype._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},T.prototype._cleanTipClass=function(){var t=h(this.getTipElement()),e=t.attr("class").match(r);null!==e&&0<e.length&&t.removeClass(e.join(""))},T.prototype._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},T.prototype._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(h(t).removeClass(f),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},T._jQueryInterface=function(n){return this.each(function(){var t=h(this).data(i),e="object"===(void 0===n?"undefined":b(n))&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new T(this,e),h(this).data(i,t)),"string"==typeof n)){if(void 0===t[n])throw new Error('No method named "'+n+'"');t[n]()}})},I(T,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return l}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return i}},{key:"Event",get:function(){return d}},{key:"EVENT_KEY",get:function(){return t}},{key:"DefaultType",get:function(){return s}}]),T);function T(t,e){w(this,T),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}return h.fn[e]=C._jQueryInterface,h.fn[e].Constructor=C,h.fn[e].noConflict=function(){return h.fn[e]=n,C._jQueryInterface},C}(jQuery);Re=jQuery,We="popover",Ke="."+(Ue="bs.popover"),Me=Re.fn[We],Be="bs-popover",Fe=new RegExp("(^|\\s)"+Be+"\\S+","g"),Ve=Re.extend({},Xe.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Ye=Re.extend({},Xe.DefaultType,{content:"(string|element|function)"}),qe="fade",Ze=".popover-header",Je=".popover-body",Ge={HIDE:"hide"+Ke,HIDDEN:"hidden"+Ke,SHOW:(ze="show")+Ke,SHOWN:"shown"+Ke,INSERTED:"inserted"+Ke,CLICK:"click"+Ke,FOCUSIN:"focusin"+Ke,FOCUSOUT:"focusout"+Ke,MOUSEENTER:"mouseenter"+Ke,MOUSELEAVE:"mouseleave"+Ke},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(tn,Qe=Xe),tn.prototype.isWithContent=function(){return this.getTitle()||this._getContent()},tn.prototype.addAttachmentClass=function(t){Re(this.getTipElement()).addClass(Be+"-"+t)},tn.prototype.getTipElement=function(){return this.tip=this.tip||Re(this.config.template)[0]},tn.prototype.setContent=function(){var t=Re(this.getTipElement());this.setElementContent(t.find(Ze),this.getTitle()),this.setElementContent(t.find(Je),this._getContent()),t.removeClass(qe+" "+ze)},tn.prototype._getContent=function(){return this.element.getAttribute("data-content")||("function"==typeof this.config.content?this.config.content.call(this.element):this.config.content)},tn.prototype._cleanTipClass=function(){var t=Re(this.getTipElement()),e=t.attr("class").match(Fe);null!==e&&0<e.length&&t.removeClass(e.join(""))},tn._jQueryInterface=function(n){return this.each(function(){var t=Re(this).data(Ue),e="object"===(void 0===n?"undefined":b(n))?n:null;if((t||!/destroy|hide/.test(n))&&(t||(t=new tn(this,e),Re(this).data(Ue,t)),"string"==typeof n)){if(void 0===t[n])throw new Error('No method named "'+n+'"');t[n]()}})},I(tn,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return Ve}},{key:"NAME",get:function(){return We}},{key:"DATA_KEY",get:function(){return Ue}},{key:"Event",get:function(){return Ge}},{key:"EVENT_KEY",get:function(){return Ke}},{key:"DefaultType",get:function(){return Ye}}]),$e=tn,Re.fn[We]=$e._jQueryInterface,Re.fn[We].Constructor=$e,Re.fn[We].noConflict=function(){return Re.fn[We]=Me,$e._jQueryInterface};function tn(){return w(this,tn),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,Qe.apply(this,arguments))}}();

;
/*
 * Backstretch
 * http://srobbin.com/jquery-plugins/backstretch/
 *
 * Copyright (c) 2013 Scott Robbin
 * Licensed under the MIT license.
 */

;(function ($, window, undefined) {
  'use strict';

  /** @const */
  var YOUTUBE_REGEXP = /^.*(youtu\.be\/|youtube\.com\/v\/|youtube\.com\/embed\/|youtube\.com\/watch\?v=|youtube\.com\/watch\?.*\&v=)([^#\&\?]*).*/i;

  /* PLUGIN DEFINITION
   * ========================= */

  $.fn.backstretch = function (images, options) {
    var args = arguments;

    /*
     * Scroll the page one pixel to get the right window height on iOS
     * Pretty harmless for everyone else
    */
    if ($(window).scrollTop() === 0) {
      window.scrollTo(0, 0);
    }

    var returnValues;

    this.each(function (eachIndex) {
      var $this = $(this)
        , obj = $this.data('backstretch');

      // Do we already have an instance attached to this element?
      if (obj) {

        // Is this a method they're trying to execute?
        if (typeof args[0] === 'string' &&
          typeof obj[args[0]] === 'function') {

          // Call the method
          var returnValue = obj[args[0]].apply(obj, Array.prototype.slice.call(args, 1));
          if (returnValue === obj) { // If a method is chaining
            returnValue = undefined;
          }
          if (returnValue !== undefined) {
            returnValues = returnValues || [];
            returnValues[eachIndex] = returnValue;
          }

          return; // Nothing further to do
        }

        // Merge the old options with the new
        options = $.extend(obj.options, options);

        // Remove the old instance
        if (typeof obj === 'object' && 'destroy' in obj) {
          obj.destroy(true);
        }
      }

      // We need at least one image
      if (!images || (images && images.length === 0)) {
        var cssBackgroundImage = $this.css('background-image');
        if (cssBackgroundImage && cssBackgroundImage !== 'none') {
          images = [{url: $this.css('backgroundImage').replace(/url\(|\)|"|'/g, "")}];
        }
        else {
          $.error('No images were supplied for Backstretch, or element must have a CSS-defined background image.');
        }
      }

      obj = new Backstretch(this, images, options || {});
      $this.data('backstretch', obj);
    });

    return returnValues ? returnValues.length === 1 ? returnValues[0] : returnValues : this;
  };

  // If no element is supplied, we'll attach to body
  $.backstretch = function (images, options) {
    // Return the instance
    return $('body')
      .backstretch(images, options)
      .data('backstretch');
  };

  // Custom selector
  $.expr[':'].backstretch = function (elem) {
    return $(elem).data('backstretch') !== undefined;
  };

  /* DEFAULTS
   * ========================= */

  $.fn.backstretch.defaults = {
    duration: 5000                // Amount of time in between slides (if slideshow)
    , transition: 'fade'          // Type of transition between slides
    , transitionDuration: 0       // Duration of transition between slides
    , animateFirst: true          // Animate the transition of first image of slideshow in?
    , alignX: 0.5                 // The x-alignment for the image, can be 'left'|'center'|'right' or any number between 0.0 and 1.0
    , alignY: 0.5                 // The y-alignment for the image, can be 'top'|'center'|'bottom' or any number between 0.0 and 1.0
    , paused: false               // Whether the images should slide after given duration
    , start: 0                    // Index of the first image to show
    , preload: 2                  // How many images preload at a time?
    , preloadSize: 1              // How many images can we preload in parallel?
    , resolutionRefreshRate: 2500 // How long to wait before switching resolution?
    , resolutionChangeRatioThreshold: 0.1 // How much a change should it be before switching resolution?
  };

  /* STYLES
   *
   * Baked-in styles that we'll apply to our elements.
   * In an effort to keep the plugin simple, these are not exposed as options.
   * That said, anyone can override these in their own stylesheet.
   * ========================= */
  var styles = {
    wrap: {
      left: 0
      , top: 0
      , overflow: 'hidden'
      , margin: 0
      , padding: 0
      , height: '100%'
      , width: '100%'
      , zIndex: -999999
    }
    , itemWrapper: {
      position: 'absolute'
      , display: 'none'
      , margin: 0
      , padding: 0
      , border: 'none'
      , width: '100%'
      , height: '100%'
      , zIndex: -999999
    }
    , item: {
      position: 'absolute'
      , margin: 0
      , padding: 0
      , border: 'none'
      , width: '100%'
      , height: '100%'
      , maxWidth: 'none'
    }
  };

  /* Given an array of different options for an image,
   * choose the optimal image for the container size.
   *
   * Given an image template (a string with {{ width }} and/or
   * {{height}} inside) and a container object, returns the
   * image url with the exact values for the size of that
   * container.
   *
   * Returns an array of urls optimized for the specified resolution.
   *
   */
  var optimalSizeImages = (function () {

    /* Sorts the array of image sizes based on width */
    var widthInsertSort = function (arr) {
      for (var i = 1; i < arr.length; i++) {
        var tmp = arr[i],
          j = i;
        while (arr[j - 1] && parseInt(arr[j - 1].width, 10) > parseInt(tmp.width, 10)) {
          arr[j] = arr[j - 1];
          --j;
        }
        arr[j] = tmp;
      }

      return arr;
    };

    /* Given an array of various sizes of the same image and a container width,
     * return the best image.
     */
    var selectBest = function (containerWidth, containerHeight, imageSizes) {

      var devicePixelRatio = window.devicePixelRatio || 1;
      var deviceOrientation = getDeviceOrientation();
      var windowOrientation = getWindowOrientation();
      var wrapperOrientation = (containerHeight > containerWidth) ?
        'portrait' :
        (containerWidth > containerHeight ? 'landscape' : 'square');

      var lastAllowedImage = 0;
      var testWidth;

      for (var j = 0, image; j < imageSizes.length; j++) {

        image = imageSizes[j];

        // In case a new image was pushed in, process it:
        if (typeof image === 'string') {
          image = imageSizes[j] = {url: image};
        }

        if (image.pixelRatio && image.pixelRatio !== 'auto' && parseFloat(image.pixelRatio) !== devicePixelRatio) {
          // We disallowed choosing this image for current device pixel ratio,
          // So skip this one.
          continue;
        }

        if (image.deviceOrientation && image.deviceOrientation !== deviceOrientation) {
          // We disallowed choosing this image for current device orientation,
          // So skip this one.
          continue;
        }

        if (image.windowOrientation && image.windowOrientation !== deviceOrientation) {
          // We disallowed choosing this image for current window orientation,
          // So skip this one.
          continue;
        }

        if (image.orientation && image.orientation !== wrapperOrientation) {
          // We disallowed choosing this image for current element's orientation,
          // So skip this one.
          continue;
        }

        // Mark this one as the last one we investigated
        // which does not violate device pixel ratio rules.
        // We may choose this one later if there's no match.
        lastAllowedImage = j;

        // For most images, we match the specified width against element width,
        // And enforcing a limit depending on the "pixelRatio" property if specified.
        // But if a pixelRatio="auto", then we consider the width as the physical width of the image,
        // And match it while considering the device's pixel ratio.
        testWidth = containerWidth;
        if (image.pixelRatio === 'auto') {
          containerWidth *= devicePixelRatio;
        }

        // Stop when the width of the image is larger or equal to the container width
        if (image.width >= testWidth) {
          break;
        }
      }

      // Use the image located at where we stopped
      return imageSizes[Math.min(j, lastAllowedImage)];
    };

    var replaceTagsInUrl = function (url, templateReplacer) {

      if (typeof url === 'string') {
        url = url.replace(/{{(width|height)}}/g, templateReplacer);
      }
      else if (url instanceof Array) {
        for (var i = 0; i < url.length; i++) {
          if (url[i].src) {
            url[i].src = replaceTagsInUrl(url[i].src, templateReplacer);
          }
          else {
            url[i] = replaceTagsInUrl(url[i], templateReplacer);
          }
        }
      }

      return url;
    };

    return function ($container, images) {
      var containerWidth = $container.width(),
        containerHeight = $container.height();

      var chosenImages = [];

      var templateReplacer = function (match, key) {
        if (key === 'width') {
          return containerWidth;
        }
        if (key === 'height') {
          return containerHeight;
        }
        return match;
      };

      for (var i = 0; i < images.length; i++) {
        if ($.isArray(images[i])) {
          images[i] = widthInsertSort(images[i]);
          var chosen = selectBest(containerWidth, containerHeight, images[i]);
          chosenImages.push(chosen);
        }
        else {
          // In case a new image was pushed in, process it:
          if (typeof images[i] === 'string') {
            images[i] = {url: images[i]};
          }

          var item = $.extend({}, images[i]);
          item.url = replaceTagsInUrl(item.url, templateReplacer);
          chosenImages.push(item);
        }
      }
      return chosenImages;
    };

  })();

  var isVideoSource = function (source) {
    return YOUTUBE_REGEXP.test(source.url) || source.isVideo;
  };

  /* Preload images */
  var preload = (function (sources, startAt, count, batchSize, callback) {
    // Plugin cache
    var cache = [];

    // Wrapper for cache
    var caching = function (image) {
      for (var i = 0; i < cache.length; i++) {
        if (cache[i].src === image.src) {
          return cache[i];
        }
      }
      cache.push(image);
      return image;
    };

    // Execute callback
    var exec = function (sources, callback, last) {
      if (typeof callback === 'function') {
        callback.call(sources, last);
      }
    };

    // Closure to hide cache
    return function preload(sources, startAt, count, batchSize, callback) {
      // Check input data
      if (typeof sources === 'undefined') {
        return;
      }
      if (!$.isArray(sources)) {
        sources = [sources];
      }

      if (arguments.length < 5 && typeof arguments[arguments.length - 1] === 'function') {
        callback = arguments[arguments.length - 1];
      }

      startAt = (typeof startAt === 'function' || !startAt) ? 0 : startAt;
      count = (typeof count === 'function' || !count || count < 0) ? sources.length : Math.min(count, sources.length);
      batchSize = (typeof batchSize === 'function' || !batchSize) ? 1 : batchSize;

      if (startAt >= sources.length) {
        startAt = 0;
        count = 0;
      }
      if (batchSize < 0) {
        batchSize = count;
      }
      batchSize = Math.min(batchSize, count);

      var next = sources.slice(startAt + batchSize, count - batchSize);
      sources = sources.slice(startAt, batchSize);
      count = sources.length;

      // If sources array is empty
      if (!count) {
        exec(sources, callback, true);
        return;
      }

      // Image loading callback
      var countLoaded = 0;

      var loaded = function () {
        countLoaded++;
        if (countLoaded !== count) {
          return;
        }

        exec(sources, callback, !next);
        preload(next, 0, 0, batchSize, callback);
      };

      // Loop sources to preload
      var image;

      for (var i = 0; i < sources.length; i++) {

        if (isVideoSource(sources[i])) {

          // Do not preload videos. There are issues with that.
          // First - we need to keep an instance of the preloaded and use that exactly, not a copy.
          // Second - there are memory issues.
          // If there will be a requirement from users - I'll try to implement this.

          continue;

        }
        else {

          image = new Image();
          image.src = sources[i].url;

          image = caching(image);

          if (image.complete) {
            loaded();
          }
          else {
            $(image).on('load error', loaded);
          }

        }

      }
    };
  })();

  /* Process images array */
  var processImagesArray = function (images) {
    var processed = [];
    for (var i = 0; i < images.length; i++) {
      if (typeof images[i] === 'string') {
        processed.push({url: images[i]});
      }
      else if ($.isArray(images[i])) {
        processed.push(processImagesArray(images[i]));
      }
      else {
        processed.push(processOptions(images[i]));
      }
    }
    return processed;
  };

  /* Process options */
  var processOptions = function (options, required) {

    // Convert old options

    // centeredX/centeredY are deprecated
    if (options.centeredX || options.centeredY) {
      if (window.console && window.console.log) {
        window.console.log('jquery.backstretch: `centeredX`/`centeredY` is deprecated, please use `alignX`/`alignY`');
      }
      if (options.centeredX) {
        options.alignX = 0.5;
      }
      if (options.centeredY) {
        options.alignY = 0.5;
      }
    }

    // Deprecated spec
    if (options.speed !== undefined) {

      if (window.console && window.console.log) {
        window.console.log('jquery.backstretch: `speed` is deprecated, please use `transitionDuration`');
      }

      options.transitionDuration = options.speed;
      options.transition = 'fade';
    }

    // Typo
    if (options.resolutionChangeRatioTreshold !== undefined) {
      window.console.log('jquery.backstretch: `treshold` is a typo!');
      options.resolutionChangeRatioThreshold = options.resolutionChangeRatioTreshold;
    }

    // Current spec that needs processing

    if (options.fadeFirst !== undefined) {
      options.animateFirst = options.fadeFirst;
    }

    if (options.fade !== undefined) {
      options.transitionDuration = options.fade;
      options.transition = 'fade';
    }

    if (options.scale) {
      options.scale = validScale(options.scale);
    }

    return processAlignOptions(options);
  };

  /* Process align options */
  var processAlignOptions = function (options, required) {
    if (options.alignX === 'left') {
      options.alignX = 0.0;
    }
    else if (options.alignX === 'center') {
      options.alignX = 0.5;
    }
    else if (options.alignX === 'right') {
      options.alignX = 1.0;
    }
    else {
      if (options.alignX !== undefined || required) {
        options.alignX = parseFloat(options.alignX);
        if (isNaN(options.alignX)) {
          options.alignX = 0.5;
        }
      }
    }

    if (options.alignY === 'top') {
      options.alignY = 0.0;
    }
    else if (options.alignY === 'center') {
      options.alignY = 0.5;
    }
    else if (options.alignY === 'bottom') {
      options.alignY = 1.0;
    }
    else {
      if (options.alignX !== undefined || required) {
        options.alignY = parseFloat(options.alignY);
        if (isNaN(options.alignY)) {
          options.alignY = 0.5;
        }
      }
    }

    return options;
  };

  var SUPPORTED_SCALE_OPTIONS = {
    'cover': 'cover',
    'fit': 'fit',
    'fit-smaller': 'fit-smaller',
    'fill': 'fill'
  };

  function validScale(scale) {
    if (!SUPPORTED_SCALE_OPTIONS.hasOwnProperty(scale)) {
      return 'cover';
    }
    return scale;
  }

  /* CLASS DEFINITION
   * ========================= */
  var Backstretch = function (container, images, options) {
    this.options = $.extend({}, $.fn.backstretch.defaults, options || {});

    this.firstShow = true;

    // Process options
    processOptions(this.options, true);

    /* In its simplest form, we allow Backstretch to be called on an image path.
     * e.g. $.backstretch('/path/to/image.jpg')
     * So, we need to turn this back into an array.
     */
    this.images = processImagesArray($.isArray(images) ? images : [images]);

    /**
     * Paused-Option
     */
    if (this.options.paused) {
      this.paused = true;
    }

    /**
     * Start-Option (Index)
     */
    if (this.options.start >= this.images.length) {
      this.options.start = this.images.length - 1;
    }
    if (this.options.start < 0) {
      this.options.start = 0;
    }

    // Convenience reference to know if the container is body.
    this.isBody = container === document.body;

    /* We're keeping track of a few different elements
     *
     * Container: the element that Backstretch was called on.
     * Wrap: a DIV that we place the image into, so we can hide the overflow.
     * Root: Convenience reference to help calculate the correct height.
     */
    var $window = $(window);
    this.$container = $(container);
    this.$root = this.isBody ? supportsFixedPosition ? $window : $(document) : this.$container;

    this.originalImages = this.images;
    this.images = optimalSizeImages(
      this.options.alwaysTestWindowResolution ? $window : this.$root,
      this.originalImages);

    /**
     * Pre-Loading.
     * This is the first image, so we will preload a minimum of 1 images.
     */
    preload(this.images, this.options.start || 0, this.options.preload || 1);

    // Don't create a new wrap if one already exists (from a previous instance of Backstretch)
    var $existing = this.$container.children(".backstretch").first();
    this.$wrap = $existing.length ? $existing :
      $('<div class="backstretch"></div>')
        .css(this.options.bypassCss ? {} : styles.wrap)
        .appendTo(this.$container);

    if (!this.options.bypassCss) {

      // Non-body elements need some style adjustments
      if (!this.isBody) {
        // If the container is statically positioned, we need to make it relative,
        // and if no zIndex is defined, we should set it to zero.
        var position = this.$container.css('position')
          , zIndex = this.$container.css('zIndex');

        this.$container.css({
          position: position === 'static' ? 'relative' : position
          , zIndex: zIndex === 'auto' ? 0 : zIndex
        });

        // Needs a higher z-index
        this.$wrap.css({zIndex: -999998});
      }

      // Fixed or absolute positioning?
      this.$wrap.css({
        position: this.isBody && supportsFixedPosition ? 'fixed' : 'absolute'
      });

    }

    // Set the first image
    this.index = this.options.start;
    this.show(this.index);

    // Listen for resize
    $window.on('resize.backstretch', $.proxy(this.resize, this))
           .on('orientationchange.backstretch', $.proxy(function () {
             // Need to do this in order to get the right window height
             if (this.isBody && window.pageYOffset === 0) {
               window.scrollTo(0, 1);
               this.resize();
             }
           }, this));
  };

  var performTransition = function (options) {

    var transition = options.transition || 'fade';

    // Look for multiple options
    if (typeof transition === 'string' && transition.indexOf('|') > -1) {
      transition = transition.split('|');
    }

    if (transition instanceof Array) {
      transition = transition[Math.round(Math.random() * (transition.length - 1))];
    }

    var $new = options['new'];
    var $old = options['old'] ? options['old'] : $([]);

    switch (transition.toString().toLowerCase()) {

      default:
      case 'fade':
        $new.fadeIn({
          duration: options.duration,
          complete: options.complete,
          easing: options.easing || undefined
        });
        break;

      case 'fadeinout':
      case 'fade_in_out':

        var fadeInNew = function () {
          $new.fadeIn({
            duration: options.duration / 2,
            complete: options.complete,
            easing: options.easing || undefined
          });
        };

        if ($old.length) {
          $old.fadeOut({
            duration: options.duration / 2,
            complete: fadeInNew,
            easing: options.easing || undefined
          });
        }
        else {
          fadeInNew();
        }

        break;

      case 'pushleft':
      case 'push_left':
      case 'pushright':
      case 'push_right':
      case 'pushup':
      case 'push_up':
      case 'pushdown':
      case 'push_down':
      case 'coverleft':
      case 'cover_left':
      case 'coverright':
      case 'cover_right':
      case 'coverup':
      case 'cover_up':
      case 'coverdown':
      case 'cover_down':

        var transitionParts = transition.match(/^(cover|push)_?(.*)$/);

        var animProp = transitionParts[2] === 'left' ? 'right' :
          transitionParts[2] === 'right' ? 'left' :
            transitionParts[2] === 'down' ? 'top' :
              transitionParts[2] === 'up' ? 'bottom' :
                'right';

        var newCssStart = {
          'display': ''
        }, newCssAnim = {};
        newCssStart[animProp] = '-100%';
        newCssAnim[animProp] = 0;

        $new
          .css(newCssStart)
          .animate(newCssAnim, {
            duration: options.duration,
            complete: function () {
              $new.css(animProp, '');
              options.complete.apply(this, arguments);
            },
            easing: options.easing || undefined
          });

        if (transitionParts[1] === 'push' && $old.length) {
          var oldCssAnim = {};
          oldCssAnim[animProp] = '100%';

          $old
            .animate(oldCssAnim, {
              duration: options.duration,
              complete: function () {
                $old.css('display', 'none');
              },
              easing: options.easing || undefined
            });
        }

        break;
    }

  };

  /* PUBLIC METHODS
   * ========================= */
  Backstretch.prototype = {

    resize: function () {
      try {

        // Check for a better suited image after the resize
        var $resTest = this.options.alwaysTestWindowResolution ? $(window) : this.$root;
        var newContainerWidth = $resTest.width();
        var newContainerHeight = $resTest.height();
        var changeRatioW = newContainerWidth / (this._lastResizeContainerWidth || 0);
        var changeRatioH = newContainerHeight / (this._lastResizeContainerHeight || 0);
        var resolutionChangeRatioThreshold = this.options.resolutionChangeRatioThreshold || 0.0;

        // check for big changes in container size
        if ((newContainerWidth !== this._lastResizeContainerWidth ||
          newContainerHeight !== this._lastResizeContainerHeight) &&
          ((Math.abs(changeRatioW - 1) >= resolutionChangeRatioThreshold || isNaN(changeRatioW)) ||
            (Math.abs(changeRatioH - 1) >= resolutionChangeRatioThreshold || isNaN(changeRatioH)))) {

          this._lastResizeContainerWidth = newContainerWidth;
          this._lastResizeContainerHeight = newContainerHeight;

          // Big change: rebuild the entire images array
          this.images = optimalSizeImages($resTest, this.originalImages);

          // Preload them (they will be automatically inserted on the next cycle)
          if (this.options.preload) {
            preload(this.images, (this.index + 1) % this.images.length, this.options.preload);
          }

          // In case there is no cycle and the new source is different than the current
          if (this.images.length === 1 &&
            this._currentImage.url !== this.images[0].url) {

            // Wait a little an update the image being showed
            var that = this;
            clearTimeout(that._selectAnotherResolutionTimeout);
            that._selectAnotherResolutionTimeout = setTimeout(function () {
              that.show(0);
            }, this.options.resolutionRefreshRate);
          }
        }

        var bgCSS = {left: 0, top: 0, right: 'auto', bottom: 'auto'}

          , boxWidth = this.isBody ? this.$root.width() : this.$root.innerWidth()
          , boxHeight = this.isBody
          ? (window.innerHeight ? window.innerHeight : this.$root.height())
          : this.$root.innerHeight()

          , naturalWidth = this.$itemWrapper.data('width')
          , naturalHeight = this.$itemWrapper.data('height')

          , ratio = (naturalWidth / naturalHeight) || 1

          , alignX = this._currentImage.alignX === undefined ? this.options.alignX : this._currentImage.alignX
          , alignY = this._currentImage.alignY === undefined ? this.options.alignY : this._currentImage.alignY
          , scale = validScale(this._currentImage.scale || this.options.scale);

        var width, height;

        if (scale === 'fit' || scale === 'fit-smaller') {
          width = naturalWidth;
          height = naturalHeight;

          if (width > boxWidth ||
            height > boxHeight ||
            scale === 'fit-smaller') {
            var boxRatio = boxWidth / boxHeight;
            if (boxRatio > ratio) {
              width = Math.floor(boxHeight * ratio);
              height = boxHeight;
            }
            else if (boxRatio < ratio) {
              width = boxWidth;
              height = Math.floor(boxWidth / ratio);
            }
            else {
              width = boxWidth;
              height = boxHeight;
            }
          }
        }
        else if (scale === 'fill') {
          width = boxWidth;
          height = boxHeight;
        }
        else { // 'cover'
          width = Math.max(boxHeight * ratio, boxWidth);
          height = Math.max(width / ratio, boxHeight);
        }

        // Make adjustments based on image ratio
        bgCSS.top = -(height - boxHeight) * alignY;
        bgCSS.left = -(width - boxWidth) * alignX;
        bgCSS.width = width;
        bgCSS.height = height;

        if (!this.options.bypassCss) {

          this.$wrap
              .css({width: boxWidth, height: boxHeight})
              .find('>.backstretch-item').not('.deleteable')
              .each(function () {
                var $wrapper = $(this);
                $wrapper.find('img,video,iframe')
                        .css(bgCSS);
              });
        }

        var evt = $.Event('backstretch.resize', {
          relatedTarget: this.$container[0]
        });
        this.$container.trigger(evt, this);

      }
      catch (err) {
        // IE7 seems to trigger resize before the image is loaded.
        // This try/catch block is a hack to let it fail gracefully.
      }

      return this;
    }

    // Show the slide at a certain position
    , show: function (newIndex, overrideOptions) {

      // Validate index
      if (Math.abs(newIndex) > this.images.length - 1) {
        return;
      }

      // Vars
      var that = this
        , $oldItemWrapper = that.$wrap.find('>.backstretch-item').addClass('deleteable')
        , oldVideoWrapper = that.videoWrapper
        , evtOptions = {relatedTarget: that.$container[0]};

      // Trigger the "before" event
      that.$container.trigger($.Event('backstretch.before', evtOptions), [that, newIndex]);

      // Set the new frame index
      this.index = newIndex;
      var selectedImage = that.images[newIndex];

      // Pause the slideshow
      clearTimeout(that._cycleTimeout);

      // New image

      delete that.videoWrapper; // Current item may not be a video

      var isVideo = isVideoSource(selectedImage);
      if (isVideo) {
        that.videoWrapper = new VideoWrapper(selectedImage);
        that.$item = that.videoWrapper.$video.css('pointer-events', 'none');
      }
      else {
        that.$item = $('<img />');
      }

      that.$itemWrapper = $('<div class="backstretch-item">')
        .append(that.$item);

      if (this.options.bypassCss) {
        that.$itemWrapper.css({
          'display': 'none'
        });
      }
      else {
        that.$itemWrapper.css(styles.itemWrapper);
        that.$item.css(styles.item);
      }

      that.$item.bind(isVideo ? 'canplay' : 'load', function (e) {
        var $this = $(this)
          , $wrapper = $this.parent()
          , options = $wrapper.data('options');

        if (overrideOptions) {
          options = $.extend({}, options, overrideOptions);
        }

        var imgWidth = this.naturalWidth || this.videoWidth || this.width
          , imgHeight = this.naturalHeight || this.videoHeight || this.height;

        // Save the natural dimensions
        $wrapper
          .data('width', imgWidth)
          .data('height', imgHeight);

        var getOption = function (opt) {
          return options[opt] !== undefined ?
            options[opt] :
            that.options[opt];
        };

        var transition = getOption('transition');
        var transitionEasing = getOption('transitionEasing');
        var transitionDuration = getOption('transitionDuration');

        // Show the image, then delete the old one
        var bringInNextImage = function () {

          if (oldVideoWrapper) {
            oldVideoWrapper.stop();
            oldVideoWrapper.destroy();
          }

          $oldItemWrapper.remove();

          // Resume the slideshow
          if (!that.paused && that.images.length > 1) {
            that.cycle();
          }

          // Now we can clear the background on the element, to spare memory
          if (!that.options.bypassCss && !that.isBody) {
            that.$container.css('background-image', 'none');
          }

          // Trigger the "after" and "show" events
          // "show" is being deprecated
          $(['after', 'show']).each(function () {
            that.$container.trigger($.Event('backstretch.' + this, evtOptions), [that, newIndex]);
          });

          if (isVideo) {
            that.videoWrapper.play();
          }
        };

        if ((that.firstShow && !that.options.animateFirst) || !transitionDuration || !transition) {
          // Avoid transition on first show or if there's no transitionDuration value
          $wrapper.show();
          bringInNextImage();
        }
        else {

          performTransition({
            'new': $wrapper,
            old: $oldItemWrapper,
            transition: transition,
            duration: transitionDuration,
            easing: transitionEasing,
            complete: bringInNextImage
          });

        }

        that.firstShow = false;

        // Resize
        that.resize();
      });

      that.$itemWrapper.appendTo(that.$wrap);

      that.$item.attr('alt', selectedImage.alt || '');
      that.$itemWrapper.data('options', selectedImage);

      if (!isVideo) {
        that.$item.attr('src', selectedImage.url);
      }

      that._currentImage = selectedImage;

      return that;
    }

    , current: function () {
      return this.index;
    }

    , next: function () {
      var args = Array.prototype.slice.call(arguments, 0);
      args.unshift(this.index < this.images.length - 1 ? this.index + 1 : 0);
      return this.show.apply(this, args);
    }

    , prev: function () {
      var args = Array.prototype.slice.call(arguments, 0);
      args.unshift(this.index === 0 ? this.images.length - 1 : this.index - 1);
      return this.show.apply(this, args);
    }

    , pause: function () {
      // Pause the slideshow
      this.paused = true;

      if (this.videoWrapper) {
        this.videoWrapper.pause();
      }

      return this;
    }

    , resume: function () {
      // Resume the slideshow
      this.paused = false;

      if (this.videoWrapper) {
        this.videoWrapper.play();
      }

      this.cycle();
      return this;
    }

    , cycle: function () {
      // Start/resume the slideshow
      if (this.images.length > 1) {
        // Clear the timeout, just in case
        clearTimeout(this._cycleTimeout);

        var duration = (this._currentImage && this._currentImage.duration) || this.options.duration;
        var isVideo = isVideoSource(this._currentImage);

        var callNext = function () {
          this.$item.off('.cycle');

          // Check for paused slideshow
          if (!this.paused) {
            this.next();
          }
        };

        // Special video handling
        if (isVideo) {

          // Leave video at last frame
          if (!this._currentImage.loop) {
            var lastFrameTimeout = 0;

            this.$item
                .on('playing.cycle', function () {
                  var player = $(this).data('player');

                  clearTimeout(lastFrameTimeout);
                  lastFrameTimeout = setTimeout(function () {
                    player.pause();
                    player.$video.trigger('ended');
                  }, (player.getDuration() - player.getCurrentTime()) * 1000);
                })
                .on('ended.cycle', function () {
                  clearTimeout(lastFrameTimeout);
                });
          }

          // On error go to next
          this.$item.on('error.cycle initerror.cycle', $.proxy(callNext, this));
        }

        if (isVideo && !this._currentImage.duration) {
          // It's a video - playing until end
          this.$item.on('ended.cycle', $.proxy(callNext, this));

        }
        else {
          // Cycling according to specified duration
          this._cycleTimeout = setTimeout($.proxy(callNext, this), duration);
        }

      }
      return this;
    }

    , destroy: function (preserveBackground) {
      // Stop the resize events
      $(window).off('resize.backstretch orientationchange.backstretch');

      // Stop any videos
      if (this.videoWrapper) {
        this.videoWrapper.destroy();
      }

      // Clear the timeout
      clearTimeout(this._cycleTimeout);

      // Remove Backstretch
      if (!preserveBackground) {
        this.$wrap.remove();
      }
      this.$container.removeData('backstretch');
    }
  };

  /**
   * Video Abstraction Layer
   *
   * Static methods:
   * > VideoWrapper.loadYoutubeAPI() -> Call in order to load the Youtube API.
   *                                   An 'youtube_api_load' event will be triggered on $(window) when the API is loaded.
   *
   * Generic:
   * > player.type -> type of the video
   * > player.video / player.$video -> contains the element holding the video
   * > player.play() -> plays the video
   * > player.pause() -> pauses the video
   * > player.setCurrentTime(position) -> seeks to a position by seconds
   *
   * Youtube:
   * > player.ytId will contain the youtube ID if the source is a youtube url
   * > player.ytReady is a flag telling whether the youtube source is ready for playback
   * */

  var VideoWrapper = function () { this.init.apply(this, arguments); };

  /**
   * @param {Object} options
   * @param {String|Array<String>|Array<{{src: String, type: String?}}>} options.url
   * @param {Boolean} options.loop=false
   * @param {Boolean?} options.mute=true
   * @param {String?} options.poster
   * loop, mute, poster
   */
  VideoWrapper.prototype.init = function (options) {

    var that = this;

    var $video;

    var setVideoElement = function () {
      that.$video = $video;
      that.video = $video[0];
    };

    // Determine video type

    var videoType = 'video';

    if (!(options.url instanceof Array) &&
      YOUTUBE_REGEXP.test(options.url)) {
      videoType = 'youtube';
    }

    that.type = videoType;

    if (videoType === 'youtube') {

      // Try to load the API in the meantime
      VideoWrapper.loadYoutubeAPI();

      that.ytId = options.url.match(YOUTUBE_REGEXP)[2];
      var src = 'https://www.youtube.com/embed/' + that.ytId +
        '?rel=0&autoplay=0&showinfo=0&controls=0&modestbranding=1' +
        '&cc_load_policy=0&disablekb=1&iv_load_policy=3&loop=0' +
        '&enablejsapi=1&origin=' + encodeURIComponent(window.location.origin);

      that.__ytStartMuted = !!options.mute || options.mute === undefined;

      $video = $('<iframe />')
        .attr({'src_to_load': src})
        .css({'border': 0, 'margin': 0, 'padding': 0})
        .data('player', that);

      if (options.loop) {
        $video.on('ended.loop', function () {
          if (!that.__manuallyStopped) {
            that.play();
          }
        });
      }

      that.ytReady = false;

      setVideoElement();

      if (window['YT'] && window['YT'].loaded) {
        that._initYoutube();
        $video.trigger('initsuccess');
      }
      else {
        $(window).one('youtube_api_load', function () {
          that._initYoutube();
          $video.trigger('initsuccess');
        });
      }

    }
    else {
      // Traditional <video> tag with multiple sources

      $video = $('<video>')
        .prop('autoplay', false)
        .prop('controls', false)
        .prop('loop', !!options.loop)
        .prop('muted', !!options.mute || options.mute === undefined)

        // Let the first frames be available before playback, as we do transitions
        .prop('preload', 'auto')
        .prop('poster', options.poster || '');

      var sources = (options.url instanceof Array) ? options.url : [options.url];

      for (var i = 0; i < sources.length; i++) {
        var sourceItem = sources[i];
        if (typeof (sourceItem) === 'string') {
          sourceItem = {src: sourceItem};
        }
        $('<source>')
          .attr('src', sourceItem.src)
          // Make sure to not specify type if unknown -
          //   so the browser will try to autodetect.
          .attr('type', sourceItem.type || null)
          .appendTo($video);
      }

      if (!$video[0].canPlayType || !sources.length) {
        $video.trigger('initerror');
      }
      else {
        $video.trigger('initsuccess');
      }

      setVideoElement();
    }

  };

  VideoWrapper.prototype._initYoutube = function () {
    var that = this;

    var YT = window['YT'];

    that.$video
        .attr('src', that.$video.attr('src_to_load'))
        .removeAttr('src_to_load');

    // It won't init if it's not in the DOM, so we emulate that
    var hasParent = !!that.$video[0].parentNode;
    if (!hasParent) {
      var $tmpParent = $('<div>').css('display', 'none !important').appendTo(document.body);
      that.$video.appendTo($tmpParent);
    }

    var player = new YT.Player(that.video, {
      events: {
        'onReady': function () {

          if (that.__ytStartMuted) {
            player.mute();
          }

          if (!hasParent) {
            // Restore parent to old state - without interrupting any changes
            if (that.$video[0].parentNode === $tmpParent[0]) {
              that.$video.detach();
            }
            $tmpParent.remove();
          }

          that.ytReady = true;
          that._updateYoutubeSize();
          that.$video.trigger('canplay');
        },
        'onStateChange': function (event) {
          switch (event.data) {
            case YT.PlayerState.PLAYING:
              that.$video.trigger('playing');
              break;
            case YT.PlayerState.ENDED:
              that.$video.trigger('ended');
              break;
            case YT.PlayerState.PAUSED:
              that.$video.trigger('pause');
              break;
            case YT.PlayerState.BUFFERING:
              that.$video.trigger('waiting');
              break;
            case YT.PlayerState.CUED:
              that.$video.trigger('canplay');
              break;
          }
        },
        'onPlaybackQualityChange': function () {
          that._updateYoutubeSize();
          that.$video.trigger('resize');
        },
        'onError': function (err) {
          that.hasError = true;
          that.$video.trigger({'type': 'error', 'error': err});
        }
      }
    });

    that.ytPlayer = player;

    return that;
  };

  VideoWrapper.prototype._updateYoutubeSize = function () {
    var that = this;

    switch (that.ytPlayer.getPlaybackQuality() || 'medium') {
      case 'small':
        that.video.videoWidth = 426;
        that.video.videoHeight = 240;
        break;
      case 'medium':
        that.video.videoWidth = 640;
        that.video.videoHeight = 360;
        break;
      default:
      case 'large':
        that.video.videoWidth = 854;
        that.video.videoHeight = 480;
        break;
      case 'hd720':
        that.video.videoWidth = 1280;
        that.video.videoHeight = 720;
        break;
      case 'hd1080':
        that.video.videoWidth = 1920;
        that.video.videoHeight = 1080;
        break;
      case 'highres':
        that.video.videoWidth = 2560;
        that.video.videoHeight = 1440;
        break;
    }

    return that;
  };

  VideoWrapper.prototype.play = function () {
    var that = this;

    that.__manuallyStopped = false;

    if (that.type === 'youtube') {
      if (that.ytReady) {
        that.$video.trigger('play');
        that.ytPlayer.playVideo();
      }
    }
    else {
      that.video.play();
    }

    return that;
  };

  VideoWrapper.prototype.pause = function () {
    var that = this;

    that.__manuallyStopped = false;

    if (that.type === 'youtube') {
      if (that.ytReady) {
        that.ytPlayer.pauseVideo();
      }
    }
    else {
      that.video.pause();
    }

    return that;
  };

  VideoWrapper.prototype.stop = function () {
    var that = this;

    that.__manuallyStopped = true;

    if (that.type === 'youtube') {
      if (that.ytReady) {
        that.ytPlayer.pauseVideo();
        that.ytPlayer.seekTo(0);
      }
    }
    else {
      that.video.pause();
      that.video.currentTime = 0;
    }

    return that;
  };

  VideoWrapper.prototype.destroy = function () {
    var that = this;

    if (that.ytPlayer) {
      that.ytPlayer.destroy();
    }

    that.$video.remove();

    return that;
  };

  VideoWrapper.prototype.getCurrentTime = function (seconds) {
    var that = this;

    if (that.type === 'youtube') {
      if (that.ytReady) {
        return that.ytPlayer.getCurrentTime();
      }
    }
    else {
      return that.video.currentTime;
    }

    return 0;
  };

  VideoWrapper.prototype.setCurrentTime = function (seconds) {
    var that = this;

    if (that.type === 'youtube') {
      if (that.ytReady) {
        that.ytPlayer.seekTo(seconds, true);
      }
    }
    else {
      that.video.currentTime = seconds;
    }

    return that;
  };

  VideoWrapper.prototype.getDuration = function () {
    var that = this;

    if (that.type === 'youtube') {
      if (that.ytReady) {
        return that.ytPlayer.getDuration();
      }
    }
    else {
      return that.video.duration;
    }

    return 0;
  };

  /**
   * This will load the youtube API (if not loaded yet)
   * Use $(window).one('youtube_api_load', ...) to listen for API loaded event
   */
  VideoWrapper.loadYoutubeAPI = function () {
    if (window['YT'] && window['__yt_load_event_interval__']) {
      return;
    }
    
    if (!window['YT'] && !$('script[src*=www\\.youtube\\.com\\/iframe_api]').length) {
      $('<script type="text/javascript" src="https://www.youtube.com/iframe_api">').appendTo('body');
    }
    
    window['__yt_load_event_interval__'] = setInterval(function () {
      if (window['YT'] && window['YT'].loaded) {
        $(window).trigger('youtube_api_load');
        clearTimeout(window['__yt_load_event_interval__']);
        delete window['__yt_load_event_interval__'];
      }
    }, 50);
  };

  var getDeviceOrientation = function () {

    if ('matchMedia' in window) {
      if (window.matchMedia("(orientation: portrait)").matches) {
        return 'portrait';
      }
      else if (window.matchMedia("(orientation: landscape)").matches) {
        return 'landscape';
      }
    }

    if (screen.height > screen.width) {
      return 'portrait';
    }

    // Even square devices have orientation,
    //   but a desktop browser may be too old for `matchMedia`.
    // Defaulting to `landscape` for the VERY rare case of a square desktop screen is good enough.
    return 'landscape';
  };

  var getWindowOrientation = function () {
    if (window.innerHeight > window.innerWidth) {
      return 'portrait';
    }
    if (window.innerWidth > window.innerHeight) {
      return 'landscape';
    }

    return 'square';
  };

  /* SUPPORTS FIXED POSITION?
   *
   * Based on code from jQuery Mobile 1.1.0
   * http://jquerymobile.com/
   *
   * In a nutshell, we need to figure out if fixed positioning is supported.
   * Unfortunately, this is very difficult to do on iOS, and usually involves
   * injecting content, scrolling the page, etc.. It's ugly.
   * jQuery Mobile uses this workaround. It's not ideal, but works.
   *
   * Modified to detect IE6
   * ========================= */

  var supportsFixedPosition = (function () {
    var ua = navigator.userAgent
      , platform = navigator.platform
      // Rendering engine is Webkit, and capture major version
      , wkmatch = ua.match(/AppleWebKit\/([0-9]+)/)
      , wkversion = !!wkmatch && wkmatch[1]
      , ffmatch = ua.match(/Fennec\/([0-9]+)/)
      , ffversion = !!ffmatch && ffmatch[1]
      , operammobilematch = ua.match(/Opera Mobi\/([0-9]+)/)
      , omversion = !!operammobilematch && operammobilematch[1]
      , iematch = ua.match(/MSIE ([0-9]+)/)
      , ieversion = !!iematch && iematch[1];

    return !(
      // iOS 4.3 and older : Platform is iPhone/Pad/Touch and Webkit version is less than 534 (ios5)
      ((platform.indexOf("iPhone") > -1 || platform.indexOf("iPad") > -1 || platform.indexOf(
        "iPod") > -1) && wkversion && wkversion < 534) ||

      // Opera Mini
      (window.operamini && ({}).toString.call(window.operamini) === "[object OperaMini]") ||
      (operammobilematch && omversion < 7458) ||

      //Android lte 2.1: Platform is Android and Webkit version is less than 533 (Android 2.2)
      (ua.indexOf("Android") > -1 && wkversion && wkversion < 533) ||

      // Firefox Mobile before 6.0 -
      (ffversion && ffversion < 6) ||

      // WebOS less than 3
      ("palmGetResource" in window && wkversion && wkversion < 534) ||

      // MeeGo
      (ua.indexOf("MeeGo") > -1 && ua.indexOf("NokiaBrowser/8.5.0") > -1) ||

      // IE6
      (ieversion && ieversion <= 6)
    );
  }());

}(jQuery, window));
;
!function(){"use strict";Drupal.behaviors.droopler_subtheme={attach:function(t,e){}}}(jQuery);

;
(function ($) {
  'use strict';

  Drupal.behaviors.d_p_banner = {
    attach: function (context, settings) {

      d_p_resize_image(true);

      var resizeTimer;
      $(window).on('resize', function(e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
          d_p_resize_image(false);
        }, 1000);
      });

      /**
       * Resize image and vertical align paragraph.
       */
      function d_p_resize_image(fade_in) {
        fade_in = (fade_in == true) ? 500 : 0;
        var $background_image = $('.background-image');
        var $paragraph_settings;
        var url = [];
        var i;
        $background_image.each(function () {
          if (typeof drupalSettings.image_background[$(this).data("id")] !== 'undefined') {
            $paragraph_settings = drupalSettings.image_background[$(this).data("id")];
            url = [];
            for (i = 0; i < $paragraph_settings.length; i++) {
              url[i] = {
                "width": $paragraph_settings[i].width,
                "url": $paragraph_settings[i].url,
                "fade": fade_in,
              };
            }
            
            var container_half_outer = $(this).next('.container-half').outerHeight();
            if (typeof container_half_outer !== 'undefined') {
              $(this).css('height', container_half_outer + 50 + 'px');
            }
            $(this).backstretch([url]);
          }
        });
      }
    }
  };
})(jQuery);
;
/**
 * @file
 * The script that scales facebook video iframes.
 */

(function ($) {
  'use strict';

  Drupal.behaviors.d_p_side_embed = {
    attach: function (context, settings) {

      function resizeVideo($video, $wrapper, aspectRatio) {
        var wrapperDimensions = {
          width: $wrapper.width(),
          height: $wrapper.height()
        };
        var videoDimensions = {
          width: $wrapper.height() * aspectRatio.horizontal,
          height: $wrapper.height()
        };
        if (videoDimensions.width > wrapperDimensions.width) {
          videoDimensions.width = wrapperDimensions.width;
          videoDimensions.height = $wrapper.width() * aspectRatio.vertical;
        }
        $video.css(videoDimensions);
      }

      $('.paragraph--type--d-p-side-embed', context).once('d_p_side_embed').each(function () {
        var embedType = '';
        var $embedWrapper = $(this).find('.d-p-side-embed-embed');
        var $embed = $embedWrapper.find('iframe');
        if ($embed.length === 0) {
          return;
        }

        if ($embed.attr('src').indexOf('//www.facebook.com') >= 0) {
          embedType = 'facebook';
          var aspectRatio = {
            horizontal: $embed.attr('width') / $embed.attr('height'),
            vertical: $embed.attr('height') / $embed.attr('width')
          };
          resizeVideo($embed, $embedWrapper, aspectRatio);
          $(window).resize(function () {
            resizeVideo($embed, $embedWrapper, aspectRatio);
          });
        }

        if ($embed.attr('src').indexOf('//www.youtube.com/embed') >= 0) {
          embedType = 'youtube';
        }

        if ($embed.attr('src').indexOf('//player.vimeo.com') >= 0) {
          embedType = 'vimeo';
        }

        if ($embed.attr('src').indexOf('dailymotion.com/embed') > 0) {
          embedType = 'dailymotion';
        }

        if ($embed.attr('src').indexOf('//www.google.com/maps') > 0) {
          embedType = 'google-maps';
        }

        $embed.addClass(embedType + '-embed');
        $embed.closest('.d-p-side-embed-embed').addClass(embedType + '-wrapper');
      });
    }
  };
})(jQuery);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

Drupal.debounce = function (func, wait, immediate) {
  var timeout = void 0;
  var result = void 0;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;
    var later = function later() {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
    }
    return result;
  };
};;
/*! jquery.cookie v1.4.1 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, debounce) {
  $.fn.drupalGetSummary = function () {
    var callback = this.data('summaryCallback');
    return this[0] && callback ? $.trim(callback(this[0])) : '';
  };

  $.fn.drupalSetSummary = function (callback) {
    var self = this;

    if (typeof callback !== 'function') {
      var val = callback;
      callback = function callback() {
        return val;
      };
    }

    return this.data('summaryCallback', callback).off('formUpdated.summary').on('formUpdated.summary', function () {
      self.trigger('summaryUpdated');
    }).trigger('summaryUpdated');
  };

  Drupal.behaviors.formSingleSubmit = {
    attach: function attach() {
      function onFormSubmit(e) {
        var $form = $(e.currentTarget);
        var formValues = $form.serialize();
        var previousValues = $form.attr('data-drupal-form-submit-last');
        if (previousValues === formValues) {
          e.preventDefault();
        } else {
          $form.attr('data-drupal-form-submit-last', formValues);
        }
      }

      $('body').once('form-single-submit').on('submit.singleSubmit', 'form:not([method~="GET"])', onFormSubmit);
    }
  };

  function triggerFormUpdated(element) {
    $(element).trigger('formUpdated');
  }

  function fieldsList(form) {
    var $fieldList = $(form).find('[name]').map(function (index, element) {
      return element.getAttribute('id');
    });

    return $.makeArray($fieldList);
  }

  Drupal.behaviors.formUpdated = {
    attach: function attach(context) {
      var $context = $(context);
      var contextIsForm = $context.is('form');
      var $forms = (contextIsForm ? $context : $context.find('form')).once('form-updated');
      var formFields = void 0;

      if ($forms.length) {
        $.makeArray($forms).forEach(function (form) {
          var events = 'change.formUpdated input.formUpdated ';
          var eventHandler = debounce(function (event) {
            triggerFormUpdated(event.target);
          }, 300);
          formFields = fieldsList(form).join(',');

          form.setAttribute('data-drupal-form-fields', formFields);
          $(form).on(events, eventHandler);
        });
      }

      if (contextIsForm) {
        formFields = fieldsList(context).join(',');

        var currentFields = $(context).attr('data-drupal-form-fields');

        if (formFields !== currentFields) {
          triggerFormUpdated(context);
        }
      }
    },
    detach: function detach(context, settings, trigger) {
      var $context = $(context);
      var contextIsForm = $context.is('form');
      if (trigger === 'unload') {
        var $forms = (contextIsForm ? $context : $context.find('form')).removeOnce('form-updated');
        if ($forms.length) {
          $.makeArray($forms).forEach(function (form) {
            form.removeAttribute('data-drupal-form-fields');
            $(form).off('.formUpdated');
          });
        }
      }
    }
  };

  Drupal.behaviors.fillUserInfoFromBrowser = {
    attach: function attach(context, settings) {
      var userInfo = ['name', 'mail', 'homepage'];
      var $forms = $('[data-user-info-from-browser]').once('user-info-from-browser');
      if ($forms.length) {
        userInfo.forEach(function (info) {
          var $element = $forms.find('[name=' + info + ']');
          var browserData = localStorage.getItem('Drupal.visitor.' + info);
          var emptyOrDefault = $element.val() === '' || $element.attr('data-drupal-default-value') === $element.val();
          if ($element.length && emptyOrDefault && browserData) {
            $element.val(browserData);
          }
        });
      }
      $forms.on('submit', function () {
        userInfo.forEach(function (info) {
          var $element = $forms.find('[name=' + info + ']');
          if ($element.length) {
            localStorage.setItem('Drupal.visitor.' + info, $element.val());
          }
        });
      });
    }
  };

  var handleFragmentLinkClickOrHashChange = function handleFragmentLinkClickOrHashChange(e) {
    var url = void 0;
    if (e.type === 'click') {
      url = e.currentTarget.location ? e.currentTarget.location : e.currentTarget;
    } else {
      url = window.location;
    }
    var hash = url.hash.substr(1);
    if (hash) {
      var $target = $('#' + hash);
      $('body').trigger('formFragmentLinkClickOrHashChange', [$target]);

      setTimeout(function () {
        return $target.trigger('focus');
      }, 300);
    }
  };

  var debouncedHandleFragmentLinkClickOrHashChange = debounce(handleFragmentLinkClickOrHashChange, 300, true);

  $(window).on('hashchange.form-fragment', debouncedHandleFragmentLinkClickOrHashChange);

  $(document).on('click.form-fragment', 'a[href*="#"]', debouncedHandleFragmentLinkClickOrHashChange);
})(jQuery, Drupal, Drupal.debounce);;
(function(x){var g;"undefined"!==typeof window?g=window:"undefined"!==typeof self&&(g=self);g.inViewport=x()})(function(){return function e(g,n,p){function t(k,f){if(!n[k]){if(!g[k]){var l="function"==typeof require&&require;if(!f&&l)return l(k,!0);if(u)return u(k,!0);f=Error("Cannot find module '"+k+"'");throw f.code="MODULE_NOT_FOUND",f;}f=n[k]={exports:{}};g[k][0].call(f.exports,function(e){var f=g[k][1][e];return t(f?f:e)},f,f.exports,e,g,n,p)}return n[k].exports}for(var u="function"==typeof require&&
require,q=0;q<p.length;q++)t(p[q]);return t}({1:[function(g,n,p){(function(e){function g(b,a,d){b.attachEvent?b.attachEvent("on"+a,d):b.addEventListener(a,d,!1)}function p(b,a,d){var c;return function(){var m=this,e=arguments,f=d&&!c;clearTimeout(c);c=setTimeout(function(){c=null;d||b.apply(m,e)},a);f&&b.apply(m,e)}}function q(b,a,d){function c(a,b,c){return{watch:function(){h.add(a,b,c)},dispose:function(){h.remove(a)}}}function m(a,c){if(!(a&&v(e.document.documentElement,a)&&v(e.document.documentElement,
b)&&a.offsetWidth&&a.offsetHeight))return!1;var d=a.getBoundingClientRect();if(b===e.document.body){a=-c;var m=-c;var f=e.document.documentElement.clientWidth+c;c=e.document.documentElement.clientHeight+c}else{var h=b.getBoundingClientRect();a=h.top-c;m=h.left-c;f=h.right+c;c=h.bottom+c}return d.right>=m&&d.left<=f&&d.bottom>=a&&d.top<=c}var h=k(),w=b===e.document.body?e:b,r=p(h.checkAll(function(a,c,b){m(a,c)&&(h.remove(a),b(a))}),a);g(w,"scroll",r);w===e&&g(e,"resize",r);y&&f(h,b,r);0<d&&setInterval(r,
d);return{container:b,isInViewport:function(a,b,d){if(!d)return m(a,b);a=c(a,b,d);a.watch();return a},_debounce:a,_failsafe:d}}function k(){function b(a){for(var c=d.length-1;0<=c;c--)if(d[c][0]===a)return c;return-1}function a(a){return-1!==b(a)}var d=[];return{add:function(c,b,e){a(c)||d.push([c,b,e])},remove:function(a){a=b(a);-1!==a&&d.splice(a,1)},isWatched:a,checkAll:function(a){return function(){for(var b=d.length-1;0<=b;b--)a.apply(this,d[b])}}}}function f(b,a,d){function c(a){a=g.call([],
Array.prototype.slice.call(a.addedNodes),a.target);return 0<f.call(a,b.isWatched).length}var e=new MutationObserver(function(a){!0===a.some(c)&&setTimeout(d,0)}),f=Array.prototype.filter,g=Array.prototype.concat;e.observe(a,{childList:!0,subtree:!0,attributes:!0})}n.exports=function(b,a,d){var c=e.document.body;if(void 0===a||"function"===typeof a)d=a,a={};c=a.container||c;var f=a.offset||0,h=a.debounce||15;a=a.failsafe||150;!0===a?a=150:!1===a&&(a=0);0<a&&a<h&&(a=h+50);for(var g=0;g<l.length;g++)if(l[g].container===
c&&l[g]._debounce===h&&l[g]._failsafe===a)return l[g].isInViewport(b,f,d);return l[l.push(q(c,h,a))-1].isInViewport(b,f,d)};var l=[],y="function"===typeof e.MutationObserver,v=function(){return e.document?e.document.documentElement.compareDocumentPosition?function(b,a){return!!(b.compareDocumentPosition(a)&16)}:e.document.documentElement.contains?function(b,a){return b!==a&&(b.contains?b.contains(a):!1)}:function(b,a){for(;a=a.parentNode;)if(a===b)return!0;return!1}:!0}}).call(this,"undefined"!==
typeof global?global:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{})},{}]},{},[1])(1)});
;
!function(a,n){"function"==typeof define&&define.amd?define(n):"object"==typeof exports?module.exports=n(require,exports,module):a.CountUp=n()}(this,function(a,n,t){var e=function(a,n,t,e,i,r){function o(a){var n,t,e,i,r,o,s=a<0;if(a=Math.abs(a).toFixed(l.decimals),a+="",n=a.split("."),t=n[0],e=n.length>1?l.options.decimal+n[1]:"",l.options.useGrouping){for(i="",r=0,o=t.length;r<o;++r)0!==r&&r%3===0&&(i=l.options.separator+i),i=t[o-r-1]+i;t=i}return l.options.numerals.length&&(t=t.replace(/[0-9]/g,function(a){return l.options.numerals[+a]}),e=e.replace(/[0-9]/g,function(a){return l.options.numerals[+a]})),(s?"-":"")+l.options.prefix+t+e+l.options.suffix}function s(a,n,t,e){return t*(-Math.pow(2,-10*a/e)+1)*1024/1023+n}function u(a){return"number"==typeof a&&!isNaN(a)}var l=this;if(l.version=function(){return"1.9.3"},l.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:s,formattingFn:o,prefix:"",suffix:"",numerals:[]},r&&"object"==typeof r)for(var m in l.options)r.hasOwnProperty(m)&&null!==r[m]&&(l.options[m]=r[m]);""===l.options.separator?l.options.useGrouping=!1:l.options.separator=""+l.options.separator;for(var d=0,c=["webkit","moz","ms","o"],f=0;f<c.length&&!window.requestAnimationFrame;++f)window.requestAnimationFrame=window[c[f]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[c[f]+"CancelAnimationFrame"]||window[c[f]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a,n){var t=(new Date).getTime(),e=Math.max(0,16-(t-d)),i=window.setTimeout(function(){a(t+e)},e);return d=t+e,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)}),l.initialize=function(){return!!l.initialized||(l.error="",l.d="string"==typeof a?document.getElementById(a):a,l.d?(l.startVal=Number(n),l.endVal=Number(t),u(l.startVal)&&u(l.endVal)?(l.decimals=Math.max(0,e||0),l.dec=Math.pow(10,l.decimals),l.duration=1e3*Number(i)||2e3,l.countDown=l.startVal>l.endVal,l.frameVal=l.startVal,l.initialized=!0,!0):(l.error="[CountUp] startVal ("+n+") or endVal ("+t+") is not a number",!1)):(l.error="[CountUp] target is null or undefined",!1))},l.printValue=function(a){var n=l.options.formattingFn(a);"INPUT"===l.d.tagName?this.d.value=n:"text"===l.d.tagName||"tspan"===l.d.tagName?this.d.textContent=n:this.d.innerHTML=n},l.count=function(a){l.startTime||(l.startTime=a),l.timestamp=a;var n=a-l.startTime;l.remaining=l.duration-n,l.options.useEasing?l.countDown?l.frameVal=l.startVal-l.options.easingFn(n,0,l.startVal-l.endVal,l.duration):l.frameVal=l.options.easingFn(n,l.startVal,l.endVal-l.startVal,l.duration):l.countDown?l.frameVal=l.startVal-(l.startVal-l.endVal)*(n/l.duration):l.frameVal=l.startVal+(l.endVal-l.startVal)*(n/l.duration),l.countDown?l.frameVal=l.frameVal<l.endVal?l.endVal:l.frameVal:l.frameVal=l.frameVal>l.endVal?l.endVal:l.frameVal,l.frameVal=Math.round(l.frameVal*l.dec)/l.dec,l.printValue(l.frameVal),n<l.duration?l.rAF=requestAnimationFrame(l.count):l.callback&&l.callback()},l.start=function(a){l.initialize()&&(l.callback=a,l.rAF=requestAnimationFrame(l.count))},l.pauseResume=function(){l.paused?(l.paused=!1,delete l.startTime,l.duration=l.remaining,l.startVal=l.frameVal,requestAnimationFrame(l.count)):(l.paused=!0,cancelAnimationFrame(l.rAF))},l.reset=function(){l.paused=!1,delete l.startTime,l.initialized=!1,l.initialize()&&(cancelAnimationFrame(l.rAF),l.printValue(l.startVal))},l.update=function(a){if(l.initialize()){if(a=Number(a),!u(a))return void(l.error="[CountUp] update() - new endVal is not a number: "+a);l.error="",a!==l.frameVal&&(cancelAnimationFrame(l.rAF),l.paused=!1,delete l.startTime,l.startVal=l.frameVal,l.endVal=a,l.countDown=l.startVal>l.endVal,l.rAF=requestAnimationFrame(l.count))}},l.initialize()&&l.printValue(l.startVal)};return e});;
(function ($) {
  'use strict';

  Drupal.behaviors.d_p_counters = {
    attach: function (context, settings) {
      var cnt = 0;
      var options = {
        useEasing: true,
        useGrouping: true,
        separator: ' ',
        decimal: ',',
      };

      // Find all counters.
      $('.paragraph--type--d-p-group-of-counters .field--name-field-d-number', context).each(function(){
        // Trigger if in viewport.
        inViewport(this, function(el) {
          var id = 'upcnt' + cnt++;
          $(el).attr('id', id);

          // Count up.
          var numAnim = new CountUp(id, 0, $(el).attr('data-count'), 0, 2, options);
          numAnim.start();
        });
      });
    }
  };
})(jQuery);
;
/**
 * @file
 * Attaches behaviors for the Geysir module.
 */

(function($, Drupal, drupalSettings) {

  "use strict";

  Drupal.behaviors.geysir = {
    attach: function(context, settings) {
      var cut_links = $('.geysir-field-paragraph-links', context).find('.cut');
      cut_links.on('click', function (e) {
        e.preventDefault();

        var $this = $(e.target);

        // Find parent paragraph.
        var parent = $this.closest('[data-geysir-paragraph-id]');
        var parent_id = parent.data('geysir-paragraph-id');
        parent.addClass('geysir-cut-paste-disabled');

        // Find the geysir field wrapper.
        var field_wrapper_id = $this.data('geysir-field-paragraph-field-wrapper');
        var field_wrapper = $('[data-geysir-field-paragraph-field-wrapper="' + field_wrapper_id + '"]', context);
        // Add class to the geysir field wrapper to toggle cut behavior.
        field_wrapper.addClass('geysir-cut-paste');

        // Rewrite all paste links based on the paragraph which is currently cut.
        var paragraphs = $('[data-geysir-paragraph-id]', field_wrapper);
        paragraphs.each(function(index, paragraph) {
          paragraph = $(paragraph);
          var paragraph_id = paragraph.data('geysir-paragraph-id');
          var paste_link_wrappers = $('.paste-after, .paste-before', paragraph);
          var paste_links = paste_link_wrappers.find('a');
          paste_links.each(function(index, paste_link) {
            paste_link = $(paste_link);
            var href = paste_link.attr('href');

            $.each(Drupal.ajax.instances, function (index, event) {
              var element = $(event.element);
              if (element.hasClass('geysir-paste')) {
                if (href === event.element_settings.url) {
                  event.options.url = event.options.url.replace('/' + paragraph_id + '/', '/' + parent_id + '/');
                }
              }
            });
          });
        });

        return false;
      });
    }
  };

})(jQuery, Drupal, drupalSettings);
;
