(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){},16:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),i=t(3),r=t.n(i),c=(t(15),t(4)),l=t(5),s=t(7),u=t(6),h=t(1),d=t(8),f=(t(16),function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(s.a)(this,Object(u.a)(n).call(this,e))).state={price:""},t.handleChange=t.handleChange.bind(Object(h.a)(t)),t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"handleChange",value:function(e){(e.match(/[0-9]+/)||0===e.length)&&this.setState({price:e})}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Price Calculator"),o.a.createElement("input",{type:"number",pattern:"\\d*",value:this.state.price,placeholder:"\u3053\u3053\u306b\u5546\u54c1\u91d1\u984d(\u7a0e\u629c)\u3092\u5165\u529b",className:"price",onChange:function(n){return e.handleChange(n.target.value)}}),o.a.createElement("ul",null,o.a.createElement(p,{price:this.state.price,discount:20}),o.a.createElement(p,{price:this.state.price,discount:30}),o.a.createElement(p,{price:this.state.price,discount:40}),o.a.createElement(p,{price:this.state.price,discount:50})))}}]),n}(o.a.Component)),p=function(e){return o.a.createElement("li",null,e.discount,"%Off",o.a.createElement("span",null,Math.floor(e.price*(1-e.discount/100)*1.08),"\u5186"))},g=f,v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(g,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/price-calculator",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/price-calculator","/service-worker.js");v?(function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):w(n,e)})}}()},9:function(e,n,t){e.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.ca4569f7.chunk.js.map