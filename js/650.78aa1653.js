"use strict";(self["webpackChunksupabase_app"]=self["webpackChunksupabase_app"]||[]).push([[650],{5650:function(a,s,r){r.r(s),r.d(s,{default:function(){return l}});var e=function(){var a=this,s=a._self._c;return s("div",{staticClass:"container mx-auto p-4"},[s("BackHome"),s("form",{staticClass:"card bg-base-100 shadow-xl p-6",on:{submit:function(s){return s.preventDefault(),a.changePassword.apply(null,arguments)}}},[s("div",{staticClass:"form-control mb-4"},[s("label",{staticClass:"label"},[a._v("Current Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.currentPassword,expression:"formData.currentPassword"}],staticClass:"input input-bordered",attrs:{type:"password",placeholder:"Enter your current password",required:""},domProps:{value:a.formData.currentPassword},on:{input:function(s){s.target.composing||a.$set(a.formData,"currentPassword",s.target.value)}}})]),s("div",{staticClass:"form-control mb-4"},[s("label",{staticClass:"label"},[a._v("New Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.newPassword,expression:"formData.newPassword"}],staticClass:"input input-bordered",attrs:{type:"password",placeholder:"Enter a new password",required:""},domProps:{value:a.formData.newPassword},on:{input:function(s){s.target.composing||a.$set(a.formData,"newPassword",s.target.value)}}})]),s("div",{staticClass:"form-control mb-4"},[s("label",{staticClass:"label"},[a._v("Confirm New Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:a.formData.confirmNewPassword,expression:"formData.confirmNewPassword"}],staticClass:"input input-bordered",attrs:{type:"password",placeholder:"Confirm your new password",required:""},domProps:{value:a.formData.confirmNewPassword},on:{input:function(s){s.target.composing||a.$set(a.formData,"confirmNewPassword",s.target.value)}}})]),s("button",{staticClass:"btn btn-primary mt-4",attrs:{type:"submit"}},[a._v("Change Password")])])],1)},t=[],o=(r(4114),{name:"Password",data(){return{formData:{currentPassword:"",newPassword:"",confirmNewPassword:""}}},components:{},methods:{async changePassword(){if(this.formData.newPassword!==this.formData.confirmNewPassword)return void alert("New passwords do not match!");const{data:a,error:s}=await supabase.from("users").update({password:this.formData.newPassword}).eq("id","your-user-id");s?(console.error("Error changing password:",s),alert("Error changing password. Please try again.")):(alert("Password changed successfully!"),this.$router.push({name:"Blog"}))}}}),n=o,d=r(1656),i=(0,d.A)(n,e,t,!1,null,null,null),l=i.exports}}]);
//# sourceMappingURL=650.78aa1653.js.map