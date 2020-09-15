import{r as o,h as r,c as t}from"./p-72181234.js";const e=class{constructor(r){o(this,r),this.colors=["primary","secondary","tertiary","success","warning","danger","dark","medium","light"],this.activeColor=""}toggleActiveColor(o){this.activeColor=this.activeColor!==o?o:""}render(){const o=this.colors.map(o=>{const t=this.activeColor===o,e=getComputedStyle(this.el).getPropertyValue(`--ion-color-${o}`),s=getComputedStyle(this.el).getPropertyValue(`--ion-color-${o}-shade`),l=getComputedStyle(this.el).getPropertyValue(`--ion-color-${o}-tint`);return r("li",{class:{"color-menu-item":!0,"color-menu-item-active":t},style:{"background-color":`var(--ion-color-${o})`,color:`var(--ion-color-${o}-contrast)`}},r("div",{class:"color-menu-text",onClick:()=>this.toggleActiveColor(o)},o[0].toUpperCase()+o.substr(1),r("div",{class:"color-menu-value"},e)),r("svg",{width:"10px",height:"6px",viewBox:"0 0 10 6",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},r("g",{id:"Welcome",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round"},r("g",{id:"Desktop-HD",transform:"translate(-1025.000000, -335.000000)",stroke:"currentColor","stroke-width":"2"},r("polyline",{id:"arrow",transform:"translate(1030.000000, 338.000000) rotate(90.000000) translate(-1030.000000, -338.000000) ",points:"1028 334 1032 338.020022 1028 342"})))),r("ul",{class:"color-submenu"},r("li",{class:"color-submenu-item",style:{"background-color":`var(--ion-color-${o}-shade)`,color:`var(--ion-color-${o}-contrast)`}},r("div",{class:"color-menu-text"},"Shade",r("div",{class:"color-menu-value"},s))),r("li",{class:"color-submenu-item",style:{"background-color":`var(--ion-color-${o}-tint)`,color:`var(--ion-color-${o}-contrast)`}},r("div",{class:"color-menu-text"},"Tint",r("div",{class:"color-menu-value"},l)))))});return r("ul",{class:"color-menu"},o)}get el(){return t(this)}static get style(){return"color-accordion{display:block;padding-top:20px;margin-bottom:80px}.color-menu,.color-submenu{display:block;margin:0;padding:0;list-style-type:none}.color-menu-item{display:list-item;position:relative;margin-bottom:5px;list-style-type:none;font-family:var(--code-font-family);font-size:14px}.color-menu-item .color-menu-text{height:55px}.color-menu-text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.color-menu-item>.color-menu-text{cursor:pointer}.color-menu-item svg{-webkit-transition:-webkit-transform .1s;transition:-webkit-transform .1s;transition:transform .1s;transition:transform .1s,-webkit-transform .1s;position:absolute;top:24px;right:12px;pointer-events:none}.color-submenu{height:0;opacity:0}.color-submenu-item{display:list-item;margin:0;font-family:var(--code-font-family);font-size:13px;pointer-events:none;-webkit-transition:height .16s,opacity .16s;transition:height .16s,opacity .16s}.color-submenu-item .color-menu-text{height:40px}.color-menu-value{margin-left:auto;padding-right:40px}.color-menu-text{padding-left:20px}.color-menu-item-active svg{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.color-menu-item-active .color-submenu{height:80px;opacity:1;pointer-events:all}"}};export{e as color_accordion};