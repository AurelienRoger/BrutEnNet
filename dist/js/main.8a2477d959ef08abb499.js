"use strict";(self.webpackChunkreact_modele=self.webpackChunkreact_modele||[]).push([[179],{8773:(e,t,r)=>{var n=r(745),a=(r(6977),r(9753),r(2526),r(1817),r(1539),r(2165),r(6992),r(8783),r(3948),r(7042),r(8309),r(1038),r(4916),r(7294)),l=r(1982),u=r(5893);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l,u,i=[],o=!0,s=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;o=!1}else for(;!(o=(n=l.call(r)).done)&&(i.push(n.value),i.length!==t);o=!0);}catch(e){s=!0,a=e}finally{try{if(!o&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(s)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const s=function(){var e=i((0,a.useState)(0),2),t=e[0],r=e[1],n=i((0,a.useState)(0),2),o=n[0],s=n[1],c=i((0,a.useState)(!1),2),f=c[0],d=c[1],h=i((0,a.useState)(!1),2),v=h[0],m=h[1];return(0,a.useEffect)((function(){var e,r;f&&(e=t,r=Math.round(.77*e),s(r))}),[t]),(0,a.useEffect)((function(){var e;v&&(e=(1.31*o).toFixed(2),r(e))}),[o]),(0,u.jsxs)(l.Z,{children:[(0,u.jsx)(l.Z.Field,{children:(0,u.jsxs)("label",{htmlFor:"brut",children:["Salaire Mensuel Brut",(0,u.jsx)("input",{placeholder:"Salaire Mensuel Brut",value:t,name:"brut",onChange:function(e){d(!0),m(!1),r(e.target.value)}})]})}),(0,u.jsx)(l.Z.Field,{children:(0,u.jsxs)("label",{htmlFor:"net",children:["Salaire Mensuel Net",(0,u.jsx)("input",{placeholder:"Salaire Mensuel Net",value:o,onChange:function(e){d(!1),m(!0),s(e.target.value)}})]})})]})};var c=r(9445);const f=function(){return(0,u.jsx)(c.Z,{as:"h3",dividing:!0,children:"Calcul Salaire Brut en Net ou inversement"})};const d=function(){return(0,u.jsxs)("div",{className:"app",children:[(0,u.jsx)(f,{}),(0,u.jsx)(s,{})]})};var h=(0,u.jsx)(d,{});(0,n.s)(document.getElementById("root")).render(h)},9193:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[662],(()=>(t(9193),t(8773))));e.O()}]);