import{u as E,R as e}from"./react.457ca2a6.js";import{A as p}from"./index.ea2d3e2d.js";import{u as g,E as j,L as v}from"./fzj.5150733e.js";import{C as b,L as h}from"./index.e2bfe4bd.js";import{h as o,d as N}from"./index.0b8d278e.js";import"./lodash.71f9f2ff.js";import"./graphql.6e070bf7.js";function A(){const c=E(),{data:s,loading:i,error:d}=g(),f=(t,r)=>{t.stopPropagation(),c.push(`/issues/${r}`)};return d?e.createElement(j,{type:"blog"}):e.createElement("div",{className:"blog-view"},e.createElement("div",{className:"fzj-list-box"},e.createElement("div",{className:"fzj-list"},s.map(({node:t,cursor:r})=>{const{category:m,author:l,number:n,labels:u}=t;return e.createElement("div",{key:r,className:"fzj-item"},e.createElement("div",{className:"fzj-card",onClick:a=>f(a,n)},e.createElement("em",{className:"issues",onClick:a=>o(N(n),a)},"#",n),e.createElement("div",{className:"title"},e.createElement("span",null,t.title)),e.createElement("div",{className:"info"},e.createElement(b,{name:m.name,emoji:m.emojiHTML}),e.createElement(p,{avatar:l.avatarUrl,name:l.login,onClick:()=>o(l.url)}),e.createElement("div",{className:"labels"},u.edges.map(({node:a})=>e.createElement(h,{key:a.id,name:a.name,color:a.color}))))))}))),i&&s.length>0&&e.createElement("div",{className:"data-loading"},"Loading..."),e.createElement(v,{visible:i&&s.length===0}))}export{A as default};
