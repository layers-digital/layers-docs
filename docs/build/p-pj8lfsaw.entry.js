import{r as t,h as e}from"./p-72181234.js";import"./p-7021fe2a.js";import{A as s}from"./p-e35a9f40.js";const i=class{constructor(e){t(this,e)}locationChanged(){let t=this.currentCategory();this.select&&t&&this.select.select(t.title)}currentCategory(){var t,e,s,i,o;const r=null!=(e=null===(t=this.history)||void 0===t?void 0:t.location.pathname)?e:"";return null!=(i=null===(s=this.options)||void 0===s?void 0:s.find(t=>r.startsWith(t.url)))?i:null===(o=this.options)||void 0===o?void 0:o[0]}selectCategory(t){const e=this.options.find(e=>e.title==t.detail);this.currentCategory()!=e&&this.history.push(e.link)}renderOption(t){const s=this.options.find(e=>e.title==t);return e("div",{class:"SelectCategory-framework"},e("img",{src:s.icon,class:"SelectCategory-icon"}),e("span",null,t))}render(){return[e("docs-select",{ref:t=>this.select=t,class:"SelectCategory",options:this.options.map(t=>t.title),optionRenderer:this.renderOption.bind(this),initializer:()=>this.currentCategory().title,onSelection:t=>this.selectCategory(t)}),...this.options.map(t=>e("a",{href:t.link}))]}static get watchers(){return{location:["locationChanged"]}}static get style(){return".SelectCategory,.SelectCategory .Dropdown,.SelectCategory .Dropdown-button{width:100%}.SelectCategory .Dropdown-panel{min-width:100%}.SelectCategory-framework{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex}.SelectCategory-icon{height:28px;width:28px;margin-right:.7em;border-radius:35%}.Dropdown-panel .SelectCategory-icon{height:20px;width:20px}.SelectCategory .Select-option{padding-left:.75em}.SelectCategory .Dropdown-button{font-size:14px;border:none!important;padding:1em 1em!important;border-radius:0!important}.SelectCategory .Dropdown-arrow{width:1em;height:1em}.SelectCategory .Select-option{font-size:14px;padding:.8em 1.2em}.SelectCategory .Dropdown-button:hover{background-color:rgba(var(--accent-color-rgb),.05)}"}};s.injectProps(i,["history","location"]);export{i as select_category};