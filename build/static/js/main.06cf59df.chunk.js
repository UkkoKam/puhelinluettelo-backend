(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{249:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n(0),l=n.n(r),o=n(90),u=n.n(o),c=n(24),i=n.n(c),m=function(){return i.a.get("/api/persons")},s=function(e){return i.a.post("/api/persons",e)},d=function(e){return i.a.delete("".concat("/api/persons","/").concat(e))},b=function(e){return l.a.createElement("form",{onSubmit:e.onSubmit},l.a.createElement("div",null,l.a.createElement("label",null,"Nimi"),l.a.createElement("input",{value:e.inputName,onChange:e.onNameChange}),l.a.createElement("br",null),l.a.createElement("label",null,"Numero"),l.a.createElement("input",{value:e.inputNum,onChange:e.onNumberChange})),l.a.createElement("div",null,l.a.createElement("button",{type:"submit"},"lis\xe4\xe4")))},f=function(e){var t=e.handleFilter;return l.a.createElement("input",{onChange:t})},p=function(e){var t=e.showPeople;return l.a.createElement("ul",null,t)},E=(n(113),function(e){var t=e.message;if(null===t)return null;return t.includes("poistettiin")?l.a.createElement("div",{style:{borderWidth:"3px",borderColor:"green",backgroundColor:"lightred",color:"red"}},l.a.createElement("h2",null,t)):l.a.createElement("div",{style:{borderWidth:"3px",borderColor:"green",backgroundColor:"lightgreen",color:"green"}},l.a.createElement("h2",null,t))});u.a.render(l.a.createElement(function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),n=t[0],o=t[1],u=Object(r.useState)(""),c=Object(a.a)(u,2),i=c[0],g=c[1],h=Object(r.useState)(""),v=Object(a.a)(h,2),C=v[0],w=v[1],j=Object(r.useState)(""),N=Object(a.a)(j,2),O=N[0],k=N[1],y=Object(r.useState)(""),S=Object(a.a)(y,2),x=S[0],P=S[1];Object(r.useEffect)(function(){m().then(function(e){console.log(e.data),o(e.data)})},[]);var D=function(e){return function(){window.confirm("Do you really want to delete ".concat(n[e-1].name))&&(d(e),P("poistettiin ".concat(n[e-1].name)),setTimeout(function(){P(null)},5e3))}};return l.a.createElement("div",null,l.a.createElement("h2",null,"Puhelinluettelo"),l.a.createElement(f,{handleFilter:function(e){k(e.target.value)}}),l.a.createElement("h2",null,"Add a new thing"),l.a.createElement(E,{message:x}),l.a.createElement(b,{onSubmit:function(e){e.preventDefault();var t={name:i,number:C,id:n.length+1};g(""),w(""),void 0===n.find(function(e){return e.name===t.name})?(s(t),o(n.concat(t)),P("lis\xe4ttiin ".concat(t.name)),setTimeout(function(){P(null)},5e3)):alert("".concat(t.name," on jo luettelossa"))},inputName:i,inputNum:C,onNumberChange:function(e){w(e.target.value)},onNameChange:function(e){g(e.target.value)}}),l.a.createElement("h2",null,"Numerot"),l.a.createElement(p,{showPeople:""===O?n.map(function(e){return l.a.createElement("li",{key:e.id},e.name," : ",e.number," ",l.a.createElement("button",{onClick:D(e.id)},"x"))}):n.filter(function(e){return e.name.toLowerCase().includes(O.toLowerCase())}).map(function(e){return l.a.createElement("li",{key:e.id},e.name," : ",e.number,l.a.createElement("button",{onClick:D(e.id)}))})}))},null),document.getElementById("root"))},91:function(e,t,n){e.exports=n(249)}},[[91,1,2]]]);
//# sourceMappingURL=main.06cf59df.chunk.js.map