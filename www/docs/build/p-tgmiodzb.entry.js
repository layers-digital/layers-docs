import{r as s,h as t}from"./p-ce7c30ce.js";import{P as e}from"./p-04d21956.js";import{g as i,n,b as o}from"./p-17dc16c8.js";const a=class{constructor(t){s(this,t),this.open=!1,this.canClose=!0,this.isOpen=!1}getRootAcessorNode(){if(this.node)return this.node;let s=i(this.spec,this.path);return s?{schema:s,name:this.path.split("/").pop()}:null}componentWillLoad(){var s;let t=this.getRootAcessorNode(),e=o(t,!0).join(".");console.log({path:e}),this.isOpen=!!window.location.hash.startsWith("#"+e)||null!=(s=this.open)&&s}toggle(){this.isOpen=!this.canClose||!this.isOpen}render(){var s;let i=this.getRootAcessorNode();if("array"==i.schema.type&&(i={name:"[]",schema:n(this.spec,i.schema.items),parent:i}),"object"!=typeof i.schema.properties)return t("section",{class:"Api-nested-section"},t("button",{class:"Api-nested-toggle-btn"},"Erro: Entidade inválida"));let o=Object.keys(i.schema.properties).length,a=null!=(s=this.text)?s:this.isOpen?"Ocultar Propriedades":`Mostrar ${o} propriedade${o>1?"s":""}`;return t("section",{class:`Api-nested-section ${this.isOpen?"active":""}`},t("button",{class:"Api-nested-toggle-btn",onClick:()=>this.toggle()},this.canClose?t(e,{class:"icon"}):null,t("span",{class:"text"},a)),this.isOpen?t("docs-openapi-schema",{node:i,spec:this.spec}):null)}static get style(){return".Api-nested-section{-webkit-box-shadow:0 0 0 1px var(--api-gray100);box-shadow:0 0 0 1px var(--api-gray100);border-radius:12px;width:-webkit-min-content;width:-moz-min-content;width:min-content;margin-top:8px;margin-bottom:4px}.Api-nested-section.active{width:100%}.Api-nested-toggle-btn{cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background:none;border:none;width:100%;text-align:left;border-radius:12px;line-height:100%;white-space:pre;font-family:var(--font-family);font-size:13px;padding-right:12px;height:26px;--color-bg:transparent;background-color:var(--color-bg);--color:var(--api-gray400);color:var(--color)}.Api-nested-toggle-btn>.icon{width:14px;height:14px;-webkit-transition:-webkit-transform .2s ease-in-out;transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out,-webkit-transform .2s ease-in-out;fill:var(--color)}.Api-nested-toggle-btn>.text{padding-top:2px;margin-left:4px}.Api-nested-section.active>.Api-nested-toggle-btn{border-radius:12px 12px 0 0}.Api-nested-section.active>.Api-nested-toggle-btn,.Api-nested-section:hover>.Api-nested-toggle-btn{--color-bg:rgba(0,0,0,0.02);--color:var(--api-gray500)}.Api-nested-section.active>.Api-nested-toggle-btn>.icon{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.Api-nested-toggle-btn:focus{outline:none}.Api-nested-section .Api-property-list-item{padding-left:16px;padding-right:16px}.Api-nested-section.active>docs-openapi-schema{border-top:1px solid var(--api-gray100)}"}};export{a as docs_openapi_schema_nested};