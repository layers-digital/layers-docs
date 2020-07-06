System.register(["./p-ed7628e0.system.js","./p-65968490.system.js","./p-a63395d6.system.js"],(function(e){"use strict";var r,n,t,s,i,a,o;return{setters:[function(e){r=e.r;n=e.l;t=e.k;s=e.h;i=e.H},function(e){a=e.c},function(e){o=e.S}],execute:function(){var u=e("ion_spinner",function(){function e(e){r(this,e);this.paused=false}e.prototype.getName=function(){var e=this.name||n.get("spinner");var r=t(this);if(e){return e}return r==="ios"?"lines":"circular"};e.prototype.render=function(){var e;var r=this;var u=t(r);var f=r.getName();var v=o[f]||o["lines"];var y=typeof r.duration==="number"&&r.duration>10?r.duration:v.dur;var m=[];if(v.circles!==undefined){for(var p=0;p<v.circles;p++){m.push(c(v,y,p,v.circles))}}else if(v.lines!==undefined){for(var p=0;p<v.lines;p++){m.push(l(v,y,p,v.lines))}}return s(i,{class:Object.assign(Object.assign({},a(r.color)),(e={},e[u]=true,e["spinner-"+f]=true,e["spinner-paused"]=!!r.paused||n.getBoolean("_testing"),e)),role:"progressbar",style:v.elmDuration?{animationDuration:y+"ms"}:{}},m)};Object.defineProperty(e,"style",{get:function(){return":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{left:0;top:0;-webkit-transform-origin:center;transform-origin:center;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}:host-context([dir=rtl]) svg,[dir=rtl] svg{left:unset;right:unset;right:0;-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:4px;stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular){-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px,200px;stroke-dashoffset:0px;stroke-width:5.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) circle,:host(.spinner-paused) svg{-webkit-animation-play-state:paused;animation-play-state:paused}\@-webkit-keyframes spinner-fade-out{0%{opacity:1}to{opacity:0}}\@keyframes spinner-fade-out{0%{opacity:1}to{opacity:0}}\@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}\@keyframes spinner-scale-out{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}\@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(.4);transform:scale(.4);opacity:.3}to{-webkit-transform:scale(1);transform:scale(1);opacity:.9}}\@keyframes spinner-dots{0%{-webkit-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(.4);transform:scale(.4);opacity:.3}to{-webkit-transform:scale(1);transform:scale(1);opacity:.9}}\@-webkit-keyframes spinner-circular{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@keyframes spinner-circular{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px,200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px,200px;stroke-dashoffset:-15px}to{stroke-dasharray:100px,200px;stroke-dashoffset:-125px}}\@keyframes spinner-circular-inner{0%{stroke-dasharray:1px,200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px,200px;stroke-dashoffset:-15px}to{stroke-dasharray:100px,200px;stroke-dashoffset:-125px}}"},enumerable:true,configurable:true});return e}());var c=function(e,r,n,t){var i=e.fn(r,n,t);i.style["animation-duration"]=r+"ms";return s("svg",{viewBox:i.viewBox||"0 0 64 64",style:i.style},s("circle",{transform:i.transform||"translate(32,32)",cx:i.cx,cy:i.cy,r:i.r,style:e.elmDuration?{animationDuration:r+"ms"}:{}}))};var l=function(e,r,n,t){var i=e.fn(r,n,t);i.style["animation-duration"]=r+"ms";return s("svg",{viewBox:i.viewBox||"0 0 64 64",style:i.style},s("line",{transform:"translate(32,32)",y1:i.y1,y2:i.y2}))}}}}));