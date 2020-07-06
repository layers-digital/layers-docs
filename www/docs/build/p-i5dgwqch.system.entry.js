var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function s(e){try{l(n.next(e))}catch(t){i(t)}}function o(e){try{l(n["throw"](e))}catch(t){i(t)}}function l(e){e.done?r(e.value):a(e.value).then(s,o)}l((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;a=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1];i=s;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(s);break}if(i[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(o){s=[6,o];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-ed7628e0.system.js","./p-65968490.system.js","./p-66045b99.system.js","./p-82eea1c5.system.js","./p-4656a75c.system.js","./p-a18a19c7.system.js","./p-e3e3da4a.system.js","./p-f8319b06.system.js","./p-b2095283.system.js","./p-5f5403d3.system.js"],(function(e){"use strict";var t,r,n,a,i,s,o,l,f,c,d,u,m,p,h,v,y,b,g,w,E,S;return{setters:[function(e){t=e.r;r=e.e;n=e.w;a=e.k;i=e.l;s=e.h;o=e.H;l=e.c},function(e){f=e.g},function(e){c=e.c},function(){},function(e){d=e.B;u=e.p;m=e.a;p=e.c;h=e.d;v=e.e},function(e){y=e.c},function(e){b=e.a;g=e.d},function(e){w=e.g},function(e){E=e.createGesture},function(e){S=e.d}],execute:function(){var x={MIN_PRESENTING_SCALE:.93};var D=function(e,t,r){var n=e.offsetHeight;var a=false;var i=function(e){var t=e.event.target;if(t===null||!t.closest){return true}var r=t.closest("ion-content");if(r===null){return true}return false};var s=function(){t.progressStart(true,a?1:0)};var o=function(e){var r=e.deltaY/n;if(r<0){return}t.progressStep(r)};var l=function(e){var i=e.velocityY;var s=e.deltaY/n;if(s<0){return}var o=(e.deltaY+i*1e3)/n;var l=o>=.5;var c=l?-.001:.001;if(!l){t.easing("cubic-bezier(1, 0, 0.68, 0.28)");c+=w([0,0],[1,0],[.68,.28],[1,1],s)[0]}else{t.easing("cubic-bezier(0.32, 0.72, 0, 1)");c+=w([0,0],[.32,.72],[0,1],[1,1],s)[0]}var d=l?k(s*n,i):k((1-s)*n,i);a=l;f.enable(false);t.onFinish((function(){if(!l){f.enable(true)}})).progressEnd(l?1:0,c,d);if(l){r()}};var f=E({el:e,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:i,onStart:s,onMove:o,onEnd:l});return f};var k=function(e,t){return c(400,e/Math.abs(t*1.1),500)};var _=function(e,t){var r=y().addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);var n=y().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)");var a=y().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(n);if(t){var i=window.innerWidth<768;var s=t.tagName==="ION-MODAL"&&t.presentingElement!==undefined;var o=y().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"});var l=document.body;if(i){var f=!CSS.supports("width","max(0px, 1px)")?"30px":"max(30px, var(--ion-safe-area-top))";var c=s?"-10px":f;var d=x.MIN_PRESENTING_SCALE;var u="translateY("+c+") scale("+d+")";o.afterStyles({transform:u}).beforeAddWrite((function(){return l.style.setProperty("background-color","black")})).addElement(t).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:u,borderRadius:"10px 10px 0 0"}]);a.addAnimation(o)}else{a.addAnimation(r);if(!s){n.fromTo("opacity","0","1")}else{var d=s?x.MIN_PRESENTING_SCALE:1;var u="translateY(-10px) scale("+d+")";o.afterStyles({transform:u}).addElement(t.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:u}]);var m=y().afterStyles({transform:u}).addElement(t.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:u}]);a.addAnimation([o,m])}}}else{a.addAnimation(r)}return a};var A=function(e,t,r){if(r===void 0){r=500}var n=y().addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);var a=y().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)");var i=y().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(r).addAnimation(a);if(t){var s=window.innerWidth<768;var o=t.tagName==="ION-MODAL"&&t.presentingElement!==undefined;var l=y().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((function(e){if(e!==1){return}t.style.setProperty("overflow","");var r=Array.from(f.querySelectorAll("ion-modal")).filter((function(e){return e.presentingElement!==undefined})).length;if(r<=1){f.style.setProperty("background-color","")}}));var f=document.body;if(s){var c=!CSS.supports("width","max(0px, 1px)")?"30px":"max(30px, var(--ion-safe-area-top))";var d=o?"-10px":c;var u=x.MIN_PRESENTING_SCALE;var m="translateY("+d+") scale("+u+")";l.addElement(t).keyframes([{offset:0,filter:"contrast(0.85)",transform:m,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]);i.addAnimation(l)}else{i.addAnimation(n);if(!o){a.fromTo("opacity","1","0")}else{var u=o?x.MIN_PRESENTING_SCALE:1;var m="translateY(-10px) scale("+u+")";l.addElement(t.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:m},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);var p=y().addElement(t.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:m},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);i.addAnimation([l,p])}}}else{i.addAnimation(n)}return i};var T=function(e){var t=y();var r=y();var n=y();r.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);n.addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]);return t.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([r,n])};var C=function(e){var t=y();var r=y();var n=y();var a=e.querySelector(".modal-wrapper");r.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);n.addElement(a).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]);return t.addElement(e).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([r,n])};var Y=e("ion_modal",function(){function e(e){var n=this;t(this,e);this.gestureAnimationDismissing=false;this.presented=false;this.keyboardClose=true;this.backdropDismiss=true;this.showBackdrop=true;this.animated=true;this.swipeToClose=false;this.onBackdropTap=function(){n.dismiss(undefined,d)};this.onDismiss=function(e){e.stopPropagation();e.preventDefault();n.dismiss()};this.onLifecycle=function(e){var t=n.usersElement;var r=P[e.type];if(t&&r){var a=new CustomEvent(r,{bubbles:false,cancelable:false,detail:e.detail});t.dispatchEvent(a)}};u(this.el);this.didPresent=r(this,"ionModalDidPresent",7);this.willPresent=r(this,"ionModalWillPresent",7);this.willDismiss=r(this,"ionModalWillDismiss",7);this.didDismiss=r(this,"ionModalDidDismiss",7)}e.prototype.swipeToCloseChanged=function(e){if(this.gesture){this.gesture.enable(e)}else if(e){this.initSwipeToClose()}};e.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,r;var a=this;return __generator(this,(function(i){switch(i.label){case 0:if(this.presented){return[2]}e=this.el.querySelector(".modal-wrapper");if(!e){throw new Error("container is undefined")}t=Object.assign(Object.assign({},this.componentProps),{modal:this.el});r=this;return[4,b(this.delegate,e,this.component,["ion-page"],t)];case 1:r.usersElement=i.sent();return[4,S(this.usersElement)];case 2:i.sent();n((function(){return a.el.classList.add("show-modal")}));return[4,m(this,"modalEnter",_,T,this.presentingElement)];case 3:i.sent();if(this.swipeToClose){this.initSwipeToClose()}return[2]}}))}))};e.prototype.initSwipeToClose=function(){var e=this;if(a(this)!=="ios"){return}var t=this.leaveAnimation||i.get("modalLeave",A);var r=this.animation=t(this.el,this.presentingElement);this.gesture=D(this.el,r,(function(){e.gestureAnimationDismissing=true;e.animation.onFinish((function(){return __awaiter(e,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return[4,this.dismiss(undefined,"gesture")];case 1:e.sent();this.gestureAnimationDismissing=false;return[2]}}))}))}))}));this.gesture.enable(true)};e.prototype.dismiss=function(e,t){return __awaiter(this,void 0,void 0,(function(){var r,n;return __generator(this,(function(a){switch(a.label){case 0:if(this.gestureAnimationDismissing&&t!=="gesture"){return[2,false]}r=p.get(this)||[];return[4,h(this,e,t,"modalLeave",A,C,this.presentingElement)];case 1:n=a.sent();if(!n)return[3,3];return[4,g(this.delegate,this.usersElement)];case 2:a.sent();if(this.animation){this.animation.destroy()}r.forEach((function(e){return e.destroy()}));a.label=3;case 3:this.animation=undefined;return[2,n]}}))}))};e.prototype.onDidDismiss=function(){return v(this.el,"ionModalDidDismiss")};e.prototype.onWillDismiss=function(){return v(this.el,"ionModalWillDismiss")};e.prototype.render=function(){var e;var t=a(this);return s(o,{"no-router":true,"aria-modal":"true",tabindex:"-1",class:Object.assign((e={},e[t]=true,e["modal-card"]=this.presentingElement!==undefined&&t==="ios",e),f(this.cssClass)),style:{zIndex:""+(2e4+this.overlayIndex)},onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle},s("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),t==="ios"&&s("div",{class:"modal-shadow"}),s("div",{role:"dialog",class:"modal-wrapper"}))};Object.defineProperty(e.prototype,"el",{get:function(){return l(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{swipeToClose:["swipeToCloseChanged"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color,#fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-shadow.sc-ion-modal-ios, .modal-wrapper.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-ios{position:absolute;background:transparent}\@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}\@media only screen and (min-width:768px) and (min-height:768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity,0.4)}\@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}\@media screen and (max-width:767px){\@supports (width:max(0px,1px)){.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}\@supports not (width:max(0px,1px)){.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{height:calc(100% - 40px)}}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios, [dir=rtl].modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios, [dir=rtl] .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios, [dir=rtl].sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios, [dir=rtl] .sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{display:none}.modal-card.sc-ion-modal-ios-h ion-backdrop.sc-ion-modal-ios{pointer-events:none}}\@media screen and (min-width:768px){.modal-card.sc-ion-modal-ios-h{--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;-webkit-transition:all .5s ease-in-out;transition:all .5s ease-in-out}.modal-card.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:0.18}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{-webkit-box-shadow:0 0 30px 10px rgba(0,0,0,.1);box-shadow:0 0 30px 10px rgba(0,0,0,.1)}}"},enumerable:true,configurable:true});return e}());var P={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"}}}}));