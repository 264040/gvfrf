"use strict";(self["webpackChunksupabase_app"]=self["webpackChunksupabase_app"]||[]).push([[771],{8771:function(t,e,s){s.r(e),s.d(e,{default:function(){return r}});var a=function(){var t=this,e=t._self._c;return e("div",[e("BackHome"),e("div",{staticClass:"container mx-auto p-4"},[e("header",{staticClass:"text-center my-6"},[e("h1",{staticClass:"text-4xl font-bold mb-2"},[t._v(t._s(t.article.title))]),e("p",{staticClass:"text-gray-500"},[t._v(" "+t._s(this.$route.params.Byname)+" - "+t._s(t.article.created_at)+" ")])]),e("article",{staticClass:"prose mx-auto mb-8"},[e("p",[t._v(t._s(t.article.content))])]),e("div",{staticClass:"flex justify-center items-center mb-4"},[e("button",{staticClass:"btn btn-primary",on:{click:t.likeArticle}},[t._v(" 👍 点赞 "+t._s(t.article.likes)+" ")])]),e("div",{staticClass:"card bg-base-100 shadow-xl p-6"},[e("h2",{staticClass:"text-2xl font-bold mb-4"},[t._v("发表评论")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newComment,expression:"newComment"}],staticClass:"textarea textarea-accent w-full mb-4",attrs:{placeholder:"请输入评论内容..."},domProps:{value:t.newComment},on:{input:function(e){e.target.composing||(t.newComment=e.target.value)}}}),e("button",{staticClass:"btn btn-secondary",on:{click:t.submitComment}},[t._v(" 提交评论 ")]),e("div",{staticClass:"mt-6"},[e("h3",{staticClass:"text-xl font-bold mb-2"},[t._v("评论")]),e("ul",t._l(t.comments,(function(s,a){return e("li",{key:a,staticClass:"mb-2"},[e("div",{staticClass:"card bg-gray-100 shadow-md p-4"},[t._v(" "+t._s(s)+" ")])])})),0)])])])],1)},n=[],i=(s(4114),s(1789)),c={name:"ArticleView",components:{BackHome:i.A},data(){return{article:{},comments:[],newComment:""}},computed:{},methods:{likeArticle(){this.likes++},submitComment(){""!==this.newComment.trim()?(this.comments.push(this.newComment),this.newComment=""):alert("评论内容不能为空！")}},async created(){console.log(this.$route.params,"artOnedata一个文章"),this.article=this.$store.state.artview}},l=c,m=s(1656),o=(0,m.A)(l,a,n,!1,null,"7ef6d4ca",null),r=o.exports}}]);
//# sourceMappingURL=771.25f93747.js.map