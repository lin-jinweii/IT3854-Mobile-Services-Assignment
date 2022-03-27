"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3119,2731,9810],{1495:(c,u,s)=>{s.r(u),s.d(u,{LoanExtensionFormPageModule:()=>b});var m=s(9808),a=s(4182),e=s(9537),l=s(501),d=s(8242),o=s(2096),g=s(406);function f(n,r){1&n&&(o.TgZ(0,"ion-item")(1,"ion-label",7),o._uU(2," Days must be positive "),o.qZA()())}function h(n,r){1&n&&(o.TgZ(0,"ion-label",7),o._uU(1," Reason is required "),o.qZA())}const x=[{path:"",component:(()=>{class n{constructor(t,i,p,v){this.route=t,this.loanService=i,this.router=p,this.toastController=v,this.submitted=!1,this.loanid=this.route.snapshot.params.id;const L=new Date(Date.now());this.loan=new d.Z("","",L,0,"",""),this.loanService.getLoanById(this.loanid).subscribe(Z=>{this.loan=Z}),this.loanextensionForm=new a.cw({days:new a.NI(0,[n.positiveNumber]),reason:new a.NI("",[a.kI.required])})}static positiveNumber(t){return t.value<=0?{positiveNumber:!0}:null}ngOnInit(){}extendLoan(){if(this.submitted=!0,this.loanextensionForm.valid){const t=new d.Z(this.loan.username,"pending-extension",this.loan.duedate,this.loanextensionForm.value.days,this.loanextensionForm.value.reason,this.loanid);this.loanService.extendApprovedLoans(t),this.router.navigate(["/tabs/loans"])}}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(l.gz),o.Y36(g.B),o.Y36(l.F0),o.Y36(e.yF))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-loan-extension-form"]],decls:20,vars:3,consts:[["slot","start"],[3,"formGroup"],["type","number","formControlName","days"],[4,"ngIf"],["formControlName","reason"],["color","danger",4,"ngIf"],["expand","block","color","secondary",3,"click"],["color","danger"]],template:function(t,i){1&t&&(o.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),o._uU(3,"Loan Extension Form"),o.qZA(),o.TgZ(4,"ion-buttons",0),o._UZ(5,"ion-back-button"),o.qZA()()(),o.TgZ(6,"ion-content")(7,"form",1)(8,"ion-item")(9,"ion-label"),o._uU(10,"No. of Days"),o.qZA(),o._UZ(11,"ion-input",2),o.YNc(12,f,3,0,"ion-item",3),o.qZA(),o.TgZ(13,"ion-item")(14,"ion-label"),o._uU(15,"Reason"),o.qZA(),o._UZ(16,"ion-input",4),o.YNc(17,h,2,0,"ion-label",5),o.qZA(),o.TgZ(18,"ion-button",6),o.NdJ("click",function(){return i.extendLoan()}),o._uU(19,"Request"),o.qZA()()()),2&t&&(o.xp6(7),o.Q6J("formGroup",i.loanextensionForm),o.xp6(5),o.Q6J("ngIf",i.loanextensionForm.controls.days.errors&&i.submitted),o.xp6(5),o.Q6J("ngIf",i.loanextensionForm.controls.reason.errors&&i.submitted))},directives:[e.Gu,e.sr,e.wd,e.Sm,e.oU,e.cs,e.W2,a._Y,a.JL,a.sg,e.Ie,e.Q$,e.pK,e.as,a.JJ,a.u,m.O5,e.j9,e.YG],styles:[""]}),n})()}];let F=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[l.Bz.forChild(x)],l.Bz]}),n})(),b=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[m.ez,a.u5,a.UX,e.Pc,F]]}),n})()},2173:(c,u,s)=>{s.d(u,{c:()=>m});class m{constructor(e,l){this.id=e,this.quantity=l}}},2731:(c,u,s)=>{s(9719)}}]);