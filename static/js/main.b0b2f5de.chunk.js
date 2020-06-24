(this["webpackJsonpemployee-directory-react"]=this["webpackJsonpemployee-directory-react"]||[]).push([[0],{19:function(e,t,a){e.exports=a(47)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),o=a.n(l),c=(a(24),a(13)),s=a(14),u=a(15),i=a(18),m=a(17);a(25);var h=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"Employee Directory"),r.a.createElement("p",null,"Filter by heading or use search bar to narrow results."))},d=(a(26),{search:{margin:30}});var f=function(e){return r.a.createElement("form",null,r.a.createElement("div",{style:d.search,className:"form-group"},r.a.createElement("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Search",id:"search"})))},p=a(16),E=a.n(p),g=function(e){return E.a.get("https://randomuser.me/api/?results=200&nat=us"+e+"&apikey=6WTW-8POB-DZOK-LW3Q")},b=a(2),v=a.n(b),y=(a(45),{table:{margin:30}}),C=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={result:[],originalResult:[],search:""},e.searchTable=function(t){g(t).then((function(t){e.setState({result:t.data.results,originalResult:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var a=t.target.value,n=t.target.name;e.setState(Object(c.a)({},n,a));var r=e.state.originalResult.length>0?e.state.originalResult.filter((function(e){return console.log(e),e.name.first.toLowerCase().includes(a.toLowerCase())||e.name.last.toLowerCase().includes(a.toLowerCase())||e.email.toLowerCase().includes(a.toLowerCase())||e.cell.includes(a)||v()(e.dob.date).format("MM/DD/YYYY").includes(a)})):[];e.setState({result:r})},e.handleFormSubmit=function(t){var a=null;"first"===t?a=e.state.result.length>0?e.state.result.sort((function(e,t){return e.name.first.localeCompare(t.name.first)})):[]:"email"===t?a=e.state.result.length>0?e.state.result.sort((function(e,t){return e.email.localeCompare(t.email)})):[]:"dob"===t&&(a=e.state.result.length>0?e.state.result.sort((function(e,t){return e.dob.date.localeCompare(t.dob.date)})):[]),e.setState({result:a})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.searchTable("")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(f,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),r.a.createElement("table",{style:y.table,className:"table"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"image"),r.a.createElement("th",{scope:"col",onClick:function(){e.handleFormSubmit("first")}},"Name"),r.a.createElement("th",{scope:"col"},"Phone"),r.a.createElement("th",{scope:"col",onClick:function(){e.handleFormSubmit("email")}},"Email"),r.a.createElement("th",{scope:"col",onClick:function(){e.handleFormSubmit("dob")}},"DOB"))),r.a.createElement("tbody",null,this.state.result.length>0?this.state.result.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement("img",{src:e.picture.thumbnail,alt:"employee"})),r.a.createElement("td",null,e.name.first+" "+e.name.last),r.a.createElement("td",null,e.cell),r.a.createElement("td",null,e.email),r.a.createElement("td",null,v()(e.dob.date).format("MM/DD/YYYY")))})):"")))}}]),a}(r.a.Component);a(46);var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.b0b2f5de.chunk.js.map