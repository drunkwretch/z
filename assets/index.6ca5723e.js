import{R as e}from"./react.457ca2a6.js";import{b as l,E as m,L as n}from"./fzj.5150733e.js";import{C as c,L as g}from"./index.e2bfe4bd.js";import"./lodash.71f9f2ff.js";import"./graphql.6e070bf7.js";import"./index.0b8d278e.js";function E(){const{data:r,loading:t,error:s}=l();if(s)return e.createElement(m,{type:"blog"});if(t||!r.repository)return e.createElement(n,null);const{discussionCategories:i,labels:o}=r.repository;return e.createElement("div",{className:"tags-view"},e.createElement("h2",null,"Categories & Labels"),e.createElement("div",{className:"tag-categories"},i.edges.map(({node:a})=>e.createElement(c,{key:a.id,name:a.name,emoji:a.emojiHTML}))),e.createElement("div",{className:"tag-labels"},o.edges.map(({node:a})=>e.createElement(g,{key:a.id,name:a.name,color:a.color}))))}export{E as default};
