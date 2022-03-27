"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9853,2731,9810],{76:(I,q,u)=>{u.d(q,{oK:()=>v,GW:()=>d,dk:()=>l});var v=(()=>{return(P=v||(v={})).Prompt="PROMPT",P.Camera="CAMERA",P.Photos="PHOTOS",v;var P})(),d=(()=>{return(P=d||(d={})).Rear="REAR",P.Front="FRONT",d;var P})(),l=(()=>{return(P=l||(l={})).Uri="uri",P.Base64="base64",P.DataUrl="dataUrl",l;var P})()},7423:(I,q,u)=>{u.d(q,{xz:()=>R,Uw:()=>Y,fo:()=>O});var v=u(5861);"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global&&global;var w=(()=>{return(i=w||(w={})).Unimplemented="UNIMPLEMENTED",i.Unavailable="UNAVAILABLE",w;var i})();class R extends Error{constructor(n,t){super(n),this.message=n,this.code=t}}const S=i=>{var n,t,o,r,a;const h=i.CapacitorCustomPlatform||null,s=i.Capacitor||{},A=s.Plugins=s.Plugins||{},f=i.CapacitorPlatforms,M=(null===(n=null==f?void 0:f.currentPlatform)||void 0===n?void 0:n.getPlatform)||(()=>null!==h?h.name:(i=>{var n,t;return(null==i?void 0:i.androidBridge)?"android":(null===(t=null===(n=null==i?void 0:i.webkit)||void 0===n?void 0:n.messageHandlers)||void 0===t?void 0:t.bridge)?"ios":"web"})(i)),ee=(null===(t=null==f?void 0:f.currentPlatform)||void 0===t?void 0:t.isNativePlatform)||(()=>"web"!==M()),ne=(null===(o=null==f?void 0:f.currentPlatform)||void 0===o?void 0:o.isPluginAvailable)||(c=>{const m=N.get(c);return!(!(null==m?void 0:m.platforms.has(M()))&&!z(c))}),z=(null===(r=null==f?void 0:f.currentPlatform)||void 0===r?void 0:r.getPluginHeader)||(c=>{var m;return null===(m=s.PluginHeaders)||void 0===m?void 0:m.find(D=>D.name===c)}),N=new Map,ae=(null===(a=null==f?void 0:f.currentPlatform)||void 0===a?void 0:a.registerPlugin)||((c,m={})=>{const D=N.get(c);if(D)return console.warn(`Capacitor plugin "${c}" already registered. Cannot register plugins twice.`),D.proxy;const C=M(),E=z(c);let Z;const le=function(){var g=(0,v.Z)(function*(){return!Z&&C in m?Z=Z="function"==typeof m[C]?yield m[C]():m[C]:null!==h&&!Z&&"web"in m&&(Z=Z="function"==typeof m.web?yield m.web():m.web),Z});return function(){return g.apply(this,arguments)}}(),$=g=>{let p;const y=(...U)=>{const L=le().then(b=>{const T=((g,p)=>{var y,U;if(!E){if(g)return null===(U=g[p])||void 0===U?void 0:U.bind(g);throw new R(`"${c}" plugin is not implemented on ${C}`,w.Unimplemented)}{const L=null==E?void 0:E.methods.find(b=>p===b.name);if(L)return"promise"===L.rtype?b=>s.nativePromise(c,p.toString(),b):(b,T)=>s.nativeCallback(c,p.toString(),b,T);if(g)return null===(y=g[p])||void 0===y?void 0:y.bind(g)}})(b,g);if(T){const W=T(...U);return p=null==W?void 0:W.remove,W}throw new R(`"${c}.${g}()" is not implemented on ${C}`,w.Unimplemented)});return"addListener"===g&&(L.remove=(0,v.Z)(function*(){return p()})),L};return y.toString=()=>`${g.toString()}() { [capacitor code] }`,Object.defineProperty(y,"name",{value:g,writable:!1,configurable:!1}),y},K=$("addListener"),j=$("removeListener"),de=(g,p)=>{const y=K({eventName:g},p),U=function(){var b=(0,v.Z)(function*(){const T=yield y;j({eventName:g,callbackId:T},p)});return function(){return b.apply(this,arguments)}}(),L=new Promise(b=>y.then(()=>b({remove:U})));return L.remove=(0,v.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield U()}),L},J=new Proxy({},{get(g,p){switch(p){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return E?de:K;case"removeListener":return j;default:return $(p)}}});return A[c]=J,N.set(c,{name:c,proxy:J,platforms:new Set([...Object.keys(m),...E?[C]:[]])}),J});return s.convertFileSrc||(s.convertFileSrc=c=>c),s.getPlatform=M,s.handleError=c=>i.console.error(c),s.isNativePlatform=ee,s.isPluginAvailable=ne,s.pluginMethodNoop=(c,m,D)=>Promise.reject(`${D} does not have an implementation of "${m}".`),s.registerPlugin=ae,s.Exception=R,s.DEBUG=!!s.DEBUG,s.isLoggingEnabled=!!s.isLoggingEnabled,s.platform=s.getPlatform(),s.isNative=s.isNativePlatform(),s},_=(i=>i.Capacitor=S(i))("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}),O=_.registerPlugin;class Y{constructor(n){this.listeners={},this.windowListeners={},n&&(console.warn(`Capacitor WebPlugin "${n.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=n)}addListener(n,t){var o=this;this.listeners[n]||(this.listeners[n]=[]),this.listeners[n].push(t);const a=this.windowListeners[n];a&&!a.registered&&this.addWindowListener(a);const h=function(){var A=(0,v.Z)(function*(){return o.removeListener(n,t)});return function(){return A.apply(this,arguments)}}(),s=Promise.resolve({remove:h});return Object.defineProperty(s,"remove",{value:(A=(0,v.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield h()}),function(){return A.apply(this,arguments)})}),s;var A}removeAllListeners(){var n=this;return(0,v.Z)(function*(){n.listeners={};for(const t in n.windowListeners)n.removeWindowListener(n.windowListeners[t]);n.windowListeners={}})()}notifyListeners(n,t){const o=this.listeners[n];o&&o.forEach(r=>r(t))}hasListeners(n){return!!this.listeners[n].length}registerWindowListener(n,t){this.windowListeners[t]={registered:!1,windowEventName:n,pluginEventName:t,handler:o=>{this.notifyListeners(t,o)}}}unimplemented(n="not implemented"){return new _.Exception(n,w.Unimplemented)}unavailable(n="not available"){return new _.Exception(n,w.Unavailable)}removeListener(n,t){var o=this;return(0,v.Z)(function*(){const r=o.listeners[n];if(!r)return;const a=r.indexOf(t);o.listeners[n].splice(a,1),o.listeners[n].length||o.removeWindowListener(o.windowListeners[n])})()}addWindowListener(n){window.addEventListener(n.windowEventName,n.handler),n.registered=!0}removeWindowListener(n){!n||(window.removeEventListener(n.windowEventName,n.handler),n.registered=!1)}}},1852:(I,q,u)=>{u.r(q),u.d(q,{DonationRequestPageModule:()=>n});var v=u(9808),d=u(4182),l=u(9537),P=u(501),G=u(655),x=u(9426),F=u(7423),w=u(76);const R=(0,F.fo)("Camera",{web:()=>u.e(3954).then(u.bind(u,3954)).then(t=>new t.CameraWeb)});var e=u(2096),S=u(3224),B=u(2313),_=u(2139);function O(t,o){1&t&&(e.TgZ(0,"ion-label",14),e._uU(1," Name is required "),e.qZA())}function Q(t,o){1&t&&(e.TgZ(0,"ion-label",14),e._uU(1," Quality needs to be selected "),e.qZA())}function H(t,o){1&t&&(e.TgZ(0,"ion-item")(1,"ion-label",14),e._uU(2," Quantity must be positive "),e.qZA()())}const k=[{path:"",component:(()=>{class t{constructor(r,a,h,s,A){this.router=r,this.donationService=a,this.sanitizer=h,this.authService=s,this.toastController=A,this.submitted=!1,this.donationrequestForm=new d.cw({name:new d.NI("",[d.kI.required]),quality:new d.NI("",[d.kI.required]),damages:new d.NI(""),available:new d.NI(0,[t.positiveNumber])}),this.authService.observeAuthState(f=>{this.email=f.email})}static positiveNumber(r){return r.value<=0?{positiveNumber:!0}:null}ngOnInit(){}takePhoto(){return(0,G.__awaiter)(this,void 0,void 0,function*(){const r=yield R.getPhoto({quality:100,allowEditing:!1,resultType:w.dk.DataUrl,source:w.oK.Camera});this.photo=this.sanitizer.bypassSecurityTrustResourceUrl(r&&r.dataUrl)})}add(){if(this.submitted=!0,this.donationrequestForm.valid){const r=new x.Z(this.donationrequestForm.value.name,this.donationrequestForm.value.quality,this.donationrequestForm.value.damages,this.donationrequestForm.value.available,this.photo,"Pending Approval",this.email);this.donationService.add(r),this.router.navigate(["/tabs/donation-request-list"])}}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(P.F0),e.Y36(S.l),e.Y36(B.H7),e.Y36(_.e),e.Y36(l.yF))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-donation-request"]],decls:38,vars:5,consts:[["slot","start"],[3,"formGroup"],[3,"src"],["id","camera-button",3,"click"],["name","camera"],["formControlName","name"],["color","danger",4,"ngIf"],["formControlName","quality"],["value","New"],["value","Used"],["formControlName","damages"],["type","number","formControlName","available"],[4,"ngIf"],["expand","block","color","secondary",3,"click"],["color","danger"]],template:function(r,a){1&r&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Donation Request"),e.qZA(),e.TgZ(4,"ion-buttons",0),e._UZ(5,"ion-back-button"),e.qZA()()(),e.TgZ(6,"ion-content")(7,"form",1)(8,"ion-item"),e._UZ(9,"img",2),e.qZA(),e.TgZ(10,"ion-item")(11,"ion-button",3),e.NdJ("click",function(){return a.takePhoto()}),e._UZ(12,"ion-icon",4),e.qZA()(),e.TgZ(13,"ion-item")(14,"ion-label"),e._uU(15,"Item Name"),e.qZA(),e._UZ(16,"ion-input",5),e.YNc(17,O,2,0,"ion-label",6),e.qZA(),e.TgZ(18,"ion-item")(19,"ion-label"),e._uU(20,"Quality"),e.qZA(),e.TgZ(21,"ion-select",7)(22,"ion-select-option",8),e._uU(23,"New"),e.qZA(),e.TgZ(24,"ion-select-option",9),e._uU(25,"Used"),e.qZA()(),e.YNc(26,Q,2,0,"ion-label",6),e.qZA(),e.TgZ(27,"ion-item")(28,"ion-label"),e._uU(29,"Damages (If any)"),e.qZA(),e._UZ(30,"ion-input",10),e.qZA(),e.TgZ(31,"ion-item")(32,"ion-label"),e._uU(33,"Quantity Available"),e.qZA(),e._UZ(34,"ion-input",11),e.qZA(),e.YNc(35,H,3,0,"ion-item",12),e.TgZ(36,"ion-button",13),e.NdJ("click",function(){return a.add()}),e._uU(37,"Request"),e.qZA()()()),2&r&&(e.xp6(7),e.Q6J("formGroup",a.donationrequestForm),e.xp6(2),e.Q6J("src",a.photo,e.LSH),e.xp6(8),e.Q6J("ngIf",a.donationrequestForm.controls.name.errors&&a.submitted),e.xp6(9),e.Q6J("ngIf",a.donationrequestForm.controls.quality.errors&&a.submitted),e.xp6(9),e.Q6J("ngIf",a.donationrequestForm.controls.available.errors&&a.submitted))},directives:[l.Gu,l.sr,l.wd,l.Sm,l.oU,l.cs,l.W2,d._Y,d.JL,d.sg,l.Ie,l.YG,l.gu,l.Q$,l.pK,l.j9,d.JJ,d.u,v.O5,l.t9,l.QI,l.n0,l.as],styles:["#camera-button[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}"]}),t})()}];let i=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[P.Bz.forChild(k)],P.Bz]}),t})(),n=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[v.ez,d.u5,d.UX,l.Pc,i]]}),t})()},2731:(I,q,u)=>{u(9719)}}]);