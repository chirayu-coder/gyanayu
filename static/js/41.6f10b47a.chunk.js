(this["webpackJsonpshreyu-react-app"]=this["webpackJsonpshreyu-react-app"]||[]).push([[41,46,50,51,52,53],{110:function(e,t,r){"use strict";var n=r(0);t.a=function(e){var t=Object(n.useRef)(e);return Object(n.useEffect)((function(){t.current=e}),[e]),t}},111:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(0),a=r(110);function o(e){var t=Object(a.a)(e);return Object(n.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},112:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(0),a=r(111);function o(e,t,r,o){void 0===o&&(o=!1);var i=Object(a.a)(r);Object(n.useEffect)((function(){var r="function"===typeof e?e():e;return r.addEventListener(t,i,o),function(){return r.removeEventListener(t,i,o)}}),[e])}},114:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(3),a=r(35),o=r(47),i=r.n(o),c=/-(.)/g;var u=r(0),s=r(48),l=r(1),f=function(e){return e[0].toUpperCase()+(t=e,t.replace(c,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.displayName,o=void 0===r?f(e):r,c=t.Component,d=t.defaultProps,b=u.forwardRef((function(t,r){var o=t.className,u=t.bsPrefix,f=t.as,d=void 0===f?c||"div":f,b=Object(a.a)(t,["className","bsPrefix","as"]),p=Object(s.a)(u,e);return Object(l.jsx)(d,Object(n.a)({ref:r,className:i()(o,p)},b))}));return b.defaultProps=d,b.displayName=o,b}},115:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(0);function a(e){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){t.current=e})),t.current}},116:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(112),a=r(0);function o(e,t,r){void 0===r&&(r=!1);var o=Object(a.useCallback)((function(){return document}),[]);return Object(n.a)(o,e,t,r)}},117:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(0);function a(){return Object(n.useState)(null)}},120:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(0);function a(){var e=Object(n.useRef)(!0),t=Object(n.useRef)((function(){return e.current}));return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},121:function(e,t,r){"use strict";var n=r(23),a=r(0),o=(r(117),r(110),r(111));r(112),r(116);r(120),r(115);r(129),new WeakMap;var i=r(124),c=r(1),u=["onKeyDown"];var s=a.forwardRef((function(e,t){var r,a=e.onKeyDown,s=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,u),l=Object(i.b)(Object.assign({tagName:"a"},s)),f=Object(n.a)(l,1)[0],d=Object(o.a)((function(e){f.onKeyDown(e),null==a||a(e)}));return((r=s.href)&&"#"!==r.trim()||s.role)&&"button"!==s.role?Object(c.jsx)("a",Object.assign({ref:t},s,{onKeyDown:a})):Object(c.jsx)("a",Object.assign({ref:t},s,f,{onKeyDown:d}))}));s.displayName="Anchor";t.a=s},124:function(e,t,r){"use strict";r.d(t,"b",(function(){return c}));var n=r(23),a=r(0),o=r(1),i=["as","disabled"];function c(e){var t=e.tagName,r=e.disabled,n=e.href,a=e.target,o=e.rel,i=e.onClick,c=e.tabIndex,u=void 0===c?0:c,s=e.type;t||(t=null!=n||null!=a||null!=o?"a":"button");var l={tagName:t};if("button"===t)return[{type:s||"button",disabled:r},l];var f=function(e){(r||"a"===t&&function(e){return!e||"#"===e.trim()}(n))&&e.preventDefault(),r?e.stopPropagation():null==i||i(e)};return[{role:"button",disabled:void 0,tabIndex:r?void 0:u,href:"a"===t&&r?void 0:n,target:"a"===t?a:void 0,"aria-disabled":r||void 0,rel:"a"===t?o:void 0,onClick:f,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),f(e))}},l]}var u=a.forwardRef((function(e,t){var r=e.as,a=e.disabled,u=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,i),s=c(Object.assign({tagName:r,disabled:a},u)),l=Object(n.a)(s,2),f=l[0],d=l[1].tagName;return Object(o.jsx)(d,Object.assign({},u,f,{ref:t}))}));u.displayName="Button",t.a=u},126:function(e,t,r){"use strict";var n=r(3),a=r(0),o=r(47),i=r.n(o),c=r(1);t.a=function(e){return a.forwardRef((function(t,r){return Object(c.jsx)("div",Object(n.a)(Object(n.a)({},t),{},{ref:r,className:i()(t.className,e)}))}))}},129:function(e,t,r){"use strict";(function(e){var n=r(0),a="undefined"!==typeof e&&e.navigator&&"ReactNative"===e.navigator.product,o="undefined"!==typeof document;t.a=o||a?n.useLayoutEffect:n.useEffect}).call(this,r(71))},130:function(e,t,r){"use strict";var n=r(0),a=n.createContext(null);a.displayName="CardHeaderContext",t.a=a},153:function(e,t,r){"use strict";var n=r(23),a=r(3),o=r(35),i=r(47),c=r.n(i),u=r(0),s=r(48),l=r(1),f=["xxl","xl","lg","md","sm","xs"];var d=u.forwardRef((function(e,t){var r=function(e){var t=e.as,r=e.bsPrefix,n=e.className,i=Object(o.a)(e,["as","bsPrefix","className"]);r=Object(s.a)(r,"col");var u=[],l=[];return f.forEach((function(e){var t,n,a,o=i[e];delete i[e],"object"===typeof o&&null!=o?(t=o.span,n=o.offset,a=o.order):t=o;var c="xs"!==e?"-".concat(e):"";t&&u.push(!0===t?"".concat(r).concat(c):"".concat(r).concat(c,"-").concat(t)),null!=a&&l.push("order".concat(c,"-").concat(a)),null!=n&&l.push("offset".concat(c,"-").concat(n))})),[Object(a.a)(Object(a.a)({},i),{},{className:c.a.apply(void 0,[n].concat(u,l))}),{as:t,bsPrefix:r,spans:u}]}(e),i=Object(n.a)(r,2),u=i[0],d=u.className,b=Object(o.a)(u,["className"]),p=i[1],v=p.as,m=void 0===v?"div":v,g=p.bsPrefix,y=p.spans;return Object(l.jsx)(m,Object(a.a)(Object(a.a)({},b),{},{ref:t,className:c()(d,!y.length&&g)}))}));d.displayName="Col",t.a=d},160:function(e,t,r){"use strict";var n=r(3),a=r(35),o=r(47),i=r.n(o),c=r(0),u=r(48),s=r(114),l=r(126),f=r(1),d=c.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,c=e.variant,s=e.as,l=void 0===s?"img":s,d=Object(a.a)(e,["bsPrefix","className","variant","as"]),b=Object(u.a)(r,"card-img");return Object(f.jsx)(l,Object(n.a)({ref:t,className:i()(c?"".concat(b,"-").concat(c):b,o)},d))}));d.displayName="CardImg";var b=d,p=r(130),v=c.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,s=e.as,l=void 0===s?"div":s,d=Object(a.a)(e,["bsPrefix","className","as"]),b=Object(u.a)(r,"card-header"),v=Object(c.useMemo)((function(){return{cardHeaderBsPrefix:b}}),[b]);return Object(f.jsx)(p.a.Provider,{value:v,children:Object(f.jsx)(l,Object(n.a)(Object(n.a)({ref:t},d),{},{className:i()(o,b)}))})}));v.displayName="CardHeader";var m=v,g=Object(l.a)("h5"),y=Object(l.a)("h6"),j=Object(s.a)("card-body"),O=Object(s.a)("card-title",{Component:g}),h=Object(s.a)("card-subtitle",{Component:y}),x=Object(s.a)("card-link",{Component:"a"}),D=Object(s.a)("card-text",{Component:"p"}),w=Object(s.a)("card-footer"),P=Object(s.a)("card-img-overlay"),N=c.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,c=e.bg,s=e.text,l=e.border,d=e.body,b=e.children,p=e.as,v=void 0===p?"div":p,m=Object(a.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),g=Object(u.a)(r,"card");return Object(f.jsx)(v,Object(n.a)(Object(n.a)({ref:t},m),{},{className:i()(o,g,c&&"bg-".concat(c),s&&"text-".concat(s),l&&"border-".concat(l)),children:d?Object(f.jsx)(j,{children:b}):b}))}));N.displayName="Card",N.defaultProps={body:!1};t.a=Object.assign(N,{Img:b,Title:O,Subtitle:h,Body:j,Link:x,Text:D,Header:m,Footer:w,ImgOverlay:P})},163:function(e,t,r){"use strict";var n=r(3),a=r(35),o=r(47),i=r.n(o),c=r(0),u=r(48),s=r(121),l=r(1),f=c.forwardRef((function(e,t){var r=e.bsPrefix,o=e.active,c=e.children,f=e.className,d=e.as,b=void 0===d?"li":d,p=e.linkAs,v=void 0===p?s.a:p,m=e.linkProps,g=e.href,y=e.title,j=e.target,O=Object(a.a)(e,["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"]),h=Object(u.a)(r,"breadcrumb-item");return Object(l.jsx)(b,Object(n.a)(Object(n.a)({ref:t},O),{},{className:i()(h,f,{active:o}),"aria-current":o?"page":void 0,children:o?c:Object(l.jsx)(v,Object(n.a)(Object(n.a)({},m),{},{href:g,title:y,target:j,children:c}))}))}));f.displayName="BreadcrumbItem",f.defaultProps={active:!1,linkProps:{}};var d=f,b=c.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,c=e.listProps,s=e.children,f=e.label,d=e.as,b=void 0===d?"nav":d,p=Object(a.a)(e,["bsPrefix","className","listProps","children","label","as"]),v=Object(u.a)(r,"breadcrumb");return Object(l.jsx)(b,Object(n.a)(Object(n.a)({"aria-label":f,className:o,ref:t},p),{},{children:Object(l.jsx)("ol",Object(n.a)(Object(n.a)({},c),{},{className:i()(v,null==c?void 0:c.className),children:s}))}))}));b.displayName="Breadcrumb",b.defaultProps={label:"breadcrumb",listProps:{}};t.a=Object.assign(b,{Item:d})},167:function(e,t,r){"use strict";var n=r(3),a=r(35),o=r(47),i=r.n(o),c=r(0),u=r(48),s=r(1),l=["xxl","xl","lg","md","sm","xs"],f=c.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,c=e.as,f=void 0===c?"div":c,d=Object(a.a)(e,["bsPrefix","className","as"]),b=Object(u.a)(r,"row"),p="".concat(b,"-cols"),v=[];return l.forEach((function(e){var t,r=d[e];delete d[e],t=null!=r&&"object"===typeof r?r.cols:r;var n="xs"!==e?"-".concat(e):"";null!=t&&v.push("".concat(p).concat(n,"-").concat(t))})),Object(s.jsx)(f,Object(n.a)(Object(n.a)({ref:t},d),{},{className:i.a.apply(void 0,[o,b].concat(v))}))}));f.displayName="Row",t.a=f},213:function(e,t,r){"use strict";var n=r(3),a=r(23),o=r(35),i=r(47),c=r.n(i),u=r(0),s=r(124),l=r(48),f=r(1),d=u.forwardRef((function(e,t){var r=e.as,i=e.bsPrefix,u=e.variant,d=e.size,b=e.active,p=e.className,v=Object(o.a)(e,["as","bsPrefix","variant","size","active","className"]),m=Object(l.a)(i,"btn"),g=Object(s.b)(Object(n.a)({tagName:r},v)),y=Object(a.a)(g,2),j=y[0],O=y[1].tagName;return Object(f.jsx)(O,Object(n.a)(Object(n.a)(Object(n.a)({},v),j),{},{ref:t,className:c()(p,m,b&&"active",u&&"".concat(m,"-").concat(u),d&&"".concat(m,"-").concat(d),v.href&&v.disabled&&"disabled")}))}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=d},891:function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e,t){if(e&&t){var r=Array.isArray(t)?t:t.split(","),n=e.name||"",a=(e.type||"").toLowerCase(),o=a.replace(/\/.*$/,"");return r.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?n.toLowerCase().endsWith(t):t.endsWith("/*")?o===t.replace(/\/.*$/,""):a===t}))}return!0}},928:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(27),i=r.n(o);function c(e,t,r,n){return new(r||(r=Promise))((function(a,o){function i(e){try{u(n.next(e))}catch(t){o(t)}}function c(e){try{u(n.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,c)}u((n=n.apply(e,t||[])).next())}))}function u(e,t){var r,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(c){o=[6,c],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}Object.create;function s(e,t){var r="function"===typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,a,o=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)i.push(n.value)}catch(c){a={error:c}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(a)throw a.error}}return i}Object.create;var l=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function f(e,t){var r=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var r=t.split(".").pop().toLowerCase(),n=l.get(r);n&&Object.defineProperty(e,"type",{value:n,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!==typeof r.path){var n=e.webkitRelativePath;Object.defineProperty(r,"path",{value:"string"===typeof t?t:"string"===typeof n&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}var d=[".DS_Store","Thumbs.db"];function b(e){return(null!==e.target&&e.target.files?m(e.target.files):[]).map((function(e){return f(e)}))}function p(e,t){return c(this,void 0,void 0,(function(){var r;return u(this,(function(n){switch(n.label){case 0:return e.items?(r=m(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,r]:[4,Promise.all(r.map(g))]):[3,2];case 1:return[2,v(y(n.sent()))];case 2:return[2,v(m(e.files).map((function(e){return f(e)})))]}}))}))}function v(e){return e.filter((function(e){return-1===d.indexOf(e.name)}))}function m(e){for(var t=[],r=0;r<e.length;r++){var n=e[r];t.push(n)}return t}function g(e){if("function"!==typeof e.webkitGetAsEntry)return j(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?h(t):j(e)}function y(e){return e.reduce((function(e,t){return function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(s(arguments[t]));return e}(e,Array.isArray(t)?y(t):[t])}),[])}function j(e){var t=e.getAsFile();if(!t)return Promise.reject(e+" is not a File");var r=f(t);return Promise.resolve(r)}function O(e){return c(this,void 0,void 0,(function(){return u(this,(function(t){return[2,e.isDirectory?h(e):x(e)]}))}))}function h(e){var t=e.createReader();return new Promise((function(e,r){var n=[];!function a(){var o=this;t.readEntries((function(t){return c(o,void 0,void 0,(function(){var o,i,c;return u(this,(function(u){switch(u.label){case 0:if(t.length)return[3,5];u.label=1;case 1:return u.trys.push([1,3,,4]),[4,Promise.all(n)];case 2:return o=u.sent(),e(o),[3,4];case 3:return i=u.sent(),r(i),[3,4];case 4:return[3,6];case 5:c=Promise.all(t.map(O)),n.push(c),a(),u.label=6;case 6:return[2]}}))}))}),(function(e){r(e)}))}()}))}function x(e){return c(this,void 0,void 0,(function(){return u(this,(function(t){return[2,new Promise((function(t,r){e.file((function(r){var n=f(r,e.fullPath);t(n)}),(function(e){r(e)}))}))]}))}))}var D=r(891),w=r.n(D);function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(u){c=!0,a=u}finally{try{i||null==r.return||r.return()}finally{if(c)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return N(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var k="file-invalid-type",C="file-too-large",F="file-too-small",A="too-many-files",E=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:k,message:"File type must be ".concat(t)}},S=function(e){return{code:C,message:"File is larger than ".concat(e," bytes")}},R=function(e){return{code:F,message:"File is smaller than ".concat(e," bytes")}},z={code:A,message:"Too many files"};function I(e,t){var r="application/x-moz-file"===e.type||w()(e,t);return[r,r?null:E(t)]}function T(e,t,r){if(L(e.size))if(L(t)&&L(r)){if(e.size>r)return[!1,S(r)];if(e.size<t)return[!1,R(t)]}else{if(L(t)&&e.size<t)return[!1,R(t)];if(L(r)&&e.size>r)return[!1,S(r)]}return[!0,null]}function L(e){return void 0!==e&&null!==e}function K(e){var t=e.files,r=e.accept,n=e.minSize,a=e.maxSize,o=e.multiple,i=e.maxFiles;return!(!o&&t.length>1||o&&i>=1&&t.length>i)&&t.every((function(e){var t=P(I(e,r),1)[0],o=P(T(e,n,a),1)[0];return t&&o}))}function B(e){return"function"===typeof e.isPropagationStopped?e.isPropagationStopped():"undefined"!==typeof e.cancelBubble&&e.cancelBubble}function M(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function H(e){e.preventDefault()}function U(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function $(e){return-1!==e.indexOf("Edge/")}function G(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return U(e)||$(e)}function W(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return t.some((function(t){return!B(e)&&t&&t.apply(void 0,[e].concat(n)),B(e)}))}}var _=["children"],q=["open"],J=["refKey","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Q=["refKey","onChange","onClick"];function V(e){return function(e){if(Array.isArray(e))return Z(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Y(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(u){c=!0,a=u}finally{try{i||null==r.return||r.return()}finally{if(c)throw a}}return o}(e,t)||Y(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,t){if(e){if("string"===typeof e)return Z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Z(e,t):void 0}}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function te(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(r),!0).forEach((function(t){re(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ee(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function re(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ne(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var ae=Object(n.forwardRef)((function(e,t){var r=e.children,o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=te(te({},oe),e),r=t.accept,a=t.disabled,o=t.getFilesFromEvent,i=t.maxSize,c=t.minSize,u=t.multiple,s=t.maxFiles,l=t.onDragEnter,f=t.onDragLeave,d=t.onDragOver,b=t.onDrop,p=t.onDropAccepted,v=t.onDropRejected,m=t.onFileDialogCancel,g=t.preventDropOnDocument,y=t.noClick,j=t.noKeyboard,O=t.noDrag,h=t.noDragEventsBubbling,x=t.validator,D=Object(n.useRef)(null),w=Object(n.useRef)(null),P=X(Object(n.useReducer)(ce,ie),2),N=P[0],k=P[1],C=N.isFocused,F=N.isFileDialogActive,A=N.draggedFiles,E=Object(n.useCallback)((function(){w.current&&(k({type:"openDialog"}),w.current.value=null,w.current.click())}),[k]),S=function(){F&&setTimeout((function(){w.current&&(w.current.files.length||(k({type:"closeDialog"}),"function"===typeof m&&m()))}),300)};Object(n.useEffect)((function(){return window.addEventListener("focus",S,!1),function(){window.removeEventListener("focus",S,!1)}}),[w,F,m]);var R=Object(n.useCallback)((function(e){D.current&&D.current.isEqualNode(e.target)&&(32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),E()))}),[D,w]),L=Object(n.useCallback)((function(){k({type:"focus"})}),[]),U=Object(n.useCallback)((function(){k({type:"blur"})}),[]),$=Object(n.useCallback)((function(){y||(G()?setTimeout(E,0):E())}),[w,y]),_=Object(n.useRef)([]),q=function(e){D.current&&D.current.contains(e.target)||(e.preventDefault(),_.current=[])};Object(n.useEffect)((function(){return g&&(document.addEventListener("dragover",H,!1),document.addEventListener("drop",q,!1)),function(){g&&(document.removeEventListener("dragover",H),document.removeEventListener("drop",q))}}),[D,g]);var Y=Object(n.useCallback)((function(e){e.preventDefault(),e.persist(),fe(e),_.current=[].concat(V(_.current),[e.target]),M(e)&&Promise.resolve(o(e)).then((function(t){B(e)&&!h||(k({draggedFiles:t,isDragActive:!0,type:"setDraggedFiles"}),l&&l(e))}))}),[o,l,h]),Z=Object(n.useCallback)((function(e){e.preventDefault(),e.persist(),fe(e);var t=M(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(r){}return t&&d&&d(e),!1}),[d,h]),ee=Object(n.useCallback)((function(e){e.preventDefault(),e.persist(),fe(e);var t=_.current.filter((function(e){return D.current&&D.current.contains(e)})),r=t.indexOf(e.target);-1!==r&&t.splice(r,1),_.current=t,t.length>0||(k({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),M(e)&&f&&f(e))}),[D,f,h]),ae=Object(n.useCallback)((function(e){e.preventDefault(),e.persist(),fe(e),_.current=[],M(e)&&Promise.resolve(o(e)).then((function(t){if(!B(e)||h){var n=[],a=[];t.forEach((function(e){var t=X(I(e,r),2),o=t[0],u=t[1],s=X(T(e,c,i),2),l=s[0],f=s[1],d=x?x(e):null;if(o&&l&&!d)n.push(e);else{var b=[u,f];d&&(b=b.concat(d)),a.push({file:e,errors:b.filter((function(e){return e}))})}})),(!u&&n.length>1||u&&s>=1&&n.length>s)&&(n.forEach((function(e){a.push({file:e,errors:[z]})})),n.splice(0)),k({acceptedFiles:n,fileRejections:a,type:"setFiles"}),b&&b(n,a,e),a.length>0&&v&&v(a,e),n.length>0&&p&&p(n,e)}})),k({type:"reset"})}),[u,r,c,i,s,o,b,p,v,h,x]),ue=function(e){return a?null:e},se=function(e){return j?null:ue(e)},le=function(e){return O?null:ue(e)},fe=function(e){h&&e.stopPropagation()},de=Object(n.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,n=e.onKeyDown,o=e.onFocus,i=e.onBlur,c=e.onClick,u=e.onDragEnter,s=e.onDragOver,l=e.onDragLeave,f=e.onDrop,d=ne(e,J);return te(te(re({onKeyDown:se(W(n,R)),onFocus:se(W(o,L)),onBlur:se(W(i,U)),onClick:ue(W(c,$)),onDragEnter:le(W(u,Y)),onDragOver:le(W(s,Z)),onDragLeave:le(W(l,ee)),onDrop:le(W(f,ae))},r,D),a||j?{}:{tabIndex:0}),d)}}),[D,R,L,U,$,Y,Z,ee,ae,j,O,a]),be=Object(n.useCallback)((function(e){e.stopPropagation()}),[]),pe=Object(n.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,a=e.onChange,o=e.onClick,i=ne(e,Q);return te(te({},re({accept:r,multiple:u,type:"file",style:{display:"none"},onChange:ue(W(a,ae)),onClick:ue(W(o,be)),autoComplete:"off",tabIndex:-1},n,w)),i)}}),[w,r,u,ae,a]),ve=A.length,me=ve>0&&K({files:A,accept:r,minSize:c,maxSize:i,multiple:u,maxFiles:s}),ge=ve>0&&!me;return te(te({},N),{},{isDragAccept:me,isDragReject:ge,isFocused:C&&!a,getRootProps:de,getInputProps:pe,rootRef:D,inputRef:w,open:ue(E)})}(ne(e,_)),i=o.open,c=ne(o,q);return Object(n.useImperativeHandle)(t,(function(){return{open:i}}),[i]),a.a.createElement(n.Fragment,null,r(te(te({},c),{},{open:i})))}));ae.displayName="Dropzone";var oe={disabled:!1,getFilesFromEvent:function(e){return c(this,void 0,void 0,(function(){return u(this,(function(t){return[2,(r=e,r.dataTransfer&&e.dataTransfer?p(e.dataTransfer,e.type):b(e))];var r}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null};ae.defaultProps=oe,ae.propTypes={children:i.a.func,accept:i.a.oneOfType([i.a.string,i.a.arrayOf(i.a.string)]),multiple:i.a.bool,preventDropOnDocument:i.a.bool,noClick:i.a.bool,noKeyboard:i.a.bool,noDrag:i.a.bool,noDragEventsBubbling:i.a.bool,minSize:i.a.number,maxSize:i.a.number,maxFiles:i.a.number,disabled:i.a.bool,getFilesFromEvent:i.a.func,onFileDialogCancel:i.a.func,onDragEnter:i.a.func,onDragLeave:i.a.func,onDragOver:i.a.func,onDrop:i.a.func,onDropAccepted:i.a.func,onDropRejected:i.a.func,validator:i.a.func};t.a=ae;var ie={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]};function ce(e,t){switch(t.type){case"focus":return te(te({},e),{},{isFocused:!0});case"blur":return te(te({},e),{},{isFocused:!1});case"openDialog":return te(te({},e),{},{isFileDialogActive:!0});case"closeDialog":return te(te({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":var r=t.isDragActive,n=t.draggedFiles;return te(te({},e),{},{draggedFiles:n,isDragActive:r});case"setFiles":return te(te({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return te({},ie);default:return e}}}}]);
//# sourceMappingURL=41.6f10b47a.chunk.js.map