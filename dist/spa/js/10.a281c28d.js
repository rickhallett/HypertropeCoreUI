(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"013f":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-page",{staticClass:"flex "},[t("q-card",{directives:[{name:"show",rawName:"v-show",value:e.showCard,expression:"showCard"}],staticClass:"card q-ma-md",attrs:{flat:"",bordered:""}},[t("q-card-section",[t("div",{staticClass:"text-h6 text-center"},[e._v("Welcome to Hypertrope Core!")]),t("div",{staticClass:"text-h6 text-center text-secondary"},[e._v("Please login")])]),t("q-card-section",{staticClass:"text-center q-mt-md"},[t("transition-group",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[t("q-input",{key:"username",attrs:{dense:"",placeholder:"Username"},model:{value:e.user.username,callback:function(a){e.$set(e.user,"username",a)},expression:"user.username"}}),t("q-input",{key:"password",attrs:{dense:"",placeholder:"Password",type:"password"},model:{value:e.user.password,callback:function(a){e.$set(e.user,"password",a)},expression:"user.password"}}),e.serverAvailable?t("q-btn",{key:"icon",staticClass:"q-mt-md",attrs:{icon:"fingerprint",color:"blue",size:"18px"},on:{click:e.login}}):e._e(),e.serverAvailable?e._e():t("q-btn",{key:"icon",staticClass:"q-mt-md",attrs:{icon:"fingerprint",color:"red",size:"18px"},on:{click:e.noLogin}})],1)],1),t("transition",{attrs:{appear:"","enter-active-class":"animated jello","leave-active-class":"animated fadeOut"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.showLogo,expression:"showLogo"}],staticClass:"flex flex-center"},[t("q-btn",{attrs:{dense:"",flat:"",size:"132px",icon:"donut_small",color:"blue"}})],1)])],1),t("q-inner-loading",{attrs:{showing:e.loading}},[t("q-spinner-tail",{attrs:{size:"50px",color:"primary"}})],1)],1)},n=[],o=t("a18c"),i={name:"PageIndex",components:{},data:function(){return{serverAvailable:!1,loading:!0,showCard:!1,showLogo:!1,user:{username:null,password:null}}},methods:{noLogin:function(){this.$q.notify({message:"Server not available",color:"red",classes:"notification"})},login:function(){var e=this;this.$axios.post("".concat(o["a"].$domain,"/api/auth/login"),this.user).then((function(a){if(200===a.status){console.log(a);var t=a.data.token;window.sessionStorage.setItem("jToken",t),e.$router.push({path:"app"}).catch((function(e){return e}))}})).catch((function(a){console.log(a),e.$q.notify({message:"Incorrect username/password",color:"red",classes:"notification"})}))}},computed:{},beforeCreate:function(){var e=this;console.log("Communicating with server endpoint @ ".concat(o["a"].$domain,"/api/quote")),setTimeout((function(){e.loading=!1,e.showCard=!0}),500)},created:function(){var e=this;o["a"].$emit("loggedOut"),this.$axios.post("".concat(o["a"].$domain,"/api/ping")).then((function(a){200===a.status&&(e.serverAvailable=!0)}))}},r=i,c=(t("da41"),t("2877")),l=t("eebe"),d=t.n(l),u=t("9989"),p=t("f09f"),m=t("a370"),f=t("27f9"),v=t("9c40"),h=t("74f7"),g=t("007d"),w=Object(c["a"])(r,s,n,!1,null,null,null);a["default"]=w.exports;d()(w,"components",{QPage:u["a"],QCard:p["a"],QCardSection:m["a"],QInput:f["a"],QBtn:v["a"],QInnerLoading:h["a"],QSpinnerTail:g["a"]})},"7c73":function(e,a,t){},da41:function(e,a,t){"use strict";var s=t("7c73"),n=t.n(s);n.a}}]);