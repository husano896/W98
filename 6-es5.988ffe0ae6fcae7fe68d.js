function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{JUgI:function(t,e,n){"use strict";n.r(e);var o=n("ofXK"),i=n("tyNb"),c=n("fXoL");function r(t,e){if(1&t){var n=c.Ub();c.Tb(0,"div",3),c.Tb(1,"div"),c.yc(2,"Boot sequence interrupted."),c.Sb(),c.Tb(3,"div"),c.Tb(4,"span",4),c.bc("click",(function(){return c.qc(n),c.dc().refresh()})),c.yc(5," Press F2 or click here to refresh. "),c.Sb(),c.Sb(),c.Sb()}}function a(t,e){if(1&t&&(c.Tb(0,"div"),c.yc(1),c.Sb()),2&t){var n=c.dc();c.Db(1),c.Ac(" Click ",10-n.touchTimes," more times to interrupt. ")}}var s,u,l=[{path:"",component:(s=function(){function t(e,n){_classCallCheck(this,t),this.router=e,this.changeDetectionRef=n,this.touchTimes=0,this.stat={angularVersion:c.O.full,navigator:navigator}}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.bootTimeOut=setTimeout((function(){t.Boot()}),5e3)}},{key:"Boot",value:function(){this.router.navigate(["/explorer"],{queryParamsHandling:"preserve"})}},{key:"onInterruptClick",value:function(){}},{key:"refresh",value:function(){this.changeDetectionRef.detach(),location.reload()}},{key:"onClick",value:function(t){this.touchTimes+=1,this.touchTimes>=10&&this.bootTimeOut&&(clearTimeout(this.bootTimeOut),this.bootTimeOut=null)}},{key:"onKeyDown",value:function(t){console.log(t),"Escape"===t.key&&this.bootTimeOut&&(clearTimeout(this.bootTimeOut),this.bootTimeOut=null),"F2"===t.key&&(this.bootTimeOut||(this.changeDetectionRef.detach(),location.reload()))}}]),t}(),s.\u0275fac=function(t){return new(t||s)(c.Nb(i.c),c.Nb(c.h))},s.\u0275cmp=c.Hb({type:s,selectors:[["app-bios"]],hostBindings:function(t,e){1&t&&c.bc("click",(function(t){return e.onClick(t)}),!1,c.oc)("keydown",(function(t){return e.onKeyDown(t)}),!1,c.oc)},decls:13,vars:5,consts:[["fxLayout","column",4,"ngIf"],[4,"ngIf"],[1,"blink"],["fxLayout","column"],[1,"selected",3,"click"]],template:function(t,e){1&t&&(c.Tb(0,"div"),c.Tb(1,"h3"),c.yc(2,"Booting..."),c.Sb(),c.Tb(3,"div"),c.yc(4),c.Sb(),c.Ob(5,"br"),c.Tb(6,"div"),c.yc(7),c.Sb(),c.Ob(8,"br"),c.wc(9,r,6,0,"div",0),c.wc(10,a,2,1,"div",1),c.Tb(11,"span",2),c.yc(12,"_"),c.Sb(),c.Sb()),2&t&&(c.Db(4),c.Ac("Angular Version: ",e.stat.angularVersion,""),c.Db(3),c.Bc("Navigator: ",e.stat.navigator.userAgent," on ",e.stat.navigator.platform,""),c.Db(2),c.jc("ngIf",!e.bootTimeOut),c.Db(1),c.jc("ngIf",e.touchTimes>=5&&e.touchTimes<10))},directives:[o.m],styles:["*[_ngcontent-%COMP%]{font-family:monospace;color:#fff}.selected[_ngcontent-%COMP%]{color:#000;background:#fff}"]}),s)},{path:"**",redirectTo:""}],f=((u=function t(){_classCallCheck(this,t)}).\u0275mod=c.Lb({type:u}),u.\u0275inj=c.Kb({factory:function(t){return new(t||u)},imports:[[i.d.forChild(l)],i.d]}),u);n.d(e,"BIOSModule",(function(){return h}));var b,h=((b=function t(){_classCallCheck(this,t)}).\u0275mod=c.Lb({type:b}),b.\u0275inj=c.Kb({factory:function(t){return new(t||b)},imports:[[o.c,f]]}),b)}}]);