(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{JUgI:function(t,o,e){"use strict";e.r(o);var n=e("ofXK"),i=e("tyNb"),r=e("fXoL");function c(t,o){1&t&&(r.Sb(0,"div",2),r.Sb(1,"div"),r.uc(2,"Boot sequence interrupted."),r.Rb(),r.Sb(3,"div"),r.Sb(4,"span",3),r.uc(5," Press F2 to resume. "),r.Rb(),r.Rb(),r.Rb())}const s=[{path:"",component:(()=>{class t{constructor(t,o){this.router=t,this.changeDetectionRef=o,this.stat={angularVersion:r.N.full,navigator}}ngOnInit(){this.bootTimeOut=setTimeout(()=>{this.Boot()},5e3)}Boot(){this.router.navigate(["/explorer"],{preserveQueryParams:!0})}onKeyDown(t){console.log(t),"Escape"===t.key&&this.bootTimeOut&&(clearTimeout(this.bootTimeOut),this.bootTimeOut=null),"F2"===t.key&&(this.bootTimeOut||(this.changeDetectionRef.detach(),location.reload()))}}return t.\u0275fac=function(o){return new(o||t)(r.Mb(i.b),r.Mb(r.h))},t.\u0275cmp=r.Gb({type:t,selectors:[["app-bios"]],hostBindings:function(t,o){1&t&&r.ac("keydown",(function(t){return o.onKeyDown(t)}),!1,r.lc)},decls:12,vars:4,consts:[["fxLayout","column",4,"ngIf"],[1,"blink"],["fxLayout","column"],[1,"selected"]],template:function(t,o){1&t&&(r.Sb(0,"div"),r.Sb(1,"h3"),r.uc(2,"Booting..."),r.Rb(),r.Sb(3,"div"),r.uc(4),r.Rb(),r.Nb(5,"br"),r.Sb(6,"div"),r.uc(7),r.Rb(),r.Nb(8,"br"),r.sc(9,c,6,0,"div",0),r.Sb(10,"span",1),r.uc(11,"_"),r.Rb(),r.Rb()),2&t&&(r.Cb(4),r.wc("Angular Version: ",o.stat.angularVersion,""),r.Cb(3),r.xc("Navigator: ",o.stat.navigator.userAgent," on ",o.stat.navigator.platform,""),r.Cb(2),r.hc("ngIf",!o.bootTimeOut))},directives:[n.k],styles:["*[_ngcontent-%COMP%]{font-family:monospace;color:#fff}.selected[_ngcontent-%COMP%]{color:#000;background:#fff}"]}),t})()},{path:"**",redirectTo:""}];let a=(()=>{class t{}return t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({factory:function(o){return new(o||t)},imports:[[i.c.forChild(s)],i.c]}),t})();e.d(o,"BIOSModule",(function(){return u}));let u=(()=>{class t{}return t.\u0275mod=r.Kb({type:t}),t.\u0275inj=r.Jb({factory:function(o){return new(o||t)},imports:[[n.b,a]]}),t})()}}]);