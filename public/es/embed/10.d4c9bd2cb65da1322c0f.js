(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{WckI:function(t,n,e){"use strict";e.r(n);var r=e("CcnG"),o=function(){},u=e("pMnS"),a=(e("ey9i"),e("6blF")),i=function(){function t(t,n){this.router=t,this.store=n}return t.prototype.resolve=function(t,n){var e=this,r=t.paramMap.get("id");return this.store.query("/api/authors",{id:r,limit:1,with:["synapse"]}).map(function(t){if(t.length<=0)return e.router.navigate(["/404"]),null;var n=t[0];return e.router.navigate([n.type,n.synapse.slug]),n}).catch(function(t){return e.router.navigate(["/",t.status]),a.a.of(null)})},t}(),p=e("ZYCi"),s=e("z3Pw"),c=function(){};e.d(n,"AuthorsModuleNgFactory",function(){return d});var d=r["\u0275cmf"](o,[],function(t){return r["\u0275mod"]([r["\u0275mpd"](512,r.ComponentFactoryResolver,r["\u0275CodegenComponentFactoryResolver"],[[8,[u.a]],[3,r.ComponentFactoryResolver],r.NgModuleRef]),r["\u0275mpd"](4608,i,i,[p.m,s.a]),r["\u0275mpd"](1073742336,p.p,p.p,[[2,p.v],[2,p.m]]),r["\u0275mpd"](1073742336,c,c,[]),r["\u0275mpd"](1073742336,o,o,[]),r["\u0275mpd"](1024,p.k,function(){return[[{path:"",children:[{path:":id",resolve:{author:i}}]}]]},[]),r["\u0275mpd"](256,r.LOCALE_ID,"es",[]),r["\u0275mpd"](256,r.TRANSLATIONS_FORMAT,"xlf",[])])})}}]);