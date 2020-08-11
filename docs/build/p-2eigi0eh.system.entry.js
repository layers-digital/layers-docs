System.register(["./p-556912ca.system.js"],(function(t){"use strict";var e,r,s,n;return{setters:[function(t){e=t.r;r=t.h;s=t.c;n=t.H}],execute:function(){var i=t("docs_tabs",function(){function t(t){var s=this;e(this,t);this.selected=null;this.tabs=[];this.toTabButton=function(t){var e=t.getAttribute("tab");var n=s.selected===t;var i={"Tabs-button":true,"is-selected":n};return r("button",{role:"tab","aria-selected":n?"true":"false",onClick:function(){return s.select(t)},class:i},e)}}t.prototype.listenForFrameworkSelection=function(t){var e=this;if(this.listenFor&&t.detail.key===this.listenFor){this.tabs.forEach((function(r){if(r.tab.toLowerCase()===t.detail.value.toLowerCase()){e.select(r)}}))}};t.prototype.componentDidLoad=function(){this.tabs=Array.from(this.element.querySelectorAll("docs-tab"));this.select(this.tabs.find((function(t){return t.hasAttribute("selected")}))||this.tabs[0])};t.prototype.select=function(t){if(t!=null){if(this.selected!=null){this.selected.removeAttribute("selected")}this.selected=t;this.selected.setAttribute("selected","")}};t.prototype.hostData=function(){return{role:"tablist",class:{Tabs:true}}};t.prototype.__stencil_render=function(){return[r("header",{class:"Tabs-header"},this.tabs.map(this.toTabButton)),r("slot",null)]};Object.defineProperty(t.prototype,"element",{get:function(){return s(this)},enumerable:true,configurable:true});t.prototype.render=function(){return r(n,this.hostData(),this.__stencil_render())};Object.defineProperty(t,"style",{get:function(){return".Tabs,.Tabs-tab{display:block}.Tabs-tab:not([selected]){display:none}.Tabs-header{border-bottom:1px solid rgba(0,32,88,.1);white-space:nowrap}.Tabs-button{--bg-alpha:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,var(--bg-alpha));border:none;color:var(--text-color--light);cursor:pointer;font-family:inherit;font-size:10px;font-weight:600;letter-spacing:.04em;padding:1rem;text-transform:uppercase;-webkit-transform:translateY(1px);transform:translateY(1px)}.Tabs-button:first-child{border-top-left-radius:6px}.Tabs-button:last-child{border-top-right-radius:6px}.Tabs-button:focus{outline:none;--bg-alpha:0.015}\@media (hover:hover){.Tabs-button:hover{--bg-alpha:0.015}}.Tabs-button:active{--bg-alpha:0.03}.Tabs-button.is-selected{border-bottom:1px solid currentColor;color:rgb(var(--accent-color-rgb))}.Tabs-tab docs-code pre{margin-top:0}"},enumerable:true,configurable:true});return t}())}}}));