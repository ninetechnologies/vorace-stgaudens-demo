var Z0=Object.defineProperty;var J0=(r,o,d)=>o in r?Z0(r,o,{enumerable:!0,configurable:!0,writable:!0,value:d}):r[o]=d;var Z=(r,o,d)=>J0(r,typeof o!="symbol"?o+"":o,d);import{r as Zh,g as Jh,a as K0}from"./react-vendor-sA6Nv1NP.js";import{A as Lo,t as W0,a2 as Kh,B as tc,x as Wh,E as oh,z as F0,e as $0,f as P0,D as I0,W as eg,G as tg,w as Fh,Y as ag,Z as lg,_ as ig,P as ng,S as sg,a as rg,F as Ma,n as og,X as cg,C as $h,b as os,p as ug,s as ch,r as jt,R as Ph,h as Ih,a0 as uh,K as dg,L as cs,g as Po,U as dh,j as fg,o as hg,q as wa,I as mg,m as pg,l as gg,c as fh,d as vg,a1 as xg,V as hh,Q as zg,y as bg,N as ss,J as us,u as yg,H as em,v as Sg,T as jg,$ as tm,i as am,a4 as wg,O as Ng,a3 as Eg,M as Di,k as Ho,a5 as Mg}from"./motion-DZHB16Cw.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))u(h);new MutationObserver(h=>{for(const m of h)if(m.type==="childList")for(const g of m.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&u(g)}).observe(document,{childList:!0,subtree:!0});function d(h){const m={};return h.integrity&&(m.integrity=h.integrity),h.referrerPolicy&&(m.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?m.credentials="include":h.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function u(h){if(h.ep)return;h.ep=!0;const m=d(h);fetch(h.href,m)}})();var _o={exports:{}},Mi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mh;function Tg(){if(mh)return Mi;mh=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function d(u,h,m){var g=null;if(m!==void 0&&(g=""+m),h.key!==void 0&&(g=""+h.key),"key"in h){m={};for(var E in h)E!=="key"&&(m[E]=h[E])}else m=h;return h=m.ref,{$$typeof:r,type:u,key:g,ref:h!==void 0?h:null,props:m}}return Mi.Fragment=o,Mi.jsx=d,Mi.jsxs=d,Mi}var ph;function Cg(){return ph||(ph=1,_o.exports=Tg()),_o.exports}var s=Cg(),C=Zh();const lm=Jh(C);var Ro={exports:{}},Ti={},Vo={exports:{}},qo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gh;function Ag(){return gh||(gh=1,(function(r){function o(A,R){var K=A.length;A.push(R);e:for(;0<K;){var ze=K-1>>>1,be=A[ze];if(0<h(be,R))A[ze]=R,A[K]=be,K=ze;else break e}}function d(A){return A.length===0?null:A[0]}function u(A){if(A.length===0)return null;var R=A[0],K=A.pop();if(K!==R){A[0]=K;e:for(var ze=0,be=A.length,Xe=be>>>1;ze<Xe;){var we=2*(ze+1)-1,fe=A[we],Ue=we+1,Mt=A[Ue];if(0>h(fe,K))Ue<be&&0>h(Mt,fe)?(A[ze]=Mt,A[Ue]=K,ze=Ue):(A[ze]=fe,A[we]=K,ze=we);else if(Ue<be&&0>h(Mt,K))A[ze]=Mt,A[Ue]=K,ze=Ue;else break e}}return R}function h(A,R){var K=A.sortIndex-R.sortIndex;return K!==0?K:A.id-R.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;r.unstable_now=function(){return m.now()}}else{var g=Date,E=g.now();r.unstable_now=function(){return g.now()-E}}var M=[],B=[],U=1,w=null,j=3,L=!1,z=!1,H=!1,O=!1,V=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function _(A){for(var R=d(B);R!==null;){if(R.callback===null)u(B);else if(R.startTime<=A)u(B),R.sortIndex=R.expirationTime,o(M,R);else break;R=d(B)}}function $(A){if(H=!1,_(A),!z)if(d(M)!==null)z=!0,I||(I=!0,_e());else{var R=d(B);R!==null&&Be($,R.startTime-A)}}var I=!1,se=-1,re=5,ue=-1;function Ie(){return O?!0:!(r.unstable_now()-ue<re)}function dt(){if(O=!1,I){var A=r.unstable_now();ue=A;var R=!0;try{e:{z=!1,H&&(H=!1,Q(se),se=-1),L=!0;var K=j;try{t:{for(_(A),w=d(M);w!==null&&!(w.expirationTime>A&&Ie());){var ze=w.callback;if(typeof ze=="function"){w.callback=null,j=w.priorityLevel;var be=ze(w.expirationTime<=A);if(A=r.unstable_now(),typeof be=="function"){w.callback=be,_(A),R=!0;break t}w===d(M)&&u(M),_(A)}else u(M);w=d(M)}if(w!==null)R=!0;else{var Xe=d(B);Xe!==null&&Be($,Xe.startTime-A),R=!1}}break e}finally{w=null,j=K,L=!1}R=void 0}}finally{R?_e():I=!1}}}var _e;if(typeof X=="function")_e=function(){X(dt)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,et=G.port2;G.port1.onmessage=dt,_e=function(){et.postMessage(null)}}else _e=function(){V(dt,0)};function Be(A,R){se=V(function(){A(r.unstable_now())},R)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(A){A.callback=null},r.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<A?Math.floor(1e3/A):5},r.unstable_getCurrentPriorityLevel=function(){return j},r.unstable_next=function(A){switch(j){case 1:case 2:case 3:var R=3;break;default:R=j}var K=j;j=R;try{return A()}finally{j=K}},r.unstable_requestPaint=function(){O=!0},r.unstable_runWithPriority=function(A,R){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var K=j;j=A;try{return R()}finally{j=K}},r.unstable_scheduleCallback=function(A,R,K){var ze=r.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ze+K:ze):K=ze,A){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=K+be,A={id:U++,callback:R,priorityLevel:A,startTime:K,expirationTime:be,sortIndex:-1},K>ze?(A.sortIndex=K,o(B,A),d(M)===null&&A===d(B)&&(H?(Q(se),se=-1):H=!0,Be($,K-ze))):(A.sortIndex=be,o(M,A),z||L||(z=!0,I||(I=!0,_e()))),A},r.unstable_shouldYield=Ie,r.unstable_wrapCallback=function(A){var R=j;return function(){var K=j;j=R;try{return A.apply(this,arguments)}finally{j=K}}}})(qo)),qo}var vh;function Dg(){return vh||(vh=1,Vo.exports=Ag()),Vo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xh;function Og(){if(xh)return Ti;xh=1;var r=Dg(),o=Zh(),d=K0();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function E(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function M(e){if(m(e)!==e)throw Error(u(188))}function B(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,l=t;;){var i=a.return;if(i===null)break;var n=i.alternate;if(n===null){if(l=i.return,l!==null){a=l;continue}break}if(i.child===n.child){for(n=i.child;n;){if(n===a)return M(i),e;if(n===l)return M(i),t;n=n.sibling}throw Error(u(188))}if(a.return!==l.return)a=i,l=n;else{for(var c=!1,f=i.child;f;){if(f===a){c=!0,a=i,l=n;break}if(f===l){c=!0,l=i,a=n;break}f=f.sibling}if(!c){for(f=n.child;f;){if(f===a){c=!0,a=n,l=i;break}if(f===l){c=!0,l=n,a=i;break}f=f.sibling}if(!c)throw Error(u(189))}}if(a.alternate!==l)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function U(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=U(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,j=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),Q=Symbol.for("react.consumer"),X=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),se=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),ue=Symbol.for("react.activity"),Ie=Symbol.for("react.memo_cache_sentinel"),dt=Symbol.iterator;function _e(e){return e===null||typeof e!="object"?null:(e=dt&&e[dt]||e["@@iterator"],typeof e=="function"?e:null)}var G=Symbol.for("react.client.reference");function et(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===G?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case H:return"Fragment";case V:return"Profiler";case O:return"StrictMode";case $:return"Suspense";case I:return"SuspenseList";case ue:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case z:return"Portal";case X:return e.displayName||"Context";case Q:return(e._context.displayName||"Context")+".Consumer";case _:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case se:return t=e.displayName||null,t!==null?t:et(e.type)||"Memo";case re:t=e._payload,e=e._init;try{return et(e(t))}catch{}}return null}var Be=Array.isArray,A=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},ze=[],be=-1;function Xe(e){return{current:e}}function we(e){0>be||(e.current=ze[be],ze[be]=null,be--)}function fe(e,t){be++,ze[be]=e.current,e.current=t}var Ue=Xe(null),Mt=Xe(null),Pt=Xe(null),Bi=Xe(null);function Ui(e,t){switch(fe(Pt,t),fe(Mt,e),fe(Ue,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Df(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Df(t),e=Of(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}we(Ue),fe(Ue,e)}function Ka(){we(Ue),we(Mt),we(Pt)}function gs(e){e.memoizedState!==null&&fe(Bi,e);var t=Ue.current,a=Of(t,e.type);t!==a&&(fe(Mt,e),fe(Ue,a))}function Li(e){Mt.current===e&&(we(Ue),we(Mt)),Bi.current===e&&(we(Bi),ji._currentValue=K)}var vs,sc;function Ta(e){if(vs===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);vs=t&&t[1]||"",sc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+vs+e+sc}var xs=!1;function zs(e,t){if(!e||xs)return"";xs=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(N){var S=N}Reflect.construct(e,[],k)}else{try{k.call()}catch(N){S=N}e.call(k.prototype)}}else{try{throw Error()}catch(N){S=N}(k=e())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(N){if(N&&S&&typeof N.stack=="string")return[N.stack,S.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=l.DetermineComponentFrameRoot(),c=n[0],f=n[1];if(c&&f){var p=c.split(`
`),y=f.split(`
`);for(i=l=0;l<p.length&&!p[l].includes("DetermineComponentFrameRoot");)l++;for(;i<y.length&&!y[i].includes("DetermineComponentFrameRoot");)i++;if(l===p.length||i===y.length)for(l=p.length-1,i=y.length-1;1<=l&&0<=i&&p[l]!==y[i];)i--;for(;1<=l&&0<=i;l--,i--)if(p[l]!==y[i]){if(l!==1||i!==1)do if(l--,i--,0>i||p[l]!==y[i]){var T=`
`+p[l].replace(" at new "," at ");return e.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",e.displayName)),T}while(1<=l&&0<=i);break}}}finally{xs=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ta(a):""}function jm(e,t){switch(e.tag){case 26:case 27:case 5:return Ta(e.type);case 16:return Ta("Lazy");case 13:return e.child!==t&&t!==null?Ta("Suspense Fallback"):Ta("Suspense");case 19:return Ta("SuspenseList");case 0:case 15:return zs(e.type,!1);case 11:return zs(e.type.render,!1);case 1:return zs(e.type,!0);case 31:return Ta("Activity");default:return""}}function rc(e){try{var t="",a=null;do t+=jm(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var bs=Object.prototype.hasOwnProperty,ys=r.unstable_scheduleCallback,Ss=r.unstable_cancelCallback,wm=r.unstable_shouldYield,Nm=r.unstable_requestPaint,tt=r.unstable_now,Em=r.unstable_getCurrentPriorityLevel,oc=r.unstable_ImmediatePriority,cc=r.unstable_UserBlockingPriority,Hi=r.unstable_NormalPriority,Mm=r.unstable_LowPriority,uc=r.unstable_IdlePriority,Tm=r.log,Cm=r.unstable_setDisableYieldValue,Ul=null,at=null;function It(e){if(typeof Tm=="function"&&Cm(e),at&&typeof at.setStrictMode=="function")try{at.setStrictMode(Ul,e)}catch{}}var lt=Math.clz32?Math.clz32:Om,Am=Math.log,Dm=Math.LN2;function Om(e){return e>>>=0,e===0?32:31-(Am(e)/Dm|0)|0}var _i=256,Ri=262144,Vi=4194304;function Ca(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qi(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var i=0,n=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var f=l&134217727;return f!==0?(l=f&~n,l!==0?i=Ca(l):(c&=f,c!==0?i=Ca(c):a||(a=f&~e,a!==0&&(i=Ca(a))))):(f=l&~n,f!==0?i=Ca(f):c!==0?i=Ca(c):a||(a=l&~e,a!==0&&(i=Ca(a)))),i===0?0:t!==0&&t!==i&&(t&n)===0&&(n=i&-i,a=t&-t,n>=a||n===32&&(a&4194048)!==0)?t:i}function Ll(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function km(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dc(){var e=Vi;return Vi<<=1,(Vi&62914560)===0&&(Vi=4194304),e}function js(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Hl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Bm(e,t,a,l,i,n){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var f=e.entanglements,p=e.expirationTimes,y=e.hiddenUpdates;for(a=c&~a;0<a;){var T=31-lt(a),k=1<<T;f[T]=0,p[T]=-1;var S=y[T];if(S!==null)for(y[T]=null,T=0;T<S.length;T++){var N=S[T];N!==null&&(N.lane&=-536870913)}a&=~k}l!==0&&fc(e,l,0),n!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=n&~(c&~t))}function fc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-lt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function hc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-lt(a),i=1<<l;i&t|e[l]&t&&(e[l]|=t),a&=~i}}function mc(e,t){var a=t&-t;return a=(a&42)!==0?1:ws(a),(a&(e.suspendedLanes|t))!==0?0:a}function ws(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ns(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function pc(){var e=R.p;return e!==0?e:(e=window.event,e===void 0?32:th(e.type))}function gc(e,t){var a=R.p;try{return R.p=e,t()}finally{R.p=a}}var ea=Math.random().toString(36).slice(2),Re="__reactFiber$"+ea,Ze="__reactProps$"+ea,Wa="__reactContainer$"+ea,Es="__reactEvents$"+ea,Um="__reactListeners$"+ea,Lm="__reactHandles$"+ea,vc="__reactResources$"+ea,_l="__reactMarker$"+ea;function Ms(e){delete e[Re],delete e[Ze],delete e[Es],delete e[Um],delete e[Lm]}function Fa(e){var t=e[Re];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Wa]||a[Re]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Rf(e);e!==null;){if(a=e[Re])return a;e=Rf(e)}return t}e=a,a=e.parentNode}return null}function $a(e){if(e=e[Re]||e[Wa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Rl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Pa(e){var t=e[vc];return t||(t=e[vc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Le(e){e[_l]=!0}var xc=new Set,zc={};function Aa(e,t){Ia(e,t),Ia(e+"Capture",t)}function Ia(e,t){for(zc[e]=t,e=0;e<t.length;e++)xc.add(t[e])}var Hm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),bc={},yc={};function _m(e){return bs.call(yc,e)?!0:bs.call(bc,e)?!1:Hm.test(e)?yc[e]=!0:(bc[e]=!0,!1)}function Gi(e,t,a){if(_m(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Yi(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function kt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function ft(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Sc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Rm(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,n=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(c){a=""+c,n.call(this,c)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ts(e){if(!e._valueTracker){var t=Sc(e)?"checked":"value";e._valueTracker=Rm(e,t,""+e[t])}}function jc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Sc(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Xi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Vm=/[\n"\\]/g;function ht(e){return e.replace(Vm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Cs(e,t,a,l,i,n,c,f){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ft(t)):e.value!==""+ft(t)&&(e.value=""+ft(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?As(e,c,ft(t)):a!=null?As(e,c,ft(a)):l!=null&&e.removeAttribute("value"),i==null&&n!=null&&(e.defaultChecked=!!n),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+ft(f):e.removeAttribute("name")}function wc(e,t,a,l,i,n,c,f){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(e.type=n),t!=null||a!=null){if(!(n!=="submit"&&n!=="reset"||t!=null)){Ts(e);return}a=a!=null?""+ft(a):"",t=t!=null?""+ft(t):a,f||t===e.value||(e.value=t),e.defaultValue=t}l=l??i,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=f?e.checked:!!l,e.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),Ts(e)}function As(e,t,a){t==="number"&&Xi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function el(e,t,a,l){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&l&&(e[a].defaultSelected=!0)}else{for(a=""+ft(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,l&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Nc(e,t,a){if(t!=null&&(t=""+ft(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+ft(a):""}function Ec(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(u(92));if(Be(l)){if(1<l.length)throw Error(u(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=ft(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Ts(e)}function tl(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var qm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mc(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||qm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Tc(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var i in t)l=t[i],t.hasOwnProperty(i)&&a[i]!==l&&Mc(e,i,l)}else for(var n in t)t.hasOwnProperty(n)&&Mc(e,n,t[n])}function Ds(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ym=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qi(e){return Ym.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Bt(){}var Os=null;function ks(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var al=null,ll=null;function Cc(e){var t=$a(e);if(t&&(e=t.stateNode)){var a=e[Ze]||null;e:switch(e=t.stateNode,t.type){case"input":if(Cs(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ht(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var i=l[Ze]||null;if(!i)throw Error(u(90));Cs(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&jc(l)}break e;case"textarea":Nc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&el(e,!!a.multiple,t,!1)}}}var Bs=!1;function Ac(e,t,a){if(Bs)return e(t,a);Bs=!0;try{var l=e(t);return l}finally{if(Bs=!1,(al!==null||ll!==null)&&(kn(),al&&(t=al,e=ll,ll=al=null,Cc(t),e)))for(t=0;t<e.length;t++)Cc(e[t])}}function Vl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Ze]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var Ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Us=!1;if(Ut)try{var ql={};Object.defineProperty(ql,"passive",{get:function(){Us=!0}}),window.addEventListener("test",ql,ql),window.removeEventListener("test",ql,ql)}catch{Us=!1}var ta=null,Ls=null,Zi=null;function Dc(){if(Zi)return Zi;var e,t=Ls,a=t.length,l,i="value"in ta?ta.value:ta.textContent,n=i.length;for(e=0;e<a&&t[e]===i[e];e++);var c=a-e;for(l=1;l<=c&&t[a-l]===i[n-l];l++);return Zi=i.slice(e,1<l?1-l:void 0)}function Ji(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ki(){return!0}function Oc(){return!1}function Je(e){function t(a,l,i,n,c){this._reactName=a,this._targetInst=i,this.type=l,this.nativeEvent=n,this.target=c,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(a=e[f],this[f]=a?a(n):n[f]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Ki:Oc,this.isPropagationStopped=Oc,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ki)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ki)},persist:function(){},isPersistent:Ki}),t}var Da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wi=Je(Da),Gl=w({},Da,{view:0,detail:0}),Xm=Je(Gl),Hs,_s,Yl,Fi=w({},Gl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yl&&(Yl&&e.type==="mousemove"?(Hs=e.screenX-Yl.screenX,_s=e.screenY-Yl.screenY):_s=Hs=0,Yl=e),Hs)},movementY:function(e){return"movementY"in e?e.movementY:_s}}),kc=Je(Fi),Qm=w({},Fi,{dataTransfer:0}),Zm=Je(Qm),Jm=w({},Gl,{relatedTarget:0}),Rs=Je(Jm),Km=w({},Da,{animationName:0,elapsedTime:0,pseudoElement:0}),Wm=Je(Km),Fm=w({},Da,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$m=Je(Fm),Pm=w({},Da,{data:0}),Bc=Je(Pm),Im={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ep={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ap(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=tp[e])?!!t[e]:!1}function Vs(){return ap}var lp=w({},Gl,{key:function(e){if(e.key){var t=Im[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ji(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ep[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vs,charCode:function(e){return e.type==="keypress"?Ji(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ji(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ip=Je(lp),np=w({},Fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uc=Je(np),sp=w({},Gl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vs}),rp=Je(sp),op=w({},Da,{propertyName:0,elapsedTime:0,pseudoElement:0}),cp=Je(op),up=w({},Fi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dp=Je(up),fp=w({},Da,{newState:0,oldState:0}),hp=Je(fp),mp=[9,13,27,32],qs=Ut&&"CompositionEvent"in window,Xl=null;Ut&&"documentMode"in document&&(Xl=document.documentMode);var pp=Ut&&"TextEvent"in window&&!Xl,Lc=Ut&&(!qs||Xl&&8<Xl&&11>=Xl),Hc=" ",_c=!1;function Rc(e,t){switch(e){case"keyup":return mp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var il=!1;function gp(e,t){switch(e){case"compositionend":return Vc(t);case"keypress":return t.which!==32?null:(_c=!0,Hc);case"textInput":return e=t.data,e===Hc&&_c?null:e;default:return null}}function vp(e,t){if(il)return e==="compositionend"||!qs&&Rc(e,t)?(e=Dc(),Zi=Ls=ta=null,il=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lc&&t.locale!=="ko"?null:t.data;default:return null}}var xp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xp[e.type]:t==="textarea"}function Gc(e,t,a,l){al?ll?ll.push(l):ll=[l]:al=l,t=Vn(t,"onChange"),0<t.length&&(a=new Wi("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Ql=null,Zl=null;function zp(e){Nf(e,0)}function $i(e){var t=Rl(e);if(jc(t))return e}function Yc(e,t){if(e==="change")return t}var Xc=!1;if(Ut){var Gs;if(Ut){var Ys="oninput"in document;if(!Ys){var Qc=document.createElement("div");Qc.setAttribute("oninput","return;"),Ys=typeof Qc.oninput=="function"}Gs=Ys}else Gs=!1;Xc=Gs&&(!document.documentMode||9<document.documentMode)}function Zc(){Ql&&(Ql.detachEvent("onpropertychange",Jc),Zl=Ql=null)}function Jc(e){if(e.propertyName==="value"&&$i(Zl)){var t=[];Gc(t,Zl,e,ks(e)),Ac(zp,t)}}function bp(e,t,a){e==="focusin"?(Zc(),Ql=t,Zl=a,Ql.attachEvent("onpropertychange",Jc)):e==="focusout"&&Zc()}function yp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $i(Zl)}function Sp(e,t){if(e==="click")return $i(t)}function jp(e,t){if(e==="input"||e==="change")return $i(t)}function wp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var it=typeof Object.is=="function"?Object.is:wp;function Jl(e,t){if(it(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var i=a[l];if(!bs.call(t,i)||!it(e[i],t[i]))return!1}return!0}function Kc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wc(e,t){var a=Kc(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Kc(a)}}function Fc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $c(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Xi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Xi(e.document)}return t}function Xs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Np=Ut&&"documentMode"in document&&11>=document.documentMode,nl=null,Qs=null,Kl=null,Zs=!1;function Pc(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Zs||nl==null||nl!==Xi(l)||(l=nl,"selectionStart"in l&&Xs(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Kl&&Jl(Kl,l)||(Kl=l,l=Vn(Qs,"onSelect"),0<l.length&&(t=new Wi("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=nl)))}function Oa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var sl={animationend:Oa("Animation","AnimationEnd"),animationiteration:Oa("Animation","AnimationIteration"),animationstart:Oa("Animation","AnimationStart"),transitionrun:Oa("Transition","TransitionRun"),transitionstart:Oa("Transition","TransitionStart"),transitioncancel:Oa("Transition","TransitionCancel"),transitionend:Oa("Transition","TransitionEnd")},Js={},Ic={};Ut&&(Ic=document.createElement("div").style,"AnimationEvent"in window||(delete sl.animationend.animation,delete sl.animationiteration.animation,delete sl.animationstart.animation),"TransitionEvent"in window||delete sl.transitionend.transition);function ka(e){if(Js[e])return Js[e];if(!sl[e])return e;var t=sl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Ic)return Js[e]=t[a];return e}var eu=ka("animationend"),tu=ka("animationiteration"),au=ka("animationstart"),Ep=ka("transitionrun"),Mp=ka("transitionstart"),Tp=ka("transitioncancel"),lu=ka("transitionend"),iu=new Map,Ks="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ks.push("scrollEnd");function wt(e,t){iu.set(e,t),Aa(t,[e])}var Pi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},mt=[],rl=0,Ws=0;function Ii(){for(var e=rl,t=Ws=rl=0;t<e;){var a=mt[t];mt[t++]=null;var l=mt[t];mt[t++]=null;var i=mt[t];mt[t++]=null;var n=mt[t];if(mt[t++]=null,l!==null&&i!==null){var c=l.pending;c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i}n!==0&&nu(a,i,n)}}function en(e,t,a,l){mt[rl++]=e,mt[rl++]=t,mt[rl++]=a,mt[rl++]=l,Ws|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Fs(e,t,a,l){return en(e,t,a,l),tn(e)}function Ba(e,t){return en(e,null,null,t),tn(e)}function nu(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var i=!1,n=e.return;n!==null;)n.childLanes|=a,l=n.alternate,l!==null&&(l.childLanes|=a),n.tag===22&&(e=n.stateNode,e===null||e._visibility&1||(i=!0)),e=n,n=n.return;return e.tag===3?(n=e.stateNode,i&&t!==null&&(i=31-lt(a),e=n.hiddenUpdates,l=e[i],l===null?e[i]=[t]:l.push(t),t.lane=a|536870912),n):null}function tn(e){if(50<gi)throw gi=0,no=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ol={};function Cp(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,t,a,l){return new Cp(e,t,a,l)}function $s(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lt(e,t){var a=e.alternate;return a===null?(a=nt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function su(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function an(e,t,a,l,i,n){var c=0;if(l=e,typeof e=="function")$s(e)&&(c=1);else if(typeof e=="string")c=B0(e,a,Ue.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ue:return e=nt(31,a,t,i),e.elementType=ue,e.lanes=n,e;case H:return Ua(a.children,i,n,t);case O:c=8,i|=24;break;case V:return e=nt(12,a,t,i|2),e.elementType=V,e.lanes=n,e;case $:return e=nt(13,a,t,i),e.elementType=$,e.lanes=n,e;case I:return e=nt(19,a,t,i),e.elementType=I,e.lanes=n,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case X:c=10;break e;case Q:c=9;break e;case _:c=11;break e;case se:c=14;break e;case re:c=16,l=null;break e}c=29,a=Error(u(130,e===null?"null":typeof e,"")),l=null}return t=nt(c,a,t,i),t.elementType=e,t.type=l,t.lanes=n,t}function Ua(e,t,a,l){return e=nt(7,e,l,t),e.lanes=a,e}function Ps(e,t,a){return e=nt(6,e,null,t),e.lanes=a,e}function ru(e){var t=nt(18,null,null,0);return t.stateNode=e,t}function Is(e,t,a){return t=nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ou=new WeakMap;function pt(e,t){if(typeof e=="object"&&e!==null){var a=ou.get(e);return a!==void 0?a:(t={value:e,source:t,stack:rc(t)},ou.set(e,t),t)}return{value:e,source:t,stack:rc(t)}}var cl=[],ul=0,ln=null,Wl=0,gt=[],vt=0,aa=null,Tt=1,Ct="";function Ht(e,t){cl[ul++]=Wl,cl[ul++]=ln,ln=e,Wl=t}function cu(e,t,a){gt[vt++]=Tt,gt[vt++]=Ct,gt[vt++]=aa,aa=e;var l=Tt;e=Ct;var i=32-lt(l)-1;l&=~(1<<i),a+=1;var n=32-lt(t)+i;if(30<n){var c=i-i%5;n=(l&(1<<c)-1).toString(32),l>>=c,i-=c,Tt=1<<32-lt(t)+i|a<<i|l,Ct=n+e}else Tt=1<<n|a<<i|l,Ct=e}function er(e){e.return!==null&&(Ht(e,1),cu(e,1,0))}function tr(e){for(;e===ln;)ln=cl[--ul],cl[ul]=null,Wl=cl[--ul],cl[ul]=null;for(;e===aa;)aa=gt[--vt],gt[vt]=null,Ct=gt[--vt],gt[vt]=null,Tt=gt[--vt],gt[vt]=null}function uu(e,t){gt[vt++]=Tt,gt[vt++]=Ct,gt[vt++]=aa,Tt=t.id,Ct=t.overflow,aa=e}var Ve=null,ye=null,ne=!1,la=null,xt=!1,ar=Error(u(519));function ia(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Fl(pt(t,e)),ar}function du(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Re]=e,t[Ze]=l,a){case"dialog":ae("cancel",t),ae("close",t);break;case"iframe":case"object":case"embed":ae("load",t);break;case"video":case"audio":for(a=0;a<xi.length;a++)ae(xi[a],t);break;case"source":ae("error",t);break;case"img":case"image":case"link":ae("error",t),ae("load",t);break;case"details":ae("toggle",t);break;case"input":ae("invalid",t),wc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ae("invalid",t);break;case"textarea":ae("invalid",t),Ec(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Cf(t.textContent,a)?(l.popover!=null&&(ae("beforetoggle",t),ae("toggle",t)),l.onScroll!=null&&ae("scroll",t),l.onScrollEnd!=null&&ae("scrollend",t),l.onClick!=null&&(t.onclick=Bt),t=!0):t=!1,t||ia(e,!0)}function fu(e){for(Ve=e.return;Ve;)switch(Ve.tag){case 5:case 31:case 13:xt=!1;return;case 27:case 3:xt=!0;return;default:Ve=Ve.return}}function dl(e){if(e!==Ve)return!1;if(!ne)return fu(e),ne=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||yo(e.type,e.memoizedProps)),a=!a),a&&ye&&ia(e),fu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));ye=_f(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));ye=_f(e)}else t===27?(t=ye,xa(e.type)?(e=Eo,Eo=null,ye=e):ye=t):ye=Ve?bt(e.stateNode.nextSibling):null;return!0}function La(){ye=Ve=null,ne=!1}function lr(){var e=la;return e!==null&&($e===null?$e=e:$e.push.apply($e,e),la=null),e}function Fl(e){la===null?la=[e]:la.push(e)}var ir=Xe(null),Ha=null,_t=null;function na(e,t,a){fe(ir,t._currentValue),t._currentValue=a}function Rt(e){e._currentValue=ir.current,we(ir)}function nr(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function sr(e,t,a,l){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var n=i.dependencies;if(n!==null){var c=i.child;n=n.firstContext;e:for(;n!==null;){var f=n;n=i;for(var p=0;p<t.length;p++)if(f.context===t[p]){n.lanes|=a,f=n.alternate,f!==null&&(f.lanes|=a),nr(n.return,a,e),l||(c=null);break e}n=f.next}}else if(i.tag===18){if(c=i.return,c===null)throw Error(u(341));c.lanes|=a,n=c.alternate,n!==null&&(n.lanes|=a),nr(c,a,e),c=null}else c=i.child;if(c!==null)c.return=i;else for(c=i;c!==null;){if(c===e){c=null;break}if(i=c.sibling,i!==null){i.return=c.return,c=i;break}c=c.return}i=c}}function fl(e,t,a,l){e=null;for(var i=t,n=!1;i!==null;){if(!n){if((i.flags&524288)!==0)n=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var c=i.alternate;if(c===null)throw Error(u(387));if(c=c.memoizedProps,c!==null){var f=i.type;it(i.pendingProps.value,c.value)||(e!==null?e.push(f):e=[f])}}else if(i===Bi.current){if(c=i.alternate,c===null)throw Error(u(387));c.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(ji):e=[ji])}i=i.return}e!==null&&sr(t,e,a,l),t.flags|=262144}function nn(e){for(e=e.firstContext;e!==null;){if(!it(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _a(e){Ha=e,_t=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function qe(e){return hu(Ha,e)}function sn(e,t){return Ha===null&&_a(e),hu(e,t)}function hu(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},_t===null){if(e===null)throw Error(u(308));_t=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else _t=_t.next=t;return a}var Ap=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Dp=r.unstable_scheduleCallback,Op=r.unstable_NormalPriority,Ce={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rr(){return{controller:new Ap,data:new Map,refCount:0}}function $l(e){e.refCount--,e.refCount===0&&Dp(Op,function(){e.controller.abort()})}var Pl=null,or=0,hl=0,ml=null;function kp(e,t){if(Pl===null){var a=Pl=[];or=0,hl=fo(),ml={status:"pending",value:void 0,then:function(l){a.push(l)}}}return or++,t.then(mu,mu),t}function mu(){if(--or===0&&Pl!==null){ml!==null&&(ml.status="fulfilled");var e=Pl;Pl=null,hl=0,ml=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Bp(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(l.status="rejected",l.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),l}var pu=A.S;A.S=function(e,t){Pd=tt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&kp(e,t),pu!==null&&pu(e,t)};var Ra=Xe(null);function cr(){var e=Ra.current;return e!==null?e:xe.pooledCache}function rn(e,t){t===null?fe(Ra,Ra.current):fe(Ra,t.pool)}function gu(){var e=cr();return e===null?null:{parent:Ce._currentValue,pool:e}}var pl=Error(u(460)),ur=Error(u(474)),on=Error(u(542)),cn={then:function(){}};function vu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function xu(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Bt,Bt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,bu(e),e;default:if(typeof t.status=="string")t.then(Bt,Bt);else{if(e=xe,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=l}},function(l){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,bu(e),e}throw qa=t,pl}}function Va(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(qa=a,pl):a}}var qa=null;function zu(){if(qa===null)throw Error(u(459));var e=qa;return qa=null,e}function bu(e){if(e===pl||e===on)throw Error(u(483))}var gl=null,Il=0;function un(e){var t=Il;return Il+=1,gl===null&&(gl=[]),xu(gl,e,t)}function ei(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function dn(e,t){throw t.$$typeof===j?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function yu(e){function t(x,v){if(e){var b=x.deletions;b===null?(x.deletions=[v],x.flags|=16):b.push(v)}}function a(x,v){if(!e)return null;for(;v!==null;)t(x,v),v=v.sibling;return null}function l(x){for(var v=new Map;x!==null;)x.key!==null?v.set(x.key,x):v.set(x.index,x),x=x.sibling;return v}function i(x,v){return x=Lt(x,v),x.index=0,x.sibling=null,x}function n(x,v,b){return x.index=b,e?(b=x.alternate,b!==null?(b=b.index,b<v?(x.flags|=67108866,v):b):(x.flags|=67108866,v)):(x.flags|=1048576,v)}function c(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function f(x,v,b,D){return v===null||v.tag!==6?(v=Ps(b,x.mode,D),v.return=x,v):(v=i(v,b),v.return=x,v)}function p(x,v,b,D){var J=b.type;return J===H?T(x,v,b.props.children,D,b.key):v!==null&&(v.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===re&&Va(J)===v.type)?(v=i(v,b.props),ei(v,b),v.return=x,v):(v=an(b.type,b.key,b.props,null,x.mode,D),ei(v,b),v.return=x,v)}function y(x,v,b,D){return v===null||v.tag!==4||v.stateNode.containerInfo!==b.containerInfo||v.stateNode.implementation!==b.implementation?(v=Is(b,x.mode,D),v.return=x,v):(v=i(v,b.children||[]),v.return=x,v)}function T(x,v,b,D,J){return v===null||v.tag!==7?(v=Ua(b,x.mode,D,J),v.return=x,v):(v=i(v,b),v.return=x,v)}function k(x,v,b){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=Ps(""+v,x.mode,b),v.return=x,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case L:return b=an(v.type,v.key,v.props,null,x.mode,b),ei(b,v),b.return=x,b;case z:return v=Is(v,x.mode,b),v.return=x,v;case re:return v=Va(v),k(x,v,b)}if(Be(v)||_e(v))return v=Ua(v,x.mode,b,null),v.return=x,v;if(typeof v.then=="function")return k(x,un(v),b);if(v.$$typeof===X)return k(x,sn(x,v),b);dn(x,v)}return null}function S(x,v,b,D){var J=v!==null?v.key:null;if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return J!==null?null:f(x,v,""+b,D);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case L:return b.key===J?p(x,v,b,D):null;case z:return b.key===J?y(x,v,b,D):null;case re:return b=Va(b),S(x,v,b,D)}if(Be(b)||_e(b))return J!==null?null:T(x,v,b,D,null);if(typeof b.then=="function")return S(x,v,un(b),D);if(b.$$typeof===X)return S(x,v,sn(x,b),D);dn(x,b)}return null}function N(x,v,b,D,J){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return x=x.get(b)||null,f(v,x,""+D,J);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case L:return x=x.get(D.key===null?b:D.key)||null,p(v,x,D,J);case z:return x=x.get(D.key===null?b:D.key)||null,y(v,x,D,J);case re:return D=Va(D),N(x,v,b,D,J)}if(Be(D)||_e(D))return x=x.get(b)||null,T(v,x,D,J,null);if(typeof D.then=="function")return N(x,v,b,un(D),J);if(D.$$typeof===X)return N(x,v,b,sn(v,D),J);dn(v,D)}return null}function q(x,v,b,D){for(var J=null,oe=null,Y=v,ee=v=0,ie=null;Y!==null&&ee<b.length;ee++){Y.index>ee?(ie=Y,Y=null):ie=Y.sibling;var ce=S(x,Y,b[ee],D);if(ce===null){Y===null&&(Y=ie);break}e&&Y&&ce.alternate===null&&t(x,Y),v=n(ce,v,ee),oe===null?J=ce:oe.sibling=ce,oe=ce,Y=ie}if(ee===b.length)return a(x,Y),ne&&Ht(x,ee),J;if(Y===null){for(;ee<b.length;ee++)Y=k(x,b[ee],D),Y!==null&&(v=n(Y,v,ee),oe===null?J=Y:oe.sibling=Y,oe=Y);return ne&&Ht(x,ee),J}for(Y=l(Y);ee<b.length;ee++)ie=N(Y,x,ee,b[ee],D),ie!==null&&(e&&ie.alternate!==null&&Y.delete(ie.key===null?ee:ie.key),v=n(ie,v,ee),oe===null?J=ie:oe.sibling=ie,oe=ie);return e&&Y.forEach(function(ja){return t(x,ja)}),ne&&Ht(x,ee),J}function W(x,v,b,D){if(b==null)throw Error(u(151));for(var J=null,oe=null,Y=v,ee=v=0,ie=null,ce=b.next();Y!==null&&!ce.done;ee++,ce=b.next()){Y.index>ee?(ie=Y,Y=null):ie=Y.sibling;var ja=S(x,Y,ce.value,D);if(ja===null){Y===null&&(Y=ie);break}e&&Y&&ja.alternate===null&&t(x,Y),v=n(ja,v,ee),oe===null?J=ja:oe.sibling=ja,oe=ja,Y=ie}if(ce.done)return a(x,Y),ne&&Ht(x,ee),J;if(Y===null){for(;!ce.done;ee++,ce=b.next())ce=k(x,ce.value,D),ce!==null&&(v=n(ce,v,ee),oe===null?J=ce:oe.sibling=ce,oe=ce);return ne&&Ht(x,ee),J}for(Y=l(Y);!ce.done;ee++,ce=b.next())ce=N(Y,x,ee,ce.value,D),ce!==null&&(e&&ce.alternate!==null&&Y.delete(ce.key===null?ee:ce.key),v=n(ce,v,ee),oe===null?J=ce:oe.sibling=ce,oe=ce);return e&&Y.forEach(function(Q0){return t(x,Q0)}),ne&&Ht(x,ee),J}function ve(x,v,b,D){if(typeof b=="object"&&b!==null&&b.type===H&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case L:e:{for(var J=b.key;v!==null;){if(v.key===J){if(J=b.type,J===H){if(v.tag===7){a(x,v.sibling),D=i(v,b.props.children),D.return=x,x=D;break e}}else if(v.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===re&&Va(J)===v.type){a(x,v.sibling),D=i(v,b.props),ei(D,b),D.return=x,x=D;break e}a(x,v);break}else t(x,v);v=v.sibling}b.type===H?(D=Ua(b.props.children,x.mode,D,b.key),D.return=x,x=D):(D=an(b.type,b.key,b.props,null,x.mode,D),ei(D,b),D.return=x,x=D)}return c(x);case z:e:{for(J=b.key;v!==null;){if(v.key===J)if(v.tag===4&&v.stateNode.containerInfo===b.containerInfo&&v.stateNode.implementation===b.implementation){a(x,v.sibling),D=i(v,b.children||[]),D.return=x,x=D;break e}else{a(x,v);break}else t(x,v);v=v.sibling}D=Is(b,x.mode,D),D.return=x,x=D}return c(x);case re:return b=Va(b),ve(x,v,b,D)}if(Be(b))return q(x,v,b,D);if(_e(b)){if(J=_e(b),typeof J!="function")throw Error(u(150));return b=J.call(b),W(x,v,b,D)}if(typeof b.then=="function")return ve(x,v,un(b),D);if(b.$$typeof===X)return ve(x,v,sn(x,b),D);dn(x,b)}return typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint"?(b=""+b,v!==null&&v.tag===6?(a(x,v.sibling),D=i(v,b),D.return=x,x=D):(a(x,v),D=Ps(b,x.mode,D),D.return=x,x=D),c(x)):a(x,v)}return function(x,v,b,D){try{Il=0;var J=ve(x,v,b,D);return gl=null,J}catch(Y){if(Y===pl||Y===on)throw Y;var oe=nt(29,Y,null,x.mode);return oe.lanes=D,oe.return=x,oe}finally{}}}var Ga=yu(!0),Su=yu(!1),sa=!1;function dr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ra(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function oa(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(de&2)!==0){var i=l.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),l.pending=t,t=tn(e),nu(e,null,a),t}return en(e,l,t,a),tn(e)}function ti(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,hc(e,a)}}function hr(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var i=null,n=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};n===null?i=n=c:n=n.next=c,a=a.next}while(a!==null);n===null?i=n=t:n=n.next=t}else i=n=t;a={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:n,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var mr=!1;function ai(){if(mr){var e=ml;if(e!==null)throw e}}function li(e,t,a,l){mr=!1;var i=e.updateQueue;sa=!1;var n=i.firstBaseUpdate,c=i.lastBaseUpdate,f=i.shared.pending;if(f!==null){i.shared.pending=null;var p=f,y=p.next;p.next=null,c===null?n=y:c.next=y,c=p;var T=e.alternate;T!==null&&(T=T.updateQueue,f=T.lastBaseUpdate,f!==c&&(f===null?T.firstBaseUpdate=y:f.next=y,T.lastBaseUpdate=p))}if(n!==null){var k=i.baseState;c=0,T=y=p=null,f=n;do{var S=f.lane&-536870913,N=S!==f.lane;if(N?(le&S)===S:(l&S)===S){S!==0&&S===hl&&(mr=!0),T!==null&&(T=T.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var q=e,W=f;S=t;var ve=a;switch(W.tag){case 1:if(q=W.payload,typeof q=="function"){k=q.call(ve,k,S);break e}k=q;break e;case 3:q.flags=q.flags&-65537|128;case 0:if(q=W.payload,S=typeof q=="function"?q.call(ve,k,S):q,S==null)break e;k=w({},k,S);break e;case 2:sa=!0}}S=f.callback,S!==null&&(e.flags|=64,N&&(e.flags|=8192),N=i.callbacks,N===null?i.callbacks=[S]:N.push(S))}else N={lane:S,tag:f.tag,payload:f.payload,callback:f.callback,next:null},T===null?(y=T=N,p=k):T=T.next=N,c|=S;if(f=f.next,f===null){if(f=i.shared.pending,f===null)break;N=f,f=N.next,N.next=null,i.lastBaseUpdate=N,i.shared.pending=null}}while(!0);T===null&&(p=k),i.baseState=p,i.firstBaseUpdate=y,i.lastBaseUpdate=T,n===null&&(i.shared.lanes=0),ha|=c,e.lanes=c,e.memoizedState=k}}function ju(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function wu(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ju(a[e],t)}var vl=Xe(null),fn=Xe(0);function Nu(e,t){e=Kt,fe(fn,e),fe(vl,t),Kt=e|t.baseLanes}function pr(){fe(fn,Kt),fe(vl,vl.current)}function gr(){Kt=fn.current,we(vl),we(fn)}var st=Xe(null),zt=null;function ca(e){var t=e.alternate;fe(Me,Me.current&1),fe(st,e),zt===null&&(t===null||vl.current!==null||t.memoizedState!==null)&&(zt=e)}function vr(e){fe(Me,Me.current),fe(st,e),zt===null&&(zt=e)}function Eu(e){e.tag===22?(fe(Me,Me.current),fe(st,e),zt===null&&(zt=e)):ua()}function ua(){fe(Me,Me.current),fe(st,st.current)}function rt(e){we(st),zt===e&&(zt=null),we(Me)}var Me=Xe(0);function hn(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||wo(a)||No(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vt=0,P=null,pe=null,Ae=null,mn=!1,xl=!1,Ya=!1,pn=0,ii=0,zl=null,Up=0;function Ne(){throw Error(u(321))}function xr(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!it(e[a],t[a]))return!1;return!0}function zr(e,t,a,l,i,n){return Vt=n,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,A.H=e===null||e.memoizedState===null?cd:Br,Ya=!1,n=a(l,i),Ya=!1,xl&&(n=Tu(t,a,l,i)),Mu(e),n}function Mu(e){A.H=ri;var t=pe!==null&&pe.next!==null;if(Vt=0,Ae=pe=P=null,mn=!1,ii=0,zl=null,t)throw Error(u(300));e===null||De||(e=e.dependencies,e!==null&&nn(e)&&(De=!0))}function Tu(e,t,a,l){P=e;var i=0;do{if(xl&&(zl=null),ii=0,xl=!1,25<=i)throw Error(u(301));if(i+=1,Ae=pe=null,e.updateQueue!=null){var n=e.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}A.H=ud,n=t(a,l)}while(xl);return n}function Lp(){var e=A.H,t=e.useState()[0];return t=typeof t.then=="function"?ni(t):t,e=e.useState()[0],(pe!==null?pe.memoizedState:null)!==e&&(P.flags|=1024),t}function br(){var e=pn!==0;return pn=0,e}function yr(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Sr(e){if(mn){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}mn=!1}Vt=0,Ae=pe=P=null,xl=!1,ii=pn=0,zl=null}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?P.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function Te(){if(pe===null){var e=P.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=Ae===null?P.memoizedState:Ae.next;if(t!==null)Ae=t,pe=e;else{if(e===null)throw P.alternate===null?Error(u(467)):Error(u(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},Ae===null?P.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function gn(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ni(e){var t=ii;return ii+=1,zl===null&&(zl=[]),e=xu(zl,e,t),t=P,(Ae===null?t.memoizedState:Ae.next)===null&&(t=t.alternate,A.H=t===null||t.memoizedState===null?cd:Br),e}function vn(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ni(e);if(e.$$typeof===X)return qe(e)}throw Error(u(438,String(e)))}function jr(e){var t=null,a=P.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=P.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=gn(),P.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Ie;return t.index++,a}function qt(e,t){return typeof t=="function"?t(e):t}function xn(e){var t=Te();return wr(t,pe,e)}function wr(e,t,a){var l=e.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=a;var i=e.baseQueue,n=l.pending;if(n!==null){if(i!==null){var c=i.next;i.next=n.next,n.next=c}t.baseQueue=i=n,l.pending=null}if(n=e.baseState,i===null)e.memoizedState=n;else{t=i.next;var f=c=null,p=null,y=t,T=!1;do{var k=y.lane&-536870913;if(k!==y.lane?(le&k)===k:(Vt&k)===k){var S=y.revertLane;if(S===0)p!==null&&(p=p.next={lane:0,revertLane:0,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),k===hl&&(T=!0);else if((Vt&S)===S){y=y.next,S===hl&&(T=!0);continue}else k={lane:0,revertLane:y.revertLane,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},p===null?(f=p=k,c=n):p=p.next=k,P.lanes|=S,ha|=S;k=y.action,Ya&&a(n,k),n=y.hasEagerState?y.eagerState:a(n,k)}else S={lane:k,revertLane:y.revertLane,gesture:y.gesture,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},p===null?(f=p=S,c=n):p=p.next=S,P.lanes|=k,ha|=k;y=y.next}while(y!==null&&y!==t);if(p===null?c=n:p.next=f,!it(n,e.memoizedState)&&(De=!0,T&&(a=ml,a!==null)))throw a;e.memoizedState=n,e.baseState=c,e.baseQueue=p,l.lastRenderedState=n}return i===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Nr(e){var t=Te(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var l=a.dispatch,i=a.pending,n=t.memoizedState;if(i!==null){a.pending=null;var c=i=i.next;do n=e(n,c.action),c=c.next;while(c!==i);it(n,t.memoizedState)||(De=!0),t.memoizedState=n,t.baseQueue===null&&(t.baseState=n),a.lastRenderedState=n}return[n,l]}function Cu(e,t,a){var l=P,i=Te(),n=ne;if(n){if(a===void 0)throw Error(u(407));a=a()}else a=t();var c=!it((pe||i).memoizedState,a);if(c&&(i.memoizedState=a,De=!0),i=i.queue,Tr(Ou.bind(null,l,i,e),[e]),i.getSnapshot!==t||c||Ae!==null&&Ae.memoizedState.tag&1){if(l.flags|=2048,bl(9,{destroy:void 0},Du.bind(null,l,i,a,t),null),xe===null)throw Error(u(349));n||(Vt&127)!==0||Au(l,t,a)}return a}function Au(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=P.updateQueue,t===null?(t=gn(),P.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Du(e,t,a,l){t.value=a,t.getSnapshot=l,ku(t)&&Bu(e)}function Ou(e,t,a){return a(function(){ku(t)&&Bu(e)})}function ku(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!it(e,a)}catch{return!0}}function Bu(e){var t=Ba(e,2);t!==null&&Pe(t,e,2)}function Er(e){var t=Qe();if(typeof e=="function"){var a=e;if(e=a(),Ya){It(!0);try{a()}finally{It(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:e},t}function Uu(e,t,a,l){return e.baseState=a,wr(e,pe,typeof l=="function"?l:qt)}function Hp(e,t,a,l,i){if(yn(e))throw Error(u(485));if(e=t.action,e!==null){var n={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){n.listeners.push(c)}};A.T!==null?a(!0):n.isTransition=!1,l(n),a=t.pending,a===null?(n.next=t.pending=n,Lu(t,n)):(n.next=a.next,t.pending=a.next=n)}}function Lu(e,t){var a=t.action,l=t.payload,i=e.state;if(t.isTransition){var n=A.T,c={};A.T=c;try{var f=a(i,l),p=A.S;p!==null&&p(c,f),Hu(e,t,f)}catch(y){Mr(e,t,y)}finally{n!==null&&c.types!==null&&(n.types=c.types),A.T=n}}else try{n=a(i,l),Hu(e,t,n)}catch(y){Mr(e,t,y)}}function Hu(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){_u(e,t,l)},function(l){return Mr(e,t,l)}):_u(e,t,a)}function _u(e,t,a){t.status="fulfilled",t.value=a,Ru(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Lu(e,a)))}function Mr(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Ru(t),t=t.next;while(t!==l)}e.action=null}function Ru(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Vu(e,t){return t}function qu(e,t){if(ne){var a=xe.formState;if(a!==null){e:{var l=P;if(ne){if(ye){t:{for(var i=ye,n=xt;i.nodeType!==8;){if(!n){i=null;break t}if(i=bt(i.nextSibling),i===null){i=null;break t}}n=i.data,i=n==="F!"||n==="F"?i:null}if(i){ye=bt(i.nextSibling),l=i.data==="F!";break e}}ia(l)}l=!1}l&&(t=a[0])}}return a=Qe(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vu,lastRenderedState:t},a.queue=l,a=sd.bind(null,P,l),l.dispatch=a,l=Er(!1),n=kr.bind(null,P,!1,l.queue),l=Qe(),i={state:t,dispatch:null,action:e,pending:null},l.queue=i,a=Hp.bind(null,P,i,n,a),i.dispatch=a,l.memoizedState=e,[t,a,!1]}function Gu(e){var t=Te();return Yu(t,pe,e)}function Yu(e,t,a){if(t=wr(e,t,Vu)[0],e=xn(qt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=ni(t)}catch(c){throw c===pl?on:c}else l=t;t=Te();var i=t.queue,n=i.dispatch;return a!==t.memoizedState&&(P.flags|=2048,bl(9,{destroy:void 0},_p.bind(null,i,a),null)),[l,n,e]}function _p(e,t){e.action=t}function Xu(e){var t=Te(),a=pe;if(a!==null)return Yu(t,a,e);Te(),t=t.memoizedState,a=Te();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function bl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=P.updateQueue,t===null&&(t=gn(),P.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Qu(){return Te().memoizedState}function zn(e,t,a,l){var i=Qe();P.flags|=e,i.memoizedState=bl(1|t,{destroy:void 0},a,l===void 0?null:l)}function bn(e,t,a,l){var i=Te();l=l===void 0?null:l;var n=i.memoizedState.inst;pe!==null&&l!==null&&xr(l,pe.memoizedState.deps)?i.memoizedState=bl(t,n,a,l):(P.flags|=e,i.memoizedState=bl(1|t,n,a,l))}function Zu(e,t){zn(8390656,8,e,t)}function Tr(e,t){bn(2048,8,e,t)}function Rp(e){P.flags|=4;var t=P.updateQueue;if(t===null)t=gn(),P.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Ju(e){var t=Te().memoizedState;return Rp({ref:t,nextImpl:e}),function(){if((de&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function Ku(e,t){return bn(4,2,e,t)}function Wu(e,t){return bn(4,4,e,t)}function Fu(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $u(e,t,a){a=a!=null?a.concat([e]):null,bn(4,4,Fu.bind(null,t,e),a)}function Cr(){}function Pu(e,t){var a=Te();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&xr(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Iu(e,t){var a=Te();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&xr(t,l[1]))return l[0];if(l=e(),Ya){It(!0);try{e()}finally{It(!1)}}return a.memoizedState=[l,t],l}function Ar(e,t,a){return a===void 0||(Vt&1073741824)!==0&&(le&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=ef(),P.lanes|=e,ha|=e,a)}function ed(e,t,a,l){return it(a,t)?a:vl.current!==null?(e=Ar(e,a,l),it(e,t)||(De=!0),e):(Vt&42)===0||(Vt&1073741824)!==0&&(le&261930)===0?(De=!0,e.memoizedState=a):(e=ef(),P.lanes|=e,ha|=e,t)}function td(e,t,a,l,i){var n=R.p;R.p=n!==0&&8>n?n:8;var c=A.T,f={};A.T=f,kr(e,!1,t,a);try{var p=i(),y=A.S;if(y!==null&&y(f,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var T=Bp(p,l);si(e,t,T,ut(e))}else si(e,t,l,ut(e))}catch(k){si(e,t,{then:function(){},status:"rejected",reason:k},ut())}finally{R.p=n,c!==null&&f.types!==null&&(c.types=f.types),A.T=c}}function Vp(){}function Dr(e,t,a,l){if(e.tag!==5)throw Error(u(476));var i=ad(e).queue;td(e,i,t,K,a===null?Vp:function(){return ld(e),a(l)})}function ad(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:K},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ld(e){var t=ad(e);t.next===null&&(t=e.alternate.memoizedState),si(e,t.next.queue,{},ut())}function Or(){return qe(ji)}function id(){return Te().memoizedState}function nd(){return Te().memoizedState}function qp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=ut();e=ra(a);var l=oa(t,e,a);l!==null&&(Pe(l,t,a),ti(l,t,a)),t={cache:rr()},e.payload=t;return}t=t.return}}function Gp(e,t,a){var l=ut();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},yn(e)?rd(t,a):(a=Fs(e,t,a,l),a!==null&&(Pe(a,e,l),od(a,t,l)))}function sd(e,t,a){var l=ut();si(e,t,a,l)}function si(e,t,a,l){var i={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(yn(e))rd(t,i);else{var n=e.alternate;if(e.lanes===0&&(n===null||n.lanes===0)&&(n=t.lastRenderedReducer,n!==null))try{var c=t.lastRenderedState,f=n(c,a);if(i.hasEagerState=!0,i.eagerState=f,it(f,c))return en(e,t,i,0),xe===null&&Ii(),!1}catch{}finally{}if(a=Fs(e,t,i,l),a!==null)return Pe(a,e,l),od(a,t,l),!0}return!1}function kr(e,t,a,l){if(l={lane:2,revertLane:fo(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},yn(e)){if(t)throw Error(u(479))}else t=Fs(e,a,l,2),t!==null&&Pe(t,e,2)}function yn(e){var t=e.alternate;return e===P||t!==null&&t===P}function rd(e,t){xl=mn=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function od(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,hc(e,a)}}var ri={readContext:qe,use:vn,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useLayoutEffect:Ne,useInsertionEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useSyncExternalStore:Ne,useId:Ne,useHostTransitionStatus:Ne,useFormState:Ne,useActionState:Ne,useOptimistic:Ne,useMemoCache:Ne,useCacheRefresh:Ne};ri.useEffectEvent=Ne;var cd={readContext:qe,use:vn,useCallback:function(e,t){return Qe().memoizedState=[e,t===void 0?null:t],e},useContext:qe,useEffect:Zu,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,zn(4194308,4,Fu.bind(null,t,e),a)},useLayoutEffect:function(e,t){return zn(4194308,4,e,t)},useInsertionEffect:function(e,t){zn(4,2,e,t)},useMemo:function(e,t){var a=Qe();t=t===void 0?null:t;var l=e();if(Ya){It(!0);try{e()}finally{It(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Qe();if(a!==void 0){var i=a(t);if(Ya){It(!0);try{a(t)}finally{It(!1)}}}else i=t;return l.memoizedState=l.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},l.queue=e,e=e.dispatch=Gp.bind(null,P,e),[l.memoizedState,e]},useRef:function(e){var t=Qe();return e={current:e},t.memoizedState=e},useState:function(e){e=Er(e);var t=e.queue,a=sd.bind(null,P,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Cr,useDeferredValue:function(e,t){var a=Qe();return Ar(a,e,t)},useTransition:function(){var e=Er(!1);return e=td.bind(null,P,e.queue,!0,!1),Qe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=P,i=Qe();if(ne){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),xe===null)throw Error(u(349));(le&127)!==0||Au(l,t,a)}i.memoizedState=a;var n={value:a,getSnapshot:t};return i.queue=n,Zu(Ou.bind(null,l,n,e),[e]),l.flags|=2048,bl(9,{destroy:void 0},Du.bind(null,l,n,a,t),null),a},useId:function(){var e=Qe(),t=xe.identifierPrefix;if(ne){var a=Ct,l=Tt;a=(l&~(1<<32-lt(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=pn++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Up++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Or,useFormState:qu,useActionState:qu,useOptimistic:function(e){var t=Qe();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=kr.bind(null,P,!0,a),a.dispatch=t,[e,t]},useMemoCache:jr,useCacheRefresh:function(){return Qe().memoizedState=qp.bind(null,P)},useEffectEvent:function(e){var t=Qe(),a={impl:e};return t.memoizedState=a,function(){if((de&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},Br={readContext:qe,use:vn,useCallback:Pu,useContext:qe,useEffect:Tr,useImperativeHandle:$u,useInsertionEffect:Ku,useLayoutEffect:Wu,useMemo:Iu,useReducer:xn,useRef:Qu,useState:function(){return xn(qt)},useDebugValue:Cr,useDeferredValue:function(e,t){var a=Te();return ed(a,pe.memoizedState,e,t)},useTransition:function(){var e=xn(qt)[0],t=Te().memoizedState;return[typeof e=="boolean"?e:ni(e),t]},useSyncExternalStore:Cu,useId:id,useHostTransitionStatus:Or,useFormState:Gu,useActionState:Gu,useOptimistic:function(e,t){var a=Te();return Uu(a,pe,e,t)},useMemoCache:jr,useCacheRefresh:nd};Br.useEffectEvent=Ju;var ud={readContext:qe,use:vn,useCallback:Pu,useContext:qe,useEffect:Tr,useImperativeHandle:$u,useInsertionEffect:Ku,useLayoutEffect:Wu,useMemo:Iu,useReducer:Nr,useRef:Qu,useState:function(){return Nr(qt)},useDebugValue:Cr,useDeferredValue:function(e,t){var a=Te();return pe===null?Ar(a,e,t):ed(a,pe.memoizedState,e,t)},useTransition:function(){var e=Nr(qt)[0],t=Te().memoizedState;return[typeof e=="boolean"?e:ni(e),t]},useSyncExternalStore:Cu,useId:id,useHostTransitionStatus:Or,useFormState:Xu,useActionState:Xu,useOptimistic:function(e,t){var a=Te();return pe!==null?Uu(a,pe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:jr,useCacheRefresh:nd};ud.useEffectEvent=Ju;function Ur(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:w({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Lr={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=ut(),i=ra(l);i.payload=t,a!=null&&(i.callback=a),t=oa(e,i,l),t!==null&&(Pe(t,e,l),ti(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=ut(),i=ra(l);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=oa(e,i,l),t!==null&&(Pe(t,e,l),ti(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ut(),l=ra(a);l.tag=2,t!=null&&(l.callback=t),t=oa(e,l,a),t!==null&&(Pe(t,e,a),ti(t,e,a))}};function dd(e,t,a,l,i,n,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,n,c):t.prototype&&t.prototype.isPureReactComponent?!Jl(a,l)||!Jl(i,n):!0}function fd(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Lr.enqueueReplaceState(t,t.state,null)}function Xa(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=w({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function hd(e){Pi(e)}function md(e){console.error(e)}function pd(e){Pi(e)}function Sn(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function gd(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Hr(e,t,a){return a=ra(a),a.tag=3,a.payload={element:null},a.callback=function(){Sn(e,t)},a}function vd(e){return e=ra(e),e.tag=3,e}function xd(e,t,a,l){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var n=l.value;e.payload=function(){return i(n)},e.callback=function(){gd(t,a,l)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){gd(t,a,l),typeof i!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var f=l.stack;this.componentDidCatch(l.value,{componentStack:f!==null?f:""})})}function Yp(e,t,a,l,i){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&fl(t,a,i,!0),a=st.current,a!==null){switch(a.tag){case 31:case 13:return zt===null?Bn():a.alternate===null&&Ee===0&&(Ee=3),a.flags&=-257,a.flags|=65536,a.lanes=i,l===cn?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),oo(e,l,i)),!1;case 22:return a.flags|=65536,l===cn?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),oo(e,l,i)),!1}throw Error(u(435,a.tag))}return oo(e,l,i),Bn(),!1}if(ne)return t=st.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,l!==ar&&(e=Error(u(422),{cause:l}),Fl(pt(e,a)))):(l!==ar&&(t=Error(u(423),{cause:l}),Fl(pt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,l=pt(l,a),i=Hr(e.stateNode,l,i),hr(e,i),Ee!==4&&(Ee=2)),!1;var n=Error(u(520),{cause:l});if(n=pt(n,a),pi===null?pi=[n]:pi.push(n),Ee!==4&&(Ee=2),t===null)return!0;l=pt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=Hr(a.stateNode,l,e),hr(a,e),!1;case 1:if(t=a.type,n=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(ma===null||!ma.has(n))))return a.flags|=65536,i&=-i,a.lanes|=i,i=vd(i),xd(i,e,a,l),hr(a,i),!1}a=a.return}while(a!==null);return!1}var _r=Error(u(461)),De=!1;function Ge(e,t,a,l){t.child=e===null?Su(t,null,a,l):Ga(t,e.child,a,l)}function zd(e,t,a,l,i){a=a.render;var n=t.ref;if("ref"in l){var c={};for(var f in l)f!=="ref"&&(c[f]=l[f])}else c=l;return _a(t),l=zr(e,t,a,c,n,i),f=br(),e!==null&&!De?(yr(e,t,i),Gt(e,t,i)):(ne&&f&&er(t),t.flags|=1,Ge(e,t,l,i),t.child)}function bd(e,t,a,l,i){if(e===null){var n=a.type;return typeof n=="function"&&!$s(n)&&n.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=n,yd(e,t,n,l,i)):(e=an(a.type,null,l,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(n=e.child,!Zr(e,i)){var c=n.memoizedProps;if(a=a.compare,a=a!==null?a:Jl,a(c,l)&&e.ref===t.ref)return Gt(e,t,i)}return t.flags|=1,e=Lt(n,l),e.ref=t.ref,e.return=t,t.child=e}function yd(e,t,a,l,i){if(e!==null){var n=e.memoizedProps;if(Jl(n,l)&&e.ref===t.ref)if(De=!1,t.pendingProps=l=n,Zr(e,i))(e.flags&131072)!==0&&(De=!0);else return t.lanes=e.lanes,Gt(e,t,i)}return Rr(e,t,a,l,i)}function Sd(e,t,a,l){var i=l.children,n=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(n=n!==null?n.baseLanes|a:a,e!==null){for(l=t.child=e.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;l=i&~n}else l=0,t.child=null;return jd(e,t,n,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&rn(t,n!==null?n.cachePool:null),n!==null?Nu(t,n):pr(),Eu(t);else return l=t.lanes=536870912,jd(e,t,n!==null?n.baseLanes|a:a,a,l)}else n!==null?(rn(t,n.cachePool),Nu(t,n),ua(),t.memoizedState=null):(e!==null&&rn(t,null),pr(),ua());return Ge(e,t,i,a),t.child}function oi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function jd(e,t,a,l,i){var n=cr();return n=n===null?null:{parent:Ce._currentValue,pool:n},t.memoizedState={baseLanes:a,cachePool:n},e!==null&&rn(t,null),pr(),Eu(t),e!==null&&fl(e,t,l,!0),t.childLanes=i,null}function jn(e,t){return t=Nn({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function wd(e,t,a){return Ga(t,e.child,null,a),e=jn(t,t.pendingProps),e.flags|=2,rt(t),t.memoizedState=null,e}function Xp(e,t,a){var l=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ne){if(l.mode==="hidden")return e=jn(t,l),t.lanes=536870912,oi(null,e);if(vr(t),(e=ye)?(e=Hf(e,xt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:aa!==null?{id:Tt,overflow:Ct}:null,retryLane:536870912,hydrationErrors:null},a=ru(e),a.return=t,t.child=a,Ve=t,ye=null)):e=null,e===null)throw ia(t);return t.lanes=536870912,null}return jn(t,l)}var n=e.memoizedState;if(n!==null){var c=n.dehydrated;if(vr(t),i)if(t.flags&256)t.flags&=-257,t=wd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(De||fl(e,t,a,!1),i=(a&e.childLanes)!==0,De||i){if(l=xe,l!==null&&(c=mc(l,a),c!==0&&c!==n.retryLane))throw n.retryLane=c,Ba(e,c),Pe(l,e,c),_r;Bn(),t=wd(e,t,a)}else e=n.treeContext,ye=bt(c.nextSibling),Ve=t,ne=!0,la=null,xt=!1,e!==null&&uu(t,e),t=jn(t,l),t.flags|=4096;return t}return e=Lt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function wn(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Rr(e,t,a,l,i){return _a(t),a=zr(e,t,a,l,void 0,i),l=br(),e!==null&&!De?(yr(e,t,i),Gt(e,t,i)):(ne&&l&&er(t),t.flags|=1,Ge(e,t,a,i),t.child)}function Nd(e,t,a,l,i,n){return _a(t),t.updateQueue=null,a=Tu(t,l,a,i),Mu(e),l=br(),e!==null&&!De?(yr(e,t,n),Gt(e,t,n)):(ne&&l&&er(t),t.flags|=1,Ge(e,t,a,n),t.child)}function Ed(e,t,a,l,i){if(_a(t),t.stateNode===null){var n=ol,c=a.contextType;typeof c=="object"&&c!==null&&(n=qe(c)),n=new a(l,n),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Lr,t.stateNode=n,n._reactInternals=t,n=t.stateNode,n.props=l,n.state=t.memoizedState,n.refs={},dr(t),c=a.contextType,n.context=typeof c=="object"&&c!==null?qe(c):ol,n.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(Ur(t,a,c,l),n.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(c=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),c!==n.state&&Lr.enqueueReplaceState(n,n.state,null),li(t,l,n,i),ai(),n.state=t.memoizedState),typeof n.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){n=t.stateNode;var f=t.memoizedProps,p=Xa(a,f);n.props=p;var y=n.context,T=a.contextType;c=ol,typeof T=="object"&&T!==null&&(c=qe(T));var k=a.getDerivedStateFromProps;T=typeof k=="function"||typeof n.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,T||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(f||y!==c)&&fd(t,n,l,c),sa=!1;var S=t.memoizedState;n.state=S,li(t,l,n,i),ai(),y=t.memoizedState,f||S!==y||sa?(typeof k=="function"&&(Ur(t,a,k,l),y=t.memoizedState),(p=sa||dd(t,a,p,l,S,y,c))?(T||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(t.flags|=4194308)):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=y),n.props=l,n.state=y,n.context=c,l=p):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{n=t.stateNode,fr(e,t),c=t.memoizedProps,T=Xa(a,c),n.props=T,k=t.pendingProps,S=n.context,y=a.contextType,p=ol,typeof y=="object"&&y!==null&&(p=qe(y)),f=a.getDerivedStateFromProps,(y=typeof f=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(c!==k||S!==p)&&fd(t,n,l,p),sa=!1,S=t.memoizedState,n.state=S,li(t,l,n,i),ai();var N=t.memoizedState;c!==k||S!==N||sa||e!==null&&e.dependencies!==null&&nn(e.dependencies)?(typeof f=="function"&&(Ur(t,a,f,l),N=t.memoizedState),(T=sa||dd(t,a,T,l,S,N,p)||e!==null&&e.dependencies!==null&&nn(e.dependencies))?(y||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(l,N,p),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(l,N,p)),typeof n.componentDidUpdate=="function"&&(t.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof n.componentDidUpdate!="function"||c===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=N),n.props=l,n.state=N,n.context=p,l=T):(typeof n.componentDidUpdate!="function"||c===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),l=!1)}return n=l,wn(e,t),l=(t.flags&128)!==0,n||l?(n=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:n.render(),t.flags|=1,e!==null&&l?(t.child=Ga(t,e.child,null,i),t.child=Ga(t,null,a,i)):Ge(e,t,a,i),t.memoizedState=n.state,e=t.child):e=Gt(e,t,i),e}function Md(e,t,a,l){return La(),t.flags|=256,Ge(e,t,a,l),t.child}var Vr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qr(e){return{baseLanes:e,cachePool:gu()}}function Gr(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=ct),e}function Td(e,t,a){var l=t.pendingProps,i=!1,n=(t.flags&128)!==0,c;if((c=n)||(c=e!==null&&e.memoizedState===null?!1:(Me.current&2)!==0),c&&(i=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(ne){if(i?ca(t):ua(),(e=ye)?(e=Hf(e,xt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:aa!==null?{id:Tt,overflow:Ct}:null,retryLane:536870912,hydrationErrors:null},a=ru(e),a.return=t,t.child=a,Ve=t,ye=null)):e=null,e===null)throw ia(t);return No(e)?t.lanes=32:t.lanes=536870912,null}var f=l.children;return l=l.fallback,i?(ua(),i=t.mode,f=Nn({mode:"hidden",children:f},i),l=Ua(l,i,a,null),f.return=t,l.return=t,f.sibling=l,t.child=f,l=t.child,l.memoizedState=qr(a),l.childLanes=Gr(e,c,a),t.memoizedState=Vr,oi(null,l)):(ca(t),Yr(t,f))}var p=e.memoizedState;if(p!==null&&(f=p.dehydrated,f!==null)){if(n)t.flags&256?(ca(t),t.flags&=-257,t=Xr(e,t,a)):t.memoizedState!==null?(ua(),t.child=e.child,t.flags|=128,t=null):(ua(),f=l.fallback,i=t.mode,l=Nn({mode:"visible",children:l.children},i),f=Ua(f,i,a,null),f.flags|=2,l.return=t,f.return=t,l.sibling=f,t.child=l,Ga(t,e.child,null,a),l=t.child,l.memoizedState=qr(a),l.childLanes=Gr(e,c,a),t.memoizedState=Vr,t=oi(null,l));else if(ca(t),No(f)){if(c=f.nextSibling&&f.nextSibling.dataset,c)var y=c.dgst;c=y,l=Error(u(419)),l.stack="",l.digest=c,Fl({value:l,source:null,stack:null}),t=Xr(e,t,a)}else if(De||fl(e,t,a,!1),c=(a&e.childLanes)!==0,De||c){if(c=xe,c!==null&&(l=mc(c,a),l!==0&&l!==p.retryLane))throw p.retryLane=l,Ba(e,l),Pe(c,e,l),_r;wo(f)||Bn(),t=Xr(e,t,a)}else wo(f)?(t.flags|=192,t.child=e.child,t=null):(e=p.treeContext,ye=bt(f.nextSibling),Ve=t,ne=!0,la=null,xt=!1,e!==null&&uu(t,e),t=Yr(t,l.children),t.flags|=4096);return t}return i?(ua(),f=l.fallback,i=t.mode,p=e.child,y=p.sibling,l=Lt(p,{mode:"hidden",children:l.children}),l.subtreeFlags=p.subtreeFlags&65011712,y!==null?f=Lt(y,f):(f=Ua(f,i,a,null),f.flags|=2),f.return=t,l.return=t,l.sibling=f,t.child=l,oi(null,l),l=t.child,f=e.child.memoizedState,f===null?f=qr(a):(i=f.cachePool,i!==null?(p=Ce._currentValue,i=i.parent!==p?{parent:p,pool:p}:i):i=gu(),f={baseLanes:f.baseLanes|a,cachePool:i}),l.memoizedState=f,l.childLanes=Gr(e,c,a),t.memoizedState=Vr,oi(e.child,l)):(ca(t),a=e.child,e=a.sibling,a=Lt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function Yr(e,t){return t=Nn({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Nn(e,t){return e=nt(22,e,null,t),e.lanes=0,e}function Xr(e,t,a){return Ga(t,e.child,null,a),e=Yr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Cd(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),nr(e.return,t,a)}function Qr(e,t,a,l,i,n){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:i,treeForkCount:n}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=a,c.tailMode=i,c.treeForkCount=n)}function Ad(e,t,a){var l=t.pendingProps,i=l.revealOrder,n=l.tail;l=l.children;var c=Me.current,f=(c&2)!==0;if(f?(c=c&1|2,t.flags|=128):c&=1,fe(Me,c),Ge(e,t,l,a),l=ne?Wl:0,!f&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cd(e,a,t);else if(e.tag===19)Cd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&hn(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),Qr(t,!1,i,a,n,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&hn(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}Qr(t,!0,a,null,n,l);break;case"together":Qr(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Gt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ha|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(fl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=Lt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Lt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Zr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&nn(e)))}function Qp(e,t,a){switch(t.tag){case 3:Ui(t,t.stateNode.containerInfo),na(t,Ce,e.memoizedState.cache),La();break;case 27:case 5:gs(t);break;case 4:Ui(t,t.stateNode.containerInfo);break;case 10:na(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,vr(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ca(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Td(e,t,a):(ca(t),e=Gt(e,t,a),e!==null?e.sibling:null);ca(t);break;case 19:var i=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(fl(e,t,a,!1),l=(a&t.childLanes)!==0),i){if(l)return Ad(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),fe(Me,Me.current),l)break;return null;case 22:return t.lanes=0,Sd(e,t,a,t.pendingProps);case 24:na(t,Ce,e.memoizedState.cache)}return Gt(e,t,a)}function Dd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)De=!0;else{if(!Zr(e,a)&&(t.flags&128)===0)return De=!1,Qp(e,t,a);De=(e.flags&131072)!==0}else De=!1,ne&&(t.flags&1048576)!==0&&cu(t,Wl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Va(t.elementType),t.type=e,typeof e=="function")$s(e)?(l=Xa(e,l),t.tag=1,t=Ed(null,t,e,l,a)):(t.tag=0,t=Rr(null,t,e,l,a));else{if(e!=null){var i=e.$$typeof;if(i===_){t.tag=11,t=zd(null,t,e,l,a);break e}else if(i===se){t.tag=14,t=bd(null,t,e,l,a);break e}}throw t=et(e)||e,Error(u(306,t,""))}}return t;case 0:return Rr(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,i=Xa(l,t.pendingProps),Ed(e,t,l,i,a);case 3:e:{if(Ui(t,t.stateNode.containerInfo),e===null)throw Error(u(387));l=t.pendingProps;var n=t.memoizedState;i=n.element,fr(e,t),li(t,l,null,a);var c=t.memoizedState;if(l=c.cache,na(t,Ce,l),l!==n.cache&&sr(t,[Ce],a,!0),ai(),l=c.element,n.isDehydrated)if(n={element:l,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=n,t.memoizedState=n,t.flags&256){t=Md(e,t,l,a);break e}else if(l!==i){i=pt(Error(u(424)),t),Fl(i),t=Md(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ye=bt(e.firstChild),Ve=t,ne=!0,la=null,xt=!0,a=Su(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(La(),l===i){t=Gt(e,t,a);break e}Ge(e,t,l,a)}t=t.child}return t;case 26:return wn(e,t),e===null?(a=Yf(t.type,null,t.pendingProps,null))?t.memoizedState=a:ne||(a=t.type,e=t.pendingProps,l=qn(Pt.current).createElement(a),l[Re]=t,l[Ze]=e,Ye(l,a,e),Le(l),t.stateNode=l):t.memoizedState=Yf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return gs(t),e===null&&ne&&(l=t.stateNode=Vf(t.type,t.pendingProps,Pt.current),Ve=t,xt=!0,i=ye,xa(t.type)?(Eo=i,ye=bt(l.firstChild)):ye=i),Ge(e,t,t.pendingProps.children,a),wn(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ne&&((i=l=ye)&&(l=y0(l,t.type,t.pendingProps,xt),l!==null?(t.stateNode=l,Ve=t,ye=bt(l.firstChild),xt=!1,i=!0):i=!1),i||ia(t)),gs(t),i=t.type,n=t.pendingProps,c=e!==null?e.memoizedProps:null,l=n.children,yo(i,n)?l=null:c!==null&&yo(i,c)&&(t.flags|=32),t.memoizedState!==null&&(i=zr(e,t,Lp,null,null,a),ji._currentValue=i),wn(e,t),Ge(e,t,l,a),t.child;case 6:return e===null&&ne&&((e=a=ye)&&(a=S0(a,t.pendingProps,xt),a!==null?(t.stateNode=a,Ve=t,ye=null,e=!0):e=!1),e||ia(t)),null;case 13:return Td(e,t,a);case 4:return Ui(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ga(t,null,l,a):Ge(e,t,l,a),t.child;case 11:return zd(e,t,t.type,t.pendingProps,a);case 7:return Ge(e,t,t.pendingProps,a),t.child;case 8:return Ge(e,t,t.pendingProps.children,a),t.child;case 12:return Ge(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,na(t,t.type,l.value),Ge(e,t,l.children,a),t.child;case 9:return i=t.type._context,l=t.pendingProps.children,_a(t),i=qe(i),l=l(i),t.flags|=1,Ge(e,t,l,a),t.child;case 14:return bd(e,t,t.type,t.pendingProps,a);case 15:return yd(e,t,t.type,t.pendingProps,a);case 19:return Ad(e,t,a);case 31:return Xp(e,t,a);case 22:return Sd(e,t,a,t.pendingProps);case 24:return _a(t),l=qe(Ce),e===null?(i=cr(),i===null&&(i=xe,n=rr(),i.pooledCache=n,n.refCount++,n!==null&&(i.pooledCacheLanes|=a),i=n),t.memoizedState={parent:l,cache:i},dr(t),na(t,Ce,i)):((e.lanes&a)!==0&&(fr(e,t),li(t,null,null,a),ai()),i=e.memoizedState,n=t.memoizedState,i.parent!==l?(i={parent:l,cache:l},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),na(t,Ce,l)):(l=n.cache,na(t,Ce,l),l!==i.cache&&sr(t,[Ce],a,!0))),Ge(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Yt(e){e.flags|=4}function Jr(e,t,a,l,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(nf())e.flags|=8192;else throw qa=cn,ur}else e.flags&=-16777217}function Od(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Kf(t))if(nf())e.flags|=8192;else throw qa=cn,ur}function En(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?dc():536870912,e.lanes|=t,wl|=t)}function ci(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags&65011712,l|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Zp(e,t,a){var l=t.pendingProps;switch(tr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Se(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Rt(Ce),Ka(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(dl(t)?Yt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,lr())),Se(t),null;case 26:var i=t.type,n=t.memoizedState;return e===null?(Yt(t),n!==null?(Se(t),Od(t,n)):(Se(t),Jr(t,i,null,l,a))):n?n!==e.memoizedState?(Yt(t),Se(t),Od(t,n)):(Se(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Yt(t),Se(t),Jr(t,i,e,l,a)),null;case 27:if(Li(t),a=Pt.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Yt(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return Se(t),null}e=Ue.current,dl(t)?du(t):(e=Vf(i,l,a),t.stateNode=e,Yt(t))}return Se(t),null;case 5:if(Li(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Yt(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return Se(t),null}if(n=Ue.current,dl(t))du(t);else{var c=qn(Pt.current);switch(n){case 1:n=c.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:n=c.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":n=c.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":n=c.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":n=c.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?c.createElement(i,{is:l.is}):c.createElement(i)}}n[Re]=t,n[Ze]=l;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)n.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=n;e:switch(Ye(n,i,l),i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Yt(t)}}return Se(t),Jr(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Yt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(u(166));if(e=Pt.current,dl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,i=Ve,i!==null)switch(i.tag){case 27:case 5:l=i.memoizedProps}e[Re]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Cf(e.nodeValue,a)),e||ia(t,!0)}else e=qn(e).createTextNode(l),e[Re]=t,t.stateNode=e}return Se(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=dl(t),a!==null){if(e===null){if(!l)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[Re]=t}else La(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),e=!1}else a=lr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(rt(t),t):(rt(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Se(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=dl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[Re]=t}else La(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),i=!1}else i=lr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(rt(t),t):(rt(t),null)}return rt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,i=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(i=l.alternate.memoizedState.cachePool.pool),n=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(n=l.memoizedState.cachePool.pool),n!==i&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),En(t,t.updateQueue),Se(t),null);case 4:return Ka(),e===null&&go(t.stateNode.containerInfo),Se(t),null;case 10:return Rt(t.type),Se(t),null;case 19:if(we(Me),l=t.memoizedState,l===null)return Se(t),null;if(i=(t.flags&128)!==0,n=l.rendering,n===null)if(i)ci(l,!1);else{if(Ee!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(n=hn(e),n!==null){for(t.flags|=128,ci(l,!1),e=n.updateQueue,t.updateQueue=e,En(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)su(a,e),a=a.sibling;return fe(Me,Me.current&1|2),ne&&Ht(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&tt()>Dn&&(t.flags|=128,i=!0,ci(l,!1),t.lanes=4194304)}else{if(!i)if(e=hn(n),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,En(t,e),ci(l,!0),l.tail===null&&l.tailMode==="hidden"&&!n.alternate&&!ne)return Se(t),null}else 2*tt()-l.renderingStartTime>Dn&&a!==536870912&&(t.flags|=128,i=!0,ci(l,!1),t.lanes=4194304);l.isBackwards?(n.sibling=t.child,t.child=n):(e=l.last,e!==null?e.sibling=n:t.child=n,l.last=n)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=tt(),e.sibling=null,a=Me.current,fe(Me,i?a&1|2:a&1),ne&&Ht(t,l.treeForkCount),e):(Se(t),null);case 22:case 23:return rt(t),gr(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),a=t.updateQueue,a!==null&&En(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&we(Ra),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Rt(Ce),Se(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function Jp(e,t){switch(tr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rt(Ce),Ka(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Li(t),null;case 31:if(t.memoizedState!==null){if(rt(t),t.alternate===null)throw Error(u(340));La()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(rt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));La()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(Me),null;case 4:return Ka(),null;case 10:return Rt(t.type),null;case 22:case 23:return rt(t),gr(),e!==null&&we(Ra),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Rt(Ce),null;case 25:return null;default:return null}}function kd(e,t){switch(tr(t),t.tag){case 3:Rt(Ce),Ka();break;case 26:case 27:case 5:Li(t);break;case 4:Ka();break;case 31:t.memoizedState!==null&&rt(t);break;case 13:rt(t);break;case 19:we(Me);break;case 10:Rt(t.type);break;case 22:case 23:rt(t),gr(),e!==null&&we(Ra);break;case 24:Rt(Ce)}}function ui(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){l=void 0;var n=a.create,c=a.inst;l=n(),c.destroy=l}a=a.next}while(a!==i)}}catch(f){me(t,t.return,f)}}function da(e,t,a){try{var l=t.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var n=i.next;l=n;do{if((l.tag&e)===e){var c=l.inst,f=c.destroy;if(f!==void 0){c.destroy=void 0,i=t;var p=a,y=f;try{y()}catch(T){me(i,p,T)}}}l=l.next}while(l!==n)}}catch(T){me(t,t.return,T)}}function Bd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{wu(t,a)}catch(l){me(e,e.return,l)}}}function Ud(e,t,a){a.props=Xa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){me(e,t,l)}}function di(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(i){me(e,t,i)}}function At(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(i){me(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){me(e,t,i)}else a.current=null}function Ld(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(i){me(e,e.return,i)}}function Kr(e,t,a){try{var l=e.stateNode;p0(l,e.type,a,t),l[Ze]=t}catch(i){me(e,e.return,i)}}function Hd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&xa(e.type)||e.tag===4}function Wr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&xa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fr(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Bt));else if(l!==4&&(l===27&&xa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Fr(e,t,a),e=e.sibling;e!==null;)Fr(e,t,a),e=e.sibling}function Mn(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&xa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Mn(e,t,a),e=e.sibling;e!==null;)Mn(e,t,a),e=e.sibling}function _d(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Ye(t,l,a),t[Re]=e,t[Ze]=a}catch(n){me(e,e.return,n)}}var Xt=!1,Oe=!1,$r=!1,Rd=typeof WeakSet=="function"?WeakSet:Set,He=null;function Kp(e,t){if(e=e.containerInfo,zo=Kn,e=$c(e),Xs(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var i=l.anchorOffset,n=l.focusNode;l=l.focusOffset;try{a.nodeType,n.nodeType}catch{a=null;break e}var c=0,f=-1,p=-1,y=0,T=0,k=e,S=null;t:for(;;){for(var N;k!==a||i!==0&&k.nodeType!==3||(f=c+i),k!==n||l!==0&&k.nodeType!==3||(p=c+l),k.nodeType===3&&(c+=k.nodeValue.length),(N=k.firstChild)!==null;)S=k,k=N;for(;;){if(k===e)break t;if(S===a&&++y===i&&(f=c),S===n&&++T===l&&(p=c),(N=k.nextSibling)!==null)break;k=S,S=k.parentNode}k=N}a=f===-1||p===-1?null:{start:f,end:p}}else a=null}a=a||{start:0,end:0}}else a=null;for(bo={focusedElem:e,selectionRange:a},Kn=!1,He=t;He!==null;)if(t=He,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,He=e;else for(;He!==null;){switch(t=He,n=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&n!==null){e=void 0,a=t,i=n.memoizedProps,n=n.memoizedState,l=a.stateNode;try{var q=Xa(a.type,i);e=l.getSnapshotBeforeUpdate(q,n),l.__reactInternalSnapshotBeforeUpdate=e}catch(W){me(a,a.return,W)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)jo(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":jo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,He=e;break}He=t.return}}function Vd(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Zt(e,a),l&4&&ui(5,a);break;case 1:if(Zt(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){me(a,a.return,c)}else{var i=Xa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){me(a,a.return,c)}}l&64&&Bd(a),l&512&&di(a,a.return);break;case 3:if(Zt(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{wu(e,t)}catch(c){me(a,a.return,c)}}break;case 27:t===null&&l&4&&_d(a);case 26:case 5:Zt(e,a),t===null&&l&4&&Ld(a),l&512&&di(a,a.return);break;case 12:Zt(e,a);break;case 31:Zt(e,a),l&4&&Yd(e,a);break;case 13:Zt(e,a),l&4&&Xd(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=l0.bind(null,a),j0(e,a))));break;case 22:if(l=a.memoizedState!==null||Xt,!l){t=t!==null&&t.memoizedState!==null||Oe,i=Xt;var n=Oe;Xt=l,(Oe=t)&&!n?Jt(e,a,(a.subtreeFlags&8772)!==0):Zt(e,a),Xt=i,Oe=n}break;case 30:break;default:Zt(e,a)}}function qd(e){var t=e.alternate;t!==null&&(e.alternate=null,qd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ms(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var je=null,Ke=!1;function Qt(e,t,a){for(a=a.child;a!==null;)Gd(e,t,a),a=a.sibling}function Gd(e,t,a){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(Ul,a)}catch{}switch(a.tag){case 26:Oe||At(a,t),Qt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Oe||At(a,t);var l=je,i=Ke;xa(a.type)&&(je=a.stateNode,Ke=!1),Qt(e,t,a),bi(a.stateNode),je=l,Ke=i;break;case 5:Oe||At(a,t);case 6:if(l=je,i=Ke,je=null,Qt(e,t,a),je=l,Ke=i,je!==null)if(Ke)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(a.stateNode)}catch(n){me(a,t,n)}else try{je.removeChild(a.stateNode)}catch(n){me(a,t,n)}break;case 18:je!==null&&(Ke?(e=je,Uf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ol(e)):Uf(je,a.stateNode));break;case 4:l=je,i=Ke,je=a.stateNode.containerInfo,Ke=!0,Qt(e,t,a),je=l,Ke=i;break;case 0:case 11:case 14:case 15:da(2,a,t),Oe||da(4,a,t),Qt(e,t,a);break;case 1:Oe||(At(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Ud(a,t,l)),Qt(e,t,a);break;case 21:Qt(e,t,a);break;case 22:Oe=(l=Oe)||a.memoizedState!==null,Qt(e,t,a),Oe=l;break;default:Qt(e,t,a)}}function Yd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ol(e)}catch(a){me(t,t.return,a)}}}function Xd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ol(e)}catch(a){me(t,t.return,a)}}function Wp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Rd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Rd),t;default:throw Error(u(435,e.tag))}}function Tn(e,t){var a=Wp(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var i=i0.bind(null,e,l);l.then(i,i)}})}function We(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var i=a[l],n=e,c=t,f=c;e:for(;f!==null;){switch(f.tag){case 27:if(xa(f.type)){je=f.stateNode,Ke=!1;break e}break;case 5:je=f.stateNode,Ke=!1;break e;case 3:case 4:je=f.stateNode.containerInfo,Ke=!0;break e}f=f.return}if(je===null)throw Error(u(160));Gd(n,c,i),je=null,Ke=!1,n=i.alternate,n!==null&&(n.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Qd(t,e),t=t.sibling}var Nt=null;function Qd(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:We(t,e),Fe(e),l&4&&(da(3,e,e.return),ui(3,e),da(5,e,e.return));break;case 1:We(t,e),Fe(e),l&512&&(Oe||a===null||At(a,a.return)),l&64&&Xt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var i=Nt;if(We(t,e),Fe(e),l&512&&(Oe||a===null||At(a,a.return)),l&4){var n=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(l){case"title":n=i.getElementsByTagName("title")[0],(!n||n[_l]||n[Re]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(l),i.head.insertBefore(n,i.querySelector("head > title"))),Ye(n,l,a),n[Re]=e,Le(n),l=n;break e;case"link":var c=Zf("link","href",i).get(l+(a.href||""));if(c){for(var f=0;f<c.length;f++)if(n=c[f],n.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&n.getAttribute("rel")===(a.rel==null?null:a.rel)&&n.getAttribute("title")===(a.title==null?null:a.title)&&n.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(f,1);break t}}n=i.createElement(l),Ye(n,l,a),i.head.appendChild(n);break;case"meta":if(c=Zf("meta","content",i).get(l+(a.content||""))){for(f=0;f<c.length;f++)if(n=c[f],n.getAttribute("content")===(a.content==null?null:""+a.content)&&n.getAttribute("name")===(a.name==null?null:a.name)&&n.getAttribute("property")===(a.property==null?null:a.property)&&n.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&n.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(f,1);break t}}n=i.createElement(l),Ye(n,l,a),i.head.appendChild(n);break;default:throw Error(u(468,l))}n[Re]=e,Le(n),l=n}e.stateNode=l}else Jf(i,e.type,e.stateNode);else e.stateNode=Qf(i,l,e.memoizedProps);else n!==l?(n===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):n.count--,l===null?Jf(i,e.type,e.stateNode):Qf(i,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Kr(e,e.memoizedProps,a.memoizedProps)}break;case 27:We(t,e),Fe(e),l&512&&(Oe||a===null||At(a,a.return)),a!==null&&l&4&&Kr(e,e.memoizedProps,a.memoizedProps);break;case 5:if(We(t,e),Fe(e),l&512&&(Oe||a===null||At(a,a.return)),e.flags&32){i=e.stateNode;try{tl(i,"")}catch(q){me(e,e.return,q)}}l&4&&e.stateNode!=null&&(i=e.memoizedProps,Kr(e,i,a!==null?a.memoizedProps:i)),l&1024&&($r=!0);break;case 6:if(We(t,e),Fe(e),l&4){if(e.stateNode===null)throw Error(u(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(q){me(e,e.return,q)}}break;case 3:if(Xn=null,i=Nt,Nt=Gn(t.containerInfo),We(t,e),Nt=i,Fe(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Ol(t.containerInfo)}catch(q){me(e,e.return,q)}$r&&($r=!1,Zd(e));break;case 4:l=Nt,Nt=Gn(e.stateNode.containerInfo),We(t,e),Fe(e),Nt=l;break;case 12:We(t,e),Fe(e);break;case 31:We(t,e),Fe(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Tn(e,l)));break;case 13:We(t,e),Fe(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(An=tt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Tn(e,l)));break;case 22:i=e.memoizedState!==null;var p=a!==null&&a.memoizedState!==null,y=Xt,T=Oe;if(Xt=y||i,Oe=T||p,We(t,e),Oe=T,Xt=y,Fe(e),l&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||p||Xt||Oe||Qa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){p=a=t;try{if(n=p.stateNode,i)c=n.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{f=p.stateNode;var k=p.memoizedProps.style,S=k!=null&&k.hasOwnProperty("display")?k.display:null;f.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(q){me(p,p.return,q)}}}else if(t.tag===6){if(a===null){p=t;try{p.stateNode.nodeValue=i?"":p.memoizedProps}catch(q){me(p,p.return,q)}}}else if(t.tag===18){if(a===null){p=t;try{var N=p.stateNode;i?Lf(N,!0):Lf(p.stateNode,!1)}catch(q){me(p,p.return,q)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Tn(e,a))));break;case 19:We(t,e),Fe(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Tn(e,l)));break;case 30:break;case 21:break;default:We(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Hd(l)){a=l;break}l=l.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var i=a.stateNode,n=Wr(e);Mn(e,n,i);break;case 5:var c=a.stateNode;a.flags&32&&(tl(c,""),a.flags&=-33);var f=Wr(e);Mn(e,f,c);break;case 3:case 4:var p=a.stateNode.containerInfo,y=Wr(e);Fr(e,y,p);break;default:throw Error(u(161))}}catch(T){me(e,e.return,T)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Zd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Zt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Vd(e,t.alternate,t),t=t.sibling}function Qa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:da(4,t,t.return),Qa(t);break;case 1:At(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Ud(t,t.return,a),Qa(t);break;case 27:bi(t.stateNode);case 26:case 5:At(t,t.return),Qa(t);break;case 22:t.memoizedState===null&&Qa(t);break;case 30:Qa(t);break;default:Qa(t)}e=e.sibling}}function Jt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,i=e,n=t,c=n.flags;switch(n.tag){case 0:case 11:case 15:Jt(i,n,a),ui(4,n);break;case 1:if(Jt(i,n,a),l=n,i=l.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(y){me(l,l.return,y)}if(l=n,i=l.updateQueue,i!==null){var f=l.stateNode;try{var p=i.shared.hiddenCallbacks;if(p!==null)for(i.shared.hiddenCallbacks=null,i=0;i<p.length;i++)ju(p[i],f)}catch(y){me(l,l.return,y)}}a&&c&64&&Bd(n),di(n,n.return);break;case 27:_d(n);case 26:case 5:Jt(i,n,a),a&&l===null&&c&4&&Ld(n),di(n,n.return);break;case 12:Jt(i,n,a);break;case 31:Jt(i,n,a),a&&c&4&&Yd(i,n);break;case 13:Jt(i,n,a),a&&c&4&&Xd(i,n);break;case 22:n.memoizedState===null&&Jt(i,n,a),di(n,n.return);break;case 30:break;default:Jt(i,n,a)}t=t.sibling}}function Pr(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&$l(a))}function Ir(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$l(e))}function Et(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Jd(e,t,a,l),t=t.sibling}function Jd(e,t,a,l){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Et(e,t,a,l),i&2048&&ui(9,t);break;case 1:Et(e,t,a,l);break;case 3:Et(e,t,a,l),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$l(e)));break;case 12:if(i&2048){Et(e,t,a,l),e=t.stateNode;try{var n=t.memoizedProps,c=n.id,f=n.onPostCommit;typeof f=="function"&&f(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){me(t,t.return,p)}}else Et(e,t,a,l);break;case 31:Et(e,t,a,l);break;case 13:Et(e,t,a,l);break;case 23:break;case 22:n=t.stateNode,c=t.alternate,t.memoizedState!==null?n._visibility&2?Et(e,t,a,l):fi(e,t):n._visibility&2?Et(e,t,a,l):(n._visibility|=2,yl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),i&2048&&Pr(c,t);break;case 24:Et(e,t,a,l),i&2048&&Ir(t.alternate,t);break;default:Et(e,t,a,l)}}function yl(e,t,a,l,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var n=e,c=t,f=a,p=l,y=c.flags;switch(c.tag){case 0:case 11:case 15:yl(n,c,f,p,i),ui(8,c);break;case 23:break;case 22:var T=c.stateNode;c.memoizedState!==null?T._visibility&2?yl(n,c,f,p,i):fi(n,c):(T._visibility|=2,yl(n,c,f,p,i)),i&&y&2048&&Pr(c.alternate,c);break;case 24:yl(n,c,f,p,i),i&&y&2048&&Ir(c.alternate,c);break;default:yl(n,c,f,p,i)}t=t.sibling}}function fi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,i=l.flags;switch(l.tag){case 22:fi(a,l),i&2048&&Pr(l.alternate,l);break;case 24:fi(a,l),i&2048&&Ir(l.alternate,l);break;default:fi(a,l)}t=t.sibling}}var hi=8192;function Sl(e,t,a){if(e.subtreeFlags&hi)for(e=e.child;e!==null;)Kd(e,t,a),e=e.sibling}function Kd(e,t,a){switch(e.tag){case 26:Sl(e,t,a),e.flags&hi&&e.memoizedState!==null&&U0(a,Nt,e.memoizedState,e.memoizedProps);break;case 5:Sl(e,t,a);break;case 3:case 4:var l=Nt;Nt=Gn(e.stateNode.containerInfo),Sl(e,t,a),Nt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=hi,hi=16777216,Sl(e,t,a),hi=l):Sl(e,t,a));break;default:Sl(e,t,a)}}function Wd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function mi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];He=l,$d(l,e)}Wd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fd(e),e=e.sibling}function Fd(e){switch(e.tag){case 0:case 11:case 15:mi(e),e.flags&2048&&da(9,e,e.return);break;case 3:mi(e);break;case 12:mi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Cn(e)):mi(e);break;default:mi(e)}}function Cn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];He=l,$d(l,e)}Wd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:da(8,t,t.return),Cn(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Cn(t));break;default:Cn(t)}e=e.sibling}}function $d(e,t){for(;He!==null;){var a=He;switch(a.tag){case 0:case 11:case 15:da(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:$l(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,He=l;else e:for(a=e;He!==null;){l=He;var i=l.sibling,n=l.return;if(qd(l),l===a){He=null;break e}if(i!==null){i.return=n,He=i;break e}He=n}}}var Fp={getCacheForType:function(e){var t=qe(Ce),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return qe(Ce).controller.signal}},$p=typeof WeakMap=="function"?WeakMap:Map,de=0,xe=null,te=null,le=0,he=0,ot=null,fa=!1,jl=!1,eo=!1,Kt=0,Ee=0,ha=0,Za=0,to=0,ct=0,wl=0,pi=null,$e=null,ao=!1,An=0,Pd=0,Dn=1/0,On=null,ma=null,ke=0,pa=null,Nl=null,Wt=0,lo=0,io=null,Id=null,gi=0,no=null;function ut(){return(de&2)!==0&&le!==0?le&-le:A.T!==null?fo():pc()}function ef(){if(ct===0)if((le&536870912)===0||ne){var e=Ri;Ri<<=1,(Ri&3932160)===0&&(Ri=262144),ct=e}else ct=536870912;return e=st.current,e!==null&&(e.flags|=32),ct}function Pe(e,t,a){(e===xe&&(he===2||he===9)||e.cancelPendingCommit!==null)&&(El(e,0),ga(e,le,ct,!1)),Hl(e,a),((de&2)===0||e!==xe)&&(e===xe&&((de&2)===0&&(Za|=a),Ee===4&&ga(e,le,ct,!1)),Dt(e))}function tf(e,t,a){if((de&6)!==0)throw Error(u(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Ll(e,t),i=l?e0(e,t):ro(e,t,!0),n=l;do{if(i===0){jl&&!l&&ga(e,t,0,!1);break}else{if(a=e.current.alternate,n&&!Pp(a)){i=ro(e,t,!1),n=!1;continue}if(i===2){if(n=t,e.errorRecoveryDisabledLanes&n)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var f=e;i=pi;var p=f.current.memoizedState.isDehydrated;if(p&&(El(f,c).flags|=256),c=ro(f,c,!1),c!==2){if(eo&&!p){f.errorRecoveryDisabledLanes|=n,Za|=n,i=4;break e}n=$e,$e=i,n!==null&&($e===null?$e=n:$e.push.apply($e,n))}i=c}if(n=!1,i!==2)continue}}if(i===1){El(e,0),ga(e,t,0,!0);break}e:{switch(l=e,n=i,n){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:ga(l,t,ct,!fa);break e;case 2:$e=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(i=An+300-tt(),10<i)){if(ga(l,t,ct,!fa),qi(l,0,!0)!==0)break e;Wt=t,l.timeoutHandle=kf(af.bind(null,l,a,$e,On,ao,t,ct,Za,wl,fa,n,"Throttled",-0,0),i);break e}af(l,a,$e,On,ao,t,ct,Za,wl,fa,n,null,-0,0)}}break}while(!0);Dt(e)}function af(e,t,a,l,i,n,c,f,p,y,T,k,S,N){if(e.timeoutHandle=-1,k=t.subtreeFlags,k&8192||(k&16785408)===16785408){k={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bt},Kd(t,n,k);var q=(n&62914560)===n?An-tt():(n&4194048)===n?Pd-tt():0;if(q=L0(k,q),q!==null){Wt=n,e.cancelPendingCommit=q(df.bind(null,e,t,n,a,l,i,c,f,p,T,k,null,S,N)),ga(e,n,c,!y);return}}df(e,t,n,a,l,i,c,f,p)}function Pp(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var i=a[l],n=i.getSnapshot;i=i.value;try{if(!it(n(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ga(e,t,a,l){t&=~to,t&=~Za,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var i=t;0<i;){var n=31-lt(i),c=1<<n;l[n]=-1,i&=~c}a!==0&&fc(e,a,t)}function kn(){return(de&6)===0?(vi(0),!1):!0}function so(){if(te!==null){if(he===0)var e=te.return;else e=te,_t=Ha=null,Sr(e),gl=null,Il=0,e=te;for(;e!==null;)kd(e.alternate,e),e=e.return;te=null}}function El(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,x0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Wt=0,so(),xe=e,te=a=Lt(e.current,null),le=t,he=0,ot=null,fa=!1,jl=Ll(e,t),eo=!1,wl=ct=to=Za=ha=Ee=0,$e=pi=null,ao=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var i=31-lt(l),n=1<<i;t|=e[i],l&=~n}return Kt=t,Ii(),a}function lf(e,t){P=null,A.H=ri,t===pl||t===on?(t=zu(),he=3):t===ur?(t=zu(),he=4):he=t===_r?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ot=t,te===null&&(Ee=1,Sn(e,pt(t,e.current)))}function nf(){var e=st.current;return e===null?!0:(le&4194048)===le?zt===null:(le&62914560)===le||(le&536870912)!==0?e===zt:!1}function sf(){var e=A.H;return A.H=ri,e===null?ri:e}function rf(){var e=A.A;return A.A=Fp,e}function Bn(){Ee=4,fa||(le&4194048)!==le&&st.current!==null||(jl=!0),(ha&134217727)===0&&(Za&134217727)===0||xe===null||ga(xe,le,ct,!1)}function ro(e,t,a){var l=de;de|=2;var i=sf(),n=rf();(xe!==e||le!==t)&&(On=null,El(e,t)),t=!1;var c=Ee;e:do try{if(he!==0&&te!==null){var f=te,p=ot;switch(he){case 8:so(),c=6;break e;case 3:case 2:case 9:case 6:st.current===null&&(t=!0);var y=he;if(he=0,ot=null,Ml(e,f,p,y),a&&jl){c=0;break e}break;default:y=he,he=0,ot=null,Ml(e,f,p,y)}}Ip(),c=Ee;break}catch(T){lf(e,T)}while(!0);return t&&e.shellSuspendCounter++,_t=Ha=null,de=l,A.H=i,A.A=n,te===null&&(xe=null,le=0,Ii()),c}function Ip(){for(;te!==null;)of(te)}function e0(e,t){var a=de;de|=2;var l=sf(),i=rf();xe!==e||le!==t?(On=null,Dn=tt()+500,El(e,t)):jl=Ll(e,t);e:do try{if(he!==0&&te!==null){t=te;var n=ot;t:switch(he){case 1:he=0,ot=null,Ml(e,t,n,1);break;case 2:case 9:if(vu(n)){he=0,ot=null,cf(t);break}t=function(){he!==2&&he!==9||xe!==e||(he=7),Dt(e)},n.then(t,t);break e;case 3:he=7;break e;case 4:he=5;break e;case 7:vu(n)?(he=0,ot=null,cf(t)):(he=0,ot=null,Ml(e,t,n,7));break;case 5:var c=null;switch(te.tag){case 26:c=te.memoizedState;case 5:case 27:var f=te;if(c?Kf(c):f.stateNode.complete){he=0,ot=null;var p=f.sibling;if(p!==null)te=p;else{var y=f.return;y!==null?(te=y,Un(y)):te=null}break t}}he=0,ot=null,Ml(e,t,n,5);break;case 6:he=0,ot=null,Ml(e,t,n,6);break;case 8:so(),Ee=6;break e;default:throw Error(u(462))}}t0();break}catch(T){lf(e,T)}while(!0);return _t=Ha=null,A.H=l,A.A=i,de=a,te!==null?0:(xe=null,le=0,Ii(),Ee)}function t0(){for(;te!==null&&!wm();)of(te)}function of(e){var t=Dd(e.alternate,e,Kt);e.memoizedProps=e.pendingProps,t===null?Un(e):te=t}function cf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Nd(a,t,t.pendingProps,t.type,void 0,le);break;case 11:t=Nd(a,t,t.pendingProps,t.type.render,t.ref,le);break;case 5:Sr(t);default:kd(a,t),t=te=su(t,Kt),t=Dd(a,t,Kt)}e.memoizedProps=e.pendingProps,t===null?Un(e):te=t}function Ml(e,t,a,l){_t=Ha=null,Sr(t),gl=null,Il=0;var i=t.return;try{if(Yp(e,i,t,a,le)){Ee=1,Sn(e,pt(a,e.current)),te=null;return}}catch(n){if(i!==null)throw te=i,n;Ee=1,Sn(e,pt(a,e.current)),te=null;return}t.flags&32768?(ne||l===1?e=!0:jl||(le&536870912)!==0?e=!1:(fa=e=!0,(l===2||l===9||l===3||l===6)&&(l=st.current,l!==null&&l.tag===13&&(l.flags|=16384))),uf(t,e)):Un(t)}function Un(e){var t=e;do{if((t.flags&32768)!==0){uf(t,fa);return}e=t.return;var a=Zp(t.alternate,t,Kt);if(a!==null){te=a;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);Ee===0&&(Ee=5)}function uf(e,t){do{var a=Jp(e.alternate,e);if(a!==null){a.flags&=32767,te=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){te=e;return}te=e=a}while(e!==null);Ee=6,te=null}function df(e,t,a,l,i,n,c,f,p){e.cancelPendingCommit=null;do Ln();while(ke!==0);if((de&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(n=t.lanes|t.childLanes,n|=Ws,Bm(e,a,n,c,f,p),e===xe&&(te=xe=null,le=0),Nl=t,pa=e,Wt=a,lo=n,io=i,Id=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,n0(Hi,function(){return gf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=A.T,A.T=null,i=R.p,R.p=2,c=de,de|=4;try{Kp(e,t,a)}finally{de=c,R.p=i,A.T=l}}ke=1,ff(),hf(),mf()}}function ff(){if(ke===1){ke=0;var e=pa,t=Nl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=A.T,A.T=null;var l=R.p;R.p=2;var i=de;de|=4;try{Qd(t,e);var n=bo,c=$c(e.containerInfo),f=n.focusedElem,p=n.selectionRange;if(c!==f&&f&&f.ownerDocument&&Fc(f.ownerDocument.documentElement,f)){if(p!==null&&Xs(f)){var y=p.start,T=p.end;if(T===void 0&&(T=y),"selectionStart"in f)f.selectionStart=y,f.selectionEnd=Math.min(T,f.value.length);else{var k=f.ownerDocument||document,S=k&&k.defaultView||window;if(S.getSelection){var N=S.getSelection(),q=f.textContent.length,W=Math.min(p.start,q),ve=p.end===void 0?W:Math.min(p.end,q);!N.extend&&W>ve&&(c=ve,ve=W,W=c);var x=Wc(f,W),v=Wc(f,ve);if(x&&v&&(N.rangeCount!==1||N.anchorNode!==x.node||N.anchorOffset!==x.offset||N.focusNode!==v.node||N.focusOffset!==v.offset)){var b=k.createRange();b.setStart(x.node,x.offset),N.removeAllRanges(),W>ve?(N.addRange(b),N.extend(v.node,v.offset)):(b.setEnd(v.node,v.offset),N.addRange(b))}}}}for(k=[],N=f;N=N.parentNode;)N.nodeType===1&&k.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<k.length;f++){var D=k[f];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}Kn=!!zo,bo=zo=null}finally{de=i,R.p=l,A.T=a}}e.current=t,ke=2}}function hf(){if(ke===2){ke=0;var e=pa,t=Nl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=A.T,A.T=null;var l=R.p;R.p=2;var i=de;de|=4;try{Vd(e,t.alternate,t)}finally{de=i,R.p=l,A.T=a}}ke=3}}function mf(){if(ke===4||ke===3){ke=0,Nm();var e=pa,t=Nl,a=Wt,l=Id;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ke=5:(ke=0,Nl=pa=null,pf(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ma=null),Ns(a),t=t.stateNode,at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(Ul,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=A.T,i=R.p,R.p=2,A.T=null;try{for(var n=e.onRecoverableError,c=0;c<l.length;c++){var f=l[c];n(f.value,{componentStack:f.stack})}}finally{A.T=t,R.p=i}}(Wt&3)!==0&&Ln(),Dt(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===no?gi++:(gi=0,no=e):gi=0,vi(0)}}function pf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,$l(t)))}function Ln(){return ff(),hf(),mf(),gf()}function gf(){if(ke!==5)return!1;var e=pa,t=lo;lo=0;var a=Ns(Wt),l=A.T,i=R.p;try{R.p=32>a?32:a,A.T=null,a=io,io=null;var n=pa,c=Wt;if(ke=0,Nl=pa=null,Wt=0,(de&6)!==0)throw Error(u(331));var f=de;if(de|=4,Fd(n.current),Jd(n,n.current,c,a),de=f,vi(0,!1),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(Ul,n)}catch{}return!0}finally{R.p=i,A.T=l,pf(e,t)}}function vf(e,t,a){t=pt(a,t),t=Hr(e.stateNode,t,2),e=oa(e,t,2),e!==null&&(Hl(e,2),Dt(e))}function me(e,t,a){if(e.tag===3)vf(e,e,a);else for(;t!==null;){if(t.tag===3){vf(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ma===null||!ma.has(l))){e=pt(a,e),a=vd(2),l=oa(t,a,2),l!==null&&(xd(a,l,t,e),Hl(l,2),Dt(l));break}}t=t.return}}function oo(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new $p;var i=new Set;l.set(t,i)}else i=l.get(t),i===void 0&&(i=new Set,l.set(t,i));i.has(a)||(eo=!0,i.add(a),e=a0.bind(null,e,t,a),t.then(e,e))}function a0(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,xe===e&&(le&a)===a&&(Ee===4||Ee===3&&(le&62914560)===le&&300>tt()-An?(de&2)===0&&El(e,0):to|=a,wl===le&&(wl=0)),Dt(e)}function xf(e,t){t===0&&(t=dc()),e=Ba(e,t),e!==null&&(Hl(e,t),Dt(e))}function l0(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),xf(e,a)}function i0(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(t),xf(e,a)}function n0(e,t){return ys(e,t)}var Hn=null,Tl=null,co=!1,_n=!1,uo=!1,va=0;function Dt(e){e!==Tl&&e.next===null&&(Tl===null?Hn=Tl=e:Tl=Tl.next=e),_n=!0,co||(co=!0,r0())}function vi(e,t){if(!uo&&_n){uo=!0;do for(var a=!1,l=Hn;l!==null;){if(e!==0){var i=l.pendingLanes;if(i===0)var n=0;else{var c=l.suspendedLanes,f=l.pingedLanes;n=(1<<31-lt(42|e)+1)-1,n&=i&~(c&~f),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(a=!0,Sf(l,n))}else n=le,n=qi(l,l===xe?n:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(n&3)===0||Ll(l,n)||(a=!0,Sf(l,n));l=l.next}while(a);uo=!1}}function s0(){zf()}function zf(){_n=co=!1;var e=0;va!==0&&v0()&&(e=va);for(var t=tt(),a=null,l=Hn;l!==null;){var i=l.next,n=bf(l,t);n===0?(l.next=null,a===null?Hn=i:a.next=i,i===null&&(Tl=a)):(a=l,(e!==0||(n&3)!==0)&&(_n=!0)),l=i}ke!==0&&ke!==5||vi(e),va!==0&&(va=0)}function bf(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,i=e.expirationTimes,n=e.pendingLanes&-62914561;0<n;){var c=31-lt(n),f=1<<c,p=i[c];p===-1?((f&a)===0||(f&l)!==0)&&(i[c]=km(f,t)):p<=t&&(e.expiredLanes|=f),n&=~f}if(t=xe,a=le,a=qi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(he===2||he===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Ss(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ll(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Ss(l),Ns(a)){case 2:case 8:a=cc;break;case 32:a=Hi;break;case 268435456:a=uc;break;default:a=Hi}return l=yf.bind(null,e),a=ys(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Ss(l),e.callbackPriority=2,e.callbackNode=null,2}function yf(e,t){if(ke!==0&&ke!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ln()&&e.callbackNode!==a)return null;var l=le;return l=qi(e,e===xe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(tf(e,l,t),bf(e,tt()),e.callbackNode!=null&&e.callbackNode===a?yf.bind(null,e):null)}function Sf(e,t){if(Ln())return null;tf(e,t,!0)}function r0(){z0(function(){(de&6)!==0?ys(oc,s0):zf()})}function fo(){if(va===0){var e=hl;e===0&&(e=_i,_i<<=1,(_i&261888)===0&&(_i=256)),va=e}return va}function jf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Qi(""+e)}function wf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function o0(e,t,a,l,i){if(t==="submit"&&a&&a.stateNode===i){var n=jf((i[Ze]||null).action),c=l.submitter;c&&(t=(t=c[Ze]||null)?jf(t.formAction):c.getAttribute("formAction"),t!==null&&(n=t,c=null));var f=new Wi("action","action",null,l,i);e.push({event:f,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(va!==0){var p=c?wf(i,c):new FormData(i);Dr(a,{pending:!0,data:p,method:i.method,action:n},null,p)}}else typeof n=="function"&&(f.preventDefault(),p=c?wf(i,c):new FormData(i),Dr(a,{pending:!0,data:p,method:i.method,action:n},n,p))},currentTarget:i}]})}}for(var ho=0;ho<Ks.length;ho++){var mo=Ks[ho],c0=mo.toLowerCase(),u0=mo[0].toUpperCase()+mo.slice(1);wt(c0,"on"+u0)}wt(eu,"onAnimationEnd"),wt(tu,"onAnimationIteration"),wt(au,"onAnimationStart"),wt("dblclick","onDoubleClick"),wt("focusin","onFocus"),wt("focusout","onBlur"),wt(Ep,"onTransitionRun"),wt(Mp,"onTransitionStart"),wt(Tp,"onTransitionCancel"),wt(lu,"onTransitionEnd"),Ia("onMouseEnter",["mouseout","mouseover"]),Ia("onMouseLeave",["mouseout","mouseover"]),Ia("onPointerEnter",["pointerout","pointerover"]),Ia("onPointerLeave",["pointerout","pointerover"]),Aa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Aa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Aa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Aa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xi));function Nf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],i=l.event;l=l.listeners;e:{var n=void 0;if(t)for(var c=l.length-1;0<=c;c--){var f=l[c],p=f.instance,y=f.currentTarget;if(f=f.listener,p!==n&&i.isPropagationStopped())break e;n=f,i.currentTarget=y;try{n(i)}catch(T){Pi(T)}i.currentTarget=null,n=p}else for(c=0;c<l.length;c++){if(f=l[c],p=f.instance,y=f.currentTarget,f=f.listener,p!==n&&i.isPropagationStopped())break e;n=f,i.currentTarget=y;try{n(i)}catch(T){Pi(T)}i.currentTarget=null,n=p}}}}function ae(e,t){var a=t[Es];a===void 0&&(a=t[Es]=new Set);var l=e+"__bubble";a.has(l)||(Ef(t,e,2,!1),a.add(l))}function po(e,t,a){var l=0;t&&(l|=4),Ef(a,e,l,t)}var Rn="_reactListening"+Math.random().toString(36).slice(2);function go(e){if(!e[Rn]){e[Rn]=!0,xc.forEach(function(a){a!=="selectionchange"&&(d0.has(a)||po(a,!1,e),po(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Rn]||(t[Rn]=!0,po("selectionchange",!1,t))}}function Ef(e,t,a,l){switch(th(t)){case 2:var i=R0;break;case 8:i=V0;break;default:i=Do}a=i.bind(null,t,a,e),i=void 0,!Us||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),l?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function vo(e,t,a,l,i){var n=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var f=l.stateNode.containerInfo;if(f===i)break;if(c===4)for(c=l.return;c!==null;){var p=c.tag;if((p===3||p===4)&&c.stateNode.containerInfo===i)return;c=c.return}for(;f!==null;){if(c=Fa(f),c===null)return;if(p=c.tag,p===5||p===6||p===26||p===27){l=n=c;continue e}f=f.parentNode}}l=l.return}Ac(function(){var y=n,T=ks(a),k=[];e:{var S=iu.get(e);if(S!==void 0){var N=Wi,q=e;switch(e){case"keypress":if(Ji(a)===0)break e;case"keydown":case"keyup":N=ip;break;case"focusin":q="focus",N=Rs;break;case"focusout":q="blur",N=Rs;break;case"beforeblur":case"afterblur":N=Rs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=kc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=Zm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=rp;break;case eu:case tu:case au:N=Wm;break;case lu:N=cp;break;case"scroll":case"scrollend":N=Xm;break;case"wheel":N=dp;break;case"copy":case"cut":case"paste":N=$m;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Uc;break;case"toggle":case"beforetoggle":N=hp}var W=(t&4)!==0,ve=!W&&(e==="scroll"||e==="scrollend"),x=W?S!==null?S+"Capture":null:S;W=[];for(var v=y,b;v!==null;){var D=v;if(b=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||b===null||x===null||(D=Vl(v,x),D!=null&&W.push(zi(v,D,b))),ve)break;v=v.return}0<W.length&&(S=new N(S,q,null,a,T),k.push({event:S,listeners:W}))}}if((t&7)===0){e:{if(S=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",S&&a!==Os&&(q=a.relatedTarget||a.fromElement)&&(Fa(q)||q[Wa]))break e;if((N||S)&&(S=T.window===T?T:(S=T.ownerDocument)?S.defaultView||S.parentWindow:window,N?(q=a.relatedTarget||a.toElement,N=y,q=q?Fa(q):null,q!==null&&(ve=m(q),W=q.tag,q!==ve||W!==5&&W!==27&&W!==6)&&(q=null)):(N=null,q=y),N!==q)){if(W=kc,D="onMouseLeave",x="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(W=Uc,D="onPointerLeave",x="onPointerEnter",v="pointer"),ve=N==null?S:Rl(N),b=q==null?S:Rl(q),S=new W(D,v+"leave",N,a,T),S.target=ve,S.relatedTarget=b,D=null,Fa(T)===y&&(W=new W(x,v+"enter",q,a,T),W.target=b,W.relatedTarget=ve,D=W),ve=D,N&&q)t:{for(W=f0,x=N,v=q,b=0,D=x;D;D=W(D))b++;D=0;for(var J=v;J;J=W(J))D++;for(;0<b-D;)x=W(x),b--;for(;0<D-b;)v=W(v),D--;for(;b--;){if(x===v||v!==null&&x===v.alternate){W=x;break t}x=W(x),v=W(v)}W=null}else W=null;N!==null&&Mf(k,S,N,W,!1),q!==null&&ve!==null&&Mf(k,ve,q,W,!0)}}e:{if(S=y?Rl(y):window,N=S.nodeName&&S.nodeName.toLowerCase(),N==="select"||N==="input"&&S.type==="file")var oe=Yc;else if(qc(S))if(Xc)oe=jp;else{oe=yp;var Y=bp}else N=S.nodeName,!N||N.toLowerCase()!=="input"||S.type!=="checkbox"&&S.type!=="radio"?y&&Ds(y.elementType)&&(oe=Yc):oe=Sp;if(oe&&(oe=oe(e,y))){Gc(k,oe,a,T);break e}Y&&Y(e,S,y),e==="focusout"&&y&&S.type==="number"&&y.memoizedProps.value!=null&&As(S,"number",S.value)}switch(Y=y?Rl(y):window,e){case"focusin":(qc(Y)||Y.contentEditable==="true")&&(nl=Y,Qs=y,Kl=null);break;case"focusout":Kl=Qs=nl=null;break;case"mousedown":Zs=!0;break;case"contextmenu":case"mouseup":case"dragend":Zs=!1,Pc(k,a,T);break;case"selectionchange":if(Np)break;case"keydown":case"keyup":Pc(k,a,T)}var ee;if(qs)e:{switch(e){case"compositionstart":var ie="onCompositionStart";break e;case"compositionend":ie="onCompositionEnd";break e;case"compositionupdate":ie="onCompositionUpdate";break e}ie=void 0}else il?Rc(e,a)&&(ie="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ie="onCompositionStart");ie&&(Lc&&a.locale!=="ko"&&(il||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&il&&(ee=Dc()):(ta=T,Ls="value"in ta?ta.value:ta.textContent,il=!0)),Y=Vn(y,ie),0<Y.length&&(ie=new Bc(ie,e,null,a,T),k.push({event:ie,listeners:Y}),ee?ie.data=ee:(ee=Vc(a),ee!==null&&(ie.data=ee)))),(ee=pp?gp(e,a):vp(e,a))&&(ie=Vn(y,"onBeforeInput"),0<ie.length&&(Y=new Bc("onBeforeInput","beforeinput",null,a,T),k.push({event:Y,listeners:ie}),Y.data=ee)),o0(k,e,y,a,T)}Nf(k,t)})}function zi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Vn(e,t){for(var a=t+"Capture",l=[];e!==null;){var i=e,n=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||n===null||(i=Vl(e,a),i!=null&&l.unshift(zi(e,i,n)),i=Vl(e,t),i!=null&&l.push(zi(e,i,n))),e.tag===3)return l;e=e.return}return[]}function f0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Mf(e,t,a,l,i){for(var n=t._reactName,c=[];a!==null&&a!==l;){var f=a,p=f.alternate,y=f.stateNode;if(f=f.tag,p!==null&&p===l)break;f!==5&&f!==26&&f!==27||y===null||(p=y,i?(y=Vl(a,n),y!=null&&c.unshift(zi(a,y,p))):i||(y=Vl(a,n),y!=null&&c.push(zi(a,y,p)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var h0=/\r\n?/g,m0=/\u0000|\uFFFD/g;function Tf(e){return(typeof e=="string"?e:""+e).replace(h0,`
`).replace(m0,"")}function Cf(e,t){return t=Tf(t),Tf(e)===t}function ge(e,t,a,l,i,n){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||tl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&tl(e,""+l);break;case"className":Yi(e,"class",l);break;case"tabIndex":Yi(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Yi(e,a,l);break;case"style":Tc(e,l,n);break;case"data":if(t!=="object"){Yi(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Qi(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(a==="formAction"?(t!=="input"&&ge(e,t,"name",i.name,i,null),ge(e,t,"formEncType",i.formEncType,i,null),ge(e,t,"formMethod",i.formMethod,i,null),ge(e,t,"formTarget",i.formTarget,i,null)):(ge(e,t,"encType",i.encType,i,null),ge(e,t,"method",i.method,i,null),ge(e,t,"target",i.target,i,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Qi(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Bt);break;case"onScroll":l!=null&&ae("scroll",e);break;case"onScrollEnd":l!=null&&ae("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Qi(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ae("beforetoggle",e),ae("toggle",e),Gi(e,"popover",l);break;case"xlinkActuate":kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":kt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":kt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":kt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":kt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Gi(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Gm.get(a)||a,Gi(e,a,l))}}function xo(e,t,a,l,i,n){switch(a){case"style":Tc(e,l,n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof l=="string"?tl(e,l):(typeof l=="number"||typeof l=="bigint")&&tl(e,""+l);break;case"onScroll":l!=null&&ae("scroll",e);break;case"onScrollEnd":l!=null&&ae("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Bt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!zc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),n=e[Ze]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(t,n,i),typeof l=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,i);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Gi(e,a,l)}}}function Ye(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ae("error",e),ae("load",e);var l=!1,i=!1,n;for(n in a)if(a.hasOwnProperty(n)){var c=a[n];if(c!=null)switch(n){case"src":l=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:ge(e,t,n,c,a,null)}}i&&ge(e,t,"srcSet",a.srcSet,a,null),l&&ge(e,t,"src",a.src,a,null);return;case"input":ae("invalid",e);var f=n=c=i=null,p=null,y=null;for(l in a)if(a.hasOwnProperty(l)){var T=a[l];if(T!=null)switch(l){case"name":i=T;break;case"type":c=T;break;case"checked":p=T;break;case"defaultChecked":y=T;break;case"value":n=T;break;case"defaultValue":f=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(u(137,t));break;default:ge(e,t,l,T,a,null)}}wc(e,n,f,p,y,c,i,!1);return;case"select":ae("invalid",e),l=c=n=null;for(i in a)if(a.hasOwnProperty(i)&&(f=a[i],f!=null))switch(i){case"value":n=f;break;case"defaultValue":c=f;break;case"multiple":l=f;default:ge(e,t,i,f,a,null)}t=n,a=c,e.multiple=!!l,t!=null?el(e,!!l,t,!1):a!=null&&el(e,!!l,a,!0);return;case"textarea":ae("invalid",e),n=i=l=null;for(c in a)if(a.hasOwnProperty(c)&&(f=a[c],f!=null))switch(c){case"value":l=f;break;case"defaultValue":i=f;break;case"children":n=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(u(91));break;default:ge(e,t,c,f,a,null)}Ec(e,l,i,n);return;case"option":for(p in a)if(a.hasOwnProperty(p)&&(l=a[p],l!=null))switch(p){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ge(e,t,p,l,a,null)}return;case"dialog":ae("beforetoggle",e),ae("toggle",e),ae("cancel",e),ae("close",e);break;case"iframe":case"object":ae("load",e);break;case"video":case"audio":for(l=0;l<xi.length;l++)ae(xi[l],e);break;case"image":ae("error",e),ae("load",e);break;case"details":ae("toggle",e);break;case"embed":case"source":case"link":ae("error",e),ae("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(y in a)if(a.hasOwnProperty(y)&&(l=a[y],l!=null))switch(y){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:ge(e,t,y,l,a,null)}return;default:if(Ds(t)){for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!==void 0&&xo(e,t,T,l,a,void 0));return}}for(f in a)a.hasOwnProperty(f)&&(l=a[f],l!=null&&ge(e,t,f,l,a,null))}function p0(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,n=null,c=null,f=null,p=null,y=null,T=null;for(N in a){var k=a[N];if(a.hasOwnProperty(N)&&k!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":p=k;default:l.hasOwnProperty(N)||ge(e,t,N,null,l,k)}}for(var S in l){var N=l[S];if(k=a[S],l.hasOwnProperty(S)&&(N!=null||k!=null))switch(S){case"type":n=N;break;case"name":i=N;break;case"checked":y=N;break;case"defaultChecked":T=N;break;case"value":c=N;break;case"defaultValue":f=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(u(137,t));break;default:N!==k&&ge(e,t,S,N,l,k)}}Cs(e,c,f,p,y,T,n,i);return;case"select":N=c=f=S=null;for(n in a)if(p=a[n],a.hasOwnProperty(n)&&p!=null)switch(n){case"value":break;case"multiple":N=p;default:l.hasOwnProperty(n)||ge(e,t,n,null,l,p)}for(i in l)if(n=l[i],p=a[i],l.hasOwnProperty(i)&&(n!=null||p!=null))switch(i){case"value":S=n;break;case"defaultValue":f=n;break;case"multiple":c=n;default:n!==p&&ge(e,t,i,n,l,p)}t=f,a=c,l=N,S!=null?el(e,!!a,S,!1):!!l!=!!a&&(t!=null?el(e,!!a,t,!0):el(e,!!a,a?[]:"",!1));return;case"textarea":N=S=null;for(f in a)if(i=a[f],a.hasOwnProperty(f)&&i!=null&&!l.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:ge(e,t,f,null,l,i)}for(c in l)if(i=l[c],n=a[c],l.hasOwnProperty(c)&&(i!=null||n!=null))switch(c){case"value":S=i;break;case"defaultValue":N=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(u(91));break;default:i!==n&&ge(e,t,c,i,l,n)}Nc(e,S,N);return;case"option":for(var q in a)if(S=a[q],a.hasOwnProperty(q)&&S!=null&&!l.hasOwnProperty(q))switch(q){case"selected":e.selected=!1;break;default:ge(e,t,q,null,l,S)}for(p in l)if(S=l[p],N=a[p],l.hasOwnProperty(p)&&S!==N&&(S!=null||N!=null))switch(p){case"selected":e.selected=S&&typeof S!="function"&&typeof S!="symbol";break;default:ge(e,t,p,S,l,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in a)S=a[W],a.hasOwnProperty(W)&&S!=null&&!l.hasOwnProperty(W)&&ge(e,t,W,null,l,S);for(y in l)if(S=l[y],N=a[y],l.hasOwnProperty(y)&&S!==N&&(S!=null||N!=null))switch(y){case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(u(137,t));break;default:ge(e,t,y,S,l,N)}return;default:if(Ds(t)){for(var ve in a)S=a[ve],a.hasOwnProperty(ve)&&S!==void 0&&!l.hasOwnProperty(ve)&&xo(e,t,ve,void 0,l,S);for(T in l)S=l[T],N=a[T],!l.hasOwnProperty(T)||S===N||S===void 0&&N===void 0||xo(e,t,T,S,l,N);return}}for(var x in a)S=a[x],a.hasOwnProperty(x)&&S!=null&&!l.hasOwnProperty(x)&&ge(e,t,x,null,l,S);for(k in l)S=l[k],N=a[k],!l.hasOwnProperty(k)||S===N||S==null&&N==null||ge(e,t,k,S,l,N)}function Af(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function g0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var i=a[l],n=i.transferSize,c=i.initiatorType,f=i.duration;if(n&&f&&Af(c)){for(c=0,f=i.responseEnd,l+=1;l<a.length;l++){var p=a[l],y=p.startTime;if(y>f)break;var T=p.transferSize,k=p.initiatorType;T&&Af(k)&&(p=p.responseEnd,c+=T*(p<f?1:(f-y)/(p-y)))}if(--l,t+=8*(n+c)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var zo=null,bo=null;function qn(e){return e.nodeType===9?e:e.ownerDocument}function Df(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Of(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function yo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var So=null;function v0(){var e=window.event;return e&&e.type==="popstate"?e===So?!1:(So=e,!0):(So=null,!1)}var kf=typeof setTimeout=="function"?setTimeout:void 0,x0=typeof clearTimeout=="function"?clearTimeout:void 0,Bf=typeof Promise=="function"?Promise:void 0,z0=typeof queueMicrotask=="function"?queueMicrotask:typeof Bf<"u"?function(e){return Bf.resolve(null).then(e).catch(b0)}:kf;function b0(e){setTimeout(function(){throw e})}function xa(e){return e==="head"}function Uf(e,t){var a=t,l=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(i),Ol(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")bi(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,bi(a);for(var n=a.firstChild;n;){var c=n.nextSibling,f=n.nodeName;n[_l]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&n.rel.toLowerCase()==="stylesheet"||a.removeChild(n),n=c}}else a==="body"&&bi(e.ownerDocument.body);a=i}while(a);Ol(t)}function Lf(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function jo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":jo(a),Ms(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function y0(e,t,a,l){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[_l])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(n=e.getAttribute("rel"),n==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(n!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(n=e.getAttribute("src"),(n!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&n&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var n=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===n)return e}else return e;if(e=bt(e.nextSibling),e===null)break}return null}function S0(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=bt(e.nextSibling),e===null))return null;return e}function Hf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=bt(e.nextSibling),e===null))return null;return e}function wo(e){return e.data==="$?"||e.data==="$~"}function No(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function j0(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Eo=null;function _f(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return bt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Rf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Vf(e,t,a){switch(t=qn(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function bi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ms(e)}var yt=new Map,qf=new Set;function Gn(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ft=R.d;R.d={f:w0,r:N0,D:E0,C:M0,L:T0,m:C0,X:D0,S:A0,M:O0};function w0(){var e=Ft.f(),t=kn();return e||t}function N0(e){var t=$a(e);t!==null&&t.tag===5&&t.type==="form"?ld(t):Ft.r(e)}var Cl=typeof document>"u"?null:document;function Gf(e,t,a){var l=Cl;if(l&&typeof t=="string"&&t){var i=ht(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),qf.has(i)||(qf.add(i),e={rel:e,crossOrigin:a,href:t},l.querySelector(i)===null&&(t=l.createElement("link"),Ye(t,"link",e),Le(t),l.head.appendChild(t)))}}function E0(e){Ft.D(e),Gf("dns-prefetch",e,null)}function M0(e,t){Ft.C(e,t),Gf("preconnect",e,t)}function T0(e,t,a){Ft.L(e,t,a);var l=Cl;if(l&&e&&t){var i='link[rel="preload"][as="'+ht(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+ht(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+ht(a.imageSizes)+'"]')):i+='[href="'+ht(e)+'"]';var n=i;switch(t){case"style":n=Al(e);break;case"script":n=Dl(e)}yt.has(n)||(e=w({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),yt.set(n,e),l.querySelector(i)!==null||t==="style"&&l.querySelector(yi(n))||t==="script"&&l.querySelector(Si(n))||(t=l.createElement("link"),Ye(t,"link",e),Le(t),l.head.appendChild(t)))}}function C0(e,t){Ft.m(e,t);var a=Cl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+ht(l)+'"][href="'+ht(e)+'"]',n=i;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=Dl(e)}if(!yt.has(n)&&(e=w({rel:"modulepreload",href:e},t),yt.set(n,e),a.querySelector(i)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Si(n)))return}l=a.createElement("link"),Ye(l,"link",e),Le(l),a.head.appendChild(l)}}}function A0(e,t,a){Ft.S(e,t,a);var l=Cl;if(l&&e){var i=Pa(l).hoistableStyles,n=Al(e);t=t||"default";var c=i.get(n);if(!c){var f={loading:0,preload:null};if(c=l.querySelector(yi(n)))f.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},a),(a=yt.get(n))&&Mo(e,a);var p=c=l.createElement("link");Le(p),Ye(p,"link",e),p._p=new Promise(function(y,T){p.onload=y,p.onerror=T}),p.addEventListener("load",function(){f.loading|=1}),p.addEventListener("error",function(){f.loading|=2}),f.loading|=4,Yn(c,t,l)}c={type:"stylesheet",instance:c,count:1,state:f},i.set(n,c)}}}function D0(e,t){Ft.X(e,t);var a=Cl;if(a&&e){var l=Pa(a).hoistableScripts,i=Dl(e),n=l.get(i);n||(n=a.querySelector(Si(i)),n||(e=w({src:e,async:!0},t),(t=yt.get(i))&&To(e,t),n=a.createElement("script"),Le(n),Ye(n,"link",e),a.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},l.set(i,n))}}function O0(e,t){Ft.M(e,t);var a=Cl;if(a&&e){var l=Pa(a).hoistableScripts,i=Dl(e),n=l.get(i);n||(n=a.querySelector(Si(i)),n||(e=w({src:e,async:!0,type:"module"},t),(t=yt.get(i))&&To(e,t),n=a.createElement("script"),Le(n),Ye(n,"link",e),a.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},l.set(i,n))}}function Yf(e,t,a,l){var i=(i=Pt.current)?Gn(i):null;if(!i)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Al(a.href),a=Pa(i).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Al(a.href);var n=Pa(i).hoistableStyles,c=n.get(e);if(c||(i=i.ownerDocument||i,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(e,c),(n=i.querySelector(yi(e)))&&!n._p&&(c.instance=n,c.state.loading=5),yt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yt.set(e,a),n||k0(i,e,a,c.state))),t&&l===null)throw Error(u(528,""));return c}if(t&&l!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Dl(a),a=Pa(i).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Al(e){return'href="'+ht(e)+'"'}function yi(e){return'link[rel="stylesheet"]['+e+"]"}function Xf(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function k0(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Ye(t,"link",a),Le(t),e.head.appendChild(t))}function Dl(e){return'[src="'+ht(e)+'"]'}function Si(e){return"script[async]"+e}function Qf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+ht(a.href)+'"]');if(l)return t.instance=l,Le(l),l;var i=w({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Le(l),Ye(l,"style",i),Yn(l,a.precedence,e),t.instance=l;case"stylesheet":i=Al(a.href);var n=e.querySelector(yi(i));if(n)return t.state.loading|=4,t.instance=n,Le(n),n;l=Xf(a),(i=yt.get(i))&&Mo(l,i),n=(e.ownerDocument||e).createElement("link"),Le(n);var c=n;return c._p=new Promise(function(f,p){c.onload=f,c.onerror=p}),Ye(n,"link",l),t.state.loading|=4,Yn(n,a.precedence,e),t.instance=n;case"script":return n=Dl(a.src),(i=e.querySelector(Si(n)))?(t.instance=i,Le(i),i):(l=a,(i=yt.get(n))&&(l=w({},a),To(l,i)),e=e.ownerDocument||e,i=e.createElement("script"),Le(i),Ye(i,"link",l),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Yn(l,a.precedence,e));return t.instance}function Yn(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=l.length?l[l.length-1]:null,n=i,c=0;c<l.length;c++){var f=l[c];if(f.dataset.precedence===t)n=f;else if(n!==i)break}n?n.parentNode.insertBefore(e,n.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Mo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function To(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Xn=null;function Zf(e,t,a){if(Xn===null){var l=new Map,i=Xn=new Map;i.set(a,l)}else i=Xn,l=i.get(a),l||(l=new Map,i.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var n=a[i];if(!(n[_l]||n[Re]||e==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var c=n.getAttribute(t)||"";c=e+c;var f=l.get(c);f?f.push(n):l.set(c,[n])}}return l}function Jf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function B0(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Kf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function U0(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=Al(l.href),n=t.querySelector(yi(i));if(n){t=n._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Qn.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=n,Le(n);return}n=t.ownerDocument||t,l=Xf(l),(i=yt.get(i))&&Mo(l,i),n=n.createElement("link"),Le(n);var c=n;c._p=new Promise(function(f,p){c.onload=f,c.onerror=p}),Ye(n,"link",l),a.instance=n}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Qn.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Co=0;function L0(e,t){return e.stylesheets&&e.count===0&&Jn(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Jn(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4+t);0<e.imgBytes&&Co===0&&(Co=62500*g0());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Jn(e,e.stylesheets),e.unsuspend)){var n=e.unsuspend;e.unsuspend=null,n()}},(e.imgBytes>Co?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(i)}}:null}function Qn(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Jn(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Zn=null;function Jn(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Zn=new Map,t.forEach(H0,e),Zn=null,Qn.call(e))}function H0(e,t){if(!(t.state.loading&4)){var a=Zn.get(e);if(a)var l=a.get(null);else{a=new Map,Zn.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<i.length;n++){var c=i[n];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),l=c)}l&&a.set(null,l)}i=t.instance,c=i.getAttribute("data-precedence"),n=a.get(c)||l,n===l&&a.set(null,i),a.set(c,i),this.count++,l=Qn.bind(this),i.addEventListener("load",l),i.addEventListener("error",l),n?n.parentNode.insertBefore(i,n.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var ji={$$typeof:X,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function _0(e,t,a,l,i,n,c,f,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=js(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=js(0),this.hiddenUpdates=js(null),this.identifierPrefix=l,this.onUncaughtError=i,this.onCaughtError=n,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function Wf(e,t,a,l,i,n,c,f,p,y,T,k){return e=new _0(e,t,a,c,p,y,T,k,f),t=1,n===!0&&(t|=24),n=nt(3,null,null,t),e.current=n,n.stateNode=e,t=rr(),t.refCount++,e.pooledCache=t,t.refCount++,n.memoizedState={element:l,isDehydrated:a,cache:t},dr(n),e}function Ff(e){return e?(e=ol,e):ol}function $f(e,t,a,l,i,n){i=Ff(i),l.context===null?l.context=i:l.pendingContext=i,l=ra(t),l.payload={element:a},n=n===void 0?null:n,n!==null&&(l.callback=n),a=oa(e,l,t),a!==null&&(Pe(a,e,t),ti(a,e,t))}function Pf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Ao(e,t){Pf(e,t),(e=e.alternate)&&Pf(e,t)}function If(e){if(e.tag===13||e.tag===31){var t=Ba(e,67108864);t!==null&&Pe(t,e,67108864),Ao(e,67108864)}}function eh(e){if(e.tag===13||e.tag===31){var t=ut();t=ws(t);var a=Ba(e,t);a!==null&&Pe(a,e,t),Ao(e,t)}}var Kn=!0;function R0(e,t,a,l){var i=A.T;A.T=null;var n=R.p;try{R.p=2,Do(e,t,a,l)}finally{R.p=n,A.T=i}}function V0(e,t,a,l){var i=A.T;A.T=null;var n=R.p;try{R.p=8,Do(e,t,a,l)}finally{R.p=n,A.T=i}}function Do(e,t,a,l){if(Kn){var i=Oo(l);if(i===null)vo(e,t,l,Wn,a),ah(e,l);else if(G0(i,e,t,a,l))l.stopPropagation();else if(ah(e,l),t&4&&-1<q0.indexOf(e)){for(;i!==null;){var n=$a(i);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var c=Ca(n.pendingLanes);if(c!==0){var f=n;for(f.pendingLanes|=2,f.entangledLanes|=2;c;){var p=1<<31-lt(c);f.entanglements[1]|=p,c&=~p}Dt(n),(de&6)===0&&(Dn=tt()+500,vi(0))}}break;case 31:case 13:f=Ba(n,2),f!==null&&Pe(f,n,2),kn(),Ao(n,2)}if(n=Oo(l),n===null&&vo(e,t,l,Wn,a),n===i)break;i=n}i!==null&&l.stopPropagation()}else vo(e,t,l,null,a)}}function Oo(e){return e=ks(e),ko(e)}var Wn=null;function ko(e){if(Wn=null,e=Fa(e),e!==null){var t=m(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=g(t),e!==null)return e;e=null}else if(a===31){if(e=E(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Wn=e,null}function th(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Em()){case oc:return 2;case cc:return 8;case Hi:case Mm:return 32;case uc:return 268435456;default:return 32}default:return 32}}var Bo=!1,za=null,ba=null,ya=null,wi=new Map,Ni=new Map,Sa=[],q0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ah(e,t){switch(e){case"focusin":case"focusout":za=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":ya=null;break;case"pointerover":case"pointerout":wi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ni.delete(t.pointerId)}}function Ei(e,t,a,l,i,n){return e===null||e.nativeEvent!==n?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:n,targetContainers:[i]},t!==null&&(t=$a(t),t!==null&&If(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function G0(e,t,a,l,i){switch(t){case"focusin":return za=Ei(za,e,t,a,l,i),!0;case"dragenter":return ba=Ei(ba,e,t,a,l,i),!0;case"mouseover":return ya=Ei(ya,e,t,a,l,i),!0;case"pointerover":var n=i.pointerId;return wi.set(n,Ei(wi.get(n)||null,e,t,a,l,i)),!0;case"gotpointercapture":return n=i.pointerId,Ni.set(n,Ei(Ni.get(n)||null,e,t,a,l,i)),!0}return!1}function lh(e){var t=Fa(e.target);if(t!==null){var a=m(t);if(a!==null){if(t=a.tag,t===13){if(t=g(a),t!==null){e.blockedOn=t,gc(e.priority,function(){eh(a)});return}}else if(t===31){if(t=E(a),t!==null){e.blockedOn=t,gc(e.priority,function(){eh(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Oo(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Os=l,a.target.dispatchEvent(l),Os=null}else return t=$a(a),t!==null&&If(t),e.blockedOn=a,!1;t.shift()}return!0}function ih(e,t,a){Fn(e)&&a.delete(t)}function Y0(){Bo=!1,za!==null&&Fn(za)&&(za=null),ba!==null&&Fn(ba)&&(ba=null),ya!==null&&Fn(ya)&&(ya=null),wi.forEach(ih),Ni.forEach(ih)}function $n(e,t){e.blockedOn===t&&(e.blockedOn=null,Bo||(Bo=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Y0)))}var Pn=null;function nh(e){Pn!==e&&(Pn=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Pn===e&&(Pn=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],i=e[t+2];if(typeof l!="function"){if(ko(l||a)===null)continue;break}var n=$a(a);n!==null&&(e.splice(t,3),t-=3,Dr(n,{pending:!0,data:i,method:a.method,action:l},l,i))}}))}function Ol(e){function t(p){return $n(p,e)}za!==null&&$n(za,e),ba!==null&&$n(ba,e),ya!==null&&$n(ya,e),wi.forEach(t),Ni.forEach(t);for(var a=0;a<Sa.length;a++){var l=Sa[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Sa.length&&(a=Sa[0],a.blockedOn===null);)lh(a),a.blockedOn===null&&Sa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var i=a[l],n=a[l+1],c=i[Ze]||null;if(typeof n=="function")c||nh(a);else if(c){var f=null;if(n&&n.hasAttribute("formAction")){if(i=n,c=n[Ze]||null)f=c.formAction;else if(ko(i)!==null)continue}else f=c.action;typeof f=="function"?a[l+1]=f:(a.splice(l,3),l-=3),nh(a)}}}function sh(){function e(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(c){return i=c})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function Uo(e){this._internalRoot=e}In.prototype.render=Uo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,l=ut();$f(a,l,e,t,null,null)},In.prototype.unmount=Uo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$f(e.current,2,null,e,null,null),kn(),t[Wa]=null}};function In(e){this._internalRoot=e}In.prototype.unstable_scheduleHydration=function(e){if(e){var t=pc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Sa.length&&t!==0&&t<Sa[a].priority;a++);Sa.splice(a,0,e),a===0&&lh(e)}};var rh=o.version;if(rh!=="19.2.6")throw Error(u(527,rh,"19.2.6"));R.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=B(t),e=e!==null?U(e):null,e=e===null?null:e.stateNode,e};var X0={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var es=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!es.isDisabled&&es.supportsFiber)try{Ul=es.inject(X0),at=es}catch{}}return Ti.createRoot=function(e,t){if(!h(e))throw Error(u(299));var a=!1,l="",i=hd,n=md,c=pd;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(n=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=Wf(e,1,!1,null,null,a,l,null,i,n,c,sh),e[Wa]=t.current,go(e),new Uo(t)},Ti.hydrateRoot=function(e,t,a){if(!h(e))throw Error(u(299));var l=!1,i="",n=hd,c=md,f=pd,p=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(f=a.onRecoverableError),a.formState!==void 0&&(p=a.formState)),t=Wf(e,1,!0,t,a??null,l,i,p,n,c,f,sh),t.context=Ff(null),a=t.current,l=ut(),l=ws(l),i=ra(l),i.callback=null,oa(a,i,l),a=l,t.current.lanes=a,Hl(t,a),Dt(t),e[Wa]=t.current,go(e),new In(t)},Ti.version="19.2.6",Ti}var zh;function kg(){if(zh)return Ro.exports;zh=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),Ro.exports=Og(),Ro.exports}var Bg=kg();const Ug=Jh(Bg);var bh="1.3.23";function im(r,o,d){return Math.max(r,Math.min(o,d))}function Lg(r,o,d){return(1-d)*r+d*o}function Hg(r,o,d,u){return Lg(r,o,1-Math.exp(-d*u))}function _g(r,o){return(r%o+o)%o}var Rg=class{constructor(){Z(this,"isRunning",!1);Z(this,"value",0);Z(this,"from",0);Z(this,"to",0);Z(this,"currentTime",0);Z(this,"lerp");Z(this,"duration");Z(this,"easing");Z(this,"onUpdate")}advance(r){var d;if(!this.isRunning)return;let o=!1;if(this.duration&&this.easing){this.currentTime+=r;const u=im(0,this.currentTime/this.duration,1);o=u>=1;const h=o?1:this.easing(u);this.value=this.from+(this.to-this.from)*h}else this.lerp?(this.value=Hg(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,o=!0)):(this.value=this.to,o=!0);o&&this.stop(),(d=this.onUpdate)==null||d.call(this,this.value,o)}stop(){this.isRunning=!1}fromTo(r,o,{lerp:d,duration:u,easing:h,onStart:m,onUpdate:g}){this.from=this.value=r,this.to=o,this.lerp=d,this.duration=u,this.easing=h,this.currentTime=0,this.isRunning=!0,m==null||m(),this.onUpdate=g}};function Vg(r,o){let d;return function(...u){clearTimeout(d),d=setTimeout(()=>{d=void 0,r.apply(this,u)},o)}}var qg=class{constructor(r,o,{autoResize:d=!0,debounce:u=250}={}){Z(this,"width",0);Z(this,"height",0);Z(this,"scrollHeight",0);Z(this,"scrollWidth",0);Z(this,"debouncedResize");Z(this,"wrapperResizeObserver");Z(this,"contentResizeObserver");Z(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Z(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Z(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=o,d&&(this.debouncedResize=Vg(this.resize,u),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,o;(r=this.wrapperResizeObserver)==null||r.disconnect(),(o=this.contentResizeObserver)==null||o.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},nm=class{constructor(){Z(this,"events",{})}emit(r,...o){var u;const d=this.events[r]||[];for(let h=0,m=d.length;h<m;h++)(u=d[h])==null||u.call(d,...o)}on(r,o){return this.events[r]?this.events[r].push(o):this.events[r]=[o],()=>{var d;this.events[r]=(d=this.events[r])==null?void 0:d.filter(u=>o!==u)}}off(r,o){var d;this.events[r]=(d=this.events[r])==null?void 0:d.filter(u=>o!==u)}destroy(){this.events={}}};const Gg=100/6,Na={passive:!1};function yh(r,o){return r===1?Gg:r===2?o:1}var Yg=class{constructor(r,o={wheelMultiplier:1,touchMultiplier:1}){Z(this,"touchStart",{x:0,y:0});Z(this,"lastDelta",{x:0,y:0});Z(this,"window",{width:0,height:0});Z(this,"emitter",new nm);Z(this,"onTouchStart",r=>{const{clientX:o,clientY:d}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=o,this.touchStart.y=d,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Z(this,"onTouchMove",r=>{const{clientX:o,clientY:d}=r.targetTouches?r.targetTouches[0]:r,u=-(o-this.touchStart.x)*this.options.touchMultiplier,h=-(d-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=o,this.touchStart.y=d,this.lastDelta={x:u,y:h},this.emitter.emit("scroll",{deltaX:u,deltaY:h,event:r})});Z(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Z(this,"onWheel",r=>{let{deltaX:o,deltaY:d,deltaMode:u}=r;const h=yh(u,this.window.width),m=yh(u,this.window.height);o*=h,d*=m,o*=this.options.wheelMultiplier,d*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:o,deltaY:d,event:r})});Z(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=o,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Na),this.element.addEventListener("touchstart",this.onTouchStart,Na),this.element.addEventListener("touchmove",this.onTouchMove,Na),this.element.addEventListener("touchend",this.onTouchEnd,Na)}on(r,o){return this.emitter.on(r,o)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Na),this.element.removeEventListener("touchstart",this.onTouchStart,Na),this.element.removeEventListener("touchmove",this.onTouchMove,Na),this.element.removeEventListener("touchend",this.onTouchEnd,Na)}};const Sh=r=>Math.min(1,1.001-2**(-10*r));var Xg=class{constructor({wrapper:r=window,content:o=document.documentElement,eventsTarget:d=r,smoothWheel:u=!0,syncTouch:h=!1,syncTouchLerp:m=.075,touchInertiaExponent:g=1.7,duration:E,easing:M,lerp:B=.1,infinite:U=!1,orientation:w="vertical",gestureOrientation:j=w==="horizontal"?"both":"vertical",touchMultiplier:L=1,wheelMultiplier:z=1,autoResize:H=!0,prevent:O,virtualScroll:V,overscroll:Q=!0,autoRaf:X=!1,anchors:_=!1,autoToggle:$=!1,allowNestedScroll:I=!1,__experimental__naiveDimensions:se=!1,naiveDimensions:re=se,stopInertiaOnNavigate:ue=!1}={}){Z(this,"_isScrolling",!1);Z(this,"_isStopped",!1);Z(this,"_isLocked",!1);Z(this,"_preventNextNativeScrollEvent",!1);Z(this,"_resetVelocityTimeout",null);Z(this,"_rafId",null);Z(this,"isTouching");Z(this,"time",0);Z(this,"userData",{});Z(this,"lastVelocity",0);Z(this,"velocity",0);Z(this,"direction",0);Z(this,"options");Z(this,"targetScroll");Z(this,"animatedScroll");Z(this,"animate",new Rg);Z(this,"emitter",new nm);Z(this,"dimensions");Z(this,"virtualScroll");Z(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Z(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Z(this,"onTransitionEnd",r=>{var o;(o=r.propertyName)!=null&&o.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Z(this,"onClick",r=>{const o=r.composedPath().filter(u=>u instanceof HTMLAnchorElement&&u.href).map(u=>new URL(u.href)),d=new URL(window.location.href);if(this.options.anchors){const u=o.find(h=>d.host===h.host&&d.pathname===h.pathname&&h.hash);if(u){const h=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,m=`#${u.hash.split("#")[1]}`;this.scrollTo(m,h);return}}if(this.options.stopInertiaOnNavigate&&o.some(u=>d.host===u.host&&d.pathname!==u.pathname)){this.reset();return}});Z(this,"onPointerDown",r=>{r.button===1&&this.reset()});Z(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:o,deltaY:d,event:u}=r;if(this.emitter.emit("virtual-scroll",{deltaX:o,deltaY:d,event:u}),u.ctrlKey||u.lenisStopPropagation)return;const h=u.type.includes("touch"),m=u.type.includes("wheel");this.isTouching=u.type==="touchstart"||u.type==="touchmove";const g=o===0&&d===0;if(this.options.syncTouch&&h&&u.type==="touchstart"&&g&&!this.isStopped&&!this.isLocked){this.reset();return}const E=this.options.gestureOrientation==="vertical"&&d===0||this.options.gestureOrientation==="horizontal"&&o===0;if(g||E)return;let M=u.composedPath();M=M.slice(0,M.indexOf(this.rootElement));const B=this.options.prevent,U=Math.abs(o)>=Math.abs(d)?"horizontal":"vertical";if(M.find(z=>{var H,O,V,Q,X;return z instanceof HTMLElement&&(typeof B=="function"&&(B==null?void 0:B(z))||((H=z.hasAttribute)==null?void 0:H.call(z,"data-lenis-prevent"))||U==="vertical"&&((O=z.hasAttribute)==null?void 0:O.call(z,"data-lenis-prevent-vertical"))||U==="horizontal"&&((V=z.hasAttribute)==null?void 0:V.call(z,"data-lenis-prevent-horizontal"))||h&&((Q=z.hasAttribute)==null?void 0:Q.call(z,"data-lenis-prevent-touch"))||m&&((X=z.hasAttribute)==null?void 0:X.call(z,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(z,{deltaX:o,deltaY:d}))}))return;if(this.isStopped||this.isLocked){u.cancelable&&u.preventDefault();return}if(!(this.options.syncTouch&&h||this.options.smoothWheel&&m)){this.isScrolling="native",this.animate.stop(),u.lenisStopPropagation=!0;return}let w=d;this.options.gestureOrientation==="both"?w=Math.abs(d)>Math.abs(o)?d:o:this.options.gestureOrientation==="horizontal"&&(w=o),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&d>0||this.animatedScroll===this.limit&&d<0))&&(u.lenisStopPropagation=!0),u.cancelable&&u.preventDefault();const j=h&&this.options.syncTouch,L=h&&u.type==="touchend";L&&(w=Math.sign(w)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+w,{programmatic:!1,...j?{lerp:L?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Z(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Z(this,"raf",r=>{const o=r-(this.time||r);this.time=r,this.animate.advance(o*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=bh,window.lenis||(window.lenis={}),window.lenis.version=bh,w==="horizontal"&&(window.lenis.horizontal=!0),h===!0&&(window.lenis.touch=!0),(!r||r===document.documentElement)&&(r=window),typeof E=="number"&&typeof M!="function"?M=Sh:typeof M=="function"&&typeof E!="number"&&(E=1),this.options={wrapper:r,content:o,eventsTarget:d,smoothWheel:u,syncTouch:h,syncTouchLerp:m,touchInertiaExponent:g,duration:E,easing:M,lerp:B,infinite:U,gestureOrientation:j,orientation:w,touchMultiplier:L,wheelMultiplier:z,autoResize:H,prevent:O,virtualScroll:V,overscroll:Q,autoRaf:X,anchors:_,autoToggle:$,allowNestedScroll:I,naiveDimensions:re,stopInertiaOnNavigate:ue},this.dimensions=new qg(r,o,{autoResize:H}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Yg(d,{touchMultiplier:L,wheelMultiplier:z}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,o){return this.emitter.on(r,o)}off(r,o){return this.emitter.off(r,o)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:o=0,immediate:d=!1,lock:u=!1,programmatic:h=!0,lerp:m=h?this.options.lerp:void 0,duration:g=h?this.options.duration:void 0,easing:E=h?this.options.easing:void 0,onStart:M,onComplete:B,force:U=!1,userData:w}={}){if((this.isStopped||this.isLocked)&&!U)return;let j=r,L=o;if(typeof j=="string"&&["top","left","start","#"].includes(j))j=0;else if(typeof j=="string"&&["bottom","right","end"].includes(j))j=this.limit;else{let z=null;if(typeof j=="string"?(z=document.querySelector(j),z||(j==="#top"?j=0:console.warn("Lenis: Target not found",j))):j instanceof HTMLElement&&(j!=null&&j.nodeType)&&(z=j),z){if(this.options.wrapper!==window){const _=this.rootElement.getBoundingClientRect();L-=this.isHorizontal?_.left:_.top}const H=z.getBoundingClientRect(),O=getComputedStyle(z),V=this.isHorizontal?Number.parseFloat(O.scrollMarginLeft):Number.parseFloat(O.scrollMarginTop),Q=getComputedStyle(this.rootElement),X=this.isHorizontal?Number.parseFloat(Q.scrollPaddingLeft):Number.parseFloat(Q.scrollPaddingTop);j=(this.isHorizontal?H.left:H.top)+this.animatedScroll-(Number.isNaN(V)?0:V)-(Number.isNaN(X)?0:X)}}if(typeof j=="number"){if(j+=L,this.options.infinite){if(h){this.targetScroll=this.animatedScroll=this.scroll;const z=j-this.animatedScroll;z>this.limit/2?j-=this.limit:z<-this.limit/2&&(j+=this.limit)}}else j=im(0,j,this.limit);if(j===this.targetScroll){M==null||M(this),B==null||B(this);return}if(this.userData=w??{},d){this.animatedScroll=this.targetScroll=j,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),B==null||B(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}h||(this.targetScroll=j),typeof g=="number"&&typeof E!="function"?E=Sh:typeof E=="function"&&typeof g!="number"&&(g=1),this.animate.fromTo(this.animatedScroll,j,{duration:g,easing:E,lerp:m,onStart:()=>{u&&(this.isLocked=!0),this.isScrolling="smooth",M==null||M(this)},onUpdate:(z,H)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=z-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=z,this.setScroll(this.scroll),h&&(this.targetScroll=z),H||this.emit(),H&&(this.reset(),this.emit(),B==null||B(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:o,deltaY:d}){const u=Date.now();r._lenis||(r._lenis={});const h=r._lenis;let m,g,E,M,B,U,w,j,L,z;if(u-(h.time??0)>2e3){h.time=Date.now();const I=window.getComputedStyle(r);if(h.computedStyle=I,m=["auto","overlay","scroll"].includes(I.overflowX),g=["auto","overlay","scroll"].includes(I.overflowY),B=["auto"].includes(I.overscrollBehaviorX),U=["auto"].includes(I.overscrollBehaviorY),h.hasOverflowX=m,h.hasOverflowY=g,!(m||g))return!1;w=r.scrollWidth,j=r.scrollHeight,L=r.clientWidth,z=r.clientHeight,E=w>L,M=j>z,h.isScrollableX=E,h.isScrollableY=M,h.scrollWidth=w,h.scrollHeight=j,h.clientWidth=L,h.clientHeight=z,h.hasOverscrollBehaviorX=B,h.hasOverscrollBehaviorY=U}else E=h.isScrollableX,M=h.isScrollableY,m=h.hasOverflowX,g=h.hasOverflowY,w=h.scrollWidth,j=h.scrollHeight,L=h.clientWidth,z=h.clientHeight,B=h.hasOverscrollBehaviorX,U=h.hasOverscrollBehaviorY;if(!(m&&E||g&&M))return!1;const H=Math.abs(o)>=Math.abs(d)?"horizontal":"vertical";let O,V,Q,X,_,$;if(H==="horizontal")O=Math.round(r.scrollLeft),V=w-L,Q=o,X=m,_=E,$=B;else if(H==="vertical")O=Math.round(r.scrollTop),V=j-z,Q=d,X=g,_=M,$=U;else return!1;return!$&&(O>=V||O<=0)?!0:(Q>0?O<V:O>0)&&X&&_}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?_g(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};const ac=C.createContext({});function Ea(r){const o=C.useRef(null);return o.current===null&&(o.current=r()),o.current}const Qg=typeof window<"u",fs=Qg?C.useLayoutEffect:C.useEffect,hs=C.createContext(null),ms=C.createContext({transformPagePoint:r=>r,isStatic:!1,reducedMotion:"never"});function jh(r,o){if(typeof r=="function")return r(o);r!=null&&(r.current=o)}function Zg(...r){return o=>{let d=!1;const u=r.map(h=>{const m=jh(h,o);return!d&&typeof m=="function"&&(d=!0),m});if(d)return()=>{for(let h=0;h<u.length;h++){const m=u[h];typeof m=="function"?m():jh(r[h],null)}}}}function Jg(...r){return C.useCallback(Zg(...r),r)}class Kg extends C.Component{getSnapshotBeforeUpdate(o){const d=this.props.childRef.current;if(Lo(d)&&o.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const u=d.offsetParent,h=Lo(u)&&u.offsetWidth||0,m=Lo(u)&&u.offsetHeight||0,g=getComputedStyle(d),E=this.props.sizeRef.current;E.height=parseFloat(g.height),E.width=parseFloat(g.width),E.top=d.offsetTop,E.left=d.offsetLeft,E.right=h-E.width-E.left,E.bottom=m-E.height-E.top,E.direction=g.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function Wg({children:r,isPresent:o,anchorX:d,anchorY:u,root:h,pop:m}){var j;const g=C.useId(),E=C.useRef(null),M=C.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:B}=C.useContext(ms),U=((j=r.props)==null?void 0:j.ref)??(r==null?void 0:r.ref),w=Jg(E,U);return C.useInsertionEffect(()=>{const{width:L,height:z,top:H,left:O,right:V,bottom:Q,direction:X}=M.current;if(o||m===!1||!E.current||!L||!z)return;const _=X==="rtl",$=d==="left"?_?`right: ${V}`:`left: ${O}`:_?`left: ${O}`:`right: ${V}`,I=u==="bottom"?`bottom: ${Q}`:`top: ${H}`;E.current.dataset.motionPopId=g;const se=document.createElement("style");B&&(se.nonce=B);const re=h??document.head;return re.appendChild(se),se.sheet&&se.sheet.insertRule(`
          [data-motion-pop-id="${g}"] {
            position: absolute !important;
            width: ${L}px !important;
            height: ${z}px !important;
            ${$}px !important;
            ${I}px !important;
          }
        `),()=>{var ue;(ue=E.current)==null||ue.removeAttribute("data-motion-pop-id"),re.contains(se)&&re.removeChild(se)}},[o]),s.jsx(Kg,{isPresent:o,childRef:E,sizeRef:M,pop:m,children:m===!1?r:C.cloneElement(r,{ref:w})})}const Fg=({children:r,initial:o,isPresent:d,onExitComplete:u,custom:h,presenceAffectsLayout:m,mode:g,anchorX:E,anchorY:M,root:B})=>{const U=Ea($g),w=C.useId();let j=!0,L=C.useMemo(()=>(j=!1,{id:w,initial:o,isPresent:d,custom:h,onExitComplete:z=>{U.set(z,!0);for(const H of U.values())if(!H)return;u&&u()},register:z=>(U.set(z,!1),()=>U.delete(z))}),[d,U,u]);return m&&j&&(L={...L}),C.useMemo(()=>{U.forEach((z,H)=>U.set(H,!1))},[d]),C.useEffect(()=>{!d&&!U.size&&u&&u()},[d]),r=s.jsx(Wg,{pop:g==="popLayout",isPresent:d,anchorX:E,anchorY:M,root:B,children:r}),s.jsx(hs.Provider,{value:L,children:r})};function $g(){return new Map}function sm(r=!0){const o=C.useContext(hs);if(o===null)return[!0,null];const{isPresent:d,onExitComplete:u,register:h}=o,m=C.useId();C.useEffect(()=>{if(r)return h(m)},[r]);const g=C.useCallback(()=>r&&u&&u(m),[m,u,r]);return!d&&u?[!1,g]:[!0]}const ts=r=>r.key||"";function wh(r){const o=[];return C.Children.forEach(r,d=>{C.isValidElement(d)&&o.push(d)}),o}const Ot=({children:r,custom:o,initial:d=!0,onExitComplete:u,presenceAffectsLayout:h=!0,mode:m="sync",propagate:g=!1,anchorX:E="left",anchorY:M="top",root:B})=>{const[U,w]=sm(g),j=C.useMemo(()=>wh(r),[r]),L=g&&!U?[]:j.map(ts),z=C.useRef(!0),H=C.useRef(j),O=Ea(()=>new Map),V=C.useRef(new Set),[Q,X]=C.useState(j),[_,$]=C.useState(j);fs(()=>{z.current=!1,H.current=j;for(let re=0;re<_.length;re++){const ue=ts(_[re]);L.includes(ue)?(O.delete(ue),V.current.delete(ue)):O.get(ue)!==!0&&O.set(ue,!1)}},[_,L.length,L.join("-")]);const I=[];if(j!==Q){let re=[...j];for(let ue=0;ue<_.length;ue++){const Ie=_[ue],dt=ts(Ie);L.includes(dt)||(re.splice(ue,0,Ie),I.push(Ie))}return m==="wait"&&I.length&&(re=I),$(wh(re)),X(j),null}const{forceRender:se}=C.useContext(ac);return s.jsx(s.Fragment,{children:_.map(re=>{const ue=ts(re),Ie=g&&!U?!1:j===_||L.includes(ue),dt=()=>{if(V.current.has(ue))return;if(O.has(ue))V.current.add(ue),O.set(ue,!0);else return;let _e=!0;O.forEach(G=>{G||(_e=!1)}),_e&&(se==null||se(),$(H.current),g&&(w==null||w()),u&&u())};return s.jsx(Fg,{isPresent:Ie,initial:!z.current||d?void 0:!1,custom:o,presenceAffectsLayout:h,mode:m,root:B,onExitComplete:Ie?void 0:dt,anchorX:E,anchorY:M,children:re},ue)})})},rm=C.createContext({strict:!1}),Nh={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Eh=!1;function Pg(){if(Eh)return;const r={};for(const o in Nh)r[o]={isEnabled:d=>Nh[o].some(u=>!!d[u])};Kh(r),Eh=!0}function om(){return Pg(),W0()}function Ig(r){const o=om();for(const d in r)o[d]={...o[d],...r[d]};Kh(o)}const e1=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function ds(r){return r.startsWith("while")||r.startsWith("drag")&&r!=="draggable"||r.startsWith("layout")||r.startsWith("onTap")||r.startsWith("onPan")||r.startsWith("onLayout")||e1.has(r)}let cm=r=>!ds(r);function t1(r){typeof r=="function"&&(cm=o=>o.startsWith("on")?!ds(o):r(o))}try{t1(require("@emotion/is-prop-valid").default)}catch{}function a1(r,o,d){const u={};for(const h in r)h==="values"&&typeof r.values=="object"||tc(r[h])||(cm(h)||d===!0&&ds(h)||!o&&!ds(h)||r.draggable&&h.startsWith("onDrag"))&&(u[h]=r[h]);return u}const ps=C.createContext({});function l1(r,o){if(Wh(r)){const{initial:d,animate:u}=r;return{initial:d===!1||oh(d)?d:void 0,animate:oh(u)?u:void 0}}return r.inherit!==!1?o:{}}function i1(r){const{initial:o,animate:d}=l1(r,C.useContext(ps));return C.useMemo(()=>({initial:o,animate:d}),[Mh(o),Mh(d)])}function Mh(r){return Array.isArray(r)?r.join(" "):r}const lc=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function um(r,o,d){for(const u in o)!tc(o[u])&&!F0(u,d)&&(r[u]=o[u])}function n1({transformTemplate:r},o){return C.useMemo(()=>{const d=lc();return $0(d,o,r),Object.assign({},d.vars,d.style)},[o])}function s1(r,o){const d=r.style||{},u={};return um(u,d,r),Object.assign(u,n1(r,o)),u}function r1(r,o){const d={},u=s1(r,o);return r.drag&&r.dragListener!==!1&&(d.draggable=!1,u.userSelect=u.WebkitUserSelect=u.WebkitTouchCallout="none",u.touchAction=r.drag===!0?"none":`pan-${r.drag==="x"?"y":"x"}`),r.tabIndex===void 0&&(r.onTap||r.onTapStart||r.whileTap)&&(d.tabIndex=0),d.style=u,d}const dm=()=>({...lc(),attrs:{}});function o1(r,o,d,u){const h=C.useMemo(()=>{const m=dm();return P0(m,o,I0(u),r.transformTemplate,r.style),{...m.attrs,style:{...m.style}}},[o]);if(r.style){const m={};um(m,r.style,r),h.style={...m,...h.style}}return h}const c1=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ic(r){return typeof r!="string"||r.includes("-")?!1:!!(c1.indexOf(r)>-1||/[A-Z]/u.test(r))}function u1(r,o,d,{latestValues:u},h,m=!1,g){const M=(g??ic(r)?o1:r1)(o,u,h,r),B=a1(o,typeof r=="string",m),U=r!==C.Fragment?{...B,...M,ref:d}:{},{children:w}=o,j=C.useMemo(()=>tc(w)?w.get():w,[w]);return C.createElement(r,{...U,children:j})}function d1({scrapeMotionValuesFromProps:r,createRenderState:o},d,u,h){return{latestValues:f1(d,u,h,r),renderState:o()}}function f1(r,o,d,u){const h={},m=u(r,{});for(const j in m)h[j]=eg(m[j]);let{initial:g,animate:E}=r;const M=Wh(r),B=tg(r);o&&B&&!M&&r.inherit!==!1&&(g===void 0&&(g=o.initial),E===void 0&&(E=o.animate));let U=d?d.initial===!1:!1;U=U||g===!1;const w=U?E:g;if(w&&typeof w!="boolean"&&!Fh(w)){const j=Array.isArray(w)?w:[w];for(let L=0;L<j.length;L++){const z=ag(r,j[L]);if(z){const{transitionEnd:H,transition:O,...V}=z;for(const Q in V){let X=V[Q];if(Array.isArray(X)){const _=U?X.length-1:0;X=X[_]}X!==null&&(h[Q]=X)}for(const Q in H)h[Q]=H[Q]}}}return h}const fm=r=>(o,d)=>{const u=C.useContext(ps),h=C.useContext(hs),m=()=>d1(r,o,u,h);return d?m():Ea(m)},h1=fm({scrapeMotionValuesFromProps:lg,createRenderState:lc}),m1=fm({scrapeMotionValuesFromProps:ig,createRenderState:dm}),p1=Symbol.for("motionComponentSymbol");function g1(r,o,d){const u=C.useRef(d);C.useInsertionEffect(()=>{u.current=d});const h=C.useRef(null);return C.useCallback(m=>{var E;m&&((E=r.onMount)==null||E.call(r,m)),o&&(m?o.mount(m):o.unmount());const g=u.current;if(typeof g=="function")if(m){const M=g(m);typeof M=="function"&&(h.current=M)}else h.current?(h.current(),h.current=null):g(m);else g&&(g.current=m)},[o])}const hm=C.createContext({});function kl(r){return r&&typeof r=="object"&&Object.prototype.hasOwnProperty.call(r,"current")}function v1(r,o,d,u,h,m){var X,_;const{visualElement:g}=C.useContext(ps),E=C.useContext(rm),M=C.useContext(hs),B=C.useContext(ms),U=B.reducedMotion,w=B.skipAnimations,j=C.useRef(null),L=C.useRef(!1);u=u||E.renderer,!j.current&&u&&(j.current=u(r,{visualState:o,parent:g,props:d,presenceContext:M,blockInitialAnimation:M?M.initial===!1:!1,reducedMotionConfig:U,skipAnimations:w,isSVG:m}),L.current&&j.current&&(j.current.manuallyAnimateOnMount=!0));const z=j.current,H=C.useContext(hm);z&&!z.projection&&h&&(z.type==="html"||z.type==="svg")&&x1(j.current,d,h,H);const O=C.useRef(!1);C.useInsertionEffect(()=>{z&&O.current&&z.update(d,M)});const V=d[ng],Q=C.useRef(!!V&&typeof window<"u"&&!((X=window.MotionHandoffIsComplete)!=null&&X.call(window,V))&&((_=window.MotionHasOptimisedAnimation)==null?void 0:_.call(window,V)));return fs(()=>{L.current=!0,z&&(O.current=!0,window.MotionIsMounted=!0,z.updateFeatures(),z.scheduleRenderMicrotask(),Q.current&&z.animationState&&z.animationState.animateChanges())}),C.useEffect(()=>{z&&(!Q.current&&z.animationState&&z.animationState.animateChanges(),Q.current&&(queueMicrotask(()=>{var $;($=window.MotionHandoffMarkAsComplete)==null||$.call(window,V)}),Q.current=!1),z.enteringChildren=void 0)}),z}function x1(r,o,d,u){const{layoutId:h,layout:m,drag:g,dragConstraints:E,layoutScroll:M,layoutRoot:B,layoutAnchor:U,layoutCrossfade:w}=o;r.projection=new d(r.latestValues,o["data-framer-portal-id"]?void 0:mm(r.parent)),r.projection.setOptions({layoutId:h,layout:m,alwaysMeasureLayout:!!g||E&&kl(E),visualElement:r,animationType:typeof m=="string"?m:"both",initialPromotionConfig:u,crossfade:w,layoutScroll:M,layoutRoot:B,layoutAnchor:U})}function mm(r){if(r)return r.options.allowProjection!==!1?r.projection:mm(r.parent)}function Go(r,{forwardMotionProps:o=!1,type:d}={},u,h){u&&Ig(u);const m=d?d==="svg":ic(r),g=m?m1:h1;function E(B,U){let w;const j={...C.useContext(ms),...B,layoutId:z1(B)},{isStatic:L}=j,z=i1(B),H=g(B,L);if(!L&&typeof window<"u"){b1();const O=y1(j);w=O.MeasureLayout,z.visualElement=v1(r,H,j,h,O.ProjectionNode,m)}return s.jsxs(ps.Provider,{value:z,children:[w&&z.visualElement?s.jsx(w,{visualElement:z.visualElement,...j}):null,u1(r,B,g1(H,z.visualElement,U),H,L,o,m)]})}E.displayName=`motion.${typeof r=="string"?r:`create(${r.displayName??r.name??""})`}`;const M=C.forwardRef(E);return M[p1]=r,M}function z1({layoutId:r}){const o=C.useContext(ac).id;return o&&r!==void 0?o+"-"+r:r}function b1(r,o){C.useContext(rm).strict}function y1(r){const o=om(),{drag:d,layout:u}=o;if(!d&&!u)return{};const h={...d,...u};return{MeasureLayout:d!=null&&d.isEnabled(r)||u!=null&&u.isEnabled(r)?h.MeasureLayout:void 0,ProjectionNode:h.ProjectionNode}}function S1(r,o){if(typeof Proxy>"u")return Go;const d=new Map,u=(m,g)=>Go(m,g,r,o),h=(m,g)=>u(m,g);return new Proxy(h,{get:(m,g)=>g==="create"?u:(d.has(g)||d.set(g,Go(g,void 0,r,o)),d.get(g))})}const j1=(r,o)=>o.isSVG??ic(r)?new sg(o):new rg(o,{allowProjection:r!==C.Fragment});class w1 extends Ma{constructor(o){super(o),o.animationState||(o.animationState=og(o))}updateAnimationControlsSubscription(){const{animate:o}=this.node.getProps();Fh(o)&&(this.unmountControls=o.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:o}=this.node.getProps(),{animate:d}=this.node.prevProps||{};o!==d&&this.updateAnimationControlsSubscription()}unmount(){var o;this.node.animationState.reset(),(o=this.unmountControls)==null||o.call(this)}}let N1=0;class E1 extends Ma{constructor(){super(...arguments),this.id=N1++,this.isExitComplete=!1}update(){var m;if(!this.node.presenceContext)return;const{isPresent:o,onExitComplete:d}=this.node.presenceContext,{isPresent:u}=this.node.prevPresenceContext||{};if(!this.node.animationState||o===u)return;if(o&&u===!1){if(this.isExitComplete){const{initial:g,custom:E}=this.node.getProps();if(typeof g=="string"||typeof g=="object"&&g!==null&&!Array.isArray(g)){const M=cg(this.node,g,E);if(M){const{transition:B,transitionEnd:U,...w}=M;for(const j in w)(m=this.node.getValue(j))==null||m.jump(w[j])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const h=this.node.animationState.setActive("exit",!o);d&&!o&&h.then(()=>{this.isExitComplete=!0,d(this.id)})}mount(){const{register:o,onExitComplete:d}=this.node.presenceContext||{};d&&d(this.id),o&&(this.unmount=o(this.id))}unmount(){}}const M1={animation:{Feature:w1},exit:{Feature:E1}};function ki(r){return{point:{x:r.pageX,y:r.pageY}}}const T1=r=>o=>$h(o)&&r(o,ki(o));function Oi(r,o,d,u){return os(r,o,T1(d),u)}const pm=({current:r})=>r?r.ownerDocument.defaultView:null,Th=new Set(["auto","scroll"]);class gm{constructor(o,d,{transformPagePoint:u,contextWindow:h=window,dragSnapToOrigin:m=!1,distanceThreshold:g=3,element:E}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=L=>{this.handleScroll(L.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=as(this.lastRawMoveEventInfo,this.transformPagePoint));const L=Yo(this.lastMoveEventInfo,this.history),z=this.startEvent!==null,H=ug(L.offset,{x:0,y:0})>=this.distanceThreshold;if(!z&&!H)return;const{point:O}=L,{timestamp:V}=ch;this.history.push({...O,timestamp:V});const{onStart:Q,onMove:X}=this.handlers;z||(Q&&Q(this.lastMoveEvent,L),this.startEvent=this.lastMoveEvent),X&&X(this.lastMoveEvent,L)},this.handlePointerMove=(L,z)=>{this.lastMoveEvent=L,this.lastRawMoveEventInfo=z,this.lastMoveEventInfo=as(z,this.transformPagePoint),jt.update(this.updatePoint,!0)},this.handlePointerUp=(L,z)=>{this.end();const{onEnd:H,onSessionEnd:O,resumeAnimation:V}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&V&&V(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const Q=Yo(L.type==="pointercancel"?this.lastMoveEventInfo:as(z,this.transformPagePoint),this.history);this.startEvent&&H&&H(L,Q),O&&O(L,Q)},!$h(o))return;this.dragSnapToOrigin=m,this.handlers=d,this.transformPagePoint=u,this.distanceThreshold=g,this.contextWindow=h||window;const M=ki(o),B=as(M,this.transformPagePoint),{point:U}=B,{timestamp:w}=ch;this.history=[{...U,timestamp:w}];const{onSessionStart:j}=d;j&&j(o,Yo(B,this.history)),this.removeListeners=Ph(Oi(this.contextWindow,"pointermove",this.handlePointerMove),Oi(this.contextWindow,"pointerup",this.handlePointerUp),Oi(this.contextWindow,"pointercancel",this.handlePointerUp)),E&&this.startScrollTracking(E)}startScrollTracking(o){let d=o.parentElement;for(;d;){const u=getComputedStyle(d);(Th.has(u.overflowX)||Th.has(u.overflowY))&&this.scrollPositions.set(d,{x:d.scrollLeft,y:d.scrollTop}),d=d.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(o){const d=this.scrollPositions.get(o);if(!d)return;const u=o===window,h=u?{x:window.scrollX,y:window.scrollY}:{x:o.scrollLeft,y:o.scrollTop},m={x:h.x-d.x,y:h.y-d.y};m.x===0&&m.y===0||(u?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=m.x,this.lastMoveEventInfo.point.y+=m.y):this.history.length>0&&(this.history[0].x-=m.x,this.history[0].y-=m.y),this.scrollPositions.set(o,h),jt.update(this.updatePoint,!0))}updateHandlers(o){this.handlers=o}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Ih(this.updatePoint)}}function as(r,o){return o?{point:o(r.point)}:r}function Ch(r,o){return{x:r.x-o.x,y:r.y-o.y}}function Yo({point:r},o){return{point:r,delta:Ch(r,vm(o)),offset:Ch(r,C1(o)),velocity:A1(o,.1)}}function C1(r){return r[0]}function vm(r){return r[r.length-1]}function A1(r,o){if(r.length<2)return{x:0,y:0};let d=r.length-1,u=null;const h=vm(r);for(;d>=0&&(u=r[d],!(h.timestamp-u.timestamp>uh(o)));)d--;if(!u)return{x:0,y:0};u===r[0]&&r.length>2&&h.timestamp-u.timestamp>uh(o)*2&&(u=r[1]);const m=dg(h.timestamp-u.timestamp);if(m===0)return{x:0,y:0};const g={x:(h.x-u.x)/m,y:(h.y-u.y)/m};return g.x===1/0&&(g.x=0),g.y===1/0&&(g.y=0),g}function D1(r,{min:o,max:d},u){return o!==void 0&&r<o?r=u?cs(o,r,u.min):Math.max(r,o):d!==void 0&&r>d&&(r=u?cs(d,r,u.max):Math.min(r,d)),r}function Ah(r,o,d){return{min:o!==void 0?r.min+o:void 0,max:d!==void 0?r.max+d-(r.max-r.min):void 0}}function O1(r,{top:o,left:d,bottom:u,right:h}){return{x:Ah(r.x,d,h),y:Ah(r.y,o,u)}}function Dh(r,o){let d=o.min-r.min,u=o.max-r.max;return o.max-o.min<r.max-r.min&&([d,u]=[u,d]),{min:d,max:u}}function k1(r,o){return{x:Dh(r.x,o.x),y:Dh(r.y,o.y)}}function B1(r,o){let d=.5;const u=Po(r),h=Po(o);return h>u?d=dh(o.min,o.max-u,r.min):u>h&&(d=dh(r.min,r.max-h,o.min)),fg(0,1,d)}function U1(r,o){const d={};return o.min!==void 0&&(d.min=o.min-r.min),o.max!==void 0&&(d.max=o.max-r.min),d}const Io=.35;function L1(r=Io){return r===!1?r=0:r===!0&&(r=Io),{x:Oh(r,"left","right"),y:Oh(r,"top","bottom")}}function Oh(r,o,d){return{min:kh(r,o),max:kh(r,d)}}function kh(r,o){return typeof r=="number"?r:r[o]||0}const H1=new WeakMap;class _1{constructor(o){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=hg(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=o}start(o,{snapToCursor:d=!1,distanceThreshold:u}={}){const{presenceContext:h}=this.visualElement;if(h&&h.isPresent===!1)return;const m=w=>{d&&this.snapToCursor(ki(w).point),this.stopAnimation()},g=(w,j)=>{const{drag:L,dragPropagation:z,onDragStart:H}=this.getProps();if(L&&!z&&(this.openDragLock&&this.openDragLock(),this.openDragLock=xg(L),!this.openDragLock))return;this.latestPointerEvent=w,this.latestPanInfo=j,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),wa(V=>{let Q=this.getAxisMotionValue(V).get()||0;if(zg.test(Q)){const{projection:X}=this.visualElement;if(X&&X.layout){const _=X.layout.layoutBox[V];_&&(Q=Po(_)*(parseFloat(Q)/100))}}this.originPoint[V]=Q}),H&&jt.update(()=>H(w,j),!1,!0),fh(this.visualElement,"transform");const{animationState:O}=this.visualElement;O&&O.setActive("whileDrag",!0)},E=(w,j)=>{this.latestPointerEvent=w,this.latestPanInfo=j;const{dragPropagation:L,dragDirectionLock:z,onDirectionLock:H,onDrag:O}=this.getProps();if(!L&&!this.openDragLock)return;const{offset:V}=j;if(z&&this.currentDirection===null){this.currentDirection=V1(V),this.currentDirection!==null&&H&&H(this.currentDirection);return}this.updateAxis("x",j.point,V),this.updateAxis("y",j.point,V),this.visualElement.render(),O&&jt.update(()=>O(w,j),!1,!0)},M=(w,j)=>{this.latestPointerEvent=w,this.latestPanInfo=j,this.stop(w,j),this.latestPointerEvent=null,this.latestPanInfo=null},B=()=>{const{dragSnapToOrigin:w}=this.getProps();(w||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:U}=this.getProps();this.panSession=new gm(o,{onSessionStart:m,onStart:g,onMove:E,onSessionEnd:M,resumeAnimation:B},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:U,distanceThreshold:u,contextWindow:pm(this.visualElement),element:this.visualElement.current})}stop(o,d){const u=o||this.latestPointerEvent,h=d||this.latestPanInfo,m=this.isDragging;if(this.cancel(),!m||!h||!u)return;const{velocity:g}=h;this.startAnimation(g);const{onDragEnd:E}=this.getProps();E&&jt.postRender(()=>E(u,h))}cancel(){this.isDragging=!1;const{projection:o,animationState:d}=this.visualElement;o&&(o.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:u}=this.getProps();!u&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),d&&d.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(o,d,u){const{drag:h}=this.getProps();if(!u||!ls(o,h,this.currentDirection))return;const m=this.getAxisMotionValue(o);let g=this.originPoint[o]+u[o];this.constraints&&this.constraints[o]&&(g=D1(g,this.constraints[o],this.elastic[o])),m.set(g)}resolveConstraints(){var m;const{dragConstraints:o,dragElastic:d}=this.getProps(),u=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(m=this.visualElement.projection)==null?void 0:m.layout,h=this.constraints;o&&kl(o)?this.constraints||(this.constraints=this.resolveRefConstraints()):o&&u?this.constraints=O1(u.layoutBox,o):this.constraints=!1,this.elastic=L1(d),h!==this.constraints&&!kl(o)&&u&&this.constraints&&!this.hasMutatedConstraints&&wa(g=>{this.constraints!==!1&&this.getAxisMotionValue(g)&&(this.constraints[g]=U1(u.layoutBox[g],this.constraints[g]))})}resolveRefConstraints(){const{dragConstraints:o,onMeasureDragConstraints:d}=this.getProps();if(!o||!kl(o))return!1;const u=o.current,{projection:h}=this.visualElement;if(!h||!h.layout)return!1;h.root&&(h.root.scroll=void 0,h.root.updateScroll());const m=mg(u,h.root,this.visualElement.getTransformPagePoint());let g=k1(h.layout.layoutBox,m);if(d){const E=d(pg(g));this.hasMutatedConstraints=!!E,E&&(g=gg(E))}return g}startAnimation(o){const{drag:d,dragMomentum:u,dragElastic:h,dragTransition:m,dragSnapToOrigin:g,onDragTransitionEnd:E}=this.getProps(),M=this.constraints||{},B=wa(U=>{if(!ls(U,d,this.currentDirection))return;let w=M&&M[U]||{};(g===!0||g===U)&&(w={min:0,max:0});const j=h?200:1e6,L=h?40:1e7,z={type:"inertia",velocity:u?o[U]:0,bounceStiffness:j,bounceDamping:L,timeConstant:750,restDelta:1,restSpeed:10,...m,...w};return this.startAxisValueAnimation(U,z)});return Promise.all(B).then(E)}startAxisValueAnimation(o,d){const u=this.getAxisMotionValue(o);return fh(this.visualElement,o),u.start(vg(o,u,0,d,this.visualElement,!1))}stopAnimation(){wa(o=>this.getAxisMotionValue(o).stop())}getAxisMotionValue(o){const d=`_drag${o.toUpperCase()}`,h=this.visualElement.getProps()[d];return h||this.visualElement.getValue(o,this.visualElement.latestValues[o]??0)}snapToCursor(o){wa(d=>{const{drag:u}=this.getProps();if(!ls(d,u,this.currentDirection))return;const{projection:h}=this.visualElement,m=this.getAxisMotionValue(d);if(h&&h.layout){const{min:g,max:E}=h.layout.layoutBox[d],M=m.get()||0;m.set(o[d]-cs(g,E,.5)+M)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:o,dragConstraints:d}=this.getProps(),{projection:u}=this.visualElement;if(!kl(d)||!u||!this.constraints)return;this.stopAnimation();const h={x:0,y:0};wa(g=>{const E=this.getAxisMotionValue(g);if(E&&this.constraints!==!1){const M=E.get();h[g]=B1({min:M,max:M},this.constraints[g])}});const{transformTemplate:m}=this.visualElement.getProps();this.visualElement.current.style.transform=m?m({},""):"none",u.root&&u.root.updateScroll(),u.updateLayout(),this.constraints=!1,this.resolveConstraints(),wa(g=>{if(!ls(g,o,null))return;const E=this.getAxisMotionValue(g),{min:M,max:B}=this.constraints[g];E.set(cs(M,B,h[g]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;H1.set(this.visualElement,this);const o=this.visualElement.current,d=Oi(o,"pointerdown",B=>{const{drag:U,dragListener:w=!0}=this.getProps(),j=B.target,L=j!==o&&bg(j);U&&w&&!L&&this.start(B)});let u;const h=()=>{const{dragConstraints:B}=this.getProps();kl(B)&&B.current&&(this.constraints=this.resolveRefConstraints(),u||(u=R1(o,B.current,()=>this.scalePositionWithinConstraints())))},{projection:m}=this.visualElement,g=m.addEventListener("measure",h);m&&!m.layout&&(m.root&&m.root.updateScroll(),m.updateLayout()),jt.read(h);const E=os(window,"resize",()=>this.scalePositionWithinConstraints()),M=m.addEventListener("didUpdate",(({delta:B,hasLayoutChanged:U})=>{this.isDragging&&U&&(wa(w=>{const j=this.getAxisMotionValue(w);j&&(this.originPoint[w]+=B[w].translate,j.set(j.get()+B[w].translate))}),this.visualElement.render())}));return()=>{E(),d(),g(),M&&M(),u&&u()}}getProps(){const o=this.visualElement.getProps(),{drag:d=!1,dragDirectionLock:u=!1,dragPropagation:h=!1,dragConstraints:m=!1,dragElastic:g=Io,dragMomentum:E=!0}=o;return{...o,drag:d,dragDirectionLock:u,dragPropagation:h,dragConstraints:m,dragElastic:g,dragMomentum:E}}}function Bh(r){let o=!0;return()=>{if(o){o=!1;return}r()}}function R1(r,o,d){const u=hh(r,Bh(d)),h=hh(o,Bh(d));return()=>{u(),h()}}function ls(r,o,d){return(o===!0||o===r)&&(d===null||d===r)}function V1(r,o=10){let d=null;return Math.abs(r.y)>o?d="y":Math.abs(r.x)>o&&(d="x"),d}class q1 extends Ma{constructor(o){super(o),this.removeGroupControls=ss,this.removeListeners=ss,this.controls=new _1(o)}mount(){const{dragControls:o}=this.node.getProps();o&&(this.removeGroupControls=o.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ss}update(){const{dragControls:o}=this.node.getProps(),{dragControls:d}=this.node.prevProps||{};o!==d&&(this.removeGroupControls(),o&&(this.removeGroupControls=o.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Xo=r=>(o,d)=>{r&&jt.update(()=>r(o,d),!1,!0)};class G1 extends Ma{constructor(){super(...arguments),this.removePointerDownListener=ss}onPointerDown(o){this.session=new gm(o,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:pm(this.node)})}createPanHandlers(){const{onPanSessionStart:o,onPanStart:d,onPan:u,onPanEnd:h}=this.node.getProps();return{onSessionStart:Xo(o),onStart:Xo(d),onMove:Xo(u),onEnd:(m,g)=>{delete this.session,h&&jt.postRender(()=>h(m,g))}}}mount(){this.removePointerDownListener=Oi(this.node.current,"pointerdown",o=>this.onPointerDown(o))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Qo=!1;class Y1 extends C.Component{componentDidMount(){const{visualElement:o,layoutGroup:d,switchLayoutGroup:u,layoutId:h}=this.props,{projection:m}=o;m&&(d.group&&d.group.add(m),u&&u.register&&h&&u.register(m),Qo&&m.root.didUpdate(),m.addEventListener("animationComplete",()=>{this.safeToRemove()}),m.setOptions({...m.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),yg.hasEverUpdated=!0}getSnapshotBeforeUpdate(o){const{layoutDependency:d,visualElement:u,drag:h,isPresent:m}=this.props,{projection:g}=u;return g&&(g.isPresent=m,o.layoutDependency!==d&&g.setOptions({...g.options,layoutDependency:d}),Qo=!0,h||o.layoutDependency!==d||d===void 0||o.isPresent!==m?g.willUpdate():this.safeToRemove(),o.isPresent!==m&&(m?g.promote():g.relegate()||jt.postRender(()=>{const E=g.getStack();(!E||!E.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:o,layoutAnchor:d}=this.props,{projection:u}=o;u&&(u.options.layoutAnchor=d,u.root.didUpdate(),us.postRender(()=>{!u.currentAnimation&&u.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:o,layoutGroup:d,switchLayoutGroup:u}=this.props,{projection:h}=o;Qo=!0,h&&(h.scheduleCheckAfterUnmount(),d&&d.group&&d.group.remove(h),u&&u.deregister&&u.deregister(h))}safeToRemove(){const{safeToRemove:o}=this.props;o&&o()}render(){return null}}function xm(r){const[o,d]=sm(),u=C.useContext(ac);return s.jsx(Y1,{...r,layoutGroup:u,switchLayoutGroup:C.useContext(hm),isPresent:o,safeToRemove:d})}const X1={pan:{Feature:G1},drag:{Feature:q1,ProjectionNode:em,MeasureLayout:xm}};function Uh(r,o,d){const{props:u}=r;r.animationState&&u.whileHover&&r.animationState.setActive("whileHover",d==="Start");const h="onHover"+d,m=u[h];m&&jt.postRender(()=>m(o,ki(o)))}class Q1 extends Ma{mount(){const{current:o}=this.node;o&&(this.unmount=Sg(o,(d,u)=>(Uh(this.node,u,"Start"),h=>Uh(this.node,h,"End"))))}unmount(){}}class Z1 extends Ma{constructor(){super(...arguments),this.isActive=!1}onFocus(){let o=!1;try{o=this.node.current.matches(":focus-visible")}catch{o=!0}!o||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ph(os(this.node.current,"focus",()=>this.onFocus()),os(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Lh(r,o,d){const{props:u}=r;if(r.current instanceof HTMLButtonElement&&r.current.disabled)return;r.animationState&&u.whileTap&&r.animationState.setActive("whileTap",d==="Start");const h="onTap"+(d==="End"?"":d),m=u[h];m&&jt.postRender(()=>m(o,ki(o)))}class J1 extends Ma{mount(){const{current:o}=this.node;if(!o)return;const{globalTapTarget:d,propagate:u}=this.node.props;this.unmount=jg(o,(h,m)=>(Lh(this.node,m,"Start"),(g,{success:E})=>Lh(this.node,g,E?"End":"Cancel")),{useGlobalTarget:d,stopPropagation:(u==null?void 0:u.tap)===!1})}unmount(){}}const ec=new WeakMap,Zo=new WeakMap,K1=r=>{const o=ec.get(r.target);o&&o(r)},W1=r=>{r.forEach(K1)};function F1({root:r,...o}){const d=r||document;Zo.has(d)||Zo.set(d,{});const u=Zo.get(d),h=JSON.stringify(o);return u[h]||(u[h]=new IntersectionObserver(W1,{root:r,...o})),u[h]}function $1(r,o,d){const u=F1(o);return ec.set(r,d),u.observe(r),()=>{ec.delete(r),u.unobserve(r)}}const P1={some:0,all:1};class I1 extends Ma{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var M;(M=this.stopObserver)==null||M.call(this);const{viewport:o={}}=this.node.getProps(),{root:d,margin:u,amount:h="some",once:m}=o,g={root:d?d.current:void 0,rootMargin:u,threshold:typeof h=="number"?h:P1[h]},E=B=>{const{isIntersecting:U}=B;if(this.isInView===U||(this.isInView=U,m&&!U&&this.hasEnteredView))return;U&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",U);const{onViewportEnter:w,onViewportLeave:j}=this.node.getProps(),L=U?w:j;L&&L(B)};this.stopObserver=$1(this.node.current,g,E)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:o,prevProps:d}=this.node;["amount","margin","root"].some(ev(o,d))&&this.startObserver()}unmount(){var o;(o=this.stopObserver)==null||o.call(this),this.hasEnteredView=!1,this.isInView=!1}}function ev({viewport:r={}},{viewport:o={}}={}){return d=>r[d]!==o[d]}const tv={inView:{Feature:I1},tap:{Feature:J1},focus:{Feature:Z1},hover:{Feature:Q1}},av={layout:{ProjectionNode:em,MeasureLayout:xm}},lv={...M1,...tv,...X1,...av},F=S1(lv,j1),iv=()=>({scrollX:Di(0),scrollY:Di(0),scrollXProgress:Di(0),scrollYProgress:Di(0)}),Bl=r=>r?!r.current:!1;function Hh(r,o,d,u){return{factory:h=>{let m;const g=()=>{if(Bl(d)||Bl(u)){us.read(g);return}m=tm(h,{...o,axis:r,container:(d==null?void 0:d.current)||void 0,target:(u==null?void 0:u.current)||void 0})};return us.read(g),()=>{am(g),m==null||m()}},times:[0,1],keyframes:[0,1],ease:h=>h,duration:1}}function nv(r,o){return typeof window>"u"?!1:r?wg()&&!!Ng(o):Eg()}function sv({container:r,target:o,...d}={}){const u=Ea(iv);nv(o,d.offset)&&(u.scrollXProgress.accelerate=Hh("x",d,r,o),u.scrollYProgress.accelerate=Hh("y",d,r,o));const h=C.useRef(null),m=C.useRef(!1),g=C.useCallback(()=>(h.current=tm((E,{x:M,y:B})=>{u.scrollX.set(M.current),u.scrollXProgress.set(M.progress),u.scrollY.set(B.current),u.scrollYProgress.set(B.progress)},{...d,container:(r==null?void 0:r.current)||void 0,target:(o==null?void 0:o.current)||void 0}),()=>{var E;(E=h.current)==null||E.call(h)}),[r,o,JSON.stringify(d.offset)]);return fs(()=>{if(m.current=!1,Bl(r)||Bl(o)){m.current=!0;return}else return g()},[g]),C.useEffect(()=>{if(!m.current)return;let E;const M=()=>{const B=Bl(r),U=Bl(o);!B&&!U&&(E=g())};return us.read(M),()=>{am(M),E==null||E()}},[g]),u}function rv(r){const o=Ea(()=>Di(r)),{isStatic:d}=C.useContext(ms);if(d){const[,u]=C.useState(r);C.useEffect(()=>o.on("change",u),[])}return o}function zm(r,o){const d=rv(o()),u=()=>d.set(o());return u(),fs(()=>{const h=()=>jt.preRender(u,!1,!0),m=r.map(g=>g.on("change",h));return()=>{m.forEach(g=>g()),Ih(u)}}),d}function ov(r){Ho.current=[],r();const o=zm(Ho.current,r);return Ho.current=void 0,o}function rs(r,o,d,u){if(typeof r=="function")return ov(r);if(d!==void 0&&!Array.isArray(d)&&typeof o!="function")return cv(r,o,d,u);const g=typeof o=="function"?o:Mg(o,d,u),E=Array.isArray(r)?_h(r,g):_h([r],([B])=>g(B)),M=Array.isArray(r)?void 0:r.accelerate;return M&&!M.isTransformed&&typeof o!="function"&&Array.isArray(d)&&(u==null?void 0:u.clamp)!==!1&&(E.accelerate={...M,times:o,keyframes:d,isTransformed:!0}),E}function _h(r,o){const d=Ea(()=>[]);return zm(r,()=>{d.length=0;const u=r.length;for(let h=0;h<u;h++)d[h]=r[h].get();return o(d)})}function cv(r,o,d,u){const h=Ea(()=>Object.keys(d)),m=Ea(()=>({}));for(const g of h)m[g]=rs(r,o,d[g],u);return m}function bm({size:r=56,inverse:o=!1}){const d=r;return s.jsxs("svg",{width:d,height:d,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",style:{display:"block",filter:o?"drop-shadow(0 2px 4px rgba(0,0,0,0.35))":"drop-shadow(0 1px 2px rgba(0,0,0,0.08))"},role:"img","aria-label":"Vorace",children:[s.jsx("circle",{cx:"50",cy:"50",r:"48",fill:"#6B1620"}),s.jsx("circle",{cx:"50",cy:"50",r:"48",fill:"none",stroke:"#4A0E16",strokeWidth:"1.5",opacity:"0.5"}),s.jsx("g",{transform:"translate(50 50)",children:s.jsx("path",{d:"M -22 -26 L -8 22 L 0 22 L 24 -26 L 14 -26 L -2 12 L -14 -26 Z",fill:"#F5EFE6",stroke:"#F5EFE6",strokeWidth:"1",strokeLinejoin:"round"})})]})}const Jo=[{href:"#menu",label:"Notre carte"},{href:"#commander",label:"Commander"},{href:"#avis",label:"Avis"},{href:"#contact",label:"Nous trouver"}];function uv(){const[r,o]=C.useState(!1),[d,u]=C.useState(!1),h=lm.useRef(null);C.useEffect(()=>{const g=()=>o(window.scrollY>24);return g(),window.addEventListener("scroll",g,{passive:!0}),()=>window.removeEventListener("scroll",g)},[]);function m(g){g.preventDefault(),h.current?(clearTimeout(h.current),h.current=null,window.dispatchEvent(new CustomEvent("vorace:open-admin-gate"))):h.current=setTimeout(()=>{h.current=null,window.scrollTo({top:0,behavior:"smooth"})},260)}return C.useEffect(()=>(document.body.style.overflow=d?"hidden":"",()=>{document.body.style.overflow=""}),[d]),s.jsxs(s.Fragment,{children:[s.jsx(F.header,{initial:{y:-100,opacity:0},animate:{y:0,opacity:1},transition:{duration:.6,ease:[.22,1,.36,1],delay:.2},className:"z-nav","data-scrolled":r,children:s.jsxs("div",{className:"z-nav-inner",children:[s.jsx("a",{href:"#",className:"z-nav-brand","aria-label":"Vorace — Accueil",onClick:m,children:s.jsx(bm,{size:48})}),s.jsx("nav",{className:"z-nav-links","aria-label":"Navigation principale",children:Jo.map(g=>s.jsx("a",{href:g.href,className:"z-nav-link",children:g.label},g.href))}),s.jsxs("div",{className:"z-nav-cta",children:[s.jsxs("a",{href:"tel:+33769917382",className:"z-nav-phone","aria-label":"Appeler Vorace",children:[s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"})}),s.jsx("span",{children:"07 69 91 73 82"})]}),s.jsx("a",{href:"#commander",className:"z-btn z-btn-primary z-nav-btn",children:"Commander"})]}),s.jsxs("button",{className:"z-nav-burger",onClick:()=>u(!0),"aria-label":"Ouvrir le menu",children:[s.jsx("span",{}),s.jsx("span",{}),s.jsx("span",{})]})]})}),s.jsx(Ot,{children:d&&s.jsxs(F.div,{className:"z-nav-mobile",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:[s.jsx("button",{className:"z-nav-close",onClick:()=>u(!1),"aria-label":"Fermer le menu",children:s.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:s.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})}),s.jsxs("nav",{className:"z-nav-mobile-links",children:[Jo.map((g,E)=>s.jsx(F.a,{href:g.href,onClick:()=>u(!1),initial:{y:40,opacity:0},animate:{y:0,opacity:1},transition:{delay:.1+E*.07,duration:.5,ease:[.22,1,.36,1]},children:g.label},g.href)),s.jsx(F.a,{href:"tel:+33769917382",className:"z-nav-mobile-phone",initial:{y:40,opacity:0},animate:{y:0,opacity:1},transition:{delay:.1+Jo.length*.07,duration:.5},children:"07 69 91 73 82"})]})]})}),s.jsx("style",{children:`
        .z-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 18px 0;
          transition: all 0.4s var(--z-ease);
        }
        .z-nav[data-scrolled="true"] {
          background: rgba(251, 247, 241, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 1px 0 rgba(14, 61, 36, 0.06);
          padding: 12px 0;
          --z-logo-pizza: var(--z-black);
        }
        .z-nav:not([data-scrolled="true"]) {
          --z-logo-pizza: #FFFFFF;
        }
        .z-nav-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .z-nav-brand {
          display: flex;
          align-items: center;
          z-index: 2;
        }
        .z-nav-links {
          display: none;
          gap: 36px;
        }
        .z-nav-link {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--z-white);
          opacity: 0.85;
          transition: opacity 0.2s;
        }
        .z-nav[data-scrolled="true"] .z-nav-link {
          color: var(--z-text);
        }
        .z-nav-link:hover { opacity: 1; }
        .z-nav-cta {
          display: none;
          align-items: center;
          gap: 20px;
        }
        .z-nav-phone {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--z-white);
          opacity: 0.9;
        }
        .z-nav[data-scrolled="true"] .z-nav-phone {
          color: var(--z-green);
        }
        .z-nav-btn {
          padding: 12px 24px !important;
          font-size: 0.9rem !important;
        }
        .z-nav-burger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 8px;
        }
        .z-nav-burger span {
          width: 26px;
          height: 2px;
          background: var(--z-white);
          border-radius: 2px;
          transition: background 0.3s;
        }
        .z-nav[data-scrolled="true"] .z-nav-burger span {
          background: var(--z-text);
        }

        @media (min-width: 968px) {
          .z-nav-links { display: flex; }
          .z-nav-cta { display: flex; }
          .z-nav-burger { display: none; }
          .z-nav-inner { padding: 0 40px; }
        }

        .z-nav-mobile {
          position: fixed;
          inset: 0;
          z-index: 200;
          background: var(--z-green);
          color: var(--z-white);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .z-nav-close {
          position: absolute;
          top: 24px;
          right: 24px;
          color: var(--z-white);
        }
        .z-nav-mobile-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        .z-nav-mobile-links a {
          font-family: var(--z-font-display);
          font-size: 2rem;
          font-weight: 700;
          color: var(--z-white);
        }
        .z-nav-mobile-phone {
          margin-top: 24px;
          padding: 14px 28px;
          background: var(--z-red);
          border-radius: 999px;
          font-size: 1.1rem !important;
          font-family: var(--z-font-body) !important;
          font-weight: 600 !important;
        }
      `})]})}const dv="/videos/hero-poster.jpg",fv="/videos/hero-desktop.mp4",hv="/videos/hero-mobile.mp4",mv=[{icon:"★",label:"4,9 / 5",sub:"87 avis Google"},{icon:"✦",label:"Bio",sub:"Tomate des Pouilles"},{icon:"✓",label:"Maison",sub:"Pâte travaillée 48h"},{icon:"⌂",label:"Local",sub:"Producteurs du Comminges"}],pv={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.12,delayChildren:.4}}},Ci={hidden:{y:40,opacity:0},visible:{y:0,opacity:1,transition:{duration:.8,ease:[.22,1,.36,1]}}};function gv(){const r=C.useRef(null),{scrollYProgress:o}=sv({target:r,offset:["start start","end start"]}),d=rs(o,[0,1],["0%","25%"]),u=rs(o,[0,1],["0%","-15%"]),h=rs(o,[0,.8],[1,0]);return s.jsxs("section",{ref:r,className:"z-hero",id:"accueil",children:[s.jsxs(F.div,{className:"z-hero-video-wrap",style:{y:d},children:[s.jsxs("video",{className:"z-hero-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata",poster:dv,children:[s.jsx("source",{src:hv,type:"video/mp4",media:"(max-width: 768px)"}),s.jsx("source",{src:fv,type:"video/mp4"})]}),s.jsx("div",{className:"z-hero-overlay"}),s.jsx("div",{className:"z-hero-vignette"})]}),s.jsxs(F.div,{className:"z-hero-content",style:{y:u,opacity:h},variants:pv,initial:"hidden",animate:"visible",children:[s.jsxs(F.span,{className:"z-hero-eyebrow",variants:Ci,children:[s.jsx("span",{className:"z-hero-eyebrow-line"}),"Pizzeria & Restaurant · Saint-Gaudens",s.jsx("span",{className:"z-hero-eyebrow-line"})]}),s.jsxs(F.h1,{className:"z-hero-title",variants:Ci,children:["La ",s.jsx("em",{children:"vraie pizza"}),",",s.jsx("br",{}),"travaillée par Flo,",s.jsx("br",{}),"cuite sous vos yeux."]}),s.jsx(F.p,{className:"z-hero-sub",variants:Ci,children:"Pâte affinée maison, Tomate Bio des Pouilles, Fior di Latte et produits des fermes du Comminges. Du mardi au samedi, dès 18h30."}),s.jsxs(F.div,{className:"z-hero-ctas",variants:Ci,children:[s.jsxs("a",{href:"#commander",className:"z-btn z-btn-primary",children:["Réserver une table",s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",children:s.jsx("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),s.jsx("a",{href:"#menu",className:"z-btn z-btn-ghost",children:"Voir la carte"})]}),s.jsx(F.div,{className:"z-hero-badges",variants:Ci,children:mv.map(m=>s.jsxs("div",{className:"z-hero-badge",children:[s.jsx("span",{className:"z-hero-badge-icon",children:m.icon}),s.jsxs("div",{children:[s.jsx("div",{className:"z-hero-badge-label",children:m.label}),s.jsx("div",{className:"z-hero-badge-sub",children:m.sub})]})]},m.label))})]}),s.jsxs(F.div,{className:"z-hero-scroll",initial:{opacity:0},animate:{opacity:1},transition:{delay:1.8,duration:.8},children:[s.jsx("span",{children:"défiler"}),s.jsx(F.div,{className:"z-hero-scroll-line",animate:{scaleY:[0,1,0],originY:[0,0,1]},transition:{duration:2.2,repeat:1/0,ease:"easeInOut"}})]}),s.jsx("style",{children:`
        .z-hero {
          position: relative;
          min-height: 100vh;
          min-height: 100svh;
          width: 100%;
          overflow: hidden;
          color: var(--z-white);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .z-hero-video-wrap {
          position: absolute;
          inset: -10% 0 0 0;
          width: 100%;
          height: 110%;
          z-index: 1;
        }
        .z-hero-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .z-hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg,
              rgba(8, 41, 26, 0.35) 0%,
              rgba(8, 41, 26, 0.55) 50%,
              rgba(8, 41, 26, 0.85) 100%
            );
        }
        .z-hero-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%);
        }

        .z-hero-content {
          position: relative;
          z-index: 2;
          max-width: 1080px;
          padding: 120px 24px 80px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .z-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 28px;
        }
        .z-hero-eyebrow-line {
          width: 32px;
          height: 1px;
          background: rgba(255, 255, 255, 0.5);
        }
        .z-hero-title {
          font-family: var(--z-font-display);
          font-size: clamp(2.8rem, 8vw, 6.5rem);
          font-weight: 900;
          line-height: 1.02;
          letter-spacing: -0.035em;
          color: var(--z-white);
          margin-bottom: 28px;
          text-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
        }
        .z-hero-title em {
          font-style: italic;
          color: #FFB84D;
          font-weight: 900;
        }
        .z-hero-sub {
          max-width: 620px;
          font-size: clamp(1rem, 1.5vw, 1.2rem);
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 40px;
        }
        .z-hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          justify-content: center;
          margin-bottom: 56px;
        }
        .z-hero-badges {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          width: 100%;
          max-width: 720px;
        }
        @media (min-width: 720px) {
          .z-hero-badges { grid-template-columns: repeat(4, 1fr); }
        }
        .z-hero-badge {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 14px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          text-align: left;
        }
        .z-hero-badge-icon {
          font-size: 1.4rem;
          color: #FFB84D;
          font-weight: 700;
          min-width: 28px;
          text-align: center;
        }
        .z-hero-badge-label {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--z-white);
        }
        .z-hero-badge-sub {
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.65);
          margin-top: 2px;
        }

        .z-hero-scroll {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.7);
        }
        .z-hero-scroll-line {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.6);
        }

        @media (max-width: 640px) {
          .z-hero-content { padding: 110px 20px 100px; }
          .z-hero-title { font-size: 2.6rem; }
          .z-hero-sub { font-size: 0.95rem; }
          .z-hero-badge-icon { font-size: 1.1rem; }
          .z-hero-badge-label { font-size: 0.85rem; }
          .z-hero-badge-sub { font-size: 0.65rem; }
        }
      `})]})}const vv=[{id:"all",label:"Toute la carte"},{id:"creation",label:"Les Créations"},{id:"classique",label:"Les Classiques"},{id:"fromages",label:"Les Fromages"},{id:"autres",label:"Desserts & options"}],St=(r,o="jpg")=>`/images/pizzas/${r}.${o}`,is=[{id:"tartufo",name:"Tartufo",category:"creation",base:"creme",ingredients:["Crème à la truffe","Fior di Latte","Burrata à la truffe","Jambon cuit truffé"],afterCooking:["Burrata à la truffe","Jambon cuit truffé"],price:18,price26:15.3,price33:18,image:St("tartufo"),realPhoto:!0,signature:!0},{id:"pistacchio",name:"Pistacchio",category:"creation",base:"creme",ingredients:["Pesto de pistaches grillées","Fior di Latte","Burrata di Buffalo","Mortadelle à la pistache","Brisures de pistache"],afterCooking:["Burrata di Buffalo","Mortadelle à la pistache","Brisures de pistache"],price:17,price26:14.45,price33:17,image:St("pistacchio"),realPhoto:!0,signature:!0},{id:"cremosa",name:"Cremosa",category:"creation",base:"creme",ingredients:["Crème de burrata aux zests de citron","Oignon rouge","Fior di Latte","Jambon de Parme 18 mois","Tomates séchées","Pesto maison"],price:16,price26:13.6,price33:16,image:St("cremosa"),realPhoto:!0},{id:"carbonara",name:"Carbonara",category:"creation",base:"creme",ingredients:["Crème de Carbonara maison","Guanciale de Porc Noir de Bigorre grillé","Fior di Latte"],afterCooking:["Poivre","Tranches de Guanciale"],price:15,price26:12.75,price33:15,image:St("carbonara"),realPhoto:!0},{id:"piccante",name:"Piccante",category:"creation",base:"tomate",ingredients:["Tomate Bio des Pouilles","Fior di Latte","Spianata Piccante"],afterCooking:["Roquette","Coulis de poivrons grillés","Huile pimentée"],price:14,price26:11.9,price33:14,image:St("piccante"),realPhoto:!0,spicy:!0},{id:"margherita",name:"Margherita",category:"classique",base:"tomate",ingredients:["Tomate Bio des Pouilles","Basilic frais","Fior di Latte","Huile d'olive"],price:12,price26:10.2,price33:12,image:St("margherita"),realPhoto:!0,veggie:!0,bio:!0},{id:"chevre-miel",name:"Chèvre Miel",category:"classique",base:"creme",ingredients:["Base crème","Fior di Latte","Bûche de chèvre frais du Peuple des Chèvres","Miel de romarin des Frères Sarriguet","Romarin"],price:14,price26:11.9,price33:14,image:St("chevre-miel"),realPhoto:!0,veggie:!0,bio:!0},{id:"vegetarienne",name:"Végétarienne",category:"classique",base:"creme",ingredients:["Crème de champignons","Fior di Latte","Légumes marinés ou grillés"],afterCooking:["Parmesan 24 mois","Pesto maison"],price:14,price26:11.9,price33:14,image:null,veggie:!0,bio:!0},{id:"regina",name:"Regina",category:"classique",base:"tomate",ingredients:["Tomate Bio des Pouilles","Jambon cuit sans nitrite","Fior di Latte","Champignons","Origan","Oignon rouge","Poivre du moulin"],price:15,price26:12.75,price33:15,image:St("regina"),realPhoto:!0},{id:"tartiflette",name:"Tartiflette",category:"classique",base:"creme",ingredients:["Base crème","Pomme de terre","Compotée d'oignons","Reblochon au lait cru","Ventrèche de Porc Noir de Bigorre"],price:17,price26:14.45,price33:17,image:St("tartiflette"),realPhoto:!0},{id:"4-formaggi",name:"4 Formaggi",category:"fromages",base:"creme",ingredients:["Fior di Latte","Scamorza fumée","Gorgonzola","Pecorino semi-affiné"],price:15,price26:12.75,price33:15,image:St("4-formaggi"),realPhoto:!0,veggie:!0,italie:!0},{id:"4-fromages",name:"4 Fromages",category:"fromages",base:"creme",ingredients:["Base crème","Tomme de la ferme de Prouzic","Fourme d'Ambert","Reblochon au lait cru","Raclette de chèvre Bio des Hounts"],price:15,price26:12.75,price33:15,image:St("4-fromages"),realPhoto:!0,veggie:!0,france:!0},{id:"cookie-pistache",name:"Cookie Pistache",category:"autres",base:"dessert",ingredients:["Cookie fourré à la crème de pistache artisanale"],price:5,price26:4.25,price33:5,image:St("cookie-pistache"),realPhoto:!0,dessert:!0},{id:"cookie-choco",name:"Cookie Choco",category:"autres",base:"dessert",ingredients:["Cookie maison aux pépites de chocolat"],price:5,price26:4.25,price33:5,image:null,dessert:!0}],Rh={name:"La Pizza du Moment",description:"En fonction des mois et des saisons. La recette est annoncée sur Facebook et Instagram. Demandez à Flo."},Vh={label:"Pizza Petite Taille",description:"Toutes les pizzas sont disponibles en petite taille, -15 % sur le prix initial."},ym=[{label:"Olives",price:1.5},{label:"Œuf / Miel / Crème",price:1.5},{label:"Légumes",price:2},{label:"Fromage",price:2},{label:"Charcuterie / Viande",price:3},{label:"Anchois",price:4},{label:"Burrata",price:4}],xv=[{name:"Cookie Choco",price:5},{name:"Cookie Pistache",price:5}],zv={interieur:"/images/ambiance/interieur.jpg"},Sm=C.createContext(null);function bv({children:r}){const[o,d]=C.useState([]),u=C.useCallback(U=>{d(w=>{const j=w.findIndex(L=>L.id===U.id);if(j>=0){const L=[...w];return L[j]={...L[j],qty:(L[j].qty||1)+1},L}return[...w,{...U,qty:1}]})},[]),h=C.useCallback(U=>{d(w=>w.filter(j=>j.id!==U))},[]),m=C.useCallback((U,w)=>{if(w<=0){d(j=>j.filter(L=>L.id!==U));return}d(j=>j.map(L=>L.id===U?{...L,qty:w}:L))},[]),g=C.useCallback(()=>d([]),[]),E=C.useMemo(()=>o.reduce((U,w)=>U+w.price*(w.qty||1),0),[o]),M=C.useMemo(()=>o.reduce((U,w)=>U+(w.qty||1),0),[o]),B=C.useMemo(()=>({items:o,addItem:u,removeItem:h,updateQty:m,clear:g,total:E,count:M}),[o,u,h,m,g,E,M]);return s.jsx(Sm.Provider,{value:B,children:r})}function nc(){const r=C.useContext(Sm);if(!r)throw new Error("useCart must be used within CartProvider");return r}function yv({pizza:r}){const{base:o,name:d,ingredients:u=[]}=r,h=o==="creme"?"#F4ECDE":"#D04A2A",m=o==="creme"?"#E0D5C1":"#A0331C",g="#D4A968",E="#A07B3D",M=[...d].reduce((O,V)=>O+V.charCodeAt(0),0),B=O=>(M*9301+49297+O*233280)%233280/233280,U=u.some(O=>/olives?/i.test(O)),w=u.some(O=>/chèvre|brie|roquefort|cheddar|mozza/i.test(O)),j=u.some(O=>/viande|chorizo|jambon|poulet|merguez|lardon|magret|kebab|burger/i.test(O)),L=u.some(O=>/champignon/i.test(O)),z=u.some(O=>/poivron|piment/i.test(O)),H=[];if(U)for(let O=0;O<3;O++)H.push({type:"olive",cx:110+Math.sin(M+O*2)*50,cy:110+Math.cos(M+O*2)*50});if(j||L||z){const O=L?"#6B4E2E":z?"#C53030":"#9B5A3D";for(let V=0;V<6;V++)H.push({type:"chunk",cx:110+(B(V+10)-.5)*130,cy:110+(B(V+20)-.5)*130,r:7+B(V+30)*4,color:O})}if(w)for(let O=0;O<8;O++)H.push({type:"cheese",cx:110+(B(O+40)-.5)*140,cy:110+(B(O+50)-.5)*140,r:4+B(O+60)*3});return s.jsxs("div",{className:"z-pizza-placeholder","data-base":o,children:[s.jsxs("svg",{viewBox:"0 0 220 220",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"z-pizza-placeholder-svg",children:[s.jsxs("defs",{children:[s.jsxs("radialGradient",{id:`crust-${r.id}`,cx:"50%",cy:"50%",r:"50%",children:[s.jsx("stop",{offset:"80%",stopColor:g}),s.jsx("stop",{offset:"100%",stopColor:E})]}),s.jsxs("radialGradient",{id:`sauce-${r.id}`,cx:"50%",cy:"50%",r:"50%",children:[s.jsx("stop",{offset:"0%",stopColor:h,stopOpacity:"1"}),s.jsx("stop",{offset:"100%",stopColor:m,stopOpacity:"0.95"})]})]}),s.jsx("circle",{cx:"110",cy:"110",r:"100",fill:`url(#crust-${r.id})`}),[...Array(6)].map((O,V)=>{const Q=V/6*Math.PI*2+M;return s.jsx("ellipse",{cx:110+Math.cos(Q)*95,cy:110+Math.sin(Q)*95,rx:"10",ry:"6",fill:"#5A3A1E",opacity:"0.35",transform:`rotate(${Q*180/Math.PI} ${110+Math.cos(Q)*95} ${110+Math.sin(Q)*95})`},`burn-${V}`)}),s.jsx("circle",{cx:"110",cy:"110",r:"86",fill:`url(#sauce-${r.id})`}),H.map((O,V)=>O.type==="olive"?s.jsx("ellipse",{cx:O.cx,cy:O.cy,rx:"6",ry:"4",fill:"#1A1A1A"},`t-${V}`):O.type==="chunk"?s.jsx("circle",{cx:O.cx,cy:O.cy,r:O.r,fill:O.color,opacity:"0.85"},`t-${V}`):O.type==="cheese"?s.jsx("circle",{cx:O.cx,cy:O.cy,r:O.r,fill:"#FCD862",opacity:"0.7"},`t-${V}`):null),s.jsx("ellipse",{cx:"85",cy:"80",rx:"20",ry:"8",fill:"#FFFFFF",opacity:"0.18",transform:"rotate(-30 85 80)"})]}),s.jsx("span",{className:"z-pizza-placeholder-note",children:"Photo à venir"})]})}const Ko=r=>r.toFixed(2).replace(".",",")+" €",Wo=["Sauce tomate","Crème fraîche","Mozzarella"],qh={hidden:{opacity:0,x:-10},visible:r=>({opacity:1,x:0,transition:{delay:r*.03,duration:.3,ease:[.22,1,.36,1]}})};function Sv({pizza:r,size:o,onClose:d,onConfirm:u}){const h=o===26?r.price26:r.price33,[m,g]=C.useState(r.base),[E,M]=C.useState([]),[B,U]=C.useState([]),w=m!==r.base,j=C.useMemo(()=>w?r.ingredients.map(_=>_.startsWith("Sauce tomate")?m==="creme"?"Crème fraîche":_:_.startsWith("Crème fraîche")&&m==="tomate"?"Sauce tomate":_):r.ingredients,[r.ingredients,m,w]),L=C.useMemo(()=>B.reduce((_,$)=>_+$.price,0),[B]),z=h+L,H=_=>E.includes(_),O=_=>B.some($=>$.label===_),V=_=>{Wo.includes(_.split(" ")[0])||Wo.includes(_)||M($=>$.includes(_)?$.filter(I=>I!==_):[...$,_])},Q=_=>{U($=>$.find(I=>I.label===_.label)?$.filter(I=>I.label!==_.label):[...$,_])},X=()=>{u({base:m,baseChanged:w,removed:E,extras:B,finalPrice:z})};return s.jsxs(F.div,{className:"z-cust-backdrop",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:d,children:[s.jsxs(F.div,{className:"z-cust-modal",initial:{y:60,opacity:0,scale:.96},animate:{y:0,opacity:1,scale:1},exit:{y:60,opacity:0,scale:.96},transition:{type:"spring",stiffness:280,damping:26},onClick:_=>_.stopPropagation(),children:[s.jsx("button",{className:"z-cust-close",onClick:d,"aria-label":"Fermer",children:s.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:s.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})}),s.jsxs("div",{className:"z-cust-head",children:[s.jsx("img",{src:r.image,alt:r.name,className:"z-cust-image"}),s.jsxs("div",{children:[s.jsx("span",{className:"z-cust-eyebrow",children:"Personnaliser"}),s.jsx("h3",{className:"z-cust-title",children:r.name}),s.jsxs("p",{className:"z-cust-size",children:["Format ",o," cm · ",Ko(h)]})]})]}),s.jsxs("div",{className:"z-cust-section",children:[s.jsxs("div",{className:"z-cust-section-head",children:[s.jsx("h4",{children:"Choix de la base"}),s.jsx("span",{className:"z-cust-hint",children:"Tomate ou crème selon votre envie"})]}),s.jsxs("div",{className:"z-cust-base-toggle",children:[s.jsxs("button",{type:"button",className:"z-cust-base-option","data-active":m==="tomate",onClick:()=>g("tomate"),children:[s.jsx("span",{className:"z-cust-base-emoji","aria-hidden":"true",children:s.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor",children:s.jsx("circle",{cx:"12",cy:"12",r:"9"})})}),s.jsxs("span",{className:"z-cust-base-label",children:[s.jsx("strong",{children:"Base tomate"}),s.jsx("small",{children:"Classique, italienne"})]})]}),s.jsxs("button",{type:"button",className:"z-cust-base-option","data-active":m==="creme",onClick:()=>g("creme"),children:[s.jsx("span",{className:"z-cust-base-emoji","aria-hidden":"true",children:s.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor",children:s.jsx("circle",{cx:"12",cy:"12",r:"9"})})}),s.jsxs("span",{className:"z-cust-base-label",children:[s.jsx("strong",{children:"Base crème"}),s.jsx("small",{children:"Onctueux, plus doux"})]})]})]}),w&&s.jsx(F.p,{className:"z-cust-base-note",initial:{opacity:0,y:-6},animate:{opacity:1,y:0},transition:{duration:.3},children:"Vous avez modifié la base d'origine de cette pizza."})]}),s.jsxs("div",{className:"z-cust-section",children:[s.jsxs("div",{className:"z-cust-section-head",children:[s.jsx("h4",{children:"Ingrédients"}),s.jsx("span",{className:"z-cust-hint",children:"Désélectionnez pour retirer · allergies, goûts"})]}),s.jsx("ul",{className:"z-cust-list",children:j.map((_,$)=>{const I=Wo.some(re=>_.startsWith(re)),se=H(_);return s.jsxs(F.li,{custom:$,variants:qh,initial:"hidden",animate:"visible",className:"z-cust-item z-cust-item-ingredient","data-off":se,"data-protected":I,onClick:()=>V(_),children:[s.jsx("span",{className:"z-cust-check",children:I?s.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",children:s.jsx("path",{d:"M20 6L9 17l-5-5"})}):se?s.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",children:s.jsx("path",{d:"M18 6L6 18M6 6l12 12"})}):s.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",children:s.jsx("path",{d:"M20 6L9 17l-5-5"})})}),s.jsx("span",{className:"z-cust-item-label",children:_}),I&&s.jsx("span",{className:"z-cust-protected",children:"obligatoire"})]},_)})})]}),s.jsxs("div",{className:"z-cust-section",children:[s.jsxs("div",{className:"z-cust-section-head",children:[s.jsx("h4",{children:"Suppléments"}),s.jsx("span",{className:"z-cust-hint",children:"Ajoutez ce qui vous fait plaisir"})]}),s.jsx("ul",{className:"z-cust-list",children:ym.map((_,$)=>{const I=O(_.label);return s.jsxs(F.li,{custom:r.ingredients.length+$,variants:qh,initial:"hidden",animate:"visible",className:"z-cust-item z-cust-item-extra","data-active":I,onClick:()=>Q(_),children:[s.jsx("span",{className:"z-cust-extra-icon",children:s.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",children:I?s.jsx("path",{d:"M20 6L9 17l-5-5"}):s.jsx("path",{d:"M12 5v14M5 12h14"})})}),s.jsx("span",{className:"z-cust-item-label",children:_.label}),s.jsxs("span",{className:"z-cust-extra-price",children:["+ ",Ko(_.price)]})]},_.label)})})]}),s.jsxs("div",{className:"z-cust-footer",children:[s.jsxs("div",{className:"z-cust-total",children:[s.jsx("span",{children:"Total"}),s.jsx(F.strong,{initial:{scale:1.18,color:"var(--z-red)"},animate:{scale:1,color:"var(--z-black)"},transition:{duration:.35},children:Ko(z)},z)]}),s.jsxs("button",{className:"z-btn z-btn-primary",onClick:X,children:[s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",children:[s.jsx("circle",{cx:"9",cy:"21",r:"1"}),s.jsx("circle",{cx:"20",cy:"21",r:"1"}),s.jsx("path",{d:"M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"})]}),"Ajouter au panier"]})]})]}),s.jsx("style",{children:`
        .z-cust-backdrop {
          position: fixed;
          inset: 0;
          z-index: 250;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .z-cust-modal {
          background: var(--z-cream);
          border-radius: 22px;
          padding: 0;
          width: 100%;
          max-width: 520px;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.5);
        }
        .z-cust-close {
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 5;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.92);
          color: var(--z-text);
          display: grid;
          place-items: center;
          backdrop-filter: blur(8px);
        }
        .z-cust-close:hover {
          background: var(--z-red);
          color: var(--z-white);
        }

        .z-cust-head {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 18px;
          padding: 24px 24px 20px;
          background: var(--z-white);
          border-bottom: 1px solid var(--z-border);
          align-items: center;
        }
        .z-cust-image {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 14px;
          box-shadow: 0 8px 20px -8px rgba(14, 61, 36, 0.2);
        }
        .z-cust-eyebrow {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--z-red);
        }
        .z-cust-title {
          font-family: var(--z-font-display);
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--z-black);
          margin: 4px 0 4px;
          letter-spacing: -0.02em;
        }
        .z-cust-size {
          font-size: 0.84rem;
          color: var(--z-text-muted);
          margin: 0;
        }

        .z-cust-section {
          padding: 22px 24px 12px;
        }

        .z-cust-base-toggle {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 4px;
        }
        .z-cust-base-option {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: var(--z-white);
          border: 1.5px solid var(--z-border);
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.25s var(--z-ease);
          text-align: left;
        }
        .z-cust-base-option:hover {
          border-color: var(--z-text-muted);
          transform: translateY(-1px);
        }
        .z-cust-base-option[data-active="true"] {
          border-color: var(--z-green);
          background: rgba(14, 61, 36, 0.06);
          box-shadow: 0 6px 16px -6px rgba(14, 61, 36, 0.3);
        }
        .z-cust-base-emoji {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }
        .z-cust-base-option:first-child .z-cust-base-emoji {
          background: rgba(214, 40, 40, 0.12);
          color: var(--z-red);
        }
        .z-cust-base-option:last-child .z-cust-base-emoji {
          background: rgba(201, 162, 75, 0.18);
          color: var(--z-gold);
        }
        .z-cust-base-option[data-active="true"]:first-child .z-cust-base-emoji {
          background: var(--z-red);
          color: var(--z-white);
        }
        .z-cust-base-option[data-active="true"]:last-child .z-cust-base-emoji {
          background: var(--z-gold);
          color: var(--z-white);
        }
        .z-cust-base-label {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
        }
        .z-cust-base-label strong {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--z-text);
        }
        .z-cust-base-label small {
          font-size: 0.72rem;
          color: var(--z-text-muted);
          margin-top: 2px;
        }
        .z-cust-base-note {
          margin: 10px 0 0;
          padding: 8px 12px;
          font-size: 0.78rem;
          color: var(--z-green);
          background: rgba(14, 61, 36, 0.06);
          border-radius: 8px;
          font-style: italic;
        }
        @media (max-width: 480px) {
          .z-cust-base-option {
            padding: 12px 12px;
            gap: 10px;
          }
          .z-cust-base-label strong { font-size: 0.88rem; }
          .z-cust-base-label small { font-size: 0.68rem; }
        }

        .z-cust-section-head {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 10px;
          margin-bottom: 12px;
        }
        .z-cust-section h4 {
          font-family: var(--z-font-display);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--z-black);
          margin: 0;
        }
        .z-cust-hint {
          font-size: 0.74rem;
          color: var(--z-text-muted);
          text-align: right;
        }

        .z-cust-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .z-cust-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 11px 14px;
          background: var(--z-white);
          border: 1.5px solid var(--z-border);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s var(--z-ease);
          user-select: none;
        }
        .z-cust-item:hover { border-color: var(--z-text-muted); }

        .z-cust-check {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--z-success);
          color: var(--z-white);
          display: grid;
          place-items: center;
          flex-shrink: 0;
          transition: all 0.2s;
        }
        .z-cust-item[data-off="true"] .z-cust-check {
          background: var(--z-danger);
        }
        .z-cust-item[data-off="true"] .z-cust-item-label {
          color: var(--z-text-muted);
          text-decoration: line-through;
        }
        .z-cust-item[data-off="true"] {
          background: rgba(220, 38, 38, 0.04);
          border-color: rgba(220, 38, 38, 0.25);
        }
        .z-cust-item[data-protected="true"] {
          cursor: not-allowed;
          opacity: 0.7;
        }
        .z-cust-item[data-protected="true"]:hover { border-color: var(--z-border); }

        .z-cust-item-label {
          flex: 1;
          font-size: 0.92rem;
          font-weight: 500;
          color: var(--z-text);
        }
        .z-cust-protected {
          font-size: 0.65rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--z-text-muted);
          font-weight: 600;
        }

        .z-cust-extra-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--z-cream-warm);
          color: var(--z-text);
          display: grid;
          place-items: center;
          flex-shrink: 0;
          transition: all 0.2s;
        }
        .z-cust-item[data-active="true"] .z-cust-extra-icon {
          background: var(--z-success);
          color: var(--z-white);
        }
        .z-cust-item[data-active="true"] {
          background: rgba(46, 139, 87, 0.06);
          border-color: rgba(46, 139, 87, 0.35);
        }
        .z-cust-extra-price {
          font-family: var(--z-font-display);
          font-weight: 700;
          color: var(--z-red);
          font-size: 0.9rem;
          flex-shrink: 0;
        }
        .z-cust-item[data-active="true"] .z-cust-extra-price {
          color: var(--z-success);
        }

        .z-cust-footer {
          position: sticky;
          bottom: 0;
          background: var(--z-cream);
          padding: 18px 24px 22px;
          border-top: 1px solid var(--z-border);
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 8px;
        }
        .z-cust-total {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }
        .z-cust-total span {
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--z-text-muted);
          margin-bottom: 4px;
        }
        .z-cust-total strong {
          font-family: var(--z-font-display);
          font-size: 1.7rem;
          font-weight: 800;
          color: var(--z-black);
          letter-spacing: -0.02em;
        }
        .z-cust-footer .z-btn {
          flex: 1;
          justify-content: center;
        }

        @media (max-width: 480px) {
          .z-cust-head {
            grid-template-columns: 80px 1fr;
            padding: 20px 20px 16px;
          }
          .z-cust-image { width: 80px; height: 80px; }
          .z-cust-title { font-size: 1.4rem; }
          .z-cust-section { padding: 18px 20px 10px; }
          .z-cust-footer { padding: 14px 20px 18px; }
          .z-cust-total strong { font-size: 1.4rem; }
        }
      `})]})}const jv={hidden:{opacity:0,y:30},visible:r=>({opacity:1,y:0,transition:{duration:.5,delay:r*.04,ease:[.22,1,.36,1]}}),exit:{opacity:0,y:-20,transition:{duration:.2}}},Ai=r=>r.toFixed(2).replace(".",",")+" €";function wv(){const[r,o]=C.useState("all"),[d,u]=C.useState({}),[h,m]=C.useState(null),[g,E]=C.useState(null),{addItem:M}=nc(),B=C.useMemo(()=>r==="all"?is:is.filter(z=>z.category===r),[r]),U=z=>d[z]??33,w=z=>{const H=U(z.id),O=H===26?z.price26:z.price33;M({id:`${z.id}-${H}`,pizzaId:z.id,name:z.name,size:`${H} cm`,price:O,image:z.image}),m(`${z.id}-${H}`),setTimeout(()=>m(null),1200)},j=z=>{const H=U(z.id);E({pizza:z,size:H})},L=({base:z,baseChanged:H,removed:O,extras:V,finalPrice:Q})=>{const{pizza:X,size:_}=g,$=H?`-b${z}`:"",I=O.length?`-no-${O.length}`:"",se=V.length?`-x${V.length}`:"";M({id:`${X.id}-${_}${$}${I}${se}-${Date.now()}`,pizzaId:X.id,name:X.name,size:`${_} cm`,price:Q,image:X.image,base:z,baseChanged:H,removed:O,extras:V}),m(`custom-${X.id}`),E(null),setTimeout(()=>m(null),1200)};return s.jsxs("section",{className:"z-menu",id:"menu",children:[s.jsxs("div",{className:"z-container",children:[s.jsxs(F.div,{className:"z-menu-head",initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.7,ease:[.22,1,.36,1]},children:[s.jsx("span",{className:"z-eyebrow",children:"Notre carte"}),s.jsxs("h2",{className:"z-menu-title",children:["14 pizzas, ",s.jsx("em",{children:"une seule"})," obsession :",s.jsx("br",{})," la qualité."]}),s.jsx("p",{className:"z-menu-intro",children:"Toutes nos pizzas sont préparées à la commande, à partir d'ingrédients frais et de produits locaux du Comminges. Format unique pour partager, Format normal ou petite taille (-1533 cm à partager, ou Familiale 60×40 pour la tablée.nbsp;%) si vous mangez léger."})]}),s.jsx("div",{className:"z-menu-filters",children:vv.map(z=>s.jsxs("button",{onClick:()=>o(z.id),className:"z-chip","data-active":r===z.id,children:[z.label,z.id==="all"&&s.jsx("span",{className:"z-chip-count",children:is.length}),z.id!=="all"&&s.jsx("span",{className:"z-chip-count",children:is.filter(H=>H.category===z.id).length})]},z.id))}),s.jsx(F.div,{className:"z-menu-grid",layout:!0,children:s.jsx(Ot,{mode:"popLayout",children:B.map((z,H)=>{const O=U(z.id),V=O===26?z.price26:z.price33,Q=`${z.id}-${O}`;return s.jsxs(F.article,{layout:!0,custom:H,variants:jv,initial:"hidden",animate:"visible",exit:"exit",className:"z-pizza-card",whileHover:{y:-6},children:[z.signature&&s.jsx("span",{className:"z-pizza-badge z-pizza-badge-signature",children:"★ Signature"}),z.veggie&&s.jsx("span",{className:"z-pizza-badge z-pizza-badge-veggie",children:"Végé"}),z.realPhoto&&s.jsxs("span",{className:"z-pizza-photo-real",title:"Photo réelle prise dans le commerce",children:[s.jsxs("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"}),s.jsx("circle",{cx:"12",cy:"13",r:"4"})]}),"Photo maison"]}),s.jsxs("div",{className:"z-pizza-image",children:[z.image?s.jsx("img",{src:z.image,alt:z.name,loading:"lazy"}):s.jsx(yv,{pizza:z}),s.jsx("span",{className:"z-pizza-base","data-base":z.base,children:z.base==="creme"?"Base crème":"Base tomate"})]}),s.jsxs("div",{className:"z-pizza-body",children:[s.jsx("h3",{className:"z-pizza-name",children:z.name}),s.jsx("p",{className:"z-pizza-ingredients",children:z.ingredients.join(" · ")}),s.jsxs("div",{className:"z-pizza-sizes",children:[s.jsxs("button",{className:"z-pizza-size","data-active":O===26,onClick:()=>u(X=>({...X,[z.id]:26})),children:[s.jsx("span",{className:"z-pizza-size-label",children:"Petite"}),s.jsx("span",{className:"z-pizza-size-price",children:Ai(z.price26)})]}),s.jsxs("button",{className:"z-pizza-size","data-active":O===33,onClick:()=>u(X=>({...X,[z.id]:33})),children:[s.jsx("span",{className:"z-pizza-size-label",children:"Normale"}),s.jsx("span",{className:"z-pizza-size-price",children:Ai(z.price33)})]})]}),s.jsxs("div",{className:"z-pizza-actions",children:[s.jsx("button",{className:"z-pizza-add",onClick:()=>w(z),"data-success":h===Q,children:h===Q?s.jsxs(s.Fragment,{children:[s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",children:s.jsx("path",{d:"M20 6L9 17l-5-5"})}),"Ajoutée !"]}):s.jsxs(s.Fragment,{children:[s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",children:s.jsx("path",{d:"M12 5v14M5 12h14"})}),Ai(V)]})}),s.jsx("button",{className:"z-pizza-customize",onClick:()=>j(z),title:"Retirer un ingrédient, ajouter un supplément","aria-label":"Personnaliser cette pizza",children:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M3 6h18M3 12h18M3 18h18"}),s.jsx("circle",{cx:"6",cy:"6",r:"2",fill:"currentColor"}),s.jsx("circle",{cx:"15",cy:"12",r:"2",fill:"currentColor"}),s.jsx("circle",{cx:"9",cy:"18",r:"2",fill:"currentColor"})]})})]})]})]},z.id)})})}),s.jsx(Ot,{children:g&&s.jsx(Sv,{pizza:g.pizza,size:g.size,onClose:()=>E(null),onConfirm:L})}),s.jsxs(F.div,{className:"z-menu-extras",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.6},children:[s.jsxs("div",{className:"z-extras-card z-extras-familiale",children:[s.jsx("span",{className:"z-extras-tag",children:"Saison"}),s.jsx("h3",{children:Rh.name}),s.jsx("p",{children:Rh.description}),s.jsx("div",{className:"z-extras-price",children:"Demandez à Flo"})]}),s.jsxs("div",{className:"z-extras-card",children:[s.jsx("span",{className:"z-extras-tag",children:"Option"}),s.jsx("h3",{children:Vh.label}),s.jsx("p",{children:Vh.description}),s.jsx("div",{className:"z-extras-price",children:"−15 %"})]}),s.jsxs("div",{className:"z-extras-card",children:[s.jsx("h3",{children:"Desserts maison"}),s.jsx("ul",{className:"z-extras-list",children:xv.map(z=>s.jsxs("li",{children:[s.jsx("span",{children:z.name}),s.jsx("span",{children:Ai(z.price)})]},z.name))})]}),s.jsxs("div",{className:"z-extras-card",children:[s.jsx("h3",{children:"Suppléments"}),s.jsx("ul",{className:"z-extras-list",children:ym.map(z=>s.jsxs("li",{children:[s.jsx("span",{children:z.label}),s.jsxs("span",{children:["+ ",Ai(z.price)]})]},z.label))})]})]})]}),s.jsx("style",{children:`
        .z-menu {
          padding: 100px 0 120px;
          background: var(--z-cream);
          position: relative;
        }
        .z-menu-head {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 56px;
        }
        .z-menu-title {
          font-family: var(--z-font-display);
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          font-weight: 900;
          line-height: 1.05;
          margin: 20px 0 20px;
          color: var(--z-black);
          letter-spacing: -0.025em;
        }
        .z-menu-title em {
          font-style: italic;
          color: var(--z-red);
          font-weight: 900;
        }
        .z-menu-intro {
          font-size: 1.05rem;
          color: var(--z-text-muted);
          line-height: 1.6;
        }

        .z-menu-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          margin-bottom: 56px;
          padding: 0 12px;
        }
        .z-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 999px;
          background: var(--z-white);
          border: 1.5px solid var(--z-border);
          color: var(--z-text);
          font-size: 0.88rem;
          font-weight: 600;
          transition: all 0.25s var(--z-ease);
          cursor: pointer;
        }
        .z-chip:hover {
          border-color: var(--z-green);
          color: var(--z-green);
        }
        .z-chip[data-active="true"] {
          background: var(--z-green);
          color: var(--z-white);
          border-color: var(--z-green);
          box-shadow: 0 6px 20px -8px rgba(14, 61, 36, 0.4);
        }
        .z-chip-count {
          font-size: 0.7rem;
          opacity: 0.7;
          padding: 2px 7px;
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.08);
        }
        .z-chip[data-active="true"] .z-chip-count {
          background: rgba(255, 255, 255, 0.2);
          opacity: 1;
        }

        .z-menu-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }
        @media (min-width: 560px) {
          .z-menu-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 960px) {
          .z-menu-grid { grid-template-columns: repeat(3, 1fr); gap: 24px; }
        }
        @media (min-width: 1280px) {
          .z-menu-grid { grid-template-columns: repeat(4, 1fr); }
        }

        .z-pizza-card {
          position: relative;
          background: var(--z-white);
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(14, 61, 36, 0.06), 0 12px 30px -10px rgba(14, 61, 36, 0.1);
          transition: box-shadow 0.3s var(--z-ease);
          display: flex;
          flex-direction: column;
        }
        .z-pizza-card:hover {
          box-shadow: 0 1px 3px rgba(14, 61, 36, 0.08), 0 25px 60px -15px rgba(14, 61, 36, 0.2);
        }

        .z-pizza-badge {
          position: absolute;
          top: 14px;
          z-index: 2;
          padding: 5px 12px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 999px;
          backdrop-filter: blur(8px);
        }
        .z-pizza-badge-signature {
          right: 14px;
          background: rgba(214, 40, 40, 0.95);
          color: var(--z-white);
        }
        .z-pizza-badge-veggie {
          left: 14px;
          background: rgba(46, 139, 87, 0.95);
          color: var(--z-white);
        }
        .z-pizza-photo-real {
          position: absolute;
          bottom: calc(100% - 14px);
          right: 14px;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 9px;
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--z-black);
          background: var(--z-gold);
          border-radius: 999px;
          box-shadow: 0 4px 12px rgba(201, 162, 75, 0.4);
        }
        .z-pizza-card:has(.z-pizza-badge-signature) .z-pizza-photo-real {
          bottom: auto;
          top: 50px;
        }

        .z-pizza-image {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: var(--z-cream-warm);
        }
        .z-pizza-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s var(--z-ease);
        }
        .z-pizza-card:hover .z-pizza-image img {
          transform: scale(1.06);
        }
        .z-pizza-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: linear-gradient(135deg, #F8F1E5 0%, #EBDFC8 100%);
          transition: transform 0.6s var(--z-ease);
        }
        .z-pizza-placeholder[data-base="creme"] {
          background: linear-gradient(135deg, #FBF7F1 0%, #E8DFD0 100%);
        }
        .z-pizza-card:hover .z-pizza-placeholder {
          transform: scale(1.05);
        }
        .z-pizza-placeholder-svg {
          width: 78%;
          height: 78%;
          filter: drop-shadow(0 8px 16px rgba(160, 100, 50, 0.25));
        }
        .z-pizza-placeholder-note {
          position: absolute;
          bottom: 10px;
          right: 10px;
          padding: 3px 9px;
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--z-text-muted);
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(6px);
          border-radius: 999px;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        .z-pizza-base {
          position: absolute;
          bottom: 12px;
          left: 12px;
          padding: 4px 10px;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: var(--z-white);
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(8px);
          border-radius: 999px;
        }
        .z-pizza-base[data-base="creme"] {
          background: rgba(201, 162, 75, 0.92);
        }

        .z-pizza-body {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }
        .z-pizza-name {
          font-family: var(--z-font-display);
          font-size: 1.35rem;
          font-weight: 700;
          letter-spacing: -0.015em;
          color: var(--z-black);
          margin: 0;
        }
        .z-pizza-ingredients {
          font-size: 0.82rem;
          color: var(--z-text-muted);
          line-height: 1.45;
          flex: 1;
        }
        .z-pizza-sizes {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }
        .z-pizza-size {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: 8px 10px;
          border-radius: 10px;
          background: var(--z-cream-warm);
          border: 1.5px solid transparent;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .z-pizza-size:hover {
          background: var(--z-border);
        }
        .z-pizza-size[data-active="true"] {
          background: rgba(14, 61, 36, 0.06);
          border-color: var(--z-green);
        }
        .z-pizza-size-label {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--z-text-muted);
          letter-spacing: 0.05em;
        }
        .z-pizza-size-price {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--z-black);
          font-family: var(--z-font-display);
        }
        .z-pizza-size[data-active="true"] .z-pizza-size-price {
          color: var(--z-green);
        }

        .z-pizza-actions {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 8px;
        }
        .z-pizza-add {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 16px;
          background: var(--z-red);
          color: var(--z-white);
          border-radius: 12px;
          font-size: 0.92rem;
          font-weight: 600;
          transition: all 0.25s var(--z-ease);
        }
        .z-pizza-add:hover {
          background: var(--z-red-dark);
          transform: translateY(-1px);
        }
        .z-pizza-add[data-success="true"] {
          background: var(--z-success);
        }
        .z-pizza-customize {
          width: 44px;
          display: grid;
          place-items: center;
          background: var(--z-cream-warm);
          color: var(--z-text);
          border-radius: 12px;
          border: 1.5px solid var(--z-border);
          transition: all 0.2s var(--z-ease);
          cursor: pointer;
          flex-shrink: 0;
        }
        .z-pizza-customize:hover {
          background: var(--z-green);
          color: var(--z-white);
          border-color: var(--z-green);
        }

        .z-menu-extras {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
          margin-top: 64px;
        }
        @media (min-width: 720px) {
          .z-menu-extras { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .z-menu-extras { grid-template-columns: 1.4fr 1fr 1fr 1fr; }
        }

        .z-extras-card {
          background: var(--z-white);
          padding: 28px 24px;
          border-radius: 18px;
          box-shadow: 0 1px 3px rgba(14, 61, 36, 0.06);
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .z-extras-card h3 {
          font-family: var(--z-font-display);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--z-black);
          margin: 0;
        }
        .z-extras-familiale {
          background: linear-gradient(135deg, var(--z-green) 0%, var(--z-green-dark) 100%);
          color: var(--z-white);
          grid-column: span 1;
        }
        .z-extras-familiale h3,
        .z-extras-familiale p {
          color: var(--z-white);
        }
        .z-extras-tag {
          align-self: flex-start;
          padding: 4px 12px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 999px;
        }
        .z-extras-price {
          font-family: var(--z-font-display);
          font-size: 2.2rem;
          font-weight: 900;
          color: var(--z-gold);
          letter-spacing: -0.02em;
          margin-top: auto;
        }
        .z-extras-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .z-extras-list li {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 12px;
          font-size: 0.92rem;
          padding-bottom: 8px;
          border-bottom: 1px dashed var(--z-border);
        }
        .z-extras-list li:last-child {
          border-bottom: none;
        }
        .z-extras-list li span:last-child {
          font-family: var(--z-font-display);
          font-weight: 700;
          color: var(--z-red);
          flex-shrink: 0;
        }
        .z-extras-note {
          font-size: 0.78rem;
          color: var(--z-text-muted);
          font-style: italic;
        }
      `})]})}const Fo=[{id:"cart",label:"Panier",n:1},{id:"address",label:"Livraison",n:2},{id:"time",label:"Créneau",n:3},{id:"payment",label:"Paiement",n:4}],$t=r=>r.toFixed(2).replace(".",",")+" €";function Nv(){const r=[],o=new Date;o.setHours(18,30,0,0);const d=new Date(o.getTime()+1800*1e3);d.setMinutes(Math.ceil(d.getMinutes()/15)*15,0,0);for(let u=0;u<8;u++){const h=new Date(d.getTime()+u*15*60*1e3),m=h.getHours(),g=h.getMinutes();(m<23||m===23&&g<=30)&&r.push({id:`${m}:${g}`,label:`${m}h${String(g).padStart(2,"0")}`,time:h,eta:25+u*3})}return r}function Ev(){const{items:r,total:o,count:d,updateQty:u,removeItem:h,clear:m}=nc(),[g,E]=C.useState("cart"),[M,B]=C.useState({firstName:"",lastName:"",phone:"",line:"",note:""}),[U,w]=C.useState([]),[j,L]=C.useState(null),[z,H]=C.useState(!1),[O,V]=C.useState(null),[Q,X]=C.useState(null),[_,$]=C.useState(!1),I=Nv(),se=2.5;C.useEffect(()=>{if(M.line.length<4){w([]);return}const G=new AbortController;H(!0);const et=setTimeout(()=>{fetch(`https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(M.line)}&limit=5&lat=43.1095&lon=0.7250`,{signal:G.signal}).then(Be=>Be.json()).then(Be=>{w(Be.features||[]),H(!1)}).catch(()=>H(!1))},250);return()=>{clearTimeout(et),G.abort()}},[M.line]);const re=r.length>0,ue=M.firstName.trim().length>1&&M.lastName.trim().length>1&&M.phone.replace(/\s/g,"").length>=10&&j!==null,Ie=O!==null,dt=()=>{$(!0),setTimeout(()=>{const G="ZID-"+Math.floor(1e3+Math.random()*9e3);X(G),$(!1),E("success")},1600)},_e=()=>{m(),E("cart"),B({firstName:"",lastName:"",phone:"",line:"",note:""}),L(null),V(null),X(null)};return s.jsxs("section",{className:"z-order",id:"commander",children:[s.jsxs("div",{className:"z-container",children:[s.jsxs(F.div,{className:"z-order-head",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6},children:[s.jsx("span",{className:"z-eyebrow",children:"Commande en ligne"}),s.jsxs("h2",{className:"z-order-title",children:["Votre pizza, ",s.jsx("em",{children:"chez vous"})," en 30 min."]}),s.jsx("p",{className:"z-order-intro",children:"Pas de commission Uber qui s'ajoute, pas d'attente au téléphone. Commandez directement, on est sur la route dès que c'est cuit."})]}),g!=="success"&&s.jsx("div",{className:"z-stepper",children:Fo.map((G,et)=>{const Be=Fo.findIndex(K=>K.id===g),A=G.id===g,R=et<Be;return s.jsxs(lm.Fragment,{children:[s.jsxs("div",{className:"z-stepper-item","data-active":A,"data-done":R,children:[s.jsx("span",{className:"z-stepper-num",children:R?s.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",children:s.jsx("path",{d:"M20 6L9 17l-5-5"})}):G.n}),s.jsx("span",{className:"z-stepper-label",children:G.label})]}),et<Fo.length-1&&s.jsx("span",{className:"z-stepper-line","data-done":R})]},G.id)})}),s.jsx("div",{className:"z-order-box",children:s.jsxs(Ot,{mode:"wait",children:[g==="cart"&&s.jsxs(F.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3},className:"z-step",children:[s.jsx("h3",{className:"z-step-title",children:"Votre panier"}),r.length===0?s.jsxs("div",{className:"z-empty",children:[s.jsxs("svg",{width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("circle",{cx:"9",cy:"21",r:"1"}),s.jsx("circle",{cx:"20",cy:"21",r:"1"}),s.jsx("path",{d:"M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"})]}),s.jsx("p",{children:"Votre panier est vide pour le moment."}),s.jsx("a",{href:"#menu",className:"z-btn z-btn-primary",children:"Voir la carte"})]}):s.jsxs(s.Fragment,{children:[s.jsx("ul",{className:"z-cart-list",children:r.map(G=>{var et,Be,A,R;return s.jsxs(F.li,{layout:!0,initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,x:-20},className:"z-cart-item",children:[s.jsx("img",{src:G.image,alt:"",className:"z-cart-thumb"}),s.jsxs("div",{className:"z-cart-info",children:[s.jsx("div",{className:"z-cart-name",children:G.name}),s.jsx("div",{className:"z-cart-size",children:G.size}),(G.baseChanged||((et=G.removed)==null?void 0:et.length)>0||((Be=G.extras)==null?void 0:Be.length)>0)&&s.jsxs("div",{className:"z-cart-mods",children:[G.baseChanged&&s.jsxs("span",{className:"z-cart-mod z-cart-mod-base",children:[s.jsx("svg",{width:"9",height:"9",viewBox:"0 0 24 24",fill:"currentColor",children:s.jsx("circle",{cx:"12",cy:"12",r:"9"})}),"base ",G.base==="creme"?"crème":"tomate"]}),(A=G.removed)==null?void 0:A.map(K=>s.jsxs("span",{className:"z-cart-mod z-cart-mod-out",children:[s.jsx("svg",{width:"9",height:"9",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",children:s.jsx("path",{d:"M18 6L6 18M6 6l12 12"})}),"sans ",K.toLowerCase()]},K)),(R=G.extras)==null?void 0:R.map(K=>s.jsxs("span",{className:"z-cart-mod z-cart-mod-in",children:[s.jsx("svg",{width:"9",height:"9",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",children:s.jsx("path",{d:"M12 5v14M5 12h14"})}),K.label.toLowerCase()]},K.label))]})]}),s.jsxs("div",{className:"z-cart-qty",children:[s.jsx("button",{onClick:()=>u(G.id,G.qty-1),"aria-label":"Diminuer",children:"−"}),s.jsx("span",{children:G.qty}),s.jsx("button",{onClick:()=>u(G.id,G.qty+1),"aria-label":"Augmenter",children:"+"})]}),s.jsx("div",{className:"z-cart-price",children:$t(G.price*G.qty)}),s.jsx("button",{className:"z-cart-remove",onClick:()=>h(G.id),"aria-label":"Retirer du panier",children:s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:s.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]},G.id)})}),s.jsxs("div",{className:"z-cart-totals",children:[s.jsxs("div",{className:"z-cart-row",children:[s.jsxs("span",{children:["Sous-total (",d," article",d>1?"s":"",")"]}),s.jsx("span",{children:$t(o)})]}),s.jsxs("div",{className:"z-cart-row",children:[s.jsx("span",{children:"Livraison"}),s.jsx("span",{children:$t(se)})]}),s.jsxs("div",{className:"z-cart-row z-cart-total",children:[s.jsx("span",{children:"Total"}),s.jsx("span",{children:$t(o+se)})]})]}),s.jsxs("button",{className:"z-btn z-btn-primary z-step-cta",disabled:!re,onClick:()=>E("address"),children:["Passer à la livraison",s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",children:s.jsx("path",{d:"M5 12h14M13 5l7 7-7 7"})})]})]})]},"cart"),g==="address"&&s.jsxs(F.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3},className:"z-step",children:[s.jsx("h3",{className:"z-step-title",children:"Où on vous livre ?"}),s.jsxs("div",{className:"z-form-grid",children:[s.jsxs("label",{className:"z-field",children:[s.jsx("span",{children:"Prénom"}),s.jsx("input",{type:"text",value:M.firstName,onChange:G=>B({...M,firstName:G.target.value}),placeholder:"Marie",autoComplete:"given-name"})]}),s.jsxs("label",{className:"z-field",children:[s.jsx("span",{children:"Nom"}),s.jsx("input",{type:"text",value:M.lastName,onChange:G=>B({...M,lastName:G.target.value}),placeholder:"Durand",autoComplete:"family-name"})]})]}),s.jsxs("label",{className:"z-field",children:[s.jsx("span",{children:"Téléphone"}),s.jsx("input",{type:"tel",value:M.phone,onChange:G=>B({...M,phone:G.target.value}),placeholder:"06 12 34 56 78",autoComplete:"tel"})]}),s.jsxs("label",{className:"z-field z-field-address",children:[s.jsxs("span",{children:["Adresse de livraison",z&&s.jsx("em",{className:"z-field-loading",children:"recherche..."})]}),s.jsx("input",{type:"text",value:M.line,onChange:G=>{B({...M,line:G.target.value}),L(null)},placeholder:"Tapez votre rue (ex : 5 rue Thiers, Saint-Gaudens)",autoComplete:"off"}),U.length>0&&!j&&s.jsx("ul",{className:"z-autocomplete",children:U.map(G=>s.jsx("li",{children:s.jsxs("button",{type:"button",onClick:()=>{L({label:G.properties.label,city:G.properties.city,postcode:G.properties.postcode,lat:G.geometry.coordinates[1],lng:G.geometry.coordinates[0]}),B({...M,line:G.properties.label}),w([])},children:[s.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[s.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),s.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),s.jsxs("div",{children:[s.jsx("strong",{children:G.properties.name}),s.jsxs("span",{children:[G.properties.postcode," ",G.properties.city]})]})]})},G.properties.id))}),j&&s.jsxs("div",{className:"z-address-confirmed",children:[s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",children:s.jsx("path",{d:"M20 6L9 17l-5-5"})}),s.jsxs("div",{children:[s.jsx("strong",{children:j.label}),s.jsxs("small",{children:["GPS prêt pour la navigation chauffeur — ",j.lat.toFixed(4),","," ",j.lng.toFixed(4)]})]})]})]}),s.jsxs("label",{className:"z-field",children:[s.jsx("span",{children:"Instructions (facultatif)"}),s.jsx("input",{type:"text",value:M.note,onChange:G=>B({...M,note:G.target.value}),placeholder:"Code interphone, étage, sonnez à droite..."})]}),s.jsxs("div",{className:"z-step-actions",children:[s.jsx("button",{className:"z-btn-ghost-dark",onClick:()=>E("cart"),children:"Retour"}),s.jsxs("button",{className:"z-btn z-btn-primary",disabled:!ue,onClick:()=>E("time"),children:["Choisir un créneau",s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",children:s.jsx("path",{d:"M5 12h14M13 5l7 7-7 7"})})]})]})]},"address"),g==="time"&&s.jsxs(F.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3},className:"z-step",children:[s.jsx("h3",{className:"z-step-title",children:"À quelle heure on arrive ?"}),s.jsx("p",{className:"z-step-hint",children:"Notre cuisine fonctionne en continu. Choisissez l'horaire qui vous arrange — le chrono démarre quand on sort du four."}),s.jsx("div",{className:"z-slots",children:I.map(G=>s.jsxs("button",{className:"z-slot","data-active":(O==null?void 0:O.id)===G.id,onClick:()=>V(G),children:[s.jsx("span",{className:"z-slot-time",children:G.label}),s.jsxs("span",{className:"z-slot-eta",children:["~ ",G.eta," min"]})]},G.id))}),s.jsxs("div",{className:"z-step-actions",children:[s.jsx("button",{className:"z-btn-ghost-dark",onClick:()=>E("address"),children:"Retour"}),s.jsxs("button",{className:"z-btn z-btn-primary",disabled:!Ie,onClick:()=>E("payment"),children:["Finaliser",s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",children:s.jsx("path",{d:"M5 12h14M13 5l7 7-7 7"})})]})]})]},"time"),g==="payment"&&s.jsxs(F.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3},className:"z-step",children:[s.jsx("h3",{className:"z-step-title",children:"Tout est prêt."}),s.jsxs("div",{className:"z-recap",children:[s.jsxs("div",{className:"z-recap-row",children:[s.jsx("span",{className:"z-recap-label",children:"Livraison à"}),s.jsxs("span",{className:"z-recap-value",children:[M.firstName," ",M.lastName," —"," ",j==null?void 0:j.label]})]}),s.jsxs("div",{className:"z-recap-row",children:[s.jsx("span",{className:"z-recap-label",children:"Créneau"}),s.jsxs("span",{className:"z-recap-value",children:[O==null?void 0:O.label," (",O==null?void 0:O.eta," min)"]})]}),s.jsxs("div",{className:"z-recap-row",children:[s.jsx("span",{className:"z-recap-label",children:"Téléphone"}),s.jsx("span",{className:"z-recap-value",children:M.phone})]}),s.jsx("hr",{}),s.jsxs("div",{className:"z-recap-row",children:[s.jsx("span",{className:"z-recap-label",children:"Sous-total"}),s.jsx("span",{className:"z-recap-value",children:$t(o)})]}),s.jsxs("div",{className:"z-recap-row",children:[s.jsx("span",{className:"z-recap-label",children:"Livraison"}),s.jsx("span",{className:"z-recap-value",children:$t(se)})]}),s.jsxs("div",{className:"z-recap-row z-recap-total",children:[s.jsx("span",{className:"z-recap-label",children:"Total à payer"}),s.jsx("span",{className:"z-recap-value",children:$t(o+se)})]})]}),s.jsx("div",{className:"z-payment-methods",children:s.jsxs("div",{className:"z-payment-method z-payment-method-active",children:[s.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"2",y:"5",width:"20",height:"14",rx:"2"}),s.jsx("line",{x1:"2",y1:"10",x2:"22",y2:"10"})]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Carte bancaire"}),s.jsx("small",{children:"Paiement sécurisé Stripe · 3D Secure"})]}),s.jsx("span",{className:"z-payment-radio"})]})}),s.jsxs("div",{className:"z-step-actions",children:[s.jsx("button",{className:"z-btn-ghost-dark",onClick:()=>E("time"),disabled:_,children:"Retour"}),s.jsx("button",{className:"z-btn z-btn-primary z-btn-pay",onClick:dt,disabled:_,children:_?s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"z-spinner"}),"Connexion sécurisée..."]}):s.jsxs(s.Fragment,{children:["Payer ",$t(o+se),s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",children:s.jsx("path",{d:"M5 12l5 5L20 7"})})]})})]})]},"payment"),g==="success"&&s.jsxs(F.div,{initial:{opacity:0,scale:.92},animate:{opacity:1,scale:1},exit:{opacity:0},transition:{duration:.5,ease:[.22,1,.36,1]},className:"z-step z-success",children:[s.jsx(F.div,{className:"z-success-icon",initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},transition:{delay:.2,type:"spring",stiffness:200,damping:18},children:s.jsx("svg",{width:"44",height:"44",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:s.jsx("path",{d:"M20 6L9 17l-5-5"})})}),s.jsx("h3",{className:"z-success-title",children:"Commande confirmée !"}),s.jsxs("p",{className:"z-success-sub",children:["Merci ",M.firstName,". Votre commande"," ",s.jsx("strong",{children:Q})," est dans le four. On arrive chez vous vers ",s.jsx("strong",{children:O==null?void 0:O.label}),"."]}),s.jsxs("div",{className:"z-success-detail",children:[s.jsxs("div",{children:[s.jsx("span",{children:"Suivi en temps réel"}),s.jsx("strong",{children:"Sur votre téléphone"})]}),s.jsxs("div",{children:[s.jsx("span",{children:"Paiement"}),s.jsxs("strong",{children:["Encaissé · ",$t(o+se)]})]})]}),s.jsx("p",{className:"z-success-note",children:"Cette démo s'arrête ici — aucune commande n'a été passée et aucun paiement n'a été débité."}),s.jsx("button",{className:"z-btn z-btn-primary",onClick:_e,children:"Refaire un test"})]},"success")]})})]}),s.jsx("style",{children:`
        .z-order {
          padding: 100px 0 120px;
          background: linear-gradient(180deg, var(--z-cream) 0%, var(--z-cream-warm) 100%);
          position: relative;
        }
        .z-order-head {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 56px;
        }
        .z-order-title {
          font-family: var(--z-font-display);
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.025em;
          margin: 20px 0 20px;
          color: var(--z-black);
        }
        .z-order-title em {
          font-style: italic;
          color: var(--z-red);
        }
        .z-order-intro {
          font-size: 1.05rem;
          color: var(--z-text-muted);
          line-height: 1.6;
        }

        .z-stepper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          margin: 0 auto 32px;
          max-width: 720px;
          padding: 0 8px;
          overflow-x: auto;
        }
        .z-stepper-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
        }
        .z-stepper-num {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: var(--z-white);
          color: var(--z-text-muted);
          font-weight: 700;
          font-size: 0.92rem;
          border: 2px solid var(--z-border);
          transition: all 0.3s var(--z-ease);
        }
        .z-stepper-item[data-active="true"] .z-stepper-num {
          background: var(--z-red);
          color: var(--z-white);
          border-color: var(--z-red);
          box-shadow: 0 6px 18px -4px rgba(214, 40, 40, 0.45);
        }
        .z-stepper-item[data-done="true"] .z-stepper-num {
          background: var(--z-success);
          color: var(--z-white);
          border-color: var(--z-success);
        }
        .z-stepper-label {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--z-text-muted);
        }
        .z-stepper-item[data-active="true"] .z-stepper-label {
          color: var(--z-text);
        }
        .z-stepper-line {
          flex: 1;
          max-width: 60px;
          height: 2px;
          background: var(--z-border);
          margin: 0 8px;
          transition: background 0.3s;
        }
        .z-stepper-line[data-done="true"] {
          background: var(--z-success);
        }

        .z-order-box {
          max-width: 760px;
          margin: 0 auto;
          background: var(--z-white);
          border-radius: 24px;
          padding: 36px 28px;
          box-shadow: 0 1px 3px rgba(14, 61, 36, 0.06), 0 25px 60px -20px rgba(14, 61, 36, 0.15);
          min-height: 480px;
          position: relative;
        }
        @media (min-width: 720px) {
          .z-order-box { padding: 48px 56px; }
        }

        .z-step-title {
          font-family: var(--z-font-display);
          font-size: clamp(1.6rem, 3vw, 2rem);
          font-weight: 700;
          letter-spacing: -0.015em;
          margin: 0 0 28px;
          color: var(--z-black);
        }
        .z-step-hint {
          font-size: 0.92rem;
          color: var(--z-text-muted);
          margin: -16px 0 24px;
          line-height: 1.5;
        }
        .z-step-cta {
          width: 100%;
          margin-top: 24px;
        }
        .z-step-actions {
          display: flex;
          gap: 12px;
          margin-top: 32px;
          flex-wrap: wrap-reverse;
        }
        .z-step-actions .z-btn,
        .z-step-actions .z-btn-ghost-dark {
          flex: 1;
          min-width: 140px;
        }
        .z-btn-ghost-dark {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 16px 28px;
          border-radius: 999px;
          background: transparent;
          border: 1.5px solid var(--z-border);
          color: var(--z-text);
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        .z-btn-ghost-dark:hover:not(:disabled) {
          background: var(--z-cream-warm);
          border-color: var(--z-text-muted);
        }
        .z-btn[disabled],
        .z-btn-ghost-dark[disabled] {
          opacity: 0.45;
          cursor: not-allowed;
        }

        /* Empty cart */
        .z-empty {
          text-align: center;
          padding: 60px 20px;
          color: var(--z-text-muted);
        }
        .z-empty svg { margin-bottom: 14px; color: var(--z-border); }
        .z-empty p { margin: 0 0 24px; font-size: 1rem; }

        /* Cart */
        .z-cart-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .z-cart-item {
          display: grid;
          grid-template-columns: 56px 1fr auto auto auto;
          gap: 12px;
          align-items: center;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--z-border);
        }
        .z-cart-item:last-child { border-bottom: none; }
        .z-cart-thumb {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          object-fit: cover;
          background: var(--z-cream-warm);
        }
        .z-cart-info {
          min-width: 0;
        }
        .z-cart-name {
          font-family: var(--z-font-display);
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--z-black);
        }
        .z-cart-size {
          font-size: 0.78rem;
          color: var(--z-text-muted);
        }
        .z-cart-mods {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          margin-top: 6px;
        }
        .z-cart-mod {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          padding: 2px 7px;
          border-radius: 999px;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.01em;
        }
        .z-cart-mod-out {
          background: rgba(220, 38, 38, 0.1);
          color: var(--z-danger);
        }
        .z-cart-mod-in {
          background: rgba(46, 139, 87, 0.12);
          color: var(--z-success);
        }
        .z-cart-mod-base {
          background: rgba(201, 162, 75, 0.18);
          color: #8B6F2D;
        }
        .z-cart-qty {
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--z-cream-warm);
          padding: 4px 6px;
          border-radius: 999px;
        }
        .z-cart-qty button {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--z-white);
          color: var(--z-text);
          font-size: 1rem;
          font-weight: 700;
          display: grid;
          place-items: center;
        }
        .z-cart-qty button:hover {
          background: var(--z-red);
          color: var(--z-white);
        }
        .z-cart-qty span {
          min-width: 18px;
          text-align: center;
          font-weight: 600;
        }
        .z-cart-price {
          font-family: var(--z-font-display);
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--z-text);
          min-width: 70px;
          text-align: right;
        }
        .z-cart-remove {
          width: 28px;
          height: 28px;
          color: var(--z-text-muted);
          display: grid;
          place-items: center;
          border-radius: 50%;
        }
        .z-cart-remove:hover {
          background: rgba(220, 38, 38, 0.1);
          color: var(--z-red);
        }
        .z-cart-totals {
          margin-top: 28px;
          padding-top: 20px;
          border-top: 1.5px solid var(--z-border);
        }
        .z-cart-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          font-size: 0.95rem;
          color: var(--z-text-muted);
          padding: 6px 0;
        }
        .z-cart-row.z-cart-total {
          font-family: var(--z-font-display);
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--z-black);
          padding-top: 14px;
          margin-top: 6px;
          border-top: 1px dashed var(--z-border);
        }

        /* Form */
        .z-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }
        .z-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
          position: relative;
        }
        .z-field > span {
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--z-text-muted);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .z-field-loading {
          font-style: italic;
          font-weight: 400;
          color: var(--z-text-muted);
          font-size: 0.72rem;
        }
        .z-field input {
          width: 100%;
          padding: 14px 16px;
          font-family: var(--z-font-body);
          font-size: 1rem;
          border-radius: 12px;
          border: 1.5px solid var(--z-border);
          background: var(--z-cream);
          color: var(--z-text);
          transition: border 0.2s, background 0.2s;
        }
        .z-field input:focus {
          outline: none;
          border-color: var(--z-green);
          background: var(--z-white);
        }
        .z-autocomplete {
          list-style: none;
          padding: 6px;
          margin: 6px 0 0;
          background: var(--z-white);
          border: 1px solid var(--z-border);
          border-radius: 12px;
          box-shadow: 0 12px 30px -12px rgba(14, 61, 36, 0.18);
          max-height: 240px;
          overflow-y: auto;
        }
        .z-autocomplete li button {
          width: 100%;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 8px;
          background: transparent;
          text-align: left;
          color: var(--z-text);
          cursor: pointer;
        }
        .z-autocomplete li button:hover {
          background: var(--z-cream-warm);
        }
        .z-autocomplete li button svg {
          color: var(--z-red);
          margin-top: 2px;
          flex-shrink: 0;
        }
        .z-autocomplete li button strong {
          display: block;
          font-size: 0.92rem;
          font-weight: 600;
          line-height: 1.3;
        }
        .z-autocomplete li button span {
          font-size: 0.78rem;
          color: var(--z-text-muted);
        }
        .z-address-confirmed {
          margin-top: 8px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 14px;
          background: rgba(46, 139, 87, 0.08);
          border: 1px solid rgba(46, 139, 87, 0.25);
          border-radius: 10px;
          color: var(--z-success);
        }
        .z-address-confirmed strong {
          display: block;
          color: var(--z-text);
          font-size: 0.92rem;
          font-weight: 600;
          line-height: 1.35;
        }
        .z-address-confirmed small {
          display: block;
          font-size: 0.74rem;
          color: var(--z-text-muted);
          margin-top: 3px;
        }

        /* Slots */
        .z-slots {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
          gap: 10px;
        }
        .z-slot {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 14px 12px;
          border-radius: 14px;
          background: var(--z-cream-warm);
          border: 1.5px solid transparent;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .z-slot:hover {
          background: var(--z-cream);
          border-color: var(--z-green);
        }
        .z-slot[data-active="true"] {
          background: var(--z-green);
          color: var(--z-white);
          border-color: var(--z-green);
          transform: translateY(-2px);
          box-shadow: 0 10px 24px -6px rgba(14, 61, 36, 0.4);
        }
        .z-slot-time {
          font-family: var(--z-font-display);
          font-size: 1.2rem;
          font-weight: 700;
        }
        .z-slot-eta {
          font-size: 0.72rem;
          opacity: 0.7;
          letter-spacing: 0.04em;
        }

        /* Recap */
        .z-recap {
          background: var(--z-cream);
          border-radius: 16px;
          padding: 22px 24px;
          margin-bottom: 24px;
        }
        .z-recap-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding: 8px 0;
          gap: 14px;
        }
        .z-recap-label {
          font-size: 0.84rem;
          color: var(--z-text-muted);
          flex-shrink: 0;
        }
        .z-recap-value {
          font-weight: 600;
          color: var(--z-text);
          text-align: right;
          font-size: 0.92rem;
        }
        .z-recap hr {
          border: none;
          height: 1px;
          background: var(--z-border);
          margin: 10px 0;
        }
        .z-recap-total .z-recap-label {
          font-size: 1rem;
          color: var(--z-black);
          font-weight: 600;
        }
        .z-recap-total .z-recap-value {
          font-family: var(--z-font-display);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--z-black);
        }
        .z-payment-methods {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .z-payment-method {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 18px;
          background: var(--z-cream);
          border: 1.5px solid var(--z-border);
          border-radius: 14px;
          color: var(--z-text);
        }
        .z-payment-method-active {
          border-color: var(--z-green);
          background: rgba(14, 61, 36, 0.04);
        }
        .z-payment-method strong {
          display: block;
          font-weight: 600;
          font-size: 0.95rem;
        }
        .z-payment-method small {
          display: block;
          font-size: 0.74rem;
          color: var(--z-text-muted);
        }
        .z-payment-method > div {
          flex: 1;
        }
        .z-payment-radio {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 2px solid var(--z-green);
          background:
            radial-gradient(circle at center, var(--z-green) 0 6px, transparent 6.5px);
        }
        .z-btn-pay {
          min-width: 180px;
        }
        .z-spinner {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: var(--z-white);
          animation: z-spin 0.6s linear infinite;
        }
        @keyframes z-spin {
          to { transform: rotate(360deg); }
        }

        /* Success */
        .z-success {
          text-align: center;
          padding: 24px 0;
        }
        .z-success-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: var(--z-success);
          color: var(--z-white);
          margin: 0 auto 24px;
          display: grid;
          place-items: center;
          box-shadow: 0 20px 50px -10px rgba(46, 139, 87, 0.5);
        }
        .z-success-title {
          font-family: var(--z-font-display);
          font-size: clamp(1.8rem, 4vw, 2.4rem);
          font-weight: 800;
          color: var(--z-black);
          margin: 0 0 12px;
          letter-spacing: -0.02em;
        }
        .z-success-sub {
          font-size: 1.05rem;
          color: var(--z-text-muted);
          line-height: 1.55;
          margin: 0 0 28px;
        }
        .z-success-sub strong {
          color: var(--z-text);
          font-weight: 700;
        }
        .z-success-detail {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          background: var(--z-cream);
          border-radius: 14px;
          padding: 18px;
          margin-bottom: 20px;
          text-align: left;
        }
        .z-success-detail > div span {
          display: block;
          font-size: 0.7rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--z-text-muted);
          margin-bottom: 4px;
        }
        .z-success-detail > div strong {
          display: block;
          font-size: 0.95rem;
          color: var(--z-text);
        }
        .z-success-note {
          font-size: 0.78rem;
          color: var(--z-text-muted);
          font-style: italic;
          margin: 0 0 20px;
        }

        @media (max-width: 540px) {
          .z-form-grid { grid-template-columns: 1fr; }
          .z-cart-item {
            grid-template-columns: 48px 1fr auto;
            grid-template-rows: auto auto;
            row-gap: 8px;
          }
          .z-cart-qty {
            grid-column: 1 / -1;
            justify-self: start;
          }
          .z-cart-price {
            grid-column: 1 / -1;
            text-align: right;
          }
          .z-cart-remove {
            position: absolute;
            top: 0;
            right: 0;
          }
        }
      `})]})}const Ja=[{id:"ZID-3853",time:"12h25",customer:"Café des Sports",phone:"+33567845512",address:"3 place Jean Jaurès, 31800 Saint-Gaudens",items:8,label:"8 pizzas pour les supporters",total:89.6,paid:"paid",status:"preparing",lat:43.1108,lng:.7239,isNew:!0},{id:"ZID-3852",time:"12h18",customer:"Famille Rocha",phone:"+33625147890",address:"Lieu-dit Mascard, 31800 Saint-Gaudens",items:6,label:"6 pizzas + 6 boissons",total:78.4,paid:"paid",status:"oven",lat:43.1011,lng:.7384},{id:"ZID-3851",time:"12h12",customer:"Thomas V.",phone:"+33612458790",address:"7 rue de la Mairie, 31800 Saint-Gaudens",items:2,label:"1 O'Tchez Normale · 1 Tiramisu",total:14.2,paid:"failed",status:"cancelled",lat:43.1102,lng:.7252},{id:"ZID-3850",time:"12h08",customer:"Inès K.",phone:"+33677125683",address:"14 av. Maréchal Joffre, 31800 Saint-Gaudens",items:3,label:"3 pizzas mer & fromages",total:31.2,paid:"paid",status:"delivered",lat:43.1064,lng:.7311},{id:"ZID-3849",time:"12h02",customer:"Marc D.",phone:"+33634785612",address:"28 rue de la République, 31800 Saint-Gaudens",items:2,label:"1 Pizza Familiale · 1 Margarita",total:47.9,paid:"pending",status:"preparing",lat:43.1088,lng:.7245},{id:"ZID-3848",time:"11h53",customer:"Karim B.",phone:"+33689412375",address:"5 rue Thiers, 31800 Saint-Gaudens",items:2,label:"2 Kebab Normale",total:22.3,paid:"paid",status:"delivery",lat:43.1092,lng:.7268},{id:"ZID-3847",time:"11h47",customer:"Sophie Martin",phone:"+33655842163",address:"12 av. de Boulogne, 31800 Saint-Gaudens",items:4,label:"4 pizzas familles",total:36.5,paid:"paid",status:"delivered",lat:43.1124,lng:.7193}],$o={paid:{label:"Payé",color:"success",icon:"✓"},pending:{label:"En attente",color:"warning",icon:"⏱"},failed:{label:"Échec CB",color:"danger",icon:"!"}},Gh={preparing:{label:"En préparation",dot:"orange"},oven:{label:"Au four",dot:"red"},delivery:{label:"En livraison",dot:"blue"},delivered:{label:"Livrée",dot:"green"},cancelled:{label:"Annulée",dot:"gray"}},ns=r=>r.toFixed(2).replace(".",",")+" €";function Yh(r,o){return`https://waze.com/ul?ll=${r},${o}&navigate=yes`}function Mv(r,o,d){return`https://www.google.com/maps/dir/?api=1&destination=${r},${o}&destination_place_id=${encodeURIComponent(d)}`}function Tv(){const[r,o]=C.useState(null),d={count:Ja.length,paid:Ja.filter(u=>u.paid==="paid").length,pending:Ja.filter(u=>u.paid==="pending").length,failed:Ja.filter(u=>u.paid==="failed").length,revenuePaid:Ja.filter(u=>u.paid==="paid").reduce((u,h)=>u+h.total,0),revenuePending:Ja.filter(u=>u.paid==="pending").reduce((u,h)=>u+h.total,0)};return s.jsxs("section",{className:"z-admin",id:"admin",children:[s.jsxs("div",{className:"z-container",children:[s.jsxs(F.div,{className:"z-admin-head",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6},children:[s.jsxs("span",{className:"z-eyebrow",style:{color:"rgba(255, 255, 255, 0.7)"},children:[s.jsx("span",{style:{background:"rgba(255,255,255,0.7)",width:28,height:1.5}}),"Côté cuisine · Vue admin"]}),s.jsxs("h2",{className:"z-admin-title",children:["Toutes les commandes en ",s.jsx("em",{children:"un coup d'œil"}),"."]}),s.jsx("p",{className:"z-admin-intro",children:"Vous voyez en temps réel qui a payé, qui attend, et qui livrer ensuite. Un clic ouvre l'itinéraire dans Waze ou Google Maps — fini le copier-coller des adresses."})]}),s.jsxs(F.div,{className:"z-admin-frame",initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.7,ease:[.22,1,.36,1]},children:[s.jsxs("div",{className:"z-admin-topbar",children:[s.jsxs("div",{className:"z-admin-brand",children:[s.jsx("span",{className:"z-admin-dot"}),s.jsx("span",{children:"Vorace · Tableau de bord"})]}),s.jsx("div",{className:"z-admin-meta",children:s.jsxs("span",{className:"z-admin-live",children:[s.jsx("span",{className:"z-pulse"})," En direct · Samedi 12h30"]})})]}),s.jsxs("div",{className:"z-kpis",children:[s.jsxs("div",{className:"z-kpi",children:[s.jsx("span",{className:"z-kpi-label",children:"Commandes du jour"}),s.jsx("strong",{className:"z-kpi-value",children:d.count}),s.jsxs("span",{className:"z-kpi-sub",children:[d.paid," payées · ",d.pending," en attente · ",d.failed," échec"]})]}),s.jsxs("div",{className:"z-kpi z-kpi-revenue",children:[s.jsx("span",{className:"z-kpi-label",children:"CA encaissé"}),s.jsx("strong",{className:"z-kpi-value",children:ns(d.revenuePaid)}),s.jsxs("span",{className:"z-kpi-sub z-kpi-positive",children:["+ ",ns(d.revenuePending)," en attente paiement"]})]}),s.jsxs("div",{className:"z-kpi",children:[s.jsx("span",{className:"z-kpi-label",children:"Temps moyen livraison"}),s.jsx("strong",{className:"z-kpi-value",children:"28 min"}),s.jsx("span",{className:"z-kpi-sub",children:"Objectif < 30 min · OK"})]}),s.jsxs("div",{className:"z-kpi",children:[s.jsx("span",{className:"z-kpi-label",children:"À l'instant"}),s.jsx("strong",{className:"z-kpi-value",children:"2 au four"}),s.jsx("span",{className:"z-kpi-sub",children:"1 en livraison · 1 en prépa"})]})]}),s.jsxs("div",{className:"z-orders-table",children:[s.jsxs("div",{className:"z-orders-table-head",children:[s.jsx("span",{children:"Commande"}),s.jsx("span",{children:"Client"}),s.jsx("span",{children:"Adresse"}),s.jsx("span",{children:"Total"}),s.jsx("span",{children:"Paiement"}),s.jsx("span",{children:"Statut"}),s.jsx("span",{className:"z-orders-actions-col",children:"Actions"})]}),s.jsx(Ot,{children:Ja.map((u,h)=>s.jsxs(F.div,{className:"z-order-row","data-new":u.isNew,initial:{opacity:0,x:-10},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{delay:h*.05,duration:.4},onClick:()=>o(u),children:[s.jsxs("div",{className:"z-order-id",children:[s.jsx("strong",{children:u.id}),s.jsx("span",{children:u.time})]}),s.jsxs("div",{className:"z-order-client",children:[s.jsx("strong",{children:u.customer}),s.jsx("span",{children:u.phone.replace("+33","0").replace(/(\d{2})(?=\d)/g,"$1 ").trim()})]}),s.jsx("div",{className:"z-order-address",children:u.address}),s.jsx("div",{className:"z-order-total",children:ns(u.total)}),s.jsx("div",{className:"z-order-paid",children:s.jsxs("span",{className:"z-pill","data-color":$o[u.paid].color,children:[s.jsx("span",{className:"z-pill-icon",children:$o[u.paid].icon}),$o[u.paid].label]})}),s.jsx("div",{className:"z-order-status",children:s.jsxs("span",{className:"z-status",children:[s.jsx("span",{className:"z-status-dot","data-color":Gh[u.status].dot}),Gh[u.status].label]})}),s.jsxs("div",{className:"z-order-actions",onClick:m=>m.stopPropagation(),children:[s.jsxs("a",{href:Yh(u.lat,u.lng),target:"_blank",rel:"noopener noreferrer",className:"z-action z-action-primary",title:"Ouvrir l'itinéraire dans Waze",children:[s.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),s.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"Waze"]}),s.jsx("a",{href:`tel:${u.phone}`,className:"z-action",title:"Appeler le client",children:s.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",children:s.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"})})})]})]},u.id))})]}),s.jsxs("div",{className:"z-admin-footer",children:[s.jsxs("div",{className:"z-admin-feature",children:[s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[s.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),s.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Itinéraire Waze en 1 clic"}),s.jsx("span",{children:"Plus de copier-coller des adresses"})]})]}),s.jsxs("div",{className:"z-admin-feature",children:[s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:s.jsx("path",{d:"M20 6L9 17l-5-5"})}),s.jsxs("div",{children:[s.jsx("strong",{children:"Statut paiement instantané"}),s.jsx("span",{children:'Plus de doute "il a payé ou pas ?"'})]})]}),s.jsxs("div",{className:"z-admin-feature",children:[s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[s.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),s.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"9"}),s.jsx("line",{x1:"9",y1:"13",x2:"15",y2:"13"})]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Export comptable mensuel"}),s.jsx("span",{children:"CSV exportable URSSAF en 1 clic"})]})]})]})]})]}),s.jsx(Ot,{children:r&&s.jsx(F.div,{className:"z-modal-backdrop",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>o(null),children:s.jsxs(F.div,{className:"z-modal",initial:{y:40,opacity:0},animate:{y:0,opacity:1},exit:{y:40,opacity:0},transition:{duration:.3,ease:[.22,1,.36,1]},onClick:u=>u.stopPropagation(),children:[s.jsx("button",{className:"z-modal-close",onClick:()=>o(null),"aria-label":"Fermer",children:s.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:s.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})}),s.jsx("span",{className:"z-modal-eyebrow",children:"Détail commande"}),s.jsx("h3",{className:"z-modal-title",children:r.id}),s.jsxs("p",{className:"z-modal-time",children:["Passée à ",r.time]}),s.jsxs("div",{className:"z-modal-section",children:[s.jsx("span",{className:"z-modal-label",children:"Client"}),s.jsxs("p",{children:[s.jsx("strong",{children:r.customer}),s.jsx("br",{}),r.phone.replace("+33","0").replace(/(\d{2})(?=\d)/g,"$1 ").trim()]})]}),s.jsxs("div",{className:"z-modal-section",children:[s.jsx("span",{className:"z-modal-label",children:"Livraison"}),s.jsx("p",{children:r.address}),s.jsxs("small",{style:{color:"var(--z-text-muted)",display:"block",marginTop:4,fontSize:"0.78rem"},children:["GPS · ",r.lat,", ",r.lng]})]}),s.jsxs("div",{className:"z-modal-section",children:[s.jsx("span",{className:"z-modal-label",children:"Commande"}),s.jsx("p",{children:r.label}),s.jsx("p",{style:{fontFamily:"var(--z-font-display)",fontSize:"1.6rem",fontWeight:800,color:"var(--z-black)",marginTop:6},children:ns(r.total)})]}),s.jsxs("div",{className:"z-modal-actions",children:[s.jsxs("a",{href:Yh(r.lat,r.lng),target:"_blank",rel:"noopener noreferrer",className:"z-btn z-btn-primary",children:[s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",children:[s.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),s.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"Ouvrir dans Waze"]}),s.jsx("a",{href:Mv(r.lat,r.lng,r.address),target:"_blank",rel:"noopener noreferrer",className:"z-btn-ghost-dark",children:"Google Maps"})]})]})})}),s.jsx("style",{children:`
        .z-admin {
          padding: 100px 0 120px;
          background: linear-gradient(180deg, var(--z-green-dark) 0%, var(--z-black) 100%);
          color: var(--z-white);
          position: relative;
        }
        .z-admin::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 20%, rgba(214, 40, 40, 0.18), transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(201, 162, 75, 0.12), transparent 40%);
          pointer-events: none;
        }
        .z-admin > * { position: relative; z-index: 1; }

        .z-admin-head {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 56px;
        }
        .z-admin-title {
          font-family: var(--z-font-display);
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.025em;
          color: var(--z-white);
          margin: 20px 0 20px;
        }
        .z-admin-title em {
          font-style: italic;
          color: #FFB84D;
          font-weight: 900;
        }
        .z-admin-intro {
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }

        .z-admin-frame {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          overflow: hidden;
          backdrop-filter: blur(20px);
          box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.5);
        }

        .z-admin-topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 24px;
          background: rgba(0, 0, 0, 0.4);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .z-admin-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.92rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.85);
        }
        .z-admin-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--z-red);
        }
        .z-admin-meta {
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.6);
        }
        .z-admin-live {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .z-pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #2EFF8C;
          box-shadow: 0 0 0 0 rgba(46, 255, 140, 0.7);
          animation: z-pulse 2s infinite;
        }
        @keyframes z-pulse {
          0% { box-shadow: 0 0 0 0 rgba(46, 255, 140, 0.7); }
          70% { box-shadow: 0 0 0 12px rgba(46, 255, 140, 0); }
          100% { box-shadow: 0 0 0 0 rgba(46, 255, 140, 0); }
        }

        .z-kpis {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1px;
          background: rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .z-kpi {
          padding: 22px 24px;
          background: rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .z-kpi-label {
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.5);
        }
        .z-kpi-value {
          font-family: var(--z-font-display);
          font-size: 2rem;
          font-weight: 800;
          color: var(--z-white);
          letter-spacing: -0.02em;
          line-height: 1;
        }
        .z-kpi-revenue .z-kpi-value {
          color: #FFB84D;
        }
        .z-kpi-sub {
          font-size: 0.74rem;
          color: rgba(255, 255, 255, 0.55);
        }
        .z-kpi-positive {
          color: rgba(46, 255, 140, 0.85);
        }

        .z-orders-table {
          padding: 0;
        }
        .z-orders-table-head,
        .z-order-row {
          display: grid;
          grid-template-columns: 110px 140px minmax(180px, 1.4fr) 90px 120px 140px 130px;
          gap: 16px;
          align-items: center;
          padding: 14px 24px;
          font-size: 0.88rem;
        }
        .z-orders-table-head {
          background: rgba(0, 0, 0, 0.4);
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 600;
          padding: 14px 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .z-order-row {
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          cursor: pointer;
          transition: background 0.2s;
        }
        .z-order-row:hover {
          background: rgba(255, 255, 255, 0.04);
        }
        .z-order-row[data-new="true"] {
          background: rgba(214, 40, 40, 0.1);
          border-left: 3px solid var(--z-red);
          padding-left: 21px;
        }
        .z-order-id strong {
          display: block;
          font-weight: 700;
          color: var(--z-white);
        }
        .z-order-id span {
          font-size: 0.74rem;
          color: rgba(255, 255, 255, 0.5);
        }
        .z-order-client strong {
          display: block;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 600;
        }
        .z-order-client span {
          font-size: 0.74rem;
          color: rgba(255, 255, 255, 0.5);
        }
        .z-order-address {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.35;
        }
        .z-order-total {
          font-family: var(--z-font-display);
          font-weight: 700;
          color: var(--z-white);
        }

        .z-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: 999px;
          font-size: 0.74rem;
          font-weight: 600;
        }
        .z-pill[data-color="success"] {
          background: rgba(46, 255, 140, 0.15);
          color: #5EFF9F;
          border: 1px solid rgba(46, 255, 140, 0.3);
        }
        .z-pill[data-color="warning"] {
          background: rgba(217, 119, 6, 0.18);
          color: #FFB84D;
          border: 1px solid rgba(217, 119, 6, 0.35);
        }
        .z-pill[data-color="danger"] {
          background: rgba(220, 38, 38, 0.18);
          color: #FF8585;
          border: 1px solid rgba(220, 38, 38, 0.35);
        }
        .z-pill-icon {
          width: 12px;
          height: 12px;
          display: grid;
          place-items: center;
          font-size: 0.7rem;
          font-weight: 800;
        }

        .z-status {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.82rem;
        }
        .z-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .z-status-dot[data-color="orange"] { background: #FFB84D; }
        .z-status-dot[data-color="red"]    { background: #FF6B6B; }
        .z-status-dot[data-color="blue"]   { background: #6BB6FF; }
        .z-status-dot[data-color="green"]  { background: #5EFF9F; }
        .z-status-dot[data-color="gray"]   { background: rgba(255,255,255,0.3); }

        .z-orders-actions-col { text-align: right; }
        .z-order-actions {
          display: flex;
          gap: 6px;
          justify-content: flex-end;
        }
        .z-action {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 6px 12px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.74rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
        }
        .z-action:hover {
          background: rgba(255, 255, 255, 0.18);
          color: var(--z-white);
        }
        .z-action-primary {
          background: #5C8AFB;
          color: var(--z-white);
        }
        .z-action-primary:hover {
          background: #4A77E5;
        }

        .z-admin-footer {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 18px;
          padding: 24px;
          background: rgba(0, 0, 0, 0.35);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .z-admin-feature {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: rgba(255, 255, 255, 0.85);
        }
        .z-admin-feature svg {
          color: #FFB84D;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .z-admin-feature strong {
          display: block;
          color: var(--z-white);
          font-size: 0.92rem;
          margin-bottom: 2px;
        }
        .z-admin-feature span {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.55);
        }

        /* Mobile : table → cards */
        @media (max-width: 980px) {
          .z-orders-table-head { display: none; }
          .z-order-row {
            grid-template-columns: 1fr;
            gap: 6px;
            padding: 18px 18px 16px;
            position: relative;
          }
          .z-order-row[data-new="true"] {
            padding-left: 15px;
          }
          .z-order-id, .z-order-client, .z-order-address, .z-order-total,
          .z-order-paid, .z-order-status, .z-order-actions {
            display: flex;
            justify-content: flex-start;
          }
          .z-order-id {
            justify-content: space-between;
          }
          .z-order-id::before { content: ''; }
          .z-order-total {
            order: 3;
            justify-content: flex-end;
            font-size: 1.1rem;
          }
          .z-order-paid { order: 4; }
          .z-order-status { order: 5; }
          .z-order-actions {
            order: 6;
            justify-content: stretch;
            gap: 8px;
            margin-top: 6px;
          }
          .z-order-actions .z-action {
            flex: 1;
            justify-content: center;
          }
        }

        /* Modal */
        .z-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 300;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }
        .z-modal {
          background: var(--z-white);
          color: var(--z-text);
          border-radius: 24px;
          padding: 32px;
          max-width: 460px;
          width: 100%;
          position: relative;
        }
        .z-modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--z-cream-warm);
          color: var(--z-text);
          display: grid;
          place-items: center;
        }
        .z-modal-eyebrow {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--z-red);
        }
        .z-modal-title {
          font-family: var(--z-font-display);
          font-size: 2rem;
          font-weight: 800;
          margin: 8px 0 4px;
          color: var(--z-black);
        }
        .z-modal-time {
          font-size: 0.88rem;
          color: var(--z-text-muted);
          margin: 0 0 24px;
        }
        .z-modal-section {
          padding: 14px 0;
          border-top: 1px solid var(--z-border);
        }
        .z-modal-section:first-of-type { border-top: none; padding-top: 0; }
        .z-modal-label {
          display: block;
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--z-text-muted);
          margin-bottom: 6px;
        }
        .z-modal-section p {
          margin: 0;
          line-height: 1.4;
          color: var(--z-text);
        }
        .z-modal-actions {
          display: flex;
          gap: 10px;
          margin-top: 24px;
        }
        .z-modal-actions .z-btn,
        .z-modal-actions .z-btn-ghost-dark {
          flex: 1;
        }
      `})]})}const Cv="vorace",Av="pizza2026";function Dv(){const[r,o]=C.useState("closed"),[d,u]=C.useState(""),[h,m]=C.useState(""),[g,E]=C.useState(""),M=C.useRef(null);C.useEffect(()=>{const U=()=>{r!=="admin"&&(E(""),u(""),m(""),o("login"))};return window.addEventListener("vorace:open-admin-gate",U),()=>window.removeEventListener("vorace:open-admin-gate",U)},[r]),C.useEffect(()=>{r==="login"&&M.current&&setTimeout(()=>{var U;return(U=M.current)==null?void 0:U.focus()},60)},[r]),C.useEffect(()=>{const U=w=>{w.key==="Escape"&&(r==="login"||r==="admin")&&o("closed")};return document.addEventListener("keydown",U),()=>document.removeEventListener("keydown",U)},[r]),C.useEffect(()=>(document.body.style.overflow=r==="closed"?"":"hidden",document.body.dataset.adminStage=r,()=>{document.body.style.overflow="",delete document.body.dataset.adminStage}),[r]);function B(U){U.preventDefault(),d.trim().toLowerCase()===Cv&&h===Av?(E(""),o("admin")):(E("Identifiants incorrects"),m(""))}return s.jsxs(s.Fragment,{children:[s.jsx(Ot,{children:r==="login"&&s.jsx(F.div,{className:"z-gate-backdrop","data-lenis-prevent":!0,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.25},onClick:()=>o("closed"),children:s.jsxs(F.form,{className:"z-gate-card",initial:{y:30,opacity:0,scale:.96},animate:{y:0,opacity:1,scale:1},exit:{y:20,opacity:0,scale:.96},transition:{duration:.35,ease:[.22,1,.36,1]},onClick:U=>U.stopPropagation(),onSubmit:B,children:[s.jsx("button",{type:"button",className:"z-gate-close",onClick:()=>o("closed"),"aria-label":"Fermer",children:s.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:s.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})}),s.jsxs("div",{className:"z-gate-head",children:[s.jsx("span",{className:"z-gate-eyebrow",children:"Accès restreint"}),s.jsx("h3",{className:"z-gate-title",children:"Tableau de bord Vorace"}),s.jsx("p",{className:"z-gate-sub",children:"Réservé à la pizzeria. Connectez-vous pour voir les commandes en direct."})]}),s.jsxs("label",{className:"z-gate-field",children:[s.jsx("span",{children:"Identifiant"}),s.jsx("input",{ref:M,type:"text",value:d,onChange:U=>u(U.target.value),autoComplete:"username",spellCheck:!1,required:!0})]}),s.jsxs("label",{className:"z-gate-field",children:[s.jsx("span",{children:"Mot de passe"}),s.jsx("input",{type:"password",value:h,onChange:U=>m(U.target.value),autoComplete:"current-password",required:!0})]}),g&&s.jsx("p",{className:"z-gate-error",children:g}),s.jsx("button",{type:"submit",className:"z-gate-submit",children:"Se connecter"})]})})}),s.jsx(Ot,{children:r==="admin"&&s.jsxs(F.div,{className:"z-gate-admin","data-lenis-prevent":!0,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.35},children:[s.jsxs("button",{type:"button",className:"z-gate-logout",onClick:()=>o("closed"),"aria-label":"Quitter le tableau de bord",children:[s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",children:[s.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),s.jsx("polyline",{points:"16 17 21 12 16 7"}),s.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),"Quitter"]}),s.jsx(Tv,{})]})}),s.jsx("style",{children:`
        .z-gate-backdrop {
          position: fixed;
          inset: 0;
          z-index: 400;
          background: rgba(8, 18, 14, 0.72);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }
        body:not([data-admin-stage="login"]) .z-gate-backdrop,
        body:not([data-admin-stage="admin"]) .z-gate-admin {
          pointer-events: none !important;
        }
        .z-gate-card {
          position: relative;
          width: 100%;
          max-width: 420px;
          background: var(--z-white);
          color: var(--z-text);
          border-radius: 22px;
          padding: 36px 32px 28px;
          box-shadow: 0 30px 80px -20px rgba(0,0,0,0.55);
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .z-gate-close {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--z-cream-warm, #f3ede3);
          color: var(--z-text);
          display: grid;
          place-items: center;
          border: none;
          cursor: pointer;
        }
        .z-gate-head { margin-bottom: 6px; }
        .z-gate-eyebrow {
          display: inline-block;
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--z-red, #D62828);
          margin-bottom: 6px;
        }
        .z-gate-title {
          font-family: var(--z-font-display);
          font-size: 1.7rem;
          font-weight: 800;
          margin: 0 0 6px;
          color: var(--z-black, #6B1620);
          line-height: 1.1;
        }
        .z-gate-sub {
          font-size: 0.9rem;
          color: var(--z-text-muted, #6B7280);
          margin: 0;
          line-height: 1.45;
        }
        .z-gate-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .z-gate-field span {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--z-text-muted, #6B7280);
          letter-spacing: 0.04em;
        }
        .z-gate-field input {
          padding: 12px 14px;
          border-radius: 12px;
          border: 1.5px solid var(--z-border, #E5E7EB);
          font-size: 1rem;
          font-family: inherit;
          background: #fafafa;
          color: var(--z-text);
          transition: border-color 0.2s, background 0.2s;
        }
        .z-gate-field input:focus {
          outline: none;
          border-color: var(--z-green, #6B1620);
          background: #fff;
        }
        .z-gate-error {
          margin: 0;
          font-size: 0.85rem;
          color: #D62828;
          font-weight: 600;
        }
        .z-gate-submit {
          margin-top: 6px;
          padding: 14px 20px;
          border-radius: 12px;
          background: var(--z-green, #6B1620);
          color: var(--z-white, #fff);
          font-size: 1rem;
          font-weight: 700;
          font-family: inherit;
          border: none;
          cursor: pointer;
          transition: transform 0.15s, background 0.2s;
        }
        .z-gate-submit:hover { background: #4A0E16; }
        .z-gate-submit:active { transform: scale(0.98); }
        .z-gate-hint {
          margin: 4px 0 0;
          text-align: center;
          font-size: 0.74rem;
          color: var(--z-text-muted, #6B7280);
        }
        .z-gate-hint strong { color: var(--z-text); }

        .z-gate-admin {
          position: fixed;
          inset: 0;
          z-index: 350;
          overflow-y: auto;
          background: var(--z-black, #2E0810);
          -webkit-overflow-scrolling: touch;
        }
        .z-gate-logout {
          position: fixed;
          top: 18px;
          right: 18px;
          z-index: 360;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          color: #fff;
          font-size: 0.85rem;
          font-weight: 600;
          font-family: inherit;
          border: 1px solid rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          cursor: pointer;
          transition: background 0.2s;
        }
        .z-gate-logout:hover { background: rgba(255, 255, 255, 0.2); }

        @media (max-width: 520px) {
          .z-gate-card {
            padding: 30px 22px 22px;
            border-radius: 20px;
          }
          .z-gate-title { font-size: 1.5rem; }
        }
      `})]})}const Ov=[{name:"Cocinelle",rating:5,date:"Il y a 6 mois",text:"Une pizzeria absolument incontournable à Saint-Gaudens ! L'accueil est tout simplement exceptionnel grâce à Flo, le propriétaire et pizzaiolo passionné."},{name:"Josiane J.",rating:5,date:"Il y a 4 mois",text:"Voraces, oui, nous l'avons été ; nous avons dévoré nos pizzas, jusqu'a la dernière miette. Un véritable savoir-faire italien, des produits frais et un accueil chaleureux."},{name:"Max Colombel",rating:5,date:"Il y a 3 mois",text:"Un véritable savoir-faire de la pizza ! On voit Flo travailler la pâte devant nous, et le résultat est à la hauteur. À recommander les yeux fermés."},{name:"Martine G.",rating:5,date:"Il y a 2 mois",text:"Pizzaiolo sympa, pizzas excellentes, beaucoup d'imagination pour les créations. Les produits locaux du Comminges font vraiment la différence. On reviendra !"}];function Xh({n:r}){return s.jsx("span",{className:"z-stars","aria-label":`${r} étoiles sur 5`,children:[1,2,3,4,5].map(o=>s.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:o<=r?"#F5B400":"none",stroke:o<=r?"#F5B400":"rgba(0,0,0,0.15)",strokeWidth:"1.5",children:s.jsx("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})},o))})}function kv(){return s.jsxs("section",{className:"z-reviews",id:"avis",children:[s.jsxs("div",{className:"z-container",children:[s.jsxs(F.div,{className:"z-reviews-head",initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6},children:[s.jsxs("div",{className:"z-reviews-score",children:[s.jsxs("div",{className:"z-reviews-google",children:[s.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 48 48","aria-hidden":"true",children:[s.jsx("path",{fill:"#FFC107",d:"M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"}),s.jsx("path",{fill:"#FF3D00",d:"M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"}),s.jsx("path",{fill:"#4CAF50",d:"M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"}),s.jsx("path",{fill:"#1976D2",d:"M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571c.001-.001.002-.001.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"})]}),s.jsx("span",{children:"Google"})]}),s.jsxs("div",{className:"z-reviews-rating",children:[s.jsx(Xh,{n:5}),s.jsx("strong",{children:"4,9 / 5"}),s.jsxs("span",{children:["basé sur ",s.jsx("a",{href:"https://www.google.com/search?q=Vorace+Pizza+Saint-Gaudens",target:"_blank",rel:"noopener noreferrer",children:"87 avis Google"})]})]})]}),s.jsxs("h2",{className:"z-reviews-title",children:["Ce que nos clients ",s.jsx("em",{children:"en disent"}),"."]})]}),s.jsx("div",{className:"z-reviews-grid",children:Ov.map((r,o)=>s.jsxs(F.figure,{className:"z-review",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.5,delay:o*.08,ease:[.22,1,.36,1]},children:[s.jsxs("div",{className:"z-review-head",children:[s.jsx("div",{className:"z-review-avatar",children:r.name.charAt(0)}),s.jsxs("div",{children:[s.jsx("div",{className:"z-review-name",children:r.name}),s.jsx("div",{className:"z-review-date",children:r.date})]}),s.jsx(Xh,{n:r.rating})]}),s.jsxs("blockquote",{className:"z-review-text",children:['"',r.text,'"']})]},r.name+o))}),s.jsx(F.a,{href:"https://www.google.com/search?q=Vorace+Pizza+Saint-Gaudens",target:"_blank",rel:"noopener noreferrer",className:"z-reviews-cta",initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{delay:.4},children:"Lire tous les avis Google →"})]}),s.jsx("style",{children:`
        .z-reviews {
          padding: 100px 0;
          background: var(--z-cream);
        }
        .z-reviews-head {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 56px;
        }
        .z-reviews-score {
          display: inline-flex;
          align-items: center;
          gap: 24px;
          padding: 14px 22px;
          background: var(--z-white);
          border-radius: 999px;
          box-shadow: 0 1px 3px rgba(14, 61, 36, 0.06), 0 12px 30px -12px rgba(14, 61, 36, 0.15);
          margin-bottom: 28px;
        }
        @media (max-width: 480px) {
          .z-reviews-score {
            flex-direction: column;
            gap: 8px;
            padding: 16px 22px;
            border-radius: 20px;
          }
        }
        .z-reviews-google {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          color: var(--z-text);
        }
        .z-reviews-rating {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.92rem;
          color: var(--z-text-muted);
        }
        .z-reviews-rating strong {
          font-family: var(--z-font-display);
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--z-black);
          margin-left: 2px;
        }
        .z-reviews-rating a {
          color: var(--z-text);
          font-weight: 600;
          text-decoration: underline;
          text-decoration-color: var(--z-border);
          text-underline-offset: 3px;
        }
        .z-reviews-rating a:hover { text-decoration-color: var(--z-red); }

        .z-stars {
          display: inline-flex;
          gap: 1px;
          line-height: 0;
        }

        .z-reviews-title {
          font-family: var(--z-font-display);
          font-size: clamp(2rem, 5vw, 3.4rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.025em;
          color: var(--z-black);
          margin: 0;
        }
        .z-reviews-title em {
          font-style: italic;
          color: var(--z-red);
        }

        .z-reviews-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
          margin-bottom: 40px;
        }
        @media (min-width: 720px) {
          .z-reviews-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .z-reviews-grid { grid-template-columns: repeat(4, 1fr); }
        }

        .z-review {
          background: var(--z-white);
          border-radius: 18px;
          padding: 26px 24px;
          box-shadow: 0 1px 3px rgba(14, 61, 36, 0.06);
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .z-review-head {
          display: grid;
          grid-template-columns: 44px 1fr auto;
          gap: 12px;
          align-items: center;
        }
        .z-review-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--z-red) 0%, var(--z-red-dark) 100%);
          color: var(--z-white);
          display: grid;
          place-items: center;
          font-family: var(--z-font-display);
          font-weight: 800;
          font-size: 1.15rem;
        }
        .z-review-name {
          font-weight: 600;
          color: var(--z-black);
          line-height: 1.2;
        }
        .z-review-date {
          font-size: 0.72rem;
          color: var(--z-text-muted);
          margin-top: 2px;
        }
        .z-review-text {
          margin: 0;
          font-size: 0.92rem;
          line-height: 1.55;
          color: var(--z-text);
          font-style: italic;
        }

        .z-reviews-cta {
          display: block;
          text-align: center;
          font-weight: 600;
          color: var(--z-green);
          text-decoration: underline;
          text-decoration-color: var(--z-border);
          text-underline-offset: 4px;
          font-size: 0.95rem;
          transition: color 0.2s;
        }
        .z-reviews-cta:hover {
          color: var(--z-red);
        }
      `})]})}const Bv=[{day:"Lundi",value:"Fermé",closed:!0},{day:"Mardi",value:"18h30 – 21h30"},{day:"Mercredi",value:"18h30 – 21h30"},{day:"Jeudi",value:"18h30 – 21h30"},{day:"Vendredi",value:"18h30 – 21h30"},{day:"Samedi",value:"18h30 – 21h30"},{day:"Dimanche",value:"Fermé",closed:!0}],Uv="https://maps.google.com/maps?q=59+Avenue+de+l%27Isle+31800+Saint-Gaudens&t=&z=16&ie=UTF8&iwloc=&output=embed",Lv="https://www.google.com/maps/dir/?api=1&destination=59+Avenue+de+l%27Isle+31800+Saint-Gaudens";function Hv(){return s.jsxs("section",{className:"z-location",id:"contact",children:[s.jsxs("div",{className:"z-container",children:[s.jsxs(F.div,{className:"z-location-head",initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6},children:[s.jsx("span",{className:"z-eyebrow",children:"Nous trouver"}),s.jsxs("h2",{className:"z-location-title",children:["59 Avenue de l'Isle, ",s.jsx("em",{children:"Saint-Gaudens"}),"."]}),s.jsx("p",{className:"z-location-intro",children:"On vous accueille sur place pour récupérer votre commande à emporter, ou on vient chez vous en livraison."})]}),s.jsxs("div",{className:"z-location-grid",children:[s.jsxs(F.div,{className:"z-location-info",initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.6,ease:[.22,1,.36,1]},children:[s.jsx("img",{src:zv.interieur,alt:"Façade Vorace la nuit avec son enseigne verte allumée",className:"z-location-photo",loading:"lazy"}),s.jsxs("div",{className:"z-location-block",children:[s.jsx("h3",{children:"Coordonnées"}),s.jsxs("p",{children:["59 Avenue de l'Isle",s.jsx("br",{}),"31800 Saint-Gaudens"]}),s.jsxs("div",{className:"z-location-buttons",children:[s.jsxs("a",{href:"tel:+33769917382",className:"z-btn z-btn-primary z-loc-btn",children:[s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",children:s.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"})}),"07 69 91 73 82"]}),s.jsxs("a",{href:Lv,target:"_blank",rel:"noopener noreferrer",className:"z-loc-btn z-loc-btn-ghost",children:[s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),s.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"Itinéraire"]})]}),s.jsxs("p",{className:"z-location-altphone",children:["Ou au ",s.jsx("a",{href:"tel:+33955075782",children:"09 55 07 57 82"})]})]}),s.jsxs("div",{className:"z-location-block",children:[s.jsx("h3",{children:"Horaires"}),s.jsx("ul",{className:"z-hours",children:Bv.map(r=>s.jsxs("li",{children:[s.jsx("span",{children:r.day}),s.jsx("span",{children:r.value})]},r.day))}),s.jsxs("p",{className:"z-hours-note",children:[s.jsx("span",{className:"z-pulse-green"})," Ouvert tous les jours · midi & soir"]})]}),s.jsxs("div",{className:"z-location-block",children:[s.jsx("h3",{children:"Aussi disponible sur"}),s.jsxs("a",{href:"https://www.ubereats.com/fr/store/vorace-stgaudens/QwHC6CbvVIWzlPZwkwQNHQ?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMlNhaW50LUdhdWRlbnMlMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjJDaElKYVpJVUtaRDhxQklSS1AySDZYUjNVajglMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyZ29vZ2xlX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuMTA2ODk1JTJDJTIybG9uZ2l0dWRlJTIyJTNBMC43MjM3NjI5OTk5OTk5OTk5JTdE",target:"_blank",rel:"noopener noreferrer",className:"z-partner z-partner-uber z-partner-solo",children:[s.jsx("strong",{children:"Uber Eats"}),s.jsx("span",{children:"Commission applicable"})]}),s.jsxs("p",{className:"z-partners-note",children:["Pour soutenir notre commerce local et éviter les commissions, privilégiez la ",s.jsx("a",{href:"#commander",children:"commande en direct"}),"."]})]})]}),s.jsx(F.div,{className:"z-location-map-wrap",initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.6,ease:[.22,1,.36,1]},children:s.jsx("iframe",{src:Uv,className:"z-location-map",loading:"lazy",title:"Carte Vorace",referrerPolicy:"no-referrer-when-downgrade"})})]})]}),s.jsx("style",{children:`
        .z-location {
          padding: 100px 0;
          background: var(--z-cream-warm);
        }
        .z-location-head {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 56px;
        }
        .z-location-title {
          font-family: var(--z-font-display);
          font-size: clamp(2rem, 5vw, 3.4rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.025em;
          color: var(--z-black);
          margin: 20px 0 20px;
        }
        .z-location-title em {
          font-style: italic;
          color: var(--z-red);
        }
        .z-location-intro {
          font-size: 1.05rem;
          color: var(--z-text-muted);
          line-height: 1.55;
        }

        .z-location-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        @media (min-width: 1024px) {
          .z-location-grid {
            grid-template-columns: 1.05fr 0.95fr;
            align-items: stretch;
          }
        }

        .z-location-info {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .z-location-photo {
          width: 100%;
          height: 240px;
          object-fit: cover;
          border-radius: 18px;
          box-shadow: 0 20px 50px -15px rgba(14, 61, 36, 0.3);
        }
        @media (min-width: 720px) {
          .z-location-photo { height: 300px; }
        }
        .z-location-block {
          background: var(--z-white);
          border-radius: 18px;
          padding: 24px 26px;
          box-shadow: 0 1px 3px rgba(14, 61, 36, 0.05);
        }
        .z-location-block h3 {
          font-family: var(--z-font-display);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--z-black);
          margin: 0 0 14px;
        }
        .z-location-block p {
          margin: 0 0 14px;
          color: var(--z-text);
          line-height: 1.5;
        }
        .z-location-buttons {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .z-loc-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px !important;
          font-size: 0.92rem !important;
          border-radius: 999px;
          font-weight: 600;
          text-decoration: none;
          flex: 1;
          justify-content: center;
        }
        .z-loc-btn-ghost {
          background: transparent;
          border: 1.5px solid var(--z-border);
          color: var(--z-text);
          transition: all 0.2s;
        }
        .z-loc-btn-ghost:hover {
          border-color: var(--z-green);
          color: var(--z-green);
          background: rgba(14, 61, 36, 0.04);
        }
        .z-location-altphone {
          margin-top: 12px !important;
          font-size: 0.84rem;
          color: var(--z-text-muted);
        }
        .z-location-altphone a {
          color: var(--z-text);
          font-weight: 600;
        }

        .z-hours {
          list-style: none;
          padding: 0;
          margin: 0 0 14px;
        }
        .z-hours li {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 14px;
          padding: 8px 0;
          font-size: 0.88rem;
          border-bottom: 1px dashed var(--z-border);
        }
        .z-hours li:last-child { border-bottom: none; }
        .z-hours li span:first-child {
          font-weight: 600;
          color: var(--z-text);
        }
        .z-hours li span:last-child {
          color: var(--z-text-muted);
          font-variant-numeric: tabular-nums;
        }
        .z-hours-note {
          display: flex !important;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          color: var(--z-success);
          margin: 0 !important;
          font-weight: 600;
        }
        .z-pulse-green {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--z-success);
          box-shadow: 0 0 0 0 rgba(46, 139, 87, 0.6);
          animation: zg-pulse 2s infinite;
        }
        @keyframes zg-pulse {
          0% { box-shadow: 0 0 0 0 rgba(46, 139, 87, 0.6); }
          70% { box-shadow: 0 0 0 10px rgba(46, 139, 87, 0); }
          100% { box-shadow: 0 0 0 0 rgba(46, 139, 87, 0); }
        }

        .z-partner {
          display: block;
          padding: 16px 20px;
          border-radius: 14px;
          text-align: center;
          text-decoration: none;
          transition: all 0.2s;
          margin-bottom: 14px;
        }
        .z-partner-solo {
          padding: 18px 22px;
        }
        .z-partner strong {
          display: block;
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .z-partner span {
          font-size: 0.7rem;
          letter-spacing: 0.04em;
          opacity: 0.85;
        }
        .z-partner-uber {
          background: #000;
          color: #fff;
        }
        .z-partner-uber:hover { background: #1a1a1a; }
        .z-partners-note {
          margin: 0 !important;
          font-size: 0.82rem;
          color: var(--z-text-muted);
          font-style: italic;
        }
        .z-partners-note a {
          color: var(--z-red);
          font-weight: 600;
          font-style: normal;
        }

        .z-location-map-wrap {
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 20px 50px -15px rgba(14, 61, 36, 0.3);
          min-height: 400px;
          background: var(--z-cream);
        }
        @media (min-width: 1024px) {
          .z-location-map-wrap {
            position: sticky;
            top: 100px;
            height: 100%;
            min-height: 100%;
          }
        }
        .z-location-map {
          width: 100%;
          height: 100%;
          min-height: 400px;
          border: 0;
          display: block;
        }
      `})]})}function _v(){return s.jsxs("footer",{className:"z-footer",children:[s.jsxs("div",{className:"z-container",children:[s.jsxs(F.div,{className:"z-footer-grid",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.6},children:[s.jsxs("div",{className:"z-footer-brand",children:[s.jsx(bm,{size:48,inverse:!0}),s.jsx("p",{children:"Votre pizzeria & restaurant artisanal à Saint-Gaudens. Ouvert du mardi au samedi soir."})]}),s.jsxs("div",{className:"z-footer-col",children:[s.jsx("h4",{children:"Carte"}),s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx("a",{href:"#menu",children:"Toutes les pizzas"})}),s.jsx("li",{children:s.jsx("a",{href:"#menu",children:"Calzones"})}),s.jsx("li",{children:s.jsx("a",{href:"#menu",children:"Pizza Familiale"})}),s.jsx("li",{children:s.jsx("a",{href:"#menu",children:"Desserts"})})]})]}),s.jsxs("div",{className:"z-footer-col",children:[s.jsx("h4",{children:"Commander"}),s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx("a",{href:"#commander",children:"En direct (sans commission)"})}),s.jsx("li",{children:s.jsx("a",{href:"https://www.ubereats.com/fr/store/vorace-stgaudens/QwHC6CbvVIWzlPZwkwQNHQ?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMlNhaW50LUdhdWRlbnMlMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjJDaElKYVpJVUtaRDhxQklSS1AySDZYUjNVajglMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyZ29vZ2xlX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuMTA2ODk1JTJDJTIybG9uZ2l0dWRlJTIyJTNBMC43MjM3NjI5OTk5OTk5OTk5JTdE",target:"_blank",rel:"noopener noreferrer",children:"Uber Eats"})}),s.jsx("li",{children:s.jsx("a",{href:"tel:+33769917382",children:"Par téléphone"})})]})]}),s.jsxs("div",{className:"z-footer-col",children:[s.jsx("h4",{children:"Suivez-nous"}),s.jsxs("div",{className:"z-footer-social",children:[s.jsx("a",{href:"https://www.facebook.com/profile.php?id=100089851254633",target:"_blank",rel:"noopener noreferrer","aria-label":"Page Facebook Vorace",children:s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:s.jsx("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})})}),s.jsx("a",{href:"https://www.instagram.com/vorace.pizza/",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram Vorace",children:s.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),s.jsx("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01"})]})}),s.jsx("a",{href:"https://www.google.com/search?q=Vorace+Pizza+Saint-Gaudens",target:"_blank",rel:"noopener noreferrer","aria-label":"Avis Google Vorace",children:s.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:s.jsx("path",{d:"M12 2L9.91 8.26 3 9.27l5 4.87L6.82 21 12 17.77 17.18 21 16 14.14l5-4.87-6.91-1.01L12 2z"})})})]}),s.jsx("p",{className:"z-footer-tagline",children:"@vorace.pizza"})]})]}),s.jsxs("div",{className:"z-footer-bottom",children:[s.jsxs("span",{children:["© ",new Date().getFullYear()," Vorace · 59 Avenue de l'Isle, 31800 Saint-Gaudens"]}),s.jsxs("span",{className:"z-footer-legal",children:[s.jsx("a",{href:"#",children:"Mentions légales"}),s.jsx("span",{children:"·"}),s.jsx("a",{href:"#",children:"Politique de confidentialité"}),s.jsx("span",{children:"·"}),s.jsx("a",{href:"#",children:"CGV"})]})]})]}),s.jsx("style",{children:`
        .z-footer {
          padding: 80px 0 32px;
          background: var(--z-black);
          color: rgba(255, 255, 255, 0.75);
        }
        .z-footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        @media (min-width: 720px) {
          .z-footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr; gap: 32px; }
        }
        .z-footer-brand p {
          font-size: 0.92rem;
          line-height: 1.55;
          margin: 16px 0 0;
          max-width: 320px;
          color: rgba(255, 255, 255, 0.6);
        }
        .z-footer-col h4 {
          font-family: var(--z-font-body);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--z-white);
          margin: 0 0 16px;
        }
        .z-footer-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .z-footer-col li a {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.65);
          transition: color 0.2s;
        }
        .z-footer-col li a:hover {
          color: var(--z-white);
        }
        .z-footer-social {
          display: flex;
          gap: 10px;
          margin-bottom: 12px;
        }
        .z-footer-social a {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.06);
          display: grid;
          place-items: center;
          color: rgba(255, 255, 255, 0.85);
          transition: all 0.2s;
        }
        .z-footer-social a:hover {
          background: var(--z-red);
          color: var(--z-white);
          transform: translateY(-2px);
        }
        .z-footer-tagline {
          font-size: 0.84rem;
          color: rgba(255, 255, 255, 0.55);
          margin: 0;
        }
        .z-footer-bottom {
          padding-top: 28px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 16px;
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.45);
        }
        .z-footer-legal {
          display: inline-flex;
          gap: 8px;
        }
        .z-footer-legal a {
          color: rgba(255, 255, 255, 0.5);
        }
        .z-footer-legal a:hover {
          color: var(--z-white);
        }
      `})]})}const Qh=r=>r.toFixed(2).replace(".",",")+" €";function Rv(){const{count:r,total:o}=nc();return s.jsx(Ot,{children:r>0&&s.jsxs(F.a,{href:"#commander",className:"z-cart-bubble",initial:{y:100,opacity:0},animate:{y:0,opacity:1},exit:{y:100,opacity:0},transition:{duration:.4,ease:[.22,1,.36,1]},whileHover:{scale:1.04},whileTap:{scale:.97},"aria-label":`Voir mon panier (${r} article${r>1?"s":""}, ${Qh(o)})`,children:[s.jsxs("div",{className:"z-cart-bubble-icon",children:[s.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("circle",{cx:"9",cy:"21",r:"1"}),s.jsx("circle",{cx:"20",cy:"21",r:"1"}),s.jsx("path",{d:"M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"})]}),s.jsx(F.span,{className:"z-cart-bubble-count",initial:{scale:0},animate:{scale:1},transition:{type:"spring",stiffness:500,damping:20},children:r},r)]}),s.jsxs("div",{className:"z-cart-bubble-text",children:[s.jsx("span",{className:"z-cart-bubble-label",children:"Mon panier"}),s.jsx("span",{className:"z-cart-bubble-total",children:Qh(o)})]}),s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",children:s.jsx("path",{d:"M9 6l6 6-6 6"})}),s.jsx("style",{children:`
            .z-cart-bubble {
              position: fixed;
              bottom: 24px;
              left: 50%;
              transform: translateX(-50%);
              z-index: 90;
              display: inline-flex;
              align-items: center;
              gap: 14px;
              padding: 14px 22px 14px 14px;
              background: var(--z-black);
              color: var(--z-white);
              border-radius: 999px;
              box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.45);
              text-decoration: none;
              max-width: calc(100% - 32px);
            }
            .z-cart-bubble-icon {
              position: relative;
              width: 42px;
              height: 42px;
              display: grid;
              place-items: center;
              background: var(--z-red);
              border-radius: 50%;
              color: var(--z-white);
              flex-shrink: 0;
            }
            .z-cart-bubble-count {
              position: absolute;
              top: -4px;
              right: -4px;
              min-width: 20px;
              height: 20px;
              padding: 0 5px;
              border-radius: 999px;
              background: var(--z-gold);
              color: var(--z-black);
              font-size: 0.72rem;
              font-weight: 800;
              display: grid;
              place-items: center;
              border: 2px solid var(--z-black);
            }
            .z-cart-bubble-text {
              display: flex;
              flex-direction: column;
              line-height: 1.1;
            }
            .z-cart-bubble-label {
              font-size: 0.7rem;
              opacity: 0.7;
              letter-spacing: 0.06em;
              text-transform: uppercase;
            }
            .z-cart-bubble-total {
              font-family: var(--z-font-display);
              font-size: 1.05rem;
              font-weight: 700;
            }
          `})]})})}function Vv(){const[r,o]=C.useState(!1);return C.useEffect(()=>{const d=()=>o(window.scrollY>600);return d(),window.addEventListener("scroll",d,{passive:!0}),()=>window.removeEventListener("scroll",d)},[]),s.jsx(Ot,{children:r&&s.jsxs(F.a,{href:"https://wa.me/33751148677?text=Bonjour%20Vorace%20Pizza%2C%20je%20souhaite%20commander",target:"_blank",rel:"noopener noreferrer",className:"z-fab-whatsapp","aria-label":"Discuter sur WhatsApp",initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},exit:{scale:0,opacity:0},transition:{type:"spring",stiffness:240,damping:18},whileHover:{scale:1.08},whileTap:{scale:.94},children:[s.jsx("svg",{width:"26",height:"26",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:s.jsx("path",{d:"M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4-.1-.5-.1-.1-.6-1.5-.9-2.1-.2-.5-.5-.4-.6-.4-.2 0-.4 0-.6 0s-.5.1-.7.4c-.3.3-1 1-1 2.4 0 1.4 1 2.7 1.1 2.9.1.2 2 3.1 4.9 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.2-.3-.2-.6-.3zM12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.1 1.6 5.9L0 24l6.3-1.6C8.1 23.4 10 24 12 24c6.6 0 12-5.4 12-12S18.6 0 12 0zm0 22c-1.9 0-3.7-.5-5.2-1.4l-.4-.2-3.7 1 1-3.6-.2-.4C2.5 15.8 2 13.9 2 12 2 6.5 6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"})}),s.jsx("style",{children:`
            .z-fab-whatsapp {
              position: fixed;
              bottom: 24px;
              right: 24px;
              z-index: 80;
              width: 56px;
              height: 56px;
              border-radius: 50%;
              background: #25D366;
              color: var(--z-white);
              display: grid;
              place-items: center;
              text-decoration: none;
              box-shadow: 0 12px 30px -8px rgba(37, 211, 102, 0.6);
            }
            @media (max-width: 540px) {
              .z-fab-whatsapp { bottom: 96px; right: 18px; width: 50px; height: 50px; }
            }
          `})]})})}function qv(){return C.useEffect(()=>{const r=new Xg({duration:1.1,easing:d=>Math.min(1,1.001-Math.pow(2,-10*d)),smoothWheel:!0});function o(d){r.raf(d),requestAnimationFrame(o)}return requestAnimationFrame(o),()=>r.destroy()},[]),s.jsxs(bv,{children:[s.jsx(uv,{}),s.jsx(gv,{}),s.jsx(wv,{}),s.jsx(Ev,{}),s.jsx(kv,{}),s.jsx(Hv,{}),s.jsx(_v,{}),s.jsx(Rv,{}),s.jsx(Vv,{}),s.jsx(Dv,{})]})}Ug.createRoot(document.getElementById("root")).render(s.jsx(qv,{}));
