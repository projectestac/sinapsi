!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.moment=t()}(this,function(){"use strict";var e,i;function c(){return e.apply(null,arguments)}function o(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function u(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function l(e){return void 0===e}function d(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function h(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function f(e,t){var n,s=[];for(n=0;n<e.length;++n)s.push(t(e[n],n));return s}function m(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function _(e,t){for(var n in t)m(t,n)&&(e[n]=t[n]);return m(t,"toString")&&(e.toString=t.toString),m(t,"valueOf")&&(e.valueOf=t.valueOf),e}function y(e,t,n,s){return Ot(e,t,n,s,!0).utc()}function g(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function p(e){if(null==e._isValid){var t=g(e),n=i.call(t.parsedDateParts,function(e){return null!=e}),s=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(s=s&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return s;e._isValid=s}return e._isValid}function v(e){var t=y(NaN);return null!=e?_(g(t),e):g(t).userInvalidated=!0,t}i=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,s=0;s<n;s++)if(s in t&&e.call(this,t[s],s,t))return!0;return!1};var r=c.momentProperties=[];function w(e,t){var n,s,i;if(l(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),l(t._i)||(e._i=t._i),l(t._f)||(e._f=t._f),l(t._l)||(e._l=t._l),l(t._strict)||(e._strict=t._strict),l(t._tzm)||(e._tzm=t._tzm),l(t._isUTC)||(e._isUTC=t._isUTC),l(t._offset)||(e._offset=t._offset),l(t._pf)||(e._pf=g(t)),l(t._locale)||(e._locale=t._locale),0<r.length)for(n=0;n<r.length;n++)l(i=t[s=r[n]])||(e[s]=i);return e}var t=!1;function M(e){w(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===t&&(t=!0,c.updateOffset(this),t=!1)}function S(e){return e instanceof M||null!=e&&null!=e._isAMomentObject}function D(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function k(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=D(t)),n}function a(e,t,n){var s,i=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),a=0;for(s=0;s<i;s++)(n&&e[s]!==t[s]||!n&&k(e[s])!==k(t[s]))&&a++;return a+r}function Y(e){!1===c.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function n(i,r){var a=!0;return _(function(){if(null!=c.deprecationHandler&&c.deprecationHandler(null,i),a){for(var e,t=[],n=0;n<arguments.length;n++){if(e="","object"==typeof arguments[n]){for(var s in e+="\n["+n+"] ",arguments[0])e+=s+": "+arguments[0][s]+", ";e=e.slice(0,-2)}else e=arguments[n];t.push(e)}Y(i+"\nArguments: "+Array.prototype.slice.call(t).join("")+"\n"+(new Error).stack),a=!1}return r.apply(this,arguments)},r)}var s,O={};function T(e,t){null!=c.deprecationHandler&&c.deprecationHandler(e,t),O[e]||(Y(t),O[e]=!0)}function x(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function b(e,t){var n,s=_({},e);for(n in t)m(t,n)&&(u(e[n])&&u(t[n])?(s[n]={},_(s[n],e[n]),_(s[n],t[n])):null!=t[n]?s[n]=t[n]:delete s[n]);for(n in e)m(e,n)&&!m(t,n)&&u(e[n])&&(s[n]=_({},s[n]));return s}function P(e){null!=e&&this.set(e)}c.suppressDeprecationWarnings=!1,c.deprecationHandler=null,s=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)m(e,t)&&n.push(t);return n};var W={};function H(e,t){var n=e.toLowerCase();W[n]=W[n+"s"]=W[t]=e}function R(e){return"string"==typeof e?W[e]||W[e.toLowerCase()]:void 0}function C(e){var t,n,s={};for(n in e)m(e,n)&&(t=R(n))&&(s[t]=e[n]);return s}var F={};function L(e,t){F[e]=t}function U(e,t,n){var s=""+Math.abs(e),i=t-s.length;return(0<=e?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+s}var N=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,G=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,V={},E={};function I(e,t,n,s){var i=s;"string"==typeof s&&(i=function(){return this[s]()}),e&&(E[e]=i),t&&(E[t[0]]=function(){return U(i.apply(this,arguments),t[1],t[2])}),n&&(E[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function A(e,t){return e.isValid()?(t=j(t,e.localeData()),V[t]=V[t]||function(s){var e,i,t,r=s.match(N);for(e=0,i=r.length;e<i;e++)E[r[e]]?r[e]=E[r[e]]:r[e]=(t=r[e]).match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"");return function(e){var t,n="";for(t=0;t<i;t++)n+=x(r[t])?r[t].call(e,s):r[t];return n}}(t),V[t](e)):e.localeData().invalidDate()}function j(e,t){var n=5;function s(e){return t.longDateFormat(e)||e}for(G.lastIndex=0;0<=n&&G.test(e);)e=e.replace(G,s),G.lastIndex=0,n-=1;return e}var Z=/\d/,z=/\d\d/,$=/\d{3}/,q=/\d{4}/,J=/[+-]?\d{6}/,B=/\d\d?/,Q=/\d\d\d\d?/,X=/\d\d\d\d\d\d?/,K=/\d{1,3}/,ee=/\d{1,4}/,te=/[+-]?\d{1,6}/,ne=/\d+/,se=/[+-]?\d+/,ie=/Z|[+-]\d\d:?\d\d/gi,re=/Z|[+-]\d\d(?::?\d\d)?/gi,ae=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,oe={};function ue(e,n,s){oe[e]=x(n)?n:function(e,t){return e&&s?s:n}}function le(e,t){return m(oe,e)?oe[e](t._strict,t._locale):new RegExp(de(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,i){return t||n||s||i})))}function de(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var he={};function ce(e,n){var t,s=n;for("string"==typeof e&&(e=[e]),d(n)&&(s=function(e,t){t[n]=k(e)}),t=0;t<e.length;t++)he[e[t]]=s}function fe(e,i){ce(e,function(e,t,n,s){n._w=n._w||{},i(e,n._w,n,s)})}var me=0,_e=1,ye=2,ge=3,pe=4,ve=5,we=6,Me=7,Se=8;function De(e){return ke(e)?366:365}function ke(e){return e%4==0&&e%100!=0||e%400==0}I("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e}),I(0,["YY",2],0,function(){return this.year()%100}),I(0,["YYYY",4],0,"year"),I(0,["YYYYY",5],0,"year"),I(0,["YYYYYY",6,!0],0,"year"),H("year","y"),L("year",1),ue("Y",se),ue("YY",B,z),ue("YYYY",ee,q),ue("YYYYY",te,J),ue("YYYYYY",te,J),ce(["YYYYY","YYYYYY"],me),ce("YYYY",function(e,t){t[me]=2===e.length?c.parseTwoDigitYear(e):k(e)}),ce("YY",function(e,t){t[me]=c.parseTwoDigitYear(e)}),ce("Y",function(e,t){t[me]=parseInt(e,10)}),c.parseTwoDigitYear=function(e){return k(e)+(68<k(e)?1900:2e3)};var Ye,Oe=Te("FullYear",!0);function Te(t,n){return function(e){return null!=e?(be(this,t,e),c.updateOffset(this,n),this):xe(this,t)}}function xe(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function be(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&ke(e.year())&&1===e.month()&&29===e.date()?e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Pe(n,e.month())):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function Pe(e,t){if(isNaN(e)||isNaN(t))return NaN;var n,s=(t%(n=12)+n)%n;return e+=(t-s)/12,1===s?ke(e)?29:28:31-s%7%2}Ye=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},I("M",["MM",2],"Mo",function(){return this.month()+1}),I("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),I("MMMM",0,0,function(e){return this.localeData().months(this,e)}),H("month","M"),L("month",8),ue("M",B),ue("MM",B,z),ue("MMM",function(e,t){return t.monthsShortRegex(e)}),ue("MMMM",function(e,t){return t.monthsRegex(e)}),ce(["M","MM"],function(e,t){t[_e]=k(e)-1}),ce(["MMM","MMMM"],function(e,t,n,s){var i=n._locale.monthsParse(e,s,n._strict);null!=i?t[_e]=i:g(n).invalidMonth=e});var We=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,He="January_February_March_April_May_June_July_August_September_October_November_December".split("_");var Re="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function Ce(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=k(t);else if(!d(t=e.localeData().monthsParse(t)))return e;return n=Math.min(e.date(),Pe(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function Fe(e){return null!=e?(Ce(this,e),c.updateOffset(this,!0),this):xe(this,"Month")}var Le=ae;var Ue=ae;function Ne(){function e(e,t){return t.length-e.length}var t,n,s=[],i=[],r=[];for(t=0;t<12;t++)n=y([2e3,t]),s.push(this.monthsShort(n,"")),i.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""));for(s.sort(e),i.sort(e),r.sort(e),t=0;t<12;t++)s[t]=de(s[t]),i[t]=de(i[t]);for(t=0;t<24;t++)r[t]=de(r[t]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+s.join("|")+")","i")}function Ge(e){var t=new Date(Date.UTC.apply(null,arguments));return e<100&&0<=e&&isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e),t}function Ve(e,t,n){var s=7+t-n;return-((7+Ge(e,0,s).getUTCDay()-t)%7)+s-1}function Ee(e,t,n,s,i){var r,a,o=1+7*(t-1)+(7+n-s)%7+Ve(e,s,i);return a=o<=0?De(r=e-1)+o:o>De(e)?(r=e+1,o-De(e)):(r=e,o),{year:r,dayOfYear:a}}function Ie(e,t,n){var s,i,r=Ve(e.year(),t,n),a=Math.floor((e.dayOfYear()-r-1)/7)+1;return a<1?s=a+Ae(i=e.year()-1,t,n):a>Ae(e.year(),t,n)?(s=a-Ae(e.year(),t,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function Ae(e,t,n){var s=Ve(e,t,n),i=Ve(e+1,t,n);return(De(e)-s+i)/7}I("w",["ww",2],"wo","week"),I("W",["WW",2],"Wo","isoWeek"),H("week","w"),H("isoWeek","W"),L("week",5),L("isoWeek",5),ue("w",B),ue("ww",B,z),ue("W",B),ue("WW",B,z),fe(["w","ww","W","WW"],function(e,t,n,s){t[s.substr(0,1)]=k(e)});I("d",0,"do","day"),I("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),I("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),I("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),I("e",0,0,"weekday"),I("E",0,0,"isoWeekday"),H("day","d"),H("weekday","e"),H("isoWeekday","E"),L("day",11),L("weekday",11),L("isoWeekday",11),ue("d",B),ue("e",B),ue("E",B),ue("dd",function(e,t){return t.weekdaysMinRegex(e)}),ue("ddd",function(e,t){return t.weekdaysShortRegex(e)}),ue("dddd",function(e,t){return t.weekdaysRegex(e)}),fe(["dd","ddd","dddd"],function(e,t,n,s){var i=n._locale.weekdaysParse(e,s,n._strict);null!=i?t.d=i:g(n).invalidWeekday=e}),fe(["d","e","E"],function(e,t,n,s){t[s]=k(e)});var je="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");var Ze="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");var ze="Su_Mo_Tu_We_Th_Fr_Sa".split("_");var $e=ae;var qe=ae;var Je=ae;function Be(){function e(e,t){return t.length-e.length}var t,n,s,i,r,a=[],o=[],u=[],l=[];for(t=0;t<7;t++)n=y([2e3,1]).day(t),s=this.weekdaysMin(n,""),i=this.weekdaysShort(n,""),r=this.weekdays(n,""),a.push(s),o.push(i),u.push(r),l.push(s),l.push(i),l.push(r);for(a.sort(e),o.sort(e),u.sort(e),l.sort(e),t=0;t<7;t++)o[t]=de(o[t]),u[t]=de(u[t]),l[t]=de(l[t]);this._weekdaysRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+a.join("|")+")","i")}function Qe(){return this.hours()%12||12}function Xe(e,t){I(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function Ke(e,t){return t._meridiemParse}I("H",["HH",2],0,"hour"),I("h",["hh",2],0,Qe),I("k",["kk",2],0,function(){return this.hours()||24}),I("hmm",0,0,function(){return""+Qe.apply(this)+U(this.minutes(),2)}),I("hmmss",0,0,function(){return""+Qe.apply(this)+U(this.minutes(),2)+U(this.seconds(),2)}),I("Hmm",0,0,function(){return""+this.hours()+U(this.minutes(),2)}),I("Hmmss",0,0,function(){return""+this.hours()+U(this.minutes(),2)+U(this.seconds(),2)}),Xe("a",!0),Xe("A",!1),H("hour","h"),L("hour",13),ue("a",Ke),ue("A",Ke),ue("H",B),ue("h",B),ue("k",B),ue("HH",B,z),ue("hh",B,z),ue("kk",B,z),ue("hmm",Q),ue("hmmss",X),ue("Hmm",Q),ue("Hmmss",X),ce(["H","HH"],ge),ce(["k","kk"],function(e,t,n){var s=k(e);t[ge]=24===s?0:s}),ce(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),ce(["h","hh"],function(e,t,n){t[ge]=k(e),g(n).bigHour=!0}),ce("hmm",function(e,t,n){var s=e.length-2;t[ge]=k(e.substr(0,s)),t[pe]=k(e.substr(s)),g(n).bigHour=!0}),ce("hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=k(e.substr(0,s)),t[pe]=k(e.substr(s,2)),t[ve]=k(e.substr(i)),g(n).bigHour=!0}),ce("Hmm",function(e,t,n){var s=e.length-2;t[ge]=k(e.substr(0,s)),t[pe]=k(e.substr(s))}),ce("Hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=k(e.substr(0,s)),t[pe]=k(e.substr(s,2)),t[ve]=k(e.substr(i))});var et,tt=Te("Hours",!0),nt={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:He,monthsShort:Re,week:{dow:0,doy:6},weekdays:je,weekdaysMin:ze,weekdaysShort:Ze,meridiemParse:/[ap]\.?m?\.?/i},st={},it={};function rt(e){return e?e.toLowerCase().replace("_","-"):e}function at(e){var t=null;if(!st[e]&&"undefined"!=typeof module&&module&&module.exports)try{t=et._abbr,require("./locale/"+e),ot(t)}catch(e){}return st[e]}function ot(e,t){var n;return e&&((n=l(t)?lt(e):ut(e,t))?et=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),et._abbr}function ut(e,t){if(null===t)return delete st[e],null;var n,s=nt;if(t.abbr=e,null!=st[e])T("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=st[e]._config;else if(null!=t.parentLocale)if(null!=st[t.parentLocale])s=st[t.parentLocale]._config;else{if(null==(n=at(t.parentLocale)))return it[t.parentLocale]||(it[t.parentLocale]=[]),it[t.parentLocale].push({name:e,config:t}),null;s=n._config}return st[e]=new P(b(s,t)),it[e]&&it[e].forEach(function(e){ut(e.name,e.config)}),ot(e),st[e]}function lt(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return et;if(!o(e)){if(t=at(e))return t;e=[e]}return function(e){for(var t,n,s,i,r=0;r<e.length;){for(t=(i=rt(e[r]).split("-")).length,n=(n=rt(e[r+1]))?n.split("-"):null;0<t;){if(s=at(i.slice(0,t).join("-")))return s;if(n&&n.length>=t&&a(i,n,!0)>=t-1)break;t--}r++}return et}(e)}function dt(e){var t,n=e._a;return n&&-2===g(e).overflow&&(t=n[_e]<0||11<n[_e]?_e:n[ye]<1||n[ye]>Pe(n[me],n[_e])?ye:n[ge]<0||24<n[ge]||24===n[ge]&&(0!==n[pe]||0!==n[ve]||0!==n[we])?ge:n[pe]<0||59<n[pe]?pe:n[ve]<0||59<n[ve]?ve:n[we]<0||999<n[we]?we:-1,g(e)._overflowDayOfYear&&(t<me||ye<t)&&(t=ye),g(e)._overflowWeeks&&-1===t&&(t=Me),g(e)._overflowWeekday&&-1===t&&(t=Se),g(e).overflow=t),e}function ht(e,t,n){return null!=e?e:null!=t?t:n}function ct(e){var t,n,s,i,r,a=[];if(!e._d){var o,u;for(o=e,u=new Date(c.now()),s=o._useUTC?[u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate()]:[u.getFullYear(),u.getMonth(),u.getDate()],e._w&&null==e._a[ye]&&null==e._a[_e]&&function(e){var t,n,s,i,r,a,o,u;if(null!=(t=e._w).GG||null!=t.W||null!=t.E)r=1,a=4,n=ht(t.GG,e._a[me],Ie(Tt(),1,4).year),s=ht(t.W,1),((i=ht(t.E,1))<1||7<i)&&(u=!0);else{r=e._locale._week.dow,a=e._locale._week.doy;var l=Ie(Tt(),r,a);n=ht(t.gg,e._a[me],l.year),s=ht(t.w,l.week),null!=t.d?((i=t.d)<0||6<i)&&(u=!0):null!=t.e?(i=t.e+r,(t.e<0||6<t.e)&&(u=!0)):i=r}s<1||s>Ae(n,r,a)?g(e)._overflowWeeks=!0:null!=u?g(e)._overflowWeekday=!0:(o=Ee(n,s,i,r,a),e._a[me]=o.year,e._dayOfYear=o.dayOfYear)}(e),null!=e._dayOfYear&&(r=ht(e._a[me],s[me]),(e._dayOfYear>De(r)||0===e._dayOfYear)&&(g(e)._overflowDayOfYear=!0),n=Ge(r,0,e._dayOfYear),e._a[_e]=n.getUTCMonth(),e._a[ye]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=a[t]=s[t];for(;t<7;t++)e._a[t]=a[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[ge]&&0===e._a[pe]&&0===e._a[ve]&&0===e._a[we]&&(e._nextDay=!0,e._a[ge]=0),e._d=(e._useUTC?Ge:function(e,t,n,s,i,r,a){var o=new Date(e,t,n,s,i,r,a);return e<100&&0<=e&&isFinite(o.getFullYear())&&o.setFullYear(e),o}).apply(null,a),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ge]=24),e._w&&void 0!==e._w.d&&e._w.d!==i&&(g(e).weekdayMismatch=!0)}}var ft=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,mt=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,_t=/Z|[+-]\d\d(?::?\d\d)?/,yt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],gt=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],pt=/^\/?Date\((\-?\d+)/i;function vt(e){var t,n,s,i,r,a,o=e._i,u=ft.exec(o)||mt.exec(o);if(u){for(g(e).iso=!0,t=0,n=yt.length;t<n;t++)if(yt[t][1].exec(u[1])){i=yt[t][0],s=!1!==yt[t][2];break}if(null==i)return void(e._isValid=!1);if(u[3]){for(t=0,n=gt.length;t<n;t++)if(gt[t][1].exec(u[3])){r=(u[2]||" ")+gt[t][0];break}if(null==r)return void(e._isValid=!1)}if(!s&&null!=r)return void(e._isValid=!1);if(u[4]){if(!_t.exec(u[4]))return void(e._isValid=!1);a="Z"}e._f=i+(r||"")+(a||""),kt(e)}else e._isValid=!1}var wt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function Mt(e,t,n,s,i,r){var a=[function(e){var t=parseInt(e,10);{if(t<=49)return 2e3+t;if(t<=999)return 1900+t}return t}(e),Re.indexOf(t),parseInt(n,10),parseInt(s,10),parseInt(i,10)];return r&&a.push(parseInt(r,10)),a}var St={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Dt(e){var t,n,s,i=wt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""));if(i){var r=Mt(i[4],i[3],i[2],i[5],i[6],i[7]);if(t=i[1],n=r,s=e,t&&Ze.indexOf(t)!==new Date(n[0],n[1],n[2]).getDay()&&(g(s).weekdayMismatch=!0,!(s._isValid=!1)))return;e._a=r,e._tzm=function(e,t,n){if(e)return St[e];if(t)return 0;var s=parseInt(n,10),i=s%100;return(s-i)/100*60+i}(i[8],i[9],i[10]),e._d=Ge.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),g(e).rfc2822=!0}else e._isValid=!1}function kt(e){if(e._f!==c.ISO_8601)if(e._f!==c.RFC_2822){e._a=[],g(e).empty=!0;var t,n,s,i,r,a,o,u,l=""+e._i,d=l.length,h=0;for(s=j(e._f,e._locale).match(N)||[],t=0;t<s.length;t++)i=s[t],(n=(l.match(le(i,e))||[])[0])&&(0<(r=l.substr(0,l.indexOf(n))).length&&g(e).unusedInput.push(r),l=l.slice(l.indexOf(n)+n.length),h+=n.length),E[i]?(n?g(e).empty=!1:g(e).unusedTokens.push(i),a=i,u=e,null!=(o=n)&&m(he,a)&&he[a](o,u._a,u,a)):e._strict&&!n&&g(e).unusedTokens.push(i);g(e).charsLeftOver=d-h,0<l.length&&g(e).unusedInput.push(l),e._a[ge]<=12&&!0===g(e).bigHour&&0<e._a[ge]&&(g(e).bigHour=void 0),g(e).parsedDateParts=e._a.slice(0),g(e).meridiem=e._meridiem,e._a[ge]=function(e,t,n){var s;if(null==n)return t;return null!=e.meridiemHour?e.meridiemHour(t,n):(null!=e.isPM&&((s=e.isPM(n))&&t<12&&(t+=12),s||12!==t||(t=0)),t)}(e._locale,e._a[ge],e._meridiem),ct(e),dt(e)}else Dt(e);else vt(e)}function Yt(e){var t,n,s,i,r=e._i,a=e._f;return e._locale=e._locale||lt(e._l),null===r||void 0===a&&""===r?v({nullInput:!0}):("string"==typeof r&&(e._i=r=e._locale.preparse(r)),S(r)?new M(dt(r)):(h(r)?e._d=r:o(a)?function(e){var t,n,s,i,r;if(0===e._f.length)return g(e).invalidFormat=!0,e._d=new Date(NaN);for(i=0;i<e._f.length;i++)r=0,t=w({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],kt(t),p(t)&&(r+=g(t).charsLeftOver,r+=10*g(t).unusedTokens.length,g(t).score=r,(null==s||r<s)&&(s=r,n=t));_(e,n||t)}(e):a?kt(e):l(n=(t=e)._i)?t._d=new Date(c.now()):h(n)?t._d=new Date(n.valueOf()):"string"==typeof n?(s=t,null===(i=pt.exec(s._i))?(vt(s),!1===s._isValid&&(delete s._isValid,Dt(s),!1===s._isValid&&(delete s._isValid,c.createFromInputFallback(s)))):s._d=new Date(+i[1])):o(n)?(t._a=f(n.slice(0),function(e){return parseInt(e,10)}),ct(t)):u(n)?function(e){if(!e._d){var t=C(e._i);e._a=f([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),ct(e)}}(t):d(n)?t._d=new Date(n):c.createFromInputFallback(t),p(e)||(e._d=null),e))}function Ot(e,t,n,s,i){var r,a={};return!0!==n&&!1!==n||(s=n,n=void 0),(u(e)&&function(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0}(e)||o(e)&&0===e.length)&&(e=void 0),a._isAMomentObject=!0,a._useUTC=a._isUTC=i,a._l=n,a._i=e,a._f=t,a._strict=s,(r=new M(dt(Yt(a))))._nextDay&&(r.add(1,"d"),r._nextDay=void 0),r}function Tt(e,t,n,s){return Ot(e,t,n,s,!1)}c.createFromInputFallback=n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),c.ISO_8601=function(){},c.RFC_2822=function(){};var xt=n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Tt.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:v()}),bt=n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Tt.apply(null,arguments);return this.isValid()&&e.isValid()?this<e?this:e:v()});function Pt(e,t){var n,s;if(1===t.length&&o(t[0])&&(t=t[0]),!t.length)return Tt();for(n=t[0],s=1;s<t.length;++s)t[s].isValid()&&!t[s][e](n)||(n=t[s]);return n}var Wt=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Ht(e){var t=C(e),n=t.year||0,s=t.quarter||0,i=t.month||0,r=t.week||t.isoWeek||0,a=t.day||0,o=t.hour||0,u=t.minute||0,l=t.second||0,d=t.millisecond||0;this._isValid=function(e){for(var t in e)if(-1===Ye.call(Wt,t)||null!=e[t]&&isNaN(e[t]))return!1;for(var n=!1,s=0;s<Wt.length;++s)if(e[Wt[s]]){if(n)return!1;parseFloat(e[Wt[s]])!==k(e[Wt[s]])&&(n=!0)}return!0}(t),this._milliseconds=+d+1e3*l+6e4*u+1e3*o*60*60,this._days=+a+7*r,this._months=+i+3*s+12*n,this._data={},this._locale=lt(),this._bubble()}function Rt(e){return e instanceof Ht}function Ct(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function Ft(e,n){I(e,0,0,function(){var e=this.utcOffset(),t="+";return e<0&&(e=-e,t="-"),t+U(~~(e/60),2)+n+U(~~e%60,2)})}Ft("Z",":"),Ft("ZZ",""),ue("Z",re),ue("ZZ",re),ce(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Ut(re,e)});var Lt=/([\+\-]|\d\d)/gi;function Ut(e,t){var n=(t||"").match(e);if(null===n)return null;var s=((n[n.length-1]||[])+"").match(Lt)||["-",0,0],i=60*s[1]+k(s[2]);return 0===i?0:"+"===s[0]?i:-i}function Nt(e,t){var n,s;return t._isUTC?(n=t.clone(),s=(S(e)||h(e)?e.valueOf():Tt(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+s),c.updateOffset(n,!1),n):Tt(e).local()}function Gt(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Vt(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}c.updateOffset=function(){};var Et=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,It=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function At(e,t){var n,s,i,r=e,a=null;return Rt(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:d(e)?(r={},t?r[t]=e:r.milliseconds=e):(a=Et.exec(e))?(n="-"===a[1]?-1:1,r={y:0,d:k(a[ye])*n,h:k(a[ge])*n,m:k(a[pe])*n,s:k(a[ve])*n,ms:k(Ct(1e3*a[we]))*n}):(a=It.exec(e))?(n="-"===a[1]?-1:1,r={y:jt(a[2],n),M:jt(a[3],n),w:jt(a[4],n),d:jt(a[5],n),h:jt(a[6],n),m:jt(a[7],n),s:jt(a[8],n)}):null==r?r={}:"object"==typeof r&&("from"in r||"to"in r)&&(i=function(e,t){var n;if(!e.isValid()||!t.isValid())return{milliseconds:0,months:0};t=Nt(t,e),e.isBefore(t)?n=Zt(e,t):((n=Zt(t,e)).milliseconds=-n.milliseconds,n.months=-n.months);return n}(Tt(r.from),Tt(r.to)),(r={}).ms=i.milliseconds,r.M=i.months),s=new Ht(r),Rt(e)&&m(e,"_locale")&&(s._locale=e._locale),s}function jt(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function Zt(e,t){var n={milliseconds:0,months:0};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function zt(s,i){return function(e,t){var n;return null===t||isNaN(+t)||(T(i,"moment()."+i+"(period, number) is deprecated. Please use moment()."+i+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),n=e,e=t,t=n),$t(this,At(e="string"==typeof e?+e:e,t),s),this}}function $t(e,t,n,s){var i=t._milliseconds,r=Ct(t._days),a=Ct(t._months);e.isValid()&&(s=null==s||s,a&&Ce(e,xe(e,"Month")+a*n),r&&be(e,"Date",xe(e,"Date")+r*n),i&&e._d.setTime(e._d.valueOf()+i*n),s&&c.updateOffset(e,r||a))}At.fn=Ht.prototype,At.invalid=function(){return At(NaN)};var qt=zt(1,"add"),Jt=zt(-1,"subtract");function Bt(e,t){var n=12*(t.year()-e.year())+(t.month()-e.month()),s=e.clone().add(n,"months");return-(n+(t-s<0?(t-s)/(s-e.clone().add(n-1,"months")):(t-s)/(e.clone().add(n+1,"months")-s)))||0}function Qt(e){var t;return void 0===e?this._locale._abbr:(null!=(t=lt(e))&&(this._locale=t),this)}c.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",c.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Xt=n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});function Kt(){return this._locale}function en(e,t){I(0,[e,e.length],0,t)}function tn(e,t,n,s,i){var r;return null==e?Ie(this,s,i).year:((r=Ae(e,s,i))<t&&(t=r),function(e,t,n,s,i){var r=Ee(e,t,n,s,i),a=Ge(r.year,0,r.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}.call(this,e,t,n,s,i))}I(0,["gg",2],0,function(){return this.weekYear()%100}),I(0,["GG",2],0,function(){return this.isoWeekYear()%100}),en("gggg","weekYear"),en("ggggg","weekYear"),en("GGGG","isoWeekYear"),en("GGGGG","isoWeekYear"),H("weekYear","gg"),H("isoWeekYear","GG"),L("weekYear",1),L("isoWeekYear",1),ue("G",se),ue("g",se),ue("GG",B,z),ue("gg",B,z),ue("GGGG",ee,q),ue("gggg",ee,q),ue("GGGGG",te,J),ue("ggggg",te,J),fe(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,s){t[s.substr(0,2)]=k(e)}),fe(["gg","GG"],function(e,t,n,s){t[s]=c.parseTwoDigitYear(e)}),I("Q",0,"Qo","quarter"),H("quarter","Q"),L("quarter",7),ue("Q",Z),ce("Q",function(e,t){t[_e]=3*(k(e)-1)}),I("D",["DD",2],"Do","date"),H("date","D"),L("date",9),ue("D",B),ue("DD",B,z),ue("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),ce(["D","DD"],ye),ce("Do",function(e,t){t[ye]=k(e.match(B)[0])});var nn=Te("Date",!0);I("DDD",["DDDD",3],"DDDo","dayOfYear"),H("dayOfYear","DDD"),L("dayOfYear",4),ue("DDD",K),ue("DDDD",$),ce(["DDD","DDDD"],function(e,t,n){n._dayOfYear=k(e)}),I("m",["mm",2],0,"minute"),H("minute","m"),L("minute",14),ue("m",B),ue("mm",B,z),ce(["m","mm"],pe);var sn=Te("Minutes",!1);I("s",["ss",2],0,"second"),H("second","s"),L("second",15),ue("s",B),ue("ss",B,z),ce(["s","ss"],ve);var rn,an=Te("Seconds",!1);for(I("S",0,0,function(){return~~(this.millisecond()/100)}),I(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),I(0,["SSS",3],0,"millisecond"),I(0,["SSSS",4],0,function(){return 10*this.millisecond()}),I(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),I(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),I(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),I(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),I(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),H("millisecond","ms"),L("millisecond",16),ue("S",K,Z),ue("SS",K,z),ue("SSS",K,$),rn="SSSS";rn.length<=9;rn+="S")ue(rn,ne);function on(e,t){t[we]=k(1e3*("0."+e))}for(rn="S";rn.length<=9;rn+="S")ce(rn,on);var un=Te("Milliseconds",!1);I("z",0,0,"zoneAbbr"),I("zz",0,0,"zoneName");var ln=M.prototype;function dn(e){return e}ln.add=qt,ln.calendar=function(e,t){var n=e||Tt(),s=Nt(n,this).startOf("day"),i=c.calendarFormat(this,s)||"sameElse",r=t&&(x(t[i])?t[i].call(this,n):t[i]);return this.format(r||this.localeData().calendar(i,this,Tt(n)))},ln.clone=function(){return new M(this)},ln.diff=function(e,t,n){var s,i,r;if(!this.isValid())return NaN;if(!(s=Nt(e,this)).isValid())return NaN;switch(i=6e4*(s.utcOffset()-this.utcOffset()),t=R(t)){case"year":r=Bt(this,s)/12;break;case"month":r=Bt(this,s);break;case"quarter":r=Bt(this,s)/3;break;case"second":r=(this-s)/1e3;break;case"minute":r=(this-s)/6e4;break;case"hour":r=(this-s)/36e5;break;case"day":r=(this-s-i)/864e5;break;case"week":r=(this-s-i)/6048e5;break;default:r=this-s}return n?r:D(r)},ln.endOf=function(e){return void 0===(e=R(e))||"millisecond"===e?this:("date"===e&&(e="day"),this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms"))},ln.format=function(e){e||(e=this.isUtc()?c.defaultFormatUtc:c.defaultFormat);var t=A(this,e);return this.localeData().postformat(t)},ln.from=function(e,t){return this.isValid()&&(S(e)&&e.isValid()||Tt(e).isValid())?At({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},ln.fromNow=function(e){return this.from(Tt(),e)},ln.to=function(e,t){return this.isValid()&&(S(e)&&e.isValid()||Tt(e).isValid())?At({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},ln.toNow=function(e){return this.to(Tt(),e)},ln.get=function(e){return x(this[e=R(e)])?this[e]():this},ln.invalidAt=function(){return g(this).overflow},ln.isAfter=function(e,t){var n=S(e)?e:Tt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=R(t)||"millisecond")?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())},ln.isBefore=function(e,t){var n=S(e)?e:Tt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=R(t)||"millisecond")?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())},ln.isBetween=function(e,t,n,s){var i=S(e)?e:Tt(e),r=S(t)?t:Tt(t);return!!(this.isValid()&&i.isValid()&&r.isValid())&&("("===(s=s||"()")[0]?this.isAfter(i,n):!this.isBefore(i,n))&&(")"===s[1]?this.isBefore(r,n):!this.isAfter(r,n))},ln.isSame=function(e,t){var n,s=S(e)?e:Tt(e);return!(!this.isValid()||!s.isValid())&&("millisecond"===(t=R(t)||"millisecond")?this.valueOf()===s.valueOf():(n=s.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))},ln.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)},ln.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)},ln.isValid=function(){return p(this)},ln.lang=Xt,ln.locale=Qt,ln.localeData=Kt,ln.max=bt,ln.min=xt,ln.parsingFlags=function(){return _({},g(this))},ln.set=function(e,t){if("object"==typeof e)for(var n=function(e){var t=[];for(var n in e)t.push({unit:n,priority:F[n]});return t.sort(function(e,t){return e.priority-t.priority}),t}(e=C(e)),s=0;s<n.length;s++)this[n[s].unit](e[n[s].unit]);else if(x(this[e=R(e)]))return this[e](t);return this},ln.startOf=function(e){switch(e=R(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e&&this.weekday(0),"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this},ln.subtract=Jt,ln.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},ln.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},ln.toDate=function(){return new Date(this.valueOf())},ln.toISOString=function(e){if(!this.isValid())return null;var t=!0!==e,n=t?this.clone().utc():this;return n.year()<0||9999<n.year()?A(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):x(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",A(n,"Z")):A(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},ln.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z");var n="["+e+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i=t+'[")]';return this.format(n+s+"-MM-DD[T]HH:mm:ss.SSS"+i)},ln.toJSON=function(){return this.isValid()?this.toISOString():null},ln.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},ln.unix=function(){return Math.floor(this.valueOf()/1e3)},ln.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},ln.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},ln.year=Oe,ln.isLeapYear=function(){return ke(this.year())},ln.weekYear=function(e){return tn.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},ln.isoWeekYear=function(e){return tn.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},ln.quarter=ln.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},ln.month=Fe,ln.daysInMonth=function(){return Pe(this.year(),this.month())},ln.week=ln.weeks=function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},ln.isoWeek=ln.isoWeeks=function(e){var t=Ie(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},ln.weeksInYear=function(){var e=this.localeData()._week;return Ae(this.year(),e.dow,e.doy)},ln.isoWeeksInYear=function(){return Ae(this.year(),1,4)},ln.date=nn,ln.day=ln.days=function(e){if(!this.isValid())return null!=e?this:NaN;var t,n,s=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(t=e,n=this.localeData(),e="string"!=typeof t?t:isNaN(t)?"number"==typeof(t=n.weekdaysParse(t))?t:null:parseInt(t,10),this.add(e-s,"d")):s},ln.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},ln.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null==e)return this.day()||7;var t,n,s=(t=e,n=this.localeData(),"string"==typeof t?n.weekdaysParse(t)%7||7:isNaN(t)?null:t);return this.day(this.day()%7?s:s-7)},ln.dayOfYear=function(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},ln.hour=ln.hours=tt,ln.minute=ln.minutes=sn,ln.second=ln.seconds=an,ln.millisecond=ln.milliseconds=un,ln.utcOffset=function(e,t,n){var s,i=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null==e)return this._isUTC?i:Gt(this);if("string"==typeof e){if(null===(e=Ut(re,e)))return this}else Math.abs(e)<16&&!n&&(e*=60);return!this._isUTC&&t&&(s=Gt(this)),this._offset=e,this._isUTC=!0,null!=s&&this.add(s,"m"),i!==e&&(!t||this._changeInProgress?$t(this,At(e-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,c.updateOffset(this,!0),this._changeInProgress=null)),this},ln.utc=function(e){return this.utcOffset(0,e)},ln.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Gt(this),"m")),this},ln.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=Ut(ie,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this},ln.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?Tt(e).utcOffset():0,(this.utcOffset()-e)%60==0)},ln.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},ln.isLocal=function(){return!!this.isValid()&&!this._isUTC},ln.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},ln.isUtc=Vt,ln.isUTC=Vt,ln.zoneAbbr=function(){return this._isUTC?"UTC":""},ln.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},ln.dates=n("dates accessor is deprecated. Use date instead.",nn),ln.months=n("months accessor is deprecated. Use month instead",Fe),ln.years=n("years accessor is deprecated. Use year instead",Oe),ln.zone=n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}),ln.isDSTShifted=n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!l(this._isDSTShifted))return this._isDSTShifted;var e={};if(w(e,this),(e=Yt(e))._a){var t=e._isUTC?y(e._a):Tt(e._a);this._isDSTShifted=this.isValid()&&0<a(e._a,t.toArray())}else this._isDSTShifted=!1;return this._isDSTShifted});var hn=P.prototype;function cn(e,t,n,s){var i=lt(),r=y().set(s,t);return i[n](r,e)}function fn(e,t,n){if(d(e)&&(t=e,e=void 0),e=e||"",null!=t)return cn(e,t,n,"month");var s,i=[];for(s=0;s<12;s++)i[s]=cn(e,s,n,"month");return i}function mn(e,t,n,s){t=("boolean"==typeof e?d(t)&&(n=t,t=void 0):(t=e,e=!1,d(n=t)&&(n=t,t=void 0)),t||"");var i,r=lt(),a=e?r._week.dow:0;if(null!=n)return cn(t,(n+a)%7,s,"day");var o=[];for(i=0;i<7;i++)o[i]=cn(t,(i+a)%7,s,"day");return o}hn.calendar=function(e,t,n){var s=this._calendar[e]||this._calendar.sameElse;return x(s)?s.call(t,n):s},hn.longDateFormat=function(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])},hn.invalidDate=function(){return this._invalidDate},hn.ordinal=function(e){return this._ordinal.replace("%d",e)},hn.preparse=dn,hn.postformat=dn,hn.relativeTime=function(e,t,n,s){var i=this._relativeTime[n];return x(i)?i(e,t,n,s):i.replace(/%d/i,e)},hn.pastFuture=function(e,t){var n=this._relativeTime[0<e?"future":"past"];return x(n)?n(t):n.replace(/%s/i,t)},hn.set=function(e){var t,n;for(n in e)x(t=e[n])?this[n]=t:this["_"+n]=t;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},hn.months=function(e,t){return e?o(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||We).test(t)?"format":"standalone"][e.month()]:o(this._months)?this._months:this._months.standalone},hn.monthsShort=function(e,t){return e?o(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[We.test(t)?"format":"standalone"][e.month()]:o(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},hn.monthsParse=function(e,t,n){var s,i,r;if(this._monthsParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)r=y([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null}.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(i=y([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[s]||(r="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[s]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[s].test(e))return s;if(n&&"MMM"===t&&this._shortMonthsParse[s].test(e))return s;if(!n&&this._monthsParse[s].test(e))return s}},hn.monthsRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||Ne.call(this),e?this._monthsStrictRegex:this._monthsRegex):(m(this,"_monthsRegex")||(this._monthsRegex=Ue),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},hn.monthsShortRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||Ne.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(m(this,"_monthsShortRegex")||(this._monthsShortRegex=Le),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},hn.week=function(e){return Ie(e,this._week.dow,this._week.doy).week},hn.firstDayOfYear=function(){return this._week.doy},hn.firstDayOfWeek=function(){return this._week.dow},hn.weekdays=function(e,t){return e?o(this._weekdays)?this._weekdays[e.day()]:this._weekdays[this._weekdays.isFormat.test(t)?"format":"standalone"][e.day()]:o(this._weekdays)?this._weekdays:this._weekdays.standalone},hn.weekdaysMin=function(e){return e?this._weekdaysMin[e.day()]:this._weekdaysMin},hn.weekdaysShort=function(e){return e?this._weekdaysShort[e.day()]:this._weekdaysShort},hn.weekdaysParse=function(e,t,n){var s,i,r;if(this._weekdaysParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)r=y([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null}.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(i=y([2e3,1]).day(s),n&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(r="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[s]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[s].test(e))return s;if(n&&"ddd"===t&&this._shortWeekdaysParse[s].test(e))return s;if(n&&"dd"===t&&this._minWeekdaysParse[s].test(e))return s;if(!n&&this._weekdaysParse[s].test(e))return s}},hn.weekdaysRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(m(this,"_weekdaysRegex")||(this._weekdaysRegex=$e),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},hn.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(m(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=qe),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},hn.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(m(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Je),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},hn.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},hn.meridiem=function(e,t,n){return 11<e?n?"pm":"PM":n?"am":"AM"},ot("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===k(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}}),c.lang=n("moment.lang is deprecated. Use moment.locale instead.",ot),c.langData=n("moment.langData is deprecated. Use moment.localeData instead.",lt);var _n=Math.abs;function yn(e,t,n,s){var i=At(t,n);return e._milliseconds+=s*i._milliseconds,e._days+=s*i._days,e._months+=s*i._months,e._bubble()}function gn(e){return e<0?Math.floor(e):Math.ceil(e)}function pn(e){return 4800*e/146097}function vn(e){return 146097*e/4800}function wn(e){return function(){return this.as(e)}}var Mn=wn("ms"),Sn=wn("s"),Dn=wn("m"),kn=wn("h"),Yn=wn("d"),On=wn("w"),Tn=wn("M"),xn=wn("y");function bn(e){return function(){return this.isValid()?this._data[e]:NaN}}var Pn=bn("milliseconds"),Wn=bn("seconds"),Hn=bn("minutes"),Rn=bn("hours"),Cn=bn("days"),Fn=bn("months"),Ln=bn("years");var Un=Math.round,Nn={ss:44,s:45,m:45,h:22,d:26,M:11};var Gn=Math.abs;function Vn(e){return(0<e)-(e<0)||+e}function En(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n=Gn(this._milliseconds)/1e3,s=Gn(this._days),i=Gn(this._months);t=D((e=D(n/60))/60),n%=60,e%=60;var r=D(i/12),a=i%=12,o=s,u=t,l=e,d=n?n.toFixed(3).replace(/\.?0+$/,""):"",h=this.asSeconds();if(!h)return"P0D";var c=h<0?"-":"",f=Vn(this._months)!==Vn(h)?"-":"",m=Vn(this._days)!==Vn(h)?"-":"",_=Vn(this._milliseconds)!==Vn(h)?"-":"";return c+"P"+(r?f+r+"Y":"")+(a?f+a+"M":"")+(o?m+o+"D":"")+(u||l||d?"T":"")+(u?_+u+"H":"")+(l?_+l+"M":"")+(d?_+d+"S":"")}var In=Ht.prototype;return In.isValid=function(){return this._isValid},In.abs=function(){var e=this._data;return this._milliseconds=_n(this._milliseconds),this._days=_n(this._days),this._months=_n(this._months),e.milliseconds=_n(e.milliseconds),e.seconds=_n(e.seconds),e.minutes=_n(e.minutes),e.hours=_n(e.hours),e.months=_n(e.months),e.years=_n(e.years),this},In.add=function(e,t){return yn(this,e,t,1)},In.subtract=function(e,t){return yn(this,e,t,-1)},In.as=function(e){if(!this.isValid())return NaN;var t,n,s=this._milliseconds;if("month"===(e=R(e))||"year"===e)return t=this._days+s/864e5,n=this._months+pn(t),"month"===e?n:n/12;switch(t=this._days+Math.round(vn(this._months)),e){case"week":return t/7+s/6048e5;case"day":return t+s/864e5;case"hour":return 24*t+s/36e5;case"minute":return 1440*t+s/6e4;case"second":return 86400*t+s/1e3;case"millisecond":return Math.floor(864e5*t)+s;default:throw new Error("Unknown unit "+e)}},In.asMilliseconds=Mn,In.asSeconds=Sn,In.asMinutes=Dn,In.asHours=kn,In.asDays=Yn,In.asWeeks=On,In.asMonths=Tn,In.asYears=xn,In.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*k(this._months/12):NaN},In._bubble=function(){var e,t,n,s,i,r=this._milliseconds,a=this._days,o=this._months,u=this._data;return 0<=r&&0<=a&&0<=o||r<=0&&a<=0&&o<=0||(r+=864e5*gn(vn(o)+a),o=a=0),u.milliseconds=r%1e3,e=D(r/1e3),u.seconds=e%60,t=D(e/60),u.minutes=t%60,n=D(t/60),u.hours=n%24,o+=i=D(pn(a+=D(n/24))),a-=gn(vn(i)),s=D(o/12),o%=12,u.days=a,u.months=o,u.years=s,this},In.clone=function(){return At(this)},In.get=function(e){return e=R(e),this.isValid()?this[e+"s"]():NaN},In.milliseconds=Pn,In.seconds=Wn,In.minutes=Hn,In.hours=Rn,In.days=Cn,In.weeks=function(){return D(this.days()/7)},In.months=Fn,In.years=Ln,In.humanize=function(e){if(!this.isValid())return this.localeData().invalidDate();var t,n,s,i,r,a,o,u,l,d,h,c=this.localeData(),f=(n=!e,s=c,i=At(t=this).abs(),r=Un(i.as("s")),a=Un(i.as("m")),o=Un(i.as("h")),u=Un(i.as("d")),l=Un(i.as("M")),d=Un(i.as("y")),(h=r<=Nn.ss&&["s",r]||r<Nn.s&&["ss",r]||a<=1&&["m"]||a<Nn.m&&["mm",a]||o<=1&&["h"]||o<Nn.h&&["hh",o]||u<=1&&["d"]||u<Nn.d&&["dd",u]||l<=1&&["M"]||l<Nn.M&&["MM",l]||d<=1&&["y"]||["yy",d])[2]=n,h[3]=0<+t,h[4]=s,function(e,t,n,s,i){return i.relativeTime(t||1,!!n,e,s)}.apply(null,h));return e&&(f=c.pastFuture(+this,f)),c.postformat(f)},In.toISOString=En,In.toString=En,In.toJSON=En,In.locale=Qt,In.localeData=Kt,In.toIsoString=n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",En),In.lang=Xt,I("X",0,0,"unix"),I("x",0,0,"valueOf"),ue("x",se),ue("X",/[+-]?\d+(\.\d{1,3})?/),ce("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))}),ce("x",function(e,t,n){n._d=new Date(k(e))}),c.version="2.23.0",e=Tt,c.fn=ln,c.min=function(){return Pt("isBefore",[].slice.call(arguments,0))},c.max=function(){return Pt("isAfter",[].slice.call(arguments,0))},c.now=function(){return Date.now?Date.now():+new Date},c.utc=y,c.unix=function(e){return Tt(1e3*e)},c.months=function(e,t){return fn(e,t,"months")},c.isDate=h,c.locale=ot,c.invalid=v,c.duration=At,c.isMoment=S,c.weekdays=function(e,t,n){return mn(e,t,n,"weekdays")},c.parseZone=function(){return Tt.apply(null,arguments).parseZone()},c.localeData=lt,c.isDuration=Rt,c.monthsShort=function(e,t){return fn(e,t,"monthsShort")},c.weekdaysMin=function(e,t,n){return mn(e,t,n,"weekdaysMin")},c.defineLocale=ut,c.updateLocale=function(e,t){if(null!=t){var n,s,i=nt;null!=(s=at(e))&&(i=s._config),(n=new P(t=b(i,t))).parentLocale=st[e],st[e]=n,ot(e)}else null!=st[e]&&(null!=st[e].parentLocale?st[e]=st[e].parentLocale:null!=st[e]&&delete st[e]);return st[e]},c.locales=function(){return s(st)},c.weekdaysShort=function(e,t,n){return mn(e,t,n,"weekdaysShort")},c.normalizeUnits=R,c.relativeTimeRounding=function(e){return void 0===e?Un:"function"==typeof e&&(Un=e,!0)},c.relativeTimeThreshold=function(e,t){return void 0!==Nn[e]&&(void 0===t?Nn[e]:(Nn[e]=t,"s"===e&&(Nn.ss=t-1),!0))},c.calendarFormat=function(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"},c.prototype=ln,c.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},c});
;// 4.9.2 (2018-12-17)
!function(){"use strict";var o=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]},H=function(n,r){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n(r.apply(null,e))}},j=function(e){return function(){return e}},q=function(e){return e};function d(r){for(var o=[],e=1;e<arguments.length;e++)o[e-1]=arguments[e];return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=o.concat(e);return r.apply(null,n)}}var e,t,n,r,i,a,u,s,c,l,f,m,g,p,h,v,b,y=function(n){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return!n.apply(null,e)}},C=j(!1),x=j(!0),w=C,N=x,E=function(){return S},S=(r={fold:function(e,t){return e()},is:w,isSome:w,isNone:N,getOr:n=function(e){return e},getOrThunk:t=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){return undefined},or:n,orThunk:t,map:E,ap:E,each:function(){},bind:E,flatten:E,exists:w,forall:N,filter:E,equals:e=function(e){return e.isNone()},equals_:e,toArray:function(){return[]},toString:j("none()")},Object.freeze&&Object.freeze(r),r),k=function(n){var e=function(){return n},t=function(){return o},r=function(e){return e(n)},o={fold:function(e,t){return t(n)},is:function(e){return n===e},isSome:N,isNone:w,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:t,orThunk:t,map:function(e){return k(e(n))},ap:function(e){return e.fold(E,function(e){return k(e(n))})},each:function(e){e(n)},bind:r,flatten:e,exists:r,forall:r,filter:function(e){return e(n)?o:S},equals:function(e){return e.is(n)},equals_:function(e,t){return e.fold(w,function(e){return t(n,e)})},toArray:function(){return[n]},toString:function(){return"some("+n+")"}};return o},A={some:k,none:E,from:function(e){return null===e||e===undefined?S:k(e)}},T=function(t){return function(e){return function(e){if(null===e)return"null";var t=typeof e;return"object"===t&&Array.prototype.isPrototypeOf(e)?"array":"object"===t&&String.prototype.isPrototypeOf(e)?"string":t}(e)===t}},R=T("string"),_=T("object"),D=T("array"),B=T("null"),O=T("boolean"),P=T("function"),L=T("number"),I=(i=Array.prototype.indexOf)===undefined?function(e,t){return X(e,t)}:function(e,t){return i.call(e,t)},M=function(e,t){return-1<I(e,t)},$=function(e,t){for(var n=e.length,r=new Array(n),o=0;o<n;o++){var i=e[o];r[o]=t(i,o,e)}return r},F=function(e,t){for(var n=0,r=e.length;n<r;n++)t(e[n],n,e)},W=function(e,t){for(var n=[],r=[],o=0,i=e.length;o<i;o++){var a=e[o];(t(a,o,e)?n:r).push(a)}return{pass:n,fail:r}},z=function(e,t){for(var n=[],r=0,o=e.length;r<o;r++){var i=e[r];t(i,r,e)&&n.push(i)}return n},U=function(e,t,n){return F(e,function(e){n=t(n,e)}),n},V=function(e,t){for(var n=0,r=e.length;n<r;n++){var o=e[n];if(t(o,n,e))return A.some(o)}return A.none()},K=function(e,t){for(var n=0,r=e.length;n<r;n++)if(t(e[n],n,e))return A.some(n);return A.none()},X=function(e,t){for(var n=0,r=e.length;n<r;++n)if(e[n]===t)return n;return-1},Y=Array.prototype.push,G=function(e,t){return function(e){for(var t=[],n=0,r=e.length;n<r;++n){if(!Array.prototype.isPrototypeOf(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e);Y.apply(t,e[n])}return t}($(e,t))},J=function(e,t){for(var n=0,r=e.length;n<r;++n)if(!0!==t(e[n],n,e))return!1;return!0},Q=Array.prototype.slice,Z=function(e,t){return z(e,function(e){return!M(t,e)})},ee=function(e){return 0===e.length?A.none():A.some(e[0])},te=function(e){return 0===e.length?A.none():A.some(e[e.length-1])},ne=P(Array.from)?Array.from:function(e){return Q.call(e)},re="undefined"!=typeof window?window:Function("return this;")(),oe=function(e,t){return function(e,t){for(var n=t!==undefined&&null!==t?t:re,r=0;r<e.length&&n!==undefined&&null!==n;++r)n=n[e[r]];return n}(e.split("."),t)},ie={getOrDie:function(e,t){var n=oe(e,t);if(n===undefined||null===n)throw e+" not available on this browser";return n}},ae=function(){return ie.getOrDie("URL")},ue={createObjectURL:function(e){return ae().createObjectURL(e)},revokeObjectURL:function(e){ae().revokeObjectURL(e)}},se=navigator,ce=se.userAgent,le=function(e){return"matchMedia"in window&&matchMedia(e).matches};g=/Android/.test(ce),u=(u=!(a=/WebKit/.test(ce))&&/MSIE/gi.test(ce)&&/Explorer/gi.test(se.appName))&&/MSIE (\w+)\./.exec(ce)[1],s=-1!==ce.indexOf("Trident/")&&(-1!==ce.indexOf("rv:")||-1!==se.appName.indexOf("Netscape"))&&11,c=-1!==ce.indexOf("Edge/")&&!u&&!s&&12,u=u||s||c,l=!a&&!s&&/Gecko/.test(ce),f=-1!==ce.indexOf("Mac"),m=/(iPad|iPhone)/.test(ce),p="FormData"in window&&"FileReader"in window&&"URL"in window&&!!ue.createObjectURL,h=le("only screen and (max-device-width: 480px)")&&(g||m),v=le("only screen and (min-width: 800px)")&&(g||m),b=-1!==ce.indexOf("Windows Phone"),c&&(a=!1);var fe,de={opera:!1,webkit:a,ie:u,gecko:l,mac:f,iOS:m,android:g,contentEditable:!m||p||534<=parseInt(ce.match(/AppleWebKit\/(\d*)/)[1],10),transparentSrc:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",caretAfter:8!==u,range:window.getSelection&&"Range"in window,documentMode:u&&!c?document.documentMode||7:10,fileApi:p,ceFalse:!1===u||8<u,cacheSuffix:null,container:null,overrideViewPort:null,experimentalShadowDom:!1,canHaveCSP:!1===u||11<u,desktop:!h&&!v,windowsPhone:b},me=window.Promise?window.Promise:function(){function r(e,t){return function(){e.apply(t,arguments)}}var e=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},i=function(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],l(e,r(o,this),r(u,this))},t=i.immediateFn||"function"==typeof setImmediate&&setImmediate||function(e){setTimeout(e,1)};function a(r){var o=this;null!==this._state?t(function(){var e=o._state?r.onFulfilled:r.onRejected;if(null!==e){var t;try{t=e(o._value)}catch(n){return void r.reject(n)}r.resolve(t)}else(o._state?r.resolve:r.reject)(o._value)}):this._deferreds.push(r)}function o(e){try{if(e===this)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var t=e.then;if("function"==typeof t)return void l(r(t,e),r(o,this),r(u,this))}this._state=!0,this._value=e,s.call(this)}catch(n){u.call(this,n)}}function u(e){this._state=!1,this._value=e,s.call(this)}function s(){for(var e=0,t=this._deferreds.length;e<t;e++)a.call(this,this._deferreds[e]);this._deferreds=null}function c(e,t,n,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.resolve=n,this.reject=r}function l(e,t,n){var r=!1;try{e(function(e){r||(r=!0,t(e))},function(e){r||(r=!0,n(e))})}catch(o){if(r)return;r=!0,n(o)}}return i.prototype["catch"]=function(e){return this.then(null,e)},i.prototype.then=function(n,r){var o=this;return new i(function(e,t){a.call(o,new c(n,r,e,t))})},i.all=function(){var s=Array.prototype.slice.call(1===arguments.length&&e(arguments[0])?arguments[0]:arguments);return new i(function(o,i){if(0===s.length)return o([]);var a=s.length;function u(t,e){try{if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if("function"==typeof n)return void n.call(e,function(e){u(t,e)},i)}s[t]=e,0==--a&&o(s)}catch(r){i(r)}}for(var e=0;e<s.length;e++)u(e,s[e])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(n){return new i(function(e,t){t(n)})},i.race=function(o){return new i(function(e,t){for(var n=0,r=o.length;n<r;n++)o[n].then(e,t)})},i}(),ge=function(e,t){return"number"!=typeof t&&(t=0),setTimeout(e,t)},pe=function(e,t){return"number"!=typeof t&&(t=1),setInterval(e,t)},he=function(t,n){var r,e;return(e=function(){var e=arguments;clearTimeout(r),r=ge(function(){t.apply(this,e)},n)}).stop=function(){clearTimeout(r)},e},ve={requestAnimationFrame:function(e,t){fe?fe.then(e):fe=new me(function(e){t||(t=document.body),function(e,t){var n,r=window.requestAnimationFrame,o=["ms","moz","webkit"];for(n=0;n<o.length&&!r;n++)r=window[o[n]+"RequestAnimationFrame"];r||(r=function(e){window.setTimeout(e,0)}),r(e,t)}(e,t)}).then(e)},setTimeout:ge,setInterval:pe,setEditorTimeout:function(e,t,n){return ge(function(){e.removed||t()},n)},setEditorInterval:function(e,t,n){var r;return r=pe(function(){e.removed?clearInterval(r):t()},n)},debounce:he,throttle:he,clearInterval:function(e){return clearInterval(e)},clearTimeout:function(e){return clearTimeout(e)}},be=/^(?:mouse|contextmenu)|click/,ye={keyLocation:1,layerX:1,layerY:1,returnValue:1,webkitMovementX:1,webkitMovementY:1,keyIdentifier:1},Ce=function(){return!1},xe=function(){return!0},we=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},Ne=function(e,t,n,r){e.removeEventListener?e.removeEventListener(t,n,r||!1):e.detachEvent&&e.detachEvent("on"+t,n)},Ee=function(e,t){var n,r,o=t||{};for(n in e)ye[n]||(o[n]=e[n]);if(o.target||(o.target=o.srcElement||document),de.experimentalShadowDom&&(o.target=function(e,t){if(e.composedPath){var n=e.composedPath();if(n&&0<n.length)return n[0]}return t}(e,o.target)),e&&be.test(e.type)&&e.pageX===undefined&&e.clientX!==undefined){var i=o.target.ownerDocument||document,a=i.documentElement,u=i.body;o.pageX=e.clientX+(a&&a.scrollLeft||u&&u.scrollLeft||0)-(a&&a.clientLeft||u&&u.clientLeft||0),o.pageY=e.clientY+(a&&a.scrollTop||u&&u.scrollTop||0)-(a&&a.clientTop||u&&u.clientTop||0)}return o.preventDefault=function(){o.isDefaultPrevented=xe,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},o.stopPropagation=function(){o.isPropagationStopped=xe,e&&(e.stopPropagation?e.stopPropagation():e.cancelBubble=!0)},!(o.stopImmediatePropagation=function(){o.isImmediatePropagationStopped=xe,o.stopPropagation()})==((r=o).isDefaultPrevented===xe||r.isDefaultPrevented===Ce)&&(o.isDefaultPrevented=Ce,o.isPropagationStopped=Ce,o.isImmediatePropagationStopped=Ce),"undefined"==typeof o.metaKey&&(o.metaKey=!1),o},Se=function(e,t,n){var r=e.document,o={type:"ready"};if(n.domLoaded)t(o);else{var i=function(){return"complete"===r.readyState||"interactive"===r.readyState&&r.body},a=function(){n.domLoaded||(n.domLoaded=!0,t(o))},u=function(){i()&&(Ne(r,"readystatechange",u),a())},s=function(){try{r.documentElement.doScroll("left")}catch(e){return void ve.setTimeout(s)}a()};!r.addEventListener||de.ie&&de.ie<11?(we(r,"readystatechange",u),r.documentElement.doScroll&&e.self===e.top&&s()):i()?a():we(e,"DOMContentLoaded",a),we(e,"load",a)}},ke=function(){var m,g,p,h,v,b=this,y={};g="mce-data-"+(+new Date).toString(32),h="onmouseenter"in document.documentElement,p="onfocusin"in document.documentElement,v={mouseenter:"mouseover",mouseleave:"mouseout"},m=1,b.domLoaded=!1,b.events=y;var C=function(e,t){var n,r,o,i,a=y[t];if(n=a&&a[e.type])for(r=0,o=n.length;r<o;r++)if((i=n[r])&&!1===i.func.call(i.scope,e)&&e.preventDefault(),e.isImmediatePropagationStopped())return};b.bind=function(e,t,n,r){var o,i,a,u,s,c,l,f=window,d=function(e){C(Ee(e||f.event),o)};if(e&&3!==e.nodeType&&8!==e.nodeType){for(e[g]?o=e[g]:(o=m++,e[g]=o,y[o]={}),r=r||e,a=(t=t.split(" ")).length;a--;)c=d,s=l=!1,"DOMContentLoaded"===(u=t[a])&&(u="ready"),b.domLoaded&&"ready"===u&&"complete"===e.readyState?n.call(r,Ee({type:u})):(h||(s=v[u])&&(c=function(e){var t,n;if(t=e.currentTarget,(n=e.relatedTarget)&&t.contains)n=t.contains(n);else for(;n&&n!==t;)n=n.parentNode;n||((e=Ee(e||f.event)).type="mouseout"===e.type?"mouseleave":"mouseenter",e.target=t,C(e,o))}),p||"focusin"!==u&&"focusout"!==u||(l=!0,s="focusin"===u?"focus":"blur",c=function(e){(e=Ee(e||f.event)).type="focus"===e.type?"focusin":"focusout",C(e,o)}),(i=y[o][u])?"ready"===u&&b.domLoaded?n({type:u}):i.push({func:n,scope:r}):(y[o][u]=i=[{func:n,scope:r}],i.fakeName=s,i.capture=l,i.nativeHandler=c,"ready"===u?Se(e,c,b):we(e,s||u,c,l)));return e=i=0,n}},b.unbind=function(e,t,n){var r,o,i,a,u,s;if(!e||3===e.nodeType||8===e.nodeType)return b;if(r=e[g]){if(s=y[r],t){for(i=(t=t.split(" ")).length;i--;)if(o=s[u=t[i]]){if(n)for(a=o.length;a--;)if(o[a].func===n){var c=o.nativeHandler,l=o.fakeName,f=o.capture;(o=o.slice(0,a).concat(o.slice(a+1))).nativeHandler=c,o.fakeName=l,o.capture=f,s[u]=o}n&&0!==o.length||(delete s[u],Ne(e,o.fakeName||u,o.nativeHandler,o.capture))}}else{for(u in s)o=s[u],Ne(e,o.fakeName||u,o.nativeHandler,o.capture);s={}}for(u in s)return b;delete y[r];try{delete e[g]}catch(d){e[g]=null}}return b},b.fire=function(e,t,n){var r;if(!e||3===e.nodeType||8===e.nodeType)return b;for((n=Ee(null,n)).type=t,n.target=e;(r=e[g])&&C(n,r),(e=e.parentNode||e.ownerDocument||e.defaultView||e.parentWindow)&&!n.isPropagationStopped(););return b},b.clean=function(e){var t,n,r=b.unbind;if(!e||3===e.nodeType||8===e.nodeType)return b;if(e[g]&&r(e),e.getElementsByTagName||(e=e.document),e&&e.getElementsByTagName)for(r(e),t=(n=e.getElementsByTagName("*")).length;t--;)(e=n[t])[g]&&r(e);return b},b.destroy=function(){y={}},b.cancel=function(e){return e&&(e.preventDefault(),e.stopImmediatePropagation()),!1}};ke.Event=new ke,ke.Event.bind(window,"ready",function(){});var Te,Ae,Re,_e,De,Be,Oe,Pe,Le,Ie,Me,Fe,ze,Ue,Ve,He,je,qe,$e="sizzle"+-new Date,We=window.document,Ke=0,Xe=0,Ye=Tt(),Ge=Tt(),Je=Tt(),Qe=function(e,t){return e===t&&(Me=!0),0},Ze=typeof undefined,et={}.hasOwnProperty,tt=[],nt=tt.pop,rt=tt.push,ot=tt.push,it=tt.slice,at=tt.indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(this[t]===e)return t;return-1},ut="[\\x20\\t\\r\\n\\f]",st="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ct="\\["+ut+"*("+st+")(?:"+ut+"*([*^$|!~]?=)"+ut+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+st+"))|)"+ut+"*\\]",lt=":("+st+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ct+")*)|.*)\\)|)",ft=new RegExp("^"+ut+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ut+"+$","g"),dt=new RegExp("^"+ut+"*,"+ut+"*"),mt=new RegExp("^"+ut+"*([>+~]|"+ut+")"+ut+"*"),gt=new RegExp("="+ut+"*([^\\]'\"]*?)"+ut+"*\\]","g"),pt=new RegExp(lt),ht=new RegExp("^"+st+"$"),vt={ID:new RegExp("^#("+st+")"),CLASS:new RegExp("^\\.("+st+")"),TAG:new RegExp("^("+st+"|[*])"),ATTR:new RegExp("^"+ct),PSEUDO:new RegExp("^"+lt),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ut+"*(even|odd|(([+-]|)(\\d*)n|)"+ut+"*(?:([+-]|)"+ut+"*(\\d+)|))"+ut+"*\\)|)","i"),bool:new RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$","i"),needsContext:new RegExp("^"+ut+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ut+"*((?:-\\d)?\\d*)"+ut+"*\\)|)(?=[^-]|$)","i")},bt=/^(?:input|select|textarea|button)$/i,yt=/^h\d$/i,Ct=/^[^{]+\{\s*\[native \w/,xt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,wt=/[+~]/,Nt=/'|\\/g,Et=new RegExp("\\\\([\\da-f]{1,6}"+ut+"?|("+ut+")|.)","ig"),St=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)};try{ot.apply(tt=it.call(We.childNodes),We.childNodes),tt[We.childNodes.length].nodeType}catch(LN){ot={apply:tt.length?function(e,t){rt.apply(e,it.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}var kt=function(e,t,n,r){var o,i,a,u,s,c,l,f,d,m;if((t?t.ownerDocument||t:We)!==ze&&Fe(t),n=n||[],!e||"string"!=typeof e)return n;if(1!==(u=(t=t||ze).nodeType)&&9!==u)return[];if(Ve&&!r){if(o=xt.exec(e))if(a=o[1]){if(9===u){if(!(i=t.getElementById(a))||!i.parentNode)return n;if(i.id===a)return n.push(i),n}else if(t.ownerDocument&&(i=t.ownerDocument.getElementById(a))&&qe(t,i)&&i.id===a)return n.push(i),n}else{if(o[2])return ot.apply(n,t.getElementsByTagName(e)),n;if((a=o[3])&&Ae.getElementsByClassName)return ot.apply(n,t.getElementsByClassName(a)),n}if(Ae.qsa&&(!He||!He.test(e))){if(f=l=$e,d=t,m=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){for(c=Be(e),(l=t.getAttribute("id"))?f=l.replace(Nt,"\\$&"):t.setAttribute("id",f),f="[id='"+f+"'] ",s=c.length;s--;)c[s]=f+Lt(c[s]);d=wt.test(e)&&Ot(t.parentNode)||t,m=c.join(",")}if(m)try{return ot.apply(n,d.querySelectorAll(m)),n}catch(g){}finally{l||t.removeAttribute("id")}}}return Pe(e.replace(ft,"$1"),t,n,r)};function Tt(){var r=[];return function e(t,n){return r.push(t+" ")>Re.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function At(e){return e[$e]=!0,e}function Rt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||1<<31)-(~e.sourceIndex||1<<31);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function _t(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function Dt(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function Bt(a){return At(function(i){return i=+i,At(function(e,t){for(var n,r=a([],e.length,i),o=r.length;o--;)e[n=r[o]]&&(e[n]=!(t[n]=e[n]))})})}function Ot(e){return e&&typeof e.getElementsByTagName!==Ze&&e}for(Te in Ae=kt.support={},De=kt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},Fe=kt.setDocument=function(e){var t,s=e?e.ownerDocument||e:We,n=s.defaultView;return s!==ze&&9===s.nodeType&&s.documentElement?(Ue=(ze=s).documentElement,Ve=!De(s),n&&n!==function(e){try{return e.top}catch(t){}return null}(n)&&(n.addEventListener?n.addEventListener("unload",function(){Fe()},!1):n.attachEvent&&n.attachEvent("onunload",function(){Fe()})),Ae.attributes=!0,Ae.getElementsByTagName=!0,Ae.getElementsByClassName=Ct.test(s.getElementsByClassName),Ae.getById=!0,Re.find.ID=function(e,t){if(typeof t.getElementById!==Ze&&Ve){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},Re.filter.ID=function(e){var t=e.replace(Et,St);return function(e){return e.getAttribute("id")===t}},Re.find.TAG=Ae.getElementsByTagName?function(e,t){if(typeof t.getElementsByTagName!==Ze)return t.getElementsByTagName(e)}:function(e,t){var n,r=[],o=0,i=t.getElementsByTagName(e);if("*"===e){for(;n=i[o++];)1===n.nodeType&&r.push(n);return r}return i},Re.find.CLASS=Ae.getElementsByClassName&&function(e,t){if(Ve)return t.getElementsByClassName(e)},je=[],He=[],Ae.disconnectedMatch=!0,He=He.length&&new RegExp(He.join("|")),je=je.length&&new RegExp(je.join("|")),t=Ct.test(Ue.compareDocumentPosition),qe=t||Ct.test(Ue.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},Qe=t?function(e,t){if(e===t)return Me=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!Ae.sortDetached&&t.compareDocumentPosition(e)===n?e===s||e.ownerDocument===We&&qe(We,e)?-1:t===s||t.ownerDocument===We&&qe(We,t)?1:Ie?at.call(Ie,e)-at.call(Ie,t):0:4&n?-1:1)}:function(e,t){if(e===t)return Me=!0,0;var n,r=0,o=e.parentNode,i=t.parentNode,a=[e],u=[t];if(!o||!i)return e===s?-1:t===s?1:o?-1:i?1:Ie?at.call(Ie,e)-at.call(Ie,t):0;if(o===i)return Rt(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)u.unshift(n);for(;a[r]===u[r];)r++;return r?Rt(a[r],u[r]):a[r]===We?-1:u[r]===We?1:0},s):ze},kt.matches=function(e,t){return kt(e,null,null,t)},kt.matchesSelector=function(e,t){if((e.ownerDocument||e)!==ze&&Fe(e),t=t.replace(gt,"='$1']"),Ae.matchesSelector&&Ve&&(!je||!je.test(t))&&(!He||!He.test(t)))try{var n=(void 0).call(e,t);if(n||Ae.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(LN){}return 0<kt(t,ze,null,[e]).length},kt.contains=function(e,t){return(e.ownerDocument||e)!==ze&&Fe(e),qe(e,t)},kt.attr=function(e,t){(e.ownerDocument||e)!==ze&&Fe(e);var n=Re.attrHandle[t.toLowerCase()],r=n&&et.call(Re.attrHandle,t.toLowerCase())?n(e,t,!Ve):undefined;return r!==undefined?r:Ae.attributes||!Ve?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},kt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},kt.uniqueSort=function(e){var t,n=[],r=0,o=0;if(Me=!Ae.detectDuplicates,Ie=!Ae.sortStable&&e.slice(0),e.sort(Qe),Me){for(;t=e[o++];)t===e[o]&&(r=n.push(o));for(;r--;)e.splice(n[r],1)}return Ie=null,e},_e=kt.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=_e(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=_e(t);return n},(Re=kt.selectors={cacheLength:50,createPseudo:At,match:vt,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Et,St),e[3]=(e[3]||e[4]||e[5]||"").replace(Et,St),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||kt.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&kt.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return vt.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&pt.test(n)&&(t=Be(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Et,St).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=Ye[e+" "];return t||(t=new RegExp("(^|"+ut+")"+e+"("+ut+"|$)"))&&Ye(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==Ze&&e.getAttribute("class")||"")})},ATTR:function(n,r,o){return function(e){var t=kt.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===o:"!="===r?t!==o:"^="===r?o&&0===t.indexOf(o):"*="===r?o&&-1<t.indexOf(o):"$="===r?o&&t.slice(-o.length)===o:"~="===r?-1<(" "+t+" ").indexOf(o):"|="===r&&(t===o||t.slice(0,o.length+1)===o+"-"))}},CHILD:function(m,e,t,g,p){var h="nth"!==m.slice(0,3),v="last"!==m.slice(-4),b="of-type"===e;return 1===g&&0===p?function(e){return!!e.parentNode}:function(e,t,n){var r,o,i,a,u,s,c=h!==v?"nextSibling":"previousSibling",l=e.parentNode,f=b&&e.nodeName.toLowerCase(),d=!n&&!b;if(l){if(h){for(;c;){for(i=e;i=i[c];)if(b?i.nodeName.toLowerCase()===f:1===i.nodeType)return!1;s=c="only"===m&&!s&&"nextSibling"}return!0}if(s=[v?l.firstChild:l.lastChild],v&&d){for(u=(r=(o=l[$e]||(l[$e]={}))[m]||[])[0]===Ke&&r[1],a=r[0]===Ke&&r[2],i=u&&l.childNodes[u];i=++u&&i&&i[c]||(a=u=0)||s.pop();)if(1===i.nodeType&&++a&&i===e){o[m]=[Ke,u,a];break}}else if(d&&(r=(e[$e]||(e[$e]={}))[m])&&r[0]===Ke)a=r[1];else for(;(i=++u&&i&&i[c]||(a=u=0)||s.pop())&&((b?i.nodeName.toLowerCase()!==f:1!==i.nodeType)||!++a||(d&&((i[$e]||(i[$e]={}))[m]=[Ke,a]),i!==e)););return(a-=p)===g||a%g==0&&0<=a/g}}},PSEUDO:function(e,i){var t,a=Re.pseudos[e]||Re.setFilters[e.toLowerCase()]||kt.error("unsupported pseudo: "+e);return a[$e]?a(i):1<a.length?(t=[e,e,"",i],Re.setFilters.hasOwnProperty(e.toLowerCase())?At(function(e,t){for(var n,r=a(e,i),o=r.length;o--;)e[n=at.call(e,r[o])]=!(t[n]=r[o])}):function(e){return a(e,0,t)}):a}},pseudos:{not:At(function(e){var r=[],o=[],u=Oe(e.replace(ft,"$1"));return u[$e]?At(function(e,t,n,r){for(var o,i=u(e,null,r,[]),a=e.length;a--;)(o=i[a])&&(e[a]=!(t[a]=o))}):function(e,t,n){return r[0]=e,u(r,null,n,o),!o.pop()}}),has:At(function(t){return function(e){return 0<kt(t,e).length}}),contains:At(function(t){return t=t.replace(Et,St),function(e){return-1<(e.textContent||e.innerText||_e(e)).indexOf(t)}}),lang:At(function(n){return ht.test(n||"")||kt.error("unsupported lang: "+n),n=n.replace(Et,St).toLowerCase(),function(e){var t;do{if(t=Ve?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=window.location&&window.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===Ue},focus:function(e){return e===ze.activeElement&&(!ze.hasFocus||ze.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!Re.pseudos.empty(e)},header:function(e){return yt.test(e.nodeName)},input:function(e){return bt.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:Bt(function(){return[0]}),last:Bt(function(e,t){return[t-1]}),eq:Bt(function(e,t,n){return[n<0?n+t:n]}),even:Bt(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:Bt(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:Bt(function(e,t,n){for(var r=n<0?n+t:n;0<=--r;)e.push(r);return e}),gt:Bt(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=Re.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})Re.pseudos[Te]=_t(Te);for(Te in{submit:!0,reset:!0})Re.pseudos[Te]=Dt(Te);function Pt(){}function Lt(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function It(a,e,t){var u=e.dir,s=t&&"parentNode"===u,c=Xe++;return e.first?function(e,t,n){for(;e=e[u];)if(1===e.nodeType||s)return a(e,t,n)}:function(e,t,n){var r,o,i=[Ke,c];if(n){for(;e=e[u];)if((1===e.nodeType||s)&&a(e,t,n))return!0}else for(;e=e[u];)if(1===e.nodeType||s){if((r=(o=e[$e]||(e[$e]={}))[u])&&r[0]===Ke&&r[1]===c)return i[2]=r[2];if((o[u]=i)[2]=a(e,t,n))return!0}}}function Mt(o){return 1<o.length?function(e,t,n){for(var r=o.length;r--;)if(!o[r](e,t,n))return!1;return!0}:o[0]}function Ft(e,t,n,r,o){for(var i,a=[],u=0,s=e.length,c=null!=t;u<s;u++)(i=e[u])&&(n&&!n(i,r,o)||(a.push(i),c&&t.push(u)));return a}function zt(m,g,p,h,v,e){return h&&!h[$e]&&(h=zt(h)),v&&!v[$e]&&(v=zt(v,e)),At(function(e,t,n,r){var o,i,a,u=[],s=[],c=t.length,l=e||function(e,t,n){for(var r=0,o=t.length;r<o;r++)kt(e,t[r],n);return n}(g||"*",n.nodeType?[n]:n,[]),f=!m||!e&&g?l:Ft(l,u,m,n,r),d=p?v||(e?m:c||h)?[]:t:f;if(p&&p(f,d,n,r),h)for(o=Ft(d,s),h(o,[],n,r),i=o.length;i--;)(a=o[i])&&(d[s[i]]=!(f[s[i]]=a));if(e){if(v||m){if(v){for(o=[],i=d.length;i--;)(a=d[i])&&o.push(f[i]=a);v(null,d=[],o,r)}for(i=d.length;i--;)(a=d[i])&&-1<(o=v?at.call(e,a):u[i])&&(e[o]=!(t[o]=a))}}else d=Ft(d===t?d.splice(c,d.length):d),v?v(null,t,d,r):ot.apply(t,d)})}function Ut(e){for(var r,t,n,o=e.length,i=Re.relative[e[0].type],a=i||Re.relative[" "],u=i?1:0,s=It(function(e){return e===r},a,!0),c=It(function(e){return-1<at.call(r,e)},a,!0),l=[function(e,t,n){return!i&&(n||t!==Le)||((r=t).nodeType?s(e,t,n):c(e,t,n))}];u<o;u++)if(t=Re.relative[e[u].type])l=[It(Mt(l),t)];else{if((t=Re.filter[e[u].type].apply(null,e[u].matches))[$e]){for(n=++u;n<o&&!Re.relative[e[n].type];n++);return zt(1<u&&Mt(l),1<u&&Lt(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(ft,"$1"),t,u<n&&Ut(e.slice(u,n)),n<o&&Ut(e=e.slice(n)),n<o&&Lt(e))}l.push(t)}return Mt(l)}Pt.prototype=Re.filters=Re.pseudos,Re.setFilters=new Pt,Be=kt.tokenize=function(e,t){var n,r,o,i,a,u,s,c=Ge[e+" "];if(c)return t?0:c.slice(0);for(a=e,u=[],s=Re.preFilter;a;){for(i in n&&!(r=dt.exec(a))||(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=mt.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(ft," ")}),a=a.slice(n.length)),Re.filter)!(r=vt[i].exec(a))||s[i]&&!(r=s[i](r))||(n=r.shift(),o.push({value:n,type:i,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?kt.error(e):Ge(e,u).slice(0)},Oe=kt.compile=function(e,t){var n,h,v,b,y,r,o=[],i=[],a=Je[e+" "];if(!a){for(t||(t=Be(e)),n=t.length;n--;)(a=Ut(t[n]))[$e]?o.push(a):i.push(a);(a=Je(e,(h=i,b=0<(v=o).length,y=0<h.length,r=function(e,t,n,r,o){var i,a,u,s=0,c="0",l=e&&[],f=[],d=Le,m=e||y&&Re.find.TAG("*",o),g=Ke+=null==d?1:Math.random()||.1,p=m.length;for(o&&(Le=t!==ze&&t);c!==p&&null!=(i=m[c]);c++){if(y&&i){for(a=0;u=h[a++];)if(u(i,t,n)){r.push(i);break}o&&(Ke=g)}b&&((i=!u&&i)&&s--,e&&l.push(i))}if(s+=c,b&&c!==s){for(a=0;u=v[a++];)u(l,f,t,n);if(e){if(0<s)for(;c--;)l[c]||f[c]||(f[c]=nt.call(r));f=Ft(f)}ot.apply(r,f),o&&!e&&0<f.length&&1<s+v.length&&kt.uniqueSort(r)}return o&&(Ke=g,Le=d),l},b?At(r):r))).selector=e}return a},Pe=kt.select=function(e,t,n,r){var o,i,a,u,s,c="function"==typeof e&&e,l=!r&&Be(e=c.selector||e);if(n=n||[],1===l.length){if(2<(i=l[0]=l[0].slice(0)).length&&"ID"===(a=i[0]).type&&Ae.getById&&9===t.nodeType&&Ve&&Re.relative[i[1].type]){if(!(t=(Re.find.ID(a.matches[0].replace(Et,St),t)||[])[0]))return n;c&&(t=t.parentNode),e=e.slice(i.shift().value.length)}for(o=vt.needsContext.test(e)?0:i.length;o--&&(a=i[o],!Re.relative[u=a.type]);)if((s=Re.find[u])&&(r=s(a.matches[0].replace(Et,St),wt.test(i[0].type)&&Ot(t.parentNode)||t))){if(i.splice(o,1),!(e=r.length&&Lt(i)))return ot.apply(n,r),n;break}}return(c||Oe(e,l))(r,t,!Ve,n,wt.test(e)&&Ot(t.parentNode)||t),n},Ae.sortStable=$e.split("").sort(Qe).join("")===$e,Ae.detectDuplicates=!!Me,Fe(),Ae.sortDetached=!0;var Vt=Array.isArray,Ht=function(e,t,n){var r,o;if(!e)return 0;if(n=n||e,e.length!==undefined){for(r=0,o=e.length;r<o;r++)if(!1===t.call(n,e[r],r,e))return 0}else for(r in e)if(e.hasOwnProperty(r)&&!1===t.call(n,e[r],r,e))return 0;return 1},jt=function(e,t,n){var r,o;for(r=0,o=e.length;r<o;r++)if(t.call(n,e[r],r,e))return r;return-1},qt={isArray:Vt,toArray:function(e){var t,n,r=e;if(!Vt(e))for(r=[],t=0,n=e.length;t<n;t++)r[t]=e[t];return r},each:Ht,map:function(n,r){var o=[];return Ht(n,function(e,t){o.push(r(e,t,n))}),o},filter:function(n,r){var o=[];return Ht(n,function(e,t){r&&!r(e,t,n)||o.push(e)}),o},indexOf:function(e,t){var n,r;if(e)for(n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},reduce:function(e,t,n,r){var o=0;for(arguments.length<3&&(n=e[0]);o<e.length;o++)n=t.call(r,n,e[o],o);return n},findIndex:jt,find:function(e,t,n){var r=jt(e,t,n);return-1!==r?e[r]:undefined},last:function(e){return e[e.length-1]}},$t=/^\s*|\s*$/g,Wt=function(e){return null===e||e===undefined?"":(""+e).replace($t,"")},Kt=function(e,t){return t?!("array"!==t||!qt.isArray(e))||typeof e===t:e!==undefined},Xt=function(e,n,r,o){o=o||this,e&&(r&&(e=e[r]),qt.each(e,function(e,t){if(!1===n.call(o,e,t,r))return!1;Xt(e,n,r,o)}))},Yt={trim:Wt,isArray:qt.isArray,is:Kt,toArray:qt.toArray,makeMap:function(e,t,n){var r;for(t=t||",","string"==typeof(e=e||[])&&(e=e.split(t)),n=n||{},r=e.length;r--;)n[e[r]]={};return n},each:qt.each,map:qt.map,grep:qt.filter,inArray:qt.indexOf,hasOwn:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},extend:function(e,t){for(var n,r,o,i=[],a=2;a<arguments.length;a++)i[a-2]=arguments[a];var u,s=arguments;for(n=1,r=s.length;n<r;n++)for(o in t=s[n])t.hasOwnProperty(o)&&(u=t[o])!==undefined&&(e[o]=u);return e},create:function(e,t,n){var r,o,i,a,u,s=this,c=0;if(e=/^((static) )?([\w.]+)(:([\w.]+))?/.exec(e),i=e[3].match(/(^|\.)(\w+)$/i)[2],!(o=s.createNS(e[3].replace(/\.\w+$/,""),n))[i]){if("static"===e[2])return o[i]=t,void(this.onCreate&&this.onCreate(e[2],e[3],o[i]));t[i]||(t[i]=function(){},c=1),o[i]=t[i],s.extend(o[i].prototype,t),e[5]&&(r=s.resolve(e[5]).prototype,a=e[5].match(/\.(\w+)$/i)[1],u=o[i],o[i]=c?function(){return r[a].apply(this,arguments)}:function(){return this.parent=r[a],u.apply(this,arguments)},o[i].prototype[i]=o[i],s.each(r,function(e,t){o[i].prototype[t]=r[t]}),s.each(t,function(e,t){r[t]?o[i].prototype[t]=function(){return this.parent=r[t],e.apply(this,arguments)}:t!==i&&(o[i].prototype[t]=e)})),s.each(t["static"],function(e,t){o[i][t]=e})}},walk:Xt,createNS:function(e,t){var n,r;for(t=t||window,e=e.split("."),n=0;n<e.length;n++)t[r=e[n]]||(t[r]={}),t=t[r];return t},resolve:function(e,t){var n,r;for(t=t||window,n=0,r=(e=e.split(".")).length;n<r&&(t=t[e[n]]);n++);return t},explode:function(e,t){return!e||Kt(e,"array")?e:qt.map(e.split(t||","),Wt)},_addCacheSuffix:function(e){var t=de.cacheSuffix;return t&&(e+=(-1===e.indexOf("?")?"?":"&")+t),e}},Gt=document,Jt=Array.prototype.push,Qt=Array.prototype.slice,Zt=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,en=ke.Event,tn=Yt.makeMap("children,contents,next,prev"),nn=function(e){return void 0!==e},rn=function(e){return"string"==typeof e},on=function(e,t){var n,r,o;for(o=(t=t||Gt).createElement("div"),n=t.createDocumentFragment(),o.innerHTML=e;r=o.firstChild;)n.appendChild(r);return n},an=function(e,t,n,r){var o;if(rn(t))t=on(t,Cn(e[0]));else if(t.length&&!t.nodeType){if(t=pn.makeArray(t),r)for(o=t.length-1;0<=o;o--)an(e,t[o],n,r);else for(o=0;o<t.length;o++)an(e,t[o],n,r);return e}if(t.nodeType)for(o=e.length;o--;)n.call(e[o],t);return e},un=function(e,t){return e&&t&&-1!==(" "+e.className+" ").indexOf(" "+t+" ")},sn=function(e,t,n){var r,o;return t=pn(t)[0],e.each(function(){var e=this;n&&r===e.parentNode||(r=e.parentNode,o=t.cloneNode(!1),e.parentNode.insertBefore(o,e)),o.appendChild(e)}),e},cn=Yt.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom"," "),ln=Yt.makeMap("checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected"," "),fn={"for":"htmlFor","class":"className",readonly:"readOnly"},dn={"float":"cssFloat"},mn={},gn={},pn=function(e,t){return new pn.fn.init(e,t)},hn=/^\s*|\s*$/g,vn=function(e){return null===e||e===undefined?"":(""+e).replace(hn,"")},bn=function(e,t){var n,r,o,i;if(e)if((n=e.length)===undefined){for(r in e)if(e.hasOwnProperty(r)&&(i=e[r],!1===t.call(i,r,i)))break}else for(o=0;o<n&&(i=e[o],!1!==t.call(i,o,i));o++);return e},yn=function(e,n){var r=[];return bn(e,function(e,t){n(t,e)&&r.push(t)}),r},Cn=function(e){return e?9===e.nodeType?e:e.ownerDocument:Gt};pn.fn=pn.prototype={constructor:pn,selector:"",context:null,length:0,init:function(e,t){var n,r,o=this;if(!e)return o;if(e.nodeType)return o.context=o[0]=e,o.length=1,o;if(t&&t.nodeType)o.context=t;else{if(t)return pn(e).attr(t);o.context=t=document}if(rn(e)){if(!(n="<"===(o.selector=e).charAt(0)&&">"===e.charAt(e.length-1)&&3<=e.length?[null,e,null]:Zt.exec(e)))return pn(t).find(e);if(n[1])for(r=on(e,Cn(t)).firstChild;r;)Jt.call(o,r),r=r.nextSibling;else{if(!(r=Cn(t).getElementById(n[2])))return o;if(r.id!==n[2])return o.find(e);o.length=1,o[0]=r}}else this.add(e,!1);return o},toArray:function(){return Yt.toArray(this)},add:function(e,t){var n,r,o=this;if(rn(e))return o.add(pn(e));if(!1!==t)for(n=pn.unique(o.toArray().concat(pn.makeArray(e))),o.length=n.length,r=0;r<n.length;r++)o[r]=n[r];else Jt.apply(o,pn.makeArray(e));return o},attr:function(t,n){var e,r=this;if("object"==typeof t)bn(t,function(e,t){r.attr(e,t)});else{if(!nn(n)){if(r[0]&&1===r[0].nodeType){if((e=mn[t])&&e.get)return e.get(r[0],t);if(ln[t])return r.prop(t)?t:undefined;null===(n=r[0].getAttribute(t,2))&&(n=undefined)}return n}this.each(function(){var e;if(1===this.nodeType){if((e=mn[t])&&e.set)return void e.set(this,n);null===n?this.removeAttribute(t,2):this.setAttribute(t,n,2)}})}return r},removeAttr:function(e){return this.attr(e,null)},prop:function(e,t){var n=this;if("object"==typeof(e=fn[e]||e))bn(e,function(e,t){n.prop(e,t)});else{if(!nn(t))return n[0]&&n[0].nodeType&&e in n[0]?n[0][e]:t;this.each(function(){1===this.nodeType&&(this[e]=t)})}return n},css:function(n,r){var e,o,i=this,t=function(e){return e.replace(/-(\D)/g,function(e,t){return t.toUpperCase()})},a=function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e})};if("object"==typeof n)bn(n,function(e,t){i.css(e,t)});else if(nn(r))n=t(n),"number"!=typeof r||cn[n]||(r=r.toString()+"px"),i.each(function(){var e=this.style;if((o=gn[n])&&o.set)o.set(this,r);else{try{this.style[dn[n]||n]=r}catch(t){}null!==r&&""!==r||(e.removeProperty?e.removeProperty(a(n)):e.removeAttribute(n))}});else{if(e=i[0],(o=gn[n])&&o.get)return o.get(e);if(!e.ownerDocument.defaultView)return e.currentStyle?e.currentStyle[t(n)]:"";try{return e.ownerDocument.defaultView.getComputedStyle(e,null).getPropertyValue(a(n))}catch(u){return undefined}}return i},remove:function(){for(var e,t=this.length;t--;)e=this[t],en.clean(e),e.parentNode&&e.parentNode.removeChild(e);return this},empty:function(){for(var e,t=this.length;t--;)for(e=this[t];e.firstChild;)e.removeChild(e.firstChild);return this},html:function(e){var t,n=this;if(nn(e)){t=n.length;try{for(;t--;)n[t].innerHTML=e}catch(r){pn(n[t]).empty().append(e)}return n}return n[0]?n[0].innerHTML:""},text:function(e){var t,n=this;if(nn(e)){for(t=n.length;t--;)"innerText"in n[t]?n[t].innerText=e:n[0].textContent=e;return n}return n[0]?n[0].innerText||n[0].textContent:""},append:function(){return an(this,arguments,function(e){(1===this.nodeType||this.host&&1===this.host.nodeType)&&this.appendChild(e)})},prepend:function(){return an(this,arguments,function(e){(1===this.nodeType||this.host&&1===this.host.nodeType)&&this.insertBefore(e,this.firstChild)},!0)},before:function(){return this[0]&&this[0].parentNode?an(this,arguments,function(e){this.parentNode.insertBefore(e,this)}):this},after:function(){return this[0]&&this[0].parentNode?an(this,arguments,function(e){this.parentNode.insertBefore(e,this.nextSibling)},!0):this},appendTo:function(e){return pn(e).append(this),this},prependTo:function(e){return pn(e).prepend(this),this},replaceWith:function(e){return this.before(e).remove()},wrap:function(e){return sn(this,e)},wrapAll:function(e){return sn(this,e,!0)},wrapInner:function(e){return this.each(function(){pn(this).contents().wrapAll(e)}),this},unwrap:function(){return this.parent().each(function(){pn(this).replaceWith(this.childNodes)})},clone:function(){var e=[];return this.each(function(){e.push(this.cloneNode(!0))}),pn(e)},addClass:function(e){return this.toggleClass(e,!0)},removeClass:function(e){return this.toggleClass(e,!1)},toggleClass:function(o,i){var e=this;return"string"!=typeof o||(-1!==o.indexOf(" ")?bn(o.split(" "),function(){e.toggleClass(this,i)}):e.each(function(e,t){var n,r;(r=un(t,o))!==i&&(n=t.className,r?t.className=vn((" "+n+" ").replace(" "+o+" "," ")):t.className+=n?" "+o:o)})),e},hasClass:function(e){return un(this[0],e)},each:function(e){return bn(this,e)},on:function(e,t){return this.each(function(){en.bind(this,e,t)})},off:function(e,t){return this.each(function(){en.unbind(this,e,t)})},trigger:function(e){return this.each(function(){"object"==typeof e?en.fire(this,e.type,e):en.fire(this,e)})},show:function(){return this.css("display","")},hide:function(){return this.css("display","none")},slice:function(){return new pn(Qt.apply(this,arguments))},eq:function(e){return-1===e?this.slice(e):this.slice(e,+e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},find:function(e){var t,n,r=[];for(t=0,n=this.length;t<n;t++)pn.find(e,this[t],r);return pn(r)},filter:function(n){return pn("function"==typeof n?yn(this.toArray(),function(e,t){return n(t,e)}):pn.filter(n,this.toArray()))},closest:function(n){var r=[];return n instanceof pn&&(n=n[0]),this.each(function(e,t){for(;t;){if("string"==typeof n&&pn(t).is(n)){r.push(t);break}if(t===n){r.push(t);break}t=t.parentNode}}),pn(r)},offset:function(e){var t,n,r,o,i=0,a=0;return e?this.css(e):((t=this[0])&&(r=(n=t.ownerDocument).documentElement,t.getBoundingClientRect&&(i=(o=t.getBoundingClientRect()).left+(r.scrollLeft||n.body.scrollLeft)-r.clientLeft,a=o.top+(r.scrollTop||n.body.scrollTop)-r.clientTop)),{left:i,top:a})},push:Jt,sort:[].sort,splice:[].splice},Yt.extend(pn,{extend:Yt.extend,makeArray:function(e){return(t=e)&&t===t.window||e.nodeType?[e]:Yt.toArray(e);var t},inArray:function(e,t){var n;if(t.indexOf)return t.indexOf(e);for(n=t.length;n--;)if(t[n]===e)return n;return-1},isArray:Yt.isArray,each:bn,trim:vn,grep:yn,find:kt,expr:kt.selectors,unique:kt.uniqueSort,text:kt.getText,contains:kt.contains,filter:function(e,t,n){var r=t.length;for(n&&(e=":not("+e+")");r--;)1!==t[r].nodeType&&t.splice(r,1);return t=1===t.length?pn.find.matchesSelector(t[0],e)?[t[0]]:[]:pn.find.matches(e,t)}});var xn=function(e,t,n){var r=[],o=e[t];for("string"!=typeof n&&n instanceof pn&&(n=n[0]);o&&9!==o.nodeType;){if(n!==undefined){if(o===n)break;if("string"==typeof n&&pn(o).is(n))break}1===o.nodeType&&r.push(o),o=o[t]}return r},wn=function(e,t,n,r){var o=[];for(r instanceof pn&&(r=r[0]);e;e=e[t])if(!n||e.nodeType===n){if(r!==undefined){if(e===r)break;if("string"==typeof r&&pn(e).is(r))break}o.push(e)}return o},Nn=function(e,t,n){for(e=e[t];e;e=e[t])if(e.nodeType===n)return e;return null};bn({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return xn(e,"parentNode")},next:function(e){return Nn(e,"nextSibling",1)},prev:function(e){return Nn(e,"previousSibling",1)},children:function(e){return wn(e.firstChild,"nextSibling",1)},contents:function(e){return Yt.toArray(("iframe"===e.nodeName?e.contentDocument||e.contentWindow.document:e).childNodes)}},function(e,r){pn.fn[e]=function(t){var n=[];return this.each(function(){var e=r.call(n,this,t,n);e&&(pn.isArray(e)?n.push.apply(n,e):n.push(e))}),1<this.length&&(tn[e]||(n=pn.unique(n)),0===e.indexOf("parents")&&(n=n.reverse())),n=pn(n),t?n.filter(t):n}}),bn({parentsUntil:function(e,t){return xn(e,"parentNode",t)},nextUntil:function(e,t){return wn(e,"nextSibling",1,t).slice(1)},prevUntil:function(e,t){return wn(e,"previousSibling",1,t).slice(1)}},function(r,o){pn.fn[r]=function(t,e){var n=[];return this.each(function(){var e=o.call(n,this,t,n);e&&(pn.isArray(e)?n.push.apply(n,e):n.push(e))}),1<this.length&&(n=pn.unique(n),0!==r.indexOf("parents")&&"prevUntil"!==r||(n=n.reverse())),n=pn(n),e?n.filter(e):n}}),pn.fn.is=function(e){return!!e&&0<this.filter(e).length},pn.fn.init.prototype=pn.fn,pn.overrideDefaults=function(n){var r,o=function(e,t){return r=r||n(),0===arguments.length&&(e=r.element),t||(t=r.context),new o.fn.init(e,t)};return pn.extend(o,this),o};var En=function(n,r,e){bn(e,function(e,t){n[e]=n[e]||{},n[e][r]=t})};de.ie&&de.ie<8&&(En(mn,"get",{maxlength:function(e){var t=e.maxLength;return 2147483647===t?undefined:t},size:function(e){var t=e.size;return 20===t?undefined:t},"class":function(e){return e.className},style:function(e){var t=e.style.cssText;return 0===t.length?undefined:t}}),En(mn,"set",{"class":function(e,t){e.className=t},style:function(e,t){e.style.cssText=t}})),de.ie&&de.ie<9&&(dn["float"]="styleFloat",En(gn,"set",{opacity:function(e,t){var n=e.style;null===t||""===t?n.removeAttribute("filter"):(n.zoom=1,n.filter="alpha(opacity="+100*t+")")}})),pn.attrHooks=mn,pn.cssHooks=gn;var Sn,kn,Tn,An=function(e,t){var n=function(e,t){for(var n=0;n<e.length;n++){var r=e[n];if(r.test(t))return r}return undefined}(e,t);if(!n)return{major:0,minor:0};var r=function(e){return Number(t.replace(n,"$"+e))};return _n(r(1),r(2))},Rn=function(){return _n(0,0)},_n=function(e,t){return{major:e,minor:t}},Dn={nu:_n,detect:function(e,t){var n=String(t).toLowerCase();return 0===e.length?Rn():An(e,n)},unknown:Rn},Bn="Firefox",On=function(e,t){return function(){return t===e}},Pn=function(e){var t=e.current;return{current:t,version:e.version,isEdge:On("Edge",t),isChrome:On("Chrome",t),isIE:On("IE",t),isOpera:On("Opera",t),isFirefox:On(Bn,t),isSafari:On("Safari",t)}},Ln={unknown:function(){return Pn({current:undefined,version:Dn.unknown()})},nu:Pn,edge:j("Edge"),chrome:j("Chrome"),ie:j("IE"),opera:j("Opera"),firefox:j(Bn),safari:j("Safari")},In="Windows",Mn="Android",Fn="Solaris",zn="FreeBSD",Un=function(e,t){return function(){return t===e}},Vn=function(e){var t=e.current;return{current:t,version:e.version,isWindows:Un(In,t),isiOS:Un("iOS",t),isAndroid:Un(Mn,t),isOSX:Un("OSX",t),isLinux:Un("Linux",t),isSolaris:Un(Fn,t),isFreeBSD:Un(zn,t)}},Hn={unknown:function(){return Vn({current:undefined,version:Dn.unknown()})},nu:Vn,windows:j(In),ios:j("iOS"),android:j(Mn),linux:j("Linux"),osx:j("OSX"),solaris:j(Fn),freebsd:j(zn)},jn=function(e,t){var n=String(t).toLowerCase();return V(e,function(e){return e.search(n)})},qn=function(e,n){return jn(e,n).map(function(e){var t=Dn.detect(e.versionRegexes,n);return{current:e.name,version:t}})},$n=function(e,n){return jn(e,n).map(function(e){var t=Dn.detect(e.versionRegexes,n);return{current:e.name,version:t}})},Wn=function(e,t){return-1!==e.indexOf(t)},Kn=function(e){return e.replace(/^\s+|\s+$/g,"")},Xn=function(e){return e.replace(/\s+$/g,"")},Yn=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,Gn=function(t){return function(e){return Wn(e,t)}},Jn=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){return Wn(e,"edge/")&&Wn(e,"chrome")&&Wn(e,"safari")&&Wn(e,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,Yn],search:function(e){return Wn(e,"chrome")&&!Wn(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return Wn(e,"msie")||Wn(e,"trident")}},{name:"Opera",versionRegexes:[Yn,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:Gn("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:Gn("firefox")},{name:"Safari",versionRegexes:[Yn,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(Wn(e,"safari")||Wn(e,"mobile/"))&&Wn(e,"applewebkit")}}],Qn=[{name:"Windows",search:Gn("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return Wn(e,"iphone")||Wn(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:Gn("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:Gn("os x"),versionRegexes:[/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:Gn("linux"),versionRegexes:[]},{name:"Solaris",search:Gn("sunos"),versionRegexes:[]},{name:"FreeBSD",search:Gn("freebsd"),versionRegexes:[]}],Zn={browsers:j(Jn),oses:j(Qn)},er=function(e){var t,n,r,o,i,a,u,s,c,l,f,d=Zn.browsers(),m=Zn.oses(),g=qn(d,e).fold(Ln.unknown,Ln.nu),p=$n(m,e).fold(Hn.unknown,Hn.nu);return{browser:g,os:p,deviceType:(n=g,r=e,o=(t=p).isiOS()&&!0===/ipad/i.test(r),i=t.isiOS()&&!o,a=t.isAndroid()&&3===t.version.major,u=t.isAndroid()&&4===t.version.major,s=o||a||u&&!0===/mobile/i.test(r),c=t.isiOS()||t.isAndroid(),l=c&&!s,f=n.isSafari()&&t.isiOS()&&!1===/safari/i.test(r),{isiPad:j(o),isiPhone:j(i),isTablet:j(s),isPhone:j(l),isTouch:j(c),isAndroid:t.isAndroid,isiOS:t.isiOS,isWebView:j(f)})}},tr={detect:(Sn=function(){var e=navigator.userAgent;return er(e)},Tn=!1,function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Tn||(Tn=!0,kn=Sn.apply(null,e)),kn})},nr=function(e){if(null===e||e===undefined)throw new Error("Node cannot be null or undefined");return{dom:j(e)}},rr={fromHtml:function(e,t){var n=(t||document).createElement("div");if(n.innerHTML=e,!n.hasChildNodes()||1<n.childNodes.length)throw console.error("HTML does not have a single root node",e),"HTML must have a single root node";return nr(n.childNodes[0])},fromTag:function(e,t){var n=(t||document).createElement(e);return nr(n)},fromText:function(e,t){var n=(t||document).createTextNode(e);return nr(n)},fromDom:nr,fromPoint:function(e,t,n){var r=e.dom();return A.from(r.elementFromPoint(t,n)).map(nr)}},or=(Node.ATTRIBUTE_NODE,Node.CDATA_SECTION_NODE,Node.COMMENT_NODE,Node.DOCUMENT_NODE),ir=(Node.DOCUMENT_TYPE_NODE,Node.DOCUMENT_FRAGMENT_NODE,Node.ELEMENT_NODE),ar=Node.TEXT_NODE,ur=(Node.PROCESSING_INSTRUCTION_NODE,Node.ENTITY_REFERENCE_NODE,Node.ENTITY_NODE,Node.NOTATION_NODE,function(e){return e.dom().nodeName.toLowerCase()}),sr=function(t){return function(e){return e.dom().nodeType===t}},cr=sr(ir),lr=sr(ar),fr=Object.keys,dr=Object.hasOwnProperty,mr=function(e,t){for(var n=fr(e),r=0,o=n.length;r<o;r++){var i=n[r];t(e[i],i,e)}},gr=function(r,o){var i={};return mr(r,function(e,t){var n=o(e,t,r);i[n.k]=n.v}),i},pr=function(e,t,n){if(!(R(n)||O(n)||L(n)))throw console.error("Invalid call to Attr.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple");e.setAttribute(t,n+"")},hr=function(e,t,n){pr(e.dom(),t,n)},vr=function(e,t){var n=e.dom();mr(t,function(e,t){pr(n,t,e)})},br=function(e,t){var n=e.dom().getAttribute(t);return null===n?undefined:n},yr=function(e,t){e.dom().removeAttribute(t)},Cr=function(e){return e.style!==undefined},xr=function(e,t){var n=e.dom();mr(t,function(e,t){!function(e,t,n){if(!R(n))throw console.error("Invalid call to CSS.set. Property ",t,":: Value ",n,":: Element ",e),new Error("CSS value must be a string: "+n);Cr(e)&&e.style.setProperty(t,n)}(n,t,e)})},wr=function(e,t){var n,r,o=e.dom(),i=window.getComputedStyle(o).getPropertyValue(t),a=""!==i||(r=lr(n=e)?n.dom().parentNode:n.dom())!==undefined&&null!==r&&r.ownerDocument.body.contains(r)?i:Nr(o,t);return null===a?undefined:a},Nr=function(e,t){return Cr(e)?e.style.getPropertyValue(t):""},Er=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];if(t.length!==n.length)throw new Error('Wrong number of arguments to struct. Expected "['+t.length+']", got '+n.length+" arguments");var r={};return F(t,function(e,t){r[e]=j(n[t])}),r}},Sr=function(e,t){for(var n=[],r=function(e){return n.push(e),t(e)},o=t(e);(o=o.bind(r)).isSome(););return n},kr=function(){return ie.getOrDie("Node")},Tr=function(e,t,n){return 0!=(e.compareDocumentPosition(t)&n)},Ar=function(e,t){return Tr(e,t,kr().DOCUMENT_POSITION_CONTAINED_BY)},Rr=ir,_r=or,Dr=function(e,t){var n=e.dom();if(n.nodeType!==Rr)return!1;if(n.matches!==undefined)return n.matches(t);if(n.msMatchesSelector!==undefined)return n.msMatchesSelector(t);if(n.webkitMatchesSelector!==undefined)return n.webkitMatchesSelector(t);if(n.mozMatchesSelector!==undefined)return n.mozMatchesSelector(t);throw new Error("Browser lacks native selectors")},Br=function(e){return e.nodeType!==Rr&&e.nodeType!==_r||0===e.childElementCount},Or=function(e,t){return e.dom()===t.dom()},Pr=tr.detect().browser.isIE()?function(e,t){return Ar(e.dom(),t.dom())}:function(e,t){var n=e.dom(),r=t.dom();return n!==r&&n.contains(r)},Lr=function(e){return rr.fromDom(e.dom().ownerDocument)},Ir=function(e){var t=e.dom();return A.from(t.parentNode).map(rr.fromDom)},Mr=function(e){var t=e.dom();return A.from(t.previousSibling).map(rr.fromDom)},Fr=function(e){var t=e.dom();return A.from(t.nextSibling).map(rr.fromDom)},zr=function(e){return t=Sr(e,Mr),(n=Q.call(t,0)).reverse(),n;var t,n},Ur=function(e){return Sr(e,Fr)},Vr=function(e){var t=e.dom();return $(t.childNodes,rr.fromDom)},Hr=function(e,t){var n=e.dom().childNodes;return A.from(n[t]).map(rr.fromDom)},jr=function(e){return Hr(e,0)},qr=function(e){return Hr(e,e.dom().childNodes.length-1)},$r=(Er("element","offset"),tr.detect().browser),Wr=function(e){return V(e,cr)},Kr={getPos:function(e,t,n){var r,o,i,a=0,u=0,s=e.ownerDocument;if(n=n||e,t){if(n===e&&t.getBoundingClientRect&&"static"===wr(rr.fromDom(e),"position"))return{x:a=(o=t.getBoundingClientRect()).left+(s.documentElement.scrollLeft||e.scrollLeft)-s.documentElement.clientLeft,y:u=o.top+(s.documentElement.scrollTop||e.scrollTop)-s.documentElement.clientTop};for(r=t;r&&r!==n&&r.nodeType;)a+=r.offsetLeft||0,u+=r.offsetTop||0,r=r.offsetParent;for(r=t.parentNode;r&&r!==n&&r.nodeType;)a-=r.scrollLeft||0,u-=r.scrollTop||0,r=r.parentNode;u+=(i=rr.fromDom(t),$r.isFirefox()&&"table"===ur(i)?Wr(Vr(i)).filter(function(e){return"caption"===ur(e)}).bind(function(o){return Wr(Ur(o)).map(function(e){var t=e.dom().offsetTop,n=o.dom().offsetTop,r=o.dom().offsetHeight;return t<=n?-r:0})}).getOr(0):0)}return{x:a,y:u}}},Xr=function(e){var n=A.none(),t=[],r=function(e){o()?a(e):t.push(e)},o=function(){return n.isSome()},i=function(e){F(e,a)},a=function(t){n.each(function(e){setTimeout(function(){t(e)},0)})};return e(function(e){n=A.some(e),i(t),t=[]}),{get:r,map:function(n){return Xr(function(t){r(function(e){t(n(e))})})},isReady:o}},Yr={nu:Xr,pure:function(t){return Xr(function(e){e(t)})}},Gr=function(t){var e=function(e){var r;t((r=e,function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=this;setTimeout(function(){r.apply(n,e)},0)}))},n=function(){return Yr.nu(e)};return{map:function(r){return Gr(function(n){e(function(e){var t=r(e);n(t)})})},bind:function(n){return Gr(function(t){e(function(e){n(e).get(t)})})},anonBind:function(n){return Gr(function(t){e(function(e){n.get(t)})})},toLazy:n,toCached:function(){var t=null;return Gr(function(e){null===t&&(t=n()),t.get(e)})},get:e}},Jr={nu:Gr,pure:function(t){return Gr(function(e){e(t)})}},Qr=function(a,e){return e(function(r){var o=[],i=0;0===a.length?r([]):F(a,function(e,t){var n;e.get((n=t,function(e){o[n]=e,++i>=a.length&&r(o)}))})})},Zr=function(e){return Qr(e,Jr.nu)},eo=function(n){return{is:function(e){return n===e},isValue:x,isError:C,getOr:j(n),getOrThunk:j(n),getOrDie:j(n),or:function(e){return eo(n)},orThunk:function(e){return eo(n)},fold:function(e,t){return t(n)},map:function(e){return eo(e(n))},mapError:function(e){return eo(n)},each:function(e){e(n)},bind:function(e){return e(n)},exists:function(e){return e(n)},forall:function(e){return e(n)},toOption:function(){return A.some(n)}}},to=function(n){return{is:C,isValue:C,isError:x,getOr:q,getOrThunk:function(e){return e()},getOrDie:function(){return e=String(n),function(){throw new Error(e)}();var e},or:function(e){return e},orThunk:function(e){return e()},fold:function(e,t){return e(n)},map:function(e){return to(n)},mapError:function(e){return to(e(n))},each:o,bind:function(e){return to(n)},exists:C,forall:x,toOption:A.none}},no={value:eo,error:to};function ro(e,u){var t=e,n=function(e,t,n,r){var o,i;if(e){if(!r&&e[t])return e[t];if(e!==u){if(o=e[n])return o;for(i=e.parentNode;i&&i!==u;i=i.parentNode)if(o=i[n])return o}}};this.current=function(){return t},this.next=function(e){return t=n(t,"firstChild","nextSibling",e)},this.prev=function(e){return t=n(t,"lastChild","previousSibling",e)},this.prev2=function(e){return t=function(e,t,n,r){var o,i,a;if(e){if(o=e[n],u&&o===u)return;if(o){if(!r)for(a=o[t];a;a=a[t])if(!a[t])return a;return o}if((i=e.parentNode)&&i!==u)return i}}(t,"lastChild","previousSibling",e)}}var oo,io,ao,uo=function(t){var n;return function(e){return(n=n||function(e,t){for(var n={},r=0,o=e.length;r<o;r++){var i=e[r];n[String(i)]=t(i,r)}return n}(t,j(!0))).hasOwnProperty(ur(e))}},so=uo(["h1","h2","h3","h4","h5","h6"]),co=uo(["article","aside","details","div","dt","figcaption","footer","form","fieldset","header","hgroup","html","main","nav","section","summary","body","p","dl","multicol","dd","figure","address","center","blockquote","h1","h2","h3","h4","h5","h6","listing","xmp","pre","plaintext","menu","dir","ul","ol","li","hr","table","tbody","thead","tfoot","th","tr","td","caption"]),lo=function(e){return cr(e)&&!co(e)},fo=function(e){return cr(e)&&"br"===ur(e)},mo=uo(["h1","h2","h3","h4","h5","h6","p","div","address","pre","form","blockquote","center","dir","fieldset","header","footer","article","section","hgroup","aside","nav","figure"]),go=uo(["ul","ol","dl"]),po=uo(["li","dd","dt"]),ho=uo(["area","base","basefont","br","col","frame","hr","img","input","isindex","link","meta","param","embed","source","wbr","track"]),vo=uo(["thead","tbody","tfoot"]),bo=uo(["td","th"]),yo=uo(["pre","script","textarea","style"]),Co=function(t){return function(e){return!!e&&e.nodeType===t}},xo=Co(1),wo=function(e){var r=e.toLowerCase().split(" ");return function(e){var t,n;if(e&&e.nodeType)for(n=e.nodeName.toLowerCase(),t=0;t<r.length;t++)if(n===r[t])return!0;return!1}},No=function(t){return function(e){if(xo(e)){if(e.contentEditable===t)return!0;if(e.getAttribute("data-mce-contenteditable")===t)return!0}return!1}},Eo=Co(3),So=Co(8),ko=Co(9),To=wo("br"),Ao=No("true"),Ro=No("false"),_o={isText:Eo,isElement:xo,isComment:So,isDocument:ko,isBr:To,isContentEditableTrue:Ao,isContentEditableFalse:Ro,matchNodeNames:wo,hasPropValue:function(t,n){return function(e){return xo(e)&&e[t]===n}},hasAttribute:function(t,e){return function(e){return xo(e)&&e.hasAttribute(t)}},hasAttributeValue:function(t,n){return function(e){return xo(e)&&e.getAttribute(t)===n}},matchStyleValues:function(r,e){var o=e.toLowerCase().split(" ");return function(e){var t;if(xo(e))for(t=0;t<o.length;t++){var n=e.ownerDocument.defaultView.getComputedStyle(e,null);if((n?n.getPropertyValue(r):null)===o[t])return!0}return!1}},isBogus:function(e){return xo(e)&&e.hasAttribute("data-mce-bogus")},isBogusAll:function(e){return xo(e)&&"all"===e.getAttribute("data-mce-bogus")},isTable:function(e){return xo(e)&&"TABLE"===e.tagName}},Do=function(e){return e&&"SPAN"===e.tagName&&"bookmark"===e.getAttribute("data-mce-type")},Bo=function(e,t){var n,r=t.childNodes;if(!_o.isElement(t)||!Do(t)){for(n=r.length-1;0<=n;n--)Bo(e,r[n]);if(!1===_o.isDocument(t)){if(_o.isText(t)&&0<t.nodeValue.length){var o=Yt.trim(t.nodeValue).length;if(e.isBlock(t.parentNode)||0<o)return;if(0===o&&(a=(i=t).previousSibling&&"SPAN"===i.previousSibling.nodeName,u=i.nextSibling&&"SPAN"===i.nextSibling.nodeName,a&&u))return}else if(_o.isElement(t)&&(1===(r=t.childNodes).length&&Do(r[0])&&t.parentNode.insertBefore(r[0],t),r.length||ho(rr.fromDom(t))))return;e.remove(t)}var i,a,u;return t}},Oo={trimNode:Bo},Po=Yt.makeMap,Lo=/[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,Io=/[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,Mo=/[<>&\"\']/g,Fo=/&#([a-z0-9]+);?|&([a-z0-9]+);/gi,zo={128:"\u20ac",130:"\u201a",131:"\u0192",132:"\u201e",133:"\u2026",134:"\u2020",135:"\u2021",136:"\u02c6",137:"\u2030",138:"\u0160",139:"\u2039",140:"\u0152",142:"\u017d",145:"\u2018",146:"\u2019",147:"\u201c",148:"\u201d",149:"\u2022",150:"\u2013",151:"\u2014",152:"\u02dc",153:"\u2122",154:"\u0161",155:"\u203a",156:"\u0153",158:"\u017e",159:"\u0178"};io={'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;","&":"&amp;","`":"&#96;"},ao={"&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&apos;":"'"};var Uo=function(e,t){var n,r,o,i={};if(e){for(e=e.split(","),t=t||10,n=0;n<e.length;n+=2)r=String.fromCharCode(parseInt(e[n],t)),io[r]||(o="&"+e[n+1]+";",i[r]=o,i[o]=r);return i}};oo=Uo("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",32);var Vo=function(e,t){return e.replace(t?Lo:Io,function(e){return io[e]||e})},Ho=function(e,t){return e.replace(t?Lo:Io,function(e){return 1<e.length?"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";":io[e]||"&#"+e.charCodeAt(0)+";"})},jo=function(e,t,n){return n=n||oo,e.replace(t?Lo:Io,function(e){return io[e]||n[e]||e})},qo={encodeRaw:Vo,encodeAllRaw:function(e){return(""+e).replace(Mo,function(e){return io[e]||e})},encodeNumeric:Ho,encodeNamed:jo,getEncodeFunc:function(e,t){var n=Uo(t)||oo,r=Po(e.replace(/\+/g,","));return r.named&&r.numeric?function(e,t){return e.replace(t?Lo:Io,function(e){return io[e]!==undefined?io[e]:n[e]!==undefined?n[e]:1<e.length?"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";":"&#"+e.charCodeAt(0)+";"})}:r.named?t?function(e,t){return jo(e,t,n)}:jo:r.numeric?Ho:Vo},decode:function(e){return e.replace(Fo,function(e,t){return t?65535<(t="x"===t.charAt(0).toLowerCase()?parseInt(t.substr(1),16):parseInt(t,10))?(t-=65536,String.fromCharCode(55296+(t>>10),56320+(1023&t))):zo[t]||String.fromCharCode(t):ao[e]||oo[e]||(n=e,(r=rr.fromTag("div").dom()).innerHTML=n,r.textContent||r.innerText||n);var n,r})}},$o={},Wo={},Ko=Yt.makeMap,Xo=Yt.each,Yo=Yt.extend,Go=Yt.explode,Jo=Yt.inArray,Qo=function(e,t){return(e=Yt.trim(e))?e.split(t||" "):[]},Zo=function(e){var u,t,n,r,o,i,s={},a=function(e,t,n){var r,o,i,a=function(e,t){var n,r,o={};for(n=0,r=e.length;n<r;n++)o[e[n]]=t||{};return o};for(t=t||"","string"==typeof(n=n||[])&&(n=Qo(n)),r=(e=Qo(e)).length;r--;)i={attributes:a(o=Qo([u,t].join(" "))),attributesOrder:o,children:a(n,Wo)},s[e[r]]=i},c=function(e,t){var n,r,o,i;for(n=(e=Qo(e)).length,t=Qo(t);n--;)for(r=s[e[n]],o=0,i=t.length;o<i;o++)r.attributes[t[o]]={},r.attributesOrder.push(t[o])};return $o[e]?$o[e]:(u="id accesskey class dir lang style tabindex title role",t="address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul",n="a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment","html4"!==e&&(u+=" contenteditable contextmenu draggable dropzone hidden spellcheck translate",t+=" article aside details dialog figure main header footer hgroup section nav",n+=" audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"),"html5-strict"!==e&&(u+=" xml:lang",n=[n,i="acronym applet basefont big font strike tt"].join(" "),Xo(Qo(i),function(e){a(e,"",n)}),t=[t,o="center dir isindex noframes"].join(" "),r=[t,n].join(" "),Xo(Qo(o),function(e){a(e,"",r)})),r=r||[t,n].join(" "),a("html","manifest","head body"),a("head","","base command link meta noscript script style title"),a("title hr noscript br"),a("base","href target"),a("link","href rel media hreflang type sizes hreflang"),a("meta","name http-equiv content charset"),a("style","media type scoped"),a("script","src async defer type charset"),a("body","onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload",r),a("address dt dd div caption","",r),a("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn","",n),a("blockquote","cite",r),a("ol","reversed start type","li"),a("ul","","li"),a("li","value",r),a("dl","","dt dd"),a("a","href target rel media hreflang type",n),a("q","cite",n),a("ins del","cite datetime",r),a("img","src sizes srcset alt usemap ismap width height"),a("iframe","src name width height",r),a("embed","src type width height"),a("object","data type typemustmatch name usemap form width height",[r,"param"].join(" ")),a("param","name value"),a("map","name",[r,"area"].join(" ")),a("area","alt coords shape href target rel media hreflang type"),a("table","border","caption colgroup thead tfoot tbody tr"+("html4"===e?" col":"")),a("colgroup","span","col"),a("col","span"),a("tbody thead tfoot","","tr"),a("tr","","td th"),a("td","colspan rowspan headers",r),a("th","colspan rowspan headers scope abbr",r),a("form","accept-charset action autocomplete enctype method name novalidate target",r),a("fieldset","disabled form name",[r,"legend"].join(" ")),a("label","form for",n),a("input","accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"),a("button","disabled form formaction formenctype formmethod formnovalidate formtarget name type value","html4"===e?r:n),a("select","disabled form multiple name required size","option optgroup"),a("optgroup","disabled label","option"),a("option","disabled label selected value"),a("textarea","cols dirname disabled form maxlength name readonly required rows wrap"),a("menu","type label",[r,"li"].join(" ")),a("noscript","",r),"html4"!==e&&(a("wbr"),a("ruby","",[n,"rt rp"].join(" ")),a("figcaption","",r),a("mark rt rp summary bdi","",n),a("canvas","width height",r),a("video","src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered",[r,"track source"].join(" ")),a("audio","src crossorigin preload autoplay mediagroup loop muted controls buffered volume",[r,"track source"].join(" ")),a("picture","","img source"),a("source","src srcset type media sizes"),a("track","kind src srclang label default"),a("datalist","",[n,"option"].join(" ")),a("article section nav aside main header footer","",r),a("hgroup","","h1 h2 h3 h4 h5 h6"),a("figure","",[r,"figcaption"].join(" ")),a("time","datetime",n),a("dialog","open",r),a("command","type label icon disabled checked radiogroup command"),a("output","for form name",n),a("progress","value max",n),a("meter","value min max low high optimum",n),a("details","open",[r,"summary"].join(" ")),a("keygen","autofocus challenge disabled form keytype name")),"html5-strict"!==e&&(c("script","language xml:space"),c("style","xml:space"),c("object","declare classid code codebase codetype archive standby align border hspace vspace"),c("embed","align name hspace vspace"),c("param","valuetype type"),c("a","charset name rev shape coords"),c("br","clear"),c("applet","codebase archive code object alt name width height align hspace vspace"),c("img","name longdesc align border hspace vspace"),c("iframe","longdesc frameborder marginwidth marginheight scrolling align"),c("font basefont","size color face"),c("input","usemap align"),c("select","onchange"),c("textarea"),c("h1 h2 h3 h4 h5 h6 div p legend caption","align"),c("ul","type compact"),c("li","type"),c("ol dl menu dir","compact"),c("pre","width xml:space"),c("hr","align noshade size width"),c("isindex","prompt"),c("table","summary width frame rules cellspacing cellpadding align bgcolor"),c("col","width align char charoff valign"),c("colgroup","width align char charoff valign"),c("thead","align char charoff valign"),c("tr","align char charoff valign bgcolor"),c("th","axis align char charoff valign nowrap bgcolor width height"),c("form","accept"),c("td","abbr axis scope align char charoff valign nowrap bgcolor width height"),c("tfoot","align char charoff valign"),c("tbody","align char charoff valign"),c("area","nohref"),c("body","background bgcolor text link vlink alink")),"html4"!==e&&(c("input button select textarea","autofocus"),c("input textarea","placeholder"),c("a","download"),c("link script img","crossorigin"),c("iframe","sandbox seamless allowfullscreen")),Xo(Qo("a form meter progress dfn"),function(e){s[e]&&delete s[e].children[e]}),delete s.caption.children.table,delete s.script,$o[e]=s)},ei=function(e,n){var r;return e&&(r={},"string"==typeof e&&(e={"*":e}),Xo(e,function(e,t){r[t]=r[t.toUpperCase()]="map"===n?Ko(e,/[, ]/):Go(e,/[, ]/)})),r};function ti(i){var e,t,n,r,o,a,u,s,c,l,f,d,m,N={},g={},E=[],p={},h={},v=function(e,t,n){var r=i[e];return r?r=Ko(r,/[, ]/,Ko(r.toUpperCase(),/[, ]/)):(r=$o[e])||(r=Ko(t," ",Ko(t.toUpperCase()," ")),r=Yo(r,n),$o[e]=r),r};n=Zo((i=i||{}).schema),!1===i.verify_html&&(i.valid_elements="*[*]"),e=ei(i.valid_styles),t=ei(i.invalid_styles,"map"),s=ei(i.valid_classes,"map"),r=v("whitespace_elements","pre script noscript style textarea video audio iframe object code"),o=v("self_closing_elements","colgroup dd dt li option p td tfoot th thead tr"),a=v("short_ended_elements","area base basefont br col frame hr img input isindex link meta param embed source wbr track"),u=v("boolean_attributes","checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"),l=v("non_empty_elements","td th iframe video audio object script pre code",a),f=v("move_caret_before_on_enter_elements","table",l),d=v("text_block_elements","h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"),c=v("block_elements","hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary",d),m=v("text_inline_elements","span strong b em i font strike u var cite dfn code mark q sup sub samp"),Xo((i.special||"script noscript noframes noembed title style textarea xmp").split(" "),function(e){h[e]=new RegExp("</"+e+"[^>]*>","gi")});var S=function(e){return new RegExp("^"+e.replace(/([?+*])/g,".$1")+"$")},b=function(e){var t,n,r,o,i,a,u,s,c,l,f,d,m,g,p,h,v,b,y,C=/^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)\])?$/,x=/^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/,w=/[*?+]/;if(e)for(e=Qo(e,","),N["@"]&&(h=N["@"].attributes,v=N["@"].attributesOrder),t=0,n=e.length;t<n;t++)if(i=C.exec(e[t])){if(g=i[1],c=i[2],p=i[3],s=i[5],a={attributes:d={},attributesOrder:m=[]},"#"===g&&(a.paddEmpty=!0),"-"===g&&(a.removeEmpty=!0),"!"===i[4]&&(a.removeEmptyAttrs=!0),h){for(b in h)d[b]=h[b];m.push.apply(m,v)}if(s)for(r=0,o=(s=Qo(s,"|")).length;r<o;r++)if(i=x.exec(s[r])){if(u={},f=i[1],l=i[2].replace(/[\\:]:/g,":"),g=i[3],y=i[4],"!"===f&&(a.attributesRequired=a.attributesRequired||[],a.attributesRequired.push(l),u.required=!0),"-"===f){delete d[l],m.splice(Jo(m,l),1);continue}g&&("="===g&&(a.attributesDefault=a.attributesDefault||[],a.attributesDefault.push({name:l,value:y}),u.defaultValue=y),":"===g&&(a.attributesForced=a.attributesForced||[],a.attributesForced.push({name:l,value:y}),u.forcedValue=y),"<"===g&&(u.validValues=Ko(y,"?"))),w.test(l)?(a.attributePatterns=a.attributePatterns||[],u.pattern=S(l),a.attributePatterns.push(u)):(d[l]||m.push(l),d[l]=u)}h||"@"!==c||(h=d,v=m),p&&(a.outputName=c,N[p]=a),w.test(c)?(a.pattern=S(c),E.push(a)):N[c]=a}},y=function(e){N={},E=[],b(e),Xo(n,function(e,t){g[t]=e.children})},C=function(e){var a=/^(~)?(.+)$/;e&&($o.text_block_elements=$o.block_elements=null,Xo(Qo(e,","),function(e){var t=a.exec(e),n="~"===t[1],r=n?"span":"div",o=t[2];if(g[o]=g[r],p[o]=r,n||(c[o.toUpperCase()]={},c[o]={}),!N[o]){var i=N[r];delete(i=Yo({},i)).removeEmptyAttrs,delete i.removeEmpty,N[o]=i}Xo(g,function(e,t){e[r]&&(g[t]=e=Yo({},g[t]),e[o]=e[r])})}))},x=function(e){var o=/^([+\-]?)(\w+)\[([^\]]+)\]$/;$o[i.schema]=null,e&&Xo(Qo(e,","),function(e){var t,n,r=o.exec(e);r&&(n=r[1],t=n?g[r[2]]:g[r[2]]={"#comment":{}},t=g[r[2]],Xo(Qo(r[3],"|"),function(e){"-"===n?delete t[e]:t[e]={}}))})},w=function(e){var t,n=N[e];if(n)return n;for(t=E.length;t--;)if((n=E[t]).pattern.test(e))return n};return i.valid_elements?y(i.valid_elements):(Xo(n,function(e,t){N[t]={attributes:e.attributes,attributesOrder:e.attributesOrder},g[t]=e.children}),"html5"!==i.schema&&Xo(Qo("strong/b em/i"),function(e){e=Qo(e,"/"),N[e[1]].outputName=e[0]}),Xo(Qo("ol ul sub sup blockquote span font a table tbody tr strong em b i"),function(e){N[e]&&(N[e].removeEmpty=!0)}),Xo(Qo("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"),function(e){N[e].paddEmpty=!0}),Xo(Qo("span"),function(e){N[e].removeEmptyAttrs=!0})),C(i.custom_elements),x(i.valid_children),b(i.extended_valid_elements),x("+ol[ul|ol],+ul[ul|ol]"),Xo({dd:"dl",dt:"dl",li:"ul ol",td:"tr",th:"tr",tr:"tbody thead tfoot",tbody:"table",thead:"table",tfoot:"table",legend:"fieldset",area:"map",param:"video audio object"},function(e,t){N[t]&&(N[t].parentsRequired=Qo(e))}),i.invalid_elements&&Xo(Go(i.invalid_elements),function(e){N[e]&&delete N[e]}),w("span")||b("span[!data-mce-type|*]"),{children:g,elements:N,getValidStyles:function(){return e},getValidClasses:function(){return s},getBlockElements:function(){return c},getInvalidStyles:function(){return t},getShortEndedElements:function(){return a},getTextBlockElements:function(){return d},getTextInlineElements:function(){return m},getBoolAttrs:function(){return u},getElementRule:w,getSelfClosingElements:function(){return o},getNonEmptyElements:function(){return l},getMoveCaretBeforeOnEnterElements:function(){return f},getWhiteSpaceElements:function(){return r},getSpecialElements:function(){return h},isValidChild:function(e,t){var n=g[e.toLowerCase()];return!(!n||!n[t.toLowerCase()])},isValid:function(e,t){var n,r,o=w(e);if(o){if(!t)return!0;if(o.attributes[t])return!0;if(n=o.attributePatterns)for(r=n.length;r--;)if(n[r].pattern.test(e))return!0}return!1},getCustomElements:function(){return p},addValidElements:b,setValidElements:y,addCustomElements:C,addValidChildren:x}}var ni=function(e,t,n,r){var o=function(e){return 1<(e=parseInt(e,10).toString(16)).length?e:"0"+e};return"#"+o(t)+o(n)+o(r)};function ri(y,e){var C,t,c,l,x=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,w=/(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,N=/\s*([^:]+):\s*([^;]+);?/g,E=/\s+$/,S={},k="\ufeff";for(y=y||{},e&&(c=e.getValidStyles(),l=e.getInvalidStyles()),t=("\\\" \\' \\; \\: ; : "+k).split(" "),C=0;C<t.length;C++)S[t[C]]=k+C,S[k+C]=t[C];return{toHex:function(e){return e.replace(x,ni)},parse:function(e){var t,n,r,o,i,a,u,s,c={},l=y.url_converter,f=y.url_converter_scope||this,d=function(e,t,n){var r,o,i,a;if((r=c[e+"-top"+t])&&(o=c[e+"-right"+t])&&(i=c[e+"-bottom"+t])&&(a=c[e+"-left"+t])){var u=[r,o,i,a];for(C=u.length-1;C--&&u[C]===u[C+1];);-1<C&&n||(c[e+t]=-1===C?u[0]:u.join(" "),delete c[e+"-top"+t],delete c[e+"-right"+t],delete c[e+"-bottom"+t],delete c[e+"-left"+t])}},m=function(e){var t,n=c[e];if(n){for(t=(n=n.split(" ")).length;t--;)if(n[t]!==n[0])return!1;return c[e]=n[0],!0}},g=function(e){return o=!0,S[e]},p=function(e,t){return o&&(e=e.replace(/\uFEFF[0-9]/g,function(e){return S[e]})),t||(e=e.replace(/\\([\'\";:])/g,"$1")),e},h=function(e){return String.fromCharCode(parseInt(e.slice(1),16))},v=function(e){return e.replace(/\\[0-9a-f]+/gi,h)},b=function(e,t,n,r,o,i){if(o=o||i)return"'"+(o=p(o)).replace(/\'/g,"\\'")+"'";if(t=p(t||n||r),!y.allow_script_urls){var a=t.replace(/[\s\r\n]+/g,"");if(/(java|vb)script:/i.test(a))return"";if(!y.allow_svg_data_urls&&/^data:image\/svg/i.test(a))return""}return l&&(t=l.call(f,t,"style")),"url('"+t.replace(/\'/g,"\\'")+"')"};if(e){for(e=(e=e.replace(/[\u0000-\u001F]/g,"")).replace(/\\[\"\';:\uFEFF]/g,g).replace(/\"[^\"]+\"|\'[^\']+\'/g,function(e){return e.replace(/[;:]/g,g)});t=N.exec(e);)if(N.lastIndex=t.index+t[0].length,n=t[1].replace(E,"").toLowerCase(),r=t[2].replace(E,""),n&&r){if(n=v(n),r=v(r),-1!==n.indexOf(k)||-1!==n.indexOf('"'))continue;if(!y.allow_script_urls&&("behavior"===n||/expression\s*\(|\/\*|\*\//.test(r)))continue;"font-weight"===n&&"700"===r?r="bold":"color"!==n&&"background-color"!==n||(r=r.toLowerCase()),r=(r=r.replace(x,ni)).replace(w,b),c[n]=o?p(r,!0):r}d("border","",!0),d("border","-width"),d("border","-color"),d("border","-style"),d("padding",""),d("margin",""),i="border",u="border-style",s="border-color",m(a="border-width")&&m(u)&&m(s)&&(c[i]=c[a]+" "+c[u]+" "+c[s],delete c[a],delete c[u],delete c[s]),"medium none"===c.border&&delete c.border,"none"===c["border-image"]&&delete c["border-image"]}return c},serialize:function(i,e){var t,n,r,o,a,u="",s=function(e){var t,n,r,o;if(t=c[e])for(n=0,r=t.length;n<r;n++)e=t[n],(o=i[e])&&(u+=(0<u.length?" ":"")+e+": "+o+";")};if(e&&c)s("*"),s(e);else for(t in i)!(n=i[t])||l&&(r=t,o=e,a=void 0,(a=l["*"])&&a[r]||(a=l[o])&&a[r])||(u+=(0<u.length?" ":"")+t+": "+n+";");return u}}}var oi,ii=Yt.each,ai=Yt.grep,ui=de.ie,si=/^([a-z0-9],?)+$/i,ci=/^[ \t\r\n]*$/,li=function(n,r,o){var e={},i=r.keep_values,t={set:function(e,t,n){r.url_converter&&(t=r.url_converter.call(r.url_converter_scope||o(),t,n,e[0])),e.attr("data-mce-"+n,t).attr(n,t)},get:function(e,t){return e.attr("data-mce-"+t)||e.attr(t)}};return e={style:{set:function(e,t){null===t||"object"!=typeof t?(i&&e.attr("data-mce-style",t),e.attr("style",t)):e.css(t)},get:function(e){var t=e.attr("data-mce-style")||e.attr("style");return t=n.serialize(n.parse(t),e[0].nodeName)}}},i&&(e.href=e.src=t),e},fi=function(e,t){var n=t.attr("style"),r=e.serialize(e.parse(n),t[0].nodeName);r||(r=null),t.attr("data-mce-style",r)},di=function(e,t){var n,r,o=0;if(e)for(n=e.nodeType,e=e.previousSibling;e;e=e.previousSibling)r=e.nodeType,(!t||3!==r||r!==n&&e.nodeValue.length)&&(o++,n=r);return o};function mi(a,u){var s,c=this;void 0===u&&(u={});var r={},i=window,o={},t=0,e=function(m,g){void 0===g&&(g={});var p,h=0,v={};p=g.maxLoadTime||5e3;var b=function(e){m.getElementsByTagName("head")[0].appendChild(e)},n=function(e,t,n){var o,r,i,a,u=function(){for(var e=a.passed,t=e.length;t--;)e[t]();a.status=2,a.passed=[],a.failed=[]},s=function(){for(var e=a.failed,t=e.length;t--;)e[t]();a.status=3,a.passed=[],a.failed=[]},c=function(e,t){e()||((new Date).getTime()-i<p?ve.setTimeout(t):s())},l=function(){c(function(){for(var e,t,n=m.styleSheets,r=n.length;r--;)if((t=(e=n[r]).ownerNode?e.ownerNode:e.owningElement)&&t.id===o.id)return u(),!0},l)},f=function(){c(function(){try{var e=r.sheet.cssRules;return u(),!!e}catch(t){}},f)};if(e=Yt._addCacheSuffix(e),v[e]?a=v[e]:(a={passed:[],failed:[]},v[e]=a),t&&a.passed.push(t),n&&a.failed.push(n),1!==a.status)if(2!==a.status)if(3!==a.status){if(a.status=1,(o=m.createElement("link")).rel="stylesheet",o.type="text/css",o.id="u"+h++,o.async=!1,o.defer=!1,i=(new Date).getTime(),g.contentCssCors&&(o.crossOrigin="anonymous"),"onload"in o&&!((d=navigator.userAgent.match(/WebKit\/(\d*)/))&&parseInt(d[1],10)<536))o.onload=l,o.onerror=s;else{if(0<navigator.userAgent.indexOf("Firefox"))return(r=m.createElement("style")).textContent='@import "'+e+'"',f(),void b(r);l()}var d;b(o),o.href=e}else s();else u()},t=function(t){return Jr.nu(function(e){n(t,H(e,j(no.value(t))),H(e,j(no.error(t))))})},o=function(e){return e.fold(q,q)};return{load:n,loadAll:function(e,n,r){Zr($(e,t)).get(function(e){var t=W(e,function(e){return e.isValue()});0<t.fail.length?r(t.fail.map(o)):n(t.pass.map(o))})}}}(a,{contentCssCors:u.contentCssCors}),l=[],f=u.schema?u.schema:ti({}),d=ri({url_converter:u.url_converter,url_converter_scope:u.url_converter_scope},u.schema),m=u.ownEvents?new ke(u.proxy):ke.Event,n=f.getBlockElements(),g=pn.overrideDefaults(function(){return{context:a,element:V.getRoot()}}),p=function(e){if(e&&a&&"string"==typeof e){var t=a.getElementById(e);return t&&t.id!==e?a.getElementsByName(e)[1]:t}return e},h=function(e){return"string"==typeof e&&(e=p(e)),g(e)},v=function(e,t,n){var r,o,i=h(e);return i.length&&(o=(r=s[t])&&r.get?r.get(i,t):i.attr(t)),void 0===o&&(o=n||""),o},b=function(e){var t=p(e);return t?t.attributes:[]},y=function(e,t,n){var r,o;""===n&&(n=null);var i=h(e);r=i.attr(t),i.length&&((o=s[t])&&o.set?o.set(i,n,t):i.attr(t,n),r!==n&&u.onSetAttrib&&u.onSetAttrib({attrElm:i,attrName:t,attrValue:n}))},C=function(){return u.root_element||a.body},x=function(e,t){return Kr.getPos(a.body,p(e),t)},w=function(e,t,n){var r=h(e);return n?r.css(t):("float"===(t=t.replace(/-(\D)/g,function(e,t){return t.toUpperCase()}))&&(t=de.ie&&de.ie<12?"styleFloat":"cssFloat"),r[0]&&r[0].style?r[0].style[t]:undefined)},N=function(e){var t,n;return e=p(e),t=w(e,"width"),n=w(e,"height"),-1===t.indexOf("px")&&(t=0),-1===n.indexOf("px")&&(n=0),{w:parseInt(t,10)||e.offsetWidth||e.clientWidth,h:parseInt(n,10)||e.offsetHeight||e.clientHeight}},E=function(e,t){var n;if(!e)return!1;if(!Array.isArray(e)){if("*"===t)return 1===e.nodeType;if(si.test(t)){var r=t.toLowerCase().split(/,/),o=e.nodeName.toLowerCase();for(n=r.length-1;0<=n;n--)if(r[n]===o)return!0;return!1}if(e.nodeType&&1!==e.nodeType)return!1}var i=Array.isArray(e)?e:[e];return 0<kt(t,i[0].ownerDocument||i[0],null,i).length},S=function(e,t,n,r){var o,i=[],a=p(e);for(r=r===undefined,n=n||("BODY"!==C().nodeName?C().parentNode:null),Yt.is(t,"string")&&(t="*"===(o=t)?function(e){return 1===e.nodeType}:function(e){return E(e,o)});a&&a!==n&&a.nodeType&&9!==a.nodeType;){if(!t||"function"==typeof t&&t(a)){if(!r)return[a];i.push(a)}a=a.parentNode}return r?i:null},k=function(e,t,n){var r=t;if(e)for("string"==typeof t&&(r=function(e){return E(e,t)}),e=e[n];e;e=e[n])if("function"==typeof r&&r(e))return e;return null},T=function(e,n,r){var o,t="string"==typeof e?p(e):e;if(!t)return!1;if(Yt.isArray(t)&&(t.length||0===t.length))return o=[],ii(t,function(e,t){e&&("string"==typeof e&&(e=p(e)),o.push(n.call(r,e,t)))}),o;var i=r||c;return n.call(i,t)},A=function(e,t){h(e).each(function(e,n){ii(t,function(e,t){y(n,t,e)})})},R=function(e,r){var t=h(e);ui?t.each(function(e,t){if(!1!==t.canHaveHTML){for(;t.firstChild;)t.removeChild(t.firstChild);try{t.innerHTML="<br>"+r,t.removeChild(t.firstChild)}catch(n){pn("<div></div>").html("<br>"+r).contents().slice(1).appendTo(t)}return r}}):t.html(r)},_=function(e,n,r,o,i){return T(e,function(e){var t="string"==typeof n?a.createElement(n):n;return A(t,r),o&&("string"!=typeof o&&o.nodeType?t.appendChild(o):"string"==typeof o&&R(t,o)),i?t:e.appendChild(t)})},D=function(e,t,n){return _(a.createElement(e),e,t,n,!0)},B=qo.decode,O=qo.encodeAllRaw,P=function(e,t){var n=h(e);return t?n.each(function(){for(var e;e=this.firstChild;)3===e.nodeType&&0===e.data.length?this.removeChild(e):this.parentNode.insertBefore(e,this)}).remove():n.remove(),1<n.length?n.toArray():n[0]},L=function(e,t,n){h(e).toggleClass(t,n).each(function(){""===this.className&&pn(this).attr("class",null)})},I=function(t,e,n){return T(e,function(e){return Yt.is(e,"array")&&(t=t.cloneNode(!0)),n&&ii(ai(e.childNodes),function(e){t.appendChild(e)}),e.parentNode.replaceChild(t,e)})},M=function(){return a.createRange()},F=function(e,t,n,r){if(Yt.isArray(e)){for(var o=e.length;o--;)e[o]=F(e[o],t,n,r);return e}return!u.collect||e!==a&&e!==i||l.push([e,t,n,r]),m.bind(e,t,n,r||V)},z=function(e,t,n){var r;if(Yt.isArray(e)){for(r=e.length;r--;)e[r]=z(e[r],t,n);return e}if(l&&(e===a||e===i))for(r=l.length;r--;){var o=l[r];e!==o[0]||t&&t!==o[1]||n&&n!==o[2]||m.unbind(o[0],o[1],o[2])}return m.unbind(e,t,n)},U=function(e){if(e&&_o.isElement(e)){var t=e.getAttribute("data-mce-contenteditable");return t&&"inherit"!==t?t:"inherit"!==e.contentEditable?e.contentEditable:null}return null},V={doc:a,settings:u,win:i,files:o,stdMode:!0,boxModel:!0,styleSheetLoader:e,boundEvents:l,styles:d,schema:f,events:m,isBlock:function(e){if("string"==typeof e)return!!n[e];if(e){var t=e.nodeType;if(t)return!(1!==t||!n[e.nodeName])}return!1},$:g,$$:h,root:null,clone:function(t,e){if(!ui||1!==t.nodeType||e)return t.cloneNode(e);if(!e){var n=a.createElement(t.nodeName);return ii(b(t),function(e){y(n,e.nodeName,v(t,e.nodeName))}),n}return null},getRoot:C,getViewPort:function(e){var t=e||i,n=t.document,r=n.documentElement;return{x:t.pageXOffset||r.scrollLeft,y:t.pageYOffset||r.scrollTop,w:t.innerWidth||r.clientWidth,h:t.innerHeight||r.clientHeight}},getRect:function(e){var t,n;return e=p(e),t=x(e),n=N(e),{x:t.x,y:t.y,w:n.w,h:n.h}},getSize:N,getParent:function(e,t,n){var r=S(e,t,n,!1);return r&&0<r.length?r[0]:null},getParents:S,get:p,getNext:function(e,t){return k(e,t,"nextSibling")},getPrev:function(e,t){return k(e,t,"previousSibling")},select:function(e,t){return kt(e,p(t)||u.root_element||a,[])},is:E,add:_,create:D,createHTML:function(e,t,n){var r,o="";for(r in o+="<"+e,t)t.hasOwnProperty(r)&&null!==t[r]&&"undefined"!=typeof t[r]&&(o+=" "+r+'="'+O(t[r])+'"');return void 0!==n?o+">"+n+"</"+e+">":o+" />"},createFragment:function(e){var t,n=a.createElement("div"),r=a.createDocumentFragment();for(e&&(n.innerHTML=e);t=n.firstChild;)r.appendChild(t);return r},remove:P,setStyle:function(e,t,n){var r=h(e).css(t,n);u.update_styles&&fi(d,r)},getStyle:w,setStyles:function(e,t){var n=h(e).css(t);u.update_styles&&fi(d,n)},removeAllAttribs:function(e){return T(e,function(e){var t,n=e.attributes;for(t=n.length-1;0<=t;t--)e.removeAttributeNode(n.item(t))})},setAttrib:y,setAttribs:A,getAttrib:v,getPos:x,parseStyle:function(e){return d.parse(e)},serializeStyle:function(e,t){return d.serialize(e,t)},addStyle:function(e){var t,n;if(V!==mi.DOM&&a===document){if(r[e])return;r[e]=!0}(n=a.getElementById("mceDefaultStyles"))||((n=a.createElement("style")).id="mceDefaultStyles",n.type="text/css",(t=a.getElementsByTagName("head")[0]).firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n)),n.styleSheet?n.styleSheet.cssText+=e:n.appendChild(a.createTextNode(e))},loadCSS:function(e){var n;V===mi.DOM||a!==document?(e||(e=""),n=a.getElementsByTagName("head")[0],ii(e.split(","),function(e){var t;e=Yt._addCacheSuffix(e),o[e]||(o[e]=!0,t=D("link",{rel:"stylesheet",href:e}),n.appendChild(t))})):mi.DOM.loadCSS(e)},addClass:function(e,t){h(e).addClass(t)},removeClass:function(e,t){L(e,t,!1)},hasClass:function(e,t){return h(e).hasClass(t)},toggleClass:L,show:function(e){h(e).show()},hide:function(e){h(e).hide()},isHidden:function(e){return"none"===h(e).css("display")},uniqueId:function(e){return(e||"mce_")+t++},setHTML:R,getOuterHTML:function(e){var t="string"==typeof e?p(e):e;return _o.isElement(t)?t.outerHTML:pn("<div></div>").append(pn(t).clone()).html()},setOuterHTML:function(e,t){h(e).each(function(){try{if("outerHTML"in this)return void(this.outerHTML=t)}catch(e){}P(pn(this).html(t),!0)})},decode:B,encode:O,insertAfter:function(e,t){var r=p(t);return T(e,function(e){var t,n;return t=r.parentNode,(n=r.nextSibling)?t.insertBefore(e,n):t.appendChild(e),e})},replace:I,rename:function(t,e){var n;return t.nodeName!==e.toUpperCase()&&(n=D(e),ii(b(t),function(e){y(n,e.nodeName,v(t,e.nodeName))}),I(n,t,!0)),n||t},findCommonAncestor:function(e,t){for(var n,r=e;r;){for(n=t;n&&r!==n;)n=n.parentNode;if(r===n)break;r=r.parentNode}return!r&&e.ownerDocument?e.ownerDocument.documentElement:r},toHex:function(e){return d.toHex(Yt.trim(e))},run:T,getAttribs:b,isEmpty:function(e,t){var n,r,o,i,a,u,s=0;if(e=e.firstChild){a=new ro(e,e.parentNode),t=t||(f?f.getNonEmptyElements():null),i=f?f.getWhiteSpaceElements():{};do{if(o=e.nodeType,_o.isElement(e)){var c=e.getAttribute("data-mce-bogus");if(c){e=a.next("all"===c);continue}if(u=e.nodeName.toLowerCase(),t&&t[u]){if("br"===u){s++,e=a.next();continue}return!1}for(n=(r=b(e)).length;n--;)if("name"===(u=r[n].nodeName)||"data-mce-bookmark"===u)return!1}if(8===o)return!1;if(3===o&&!ci.test(e.nodeValue))return!1;if(3===o&&e.parentNode&&i[e.parentNode.nodeName]&&ci.test(e.nodeValue))return!1;e=a.next()}while(e)}return s<=1},createRng:M,nodeIndex:di,split:function(e,t,n){var r,o,i,a=M();if(e&&t)return a.setStart(e.parentNode,di(e)),a.setEnd(t.parentNode,di(t)),r=a.extractContents(),(a=M()).setStart(t.parentNode,di(t)+1),a.setEnd(e.parentNode,di(e)+1),o=a.extractContents(),(i=e.parentNode).insertBefore(Oo.trimNode(V,r),e),n?i.insertBefore(n,e):i.insertBefore(t,e),i.insertBefore(Oo.trimNode(V,o),e),P(e),n||t},bind:F,unbind:z,fire:function(e,t,n){return m.fire(e,t,n)},getContentEditable:U,getContentEditableParent:function(e){for(var t=C(),n=null;e&&e!==t&&null===(n=U(e));e=e.parentNode);return n},destroy:function(){if(l)for(var e=l.length;e--;){var t=l[e];m.unbind(t[0],t[1],t[2])}kt.setDocument&&kt.setDocument()},isChildOf:function(e,t){for(;e;){if(t===e)return!0;e=e.parentNode}return!1},dumpRng:function(e){return"startContainer: "+e.startContainer.nodeName+", startOffset: "+e.startOffset+", endContainer: "+e.endContainer.nodeName+", endOffset: "+e.endOffset}};return s=li(d,u,function(){return V}),V}(oi=mi||(mi={})).DOM=oi(document),oi.nodeIndex=di;var gi=mi,pi=gi.DOM,hi=Yt.each,vi=Yt.grep,bi=function(e){return"function"==typeof e},yi=function(){var l={},o=[],i={},a=[],f=0;this.isDone=function(e){return 2===l[e]},this.markDone=function(e){l[e]=2},this.add=this.load=function(e,t,n,r){l[e]===undefined&&(o.push(e),l[e]=0),t&&(i[e]||(i[e]=[]),i[e].push({success:t,failure:r,scope:n||this}))},this.remove=function(e){delete l[e],delete i[e]},this.loadQueue=function(e,t,n){this.loadScripts(o,e,t,n)},this.loadScripts=function(n,e,t,r){var u,s=[],c=function(t,e){hi(i[e],function(e){bi(e[t])&&e[t].call(e.scope)}),i[e]=undefined};a.push({success:e,failure:r,scope:t||this}),(u=function(){var e=vi(n);if(n.length=0,hi(e,function(e){var t,n,r,o,i,a;2!==l[e]?3!==l[e]?1!==l[e]&&(l[e]=1,f++,t=e,n=function(){l[e]=2,f--,c("success",e),u()},r=function(){l[e]=3,f--,s.push(e),c("failure",e),u()},i=(a=pi).uniqueId(),(o=document.createElement("script")).id=i,o.type="text/javascript",o.src=Yt._addCacheSuffix(t),o.onload=function(){a.remove(i),o&&(o.onreadystatechange=o.onload=o=null),n()},o.onerror=function(){bi(r)?r():"undefined"!=typeof console&&console.log&&console.log("Failed to load script: "+t)},(document.getElementsByTagName("head")[0]||document.body).appendChild(o)):c("failure",e):c("success",e)}),!f){var t=a.slice(0);a.length=0,hi(t,function(e){0===s.length?bi(e.success)&&e.success.call(e.scope):bi(e.failure)&&e.failure.call(e.scope,s)})}})()}};yi.ScriptLoader=new yi;var Ci,xi=Yt.each;function wi(){var r=this,o=[],a={},u={},i=[],s=function(e){var t;return u[e]&&(t=u[e].dependencies),t||[]},c=function(e,t){return"object"==typeof t?t:"string"==typeof e?{prefix:"",resource:t,suffix:""}:{prefix:e.prefix,resource:t,suffix:e.suffix}},l=function(e,n,t,r){var o=s(e);xi(o,function(e){var t=c(n,e);f(t.resource,t,undefined,undefined)}),t&&(r?t.call(r):t.call(yi))},f=function(e,t,n,r,o){if(!a[e]){var i="string"==typeof t?t:t.prefix+t.resource+t.suffix;0!==i.indexOf("/")&&-1===i.indexOf("://")&&(i=wi.baseURL+"/"+i),a[e]=i.substring(0,i.lastIndexOf("/")),u[e]?l(e,t,n,r):yi.ScriptLoader.add(i,function(){return l(e,t,n,r)},r,o)}};return{items:o,urls:a,lookup:u,_listeners:i,get:function(e){return u[e]?u[e].instance:undefined},dependencies:s,requireLangPack:function(e,t){var n=wi.language;if(n&&!1!==wi.languageLoad){if(t)if(-1!==(t=","+t+",").indexOf(","+n.substr(0,2)+","))n=n.substr(0,2);else if(-1===t.indexOf(","+n+","))return;yi.ScriptLoader.add(a[e]+"/langs/"+n+".js")}},add:function(t,e,n){o.push(e),u[t]={instance:e,dependencies:n};var r=W(i,function(e){return e.name===t});return i=r.fail,xi(r.pass,function(e){e.callback()}),e},remove:function(e){delete a[e],delete u[e]},createUrl:c,addComponents:function(e,t){var n=r.urls[e];xi(t,function(e){yi.ScriptLoader.add(n+"/"+e)})},load:f,waitFor:function(e,t){u.hasOwnProperty(e)?t():i.push({name:e,callback:t})}}}(Ci=wi||(wi={})).PluginManager=Ci(),Ci.ThemeManager=Ci();var Ni=function(t,n){Ir(t).each(function(e){e.dom().insertBefore(n.dom(),t.dom())})},Ei=function(e,t){Fr(e).fold(function(){Ir(e).each(function(e){ki(e,t)})},function(e){Ni(e,t)})},Si=function(t,n){jr(t).fold(function(){ki(t,n)},function(e){t.dom().insertBefore(n.dom(),e.dom())})},ki=function(e,t){e.dom().appendChild(t.dom())},Ti=function(t,e){F(e,function(e){ki(t,e)})},Ai=function(e){e.dom().textContent="",F(Vr(e),function(e){Ri(e)})},Ri=function(e){var t=e.dom();null!==t.parentNode&&t.parentNode.removeChild(t)},_i=function(e){var t,n=Vr(e);0<n.length&&(t=e,F(n,function(e){Ni(t,e)})),Ri(e)},Di=function(n,r){var o=null;return{cancel:function(){null!==o&&(clearTimeout(o),o=null)},throttle:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];null===o&&(o=setTimeout(function(){n.apply(null,e),o=null},r))}}},Bi=function(e){var t=e,n=function(){return t};return{get:n,set:function(e){t=e},clone:function(){return Bi(n())}}},Oi=function(e,t){var n=br(e,t);return n===undefined||""===n?[]:n.split(" ")},Pi=function(e){return e.dom().classList!==undefined},Li=function(e,t){return o=t,i=Oi(n=e,r="class").concat([o]),hr(n,r,i.join(" ")),!0;var n,r,o,i},Ii=function(e,t){return o=t,0<(i=z(Oi(n=e,r="class"),function(e){return e!==o})).length?hr(n,r,i.join(" ")):yr(n,r),!1;var n,r,o,i},Mi=function(e,t){Pi(e)?e.dom().classList.add(t):Li(e,t)},Fi=function(e){0===(Pi(e)?e.dom().classList:Oi(e,"class")).length&&yr(e,"class")},zi=function(e,t){return Pi(e)&&e.dom().classList.contains(t)},Ui=function(e,t){var n=[];return F(Vr(e),function(e){t(e)&&(n=n.concat([e])),n=n.concat(Ui(e,t))}),n},Vi=function(e,t){return n=t,o=(r=e)===undefined?document:r.dom(),Br(o)?[]:$(o.querySelectorAll(n),rr.fromDom);var n,r,o};function Hi(e,t,n,r,o){return e(n,r)?A.some(n):P(o)&&o(n)?A.none():t(n,r,o)}var ji,qi=function(e,t,n){for(var r=e.dom(),o=P(n)?n:j(!1);r.parentNode;){r=r.parentNode;var i=rr.fromDom(r);if(t(i))return A.some(i);if(o(i))break}return A.none()},$i=function(e,t,n){return Hi(function(e){return t(e)},qi,e,t,n)},Wi=function(e,t,n){return qi(e,function(e){return Dr(e,t)},n)},Ki=function(e,t){return n=t,o=(r=e)===undefined?document:r.dom(),Br(o)?A.none():A.from(o.querySelector(n)).map(rr.fromDom);var n,r,o},Xi=function(e,t,n){return Hi(Dr,Wi,e,t,n)},Yi=j("mce-annotation"),Gi=j("data-mce-annotation"),Ji=j("data-mce-annotation-uid"),Qi=function(r,e){var t=r.selection.getRng(),n=rr.fromDom(t.startContainer),o=rr.fromDom(r.getBody()),i=e.fold(function(){return"."+Yi()},function(e){return"["+Gi()+'="'+e+'"]'}),a=Hr(n,t.startOffset).getOr(n),u=Xi(a,i,function(e){return Or(e,o)}),s=function(e,t){return n=t,(r=e.dom())&&r.hasAttribute&&r.hasAttribute(n)?A.some(br(e,t)):A.none();var n,r};return u.bind(function(e){return s(e,""+Ji()).bind(function(n){return s(e,""+Gi()).map(function(e){var t=Zi(r,n);return{uid:n,name:e,elements:t}})})})},Zi=function(e,t){var n=rr.fromDom(e.getBody());return Vi(n,"["+Ji()+'="'+t+'"]')},ea=function(i,e){var n,r,o,a=Bi({}),c=function(e,t){u(e,function(e){return t(e),e})},u=function(e,t){var n=a.get(),r=t(n.hasOwnProperty(e)?n[e]:{listeners:[],previous:Bi(A.none())});n[e]=r,a.set(n)},t=(n=function(){var e,t,n,r=a.get(),o=(e=fr(r),(n=Q.call(e,0)).sort(t),n);F(o,function(e){u(e,function(u){var s=u.previous.get();return Qi(i,A.some(e)).fold(function(){var t;s.isSome()&&(c(t=e,function(e){F(e.listeners,function(e){return e(!1,t)})}),u.previous.set(A.none()))},function(e){var t,n,r,o=e.uid,i=e.name,a=e.elements;s.is(o)||(n=o,r=a,c(t=i,function(e){F(e.listeners,function(e){return e(!0,t,{uid:n,nodes:$(r,function(e){return e.dom()})})})}),u.previous.set(A.some(o)))}),{previous:u.previous,listeners:u.listeners}})})},r=30,o=null,{cancel:function(){null!==o&&(clearTimeout(o),o=null)},throttle:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];null!==o&&clearTimeout(o),o=setTimeout(function(){n.apply(null,e),o=null},r)}});return i.on("remove",function(){t.cancel()}),i.on("nodeChange",function(){t.throttle()}),{addListener:function(e,t){u(e,function(e){return{previous:e.previous,listeners:e.listeners.concat([t])}})}}},ta=function(e,n){e.on("init",function(){e.serializer.addNodeFilter("span",function(e){F(e,function(t){var e;(e=t,A.from(e.attributes.map[Gi()]).bind(n.lookup)).each(function(e){!1===e.persistent&&t.unwrap()})})})})},na=0,ra=function(e,t){return rr.fromDom(e.dom().cloneNode(t))},oa=function(e){return ra(e,!1)},ia=function(e){return ra(e,!0)},aa=function(e,t){var n,r,o=Lr(e).dom(),i=rr.fromDom(o.createDocumentFragment()),a=(n=t,(r=(o||document).createElement("div")).innerHTML=n,Vr(rr.fromDom(r)));Ti(i,a),Ai(e),ki(e,i)},ua="\ufeff",sa=function(e){return e===ua},ca=ua,la=function(e){return e.replace(new RegExp(ua,"g"),"")},fa=_o.isElement,da=_o.isText,ma=function(e){return da(e)&&(e=e.parentNode),fa(e)&&e.hasAttribute("data-mce-caret")},ga=function(e){return da(e)&&sa(e.data)},pa=function(e){return ma(e)||ga(e)},ha=function(e){return e.firstChild!==e.lastChild||!_o.isBr(e.firstChild)},va=function(e){var t=e.container();return e&&_o.isText(t)&&t.data.charAt(e.offset())===ca},ba=function(e){var t=e.container();return e&&_o.isText(t)&&t.data.charAt(e.offset()-1)===ca},ya=function(e,t,n){var r,o,i;return(r=t.ownerDocument.createElement(e)).setAttribute("data-mce-caret",n?"before":"after"),r.setAttribute("data-mce-bogus","all"),r.appendChild(((i=document.createElement("br")).setAttribute("data-mce-bogus","1"),i)),o=t.parentNode,n?o.insertBefore(r,t):t.nextSibling?o.insertBefore(r,t.nextSibling):o.appendChild(r),r},Ca=function(e){return da(e)&&e.data[0]===ca},xa=function(e){return da(e)&&e.data[e.data.length-1]===ca},wa=function(e){return e&&e.hasAttribute("data-mce-caret")?(t=e.getElementsByTagName("br"),n=t[t.length-1],_o.isBogus(n)&&n.parentNode.removeChild(n),e.removeAttribute("data-mce-caret"),e.removeAttribute("data-mce-bogus"),e.removeAttribute("style"),e.removeAttribute("_moz_abspos"),e):null;var t,n},Na=_o.isContentEditableTrue,Ea=_o.isContentEditableFalse,Sa=_o.isBr,ka=_o.isText,Ta=_o.matchNodeNames("script style textarea"),Aa=_o.matchNodeNames("img input textarea hr iframe video audio object"),Ra=_o.matchNodeNames("table"),_a=pa,Da=function(e){return!_a(e)&&(ka(e)?!Ta(e.parentNode):Aa(e)||Sa(e)||Ra(e)||Ba(e))},Ba=function(e){return!1===(t=e,_o.isElement(t)&&"true"===t.getAttribute("unselectable"))&&Ea(e);var t},Oa=function(e,t){return Da(e)&&function(e,t){for(e=e.parentNode;e&&e!==t;e=e.parentNode){if(Ba(e))return!1;if(Na(e))return!0}return!0}(e,t)},Pa=Math.round,La=function(e){return e?{left:Pa(e.left),top:Pa(e.top),bottom:Pa(e.bottom),right:Pa(e.right),width:Pa(e.width),height:Pa(e.height)}:{left:0,top:0,bottom:0,right:0,width:0,height:0}},Ia=function(e,t){return e=La(e),t||(e.left=e.left+e.width),e.right=e.left,e.width=0,e},Ma=function(e,t,n){return 0<=e&&e<=Math.min(t.height,n.height)/2},Fa=function(e,t){return e.bottom-e.height/2<t.top||!(e.top>t.bottom)&&Ma(t.top-e.bottom,e,t)},za=function(e,t){return e.top>t.bottom||!(e.bottom<t.top)&&Ma(t.bottom-e.top,e,t)},Ua=function(e){var t=e.startContainer,n=e.startOffset;return t.hasChildNodes()&&e.endOffset===n+1?t.childNodes[n]:null},Va=function(e,t){return 1===e.nodeType&&e.hasChildNodes()&&(t>=e.childNodes.length&&(t=e.childNodes.length-1),e=e.childNodes[t]),e},Ha=new RegExp("[\u0300-\u036f\u0483-\u0487\u0488-\u0489\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7-\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e3-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962-\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2-\u09e3\u0a01-\u0a02\u0a3c\u0a41-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a70-\u0a71\u0a75\u0a81-\u0a82\u0abc\u0ac1-\u0ac5\u0ac7-\u0ac8\u0acd\u0ae2-\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62-\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c62-\u0c63\u0c81\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc-\u0ccd\u0cd5-\u0cd6\u0ce2-\u0ce3\u0d01\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62-\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb-\u0ebc\u0ec8-\u0ecd\u0f18-\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039-\u103a\u103d-\u103e\u1058-\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17b4-\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193b\u1a17-\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abd\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80-\u1b81\u1ba2-\u1ba5\u1ba8-\u1ba9\u1bab-\u1bad\u1be6\u1be8-\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8-\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200c-\u200d\u20d0-\u20dc\u20dd-\u20e0\u20e1\u20e2-\u20e4\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u302e-\u302f\u3099-\u309a\ua66f\ua670-\ua672\ua674-\ua67d\ua69e-\ua69f\ua6f0-\ua6f1\ua802\ua806\ua80b\ua825-\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31-\uaa32\uaa35-\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7-\uaab8\uaabe-\uaabf\uaac1\uaaec-\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\uff9e-\uff9f]"),ja=function(e){return"string"==typeof e&&768<=e.charCodeAt(0)&&Ha.test(e)},qa=function(e,t){for(var n=[],r=0;r<e.length;r++){var o=e[r];if(!o.isSome())return A.none();n.push(o.getOrDie())}return A.some(t.apply(null,n))},$a=[].slice,Wa=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=$a.call(arguments);return function(e){for(var t=0;t<n.length;t++)if(!n[t](e))return!1;return!0}},Ka=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=$a.call(arguments);return function(e){for(var t=0;t<n.length;t++)if(n[t](e))return!0;return!1}},Xa=_o.isElement,Ya=Da,Ga=_o.matchStyleValues("display","block table"),Ja=_o.matchStyleValues("float","left right"),Qa=Wa(Xa,Ya,y(Ja)),Za=y(_o.matchStyleValues("white-space","pre pre-line pre-wrap")),eu=_o.isText,tu=_o.isBr,nu=gi.nodeIndex,ru=Va,ou=function(e){return"createRange"in e?e.createRange():gi.DOM.createRng()},iu=function(e){return e&&/[\r\n\t ]/.test(e)},au=function(e){return!!e.setStart&&!!e.setEnd},uu=function(e){var t,n=e.startContainer,r=e.startOffset;return!!(iu(e.toString())&&Za(n.parentNode)&&_o.isText(n)&&(t=n.data,iu(t[r-1])||iu(t[r+1])))},su=function(e){return 0===e.left&&0===e.right&&0===e.top&&0===e.bottom},cu=function(e){var t,n,r,o,i,a,u,s;return t=0<(n=e.getClientRects()).length?La(n[0]):La(e.getBoundingClientRect()),!au(e)&&tu(e)&&su(t)?(i=(r=e).ownerDocument,a=ou(i),u=i.createTextNode("\xa0"),(s=r.parentNode).insertBefore(u,r),a.setStart(u,0),a.setEnd(u,1),o=La(a.getBoundingClientRect()),s.removeChild(u),o):su(t)&&au(e)?function(e){var t=e.startContainer,n=e.endContainer,r=e.startOffset,o=e.endOffset;if(t===n&&_o.isText(n)&&0===r&&1===o){var i=e.cloneRange();return i.setEndAfter(n),cu(i)}return null}(e):t},lu=function(e,t){var n=Ia(e,t);return n.width=1,n.right=n.left+1,n},fu=function(e){var t,n,r=[],o=function(e){var t,n;0!==e.height&&(0<r.length&&(t=e,n=r[r.length-1],t.left===n.left&&t.top===n.top&&t.bottom===n.bottom&&t.right===n.right)||r.push(e))},i=function(e,t){var n=ou(e.ownerDocument);if(t<e.data.length){if(ja(e.data[t]))return r;if(ja(e.data[t-1])&&(n.setStart(e,t),n.setEnd(e,t+1),!uu(n)))return o(lu(cu(n),!1)),r}0<t&&(n.setStart(e,t-1),n.setEnd(e,t),uu(n)||o(lu(cu(n),!1))),t<e.data.length&&(n.setStart(e,t),n.setEnd(e,t+1),uu(n)||o(lu(cu(n),!0)))};if(eu(e.container()))return i(e.container(),e.offset()),r;if(Xa(e.container()))if(e.isAtEnd())n=ru(e.container(),e.offset()),eu(n)&&i(n,n.data.length),Qa(n)&&!tu(n)&&o(lu(cu(n),!1));else{if(n=ru(e.container(),e.offset()),eu(n)&&i(n,0),Qa(n)&&e.isAtEnd())return o(lu(cu(n),!1)),r;t=ru(e.container(),e.offset()-1),Qa(t)&&!tu(t)&&(Ga(t)||Ga(n)||!Qa(n))&&o(lu(cu(t),!1)),Qa(n)&&o(lu(cu(n),!0))}return r};function du(t,n,e){var r=function(){return e||(e=fu(du(t,n))),e};return{container:j(t),offset:j(n),toRange:function(){var e;return(e=ou(t.ownerDocument)).setStart(t,n),e.setEnd(t,n),e},getClientRects:r,isVisible:function(){return 0<r().length},isAtStart:function(){return eu(t),0===n},isAtEnd:function(){return eu(t)?n>=t.data.length:n>=t.childNodes.length},isEqual:function(e){return e&&t===e.container()&&n===e.offset()},getNode:function(e){return ru(t,e?n-1:n)}}}(ji=du||(du={})).fromRangeStart=function(e){return ji(e.startContainer,e.startOffset)},ji.fromRangeEnd=function(e){return ji(e.endContainer,e.endOffset)},ji.after=function(e){return ji(e.parentNode,nu(e)+1)},ji.before=function(e){return ji(e.parentNode,nu(e))},ji.isAbove=function(e,t){return qa([ee(t.getClientRects()),te(e.getClientRects())],Fa).getOr(!1)},ji.isBelow=function(e,t){return qa([te(t.getClientRects()),ee(e.getClientRects())],za).getOr(!1)},ji.isAtStart=function(e){return!!e&&e.isAtStart()},ji.isAtEnd=function(e){return!!e&&e.isAtEnd()},ji.isTextPosition=function(e){return!!e&&_o.isText(e.container())},ji.isElementPosition=function(e){return!1===ji.isTextPosition(e)};var mu,gu,pu,hu=du,vu=_o.isText,bu=_o.isBogus,yu=gi.nodeIndex,Cu=function(e){var t=e.parentNode;return bu(t)?Cu(t):t},xu=function(e){return e?qt.reduce(e.childNodes,function(e,t){return bu(t)&&"BR"!==t.nodeName?e=e.concat(xu(t)):e.push(t),e},[]):[]},wu=function(t){return function(e){return t===e}},Nu=function(e){var t,r,n,o;return(vu(e)?"text()":e.nodeName.toLowerCase())+"["+(r=xu(Cu(t=e)),n=qt.findIndex(r,wu(t),t),r=r.slice(0,n+1),o=qt.reduce(r,function(e,t,n){return vu(t)&&vu(r[n-1])&&e++,e},0),r=qt.filter(r,_o.matchNodeNames(t.nodeName)),(n=qt.findIndex(r,wu(t),t))-o)+"]"},Eu=function(e,t){var n,r,o,i,a,u=[];return n=t.container(),r=t.offset(),vu(n)?o=function(e,t){for(;(e=e.previousSibling)&&vu(e);)t+=e.data.length;return t}(n,r):(r>=(i=n.childNodes).length?(o="after",r=i.length-1):o="before",n=i[r]),u.push(Nu(n)),a=function(e,t,n){var r=[];for(t=t.parentNode;!(t===e||n&&n(t));t=t.parentNode)r.push(t);return r}(e,n),a=qt.filter(a,y(_o.isBogus)),(u=u.concat(qt.map(a,function(e){return Nu(e)}))).reverse().join("/")+","+o},Su=function(e,t){var n,r,o;return t?(t=(n=t.split(","))[0].split("/"),o=1<n.length?n[1]:"before",(r=qt.reduce(t,function(e,t){return(t=/([\w\-\(\)]+)\[([0-9]+)\]/.exec(t))?("text()"===t[1]&&(t[1]="#text"),n=e,r=t[1],o=parseInt(t[2],10),i=xu(n),i=qt.filter(i,function(e,t){return!vu(e)||!vu(i[t-1])}),(i=qt.filter(i,_o.matchNodeNames(r)))[o]):null;var n,r,o,i},e))?vu(r)?function(e,t){for(var n,r=e,o=0;vu(r);){if(n=r.data.length,o<=t&&t<=o+n){e=r,t-=o;break}if(!vu(r.nextSibling)){e=r,t=n;break}o+=n,r=r.nextSibling}return vu(e)&&t>e.data.length&&(t=e.data.length),hu(e,t)}(r,parseInt(o,10)):(o="after"===o?yu(r)+1:yu(r),hu(r.parentNode,o)):null):null},ku=_o.isContentEditableFalse,Tu=function(e,t,n,r,o){var i,a=r[o?"startContainer":"endContainer"],u=r[o?"startOffset":"endOffset"],s=[],c=0,l=e.getRoot();for(_o.isText(a)?s.push(n?function(e,t,n){var r,o;for(o=e(t.data.slice(0,n)).length,r=t.previousSibling;r&&_o.isText(r);r=r.previousSibling)o+=e(r.data).length;return o}(t,a,u):u):(u>=(i=a.childNodes).length&&i.length&&(c=1,u=Math.max(0,i.length-1)),s.push(e.nodeIndex(i[u],n)+c));a&&a!==l;a=a.parentNode)s.push(e.nodeIndex(a,n));return s},Au=function(e){_o.isText(e)&&0===e.data.length&&e.parentNode.removeChild(e)},Ru=function(e,t,n){var r=0;return Yt.each(e.select(t),function(e){if("all"!==e.getAttribute("data-mce-bogus"))return e!==n&&void r++}),r},_u=function(e,t){var n,r,o,i=t?"start":"end";n=e[i+"Container"],r=e[i+"Offset"],_o.isElement(n)&&"TR"===n.nodeName&&(n=(o=n.childNodes)[Math.min(t?r:r-1,o.length-1)])&&(r=t?0:n.childNodes.length,e["set"+(t?"Start":"End")](n,r))},Du=function(e){return _u(e,!0),_u(e,!1),e},Bu=function(e,t){var n;if(_o.isElement(e)&&(e=Va(e,t),ku(e)))return e;if(pa(e)){if(_o.isText(e)&&ma(e)&&(e=e.parentNode),n=e.previousSibling,ku(n))return n;if(n=e.nextSibling,ku(n))return n}},Ou=function(e,t,n){var r=n.getNode(),o=r?r.nodeName:null,i=n.getRng();if(ku(r)||"IMG"===o)return{name:o,index:Ru(n.dom,o,r)};var a,u,s,c,l,f,d,m=Bu((a=i).startContainer,a.startOffset)||Bu(a.endContainer,a.endOffset);return m?{name:o=m.tagName,index:Ru(n.dom,o,m)}:(u=e,c=t,l=i,f=(s=n).dom,(d={}).start=Tu(f,u,c,l,!0),s.isCollapsed()||(d.end=Tu(f,u,c,l,!1)),d)},Pu=function(e,t,n){var r={"data-mce-type":"bookmark",id:t,style:"overflow:hidden;line-height:0px"};return n?e.create("span",r,"&#xFEFF;"):e.create("span",r)},Lu=function(e,t){var n=e.dom,r=e.getRng(),o=n.uniqueId(),i=e.isCollapsed(),a=e.getNode(),u=a.nodeName;if("IMG"===u)return{name:u,index:Ru(n,u,a)};var s=Du(r.cloneRange());if(!i){s.collapse(!1);var c=Pu(n,o+"_end",t);s.insertNode(c),Au(c.nextSibling)}(r=Du(r)).collapse(!0);var l=Pu(n,o+"_start",t);return r.insertNode(l),Au(l.previousSibling),Au(l.nextSibling),e.moveToBookmark({id:o,keep:1}),{id:o}},Iu={getBookmark:function(e,t,n){return 2===t?Ou(la,n,e):3===t?(o=(r=e).getRng(),{start:Eu(r.dom.getRoot(),hu.fromRangeStart(o)),end:Eu(r.dom.getRoot(),hu.fromRangeEnd(o))}):t?{rng:e.getRng()}:Lu(e,!1);var r,o},getUndoBookmark:d(Ou,q,!0),getPersistentBookmark:Lu},Mu="_mce_caret",Fu=function(e){return _o.isElement(e)&&e.id===Mu},zu=function(e,t){for(;t&&t!==e;){if(t.id===Mu)return t;t=t.parentNode}return null},Uu=_o.isElement,Vu=_o.isText,Hu=function(e){var t=e.parentNode;t&&t.removeChild(e)},ju=function(e,t){0===t.length?Hu(e):e.nodeValue=t},qu=function(e){var t=la(e);return{count:e.length-t.length,text:t}},$u=function(e,t){return Xu(e),t},Wu=function(e,t){var n,r,o,i=t.container(),a=(n=ne(i.childNodes),r=e,o=I(n,r),-1===o?A.none():A.some(o)).map(function(e){return e<t.offset()?hu(i,t.offset()-1):t}).getOr(t);return Xu(e),a},Ku=function(e,t){return Vu(e)&&t.container()===e?(r=t,o=qu((n=e).data.substr(0,r.offset())),i=qu(n.data.substr(r.offset())),0<(a=o.text+i.text).length?(ju(n,a),hu(n,r.offset()-o.count)):r):$u(e,t);var n,r,o,i,a},Xu=function(e){if(Uu(e)&&pa(e)&&(ha(e)?e.removeAttribute("data-mce-caret"):Hu(e)),Vu(e)){var t=la(function(e){try{return e.nodeValue}catch(t){return""}}(e));ju(e,t)}},Yu={removeAndReposition:function(e,t){return hu.isTextPosition(t)?Ku(e,t):(n=e,(r=t).container()===n.parentNode?Wu(n,r):$u(n,r));var n,r},remove:Xu},Gu=tr.detect().browser,Ju=_o.isContentEditableFalse,Qu=function(e,t,n){var r,o,i,a,u,s=Ia(t.getBoundingClientRect(),n);return"BODY"===e.tagName?(r=e.ownerDocument.documentElement,o=e.scrollLeft||r.scrollLeft,i=e.scrollTop||r.scrollTop):(u=e.getBoundingClientRect(),o=e.scrollLeft-u.left,i=e.scrollTop-u.top),s.left+=o,s.right+=o,s.top+=i,s.bottom+=i,s.width=1,0<(a=t.offsetWidth-t.clientWidth)&&(n&&(a*=-1),s.left+=a,s.right+=a),s},Zu=function(a,u,e){var t,s,c=Bi(A.none()),l=function(){!function(e){var t,n,r,o,i;for(t=pn("*[contentEditable=false]",e),o=0;o<t.length;o++)r=(n=t[o]).previousSibling,xa(r)&&(1===(i=r.data).length?r.parentNode.removeChild(r):r.deleteData(i.length-1,1)),r=n.nextSibling,Ca(r)&&(1===(i=r.data).length?r.parentNode.removeChild(r):r.deleteData(0,1))}(a),s&&(Yu.remove(s),s=null),c.get().each(function(e){pn(e.caret).remove(),c.set(A.none())}),clearInterval(t)},f=function(){t=ve.setInterval(function(){e()?pn("div.mce-visual-caret",a).toggleClass("mce-visual-caret-hidden"):pn("div.mce-visual-caret",a).addClass("mce-visual-caret-hidden")},500)};return{show:function(t,e){var n,r,o;if(l(),o=e,_o.isElement(o)&&/^(TD|TH)$/i.test(o.tagName))return null;if(!u(e))return s=function(e,t){var n,r,o;if(r=e.ownerDocument.createTextNode(ca),o=e.parentNode,t){if(n=e.previousSibling,da(n)){if(pa(n))return n;if(xa(n))return n.splitText(n.data.length-1)}o.insertBefore(r,e)}else{if(n=e.nextSibling,da(n)){if(pa(n))return n;if(Ca(n))return n.splitText(1),n}e.nextSibling?o.insertBefore(r,e.nextSibling):o.appendChild(r)}return r}(e,t),r=e.ownerDocument.createRange(),Ju(s.nextSibling)?(r.setStart(s,0),r.setEnd(s,0)):(r.setStart(s,1),r.setEnd(s,1)),r;s=ya("p",e,t),n=Qu(a,e,t),pn(s).css("top",n.top);var i=pn('<div class="mce-visual-caret" data-mce-bogus="all"></div>').css(n).appendTo(a)[0];return c.set(A.some({caret:i,element:e,before:t})),c.get().each(function(e){t&&pn(e.caret).addClass("mce-visual-caret-before")}),f(),(r=e.ownerDocument.createRange()).setStart(s,0),r.setEnd(s,0),r},hide:l,getCss:function(){return".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}"},reposition:function(){c.get().each(function(e){var t=Qu(a,e.element,e.before);pn(e.caret).css(t)})},destroy:function(){return ve.clearInterval(t)}}},es=function(){return Gu.isIE()||Gu.isEdge()||Gu.isFirefox()},ts=function(e){return Ju(e)||_o.isTable(e)&&es()},ns=(mu="\xa0",function(e){return mu===e}),rs=function(e){return/^[\r\n\t ]$/.test(e)},os=function(e){return!rs(e)&&!ns(e)},is=_o.isContentEditableFalse,as=_o.matchStyleValues("display","block table table-cell table-caption list-item"),us=pa,ss=ma,cs=_o.isElement,ls=Da,fs=function(e){return 0<e},ds=function(e){return e<0},ms=function(e,t){for(var n;n=e(t);)if(!ss(n))return n;return null},gs=function(e,t,n,r,o){var i=new ro(e,r);if(ds(t)){if((is(e)||ss(e))&&n(e=ms(i.prev,!0)))return e;for(;e=ms(i.prev,o);)if(n(e))return e}if(fs(t)){if((is(e)||ss(e))&&n(e=ms(i.next,!0)))return e;for(;e=ms(i.next,o);)if(n(e))return e}return null},ps=function(e,t){for(;e&&e!==t;){if(as(e))return e;e=e.parentNode}return null},hs=function(e,t,n){return ps(e.container(),n)===ps(t.container(),n)},vs=function(e,t){var n,r;return t?(n=t.container(),r=t.offset(),cs(n)?n.childNodes[r+e]:null):null},bs=function(e,t){var n=t.ownerDocument.createRange();return e?(n.setStartBefore(t),n.setEndBefore(t)):(n.setStartAfter(t),n.setEndAfter(t)),n},ys=function(e,t,n){var r,o,i,a;for(o=e?"previousSibling":"nextSibling";n&&n!==t;){if(r=n[o],us(r)&&(r=r[o]),is(r)){if(a=n,ps(r,i=t)===ps(a,i))return r;break}if(ls(r))break;n=n.parentNode}return null},Cs=d(bs,!0),xs=d(bs,!1),ws=function(e,t,n){var r,o,i,a,u=d(ys,!0,t),s=d(ys,!1,t);if(o=n.startContainer,i=n.startOffset,ma(o)){if(cs(o)||(o=o.parentNode),"before"===(a=o.getAttribute("data-mce-caret"))&&(r=o.nextSibling,ts(r)))return Cs(r);if("after"===a&&(r=o.previousSibling,ts(r)))return xs(r)}if(!n.collapsed)return n;if(_o.isText(o)){if(us(o)){if(1===e){if(r=s(o))return Cs(r);if(r=u(o))return xs(r)}if(-1===e){if(r=u(o))return xs(r);if(r=s(o))return Cs(r)}return n}if(xa(o)&&i>=o.data.length-1)return 1===e&&(r=s(o))?Cs(r):n;if(Ca(o)&&i<=1)return-1===e&&(r=u(o))?xs(r):n;if(i===o.data.length)return(r=s(o))?Cs(r):n;if(0===i)return(r=u(o))?xs(r):n}return n},Ns=function(e,t){var n=vs(e,t);return is(n)&&!_o.isBogusAll(n)},Es=function(e,t){return _o.isTable(vs(e,t))},Ss=function(e,t){return A.from(vs(e?0:-1,t)).filter(is)},ks=function(e,t,n){var r=ws(e,t,n);return-1===e?du.fromRangeStart(r):du.fromRangeEnd(r)},Ts=d(Ns,0),As=d(Ns,-1),Rs=d(Es,0),_s=d(Es,-1),Ds=function(n,r,o){return A.from(o.container()).filter(_o.isText).exists(function(e){var t=n?0:-1;return r(e.data.charAt(o.offset()+t))})},Bs=d(Ds,!0,rs),Os=d(Ds,!1,rs),Ps=function(e){return A.from(e.getNode()).map(rr.fromDom)};(pu=gu||(gu={}))[pu.Backwards=-1]="Backwards",pu[pu.Forwards=1]="Forwards";var Ls,Is,Ms,Fs,zs,Us=_o.isContentEditableFalse,Vs=_o.isText,Hs=_o.isElement,js=_o.isBr,qs=Da,$s=function(e){return Aa(e)||!!Ba(t=e)&&!0!==U(ne(t.getElementsByTagName("*")),function(e,t){return e||Na(t)},!1);var t},Ws=Oa,Ks=function(e,t){return e.hasChildNodes()&&t<e.childNodes.length?e.childNodes[t]:null},Xs=function(e,t){if(fs(e)){if(qs(t.previousSibling)&&!Vs(t.previousSibling))return hu.before(t);if(Vs(t))return hu(t,0)}if(ds(e)){if(qs(t.nextSibling)&&!Vs(t.nextSibling))return hu.after(t);if(Vs(t))return hu(t,t.data.length)}return ds(e)?js(t)?hu.before(t):hu.after(t):hu.before(t)},Ys=function(e,t,n){var r,o,i,a,u;if(!Hs(n)||!t)return null;if(t.isEqual(hu.after(n))&&n.lastChild){if(u=hu.after(n.lastChild),ds(e)&&qs(n.lastChild)&&Hs(n.lastChild))return js(n.lastChild)?hu.before(n.lastChild):u}else u=t;var s,c,l,f=u.container(),d=u.offset();if(Vs(f)){if(ds(e)&&0<d)return hu(f,--d);if(fs(e)&&d<f.length)return hu(f,++d);r=f}else{if(ds(e)&&0<d&&(o=Ks(f,d-1),qs(o)))return!$s(o)&&(i=gs(o,e,Ws,o))?Vs(i)?hu(i,i.data.length):hu.after(i):Vs(o)?hu(o,o.data.length):hu.before(o);if(fs(e)&&d<f.childNodes.length&&(o=Ks(f,d),qs(o)))return js(o)?(s=n,(l=(c=o).nextSibling)&&qs(l)?Vs(l)?hu(l,0):hu.before(l):Ys(gu.Forwards,hu.after(c),s)):!$s(o)&&(i=gs(o,e,Ws,o))?Vs(i)?hu(i,0):hu.before(i):Vs(o)?hu(o,0):hu.after(o);r=o||u.getNode()}return(fs(e)&&u.isAtEnd()||ds(e)&&u.isAtStart())&&(r=gs(r,e,j(!0),n,!0),Ws(r,n))?Xs(e,r):(o=gs(r,e,Ws,n),!(a=qt.last(z(function(e,t){for(var n=[];e&&e!==t;)n.push(e),e=e.parentNode;return n}(f,n),Us)))||o&&a.contains(o)?o?Xs(e,o):null:u=fs(e)?hu.after(a):hu.before(a))},Gs=function(t){return{next:function(e){return Ys(gu.Forwards,e,t)},prev:function(e){return Ys(gu.Backwards,e,t)}}},Js=function(e){return hu.isTextPosition(e)?0===e.offset():Da(e.getNode())},Qs=function(e){if(hu.isTextPosition(e)){var t=e.container();return e.offset()===t.data.length}return Da(e.getNode(!0))},Zs=function(e,t){return!hu.isTextPosition(e)&&!hu.isTextPosition(t)&&e.getNode()===t.getNode(!0)},ec=function(e,t,n){return e?!Zs(t,n)&&(r=t,!(!hu.isTextPosition(r)&&_o.isBr(r.getNode())))&&Qs(t)&&Js(n):!Zs(n,t)&&Js(t)&&Qs(n);var r},tc=function(e,t,n){var r=Gs(t);return A.from(e?r.next(n):r.prev(n))},nc=function(e,t){var n,r,o,i,a,u=e?t.firstChild:t.lastChild;return _o.isText(u)?A.some(hu(u,e?0:u.data.length)):u?Da(u)?A.some(e?hu.before(u):(a=u,_o.isBr(a)?hu.before(a):hu.after(a))):(r=t,o=u,i=(n=e)?hu.before(o):hu.after(o),tc(n,r,i)):A.none()},rc=d(tc,!0),oc=d(tc,!1),ic={fromPosition:tc,nextPosition:rc,prevPosition:oc,navigate:function(t,n,r){return tc(t,n,r).bind(function(e){return hs(r,e,n)&&ec(t,r,e)?tc(t,n,e):A.some(e)})},positionIn:nc,firstPositionIn:d(nc,!0),lastPositionIn:d(nc,!1)},ac=function(e,t){return!e.isBlock(t)||t.innerHTML||de.ie||(t.innerHTML='<br data-mce-bogus="1" />'),t},uc=function(e,t){return ic.lastPositionIn(e).fold(function(){return!1},function(e){return t.setStart(e.container(),e.offset()),t.setEnd(e.container(),e.offset()),!0})},sc=function(e,t,n){return!(!1!==t.hasChildNodes()||!zu(e,t)||(o=n,i=(r=t).ownerDocument.createTextNode(ca),r.appendChild(i),o.setStart(i,0),o.setEnd(i,0),0));var r,o,i},cc=function(e,t,n,r){var o,i,a,u,s=n[t?"start":"end"],c=e.getRoot();if(s){for(a=s[0],i=c,o=s.length-1;1<=o;o--){if(u=i.childNodes,sc(c,i,r))return!0;if(s[o]>u.length-1)return!!sc(c,i,r)||uc(i,r);i=u[s[o]]}3===i.nodeType&&(a=Math.min(s[0],i.nodeValue.length)),1===i.nodeType&&(a=Math.min(s[0],i.childNodes.length)),t?r.setStart(i,a):r.setEnd(i,a)}return!0},lc=function(e){return _o.isText(e)&&0<e.data.length},fc=function(e,t,n){var r,o,i,a,u,s,c=e.get(n.id+"_"+t),l=n.keep;if(c){if(r=c.parentNode,"start"===t?l?c.hasChildNodes()?(r=c.firstChild,o=1):lc(c.nextSibling)?(r=c.nextSibling,o=0):lc(c.previousSibling)?(r=c.previousSibling,o=c.previousSibling.data.length):(r=c.parentNode,o=e.nodeIndex(c)+1):o=e.nodeIndex(c):l?c.hasChildNodes()?(r=c.firstChild,o=1):lc(c.previousSibling)?(r=c.previousSibling,o=c.previousSibling.data.length):(r=c.parentNode,o=e.nodeIndex(c)):o=e.nodeIndex(c),u=r,s=o,!l){for(a=c.previousSibling,i=c.nextSibling,Yt.each(Yt.grep(c.childNodes),function(e){_o.isText(e)&&(e.nodeValue=e.nodeValue.replace(/\uFEFF/g,""))});c=e.get(n.id+"_"+t);)e.remove(c,!0);a&&i&&a.nodeType===i.nodeType&&_o.isText(a)&&!de.opera&&(o=a.nodeValue.length,a.appendData(i.nodeValue),e.remove(i),u=a,s=o)}return A.some(hu(u,s))}return A.none()},dc=function(e,t){var n,r,o,i,a,u,s,c,l,f,d,m,g,p,h,v,b=e.dom;if(t){if(v=t,Yt.isArray(v.start))return p=t,h=(g=b).createRng(),cc(g,!0,p,h)&&cc(g,!1,p,h)?A.some(h):A.none();if("string"==typeof t.start)return A.some((f=t,d=(l=b).createRng(),m=Su(l.getRoot(),f.start),d.setStart(m.container(),m.offset()),m=Su(l.getRoot(),f.end),d.setEnd(m.container(),m.offset()),d));if(t.hasOwnProperty("id"))return s=fc(o=b,"start",i=t),c=fc(o,"end",i),qa([s,(a=c,u=s,a.isSome()?a:u)],function(e,t){var n=o.createRng();return n.setStart(ac(o,e.container()),e.offset()),n.setEnd(ac(o,t.container()),t.offset()),n});if(t.hasOwnProperty("name"))return n=b,r=t,A.from(n.select(r.name)[r.index]).map(function(e){var t=n.createRng();return t.selectNode(e),t});if(t.hasOwnProperty("rng"))return A.some(t.rng)}return A.none()},mc=function(e,t,n){return Iu.getBookmark(e,t,n)},gc=function(t,e){dc(t,e).each(function(e){t.setRng(e)})},pc=function(e){return _o.isElement(e)&&"SPAN"===e.tagName&&"bookmark"===e.getAttribute("data-mce-type")},hc=function(e){return e&&/^(IMG)$/.test(e.nodeName)},vc=function(e){return e&&3===e.nodeType&&/^([\t \r\n]+|)$/.test(e.nodeValue)},bc=function(e,t,n){return"color"!==n&&"backgroundColor"!==n||(t=e.toHex(t)),"fontWeight"===n&&700===t&&(t="bold"),"fontFamily"===n&&(t=t.replace(/[\'\"]/g,"").replace(/,\s+/g,",")),""+t},yc={isInlineBlock:hc,moveStart:function(e,t,n){var r,o,i,a=n.startOffset,u=n.startContainer;if((n.startContainer!==n.endContainer||!hc(n.startContainer.childNodes[n.startOffset]))&&1===u.nodeType)for(a<(i=u.childNodes).length?r=new ro(u=i[a],e.getParent(u,e.isBlock)):(r=new ro(u=i[i.length-1],e.getParent(u,e.isBlock))).next(!0),o=r.current();o;o=r.next())if(3===o.nodeType&&!vc(o))return n.setStart(o,0),void t.setRng(n)},getNonWhiteSpaceSibling:function(e,t,n){if(e)for(t=t?"nextSibling":"previousSibling",e=n?e:e[t];e;e=e[t])if(1===e.nodeType||!vc(e))return e},isTextBlock:function(e,t){return t.nodeType&&(t=t.nodeName),!!e.schema.getTextBlockElements()[t.toLowerCase()]},isValid:function(e,t,n){return e.schema.isValidChild(t,n)},isWhiteSpaceNode:vc,replaceVars:function(e,n){return"string"!=typeof e?e=e(n):n&&(e=e.replace(/%(\w+)/g,function(e,t){return n[t]||e})),e},isEq:function(e,t){return t=t||"",e=""+((e=e||"").nodeName||e),t=""+(t.nodeName||t),e.toLowerCase()===t.toLowerCase()},normalizeStyleValue:bc,getStyle:function(e,t,n){return bc(e,e.getStyle(t,n),n)},getTextDecoration:function(t,e){var n;return t.getParent(e,function(e){return(n=t.getStyle(e,"text-decoration"))&&"none"!==n}),n},getParents:function(e,t,n){return e.getParents(t,n,e.getRoot())}},Cc=pc,xc=yc.getParents,wc=yc.isWhiteSpaceNode,Nc=yc.isTextBlock,Ec=function(e,t){for(void 0===t&&(t=3===e.nodeType?e.length:e.childNodes.length);e&&e.hasChildNodes();)(e=e.childNodes[t])&&(t=3===e.nodeType?e.length:e.childNodes.length);return{node:e,offset:t}},Sc=function(e,t){for(var n=t;n;){if(1===n.nodeType&&e.getContentEditable(n))return"false"===e.getContentEditable(n)?n:t;n=n.parentNode}return t},kc=function(e,t,n,r){var o,i,a=n.nodeValue;return void 0===r&&(r=e?a.length:0),e?(o=a.lastIndexOf(" ",r),-1!==(o=(i=a.lastIndexOf("\xa0",r))<o?o:i)&&!t&&(o<r||!e)&&o<=a.length&&o++):(o=a.indexOf(" ",r),i=a.indexOf("\xa0",r),o=-1!==o&&(-1===i||o<i)?o:i),o},Tc=function(e,t,n,r,o,i){var a,u,s,c;if(3===n.nodeType){if(-1!==(s=kc(o,i,n,r)))return{container:n,offset:s};c=n}for(a=new ro(n,e.getParent(n,e.isBlock)||t);u=a[o?"prev":"next"]();)if(3!==u.nodeType||Cc(u.parentNode)){if(e.isBlock(u)||yc.isEq(u,"BR"))break}else if(-1!==(s=kc(o,i,c=u)))return{container:u,offset:s};if(c)return{container:c,offset:r=o?0:c.length}},Ac=function(e,t,n,r,o){var i,a,u,s;for(3===r.nodeType&&0===r.nodeValue.length&&r[o]&&(r=r[o]),i=xc(e,r),a=0;a<i.length;a++)for(u=0;u<t.length;u++)if(!("collapsed"in(s=t[u])&&s.collapsed!==n.collapsed)&&e.is(i[a],s.selector))return i[a];return r},Rc=function(t,e,n,r){var o,i=t.dom,a=i.getRoot();if(e[0].wrapper||(o=i.getParent(n,e[0].block,a)),!o){var u=i.getParent(n,"LI,TD,TH");o=i.getParent(3===n.nodeType?n.parentNode:n,function(e){return e!==a&&Nc(t,e)},u)}if(o&&e[0].wrapper&&(o=xc(i,o,"ul,ol").reverse()[0]||o),!o)for(o=n;o[r]&&!i.isBlock(o[r])&&(o=o[r],!yc.isEq(o,"br")););return o||n},_c=function(e,t,n,r,o,i,a){var u,s,c,l,f,d;if(u=s=a?n:o,l=a?"previousSibling":"nextSibling",f=e.getRoot(),3===u.nodeType&&!wc(u)&&(a?0<r:i<u.nodeValue.length))return u;for(;;){if(!t[0].block_expand&&e.isBlock(s))return s;for(c=s[l];c;c=c[l])if(!Cc(c)&&!wc(c)&&("BR"!==(d=c).nodeName||!d.getAttribute("data-mce-bogus")||d.nextSibling))return s;if(s===f||s.parentNode===f){u=s;break}s=s.parentNode}return u},Dc=function(e,t,n,r){var o,i=t.startContainer,a=t.startOffset,u=t.endContainer,s=t.endOffset,c=e.dom;return 1===i.nodeType&&i.hasChildNodes()&&3===(i=Va(i,a)).nodeType&&(a=0),1===u.nodeType&&u.hasChildNodes()&&3===(u=Va(u,t.collapsed?s:s-1)).nodeType&&(s=u.nodeValue.length),i=Sc(c,i),u=Sc(c,u),(Cc(i.parentNode)||Cc(i))&&(i=Cc(i)?i:i.parentNode,3===(i=t.collapsed?i.previousSibling||i:i.nextSibling||i).nodeType&&(a=t.collapsed?i.length:0)),(Cc(u.parentNode)||Cc(u))&&(u=Cc(u)?u:u.parentNode,3===(u=t.collapsed?u.nextSibling||u:u.previousSibling||u).nodeType&&(s=t.collapsed?0:u.length)),t.collapsed&&((o=Tc(c,e.getBody(),i,a,!0,r))&&(i=o.container,a=o.offset),(o=Tc(c,e.getBody(),u,s,!1,r))&&(u=o.container,s=o.offset)),n[0].inline&&(u=r?u:function(e,t){var n=Ec(e,t);if(n.node){for(;n.node&&0===n.offset&&n.node.previousSibling;)n=Ec(n.node.previousSibling);n.node&&0<n.offset&&3===n.node.nodeType&&" "===n.node.nodeValue.charAt(n.offset-1)&&1<n.offset&&(e=n.node).splitText(n.offset-1)}return e}(u,s)),(n[0].inline||n[0].block_expand)&&(n[0].inline&&3===i.nodeType&&0!==a||(i=_c(c,n,i,a,u,s,!0)),n[0].inline&&3===u.nodeType&&s!==u.nodeValue.length||(u=_c(c,n,i,a,u,s,!1))),n[0].selector&&!1!==n[0].expand&&!n[0].inline&&(i=Ac(c,n,t,i,"previousSibling"),u=Ac(c,n,t,u,"nextSibling")),(n[0].block||n[0].selector)&&(i=Rc(e,n,i,"previousSibling"),u=Rc(e,n,u,"nextSibling"),n[0].block&&(c.isBlock(i)||(i=_c(c,n,i,a,u,s,!0)),c.isBlock(u)||(u=_c(c,n,i,a,u,s,!1)))),1===i.nodeType&&(a=c.nodeIndex(i),i=i.parentNode),1===u.nodeType&&(s=c.nodeIndex(u)+1,u=u.parentNode),{startContainer:i,startOffset:a,endContainer:u,endOffset:s}},Bc=Yt.each,Oc=function(e,t,o){var n,r,i,a,u,s,c,l=t.startContainer,f=t.startOffset,d=t.endContainer,m=t.endOffset;if(0<(c=e.select("td[data-mce-selected],th[data-mce-selected]")).length)Bc(c,function(e){o([e])});else{var g,p,h,v=function(e){var t;return 3===(t=e[0]).nodeType&&t===l&&f>=t.nodeValue.length&&e.splice(0,1),t=e[e.length-1],0===m&&0<e.length&&t===d&&3===t.nodeType&&e.splice(e.length-1,1),e},b=function(e,t,n){for(var r=[];e&&e!==n;e=e[t])r.push(e);return r},y=function(e,t){do{if(e.parentNode===t)return e;e=e.parentNode}while(e)},C=function(e,t,n){var r=n?"nextSibling":"previousSibling";for(u=(a=e).parentNode;a&&a!==t;a=u)u=a.parentNode,(s=b(a===e?a:a[r],r)).length&&(n||s.reverse(),o(v(s)))};if(1===l.nodeType&&l.hasChildNodes()&&(l=l.childNodes[f]),1===d.nodeType&&d.hasChildNodes()&&(p=m,h=(g=d).childNodes,--p>h.length-1?p=h.length-1:p<0&&(p=0),d=h[p]||g),l===d)return o(v([l]));for(n=e.findCommonAncestor(l,d),a=l;a;a=a.parentNode){if(a===d)return C(l,n,!0);if(a===n)break}for(a=d;a;a=a.parentNode){if(a===l)return C(d,n);if(a===n)break}r=y(l,n)||l,i=y(d,n)||d,C(l,r,!0),(s=b(r===l?r:r.nextSibling,"nextSibling",i===d?i.nextSibling:i)).length&&o(v(s)),C(d,i)}},Pc=(Ls=lr,Is="text",Ms=function(e){return Ls(e)?A.from(e.dom().nodeValue):A.none()},Fs=tr.detect().browser,{get:function(e){if(!Ls(e))throw new Error("Can only get "+Is+" value of a "+Is+" node");return zs(e).getOr("")},getOption:zs=Fs.isIE()&&10===Fs.version.major?function(e){try{return Ms(e)}catch(LN){return A.none()}}:Ms,set:function(e,t){if(!Ls(e))throw new Error("Can only set raw "+Is+" value of a "+Is+" node");e.dom().nodeValue=t}}),Lc=function(e){return Pc.get(e)},Ic=function(r,o,i,a){return Ir(o).fold(function(){return"skipping"},function(e){return"br"===a||lr(n=o)&&"\ufeff"===Lc(n)?"valid":cr(t=o)&&zi(t,Yi())?"existing":Fu(o)?"caret":yc.isValid(r,i,a)&&yc.isValid(r,ur(e),i)?"valid":"invalid-child";var t,n})},Mc=function(e,t,n,r){var o,i,a=t.uid,u=void 0===a?(o="mce-annotation",i=(new Date).getTime(),o+"_"+Math.floor(1e9*Math.random())+ ++na+String(i)):a,s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n}(t,["uid"]),c=rr.fromTag("span",e);Mi(c,Yi()),hr(c,""+Ji(),u),hr(c,""+Gi(),n);var l,f=r(u,s),d=f.attributes,m=void 0===d?{}:d,g=f.classes,p=void 0===g?[]:g;return vr(c,m),l=c,F(p,function(e){Mi(l,e)}),c},Fc=function(i,e,t,n,r){var a=[],u=Mc(i.getDoc(),r,t,n),s=Bi(A.none()),c=function(){s.set(A.none())},l=function(e){F(e,o)},o=function(e){var t,n;switch(Ic(i,e,"span",ur(e))){case"invalid-child":c();var r=Vr(e);l(r),c();break;case"valid":var o=s.get().getOrThunk(function(){var e=oa(u);return a.push(e),s.set(A.some(e)),e});Ni(t=e,n=o),ki(n,t)}};return Oc(i.dom,e,function(e){var t;c(),t=$(e,rr.fromDom),l(t)}),a},zc=function(s,c,l,f){s.undoManager.transact(function(){var e,t,n,r,o=s.selection.getRng();if(o.collapsed&&(r=Dc(e=s,t=o,[{inline:!0}],3===(n=t).startContainer.nodeType&&n.startContainer.nodeValue.length>=n.startOffset&&"\xa0"===n.startContainer.nodeValue[n.startOffset]),t.setStart(r.startContainer,r.startOffset),t.setEnd(r.endContainer,r.endOffset),e.selection.setRng(t)),s.selection.getRng().collapsed){var i=Mc(s.getDoc(),f,c,l.decorate);aa(i,"\xa0"),s.selection.getRng().insertNode(i.dom()),s.selection.select(i.dom())}else{var a=Iu.getPersistentBookmark(s.selection,!1),u=s.selection.getRng();Fc(s,u,c,l.decorate,f),s.selection.moveToBookmark(a)}})};function Uc(s){var n,r=(n={},{register:function(e,t){n[e]={name:e,settings:t}},lookup:function(e){return n.hasOwnProperty(e)?A.from(n[e]).map(function(e){return e.settings}):A.none()}});ta(s,r);var o=ea(s);return{register:function(e,t){r.register(e,t)},annotate:function(t,n){r.lookup(t).each(function(e){zc(s,t,e,n)})},annotationChanged:function(e,t){o.addListener(e,t)},remove:function(e){Qi(s,A.some(e)).each(function(e){var t=e.elements;F(t,_i)})},getAll:function(e){var t,n,r,o,i,a,u=(t=s,n=e,r=rr.fromDom(t.getBody()),o=Vi(r,"["+Gi()+'="'+n+'"]'),i={},F(o,function(e){var t=br(e,Ji()),n=i.hasOwnProperty(t)?i[t]:[];i[t]=n.concat([e])}),i);return a=function(e){return $(e,function(e){return e.dom()})},gr(u,function(e,t,n){return{k:t,v:a(e,t,n)}})}}}var Vc=function(e){return Yt.grep(e.childNodes,function(e){return"LI"===e.nodeName})},Hc=function(e){return e&&e.firstChild&&e.firstChild===e.lastChild&&("\xa0"===(t=e.firstChild).data||_o.isBr(t));var t},jc=function(e){return 0<e.length&&(!(t=e[e.length-1]).firstChild||Hc(t))?e.slice(0,-1):e;var t},qc=function(e,t){var n=e.getParent(t,e.isBlock);return n&&"LI"===n.nodeName?n:null},$c=function(e,t){var n=hu.after(e),r=Gs(t).prev(n);return r?r.toRange():null},Wc=function(t,e,n){var r,o,i,a,u=t.parentNode;return Yt.each(e,function(e){u.insertBefore(e,t)}),r=t,o=n,i=hu.before(r),(a=Gs(o).next(i))?a.toRange():null},Kc=function(e,t){var n,r,o,i,a,u,s=t.firstChild,c=t.lastChild;return s&&"meta"===s.name&&(s=s.next),c&&"mce_marker"===c.attr("id")&&(c=c.prev),r=c,u=(n=e).getNonEmptyElements(),r&&(r.isEmpty(u)||(o=r,n.getBlockElements()[o.name]&&(a=o).firstChild&&a.firstChild===a.lastChild&&("br"===(i=o.firstChild).name||"\xa0"===i.value)))&&(c=c.prev),!(!s||s!==c||"ul"!==s.name&&"ol"!==s.name)},Xc=function(e,o,i,t){var n,r,a,u,s,c,l,f,d,m,g,p,h,v,b,y,C,x,w,N=(n=o,r=t,c=e.serialize(r),l=n.createFragment(c),u=(a=l).firstChild,s=a.lastChild,u&&"META"===u.nodeName&&u.parentNode.removeChild(u),s&&"mce_marker"===s.id&&s.parentNode.removeChild(s),a),E=qc(o,i.startContainer),S=jc(Vc(N.firstChild)),k=o.getRoot(),T=function(e){var t=hu.fromRangeStart(i),n=Gs(o.getRoot()),r=1===e?n.prev(t):n.next(t);return!r||qc(o,r.getNode())!==E};return T(1)?Wc(E,S,k):T(2)?(f=E,d=S,m=k,o.insertAfter(d.reverse(),f),$c(d[0],m)):(p=S,h=k,v=g=E,y=(b=i).cloneRange(),C=b.cloneRange(),y.setStartBefore(v),C.setEndAfter(v),x=[y.cloneContents(),C.cloneContents()],(w=g.parentNode).insertBefore(x[0],g),Yt.each(p,function(e){w.insertBefore(e,g)}),w.insertBefore(x[1],g),w.removeChild(g),$c(p[p.length-1],h))},Yc=function(e,t){return!!qc(e,t)},Gc=Yt.each,Jc=function(o){this.compare=function(e,t){if(e.nodeName!==t.nodeName)return!1;var n=function(n){var r={};return Gc(o.getAttribs(n),function(e){var t=e.nodeName.toLowerCase();0!==t.indexOf("_")&&"style"!==t&&0!==t.indexOf("data-")&&(r[t]=o.getAttrib(n,t))}),r},r=function(e,t){var n,r;for(r in e)if(e.hasOwnProperty(r)){if(void 0===(n=t[r]))return!1;if(e[r]!==n)return!1;delete t[r]}for(r in t)if(t.hasOwnProperty(r))return!1;return!0};return!(!r(n(e),n(t))||!r(o.parseStyle(o.getAttrib(e,"style")),o.parseStyle(o.getAttrib(t,"style")))||pc(e)||pc(t))}},Qc=function(e){var t=Vi(e,"br"),n=z(function(e){for(var t=[],n=e.dom();n;)t.push(rr.fromDom(n)),n=n.lastChild;return t}(e).slice(-1),fo);t.length===n.length&&F(n,Ri)},Zc=function(e){Ai(e),ki(e,rr.fromHtml('<br data-mce-bogus="1">'))},el=function(n){qr(n).each(function(t){Mr(t).each(function(e){co(n)&&fo(t)&&co(e)&&Ri(t)})})},tl=Yt.makeMap;function nl(e){var u,s,c,l,f,d=[];return u=(e=e||{}).indent,s=tl(e.indent_before||""),c=tl(e.indent_after||""),l=qo.getEncodeFunc(e.entity_encoding||"raw",e.entities),f="html"===e.element_format,{start:function(e,t,n){var r,o,i,a;if(u&&s[e]&&0<d.length&&0<(a=d[d.length-1]).length&&"\n"!==a&&d.push("\n"),d.push("<",e),t)for(r=0,o=t.length;r<o;r++)i=t[r],d.push(" ",i.name,'="',l(i.value,!0),'"');d[d.length]=!n||f?">":" />",n&&u&&c[e]&&0<d.length&&0<(a=d[d.length-1]).length&&"\n"!==a&&d.push("\n")},end:function(e){var t;d.push("</",e,">"),u&&c[e]&&0<d.length&&0<(t=d[d.length-1]).length&&"\n"!==t&&d.push("\n")},text:function(e,t){0<e.length&&(d[d.length]=t?e:l(e))},cdata:function(e){d.push("<![CDATA[",e,"]]>")},comment:function(e){d.push("\x3c!--",e,"--\x3e")},pi:function(e,t){t?d.push("<?",e," ",l(t),"?>"):d.push("<?",e,"?>"),u&&d.push("\n")},doctype:function(e){d.push("<!DOCTYPE",e,">",u?"\n":"")},reset:function(){d.length=0},getContent:function(){return d.join("").replace(/\n$/,"")}}}function rl(t,g){void 0===g&&(g=ti());var p=nl(t);return(t=t||{}).validate=!("validate"in t)||t.validate,{serialize:function(e){var f,d;d=t.validate,f={3:function(e){p.text(e.value,e.raw)},8:function(e){p.comment(e.value)},7:function(e){p.pi(e.name,e.value)},10:function(e){p.doctype(e.value)},4:function(e){p.cdata(e.value)},11:function(e){if(e=e.firstChild)for(;m(e),e=e.next;);}},p.reset();var m=function(e){var t,n,r,o,i,a,u,s,c,l=f[e.type];if(l)l(e);else{if(t=e.name,n=e.shortEnded,r=e.attributes,d&&r&&1<r.length&&((a=[]).map={},c=g.getElementRule(e.name))){for(u=0,s=c.attributesOrder.length;u<s;u++)(o=c.attributesOrder[u])in r.map&&(i=r.map[o],a.map[o]=i,a.push({name:o,value:i}));for(u=0,s=r.length;u<s;u++)(o=r[u].name)in a.map||(i=r.map[o],a.map[o]=i,a.push({name:o,value:i}));r=a}if(p.start(e.name,r,n),!n){if(e=e.firstChild)for(;m(e),e=e.next;);p.end(t)}}};return 1!==e.type||t.inner?f[11](e):m(e),p.getContent()}}}var ol=function(a){var u=hu.fromRangeStart(a),s=hu.fromRangeEnd(a),c=a.commonAncestorContainer;return ic.fromPosition(!1,c,s).map(function(e){return!hs(u,s,c)&&hs(u,e,c)?(t=u.container(),n=u.offset(),r=e.container(),o=e.offset(),(i=document.createRange()).setStart(t,n),i.setEnd(r,o),i):a;var t,n,r,o,i}).getOr(a)},il=function(e){return e.collapsed?e:ol(e)},al=_o.matchNodeNames("td th"),ul=function(e,t){var n,r,o=e.selection.getRng(),i=o.startContainer,a=o.startOffset;o.collapsed&&(n=i,r=a,_o.isText(n)&&"\xa0"===n.nodeValue[r-1])&&_o.isText(i)&&(i.insertData(a-1," "),i.deleteData(a,1),o.setStart(i,a),o.setEnd(i,a),e.selection.setRng(o)),e.selection.setContent(t)},sl=function(e,t,n){var r,o,i,a,u,s,c,l,f,d,m,g=e.selection,p=e.dom;if(/^ | $/.test(t)&&(t=function(e,t){var n,r;n=e.startContainer,r=e.startOffset;var o=function(e){return n[e]&&3===n[e].nodeType};return 3===n.nodeType&&(0<r?t=t.replace(/^&nbsp;/," "):o("previousSibling")||(t=t.replace(/^ /,"&nbsp;")),r<n.length?t=t.replace(/&nbsp;(<br>|)$/," "):o("nextSibling")||(t=t.replace(/(&nbsp;| )(<br>|)$/,"&nbsp;"))),t}(g.getRng(),t)),r=e.parser,m=n.merge,o=rl({validate:e.settings.validate},e.schema),d='<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;&#x200B;</span>',s={content:t,format:"html",selection:!0,paste:n.paste},(s=e.fire("BeforeSetContent",s)).isDefaultPrevented())e.fire("SetContent",{content:s.content,format:"html",selection:!0,paste:n.paste});else{-1===(t=s.content).indexOf("{$caret}")&&(t+="{$caret}"),t=t.replace(/\{\$caret\}/,d);var h,v,b,y,C,x,w=(l=g.getRng()).startContainer||(l.parentElement?l.parentElement():null),N=e.getBody();w===N&&g.isCollapsed()&&p.isBlock(N.firstChild)&&(h=e,(v=N.firstChild)&&!h.schema.getShortEndedElements()[v.nodeName])&&p.isEmpty(N.firstChild)&&((l=p.createRng()).setStart(N.firstChild,0),l.setEnd(N.firstChild,0),g.setRng(l)),g.isCollapsed()||(e.selection.setRng(il(e.selection.getRng())),e.getDoc().execCommand("Delete",!1,null),b=e.selection.getRng(),y=t,C=b.startContainer,x=b.startOffset,3===C.nodeType&&b.collapsed&&("\xa0"===C.data[x]?(C.deleteData(x,1),/[\u00a0| ]$/.test(y)||(y+=" ")):"\xa0"===C.data[x-1]&&(C.deleteData(x-1,1),/[\u00a0| ]$/.test(y)||(y=" "+y))),t=y);var E,S,k,T={context:(i=g.getNode()).nodeName.toLowerCase(),data:n.data,insert:!0};if(u=r.parse(t,T),!0===n.paste&&Kc(e.schema,u)&&Yc(p,i))return l=Xc(o,p,e.selection.getRng(),u),e.selection.setRng(l),void e.fire("SetContent",s);if(function(e){for(var t=e;t=t.walk();)1===t.type&&t.attr("data-mce-fragment","1")}(u),"mce_marker"===(f=u.lastChild).attr("id"))for(f=(c=f).prev;f;f=f.walk(!0))if(3===f.type||!p.isBlock(f.name)){e.schema.isValidChild(f.parent.name,"span")&&f.parent.insert(c,f,"br"===f.name);break}if(e._selectionOverrides.showBlockCaretContainer(i),T.invalid){for(ul(e,d),i=g.getNode(),a=e.getBody(),9===i.nodeType?i=f=a:f=i;f!==a;)f=(i=f).parentNode;t=i===a?a.innerHTML:p.getOuterHTML(i),t=o.serialize(r.parse(t.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i,function(){return o.serialize(u)}))),i===a?p.setHTML(a,t):p.setOuterHTML(i,t)}else!function(e,t,n){if("all"===n.getAttribute("data-mce-bogus"))n.parentNode.insertBefore(e.dom.createFragment(t),n);else{var r=n.firstChild,o=n.lastChild;!r||r===o&&"BR"===r.nodeName?e.dom.setHTML(n,t):ul(e,t)}}(e,t=o.serialize(u),i);!function(e,t){var n=e.schema.getTextInlineElements(),r=e.dom;if(t){var o=e.getBody(),i=new Jc(r);Yt.each(r.select("*[data-mce-fragment]"),function(e){for(var t=e.parentNode;t&&t!==o;t=t.parentNode)n[e.nodeName.toLowerCase()]&&i.compare(t,e)&&r.remove(e,!0)})}}(e,m),function(n,e){var t,r,o,i,a,u=n.dom,s=n.selection;if(e){if(n.selection.scrollIntoView(e),t=function(e){for(var t=n.getBody();e&&e!==t;e=e.parentNode)if("false"===n.dom.getContentEditable(e))return e;return null}(e))return u.remove(e),s.select(t);var c=u.createRng();(i=e.previousSibling)&&3===i.nodeType?(c.setStart(i,i.nodeValue.length),de.ie||(a=e.nextSibling)&&3===a.nodeType&&(i.appendData(a.data),a.parentNode.removeChild(a))):(c.setStartBefore(e),c.setEndBefore(e)),r=u.getParent(e,u.isBlock),u.remove(e),r&&u.isEmpty(r)&&(n.$(r).empty(),c.setStart(r,0),c.setEnd(r,0),al(r)||r.getAttribute("data-mce-fragment")||!(o=function(e){var t=hu.fromRangeStart(e);if(t=Gs(n.getBody()).next(t))return t.toRange()}(c))?u.add(r,u.create("br",{"data-mce-bogus":"1"})):(c=o,u.remove(r))),s.setRng(c)}}(e,p.get("mce_marker")),E=e.getBody(),Yt.each(E.getElementsByTagName("*"),function(e){e.removeAttribute("data-mce-fragment")}),S=e.dom,k=e.selection.getStart(),A.from(S.getParent(k,"td,th")).map(rr.fromDom).each(el),e.fire("SetContent",s),e.addVisual()}},cl=function(e,t){var n,r,o="string"!=typeof(n=t)?(r=Yt.extend({paste:n.paste,data:{paste:n.paste}},n),{content:n.content,details:r}):{content:n,details:{}};sl(e,o.content,o.details)},ll=Er("sections","settings"),fl=tr.detect().deviceType.isTouch(),dl=["lists","autolink","autosave"],ml={theme:"mobile"},gl=function(e){var t=D(e)?e.join(" "):e,n=$(R(t)?t.split(" "):[],Kn);return z(n,function(e){return 0<e.length})},pl=function(n,e){var r,o,i,t=(r=function(e,t){return M(n,t)},o={},i={},mr(e,function(e,t){(r(e,t)?o:i)[t]=e}),{t:o,f:i});return ll(t.t,t.f)},hl=function(e,t){return e.sections().hasOwnProperty(t)},vl=function(e,t,n,r){var o,i=gl(n.forced_plugins),a=gl(r.plugins),u=e&&hl(t,"mobile")?z(a,d(M,dl)):a,s=(o=u,[].concat(gl(i)).concat(gl(o)));return Yt.extend(r,{plugins:s.join(" ")})},bl=function(e,t,n,r){var o,i,a,u,s,c,l,f,d,m,g=pl(["mobile"],r),p=Yt.extend(t,n,g.settings(),(f=e,m=(d=g).settings().inline,f&&hl(d,"mobile")&&!m?(u="mobile",s=ml,c=g.sections(),l=c.hasOwnProperty(u)?c[u]:{},Yt.extend({},s,l)):{}),{validate:!0,content_editable:g.settings().inline,external_plugins:(o=n,i=g.settings(),a=i.external_plugins?i.external_plugins:{},o&&o.external_plugins?Yt.extend({},o.external_plugins,a):a)});return vl(e,g,n,p)},yl=function(e,t,n){return A.from(t.settings[n]).filter(e)},Cl=d(yl,R),xl=function(e,t,n,r){var o,i,a,u=t in e.settings?e.settings[t]:n;return"hash"===r?(a={},"string"==typeof(i=u)?F(0<i.indexOf("=")?i.split(/[;,](?![^=;,]*(?:[;,]|$))/):i.split(","),function(e){var t=e.split("=");1<t.length?a[Yt.trim(t[0])]=Yt.trim(t[1]):a[Yt.trim(t[0])]=Yt.trim(t)}):a=i,a):"string"===r?yl(R,e,t).getOr(n):"number"===r?yl(L,e,t).getOr(n):"boolean"===r?yl(O,e,t).getOr(n):"object"===r?yl(_,e,t).getOr(n):"array"===r?yl(D,e,t).getOr(n):"string[]"===r?yl((o=R,function(e){return D(e)&&J(e,o)}),e,t).getOr(n):"function"===r?yl(P,e,t).getOr(n):u},wl=/[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,Nl=function(e,t){var n=t.container(),r=t.offset();return e?ga(n)?_o.isText(n.nextSibling)?hu(n.nextSibling,0):hu.after(n):va(t)?hu(n,r+1):t:ga(n)?_o.isText(n.previousSibling)?hu(n.previousSibling,n.previousSibling.data.length):hu.before(n):ba(t)?hu(n,r-1):t},El={isInlineTarget:function(e,t){var n=Cl(e,"inline_boundaries_selector").getOr("a[href],code");return Dr(rr.fromDom(t),n)},findRootInline:function(e,t,n){var r,o,i,a=(r=e,o=t,i=n,z(gi.DOM.getParents(i.container(),"*",o),r));return A.from(a[a.length-1])},isRtl:function(e){return"rtl"===gi.DOM.getStyle(e,"direction",!0)||(t=e.textContent,wl.test(t));var t},isAtZwsp:function(e){return va(e)||ba(e)},normalizePosition:Nl,normalizeForwards:d(Nl,!0),normalizeBackwards:d(Nl,!1),hasSameParentBlock:function(e,t,n){var r=ps(t,e),o=ps(n,e);return r&&r===o}},Sl=function(e,t){return Pr(e,t)?$i(t,function(e){return mo(e)||po(e)},(n=e,function(e){return Or(n,rr.fromDom(e.dom().parentNode))})):A.none();var n},kl=function(e){var t,n,r;e.dom.isEmpty(e.getBody())&&(e.setContent(""),n=(t=e).getBody(),r=n.firstChild&&t.dom.isBlock(n.firstChild)?n.firstChild:n,t.selection.setCursorLocation(r,0))},Tl=function(i,a,u){return qa([ic.firstPositionIn(u),ic.lastPositionIn(u)],function(e,t){var n=El.normalizePosition(!0,e),r=El.normalizePosition(!1,t),o=El.normalizePosition(!1,a);return i?ic.nextPosition(u,o).map(function(e){return e.isEqual(r)&&a.isEqual(n)}).getOr(!1):ic.prevPosition(u,o).map(function(e){return e.isEqual(n)&&a.isEqual(r)}).getOr(!1)}).getOr(!0)},Al=function(e,t){var n,r,o,i=rr.fromDom(e),a=rr.fromDom(t);return n=a,r="pre,code",o=d(Or,i),Wi(n,r,o).isSome()},Rl=function(e,t){return Da(t)&&!1===(r=e,o=t,_o.isText(o)&&/^[ \t\r\n]*$/.test(o.data)&&!1===Al(r,o))||(n=t,_o.isElement(n)&&"A"===n.nodeName&&n.hasAttribute("name"))||_l(t);var n,r,o},_l=_o.hasAttribute("data-mce-bookmark"),Dl=_o.hasAttribute("data-mce-bogus"),Bl=_o.hasAttributeValue("data-mce-bogus","all"),Ol=function(e){return function(e){var t,n,r=0;if(Rl(e,e))return!1;if(!(n=e.firstChild))return!0;t=new ro(n,e);do{if(Bl(n))n=t.next(!0);else if(Dl(n))n=t.next();else if(_o.isBr(n))r++,n=t.next();else{if(Rl(e,n))return!1;n=t.next()}}while(n);return r<=1}(e.dom())},Pl=Er("block","position"),Ll=Er("from","to"),Il=function(e,t){var n=rr.fromDom(e),r=rr.fromDom(t.container());return Sl(n,r).map(function(e){return Pl(e,t)})},Ml=function(o,i,e){var t=Il(o,hu.fromRangeStart(e)),n=t.bind(function(e){return ic.fromPosition(i,o,e.position()).bind(function(e){return Il(o,e).map(function(e){return t=o,n=i,r=e,_o.isBr(r.position().getNode())&&!1===Ol(r.block())?ic.positionIn(!1,r.block().dom()).bind(function(e){return e.isEqual(r.position())?ic.fromPosition(n,t,e).bind(function(e){return Il(t,e)}):A.some(r)}).getOr(r):r;var t,n,r})})});return qa([t,n],Ll).filter(function(e){return!1===Or((r=e).from().block(),r.to().block())&&Ir((n=e).from().block()).bind(function(t){return Ir(n.to().block()).filter(function(e){return Or(t,e)})}).isSome()&&(t=e,!1===_o.isContentEditableFalse(t.from().block())&&!1===_o.isContentEditableFalse(t.to().block()));var t,n,r})},Fl=function(e,t,n){return n.collapsed?Ml(e,t,n):A.none()},zl=function(e,t,n){return Pr(t,e)?function(e,t){for(var n=P(t)?t:j(!1),r=e.dom(),o=[];null!==r.parentNode&&r.parentNode!==undefined;){var i=r.parentNode,a=rr.fromDom(i);if(o.push(a),!0===n(a))break;r=i}return o}(e,function(e){return n(e)||Or(e,t)}).slice(0,-1):[]},Ul=function(e,t){return zl(e,t,j(!1))},Vl=Ul,Hl=function(e,t){return[e].concat(Ul(e,t))},jl=function(e){var t,n=(t=Vr(e),K(t,co).fold(function(){return t},function(e){return t.slice(0,e)}));return F(n,Ri),n},ql=function(e,t){var n=Hl(t,e);return V(n.reverse(),Ol).each(Ri)},$l=function(e,t,n,r){if(Ol(n))return Zc(n),ic.firstPositionIn(n.dom());0===z(zr(r),function(e){return!Ol(e)}).length&&Ol(t)&&Ni(r,rr.fromTag("br"));var o=ic.prevPosition(n.dom(),hu.before(r.dom()));return F(jl(t),function(e){Ni(r,e)}),ql(e,t),o},Wl=function(e,t,n){if(Ol(n))return Ri(n),Ol(t)&&Zc(t),ic.firstPositionIn(t.dom());var r=ic.lastPositionIn(n.dom());return F(jl(t),function(e){ki(n,e)}),ql(e,t),r},Kl=function(e,t){return Pr(t,e)?(n=Hl(e,t),A.from(n[n.length-1])):A.none();var n},Xl=function(e,t){ic.positionIn(e,t.dom()).map(function(e){return e.getNode()}).map(rr.fromDom).filter(fo).each(Ri)},Yl=function(e,t,n){return Xl(!0,t),Xl(!1,n),Kl(t,n).fold(d(Wl,e,t,n),d($l,e,t,n))},Gl=function(e,t,n,r){return t?Yl(e,r,n):Yl(e,n,r)},Jl=function(t,n){var e,r=rr.fromDom(t.getBody());return(e=Fl(r.dom(),n,t.selection.getRng()).bind(function(e){return Gl(r,n,e.from().block(),e.to().block())})).each(function(e){t.selection.setRng(e.toRange())}),e.isSome()},Ql=function(e,t){var n=rr.fromDom(t),r=d(Or,e);return qi(n,bo,r).isSome()},Zl=function(e,t){var n,r,o=ic.prevPosition(e.dom(),hu.fromRangeStart(t)).isNone(),i=ic.nextPosition(e.dom(),hu.fromRangeEnd(t)).isNone();return!(Ql(n=e,(r=t).startContainer)||Ql(n,r.endContainer))&&o&&i},ef=function(e){var n,r,o,t,i=rr.fromDom(e.getBody()),a=e.selection.getRng();return Zl(i,a)?((t=e).setContent(""),t.selection.setCursorLocation(),!0):(n=i,r=e.selection,o=r.getRng(),qa([Sl(n,rr.fromDom(o.startContainer)),Sl(n,rr.fromDom(o.endContainer))],function(e,t){return!1===Or(e,t)&&(o.deleteContents(),Gl(n,!0,e,t).each(function(e){r.setRng(e.toRange())}),!0)}).getOr(!1))},tf=function(e,t){return!e.selection.isCollapsed()&&ef(e)},nf=function(a){if(!D(a))throw new Error("cases must be an array");if(0===a.length)throw new Error("there must be at least one case");var u=[],n={};return F(a,function(e,r){var t=fr(e);if(1!==t.length)throw new Error("one and only one name per case");var o=t[0],i=e[o];if(n[o]!==undefined)throw new Error("duplicate key detected:"+o);if("cata"===o)throw new Error("cannot have a case named cata (sorry)");if(!D(i))throw new Error("case arguments must be an array");u.push(o),n[o]=function(){var e=arguments.length;if(e!==i.length)throw new Error("Wrong number of arguments to case "+o+". Expected "+i.length+" ("+i+"), got "+e);for(var n=new Array(e),t=0;t<n.length;t++)n[t]=arguments[t];return{fold:function(){if(arguments.length!==a.length)throw new Error("Wrong number of arguments to fold. Expected "+a.length+", got "+arguments.length);return arguments[r].apply(null,n)},match:function(e){var t=fr(e);if(u.length!==t.length)throw new Error("Wrong number of arguments to match. Expected: "+u.join(",")+"\nActual: "+t.join(","));if(!J(u,function(e){return M(t,e)}))throw new Error("Not all branches were specified when using match. Specified: "+t.join(", ")+"\nRequired: "+u.join(", "));return e[o].apply(null,n)},log:function(e){console.log(e,{constructors:u,constructor:o,params:n})}}}}),n},rf=function(e){return Ps(e).exists(fo)},of=function(e,t,n){var r=z(Hl(rr.fromDom(n.container()),t),co),o=ee(r).getOr(t);return ic.fromPosition(e,o.dom(),n).filter(rf)},af=function(e,t){return Ps(t).exists(fo)||of(!0,e,t).isSome()},uf=function(e,t){return(n=t,A.from(n.getNode(!0)).map(rr.fromDom)).exists(fo)||of(!1,e,t).isSome();var n},sf=d(of,!1),cf=d(of,!0),lf=nf([{remove:["element"]},{moveToElement:["element"]},{moveToPosition:["position"]}]),ff=function(e,t,n,r){var o=r.getNode(!1===t);return Sl(rr.fromDom(e),rr.fromDom(n.getNode())).map(function(e){return Ol(e)?lf.remove(e.dom()):lf.moveToElement(o)}).orThunk(function(){return A.some(lf.moveToElement(o))})},df=function(u,s,c){return ic.fromPosition(s,u,c).bind(function(e){return a=e.getNode(),bo(rr.fromDom(a))||po(rr.fromDom(a))?A.none():(t=u,o=e,i=function(e){return lo(rr.fromDom(e))&&!hs(r,o,t)},Ss(!(n=s),r=c).fold(function(){return Ss(n,o).fold(j(!1),i)},i)?A.none():s&&_o.isContentEditableFalse(e.getNode())?ff(u,s,c,e):!1===s&&_o.isContentEditableFalse(e.getNode(!0))?ff(u,s,c,e):s&&As(c)?A.some(lf.moveToPosition(e)):!1===s&&Ts(c)?A.some(lf.moveToPosition(e)):A.none());var t,n,r,o,i,a})},mf=function(r,e,o){return i=e,a=o.getNode(!1===i),u=i?"after":"before",_o.isElement(a)&&a.getAttribute("data-mce-caret")===u?(t=e,n=o.getNode(!1===e),t&&_o.isContentEditableFalse(n.nextSibling)?A.some(lf.moveToElement(n.nextSibling)):!1===t&&_o.isContentEditableFalse(n.previousSibling)?A.some(lf.moveToElement(n.previousSibling)):A.none()).fold(function(){return df(r,e,o)},A.some):df(r,e,o).bind(function(e){return t=r,n=o,e.fold(function(e){return A.some(lf.remove(e))},function(e){return A.some(lf.moveToElement(e))},function(e){return hs(n,e,t)?A.none():A.some(lf.moveToPosition(e))});var t,n});var t,n,i,a,u},gf=function(e,t,n){if(0!==n){var r,o,i,a=e.data.slice(t,t+n),u=t+n>=e.data.length,s=0===t;e.replaceData(t,n,(o=s,i=u,U((r=a).split(""),function(e,t){return-1!==" \f\n\r\t\x0B".indexOf(t)||"\xa0"===t?e.previousCharIsSpace||""===e.str&&o||e.str.length===r.length-1&&i?{previousCharIsSpace:!1,str:e.str+"\xa0"}:{previousCharIsSpace:!0,str:e.str+" "}:{previousCharIsSpace:!1,str:e.str+t}},{previousCharIsSpace:!1,str:""}).str))}},pf=function(e,t){var n,r=e.data.slice(t),o=r.length-(n=r,n.replace(/^\s+/g,"")).length;return gf(e,t,o)},hf=function(e,t){return r=e,o=(n=t).container(),i=n.offset(),!1===hu.isTextPosition(n)&&o===r.parentNode&&i>hu.before(r).offset()?hu(t.container(),t.offset()-1):t;var n,r,o,i},vf=function(e){return Da(e.previousSibling)?A.some((t=e.previousSibling,_o.isText(t)?hu(t,t.data.length):hu.after(t))):e.previousSibling?ic.lastPositionIn(e.previousSibling):A.none();var t},bf=function(e){return Da(e.nextSibling)?A.some((t=e.nextSibling,_o.isText(t)?hu(t,0):hu.before(t))):e.nextSibling?ic.firstPositionIn(e.nextSibling):A.none();var t},yf=function(r,o){return vf(o).orThunk(function(){return bf(o)}).orThunk(function(){return e=r,t=o,n=hu.before(t.previousSibling?t.previousSibling:t.parentNode),ic.prevPosition(e,n).fold(function(){return ic.nextPosition(e,hu.after(t))},A.some);var e,t,n})},Cf=function(n,r){return bf(r).orThunk(function(){return vf(r)}).orThunk(function(){return e=n,t=r,ic.nextPosition(e,hu.after(t)).fold(function(){return ic.prevPosition(e,hu.before(t))},A.some);var e,t})},xf=function(e,t,n){return(r=e,o=t,i=n,r?Cf(o,i):yf(o,i)).map(d(hf,n));var r,o,i},wf=function(t,n,e){e.fold(function(){t.focus()},function(e){t.selection.setRng(e.toRange(),n)})},Nf=function(e,t){return t&&e.schema.getBlockElements().hasOwnProperty(ur(t))},Ef=function(e){if(Ol(e)){var t=rr.fromHtml('<br data-mce-bogus="1">');return Ai(e),ki(e,t),A.some(hu.before(t.dom()))}return A.none()},Sf=function(e,t,l){var n=Mr(e).filter(function(e){return _o.isText(e.dom())}),r=Fr(e).filter(function(e){return _o.isText(e.dom())});return Ri(e),qa([n,r,t],function(e,t,n){var r,o,i,a,u=e.dom(),s=t.dom(),c=u.data.length;return o=s,i=l,a=Xn((r=u).data).length,r.appendData(o.data),Ri(rr.fromDom(o)),i&&pf(r,a),n.container()===s?hu(u,c):n}).orThunk(function(){return l&&(n.each(function(e){return t=e.dom(),n=e.dom().length,r=t.data.slice(0,n),o=r.length-Xn(r).length,gf(t,n-o,o);var t,n,r,o}),r.each(function(e){return pf(e.dom(),0)})),t})},kf=function(e,t){return n=e.schema.getTextInlineElements(),r=ur(t),dr.call(n,r);var n,r},Tf=function(t,n,e,r){void 0===r&&(r=!0);var o,i=xf(n,t.getBody(),e.dom()),a=qi(e,d(Nf,t),(o=t.getBody(),function(e){return e.dom()===o})),u=Sf(e,i,kf(t,e));t.dom.isEmpty(t.getBody())?(t.setContent(""),t.selection.setCursorLocation()):a.bind(Ef).fold(function(){r&&wf(t,n,u)},function(e){r&&wf(t,n,A.some(e))})},Af=function(a,u){var e,t,n,r,o,i;return(e=a.getBody(),t=u,n=a.selection.getRng(),r=ws(t?1:-1,e,n),o=hu.fromRangeStart(r),i=rr.fromDom(e),!1===t&&As(o)?A.some(lf.remove(o.getNode(!0))):t&&Ts(o)?A.some(lf.remove(o.getNode())):!1===t&&Ts(o)&&uf(i,o)?sf(i,o).map(function(e){return lf.remove(e.getNode())}):t&&As(o)&&af(i,o)?cf(i,o).map(function(e){return lf.remove(e.getNode())}):mf(e,t,o)).map(function(e){return e.fold((o=a,i=u,function(e){return o._selectionOverrides.hideFakeCaret(),Tf(o,i,rr.fromDom(e)),!0}),(n=a,r=u,function(e){var t=r?hu.before(e):hu.after(e);return n.selection.setRng(t.toRange()),!0}),(t=a,function(e){return t.selection.setRng(e.toRange()),!0}));var t,n,r,o,i}).getOr(!1)},Rf=function(e,t){var n,r=e.selection.getNode();return!!_o.isContentEditableFalse(r)&&(n=rr.fromDom(e.getBody()),F(Vi(n,".mce-offscreen-selection"),Ri),Tf(e,t,rr.fromDom(e.selection.getNode())),kl(e),!0)},_f=function(e,t){return e.selection.isCollapsed()?Af(e,t):Rf(e,t)},Df=function(e){var t,n=function(e,t){for(;t&&t!==e;){if(_o.isContentEditableTrue(t)||_o.isContentEditableFalse(t))return t;t=t.parentNode}return null}(e.getBody(),e.selection.getNode());return _o.isContentEditableTrue(n)&&e.dom.isBlock(n)&&e.dom.isEmpty(n)&&(t=e.dom.create("br",{"data-mce-bogus":"1"}),e.dom.setHTML(n,""),n.appendChild(t),e.selection.setRng(hu.before(t).toRange())),!0},Bf=_o.isText,Of=function(e){return Bf(e)&&e.data[0]===ca},Pf=function(e){return Bf(e)&&e.data[e.data.length-1]===ca},Lf=function(e){return e.ownerDocument.createTextNode(ca)},If=function(e,t){return e?function(e){if(Bf(e.previousSibling))return Pf(e.previousSibling)||e.previousSibling.appendData(ca),e.previousSibling;if(Bf(e))return Of(e)||e.insertData(0,ca),e;var t=Lf(e);return e.parentNode.insertBefore(t,e),t}(t):function(e){if(Bf(e.nextSibling))return Of(e.nextSibling)||e.nextSibling.insertData(0,ca),e.nextSibling;if(Bf(e))return Pf(e)||e.appendData(ca),e;var t=Lf(e);return e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t),t}(t)},Mf=d(If,!0),Ff=d(If,!1),zf=function(e,t){return _o.isText(e.container())?If(t,e.container()):If(t,e.getNode())},Uf=function(e,t){var n=t.get();return n&&e.container()===n&&ga(n)},Vf=function(n,e){return e.fold(function(e){Yu.remove(n.get());var t=Mf(e);return n.set(t),A.some(hu(t,t.length-1))},function(e){return ic.firstPositionIn(e).map(function(e){if(Uf(e,n))return hu(n.get(),1);Yu.remove(n.get());var t=zf(e,!0);return n.set(t),hu(t,1)})},function(e){return ic.lastPositionIn(e).map(function(e){if(Uf(e,n))return hu(n.get(),n.get().length-1);Yu.remove(n.get());var t=zf(e,!1);return n.set(t),hu(t,t.length-1)})},function(e){Yu.remove(n.get());var t=Ff(e);return n.set(t),A.some(hu(t,1))})},Hf=function(e,t){for(var n=0;n<e.length;n++){var r=e[n].apply(null,t);if(r.isSome())return r}return A.none()},jf=nf([{before:["element"]},{start:["element"]},{end:["element"]},{after:["element"]}]),qf=function(e,t){var n=ps(t,e);return n||e},$f=function(e,t,n){var r=El.normalizeForwards(n),o=qf(t,r.container());return El.findRootInline(e,o,r).fold(function(){return ic.nextPosition(o,r).bind(d(El.findRootInline,e,o)).map(function(e){return jf.before(e)})},A.none)},Wf=function(e,t){return null===zu(e,t)},Kf=function(e,t,n){return El.findRootInline(e,t,n).filter(d(Wf,t))},Xf=function(e,t,n){var r=El.normalizeBackwards(n);return Kf(e,t,r).bind(function(e){return ic.prevPosition(e,r).isNone()?A.some(jf.start(e)):A.none()})},Yf=function(e,t,n){var r=El.normalizeForwards(n);return Kf(e,t,r).bind(function(e){return ic.nextPosition(e,r).isNone()?A.some(jf.end(e)):A.none()})},Gf=function(e,t,n){var r=El.normalizeBackwards(n),o=qf(t,r.container());return El.findRootInline(e,o,r).fold(function(){return ic.prevPosition(o,r).bind(d(El.findRootInline,e,o)).map(function(e){return jf.after(e)})},A.none)},Jf=function(e){return!1===El.isRtl(Zf(e))},Qf=function(e,t,n){return Hf([$f,Xf,Yf,Gf],[e,t,n]).filter(Jf)},Zf=function(e){return e.fold(q,q,q,q)},ed=function(e){return e.fold(j("before"),j("start"),j("end"),j("after"))},td=function(e){return e.fold(jf.before,jf.before,jf.after,jf.after)},nd=function(n,e,r,t,o,i){return qa([El.findRootInline(e,r,t),El.findRootInline(e,r,o)],function(e,t){return e!==t&&El.hasSameParentBlock(r,e,t)?jf.after(n?e:t):i}).getOr(i)},rd=function(e,r){return e.fold(j(!0),function(e){return n=r,!(ed(t=e)===ed(n)&&Zf(t)===Zf(n));var t,n})},od=function(e,t){return e?t.fold(H(A.some,jf.start),A.none,H(A.some,jf.after),A.none):t.fold(A.none,H(A.some,jf.before),A.none,H(A.some,jf.end))},id=function(a,u,s,c){var e=El.normalizePosition(a,c),l=Qf(u,s,e);return Qf(u,s,e).bind(d(od,a)).orThunk(function(){return t=a,n=u,r=s,o=l,e=c,i=El.normalizePosition(t,e),ic.fromPosition(t,r,i).map(d(El.normalizePosition,t)).fold(function(){return o.map(td)},function(e){return Qf(n,r,e).map(d(nd,t,n,r,i,e)).filter(d(rd,o))}).filter(Jf);var t,n,r,o,e,i})},ad=Qf,ud=id,sd=(d(id,!1),d(id,!0),td),cd=function(e){return e.fold(jf.start,jf.start,jf.end,jf.end)},ld=function(e){return P(e.selection.getSel().modify)},fd=function(e,t,n){var r=e?1:-1;return t.setRng(hu(n.container(),n.offset()+r).toRange()),t.getSel().modify("move",e?"forward":"backward","word"),!0},dd=function(e,t){var n=t.selection.getRng(),r=e?hu.fromRangeEnd(n):hu.fromRangeStart(n);return!!ld(t)&&(e&&va(r)?fd(!0,t.selection,r):!(e||!ba(r))&&fd(!1,t.selection,r))},md=function(e,t){var n=e.dom.createRng();n.setStart(t.container(),t.offset()),n.setEnd(t.container(),t.offset()),e.selection.setRng(n)},gd=function(e){return!1!==e.settings.inline_boundaries},pd=function(e,t){e?t.setAttribute("data-mce-selected","inline-boundary"):t.removeAttribute("data-mce-selected")},hd=function(t,e,n){return Vf(e,n).map(function(e){return md(t,e),n})},vd=function(e,t,n){return function(){return!!gd(t)&&dd(e,t)}},bd={move:function(a,u,s){return function(){return!!gd(a)&&(t=a,n=u,e=s,r=t.getBody(),o=hu.fromRangeStart(t.selection.getRng()),i=d(El.isInlineTarget,t),ud(e,i,r,o).bind(function(e){return hd(t,n,e)})).isSome();var t,n,e,r,o,i}},moveNextWord:d(vd,!0),movePrevWord:d(vd,!1),setupSelectedState:function(a){var u=Bi(null),s=d(El.isInlineTarget,a);return a.on("NodeChange",function(e){var t,n,r,o,i;gd(a)&&(t=s,n=a.dom,r=e.parents,o=z(n.select('*[data-mce-selected="inline-boundary"]'),t),i=z(r,t),F(Z(o,i),d(pd,!1)),F(Z(i,o),d(pd,!0)),function(e,t){if(e.selection.isCollapsed()&&!0!==e.composing&&t.get()){var n=hu.fromRangeStart(e.selection.getRng());hu.isTextPosition(n)&&!1===El.isAtZwsp(n)&&(md(e,Yu.removeAndReposition(t.get(),n)),t.set(null))}}(a,u),function(n,r,o,e){if(r.selection.isCollapsed()){var t=z(e,n);F(t,function(e){var t=hu.fromRangeStart(r.selection.getRng());ad(n,r.getBody(),t).bind(function(e){return hd(r,o,e)})})}}(s,a,u,e.parents))}),u},setCaretPosition:md},yd=function(t,n){return function(e){return Vf(n,e).map(function(e){return bd.setCaretPosition(t,e),!0}).getOr(!1)}},Cd=function(r,o,i,a){var u=r.getBody(),s=d(El.isInlineTarget,r);r.undoManager.ignore(function(){var e,t,n;r.selection.setRng((e=i,t=a,(n=document.createRange()).setStart(e.container(),e.offset()),n.setEnd(t.container(),t.offset()),n)),r.execCommand("Delete"),ad(s,u,hu.fromRangeStart(r.selection.getRng())).map(cd).map(yd(r,o))}),r.nodeChanged()},xd=function(n,r,i,o){var e,t,a=(e=n.getBody(),t=o.container(),ps(t,e)||e),u=d(El.isInlineTarget,n),s=ad(u,a,o);return s.bind(function(e){return i?e.fold(j(A.some(cd(e))),A.none,j(A.some(sd(e))),A.none):e.fold(A.none,j(A.some(sd(e))),A.none,j(A.some(cd(e))))}).map(yd(n,r)).getOrThunk(function(){var t=ic.navigate(i,a,o),e=t.bind(function(e){return ad(u,a,e)});return s.isSome()&&e.isSome()?El.findRootInline(u,a,o).map(function(e){return o=e,!!qa([ic.firstPositionIn(o),ic.lastPositionIn(o)],function(e,t){var n=El.normalizePosition(!0,e),r=El.normalizePosition(!1,t);return ic.nextPosition(o,n).map(function(e){return e.isEqual(r)}).getOr(!0)}).getOr(!0)&&(Tf(n,i,rr.fromDom(e)),!0);var o}).getOr(!1):e.bind(function(e){return t.map(function(e){return i?Cd(n,r,o,e):Cd(n,r,e,o),!0})}).getOr(!1)})},wd=function(e,t,n){if(e.selection.isCollapsed()&&!1!==e.settings.inline_boundaries){var r=hu.fromRangeStart(e.selection.getRng());return xd(e,t,n,r)}return!1},Nd=Er("start","end"),Ed=Er("rng","table","cells"),Sd=nf([{removeTable:["element"]},{emptyCells:["cells"]}]),kd=function(e,t){return Xi(rr.fromDom(e),"td,th",t)},Td=function(e,t){return Wi(e,"table",t)},Ad=function(e){return!1===Or(e.start(),e.end())},Rd=function(e,n){return Td(e.start(),n).bind(function(t){return Td(e.end(),n).bind(function(e){return Or(t,e)?A.some(t):A.none()})})},_d=function(e){return Vi(e,"td,th")},Dd=function(r,e){var t=kd(e.startContainer,r),n=kd(e.endContainer,r);return e.collapsed?A.none():qa([t,n],Nd).fold(function(){return t.fold(function(){return n.bind(function(t){return Td(t,r).bind(function(e){return ee(_d(e)).map(function(e){return Nd(e,t)})})})},function(t){return Td(t,r).bind(function(e){return te(_d(e)).map(function(e){return Nd(t,e)})})})},function(e){return Bd(r,e)?A.none():(n=r,Td((t=e).start(),n).bind(function(e){return te(_d(e)).map(function(e){return Nd(t.start(),e)})}));var t,n})},Bd=function(e,t){return Rd(t,e).isSome()},Od=function(e,t){var n,r,o,i,a=d(Or,e);return(n=t,r=a,o=kd(n.startContainer,r),i=kd(n.endContainer,r),qa([o,i],Nd).filter(Ad).filter(function(e){return Bd(r,e)}).orThunk(function(){return Dd(r,n)})).bind(function(e){return Rd(t=e,a).map(function(e){return Ed(t,e,_d(e))});var t})},Pd=function(e,t){return K(e,function(e){return Or(e,t)})},Ld=function(n){return(r=n,qa([Pd(r.cells(),r.rng().start()),Pd(r.cells(),r.rng().end())],function(e,t){return r.cells().slice(e,t+1)})).map(function(e){var t=n.cells();return e.length===t.length?Sd.removeTable(n.table()):Sd.emptyCells(e)});var r},Id=function(e,t){return Od(e,t).bind(Ld)},Md=function(e){var t=[];if(e)for(var n=0;n<e.rangeCount;n++)t.push(e.getRangeAt(n));return t},Fd=Md,zd=function(e){return G(e,function(e){var t=Ua(e);return t?[rr.fromDom(t)]:[]})},Ud=function(e){return 1<Md(e).length},Vd=function(e){return z(zd(e),bo)},Hd=function(e){return Vi(e,"td[data-mce-selected],th[data-mce-selected]")},jd=function(e,t){var n=Hd(t),r=Vd(e);return 0<n.length?n:r},qd=jd,$d=function(e){return jd(Fd(e.selection.getSel()),rr.fromDom(e.getBody()))},Wd=function(e,t){return F(t,Zc),e.selection.setCursorLocation(t[0].dom(),0),!0},Kd=function(e,t){return Tf(e,!1,t),!0},Xd=function(n,e,r,t){return Gd(e,t).fold(function(){return t=n,Id(e,r).map(function(e){return e.fold(d(Kd,t),d(Wd,t))});var t},function(e){return Jd(n,e)}).getOr(!1)},Yd=function(e,t){return V(Hl(t,e),bo)},Gd=function(e,t){return V(Hl(t,e),function(e){return"caption"===ur(e)})},Jd=function(e,t){return Zc(t),e.selection.setCursorLocation(t.dom(),0),A.some(!0)},Qd=function(u,s,c,l,f){return ic.navigate(c,u.getBody(),f).bind(function(e){return r=l,o=c,i=f,a=e,ic.firstPositionIn(r.dom()).bind(function(t){return ic.lastPositionIn(r.dom()).map(function(e){return o?i.isEqual(t)&&a.isEqual(e):i.isEqual(e)&&a.isEqual(t)})}).getOr(!0)?Jd(u,l):(t=l,n=e,Gd(s,rr.fromDom(n.getNode())).map(function(e){return!1===Or(e,t)}));var t,n,r,o,i,a}).or(A.some(!0))},Zd=function(a,u,s,e){var c=hu.fromRangeStart(a.selection.getRng());return Yd(s,e).bind(function(e){return Ol(e)?Jd(a,e):(t=a,n=s,r=u,o=e,i=c,ic.navigate(r,t.getBody(),i).bind(function(e){return Yd(n,rr.fromDom(e.getNode())).map(function(e){return!1===Or(e,o)})}));var t,n,r,o,i})},em=function(a,u,e){var s=rr.fromDom(a.getBody());return Gd(s,e).fold(function(){return Zd(a,u,s,e)},function(e){return t=a,n=u,r=s,o=e,i=hu.fromRangeStart(t.selection.getRng()),Ol(o)?Jd(t,o):Qd(t,r,n,o,i);var t,n,r,o,i}).getOr(!1)},tm=function(e,t){var n,r,o,i,a,u=rr.fromDom(e.selection.getStart(!0)),s=$d(e);return e.selection.isCollapsed()&&0===s.length?em(e,t,u):(n=e,r=u,o=rr.fromDom(n.getBody()),i=n.selection.getRng(),0!==(a=$d(n)).length?Wd(n,a):Xd(n,o,i,r))},nm=function(e,t){e.getDoc().execCommand(t,!1,null)},rm=function(e){_f(e,!1)||wd(e,!1)||Jl(e,!1)||tm(e)||tf(e,!1)||(nm(e,"Delete"),kl(e))},om=function(e){_f(e,!0)||wd(e,!0)||Jl(e,!0)||tm(e)||tf(e,!0)||nm(e,"ForwardDelete")},im=function(e,t,n){var r=e.getParam(t,n);if(-1!==r.indexOf("=")){var o=e.getParam(t,"","hash");return o.hasOwnProperty(e.id)?o[e.id]:n}return r},am=function(e){return e.getParam("iframe_attrs",{})},um=function(e){return e.getParam("doctype","<!DOCTYPE html>")},sm=function(e){return e.getParam("document_base_url","")},cm=function(e){return im(e,"body_id","tinymce")},lm=function(e){return im(e,"body_class","")},fm=function(e){return e.getParam("content_security_policy","")},dm=function(e){return e.getParam("br_in_pre",!0)},mm=function(e){if(e.getParam("force_p_newlines",!1))return"p";var t=e.getParam("forced_root_block","p");return!1===t?"":t},gm=function(e){return e.getParam("forced_root_block_attrs",{})},pm=function(e){return e.getParam("br_newline_selector",".mce-toc h2,figcaption,caption")},hm=function(e){return e.getParam("no_newline_selector","")},vm=function(e){return e.getParam("keep_styles",!0)},bm=function(e){return e.getParam("end_container_on_empty_block",!1)},ym=function(e){return Yt.explode(e.getParam("font_size_style_values",""))},Cm=function(e){return Yt.explode(e.getParam("font_size_classes",""))},xm=function(e){return e.getParam("images_dataimg_filter",j(!0),"function")},wm=function(e){return e.getParam("automatic_uploads",!0,"boolean")},Nm=function(e){return e.getParam("images_reuse_filename",!1,"boolean")},Em=function(e){return e.getParam("images_replace_blob_uris",!0,"boolean")},Sm=function(e){return e.getParam("images_upload_url","","string")},km=function(e){return e.getParam("images_upload_base_path","","string")},Tm=function(e){return e.getParam("images_upload_credentials",!1,"boolean")},Am=function(e){return e.getParam("images_upload_handler",null,"function")},Rm=function(e){return e.getParam("content_css_cors",!1,"boolean")},_m=function(o,t,e){var n=function(e){return t=o,n=e.dom(),r=Nr(n,t),A.from(r).filter(function(e){return 0<e.length});var t,n,r};return $i(rr.fromDom(e),function(e){return n(e).isSome()},function(e){return Or(rr.fromDom(t),e)}).bind(n)},Dm=function(o){return function(r,e){return A.from(e).map(rr.fromDom).filter(cr).bind(function(e){return _m(o,r,e.dom()).or((t=o,n=e.dom(),A.from(gi.DOM.getStyle(n,t,!0))));var t,n}).getOr("")}},Bm={getFontSize:Dm("font-size"),getFontFamily:H(function(e){return e.replace(/[\'\"\\]/g,"").replace(/,\s+/g,",")},Dm("font-family")),toPt:function(e,t){return/[0-9.]+px$/.test(e)?(n=72*parseInt(e,10)/96,r=t||0,o=Math.pow(10,r),Math.round(n*o)/o+"pt"):e;var n,r,o}},Om=function(e){return ic.firstPositionIn(e.getBody()).map(function(e){var t=e.container();return _o.isText(t)?t.parentNode:t})},Pm=function(o){return A.from(o.selection.getRng()).bind(function(e){var t,n,r=o.getBody();return n=r,(t=e).startContainer===n&&0===t.startOffset?A.none():A.from(o.selection.getStart(!0))})},Lm=function(e,t){if(/^[0-9\.]+$/.test(t)){var n=parseInt(t,10);if(1<=n&&n<=7){var r=ym(e),o=Cm(e);return o?o[n-1]||t:r[n-1]||t}return t}return t},Im=function(e,t){return e&&t&&e.startContainer===t.startContainer&&e.startOffset===t.startOffset&&e.endContainer===t.endContainer&&e.endOffset===t.endOffset},Mm=function(e,t,n){return null!==function(e,t,n){for(;e&&e!==t;){if(n(e))return e;e=e.parentNode}return null}(e,t,n)},Fm=function(e,t,n){return Mm(e,t,function(e){return e.nodeName===n})},zm=function(e){return e&&"TABLE"===e.nodeName},Um=function(e,t,n){for(var r=new ro(t,e.getParent(t.parentNode,e.isBlock)||e.getRoot());t=r[n?"prev":"next"]();)if(_o.isBr(t))return!0},Vm=function(e,t,n,r,o){var i,a,u,s,c,l,f=e.getRoot(),d=e.schema.getNonEmptyElements();if(u=e.getParent(o.parentNode,e.isBlock)||f,r&&_o.isBr(o)&&t&&e.isEmpty(u))return A.some(du(o.parentNode,e.nodeIndex(o)));for(i=new ro(o,u);s=i[r?"prev":"next"]();){if("false"===e.getContentEditableParent(s)||(l=f,pa(c=s)&&!1===Mm(c,l,Fu)))return A.none();if(_o.isText(s)&&0<s.nodeValue.length)return!1===Fm(s,f,"A")?A.some(du(s,r?s.nodeValue.length:0)):A.none();if(e.isBlock(s)||d[s.nodeName.toLowerCase()])return A.none();a=s}return n&&a?A.some(du(a,0)):A.none()},Hm=function(e,t,n,r){var o,i,a,u,s,c,l,f,d,m,g=e.getRoot(),p=!1;if(o=r[(n?"start":"end")+"Container"],i=r[(n?"start":"end")+"Offset"],l=_o.isElement(o)&&i===o.childNodes.length,s=e.schema.getNonEmptyElements(),c=n,pa(o))return A.none();if(_o.isElement(o)&&i>o.childNodes.length-1&&(c=!1),_o.isDocument(o)&&(o=g,i=0),o===g){if(c&&(u=o.childNodes[0<i?i-1:0])){if(pa(u))return A.none();if(s[u.nodeName]||zm(u))return A.none()}if(o.hasChildNodes()){if(i=Math.min(!c&&0<i?i-1:i,o.childNodes.length-1),o=o.childNodes[i],i=_o.isText(o)&&l?o.data.length:0,!t&&o===g.lastChild&&zm(o))return A.none();if(function(e,t){for(;t&&t!==e;){if(_o.isContentEditableFalse(t))return!0;t=t.parentNode}return!1}(g,o)||pa(o))return A.none();if(o.hasChildNodes()&&!1===zm(o)){a=new ro(u=o,g);do{if(_o.isContentEditableFalse(u)||pa(u)){p=!1;break}if(_o.isText(u)&&0<u.nodeValue.length){i=c?0:u.nodeValue.length,o=u,p=!0;break}if(s[u.nodeName.toLowerCase()]&&(!(f=u)||!/^(TD|TH|CAPTION)$/.test(f.nodeName))){i=e.nodeIndex(u),o=u.parentNode,c||i++,p=!0;break}}while(u=c?a.next():a.prev())}}}return t&&(_o.isText(o)&&0===i&&Vm(e,l,t,!0,o).each(function(e){o=e.container(),i=e.offset(),p=!0}),_o.isElement(o)&&((u=o.childNodes[i])||(u=o.childNodes[i-1]),!u||!_o.isBr(u)||(m="A",(d=u).previousSibling&&d.previousSibling.nodeName===m)||Um(e,u,!1)||Um(e,u,!0)||Vm(e,l,t,!0,u).each(function(e){o=e.container(),i=e.offset(),p=!0}))),c&&!t&&_o.isText(o)&&i===o.nodeValue.length&&Vm(e,l,t,!1,o).each(function(e){o=e.container(),i=e.offset(),p=!0}),p?A.some(du(o,i)):A.none()},jm=function(e,t){var n=t.collapsed,r=t.cloneRange(),o=du.fromRangeStart(t);return Hm(e,n,!0,r).each(function(e){n&&du.isAbove(o,e)||r.setStart(e.container(),e.offset())}),n||Hm(e,n,!1,r).each(function(e){r.setEnd(e.container(),e.offset())}),n&&r.collapse(!0),Im(t,r)?A.none():A.some(r)},qm=function(e,t,n){var r=e.create("span",{},"&nbsp;");n.parentNode.insertBefore(r,n),t.scrollIntoView(r),e.remove(r)},$m=function(e,t,n,r){var o=e.createRng();r?(o.setStartBefore(n),o.setEndBefore(n)):(o.setStartAfter(n),o.setEndAfter(n)),t.setRng(o)},Wm=function(e,t){var n,r,o=e.selection,i=e.dom,a=o.getRng();jm(i,a).each(function(e){a.setStart(e.startContainer,e.startOffset),a.setEnd(e.endContainer,e.endOffset)});var u=a.startOffset,s=a.startContainer;if(1===s.nodeType&&s.hasChildNodes()){var c=u>s.childNodes.length-1;s=s.childNodes[Math.min(u,s.childNodes.length-1)]||s,u=c&&3===s.nodeType?s.nodeValue.length:0}var l=i.getParent(s,i.isBlock),f=l?i.getParent(l.parentNode,i.isBlock):null,d=f?f.nodeName.toUpperCase():"",m=t&&t.ctrlKey;"LI"!==d||m||(l=f),s&&3===s.nodeType&&u>=s.nodeValue.length&&(function(e,t,n){for(var r,o=new ro(t,n),i=e.getNonEmptyElements();r=o.next();)if(i[r.nodeName.toLowerCase()]||0<r.length)return!0}(e.schema,s,l)||(n=i.create("br"),a.insertNode(n),a.setStartAfter(n),a.setEndAfter(n),r=!0)),n=i.create("br"),a.insertNode(n),qm(i,o,n),$m(i,o,n,r),e.undoManager.add()},Km=function(e,t){var n=rr.fromTag("br");Ni(rr.fromDom(t),n),e.undoManager.add()},Xm=function(e,t){Ym(e.getBody(),t)||Ei(rr.fromDom(t),rr.fromTag("br"));var n=rr.fromTag("br");Ei(rr.fromDom(t),n),qm(e.dom,e.selection,n.dom()),$m(e.dom,e.selection,n.dom(),!1),e.undoManager.add()},Ym=function(e,t){return n=hu.after(t),!!_o.isBr(n.getNode())||ic.nextPosition(e,hu.after(t)).map(function(e){return _o.isBr(e.getNode())}).getOr(!1);var n},Gm=function(e){return e&&"A"===e.nodeName&&"href"in e},Jm=function(e){return e.fold(j(!1),Gm,Gm,j(!1))},Qm=function(e,t){t.fold(o,d(Km,e),d(Xm,e),o)},Zm=function(e,t){var n,r,o,i=(n=e,r=d(El.isInlineTarget,n),o=hu.fromRangeStart(n.selection.getRng()),ad(r,n.getBody(),o).filter(Jm));i.isSome()?i.each(d(Qm,e)):Wm(e,t)},eg=(nf([{before:["element"]},{on:["element","offset"]},{after:["element"]}]),nf([{domRange:["rng"]},{relative:["startSitu","finishSitu"]},{exact:["start","soffset","finish","foffset"]}])),tg=Er("start","soffset","finish","foffset"),ng=(eg.domRange,eg.relative,eg.exact,tr.detect().browser),rg=function(e,t){var n=lr(t)?Lc(t).length:Vr(t).length+1;return n<e?n:e<0?0:e},og=function(e){return tg(e.start(),rg(e.soffset(),e.start()),e.finish(),rg(e.foffset(),e.finish()))},ig=function(e,t){return Pr(e,t)||Or(e,t)},ag=function(t){return function(e){return ig(t,e.start())&&ig(t,e.finish())}},ug=function(e){return!0===e.inline||ng.isIE()},sg=function(e){return tg(rr.fromDom(e.startContainer),e.startOffset,rr.fromDom(e.endContainer),e.endOffset)},cg=function(e){var t=e.getSelection();return(t&&0!==t.rangeCount?A.from(t.getRangeAt(0)):A.none()).map(sg)},lg=function(e){var t,n=(t=e.dom().ownerDocument.defaultView,rr.fromDom(t));return cg(n.dom()).filter(ag(e))},fg=function(e,t){return A.from(t).filter(ag(e)).map(og)},dg=function(e){var t=document.createRange();try{return t.setStart(e.start().dom(),e.soffset()),t.setEnd(e.finish().dom(),e.foffset()),A.some(t)}catch(n){return A.none()}},mg=function(e){return(e.bookmark?e.bookmark:A.none()).bind(d(fg,rr.fromDom(e.getBody()))).bind(dg)},gg=function(e){var t=ug(e)?lg(rr.fromDom(e.getBody())):A.none();e.bookmark=t.isSome()?t:e.bookmark},pg=function(t){mg(t).each(function(e){t.selection.setRng(e)})},hg=mg,vg=function(e){return go(e)||po(e)},bg=function(e){return z($(e.selection.getSelectedBlocks(),rr.fromDom),function(e){return!vg(e)&&!Ir(e).map(vg).getOr(!1)})},yg=function(e,t){var n=e.settings,r=e.dom,o=e.selection,i=e.formatter,a=/[a-z%]+$/i.exec(n.indentation)[0],u=parseInt(n.indentation,10),s=e.getParam("indent_use_margin",!1);e.queryCommandState("InsertUnorderedList")||e.queryCommandState("InsertOrderedList")||n.forced_root_block||r.getParent(o.getNode(),r.isBlock)||i.apply("div"),F(bg(e),function(e){!function(e,t,n,r,o,i){if("false"!==e.getContentEditable(i)){var a=n?"margin":"padding";if(a="TABLE"===i.nodeName?"margin":a,a+="rtl"===e.getStyle(i,"direction",!0)?"Right":"Left","outdent"===t){var u=Math.max(0,parseInt(i.style[a]||0,10)-r);e.setStyle(i,a,u?u+o:"")}else u=parseInt(i.style[a]||0,10)+r+o,e.setStyle(i,a,u)}}(r,t,s,u,a,e.dom())})},Cg=Yt.each,xg=Yt.extend,wg=Yt.map,Ng=Yt.inArray;function Eg(s){var o,i,a,t,c={state:{},exec:{},value:{}},n=s.settings;s.on("PreInit",function(){o=s.dom,i=s.selection,n=s.settings,a=s.formatter});var r=function(e){var t;if(!s.quirks.isHidden()&&!s.removed){if(e=e.toLowerCase(),t=c.state[e])return t(e);try{return s.getDoc().queryCommandState(e)}catch(n){}return!1}},e=function(e,n){n=n||"exec",Cg(e,function(t,e){Cg(e.toLowerCase().split(","),function(e){c[n][e]=t})})},u=function(e,t,n){e=e.toLowerCase(),c.value[e]=function(){return t.call(n||s)}};xg(this,{execCommand:function(t,n,r,e){var o,i,a=!1;if(!s.removed){if(/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(t)||e&&e.skip_focus?pg(s):s.focus(),(e=s.fire("BeforeExecCommand",{command:t,ui:n,value:r})).isDefaultPrevented())return!1;if(i=t.toLowerCase(),o=c.exec[i])return o(i,n,r),s.fire("ExecCommand",{command:t,ui:n,value:r}),!0;if(Cg(s.plugins,function(e){if(e.execCommand&&e.execCommand(t,n,r))return s.fire("ExecCommand",{command:t,ui:n,value:r}),!(a=!0)}),a)return a;if(s.theme&&s.theme.execCommand&&s.theme.execCommand(t,n,r))return s.fire("ExecCommand",{command:t,ui:n,value:r}),!0;try{a=s.getDoc().execCommand(t,n,r)}catch(u){}return!!a&&(s.fire("ExecCommand",{command:t,ui:n,value:r}),!0)}},queryCommandState:r,queryCommandValue:function(e){var t;if(!s.quirks.isHidden()&&!s.removed){if(e=e.toLowerCase(),t=c.value[e])return t(e);try{return s.getDoc().queryCommandValue(e)}catch(n){}}},queryCommandSupported:function(e){if(e=e.toLowerCase(),c.exec[e])return!0;try{return s.getDoc().queryCommandSupported(e)}catch(t){}return!1},addCommands:e,addCommand:function(e,o,i){e=e.toLowerCase(),c.exec[e]=function(e,t,n,r){return o.call(i||s,t,n,r)}},addQueryStateHandler:function(e,t,n){e=e.toLowerCase(),c.state[e]=function(){return t.call(n||s)}},addQueryValueHandler:u,hasCustomCommand:function(e){return e=e.toLowerCase(),!!c.exec[e]}});var l=function(e,t,n){return t===undefined&&(t=!1),n===undefined&&(n=null),s.getDoc().execCommand(e,t,n)},f=function(e){return a.match(e)},d=function(e,t){a.toggle(e,t?{value:t}:undefined),s.nodeChanged()},m=function(e){t=i.getBookmark(e)},g=function(){i.moveToBookmark(t)};e({"mceResetDesignMode,mceBeginUndoLevel":function(){},"mceEndUndoLevel,mceAddUndoLevel":function(){s.undoManager.add()},"Cut,Copy,Paste":function(e){var t,n=s.getDoc();try{l(e)}catch(o){t=!0}if("paste"!==e||n.queryCommandEnabled(e)||(t=!0),t||!n.queryCommandSupported(e)){var r=s.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.");de.mac&&(r=r.replace(/Ctrl\+/g,"\u2318+")),s.notificationManager.open({text:r,type:"error"})}},unlink:function(){if(i.isCollapsed()){var e=s.dom.getParent(s.selection.getStart(),"a");e&&s.dom.remove(e,!0)}else a.remove("link")},"JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone":function(e){var t=e.substring(7);"full"===t&&(t="justify"),Cg("left,center,right,justify".split(","),function(e){t!==e&&a.remove("align"+e)}),"none"!==t&&d("align"+t)},"InsertUnorderedList,InsertOrderedList":function(e){var t,n;l(e),(t=o.getParent(i.getNode(),"ol,ul"))&&(n=t.parentNode,/^(H[1-6]|P|ADDRESS|PRE)$/.test(n.nodeName)&&(m(),o.split(n,t),g()))},"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(e){d(e)},"ForeColor,HiliteColor":function(e,t,n){d(e,n)},FontName:function(e,t,n){var r,o;o=n,(r=s).formatter.toggle("fontname",{value:Lm(r,o)}),r.nodeChanged()},FontSize:function(e,t,n){var r,o;o=n,(r=s).formatter.toggle("fontsize",{value:Lm(r,o)}),r.nodeChanged()},RemoveFormat:function(e){a.remove(e)},mceBlockQuote:function(){d("blockquote")},FormatBlock:function(e,t,n){return d(n||"p")},mceCleanup:function(){var e=i.getBookmark();s.setContent(s.getContent()),i.moveToBookmark(e)},mceRemoveNode:function(e,t,n){var r=n||i.getNode();r!==s.getBody()&&(m(),s.dom.remove(r,!0),g())},mceSelectNodeDepth:function(e,t,n){var r=0;o.getParent(i.getNode(),function(e){if(1===e.nodeType&&r++===n)return i.select(e),!1},s.getBody())},mceSelectNode:function(e,t,n){i.select(n)},mceInsertContent:function(e,t,n){cl(s,n)},mceInsertRawHTML:function(e,t,n){i.setContent("tiny_mce_marker");var r=s.getContent();s.setContent(r.replace(/tiny_mce_marker/g,function(){return n}))},mceToggleFormat:function(e,t,n){d(n)},mceSetContent:function(e,t,n){s.setContent(n)},"Indent,Outdent":function(e){yg(s,e)},mceRepaint:function(){},InsertHorizontalRule:function(){s.execCommand("mceInsertContent",!1,"<hr />")},mceToggleVisualAid:function(){s.hasVisual=!s.hasVisual,s.addVisual()},mceReplaceContent:function(e,t,n){s.execCommand("mceInsertContent",!1,n.replace(/\{\$selection\}/g,i.getContent({format:"text"})))},mceInsertLink:function(e,t,n){var r;"string"==typeof n&&(n={href:n}),r=o.getParent(i.getNode(),"a"),n.href=n.href.replace(" ","%20"),r&&n.href||a.remove("link"),n.href&&a.apply("link",n,r)},selectAll:function(){var e=o.getParent(i.getStart(),_o.isContentEditableTrue);if(e){var t=o.createRng();t.selectNodeContents(e),i.setRng(t)}},"delete":function(){rm(s)},forwardDelete:function(){om(s)},mceNewDocument:function(){s.setContent("")},InsertLineBreak:function(e,t,n){return Zm(s,n),!0}});var p=function(n){return function(){var e=i.isCollapsed()?[o.getParent(i.getNode(),o.isBlock)]:i.getSelectedBlocks(),t=wg(e,function(e){return!!a.matchNode(e,n)});return-1!==Ng(t,!0)}};e({JustifyLeft:p("alignleft"),JustifyCenter:p("aligncenter"),JustifyRight:p("alignright"),JustifyFull:p("alignjustify"),"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(e){return f(e)},mceBlockQuote:function(){return f("blockquote")},Outdent:function(){var e;if(n.inline_styles){if((e=o.getParent(i.getStart(),o.isBlock))&&0<parseInt(e.style.paddingLeft,10))return!0;if((e=o.getParent(i.getEnd(),o.isBlock))&&0<parseInt(e.style.paddingLeft,10))return!0}return r("InsertUnorderedList")||r("InsertOrderedList")||!n.inline_styles&&!!o.getParent(i.getNode(),"BLOCKQUOTE")},"InsertUnorderedList,InsertOrderedList":function(e){var t=o.getParent(i.getNode(),"ul,ol");return t&&("insertunorderedlist"===e&&"UL"===t.tagName||"insertorderedlist"===e&&"OL"===t.tagName)}},"state"),e({Undo:function(){s.undoManager.undo()},Redo:function(){s.undoManager.redo()}}),u("FontName",function(){return Pm(t=s).fold(function(){return Om(t).map(function(e){return Bm.getFontFamily(t.getBody(),e)}).getOr("")},function(e){return Bm.getFontFamily(t.getBody(),e)});var t},this),u("FontSize",function(){return Pm(t=s).fold(function(){return Om(t).map(function(e){return Bm.getFontSize(t.getBody(),e)}).getOr("")},function(e){return Bm.getFontSize(t.getBody(),e)});var t},this)}var Sg=Yt.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend"," "),kg=function(a){var u,s,c=this,l={},f=function(){return!1},d=function(){return!0};u=(a=a||{}).scope||c,s=a.toggleEvent||f;var r=function(e,t,n,r){var o,i,a;if(!1===t&&(t=f),t)for(t={func:t},r&&Yt.extend(t,r),a=(i=e.toLowerCase().split(" ")).length;a--;)e=i[a],(o=l[e])||(o=l[e]=[],s(e,!0)),n?o.unshift(t):o.push(t);return c},m=function(e,t){var n,r,o,i,a;if(e)for(n=(i=e.toLowerCase().split(" ")).length;n--;){if(e=i[n],r=l[e],!e){for(o in l)s(o,!1),delete l[o];return c}if(r){if(t)for(a=r.length;a--;)r[a].func===t&&(r=r.slice(0,a).concat(r.slice(a+1)),l[e]=r);else r.length=0;r.length||(s(e,!1),delete l[e])}}else{for(e in l)s(e,!1);l={}}return c};c.fire=function(e,t){var n,r,o,i;if(e=e.toLowerCase(),(t=t||{}).type=e,t.target||(t.target=u),t.preventDefault||(t.preventDefault=function(){t.isDefaultPrevented=d},t.stopPropagation=function(){t.isPropagationStopped=d},t.stopImmediatePropagation=function(){t.isImmediatePropagationStopped=d},t.isDefaultPrevented=f,t.isPropagationStopped=f,t.isImmediatePropagationStopped=f),a.beforeFire&&a.beforeFire(t),n=l[e])for(r=0,o=n.length;r<o;r++){if((i=n[r]).once&&m(e,i.func),t.isImmediatePropagationStopped())return t.stopPropagation(),t;if(!1===i.func.call(u,t))return t.preventDefault(),t}return t},c.on=r,c.off=m,c.once=function(e,t,n){return r(e,t,n,{once:!0})},c.has=function(e){return e=e.toLowerCase(),!(!l[e]||0===l[e].length)}};kg.isNative=function(e){return!!Sg[e.toLowerCase()]};var Tg,Ag=function(n){return n._eventDispatcher||(n._eventDispatcher=new kg({scope:n,toggleEvent:function(e,t){kg.isNative(e)&&n.toggleNativeEvent&&n.toggleNativeEvent(e,t)}})),n._eventDispatcher},Rg={fire:function(e,t,n){if(this.removed&&"remove"!==e)return t;if(t=Ag(this).fire(e,t,n),!1!==n&&this.parent)for(var r=this.parent();r&&!t.isPropagationStopped();)r.fire(e,t,!1),r=r.parent();return t},on:function(e,t,n){return Ag(this).on(e,t,n)},off:function(e,t){return Ag(this).off(e,t)},once:function(e,t){return Ag(this).once(e,t)},hasEventListeners:function(e){return Ag(this).has(e)}},_g=function(e,t){return e.fire("PreProcess",t)},Dg=function(e,t){return e.fire("PostProcess",t)},Bg=function(e){return e.fire("remove")},Og=function(e,t){return e.fire("SwitchMode",{mode:t})},Pg=function(e,t,n,r){e.fire("ObjectResizeStart",{target:t,width:n,height:r})},Lg=function(e,t,n,r){e.fire("ObjectResized",{target:t,width:n,height:r})},Ig=function(e,t,n){try{e.getDoc().execCommand(t,!1,n)}catch(r){}},Mg=function(e,t,n){var r,o;zi(e,t)&&!1===n?(o=t,Pi(r=e)?r.dom().classList.remove(o):Ii(r,o),Fi(r)):n&&Mi(e,t)},Fg=function(e,t){Mg(rr.fromDom(e.getBody()),"mce-content-readonly",t),t?(e.selection.controlSelection.hideResizeRect(),e.readonly=!0,e.getBody().contentEditable="false"):(e.readonly=!1,e.getBody().contentEditable="true",Ig(e,"StyleWithCSS",!1),Ig(e,"enableInlineTableEditing",!1),Ig(e,"enableObjectResizing",!1),e.focus(),e.nodeChanged())},zg=function(e){return e.readonly?"readonly":"design"},Ug=gi.DOM,Vg=function(e,t){return"selectionchange"===t?e.getDoc():!e.inline&&/^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t)?e.getDoc().documentElement:e.settings.event_root?(e.eventRoot||(e.eventRoot=Ug.select(e.settings.event_root)[0]),e.eventRoot):e.getBody()},Hg=function(e,t,n){var r;(r=e).hidden||r.readonly?!0===e.readonly&&n.preventDefault():e.fire(t,n)},jg=function(i,a){var e,t;if(i.delegates||(i.delegates={}),!i.delegates[a]&&!i.removed)if(e=Vg(i,a),i.settings.event_root){if(Tg||(Tg={},i.editorManager.on("removeEditor",function(){var e;if(!i.editorManager.activeEditor&&Tg){for(e in Tg)i.dom.unbind(Vg(i,e));Tg=null}})),Tg[a])return;t=function(e){for(var t=e.target,n=i.editorManager.get(),r=n.length;r--;){var o=n[r].getBody();(o===t||Ug.isChildOf(t,o))&&Hg(n[r],a,e)}},Tg[a]=t,Ug.bind(e,a,t)}else t=function(e){Hg(i,a,e)},Ug.bind(e,a,t),i.delegates[a]=t},qg={bindPendingEventDelegates:function(){var t=this;Yt.each(t._pendingNativeEvents,function(e){jg(t,e)})},toggleNativeEvent:function(e,t){var n=this;"focus"!==e&&"blur"!==e&&(t?n.initialized?jg(n,e):n._pendingNativeEvents?n._pendingNativeEvents.push(e):n._pendingNativeEvents=[e]:n.initialized&&(n.dom.unbind(Vg(n,e),e,n.delegates[e]),delete n.delegates[e]))},unbindAllNativeEvents:function(){var e,t=this,n=t.getBody(),r=t.dom;if(t.delegates){for(e in t.delegates)t.dom.unbind(Vg(t,e),e,t.delegates[e]);delete t.delegates}!t.inline&&n&&r&&(n.onload=null,r.unbind(t.getWin()),r.unbind(t.getDoc())),r&&(r.unbind(n),r.unbind(t.getContainer()))}},$g=qg=Yt.extend({},Rg,qg),Wg=Yt.each,Kg=Yt.explode,Xg={f9:120,f10:121,f11:122},Yg=Yt.makeMap("alt,ctrl,shift,meta,access");function Gg(i){var a={},r=[],u=function(e){var t,n,r={};for(n in Wg(Kg(e,"+"),function(e){e in Yg?r[e]=!0:/^[0-9]{2,}$/.test(e)?r.keyCode=parseInt(e,10):(r.charCode=e.charCodeAt(0),r.keyCode=Xg[e]||e.toUpperCase().charCodeAt(0))}),t=[r.keyCode],Yg)r[n]?t.push(n):r[n]=!1;return r.id=t.join(","),r.access&&(r.alt=!0,de.mac?r.ctrl=!0:r.shift=!0),r.meta&&(de.mac?r.meta=!0:(r.ctrl=!0,r.meta=!1)),r},s=function(e,t,n,r){var o;return(o=Yt.map(Kg(e,">"),u))[o.length-1]=Yt.extend(o[o.length-1],{func:n,scope:r||i}),Yt.extend(o[0],{desc:i.translate(t),subpatterns:o.slice(1)})},o=function(e,t){return!!t&&t.ctrl===e.ctrlKey&&t.meta===e.metaKey&&t.alt===e.altKey&&t.shift===e.shiftKey&&!!(e.keyCode===t.keyCode||e.charCode&&e.charCode===t.charCode)&&(e.preventDefault(),!0)},c=function(e){return e.func?e.func.call(e.scope):null};i.on("keyup keypress keydown",function(t){var e,n;((n=t).altKey||n.ctrlKey||n.metaKey||"keydown"===(e=t).type&&112<=e.keyCode&&e.keyCode<=123)&&!t.isDefaultPrevented()&&(Wg(a,function(e){if(o(t,e))return r=e.subpatterns.slice(0),"keydown"===t.type&&c(e),!0}),o(t,r[0])&&(1===r.length&&"keydown"===t.type&&c(r[0]),r.shift()))}),this.add=function(e,n,r,o){var t;return"string"==typeof(t=r)?r=function(){i.execCommand(t,!1,null)}:Yt.isArray(t)&&(r=function(){i.execCommand(t[0],t[1],t[2])}),Wg(Kg(Yt.trim(e.toLowerCase())),function(e){var t=s(e,n,r,o);a[t.id]=t}),!0},this.remove=function(e){var t=s(e);return!!a[t.id]&&(delete a[t.id],!0)}}var Jg=function(e){var t=Lr(e).dom();return e.dom()===t.activeElement},Qg=function(t){return(e=Lr(t),n=e!==undefined?e.dom():document,A.from(n.activeElement).map(rr.fromDom)).filter(function(e){return t.dom().contains(e.dom())});var e,n},Zg=function(t,e){return(n=e,n.collapsed?A.from(Va(n.startContainer,n.startOffset)).map(rr.fromDom):A.none()).bind(function(e){return vo(e)?A.some(e):!1===Pr(t,e)?A.some(t):A.none()});var n},ep=function(t,e){Zg(rr.fromDom(t.getBody()),e).bind(function(e){return ic.firstPositionIn(e.dom())}).fold(function(){t.selection.normalize()},function(e){return t.selection.setRng(e.toRange())})},tp=function(e){if(e.setActive)try{e.setActive()}catch(t){e.focus()}else e.focus()},np=function(e){var t,n=e.getBody();return n&&(t=rr.fromDom(n),Jg(t)||Qg(t).isSome())},rp=function(e){return e.inline?np(e):(t=e).iframeElement&&Jg(rr.fromDom(t.iframeElement));var t},op=function(e){return e.editorManager.setActive(e)},ip=function(e,t){e.removed||(t?op(e):function(t){var e=t.selection,n=t.settings.content_editable,r=t.getBody(),o=e.getRng();t.quirks.refreshContentEditable();var i,a,u=(i=t,a=e.getNode(),i.dom.getParent(a,function(e){return"true"===i.dom.getContentEditable(e)}));if(t.$.contains(r,u))return tp(u),ep(t,o),op(t);t.bookmark!==undefined&&!1===rp(t)&&hg(t).each(function(e){t.selection.setRng(e),o=e}),n||(de.opera||tp(r),t.getWin().focus()),(de.gecko||n)&&(tp(r),ep(t,o)),op(t)}(e))},ap=rp,up=function(e,t){return t.dom()[e]},sp=function(e,t){return parseInt(wr(t,e),10)},cp=d(up,"clientWidth"),lp=d(up,"clientHeight"),fp=d(sp,"margin-top"),dp=d(sp,"margin-left"),mp=function(e,t,n){var r,o,i,a,u,s,c,l,f,d,m,g=rr.fromDom(e.getBody()),p=e.inline?g:(r=g,rr.fromDom(r.dom().ownerDocument.documentElement)),h=(o=e.inline,a=t,u=n,s=(i=p).dom().getBoundingClientRect(),{x:a-(o?s.left+i.dom().clientLeft+dp(i):0),y:u-(o?s.top+i.dom().clientTop+fp(i):0)});return l=h.x,f=h.y,d=cp(c=p),m=lp(c),0<=l&&0<=f&&l<=d&&f<=m},gp=function(e){var t,n=e.inline?e.getBody():e.getContentAreaContainer();return(t=n,A.from(t).map(rr.fromDom)).map(function(e){return Pr(Lr(e),e)}).getOr(!1)};function pp(n){var t,o=[],i=function(){var e,t=n.theme;return t&&t.getNotificationManagerImpl?t.getNotificationManagerImpl():{open:e=function(){throw new Error("Theme did not provide a NotificationManager implementation.")},close:e,reposition:e,getArgs:e}},a=function(){0<o.length&&i().reposition(o)},u=function(t){K(o,function(e){return e===t}).each(function(e){o.splice(e,1)})},r=function(r){if(!n.removed&&gp(n))return V(o,function(e){return t=i().getArgs(e),n=r,!(t.type!==n.type||t.text!==n.text||t.progressBar||t.timeout||n.progressBar||n.timeout);var t,n}).getOrThunk(function(){n.editorManager.setActive(n);var e,t=i().open(r,function(){u(t),a()});return e=t,o.push(e),a(),t})};return(t=n).on("SkinLoaded",function(){var e=t.settings.service_message;e&&r({text:e,type:"warning",timeout:0,icon:""})}),t.on("ResizeEditor ResizeWindow",function(){ve.requestAnimationFrame(a)}),t.on("remove",function(){F(o.slice(),function(e){i().close(e)})}),{open:r,close:function(){A.from(o[0]).each(function(e){i().close(e),u(e),a()})},getNotifications:function(){return o}}}function hp(r){var o=[],i=function(){var e,t=r.theme;return t&&t.getWindowManagerImpl?t.getWindowManagerImpl():{open:e=function(){throw new Error("Theme did not provide a WindowManager implementation.")},alert:e,confirm:e,close:e,getParams:e,setParams:e}},a=function(e,t){return function(){return t?t.apply(e,arguments):undefined}},u=function(e){var t;o.push(e),t=e,r.fire("OpenWindow",{win:t})},s=function(n){K(o,function(e){return e===n}).each(function(e){var t;o.splice(e,1),t=n,r.fire("CloseWindow",{win:t}),0===o.length&&r.focus()})},e=function(){return A.from(o[o.length-1])};return r.on("remove",function(){F(o.slice(0),function(e){i().close(e)})}),{windows:o,open:function(e,t){r.editorManager.setActive(r),gg(r);var n=i().open(e,t,s);return u(n),n},alert:function(e,t,n){var r=i().alert(e,a(n||this,t),s);u(r)},confirm:function(e,t,n){var r=i().confirm(e,a(n||this,t),s);u(r)},close:function(){e().each(function(e){i().close(e),s(e)})},getParams:function(){return e().map(i().getParams).getOr(null)},setParams:function(t){e().each(function(e){i().setParams(e,t)})},getWindows:function(){return o}}}var vp=wi.PluginManager,bp=function(e,t){var n=function(e,t){for(var n in vp.urls)if(vp.urls[n]+"/plugin"+t+".js"===e)return n;return null}(t,e.suffix);return n?"Failed to load plugin: "+n+" from url "+t:"Failed to load plugin url: "+t},yp=function(e,t){e.notificationManager.open({type:"error",text:t})},Cp=function(e,t){e._skinLoaded?yp(e,t):e.on("SkinLoaded",function(){yp(e,t)})},xp=function(e,t){Cp(e,bp(e,t))},wp=function(e,t){Cp(e,"Failed to upload image: "+t)},Np=Cp,Ep=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=window.console;r&&(r.error?r.error.apply(r,arguments):r.log.apply(r,arguments))},Sp=wi.PluginManager,kp=wi.ThemeManager;function Tp(){return new(ie.getOrDie("XMLHttpRequest"))}function Ap(u,s){var r={},n=function(e,r,o,t){var i,n;(i=Tp()).open("POST",s.url),i.withCredentials=s.credentials,i.upload.onprogress=function(e){t(e.loaded/e.total*100)},i.onerror=function(){o("Image upload failed due to a XHR Transport error. Code: "+i.status)},i.onload=function(){var e,t,n;i.status<200||300<=i.status?o("HTTP Error: "+i.status):(e=JSON.parse(i.responseText))&&"string"==typeof e.location?r((t=s.basePath,n=e.location,t?t.replace(/\/$/,"")+"/"+n.replace(/^\//,""):n)):o("Invalid JSON: "+i.responseText)},(n=new FormData).append("file",e.blob(),e.filename()),i.send(n)},c=function(e,t){return{url:t,blobInfo:e,status:!0}},l=function(e,t){return{url:"",blobInfo:e,status:!1,error:t}},f=function(e,t){Yt.each(r[e],function(e){e(t)}),delete r[e]},o=function(e,n){return e=Yt.grep(e,function(e){return!u.isUploaded(e.blobUri())}),me.all(Yt.map(e,function(e){return u.isPending(e.blobUri())?(t=e.blobUri(),new me(function(e){r[t]=r[t]||[],r[t].push(e)})):(o=e,i=s.handler,a=n,u.markPending(o.blobUri()),new me(function(t){var n;try{var r=function(){n&&n.close()};i(o,function(e){r(),u.markUploaded(o.blobUri(),e),f(o.blobUri(),c(o,e)),t(c(o,e))},function(e){r(),u.removeFailed(o.blobUri()),f(o.blobUri(),l(o,e)),t(l(o,e))},function(e){e<0||100<e||(n||(n=a()),n.progressBar.value(e))})}catch(e){t(l(o,e.message))}}));var o,i,a,t}))};return!1===P(s.handler)&&(s.handler=n),{upload:function(e,t){return s.url||s.handler!==n?o(e,t):new me(function(e){e([])})}}}var Rp=function(e){return ie.getOrDie("atob")(e)},_p=function(e){var t,n,r=decodeURIComponent(e).split(",");return(n=/data:([^;]+)/.exec(r[0]))&&(t=n[1]),{type:t,data:r[1]}},Dp=function(a){return new me(function(e){var t,n,r,o,i=_p(a);try{t=Rp(i.data)}catch(LN){return void e(new Blob([]))}for(o=t.length,n=new(ie.getOrDie("Uint8Array"))(o),r=0;r<n.length;r++)n[r]=t.charCodeAt(r);e(new Blob([n],{type:i.type}))})},Bp=function(e){return 0===e.indexOf("blob:")?(i=e,new me(function(e,t){var n=function(){t("Cannot convert "+i+" to Blob. Resource might not exist or is inaccessible.")};try{var r=Tp();r.open("GET",i,!0),r.responseType="blob",r.onload=function(){200===this.status?e(this.response):n()},r.onerror=n,r.send()}catch(o){n()}})):0===e.indexOf("data:")?Dp(e):null;var i},Op=function(n){return new me(function(e){var t=new(ie.getOrDie("FileReader"));t.onloadend=function(){e(t.result)},t.readAsDataURL(n)})},Pp=_p,Lp=0,Ip=function(e){return(e||"blobid")+Lp++},Mp=function(n,r,o,t){var i,a;0!==r.src.indexOf("blob:")?(i=Pp(r.src).data,(a=n.findFirst(function(e){return e.base64()===i}))?o({image:r,blobInfo:a}):Bp(r.src).then(function(e){a=n.create(Ip(),e,i),n.add(a),o({image:r,blobInfo:a})},function(e){t(e)})):(a=n.getByUri(r.src))?o({image:r,blobInfo:a}):Bp(r.src).then(function(t){Op(t).then(function(e){i=Pp(e).data,a=n.create(Ip(),t,i),n.add(a),o({image:r,blobInfo:a})})},function(e){t(e)})},Fp=function(e){return e?ne(e.getElementsByTagName("img")):[]},zp=0,Up={uuid:function(e){return e+zp+++(t=function(){return Math.round(4294967295*Math.random()).toString(36)},"s"+(new Date).getTime().toString(36)+t()+t()+t());var t}};function Vp(u){var n,o,t,e,i,r,a,s,c,l=(n=[],o=function(e){var t,n,r;if(!e.blob||!e.base64)throw new Error("blob and base64 representations of the image are required for BlobInfo to be created");return t=e.id||Up.uuid("blobid"),n=e.name||t,{id:j(t),name:j(n),filename:j(n+"."+(r=e.blob.type,{"image/jpeg":"jpg","image/jpg":"jpg","image/gif":"gif","image/png":"png"}[r.toLowerCase()]||"dat")),blob:j(e.blob),base64:j(e.base64),blobUri:j(e.blobUri||ue.createObjectURL(e.blob)),uri:j(e.uri)}},{create:function(e,t,n,r){if(R(e))return o({id:e,name:r,blob:t,base64:n});if(_(e))return o(e);throw new Error("Unknown input type")},add:function(e){t(e.id())||n.push(e)},get:t=function(t){return e(function(e){return e.id()===t})},getByUri:function(t){return e(function(e){return e.blobUri()===t})},findFirst:e=function(e){return z(n,e)[0]},removeByUri:function(t){n=z(n,function(e){return e.blobUri()!==t||(ue.revokeObjectURL(e.blobUri()),!1)})},destroy:function(){F(n,function(e){ue.revokeObjectURL(e.blobUri())}),n=[]}}),f=(a={},s=function(e,t){return{status:e,resultUri:t}},{hasBlobUri:c=function(e){return e in a},getResultUri:function(e){var t=a[e];return t?t.resultUri:null},isPending:function(e){return!!c(e)&&1===a[e].status},isUploaded:function(e){return!!c(e)&&2===a[e].status},markPending:function(e){a[e]=s(1,null)},markUploaded:function(e,t){a[e]=s(2,t)},removeFailed:function(e){delete a[e]},destroy:function(){a={}}}),d=[],m=function(t){return function(e){return u.selection?t(e):[]}},g=function(e,t,n){for(var r=0;-1!==(r=e.indexOf(t,r))&&(e=e.substring(0,r)+n+e.substr(r+t.length),r+=n.length-t.length+1),-1!==r;);return e},p=function(e,t,n){return e=g(e,'src="'+t+'"','src="'+n+'"'),e=g(e,'data-mce-src="'+t+'"','data-mce-src="'+n+'"')},h=function(t,n){F(u.undoManager.data,function(e){"fragmented"===e.type?e.fragments=$(e.fragments,function(e){return p(e,t,n)}):e.content=p(e.content,t,n)})},v=function(){return u.notificationManager.open({text:u.translate("Image uploading..."),type:"info",timeout:-1,progressBar:!0})},b=function(e,t){l.removeByUri(e.src),h(e.src,t),u.$(e).attr({src:Nm(u)?t+"?"+(new Date).getTime():t,"data-mce-src":u.convertURL(t,"src")})},y=function(n){return i||(i=Ap(f,{url:Sm(u),basePath:km(u),credentials:Tm(u),handler:Am(u)})),w().then(m(function(r){var e;return e=$(r,function(e){return e.blobInfo}),i.upload(e,v).then(m(function(e){var t=$(e,function(e,t){var n=r[t].image;return e.status&&Em(u)?b(n,e.url):e.error&&wp(u,e.error),{element:n,status:e.status}});return n&&n(t),t}))}))},C=function(e){if(wm(u))return y(e)},x=function(t){return!1!==J(d,function(e){return e(t)})&&(0!==t.getAttribute("src").indexOf("data:")||xm(u)(t))},w=function(){var o,i,a;return r||(o=f,i=l,a={},r={findAll:function(e,n){var t;n||(n=j(!0)),t=z(Fp(e),function(e){var t=e.src;return!!de.fileApi&&!e.hasAttribute("data-mce-bogus")&&!e.hasAttribute("data-mce-placeholder")&&!(!t||t===de.transparentSrc)&&(0===t.indexOf("blob:")?!o.isUploaded(t)&&n(e):0===t.indexOf("data:")&&n(e))});var r=$(t,function(n){if(a[n.src])return new me(function(t){a[n.src].then(function(e){if("string"==typeof e)return e;t({image:n,blobInfo:e.blobInfo})})});var e=new me(function(e,t){Mp(i,n,e,t)}).then(function(e){return delete a[e.image.src],e})["catch"](function(e){return delete a[n.src],e});return a[n.src]=e});return me.all(r)}}),r.findAll(u.getBody(),x).then(m(function(e){return e=z(e,function(e){return"string"!=typeof e||(Np(u,e),!1)}),F(e,function(e){h(e.image.src,e.blobInfo.blobUri()),e.image.src=e.blobInfo.blobUri(),e.image.removeAttribute("data-mce-src")}),e}))},N=function(e){return e.replace(/src="(blob:[^"]+)"/g,function(e,n){var t=f.getResultUri(n);if(t)return'src="'+t+'"';var r=l.getByUri(n);return r||(r=U(u.editorManager.get(),function(e,t){return e||t.editorUpload&&t.editorUpload.blobCache.getByUri(n)},null)),r?'src="data:'+r.blob().type+";base64,"+r.base64()+'"':e})};return u.on("setContent",function(){wm(u)?C():w()}),u.on("RawSaveContent",function(e){e.content=N(e.content)}),u.on("getContent",function(e){e.source_view||"raw"===e.format||(e.content=N(e.content))}),u.on("PostRender",function(){u.parser.addNodeFilter("img",function(e){F(e,function(e){var t=e.attr("src");if(!l.getByUri(t)){var n=f.getResultUri(t);n&&e.attr("src",n)}})})}),{blobCache:l,addFilter:function(e){d.push(e)},uploadImages:y,uploadImagesAuto:C,scanForImages:w,destroy:function(){l.destroy(),f.destroy(),r=i=null}}}var Hp=function(e,t){return e.hasOwnProperty(t.nodeName)},jp=function(t,e,n){return r=Vl(rr.fromDom(n),rr.fromDom(e)),K(r,function(e){return Hp(t,e.dom())}).isSome();var r},qp=function(e,t){if(_o.isText(t)){if(0===t.nodeValue.length)return!0;if(/^\s+$/.test(t.nodeValue)&&(!t.nextSibling||Hp(e,t.nextSibling)))return!0}return!1},$p=function(e){var t,n,r,o,i,a,u,s,c,l,f,d=e.settings,m=e.dom,g=e.selection,p=e.schema,h=p.getBlockElements(),v=g.getStart(),b=e.getBody();if(f=d.forced_root_block,v&&_o.isElement(v)&&f&&(l=b.nodeName.toLowerCase(),p.isValidChild(l,f.toLowerCase())&&!jp(h,b,v))){for(n=(t=g.getRng()).startContainer,r=t.startOffset,o=t.endContainer,i=t.endOffset,c=ap(e),v=b.firstChild;v;)if(y=h,C=v,_o.isText(C)||_o.isElement(C)&&!Hp(y,C)&&!pc(C)){if(qp(h,v)){v=(u=v).nextSibling,m.remove(u);continue}a||(a=m.create(f,e.settings.forced_root_block_attrs),v.parentNode.insertBefore(a,v),s=!0),v=(u=v).nextSibling,a.appendChild(u)}else a=null,v=v.nextSibling;var y,C;s&&c&&(t.setStart(n,r),t.setEnd(o,i),g.setRng(t),e.nodeChanged())}},Wp=function(e){e.settings.forced_root_block&&e.on("NodeChange",d($p,e))},Kp=function(t){return jr(t).fold(j([t]),function(e){return[t].concat(Kp(e))})},Xp=function(t){return qr(t).fold(j([t]),function(e){return"br"===ur(e)?Mr(e).map(function(e){return[t].concat(Xp(e))}).getOr([]):[t].concat(Xp(e))})},Yp=function(o,e){return qa([(i=e,a=i.startContainer,u=i.startOffset,_o.isText(a)?0===u?A.some(rr.fromDom(a)):A.none():A.from(a.childNodes[u]).map(rr.fromDom)),(t=e,n=t.endContainer,r=t.endOffset,_o.isText(n)?r===n.data.length?A.some(rr.fromDom(n)):A.none():A.from(n.childNodes[r-1]).map(rr.fromDom))],function(e,t){var n=V(Kp(o),d(Or,e)),r=V(Xp(o),d(Or,t));return n.isSome()&&r.isSome()}).getOr(!1);var t,n,r,i,a,u},Gp=function(e,t,n,r){var o=n,i=new ro(n,o),a=e.schema.getNonEmptyElements();do{if(3===n.nodeType&&0!==Yt.trim(n.nodeValue).length)return void(r?t.setStart(n,0):t.setEnd(n,n.nodeValue.length));if(a[n.nodeName]&&!/^(TD|TH)$/.test(n.nodeName))return void(r?t.setStartBefore(n):"BR"===n.nodeName?t.setEndBefore(n):t.setEndAfter(n));if(de.ie&&de.ie<11&&e.isBlock(n)&&e.isEmpty(n))return void(r?t.setStart(n,0):t.setEnd(n,0))}while(n=r?i.next():i.prev());"BODY"===o.nodeName&&(r?t.setStart(o,0):t.setEnd(o,o.childNodes.length))},Jp=function(e){var t=e.selection.getSel();return t&&0<t.rangeCount};function Qp(i){var r,o=[];"onselectionchange"in i.getDoc()||i.on("NodeChange Click MouseUp KeyUp Focus",function(e){var t,n;n={startContainer:(t=i.selection.getRng()).startContainer,startOffset:t.startOffset,endContainer:t.endContainer,endOffset:t.endOffset},"nodechange"!==e.type&&Im(n,r)||i.fire("SelectionChange"),r=n}),i.on("contextmenu",function(){i.fire("SelectionChange")}),i.on("SelectionChange",function(){var e=i.selection.getStart(!0);!e||!de.range&&i.selection.isCollapsed()||Jp(i)&&!function(e){var t,n;if((n=i.$(e).parentsUntil(i.getBody()).add(e)).length===o.length){for(t=n.length;0<=t&&n[t]===o[t];t--);if(-1===t)return o=n,!0}return o=n,!1}(e)&&i.dom.isChildOf(e,i.getBody())&&i.nodeChanged({selectionChange:!0})}),i.on("MouseUp",function(e){!e.isDefaultPrevented()&&Jp(i)&&("IMG"===i.selection.getNode().nodeName?ve.setEditorTimeout(i,function(){i.nodeChanged()}):i.nodeChanged())}),this.nodeChanged=function(e){var t,n,r,o=i.selection;i.initialized&&o&&!i.settings.disable_nodechange&&!i.readonly&&(r=i.getBody(),(t=o.getStart(!0)||r).ownerDocument===i.getDoc()&&i.dom.isChildOf(t,r)||(t=r),n=[],i.dom.getParent(t,function(e){if(e===r)return!0;n.push(e)}),(e=e||{}).element=t,e.parents=n,i.fire("NodeChange",e))}}var Zp,eh,th=function(e){var t,n,r,o;return o=e.getBoundingClientRect(),n=(t=e.ownerDocument).documentElement,r=t.defaultView,{top:o.top+r.pageYOffset-n.clientTop,left:o.left+r.pageXOffset-n.clientLeft}},nh=function(e,t){return n=(u=e).inline?th(u.getBody()):{left:0,top:0},a=(i=e).getBody(),r=i.inline?{left:a.scrollLeft,top:a.scrollTop}:{left:0,top:0},{pageX:(o=function(e,t){if(t.target.ownerDocument!==e.getDoc()){var n=th(e.getContentAreaContainer()),r=(i=(o=e).getBody(),a=o.getDoc().documentElement,u={left:i.scrollLeft,top:i.scrollTop},s={left:i.scrollLeft||a.scrollLeft,top:i.scrollTop||a.scrollTop},o.inline?u:s);return{left:t.pageX-n.left+r.left,top:t.pageY-n.top+r.top}}var o,i,a,u,s;return{left:t.pageX,top:t.pageY}}(e,t)).left-n.left+r.left,pageY:o.top-n.top+r.top};var n,r,o,i,a,u},rh=_o.isContentEditableFalse,oh=_o.isContentEditableTrue,ih=function(e){e&&e.parentNode&&e.parentNode.removeChild(e)},ah=function(u,s){return function(e){if(0===e.button){var t=V(s.dom.getParents(e.target),Ka(rh,oh)).getOr(null);if(i=s.getBody(),rh(a=t)&&a!==i){var n=s.dom.getPos(t),r=s.getBody(),o=s.getDoc().documentElement;u.element=t,u.screenX=e.screenX,u.screenY=e.screenY,u.maxX=(s.inline?r.scrollWidth:o.offsetWidth)-2,u.maxY=(s.inline?r.scrollHeight:o.offsetHeight)-2,u.relX=e.pageX-n.x,u.relY=e.pageY-n.y,u.width=t.offsetWidth,u.height=t.offsetHeight,u.ghost=function(e,t,n,r){var o=t.cloneNode(!0);e.dom.setStyles(o,{width:n,height:r}),e.dom.setAttrib(o,"data-mce-selected",null);var i=e.dom.create("div",{"class":"mce-drag-container","data-mce-bogus":"all",unselectable:"on",contenteditable:"false"});return e.dom.setStyles(i,{position:"absolute",opacity:.5,overflow:"hidden",border:0,padding:0,margin:0,width:n,height:r}),e.dom.setStyles(o,{margin:0,boxSizing:"border-box"}),i.appendChild(o),i}(s,t,u.width,u.height)}}var i,a}},uh=function(l,f){return function(e){if(l.dragging&&(s=(i=f).selection,c=s.getSel().getRangeAt(0).startContainer,a=3===c.nodeType?c.parentNode:c,u=l.element,a!==u&&!i.dom.isChildOf(a,u)&&!rh(a))){var t=(r=l.element,(o=r.cloneNode(!0)).removeAttribute("data-mce-selected"),o),n=f.fire("drop",{targetClone:t,clientX:e.clientX,clientY:e.clientY});n.isDefaultPrevented()||(t=n.targetClone,f.undoManager.transact(function(){ih(l.element),f.insertContent(f.dom.getOuterHTML(t)),f._selectionOverrides.hideFakeCaret()}))}var r,o,i,a,u,s,c;sh(l)}},sh=function(e){e.dragging=!1,e.element=null,ih(e.ghost)},ch=function(e){var t,n,r,o,i,a,p,h,v,u,s,c={};t=gi.DOM,a=document,n=ah(c,e),p=c,h=e,v=ve.throttle(function(e,t){h._selectionOverrides.hideFakeCaret(),h.selection.placeCaretAt(e,t)},0),r=function(e){var t,n,r,o,i,a,u,s,c,l,f,d,m=Math.max(Math.abs(e.screenX-p.screenX),Math.abs(e.screenY-p.screenY));if(p.element&&!p.dragging&&10<m){if(h.fire("dragstart",{target:p.element}).isDefaultPrevented())return;p.dragging=!0,h.focus()}if(p.dragging){var g=(f=p,{pageX:(d=nh(h,e)).pageX-f.relX,pageY:d.pageY+5});c=p.ghost,l=h.getBody(),c.parentNode!==l&&l.appendChild(c),t=p.ghost,n=g,r=p.width,o=p.height,i=p.maxX,a=p.maxY,s=u=0,t.style.left=n.pageX+"px",t.style.top=n.pageY+"px",n.pageX+r>i&&(u=n.pageX+r-i),n.pageY+o>a&&(s=n.pageY+o-a),t.style.width=r-u+"px",t.style.height=o-s+"px",v(e.clientX,e.clientY)}},o=uh(c,e),u=c,i=function(){u.dragging&&s.fire("dragend"),sh(u)},(s=e).on("mousedown",n),e.on("mousemove",r),e.on("mouseup",o),t.bind(a,"mousemove",r),t.bind(a,"mouseup",i),e.on("remove",function(){t.unbind(a,"mousemove",r),t.unbind(a,"mouseup",i)})},lh=function(e){var n;ch(e),(n=e).on("drop",function(e){var t="undefined"!=typeof e.clientX?n.getDoc().elementFromPoint(e.clientX,e.clientY):null;(rh(t)||rh(n.dom.getContentEditableParent(t)))&&e.preventDefault()})},fh=function(e){return U(e,function(e,t){return e.concat(function(t){var e=function(e){return $(e,function(e){return(e=La(e)).node=t,e})};if(_o.isElement(t))return e(t.getClientRects());if(_o.isText(t)){var n=t.ownerDocument.createRange();return n.setStart(t,0),n.setEnd(t,t.data.length),e(n.getClientRects())}}(t))},[])};(eh=Zp||(Zp={}))[eh.Up=-1]="Up",eh[eh.Down=1]="Down";var dh=function(o,i,a,e,u,t){var n,s,c=0,l=[],r=function(e){var t,n,r;for(r=fh([e]),-1===o&&(r=r.reverse()),t=0;t<r.length;t++)if(n=r[t],!a(n,s)){if(0<l.length&&i(n,qt.last(l))&&c++,n.line=c,u(n))return!0;l.push(n)}};return(s=qt.last(t.getClientRects()))&&(r(n=t.getNode()),function(e,t,n,r){for(;r=gs(r,e,Oa,t);)if(n(r))return}(o,e,r,n)),l},mh=d(dh,Zp.Up,Fa,za),gh=d(dh,Zp.Down,za,Fa),ph=function(n){return function(e){return t=n,e.line>t;var t}},hh=function(n){return function(e){return t=n,e.line===t;var t}},vh=_o.isContentEditableFalse,bh=gs,yh=function(e,t){return Math.abs(e.left-t)},Ch=function(e,t){return Math.abs(e.right-t)},xh=function(e,t){return e>=t.left&&e<=t.right},wh=function(e,o){return qt.reduce(e,function(e,t){var n,r;return n=Math.min(yh(e,o),Ch(e,o)),r=Math.min(yh(t,o),Ch(t,o)),xh(o,t)?t:xh(o,e)?e:r===n&&vh(t.node)?t:r<n?t:e})},Nh=function(e,t,n,r){for(;r=bh(r,e,Oa,t);)if(n(r))return},Eh=function(e,t,n){var r,o,i,a,u,s,c,l=fh(z(ne(e.getElementsByTagName("*")),ts)),f=z(l,function(e){return n>=e.top&&n<=e.bottom});return(r=wh(f,t))&&(r=wh((a=e,c=function(t,e){var n;return n=z(fh([e]),function(e){return!t(e,u)}),s=s.concat(n),0===n.length},(s=[]).push(u=r),Nh(Zp.Up,a,d(c,Fa),u.node),Nh(Zp.Down,a,d(c,za),u.node),s),t))&&ts(r.node)?(i=t,{node:(o=r).node,before:yh(o,i)<Ch(o,i)}):null},Sh=function(i,a,e){return!e.collapsed&&U(e.getClientRects(),function(e,t){return e||(o=a,(r=i)>=(n=t).left&&r<=n.right&&o>=n.top&&o<=n.bottom);var n,r,o},!1)},kh=_o.isContentEditableTrue,Th=_o.isContentEditableFalse,Ah=function(e,t,n,r,o){return t._selectionOverrides.showCaret(e,n,r,o)},Rh=function(e,t){var n,r;return e.fire("BeforeObjectSelected",{target:t}).isDefaultPrevented()?null:((r=(n=t).ownerDocument.createRange()).selectNode(n),r)},_h=function(e,t,n){var r=ws(1,e.getBody(),t),o=hu.fromRangeStart(r),i=o.getNode();if(Th(i))return Ah(1,e,i,!o.isAtEnd(),!1);var a=o.getNode(!0);if(Th(a))return Ah(1,e,a,!1,!1);var u=e.dom.getParent(o.getNode(),function(e){return Th(e)||kh(e)});return Th(u)?Ah(1,e,u,!1,n):null},Dh=function(e,t,n){if(!t||!t.collapsed)return t;var r=_h(e,t,n);return r||t},Bh=function(t){var e=Di(function(){if(!t.removed&&t.selection.getRng().collapsed){var e=Dh(t,t.selection.getRng(),!1);t.selection.setRng(e)}},0);t.on("focus",function(){e.throttle()}),t.on("blur",function(){e.cancel()})},Oh={BACKSPACE:8,DELETE:46,DOWN:40,ENTER:13,LEFT:37,RIGHT:39,SPACEBAR:32,TAB:9,UP:38,modifierPressed:function(e){return e.shiftKey||e.ctrlKey||e.altKey||this.metaKeyPressed(e)},metaKeyPressed:function(e){return de.mac?e.metaKey:e.ctrlKey&&!e.altKey}},Ph=_o.isContentEditableTrue,Lh=_o.isContentEditableFalse,Ih=As,Mh=Ts,Fh=function(e,t){for(var n=e.getBody();t&&t!==n;){if(Ph(t)||Lh(t))return t;t=t.parentNode}return null},zh=function(g){var p,e,t,a=g.getBody(),o=Zu(g.getBody(),function(e){return g.dom.isBlock(e)},function(){return ap(g)}),h="sel-"+g.dom.uniqueId(),u=function(e){e&&g.selection.setRng(e)},s=function(){return g.selection.getRng()},v=function(e,t,n,r){return void 0===r&&(r=!0),g.fire("ShowCaret",{target:t,direction:e,before:n}).isDefaultPrevented()?null:(r&&g.selection.scrollIntoView(t,-1===e),o.show(n,t))},b=function(e,t){return t=ws(e,a,t),-1===e?hu.fromRangeStart(t):hu.fromRangeEnd(t)},n=function(e){return pa(e)||Ca(e)||xa(e)},y=function(e){return n(e.startContainer)||n(e.endContainer)},c=function(e,t){var n,r,o,i,a,u,s,c,l,f,d=g.$,m=g.dom;if(!e)return null;if(e.collapsed){if(!y(e))if(!1===t){if(c=b(-1,e),ts(c.getNode(!0)))return v(-1,c.getNode(!0),!1,!1);if(ts(c.getNode()))return v(-1,c.getNode(),!c.isAtEnd(),!1)}else{if(c=b(1,e),ts(c.getNode()))return v(1,c.getNode(),!c.isAtEnd(),!1);if(ts(c.getNode(!0)))return v(1,c.getNode(!0),!1,!1)}return null}return i=e.startContainer,a=e.startOffset,u=e.endOffset,3===i.nodeType&&0===a&&Lh(i.parentNode)&&(i=i.parentNode,a=m.nodeIndex(i),i=i.parentNode),1!==i.nodeType?null:(u===a+1&&(n=i.childNodes[a]),Lh(n)?(l=f=n.cloneNode(!0),(s=g.fire("ObjectSelected",{target:n,targetClone:l})).isDefaultPrevented()?null:(r=Ki(rr.fromDom(g.getBody()),"#"+h).fold(function(){return d([])},function(e){return d([e.dom()])}),l=s.targetClone,0===r.length&&(r=d('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>').attr("id",h)).appendTo(g.getBody()),e=g.dom.createRng(),l===f&&de.ie?(r.empty().append('<p style="font-size: 0" data-mce-bogus="all">\xa0</p>').append(l),e.setStartAfter(r[0].firstChild.firstChild),e.setEndAfter(l)):(r.empty().append("\xa0").append(l).append("\xa0"),e.setStart(r[0].firstChild,1),e.setEnd(r[0].lastChild,0)),r.css({top:m.getPos(n,g.getBody()).y}),r[0].focus(),(o=g.selection.getSel()).removeAllRanges(),o.addRange(e),F(Vi(rr.fromDom(g.getBody()),"*[data-mce-selected]"),function(e){yr(e,"data-mce-selected")}),n.setAttribute("data-mce-selected","1"),p=n,C(),e)):null)},l=function(){p&&(p.removeAttribute("data-mce-selected"),Ki(rr.fromDom(g.getBody()),"#"+h).each(Ri),p=null),Ki(rr.fromDom(g.getBody()),"#"+h).each(Ri),p=null},C=function(){o.hide()};return de.ceFalse&&(function(){g.on("mouseup",function(e){var t=s();t.collapsed&&mp(g,e.clientX,e.clientY)&&u(_h(g,t,!1))}),g.on("click",function(e){var t;(t=Fh(g,e.target))&&(Lh(t)&&(e.preventDefault(),g.focus()),Ph(t)&&g.dom.isChildOf(t,g.selection.getNode())&&l())}),g.on("blur NewBlock",function(){l()}),g.on("ResizeWindow FullscreenStateChanged",function(){return o.reposition()});var n,r,i=function(e,t){var n,r,o=g.dom.getParent(e,g.dom.isBlock),i=g.dom.getParent(t,g.dom.isBlock);return!(!o||!g.dom.isChildOf(o,i)||!1!==Lh(Fh(g,o)))||o&&(n=o,r=i,!(g.dom.getParent(n,g.dom.isBlock)===g.dom.getParent(r,g.dom.isBlock)))&&function(e){var t=Gs(e);if(!e.firstChild)return!1;var n=hu.before(e.firstChild),r=t.next(n);return r&&!Mh(r)&&!Ih(r)}(o)};r=!1,(n=g).on("touchstart",function(){r=!1}),n.on("touchmove",function(){r=!0}),n.on("touchend",function(e){var t=Fh(n,e.target);Lh(t)&&(r||(e.preventDefault(),c(Rh(n,t))))}),g.on("mousedown",function(e){var t,n=e.target;if((n===a||"HTML"===n.nodeName||g.dom.isChildOf(n,a))&&!1!==mp(g,e.clientX,e.clientY))if(t=Fh(g,n))Lh(t)?(e.preventDefault(),c(Rh(g,t))):(l(),Ph(t)&&e.shiftKey||Sh(e.clientX,e.clientY,g.selection.getRng())||(C(),g.selection.placeCaretAt(e.clientX,e.clientY)));else if(!1===ts(n)){l(),C();var r=Eh(a,e.clientX,e.clientY);if(r&&!i(e.target,r.node)){e.preventDefault();var o=v(1,r.node,r.before,!1);g.getBody().focus(),u(o)}}}),g.on("keypress",function(e){Oh.modifierPressed(e)||(e.keyCode,Lh(g.selection.getNode())&&e.preventDefault())}),g.on("getSelectionRange",function(e){var t=e.range;if(p){if(!p.parentNode)return void(p=null);(t=t.cloneRange()).selectNode(p),e.range=t}}),g.on("setSelectionRange",function(e){var t;(t=c(e.range,e.forward))&&(e.range=t)}),g.on("AfterSetSelectionRange",function(e){var t,n=e.range;y(n)||"mcepastebin"===n.startContainer.parentNode.id||C(),t=n.startContainer.parentNode,g.dom.hasClass(t,"mce-offscreen-selection")||l()}),g.on("copy",function(e){var t,n=e.clipboardData;if(!e.isDefaultPrevented()&&e.clipboardData&&!de.ie){var r=(t=g.dom.get(h))?t.getElementsByTagName("*")[0]:t;r&&(e.preventDefault(),n.clearData(),n.setData("text/html",r.outerHTML),n.setData("text/plain",r.outerText))}}),lh(g),Bh(g)}(),e=g.contentStyles,t=".mce-content-body",e.push(o.getCss()),e.push(t+" .mce-offscreen-selection {position: absolute;left: -9999999999px;max-width: 1000000px;}"+t+" *[contentEditable=false] {cursor: default;}"+t+" *[contentEditable=true] {cursor: text;}")),{showCaret:v,showBlockCaretContainer:function(e){e.hasAttribute("data-mce-caret")&&(wa(e),u(s()),g.selection.scrollIntoView(e[0]))},hideFakeCaret:C,destroy:function(){o.destroy(),p=null}}},Uh=function(e,t,n){var r,o,i,a,u=1;for(a=e.getShortEndedElements(),(i=/<([!?\/])?([A-Za-z0-9\-_\:\.]+)((?:\s+[^"\'>]+(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>]*))*|\/|\s+)>/g).lastIndex=r=n;o=i.exec(t);){if(r=i.lastIndex,"/"===o[1])u--;else if(!o[1]){if(o[2]in a)continue;u++}if(0===u)break}return r};function Vh(F,z){void 0===z&&(z=ti());var e=function(){};!1!==(F=F||{}).fix_self_closing&&(F.fix_self_closing=!0);var U=F.comment?F.comment:e,V=F.cdata?F.cdata:e,H=F.text?F.text:e,j=F.start?F.start:e,q=F.end?F.end:e,$=F.pi?F.pi:e,W=F.doctype?F.doctype:e;return{parse:function(e){var t,n,r,d,o,i,a,m,u,s,g,c,p,l,f,h,v,b,y,C,x,w,N,E,S,k,T,A,R,_=0,D=[],B=0,O=qo.decode,P=Yt.makeMap("src,href,data,background,formaction,poster,xlink:href"),L=/((java|vb)script|mhtml):/i,I=function(e){var t,n;for(t=D.length;t--&&D[t].name!==e;);if(0<=t){for(n=D.length-1;t<=n;n--)(e=D[n]).valid&&q(e.name);D.length=t}},M=function(e,t,n,r,o){var i,a,u,s,c;if(n=(t=t.toLowerCase())in g?t:O(n||r||o||""),p&&!m&&0==(0===(u=t).indexOf("data-")||0===u.indexOf("aria-"))){if(!(i=b[t])&&y){for(a=y.length;a--&&!(i=y[a]).pattern.test(t););-1===a&&(i=null)}if(!i)return;if(i.validValues&&!(n in i.validValues))return}if(P[t]&&!F.allow_script_urls){var l=n.replace(/[\s\u0000-\u001F]+/g,"");try{l=decodeURIComponent(l)}catch(f){l=unescape(l)}if(L.test(l))return;if(c=l,!(s=F).allow_html_data_urls&&(/^data:image\//i.test(c)?!1===s.allow_svg_data_urls&&/^data:image\/svg\+xml/i.test(c):/^data:/i.test(c)))return}m&&(t in P||0===t.indexOf("on"))||(d.map[t]=n,d.push({name:t,value:n}))};for(S=new RegExp("<(?:(?:!--([\\w\\W]*?)--\x3e)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:!DOCTYPE([\\w\\W]*?)>)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)>)|(?:([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))","g"),k=/([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g,s=z.getShortEndedElements(),E=F.self_closing_elements||z.getSelfClosingElements(),g=z.getBoolAttrs(),p=F.validate,u=F.remove_internals,R=F.fix_self_closing,T=z.getSpecialElements(),N=e+">";t=S.exec(N);){if(_<t.index&&H(O(e.substr(_,t.index-_))),n=t[6])":"===(n=n.toLowerCase()).charAt(0)&&(n=n.substr(1)),I(n);else if(n=t[7]){if(t.index+t[0].length>e.length){H(O(e.substr(t.index))),_=t.index+t[0].length;continue}if(":"===(n=n.toLowerCase()).charAt(0)&&(n=n.substr(1)),c=n in s,R&&E[n]&&0<D.length&&D[D.length-1].name===n&&I(n),!p||(l=z.getElementRule(n))){if(f=!0,p&&(b=l.attributes,y=l.attributePatterns),(v=t[8])?((m=-1!==v.indexOf("data-mce-type"))&&u&&(f=!1),(d=[]).map={},v.replace(k,M)):(d=[]).map={},p&&!m){if(C=l.attributesRequired,x=l.attributesDefault,w=l.attributesForced,l.removeEmptyAttrs&&!d.length&&(f=!1),w)for(o=w.length;o--;)a=(h=w[o]).name,"{$uid}"===(A=h.value)&&(A="mce_"+B++),d.map[a]=A,d.push({name:a,value:A});if(x)for(o=x.length;o--;)(a=(h=x[o]).name)in d.map||("{$uid}"===(A=h.value)&&(A="mce_"+B++),d.map[a]=A,d.push({name:a,value:A}));if(C){for(o=C.length;o--&&!(C[o]in d.map););-1===o&&(f=!1)}if(h=d.map["data-mce-bogus"]){if("all"===h){_=Uh(z,e,S.lastIndex),S.lastIndex=_;continue}f=!1}}f&&j(n,d,c)}else f=!1;if(r=T[n]){r.lastIndex=_=t.index+t[0].length,(t=r.exec(e))?(f&&(i=e.substr(_,t.index-_)),_=t.index+t[0].length):(i=e.substr(_),_=e.length),f&&(0<i.length&&H(i,!0),q(n)),S.lastIndex=_;continue}c||(v&&v.indexOf("/")===v.length-1?f&&q(n):D.push({name:n,valid:f}))}else(n=t[1])?(">"===n.charAt(0)&&(n=" "+n),F.allow_conditional_comments||"[if"!==n.substr(0,3).toLowerCase()||(n=" "+n),U(n)):(n=t[2])?V(n.replace(/<!--|-->/g,"")):(n=t[3])?W(n):(n=t[4])&&$(n,t[5]);_=t.index+t[0].length}for(_<e.length&&H(O(e.substr(_))),o=D.length-1;0<=o;o--)(n=D[o]).valid&&q(n.name)}}}(Vh||(Vh={})).findEndTag=Uh;var Hh=Vh,jh=function(e,t){var n,r,o,i,a,u,s,c,l=t,f=/<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,d=e.schema;for(u=e.getTempAttrs(),s=l,c=new RegExp(["\\s?("+u.join("|")+')="[^"]+"'].join("|"),"gi"),l=s.replace(c,""),a=d.getShortEndedElements();i=f.exec(l);)r=f.lastIndex,o=i[0].length,n=a[i[1]]?r:Hh.findEndTag(d,l,r),l=l.substring(0,r-o)+l.substring(n),f.lastIndex=r-o;return la(l)},qh={trimExternal:jh,trimInternal:jh},$h=0,Wh=2,Kh=1,Xh=function(g,p){var e=g.length+p.length+2,h=new Array(e),v=new Array(e),c=function(e,t,n,r,o){var i=l(e,t,n,r);if(null===i||i.start===t&&i.diag===t-r||i.end===e&&i.diag===e-n)for(var a=e,u=n;a<t||u<r;)a<t&&u<r&&g[a]===p[u]?(o.push([0,g[a]]),++a,++u):r-n<t-e?(o.push([2,g[a]]),++a):(o.push([1,p[u]]),++u);else{c(e,i.start,n,i.start-i.diag,o);for(var s=i.start;s<i.end;++s)o.push([0,g[s]]);c(i.end,t,i.end-i.diag,r,o)}},b=function(e,t,n,r){for(var o=e;o-t<r&&o<n&&g[o]===p[o-t];)++o;return{start:e,end:o,diag:t}},l=function(e,t,n,r){var o=t-e,i=r-n;if(0===o||0===i)return null;var a,u,s,c,l,f=o-i,d=i+o,m=(d%2==0?d:d+1)/2;for(h[1+m]=e,v[1+m]=t+1,a=0;a<=m;++a){for(u=-a;u<=a;u+=2){for(s=u+m,u===-a||u!==a&&h[s-1]<h[s+1]?h[s]=h[s+1]:h[s]=h[s-1]+1,l=(c=h[s])-e+n-u;c<t&&l<r&&g[c]===p[l];)h[s]=++c,++l;if(f%2!=0&&f-a<=u&&u<=f+a&&v[s-f]<=h[s])return b(v[s-f],u+e-n,t,r)}for(u=f-a;u<=f+a;u+=2){for(s=u+m-f,u===f-a||u!==f+a&&v[s+1]<=v[s-1]?v[s]=v[s+1]-1:v[s]=v[s-1],l=(c=v[s]-1)-e+n-u;e<=c&&n<=l&&g[c]===p[l];)v[s]=c--,l--;if(f%2==0&&-a<=u&&u<=a&&v[s]<=h[s+f])return b(v[s],u+e-n,t,r)}}},t=[];return c(0,g.length,0,p.length,t),t},Yh=function(e){return _o.isElement(e)?e.outerHTML:_o.isText(e)?qo.encodeRaw(e.data,!1):_o.isComment(e)?"\x3c!--"+e.data+"--\x3e":""},Gh=function(e,t,n){var r=function(e){var t,n,r;for(r=document.createElement("div"),t=document.createDocumentFragment(),e&&(r.innerHTML=e);n=r.firstChild;)t.appendChild(n);return t}(t);if(e.hasChildNodes()&&n<e.childNodes.length){var o=e.childNodes[n];o.parentNode.insertBefore(r,o)}else e.appendChild(r)},Jh=function(e){return z($(ne(e.childNodes),Yh),function(e){return 0<e.length})},Qh=function(e,t){var n,r,o,i=$(ne(t.childNodes),Yh);return n=Xh(i,e),r=t,o=0,F(n,function(e){e[0]===$h?o++:e[0]===Kh?(Gh(r,e[1],o),o++):e[0]===Wh&&function(e,t){if(e.hasChildNodes()&&t<e.childNodes.length){var n=e.childNodes[t];n.parentNode.removeChild(n)}}(r,o)}),t},Zh=Bi(A.none()),ev=function(e){return{type:"fragmented",fragments:e,content:"",bookmark:null,beforeBookmark:null}},tv=function(e){return{type:"complete",fragments:null,content:e,bookmark:null,beforeBookmark:null}},nv=function(e){return"fragmented"===e.type?e.fragments.join(""):e.content},rv=function(e){var t=rr.fromTag("body",Zh.get().getOrThunk(function(){var e=document.implementation.createHTMLDocument("undo");return Zh.set(A.some(e)),e}));return aa(t,nv(e)),F(Vi(t,"*[data-mce-bogus]"),_i),t.dom().innerHTML},ov=function(n){var e,t,r;return e=Jh(n.getBody()),-1!==(t=(r=G(e,function(e){var t=qh.trimInternal(n.serializer,e);return 0<t.length?[t]:[]})).join("")).indexOf("</iframe>")?ev(r):tv(t)},iv=function(e,t,n){"fragmented"===t.type?Qh(t.fragments,e.getBody()):e.setContent(t.content,{format:"raw"}),e.selection.moveToBookmark(n?t.beforeBookmark:t.bookmark)},av=function(e,t){return!(!e||!t)&&(r=t,nv(e)===nv(r)||(n=t,rv(e)===rv(n)));var n,r};function uv(u){var s,r,o=this,c=0,l=[],t=0,f=function(){return 0===t},i=function(e){f()&&(o.typing=e)},d=function(e){u.setDirty(e)},a=function(e){i(!1),o.add({},e)},n=function(){o.typing&&(i(!1),o.add())};return u.on("init",function(){o.add()}),u.on("BeforeExecCommand",function(e){var t=e.command;"Undo"!==t&&"Redo"!==t&&"mceRepaint"!==t&&(n(),o.beforeChange())}),u.on("ExecCommand",function(e){var t=e.command;"Undo"!==t&&"Redo"!==t&&"mceRepaint"!==t&&a(e)}),u.on("ObjectResizeStart Cut",function(){o.beforeChange()}),u.on("SaveContent ObjectResized blur",a),u.on("DragEnd",a),u.on("KeyUp",function(e){var t=e.keyCode;e.isDefaultPrevented()||((33<=t&&t<=36||37<=t&&t<=40||45===t||e.ctrlKey)&&(a(),u.nodeChanged()),46!==t&&8!==t||u.nodeChanged(),r&&o.typing&&!1===av(ov(u),l[0])&&(!1===u.isDirty()&&(d(!0),u.fire("change",{level:l[0],lastLevel:null})),u.fire("TypingUndo"),r=!1,u.nodeChanged()))}),u.on("KeyDown",function(e){var t=e.keyCode;if(!e.isDefaultPrevented())if(33<=t&&t<=36||37<=t&&t<=40||45===t)o.typing&&a(e);else{var n=e.ctrlKey&&!e.altKey||e.metaKey;!(t<16||20<t)||224===t||91===t||o.typing||n||(o.beforeChange(),i(!0),o.add({},e),r=!0)}}),u.on("MouseDown",function(e){o.typing&&a(e)}),u.on("input",function(e){var t;e.inputType&&("insertReplacementText"===e.inputType||"insertText"===(t=e).inputType&&null===t.data)&&a(e)}),u.addShortcut("meta+z","","Undo"),u.addShortcut("meta+y,meta+shift+z","","Redo"),u.on("AddUndo Undo Redo ClearUndos",function(e){e.isDefaultPrevented()||u.nodeChanged()}),o={data:l,typing:!1,beforeChange:function(){f()&&(s=Iu.getUndoBookmark(u.selection))},add:function(e,t){var n,r,o,i=u.settings;if(o=ov(u),e=e||{},e=Yt.extend(e,o),!1===f()||u.removed)return null;if(r=l[c],u.fire("BeforeAddUndo",{level:e,lastLevel:r,originalEvent:t}).isDefaultPrevented())return null;if(r&&av(r,e))return null;if(l[c]&&(l[c].beforeBookmark=s),i.custom_undo_redo_levels&&l.length>i.custom_undo_redo_levels){for(n=0;n<l.length-1;n++)l[n]=l[n+1];l.length--,c=l.length}e.bookmark=Iu.getUndoBookmark(u.selection),c<l.length-1&&(l.length=c+1),l.push(e),c=l.length-1;var a={level:e,lastLevel:r,originalEvent:t};return u.fire("AddUndo",a),0<c&&(d(!0),u.fire("change",a)),e},undo:function(){var e;return o.typing&&(o.add(),o.typing=!1,i(!1)),0<c&&(e=l[--c],iv(u,e,!0),d(!0),u.fire("undo",{level:e})),e},redo:function(){var e;return c<l.length-1&&(e=l[++c],iv(u,e,!1),d(!0),u.fire("redo",{level:e})),e},clear:function(){l=[],c=0,o.typing=!1,o.data=l,u.fire("ClearUndos")},hasUndo:function(){return 0<c||o.typing&&l[0]&&!av(ov(u),l[0])},hasRedo:function(){return c<l.length-1&&!o.typing},transact:function(e){return n(),o.beforeChange(),o.ignore(e),o.add()},ignore:function(e){try{t++,e()}finally{t--}},extra:function(e,t){var n,r;o.transact(e)&&(r=l[c].bookmark,n=l[c-1],iv(u,n,!0),o.transact(t)&&(l[c-1].beforeBookmark=r))}}}var sv,cv,lv=yc.isEq,fv=function(e,t,n){var r=e.formatter.get(n);if(r)for(var o=0;o<r.length;o++)if(!1===r[o].inherit&&e.dom.is(t,r[o].selector))return!0;return!1},dv=function(t,e,n,r){var o=t.dom.getRoot();return e!==o&&(e=t.dom.getParent(e,function(e){return!!fv(t,e,n)||e.parentNode===o||!!pv(t,e,n,r,!0)}),pv(t,e,n,r))},mv=function(e,t,n){return!!lv(t,n.inline)||!!lv(t,n.block)||(n.selector?1===t.nodeType&&e.is(t,n.selector):void 0)},gv=function(e,t,n,r,o,i){var a,u,s,c=n[r];if(n.onmatch)return n.onmatch(t,n,r);if(c)if("undefined"==typeof c.length){for(a in c)if(c.hasOwnProperty(a)){if(u="attributes"===r?e.getAttrib(t,a):yc.getStyle(e,t,a),o&&!u&&!n.exact)return;if((!o||n.exact)&&!lv(u,yc.normalizeStyleValue(e,yc.replaceVars(c[a],i),a)))return}}else for(s=0;s<c.length;s++)if("attributes"===r?e.getAttrib(t,c[s]):yc.getStyle(e,t,c[s]))return n;return n},pv=function(e,t,n,r,o){var i,a,u,s,c=e.formatter.get(n),l=e.dom;if(c&&t)for(a=0;a<c.length;a++)if(i=c[a],mv(e.dom,t,i)&&gv(l,t,i,"attributes",o,r)&&gv(l,t,i,"styles",o,r)){if(s=i.classes)for(u=0;u<s.length;u++)if(!e.dom.hasClass(t,s[u]))return;return i}},hv={matchNode:pv,matchName:mv,match:function(e,t,n,r){var o;return r?dv(e,r,t,n):(r=e.selection.getNode(),!!dv(e,r,t,n)||!((o=e.selection.getStart())===r||!dv(e,o,t,n)))},matchAll:function(r,o,i){var e,a=[],u={};return e=r.selection.getStart(),r.dom.getParent(e,function(e){var t,n;for(t=0;t<o.length;t++)n=o[t],!u[n]&&pv(r,e,n,i)&&(u[n]=!0,a.push(n))},r.dom.getRoot()),a},canApply:function(e,t){var n,r,o,i,a,u=e.formatter.get(t),s=e.dom;if(u)for(n=e.selection.getStart(),r=yc.getParents(s,n),i=u.length-1;0<=i;i--){if(!(a=u[i].selector)||u[i].defaultBlock)return!0;for(o=r.length-1;0<=o;o--)if(s.is(r[o],a))return!0}return!1},matchesUnInheritedFormatSelector:fv},vv=function(e,t){return e.splitText(t)},bv=function(e){var t=e.startContainer,n=e.startOffset,r=e.endContainer,o=e.endOffset;return t===r&&_o.isText(t)?0<n&&n<t.nodeValue.length&&(t=(r=vv(t,n)).previousSibling,n<o?(t=r=vv(r,o-=n).previousSibling,o=r.nodeValue.length,n=0):o=0):(_o.isText(t)&&0<n&&n<t.nodeValue.length&&(t=vv(t,n),n=0),_o.isText(r)&&0<o&&o<r.nodeValue.length&&(o=(r=vv(r,o).previousSibling).nodeValue.length)),{startContainer:t,startOffset:n,endContainer:r,endOffset:o}},yv=ca,Cv="_mce_caret",xv=function(e){return 0<function(e){for(var t=[];e;){if(3===e.nodeType&&e.nodeValue!==yv||1<e.childNodes.length)return[];1===e.nodeType&&t.push(e),e=e.firstChild}return t}(e).length},wv=function(e){var t;if(e)for(e=(t=new ro(e,e)).current();e;e=t.next())if(3===e.nodeType)return e;return null},Nv=function(e){var t=rr.fromTag("span");return vr(t,{id:Cv,"data-mce-bogus":"1","data-mce-type":"format-caret"}),e&&ki(t,rr.fromText(yv)),t},Ev=function(e,t,n){void 0===n&&(n=!0);var r,o=e.dom,i=e.selection;if(xv(t))Tf(e,!1,rr.fromDom(t),n);else{var a=i.getRng(),u=o.getParent(t,o.isBlock),s=((r=wv(t))&&r.nodeValue.charAt(0)===yv&&r.deleteData(0,1),r);a.startContainer===s&&0<a.startOffset&&a.setStart(s,a.startOffset-1),a.endContainer===s&&0<a.endOffset&&a.setEnd(s,a.endOffset-1),o.remove(t,!0),u&&o.isEmpty(u)&&Zc(rr.fromDom(u)),i.setRng(a)}},Sv=function(e,t,n){void 0===n&&(n=!0);var r=e.dom,o=e.selection;if(t)Ev(e,t,n);else if(!(t=zu(e.getBody(),o.getStart())))for(;t=r.get(Cv);)Ev(e,t,!1)},kv=function(e,t,n){var r=e.dom,o=r.getParent(n,d(yc.isTextBlock,e));o&&r.isEmpty(o)?n.parentNode.replaceChild(t,n):(Qc(rr.fromDom(n)),r.isEmpty(n)?n.parentNode.replaceChild(t,n):r.insertAfter(t,n))},Tv=function(e,t){return e.appendChild(t),t},Av=function(e,t){var n,r,o=(n=function(e,t){return Tv(e,t.cloneNode(!1))},r=t,function(e,t){for(var n=e.length-1;0<=n;n--)t(e[n],n,e)}(e,function(e){r=n(r,e)}),r);return Tv(o,o.ownerDocument.createTextNode(yv))},Rv=function(i){i.on("mouseup keydown",function(e){var t,n,r,o;t=i,n=e.keyCode,r=t.selection,o=t.getBody(),Sv(t,null,!1),8!==n&&46!==n||!r.isCollapsed()||r.getStart().innerHTML!==yv||Sv(t,zu(o,r.getStart())),37!==n&&39!==n||Sv(t,zu(o,r.getStart()))})},_v=function(e,t){return e.schema.getTextInlineElements().hasOwnProperty(ur(t))&&!Fu(t.dom())&&!_o.isBogus(t.dom())},Dv={},Bv=qt.filter,Ov=qt.each;cv=function(e){var t,n,r=e.selection.getRng();t=_o.matchNodeNames("pre"),r.collapsed||(n=e.selection.getSelectedBlocks(),Ov(Bv(Bv(n,t),function(e){return t(e.previousSibling)&&-1!==qt.indexOf(n,e.previousSibling)}),function(e){var t,n;t=e.previousSibling,pn(n=e).remove(),pn(t).append("<br><br>").append(n.childNodes)}))},Dv[sv="pre"]||(Dv[sv]=[]),Dv[sv].push(cv);var Pv=function(e,t){Ov(Dv[e],function(e){e(t)})},Lv=/^(src|href|style)$/,Iv=Yt.each,Mv=yc.isEq,Fv=function(e,t,n){return e.isChildOf(t,n)&&t!==n&&!e.isBlock(n)},zv=function(e,t,n){var r,o,i;return r=t[n?"startContainer":"endContainer"],o=t[n?"startOffset":"endOffset"],_o.isElement(r)&&(i=r.childNodes.length-1,!n&&o&&o--,r=r.childNodes[i<o?i:o]),_o.isText(r)&&n&&o>=r.nodeValue.length&&(r=new ro(r,e.getBody()).next()||r),_o.isText(r)&&!n&&0===o&&(r=new ro(r,e.getBody()).prev()||r),r},Uv=function(e,t,n,r){var o=e.create(n,r);return t.parentNode.insertBefore(o,t),o.appendChild(t),o},Vv=function(e,t,n,r,o){var i=rr.fromDom(t),a=rr.fromDom(e.create(r,o)),u=n?Ur(i):zr(i);return Ti(a,u),n?(Ni(i,a),Si(a,i)):(Ei(i,a),ki(a,i)),a.dom()},Hv=function(e,t,n,r){return!(t=yc.getNonWhiteSpaceSibling(t,n,r))||"BR"===t.nodeName||e.isBlock(t)},jv=function(e,n,r,o,i){var t,a,u,s,c,l,f,d,m,g,p,h,v,b,y=e.dom;if(c=y,!(Mv(l=o,(f=n).inline)||Mv(l,f.block)||(f.selector?_o.isElement(l)&&c.is(l,f.selector):void 0)||(s=o,n.links&&"A"===s.tagName)))return!1;if("all"!==n.remove)for(Iv(n.styles,function(e,t){e=yc.normalizeStyleValue(y,yc.replaceVars(e,r),t),"number"==typeof t&&(t=e,i=0),(n.remove_similar||!i||Mv(yc.getStyle(y,i,t),e))&&y.setStyle(o,t,""),u=1}),u&&""===y.getAttrib(o,"style")&&(o.removeAttribute("style"),o.removeAttribute("data-mce-style")),Iv(n.attributes,function(e,t){var n;if(e=yc.replaceVars(e,r),"number"==typeof t&&(t=e,i=0),!i||Mv(y.getAttrib(i,t),e)){if("class"===t&&(e=y.getAttrib(o,t))&&(n="",Iv(e.split(/\s+/),function(e){/mce\-\w+/.test(e)&&(n+=(n?" ":"")+e)}),n))return void y.setAttrib(o,t,n);"class"===t&&o.removeAttribute("className"),Lv.test(t)&&o.removeAttribute("data-mce-"+t),o.removeAttribute(t)}}),Iv(n.classes,function(e){e=yc.replaceVars(e,r),i&&!y.hasClass(i,e)||y.removeClass(o,e)}),a=y.getAttribs(o),t=0;t<a.length;t++){var C=a[t].nodeName;if(0!==C.indexOf("_")&&0!==C.indexOf("data-"))return!1}return"none"!==n.remove?(d=e,g=n,h=(m=o).parentNode,v=d.dom,b=d.settings.forced_root_block,g.block&&(b?h===v.getRoot()&&(g.list_block&&Mv(m,g.list_block)||Iv(Yt.grep(m.childNodes),function(e){yc.isValid(d,b,e.nodeName.toLowerCase())?p?p.appendChild(e):(p=Uv(v,e,b),v.setAttribs(p,d.settings.forced_root_block_attrs)):p=0})):v.isBlock(m)&&!v.isBlock(h)&&(Hv(v,m,!1)||Hv(v,m.firstChild,!0,1)||m.insertBefore(v.create("br"),m.firstChild),Hv(v,m,!0)||Hv(v,m.lastChild,!1,1)||m.appendChild(v.create("br")))),g.selector&&g.inline&&!Mv(g.inline,m)||v.remove(m,1),!0):void 0},qv=jv,$v=function(s,c,l,e,f){var t,n,d=s.formatter.get(c),m=d[0],a=!0,u=s.dom,r=s.selection,i=function(e){var n,t,r,o,i,a,u=(n=s,t=e,r=c,o=l,i=f,Iv(yc.getParents(n.dom,t.parentNode).reverse(),function(e){var t;a||"_start"===e.id||"_end"===e.id||(t=hv.matchNode(n,e,r,o,i))&&!1!==t.split&&(a=e)}),a);return function(e,t,n,r,o,i,a,u){var s,c,l,f,d,m,g=e.dom;if(n){for(m=n.parentNode,s=r.parentNode;s&&s!==m;s=s.parentNode){for(c=g.clone(s,!1),d=0;d<t.length;d++)if(jv(e,t[d],u,c,c)){c=0;break}c&&(l&&c.appendChild(l),f||(f=c),l=c)}!i||a.mixed&&g.isBlock(n)||(r=g.split(n,r)),l&&(o.parentNode.insertBefore(l,o),f.appendChild(o))}return r}(s,d,u,e,e,!0,m,l)},g=function(e){var t,n,r,o,i;if(_o.isElement(e)&&u.getContentEditable(e)&&(o=a,a="true"===u.getContentEditable(e),i=!0),t=Yt.grep(e.childNodes),a&&!i)for(n=0,r=d.length;n<r&&!jv(s,d[n],l,e,e);n++);if(m.deep&&t.length){for(n=0,r=t.length;n<r;n++)g(t[n]);i&&(a=o)}},p=function(e){var t,n=u.get(e?"_start":"_end"),r=n[e?"firstChild":"lastChild"];return pc(t=r)&&_o.isElement(t)&&("_start"===t.id||"_end"===t.id)&&(r=r[e?"firstChild":"lastChild"]),_o.isText(r)&&0===r.data.length&&(r=e?n.previousSibling||n.nextSibling:n.nextSibling||n.previousSibling),u.remove(n,!0),r},o=function(e){var t,n,r=e.commonAncestorContainer;if(e=Dc(s,e,d,!0),m.split){if(e=bv(e),(t=zv(s,e,!0))!==(n=zv(s,e))){if(/^(TR|TH|TD)$/.test(t.nodeName)&&t.firstChild&&(t="TR"===t.nodeName?t.firstChild.firstChild||t:t.firstChild||t),r&&/^T(HEAD|BODY|FOOT|R)$/.test(r.nodeName)&&/^(TH|TD)$/.test(n.nodeName)&&n.firstChild&&(n=n.firstChild||n),Fv(u,t,n)){var o=A.from(t.firstChild).getOr(t);return i(Vv(u,o,!0,"span",{id:"_start","data-mce-type":"bookmark"})),void p(!0)}if(Fv(u,n,t))return o=A.from(n.lastChild).getOr(n),i(Vv(u,o,!1,"span",{id:"_end","data-mce-type":"bookmark"})),void p(!1);t=Uv(u,t,"span",{id:"_start","data-mce-type":"bookmark"}),n=Uv(u,n,"span",{id:"_end","data-mce-type":"bookmark"}),i(t),i(n),t=p(!0),n=p()}else t=n=i(t);e.startContainer=t.parentNode?t.parentNode:t,e.startOffset=u.nodeIndex(t),e.endContainer=n.parentNode?n.parentNode:n,e.endOffset=u.nodeIndex(n)+1}Oc(u,e,function(e){Iv(e,function(e){g(e),_o.isElement(e)&&"underline"===s.dom.getStyle(e,"text-decoration")&&e.parentNode&&"underline"===yc.getTextDecoration(u,e.parentNode)&&jv(s,{deep:!1,exact:!0,inline:"span",styles:{textDecoration:"underline"}},null,e)})})};if(e)e.nodeType?((n=u.createRng()).setStartBefore(e),n.setEndAfter(e),o(n)):o(e);else if("false"!==u.getContentEditable(r.getNode()))r.isCollapsed()&&m.inline&&!u.select("td[data-mce-selected],th[data-mce-selected]").length?function(e,t,n,r){var o,i,a,u,s,c,l,f=e.dom,d=e.selection,m=[],g=d.getRng();for(o=g.startContainer,i=g.startOffset,3===(s=o).nodeType&&(i!==o.nodeValue.length&&(u=!0),s=s.parentNode);s;){if(hv.matchNode(e,s,t,n,r)){c=s;break}s.nextSibling&&(u=!0),m.push(s),s=s.parentNode}if(c)if(u){a=d.getBookmark(),g.collapse(!0);var p=Dc(e,g,e.formatter.get(t),!0);p=bv(p),e.formatter.remove(t,n,p),d.moveToBookmark(a)}else{l=zu(e.getBody(),c);var h=Nv(!1).dom(),v=Av(m,h);kv(e,h,l||c),Ev(e,l,!1),d.setCursorLocation(v,1),f.isEmpty(c)&&f.remove(c)}}(s,c,l,f):(t=Iu.getPersistentBookmark(s.selection,!0),o(r.getRng()),r.moveToBookmark(t),m.inline&&hv.match(s,c,l,r.getStart())&&yc.moveStart(u,r,r.getRng()),s.nodeChanged());else{e=r.getNode();for(var h=0,v=d.length;h<v&&(!d[h].ceFalseOverride||!jv(s,d[h],l,e,e));h++);}},Wv=Yt.each,Kv=function(e){return e&&1===e.nodeType&&!pc(e)&&!Fu(e)&&!_o.isBogus(e)},Xv=function(e,t){var n;for(n=e;n;n=n[t]){if(3===n.nodeType&&0!==n.nodeValue.length)return e;if(1===n.nodeType&&!pc(n))return n}return e},Yv=function(e,t,n){var r,o,i=new Jc(e);if(t&&n&&(t=Xv(t,"previousSibling"),n=Xv(n,"nextSibling"),i.compare(t,n))){for(r=t.nextSibling;r&&r!==n;)r=(o=r).nextSibling,t.appendChild(o);return e.remove(n),Yt.each(Yt.grep(n.childNodes),function(e){t.appendChild(e)}),t}return n},Gv=function(e,t,n){Wv(e.childNodes,function(e){Kv(e)&&(t(e)&&n(e),e.hasChildNodes()&&Gv(e,t,n))})},Jv=function(n,e){return d(function(e,t){return!(!t||!yc.getStyle(n,t,e))},e)},Qv=function(r,e,t){return d(function(e,t,n){r.setStyle(n,e,t),""===n.getAttribute("style")&&n.removeAttribute("style"),Zv(r,n)},e,t)},Zv=function(e,t){"SPAN"===t.nodeName&&0===e.getAttribs(t).length&&e.remove(t,!0)},eb=function(e,t){var n;1===t.nodeType&&t.parentNode&&1===t.parentNode.nodeType&&(n=yc.getTextDecoration(e,t.parentNode),e.getStyle(t,"color")&&n?e.setStyle(t,"text-decoration",n):e.getStyle(t,"text-decoration")===n&&e.setStyle(t,"text-decoration",null))},tb=function(n,e,r,o){Wv(e,function(t){Wv(n.dom.select(t.inline,o),function(e){Kv(e)&&qv(n,t,r,e,t.exact?e:null)}),function(r,e,t){if(e.clear_child_styles){var n=e.links?"*:not(a)":"*";Wv(r.select(n,t),function(n){Kv(n)&&Wv(e.styles,function(e,t){r.setStyle(n,t,"")})})}}(n.dom,t,o)})},nb=function(e,t,n,r){(t.styles.color||t.styles.textDecoration)&&(Yt.walk(r,d(eb,e),"childNodes"),eb(e,r))},rb=function(e,t,n,r){t.styles&&t.styles.backgroundColor&&Gv(r,Jv(e,"fontSize"),Qv(e,"backgroundColor",yc.replaceVars(t.styles.backgroundColor,n)))},ob=function(e,t,n,r){"sub"!==t.inline&&"sup"!==t.inline||(Gv(r,Jv(e,"fontSize"),Qv(e,"fontSize","")),e.remove(e.select("sup"===t.inline?"sub":"sup",r),!0))},ib=function(e,t,n,r){r&&!1!==t.merge_siblings&&(r=Yv(e,yc.getNonWhiteSpaceSibling(r),r),r=Yv(e,r,yc.getNonWhiteSpaceSibling(r,!0)))},ab=function(t,n,r,o,i){hv.matchNode(t,i.parentNode,r,o)&&qv(t,n,o,i)||n.merge_with_parents&&t.dom.getParent(i.parentNode,function(e){if(hv.matchNode(t,e,r,o))return qv(t,n,o,i),!0})},ub=Yt.each,sb=function(g,p,h,r){var e,t,v=g.formatter.get(p),b=v[0],o=!r&&g.selection.isCollapsed(),i=g.dom,n=g.selection,y=function(n,e){if(e=e||b,n){if(e.onformat&&e.onformat(n,e,h,r),ub(e.styles,function(e,t){i.setStyle(n,t,yc.replaceVars(e,h))}),e.styles){var t=i.getAttrib(n,"style");t&&n.setAttribute("data-mce-style",t)}ub(e.attributes,function(e,t){i.setAttrib(n,t,yc.replaceVars(e,h))}),ub(e.classes,function(e){e=yc.replaceVars(e,h),i.hasClass(n,e)||i.addClass(n,e)})}},C=function(e,t){var n=!1;return!!b.selector&&(ub(e,function(e){if(!("collapsed"in e&&e.collapsed!==o))return i.is(t,e.selector)&&!Fu(t)?(y(t,e),!(n=!0)):void 0}),n)},a=function(s,e,t,c){var l,f,d=[],m=!0;l=b.inline||b.block,f=s.create(l),y(f),Oc(s,e,function(e){var a,u=function(e){var t,n,r,o;if(o=m,t=e.nodeName.toLowerCase(),n=e.parentNode.nodeName.toLowerCase(),1===e.nodeType&&s.getContentEditable(e)&&(o=m,m="true"===s.getContentEditable(e),r=!0),yc.isEq(t,"br"))return a=0,void(b.block&&s.remove(e));if(b.wrapper&&hv.matchNode(g,e,p,h))a=0;else{if(m&&!r&&b.block&&!b.wrapper&&yc.isTextBlock(g,t)&&yc.isValid(g,n,l))return e=s.rename(e,l),y(e),d.push(e),void(a=0);if(b.selector){var i=C(v,e);if(!b.inline||i)return void(a=0)}!m||r||!yc.isValid(g,l,t)||!yc.isValid(g,n,l)||!c&&3===e.nodeType&&1===e.nodeValue.length&&65279===e.nodeValue.charCodeAt(0)||Fu(e)||b.inline&&s.isBlock(e)?(a=0,ub(Yt.grep(e.childNodes),u),r&&(m=o),a=0):(a||(a=s.clone(f,!1),e.parentNode.insertBefore(a,e),d.push(a)),a.appendChild(e))}};ub(e,u)}),!0===b.links&&ub(d,function(e){var t=function(e){"A"===e.nodeName&&y(e,b),ub(Yt.grep(e.childNodes),t)};t(e)}),ub(d,function(e){var t,n,r,o,i,a=function(e){var n=!1;return ub(e.childNodes,function(e){if((t=e)&&1===t.nodeType&&!pc(t)&&!Fu(t)&&!_o.isBogus(t))return n=e,!1;var t}),n};n=0,ub(e.childNodes,function(e){yc.isWhiteSpaceNode(e)||pc(e)||n++}),t=n,!(1<d.length)&&s.isBlock(e)||0!==t?(b.inline||b.wrapper)&&(b.exact||1!==t||((o=a(r=e))&&!pc(o)&&hv.matchName(s,o,b)&&(i=s.clone(o,!1),y(i),s.replace(i,r,!0),s.remove(o,1)),e=i||r),tb(g,v,h,e),ab(g,b,p,h,e),rb(s,b,h,e),ob(s,b,h,e),ib(s,b,h,e)):s.remove(e,1)})};if("false"!==i.getContentEditable(n.getNode())){if(b){if(r)r.nodeType?C(v,r)||((t=i.createRng()).setStartBefore(r),t.setEndAfter(r),a(i,Dc(g,t,v),0,!0)):a(i,r,0,!0);else if(o&&b.inline&&!i.select("td[data-mce-selected],th[data-mce-selected]").length)!function(e,t,n){var r,o,i,a,u,s,c=e.selection;a=(r=c.getRng(!0)).startOffset,s=r.startContainer.nodeValue,(o=zu(e.getBody(),c.getStart()))&&(i=wv(o));var l,f,d=/[^\s\u00a0\u00ad\u200b\ufeff]/;s&&0<a&&a<s.length&&d.test(s.charAt(a))&&d.test(s.charAt(a-1))?(u=c.getBookmark(),r.collapse(!0),r=Dc(e,r,e.formatter.get(t)),r=bv(r),e.formatter.apply(t,n,r),c.moveToBookmark(u)):(o&&i.nodeValue===yv||(l=e.getDoc(),f=Nv(!0).dom(),i=(o=l.importNode(f,!0)).firstChild,r.insertNode(o),a=1),e.formatter.apply(t,n,o),c.setCursorLocation(i,a))}(g,p,h);else{var u=g.selection.getNode();g.settings.forced_root_block||!v[0].defaultBlock||i.getParent(u,i.isBlock)||sb(g,v[0].defaultBlock),g.selection.setRng(il(g.selection.getRng())),e=Iu.getPersistentBookmark(g.selection,!0),a(i,Dc(g,n.getRng(),v)),b.styles&&nb(i,b,h,u),n.moveToBookmark(e),yc.moveStart(i,n,n.getRng()),g.nodeChanged()}Pv(p,g)}}else{r=n.getNode();for(var s=0,c=v.length;s<c;s++)if(v[s].ceFalseOverride&&i.is(r,v[s].selector))return void y(r,v[s])}},cb={applyFormat:sb},lb=Yt.each,fb=function(e,t,n,r,o){var i,a,u,s,c,l,f,d;null===t.get()&&(a=e,u={},(i=t).set({}),a.on("NodeChange",function(n){var r=yc.getParents(a.dom,n.element),o={};r=Yt.grep(r,function(e){return 1===e.nodeType&&!e.getAttribute("data-mce-bogus")}),lb(i.get(),function(e,n){lb(r,function(t){return a.formatter.matchNode(t,n,{},e.similar)?(u[n]||(lb(e,function(e){e(!0,{node:t,format:n,parents:r})}),u[n]=e),o[n]=e,!1):!hv.matchesUnInheritedFormatSelector(a,t,n)&&void 0})}),lb(u,function(e,t){o[t]||(delete u[t],lb(e,function(e){e(!1,{node:n.element,format:t,parents:r})}))})})),c=n,l=r,f=o,d=(s=t).get(),lb(c.split(","),function(e){d[e]||(d[e]=[],d[e].similar=f),d[e].push(l)}),s.set(d)},db={get:function(r){var t={valigntop:[{selector:"td,th",styles:{verticalAlign:"top"}}],valignmiddle:[{selector:"td,th",styles:{verticalAlign:"middle"}}],valignbottom:[{selector:"td,th",styles:{verticalAlign:"bottom"}}],alignleft:[{selector:"figure.image",collapsed:!1,classes:"align-left",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"left"},inherit:!1,preview:!1,defaultBlock:"div"},{selector:"img,table",collapsed:!1,styles:{"float":"left"},preview:"font-family font-size"}],aligncenter:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"center"},inherit:!1,preview:"font-family font-size",defaultBlock:"div"},{selector:"figure.image",collapsed:!1,classes:"align-center",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"img",collapsed:!1,styles:{display:"block",marginLeft:"auto",marginRight:"auto"},preview:!1},{selector:"table",collapsed:!1,styles:{marginLeft:"auto",marginRight:"auto"},preview:"font-family font-size"}],alignright:[{selector:"figure.image",collapsed:!1,classes:"align-right",ceFalseOverride:!0,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"right"},inherit:!1,preview:"font-family font-size",defaultBlock:"div"},{selector:"img,table",collapsed:!1,styles:{"float":"right"},preview:"font-family font-size"}],alignjustify:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"justify"},inherit:!1,defaultBlock:"div",preview:"font-family font-size"}],bold:[{inline:"strong",remove:"all"},{inline:"span",styles:{fontWeight:"bold"}},{inline:"b",remove:"all"}],italic:[{inline:"em",remove:"all"},{inline:"span",styles:{fontStyle:"italic"}},{inline:"i",remove:"all"}],underline:[{inline:"span",styles:{textDecoration:"underline"},exact:!0},{inline:"u",remove:"all"}],strikethrough:[{inline:"span",styles:{textDecoration:"line-through"},exact:!0},{inline:"strike",remove:"all"}],forecolor:{inline:"span",styles:{color:"%value"},links:!0,remove_similar:!0,clear_child_styles:!0},hilitecolor:{inline:"span",styles:{backgroundColor:"%value"},links:!0,remove_similar:!0,clear_child_styles:!0},fontname:{inline:"span",toggle:!1,styles:{fontFamily:"%value"},clear_child_styles:!0},fontsize:{inline:"span",toggle:!1,styles:{fontSize:"%value"},clear_child_styles:!0},fontsize_class:{inline:"span",attributes:{"class":"%value"}},blockquote:{block:"blockquote",wrapper:1,remove:"all"},subscript:{inline:"sub"},superscript:{inline:"sup"},code:{inline:"code"},link:{inline:"a",selector:"a",remove:"all",split:!0,deep:!0,onmatch:function(){return!0},onformat:function(n,e,t){Yt.each(t,function(e,t){r.setAttrib(n,t,e)})}},removeformat:[{selector:"b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins",remove:"all",split:!0,expand:!1,block_expand:!0,deep:!0},{selector:"span",attributes:["style","class"],remove:"empty",split:!0,expand:!1,deep:!0},{selector:"*",attributes:["style","class"],split:!1,expand:!1,deep:!0}]};return Yt.each("p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(/\s/),function(e){t[e]={block:e,remove:"all"}}),t}},mb=Yt.each,gb=gi.DOM,pb=function(e,t){var n,o,r,m=t&&t.schema||ti({}),g=function(e){var t,n,r;return o="string"==typeof e?{name:e,classes:[],attrs:{}}:e,t=gb.create(o.name),n=t,(r=o).classes.length&&gb.addClass(n,r.classes.join(" ")),gb.setAttribs(n,r.attrs),t},p=function(n,e,t){var r,o,i,a,u,s,c,l,f=0<e.length&&e[0],d=f&&f.name;if(u=d,s="string"!=typeof(a=n)?a.nodeName.toLowerCase():a,c=m.getElementRule(s),i=!(!(l=c&&c.parentsRequired)||!l.length)&&(u&&-1!==Yt.inArray(l,u)?u:l[0]))d===i?(o=e[0],e=e.slice(1)):o=i;else if(f)o=e[0],e=e.slice(1);else if(!t)return n;return o&&(r=g(o)).appendChild(n),t&&(r||(r=gb.create("div")).appendChild(n),Yt.each(t,function(e){var t=g(e);r.insertBefore(t,n)})),p(r,e,o&&o.siblings)};return e&&e.length?(o=e[0],n=g(o),(r=gb.create("div")).appendChild(p(n,e.slice(1),o.siblings)),r):""},hb=function(e){var t,a={classes:[],attrs:{}};return"*"!==(e=a.selector=Yt.trim(e))&&(t=e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g,function(e,t,n,r,o){switch(t){case"#":a.attrs.id=n;break;case".":a.classes.push(n);break;case":":-1!==Yt.inArray("checked disabled enabled read-only required".split(" "),n)&&(a.attrs[n]=n)}if("["===r){var i=o.match(/([\w\-]+)(?:\=\"([^\"]+))?/);i&&(a.attrs[i[1]]=i[2])}return""})),a.name=t||"div",a},vb=function(e){return e&&"string"==typeof e?(e=(e=e.split(/\s*,\s*/)[0]).replace(/\s*(~\+|~|\+|>)\s*/g,"$1"),Yt.map(e.split(/(?:>|\s+(?![^\[\]]+\]))/),function(e){var t=Yt.map(e.split(/(?:~\+|~|\+)/),hb),n=t.pop();return t.length&&(n.siblings=t),n}).reverse()):[]},bb=function(n,e){var t,r,o,i,a,u,s="";if(!1===(u=n.settings.preview_styles))return"";"string"!=typeof u&&(u="font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow");var c=function(e){return e.replace(/%(\w+)/g,"")};if("string"==typeof e){if(!(e=n.formatter.get(e)))return;e=e[0]}return"preview"in e&&!1===(u=e.preview)?"":(t=e.block||e.inline||"span",(i=vb(e.selector)).length?(i[0].name||(i[0].name=t),t=e.selector,r=pb(i,n)):r=pb([t],n),o=gb.select(t,r)[0]||r.firstChild,mb(e.styles,function(e,t){(e=c(e))&&gb.setStyle(o,t,e)}),mb(e.attributes,function(e,t){(e=c(e))&&gb.setAttrib(o,t,e)}),mb(e.classes,function(e){e=c(e),gb.hasClass(o,e)||gb.addClass(o,e)}),n.fire("PreviewFormats"),gb.setStyles(r,{position:"absolute",left:-65535}),n.getBody().appendChild(r),a=gb.getStyle(n.getBody(),"fontSize",!0),a=/px$/.test(a)?parseInt(a,10):0,mb(u.split(" "),function(e){var t=gb.getStyle(o,e,!0);if(!("background-color"===e&&/transparent|rgba\s*\([^)]+,\s*0\)/.test(t)&&(t=gb.getStyle(n.getBody(),e,!0),"#ffffff"===gb.toHex(t).toLowerCase())||"color"===e&&"#000000"===gb.toHex(t).toLowerCase())){if("font-size"===e&&/em|%$/.test(t)){if(0===a)return;t=parseFloat(t)/(/%$/.test(t)?100:1)*a+"px"}"border"===e&&t&&(s+="padding:0 2px;"),s+=e+":"+t+";"}}),n.fire("AfterPreviewFormats"),gb.remove(r),s)},yb=function(e,t,n,r,o){var i=t.get(n);!hv.match(e,n,r,o)||"toggle"in i[0]&&!i[0].toggle?cb.applyFormat(e,n,r,o):$v(e,n,r,o)},Cb=function(e){e.addShortcut("meta+b","","Bold"),e.addShortcut("meta+i","","Italic"),e.addShortcut("meta+u","","Underline");for(var t=1;t<=6;t++)e.addShortcut("access+"+t,"",["FormatBlock",!1,"h"+t]);e.addShortcut("access+7","",["FormatBlock",!1,"p"]),e.addShortcut("access+8","",["FormatBlock",!1,"div"]),e.addShortcut("access+9","",["FormatBlock",!1,"address"])};function xb(e){var t,n,r,o=(t=e,n={},(r=function(e,t){e&&("string"!=typeof e?Yt.each(e,function(e,t){r(t,e)}):(t=t.length?t:[t],Yt.each(t,function(e){"undefined"==typeof e.deep&&(e.deep=!e.selector),"undefined"==typeof e.split&&(e.split=!e.selector||e.inline),"undefined"==typeof e.remove&&e.selector&&!e.inline&&(e.remove="none"),e.selector&&e.inline&&(e.mixed=!0,e.block_expand=!0),"string"==typeof e.classes&&(e.classes=e.classes.split(/\s+/))}),n[e]=t))})(db.get(t.dom)),r(t.settings.formats),{get:function(e){return e?n[e]:n},register:r,unregister:function(e){return e&&n[e]&&delete n[e],n}}),i=Bi(null);return Cb(e),Rv(e),{get:o.get,register:o.register,unregister:o.unregister,apply:d(cb.applyFormat,e),remove:d($v,e),toggle:d(yb,e,o),match:d(hv.match,e),matchAll:d(hv.matchAll,e),matchNode:d(hv.matchNode,e),canApply:d(hv.canApply,e),formatChanged:d(fb,e,i),getCssText:d(bb,e)}}var wb,Nb=Object.prototype.hasOwnProperty,Eb=(wb=function(e,t){return t},function(){for(var e=new Array(arguments.length),t=0;t<e.length;t++)e[t]=arguments[t];if(0===e.length)throw new Error("Can't merge zero objects");for(var n={},r=0;r<e.length;r++){var o=e[r];for(var i in o)Nb.call(o,i)&&(n[i]=wb(n[i],o[i]))}return n}),Sb={register:function(t,s,c){t.addAttributeFilter("data-mce-tabindex",function(e,t){for(var n,r=e.length;r--;)(n=e[r]).attr("tabindex",n.attributes.map["data-mce-tabindex"]),n.attr(t,null)}),t.addAttributeFilter("src,href,style",function(e,t){for(var n,r,o=e.length,i="data-mce-"+t,a=s.url_converter,u=s.url_converter_scope;o--;)(r=(n=e[o]).attributes.map[i])!==undefined?(n.attr(t,0<r.length?r:null),n.attr(i,null)):(r=n.attributes.map[t],"style"===t?r=c.serializeStyle(c.parseStyle(r),n.name):a&&(r=a.call(u,r,t,n.name)),n.attr(t,0<r.length?r:null))}),t.addAttributeFilter("class",function(e){for(var t,n,r=e.length;r--;)(n=(t=e[r]).attr("class"))&&(n=t.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g,""),t.attr("class",0<n.length?n:null))}),t.addAttributeFilter("data-mce-type",function(e,t,n){for(var r,o=e.length;o--;)"bookmark"!==(r=e[o]).attributes.map["data-mce-type"]||n.cleanup||r.remove()}),t.addNodeFilter("noscript",function(e){for(var t,n=e.length;n--;)(t=e[n].firstChild)&&(t.value=qo.decode(t.value))}),t.addNodeFilter("script,style",function(e,t){for(var n,r,o,i=e.length,a=function(e){return e.replace(/(<!--\[CDATA\[|\]\]-->)/g,"\n").replace(/^[\r\n]*|[\r\n]*$/g,"").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi,"").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g,"")};i--;)r=(n=e[i]).firstChild?n.firstChild.value:"","script"===t?((o=n.attr("type"))&&n.attr("type","mce-no/type"===o?null:o.replace(/^mce\-/,"")),"xhtml"===s.element_format&&0<r.length&&(n.firstChild.value="// <![CDATA[\n"+a(r)+"\n// ]]>")):"xhtml"===s.element_format&&0<r.length&&(n.firstChild.value="\x3c!--\n"+a(r)+"\n--\x3e")}),t.addNodeFilter("#comment",function(e){for(var t,n=e.length;n--;)0===(t=e[n]).value.indexOf("[CDATA[")?(t.name="#cdata",t.type=4,t.value=t.value.replace(/^\[CDATA\[|\]\]$/g,"")):0===t.value.indexOf("mce:protected ")&&(t.name="#text",t.type=3,t.raw=!0,t.value=unescape(t.value).substr(14))}),t.addNodeFilter("xml:namespace,input",function(e,t){for(var n,r=e.length;r--;)7===(n=e[r]).type?n.remove():1===n.type&&("input"!==t||"type"in n.attributes.map||n.attr("type","text"))}),t.addAttributeFilter("data-mce-type",function(e){F(e,function(e){"format-caret"===e.attr("data-mce-type")&&(e.isEmpty(t.schema.getNonEmptyElements())?e.remove():e.unwrap())})}),t.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize",function(e,t){for(var n=e.length;n--;)e[n].attr(t,null)})},trimTrailingBr:function(e){var t,n,r=function(e){return e&&"br"===e.name};r(t=e.lastChild)&&r(n=t.prev)&&(t.remove(),n.remove())}},kb={process:function(e,t,n){return f=n,(l=e)&&l.hasEventListeners("PreProcess")&&!f.no_events?(o=t,i=n,c=(r=e).dom,o=o.cloneNode(!0),(a=document.implementation).createHTMLDocument&&(u=a.createHTMLDocument(""),Yt.each("BODY"===o.nodeName?o.childNodes:[o],function(e){u.body.appendChild(u.importNode(e,!0))}),o="BODY"!==o.nodeName?u.body.firstChild:u.body,s=c.doc,c.doc=u),_g(r,Eb(i,{node:o})),s&&(c.doc=s),o):t;var r,o,i,a,u,s,c,l,f}},Tb=function(e,a,u){e.addNodeFilter("font",function(e){F(e,function(e){var t,n=a.parse(e.attr("style")),r=e.attr("color"),o=e.attr("face"),i=e.attr("size");r&&(n.color=r),o&&(n["font-family"]=o),i&&(n["font-size"]=u[parseInt(e.attr("size"),10)-1]),e.name="span",e.attr("style",a.serialize(n)),t=e,F(["color","face","size"],function(e){t.attr(e,null)})})})},Ab=function(e,t){var n,r=ri();t.convert_fonts_to_spans&&Tb(e,r,Yt.explode(t.font_size_legacy_values)),n=r,e.addNodeFilter("strike",function(e){F(e,function(e){var t=n.parse(e.attr("style"));t["text-decoration"]="line-through",e.name="span",e.attr("style",n.serialize(t))})})},Rb={register:function(e,t){t.inline_styles&&Ab(e,t)}},_b=/^[ \t\r\n]*$/,Db={"#text":3,"#comment":8,"#cdata":4,"#pi":7,"#doctype":10,"#document-fragment":11},Bb=function(e,t,n){var r,o,i=n?"lastChild":"firstChild",a=n?"prev":"next";if(e[i])return e[i];if(e!==t){if(r=e[a])return r;for(o=e.parent;o&&o!==t;o=o.parent)if(r=o[a])return r}},Ob=function(){function a(e,t){this.name=e,1===(this.type=t)&&(this.attributes=[],this.attributes.map={})}return a.create=function(e,t){var n,r;if(n=new a(e,Db[e]||1),t)for(r in t)n.attr(r,t[r]);return n},a.prototype.replace=function(e){return e.parent&&e.remove(),this.insert(e,this),this.remove(),this},a.prototype.attr=function(e,t){var n,r;if("string"!=typeof e){for(r in e)this.attr(r,e[r]);return this}if(n=this.attributes){if(t!==undefined){if(null===t){if(e in n.map)for(delete n.map[e],r=n.length;r--;)if(n[r].name===e)return n=n.splice(r,1),this;return this}if(e in n.map){for(r=n.length;r--;)if(n[r].name===e){n[r].value=t;break}}else n.push({name:e,value:t});return n.map[e]=t,this}return n.map[e]}},a.prototype.clone=function(){var e,t,n,r,o,i=new a(this.name,this.type);if(n=this.attributes){for((o=[]).map={},e=0,t=n.length;e<t;e++)"id"!==(r=n[e]).name&&(o[o.length]={name:r.name,value:r.value},o.map[r.name]=r.value);i.attributes=o}return i.value=this.value,i.shortEnded=this.shortEnded,i},a.prototype.wrap=function(e){return this.parent.insert(e,this),e.append(this),this},a.prototype.unwrap=function(){var e,t;for(e=this.firstChild;e;)t=e.next,this.insert(e,this,!0),e=t;this.remove()},a.prototype.remove=function(){var e=this.parent,t=this.next,n=this.prev;return e&&(e.firstChild===this?(e.firstChild=t)&&(t.prev=null):n.next=t,e.lastChild===this?(e.lastChild=n)&&(n.next=null):t.prev=n,this.parent=this.next=this.prev=null),this},a.prototype.append=function(e){var t;return e.parent&&e.remove(),(t=this.lastChild)?((t.next=e).prev=t,this.lastChild=e):this.lastChild=this.firstChild=e,e.parent=this,e},a.prototype.insert=function(e,t,n){var r;return e.parent&&e.remove(),r=t.parent||this,n?(t===r.firstChild?r.firstChild=e:t.prev.next=e,e.prev=t.prev,(e.next=t).prev=e):(t===r.lastChild?r.lastChild=e:t.next.prev=e,e.next=t.next,(e.prev=t).next=e),e.parent=r,e},a.prototype.getAll=function(e){var t,n=[];for(t=this.firstChild;t;t=Bb(t,this))t.name===e&&n.push(t);return n},a.prototype.empty=function(){var e,t,n;if(this.firstChild){for(e=[],n=this.firstChild;n;n=Bb(n,this))e.push(n);for(t=e.length;t--;)(n=e[t]).parent=n.firstChild=n.lastChild=n.next=n.prev=null}return this.firstChild=this.lastChild=null,this},a.prototype.isEmpty=function(e,t,n){var r,o,i=this.firstChild;if(t=t||{},i)do{if(1===i.type){if(i.attributes.map["data-mce-bogus"])continue;if(e[i.name])return!1;for(r=i.attributes.length;r--;)if("name"===(o=i.attributes[r].name)||0===o.indexOf("data-mce-bookmark"))return!1}if(8===i.type)return!1;if(3===i.type&&!_b.test(i.value))return!1;if(3===i.type&&i.parent&&t[i.parent.name]&&_b.test(i.value))return!1;if(n&&n(i))return!1}while(i=Bb(i,this));return!0},a.prototype.walk=function(e){return Bb(this,null,e)},a}(),Pb=function(e,t,n,r){(e.padd_empty_with_br||t.insert)&&n[r.name]?r.empty().append(new Ob("br",1)).shortEnded=!0:r.empty().append(new Ob("#text",3)).value="\xa0"},Lb=function(e){return Ib(e,"#text")&&"\xa0"===e.firstChild.value},Ib=function(e,t){return e&&e.firstChild&&e.firstChild===e.lastChild&&e.firstChild.name===t},Mb=function(r,e,t,n){return n.isEmpty(e,t,function(e){return t=e,(n=r.getElementRule(t.name))&&n.paddEmpty;var t,n})},Fb=function(e,t){return e&&(t[e.name]||"br"===e.name)},zb=function(e,p){var h=e.schema;p.remove_trailing_brs&&e.addNodeFilter("br",function(e,t,n){var r,o,i,a,u,s,c,l,f=e.length,d=Yt.extend({},h.getBlockElements()),m=h.getNonEmptyElements(),g=h.getNonEmptyElements();for(d.body=1,r=0;r<f;r++)if(i=(o=e[r]).parent,d[o.parent.name]&&o===i.lastChild){for(u=o.prev;u;){if("span"!==(s=u.name)||"bookmark"!==u.attr("data-mce-type")){if("br"!==s)break;if("br"===s){o=null;break}}u=u.prev}o&&(o.remove(),Mb(h,m,g,i)&&(c=h.getElementRule(i.name))&&(c.removeEmpty?i.remove():c.paddEmpty&&Pb(p,n,d,i)))}else{for(a=o;i&&i.firstChild===a&&i.lastChild===a&&!d[(a=i).name];)i=i.parent;a===i&&!0!==p.padd_empty_with_br&&((l=new Ob("#text",3)).value="\xa0",o.replace(l))}}),e.addAttributeFilter("href",function(e){var t,n,r,o=e.length;if(!p.allow_unsafe_link_target)for(;o--;)"a"===(t=e[o]).name&&"_blank"===t.attr("target")&&t.attr("rel",(n=t.attr("rel"),r=n?Yt.trim(n):"",/\b(noopener)\b/g.test(r)?r:r.split(" ").filter(function(e){return 0<e.length}).concat(["noopener"]).sort().join(" ")))}),p.allow_html_in_named_anchor||e.addAttributeFilter("id,name",function(e){for(var t,n,r,o,i=e.length;i--;)if("a"===(o=e[i]).name&&o.firstChild&&!o.attr("href"))for(r=o.parent,t=o.lastChild;n=t.prev,r.insert(t,o),t=n;);}),p.fix_list_elements&&e.addNodeFilter("ul,ol",function(e){for(var t,n,r=e.length;r--;)if("ul"===(n=(t=e[r]).parent).name||"ol"===n.name)if(t.prev&&"li"===t.prev.name)t.prev.append(t);else{var o=new Ob("li",1);o.attr("style","list-style-type: none"),t.wrap(o)}}),p.validate&&h.getValidClasses()&&e.addAttributeFilter("class",function(e){for(var t,n,r,o,i,a,u,s=e.length,c=h.getValidClasses();s--;){for(n=(t=e[s]).attr("class").split(" "),i="",r=0;r<n.length;r++)o=n[r],u=!1,(a=c["*"])&&a[o]&&(u=!0),a=c[t.name],!u&&a&&a[o]&&(u=!0),u&&(i&&(i+=" "),i+=o);i.length||(i=null),t.attr("class",i)}})},Ub=Yt.makeMap,Vb=Yt.each,Hb=Yt.explode,jb=Yt.extend;function qb(k,T){void 0===T&&(T=ti());var A={},R=[],_={},D={};(k=k||{}).validate=!("validate"in k)||k.validate,k.root_name=k.root_name||"body";var B=function(e){var t,n,r;(n=e.name)in A&&((r=_[n])?r.push(e):_[n]=[e]),t=R.length;for(;t--;)(n=R[t].name)in e.attributes.map&&((r=D[n])?r.push(e):D[n]=[e]);return e},e={schema:T,addAttributeFilter:function(e,n){Vb(Hb(e),function(e){var t;for(t=0;t<R.length;t++)if(R[t].name===e)return void R[t].callbacks.push(n);R.push({name:e,callbacks:[n]})})},getAttributeFilters:function(){return[].concat(R)},addNodeFilter:function(e,n){Vb(Hb(e),function(e){var t=A[e];t||(A[e]=t=[]),t.push(n)})},getNodeFilters:function(){var e=[];for(var t in A)A.hasOwnProperty(t)&&e.push({name:t,callbacks:A[t]});return e},filterNode:B,parse:function(e,a){var t,n,r,o,i,u,s,c,l,f,d,m=[];a=a||{},_={},D={},l=jb(Ub("script,style,head,html,body,title,meta,param"),T.getBlockElements());var g=T.getNonEmptyElements(),p=T.children,h=k.validate,v="forced_root_block"in a?a.forced_root_block:k.forced_root_block,b=T.getWhiteSpaceElements(),y=/^[ \t\r\n]+/,C=/[ \t\r\n]+$/,x=/[ \t\r\n]+/g,w=/^[ \t\r\n]+$/;f=b.hasOwnProperty(a.context)||b.hasOwnProperty(k.root_name);var N=function(e,t){var n,r=new Ob(e,t);return e in A&&((n=_[e])?n.push(r):_[e]=[r]),r},E=function(e){var t,n,r,o,i=T.getBlockElements();for(t=e.prev;t&&3===t.type;){if(0<(r=t.value.replace(C,"")).length)return void(t.value=r);if(n=t.next){if(3===n.type&&n.value.length){t=t.prev;continue}if(!i[n.name]&&"script"!==n.name&&"style"!==n.name){t=t.prev;continue}}o=t.prev,t.remove(),t=o}};t=Hh({validate:h,allow_script_urls:k.allow_script_urls,allow_conditional_comments:k.allow_conditional_comments,self_closing_elements:function(e){var t,n={};for(t in e)"li"!==t&&"p"!==t&&(n[t]=e[t]);return n}(T.getSelfClosingElements()),cdata:function(e){d.append(N("#cdata",4)).value=e},text:function(e,t){var n;f||(e=e.replace(x," "),Fb(d.lastChild,l)&&(e=e.replace(y,""))),0!==e.length&&((n=N("#text",3)).raw=!!t,d.append(n).value=e)},comment:function(e){d.append(N("#comment",8)).value=e},pi:function(e,t){d.append(N(e,7)).value=t,E(d)},doctype:function(e){d.append(N("#doctype",10)).value=e,E(d)},start:function(e,t,n){var r,o,i,a,u;if(i=h?T.getElementRule(e):{}){for((r=N(i.outputName||e,1)).attributes=t,r.shortEnded=n,d.append(r),(u=p[d.name])&&p[r.name]&&!u[r.name]&&m.push(r),o=R.length;o--;)(a=R[o].name)in t.map&&((s=D[a])?s.push(r):D[a]=[r]);l[e]&&E(r),n||(d=r),!f&&b[e]&&(f=!0)}},end:function(e){var t,n,r,o,i;if(n=h?T.getElementRule(e):{}){if(l[e]&&!f){if((t=d.firstChild)&&3===t.type)if(0<(r=t.value.replace(y,"")).length)t.value=r,t=t.next;else for(o=t.next,t.remove(),t=o;t&&3===t.type;)r=t.value,o=t.next,(0===r.length||w.test(r))&&(t.remove(),t=o),t=o;if((t=d.lastChild)&&3===t.type)if(0<(r=t.value.replace(C,"")).length)t.value=r,t=t.prev;else for(o=t.prev,t.remove(),t=o;t&&3===t.type;)r=t.value,o=t.prev,(0===r.length||w.test(r))&&(t.remove(),t=o),t=o}if(f&&b[e]&&(f=!1),n.removeEmpty&&Mb(T,g,b,d)&&!d.attributes.map.name&&!d.attr("id"))return i=d.parent,l[d.name]?d.empty().remove():d.unwrap(),void(d=i);n.paddEmpty&&(Lb(d)||Mb(T,g,b,d))&&Pb(k,a,l,d),d=d.parent}}},T);var S=d=new Ob(a.context||k.root_name,11);if(t.parse(e),h&&m.length&&(a.context?a.invalid=!0:function(e){var t,n,r,o,i,a,u,s,c,l,f,d,m,g,p,h;for(d=Ub("tr,td,th,tbody,thead,tfoot,table"),l=T.getNonEmptyElements(),f=T.getWhiteSpaceElements(),m=T.getTextBlockElements(),g=T.getSpecialElements(),t=0;t<e.length;t++)if((n=e[t]).parent&&!n.fixed)if(m[n.name]&&"li"===n.parent.name){for(p=n.next;p&&m[p.name];)p.name="li",p.fixed=!0,n.parent.insert(p,n.parent),p=p.next;n.unwrap(n)}else{for(o=[n],r=n.parent;r&&!T.isValidChild(r.name,n.name)&&!d[r.name];r=r.parent)o.push(r);if(r&&1<o.length){for(o.reverse(),i=a=B(o[0].clone()),c=0;c<o.length-1;c++){for(T.isValidChild(a.name,o[c].name)?(u=B(o[c].clone()),a.append(u)):u=a,s=o[c].firstChild;s&&s!==o[c+1];)h=s.next,u.append(s),s=h;a=u}Mb(T,l,f,i)?r.insert(n,o[0],!0):(r.insert(i,o[0],!0),r.insert(n,i)),r=o[0],(Mb(T,l,f,r)||Ib(r,"br"))&&r.empty().remove()}else if(n.parent){if("li"===n.name){if((p=n.prev)&&("ul"===p.name||"ul"===p.name)){p.append(n);continue}if((p=n.next)&&("ul"===p.name||"ul"===p.name)){p.insert(n,p.firstChild,!0);continue}n.wrap(B(new Ob("ul",1)));continue}T.isValidChild(n.parent.name,"div")&&T.isValidChild("div",n.name)?n.wrap(B(new Ob("div",1))):g[n.name]?n.empty().remove():n.unwrap()}}}(m)),v&&("body"===S.name||a.isRootContent)&&function(){var e,t,n=S.firstChild,r=function(e){e&&((n=e.firstChild)&&3===n.type&&(n.value=n.value.replace(y,"")),(n=e.lastChild)&&3===n.type&&(n.value=n.value.replace(C,"")))};if(T.isValidChild(S.name,v.toLowerCase())){for(;n;)e=n.next,3===n.type||1===n.type&&"p"!==n.name&&!l[n.name]&&!n.attr("data-mce-type")?(t||((t=N(v,1)).attr(k.forced_root_block_attrs),S.insert(t,n)),t.append(n)):(r(t),t=null),n=e;r(t)}}(),!a.invalid){for(c in _){for(s=A[c],i=(n=_[c]).length;i--;)n[i].parent||n.splice(i,1);for(r=0,o=s.length;r<o;r++)s[r](n,c,a)}for(r=0,o=R.length;r<o;r++)if((s=R[r]).name in D){for(i=(n=D[s.name]).length;i--;)n[i].parent||n.splice(i,1);for(i=0,u=s.callbacks.length;i<u;i++)s.callbacks[i](n,s.name,a)}}return S}};return zb(e,k),Rb.register(e,k),e}var $b=function(e,t,n){-1===Yt.inArray(t,n)&&(e.addAttributeFilter(n,function(e,t){for(var n=e.length;n--;)e[n].attr(t,null)}),t.push(n))},Wb=function(e,t,n){var r=la(n.getInner?t.innerHTML:e.getOuterHTML(t));return n.selection||yo(rr.fromDom(t))?r:Yt.trim(r)},Kb=function(e,t,n){var r=n.selection?Eb({forced_root_block:!1},n):n,o=e.parse(t,r);return Sb.trimTrailingBr(o),o},Xb=function(e,t,n,r,o){var i,a,u,s,c=(i=r,rl(t,n).serialize(i));return a=e,s=c,!(u=o).no_events&&a?Dg(a,Eb(u,{content:s})).content:s};function Yb(e,t){var a,u,s,c,l,n,r=(a=e,n=["data-mce-selected"],s=(u=t)&&u.dom?u.dom:gi.DOM,c=u&&u.schema?u.schema:ti(a),a.entity_encoding=a.entity_encoding||"named",a.remove_trailing_brs=!("remove_trailing_brs"in a)||a.remove_trailing_brs,l=qb(a,c),Sb.register(l,a,s),{schema:c,addNodeFilter:l.addNodeFilter,addAttributeFilter:l.addAttributeFilter,serialize:function(e,t){var n=Eb({format:"html"},t||{}),r=kb.process(u,e,n),o=Wb(s,r,n),i=Kb(l,o,n);return"tree"===n.format?i:Xb(u,a,c,i,n)},addRules:function(e){c.addValidElements(e)},setRules:function(e){c.setValidElements(e)},addTempAttr:d($b,l,n),getTempAttrs:function(){return n}});return{schema:r.schema,addNodeFilter:r.addNodeFilter,addAttributeFilter:r.addAttributeFilter,serialize:r.serialize,addRules:r.addRules,setRules:r.setRules,addTempAttr:r.addTempAttr,getTempAttrs:r.getTempAttrs}}function Gb(e){return{getBookmark:d(mc,e),moveToBookmark:d(gc,e)}}(Gb||(Gb={})).isBookmarkNode=pc;var Jb,Qb,Zb=Gb,ey=_o.isContentEditableFalse,ty=_o.isContentEditableTrue,ny=function(r,a){var u,s,c,l,f,d,m,g,p,h,v,b,i,y,C,x,w,N=a.dom,E=Yt.each,S=a.getDoc(),k=document,T=Math.abs,A=Math.round,R=a.getBody();l={nw:[0,0,-1,-1],ne:[1,0,1,-1],se:[1,1,1,1],sw:[0,1,-1,1]};var e=".mce-content-body";a.contentStyles.push(e+" div.mce-resizehandle {position: absolute;border: 1px solid black;box-sizing: content-box;background: #FFF;width: 7px;height: 7px;z-index: 10000}"+e+" .mce-resizehandle:hover {background: #000}"+e+" img[data-mce-selected],"+e+" hr[data-mce-selected] {outline: 1px solid black;resize: none}"+e+" .mce-clonedresizable {position: absolute;"+(de.gecko?"":"outline: 1px dashed black;")+"opacity: .5;filter: alpha(opacity=50);z-index: 10000}"+e+" .mce-resize-helper {background: #555;background: rgba(0,0,0,0.75);border-radius: 3px;border: 1px;color: white;display: none;font-family: sans-serif;font-size: 12px;white-space: nowrap;line-height: 14px;margin: 5px 10px;padding: 5px;position: absolute;z-index: 10001}");var _=function(e){return e&&("IMG"===e.nodeName||a.dom.is(e,"figure.image"))},n=function(e){var t,n,r=e.target;t=e,n=a.selection.getRng(),!_(t.target)||Sh(t.clientX,t.clientY,n)||e.isDefaultPrevented()||(e.preventDefault(),a.selection.select(r))},D=function(e){return a.dom.is(e,"figure.image")?e.querySelector("img"):e},B=function(e){var t=a.settings.object_resizing;return!1!==t&&!de.iOS&&("string"!=typeof t&&(t="table,img,figure.image,div"),"false"!==e.getAttribute("data-mce-resize")&&e!==a.getBody()&&Dr(rr.fromDom(e),t))},O=function(e){var t,n,r,o;t=e.screenX-d,n=e.screenY-m,y=t*f[2]+h,C=n*f[3]+v,y=y<5?5:y,C=C<5?5:C,(_(u)&&!1!==a.settings.resize_img_proportional?!Oh.modifierPressed(e):Oh.modifierPressed(e)||_(u)&&f[2]*f[3]!=0)&&(T(t)>T(n)?(C=A(y*b),y=A(C/b)):(y=A(C/b),C=A(y*b))),N.setStyles(D(s),{width:y,height:C}),r=0<(r=f.startPos.x+t)?r:0,o=0<(o=f.startPos.y+n)?o:0,N.setStyles(c,{left:r,top:o,display:"block"}),c.innerHTML=y+" &times; "+C,f[2]<0&&s.clientWidth<=y&&N.setStyle(s,"left",g+(h-y)),f[3]<0&&s.clientHeight<=C&&N.setStyle(s,"top",p+(v-C)),(t=R.scrollWidth-x)+(n=R.scrollHeight-w)!=0&&N.setStyles(c,{left:r-t,top:o-n}),i||(Pg(a,u,h,v),i=!0)},P=function(){i=!1;var e=function(e,t){t&&(u.style[e]||!a.schema.isValid(u.nodeName.toLowerCase(),e)?N.setStyle(D(u),e,t):N.setAttrib(D(u),e,t))};e("width",y),e("height",C),N.unbind(S,"mousemove",O),N.unbind(S,"mouseup",P),k!==S&&(N.unbind(k,"mousemove",O),N.unbind(k,"mouseup",P)),N.remove(s),N.remove(c),o(u),Lg(a,u,y,C),N.setAttrib(u,"style",N.getAttrib(u,"style")),a.nodeChanged()},o=function(e){var t,r,o,n,i;L(),F(),t=N.getPos(e,R),g=t.x,p=t.y,i=e.getBoundingClientRect(),r=i.width||i.right-i.left,o=i.height||i.bottom-i.top,u!==e&&(u=e,y=C=0),n=a.fire("ObjectSelected",{target:e}),B(e)&&!n.isDefaultPrevented()?E(l,function(n,e){var t;(t=N.get("mceResizeHandle"+e))&&N.remove(t),t=N.add(R,"div",{id:"mceResizeHandle"+e,"data-mce-bogus":"all","class":"mce-resizehandle",unselectable:!0,style:"cursor:"+e+"-resize; margin:0; padding:0"}),11===de.ie&&(t.contentEditable=!1),N.bind(t,"mousedown",function(e){var t;e.stopImmediatePropagation(),e.preventDefault(),d=(t=e).screenX,m=t.screenY,h=D(u).clientWidth,v=D(u).clientHeight,b=v/h,(f=n).startPos={x:r*n[0]+g,y:o*n[1]+p},x=R.scrollWidth,w=R.scrollHeight,s=u.cloneNode(!0),N.addClass(s,"mce-clonedresizable"),N.setAttrib(s,"data-mce-bogus","all"),s.contentEditable=!1,s.unSelectabe=!0,N.setStyles(s,{left:g,top:p,margin:0}),s.removeAttribute("data-mce-selected"),R.appendChild(s),N.bind(S,"mousemove",O),N.bind(S,"mouseup",P),k!==S&&(N.bind(k,"mousemove",O),N.bind(k,"mouseup",P)),c=N.add(R,"div",{"class":"mce-resize-helper","data-mce-bogus":"all"},h+" &times; "+v)}),n.elm=t,N.setStyles(t,{left:r*n[0]+g-t.offsetWidth/2,top:o*n[1]+p-t.offsetHeight/2})}):L(),u.setAttribute("data-mce-selected","1")},L=function(){var e,t;for(e in F(),u&&u.removeAttribute("data-mce-selected"),l)(t=N.get("mceResizeHandle"+e))&&(N.unbind(t),N.remove(t))},I=function(e){var t,n=function(e,t){if(e)do{if(e===t)return!0}while(e=e.parentNode)};i||a.removed||(E(N.select("img[data-mce-selected],hr[data-mce-selected]"),function(e){e.removeAttribute("data-mce-selected")}),t="mousedown"===e.type?e.target:r.getNode(),n(t=N.$(t).closest("table,img,figure.image,hr")[0],R)&&(z(),n(r.getStart(!0),t)&&n(r.getEnd(!0),t))?o(t):L())},M=function(e){return ey(function(e,t){for(;t&&t!==e;){if(ty(t)||ey(t))return t;t=t.parentNode}return null}(a.getBody(),e))},F=function(){for(var e in l){var t=l[e];t.elm&&(N.unbind(t.elm),delete t.elm)}},z=function(){try{a.getDoc().execCommand("enableObjectResizing",!1,!1)}catch(e){}};return a.on("init",function(){z(),de.ie&&11<=de.ie&&(a.on("mousedown click",function(e){var t=e.target,n=t.nodeName;i||!/^(TABLE|IMG|HR)$/.test(n)||M(t)||(2!==e.button&&a.selection.select(t,"TABLE"===n),"mousedown"===e.type&&a.nodeChanged())}),a.dom.bind(R,"mscontrolselect",function(e){var t=function(e){ve.setEditorTimeout(a,function(){a.selection.select(e)})};if(M(e.target))return e.preventDefault(),void t(e.target);/^(TABLE|IMG|HR)$/.test(e.target.nodeName)&&(e.preventDefault(),"IMG"===e.target.tagName&&t(e.target))}));var t=ve.throttle(function(e){a.composing||I(e)});a.on("nodechange ResizeEditor ResizeWindow drop FullscreenStateChanged",t),a.on("keyup compositionend",function(e){u&&"TABLE"===u.nodeName&&t(e)}),a.on("hide blur",L),a.on("contextmenu",n)}),a.on("remove",F),{isResizable:B,showResizeRect:o,hideResizeRect:L,updateResizeRect:I,destroy:function(){u=s=null}}},ry=function(e){for(var t=0,n=0,r=e;r&&r.nodeType;)t+=r.offsetLeft||0,n+=r.offsetTop||0,r=r.offsetParent;return{x:t,y:n}},oy=function(e,t,n){var r,o,i,a,u,s=e.dom,c=s.getRoot(),l=0;if(u={elm:t,alignToTop:n},e.fire("scrollIntoView",u),!u.isDefaultPrevented()&&_o.isElement(t)){if(!1===n&&(l=t.offsetHeight),"BODY"!==c.nodeName){var f=e.selection.getScrollContainer();if(f)return r=ry(t).y-ry(f).y+l,a=f.clientHeight,void((r<(i=f.scrollTop)||i+a<r+25)&&(f.scrollTop=r<i?r:r-a+25))}o=s.getViewPort(e.getWin()),r=s.getPos(t).y+l,i=o.y,a=o.h,(r<o.y||i+a<r+25)&&e.getWin().scrollTo(0,r<i?r:r-a+25)}},iy=function(d,e){ee(du.fromRangeStart(e).getClientRects()).each(function(e){var t,n,r,o,i,a,u,s,c,l=function(e){if(e.inline)return e.getBody().getBoundingClientRect();var t=e.getWin();return{left:0,right:t.innerWidth,top:0,bottom:t.innerHeight,width:t.innerWidth,height:t.innerHeight}}(d),f={x:(i=t=l,a=n=e,a.left>i.left&&a.right<i.right?0:a.left<i.left?a.left-i.left:a.right-i.right),y:(r=t,o=n,o.top>r.top&&o.bottom<r.bottom?0:o.top<r.top?o.top-r.top:o.bottom-r.bottom)};s=0!==f.x?0<f.x?f.x+4:f.x-4:0,c=0!==f.y?0<f.y?f.y+4:f.y-4:0,(u=d).inline?(u.getBody().scrollLeft+=s,u.getBody().scrollTop+=c):u.getWin().scrollBy(s,c)})},ay=function(e){return _o.isContentEditableTrue(e)||_o.isContentEditableFalse(e)},uy=function(e,t,n){var r,o,i,a,u,s=n;if(s.caretPositionFromPoint)(o=s.caretPositionFromPoint(e,t))&&((r=n.createRange()).setStart(o.offsetNode,o.offset),r.collapse(!0));else if(n.caretRangeFromPoint)r=n.caretRangeFromPoint(e,t);else if(s.body.createTextRange){r=s.body.createTextRange();try{r.moveToPoint(e,t),r.collapse(!0)}catch(c){r=function(e,n,t){var r,o,i;if(r=t.elementFromPoint(e,n),o=t.body.createTextRange(),r&&"HTML"!==r.tagName||(r=t.body),o.moveToElementText(r),0<(i=(i=Yt.toArray(o.getClientRects())).sort(function(e,t){return(e=Math.abs(Math.max(e.top-n,e.bottom-n)))-(t=Math.abs(Math.max(t.top-n,t.bottom-n)))})).length){n=(i[0].bottom+i[0].top)/2;try{return o.moveToPoint(e,n),o.collapse(!0),o}catch(a){}}return null}(e,t,n)}return i=r,a=n.body,u=i&&i.parentElement?i.parentElement():null,_o.isContentEditableFalse(function(e,t,n){for(;e&&e!==t;){if(n(e))return e;e=e.parentNode}return null}(u,a,ay))?null:i}return r},sy=function(n,e){return $(e,function(e){var t=n.fire("GetSelectionRange",{range:e});return t.range!==e?t.range:e})},cy=function(e,t){var n=(t||document).createDocumentFragment();return F(e,function(e){n.appendChild(e.dom())}),rr.fromDom(n)},ly=Er("element","width","rows"),fy=Er("element","cells"),dy=Er("x","y"),my=function(e,t){var n=parseInt(br(e,t),10);return isNaN(n)?1:n},gy=function(e){return U(e,function(e,t){return t.cells().length>e?t.cells().length:e},0)},py=function(e,t){for(var n=e.rows(),r=0;r<n.length;r++)for(var o=n[r].cells(),i=0;i<o.length;i++)if(Or(o[i],t))return A.some(dy(i,r));return A.none()},hy=function(e,t,n,r,o){for(var i=[],a=e.rows(),u=n;u<=o;u++){var s=a[u].cells(),c=t<r?s.slice(t,r+1):s.slice(r,t+1);i.push(fy(a[u].element(),c))}return i},vy=function(e){var o=ly(oa(e),0,[]);return F(Vi(e,"tr"),function(n,r){F(Vi(n,"td,th"),function(e,t){!function(e,t,n,r,o){for(var i=my(o,"rowspan"),a=my(o,"colspan"),u=e.rows(),s=n;s<n+i;s++){u[s]||(u[s]=fy(ia(r),[]));for(var c=t;c<t+a;c++)u[s].cells()[c]=s===n&&c===t?o:oa(o)}}(o,function(e,t,n){for(;r=t,o=n,i=void 0,((i=e.rows())[o]?i[o].cells():[])[r];)t++;var r,o,i;return t}(o,t,r),r,n,e)})}),ly(o.element(),gy(o.rows()),o.rows())},by=function(e){return n=$((t=e).rows(),function(e){var t=$(e.cells(),function(e){var t=ia(e);return yr(t,"colspan"),yr(t,"rowspan"),t}),n=oa(e.element());return Ti(n,t),n}),r=oa(t.element()),o=rr.fromTag("tbody"),Ti(o,n),ki(r,o),r;var t,n,r,o},yy=function(l,e,t){return py(l,e).bind(function(c){return py(l,t).map(function(e){return t=l,r=e,o=(n=c).x(),i=n.y(),a=r.x(),u=r.y(),s=i<u?hy(t,o,i,a,u):hy(t,o,u,a,i),ly(t.element(),gy(s),s);var t,n,r,o,i,a,u,s})})},Cy=function(n,t){return V(n,function(e){return"li"===ur(e)&&Yp(e,t)}).fold(j([]),function(e){return(t=n,V(t,function(e){return"ul"===ur(e)||"ol"===ur(e)})).map(function(e){return[rr.fromTag("li"),rr.fromTag(ur(e))]}).getOr([]);var t})},xy=function(e,t){var n,r=rr.fromDom(t.commonAncestorContainer),o=Hl(r,e),i=z(o,function(e){return lo(e)||so(e)}),a=Cy(o,t),u=i.concat(a.length?a:po(n=r)?Ir(n).filter(go).fold(j([]),function(e){return[n,e]}):go(n)?[n]:[]);return $(u,oa)},wy=function(){return cy([])},Ny=function(e,t){return n=rr.fromDom(t.cloneContents()),r=xy(e,t),o=U(r,function(e,t){return ki(t,e),t},n),0<r.length?cy([o]):o;var n,r,o},Ey=function(e,o){return(t=e,n=o[0],Wi(n,"table",d(Or,t))).bind(function(e){var t=o[0],n=o[o.length-1],r=vy(e);return yy(r,t,n).map(function(e){return cy([by(e)])})}).getOrThunk(wy);var t,n},Sy=function(e,t){var n,r,o=qd(t,e);return 0<o.length?Ey(e,o):(n=e,0<(r=t).length&&r[0].collapsed?wy():Ny(n,r[0]))},ky=function(e,t){if(void 0===t&&(t={}),t.get=!0,t.format=t.format||"html",t.selection=!0,(t=e.fire("BeforeGetContent",t)).isDefaultPrevented())return e.fire("GetContent",t),t.content;if("text"===t.format)return c=e,A.from(c.selection.getRng()).map(function(e){return la(e.toString())}).getOr("");t.getInner=!0;var n,r,o,i,a,u,s,c,l=(r=t,i=(n=e).selection.getRng(),a=n.dom.create("body"),u=n.selection.getSel(),s=sy(n,Fd(u)),i.cloneContents?(o=r.contextual?Sy(rr.fromDom(n.getBody()),s).dom():i.cloneContents())&&a.appendChild(o):a.innerHTML=i.toString(),n.selection.serializer.serialize(a,r));return"tree"===t.format?l:(t.content=e.selection.isCollapsed()?"":l,e.fire("GetContent",t),t.content)},Ty=function(e,t,n){var r,o,i,a=e.selection.getRng(),u=e.getDoc();if((n=n||{format:"html"}).set=!0,n.selection=!0,n.content=t,n.no_events||!(n=e.fire("BeforeSetContent",n)).isDefaultPrevented()){if(t=n.content,a.insertNode){t+='<span id="__caret">_</span>',a.startContainer===u&&a.endContainer===u?u.body.innerHTML=t:(a.deleteContents(),0===u.body.childNodes.length?u.body.innerHTML=t:a.createContextualFragment?a.insertNode(a.createContextualFragment(t)):(o=u.createDocumentFragment(),i=u.createElement("div"),o.appendChild(i),i.outerHTML=t,a.insertNode(o))),r=e.dom.get("__caret"),(a=u.createRange()).setStartBefore(r),a.setEndBefore(r),e.selection.setRng(a),e.dom.remove("__caret");try{e.selection.setRng(a)}catch(s){}}else a.item&&(u.execCommand("Delete",!1,null),a=e.getRng()),/^\s+/.test(t)?(a.pasteHTML('<span id="__mce_tmp">_</span>'+t),e.dom.remove("__mce_tmp")):a.pasteHTML(t);n.no_events||e.fire("SetContent",n)}else e.fire("SetContent",n)},Ay=function(e,t,n,r,o){var i=n?t.startContainer:t.endContainer,a=n?t.startOffset:t.endOffset;return A.from(i).map(rr.fromDom).map(function(e){return r&&t.collapsed?e:Hr(e,o(e,a)).getOr(e)}).bind(function(e){return cr(e)?A.some(e):Ir(e)}).map(function(e){return e.dom()}).getOr(e)},Ry=function(e,t,n){return Ay(e,t,!0,n,function(e,t){return Math.min(e.dom().childNodes.length,t)})},_y=function(e,t,n){return Ay(e,t,!1,n,function(e,t){return 0<t?t-1:t})},Dy=function(e,t){for(var n=e;e&&_o.isText(e)&&0===e.length;)e=t?e.nextSibling:e.previousSibling;return e||n},By=Yt.each,Oy=function(e){return!!e.select},Py=function(e){return!(!e||!e.ownerDocument)&&Pr(rr.fromDom(e.ownerDocument),rr.fromDom(e))},Ly=function(u,s,e,c){var n,t,l,f,a,r=function(e,t){return Ty(c,e,t)},o=function(e){var t=m();t.collapse(!!e),i(t)},d=function(){return s.getSelection?s.getSelection():s.document.selection},m=function(){var e,t,n,r,o=function(e,t,n){try{return t.compareBoundaryPoints(e,n)}catch(r){return-1}};if(!s)return null;if(null==(r=s.document))return null;if(c.bookmark!==undefined&&!1===ap(c)){var i=hg(c);if(i.isSome())return i.map(function(e){return sy(c,[e])[0]}).getOr(r.createRange())}try{(e=d())&&(t=0<e.rangeCount?e.getRangeAt(0):e.createRange?e.createRange():r.createRange())}catch(a){}return(t=sy(c,[t])[0])||(t=r.createRange?r.createRange():r.body.createTextRange()),t.setStart&&9===t.startContainer.nodeType&&t.collapsed&&(n=u.getRoot(),t.setStart(n,0),t.setEnd(n,0)),l&&f&&(0===o(t.START_TO_START,t,l)&&0===o(t.END_TO_END,t,l)?t=f:f=l=null),t},i=function(e,t){var n,r;if((o=e)&&(Oy(o)||Py(o.startContainer)&&Py(o.endContainer))){var o,i=Oy(e)?e:null;if(i){f=null;try{i.select()}catch(a){}}else{if(n=d(),e=c.fire("SetSelectionRange",{range:e,forward:t}).range,n){f=e;try{n.removeAllRanges(),n.addRange(e)}catch(a){}!1===t&&n.extend&&(n.collapse(e.endContainer,e.endOffset),n.extend(e.startContainer,e.startOffset)),l=0<n.rangeCount?n.getRangeAt(0):null}e.collapsed||e.startContainer!==e.endContainer||!n.setBaseAndExtent||de.ie||e.endOffset-e.startOffset<2&&e.startContainer.hasChildNodes()&&(r=e.startContainer.childNodes[e.startOffset])&&"IMG"===r.tagName&&(n.setBaseAndExtent(e.startContainer,e.startOffset,e.endContainer,e.endOffset),n.anchorNode===e.startContainer&&n.focusNode===e.endContainer||n.setBaseAndExtent(r,0,r,1)),c.fire("AfterSetSelectionRange",{range:e,forward:t})}}},g=function(){var e,t,n=d();return!(n&&n.anchorNode&&n.focusNode)||((e=u.createRng()).setStart(n.anchorNode,n.anchorOffset),e.collapse(!0),(t=u.createRng()).setStart(n.focusNode,n.focusOffset),t.collapse(!0),e.compareBoundaryPoints(e.START_TO_START,t)<=0)},p={bookmarkManager:null,controlSelection:null,dom:u,win:s,serializer:e,editor:c,collapse:o,setCursorLocation:function(e,t){var n=u.createRng();e?(n.setStart(e,t),n.setEnd(e,t),i(n),o(!1)):(Gp(u,n,c.getBody(),!0),i(n))},getContent:function(e){return ky(c,e)},setContent:r,getBookmark:function(e,t){return n.getBookmark(e,t)},moveToBookmark:function(e){return n.moveToBookmark(e)},select:function(e,t){var r,n,o;return(r=u,n=e,o=t,A.from(n).map(function(e){var t=r.nodeIndex(e),n=r.createRng();return n.setStart(e.parentNode,t),n.setEnd(e.parentNode,t+1),o&&(Gp(r,n,e,!0),Gp(r,n,e,!1)),n})).each(i),e},isCollapsed:function(){var e=m(),t=d();return!(!e||e.item)&&(e.compareEndPoints?0===e.compareEndPoints("StartToEnd",e):!t||e.collapsed)},isForward:g,setNode:function(e){return r(u.getOuterHTML(e)),e},getNode:function(){return e=c.getBody(),(t=m())?(r=t.startContainer,o=t.endContainer,i=t.startOffset,a=t.endOffset,n=t.commonAncestorContainer,!t.collapsed&&(r===o&&a-i<2&&r.hasChildNodes()&&(n=r.childNodes[i]),3===r.nodeType&&3===o.nodeType&&(r=r.length===i?Dy(r.nextSibling,!0):r.parentNode,o=0===a?Dy(o.previousSibling,!1):o.parentNode,r&&r===o))?r:n&&3===n.nodeType?n.parentNode:n):e;var e,t,n,r,o,i,a},getSel:d,setRng:i,getRng:m,getStart:function(e){return Ry(c.getBody(),m(),e)},getEnd:function(e){return _y(c.getBody(),m(),e)},getSelectedBlocks:function(e,t){return function(e,t,n,r){var o,i,a=[];if(i=e.getRoot(),n=e.getParent(n||Ry(i,t,t.collapsed),e.isBlock),r=e.getParent(r||_y(i,t,t.collapsed),e.isBlock),n&&n!==i&&a.push(n),n&&r&&n!==r)for(var u=new ro(o=n,i);(o=u.next())&&o!==r;)e.isBlock(o)&&a.push(o);return r&&n!==r&&r!==i&&a.push(r),a}(u,m(),e,t)},normalize:function(){var e=m(),t=d();if(!Ud(t)&&Jp(c)){var n=jm(u,e);return n.each(function(e){i(e,g())}),n.getOr(e)}return e},selectorChanged:function(e,t){var i;return a||(a={},i={},c.on("NodeChange",function(e){var n=e.element,r=u.getParents(n,null,u.getRoot()),o={};By(a,function(e,n){By(r,function(t){if(u.is(t,n))return i[n]||(By(e,function(e){e(!0,{node:t,selector:n,parents:r})}),i[n]=e),o[n]=e,!1})}),By(i,function(e,t){o[t]||(delete i[t],By(e,function(e){e(!1,{node:n,selector:t,parents:r})}))})})),a[e]||(a[e]=[]),a[e].push(t),p},getScrollContainer:function(){for(var e,t=u.getRoot();t&&"BODY"!==t.nodeName;){if(t.scrollHeight>t.clientHeight){e=t;break}t=t.parentNode}return e},scrollIntoView:function(e,t){return oy(c,e,t)},placeCaretAt:function(e,t){return i(uy(e,t,c.getDoc()))},getBoundingClientRect:function(){var e=m();return e.collapsed?hu.fromRangeStart(e).getClientRects()[0]:e.getBoundingClientRect()},destroy:function(){s=l=f=null,t.destroy()}};return n=Zb(p),t=ny(p,c),p.bookmarkManager=n,p.controlSelection=t,p},Iy=_o.isContentEditableFalse,My=Ua,Fy=As,zy=Ts,Uy=function(e,t){for(;t=e(t);)if(t.isVisible())return t;return t},Vy=function(e,t,n,r){var o,i,a,u,s,c,l=e===gu.Forwards,f=l?zy:Fy;return!r.collapsed&&(o=My(r),Iy(o))?Ah(e,t,o,e===gu.Backwards,!0):(u=ma(r.startContainer),f(i=ks(e,t.getBody(),r))?Rh(t,i.getNode(!l)):(i=n(i))?f(i)?Ah(e,t,i.getNode(!l),l,!0):f(a=n(i))&&(!(c=hs(s=i,a))&&_o.isBr(s.getNode())||c)?Ah(e,t,a.getNode(!l),l,!0):u?Dh(t,i.toRange(),!0):null:u?r:null)},Hy=function(e,t,n,r){var o,i,a,u,s,c,l,f,d;if(d=My(r),o=ks(e,t.getBody(),r),i=n(t.getBody(),ph(1),o),a=z(i,hh(1)),s=qt.last(o.getClientRects()),(zy(o)||Rs(o))&&(d=o.getNode()),(Fy(o)||_s(o))&&(d=o.getNode(!0)),!s)return null;if(c=s.left,(u=wh(a,c))&&Iy(u.node))return l=Math.abs(c-u.left),f=Math.abs(c-u.right),Ah(e,t,u.node,l<f,!0);if(d){var m=function(e,t,n,r){var o,i,a,u,s,c,l=Gs(t),f=[],d=0,m=function(e){return qt.last(e.getClientRects())};1===e?(o=l.next,i=za,a=Fa,u=hu.after(r)):(o=l.prev,i=Fa,a=za,u=hu.before(r)),c=m(u);do{if(u.isVisible()&&!a(s=m(u),c)){if(0<f.length&&i(s,qt.last(f))&&d++,(s=La(s)).position=u,s.line=d,n(s))return f;f.push(s)}}while(u=o(u));return f}(e,t.getBody(),ph(1),d);if(u=wh(z(m,hh(1)),c))return Dh(t,u.position.toRange(),!0);if(u=qt.last(z(m,hh(0))))return Dh(t,u.position.toRange(),!0)}},jy=function(e,t,n){var r,o,i,a,u=Gs(e.getBody()),s=d(Uy,u.next),c=d(Uy,u.prev);if(n.collapsed&&e.settings.forced_root_block){if(!(r=e.dom.getParent(n.startContainer,"PRE")))return;(1===t?s(hu.fromRangeStart(n)):c(hu.fromRangeStart(n)))||(a=(i=e).dom.create(i.settings.forced_root_block),(!de.ie||11<=de.ie)&&(a.innerHTML='<br data-mce-bogus="1">'),o=a,1===t?e.$(r).after(o):e.$(r).before(o),e.selection.select(o,!0),e.selection.collapse())}},qy=function(l,f){return function(){var e,t,n,r,o,i,a,u,s,c=(t=f,r=Gs((e=l).getBody()),o=d(Uy,r.next),i=d(Uy,r.prev),a=t?gu.Forwards:gu.Backwards,u=t?o:i,s=e.selection.getRng(),(n=Vy(a,e,u,s))?n:(n=jy(e,a,s))||null);return!!c&&(l.selection.setRng(c),!0)}},$y=function(u,s){return function(){var e,t,n,r,o,i,a=(r=(t=s)?1:-1,o=t?gh:mh,i=(e=u).selection.getRng(),(n=Hy(r,e,o,i))?n:(n=jy(e,r,i))||null);return!!a&&(u.selection.setRng(a),!0)}};(Qb=Jb||(Jb={}))[Qb.Br=0]="Br",Qb[Qb.Block=1]="Block",Qb[Qb.Wrap=2]="Wrap",Qb[Qb.Eol=3]="Eol";var Wy=function(e,t){return e===gu.Backwards?t.reverse():t},Ky=function(e,t,n,r){for(var o,i,a,u,s,c,l=Gs(n),f=r,d=[];f&&(s=l,c=f,o=t===gu.Forwards?s.next(c):s.prev(c));){if(_o.isBr(o.getNode(!1)))return t===gu.Forwards?{positions:Wy(t,d).concat([o]),breakType:Jb.Br,breakAt:A.some(o)}:{positions:Wy(t,d),breakType:Jb.Br,breakAt:A.some(o)};if(o.isVisible()){if(e(f,o)){var m=(i=t,a=f,u=o,_o.isBr(u.getNode(i===gu.Forwards))?Jb.Br:!1===hs(a,u)?Jb.Block:Jb.Wrap);return{positions:Wy(t,d),breakType:m,breakAt:A.some(o)}}d.push(o),f=o}else f=o}return{positions:Wy(t,d),breakType:Jb.Eol,breakAt:A.none()}},Xy=function(n,r,o,e){return r(o,e).breakAt.map(function(e){var t=r(o,e).positions;return n===gu.Backwards?t.concat(e):[e].concat(t)}).getOr([])},Yy=function(e,i){return U(e,function(e,o){return e.fold(function(){return A.some(o)},function(r){return qa([ee(r.getClientRects()),ee(o.getClientRects())],function(e,t){var n=Math.abs(i-e.left);return Math.abs(i-t.left)<=n?o:r}).or(e)})},A.none())},Gy=function(t,e){return ee(e.getClientRects()).bind(function(e){return Yy(t,e.left)})},Jy=d(Ky,du.isAbove,-1),Qy=d(Ky,du.isBelow,1),Zy=d(Xy,-1,Jy),eC=d(Xy,1,Qy),tC=function(e,t,n,r,o){var i,a,u,s,c=Vi(rr.fromDom(n),"td,th,caption").map(function(e){return e.dom()}),l=z((i=e,G(c,function(e){var t,n,r=(t=La(e.getBoundingClientRect()),n=-1,{left:t.left-n,top:t.top-n,right:t.right+2*n,bottom:t.bottom+2*n,width:t.width+n,height:t.height+n});return[{x:r.left,y:i(r),cell:e},{x:r.right,y:i(r),cell:e}]})),function(e){return t(e,o)});return(a=l,u=r,s=o,U(a,function(e,r){return e.fold(function(){return A.some(r)},function(e){var t=Math.sqrt(Math.abs(e.x-u)+Math.abs(e.y-s)),n=Math.sqrt(Math.abs(r.x-u)+Math.abs(r.y-s));return A.some(n<t?r:e)})},A.none())).map(function(e){return e.cell})},nC=d(tC,function(e){return e.bottom},function(e,t){return e.y<t}),rC=d(tC,function(e){return e.top},function(e,t){return e.y>t}),oC=function(t,n){return ee(n.getClientRects()).bind(function(e){return nC(t,e.left,e.top)}).bind(function(e){return Gy((t=e,ic.lastPositionIn(t).map(function(e){return Jy(t,e).positions.concat(e)}).getOr([])),n);var t})},iC=function(t,n){return te(n.getClientRects()).bind(function(e){return rC(t,e.left,e.top)}).bind(function(e){return Gy((t=e,ic.firstPositionIn(t).map(function(e){return[e].concat(Qy(t,e).positions)}).getOr([])),n);var t})},aC=function(e,t){e.selection.setRng(t),iy(e,t)},uC=function(e,t,n){var r,o,i,a,u=e(t,n);return(a=u).breakType===Jb.Wrap&&0===a.positions.length||!_o.isBr(n.getNode())&&(i=u).breakType===Jb.Br&&1===i.positions.length?(r=e,o=t,!u.breakAt.map(function(e){return r(o,e).breakAt.isSome()}).getOr(!1)):u.breakAt.isNone()},sC=d(uC,Jy),cC=d(uC,Qy),lC=function(e,t,n,r){var o,i,a,u,s=e.selection.getRng(),c=t?1:-1;if(es()&&(o=t,i=s,a=n,u=hu.fromRangeStart(i),ic.positionIn(!o,a).map(function(e){return e.isEqual(u)}).getOr(!1))){var l=Ah(c,e,n,!t,!0);return aC(e,l),!0}return!1},fC=function(e,t){var n=t.getNode(e);return _o.isElement(n)&&"TABLE"===n.nodeName?A.some(n):A.none()},dC=function(u,s,c){var e=fC(!!s,c),t=!1===s;e.fold(function(){return aC(u,c.toRange())},function(a){return ic.positionIn(t,u.getBody()).filter(function(e){return e.isEqual(c)}).fold(function(){return aC(u,c.toRange())},function(e){return n=s,o=a,t=c,void((i=mm(r=u))?r.undoManager.transact(function(){var e=rr.fromTag(i);vr(e,gm(r)),ki(e,rr.fromTag("br")),n?Ei(rr.fromDom(o),e):Ni(rr.fromDom(o),e);var t=r.dom.createRng();t.setStart(e.dom(),0),t.setEnd(e.dom(),0),aC(r,t)}):aC(r,t.toRange()));var n,r,o,t,i})})},mC=function(e,t,n,r){var o,i,a,u,s,c,l=e.selection.getRng(),f=hu.fromRangeStart(l),d=e.getBody();if(!t&&sC(r,f)){var m=(u=d,oC(s=n,c=f).orThunk(function(){return ee(c.getClientRects()).bind(function(e){return Yy(Zy(u,hu.before(s)),e.left)})}).getOr(hu.before(s)));return dC(e,t,m),!0}return!(!t||!cC(r,f))&&(o=d,m=iC(i=n,a=f).orThunk(function(){return ee(a.getClientRects()).bind(function(e){return Yy(eC(o,hu.after(i)),e.left)})}).getOr(hu.after(i)),dC(e,t,m),!0)},gC=function(t,n){return function(){return A.from(t.dom.getParent(t.selection.getNode(),"td,th")).bind(function(e){return A.from(t.dom.getParent(e,"table")).map(function(e){return lC(t,n,e)})}).getOr(!1)}},pC=function(n,r){return function(){return A.from(n.dom.getParent(n.selection.getNode(),"td,th")).bind(function(t){return A.from(n.dom.getParent(t,"table")).map(function(e){return mC(n,r,e,t)})}).getOr(!1)}},hC=function(e){return M(["figcaption"],ur(e))},vC=function(e){var t=document.createRange();return t.setStartBefore(e.dom()),t.setEndBefore(e.dom()),t},bC=function(e,t,n){n?ki(e,t):Si(e,t)},yC=function(e,t,n,r){return""===t?(l=e,f=r,d=rr.fromTag("br"),bC(l,d,f),vC(d)):(o=e,i=r,a=t,u=n,s=rr.fromTag(a),c=rr.fromTag("br"),vr(s,u),ki(s,c),bC(o,s,i),vC(c));var o,i,a,u,s,c,l,f,d},CC=function(e,t,n){return t?(o=e.dom(),Qy(o,n).breakAt.isNone()):(r=e.dom(),Jy(r,n).breakAt.isNone());var r,o},xC=function(t,n){var e,r,o,i=rr.fromDom(t.getBody()),a=hu.fromRangeStart(t.selection.getRng()),u=mm(t),s=gm(t);return(e=a,r=i,o=d(Or,r),$i(rr.fromDom(e.container()),co,o).filter(hC)).exists(function(){if(CC(i,n,a)){var e=yC(i,u,s,n);return t.selection.setRng(e),!0}return!1})},wC=function(e,t){return function(){return!!e.selection.isCollapsed()&&xC(e,t)}},NC=function(e,r){return G($(e,function(e){return Eb({shiftKey:!1,altKey:!1,ctrlKey:!1,metaKey:!1,keyCode:0,action:o},e)}),function(e){return t=e,(n=r).keyCode===t.keyCode&&n.shiftKey===t.shiftKey&&n.altKey===t.altKey&&n.ctrlKey===t.ctrlKey&&n.metaKey===t.metaKey?[e]:[];var t,n})},EC=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Array.prototype.slice.call(arguments,1);return function(){return e.apply(null,r)}},SC=function(e,t){return V(NC(e,t),function(e){return e.action()})},kC=function(i,a){i.on("keydown",function(e){var t,n,r,o;!1===e.isDefaultPrevented()&&(t=i,n=a,r=e,o=tr.detect().os,SC([{keyCode:Oh.RIGHT,action:qy(t,!0)},{keyCode:Oh.LEFT,action:qy(t,!1)},{keyCode:Oh.UP,action:$y(t,!1)},{keyCode:Oh.DOWN,action:$y(t,!0)},{keyCode:Oh.RIGHT,action:gC(t,!0)},{keyCode:Oh.LEFT,action:gC(t,!1)},{keyCode:Oh.UP,action:pC(t,!1)},{keyCode:Oh.DOWN,action:pC(t,!0)},{keyCode:Oh.RIGHT,action:bd.move(t,n,!0)},{keyCode:Oh.LEFT,action:bd.move(t,n,!1)},{keyCode:Oh.RIGHT,ctrlKey:!o.isOSX(),altKey:o.isOSX(),action:bd.moveNextWord(t,n)},{keyCode:Oh.LEFT,ctrlKey:!o.isOSX(),altKey:o.isOSX(),action:bd.movePrevWord(t,n)},{keyCode:Oh.UP,action:wC(t,!1)},{keyCode:Oh.DOWN,action:wC(t,!0)}],r).each(function(e){r.preventDefault()}))})},TC=function(e){return 1===Vr(e).length},AC=function(e,t,n,r){var o,i,a,u,s=d(_v,t),c=$(z(r,s),function(e){return e.dom()});if(0===c.length)Tf(t,e,n);else{var l=(o=n.dom(),i=c,a=Nv(!1),u=Av(i,a.dom()),Ni(rr.fromDom(o),a),Ri(rr.fromDom(o)),hu(u,0));t.selection.setRng(l.toRange())}},RC=function(r,o){var t,e=rr.fromDom(r.getBody()),n=rr.fromDom(r.selection.getStart()),i=z((t=Hl(n,e),K(t,co).fold(j(t),function(e){return t.slice(0,e)})),TC);return te(i).map(function(e){var t,n=hu.fromRangeStart(r.selection.getRng());return!(!Tl(o,n,e.dom())||Fu((t=e).dom())&&xv(t.dom())||(AC(o,r,e,i),0))}).getOr(!1)},_C=function(e,t){return!!e.selection.isCollapsed()&&RC(e,t)},DC=function(o,i){o.on("keydown",function(e){var t,n,r;!1===e.isDefaultPrevented()&&(t=o,n=i,r=e,SC([{keyCode:Oh.BACKSPACE,action:EC(_f,t,!1)},{keyCode:Oh.DELETE,action:EC(_f,t,!0)},{keyCode:Oh.BACKSPACE,action:EC(wd,t,n,!1)},{keyCode:Oh.DELETE,action:EC(wd,t,n,!0)},{keyCode:Oh.BACKSPACE,action:EC(tm,t,!1)},{keyCode:Oh.DELETE,action:EC(tm,t,!0)},{keyCode:Oh.BACKSPACE,action:EC(tf,t,!1)},{keyCode:Oh.DELETE,action:EC(tf,t,!0)},{keyCode:Oh.BACKSPACE,action:EC(Jl,t,!1)},{keyCode:Oh.DELETE,action:EC(Jl,t,!0)},{keyCode:Oh.BACKSPACE,action:EC(_C,t,!1)},{keyCode:Oh.DELETE,action:EC(_C,t,!0)}],r).each(function(e){r.preventDefault()}))}),o.on("keyup",function(e){var t,n;!1===e.isDefaultPrevented()&&(t=o,n=e,SC([{keyCode:Oh.BACKSPACE,action:EC(Df,t)},{keyCode:Oh.DELETE,action:EC(Df,t)}],n))})},BC=function(e){return A.from(e.dom.getParent(e.selection.getStart(!0),e.dom.isBlock))},OC=function(e,t){var n,r,o,i=t,a=e.dom,u=e.schema.getMoveCaretBeforeOnEnterElements();if(t){if(/^(LI|DT|DD)$/.test(t.nodeName)){var s=function(e){for(;e;){if(1===e.nodeType||3===e.nodeType&&e.data&&/[\r\n\s]/.test(e.data))return e;e=e.nextSibling}}(t.firstChild);s&&/^(UL|OL|DL)$/.test(s.nodeName)&&t.insertBefore(a.doc.createTextNode("\xa0"),t.firstChild)}if(o=a.createRng(),t.normalize(),t.hasChildNodes()){for(n=new ro(t,t);r=n.current();){if(_o.isText(r)){o.setStart(r,0),o.setEnd(r,0);break}if(u[r.nodeName.toLowerCase()]){o.setStartBefore(r),o.setEndBefore(r);break}i=r,r=n.next()}r||(o.setStart(i,0),o.setEnd(i,0))}else _o.isBr(t)?t.nextSibling&&a.isBlock(t.nextSibling)?(o.setStartBefore(t),o.setEndBefore(t)):(o.setStartAfter(t),o.setEndAfter(t)):(o.setStart(t,0),o.setEnd(t,0));e.selection.setRng(o),a.remove(void 0),e.selection.scrollIntoView(t)}},PC=function(e,t){var n,r,o=e.getRoot();for(n=t;n!==o&&"false"!==e.getContentEditable(n);)"true"===e.getContentEditable(n)&&(r=n),n=n.parentNode;return n!==o?r:o},LC=BC,IC=function(e){return BC(e).fold(j(""),function(e){return e.nodeName.toUpperCase()})},MC=function(e){return BC(e).filter(function(e){return po(rr.fromDom(e))}).isSome()},FC=function(e,t){return e&&e.parentNode&&e.parentNode.nodeName===t},zC=function(e){return e&&/^(OL|UL|LI)$/.test(e.nodeName)},UC=function(e){var t=e.parentNode;return/^(LI|DT|DD)$/.test(t.nodeName)?t:e},VC=function(e,t,n){for(var r=e[n?"firstChild":"lastChild"];r&&!_o.isElement(r);)r=r[n?"nextSibling":"previousSibling"];return r===t},HC=function(e,t,n,r,o){var i=e.dom,a=e.selection.getRng();if(n!==e.getBody()){var u;zC(u=n)&&zC(u.parentNode)&&(o="LI");var s,c,l=o?t(o):i.create("BR");if(VC(n,r,!0)&&VC(n,r,!1))FC(n,"LI")?i.insertAfter(l,UC(n)):i.replace(l,n);else if(VC(n,r,!0))FC(n,"LI")?(i.insertAfter(l,UC(n)),l.appendChild(i.doc.createTextNode(" ")),l.appendChild(n)):n.parentNode.insertBefore(l,n);else if(VC(n,r,!1))i.insertAfter(l,UC(n));else{n=UC(n);var f=a.cloneRange();f.setStartAfter(r),f.setEndAfter(n);var d=f.extractContents();"LI"===o&&(c="LI",(s=d).firstChild&&s.firstChild.nodeName===c)?(l=d.firstChild,i.insertAfter(d,n)):(i.insertAfter(d,n),i.insertAfter(l,n))}i.remove(r),OC(e,l)}},jC=function(e){e.innerHTML='<br data-mce-bogus="1">'},qC=function(e,t){return e.nodeName===t||e.previousSibling&&e.previousSibling.nodeName===t},$C=function(e,t){return t&&e.isBlock(t)&&!/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName)&&!/^(fixed|absolute)/i.test(t.style.position)&&"true"!==e.getContentEditable(t)},WC=function(e,t,n){return!1===_o.isText(t)?n:e?1===n&&t.data.charAt(n-1)===ca?0:n:n===t.data.length-1&&t.data.charAt(n)===ca?t.data.length:n},KC=function(e,t){var n,r,o=e.getRoot();for(n=t;n!==o&&"false"!==e.getContentEditable(n);)"true"===e.getContentEditable(n)&&(r=n),n=n.parentNode;return n!==o?r:o},XC=function(e,t){var n=mm(e);n&&n.toLowerCase()===t.tagName.toLowerCase()&&e.dom.setAttribs(t,gm(e))},YC=function(a,e){var t,u,s,i,c,n,r,o,l,f,d,m,g,p,h,v,b,y,C,x=a.dom,w=a.schema,N=w.getNonEmptyElements(),E=a.selection.getRng(),S=function(e){var t,n,r,o=s,i=w.getTextInlineElements();if(e||"TABLE"===f||"HR"===f?(t=x.create(e||m),XC(a,t)):t=c.cloneNode(!1),r=t,!1===vm(a))x.setAttrib(t,"style",null),x.setAttrib(t,"class",null);else do{if(i[o.nodeName]){if(Fu(o))continue;n=o.cloneNode(!1),x.setAttrib(n,"id",""),t.hasChildNodes()?n.appendChild(t.firstChild):r=n,t.appendChild(n)}}while((o=o.parentNode)&&o!==u);return jC(r),t},k=function(e){var t,n,r,o;if(o=WC(e,s,i),_o.isText(s)&&(e?0<o:o<s.nodeValue.length))return!1;if(s.parentNode===c&&g&&!e)return!0;if(e&&_o.isElement(s)&&s===c.firstChild)return!0;if(qC(s,"TABLE")||qC(s,"HR"))return g&&!e||!g&&e;for(t=new ro(s,c),_o.isText(s)&&(e&&0===o?t.prev():e||o!==s.nodeValue.length||t.next());n=t.current();){if(_o.isElement(n)){if(!n.getAttribute("data-mce-bogus")&&(r=n.nodeName.toLowerCase(),N[r]&&"br"!==r))return!1}else if(_o.isText(n)&&!/^[ \t\r\n]*$/.test(n.nodeValue))return!1;e?t.prev():t.next()}return!0},T=function(){r=/^(H[1-6]|PRE|FIGURE)$/.test(f)&&"HGROUP"!==d?S(m):S(),bm(a)&&$C(x,l)&&x.isEmpty(c)?r=x.split(l,c):x.insertAfter(r,c),OC(a,r)};jm(x,E).each(function(e){E.setStart(e.startContainer,e.startOffset),E.setEnd(e.endContainer,e.endOffset)}),s=E.startContainer,i=E.startOffset,m=mm(a),n=e.shiftKey,_o.isElement(s)&&s.hasChildNodes()&&(g=i>s.childNodes.length-1,s=s.childNodes[Math.min(i,s.childNodes.length-1)]||s,i=g&&_o.isText(s)?s.nodeValue.length:0),(u=KC(x,s))&&((m&&!n||!m&&n)&&(s=function(e,t,n,r,o){var i,a,u,s,c,l,f,d=t||"P",m=e.dom,g=KC(m,r);if(!(a=m.getParent(r,m.isBlock))||!$C(m,a)){if(l=(a=a||g)===e.getBody()||(f=a)&&/^(TD|TH|CAPTION)$/.test(f.nodeName)?a.nodeName.toLowerCase():a.parentNode.nodeName.toLowerCase(),!a.hasChildNodes())return i=m.create(d),XC(e,i),a.appendChild(i),n.setStart(i,0),n.setEnd(i,0),i;for(s=r;s.parentNode!==a;)s=s.parentNode;for(;s&&!m.isBlock(s);)s=(u=s).previousSibling;if(u&&e.schema.isValidChild(l,d.toLowerCase())){for(i=m.create(d),XC(e,i),u.parentNode.insertBefore(i,u),s=u;s&&!m.isBlock(s);)c=s.nextSibling,i.appendChild(s),s=c;n.setStart(r,o),n.setEnd(r,o)}}return r}(a,m,E,s,i)),c=x.getParent(s,x.isBlock),l=c?x.getParent(c.parentNode,x.isBlock):null,f=c?c.nodeName.toUpperCase():"","LI"!==(d=l?l.nodeName.toUpperCase():"")||e.ctrlKey||(l=(c=l).parentNode,f=d),/^(LI|DT|DD)$/.test(f)&&x.isEmpty(c)?HC(a,S,l,c,m):m&&c===a.getBody()||(m=m||"P",ma(c)?(r=wa(c),x.isEmpty(c)&&jC(c),OC(a,r)):k()?T():k(!0)?(r=c.parentNode.insertBefore(S(),c),OC(a,qC(c,"HR")?r:c)):((t=(y=E,C=y.cloneRange(),C.setStart(y.startContainer,WC(!0,y.startContainer,y.startOffset)),C.setEnd(y.endContainer,WC(!1,y.endContainer,y.endOffset)),C).cloneRange()).setEndAfter(c),o=t.extractContents(),b=o,F(Ui(rr.fromDom(b),lr),function(e){var t=e.dom();t.nodeValue=la(t.nodeValue)}),function(e){for(;_o.isText(e)&&(e.nodeValue=e.nodeValue.replace(/^[\r\n]+/,"")),e=e.firstChild;);}(o),r=o.firstChild,x.insertAfter(o,c),function(e,t,n){var r,o=n,i=[];if(o){for(;o=o.firstChild;){if(e.isBlock(o))return;_o.isElement(o)&&!t[o.nodeName.toLowerCase()]&&i.push(o)}for(r=i.length;r--;)!(o=i[r]).hasChildNodes()||o.firstChild===o.lastChild&&""===o.firstChild.nodeValue?e.remove(o):(a=e,(u=o)&&"A"===u.nodeName&&a.isEmpty(u)&&e.remove(o));var a,u}}(x,N,r),p=x,(h=c).normalize(),(v=h.lastChild)&&!/^(left|right)$/gi.test(p.getStyle(v,"float",!0))||p.add(h,"br"),x.isEmpty(c)&&jC(c),r.normalize(),x.isEmpty(r)?(x.remove(r),T()):OC(a,r)),x.setAttrib(r,"id",""),a.fire("NewBlock",{newBlock:r})))},GC=function(e,t){return LC(e).filter(function(e){return 0<t.length&&Dr(rr.fromDom(e),t)}).isSome()},JC=function(e){return GC(e,pm(e))},QC=function(e){return GC(e,hm(e))},ZC=nf([{br:[]},{block:[]},{none:[]}]),ex=function(e,t){return QC(e)},tx=function(n){return function(e,t){return""===mm(e)===n}},nx=function(n){return function(e,t){return MC(e)===n}},rx=function(n,r){return function(e,t){return IC(e)===n.toUpperCase()===r}},ox=function(e){return rx("pre",e)},ix=function(n){return function(e,t){return dm(e)===n}},ax=function(e,t){return JC(e)},ux=function(e,t){return t},sx=function(e){var t=mm(e),n=PC(e.dom,e.selection.getStart());return n&&e.schema.isValidChild(n.nodeName,t||"P")},cx=function(e,t){return function(n,r){return U(e,function(e,t){return e&&t(n,r)},!0)?A.some(t):A.none()}},lx=function(e,t){return Hf([cx([ex],ZC.none()),cx([rx("summary",!0)],ZC.br()),cx([ox(!0),ix(!1),ux],ZC.br()),cx([ox(!0),ix(!1)],ZC.block()),cx([ox(!0),ix(!0),ux],ZC.block()),cx([ox(!0),ix(!0)],ZC.br()),cx([nx(!0),ux],ZC.br()),cx([nx(!0)],ZC.block()),cx([tx(!0),ux,sx],ZC.block()),cx([tx(!0)],ZC.br()),cx([ax],ZC.br()),cx([tx(!1),ux],ZC.br()),cx([sx],ZC.block())],[e,t.shiftKey]).getOr(ZC.none())},fx=function(e,t){lx(e,t).fold(function(){Zm(e,t)},function(){YC(e,t)},o)},dx=function(o){o.on("keydown",function(e){var t,n,r;e.keyCode===Oh.ENTER&&(t=o,(n=e).isDefaultPrevented()||(n.preventDefault(),(r=t.undoManager).typing&&(r.typing=!1,r.add()),t.undoManager.transact(function(){!1===t.selection.isCollapsed()&&t.execCommand("Delete"),fx(t,n)})))})},mx=function(n,r){var e=r.container(),t=r.offset();return _o.isText(e)?(e.insertData(t,n),A.some(du(e,t+n.length))):Ps(r).map(function(e){var t=rr.fromText(n);return r.isAtEnd()?Ei(e,t):Ni(e,t),du(t.dom(),n.length)})},gx=d(mx,"\xa0"),px=d(mx," "),hx=function(t,n,r){var e=z(Hl(rr.fromDom(r.container()),n),co);return ee(e).fold(function(){return ic.navigate(t,n.dom(),r).forall(function(e){return!1===hs(e,r,n.dom())})},function(e){return ic.navigate(t,e.dom(),r).isNone()})},vx=d(hx,!1),bx=d(hx,!0),yx=function(e){return du.isTextPosition(e)&&!e.isAtStart()&&!e.isAtEnd()},Cx=function(e,t){var n=z(Hl(rr.fromDom(t.container()),e),co);return ee(n).getOr(e)},xx=function(e,t){return yx(t)?Os(t):Os(t)||ic.prevPosition(Cx(e,t).dom(),t).exists(Os)},wx=function(e,t){return yx(t)?Bs(t):Bs(t)||ic.nextPosition(Cx(e,t).dom(),t).exists(Bs)},Nx=function(e){return Ps(e).bind(function(e){return $i(e,cr)}).exists(function(e){return t=wr(e,"white-space"),M(["pre","pre-line","pre-wrap"],t);var t})},Ex=function(e,t){return o=e,i=t,ic.prevPosition(o.dom(),i).isNone()||(n=e,r=t,ic.nextPosition(n.dom(),r).isNone())||vx(e,t)||bx(e,t)||uf(e,t)||af(e,t);var n,r,o,i},Sx=function(e,t){return ns(e.charAt(t))},kx=function(e){var t=e.container();return _o.isText(t)&&Wn(t.data,"\xa0")},Tx=function(e,t,n){var r,o,i=du(t,0);return Sx(n,0)&&(r=e,Nx(o=i)||!(vx(r,o)||uf(r,o)||xx(r,o)))?" "+n.slice(1):n},Ax=function(e,t,n){var r,o,i=du(t,n.length);return Sx(n,n.length-1)&&(r=e,Nx(o=i)||!(bx(r,o)||af(r,o)||wx(r,o)))?n.slice(0,-1)+" ":n},Rx=function(i,e){return A.some(e).filter(kx).bind(function(e){var t,n=e.container(),r=n.nodeValue,o=Tx(i,n,(t=Ax(i,n,r),$(t.split(""),function(e,t,n){return ns(e)&&0<t&&t<n.length-1&&os(n[t-1])&&os(n[t+1])?" ":e}).join("")));return r!==o?(e.container().nodeValue=o,A.some(e)):A.none()})},_x=function(t){var e=rr.fromDom(t.getBody());t.selection.isCollapsed()&&Rx(e,du.fromRangeStart(t.selection.getRng())).each(function(e){t.selection.setRng(e.toRange())})},Dx=function(r,o){return function(e){return t=r,!Nx(n=e)&&(Ex(t,n)||xx(t,n)||wx(t,n))?gx(o):px(o);var t,n}},Bx=function(e){var t,n,r=hu.fromRangeStart(e.selection.getRng()),o=rr.fromDom(e.getBody());if(e.selection.isCollapsed()){var i=d(El.isInlineTarget,e),a=hu.fromRangeStart(e.selection.getRng());return ad(i,e.getBody(),a).bind((n=o,function(e){return e.fold(function(e){return ic.prevPosition(n.dom(),hu.before(e))},function(e){return ic.firstPositionIn(e)},function(e){return ic.lastPositionIn(e)},function(e){return ic.nextPosition(n.dom(),hu.after(e))})})).bind(Dx(o,r)).exists((t=e,function(e){return t.selection.setRng(e.toRange()),t.nodeChanged(),!0}))}return!1},Ox=function(r){r.on("keydown",function(e){var t,n;!1===e.isDefaultPrevented()&&(t=r,n=e,SC([{keyCode:Oh.SPACEBAR,action:EC(Bx,t)}],n).each(function(e){n.preventDefault()}))})},Px=function(e,t){var n;t.hasAttribute("data-mce-caret")&&(wa(t),(n=e).selection.setRng(n.selection.getRng()),e.selection.scrollIntoView(t))},Lx=function(e,t){var n,r=(n=e,Ki(rr.fromDom(n.getBody()),"*[data-mce-caret]").fold(j(null),function(e){return e.dom()}));if(r)return"compositionstart"===t.type?(t.preventDefault(),t.stopPropagation(),void Px(e,r)):void(ha(r)&&(Px(e,r),e.undoManager.add()))},Ix=function(e){e.on("keyup compositionstart",d(Lx,e))},Mx=tr.detect().browser,Fx=function(t){var e,n;e=t,n=Di(function(){e.composing||_x(e)},0),Mx.isIE()&&(e.on("keypress",function(e){n.throttle()}),e.on("remove",function(e){n.cancel()})),t.on("input",function(e){!1===e.isComposing&&_x(t)})},zx=function(e){var t=bd.setupSelectedState(e);Ix(e),kC(e,t),DC(e,t),dx(e),Ox(e),Fx(e)};function Ux(u){var s,n,r,o=Yt.each,c=Oh.BACKSPACE,l=Oh.DELETE,f=u.dom,d=u.selection,e=u.settings,t=u.parser,i=de.gecko,a=de.ie,m=de.webkit,g="data:text/mce-internal,",p=a?"Text":"URL",h=function(e,t){try{u.getDoc().execCommand(e,!1,t)}catch(n){}},v=function(e){return e.isDefaultPrevented()},b=function(){u.shortcuts.add("meta+a",null,"SelectAll")},y=function(){u.on("keydown",function(e){if(!v(e)&&e.keyCode===c&&d.isCollapsed()&&0===d.getRng().startOffset){var t=d.getNode().previousSibling;if(t&&t.nodeName&&"table"===t.nodeName.toLowerCase())return e.preventDefault(),!1}})},C=function(){u.inline||(u.contentStyles.push("body {min-height: 150px}"),u.on("click",function(e){var t;if("HTML"===e.target.nodeName){if(11<de.ie)return void u.getBody().focus();t=u.selection.getRng(),u.getBody().focus(),u.selection.setRng(t),u.selection.normalize(),u.nodeChanged()}}))};return u.on("keydown",function(e){var t,n,r,o,i;if(!v(e)&&e.keyCode===Oh.BACKSPACE&&(n=(t=d.getRng()).startContainer,r=t.startOffset,o=f.getRoot(),i=n,t.collapsed&&0===r)){for(;i&&i.parentNode&&i.parentNode.firstChild===i&&i.parentNode!==o;)i=i.parentNode;"BLOCKQUOTE"===i.tagName&&(u.formatter.toggle("blockquote",null,i),(t=f.createRng()).setStart(n,0),t.setEnd(n,0),d.setRng(t))}}),s=function(e){var t=f.create("body"),n=e.cloneContents();return t.appendChild(n),d.serializer.serialize(t,{format:"html"})},u.on("keydown",function(e){var t,n,r,o,i,a=e.keyCode;if(!v(e)&&(a===l||a===c)){if(t=u.selection.isCollapsed(),n=u.getBody(),t&&!f.isEmpty(n))return;if(!t&&(r=u.selection.getRng(),o=s(r),(i=f.createRng()).selectNode(u.getBody()),o!==s(i)))return;e.preventDefault(),u.setContent(""),n.firstChild&&f.isBlock(n.firstChild)?u.selection.setCursorLocation(n.firstChild,0):u.selection.setCursorLocation(n,0),u.nodeChanged()}}),de.windowsPhone||u.on("keyup focusin mouseup",function(e){Oh.modifierPressed(e)||d.normalize()},!0),m&&(u.settings.content_editable||f.bind(u.getDoc(),"mousedown mouseup",function(e){var t;if(e.target===u.getDoc().documentElement)if(t=d.getRng(),u.getBody().focus(),"mousedown"===e.type){if(pa(t.startContainer))return;d.placeCaretAt(e.clientX,e.clientY)}else d.setRng(t)}),u.on("click",function(e){var t=e.target;/^(IMG|HR)$/.test(t.nodeName)&&"false"!==f.getContentEditableParent(t)&&(e.preventDefault(),u.selection.select(t),u.nodeChanged()),"A"===t.nodeName&&f.hasClass(t,"mce-item-anchor")&&(e.preventDefault(),d.select(t))}),e.forced_root_block&&u.on("init",function(){h("DefaultParagraphSeparator",e.forced_root_block)}),u.on("init",function(){u.dom.bind(u.getBody(),"submit",function(e){e.preventDefault()})}),y(),t.addNodeFilter("br",function(e){for(var t=e.length;t--;)"Apple-interchange-newline"===e[t].attr("class")&&e[t].remove()}),de.iOS?(u.inline||u.on("keydown",function(){document.activeElement===document.body&&u.getWin().focus()}),C(),u.on("click",function(e){var t=e.target;do{if("A"===t.tagName)return void e.preventDefault()}while(t=t.parentNode)}),u.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")):b()),11<=de.ie&&(C(),y()),de.ie&&(b(),h("AutoUrlDetect",!1),u.on("dragstart",function(e){var t,n,r;(t=e).dataTransfer&&(u.selection.isCollapsed()&&"IMG"===t.target.tagName&&d.select(t.target),0<(n=u.selection.getContent()).length&&(r=g+escape(u.id)+","+escape(n),t.dataTransfer.setData(p,r)))}),u.on("drop",function(e){if(!v(e)){var t=(i=e).dataTransfer&&(a=i.dataTransfer.getData(p))&&0<=a.indexOf(g)?(a=a.substr(g.length).split(","),{id:unescape(a[0]),html:unescape(a[1])}):null;if(t&&t.id!==u.id){e.preventDefault();var n=uy(e.x,e.y,u.getDoc());d.setRng(n),r=t.html,o=!0,u.queryCommandSupported("mceInsertClipboardContent")?u.execCommand("mceInsertClipboardContent",!1,{content:r,internal:o}):u.execCommand("mceInsertContent",!1,r)}}var r,o,i,a})),i&&(u.on("keydown",function(e){if(!v(e)&&e.keyCode===c){if(!u.getBody().getElementsByTagName("hr").length)return;if(d.isCollapsed()&&0===d.getRng().startOffset){var t=d.getNode(),n=t.previousSibling;if("HR"===t.nodeName)return f.remove(t),void e.preventDefault();n&&n.nodeName&&"hr"===n.nodeName.toLowerCase()&&(f.remove(n),e.preventDefault())}}}),Range.prototype.getClientRects||u.on("mousedown",function(e){if(!v(e)&&"HTML"===e.target.nodeName){var t=u.getBody();t.blur(),ve.setEditorTimeout(u,function(){t.focus()})}}),n=function(){var e=f.getAttribs(d.getStart().cloneNode(!1));return function(){var t=d.getStart();t!==u.getBody()&&(f.setAttrib(t,"style",null),o(e,function(e){t.setAttributeNode(e.cloneNode(!0))}))}},r=function(){return!d.isCollapsed()&&f.getParent(d.getStart(),f.isBlock)!==f.getParent(d.getEnd(),f.isBlock)},u.on("keypress",function(e){var t;if(!v(e)&&(8===e.keyCode||46===e.keyCode)&&r())return t=n(),u.getDoc().execCommand("delete",!1,null),t(),e.preventDefault(),!1}),f.bind(u.getDoc(),"cut",function(e){var t;!v(e)&&r()&&(t=n(),ve.setEditorTimeout(u,function(){t()}))}),e.readonly||u.on("BeforeExecCommand MouseDown",function(){h("StyleWithCSS",!1),h("enableInlineTableEditing",!1),e.object_resizing||h("enableObjectResizing",!1)}),u.on("SetContent ExecCommand",function(e){"setcontent"!==e.type&&"mceInsertLink"!==e.command||o(f.select("a"),function(e){var t=e.parentNode,n=f.getRoot();if(t.lastChild===e){for(;t&&!f.isBlock(t);){if(t.parentNode.lastChild!==t||t===n)return;t=t.parentNode}f.add(t,"br",{"data-mce-bogus":1})}})}),u.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}"),de.mac&&u.on("keydown",function(e){!Oh.metaKeyPressed(e)||e.shiftKey||37!==e.keyCode&&39!==e.keyCode||(e.preventDefault(),u.selection.getSel().modify("move",37===e.keyCode?"backward":"forward","lineboundary"))}),y()),{refreshContentEditable:function(){},isHidden:function(){var e;return!i||u.removed?0:!(e=u.selection.getSel())||!e.rangeCount||0===e.rangeCount}}}var Vx=function(e){return _o.isElement(e)&&mo(rr.fromDom(e))},Hx=function(t){t.on("click",function(e){3<=e.detail&&function(e){var t=e.selection.getRng(),n=du.fromRangeStart(t),r=du.fromRangeEnd(t);if(du.isElementPosition(n)){var o=n.container();Vx(o)&&ic.firstPositionIn(o).each(function(e){return t.setStart(e.container(),e.offset())})}du.isElementPosition(r)&&(o=n.container(),Vx(o)&&ic.lastPositionIn(o).each(function(e){return t.setEnd(e.container(),e.offset())})),e.selection.setRng(il(t))}(t)})},jx=function(e){var t,n;(t=e).on("click",function(e){t.dom.getParent(e.target,"details")&&e.preventDefault()}),(n=e).parser.addNodeFilter("details",function(e){F(e,function(e){e.attr("data-mce-open",e.attr("open")),e.attr("open","open")})}),n.serializer.addNodeFilter("details",function(e){F(e,function(e){var t=e.attr("data-mce-open");e.attr("open",R(t)?t:null),e.attr("data-mce-open",null)})})},qx=gi.DOM,$x=function(e){var t;e.bindPendingEventDelegates(),e.initialized=!0,e.fire("init"),e.focus(!0),e.nodeChanged({initial:!0}),e.execCallback("init_instance_callback",e),(t=e).settings.auto_focus&&ve.setEditorTimeout(t,function(){var e;(e=!0===t.settings.auto_focus?t:t.editorManager.get(t.settings.auto_focus)).destroyed||e.focus()},100)},Wx=function(t,e){var n,r,u,o,i,a,s,c,l,f=t.settings,d=t.getElement(),m=t.getDoc();f.inline||(t.getElement().style.visibility=t.orgVisibility),e||f.content_editable||(m.open(),m.write(t.iframeHTML),m.close()),f.content_editable&&(t.on("remove",function(){var e=this.getBody();qx.removeClass(e,"mce-content-body"),qx.removeClass(e,"mce-edit-focus"),qx.setAttrib(e,"contentEditable",null)}),qx.addClass(d,"mce-content-body"),t.contentDocument=m=f.content_document||document,t.contentWindow=f.content_window||window,t.bodyElement=d,f.content_document=f.content_window=null,f.root_name=d.nodeName.toLowerCase()),(n=t.getBody()).disabled=!0,t.readonly=f.readonly,t.readonly||(t.inline&&"static"===qx.getStyle(n,"position",!0)&&(n.style.position="relative"),n.contentEditable=t.getParam("content_editable_state",!0)),n.disabled=!1,t.editorUpload=Vp(t),t.schema=ti(f),t.dom=gi(m,{keep_values:!0,url_converter:t.convertURL,url_converter_scope:t,hex_colors:f.force_hex_style_colors,class_filter:f.class_filter,update_styles:!0,root_element:t.inline?t.getBody():null,collect:f.content_editable,schema:t.schema,contentCssCors:Rm(t),onSetAttrib:function(e){t.fire("SetAttrib",e)}}),t.parser=((o=qb((u=t).settings,u.schema)).addAttributeFilter("src,href,style,tabindex",function(e,t){for(var n,r,o,i=e.length,a=u.dom;i--;)if(r=(n=e[i]).attr(t),o="data-mce-"+t,!n.attributes.map[o]){if(0===r.indexOf("data:")||0===r.indexOf("blob:"))continue;"style"===t?((r=a.serializeStyle(a.parseStyle(r),n.name)).length||(r=null),n.attr(o,r),n.attr(t,r)):"tabindex"===t?(n.attr(o,r),n.attr(t,null)):n.attr(o,u.convertURL(r,t,n.name))}}),o.addNodeFilter("script",function(e){for(var t,n,r=e.length;r--;)0!==(n=(t=e[r]).attr("type")||"no/type").indexOf("mce-")&&t.attr("type","mce-"+n)}),o.addNodeFilter("#cdata",function(e){for(var t,n=e.length;n--;)(t=e[n]).type=8,t.name="#comment",t.value="[CDATA["+t.value+"]]"}),o.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div",function(e){for(var t,n=e.length,r=u.schema.getNonEmptyElements();n--;)(t=e[n]).isEmpty(r)&&0===t.getAll("br").length&&(t.append(new Ob("br",1)).shortEnded=!0)}),o),t.serializer=Yb(f,t),t.selection=Ly(t.dom,t.getWin(),t.serializer,t),t.annotator=Uc(t),t.formatter=xb(t),t.undoManager=uv(t),t._nodeChangeDispatcher=new Qp(t),t._selectionOverrides=zh(t),jx(t),Hx(t),zx(t),Wp(t),t.fire("PreInit"),f.browser_spellcheck||f.gecko_spellcheck||(m.body.spellcheck=!1,qx.setAttrib(n,"spellcheck","false")),t.quirks=Ux(t),t.fire("PostRender"),f.directionality&&(n.dir=f.directionality),f.nowrap&&(n.style.whiteSpace="nowrap"),f.protect&&t.on("BeforeSetContent",function(t){Yt.each(f.protect,function(e){t.content=t.content.replace(e,function(e){return"\x3c!--mce:protected "+escape(e)+"--\x3e"})})}),t.on("SetContent",function(){t.addVisual(t.getBody())}),t.load({initial:!0,format:"html"}),t.startContent=t.getContent({format:"raw"}),t.on("compositionstart compositionend",function(e){t.composing="compositionstart"===e.type}),0<t.contentStyles.length&&(r="",Yt.each(t.contentStyles,function(e){r+=e+"\r\n"}),t.dom.addStyle(r)),(i=t,i.inline?qx.styleSheetLoader:i.dom.styleSheetLoader).loadAll(t.contentCSS,function(e){$x(t)},function(e){$x(t)}),f.content_style&&(a=t,s=f.content_style,c=rr.fromDom(a.getDoc().head),l=rr.fromTag("style"),hr(l,"type","text/css"),ki(l,rr.fromText(s)),ki(c,l))},Kx=gi.DOM,Xx=function(e,t){var n,r,o,i,a,u,s,c=e.editorManager.translate("Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help"),l=(n=e.id,r=c,o=t.height,i=am(e),s=rr.fromTag("iframe"),vr(s,i),vr(s,{id:n+"_ifr",frameBorder:"0",allowTransparency:"true",title:r}),xr(s,{width:"100%",height:(a=o,u="number"==typeof a?a+"px":a,u||""),display:"block"}),s).dom();l.onload=function(){l.onload=null,e.fire("load")};var f,d,m,g,p=function(e,t){if(document.domain!==window.location.hostname&&de.ie&&de.ie<12){var n=Up.uuid("mce");e[n]=function(){Wx(e)};var r='javascript:(function(){document.open();document.domain="'+document.domain+'";var ed = window.parent.tinymce.get("'+e.id+'");document.write(ed.iframeHTML);document.close();ed.'+n+"(true);})()";return Kx.setAttrib(t,"src",r),!0}return!1}(e,l);return e.contentAreaContainer=t.iframeContainer,e.iframeElement=l,e.iframeHTML=(g=um(f=e)+"<html><head>",sm(f)!==f.documentBaseUrl&&(g+='<base href="'+f.documentBaseURI.getURI()+'" />'),g+='<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />',d=cm(f),m=lm(f),fm(f)&&(g+='<meta http-equiv="Content-Security-Policy" content="'+fm(f)+'" />'),g+='</head><body id="'+d+'" class="mce-content-body '+m+'" data-id="'+f.id+'"><br></body></html>'),Kx.add(t.iframeContainer,l),p},Yx=function(e,t){var n=Xx(e,t);t.editorContainer&&(Kx.get(t.editorContainer).style.display=e.orgDisplay,e.hidden=Kx.isHidden(t.editorContainer)),e.getElement().style.display="none",Kx.setAttrib(e.id,"aria-hidden","true"),n||Wx(e)},Gx=gi.DOM,Jx=function(t,n,e){var r,o,i=Sp.get(e);if(r=Sp.urls[e]||t.documentBaseUrl.replace(/\/$/,""),e=Yt.trim(e),i&&-1===Yt.inArray(n,e)){if(Yt.each(Sp.dependencies(e),function(e){Jx(t,n,e)}),t.plugins[e])return;o=new i(t,r,t.$),(t.plugins[e]=o).init&&(o.init(t,r),n.push(e))}},Qx=function(e){return e.replace(/^\-/,"")},Zx=function(e){return{editorContainer:e,iframeContainer:e}},ew=function(e){var t,n,r=e.getElement();return e.inline?Zx(null):(t=r,n=Gx.create("div"),Gx.insertAfter(n,t),Zx(n))},tw=function(e){var t,n,r,o,i,a,u,s,c,l,f,d=e.settings,m=e.getElement();return e.orgDisplay=m.style.display,R(d.theme)?(l=(o=e).settings,f=o.getElement(),i=l.width||Gx.getStyle(f,"width")||"100%",a=l.height||Gx.getStyle(f,"height")||f.offsetHeight,u=l.min_height||100,(s=/^[0-9\.]+(|px)$/i).test(""+i)&&(i=Math.max(parseInt(i,10),100)),s.test(""+a)&&(a=Math.max(parseInt(a,10),u)),c=o.theme.renderUI({targetNode:f,width:i,height:a,deltaWidth:l.delta_width,deltaHeight:l.delta_height}),l.content_editable||(a=(c.iframeHeight||a)+("number"==typeof a?c.deltaHeight||0:""))<u&&(a=u),c.height=a,c):P(d.theme)?(r=(t=e).getElement(),(n=t.settings.theme(t,r)).editorContainer.nodeType&&(n.editorContainer.id=n.editorContainer.id||t.id+"_parent"),n.iframeContainer&&n.iframeContainer.nodeType&&(n.iframeContainer.id=n.iframeContainer.id||t.id+"_iframecontainer"),n.height=n.iframeHeight?n.iframeHeight:r.offsetHeight,n):ew(e)},nw=function(t){var e,n,r,o,i,a,u=t.settings,s=t.getElement();return t.rtl=u.rtl_ui||t.editorManager.i18n.rtl,t.editorManager.i18n.setCode(u.language),u.aria_label=u.aria_label||Gx.getAttrib(s,"aria-label",t.getLang("aria.rich_text_area")),t.fire("ScriptsLoaded"),o=(n=t).settings.theme,R(o)?(n.settings.theme=Qx(o),r=kp.get(o),n.theme=new r(n,kp.urls[o]),n.theme.init&&n.theme.init(n,kp.urls[o]||n.documentBaseUrl.replace(/\/$/,""),n.$)):n.theme={},i=t,a=[],Yt.each(i.settings.plugins.split(/[ ,]/),function(e){Jx(i,a,Qx(e))}),e=tw(t),t.editorContainer=e.editorContainer?e.editorContainer:null,u.content_css&&Yt.each(Yt.explode(u.content_css),function(e){t.contentCSS.push(t.documentBaseURI.toAbsolute(e))}),u.content_editable?Wx(t):Yx(t,e)},rw=gi.DOM,ow=function(e){return"-"===e.charAt(0)},iw=function(i,a){var u=yi.ScriptLoader;!function(e,t,n,r){var o=t.settings,i=o.theme;if(R(i)){if(!ow(i)&&!kp.urls.hasOwnProperty(i)){var a=o.theme_url;a?kp.load(i,t.documentBaseURI.toAbsolute(a)):kp.load(i,"themes/"+i+"/theme"+n+".js")}e.loadQueue(function(){kp.waitFor(i,r)})}else r()}(u,i,a,function(){var e,t,n,r,o;e=u,(n=(t=i).settings).language&&"en"!==n.language&&!n.language_url&&(n.language_url=t.editorManager.baseURL+"/langs/"+n.language+".js"),n.language_url&&!t.editorManager.i18n.data[n.language]&&e.add(n.language_url),r=i.settings,o=a,Yt.isArray(r.plugins)&&(r.plugins=r.plugins.join(" ")),Yt.each(r.external_plugins,function(e,t){Sp.load(t,e),r.plugins+=" "+t}),Yt.each(r.plugins.split(/[ ,]/),function(e){if((e=Yt.trim(e))&&!Sp.urls[e])if(ow(e)){e=e.substr(1,e.length);var t=Sp.dependencies(e);Yt.each(t,function(e){var t={prefix:"plugins/",resource:e,suffix:"/plugin"+o+".js"};e=Sp.createUrl(t,e),Sp.load(e.resource,e)})}else Sp.load(e,{prefix:"plugins/",resource:e,suffix:"/plugin"+o+".js"})}),u.loadQueue(function(){i.removed||nw(i)},i,function(e){xp(i,e[0]),i.removed||nw(i)})})},aw=function(t){var e=t.settings,n=t.id,r=function(){rw.unbind(window,"ready",r),t.render()};if(ke.Event.domLoaded){if(t.getElement()&&de.contentEditable){e.inline?t.inline=!0:(t.orgVisibility=t.getElement().style.visibility,t.getElement().style.visibility="hidden");var o=t.getElement().form||rw.getParent(n,"form");o&&(t.formElement=o,e.hidden_input&&!/TEXTAREA|INPUT/i.test(t.getElement().nodeName)&&(rw.insertAfter(rw.create("input",{type:"hidden",name:n}),n),t.hasHiddenInput=!0),t.formEventDelegate=function(e){t.fire(e.type,e)},rw.bind(o,"submit reset",t.formEventDelegate),t.on("reset",function(){t.setContent(t.startContent,{format:"raw"})}),!e.submit_patch||o.submit.nodeType||o.submit.length||o._mceOldSubmit||(o._mceOldSubmit=o.submit,o.submit=function(){return t.editorManager.triggerSave(),t.setDirty(!1),o._mceOldSubmit(o)})),t.windowManager=hp(t),t.notificationManager=pp(t),"xml"===e.encoding&&t.on("GetContent",function(e){e.save&&(e.content=rw.encode(e.content))}),e.add_form_submit_trigger&&t.on("submit",function(){t.initialized&&t.save()}),e.add_unload_trigger&&(t._beforeUnload=function(){!t.initialized||t.destroyed||t.isHidden()||t.save({format:"raw",no_events:!0,set_dirty:!1})},t.editorManager.on("BeforeUnload",t._beforeUnload)),t.editorManager.add(t),iw(t,t.suffix)}}else rw.bind(window,"ready",r)},uw=function(e,t,n){var r=e.sidebars?e.sidebars:[];r.push({name:t,settings:n}),e.sidebars=r},sw=Yt.each,cw=Yt.trim,lw="source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),fw={ftp:21,http:80,https:443,mailto:25},dw=function(r,e){var t,n,o=this;if(r=cw(r),t=(e=o.settings=e||{}).base_uri,/^([\w\-]+):([^\/]{2})/i.test(r)||/^\s*#/.test(r))o.source=r;else{var i=0===r.indexOf("//");0!==r.indexOf("/")||i||(r=(t&&t.protocol||"http")+"://mce_host"+r),/^[\w\-]*:?\/\//.test(r)||(n=e.base_uri?e.base_uri.path:new dw(document.location.href).directory,""==e.base_uri.protocol?r="//mce_host"+o.toAbsPath(n,r):(r=/([^#?]*)([#?]?.*)/.exec(r),r=(t&&t.protocol||"http")+"://mce_host"+o.toAbsPath(n,r[1])+r[2])),r=r.replace(/@@/g,"(mce_at)"),r=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(r),sw(lw,function(e,t){var n=r[t];n&&(n=n.replace(/\(mce_at\)/g,"@@")),o[e]=n}),t&&(o.protocol||(o.protocol=t.protocol),o.userInfo||(o.userInfo=t.userInfo),o.port||"mce_host"!==o.host||(o.port=t.port),o.host&&"mce_host"!==o.host||(o.host=t.host),o.source=""),i&&(o.protocol="")}};dw.prototype={setPath:function(e){e=/^(.*?)\/?(\w+)?$/.exec(e),this.path=e[0],this.directory=e[1],this.file=e[2],this.source="",this.getURI()},toRelative:function(e){var t;if("./"===e)return e;if("mce_host"!==(e=new dw(e,{base_uri:this})).host&&this.host!==e.host&&e.host||this.port!==e.port||this.protocol!==e.protocol&&""!==e.protocol)return e.getURI();var n=this.getURI(),r=e.getURI();return n===r||"/"===n.charAt(n.length-1)&&n.substr(0,n.length-1)===r?n:(t=this.toRelPath(this.path,e.path),e.query&&(t+="?"+e.query),e.anchor&&(t+="#"+e.anchor),t)},toAbsolute:function(e,t){return(e=new dw(e,{base_uri:this})).getURI(t&&this.isSameOrigin(e))},isSameOrigin:function(e){if(this.host==e.host&&this.protocol==e.protocol){if(this.port==e.port)return!0;var t=fw[this.protocol];if(t&&(this.port||t)==(e.port||t))return!0}return!1},toRelPath:function(e,t){var n,r,o,i=0,a="";if(e=(e=e.substring(0,e.lastIndexOf("/"))).split("/"),n=t.split("/"),e.length>=n.length)for(r=0,o=e.length;r<o;r++)if(r>=n.length||e[r]!==n[r]){i=r+1;break}if(e.length<n.length)for(r=0,o=n.length;r<o;r++)if(r>=e.length||e[r]!==n[r]){i=r+1;break}if(1===i)return t;for(r=0,o=e.length-(i-1);r<o;r++)a+="../";for(r=i-1,o=n.length;r<o;r++)a+=r!==i-1?"/"+n[r]:n[r];return a},toAbsPath:function(e,t){var n,r,o,i=0,a=[];for(r=/\/$/.test(t)?"/":"",e=e.split("/"),t=t.split("/"),sw(e,function(e){e&&a.push(e)}),e=a,n=t.length-1,a=[];0<=n;n--)0!==t[n].length&&"."!==t[n]&&(".."!==t[n]?0<i?i--:a.push(t[n]):i++);return 0!==(o=(n=e.length-i)<=0?a.reverse().join("/"):e.slice(0,n).join("/")+"/"+a.reverse().join("/")).indexOf("/")&&(o="/"+o),r&&o.lastIndexOf("/")!==o.length-1&&(o+=r),o},getURI:function(e){var t,n=this;return n.source&&!e||(t="",e||(n.protocol?t+=n.protocol+"://":t+="//",n.userInfo&&(t+=n.userInfo+"@"),n.host&&(t+=n.host),n.port&&(t+=":"+n.port)),n.path&&(t+=n.path),n.query&&(t+="?"+n.query),n.anchor&&(t+="#"+n.anchor),n.source=t),n.source}},dw.parseDataUri=function(e){var t,n;return e=decodeURIComponent(e).split(","),(n=/data:([^;]+)/.exec(e[0]))&&(t=n[1]),{type:t,data:e[1]}},dw.getDocumentBaseUrl=function(e){var t;return t=0!==e.protocol.indexOf("http")&&"file:"!==e.protocol?e.href:e.protocol+"//"+e.host+e.pathname,/^[^:]+:\/\/\/?[^\/]+\//.test(t)&&(t=t.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,""),/[\/\\]$/.test(t)||(t+="/")),t};var mw=function(e,t,n){var r,o,i,a,u;if(t.format=t.format?t.format:"html",t.get=!0,t.getInner=!0,t.no_events||e.fire("BeforeGetContent",t),"raw"===t.format)r=Yt.trim(qh.trimExternal(e.serializer,n.innerHTML));else if("text"===t.format)r=la(n.innerText||n.textContent);else{if("tree"===t.format)return e.serializer.serialize(n,t);i=(o=e).serializer.serialize(n,t),a=mm(o),u=new RegExp("^(<"+a+"[^>]*>(&nbsp;|&#160;|\\s|\xa0|<br \\/>|)<\\/"+a+">[\r\n]*|<br \\/>[\r\n]*)$"),r=i.replace(u,"")}return"text"===t.format||yo(rr.fromDom(n))?t.content=r:t.content=Yt.trim(r),t.no_events||e.fire("GetContent",t),t.content},gw=function(e,t){t(e),e.firstChild&&gw(e.firstChild,t),e.next&&gw(e.next,t)},pw=function(e,t,n){var r=function(e,n,t){var r={},o={},i=[];for(var a in t.firstChild&&gw(t.firstChild,function(t){F(e,function(e){e.name===t.name&&(r[e.name]?r[e.name].nodes.push(t):r[e.name]={filter:e,nodes:[t]})}),F(n,function(e){"string"==typeof t.attr(e.name)&&(o[e.name]?o[e.name].nodes.push(t):o[e.name]={filter:e,nodes:[t]})})}),r)r.hasOwnProperty(a)&&i.push(r[a]);for(var a in o)o.hasOwnProperty(a)&&i.push(o[a]);return i}(e,t,n);F(r,function(t){F(t.filter.callbacks,function(e){e(t.nodes,t.filter.name,{})})})},hw=function(e){return e instanceof Ob},vw=function(e,t){var r;e.dom.setHTML(e.getBody(),t),ap(r=e)&&ic.firstPositionIn(r.getBody()).each(function(e){var t=e.getNode(),n=_o.isTable(t)?ic.firstPositionIn(t).getOr(e):e;r.selection.setRng(n.toRange())})},bw=function(u,s,c){return void 0===c&&(c={}),c.format=c.format?c.format:"html",c.set=!0,c.content=hw(s)?"":s,hw(s)||c.no_events||(u.fire("BeforeSetContent",c),s=c.content),A.from(u.getBody()).fold(j(s),function(e){return hw(s)?function(e,t,n,r){pw(e.parser.getNodeFilters(),e.parser.getAttributeFilters(),n);var o=rl({validate:e.validate},e.schema).serialize(n);return r.content=yo(rr.fromDom(t))?o:Yt.trim(o),vw(e,r.content),r.no_events||e.fire("SetContent",r),n}(u,e,s,c):(t=u,n=e,o=c,0===(r=s).length||/^\s+$/.test(r)?(a='<br data-mce-bogus="1">',"TABLE"===n.nodeName?r="<tr><td>"+a+"</td></tr>":/^(UL|OL)$/.test(n.nodeName)&&(r="<li>"+a+"</li>"),(i=mm(t))&&t.schema.isValidChild(n.nodeName.toLowerCase(),i.toLowerCase())?(r=a,r=t.dom.createHTML(i,t.settings.forced_root_block_attrs,r)):r||(r='<br data-mce-bogus="1">'),vw(t,r),t.fire("SetContent",o)):("raw"!==o.format&&(r=rl({validate:t.validate},t.schema).serialize(t.parser.parse(r,{isRootContent:!0,insert:!0}))),o.content=yo(rr.fromDom(n))?r:Yt.trim(r),vw(t,o.content),o.no_events||t.fire("SetContent",o)),o.content);var t,n,r,o,i,a})},yw=gi.DOM,Cw=function(e){return A.from(e).each(function(e){return e.destroy()})},xw=function(e){if(!e.removed){var t=e._selectionOverrides,n=e.editorUpload,r=e.getBody(),o=e.getElement();r&&e.save({is_removing:!0}),e.removed=!0,e.unbindAllNativeEvents(),e.hasHiddenInput&&o&&yw.remove(o.nextSibling),!e.inline&&r&&(i=e,yw.setStyle(i.id,"display",i.orgDisplay)),Bg(e),e.editorManager.remove(e),yw.remove(e.getContainer()),Cw(t),Cw(n),e.destroy()}var i},ww=function(e,t){var n,r,o,i=e.selection,a=e.dom;e.destroyed||(t||e.removed?(t||(e.editorManager.off("beforeunload",e._beforeUnload),e.theme&&e.theme.destroy&&e.theme.destroy(),Cw(i),Cw(a)),(r=(n=e).formElement)&&(r._mceOldSubmit&&(r.submit=r._mceOldSubmit,r._mceOldSubmit=null),yw.unbind(r,"submit reset",n.formEventDelegate)),(o=e).contentAreaContainer=o.formElement=o.container=o.editorContainer=null,o.bodyElement=o.contentDocument=o.contentWindow=null,o.iframeElement=o.targetElm=null,o.selection&&(o.selection=o.selection.win=o.selection.dom=o.selection.dom.doc=null),e.destroyed=!0):e.remove())},Nw=gi.DOM,Ew=Yt.extend,Sw=Yt.each,kw=Yt.resolve,Tw=de.ie,Aw=function(e,t,n){var r,o,i,a,u,s,c,l=this,f=l.documentBaseUrl=n.documentBaseURL,d=n.baseURI;r=l,o=e,i=f,a=n.defaultSettings,u=t,c={id:o,theme:"modern",delta_width:0,delta_height:0,popup_css:"",plugins:"",document_base_url:i,add_form_submit_trigger:!0,submit_patch:!0,add_unload_trigger:!0,convert_urls:!0,relative_urls:!0,remove_script_host:!0,object_resizing:!0,doctype:"<!DOCTYPE html>",visual:!0,font_size_style_values:"xx-small,x-small,small,medium,large,x-large,xx-large",font_size_legacy_values:"xx-small,small,medium,large,x-large,xx-large,300%",forced_root_block:"p",hidden_input:!0,render_ui:!0,indentation:"40px",inline_styles:!0,convert_fonts_to_spans:!0,indent:"simple",indent_before:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",indent_after:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",entity_encoding:"named",url_converter:(s=r).convertURL,url_converter_scope:s,ie7_compat:!0},t=bl(fl,c,a,u),l.settings=t,wi.language=t.language||"en",wi.languageLoad=t.language_load,wi.baseURL=n.baseURL,l.id=e,l.setDirty(!1),l.plugins={},l.documentBaseURI=new dw(t.document_base_url,{base_uri:d}),l.baseURI=d,l.contentCSS=[],l.contentStyles=[],l.shortcuts=new Gg(l),l.loadedCSS={},l.editorCommands=new Eg(l),l.suffix=n.suffix,l.editorManager=n,l.inline=t.inline,l.buttons={},l.menuItems={},t.cache_suffix&&(de.cacheSuffix=t.cache_suffix.replace(/^[\?\&]+/,"")),!1===t.override_viewport&&(de.overrideViewPort=!1),n.fire("SetupEditor",{editor:l}),l.execCallback("setup",l),l.$=pn.overrideDefaults(function(){return{context:l.inline?l.getBody():l.getDoc(),element:l.getBody()}})};Ew(Aw.prototype={render:function(){aw(this)},focus:function(e){ip(this,e)},hasFocus:function(){return ap(this)},execCallback:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r,o=this.settings[e];if(o)return this.callbackLookup&&(r=this.callbackLookup[e])&&(o=r.func,r=r.scope),"string"==typeof o&&(r=(r=o.replace(/\.\w+$/,""))?kw(r):0,o=kw(o),this.callbackLookup=this.callbackLookup||{},this.callbackLookup[e]={func:o,scope:r}),o.apply(r||this,Array.prototype.slice.call(arguments,1))},translate:function(e){if(e&&Yt.is(e,"string")){var n=this.settings.language||"en",r=this.editorManager.i18n;e=r.data[n+"."+e]||e.replace(/\{\#([^\}]+)\}/g,function(e,t){return r.data[n+"."+t]||"{#"+t+"}"})}return this.editorManager.translate(e)},getLang:function(e,t){return this.editorManager.i18n.data[(this.settings.language||"en")+"."+e]||(t!==undefined?t:"{#"+e+"}")},getParam:function(e,t,n){return xl(this,e,t,n)},nodeChanged:function(e){this._nodeChangeDispatcher.nodeChanged(e)},addButton:function(e,t){var n=this;t.cmd&&(t.onclick=function(){n.execCommand(t.cmd)}),t.stateSelector&&"undefined"==typeof t.active&&(t.active=!1),t.text||t.icon||(t.icon=e),t.tooltip=t.tooltip||t.title,n.buttons[e]=t},addSidebar:function(e,t){return uw(this,e,t)},addMenuItem:function(e,t){var n=this;t.cmd&&(t.onclick=function(){n.execCommand(t.cmd)}),n.menuItems[e]=t},addContextToolbar:function(e,t){var n,r=this;r.contextToolbars=r.contextToolbars||[],"string"==typeof e&&(n=e,e=function(e){return r.dom.is(e,n)}),r.contextToolbars.push({id:Up.uuid("mcet"),predicate:e,items:t})},addCommand:function(e,t,n){this.editorCommands.addCommand(e,t,n)},addQueryStateHandler:function(e,t,n){this.editorCommands.addQueryStateHandler(e,t,n)},addQueryValueHandler:function(e,t,n){this.editorCommands.addQueryValueHandler(e,t,n)},addShortcut:function(e,t,n,r){this.shortcuts.add(e,t,n,r)},execCommand:function(e,t,n,r){return this.editorCommands.execCommand(e,t,n,r)},queryCommandState:function(e){return this.editorCommands.queryCommandState(e)},queryCommandValue:function(e){return this.editorCommands.queryCommandValue(e)},queryCommandSupported:function(e){return this.editorCommands.queryCommandSupported(e)},show:function(){this.hidden&&(this.hidden=!1,this.inline?this.getBody().contentEditable=!0:(Nw.show(this.getContainer()),Nw.hide(this.id)),this.load(),this.fire("show"))},hide:function(){var e=this,t=e.getDoc();e.hidden||(Tw&&t&&!e.inline&&t.execCommand("SelectAll"),e.save(),e.inline?(e.getBody().contentEditable=!1,e===e.editorManager.focusedEditor&&(e.editorManager.focusedEditor=null)):(Nw.hide(e.getContainer()),Nw.setStyle(e.id,"display",e.orgDisplay)),e.hidden=!0,e.fire("hide"))},isHidden:function(){return!!this.hidden},setProgressState:function(e,t){this.fire("ProgressState",{state:e,time:t})},load:function(e){var t,n=this.getElement();return this.removed?"":n?((e=e||{}).load=!0,t=this.setContent(n.value!==undefined?n.value:n.innerHTML,e),e.element=n,e.no_events||this.fire("LoadContent",e),e.element=n=null,t):void 0},save:function(e){var t,n,r=this,o=r.getElement();if(o&&r.initialized&&!r.removed)return(e=e||{}).save=!0,e.element=o,e.content=r.getContent(e),e.no_events||r.fire("SaveContent",e),"raw"===e.format&&r.fire("RawSaveContent",e),t=e.content,/TEXTAREA|INPUT/i.test(o.nodeName)?o.value=t:(!e.is_removing&&r.inline||(o.innerHTML=t),(n=Nw.getParent(r.id,"form"))&&Sw(n.elements,function(e){if(e.name===r.id)return e.value=t,!1})),e.element=o=null,!1!==e.set_dirty&&r.setDirty(!1),t},setContent:function(e,t){return bw(this,e,t)},getContent:function(e){return t=this,void 0===(n=e)&&(n={}),A.from(t.getBody()).fold(j("tree"===n.format?new Ob("body",11):""),function(e){return mw(t,n,e)});var t,n},insertContent:function(e,t){t&&(e=Ew({content:e},t)),this.execCommand("mceInsertContent",!1,e)},isDirty:function(){return!this.isNotDirty},setDirty:function(e){var t=!this.isNotDirty;this.isNotDirty=!e,e&&e!==t&&this.fire("dirty")},setMode:function(e){var t,n;(n=e)!==zg(t=this)&&(t.initialized?Fg(t,"readonly"===n):t.on("init",function(){Fg(t,"readonly"===n)}),Og(t,n))},getContainer:function(){return this.container||(this.container=Nw.get(this.editorContainer||this.id+"_parent")),this.container},getContentAreaContainer:function(){return this.contentAreaContainer},getElement:function(){return this.targetElm||(this.targetElm=Nw.get(this.id)),this.targetElm},getWin:function(){var e;return this.contentWindow||(e=this.iframeElement)&&(this.contentWindow=e.contentWindow),this.contentWindow},getDoc:function(){var e;return this.contentDocument||(e=this.getWin())&&(this.contentDocument=e.document),this.contentDocument},getBody:function(){var e=this.getDoc();return this.bodyElement||(e?e.body:null)},convertURL:function(e,t,n){var r=this.settings;return r.urlconverter_callback?this.execCallback("urlconverter_callback",e,n,!0,t):!r.convert_urls||n&&"LINK"===n.nodeName||0===e.indexOf("file:")||0===e.length?e:r.relative_urls?this.documentBaseURI.toRelative(e):e=this.documentBaseURI.toAbsolute(e,r.remove_script_host)},addVisual:function(e){var n,r=this,o=r.settings,i=r.dom;e=e||r.getBody(),r.hasVisual===undefined&&(r.hasVisual=o.visual),Sw(i.select("table,a",e),function(e){var t;switch(e.nodeName){case"TABLE":return n=o.visual_table_class||"mce-item-table",void((t=i.getAttrib(e,"border"))&&"0"!==t||!r.hasVisual?i.removeClass(e,n):i.addClass(e,n));case"A":return void(i.getAttrib(e,"href")||(t=i.getAttrib(e,"name")||e.id,n=o.visual_anchor_class||"mce-item-anchor",t&&r.hasVisual?i.addClass(e,n):i.removeClass(e,n)))}}),r.fire("VisualAid",{element:e,hasVisual:r.hasVisual})},remove:function(){xw(this)},destroy:function(e){ww(this,e)},uploadImages:function(e){return this.editorUpload.uploadImages(e)},_scanForImages:function(){return this.editorUpload.scanForImages()}},$g);var Rw,_w,Dw,Bw={isEditorUIElement:function(e){return-1!==e.className.toString().indexOf("mce-")}},Ow=function(n,e){var t,r;tr.detect().browser.isIE()?(r=n).on("focusout",function(){gg(r)}):(t=e,n.on("mouseup touchend",function(e){t.throttle()})),n.on("keyup nodechange",function(e){var t;"nodechange"===(t=e).type&&t.selectionChange||gg(n)})},Pw=function(e){var t,n,r,o=Di(function(){gg(e)},0);e.inline&&(t=e,n=o,r=function(){n.throttle()},gi.DOM.bind(document,"mouseup",r),t.on("remove",function(){gi.DOM.unbind(document,"mouseup",r)})),e.on("init",function(){Ow(e,o)}),e.on("remove",function(){o.cancel()})},Lw=gi.DOM,Iw=function(e){return Bw.isEditorUIElement(e)},Mw=function(t,e){var n=t?t.settings.custom_ui_selector:"";return null!==Lw.getParent(e,function(e){return Iw(e)||!!n&&t.dom.is(e,n)})},Fw=function(r,e){var t=e.editor;Pw(t),t.on("focusin",function(){var e=r.focusedEditor;e!==this&&(e&&e.fire("blur",{focusedEditor:this}),r.setActive(this),(r.focusedEditor=this).fire("focus",{blurredEditor:e}),this.focus(!0))}),t.on("focusout",function(){var t=this;ve.setEditorTimeout(t,function(){var e=r.focusedEditor;Mw(t,function(){try{return document.activeElement}catch(e){return document.body}}())||e!==t||(t.fire("blur",{focusedEditor:null}),r.focusedEditor=null)})}),Rw||(Rw=function(e){var t,n=r.activeEditor;t=e.target,n&&t.ownerDocument===document&&(t===document.body||Mw(n,t)||r.focusedEditor!==n||(n.fire("blur",{focusedEditor:null}),r.focusedEditor=null))},Lw.bind(document,"focusin",Rw))},zw=function(e,t){e.focusedEditor===t.editor&&(e.focusedEditor=null),e.activeEditor||(Lw.unbind(document,"focusin",Rw),Rw=null)},Uw=function(e){e.on("AddEditor",d(Fw,e)),e.on("RemoveEditor",d(zw,e))},Vw={},Hw="en",jw={setCode:function(e){e&&(Hw=e,this.rtl=!!this.data[e]&&"rtl"===this.data[e]._dir)},getCode:function(){return Hw},rtl:!1,add:function(e,t){var n=Vw[e];for(var r in n||(Vw[e]=n={}),t)n[r]=t[r];this.setCode(e)},translate:function(e){var t=Vw[Hw]||{},n=function(e){return Yt.is(e,"function")?Object.prototype.toString.call(e):r(e)?"":""+e},r=function(e){return""===e||null===e||Yt.is(e,"undefined")},o=function(e){return e=n(e),Yt.hasOwn(t,e)?n(t[e]):e};if(r(e))return"";if(Yt.is(e,"object")&&Yt.hasOwn(e,"raw"))return n(e.raw);if(Yt.is(e,"array")){var i=e.slice(1);e=o(e[0]).replace(/\{([0-9]+)\}/g,function(e,t){return Yt.hasOwn(i,t)?n(i[t]):e})}return o(e).replace(/{context:\w+}$/,"")},data:Vw},qw=gi.DOM,$w=Yt.explode,Ww=Yt.each,Kw=Yt.extend,Xw=0,Yw=!1,Gw=[],Jw=[],Qw=function(t){Ww(Dw.get(),function(e){"scroll"===t.type?e.fire("ScrollWindow",t):e.fire("ResizeWindow",t)})},Zw=function(e){e!==Yw&&(e?pn(window).on("resize scroll",Qw):pn(window).off("resize scroll",Qw),Yw=e)},eN=function(t){var e=Jw;delete Gw[t.id];for(var n=0;n<Gw.length;n++)if(Gw[n]===t){Gw.splice(n,1);break}return Jw=z(Jw,function(e){return t!==e}),Dw.activeEditor===t&&(Dw.activeEditor=0<Jw.length?Jw[0]:null),Dw.focusedEditor===t&&(Dw.focusedEditor=null),e.length!==Jw.length};Kw(Dw={defaultSettings:{},$:pn,majorVersion:"4",minorVersion:"9.2",releaseDate:"2018-12-17",editors:Gw,i18n:jw,activeEditor:null,settings:{},setup:function(){var e,t,n,r,o="";if(t=dw.getDocumentBaseUrl(document.location),/^[^:]+:\/\/\/?[^\/]+\//.test(t)&&(t=t.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,""),/[\/\\]$/.test(t)||(t+="/")),n=window.tinymce||window.tinyMCEPreInit)e=n.base||n.baseURL,o=n.suffix;else{for(var i=document.getElementsByTagName("script"),a=0;a<i.length;a++){var u=(r=i[a].src).substring(r.lastIndexOf("/"));if(/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(r)){-1!==u.indexOf(".min")&&(o=".min"),e=r.substring(0,r.lastIndexOf("/"));break}}!e&&document.currentScript&&(-1!==(r=document.currentScript.src).indexOf(".min")&&(o=".min"),e=r.substring(0,r.lastIndexOf("/")))}this.baseURL=new dw(t).toAbsolute(e),this.documentBaseURL=t,this.baseURI=new dw(this.baseURL),this.suffix=o,Uw(this)},overrideDefaults:function(e){var t,n;(t=e.base_url)&&(this.baseURL=new dw(this.documentBaseURL).toAbsolute(t.replace(/\/+$/,"")),this.baseURI=new dw(this.baseURL)),n=e.suffix,e.suffix&&(this.suffix=n);var r=(this.defaultSettings=e).plugin_base_urls;for(var o in r)wi.PluginManager.urls[o]=r[o]},init:function(r){var n,u,s=this;u=Yt.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option tbody tfoot thead tr script noscript style textarea video audio iframe object menu"," ");var c=function(e){var t=e.id;return t||(t=(t=e.name)&&!qw.get(t)?e.name:qw.uniqueId(),e.setAttribute("id",t)),t},l=function(e,t){return t.constructor===RegExp?t.test(e.className):qw.hasClass(e,t)},f=function(e){n=e},e=function(){var o,i=0,a=[],n=function(e,t,n){var r=new Aw(e,t,s);a.push(r),r.on("init",function(){++i===o.length&&f(a)}),r.targetElm=r.targetElm||n,r.render()};qw.unbind(window,"ready",e),function(e){var t=r[e];t&&t.apply(s,Array.prototype.slice.call(arguments,2))}("onpageload"),o=pn.unique(function(t){var e,n=[];if(de.ie&&de.ie<11)return Ep("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/"),[];if(t.types)return Ww(t.types,function(e){n=n.concat(qw.select(e.selector))}),n;if(t.selector)return qw.select(t.selector);if(t.target)return[t.target];switch(t.mode){case"exact":0<(e=t.elements||"").length&&Ww($w(e),function(t){var e;(e=qw.get(t))?n.push(e):Ww(document.forms,function(e){Ww(e.elements,function(e){e.name===t&&(t="mce_editor_"+Xw++,qw.setAttrib(e,"id",t),n.push(e))})})});break;case"textareas":case"specific_textareas":Ww(qw.select("textarea"),function(e){t.editor_deselector&&l(e,t.editor_deselector)||t.editor_selector&&!l(e,t.editor_selector)||n.push(e)})}return n}(r)),r.types?Ww(r.types,function(t){Yt.each(o,function(e){return!qw.is(e,t.selector)||(n(c(e),Kw({},r,t),e),!1)})}):(Yt.each(o,function(e){var t;(t=s.get(e.id))&&t.initialized&&!(t.getContainer()||t.getBody()).parentNode&&(eN(t),t.unbindAllNativeEvents(),t.destroy(!0),t.removed=!0,t=null)}),0===(o=Yt.grep(o,function(e){return!s.get(e.id)})).length?f([]):Ww(o,function(e){var t;t=e,r.inline&&t.tagName.toLowerCase()in u?Ep("Could not initialize inline editor on invalid inline target element",e):n(c(e),r,e)}))};return s.settings=r,qw.bind(window,"ready",e),new me(function(t){n?t(n):f=function(e){t(e)}})},get:function(t){return 0===arguments.length?Jw.slice(0):R(t)?V(Jw,function(e){return e.id===t}).getOr(null):L(t)&&Jw[t]?Jw[t]:null},add:function(e){var t=this;return Gw[e.id]===e||(null===t.get(e.id)&&("length"!==e.id&&(Gw[e.id]=e),Gw.push(e),Jw.push(e)),Zw(!0),t.activeEditor=e,t.fire("AddEditor",{editor:e}),_w||(_w=function(){t.fire("BeforeUnload")},qw.bind(window,"beforeunload",_w))),e},createEditor:function(e,t){return this.add(new Aw(e,t,this))},remove:function(e){var t,n,r=this;if(e){if(!R(e))return n=e,B(r.get(n.id))?null:(eN(n)&&r.fire("RemoveEditor",{editor:n}),0===Jw.length&&qw.unbind(window,"beforeunload",_w),n.remove(),Zw(0<Jw.length),n);Ww(qw.select(e),function(e){(n=r.get(e.id))&&r.remove(n)})}else for(t=Jw.length-1;0<=t;t--)r.remove(Jw[t])},execCommand:function(e,t,n){var r=this.get(n);switch(e){case"mceAddEditor":return this.get(n)||new Aw(n,this.settings,this).render(),!0;case"mceRemoveEditor":return r&&r.remove(),!0;case"mceToggleEditor":return r?r.isHidden()?r.show():r.hide():this.execCommand("mceAddEditor",0,n),!0}return!!this.activeEditor&&this.activeEditor.execCommand(e,t,n)},triggerSave:function(){Ww(Jw,function(e){e.save()})},addI18n:function(e,t){jw.add(e,t)},translate:function(e){return jw.translate(e)},setActive:function(e){var t=this.activeEditor;this.activeEditor!==e&&(t&&t.fire("deactivate",{relatedTarget:e}),e.fire("activate",{relatedTarget:t})),this.activeEditor=e}},Rg),Dw.setup();var tN,nN=Dw;function rN(n){return{walk:function(e,t){return Oc(n,e,t)},split:bv,normalize:function(t){return jm(n,t).fold(j(!1),function(e){return t.setStart(e.startContainer,e.startOffset),t.setEnd(e.endContainer,e.endOffset),!0})}}}(tN=rN||(rN={})).compareRanges=Im,tN.getCaretRangeFromPoint=uy,tN.getSelectedNode=Ua,tN.getNode=Va;var oN,iN,aN=rN,uN=Math.min,sN=Math.max,cN=Math.round,lN=function(e,t,n){var r,o,i,a,u,s;return r=t.x,o=t.y,i=e.w,a=e.h,u=t.w,s=t.h,"b"===(n=(n||"").split(""))[0]&&(o+=s),"r"===n[1]&&(r+=u),"c"===n[0]&&(o+=cN(s/2)),"c"===n[1]&&(r+=cN(u/2)),"b"===n[3]&&(o-=a),"r"===n[4]&&(r-=i),"c"===n[3]&&(o-=cN(a/2)),"c"===n[4]&&(r-=cN(i/2)),fN(r,o,i,a)},fN=function(e,t,n,r){return{x:e,y:t,w:n,h:r}},dN={inflate:function(e,t,n){return fN(e.x-t,e.y-n,e.w+2*t,e.h+2*n)},relativePosition:lN,findBestRelativePosition:function(e,t,n,r){var o,i;for(i=0;i<r.length;i++)if((o=lN(e,t,r[i])).x>=n.x&&o.x+o.w<=n.w+n.x&&o.y>=n.y&&o.y+o.h<=n.h+n.y)return r[i];return null},intersect:function(e,t){var n,r,o,i;return n=sN(e.x,t.x),r=sN(e.y,t.y),o=uN(e.x+e.w,t.x+t.w),i=uN(e.y+e.h,t.y+t.h),o-n<0||i-r<0?null:fN(n,r,o-n,i-r)},clamp:function(e,t,n){var r,o,i,a,u,s,c,l,f,d;return u=e.x,s=e.y,c=e.x+e.w,l=e.y+e.h,f=t.x+t.w,d=t.y+t.h,r=sN(0,t.x-u),o=sN(0,t.y-s),i=sN(0,c-f),a=sN(0,l-d),u+=r,s+=o,n&&(c+=r,l+=o,u-=i,s-=a),fN(u,s,(c-=i)-u,(l-=a)-s)},create:fN,fromClientRect:function(e){return fN(e.left,e.top,e.width,e.height)}},mN={},gN={add:function(e,t){mN[e.toLowerCase()]=t},has:function(e){return!!mN[e.toLowerCase()]},get:function(e){var t=e.toLowerCase(),n=mN.hasOwnProperty(t)?mN[t]:null;if(null===n)throw new Error("Could not find module for type: "+e);return n},create:function(e,t){var n;if("string"==typeof e?(t=t||{}).type=e:e=(t=e).type,e=e.toLowerCase(),!(n=mN[e]))throw new Error("Could not find control by type: "+e);return(n=new n(t)).type=e,n}},pN=Yt.each,hN=Yt.extend,vN=function(){};vN.extend=oN=function(n){var e,t,r,o=this.prototype,i=function(){var e,t,n;if(!iN&&(this.init&&this.init.apply(this,arguments),t=this.Mixins))for(e=t.length;e--;)(n=t[e]).init&&n.init.apply(this,arguments)},a=function(){return this},u=function(n,r){return function(){var e,t=this._super;return this._super=o[n],e=r.apply(this,arguments),this._super=t,e}};for(t in iN=!0,e=new this,iN=!1,n.Mixins&&(pN(n.Mixins,function(e){for(var t in e)"init"!==t&&(n[t]=e[t])}),o.Mixins&&(n.Mixins=o.Mixins.concat(n.Mixins))),n.Methods&&pN(n.Methods.split(","),function(e){n[e]=a}),n.Properties&&pN(n.Properties.split(","),function(e){var t="_"+e;n[e]=function(e){return e!==undefined?(this[t]=e,this):this[t]}}),n.Statics&&pN(n.Statics,function(e,t){i[t]=e}),n.Defaults&&o.Defaults&&(n.Defaults=hN({},o.Defaults,n.Defaults)),n)"function"==typeof(r=n[t])&&o[t]?e[t]=u(t,r):e[t]=r;return i.prototype=e,(i.constructor=i).extend=oN,i};var bN=Math.min,yN=Math.max,CN=Math.round,xN=function(e,n){var r,o,t,i;if(n=n||'"',null===e)return"null";if("string"==(t=typeof e))return o="\bb\tt\nn\ff\rr\"\"''\\\\",n+e.replace(/([\u0080-\uFFFF\x00-\x1f\"\'\\])/g,function(e,t){return'"'===n&&"'"===e?e:(r=o.indexOf(t))+1?"\\"+o.charAt(r+1):(e=t.charCodeAt().toString(16),"\\u"+"0000".substring(e.length)+e)})+n;if("object"===t){if(e.hasOwnProperty&&"[object Array]"===Object.prototype.toString.call(e)){for(r=0,o="[";r<e.length;r++)o+=(0<r?",":"")+xN(e[r],n);return o+"]"}for(i in o="{",e)e.hasOwnProperty(i)&&(o+="function"!=typeof e[i]?(1<o.length?","+n:n)+i+n+":"+xN(e[i],n):"");return o+"}"}return""+e},wN={serialize:xN,parse:function(e){try{return JSON.parse(e)}catch(t){}}},NN={callbacks:{},count:0,send:function(t){var n=this,r=gi.DOM,o=t.count!==undefined?t.count:n.count,i="tinymce_jsonp_"+o;n.callbacks[o]=function(e){r.remove(i),delete n.callbacks[o],t.callback(e)},r.add(r.doc.body,"script",{id:i,src:t.url,type:"text/javascript"}),n.count++}},EN={send:function(e){var t,n=0,r=function(){!e.async||4===t.readyState||1e4<n++?(e.success&&n<1e4&&200===t.status?e.success.call(e.success_scope,""+t.responseText,t,e):e.error&&e.error.call(e.error_scope,1e4<n?"TIMED_OUT":"GENERAL",t,e),t=null):setTimeout(r,10)};if(e.scope=e.scope||this,e.success_scope=e.success_scope||e.scope,e.error_scope=e.error_scope||e.scope,e.async=!1!==e.async,e.data=e.data||"",EN.fire("beforeInitialize",{settings:e}),t=Tp()){if(t.overrideMimeType&&t.overrideMimeType(e.content_type),t.open(e.type||(e.data?"POST":"GET"),e.url,e.async),e.crossDomain&&(t.withCredentials=!0),e.content_type&&t.setRequestHeader("Content-Type",e.content_type),e.requestheaders&&Yt.each(e.requestheaders,function(e){t.setRequestHeader(e.key,e.value)}),t.setRequestHeader("X-Requested-With","XMLHttpRequest"),(t=EN.fire("beforeSend",{xhr:t,settings:e}).xhr).send(e.data),!e.async)return r();setTimeout(r,10)}}};Yt.extend(EN,Rg);var SN,kN,TN,AN,RN=Yt.extend,_N=function(e){this.settings=RN({},e),this.count=0};_N.sendRPC=function(e){return(new _N).send(e)},_N.prototype={send:function(n){var r=n.error,o=n.success;(n=RN(this.settings,n)).success=function(e,t){void 0===(e=wN.parse(e))&&(e={error:"JSON Parse error."}),e.error?r.call(n.error_scope||n.scope,e.error,t):o.call(n.success_scope||n.scope,e.result)},n.error=function(e,t){r&&r.call(n.error_scope||n.scope,e,t)},n.data=wN.serialize({id:n.id||"c"+this.count++,method:n.method,params:n.params}),n.content_type="application/json",EN.send(n)}};try{SN=window.localStorage}catch(LN){kN={},TN=[],AN={getItem:function(e){var t=kN[e];return t||null},setItem:function(e,t){TN.push(e),kN[e]=String(t)},key:function(e){return TN[e]},removeItem:function(t){TN=TN.filter(function(e){return e===t}),delete kN[t]},clear:function(){TN=[],kN={}},length:0},Object.defineProperty(AN,"length",{get:function(){return TN.length},configurable:!1,enumerable:!1}),SN=AN}var DN,BN=nN,ON={geom:{Rect:dN},util:{Promise:me,Delay:ve,Tools:Yt,VK:Oh,URI:dw,Class:vN,EventDispatcher:kg,Observable:Rg,I18n:jw,XHR:EN,JSON:wN,JSONRequest:_N,JSONP:NN,LocalStorage:SN,Color:function(e){var n={},u=0,s=0,c=0,t=function(e){var t;return"object"==typeof e?"r"in e?(u=e.r,s=e.g,c=e.b):"v"in e&&function(e,t,n){var r,o,i,a;if(e=(parseInt(e,10)||0)%360,t=parseInt(t,10)/100,n=parseInt(n,10)/100,t=yN(0,bN(t,1)),n=yN(0,bN(n,1)),0!==t){switch(r=e/60,i=(o=n*t)*(1-Math.abs(r%2-1)),a=n-o,Math.floor(r)){case 0:u=o,s=i,c=0;break;case 1:u=i,s=o,c=0;break;case 2:u=0,s=o,c=i;break;case 3:u=0,s=i,c=o;break;case 4:u=i,s=0,c=o;break;case 5:u=o,s=0,c=i;break;default:u=s=c=0}u=CN(255*(u+a)),s=CN(255*(s+a)),c=CN(255*(c+a))}else u=s=c=CN(255*n)}(e.h,e.s,e.v):(t=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(e))?(u=parseInt(t[1],10),s=parseInt(t[2],10),c=parseInt(t[3],10)):(t=/#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e))?(u=parseInt(t[1],16),s=parseInt(t[2],16),c=parseInt(t[3],16)):(t=/#([0-F])([0-F])([0-F])/gi.exec(e))&&(u=parseInt(t[1]+t[1],16),s=parseInt(t[2]+t[2],16),c=parseInt(t[3]+t[3],16)),u=u<0?0:255<u?255:u,s=s<0?0:255<s?255:s,c=c<0?0:255<c?255:c,n};return e&&t(e),n.toRgb=function(){return{r:u,g:s,b:c}},n.toHsv=function(){return e=u,t=s,n=c,o=0,(i=bN(e/=255,bN(t/=255,n/=255)))===(a=yN(e,yN(t,n)))?{h:0,s:0,v:100*(o=i)}:(r=(a-i)/a,{h:CN(60*((e===i?3:n===i?1:5)-(e===i?t-n:n===i?e-t:n-e)/((o=a)-i))),s:CN(100*r),v:CN(100*o)});var e,t,n,r,o,i,a},n.toHex=function(){var e=function(e){return 1<(e=parseInt(e,10).toString(16)).length?e:"0"+e};return"#"+e(u)+e(s)+e(c)},n.parse=t,n}},dom:{EventUtils:ke,Sizzle:kt,DomQuery:pn,TreeWalker:ro,DOMUtils:gi,ScriptLoader:yi,RangeUtils:aN,Serializer:Yb,ControlSelection:ny,BookmarkManager:Zb,Selection:Ly,Event:ke.Event},html:{Styles:ri,Entities:qo,Node:Ob,Schema:ti,SaxParser:Hh,DomParser:qb,Writer:nl,Serializer:rl},ui:{Factory:gN},Env:de,AddOnManager:wi,Annotator:Uc,Formatter:xb,UndoManager:uv,EditorCommands:Eg,WindowManager:hp,NotificationManager:pp,EditorObservable:$g,Shortcuts:Gg,Editor:Aw,FocusManager:Bw,EditorManager:nN,DOM:gi.DOM,ScriptLoader:yi.ScriptLoader,PluginManager:wi.PluginManager,ThemeManager:wi.ThemeManager,trim:Yt.trim,isArray:Yt.isArray,is:Yt.is,toArray:Yt.toArray,makeMap:Yt.makeMap,each:Yt.each,map:Yt.map,grep:Yt.grep,inArray:Yt.inArray,extend:Yt.extend,create:Yt.create,walk:Yt.walk,createNS:Yt.createNS,resolve:Yt.resolve,explode:Yt.explode,_addCacheSuffix:Yt._addCacheSuffix,isOpera:de.opera,isWebKit:de.webkit,isIE:de.ie,isGecko:de.gecko,isMac:de.mac},PN=BN=Yt.extend(BN,ON);DN=PN,window.tinymce=DN,window.tinyMCE=DN,function(e){if("object"==typeof module)try{module.exports=e}catch(t){}}(PN)}();
;// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

// This is CodeMirror (https://codemirror.net), a code editor
// implemented in JavaScript on top of the browser's DOM.
//
// You can find some technical background for some of the code below
// at http://marijnhaverbeke.nl/blog/#cm-internals .

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.CodeMirror = factory());
}(this, (function () { 'use strict';

  // Kludges for bugs and behavior differences that can't be feature
  // detected are enabled based on userAgent etc sniffing.
  var userAgent = navigator.userAgent;
  var platform = navigator.platform;

  var gecko = /gecko\/\d/i.test(userAgent);
  var ie_upto10 = /MSIE \d/.test(userAgent);
  var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent);
  var edge = /Edge\/(\d+)/.exec(userAgent);
  var ie = ie_upto10 || ie_11up || edge;
  var ie_version = ie && (ie_upto10 ? document.documentMode || 6 : +(edge || ie_11up)[1]);
  var webkit = !edge && /WebKit\//.test(userAgent);
  var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(userAgent);
  var chrome = !edge && /Chrome\//.test(userAgent);
  var presto = /Opera\//.test(userAgent);
  var safari = /Apple Computer/.test(navigator.vendor);
  var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent);
  var phantom = /PhantomJS/.test(userAgent);

  var ios = !edge && /AppleWebKit/.test(userAgent) && /Mobile\/\w+/.test(userAgent);
  var android = /Android/.test(userAgent);
  // This is woefully incomplete. Suggestions for alternative methods welcome.
  var mobile = ios || android || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent);
  var mac = ios || /Mac/.test(platform);
  var chromeOS = /\bCrOS\b/.test(userAgent);
  var windows = /win/i.test(platform);

  var presto_version = presto && userAgent.match(/Version\/(\d*\.\d*)/);
  if (presto_version) { presto_version = Number(presto_version[1]); }
  if (presto_version && presto_version >= 15) { presto = false; webkit = true; }
  // Some browsers use the wrong event properties to signal cmd/ctrl on OS X
  var flipCtrlCmd = mac && (qtwebkit || presto && (presto_version == null || presto_version < 12.11));
  var captureRightClick = gecko || (ie && ie_version >= 9);

  function classTest(cls) { return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*") }

  var rmClass = function(node, cls) {
    var current = node.className;
    var match = classTest(cls).exec(current);
    if (match) {
      var after = current.slice(match.index + match[0].length);
      node.className = current.slice(0, match.index) + (after ? match[1] + after : "");
    }
  };

  function removeChildren(e) {
    for (var count = e.childNodes.length; count > 0; --count)
      { e.removeChild(e.firstChild); }
    return e
  }

  function removeChildrenAndAdd(parent, e) {
    return removeChildren(parent).appendChild(e)
  }

  function elt(tag, content, className, style) {
    var e = document.createElement(tag);
    if (className) { e.className = className; }
    if (style) { e.style.cssText = style; }
    if (typeof content == "string") { e.appendChild(document.createTextNode(content)); }
    else if (content) { for (var i = 0; i < content.length; ++i) { e.appendChild(content[i]); } }
    return e
  }
  // wrapper for elt, which removes the elt from the accessibility tree
  function eltP(tag, content, className, style) {
    var e = elt(tag, content, className, style);
    e.setAttribute("role", "presentation");
    return e
  }

  var range;
  if (document.createRange) { range = function(node, start, end, endNode) {
    var r = document.createRange();
    r.setEnd(endNode || node, end);
    r.setStart(node, start);
    return r
  }; }
  else { range = function(node, start, end) {
    var r = document.body.createTextRange();
    try { r.moveToElementText(node.parentNode); }
    catch(e) { return r }
    r.collapse(true);
    r.moveEnd("character", end);
    r.moveStart("character", start);
    return r
  }; }

  function contains(parent, child) {
    if (child.nodeType == 3) // Android browser always returns false when child is a textnode
      { child = child.parentNode; }
    if (parent.contains)
      { return parent.contains(child) }
    do {
      if (child.nodeType == 11) { child = child.host; }
      if (child == parent) { return true }
    } while (child = child.parentNode)
  }

  function activeElt() {
    // IE and Edge may throw an "Unspecified Error" when accessing document.activeElement.
    // IE < 10 will throw when accessed while the page is loading or in an iframe.
    // IE > 9 and Edge will throw when accessed in an iframe if document.body is unavailable.
    var activeElement;
    try {
      activeElement = document.activeElement;
    } catch(e) {
      activeElement = document.body || null;
    }
    while (activeElement && activeElement.shadowRoot && activeElement.shadowRoot.activeElement)
      { activeElement = activeElement.shadowRoot.activeElement; }
    return activeElement
  }

  function addClass(node, cls) {
    var current = node.className;
    if (!classTest(cls).test(current)) { node.className += (current ? " " : "") + cls; }
  }
  function joinClasses(a, b) {
    var as = a.split(" ");
    for (var i = 0; i < as.length; i++)
      { if (as[i] && !classTest(as[i]).test(b)) { b += " " + as[i]; } }
    return b
  }

  var selectInput = function(node) { node.select(); };
  if (ios) // Mobile Safari apparently has a bug where select() is broken.
    { selectInput = function(node) { node.selectionStart = 0; node.selectionEnd = node.value.length; }; }
  else if (ie) // Suppress mysterious IE10 errors
    { selectInput = function(node) { try { node.select(); } catch(_e) {} }; }

  function bind(f) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function(){return f.apply(null, args)}
  }

  function copyObj(obj, target, overwrite) {
    if (!target) { target = {}; }
    for (var prop in obj)
      { if (obj.hasOwnProperty(prop) && (overwrite !== false || !target.hasOwnProperty(prop)))
        { target[prop] = obj[prop]; } }
    return target
  }

  // Counts the column offset in a string, taking tabs into account.
  // Used mostly to find indentation.
  function countColumn(string, end, tabSize, startIndex, startValue) {
    if (end == null) {
      end = string.search(/[^\s\u00a0]/);
      if (end == -1) { end = string.length; }
    }
    for (var i = startIndex || 0, n = startValue || 0;;) {
      var nextTab = string.indexOf("\t", i);
      if (nextTab < 0 || nextTab >= end)
        { return n + (end - i) }
      n += nextTab - i;
      n += tabSize - (n % tabSize);
      i = nextTab + 1;
    }
  }

  var Delayed = function() {this.id = null;};
  Delayed.prototype.set = function (ms, f) {
    clearTimeout(this.id);
    this.id = setTimeout(f, ms);
  };

  function indexOf(array, elt) {
    for (var i = 0; i < array.length; ++i)
      { if (array[i] == elt) { return i } }
    return -1
  }

  // Number of pixels added to scroller and sizer to hide scrollbar
  var scrollerGap = 30;

  // Returned or thrown by various protocols to signal 'I'm not
  // handling this'.
  var Pass = {toString: function(){return "CodeMirror.Pass"}};

  // Reused option objects for setSelection & friends
  var sel_dontScroll = {scroll: false}, sel_mouse = {origin: "*mouse"}, sel_move = {origin: "+move"};

  // The inverse of countColumn -- find the offset that corresponds to
  // a particular column.
  function findColumn(string, goal, tabSize) {
    for (var pos = 0, col = 0;;) {
      var nextTab = string.indexOf("\t", pos);
      if (nextTab == -1) { nextTab = string.length; }
      var skipped = nextTab - pos;
      if (nextTab == string.length || col + skipped >= goal)
        { return pos + Math.min(skipped, goal - col) }
      col += nextTab - pos;
      col += tabSize - (col % tabSize);
      pos = nextTab + 1;
      if (col >= goal) { return pos }
    }
  }

  var spaceStrs = [""];
  function spaceStr(n) {
    while (spaceStrs.length <= n)
      { spaceStrs.push(lst(spaceStrs) + " "); }
    return spaceStrs[n]
  }

  function lst(arr) { return arr[arr.length-1] }

  function map(array, f) {
    var out = [];
    for (var i = 0; i < array.length; i++) { out[i] = f(array[i], i); }
    return out
  }

  function insertSorted(array, value, score) {
    var pos = 0, priority = score(value);
    while (pos < array.length && score(array[pos]) <= priority) { pos++; }
    array.splice(pos, 0, value);
  }

  function nothing() {}

  function createObj(base, props) {
    var inst;
    if (Object.create) {
      inst = Object.create(base);
    } else {
      nothing.prototype = base;
      inst = new nothing();
    }
    if (props) { copyObj(props, inst); }
    return inst
  }

  var nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
  function isWordCharBasic(ch) {
    return /\w/.test(ch) || ch > "\x80" &&
      (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch))
  }
  function isWordChar(ch, helper) {
    if (!helper) { return isWordCharBasic(ch) }
    if (helper.source.indexOf("\\w") > -1 && isWordCharBasic(ch)) { return true }
    return helper.test(ch)
  }

  function isEmpty(obj) {
    for (var n in obj) { if (obj.hasOwnProperty(n) && obj[n]) { return false } }
    return true
  }

  // Extending unicode characters. A series of a non-extending char +
  // any number of extending chars is treated as a single unit as far
  // as editing and measuring is concerned. This is not fully correct,
  // since some scripts/fonts/browsers also treat other configurations
  // of code points as a group.
  var extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
  function isExtendingChar(ch) { return ch.charCodeAt(0) >= 768 && extendingChars.test(ch) }

  // Returns a number from the range [`0`; `str.length`] unless `pos` is outside that range.
  function skipExtendingChars(str, pos, dir) {
    while ((dir < 0 ? pos > 0 : pos < str.length) && isExtendingChar(str.charAt(pos))) { pos += dir; }
    return pos
  }

  // Returns the value from the range [`from`; `to`] that satisfies
  // `pred` and is closest to `from`. Assumes that at least `to`
  // satisfies `pred`. Supports `from` being greater than `to`.
  function findFirst(pred, from, to) {
    // At any point we are certain `to` satisfies `pred`, don't know
    // whether `from` does.
    var dir = from > to ? -1 : 1;
    for (;;) {
      if (from == to) { return from }
      var midF = (from + to) / 2, mid = dir < 0 ? Math.ceil(midF) : Math.floor(midF);
      if (mid == from) { return pred(mid) ? from : to }
      if (pred(mid)) { to = mid; }
      else { from = mid + dir; }
    }
  }

  // The display handles the DOM integration, both for input reading
  // and content drawing. It holds references to DOM nodes and
  // display-related state.

  function Display(place, doc, input) {
    var d = this;
    this.input = input;

    // Covers bottom-right square when both scrollbars are present.
    d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler");
    d.scrollbarFiller.setAttribute("cm-not-content", "true");
    // Covers bottom of gutter when coverGutterNextToScrollbar is on
    // and h scrollbar is present.
    d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler");
    d.gutterFiller.setAttribute("cm-not-content", "true");
    // Will contain the actual code, positioned to cover the viewport.
    d.lineDiv = eltP("div", null, "CodeMirror-code");
    // Elements are added to these to represent selection and cursors.
    d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1");
    d.cursorDiv = elt("div", null, "CodeMirror-cursors");
    // A visibility: hidden element used to find the size of things.
    d.measure = elt("div", null, "CodeMirror-measure");
    // When lines outside of the viewport are measured, they are drawn in this.
    d.lineMeasure = elt("div", null, "CodeMirror-measure");
    // Wraps everything that needs to exist inside the vertically-padded coordinate system
    d.lineSpace = eltP("div", [d.measure, d.lineMeasure, d.selectionDiv, d.cursorDiv, d.lineDiv],
                      null, "position: relative; outline: none");
    var lines = eltP("div", [d.lineSpace], "CodeMirror-lines");
    // Moved around its parent to cover visible view.
    d.mover = elt("div", [lines], null, "position: relative");
    // Set to the height of the document, allowing scrolling.
    d.sizer = elt("div", [d.mover], "CodeMirror-sizer");
    d.sizerWidth = null;
    // Behavior of elts with overflow: auto and padding is
    // inconsistent across browsers. This is used to ensure the
    // scrollable area is big enough.
    d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerGap + "px; width: 1px;");
    // Will contain the gutters, if any.
    d.gutters = elt("div", null, "CodeMirror-gutters");
    d.lineGutter = null;
    // Actual scrollable element.
    d.scroller = elt("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll");
    d.scroller.setAttribute("tabIndex", "-1");
    // The element in which the editor lives.
    d.wrapper = elt("div", [d.scrollbarFiller, d.gutterFiller, d.scroller], "CodeMirror");

    // Work around IE7 z-index bug (not perfect, hence IE7 not really being supported)
    if (ie && ie_version < 8) { d.gutters.style.zIndex = -1; d.scroller.style.paddingRight = 0; }
    if (!webkit && !(gecko && mobile)) { d.scroller.draggable = true; }

    if (place) {
      if (place.appendChild) { place.appendChild(d.wrapper); }
      else { place(d.wrapper); }
    }

    // Current rendered range (may be bigger than the view window).
    d.viewFrom = d.viewTo = doc.first;
    d.reportedViewFrom = d.reportedViewTo = doc.first;
    // Information about the rendered lines.
    d.view = [];
    d.renderedView = null;
    // Holds info about a single rendered line when it was rendered
    // for measurement, while not in view.
    d.externalMeasured = null;
    // Empty space (in pixels) above the view
    d.viewOffset = 0;
    d.lastWrapHeight = d.lastWrapWidth = 0;
    d.updateLineNumbers = null;

    d.nativeBarWidth = d.barHeight = d.barWidth = 0;
    d.scrollbarsClipped = false;

    // Used to only resize the line number gutter when necessary (when
    // the amount of lines crosses a boundary that makes its width change)
    d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null;
    // Set to true when a non-horizontal-scrolling line widget is
    // added. As an optimization, line widget aligning is skipped when
    // this is false.
    d.alignWidgets = false;

    d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;

    // Tracks the maximum line length so that the horizontal scrollbar
    // can be kept static when scrolling.
    d.maxLine = null;
    d.maxLineLength = 0;
    d.maxLineChanged = false;

    // Used for measuring wheel scrolling granularity
    d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null;

    // True when shift is held down.
    d.shift = false;

    // Used to track whether anything happened since the context menu
    // was opened.
    d.selForContextMenu = null;

    d.activeTouch = null;

    input.init(d);
  }

  // Find the line object corresponding to the given line number.
  function getLine(doc, n) {
    n -= doc.first;
    if (n < 0 || n >= doc.size) { throw new Error("There is no line " + (n + doc.first) + " in the document.") }
    var chunk = doc;
    while (!chunk.lines) {
      for (var i = 0;; ++i) {
        var child = chunk.children[i], sz = child.chunkSize();
        if (n < sz) { chunk = child; break }
        n -= sz;
      }
    }
    return chunk.lines[n]
  }

  // Get the part of a document between two positions, as an array of
  // strings.
  function getBetween(doc, start, end) {
    var out = [], n = start.line;
    doc.iter(start.line, end.line + 1, function (line) {
      var text = line.text;
      if (n == end.line) { text = text.slice(0, end.ch); }
      if (n == start.line) { text = text.slice(start.ch); }
      out.push(text);
      ++n;
    });
    return out
  }
  // Get the lines between from and to, as array of strings.
  function getLines(doc, from, to) {
    var out = [];
    doc.iter(from, to, function (line) { out.push(line.text); }); // iter aborts when callback returns truthy value
    return out
  }

  // Update the height of a line, propagating the height change
  // upwards to parent nodes.
  function updateLineHeight(line, height) {
    var diff = height - line.height;
    if (diff) { for (var n = line; n; n = n.parent) { n.height += diff; } }
  }

  // Given a line object, find its line number by walking up through
  // its parent links.
  function lineNo(line) {
    if (line.parent == null) { return null }
    var cur = line.parent, no = indexOf(cur.lines, line);
    for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
      for (var i = 0;; ++i) {
        if (chunk.children[i] == cur) { break }
        no += chunk.children[i].chunkSize();
      }
    }
    return no + cur.first
  }

  // Find the line at the given vertical position, using the height
  // information in the document tree.
  function lineAtHeight(chunk, h) {
    var n = chunk.first;
    outer: do {
      for (var i$1 = 0; i$1 < chunk.children.length; ++i$1) {
        var child = chunk.children[i$1], ch = child.height;
        if (h < ch) { chunk = child; continue outer }
        h -= ch;
        n += child.chunkSize();
      }
      return n
    } while (!chunk.lines)
    var i = 0;
    for (; i < chunk.lines.length; ++i) {
      var line = chunk.lines[i], lh = line.height;
      if (h < lh) { break }
      h -= lh;
    }
    return n + i
  }

  function isLine(doc, l) {return l >= doc.first && l < doc.first + doc.size}

  function lineNumberFor(options, i) {
    return String(options.lineNumberFormatter(i + options.firstLineNumber))
  }

  // A Pos instance represents a position within the text.
  function Pos(line, ch, sticky) {
    if ( sticky === void 0 ) sticky = null;

    if (!(this instanceof Pos)) { return new Pos(line, ch, sticky) }
    this.line = line;
    this.ch = ch;
    this.sticky = sticky;
  }

  // Compare two positions, return 0 if they are the same, a negative
  // number when a is less, and a positive number otherwise.
  function cmp(a, b) { return a.line - b.line || a.ch - b.ch }

  function equalCursorPos(a, b) { return a.sticky == b.sticky && cmp(a, b) == 0 }

  function copyPos(x) {return Pos(x.line, x.ch)}
  function maxPos(a, b) { return cmp(a, b) < 0 ? b : a }
  function minPos(a, b) { return cmp(a, b) < 0 ? a : b }

  // Most of the external API clips given positions to make sure they
  // actually exist within the document.
  function clipLine(doc, n) {return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1))}
  function clipPos(doc, pos) {
    if (pos.line < doc.first) { return Pos(doc.first, 0) }
    var last = doc.first + doc.size - 1;
    if (pos.line > last) { return Pos(last, getLine(doc, last).text.length) }
    return clipToLen(pos, getLine(doc, pos.line).text.length)
  }
  function clipToLen(pos, linelen) {
    var ch = pos.ch;
    if (ch == null || ch > linelen) { return Pos(pos.line, linelen) }
    else if (ch < 0) { return Pos(pos.line, 0) }
    else { return pos }
  }
  function clipPosArray(doc, array) {
    var out = [];
    for (var i = 0; i < array.length; i++) { out[i] = clipPos(doc, array[i]); }
    return out
  }

  // Optimize some code when these features are not used.
  var sawReadOnlySpans = false, sawCollapsedSpans = false;

  function seeReadOnlySpans() {
    sawReadOnlySpans = true;
  }

  function seeCollapsedSpans() {
    sawCollapsedSpans = true;
  }

  // TEXTMARKER SPANS

  function MarkedSpan(marker, from, to) {
    this.marker = marker;
    this.from = from; this.to = to;
  }

  // Search an array of spans for a span matching the given marker.
  function getMarkedSpanFor(spans, marker) {
    if (spans) { for (var i = 0; i < spans.length; ++i) {
      var span = spans[i];
      if (span.marker == marker) { return span }
    } }
  }
  // Remove a span from an array, returning undefined if no spans are
  // left (we don't store arrays for lines without spans).
  function removeMarkedSpan(spans, span) {
    var r;
    for (var i = 0; i < spans.length; ++i)
      { if (spans[i] != span) { (r || (r = [])).push(spans[i]); } }
    return r
  }
  // Add a span to a line.
  function addMarkedSpan(line, span) {
    line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span];
    span.marker.attachLine(line);
  }

  // Used for the algorithm that adjusts markers for a change in the
  // document. These functions cut an array of spans at a given
  // character position, returning an array of remaining chunks (or
  // undefined if nothing remains).
  function markedSpansBefore(old, startCh, isInsert) {
    var nw;
    if (old) { for (var i = 0; i < old.length; ++i) {
      var span = old[i], marker = span.marker;
      var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh);
      if (startsBefore || span.from == startCh && marker.type == "bookmark" && (!isInsert || !span.marker.insertLeft)) {
        var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh)
        ;(nw || (nw = [])).push(new MarkedSpan(marker, span.from, endsAfter ? null : span.to));
      }
    } }
    return nw
  }
  function markedSpansAfter(old, endCh, isInsert) {
    var nw;
    if (old) { for (var i = 0; i < old.length; ++i) {
      var span = old[i], marker = span.marker;
      var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh);
      if (endsAfter || span.from == endCh && marker.type == "bookmark" && (!isInsert || span.marker.insertLeft)) {
        var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh)
        ;(nw || (nw = [])).push(new MarkedSpan(marker, startsBefore ? null : span.from - endCh,
                                              span.to == null ? null : span.to - endCh));
      }
    } }
    return nw
  }

  // Given a change object, compute the new set of marker spans that
  // cover the line in which the change took place. Removes spans
  // entirely within the change, reconnects spans belonging to the
  // same marker that appear on both sides of the change, and cuts off
  // spans partially within the change. Returns an array of span
  // arrays with one element for each line in (after) the change.
  function stretchSpansOverChange(doc, change) {
    if (change.full) { return null }
    var oldFirst = isLine(doc, change.from.line) && getLine(doc, change.from.line).markedSpans;
    var oldLast = isLine(doc, change.to.line) && getLine(doc, change.to.line).markedSpans;
    if (!oldFirst && !oldLast) { return null }

    var startCh = change.from.ch, endCh = change.to.ch, isInsert = cmp(change.from, change.to) == 0;
    // Get the spans that 'stick out' on both sides
    var first = markedSpansBefore(oldFirst, startCh, isInsert);
    var last = markedSpansAfter(oldLast, endCh, isInsert);

    // Next, merge those two ends
    var sameLine = change.text.length == 1, offset = lst(change.text).length + (sameLine ? startCh : 0);
    if (first) {
      // Fix up .to properties of first
      for (var i = 0; i < first.length; ++i) {
        var span = first[i];
        if (span.to == null) {
          var found = getMarkedSpanFor(last, span.marker);
          if (!found) { span.to = startCh; }
          else if (sameLine) { span.to = found.to == null ? null : found.to + offset; }
        }
      }
    }
    if (last) {
      // Fix up .from in last (or move them into first in case of sameLine)
      for (var i$1 = 0; i$1 < last.length; ++i$1) {
        var span$1 = last[i$1];
        if (span$1.to != null) { span$1.to += offset; }
        if (span$1.from == null) {
          var found$1 = getMarkedSpanFor(first, span$1.marker);
          if (!found$1) {
            span$1.from = offset;
            if (sameLine) { (first || (first = [])).push(span$1); }
          }
        } else {
          span$1.from += offset;
          if (sameLine) { (first || (first = [])).push(span$1); }
        }
      }
    }
    // Make sure we didn't create any zero-length spans
    if (first) { first = clearEmptySpans(first); }
    if (last && last != first) { last = clearEmptySpans(last); }

    var newMarkers = [first];
    if (!sameLine) {
      // Fill gap with whole-line-spans
      var gap = change.text.length - 2, gapMarkers;
      if (gap > 0 && first)
        { for (var i$2 = 0; i$2 < first.length; ++i$2)
          { if (first[i$2].to == null)
            { (gapMarkers || (gapMarkers = [])).push(new MarkedSpan(first[i$2].marker, null, null)); } } }
      for (var i$3 = 0; i$3 < gap; ++i$3)
        { newMarkers.push(gapMarkers); }
      newMarkers.push(last);
    }
    return newMarkers
  }

  // Remove spans that are empty and don't have a clearWhenEmpty
  // option of false.
  function clearEmptySpans(spans) {
    for (var i = 0; i < spans.length; ++i) {
      var span = spans[i];
      if (span.from != null && span.from == span.to && span.marker.clearWhenEmpty !== false)
        { spans.splice(i--, 1); }
    }
    if (!spans.length) { return null }
    return spans
  }

  // Used to 'clip' out readOnly ranges when making a change.
  function removeReadOnlyRanges(doc, from, to) {
    var markers = null;
    doc.iter(from.line, to.line + 1, function (line) {
      if (line.markedSpans) { for (var i = 0; i < line.markedSpans.length; ++i) {
        var mark = line.markedSpans[i].marker;
        if (mark.readOnly && (!markers || indexOf(markers, mark) == -1))
          { (markers || (markers = [])).push(mark); }
      } }
    });
    if (!markers) { return null }
    var parts = [{from: from, to: to}];
    for (var i = 0; i < markers.length; ++i) {
      var mk = markers[i], m = mk.find(0);
      for (var j = 0; j < parts.length; ++j) {
        var p = parts[j];
        if (cmp(p.to, m.from) < 0 || cmp(p.from, m.to) > 0) { continue }
        var newParts = [j, 1], dfrom = cmp(p.from, m.from), dto = cmp(p.to, m.to);
        if (dfrom < 0 || !mk.inclusiveLeft && !dfrom)
          { newParts.push({from: p.from, to: m.from}); }
        if (dto > 0 || !mk.inclusiveRight && !dto)
          { newParts.push({from: m.to, to: p.to}); }
        parts.splice.apply(parts, newParts);
        j += newParts.length - 3;
      }
    }
    return parts
  }

  // Connect or disconnect spans from a line.
  function detachMarkedSpans(line) {
    var spans = line.markedSpans;
    if (!spans) { return }
    for (var i = 0; i < spans.length; ++i)
      { spans[i].marker.detachLine(line); }
    line.markedSpans = null;
  }
  function attachMarkedSpans(line, spans) {
    if (!spans) { return }
    for (var i = 0; i < spans.length; ++i)
      { spans[i].marker.attachLine(line); }
    line.markedSpans = spans;
  }

  // Helpers used when computing which overlapping collapsed span
  // counts as the larger one.
  function extraLeft(marker) { return marker.inclusiveLeft ? -1 : 0 }
  function extraRight(marker) { return marker.inclusiveRight ? 1 : 0 }

  // Returns a number indicating which of two overlapping collapsed
  // spans is larger (and thus includes the other). Falls back to
  // comparing ids when the spans cover exactly the same range.
  function compareCollapsedMarkers(a, b) {
    var lenDiff = a.lines.length - b.lines.length;
    if (lenDiff != 0) { return lenDiff }
    var aPos = a.find(), bPos = b.find();
    var fromCmp = cmp(aPos.from, bPos.from) || extraLeft(a) - extraLeft(b);
    if (fromCmp) { return -fromCmp }
    var toCmp = cmp(aPos.to, bPos.to) || extraRight(a) - extraRight(b);
    if (toCmp) { return toCmp }
    return b.id - a.id
  }

  // Find out whether a line ends or starts in a collapsed span. If
  // so, return the marker for that span.
  function collapsedSpanAtSide(line, start) {
    var sps = sawCollapsedSpans && line.markedSpans, found;
    if (sps) { for (var sp = (void 0), i = 0; i < sps.length; ++i) {
      sp = sps[i];
      if (sp.marker.collapsed && (start ? sp.from : sp.to) == null &&
          (!found || compareCollapsedMarkers(found, sp.marker) < 0))
        { found = sp.marker; }
    } }
    return found
  }
  function collapsedSpanAtStart(line) { return collapsedSpanAtSide(line, true) }
  function collapsedSpanAtEnd(line) { return collapsedSpanAtSide(line, false) }

  function collapsedSpanAround(line, ch) {
    var sps = sawCollapsedSpans && line.markedSpans, found;
    if (sps) { for (var i = 0; i < sps.length; ++i) {
      var sp = sps[i];
      if (sp.marker.collapsed && (sp.from == null || sp.from < ch) && (sp.to == null || sp.to > ch) &&
          (!found || compareCollapsedMarkers(found, sp.marker) < 0)) { found = sp.marker; }
    } }
    return found
  }

  // Test whether there exists a collapsed span that partially
  // overlaps (covers the start or end, but not both) of a new span.
  // Such overlap is not allowed.
  function conflictingCollapsedRange(doc, lineNo$$1, from, to, marker) {
    var line = getLine(doc, lineNo$$1);
    var sps = sawCollapsedSpans && line.markedSpans;
    if (sps) { for (var i = 0; i < sps.length; ++i) {
      var sp = sps[i];
      if (!sp.marker.collapsed) { continue }
      var found = sp.marker.find(0);
      var fromCmp = cmp(found.from, from) || extraLeft(sp.marker) - extraLeft(marker);
      var toCmp = cmp(found.to, to) || extraRight(sp.marker) - extraRight(marker);
      if (fromCmp >= 0 && toCmp <= 0 || fromCmp <= 0 && toCmp >= 0) { continue }
      if (fromCmp <= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.to, from) >= 0 : cmp(found.to, from) > 0) ||
          fromCmp >= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.from, to) <= 0 : cmp(found.from, to) < 0))
        { return true }
    } }
  }

  // A visual line is a line as drawn on the screen. Folding, for
  // example, can cause multiple logical lines to appear on the same
  // visual line. This finds the start of the visual line that the
  // given line is part of (usually that is the line itself).
  function visualLine(line) {
    var merged;
    while (merged = collapsedSpanAtStart(line))
      { line = merged.find(-1, true).line; }
    return line
  }

  function visualLineEnd(line) {
    var merged;
    while (merged = collapsedSpanAtEnd(line))
      { line = merged.find(1, true).line; }
    return line
  }

  // Returns an array of logical lines that continue the visual line
  // started by the argument, or undefined if there are no such lines.
  function visualLineContinued(line) {
    var merged, lines;
    while (merged = collapsedSpanAtEnd(line)) {
      line = merged.find(1, true).line
      ;(lines || (lines = [])).push(line);
    }
    return lines
  }

  // Get the line number of the start of the visual line that the
  // given line number is part of.
  function visualLineNo(doc, lineN) {
    var line = getLine(doc, lineN), vis = visualLine(line);
    if (line == vis) { return lineN }
    return lineNo(vis)
  }

  // Get the line number of the start of the next visual line after
  // the given line.
  function visualLineEndNo(doc, lineN) {
    if (lineN > doc.lastLine()) { return lineN }
    var line = getLine(doc, lineN), merged;
    if (!lineIsHidden(doc, line)) { return lineN }
    while (merged = collapsedSpanAtEnd(line))
      { line = merged.find(1, true).line; }
    return lineNo(line) + 1
  }

  // Compute whether a line is hidden. Lines count as hidden when they
  // are part of a visual line that starts with another line, or when
  // they are entirely covered by collapsed, non-widget span.
  function lineIsHidden(doc, line) {
    var sps = sawCollapsedSpans && line.markedSpans;
    if (sps) { for (var sp = (void 0), i = 0; i < sps.length; ++i) {
      sp = sps[i];
      if (!sp.marker.collapsed) { continue }
      if (sp.from == null) { return true }
      if (sp.marker.widgetNode) { continue }
      if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp))
        { return true }
    } }
  }
  function lineIsHiddenInner(doc, line, span) {
    if (span.to == null) {
      var end = span.marker.find(1, true);
      return lineIsHiddenInner(doc, end.line, getMarkedSpanFor(end.line.markedSpans, span.marker))
    }
    if (span.marker.inclusiveRight && span.to == line.text.length)
      { return true }
    for (var sp = (void 0), i = 0; i < line.markedSpans.length; ++i) {
      sp = line.markedSpans[i];
      if (sp.marker.collapsed && !sp.marker.widgetNode && sp.from == span.to &&
          (sp.to == null || sp.to != span.from) &&
          (sp.marker.inclusiveLeft || span.marker.inclusiveRight) &&
          lineIsHiddenInner(doc, line, sp)) { return true }
    }
  }

  // Find the height above the given line.
  function heightAtLine(lineObj) {
    lineObj = visualLine(lineObj);

    var h = 0, chunk = lineObj.parent;
    for (var i = 0; i < chunk.lines.length; ++i) {
      var line = chunk.lines[i];
      if (line == lineObj) { break }
      else { h += line.height; }
    }
    for (var p = chunk.parent; p; chunk = p, p = chunk.parent) {
      for (var i$1 = 0; i$1 < p.children.length; ++i$1) {
        var cur = p.children[i$1];
        if (cur == chunk) { break }
        else { h += cur.height; }
      }
    }
    return h
  }

  // Compute the character length of a line, taking into account
  // collapsed ranges (see markText) that might hide parts, and join
  // other lines onto it.
  function lineLength(line) {
    if (line.height == 0) { return 0 }
    var len = line.text.length, merged, cur = line;
    while (merged = collapsedSpanAtStart(cur)) {
      var found = merged.find(0, true);
      cur = found.from.line;
      len += found.from.ch - found.to.ch;
    }
    cur = line;
    while (merged = collapsedSpanAtEnd(cur)) {
      var found$1 = merged.find(0, true);
      len -= cur.text.length - found$1.from.ch;
      cur = found$1.to.line;
      len += cur.text.length - found$1.to.ch;
    }
    return len
  }

  // Find the longest line in the document.
  function findMaxLine(cm) {
    var d = cm.display, doc = cm.doc;
    d.maxLine = getLine(doc, doc.first);
    d.maxLineLength = lineLength(d.maxLine);
    d.maxLineChanged = true;
    doc.iter(function (line) {
      var len = lineLength(line);
      if (len > d.maxLineLength) {
        d.maxLineLength = len;
        d.maxLine = line;
      }
    });
  }

  // BIDI HELPERS

  function iterateBidiSections(order, from, to, f) {
    if (!order) { return f(from, to, "ltr", 0) }
    var found = false;
    for (var i = 0; i < order.length; ++i) {
      var part = order[i];
      if (part.from < to && part.to > from || from == to && part.to == from) {
        f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr", i);
        found = true;
      }
    }
    if (!found) { f(from, to, "ltr"); }
  }

  var bidiOther = null;
  function getBidiPartAt(order, ch, sticky) {
    var found;
    bidiOther = null;
    for (var i = 0; i < order.length; ++i) {
      var cur = order[i];
      if (cur.from < ch && cur.to > ch) { return i }
      if (cur.to == ch) {
        if (cur.from != cur.to && sticky == "before") { found = i; }
        else { bidiOther = i; }
      }
      if (cur.from == ch) {
        if (cur.from != cur.to && sticky != "before") { found = i; }
        else { bidiOther = i; }
      }
    }
    return found != null ? found : bidiOther
  }

  // Bidirectional ordering algorithm
  // See http://unicode.org/reports/tr9/tr9-13.html for the algorithm
  // that this (partially) implements.

  // One-char codes used for character types:
  // L (L):   Left-to-Right
  // R (R):   Right-to-Left
  // r (AL):  Right-to-Left Arabic
  // 1 (EN):  European Number
  // + (ES):  European Number Separator
  // % (ET):  European Number Terminator
  // n (AN):  Arabic Number
  // , (CS):  Common Number Separator
  // m (NSM): Non-Spacing Mark
  // b (BN):  Boundary Neutral
  // s (B):   Paragraph Separator
  // t (S):   Segment Separator
  // w (WS):  Whitespace
  // N (ON):  Other Neutrals

  // Returns null if characters are ordered as they appear
  // (left-to-right), or an array of sections ({from, to, level}
  // objects) in the order in which they occur visually.
  var bidiOrdering = (function() {
    // Character types for codepoints 0 to 0xff
    var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN";
    // Character types for codepoints 0x600 to 0x6f9
    var arabicTypes = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
    function charType(code) {
      if (code <= 0xf7) { return lowTypes.charAt(code) }
      else if (0x590 <= code && code <= 0x5f4) { return "R" }
      else if (0x600 <= code && code <= 0x6f9) { return arabicTypes.charAt(code - 0x600) }
      else if (0x6ee <= code && code <= 0x8ac) { return "r" }
      else if (0x2000 <= code && code <= 0x200b) { return "w" }
      else if (code == 0x200c) { return "b" }
      else { return "L" }
    }

    var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
    var isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/;

    function BidiSpan(level, from, to) {
      this.level = level;
      this.from = from; this.to = to;
    }

    return function(str, direction) {
      var outerType = direction == "ltr" ? "L" : "R";

      if (str.length == 0 || direction == "ltr" && !bidiRE.test(str)) { return false }
      var len = str.length, types = [];
      for (var i = 0; i < len; ++i)
        { types.push(charType(str.charCodeAt(i))); }

      // W1. Examine each non-spacing mark (NSM) in the level run, and
      // change the type of the NSM to the type of the previous
      // character. If the NSM is at the start of the level run, it will
      // get the type of sor.
      for (var i$1 = 0, prev = outerType; i$1 < len; ++i$1) {
        var type = types[i$1];
        if (type == "m") { types[i$1] = prev; }
        else { prev = type; }
      }

      // W2. Search backwards from each instance of a European number
      // until the first strong type (R, L, AL, or sor) is found. If an
      // AL is found, change the type of the European number to Arabic
      // number.
      // W3. Change all ALs to R.
      for (var i$2 = 0, cur = outerType; i$2 < len; ++i$2) {
        var type$1 = types[i$2];
        if (type$1 == "1" && cur == "r") { types[i$2] = "n"; }
        else if (isStrong.test(type$1)) { cur = type$1; if (type$1 == "r") { types[i$2] = "R"; } }
      }

      // W4. A single European separator between two European numbers
      // changes to a European number. A single common separator between
      // two numbers of the same type changes to that type.
      for (var i$3 = 1, prev$1 = types[0]; i$3 < len - 1; ++i$3) {
        var type$2 = types[i$3];
        if (type$2 == "+" && prev$1 == "1" && types[i$3+1] == "1") { types[i$3] = "1"; }
        else if (type$2 == "," && prev$1 == types[i$3+1] &&
                 (prev$1 == "1" || prev$1 == "n")) { types[i$3] = prev$1; }
        prev$1 = type$2;
      }

      // W5. A sequence of European terminators adjacent to European
      // numbers changes to all European numbers.
      // W6. Otherwise, separators and terminators change to Other
      // Neutral.
      for (var i$4 = 0; i$4 < len; ++i$4) {
        var type$3 = types[i$4];
        if (type$3 == ",") { types[i$4] = "N"; }
        else if (type$3 == "%") {
          var end = (void 0);
          for (end = i$4 + 1; end < len && types[end] == "%"; ++end) {}
          var replace = (i$4 && types[i$4-1] == "!") || (end < len && types[end] == "1") ? "1" : "N";
          for (var j = i$4; j < end; ++j) { types[j] = replace; }
          i$4 = end - 1;
        }
      }

      // W7. Search backwards from each instance of a European number
      // until the first strong type (R, L, or sor) is found. If an L is
      // found, then change the type of the European number to L.
      for (var i$5 = 0, cur$1 = outerType; i$5 < len; ++i$5) {
        var type$4 = types[i$5];
        if (cur$1 == "L" && type$4 == "1") { types[i$5] = "L"; }
        else if (isStrong.test(type$4)) { cur$1 = type$4; }
      }

      // N1. A sequence of neutrals takes the direction of the
      // surrounding strong text if the text on both sides has the same
      // direction. European and Arabic numbers act as if they were R in
      // terms of their influence on neutrals. Start-of-level-run (sor)
      // and end-of-level-run (eor) are used at level run boundaries.
      // N2. Any remaining neutrals take the embedding direction.
      for (var i$6 = 0; i$6 < len; ++i$6) {
        if (isNeutral.test(types[i$6])) {
          var end$1 = (void 0);
          for (end$1 = i$6 + 1; end$1 < len && isNeutral.test(types[end$1]); ++end$1) {}
          var before = (i$6 ? types[i$6-1] : outerType) == "L";
          var after = (end$1 < len ? types[end$1] : outerType) == "L";
          var replace$1 = before == after ? (before ? "L" : "R") : outerType;
          for (var j$1 = i$6; j$1 < end$1; ++j$1) { types[j$1] = replace$1; }
          i$6 = end$1 - 1;
        }
      }

      // Here we depart from the documented algorithm, in order to avoid
      // building up an actual levels array. Since there are only three
      // levels (0, 1, 2) in an implementation that doesn't take
      // explicit embedding into account, we can build up the order on
      // the fly, without following the level-based algorithm.
      var order = [], m;
      for (var i$7 = 0; i$7 < len;) {
        if (countsAsLeft.test(types[i$7])) {
          var start = i$7;
          for (++i$7; i$7 < len && countsAsLeft.test(types[i$7]); ++i$7) {}
          order.push(new BidiSpan(0, start, i$7));
        } else {
          var pos = i$7, at = order.length;
          for (++i$7; i$7 < len && types[i$7] != "L"; ++i$7) {}
          for (var j$2 = pos; j$2 < i$7;) {
            if (countsAsNum.test(types[j$2])) {
              if (pos < j$2) { order.splice(at, 0, new BidiSpan(1, pos, j$2)); }
              var nstart = j$2;
              for (++j$2; j$2 < i$7 && countsAsNum.test(types[j$2]); ++j$2) {}
              order.splice(at, 0, new BidiSpan(2, nstart, j$2));
              pos = j$2;
            } else { ++j$2; }
          }
          if (pos < i$7) { order.splice(at, 0, new BidiSpan(1, pos, i$7)); }
        }
      }
      if (direction == "ltr") {
        if (order[0].level == 1 && (m = str.match(/^\s+/))) {
          order[0].from = m[0].length;
          order.unshift(new BidiSpan(0, 0, m[0].length));
        }
        if (lst(order).level == 1 && (m = str.match(/\s+$/))) {
          lst(order).to -= m[0].length;
          order.push(new BidiSpan(0, len - m[0].length, len));
        }
      }

      return direction == "rtl" ? order.reverse() : order
    }
  })();

  // Get the bidi ordering for the given line (and cache it). Returns
  // false for lines that are fully left-to-right, and an array of
  // BidiSpan objects otherwise.
  function getOrder(line, direction) {
    var order = line.order;
    if (order == null) { order = line.order = bidiOrdering(line.text, direction); }
    return order
  }

  // EVENT HANDLING

  // Lightweight event framework. on/off also work on DOM nodes,
  // registering native DOM handlers.

  var noHandlers = [];

  var on = function(emitter, type, f) {
    if (emitter.addEventListener) {
      emitter.addEventListener(type, f, false);
    } else if (emitter.attachEvent) {
      emitter.attachEvent("on" + type, f);
    } else {
      var map$$1 = emitter._handlers || (emitter._handlers = {});
      map$$1[type] = (map$$1[type] || noHandlers).concat(f);
    }
  };

  function getHandlers(emitter, type) {
    return emitter._handlers && emitter._handlers[type] || noHandlers
  }

  function off(emitter, type, f) {
    if (emitter.removeEventListener) {
      emitter.removeEventListener(type, f, false);
    } else if (emitter.detachEvent) {
      emitter.detachEvent("on" + type, f);
    } else {
      var map$$1 = emitter._handlers, arr = map$$1 && map$$1[type];
      if (arr) {
        var index = indexOf(arr, f);
        if (index > -1)
          { map$$1[type] = arr.slice(0, index).concat(arr.slice(index + 1)); }
      }
    }
  }

  function signal(emitter, type /*, values...*/) {
    var handlers = getHandlers(emitter, type);
    if (!handlers.length) { return }
    var args = Array.prototype.slice.call(arguments, 2);
    for (var i = 0; i < handlers.length; ++i) { handlers[i].apply(null, args); }
  }

  // The DOM events that CodeMirror handles can be overridden by
  // registering a (non-DOM) handler on the editor for the event name,
  // and preventDefault-ing the event in that handler.
  function signalDOMEvent(cm, e, override) {
    if (typeof e == "string")
      { e = {type: e, preventDefault: function() { this.defaultPrevented = true; }}; }
    signal(cm, override || e.type, cm, e);
    return e_defaultPrevented(e) || e.codemirrorIgnore
  }

  function signalCursorActivity(cm) {
    var arr = cm._handlers && cm._handlers.cursorActivity;
    if (!arr) { return }
    var set = cm.curOp.cursorActivityHandlers || (cm.curOp.cursorActivityHandlers = []);
    for (var i = 0; i < arr.length; ++i) { if (indexOf(set, arr[i]) == -1)
      { set.push(arr[i]); } }
  }

  function hasHandler(emitter, type) {
    return getHandlers(emitter, type).length > 0
  }

  // Add on and off methods to a constructor's prototype, to make
  // registering events on such objects more convenient.
  function eventMixin(ctor) {
    ctor.prototype.on = function(type, f) {on(this, type, f);};
    ctor.prototype.off = function(type, f) {off(this, type, f);};
  }

  // Due to the fact that we still support jurassic IE versions, some
  // compatibility wrappers are needed.

  function e_preventDefault(e) {
    if (e.preventDefault) { e.preventDefault(); }
    else { e.returnValue = false; }
  }
  function e_stopPropagation(e) {
    if (e.stopPropagation) { e.stopPropagation(); }
    else { e.cancelBubble = true; }
  }
  function e_defaultPrevented(e) {
    return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false
  }
  function e_stop(e) {e_preventDefault(e); e_stopPropagation(e);}

  function e_target(e) {return e.target || e.srcElement}
  function e_button(e) {
    var b = e.which;
    if (b == null) {
      if (e.button & 1) { b = 1; }
      else if (e.button & 2) { b = 3; }
      else if (e.button & 4) { b = 2; }
    }
    if (mac && e.ctrlKey && b == 1) { b = 3; }
    return b
  }

  // Detect drag-and-drop
  var dragAndDrop = function() {
    // There is *some* kind of drag-and-drop support in IE6-8, but I
    // couldn't get it to work yet.
    if (ie && ie_version < 9) { return false }
    var div = elt('div');
    return "draggable" in div || "dragDrop" in div
  }();

  var zwspSupported;
  function zeroWidthElement(measure) {
    if (zwspSupported == null) {
      var test = elt("span", "\u200b");
      removeChildrenAndAdd(measure, elt("span", [test, document.createTextNode("x")]));
      if (measure.firstChild.offsetHeight != 0)
        { zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !(ie && ie_version < 8); }
    }
    var node = zwspSupported ? elt("span", "\u200b") :
      elt("span", "\u00a0", null, "display: inline-block; width: 1px; margin-right: -1px");
    node.setAttribute("cm-text", "");
    return node
  }

  // Feature-detect IE's crummy client rect reporting for bidi text
  var badBidiRects;
  function hasBadBidiRects(measure) {
    if (badBidiRects != null) { return badBidiRects }
    var txt = removeChildrenAndAdd(measure, document.createTextNode("A\u062eA"));
    var r0 = range(txt, 0, 1).getBoundingClientRect();
    var r1 = range(txt, 1, 2).getBoundingClientRect();
    removeChildren(measure);
    if (!r0 || r0.left == r0.right) { return false } // Safari returns null in some cases (#2780)
    return badBidiRects = (r1.right - r0.right < 3)
  }

  // See if "".split is the broken IE version, if so, provide an
  // alternative way to split lines.
  var splitLinesAuto = "\n\nb".split(/\n/).length != 3 ? function (string) {
    var pos = 0, result = [], l = string.length;
    while (pos <= l) {
      var nl = string.indexOf("\n", pos);
      if (nl == -1) { nl = string.length; }
      var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl);
      var rt = line.indexOf("\r");
      if (rt != -1) {
        result.push(line.slice(0, rt));
        pos += rt + 1;
      } else {
        result.push(line);
        pos = nl + 1;
      }
    }
    return result
  } : function (string) { return string.split(/\r\n?|\n/); };

  var hasSelection = window.getSelection ? function (te) {
    try { return te.selectionStart != te.selectionEnd }
    catch(e) { return false }
  } : function (te) {
    var range$$1;
    try {range$$1 = te.ownerDocument.selection.createRange();}
    catch(e) {}
    if (!range$$1 || range$$1.parentElement() != te) { return false }
    return range$$1.compareEndPoints("StartToEnd", range$$1) != 0
  };

  var hasCopyEvent = (function () {
    var e = elt("div");
    if ("oncopy" in e) { return true }
    e.setAttribute("oncopy", "return;");
    return typeof e.oncopy == "function"
  })();

  var badZoomedRects = null;
  function hasBadZoomedRects(measure) {
    if (badZoomedRects != null) { return badZoomedRects }
    var node = removeChildrenAndAdd(measure, elt("span", "x"));
    var normal = node.getBoundingClientRect();
    var fromRange = range(node, 0, 1).getBoundingClientRect();
    return badZoomedRects = Math.abs(normal.left - fromRange.left) > 1
  }

  // Known modes, by name and by MIME
  var modes = {}, mimeModes = {};

  // Extra arguments are stored as the mode's dependencies, which is
  // used by (legacy) mechanisms like loadmode.js to automatically
  // load a mode. (Preferred mechanism is the require/define calls.)
  function defineMode(name, mode) {
    if (arguments.length > 2)
      { mode.dependencies = Array.prototype.slice.call(arguments, 2); }
    modes[name] = mode;
  }

  function defineMIME(mime, spec) {
    mimeModes[mime] = spec;
  }

  // Given a MIME type, a {name, ...options} config object, or a name
  // string, return a mode config object.
  function resolveMode(spec) {
    if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
      spec = mimeModes[spec];
    } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
      var found = mimeModes[spec.name];
      if (typeof found == "string") { found = {name: found}; }
      spec = createObj(found, spec);
      spec.name = found.name;
    } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
      return resolveMode("application/xml")
    } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(spec)) {
      return resolveMode("application/json")
    }
    if (typeof spec == "string") { return {name: spec} }
    else { return spec || {name: "null"} }
  }

  // Given a mode spec (anything that resolveMode accepts), find and
  // initialize an actual mode object.
  function getMode(options, spec) {
    spec = resolveMode(spec);
    var mfactory = modes[spec.name];
    if (!mfactory) { return getMode(options, "text/plain") }
    var modeObj = mfactory(options, spec);
    if (modeExtensions.hasOwnProperty(spec.name)) {
      var exts = modeExtensions[spec.name];
      for (var prop in exts) {
        if (!exts.hasOwnProperty(prop)) { continue }
        if (modeObj.hasOwnProperty(prop)) { modeObj["_" + prop] = modeObj[prop]; }
        modeObj[prop] = exts[prop];
      }
    }
    modeObj.name = spec.name;
    if (spec.helperType) { modeObj.helperType = spec.helperType; }
    if (spec.modeProps) { for (var prop$1 in spec.modeProps)
      { modeObj[prop$1] = spec.modeProps[prop$1]; } }

    return modeObj
  }

  // This can be used to attach properties to mode objects from
  // outside the actual mode definition.
  var modeExtensions = {};
  function extendMode(mode, properties) {
    var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : (modeExtensions[mode] = {});
    copyObj(properties, exts);
  }

  function copyState(mode, state) {
    if (state === true) { return state }
    if (mode.copyState) { return mode.copyState(state) }
    var nstate = {};
    for (var n in state) {
      var val = state[n];
      if (val instanceof Array) { val = val.concat([]); }
      nstate[n] = val;
    }
    return nstate
  }

  // Given a mode and a state (for that mode), find the inner mode and
  // state at the position that the state refers to.
  function innerMode(mode, state) {
    var info;
    while (mode.innerMode) {
      info = mode.innerMode(state);
      if (!info || info.mode == mode) { break }
      state = info.state;
      mode = info.mode;
    }
    return info || {mode: mode, state: state}
  }

  function startState(mode, a1, a2) {
    return mode.startState ? mode.startState(a1, a2) : true
  }

  // STRING STREAM

  // Fed to the mode parsers, provides helper functions to make
  // parsers more succinct.

  var StringStream = function(string, tabSize, lineOracle) {
    this.pos = this.start = 0;
    this.string = string;
    this.tabSize = tabSize || 8;
    this.lastColumnPos = this.lastColumnValue = 0;
    this.lineStart = 0;
    this.lineOracle = lineOracle;
  };

  StringStream.prototype.eol = function () {return this.pos >= this.string.length};
  StringStream.prototype.sol = function () {return this.pos == this.lineStart};
  StringStream.prototype.peek = function () {return this.string.charAt(this.pos) || undefined};
  StringStream.prototype.next = function () {
    if (this.pos < this.string.length)
      { return this.string.charAt(this.pos++) }
  };
  StringStream.prototype.eat = function (match) {
    var ch = this.string.charAt(this.pos);
    var ok;
    if (typeof match == "string") { ok = ch == match; }
    else { ok = ch && (match.test ? match.test(ch) : match(ch)); }
    if (ok) {++this.pos; return ch}
  };
  StringStream.prototype.eatWhile = function (match) {
    var start = this.pos;
    while (this.eat(match)){}
    return this.pos > start
  };
  StringStream.prototype.eatSpace = function () {
      var this$1 = this;

    var start = this.pos;
    while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) { ++this$1.pos; }
    return this.pos > start
  };
  StringStream.prototype.skipToEnd = function () {this.pos = this.string.length;};
  StringStream.prototype.skipTo = function (ch) {
    var found = this.string.indexOf(ch, this.pos);
    if (found > -1) {this.pos = found; return true}
  };
  StringStream.prototype.backUp = function (n) {this.pos -= n;};
  StringStream.prototype.column = function () {
    if (this.lastColumnPos < this.start) {
      this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue);
      this.lastColumnPos = this.start;
    }
    return this.lastColumnValue - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0)
  };
  StringStream.prototype.indentation = function () {
    return countColumn(this.string, null, this.tabSize) -
      (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0)
  };
  StringStream.prototype.match = function (pattern, consume, caseInsensitive) {
    if (typeof pattern == "string") {
      var cased = function (str) { return caseInsensitive ? str.toLowerCase() : str; };
      var substr = this.string.substr(this.pos, pattern.length);
      if (cased(substr) == cased(pattern)) {
        if (consume !== false) { this.pos += pattern.length; }
        return true
      }
    } else {
      var match = this.string.slice(this.pos).match(pattern);
      if (match && match.index > 0) { return null }
      if (match && consume !== false) { this.pos += match[0].length; }
      return match
    }
  };
  StringStream.prototype.current = function (){return this.string.slice(this.start, this.pos)};
  StringStream.prototype.hideFirstChars = function (n, inner) {
    this.lineStart += n;
    try { return inner() }
    finally { this.lineStart -= n; }
  };
  StringStream.prototype.lookAhead = function (n) {
    var oracle = this.lineOracle;
    return oracle && oracle.lookAhead(n)
  };
  StringStream.prototype.baseToken = function () {
    var oracle = this.lineOracle;
    return oracle && oracle.baseToken(this.pos)
  };

  var SavedContext = function(state, lookAhead) {
    this.state = state;
    this.lookAhead = lookAhead;
  };

  var Context = function(doc, state, line, lookAhead) {
    this.state = state;
    this.doc = doc;
    this.line = line;
    this.maxLookAhead = lookAhead || 0;
    this.baseTokens = null;
    this.baseTokenPos = 1;
  };

  Context.prototype.lookAhead = function (n) {
    var line = this.doc.getLine(this.line + n);
    if (line != null && n > this.maxLookAhead) { this.maxLookAhead = n; }
    return line
  };

  Context.prototype.baseToken = function (n) {
      var this$1 = this;

    if (!this.baseTokens) { return null }
    while (this.baseTokens[this.baseTokenPos] <= n)
      { this$1.baseTokenPos += 2; }
    var type = this.baseTokens[this.baseTokenPos + 1];
    return {type: type && type.replace(/( |^)overlay .*/, ""),
            size: this.baseTokens[this.baseTokenPos] - n}
  };

  Context.prototype.nextLine = function () {
    this.line++;
    if (this.maxLookAhead > 0) { this.maxLookAhead--; }
  };

  Context.fromSaved = function (doc, saved, line) {
    if (saved instanceof SavedContext)
      { return new Context(doc, copyState(doc.mode, saved.state), line, saved.lookAhead) }
    else
      { return new Context(doc, copyState(doc.mode, saved), line) }
  };

  Context.prototype.save = function (copy) {
    var state = copy !== false ? copyState(this.doc.mode, this.state) : this.state;
    return this.maxLookAhead > 0 ? new SavedContext(state, this.maxLookAhead) : state
  };


  // Compute a style array (an array starting with a mode generation
  // -- for invalidation -- followed by pairs of end positions and
  // style strings), which is used to highlight the tokens on the
  // line.
  function highlightLine(cm, line, context, forceToEnd) {
    // A styles array always starts with a number identifying the
    // mode/overlays that it is based on (for easy invalidation).
    var st = [cm.state.modeGen], lineClasses = {};
    // Compute the base array of styles
    runMode(cm, line.text, cm.doc.mode, context, function (end, style) { return st.push(end, style); },
            lineClasses, forceToEnd);
    var state = context.state;

    // Run overlays, adjust style array.
    var loop = function ( o ) {
      context.baseTokens = st;
      var overlay = cm.state.overlays[o], i = 1, at = 0;
      context.state = true;
      runMode(cm, line.text, overlay.mode, context, function (end, style) {
        var start = i;
        // Ensure there's a token end at the current position, and that i points at it
        while (at < end) {
          var i_end = st[i];
          if (i_end > end)
            { st.splice(i, 1, end, st[i+1], i_end); }
          i += 2;
          at = Math.min(end, i_end);
        }
        if (!style) { return }
        if (overlay.opaque) {
          st.splice(start, i - start, end, "overlay " + style);
          i = start + 2;
        } else {
          for (; start < i; start += 2) {
            var cur = st[start+1];
            st[start+1] = (cur ? cur + " " : "") + "overlay " + style;
          }
        }
      }, lineClasses);
      context.state = state;
      context.baseTokens = null;
      context.baseTokenPos = 1;
    };

    for (var o = 0; o < cm.state.overlays.length; ++o) loop( o );

    return {styles: st, classes: lineClasses.bgClass || lineClasses.textClass ? lineClasses : null}
  }

  function getLineStyles(cm, line, updateFrontier) {
    if (!line.styles || line.styles[0] != cm.state.modeGen) {
      var context = getContextBefore(cm, lineNo(line));
      var resetState = line.text.length > cm.options.maxHighlightLength && copyState(cm.doc.mode, context.state);
      var result = highlightLine(cm, line, context);
      if (resetState) { context.state = resetState; }
      line.stateAfter = context.save(!resetState);
      line.styles = result.styles;
      if (result.classes) { line.styleClasses = result.classes; }
      else if (line.styleClasses) { line.styleClasses = null; }
      if (updateFrontier === cm.doc.highlightFrontier)
        { cm.doc.modeFrontier = Math.max(cm.doc.modeFrontier, ++cm.doc.highlightFrontier); }
    }
    return line.styles
  }

  function getContextBefore(cm, n, precise) {
    var doc = cm.doc, display = cm.display;
    if (!doc.mode.startState) { return new Context(doc, true, n) }
    var start = findStartLine(cm, n, precise);
    var saved = start > doc.first && getLine(doc, start - 1).stateAfter;
    var context = saved ? Context.fromSaved(doc, saved, start) : new Context(doc, startState(doc.mode), start);

    doc.iter(start, n, function (line) {
      processLine(cm, line.text, context);
      var pos = context.line;
      line.stateAfter = pos == n - 1 || pos % 5 == 0 || pos >= display.viewFrom && pos < display.viewTo ? context.save() : null;
      context.nextLine();
    });
    if (precise) { doc.modeFrontier = context.line; }
    return context
  }

  // Lightweight form of highlight -- proceed over this line and
  // update state, but don't save a style array. Used for lines that
  // aren't currently visible.
  function processLine(cm, text, context, startAt) {
    var mode = cm.doc.mode;
    var stream = new StringStream(text, cm.options.tabSize, context);
    stream.start = stream.pos = startAt || 0;
    if (text == "") { callBlankLine(mode, context.state); }
    while (!stream.eol()) {
      readToken(mode, stream, context.state);
      stream.start = stream.pos;
    }
  }

  function callBlankLine(mode, state) {
    if (mode.blankLine) { return mode.blankLine(state) }
    if (!mode.innerMode) { return }
    var inner = innerMode(mode, state);
    if (inner.mode.blankLine) { return inner.mode.blankLine(inner.state) }
  }

  function readToken(mode, stream, state, inner) {
    for (var i = 0; i < 10; i++) {
      if (inner) { inner[0] = innerMode(mode, state).mode; }
      var style = mode.token(stream, state);
      if (stream.pos > stream.start) { return style }
    }
    throw new Error("Mode " + mode.name + " failed to advance stream.")
  }

  var Token = function(stream, type, state) {
    this.start = stream.start; this.end = stream.pos;
    this.string = stream.current();
    this.type = type || null;
    this.state = state;
  };

  // Utility for getTokenAt and getLineTokens
  function takeToken(cm, pos, precise, asArray) {
    var doc = cm.doc, mode = doc.mode, style;
    pos = clipPos(doc, pos);
    var line = getLine(doc, pos.line), context = getContextBefore(cm, pos.line, precise);
    var stream = new StringStream(line.text, cm.options.tabSize, context), tokens;
    if (asArray) { tokens = []; }
    while ((asArray || stream.pos < pos.ch) && !stream.eol()) {
      stream.start = stream.pos;
      style = readToken(mode, stream, context.state);
      if (asArray) { tokens.push(new Token(stream, style, copyState(doc.mode, context.state))); }
    }
    return asArray ? tokens : new Token(stream, style, context.state)
  }

  function extractLineClasses(type, output) {
    if (type) { for (;;) {
      var lineClass = type.match(/(?:^|\s+)line-(background-)?(\S+)/);
      if (!lineClass) { break }
      type = type.slice(0, lineClass.index) + type.slice(lineClass.index + lineClass[0].length);
      var prop = lineClass[1] ? "bgClass" : "textClass";
      if (output[prop] == null)
        { output[prop] = lineClass[2]; }
      else if (!(new RegExp("(?:^|\s)" + lineClass[2] + "(?:$|\s)")).test(output[prop]))
        { output[prop] += " " + lineClass[2]; }
    } }
    return type
  }

  // Run the given mode's parser over a line, calling f for each token.
  function runMode(cm, text, mode, context, f, lineClasses, forceToEnd) {
    var flattenSpans = mode.flattenSpans;
    if (flattenSpans == null) { flattenSpans = cm.options.flattenSpans; }
    var curStart = 0, curStyle = null;
    var stream = new StringStream(text, cm.options.tabSize, context), style;
    var inner = cm.options.addModeClass && [null];
    if (text == "") { extractLineClasses(callBlankLine(mode, context.state), lineClasses); }
    while (!stream.eol()) {
      if (stream.pos > cm.options.maxHighlightLength) {
        flattenSpans = false;
        if (forceToEnd) { processLine(cm, text, context, stream.pos); }
        stream.pos = text.length;
        style = null;
      } else {
        style = extractLineClasses(readToken(mode, stream, context.state, inner), lineClasses);
      }
      if (inner) {
        var mName = inner[0].name;
        if (mName) { style = "m-" + (style ? mName + " " + style : mName); }
      }
      if (!flattenSpans || curStyle != style) {
        while (curStart < stream.start) {
          curStart = Math.min(stream.start, curStart + 5000);
          f(curStart, curStyle);
        }
        curStyle = style;
      }
      stream.start = stream.pos;
    }
    while (curStart < stream.pos) {
      // Webkit seems to refuse to render text nodes longer than 57444
      // characters, and returns inaccurate measurements in nodes
      // starting around 5000 chars.
      var pos = Math.min(stream.pos, curStart + 5000);
      f(pos, curStyle);
      curStart = pos;
    }
  }

  // Finds the line to start with when starting a parse. Tries to
  // find a line with a stateAfter, so that it can start with a
  // valid state. If that fails, it returns the line with the
  // smallest indentation, which tends to need the least context to
  // parse correctly.
  function findStartLine(cm, n, precise) {
    var minindent, minline, doc = cm.doc;
    var lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1000 : 100);
    for (var search = n; search > lim; --search) {
      if (search <= doc.first) { return doc.first }
      var line = getLine(doc, search - 1), after = line.stateAfter;
      if (after && (!precise || search + (after instanceof SavedContext ? after.lookAhead : 0) <= doc.modeFrontier))
        { return search }
      var indented = countColumn(line.text, null, cm.options.tabSize);
      if (minline == null || minindent > indented) {
        minline = search - 1;
        minindent = indented;
      }
    }
    return minline
  }

  function retreatFrontier(doc, n) {
    doc.modeFrontier = Math.min(doc.modeFrontier, n);
    if (doc.highlightFrontier < n - 10) { return }
    var start = doc.first;
    for (var line = n - 1; line > start; line--) {
      var saved = getLine(doc, line).stateAfter;
      // change is on 3
      // state on line 1 looked ahead 2 -- so saw 3
      // test 1 + 2 < 3 should cover this
      if (saved && (!(saved instanceof SavedContext) || line + saved.lookAhead < n)) {
        start = line + 1;
        break
      }
    }
    doc.highlightFrontier = Math.min(doc.highlightFrontier, start);
  }

  // LINE DATA STRUCTURE

  // Line objects. These hold state related to a line, including
  // highlighting info (the styles array).
  var Line = function(text, markedSpans, estimateHeight) {
    this.text = text;
    attachMarkedSpans(this, markedSpans);
    this.height = estimateHeight ? estimateHeight(this) : 1;
  };

  Line.prototype.lineNo = function () { return lineNo(this) };
  eventMixin(Line);

  // Change the content (text, markers) of a line. Automatically
  // invalidates cached information and tries to re-estimate the
  // line's height.
  function updateLine(line, text, markedSpans, estimateHeight) {
    line.text = text;
    if (line.stateAfter) { line.stateAfter = null; }
    if (line.styles) { line.styles = null; }
    if (line.order != null) { line.order = null; }
    detachMarkedSpans(line);
    attachMarkedSpans(line, markedSpans);
    var estHeight = estimateHeight ? estimateHeight(line) : 1;
    if (estHeight != line.height) { updateLineHeight(line, estHeight); }
  }

  // Detach a line from the document tree and its markers.
  function cleanUpLine(line) {
    line.parent = null;
    detachMarkedSpans(line);
  }

  // Convert a style as returned by a mode (either null, or a string
  // containing one or more styles) to a CSS style. This is cached,
  // and also looks for line-wide styles.
  var styleToClassCache = {}, styleToClassCacheWithMode = {};
  function interpretTokenStyle(style, options) {
    if (!style || /^\s*$/.test(style)) { return null }
    var cache = options.addModeClass ? styleToClassCacheWithMode : styleToClassCache;
    return cache[style] ||
      (cache[style] = style.replace(/\S+/g, "cm-$&"))
  }

  // Render the DOM representation of the text of a line. Also builds
  // up a 'line map', which points at the DOM nodes that represent
  // specific stretches of text, and is used by the measuring code.
  // The returned object contains the DOM node, this map, and
  // information about line-wide styles that were set by the mode.
  function buildLineContent(cm, lineView) {
    // The padding-right forces the element to have a 'border', which
    // is needed on Webkit to be able to get line-level bounding
    // rectangles for it (in measureChar).
    var content = eltP("span", null, null, webkit ? "padding-right: .1px" : null);
    var builder = {pre: eltP("pre", [content], "CodeMirror-line"), content: content,
                   col: 0, pos: 0, cm: cm,
                   trailingSpace: false,
                   splitSpaces: cm.getOption("lineWrapping")};
    lineView.measure = {};

    // Iterate over the logical lines that make up this visual line.
    for (var i = 0; i <= (lineView.rest ? lineView.rest.length : 0); i++) {
      var line = i ? lineView.rest[i - 1] : lineView.line, order = (void 0);
      builder.pos = 0;
      builder.addToken = buildToken;
      // Optionally wire in some hacks into the token-rendering
      // algorithm, to deal with browser quirks.
      if (hasBadBidiRects(cm.display.measure) && (order = getOrder(line, cm.doc.direction)))
        { builder.addToken = buildTokenBadBidi(builder.addToken, order); }
      builder.map = [];
      var allowFrontierUpdate = lineView != cm.display.externalMeasured && lineNo(line);
      insertLineContent(line, builder, getLineStyles(cm, line, allowFrontierUpdate));
      if (line.styleClasses) {
        if (line.styleClasses.bgClass)
          { builder.bgClass = joinClasses(line.styleClasses.bgClass, builder.bgClass || ""); }
        if (line.styleClasses.textClass)
          { builder.textClass = joinClasses(line.styleClasses.textClass, builder.textClass || ""); }
      }

      // Ensure at least a single node is present, for measuring.
      if (builder.map.length == 0)
        { builder.map.push(0, 0, builder.content.appendChild(zeroWidthElement(cm.display.measure))); }

      // Store the map and a cache object for the current logical line
      if (i == 0) {
        lineView.measure.map = builder.map;
        lineView.measure.cache = {};
      } else {
  (lineView.measure.maps || (lineView.measure.maps = [])).push(builder.map)
        ;(lineView.measure.caches || (lineView.measure.caches = [])).push({});
      }
    }

    // See issue #2901
    if (webkit) {
      var last = builder.content.lastChild;
      if (/\bcm-tab\b/.test(last.className) || (last.querySelector && last.querySelector(".cm-tab")))
        { builder.content.className = "cm-tab-wrap-hack"; }
    }

    signal(cm, "renderLine", cm, lineView.line, builder.pre);
    if (builder.pre.className)
      { builder.textClass = joinClasses(builder.pre.className, builder.textClass || ""); }

    return builder
  }

  function defaultSpecialCharPlaceholder(ch) {
    var token = elt("span", "\u2022", "cm-invalidchar");
    token.title = "\\u" + ch.charCodeAt(0).toString(16);
    token.setAttribute("aria-label", token.title);
    return token
  }

  // Build up the DOM representation for a single token, and add it to
  // the line map. Takes care to render special characters separately.
  function buildToken(builder, text, style, startStyle, endStyle, css, attributes) {
    if (!text) { return }
    var displayText = builder.splitSpaces ? splitSpaces(text, builder.trailingSpace) : text;
    var special = builder.cm.state.specialChars, mustWrap = false;
    var content;
    if (!special.test(text)) {
      builder.col += text.length;
      content = document.createTextNode(displayText);
      builder.map.push(builder.pos, builder.pos + text.length, content);
      if (ie && ie_version < 9) { mustWrap = true; }
      builder.pos += text.length;
    } else {
      content = document.createDocumentFragment();
      var pos = 0;
      while (true) {
        special.lastIndex = pos;
        var m = special.exec(text);
        var skipped = m ? m.index - pos : text.length - pos;
        if (skipped) {
          var txt = document.createTextNode(displayText.slice(pos, pos + skipped));
          if (ie && ie_version < 9) { content.appendChild(elt("span", [txt])); }
          else { content.appendChild(txt); }
          builder.map.push(builder.pos, builder.pos + skipped, txt);
          builder.col += skipped;
          builder.pos += skipped;
        }
        if (!m) { break }
        pos += skipped + 1;
        var txt$1 = (void 0);
        if (m[0] == "\t") {
          var tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize;
          txt$1 = content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"));
          txt$1.setAttribute("role", "presentation");
          txt$1.setAttribute("cm-text", "\t");
          builder.col += tabWidth;
        } else if (m[0] == "\r" || m[0] == "\n") {
          txt$1 = content.appendChild(elt("span", m[0] == "\r" ? "\u240d" : "\u2424", "cm-invalidchar"));
          txt$1.setAttribute("cm-text", m[0]);
          builder.col += 1;
        } else {
          txt$1 = builder.cm.options.specialCharPlaceholder(m[0]);
          txt$1.setAttribute("cm-text", m[0]);
          if (ie && ie_version < 9) { content.appendChild(elt("span", [txt$1])); }
          else { content.appendChild(txt$1); }
          builder.col += 1;
        }
        builder.map.push(builder.pos, builder.pos + 1, txt$1);
        builder.pos++;
      }
    }
    builder.trailingSpace = displayText.charCodeAt(text.length - 1) == 32;
    if (style || startStyle || endStyle || mustWrap || css) {
      var fullStyle = style || "";
      if (startStyle) { fullStyle += startStyle; }
      if (endStyle) { fullStyle += endStyle; }
      var token = elt("span", [content], fullStyle, css);
      if (attributes) {
        for (var attr in attributes) { if (attributes.hasOwnProperty(attr) && attr != "style" && attr != "class")
          { token.setAttribute(attr, attributes[attr]); } }
      }
      return builder.content.appendChild(token)
    }
    builder.content.appendChild(content);
  }

  // Change some spaces to NBSP to prevent the browser from collapsing
  // trailing spaces at the end of a line when rendering text (issue #1362).
  function splitSpaces(text, trailingBefore) {
    if (text.length > 1 && !/  /.test(text)) { return text }
    var spaceBefore = trailingBefore, result = "";
    for (var i = 0; i < text.length; i++) {
      var ch = text.charAt(i);
      if (ch == " " && spaceBefore && (i == text.length - 1 || text.charCodeAt(i + 1) == 32))
        { ch = "\u00a0"; }
      result += ch;
      spaceBefore = ch == " ";
    }
    return result
  }

  // Work around nonsense dimensions being reported for stretches of
  // right-to-left text.
  function buildTokenBadBidi(inner, order) {
    return function (builder, text, style, startStyle, endStyle, css, attributes) {
      style = style ? style + " cm-force-border" : "cm-force-border";
      var start = builder.pos, end = start + text.length;
      for (;;) {
        // Find the part that overlaps with the start of this text
        var part = (void 0);
        for (var i = 0; i < order.length; i++) {
          part = order[i];
          if (part.to > start && part.from <= start) { break }
        }
        if (part.to >= end) { return inner(builder, text, style, startStyle, endStyle, css, attributes) }
        inner(builder, text.slice(0, part.to - start), style, startStyle, null, css, attributes);
        startStyle = null;
        text = text.slice(part.to - start);
        start = part.to;
      }
    }
  }

  function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
    var widget = !ignoreWidget && marker.widgetNode;
    if (widget) { builder.map.push(builder.pos, builder.pos + size, widget); }
    if (!ignoreWidget && builder.cm.display.input.needsContentAttribute) {
      if (!widget)
        { widget = builder.content.appendChild(document.createElement("span")); }
      widget.setAttribute("cm-marker", marker.id);
    }
    if (widget) {
      builder.cm.display.input.setUneditable(widget);
      builder.content.appendChild(widget);
    }
    builder.pos += size;
    builder.trailingSpace = false;
  }

  // Outputs a number of spans to make up a line, taking highlighting
  // and marked text into account.
  function insertLineContent(line, builder, styles) {
    var spans = line.markedSpans, allText = line.text, at = 0;
    if (!spans) {
      for (var i$1 = 1; i$1 < styles.length; i$1+=2)
        { builder.addToken(builder, allText.slice(at, at = styles[i$1]), interpretTokenStyle(styles[i$1+1], builder.cm.options)); }
      return
    }

    var len = allText.length, pos = 0, i = 1, text = "", style, css;
    var nextChange = 0, spanStyle, spanEndStyle, spanStartStyle, collapsed, attributes;
    for (;;) {
      if (nextChange == pos) { // Update current marker set
        spanStyle = spanEndStyle = spanStartStyle = css = "";
        attributes = null;
        collapsed = null; nextChange = Infinity;
        var foundBookmarks = [], endStyles = (void 0);
        for (var j = 0; j < spans.length; ++j) {
          var sp = spans[j], m = sp.marker;
          if (m.type == "bookmark" && sp.from == pos && m.widgetNode) {
            foundBookmarks.push(m);
          } else if (sp.from <= pos && (sp.to == null || sp.to > pos || m.collapsed && sp.to == pos && sp.from == pos)) {
            if (sp.to != null && sp.to != pos && nextChange > sp.to) {
              nextChange = sp.to;
              spanEndStyle = "";
            }
            if (m.className) { spanStyle += " " + m.className; }
            if (m.css) { css = (css ? css + ";" : "") + m.css; }
            if (m.startStyle && sp.from == pos) { spanStartStyle += " " + m.startStyle; }
            if (m.endStyle && sp.to == nextChange) { (endStyles || (endStyles = [])).push(m.endStyle, sp.to); }
            // support for the old title property
            // https://github.com/codemirror/CodeMirror/pull/5673
            if (m.title) { (attributes || (attributes = {})).title = m.title; }
            if (m.attributes) {
              for (var attr in m.attributes)
                { (attributes || (attributes = {}))[attr] = m.attributes[attr]; }
            }
            if (m.collapsed && (!collapsed || compareCollapsedMarkers(collapsed.marker, m) < 0))
              { collapsed = sp; }
          } else if (sp.from > pos && nextChange > sp.from) {
            nextChange = sp.from;
          }
        }
        if (endStyles) { for (var j$1 = 0; j$1 < endStyles.length; j$1 += 2)
          { if (endStyles[j$1 + 1] == nextChange) { spanEndStyle += " " + endStyles[j$1]; } } }

        if (!collapsed || collapsed.from == pos) { for (var j$2 = 0; j$2 < foundBookmarks.length; ++j$2)
          { buildCollapsedSpan(builder, 0, foundBookmarks[j$2]); } }
        if (collapsed && (collapsed.from || 0) == pos) {
          buildCollapsedSpan(builder, (collapsed.to == null ? len + 1 : collapsed.to) - pos,
                             collapsed.marker, collapsed.from == null);
          if (collapsed.to == null) { return }
          if (collapsed.to == pos) { collapsed = false; }
        }
      }
      if (pos >= len) { break }

      var upto = Math.min(len, nextChange);
      while (true) {
        if (text) {
          var end = pos + text.length;
          if (!collapsed) {
            var tokenText = end > upto ? text.slice(0, upto - pos) : text;
            builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle,
                             spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", css, attributes);
          }
          if (end >= upto) {text = text.slice(upto - pos); pos = upto; break}
          pos = end;
          spanStartStyle = "";
        }
        text = allText.slice(at, at = styles[i++]);
        style = interpretTokenStyle(styles[i++], builder.cm.options);
      }
    }
  }


  // These objects are used to represent the visible (currently drawn)
  // part of the document. A LineView may correspond to multiple
  // logical lines, if those are connected by collapsed ranges.
  function LineView(doc, line, lineN) {
    // The starting line
    this.line = line;
    // Continuing lines, if any
    this.rest = visualLineContinued(line);
    // Number of logical lines in this visual line
    this.size = this.rest ? lineNo(lst(this.rest)) - lineN + 1 : 1;
    this.node = this.text = null;
    this.hidden = lineIsHidden(doc, line);
  }

  // Create a range of LineView objects for the given lines.
  function buildViewArray(cm, from, to) {
    var array = [], nextPos;
    for (var pos = from; pos < to; pos = nextPos) {
      var view = new LineView(cm.doc, getLine(cm.doc, pos), pos);
      nextPos = pos + view.size;
      array.push(view);
    }
    return array
  }

  var operationGroup = null;

  function pushOperation(op) {
    if (operationGroup) {
      operationGroup.ops.push(op);
    } else {
      op.ownsGroup = operationGroup = {
        ops: [op],
        delayedCallbacks: []
      };
    }
  }

  function fireCallbacksForOps(group) {
    // Calls delayed callbacks and cursorActivity handlers until no
    // new ones appear
    var callbacks = group.delayedCallbacks, i = 0;
    do {
      for (; i < callbacks.length; i++)
        { callbacks[i].call(null); }
      for (var j = 0; j < group.ops.length; j++) {
        var op = group.ops[j];
        if (op.cursorActivityHandlers)
          { while (op.cursorActivityCalled < op.cursorActivityHandlers.length)
            { op.cursorActivityHandlers[op.cursorActivityCalled++].call(null, op.cm); } }
      }
    } while (i < callbacks.length)
  }

  function finishOperation(op, endCb) {
    var group = op.ownsGroup;
    if (!group) { return }

    try { fireCallbacksForOps(group); }
    finally {
      operationGroup = null;
      endCb(group);
    }
  }

  var orphanDelayedCallbacks = null;

  // Often, we want to signal events at a point where we are in the
  // middle of some work, but don't want the handler to start calling
  // other methods on the editor, which might be in an inconsistent
  // state or simply not expect any other events to happen.
  // signalLater looks whether there are any handlers, and schedules
  // them to be executed when the last operation ends, or, if no
  // operation is active, when a timeout fires.
  function signalLater(emitter, type /*, values...*/) {
    var arr = getHandlers(emitter, type);
    if (!arr.length) { return }
    var args = Array.prototype.slice.call(arguments, 2), list;
    if (operationGroup) {
      list = operationGroup.delayedCallbacks;
    } else if (orphanDelayedCallbacks) {
      list = orphanDelayedCallbacks;
    } else {
      list = orphanDelayedCallbacks = [];
      setTimeout(fireOrphanDelayed, 0);
    }
    var loop = function ( i ) {
      list.push(function () { return arr[i].apply(null, args); });
    };

    for (var i = 0; i < arr.length; ++i)
      loop( i );
  }

  function fireOrphanDelayed() {
    var delayed = orphanDelayedCallbacks;
    orphanDelayedCallbacks = null;
    for (var i = 0; i < delayed.length; ++i) { delayed[i](); }
  }

  // When an aspect of a line changes, a string is added to
  // lineView.changes. This updates the relevant part of the line's
  // DOM structure.
  function updateLineForChanges(cm, lineView, lineN, dims) {
    for (var j = 0; j < lineView.changes.length; j++) {
      var type = lineView.changes[j];
      if (type == "text") { updateLineText(cm, lineView); }
      else if (type == "gutter") { updateLineGutter(cm, lineView, lineN, dims); }
      else if (type == "class") { updateLineClasses(cm, lineView); }
      else if (type == "widget") { updateLineWidgets(cm, lineView, dims); }
    }
    lineView.changes = null;
  }

  // Lines with gutter elements, widgets or a background class need to
  // be wrapped, and have the extra elements added to the wrapper div
  function ensureLineWrapped(lineView) {
    if (lineView.node == lineView.text) {
      lineView.node = elt("div", null, null, "position: relative");
      if (lineView.text.parentNode)
        { lineView.text.parentNode.replaceChild(lineView.node, lineView.text); }
      lineView.node.appendChild(lineView.text);
      if (ie && ie_version < 8) { lineView.node.style.zIndex = 2; }
    }
    return lineView.node
  }

  function updateLineBackground(cm, lineView) {
    var cls = lineView.bgClass ? lineView.bgClass + " " + (lineView.line.bgClass || "") : lineView.line.bgClass;
    if (cls) { cls += " CodeMirror-linebackground"; }
    if (lineView.background) {
      if (cls) { lineView.background.className = cls; }
      else { lineView.background.parentNode.removeChild(lineView.background); lineView.background = null; }
    } else if (cls) {
      var wrap = ensureLineWrapped(lineView);
      lineView.background = wrap.insertBefore(elt("div", null, cls), wrap.firstChild);
      cm.display.input.setUneditable(lineView.background);
    }
  }

  // Wrapper around buildLineContent which will reuse the structure
  // in display.externalMeasured when possible.
  function getLineContent(cm, lineView) {
    var ext = cm.display.externalMeasured;
    if (ext && ext.line == lineView.line) {
      cm.display.externalMeasured = null;
      lineView.measure = ext.measure;
      return ext.built
    }
    return buildLineContent(cm, lineView)
  }

  // Redraw the line's text. Interacts with the background and text
  // classes because the mode may output tokens that influence these
  // classes.
  function updateLineText(cm, lineView) {
    var cls = lineView.text.className;
    var built = getLineContent(cm, lineView);
    if (lineView.text == lineView.node) { lineView.node = built.pre; }
    lineView.text.parentNode.replaceChild(built.pre, lineView.text);
    lineView.text = built.pre;
    if (built.bgClass != lineView.bgClass || built.textClass != lineView.textClass) {
      lineView.bgClass = built.bgClass;
      lineView.textClass = built.textClass;
      updateLineClasses(cm, lineView);
    } else if (cls) {
      lineView.text.className = cls;
    }
  }

  function updateLineClasses(cm, lineView) {
    updateLineBackground(cm, lineView);
    if (lineView.line.wrapClass)
      { ensureLineWrapped(lineView).className = lineView.line.wrapClass; }
    else if (lineView.node != lineView.text)
      { lineView.node.className = ""; }
    var textClass = lineView.textClass ? lineView.textClass + " " + (lineView.line.textClass || "") : lineView.line.textClass;
    lineView.text.className = textClass || "";
  }

  function updateLineGutter(cm, lineView, lineN, dims) {
    if (lineView.gutter) {
      lineView.node.removeChild(lineView.gutter);
      lineView.gutter = null;
    }
    if (lineView.gutterBackground) {
      lineView.node.removeChild(lineView.gutterBackground);
      lineView.gutterBackground = null;
    }
    if (lineView.line.gutterClass) {
      var wrap = ensureLineWrapped(lineView);
      lineView.gutterBackground = elt("div", null, "CodeMirror-gutter-background " + lineView.line.gutterClass,
                                      ("left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px; width: " + (dims.gutterTotalWidth) + "px"));
      cm.display.input.setUneditable(lineView.gutterBackground);
      wrap.insertBefore(lineView.gutterBackground, lineView.text);
    }
    var markers = lineView.line.gutterMarkers;
    if (cm.options.lineNumbers || markers) {
      var wrap$1 = ensureLineWrapped(lineView);
      var gutterWrap = lineView.gutter = elt("div", null, "CodeMirror-gutter-wrapper", ("left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px"));
      cm.display.input.setUneditable(gutterWrap);
      wrap$1.insertBefore(gutterWrap, lineView.text);
      if (lineView.line.gutterClass)
        { gutterWrap.className += " " + lineView.line.gutterClass; }
      if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"]))
        { lineView.lineNumber = gutterWrap.appendChild(
          elt("div", lineNumberFor(cm.options, lineN),
              "CodeMirror-linenumber CodeMirror-gutter-elt",
              ("left: " + (dims.gutterLeft["CodeMirror-linenumbers"]) + "px; width: " + (cm.display.lineNumInnerWidth) + "px"))); }
      if (markers) { for (var k = 0; k < cm.options.gutters.length; ++k) {
        var id = cm.options.gutters[k], found = markers.hasOwnProperty(id) && markers[id];
        if (found)
          { gutterWrap.appendChild(elt("div", [found], "CodeMirror-gutter-elt",
                                     ("left: " + (dims.gutterLeft[id]) + "px; width: " + (dims.gutterWidth[id]) + "px"))); }
      } }
    }
  }

  function updateLineWidgets(cm, lineView, dims) {
    if (lineView.alignable) { lineView.alignable = null; }
    for (var node = lineView.node.firstChild, next = (void 0); node; node = next) {
      next = node.nextSibling;
      if (node.className == "CodeMirror-linewidget")
        { lineView.node.removeChild(node); }
    }
    insertLineWidgets(cm, lineView, dims);
  }

  // Build a line's DOM representation from scratch
  function buildLineElement(cm, lineView, lineN, dims) {
    var built = getLineContent(cm, lineView);
    lineView.text = lineView.node = built.pre;
    if (built.bgClass) { lineView.bgClass = built.bgClass; }
    if (built.textClass) { lineView.textClass = built.textClass; }

    updateLineClasses(cm, lineView);
    updateLineGutter(cm, lineView, lineN, dims);
    insertLineWidgets(cm, lineView, dims);
    return lineView.node
  }

  // A lineView may contain multiple logical lines (when merged by
  // collapsed spans). The widgets for all of them need to be drawn.
  function insertLineWidgets(cm, lineView, dims) {
    insertLineWidgetsFor(cm, lineView.line, lineView, dims, true);
    if (lineView.rest) { for (var i = 0; i < lineView.rest.length; i++)
      { insertLineWidgetsFor(cm, lineView.rest[i], lineView, dims, false); } }
  }

  function insertLineWidgetsFor(cm, line, lineView, dims, allowAbove) {
    if (!line.widgets) { return }
    var wrap = ensureLineWrapped(lineView);
    for (var i = 0, ws = line.widgets; i < ws.length; ++i) {
      var widget = ws[i], node = elt("div", [widget.node], "CodeMirror-linewidget");
      if (!widget.handleMouseEvents) { node.setAttribute("cm-ignore-events", "true"); }
      positionLineWidget(widget, node, lineView, dims);
      cm.display.input.setUneditable(node);
      if (allowAbove && widget.above)
        { wrap.insertBefore(node, lineView.gutter || lineView.text); }
      else
        { wrap.appendChild(node); }
      signalLater(widget, "redraw");
    }
  }

  function positionLineWidget(widget, node, lineView, dims) {
    if (widget.noHScroll) {
  (lineView.alignable || (lineView.alignable = [])).push(node);
      var width = dims.wrapperWidth;
      node.style.left = dims.fixedPos + "px";
      if (!widget.coverGutter) {
        width -= dims.gutterTotalWidth;
        node.style.paddingLeft = dims.gutterTotalWidth + "px";
      }
      node.style.width = width + "px";
    }
    if (widget.coverGutter) {
      node.style.zIndex = 5;
      node.style.position = "relative";
      if (!widget.noHScroll) { node.style.marginLeft = -dims.gutterTotalWidth + "px"; }
    }
  }

  function widgetHeight(widget) {
    if (widget.height != null) { return widget.height }
    var cm = widget.doc.cm;
    if (!cm) { return 0 }
    if (!contains(document.body, widget.node)) {
      var parentStyle = "position: relative;";
      if (widget.coverGutter)
        { parentStyle += "margin-left: -" + cm.display.gutters.offsetWidth + "px;"; }
      if (widget.noHScroll)
        { parentStyle += "width: " + cm.display.wrapper.clientWidth + "px;"; }
      removeChildrenAndAdd(cm.display.measure, elt("div", [widget.node], null, parentStyle));
    }
    return widget.height = widget.node.parentNode.offsetHeight
  }

  // Return true when the given mouse event happened in a widget
  function eventInWidget(display, e) {
    for (var n = e_target(e); n != display.wrapper; n = n.parentNode) {
      if (!n || (n.nodeType == 1 && n.getAttribute("cm-ignore-events") == "true") ||
          (n.parentNode == display.sizer && n != display.mover))
        { return true }
    }
  }

  // POSITION MEASUREMENT

  function paddingTop(display) {return display.lineSpace.offsetTop}
  function paddingVert(display) {return display.mover.offsetHeight - display.lineSpace.offsetHeight}
  function paddingH(display) {
    if (display.cachedPaddingH) { return display.cachedPaddingH }
    var e = removeChildrenAndAdd(display.measure, elt("pre", "x"));
    var style = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle;
    var data = {left: parseInt(style.paddingLeft), right: parseInt(style.paddingRight)};
    if (!isNaN(data.left) && !isNaN(data.right)) { display.cachedPaddingH = data; }
    return data
  }

  function scrollGap(cm) { return scrollerGap - cm.display.nativeBarWidth }
  function displayWidth(cm) {
    return cm.display.scroller.clientWidth - scrollGap(cm) - cm.display.barWidth
  }
  function displayHeight(cm) {
    return cm.display.scroller.clientHeight - scrollGap(cm) - cm.display.barHeight
  }

  // Ensure the lineView.wrapping.heights array is populated. This is
  // an array of bottom offsets for the lines that make up a drawn
  // line. When lineWrapping is on, there might be more than one
  // height.
  function ensureLineHeights(cm, lineView, rect) {
    var wrapping = cm.options.lineWrapping;
    var curWidth = wrapping && displayWidth(cm);
    if (!lineView.measure.heights || wrapping && lineView.measure.width != curWidth) {
      var heights = lineView.measure.heights = [];
      if (wrapping) {
        lineView.measure.width = curWidth;
        var rects = lineView.text.firstChild.getClientRects();
        for (var i = 0; i < rects.length - 1; i++) {
          var cur = rects[i], next = rects[i + 1];
          if (Math.abs(cur.bottom - next.bottom) > 2)
            { heights.push((cur.bottom + next.top) / 2 - rect.top); }
        }
      }
      heights.push(rect.bottom - rect.top);
    }
  }

  // Find a line map (mapping character offsets to text nodes) and a
  // measurement cache for the given line number. (A line view might
  // contain multiple lines when collapsed ranges are present.)
  function mapFromLineView(lineView, line, lineN) {
    if (lineView.line == line)
      { return {map: lineView.measure.map, cache: lineView.measure.cache} }
    for (var i = 0; i < lineView.rest.length; i++)
      { if (lineView.rest[i] == line)
        { return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i]} } }
    for (var i$1 = 0; i$1 < lineView.rest.length; i$1++)
      { if (lineNo(lineView.rest[i$1]) > lineN)
        { return {map: lineView.measure.maps[i$1], cache: lineView.measure.caches[i$1], before: true} } }
  }

  // Render a line into the hidden node display.externalMeasured. Used
  // when measurement is needed for a line that's not in the viewport.
  function updateExternalMeasurement(cm, line) {
    line = visualLine(line);
    var lineN = lineNo(line);
    var view = cm.display.externalMeasured = new LineView(cm.doc, line, lineN);
    view.lineN = lineN;
    var built = view.built = buildLineContent(cm, view);
    view.text = built.pre;
    removeChildrenAndAdd(cm.display.lineMeasure, built.pre);
    return view
  }

  // Get a {top, bottom, left, right} box (in line-local coordinates)
  // for a given character.
  function measureChar(cm, line, ch, bias) {
    return measureCharPrepared(cm, prepareMeasureForLine(cm, line), ch, bias)
  }

  // Find a line view that corresponds to the given line number.
  function findViewForLine(cm, lineN) {
    if (lineN >= cm.display.viewFrom && lineN < cm.display.viewTo)
      { return cm.display.view[findViewIndex(cm, lineN)] }
    var ext = cm.display.externalMeasured;
    if (ext && lineN >= ext.lineN && lineN < ext.lineN + ext.size)
      { return ext }
  }

  // Measurement can be split in two steps, the set-up work that
  // applies to the whole line, and the measurement of the actual
  // character. Functions like coordsChar, that need to do a lot of
  // measurements in a row, can thus ensure that the set-up work is
  // only done once.
  function prepareMeasureForLine(cm, line) {
    var lineN = lineNo(line);
    var view = findViewForLine(cm, lineN);
    if (view && !view.text) {
      view = null;
    } else if (view && view.changes) {
      updateLineForChanges(cm, view, lineN, getDimensions(cm));
      cm.curOp.forceUpdate = true;
    }
    if (!view)
      { view = updateExternalMeasurement(cm, line); }

    var info = mapFromLineView(view, line, lineN);
    return {
      line: line, view: view, rect: null,
      map: info.map, cache: info.cache, before: info.before,
      hasHeights: false
    }
  }

  // Given a prepared measurement object, measures the position of an
  // actual character (or fetches it from the cache).
  function measureCharPrepared(cm, prepared, ch, bias, varHeight) {
    if (prepared.before) { ch = -1; }
    var key = ch + (bias || ""), found;
    if (prepared.cache.hasOwnProperty(key)) {
      found = prepared.cache[key];
    } else {
      if (!prepared.rect)
        { prepared.rect = prepared.view.text.getBoundingClientRect(); }
      if (!prepared.hasHeights) {
        ensureLineHeights(cm, prepared.view, prepared.rect);
        prepared.hasHeights = true;
      }
      found = measureCharInner(cm, prepared, ch, bias);
      if (!found.bogus) { prepared.cache[key] = found; }
    }
    return {left: found.left, right: found.right,
            top: varHeight ? found.rtop : found.top,
            bottom: varHeight ? found.rbottom : found.bottom}
  }

  var nullRect = {left: 0, right: 0, top: 0, bottom: 0};

  function nodeAndOffsetInLineMap(map$$1, ch, bias) {
    var node, start, end, collapse, mStart, mEnd;
    // First, search the line map for the text node corresponding to,
    // or closest to, the target character.
    for (var i = 0; i < map$$1.length; i += 3) {
      mStart = map$$1[i];
      mEnd = map$$1[i + 1];
      if (ch < mStart) {
        start = 0; end = 1;
        collapse = "left";
      } else if (ch < mEnd) {
        start = ch - mStart;
        end = start + 1;
      } else if (i == map$$1.length - 3 || ch == mEnd && map$$1[i + 3] > ch) {
        end = mEnd - mStart;
        start = end - 1;
        if (ch >= mEnd) { collapse = "right"; }
      }
      if (start != null) {
        node = map$$1[i + 2];
        if (mStart == mEnd && bias == (node.insertLeft ? "left" : "right"))
          { collapse = bias; }
        if (bias == "left" && start == 0)
          { while (i && map$$1[i - 2] == map$$1[i - 3] && map$$1[i - 1].insertLeft) {
            node = map$$1[(i -= 3) + 2];
            collapse = "left";
          } }
        if (bias == "right" && start == mEnd - mStart)
          { while (i < map$$1.length - 3 && map$$1[i + 3] == map$$1[i + 4] && !map$$1[i + 5].insertLeft) {
            node = map$$1[(i += 3) + 2];
            collapse = "right";
          } }
        break
      }
    }
    return {node: node, start: start, end: end, collapse: collapse, coverStart: mStart, coverEnd: mEnd}
  }

  function getUsefulRect(rects, bias) {
    var rect = nullRect;
    if (bias == "left") { for (var i = 0; i < rects.length; i++) {
      if ((rect = rects[i]).left != rect.right) { break }
    } } else { for (var i$1 = rects.length - 1; i$1 >= 0; i$1--) {
      if ((rect = rects[i$1]).left != rect.right) { break }
    } }
    return rect
  }

  function measureCharInner(cm, prepared, ch, bias) {
    var place = nodeAndOffsetInLineMap(prepared.map, ch, bias);
    var node = place.node, start = place.start, end = place.end, collapse = place.collapse;

    var rect;
    if (node.nodeType == 3) { // If it is a text node, use a range to retrieve the coordinates.
      for (var i$1 = 0; i$1 < 4; i$1++) { // Retry a maximum of 4 times when nonsense rectangles are returned
        while (start && isExtendingChar(prepared.line.text.charAt(place.coverStart + start))) { --start; }
        while (place.coverStart + end < place.coverEnd && isExtendingChar(prepared.line.text.charAt(place.coverStart + end))) { ++end; }
        if (ie && ie_version < 9 && start == 0 && end == place.coverEnd - place.coverStart)
          { rect = node.parentNode.getBoundingClientRect(); }
        else
          { rect = getUsefulRect(range(node, start, end).getClientRects(), bias); }
        if (rect.left || rect.right || start == 0) { break }
        end = start;
        start = start - 1;
        collapse = "right";
      }
      if (ie && ie_version < 11) { rect = maybeUpdateRectForZooming(cm.display.measure, rect); }
    } else { // If it is a widget, simply get the box for the whole widget.
      if (start > 0) { collapse = bias = "right"; }
      var rects;
      if (cm.options.lineWrapping && (rects = node.getClientRects()).length > 1)
        { rect = rects[bias == "right" ? rects.length - 1 : 0]; }
      else
        { rect = node.getBoundingClientRect(); }
    }
    if (ie && ie_version < 9 && !start && (!rect || !rect.left && !rect.right)) {
      var rSpan = node.parentNode.getClientRects()[0];
      if (rSpan)
        { rect = {left: rSpan.left, right: rSpan.left + charWidth(cm.display), top: rSpan.top, bottom: rSpan.bottom}; }
      else
        { rect = nullRect; }
    }

    var rtop = rect.top - prepared.rect.top, rbot = rect.bottom - prepared.rect.top;
    var mid = (rtop + rbot) / 2;
    var heights = prepared.view.measure.heights;
    var i = 0;
    for (; i < heights.length - 1; i++)
      { if (mid < heights[i]) { break } }
    var top = i ? heights[i - 1] : 0, bot = heights[i];
    var result = {left: (collapse == "right" ? rect.right : rect.left) - prepared.rect.left,
                  right: (collapse == "left" ? rect.left : rect.right) - prepared.rect.left,
                  top: top, bottom: bot};
    if (!rect.left && !rect.right) { result.bogus = true; }
    if (!cm.options.singleCursorHeightPerLine) { result.rtop = rtop; result.rbottom = rbot; }

    return result
  }

  // Work around problem with bounding client rects on ranges being
  // returned incorrectly when zoomed on IE10 and below.
  function maybeUpdateRectForZooming(measure, rect) {
    if (!window.screen || screen.logicalXDPI == null ||
        screen.logicalXDPI == screen.deviceXDPI || !hasBadZoomedRects(measure))
      { return rect }
    var scaleX = screen.logicalXDPI / screen.deviceXDPI;
    var scaleY = screen.logicalYDPI / screen.deviceYDPI;
    return {left: rect.left * scaleX, right: rect.right * scaleX,
            top: rect.top * scaleY, bottom: rect.bottom * scaleY}
  }

  function clearLineMeasurementCacheFor(lineView) {
    if (lineView.measure) {
      lineView.measure.cache = {};
      lineView.measure.heights = null;
      if (lineView.rest) { for (var i = 0; i < lineView.rest.length; i++)
        { lineView.measure.caches[i] = {}; } }
    }
  }

  function clearLineMeasurementCache(cm) {
    cm.display.externalMeasure = null;
    removeChildren(cm.display.lineMeasure);
    for (var i = 0; i < cm.display.view.length; i++)
      { clearLineMeasurementCacheFor(cm.display.view[i]); }
  }

  function clearCaches(cm) {
    clearLineMeasurementCache(cm);
    cm.display.cachedCharWidth = cm.display.cachedTextHeight = cm.display.cachedPaddingH = null;
    if (!cm.options.lineWrapping) { cm.display.maxLineChanged = true; }
    cm.display.lineNumChars = null;
  }

  function pageScrollX() {
    // Work around https://bugs.chromium.org/p/chromium/issues/detail?id=489206
    // which causes page_Offset and bounding client rects to use
    // different reference viewports and invalidate our calculations.
    if (chrome && android) { return -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) }
    return window.pageXOffset || (document.documentElement || document.body).scrollLeft
  }
  function pageScrollY() {
    if (chrome && android) { return -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) }
    return window.pageYOffset || (document.documentElement || document.body).scrollTop
  }

  function widgetTopHeight(lineObj) {
    var height = 0;
    if (lineObj.widgets) { for (var i = 0; i < lineObj.widgets.length; ++i) { if (lineObj.widgets[i].above)
      { height += widgetHeight(lineObj.widgets[i]); } } }
    return height
  }

  // Converts a {top, bottom, left, right} box from line-local
  // coordinates into another coordinate system. Context may be one of
  // "line", "div" (display.lineDiv), "local"./null (editor), "window",
  // or "page".
  function intoCoordSystem(cm, lineObj, rect, context, includeWidgets) {
    if (!includeWidgets) {
      var height = widgetTopHeight(lineObj);
      rect.top += height; rect.bottom += height;
    }
    if (context == "line") { return rect }
    if (!context) { context = "local"; }
    var yOff = heightAtLine(lineObj);
    if (context == "local") { yOff += paddingTop(cm.display); }
    else { yOff -= cm.display.viewOffset; }
    if (context == "page" || context == "window") {
      var lOff = cm.display.lineSpace.getBoundingClientRect();
      yOff += lOff.top + (context == "window" ? 0 : pageScrollY());
      var xOff = lOff.left + (context == "window" ? 0 : pageScrollX());
      rect.left += xOff; rect.right += xOff;
    }
    rect.top += yOff; rect.bottom += yOff;
    return rect
  }

  // Coverts a box from "div" coords to another coordinate system.
  // Context may be "window", "page", "div", or "local"./null.
  function fromCoordSystem(cm, coords, context) {
    if (context == "div") { return coords }
    var left = coords.left, top = coords.top;
    // First move into "page" coordinate system
    if (context == "page") {
      left -= pageScrollX();
      top -= pageScrollY();
    } else if (context == "local" || !context) {
      var localBox = cm.display.sizer.getBoundingClientRect();
      left += localBox.left;
      top += localBox.top;
    }

    var lineSpaceBox = cm.display.lineSpace.getBoundingClientRect();
    return {left: left - lineSpaceBox.left, top: top - lineSpaceBox.top}
  }

  function charCoords(cm, pos, context, lineObj, bias) {
    if (!lineObj) { lineObj = getLine(cm.doc, pos.line); }
    return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, bias), context)
  }

  // Returns a box for a given cursor position, which may have an
  // 'other' property containing the position of the secondary cursor
  // on a bidi boundary.
  // A cursor Pos(line, char, "before") is on the same visual line as `char - 1`
  // and after `char - 1` in writing order of `char - 1`
  // A cursor Pos(line, char, "after") is on the same visual line as `char`
  // and before `char` in writing order of `char`
  // Examples (upper-case letters are RTL, lower-case are LTR):
  //     Pos(0, 1, ...)
  //     before   after
  // ab     a|b     a|b
  // aB     a|B     aB|
  // Ab     |Ab     A|b
  // AB     B|A     B|A
  // Every position after the last character on a line is considered to stick
  // to the last character on the line.
  function cursorCoords(cm, pos, context, lineObj, preparedMeasure, varHeight) {
    lineObj = lineObj || getLine(cm.doc, pos.line);
    if (!preparedMeasure) { preparedMeasure = prepareMeasureForLine(cm, lineObj); }
    function get(ch, right) {
      var m = measureCharPrepared(cm, preparedMeasure, ch, right ? "right" : "left", varHeight);
      if (right) { m.left = m.right; } else { m.right = m.left; }
      return intoCoordSystem(cm, lineObj, m, context)
    }
    var order = getOrder(lineObj, cm.doc.direction), ch = pos.ch, sticky = pos.sticky;
    if (ch >= lineObj.text.length) {
      ch = lineObj.text.length;
      sticky = "before";
    } else if (ch <= 0) {
      ch = 0;
      sticky = "after";
    }
    if (!order) { return get(sticky == "before" ? ch - 1 : ch, sticky == "before") }

    function getBidi(ch, partPos, invert) {
      var part = order[partPos], right = part.level == 1;
      return get(invert ? ch - 1 : ch, right != invert)
    }
    var partPos = getBidiPartAt(order, ch, sticky);
    var other = bidiOther;
    var val = getBidi(ch, partPos, sticky == "before");
    if (other != null) { val.other = getBidi(ch, other, sticky != "before"); }
    return val
  }

  // Used to cheaply estimate the coordinates for a position. Used for
  // intermediate scroll updates.
  function estimateCoords(cm, pos) {
    var left = 0;
    pos = clipPos(cm.doc, pos);
    if (!cm.options.lineWrapping) { left = charWidth(cm.display) * pos.ch; }
    var lineObj = getLine(cm.doc, pos.line);
    var top = heightAtLine(lineObj) + paddingTop(cm.display);
    return {left: left, right: left, top: top, bottom: top + lineObj.height}
  }

  // Positions returned by coordsChar contain some extra information.
  // xRel is the relative x position of the input coordinates compared
  // to the found position (so xRel > 0 means the coordinates are to
  // the right of the character position, for example). When outside
  // is true, that means the coordinates lie outside the line's
  // vertical range.
  function PosWithInfo(line, ch, sticky, outside, xRel) {
    var pos = Pos(line, ch, sticky);
    pos.xRel = xRel;
    if (outside) { pos.outside = true; }
    return pos
  }

  // Compute the character position closest to the given coordinates.
  // Input must be lineSpace-local ("div" coordinate system).
  function coordsChar(cm, x, y) {
    var doc = cm.doc;
    y += cm.display.viewOffset;
    if (y < 0) { return PosWithInfo(doc.first, 0, null, true, -1) }
    var lineN = lineAtHeight(doc, y), last = doc.first + doc.size - 1;
    if (lineN > last)
      { return PosWithInfo(doc.first + doc.size - 1, getLine(doc, last).text.length, null, true, 1) }
    if (x < 0) { x = 0; }

    var lineObj = getLine(doc, lineN);
    for (;;) {
      var found = coordsCharInner(cm, lineObj, lineN, x, y);
      var collapsed = collapsedSpanAround(lineObj, found.ch + (found.xRel > 0 ? 1 : 0));
      if (!collapsed) { return found }
      var rangeEnd = collapsed.find(1);
      if (rangeEnd.line == lineN) { return rangeEnd }
      lineObj = getLine(doc, lineN = rangeEnd.line);
    }
  }

  function wrappedLineExtent(cm, lineObj, preparedMeasure, y) {
    y -= widgetTopHeight(lineObj);
    var end = lineObj.text.length;
    var begin = findFirst(function (ch) { return measureCharPrepared(cm, preparedMeasure, ch - 1).bottom <= y; }, end, 0);
    end = findFirst(function (ch) { return measureCharPrepared(cm, preparedMeasure, ch).top > y; }, begin, end);
    return {begin: begin, end: end}
  }

  function wrappedLineExtentChar(cm, lineObj, preparedMeasure, target) {
    if (!preparedMeasure) { preparedMeasure = prepareMeasureForLine(cm, lineObj); }
    var targetTop = intoCoordSystem(cm, lineObj, measureCharPrepared(cm, preparedMeasure, target), "line").top;
    return wrappedLineExtent(cm, lineObj, preparedMeasure, targetTop)
  }

  // Returns true if the given side of a box is after the given
  // coordinates, in top-to-bottom, left-to-right order.
  function boxIsAfter(box, x, y, left) {
    return box.bottom <= y ? false : box.top > y ? true : (left ? box.left : box.right) > x
  }

  function coordsCharInner(cm, lineObj, lineNo$$1, x, y) {
    // Move y into line-local coordinate space
    y -= heightAtLine(lineObj);
    var preparedMeasure = prepareMeasureForLine(cm, lineObj);
    // When directly calling `measureCharPrepared`, we have to adjust
    // for the widgets at this line.
    var widgetHeight$$1 = widgetTopHeight(lineObj);
    var begin = 0, end = lineObj.text.length, ltr = true;

    var order = getOrder(lineObj, cm.doc.direction);
    // If the line isn't plain left-to-right text, first figure out
    // which bidi section the coordinates fall into.
    if (order) {
      var part = (cm.options.lineWrapping ? coordsBidiPartWrapped : coordsBidiPart)
                   (cm, lineObj, lineNo$$1, preparedMeasure, order, x, y);
      ltr = part.level != 1;
      // The awkward -1 offsets are needed because findFirst (called
      // on these below) will treat its first bound as inclusive,
      // second as exclusive, but we want to actually address the
      // characters in the part's range
      begin = ltr ? part.from : part.to - 1;
      end = ltr ? part.to : part.from - 1;
    }

    // A binary search to find the first character whose bounding box
    // starts after the coordinates. If we run across any whose box wrap
    // the coordinates, store that.
    var chAround = null, boxAround = null;
    var ch = findFirst(function (ch) {
      var box = measureCharPrepared(cm, preparedMeasure, ch);
      box.top += widgetHeight$$1; box.bottom += widgetHeight$$1;
      if (!boxIsAfter(box, x, y, false)) { return false }
      if (box.top <= y && box.left <= x) {
        chAround = ch;
        boxAround = box;
      }
      return true
    }, begin, end);

    var baseX, sticky, outside = false;
    // If a box around the coordinates was found, use that
    if (boxAround) {
      // Distinguish coordinates nearer to the left or right side of the box
      var atLeft = x - boxAround.left < boxAround.right - x, atStart = atLeft == ltr;
      ch = chAround + (atStart ? 0 : 1);
      sticky = atStart ? "after" : "before";
      baseX = atLeft ? boxAround.left : boxAround.right;
    } else {
      // (Adjust for extended bound, if necessary.)
      if (!ltr && (ch == end || ch == begin)) { ch++; }
      // To determine which side to associate with, get the box to the
      // left of the character and compare it's vertical position to the
      // coordinates
      sticky = ch == 0 ? "after" : ch == lineObj.text.length ? "before" :
        (measureCharPrepared(cm, preparedMeasure, ch - (ltr ? 1 : 0)).bottom + widgetHeight$$1 <= y) == ltr ?
        "after" : "before";
      // Now get accurate coordinates for this place, in order to get a
      // base X position
      var coords = cursorCoords(cm, Pos(lineNo$$1, ch, sticky), "line", lineObj, preparedMeasure);
      baseX = coords.left;
      outside = y < coords.top || y >= coords.bottom;
    }

    ch = skipExtendingChars(lineObj.text, ch, 1);
    return PosWithInfo(lineNo$$1, ch, sticky, outside, x - baseX)
  }

  function coordsBidiPart(cm, lineObj, lineNo$$1, preparedMeasure, order, x, y) {
    // Bidi parts are sorted left-to-right, and in a non-line-wrapping
    // situation, we can take this ordering to correspond to the visual
    // ordering. This finds the first part whose end is after the given
    // coordinates.
    var index = findFirst(function (i) {
      var part = order[i], ltr = part.level != 1;
      return boxIsAfter(cursorCoords(cm, Pos(lineNo$$1, ltr ? part.to : part.from, ltr ? "before" : "after"),
                                     "line", lineObj, preparedMeasure), x, y, true)
    }, 0, order.length - 1);
    var part = order[index];
    // If this isn't the first part, the part's start is also after
    // the coordinates, and the coordinates aren't on the same line as
    // that start, move one part back.
    if (index > 0) {
      var ltr = part.level != 1;
      var start = cursorCoords(cm, Pos(lineNo$$1, ltr ? part.from : part.to, ltr ? "after" : "before"),
                               "line", lineObj, preparedMeasure);
      if (boxIsAfter(start, x, y, true) && start.top > y)
        { part = order[index - 1]; }
    }
    return part
  }

  function coordsBidiPartWrapped(cm, lineObj, _lineNo, preparedMeasure, order, x, y) {
    // In a wrapped line, rtl text on wrapping boundaries can do things
    // that don't correspond to the ordering in our `order` array at
    // all, so a binary search doesn't work, and we want to return a
    // part that only spans one line so that the binary search in
    // coordsCharInner is safe. As such, we first find the extent of the
    // wrapped line, and then do a flat search in which we discard any
    // spans that aren't on the line.
    var ref = wrappedLineExtent(cm, lineObj, preparedMeasure, y);
    var begin = ref.begin;
    var end = ref.end;
    if (/\s/.test(lineObj.text.charAt(end - 1))) { end--; }
    var part = null, closestDist = null;
    for (var i = 0; i < order.length; i++) {
      var p = order[i];
      if (p.from >= end || p.to <= begin) { continue }
      var ltr = p.level != 1;
      var endX = measureCharPrepared(cm, preparedMeasure, ltr ? Math.min(end, p.to) - 1 : Math.max(begin, p.from)).right;
      // Weigh against spans ending before this, so that they are only
      // picked if nothing ends after
      var dist = endX < x ? x - endX + 1e9 : endX - x;
      if (!part || closestDist > dist) {
        part = p;
        closestDist = dist;
      }
    }
    if (!part) { part = order[order.length - 1]; }
    // Clip the part to the wrapped line.
    if (part.from < begin) { part = {from: begin, to: part.to, level: part.level}; }
    if (part.to > end) { part = {from: part.from, to: end, level: part.level}; }
    return part
  }

  var measureText;
  // Compute the default text height.
  function textHeight(display) {
    if (display.cachedTextHeight != null) { return display.cachedTextHeight }
    if (measureText == null) {
      measureText = elt("pre");
      // Measure a bunch of lines, for browsers that compute
      // fractional heights.
      for (var i = 0; i < 49; ++i) {
        measureText.appendChild(document.createTextNode("x"));
        measureText.appendChild(elt("br"));
      }
      measureText.appendChild(document.createTextNode("x"));
    }
    removeChildrenAndAdd(display.measure, measureText);
    var height = measureText.offsetHeight / 50;
    if (height > 3) { display.cachedTextHeight = height; }
    removeChildren(display.measure);
    return height || 1
  }

  // Compute the default character width.
  function charWidth(display) {
    if (display.cachedCharWidth != null) { return display.cachedCharWidth }
    var anchor = elt("span", "xxxxxxxxxx");
    var pre = elt("pre", [anchor]);
    removeChildrenAndAdd(display.measure, pre);
    var rect = anchor.getBoundingClientRect(), width = (rect.right - rect.left) / 10;
    if (width > 2) { display.cachedCharWidth = width; }
    return width || 10
  }

  // Do a bulk-read of the DOM positions and sizes needed to draw the
  // view, so that we don't interleave reading and writing to the DOM.
  function getDimensions(cm) {
    var d = cm.display, left = {}, width = {};
    var gutterLeft = d.gutters.clientLeft;
    for (var n = d.gutters.firstChild, i = 0; n; n = n.nextSibling, ++i) {
      left[cm.options.gutters[i]] = n.offsetLeft + n.clientLeft + gutterLeft;
      width[cm.options.gutters[i]] = n.clientWidth;
    }
    return {fixedPos: compensateForHScroll(d),
            gutterTotalWidth: d.gutters.offsetWidth,
            gutterLeft: left,
            gutterWidth: width,
            wrapperWidth: d.wrapper.clientWidth}
  }

  // Computes display.scroller.scrollLeft + display.gutters.offsetWidth,
  // but using getBoundingClientRect to get a sub-pixel-accurate
  // result.
  function compensateForHScroll(display) {
    return display.scroller.getBoundingClientRect().left - display.sizer.getBoundingClientRect().left
  }

  // Returns a function that estimates the height of a line, to use as
  // first approximation until the line becomes visible (and is thus
  // properly measurable).
  function estimateHeight(cm) {
    var th = textHeight(cm.display), wrapping = cm.options.lineWrapping;
    var perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3);
    return function (line) {
      if (lineIsHidden(cm.doc, line)) { return 0 }

      var widgetsHeight = 0;
      if (line.widgets) { for (var i = 0; i < line.widgets.length; i++) {
        if (line.widgets[i].height) { widgetsHeight += line.widgets[i].height; }
      } }

      if (wrapping)
        { return widgetsHeight + (Math.ceil(line.text.length / perLine) || 1) * th }
      else
        { return widgetsHeight + th }
    }
  }

  function estimateLineHeights(cm) {
    var doc = cm.doc, est = estimateHeight(cm);
    doc.iter(function (line) {
      var estHeight = est(line);
      if (estHeight != line.height) { updateLineHeight(line, estHeight); }
    });
  }

  // Given a mouse event, find the corresponding position. If liberal
  // is false, it checks whether a gutter or scrollbar was clicked,
  // and returns null if it was. forRect is used by rectangular
  // selections, and tries to estimate a character position even for
  // coordinates beyond the right of the text.
  function posFromMouse(cm, e, liberal, forRect) {
    var display = cm.display;
    if (!liberal && e_target(e).getAttribute("cm-not-content") == "true") { return null }

    var x, y, space = display.lineSpace.getBoundingClientRect();
    // Fails unpredictably on IE[67] when mouse is dragged around quickly.
    try { x = e.clientX - space.left; y = e.clientY - space.top; }
    catch (e) { return null }
    var coords = coordsChar(cm, x, y), line;
    if (forRect && coords.xRel == 1 && (line = getLine(cm.doc, coords.line).text).length == coords.ch) {
      var colDiff = countColumn(line, line.length, cm.options.tabSize) - line.length;
      coords = Pos(coords.line, Math.max(0, Math.round((x - paddingH(cm.display).left) / charWidth(cm.display)) - colDiff));
    }
    return coords
  }

  // Find the view element corresponding to a given line. Return null
  // when the line isn't visible.
  function findViewIndex(cm, n) {
    if (n >= cm.display.viewTo) { return null }
    n -= cm.display.viewFrom;
    if (n < 0) { return null }
    var view = cm.display.view;
    for (var i = 0; i < view.length; i++) {
      n -= view[i].size;
      if (n < 0) { return i }
    }
  }

  function updateSelection(cm) {
    cm.display.input.showSelection(cm.display.input.prepareSelection());
  }

  function prepareSelection(cm, primary) {
    if ( primary === void 0 ) primary = true;

    var doc = cm.doc, result = {};
    var curFragment = result.cursors = document.createDocumentFragment();
    var selFragment = result.selection = document.createDocumentFragment();

    for (var i = 0; i < doc.sel.ranges.length; i++) {
      if (!primary && i == doc.sel.primIndex) { continue }
      var range$$1 = doc.sel.ranges[i];
      if (range$$1.from().line >= cm.display.viewTo || range$$1.to().line < cm.display.viewFrom) { continue }
      var collapsed = range$$1.empty();
      if (collapsed || cm.options.showCursorWhenSelecting)
        { drawSelectionCursor(cm, range$$1.head, curFragment); }
      if (!collapsed)
        { drawSelectionRange(cm, range$$1, selFragment); }
    }
    return result
  }

  // Draws a cursor for the given range
  function drawSelectionCursor(cm, head, output) {
    var pos = cursorCoords(cm, head, "div", null, null, !cm.options.singleCursorHeightPerLine);

    var cursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor"));
    cursor.style.left = pos.left + "px";
    cursor.style.top = pos.top + "px";
    cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px";

    if (pos.other) {
      // Secondary cursor, shown when on a 'jump' in bi-directional text
      var otherCursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor CodeMirror-secondarycursor"));
      otherCursor.style.display = "";
      otherCursor.style.left = pos.other.left + "px";
      otherCursor.style.top = pos.other.top + "px";
      otherCursor.style.height = (pos.other.bottom - pos.other.top) * .85 + "px";
    }
  }

  function cmpCoords(a, b) { return a.top - b.top || a.left - b.left }

  // Draws the given range as a highlighted selection
  function drawSelectionRange(cm, range$$1, output) {
    var display = cm.display, doc = cm.doc;
    var fragment = document.createDocumentFragment();
    var padding = paddingH(cm.display), leftSide = padding.left;
    var rightSide = Math.max(display.sizerWidth, displayWidth(cm) - display.sizer.offsetLeft) - padding.right;
    var docLTR = doc.direction == "ltr";

    function add(left, top, width, bottom) {
      if (top < 0) { top = 0; }
      top = Math.round(top);
      bottom = Math.round(bottom);
      fragment.appendChild(elt("div", null, "CodeMirror-selected", ("position: absolute; left: " + left + "px;\n                             top: " + top + "px; width: " + (width == null ? rightSide - left : width) + "px;\n                             height: " + (bottom - top) + "px")));
    }

    function drawForLine(line, fromArg, toArg) {
      var lineObj = getLine(doc, line);
      var lineLen = lineObj.text.length;
      var start, end;
      function coords(ch, bias) {
        return charCoords(cm, Pos(line, ch), "div", lineObj, bias)
      }

      function wrapX(pos, dir, side) {
        var extent = wrappedLineExtentChar(cm, lineObj, null, pos);
        var prop = (dir == "ltr") == (side == "after") ? "left" : "right";
        var ch = side == "after" ? extent.begin : extent.end - (/\s/.test(lineObj.text.charAt(extent.end - 1)) ? 2 : 1);
        return coords(ch, prop)[prop]
      }

      var order = getOrder(lineObj, doc.direction);
      iterateBidiSections(order, fromArg || 0, toArg == null ? lineLen : toArg, function (from, to, dir, i) {
        var ltr = dir == "ltr";
        var fromPos = coords(from, ltr ? "left" : "right");
        var toPos = coords(to - 1, ltr ? "right" : "left");

        var openStart = fromArg == null && from == 0, openEnd = toArg == null && to == lineLen;
        var first = i == 0, last = !order || i == order.length - 1;
        if (toPos.top - fromPos.top <= 3) { // Single line
          var openLeft = (docLTR ? openStart : openEnd) && first;
          var openRight = (docLTR ? openEnd : openStart) && last;
          var left = openLeft ? leftSide : (ltr ? fromPos : toPos).left;
          var right = openRight ? rightSide : (ltr ? toPos : fromPos).right;
          add(left, fromPos.top, right - left, fromPos.bottom);
        } else { // Multiple lines
          var topLeft, topRight, botLeft, botRight;
          if (ltr) {
            topLeft = docLTR && openStart && first ? leftSide : fromPos.left;
            topRight = docLTR ? rightSide : wrapX(from, dir, "before");
            botLeft = docLTR ? leftSide : wrapX(to, dir, "after");
            botRight = docLTR && openEnd && last ? rightSide : toPos.right;
          } else {
            topLeft = !docLTR ? leftSide : wrapX(from, dir, "before");
            topRight = !docLTR && openStart && first ? rightSide : fromPos.right;
            botLeft = !docLTR && openEnd && last ? leftSide : toPos.left;
            botRight = !docLTR ? rightSide : wrapX(to, dir, "after");
          }
          add(topLeft, fromPos.top, topRight - topLeft, fromPos.bottom);
          if (fromPos.bottom < toPos.top) { add(leftSide, fromPos.bottom, null, toPos.top); }
          add(botLeft, toPos.top, botRight - botLeft, toPos.bottom);
        }

        if (!start || cmpCoords(fromPos, start) < 0) { start = fromPos; }
        if (cmpCoords(toPos, start) < 0) { start = toPos; }
        if (!end || cmpCoords(fromPos, end) < 0) { end = fromPos; }
        if (cmpCoords(toPos, end) < 0) { end = toPos; }
      });
      return {start: start, end: end}
    }

    var sFrom = range$$1.from(), sTo = range$$1.to();
    if (sFrom.line == sTo.line) {
      drawForLine(sFrom.line, sFrom.ch, sTo.ch);
    } else {
      var fromLine = getLine(doc, sFrom.line), toLine = getLine(doc, sTo.line);
      var singleVLine = visualLine(fromLine) == visualLine(toLine);
      var leftEnd = drawForLine(sFrom.line, sFrom.ch, singleVLine ? fromLine.text.length + 1 : null).end;
      var rightStart = drawForLine(sTo.line, singleVLine ? 0 : null, sTo.ch).start;
      if (singleVLine) {
        if (leftEnd.top < rightStart.top - 2) {
          add(leftEnd.right, leftEnd.top, null, leftEnd.bottom);
          add(leftSide, rightStart.top, rightStart.left, rightStart.bottom);
        } else {
          add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom);
        }
      }
      if (leftEnd.bottom < rightStart.top)
        { add(leftSide, leftEnd.bottom, null, rightStart.top); }
    }

    output.appendChild(fragment);
  }

  // Cursor-blinking
  function restartBlink(cm) {
    if (!cm.state.focused) { return }
    var display = cm.display;
    clearInterval(display.blinker);
    var on = true;
    display.cursorDiv.style.visibility = "";
    if (cm.options.cursorBlinkRate > 0)
      { display.blinker = setInterval(function () { return display.cursorDiv.style.visibility = (on = !on) ? "" : "hidden"; },
        cm.options.cursorBlinkRate); }
    else if (cm.options.cursorBlinkRate < 0)
      { display.cursorDiv.style.visibility = "hidden"; }
  }

  function ensureFocus(cm) {
    if (!cm.state.focused) { cm.display.input.focus(); onFocus(cm); }
  }

  function delayBlurEvent(cm) {
    cm.state.delayingBlurEvent = true;
    setTimeout(function () { if (cm.state.delayingBlurEvent) {
      cm.state.delayingBlurEvent = false;
      onBlur(cm);
    } }, 100);
  }

  function onFocus(cm, e) {
    if (cm.state.delayingBlurEvent) { cm.state.delayingBlurEvent = false; }

    if (cm.options.readOnly == "nocursor") { return }
    if (!cm.state.focused) {
      signal(cm, "focus", cm, e);
      cm.state.focused = true;
      addClass(cm.display.wrapper, "CodeMirror-focused");
      // This test prevents this from firing when a context
      // menu is closed (since the input reset would kill the
      // select-all detection hack)
      if (!cm.curOp && cm.display.selForContextMenu != cm.doc.sel) {
        cm.display.input.reset();
        if (webkit) { setTimeout(function () { return cm.display.input.reset(true); }, 20); } // Issue #1730
      }
      cm.display.input.receivedFocus();
    }
    restartBlink(cm);
  }
  function onBlur(cm, e) {
    if (cm.state.delayingBlurEvent) { return }

    if (cm.state.focused) {
      signal(cm, "blur", cm, e);
      cm.state.focused = false;
      rmClass(cm.display.wrapper, "CodeMirror-focused");
    }
    clearInterval(cm.display.blinker);
    setTimeout(function () { if (!cm.state.focused) { cm.display.shift = false; } }, 150);
  }

  // Read the actual heights of the rendered lines, and update their
  // stored heights to match.
  function updateHeightsInViewport(cm) {
    var display = cm.display;
    var prevBottom = display.lineDiv.offsetTop;
    for (var i = 0; i < display.view.length; i++) {
      var cur = display.view[i], wrapping = cm.options.lineWrapping;
      var height = (void 0), width = 0;
      if (cur.hidden) { continue }
      if (ie && ie_version < 8) {
        var bot = cur.node.offsetTop + cur.node.offsetHeight;
        height = bot - prevBottom;
        prevBottom = bot;
      } else {
        var box = cur.node.getBoundingClientRect();
        height = box.bottom - box.top;
        // Check that lines don't extend past the right of the current
        // editor width
        if (!wrapping && cur.text.firstChild)
          { width = cur.text.firstChild.getBoundingClientRect().right - box.left - 1; }
      }
      var diff = cur.line.height - height;
      if (height < 2) { height = textHeight(display); }
      if (diff > .005 || diff < -.005) {
        updateLineHeight(cur.line, height);
        updateWidgetHeight(cur.line);
        if (cur.rest) { for (var j = 0; j < cur.rest.length; j++)
          { updateWidgetHeight(cur.rest[j]); } }
      }
      if (width > cm.display.sizerWidth) {
        var chWidth = Math.ceil(width / charWidth(cm.display));
        if (chWidth > cm.display.maxLineLength) {
          cm.display.maxLineLength = chWidth;
          cm.display.maxLine = cur.line;
          cm.display.maxLineChanged = true;
        }
      }
    }
  }

  // Read and store the height of line widgets associated with the
  // given line.
  function updateWidgetHeight(line) {
    if (line.widgets) { for (var i = 0; i < line.widgets.length; ++i) {
      var w = line.widgets[i], parent = w.node.parentNode;
      if (parent) { w.height = parent.offsetHeight; }
    } }
  }

  // Compute the lines that are visible in a given viewport (defaults
  // the the current scroll position). viewport may contain top,
  // height, and ensure (see op.scrollToPos) properties.
  function visibleLines(display, doc, viewport) {
    var top = viewport && viewport.top != null ? Math.max(0, viewport.top) : display.scroller.scrollTop;
    top = Math.floor(top - paddingTop(display));
    var bottom = viewport && viewport.bottom != null ? viewport.bottom : top + display.wrapper.clientHeight;

    var from = lineAtHeight(doc, top), to = lineAtHeight(doc, bottom);
    // Ensure is a {from: {line, ch}, to: {line, ch}} object, and
    // forces those lines into the viewport (if possible).
    if (viewport && viewport.ensure) {
      var ensureFrom = viewport.ensure.from.line, ensureTo = viewport.ensure.to.line;
      if (ensureFrom < from) {
        from = ensureFrom;
        to = lineAtHeight(doc, heightAtLine(getLine(doc, ensureFrom)) + display.wrapper.clientHeight);
      } else if (Math.min(ensureTo, doc.lastLine()) >= to) {
        from = lineAtHeight(doc, heightAtLine(getLine(doc, ensureTo)) - display.wrapper.clientHeight);
        to = ensureTo;
      }
    }
    return {from: from, to: Math.max(to, from + 1)}
  }

  // Re-align line numbers and gutter marks to compensate for
  // horizontal scrolling.
  function alignHorizontally(cm) {
    var display = cm.display, view = display.view;
    if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) { return }
    var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft;
    var gutterW = display.gutters.offsetWidth, left = comp + "px";
    for (var i = 0; i < view.length; i++) { if (!view[i].hidden) {
      if (cm.options.fixedGutter) {
        if (view[i].gutter)
          { view[i].gutter.style.left = left; }
        if (view[i].gutterBackground)
          { view[i].gutterBackground.style.left = left; }
      }
      var align = view[i].alignable;
      if (align) { for (var j = 0; j < align.length; j++)
        { align[j].style.left = left; } }
    } }
    if (cm.options.fixedGutter)
      { display.gutters.style.left = (comp + gutterW) + "px"; }
  }

  // Used to ensure that the line number gutter is still the right
  // size for the current document size. Returns true when an update
  // is needed.
  function maybeUpdateLineNumberWidth(cm) {
    if (!cm.options.lineNumbers) { return false }
    var doc = cm.doc, last = lineNumberFor(cm.options, doc.first + doc.size - 1), display = cm.display;
    if (last.length != display.lineNumChars) {
      var test = display.measure.appendChild(elt("div", [elt("div", last)],
                                                 "CodeMirror-linenumber CodeMirror-gutter-elt"));
      var innerW = test.firstChild.offsetWidth, padding = test.offsetWidth - innerW;
      display.lineGutter.style.width = "";
      display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding) + 1;
      display.lineNumWidth = display.lineNumInnerWidth + padding;
      display.lineNumChars = display.lineNumInnerWidth ? last.length : -1;
      display.lineGutter.style.width = display.lineNumWidth + "px";
      updateGutterSpace(cm);
      return true
    }
    return false
  }

  // SCROLLING THINGS INTO VIEW

  // If an editor sits on the top or bottom of the window, partially
  // scrolled out of view, this ensures that the cursor is visible.
  function maybeScrollWindow(cm, rect) {
    if (signalDOMEvent(cm, "scrollCursorIntoView")) { return }

    var display = cm.display, box = display.sizer.getBoundingClientRect(), doScroll = null;
    if (rect.top + box.top < 0) { doScroll = true; }
    else if (rect.bottom + box.top > (window.innerHeight || document.documentElement.clientHeight)) { doScroll = false; }
    if (doScroll != null && !phantom) {
      var scrollNode = elt("div", "\u200b", null, ("position: absolute;\n                         top: " + (rect.top - display.viewOffset - paddingTop(cm.display)) + "px;\n                         height: " + (rect.bottom - rect.top + scrollGap(cm) + display.barHeight) + "px;\n                         left: " + (rect.left) + "px; width: " + (Math.max(2, rect.right - rect.left)) + "px;"));
      cm.display.lineSpace.appendChild(scrollNode);
      scrollNode.scrollIntoView(doScroll);
      cm.display.lineSpace.removeChild(scrollNode);
    }
  }

  // Scroll a given position into view (immediately), verifying that
  // it actually became visible (as line heights are accurately
  // measured, the position of something may 'drift' during drawing).
  function scrollPosIntoView(cm, pos, end, margin) {
    if (margin == null) { margin = 0; }
    var rect;
    if (!cm.options.lineWrapping && pos == end) {
      // Set pos and end to the cursor positions around the character pos sticks to
      // If pos.sticky == "before", that is around pos.ch - 1, otherwise around pos.ch
      // If pos == Pos(_, 0, "before"), pos and end are unchanged
      pos = pos.ch ? Pos(pos.line, pos.sticky == "before" ? pos.ch - 1 : pos.ch, "after") : pos;
      end = pos.sticky == "before" ? Pos(pos.line, pos.ch + 1, "before") : pos;
    }
    for (var limit = 0; limit < 5; limit++) {
      var changed = false;
      var coords = cursorCoords(cm, pos);
      var endCoords = !end || end == pos ? coords : cursorCoords(cm, end);
      rect = {left: Math.min(coords.left, endCoords.left),
              top: Math.min(coords.top, endCoords.top) - margin,
              right: Math.max(coords.left, endCoords.left),
              bottom: Math.max(coords.bottom, endCoords.bottom) + margin};
      var scrollPos = calculateScrollPos(cm, rect);
      var startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft;
      if (scrollPos.scrollTop != null) {
        updateScrollTop(cm, scrollPos.scrollTop);
        if (Math.abs(cm.doc.scrollTop - startTop) > 1) { changed = true; }
      }
      if (scrollPos.scrollLeft != null) {
        setScrollLeft(cm, scrollPos.scrollLeft);
        if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) { changed = true; }
      }
      if (!changed) { break }
    }
    return rect
  }

  // Scroll a given set of coordinates into view (immediately).
  function scrollIntoView(cm, rect) {
    var scrollPos = calculateScrollPos(cm, rect);
    if (scrollPos.scrollTop != null) { updateScrollTop(cm, scrollPos.scrollTop); }
    if (scrollPos.scrollLeft != null) { setScrollLeft(cm, scrollPos.scrollLeft); }
  }

  // Calculate a new scroll position needed to scroll the given
  // rectangle into view. Returns an object with scrollTop and
  // scrollLeft properties. When these are undefined, the
  // vertical/horizontal position does not need to be adjusted.
  function calculateScrollPos(cm, rect) {
    var display = cm.display, snapMargin = textHeight(cm.display);
    if (rect.top < 0) { rect.top = 0; }
    var screentop = cm.curOp && cm.curOp.scrollTop != null ? cm.curOp.scrollTop : display.scroller.scrollTop;
    var screen = displayHeight(cm), result = {};
    if (rect.bottom - rect.top > screen) { rect.bottom = rect.top + screen; }
    var docBottom = cm.doc.height + paddingVert(display);
    var atTop = rect.top < snapMargin, atBottom = rect.bottom > docBottom - snapMargin;
    if (rect.top < screentop) {
      result.scrollTop = atTop ? 0 : rect.top;
    } else if (rect.bottom > screentop + screen) {
      var newTop = Math.min(rect.top, (atBottom ? docBottom : rect.bottom) - screen);
      if (newTop != screentop) { result.scrollTop = newTop; }
    }

    var screenleft = cm.curOp && cm.curOp.scrollLeft != null ? cm.curOp.scrollLeft : display.scroller.scrollLeft;
    var screenw = displayWidth(cm) - (cm.options.fixedGutter ? display.gutters.offsetWidth : 0);
    var tooWide = rect.right - rect.left > screenw;
    if (tooWide) { rect.right = rect.left + screenw; }
    if (rect.left < 10)
      { result.scrollLeft = 0; }
    else if (rect.left < screenleft)
      { result.scrollLeft = Math.max(0, rect.left - (tooWide ? 0 : 10)); }
    else if (rect.right > screenw + screenleft - 3)
      { result.scrollLeft = rect.right + (tooWide ? 0 : 10) - screenw; }
    return result
  }

  // Store a relative adjustment to the scroll position in the current
  // operation (to be applied when the operation finishes).
  function addToScrollTop(cm, top) {
    if (top == null) { return }
    resolveScrollToPos(cm);
    cm.curOp.scrollTop = (cm.curOp.scrollTop == null ? cm.doc.scrollTop : cm.curOp.scrollTop) + top;
  }

  // Make sure that at the end of the operation the current cursor is
  // shown.
  function ensureCursorVisible(cm) {
    resolveScrollToPos(cm);
    var cur = cm.getCursor();
    cm.curOp.scrollToPos = {from: cur, to: cur, margin: cm.options.cursorScrollMargin};
  }

  function scrollToCoords(cm, x, y) {
    if (x != null || y != null) { resolveScrollToPos(cm); }
    if (x != null) { cm.curOp.scrollLeft = x; }
    if (y != null) { cm.curOp.scrollTop = y; }
  }

  function scrollToRange(cm, range$$1) {
    resolveScrollToPos(cm);
    cm.curOp.scrollToPos = range$$1;
  }

  // When an operation has its scrollToPos property set, and another
  // scroll action is applied before the end of the operation, this
  // 'simulates' scrolling that position into view in a cheap way, so
  // that the effect of intermediate scroll commands is not ignored.
  function resolveScrollToPos(cm) {
    var range$$1 = cm.curOp.scrollToPos;
    if (range$$1) {
      cm.curOp.scrollToPos = null;
      var from = estimateCoords(cm, range$$1.from), to = estimateCoords(cm, range$$1.to);
      scrollToCoordsRange(cm, from, to, range$$1.margin);
    }
  }

  function scrollToCoordsRange(cm, from, to, margin) {
    var sPos = calculateScrollPos(cm, {
      left: Math.min(from.left, to.left),
      top: Math.min(from.top, to.top) - margin,
      right: Math.max(from.right, to.right),
      bottom: Math.max(from.bottom, to.bottom) + margin
    });
    scrollToCoords(cm, sPos.scrollLeft, sPos.scrollTop);
  }

  // Sync the scrollable area and scrollbars, ensure the viewport
  // covers the visible area.
  function updateScrollTop(cm, val) {
    if (Math.abs(cm.doc.scrollTop - val) < 2) { return }
    if (!gecko) { updateDisplaySimple(cm, {top: val}); }
    setScrollTop(cm, val, true);
    if (gecko) { updateDisplaySimple(cm); }
    startWorker(cm, 100);
  }

  function setScrollTop(cm, val, forceScroll) {
    val = Math.min(cm.display.scroller.scrollHeight - cm.display.scroller.clientHeight, val);
    if (cm.display.scroller.scrollTop == val && !forceScroll) { return }
    cm.doc.scrollTop = val;
    cm.display.scrollbars.setScrollTop(val);
    if (cm.display.scroller.scrollTop != val) { cm.display.scroller.scrollTop = val; }
  }

  // Sync scroller and scrollbar, ensure the gutter elements are
  // aligned.
  function setScrollLeft(cm, val, isScroller, forceScroll) {
    val = Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth);
    if ((isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) && !forceScroll) { return }
    cm.doc.scrollLeft = val;
    alignHorizontally(cm);
    if (cm.display.scroller.scrollLeft != val) { cm.display.scroller.scrollLeft = val; }
    cm.display.scrollbars.setScrollLeft(val);
  }

  // SCROLLBARS

  // Prepare DOM reads needed to update the scrollbars. Done in one
  // shot to minimize update/measure roundtrips.
  function measureForScrollbars(cm) {
    var d = cm.display, gutterW = d.gutters.offsetWidth;
    var docH = Math.round(cm.doc.height + paddingVert(cm.display));
    return {
      clientHeight: d.scroller.clientHeight,
      viewHeight: d.wrapper.clientHeight,
      scrollWidth: d.scroller.scrollWidth, clientWidth: d.scroller.clientWidth,
      viewWidth: d.wrapper.clientWidth,
      barLeft: cm.options.fixedGutter ? gutterW : 0,
      docHeight: docH,
      scrollHeight: docH + scrollGap(cm) + d.barHeight,
      nativeBarWidth: d.nativeBarWidth,
      gutterWidth: gutterW
    }
  }

  var NativeScrollbars = function(place, scroll, cm) {
    this.cm = cm;
    var vert = this.vert = elt("div", [elt("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar");
    var horiz = this.horiz = elt("div", [elt("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
    vert.tabIndex = horiz.tabIndex = -1;
    place(vert); place(horiz);

    on(vert, "scroll", function () {
      if (vert.clientHeight) { scroll(vert.scrollTop, "vertical"); }
    });
    on(horiz, "scroll", function () {
      if (horiz.clientWidth) { scroll(horiz.scrollLeft, "horizontal"); }
    });

    this.checkedZeroWidth = false;
    // Need to set a minimum width to see the scrollbar on IE7 (but must not set it on IE8).
    if (ie && ie_version < 8) { this.horiz.style.minHeight = this.vert.style.minWidth = "18px"; }
  };

  NativeScrollbars.prototype.update = function (measure) {
    var needsH = measure.scrollWidth > measure.clientWidth + 1;
    var needsV = measure.scrollHeight > measure.clientHeight + 1;
    var sWidth = measure.nativeBarWidth;

    if (needsV) {
      this.vert.style.display = "block";
      this.vert.style.bottom = needsH ? sWidth + "px" : "0";
      var totalHeight = measure.viewHeight - (needsH ? sWidth : 0);
      // A bug in IE8 can cause this value to be negative, so guard it.
      this.vert.firstChild.style.height =
        Math.max(0, measure.scrollHeight - measure.clientHeight + totalHeight) + "px";
    } else {
      this.vert.style.display = "";
      this.vert.firstChild.style.height = "0";
    }

    if (needsH) {
      this.horiz.style.display = "block";
      this.horiz.style.right = needsV ? sWidth + "px" : "0";
      this.horiz.style.left = measure.barLeft + "px";
      var totalWidth = measure.viewWidth - measure.barLeft - (needsV ? sWidth : 0);
      this.horiz.firstChild.style.width =
        Math.max(0, measure.scrollWidth - measure.clientWidth + totalWidth) + "px";
    } else {
      this.horiz.style.display = "";
      this.horiz.firstChild.style.width = "0";
    }

    if (!this.checkedZeroWidth && measure.clientHeight > 0) {
      if (sWidth == 0) { this.zeroWidthHack(); }
      this.checkedZeroWidth = true;
    }

    return {right: needsV ? sWidth : 0, bottom: needsH ? sWidth : 0}
  };

  NativeScrollbars.prototype.setScrollLeft = function (pos) {
    if (this.horiz.scrollLeft != pos) { this.horiz.scrollLeft = pos; }
    if (this.disableHoriz) { this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz"); }
  };

  NativeScrollbars.prototype.setScrollTop = function (pos) {
    if (this.vert.scrollTop != pos) { this.vert.scrollTop = pos; }
    if (this.disableVert) { this.enableZeroWidthBar(this.vert, this.disableVert, "vert"); }
  };

  NativeScrollbars.prototype.zeroWidthHack = function () {
    var w = mac && !mac_geMountainLion ? "12px" : "18px";
    this.horiz.style.height = this.vert.style.width = w;
    this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none";
    this.disableHoriz = new Delayed;
    this.disableVert = new Delayed;
  };

  NativeScrollbars.prototype.enableZeroWidthBar = function (bar, delay, type) {
    bar.style.pointerEvents = "auto";
    function maybeDisable() {
      // To find out whether the scrollbar is still visible, we
      // check whether the element under the pixel in the bottom
      // right corner of the scrollbar box is the scrollbar box
      // itself (when the bar is still visible) or its filler child
      // (when the bar is hidden). If it is still visible, we keep
      // it enabled, if it's hidden, we disable pointer events.
      var box = bar.getBoundingClientRect();
      var elt$$1 = type == "vert" ? document.elementFromPoint(box.right - 1, (box.top + box.bottom) / 2)
          : document.elementFromPoint((box.right + box.left) / 2, box.bottom - 1);
      if (elt$$1 != bar) { bar.style.pointerEvents = "none"; }
      else { delay.set(1000, maybeDisable); }
    }
    delay.set(1000, maybeDisable);
  };

  NativeScrollbars.prototype.clear = function () {
    var parent = this.horiz.parentNode;
    parent.removeChild(this.horiz);
    parent.removeChild(this.vert);
  };

  var NullScrollbars = function () {};

  NullScrollbars.prototype.update = function () { return {bottom: 0, right: 0} };
  NullScrollbars.prototype.setScrollLeft = function () {};
  NullScrollbars.prototype.setScrollTop = function () {};
  NullScrollbars.prototype.clear = function () {};

  function updateScrollbars(cm, measure) {
    if (!measure) { measure = measureForScrollbars(cm); }
    var startWidth = cm.display.barWidth, startHeight = cm.display.barHeight;
    updateScrollbarsInner(cm, measure);
    for (var i = 0; i < 4 && startWidth != cm.display.barWidth || startHeight != cm.display.barHeight; i++) {
      if (startWidth != cm.display.barWidth && cm.options.lineWrapping)
        { updateHeightsInViewport(cm); }
      updateScrollbarsInner(cm, measureForScrollbars(cm));
      startWidth = cm.display.barWidth; startHeight = cm.display.barHeight;
    }
  }

  // Re-synchronize the fake scrollbars with the actual size of the
  // content.
  function updateScrollbarsInner(cm, measure) {
    var d = cm.display;
    var sizes = d.scrollbars.update(measure);

    d.sizer.style.paddingRight = (d.barWidth = sizes.right) + "px";
    d.sizer.style.paddingBottom = (d.barHeight = sizes.bottom) + "px";
    d.heightForcer.style.borderBottom = sizes.bottom + "px solid transparent";

    if (sizes.right && sizes.bottom) {
      d.scrollbarFiller.style.display = "block";
      d.scrollbarFiller.style.height = sizes.bottom + "px";
      d.scrollbarFiller.style.width = sizes.right + "px";
    } else { d.scrollbarFiller.style.display = ""; }
    if (sizes.bottom && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
      d.gutterFiller.style.display = "block";
      d.gutterFiller.style.height = sizes.bottom + "px";
      d.gutterFiller.style.width = measure.gutterWidth + "px";
    } else { d.gutterFiller.style.display = ""; }
  }

  var scrollbarModel = {"native": NativeScrollbars, "null": NullScrollbars};

  function initScrollbars(cm) {
    if (cm.display.scrollbars) {
      cm.display.scrollbars.clear();
      if (cm.display.scrollbars.addClass)
        { rmClass(cm.display.wrapper, cm.display.scrollbars.addClass); }
    }

    cm.display.scrollbars = new scrollbarModel[cm.options.scrollbarStyle](function (node) {
      cm.display.wrapper.insertBefore(node, cm.display.scrollbarFiller);
      // Prevent clicks in the scrollbars from killing focus
      on(node, "mousedown", function () {
        if (cm.state.focused) { setTimeout(function () { return cm.display.input.focus(); }, 0); }
      });
      node.setAttribute("cm-not-content", "true");
    }, function (pos, axis) {
      if (axis == "horizontal") { setScrollLeft(cm, pos); }
      else { updateScrollTop(cm, pos); }
    }, cm);
    if (cm.display.scrollbars.addClass)
      { addClass(cm.display.wrapper, cm.display.scrollbars.addClass); }
  }

  // Operations are used to wrap a series of changes to the editor
  // state in such a way that each change won't have to update the
  // cursor and display (which would be awkward, slow, and
  // error-prone). Instead, display updates are batched and then all
  // combined and executed at once.

  var nextOpId = 0;
  // Start a new operation.
  function startOperation(cm) {
    cm.curOp = {
      cm: cm,
      viewChanged: false,      // Flag that indicates that lines might need to be redrawn
      startHeight: cm.doc.height, // Used to detect need to update scrollbar
      forceUpdate: false,      // Used to force a redraw
      updateInput: 0,       // Whether to reset the input textarea
      typing: false,           // Whether this reset should be careful to leave existing text (for compositing)
      changeObjs: null,        // Accumulated changes, for firing change events
      cursorActivityHandlers: null, // Set of handlers to fire cursorActivity on
      cursorActivityCalled: 0, // Tracks which cursorActivity handlers have been called already
      selectionChanged: false, // Whether the selection needs to be redrawn
      updateMaxLine: false,    // Set when the widest line needs to be determined anew
      scrollLeft: null, scrollTop: null, // Intermediate scroll position, not pushed to DOM yet
      scrollToPos: null,       // Used to scroll to a specific position
      focus: false,
      id: ++nextOpId           // Unique ID
    };
    pushOperation(cm.curOp);
  }

  // Finish an operation, updating the display and signalling delayed events
  function endOperation(cm) {
    var op = cm.curOp;
    if (op) { finishOperation(op, function (group) {
      for (var i = 0; i < group.ops.length; i++)
        { group.ops[i].cm.curOp = null; }
      endOperations(group);
    }); }
  }

  // The DOM updates done when an operation finishes are batched so
  // that the minimum number of relayouts are required.
  function endOperations(group) {
    var ops = group.ops;
    for (var i = 0; i < ops.length; i++) // Read DOM
      { endOperation_R1(ops[i]); }
    for (var i$1 = 0; i$1 < ops.length; i$1++) // Write DOM (maybe)
      { endOperation_W1(ops[i$1]); }
    for (var i$2 = 0; i$2 < ops.length; i$2++) // Read DOM
      { endOperation_R2(ops[i$2]); }
    for (var i$3 = 0; i$3 < ops.length; i$3++) // Write DOM (maybe)
      { endOperation_W2(ops[i$3]); }
    for (var i$4 = 0; i$4 < ops.length; i$4++) // Read DOM
      { endOperation_finish(ops[i$4]); }
  }

  function endOperation_R1(op) {
    var cm = op.cm, display = cm.display;
    maybeClipScrollbars(cm);
    if (op.updateMaxLine) { findMaxLine(cm); }

    op.mustUpdate = op.viewChanged || op.forceUpdate || op.scrollTop != null ||
      op.scrollToPos && (op.scrollToPos.from.line < display.viewFrom ||
                         op.scrollToPos.to.line >= display.viewTo) ||
      display.maxLineChanged && cm.options.lineWrapping;
    op.update = op.mustUpdate &&
      new DisplayUpdate(cm, op.mustUpdate && {top: op.scrollTop, ensure: op.scrollToPos}, op.forceUpdate);
  }

  function endOperation_W1(op) {
    op.updatedDisplay = op.mustUpdate && updateDisplayIfNeeded(op.cm, op.update);
  }

  function endOperation_R2(op) {
    var cm = op.cm, display = cm.display;
    if (op.updatedDisplay) { updateHeightsInViewport(cm); }

    op.barMeasure = measureForScrollbars(cm);

    // If the max line changed since it was last measured, measure it,
    // and ensure the document's width matches it.
    // updateDisplay_W2 will use these properties to do the actual resizing
    if (display.maxLineChanged && !cm.options.lineWrapping) {
      op.adjustWidthTo = measureChar(cm, display.maxLine, display.maxLine.text.length).left + 3;
      cm.display.sizerWidth = op.adjustWidthTo;
      op.barMeasure.scrollWidth =
        Math.max(display.scroller.clientWidth, display.sizer.offsetLeft + op.adjustWidthTo + scrollGap(cm) + cm.display.barWidth);
      op.maxScrollLeft = Math.max(0, display.sizer.offsetLeft + op.adjustWidthTo - displayWidth(cm));
    }

    if (op.updatedDisplay || op.selectionChanged)
      { op.preparedSelection = display.input.prepareSelection(); }
  }

  function endOperation_W2(op) {
    var cm = op.cm;

    if (op.adjustWidthTo != null) {
      cm.display.sizer.style.minWidth = op.adjustWidthTo + "px";
      if (op.maxScrollLeft < cm.doc.scrollLeft)
        { setScrollLeft(cm, Math.min(cm.display.scroller.scrollLeft, op.maxScrollLeft), true); }
      cm.display.maxLineChanged = false;
    }

    var takeFocus = op.focus && op.focus == activeElt();
    if (op.preparedSelection)
      { cm.display.input.showSelection(op.preparedSelection, takeFocus); }
    if (op.updatedDisplay || op.startHeight != cm.doc.height)
      { updateScrollbars(cm, op.barMeasure); }
    if (op.updatedDisplay)
      { setDocumentHeight(cm, op.barMeasure); }

    if (op.selectionChanged) { restartBlink(cm); }

    if (cm.state.focused && op.updateInput)
      { cm.display.input.reset(op.typing); }
    if (takeFocus) { ensureFocus(op.cm); }
  }

  function endOperation_finish(op) {
    var cm = op.cm, display = cm.display, doc = cm.doc;

    if (op.updatedDisplay) { postUpdateDisplay(cm, op.update); }

    // Abort mouse wheel delta measurement, when scrolling explicitly
    if (display.wheelStartX != null && (op.scrollTop != null || op.scrollLeft != null || op.scrollToPos))
      { display.wheelStartX = display.wheelStartY = null; }

    // Propagate the scroll position to the actual DOM scroller
    if (op.scrollTop != null) { setScrollTop(cm, op.scrollTop, op.forceScroll); }

    if (op.scrollLeft != null) { setScrollLeft(cm, op.scrollLeft, true, true); }
    // If we need to scroll a specific position into view, do so.
    if (op.scrollToPos) {
      var rect = scrollPosIntoView(cm, clipPos(doc, op.scrollToPos.from),
                                   clipPos(doc, op.scrollToPos.to), op.scrollToPos.margin);
      maybeScrollWindow(cm, rect);
    }

    // Fire events for markers that are hidden/unidden by editing or
    // undoing
    var hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers;
    if (hidden) { for (var i = 0; i < hidden.length; ++i)
      { if (!hidden[i].lines.length) { signal(hidden[i], "hide"); } } }
    if (unhidden) { for (var i$1 = 0; i$1 < unhidden.length; ++i$1)
      { if (unhidden[i$1].lines.length) { signal(unhidden[i$1], "unhide"); } } }

    if (display.wrapper.offsetHeight)
      { doc.scrollTop = cm.display.scroller.scrollTop; }

    // Fire change events, and delayed event handlers
    if (op.changeObjs)
      { signal(cm, "changes", cm, op.changeObjs); }
    if (op.update)
      { op.update.finish(); }
  }

  // Run the given function in an operation
  function runInOp(cm, f) {
    if (cm.curOp) { return f() }
    startOperation(cm);
    try { return f() }
    finally { endOperation(cm); }
  }
  // Wraps a function in an operation. Returns the wrapped function.
  function operation(cm, f) {
    return function() {
      if (cm.curOp) { return f.apply(cm, arguments) }
      startOperation(cm);
      try { return f.apply(cm, arguments) }
      finally { endOperation(cm); }
    }
  }
  // Used to add methods to editor and doc instances, wrapping them in
  // operations.
  function methodOp(f) {
    return function() {
      if (this.curOp) { return f.apply(this, arguments) }
      startOperation(this);
      try { return f.apply(this, arguments) }
      finally { endOperation(this); }
    }
  }
  function docMethodOp(f) {
    return function() {
      var cm = this.cm;
      if (!cm || cm.curOp) { return f.apply(this, arguments) }
      startOperation(cm);
      try { return f.apply(this, arguments) }
      finally { endOperation(cm); }
    }
  }

  // Updates the display.view data structure for a given change to the
  // document. From and to are in pre-change coordinates. Lendiff is
  // the amount of lines added or subtracted by the change. This is
  // used for changes that span multiple lines, or change the way
  // lines are divided into visual lines. regLineChange (below)
  // registers single-line changes.
  function regChange(cm, from, to, lendiff) {
    if (from == null) { from = cm.doc.first; }
    if (to == null) { to = cm.doc.first + cm.doc.size; }
    if (!lendiff) { lendiff = 0; }

    var display = cm.display;
    if (lendiff && to < display.viewTo &&
        (display.updateLineNumbers == null || display.updateLineNumbers > from))
      { display.updateLineNumbers = from; }

    cm.curOp.viewChanged = true;

    if (from >= display.viewTo) { // Change after
      if (sawCollapsedSpans && visualLineNo(cm.doc, from) < display.viewTo)
        { resetView(cm); }
    } else if (to <= display.viewFrom) { // Change before
      if (sawCollapsedSpans && visualLineEndNo(cm.doc, to + lendiff) > display.viewFrom) {
        resetView(cm);
      } else {
        display.viewFrom += lendiff;
        display.viewTo += lendiff;
      }
    } else if (from <= display.viewFrom && to >= display.viewTo) { // Full overlap
      resetView(cm);
    } else if (from <= display.viewFrom) { // Top overlap
      var cut = viewCuttingPoint(cm, to, to + lendiff, 1);
      if (cut) {
        display.view = display.view.slice(cut.index);
        display.viewFrom = cut.lineN;
        display.viewTo += lendiff;
      } else {
        resetView(cm);
      }
    } else if (to >= display.viewTo) { // Bottom overlap
      var cut$1 = viewCuttingPoint(cm, from, from, -1);
      if (cut$1) {
        display.view = display.view.slice(0, cut$1.index);
        display.viewTo = cut$1.lineN;
      } else {
        resetView(cm);
      }
    } else { // Gap in the middle
      var cutTop = viewCuttingPoint(cm, from, from, -1);
      var cutBot = viewCuttingPoint(cm, to, to + lendiff, 1);
      if (cutTop && cutBot) {
        display.view = display.view.slice(0, cutTop.index)
          .concat(buildViewArray(cm, cutTop.lineN, cutBot.lineN))
          .concat(display.view.slice(cutBot.index));
        display.viewTo += lendiff;
      } else {
        resetView(cm);
      }
    }

    var ext = display.externalMeasured;
    if (ext) {
      if (to < ext.lineN)
        { ext.lineN += lendiff; }
      else if (from < ext.lineN + ext.size)
        { display.externalMeasured = null; }
    }
  }

  // Register a change to a single line. Type must be one of "text",
  // "gutter", "class", "widget"
  function regLineChange(cm, line, type) {
    cm.curOp.viewChanged = true;
    var display = cm.display, ext = cm.display.externalMeasured;
    if (ext && line >= ext.lineN && line < ext.lineN + ext.size)
      { display.externalMeasured = null; }

    if (line < display.viewFrom || line >= display.viewTo) { return }
    var lineView = display.view[findViewIndex(cm, line)];
    if (lineView.node == null) { return }
    var arr = lineView.changes || (lineView.changes = []);
    if (indexOf(arr, type) == -1) { arr.push(type); }
  }

  // Clear the view.
  function resetView(cm) {
    cm.display.viewFrom = cm.display.viewTo = cm.doc.first;
    cm.display.view = [];
    cm.display.viewOffset = 0;
  }

  function viewCuttingPoint(cm, oldN, newN, dir) {
    var index = findViewIndex(cm, oldN), diff, view = cm.display.view;
    if (!sawCollapsedSpans || newN == cm.doc.first + cm.doc.size)
      { return {index: index, lineN: newN} }
    var n = cm.display.viewFrom;
    for (var i = 0; i < index; i++)
      { n += view[i].size; }
    if (n != oldN) {
      if (dir > 0) {
        if (index == view.length - 1) { return null }
        diff = (n + view[index].size) - oldN;
        index++;
      } else {
        diff = n - oldN;
      }
      oldN += diff; newN += diff;
    }
    while (visualLineNo(cm.doc, newN) != newN) {
      if (index == (dir < 0 ? 0 : view.length - 1)) { return null }
      newN += dir * view[index - (dir < 0 ? 1 : 0)].size;
      index += dir;
    }
    return {index: index, lineN: newN}
  }

  // Force the view to cover a given range, adding empty view element
  // or clipping off existing ones as needed.
  function adjustView(cm, from, to) {
    var display = cm.display, view = display.view;
    if (view.length == 0 || from >= display.viewTo || to <= display.viewFrom) {
      display.view = buildViewArray(cm, from, to);
      display.viewFrom = from;
    } else {
      if (display.viewFrom > from)
        { display.view = buildViewArray(cm, from, display.viewFrom).concat(display.view); }
      else if (display.viewFrom < from)
        { display.view = display.view.slice(findViewIndex(cm, from)); }
      display.viewFrom = from;
      if (display.viewTo < to)
        { display.view = display.view.concat(buildViewArray(cm, display.viewTo, to)); }
      else if (display.viewTo > to)
        { display.view = display.view.slice(0, findViewIndex(cm, to)); }
    }
    display.viewTo = to;
  }

  // Count the number of lines in the view whose DOM representation is
  // out of date (or nonexistent).
  function countDirtyView(cm) {
    var view = cm.display.view, dirty = 0;
    for (var i = 0; i < view.length; i++) {
      var lineView = view[i];
      if (!lineView.hidden && (!lineView.node || lineView.changes)) { ++dirty; }
    }
    return dirty
  }

  // HIGHLIGHT WORKER

  function startWorker(cm, time) {
    if (cm.doc.highlightFrontier < cm.display.viewTo)
      { cm.state.highlight.set(time, bind(highlightWorker, cm)); }
  }

  function highlightWorker(cm) {
    var doc = cm.doc;
    if (doc.highlightFrontier >= cm.display.viewTo) { return }
    var end = +new Date + cm.options.workTime;
    var context = getContextBefore(cm, doc.highlightFrontier);
    var changedLines = [];

    doc.iter(context.line, Math.min(doc.first + doc.size, cm.display.viewTo + 500), function (line) {
      if (context.line >= cm.display.viewFrom) { // Visible
        var oldStyles = line.styles;
        var resetState = line.text.length > cm.options.maxHighlightLength ? copyState(doc.mode, context.state) : null;
        var highlighted = highlightLine(cm, line, context, true);
        if (resetState) { context.state = resetState; }
        line.styles = highlighted.styles;
        var oldCls = line.styleClasses, newCls = highlighted.classes;
        if (newCls) { line.styleClasses = newCls; }
        else if (oldCls) { line.styleClasses = null; }
        var ischange = !oldStyles || oldStyles.length != line.styles.length ||
          oldCls != newCls && (!oldCls || !newCls || oldCls.bgClass != newCls.bgClass || oldCls.textClass != newCls.textClass);
        for (var i = 0; !ischange && i < oldStyles.length; ++i) { ischange = oldStyles[i] != line.styles[i]; }
        if (ischange) { changedLines.push(context.line); }
        line.stateAfter = context.save();
        context.nextLine();
      } else {
        if (line.text.length <= cm.options.maxHighlightLength)
          { processLine(cm, line.text, context); }
        line.stateAfter = context.line % 5 == 0 ? context.save() : null;
        context.nextLine();
      }
      if (+new Date > end) {
        startWorker(cm, cm.options.workDelay);
        return true
      }
    });
    doc.highlightFrontier = context.line;
    doc.modeFrontier = Math.max(doc.modeFrontier, context.line);
    if (changedLines.length) { runInOp(cm, function () {
      for (var i = 0; i < changedLines.length; i++)
        { regLineChange(cm, changedLines[i], "text"); }
    }); }
  }

  // DISPLAY DRAWING

  var DisplayUpdate = function(cm, viewport, force) {
    var display = cm.display;

    this.viewport = viewport;
    // Store some values that we'll need later (but don't want to force a relayout for)
    this.visible = visibleLines(display, cm.doc, viewport);
    this.editorIsHidden = !display.wrapper.offsetWidth;
    this.wrapperHeight = display.wrapper.clientHeight;
    this.wrapperWidth = display.wrapper.clientWidth;
    this.oldDisplayWidth = displayWidth(cm);
    this.force = force;
    this.dims = getDimensions(cm);
    this.events = [];
  };

  DisplayUpdate.prototype.signal = function (emitter, type) {
    if (hasHandler(emitter, type))
      { this.events.push(arguments); }
  };
  DisplayUpdate.prototype.finish = function () {
      var this$1 = this;

    for (var i = 0; i < this.events.length; i++)
      { signal.apply(null, this$1.events[i]); }
  };

  function maybeClipScrollbars(cm) {
    var display = cm.display;
    if (!display.scrollbarsClipped && display.scroller.offsetWidth) {
      display.nativeBarWidth = display.scroller.offsetWidth - display.scroller.clientWidth;
      display.heightForcer.style.height = scrollGap(cm) + "px";
      display.sizer.style.marginBottom = -display.nativeBarWidth + "px";
      display.sizer.style.borderRightWidth = scrollGap(cm) + "px";
      display.scrollbarsClipped = true;
    }
  }

  function selectionSnapshot(cm) {
    if (cm.hasFocus()) { return null }
    var active = activeElt();
    if (!active || !contains(cm.display.lineDiv, active)) { return null }
    var result = {activeElt: active};
    if (window.getSelection) {
      var sel = window.getSelection();
      if (sel.anchorNode && sel.extend && contains(cm.display.lineDiv, sel.anchorNode)) {
        result.anchorNode = sel.anchorNode;
        result.anchorOffset = sel.anchorOffset;
        result.focusNode = sel.focusNode;
        result.focusOffset = sel.focusOffset;
      }
    }
    return result
  }

  function restoreSelection(snapshot) {
    if (!snapshot || !snapshot.activeElt || snapshot.activeElt == activeElt()) { return }
    snapshot.activeElt.focus();
    if (snapshot.anchorNode && contains(document.body, snapshot.anchorNode) && contains(document.body, snapshot.focusNode)) {
      var sel = window.getSelection(), range$$1 = document.createRange();
      range$$1.setEnd(snapshot.anchorNode, snapshot.anchorOffset);
      range$$1.collapse(false);
      sel.removeAllRanges();
      sel.addRange(range$$1);
      sel.extend(snapshot.focusNode, snapshot.focusOffset);
    }
  }

  // Does the actual updating of the line display. Bails out
  // (returning false) when there is nothing to be done and forced is
  // false.
  function updateDisplayIfNeeded(cm, update) {
    var display = cm.display, doc = cm.doc;

    if (update.editorIsHidden) {
      resetView(cm);
      return false
    }

    // Bail out if the visible area is already rendered and nothing changed.
    if (!update.force &&
        update.visible.from >= display.viewFrom && update.visible.to <= display.viewTo &&
        (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo) &&
        display.renderedView == display.view && countDirtyView(cm) == 0)
      { return false }

    if (maybeUpdateLineNumberWidth(cm)) {
      resetView(cm);
      update.dims = getDimensions(cm);
    }

    // Compute a suitable new viewport (from & to)
    var end = doc.first + doc.size;
    var from = Math.max(update.visible.from - cm.options.viewportMargin, doc.first);
    var to = Math.min(end, update.visible.to + cm.options.viewportMargin);
    if (display.viewFrom < from && from - display.viewFrom < 20) { from = Math.max(doc.first, display.viewFrom); }
    if (display.viewTo > to && display.viewTo - to < 20) { to = Math.min(end, display.viewTo); }
    if (sawCollapsedSpans) {
      from = visualLineNo(cm.doc, from);
      to = visualLineEndNo(cm.doc, to);
    }

    var different = from != display.viewFrom || to != display.viewTo ||
      display.lastWrapHeight != update.wrapperHeight || display.lastWrapWidth != update.wrapperWidth;
    adjustView(cm, from, to);

    display.viewOffset = heightAtLine(getLine(cm.doc, display.viewFrom));
    // Position the mover div to align with the current scroll position
    cm.display.mover.style.top = display.viewOffset + "px";

    var toUpdate = countDirtyView(cm);
    if (!different && toUpdate == 0 && !update.force && display.renderedView == display.view &&
        (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo))
      { return false }

    // For big changes, we hide the enclosing element during the
    // update, since that speeds up the operations on most browsers.
    var selSnapshot = selectionSnapshot(cm);
    if (toUpdate > 4) { display.lineDiv.style.display = "none"; }
    patchDisplay(cm, display.updateLineNumbers, update.dims);
    if (toUpdate > 4) { display.lineDiv.style.display = ""; }
    display.renderedView = display.view;
    // There might have been a widget with a focused element that got
    // hidden or updated, if so re-focus it.
    restoreSelection(selSnapshot);

    // Prevent selection and cursors from interfering with the scroll
    // width and height.
    removeChildren(display.cursorDiv);
    removeChildren(display.selectionDiv);
    display.gutters.style.height = display.sizer.style.minHeight = 0;

    if (different) {
      display.lastWrapHeight = update.wrapperHeight;
      display.lastWrapWidth = update.wrapperWidth;
      startWorker(cm, 400);
    }

    display.updateLineNumbers = null;

    return true
  }

  function postUpdateDisplay(cm, update) {
    var viewport = update.viewport;

    for (var first = true;; first = false) {
      if (!first || !cm.options.lineWrapping || update.oldDisplayWidth == displayWidth(cm)) {
        // Clip forced viewport to actual scrollable area.
        if (viewport && viewport.top != null)
          { viewport = {top: Math.min(cm.doc.height + paddingVert(cm.display) - displayHeight(cm), viewport.top)}; }
        // Updated line heights might result in the drawn area not
        // actually covering the viewport. Keep looping until it does.
        update.visible = visibleLines(cm.display, cm.doc, viewport);
        if (update.visible.from >= cm.display.viewFrom && update.visible.to <= cm.display.viewTo)
          { break }
      }
      if (!updateDisplayIfNeeded(cm, update)) { break }
      updateHeightsInViewport(cm);
      var barMeasure = measureForScrollbars(cm);
      updateSelection(cm);
      updateScrollbars(cm, barMeasure);
      setDocumentHeight(cm, barMeasure);
      update.force = false;
    }

    update.signal(cm, "update", cm);
    if (cm.display.viewFrom != cm.display.reportedViewFrom || cm.display.viewTo != cm.display.reportedViewTo) {
      update.signal(cm, "viewportChange", cm, cm.display.viewFrom, cm.display.viewTo);
      cm.display.reportedViewFrom = cm.display.viewFrom; cm.display.reportedViewTo = cm.display.viewTo;
    }
  }

  function updateDisplaySimple(cm, viewport) {
    var update = new DisplayUpdate(cm, viewport);
    if (updateDisplayIfNeeded(cm, update)) {
      updateHeightsInViewport(cm);
      postUpdateDisplay(cm, update);
      var barMeasure = measureForScrollbars(cm);
      updateSelection(cm);
      updateScrollbars(cm, barMeasure);
      setDocumentHeight(cm, barMeasure);
      update.finish();
    }
  }

  // Sync the actual display DOM structure with display.view, removing
  // nodes for lines that are no longer in view, and creating the ones
  // that are not there yet, and updating the ones that are out of
  // date.
  function patchDisplay(cm, updateNumbersFrom, dims) {
    var display = cm.display, lineNumbers = cm.options.lineNumbers;
    var container = display.lineDiv, cur = container.firstChild;

    function rm(node) {
      var next = node.nextSibling;
      // Works around a throw-scroll bug in OS X Webkit
      if (webkit && mac && cm.display.currentWheelTarget == node)
        { node.style.display = "none"; }
      else
        { node.parentNode.removeChild(node); }
      return next
    }

    var view = display.view, lineN = display.viewFrom;
    // Loop over the elements in the view, syncing cur (the DOM nodes
    // in display.lineDiv) with the view as we go.
    for (var i = 0; i < view.length; i++) {
      var lineView = view[i];
      if (lineView.hidden) ; else if (!lineView.node || lineView.node.parentNode != container) { // Not drawn yet
        var node = buildLineElement(cm, lineView, lineN, dims);
        container.insertBefore(node, cur);
      } else { // Already drawn
        while (cur != lineView.node) { cur = rm(cur); }
        var updateNumber = lineNumbers && updateNumbersFrom != null &&
          updateNumbersFrom <= lineN && lineView.lineNumber;
        if (lineView.changes) {
          if (indexOf(lineView.changes, "gutter") > -1) { updateNumber = false; }
          updateLineForChanges(cm, lineView, lineN, dims);
        }
        if (updateNumber) {
          removeChildren(lineView.lineNumber);
          lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options, lineN)));
        }
        cur = lineView.node.nextSibling;
      }
      lineN += lineView.size;
    }
    while (cur) { cur = rm(cur); }
  }

  function updateGutterSpace(cm) {
    var width = cm.display.gutters.offsetWidth;
    cm.display.sizer.style.marginLeft = width + "px";
  }

  function setDocumentHeight(cm, measure) {
    cm.display.sizer.style.minHeight = measure.docHeight + "px";
    cm.display.heightForcer.style.top = measure.docHeight + "px";
    cm.display.gutters.style.height = (measure.docHeight + cm.display.barHeight + scrollGap(cm)) + "px";
  }

  // Rebuild the gutter elements, ensure the margin to the left of the
  // code matches their width.
  function updateGutters(cm) {
    var gutters = cm.display.gutters, specs = cm.options.gutters;
    removeChildren(gutters);
    var i = 0;
    for (; i < specs.length; ++i) {
      var gutterClass = specs[i];
      var gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + gutterClass));
      if (gutterClass == "CodeMirror-linenumbers") {
        cm.display.lineGutter = gElt;
        gElt.style.width = (cm.display.lineNumWidth || 1) + "px";
      }
    }
    gutters.style.display = i ? "" : "none";
    updateGutterSpace(cm);
  }

  // Make sure the gutters options contains the element
  // "CodeMirror-linenumbers" when the lineNumbers option is true.
  function setGuttersForLineNumbers(options) {
    var found = indexOf(options.gutters, "CodeMirror-linenumbers");
    if (found == -1 && options.lineNumbers) {
      options.gutters = options.gutters.concat(["CodeMirror-linenumbers"]);
    } else if (found > -1 && !options.lineNumbers) {
      options.gutters = options.gutters.slice(0);
      options.gutters.splice(found, 1);
    }
  }

  // Since the delta values reported on mouse wheel events are
  // unstandardized between browsers and even browser versions, and
  // generally horribly unpredictable, this code starts by measuring
  // the scroll effect that the first few mouse wheel events have,
  // and, from that, detects the way it can convert deltas to pixel
  // offsets afterwards.
  //
  // The reason we want to know the amount a wheel event will scroll
  // is that it gives us a chance to update the display before the
  // actual scrolling happens, reducing flickering.

  var wheelSamples = 0, wheelPixelsPerUnit = null;
  // Fill in a browser-detected starting value on browsers where we
  // know one. These don't have to be accurate -- the result of them
  // being wrong would just be a slight flicker on the first wheel
  // scroll (if it is large enough).
  if (ie) { wheelPixelsPerUnit = -.53; }
  else if (gecko) { wheelPixelsPerUnit = 15; }
  else if (chrome) { wheelPixelsPerUnit = -.7; }
  else if (safari) { wheelPixelsPerUnit = -1/3; }

  function wheelEventDelta(e) {
    var dx = e.wheelDeltaX, dy = e.wheelDeltaY;
    if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) { dx = e.detail; }
    if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) { dy = e.detail; }
    else if (dy == null) { dy = e.wheelDelta; }
    return {x: dx, y: dy}
  }
  function wheelEventPixels(e) {
    var delta = wheelEventDelta(e);
    delta.x *= wheelPixelsPerUnit;
    delta.y *= wheelPixelsPerUnit;
    return delta
  }

  function onScrollWheel(cm, e) {
    var delta = wheelEventDelta(e), dx = delta.x, dy = delta.y;

    var display = cm.display, scroll = display.scroller;
    // Quit if there's nothing to scroll here
    var canScrollX = scroll.scrollWidth > scroll.clientWidth;
    var canScrollY = scroll.scrollHeight > scroll.clientHeight;
    if (!(dx && canScrollX || dy && canScrollY)) { return }

    // Webkit browsers on OS X abort momentum scrolls when the target
    // of the scroll event is removed from the scrollable element.
    // This hack (see related code in patchDisplay) makes sure the
    // element is kept around.
    if (dy && mac && webkit) {
      outer: for (var cur = e.target, view = display.view; cur != scroll; cur = cur.parentNode) {
        for (var i = 0; i < view.length; i++) {
          if (view[i].node == cur) {
            cm.display.currentWheelTarget = cur;
            break outer
          }
        }
      }
    }

    // On some browsers, horizontal scrolling will cause redraws to
    // happen before the gutter has been realigned, causing it to
    // wriggle around in a most unseemly way. When we have an
    // estimated pixels/delta value, we just handle horizontal
    // scrolling entirely here. It'll be slightly off from native, but
    // better than glitching out.
    if (dx && !gecko && !presto && wheelPixelsPerUnit != null) {
      if (dy && canScrollY)
        { updateScrollTop(cm, Math.max(0, scroll.scrollTop + dy * wheelPixelsPerUnit)); }
      setScrollLeft(cm, Math.max(0, scroll.scrollLeft + dx * wheelPixelsPerUnit));
      // Only prevent default scrolling if vertical scrolling is
      // actually possible. Otherwise, it causes vertical scroll
      // jitter on OSX trackpads when deltaX is small and deltaY
      // is large (issue #3579)
      if (!dy || (dy && canScrollY))
        { e_preventDefault(e); }
      display.wheelStartX = null; // Abort measurement, if in progress
      return
    }

    // 'Project' the visible viewport to cover the area that is being
    // scrolled into view (if we know enough to estimate it).
    if (dy && wheelPixelsPerUnit != null) {
      var pixels = dy * wheelPixelsPerUnit;
      var top = cm.doc.scrollTop, bot = top + display.wrapper.clientHeight;
      if (pixels < 0) { top = Math.max(0, top + pixels - 50); }
      else { bot = Math.min(cm.doc.height, bot + pixels + 50); }
      updateDisplaySimple(cm, {top: top, bottom: bot});
    }

    if (wheelSamples < 20) {
      if (display.wheelStartX == null) {
        display.wheelStartX = scroll.scrollLeft; display.wheelStartY = scroll.scrollTop;
        display.wheelDX = dx; display.wheelDY = dy;
        setTimeout(function () {
          if (display.wheelStartX == null) { return }
          var movedX = scroll.scrollLeft - display.wheelStartX;
          var movedY = scroll.scrollTop - display.wheelStartY;
          var sample = (movedY && display.wheelDY && movedY / display.wheelDY) ||
            (movedX && display.wheelDX && movedX / display.wheelDX);
          display.wheelStartX = display.wheelStartY = null;
          if (!sample) { return }
          wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1);
          ++wheelSamples;
        }, 200);
      } else {
        display.wheelDX += dx; display.wheelDY += dy;
      }
    }
  }

  // Selection objects are immutable. A new one is created every time
  // the selection changes. A selection is one or more non-overlapping
  // (and non-touching) ranges, sorted, and an integer that indicates
  // which one is the primary selection (the one that's scrolled into
  // view, that getCursor returns, etc).
  var Selection = function(ranges, primIndex) {
    this.ranges = ranges;
    this.primIndex = primIndex;
  };

  Selection.prototype.primary = function () { return this.ranges[this.primIndex] };

  Selection.prototype.equals = function (other) {
      var this$1 = this;

    if (other == this) { return true }
    if (other.primIndex != this.primIndex || other.ranges.length != this.ranges.length) { return false }
    for (var i = 0; i < this.ranges.length; i++) {
      var here = this$1.ranges[i], there = other.ranges[i];
      if (!equalCursorPos(here.anchor, there.anchor) || !equalCursorPos(here.head, there.head)) { return false }
    }
    return true
  };

  Selection.prototype.deepCopy = function () {
      var this$1 = this;

    var out = [];
    for (var i = 0; i < this.ranges.length; i++)
      { out[i] = new Range(copyPos(this$1.ranges[i].anchor), copyPos(this$1.ranges[i].head)); }
    return new Selection(out, this.primIndex)
  };

  Selection.prototype.somethingSelected = function () {
      var this$1 = this;

    for (var i = 0; i < this.ranges.length; i++)
      { if (!this$1.ranges[i].empty()) { return true } }
    return false
  };

  Selection.prototype.contains = function (pos, end) {
      var this$1 = this;

    if (!end) { end = pos; }
    for (var i = 0; i < this.ranges.length; i++) {
      var range = this$1.ranges[i];
      if (cmp(end, range.from()) >= 0 && cmp(pos, range.to()) <= 0)
        { return i }
    }
    return -1
  };

  var Range = function(anchor, head) {
    this.anchor = anchor; this.head = head;
  };

  Range.prototype.from = function () { return minPos(this.anchor, this.head) };
  Range.prototype.to = function () { return maxPos(this.anchor, this.head) };
  Range.prototype.empty = function () { return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch };

  // Take an unsorted, potentially overlapping set of ranges, and
  // build a selection out of it. 'Consumes' ranges array (modifying
  // it).
  function normalizeSelection(cm, ranges, primIndex) {
    var mayTouch = cm && cm.options.selectionsMayTouch;
    var prim = ranges[primIndex];
    ranges.sort(function (a, b) { return cmp(a.from(), b.from()); });
    primIndex = indexOf(ranges, prim);
    for (var i = 1; i < ranges.length; i++) {
      var cur = ranges[i], prev = ranges[i - 1];
      var diff = cmp(prev.to(), cur.from());
      if (mayTouch && !cur.empty() ? diff > 0 : diff >= 0) {
        var from = minPos(prev.from(), cur.from()), to = maxPos(prev.to(), cur.to());
        var inv = prev.empty() ? cur.from() == cur.head : prev.from() == prev.head;
        if (i <= primIndex) { --primIndex; }
        ranges.splice(--i, 2, new Range(inv ? to : from, inv ? from : to));
      }
    }
    return new Selection(ranges, primIndex)
  }

  function simpleSelection(anchor, head) {
    return new Selection([new Range(anchor, head || anchor)], 0)
  }

  // Compute the position of the end of a change (its 'to' property
  // refers to the pre-change end).
  function changeEnd(change) {
    if (!change.text) { return change.to }
    return Pos(change.from.line + change.text.length - 1,
               lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0))
  }

  // Adjust a position to refer to the post-change position of the
  // same text, or the end of the change if the change covers it.
  function adjustForChange(pos, change) {
    if (cmp(pos, change.from) < 0) { return pos }
    if (cmp(pos, change.to) <= 0) { return changeEnd(change) }

    var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1, ch = pos.ch;
    if (pos.line == change.to.line) { ch += changeEnd(change).ch - change.to.ch; }
    return Pos(line, ch)
  }

  function computeSelAfterChange(doc, change) {
    var out = [];
    for (var i = 0; i < doc.sel.ranges.length; i++) {
      var range = doc.sel.ranges[i];
      out.push(new Range(adjustForChange(range.anchor, change),
                         adjustForChange(range.head, change)));
    }
    return normalizeSelection(doc.cm, out, doc.sel.primIndex)
  }

  function offsetPos(pos, old, nw) {
    if (pos.line == old.line)
      { return Pos(nw.line, pos.ch - old.ch + nw.ch) }
    else
      { return Pos(nw.line + (pos.line - old.line), pos.ch) }
  }

  // Used by replaceSelections to allow moving the selection to the
  // start or around the replaced test. Hint may be "start" or "around".
  function computeReplacedSel(doc, changes, hint) {
    var out = [];
    var oldPrev = Pos(doc.first, 0), newPrev = oldPrev;
    for (var i = 0; i < changes.length; i++) {
      var change = changes[i];
      var from = offsetPos(change.from, oldPrev, newPrev);
      var to = offsetPos(changeEnd(change), oldPrev, newPrev);
      oldPrev = change.to;
      newPrev = to;
      if (hint == "around") {
        var range = doc.sel.ranges[i], inv = cmp(range.head, range.anchor) < 0;
        out[i] = new Range(inv ? to : from, inv ? from : to);
      } else {
        out[i] = new Range(from, from);
      }
    }
    return new Selection(out, doc.sel.primIndex)
  }

  // Used to get the editor into a consistent state again when options change.

  function loadMode(cm) {
    cm.doc.mode = getMode(cm.options, cm.doc.modeOption);
    resetModeState(cm);
  }

  function resetModeState(cm) {
    cm.doc.iter(function (line) {
      if (line.stateAfter) { line.stateAfter = null; }
      if (line.styles) { line.styles = null; }
    });
    cm.doc.modeFrontier = cm.doc.highlightFrontier = cm.doc.first;
    startWorker(cm, 100);
    cm.state.modeGen++;
    if (cm.curOp) { regChange(cm); }
  }

  // DOCUMENT DATA STRUCTURE

  // By default, updates that start and end at the beginning of a line
  // are treated specially, in order to make the association of line
  // widgets and marker elements with the text behave more intuitive.
  function isWholeLineUpdate(doc, change) {
    return change.from.ch == 0 && change.to.ch == 0 && lst(change.text) == "" &&
      (!doc.cm || doc.cm.options.wholeLineUpdateBefore)
  }

  // Perform a change on the document data structure.
  function updateDoc(doc, change, markedSpans, estimateHeight$$1) {
    function spansFor(n) {return markedSpans ? markedSpans[n] : null}
    function update(line, text, spans) {
      updateLine(line, text, spans, estimateHeight$$1);
      signalLater(line, "change", line, change);
    }
    function linesFor(start, end) {
      var result = [];
      for (var i = start; i < end; ++i)
        { result.push(new Line(text[i], spansFor(i), estimateHeight$$1)); }
      return result
    }

    var from = change.from, to = change.to, text = change.text;
    var firstLine = getLine(doc, from.line), lastLine = getLine(doc, to.line);
    var lastText = lst(text), lastSpans = spansFor(text.length - 1), nlines = to.line - from.line;

    // Adjust the line structure
    if (change.full) {
      doc.insert(0, linesFor(0, text.length));
      doc.remove(text.length, doc.size - text.length);
    } else if (isWholeLineUpdate(doc, change)) {
      // This is a whole-line replace. Treated specially to make
      // sure line objects move the way they are supposed to.
      var added = linesFor(0, text.length - 1);
      update(lastLine, lastLine.text, lastSpans);
      if (nlines) { doc.remove(from.line, nlines); }
      if (added.length) { doc.insert(from.line, added); }
    } else if (firstLine == lastLine) {
      if (text.length == 1) {
        update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans);
      } else {
        var added$1 = linesFor(1, text.length - 1);
        added$1.push(new Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight$$1));
        update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
        doc.insert(from.line + 1, added$1);
      }
    } else if (text.length == 1) {
      update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0));
      doc.remove(from.line + 1, nlines);
    } else {
      update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
      update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans);
      var added$2 = linesFor(1, text.length - 1);
      if (nlines > 1) { doc.remove(from.line + 1, nlines - 1); }
      doc.insert(from.line + 1, added$2);
    }

    signalLater(doc, "change", doc, change);
  }

  // Call f for all linked documents.
  function linkedDocs(doc, f, sharedHistOnly) {
    function propagate(doc, skip, sharedHist) {
      if (doc.linked) { for (var i = 0; i < doc.linked.length; ++i) {
        var rel = doc.linked[i];
        if (rel.doc == skip) { continue }
        var shared = sharedHist && rel.sharedHist;
        if (sharedHistOnly && !shared) { continue }
        f(rel.doc, shared);
        propagate(rel.doc, doc, shared);
      } }
    }
    propagate(doc, null, true);
  }

  // Attach a document to an editor.
  function attachDoc(cm, doc) {
    if (doc.cm) { throw new Error("This document is already in use.") }
    cm.doc = doc;
    doc.cm = cm;
    estimateLineHeights(cm);
    loadMode(cm);
    setDirectionClass(cm);
    if (!cm.options.lineWrapping) { findMaxLine(cm); }
    cm.options.mode = doc.modeOption;
    regChange(cm);
  }

  function setDirectionClass(cm) {
  (cm.doc.direction == "rtl" ? addClass : rmClass)(cm.display.lineDiv, "CodeMirror-rtl");
  }

  function directionChanged(cm) {
    runInOp(cm, function () {
      setDirectionClass(cm);
      regChange(cm);
    });
  }

  function History(startGen) {
    // Arrays of change events and selections. Doing something adds an
    // event to done and clears undo. Undoing moves events from done
    // to undone, redoing moves them in the other direction.
    this.done = []; this.undone = [];
    this.undoDepth = Infinity;
    // Used to track when changes can be merged into a single undo
    // event
    this.lastModTime = this.lastSelTime = 0;
    this.lastOp = this.lastSelOp = null;
    this.lastOrigin = this.lastSelOrigin = null;
    // Used by the isClean() method
    this.generation = this.maxGeneration = startGen || 1;
  }

  // Create a history change event from an updateDoc-style change
  // object.
  function historyChangeFromChange(doc, change) {
    var histChange = {from: copyPos(change.from), to: changeEnd(change), text: getBetween(doc, change.from, change.to)};
    attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);
    linkedDocs(doc, function (doc) { return attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1); }, true);
    return histChange
  }

  // Pop all selection events off the end of a history array. Stop at
  // a change event.
  function clearSelectionEvents(array) {
    while (array.length) {
      var last = lst(array);
      if (last.ranges) { array.pop(); }
      else { break }
    }
  }

  // Find the top change event in the history. Pop off selection
  // events that are in the way.
  function lastChangeEvent(hist, force) {
    if (force) {
      clearSelectionEvents(hist.done);
      return lst(hist.done)
    } else if (hist.done.length && !lst(hist.done).ranges) {
      return lst(hist.done)
    } else if (hist.done.length > 1 && !hist.done[hist.done.length - 2].ranges) {
      hist.done.pop();
      return lst(hist.done)
    }
  }

  // Register a change in the history. Merges changes that are within
  // a single operation, or are close together with an origin that
  // allows merging (starting with "+") into a single event.
  function addChangeToHistory(doc, change, selAfter, opId) {
    var hist = doc.history;
    hist.undone.length = 0;
    var time = +new Date, cur;
    var last;

    if ((hist.lastOp == opId ||
         hist.lastOrigin == change.origin && change.origin &&
         ((change.origin.charAt(0) == "+" && hist.lastModTime > time - (doc.cm ? doc.cm.options.historyEventDelay : 500)) ||
          change.origin.charAt(0) == "*")) &&
        (cur = lastChangeEvent(hist, hist.lastOp == opId))) {
      // Merge this change into the last event
      last = lst(cur.changes);
      if (cmp(change.from, change.to) == 0 && cmp(change.from, last.to) == 0) {
        // Optimized case for simple insertion -- don't want to add
        // new changesets for every character typed
        last.to = changeEnd(change);
      } else {
        // Add new sub-event
        cur.changes.push(historyChangeFromChange(doc, change));
      }
    } else {
      // Can not be merged, start a new event.
      var before = lst(hist.done);
      if (!before || !before.ranges)
        { pushSelectionToHistory(doc.sel, hist.done); }
      cur = {changes: [historyChangeFromChange(doc, change)],
             generation: hist.generation};
      hist.done.push(cur);
      while (hist.done.length > hist.undoDepth) {
        hist.done.shift();
        if (!hist.done[0].ranges) { hist.done.shift(); }
      }
    }
    hist.done.push(selAfter);
    hist.generation = ++hist.maxGeneration;
    hist.lastModTime = hist.lastSelTime = time;
    hist.lastOp = hist.lastSelOp = opId;
    hist.lastOrigin = hist.lastSelOrigin = change.origin;

    if (!last) { signal(doc, "historyAdded"); }
  }

  function selectionEventCanBeMerged(doc, origin, prev, sel) {
    var ch = origin.charAt(0);
    return ch == "*" ||
      ch == "+" &&
      prev.ranges.length == sel.ranges.length &&
      prev.somethingSelected() == sel.somethingSelected() &&
      new Date - doc.history.lastSelTime <= (doc.cm ? doc.cm.options.historyEventDelay : 500)
  }

  // Called whenever the selection changes, sets the new selection as
  // the pending selection in the history, and pushes the old pending
  // selection into the 'done' array when it was significantly
  // different (in number of selected ranges, emptiness, or time).
  function addSelectionToHistory(doc, sel, opId, options) {
    var hist = doc.history, origin = options && options.origin;

    // A new event is started when the previous origin does not match
    // the current, or the origins don't allow matching. Origins
    // starting with * are always merged, those starting with + are
    // merged when similar and close together in time.
    if (opId == hist.lastSelOp ||
        (origin && hist.lastSelOrigin == origin &&
         (hist.lastModTime == hist.lastSelTime && hist.lastOrigin == origin ||
          selectionEventCanBeMerged(doc, origin, lst(hist.done), sel))))
      { hist.done[hist.done.length - 1] = sel; }
    else
      { pushSelectionToHistory(sel, hist.done); }

    hist.lastSelTime = +new Date;
    hist.lastSelOrigin = origin;
    hist.lastSelOp = opId;
    if (options && options.clearRedo !== false)
      { clearSelectionEvents(hist.undone); }
  }

  function pushSelectionToHistory(sel, dest) {
    var top = lst(dest);
    if (!(top && top.ranges && top.equals(sel)))
      { dest.push(sel); }
  }

  // Used to store marked span information in the history.
  function attachLocalSpans(doc, change, from, to) {
    var existing = change["spans_" + doc.id], n = 0;
    doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), function (line) {
      if (line.markedSpans)
        { (existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans; }
      ++n;
    });
  }

  // When un/re-doing restores text containing marked spans, those
  // that have been explicitly cleared should not be restored.
  function removeClearedSpans(spans) {
    if (!spans) { return null }
    var out;
    for (var i = 0; i < spans.length; ++i) {
      if (spans[i].marker.explicitlyCleared) { if (!out) { out = spans.slice(0, i); } }
      else if (out) { out.push(spans[i]); }
    }
    return !out ? spans : out.length ? out : null
  }

  // Retrieve and filter the old marked spans stored in a change event.
  function getOldSpans(doc, change) {
    var found = change["spans_" + doc.id];
    if (!found) { return null }
    var nw = [];
    for (var i = 0; i < change.text.length; ++i)
      { nw.push(removeClearedSpans(found[i])); }
    return nw
  }

  // Used for un/re-doing changes from the history. Combines the
  // result of computing the existing spans with the set of spans that
  // existed in the history (so that deleting around a span and then
  // undoing brings back the span).
  function mergeOldSpans(doc, change) {
    var old = getOldSpans(doc, change);
    var stretched = stretchSpansOverChange(doc, change);
    if (!old) { return stretched }
    if (!stretched) { return old }

    for (var i = 0; i < old.length; ++i) {
      var oldCur = old[i], stretchCur = stretched[i];
      if (oldCur && stretchCur) {
        spans: for (var j = 0; j < stretchCur.length; ++j) {
          var span = stretchCur[j];
          for (var k = 0; k < oldCur.length; ++k)
            { if (oldCur[k].marker == span.marker) { continue spans } }
          oldCur.push(span);
        }
      } else if (stretchCur) {
        old[i] = stretchCur;
      }
    }
    return old
  }

  // Used both to provide a JSON-safe object in .getHistory, and, when
  // detaching a document, to split the history in two
  function copyHistoryArray(events, newGroup, instantiateSel) {
    var copy = [];
    for (var i = 0; i < events.length; ++i) {
      var event = events[i];
      if (event.ranges) {
        copy.push(instantiateSel ? Selection.prototype.deepCopy.call(event) : event);
        continue
      }
      var changes = event.changes, newChanges = [];
      copy.push({changes: newChanges});
      for (var j = 0; j < changes.length; ++j) {
        var change = changes[j], m = (void 0);
        newChanges.push({from: change.from, to: change.to, text: change.text});
        if (newGroup) { for (var prop in change) { if (m = prop.match(/^spans_(\d+)$/)) {
          if (indexOf(newGroup, Number(m[1])) > -1) {
            lst(newChanges)[prop] = change[prop];
            delete change[prop];
          }
        } } }
      }
    }
    return copy
  }

  // The 'scroll' parameter given to many of these indicated whether
  // the new cursor position should be scrolled into view after
  // modifying the selection.

  // If shift is held or the extend flag is set, extends a range to
  // include a given position (and optionally a second position).
  // Otherwise, simply returns the range between the given positions.
  // Used for cursor motion and such.
  function extendRange(range, head, other, extend) {
    if (extend) {
      var anchor = range.anchor;
      if (other) {
        var posBefore = cmp(head, anchor) < 0;
        if (posBefore != (cmp(other, anchor) < 0)) {
          anchor = head;
          head = other;
        } else if (posBefore != (cmp(head, other) < 0)) {
          head = other;
        }
      }
      return new Range(anchor, head)
    } else {
      return new Range(other || head, head)
    }
  }

  // Extend the primary selection range, discard the rest.
  function extendSelection(doc, head, other, options, extend) {
    if (extend == null) { extend = doc.cm && (doc.cm.display.shift || doc.extend); }
    setSelection(doc, new Selection([extendRange(doc.sel.primary(), head, other, extend)], 0), options);
  }

  // Extend all selections (pos is an array of selections with length
  // equal the number of selections)
  function extendSelections(doc, heads, options) {
    var out = [];
    var extend = doc.cm && (doc.cm.display.shift || doc.extend);
    for (var i = 0; i < doc.sel.ranges.length; i++)
      { out[i] = extendRange(doc.sel.ranges[i], heads[i], null, extend); }
    var newSel = normalizeSelection(doc.cm, out, doc.sel.primIndex);
    setSelection(doc, newSel, options);
  }

  // Updates a single range in the selection.
  function replaceOneSelection(doc, i, range, options) {
    var ranges = doc.sel.ranges.slice(0);
    ranges[i] = range;
    setSelection(doc, normalizeSelection(doc.cm, ranges, doc.sel.primIndex), options);
  }

  // Reset the selection to a single range.
  function setSimpleSelection(doc, anchor, head, options) {
    setSelection(doc, simpleSelection(anchor, head), options);
  }

  // Give beforeSelectionChange handlers a change to influence a
  // selection update.
  function filterSelectionChange(doc, sel, options) {
    var obj = {
      ranges: sel.ranges,
      update: function(ranges) {
        var this$1 = this;

        this.ranges = [];
        for (var i = 0; i < ranges.length; i++)
          { this$1.ranges[i] = new Range(clipPos(doc, ranges[i].anchor),
                                     clipPos(doc, ranges[i].head)); }
      },
      origin: options && options.origin
    };
    signal(doc, "beforeSelectionChange", doc, obj);
    if (doc.cm) { signal(doc.cm, "beforeSelectionChange", doc.cm, obj); }
    if (obj.ranges != sel.ranges) { return normalizeSelection(doc.cm, obj.ranges, obj.ranges.length - 1) }
    else { return sel }
  }

  function setSelectionReplaceHistory(doc, sel, options) {
    var done = doc.history.done, last = lst(done);
    if (last && last.ranges) {
      done[done.length - 1] = sel;
      setSelectionNoUndo(doc, sel, options);
    } else {
      setSelection(doc, sel, options);
    }
  }

  // Set a new selection.
  function setSelection(doc, sel, options) {
    setSelectionNoUndo(doc, sel, options);
    addSelectionToHistory(doc, doc.sel, doc.cm ? doc.cm.curOp.id : NaN, options);
  }

  function setSelectionNoUndo(doc, sel, options) {
    if (hasHandler(doc, "beforeSelectionChange") || doc.cm && hasHandler(doc.cm, "beforeSelectionChange"))
      { sel = filterSelectionChange(doc, sel, options); }

    var bias = options && options.bias ||
      (cmp(sel.primary().head, doc.sel.primary().head) < 0 ? -1 : 1);
    setSelectionInner(doc, skipAtomicInSelection(doc, sel, bias, true));

    if (!(options && options.scroll === false) && doc.cm)
      { ensureCursorVisible(doc.cm); }
  }

  function setSelectionInner(doc, sel) {
    if (sel.equals(doc.sel)) { return }

    doc.sel = sel;

    if (doc.cm) {
      doc.cm.curOp.updateInput = 1;
      doc.cm.curOp.selectionChanged = true;
      signalCursorActivity(doc.cm);
    }
    signalLater(doc, "cursorActivity", doc);
  }

  // Verify that the selection does not partially select any atomic
  // marked ranges.
  function reCheckSelection(doc) {
    setSelectionInner(doc, skipAtomicInSelection(doc, doc.sel, null, false));
  }

  // Return a selection that does not partially select any atomic
  // ranges.
  function skipAtomicInSelection(doc, sel, bias, mayClear) {
    var out;
    for (var i = 0; i < sel.ranges.length; i++) {
      var range = sel.ranges[i];
      var old = sel.ranges.length == doc.sel.ranges.length && doc.sel.ranges[i];
      var newAnchor = skipAtomic(doc, range.anchor, old && old.anchor, bias, mayClear);
      var newHead = skipAtomic(doc, range.head, old && old.head, bias, mayClear);
      if (out || newAnchor != range.anchor || newHead != range.head) {
        if (!out) { out = sel.ranges.slice(0, i); }
        out[i] = new Range(newAnchor, newHead);
      }
    }
    return out ? normalizeSelection(doc.cm, out, sel.primIndex) : sel
  }

  function skipAtomicInner(doc, pos, oldPos, dir, mayClear) {
    var line = getLine(doc, pos.line);
    if (line.markedSpans) { for (var i = 0; i < line.markedSpans.length; ++i) {
      var sp = line.markedSpans[i], m = sp.marker;
      if ((sp.from == null || (m.inclusiveLeft ? sp.from <= pos.ch : sp.from < pos.ch)) &&
          (sp.to == null || (m.inclusiveRight ? sp.to >= pos.ch : sp.to > pos.ch))) {
        if (mayClear) {
          signal(m, "beforeCursorEnter");
          if (m.explicitlyCleared) {
            if (!line.markedSpans) { break }
            else {--i; continue}
          }
        }
        if (!m.atomic) { continue }

        if (oldPos) {
          var near = m.find(dir < 0 ? 1 : -1), diff = (void 0);
          if (dir < 0 ? m.inclusiveRight : m.inclusiveLeft)
            { near = movePos(doc, near, -dir, near && near.line == pos.line ? line : null); }
          if (near && near.line == pos.line && (diff = cmp(near, oldPos)) && (dir < 0 ? diff < 0 : diff > 0))
            { return skipAtomicInner(doc, near, pos, dir, mayClear) }
        }

        var far = m.find(dir < 0 ? -1 : 1);
        if (dir < 0 ? m.inclusiveLeft : m.inclusiveRight)
          { far = movePos(doc, far, dir, far.line == pos.line ? line : null); }
        return far ? skipAtomicInner(doc, far, pos, dir, mayClear) : null
      }
    } }
    return pos
  }

  // Ensure a given position is not inside an atomic range.
  function skipAtomic(doc, pos, oldPos, bias, mayClear) {
    var dir = bias || 1;
    var found = skipAtomicInner(doc, pos, oldPos, dir, mayClear) ||
        (!mayClear && skipAtomicInner(doc, pos, oldPos, dir, true)) ||
        skipAtomicInner(doc, pos, oldPos, -dir, mayClear) ||
        (!mayClear && skipAtomicInner(doc, pos, oldPos, -dir, true));
    if (!found) {
      doc.cantEdit = true;
      return Pos(doc.first, 0)
    }
    return found
  }

  function movePos(doc, pos, dir, line) {
    if (dir < 0 && pos.ch == 0) {
      if (pos.line > doc.first) { return clipPos(doc, Pos(pos.line - 1)) }
      else { return null }
    } else if (dir > 0 && pos.ch == (line || getLine(doc, pos.line)).text.length) {
      if (pos.line < doc.first + doc.size - 1) { return Pos(pos.line + 1, 0) }
      else { return null }
    } else {
      return new Pos(pos.line, pos.ch + dir)
    }
  }

  function selectAll(cm) {
    cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()), sel_dontScroll);
  }

  // UPDATING

  // Allow "beforeChange" event handlers to influence a change
  function filterChange(doc, change, update) {
    var obj = {
      canceled: false,
      from: change.from,
      to: change.to,
      text: change.text,
      origin: change.origin,
      cancel: function () { return obj.canceled = true; }
    };
    if (update) { obj.update = function (from, to, text, origin) {
      if (from) { obj.from = clipPos(doc, from); }
      if (to) { obj.to = clipPos(doc, to); }
      if (text) { obj.text = text; }
      if (origin !== undefined) { obj.origin = origin; }
    }; }
    signal(doc, "beforeChange", doc, obj);
    if (doc.cm) { signal(doc.cm, "beforeChange", doc.cm, obj); }

    if (obj.canceled) {
      if (doc.cm) { doc.cm.curOp.updateInput = 2; }
      return null
    }
    return {from: obj.from, to: obj.to, text: obj.text, origin: obj.origin}
  }

  // Apply a change to a document, and add it to the document's
  // history, and propagating it to all linked documents.
  function makeChange(doc, change, ignoreReadOnly) {
    if (doc.cm) {
      if (!doc.cm.curOp) { return operation(doc.cm, makeChange)(doc, change, ignoreReadOnly) }
      if (doc.cm.state.suppressEdits) { return }
    }

    if (hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")) {
      change = filterChange(doc, change, true);
      if (!change) { return }
    }

    // Possibly split or suppress the update based on the presence
    // of read-only spans in its range.
    var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc, change.from, change.to);
    if (split) {
      for (var i = split.length - 1; i >= 0; --i)
        { makeChangeInner(doc, {from: split[i].from, to: split[i].to, text: i ? [""] : change.text, origin: change.origin}); }
    } else {
      makeChangeInner(doc, change);
    }
  }

  function makeChangeInner(doc, change) {
    if (change.text.length == 1 && change.text[0] == "" && cmp(change.from, change.to) == 0) { return }
    var selAfter = computeSelAfterChange(doc, change);
    addChangeToHistory(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : NaN);

    makeChangeSingleDoc(doc, change, selAfter, stretchSpansOverChange(doc, change));
    var rebased = [];

    linkedDocs(doc, function (doc, sharedHist) {
      if (!sharedHist && indexOf(rebased, doc.history) == -1) {
        rebaseHist(doc.history, change);
        rebased.push(doc.history);
      }
      makeChangeSingleDoc(doc, change, null, stretchSpansOverChange(doc, change));
    });
  }

  // Revert a change stored in a document's history.
  function makeChangeFromHistory(doc, type, allowSelectionOnly) {
    var suppress = doc.cm && doc.cm.state.suppressEdits;
    if (suppress && !allowSelectionOnly) { return }

    var hist = doc.history, event, selAfter = doc.sel;
    var source = type == "undo" ? hist.done : hist.undone, dest = type == "undo" ? hist.undone : hist.done;

    // Verify that there is a useable event (so that ctrl-z won't
    // needlessly clear selection events)
    var i = 0;
    for (; i < source.length; i++) {
      event = source[i];
      if (allowSelectionOnly ? event.ranges && !event.equals(doc.sel) : !event.ranges)
        { break }
    }
    if (i == source.length) { return }
    hist.lastOrigin = hist.lastSelOrigin = null;

    for (;;) {
      event = source.pop();
      if (event.ranges) {
        pushSelectionToHistory(event, dest);
        if (allowSelectionOnly && !event.equals(doc.sel)) {
          setSelection(doc, event, {clearRedo: false});
          return
        }
        selAfter = event;
      } else if (suppress) {
        source.push(event);
        return
      } else { break }
    }

    // Build up a reverse change object to add to the opposite history
    // stack (redo when undoing, and vice versa).
    var antiChanges = [];
    pushSelectionToHistory(selAfter, dest);
    dest.push({changes: antiChanges, generation: hist.generation});
    hist.generation = event.generation || ++hist.maxGeneration;

    var filter = hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange");

    var loop = function ( i ) {
      var change = event.changes[i];
      change.origin = type;
      if (filter && !filterChange(doc, change, false)) {
        source.length = 0;
        return {}
      }

      antiChanges.push(historyChangeFromChange(doc, change));

      var after = i ? computeSelAfterChange(doc, change) : lst(source);
      makeChangeSingleDoc(doc, change, after, mergeOldSpans(doc, change));
      if (!i && doc.cm) { doc.cm.scrollIntoView({from: change.from, to: changeEnd(change)}); }
      var rebased = [];

      // Propagate to the linked documents
      linkedDocs(doc, function (doc, sharedHist) {
        if (!sharedHist && indexOf(rebased, doc.history) == -1) {
          rebaseHist(doc.history, change);
          rebased.push(doc.history);
        }
        makeChangeSingleDoc(doc, change, null, mergeOldSpans(doc, change));
      });
    };

    for (var i$1 = event.changes.length - 1; i$1 >= 0; --i$1) {
      var returned = loop( i$1 );

      if ( returned ) return returned.v;
    }
  }

  // Sub-views need their line numbers shifted when text is added
  // above or below them in the parent document.
  function shiftDoc(doc, distance) {
    if (distance == 0) { return }
    doc.first += distance;
    doc.sel = new Selection(map(doc.sel.ranges, function (range) { return new Range(
      Pos(range.anchor.line + distance, range.anchor.ch),
      Pos(range.head.line + distance, range.head.ch)
    ); }), doc.sel.primIndex);
    if (doc.cm) {
      regChange(doc.cm, doc.first, doc.first - distance, distance);
      for (var d = doc.cm.display, l = d.viewFrom; l < d.viewTo; l++)
        { regLineChange(doc.cm, l, "gutter"); }
    }
  }

  // More lower-level change function, handling only a single document
  // (not linked ones).
  function makeChangeSingleDoc(doc, change, selAfter, spans) {
    if (doc.cm && !doc.cm.curOp)
      { return operation(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans) }

    if (change.to.line < doc.first) {
      shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line));
      return
    }
    if (change.from.line > doc.lastLine()) { return }

    // Clip the change to the size of this doc
    if (change.from.line < doc.first) {
      var shift = change.text.length - 1 - (doc.first - change.from.line);
      shiftDoc(doc, shift);
      change = {from: Pos(doc.first, 0), to: Pos(change.to.line + shift, change.to.ch),
                text: [lst(change.text)], origin: change.origin};
    }
    var last = doc.lastLine();
    if (change.to.line > last) {
      change = {from: change.from, to: Pos(last, getLine(doc, last).text.length),
                text: [change.text[0]], origin: change.origin};
    }

    change.removed = getBetween(doc, change.from, change.to);

    if (!selAfter) { selAfter = computeSelAfterChange(doc, change); }
    if (doc.cm) { makeChangeSingleDocInEditor(doc.cm, change, spans); }
    else { updateDoc(doc, change, spans); }
    setSelectionNoUndo(doc, selAfter, sel_dontScroll);
  }

  // Handle the interaction of a change to a document with the editor
  // that this document is part of.
  function makeChangeSingleDocInEditor(cm, change, spans) {
    var doc = cm.doc, display = cm.display, from = change.from, to = change.to;

    var recomputeMaxLength = false, checkWidthStart = from.line;
    if (!cm.options.lineWrapping) {
      checkWidthStart = lineNo(visualLine(getLine(doc, from.line)));
      doc.iter(checkWidthStart, to.line + 1, function (line) {
        if (line == display.maxLine) {
          recomputeMaxLength = true;
          return true
        }
      });
    }

    if (doc.sel.contains(change.from, change.to) > -1)
      { signalCursorActivity(cm); }

    updateDoc(doc, change, spans, estimateHeight(cm));

    if (!cm.options.lineWrapping) {
      doc.iter(checkWidthStart, from.line + change.text.length, function (line) {
        var len = lineLength(line);
        if (len > display.maxLineLength) {
          display.maxLine = line;
          display.maxLineLength = len;
          display.maxLineChanged = true;
          recomputeMaxLength = false;
        }
      });
      if (recomputeMaxLength) { cm.curOp.updateMaxLine = true; }
    }

    retreatFrontier(doc, from.line);
    startWorker(cm, 400);

    var lendiff = change.text.length - (to.line - from.line) - 1;
    // Remember that these lines changed, for updating the display
    if (change.full)
      { regChange(cm); }
    else if (from.line == to.line && change.text.length == 1 && !isWholeLineUpdate(cm.doc, change))
      { regLineChange(cm, from.line, "text"); }
    else
      { regChange(cm, from.line, to.line + 1, lendiff); }

    var changesHandler = hasHandler(cm, "changes"), changeHandler = hasHandler(cm, "change");
    if (changeHandler || changesHandler) {
      var obj = {
        from: from, to: to,
        text: change.text,
        removed: change.removed,
        origin: change.origin
      };
      if (changeHandler) { signalLater(cm, "change", cm, obj); }
      if (changesHandler) { (cm.curOp.changeObjs || (cm.curOp.changeObjs = [])).push(obj); }
    }
    cm.display.selForContextMenu = null;
  }

  function replaceRange(doc, code, from, to, origin) {
    var assign;

    if (!to) { to = from; }
    if (cmp(to, from) < 0) { (assign = [to, from], from = assign[0], to = assign[1]); }
    if (typeof code == "string") { code = doc.splitLines(code); }
    makeChange(doc, {from: from, to: to, text: code, origin: origin});
  }

  // Rebasing/resetting history to deal with externally-sourced changes

  function rebaseHistSelSingle(pos, from, to, diff) {
    if (to < pos.line) {
      pos.line += diff;
    } else if (from < pos.line) {
      pos.line = from;
      pos.ch = 0;
    }
  }

  // Tries to rebase an array of history events given a change in the
  // document. If the change touches the same lines as the event, the
  // event, and everything 'behind' it, is discarded. If the change is
  // before the event, the event's positions are updated. Uses a
  // copy-on-write scheme for the positions, to avoid having to
  // reallocate them all on every rebase, but also avoid problems with
  // shared position objects being unsafely updated.
  function rebaseHistArray(array, from, to, diff) {
    for (var i = 0; i < array.length; ++i) {
      var sub = array[i], ok = true;
      if (sub.ranges) {
        if (!sub.copied) { sub = array[i] = sub.deepCopy(); sub.copied = true; }
        for (var j = 0; j < sub.ranges.length; j++) {
          rebaseHistSelSingle(sub.ranges[j].anchor, from, to, diff);
          rebaseHistSelSingle(sub.ranges[j].head, from, to, diff);
        }
        continue
      }
      for (var j$1 = 0; j$1 < sub.changes.length; ++j$1) {
        var cur = sub.changes[j$1];
        if (to < cur.from.line) {
          cur.from = Pos(cur.from.line + diff, cur.from.ch);
          cur.to = Pos(cur.to.line + diff, cur.to.ch);
        } else if (from <= cur.to.line) {
          ok = false;
          break
        }
      }
      if (!ok) {
        array.splice(0, i + 1);
        i = 0;
      }
    }
  }

  function rebaseHist(hist, change) {
    var from = change.from.line, to = change.to.line, diff = change.text.length - (to - from) - 1;
    rebaseHistArray(hist.done, from, to, diff);
    rebaseHistArray(hist.undone, from, to, diff);
  }

  // Utility for applying a change to a line by handle or number,
  // returning the number and optionally registering the line as
  // changed.
  function changeLine(doc, handle, changeType, op) {
    var no = handle, line = handle;
    if (typeof handle == "number") { line = getLine(doc, clipLine(doc, handle)); }
    else { no = lineNo(handle); }
    if (no == null) { return null }
    if (op(line, no) && doc.cm) { regLineChange(doc.cm, no, changeType); }
    return line
  }

  // The document is represented as a BTree consisting of leaves, with
  // chunk of lines in them, and branches, with up to ten leaves or
  // other branch nodes below them. The top node is always a branch
  // node, and is the document object itself (meaning it has
  // additional methods and properties).
  //
  // All nodes have parent links. The tree is used both to go from
  // line numbers to line objects, and to go from objects to numbers.
  // It also indexes by height, and is used to convert between height
  // and line object, and to find the total height of the document.
  //
  // See also http://marijnhaverbeke.nl/blog/codemirror-line-tree.html

  function LeafChunk(lines) {
    var this$1 = this;

    this.lines = lines;
    this.parent = null;
    var height = 0;
    for (var i = 0; i < lines.length; ++i) {
      lines[i].parent = this$1;
      height += lines[i].height;
    }
    this.height = height;
  }

  LeafChunk.prototype = {
    chunkSize: function() { return this.lines.length },

    // Remove the n lines at offset 'at'.
    removeInner: function(at, n) {
      var this$1 = this;

      for (var i = at, e = at + n; i < e; ++i) {
        var line = this$1.lines[i];
        this$1.height -= line.height;
        cleanUpLine(line);
        signalLater(line, "delete");
      }
      this.lines.splice(at, n);
    },

    // Helper used to collapse a small branch into a single leaf.
    collapse: function(lines) {
      lines.push.apply(lines, this.lines);
    },

    // Insert the given array of lines at offset 'at', count them as
    // having the given height.
    insertInner: function(at, lines, height) {
      var this$1 = this;

      this.height += height;
      this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at));
      for (var i = 0; i < lines.length; ++i) { lines[i].parent = this$1; }
    },

    // Used to iterate over a part of the tree.
    iterN: function(at, n, op) {
      var this$1 = this;

      for (var e = at + n; at < e; ++at)
        { if (op(this$1.lines[at])) { return true } }
    }
  };

  function BranchChunk(children) {
    var this$1 = this;

    this.children = children;
    var size = 0, height = 0;
    for (var i = 0; i < children.length; ++i) {
      var ch = children[i];
      size += ch.chunkSize(); height += ch.height;
      ch.parent = this$1;
    }
    this.size = size;
    this.height = height;
    this.parent = null;
  }

  BranchChunk.prototype = {
    chunkSize: function() { return this.size },

    removeInner: function(at, n) {
      var this$1 = this;

      this.size -= n;
      for (var i = 0; i < this.children.length; ++i) {
        var child = this$1.children[i], sz = child.chunkSize();
        if (at < sz) {
          var rm = Math.min(n, sz - at), oldHeight = child.height;
          child.removeInner(at, rm);
          this$1.height -= oldHeight - child.height;
          if (sz == rm) { this$1.children.splice(i--, 1); child.parent = null; }
          if ((n -= rm) == 0) { break }
          at = 0;
        } else { at -= sz; }
      }
      // If the result is smaller than 25 lines, ensure that it is a
      // single leaf node.
      if (this.size - n < 25 &&
          (this.children.length > 1 || !(this.children[0] instanceof LeafChunk))) {
        var lines = [];
        this.collapse(lines);
        this.children = [new LeafChunk(lines)];
        this.children[0].parent = this;
      }
    },

    collapse: function(lines) {
      var this$1 = this;

      for (var i = 0; i < this.children.length; ++i) { this$1.children[i].collapse(lines); }
    },

    insertInner: function(at, lines, height) {
      var this$1 = this;

      this.size += lines.length;
      this.height += height;
      for (var i = 0; i < this.children.length; ++i) {
        var child = this$1.children[i], sz = child.chunkSize();
        if (at <= sz) {
          child.insertInner(at, lines, height);
          if (child.lines && child.lines.length > 50) {
            // To avoid memory thrashing when child.lines is huge (e.g. first view of a large file), it's never spliced.
            // Instead, small slices are taken. They're taken in order because sequential memory accesses are fastest.
            var remaining = child.lines.length % 25 + 25;
            for (var pos = remaining; pos < child.lines.length;) {
              var leaf = new LeafChunk(child.lines.slice(pos, pos += 25));
              child.height -= leaf.height;
              this$1.children.splice(++i, 0, leaf);
              leaf.parent = this$1;
            }
            child.lines = child.lines.slice(0, remaining);
            this$1.maybeSpill();
          }
          break
        }
        at -= sz;
      }
    },

    // When a node has grown, check whether it should be split.
    maybeSpill: function() {
      if (this.children.length <= 10) { return }
      var me = this;
      do {
        var spilled = me.children.splice(me.children.length - 5, 5);
        var sibling = new BranchChunk(spilled);
        if (!me.parent) { // Become the parent node
          var copy = new BranchChunk(me.children);
          copy.parent = me;
          me.children = [copy, sibling];
          me = copy;
       } else {
          me.size -= sibling.size;
          me.height -= sibling.height;
          var myIndex = indexOf(me.parent.children, me);
          me.parent.children.splice(myIndex + 1, 0, sibling);
        }
        sibling.parent = me.parent;
      } while (me.children.length > 10)
      me.parent.maybeSpill();
    },

    iterN: function(at, n, op) {
      var this$1 = this;

      for (var i = 0; i < this.children.length; ++i) {
        var child = this$1.children[i], sz = child.chunkSize();
        if (at < sz) {
          var used = Math.min(n, sz - at);
          if (child.iterN(at, used, op)) { return true }
          if ((n -= used) == 0) { break }
          at = 0;
        } else { at -= sz; }
      }
    }
  };

  // Line widgets are block elements displayed above or below a line.

  var LineWidget = function(doc, node, options) {
    var this$1 = this;

    if (options) { for (var opt in options) { if (options.hasOwnProperty(opt))
      { this$1[opt] = options[opt]; } } }
    this.doc = doc;
    this.node = node;
  };

  LineWidget.prototype.clear = function () {
      var this$1 = this;

    var cm = this.doc.cm, ws = this.line.widgets, line = this.line, no = lineNo(line);
    if (no == null || !ws) { return }
    for (var i = 0; i < ws.length; ++i) { if (ws[i] == this$1) { ws.splice(i--, 1); } }
    if (!ws.length) { line.widgets = null; }
    var height = widgetHeight(this);
    updateLineHeight(line, Math.max(0, line.height - height));
    if (cm) {
      runInOp(cm, function () {
        adjustScrollWhenAboveVisible(cm, line, -height);
        regLineChange(cm, no, "widget");
      });
      signalLater(cm, "lineWidgetCleared", cm, this, no);
    }
  };

  LineWidget.prototype.changed = function () {
      var this$1 = this;

    var oldH = this.height, cm = this.doc.cm, line = this.line;
    this.height = null;
    var diff = widgetHeight(this) - oldH;
    if (!diff) { return }
    if (!lineIsHidden(this.doc, line)) { updateLineHeight(line, line.height + diff); }
    if (cm) {
      runInOp(cm, function () {
        cm.curOp.forceUpdate = true;
        adjustScrollWhenAboveVisible(cm, line, diff);
        signalLater(cm, "lineWidgetChanged", cm, this$1, lineNo(line));
      });
    }
  };
  eventMixin(LineWidget);

  function adjustScrollWhenAboveVisible(cm, line, diff) {
    if (heightAtLine(line) < ((cm.curOp && cm.curOp.scrollTop) || cm.doc.scrollTop))
      { addToScrollTop(cm, diff); }
  }

  function addLineWidget(doc, handle, node, options) {
    var widget = new LineWidget(doc, node, options);
    var cm = doc.cm;
    if (cm && widget.noHScroll) { cm.display.alignWidgets = true; }
    changeLine(doc, handle, "widget", function (line) {
      var widgets = line.widgets || (line.widgets = []);
      if (widget.insertAt == null) { widgets.push(widget); }
      else { widgets.splice(Math.min(widgets.length - 1, Math.max(0, widget.insertAt)), 0, widget); }
      widget.line = line;
      if (cm && !lineIsHidden(doc, line)) {
        var aboveVisible = heightAtLine(line) < doc.scrollTop;
        updateLineHeight(line, line.height + widgetHeight(widget));
        if (aboveVisible) { addToScrollTop(cm, widget.height); }
        cm.curOp.forceUpdate = true;
      }
      return true
    });
    if (cm) { signalLater(cm, "lineWidgetAdded", cm, widget, typeof handle == "number" ? handle : lineNo(handle)); }
    return widget
  }

  // TEXTMARKERS

  // Created with markText and setBookmark methods. A TextMarker is a
  // handle that can be used to clear or find a marked position in the
  // document. Line objects hold arrays (markedSpans) containing
  // {from, to, marker} object pointing to such marker objects, and
  // indicating that such a marker is present on that line. Multiple
  // lines may point to the same marker when it spans across lines.
  // The spans will have null for their from/to properties when the
  // marker continues beyond the start/end of the line. Markers have
  // links back to the lines they currently touch.

  // Collapsed markers have unique ids, in order to be able to order
  // them, which is needed for uniquely determining an outer marker
  // when they overlap (they may nest, but not partially overlap).
  var nextMarkerId = 0;

  var TextMarker = function(doc, type) {
    this.lines = [];
    this.type = type;
    this.doc = doc;
    this.id = ++nextMarkerId;
  };

  // Clear the marker.
  TextMarker.prototype.clear = function () {
      var this$1 = this;

    if (this.explicitlyCleared) { return }
    var cm = this.doc.cm, withOp = cm && !cm.curOp;
    if (withOp) { startOperation(cm); }
    if (hasHandler(this, "clear")) {
      var found = this.find();
      if (found) { signalLater(this, "clear", found.from, found.to); }
    }
    var min = null, max = null;
    for (var i = 0; i < this.lines.length; ++i) {
      var line = this$1.lines[i];
      var span = getMarkedSpanFor(line.markedSpans, this$1);
      if (cm && !this$1.collapsed) { regLineChange(cm, lineNo(line), "text"); }
      else if (cm) {
        if (span.to != null) { max = lineNo(line); }
        if (span.from != null) { min = lineNo(line); }
      }
      line.markedSpans = removeMarkedSpan(line.markedSpans, span);
      if (span.from == null && this$1.collapsed && !lineIsHidden(this$1.doc, line) && cm)
        { updateLineHeight(line, textHeight(cm.display)); }
    }
    if (cm && this.collapsed && !cm.options.lineWrapping) { for (var i$1 = 0; i$1 < this.lines.length; ++i$1) {
      var visual = visualLine(this$1.lines[i$1]), len = lineLength(visual);
      if (len > cm.display.maxLineLength) {
        cm.display.maxLine = visual;
        cm.display.maxLineLength = len;
        cm.display.maxLineChanged = true;
      }
    } }

    if (min != null && cm && this.collapsed) { regChange(cm, min, max + 1); }
    this.lines.length = 0;
    this.explicitlyCleared = true;
    if (this.atomic && this.doc.cantEdit) {
      this.doc.cantEdit = false;
      if (cm) { reCheckSelection(cm.doc); }
    }
    if (cm) { signalLater(cm, "markerCleared", cm, this, min, max); }
    if (withOp) { endOperation(cm); }
    if (this.parent) { this.parent.clear(); }
  };

  // Find the position of the marker in the document. Returns a {from,
  // to} object by default. Side can be passed to get a specific side
  // -- 0 (both), -1 (left), or 1 (right). When lineObj is true, the
  // Pos objects returned contain a line object, rather than a line
  // number (used to prevent looking up the same line twice).
  TextMarker.prototype.find = function (side, lineObj) {
      var this$1 = this;

    if (side == null && this.type == "bookmark") { side = 1; }
    var from, to;
    for (var i = 0; i < this.lines.length; ++i) {
      var line = this$1.lines[i];
      var span = getMarkedSpanFor(line.markedSpans, this$1);
      if (span.from != null) {
        from = Pos(lineObj ? line : lineNo(line), span.from);
        if (side == -1) { return from }
      }
      if (span.to != null) {
        to = Pos(lineObj ? line : lineNo(line), span.to);
        if (side == 1) { return to }
      }
    }
    return from && {from: from, to: to}
  };

  // Signals that the marker's widget changed, and surrounding layout
  // should be recomputed.
  TextMarker.prototype.changed = function () {
      var this$1 = this;

    var pos = this.find(-1, true), widget = this, cm = this.doc.cm;
    if (!pos || !cm) { return }
    runInOp(cm, function () {
      var line = pos.line, lineN = lineNo(pos.line);
      var view = findViewForLine(cm, lineN);
      if (view) {
        clearLineMeasurementCacheFor(view);
        cm.curOp.selectionChanged = cm.curOp.forceUpdate = true;
      }
      cm.curOp.updateMaxLine = true;
      if (!lineIsHidden(widget.doc, line) && widget.height != null) {
        var oldHeight = widget.height;
        widget.height = null;
        var dHeight = widgetHeight(widget) - oldHeight;
        if (dHeight)
          { updateLineHeight(line, line.height + dHeight); }
      }
      signalLater(cm, "markerChanged", cm, this$1);
    });
  };

  TextMarker.prototype.attachLine = function (line) {
    if (!this.lines.length && this.doc.cm) {
      var op = this.doc.cm.curOp;
      if (!op.maybeHiddenMarkers || indexOf(op.maybeHiddenMarkers, this) == -1)
        { (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this); }
    }
    this.lines.push(line);
  };

  TextMarker.prototype.detachLine = function (line) {
    this.lines.splice(indexOf(this.lines, line), 1);
    if (!this.lines.length && this.doc.cm) {
      var op = this.doc.cm.curOp
      ;(op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this);
    }
  };
  eventMixin(TextMarker);

  // Create a marker, wire it up to the right lines, and
  function markText(doc, from, to, options, type) {
    // Shared markers (across linked documents) are handled separately
    // (markTextShared will call out to this again, once per
    // document).
    if (options && options.shared) { return markTextShared(doc, from, to, options, type) }
    // Ensure we are in an operation.
    if (doc.cm && !doc.cm.curOp) { return operation(doc.cm, markText)(doc, from, to, options, type) }

    var marker = new TextMarker(doc, type), diff = cmp(from, to);
    if (options) { copyObj(options, marker, false); }
    // Don't connect empty markers unless clearWhenEmpty is false
    if (diff > 0 || diff == 0 && marker.clearWhenEmpty !== false)
      { return marker }
    if (marker.replacedWith) {
      // Showing up as a widget implies collapsed (widget replaces text)
      marker.collapsed = true;
      marker.widgetNode = eltP("span", [marker.replacedWith], "CodeMirror-widget");
      if (!options.handleMouseEvents) { marker.widgetNode.setAttribute("cm-ignore-events", "true"); }
      if (options.insertLeft) { marker.widgetNode.insertLeft = true; }
    }
    if (marker.collapsed) {
      if (conflictingCollapsedRange(doc, from.line, from, to, marker) ||
          from.line != to.line && conflictingCollapsedRange(doc, to.line, from, to, marker))
        { throw new Error("Inserting collapsed marker partially overlapping an existing one") }
      seeCollapsedSpans();
    }

    if (marker.addToHistory)
      { addChangeToHistory(doc, {from: from, to: to, origin: "markText"}, doc.sel, NaN); }

    var curLine = from.line, cm = doc.cm, updateMaxLine;
    doc.iter(curLine, to.line + 1, function (line) {
      if (cm && marker.collapsed && !cm.options.lineWrapping && visualLine(line) == cm.display.maxLine)
        { updateMaxLine = true; }
      if (marker.collapsed && curLine != from.line) { updateLineHeight(line, 0); }
      addMarkedSpan(line, new MarkedSpan(marker,
                                         curLine == from.line ? from.ch : null,
                                         curLine == to.line ? to.ch : null));
      ++curLine;
    });
    // lineIsHidden depends on the presence of the spans, so needs a second pass
    if (marker.collapsed) { doc.iter(from.line, to.line + 1, function (line) {
      if (lineIsHidden(doc, line)) { updateLineHeight(line, 0); }
    }); }

    if (marker.clearOnEnter) { on(marker, "beforeCursorEnter", function () { return marker.clear(); }); }

    if (marker.readOnly) {
      seeReadOnlySpans();
      if (doc.history.done.length || doc.history.undone.length)
        { doc.clearHistory(); }
    }
    if (marker.collapsed) {
      marker.id = ++nextMarkerId;
      marker.atomic = true;
    }
    if (cm) {
      // Sync editor state
      if (updateMaxLine) { cm.curOp.updateMaxLine = true; }
      if (marker.collapsed)
        { regChange(cm, from.line, to.line + 1); }
      else if (marker.className || marker.startStyle || marker.endStyle || marker.css ||
               marker.attributes || marker.title)
        { for (var i = from.line; i <= to.line; i++) { regLineChange(cm, i, "text"); } }
      if (marker.atomic) { reCheckSelection(cm.doc); }
      signalLater(cm, "markerAdded", cm, marker);
    }
    return marker
  }

  // SHARED TEXTMARKERS

  // A shared marker spans multiple linked documents. It is
  // implemented as a meta-marker-object controlling multiple normal
  // markers.
  var SharedTextMarker = function(markers, primary) {
    var this$1 = this;

    this.markers = markers;
    this.primary = primary;
    for (var i = 0; i < markers.length; ++i)
      { markers[i].parent = this$1; }
  };

  SharedTextMarker.prototype.clear = function () {
      var this$1 = this;

    if (this.explicitlyCleared) { return }
    this.explicitlyCleared = true;
    for (var i = 0; i < this.markers.length; ++i)
      { this$1.markers[i].clear(); }
    signalLater(this, "clear");
  };

  SharedTextMarker.prototype.find = function (side, lineObj) {
    return this.primary.find(side, lineObj)
  };
  eventMixin(SharedTextMarker);

  function markTextShared(doc, from, to, options, type) {
    options = copyObj(options);
    options.shared = false;
    var markers = [markText(doc, from, to, options, type)], primary = markers[0];
    var widget = options.widgetNode;
    linkedDocs(doc, function (doc) {
      if (widget) { options.widgetNode = widget.cloneNode(true); }
      markers.push(markText(doc, clipPos(doc, from), clipPos(doc, to), options, type));
      for (var i = 0; i < doc.linked.length; ++i)
        { if (doc.linked[i].isParent) { return } }
      primary = lst(markers);
    });
    return new SharedTextMarker(markers, primary)
  }

  function findSharedMarkers(doc) {
    return doc.findMarks(Pos(doc.first, 0), doc.clipPos(Pos(doc.lastLine())), function (m) { return m.parent; })
  }

  function copySharedMarkers(doc, markers) {
    for (var i = 0; i < markers.length; i++) {
      var marker = markers[i], pos = marker.find();
      var mFrom = doc.clipPos(pos.from), mTo = doc.clipPos(pos.to);
      if (cmp(mFrom, mTo)) {
        var subMark = markText(doc, mFrom, mTo, marker.primary, marker.primary.type);
        marker.markers.push(subMark);
        subMark.parent = marker;
      }
    }
  }

  function detachSharedMarkers(markers) {
    var loop = function ( i ) {
      var marker = markers[i], linked = [marker.primary.doc];
      linkedDocs(marker.primary.doc, function (d) { return linked.push(d); });
      for (var j = 0; j < marker.markers.length; j++) {
        var subMarker = marker.markers[j];
        if (indexOf(linked, subMarker.doc) == -1) {
          subMarker.parent = null;
          marker.markers.splice(j--, 1);
        }
      }
    };

    for (var i = 0; i < markers.length; i++) loop( i );
  }

  var nextDocId = 0;
  var Doc = function(text, mode, firstLine, lineSep, direction) {
    if (!(this instanceof Doc)) { return new Doc(text, mode, firstLine, lineSep, direction) }
    if (firstLine == null) { firstLine = 0; }

    BranchChunk.call(this, [new LeafChunk([new Line("", null)])]);
    this.first = firstLine;
    this.scrollTop = this.scrollLeft = 0;
    this.cantEdit = false;
    this.cleanGeneration = 1;
    this.modeFrontier = this.highlightFrontier = firstLine;
    var start = Pos(firstLine, 0);
    this.sel = simpleSelection(start);
    this.history = new History(null);
    this.id = ++nextDocId;
    this.modeOption = mode;
    this.lineSep = lineSep;
    this.direction = (direction == "rtl") ? "rtl" : "ltr";
    this.extend = false;

    if (typeof text == "string") { text = this.splitLines(text); }
    updateDoc(this, {from: start, to: start, text: text});
    setSelection(this, simpleSelection(start), sel_dontScroll);
  };

  Doc.prototype = createObj(BranchChunk.prototype, {
    constructor: Doc,
    // Iterate over the document. Supports two forms -- with only one
    // argument, it calls that for each line in the document. With
    // three, it iterates over the range given by the first two (with
    // the second being non-inclusive).
    iter: function(from, to, op) {
      if (op) { this.iterN(from - this.first, to - from, op); }
      else { this.iterN(this.first, this.first + this.size, from); }
    },

    // Non-public interface for adding and removing lines.
    insert: function(at, lines) {
      var height = 0;
      for (var i = 0; i < lines.length; ++i) { height += lines[i].height; }
      this.insertInner(at - this.first, lines, height);
    },
    remove: function(at, n) { this.removeInner(at - this.first, n); },

    // From here, the methods are part of the public interface. Most
    // are also available from CodeMirror (editor) instances.

    getValue: function(lineSep) {
      var lines = getLines(this, this.first, this.first + this.size);
      if (lineSep === false) { return lines }
      return lines.join(lineSep || this.lineSeparator())
    },
    setValue: docMethodOp(function(code) {
      var top = Pos(this.first, 0), last = this.first + this.size - 1;
      makeChange(this, {from: top, to: Pos(last, getLine(this, last).text.length),
                        text: this.splitLines(code), origin: "setValue", full: true}, true);
      if (this.cm) { scrollToCoords(this.cm, 0, 0); }
      setSelection(this, simpleSelection(top), sel_dontScroll);
    }),
    replaceRange: function(code, from, to, origin) {
      from = clipPos(this, from);
      to = to ? clipPos(this, to) : from;
      replaceRange(this, code, from, to, origin);
    },
    getRange: function(from, to, lineSep) {
      var lines = getBetween(this, clipPos(this, from), clipPos(this, to));
      if (lineSep === false) { return lines }
      return lines.join(lineSep || this.lineSeparator())
    },

    getLine: function(line) {var l = this.getLineHandle(line); return l && l.text},

    getLineHandle: function(line) {if (isLine(this, line)) { return getLine(this, line) }},
    getLineNumber: function(line) {return lineNo(line)},

    getLineHandleVisualStart: function(line) {
      if (typeof line == "number") { line = getLine(this, line); }
      return visualLine(line)
    },

    lineCount: function() {return this.size},
    firstLine: function() {return this.first},
    lastLine: function() {return this.first + this.size - 1},

    clipPos: function(pos) {return clipPos(this, pos)},

    getCursor: function(start) {
      var range$$1 = this.sel.primary(), pos;
      if (start == null || start == "head") { pos = range$$1.head; }
      else if (start == "anchor") { pos = range$$1.anchor; }
      else if (start == "end" || start == "to" || start === false) { pos = range$$1.to(); }
      else { pos = range$$1.from(); }
      return pos
    },
    listSelections: function() { return this.sel.ranges },
    somethingSelected: function() {return this.sel.somethingSelected()},

    setCursor: docMethodOp(function(line, ch, options) {
      setSimpleSelection(this, clipPos(this, typeof line == "number" ? Pos(line, ch || 0) : line), null, options);
    }),
    setSelection: docMethodOp(function(anchor, head, options) {
      setSimpleSelection(this, clipPos(this, anchor), clipPos(this, head || anchor), options);
    }),
    extendSelection: docMethodOp(function(head, other, options) {
      extendSelection(this, clipPos(this, head), other && clipPos(this, other), options);
    }),
    extendSelections: docMethodOp(function(heads, options) {
      extendSelections(this, clipPosArray(this, heads), options);
    }),
    extendSelectionsBy: docMethodOp(function(f, options) {
      var heads = map(this.sel.ranges, f);
      extendSelections(this, clipPosArray(this, heads), options);
    }),
    setSelections: docMethodOp(function(ranges, primary, options) {
      var this$1 = this;

      if (!ranges.length) { return }
      var out = [];
      for (var i = 0; i < ranges.length; i++)
        { out[i] = new Range(clipPos(this$1, ranges[i].anchor),
                           clipPos(this$1, ranges[i].head)); }
      if (primary == null) { primary = Math.min(ranges.length - 1, this.sel.primIndex); }
      setSelection(this, normalizeSelection(this.cm, out, primary), options);
    }),
    addSelection: docMethodOp(function(anchor, head, options) {
      var ranges = this.sel.ranges.slice(0);
      ranges.push(new Range(clipPos(this, anchor), clipPos(this, head || anchor)));
      setSelection(this, normalizeSelection(this.cm, ranges, ranges.length - 1), options);
    }),

    getSelection: function(lineSep) {
      var this$1 = this;

      var ranges = this.sel.ranges, lines;
      for (var i = 0; i < ranges.length; i++) {
        var sel = getBetween(this$1, ranges[i].from(), ranges[i].to());
        lines = lines ? lines.concat(sel) : sel;
      }
      if (lineSep === false) { return lines }
      else { return lines.join(lineSep || this.lineSeparator()) }
    },
    getSelections: function(lineSep) {
      var this$1 = this;

      var parts = [], ranges = this.sel.ranges;
      for (var i = 0; i < ranges.length; i++) {
        var sel = getBetween(this$1, ranges[i].from(), ranges[i].to());
        if (lineSep !== false) { sel = sel.join(lineSep || this$1.lineSeparator()); }
        parts[i] = sel;
      }
      return parts
    },
    replaceSelection: function(code, collapse, origin) {
      var dup = [];
      for (var i = 0; i < this.sel.ranges.length; i++)
        { dup[i] = code; }
      this.replaceSelections(dup, collapse, origin || "+input");
    },
    replaceSelections: docMethodOp(function(code, collapse, origin) {
      var this$1 = this;

      var changes = [], sel = this.sel;
      for (var i = 0; i < sel.ranges.length; i++) {
        var range$$1 = sel.ranges[i];
        changes[i] = {from: range$$1.from(), to: range$$1.to(), text: this$1.splitLines(code[i]), origin: origin};
      }
      var newSel = collapse && collapse != "end" && computeReplacedSel(this, changes, collapse);
      for (var i$1 = changes.length - 1; i$1 >= 0; i$1--)
        { makeChange(this$1, changes[i$1]); }
      if (newSel) { setSelectionReplaceHistory(this, newSel); }
      else if (this.cm) { ensureCursorVisible(this.cm); }
    }),
    undo: docMethodOp(function() {makeChangeFromHistory(this, "undo");}),
    redo: docMethodOp(function() {makeChangeFromHistory(this, "redo");}),
    undoSelection: docMethodOp(function() {makeChangeFromHistory(this, "undo", true);}),
    redoSelection: docMethodOp(function() {makeChangeFromHistory(this, "redo", true);}),

    setExtending: function(val) {this.extend = val;},
    getExtending: function() {return this.extend},

    historySize: function() {
      var hist = this.history, done = 0, undone = 0;
      for (var i = 0; i < hist.done.length; i++) { if (!hist.done[i].ranges) { ++done; } }
      for (var i$1 = 0; i$1 < hist.undone.length; i$1++) { if (!hist.undone[i$1].ranges) { ++undone; } }
      return {undo: done, redo: undone}
    },
    clearHistory: function() {this.history = new History(this.history.maxGeneration);},

    markClean: function() {
      this.cleanGeneration = this.changeGeneration(true);
    },
    changeGeneration: function(forceSplit) {
      if (forceSplit)
        { this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null; }
      return this.history.generation
    },
    isClean: function (gen) {
      return this.history.generation == (gen || this.cleanGeneration)
    },

    getHistory: function() {
      return {done: copyHistoryArray(this.history.done),
              undone: copyHistoryArray(this.history.undone)}
    },
    setHistory: function(histData) {
      var hist = this.history = new History(this.history.maxGeneration);
      hist.done = copyHistoryArray(histData.done.slice(0), null, true);
      hist.undone = copyHistoryArray(histData.undone.slice(0), null, true);
    },

    setGutterMarker: docMethodOp(function(line, gutterID, value) {
      return changeLine(this, line, "gutter", function (line) {
        var markers = line.gutterMarkers || (line.gutterMarkers = {});
        markers[gutterID] = value;
        if (!value && isEmpty(markers)) { line.gutterMarkers = null; }
        return true
      })
    }),

    clearGutter: docMethodOp(function(gutterID) {
      var this$1 = this;

      this.iter(function (line) {
        if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
          changeLine(this$1, line, "gutter", function () {
            line.gutterMarkers[gutterID] = null;
            if (isEmpty(line.gutterMarkers)) { line.gutterMarkers = null; }
            return true
          });
        }
      });
    }),

    lineInfo: function(line) {
      var n;
      if (typeof line == "number") {
        if (!isLine(this, line)) { return null }
        n = line;
        line = getLine(this, line);
        if (!line) { return null }
      } else {
        n = lineNo(line);
        if (n == null) { return null }
      }
      return {line: n, handle: line, text: line.text, gutterMarkers: line.gutterMarkers,
              textClass: line.textClass, bgClass: line.bgClass, wrapClass: line.wrapClass,
              widgets: line.widgets}
    },

    addLineClass: docMethodOp(function(handle, where, cls) {
      return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
        var prop = where == "text" ? "textClass"
                 : where == "background" ? "bgClass"
                 : where == "gutter" ? "gutterClass" : "wrapClass";
        if (!line[prop]) { line[prop] = cls; }
        else if (classTest(cls).test(line[prop])) { return false }
        else { line[prop] += " " + cls; }
        return true
      })
    }),
    removeLineClass: docMethodOp(function(handle, where, cls) {
      return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
        var prop = where == "text" ? "textClass"
                 : where == "background" ? "bgClass"
                 : where == "gutter" ? "gutterClass" : "wrapClass";
        var cur = line[prop];
        if (!cur) { return false }
        else if (cls == null) { line[prop] = null; }
        else {
          var found = cur.match(classTest(cls));
          if (!found) { return false }
          var end = found.index + found[0].length;
          line[prop] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null;
        }
        return true
      })
    }),

    addLineWidget: docMethodOp(function(handle, node, options) {
      return addLineWidget(this, handle, node, options)
    }),
    removeLineWidget: function(widget) { widget.clear(); },

    markText: function(from, to, options) {
      return markText(this, clipPos(this, from), clipPos(this, to), options, options && options.type || "range")
    },
    setBookmark: function(pos, options) {
      var realOpts = {replacedWith: options && (options.nodeType == null ? options.widget : options),
                      insertLeft: options && options.insertLeft,
                      clearWhenEmpty: false, shared: options && options.shared,
                      handleMouseEvents: options && options.handleMouseEvents};
      pos = clipPos(this, pos);
      return markText(this, pos, pos, realOpts, "bookmark")
    },
    findMarksAt: function(pos) {
      pos = clipPos(this, pos);
      var markers = [], spans = getLine(this, pos.line).markedSpans;
      if (spans) { for (var i = 0; i < spans.length; ++i) {
        var span = spans[i];
        if ((span.from == null || span.from <= pos.ch) &&
            (span.to == null || span.to >= pos.ch))
          { markers.push(span.marker.parent || span.marker); }
      } }
      return markers
    },
    findMarks: function(from, to, filter) {
      from = clipPos(this, from); to = clipPos(this, to);
      var found = [], lineNo$$1 = from.line;
      this.iter(from.line, to.line + 1, function (line) {
        var spans = line.markedSpans;
        if (spans) { for (var i = 0; i < spans.length; i++) {
          var span = spans[i];
          if (!(span.to != null && lineNo$$1 == from.line && from.ch >= span.to ||
                span.from == null && lineNo$$1 != from.line ||
                span.from != null && lineNo$$1 == to.line && span.from >= to.ch) &&
              (!filter || filter(span.marker)))
            { found.push(span.marker.parent || span.marker); }
        } }
        ++lineNo$$1;
      });
      return found
    },
    getAllMarks: function() {
      var markers = [];
      this.iter(function (line) {
        var sps = line.markedSpans;
        if (sps) { for (var i = 0; i < sps.length; ++i)
          { if (sps[i].from != null) { markers.push(sps[i].marker); } } }
      });
      return markers
    },

    posFromIndex: function(off) {
      var ch, lineNo$$1 = this.first, sepSize = this.lineSeparator().length;
      this.iter(function (line) {
        var sz = line.text.length + sepSize;
        if (sz > off) { ch = off; return true }
        off -= sz;
        ++lineNo$$1;
      });
      return clipPos(this, Pos(lineNo$$1, ch))
    },
    indexFromPos: function (coords) {
      coords = clipPos(this, coords);
      var index = coords.ch;
      if (coords.line < this.first || coords.ch < 0) { return 0 }
      var sepSize = this.lineSeparator().length;
      this.iter(this.first, coords.line, function (line) { // iter aborts when callback returns a truthy value
        index += line.text.length + sepSize;
      });
      return index
    },

    copy: function(copyHistory) {
      var doc = new Doc(getLines(this, this.first, this.first + this.size),
                        this.modeOption, this.first, this.lineSep, this.direction);
      doc.scrollTop = this.scrollTop; doc.scrollLeft = this.scrollLeft;
      doc.sel = this.sel;
      doc.extend = false;
      if (copyHistory) {
        doc.history.undoDepth = this.history.undoDepth;
        doc.setHistory(this.getHistory());
      }
      return doc
    },

    linkedDoc: function(options) {
      if (!options) { options = {}; }
      var from = this.first, to = this.first + this.size;
      if (options.from != null && options.from > from) { from = options.from; }
      if (options.to != null && options.to < to) { to = options.to; }
      var copy = new Doc(getLines(this, from, to), options.mode || this.modeOption, from, this.lineSep, this.direction);
      if (options.sharedHist) { copy.history = this.history
      ; }(this.linked || (this.linked = [])).push({doc: copy, sharedHist: options.sharedHist});
      copy.linked = [{doc: this, isParent: true, sharedHist: options.sharedHist}];
      copySharedMarkers(copy, findSharedMarkers(this));
      return copy
    },
    unlinkDoc: function(other) {
      var this$1 = this;

      if (other instanceof CodeMirror) { other = other.doc; }
      if (this.linked) { for (var i = 0; i < this.linked.length; ++i) {
        var link = this$1.linked[i];
        if (link.doc != other) { continue }
        this$1.linked.splice(i, 1);
        other.unlinkDoc(this$1);
        detachSharedMarkers(findSharedMarkers(this$1));
        break
      } }
      // If the histories were shared, split them again
      if (other.history == this.history) {
        var splitIds = [other.id];
        linkedDocs(other, function (doc) { return splitIds.push(doc.id); }, true);
        other.history = new History(null);
        other.history.done = copyHistoryArray(this.history.done, splitIds);
        other.history.undone = copyHistoryArray(this.history.undone, splitIds);
      }
    },
    iterLinkedDocs: function(f) {linkedDocs(this, f);},

    getMode: function() {return this.mode},
    getEditor: function() {return this.cm},

    splitLines: function(str) {
      if (this.lineSep) { return str.split(this.lineSep) }
      return splitLinesAuto(str)
    },
    lineSeparator: function() { return this.lineSep || "\n" },

    setDirection: docMethodOp(function (dir) {
      if (dir != "rtl") { dir = "ltr"; }
      if (dir == this.direction) { return }
      this.direction = dir;
      this.iter(function (line) { return line.order = null; });
      if (this.cm) { directionChanged(this.cm); }
    })
  });

  // Public alias.
  Doc.prototype.eachLine = Doc.prototype.iter;

  // Kludge to work around strange IE behavior where it'll sometimes
  // re-fire a series of drag-related events right after the drop (#1551)
  var lastDrop = 0;

  function onDrop(e) {
    var cm = this;
    clearDragCursor(cm);
    if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e))
      { return }
    e_preventDefault(e);
    if (ie) { lastDrop = +new Date; }
    var pos = posFromMouse(cm, e, true), files = e.dataTransfer.files;
    if (!pos || cm.isReadOnly()) { return }
    // Might be a file drop, in which case we simply extract the text
    // and insert it.
    if (files && files.length && window.FileReader && window.File) {
      var n = files.length, text = Array(n), read = 0;
      var loadFile = function (file, i) {
        if (cm.options.allowDropFileTypes &&
            indexOf(cm.options.allowDropFileTypes, file.type) == -1)
          { return }

        var reader = new FileReader;
        reader.onload = operation(cm, function () {
          var content = reader.result;
          if (/[\x00-\x08\x0e-\x1f]{2}/.test(content)) { content = ""; }
          text[i] = content;
          if (++read == n) {
            pos = clipPos(cm.doc, pos);
            var change = {from: pos, to: pos,
                          text: cm.doc.splitLines(text.join(cm.doc.lineSeparator())),
                          origin: "paste"};
            makeChange(cm.doc, change);
            setSelectionReplaceHistory(cm.doc, simpleSelection(pos, changeEnd(change)));
          }
        });
        reader.readAsText(file);
      };
      for (var i = 0; i < n; ++i) { loadFile(files[i], i); }
    } else { // Normal drop
      // Don't do a replace if the drop happened inside of the selected text.
      if (cm.state.draggingText && cm.doc.sel.contains(pos) > -1) {
        cm.state.draggingText(e);
        // Ensure the editor is re-focused
        setTimeout(function () { return cm.display.input.focus(); }, 20);
        return
      }
      try {
        var text$1 = e.dataTransfer.getData("Text");
        if (text$1) {
          var selected;
          if (cm.state.draggingText && !cm.state.draggingText.copy)
            { selected = cm.listSelections(); }
          setSelectionNoUndo(cm.doc, simpleSelection(pos, pos));
          if (selected) { for (var i$1 = 0; i$1 < selected.length; ++i$1)
            { replaceRange(cm.doc, "", selected[i$1].anchor, selected[i$1].head, "drag"); } }
          cm.replaceSelection(text$1, "around", "paste");
          cm.display.input.focus();
        }
      }
      catch(e){}
    }
  }

  function onDragStart(cm, e) {
    if (ie && (!cm.state.draggingText || +new Date - lastDrop < 100)) { e_stop(e); return }
    if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) { return }

    e.dataTransfer.setData("Text", cm.getSelection());
    e.dataTransfer.effectAllowed = "copyMove";

    // Use dummy image instead of default browsers image.
    // Recent Safari (~6.0.2) have a tendency to segfault when this happens, so we don't do it there.
    if (e.dataTransfer.setDragImage && !safari) {
      var img = elt("img", null, null, "position: fixed; left: 0; top: 0;");
      img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
      if (presto) {
        img.width = img.height = 1;
        cm.display.wrapper.appendChild(img);
        // Force a relayout, or Opera won't use our image for some obscure reason
        img._top = img.offsetTop;
      }
      e.dataTransfer.setDragImage(img, 0, 0);
      if (presto) { img.parentNode.removeChild(img); }
    }
  }

  function onDragOver(cm, e) {
    var pos = posFromMouse(cm, e);
    if (!pos) { return }
    var frag = document.createDocumentFragment();
    drawSelectionCursor(cm, pos, frag);
    if (!cm.display.dragCursor) {
      cm.display.dragCursor = elt("div", null, "CodeMirror-cursors CodeMirror-dragcursors");
      cm.display.lineSpace.insertBefore(cm.display.dragCursor, cm.display.cursorDiv);
    }
    removeChildrenAndAdd(cm.display.dragCursor, frag);
  }

  function clearDragCursor(cm) {
    if (cm.display.dragCursor) {
      cm.display.lineSpace.removeChild(cm.display.dragCursor);
      cm.display.dragCursor = null;
    }
  }

  // These must be handled carefully, because naively registering a
  // handler for each editor will cause the editors to never be
  // garbage collected.

  function forEachCodeMirror(f) {
    if (!document.getElementsByClassName) { return }
    var byClass = document.getElementsByClassName("CodeMirror"), editors = [];
    for (var i = 0; i < byClass.length; i++) {
      var cm = byClass[i].CodeMirror;
      if (cm) { editors.push(cm); }
    }
    if (editors.length) { editors[0].operation(function () {
      for (var i = 0; i < editors.length; i++) { f(editors[i]); }
    }); }
  }

  var globalsRegistered = false;
  function ensureGlobalHandlers() {
    if (globalsRegistered) { return }
    registerGlobalHandlers();
    globalsRegistered = true;
  }
  function registerGlobalHandlers() {
    // When the window resizes, we need to refresh active editors.
    var resizeTimer;
    on(window, "resize", function () {
      if (resizeTimer == null) { resizeTimer = setTimeout(function () {
        resizeTimer = null;
        forEachCodeMirror(onResize);
      }, 100); }
    });
    // When the window loses focus, we want to show the editor as blurred
    on(window, "blur", function () { return forEachCodeMirror(onBlur); });
  }
  // Called when the window resizes
  function onResize(cm) {
    var d = cm.display;
    // Might be a text scaling operation, clear size caches.
    d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;
    d.scrollbarsClipped = false;
    cm.setSize();
  }

  var keyNames = {
    3: "Pause", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt",
    19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End",
    36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert",
    46: "Delete", 59: ";", 61: "=", 91: "Mod", 92: "Mod", 93: "Mod",
    106: "*", 107: "=", 109: "-", 110: ".", 111: "/", 127: "Delete", 145: "ScrollLock",
    173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\",
    221: "]", 222: "'", 63232: "Up", 63233: "Down", 63234: "Left", 63235: "Right", 63272: "Delete",
    63273: "Home", 63275: "End", 63276: "PageUp", 63277: "PageDown", 63302: "Insert"
  };

  // Number keys
  for (var i = 0; i < 10; i++) { keyNames[i + 48] = keyNames[i + 96] = String(i); }
  // Alphabetic keys
  for (var i$1 = 65; i$1 <= 90; i$1++) { keyNames[i$1] = String.fromCharCode(i$1); }
  // Function keys
  for (var i$2 = 1; i$2 <= 12; i$2++) { keyNames[i$2 + 111] = keyNames[i$2 + 63235] = "F" + i$2; }

  var keyMap = {};

  keyMap.basic = {
    "Left": "goCharLeft", "Right": "goCharRight", "Up": "goLineUp", "Down": "goLineDown",
    "End": "goLineEnd", "Home": "goLineStartSmart", "PageUp": "goPageUp", "PageDown": "goPageDown",
    "Delete": "delCharAfter", "Backspace": "delCharBefore", "Shift-Backspace": "delCharBefore",
    "Tab": "defaultTab", "Shift-Tab": "indentAuto",
    "Enter": "newlineAndIndent", "Insert": "toggleOverwrite",
    "Esc": "singleSelection"
  };
  // Note that the save and find-related commands aren't defined by
  // default. User code or addons can define them. Unknown commands
  // are simply ignored.
  keyMap.pcDefault = {
    "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo",
    "Ctrl-Home": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Up": "goLineUp", "Ctrl-Down": "goLineDown",
    "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd",
    "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find",
    "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll",
    "Ctrl-[": "indentLess", "Ctrl-]": "indentMore",
    "Ctrl-U": "undoSelection", "Shift-Ctrl-U": "redoSelection", "Alt-U": "redoSelection",
    "fallthrough": "basic"
  };
  // Very basic readline/emacs-style bindings, which are standard on Mac.
  keyMap.emacsy = {
    "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown",
    "Alt-F": "goWordRight", "Alt-B": "goWordLeft", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd",
    "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp", "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore",
    "Alt-D": "delWordAfter", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars",
    "Ctrl-O": "openLine"
  };
  keyMap.macDefault = {
    "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo",
    "Cmd-Home": "goDocStart", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft",
    "Alt-Right": "goGroupRight", "Cmd-Left": "goLineLeft", "Cmd-Right": "goLineRight", "Alt-Backspace": "delGroupBefore",
    "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find",
    "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll",
    "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delWrappedLineLeft", "Cmd-Delete": "delWrappedLineRight",
    "Cmd-U": "undoSelection", "Shift-Cmd-U": "redoSelection", "Ctrl-Up": "goDocStart", "Ctrl-Down": "goDocEnd",
    "fallthrough": ["basic", "emacsy"]
  };
  keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault;

  // KEYMAP DISPATCH

  function normalizeKeyName(name) {
    var parts = name.split(/-(?!$)/);
    name = parts[parts.length - 1];
    var alt, ctrl, shift, cmd;
    for (var i = 0; i < parts.length - 1; i++) {
      var mod = parts[i];
      if (/^(cmd|meta|m)$/i.test(mod)) { cmd = true; }
      else if (/^a(lt)?$/i.test(mod)) { alt = true; }
      else if (/^(c|ctrl|control)$/i.test(mod)) { ctrl = true; }
      else if (/^s(hift)?$/i.test(mod)) { shift = true; }
      else { throw new Error("Unrecognized modifier name: " + mod) }
    }
    if (alt) { name = "Alt-" + name; }
    if (ctrl) { name = "Ctrl-" + name; }
    if (cmd) { name = "Cmd-" + name; }
    if (shift) { name = "Shift-" + name; }
    return name
  }

  // This is a kludge to keep keymaps mostly working as raw objects
  // (backwards compatibility) while at the same time support features
  // like normalization and multi-stroke key bindings. It compiles a
  // new normalized keymap, and then updates the old object to reflect
  // this.
  function normalizeKeyMap(keymap) {
    var copy = {};
    for (var keyname in keymap) { if (keymap.hasOwnProperty(keyname)) {
      var value = keymap[keyname];
      if (/^(name|fallthrough|(de|at)tach)$/.test(keyname)) { continue }
      if (value == "...") { delete keymap[keyname]; continue }

      var keys = map(keyname.split(" "), normalizeKeyName);
      for (var i = 0; i < keys.length; i++) {
        var val = (void 0), name = (void 0);
        if (i == keys.length - 1) {
          name = keys.join(" ");
          val = value;
        } else {
          name = keys.slice(0, i + 1).join(" ");
          val = "...";
        }
        var prev = copy[name];
        if (!prev) { copy[name] = val; }
        else if (prev != val) { throw new Error("Inconsistent bindings for " + name) }
      }
      delete keymap[keyname];
    } }
    for (var prop in copy) { keymap[prop] = copy[prop]; }
    return keymap
  }

  function lookupKey(key, map$$1, handle, context) {
    map$$1 = getKeyMap(map$$1);
    var found = map$$1.call ? map$$1.call(key, context) : map$$1[key];
    if (found === false) { return "nothing" }
    if (found === "...") { return "multi" }
    if (found != null && handle(found)) { return "handled" }

    if (map$$1.fallthrough) {
      if (Object.prototype.toString.call(map$$1.fallthrough) != "[object Array]")
        { return lookupKey(key, map$$1.fallthrough, handle, context) }
      for (var i = 0; i < map$$1.fallthrough.length; i++) {
        var result = lookupKey(key, map$$1.fallthrough[i], handle, context);
        if (result) { return result }
      }
    }
  }

  // Modifier key presses don't count as 'real' key presses for the
  // purpose of keymap fallthrough.
  function isModifierKey(value) {
    var name = typeof value == "string" ? value : keyNames[value.keyCode];
    return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod"
  }

  function addModifierNames(name, event, noShift) {
    var base = name;
    if (event.altKey && base != "Alt") { name = "Alt-" + name; }
    if ((flipCtrlCmd ? event.metaKey : event.ctrlKey) && base != "Ctrl") { name = "Ctrl-" + name; }
    if ((flipCtrlCmd ? event.ctrlKey : event.metaKey) && base != "Cmd") { name = "Cmd-" + name; }
    if (!noShift && event.shiftKey && base != "Shift") { name = "Shift-" + name; }
    return name
  }

  // Look up the name of a key as indicated by an event object.
  function keyName(event, noShift) {
    if (presto && event.keyCode == 34 && event["char"]) { return false }
    var name = keyNames[event.keyCode];
    if (name == null || event.altGraphKey) { return false }
    // Ctrl-ScrollLock has keyCode 3, same as Ctrl-Pause,
    // so we'll use event.code when available (Chrome 48+, FF 38+, Safari 10.1+)
    if (event.keyCode == 3 && event.code) { name = event.code; }
    return addModifierNames(name, event, noShift)
  }

  function getKeyMap(val) {
    return typeof val == "string" ? keyMap[val] : val
  }

  // Helper for deleting text near the selection(s), used to implement
  // backspace, delete, and similar functionality.
  function deleteNearSelection(cm, compute) {
    var ranges = cm.doc.sel.ranges, kill = [];
    // Build up a set of ranges to kill first, merging overlapping
    // ranges.
    for (var i = 0; i < ranges.length; i++) {
      var toKill = compute(ranges[i]);
      while (kill.length && cmp(toKill.from, lst(kill).to) <= 0) {
        var replaced = kill.pop();
        if (cmp(replaced.from, toKill.from) < 0) {
          toKill.from = replaced.from;
          break
        }
      }
      kill.push(toKill);
    }
    // Next, remove those actual ranges.
    runInOp(cm, function () {
      for (var i = kill.length - 1; i >= 0; i--)
        { replaceRange(cm.doc, "", kill[i].from, kill[i].to, "+delete"); }
      ensureCursorVisible(cm);
    });
  }

  function moveCharLogically(line, ch, dir) {
    var target = skipExtendingChars(line.text, ch + dir, dir);
    return target < 0 || target > line.text.length ? null : target
  }

  function moveLogically(line, start, dir) {
    var ch = moveCharLogically(line, start.ch, dir);
    return ch == null ? null : new Pos(start.line, ch, dir < 0 ? "after" : "before")
  }

  function endOfLine(visually, cm, lineObj, lineNo, dir) {
    if (visually) {
      var order = getOrder(lineObj, cm.doc.direction);
      if (order) {
        var part = dir < 0 ? lst(order) : order[0];
        var moveInStorageOrder = (dir < 0) == (part.level == 1);
        var sticky = moveInStorageOrder ? "after" : "before";
        var ch;
        // With a wrapped rtl chunk (possibly spanning multiple bidi parts),
        // it could be that the last bidi part is not on the last visual line,
        // since visual lines contain content order-consecutive chunks.
        // Thus, in rtl, we are looking for the first (content-order) character
        // in the rtl chunk that is on the last line (that is, the same line
        // as the last (content-order) character).
        if (part.level > 0 || cm.doc.direction == "rtl") {
          var prep = prepareMeasureForLine(cm, lineObj);
          ch = dir < 0 ? lineObj.text.length - 1 : 0;
          var targetTop = measureCharPrepared(cm, prep, ch).top;
          ch = findFirst(function (ch) { return measureCharPrepared(cm, prep, ch).top == targetTop; }, (dir < 0) == (part.level == 1) ? part.from : part.to - 1, ch);
          if (sticky == "before") { ch = moveCharLogically(lineObj, ch, 1); }
        } else { ch = dir < 0 ? part.to : part.from; }
        return new Pos(lineNo, ch, sticky)
      }
    }
    return new Pos(lineNo, dir < 0 ? lineObj.text.length : 0, dir < 0 ? "before" : "after")
  }

  function moveVisually(cm, line, start, dir) {
    var bidi = getOrder(line, cm.doc.direction);
    if (!bidi) { return moveLogically(line, start, dir) }
    if (start.ch >= line.text.length) {
      start.ch = line.text.length;
      start.sticky = "before";
    } else if (start.ch <= 0) {
      start.ch = 0;
      start.sticky = "after";
    }
    var partPos = getBidiPartAt(bidi, start.ch, start.sticky), part = bidi[partPos];
    if (cm.doc.direction == "ltr" && part.level % 2 == 0 && (dir > 0 ? part.to > start.ch : part.from < start.ch)) {
      // Case 1: We move within an ltr part in an ltr editor. Even with wrapped lines,
      // nothing interesting happens.
      return moveLogically(line, start, dir)
    }

    var mv = function (pos, dir) { return moveCharLogically(line, pos instanceof Pos ? pos.ch : pos, dir); };
    var prep;
    var getWrappedLineExtent = function (ch) {
      if (!cm.options.lineWrapping) { return {begin: 0, end: line.text.length} }
      prep = prep || prepareMeasureForLine(cm, line);
      return wrappedLineExtentChar(cm, line, prep, ch)
    };
    var wrappedLineExtent = getWrappedLineExtent(start.sticky == "before" ? mv(start, -1) : start.ch);

    if (cm.doc.direction == "rtl" || part.level == 1) {
      var moveInStorageOrder = (part.level == 1) == (dir < 0);
      var ch = mv(start, moveInStorageOrder ? 1 : -1);
      if (ch != null && (!moveInStorageOrder ? ch >= part.from && ch >= wrappedLineExtent.begin : ch <= part.to && ch <= wrappedLineExtent.end)) {
        // Case 2: We move within an rtl part or in an rtl editor on the same visual line
        var sticky = moveInStorageOrder ? "before" : "after";
        return new Pos(start.line, ch, sticky)
      }
    }

    // Case 3: Could not move within this bidi part in this visual line, so leave
    // the current bidi part

    var searchInVisualLine = function (partPos, dir, wrappedLineExtent) {
      var getRes = function (ch, moveInStorageOrder) { return moveInStorageOrder
        ? new Pos(start.line, mv(ch, 1), "before")
        : new Pos(start.line, ch, "after"); };

      for (; partPos >= 0 && partPos < bidi.length; partPos += dir) {
        var part = bidi[partPos];
        var moveInStorageOrder = (dir > 0) == (part.level != 1);
        var ch = moveInStorageOrder ? wrappedLineExtent.begin : mv(wrappedLineExtent.end, -1);
        if (part.from <= ch && ch < part.to) { return getRes(ch, moveInStorageOrder) }
        ch = moveInStorageOrder ? part.from : mv(part.to, -1);
        if (wrappedLineExtent.begin <= ch && ch < wrappedLineExtent.end) { return getRes(ch, moveInStorageOrder) }
      }
    };

    // Case 3a: Look for other bidi parts on the same visual line
    var res = searchInVisualLine(partPos + dir, dir, wrappedLineExtent);
    if (res) { return res }

    // Case 3b: Look for other bidi parts on the next visual line
    var nextCh = dir > 0 ? wrappedLineExtent.end : mv(wrappedLineExtent.begin, -1);
    if (nextCh != null && !(dir > 0 && nextCh == line.text.length)) {
      res = searchInVisualLine(dir > 0 ? 0 : bidi.length - 1, dir, getWrappedLineExtent(nextCh));
      if (res) { return res }
    }

    // Case 4: Nowhere to move
    return null
  }

  // Commands are parameter-less actions that can be performed on an
  // editor, mostly used for keybindings.
  var commands = {
    selectAll: selectAll,
    singleSelection: function (cm) { return cm.setSelection(cm.getCursor("anchor"), cm.getCursor("head"), sel_dontScroll); },
    killLine: function (cm) { return deleteNearSelection(cm, function (range) {
      if (range.empty()) {
        var len = getLine(cm.doc, range.head.line).text.length;
        if (range.head.ch == len && range.head.line < cm.lastLine())
          { return {from: range.head, to: Pos(range.head.line + 1, 0)} }
        else
          { return {from: range.head, to: Pos(range.head.line, len)} }
      } else {
        return {from: range.from(), to: range.to()}
      }
    }); },
    deleteLine: function (cm) { return deleteNearSelection(cm, function (range) { return ({
      from: Pos(range.from().line, 0),
      to: clipPos(cm.doc, Pos(range.to().line + 1, 0))
    }); }); },
    delLineLeft: function (cm) { return deleteNearSelection(cm, function (range) { return ({
      from: Pos(range.from().line, 0), to: range.from()
    }); }); },
    delWrappedLineLeft: function (cm) { return deleteNearSelection(cm, function (range) {
      var top = cm.charCoords(range.head, "div").top + 5;
      var leftPos = cm.coordsChar({left: 0, top: top}, "div");
      return {from: leftPos, to: range.from()}
    }); },
    delWrappedLineRight: function (cm) { return deleteNearSelection(cm, function (range) {
      var top = cm.charCoords(range.head, "div").top + 5;
      var rightPos = cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div");
      return {from: range.from(), to: rightPos }
    }); },
    undo: function (cm) { return cm.undo(); },
    redo: function (cm) { return cm.redo(); },
    undoSelection: function (cm) { return cm.undoSelection(); },
    redoSelection: function (cm) { return cm.redoSelection(); },
    goDocStart: function (cm) { return cm.extendSelection(Pos(cm.firstLine(), 0)); },
    goDocEnd: function (cm) { return cm.extendSelection(Pos(cm.lastLine())); },
    goLineStart: function (cm) { return cm.extendSelectionsBy(function (range) { return lineStart(cm, range.head.line); },
      {origin: "+move", bias: 1}
    ); },
    goLineStartSmart: function (cm) { return cm.extendSelectionsBy(function (range) { return lineStartSmart(cm, range.head); },
      {origin: "+move", bias: 1}
    ); },
    goLineEnd: function (cm) { return cm.extendSelectionsBy(function (range) { return lineEnd(cm, range.head.line); },
      {origin: "+move", bias: -1}
    ); },
    goLineRight: function (cm) { return cm.extendSelectionsBy(function (range) {
      var top = cm.cursorCoords(range.head, "div").top + 5;
      return cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div")
    }, sel_move); },
    goLineLeft: function (cm) { return cm.extendSelectionsBy(function (range) {
      var top = cm.cursorCoords(range.head, "div").top + 5;
      return cm.coordsChar({left: 0, top: top}, "div")
    }, sel_move); },
    goLineLeftSmart: function (cm) { return cm.extendSelectionsBy(function (range) {
      var top = cm.cursorCoords(range.head, "div").top + 5;
      var pos = cm.coordsChar({left: 0, top: top}, "div");
      if (pos.ch < cm.getLine(pos.line).search(/\S/)) { return lineStartSmart(cm, range.head) }
      return pos
    }, sel_move); },
    goLineUp: function (cm) { return cm.moveV(-1, "line"); },
    goLineDown: function (cm) { return cm.moveV(1, "line"); },
    goPageUp: function (cm) { return cm.moveV(-1, "page"); },
    goPageDown: function (cm) { return cm.moveV(1, "page"); },
    goCharLeft: function (cm) { return cm.moveH(-1, "char"); },
    goCharRight: function (cm) { return cm.moveH(1, "char"); },
    goColumnLeft: function (cm) { return cm.moveH(-1, "column"); },
    goColumnRight: function (cm) { return cm.moveH(1, "column"); },
    goWordLeft: function (cm) { return cm.moveH(-1, "word"); },
    goGroupRight: function (cm) { return cm.moveH(1, "group"); },
    goGroupLeft: function (cm) { return cm.moveH(-1, "group"); },
    goWordRight: function (cm) { return cm.moveH(1, "word"); },
    delCharBefore: function (cm) { return cm.deleteH(-1, "char"); },
    delCharAfter: function (cm) { return cm.deleteH(1, "char"); },
    delWordBefore: function (cm) { return cm.deleteH(-1, "word"); },
    delWordAfter: function (cm) { return cm.deleteH(1, "word"); },
    delGroupBefore: function (cm) { return cm.deleteH(-1, "group"); },
    delGroupAfter: function (cm) { return cm.deleteH(1, "group"); },
    indentAuto: function (cm) { return cm.indentSelection("smart"); },
    indentMore: function (cm) { return cm.indentSelection("add"); },
    indentLess: function (cm) { return cm.indentSelection("subtract"); },
    insertTab: function (cm) { return cm.replaceSelection("\t"); },
    insertSoftTab: function (cm) {
      var spaces = [], ranges = cm.listSelections(), tabSize = cm.options.tabSize;
      for (var i = 0; i < ranges.length; i++) {
        var pos = ranges[i].from();
        var col = countColumn(cm.getLine(pos.line), pos.ch, tabSize);
        spaces.push(spaceStr(tabSize - col % tabSize));
      }
      cm.replaceSelections(spaces);
    },
    defaultTab: function (cm) {
      if (cm.somethingSelected()) { cm.indentSelection("add"); }
      else { cm.execCommand("insertTab"); }
    },
    // Swap the two chars left and right of each selection's head.
    // Move cursor behind the two swapped characters afterwards.
    //
    // Doesn't consider line feeds a character.
    // Doesn't scan more than one line above to find a character.
    // Doesn't do anything on an empty line.
    // Doesn't do anything with non-empty selections.
    transposeChars: function (cm) { return runInOp(cm, function () {
      var ranges = cm.listSelections(), newSel = [];
      for (var i = 0; i < ranges.length; i++) {
        if (!ranges[i].empty()) { continue }
        var cur = ranges[i].head, line = getLine(cm.doc, cur.line).text;
        if (line) {
          if (cur.ch == line.length) { cur = new Pos(cur.line, cur.ch - 1); }
          if (cur.ch > 0) {
            cur = new Pos(cur.line, cur.ch + 1);
            cm.replaceRange(line.charAt(cur.ch - 1) + line.charAt(cur.ch - 2),
                            Pos(cur.line, cur.ch - 2), cur, "+transpose");
          } else if (cur.line > cm.doc.first) {
            var prev = getLine(cm.doc, cur.line - 1).text;
            if (prev) {
              cur = new Pos(cur.line, 1);
              cm.replaceRange(line.charAt(0) + cm.doc.lineSeparator() +
                              prev.charAt(prev.length - 1),
                              Pos(cur.line - 1, prev.length - 1), cur, "+transpose");
            }
          }
        }
        newSel.push(new Range(cur, cur));
      }
      cm.setSelections(newSel);
    }); },
    newlineAndIndent: function (cm) { return runInOp(cm, function () {
      var sels = cm.listSelections();
      for (var i = sels.length - 1; i >= 0; i--)
        { cm.replaceRange(cm.doc.lineSeparator(), sels[i].anchor, sels[i].head, "+input"); }
      sels = cm.listSelections();
      for (var i$1 = 0; i$1 < sels.length; i$1++)
        { cm.indentLine(sels[i$1].from().line, null, true); }
      ensureCursorVisible(cm);
    }); },
    openLine: function (cm) { return cm.replaceSelection("\n", "start"); },
    toggleOverwrite: function (cm) { return cm.toggleOverwrite(); }
  };


  function lineStart(cm, lineN) {
    var line = getLine(cm.doc, lineN);
    var visual = visualLine(line);
    if (visual != line) { lineN = lineNo(visual); }
    return endOfLine(true, cm, visual, lineN, 1)
  }
  function lineEnd(cm, lineN) {
    var line = getLine(cm.doc, lineN);
    var visual = visualLineEnd(line);
    if (visual != line) { lineN = lineNo(visual); }
    return endOfLine(true, cm, line, lineN, -1)
  }
  function lineStartSmart(cm, pos) {
    var start = lineStart(cm, pos.line);
    var line = getLine(cm.doc, start.line);
    var order = getOrder(line, cm.doc.direction);
    if (!order || order[0].level == 0) {
      var firstNonWS = Math.max(0, line.text.search(/\S/));
      var inWS = pos.line == start.line && pos.ch <= firstNonWS && pos.ch;
      return Pos(start.line, inWS ? 0 : firstNonWS, start.sticky)
    }
    return start
  }

  // Run a handler that was bound to a key.
  function doHandleBinding(cm, bound, dropShift) {
    if (typeof bound == "string") {
      bound = commands[bound];
      if (!bound) { return false }
    }
    // Ensure previous input has been read, so that the handler sees a
    // consistent view of the document
    cm.display.input.ensurePolled();
    var prevShift = cm.display.shift, done = false;
    try {
      if (cm.isReadOnly()) { cm.state.suppressEdits = true; }
      if (dropShift) { cm.display.shift = false; }
      done = bound(cm) != Pass;
    } finally {
      cm.display.shift = prevShift;
      cm.state.suppressEdits = false;
    }
    return done
  }

  function lookupKeyForEditor(cm, name, handle) {
    for (var i = 0; i < cm.state.keyMaps.length; i++) {
      var result = lookupKey(name, cm.state.keyMaps[i], handle, cm);
      if (result) { return result }
    }
    return (cm.options.extraKeys && lookupKey(name, cm.options.extraKeys, handle, cm))
      || lookupKey(name, cm.options.keyMap, handle, cm)
  }

  // Note that, despite the name, this function is also used to check
  // for bound mouse clicks.

  var stopSeq = new Delayed;

  function dispatchKey(cm, name, e, handle) {
    var seq = cm.state.keySeq;
    if (seq) {
      if (isModifierKey(name)) { return "handled" }
      if (/\'$/.test(name))
        { cm.state.keySeq = null; }
      else
        { stopSeq.set(50, function () {
          if (cm.state.keySeq == seq) {
            cm.state.keySeq = null;
            cm.display.input.reset();
          }
        }); }
      if (dispatchKeyInner(cm, seq + " " + name, e, handle)) { return true }
    }
    return dispatchKeyInner(cm, name, e, handle)
  }

  function dispatchKeyInner(cm, name, e, handle) {
    var result = lookupKeyForEditor(cm, name, handle);

    if (result == "multi")
      { cm.state.keySeq = name; }
    if (result == "handled")
      { signalLater(cm, "keyHandled", cm, name, e); }

    if (result == "handled" || result == "multi") {
      e_preventDefault(e);
      restartBlink(cm);
    }

    return !!result
  }

  // Handle a key from the keydown event.
  function handleKeyBinding(cm, e) {
    var name = keyName(e, true);
    if (!name) { return false }

    if (e.shiftKey && !cm.state.keySeq) {
      // First try to resolve full name (including 'Shift-'). Failing
      // that, see if there is a cursor-motion command (starting with
      // 'go') bound to the keyname without 'Shift-'.
      return dispatchKey(cm, "Shift-" + name, e, function (b) { return doHandleBinding(cm, b, true); })
          || dispatchKey(cm, name, e, function (b) {
               if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion)
                 { return doHandleBinding(cm, b) }
             })
    } else {
      return dispatchKey(cm, name, e, function (b) { return doHandleBinding(cm, b); })
    }
  }

  // Handle a key from the keypress event
  function handleCharBinding(cm, e, ch) {
    return dispatchKey(cm, "'" + ch + "'", e, function (b) { return doHandleBinding(cm, b, true); })
  }

  var lastStoppedKey = null;
  function onKeyDown(e) {
    var cm = this;
    cm.curOp.focus = activeElt();
    if (signalDOMEvent(cm, e)) { return }
    // IE does strange things with escape.
    if (ie && ie_version < 11 && e.keyCode == 27) { e.returnValue = false; }
    var code = e.keyCode;
    cm.display.shift = code == 16 || e.shiftKey;
    var handled = handleKeyBinding(cm, e);
    if (presto) {
      lastStoppedKey = handled ? code : null;
      // Opera has no cut event... we try to at least catch the key combo
      if (!handled && code == 88 && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey))
        { cm.replaceSelection("", null, "cut"); }
    }

    // Turn mouse into crosshair when Alt is held on Mac.
    if (code == 18 && !/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className))
      { showCrossHair(cm); }
  }

  function showCrossHair(cm) {
    var lineDiv = cm.display.lineDiv;
    addClass(lineDiv, "CodeMirror-crosshair");

    function up(e) {
      if (e.keyCode == 18 || !e.altKey) {
        rmClass(lineDiv, "CodeMirror-crosshair");
        off(document, "keyup", up);
        off(document, "mouseover", up);
      }
    }
    on(document, "keyup", up);
    on(document, "mouseover", up);
  }

  function onKeyUp(e) {
    if (e.keyCode == 16) { this.doc.sel.shift = false; }
    signalDOMEvent(this, e);
  }

  function onKeyPress(e) {
    var cm = this;
    if (eventInWidget(cm.display, e) || signalDOMEvent(cm, e) || e.ctrlKey && !e.altKey || mac && e.metaKey) { return }
    var keyCode = e.keyCode, charCode = e.charCode;
    if (presto && keyCode == lastStoppedKey) {lastStoppedKey = null; e_preventDefault(e); return}
    if ((presto && (!e.which || e.which < 10)) && handleKeyBinding(cm, e)) { return }
    var ch = String.fromCharCode(charCode == null ? keyCode : charCode);
    // Some browsers fire keypress events for backspace
    if (ch == "\x08") { return }
    if (handleCharBinding(cm, e, ch)) { return }
    cm.display.input.onKeyPress(e);
  }

  var DOUBLECLICK_DELAY = 400;

  var PastClick = function(time, pos, button) {
    this.time = time;
    this.pos = pos;
    this.button = button;
  };

  PastClick.prototype.compare = function (time, pos, button) {
    return this.time + DOUBLECLICK_DELAY > time &&
      cmp(pos, this.pos) == 0 && button == this.button
  };

  var lastClick, lastDoubleClick;
  function clickRepeat(pos, button) {
    var now = +new Date;
    if (lastDoubleClick && lastDoubleClick.compare(now, pos, button)) {
      lastClick = lastDoubleClick = null;
      return "triple"
    } else if (lastClick && lastClick.compare(now, pos, button)) {
      lastDoubleClick = new PastClick(now, pos, button);
      lastClick = null;
      return "double"
    } else {
      lastClick = new PastClick(now, pos, button);
      lastDoubleClick = null;
      return "single"
    }
  }

  // A mouse down can be a single click, double click, triple click,
  // start of selection drag, start of text drag, new cursor
  // (ctrl-click), rectangle drag (alt-drag), or xwin
  // middle-click-paste. Or it might be a click on something we should
  // not interfere with, such as a scrollbar or widget.
  function onMouseDown(e) {
    var cm = this, display = cm.display;
    if (signalDOMEvent(cm, e) || display.activeTouch && display.input.supportsTouch()) { return }
    display.input.ensurePolled();
    display.shift = e.shiftKey;

    if (eventInWidget(display, e)) {
      if (!webkit) {
        // Briefly turn off draggability, to allow widgets to do
        // normal dragging things.
        display.scroller.draggable = false;
        setTimeout(function () { return display.scroller.draggable = true; }, 100);
      }
      return
    }
    if (clickInGutter(cm, e)) { return }
    var pos = posFromMouse(cm, e), button = e_button(e), repeat = pos ? clickRepeat(pos, button) : "single";
    window.focus();

    // #3261: make sure, that we're not starting a second selection
    if (button == 1 && cm.state.selectingText)
      { cm.state.selectingText(e); }

    if (pos && handleMappedButton(cm, button, pos, repeat, e)) { return }

    if (button == 1) {
      if (pos) { leftButtonDown(cm, pos, repeat, e); }
      else if (e_target(e) == display.scroller) { e_preventDefault(e); }
    } else if (button == 2) {
      if (pos) { extendSelection(cm.doc, pos); }
      setTimeout(function () { return display.input.focus(); }, 20);
    } else if (button == 3) {
      if (captureRightClick) { cm.display.input.onContextMenu(e); }
      else { delayBlurEvent(cm); }
    }
  }

  function handleMappedButton(cm, button, pos, repeat, event) {
    var name = "Click";
    if (repeat == "double") { name = "Double" + name; }
    else if (repeat == "triple") { name = "Triple" + name; }
    name = (button == 1 ? "Left" : button == 2 ? "Middle" : "Right") + name;

    return dispatchKey(cm,  addModifierNames(name, event), event, function (bound) {
      if (typeof bound == "string") { bound = commands[bound]; }
      if (!bound) { return false }
      var done = false;
      try {
        if (cm.isReadOnly()) { cm.state.suppressEdits = true; }
        done = bound(cm, pos) != Pass;
      } finally {
        cm.state.suppressEdits = false;
      }
      return done
    })
  }

  function configureMouse(cm, repeat, event) {
    var option = cm.getOption("configureMouse");
    var value = option ? option(cm, repeat, event) : {};
    if (value.unit == null) {
      var rect = chromeOS ? event.shiftKey && event.metaKey : event.altKey;
      value.unit = rect ? "rectangle" : repeat == "single" ? "char" : repeat == "double" ? "word" : "line";
    }
    if (value.extend == null || cm.doc.extend) { value.extend = cm.doc.extend || event.shiftKey; }
    if (value.addNew == null) { value.addNew = mac ? event.metaKey : event.ctrlKey; }
    if (value.moveOnDrag == null) { value.moveOnDrag = !(mac ? event.altKey : event.ctrlKey); }
    return value
  }

  function leftButtonDown(cm, pos, repeat, event) {
    if (ie) { setTimeout(bind(ensureFocus, cm), 0); }
    else { cm.curOp.focus = activeElt(); }

    var behavior = configureMouse(cm, repeat, event);

    var sel = cm.doc.sel, contained;
    if (cm.options.dragDrop && dragAndDrop && !cm.isReadOnly() &&
        repeat == "single" && (contained = sel.contains(pos)) > -1 &&
        (cmp((contained = sel.ranges[contained]).from(), pos) < 0 || pos.xRel > 0) &&
        (cmp(contained.to(), pos) > 0 || pos.xRel < 0))
      { leftButtonStartDrag(cm, event, pos, behavior); }
    else
      { leftButtonSelect(cm, event, pos, behavior); }
  }

  // Start a text drag. When it ends, see if any dragging actually
  // happen, and treat as a click if it didn't.
  function leftButtonStartDrag(cm, event, pos, behavior) {
    var display = cm.display, moved = false;
    var dragEnd = operation(cm, function (e) {
      if (webkit) { display.scroller.draggable = false; }
      cm.state.draggingText = false;
      off(display.wrapper.ownerDocument, "mouseup", dragEnd);
      off(display.wrapper.ownerDocument, "mousemove", mouseMove);
      off(display.scroller, "dragstart", dragStart);
      off(display.scroller, "drop", dragEnd);
      if (!moved) {
        e_preventDefault(e);
        if (!behavior.addNew)
          { extendSelection(cm.doc, pos, null, null, behavior.extend); }
        // Work around unexplainable focus problem in IE9 (#2127) and Chrome (#3081)
        if (webkit || ie && ie_version == 9)
          { setTimeout(function () {display.wrapper.ownerDocument.body.focus(); display.input.focus();}, 20); }
        else
          { display.input.focus(); }
      }
    });
    var mouseMove = function(e2) {
      moved = moved || Math.abs(event.clientX - e2.clientX) + Math.abs(event.clientY - e2.clientY) >= 10;
    };
    var dragStart = function () { return moved = true; };
    // Let the drag handler handle this.
    if (webkit) { display.scroller.draggable = true; }
    cm.state.draggingText = dragEnd;
    dragEnd.copy = !behavior.moveOnDrag;
    // IE's approach to draggable
    if (display.scroller.dragDrop) { display.scroller.dragDrop(); }
    on(display.wrapper.ownerDocument, "mouseup", dragEnd);
    on(display.wrapper.ownerDocument, "mousemove", mouseMove);
    on(display.scroller, "dragstart", dragStart);
    on(display.scroller, "drop", dragEnd);

    delayBlurEvent(cm);
    setTimeout(function () { return display.input.focus(); }, 20);
  }

  function rangeForUnit(cm, pos, unit) {
    if (unit == "char") { return new Range(pos, pos) }
    if (unit == "word") { return cm.findWordAt(pos) }
    if (unit == "line") { return new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0))) }
    var result = unit(cm, pos);
    return new Range(result.from, result.to)
  }

  // Normal selection, as opposed to text dragging.
  function leftButtonSelect(cm, event, start, behavior) {
    var display = cm.display, doc = cm.doc;
    e_preventDefault(event);

    var ourRange, ourIndex, startSel = doc.sel, ranges = startSel.ranges;
    if (behavior.addNew && !behavior.extend) {
      ourIndex = doc.sel.contains(start);
      if (ourIndex > -1)
        { ourRange = ranges[ourIndex]; }
      else
        { ourRange = new Range(start, start); }
    } else {
      ourRange = doc.sel.primary();
      ourIndex = doc.sel.primIndex;
    }

    if (behavior.unit == "rectangle") {
      if (!behavior.addNew) { ourRange = new Range(start, start); }
      start = posFromMouse(cm, event, true, true);
      ourIndex = -1;
    } else {
      var range$$1 = rangeForUnit(cm, start, behavior.unit);
      if (behavior.extend)
        { ourRange = extendRange(ourRange, range$$1.anchor, range$$1.head, behavior.extend); }
      else
        { ourRange = range$$1; }
    }

    if (!behavior.addNew) {
      ourIndex = 0;
      setSelection(doc, new Selection([ourRange], 0), sel_mouse);
      startSel = doc.sel;
    } else if (ourIndex == -1) {
      ourIndex = ranges.length;
      setSelection(doc, normalizeSelection(cm, ranges.concat([ourRange]), ourIndex),
                   {scroll: false, origin: "*mouse"});
    } else if (ranges.length > 1 && ranges[ourIndex].empty() && behavior.unit == "char" && !behavior.extend) {
      setSelection(doc, normalizeSelection(cm, ranges.slice(0, ourIndex).concat(ranges.slice(ourIndex + 1)), 0),
                   {scroll: false, origin: "*mouse"});
      startSel = doc.sel;
    } else {
      replaceOneSelection(doc, ourIndex, ourRange, sel_mouse);
    }

    var lastPos = start;
    function extendTo(pos) {
      if (cmp(lastPos, pos) == 0) { return }
      lastPos = pos;

      if (behavior.unit == "rectangle") {
        var ranges = [], tabSize = cm.options.tabSize;
        var startCol = countColumn(getLine(doc, start.line).text, start.ch, tabSize);
        var posCol = countColumn(getLine(doc, pos.line).text, pos.ch, tabSize);
        var left = Math.min(startCol, posCol), right = Math.max(startCol, posCol);
        for (var line = Math.min(start.line, pos.line), end = Math.min(cm.lastLine(), Math.max(start.line, pos.line));
             line <= end; line++) {
          var text = getLine(doc, line).text, leftPos = findColumn(text, left, tabSize);
          if (left == right)
            { ranges.push(new Range(Pos(line, leftPos), Pos(line, leftPos))); }
          else if (text.length > leftPos)
            { ranges.push(new Range(Pos(line, leftPos), Pos(line, findColumn(text, right, tabSize)))); }
        }
        if (!ranges.length) { ranges.push(new Range(start, start)); }
        setSelection(doc, normalizeSelection(cm, startSel.ranges.slice(0, ourIndex).concat(ranges), ourIndex),
                     {origin: "*mouse", scroll: false});
        cm.scrollIntoView(pos);
      } else {
        var oldRange = ourRange;
        var range$$1 = rangeForUnit(cm, pos, behavior.unit);
        var anchor = oldRange.anchor, head;
        if (cmp(range$$1.anchor, anchor) > 0) {
          head = range$$1.head;
          anchor = minPos(oldRange.from(), range$$1.anchor);
        } else {
          head = range$$1.anchor;
          anchor = maxPos(oldRange.to(), range$$1.head);
        }
        var ranges$1 = startSel.ranges.slice(0);
        ranges$1[ourIndex] = bidiSimplify(cm, new Range(clipPos(doc, anchor), head));
        setSelection(doc, normalizeSelection(cm, ranges$1, ourIndex), sel_mouse);
      }
    }

    var editorSize = display.wrapper.getBoundingClientRect();
    // Used to ensure timeout re-tries don't fire when another extend
    // happened in the meantime (clearTimeout isn't reliable -- at
    // least on Chrome, the timeouts still happen even when cleared,
    // if the clear happens after their scheduled firing time).
    var counter = 0;

    function extend(e) {
      var curCount = ++counter;
      var cur = posFromMouse(cm, e, true, behavior.unit == "rectangle");
      if (!cur) { return }
      if (cmp(cur, lastPos) != 0) {
        cm.curOp.focus = activeElt();
        extendTo(cur);
        var visible = visibleLines(display, doc);
        if (cur.line >= visible.to || cur.line < visible.from)
          { setTimeout(operation(cm, function () {if (counter == curCount) { extend(e); }}), 150); }
      } else {
        var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0;
        if (outside) { setTimeout(operation(cm, function () {
          if (counter != curCount) { return }
          display.scroller.scrollTop += outside;
          extend(e);
        }), 50); }
      }
    }

    function done(e) {
      cm.state.selectingText = false;
      counter = Infinity;
      e_preventDefault(e);
      display.input.focus();
      off(display.wrapper.ownerDocument, "mousemove", move);
      off(display.wrapper.ownerDocument, "mouseup", up);
      doc.history.lastSelOrigin = null;
    }

    var move = operation(cm, function (e) {
      if (e.buttons === 0 || !e_button(e)) { done(e); }
      else { extend(e); }
    });
    var up = operation(cm, done);
    cm.state.selectingText = up;
    on(display.wrapper.ownerDocument, "mousemove", move);
    on(display.wrapper.ownerDocument, "mouseup", up);
  }

  // Used when mouse-selecting to adjust the anchor to the proper side
  // of a bidi jump depending on the visual position of the head.
  function bidiSimplify(cm, range$$1) {
    var anchor = range$$1.anchor;
    var head = range$$1.head;
    var anchorLine = getLine(cm.doc, anchor.line);
    if (cmp(anchor, head) == 0 && anchor.sticky == head.sticky) { return range$$1 }
    var order = getOrder(anchorLine);
    if (!order) { return range$$1 }
    var index = getBidiPartAt(order, anchor.ch, anchor.sticky), part = order[index];
    if (part.from != anchor.ch && part.to != anchor.ch) { return range$$1 }
    var boundary = index + ((part.from == anchor.ch) == (part.level != 1) ? 0 : 1);
    if (boundary == 0 || boundary == order.length) { return range$$1 }

    // Compute the relative visual position of the head compared to the
    // anchor (<0 is to the left, >0 to the right)
    var leftSide;
    if (head.line != anchor.line) {
      leftSide = (head.line - anchor.line) * (cm.doc.direction == "ltr" ? 1 : -1) > 0;
    } else {
      var headIndex = getBidiPartAt(order, head.ch, head.sticky);
      var dir = headIndex - index || (head.ch - anchor.ch) * (part.level == 1 ? -1 : 1);
      if (headIndex == boundary - 1 || headIndex == boundary)
        { leftSide = dir < 0; }
      else
        { leftSide = dir > 0; }
    }

    var usePart = order[boundary + (leftSide ? -1 : 0)];
    var from = leftSide == (usePart.level == 1);
    var ch = from ? usePart.from : usePart.to, sticky = from ? "after" : "before";
    return anchor.ch == ch && anchor.sticky == sticky ? range$$1 : new Range(new Pos(anchor.line, ch, sticky), head)
  }


  // Determines whether an event happened in the gutter, and fires the
  // handlers for the corresponding event.
  function gutterEvent(cm, e, type, prevent) {
    var mX, mY;
    if (e.touches) {
      mX = e.touches[0].clientX;
      mY = e.touches[0].clientY;
    } else {
      try { mX = e.clientX; mY = e.clientY; }
      catch(e) { return false }
    }
    if (mX >= Math.floor(cm.display.gutters.getBoundingClientRect().right)) { return false }
    if (prevent) { e_preventDefault(e); }

    var display = cm.display;
    var lineBox = display.lineDiv.getBoundingClientRect();

    if (mY > lineBox.bottom || !hasHandler(cm, type)) { return e_defaultPrevented(e) }
    mY -= lineBox.top - display.viewOffset;

    for (var i = 0; i < cm.options.gutters.length; ++i) {
      var g = display.gutters.childNodes[i];
      if (g && g.getBoundingClientRect().right >= mX) {
        var line = lineAtHeight(cm.doc, mY);
        var gutter = cm.options.gutters[i];
        signal(cm, type, cm, line, gutter, e);
        return e_defaultPrevented(e)
      }
    }
  }

  function clickInGutter(cm, e) {
    return gutterEvent(cm, e, "gutterClick", true)
  }

  // CONTEXT MENU HANDLING

  // To make the context menu work, we need to briefly unhide the
  // textarea (making it as unobtrusive as possible) to let the
  // right-click take effect on it.
  function onContextMenu(cm, e) {
    if (eventInWidget(cm.display, e) || contextMenuInGutter(cm, e)) { return }
    if (signalDOMEvent(cm, e, "contextmenu")) { return }
    if (!captureRightClick) { cm.display.input.onContextMenu(e); }
  }

  function contextMenuInGutter(cm, e) {
    if (!hasHandler(cm, "gutterContextMenu")) { return false }
    return gutterEvent(cm, e, "gutterContextMenu", false)
  }

  function themeChanged(cm) {
    cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
      cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-");
    clearCaches(cm);
  }

  var Init = {toString: function(){return "CodeMirror.Init"}};

  var defaults = {};
  var optionHandlers = {};

  function defineOptions(CodeMirror) {
    var optionHandlers = CodeMirror.optionHandlers;

    function option(name, deflt, handle, notOnInit) {
      CodeMirror.defaults[name] = deflt;
      if (handle) { optionHandlers[name] =
        notOnInit ? function (cm, val, old) {if (old != Init) { handle(cm, val, old); }} : handle; }
    }

    CodeMirror.defineOption = option;

    // Passed to option handlers when there is no old value.
    CodeMirror.Init = Init;

    // These two are, on init, called from the constructor because they
    // have to be initialized before the editor can start at all.
    option("value", "", function (cm, val) { return cm.setValue(val); }, true);
    option("mode", null, function (cm, val) {
      cm.doc.modeOption = val;
      loadMode(cm);
    }, true);

    option("indentUnit", 2, loadMode, true);
    option("indentWithTabs", false);
    option("smartIndent", true);
    option("tabSize", 4, function (cm) {
      resetModeState(cm);
      clearCaches(cm);
      regChange(cm);
    }, true);

    option("lineSeparator", null, function (cm, val) {
      cm.doc.lineSep = val;
      if (!val) { return }
      var newBreaks = [], lineNo = cm.doc.first;
      cm.doc.iter(function (line) {
        for (var pos = 0;;) {
          var found = line.text.indexOf(val, pos);
          if (found == -1) { break }
          pos = found + val.length;
          newBreaks.push(Pos(lineNo, found));
        }
        lineNo++;
      });
      for (var i = newBreaks.length - 1; i >= 0; i--)
        { replaceRange(cm.doc, val, newBreaks[i], Pos(newBreaks[i].line, newBreaks[i].ch + val.length)); }
    });
    option("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g, function (cm, val, old) {
      cm.state.specialChars = new RegExp(val.source + (val.test("\t") ? "" : "|\t"), "g");
      if (old != Init) { cm.refresh(); }
    });
    option("specialCharPlaceholder", defaultSpecialCharPlaceholder, function (cm) { return cm.refresh(); }, true);
    option("electricChars", true);
    option("inputStyle", mobile ? "contenteditable" : "textarea", function () {
      throw new Error("inputStyle can not (yet) be changed in a running editor") // FIXME
    }, true);
    option("spellcheck", false, function (cm, val) { return cm.getInputField().spellcheck = val; }, true);
    option("rtlMoveVisually", !windows);
    option("wholeLineUpdateBefore", true);

    option("theme", "default", function (cm) {
      themeChanged(cm);
      guttersChanged(cm);
    }, true);
    option("keyMap", "default", function (cm, val, old) {
      var next = getKeyMap(val);
      var prev = old != Init && getKeyMap(old);
      if (prev && prev.detach) { prev.detach(cm, next); }
      if (next.attach) { next.attach(cm, prev || null); }
    });
    option("extraKeys", null);
    option("configureMouse", null);

    option("lineWrapping", false, wrappingChanged, true);
    option("gutters", [], function (cm) {
      setGuttersForLineNumbers(cm.options);
      guttersChanged(cm);
    }, true);
    option("fixedGutter", true, function (cm, val) {
      cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0";
      cm.refresh();
    }, true);
    option("coverGutterNextToScrollbar", false, function (cm) { return updateScrollbars(cm); }, true);
    option("scrollbarStyle", "native", function (cm) {
      initScrollbars(cm);
      updateScrollbars(cm);
      cm.display.scrollbars.setScrollTop(cm.doc.scrollTop);
      cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft);
    }, true);
    option("lineNumbers", false, function (cm) {
      setGuttersForLineNumbers(cm.options);
      guttersChanged(cm);
    }, true);
    option("firstLineNumber", 1, guttersChanged, true);
    option("lineNumberFormatter", function (integer) { return integer; }, guttersChanged, true);
    option("showCursorWhenSelecting", false, updateSelection, true);

    option("resetSelectionOnContextMenu", true);
    option("lineWiseCopyCut", true);
    option("pasteLinesPerSelection", true);
    option("selectionsMayTouch", false);

    option("readOnly", false, function (cm, val) {
      if (val == "nocursor") {
        onBlur(cm);
        cm.display.input.blur();
      }
      cm.display.input.readOnlyChanged(val);
    });
    option("disableInput", false, function (cm, val) {if (!val) { cm.display.input.reset(); }}, true);
    option("dragDrop", true, dragDropChanged);
    option("allowDropFileTypes", null);

    option("cursorBlinkRate", 530);
    option("cursorScrollMargin", 0);
    option("cursorHeight", 1, updateSelection, true);
    option("singleCursorHeightPerLine", true, updateSelection, true);
    option("workTime", 100);
    option("workDelay", 100);
    option("flattenSpans", true, resetModeState, true);
    option("addModeClass", false, resetModeState, true);
    option("pollInterval", 100);
    option("undoDepth", 200, function (cm, val) { return cm.doc.history.undoDepth = val; });
    option("historyEventDelay", 1250);
    option("viewportMargin", 10, function (cm) { return cm.refresh(); }, true);
    option("maxHighlightLength", 10000, resetModeState, true);
    option("moveInputWithCursor", true, function (cm, val) {
      if (!val) { cm.display.input.resetPosition(); }
    });

    option("tabindex", null, function (cm, val) { return cm.display.input.getField().tabIndex = val || ""; });
    option("autofocus", null);
    option("direction", "ltr", function (cm, val) { return cm.doc.setDirection(val); }, true);
    option("phrases", null);
  }

  function guttersChanged(cm) {
    updateGutters(cm);
    regChange(cm);
    alignHorizontally(cm);
  }

  function dragDropChanged(cm, value, old) {
    var wasOn = old && old != Init;
    if (!value != !wasOn) {
      var funcs = cm.display.dragFunctions;
      var toggle = value ? on : off;
      toggle(cm.display.scroller, "dragstart", funcs.start);
      toggle(cm.display.scroller, "dragenter", funcs.enter);
      toggle(cm.display.scroller, "dragover", funcs.over);
      toggle(cm.display.scroller, "dragleave", funcs.leave);
      toggle(cm.display.scroller, "drop", funcs.drop);
    }
  }

  function wrappingChanged(cm) {
    if (cm.options.lineWrapping) {
      addClass(cm.display.wrapper, "CodeMirror-wrap");
      cm.display.sizer.style.minWidth = "";
      cm.display.sizerWidth = null;
    } else {
      rmClass(cm.display.wrapper, "CodeMirror-wrap");
      findMaxLine(cm);
    }
    estimateLineHeights(cm);
    regChange(cm);
    clearCaches(cm);
    setTimeout(function () { return updateScrollbars(cm); }, 100);
  }

  // A CodeMirror instance represents an editor. This is the object
  // that user code is usually dealing with.

  function CodeMirror(place, options) {
    var this$1 = this;

    if (!(this instanceof CodeMirror)) { return new CodeMirror(place, options) }

    this.options = options = options ? copyObj(options) : {};
    // Determine effective options based on given values and defaults.
    copyObj(defaults, options, false);
    setGuttersForLineNumbers(options);

    var doc = options.value;
    if (typeof doc == "string") { doc = new Doc(doc, options.mode, null, options.lineSeparator, options.direction); }
    else if (options.mode) { doc.modeOption = options.mode; }
    this.doc = doc;

    var input = new CodeMirror.inputStyles[options.inputStyle](this);
    var display = this.display = new Display(place, doc, input);
    display.wrapper.CodeMirror = this;
    updateGutters(this);
    themeChanged(this);
    if (options.lineWrapping)
      { this.display.wrapper.className += " CodeMirror-wrap"; }
    initScrollbars(this);

    this.state = {
      keyMaps: [],  // stores maps added by addKeyMap
      overlays: [], // highlighting overlays, as added by addOverlay
      modeGen: 0,   // bumped when mode/overlay changes, used to invalidate highlighting info
      overwrite: false,
      delayingBlurEvent: false,
      focused: false,
      suppressEdits: false, // used to disable editing during key handlers when in readOnly mode
      pasteIncoming: false, cutIncoming: false, // help recognize paste/cut edits in input.poll
      selectingText: false,
      draggingText: false,
      highlight: new Delayed(), // stores highlight worker timeout
      keySeq: null,  // Unfinished key sequence
      specialChars: null
    };

    if (options.autofocus && !mobile) { display.input.focus(); }

    // Override magic textarea content restore that IE sometimes does
    // on our hidden textarea on reload
    if (ie && ie_version < 11) { setTimeout(function () { return this$1.display.input.reset(true); }, 20); }

    registerEventHandlers(this);
    ensureGlobalHandlers();

    startOperation(this);
    this.curOp.forceUpdate = true;
    attachDoc(this, doc);

    if ((options.autofocus && !mobile) || this.hasFocus())
      { setTimeout(bind(onFocus, this), 20); }
    else
      { onBlur(this); }

    for (var opt in optionHandlers) { if (optionHandlers.hasOwnProperty(opt))
      { optionHandlers[opt](this$1, options[opt], Init); } }
    maybeUpdateLineNumberWidth(this);
    if (options.finishInit) { options.finishInit(this); }
    for (var i = 0; i < initHooks.length; ++i) { initHooks[i](this$1); }
    endOperation(this);
    // Suppress optimizelegibility in Webkit, since it breaks text
    // measuring on line wrapping boundaries.
    if (webkit && options.lineWrapping &&
        getComputedStyle(display.lineDiv).textRendering == "optimizelegibility")
      { display.lineDiv.style.textRendering = "auto"; }
  }

  // The default configuration options.
  CodeMirror.defaults = defaults;
  // Functions to run when options are changed.
  CodeMirror.optionHandlers = optionHandlers;

  // Attach the necessary event handlers when initializing the editor
  function registerEventHandlers(cm) {
    var d = cm.display;
    on(d.scroller, "mousedown", operation(cm, onMouseDown));
    // Older IE's will not fire a second mousedown for a double click
    if (ie && ie_version < 11)
      { on(d.scroller, "dblclick", operation(cm, function (e) {
        if (signalDOMEvent(cm, e)) { return }
        var pos = posFromMouse(cm, e);
        if (!pos || clickInGutter(cm, e) || eventInWidget(cm.display, e)) { return }
        e_preventDefault(e);
        var word = cm.findWordAt(pos);
        extendSelection(cm.doc, word.anchor, word.head);
      })); }
    else
      { on(d.scroller, "dblclick", function (e) { return signalDOMEvent(cm, e) || e_preventDefault(e); }); }
    // Some browsers fire contextmenu *after* opening the menu, at
    // which point we can't mess with it anymore. Context menu is
    // handled in onMouseDown for these browsers.
    on(d.scroller, "contextmenu", function (e) { return onContextMenu(cm, e); });

    // Used to suppress mouse event handling when a touch happens
    var touchFinished, prevTouch = {end: 0};
    function finishTouch() {
      if (d.activeTouch) {
        touchFinished = setTimeout(function () { return d.activeTouch = null; }, 1000);
        prevTouch = d.activeTouch;
        prevTouch.end = +new Date;
      }
    }
    function isMouseLikeTouchEvent(e) {
      if (e.touches.length != 1) { return false }
      var touch = e.touches[0];
      return touch.radiusX <= 1 && touch.radiusY <= 1
    }
    function farAway(touch, other) {
      if (other.left == null) { return true }
      var dx = other.left - touch.left, dy = other.top - touch.top;
      return dx * dx + dy * dy > 20 * 20
    }
    on(d.scroller, "touchstart", function (e) {
      if (!signalDOMEvent(cm, e) && !isMouseLikeTouchEvent(e) && !clickInGutter(cm, e)) {
        d.input.ensurePolled();
        clearTimeout(touchFinished);
        var now = +new Date;
        d.activeTouch = {start: now, moved: false,
                         prev: now - prevTouch.end <= 300 ? prevTouch : null};
        if (e.touches.length == 1) {
          d.activeTouch.left = e.touches[0].pageX;
          d.activeTouch.top = e.touches[0].pageY;
        }
      }
    });
    on(d.scroller, "touchmove", function () {
      if (d.activeTouch) { d.activeTouch.moved = true; }
    });
    on(d.scroller, "touchend", function (e) {
      var touch = d.activeTouch;
      if (touch && !eventInWidget(d, e) && touch.left != null &&
          !touch.moved && new Date - touch.start < 300) {
        var pos = cm.coordsChar(d.activeTouch, "page"), range;
        if (!touch.prev || farAway(touch, touch.prev)) // Single tap
          { range = new Range(pos, pos); }
        else if (!touch.prev.prev || farAway(touch, touch.prev.prev)) // Double tap
          { range = cm.findWordAt(pos); }
        else // Triple tap
          { range = new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0))); }
        cm.setSelection(range.anchor, range.head);
        cm.focus();
        e_preventDefault(e);
      }
      finishTouch();
    });
    on(d.scroller, "touchcancel", finishTouch);

    // Sync scrolling between fake scrollbars and real scrollable
    // area, ensure viewport is updated when scrolling.
    on(d.scroller, "scroll", function () {
      if (d.scroller.clientHeight) {
        updateScrollTop(cm, d.scroller.scrollTop);
        setScrollLeft(cm, d.scroller.scrollLeft, true);
        signal(cm, "scroll", cm);
      }
    });

    // Listen to wheel events in order to try and update the viewport on time.
    on(d.scroller, "mousewheel", function (e) { return onScrollWheel(cm, e); });
    on(d.scroller, "DOMMouseScroll", function (e) { return onScrollWheel(cm, e); });

    // Prevent wrapper from ever scrolling
    on(d.wrapper, "scroll", function () { return d.wrapper.scrollTop = d.wrapper.scrollLeft = 0; });

    d.dragFunctions = {
      enter: function (e) {if (!signalDOMEvent(cm, e)) { e_stop(e); }},
      over: function (e) {if (!signalDOMEvent(cm, e)) { onDragOver(cm, e); e_stop(e); }},
      start: function (e) { return onDragStart(cm, e); },
      drop: operation(cm, onDrop),
      leave: function (e) {if (!signalDOMEvent(cm, e)) { clearDragCursor(cm); }}
    };

    var inp = d.input.getField();
    on(inp, "keyup", function (e) { return onKeyUp.call(cm, e); });
    on(inp, "keydown", operation(cm, onKeyDown));
    on(inp, "keypress", operation(cm, onKeyPress));
    on(inp, "focus", function (e) { return onFocus(cm, e); });
    on(inp, "blur", function (e) { return onBlur(cm, e); });
  }

  var initHooks = [];
  CodeMirror.defineInitHook = function (f) { return initHooks.push(f); };

  // Indent the given line. The how parameter can be "smart",
  // "add"/null, "subtract", or "prev". When aggressive is false
  // (typically set to true for forced single-line indents), empty
  // lines are not indented, and places where the mode returns Pass
  // are left alone.
  function indentLine(cm, n, how, aggressive) {
    var doc = cm.doc, state;
    if (how == null) { how = "add"; }
    if (how == "smart") {
      // Fall back to "prev" when the mode doesn't have an indentation
      // method.
      if (!doc.mode.indent) { how = "prev"; }
      else { state = getContextBefore(cm, n).state; }
    }

    var tabSize = cm.options.tabSize;
    var line = getLine(doc, n), curSpace = countColumn(line.text, null, tabSize);
    if (line.stateAfter) { line.stateAfter = null; }
    var curSpaceString = line.text.match(/^\s*/)[0], indentation;
    if (!aggressive && !/\S/.test(line.text)) {
      indentation = 0;
      how = "not";
    } else if (how == "smart") {
      indentation = doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text);
      if (indentation == Pass || indentation > 150) {
        if (!aggressive) { return }
        how = "prev";
      }
    }
    if (how == "prev") {
      if (n > doc.first) { indentation = countColumn(getLine(doc, n-1).text, null, tabSize); }
      else { indentation = 0; }
    } else if (how == "add") {
      indentation = curSpace + cm.options.indentUnit;
    } else if (how == "subtract") {
      indentation = curSpace - cm.options.indentUnit;
    } else if (typeof how == "number") {
      indentation = curSpace + how;
    }
    indentation = Math.max(0, indentation);

    var indentString = "", pos = 0;
    if (cm.options.indentWithTabs)
      { for (var i = Math.floor(indentation / tabSize); i; --i) {pos += tabSize; indentString += "\t";} }
    if (pos < indentation) { indentString += spaceStr(indentation - pos); }

    if (indentString != curSpaceString) {
      replaceRange(doc, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input");
      line.stateAfter = null;
      return true
    } else {
      // Ensure that, if the cursor was in the whitespace at the start
      // of the line, it is moved to the end of that space.
      for (var i$1 = 0; i$1 < doc.sel.ranges.length; i$1++) {
        var range = doc.sel.ranges[i$1];
        if (range.head.line == n && range.head.ch < curSpaceString.length) {
          var pos$1 = Pos(n, curSpaceString.length);
          replaceOneSelection(doc, i$1, new Range(pos$1, pos$1));
          break
        }
      }
    }
  }

  // This will be set to a {lineWise: bool, text: [string]} object, so
  // that, when pasting, we know what kind of selections the copied
  // text was made out of.
  var lastCopied = null;

  function setLastCopied(newLastCopied) {
    lastCopied = newLastCopied;
  }

  function applyTextInput(cm, inserted, deleted, sel, origin) {
    var doc = cm.doc;
    cm.display.shift = false;
    if (!sel) { sel = doc.sel; }

    var paste = cm.state.pasteIncoming || origin == "paste";
    var textLines = splitLinesAuto(inserted), multiPaste = null;
    // When pasting N lines into N selections, insert one line per selection
    if (paste && sel.ranges.length > 1) {
      if (lastCopied && lastCopied.text.join("\n") == inserted) {
        if (sel.ranges.length % lastCopied.text.length == 0) {
          multiPaste = [];
          for (var i = 0; i < lastCopied.text.length; i++)
            { multiPaste.push(doc.splitLines(lastCopied.text[i])); }
        }
      } else if (textLines.length == sel.ranges.length && cm.options.pasteLinesPerSelection) {
        multiPaste = map(textLines, function (l) { return [l]; });
      }
    }

    var updateInput = cm.curOp.updateInput;
    // Normal behavior is to insert the new text into every selection
    for (var i$1 = sel.ranges.length - 1; i$1 >= 0; i$1--) {
      var range$$1 = sel.ranges[i$1];
      var from = range$$1.from(), to = range$$1.to();
      if (range$$1.empty()) {
        if (deleted && deleted > 0) // Handle deletion
          { from = Pos(from.line, from.ch - deleted); }
        else if (cm.state.overwrite && !paste) // Handle overwrite
          { to = Pos(to.line, Math.min(getLine(doc, to.line).text.length, to.ch + lst(textLines).length)); }
        else if (paste && lastCopied && lastCopied.lineWise && lastCopied.text.join("\n") == inserted)
          { from = to = Pos(from.line, 0); }
      }
      var changeEvent = {from: from, to: to, text: multiPaste ? multiPaste[i$1 % multiPaste.length] : textLines,
                         origin: origin || (paste ? "paste" : cm.state.cutIncoming ? "cut" : "+input")};
      makeChange(cm.doc, changeEvent);
      signalLater(cm, "inputRead", cm, changeEvent);
    }
    if (inserted && !paste)
      { triggerElectric(cm, inserted); }

    ensureCursorVisible(cm);
    if (cm.curOp.updateInput < 2) { cm.curOp.updateInput = updateInput; }
    cm.curOp.typing = true;
    cm.state.pasteIncoming = cm.state.cutIncoming = false;
  }

  function handlePaste(e, cm) {
    var pasted = e.clipboardData && e.clipboardData.getData("Text");
    if (pasted) {
      e.preventDefault();
      if (!cm.isReadOnly() && !cm.options.disableInput)
        { runInOp(cm, function () { return applyTextInput(cm, pasted, 0, null, "paste"); }); }
      return true
    }
  }

  function triggerElectric(cm, inserted) {
    // When an 'electric' character is inserted, immediately trigger a reindent
    if (!cm.options.electricChars || !cm.options.smartIndent) { return }
    var sel = cm.doc.sel;

    for (var i = sel.ranges.length - 1; i >= 0; i--) {
      var range$$1 = sel.ranges[i];
      if (range$$1.head.ch > 100 || (i && sel.ranges[i - 1].head.line == range$$1.head.line)) { continue }
      var mode = cm.getModeAt(range$$1.head);
      var indented = false;
      if (mode.electricChars) {
        for (var j = 0; j < mode.electricChars.length; j++)
          { if (inserted.indexOf(mode.electricChars.charAt(j)) > -1) {
            indented = indentLine(cm, range$$1.head.line, "smart");
            break
          } }
      } else if (mode.electricInput) {
        if (mode.electricInput.test(getLine(cm.doc, range$$1.head.line).text.slice(0, range$$1.head.ch)))
          { indented = indentLine(cm, range$$1.head.line, "smart"); }
      }
      if (indented) { signalLater(cm, "electricInput", cm, range$$1.head.line); }
    }
  }

  function copyableRanges(cm) {
    var text = [], ranges = [];
    for (var i = 0; i < cm.doc.sel.ranges.length; i++) {
      var line = cm.doc.sel.ranges[i].head.line;
      var lineRange = {anchor: Pos(line, 0), head: Pos(line + 1, 0)};
      ranges.push(lineRange);
      text.push(cm.getRange(lineRange.anchor, lineRange.head));
    }
    return {text: text, ranges: ranges}
  }

  function disableBrowserMagic(field, spellcheck) {
    field.setAttribute("autocorrect", "off");
    field.setAttribute("autocapitalize", "off");
    field.setAttribute("spellcheck", !!spellcheck);
  }

  function hiddenTextarea() {
    var te = elt("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none");
    var div = elt("div", [te], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
    // The textarea is kept positioned near the cursor to prevent the
    // fact that it'll be scrolled into view on input from scrolling
    // our fake cursor out of view. On webkit, when wrap=off, paste is
    // very slow. So make the area wide instead.
    if (webkit) { te.style.width = "1000px"; }
    else { te.setAttribute("wrap", "off"); }
    // If border: 0; -- iOS fails to open keyboard (issue #1287)
    if (ios) { te.style.border = "1px solid black"; }
    disableBrowserMagic(te);
    return div
  }

  // The publicly visible API. Note that methodOp(f) means
  // 'wrap f in an operation, performed on its `this` parameter'.

  // This is not the complete set of editor methods. Most of the
  // methods defined on the Doc type are also injected into
  // CodeMirror.prototype, for backwards compatibility and
  // convenience.

  function addEditorMethods(CodeMirror) {
    var optionHandlers = CodeMirror.optionHandlers;

    var helpers = CodeMirror.helpers = {};

    CodeMirror.prototype = {
      constructor: CodeMirror,
      focus: function(){window.focus(); this.display.input.focus();},

      setOption: function(option, value) {
        var options = this.options, old = options[option];
        if (options[option] == value && option != "mode") { return }
        options[option] = value;
        if (optionHandlers.hasOwnProperty(option))
          { operation(this, optionHandlers[option])(this, value, old); }
        signal(this, "optionChange", this, option);
      },

      getOption: function(option) {return this.options[option]},
      getDoc: function() {return this.doc},

      addKeyMap: function(map$$1, bottom) {
        this.state.keyMaps[bottom ? "push" : "unshift"](getKeyMap(map$$1));
      },
      removeKeyMap: function(map$$1) {
        var maps = this.state.keyMaps;
        for (var i = 0; i < maps.length; ++i)
          { if (maps[i] == map$$1 || maps[i].name == map$$1) {
            maps.splice(i, 1);
            return true
          } }
      },

      addOverlay: methodOp(function(spec, options) {
        var mode = spec.token ? spec : CodeMirror.getMode(this.options, spec);
        if (mode.startState) { throw new Error("Overlays may not be stateful.") }
        insertSorted(this.state.overlays,
                     {mode: mode, modeSpec: spec, opaque: options && options.opaque,
                      priority: (options && options.priority) || 0},
                     function (overlay) { return overlay.priority; });
        this.state.modeGen++;
        regChange(this);
      }),
      removeOverlay: methodOp(function(spec) {
        var this$1 = this;

        var overlays = this.state.overlays;
        for (var i = 0; i < overlays.length; ++i) {
          var cur = overlays[i].modeSpec;
          if (cur == spec || typeof spec == "string" && cur.name == spec) {
            overlays.splice(i, 1);
            this$1.state.modeGen++;
            regChange(this$1);
            return
          }
        }
      }),

      indentLine: methodOp(function(n, dir, aggressive) {
        if (typeof dir != "string" && typeof dir != "number") {
          if (dir == null) { dir = this.options.smartIndent ? "smart" : "prev"; }
          else { dir = dir ? "add" : "subtract"; }
        }
        if (isLine(this.doc, n)) { indentLine(this, n, dir, aggressive); }
      }),
      indentSelection: methodOp(function(how) {
        var this$1 = this;

        var ranges = this.doc.sel.ranges, end = -1;
        for (var i = 0; i < ranges.length; i++) {
          var range$$1 = ranges[i];
          if (!range$$1.empty()) {
            var from = range$$1.from(), to = range$$1.to();
            var start = Math.max(end, from.line);
            end = Math.min(this$1.lastLine(), to.line - (to.ch ? 0 : 1)) + 1;
            for (var j = start; j < end; ++j)
              { indentLine(this$1, j, how); }
            var newRanges = this$1.doc.sel.ranges;
            if (from.ch == 0 && ranges.length == newRanges.length && newRanges[i].from().ch > 0)
              { replaceOneSelection(this$1.doc, i, new Range(from, newRanges[i].to()), sel_dontScroll); }
          } else if (range$$1.head.line > end) {
            indentLine(this$1, range$$1.head.line, how, true);
            end = range$$1.head.line;
            if (i == this$1.doc.sel.primIndex) { ensureCursorVisible(this$1); }
          }
        }
      }),

      // Fetch the parser token for a given character. Useful for hacks
      // that want to inspect the mode state (say, for completion).
      getTokenAt: function(pos, precise) {
        return takeToken(this, pos, precise)
      },

      getLineTokens: function(line, precise) {
        return takeToken(this, Pos(line), precise, true)
      },

      getTokenTypeAt: function(pos) {
        pos = clipPos(this.doc, pos);
        var styles = getLineStyles(this, getLine(this.doc, pos.line));
        var before = 0, after = (styles.length - 1) / 2, ch = pos.ch;
        var type;
        if (ch == 0) { type = styles[2]; }
        else { for (;;) {
          var mid = (before + after) >> 1;
          if ((mid ? styles[mid * 2 - 1] : 0) >= ch) { after = mid; }
          else if (styles[mid * 2 + 1] < ch) { before = mid + 1; }
          else { type = styles[mid * 2 + 2]; break }
        } }
        var cut = type ? type.indexOf("overlay ") : -1;
        return cut < 0 ? type : cut == 0 ? null : type.slice(0, cut - 1)
      },

      getModeAt: function(pos) {
        var mode = this.doc.mode;
        if (!mode.innerMode) { return mode }
        return CodeMirror.innerMode(mode, this.getTokenAt(pos).state).mode
      },

      getHelper: function(pos, type) {
        return this.getHelpers(pos, type)[0]
      },

      getHelpers: function(pos, type) {
        var this$1 = this;

        var found = [];
        if (!helpers.hasOwnProperty(type)) { return found }
        var help = helpers[type], mode = this.getModeAt(pos);
        if (typeof mode[type] == "string") {
          if (help[mode[type]]) { found.push(help[mode[type]]); }
        } else if (mode[type]) {
          for (var i = 0; i < mode[type].length; i++) {
            var val = help[mode[type][i]];
            if (val) { found.push(val); }
          }
        } else if (mode.helperType && help[mode.helperType]) {
          found.push(help[mode.helperType]);
        } else if (help[mode.name]) {
          found.push(help[mode.name]);
        }
        for (var i$1 = 0; i$1 < help._global.length; i$1++) {
          var cur = help._global[i$1];
          if (cur.pred(mode, this$1) && indexOf(found, cur.val) == -1)
            { found.push(cur.val); }
        }
        return found
      },

      getStateAfter: function(line, precise) {
        var doc = this.doc;
        line = clipLine(doc, line == null ? doc.first + doc.size - 1: line);
        return getContextBefore(this, line + 1, precise).state
      },

      cursorCoords: function(start, mode) {
        var pos, range$$1 = this.doc.sel.primary();
        if (start == null) { pos = range$$1.head; }
        else if (typeof start == "object") { pos = clipPos(this.doc, start); }
        else { pos = start ? range$$1.from() : range$$1.to(); }
        return cursorCoords(this, pos, mode || "page")
      },

      charCoords: function(pos, mode) {
        return charCoords(this, clipPos(this.doc, pos), mode || "page")
      },

      coordsChar: function(coords, mode) {
        coords = fromCoordSystem(this, coords, mode || "page");
        return coordsChar(this, coords.left, coords.top)
      },

      lineAtHeight: function(height, mode) {
        height = fromCoordSystem(this, {top: height, left: 0}, mode || "page").top;
        return lineAtHeight(this.doc, height + this.display.viewOffset)
      },
      heightAtLine: function(line, mode, includeWidgets) {
        var end = false, lineObj;
        if (typeof line == "number") {
          var last = this.doc.first + this.doc.size - 1;
          if (line < this.doc.first) { line = this.doc.first; }
          else if (line > last) { line = last; end = true; }
          lineObj = getLine(this.doc, line);
        } else {
          lineObj = line;
        }
        return intoCoordSystem(this, lineObj, {top: 0, left: 0}, mode || "page", includeWidgets || end).top +
          (end ? this.doc.height - heightAtLine(lineObj) : 0)
      },

      defaultTextHeight: function() { return textHeight(this.display) },
      defaultCharWidth: function() { return charWidth(this.display) },

      getViewport: function() { return {from: this.display.viewFrom, to: this.display.viewTo}},

      addWidget: function(pos, node, scroll, vert, horiz) {
        var display = this.display;
        pos = cursorCoords(this, clipPos(this.doc, pos));
        var top = pos.bottom, left = pos.left;
        node.style.position = "absolute";
        node.setAttribute("cm-ignore-events", "true");
        this.display.input.setUneditable(node);
        display.sizer.appendChild(node);
        if (vert == "over") {
          top = pos.top;
        } else if (vert == "above" || vert == "near") {
          var vspace = Math.max(display.wrapper.clientHeight, this.doc.height),
          hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth);
          // Default to positioning above (if specified and possible); otherwise default to positioning below
          if ((vert == 'above' || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight)
            { top = pos.top - node.offsetHeight; }
          else if (pos.bottom + node.offsetHeight <= vspace)
            { top = pos.bottom; }
          if (left + node.offsetWidth > hspace)
            { left = hspace - node.offsetWidth; }
        }
        node.style.top = top + "px";
        node.style.left = node.style.right = "";
        if (horiz == "right") {
          left = display.sizer.clientWidth - node.offsetWidth;
          node.style.right = "0px";
        } else {
          if (horiz == "left") { left = 0; }
          else if (horiz == "middle") { left = (display.sizer.clientWidth - node.offsetWidth) / 2; }
          node.style.left = left + "px";
        }
        if (scroll)
          { scrollIntoView(this, {left: left, top: top, right: left + node.offsetWidth, bottom: top + node.offsetHeight}); }
      },

      triggerOnKeyDown: methodOp(onKeyDown),
      triggerOnKeyPress: methodOp(onKeyPress),
      triggerOnKeyUp: onKeyUp,
      triggerOnMouseDown: methodOp(onMouseDown),

      execCommand: function(cmd) {
        if (commands.hasOwnProperty(cmd))
          { return commands[cmd].call(null, this) }
      },

      triggerElectric: methodOp(function(text) { triggerElectric(this, text); }),

      findPosH: function(from, amount, unit, visually) {
        var this$1 = this;

        var dir = 1;
        if (amount < 0) { dir = -1; amount = -amount; }
        var cur = clipPos(this.doc, from);
        for (var i = 0; i < amount; ++i) {
          cur = findPosH(this$1.doc, cur, dir, unit, visually);
          if (cur.hitSide) { break }
        }
        return cur
      },

      moveH: methodOp(function(dir, unit) {
        var this$1 = this;

        this.extendSelectionsBy(function (range$$1) {
          if (this$1.display.shift || this$1.doc.extend || range$$1.empty())
            { return findPosH(this$1.doc, range$$1.head, dir, unit, this$1.options.rtlMoveVisually) }
          else
            { return dir < 0 ? range$$1.from() : range$$1.to() }
        }, sel_move);
      }),

      deleteH: methodOp(function(dir, unit) {
        var sel = this.doc.sel, doc = this.doc;
        if (sel.somethingSelected())
          { doc.replaceSelection("", null, "+delete"); }
        else
          { deleteNearSelection(this, function (range$$1) {
            var other = findPosH(doc, range$$1.head, dir, unit, false);
            return dir < 0 ? {from: other, to: range$$1.head} : {from: range$$1.head, to: other}
          }); }
      }),

      findPosV: function(from, amount, unit, goalColumn) {
        var this$1 = this;

        var dir = 1, x = goalColumn;
        if (amount < 0) { dir = -1; amount = -amount; }
        var cur = clipPos(this.doc, from);
        for (var i = 0; i < amount; ++i) {
          var coords = cursorCoords(this$1, cur, "div");
          if (x == null) { x = coords.left; }
          else { coords.left = x; }
          cur = findPosV(this$1, coords, dir, unit);
          if (cur.hitSide) { break }
        }
        return cur
      },

      moveV: methodOp(function(dir, unit) {
        var this$1 = this;

        var doc = this.doc, goals = [];
        var collapse = !this.display.shift && !doc.extend && doc.sel.somethingSelected();
        doc.extendSelectionsBy(function (range$$1) {
          if (collapse)
            { return dir < 0 ? range$$1.from() : range$$1.to() }
          var headPos = cursorCoords(this$1, range$$1.head, "div");
          if (range$$1.goalColumn != null) { headPos.left = range$$1.goalColumn; }
          goals.push(headPos.left);
          var pos = findPosV(this$1, headPos, dir, unit);
          if (unit == "page" && range$$1 == doc.sel.primary())
            { addToScrollTop(this$1, charCoords(this$1, pos, "div").top - headPos.top); }
          return pos
        }, sel_move);
        if (goals.length) { for (var i = 0; i < doc.sel.ranges.length; i++)
          { doc.sel.ranges[i].goalColumn = goals[i]; } }
      }),

      // Find the word at the given position (as returned by coordsChar).
      findWordAt: function(pos) {
        var doc = this.doc, line = getLine(doc, pos.line).text;
        var start = pos.ch, end = pos.ch;
        if (line) {
          var helper = this.getHelper(pos, "wordChars");
          if ((pos.sticky == "before" || end == line.length) && start) { --start; } else { ++end; }
          var startChar = line.charAt(start);
          var check = isWordChar(startChar, helper)
            ? function (ch) { return isWordChar(ch, helper); }
            : /\s/.test(startChar) ? function (ch) { return /\s/.test(ch); }
            : function (ch) { return (!/\s/.test(ch) && !isWordChar(ch)); };
          while (start > 0 && check(line.charAt(start - 1))) { --start; }
          while (end < line.length && check(line.charAt(end))) { ++end; }
        }
        return new Range(Pos(pos.line, start), Pos(pos.line, end))
      },

      toggleOverwrite: function(value) {
        if (value != null && value == this.state.overwrite) { return }
        if (this.state.overwrite = !this.state.overwrite)
          { addClass(this.display.cursorDiv, "CodeMirror-overwrite"); }
        else
          { rmClass(this.display.cursorDiv, "CodeMirror-overwrite"); }

        signal(this, "overwriteToggle", this, this.state.overwrite);
      },
      hasFocus: function() { return this.display.input.getField() == activeElt() },
      isReadOnly: function() { return !!(this.options.readOnly || this.doc.cantEdit) },

      scrollTo: methodOp(function (x, y) { scrollToCoords(this, x, y); }),
      getScrollInfo: function() {
        var scroller = this.display.scroller;
        return {left: scroller.scrollLeft, top: scroller.scrollTop,
                height: scroller.scrollHeight - scrollGap(this) - this.display.barHeight,
                width: scroller.scrollWidth - scrollGap(this) - this.display.barWidth,
                clientHeight: displayHeight(this), clientWidth: displayWidth(this)}
      },

      scrollIntoView: methodOp(function(range$$1, margin) {
        if (range$$1 == null) {
          range$$1 = {from: this.doc.sel.primary().head, to: null};
          if (margin == null) { margin = this.options.cursorScrollMargin; }
        } else if (typeof range$$1 == "number") {
          range$$1 = {from: Pos(range$$1, 0), to: null};
        } else if (range$$1.from == null) {
          range$$1 = {from: range$$1, to: null};
        }
        if (!range$$1.to) { range$$1.to = range$$1.from; }
        range$$1.margin = margin || 0;

        if (range$$1.from.line != null) {
          scrollToRange(this, range$$1);
        } else {
          scrollToCoordsRange(this, range$$1.from, range$$1.to, range$$1.margin);
        }
      }),

      setSize: methodOp(function(width, height) {
        var this$1 = this;

        var interpret = function (val) { return typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val; };
        if (width != null) { this.display.wrapper.style.width = interpret(width); }
        if (height != null) { this.display.wrapper.style.height = interpret(height); }
        if (this.options.lineWrapping) { clearLineMeasurementCache(this); }
        var lineNo$$1 = this.display.viewFrom;
        this.doc.iter(lineNo$$1, this.display.viewTo, function (line) {
          if (line.widgets) { for (var i = 0; i < line.widgets.length; i++)
            { if (line.widgets[i].noHScroll) { regLineChange(this$1, lineNo$$1, "widget"); break } } }
          ++lineNo$$1;
        });
        this.curOp.forceUpdate = true;
        signal(this, "refresh", this);
      }),

      operation: function(f){return runInOp(this, f)},
      startOperation: function(){return startOperation(this)},
      endOperation: function(){return endOperation(this)},

      refresh: methodOp(function() {
        var oldHeight = this.display.cachedTextHeight;
        regChange(this);
        this.curOp.forceUpdate = true;
        clearCaches(this);
        scrollToCoords(this, this.doc.scrollLeft, this.doc.scrollTop);
        updateGutterSpace(this);
        if (oldHeight == null || Math.abs(oldHeight - textHeight(this.display)) > .5)
          { estimateLineHeights(this); }
        signal(this, "refresh", this);
      }),

      swapDoc: methodOp(function(doc) {
        var old = this.doc;
        old.cm = null;
        attachDoc(this, doc);
        clearCaches(this);
        this.display.input.reset();
        scrollToCoords(this, doc.scrollLeft, doc.scrollTop);
        this.curOp.forceScroll = true;
        signalLater(this, "swapDoc", this, old);
        return old
      }),

      phrase: function(phraseText) {
        var phrases = this.options.phrases;
        return phrases && Object.prototype.hasOwnProperty.call(phrases, phraseText) ? phrases[phraseText] : phraseText
      },

      getInputField: function(){return this.display.input.getField()},
      getWrapperElement: function(){return this.display.wrapper},
      getScrollerElement: function(){return this.display.scroller},
      getGutterElement: function(){return this.display.gutters}
    };
    eventMixin(CodeMirror);

    CodeMirror.registerHelper = function(type, name, value) {
      if (!helpers.hasOwnProperty(type)) { helpers[type] = CodeMirror[type] = {_global: []}; }
      helpers[type][name] = value;
    };
    CodeMirror.registerGlobalHelper = function(type, name, predicate, value) {
      CodeMirror.registerHelper(type, name, value);
      helpers[type]._global.push({pred: predicate, val: value});
    };
  }

  // Used for horizontal relative motion. Dir is -1 or 1 (left or
  // right), unit can be "char", "column" (like char, but doesn't
  // cross line boundaries), "word" (across next word), or "group" (to
  // the start of next group of word or non-word-non-whitespace
  // chars). The visually param controls whether, in right-to-left
  // text, direction 1 means to move towards the next index in the
  // string, or towards the character to the right of the current
  // position. The resulting position will have a hitSide=true
  // property if it reached the end of the document.
  function findPosH(doc, pos, dir, unit, visually) {
    var oldPos = pos;
    var origDir = dir;
    var lineObj = getLine(doc, pos.line);
    function findNextLine() {
      var l = pos.line + dir;
      if (l < doc.first || l >= doc.first + doc.size) { return false }
      pos = new Pos(l, pos.ch, pos.sticky);
      return lineObj = getLine(doc, l)
    }
    function moveOnce(boundToLine) {
      var next;
      if (visually) {
        next = moveVisually(doc.cm, lineObj, pos, dir);
      } else {
        next = moveLogically(lineObj, pos, dir);
      }
      if (next == null) {
        if (!boundToLine && findNextLine())
          { pos = endOfLine(visually, doc.cm, lineObj, pos.line, dir); }
        else
          { return false }
      } else {
        pos = next;
      }
      return true
    }

    if (unit == "char") {
      moveOnce();
    } else if (unit == "column") {
      moveOnce(true);
    } else if (unit == "word" || unit == "group") {
      var sawType = null, group = unit == "group";
      var helper = doc.cm && doc.cm.getHelper(pos, "wordChars");
      for (var first = true;; first = false) {
        if (dir < 0 && !moveOnce(!first)) { break }
        var cur = lineObj.text.charAt(pos.ch) || "\n";
        var type = isWordChar(cur, helper) ? "w"
          : group && cur == "\n" ? "n"
          : !group || /\s/.test(cur) ? null
          : "p";
        if (group && !first && !type) { type = "s"; }
        if (sawType && sawType != type) {
          if (dir < 0) {dir = 1; moveOnce(); pos.sticky = "after";}
          break
        }

        if (type) { sawType = type; }
        if (dir > 0 && !moveOnce(!first)) { break }
      }
    }
    var result = skipAtomic(doc, pos, oldPos, origDir, true);
    if (equalCursorPos(oldPos, result)) { result.hitSide = true; }
    return result
  }

  // For relative vertical movement. Dir may be -1 or 1. Unit can be
  // "page" or "line". The resulting position will have a hitSide=true
  // property if it reached the end of the document.
  function findPosV(cm, pos, dir, unit) {
    var doc = cm.doc, x = pos.left, y;
    if (unit == "page") {
      var pageSize = Math.min(cm.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
      var moveAmount = Math.max(pageSize - .5 * textHeight(cm.display), 3);
      y = (dir > 0 ? pos.bottom : pos.top) + dir * moveAmount;

    } else if (unit == "line") {
      y = dir > 0 ? pos.bottom + 3 : pos.top - 3;
    }
    var target;
    for (;;) {
      target = coordsChar(cm, x, y);
      if (!target.outside) { break }
      if (dir < 0 ? y <= 0 : y >= doc.height) { target.hitSide = true; break }
      y += dir * 5;
    }
    return target
  }

  // CONTENTEDITABLE INPUT STYLE

  var ContentEditableInput = function(cm) {
    this.cm = cm;
    this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null;
    this.polling = new Delayed();
    this.composing = null;
    this.gracePeriod = false;
    this.readDOMTimeout = null;
  };

  ContentEditableInput.prototype.init = function (display) {
      var this$1 = this;

    var input = this, cm = input.cm;
    var div = input.div = display.lineDiv;
    disableBrowserMagic(div, cm.options.spellcheck);

    on(div, "paste", function (e) {
      if (signalDOMEvent(cm, e) || handlePaste(e, cm)) { return }
      // IE doesn't fire input events, so we schedule a read for the pasted content in this way
      if (ie_version <= 11) { setTimeout(operation(cm, function () { return this$1.updateFromDOM(); }), 20); }
    });

    on(div, "compositionstart", function (e) {
      this$1.composing = {data: e.data, done: false};
    });
    on(div, "compositionupdate", function (e) {
      if (!this$1.composing) { this$1.composing = {data: e.data, done: false}; }
    });
    on(div, "compositionend", function (e) {
      if (this$1.composing) {
        if (e.data != this$1.composing.data) { this$1.readFromDOMSoon(); }
        this$1.composing.done = true;
      }
    });

    on(div, "touchstart", function () { return input.forceCompositionEnd(); });

    on(div, "input", function () {
      if (!this$1.composing) { this$1.readFromDOMSoon(); }
    });

    function onCopyCut(e) {
      if (signalDOMEvent(cm, e)) { return }
      if (cm.somethingSelected()) {
        setLastCopied({lineWise: false, text: cm.getSelections()});
        if (e.type == "cut") { cm.replaceSelection("", null, "cut"); }
      } else if (!cm.options.lineWiseCopyCut) {
        return
      } else {
        var ranges = copyableRanges(cm);
        setLastCopied({lineWise: true, text: ranges.text});
        if (e.type == "cut") {
          cm.operation(function () {
            cm.setSelections(ranges.ranges, 0, sel_dontScroll);
            cm.replaceSelection("", null, "cut");
          });
        }
      }
      if (e.clipboardData) {
        e.clipboardData.clearData();
        var content = lastCopied.text.join("\n");
        // iOS exposes the clipboard API, but seems to discard content inserted into it
        e.clipboardData.setData("Text", content);
        if (e.clipboardData.getData("Text") == content) {
          e.preventDefault();
          return
        }
      }
      // Old-fashioned briefly-focus-a-textarea hack
      var kludge = hiddenTextarea(), te = kludge.firstChild;
      cm.display.lineSpace.insertBefore(kludge, cm.display.lineSpace.firstChild);
      te.value = lastCopied.text.join("\n");
      var hadFocus = document.activeElement;
      selectInput(te);
      setTimeout(function () {
        cm.display.lineSpace.removeChild(kludge);
        hadFocus.focus();
        if (hadFocus == div) { input.showPrimarySelection(); }
      }, 50);
    }
    on(div, "copy", onCopyCut);
    on(div, "cut", onCopyCut);
  };

  ContentEditableInput.prototype.prepareSelection = function () {
    var result = prepareSelection(this.cm, false);
    result.focus = this.cm.state.focused;
    return result
  };

  ContentEditableInput.prototype.showSelection = function (info, takeFocus) {
    if (!info || !this.cm.display.view.length) { return }
    if (info.focus || takeFocus) { this.showPrimarySelection(); }
    this.showMultipleSelections(info);
  };

  ContentEditableInput.prototype.getSelection = function () {
    return this.cm.display.wrapper.ownerDocument.getSelection()
  };

  ContentEditableInput.prototype.showPrimarySelection = function () {
    var sel = this.getSelection(), cm = this.cm, prim = cm.doc.sel.primary();
    var from = prim.from(), to = prim.to();

    if (cm.display.viewTo == cm.display.viewFrom || from.line >= cm.display.viewTo || to.line < cm.display.viewFrom) {
      sel.removeAllRanges();
      return
    }

    var curAnchor = domToPos(cm, sel.anchorNode, sel.anchorOffset);
    var curFocus = domToPos(cm, sel.focusNode, sel.focusOffset);
    if (curAnchor && !curAnchor.bad && curFocus && !curFocus.bad &&
        cmp(minPos(curAnchor, curFocus), from) == 0 &&
        cmp(maxPos(curAnchor, curFocus), to) == 0)
      { return }

    var view = cm.display.view;
    var start = (from.line >= cm.display.viewFrom && posToDOM(cm, from)) ||
        {node: view[0].measure.map[2], offset: 0};
    var end = to.line < cm.display.viewTo && posToDOM(cm, to);
    if (!end) {
      var measure = view[view.length - 1].measure;
      var map$$1 = measure.maps ? measure.maps[measure.maps.length - 1] : measure.map;
      end = {node: map$$1[map$$1.length - 1], offset: map$$1[map$$1.length - 2] - map$$1[map$$1.length - 3]};
    }

    if (!start || !end) {
      sel.removeAllRanges();
      return
    }

    var old = sel.rangeCount && sel.getRangeAt(0), rng;
    try { rng = range(start.node, start.offset, end.offset, end.node); }
    catch(e) {} // Our model of the DOM might be outdated, in which case the range we try to set can be impossible
    if (rng) {
      if (!gecko && cm.state.focused) {
        sel.collapse(start.node, start.offset);
        if (!rng.collapsed) {
          sel.removeAllRanges();
          sel.addRange(rng);
        }
      } else {
        sel.removeAllRanges();
        sel.addRange(rng);
      }
      if (old && sel.anchorNode == null) { sel.addRange(old); }
      else if (gecko) { this.startGracePeriod(); }
    }
    this.rememberSelection();
  };

  ContentEditableInput.prototype.startGracePeriod = function () {
      var this$1 = this;

    clearTimeout(this.gracePeriod);
    this.gracePeriod = setTimeout(function () {
      this$1.gracePeriod = false;
      if (this$1.selectionChanged())
        { this$1.cm.operation(function () { return this$1.cm.curOp.selectionChanged = true; }); }
    }, 20);
  };

  ContentEditableInput.prototype.showMultipleSelections = function (info) {
    removeChildrenAndAdd(this.cm.display.cursorDiv, info.cursors);
    removeChildrenAndAdd(this.cm.display.selectionDiv, info.selection);
  };

  ContentEditableInput.prototype.rememberSelection = function () {
    var sel = this.getSelection();
    this.lastAnchorNode = sel.anchorNode; this.lastAnchorOffset = sel.anchorOffset;
    this.lastFocusNode = sel.focusNode; this.lastFocusOffset = sel.focusOffset;
  };

  ContentEditableInput.prototype.selectionInEditor = function () {
    var sel = this.getSelection();
    if (!sel.rangeCount) { return false }
    var node = sel.getRangeAt(0).commonAncestorContainer;
    return contains(this.div, node)
  };

  ContentEditableInput.prototype.focus = function () {
    if (this.cm.options.readOnly != "nocursor") {
      if (!this.selectionInEditor())
        { this.showSelection(this.prepareSelection(), true); }
      this.div.focus();
    }
  };
  ContentEditableInput.prototype.blur = function () { this.div.blur(); };
  ContentEditableInput.prototype.getField = function () { return this.div };

  ContentEditableInput.prototype.supportsTouch = function () { return true };

  ContentEditableInput.prototype.receivedFocus = function () {
    var input = this;
    if (this.selectionInEditor())
      { this.pollSelection(); }
    else
      { runInOp(this.cm, function () { return input.cm.curOp.selectionChanged = true; }); }

    function poll() {
      if (input.cm.state.focused) {
        input.pollSelection();
        input.polling.set(input.cm.options.pollInterval, poll);
      }
    }
    this.polling.set(this.cm.options.pollInterval, poll);
  };

  ContentEditableInput.prototype.selectionChanged = function () {
    var sel = this.getSelection();
    return sel.anchorNode != this.lastAnchorNode || sel.anchorOffset != this.lastAnchorOffset ||
      sel.focusNode != this.lastFocusNode || sel.focusOffset != this.lastFocusOffset
  };

  ContentEditableInput.prototype.pollSelection = function () {
    if (this.readDOMTimeout != null || this.gracePeriod || !this.selectionChanged()) { return }
    var sel = this.getSelection(), cm = this.cm;
    // On Android Chrome (version 56, at least), backspacing into an
    // uneditable block element will put the cursor in that element,
    // and then, because it's not editable, hide the virtual keyboard.
    // Because Android doesn't allow us to actually detect backspace
    // presses in a sane way, this code checks for when that happens
    // and simulates a backspace press in this case.
    if (android && chrome && this.cm.options.gutters.length && isInGutter(sel.anchorNode)) {
      this.cm.triggerOnKeyDown({type: "keydown", keyCode: 8, preventDefault: Math.abs});
      this.blur();
      this.focus();
      return
    }
    if (this.composing) { return }
    this.rememberSelection();
    var anchor = domToPos(cm, sel.anchorNode, sel.anchorOffset);
    var head = domToPos(cm, sel.focusNode, sel.focusOffset);
    if (anchor && head) { runInOp(cm, function () {
      setSelection(cm.doc, simpleSelection(anchor, head), sel_dontScroll);
      if (anchor.bad || head.bad) { cm.curOp.selectionChanged = true; }
    }); }
  };

  ContentEditableInput.prototype.pollContent = function () {
    if (this.readDOMTimeout != null) {
      clearTimeout(this.readDOMTimeout);
      this.readDOMTimeout = null;
    }

    var cm = this.cm, display = cm.display, sel = cm.doc.sel.primary();
    var from = sel.from(), to = sel.to();
    if (from.ch == 0 && from.line > cm.firstLine())
      { from = Pos(from.line - 1, getLine(cm.doc, from.line - 1).length); }
    if (to.ch == getLine(cm.doc, to.line).text.length && to.line < cm.lastLine())
      { to = Pos(to.line + 1, 0); }
    if (from.line < display.viewFrom || to.line > display.viewTo - 1) { return false }

    var fromIndex, fromLine, fromNode;
    if (from.line == display.viewFrom || (fromIndex = findViewIndex(cm, from.line)) == 0) {
      fromLine = lineNo(display.view[0].line);
      fromNode = display.view[0].node;
    } else {
      fromLine = lineNo(display.view[fromIndex].line);
      fromNode = display.view[fromIndex - 1].node.nextSibling;
    }
    var toIndex = findViewIndex(cm, to.line);
    var toLine, toNode;
    if (toIndex == display.view.length - 1) {
      toLine = display.viewTo - 1;
      toNode = display.lineDiv.lastChild;
    } else {
      toLine = lineNo(display.view[toIndex + 1].line) - 1;
      toNode = display.view[toIndex + 1].node.previousSibling;
    }

    if (!fromNode) { return false }
    var newText = cm.doc.splitLines(domTextBetween(cm, fromNode, toNode, fromLine, toLine));
    var oldText = getBetween(cm.doc, Pos(fromLine, 0), Pos(toLine, getLine(cm.doc, toLine).text.length));
    while (newText.length > 1 && oldText.length > 1) {
      if (lst(newText) == lst(oldText)) { newText.pop(); oldText.pop(); toLine--; }
      else if (newText[0] == oldText[0]) { newText.shift(); oldText.shift(); fromLine++; }
      else { break }
    }

    var cutFront = 0, cutEnd = 0;
    var newTop = newText[0], oldTop = oldText[0], maxCutFront = Math.min(newTop.length, oldTop.length);
    while (cutFront < maxCutFront && newTop.charCodeAt(cutFront) == oldTop.charCodeAt(cutFront))
      { ++cutFront; }
    var newBot = lst(newText), oldBot = lst(oldText);
    var maxCutEnd = Math.min(newBot.length - (newText.length == 1 ? cutFront : 0),
                             oldBot.length - (oldText.length == 1 ? cutFront : 0));
    while (cutEnd < maxCutEnd &&
           newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1))
      { ++cutEnd; }
    // Try to move start of change to start of selection if ambiguous
    if (newText.length == 1 && oldText.length == 1 && fromLine == from.line) {
      while (cutFront && cutFront > from.ch &&
             newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1)) {
        cutFront--;
        cutEnd++;
      }
    }

    newText[newText.length - 1] = newBot.slice(0, newBot.length - cutEnd).replace(/^\u200b+/, "");
    newText[0] = newText[0].slice(cutFront).replace(/\u200b+$/, "");

    var chFrom = Pos(fromLine, cutFront);
    var chTo = Pos(toLine, oldText.length ? lst(oldText).length - cutEnd : 0);
    if (newText.length > 1 || newText[0] || cmp(chFrom, chTo)) {
      replaceRange(cm.doc, newText, chFrom, chTo, "+input");
      return true
    }
  };

  ContentEditableInput.prototype.ensurePolled = function () {
    this.forceCompositionEnd();
  };
  ContentEditableInput.prototype.reset = function () {
    this.forceCompositionEnd();
  };
  ContentEditableInput.prototype.forceCompositionEnd = function () {
    if (!this.composing) { return }
    clearTimeout(this.readDOMTimeout);
    this.composing = null;
    this.updateFromDOM();
    this.div.blur();
    this.div.focus();
  };
  ContentEditableInput.prototype.readFromDOMSoon = function () {
      var this$1 = this;

    if (this.readDOMTimeout != null) { return }
    this.readDOMTimeout = setTimeout(function () {
      this$1.readDOMTimeout = null;
      if (this$1.composing) {
        if (this$1.composing.done) { this$1.composing = null; }
        else { return }
      }
      this$1.updateFromDOM();
    }, 80);
  };

  ContentEditableInput.prototype.updateFromDOM = function () {
      var this$1 = this;

    if (this.cm.isReadOnly() || !this.pollContent())
      { runInOp(this.cm, function () { return regChange(this$1.cm); }); }
  };

  ContentEditableInput.prototype.setUneditable = function (node) {
    node.contentEditable = "false";
  };

  ContentEditableInput.prototype.onKeyPress = function (e) {
    if (e.charCode == 0 || this.composing) { return }
    e.preventDefault();
    if (!this.cm.isReadOnly())
      { operation(this.cm, applyTextInput)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0); }
  };

  ContentEditableInput.prototype.readOnlyChanged = function (val) {
    this.div.contentEditable = String(val != "nocursor");
  };

  ContentEditableInput.prototype.onContextMenu = function () {};
  ContentEditableInput.prototype.resetPosition = function () {};

  ContentEditableInput.prototype.needsContentAttribute = true;

  function posToDOM(cm, pos) {
    var view = findViewForLine(cm, pos.line);
    if (!view || view.hidden) { return null }
    var line = getLine(cm.doc, pos.line);
    var info = mapFromLineView(view, line, pos.line);

    var order = getOrder(line, cm.doc.direction), side = "left";
    if (order) {
      var partPos = getBidiPartAt(order, pos.ch);
      side = partPos % 2 ? "right" : "left";
    }
    var result = nodeAndOffsetInLineMap(info.map, pos.ch, side);
    result.offset = result.collapse == "right" ? result.end : result.start;
    return result
  }

  function isInGutter(node) {
    for (var scan = node; scan; scan = scan.parentNode)
      { if (/CodeMirror-gutter-wrapper/.test(scan.className)) { return true } }
    return false
  }

  function badPos(pos, bad) { if (bad) { pos.bad = true; } return pos }

  function domTextBetween(cm, from, to, fromLine, toLine) {
    var text = "", closing = false, lineSep = cm.doc.lineSeparator(), extraLinebreak = false;
    function recognizeMarker(id) { return function (marker) { return marker.id == id; } }
    function close() {
      if (closing) {
        text += lineSep;
        if (extraLinebreak) { text += lineSep; }
        closing = extraLinebreak = false;
      }
    }
    function addText(str) {
      if (str) {
        close();
        text += str;
      }
    }
    function walk(node) {
      if (node.nodeType == 1) {
        var cmText = node.getAttribute("cm-text");
        if (cmText) {
          addText(cmText);
          return
        }
        var markerID = node.getAttribute("cm-marker"), range$$1;
        if (markerID) {
          var found = cm.findMarks(Pos(fromLine, 0), Pos(toLine + 1, 0), recognizeMarker(+markerID));
          if (found.length && (range$$1 = found[0].find(0)))
            { addText(getBetween(cm.doc, range$$1.from, range$$1.to).join(lineSep)); }
          return
        }
        if (node.getAttribute("contenteditable") == "false") { return }
        var isBlock = /^(pre|div|p|li|table|br)$/i.test(node.nodeName);
        if (!/^br$/i.test(node.nodeName) && node.textContent.length == 0) { return }

        if (isBlock) { close(); }
        for (var i = 0; i < node.childNodes.length; i++)
          { walk(node.childNodes[i]); }

        if (/^(pre|p)$/i.test(node.nodeName)) { extraLinebreak = true; }
        if (isBlock) { closing = true; }
      } else if (node.nodeType == 3) {
        addText(node.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
      }
    }
    for (;;) {
      walk(from);
      if (from == to) { break }
      from = from.nextSibling;
      extraLinebreak = false;
    }
    return text
  }

  function domToPos(cm, node, offset) {
    var lineNode;
    if (node == cm.display.lineDiv) {
      lineNode = cm.display.lineDiv.childNodes[offset];
      if (!lineNode) { return badPos(cm.clipPos(Pos(cm.display.viewTo - 1)), true) }
      node = null; offset = 0;
    } else {
      for (lineNode = node;; lineNode = lineNode.parentNode) {
        if (!lineNode || lineNode == cm.display.lineDiv) { return null }
        if (lineNode.parentNode && lineNode.parentNode == cm.display.lineDiv) { break }
      }
    }
    for (var i = 0; i < cm.display.view.length; i++) {
      var lineView = cm.display.view[i];
      if (lineView.node == lineNode)
        { return locateNodeInLineView(lineView, node, offset) }
    }
  }

  function locateNodeInLineView(lineView, node, offset) {
    var wrapper = lineView.text.firstChild, bad = false;
    if (!node || !contains(wrapper, node)) { return badPos(Pos(lineNo(lineView.line), 0), true) }
    if (node == wrapper) {
      bad = true;
      node = wrapper.childNodes[offset];
      offset = 0;
      if (!node) {
        var line = lineView.rest ? lst(lineView.rest) : lineView.line;
        return badPos(Pos(lineNo(line), line.text.length), bad)
      }
    }

    var textNode = node.nodeType == 3 ? node : null, topNode = node;
    if (!textNode && node.childNodes.length == 1 && node.firstChild.nodeType == 3) {
      textNode = node.firstChild;
      if (offset) { offset = textNode.nodeValue.length; }
    }
    while (topNode.parentNode != wrapper) { topNode = topNode.parentNode; }
    var measure = lineView.measure, maps = measure.maps;

    function find(textNode, topNode, offset) {
      for (var i = -1; i < (maps ? maps.length : 0); i++) {
        var map$$1 = i < 0 ? measure.map : maps[i];
        for (var j = 0; j < map$$1.length; j += 3) {
          var curNode = map$$1[j + 2];
          if (curNode == textNode || curNode == topNode) {
            var line = lineNo(i < 0 ? lineView.line : lineView.rest[i]);
            var ch = map$$1[j] + offset;
            if (offset < 0 || curNode != textNode) { ch = map$$1[j + (offset ? 1 : 0)]; }
            return Pos(line, ch)
          }
        }
      }
    }
    var found = find(textNode, topNode, offset);
    if (found) { return badPos(found, bad) }

    // FIXME this is all really shaky. might handle the few cases it needs to handle, but likely to cause problems
    for (var after = topNode.nextSibling, dist = textNode ? textNode.nodeValue.length - offset : 0; after; after = after.nextSibling) {
      found = find(after, after.firstChild, 0);
      if (found)
        { return badPos(Pos(found.line, found.ch - dist), bad) }
      else
        { dist += after.textContent.length; }
    }
    for (var before = topNode.previousSibling, dist$1 = offset; before; before = before.previousSibling) {
      found = find(before, before.firstChild, -1);
      if (found)
        { return badPos(Pos(found.line, found.ch + dist$1), bad) }
      else
        { dist$1 += before.textContent.length; }
    }
  }

  // TEXTAREA INPUT STYLE

  var TextareaInput = function(cm) {
    this.cm = cm;
    // See input.poll and input.reset
    this.prevInput = "";

    // Flag that indicates whether we expect input to appear real soon
    // now (after some event like 'keypress' or 'input') and are
    // polling intensively.
    this.pollingFast = false;
    // Self-resetting timeout for the poller
    this.polling = new Delayed();
    // Used to work around IE issue with selection being forgotten when focus moves away from textarea
    this.hasSelection = false;
    this.composing = null;
  };

  TextareaInput.prototype.init = function (display) {
      var this$1 = this;

    var input = this, cm = this.cm;
    this.createField(display);
    var te = this.textarea;

    display.wrapper.insertBefore(this.wrapper, display.wrapper.firstChild);

    // Needed to hide big blue blinking cursor on Mobile Safari (doesn't seem to work in iOS 8 anymore)
    if (ios) { te.style.width = "0px"; }

    on(te, "input", function () {
      if (ie && ie_version >= 9 && this$1.hasSelection) { this$1.hasSelection = null; }
      input.poll();
    });

    on(te, "paste", function (e) {
      if (signalDOMEvent(cm, e) || handlePaste(e, cm)) { return }

      cm.state.pasteIncoming = true;
      input.fastPoll();
    });

    function prepareCopyCut(e) {
      if (signalDOMEvent(cm, e)) { return }
      if (cm.somethingSelected()) {
        setLastCopied({lineWise: false, text: cm.getSelections()});
      } else if (!cm.options.lineWiseCopyCut) {
        return
      } else {
        var ranges = copyableRanges(cm);
        setLastCopied({lineWise: true, text: ranges.text});
        if (e.type == "cut") {
          cm.setSelections(ranges.ranges, null, sel_dontScroll);
        } else {
          input.prevInput = "";
          te.value = ranges.text.join("\n");
          selectInput(te);
        }
      }
      if (e.type == "cut") { cm.state.cutIncoming = true; }
    }
    on(te, "cut", prepareCopyCut);
    on(te, "copy", prepareCopyCut);

    on(display.scroller, "paste", function (e) {
      if (eventInWidget(display, e) || signalDOMEvent(cm, e)) { return }
      cm.state.pasteIncoming = true;
      input.focus();
    });

    // Prevent normal selection in the editor (we handle our own)
    on(display.lineSpace, "selectstart", function (e) {
      if (!eventInWidget(display, e)) { e_preventDefault(e); }
    });

    on(te, "compositionstart", function () {
      var start = cm.getCursor("from");
      if (input.composing) { input.composing.range.clear(); }
      input.composing = {
        start: start,
        range: cm.markText(start, cm.getCursor("to"), {className: "CodeMirror-composing"})
      };
    });
    on(te, "compositionend", function () {
      if (input.composing) {
        input.poll();
        input.composing.range.clear();
        input.composing = null;
      }
    });
  };

  TextareaInput.prototype.createField = function (_display) {
    // Wraps and hides input textarea
    this.wrapper = hiddenTextarea();
    // The semihidden textarea that is focused when the editor is
    // focused, and receives input.
    this.textarea = this.wrapper.firstChild;
  };

  TextareaInput.prototype.prepareSelection = function () {
    // Redraw the selection and/or cursor
    var cm = this.cm, display = cm.display, doc = cm.doc;
    var result = prepareSelection(cm);

    // Move the hidden textarea near the cursor to prevent scrolling artifacts
    if (cm.options.moveInputWithCursor) {
      var headPos = cursorCoords(cm, doc.sel.primary().head, "div");
      var wrapOff = display.wrapper.getBoundingClientRect(), lineOff = display.lineDiv.getBoundingClientRect();
      result.teTop = Math.max(0, Math.min(display.wrapper.clientHeight - 10,
                                          headPos.top + lineOff.top - wrapOff.top));
      result.teLeft = Math.max(0, Math.min(display.wrapper.clientWidth - 10,
                                           headPos.left + lineOff.left - wrapOff.left));
    }

    return result
  };

  TextareaInput.prototype.showSelection = function (drawn) {
    var cm = this.cm, display = cm.display;
    removeChildrenAndAdd(display.cursorDiv, drawn.cursors);
    removeChildrenAndAdd(display.selectionDiv, drawn.selection);
    if (drawn.teTop != null) {
      this.wrapper.style.top = drawn.teTop + "px";
      this.wrapper.style.left = drawn.teLeft + "px";
    }
  };

  // Reset the input to correspond to the selection (or to be empty,
  // when not typing and nothing is selected)
  TextareaInput.prototype.reset = function (typing) {
    if (this.contextMenuPending || this.composing) { return }
    var cm = this.cm;
    if (cm.somethingSelected()) {
      this.prevInput = "";
      var content = cm.getSelection();
      this.textarea.value = content;
      if (cm.state.focused) { selectInput(this.textarea); }
      if (ie && ie_version >= 9) { this.hasSelection = content; }
    } else if (!typing) {
      this.prevInput = this.textarea.value = "";
      if (ie && ie_version >= 9) { this.hasSelection = null; }
    }
  };

  TextareaInput.prototype.getField = function () { return this.textarea };

  TextareaInput.prototype.supportsTouch = function () { return false };

  TextareaInput.prototype.focus = function () {
    if (this.cm.options.readOnly != "nocursor" && (!mobile || activeElt() != this.textarea)) {
      try { this.textarea.focus(); }
      catch (e) {} // IE8 will throw if the textarea is display: none or not in DOM
    }
  };

  TextareaInput.prototype.blur = function () { this.textarea.blur(); };

  TextareaInput.prototype.resetPosition = function () {
    this.wrapper.style.top = this.wrapper.style.left = 0;
  };

  TextareaInput.prototype.receivedFocus = function () { this.slowPoll(); };

  // Poll for input changes, using the normal rate of polling. This
  // runs as long as the editor is focused.
  TextareaInput.prototype.slowPoll = function () {
      var this$1 = this;

    if (this.pollingFast) { return }
    this.polling.set(this.cm.options.pollInterval, function () {
      this$1.poll();
      if (this$1.cm.state.focused) { this$1.slowPoll(); }
    });
  };

  // When an event has just come in that is likely to add or change
  // something in the input textarea, we poll faster, to ensure that
  // the change appears on the screen quickly.
  TextareaInput.prototype.fastPoll = function () {
    var missed = false, input = this;
    input.pollingFast = true;
    function p() {
      var changed = input.poll();
      if (!changed && !missed) {missed = true; input.polling.set(60, p);}
      else {input.pollingFast = false; input.slowPoll();}
    }
    input.polling.set(20, p);
  };

  // Read input from the textarea, and update the document to match.
  // When something is selected, it is present in the textarea, and
  // selected (unless it is huge, in which case a placeholder is
  // used). When nothing is selected, the cursor sits after previously
  // seen text (can be empty), which is stored in prevInput (we must
  // not reset the textarea when typing, because that breaks IME).
  TextareaInput.prototype.poll = function () {
      var this$1 = this;

    var cm = this.cm, input = this.textarea, prevInput = this.prevInput;
    // Since this is called a *lot*, try to bail out as cheaply as
    // possible when it is clear that nothing happened. hasSelection
    // will be the case when there is a lot of text in the textarea,
    // in which case reading its value would be expensive.
    if (this.contextMenuPending || !cm.state.focused ||
        (hasSelection(input) && !prevInput && !this.composing) ||
        cm.isReadOnly() || cm.options.disableInput || cm.state.keySeq)
      { return false }

    var text = input.value;
    // If nothing changed, bail.
    if (text == prevInput && !cm.somethingSelected()) { return false }
    // Work around nonsensical selection resetting in IE9/10, and
    // inexplicable appearance of private area unicode characters on
    // some key combos in Mac (#2689).
    if (ie && ie_version >= 9 && this.hasSelection === text ||
        mac && /[\uf700-\uf7ff]/.test(text)) {
      cm.display.input.reset();
      return false
    }

    if (cm.doc.sel == cm.display.selForContextMenu) {
      var first = text.charCodeAt(0);
      if (first == 0x200b && !prevInput) { prevInput = "\u200b"; }
      if (first == 0x21da) { this.reset(); return this.cm.execCommand("undo") }
    }
    // Find the part of the input that is actually new
    var same = 0, l = Math.min(prevInput.length, text.length);
    while (same < l && prevInput.charCodeAt(same) == text.charCodeAt(same)) { ++same; }

    runInOp(cm, function () {
      applyTextInput(cm, text.slice(same), prevInput.length - same,
                     null, this$1.composing ? "*compose" : null);

      // Don't leave long text in the textarea, since it makes further polling slow
      if (text.length > 1000 || text.indexOf("\n") > -1) { input.value = this$1.prevInput = ""; }
      else { this$1.prevInput = text; }

      if (this$1.composing) {
        this$1.composing.range.clear();
        this$1.composing.range = cm.markText(this$1.composing.start, cm.getCursor("to"),
                                           {className: "CodeMirror-composing"});
      }
    });
    return true
  };

  TextareaInput.prototype.ensurePolled = function () {
    if (this.pollingFast && this.poll()) { this.pollingFast = false; }
  };

  TextareaInput.prototype.onKeyPress = function () {
    if (ie && ie_version >= 9) { this.hasSelection = null; }
    this.fastPoll();
  };

  TextareaInput.prototype.onContextMenu = function (e) {
    var input = this, cm = input.cm, display = cm.display, te = input.textarea;
    if (input.contextMenuPending) { input.contextMenuPending(); }
    var pos = posFromMouse(cm, e), scrollPos = display.scroller.scrollTop;
    if (!pos || presto) { return } // Opera is difficult.

    // Reset the current text selection only if the click is done outside of the selection
    // and 'resetSelectionOnContextMenu' option is true.
    var reset = cm.options.resetSelectionOnContextMenu;
    if (reset && cm.doc.sel.contains(pos) == -1)
      { operation(cm, setSelection)(cm.doc, simpleSelection(pos), sel_dontScroll); }

    var oldCSS = te.style.cssText, oldWrapperCSS = input.wrapper.style.cssText;
    var wrapperBox = input.wrapper.offsetParent.getBoundingClientRect();
    input.wrapper.style.cssText = "position: static";
    te.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - wrapperBox.top - 5) + "px; left: " + (e.clientX - wrapperBox.left - 5) + "px;\n      z-index: 1000; background: " + (ie ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
    var oldScrollY;
    if (webkit) { oldScrollY = window.scrollY; } // Work around Chrome issue (#2712)
    display.input.focus();
    if (webkit) { window.scrollTo(null, oldScrollY); }
    display.input.reset();
    // Adds "Select all" to context menu in FF
    if (!cm.somethingSelected()) { te.value = input.prevInput = " "; }
    input.contextMenuPending = rehide;
    display.selForContextMenu = cm.doc.sel;
    clearTimeout(display.detectingSelectAll);

    // Select-all will be greyed out if there's nothing to select, so
    // this adds a zero-width space so that we can later check whether
    // it got selected.
    function prepareSelectAllHack() {
      if (te.selectionStart != null) {
        var selected = cm.somethingSelected();
        var extval = "\u200b" + (selected ? te.value : "");
        te.value = "\u21da"; // Used to catch context-menu undo
        te.value = extval;
        input.prevInput = selected ? "" : "\u200b";
        te.selectionStart = 1; te.selectionEnd = extval.length;
        // Re-set this, in case some other handler touched the
        // selection in the meantime.
        display.selForContextMenu = cm.doc.sel;
      }
    }
    function rehide() {
      if (input.contextMenuPending != rehide) { return }
      input.contextMenuPending = false;
      input.wrapper.style.cssText = oldWrapperCSS;
      te.style.cssText = oldCSS;
      if (ie && ie_version < 9) { display.scrollbars.setScrollTop(display.scroller.scrollTop = scrollPos); }

      // Try to detect the user choosing select-all
      if (te.selectionStart != null) {
        if (!ie || (ie && ie_version < 9)) { prepareSelectAllHack(); }
        var i = 0, poll = function () {
          if (display.selForContextMenu == cm.doc.sel && te.selectionStart == 0 &&
              te.selectionEnd > 0 && input.prevInput == "\u200b") {
            operation(cm, selectAll)(cm);
          } else if (i++ < 10) {
            display.detectingSelectAll = setTimeout(poll, 500);
          } else {
            display.selForContextMenu = null;
            display.input.reset();
          }
        };
        display.detectingSelectAll = setTimeout(poll, 200);
      }
    }

    if (ie && ie_version >= 9) { prepareSelectAllHack(); }
    if (captureRightClick) {
      e_stop(e);
      var mouseup = function () {
        off(window, "mouseup", mouseup);
        setTimeout(rehide, 20);
      };
      on(window, "mouseup", mouseup);
    } else {
      setTimeout(rehide, 50);
    }
  };

  TextareaInput.prototype.readOnlyChanged = function (val) {
    if (!val) { this.reset(); }
    this.textarea.disabled = val == "nocursor";
  };

  TextareaInput.prototype.setUneditable = function () {};

  TextareaInput.prototype.needsContentAttribute = false;

  function fromTextArea(textarea, options) {
    options = options ? copyObj(options) : {};
    options.value = textarea.value;
    if (!options.tabindex && textarea.tabIndex)
      { options.tabindex = textarea.tabIndex; }
    if (!options.placeholder && textarea.placeholder)
      { options.placeholder = textarea.placeholder; }
    // Set autofocus to true if this textarea is focused, or if it has
    // autofocus and no other element is focused.
    if (options.autofocus == null) {
      var hasFocus = activeElt();
      options.autofocus = hasFocus == textarea ||
        textarea.getAttribute("autofocus") != null && hasFocus == document.body;
    }

    function save() {textarea.value = cm.getValue();}

    var realSubmit;
    if (textarea.form) {
      on(textarea.form, "submit", save);
      // Deplorable hack to make the submit method do the right thing.
      if (!options.leaveSubmitMethodAlone) {
        var form = textarea.form;
        realSubmit = form.submit;
        try {
          var wrappedSubmit = form.submit = function () {
            save();
            form.submit = realSubmit;
            form.submit();
            form.submit = wrappedSubmit;
          };
        } catch(e) {}
      }
    }

    options.finishInit = function (cm) {
      cm.save = save;
      cm.getTextArea = function () { return textarea; };
      cm.toTextArea = function () {
        cm.toTextArea = isNaN; // Prevent this from being ran twice
        save();
        textarea.parentNode.removeChild(cm.getWrapperElement());
        textarea.style.display = "";
        if (textarea.form) {
          off(textarea.form, "submit", save);
          if (typeof textarea.form.submit == "function")
            { textarea.form.submit = realSubmit; }
        }
      };
    };

    textarea.style.display = "none";
    var cm = CodeMirror(function (node) { return textarea.parentNode.insertBefore(node, textarea.nextSibling); },
      options);
    return cm
  }

  function addLegacyProps(CodeMirror) {
    CodeMirror.off = off;
    CodeMirror.on = on;
    CodeMirror.wheelEventPixels = wheelEventPixels;
    CodeMirror.Doc = Doc;
    CodeMirror.splitLines = splitLinesAuto;
    CodeMirror.countColumn = countColumn;
    CodeMirror.findColumn = findColumn;
    CodeMirror.isWordChar = isWordCharBasic;
    CodeMirror.Pass = Pass;
    CodeMirror.signal = signal;
    CodeMirror.Line = Line;
    CodeMirror.changeEnd = changeEnd;
    CodeMirror.scrollbarModel = scrollbarModel;
    CodeMirror.Pos = Pos;
    CodeMirror.cmpPos = cmp;
    CodeMirror.modes = modes;
    CodeMirror.mimeModes = mimeModes;
    CodeMirror.resolveMode = resolveMode;
    CodeMirror.getMode = getMode;
    CodeMirror.modeExtensions = modeExtensions;
    CodeMirror.extendMode = extendMode;
    CodeMirror.copyState = copyState;
    CodeMirror.startState = startState;
    CodeMirror.innerMode = innerMode;
    CodeMirror.commands = commands;
    CodeMirror.keyMap = keyMap;
    CodeMirror.keyName = keyName;
    CodeMirror.isModifierKey = isModifierKey;
    CodeMirror.lookupKey = lookupKey;
    CodeMirror.normalizeKeyMap = normalizeKeyMap;
    CodeMirror.StringStream = StringStream;
    CodeMirror.SharedTextMarker = SharedTextMarker;
    CodeMirror.TextMarker = TextMarker;
    CodeMirror.LineWidget = LineWidget;
    CodeMirror.e_preventDefault = e_preventDefault;
    CodeMirror.e_stopPropagation = e_stopPropagation;
    CodeMirror.e_stop = e_stop;
    CodeMirror.addClass = addClass;
    CodeMirror.contains = contains;
    CodeMirror.rmClass = rmClass;
    CodeMirror.keyNames = keyNames;
  }

  // EDITOR CONSTRUCTOR

  defineOptions(CodeMirror);

  addEditorMethods(CodeMirror);

  // Set up methods on CodeMirror's prototype to redirect to the editor's document.
  var dontDelegate = "iter insert remove copy getEditor constructor".split(" ");
  for (var prop in Doc.prototype) { if (Doc.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0)
    { CodeMirror.prototype[prop] = (function(method) {
      return function() {return method.apply(this.doc, arguments)}
    })(Doc.prototype[prop]); } }

  eventMixin(Doc);
  CodeMirror.inputStyles = {"textarea": TextareaInput, "contenteditable": ContentEditableInput};

  // Extra arguments are stored as the mode's dependencies, which is
  // used by (legacy) mechanisms like loadmode.js to automatically
  // load a mode. (Preferred mechanism is the require/define calls.)
  CodeMirror.defineMode = function(name/*, mode, …*/) {
    if (!CodeMirror.defaults.mode && name != "null") { CodeMirror.defaults.mode = name; }
    defineMode.apply(this, arguments);
  };

  CodeMirror.defineMIME = defineMIME;

  // Minimal default mode.
  CodeMirror.defineMode("null", function () { return ({token: function (stream) { return stream.skipToEnd(); }}); });
  CodeMirror.defineMIME("text/plain", "null");

  // EXTENSIONS

  CodeMirror.defineExtension = function (name, func) {
    CodeMirror.prototype[name] = func;
  };
  CodeMirror.defineDocExtension = function (name, func) {
    Doc.prototype[name] = func;
  };

  CodeMirror.fromTextArea = fromTextArea;

  addLegacyProps(CodeMirror);

  CodeMirror.version = "5.42.2";

  return CodeMirror;

})));

;// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"), require("../xml/xml"), require("../javascript/javascript"), require("../css/css"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror", "../xml/xml", "../javascript/javascript", "../css/css"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

  var defaultTags = {
    script: [
      ["lang", /(javascript|babel)/i, "javascript"],
      ["type", /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i, "javascript"],
      ["type", /./, "text/plain"],
      [null, null, "javascript"]
    ],
    style:  [
      ["lang", /^css$/i, "css"],
      ["type", /^(text\/)?(x-)?(stylesheet|css)$/i, "css"],
      ["type", /./, "text/plain"],
      [null, null, "css"]
    ]
  };

  function maybeBackup(stream, pat, style) {
    var cur = stream.current(), close = cur.search(pat);
    if (close > -1) {
      stream.backUp(cur.length - close);
    } else if (cur.match(/<\/?$/)) {
      stream.backUp(cur.length);
      if (!stream.match(pat, false)) stream.match(cur);
    }
    return style;
  }

  var attrRegexpCache = {};
  function getAttrRegexp(attr) {
    var regexp = attrRegexpCache[attr];
    if (regexp) return regexp;
    return attrRegexpCache[attr] = new RegExp("\\s+" + attr + "\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*");
  }

  function getAttrValue(text, attr) {
    var match = text.match(getAttrRegexp(attr))
    return match ? /^\s*(.*?)\s*$/.exec(match[2])[1] : ""
  }

  function getTagRegexp(tagName, anchored) {
    return new RegExp((anchored ? "^" : "") + "<\/\s*" + tagName + "\s*>", "i");
  }

  function addTags(from, to) {
    for (var tag in from) {
      var dest = to[tag] || (to[tag] = []);
      var source = from[tag];
      for (var i = source.length - 1; i >= 0; i--)
        dest.unshift(source[i])
    }
  }

  function findMatchingMode(tagInfo, tagText) {
    for (var i = 0; i < tagInfo.length; i++) {
      var spec = tagInfo[i];
      if (!spec[0] || spec[1].test(getAttrValue(tagText, spec[0]))) return spec[2];
    }
  }

  CodeMirror.defineMode("htmlmixed", function (config, parserConfig) {
    var htmlMode = CodeMirror.getMode(config, {
      name: "xml",
      htmlMode: true,
      multilineTagIndentFactor: parserConfig.multilineTagIndentFactor,
      multilineTagIndentPastTag: parserConfig.multilineTagIndentPastTag
    });

    var tags = {};
    var configTags = parserConfig && parserConfig.tags, configScript = parserConfig && parserConfig.scriptTypes;
    addTags(defaultTags, tags);
    if (configTags) addTags(configTags, tags);
    if (configScript) for (var i = configScript.length - 1; i >= 0; i--)
      tags.script.unshift(["type", configScript[i].matches, configScript[i].mode])

    function html(stream, state) {
      var style = htmlMode.token(stream, state.htmlState), tag = /\btag\b/.test(style), tagName
      if (tag && !/[<>\s\/]/.test(stream.current()) &&
          (tagName = state.htmlState.tagName && state.htmlState.tagName.toLowerCase()) &&
          tags.hasOwnProperty(tagName)) {
        state.inTag = tagName + " "
      } else if (state.inTag && tag && />$/.test(stream.current())) {
        var inTag = /^([\S]+) (.*)/.exec(state.inTag)
        state.inTag = null
        var modeSpec = stream.current() == ">" && findMatchingMode(tags[inTag[1]], inTag[2])
        var mode = CodeMirror.getMode(config, modeSpec)
        var endTagA = getTagRegexp(inTag[1], true), endTag = getTagRegexp(inTag[1], false);
        state.token = function (stream, state) {
          if (stream.match(endTagA, false)) {
            state.token = html;
            state.localState = state.localMode = null;
            return null;
          }
          return maybeBackup(stream, endTag, state.localMode.token(stream, state.localState));
        };
        state.localMode = mode;
        state.localState = CodeMirror.startState(mode, htmlMode.indent(state.htmlState, ""));
      } else if (state.inTag) {
        state.inTag += stream.current()
        if (stream.eol()) state.inTag += " "
      }
      return style;
    };

    return {
      startState: function () {
        var state = CodeMirror.startState(htmlMode);
        return {token: html, inTag: null, localMode: null, localState: null, htmlState: state};
      },

      copyState: function (state) {
        var local;
        if (state.localState) {
          local = CodeMirror.copyState(state.localMode, state.localState);
        }
        return {token: state.token, inTag: state.inTag,
                localMode: state.localMode, localState: local,
                htmlState: CodeMirror.copyState(htmlMode, state.htmlState)};
      },

      token: function (stream, state) {
        return state.token(stream, state);
      },

      indent: function (state, textAfter, line) {
        if (!state.localMode || /^\s*<\//.test(textAfter))
          return htmlMode.indent(state.htmlState, textAfter);
        else if (state.localMode.indent)
          return state.localMode.indent(state.localState, textAfter, line);
        else
          return CodeMirror.Pass;
      },

      innerMode: function (state) {
        return {state: state.localState || state.htmlState, mode: state.localMode || htmlMode};
      }
    };
  }, "xml", "javascript", "css");

  CodeMirror.defineMIME("text/html", "htmlmixed");
});

;
//# sourceMappingURL=scripts.js.map