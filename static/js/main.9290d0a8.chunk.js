(this["webpackJsonpreact-simple-tags-example"]=this["webpackJsonpreact-simple-tags-example"]||[]).push([[0],[,,,function(e,t,n){e.exports=n(12)},function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(4);var a=n(0),r=n.n(a),o=n(1),c=n.n(o),u=n(2),i="_3ab-k",l=function(e){var t=e.minTagLength,n=void 0===t?3:t,r=e.uniqueTags,o=void 0===r||r,c=e.onTagAddition,u=e.onTagRemoval,l=Object(a.useState)(""),f=l[0],m=l[1],s=Object(a.useState)([]),v=s[0],g=s[1],p=function(e){var t=[].concat(v,[e]);if(c(e),o){var n=Array.from(new Set(t));g(n)}else g(t)};return Object(a.createElement)("div",{className:i},v.map((function(e){return Object(a.createElement)("span",{key:e+"-"+Math.random()*Math.random()},e," ",Object(a.createElement)("a",{onClick:function(){return function(e){var t=v.filter((function(t){return t!==e}));u(e),g(t)}(e)},"aria-label":"remove tag"},"\u2715"))})),Object(a.createElement)("input",{type:"text",value:f,onChange:function(e){return function(e){","!==e.target.value&&";"!==e.target.value?m(e.target.value):m("")}(e)},onKeyDown:function(e){return function(e){f.length<n||","!==e.key&&";"!==e.key||(p(f.trim()),m(""))}(e)}}))},f=(n(11),function(){var e=r.a.useState([]),t=Object(u.a)(e,2),n=t[0],a=t[1];return r.a.createElement(l,{onTagAddition:function(e){var t=n.concat(e);a(t)},onTagRemoval:function(e){var t=n.filter((function(t){return t!==e}));a(t)}})});c.a.render(r.a.createElement(f,null),document.getElementById("root"))}],[[3,1,2]]]);
//# sourceMappingURL=main.9290d0a8.chunk.js.map