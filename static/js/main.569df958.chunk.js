(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(e,t,a){e.exports=a(299)},154:function(e,t,a){},299:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),o=a.n(c),l=(a(154),a(65)),u=a(66),i=a(93),s=a(67),m=a(94),p=a(92),h=a(23),d=a(130),b=a.n(d),v=function(e){return function(t){return b.a.get("https://viacep.com.br/ws/".concat(e,"/json")).then(function(e){t({type:"CLICK_UPDATE_VALUE",lugar:e.data})}).catch(function(e){throw e})}},E=a(305),f=a(306),g=(a(179),a(122)),C=(a(77),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.lugar;return e&&r.a.createElement("div",{className:"ResultContainer"},r.a.createElement("div",null,r.a.createElement("h2",null,e.logradouro),e.bairro&&e.bairro,r.a.createElement("br",null),e.localidade&&"".concat(e.localidade," - ").concat(e.uf),r.a.createElement("br",null),e.cep&&e.cep),r.a.createElement("div",{className:"CloseResult"},r.a.createElement(g.a,{name:"close"})))}}]),t}(n.Component)),j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={cep:""},a.inputChange=function(e){a.setState({cep:e.target.value})},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.consultarCEP,a=e.lugar,n=this.state.cep;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"Consult"},r.a.createElement("h4",null,"Consultar"),r.a.createElement("div",{className:"FormContainer"},"CEP",r.a.createElement(E.a,{className:"Input",type:"text",onChange:this.inputChange,value:n}),r.a.createElement(f.a,{className:"Button",color:"blue",size:"small",onClick:function(){return t(n)}},"Buscar"))),r.a.createElement(C,{lugar:a}))}}]),t}(n.Component),w=Object(p.b)(function(e){return{lugar:e.clickState.lugar}},function(e){return Object(h.b)({consultarCEP:v},e)})(j);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=a(139),y={lugar:{}},k=Object(h.c)({clickState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLICK_UPDATE_VALUE":return Object(O.a)({},e,{lugar:t.lugar});default:return e}}}),N=a(138),A=Object(h.a)(N.a)(h.d)(k);o.a.render(r.a.createElement(p.a,{store:A},r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},77:function(e,t,a){}},[[149,2,1]]]);
//# sourceMappingURL=main.569df958.chunk.js.map