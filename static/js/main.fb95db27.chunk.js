(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),r=c(4),s=c.n(r),i=(c(9),c(10),c(2)),a=c(0);function l(e){return Object(a.jsxs)("div",{className:"buttons",children:[Object(a.jsx)("button",{className:"butC1",onClick:e.addInc,disabled:5===e.score,children:"+"}),Object(a.jsx)("button",{className:"butC1",onClick:e.addReset,disabled:0===e.score,children:"reset"})]})}function j(e){return Object(a.jsx)("div",{className:5===e.score?"scoreRed":"score",children:e.score})}function u(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),c=t[0],o=t[1];return Object(a.jsx)("div",{className:"Counter_1",children:Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsx)(j,{score:c}),Object(a.jsx)(l,{score:c,addInc:function(){o(c+1)},addReset:function(){o(0)}})]})})}function b(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),c=t[0],o=t[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:c}),Object(a.jsx)("button",{onClick:function(){o(c+1)},children:"inc"}),Object(a.jsx)("button",{onClick:function(){localStorage.setItem("counterValue",JSON.stringify(c)),localStorage.setItem("counterValue + 1",JSON.stringify(c+1))},children:"setLocalStorage"}),Object(a.jsx)("button",{onClick:function(){var e=localStorage.getItem("counterValue");if(e){var t=JSON.parse(e);o(t)}},children:"getFromLocalStorage"}),Object(a.jsx)("button",{onClick:function(){localStorage.clear(),o(0)},children:"clearLocalStorage"}),Object(a.jsx)("button",{onClick:function(){localStorage.removeItem("counterValue + 1")},children:"removeItemFromLocalStorage"}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:function(){sessionStorage.setItem("Value",c.toString())},children:"setSessionStorage"})})]})}function d(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),c=t[0],o=t[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("useValue");if(e){var t=JSON.parse(e);o(t)}}),[]),Object(n.useEffect)((function(){localStorage.setItem("useValue",JSON.stringify(c))}),[c]),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:c}),Object(a.jsx)("button",{onClick:function(){o(c+1)},children:"inc"})]})}var O=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("div",{children:"Counter 1:"}),Object(a.jsx)(u,{}),Object(a.jsx)("hr",{}),Object(a.jsx)("hr",{}),Object(a.jsx)("div",{children:"Counter localstorage:"}),Object(a.jsx)(b,{}),Object(a.jsx)("hr",{}),Object(a.jsx)("div",{children:"Counter localstorage useEffect:"}),Object(a.jsx)(d,{})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),o(e),r(e),s(e)}))};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),f()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.fb95db27.chunk.js.map