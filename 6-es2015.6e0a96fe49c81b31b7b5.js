(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{JUgI:function(t,o,e){"use strict";e.r(o);var n=e("ofXK"),i=e("tyNb"),r=e("fXoL"),c=e("Jho9");function s(t,o){1&t&&(r.Sb(0,"div",2),r.Sb(1,"div"),r.vc(2,"Boot sequence interrupted."),r.Rb(),r.Sb(3,"div"),r.Sb(4,"span",3),r.vc(5," Press F2 to resume. "),r.Rb(),r.Rb(),r.Rb())}const a=[{path:"",component:(()=>{class t{constructor(t,o,e){this.router=t,this.changeDetectionRef=o,this.swUpdate=e,this.stat={angularVersion:r.O.full,navigator}}ngOnInit(){this.bootTimeOut=setTimeout(()=>{this.Boot()},5e3)}Boot(){this.router.navigate(["/explorer"],{queryParamsHandling:"preserve"})}onKeyDown(t){console.log(t),"Escape"===t.key&&this.bootTimeOut&&(clearTimeout(this.bootTimeOut),this.bootTimeOut=null),"F2"===t.key&&(this.bootTimeOut||(this.changeDetectionRef.detach(),location.reload()))}}return t.\u0275fac=function(o){return new(o||t)(r.Nb(i.b),r.Nb(r.h),r.Nb(c.b))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-bios"]],hostBindings:function(t,o){1&t&&r.ac("keydown",(function(t){return o.onKeyDown(t)}),!1,r.mc)},decls:12,vars:4,consts:[["fxLayout","column",4,"ngIf"],[1,"blink"],["fxLayout","column"],[1,"selected"]],template:function(t,o){1&t&&(r.Sb(0,"div"),r.Sb(1,"h3"),r.vc(2,"Booting..."),r.Rb(),r.Sb(3,"div"),r.vc(4),r.Rb(),r.Ob(5,"br"),r.Sb(6,"div"),r.vc(7),r.Rb(),r.Ob(8,"br"),r.tc(9,s,6,0,"div",0),r.Sb(10,"span",1),r.vc(11,"_"),r.Rb(),r.Rb()),2&t&&(r.Db(4),r.xc("Angular Version: ",o.stat.angularVersion,""),r.Db(3),r.yc("Navigator: ",o.stat.navigator.userAgent," on ",o.stat.navigator.platform,""),r.Db(2),r.hc("ngIf",!o.bootTimeOut))},directives:[n.l],styles:["*[_ngcontent-%COMP%]{font-family:monospace;color:#fff}.selected[_ngcontent-%COMP%]{color:#000;background:#fff}"]}),t})()},{path:"**",redirectTo:""}];let b=(()=>{class t{}return t.\u0275mod=r.Lb({type:t}),t.\u0275inj=r.Kb({factory:function(o){return new(o||t)},imports:[[i.c.forChild(a)],i.c]}),t})();e.d(o,"BIOSModule",(function(){return u}));let u=(()=>{class t{}return t.\u0275mod=r.Lb({type:t}),t.\u0275inj=r.Kb({factory:function(o){return new(o||t)},imports:[[n.b,b]]}),t})()}}]);