(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"6cba":function(a,t,e){},ad94:function(a,t,e){"use strict";var n=e("6cba"),o=e.n(n);o.a},c3df:function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("q-page",{staticClass:"flex "},[e("q-card",{directives:[{name:"show",rawName:"v-show",value:a.showCard,expression:"showCard"}],staticClass:"card q-ma-md",attrs:{flat:"",bordered:""}},[e("q-card-section",[e("div",{staticClass:"text-h6 text-center"},[a._v("Contact")])]),e("q-card-section",{staticClass:"text-center text-secondary"},[a._v("\n            Coming Soon...\n        ")]),e("transition",{attrs:{appear:"","enter-active-class":"animated jello","leave-active-class":"animated fadeOut"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:a.showLogo,expression:"showLogo"}],staticClass:"flex flex-center"},[e("q-btn",{attrs:{dense:"",flat:"",size:"132px",icon:"donut_small",color:"green"}})],1)])],1),e("q-inner-loading",{attrs:{showing:a.loading}},[e("q-spinner-tail",{attrs:{size:"50px",color:"primary"}})],1)],1)},o=[],s={name:"Contact",data:function(){return{loading:!1,showCard:!0,showLogo:!1,rawData:null}},created:function(){var a=this;setTimeout((function(){return a.showLogo=!0}),250),this.$axios.get("https://localhost:5001/api/workout").then((function(t){console.log("response:",t),a.rawData=t.data.data,console.log(a.rawData)}))}},r=s,i=(e("ad94"),e("2877")),c=e("eebe"),l=e.n(c),d=e("9989"),u=e("f09f"),w=e("a370"),f=e("9c40"),h=e("74f7"),p=e("007d"),v=Object(i["a"])(r,n,o,!1,null,null,null);t["default"]=v.exports;l()(v,"components",{QPage:d["a"],QCard:u["a"],QCardSection:w["a"],QBtn:f["a"],QInnerLoading:h["a"],QSpinnerTail:p["a"]})}}]);