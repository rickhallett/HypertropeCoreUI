(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"20a6":function(e,t,a){},"56b4":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"flex "},[a("q-card",{directives:[{name:"show",rawName:"v-show",value:e.showCard,expression:"showCard"}],staticClass:"card q-ma-md",attrs:{flat:"",bordered:""}},[a("q-card-section",[a("div",{staticClass:"text-h6 text-center"},[e._v("Welcome to Hypertrope Core!")]),a("div",{staticClass:"text-h6 text-center text-secondary"},[e._v("Please register")])]),a("q-card-section",{staticClass:"text-center q-my-md"},[a("transition-group",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[a("q-input",{key:"firstname",attrs:{dense:"",placeholder:"First name"},model:{value:e.user.firstname,callback:function(t){e.$set(e.user,"firstname",t)},expression:"user.firstname"}}),a("q-input",{key:"lastname",attrs:{dense:"",placeholder:"Last name"},model:{value:e.user.lastname,callback:function(t){e.$set(e.user,"lastname",t)},expression:"user.lastname"}}),a("q-input",{key:"username",attrs:{dense:"",placeholder:"Username"},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}}),a("q-input",{key:"password",attrs:{dense:"",placeholder:"Password",type:"password"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),a("q-input",{key:"email",attrs:{dense:"",placeholder:"Email"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),a("q-input",{key:"phonenumber",attrs:{dense:"",placeholder:"Phone number"},model:{value:e.user.phonenumber,callback:function(t){e.$set(e.user,"phonenumber",t)},expression:"user.phonenumber"}}),e.buttonReady?a("q-btn",{key:"register",staticClass:"q-mt-md",attrs:{icon:"fingerprint",color:"blue",size:"18px"},on:{click:e.register}}):e._e(),e.buttonReady?e._e():a("q-btn",{key:"register",staticClass:"q-mt-md",attrs:{icon:"fingerprint",color:"orange",size:"18px"},on:{click:e.register}})],1)],1),a("transition",{attrs:{appear:"","enter-active-class":"animated jello","leave-active-class":"animated fadeOut"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.showLogo,expression:"showLogo"}],staticClass:"flex flex-center"},[a("q-btn",{attrs:{dense:"",flat:"",size:"132px",icon:"donut_small",color:"blue"}})],1)])],1),a("q-inner-loading",{attrs:{showing:e.loading}},[a("q-spinner-tail",{attrs:{size:"50px",color:"primary"}})],1)],1)},n=[],r=a("a18c"),o={name:"Register",components:{},data:function(){return{loading:!0,showCard:!1,showLogo:!1,buttonReady:!0,user:{firstname:null,lastname:null,username:null,email:null,phonenumber:null,password:null,roles:["User"]}}},methods:{register:function(){var e=this;this.buttonReady&&(this.buttonReady=!1,this.$axios.post("".concat(r["a"].$domain,"/api/auth/register"),this.user).then((function(t){console.log(t),setTimeout((function(){return e.buttonReady=!0}),3e3),201===t.status&&(e.$q.notify({message:"Register successful",color:"green",classes:"notification"}),setTimeout((function(){e.$router.push({path:"/app"})}),1e3))})).catch((function(t){if(console.log(t),setTimeout((function(){return e.buttonReady=!0}),3e3),400===t.response.status)for(var a in t.response.data)t.response.data.hasOwnProperty(a)&&t.response.data[a].forEach((function(t){e.$q.notify({message:t,color:"red",classes:"notification"})}))})))}},computed:{},beforeCreate:function(){var e=this;console.log("Communicating with server endpoint @ ".concat(r["a"].$domain,"/api/quote")),setTimeout((function(){e.loading=!1,e.showCard=!0}),500)},created:function(){}},i=o,l=(a("ac59"),a("2877")),c=a("eebe"),u=a.n(c),d=a("9989"),p=a("f09f"),m=a("a370"),f=a("27f9"),h=a("9c40"),b=a("74f7"),g=a("007d"),v=Object(l["a"])(i,s,n,!1,null,null,null);t["default"]=v.exports;u()(v,"components",{QPage:d["a"],QCard:p["a"],QCardSection:m["a"],QInput:f["a"],QBtn:h["a"],QInnerLoading:b["a"],QSpinnerTail:g["a"]})},ac59:function(e,t,a){"use strict";var s=a("20a6"),n=a.n(s);n.a}}]);