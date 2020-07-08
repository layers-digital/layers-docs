import{r as t,e,i,h as s,H as n,c as a}from"./p-72181234.js";import"./p-ac24a1dc.js";import{b as r}from"./p-ebb13fe7.js";import{h as o}from"./p-984ee37a.js";import{c as h,f as d,a as l}from"./p-c50237ed.js";const u=(t,e,i,s)=>{if(t!==T&&t!==I){if(t===P)return void 0!==i&&void 0!==i.hour?i.hour<12?"AM":"PM":e?e.toUpperCase():"";if(t===V)return void 0!==i&&void 0!==i.hour?i.hour<12?"am":"pm":e||"";if(null==e)return"";if(t===$||t===O||t===j||t===A||t===H||t===J)return w(e);if(t===S)return x(e);if(t===Y)return(s.monthNames?s.monthNames:_)[e-1];if(t===C)return(s.monthShortNames?s.monthShortNames:B)[e-1];if(t===E||t===F){if(0===e)return"12";if(e>12&&(e-=12),t===E&&e<10)return"0"+e}return e.toString()}try{return e=new Date(i.year,i.month-1,i.day).getDay(),t===T?(s.dayNames?s.dayNames:L)[e]:(s.dayShortNames?s.dayShortNames:W)[e]}catch(n){}},m=(t,e,i,s=0,n=0)=>parseInt(`1${x(t)}${w(e)}${w(i)}${w(s)}${w(n)}`,10),c=t=>m(t.year,t.month,t.day,t.hour,t.minute),f=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,v=/^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,p=t=>{let e=null;if(null!=t&&""!==t&&(e=v.exec(t),e?(e.unshift(void 0,void 0),e[2]=e[3]=void 0):e=f.exec(t)),null===e)return;for(let s=1;s<8;s++)e[s]=void 0!==e[s]?parseInt(e[s],10):void 0;let i=0;return e[9]&&e[10]&&(i=60*parseInt(e[10],10),e[11]&&(i+=parseInt(e[11],10)),"-"===e[9]&&(i*=-1)),{year:e[1],month:e[2],day:e[3],hour:e[4],minute:e[5],second:e[6],millisecond:e[7],tzOffset:i}},y=(t,e)=>{const i=new Date(t.toLocaleString("en-US",{timeZone:"utc"})),s=new Date(t.toLocaleString("en-US",{timeZone:e}));return i.getTime()-s.getTime()},M=(t,e)=>e===P||e===V?t.hour<12?"am":"pm":e===E||e===F?t.hour>12?t.hour-12:0===t.hour?12:t.hour:t[D(e)],D=t=>{for(const e in Z)if(Z[e].f===t)return Z[e].k},b=t=>{let e="";return void 0!==t.year?(e=x(t.year),void 0!==t.month&&(e+="-"+w(t.month),void 0!==t.day&&(e+="-"+w(t.day),void 0!==t.hour&&(e+=`T${w(t.hour)}:${w(t.minute)}:${w(t.second)}`,t.millisecond>0&&(e+="."+N(t.millisecond)),e+=void 0===t.tzOffset?"Z":(t.tzOffset>0?"+":"-")+w(Math.floor(Math.abs(t.tzOffset/60)))+":"+w(t.tzOffset%60))))):void 0!==t.hour&&(e=w(t.hour)+":"+w(t.minute),void 0!==t.second&&(e+=":"+w(t.second),void 0!==t.millisecond&&(e+="."+N(t.millisecond)))),e},g=(t,e)=>{if(null==t)return;let i;return"string"==typeof t&&(t=t.replace(/\[|\]/g,"").split(",")),Array.isArray(t)&&(i=t.map(t=>t.toString().trim())),void 0!==i&&0!==i.length||console.warn(`Invalid "${e}Names". Must be an array of strings, or a comma separated string.`),i},k=(t,e)=>{let i;return"string"==typeof t&&(t=t.replace(/\[|\]|\s/g,"").split(",")),i=Array.isArray(t)?t.map(t=>parseInt(t,10)).filter(isFinite):[t],0===i.length&&console.warn(`Invalid "${e}Values". Must be an array of numbers, or a comma separated string of numbers.`),i},w=t=>("0"+(void 0!==t?Math.abs(t):"0")).slice(-2),N=t=>("00"+(void 0!==t?Math.abs(t):"0")).slice(-3),x=t=>("000"+(void 0!==t?Math.abs(t):"0")).slice(-4),S="YYYY",$="YY",Y="MMMM",C="MMM",O="MM",T="DDDD",I="DDD",j="DD",A="HH",E="hh",F="h",H="mm",J="ss",P="A",V="a",Z=[{f:S,k:"year"},{f:Y,k:"month"},{f:T,k:"day"},{f:C,k:"month"},{f:I,k:"day"},{f:$,k:"year"},{f:O,k:"month"},{f:j,k:"day"},{f:A,k:"hour"},{f:E,k:"hour"},{f:H,k:"minute"},{f:J,k:"second"},{f:"M",k:"month"},{f:"D",k:"day"},{f:"H",k:"hour"},{f:F,k:"hour"},{f:"m",k:"minute"},{f:"s",k:"second"},{f:P,k:"ampm"},{f:V,k:"ampm"}],L=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],W=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],_=["January","February","March","April","May","June","July","August","September","October","November","December"],B=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],R=[E,F,H,"m",J,"s"],U=class{constructor(i){t(this,i),this.inputId=`ion-dt-${q++}`,this.locale={},this.datetimeMin={},this.datetimeMax={},this.datetimeValue={},this.isExpanded=!1,this.name=this.inputId,this.disabled=!1,this.readonly=!1,this.displayFormat="MMM D, YYYY",this.cancelText="Cancel",this.doneText="Done",this.onClick=()=>{this.setFocus(),this.open()},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.ionCancel=e(this,"ionCancel",7),this.ionChange=e(this,"ionChange",7),this.ionFocus=e(this,"ionFocus",7),this.ionBlur=e(this,"ionBlur",7),this.ionStyle=e(this,"ionStyle",7)}disabledChanged(){this.emitStyle()}valueChanged(){this.updateDatetimeValue(this.value),this.emitStyle(),this.ionChange.emit({value:this.value})}componentWillLoad(){this.locale={monthNames:g(this.monthNames,"monthNames"),monthShortNames:g(this.monthShortNames,"monthShortNames"),dayNames:g(this.dayNames,"dayNames"),dayShortNames:g(this.dayShortNames,"dayShortNames")},this.updateDatetimeValue(this.value),this.emitStyle()}async open(){if(this.disabled||this.isExpanded)return;const t=this.generatePickerOptions(),e=await r.create(t);this.isExpanded=!0,e.onDidDismiss().then(()=>{this.isExpanded=!1,this.setFocus()}),e.addEventListener("ionPickerColChange",async t=>{const i=t.detail,s={};s[i.name]={value:i.options[i.selectedIndex].value},this.updateDatetimeValue(s),e.columns=this.generateColumns()}),await e.present()}emitStyle(){this.ionStyle.emit({interactive:!0,datetime:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"interactive-disabled":this.disabled})}updateDatetimeValue(t){((t,e,i)=>{if(!e||"string"==typeof e){const t=((t="",e="")=>{null==t&&(t=""),10!==t.length&&7!==t.length||(t+=" ");const i="string"==typeof t&&t.length>0?new Date(t):new Date,s=new Date(Date.UTC(i.getFullYear(),i.getMonth(),i.getDate(),i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds()));return e&&e.length>0?new Date(i.getTime()-y(s,e)):s})(e,i);Number.isNaN(t.getTime())||(e=t.toISOString())}if(e&&""!==e){if("string"==typeof e){if(e=p(e))return Object.assign(t,e),!0}else{if(e.year||e.hour||e.month||e.day||e.minute||e.second){e.ampm&&e.hour&&(e.hour.value="pm"===e.ampm.value?12===e.hour.value?12:e.hour.value+12:12===e.hour.value?0:e.hour.value);for(const i of Object.keys(e))t[i]=e[i].value;return!0}if(e.ampm)return e.hour={value:e.hour?e.hour.value:"pm"===e.ampm.value?t.hour<12?t.hour+12:t.hour:t.hour>=12?t.hour-12:t.hour},t.hour=e.hour.value,!0}console.warn(`Error parsing date: "${e}". Please provide a valid ISO 8601 datetime format: https://www.w3.org/TR/NOTE-datetime`)}else for(const s in t)t.hasOwnProperty(s)&&delete t[s]})(this.datetimeValue,t,this.displayTimezone)}generatePickerOptions(){const t=i(this);this.locale={monthNames:g(this.monthNames,"monthNames"),monthShortNames:g(this.monthShortNames,"monthShortNames"),dayNames:g(this.dayNames,"dayNames"),dayShortNames:g(this.dayShortNames,"dayShortNames")};const e=Object.assign(Object.assign({mode:t},this.pickerOptions),{columns:this.generateColumns()}),s=e.buttons;return s&&0!==s.length||(e.buttons=[{text:this.cancelText,role:"cancel",handler:()=>{this.updateDatetimeValue(this.value),this.ionCancel.emit()}},{text:this.doneText,handler:t=>{this.updateDatetimeValue(t);const e=new Date(b(this.datetimeValue));this.datetimeValue.tzOffset=void 0!==this.displayTimezone&&this.displayTimezone.length>0?y(e,this.displayTimezone)/1e3/60*-1:-1*e.getTimezoneOffset(),this.value=b(this.datetimeValue)}}]),e}generateColumns(){let t=this.pickerFormat||this.displayFormat||X;if(0===t.length)return[];this.calcMinMax(),t=t.replace("DDDD","{~}").replace("DDD","{~}"),-1===t.indexOf("D")&&(t=t.replace("{~}","D")),t=t.replace(/{~}/g,"");const e=(t=>{const e=[];t=t.replace(/[^\w\s]/gi," "),Z.forEach(e=>{e.f.length>1&&t.indexOf(e.f)>-1&&t.indexOf(e.f+e.f.charAt(0))<0&&(t=t.replace(e.f," "+e.f+" "))});const i=t.split(" ").filter(t=>t.length>0);return i.forEach((t,s)=>{Z.forEach(n=>{if(t===n.f){if((t===P||t===V)&&(e.indexOf(F)<0&&e.indexOf(E)<0||-1===R.indexOf(i[s-1])))return;e.push(t)}})}),e})(t).map(t=>{const e=D(t);let i;i=this[e+"Values"]?k(this[e+"Values"],e):((t,e,i)=>{const s=[];if(t===S||t===$){if(void 0===i.year||void 0===e.year)throw new Error("min and max year is undefined");for(let t=i.year;t>=e.year;t--)s.push(t)}else if(t===Y||t===C||t===O||"M"===t||t===E||t===F)for(let n=1;n<13;n++)s.push(n);else if(t===T||t===I||t===j||"D"===t)for(let n=1;n<32;n++)s.push(n);else if(t===A||"H"===t)for(let n=0;n<24;n++)s.push(n);else if(t===H||"m"===t)for(let n=0;n<60;n++)s.push(n);else if(t===J||"s"===t)for(let n=0;n<60;n++)s.push(n);else t!==P&&t!==V||s.push("am","pm");return s})(t,this.datetimeMin,this.datetimeMax);const s=i.map(e=>({value:e,text:u(t,e,void 0,this.locale)})),n=((t,e)=>{const i=M(this.datetimeValue,e);if(void 0!==i)return i;const s=p((new Date).toISOString());return M(s,e)})(0,t),a=s.findIndex(t=>t.value===n);return{name:e,selectedIndex:a>=0?a:0,options:s}}),i=this.datetimeMin,s=this.datetimeMax;return["month","day","hour","minute"].filter(t=>!e.find(e=>e.name===t)).forEach(t=>{i[t]=0,s[t]=0}),this.validateColumns(z(e))}validateColumns(t){const e=new Date,i=c(this.datetimeMin),s=c(this.datetimeMax),n=t.find(t=>"year"===t.name);let a=e.getFullYear();if(n){n.options.find(t=>t.value===e.getFullYear())||(a=n.options[0].value);const t=n.selectedIndex;if(void 0!==t){const e=n.options[t];e&&(a=e.value)}}const r=this.validateColumn(t,"month",1,i,s,[a,0,0,0,0],[a,12,31,23,59]),o=4===(h=r)||6===h||9===h||11===h?30:2===h?(t=>t%4==0&&t%100!=0||t%400==0)(a)?29:28:31;var h;const d=this.validateColumn(t,"day",2,i,s,[a,r,0,0,0],[a,r,o,23,59]),l=this.validateColumn(t,"hour",3,i,s,[a,r,d,0,0],[a,r,d,23,59]);return this.validateColumn(t,"minute",4,i,s,[a,r,d,l,0],[a,r,d,l,59]),t}calcMinMax(){const t=(new Date).getFullYear();if(void 0!==this.yearValues){const t=k(this.yearValues,"year");void 0===this.min&&(this.min=Math.min(...t).toString()),void 0===this.max&&(this.max=Math.max(...t).toString())}else void 0===this.min&&(this.min=(t-100).toString()),void 0===this.max&&(this.max=t.toString());const e=this.datetimeMin=p(this.min),i=this.datetimeMax=p(this.max);e.year=e.year||t,i.year=i.year||t,e.month=e.month||1,i.month=i.month||12,e.day=e.day||1,i.day=i.day||31,e.hour=e.hour||0,i.hour=void 0===i.hour?23:i.hour,e.minute=e.minute||0,i.minute=void 0===i.minute?59:i.minute,e.second=e.second||0,i.second=void 0===i.second?59:i.second,e.year>i.year&&(console.error("min.year > max.year"),e.year=i.year-100),e.year===i.year&&(e.month>i.month?(console.error("min.month > max.month"),e.month=1):e.month===i.month&&e.day>i.day&&(console.error("min.day > max.day"),e.day=1))}validateColumn(t,e,i,s,n,a,r){const o=t.find(t=>t.name===e);if(!o)return 0;const d=a.slice(),l=r.slice(),u=o.options;let c=u.length-1,f=0;for(let h=0;h<u.length;h++){const t=u[h],e=t.value;d[i]=t.value,l[i]=t.value,(t.disabled=e<a[i]||e>r[i]||m(l[0],l[1],l[2],l[3],l[4])<s||m(d[0],d[1],d[2],d[3],d[4])>n)||(c=Math.min(c,h),f=Math.max(f,h))}const v=o.selectedIndex=h(c,o.selectedIndex,f),p=o.options[v];return p?p.value:0}get text(){if(null!=this.value&&0!==this.value.length)return((t,e,i)=>{if(void 0===e)return;const s=[];let n=!1;if(Z.forEach((a,r)=>{if(t.indexOf(a.f)>-1){const o="{"+r+"}",h=u(a.f,e[a.k],e,i);n||void 0===h||null==e[a.k]||(n=!0),s.push(o,h||""),t=t.replace(a.f,o)}}),n){for(let e=0;e<s.length;e+=2)t=t.replace(s[e],s[e+1]);return t}})(this.displayFormat||this.pickerFormat||X,this.datetimeValue,this.locale)}hasValue(){return void 0!==this.text}setFocus(){this.buttonEl&&this.buttonEl.focus()}render(){const{inputId:t,text:e,disabled:a,readonly:r,isExpanded:h,el:u,placeholder:m}=this,c=i(this),f=t+"-lbl",v=d(u),p=void 0===e&&null!=m,y=void 0===e?null!=m?m:"":e,M=void 0===e?null!=m?"placeholder":void 0:"text";return v&&(v.id=f),l(!0,u,this.name,this.value,this.disabled),s(n,{onClick:this.onClick,role:"combobox","aria-disabled":a?"true":null,"aria-expanded":`${h}`,"aria-haspopup":"true","aria-labelledby":f,class:{[c]:!0,"datetime-disabled":a,"datetime-readonly":r,"datetime-placeholder":p,"in-item":o("ion-item",u)}},s("div",{class:"datetime-text",part:M},y),s("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:this.disabled,ref:t=>this.buttonEl=t}))}get el(){return a(this)}static get watchers(){return{disabled:["disabledChanged"],value:["valueChanged"]}}static get style(){return":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;min-width:16px;min-height:1.2em;font-family:var(--ion-font-family,inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:2}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static}:host(.datetime-placeholder){color:var(--placeholder-color)}:host(.datetime-disabled){opacity:.3;pointer-events:none}:host(.datetime-readonly){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.datetime-text{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-ms-flex:1;flex:1;min-height:inherit;direction:ltr;overflow:inherit}:host-context([dir=rtl]) .datetime-text,[dir=rtl] .datetime-text{direction:rtl}:host{--placeholder-color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:16px}"}},z=t=>{const e=[];let i,s;for(let n=0;n<t.length;n++){i=t[n],e.push(0);for(const t of i.options)s=t.text.length,s>e[n]&&(e[n]=s)}return 2===e.length?(s=Math.max(e[0],e[1]),t[0].align="right",t[1].align="left",t[0].optionsWidth=t[1].optionsWidth=`${17*s}px`):3===e.length&&(s=Math.max(e[0],e[2]),t[0].align="right",t[1].columnWidth=`${17*e[1]}px`,t[0].optionsWidth=t[2].optionsWidth=`${17*s}px`,t[2].align="left"),t},X="MMM D, YYYY";let q=0;export{U as ion_datetime};