var __spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;for(var n=Array(t),i=0,e=0;e<r;e++)for(var o=arguments[e],s=0,c=o.length;s<c;s++,i++)n[i]=o[s];return n};System.register(["./p-556912ca.system.js","./p-8abcb78c.system.js","./p-227a2efb.system.js"],(function(t){"use strict";var e,r,n;return{setters:[function(t){e=t.r;r=t.h},function(){},function(t){n=t.A}],execute:function(){function i(t){n.injectProps(t,["history","location"])}var o=t("select_category",function(){function t(t){e(this,t)}t.prototype.locationChanged=function(){var t=this.currentCategory();if(this.select&&t){this.select.select(t.title)}};t.prototype.currentCategory=function(){var t,e,r,n,i;var o=(e=(t=this.history)===null||t===void 0?void 0:t.location.pathname,e!==null&&e!==void 0?e:"");return n=(r=this.options)===null||r===void 0?void 0:r.find((function(t){return o.startsWith(t.url)})),n!==null&&n!==void 0?n:(i=this.options)===null||i===void 0?void 0:i[0]};t.prototype.selectCategory=function(t){var e=this.options.find((function(e){return e.title==t.detail}));if(this.currentCategory()!=e){this.history.push(e.link)}};t.prototype.renderOption=function(t){var e=this.options.find((function(e){return e.title==t}));var n=e.icon;return r("div",{class:"SelectCategory-framework"},r("img",{src:n,class:"SelectCategory-icon"}),r("span",null,t))};t.prototype.render=function(){var t=this;return __spreadArrays([r("docs-select",{ref:function(e){return t.select=e},class:"SelectCategory",options:this.options.map((function(t){return t.title})),optionRenderer:this.renderOption.bind(this),initializer:function(){return t.currentCategory().title},onSelection:function(e){return t.selectCategory(e)}})],this.options.map((function(t){return r("a",{href:t.link})})))};Object.defineProperty(t,"watchers",{get:function(){return{location:["locationChanged"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return".SelectCategory,.SelectCategory .Dropdown,.SelectCategory .Dropdown-button{width:100%}.SelectCategory .Dropdown-panel{min-width:100%}.SelectCategory-framework{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.SelectCategory-icon{height:28px;width:28px;margin-right:.7em;border-radius:35%}.Dropdown-panel .SelectCategory-icon{height:20px;width:20px}.SelectCategory .Select-option{padding-left:.75em}.SelectCategory .Dropdown-button{font-size:14px;border:none!important;padding:1em 1em!important;border-radius:0!important}.SelectCategory .Dropdown-arrow{width:1em;height:1em}.SelectCategory .Select-option{font-size:14px;padding:.8em 1.2em}.SelectCategory .Dropdown-button:hover{background-color:rgba(var(--accent-color-rgb),.05)}"},enumerable:true,configurable:true});return t}());i(o)}}}));