(this["webpackJsonpdice-simulation"]=this["webpackJsonpdice-simulation"]||[]).push([[0],{11:function(e,t,s){},13:function(e,t,s){"use strict";s.r(t);var c=s(1),i=s.n(c),n=s(6),a=s.n(n),r=s(3),l=s(2),j=s(4),o=(s(11),s(0));var d=function(){var e=Object(c.useState)({throws:"1",sides:"6"}),t=Object(j.a)(e,2),s=t[0],i=t[1],n=Object(c.useState)(!1),a=Object(j.a)(n,2),d=a[0],h=a[1],u=Object(c.useState)({eachResult:[],string:"",sum:0}),b=Object(j.a)(u,2),O=b[0],m=b[1];function x(e){var t=e.target,s=t.name,c=t.value;i((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(r.a)({},s,c))}))}return Object(o.jsxs)("div",{children:[Object(o.jsx)("header",{children:Object(o.jsxs)("h1",{className:"logo",children:[Object(o.jsx)("i",{class:"fas fa-dice-d20"})," Dice Simulation"]})}),Object(o.jsxs)("main",{className:"container",children:[Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h(!0),m({eachResult:[],string:"",sum:0});for(var t=[],c=0;c<s.throws;c++){var i=Math.ceil(Math.random()*s.sides);t.push(i)}m((function(e){return Object(l.a)(Object(l.a)({},e),{},{string:"".concat(s.throws," D").concat(s.sides," dice is rolled!!!"),eachResult:[].concat(t),sum:t.length?t.reduce((function(e,t){return e+t})):0})}))},className:"form grid",children:[Object(o.jsxs)("div",{className:"flex",children:[Object(o.jsx)("input",{type:"number",name:"throws",id:"throws",value:s.throws,onChange:x}),Object(o.jsx)("label",{htmlFor:"throws",children:"How many Dice?"})]}),Object(o.jsxs)("div",{className:"flex",children:[Object(o.jsxs)("select",{name:"sides",id:"sides",value:s.sides,onChange:x,children:[Object(o.jsx)("option",{value:"4",children:"D4"}),Object(o.jsx)("option",{value:"6",children:"D6"}),Object(o.jsx)("option",{value:"8",children:"D8"}),Object(o.jsx)("option",{value:"10",children:"D10"}),Object(o.jsx)("option",{value:"12",children:"D12"}),Object(o.jsx)("option",{value:"20",children:"D20"})]}),Object(o.jsx)("label",{htmlFor:"sides",children:"Number of sides in each Die?"})]}),Object(o.jsxs)("button",{className:"btn",children:["Roll The Dice ",Object(o.jsx)("i",{class:"fas fa-dice"})]})]}),d&&Object(o.jsxs)("div",{className:"output",children:[Object(o.jsx)("h3",{children:O.string}),Object(o.jsx)("p",{children:"This is your result"}),Object(o.jsxs)("p",{children:["| ",O.eachResult.join(" | ")," |"]}),Object(o.jsxs)("h2",{children:["sum : ",O.sum]})]})]})]})};a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.163ee3ce.chunk.js.map