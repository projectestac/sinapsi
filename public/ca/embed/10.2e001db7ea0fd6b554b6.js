(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{WckI:function(t,n,r){"use strict";r.r(n);var e=r("CcnG"),o=function(){},u=r("pMnS"),a=(r("ey9i"),r("6blF")),i=function(){function t(t,n){this.router=t,this.store=n}return t.prototype.resolve=function(t,n){var r=this,e=t.paramMap.get("id");return this.store.query("/api/authors",{id:e,limit:1,with:["synapse"]}).map(function(t){if(t.length<=0)return r.router.navigate(["/404"]),null;var n=t[0];return r.router.navigate([n.type,n.synapse.slug]),n}).catch(function(t){return r.router.navigate(["/",t.status]),a.a.of(null)})},t}(),p=r("ZYCi"),c=r("z3Pw"),s=function(){};r.d(n,"AuthorsModuleNgFactory",function(){return d});var d=e["\u0275cmf"](o,[],function(t){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[u.a]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,i,i,[p.m,c.a]),e["\u0275mpd"](1073742336,p.p,p.p,[[2,p.v],[2,p.m]]),e["\u0275mpd"](1073742336,s,s,[]),e["\u0275mpd"](1073742336,o,o,[]),e["\u0275mpd"](1024,p.k,function(){return[[{path:"",children:[{path:":id",resolve:{author:i}}]}]]},[]),e["\u0275mpd"](256,e.LOCALE_ID,"ca",[]),e["\u0275mpd"](256,e.TRANSLATIONS_FORMAT,"xlf",[])])})}}]);