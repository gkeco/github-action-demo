(this["webpackJsonpcolor-organizer"]=this["webpackJsonpcolor-organizer"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"id":"0175d1f0-a8c6-41bf-8d02-df5734d829a4","title":"Ocean at Dusk","color":"#00c4e2","rating":5},{"id":"83c7ba2f-7392-4d7d-9e23-35adbe186046","title":"Lawn","color":"#26ac56","rating":3},{"id":"a11e3995-b0bd-4d58-8c48-5e49ae7f7f23","title":"Bright Red","color":"#ff0000","rating":0}]')},15:function(e,t,r){},16:function(e,t,r){},18:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r(9),o=r.n(c),i=(r(15),r(2)),a=r(3),l=r(6),s=(r(16),r(8)),j=function(e){var t=Object(n.useState)(e),r=Object(i.a)(t,2),c=r[0],o=r[1];return[{value:c,onChange:function(e){o(e.target.value)}},function(){o(e)}]},u=r(20),d=r(10),b=r(0),f=Object(n.createContext)(),O=function(){return Object(n.useContext)(f)};function x(e){var t=e.children,r=Object(n.useState)(d),c=Object(i.a)(r,2),o=c[0],s=c[1];return Object(b.jsx)(f.Provider,{value:{colors:o,addColor:function(e,t){o.some((function(e){return e.color===t}))?alert("Color already exists"):s([].concat(Object(l.a)(o),[{id:Object(u.a)(),rating:0,title:e,color:t}]))},removeColor:function(e){return s(o.filter((function(t){return t.id!==e})))},rateColor:function(e,t){return s(o.map((function(r){return r.id===e?Object(a.a)(Object(a.a)({},r),{},{rating:t}):r})))}},children:t})}function h(e){var t=e.selected,r=void 0!==t&&t,n=e.onSelect;return Object(b.jsx)(s.a,{color:r?"red":"gray",onClick:n})}function p(e){var t,r=e.totalStars,n=void 0===r?5:r,c=e.selectedStars,o=e.onStarRate;return Object(b.jsxs)(b.Fragment,{children:[(t=n,Object(l.a)(Array(t))).map((function(e,t){return Object(b.jsx)(h,{selected:c>t,onSelect:function(){return o(t+1)}},t)})),Object(b.jsxs)("p",{children:[c," of ",n]})]})}function v(e){var t=e.id,r=e.title,n=e.color,c=e.rating,o=O(),i=o.rateColor,a=o.removeColor;return Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h1",{children:r}),Object(b.jsx)("div",{style:{height:50,backgroundColor:n}}),Object(b.jsx)("h3",{children:n}),Object(b.jsx)(p,{selectedStars:c,onStarRate:function(e){return i(t,e)}}),Object(b.jsx)("button",{children:Object(b.jsx)(s.b,{onClick:function(){return a(t)}})})]})}function g(){var e=O().colors;return Object(b.jsx)("div",{style:{display:"flex",justifyContent:"space-around",flexWrap:"wrap"},children:e.map((function(e){return Object(b.jsx)(v,Object(a.a)({},e))}))})}function C(){var e=j(""),t=Object(i.a)(e,2),r=t[0],n=t[1],c=j("#000000"),o=Object(i.a)(c,2),l=o[0],s=o[1],u=O().addColor;return Object(b.jsxs)("div",{style:{display:"flex",textAlign:"center",flexDirection:"column",marginBottom:"2rem"},children:[Object(b.jsx)("h2",{children:"Add Color"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(r),u(r.value,l.value),n(),s()},style:{display:"flex",justifyContent:"center"},children:[Object(b.jsx)("input",Object(a.a)({type:"text",placeholder:"Color Name"},r)),Object(b.jsx)("input",Object(a.a)({type:"color",placeholder:"Color"},l)),Object(b.jsx)("button",{type:"submit",children:"Add Color"})]})]})}var m=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{style:{textAlign:"center"},children:"Color Organizer"}),Object(b.jsx)(C,{}),Object(b.jsx)(g,{})]})};o.a.render(Object(b.jsx)(x,{children:Object(b.jsx)(m,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.310283d6.chunk.js.map