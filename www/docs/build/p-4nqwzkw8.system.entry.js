var __awaiter=this&&this.__awaiter||function(t,e,n,i){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,a){function o(t){try{u(i.next(t))}catch(e){a(e)}}function s(t){try{u(i["throw"](t))}catch(e){a(e)}}function u(t){t.done?n(t.value):r(t.value).then(o,s)}u((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},i,r,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(e){return u([t,e])}}function u(o){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(a=o[0]&2?r["return"]:o[0]?r["throw"]||((a=r["return"])&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;if(r=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;r=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(o[0]===6&&n.label<a[1]){n.label=a[1];a=o;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(o);break}if(a[2])n.ops.pop();n.trys.pop();continue}o=e.call(t,n)}catch(s){o=[6,s];r=0}finally{i=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-ed7628e0.system.js","./p-65968490.system.js","./p-66045b99.system.js"],(function(t,e){"use strict";var n,i,r,a,o,s,u,l,c,f,h;return{setters:[function(t){n=t.r;i=t.e;r=t.l;a=t.w;o=t.k;s=t.h;u=t.H;l=t.c},function(t){c=t.c;f=t.h},function(t){h=t.p}],execute:function(){var d=t("ion_segment",function(){function t(t){var e=this;n(this,t);this.didInit=false;this.activated=false;this.disabled=false;this.scrollable=false;this.onClick=function(t){var n=t.target;var i=e.checked;e.value=n.value;if(i&&e.scrollable){e.checkButton(i,n)}e.checked=n};this.ionChange=i(this,"ionChange",7);this.ionSelect=i(this,"ionSelect",7);this.ionStyle=i(this,"ionStyle",7)}t.prototype.valueChanged=function(t,e){this.ionSelect.emit({value:t});if(e!==""||this.didInit){if(!this.activated){this.ionChange.emit({value:t})}else{this.valueAfterGesture=t}}};t.prototype.disabledChanged=function(){this.gestureChanged();var t=this.getButtons();for(var e=0,n=t;e<n.length;e++){var i=n[e];i.disabled=this.disabled}};t.prototype.gestureChanged=function(){if(this.gesture&&!this.scrollable){this.gesture.enable(!this.disabled)}};t.prototype.connectedCallback=function(){this.emitStyle()};t.prototype.componentWillLoad=function(){this.emitStyle()};t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){var t;var n=this;return __generator(this,(function(i){switch(i.label){case 0:this.setCheckedClasses();t=this;return[4,e.import("./p-b2095283.system.js")];case 1:t.gesture=i.sent().createGesture({el:this.el,gestureName:"segment",gesturePriority:100,threshold:0,passive:false,onStart:function(t){return n.onStart(t)},onMove:function(t){return n.onMove(t)},onEnd:function(t){return n.onEnd(t)}});this.gesture.enable(!this.scrollable);this.gestureChanged();if(this.disabled){this.disabledChanged()}this.didInit=true;return[2]}}))}))};t.prototype.onStart=function(t){this.activate(t)};t.prototype.onMove=function(t){this.setNextIndex(t)};t.prototype.onEnd=function(t){this.setActivated(false);var e=this.setNextIndex(t,true);t.event.stopImmediatePropagation();if(e){this.addRipple(t)}var n=this.valueAfterGesture;if(n!==undefined){this.ionChange.emit({value:n});this.valueAfterGesture=undefined}};t.prototype.getButtons=function(){return Array.from(this.el.querySelectorAll("ion-segment-button"))};t.prototype.addRipple=function(t){var e=this;var n=r.getBoolean("animated",true)&&r.getBoolean("rippleEffect",true);if(!n){return}var i=this.getButtons();var a=i.find((function(t){return t.value===e.value}));var o=a.shadowRoot||a;var s=o.querySelector("ion-ripple-effect");if(!s){return}var u=h(t.event),l=u.x,c=u.y;s.addRipple(l,c).then((function(t){return t()}))};t.prototype.setActivated=function(t){var e=this.getButtons();e.forEach((function(e){if(t){e.classList.add("segment-button-activated")}else{e.classList.remove("segment-button-activated")}}));this.activated=t};t.prototype.activate=function(t){var e=this;var n=t.event.target;var i=this.getButtons();var r=i.find((function(t){return t.value===e.value}));if(n.tagName!=="ION-SEGMENT-BUTTON"){return}if(!r){this.value=n.value}if(this.value===n.value){this.setActivated(true)}};t.prototype.getIndicator=function(t){var e=t.shadowRoot||t;return e.querySelector(".segment-button-indicator")};t.prototype.checkButton=function(t,e){var n=this.getIndicator(t);var i=this.getIndicator(e);if(n===null||i===null){return}var r=n.getBoundingClientRect();var o=i.getBoundingClientRect();var s=r.width/o.width;var u=r.left-o.left;var l="translate3d("+u+"px, 0, 0) scaleX("+s+")";a((function(){i.classList.remove("segment-button-indicator-animated");i.style.setProperty("transform",l);i.getBoundingClientRect();i.classList.add("segment-button-indicator-animated");i.style.setProperty("transform","")}));this.value=e.value;this.setCheckedClasses()};t.prototype.setCheckedClasses=function(){var t=this;var e=this.getButtons();var n=e.findIndex((function(e){return e.value===t.value}));var i=n+1;this.checked=e.find((function(e){return e.value===t.value}));for(var r=0,a=e;r<a.length;r++){var o=a[r];o.classList.remove("segment-button-after-checked")}if(i<e.length){e[i].classList.add("segment-button-after-checked")}};t.prototype.setNextIndex=function(t,e){var n=this;if(e===void 0){e=false}var i=document.dir==="rtl";var r=this.activated;var a=this.getButtons();var o=a.findIndex((function(t){return t.value===n.value}));var s=a[o];var u;var l;if(o===-1){return}var c=s.getBoundingClientRect();var f=c.left;var h=c.width;var d=t.currentX;var v=c.top+c.height/2;var p=document.elementFromPoint(d,v);var g=i?d>f+h:d<f;var b=i?d<f:d>f+h;if(r&&!e){if(g){var y=o-1;if(y>=0){l=y}}else if(b){if(r&&!e){var y=o+1;if(y<a.length){l=y}}}if(l!==undefined&&!a[l].disabled){u=a[l]}}if(!r&&e){u=p}if(u!=null){if(u.tagName==="ION-SEGMENT"){return false}if(s!==u){this.checkButton(s,u)}}return true};t.prototype.emitStyle=function(){this.ionStyle.emit({segment:true})};t.prototype.render=function(){var t;var e=o(this);return s(u,{onClick:this.onClick,class:Object.assign(Object.assign({},c(this.color)),(t={},t[e]=true,t["in-toolbar"]=f("ion-toolbar",this.el),t["in-toolbar-color"]=f("ion-toolbar[color]",this.el),t["segment-activated"]=this.activated,t["segment-disabled"]=this.disabled,t["segment-scrollable"]=this.scrollable,t))},s("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return l(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{value:["valueChanged"],disabled:["disabledChanged"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family,inherit);text-align:center;contain:paint}:host(.segment-scrollable){-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:auto}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:transparent}:host(.segment-scrollable) ::slotted(ion-segment-button){min-width:auto}"},enumerable:true,configurable:true});return t}())}}}));