(this["webpackJsonpprice-calculator"]=this["webpackJsonpprice-calculator"]||[]).push([[0],{78:function(e,n,t){e.exports=t(94)},93:function(e,n,t){},94:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(10),o=t.n(c),i=t(36),l=t(51),u=t(12),s=t(42),d=t(64),m=t.n(d),p=t(133),f=t(124),E=t(127),h=t(128),v=t(129),b=t(130),g=function(e){var n=e.inTax?"\u5546\u54c1\u4fa1\u683c(\u7a0e\u8fbc)":"\u5546\u54c1\u4fa1\u683c(\u7a0e\u629c)",t=0===e.price?"":Number(e.price);return r.a.createElement(f.a,null,r.a.createElement(E.a,null,n),r.a.createElement(h.a,null,r.a.createElement(v.a,{endAdornment:r.a.createElement(b.a,{position:"end"},"\u5186"),fullWidth:!0,inputProps:{min:0,type:"number"},onChange:function(n){return function(n){e.onChange(Number(n))}(n.target.value)},placeholder:n,value:t})))},x=t(131),w=t(141),C=t(142),P=Object(x.a)((function(e){return Object(w.a)({root:{paddingTop:"2em",paddingBottom:"2em"},slider:{boxSizing:"border-box",padding:"50px 1em 0",width:"50vw"}})})),T=[{value:0,label:"0%"},{value:100,label:"100%"}],O=function(e){var n=P();return r.a.createElement(f.a,{className:n.root},r.a.createElement(E.a,null,"\u30c7\u30a3\u30b9\u30ab\u30a6\u30f3\u30c8\u7387"),r.a.createElement(h.a,{className:n.slider},r.a.createElement(C.a,{"aria-labelledby":"discrete-slider-always",marks:T,onChange:function(n,t){e.onChange(t)},step:10,value:"number"===typeof e.value?e.value:0,valueLabelDisplay:"on"})))},N=t(138),j=function(e){return r.a.createElement(f.a,null,r.a.createElement(N.a,{fullWidth:!0,InputProps:{endAdornment:r.a.createElement(b.a,{position:"end"},"\u5186"),readOnly:!0},value:e.discountPrice,variant:"outlined"}))},y=t(21),A={discountPer:20,discountPrice:0,inTax:!0,price:"",tax:8},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,n=arguments.length>1?arguments[1]:void 0,t=k(e.price,e.discountPer,e.inTax,e.tax);switch(n.type){case"CHANGE_DISCOUNT_PER":return Object(y.a)(Object(y.a)({},e),{},{discountPer:n.percent,discountPrice:t});case"CHANGE_PRICE":return Object(y.a)(Object(y.a)({},e),{},{price:n.price,discountPrice:t});case"CHANGE_TAX":return Object(y.a)(Object(y.a)({},e),{},{tax:n.tax,discountPrice:t});case"SWITCH_IN_TAX":return Object(y.a)(Object(y.a)({},e),{},{inTax:!e.inTax,discountPrice:t})}return Object(y.a)(Object(y.a)({},e),{},{discountPrice:t})},k=function(e,n,t,a){var r=a/100+1;return((t?e/r:e)*(1-n/100)*r).toFixed()},_=Object(i.b)((function(e){return{discountPer:e.discountPer,discountPrice:e.discountPrice,inTax:e.inTax,price:e.price,tax:e.tax}}))((function(e){var n=e.dispatch;return r.a.createElement(p.a,null,r.a.createElement(g,{inTax:e.inTax,onChange:function(e){return n({type:"CHANGE_PRICE",price:e})},price:e.price}),r.a.createElement(O,{onChange:function(e){return n({type:"CHANGE_DISCOUNT_PER",percent:e})},value:e.discountPer}),r.a.createElement(j,{discountPrice:e.discountPrice}))})),I=t(135),G=function(e){var n=0===e.value?"":Number(e.value);return r.a.createElement(f.a,null,r.a.createElement(E.a,null,"\u7a0e\u7387"),r.a.createElement(h.a,null,r.a.createElement(v.a,{endAdornment:r.a.createElement(b.a,{position:"end"},"%"),inputProps:{min:0,type:"number"},onChange:function(n){return function(n){e.onChange(Number(n))}(n.target.value)},value:n})))},H=t(143),S=function(e){var n=e.inTax?"\u7a0e\u8fbc":"\u7a0e\u629c";return r.a.createElement(f.a,null,r.a.createElement(E.a,null,n),r.a.createElement(h.a,null,r.a.createElement(H.a,{checked:e.inTax,onChange:function(){return e.onChange()}})))},R=Object(i.b)((function(e){return{tax:e.tax,inTax:e.inTax}}))((function(e){var n=e.dispatch;return r.a.createElement(p.a,null,r.a.createElement(G,{onChange:function(e){return n({type:"CHANGE_TAX",tax:e})},value:e.tax}),r.a.createElement(S,{onChange:function(){return n({type:"SWITCH_IN_TAX"})},inTax:e.inTax}),r.a.createElement(f.a,null,r.a.createElement(I.a,{href:"/",fullWidth:!0,variant:"contained"},"\u623b\u308b")))})),U=t(136),X=t(137),B=t(44),D=t(134),L=t(139),J=Object(x.a)((function(e){return Object(w.a)({root:{flexGrow:1},title:{flexGrow:1},icon:{color:"white"}})})),z=function(e){var n=J();return r.a.createElement("div",{className:n.root},r.a.createElement(U.a,{position:"static"},r.a.createElement(X.a,null,r.a.createElement(B.a,{variant:"h6",noWrap:!0,className:n.title},e.label),r.a.createElement(D.a,{edge:"end"},r.a.createElement(l.b,{to:"/settings",className:n.icon},r.a.createElement(L.a,null))))))},F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(93);var q=Object(s.c)(W,Object(s.b)(m()())),K=function(){return r.a.createElement(i.a,{store:q},r.a.createElement(l.a,{basename:"/price-calculator"},r.a.createElement(z,{label:"Price Calculator"}),r.a.createElement(u.a,{path:"/",exact:!0,component:_}),r.a.createElement(u.a,{path:"/settings",component:R})))};o.a.render(r.a.createElement(K,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/price-calculator",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/price-calculator","/service-worker.js");F?(!function(e,n){fetch(e).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):$(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):$(n,e)}))}}()}},[[78,1,2]]]);
//# sourceMappingURL=main.a5144644.chunk.js.map