import{r as s,h as t,c as a}from"./p-72181234.js";const i=class{constructor(t){s(this,t),this.isOpen=!1}handleClick(s){s.target instanceof Node&&this.element.contains(s.target)||this.close()}async close(){this.isOpen=!1}async open(){this.isOpen=!0}render(){return t("div",null,t("img",{onClick:this.open.bind(this),class:"notModalImg",src:this.href,alt:"Integrando sua Startup"}),t("div",{class:this.isOpen?"openModal":"modal"},t("span",{onClick:this.close.bind(this),class:"close"},"×"),t("img",{class:"modalImg",src:this.href})))}get element(){return a(this)}static get style(){return".notModalImg{border-radius:5px;cursor:pointer;-webkit-transition:.3s;transition:.3s}.notModalImg:hover{opacity:.7}.modal{display:none}.openModal{display:block;position:fixed;z-index:1;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:rgba(0,0,0,.8)}.modalImg{margin:auto;display:block;width:90%;-webkit-animation-name:zoom;animation-name:zoom;-webkit-animation-duration:.6s;animation-duration:.6s;background-color:#fff;padding:10px}\@-webkit-keyframes zoom{0%{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1)}}\@keyframes zoom{0%{-webkit-transform:scale(0);transform:scale(0)}to{-webkit-transform:scale(1);transform:scale(1)}}.close{position:absolute;top:40px;right:35px;color:#f1f1f1;font-size:40px;font-weight:700;-webkit-transition:.3s;transition:.3s}.close:focus,.close:hover{color:#bbb;text-decoration:none;cursor:pointer}\@media only screen and (max-width:700px){.modalImg{width:100%}}"}};export{i as docs_zoomable_image};