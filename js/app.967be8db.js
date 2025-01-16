(function(){"use strict";var t={1789:function(t,e,n){n.d(e,{A:function(){return u}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container mx-auto acer-p-4 p-4"},[e("div",{staticClass:"navbar acer-navbar bg-base-100"},[e("div",{staticClass:"navbar-start"},[e("div",{staticClass:"dropdown"},[e("div",{staticClass:"btn btn-ghost btn-circle",attrs:{tabindex:"0",role:"button"},on:{click:t.goHome}},[e("svg",{staticClass:"h-6 w-6 mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"}})])])])]),e("div",{staticClass:"navbar-center"},[e("p",{staticClass:"btn btn-ghost text-xl"},[t._v(t._s(t.backtext))])]),t._m(0)])])},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"navbar-end"},[e("button",{staticClass:"btn btn-ghost btn-circle"},[e("div",{staticClass:"indicator"})])])}],a=(n(4114),{name:"BackHome",data(){return{}},methods:{goHome(){this.$router.push({name:"Individual"})}},computed:{backtext(){return this.$store.state.backtext}}}),i=a,s=n(1656),c=(0,s.A)(i,r,o,!1,null,"0f141237",null),u=c.exports},6248:function(t,e,n){var r=n(6848),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app","data-theme":t.theme}},[e("Acer")],1)},a=[],i=function(){var t=this,e=t._self._c;return e("div",[e("router-view"),this.$route.meta.activeBtn?e("NavigaTionbar"):t._e()],1)},s=[],c={name:"Acer"},u=c,l=n(1656),d=(0,l.A)(u,i,s,!1,null,null,null),f=d.exports,p={name:"App",components:{Acer:f},computed:{theme(){return this.$store.state.theme}}},h=p,v=(0,l.A)(h,o,a,!1,null,null,null),m=v.exports,b=n(6178),g=n(3518),w=n(8861),y=n(306);r.Ay.use(g.Ay);var k=new g.Ay.Store({state:{theme:"light",backtext:"",user:{},posts:[],artview:{},aceryb:{},symbolsItem:{}},mutations:{setTheme(t,e){t.theme=e,document.getElementById("app").setAttribute("data-theme",e)},setbacktext(t,e){t.backtext=e},setUser(t,e){t.user=e},setPosts(t,e){t.posts=e},setView(t,e){t.artview=e},setAceryb(t,e){t.aceryb=e},setSymbolsItem(t,e){t.symbolsItem=e}},actions:{async fetchIpaData({commit:t}){try{if(!symbolsItem){const e=await y.A.get("/api");console.log(e.data,"response.data"),t("setAceryb",e.data),t("setSymbolsItem",e.data.vowels.symbols)}}catch(e){}}},getters:{aceryb:t=>t.aceryb,symbolsItem:t=>t.symbolsItem},plugins:[(0,w.A)({storage:window.localStorage,paths:["theme","backtext","user","posts","artview","aceryb","symbolsItem"]})]});r.Ay.use(b.Ay);const A=new b.Ay({mode:"history",routes:[{path:"/",name:"Home",component:()=>n.e(604).then(n.bind(n,4604)),meta:{activeBtn:1}},{path:"/phonetic",name:"Phonetic",component:()=>n.e(616).then(n.bind(n,7616)),meta:{activeBtn:2},beforeEnter:(t,e,n)=>{k.dispatch("fetchIpaData").then((t=>{n()})).catch((t=>{console.error("请求数据失败:",t),n(!1)}))}},{path:"/individual",name:"Individual",component:()=>Promise.all([n.e(123),n.e(483)]).then(n.bind(n,1483)),meta:{activeBtn:4}},{path:"/edit-profile",name:"EditProfile",component:()=>Promise.all([n.e(123),n.e(41)]).then(n.bind(n,4041))},{path:"/update-Password",name:"UpdatePassword",component:()=>n.e(650).then(n.bind(n,5650))},{path:"/artic-leView",name:"ArticleView",component:()=>n.e(771).then(n.bind(n,8771))},{path:"/Add-article",name:"AddArticle",component:()=>Promise.all([n.e(123),n.e(988)]).then(n.bind(n,4988))}],scrollBehavior(t,e,n){return n||{x:0,y:0}}});A.beforeEach(((t,e,n)=>{t.meta&&t.meta.activeBtn,n()}));var x=A,C=n(1789),B=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"btm-nav"},[e("button",{class:["text-success",{active:1===t.activeBtn}],on:{click:function(e){return e.stopPropagation(),t.setActiveBtn(1,"Home")}}},[e("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"}})])]),e("button",{class:["text-success",{active:2===t.activeBtn}],on:{click:function(e){return e.stopPropagation(),t.setActiveBtn(2,"Phonetic")}}},[e("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}})])]),e("button",{class:["text-success",{active:3===t.activeBtn}],on:{click:function(e){return e.stopPropagation(),t.setActiveBtn(3,"Services")}}},[e("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}})])]),e("button",{class:["text-success",{active:4===t.activeBtn}],on:{click:function(e){return e.stopPropagation(),t.setActiveBtn(4,"Individual")}}},[e("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"}})])])])])},_=[],j=(n(4114),{name:"NavigaTionbar",computed:{activeBtn(){return this.$route.meta.activeBtn||1}},methods:{setActiveBtn(t,e){this.$router.push({name:e})}}}),O=j,P=(0,l.A)(O,B,_,!1,null,"71b6a9f6",null),E=P.exports;r.Ay.component("BackHome",C.A),r.Ay.component("NavigaTionbar",E),r.Ay.config.productionTip=!1,new r.Ay({router:x,store:k,render:t=>t(m)}).$mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var i=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],a=t[l][2];for(var s=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(s=!1,a<i&&(i=a));if(s){t.splice(l--,1);var u=o();void 0!==u&&(e=u)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[r,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){var t,e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var i={};t=t||[null,e({}),e([]),e(e)];for(var s=2&o&&r;"object"==typeof s&&!~t.indexOf(s);s=e(s))Object.getOwnPropertyNames(s).forEach((function(t){i[t]=function(){return r[t]}}));return i["default"]=function(){return r},n.d(a,i),a}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{41:"ad45045d",123:"63403f01",483:"16555230",604:"0e4df366",616:"f9b40f8a",634:"7a13d331",650:"78aa1653",771:"25f93747",988:"fa7bc138"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{483:"d9fe0dfa",604:"cca4023e",616:"39208d13",771:"2a2d5674",988:"e27a8216"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="supabase-app:";n.l=function(r,o,a,i){if(t[r])t[r].push(o);else{var s,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+a){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+a),s.src=r),t[r]=[o];var f=function(e,n){s.onerror=s.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,r,o,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",n.nc&&(i.nonce=n.nc);var s=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var r=n&&n.type,s=n&&n.target&&n.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+": "+s+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=s,i.parentNode&&i.parentNode.removeChild(i),a(c)}};return i.onerror=i.onload=s,i.href=e,r?r.parentNode.insertBefore(i,r.nextSibling):document.head.appendChild(i),i},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===t||a===e))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===t||a===e)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),s=n.p+i;if(e(i,s))return o();t(r,s,null,o,a)}))},o={524:0};n.f.miniCss=function(t,e){var n={483:1,604:1,616:1,771:1,988:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}}(),function(){var t={524:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(e),s=new Error,c=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};n.l(i,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],s=r[1],c=r[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var l=c(n)}for(e&&e(r);u<i.length;u++)a=i[u],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},r=self["webpackChunksupabase_app"]=self["webpackChunksupabase_app"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(6248)}));r=n.O(r)})();
//# sourceMappingURL=app.967be8db.js.map