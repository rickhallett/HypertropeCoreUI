(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"0a8a":function(e,s,a){"use strict";a.r(s);var t=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("q-page",{staticClass:"flex "},[a("q-card",{directives:[{name:"show",rawName:"v-show",value:e.showCard,expression:"showCard"}],staticClass:"card q-ma-md",attrs:{flat:"",bordered:""}},[a("q-card-section",[a("div",{staticClass:"text-h6 text-center"},[e._v("Logs By Exercise")])]),a("q-card-section",{staticClass:"text-center"},e._l(e.formattedData,(function(s,t){return a("q-list",{key:"ex"+t},[a("q-item",{staticClass:"row justify-start",staticStyle:{"max-width":"150px"},attrs:{clickable:""},on:{click:function(e){s.Active=!s.Active}}},[a("q-item-section",{attrs:{avatar:""}},[s.Active?a("q-icon",{attrs:{name:"expand_more"}}):a("q-icon",{attrs:{name:"chevron_right"}})],1),a("q-item-section",[e._v(e._s(s.Name))])],1),e._l(s.Sets,(function(t,c){return s.Active?a("q-list",{key:"set"+c},[a("q-item",[a("q-item-section",{staticStyle:{color:"#9ddeeb","font-size":"20px"}},[e._v(e._s(c+1))]),a("q-item-section",{staticStyle:{"font-size":"10px","text-align":"end"}},e._l(Object.keys(t),(function(s,t){return a("q-list",{key:"key"+t},[e._v("\n                                "+e._s(s)+"\n                            ")])})),1),a("q-item-section",{staticStyle:{"font-size":"10px","text-align":"start"}},e._l(Object.values(t),(function(s,t){return a("q-list",{key:"val"+t,staticStyle:{color:"#3aa6e3"}},[e._v("\n                                "+e._s(s)+"\n                            ")])})),1)],1)],1):e._e()})),a("q-separator",{staticClass:"q-mt-xs",attrs:{color:"blue"}})],2)})),1),a("transition",{attrs:{appear:"","enter-active-class":"animated jello","leave-active-class":"animated fadeOut"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.showLogo,expression:"showLogo"}],staticClass:"flex flex-center"},[a("q-btn",{attrs:{dense:"",flat:"",size:"132px",icon:"donut_small",color:"orange"}})],1)])],1),a("q-inner-loading",{attrs:{showing:e.loading}},[a("q-spinner-tail",{attrs:{size:"50px",color:"primary"}})],1)],1)},c=[],n=(a("7f7f"),a("c5f6"),a("5df2"),a("c1df")),r=a.n(n),o={name:"ShowWorkoutsByExercise",data:function(){return{loading:!1,showCard:!0,showLogo:!1,rawData:[],formattedData:[]}},methods:{inspect:function(e){},formatDate:function(e){return r()(e).format("DD-MM-YYYY HH:mm")},formatVolume:function(e){return Math.floor(e)},formatOneRm:function(e){return Number.parseFloat(e).toFixed(2)}},created:function(){var e=this;setTimeout((function(){return e.showLogo=!0}),250),this.$axios.get("https://localhost:5001/api/workout/grouped/exercise").then((function(s){e.rawData=s.data.data.exercises,console.log("raw data:",e.rawData),e.rawData.forEach((function(s){e.formattedData.push({Name:s.name,Active:!1,Sets:s.sets.map((function(s){return{Date:e.formatDate(s.created),Exercise:s.exercise,Weight:s.weight,Reps:s.reps,Volume:e.formatVolume(s.volume),"1RM":e.formatOneRm(s.oneRm)}}))})})),console.log(e.formattedData)}))}},i=o,f=(a("572d"),a("2877")),d=a("eebe"),j=a.n(d),l=a("9989"),b=a("f09f"),m=a("a370"),u=a("1c1c"),h=a("66e5"),p=a("4074"),v=a("0016"),g=a("eb85"),k=a("9c40"),w=a("74f7"),y=a("007d"),x=Object(f["a"])(i,t,c,!1,null,null,null);s["default"]=x.exports;j()(x,"components",{QPage:l["a"],QCard:b["a"],QCardSection:m["a"],QList:u["a"],QItem:h["a"],QItemSection:p["a"],QIcon:v["a"],QSeparator:g["a"],QBtn:k["a"],QInnerLoading:w["a"],QSpinnerTail:y["a"]})},"26f3":function(e,s,a){},4678:function(e,s,a){var t={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"73332","./en-il.js":"73332","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df48","./fa.js":"8df48","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b46","./gd.js":"f6b46","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function c(e){var s=n(e);return a(s)}function n(e){if(!a.o(t,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t[e]}c.keys=function(){return Object.keys(t)},c.resolve=n,e.exports=c,c.id="4678"},"572d":function(e,s,a){"use strict";var t=a("26f3"),c=a.n(t);c.a}}]);