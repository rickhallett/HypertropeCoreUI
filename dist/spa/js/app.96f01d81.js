(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{0:function(e,n,t){e.exports=t("2f39")},"2f39":function(e,n,t){"use strict";t.r(n);var r=t("967e"),a=t.n(r),o=(t("a481"),t("96cf"),t("fa84")),c=t.n(o),u=(t("7d6e"),t("e54f"),t("573e"),t("44391"),t("4605"),t("f580"),t("5b2b"),t("8753"),t("2967"),t("7e67"),t("d770"),t("dd82"),t("922c"),t("c32e"),t("a151"),t("8bc7"),t("d67f"),t("880e"),t("1c10"),t("9482"),t("e797"),t("4848"),t("e9fd"),t("195c"),t("64e9"),t("33c5"),t("4f62"),t("0dbc"),t("4953"),t("81db"),t("2e52"),t("2248"),t("7797"),t("e592"),t("70ca"),t("2318"),t("24bd"),t("8f27"),t("3064"),t("c9a2"),t("8767"),t("4a8e"),t("b828"),t("3c1c"),t("21cb"),t("c00e"),t("e4a8"),t("e4d3"),t("f4d9"),t("b794"),t("af24"),t("7c9c"),t("7bb2"),t("64f7"),t("c382"),t("f5d1"),t("3cec"),t("c00ee"),t("d450"),t("ca07"),t("14e3"),t("1dba"),t("674a"),t("de26"),t("6721"),t("25e9"),t("fc83"),t("98e5"),t("605a"),t("ba60"),t("df07"),t("7903"),t("e046"),t("58af"),t("7713"),t("0571"),t("3e27"),t("6837"),t("3fc9"),t("0693"),t("bf41"),t("985d"),t("31cd"),t("2b0e")),i=t("1f91"),s=t("42d2"),p=t("b05d"),l=t("2a19");u["a"].use(p["a"],{config:{brand:{primary:"#595959",secondary:"#ababab",accent:"#9C27B0",dark:"#1d1d1d",positive:"#9ae3ab",negative:"#ba6c75",info:"#9ddeeb",warning:"#f5dd9a"},dark:!0},lang:i["a"],iconSet:s["a"],plugins:{Notify:l["a"]}});var f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},d=[],b={name:"App"},h=b,w=t("2877"),m=Object(w["a"])(h,f,d,!1,null,null,null),v=m.exports,x=t("2f62");u["a"].use(x["a"]);var k=function(){var e=new x["a"].Store({modules:{},strict:!1});return e},y=t("8c4f"),P=[{path:"/",component:function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,"a9c3"))},children:[{path:"",component:function(){return Promise.all([t.e(0),t.e(9)]).then(t.bind(null,"8b24"))}},{path:"/workout/create",component:function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,"f8ee"))}},{path:"/workout/show/raw",component:function(){return Promise.all([t.e(0),t.e(3)]).then(t.bind(null,"56f2"))}},{path:"/workout/show/grouped",component:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,"0a8a"))}},{path:"/workout/show/pb",component:function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,"37a6"))}},{path:"/quote/add",component:function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,"2f47"))}},{path:"/support/contact",component:function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,"c3df"))}}]}];P.push({path:"*",component:function(){return Promise.all([t.e(0),t.e(11)]).then(t.bind(null,"e51e"))}});var g=P;u["a"].prototype.$domain="https://localhost:5001",u["a"].use(y["a"]);var $=function(){var e=new y["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:g,mode:"history",base:"/"});return e},q=function(){return V.apply(this,arguments)};function V(){return V=c()(a.a.mark((function e(){var n,t,r;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof k){e.next=6;break}return e.next=3,k({Vue:u["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=k;case 7:if(n=e.t0,"function"!==typeof $){e.next=14;break}return e.next=11,$({Vue:u["a"],store:n});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=$;case 15:return t=e.t1,n.$router=t,r={el:"#q-app",router:t,store:n,render:function(e){return e(v)}},e.abrupt("return",{app:r,store:n,router:t});case 19:case"end":return e.stop()}}),e)}))),V.apply(this,arguments)}var B=t("bc3a"),C=t.n(B);function J(){return S.apply(this,arguments)}function S(){return S=c()(a.a.mark((function e(){var n,t,r,o,c,i,s,p,l;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:n=e.sent,t=n.app,r=n.store,o=n.router,c=!0,i=function(e){c=!1,window.location.href=e},s=window.location.href.replace(window.location.origin,""),p=[void 0],l=0;case 11:if(!(!0===c&&l<p.length)){e.next=29;break}if("function"===typeof p[l]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,p[l]({app:t,router:o,store:r,Vue:u["a"],ssrContext:null,redirect:i,urlPath:s});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:l++,e.next=11;break;case 29:if(!1!==c){e.next=31;break}return e.abrupt("return");case 31:new u["a"](t);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),S.apply(this,arguments)}u["a"].prototype.$axios=C.a,J()},"31cd":function(e,n,t){}},[[0,2,0]]]);