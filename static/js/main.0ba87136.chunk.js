(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,function(e,n,t){e.exports=t(17)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(2),c=t.n(a),s=(t(12),t(3)),i=t(4),l=t(5),u=t(6),h=(t(13),function(e){var n=e.monster,t=n.id,r=n.name,a=n.email;return o.a.createElement("div",{className:"card-container"},o.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(t,"?set=set2&size=202x180")}),o.a.createElement("h3",null,r),o.a.createElement("p",null,a))}),d=(t(14),function(e){var n=e.monsters;return o.a.createElement("div",{className:"card-list"},n.map((function(e){return o.a.createElement(h,{key:e.id,monster:e})})))}),f=(t(15),function(e){var n=e.placeholder,t=e.onSearch;return o.a.createElement("label",{className:"search-container"},"Filter Robots",o.a.createElement("input",{id:"search-robots",className:"search",type:"search",placeholder:n,onChange:t,"aria-label":"Search Robots"}))}),m=(t(16),function(e){Object(u.a)(t,e);var n=Object(l.a)(t);function t(){var e;return Object(s.a)(this,t),(e=n.call(this)).onSearch=function(n){e.setState({searchField:n})},e.filterMonsters=function(){var n=e.state,t=n.monsters,r=n.searchField;return t.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}))},e.state={monsters:[],searchField:"",error:""},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({monsters:n})})).catch((function(n){return e.setState({error:n})}))}},{key:"render",value:function(){var e=this,n=this.filterMonsters();return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Monsters Rolodex"),o.a.createElement(f,{placeholder:"Search Monsters",onSearch:function(n){return e.onSearch(n.target.value)}}),o.a.createElement(d,{monsters:n}))}}]),t}(r.Component)),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?n&&n.onUpdate&&n.onUpdate(e):n&&n.onSuccess&&n.onSuccess(e))})}})).catch((function(e){}))}c.a.render(o.a.createElement(m,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/monsters-rolodex",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/monsters-rolodex","/service-worker.js");v?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e,n)})).catch((function(){}))}(n,e),navigator.serviceWorker.ready.then((function(){}))):p(n,e)}))}}()}],[[7,1,2]]]);
//# sourceMappingURL=main.0ba87136.chunk.js.map