import{R as s}from"./react.457ca2a6.js";import{h as o,c as l}from"./index.0b8d278e.js";import{c as i}from"./fzj.5150733e.js";const m=({name:e,emoji:a})=>{const t=n=>{n.stopPropagation(),o(l(e))};return s.createElement("span",{className:"fzj-category",onClick:t},s.createElement("span",{className:"fzj-emoji",dangerouslySetInnerHTML:{__html:a}}),e)};var j=m;const p=({className:e,name:a,color:t})=>{const n=`https://github.com/lencx/z/discussions?discussions_q=label%3A${a}`,r=c=>{c.stopPropagation(),o(n)};return s.createElement("span",{style:{background:`#${t}`},className:i("fzj-label",e),onClick:r},s.createElement("span",null,a))};var b=p;export{j as C,b as L};
