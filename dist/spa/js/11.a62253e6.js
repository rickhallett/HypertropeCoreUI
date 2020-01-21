(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"20a6":function(e,s,a){},"56b4":function(e,s,a){"use strict";a.r(s);var t=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("q-page",{staticClass:"flex "},[a("q-card",{directives:[{name:"show",rawName:"v-show",value:e.showCard,expression:"showCard"}],staticClass:"card q-ma-md",attrs:{flat:"",bordered:""}},[a("q-card-section",[a("div",{staticClass:"text-h6 text-center"},[e._v("Welcome to Hypertrope Core!")]),a("div",{staticClass:"text-h6 text-center text-secondary"},[e._v("Please register")])]),a("q-card-section",{staticClass:"text-center q-my-md"},[a("transition-group",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[a("q-input",{key:"firstname",attrs:{dense:"",placeholder:"First name"},model:{value:e.user.firstname,callback:function(s){e.$set(e.user,"firstname",s)},expression:"user.firstname"}}),a("q-input",{key:"lastname",attrs:{dense:"",placeholder:"Last name"},model:{value:e.user.lastname,callback:function(s){e.$set(e.user,"lastname",s)},expression:"user.lastname"}}),a("q-input",{key:"username",attrs:{dense:"",placeholder:"Username"},model:{value:e.user.username,callback:function(s){e.$set(e.user,"username",s)},expression:"user.username"}}),a("q-input",{key:"password",attrs:{dense:"",placeholder:"Password",type:"password"},model:{value:e.user.password,callback:function(s){e.$set(e.user,"password",s)},expression:"user.password"}}),a("q-input",{key:"email",attrs:{dense:"",placeholder:"Email"},model:{value:e.user.email,callback:function(s){e.$set(e.user,"email",s)},expression:"user.email"}}),a("q-input",{key:"phonenumber",attrs:{dense:"",placeholder:"Phone number"},model:{value:e.user.phonenumber,callback:function(s){e.$set(e.user,"phonenumber",s)},expression:"user.phonenumber"}}),a("q-btn",{key:"register",staticClass:"q-mt-md",attrs:{icon:"fingerprint",color:"blue",size:"18px"},on:{click:e.register}})],1)],1),a("transition",{attrs:{appear:"","enter-active-class":"animated jello","leave-active-class":"animated fadeOut"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.showLogo,expression:"showLogo"}],staticClass:"flex flex-center"},[a("q-btn",{attrs:{dense:"",flat:"",size:"132px",icon:"donut_small",color:"blue"}})],1)])],1),a("q-inner-loading",{attrs:{showing:e.loading}},[a("q-spinner-tail",{attrs:{size:"50px",color:"primary"}})],1)],1)},n=[],r={name:"Register",components:{},data:function(){return{loading:!0,showCard:!1,showLogo:!1,user:{firstname:null,lastname:null,username:null,email:null,phonenumber:null,password:null,roles:["User"]}}},methods:{register:function(){var e=this;this.$axios.post("".concat(this.$domain,"/api/auth/register"),this.user).then((function(s){console.log(s),201===s.status&&(e.$q.notify({message:"Register successful",color:"positive"}),setTimeout((function(){e.$router.push({path:"/app"})}),1e3))})).catch((function(s){if(console.log(s),400===s.response.status)for(var a in s.response.data)s.response.data.hasOwnProperty(a)&&s.response.data[a].forEach((function(s){e.$q.notify({message:s,color:"negative"})}))}))}},computed:{},beforeCreate:function(){var e=this;console.log("Communicating with server endpoint @ ".concat(this.$domain,"/api/quote")),setTimeout((function(){e.loading=!1,e.showCard=!0}),500)},created:function(){}},o=r,i=(a("ac59"),a("2877")),l=a("eebe"),c=a.n(l),u=a("9989"),d=a("f09f"),p=a("a370"),m=a("27f9"),f=a("9c40"),h=a("74f7"),v=a("007d"),w=Object(i["a"])(o,t,n,!1,null,null,null);s["default"]=w.exports;c()(w,"components",{QPage:u["a"],QCard:d["a"],QCardSection:p["a"],QInput:m["a"],QBtn:f["a"],QInnerLoading:h["a"],QSpinnerTail:v["a"]})},ac59:function(e,s,a){"use strict";var t=a("20a6"),n=a.n(t);n.a}}]);