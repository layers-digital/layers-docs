import{r as s,h as t,c as l,H as e}from"./p-72181234.js";import{D as o}from"./p-00bea6bd.js";const a=class{constructor(t){s(this,t),this.isOpen=!0}hostData(){return{class:"docs-menu-collapsible--status-open",role:"button",tabindex:"0","aria-label":"Collapsible Menu"}}toggle(){this.isOpen=!this.isOpen,i(this.el,"docs-menu-collapsible--status-"),this.el.classList.add(`docs-menu-collapsible--status-${this.isOpen?"open":"closed"}`)}__stencil_render(){return[t("a",{onClick:()=>this.toggle(),class:"docs-menu-collapsible__title"},this.heading,t(o,null)),t("div",{class:"docs-menu-collapsible__contents"},t("slot",null))]}get el(){return l(this)}render(){return t(e,this.hostData(),this.__stencil_render())}static get style(){return"docs-menu-collapsible{display:block;outline:none;border-top:1px solid #dee3ea;padding-bottom:.35rem}docs-menu-collapsible .docs-menu-collapsible__title{--item-spacing:10px;font-weight:600;font-size:12px;line-height:14px;letter-spacing:.06em;text-transform:uppercase;color:#020814;display:-ms-flexbox;display:flex;padding-top:16px;padding-right:20px;padding-left:calc(14px + 1 * 10px);letter-spacing:.085em}docs-menu-collapsible .docs-menu-collapsible__title svg{width:14px;fill:#5b708b;margin-left:auto;height:18px;display:inline-block;-webkit-transition:transform .2s ease;transition:transform .2s ease}docs-menu-collapsible.docs-menu-collapsible--status-closed .docs-menu-collapsible__title svg{-webkit-transform:rotate(180deg);transform:rotate(180deg)}docs-menu-collapsible.docs-menu-collapsible--status-closed .docs-menu-collapsible__contents{display:none}docs-menu-collapsible .docs-menu-collapsible__contents .Nav{padding-bottom:0;padding-top:.6rem}"}},i=(s,t)=>{s.classList.forEach(l=>{l.startsWith(t)&&s.classList.remove(l)})};export{a as docs_menu_collapsible};