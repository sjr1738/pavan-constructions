(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function u(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function c(d){if(d.ep)return;d.ep=!0;const f=u(d);fetch(d.href,f)}})();function fu(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var wc={exports:{}},gr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm;function W1(){if(jm)return gr;jm=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function u(c,d,f){var h=null;if(f!==void 0&&(h=""+f),d.key!==void 0&&(h=""+d.key),"key"in d){f={};for(var x in d)x!=="key"&&(f[x]=d[x])}else f=d;return d=f.ref,{$$typeof:r,type:c,key:h,ref:d!==void 0?d:null,props:f}}return gr.Fragment=o,gr.jsx=u,gr.jsxs=u,gr}var Sm;function Z1(){return Sm||(Sm=1,wc.exports=W1()),wc.exports}var n=Z1(),jc={exports:{}},Ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function K1(){if(Cm)return Ee;Cm=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),z=Symbol.iterator;function S(C){return C===null||typeof C!="object"?null:(C=z&&C[z]||C["@@iterator"],typeof C=="function"?C:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,P={};function R(C,q,V){this.props=C,this.context=q,this.refs=P,this.updater=V||M}R.prototype.isReactComponent={},R.prototype.setState=function(C,q){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,q,"setState")},R.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function Y(){}Y.prototype=R.prototype;function w(C,q,V){this.props=C,this.context=q,this.refs=P,this.updater=V||M}var I=w.prototype=new Y;I.constructor=w,k(I,R.prototype),I.isPureReactComponent=!0;var J=Array.isArray,K={H:null,A:null,T:null,S:null,V:null},he=Object.prototype.hasOwnProperty;function B(C,q,V,$,A,ie){return V=ie.ref,{$$typeof:r,type:C,key:q,ref:V!==void 0?V:null,props:ie}}function se(C,q){return B(C.type,q,void 0,void 0,void 0,C.props)}function D(C){return typeof C=="object"&&C!==null&&C.$$typeof===r}function te(C){var q={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(V){return q[V]})}var Z=/\/+/g;function oe(C,q){return typeof C=="object"&&C!==null&&C.key!=null?te(""+C.key):q.toString(36)}function we(){}function le(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(we,we):(C.status="pending",C.then(function(q){C.status==="pending"&&(C.status="fulfilled",C.value=q)},function(q){C.status==="pending"&&(C.status="rejected",C.reason=q)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function ce(C,q,V,$,A){var ie=typeof C;(ie==="undefined"||ie==="boolean")&&(C=null);var ne=!1;if(C===null)ne=!0;else switch(ie){case"bigint":case"string":case"number":ne=!0;break;case"object":switch(C.$$typeof){case r:case o:ne=!0;break;case v:return ne=C._init,ce(ne(C._payload),q,V,$,A)}}if(ne)return A=A(C),ne=$===""?"."+oe(C,0):$,J(A)?(V="",ne!=null&&(V=ne.replace(Z,"$&/")+"/"),ce(A,q,V,"",function(ae){return ae})):A!=null&&(D(A)&&(A=se(A,V+(A.key==null||C&&C.key===A.key?"":(""+A.key).replace(Z,"$&/")+"/")+ne)),q.push(A)),1;ne=0;var Ce=$===""?".":$+":";if(J(C))for(var me=0;me<C.length;me++)$=C[me],ie=Ce+oe($,me),ne+=ce($,q,V,ie,A);else if(me=S(C),typeof me=="function")for(C=me.call(C),me=0;!($=C.next()).done;)$=$.value,ie=Ce+oe($,me++),ne+=ce($,q,V,ie,A);else if(ie==="object"){if(typeof C.then=="function")return ce(le(C),q,V,$,A);throw q=String(C),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return ne}function E(C,q,V){if(C==null)return C;var $=[],A=0;return ce(C,$,"","",function(ie){return q.call(V,ie,A++)}),$}function H(C){if(C._status===-1){var q=C._result;q=q(),q.then(function(V){(C._status===0||C._status===-1)&&(C._status=1,C._result=V)},function(V){(C._status===0||C._status===-1)&&(C._status=2,C._result=V)}),C._status===-1&&(C._status=0,C._result=q)}if(C._status===1)return C._result.default;throw C._result}var re=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)};function ge(){}return Ee.Children={map:E,forEach:function(C,q,V){E(C,function(){q.apply(this,arguments)},V)},count:function(C){var q=0;return E(C,function(){q++}),q},toArray:function(C){return E(C,function(q){return q})||[]},only:function(C){if(!D(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},Ee.Component=R,Ee.Fragment=u,Ee.Profiler=d,Ee.PureComponent=w,Ee.StrictMode=c,Ee.Suspense=b,Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,Ee.__COMPILER_RUNTIME={__proto__:null,c:function(C){return K.H.useMemoCache(C)}},Ee.cache=function(C){return function(){return C.apply(null,arguments)}},Ee.cloneElement=function(C,q,V){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var $=k({},C.props),A=C.key,ie=void 0;if(q!=null)for(ne in q.ref!==void 0&&(ie=void 0),q.key!==void 0&&(A=""+q.key),q)!he.call(q,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&q.ref===void 0||($[ne]=q[ne]);var ne=arguments.length-2;if(ne===1)$.children=V;else if(1<ne){for(var Ce=Array(ne),me=0;me<ne;me++)Ce[me]=arguments[me+2];$.children=Ce}return B(C.type,A,void 0,void 0,ie,$)},Ee.createContext=function(C){return C={$$typeof:h,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:f,_context:C},C},Ee.createElement=function(C,q,V){var $,A={},ie=null;if(q!=null)for($ in q.key!==void 0&&(ie=""+q.key),q)he.call(q,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(A[$]=q[$]);var ne=arguments.length-2;if(ne===1)A.children=V;else if(1<ne){for(var Ce=Array(ne),me=0;me<ne;me++)Ce[me]=arguments[me+2];A.children=Ce}if(C&&C.defaultProps)for($ in ne=C.defaultProps,ne)A[$]===void 0&&(A[$]=ne[$]);return B(C,ie,void 0,void 0,null,A)},Ee.createRef=function(){return{current:null}},Ee.forwardRef=function(C){return{$$typeof:x,render:C}},Ee.isValidElement=D,Ee.lazy=function(C){return{$$typeof:v,_payload:{_status:-1,_result:C},_init:H}},Ee.memo=function(C,q){return{$$typeof:p,type:C,compare:q===void 0?null:q}},Ee.startTransition=function(C){var q=K.T,V={};K.T=V;try{var $=C(),A=K.S;A!==null&&A(V,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(ge,re)}catch(ie){re(ie)}finally{K.T=q}},Ee.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},Ee.use=function(C){return K.H.use(C)},Ee.useActionState=function(C,q,V){return K.H.useActionState(C,q,V)},Ee.useCallback=function(C,q){return K.H.useCallback(C,q)},Ee.useContext=function(C){return K.H.useContext(C)},Ee.useDebugValue=function(){},Ee.useDeferredValue=function(C,q){return K.H.useDeferredValue(C,q)},Ee.useEffect=function(C,q,V){var $=K.H;if(typeof V=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return $.useEffect(C,q)},Ee.useId=function(){return K.H.useId()},Ee.useImperativeHandle=function(C,q,V){return K.H.useImperativeHandle(C,q,V)},Ee.useInsertionEffect=function(C,q){return K.H.useInsertionEffect(C,q)},Ee.useLayoutEffect=function(C,q){return K.H.useLayoutEffect(C,q)},Ee.useMemo=function(C,q){return K.H.useMemo(C,q)},Ee.useOptimistic=function(C,q){return K.H.useOptimistic(C,q)},Ee.useReducer=function(C,q,V){return K.H.useReducer(C,q,V)},Ee.useRef=function(C){return K.H.useRef(C)},Ee.useState=function(C){return K.H.useState(C)},Ee.useSyncExternalStore=function(C,q,V){return K.H.useSyncExternalStore(C,q,V)},Ee.useTransition=function(){return K.H.useTransition()},Ee.version="19.1.0",Ee}var Nm;function mu(){return Nm||(Nm=1,jc.exports=K1()),jc.exports}var y=mu();const Gt=fu(y);var Sc={exports:{}},xr={},Cc={exports:{}},Nc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Em;function $1(){return Em||(Em=1,function(r){function o(E,H){var re=E.length;E.push(H);e:for(;0<re;){var ge=re-1>>>1,C=E[ge];if(0<d(C,H))E[ge]=H,E[re]=C,re=ge;else break e}}function u(E){return E.length===0?null:E[0]}function c(E){if(E.length===0)return null;var H=E[0],re=E.pop();if(re!==H){E[0]=re;e:for(var ge=0,C=E.length,q=C>>>1;ge<q;){var V=2*(ge+1)-1,$=E[V],A=V+1,ie=E[A];if(0>d($,re))A<C&&0>d(ie,$)?(E[ge]=ie,E[A]=re,ge=A):(E[ge]=$,E[V]=re,ge=V);else if(A<C&&0>d(ie,re))E[ge]=ie,E[A]=re,ge=A;else break e}}return H}function d(E,H){var re=E.sortIndex-H.sortIndex;return re!==0?re:E.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;r.unstable_now=function(){return f.now()}}else{var h=Date,x=h.now();r.unstable_now=function(){return h.now()-x}}var b=[],p=[],v=1,z=null,S=3,M=!1,k=!1,P=!1,R=!1,Y=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function J(E){for(var H=u(p);H!==null;){if(H.callback===null)c(p);else if(H.startTime<=E)c(p),H.sortIndex=H.expirationTime,o(b,H);else break;H=u(p)}}function K(E){if(P=!1,J(E),!k)if(u(b)!==null)k=!0,he||(he=!0,oe());else{var H=u(p);H!==null&&ce(K,H.startTime-E)}}var he=!1,B=-1,se=5,D=-1;function te(){return R?!0:!(r.unstable_now()-D<se)}function Z(){if(R=!1,he){var E=r.unstable_now();D=E;var H=!0;try{e:{k=!1,P&&(P=!1,w(B),B=-1),M=!0;var re=S;try{t:{for(J(E),z=u(b);z!==null&&!(z.expirationTime>E&&te());){var ge=z.callback;if(typeof ge=="function"){z.callback=null,S=z.priorityLevel;var C=ge(z.expirationTime<=E);if(E=r.unstable_now(),typeof C=="function"){z.callback=C,J(E),H=!0;break t}z===u(b)&&c(b),J(E)}else c(b);z=u(b)}if(z!==null)H=!0;else{var q=u(p);q!==null&&ce(K,q.startTime-E),H=!1}}break e}finally{z=null,S=re,M=!1}H=void 0}}finally{H?oe():he=!1}}}var oe;if(typeof I=="function")oe=function(){I(Z)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,le=we.port2;we.port1.onmessage=Z,oe=function(){le.postMessage(null)}}else oe=function(){Y(Z,0)};function ce(E,H){B=Y(function(){E(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(E){E.callback=null},r.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):se=0<E?Math.floor(1e3/E):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(E){switch(S){case 1:case 2:case 3:var H=3;break;default:H=S}var re=S;S=H;try{return E()}finally{S=re}},r.unstable_requestPaint=function(){R=!0},r.unstable_runWithPriority=function(E,H){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var re=S;S=E;try{return H()}finally{S=re}},r.unstable_scheduleCallback=function(E,H,re){var ge=r.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?ge+re:ge):re=ge,E){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=re+C,E={id:v++,callback:H,priorityLevel:E,startTime:re,expirationTime:C,sortIndex:-1},re>ge?(E.sortIndex=re,o(p,E),u(b)===null&&E===u(p)&&(P?(w(B),B=-1):P=!0,ce(K,re-ge))):(E.sortIndex=C,o(b,E),k||M||(k=!0,he||(he=!0,oe()))),E},r.unstable_shouldYield=te,r.unstable_wrapCallback=function(E){var H=S;return function(){var re=S;S=H;try{return E.apply(this,arguments)}finally{S=re}}}}(Nc)),Nc}var Am;function J1(){return Am||(Am=1,Cc.exports=$1()),Cc.exports}var Ec={exports:{}},ft={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tm;function ex(){if(Tm)return ft;Tm=1;var r=mu();function o(b){var p="https://react.dev/errors/"+b;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+b+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(o(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},d=Symbol.for("react.portal");function f(b,p,v){var z=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:z==null?null:""+z,children:b,containerInfo:p,implementation:v}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(b,p){if(b==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,ft.createPortal=function(b,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(o(299));return f(b,p,null,v)},ft.flushSync=function(b){var p=h.T,v=c.p;try{if(h.T=null,c.p=2,b)return b()}finally{h.T=p,c.p=v,c.d.f()}},ft.preconnect=function(b,p){typeof b=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,c.d.C(b,p))},ft.prefetchDNS=function(b){typeof b=="string"&&c.d.D(b)},ft.preinit=function(b,p){if(typeof b=="string"&&p&&typeof p.as=="string"){var v=p.as,z=x(v,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?c.d.S(b,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:z,integrity:S,fetchPriority:M}):v==="script"&&c.d.X(b,{crossOrigin:z,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},ft.preinitModule=function(b,p){if(typeof b=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=x(p.as,p.crossOrigin);c.d.M(b,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&c.d.M(b)},ft.preload=function(b,p){if(typeof b=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,z=x(v,p.crossOrigin);c.d.L(b,v,{crossOrigin:z,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},ft.preloadModule=function(b,p){if(typeof b=="string")if(p){var v=x(p.as,p.crossOrigin);c.d.m(b,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else c.d.m(b)},ft.requestFormReset=function(b){c.d.r(b)},ft.unstable_batchedUpdates=function(b,p){return b(p)},ft.useFormState=function(b,p,v){return h.H.useFormState(b,p,v)},ft.useFormStatus=function(){return h.H.useHostTransitionStatus()},ft.version="19.1.0",ft}var km;function tx(){if(km)return Ec.exports;km=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),Ec.exports=ex(),Ec.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function ax(){if(zm)return xr;zm=1;var r=J1(),o=mu(),u=tx();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(f(e)!==e)throw Error(c(188))}function b(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,i=t;;){var l=a.return;if(l===null)break;var s=l.alternate;if(s===null){if(i=l.return,i!==null){a=i;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===a)return x(l),e;if(s===i)return x(l),t;s=s.sibling}throw Error(c(188))}if(a.return!==i.return)a=l,i=s;else{for(var m=!1,g=l.child;g;){if(g===a){m=!0,a=l,i=s;break}if(g===i){m=!0,i=l,a=s;break}g=g.sibling}if(!m){for(g=s.child;g;){if(g===a){m=!0,a=s,i=l;break}if(g===i){m=!0,i=s,a=l;break}g=g.sibling}if(!m)throw Error(c(189))}}if(a.alternate!==i)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,z=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),w=Symbol.for("react.consumer"),I=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),te=Symbol.for("react.memo_cache_sentinel"),Z=Symbol.iterator;function oe(e){return e===null||typeof e!="object"?null:(e=Z&&e[Z]||e["@@iterator"],typeof e=="function"?e:null)}var we=Symbol.for("react.client.reference");function le(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===we?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case R:return"Profiler";case P:return"StrictMode";case K:return"Suspense";case he:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case I:return(e.displayName||"Context")+".Provider";case w:return(e._context.displayName||"Context")+".Consumer";case J:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return t=e.displayName||null,t!==null?t:le(e.type)||"Memo";case se:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}var ce=Array.isArray,E=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re={pending:!1,data:null,method:null,action:null},ge=[],C=-1;function q(e){return{current:e}}function V(e){0>C||(e.current=ge[C],ge[C]=null,C--)}function $(e,t){C++,ge[C]=e.current,e.current=t}var A=q(null),ie=q(null),ne=q(null),Ce=q(null);function me(e,t){switch($(ne,t),$(ie,e),$(A,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Z0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Z0(t),e=K0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}V(A),$(A,e)}function ae(){V(A),V(ie),V(ne)}function xe(e){e.memoizedState!==null&&$(Ce,e);var t=A.current,a=K0(t,e.type);t!==a&&($(ie,e),$(A,a))}function De(e){ie.current===e&&(V(A),V(ie)),Ce.current===e&&(V(Ce),dr._currentValue=re)}var Oe=Object.prototype.hasOwnProperty,F=r.unstable_scheduleCallback,be=r.unstable_cancelCallback,W=r.unstable_shouldYield,Se=r.unstable_requestPaint,ue=r.unstable_now,Ne=r.unstable_getCurrentPriorityLevel,ke=r.unstable_ImmediatePriority,gt=r.unstable_UserBlockingPriority,pt=r.unstable_NormalPriority,Dt=r.unstable_LowPriority,Zt=r.unstable_IdlePriority,Rh=r.log,Mh=r.unstable_setDisableYieldValue,yi=null,St=null;function ka(e){if(typeof Rh=="function"&&Mh(e),St&&typeof St.setStrictMode=="function")try{St.setStrictMode(yi,e)}catch{}}var Ct=Math.clz32?Math.clz32:Bh,Dh=Math.log,Oh=Math.LN2;function Bh(e){return e>>>=0,e===0?32:31-(Dh(e)/Oh|0)|0}var zr=256,Rr=4194304;function rn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Mr(e,t,a){var i=e.pendingLanes;if(i===0)return 0;var l=0,s=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var g=i&134217727;return g!==0?(i=g&~s,i!==0?l=rn(i):(m&=g,m!==0?l=rn(m):a||(a=g&~e,a!==0&&(l=rn(a))))):(g=i&~s,g!==0?l=rn(g):m!==0?l=rn(m):a||(a=i&~e,a!==0&&(l=rn(a)))),l===0?0:t!==0&&t!==l&&(t&s)===0&&(s=l&-l,a=t&-t,s>=a||s===32&&(a&4194048)!==0)?t:l}function vi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Lh(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mu(){var e=zr;return zr<<=1,(zr&4194048)===0&&(zr=256),e}function Du(){var e=Rr;return Rr<<=1,(Rr&62914560)===0&&(Rr=4194304),e}function cs(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function wi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Yh(e,t,a,i,l,s){var m=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var g=e.entanglements,j=e.expirationTimes,L=e.hiddenUpdates;for(a=m&~a;0<a;){var X=31-Ct(a),Q=1<<X;g[X]=0,j[X]=-1;var U=L[X];if(U!==null)for(L[X]=null,X=0;X<U.length;X++){var _=U[X];_!==null&&(_.lane&=-536870913)}a&=~Q}i!==0&&Ou(e,i,0),s!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=s&~(m&~t))}function Ou(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Ct(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|a&4194090}function Bu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var i=31-Ct(a),l=1<<i;l&t|e[i]&t&&(e[i]|=t),a&=~l}}function us(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ds(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Lu(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:gm(e.type))}function Uh(e,t){var a=H.p;try{return H.p=e,t()}finally{H.p=a}}var za=Math.random().toString(36).slice(2),ut="__reactFiber$"+za,xt="__reactProps$"+za,En="__reactContainer$"+za,fs="__reactEvents$"+za,_h="__reactListeners$"+za,Hh="__reactHandles$"+za,Yu="__reactResources$"+za,ji="__reactMarker$"+za;function ms(e){delete e[ut],delete e[xt],delete e[fs],delete e[_h],delete e[Hh]}function An(e){var t=e[ut];if(t)return t;for(var a=e.parentNode;a;){if(t=a[En]||a[ut]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=tm(e);e!==null;){if(a=e[ut])return a;e=tm(e)}return t}e=a,a=e.parentNode}return null}function Tn(e){if(e=e[ut]||e[En]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Si(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function kn(e){var t=e[Yu];return t||(t=e[Yu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function nt(e){e[ji]=!0}var Uu=new Set,_u={};function ln(e,t){zn(e,t),zn(e+"Capture",t)}function zn(e,t){for(_u[e]=t,e=0;e<t.length;e++)Uu.add(t[e])}var qh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hu={},qu={};function Ph(e){return Oe.call(qu,e)?!0:Oe.call(Hu,e)?!1:qh.test(e)?qu[e]=!0:(Hu[e]=!0,!1)}function Dr(e,t,a){if(Ph(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Or(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function la(e,t,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+i)}}var ps,Pu;function Rn(e){if(ps===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ps=t&&t[1]||"",Pu=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ps+e+Pu}var hs=!1;function gs(e,t){if(!e||hs)return"";hs=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(_){var U=_}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(_){U=_}e.call(Q.prototype)}}else{try{throw Error()}catch(_){U=_}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(_){if(_&&U&&typeof _.stack=="string")return[_.stack,U.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),m=s[0],g=s[1];if(m&&g){var j=m.split(`
`),L=g.split(`
`);for(l=i=0;i<j.length&&!j[i].includes("DetermineComponentFrameRoot");)i++;for(;l<L.length&&!L[l].includes("DetermineComponentFrameRoot");)l++;if(i===j.length||l===L.length)for(i=j.length-1,l=L.length-1;1<=i&&0<=l&&j[i]!==L[l];)l--;for(;1<=i&&0<=l;i--,l--)if(j[i]!==L[l]){if(i!==1||l!==1)do if(i--,l--,0>l||j[i]!==L[l]){var X=`
`+j[i].replace(" at new "," at ");return e.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",e.displayName)),X}while(1<=i&&0<=l);break}}}finally{hs=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Rn(a):""}function Xh(e){switch(e.tag){case 26:case 27:case 5:return Rn(e.type);case 16:return Rn("Lazy");case 13:return Rn("Suspense");case 19:return Rn("SuspenseList");case 0:case 15:return gs(e.type,!1);case 11:return gs(e.type.render,!1);case 1:return gs(e.type,!0);case 31:return Rn("Activity");default:return""}}function Xu(e){try{var t="";do t+=Xh(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Ot(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fh(e){var t=Fu(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,s=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(m){i=""+m,s.call(this,m)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return i},setValue:function(m){i=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Br(e){e._valueTracker||(e._valueTracker=Fh(e))}function Iu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),i="";return e&&(i=Fu(e)?e.checked?"true":"false":e.value),e=i,e!==a?(t.setValue(e),!0):!1}function Lr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ih=/[\n"\\]/g;function Bt(e){return e.replace(Ih,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function xs(e,t,a,i,l,s,m,g){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ot(t)):e.value!==""+Ot(t)&&(e.value=""+Ot(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?bs(e,m,Ot(t)):a!=null?bs(e,m,Ot(a)):i!=null&&e.removeAttribute("value"),l==null&&s!=null&&(e.defaultChecked=!!s),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+Ot(g):e.removeAttribute("name")}function Vu(e,t,a,i,l,s,m,g){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||t!=null))return;a=a!=null?""+Ot(a):"",t=t!=null?""+Ot(t):a,g||t===e.value||(e.value=t),e.defaultValue=t}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=g?e.checked:!!i,e.defaultChecked=!!i,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m)}function bs(e,t,a){t==="number"&&Lr(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Mn(e,t,a,i){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&i&&(e[a].defaultSelected=!0)}else{for(a=""+Ot(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Gu(e,t,a){if(t!=null&&(t=""+Ot(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Ot(a):""}function Qu(e,t,a,i){if(t==null){if(i!=null){if(a!=null)throw Error(c(92));if(ce(i)){if(1<i.length)throw Error(c(93));i=i[0]}a=i}a==null&&(a=""),t=a}a=Ot(t),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i)}function Dn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Vh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Wu(e,t,a){var i=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,a):typeof a!="number"||a===0||Vh.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Zu(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var l in t)i=t[l],t.hasOwnProperty(l)&&a[l]!==i&&Wu(e,l,i)}else for(var s in t)t.hasOwnProperty(s)&&Wu(e,s,t[s])}function ys(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yr(e){return Qh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var vs=null;function ws(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var On=null,Bn=null;function Ku(e){var t=Tn(e);if(t&&(e=t.stateNode)){var a=e[xt]||null;e:switch(e=t.stateNode,t.type){case"input":if(xs(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Bt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var i=a[t];if(i!==e&&i.form===e.form){var l=i[xt]||null;if(!l)throw Error(c(90));xs(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)i=a[t],i.form===e.form&&Iu(i)}break e;case"textarea":Gu(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Mn(e,!!a.multiple,t,!1)}}}var js=!1;function $u(e,t,a){if(js)return e(t,a);js=!0;try{var i=e(t);return i}finally{if(js=!1,(On!==null||Bn!==null)&&(jl(),On&&(t=On,e=Bn,Bn=On=null,Ku(t),e)))for(t=0;t<e.length;t++)Ku(e[t])}}function Ci(e,t){var a=e.stateNode;if(a===null)return null;var i=a[xt]||null;if(i===null)return null;a=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ss=!1;if(sa)try{var Ni={};Object.defineProperty(Ni,"passive",{get:function(){Ss=!0}}),window.addEventListener("test",Ni,Ni),window.removeEventListener("test",Ni,Ni)}catch{Ss=!1}var Ra=null,Cs=null,Ur=null;function Ju(){if(Ur)return Ur;var e,t=Cs,a=t.length,i,l="value"in Ra?Ra.value:Ra.textContent,s=l.length;for(e=0;e<a&&t[e]===l[e];e++);var m=a-e;for(i=1;i<=m&&t[a-i]===l[s-i];i++);return Ur=l.slice(e,1<i?1-i:void 0)}function _r(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hr(){return!0}function ed(){return!1}function bt(e){function t(a,i,l,s,m){this._reactName=a,this._targetInst=l,this.type=i,this.nativeEvent=s,this.target=m,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(a=e[g],this[g]=a?a(s):s[g]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Hr:ed,this.isPropagationStopped=ed,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Hr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Hr)},persist:function(){},isPersistent:Hr}),t}var sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qr=bt(sn),Ei=v({},sn,{view:0,detail:0}),Wh=bt(Ei),Ns,Es,Ai,Pr=v({},Ei,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ts,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ai&&(Ai&&e.type==="mousemove"?(Ns=e.screenX-Ai.screenX,Es=e.screenY-Ai.screenY):Es=Ns=0,Ai=e),Ns)},movementY:function(e){return"movementY"in e?e.movementY:Es}}),td=bt(Pr),Zh=v({},Pr,{dataTransfer:0}),Kh=bt(Zh),$h=v({},Ei,{relatedTarget:0}),As=bt($h),Jh=v({},sn,{animationName:0,elapsedTime:0,pseudoElement:0}),eg=bt(Jh),tg=v({},sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ag=bt(tg),ng=v({},sn,{data:0}),ad=bt(ng),ig={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lg[e])?!!t[e]:!1}function Ts(){return sg}var og=v({},Ei,{key:function(e){if(e.key){var t=ig[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_r(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ts,charCode:function(e){return e.type==="keypress"?_r(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_r(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cg=bt(og),ug=v({},Pr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nd=bt(ug),dg=v({},Ei,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ts}),fg=bt(dg),mg=v({},sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),pg=bt(mg),hg=v({},Pr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gg=bt(hg),xg=v({},sn,{newState:0,oldState:0}),bg=bt(xg),yg=[9,13,27,32],ks=sa&&"CompositionEvent"in window,Ti=null;sa&&"documentMode"in document&&(Ti=document.documentMode);var vg=sa&&"TextEvent"in window&&!Ti,id=sa&&(!ks||Ti&&8<Ti&&11>=Ti),rd=" ",ld=!1;function sd(e,t){switch(e){case"keyup":return yg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function od(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ln=!1;function wg(e,t){switch(e){case"compositionend":return od(t);case"keypress":return t.which!==32?null:(ld=!0,rd);case"textInput":return e=t.data,e===rd&&ld?null:e;default:return null}}function jg(e,t){if(Ln)return e==="compositionend"||!ks&&sd(e,t)?(e=Ju(),Ur=Cs=Ra=null,Ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return id&&t.locale!=="ko"?null:t.data;default:return null}}var Sg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sg[e.type]:t==="textarea"}function ud(e,t,a,i){On?Bn?Bn.push(i):Bn=[i]:On=i,t=Tl(t,"onChange"),0<t.length&&(a=new qr("onChange","change",null,a,i),e.push({event:a,listeners:t}))}var ki=null,zi=null;function Cg(e){I0(e,0)}function Xr(e){var t=Si(e);if(Iu(t))return e}function dd(e,t){if(e==="change")return t}var fd=!1;if(sa){var zs;if(sa){var Rs="oninput"in document;if(!Rs){var md=document.createElement("div");md.setAttribute("oninput","return;"),Rs=typeof md.oninput=="function"}zs=Rs}else zs=!1;fd=zs&&(!document.documentMode||9<document.documentMode)}function pd(){ki&&(ki.detachEvent("onpropertychange",hd),zi=ki=null)}function hd(e){if(e.propertyName==="value"&&Xr(zi)){var t=[];ud(t,zi,e,ws(e)),$u(Cg,t)}}function Ng(e,t,a){e==="focusin"?(pd(),ki=t,zi=a,ki.attachEvent("onpropertychange",hd)):e==="focusout"&&pd()}function Eg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xr(zi)}function Ag(e,t){if(e==="click")return Xr(t)}function Tg(e,t){if(e==="input"||e==="change")return Xr(t)}function kg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Nt=typeof Object.is=="function"?Object.is:kg;function Ri(e,t){if(Nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var l=a[i];if(!Oe.call(t,l)||!Nt(e[l],t[l]))return!1}return!0}function gd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xd(e,t){var a=gd(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=t&&i>=t)return{node:a,offset:t-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=gd(a)}}function bd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Lr(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Lr(e.document)}return t}function Ms(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var zg=sa&&"documentMode"in document&&11>=document.documentMode,Yn=null,Ds=null,Mi=null,Os=!1;function vd(e,t,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Os||Yn==null||Yn!==Lr(i)||(i=Yn,"selectionStart"in i&&Ms(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Mi&&Ri(Mi,i)||(Mi=i,i=Tl(Ds,"onSelect"),0<i.length&&(t=new qr("onSelect","select",null,t,a),e.push({event:t,listeners:i}),t.target=Yn)))}function on(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Un={animationend:on("Animation","AnimationEnd"),animationiteration:on("Animation","AnimationIteration"),animationstart:on("Animation","AnimationStart"),transitionrun:on("Transition","TransitionRun"),transitionstart:on("Transition","TransitionStart"),transitioncancel:on("Transition","TransitionCancel"),transitionend:on("Transition","TransitionEnd")},Bs={},wd={};sa&&(wd=document.createElement("div").style,"AnimationEvent"in window||(delete Un.animationend.animation,delete Un.animationiteration.animation,delete Un.animationstart.animation),"TransitionEvent"in window||delete Un.transitionend.transition);function cn(e){if(Bs[e])return Bs[e];if(!Un[e])return e;var t=Un[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in wd)return Bs[e]=t[a];return e}var jd=cn("animationend"),Sd=cn("animationiteration"),Cd=cn("animationstart"),Rg=cn("transitionrun"),Mg=cn("transitionstart"),Dg=cn("transitioncancel"),Nd=cn("transitionend"),Ed=new Map,Ls="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ls.push("scrollEnd");function Ft(e,t){Ed.set(e,t),ln(t,[e])}var Ad=new WeakMap;function Lt(e,t){if(typeof e=="object"&&e!==null){var a=Ad.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Xu(t)},Ad.set(e,t),t)}return{value:e,source:t,stack:Xu(t)}}var Yt=[],_n=0,Ys=0;function Fr(){for(var e=_n,t=Ys=_n=0;t<e;){var a=Yt[t];Yt[t++]=null;var i=Yt[t];Yt[t++]=null;var l=Yt[t];Yt[t++]=null;var s=Yt[t];if(Yt[t++]=null,i!==null&&l!==null){var m=i.pending;m===null?l.next=l:(l.next=m.next,m.next=l),i.pending=l}s!==0&&Td(a,l,s)}}function Ir(e,t,a,i){Yt[_n++]=e,Yt[_n++]=t,Yt[_n++]=a,Yt[_n++]=i,Ys|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Us(e,t,a,i){return Ir(e,t,a,i),Vr(e)}function Hn(e,t){return Ir(e,null,null,t),Vr(e)}function Td(e,t,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var l=!1,s=e.return;s!==null;)s.childLanes|=a,i=s.alternate,i!==null&&(i.childLanes|=a),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(l=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,l&&t!==null&&(l=31-Ct(a),e=s.hiddenUpdates,i=e[l],i===null?e[l]=[t]:i.push(t),t.lane=a|536870912),s):null}function Vr(e){if(50<nr)throw nr=0,Io=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var qn={};function Og(e,t,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(e,t,a,i){return new Og(e,t,a,i)}function _s(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oa(e,t){var a=e.alternate;return a===null?(a=Et(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function kd(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Gr(e,t,a,i,l,s){var m=0;if(i=e,typeof e=="function")_s(e)&&(m=1);else if(typeof e=="string")m=L1(e,a,A.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case D:return e=Et(31,a,t,l),e.elementType=D,e.lanes=s,e;case k:return un(a.children,l,s,t);case P:m=8,l|=24;break;case R:return e=Et(12,a,t,l|2),e.elementType=R,e.lanes=s,e;case K:return e=Et(13,a,t,l),e.elementType=K,e.lanes=s,e;case he:return e=Et(19,a,t,l),e.elementType=he,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Y:case I:m=10;break e;case w:m=9;break e;case J:m=11;break e;case B:m=14;break e;case se:m=16,i=null;break e}m=29,a=Error(c(130,e===null?"null":typeof e,"")),i=null}return t=Et(m,a,t,l),t.elementType=e,t.type=i,t.lanes=s,t}function un(e,t,a,i){return e=Et(7,e,i,t),e.lanes=a,e}function Hs(e,t,a){return e=Et(6,e,null,t),e.lanes=a,e}function qs(e,t,a){return t=Et(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Pn=[],Xn=0,Qr=null,Wr=0,Ut=[],_t=0,dn=null,ca=1,ua="";function fn(e,t){Pn[Xn++]=Wr,Pn[Xn++]=Qr,Qr=e,Wr=t}function zd(e,t,a){Ut[_t++]=ca,Ut[_t++]=ua,Ut[_t++]=dn,dn=e;var i=ca;e=ua;var l=32-Ct(i)-1;i&=~(1<<l),a+=1;var s=32-Ct(t)+l;if(30<s){var m=l-l%5;s=(i&(1<<m)-1).toString(32),i>>=m,l-=m,ca=1<<32-Ct(t)+l|a<<l|i,ua=s+e}else ca=1<<s|a<<l|i,ua=e}function Ps(e){e.return!==null&&(fn(e,1),zd(e,1,0))}function Xs(e){for(;e===Qr;)Qr=Pn[--Xn],Pn[Xn]=null,Wr=Pn[--Xn],Pn[Xn]=null;for(;e===dn;)dn=Ut[--_t],Ut[_t]=null,ua=Ut[--_t],Ut[_t]=null,ca=Ut[--_t],Ut[_t]=null}var ht=null,We=null,Ye=!1,mn=null,Kt=!1,Fs=Error(c(519));function pn(e){var t=Error(c(418,""));throw Bi(Lt(t,e)),Fs}function Rd(e){var t=e.stateNode,a=e.type,i=e.memoizedProps;switch(t[ut]=e,t[xt]=i,a){case"dialog":Re("cancel",t),Re("close",t);break;case"iframe":case"object":case"embed":Re("load",t);break;case"video":case"audio":for(a=0;a<rr.length;a++)Re(rr[a],t);break;case"source":Re("error",t);break;case"img":case"image":case"link":Re("error",t),Re("load",t);break;case"details":Re("toggle",t);break;case"input":Re("invalid",t),Vu(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),Br(t);break;case"select":Re("invalid",t);break;case"textarea":Re("invalid",t),Qu(t,i.value,i.defaultValue,i.children),Br(t)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||i.suppressHydrationWarning===!0||W0(t.textContent,a)?(i.popover!=null&&(Re("beforetoggle",t),Re("toggle",t)),i.onScroll!=null&&Re("scroll",t),i.onScrollEnd!=null&&Re("scrollend",t),i.onClick!=null&&(t.onclick=kl),t=!0):t=!1,t||pn(e)}function Md(e){for(ht=e.return;ht;)switch(ht.tag){case 5:case 13:Kt=!1;return;case 27:case 3:Kt=!0;return;default:ht=ht.return}}function Di(e){if(e!==ht)return!1;if(!Ye)return Md(e),Ye=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||sc(e.type,e.memoizedProps)),a=!a),a&&We&&pn(e),Md(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){We=Vt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}We=null}}else t===27?(t=We,Ga(e.type)?(e=dc,dc=null,We=e):We=t):We=ht?Vt(e.stateNode.nextSibling):null;return!0}function Oi(){We=ht=null,Ye=!1}function Dd(){var e=mn;return e!==null&&(wt===null?wt=e:wt.push.apply(wt,e),mn=null),e}function Bi(e){mn===null?mn=[e]:mn.push(e)}var Is=q(null),hn=null,da=null;function Ma(e,t,a){$(Is,t._currentValue),t._currentValue=a}function fa(e){e._currentValue=Is.current,V(Is)}function Vs(e,t,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===a)break;e=e.return}}function Gs(e,t,a,i){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var s=l.dependencies;if(s!==null){var m=l.child;s=s.firstContext;e:for(;s!==null;){var g=s;s=l;for(var j=0;j<t.length;j++)if(g.context===t[j]){s.lanes|=a,g=s.alternate,g!==null&&(g.lanes|=a),Vs(s.return,a,e),i||(m=null);break e}s=g.next}}else if(l.tag===18){if(m=l.return,m===null)throw Error(c(341));m.lanes|=a,s=m.alternate,s!==null&&(s.lanes|=a),Vs(m,a,e),m=null}else m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===e){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}}function Li(e,t,a,i){e=null;for(var l=t,s=!1;l!==null;){if(!s){if((l.flags&524288)!==0)s=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var m=l.alternate;if(m===null)throw Error(c(387));if(m=m.memoizedProps,m!==null){var g=l.type;Nt(l.pendingProps.value,m.value)||(e!==null?e.push(g):e=[g])}}else if(l===Ce.current){if(m=l.alternate,m===null)throw Error(c(387));m.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(dr):e=[dr])}l=l.return}e!==null&&Gs(t,e,a,i),t.flags|=262144}function Zr(e){for(e=e.firstContext;e!==null;){if(!Nt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function gn(e){hn=e,da=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function dt(e){return Od(hn,e)}function Kr(e,t){return hn===null&&gn(e),Od(e,t)}function Od(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},da===null){if(e===null)throw Error(c(308));da=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else da=da.next=t;return a}var Bg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Lg=r.unstable_scheduleCallback,Yg=r.unstable_NormalPriority,tt={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qs(){return{controller:new Bg,data:new Map,refCount:0}}function Yi(e){e.refCount--,e.refCount===0&&Lg(Yg,function(){e.controller.abort()})}var Ui=null,Ws=0,Fn=0,In=null;function Ug(e,t){if(Ui===null){var a=Ui=[];Ws=0,Fn=$o(),In={status:"pending",value:void 0,then:function(i){a.push(i)}}}return Ws++,t.then(Bd,Bd),t}function Bd(){if(--Ws===0&&Ui!==null){In!==null&&(In.status="fulfilled");var e=Ui;Ui=null,Fn=0,In=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function _g(e,t){var a=[],i={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(i.status="rejected",i.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),i}var Ld=E.S;E.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ug(e,t),Ld!==null&&Ld(e,t)};var xn=q(null);function Zs(){var e=xn.current;return e!==null?e:Fe.pooledCache}function $r(e,t){t===null?$(xn,xn.current):$(xn,t.pool)}function Yd(){var e=Zs();return e===null?null:{parent:tt._currentValue,pool:e}}var _i=Error(c(460)),Ud=Error(c(474)),Jr=Error(c(542)),Ks={then:function(){}};function _d(e){return e=e.status,e==="fulfilled"||e==="rejected"}function el(){}function Hd(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(el,el),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Pd(e),e;default:if(typeof t.status=="string")t.then(el,el);else{if(e=Fe,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=i}},function(i){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Pd(e),e}throw Hi=t,_i}}var Hi=null;function qd(){if(Hi===null)throw Error(c(459));var e=Hi;return Hi=null,e}function Pd(e){if(e===_i||e===Jr)throw Error(c(483))}var Da=!1;function $s(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Js(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Oa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(e,t,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Ue&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,t=Vr(e),Td(e,null,a),t}return Ir(e,i,t,a),Vr(e)}function qi(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,Bu(e,a)}}function eo(e,t){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var l=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var m={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?l=s=m:s=s.next=m,a=a.next}while(a!==null);s===null?l=s=t:s=s.next=t}else l=s=t;a={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var to=!1;function Pi(){if(to){var e=In;if(e!==null)throw e}}function Xi(e,t,a,i){to=!1;var l=e.updateQueue;Da=!1;var s=l.firstBaseUpdate,m=l.lastBaseUpdate,g=l.shared.pending;if(g!==null){l.shared.pending=null;var j=g,L=j.next;j.next=null,m===null?s=L:m.next=L,m=j;var X=e.alternate;X!==null&&(X=X.updateQueue,g=X.lastBaseUpdate,g!==m&&(g===null?X.firstBaseUpdate=L:g.next=L,X.lastBaseUpdate=j))}if(s!==null){var Q=l.baseState;m=0,X=L=j=null,g=s;do{var U=g.lane&-536870913,_=U!==g.lane;if(_?(Be&U)===U:(i&U)===U){U!==0&&U===Fn&&(to=!0),X!==null&&(X=X.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var je=e,ye=g;U=t;var Pe=a;switch(ye.tag){case 1:if(je=ye.payload,typeof je=="function"){Q=je.call(Pe,Q,U);break e}Q=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=ye.payload,U=typeof je=="function"?je.call(Pe,Q,U):je,U==null)break e;Q=v({},Q,U);break e;case 2:Da=!0}}U=g.callback,U!==null&&(e.flags|=64,_&&(e.flags|=8192),_=l.callbacks,_===null?l.callbacks=[U]:_.push(U))}else _={lane:U,tag:g.tag,payload:g.payload,callback:g.callback,next:null},X===null?(L=X=_,j=Q):X=X.next=_,m|=U;if(g=g.next,g===null){if(g=l.shared.pending,g===null)break;_=g,g=_.next,_.next=null,l.lastBaseUpdate=_,l.shared.pending=null}}while(!0);X===null&&(j=Q),l.baseState=j,l.firstBaseUpdate=L,l.lastBaseUpdate=X,s===null&&(l.shared.lanes=0),Xa|=m,e.lanes=m,e.memoizedState=Q}}function Xd(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Fd(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Xd(a[e],t)}var Vn=q(null),tl=q(0);function Id(e,t){e=ya,$(tl,e),$(Vn,t),ya=e|t.baseLanes}function ao(){$(tl,ya),$(Vn,Vn.current)}function no(){ya=tl.current,V(Vn),V(tl)}var La=0,Ae=null,He=null,Je=null,al=!1,Gn=!1,bn=!1,nl=0,Fi=0,Qn=null,Hg=0;function Ke(){throw Error(c(321))}function io(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Nt(e[a],t[a]))return!1;return!0}function ro(e,t,a,i,l,s){return La=s,Ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?kf:zf,bn=!1,s=a(i,l),bn=!1,Gn&&(s=Gd(t,a,i,l)),Vd(e),s}function Vd(e){E.H=cl;var t=He!==null&&He.next!==null;if(La=0,Je=He=Ae=null,al=!1,Fi=0,Qn=null,t)throw Error(c(300));e===null||it||(e=e.dependencies,e!==null&&Zr(e)&&(it=!0))}function Gd(e,t,a,i){Ae=e;var l=0;do{if(Gn&&(Qn=null),Fi=0,Gn=!1,25<=l)throw Error(c(301));if(l+=1,Je=He=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}E.H=Gg,s=t(a,i)}while(Gn);return s}function qg(){var e=E.H,t=e.useState()[0];return t=typeof t.then=="function"?Ii(t):t,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(Ae.flags|=1024),t}function lo(){var e=nl!==0;return nl=0,e}function so(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function oo(e){if(al){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}al=!1}La=0,Je=He=Ae=null,Gn=!1,Fi=nl=0,Qn=null}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?Ae.memoizedState=Je=e:Je=Je.next=e,Je}function et(){if(He===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var t=Je===null?Ae.memoizedState:Je.next;if(t!==null)Je=t,He=e;else{if(e===null)throw Ae.alternate===null?Error(c(467)):Error(c(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Je===null?Ae.memoizedState=Je=e:Je=Je.next=e}return Je}function co(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ii(e){var t=Fi;return Fi+=1,Qn===null&&(Qn=[]),e=Hd(Qn,e,t),t=Ae,(Je===null?t.memoizedState:Je.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?kf:zf),e}function il(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ii(e);if(e.$$typeof===I)return dt(e)}throw Error(c(438,String(e)))}function uo(e){var t=null,a=Ae.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var i=Ae.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=co(),Ae.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),i=0;i<e;i++)a[i]=te;return t.index++,a}function ma(e,t){return typeof t=="function"?t(e):t}function rl(e){var t=et();return fo(t,He,e)}function fo(e,t,a){var i=e.queue;if(i===null)throw Error(c(311));i.lastRenderedReducer=a;var l=e.baseQueue,s=i.pending;if(s!==null){if(l!==null){var m=l.next;l.next=s.next,s.next=m}t.baseQueue=l=s,i.pending=null}if(s=e.baseState,l===null)e.memoizedState=s;else{t=l.next;var g=m=null,j=null,L=t,X=!1;do{var Q=L.lane&-536870913;if(Q!==L.lane?(Be&Q)===Q:(La&Q)===Q){var U=L.revertLane;if(U===0)j!==null&&(j=j.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),Q===Fn&&(X=!0);else if((La&U)===U){L=L.next,U===Fn&&(X=!0);continue}else Q={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},j===null?(g=j=Q,m=s):j=j.next=Q,Ae.lanes|=U,Xa|=U;Q=L.action,bn&&a(s,Q),s=L.hasEagerState?L.eagerState:a(s,Q)}else U={lane:Q,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},j===null?(g=j=U,m=s):j=j.next=U,Ae.lanes|=Q,Xa|=Q;L=L.next}while(L!==null&&L!==t);if(j===null?m=s:j.next=g,!Nt(s,e.memoizedState)&&(it=!0,X&&(a=In,a!==null)))throw a;e.memoizedState=s,e.baseState=m,e.baseQueue=j,i.lastRenderedState=s}return l===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function mo(e){var t=et(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var i=a.dispatch,l=a.pending,s=t.memoizedState;if(l!==null){a.pending=null;var m=l=l.next;do s=e(s,m.action),m=m.next;while(m!==l);Nt(s,t.memoizedState)||(it=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),a.lastRenderedState=s}return[s,i]}function Qd(e,t,a){var i=Ae,l=et(),s=Ye;if(s){if(a===void 0)throw Error(c(407));a=a()}else a=t();var m=!Nt((He||l).memoizedState,a);m&&(l.memoizedState=a,it=!0),l=l.queue;var g=Kd.bind(null,i,l,e);if(Vi(2048,8,g,[e]),l.getSnapshot!==t||m||Je!==null&&Je.memoizedState.tag&1){if(i.flags|=2048,Wn(9,ll(),Zd.bind(null,i,l,a,t),null),Fe===null)throw Error(c(349));s||(La&124)!==0||Wd(i,t,a)}return a}function Wd(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=Ae.updateQueue,t===null?(t=co(),Ae.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Zd(e,t,a,i){t.value=a,t.getSnapshot=i,$d(t)&&Jd(e)}function Kd(e,t,a){return a(function(){$d(t)&&Jd(e)})}function $d(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Nt(e,a)}catch{return!0}}function Jd(e){var t=Hn(e,2);t!==null&&Rt(t,e,2)}function po(e){var t=yt();if(typeof e=="function"){var a=e;if(e=a(),bn){ka(!0);try{a()}finally{ka(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:e},t}function ef(e,t,a,i){return e.baseState=a,fo(e,He,typeof i=="function"?i:ma)}function Pg(e,t,a,i,l){if(ol(e))throw Error(c(485));if(e=t.action,e!==null){var s={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){s.listeners.push(m)}};E.T!==null?a(!0):s.isTransition=!1,i(s),a=t.pending,a===null?(s.next=t.pending=s,tf(t,s)):(s.next=a.next,t.pending=a.next=s)}}function tf(e,t){var a=t.action,i=t.payload,l=e.state;if(t.isTransition){var s=E.T,m={};E.T=m;try{var g=a(l,i),j=E.S;j!==null&&j(m,g),af(e,t,g)}catch(L){ho(e,t,L)}finally{E.T=s}}else try{s=a(l,i),af(e,t,s)}catch(L){ho(e,t,L)}}function af(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){nf(e,t,i)},function(i){return ho(e,t,i)}):nf(e,t,a)}function nf(e,t,a){t.status="fulfilled",t.value=a,rf(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,tf(e,a)))}function ho(e,t,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=a,rf(t),t=t.next;while(t!==i)}e.action=null}function rf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function lf(e,t){return t}function sf(e,t){if(Ye){var a=Fe.formState;if(a!==null){e:{var i=Ae;if(Ye){if(We){t:{for(var l=We,s=Kt;l.nodeType!==8;){if(!s){l=null;break t}if(l=Vt(l.nextSibling),l===null){l=null;break t}}s=l.data,l=s==="F!"||s==="F"?l:null}if(l){We=Vt(l.nextSibling),i=l.data==="F!";break e}}pn(i)}i=!1}i&&(t=a[0])}}return a=yt(),a.memoizedState=a.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lf,lastRenderedState:t},a.queue=i,a=Ef.bind(null,Ae,i),i.dispatch=a,i=po(!1),s=vo.bind(null,Ae,!1,i.queue),i=yt(),l={state:t,dispatch:null,action:e,pending:null},i.queue=l,a=Pg.bind(null,Ae,l,s,a),l.dispatch=a,i.memoizedState=e,[t,a,!1]}function of(e){var t=et();return cf(t,He,e)}function cf(e,t,a){if(t=fo(e,t,lf)[0],e=rl(ma)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Ii(t)}catch(m){throw m===_i?Jr:m}else i=t;t=et();var l=t.queue,s=l.dispatch;return a!==t.memoizedState&&(Ae.flags|=2048,Wn(9,ll(),Xg.bind(null,l,a),null)),[i,s,e]}function Xg(e,t){e.action=t}function uf(e){var t=et(),a=He;if(a!==null)return cf(t,a,e);et(),t=t.memoizedState,a=et();var i=a.queue.dispatch;return a.memoizedState=e,[t,i,!1]}function Wn(e,t,a,i){return e={tag:e,create:a,deps:i,inst:t,next:null},t=Ae.updateQueue,t===null&&(t=co(),Ae.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,t.lastEffect=e),e}function ll(){return{destroy:void 0,resource:void 0}}function df(){return et().memoizedState}function sl(e,t,a,i){var l=yt();i=i===void 0?null:i,Ae.flags|=e,l.memoizedState=Wn(1|t,ll(),a,i)}function Vi(e,t,a,i){var l=et();i=i===void 0?null:i;var s=l.memoizedState.inst;He!==null&&i!==null&&io(i,He.memoizedState.deps)?l.memoizedState=Wn(t,s,a,i):(Ae.flags|=e,l.memoizedState=Wn(1|t,s,a,i))}function ff(e,t){sl(8390656,8,e,t)}function mf(e,t){Vi(2048,8,e,t)}function pf(e,t){return Vi(4,2,e,t)}function hf(e,t){return Vi(4,4,e,t)}function gf(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xf(e,t,a){a=a!=null?a.concat([e]):null,Vi(4,4,gf.bind(null,t,e),a)}function go(){}function bf(e,t){var a=et();t=t===void 0?null:t;var i=a.memoizedState;return t!==null&&io(t,i[1])?i[0]:(a.memoizedState=[e,t],e)}function yf(e,t){var a=et();t=t===void 0?null:t;var i=a.memoizedState;if(t!==null&&io(t,i[1]))return i[0];if(i=e(),bn){ka(!0);try{e()}finally{ka(!1)}}return a.memoizedState=[i,t],i}function xo(e,t,a){return a===void 0||(La&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=j0(),Ae.lanes|=e,Xa|=e,a)}function vf(e,t,a,i){return Nt(a,t)?a:Vn.current!==null?(e=xo(e,a,i),Nt(e,t)||(it=!0),e):(La&42)===0?(it=!0,e.memoizedState=a):(e=j0(),Ae.lanes|=e,Xa|=e,t)}function wf(e,t,a,i,l){var s=H.p;H.p=s!==0&&8>s?s:8;var m=E.T,g={};E.T=g,vo(e,!1,t,a);try{var j=l(),L=E.S;if(L!==null&&L(g,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var X=_g(j,i);Gi(e,t,X,zt(e))}else Gi(e,t,i,zt(e))}catch(Q){Gi(e,t,{then:function(){},status:"rejected",reason:Q},zt())}finally{H.p=s,E.T=m}}function Fg(){}function bo(e,t,a,i){if(e.tag!==5)throw Error(c(476));var l=jf(e).queue;wf(e,l,t,re,a===null?Fg:function(){return Sf(e),a(i)})}function jf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:re,baseState:re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:re},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Sf(e){var t=jf(e).next.queue;Gi(e,t,{},zt())}function yo(){return dt(dr)}function Cf(){return et().memoizedState}function Nf(){return et().memoizedState}function Ig(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=zt();e=Oa(a);var i=Ba(t,e,a);i!==null&&(Rt(i,t,a),qi(i,t,a)),t={cache:Qs()},e.payload=t;return}t=t.return}}function Vg(e,t,a){var i=zt();a={lane:i,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ol(e)?Af(t,a):(a=Us(e,t,a,i),a!==null&&(Rt(a,e,i),Tf(a,t,i)))}function Ef(e,t,a){var i=zt();Gi(e,t,a,i)}function Gi(e,t,a,i){var l={lane:i,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ol(e))Af(t,l);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var m=t.lastRenderedState,g=s(m,a);if(l.hasEagerState=!0,l.eagerState=g,Nt(g,m))return Ir(e,t,l,0),Fe===null&&Fr(),!1}catch{}finally{}if(a=Us(e,t,l,i),a!==null)return Rt(a,e,i),Tf(a,t,i),!0}return!1}function vo(e,t,a,i){if(i={lane:2,revertLane:$o(),action:i,hasEagerState:!1,eagerState:null,next:null},ol(e)){if(t)throw Error(c(479))}else t=Us(e,a,i,2),t!==null&&Rt(t,e,2)}function ol(e){var t=e.alternate;return e===Ae||t!==null&&t===Ae}function Af(e,t){Gn=al=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Tf(e,t,a){if((a&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,Bu(e,a)}}var cl={readContext:dt,use:il,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke},kf={readContext:dt,use:il,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:dt,useEffect:ff,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,sl(4194308,4,gf.bind(null,t,e),a)},useLayoutEffect:function(e,t){return sl(4194308,4,e,t)},useInsertionEffect:function(e,t){sl(4,2,e,t)},useMemo:function(e,t){var a=yt();t=t===void 0?null:t;var i=e();if(bn){ka(!0);try{e()}finally{ka(!1)}}return a.memoizedState=[i,t],i},useReducer:function(e,t,a){var i=yt();if(a!==void 0){var l=a(t);if(bn){ka(!0);try{a(t)}finally{ka(!1)}}}else l=t;return i.memoizedState=i.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=Vg.bind(null,Ae,e),[i.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:function(e){e=po(e);var t=e.queue,a=Ef.bind(null,Ae,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:go,useDeferredValue:function(e,t){var a=yt();return xo(a,e,t)},useTransition:function(){var e=po(!1);return e=wf.bind(null,Ae,e.queue,!0,!1),yt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var i=Ae,l=yt();if(Ye){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),Fe===null)throw Error(c(349));(Be&124)!==0||Wd(i,t,a)}l.memoizedState=a;var s={value:a,getSnapshot:t};return l.queue=s,ff(Kd.bind(null,i,s,e),[e]),i.flags|=2048,Wn(9,ll(),Zd.bind(null,i,s,a,t),null),a},useId:function(){var e=yt(),t=Fe.identifierPrefix;if(Ye){var a=ua,i=ca;a=(i&~(1<<32-Ct(i)-1)).toString(32)+a,t="«"+t+"R"+a,a=nl++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=Hg++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:yo,useFormState:sf,useActionState:sf,useOptimistic:function(e){var t=yt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=vo.bind(null,Ae,!0,a),a.dispatch=t,[e,t]},useMemoCache:uo,useCacheRefresh:function(){return yt().memoizedState=Ig.bind(null,Ae)}},zf={readContext:dt,use:il,useCallback:bf,useContext:dt,useEffect:mf,useImperativeHandle:xf,useInsertionEffect:pf,useLayoutEffect:hf,useMemo:yf,useReducer:rl,useRef:df,useState:function(){return rl(ma)},useDebugValue:go,useDeferredValue:function(e,t){var a=et();return vf(a,He.memoizedState,e,t)},useTransition:function(){var e=rl(ma)[0],t=et().memoizedState;return[typeof e=="boolean"?e:Ii(e),t]},useSyncExternalStore:Qd,useId:Cf,useHostTransitionStatus:yo,useFormState:of,useActionState:of,useOptimistic:function(e,t){var a=et();return ef(a,He,e,t)},useMemoCache:uo,useCacheRefresh:Nf},Gg={readContext:dt,use:il,useCallback:bf,useContext:dt,useEffect:mf,useImperativeHandle:xf,useInsertionEffect:pf,useLayoutEffect:hf,useMemo:yf,useReducer:mo,useRef:df,useState:function(){return mo(ma)},useDebugValue:go,useDeferredValue:function(e,t){var a=et();return He===null?xo(a,e,t):vf(a,He.memoizedState,e,t)},useTransition:function(){var e=mo(ma)[0],t=et().memoizedState;return[typeof e=="boolean"?e:Ii(e),t]},useSyncExternalStore:Qd,useId:Cf,useHostTransitionStatus:yo,useFormState:uf,useActionState:uf,useOptimistic:function(e,t){var a=et();return He!==null?ef(a,He,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:uo,useCacheRefresh:Nf},Zn=null,Qi=0;function ul(e){var t=Qi;return Qi+=1,Zn===null&&(Zn=[]),Hd(Zn,e,t)}function Wi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function dl(e,t){throw t.$$typeof===z?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Rf(e){var t=e._init;return t(e._payload)}function Mf(e){function t(T,N){if(e){var O=T.deletions;O===null?(T.deletions=[N],T.flags|=16):O.push(N)}}function a(T,N){if(!e)return null;for(;N!==null;)t(T,N),N=N.sibling;return null}function i(T){for(var N=new Map;T!==null;)T.key!==null?N.set(T.key,T):N.set(T.index,T),T=T.sibling;return N}function l(T,N){return T=oa(T,N),T.index=0,T.sibling=null,T}function s(T,N,O){return T.index=O,e?(O=T.alternate,O!==null?(O=O.index,O<N?(T.flags|=67108866,N):O):(T.flags|=67108866,N)):(T.flags|=1048576,N)}function m(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function g(T,N,O,G){return N===null||N.tag!==6?(N=Hs(O,T.mode,G),N.return=T,N):(N=l(N,O),N.return=T,N)}function j(T,N,O,G){var de=O.type;return de===k?X(T,N,O.props.children,G,O.key):N!==null&&(N.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===se&&Rf(de)===N.type)?(N=l(N,O.props),Wi(N,O),N.return=T,N):(N=Gr(O.type,O.key,O.props,null,T.mode,G),Wi(N,O),N.return=T,N)}function L(T,N,O,G){return N===null||N.tag!==4||N.stateNode.containerInfo!==O.containerInfo||N.stateNode.implementation!==O.implementation?(N=qs(O,T.mode,G),N.return=T,N):(N=l(N,O.children||[]),N.return=T,N)}function X(T,N,O,G,de){return N===null||N.tag!==7?(N=un(O,T.mode,G,de),N.return=T,N):(N=l(N,O),N.return=T,N)}function Q(T,N,O){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=Hs(""+N,T.mode,O),N.return=T,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case S:return O=Gr(N.type,N.key,N.props,null,T.mode,O),Wi(O,N),O.return=T,O;case M:return N=qs(N,T.mode,O),N.return=T,N;case se:var G=N._init;return N=G(N._payload),Q(T,N,O)}if(ce(N)||oe(N))return N=un(N,T.mode,O,null),N.return=T,N;if(typeof N.then=="function")return Q(T,ul(N),O);if(N.$$typeof===I)return Q(T,Kr(T,N),O);dl(T,N)}return null}function U(T,N,O,G){var de=N!==null?N.key:null;if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return de!==null?null:g(T,N,""+O,G);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case S:return O.key===de?j(T,N,O,G):null;case M:return O.key===de?L(T,N,O,G):null;case se:return de=O._init,O=de(O._payload),U(T,N,O,G)}if(ce(O)||oe(O))return de!==null?null:X(T,N,O,G,null);if(typeof O.then=="function")return U(T,N,ul(O),G);if(O.$$typeof===I)return U(T,N,Kr(T,O),G);dl(T,O)}return null}function _(T,N,O,G,de){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return T=T.get(O)||null,g(N,T,""+G,de);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case S:return T=T.get(G.key===null?O:G.key)||null,j(N,T,G,de);case M:return T=T.get(G.key===null?O:G.key)||null,L(N,T,G,de);case se:var Te=G._init;return G=Te(G._payload),_(T,N,O,G,de)}if(ce(G)||oe(G))return T=T.get(O)||null,X(N,T,G,de,null);if(typeof G.then=="function")return _(T,N,O,ul(G),de);if(G.$$typeof===I)return _(T,N,O,Kr(N,G),de);dl(N,G)}return null}function je(T,N,O,G){for(var de=null,Te=null,pe=N,ve=N=0,lt=null;pe!==null&&ve<O.length;ve++){pe.index>ve?(lt=pe,pe=null):lt=pe.sibling;var Le=U(T,pe,O[ve],G);if(Le===null){pe===null&&(pe=lt);break}e&&pe&&Le.alternate===null&&t(T,pe),N=s(Le,N,ve),Te===null?de=Le:Te.sibling=Le,Te=Le,pe=lt}if(ve===O.length)return a(T,pe),Ye&&fn(T,ve),de;if(pe===null){for(;ve<O.length;ve++)pe=Q(T,O[ve],G),pe!==null&&(N=s(pe,N,ve),Te===null?de=pe:Te.sibling=pe,Te=pe);return Ye&&fn(T,ve),de}for(pe=i(pe);ve<O.length;ve++)lt=_(pe,T,ve,O[ve],G),lt!==null&&(e&&lt.alternate!==null&&pe.delete(lt.key===null?ve:lt.key),N=s(lt,N,ve),Te===null?de=lt:Te.sibling=lt,Te=lt);return e&&pe.forEach(function($a){return t(T,$a)}),Ye&&fn(T,ve),de}function ye(T,N,O,G){if(O==null)throw Error(c(151));for(var de=null,Te=null,pe=N,ve=N=0,lt=null,Le=O.next();pe!==null&&!Le.done;ve++,Le=O.next()){pe.index>ve?(lt=pe,pe=null):lt=pe.sibling;var $a=U(T,pe,Le.value,G);if($a===null){pe===null&&(pe=lt);break}e&&pe&&$a.alternate===null&&t(T,pe),N=s($a,N,ve),Te===null?de=$a:Te.sibling=$a,Te=$a,pe=lt}if(Le.done)return a(T,pe),Ye&&fn(T,ve),de;if(pe===null){for(;!Le.done;ve++,Le=O.next())Le=Q(T,Le.value,G),Le!==null&&(N=s(Le,N,ve),Te===null?de=Le:Te.sibling=Le,Te=Le);return Ye&&fn(T,ve),de}for(pe=i(pe);!Le.done;ve++,Le=O.next())Le=_(pe,T,ve,Le.value,G),Le!==null&&(e&&Le.alternate!==null&&pe.delete(Le.key===null?ve:Le.key),N=s(Le,N,ve),Te===null?de=Le:Te.sibling=Le,Te=Le);return e&&pe.forEach(function(Q1){return t(T,Q1)}),Ye&&fn(T,ve),de}function Pe(T,N,O,G){if(typeof O=="object"&&O!==null&&O.type===k&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case S:e:{for(var de=O.key;N!==null;){if(N.key===de){if(de=O.type,de===k){if(N.tag===7){a(T,N.sibling),G=l(N,O.props.children),G.return=T,T=G;break e}}else if(N.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===se&&Rf(de)===N.type){a(T,N.sibling),G=l(N,O.props),Wi(G,O),G.return=T,T=G;break e}a(T,N);break}else t(T,N);N=N.sibling}O.type===k?(G=un(O.props.children,T.mode,G,O.key),G.return=T,T=G):(G=Gr(O.type,O.key,O.props,null,T.mode,G),Wi(G,O),G.return=T,T=G)}return m(T);case M:e:{for(de=O.key;N!==null;){if(N.key===de)if(N.tag===4&&N.stateNode.containerInfo===O.containerInfo&&N.stateNode.implementation===O.implementation){a(T,N.sibling),G=l(N,O.children||[]),G.return=T,T=G;break e}else{a(T,N);break}else t(T,N);N=N.sibling}G=qs(O,T.mode,G),G.return=T,T=G}return m(T);case se:return de=O._init,O=de(O._payload),Pe(T,N,O,G)}if(ce(O))return je(T,N,O,G);if(oe(O)){if(de=oe(O),typeof de!="function")throw Error(c(150));return O=de.call(O),ye(T,N,O,G)}if(typeof O.then=="function")return Pe(T,N,ul(O),G);if(O.$$typeof===I)return Pe(T,N,Kr(T,O),G);dl(T,O)}return typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint"?(O=""+O,N!==null&&N.tag===6?(a(T,N.sibling),G=l(N,O),G.return=T,T=G):(a(T,N),G=Hs(O,T.mode,G),G.return=T,T=G),m(T)):a(T,N)}return function(T,N,O,G){try{Qi=0;var de=Pe(T,N,O,G);return Zn=null,de}catch(pe){if(pe===_i||pe===Jr)throw pe;var Te=Et(29,pe,null,T.mode);return Te.lanes=G,Te.return=T,Te}finally{}}}var Kn=Mf(!0),Df=Mf(!1),Ht=q(null),$t=null;function Ya(e){var t=e.alternate;$(at,at.current&1),$(Ht,e),$t===null&&(t===null||Vn.current!==null||t.memoizedState!==null)&&($t=e)}function Of(e){if(e.tag===22){if($(at,at.current),$(Ht,e),$t===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&($t=e)}}else Ua()}function Ua(){$(at,at.current),$(Ht,Ht.current)}function pa(e){V(Ht),$t===e&&($t=null),V(at)}var at=q(0);function fl(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||uc(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function wo(e,t,a,i){t=e.memoizedState,a=a(i,t),a=a==null?t:v({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var jo={enqueueSetState:function(e,t,a){e=e._reactInternals;var i=zt(),l=Oa(i);l.payload=t,a!=null&&(l.callback=a),t=Ba(e,l,i),t!==null&&(Rt(t,e,i),qi(t,e,i))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var i=zt(),l=Oa(i);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=Ba(e,l,i),t!==null&&(Rt(t,e,i),qi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=zt(),i=Oa(a);i.tag=2,t!=null&&(i.callback=t),t=Ba(e,i,a),t!==null&&(Rt(t,e,a),qi(t,e,a))}};function Bf(e,t,a,i,l,s,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,m):t.prototype&&t.prototype.isPureReactComponent?!Ri(a,i)||!Ri(l,s):!0}function Lf(e,t,a,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,i),t.state!==e&&jo.enqueueReplaceState(t,t.state,null)}function yn(e,t){var a=t;if("ref"in t){a={};for(var i in t)i!=="ref"&&(a[i]=t[i])}if(e=e.defaultProps){a===t&&(a=v({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}var ml=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Yf(e){ml(e)}function Uf(e){console.error(e)}function _f(e){ml(e)}function pl(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Hf(e,t,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function So(e,t,a){return a=Oa(a),a.tag=3,a.payload={element:null},a.callback=function(){pl(e,t)},a}function qf(e){return e=Oa(e),e.tag=3,e}function Pf(e,t,a,i){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var s=i.value;e.payload=function(){return l(s)},e.callback=function(){Hf(t,a,i)}}var m=a.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){Hf(t,a,i),typeof l!="function"&&(Fa===null?Fa=new Set([this]):Fa.add(this));var g=i.stack;this.componentDidCatch(i.value,{componentStack:g!==null?g:""})})}function Qg(e,t,a,i,l){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=a.alternate,t!==null&&Li(t,a,l,!0),a=Ht.current,a!==null){switch(a.tag){case 13:return $t===null?Go():a.alternate===null&&Ze===0&&(Ze=3),a.flags&=-257,a.flags|=65536,a.lanes=l,i===Ks?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([i]):t.add(i),Wo(e,i,l)),!1;case 22:return a.flags|=65536,i===Ks?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([i]):a.add(i)),Wo(e,i,l)),!1}throw Error(c(435,a.tag))}return Wo(e,i,l),Go(),!1}if(Ye)return t=Ht.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,i!==Fs&&(e=Error(c(422),{cause:i}),Bi(Lt(e,a)))):(i!==Fs&&(t=Error(c(423),{cause:i}),Bi(Lt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,i=Lt(i,a),l=So(e.stateNode,i,l),eo(e,l),Ze!==4&&(Ze=2)),!1;var s=Error(c(520),{cause:i});if(s=Lt(s,a),ar===null?ar=[s]:ar.push(s),Ze!==4&&(Ze=2),t===null)return!0;i=Lt(i,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=So(a.stateNode,i,e),eo(a,e),!1;case 1:if(t=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Fa===null||!Fa.has(s))))return a.flags|=65536,l&=-l,a.lanes|=l,l=qf(l),Pf(l,e,a,i),eo(a,l),!1}a=a.return}while(a!==null);return!1}var Xf=Error(c(461)),it=!1;function st(e,t,a,i){t.child=e===null?Df(t,null,a,i):Kn(t,e.child,a,i)}function Ff(e,t,a,i,l){a=a.render;var s=t.ref;if("ref"in i){var m={};for(var g in i)g!=="ref"&&(m[g]=i[g])}else m=i;return gn(t),i=ro(e,t,a,m,s,l),g=lo(),e!==null&&!it?(so(e,t,l),ha(e,t,l)):(Ye&&g&&Ps(t),t.flags|=1,st(e,t,i,l),t.child)}function If(e,t,a,i,l){if(e===null){var s=a.type;return typeof s=="function"&&!_s(s)&&s.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=s,Vf(e,t,s,i,l)):(e=Gr(a.type,null,i,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Ro(e,l)){var m=s.memoizedProps;if(a=a.compare,a=a!==null?a:Ri,a(m,i)&&e.ref===t.ref)return ha(e,t,l)}return t.flags|=1,e=oa(s,i),e.ref=t.ref,e.return=t,t.child=e}function Vf(e,t,a,i,l){if(e!==null){var s=e.memoizedProps;if(Ri(s,i)&&e.ref===t.ref)if(it=!1,t.pendingProps=i=s,Ro(e,l))(e.flags&131072)!==0&&(it=!0);else return t.lanes=e.lanes,ha(e,t,l)}return Co(e,t,a,i,l)}function Gf(e,t,a){var i=t.pendingProps,l=i.children,s=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if((t.flags&128)!==0){if(i=s!==null?s.baseLanes|a:a,e!==null){for(l=t.child=e.child,s=0;l!==null;)s=s|l.lanes|l.childLanes,l=l.sibling;t.childLanes=s&~i}else t.childLanes=0,t.child=null;return Qf(e,t,i,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&$r(t,s!==null?s.cachePool:null),s!==null?Id(t,s):ao(),Of(t);else return t.lanes=t.childLanes=536870912,Qf(e,t,s!==null?s.baseLanes|a:a,a)}else s!==null?($r(t,s.cachePool),Id(t,s),Ua(),t.memoizedState=null):(e!==null&&$r(t,null),ao(),Ua());return st(e,t,l,a),t.child}function Qf(e,t,a,i){var l=Zs();return l=l===null?null:{parent:tt._currentValue,pool:l},t.memoizedState={baseLanes:a,cachePool:l},e!==null&&$r(t,null),ao(),Of(t),e!==null&&Li(e,t,i,!0),null}function hl(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Co(e,t,a,i,l){return gn(t),a=ro(e,t,a,i,void 0,l),i=lo(),e!==null&&!it?(so(e,t,l),ha(e,t,l)):(Ye&&i&&Ps(t),t.flags|=1,st(e,t,a,l),t.child)}function Wf(e,t,a,i,l,s){return gn(t),t.updateQueue=null,a=Gd(t,i,a,l),Vd(e),i=lo(),e!==null&&!it?(so(e,t,s),ha(e,t,s)):(Ye&&i&&Ps(t),t.flags|=1,st(e,t,a,s),t.child)}function Zf(e,t,a,i,l){if(gn(t),t.stateNode===null){var s=qn,m=a.contextType;typeof m=="object"&&m!==null&&(s=dt(m)),s=new a(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=jo,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},$s(t),m=a.contextType,s.context=typeof m=="object"&&m!==null?dt(m):qn,s.state=t.memoizedState,m=a.getDerivedStateFromProps,typeof m=="function"&&(wo(t,a,m,i),s.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(m=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),m!==s.state&&jo.enqueueReplaceState(s,s.state,null),Xi(t,i,s,l),Pi(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var g=t.memoizedProps,j=yn(a,g);s.props=j;var L=s.context,X=a.contextType;m=qn,typeof X=="object"&&X!==null&&(m=dt(X));var Q=a.getDerivedStateFromProps;X=typeof Q=="function"||typeof s.getSnapshotBeforeUpdate=="function",g=t.pendingProps!==g,X||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(g||L!==m)&&Lf(t,s,i,m),Da=!1;var U=t.memoizedState;s.state=U,Xi(t,i,s,l),Pi(),L=t.memoizedState,g||U!==L||Da?(typeof Q=="function"&&(wo(t,a,Q,i),L=t.memoizedState),(j=Da||Bf(t,a,j,i,U,L,m))?(X||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=L),s.props=i,s.state=L,s.context=m,i=j):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,Js(e,t),m=t.memoizedProps,X=yn(a,m),s.props=X,Q=t.pendingProps,U=s.context,L=a.contextType,j=qn,typeof L=="object"&&L!==null&&(j=dt(L)),g=a.getDerivedStateFromProps,(L=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(m!==Q||U!==j)&&Lf(t,s,i,j),Da=!1,U=t.memoizedState,s.state=U,Xi(t,i,s,l),Pi();var _=t.memoizedState;m!==Q||U!==_||Da||e!==null&&e.dependencies!==null&&Zr(e.dependencies)?(typeof g=="function"&&(wo(t,a,g,i),_=t.memoizedState),(X=Da||Bf(t,a,X,i,U,_,j)||e!==null&&e.dependencies!==null&&Zr(e.dependencies))?(L||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,_,j),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,_,j)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||m===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=_),s.props=i,s.state=_,s.context=j,i=X):(typeof s.componentDidUpdate!="function"||m===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,hl(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=Kn(t,e.child,null,l),t.child=Kn(t,null,a,l)):st(e,t,a,l),t.memoizedState=s.state,e=t.child):e=ha(e,t,l),e}function Kf(e,t,a,i){return Oi(),t.flags|=256,st(e,t,a,i),t.child}var No={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Eo(e){return{baseLanes:e,cachePool:Yd()}}function Ao(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=qt),e}function $f(e,t,a){var i=t.pendingProps,l=!1,s=(t.flags&128)!==0,m;if((m=s)||(m=e!==null&&e.memoizedState===null?!1:(at.current&2)!==0),m&&(l=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ye){if(l?Ya(t):Ua(),Ye){var g=We,j;if(j=g){e:{for(j=g,g=Kt;j.nodeType!==8;){if(!g){g=null;break e}if(j=Vt(j.nextSibling),j===null){g=null;break e}}g=j}g!==null?(t.memoizedState={dehydrated:g,treeContext:dn!==null?{id:ca,overflow:ua}:null,retryLane:536870912,hydrationErrors:null},j=Et(18,null,null,0),j.stateNode=g,j.return=t,t.child=j,ht=t,We=null,j=!0):j=!1}j||pn(t)}if(g=t.memoizedState,g!==null&&(g=g.dehydrated,g!==null))return uc(g)?t.lanes=32:t.lanes=536870912,null;pa(t)}return g=i.children,i=i.fallback,l?(Ua(),l=t.mode,g=gl({mode:"hidden",children:g},l),i=un(i,l,a,null),g.return=t,i.return=t,g.sibling=i,t.child=g,l=t.child,l.memoizedState=Eo(a),l.childLanes=Ao(e,m,a),t.memoizedState=No,i):(Ya(t),To(t,g))}if(j=e.memoizedState,j!==null&&(g=j.dehydrated,g!==null)){if(s)t.flags&256?(Ya(t),t.flags&=-257,t=ko(e,t,a)):t.memoizedState!==null?(Ua(),t.child=e.child,t.flags|=128,t=null):(Ua(),l=i.fallback,g=t.mode,i=gl({mode:"visible",children:i.children},g),l=un(l,g,a,null),l.flags|=2,i.return=t,l.return=t,i.sibling=l,t.child=i,Kn(t,e.child,null,a),i=t.child,i.memoizedState=Eo(a),i.childLanes=Ao(e,m,a),t.memoizedState=No,t=l);else if(Ya(t),uc(g)){if(m=g.nextSibling&&g.nextSibling.dataset,m)var L=m.dgst;m=L,i=Error(c(419)),i.stack="",i.digest=m,Bi({value:i,source:null,stack:null}),t=ko(e,t,a)}else if(it||Li(e,t,a,!1),m=(a&e.childLanes)!==0,it||m){if(m=Fe,m!==null&&(i=a&-a,i=(i&42)!==0?1:us(i),i=(i&(m.suspendedLanes|a))!==0?0:i,i!==0&&i!==j.retryLane))throw j.retryLane=i,Hn(e,i),Rt(m,e,i),Xf;g.data==="$?"||Go(),t=ko(e,t,a)}else g.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=j.treeContext,We=Vt(g.nextSibling),ht=t,Ye=!0,mn=null,Kt=!1,e!==null&&(Ut[_t++]=ca,Ut[_t++]=ua,Ut[_t++]=dn,ca=e.id,ua=e.overflow,dn=t),t=To(t,i.children),t.flags|=4096);return t}return l?(Ua(),l=i.fallback,g=t.mode,j=e.child,L=j.sibling,i=oa(j,{mode:"hidden",children:i.children}),i.subtreeFlags=j.subtreeFlags&65011712,L!==null?l=oa(L,l):(l=un(l,g,a,null),l.flags|=2),l.return=t,i.return=t,i.sibling=l,t.child=i,i=l,l=t.child,g=e.child.memoizedState,g===null?g=Eo(a):(j=g.cachePool,j!==null?(L=tt._currentValue,j=j.parent!==L?{parent:L,pool:L}:j):j=Yd(),g={baseLanes:g.baseLanes|a,cachePool:j}),l.memoizedState=g,l.childLanes=Ao(e,m,a),t.memoizedState=No,i):(Ya(t),a=e.child,e=a.sibling,a=oa(a,{mode:"visible",children:i.children}),a.return=t,a.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=a,t.memoizedState=null,a)}function To(e,t){return t=gl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function gl(e,t){return e=Et(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function ko(e,t,a){return Kn(t,e.child,null,a),e=To(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Jf(e,t,a){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Vs(e.return,t,a)}function zo(e,t,a,i,l){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:l}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=a,s.tailMode=l)}function e0(e,t,a){var i=t.pendingProps,l=i.revealOrder,s=i.tail;if(st(e,t,i.children,a),i=at.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jf(e,a,t);else if(e.tag===19)Jf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch($(at,i),l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&fl(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),zo(t,!1,l,a,s);break;case"backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&fl(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}zo(t,!0,a,null,s);break;case"together":zo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ha(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Xa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Li(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=oa(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=oa(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ro(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Zr(e)))}function Wg(e,t,a){switch(t.tag){case 3:me(t,t.stateNode.containerInfo),Ma(t,tt,e.memoizedState.cache),Oi();break;case 27:case 5:xe(t);break;case 4:me(t,t.stateNode.containerInfo);break;case 10:Ma(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Ya(t),t.flags|=128,null):(a&t.child.childLanes)!==0?$f(e,t,a):(Ya(t),e=ha(e,t,a),e!==null?e.sibling:null);Ya(t);break;case 19:var l=(e.flags&128)!==0;if(i=(a&t.childLanes)!==0,i||(Li(e,t,a,!1),i=(a&t.childLanes)!==0),l){if(i)return e0(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),$(at,at.current),i)break;return null;case 22:case 23:return t.lanes=0,Gf(e,t,a);case 24:Ma(t,tt,e.memoizedState.cache)}return ha(e,t,a)}function t0(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)it=!0;else{if(!Ro(e,a)&&(t.flags&128)===0)return it=!1,Wg(e,t,a);it=(e.flags&131072)!==0}else it=!1,Ye&&(t.flags&1048576)!==0&&zd(t,Wr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var i=t.elementType,l=i._init;if(i=l(i._payload),t.type=i,typeof i=="function")_s(i)?(e=yn(i,e),t.tag=1,t=Zf(null,t,i,e,a)):(t.tag=0,t=Co(null,t,i,e,a));else{if(i!=null){if(l=i.$$typeof,l===J){t.tag=11,t=Ff(null,t,i,e,a);break e}else if(l===B){t.tag=14,t=If(null,t,i,e,a);break e}}throw t=le(i)||i,Error(c(306,t,""))}}return t;case 0:return Co(e,t,t.type,t.pendingProps,a);case 1:return i=t.type,l=yn(i,t.pendingProps),Zf(e,t,i,l,a);case 3:e:{if(me(t,t.stateNode.containerInfo),e===null)throw Error(c(387));i=t.pendingProps;var s=t.memoizedState;l=s.element,Js(e,t),Xi(t,i,null,a);var m=t.memoizedState;if(i=m.cache,Ma(t,tt,i),i!==s.cache&&Gs(t,[tt],a,!0),Pi(),i=m.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Kf(e,t,i,a);break e}else if(i!==l){l=Lt(Error(c(424)),t),Bi(l),t=Kf(e,t,i,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(We=Vt(e.firstChild),ht=t,Ye=!0,mn=null,Kt=!0,a=Df(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Oi(),i===l){t=ha(e,t,a);break e}st(e,t,i,a)}t=t.child}return t;case 26:return hl(e,t),e===null?(a=rm(t.type,null,t.pendingProps,null))?t.memoizedState=a:Ye||(a=t.type,e=t.pendingProps,i=zl(ne.current).createElement(a),i[ut]=t,i[xt]=e,ct(i,a,e),nt(i),t.stateNode=i):t.memoizedState=rm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xe(t),e===null&&Ye&&(i=t.stateNode=am(t.type,t.pendingProps,ne.current),ht=t,Kt=!0,l=We,Ga(t.type)?(dc=l,We=Vt(i.firstChild)):We=l),st(e,t,t.pendingProps.children,a),hl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ye&&((l=i=We)&&(i=S1(i,t.type,t.pendingProps,Kt),i!==null?(t.stateNode=i,ht=t,We=Vt(i.firstChild),Kt=!1,l=!0):l=!1),l||pn(t)),xe(t),l=t.type,s=t.pendingProps,m=e!==null?e.memoizedProps:null,i=s.children,sc(l,s)?i=null:m!==null&&sc(l,m)&&(t.flags|=32),t.memoizedState!==null&&(l=ro(e,t,qg,null,null,a),dr._currentValue=l),hl(e,t),st(e,t,i,a),t.child;case 6:return e===null&&Ye&&((e=a=We)&&(a=C1(a,t.pendingProps,Kt),a!==null?(t.stateNode=a,ht=t,We=null,e=!0):e=!1),e||pn(t)),null;case 13:return $f(e,t,a);case 4:return me(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Kn(t,null,i,a):st(e,t,i,a),t.child;case 11:return Ff(e,t,t.type,t.pendingProps,a);case 7:return st(e,t,t.pendingProps,a),t.child;case 8:return st(e,t,t.pendingProps.children,a),t.child;case 12:return st(e,t,t.pendingProps.children,a),t.child;case 10:return i=t.pendingProps,Ma(t,t.type,i.value),st(e,t,i.children,a),t.child;case 9:return l=t.type._context,i=t.pendingProps.children,gn(t),l=dt(l),i=i(l),t.flags|=1,st(e,t,i,a),t.child;case 14:return If(e,t,t.type,t.pendingProps,a);case 15:return Vf(e,t,t.type,t.pendingProps,a);case 19:return e0(e,t,a);case 31:return i=t.pendingProps,a=t.mode,i={mode:i.mode,children:i.children},e===null?(a=gl(i,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=oa(e.child,i),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return Gf(e,t,a);case 24:return gn(t),i=dt(tt),e===null?(l=Zs(),l===null&&(l=Fe,s=Qs(),l.pooledCache=s,s.refCount++,s!==null&&(l.pooledCacheLanes|=a),l=s),t.memoizedState={parent:i,cache:l},$s(t),Ma(t,tt,l)):((e.lanes&a)!==0&&(Js(e,t),Xi(t,null,null,a),Pi()),l=e.memoizedState,s=t.memoizedState,l.parent!==i?(l={parent:i,cache:i},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Ma(t,tt,i)):(i=s.cache,Ma(t,tt,i),i!==l.cache&&Gs(t,[tt],a,!0))),st(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function ga(e){e.flags|=4}function a0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!um(t)){if(t=Ht.current,t!==null&&((Be&4194048)===Be?$t!==null:(Be&62914560)!==Be&&(Be&536870912)===0||t!==$t))throw Hi=Ks,Ud;e.flags|=8192}}function xl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Du():536870912,e.lanes|=t,ti|=t)}function Zi(e,t){if(!Ye)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=a,t}function Zg(e,t,a){var i=t.pendingProps;switch(Xs(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(t),null;case 1:return Qe(t),null;case 3:return a=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),fa(tt),ae(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Di(t)?ga(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Dd())),Qe(t),null;case 26:return a=t.memoizedState,e===null?(ga(t),a!==null?(Qe(t),a0(t,a)):(Qe(t),t.flags&=-16777217)):a?a!==e.memoizedState?(ga(t),Qe(t),a0(t,a)):(Qe(t),t.flags&=-16777217):(e.memoizedProps!==i&&ga(t),Qe(t),t.flags&=-16777217),null;case 27:De(t),a=ne.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ga(t);else{if(!i){if(t.stateNode===null)throw Error(c(166));return Qe(t),null}e=A.current,Di(t)?Rd(t):(e=am(l,i,a),t.stateNode=e,ga(t))}return Qe(t),null;case 5:if(De(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ga(t);else{if(!i){if(t.stateNode===null)throw Error(c(166));return Qe(t),null}if(e=A.current,Di(t))Rd(t);else{switch(l=zl(ne.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?l.createElement("select",{is:i.is}):l.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?l.createElement(a,{is:i.is}):l.createElement(a)}}e[ut]=t,e[xt]=i;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(ct(e,a,i),a){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&ga(t)}}return Qe(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&ga(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(c(166));if(e=ne.current,Di(t)){if(e=t.stateNode,a=t.memoizedProps,i=null,l=ht,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}e[ut]=t,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||W0(e.nodeValue,a)),e||pn(t)}else e=zl(e).createTextNode(i),e[ut]=t,t.stateNode=e}return Qe(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Di(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[ut]=t}else Oi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Qe(t),l=!1}else l=Dd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(pa(t),t):(pa(t),null)}if(pa(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=i!==null,e=e!==null&&e.memoizedState!==null,a){i=t.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool);var s=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==l&&(i.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),xl(t,t.updateQueue),Qe(t),null;case 4:return ae(),e===null&&ac(t.stateNode.containerInfo),Qe(t),null;case 10:return fa(t.type),Qe(t),null;case 19:if(V(at),l=t.memoizedState,l===null)return Qe(t),null;if(i=(t.flags&128)!==0,s=l.rendering,s===null)if(i)Zi(l,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=fl(e),s!==null){for(t.flags|=128,Zi(l,!1),e=s.updateQueue,t.updateQueue=e,xl(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)kd(a,e),a=a.sibling;return $(at,at.current&1|2),t.child}e=e.sibling}l.tail!==null&&ue()>vl&&(t.flags|=128,i=!0,Zi(l,!1),t.lanes=4194304)}else{if(!i)if(e=fl(s),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,xl(t,e),Zi(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!Ye)return Qe(t),null}else 2*ue()-l.renderingStartTime>vl&&a!==536870912&&(t.flags|=128,i=!0,Zi(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(e=l.last,e!==null?e.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ue(),t.sibling=null,e=at.current,$(at,i?e&1|2:e&1),t):(Qe(t),null);case 22:case 23:return pa(t),no(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(a&536870912)!==0&&(t.flags&128)===0&&(Qe(t),t.subtreeFlags&6&&(t.flags|=8192)):Qe(t),a=t.updateQueue,a!==null&&xl(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==a&&(t.flags|=2048),e!==null&&V(xn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),fa(tt),Qe(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function Kg(e,t){switch(Xs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fa(tt),ae(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return De(t),null;case 13:if(pa(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Oi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(at),null;case 4:return ae(),null;case 10:return fa(t.type),null;case 22:case 23:return pa(t),no(),e!==null&&V(xn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return fa(tt),null;case 25:return null;default:return null}}function n0(e,t){switch(Xs(t),t.tag){case 3:fa(tt),ae();break;case 26:case 27:case 5:De(t);break;case 4:ae();break;case 13:pa(t);break;case 19:V(at);break;case 10:fa(t.type);break;case 22:case 23:pa(t),no(),e!==null&&V(xn);break;case 24:fa(tt)}}function Ki(e,t){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&e)===e){i=void 0;var s=a.create,m=a.inst;i=s(),m.destroy=i}a=a.next}while(a!==l)}}catch(g){Xe(t,t.return,g)}}function _a(e,t,a){try{var i=t.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var s=l.next;i=s;do{if((i.tag&e)===e){var m=i.inst,g=m.destroy;if(g!==void 0){m.destroy=void 0,l=t;var j=a,L=g;try{L()}catch(X){Xe(l,j,X)}}}i=i.next}while(i!==s)}}catch(X){Xe(t,t.return,X)}}function i0(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Fd(t,a)}catch(i){Xe(e,e.return,i)}}}function r0(e,t,a){a.props=yn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){Xe(e,t,i)}}function $i(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(l){Xe(e,t,l)}}function Jt(e,t){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(l){Xe(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Xe(e,t,l)}else a.current=null}function l0(e){var t=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(l){Xe(e,e.return,l)}}function Mo(e,t,a){try{var i=e.stateNode;b1(i,e.type,a,t),i[xt]=t}catch(l){Xe(e,e.return,l)}}function s0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ga(e.type)||e.tag===4}function Do(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||s0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ga(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oo(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=kl));else if(i!==4&&(i===27&&Ga(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Oo(e,t,a),e=e.sibling;e!==null;)Oo(e,t,a),e=e.sibling}function bl(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(i!==4&&(i===27&&Ga(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(bl(e,t,a),e=e.sibling;e!==null;)bl(e,t,a),e=e.sibling}function o0(e){var t=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);ct(t,i,a),t[ut]=e,t[xt]=a}catch(s){Xe(e,e.return,s)}}var xa=!1,$e=!1,Bo=!1,c0=typeof WeakSet=="function"?WeakSet:Set,rt=null;function $g(e,t){if(e=e.containerInfo,rc=Ll,e=yd(e),Ms(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var l=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var m=0,g=-1,j=-1,L=0,X=0,Q=e,U=null;t:for(;;){for(var _;Q!==a||l!==0&&Q.nodeType!==3||(g=m+l),Q!==s||i!==0&&Q.nodeType!==3||(j=m+i),Q.nodeType===3&&(m+=Q.nodeValue.length),(_=Q.firstChild)!==null;)U=Q,Q=_;for(;;){if(Q===e)break t;if(U===a&&++L===l&&(g=m),U===s&&++X===i&&(j=m),(_=Q.nextSibling)!==null)break;Q=U,U=Q.parentNode}Q=_}a=g===-1||j===-1?null:{start:g,end:j}}else a=null}a=a||{start:0,end:0}}else a=null;for(lc={focusedElem:e,selectionRange:a},Ll=!1,rt=t;rt!==null;)if(t=rt,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,rt=e;else for(;rt!==null;){switch(t=rt,s=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,a=t,l=s.memoizedProps,s=s.memoizedState,i=a.stateNode;try{var je=yn(a.type,l,a.elementType===a.type);e=i.getSnapshotBeforeUpdate(je,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(ye){Xe(a,a.return,ye)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)cc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":cc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,rt=e;break}rt=t.return}}function u0(e,t,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:Ha(e,a),i&4&&Ki(5,a);break;case 1:if(Ha(e,a),i&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(m){Xe(a,a.return,m)}else{var l=yn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Xe(a,a.return,m)}}i&64&&i0(a),i&512&&$i(a,a.return);break;case 3:if(Ha(e,a),i&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Fd(e,t)}catch(m){Xe(a,a.return,m)}}break;case 27:t===null&&i&4&&o0(a);case 26:case 5:Ha(e,a),t===null&&i&4&&l0(a),i&512&&$i(a,a.return);break;case 12:Ha(e,a);break;case 13:Ha(e,a),i&4&&m0(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=s1.bind(null,a),N1(e,a))));break;case 22:if(i=a.memoizedState!==null||xa,!i){t=t!==null&&t.memoizedState!==null||$e,l=xa;var s=$e;xa=i,($e=t)&&!s?qa(e,a,(a.subtreeFlags&8772)!==0):Ha(e,a),xa=l,$e=s}break;case 30:break;default:Ha(e,a)}}function d0(e){var t=e.alternate;t!==null&&(e.alternate=null,d0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ms(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ve=null,vt=!1;function ba(e,t,a){for(a=a.child;a!==null;)f0(e,t,a),a=a.sibling}function f0(e,t,a){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(yi,a)}catch{}switch(a.tag){case 26:$e||Jt(a,t),ba(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:$e||Jt(a,t);var i=Ve,l=vt;Ga(a.type)&&(Ve=a.stateNode,vt=!1),ba(e,t,a),sr(a.stateNode),Ve=i,vt=l;break;case 5:$e||Jt(a,t);case 6:if(i=Ve,l=vt,Ve=null,ba(e,t,a),Ve=i,vt=l,Ve!==null)if(vt)try{(Ve.nodeType===9?Ve.body:Ve.nodeName==="HTML"?Ve.ownerDocument.body:Ve).removeChild(a.stateNode)}catch(s){Xe(a,t,s)}else try{Ve.removeChild(a.stateNode)}catch(s){Xe(a,t,s)}break;case 18:Ve!==null&&(vt?(e=Ve,em(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),hr(e)):em(Ve,a.stateNode));break;case 4:i=Ve,l=vt,Ve=a.stateNode.containerInfo,vt=!0,ba(e,t,a),Ve=i,vt=l;break;case 0:case 11:case 14:case 15:$e||_a(2,a,t),$e||_a(4,a,t),ba(e,t,a);break;case 1:$e||(Jt(a,t),i=a.stateNode,typeof i.componentWillUnmount=="function"&&r0(a,t,i)),ba(e,t,a);break;case 21:ba(e,t,a);break;case 22:$e=(i=$e)||a.memoizedState!==null,ba(e,t,a),$e=i;break;default:ba(e,t,a)}}function m0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{hr(e)}catch(a){Xe(t,t.return,a)}}function Jg(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new c0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new c0),t;default:throw Error(c(435,e.tag))}}function Lo(e,t){var a=Jg(e);t.forEach(function(i){var l=o1.bind(null,e,i);a.has(i)||(a.add(i),i.then(l,l))})}function At(e,t){var a=t.deletions;if(a!==null)for(var i=0;i<a.length;i++){var l=a[i],s=e,m=t,g=m;e:for(;g!==null;){switch(g.tag){case 27:if(Ga(g.type)){Ve=g.stateNode,vt=!1;break e}break;case 5:Ve=g.stateNode,vt=!1;break e;case 3:case 4:Ve=g.stateNode.containerInfo,vt=!0;break e}g=g.return}if(Ve===null)throw Error(c(160));f0(s,m,l),Ve=null,vt=!1,s=l.alternate,s!==null&&(s.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)p0(t,e),t=t.sibling}var It=null;function p0(e,t){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:At(t,e),Tt(e),i&4&&(_a(3,e,e.return),Ki(3,e),_a(5,e,e.return));break;case 1:At(t,e),Tt(e),i&512&&($e||a===null||Jt(a,a.return)),i&64&&xa&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var l=It;if(At(t,e),Tt(e),i&512&&($e||a===null||Jt(a,a.return)),i&4){var s=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(i){case"title":s=l.getElementsByTagName("title")[0],(!s||s[ji]||s[ut]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=l.createElement(i),l.head.insertBefore(s,l.querySelector("head > title"))),ct(s,i,a),s[ut]=e,nt(s),i=s;break e;case"link":var m=om("link","href",l).get(i+(a.href||""));if(m){for(var g=0;g<m.length;g++)if(s=m[g],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){m.splice(g,1);break t}}s=l.createElement(i),ct(s,i,a),l.head.appendChild(s);break;case"meta":if(m=om("meta","content",l).get(i+(a.content||""))){for(g=0;g<m.length;g++)if(s=m[g],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){m.splice(g,1);break t}}s=l.createElement(i),ct(s,i,a),l.head.appendChild(s);break;default:throw Error(c(468,i))}s[ut]=e,nt(s),i=s}e.stateNode=i}else cm(l,e.type,e.stateNode);else e.stateNode=sm(l,i,e.memoizedProps);else s!==i?(s===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):s.count--,i===null?cm(l,e.type,e.stateNode):sm(l,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Mo(e,e.memoizedProps,a.memoizedProps)}break;case 27:At(t,e),Tt(e),i&512&&($e||a===null||Jt(a,a.return)),a!==null&&i&4&&Mo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(At(t,e),Tt(e),i&512&&($e||a===null||Jt(a,a.return)),e.flags&32){l=e.stateNode;try{Dn(l,"")}catch(_){Xe(e,e.return,_)}}i&4&&e.stateNode!=null&&(l=e.memoizedProps,Mo(e,l,a!==null?a.memoizedProps:l)),i&1024&&(Bo=!0);break;case 6:if(At(t,e),Tt(e),i&4){if(e.stateNode===null)throw Error(c(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(_){Xe(e,e.return,_)}}break;case 3:if(Dl=null,l=It,It=Rl(t.containerInfo),At(t,e),It=l,Tt(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{hr(t.containerInfo)}catch(_){Xe(e,e.return,_)}Bo&&(Bo=!1,h0(e));break;case 4:i=It,It=Rl(e.stateNode.containerInfo),At(t,e),Tt(e),It=i;break;case 12:At(t,e),Tt(e);break;case 13:At(t,e),Tt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Po=ue()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Lo(e,i)));break;case 22:l=e.memoizedState!==null;var j=a!==null&&a.memoizedState!==null,L=xa,X=$e;if(xa=L||l,$e=X||j,At(t,e),$e=X,xa=L,Tt(e),i&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||j||xa||$e||vn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){j=a=t;try{if(s=j.stateNode,l)m=s.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{g=j.stateNode;var Q=j.memoizedProps.style,U=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;g.style.display=U==null||typeof U=="boolean"?"":(""+U).trim()}}catch(_){Xe(j,j.return,_)}}}else if(t.tag===6){if(a===null){j=t;try{j.stateNode.nodeValue=l?"":j.memoizedProps}catch(_){Xe(j,j.return,_)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,Lo(e,a))));break;case 19:At(t,e),Tt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Lo(e,i)));break;case 30:break;case 21:break;default:At(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{for(var a,i=e.return;i!==null;){if(s0(i)){a=i;break}i=i.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var l=a.stateNode,s=Do(e);bl(e,s,l);break;case 5:var m=a.stateNode;a.flags&32&&(Dn(m,""),a.flags&=-33);var g=Do(e);bl(e,g,m);break;case 3:case 4:var j=a.stateNode.containerInfo,L=Do(e);Oo(e,L,j);break;default:throw Error(c(161))}}catch(X){Xe(e,e.return,X)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function h0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;h0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ha(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)u0(e,t.alternate,t),t=t.sibling}function vn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:_a(4,t,t.return),vn(t);break;case 1:Jt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&r0(t,t.return,a),vn(t);break;case 27:sr(t.stateNode);case 26:case 5:Jt(t,t.return),vn(t);break;case 22:t.memoizedState===null&&vn(t);break;case 30:vn(t);break;default:vn(t)}e=e.sibling}}function qa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,l=e,s=t,m=s.flags;switch(s.tag){case 0:case 11:case 15:qa(l,s,a),Ki(4,s);break;case 1:if(qa(l,s,a),i=s,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(L){Xe(i,i.return,L)}if(i=s,l=i.updateQueue,l!==null){var g=i.stateNode;try{var j=l.shared.hiddenCallbacks;if(j!==null)for(l.shared.hiddenCallbacks=null,l=0;l<j.length;l++)Xd(j[l],g)}catch(L){Xe(i,i.return,L)}}a&&m&64&&i0(s),$i(s,s.return);break;case 27:o0(s);case 26:case 5:qa(l,s,a),a&&i===null&&m&4&&l0(s),$i(s,s.return);break;case 12:qa(l,s,a);break;case 13:qa(l,s,a),a&&m&4&&m0(l,s);break;case 22:s.memoizedState===null&&qa(l,s,a),$i(s,s.return);break;case 30:break;default:qa(l,s,a)}t=t.sibling}}function Yo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Yi(a))}function Uo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yi(e))}function ea(e,t,a,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)g0(e,t,a,i),t=t.sibling}function g0(e,t,a,i){var l=t.flags;switch(t.tag){case 0:case 11:case 15:ea(e,t,a,i),l&2048&&Ki(9,t);break;case 1:ea(e,t,a,i);break;case 3:ea(e,t,a,i),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yi(e)));break;case 12:if(l&2048){ea(e,t,a,i),e=t.stateNode;try{var s=t.memoizedProps,m=s.id,g=s.onPostCommit;typeof g=="function"&&g(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(j){Xe(t,t.return,j)}}else ea(e,t,a,i);break;case 13:ea(e,t,a,i);break;case 23:break;case 22:s=t.stateNode,m=t.alternate,t.memoizedState!==null?s._visibility&2?ea(e,t,a,i):Ji(e,t):s._visibility&2?ea(e,t,a,i):(s._visibility|=2,$n(e,t,a,i,(t.subtreeFlags&10256)!==0)),l&2048&&Yo(m,t);break;case 24:ea(e,t,a,i),l&2048&&Uo(t.alternate,t);break;default:ea(e,t,a,i)}}function $n(e,t,a,i,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var s=e,m=t,g=a,j=i,L=m.flags;switch(m.tag){case 0:case 11:case 15:$n(s,m,g,j,l),Ki(8,m);break;case 23:break;case 22:var X=m.stateNode;m.memoizedState!==null?X._visibility&2?$n(s,m,g,j,l):Ji(s,m):(X._visibility|=2,$n(s,m,g,j,l)),l&&L&2048&&Yo(m.alternate,m);break;case 24:$n(s,m,g,j,l),l&&L&2048&&Uo(m.alternate,m);break;default:$n(s,m,g,j,l)}t=t.sibling}}function Ji(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,i=t,l=i.flags;switch(i.tag){case 22:Ji(a,i),l&2048&&Yo(i.alternate,i);break;case 24:Ji(a,i),l&2048&&Uo(i.alternate,i);break;default:Ji(a,i)}t=t.sibling}}var er=8192;function Jn(e){if(e.subtreeFlags&er)for(e=e.child;e!==null;)x0(e),e=e.sibling}function x0(e){switch(e.tag){case 26:Jn(e),e.flags&er&&e.memoizedState!==null&&U1(It,e.memoizedState,e.memoizedProps);break;case 5:Jn(e);break;case 3:case 4:var t=It;It=Rl(e.stateNode.containerInfo),Jn(e),It=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=er,er=16777216,Jn(e),er=t):Jn(e));break;default:Jn(e)}}function b0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function tr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];rt=i,v0(i,e)}b0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)y0(e),e=e.sibling}function y0(e){switch(e.tag){case 0:case 11:case 15:tr(e),e.flags&2048&&_a(9,e,e.return);break;case 3:tr(e);break;case 12:tr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,yl(e)):tr(e);break;default:tr(e)}}function yl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];rt=i,v0(i,e)}b0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:_a(8,t,t.return),yl(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,yl(t));break;default:yl(t)}e=e.sibling}}function v0(e,t){for(;rt!==null;){var a=rt;switch(a.tag){case 0:case 11:case 15:_a(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Yi(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,rt=i;else e:for(a=e;rt!==null;){i=rt;var l=i.sibling,s=i.return;if(d0(i),i===a){rt=null;break e}if(l!==null){l.return=s,rt=l;break e}rt=s}}}var e1={getCacheForType:function(e){var t=dt(tt),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},t1=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Fe=null,ze=null,Be=0,_e=0,kt=null,Pa=!1,ei=!1,_o=!1,ya=0,Ze=0,Xa=0,wn=0,Ho=0,qt=0,ti=0,ar=null,wt=null,qo=!1,Po=0,vl=1/0,wl=null,Fa=null,ot=0,Ia=null,ai=null,ni=0,Xo=0,Fo=null,w0=null,nr=0,Io=null;function zt(){if((Ue&2)!==0&&Be!==0)return Be&-Be;if(E.T!==null){var e=Fn;return e!==0?e:$o()}return Lu()}function j0(){qt===0&&(qt=(Be&536870912)===0||Ye?Mu():536870912);var e=Ht.current;return e!==null&&(e.flags|=32),qt}function Rt(e,t,a){(e===Fe&&(_e===2||_e===9)||e.cancelPendingCommit!==null)&&(ii(e,0),Va(e,Be,qt,!1)),wi(e,a),((Ue&2)===0||e!==Fe)&&(e===Fe&&((Ue&2)===0&&(wn|=a),Ze===4&&Va(e,Be,qt,!1)),ta(e))}function S0(e,t,a){if((Ue&6)!==0)throw Error(c(327));var i=!a&&(t&124)===0&&(t&e.expiredLanes)===0||vi(e,t),l=i?i1(e,t):Qo(e,t,!0),s=i;do{if(l===0){ei&&!i&&Va(e,t,0,!1);break}else{if(a=e.current.alternate,s&&!a1(a)){l=Qo(e,t,!1),s=!1;continue}if(l===2){if(s=t,e.errorRecoveryDisabledLanes&s)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var g=e;l=ar;var j=g.current.memoizedState.isDehydrated;if(j&&(ii(g,m).flags|=256),m=Qo(g,m,!1),m!==2){if(_o&&!j){g.errorRecoveryDisabledLanes|=s,wn|=s,l=4;break e}s=wt,wt=l,s!==null&&(wt===null?wt=s:wt.push.apply(wt,s))}l=m}if(s=!1,l!==2)continue}}if(l===1){ii(e,0),Va(e,t,0,!0);break}e:{switch(i=e,s=l,s){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Va(i,t,qt,!Pa);break e;case 2:wt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=Po+300-ue(),10<l)){if(Va(i,t,qt,!Pa),Mr(i,0,!0)!==0)break e;i.timeoutHandle=$0(C0.bind(null,i,a,wt,wl,qo,t,qt,wn,ti,Pa,s,2,-0,0),l);break e}C0(i,a,wt,wl,qo,t,qt,wn,ti,Pa,s,0,-0,0)}}break}while(!0);ta(e)}function C0(e,t,a,i,l,s,m,g,j,L,X,Q,U,_){if(e.timeoutHandle=-1,Q=t.subtreeFlags,(Q&8192||(Q&16785408)===16785408)&&(ur={stylesheets:null,count:0,unsuspend:Y1},x0(t),Q=_1(),Q!==null)){e.cancelPendingCommit=Q(R0.bind(null,e,t,s,a,i,l,m,g,j,X,1,U,_)),Va(e,s,m,!L);return}R0(e,t,s,a,i,l,m,g,j)}function a1(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var l=a[i],s=l.getSnapshot;l=l.value;try{if(!Nt(s(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Va(e,t,a,i){t&=~Ho,t&=~wn,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var l=t;0<l;){var s=31-Ct(l),m=1<<s;i[s]=-1,l&=~m}a!==0&&Ou(e,a,t)}function jl(){return(Ue&6)===0?(ir(0),!1):!0}function Vo(){if(ze!==null){if(_e===0)var e=ze.return;else e=ze,da=hn=null,oo(e),Zn=null,Qi=0,e=ze;for(;e!==null;)n0(e.alternate,e),e=e.return;ze=null}}function ii(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,v1(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Vo(),Fe=e,ze=a=oa(e.current,null),Be=t,_e=0,kt=null,Pa=!1,ei=vi(e,t),_o=!1,ti=qt=Ho=wn=Xa=Ze=0,wt=ar=null,qo=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var l=31-Ct(i),s=1<<l;t|=e[l],i&=~s}return ya=t,Fr(),a}function N0(e,t){Ae=null,E.H=cl,t===_i||t===Jr?(t=qd(),_e=3):t===Ud?(t=qd(),_e=4):_e=t===Xf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,kt=t,ze===null&&(Ze=1,pl(e,Lt(t,e.current)))}function E0(){var e=E.H;return E.H=cl,e===null?cl:e}function A0(){var e=E.A;return E.A=e1,e}function Go(){Ze=4,Pa||(Be&4194048)!==Be&&Ht.current!==null||(ei=!0),(Xa&134217727)===0&&(wn&134217727)===0||Fe===null||Va(Fe,Be,qt,!1)}function Qo(e,t,a){var i=Ue;Ue|=2;var l=E0(),s=A0();(Fe!==e||Be!==t)&&(wl=null,ii(e,t)),t=!1;var m=Ze;e:do try{if(_e!==0&&ze!==null){var g=ze,j=kt;switch(_e){case 8:Vo(),m=6;break e;case 3:case 2:case 9:case 6:Ht.current===null&&(t=!0);var L=_e;if(_e=0,kt=null,ri(e,g,j,L),a&&ei){m=0;break e}break;default:L=_e,_e=0,kt=null,ri(e,g,j,L)}}n1(),m=Ze;break}catch(X){N0(e,X)}while(!0);return t&&e.shellSuspendCounter++,da=hn=null,Ue=i,E.H=l,E.A=s,ze===null&&(Fe=null,Be=0,Fr()),m}function n1(){for(;ze!==null;)T0(ze)}function i1(e,t){var a=Ue;Ue|=2;var i=E0(),l=A0();Fe!==e||Be!==t?(wl=null,vl=ue()+500,ii(e,t)):ei=vi(e,t);e:do try{if(_e!==0&&ze!==null){t=ze;var s=kt;t:switch(_e){case 1:_e=0,kt=null,ri(e,t,s,1);break;case 2:case 9:if(_d(s)){_e=0,kt=null,k0(t);break}t=function(){_e!==2&&_e!==9||Fe!==e||(_e=7),ta(e)},s.then(t,t);break e;case 3:_e=7;break e;case 4:_e=5;break e;case 7:_d(s)?(_e=0,kt=null,k0(t)):(_e=0,kt=null,ri(e,t,s,7));break;case 5:var m=null;switch(ze.tag){case 26:m=ze.memoizedState;case 5:case 27:var g=ze;if(!m||um(m)){_e=0,kt=null;var j=g.sibling;if(j!==null)ze=j;else{var L=g.return;L!==null?(ze=L,Sl(L)):ze=null}break t}}_e=0,kt=null,ri(e,t,s,5);break;case 6:_e=0,kt=null,ri(e,t,s,6);break;case 8:Vo(),Ze=6;break e;default:throw Error(c(462))}}r1();break}catch(X){N0(e,X)}while(!0);return da=hn=null,E.H=i,E.A=l,Ue=a,ze!==null?0:(Fe=null,Be=0,Fr(),Ze)}function r1(){for(;ze!==null&&!W();)T0(ze)}function T0(e){var t=t0(e.alternate,e,ya);e.memoizedProps=e.pendingProps,t===null?Sl(e):ze=t}function k0(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Wf(a,t,t.pendingProps,t.type,void 0,Be);break;case 11:t=Wf(a,t,t.pendingProps,t.type.render,t.ref,Be);break;case 5:oo(t);default:n0(a,t),t=ze=kd(t,ya),t=t0(a,t,ya)}e.memoizedProps=e.pendingProps,t===null?Sl(e):ze=t}function ri(e,t,a,i){da=hn=null,oo(t),Zn=null,Qi=0;var l=t.return;try{if(Qg(e,l,t,a,Be)){Ze=1,pl(e,Lt(a,e.current)),ze=null;return}}catch(s){if(l!==null)throw ze=l,s;Ze=1,pl(e,Lt(a,e.current)),ze=null;return}t.flags&32768?(Ye||i===1?e=!0:ei||(Be&536870912)!==0?e=!1:(Pa=e=!0,(i===2||i===9||i===3||i===6)&&(i=Ht.current,i!==null&&i.tag===13&&(i.flags|=16384))),z0(t,e)):Sl(t)}function Sl(e){var t=e;do{if((t.flags&32768)!==0){z0(t,Pa);return}e=t.return;var a=Zg(t.alternate,t,ya);if(a!==null){ze=a;return}if(t=t.sibling,t!==null){ze=t;return}ze=t=e}while(t!==null);Ze===0&&(Ze=5)}function z0(e,t){do{var a=Kg(e.alternate,e);if(a!==null){a.flags&=32767,ze=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ze=e;return}ze=e=a}while(e!==null);Ze=6,ze=null}function R0(e,t,a,i,l,s,m,g,j){e.cancelPendingCommit=null;do Cl();while(ot!==0);if((Ue&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(s=t.lanes|t.childLanes,s|=Ys,Yh(e,a,s,m,g,j),e===Fe&&(ze=Fe=null,Be=0),ai=t,Ia=e,ni=a,Xo=s,Fo=l,w0=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,c1(pt,function(){return L0(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=E.T,E.T=null,l=H.p,H.p=2,m=Ue,Ue|=4;try{$g(e,t,a)}finally{Ue=m,H.p=l,E.T=i}}ot=1,M0(),D0(),O0()}}function M0(){if(ot===1){ot=0;var e=Ia,t=ai,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=E.T,E.T=null;var i=H.p;H.p=2;var l=Ue;Ue|=4;try{p0(t,e);var s=lc,m=yd(e.containerInfo),g=s.focusedElem,j=s.selectionRange;if(m!==g&&g&&g.ownerDocument&&bd(g.ownerDocument.documentElement,g)){if(j!==null&&Ms(g)){var L=j.start,X=j.end;if(X===void 0&&(X=L),"selectionStart"in g)g.selectionStart=L,g.selectionEnd=Math.min(X,g.value.length);else{var Q=g.ownerDocument||document,U=Q&&Q.defaultView||window;if(U.getSelection){var _=U.getSelection(),je=g.textContent.length,ye=Math.min(j.start,je),Pe=j.end===void 0?ye:Math.min(j.end,je);!_.extend&&ye>Pe&&(m=Pe,Pe=ye,ye=m);var T=xd(g,ye),N=xd(g,Pe);if(T&&N&&(_.rangeCount!==1||_.anchorNode!==T.node||_.anchorOffset!==T.offset||_.focusNode!==N.node||_.focusOffset!==N.offset)){var O=Q.createRange();O.setStart(T.node,T.offset),_.removeAllRanges(),ye>Pe?(_.addRange(O),_.extend(N.node,N.offset)):(O.setEnd(N.node,N.offset),_.addRange(O))}}}}for(Q=[],_=g;_=_.parentNode;)_.nodeType===1&&Q.push({element:_,left:_.scrollLeft,top:_.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<Q.length;g++){var G=Q[g];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}Ll=!!rc,lc=rc=null}finally{Ue=l,H.p=i,E.T=a}}e.current=t,ot=2}}function D0(){if(ot===2){ot=0;var e=Ia,t=ai,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=E.T,E.T=null;var i=H.p;H.p=2;var l=Ue;Ue|=4;try{u0(e,t.alternate,t)}finally{Ue=l,H.p=i,E.T=a}}ot=3}}function O0(){if(ot===4||ot===3){ot=0,Se();var e=Ia,t=ai,a=ni,i=w0;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ot=5:(ot=0,ai=Ia=null,B0(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Fa=null),ds(a),t=t.stateNode,St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(yi,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=E.T,l=H.p,H.p=2,E.T=null;try{for(var s=e.onRecoverableError,m=0;m<i.length;m++){var g=i[m];s(g.value,{componentStack:g.stack})}}finally{E.T=t,H.p=l}}(ni&3)!==0&&Cl(),ta(e),l=e.pendingLanes,(a&4194090)!==0&&(l&42)!==0?e===Io?nr++:(nr=0,Io=e):nr=0,ir(0)}}function B0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Yi(t)))}function Cl(e){return M0(),D0(),O0(),L0()}function L0(){if(ot!==5)return!1;var e=Ia,t=Xo;Xo=0;var a=ds(ni),i=E.T,l=H.p;try{H.p=32>a?32:a,E.T=null,a=Fo,Fo=null;var s=Ia,m=ni;if(ot=0,ai=Ia=null,ni=0,(Ue&6)!==0)throw Error(c(331));var g=Ue;if(Ue|=4,y0(s.current),g0(s,s.current,m,a),Ue=g,ir(0,!1),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(yi,s)}catch{}return!0}finally{H.p=l,E.T=i,B0(e,t)}}function Y0(e,t,a){t=Lt(a,t),t=So(e.stateNode,t,2),e=Ba(e,t,2),e!==null&&(wi(e,2),ta(e))}function Xe(e,t,a){if(e.tag===3)Y0(e,e,a);else for(;t!==null;){if(t.tag===3){Y0(t,e,a);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Fa===null||!Fa.has(i))){e=Lt(a,e),a=qf(2),i=Ba(t,a,2),i!==null&&(Pf(a,i,t,e),wi(i,2),ta(i));break}}t=t.return}}function Wo(e,t,a){var i=e.pingCache;if(i===null){i=e.pingCache=new t1;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(a)||(_o=!0,l.add(a),e=l1.bind(null,e,t,a),t.then(e,e))}function l1(e,t,a){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Fe===e&&(Be&a)===a&&(Ze===4||Ze===3&&(Be&62914560)===Be&&300>ue()-Po?(Ue&2)===0&&ii(e,0):Ho|=a,ti===Be&&(ti=0)),ta(e)}function U0(e,t){t===0&&(t=Du()),e=Hn(e,t),e!==null&&(wi(e,t),ta(e))}function s1(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),U0(e,a)}function o1(e,t){var a=0;switch(e.tag){case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(c(314))}i!==null&&i.delete(t),U0(e,a)}function c1(e,t){return F(e,t)}var Nl=null,li=null,Zo=!1,El=!1,Ko=!1,jn=0;function ta(e){e!==li&&e.next===null&&(li===null?Nl=li=e:li=li.next=e),El=!0,Zo||(Zo=!0,d1())}function ir(e,t){if(!Ko&&El){Ko=!0;do for(var a=!1,i=Nl;i!==null;){if(e!==0){var l=i.pendingLanes;if(l===0)var s=0;else{var m=i.suspendedLanes,g=i.pingedLanes;s=(1<<31-Ct(42|e)+1)-1,s&=l&~(m&~g),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(a=!0,P0(i,s))}else s=Be,s=Mr(i,i===Fe?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(s&3)===0||vi(i,s)||(a=!0,P0(i,s));i=i.next}while(a);Ko=!1}}function u1(){_0()}function _0(){El=Zo=!1;var e=0;jn!==0&&(y1()&&(e=jn),jn=0);for(var t=ue(),a=null,i=Nl;i!==null;){var l=i.next,s=H0(i,t);s===0?(i.next=null,a===null?Nl=l:a.next=l,l===null&&(li=a)):(a=i,(e!==0||(s&3)!==0)&&(El=!0)),i=l}ir(e)}function H0(e,t){for(var a=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var m=31-Ct(s),g=1<<m,j=l[m];j===-1?((g&a)===0||(g&i)!==0)&&(l[m]=Lh(g,t)):j<=t&&(e.expiredLanes|=g),s&=~g}if(t=Fe,a=Be,a=Mr(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===t&&(_e===2||_e===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&be(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||vi(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(i!==null&&be(i),ds(a)){case 2:case 8:a=gt;break;case 32:a=pt;break;case 268435456:a=Zt;break;default:a=pt}return i=q0.bind(null,e),a=F(a,i),e.callbackPriority=t,e.callbackNode=a,t}return i!==null&&i!==null&&be(i),e.callbackPriority=2,e.callbackNode=null,2}function q0(e,t){if(ot!==0&&ot!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Cl()&&e.callbackNode!==a)return null;var i=Be;return i=Mr(e,e===Fe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(S0(e,i,t),H0(e,ue()),e.callbackNode!=null&&e.callbackNode===a?q0.bind(null,e):null)}function P0(e,t){if(Cl())return null;S0(e,t,!0)}function d1(){w1(function(){(Ue&6)!==0?F(ke,u1):_0()})}function $o(){return jn===0&&(jn=Mu()),jn}function X0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Yr(""+e)}function F0(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function f1(e,t,a,i,l){if(t==="submit"&&a&&a.stateNode===l){var s=X0((l[xt]||null).action),m=i.submitter;m&&(t=(t=m[xt]||null)?X0(t.formAction):m.getAttribute("formAction"),t!==null&&(s=t,m=null));var g=new qr("action","action",null,i,l);e.push({event:g,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(jn!==0){var j=m?F0(l,m):new FormData(l);bo(a,{pending:!0,data:j,method:l.method,action:s},null,j)}}else typeof s=="function"&&(g.preventDefault(),j=m?F0(l,m):new FormData(l),bo(a,{pending:!0,data:j,method:l.method,action:s},s,j))},currentTarget:l}]})}}for(var Jo=0;Jo<Ls.length;Jo++){var ec=Ls[Jo],m1=ec.toLowerCase(),p1=ec[0].toUpperCase()+ec.slice(1);Ft(m1,"on"+p1)}Ft(jd,"onAnimationEnd"),Ft(Sd,"onAnimationIteration"),Ft(Cd,"onAnimationStart"),Ft("dblclick","onDoubleClick"),Ft("focusin","onFocus"),Ft("focusout","onBlur"),Ft(Rg,"onTransitionRun"),Ft(Mg,"onTransitionStart"),Ft(Dg,"onTransitionCancel"),Ft(Nd,"onTransitionEnd"),zn("onMouseEnter",["mouseout","mouseover"]),zn("onMouseLeave",["mouseout","mouseover"]),zn("onPointerEnter",["pointerout","pointerover"]),zn("onPointerLeave",["pointerout","pointerover"]),ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ln("onBeforeInput",["compositionend","keypress","textInput","paste"]),ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),h1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rr));function I0(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],l=i.event;i=i.listeners;e:{var s=void 0;if(t)for(var m=i.length-1;0<=m;m--){var g=i[m],j=g.instance,L=g.currentTarget;if(g=g.listener,j!==s&&l.isPropagationStopped())break e;s=g,l.currentTarget=L;try{s(l)}catch(X){ml(X)}l.currentTarget=null,s=j}else for(m=0;m<i.length;m++){if(g=i[m],j=g.instance,L=g.currentTarget,g=g.listener,j!==s&&l.isPropagationStopped())break e;s=g,l.currentTarget=L;try{s(l)}catch(X){ml(X)}l.currentTarget=null,s=j}}}}function Re(e,t){var a=t[fs];a===void 0&&(a=t[fs]=new Set);var i=e+"__bubble";a.has(i)||(V0(t,e,2,!1),a.add(i))}function tc(e,t,a){var i=0;t&&(i|=4),V0(a,e,i,t)}var Al="_reactListening"+Math.random().toString(36).slice(2);function ac(e){if(!e[Al]){e[Al]=!0,Uu.forEach(function(a){a!=="selectionchange"&&(h1.has(a)||tc(a,!1,e),tc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Al]||(t[Al]=!0,tc("selectionchange",!1,t))}}function V0(e,t,a,i){switch(gm(t)){case 2:var l=P1;break;case 8:l=X1;break;default:l=gc}a=l.bind(null,t,a,e),l=void 0,!Ss||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function nc(e,t,a,i,l){var s=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var m=i.tag;if(m===3||m===4){var g=i.stateNode.containerInfo;if(g===l)break;if(m===4)for(m=i.return;m!==null;){var j=m.tag;if((j===3||j===4)&&m.stateNode.containerInfo===l)return;m=m.return}for(;g!==null;){if(m=An(g),m===null)return;if(j=m.tag,j===5||j===6||j===26||j===27){i=s=m;continue e}g=g.parentNode}}i=i.return}$u(function(){var L=s,X=ws(a),Q=[];e:{var U=Ed.get(e);if(U!==void 0){var _=qr,je=e;switch(e){case"keypress":if(_r(a)===0)break e;case"keydown":case"keyup":_=cg;break;case"focusin":je="focus",_=As;break;case"focusout":je="blur",_=As;break;case"beforeblur":case"afterblur":_=As;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=td;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Kh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=fg;break;case jd:case Sd:case Cd:_=eg;break;case Nd:_=pg;break;case"scroll":case"scrollend":_=Wh;break;case"wheel":_=gg;break;case"copy":case"cut":case"paste":_=ag;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=nd;break;case"toggle":case"beforetoggle":_=bg}var ye=(t&4)!==0,Pe=!ye&&(e==="scroll"||e==="scrollend"),T=ye?U!==null?U+"Capture":null:U;ye=[];for(var N=L,O;N!==null;){var G=N;if(O=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||O===null||T===null||(G=Ci(N,T),G!=null&&ye.push(lr(N,G,O))),Pe)break;N=N.return}0<ye.length&&(U=new _(U,je,null,a,X),Q.push({event:U,listeners:ye}))}}if((t&7)===0){e:{if(U=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",U&&a!==vs&&(je=a.relatedTarget||a.fromElement)&&(An(je)||je[En]))break e;if((_||U)&&(U=X.window===X?X:(U=X.ownerDocument)?U.defaultView||U.parentWindow:window,_?(je=a.relatedTarget||a.toElement,_=L,je=je?An(je):null,je!==null&&(Pe=f(je),ye=je.tag,je!==Pe||ye!==5&&ye!==27&&ye!==6)&&(je=null)):(_=null,je=L),_!==je)){if(ye=td,G="onMouseLeave",T="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(ye=nd,G="onPointerLeave",T="onPointerEnter",N="pointer"),Pe=_==null?U:Si(_),O=je==null?U:Si(je),U=new ye(G,N+"leave",_,a,X),U.target=Pe,U.relatedTarget=O,G=null,An(X)===L&&(ye=new ye(T,N+"enter",je,a,X),ye.target=O,ye.relatedTarget=Pe,G=ye),Pe=G,_&&je)t:{for(ye=_,T=je,N=0,O=ye;O;O=si(O))N++;for(O=0,G=T;G;G=si(G))O++;for(;0<N-O;)ye=si(ye),N--;for(;0<O-N;)T=si(T),O--;for(;N--;){if(ye===T||T!==null&&ye===T.alternate)break t;ye=si(ye),T=si(T)}ye=null}else ye=null;_!==null&&G0(Q,U,_,ye,!1),je!==null&&Pe!==null&&G0(Q,Pe,je,ye,!0)}}e:{if(U=L?Si(L):window,_=U.nodeName&&U.nodeName.toLowerCase(),_==="select"||_==="input"&&U.type==="file")var de=dd;else if(cd(U))if(fd)de=Tg;else{de=Eg;var Te=Ng}else _=U.nodeName,!_||_.toLowerCase()!=="input"||U.type!=="checkbox"&&U.type!=="radio"?L&&ys(L.elementType)&&(de=dd):de=Ag;if(de&&(de=de(e,L))){ud(Q,de,a,X);break e}Te&&Te(e,U,L),e==="focusout"&&L&&U.type==="number"&&L.memoizedProps.value!=null&&bs(U,"number",U.value)}switch(Te=L?Si(L):window,e){case"focusin":(cd(Te)||Te.contentEditable==="true")&&(Yn=Te,Ds=L,Mi=null);break;case"focusout":Mi=Ds=Yn=null;break;case"mousedown":Os=!0;break;case"contextmenu":case"mouseup":case"dragend":Os=!1,vd(Q,a,X);break;case"selectionchange":if(zg)break;case"keydown":case"keyup":vd(Q,a,X)}var pe;if(ks)e:{switch(e){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Ln?sd(e,a)&&(ve="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(id&&a.locale!=="ko"&&(Ln||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Ln&&(pe=Ju()):(Ra=X,Cs="value"in Ra?Ra.value:Ra.textContent,Ln=!0)),Te=Tl(L,ve),0<Te.length&&(ve=new ad(ve,e,null,a,X),Q.push({event:ve,listeners:Te}),pe?ve.data=pe:(pe=od(a),pe!==null&&(ve.data=pe)))),(pe=vg?wg(e,a):jg(e,a))&&(ve=Tl(L,"onBeforeInput"),0<ve.length&&(Te=new ad("onBeforeInput","beforeinput",null,a,X),Q.push({event:Te,listeners:ve}),Te.data=pe)),f1(Q,e,L,a,X)}I0(Q,t)})}function lr(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Tl(e,t){for(var a=t+"Capture",i=[];e!==null;){var l=e,s=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||s===null||(l=Ci(e,a),l!=null&&i.unshift(lr(e,l,s)),l=Ci(e,t),l!=null&&i.push(lr(e,l,s))),e.tag===3)return i;e=e.return}return[]}function si(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function G0(e,t,a,i,l){for(var s=t._reactName,m=[];a!==null&&a!==i;){var g=a,j=g.alternate,L=g.stateNode;if(g=g.tag,j!==null&&j===i)break;g!==5&&g!==26&&g!==27||L===null||(j=L,l?(L=Ci(a,s),L!=null&&m.unshift(lr(a,L,j))):l||(L=Ci(a,s),L!=null&&m.push(lr(a,L,j)))),a=a.return}m.length!==0&&e.push({event:t,listeners:m})}var g1=/\r\n?/g,x1=/\u0000|\uFFFD/g;function Q0(e){return(typeof e=="string"?e:""+e).replace(g1,`
`).replace(x1,"")}function W0(e,t){return t=Q0(t),Q0(e)===t}function kl(){}function qe(e,t,a,i,l,s){switch(a){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Dn(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Dn(e,""+i);break;case"className":Or(e,"class",i);break;case"tabIndex":Or(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Or(e,a,i);break;case"style":Zu(e,i,s);break;case"data":if(t!=="object"){Or(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Yr(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(t!=="input"&&qe(e,t,"name",l.name,l,null),qe(e,t,"formEncType",l.formEncType,l,null),qe(e,t,"formMethod",l.formMethod,l,null),qe(e,t,"formTarget",l.formTarget,l,null)):(qe(e,t,"encType",l.encType,l,null),qe(e,t,"method",l.method,l,null),qe(e,t,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Yr(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=kl);break;case"onScroll":i!=null&&Re("scroll",e);break;case"onScrollEnd":i!=null&&Re("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(c(61));if(a=i.__html,a!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=Yr(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":Re("beforetoggle",e),Re("toggle",e),Dr(e,"popover",i);break;case"xlinkActuate":la(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":la(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":la(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":la(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":la(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":la(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":la(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":la(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":la(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Dr(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Gh.get(a)||a,Dr(e,a,i))}}function ic(e,t,a,i,l,s){switch(a){case"style":Zu(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(c(61));if(a=i.__html,a!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof i=="string"?Dn(e,i):(typeof i=="number"||typeof i=="bigint")&&Dn(e,""+i);break;case"onScroll":i!=null&&Re("scroll",e);break;case"onScrollEnd":i!=null&&Re("scrollend",e);break;case"onClick":i!=null&&(e.onclick=kl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_u.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),s=e[xt]||null,s=s!=null?s[a]:null,typeof s=="function"&&e.removeEventListener(t,s,l),typeof i=="function")){typeof s!="function"&&s!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,i,l);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):Dr(e,a,i)}}}function ct(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Re("error",e),Re("load",e);var i=!1,l=!1,s;for(s in a)if(a.hasOwnProperty(s)){var m=a[s];if(m!=null)switch(s){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:qe(e,t,s,m,a,null)}}l&&qe(e,t,"srcSet",a.srcSet,a,null),i&&qe(e,t,"src",a.src,a,null);return;case"input":Re("invalid",e);var g=s=m=l=null,j=null,L=null;for(i in a)if(a.hasOwnProperty(i)){var X=a[i];if(X!=null)switch(i){case"name":l=X;break;case"type":m=X;break;case"checked":j=X;break;case"defaultChecked":L=X;break;case"value":s=X;break;case"defaultValue":g=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(c(137,t));break;default:qe(e,t,i,X,a,null)}}Vu(e,s,g,j,L,m,l,!1),Br(e);return;case"select":Re("invalid",e),i=m=s=null;for(l in a)if(a.hasOwnProperty(l)&&(g=a[l],g!=null))switch(l){case"value":s=g;break;case"defaultValue":m=g;break;case"multiple":i=g;default:qe(e,t,l,g,a,null)}t=s,a=m,e.multiple=!!i,t!=null?Mn(e,!!i,t,!1):a!=null&&Mn(e,!!i,a,!0);return;case"textarea":Re("invalid",e),s=l=i=null;for(m in a)if(a.hasOwnProperty(m)&&(g=a[m],g!=null))switch(m){case"value":i=g;break;case"defaultValue":l=g;break;case"children":s=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(c(91));break;default:qe(e,t,m,g,a,null)}Qu(e,i,l,s),Br(e);return;case"option":for(j in a)if(a.hasOwnProperty(j)&&(i=a[j],i!=null))switch(j){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:qe(e,t,j,i,a,null)}return;case"dialog":Re("beforetoggle",e),Re("toggle",e),Re("cancel",e),Re("close",e);break;case"iframe":case"object":Re("load",e);break;case"video":case"audio":for(i=0;i<rr.length;i++)Re(rr[i],e);break;case"image":Re("error",e),Re("load",e);break;case"details":Re("toggle",e);break;case"embed":case"source":case"link":Re("error",e),Re("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in a)if(a.hasOwnProperty(L)&&(i=a[L],i!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:qe(e,t,L,i,a,null)}return;default:if(ys(t)){for(X in a)a.hasOwnProperty(X)&&(i=a[X],i!==void 0&&ic(e,t,X,i,a,void 0));return}}for(g in a)a.hasOwnProperty(g)&&(i=a[g],i!=null&&qe(e,t,g,i,a,null))}function b1(e,t,a,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,s=null,m=null,g=null,j=null,L=null,X=null;for(_ in a){var Q=a[_];if(a.hasOwnProperty(_)&&Q!=null)switch(_){case"checked":break;case"value":break;case"defaultValue":j=Q;default:i.hasOwnProperty(_)||qe(e,t,_,null,i,Q)}}for(var U in i){var _=i[U];if(Q=a[U],i.hasOwnProperty(U)&&(_!=null||Q!=null))switch(U){case"type":s=_;break;case"name":l=_;break;case"checked":L=_;break;case"defaultChecked":X=_;break;case"value":m=_;break;case"defaultValue":g=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(c(137,t));break;default:_!==Q&&qe(e,t,U,_,i,Q)}}xs(e,m,g,j,L,X,s,l);return;case"select":_=m=g=U=null;for(s in a)if(j=a[s],a.hasOwnProperty(s)&&j!=null)switch(s){case"value":break;case"multiple":_=j;default:i.hasOwnProperty(s)||qe(e,t,s,null,i,j)}for(l in i)if(s=i[l],j=a[l],i.hasOwnProperty(l)&&(s!=null||j!=null))switch(l){case"value":U=s;break;case"defaultValue":g=s;break;case"multiple":m=s;default:s!==j&&qe(e,t,l,s,i,j)}t=g,a=m,i=_,U!=null?Mn(e,!!a,U,!1):!!i!=!!a&&(t!=null?Mn(e,!!a,t,!0):Mn(e,!!a,a?[]:"",!1));return;case"textarea":_=U=null;for(g in a)if(l=a[g],a.hasOwnProperty(g)&&l!=null&&!i.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:qe(e,t,g,null,i,l)}for(m in i)if(l=i[m],s=a[m],i.hasOwnProperty(m)&&(l!=null||s!=null))switch(m){case"value":U=l;break;case"defaultValue":_=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==s&&qe(e,t,m,l,i,s)}Gu(e,U,_);return;case"option":for(var je in a)if(U=a[je],a.hasOwnProperty(je)&&U!=null&&!i.hasOwnProperty(je))switch(je){case"selected":e.selected=!1;break;default:qe(e,t,je,null,i,U)}for(j in i)if(U=i[j],_=a[j],i.hasOwnProperty(j)&&U!==_&&(U!=null||_!=null))switch(j){case"selected":e.selected=U&&typeof U!="function"&&typeof U!="symbol";break;default:qe(e,t,j,U,i,_)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ye in a)U=a[ye],a.hasOwnProperty(ye)&&U!=null&&!i.hasOwnProperty(ye)&&qe(e,t,ye,null,i,U);for(L in i)if(U=i[L],_=a[L],i.hasOwnProperty(L)&&U!==_&&(U!=null||_!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(c(137,t));break;default:qe(e,t,L,U,i,_)}return;default:if(ys(t)){for(var Pe in a)U=a[Pe],a.hasOwnProperty(Pe)&&U!==void 0&&!i.hasOwnProperty(Pe)&&ic(e,t,Pe,void 0,i,U);for(X in i)U=i[X],_=a[X],!i.hasOwnProperty(X)||U===_||U===void 0&&_===void 0||ic(e,t,X,U,i,_);return}}for(var T in a)U=a[T],a.hasOwnProperty(T)&&U!=null&&!i.hasOwnProperty(T)&&qe(e,t,T,null,i,U);for(Q in i)U=i[Q],_=a[Q],!i.hasOwnProperty(Q)||U===_||U==null&&_==null||qe(e,t,Q,U,i,_)}var rc=null,lc=null;function zl(e){return e.nodeType===9?e:e.ownerDocument}function Z0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function K0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function sc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var oc=null;function y1(){var e=window.event;return e&&e.type==="popstate"?e===oc?!1:(oc=e,!0):(oc=null,!1)}var $0=typeof setTimeout=="function"?setTimeout:void 0,v1=typeof clearTimeout=="function"?clearTimeout:void 0,J0=typeof Promise=="function"?Promise:void 0,w1=typeof queueMicrotask=="function"?queueMicrotask:typeof J0<"u"?function(e){return J0.resolve(null).then(e).catch(j1)}:$0;function j1(e){setTimeout(function(){throw e})}function Ga(e){return e==="head"}function em(e,t){var a=t,i=0,l=0;do{var s=a.nextSibling;if(e.removeChild(a),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(0<i&&8>i){a=i;var m=e.ownerDocument;if(a&1&&sr(m.documentElement),a&2&&sr(m.body),a&4)for(a=m.head,sr(a),m=a.firstChild;m;){var g=m.nextSibling,j=m.nodeName;m[ji]||j==="SCRIPT"||j==="STYLE"||j==="LINK"&&m.rel.toLowerCase()==="stylesheet"||a.removeChild(m),m=g}}if(l===0){e.removeChild(s),hr(t);return}l--}else a==="$"||a==="$?"||a==="$!"?l++:i=a.charCodeAt(0)-48;else i=0;a=s}while(a);hr(t)}function cc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":cc(a),ms(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function S1(e,t,a,i){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[ji])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Vt(e.nextSibling),e===null)break}return null}function C1(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Vt(e.nextSibling),e===null))return null;return e}function uc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function N1(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var i=function(){t(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var dc=null;function tm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function am(e,t,a){switch(t=zl(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function sr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ms(e)}var Pt=new Map,nm=new Set;function Rl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var va=H.d;H.d={f:E1,r:A1,D:T1,C:k1,L:z1,m:R1,X:D1,S:M1,M:O1};function E1(){var e=va.f(),t=jl();return e||t}function A1(e){var t=Tn(e);t!==null&&t.tag===5&&t.type==="form"?Sf(t):va.r(e)}var oi=typeof document>"u"?null:document;function im(e,t,a){var i=oi;if(i&&typeof t=="string"&&t){var l=Bt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),nm.has(l)||(nm.add(l),e={rel:e,crossOrigin:a,href:t},i.querySelector(l)===null&&(t=i.createElement("link"),ct(t,"link",e),nt(t),i.head.appendChild(t)))}}function T1(e){va.D(e),im("dns-prefetch",e,null)}function k1(e,t){va.C(e,t),im("preconnect",e,t)}function z1(e,t,a){va.L(e,t,a);var i=oi;if(i&&e&&t){var l='link[rel="preload"][as="'+Bt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Bt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Bt(a.imageSizes)+'"]')):l+='[href="'+Bt(e)+'"]';var s=l;switch(t){case"style":s=ci(e);break;case"script":s=ui(e)}Pt.has(s)||(e=v({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Pt.set(s,e),i.querySelector(l)!==null||t==="style"&&i.querySelector(or(s))||t==="script"&&i.querySelector(cr(s))||(t=i.createElement("link"),ct(t,"link",e),nt(t),i.head.appendChild(t)))}}function R1(e,t){va.m(e,t);var a=oi;if(a&&e){var i=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Bt(i)+'"][href="'+Bt(e)+'"]',s=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=ui(e)}if(!Pt.has(s)&&(e=v({rel:"modulepreload",href:e},t),Pt.set(s,e),a.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(cr(s)))return}i=a.createElement("link"),ct(i,"link",e),nt(i),a.head.appendChild(i)}}}function M1(e,t,a){va.S(e,t,a);var i=oi;if(i&&e){var l=kn(i).hoistableStyles,s=ci(e);t=t||"default";var m=l.get(s);if(!m){var g={loading:0,preload:null};if(m=i.querySelector(or(s)))g.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Pt.get(s))&&fc(e,a);var j=m=i.createElement("link");nt(j),ct(j,"link",e),j._p=new Promise(function(L,X){j.onload=L,j.onerror=X}),j.addEventListener("load",function(){g.loading|=1}),j.addEventListener("error",function(){g.loading|=2}),g.loading|=4,Ml(m,t,i)}m={type:"stylesheet",instance:m,count:1,state:g},l.set(s,m)}}}function D1(e,t){va.X(e,t);var a=oi;if(a&&e){var i=kn(a).hoistableScripts,l=ui(e),s=i.get(l);s||(s=a.querySelector(cr(l)),s||(e=v({src:e,async:!0},t),(t=Pt.get(l))&&mc(e,t),s=a.createElement("script"),nt(s),ct(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(l,s))}}function O1(e,t){va.M(e,t);var a=oi;if(a&&e){var i=kn(a).hoistableScripts,l=ui(e),s=i.get(l);s||(s=a.querySelector(cr(l)),s||(e=v({src:e,async:!0,type:"module"},t),(t=Pt.get(l))&&mc(e,t),s=a.createElement("script"),nt(s),ct(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(l,s))}}function rm(e,t,a,i){var l=(l=ne.current)?Rl(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=ci(a.href),a=kn(l).hoistableStyles,i=a.get(t),i||(i={type:"style",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ci(a.href);var s=kn(l).hoistableStyles,m=s.get(e);if(m||(l=l.ownerDocument||l,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,m),(s=l.querySelector(or(e)))&&!s._p&&(m.instance=s,m.state.loading=5),Pt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Pt.set(e,a),s||B1(l,e,a,m.state))),t&&i===null)throw Error(c(528,""));return m}if(t&&i!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ui(a),a=kn(l).hoistableScripts,i=a.get(t),i||(i={type:"script",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function ci(e){return'href="'+Bt(e)+'"'}function or(e){return'link[rel="stylesheet"]['+e+"]"}function lm(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function B1(e,t,a,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),ct(t,"link",a),nt(t),e.head.appendChild(t))}function ui(e){return'[src="'+Bt(e)+'"]'}function cr(e){return"script[async]"+e}function sm(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Bt(a.href)+'"]');if(i)return t.instance=i,nt(i),i;var l=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),nt(i),ct(i,"style",l),Ml(i,a.precedence,e),t.instance=i;case"stylesheet":l=ci(a.href);var s=e.querySelector(or(l));if(s)return t.state.loading|=4,t.instance=s,nt(s),s;i=lm(a),(l=Pt.get(l))&&fc(i,l),s=(e.ownerDocument||e).createElement("link"),nt(s);var m=s;return m._p=new Promise(function(g,j){m.onload=g,m.onerror=j}),ct(s,"link",i),t.state.loading|=4,Ml(s,a.precedence,e),t.instance=s;case"script":return s=ui(a.src),(l=e.querySelector(cr(s)))?(t.instance=l,nt(l),l):(i=a,(l=Pt.get(s))&&(i=v({},a),mc(i,l)),e=e.ownerDocument||e,l=e.createElement("script"),nt(l),ct(l,"link",i),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Ml(i,a.precedence,e));return t.instance}function Ml(e,t,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,s=l,m=0;m<i.length;m++){var g=i[m];if(g.dataset.precedence===t)s=g;else if(s!==l)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function fc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function mc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Dl=null;function om(e,t,a){if(Dl===null){var i=new Map,l=Dl=new Map;l.set(a,i)}else l=Dl,i=l.get(a),i||(i=new Map,l.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var s=a[l];if(!(s[ji]||s[ut]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var m=s.getAttribute(t)||"";m=e+m;var g=i.get(m);g?g.push(s):i.set(m,[s])}}return i}function cm(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function L1(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function um(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ur=null;function Y1(){}function U1(e,t,a){if(ur===null)throw Error(c(475));var i=ur;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=ci(a.href),s=e.querySelector(or(l));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=Ol.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=s,nt(s);return}s=e.ownerDocument||e,a=lm(a),(l=Pt.get(l))&&fc(a,l),s=s.createElement("link"),nt(s);var m=s;m._p=new Promise(function(g,j){m.onload=g,m.onerror=j}),ct(s,"link",a),t.instance=s}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(i.count++,t=Ol.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function _1(){if(ur===null)throw Error(c(475));var e=ur;return e.stylesheets&&e.count===0&&pc(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&pc(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Ol(){if(this.count--,this.count===0){if(this.stylesheets)pc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bl=null;function pc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bl=new Map,t.forEach(H1,e),Bl=null,Ol.call(e))}function H1(e,t){if(!(t.state.loading&4)){var a=Bl.get(e);if(a)var i=a.get(null);else{a=new Map,Bl.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<l.length;s++){var m=l[s];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(a.set(m.dataset.precedence,m),i=m)}i&&a.set(null,i)}l=t.instance,m=l.getAttribute("data-precedence"),s=a.get(m)||i,s===i&&a.set(null,l),a.set(m,l),this.count++,i=Ol.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),s?s.parentNode.insertBefore(l,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var dr={$$typeof:I,Provider:null,Consumer:null,_currentValue:re,_currentValue2:re,_threadCount:0};function q1(e,t,a,i,l,s,m,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=cs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cs(0),this.hiddenUpdates=cs(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=s,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function dm(e,t,a,i,l,s,m,g,j,L,X,Q){return e=new q1(e,t,a,m,g,j,L,Q),t=1,s===!0&&(t|=24),s=Et(3,null,null,t),e.current=s,s.stateNode=e,t=Qs(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:a,cache:t},$s(s),e}function fm(e){return e?(e=qn,e):qn}function mm(e,t,a,i,l,s){l=fm(l),i.context===null?i.context=l:i.pendingContext=l,i=Oa(t),i.payload={element:a},s=s===void 0?null:s,s!==null&&(i.callback=s),a=Ba(e,i,t),a!==null&&(Rt(a,e,t),qi(a,e,t))}function pm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function hc(e,t){pm(e,t),(e=e.alternate)&&pm(e,t)}function hm(e){if(e.tag===13){var t=Hn(e,67108864);t!==null&&Rt(t,e,67108864),hc(e,67108864)}}var Ll=!0;function P1(e,t,a,i){var l=E.T;E.T=null;var s=H.p;try{H.p=2,gc(e,t,a,i)}finally{H.p=s,E.T=l}}function X1(e,t,a,i){var l=E.T;E.T=null;var s=H.p;try{H.p=8,gc(e,t,a,i)}finally{H.p=s,E.T=l}}function gc(e,t,a,i){if(Ll){var l=xc(i);if(l===null)nc(e,t,i,Yl,a),xm(e,i);else if(I1(l,e,t,a,i))i.stopPropagation();else if(xm(e,i),t&4&&-1<F1.indexOf(e)){for(;l!==null;){var s=Tn(l);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var m=rn(s.pendingLanes);if(m!==0){var g=s;for(g.pendingLanes|=2,g.entangledLanes|=2;m;){var j=1<<31-Ct(m);g.entanglements[1]|=j,m&=~j}ta(s),(Ue&6)===0&&(vl=ue()+500,ir(0))}}break;case 13:g=Hn(s,2),g!==null&&Rt(g,s,2),jl(),hc(s,2)}if(s=xc(i),s===null&&nc(e,t,i,Yl,a),s===l)break;l=s}l!==null&&i.stopPropagation()}else nc(e,t,i,null,a)}}function xc(e){return e=ws(e),bc(e)}var Yl=null;function bc(e){if(Yl=null,e=An(e),e!==null){var t=f(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=h(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Yl=e,null}function gm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ne()){case ke:return 2;case gt:return 8;case pt:case Dt:return 32;case Zt:return 268435456;default:return 32}default:return 32}}var yc=!1,Qa=null,Wa=null,Za=null,fr=new Map,mr=new Map,Ka=[],F1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xm(e,t){switch(e){case"focusin":case"focusout":Qa=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":fr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mr.delete(t.pointerId)}}function pr(e,t,a,i,l,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:a,eventSystemFlags:i,nativeEvent:s,targetContainers:[l]},t!==null&&(t=Tn(t),t!==null&&hm(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function I1(e,t,a,i,l){switch(t){case"focusin":return Qa=pr(Qa,e,t,a,i,l),!0;case"dragenter":return Wa=pr(Wa,e,t,a,i,l),!0;case"mouseover":return Za=pr(Za,e,t,a,i,l),!0;case"pointerover":var s=l.pointerId;return fr.set(s,pr(fr.get(s)||null,e,t,a,i,l)),!0;case"gotpointercapture":return s=l.pointerId,mr.set(s,pr(mr.get(s)||null,e,t,a,i,l)),!0}return!1}function bm(e){var t=An(e.target);if(t!==null){var a=f(t);if(a!==null){if(t=a.tag,t===13){if(t=h(a),t!==null){e.blockedOn=t,Uh(e.priority,function(){if(a.tag===13){var i=zt();i=us(i);var l=Hn(a,i);l!==null&&Rt(l,a,i),hc(a,i)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ul(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=xc(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);vs=i,a.target.dispatchEvent(i),vs=null}else return t=Tn(a),t!==null&&hm(t),e.blockedOn=a,!1;t.shift()}return!0}function ym(e,t,a){Ul(e)&&a.delete(t)}function V1(){yc=!1,Qa!==null&&Ul(Qa)&&(Qa=null),Wa!==null&&Ul(Wa)&&(Wa=null),Za!==null&&Ul(Za)&&(Za=null),fr.forEach(ym),mr.forEach(ym)}function _l(e,t){e.blockedOn===t&&(e.blockedOn=null,yc||(yc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,V1)))}var Hl=null;function vm(e){Hl!==e&&(Hl=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Hl===e&&(Hl=null);for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],l=e[t+2];if(typeof i!="function"){if(bc(i||a)===null)continue;break}var s=Tn(a);s!==null&&(e.splice(t,3),t-=3,bo(s,{pending:!0,data:l,method:a.method,action:i},i,l))}}))}function hr(e){function t(j){return _l(j,e)}Qa!==null&&_l(Qa,e),Wa!==null&&_l(Wa,e),Za!==null&&_l(Za,e),fr.forEach(t),mr.forEach(t);for(var a=0;a<Ka.length;a++){var i=Ka[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ka.length&&(a=Ka[0],a.blockedOn===null);)bm(a),a.blockedOn===null&&Ka.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var l=a[i],s=a[i+1],m=l[xt]||null;if(typeof s=="function")m||vm(a);else if(m){var g=null;if(s&&s.hasAttribute("formAction")){if(l=s,m=s[xt]||null)g=m.formAction;else if(bc(l)!==null)continue}else g=m.action;typeof g=="function"?a[i+1]=g:(a.splice(i,3),i-=3),vm(a)}}}function vc(e){this._internalRoot=e}ql.prototype.render=vc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,i=zt();mm(a,i,e,t,null,null)},ql.prototype.unmount=vc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mm(e.current,2,null,e,null,null),jl(),t[En]=null}};function ql(e){this._internalRoot=e}ql.prototype.unstable_scheduleHydration=function(e){if(e){var t=Lu();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ka.length&&t!==0&&t<Ka[a].priority;a++);Ka.splice(a,0,e),a===0&&bm(e)}};var wm=o.version;if(wm!=="19.1.0")throw Error(c(527,wm,"19.1.0"));H.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=b(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var G1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:E,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pl.isDisabled&&Pl.supportsFiber)try{yi=Pl.inject(G1),St=Pl}catch{}}return xr.createRoot=function(e,t){if(!d(e))throw Error(c(299));var a=!1,i="",l=Yf,s=Uf,m=_f,g=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(g=t.unstable_transitionCallbacks)),t=dm(e,1,!1,null,null,a,i,l,s,m,g,null),e[En]=t.current,ac(e),new vc(t)},xr.hydrateRoot=function(e,t,a){if(!d(e))throw Error(c(299));var i=!1,l="",s=Yf,m=Uf,g=_f,j=null,L=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(g=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(j=a.unstable_transitionCallbacks),a.formState!==void 0&&(L=a.formState)),t=dm(e,1,!0,t,a??null,i,l,s,m,g,j,L),t.context=fm(null),a=t.current,i=zt(),i=us(i),l=Oa(i),l.callback=null,Ba(a,l,i),a=i,t.current.lanes=a,wi(t,a),ta(t),e[En]=t.current,ac(e),new ql(t)},xr.version="19.1.0",xr}var Rm;function nx(){if(Rm)return Sc.exports;Rm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),Sc.exports=ax(),Sc.exports}var ix=nx();const rx=fu(ix);var br={},Mm;function lx(){if(Mm)return br;Mm=1,Object.defineProperty(br,"__esModule",{value:!0}),br.parse=h,br.serialize=p;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,o=/^[\u0021-\u003A\u003C-\u007E]*$/,u=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,c=/^[\u0020-\u003A\u003D-\u007E]*$/,d=Object.prototype.toString,f=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function h(S,M){const k=new f,P=S.length;if(P<2)return k;const R=(M==null?void 0:M.decode)||v;let Y=0;do{const w=S.indexOf("=",Y);if(w===-1)break;const I=S.indexOf(";",Y),J=I===-1?P:I;if(w>J){Y=S.lastIndexOf(";",w-1)+1;continue}const K=x(S,Y,w),he=b(S,w,K),B=S.slice(K,he);if(k[B]===void 0){let se=x(S,w+1,J),D=b(S,J,se);const te=R(S.slice(se,D));k[B]=te}Y=J+1}while(Y<P);return k}function x(S,M,k){do{const P=S.charCodeAt(M);if(P!==32&&P!==9)return M}while(++M<k);return k}function b(S,M,k){for(;M>k;){const P=S.charCodeAt(--M);if(P!==32&&P!==9)return M+1}return k}function p(S,M,k){const P=(k==null?void 0:k.encode)||encodeURIComponent;if(!r.test(S))throw new TypeError(`argument name is invalid: ${S}`);const R=P(M);if(!o.test(R))throw new TypeError(`argument val is invalid: ${M}`);let Y=S+"="+R;if(!k)return Y;if(k.maxAge!==void 0){if(!Number.isInteger(k.maxAge))throw new TypeError(`option maxAge is invalid: ${k.maxAge}`);Y+="; Max-Age="+k.maxAge}if(k.domain){if(!u.test(k.domain))throw new TypeError(`option domain is invalid: ${k.domain}`);Y+="; Domain="+k.domain}if(k.path){if(!c.test(k.path))throw new TypeError(`option path is invalid: ${k.path}`);Y+="; Path="+k.path}if(k.expires){if(!z(k.expires)||!Number.isFinite(k.expires.valueOf()))throw new TypeError(`option expires is invalid: ${k.expires}`);Y+="; Expires="+k.expires.toUTCString()}if(k.httpOnly&&(Y+="; HttpOnly"),k.secure&&(Y+="; Secure"),k.partitioned&&(Y+="; Partitioned"),k.priority)switch(typeof k.priority=="string"?k.priority.toLowerCase():void 0){case"low":Y+="; Priority=Low";break;case"medium":Y+="; Priority=Medium";break;case"high":Y+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${k.priority}`)}if(k.sameSite)switch(typeof k.sameSite=="string"?k.sameSite.toLowerCase():k.sameSite){case!0:case"strict":Y+="; SameSite=Strict";break;case"lax":Y+="; SameSite=Lax";break;case"none":Y+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${k.sameSite}`)}return Y}function v(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function z(S){return d.call(S)==="[object Date]"}return br}lx();var Dm="popstate";function sx(r={}){function o(c,d){let{pathname:f,search:h,hash:x}=c.location;return Fc("",{pathname:f,search:h,hash:x},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function u(c,d){return typeof d=="string"?d:Sr(d)}return cx(o,u,null,r)}function Ge(r,o){if(r===!1||r===null||typeof r>"u")throw new Error(o)}function Qt(r,o){if(!r){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function ox(){return Math.random().toString(36).substring(2,10)}function Om(r,o){return{usr:r.state,key:r.key,idx:o}}function Fc(r,o,u=null,c){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof o=="string"?hi(o):o,state:u,key:o&&o.key||c||ox()}}function Sr({pathname:r="/",search:o="",hash:u=""}){return o&&o!=="?"&&(r+=o.charAt(0)==="?"?o:"?"+o),u&&u!=="#"&&(r+=u.charAt(0)==="#"?u:"#"+u),r}function hi(r){let o={};if(r){let u=r.indexOf("#");u>=0&&(o.hash=r.substring(u),r=r.substring(0,u));let c=r.indexOf("?");c>=0&&(o.search=r.substring(c),r=r.substring(0,c)),r&&(o.pathname=r)}return o}function cx(r,o,u,c={}){let{window:d=document.defaultView,v5Compat:f=!1}=c,h=d.history,x="POP",b=null,p=v();p==null&&(p=0,h.replaceState({...h.state,idx:p},""));function v(){return(h.state||{idx:null}).idx}function z(){x="POP";let R=v(),Y=R==null?null:R-p;p=R,b&&b({action:x,location:P.location,delta:Y})}function S(R,Y){x="PUSH";let w=Fc(P.location,R,Y);p=v()+1;let I=Om(w,p),J=P.createHref(w);try{h.pushState(I,"",J)}catch(K){if(K instanceof DOMException&&K.name==="DataCloneError")throw K;d.location.assign(J)}f&&b&&b({action:x,location:P.location,delta:1})}function M(R,Y){x="REPLACE";let w=Fc(P.location,R,Y);p=v();let I=Om(w,p),J=P.createHref(w);h.replaceState(I,"",J),f&&b&&b({action:x,location:P.location,delta:0})}function k(R){return ux(R)}let P={get action(){return x},get location(){return r(d,h)},listen(R){if(b)throw new Error("A history only accepts one active listener");return d.addEventListener(Dm,z),b=R,()=>{d.removeEventListener(Dm,z),b=null}},createHref(R){return o(d,R)},createURL:k,encodeLocation(R){let Y=k(R);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:S,replace:M,go(R){return h.go(R)}};return P}function ux(r,o=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Ge(u,"No window.location.(origin|href) available to create URL");let c=typeof r=="string"?r:Sr(r);return c=c.replace(/ $/,"%20"),!o&&c.startsWith("//")&&(c=u+c),new URL(c,u)}function Rp(r,o,u="/"){return dx(r,o,u,!1)}function dx(r,o,u,c){let d=typeof o=="string"?hi(o):o,f=Ca(d.pathname||"/",u);if(f==null)return null;let h=Mp(r);fx(h);let x=null;for(let b=0;x==null&&b<h.length;++b){let p=Sx(f);x=wx(h[b],p,c)}return x}function Mp(r,o=[],u=[],c=""){let d=(f,h,x)=>{let b={relativePath:x===void 0?f.path||"":x,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};b.relativePath.startsWith("/")&&(Ge(b.relativePath.startsWith(c),`Absolute route path "${b.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(c.length));let p=Sa([c,b.relativePath]),v=u.concat(b);f.children&&f.children.length>0&&(Ge(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Mp(f.children,o,v,p)),!(f.path==null&&!f.index)&&o.push({path:p,score:yx(p,f.index),routesMeta:v})};return r.forEach((f,h)=>{var x;if(f.path===""||!((x=f.path)!=null&&x.includes("?")))d(f,h);else for(let b of Dp(f.path))d(f,h,b)}),o}function Dp(r){let o=r.split("/");if(o.length===0)return[];let[u,...c]=o,d=u.endsWith("?"),f=u.replace(/\?$/,"");if(c.length===0)return d?[f,""]:[f];let h=Dp(c.join("/")),x=[];return x.push(...h.map(b=>b===""?f:[f,b].join("/"))),d&&x.push(...h),x.map(b=>r.startsWith("/")&&b===""?"/":b)}function fx(r){r.sort((o,u)=>o.score!==u.score?u.score-o.score:vx(o.routesMeta.map(c=>c.childrenIndex),u.routesMeta.map(c=>c.childrenIndex)))}var mx=/^:[\w-]+$/,px=3,hx=2,gx=1,xx=10,bx=-2,Bm=r=>r==="*";function yx(r,o){let u=r.split("/"),c=u.length;return u.some(Bm)&&(c+=bx),o&&(c+=hx),u.filter(d=>!Bm(d)).reduce((d,f)=>d+(mx.test(f)?px:f===""?gx:xx),c)}function vx(r,o){return r.length===o.length&&r.slice(0,-1).every((c,d)=>c===o[d])?r[r.length-1]-o[o.length-1]:0}function wx(r,o,u=!1){let{routesMeta:c}=r,d={},f="/",h=[];for(let x=0;x<c.length;++x){let b=c[x],p=x===c.length-1,v=f==="/"?o:o.slice(f.length)||"/",z=Zl({path:b.relativePath,caseSensitive:b.caseSensitive,end:p},v),S=b.route;if(!z&&p&&u&&!c[c.length-1].route.index&&(z=Zl({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},v)),!z)return null;Object.assign(d,z.params),h.push({params:d,pathname:Sa([f,z.pathname]),pathnameBase:Ax(Sa([f,z.pathnameBase])),route:S}),z.pathnameBase!=="/"&&(f=Sa([f,z.pathnameBase]))}return h}function Zl(r,o){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[u,c]=jx(r.path,r.caseSensitive,r.end),d=o.match(u);if(!d)return null;let f=d[0],h=f.replace(/(.)\/+$/,"$1"),x=d.slice(1);return{params:c.reduce((p,{paramName:v,isOptional:z},S)=>{if(v==="*"){let k=x[S]||"";h=f.slice(0,f.length-k.length).replace(/(.)\/+$/,"$1")}const M=x[S];return z&&!M?p[v]=void 0:p[v]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:f,pathnameBase:h,pattern:r}}function jx(r,o=!1,u=!0){Qt(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let c=[],d="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,x,b)=>(c.push({paramName:x,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(c.push({paramName:"*"}),d+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?d+="\\/*$":r!==""&&r!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,o?void 0:"i"),c]}function Sx(r){try{return r.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Qt(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),r}}function Ca(r,o){if(o==="/")return r;if(!r.toLowerCase().startsWith(o.toLowerCase()))return null;let u=o.endsWith("/")?o.length-1:o.length,c=r.charAt(u);return c&&c!=="/"?null:r.slice(u)||"/"}function Cx(r,o="/"){let{pathname:u,search:c="",hash:d=""}=typeof r=="string"?hi(r):r;return{pathname:u?u.startsWith("/")?u:Nx(u,o):o,search:Tx(c),hash:kx(d)}}function Nx(r,o){let u=o.replace(/\/+$/,"").split("/");return r.split("/").forEach(d=>{d===".."?u.length>1&&u.pop():d!=="."&&u.push(d)}),u.length>1?u.join("/"):"/"}function Ac(r,o,u,c){return`Cannot include a '${r}' character in a manually specified \`to.${o}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ex(r){return r.filter((o,u)=>u===0||o.route.path&&o.route.path.length>0)}function pu(r){let o=Ex(r);return o.map((u,c)=>c===o.length-1?u.pathname:u.pathnameBase)}function hu(r,o,u,c=!1){let d;typeof r=="string"?d=hi(r):(d={...r},Ge(!d.pathname||!d.pathname.includes("?"),Ac("?","pathname","search",d)),Ge(!d.pathname||!d.pathname.includes("#"),Ac("#","pathname","hash",d)),Ge(!d.search||!d.search.includes("#"),Ac("#","search","hash",d)));let f=r===""||d.pathname==="",h=f?"/":d.pathname,x;if(h==null)x=u;else{let z=o.length-1;if(!c&&h.startsWith("..")){let S=h.split("/");for(;S[0]==="..";)S.shift(),z-=1;d.pathname=S.join("/")}x=z>=0?o[z]:"/"}let b=Cx(d,x),p=h&&h!=="/"&&h.endsWith("/"),v=(f||h===".")&&u.endsWith("/");return!b.pathname.endsWith("/")&&(p||v)&&(b.pathname+="/"),b}var Sa=r=>r.join("/").replace(/\/\/+/g,"/"),Ax=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Tx=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,kx=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function zx(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var Op=["POST","PUT","PATCH","DELETE"];new Set(Op);var Rx=["GET",...Op];new Set(Rx);var gi=y.createContext(null);gi.displayName="DataRouter";var as=y.createContext(null);as.displayName="DataRouterState";var Bp=y.createContext({isTransitioning:!1});Bp.displayName="ViewTransition";var Mx=y.createContext(new Map);Mx.displayName="Fetchers";var Dx=y.createContext(null);Dx.displayName="Await";var Wt=y.createContext(null);Wt.displayName="Navigation";var Er=y.createContext(null);Er.displayName="Location";var ra=y.createContext({outlet:null,matches:[],isDataRoute:!1});ra.displayName="Route";var gu=y.createContext(null);gu.displayName="RouteError";function Ox(r,{relative:o}={}){Ge(xi(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:c}=y.useContext(Wt),{hash:d,pathname:f,search:h}=Ar(r,{relative:o}),x=f;return u!=="/"&&(x=f==="/"?u:Sa([u,f])),c.createHref({pathname:x,search:h,hash:d})}function xi(){return y.useContext(Er)!=null}function Aa(){return Ge(xi(),"useLocation() may be used only in the context of a <Router> component."),y.useContext(Er).location}var Lp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Yp(r){y.useContext(Wt).static||y.useLayoutEffect(r)}function Up(){let{isDataRoute:r}=y.useContext(ra);return r?Gx():Bx()}function Bx(){Ge(xi(),"useNavigate() may be used only in the context of a <Router> component.");let r=y.useContext(gi),{basename:o,navigator:u}=y.useContext(Wt),{matches:c}=y.useContext(ra),{pathname:d}=Aa(),f=JSON.stringify(pu(c)),h=y.useRef(!1);return Yp(()=>{h.current=!0}),y.useCallback((b,p={})=>{if(Qt(h.current,Lp),!h.current)return;if(typeof b=="number"){u.go(b);return}let v=hu(b,JSON.parse(f),d,p.relative==="path");r==null&&o!=="/"&&(v.pathname=v.pathname==="/"?o:Sa([o,v.pathname])),(p.replace?u.replace:u.push)(v,p.state,p)},[o,u,f,d,r])}y.createContext(null);function Ar(r,{relative:o}={}){let{matches:u}=y.useContext(ra),{pathname:c}=Aa(),d=JSON.stringify(pu(u));return y.useMemo(()=>hu(r,JSON.parse(d),c,o==="path"),[r,d,c,o])}function Lx(r,o){return _p(r,o)}function _p(r,o,u,c){var Y;Ge(xi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=y.useContext(Wt),{matches:f}=y.useContext(ra),h=f[f.length-1],x=h?h.params:{},b=h?h.pathname:"/",p=h?h.pathnameBase:"/",v=h&&h.route;{let w=v&&v.path||"";Hp(b,!v||w.endsWith("*")||w.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${b}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w==="/"?"*":`${w}/*`}">.`)}let z=Aa(),S;if(o){let w=typeof o=="string"?hi(o):o;Ge(p==="/"||((Y=w.pathname)==null?void 0:Y.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${w.pathname}" was given in the \`location\` prop.`),S=w}else S=z;let M=S.pathname||"/",k=M;if(p!=="/"){let w=p.replace(/^\//,"").split("/");k="/"+M.replace(/^\//,"").split("/").slice(w.length).join("/")}let P=Rp(r,{pathname:k});Qt(v||P!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Qt(P==null||P[P.length-1].route.element!==void 0||P[P.length-1].route.Component!==void 0||P[P.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let R=qx(P&&P.map(w=>Object.assign({},w,{params:Object.assign({},x,w.params),pathname:Sa([p,d.encodeLocation?d.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?p:Sa([p,d.encodeLocation?d.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),f,u,c);return o&&R?y.createElement(Er.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},R):R}function Yx(){let r=Vx(),o=zx(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),u=r instanceof Error?r.stack:null,c="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:c},f={padding:"2px 4px",backgroundColor:c},h=null;return console.error("Error handled by React Router default ErrorBoundary:",r),h=y.createElement(y.Fragment,null,y.createElement("p",null,"💿 Hey developer 👋"),y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",y.createElement("code",{style:f},"ErrorBoundary")," or"," ",y.createElement("code",{style:f},"errorElement")," prop on your route.")),y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},o),u?y.createElement("pre",{style:d},u):null,h)}var Ux=y.createElement(Yx,null),_x=class extends y.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,o){return o.location!==r.location||o.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:o.error,location:o.location,revalidation:r.revalidation||o.revalidation}}componentDidCatch(r,o){console.error("React Router caught the following error during render",r,o)}render(){return this.state.error!==void 0?y.createElement(ra.Provider,{value:this.props.routeContext},y.createElement(gu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Hx({routeContext:r,match:o,children:u}){let c=y.useContext(gi);return c&&c.static&&c.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=o.route.id),y.createElement(ra.Provider,{value:r},u)}function qx(r,o=[],u=null,c=null){if(r==null){if(!u)return null;if(u.errors)r=u.matches;else if(o.length===0&&!u.initialized&&u.matches.length>0)r=u.matches;else return null}let d=r,f=u==null?void 0:u.errors;if(f!=null){let b=d.findIndex(p=>p.route.id&&(f==null?void 0:f[p.route.id])!==void 0);Ge(b>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),d=d.slice(0,Math.min(d.length,b+1))}let h=!1,x=-1;if(u)for(let b=0;b<d.length;b++){let p=d[b];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(x=b),p.route.id){let{loaderData:v,errors:z}=u,S=p.route.loader&&!v.hasOwnProperty(p.route.id)&&(!z||z[p.route.id]===void 0);if(p.route.lazy||S){h=!0,x>=0?d=d.slice(0,x+1):d=[d[0]];break}}}return d.reduceRight((b,p,v)=>{let z,S=!1,M=null,k=null;u&&(z=f&&p.route.id?f[p.route.id]:void 0,M=p.route.errorElement||Ux,h&&(x<0&&v===0?(Hp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,k=null):x===v&&(S=!0,k=p.route.hydrateFallbackElement||null)));let P=o.concat(d.slice(0,v+1)),R=()=>{let Y;return z?Y=M:S?Y=k:p.route.Component?Y=y.createElement(p.route.Component,null):p.route.element?Y=p.route.element:Y=b,y.createElement(Hx,{match:p,routeContext:{outlet:b,matches:P,isDataRoute:u!=null},children:Y})};return u&&(p.route.ErrorBoundary||p.route.errorElement||v===0)?y.createElement(_x,{location:u.location,revalidation:u.revalidation,component:M,error:z,children:R(),routeContext:{outlet:null,matches:P,isDataRoute:!0}}):R()},null)}function xu(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Px(r){let o=y.useContext(gi);return Ge(o,xu(r)),o}function Xx(r){let o=y.useContext(as);return Ge(o,xu(r)),o}function Fx(r){let o=y.useContext(ra);return Ge(o,xu(r)),o}function bu(r){let o=Fx(r),u=o.matches[o.matches.length-1];return Ge(u.route.id,`${r} can only be used on routes that contain a unique "id"`),u.route.id}function Ix(){return bu("useRouteId")}function Vx(){var c;let r=y.useContext(gu),o=Xx("useRouteError"),u=bu("useRouteError");return r!==void 0?r:(c=o.errors)==null?void 0:c[u]}function Gx(){let{router:r}=Px("useNavigate"),o=bu("useNavigate"),u=y.useRef(!1);return Yp(()=>{u.current=!0}),y.useCallback(async(d,f={})=>{Qt(u.current,Lp),u.current&&(typeof d=="number"?r.navigate(d):await r.navigate(d,{fromRouteId:o,...f}))},[r,o])}var Lm={};function Hp(r,o,u){!o&&!Lm[r]&&(Lm[r]=!0,Qt(!1,u))}y.memo(Qx);function Qx({routes:r,future:o,state:u}){return _p(r,void 0,u,o)}function qp({to:r,replace:o,state:u,relative:c}){Ge(xi(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=y.useContext(Wt);Qt(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:f}=y.useContext(ra),{pathname:h}=Aa(),x=Up(),b=hu(r,pu(f),h,c==="path"),p=JSON.stringify(b);return y.useEffect(()=>{x(JSON.parse(p),{replace:o,state:u,relative:c})},[x,p,c,o,u]),null}function Xt(r){Ge(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Wx({basename:r="/",children:o=null,location:u,navigationType:c="POP",navigator:d,static:f=!1}){Ge(!xi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),x=y.useMemo(()=>({basename:h,navigator:d,static:f,future:{}}),[h,d,f]);typeof u=="string"&&(u=hi(u));let{pathname:b="/",search:p="",hash:v="",state:z=null,key:S="default"}=u,M=y.useMemo(()=>{let k=Ca(b,h);return k==null?null:{location:{pathname:k,search:p,hash:v,state:z,key:S},navigationType:c}},[h,b,p,v,z,S,c]);return Qt(M!=null,`<Router basename="${h}"> is not able to match the URL "${b}${p}${v}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:y.createElement(Wt.Provider,{value:x},y.createElement(Er.Provider,{children:o,value:M}))}function Zx({children:r,location:o}){return Lx(Ic(r),o)}function Ic(r,o=[]){let u=[];return y.Children.forEach(r,(c,d)=>{if(!y.isValidElement(c))return;let f=[...o,d];if(c.type===y.Fragment){u.push.apply(u,Ic(c.props.children,f));return}Ge(c.type===Xt,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ge(!c.props.index||!c.props.children,"An index route cannot have child routes.");let h={id:c.props.id||f.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(h.children=Ic(c.props.children,f)),u.push(h)}),u}var Vl="get",Gl="application/x-www-form-urlencoded";function ns(r){return r!=null&&typeof r.tagName=="string"}function Kx(r){return ns(r)&&r.tagName.toLowerCase()==="button"}function $x(r){return ns(r)&&r.tagName.toLowerCase()==="form"}function Jx(r){return ns(r)&&r.tagName.toLowerCase()==="input"}function e2(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function t2(r,o){return r.button===0&&(!o||o==="_self")&&!e2(r)}var Xl=null;function a2(){if(Xl===null)try{new FormData(document.createElement("form"),0),Xl=!1}catch{Xl=!0}return Xl}var n2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Tc(r){return r!=null&&!n2.has(r)?(Qt(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Gl}"`),null):r}function i2(r,o){let u,c,d,f,h;if($x(r)){let x=r.getAttribute("action");c=x?Ca(x,o):null,u=r.getAttribute("method")||Vl,d=Tc(r.getAttribute("enctype"))||Gl,f=new FormData(r)}else if(Kx(r)||Jx(r)&&(r.type==="submit"||r.type==="image")){let x=r.form;if(x==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=r.getAttribute("formaction")||x.getAttribute("action");if(c=b?Ca(b,o):null,u=r.getAttribute("formmethod")||x.getAttribute("method")||Vl,d=Tc(r.getAttribute("formenctype"))||Tc(x.getAttribute("enctype"))||Gl,f=new FormData(x,r),!a2()){let{name:p,type:v,value:z}=r;if(v==="image"){let S=p?`${p}.`:"";f.append(`${S}x`,"0"),f.append(`${S}y`,"0")}else p&&f.append(p,z)}}else{if(ns(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Vl,c=null,d=Gl,h=r}return f&&d==="text/plain"&&(h=f,f=void 0),{action:c,method:u.toLowerCase(),encType:d,formData:f,body:h}}function yu(r,o){if(r===!1||r===null||typeof r>"u")throw new Error(o)}async function r2(r,o){if(r.id in o)return o[r.id];try{let u=await import(r.module);return o[r.id]=u,u}catch(u){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function l2(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function s2(r,o,u){let c=await Promise.all(r.map(async d=>{let f=o.routes[d.route.id];if(f){let h=await r2(f,u);return h.links?h.links():[]}return[]}));return d2(c.flat(1).filter(l2).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function Ym(r,o,u,c,d,f){let h=(b,p)=>u[p]?b.route.id!==u[p].route.id:!0,x=(b,p)=>{var v;return u[p].pathname!==b.pathname||((v=u[p].route.path)==null?void 0:v.endsWith("*"))&&u[p].params["*"]!==b.params["*"]};return f==="assets"?o.filter((b,p)=>h(b,p)||x(b,p)):f==="data"?o.filter((b,p)=>{var z;let v=c.routes[b.route.id];if(!v||!v.hasLoader)return!1;if(h(b,p)||x(b,p))return!0;if(b.route.shouldRevalidate){let S=b.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:((z=u[0])==null?void 0:z.params)||{},nextUrl:new URL(r,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function o2(r,o,{includeHydrateFallback:u}={}){return c2(r.map(c=>{let d=o.routes[c.route.id];if(!d)return[];let f=[d.module];return d.clientActionModule&&(f=f.concat(d.clientActionModule)),d.clientLoaderModule&&(f=f.concat(d.clientLoaderModule)),u&&d.hydrateFallbackModule&&(f=f.concat(d.hydrateFallbackModule)),d.imports&&(f=f.concat(d.imports)),f}).flat(1))}function c2(r){return[...new Set(r)]}function u2(r){let o={},u=Object.keys(r).sort();for(let c of u)o[c]=r[c];return o}function d2(r,o){let u=new Set;return new Set(o),r.reduce((c,d)=>{let f=JSON.stringify(u2(d));return u.has(f)||(u.add(f),c.push({key:f,link:d})),c},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var f2=new Set([100,101,204,205]);function m2(r,o){let u=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return u.pathname==="/"?u.pathname="_root.data":o&&Ca(u.pathname,o)==="/"?u.pathname=`${o.replace(/\/$/,"")}/_root.data`:u.pathname=`${u.pathname.replace(/\/$/,"")}.data`,u}function Pp(){let r=y.useContext(gi);return yu(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function p2(){let r=y.useContext(as);return yu(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var vu=y.createContext(void 0);vu.displayName="FrameworkContext";function Xp(){let r=y.useContext(vu);return yu(r,"You must render this element inside a <HydratedRouter> element"),r}function h2(r,o){let u=y.useContext(vu),[c,d]=y.useState(!1),[f,h]=y.useState(!1),{onFocus:x,onBlur:b,onMouseEnter:p,onMouseLeave:v,onTouchStart:z}=o,S=y.useRef(null);y.useEffect(()=>{if(r==="render"&&h(!0),r==="viewport"){let P=Y=>{Y.forEach(w=>{h(w.isIntersecting)})},R=new IntersectionObserver(P,{threshold:.5});return S.current&&R.observe(S.current),()=>{R.disconnect()}}},[r]),y.useEffect(()=>{if(c){let P=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(P)}}},[c]);let M=()=>{d(!0)},k=()=>{d(!1),h(!1)};return u?r!=="intent"?[f,S,{}]:[f,S,{onFocus:yr(x,M),onBlur:yr(b,k),onMouseEnter:yr(p,M),onMouseLeave:yr(v,k),onTouchStart:yr(z,M)}]:[!1,S,{}]}function yr(r,o){return u=>{r&&r(u),u.defaultPrevented||o(u)}}function g2({page:r,...o}){let{router:u}=Pp(),c=y.useMemo(()=>Rp(u.routes,r,u.basename),[u.routes,r,u.basename]);return c?y.createElement(b2,{page:r,matches:c,...o}):null}function x2(r){let{manifest:o,routeModules:u}=Xp(),[c,d]=y.useState([]);return y.useEffect(()=>{let f=!1;return s2(r,o,u).then(h=>{f||d(h)}),()=>{f=!0}},[r,o,u]),c}function b2({page:r,matches:o,...u}){let c=Aa(),{manifest:d,routeModules:f}=Xp(),{basename:h}=Pp(),{loaderData:x,matches:b}=p2(),p=y.useMemo(()=>Ym(r,o,b,d,c,"data"),[r,o,b,d,c]),v=y.useMemo(()=>Ym(r,o,b,d,c,"assets"),[r,o,b,d,c]),z=y.useMemo(()=>{if(r===c.pathname+c.search+c.hash)return[];let k=new Set,P=!1;if(o.forEach(Y=>{var I;let w=d.routes[Y.route.id];!w||!w.hasLoader||(!p.some(J=>J.route.id===Y.route.id)&&Y.route.id in x&&((I=f[Y.route.id])!=null&&I.shouldRevalidate)||w.hasClientLoader?P=!0:k.add(Y.route.id))}),k.size===0)return[];let R=m2(r,h);return P&&k.size>0&&R.searchParams.set("_routes",o.filter(Y=>k.has(Y.route.id)).map(Y=>Y.route.id).join(",")),[R.pathname+R.search]},[h,x,c,d,p,o,r,f]),S=y.useMemo(()=>o2(v,d),[v,d]),M=x2(v);return y.createElement(y.Fragment,null,z.map(k=>y.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...u})),S.map(k=>y.createElement("link",{key:k,rel:"modulepreload",href:k,...u})),M.map(({key:k,link:P})=>y.createElement("link",{key:k,...P})))}function y2(...r){return o=>{r.forEach(u=>{typeof u=="function"?u(o):u!=null&&(u.current=o)})}}var Fp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Fp&&(window.__reactRouterVersion="7.6.2")}catch{}function v2({basename:r,children:o,window:u}){let c=y.useRef();c.current==null&&(c.current=sx({window:u,v5Compat:!0}));let d=c.current,[f,h]=y.useState({action:d.action,location:d.location}),x=y.useCallback(b=>{y.startTransition(()=>h(b))},[h]);return y.useLayoutEffect(()=>d.listen(x),[d,x]),y.createElement(Wx,{basename:r,children:o,location:f.location,navigationType:f.action,navigator:d})}var Ip=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wa=y.forwardRef(function({onClick:o,discover:u="render",prefetch:c="none",relative:d,reloadDocument:f,replace:h,state:x,target:b,to:p,preventScrollReset:v,viewTransition:z,...S},M){let{basename:k}=y.useContext(Wt),P=typeof p=="string"&&Ip.test(p),R,Y=!1;if(typeof p=="string"&&P&&(R=p,Fp))try{let D=new URL(window.location.href),te=p.startsWith("//")?new URL(D.protocol+p):new URL(p),Z=Ca(te.pathname,k);te.origin===D.origin&&Z!=null?p=Z+te.search+te.hash:Y=!0}catch{Qt(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let w=Ox(p,{relative:d}),[I,J,K]=h2(c,S),he=C2(p,{replace:h,state:x,target:b,preventScrollReset:v,relative:d,viewTransition:z});function B(D){o&&o(D),D.defaultPrevented||he(D)}let se=y.createElement("a",{...S,...K,href:R||w,onClick:Y||f?o:B,ref:y2(M,J),target:b,"data-discover":!P&&u==="render"?"true":void 0});return I&&!P?y.createElement(y.Fragment,null,se,y.createElement(g2,{page:w})):se});wa.displayName="Link";var w2=y.forwardRef(function({"aria-current":o="page",caseSensitive:u=!1,className:c="",end:d=!1,style:f,to:h,viewTransition:x,children:b,...p},v){let z=Ar(h,{relative:p.relative}),S=Aa(),M=y.useContext(as),{navigator:k,basename:P}=y.useContext(Wt),R=M!=null&&k2(z)&&x===!0,Y=k.encodeLocation?k.encodeLocation(z).pathname:z.pathname,w=S.pathname,I=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;u||(w=w.toLowerCase(),I=I?I.toLowerCase():null,Y=Y.toLowerCase()),I&&P&&(I=Ca(I,P)||I);const J=Y!=="/"&&Y.endsWith("/")?Y.length-1:Y.length;let K=w===Y||!d&&w.startsWith(Y)&&w.charAt(J)==="/",he=I!=null&&(I===Y||!d&&I.startsWith(Y)&&I.charAt(Y.length)==="/"),B={isActive:K,isPending:he,isTransitioning:R},se=K?o:void 0,D;typeof c=="function"?D=c(B):D=[c,K?"active":null,he?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let te=typeof f=="function"?f(B):f;return y.createElement(wa,{...p,"aria-current":se,className:D,ref:v,style:te,to:h,viewTransition:x},typeof b=="function"?b(B):b)});w2.displayName="NavLink";var j2=y.forwardRef(({discover:r="render",fetcherKey:o,navigate:u,reloadDocument:c,replace:d,state:f,method:h=Vl,action:x,onSubmit:b,relative:p,preventScrollReset:v,viewTransition:z,...S},M)=>{let k=A2(),P=T2(x,{relative:p}),R=h.toLowerCase()==="get"?"get":"post",Y=typeof x=="string"&&Ip.test(x),w=I=>{if(b&&b(I),I.defaultPrevented)return;I.preventDefault();let J=I.nativeEvent.submitter,K=(J==null?void 0:J.getAttribute("formmethod"))||h;k(J||I.currentTarget,{fetcherKey:o,method:K,navigate:u,replace:d,state:f,relative:p,preventScrollReset:v,viewTransition:z})};return y.createElement("form",{ref:M,method:R,action:P,onSubmit:c?b:w,...S,"data-discover":!Y&&r==="render"?"true":void 0})});j2.displayName="Form";function S2(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vp(r){let o=y.useContext(gi);return Ge(o,S2(r)),o}function C2(r,{target:o,replace:u,state:c,preventScrollReset:d,relative:f,viewTransition:h}={}){let x=Up(),b=Aa(),p=Ar(r,{relative:f});return y.useCallback(v=>{if(t2(v,o)){v.preventDefault();let z=u!==void 0?u:Sr(b)===Sr(p);x(r,{replace:z,state:c,preventScrollReset:d,relative:f,viewTransition:h})}},[b,x,p,u,c,o,r,d,f,h])}var N2=0,E2=()=>`__${String(++N2)}__`;function A2(){let{router:r}=Vp("useSubmit"),{basename:o}=y.useContext(Wt),u=Ix();return y.useCallback(async(c,d={})=>{let{action:f,method:h,encType:x,formData:b,body:p}=i2(c,o);if(d.navigate===!1){let v=d.fetcherKey||E2();await r.fetch(v,u,d.action||f,{preventScrollReset:d.preventScrollReset,formData:b,body:p,formMethod:d.method||h,formEncType:d.encType||x,flushSync:d.flushSync})}else await r.navigate(d.action||f,{preventScrollReset:d.preventScrollReset,formData:b,body:p,formMethod:d.method||h,formEncType:d.encType||x,replace:d.replace,state:d.state,fromRouteId:u,flushSync:d.flushSync,viewTransition:d.viewTransition})},[r,o,u])}function T2(r,{relative:o}={}){let{basename:u}=y.useContext(Wt),c=y.useContext(ra);Ge(c,"useFormAction must be used inside a RouteContext");let[d]=c.matches.slice(-1),f={...Ar(r||".",{relative:o})},h=Aa();if(r==null){f.search=h.search;let x=new URLSearchParams(f.search),b=x.getAll("index");if(b.some(v=>v==="")){x.delete("index"),b.filter(z=>z).forEach(z=>x.append("index",z));let v=x.toString();f.search=v?`?${v}`:""}}return(!r||r===".")&&d.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(f.pathname=f.pathname==="/"?u:Sa([u,f.pathname])),Sr(f)}function k2(r,o={}){let u=y.useContext(Bp);Ge(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Vp("useViewTransitionState"),d=Ar(r,{relative:o.relative});if(!u.isTransitioning)return!1;let f=Ca(u.currentLocation.pathname,c)||u.currentLocation.pathname,h=Ca(u.nextLocation.pathname,c)||u.nextLocation.pathname;return Zl(d.pathname,h)!=null||Zl(d.pathname,f)!=null}[...f2];/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function z2(r,o,u){return(o=M2(o))in r?Object.defineProperty(r,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[o]=u,r}function Um(r,o){var u=Object.keys(r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);o&&(c=c.filter(function(d){return Object.getOwnPropertyDescriptor(r,d).enumerable})),u.push.apply(u,c)}return u}function ee(r){for(var o=1;o<arguments.length;o++){var u=arguments[o]!=null?arguments[o]:{};o%2?Um(Object(u),!0).forEach(function(c){z2(r,c,u[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(u)):Um(Object(u)).forEach(function(c){Object.defineProperty(r,c,Object.getOwnPropertyDescriptor(u,c))})}return r}function R2(r,o){if(typeof r!="object"||!r)return r;var u=r[Symbol.toPrimitive];if(u!==void 0){var c=u.call(r,o);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(r)}function M2(r){var o=R2(r,"string");return typeof o=="symbol"?o:o+""}const _m=()=>{};let wu={},Gp={},Qp=null,Wp={mark:_m,measure:_m};try{typeof window<"u"&&(wu=window),typeof document<"u"&&(Gp=document),typeof MutationObserver<"u"&&(Qp=MutationObserver),typeof performance<"u"&&(Wp=performance)}catch{}const{userAgent:Hm=""}=wu.navigator||{},tn=wu,Ie=Gp,qm=Qp,Fl=Wp;tn.document;const Ta=!!Ie.documentElement&&!!Ie.head&&typeof Ie.addEventListener=="function"&&typeof Ie.createElement=="function",Zp=~Hm.indexOf("MSIE")||~Hm.indexOf("Trident/");var D2=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,O2=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Kp={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},B2={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},$p=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],mt="classic",is="duotone",L2="sharp",Y2="sharp-duotone",Jp=[mt,is,L2,Y2],U2={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},_2={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},H2=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),q2={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},P2=["fak","fa-kit","fakd","fa-kit-duotone"],Pm={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},X2=["kit"],F2={kit:{"fa-kit":"fak"}},I2=["fak","fakd"],V2={kit:{fak:"fa-kit"}},Xm={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Il={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},G2=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Q2=["fak","fa-kit","fakd","fa-kit-duotone"],W2={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Z2={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},K2={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Vc={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},$2=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Gc=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...G2,...$2],J2=["solid","regular","light","thin","duotone","brands"],eh=[1,2,3,4,5,6,7,8,9,10],eb=eh.concat([11,12,13,14,15,16,17,18,19,20]),tb=[...Object.keys(K2),...J2,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Il.GROUP,Il.SWAP_OPACITY,Il.PRIMARY,Il.SECONDARY].concat(eh.map(r=>"".concat(r,"x"))).concat(eb.map(r=>"w-".concat(r))),ab={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Na="___FONT_AWESOME___",Qc=16,th="fa",ah="svg-inline--fa",Cn="data-fa-i2svg",Wc="data-fa-pseudo-element",nb="data-fa-pseudo-element-pending",ju="data-prefix",Su="data-icon",Fm="fontawesome-i2svg",ib="async",rb=["HTML","HEAD","STYLE","SCRIPT"],nh=(()=>{try{return!0}catch{return!1}})();function Tr(r){return new Proxy(r,{get(o,u){return u in o?o[u]:o[mt]}})}const ih=ee({},Kp);ih[mt]=ee(ee(ee(ee({},{"fa-duotone":"duotone"}),Kp[mt]),Pm.kit),Pm["kit-duotone"]);const lb=Tr(ih),Zc=ee({},q2);Zc[mt]=ee(ee(ee(ee({},{duotone:"fad"}),Zc[mt]),Xm.kit),Xm["kit-duotone"]);const Im=Tr(Zc),Kc=ee({},Vc);Kc[mt]=ee(ee({},Kc[mt]),V2.kit);const Cu=Tr(Kc),$c=ee({},Z2);$c[mt]=ee(ee({},$c[mt]),F2.kit);Tr($c);const sb=D2,rh="fa-layers-text",ob=O2,cb=ee({},U2);Tr(cb);const ub=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],kc=B2,db=[...X2,...tb],wr=tn.FontAwesomeConfig||{};function fb(r){var o=Ie.querySelector("script["+r+"]");if(o)return o.getAttribute(r)}function mb(r){return r===""?!0:r==="false"?!1:r==="true"?!0:r}Ie&&typeof Ie.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(o=>{let[u,c]=o;const d=mb(fb(u));d!=null&&(wr[c]=d)});const lh={styleDefault:"solid",familyDefault:mt,cssPrefix:th,replacementClass:ah,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};wr.familyPrefix&&(wr.cssPrefix=wr.familyPrefix);const pi=ee(ee({},lh),wr);pi.autoReplaceSvg||(pi.observeMutations=!1);const fe={};Object.keys(lh).forEach(r=>{Object.defineProperty(fe,r,{enumerable:!0,set:function(o){pi[r]=o,jr.forEach(u=>u(fe))},get:function(){return pi[r]}})});Object.defineProperty(fe,"familyPrefix",{enumerable:!0,set:function(r){pi.cssPrefix=r,jr.forEach(o=>o(fe))},get:function(){return pi.cssPrefix}});tn.FontAwesomeConfig=fe;const jr=[];function pb(r){return jr.push(r),()=>{jr.splice(jr.indexOf(r),1)}}const Ja=Qc,na={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function hb(r){if(!r||!Ta)return;const o=Ie.createElement("style");o.setAttribute("type","text/css"),o.innerHTML=r;const u=Ie.head.childNodes;let c=null;for(let d=u.length-1;d>-1;d--){const f=u[d],h=(f.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(h)>-1&&(c=f)}return Ie.head.insertBefore(o,c),r}const gb="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Cr(){let r=12,o="";for(;r-- >0;)o+=gb[Math.random()*62|0];return o}function bi(r){const o=[];for(let u=(r||[]).length>>>0;u--;)o[u]=r[u];return o}function Nu(r){return r.classList?bi(r.classList):(r.getAttribute("class")||"").split(" ").filter(o=>o)}function sh(r){return"".concat(r).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function xb(r){return Object.keys(r||{}).reduce((o,u)=>o+"".concat(u,'="').concat(sh(r[u]),'" '),"").trim()}function rs(r){return Object.keys(r||{}).reduce((o,u)=>o+"".concat(u,": ").concat(r[u].trim(),";"),"")}function Eu(r){return r.size!==na.size||r.x!==na.x||r.y!==na.y||r.rotate!==na.rotate||r.flipX||r.flipY}function bb(r){let{transform:o,containerWidth:u,iconWidth:c}=r;const d={transform:"translate(".concat(u/2," 256)")},f="translate(".concat(o.x*32,", ").concat(o.y*32,") "),h="scale(".concat(o.size/16*(o.flipX?-1:1),", ").concat(o.size/16*(o.flipY?-1:1),") "),x="rotate(".concat(o.rotate," 0 0)"),b={transform:"".concat(f," ").concat(h," ").concat(x)},p={transform:"translate(".concat(c/2*-1," -256)")};return{outer:d,inner:b,path:p}}function yb(r){let{transform:o,width:u=Qc,height:c=Qc,startCentered:d=!1}=r,f="";return d&&Zp?f+="translate(".concat(o.x/Ja-u/2,"em, ").concat(o.y/Ja-c/2,"em) "):d?f+="translate(calc(-50% + ".concat(o.x/Ja,"em), calc(-50% + ").concat(o.y/Ja,"em)) "):f+="translate(".concat(o.x/Ja,"em, ").concat(o.y/Ja,"em) "),f+="scale(".concat(o.size/Ja*(o.flipX?-1:1),", ").concat(o.size/Ja*(o.flipY?-1:1),") "),f+="rotate(".concat(o.rotate,"deg) "),f}var vb=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function oh(){const r=th,o=ah,u=fe.cssPrefix,c=fe.replacementClass;let d=vb;if(u!==r||c!==o){const f=new RegExp("\\.".concat(r,"\\-"),"g"),h=new RegExp("\\--".concat(r,"\\-"),"g"),x=new RegExp("\\.".concat(o),"g");d=d.replace(f,".".concat(u,"-")).replace(h,"--".concat(u,"-")).replace(x,".".concat(c))}return d}let Vm=!1;function zc(){fe.autoAddCss&&!Vm&&(hb(oh()),Vm=!0)}var wb={mixout(){return{dom:{css:oh,insertCss:zc}}},hooks(){return{beforeDOMElementCreation(){zc()},beforeI2svg(){zc()}}}};const Ea=tn||{};Ea[Na]||(Ea[Na]={});Ea[Na].styles||(Ea[Na].styles={});Ea[Na].hooks||(Ea[Na].hooks={});Ea[Na].shims||(Ea[Na].shims=[]);var ia=Ea[Na];const ch=[],uh=function(){Ie.removeEventListener("DOMContentLoaded",uh),Kl=1,ch.map(r=>r())};let Kl=!1;Ta&&(Kl=(Ie.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ie.readyState),Kl||Ie.addEventListener("DOMContentLoaded",uh));function jb(r){Ta&&(Kl?setTimeout(r,0):ch.push(r))}function kr(r){const{tag:o,attributes:u={},children:c=[]}=r;return typeof r=="string"?sh(r):"<".concat(o," ").concat(xb(u),">").concat(c.map(kr).join(""),"</").concat(o,">")}function Gm(r,o,u){if(r&&r[o]&&r[o][u])return{prefix:o,iconName:u,icon:r[o][u]}}var Rc=function(o,u,c,d){var f=Object.keys(o),h=f.length,x=u,b,p,v;for(c===void 0?(b=1,v=o[f[0]]):(b=0,v=c);b<h;b++)p=f[b],v=x(v,o[p],p,o);return v};function Sb(r){const o=[];let u=0;const c=r.length;for(;u<c;){const d=r.charCodeAt(u++);if(d>=55296&&d<=56319&&u<c){const f=r.charCodeAt(u++);(f&64512)==56320?o.push(((d&1023)<<10)+(f&1023)+65536):(o.push(d),u--)}else o.push(d)}return o}function Jc(r){const o=Sb(r);return o.length===1?o[0].toString(16):null}function Cb(r,o){const u=r.length;let c=r.charCodeAt(o),d;return c>=55296&&c<=56319&&u>o+1&&(d=r.charCodeAt(o+1),d>=56320&&d<=57343)?(c-55296)*1024+d-56320+65536:c}function Qm(r){return Object.keys(r).reduce((o,u)=>{const c=r[u];return!!c.icon?o[c.iconName]=c.icon:o[u]=c,o},{})}function eu(r,o){let u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:c=!1}=u,d=Qm(o);typeof ia.hooks.addPack=="function"&&!c?ia.hooks.addPack(r,Qm(o)):ia.styles[r]=ee(ee({},ia.styles[r]||{}),d),r==="fas"&&eu("fa",o)}const{styles:Nr,shims:Nb}=ia,dh=Object.keys(Cu),Eb=dh.reduce((r,o)=>(r[o]=Object.keys(Cu[o]),r),{});let Au=null,fh={},mh={},ph={},hh={},gh={};function Ab(r){return~db.indexOf(r)}function Tb(r,o){const u=o.split("-"),c=u[0],d=u.slice(1).join("-");return c===r&&d!==""&&!Ab(d)?d:null}const xh=()=>{const r=c=>Rc(Nr,(d,f,h)=>(d[h]=Rc(f,c,{}),d),{});fh=r((c,d,f)=>(d[3]&&(c[d[3]]=f),d[2]&&d[2].filter(x=>typeof x=="number").forEach(x=>{c[x.toString(16)]=f}),c)),mh=r((c,d,f)=>(c[f]=f,d[2]&&d[2].filter(x=>typeof x=="string").forEach(x=>{c[x]=f}),c)),gh=r((c,d,f)=>{const h=d[2];return c[f]=f,h.forEach(x=>{c[x]=f}),c});const o="far"in Nr||fe.autoFetchSvg,u=Rc(Nb,(c,d)=>{const f=d[0];let h=d[1];const x=d[2];return h==="far"&&!o&&(h="fas"),typeof f=="string"&&(c.names[f]={prefix:h,iconName:x}),typeof f=="number"&&(c.unicodes[f.toString(16)]={prefix:h,iconName:x}),c},{names:{},unicodes:{}});ph=u.names,hh=u.unicodes,Au=ls(fe.styleDefault,{family:fe.familyDefault})};pb(r=>{Au=ls(r.styleDefault,{family:fe.familyDefault})});xh();function Tu(r,o){return(fh[r]||{})[o]}function kb(r,o){return(mh[r]||{})[o]}function Sn(r,o){return(gh[r]||{})[o]}function bh(r){return ph[r]||{prefix:null,iconName:null}}function zb(r){const o=hh[r],u=Tu("fas",r);return o||(u?{prefix:"fas",iconName:u}:null)||{prefix:null,iconName:null}}function an(){return Au}const yh=()=>({prefix:null,iconName:null,rest:[]});function Rb(r){let o=mt;const u=dh.reduce((c,d)=>(c[d]="".concat(fe.cssPrefix,"-").concat(d),c),{});return Jp.forEach(c=>{(r.includes(u[c])||r.some(d=>Eb[c].includes(d)))&&(o=c)}),o}function ls(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:u=mt}=o,c=lb[u][r];if(u===is&&!r)return"fad";const d=Im[u][r]||Im[u][c],f=r in ia.styles?r:null;return d||f||null}function Mb(r){let o=[],u=null;return r.forEach(c=>{const d=Tb(fe.cssPrefix,c);d?u=d:c&&o.push(c)}),{iconName:u,rest:o}}function Wm(r){return r.sort().filter((o,u,c)=>c.indexOf(o)===u)}function ss(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:u=!1}=o;let c=null;const d=Gc.concat(Q2),f=Wm(r.filter(z=>d.includes(z))),h=Wm(r.filter(z=>!Gc.includes(z))),x=f.filter(z=>(c=z,!$p.includes(z))),[b=null]=x,p=Rb(f),v=ee(ee({},Mb(h)),{},{prefix:ls(b,{family:p})});return ee(ee(ee({},v),Lb({values:r,family:p,styles:Nr,config:fe,canonical:v,givenPrefix:c})),Db(u,c,v))}function Db(r,o,u){let{prefix:c,iconName:d}=u;if(r||!c||!d)return{prefix:c,iconName:d};const f=o==="fa"?bh(d):{},h=Sn(c,d);return d=f.iconName||h||d,c=f.prefix||c,c==="far"&&!Nr.far&&Nr.fas&&!fe.autoFetchSvg&&(c="fas"),{prefix:c,iconName:d}}const Ob=Jp.filter(r=>r!==mt||r!==is),Bb=Object.keys(Vc).filter(r=>r!==mt).map(r=>Object.keys(Vc[r])).flat();function Lb(r){const{values:o,family:u,canonical:c,givenPrefix:d="",styles:f={},config:h={}}=r,x=u===is,b=o.includes("fa-duotone")||o.includes("fad"),p=h.familyDefault==="duotone",v=c.prefix==="fad"||c.prefix==="fa-duotone";if(!x&&(b||p||v)&&(c.prefix="fad"),(o.includes("fa-brands")||o.includes("fab"))&&(c.prefix="fab"),!c.prefix&&Ob.includes(u)&&(Object.keys(f).find(S=>Bb.includes(S))||h.autoFetchSvg)){const S=H2.get(u).defaultShortPrefixId;c.prefix=S,c.iconName=Sn(c.prefix,c.iconName)||c.iconName}return(c.prefix==="fa"||d==="fa")&&(c.prefix=an()||"fas"),c}class Yb{constructor(){this.definitions={}}add(){for(var o=arguments.length,u=new Array(o),c=0;c<o;c++)u[c]=arguments[c];const d=u.reduce(this._pullDefinitions,{});Object.keys(d).forEach(f=>{this.definitions[f]=ee(ee({},this.definitions[f]||{}),d[f]),eu(f,d[f]);const h=Cu[mt][f];h&&eu(h,d[f]),xh()})}reset(){this.definitions={}}_pullDefinitions(o,u){const c=u.prefix&&u.iconName&&u.icon?{0:u}:u;return Object.keys(c).map(d=>{const{prefix:f,iconName:h,icon:x}=c[d],b=x[2];o[f]||(o[f]={}),b.length>0&&b.forEach(p=>{typeof p=="string"&&(o[f][p]=x)}),o[f][h]=x}),o}}let Zm=[],di={};const mi={},Ub=Object.keys(mi);function _b(r,o){let{mixoutsTo:u}=o;return Zm=r,di={},Object.keys(mi).forEach(c=>{Ub.indexOf(c)===-1&&delete mi[c]}),Zm.forEach(c=>{const d=c.mixout?c.mixout():{};if(Object.keys(d).forEach(f=>{typeof d[f]=="function"&&(u[f]=d[f]),typeof d[f]=="object"&&Object.keys(d[f]).forEach(h=>{u[f]||(u[f]={}),u[f][h]=d[f][h]})}),c.hooks){const f=c.hooks();Object.keys(f).forEach(h=>{di[h]||(di[h]=[]),di[h].push(f[h])})}c.provides&&c.provides(mi)}),u}function tu(r,o){for(var u=arguments.length,c=new Array(u>2?u-2:0),d=2;d<u;d++)c[d-2]=arguments[d];return(di[r]||[]).forEach(h=>{o=h.apply(null,[o,...c])}),o}function Nn(r){for(var o=arguments.length,u=new Array(o>1?o-1:0),c=1;c<o;c++)u[c-1]=arguments[c];(di[r]||[]).forEach(f=>{f.apply(null,u)})}function nn(){const r=arguments[0],o=Array.prototype.slice.call(arguments,1);return mi[r]?mi[r].apply(null,o):void 0}function au(r){r.prefix==="fa"&&(r.prefix="fas");let{iconName:o}=r;const u=r.prefix||an();if(o)return o=Sn(u,o)||o,Gm(vh.definitions,u,o)||Gm(ia.styles,u,o)}const vh=new Yb,Hb=()=>{fe.autoReplaceSvg=!1,fe.observeMutations=!1,Nn("noAuto")},qb={i2svg:function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ta?(Nn("beforeI2svg",r),nn("pseudoElements2svg",r),nn("i2svg",r)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:o}=r;fe.autoReplaceSvg===!1&&(fe.autoReplaceSvg=!0),fe.observeMutations=!0,jb(()=>{Xb({autoReplaceSvgRoot:o}),Nn("watch",r)})}},Pb={icon:r=>{if(r===null)return null;if(typeof r=="object"&&r.prefix&&r.iconName)return{prefix:r.prefix,iconName:Sn(r.prefix,r.iconName)||r.iconName};if(Array.isArray(r)&&r.length===2){const o=r[1].indexOf("fa-")===0?r[1].slice(3):r[1],u=ls(r[0]);return{prefix:u,iconName:Sn(u,o)||o}}if(typeof r=="string"&&(r.indexOf("".concat(fe.cssPrefix,"-"))>-1||r.match(sb))){const o=ss(r.split(" "),{skipLookups:!0});return{prefix:o.prefix||an(),iconName:Sn(o.prefix,o.iconName)||o.iconName}}if(typeof r=="string"){const o=an();return{prefix:o,iconName:Sn(o,r)||r}}}},Mt={noAuto:Hb,config:fe,dom:qb,parse:Pb,library:vh,findIconDefinition:au,toHtml:kr},Xb=function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:o=Ie}=r;(Object.keys(ia.styles).length>0||fe.autoFetchSvg)&&Ta&&fe.autoReplaceSvg&&Mt.dom.i2svg({node:o})};function os(r,o){return Object.defineProperty(r,"abstract",{get:o}),Object.defineProperty(r,"html",{get:function(){return r.abstract.map(u=>kr(u))}}),Object.defineProperty(r,"node",{get:function(){if(!Ta)return;const u=Ie.createElement("div");return u.innerHTML=r.html,u.children}}),r}function Fb(r){let{children:o,main:u,mask:c,attributes:d,styles:f,transform:h}=r;if(Eu(h)&&u.found&&!c.found){const{width:x,height:b}=u,p={x:x/b/2,y:.5};d.style=rs(ee(ee({},f),{},{"transform-origin":"".concat(p.x+h.x/16,"em ").concat(p.y+h.y/16,"em")}))}return[{tag:"svg",attributes:d,children:o}]}function Ib(r){let{prefix:o,iconName:u,children:c,attributes:d,symbol:f}=r;const h=f===!0?"".concat(o,"-").concat(fe.cssPrefix,"-").concat(u):f;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:ee(ee({},d),{},{id:h}),children:c}]}]}function ku(r){const{icons:{main:o,mask:u},prefix:c,iconName:d,transform:f,symbol:h,title:x,maskId:b,titleId:p,extra:v,watchable:z=!1}=r,{width:S,height:M}=u.found?u:o,k=I2.includes(c),P=[fe.replacementClass,d?"".concat(fe.cssPrefix,"-").concat(d):""].filter(K=>v.classes.indexOf(K)===-1).filter(K=>K!==""||!!K).concat(v.classes).join(" ");let R={children:[],attributes:ee(ee({},v.attributes),{},{"data-prefix":c,"data-icon":d,class:P,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(M)})};const Y=k&&!~v.classes.indexOf("fa-fw")?{width:"".concat(S/M*16*.0625,"em")}:{};z&&(R.attributes[Cn]=""),x&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(p||Cr())},children:[x]}),delete R.attributes.title);const w=ee(ee({},R),{},{prefix:c,iconName:d,main:o,mask:u,maskId:b,transform:f,symbol:h,styles:ee(ee({},Y),v.styles)}),{children:I,attributes:J}=u.found&&o.found?nn("generateAbstractMask",w)||{children:[],attributes:{}}:nn("generateAbstractIcon",w)||{children:[],attributes:{}};return w.children=I,w.attributes=J,h?Ib(w):Fb(w)}function Km(r){const{content:o,width:u,height:c,transform:d,title:f,extra:h,watchable:x=!1}=r,b=ee(ee(ee({},h.attributes),f?{title:f}:{}),{},{class:h.classes.join(" ")});x&&(b[Cn]="");const p=ee({},h.styles);Eu(d)&&(p.transform=yb({transform:d,startCentered:!0,width:u,height:c}),p["-webkit-transform"]=p.transform);const v=rs(p);v.length>0&&(b.style=v);const z=[];return z.push({tag:"span",attributes:b,children:[o]}),f&&z.push({tag:"span",attributes:{class:"sr-only"},children:[f]}),z}function Vb(r){const{content:o,title:u,extra:c}=r,d=ee(ee(ee({},c.attributes),u?{title:u}:{}),{},{class:c.classes.join(" ")}),f=rs(c.styles);f.length>0&&(d.style=f);const h=[];return h.push({tag:"span",attributes:d,children:[o]}),u&&h.push({tag:"span",attributes:{class:"sr-only"},children:[u]}),h}const{styles:Mc}=ia;function nu(r){const o=r[0],u=r[1],[c]=r.slice(4);let d=null;return Array.isArray(c)?d={tag:"g",attributes:{class:"".concat(fe.cssPrefix,"-").concat(kc.GROUP)},children:[{tag:"path",attributes:{class:"".concat(fe.cssPrefix,"-").concat(kc.SECONDARY),fill:"currentColor",d:c[0]}},{tag:"path",attributes:{class:"".concat(fe.cssPrefix,"-").concat(kc.PRIMARY),fill:"currentColor",d:c[1]}}]}:d={tag:"path",attributes:{fill:"currentColor",d:c}},{found:!0,width:o,height:u,icon:d}}const Gb={found:!1,width:512,height:512};function Qb(r,o){!nh&&!fe.showMissingIcons&&r&&console.error('Icon with name "'.concat(r,'" and prefix "').concat(o,'" is missing.'))}function iu(r,o){let u=o;return o==="fa"&&fe.styleDefault!==null&&(o=an()),new Promise((c,d)=>{if(u==="fa"){const f=bh(r)||{};r=f.iconName||r,o=f.prefix||o}if(r&&o&&Mc[o]&&Mc[o][r]){const f=Mc[o][r];return c(nu(f))}Qb(r,o),c(ee(ee({},Gb),{},{icon:fe.showMissingIcons&&r?nn("missingIconAbstract")||{}:{}}))})}const $m=()=>{},ru=fe.measurePerformance&&Fl&&Fl.mark&&Fl.measure?Fl:{mark:$m,measure:$m},vr='FA "6.7.2"',Wb=r=>(ru.mark("".concat(vr," ").concat(r," begins")),()=>wh(r)),wh=r=>{ru.mark("".concat(vr," ").concat(r," ends")),ru.measure("".concat(vr," ").concat(r),"".concat(vr," ").concat(r," begins"),"".concat(vr," ").concat(r," ends"))};var zu={begin:Wb,end:wh};const Ql=()=>{};function Jm(r){return typeof(r.getAttribute?r.getAttribute(Cn):null)=="string"}function Zb(r){const o=r.getAttribute?r.getAttribute(ju):null,u=r.getAttribute?r.getAttribute(Su):null;return o&&u}function Kb(r){return r&&r.classList&&r.classList.contains&&r.classList.contains(fe.replacementClass)}function $b(){return fe.autoReplaceSvg===!0?Wl.replace:Wl[fe.autoReplaceSvg]||Wl.replace}function Jb(r){return Ie.createElementNS("http://www.w3.org/2000/svg",r)}function ey(r){return Ie.createElement(r)}function jh(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:u=r.tag==="svg"?Jb:ey}=o;if(typeof r=="string")return Ie.createTextNode(r);const c=u(r.tag);return Object.keys(r.attributes||[]).forEach(function(f){c.setAttribute(f,r.attributes[f])}),(r.children||[]).forEach(function(f){c.appendChild(jh(f,{ceFn:u}))}),c}function ty(r){let o=" ".concat(r.outerHTML," ");return o="".concat(o,"Font Awesome fontawesome.com "),o}const Wl={replace:function(r){const o=r[0];if(o.parentNode)if(r[1].forEach(u=>{o.parentNode.insertBefore(jh(u),o)}),o.getAttribute(Cn)===null&&fe.keepOriginalSource){let u=Ie.createComment(ty(o));o.parentNode.replaceChild(u,o)}else o.remove()},nest:function(r){const o=r[0],u=r[1];if(~Nu(o).indexOf(fe.replacementClass))return Wl.replace(r);const c=new RegExp("".concat(fe.cssPrefix,"-.*"));if(delete u[0].attributes.id,u[0].attributes.class){const f=u[0].attributes.class.split(" ").reduce((h,x)=>(x===fe.replacementClass||x.match(c)?h.toSvg.push(x):h.toNode.push(x),h),{toNode:[],toSvg:[]});u[0].attributes.class=f.toSvg.join(" "),f.toNode.length===0?o.removeAttribute("class"):o.setAttribute("class",f.toNode.join(" "))}const d=u.map(f=>kr(f)).join(`
`);o.setAttribute(Cn,""),o.innerHTML=d}};function ep(r){r()}function Sh(r,o){const u=typeof o=="function"?o:Ql;if(r.length===0)u();else{let c=ep;fe.mutateApproach===ib&&(c=tn.requestAnimationFrame||ep),c(()=>{const d=$b(),f=zu.begin("mutate");r.map(d),f(),u()})}}let Ru=!1;function Ch(){Ru=!0}function lu(){Ru=!1}let $l=null;function tp(r){if(!qm||!fe.observeMutations)return;const{treeCallback:o=Ql,nodeCallback:u=Ql,pseudoElementsCallback:c=Ql,observeMutationsRoot:d=Ie}=r;$l=new qm(f=>{if(Ru)return;const h=an();bi(f).forEach(x=>{if(x.type==="childList"&&x.addedNodes.length>0&&!Jm(x.addedNodes[0])&&(fe.searchPseudoElements&&c(x.target),o(x.target)),x.type==="attributes"&&x.target.parentNode&&fe.searchPseudoElements&&c(x.target.parentNode),x.type==="attributes"&&Jm(x.target)&&~ub.indexOf(x.attributeName))if(x.attributeName==="class"&&Zb(x.target)){const{prefix:b,iconName:p}=ss(Nu(x.target));x.target.setAttribute(ju,b||h),p&&x.target.setAttribute(Su,p)}else Kb(x.target)&&u(x.target)})}),Ta&&$l.observe(d,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function ay(){$l&&$l.disconnect()}function ny(r){const o=r.getAttribute("style");let u=[];return o&&(u=o.split(";").reduce((c,d)=>{const f=d.split(":"),h=f[0],x=f.slice(1);return h&&x.length>0&&(c[h]=x.join(":").trim()),c},{})),u}function iy(r){const o=r.getAttribute("data-prefix"),u=r.getAttribute("data-icon"),c=r.innerText!==void 0?r.innerText.trim():"";let d=ss(Nu(r));return d.prefix||(d.prefix=an()),o&&u&&(d.prefix=o,d.iconName=u),d.iconName&&d.prefix||(d.prefix&&c.length>0&&(d.iconName=kb(d.prefix,r.innerText)||Tu(d.prefix,Jc(r.innerText))),!d.iconName&&fe.autoFetchSvg&&r.firstChild&&r.firstChild.nodeType===Node.TEXT_NODE&&(d.iconName=r.firstChild.data)),d}function ry(r){const o=bi(r.attributes).reduce((d,f)=>(d.name!=="class"&&d.name!=="style"&&(d[f.name]=f.value),d),{}),u=r.getAttribute("title"),c=r.getAttribute("data-fa-title-id");return fe.autoA11y&&(u?o["aria-labelledby"]="".concat(fe.replacementClass,"-title-").concat(c||Cr()):(o["aria-hidden"]="true",o.focusable="false")),o}function ly(){return{iconName:null,title:null,titleId:null,prefix:null,transform:na,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ap(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:u,prefix:c,rest:d}=iy(r),f=ry(r),h=tu("parseNodeAttributes",{},r);let x=o.styleParser?ny(r):[];return ee({iconName:u,title:r.getAttribute("title"),titleId:r.getAttribute("data-fa-title-id"),prefix:c,transform:na,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:d,styles:x,attributes:f}},h)}const{styles:sy}=ia;function Nh(r){const o=fe.autoReplaceSvg==="nest"?ap(r,{styleParser:!1}):ap(r);return~o.extra.classes.indexOf(rh)?nn("generateLayersText",r,o):nn("generateSvgReplacementMutation",r,o)}function oy(){return[...P2,...Gc]}function np(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ta)return Promise.resolve();const u=Ie.documentElement.classList,c=v=>u.add("".concat(Fm,"-").concat(v)),d=v=>u.remove("".concat(Fm,"-").concat(v)),f=fe.autoFetchSvg?oy():$p.concat(Object.keys(sy));f.includes("fa")||f.push("fa");const h=[".".concat(rh,":not([").concat(Cn,"])")].concat(f.map(v=>".".concat(v,":not([").concat(Cn,"])"))).join(", ");if(h.length===0)return Promise.resolve();let x=[];try{x=bi(r.querySelectorAll(h))}catch{}if(x.length>0)c("pending"),d("complete");else return Promise.resolve();const b=zu.begin("onTree"),p=x.reduce((v,z)=>{try{const S=Nh(z);S&&v.push(S)}catch(S){nh||S.name==="MissingIcon"&&console.error(S)}return v},[]);return new Promise((v,z)=>{Promise.all(p).then(S=>{Sh(S,()=>{c("active"),c("complete"),d("pending"),typeof o=="function"&&o(),b(),v()})}).catch(S=>{b(),z(S)})})}function cy(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Nh(r).then(u=>{u&&Sh([u],o)})}function uy(r){return function(o){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const c=(o||{}).icon?o:au(o||{});let{mask:d}=u;return d&&(d=(d||{}).icon?d:au(d||{})),r(c,ee(ee({},u),{},{mask:d}))}}const dy=function(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:u=na,symbol:c=!1,mask:d=null,maskId:f=null,title:h=null,titleId:x=null,classes:b=[],attributes:p={},styles:v={}}=o;if(!r)return;const{prefix:z,iconName:S,icon:M}=r;return os(ee({type:"icon"},r),()=>(Nn("beforeDOMElementCreation",{iconDefinition:r,params:o}),fe.autoA11y&&(h?p["aria-labelledby"]="".concat(fe.replacementClass,"-title-").concat(x||Cr()):(p["aria-hidden"]="true",p.focusable="false")),ku({icons:{main:nu(M),mask:d?nu(d.icon):{found:!1,width:null,height:null,icon:{}}},prefix:z,iconName:S,transform:ee(ee({},na),u),symbol:c,title:h,maskId:f,titleId:x,extra:{attributes:p,styles:v,classes:b}})))};var fy={mixout(){return{icon:uy(dy)}},hooks(){return{mutationObserverCallbacks(r){return r.treeCallback=np,r.nodeCallback=cy,r}}},provides(r){r.i2svg=function(o){const{node:u=Ie,callback:c=()=>{}}=o;return np(u,c)},r.generateSvgReplacementMutation=function(o,u){const{iconName:c,title:d,titleId:f,prefix:h,transform:x,symbol:b,mask:p,maskId:v,extra:z}=u;return new Promise((S,M)=>{Promise.all([iu(c,h),p.iconName?iu(p.iconName,p.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(k=>{let[P,R]=k;S([o,ku({icons:{main:P,mask:R},prefix:h,iconName:c,transform:x,symbol:b,maskId:v,title:d,titleId:f,extra:z,watchable:!0})])}).catch(M)})},r.generateAbstractIcon=function(o){let{children:u,attributes:c,main:d,transform:f,styles:h}=o;const x=rs(h);x.length>0&&(c.style=x);let b;return Eu(f)&&(b=nn("generateAbstractTransformGrouping",{main:d,transform:f,containerWidth:d.width,iconWidth:d.width})),u.push(b||d.icon),{children:u,attributes:c}}}},my={mixout(){return{layer(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:u=[]}=o;return os({type:"layer"},()=>{Nn("beforeDOMElementCreation",{assembler:r,params:o});let c=[];return r(d=>{Array.isArray(d)?d.map(f=>{c=c.concat(f.abstract)}):c=c.concat(d.abstract)}),[{tag:"span",attributes:{class:["".concat(fe.cssPrefix,"-layers"),...u].join(" ")},children:c}]})}}}},py={mixout(){return{counter(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:u=null,classes:c=[],attributes:d={},styles:f={}}=o;return os({type:"counter",content:r},()=>(Nn("beforeDOMElementCreation",{content:r,params:o}),Vb({content:r.toString(),title:u,extra:{attributes:d,styles:f,classes:["".concat(fe.cssPrefix,"-layers-counter"),...c]}})))}}}},hy={mixout(){return{text(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:u=na,title:c=null,classes:d=[],attributes:f={},styles:h={}}=o;return os({type:"text",content:r},()=>(Nn("beforeDOMElementCreation",{content:r,params:o}),Km({content:r,transform:ee(ee({},na),u),title:c,extra:{attributes:f,styles:h,classes:["".concat(fe.cssPrefix,"-layers-text"),...d]}})))}}},provides(r){r.generateLayersText=function(o,u){const{title:c,transform:d,extra:f}=u;let h=null,x=null;if(Zp){const b=parseInt(getComputedStyle(o).fontSize,10),p=o.getBoundingClientRect();h=p.width/b,x=p.height/b}return fe.autoA11y&&!c&&(f.attributes["aria-hidden"]="true"),Promise.resolve([o,Km({content:o.innerHTML,width:h,height:x,transform:d,title:c,extra:f,watchable:!0})])}}};const gy=new RegExp('"',"ug"),ip=[1105920,1112319],rp=ee(ee(ee(ee({},{FontAwesome:{normal:"fas",400:"fas"}}),_2),ab),W2),su=Object.keys(rp).reduce((r,o)=>(r[o.toLowerCase()]=rp[o],r),{}),xy=Object.keys(su).reduce((r,o)=>{const u=su[o];return r[o]=u[900]||[...Object.entries(u)][0][1],r},{});function by(r){const o=r.replace(gy,""),u=Cb(o,0),c=u>=ip[0]&&u<=ip[1],d=o.length===2?o[0]===o[1]:!1;return{value:Jc(d?o[0]:o),isSecondary:c||d}}function yy(r,o){const u=r.replace(/^['"]|['"]$/g,"").toLowerCase(),c=parseInt(o),d=isNaN(c)?"normal":c;return(su[u]||{})[d]||xy[u]}function lp(r,o){const u="".concat(nb).concat(o.replace(":","-"));return new Promise((c,d)=>{if(r.getAttribute(u)!==null)return c();const h=bi(r.children).filter(S=>S.getAttribute(Wc)===o)[0],x=tn.getComputedStyle(r,o),b=x.getPropertyValue("font-family"),p=b.match(ob),v=x.getPropertyValue("font-weight"),z=x.getPropertyValue("content");if(h&&!p)return r.removeChild(h),c();if(p&&z!=="none"&&z!==""){const S=x.getPropertyValue("content");let M=yy(b,v);const{value:k,isSecondary:P}=by(S),R=p[0].startsWith("FontAwesome");let Y=Tu(M,k),w=Y;if(R){const I=zb(k);I.iconName&&I.prefix&&(Y=I.iconName,M=I.prefix)}if(Y&&!P&&(!h||h.getAttribute(ju)!==M||h.getAttribute(Su)!==w)){r.setAttribute(u,w),h&&r.removeChild(h);const I=ly(),{extra:J}=I;J.attributes[Wc]=o,iu(Y,M).then(K=>{const he=ku(ee(ee({},I),{},{icons:{main:K,mask:yh()},prefix:M,iconName:w,extra:J,watchable:!0})),B=Ie.createElementNS("http://www.w3.org/2000/svg","svg");o==="::before"?r.insertBefore(B,r.firstChild):r.appendChild(B),B.outerHTML=he.map(se=>kr(se)).join(`
`),r.removeAttribute(u),c()}).catch(d)}else c()}else c()})}function vy(r){return Promise.all([lp(r,"::before"),lp(r,"::after")])}function wy(r){return r.parentNode!==document.head&&!~rb.indexOf(r.tagName.toUpperCase())&&!r.getAttribute(Wc)&&(!r.parentNode||r.parentNode.tagName!=="svg")}function sp(r){if(Ta)return new Promise((o,u)=>{const c=bi(r.querySelectorAll("*")).filter(wy).map(vy),d=zu.begin("searchPseudoElements");Ch(),Promise.all(c).then(()=>{d(),lu(),o()}).catch(()=>{d(),lu(),u()})})}var jy={hooks(){return{mutationObserverCallbacks(r){return r.pseudoElementsCallback=sp,r}}},provides(r){r.pseudoElements2svg=function(o){const{node:u=Ie}=o;fe.searchPseudoElements&&sp(u)}}};let op=!1;var Sy={mixout(){return{dom:{unwatch(){Ch(),op=!0}}}},hooks(){return{bootstrap(){tp(tu("mutationObserverCallbacks",{}))},noAuto(){ay()},watch(r){const{observeMutationsRoot:o}=r;op?lu():tp(tu("mutationObserverCallbacks",{observeMutationsRoot:o}))}}}};const cp=r=>{let o={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return r.toLowerCase().split(" ").reduce((u,c)=>{const d=c.toLowerCase().split("-"),f=d[0];let h=d.slice(1).join("-");if(f&&h==="h")return u.flipX=!0,u;if(f&&h==="v")return u.flipY=!0,u;if(h=parseFloat(h),isNaN(h))return u;switch(f){case"grow":u.size=u.size+h;break;case"shrink":u.size=u.size-h;break;case"left":u.x=u.x-h;break;case"right":u.x=u.x+h;break;case"up":u.y=u.y-h;break;case"down":u.y=u.y+h;break;case"rotate":u.rotate=u.rotate+h;break}return u},o)};var Cy={mixout(){return{parse:{transform:r=>cp(r)}}},hooks(){return{parseNodeAttributes(r,o){const u=o.getAttribute("data-fa-transform");return u&&(r.transform=cp(u)),r}}},provides(r){r.generateAbstractTransformGrouping=function(o){let{main:u,transform:c,containerWidth:d,iconWidth:f}=o;const h={transform:"translate(".concat(d/2," 256)")},x="translate(".concat(c.x*32,", ").concat(c.y*32,") "),b="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),p="rotate(".concat(c.rotate," 0 0)"),v={transform:"".concat(x," ").concat(b," ").concat(p)},z={transform:"translate(".concat(f/2*-1," -256)")},S={outer:h,inner:v,path:z};return{tag:"g",attributes:ee({},S.outer),children:[{tag:"g",attributes:ee({},S.inner),children:[{tag:u.icon.tag,children:u.icon.children,attributes:ee(ee({},u.icon.attributes),S.path)}]}]}}}};const Dc={x:0,y:0,width:"100%",height:"100%"};function up(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return r.attributes&&(r.attributes.fill||o)&&(r.attributes.fill="black"),r}function Ny(r){return r.tag==="g"?r.children:[r]}var Ey={hooks(){return{parseNodeAttributes(r,o){const u=o.getAttribute("data-fa-mask"),c=u?ss(u.split(" ").map(d=>d.trim())):yh();return c.prefix||(c.prefix=an()),r.mask=c,r.maskId=o.getAttribute("data-fa-mask-id"),r}}},provides(r){r.generateAbstractMask=function(o){let{children:u,attributes:c,main:d,mask:f,maskId:h,transform:x}=o;const{width:b,icon:p}=d,{width:v,icon:z}=f,S=bb({transform:x,containerWidth:v,iconWidth:b}),M={tag:"rect",attributes:ee(ee({},Dc),{},{fill:"white"})},k=p.children?{children:p.children.map(up)}:{},P={tag:"g",attributes:ee({},S.inner),children:[up(ee({tag:p.tag,attributes:ee(ee({},p.attributes),S.path)},k))]},R={tag:"g",attributes:ee({},S.outer),children:[P]},Y="mask-".concat(h||Cr()),w="clip-".concat(h||Cr()),I={tag:"mask",attributes:ee(ee({},Dc),{},{id:Y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[M,R]},J={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:Ny(z)},I]};return u.push(J,{tag:"rect",attributes:ee({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(Y,")")},Dc)}),{children:u,attributes:c}}}},Ay={provides(r){let o=!1;tn.matchMedia&&(o=tn.matchMedia("(prefers-reduced-motion: reduce)").matches),r.missingIconAbstract=function(){const u=[],c={fill:"currentColor"},d={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};u.push({tag:"path",attributes:ee(ee({},c),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const f=ee(ee({},d),{},{attributeName:"opacity"}),h={tag:"circle",attributes:ee(ee({},c),{},{cx:"256",cy:"364",r:"28"}),children:[]};return o||h.children.push({tag:"animate",attributes:ee(ee({},d),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:ee(ee({},f),{},{values:"1;0;1;1;0;1;"})}),u.push(h),u.push({tag:"path",attributes:ee(ee({},c),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:o?[]:[{tag:"animate",attributes:ee(ee({},f),{},{values:"1;0;0;0;0;1;"})}]}),o||u.push({tag:"path",attributes:ee(ee({},c),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:ee(ee({},f),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:u}}}},Ty={hooks(){return{parseNodeAttributes(r,o){const u=o.getAttribute("data-fa-symbol"),c=u===null?!1:u===""?!0:u;return r.symbol=c,r}}}},ky=[wb,fy,my,py,hy,jy,Sy,Cy,Ey,Ay,Ty];_b(ky,{mixoutsTo:Mt});Mt.noAuto;Mt.config;Mt.library;Mt.dom;const ou=Mt.parse;Mt.findIconDefinition;Mt.toHtml;const zy=Mt.icon;Mt.layer;Mt.text;Mt.counter;var Oc={exports:{}},Bc,dp;function Ry(){if(dp)return Bc;dp=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Bc=r,Bc}var Lc,fp;function My(){if(fp)return Lc;fp=1;var r=Ry();function o(){}function u(){}return u.resetWarningCache=o,Lc=function(){function c(h,x,b,p,v,z){if(z!==r){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}c.isRequired=c;function d(){return c}var f={array:c,bigint:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:d,element:c,elementType:c,instanceOf:d,node:c,objectOf:d,oneOf:d,oneOfType:d,shape:d,exact:d,checkPropTypes:u,resetWarningCache:o};return f.PropTypes=f,f},Lc}var mp;function Dy(){return mp||(mp=1,Oc.exports=My()()),Oc.exports}var Oy=Dy();const Me=fu(Oy);function pp(r,o){var u=Object.keys(r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);o&&(c=c.filter(function(d){return Object.getOwnPropertyDescriptor(r,d).enumerable})),u.push.apply(u,c)}return u}function aa(r){for(var o=1;o<arguments.length;o++){var u=arguments[o]!=null?arguments[o]:{};o%2?pp(Object(u),!0).forEach(function(c){fi(r,c,u[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(u)):pp(Object(u)).forEach(function(c){Object.defineProperty(r,c,Object.getOwnPropertyDescriptor(u,c))})}return r}function Jl(r){"@babel/helpers - typeof";return Jl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Jl(r)}function fi(r,o,u){return o in r?Object.defineProperty(r,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[o]=u,r}function By(r,o){if(r==null)return{};var u={},c=Object.keys(r),d,f;for(f=0;f<c.length;f++)d=c[f],!(o.indexOf(d)>=0)&&(u[d]=r[d]);return u}function Ly(r,o){if(r==null)return{};var u=By(r,o),c,d;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(r);for(d=0;d<f.length;d++)c=f[d],!(o.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(r,c)&&(u[c]=r[c])}return u}function cu(r){return Yy(r)||Uy(r)||_y(r)||Hy()}function Yy(r){if(Array.isArray(r))return uu(r)}function Uy(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function _y(r,o){if(r){if(typeof r=="string")return uu(r,o);var u=Object.prototype.toString.call(r).slice(8,-1);if(u==="Object"&&r.constructor&&(u=r.constructor.name),u==="Map"||u==="Set")return Array.from(r);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return uu(r,o)}}function uu(r,o){(o==null||o>r.length)&&(o=r.length);for(var u=0,c=new Array(o);u<o;u++)c[u]=r[u];return c}function Hy(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qy(r){var o,u=r.beat,c=r.fade,d=r.beatFade,f=r.bounce,h=r.shake,x=r.flash,b=r.spin,p=r.spinPulse,v=r.spinReverse,z=r.pulse,S=r.fixedWidth,M=r.inverse,k=r.border,P=r.listItem,R=r.flip,Y=r.size,w=r.rotation,I=r.pull,J=(o={"fa-beat":u,"fa-fade":c,"fa-beat-fade":d,"fa-bounce":f,"fa-shake":h,"fa-flash":x,"fa-spin":b,"fa-spin-reverse":v,"fa-spin-pulse":p,"fa-pulse":z,"fa-fw":S,"fa-inverse":M,"fa-border":k,"fa-li":P,"fa-flip":R===!0,"fa-flip-horizontal":R==="horizontal"||R==="both","fa-flip-vertical":R==="vertical"||R==="both"},fi(o,"fa-".concat(Y),typeof Y<"u"&&Y!==null),fi(o,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),fi(o,"fa-pull-".concat(I),typeof I<"u"&&I!==null),fi(o,"fa-swap-opacity",r.swapOpacity),o);return Object.keys(J).map(function(K){return J[K]?K:null}).filter(function(K){return K})}function Py(r){return r=r-0,r===r}function Eh(r){return Py(r)?r:(r=r.replace(/[\-_\s]+(.)?/g,function(o,u){return u?u.toUpperCase():""}),r.substr(0,1).toLowerCase()+r.substr(1))}var Xy=["style"];function Fy(r){return r.charAt(0).toUpperCase()+r.slice(1)}function Iy(r){return r.split(";").map(function(o){return o.trim()}).filter(function(o){return o}).reduce(function(o,u){var c=u.indexOf(":"),d=Eh(u.slice(0,c)),f=u.slice(c+1).trim();return d.startsWith("webkit")?o[Fy(d)]=f:o[d]=f,o},{})}function Ah(r,o){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof o=="string")return o;var c=(o.children||[]).map(function(b){return Ah(r,b)}),d=Object.keys(o.attributes||{}).reduce(function(b,p){var v=o.attributes[p];switch(p){case"class":b.attrs.className=v,delete o.attributes.class;break;case"style":b.attrs.style=Iy(v);break;default:p.indexOf("aria-")===0||p.indexOf("data-")===0?b.attrs[p.toLowerCase()]=v:b.attrs[Eh(p)]=v}return b},{attrs:{}}),f=u.style,h=f===void 0?{}:f,x=Ly(u,Xy);return d.attrs.style=aa(aa({},d.attrs.style),h),r.apply(void 0,[o.tag,aa(aa({},d.attrs),x)].concat(cu(c)))}var Th=!1;try{Th=!0}catch{}function Vy(){if(!Th&&console&&typeof console.error=="function"){var r;(r=console).error.apply(r,arguments)}}function hp(r){if(r&&Jl(r)==="object"&&r.prefix&&r.iconName&&r.icon)return r;if(ou.icon)return ou.icon(r);if(r===null)return null;if(r&&Jl(r)==="object"&&r.prefix&&r.iconName)return r;if(Array.isArray(r)&&r.length===2)return{prefix:r[0],iconName:r[1]};if(typeof r=="string")return{prefix:"fas",iconName:r}}function Yc(r,o){return Array.isArray(o)&&o.length>0||!Array.isArray(o)&&o?fi({},r,o):{}}var gp={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},ja=Gt.forwardRef(function(r,o){var u=aa(aa({},gp),r),c=u.icon,d=u.mask,f=u.symbol,h=u.className,x=u.title,b=u.titleId,p=u.maskId,v=hp(c),z=Yc("classes",[].concat(cu(qy(u)),cu((h||"").split(" ")))),S=Yc("transform",typeof u.transform=="string"?ou.transform(u.transform):u.transform),M=Yc("mask",hp(d)),k=zy(v,aa(aa(aa(aa({},z),S),M),{},{symbol:f,title:x,titleId:b,maskId:p}));if(!k)return Vy("Could not find icon",v),null;var P=k.abstract,R={ref:o};return Object.keys(u).forEach(function(Y){gp.hasOwnProperty(Y)||(R[Y]=u[Y])}),Gy(P[0],R)});ja.displayName="FontAwesomeIcon";ja.propTypes={beat:Me.bool,border:Me.bool,beatFade:Me.bool,bounce:Me.bool,className:Me.string,fade:Me.bool,flash:Me.bool,mask:Me.oneOfType([Me.object,Me.array,Me.string]),maskId:Me.string,fixedWidth:Me.bool,inverse:Me.bool,flip:Me.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Me.oneOfType([Me.object,Me.array,Me.string]),listItem:Me.bool,pull:Me.oneOf(["right","left"]),pulse:Me.bool,rotation:Me.oneOf([0,90,180,270]),shake:Me.bool,size:Me.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Me.bool,spinPulse:Me.bool,spinReverse:Me.bool,symbol:Me.oneOfType([Me.bool,Me.string]),title:Me.string,titleId:Me.string,transform:Me.oneOfType([Me.string,Me.object]),swapOpacity:Me.bool};var Gy=Ah.bind(null,Gt.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Qy={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},Wy={prefix:"fas",iconName:"lock",icon:[448,512,[128274],"f023","M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"]},Zy={prefix:"fas",iconName:"screwdriver-wrench",icon:[512,512,["tools"],"f7d9","M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"]},Ky=Zy,$y={prefix:"fas",iconName:"tags",icon:[512,512,[],"f02c","M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5L0 80C0 53.5 21.5 32 48 32l149.5 0c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},Jy={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},e5={prefix:"fas",iconName:"images",icon:[576,512,[],"f302","M160 32c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L160 32zM396 138.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S480.9 320 472 320l-144 0-48 0-80 0c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84C360.5 132 368 128 376 128s15.5 4 20 10.7zM192 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 344c0 75.1 60.9 136 136 136l320 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-320 0c-48.6 0-88-39.4-88-88l0-224z"]},t5={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},a5=t5,n5={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},i5=n5,r5=({scrolled:r=!1})=>{const[o,u]=y.useState(!1),[c,d]=y.useState(!1),[f,h]=y.useState("/pavan-techno-constructions/images/logo.png"),x=Aa(),b=["/pavan-techno-constructions/images/logo.png","/pavan-techno-constructions/logo.png","/pavan-techno-constructions/assets/logo.png"];y.useEffect(()=>(document.body.classList.toggle("no-scroll",o),()=>document.body.classList.remove("no-scroll")),[o]),y.useEffect(()=>{u(!1)},[x]);const p=()=>u(!o),v=()=>u(!1),z=()=>{const M=b.indexOf(f)+1;console.log(`Logo failed to load from: ${f}`),M<b.length?(console.log(`Trying next path: ${b[M]}`),h(b[M])):(console.log("All logo paths failed, showing fallback"),d(!0))};return n.jsxs(n.Fragment,{children:[n.jsx("style",{jsx:!0,children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.95) 0%, 
            rgba(248, 250, 252, 0.95) 50%, 
            rgba(241, 245, 249, 0.95) 100%);
          backdrop-filter: blur(20px);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border-bottom: 1px solid rgba(59, 130, 246, 0.15);
          background-clip: padding-box;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .navbar::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, 
            rgba(59, 130, 246, 0.05) 0%, 
            rgba(37, 99, 235, 0.05) 50%, 
            rgba(29, 78, 216, 0.05) 100%);
          z-index: -1;
        }

        .navbar.scrolled {
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.98) 0%, 
            rgba(248, 250, 252, 0.98) 50%, 
            rgba(241, 245, 249, 0.98) 100%);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
          border-bottom: 1px solid rgba(59, 130, 246, 0.2);
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 70px;
          position: relative;
        }

        .logo-section {
          position: relative;
          z-index: 10;
        }

        .logo-container {
          display: flex;
          align-items: center;
          text-decoration: none;
          position: relative;
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.9) 0%, 
            rgba(248, 250, 252, 0.9) 100%);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 18px;
          backdrop-filter: blur(10px);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          overflow: hidden;
        }

        .logo-container::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(
            from 0deg,
            rgba(59, 130, 246, 0.6) 0deg,
            rgba(37, 99, 235, 0.6) 120deg,
            rgba(29, 78, 216, 0.6) 240deg,
            rgba(59, 130, 246, 0.6) 360deg
          );
          animation: rotate 6s linear infinite;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .logo-container:hover::before {
          opacity: 0.2;
        }

        .logo-container::after {
          content: '';
          position: absolute;
          inset: 1px;
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.95) 0%, 
            rgba(248, 250, 252, 0.95) 100%);
          border-radius: 17px;
          z-index: -1;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .logo-container:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 12px 28px rgba(59, 130, 246, 0.2);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .logo-hex {
          width: 40px;
          height: 40px;
          position: relative;
          margin-right: 0.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-hex::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          transition: all 0.3s ease;
          border: 2px solid #3b82f6;
        }

        .logo-container:hover .logo-hex::before {
          transform: rotate(180deg);
          background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
          border-color: #2563eb;
        }

        .logo-image {
          width: 28px;
          height: 28px;
          border-radius: 4px;
          position: relative;
          z-index: 2;
          object-fit: cover;
        }

        .logo-fallback {
          width: 28px;
          height: 28px;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          font-weight: 900;
          color: white;
          position: relative;
          z-index: 2;
        }

        .company-info {
          display: flex;
          flex-direction: column;
          font-family: 'Poppins', sans-serif;
        }

        .company-name {
          font-size: 1rem;
          font-weight: 800;
          background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
          letter-spacing: 0.3px;
        }

        .company-tagline {
          font-size: 0.6rem;
          color: rgba(59, 130, 246, 0.7);
          font-weight: 500;
          margin-top: 2px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          background: rgba(255, 255, 255, 0.6);
          padding: 0.4rem;
          border-radius: 20px;
          border: 1px solid rgba(59, 130, 246, 0.15);
          backdrop-filter: blur(15px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }

        .nav-item {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
        }

        .nav-item a {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: #334155;
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-size: 0.85rem;
          padding: 0.6rem 1rem;
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          z-index: 2;
          letter-spacing: 0.3px;
        }

        .nav-item.active a {
          color: white;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .nav-item.active::before {
          transform: scale(1) !important;
          opacity: 1 !important;
        }

        /* Unique hover effects for each nav item */
        .nav-item:nth-child(1)::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          border-radius: 12px;
          transform: scale(0) rotate(180deg);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          z-index: 1;
        }

        .nav-item:nth-child(2)::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          border-radius: 12px;
          transform: translateY(100%);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          z-index: 1;
        }

        .nav-item:nth-child(3)::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          border-radius: 12px;
          transform: translateX(-100%);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          z-index: 1;
        }

        .nav-item:nth-child(4)::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
          border-radius: 12px;
          transform: scale(0);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          z-index: 1;
        }

        .nav-item:nth-child(5)::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);
          border-radius: 12px;
          transform: rotateY(90deg);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          z-index: 1;
        }

        .nav-item:nth-child(6)::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          border-radius: 12px;
          transform: translateX(100%);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          z-index: 1;
        }

        /* Hover states */
        .nav-item:nth-child(1):hover::before {
          transform: scale(1) rotate(0deg);
        }

        .nav-item:nth-child(2):hover::before {
          transform: translateY(0%);
        }

        .nav-item:nth-child(3):hover::before {
          transform: translateX(0%);
        }

        .nav-item:nth-child(4):hover::before {
          transform: scale(1);
        }

        .nav-item:nth-child(5):hover::before {
          transform: rotateY(0deg);
        }

        .nav-item:nth-child(6):hover::before {
          transform: translateX(0%);
        }

        .nav-item:hover a {
          color: white;
          transform: translateY(-2px) scale(1.02);
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .nav-item svg {
          font-size: 0.9rem;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .nav-item:hover svg {
          transform: scale(1.15) rotate(5deg);
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
        }

        /* Specific icon animations */
        .nav-item:nth-child(1):hover svg {
          transform: scale(1.2) rotate(-10deg);
        }

        .nav-item:nth-child(2):hover svg {
          transform: scale(1.2) rotate(360deg);
        }

        .nav-item:nth-child(3):hover svg {
          transform: scale(1.2) rotate(15deg);
        }

        .nav-item:nth-child(4):hover svg {
          transform: scale(1.2) rotate(-15deg);
        }

        .nav-item:nth-child(5):hover svg {
          transform: scale(1.2) rotate(10deg);
        }

        .nav-item:nth-child(6):hover svg {
          transform: scale(1.2) rotate(-5deg);
        }

        .hamburger {
          display: none;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(37, 99, 235, 0.1) 100%);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 12px;
          padding: 0.6rem;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .hamburger:hover {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(37, 99, 235, 0.15) 100%);
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.2);
        }

        .hamburger svg {
          font-size: 1.3rem;
          color: #334155;
          transition: all 0.3s ease;
        }

        @media (min-width: 820px) and (max-width: 912px) {
          .container {
            padding: 0 1.5rem;
            max-width: 100%;
          }
          
          .nav-container {
            height: 85px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
          }
          
          .logo-container {
            padding: 0.6rem 1rem;
            border-radius: 16px;
            flex-shrink: 0;
          }
          
          .logo-hex {
            width: 40px;
            height: 40px;
            margin-right: 0.8rem;
          }
          
          .logo-image,
          .logo-fallback {
            width: 28px;
            height: 28px;
          }
          
          .company-name {
            font-size: 1rem;
            font-weight: 800;
            line-height: 1.1;
          }
          
          .company-tagline {
            font-size: 0.65rem;
            margin-top: 2px;
          }
          
          .nav-links {
            padding: 0.4rem;
            gap: 0.2rem;
            border-radius: 16px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
          }
          
          .nav-item a {
            padding: 0.5rem 0.8rem;
            font-size: 0.8rem;
            font-weight: 500;
            white-space: nowrap;
          }
          
          .nav-item svg {
            font-size: 0.8rem;
          }
          
          .hamburger {
            padding: 0.6rem;
            border-radius: 12px;
            flex-shrink: 0;
          }
          
          .hamburger svg {
            font-size: 1.2rem;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 1rem;
          }

          .nav-container {
            height: 60px;
          }

          .hamburger {
            display: block;
          }

          .logo-container {
            padding: 0.4rem 0.8rem;
          }

          .company-name {
            font-size: 0.9rem;
          }

          .company-tagline {
            font-size: 0.55rem;
          }

          .logo-hex {
            width: 35px;
            height: 35px;
            margin-right: 0.6rem;
          }

          .logo-image,
          .logo-fallback {
            width: 25px;
            height: 25px;
          }

          .nav-links {
            position: fixed;
            top: 60px;
            left: 0;
            right: 0;
            flex-direction: column;
            padding: 2rem;
            gap: 1rem;
            background: linear-gradient(135deg, 
              rgba(255, 255, 255, 0.98) 0%, 
              rgba(248, 250, 252, 0.98) 100%);
            backdrop-filter: blur(20px);
            border: none;
            border-radius: 0;
            transform: translateY(-100vh);
            opacity: 0;
            visibility: hidden;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            min-height: 100vh;
            justify-content: center;
            align-items: center;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          }

          .nav-links.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .nav-item a {
            width: 250px;
            justify-content: center;
            padding: 1.1rem;
            font-size: 1rem;
            border: 1px solid rgba(59, 130, 246, 0.2);
            background: rgba(255, 255, 255, 0.8);
            margin-bottom: 0.5rem;
          }

          .nav-item:hover a {
            transform: translateY(-3px) scale(1.05);
          }
        }

        .no-scroll {
          overflow: hidden;
        }

        /* Additional professional touches */
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: currentColor;
          transition: all 0.3s ease;
          transform: translateX(-50%);
          z-index: 3;
        }

        .nav-item:hover::after {
          width: 80%;
        }

        /* Glassmorphism enhancement */
        .navbar::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.03) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(37, 99, 235, 0.03) 0%, transparent 50%);
          pointer-events: none;
          z-index: -1;
        }
      `}),n.jsx("header",{className:`navbar ${r?"scrolled":""}`,children:n.jsx("div",{className:"container",children:n.jsxs("nav",{className:"nav-container",children:[n.jsx("div",{className:"logo-section",children:n.jsxs(wa,{to:"/",className:"logo-container",children:[n.jsx("div",{className:"logo-hex",children:c?n.jsx("div",{className:"logo-fallback",children:"PTC"}):n.jsx("img",{src:f,alt:"Pavan Techno Constructions",className:"logo-image",onError:z,onLoad:()=>console.log(`Logo loaded successfully from: ${f}`)})}),n.jsxs("div",{className:"company-info",children:[n.jsx("div",{className:"company-name",children:"PAVAN TECHNO CONSTRUCTIONS"}),n.jsx("div",{className:"company-tagline",children:"Engineering Excellence"})]})]})}),n.jsxs("div",{className:`nav-links ${o?"active":""}`,children:[n.jsx("div",{className:`nav-item ${x.pathname==="/"?"active":""}`,children:n.jsxs(wa,{to:"/",onClick:v,children:[n.jsx(ja,{icon:a5})," Home"]})}),n.jsx("div",{className:`nav-item ${x.pathname==="/services"?"active":""}`,children:n.jsxs(wa,{to:"/services",onClick:v,children:[n.jsx(ja,{icon:Ky})," Services"]})}),n.jsx("div",{className:`nav-item ${x.pathname==="/pricing"?"active":""}`,children:n.jsxs(wa,{to:"/pricing",onClick:v,children:[n.jsx(ja,{icon:$y})," Pricing"]})}),n.jsx("div",{className:`nav-item ${x.pathname==="/gallery"?"active":""}`,children:n.jsxs(wa,{to:"/gallery",onClick:v,children:[n.jsx(ja,{icon:e5})," Gallery"]})}),n.jsx("div",{className:`nav-item ${x.pathname==="/contact"?"active":""}`,children:n.jsxs(wa,{to:"/contact",onClick:v,children:[n.jsx(ja,{icon:Jy})," Contact"]})}),n.jsx("div",{className:`nav-item ${x.pathname==="/admin"?"active":""}`,children:n.jsxs(wa,{to:"/admin",onClick:v,className:x.pathname.startsWith("/admin")?"active":"",children:[n.jsx(ja,{icon:Wy})," Admin"]})})]}),n.jsx("button",{className:"hamburger",onClick:p,children:n.jsx(ja,{icon:o?i5:Qy})})]})})})]})},xp=({openPopup:r})=>{const[o,u]=y.useState({x:0,y:0}),[c,d]=y.useState(!1),[f,h]=y.useState(!1),[x,b]=y.useState(0),[p,v]=y.useState(!1),[z,S]=y.useState(!1),[M,k]=y.useState(!1),P=y.useRef(null),R=y.useRef([]),Y=y.useRef(null),w=y.useRef(null),I=y.useRef(null),J=y.useRef(null),K=y.useRef(null),[he,B]=y.useState("./images/WhatsApp Image 2025-06-16 at 14.53.39_aa8e7adb.jpg");y.useEffect(()=>{const A=setTimeout(()=>{k(!0)},3e3);return()=>clearTimeout(A)},[]);const se=A=>{if(P.current&&M){const ie=P.current.getBoundingClientRect(),ne=(A.clientX-ie.left)/ie.width-.5,Ce=(A.clientY-ie.top)/ie.height-.5;u({x:ne,y:Ce}),document.querySelectorAll(".company-title, .company-title *, .animated-word, .animated-word *, .title-line, .title-line *, .word-char, .word-blue-1, .word-golden-1, .word-golden-2, .golden-blue-title, .golden-blue-title *").forEach(ae=>{ae&&(ae.style.transform="none",ae.style.transition="none",ae.style.perspective="none",ae.style.transformStyle="flat")})}},D=[{src:"52886-471089084_tiny.mp4",title:"Our Construction Process",paths:["/pavan-techno-constructions/images/52886-471089084_tiny.mp4","/pavan-techno-constructions/assets/52886-471089084_tiny.mp4","/pavan-techno-constructions/videos/52886-471089084_tiny.mp4"]},{src:"42926-434300944_tiny.mp4",title:"Project Showcase",paths:["/pavan-techno-constructions/images/42926-434300944_tiny.mp4","/pavan-techno-constructions/assets/42926-434300944_tiny.mp4","/pavan-techno-constructions/videos/42926-434300944_tiny.mp4"]}],te=["/pavan-techno-constructions/images/2835998-uhd_3840_2160_24fps.mp4","/pavan-techno-constructions/assets/2835998-uhd_3840_2160_24fps.mp4","/pavan-techno-constructions/videos/2835998-uhd_3840_2160_24fps.mp4"];y.useEffect(()=>{const A=new Image;return A.onload=()=>{console.log("Logo preloaded successfully:",A.src)},A.onerror=()=>{console.log("Logo preload failed, trying alternative path")},A.src=he,()=>{A.onload=null,A.onerror=null}},[he]);const Z=async A=>{A.preventDefault();const ie=["/pavan-techno-constructions/assets/pavan.pdf","/pavan-techno-constructions/images/pavan.pdf","/pavan-techno-constructions/pavan.pdf"];let ne=0;const Ce=async()=>{if(ne>=ie.length){alert("PDF file not found on server. Please contact support or try again later."),oe();return}const me=ie[ne];console.log(`Trying PDF path ${ne+1}/${ie.length}:`,me);try{if((await fetch(me,{method:"HEAD",headers:{Accept:"application/pdf"}})).ok){const xe=await fetch(me);if(xe.ok){const De=await xe.blob();if(De.type==="application/pdf"||De.type===""||me.endsWith(".pdf")){const Oe=window.URL.createObjectURL(new Blob([De],{type:"application/pdf"})),F=document.createElement("a");F.href=Oe,F.download="PAVAN_TECHNO_CONSTRUCTIONS_BROCHURE.pdf",F.style.display="none",document.body.appendChild(F),F.click(),document.body.removeChild(F),setTimeout(()=>window.URL.revokeObjectURL(Oe),100),console.log("PDF downloaded successfully from:",me);return}}}}catch(ae){console.log("Error accessing PDF at:",me,ae)}ne++,setTimeout(Ce,100)};await Ce()},oe=()=>{const A=`
PAVAN TECHNO CONSTRUCTIONS
Engineering Excellence

Consult, Design & Execute

Contact Information:
- Website: Visit our website for more details
- Services: Construction, Design, Engineering
- Experience: 15+ Years in the industry
- Projects: 500+ Completed successfully

Note: This is a temporary file. Please contact us directly for the complete brochure.
    `,ie=new Blob([A],{type:"text/plain"}),ne=window.URL.createObjectURL(ie),Ce=document.createElement("a");Ce.href=ne,Ce.download="PAVAN_TECHNO_CONSTRUCTIONS_INFO.txt",Ce.style.display="none",document.body.appendChild(Ce),Ce.click(),document.body.removeChild(Ce),setTimeout(()=>window.URL.revokeObjectURL(ne),100),console.log("Fallback file created and downloaded")},we=()=>{if(!J.current)return;let A=0;const ie=()=>{if(A>=te.length){console.error("All background video paths failed");return}const ne=te[A];console.log(`Trying background video path ${A+1}/${te.length}:`,ne),J.current.src=ne,J.current.load();const Ce=()=>{console.log("Background video loaded successfully:",ne),J.current.play().catch(xe=>{console.warn("Background video autoplay blocked:",xe)}),ae()},me=()=>{console.log("Background video path failed:",ne),A++,ae(),setTimeout(ie,100)},ae=()=>{J.current&&(J.current.removeEventListener("loadeddata",Ce),J.current.removeEventListener("canplay",Ce),J.current.removeEventListener("error",me))};J.current.addEventListener("loadeddata",Ce,{once:!0}),J.current.addEventListener("canplay",Ce,{once:!0}),J.current.addEventListener("error",me,{once:!0})};ie()};y.useEffect(()=>{const A=()=>{const ue=new IntersectionObserver(Ne=>{Ne.forEach(ke=>{ke.isIntersecting&&(d(!0),Oe())})},{threshold:.5});return Y.current&&ue.observe(Y.current),ue},ie=()=>{const ue=window.pageYOffset,Ne=window.innerHeight;if(ue>Ne*.7&&ue<Ne*1.5&&!f&&!z){ce(!1);return}if(f&&ue>Ne*1.8){H(),setTimeout(()=>{le()},300);return}if(!f){const ke=ue*-.3;document.querySelectorAll(".geometric-shape").forEach((pt,Dt)=>{const Zt=(Dt+1)*.2;pt.style.transform+=` translateY(${ke*Zt}px)`})}},ne=ue=>{f&&(ue.preventDefault(),ue.deltaY>0?(H(),setTimeout(()=>{le()},300)):ue.deltaY<0&&H())};let Ce=0;const me=ue=>{f&&(Ce=ue.touches[0].clientY)},ae=ue=>{f&&ue.preventDefault()},xe=ue=>{if(f){const Ne=ue.changedTouches[0].clientY,ke=Ce-Ne;ke>50?(H(),setTimeout(()=>{le()},300)):ke<-50&&H()}},De=()=>{const ue=Date.now()*.001;R.current.forEach((Ne,ke)=>{if(Ne){const gt=Math.sin(ue+ke*.7)*30,pt=Math.cos(ue+ke*.5)*20,Dt=1+Math.sin(ue+ke)*.3;Ne.style.transform=`translate(${gt}px, ${pt}px) scale(${Dt})`}}),K.current=requestAnimationFrame(De)},Oe=()=>{document.querySelectorAll(".stat-number").forEach(Ne=>{const ke=parseInt(Ne.getAttribute("data-target")),pt=ke/(2e3/16);let Dt=0;const Zt=setInterval(()=>{Dt+=pt,Dt>=ke?(Ne.textContent=ke+(Ne.textContent.includes("+")?"+":"")+(Ne.textContent.includes("%")?"%":""),clearInterval(Zt)):Ne.textContent=Math.floor(Dt)+(Ne.textContent.includes("+")?"+":"")+(Ne.textContent.includes("%")?"%":"")},16)})},F=()=>{document.querySelectorAll(".company-title, .company-title *, .animated-word, .animated-word *, .title-line, .title-line *, .word-char, .word-blue-1, .word-golden-1, .word-golden-2, .golden-blue-title, .golden-blue-title *").forEach(Ne=>{Ne&&(Ne.style.setProperty("transform","none","important"),Ne.style.setProperty("transition","none","important"),Ne.style.setProperty("perspective","none","important"),Ne.style.setProperty("transform-style","flat","important"))})},be=A();document.addEventListener("mousemove",se,{passive:!0}),window.addEventListener("scroll",ie,{passive:!0}),document.addEventListener("wheel",ne,{passive:!1}),document.addEventListener("touchstart",me,{passive:!1}),document.addEventListener("touchmove",ae,{passive:!1}),document.addEventListener("touchend",xe,{passive:!1}),De();const W=setTimeout(()=>{we()},500),Se=setInterval(F,100);return()=>{be&&be.disconnect(),document.removeEventListener("mousemove",se),window.removeEventListener("scroll",ie),document.removeEventListener("wheel",ne),document.removeEventListener("touchstart",me),document.removeEventListener("touchmove",ae),document.removeEventListener("touchend",xe),K.current&&cancelAnimationFrame(K.current),clearTimeout(W),clearInterval(Se)}},[f,z,M]),y.useEffect(()=>{const A=ie=>{f&&(ie.key==="Escape"?H():ie.key==="ArrowLeft"?ge():ie.key==="ArrowRight"&&re())};return document.addEventListener("keydown",A),()=>document.removeEventListener("keydown",A)},[f,x]);const le=()=>{const A=document.querySelector("#about")||document.querySelector(".about-section")||document.querySelector("section:nth-of-type(2)");A?A.scrollIntoView({behavior:"smooth"}):window.scrollBy({top:window.innerHeight-100,behavior:"smooth"})},ce=(A=!0)=>{console.log("Opening video modal for video:",D[x].title),h(!0),v(!0),document.body.style.overflow="hidden",A||S(!0),setTimeout(()=>{E(x)},100)},E=A=>{if(!w.current)return;const ie=D[A];let ne=0;const Ce=()=>{if(ne>=ie.paths.length){console.error("All video paths failed for:",ie.title),v(!1);return}const me=ie.paths[ne];console.log(`Trying video path ${ne+1}/${ie.paths.length}:`,me),w.current.src=me,w.current.load();const ae=()=>{console.log("Video loaded successfully:",me),v(!1),setTimeout(()=>{w.current&&w.current.play().catch(Oe=>{console.warn("Video autoplay blocked:",Oe)})},100),De()},xe=Oe=>{console.log("Video path failed:",me,Oe),ne++,De(),setTimeout(Ce,100)},De=()=>{w.current&&(w.current.removeEventListener("loadeddata",ae),w.current.removeEventListener("canplay",ae),w.current.removeEventListener("error",xe))};w.current.addEventListener("loadeddata",ae,{once:!0}),w.current.addEventListener("canplay",ae,{once:!0}),w.current.addEventListener("error",xe,{once:!0})};Ce()},H=()=>{h(!1),v(!1),document.body.style.overflow="auto",w.current&&(w.current.pause(),w.current.currentTime=0)},re=()=>{if(x<D.length-1){const A=x+1;b(A),v(!0),setTimeout(()=>{E(A)},100)}},ge=()=>{if(x>0){const A=x-1;b(A),v(!0),setTimeout(()=>{E(A)},100)}},C=A=>{var ie;console.error("Video error event:",(ie=A.target)==null?void 0:ie.error)},q=({index:A})=>n.jsx("div",{ref:ie=>R.current[A]=ie,className:"particle",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${A*.2}s`,animationDuration:`${8+Math.random()*4}s`}}),V=(A,ie)=>{const ne=A.currentTarget;ie?(ne.style.transform="translateY(-8px) scale(1.05) rotateX(10deg)",ne.style.boxShadow="0 20px 40px rgba(0, 0, 0, 0.3)"):(ne.style.transform="translateY(0) scale(1) rotateX(0deg)",ne.style.boxShadow="0 10px 30px rgba(0, 0, 0, 0.2)")},$=(A,ie)=>{const ne=A.currentTarget;ie?(ne.style.transform="translateY(-15px) scale(1.08) rotateY(8deg)",ne.style.boxShadow="0 25px 50px rgba(255, 215, 0, 0.3)"):(ne.style.transform="translateY(0) scale(1) rotateY(0deg)",ne.style.boxShadow="0 8px 25px rgba(255, 215, 0, 0.1)")};return y.useEffect(()=>{const A=()=>{const ie=document.querySelector(".sticky-quote-btn");if(!ie)return;window.scrollY>100?(ie.style.opacity="1",ie.style.transform="translateY(0)"):(ie.style.opacity="0.8",ie.style.transform="translateY(20px)");const ne=document.querySelector("footer");ne&&ne.getBoundingClientRect().top<window.innerHeight-100&&(ie.style.opacity="0",ie.style.transform="translateY(50px)")};return window.addEventListener("scroll",A),A(),()=>{window.removeEventListener("scroll",A)}},[]),n.jsxs("section",{className:"hero",ref:P,children:[n.jsxs("div",{className:"hero-left-section",style:{background:"#fffbeb",paddingTop:"1.5rem"},children:[n.jsx("div",{className:"company-title golden-blue-title static-title",style:{marginTop:"-15px"},children:n.jsxs("h1",{children:[n.jsxs("span",{className:"title-line",children:[n.jsx("span",{className:"word-golden-1",children:"PAVAN"})," ",n.jsx("span",{className:"word-blue-1",children:"TECHNO"})]}),n.jsx("span",{className:"title-line",children:n.jsx("span",{className:"word-golden-2",children:"CONSTRUCTIONS"})})]})}),n.jsx("div",{className:"hero-company-logo",style:{marginTop:"-10px"},children:n.jsx("img",{src:he,alt:"Pavan Techno Constructions Logo",className:"hero-logo-image",onError:A=>{}})}),n.jsx("div",{className:"tagline enhanced-tagline",style:{marginTop:"-5px"},children:n.jsx("p",{className:"typewriter golden-blue-tagline",children:"Consult, Design & Execute"})}),n.jsx("div",{className:"description",children:n.jsxs("p",{children:["Transforming ",n.jsx("strong",{children:"architectural dreams"})," into concrete reality with ",n.jsx("strong",{children:"cutting-edge technology"}),", innovative engineering solutions, and unwavering commitment to ",n.jsx("strong",{children:"excellence"}),". We deliver sophisticated construction projects that stand the test of time."]})})]}),n.jsxs("div",{className:"hero-right-section",children:[n.jsxs("div",{className:"hero-video-container",children:[n.jsx("video",{ref:J,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,className:"hero-video",style:{transform:`scale(1.1) translate(${o.x*15}px, ${o.y*15}px)`}}),n.jsx("div",{className:"hero-overlay",style:{background:`radial-gradient(circle at ${(o.x+.5)*100}% ${(o.y+.5)*100}%, 
                          rgba(255, 215, 0, 0.15) 0%, 
                          rgba(0, 0, 0, 0.6) 40%, 
                          rgba(0, 0, 0, 0.85) 100%)`}})]}),n.jsx("div",{className:"particles-container",children:Array.from({length:20},(A,ie)=>n.jsx(q,{index:ie},ie))}),n.jsxs("div",{className:"hero-geometry",children:[n.jsx("div",{className:"geometric-shape shape-1",style:{transform:`translate(${o.x*-40}px, ${o.y*-30}px) rotate(${Date.now()*.01}deg)`}}),n.jsx("div",{className:"geometric-shape shape-2",style:{transform:`translate(${o.x*25}px, ${o.y*-20}px) rotate(${Date.now()*-.008}deg)`}}),n.jsx("div",{className:"geometric-shape shape-3",style:{transform:`translate(${o.x*-20}px, ${o.y*30}px) rotate(${Date.now()*.012}deg)`}})]}),n.jsxs("div",{className:"hero-right-content",children:[n.jsxs("div",{className:"hero-buttons",children:[n.jsxs("button",{onClick:Z,className:"hero-btn primary",onMouseEnter:A=>V(A,!0),onMouseLeave:A=>V(A,!1),children:[n.jsx("span",{children:"📄"})," Download Portfolio"]}),n.jsxs("button",{onClick:r,className:"hero-btn secondary",onMouseEnter:A=>V(A,!0),onMouseLeave:A=>V(A,!1),children:[n.jsx("span",{children:"⚡"})," Start Your Project"]})]}),n.jsxs("div",{className:"hero-stats",ref:Y,children:[n.jsxs("div",{className:"stat",onMouseEnter:A=>$(A,!0),onMouseLeave:A=>$(A,!1),children:[n.jsx("div",{className:"stat-number","data-target":"60",children:"0+"}),n.jsx("div",{className:"stat-label",children:"Projects Completed"})]}),n.jsxs("div",{className:"stat",onMouseEnter:A=>$(A,!0),onMouseLeave:A=>$(A,!1),children:[n.jsx("div",{className:"stat-number","data-target":"15",children:"0+"}),n.jsx("div",{className:"stat-label",children:"Years Experience"})]}),n.jsxs("div",{className:"stat",onMouseEnter:A=>$(A,!0),onMouseLeave:A=>$(A,!1),children:[n.jsx("div",{className:"stat-number","data-target":"100",children:"0%"}),n.jsx("div",{className:"stat-label",children:"Client Satisfaction"})]})]})]}),n.jsxs("button",{className:"floating-contact sticky-quote-btn",onClick:r,onMouseEnter:A=>{A.target.style.transform="translateY(-10px) scale(1.15) rotate(3deg)",A.target.style.boxShadow="0 20px 50px rgba(255, 215, 0, 0.7)"},onMouseLeave:A=>{A.target.style.transform="translateY(0) scale(1) rotate(0deg)",A.target.style.boxShadow="0 8px 25px rgba(255, 215, 0, 0.4)"},style:{position:"fixed",bottom:"7rem",right:"2rem",zIndex:1002,background:"linear-gradient(135deg, #FFD700, #3b82f6)",padding:"0.9rem 1.6rem",borderRadius:"50px",boxShadow:"0 8px 25px rgba(255, 215, 0, 0.4)",border:"none",color:"white",fontWeight:"600",fontSize:"0.9rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"0.5rem",transition:"all 0.3s ease"},children:[n.jsx("span",{children:"💬"})," Get Quote"]}),n.jsxs("button",{ref:I,className:"see-us-circle",onClick:()=>ce(!0),onMouseEnter:A=>{A.target.style.transform="scale(1.2) rotate(10deg)",A.target.style.boxShadow="0 20px 50px rgba(236, 72, 153, 0.8)"},onMouseLeave:A=>{A.target.style.transform="scale(1) rotate(0deg)",A.target.style.boxShadow="0 10px 30px rgba(236, 72, 153, 0.4)"},style:{bottom:"6rem"},children:[n.jsx("span",{children:"See Us"}),n.jsx("span",{className:"play-icon",children:"▶"})]})]}),n.jsxs("button",{className:"scroll-btn",onClick:le,onMouseEnter:A=>{A.target.style.transform="translateX(-50%) translateY(-15px) scale(1.15)",A.target.style.background="rgba(255, 255, 255, 0.15)"},onMouseLeave:A=>{A.target.style.transform="translateX(-50%) translateY(0) scale(1)",A.target.style.background="none"},children:[n.jsx("span",{children:"Explore More"}),n.jsx("div",{className:"arrow",children:"↓"})]}),n.jsx("div",{className:`video-modal-overlay${f?" active":""}`,children:n.jsxs("div",{className:"video-modal-container",children:[p&&n.jsxs("div",{className:"video-loading",children:[n.jsx("div",{className:"loading-spinner"}),"Loading Video..."]}),n.jsx("video",{ref:w,className:"video-modal-video",onError:C,onCanPlay:()=>v(!1),muted:!0,loop:!0,playsInline:!0,preload:"metadata",style:{opacity:p?0:1},children:n.jsx("p",{children:"Your browser does not support the video tag."})}),n.jsxs("div",{className:"video-controls",children:[n.jsx("button",{className:"video-nav-btn",onClick:ge,disabled:x===0,onMouseEnter:A=>{A.target.disabled||(A.target.style.transform="scale(1.2) translateX(-5px)")},onMouseLeave:A=>{A.target.style.transform="scale(1) translateX(0)"},children:"‹"}),n.jsx("button",{className:"video-nav-btn",onClick:re,disabled:x===D.length-1,onMouseEnter:A=>{A.target.disabled||(A.target.style.transform="scale(1.2) translateX(5px)")},onMouseLeave:A=>{A.target.style.transform="scale(1) translateX(0)"},children:"›"})]}),n.jsx("button",{className:"video-close-btn",onClick:H,onMouseEnter:A=>{A.target.style.transform="scale(1.2) rotate(90deg)",A.target.style.background="rgba(255, 100, 100, 0.4)"},onMouseLeave:A=>{A.target.style.transform="scale(1) rotate(0deg)",A.target.style.background="rgba(255, 255, 255, 0.2)"},children:"×"}),n.jsxs("div",{className:"video-info",children:[n.jsx("h3",{className:"video-title",children:D[x].title}),n.jsxs("div",{className:"video-counter",children:[x+1," / ",D.length]})]}),n.jsxs("div",{className:"scroll-progress",onClick:()=>{H(),setTimeout(()=>le(),300)},children:[n.jsx("span",{children:"Scroll down or click to continue"}),n.jsx("span",{className:"scroll-arrow-down",children:"↓"})]})]})})]})},l5="/pavan-techno-constructions/assets/Blog-Covers-Press-Release-BIx1EJvd.png",s5="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCADIAMgDASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAYHBAUIAQID/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAEEAwUGAv/aAAwDAQACEAMQAAAB6pAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIR4sTdVmsw7S5lYpxWc89sagAAAAAAAABzR0vW1Po7E5itOnqvQdS862BFPda/P0+PvZcMEwAAAAarSEwROMFptJqyXqgmZLKe2G3xXovmSeT47ta6WwctO/8AdHobOjnTW6UliAxouNqqvLlVbpS7HgoeHXjCiIQ7rfJKJjfTeIciznoXw5ayuotecy9FbTbnH8yvr9jnLX9P18UHNOkcAoiJdW4xW0Zvr5OSJB0tghnjNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//xAAnEAACAwEAAAUDBQEAAAAAAAAEBQIDBgEABxITFRZAcBQhIzAxMv/aAAgBAQABBQL81aDTVJOBaZlZ4N33aTSdOZdFHseHkfaOP5dhDnOQ0tVcdENHkB9HHlWqh/z9npMzBraINovQ5HkG7q+pvQVm2xjOH7R+z0yArh1WsZThRkemBVvmCusRSe9cc/rYtBVA4uvTmWMdWpUkbPR3LFM3IVRxeuUAmanX+yrYadYolmtHa1cfXCL1m6pQuqovrJqZahUpvufLxw5uwazLdwip58kN+jWapU4uYbRQLDK7kcpAuaCtx22pJXaLJa6lhmXe6qsu5/nmB7VLxkYoN3aAlOBcRXdHE5HvFrjKlJAVtfYdxyu5Yv1YHIFAsD8v3COawq12UO4xz4kLqHi6sFPifL+Pw7XGHZsZdwYmGMekKD2mXBHIKDXriMT5cM+MFziuNuzkPGvJaU1CU1DcBml6dSezpS4s75opQGbZaCPdXaFRfbenCJv+LE5WWqEP7QCOL34Jf670wJPIQjXEtSGfKS4acCAqSO5rGVLV/sV+0IpDBnWHRV4mpDsHGEpDqkFRK3gNHB6kYFHioKii78w//8QAKxEAAQMBBQUJAAAAAAAAAAAAAQIDBAAFERMhMQYSMEFRFSI0UGCBwdHw/9oACAEDAQE/AfOI8d2U4GmReTSbFmuLLaE3kdCK7Kl4Zc3dNc8x7cOwpbcSQrFyCkkX9K2ejhiU4A6D3TpVlNohPuOOvJuKTzo68KHMXCdxEZ/NKtPc8KgN9bv2lJtMNBRZaCVK5/XpX//EACARAAIBAwQDAAAAAAAAAAAAAAECEQADBBITITAyUGD/2gAIAQIBAT8B9wzBBLUci2BJrfSY68lC6iKym1IOKvk3FACnruILgg0LM+ZmtmY1Hj5X/8QANxAAAgECBAQEBQIDCQAAAAAAAgMBAAQFERITFCExQTJRUmEVIiNCcQZAEDBwMzRTYnKBkaHR/9oACAEBAAY/Av61QEDuvn7KhjcNLYn7h7VK1JE0ervWuwsCcv8AxJrh7pew7pHv+1YLOY7sRz8sqiI6U6AiNMlGdLiIyjKj0xp+cZ5VH7SHIaKrqPP7qFLGIWEctzrNNVuS0xKJ1F3mhyi3yy86i5uNjXMxM/UqP2nxCxkiLqQx51Cow45f0zy5U9l5lxzvm1emti5w9rjHlDF9JrjbsCQmJ5DP8yX3bxQr1FSVpv1Gx3IA7zUIur1am+nyq1usOcE7rhHXlBRMTNBZHcBF2cZwrvXCvv1LfHUfKrG5wi6BkMvwtjKIz5TE5xz/ABSwvbxaWFHhmsZA3gy0tz+lMRHT80wfiSc19aQy4vVrB8alz6o86Fqig1lGcFHeoTd3i1N9NLu2XSxtmchb2mlWs3IcQ0dYL7zHnWZYknrI/wDFcVvhw+We5nyqVWl6tzI+2KeHHrh4Zjl5FR3eJ3q4YtkiU5Zfit+zeL1eoaxK3J4rtUWsMHMY5FlQ319eL3A5OLppmsLHCL1bIdcwtsRGfy/7/wAMGuMQCTwoJ+pyziJ96wQ8Ige8GaxyGeXKsbDH9A38tKZ3x8QdsqjTBLQV/E20M7DnV/b4rn8ddnIvPwsHtprEEY6IDiu6e/vjnJf6astvkv44GmPbIqxf49Ai85zSdxGYyHtX6t+DAUKKfkEY56faoUuF8ZCojRp+pB986wi7i9SrEFWX93uQkgYH/tWb4t+F1B/ZR0isY42/tLG5Js5xeoktUf5Z8qvZubsMSs7kylK1rkPmnsMT70+3xZZLxG4TE2zGznmv0x71iQ4pCouN9mrdHPUPtVqTFv8AhPG6jX92zWCxgGgrwWZ6rccsg96/VjGqBhw4ozKParbiLsMPfxhSppDmMlHq9quR4dK5U3TLLeMgZ71jInEFHARyn8V+mnsVM4bDym8246+mZ/7rAfhW1L4uR1Eoco0+9PtEug7i35MD00HAXIKIeq2jmB1b4jijUZ20fSTbDkP5qGPtltOO5DQrNIEA9BmOlAxihMw8JTHOK3m2yzb6pGtvh16ILXp09/Ohm4t1tkemqKKVJBcl10x1oz4NOo+s6etBDbVRwHhzHpUCMaRjpEVBXFstpR3IaWMoCRX4Yy6UJGoSMPCUx0pib5Sblk3BtEss8omtvRG3llpy5VJW9stRT3EaZoUI7njyjxVsFbLlOeejTyrbQsVB5DFEyVDLCjTJZdYrYhIbPoy5VG3aKHKdUZD3pjVqEGM8RRHX+sX/xAAmEAEAAgIBAwQBBQAAAAAAAAABABEhMVFBYXFAgaHBcDCRsdHh/9oACAEBAAE/IfzVWJtgarzDXmbrjmoHNJmvliDaFunD4JTK7swuPMPSWdqH4UQVABgJjbHGrdw4wkAJW1s8MoTPxnpNiaxez3jy6WvjnMgEocEqoplUYDB2godvR3M+gGsg6ko6bbLSgc9efpARloLiCO5w2jRUFH6Zwti2I8BEtp0qogP5u2+VahVSjZBNze9BlkSbAK/ulamLzY4HZmHlc22+aJU0acDxb95Q0LLq0VvNRdm1X8DWSWOVLYIyAF3tQ5a1H8kWrZ7kwz+DfhukNiGorSqbx0ufSv8A5g9qu5FOS9w1a/1SNOJrm4PFxoOsOozVvWbQzXnlV7liqqwPQKDjiCYTyrDwxrZMw9pYhHBcuCILpc7bcC0hJP2q0cMTwPdvsONQxwi36CdpdwaFWuHDUaS5U2YnxGItYynbAu4iwuqm5X/AFT9SuZmJz45satf+QgADBXg7S4CnNLuwPZLlZAiEEreusRzcOpFYawqswOvgjwg31rfxAXMpQxcYZUoRotqZcgb1ABBnT0vbhiUTiLJ8dLmBQ2FQH6IEVcYbuvmVq8ENqfda3yVz0FPLGjXJFiMmHEx9eWgGBy7plgKCq6KPumyys2puNDp909uBYFwtAsOCCXBQKCa6GCWZI9Oa8YHbndeM3RwJAQ+Ip8KJ4m3Y5hirTd4Fu863mAy5hIJ1WJZ/msuCVeNf684u+OOUzBKrnz/MX//aAAwDAQACAAMAAAAQ888888888888888888888888888888888888888888888888888888887178888888888/zq288888wg4MDsIQ0EgMA8UQAsI4cA4sc888888888888888888888888888888888888888888888888888888888888888888//EACARAQEAAgICAgMAAAAAAAAAAAERITEAQTBhUGBxsfD/2gAIAQMBAT8Q+YUD0j+wcIkStATpRw+t8SOE1AQ9hp41laBWmR/GOOY3ZUlMrIfvjZYMLVdY5s8UtlCIlA7HmZcUUlWNDOq674ACkc3DuFhfqv8A/8QAIhEBAAECBAcAAAAAAAAAAAAAAREAMSEwQVFQYHGBwdHw/9oACAECAQE/EOMPGgoQkHRoUzvbDB75d3qIxvTy2El6kTBNKMtN5F+vSmFRp735V//EACUQAQEAAgMAAgEDBQAAAAAAAAERACExQVFhcYFAcJEQIKGx8P/aAAgBAQABPxD96ugE2TpWBacVRvpyTzCcqxuXL4ZA26Ua99zjm4KI7kOzCp+kOuBYAFD6t/nAChAakwEj2uIJk/8AuYCHBkTBAHKV+9/5xKna/wCr9IX5AiEdpsHswFKEMDrQG2ezBKGXKES/kMCexCkZNd4XdCRqBI8M9fCafj9Csy3EZXAMeYEOxDjGguD6BXWEtAtqewP2FzRYFtGhcdkjSvC+PXBINAQ/suX+lymUwbj07qMXwDa/WR8vSVXoIezCIyJYnuTH36ZE4SYwBCbHnnCIJC+ggIflMbRQLlvAgQftwZPexytA3S344KSCiKVQMMDOZI/dQETtOaXabkJGhjrWXWQUilAUDkZzgmvXi8I5VMivjgMfeG1GD4wQZv2YR4lVIWIQgdqYrUtpCRFAhV/GC894bhtxzD2QbQAh+MQ7LWzMa4Yb1jPagIwlhdpD7x/hLCA5EYjhCaNGwFoh6KmGeWasVgF1YMp7yab4pSMFW5QuG0d1ea6STGwVo1pKAOUOw6x4URh8lV46bx5lprGw1VR3oDrA+9sZkLhLXZv8YUgs4hZVRJO98JjcChZpN+SMWcwfkwqDXX2HyomHSmeFSw5wNpT4AFxNGqzjAKRFEPFHM0GpOlSW+C5dau65Lhu8c26I1HB+GLsWRr2rSJRNHr2IfTcJJCL4L4dqrctHwFUbsoo/WjSmJqlA7R8DIBj8Hokal07O8agvFJZXG1zfdIpFENileFMdhi8d94Ot/fWIdwTImmnA1m1VUiLAK9a7MvZ8mlBoK0nOsKRUP+BUB/C5aPWAToLwmdeNLXK0bRf+MbgxOc43gPjDLHCHUzgA07tvoZNX81iQrN4YmAoUQB4rv5x4zCuz4ucAxK/ic5ye5q/q6wooHKXHwfGE4lKA4AyC9Ziny48SNtfo4MP4wYunbk6xNWgGxAlpivvzQ4JOkxAkKwq12Y6MDHRa+3bm0MCoHyDp+cSbtEN9hkUkGskt7J1idjFEaLU6c4UIAgEOAznE8iCFna7/AHi//9k=",o5="/pavan-techno-constructions/assets/9nz0z6Ct4l23c27NzViK-jIEjcN3Y.png",c5="/pavan-techno-constructions/assets/24745175-D-scNrQe.jpg",u5="/pavan-techno-constructions/assets/download-Dm7BOQmU.png",Uc=()=>{const[r,o]=y.useState(!1),[u,c]=y.useState({x:0,y:0}),[d,f]=y.useState(null),h=y.useRef(null),x=y.useRef(null),b=y.useRef(null),p=y.useRef(null),v=y.useRef(null),z=y.useRef([]),S=()=>{console.log("Opening popup...")},M=[{name:"SHAHI EXPORTS PVT LTD",image:l5,fallbackPaths:["/assets/Blog-Covers-Press-Release.png","../assets/Blog-Covers-Press-Release.png","./assets/Blog-Covers-Press-Release.png","/src/assets/Blog-Covers-Press-Release.png"]},{name:"GOKALDAS EXPORTS LTD",image:s5,fallbackPaths:["/assets/1630570806167.jpeg","../assets/1630570806167.jpeg","./assets/1630570806167.jpeg","/src/assets/1630570806167.jpeg"]},{name:"MES",image:o5,fallbackPaths:["/assets/9nz0z6Ct4l23c27NzViK.png","../assets/9nz0z6Ct4l23c27NzViK.png","./assets/9nz0z6Ct4l23c27NzViK.png","/src/assets/9nz0z6Ct4l23c27NzViK.png"]},{name:"ARK BUILDERS",image:c5,fallbackPaths:["/assets/24745175.jpg","../assets/24745175.jpg","./assets/24745175.jpg","/src/assets/24745175.jpg"]},{name:"TAAPASI PROJECTS",image:u5,fallbackPaths:["/assets/download.png","../assets/download.png","./assets/download.png","/src/assets/download.png"]}];y.useEffect(()=>{const R=new IntersectionObserver(Y=>{Y.forEach(w=>{w.isIntersecting&&!r&&(o(!0),w.target.classList.add("section-visible"),setTimeout(()=>{var I;return(I=x.current)==null?void 0:I.classList.add("animate")},100),setTimeout(()=>{var I;return(I=b.current)==null?void 0:I.classList.add("animate")},400),setTimeout(()=>{var I;return(I=p.current)==null?void 0:I.classList.add("animate")},800),setTimeout(()=>{var I;return(I=v.current)==null?void 0:I.classList.add("animate")},1200),setTimeout(()=>{z.current.forEach((I,J)=>{setTimeout(()=>I==null?void 0:I.classList.add("animate"),J*100)})},1600))})},{threshold:.2});return h.current&&R.observe(h.current),()=>R.disconnect()},[r]),y.useEffect(()=>{const R=Y=>{if(h.current){const w=h.current.getBoundingClientRect(),I=(Y.clientX-w.left)/w.width,J=(Y.clientY-w.top)/w.height;c({x:I,y:J})}};return document.addEventListener("mousemove",R),()=>document.removeEventListener("mousemove",R)},[]);const k=(R,Y)=>{f(Y?R:null);const w=z.current[R];w&&(Y?(w.style.transform="translateY(-20px) scale(1.05) rotateX(5deg) rotateY(5deg)",w.style.zIndex="100"):(w.style.transform="translateY(0) scale(1) rotateX(0deg) rotateY(0deg)",w.style.zIndex="10"))},P=[{icon:"🎯",title:"Modern Design",desc:"Contemporary architectural solutions",color:"#FF6B6B"},{icon:"⚡",title:"Fast Construction",desc:"On-time project delivery",color:"#4ECDC4"},{icon:"💎",title:"Premium Quality",desc:"Best materials & craftsmanship",color:"#45B7D1"},{icon:"🏛️",title:"Innovative Designs",desc:"Creative & functional spaces",color:"#96CEB4"},{icon:"👷",title:"Expert Team",desc:"15+ years of experience",color:"#FFEAA7"},{icon:"🔧",title:"Skilled Workers",desc:"Certified professionals",color:"#DDA0DD"},{icon:"✅",title:"Quality Assurance",desc:"Premium standards",color:"#98D8C8"},{icon:"🔄",title:"Complete Service",desc:"End-to-end solutions",color:"#F7DC6F"}];return y.useEffect(()=>{if(x.current){x.current.classList.add("animate");const R=x.current.querySelector(".client-logos-scroll-container");if(R){R.style.overflow="hidden";const Y=R.querySelector(".client-logos-scroll");Y&&(Y.style.animation="none",Y.offsetHeight,Y.style.animation="scrollLogosRightToLeft 40s linear infinite")}}},[r]),n.jsxs("section",{id:"about",className:"about-section",ref:h,children:[n.jsxs("div",{className:"dynamic-background",children:[n.jsx("div",{className:"morph-shape shape-1",style:{transform:`translate(${u.x*30}px, ${u.y*20}px) rotate(${u.x*360}deg)`}}),n.jsx("div",{className:"morph-shape shape-2",style:{transform:`translate(${u.x*-40}px, ${u.y*30}px) rotate(${u.y*-360}deg)`}}),n.jsx("div",{className:"morph-shape shape-3",style:{transform:`translate(${u.x*50}px, ${u.y*-25}px) rotate(${(u.x+u.y)*180}deg)`}})]}),n.jsx("div",{className:"particles-system",children:Array.from({length:25},(R,Y)=>n.jsx("div",{className:"floating-particle",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`,animationDuration:`${8+Math.random()*6}s`}},Y))}),n.jsx("div",{className:"client-logos-section",ref:x,children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"client-logos-header",children:[n.jsx("h2",{className:"client-logos-title",children:"PTC CLIENT LOGOS"}),n.jsx("div",{className:"client-logos-subtitle",children:"Trusted by Industry Leaders"})]}),n.jsx("div",{className:"client-logos-scroll-container",children:n.jsxs("div",{className:"client-logos-scroll",children:[M.map((R,Y)=>n.jsxs("div",{className:"client-box",children:[n.jsx("div",{className:"client-logo-container",style:{width:"220px",height:"220px",margin:"0 30px"},children:n.jsx("img",{src:R.image,alt:R.name,className:"client-logo-image",style:{maxWidth:"160px",maxHeight:"160px"},onError:w=>{const I=R.fallbackPaths;let J=!1;for(const K of I)if(!w.target.src.includes(K.replace("./","").replace("/public",""))){w.target.src=K,J=!0;break}J||(w.target.style.display="none",w.target.parentElement.innerHTML=`
                            <div class="logo-placeholder" style="height: 160px; width: 160px;">
                              <div class="placeholder-text">${R.name}</div>
                            </div>
                          `)}})}),n.jsx("div",{className:"client-name",style:{fontSize:"1.1rem",fontWeight:"600",color:"#1e293b",textAlign:"center",marginTop:"15px",transition:"all 0.3s ease"},children:R.name})]},`first-${Y}`)),M.map((R,Y)=>n.jsxs("div",{className:"client-box",children:[n.jsx("div",{className:"client-logo-container",style:{width:"220px",height:"220px",margin:"0 30px"},children:n.jsx("img",{src:R.image,alt:R.name,className:"client-logo-image",style:{maxWidth:"160px",maxHeight:"160px"},onError:w=>{const I=R.fallbackPaths;let J=!1;for(const K of I)if(!w.target.src.includes(K.replace("./","").replace("/public",""))){w.target.src=K,J=!0;break}J||(w.target.style.display="none",w.target.parentElement.innerHTML=`
                            <div class="logo-placeholder" style="height: 160px; width: 160px;">
                              <div class="placeholder-text">${R.name}</div>
                            </div>
                          `)}})}),n.jsx("div",{className:"client-name",style:{fontSize:"1.1rem",fontWeight:"600",color:"#1e293b",textAlign:"center",marginTop:"15px",transition:"all 0.3s ease"},children:R.name})]},`second-${Y}`))]})})]})}),n.jsx("div",{className:"container",children:n.jsxs("div",{className:"split-layout",children:[n.jsxs("div",{className:"left-panel",children:[n.jsxs("div",{className:"title-section",ref:b,children:[n.jsxs("div",{className:"title-decoration",children:[n.jsx("span",{className:"deco-line"}),n.jsx("span",{className:"deco-circle"}),n.jsx("span",{className:"deco-line"})]}),n.jsxs("h2",{className:"section-title",children:[n.jsx("span",{className:"title-word word-1",children:"Why"}),n.jsx("span",{className:"title-word word-2",children:"Choose"}),n.jsx("span",{className:"title-word word-3",children:"Us"})]}),n.jsx("div",{className:"title-subtitle",children:"Excellence Redefined"})]}),n.jsx("div",{className:"image-container",ref:p,children:n.jsxs("div",{className:"image-frame",children:[n.jsx("div",{className:"image-overlay",children:n.jsxs("div",{className:"overlay-content",children:[n.jsx("div",{className:"overlay-icon",children:"🏗️"}),n.jsxs("div",{className:"overlay-text",children:[n.jsx("span",{className:"overlay-number",children:"500+"}),n.jsx("span",{className:"overlay-label",children:"Projects"})]})]})}),n.jsx("img",{src:"/pavan-techno-constructions/images/whyy.jpg",alt:"Construction Excellence",onError:R=>{const Y=["/pavan-techno-constructions/assets/whyy.jpg","/pavan-techno-constructions/images/logo.png","/pavan-techno-constructions/images/WhatsApp Image 2025-06-16 at 14.53.39_aa8e7adb.jpg"];let w=!1;for(const I of Y)if(!R.target.src.includes(I.replace("/pavan-techno-constructions/",""))){console.log(`Image failed to load, trying: ${I}`),R.target.src=I,w=!0;break}w||(console.log("All image paths failed, using text placeholder"),R.target.style.display="none",R.target.parentElement.innerHTML+=`
                        <div class="image-placeholder" style="
                          background: linear-gradient(135deg, #3b82f6, #1e40af);
                          color: white;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          height: 100%;
                          font-size: 1.5rem;
                          text-align: center;
                          padding: 2rem;
                        ">
                          <div>
                            <div style="font-size: 3rem; margin-bottom: 1rem;">🏗️</div>
                            <div>Building Excellence</div>
                            <div style="margin-top: 1rem; font-size: 2rem;">500+ Projects</div>
                          </div>
                        </div>
                      `)}})]})})]}),n.jsxs("div",{className:"right-panel",ref:v,children:[n.jsx("div",{className:"content-intro",children:n.jsx("p",{className:"intro-text",children:"We specialize in transforming architectural dreams into stunning reality through innovative design, precision engineering, and uncompromising quality standards."})}),n.jsxs("div",{className:"feature-cards-container",children:[n.jsx("h3",{className:"cards-title",children:"Our Excellence Pillars"}),n.jsx("div",{className:"feature-cards-grid",children:P.map((R,Y)=>n.jsxs("div",{className:"feature-card",ref:w=>z.current[Y]=w,onMouseEnter:()=>k(Y,!0),onMouseLeave:()=>k(Y,!1),style:{"--card-color":R.color,"--hover-intensity":d===Y?1:0},children:[n.jsx("div",{className:"card-glow"}),n.jsxs("div",{className:"card-content",children:[n.jsx("div",{className:"card-icon",children:R.icon}),n.jsxs("div",{className:"card-text",children:[n.jsx("div",{className:"card-title",children:R.title}),n.jsx("div",{className:"card-desc",children:R.desc})]})]}),n.jsx("div",{className:"card-shine"})]},Y))})]}),n.jsxs("div",{className:"cta-section",children:[n.jsxs("button",{className:"cta-button",onClick:S,onMouseEnter:R=>{R.target.style.transform="translateY(-8px) scale(1.05) rotateX(15deg)",R.target.style.boxShadow="0 30px 60px rgba(183, 156, 92, 0.4)"},onMouseLeave:R=>{R.target.style.transform="translateY(0) scale(1) rotateX(0deg)",R.target.style.boxShadow="0 15px 35px rgba(183, 156, 92, 0.2)"},children:[n.jsx("span",{className:"btn-background"}),n.jsxs("span",{className:"btn-text",children:[n.jsx("span",{className:"btn-icon",children:"🚀"}),"Start Your Project"]}),n.jsx("span",{className:"btn-particles",children:Array.from({length:6},(R,Y)=>n.jsx("span",{className:"btn-particle"},Y))})]}),n.jsx("div",{className:"cta-subtitle",children:"Free consultation & personalized quote"})]})]})]})})]})},bp=({openPopup:r})=>{const[o,u]=y.useState(!1),[c,d]=y.useState({title:!1,subtitle:!1,images:!1,features:!1,button:!1}),f=y.useRef(null);y.useEffect(()=>{const D=new IntersectionObserver(([te])=>{te.isIntersecting&&(u(!0),setTimeout(()=>d(Z=>({...Z,title:!0})),200),setTimeout(()=>d(Z=>({...Z,subtitle:!0})),1400),setTimeout(()=>d(Z=>({...Z,images:!0})),1800),setTimeout(()=>d(Z=>({...Z,features:!0})),2100),setTimeout(()=>d(Z=>({...Z,button:!0})),2400))},{threshold:.1});return f.current&&D.observe(f.current),()=>{f.current&&D.unobserve(f.current)}},[]);const h={"--primary-color":"#2c3e50","--secondary-color":"#f8f9fa","--accent-color":"#B79C5C","--light-color":"#ffffff","--text-color":"#495057","--shadow-color":"rgba(44, 62, 80, 0.1)","--border-radius":"16px","--transition":"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"},x=`
    @keyframes wordReveal {
      0% {
        opacity: 0;
        transform: translateY(100px) rotateX(90deg) scale(0.5);
      }
      100% {
        opacity: 1;
        transform: translateY(0) rotateX(0deg) scale(1);
      }
    }

    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    @keyframes fadeInDelay {
      0% {
        opacity: 0;
        transform: translateY(20px);
        filter: blur(3px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
        filter: blur(0px);
      }
    }

    @keyframes imageReveal {
      0% {
        transform: translateY(60px) scale(0.8) rotateY(15deg);
        opacity: 0;
        filter: blur(8px);
      }
      50% {
        transform: translateY(30px) scale(0.9) rotateY(8deg);
        opacity: 0.5;
        filter: blur(4px);
      }
      100% {
        transform: translateY(0) scale(1) rotateY(0deg);
        opacity: 1;
        filter: blur(0px);
      }
    }

    @keyframes featureSlideIn {
      0% {
        transform: translateX(-50px) rotateZ(-5deg);
        opacity: 0;
        filter: blur(3px);
      }
      100% {
        transform: translateX(0) rotateZ(0deg);
        opacity: 1;
        filter: blur(0px);
      }
    }

    @keyframes buttonPulse {
      0% {
        transform: scale(0.8) rotateZ(-5deg);
        opacity: 0;
        box-shadow: 0 0 0 0 rgba(183, 156, 92, 0.4);
      }
      50% {
        transform: scale(0.95) rotateZ(-2deg);
        opacity: 0.8;
      }
      100% {
        transform: scale(1) rotateZ(0deg);
        opacity: 1;
        box-shadow: 0 10px 25px rgba(183, 156, 92, 0.3);
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0) rotate(0deg);
      }
      33% {
        transform: translateY(-10px) rotate(1deg);
      }
      66% {
        transform: translateY(-5px) rotate(-1deg);
      }
    }

    @keyframes shimmer {
      0% {
        background-position: -200% 0;
      }
      100% {
        background-position: 200% 0;
      }
    }

    @keyframes morphBorder {
      0%, 100% {
        border-radius: 16px;
      }
      25% {
        border-radius: 16px 40px 16px 40px;
      }
      50% {
        border-radius: 40px 16px 40px 16px;
      }
      75% {
        border-radius: 16px 40px 16px 40px;
      }
    }
  `;y.useEffect(()=>{const D=document.createElement("style");return D.textContent=x,()=>{document.head.contains(D)&&document.head.removeChild(D)}},[]);const b={...h,backgroundColor:"var(--secondary-color)",padding:"5rem 0",position:"relative",overflow:"hidden",background:"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #f8f9fa 100%)",backgroundSize:"400% 400%"},p=n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{position:"absolute",top:"10%",right:"-5%",width:"300px",height:"300px",background:"linear-gradient(45deg, rgba(183, 156, 92, 0.1), rgba(44, 62, 80, 0.1))",borderRadius:"50%",animation:"float 8s ease-in-out infinite",zIndex:1}}),n.jsx("div",{style:{position:"absolute",bottom:"15%",left:"-3%",width:"200px",height:"200px",background:"linear-gradient(45deg, rgba(139, 115, 85, 0.1), rgba(52, 73, 94, 0.1))",borderRadius:"30%",animation:"float 10s ease-in-out infinite reverse",zIndex:1}}),n.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"800px",height:"800px",background:"radial-gradient(circle, rgba(183, 156, 92, 0.05) 0%, transparent 70%)",borderRadius:"50%",animation:"float 12s ease-in-out infinite",zIndex:1}})]}),v={maxWidth:"1200px",margin:"0 auto",padding:"0 2rem",position:"relative",zIndex:2},z={textAlign:"center",marginBottom:"3rem",perspective:"1000px"},S={fontSize:"clamp(3rem, 5vw, 4.5rem)",fontWeight:"900",lineHeight:"1.1",margin:"0 0 1rem 0",perspective:"1000px"},M=D=>({display:"inline-block",marginRight:"20px",opacity:c.title?1:0,transform:c.title?"translateY(0) rotateX(0deg) scale(1)":"translateY(100px) rotateX(90deg) scale(0.5)",background:"linear-gradient(135deg, #2c3e50, #34495e, #B79C5C)",backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:c.title?`wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.8+D*.2}s, gradientShift 4s ease-in-out infinite`:"none"}),k=D=>({display:"inline-block",marginRight:"20px",opacity:c.title?1:0,transform:c.title?"translateY(0) rotateX(0deg) scale(1)":"translateY(100px) rotateX(90deg) scale(0.5)",background:"linear-gradient(135deg, #B79C5C, #34495e, #2c3e50)",backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:c.title?`wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.8+D*.2}s, gradientShift 4s ease-in-out infinite`:"none"}),P={fontSize:"1.2rem",color:"var(--text-color)",maxWidth:"800px",margin:"0 auto",lineHeight:"1.8",opacity:c.subtitle?1:0,animation:c.subtitle?"fadeInDelay 1s forwards":"none"},R={display:"flex",gap:"2rem",marginTop:"3rem",marginBottom:"3rem"},Y=D=>({flex:1,position:"relative",borderRadius:"var(--border-radius)",overflow:"hidden",boxShadow:"0 15px 35px var(--shadow-color)",transform:c.images?"translateY(0) scale(1) rotateY(0deg)":"translateY(60px) scale(0.8) rotateY(15deg)",opacity:c.images?1:0,animation:c.images?`imageReveal 1s forwards ${D*.2}s`:"none",transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",cursor:"pointer"}),w={width:"100%",height:"300px",objectFit:"cover",transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",filter:"brightness(0.9) contrast(1.1)"},I={position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(45deg, rgba(183, 156, 92, 0.2), rgba(44, 62, 80, 0.2))",opacity:0,transition:"all 0.4s ease",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"1.2rem",fontWeight:"600",textShadow:"0 2px 4px rgba(0,0,0,0.5)"},J={marginTop:"3rem",display:"grid",gap:"1.5rem"},K=D=>({display:"flex",alignItems:"flex-start",background:"var(--light-color)",padding:"1.5rem",borderRadius:"var(--border-radius)",boxShadow:"0 8px 25px var(--shadow-color)",border:"1px solid rgba(183, 156, 92, 0.1)",transform:c.features?"translateX(0) rotateZ(0deg)":"translateX(-50px) rotateZ(-5deg)",opacity:c.features?1:0,animation:c.features?`featureSlideIn 0.6s forwards ${D*.1}s`:"none",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",cursor:"pointer",position:"relative",overflow:"hidden"}),he={width:"50px",height:"50px",borderRadius:"50%",background:"linear-gradient(135deg, var(--primary-color), var(--accent-color))",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"1rem",flexShrink:0,color:"white",fontSize:"1.2rem",transition:"all 0.3s ease",position:"relative",zIndex:2},B={display:"inline-block",background:"linear-gradient(135deg, var(--accent-color), var(--primary-color))",color:"white",fontSize:"1.2rem",fontWeight:"600",padding:"1rem 3rem",borderRadius:"50px",border:"none",cursor:"pointer",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",position:"relative",overflow:"hidden",textTransform:"uppercase",letterSpacing:"1px",transform:c.button?"scale(1) rotateZ(0deg)":"scale(0.8) rotateZ(-5deg)",opacity:c.button?1:0,animation:c.button?"buttonPulse 1s forwards":"none",boxShadow:"0 10px 25px rgba(183, 156, 92, 0.3)",zIndex:2},se=[{icon:"🏗️",title:"Superior Quality Construction",desc:"Only the best raw materials used for lasting durability"},{icon:"📐",title:"Perfect Planning & Execution",desc:"Designed by a highly qualified architectural team"},{icon:"⏰",title:"On-Time Delivery",desc:"Because we value your time and commitments"},{icon:"💰",title:"Affordable Innovation",desc:"Stylish homes at unbeatable market prices"},{icon:"⭐",title:"Customer Satisfaction Guaranteed",desc:"We build homes that match your dreams perfectly"}];return n.jsxs("section",{ref:f,style:b,children:[p,n.jsxs("div",{style:v,children:[n.jsxs("div",{style:z,children:[n.jsxs("h2",{style:S,children:[n.jsx("span",{style:k(0),children:"Exceptional"}),n.jsx("span",{style:M(1),children:"Deal"}),n.jsx("span",{style:M(2),children:"For"}),n.jsx("span",{style:M(3),children:"Your"}),n.jsx("span",{style:k(4),children:"Dream"}),n.jsx("span",{style:M(5),children:"Home"})]}),n.jsx("p",{style:P,children:"Discover unparalleled value with Pavan Techno Constructions. We deliver premium quality homes that combine architectural excellence with modern innovation, all at prices that redefine market standards."})]}),n.jsxs("div",{style:R,children:[n.jsxs("div",{style:Y(0),onMouseEnter:D=>{D.currentTarget.style.transform="translateY(-15px) scale(1.05) rotateY(-5deg)",D.currentTarget.style.animation="morphBorder 2s ease-in-out infinite";const te=D.currentTarget.querySelector("img"),Z=D.currentTarget.querySelector(".image-overlay");te&&(te.style.transform="scale(1.1) rotate(2deg)"),Z&&(Z.style.opacity="1")},onMouseLeave:D=>{D.currentTarget.style.transform="translateY(0) scale(1) rotateY(0deg)",D.currentTarget.style.animation="none";const te=D.currentTarget.querySelector("img"),Z=D.currentTarget.querySelector(".image-overlay");te&&(te.style.transform="scale(1) rotate(0deg)"),Z&&(Z.style.opacity="0")},children:[n.jsx("img",{src:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",alt:"Modern House Exterior",style:w}),n.jsx("div",{className:"image-overlay",style:I,children:"Stunning Exteriors"})]}),n.jsxs("div",{style:Y(1),onMouseEnter:D=>{D.currentTarget.style.transform="translateY(-15px) scale(1.05) rotateY(5deg)",D.currentTarget.style.animation="morphBorder 2s ease-in-out infinite reverse";const te=D.currentTarget.querySelector("img"),Z=D.currentTarget.querySelector(".image-overlay");te&&(te.style.transform="scale(1.1) rotate(-2deg)"),Z&&(Z.style.opacity="1")},onMouseLeave:D=>{D.currentTarget.style.transform="translateY(0) scale(1) rotateY(0deg)",D.currentTarget.style.animation="none";const te=D.currentTarget.querySelector("img"),Z=D.currentTarget.querySelector(".image-overlay");te&&(te.style.transform="scale(1) rotate(0deg)"),Z&&(Z.style.opacity="0")},children:[n.jsx("img",{src:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",alt:"Luxurious Interior",style:w}),n.jsx("div",{className:"image-overlay",style:I,children:"Elegant Interiors"})]})]}),n.jsx("div",{style:J,children:se.map((D,te)=>n.jsxs("div",{style:K(te),onMouseEnter:Z=>{Z.currentTarget.style.transform="translateX(10px) scale(1.02) rotateZ(1deg)",Z.currentTarget.style.boxShadow="0 15px 40px rgba(183, 156, 92, 0.2)",Z.currentTarget.style.background="linear-gradient(135deg, #ffffff, #f8f9fa)";const oe=Z.currentTarget.querySelector(".feature-icon");oe&&(oe.style.transform="scale(1.1) rotateY(180deg)",oe.style.background="linear-gradient(135deg, var(--accent-color), var(--primary-color))")},onMouseLeave:Z=>{Z.currentTarget.style.transform="translateX(0) scale(1) rotateZ(0deg)",Z.currentTarget.style.boxShadow="0 8px 25px var(--shadow-color)",Z.currentTarget.style.background="var(--light-color)";const oe=Z.currentTarget.querySelector(".feature-icon");oe&&(oe.style.transform="scale(1) rotateY(0deg)",oe.style.background="linear-gradient(135deg, var(--primary-color), var(--accent-color))")},children:[n.jsx("div",{style:{position:"absolute",top:0,left:"-100%",width:"100%",height:"100%",background:"linear-gradient(90deg, transparent, rgba(183, 156, 92, 0.1), transparent)",transition:"left 0.5s ease"}}),n.jsx("div",{className:"feature-icon",style:he,children:D.icon}),n.jsxs("div",{style:{flex:1,zIndex:2},children:[n.jsx("h4",{style:{color:"var(--primary-color)",fontSize:"1.1rem",fontWeight:"600",marginBottom:"0.5rem",transition:"all 0.3s ease"},children:D.title}),n.jsx("p",{style:{color:"var(--text-color)",fontSize:"0.95rem",lineHeight:"1.6",margin:0,transition:"all 0.3s ease"},children:D.desc})]})]},te))}),n.jsx("div",{style:{textAlign:"center",marginTop:"3rem"},children:n.jsxs("button",{style:B,onClick:r,onMouseEnter:D=>{D.currentTarget.style.transform="scale(1.05) rotateZ(2deg)",D.currentTarget.style.boxShadow="0 20px 40px rgba(183, 156, 92, 0.4)",D.currentTarget.style.background="linear-gradient(135deg, var(--primary-color), var(--accent-color))"},onMouseLeave:D=>{D.currentTarget.style.transform="scale(1) rotateZ(0deg)",D.currentTarget.style.boxShadow="0 10px 25px rgba(183, 156, 92, 0.3)",D.currentTarget.style.background="linear-gradient(135deg, var(--accent-color), var(--primary-color))"},children:[n.jsx("span",{style:{position:"relative",zIndex:2},children:"Claim Your Deal Today"}),n.jsx("div",{style:{position:"absolute",top:0,left:"-100%",width:"100%",height:"100%",background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",transition:"left 0.5s ease"}})]})})]})]})},_c=({openPopup:r})=>{const[o,u]=y.useState(!1),[c,d]=y.useState({title:!1,text:!1,image:!1,button:!1,stats:!1}),f=y.useRef(null);y.useEffect(()=>{const B=new IntersectionObserver(([se])=>{se.isIntersecting&&(u(!0),setTimeout(()=>d(D=>({...D,title:!0})),300),setTimeout(()=>d(D=>({...D,text:!0})),700),setTimeout(()=>d(D=>({...D,image:!0})),1e3),setTimeout(()=>d(D=>({...D,stats:!0})),1300),setTimeout(()=>d(D=>({...D,button:!0})),1600))},{threshold:.1});return f.current&&B.observe(f.current),()=>{f.current&&B.unobserve(f.current)}},[]);const h=`
    @keyframes wordReveal {
      0% {
        opacity: 0;
        transform: translateY(50px) rotateX(90deg) scale(0.8);
      }
      100% {
        opacity: 1;
        transform: translateY(0) rotateX(0deg) scale(1);
      }
    }

    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    @keyframes textSlideIn {
      0% {
        opacity: 0;
        transform: translateX(-30px);
        filter: blur(3px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
        filter: blur(0px);
      }
    }

    @keyframes imageReveal {
      0% {
        opacity: 0;
        transform: translateY(30px) scale(0.9);
        filter: blur(5px);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
        filter: blur(0px);
      }
    }

    @keyframes statsCounter {
      0% {
        opacity: 0;
        transform: translateY(20px) scale(0.8);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @keyframes buttonPulse {
      0% {
        opacity: 0;
        transform: scale(0.8);
        box-shadow: 0 0 0 0 rgba(183, 156, 92, 0.7);
      }
      50% {
        opacity: 0.8;
        transform: scale(0.95);
        box-shadow: 0 0 0 10px rgba(183, 156, 92, 0.3);
      }
      100% {
        opacity: 1;
        transform: scale(1);
        box-shadow: 0 0 0 20px rgba(183, 156, 92, 0);
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0) rotate(0deg);
      }
      50% {
        transform: translateY(-15px) rotate(2deg);
      }
    }

    @keyframes borderGlow {
      0%, 100% {
        box-shadow: 0 0 15px rgba(183, 156, 92, 0.3);
      }
      50% {
        box-shadow: 0 0 25px rgba(183, 156, 92, 0.6), 0 0 35px rgba(59, 130, 246, 0.3);
      }
    }

    @keyframes particleFloat {
      0% {
        transform: translateY(100vh) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: translateY(-100px) rotate(360deg);
        opacity: 0;
      }
    }

    @keyframes geometricRotate {
      0% {
        transform: rotate(0deg) scale(1);
      }
      50% {
        transform: rotate(180deg) scale(1.05);
      }
      100% {
        transform: rotate(360deg) scale(1);
      }
    }

    /* Responsive Keyframes */
    @media (max-width: 768px) {
      @keyframes wordReveal {
        0% {
          opacity: 0;
          transform: translateY(30px) scale(0.9);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      @keyframes imageReveal {
        0% {
          opacity: 0;
          transform: translateY(20px) scale(0.95);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
    }
  `;y.useEffect(()=>{const B=document.createElement("style");return B.textContent=h,document.head.appendChild(B),()=>{document.head.contains(B)&&document.head.removeChild(B)}},[]);const x={background:"linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)",padding:"clamp(2rem, 5vw, 5rem) 0",position:"relative",overflow:"hidden",minHeight:"100vh",display:"flex",alignItems:"center"},b=n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{position:"absolute",top:"10%",right:"5%",width:"clamp(100px, 15vw, 200px)",height:"clamp(100px, 15vw, 200px)",borderRadius:"50%",background:"linear-gradient(45deg, rgba(183, 156, 92, 0.1), rgba(183, 156, 92, 0.05))",animation:"float 8s ease-in-out infinite",zIndex:1,display:window.innerWidth<480?"none":"block"}}),n.jsx("div",{style:{position:"absolute",bottom:"15%",left:"3%",width:"clamp(80px, 12vw, 150px)",height:"clamp(80px, 12vw, 150px)",borderRadius:"50%",background:"linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05))",animation:"float 10s ease-in-out infinite reverse",zIndex:1,display:window.innerWidth<480?"none":"block"}}),n.jsx("div",{style:{position:"absolute",top:"30%",left:"10%",width:"clamp(30px, 6vw, 60px)",height:"clamp(30px, 6vw, 60px)",background:"linear-gradient(45deg, #B79C5C, #8B7355)",transform:"rotate(45deg)",opacity:.3,animation:"geometricRotate 20s linear infinite",zIndex:1,display:window.innerWidth<768?"none":"block"}}),n.jsx("div",{style:{position:"absolute",bottom:"25%",right:"15%",width:"clamp(40px, 8vw, 80px)",height:"clamp(40px, 8vw, 80px)",background:"linear-gradient(45deg, #3b82f6, #1d4ed8)",clipPath:"polygon(50% 0%, 0% 100%, 100% 100%)",opacity:.3,animation:"float 12s ease-in-out infinite",zIndex:1,display:window.innerWidth<768?"none":"block"}}),[...Array(window.innerWidth<768?3:6)].map((B,se)=>n.jsx("div",{style:{position:"absolute",left:`${Math.random()*100}%`,width:"3px",height:"3px",background:"#B79C5C",borderRadius:"50%",animation:`particleFloat ${15+Math.random()*10}s linear infinite`,animationDelay:`${Math.random()*5}s`,zIndex:1}},se))]}),p={maxWidth:"1200px",margin:"0 auto",padding:"0 clamp(1rem, 4vw, 2rem)",position:"relative",zIndex:2,display:"flex",alignItems:"center",minHeight:"clamp(60vh, 80vh, 90vh)",width:"100%"},v={display:"flex",flexDirection:window.innerWidth<1024?"column":"row",alignItems:"center",gap:"clamp(2rem, 4vw, 4rem)",width:"100%"},z={flex:window.innerWidth<1024?"1":"1 1 55%",position:"relative",width:"100%",order:(window.innerWidth<1024,1)},S={flex:window.innerWidth<1024?"1":"1 1 45%",position:"relative",width:"100%",maxWidth:window.innerWidth<1024?"400px":"none",order:(window.innerWidth<1024,2),margin:window.innerWidth<1024?"2rem auto":"0"},M={fontSize:"clamp(2.5rem, 6vw, 4.5rem)",fontWeight:"900",lineHeight:"1.1",margin:"0 0 clamp(1rem, 3vw, 2rem) 0",perspective:"1000px",position:"relative",textAlign:window.innerWidth<768?"center":"left"},k=B=>({display:"inline-block",marginRight:window.innerWidth<768?"10px":"20px",opacity:c.title?1:0,transform:c.title?"translateY(0) scale(1)":"translateY(50px) scale(0.8)",background:"linear-gradient(135deg, #B79C5C 0%, #3b82f6 50%, #B79C5C 100%)",backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:c.title?`wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.5+B*.2}s, gradientShift 4s ease-in-out infinite`:"none"}),P={position:"absolute",left:window.innerWidth<768?"50%":"-20px",top:"50%",transform:window.innerWidth<768?"translate(-50%, -50%)":"translateY(-50%)",width:window.innerWidth<768?"80%":"6px",height:window.innerWidth<768?"4px":"80%",background:"linear-gradient(135deg, #B79C5C, #3b82f6)",borderRadius:"3px",animation:c.title?"borderGlow 2s ease-in-out infinite":"none",display:window.innerWidth<480?"none":"block"},R={fontSize:"clamp(1rem, 2.5vw, 1.1rem)",lineHeight:"1.8",color:"#e5e7eb",marginBottom:"clamp(1rem, 2vw, 1.5rem)",transform:c.text?"translateX(0)":"translateX(-30px)",opacity:c.text?1:0,transition:"all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",position:"relative",paddingLeft:window.innerWidth<768?"0.5rem":"1rem",borderLeft:window.innerWidth<768?"2px solid #B79C5C":"2px solid transparent",borderImage:window.innerWidth>=768?"linear-gradient(135deg, #B79C5C, #3b82f6) 1":"none",textAlign:(window.innerWidth<768,"left")},Y={display:"grid",gridTemplateColumns:window.innerWidth<768?"repeat(auto-fit, minmax(120px, 1fr))":"repeat(3, 1fr)",gap:"clamp(1rem, 3vw, 2rem)",margin:"clamp(1.5rem, 3vw, 2rem) 0",transform:c.stats?"translateY(0) scale(1)":"translateY(20px) scale(0.8)",opacity:c.stats?1:0,animation:c.stats?"statsCounter 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards":"none"},w={textAlign:"center",padding:"clamp(0.8rem, 2vw, 1rem)",background:"linear-gradient(135deg, rgba(183, 156, 92, 0.1), rgba(59, 130, 246, 0.1))",borderRadius:"clamp(8px, 2vw, 12px)",border:"1px solid rgba(183, 156, 92, 0.3)",backdropFilter:"blur(10px)",transition:"all 0.3s ease"},I={position:"relative",transform:c.image?"translateY(0) scale(1)":"translateY(30px) scale(0.9)",opacity:c.image?1:0,animation:c.image?"imageReveal 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards":"none",borderRadius:"clamp(12px, 3vw, 20px)",overflow:"hidden",width:"100%"},J={width:"100%",height:"clamp(300px, 40vw, 500px)",objectFit:"cover",borderRadius:"clamp(12px, 3vw, 20px)",transition:"all 0.5s ease",filter:"brightness(0.9) contrast(1.1) saturate(1.1)"},K={position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(183, 156, 92, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)",borderRadius:"clamp(12px, 3vw, 20px)",opacity:0,transition:"all 0.4s ease",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"clamp(1.2rem, 3vw, 1.5rem)",fontWeight:"600",textShadow:"0 2px 10px rgba(0,0,0,0.7)",textAlign:"center",padding:"1rem"},he={background:"linear-gradient(135deg, #B79C5C 0%, #3b82f6 100%)",color:"white",fontSize:"clamp(1rem, 2.5vw, 1.1rem)",fontWeight:"600",padding:"clamp(0.8rem 2rem, 2vw, 1rem 2.5rem)",borderRadius:"50px",border:"none",cursor:"pointer",position:"relative",overflow:"hidden",textTransform:"uppercase",letterSpacing:"1px",marginTop:"clamp(1.5rem, 3vw, 2rem)",transform:c.button?"scale(1)":"scale(0.8)",opacity:c.button?1:0,animation:c.button?"buttonPulse 1s cubic-bezier(0.23, 1, 0.32, 1) forwards":"none",transition:"all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",boxShadow:"0 10px 30px rgba(183, 156, 92, 0.3)",width:window.innerWidth<768?"100%":"auto",maxWidth:window.innerWidth<768?"300px":"none",margin:window.innerWidth<768?"clamp(1.5rem, 3vw, 2rem) auto 0 auto":"clamp(1.5rem, 3vw, 2rem) 0 0 0"};return n.jsxs("section",{ref:f,style:x,children:[b,n.jsx("div",{style:p,children:n.jsx("div",{style:v,children:window.innerWidth<1024?n.jsxs("div",{style:z,children:[n.jsxs("div",{style:{position:"relative"},children:[n.jsx("div",{style:P}),n.jsxs("h2",{style:M,children:[n.jsx("span",{style:k(0),children:"About"}),n.jsx("span",{style:k(1),children:"Us"})]})]}),n.jsx("div",{style:{position:"relative"},children:["At Pavan Techno Construction, we deliver cost-effective, high-quality construction for residential, commercial, healthcare, and educational projects.","With 8+ years of experience, we've built our reputation on trust, ethics, and exceeding client expectations through passion and commitment.","We specialize in diverse construction projects with meticulous attention to detail. Our work with M.E.S has earned us a strong reputation in the industry.","Every project receives our full dedication, as we understand buildings aren't just structures—they're the foundation for our clients' lives and businesses."].map((B,se)=>n.jsx("p",{style:{...R,transitionDelay:`${se*.15}s`},onMouseEnter:D=>{window.innerWidth>=768&&(D.currentTarget.style.borderLeft="2px solid #B79C5C",D.currentTarget.style.paddingLeft="1.5rem",D.currentTarget.style.color="#f3f4f6")},onMouseLeave:D=>{window.innerWidth>=768&&(D.currentTarget.style.borderLeft="2px solid transparent",D.currentTarget.style.paddingLeft="1rem",D.currentTarget.style.color="#e5e7eb")},children:B},se))}),n.jsx("div",{style:{...S,margin:"clamp(2rem, 4vw, 3rem) auto"},children:n.jsxs("div",{style:I,onMouseEnter:B=>{if(window.innerWidth>=768){B.currentTarget.style.transform="translateY(-10px) scale(1.02)";const se=B.currentTarget.querySelector(".image-overlay"),D=B.currentTarget.querySelector("img");se&&(se.style.opacity="1"),D&&(D.style.transform="scale(1.05)")}},onMouseLeave:B=>{if(window.innerWidth>=768){B.currentTarget.style.transform="translateY(0) scale(1)";const se=B.currentTarget.querySelector(".image-overlay"),D=B.currentTarget.querySelector("img");se&&(se.style.opacity="0"),D&&(D.style.transform="scale(1)")}},children:[n.jsx("img",{src:"https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",alt:"Professional Construction Team",style:J}),n.jsx("div",{className:"image-overlay",style:K,children:"Excellence in Construction"})]})}),n.jsx("div",{style:{position:"relative"},children:["We specialize in a wide range of construction projects, bringing your vision to life through craftsmanship and attention to details. We are also working with the most valuable department in India (M.E.S) with good reputations.","At Pavan Techno Construction, we promise to approach every project with passion and dedication, recognizing that the buildings we create are not just structures, but the backdrops for our client's lives."].map((B,se)=>n.jsx("p",{style:{...R,transitionDelay:`${(se+2)*.15}s`},onMouseEnter:D=>{window.innerWidth>=768&&(D.currentTarget.style.borderLeft="2px solid #B79C5C",D.currentTarget.style.paddingLeft="1.5rem",D.currentTarget.style.color="#f3f4f6")},onMouseLeave:D=>{window.innerWidth>=768&&(D.currentTarget.style.borderLeft="2px solid transparent",D.currentTarget.style.paddingLeft="1rem",D.currentTarget.style.color="#e5e7eb")},children:B},se+2))}),n.jsxs("div",{style:Y,children:[n.jsxs("div",{style:w,onMouseEnter:B=>{B.currentTarget.style.transform="translateY(-5px) scale(1.05)",B.currentTarget.style.boxShadow="0 15px 30px rgba(183, 156, 92, 0.3)"},onMouseLeave:B=>{B.currentTarget.style.transform="translateY(0) scale(1)",B.currentTarget.style.boxShadow="none"},children:[n.jsx("div",{style:{fontSize:"clamp(1.5rem, 4vw, 2rem)",fontWeight:"800",color:"#B79C5C",marginBottom:"0.5rem"},children:"8+"}),n.jsx("div",{style:{fontSize:"clamp(0.8rem, 2vw, 0.9rem)",color:"#d1d5db"},children:"Years Experience"})]}),n.jsxs("div",{style:w,onMouseEnter:B=>{B.currentTarget.style.transform="translateY(-5px) scale(1.05)",B.currentTarget.style.boxShadow="0 15px 30px rgba(59, 130, 246, 0.3)"},onMouseLeave:B=>{B.currentTarget.style.transform="translateY(0) scale(1)",B.currentTarget.style.boxShadow="none"},children:[n.jsx("div",{style:{fontSize:"clamp(1.5rem, 4vw, 2rem)",fontWeight:"800",color:"#3b82f6",marginBottom:"0.5rem"},children:"100+"}),n.jsx("div",{style:{fontSize:"clamp(0.8rem, 2vw, 0.9rem)",color:"#d1d5db"},children:"Projects Completed"})]}),n.jsxs("div",{style:w,onMouseEnter:B=>{B.currentTarget.style.transform="translateY(-5px) scale(1.05)",B.currentTarget.style.boxShadow="0 15px 30px rgba(183, 156, 92, 0.3)"},onMouseLeave:B=>{B.currentTarget.style.transform="translateY(0) scale(1)",B.currentTarget.style.boxShadow="none"},children:[n.jsx("div",{style:{fontSize:"clamp(1.5rem, 4vw, 2rem)",fontWeight:"800",color:"#B79C5C",marginBottom:"0.5rem"},children:"24/7"}),n.jsx("div",{style:{fontSize:"clamp(0.8rem, 2vw, 0.9rem)",color:"#d1d5db"},children:"Support"})]})]}),n.jsx("button",{style:he,onClick:r||(()=>console.log("Get Started clicked")),onMouseEnter:B=>{B.currentTarget.style.transform=window.innerWidth>=768?"scale(1.05)":"scale(1.02)",B.currentTarget.style.boxShadow="0 20px 40px rgba(183, 156, 92, 0.5)",B.currentTarget.style.background="linear-gradient(135deg, #3b82f6 0%, #B79C5C 100%)"},onMouseLeave:B=>{B.currentTarget.style.transform="scale(1)",B.currentTarget.style.boxShadow="0 10px 30px rgba(183, 156, 92, 0.3)",B.currentTarget.style.background="linear-gradient(135deg, #B79C5C 0%, #3b82f6 100%)"},children:n.jsx("span",{style:{position:"relative",zIndex:2},children:"Get Started Today"})})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:z,children:[n.jsxs("div",{style:{position:"relative"},children:[n.jsx("div",{style:P}),n.jsxs("h2",{style:M,children:[n.jsx("span",{style:k(0),children:"About"}),n.jsx("span",{style:k(1),children:"Us"})]})]}),n.jsx("div",{style:{position:"relative"},children:["At Pavan Techno Construction, we deliver cost-effective, high-quality construction for residential, commercial, healthcare, and educational projects.","With 8+ years of experience, we've built our reputation on trust, ethics, and exceeding client expectations through passion and commitment.","We specialize in diverse construction projects with meticulous attention to detail. Our work with M.E.S has earned us a strong reputation in the industry.","Every project receives our full dedication, as we understand buildings aren't just structures—they're the foundation for our clients' lives and businesses."].map((B,se)=>n.jsx("p",{style:{...R,transitionDelay:`${se*.15}s`},onMouseEnter:D=>{window.innerWidth>=768&&(D.currentTarget.style.borderLeft="2px solid #B79C5C",D.currentTarget.style.paddingLeft="1.5rem",D.currentTarget.style.color="#f3f4f6")},onMouseLeave:D=>{window.innerWidth>=768&&(D.currentTarget.style.borderLeft="2px solid transparent",D.currentTarget.style.paddingLeft="1rem",D.currentTarget.style.color="#e5e7eb")},children:B},se))}),n.jsxs("div",{style:Y,children:[n.jsxs("div",{style:w,onMouseEnter:B=>{B.currentTarget.style.transform="translateY(-5px) scale(1.05)",B.currentTarget.style.boxShadow="0 15px 30px rgba(183, 156, 92, 0.3)"},onMouseLeave:B=>{B.currentTarget.style.transform="translateY(0) scale(1)",B.currentTarget.style.boxShadow="none"},children:[n.jsx("div",{style:{fontSize:"clamp(1.5rem, 4vw, 2rem)",fontWeight:"800",color:"#B79C5C",marginBottom:"0.5rem"},children:"8+"}),n.jsx("div",{style:{fontSize:"clamp(0.8rem, 2vw, 0.9rem)",color:"#d1d5db"},children:"Years Experience"})]}),n.jsxs("div",{style:w,onMouseEnter:B=>{B.currentTarget.style.transform="translateY(-5px) scale(1.05)",B.currentTarget.style.boxShadow="0 15px 30px rgba(59, 130, 246, 0.3)"},onMouseLeave:B=>{B.currentTarget.style.transform="translateY(0) scale(1)",B.currentTarget.style.boxShadow="none"},children:[n.jsx("div",{style:{fontSize:"clamp(1.5rem, 4vw, 2rem)",fontWeight:"800",color:"#3b82f6",marginBottom:"0.5rem"},children:"100+"}),n.jsx("div",{style:{fontSize:"clamp(0.8rem, 2vw, 0.9rem)",color:"#d1d5db"},children:"Projects Completed"})]}),n.jsxs("div",{style:w,onMouseEnter:B=>{B.currentTarget.style.transform="translateY(-5px) scale(1.05)",B.currentTarget.style.boxShadow="0 15px 30px rgba(183, 156, 92, 0.3)"},onMouseLeave:B=>{B.currentTarget.style.transform="translateY(0) scale(1)",B.currentTarget.style.boxShadow="none"},children:[n.jsx("div",{style:{fontSize:"clamp(1.5rem, 4vw, 2rem)",fontWeight:"800",color:"#B79C5C",marginBottom:"0.5rem"},children:"24/7"}),n.jsx("div",{style:{fontSize:"clamp(0.8rem, 2vw, 0.9rem)",color:"#d1d5db"},children:"Support"})]})]}),n.jsx("button",{style:he,onClick:r||(()=>console.log("Get Started clicked")),onMouseEnter:B=>{B.currentTarget.style.transform=window.innerWidth>=768?"scale(1.05)":"scale(1.02)",B.currentTarget.style.boxShadow="0 20px 40px rgba(183, 156, 92, 0.5)",B.currentTarget.style.background="linear-gradient(135deg, #3b82f6 0%, #B79C5C 100%)"},onMouseLeave:B=>{B.currentTarget.style.transform="scale(1)",B.currentTarget.style.boxShadow="0 10px 30px rgba(183, 156, 92, 0.3)",B.currentTarget.style.background="linear-gradient(135deg, #B79C5C 0%, #3b82f6 100%)"},children:n.jsx("span",{style:{position:"relative",zIndex:2},children:"Get Started Today"})})]}),n.jsx("div",{style:S,children:n.jsxs("div",{style:I,onMouseEnter:B=>{if(window.innerWidth>=768){B.currentTarget.style.transform="translateY(-10px) scale(1.02)";const se=B.currentTarget.querySelector(".image-overlay"),D=B.currentTarget.querySelector("img");se&&(se.style.opacity="1"),D&&(D.style.transform="scale(1.05)")}},onMouseLeave:B=>{if(window.innerWidth>=768){B.currentTarget.style.transform="translateY(0) scale(1)";const se=B.currentTarget.querySelector(".image-overlay"),D=B.currentTarget.querySelector("img");se&&(se.style.opacity="0"),D&&(D.style.transform="scale(1)")}},children:[n.jsx("img",{src:"https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",alt:"Professional Construction Team",style:J}),n.jsx("div",{className:"image-overlay",style:K,children:"Excellence in Construction"}),window.innerWidth>=768&&n.jsx("div",{style:{position:"absolute",top:"-10px",left:"-10px",right:"-10px",bottom:"-10px",border:"2px solid transparent",borderImage:"linear-gradient(135deg, #B79C5C, #3b82f6) 1",borderRadius:"25px",opacity:.5,animation:"borderGlow 3s ease-in-out infinite"}})]})})]})})})]})},yp=()=>{const r=y.useRef(null),[o,u]=y.useState([]),[c,d]=y.useState(!1),[f,h]=y.useState(typeof window<"u"?window.innerWidth:1200);y.useEffect(()=>{const B=()=>h(window.innerWidth);return window.addEventListener("resize",B),()=>window.removeEventListener("resize",B)},[]),y.useEffect(()=>{const B=new IntersectionObserver(se=>{se.forEach(D=>{D.isIntersecting&&(D.target.classList.add("section-visible"),setTimeout(()=>d(!0),300),setTimeout(()=>{u(te=>[...Array(6).keys()])},1500))})},{threshold:.2});return r.current&&B.observe(r.current),()=>{r.current&&B.unobserve(r.current)}},[]);const x=[{title:"Residential Construction",icon:"🏠",description:"Premium home building with quality materials and expert craftsmanship for comfortable, durable living spaces.",gradient:"linear-gradient(135deg, #2c3e50 0%, #34495e 100%)"},{title:"Commercial Projects",icon:"🏢",description:"Efficient construction of offices, retail spaces and industrial buildings with modern design and timely delivery.",gradient:"linear-gradient(135deg, #B79C5C 0%, #8B7355 100%)"},{title:"Property Renovation",icon:"🔨",description:"Complete property updates from minor repairs to major overhauls for both residential and commercial buildings.",gradient:"linear-gradient(135deg, #34495e 0%, #2c3e50 100%)"},{title:"Custom Design",icon:"📝",description:"Tailored architectural designs that perfectly balance aesthetics, functionality and client requirements.",gradient:"linear-gradient(135deg, #8B7355 0%, #B79C5C 100%)"},{title:"Interior Solutions",icon:"🎨",description:"Full-service interior design from concept to installation for beautiful, functional living and working spaces.",gradient:"linear-gradient(135deg, #2c3e50 0%, #B79C5C 100%)"},{title:"Project Management",icon:"📊",description:"Comprehensive oversight of all construction phases ensuring quality, timeline adherence and budget management.",gradient:"linear-gradient(135deg, #B79C5C 0%, #34495e 100%)"}],b=`
    @keyframes wordReveal {
      0% {
        opacity: 0;
        transform: translateY(100px) rotateX(90deg) scale(0.5);
      }
      100% {
        opacity: 1;
        transform: translateY(0) rotateX(0deg) scale(1);
      }
    }

    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    @keyframes float {
      0%, 100% { 
        transform: translateY(0) rotate(0deg) scale(1); 
        filter: blur(0px);
      }
      25% { 
        transform: translateY(-15px) rotate(2deg) scale(1.02); 
        filter: blur(0.5px);
      }
      50% { 
        transform: translateY(-25px) rotate(5deg) scale(1.05); 
        filter: blur(1px);
      }
      75% { 
        transform: translateY(-15px) rotate(3deg) scale(1.02); 
        filter: blur(0.5px);
      }
    }
    
    @keyframes subtitleReveal {
      0% {
        transform: translateY(40px) scale(0.8);
        opacity: 0;
        filter: blur(8px);
      }
      60% {
        transform: translateY(10px) scale(0.95);
        opacity: 0.7;
        filter: blur(2px);
      }
      100% {
        transform: translateY(0) scale(1);
        opacity: 1;
        filter: blur(0px);
      }
    }
  `,p={minHeight:"100vh",background:"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",padding:"6rem 0",position:"relative",overflow:"hidden"},v={position:"absolute",width:"300px",height:"300px",background:"linear-gradient(45deg, rgba(183, 156, 92, 0.1), rgba(44, 62, 80, 0.1))",borderRadius:"50%",top:"10%",right:"-5%",animation:"float 6s ease-in-out infinite",zIndex:1},z={position:"absolute",width:"200px",height:"200px",background:"linear-gradient(45deg, rgba(139, 115, 85, 0.1), rgba(52, 73, 94, 0.1))",borderRadius:"30%",bottom:"20%",left:"-3%",animation:"float 8s ease-in-out infinite reverse",zIndex:1},S={maxWidth:f<=900?"100%":"1200px",margin:"0 auto",padding:f<=480?"0 1rem":f<=768?"0 1.5rem":"0 2rem",position:"relative",zIndex:2,display:f<=900?"flex":"block",flexDirection:f<=900?"column":"row",alignItems:f<=900?"center":"flex-start"},M={textAlign:"center",marginBottom:"4rem",position:"relative",perspective:"1000px",width:f<=900?"100%":"auto",maxWidth:f<=900?"400px":"none"},k={fontSize:"clamp(3rem, 5vw, 4.5rem)",fontWeight:"900",lineHeight:"1.1",margin:"0 0 1rem 0",perspective:"1000px"},P=B=>({display:"inline-block",marginRight:"20px",opacity:c?1:0,transform:c?"translateY(0) rotateX(0deg) scale(1)":"translateY(100px) rotateX(90deg) scale(0.5)",background:"linear-gradient(135deg, #2c3e50, #34495e, #B79C5C)",backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:c?`wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.8+B*.2}s, gradientShift 4s ease-in-out infinite`:"none"}),R={fontSize:"1.2rem",color:"#6c757d",maxWidth:"800px",margin:"0 auto",lineHeight:"1.8",transform:c?"translateY(0) scale(1)":"translateY(40px) scale(0.8)",opacity:c?1:0,animation:c?"subtitleReveal 1s ease-out 1.6s forwards":"none"},Y=()=>f<=480?{display:"flex",flexDirection:"column",alignItems:"center",gap:"2rem",marginTop:"4rem",width:"100%",maxWidth:"350px",margin:"4rem auto 0"}:f<=768?{display:"flex",flexDirection:"column",alignItems:"center",gap:"2.5rem",marginTop:"4rem",width:"100%",maxWidth:"400px",margin:"4rem auto 0"}:f<=900?{display:"flex",flexDirection:"column",alignItems:"center",gap:"2.5rem",marginTop:"4rem",width:"100%",maxWidth:"450px",margin:"4rem auto 0"}:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(350px, 1fr))",gap:"2.5rem",marginTop:"4rem"},w=(B,se)=>{const D=f<=344?"280px":f<=375?"300px":f<=390?"310px":f<=480?"320px":f<=768?"350px":f<=900?"380px":"100%";return{background:"linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(248, 249, 250, 0.95))",borderRadius:"24px",padding:f<=480?"2rem":"2.5rem",position:"relative",overflow:"hidden",boxShadow:"0 15px 35px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(0, 0, 0, 0.04)",border:"1px solid rgba(183, 156, 92, 0.15)",backdropFilter:"blur(10px)",transform:se?"translateY(0) scale(1) rotateX(0)":"translateY(80px) scale(0.85) rotateX(15deg)",opacity:se?1:0,transition:"all 1s cubic-bezier(0.23, 1, 0.32, 1)",transitionDelay:`${B*.12}s`,cursor:"pointer",transformStyle:"preserve-3d",perspective:"1000px",width:f<=900?D:"100%",maxWidth:f<=900?D:"none",margin:f<=900?"0 auto":"0",flexShrink:f<=900?0:1}},I={width:"80px",height:"80px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2rem",marginBottom:"1.5rem",position:"relative",zIndex:2},J={fontSize:f<=480?"1.4rem":"1.6rem",fontWeight:"700",color:"#2c3e50",marginBottom:"1.2rem",position:"relative",zIndex:3,transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",letterSpacing:"0.5px"},K={color:"#495057",lineHeight:"1.8",fontSize:f<=480?"0.9rem":"1rem",position:"relative",zIndex:3,transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"},he={position:"absolute",top:0,left:0,right:0,bottom:0,opacity:0,transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",borderRadius:"24px",zIndex:1,background:"linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",backdropFilter:"blur(20px)"};return y.useEffect(()=>{const B=document.createElement("style");return B.textContent=b,document.head.appendChild(B),()=>{document.head.contains(B)&&document.head.removeChild(B)}},[]),n.jsxs("section",{ref:r,style:p,children:[n.jsx("div",{style:v}),n.jsx("div",{style:z}),n.jsxs("div",{style:S,children:[n.jsxs("div",{style:M,children:[n.jsxs("h2",{style:k,children:[n.jsx("span",{style:P(0),children:"Our"}),n.jsx("span",{style:P(1),children:"Premium"}),n.jsx("span",{style:P(2),children:"Services"})]}),n.jsx("p",{style:R,children:"We provide a comprehensive range of construction services, from inception to completion. Every detail matters in transforming your vision into reality, creating spaces that inspire and endure."})]}),n.jsx("div",{style:Y(),children:x.map((B,se)=>n.jsxs("div",{style:w(se,o.includes(se)),onMouseEnter:D=>{if(f>768){D.currentTarget.style.transform="translateY(-20px) scale(1.05) rotateX(-5deg) rotateY(5deg)",D.currentTarget.style.boxShadow="0 35px 60px rgba(44, 62, 80, 0.15), 0 15px 25px rgba(183, 156, 92, 0.1)";const te=D.currentTarget.querySelector(".card-overlay"),Z=D.currentTarget.querySelector(".shimmer-effect"),oe=D.currentTarget.querySelector(".card-title"),we=D.currentTarget.querySelector(".card-description"),le=D.currentTarget.querySelector(".icon-container");te&&(te.style.opacity="0.4",te.style.background=B.gradient),Z&&(Z.style.opacity="1",Z.style.transform="translateX(350px)"),oe&&(oe.style.color="#ffffff",oe.style.textShadow="0 2px 4px rgba(0, 0, 0, 0.3)",oe.style.transform="translateY(-2px)"),we&&(we.style.color="rgba(255, 255, 255, 0.9)",we.style.textShadow="0 1px 2px rgba(0, 0, 0, 0.2)"),le&&(le.style.transform="scale(1.1) rotateY(180deg)",le.style.boxShadow="0 8px 25px rgba(0, 0, 0, 0.2)")}},onMouseLeave:D=>{if(f>768){D.currentTarget.style.transform="translateY(0) scale(1) rotateX(0) rotateY(0)",D.currentTarget.style.boxShadow="0 15px 35px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(0, 0, 0, 0.04)";const te=D.currentTarget.querySelector(".card-overlay"),Z=D.currentTarget.querySelector(".shimmer-effect"),oe=D.currentTarget.querySelector(".card-title"),we=D.currentTarget.querySelector(".card-description"),le=D.currentTarget.querySelector(".icon-container");te&&(te.style.opacity="0"),Z&&(Z.style.opacity="0",Z.style.transform="translateX(-350px)"),oe&&(oe.style.color="#2c3e50",oe.style.textShadow="none",oe.style.transform="translateY(0)"),we&&(we.style.color="#495057",we.style.textShadow="none"),le&&(le.style.transform="scale(1) rotateY(0deg)",le.style.boxShadow="0 4px 15px rgba(0, 0, 0, 0.1)")}},children:[n.jsx("div",{className:"card-overlay",style:he}),n.jsx("div",{className:"shimmer-effect",style:{position:"absolute",top:0,left:"-350px",width:"100px",height:"100%",background:"linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)",transform:"skewX(-20deg)",transition:"all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",opacity:0,zIndex:2}}),n.jsx("div",{className:"icon-container",style:{...I,background:B.gradient,transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",boxShadow:"0 4px 15px rgba(0, 0, 0, 0.1)"},children:n.jsx("span",{style:{filter:"brightness(0) invert(1)",transition:"all 0.3s ease",display:"block"},children:B.icon})}),n.jsx("h3",{className:"card-title",style:J,children:B.title}),n.jsx("p",{className:"card-description",style:K,children:B.description})]},se))})]})]})},vp=({openPopup:r})=>{const[o,u]=y.useState({}),[c,d]=y.useState(!1),f=y.useRef(null),h=y.useRef(null);y.useEffect(()=>{const v=new IntersectionObserver(z=>{z.forEach(S=>{S.isIntersecting&&(d(!0),S.target.classList.add("section-visible"),h.current&&h.current.classList.add("heading-visible"))})},{threshold:.1});return f.current&&v.observe(f.current),()=>{f.current&&v.unobserve(f.current)}},[]);const x=[{id:"basic",name:"Basic Package",price:"RS.1600/- + GST",features:["Design & Drawings","Core Construction Materials","Architecture Detailing","Flooring & Wall Tiling","Painting","Electrical","Plumbing","Doors","Windows","Kitchen & Bathroom Fixtures","Fabrications works","Warranty period"]},{id:"premium",name:"Premium Package",price:"RS.1800/- + GST",features:["Design & Drawings","Core Construction Materials","Architecture Detailing","Flooring & Wall Tiling","Painting","Electrical","Plumbing","Doors","Windows","Kitchen & Bathroom Fixtures","Fabrications works","Warranty period"]},{id:"luxury",name:"Luxury Package",price:"RS.2150/- + GST",features:["Design & Drawings","Core Construction Materials","Architecture Detailing","Flooring & Wall Tiling","Painting","Electrical","Plumbing","Doors","Windows","Kitchen & Bathroom Fixtures","Fabrications works","Warranty period"]}],b=(v,z)=>{u(S=>({...S,[v]:S[v]===z?null:z}))},p=r||(()=>alert("Package selected!"));return n.jsxs("section",{id:"pricing",className:"pricing-section",ref:f,children:[n.jsxs("div",{className:"animated-bg",children:[n.jsx("div",{className:"floating-shape circle-1"}),n.jsx("div",{className:"floating-shape circle-2"}),n.jsx("div",{className:"floating-shape circle-3"}),n.jsx("div",{className:"floating-shape square-1"}),n.jsx("div",{className:"floating-shape square-2"}),n.jsx("div",{className:"floating-shape triangle-1"})]}),n.jsxs("div",{className:"container",children:[n.jsx("div",{className:"section-title",children:n.jsxs("div",{className:`heading-container ${c?"heading-visible":""}`,ref:h,children:[n.jsx("h1",{className:"main-heading",children:"OUR PRICING"}),n.jsx("div",{className:"heading-underline"}),n.jsx("p",{className:"heading-subtitle",children:"Choose the perfect package that suits your needs and budget"})]})}),n.jsx("div",{className:"pricing-container",children:x.map((v,z)=>n.jsxs("div",{className:`pricing-card ${v.id}`,style:{animationDelay:`${.2*z}s`},children:[n.jsxs("div",{className:"pricing-header",children:[n.jsx("h3",{children:v.name}),n.jsx("div",{className:"price",children:v.price})]}),n.jsx("div",{className:"pricing-features",children:v.features.map((S,M)=>n.jsxs("div",{className:"feature",children:[n.jsxs("div",{className:"feature-name",onClick:()=>b(v.id,M),children:[S,n.jsx("span",{className:`arrow ${o[v.id]===M?"rotated":""}`,children:"›"})]}),n.jsx("div",{className:`feature-details ${o[v.id]===M?"show":""}`,children:n.jsxs("p",{children:["More details about ",S.toLowerCase()," for the ",v.name,". This includes premium quality materials and professional installation."]})})]},M))}),n.jsx("button",{onClick:p,className:"btn btn-pricing",children:"Select Package"})]},z))})]}),n.jsx("style",{jsx:!0,children:`
        .pricing-section {
          padding: 5rem 0;
          background-color: #000000;
          color: #ffffff;
          overflow: hidden;
          position: relative;
        }

        /* Animated Background */
        .animated-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .floating-shape {
          position: absolute;
          opacity: 0.1;
        }

        .circle-1 {
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, #007bff, #00aaff);
          border-radius: 50%;
          top: 10%;
          left: 10%;
          animation: float 6s ease-in-out infinite;
        }

        .circle-2 {
          width: 120px;
          height: 120px;
          background: linear-gradient(45deg, #00aaff, #00d4ff);
          border-radius: 50%;
          top: 60%;
          right: 15%;
          animation: float 8s ease-in-out infinite reverse;
        }

        .circle-3 {
          width: 60px;
          height: 60px;
          background: linear-gradient(45deg, #007bff, #0056b3);
          border-radius: 50%;
          bottom: 20%;
          left: 20%;
          animation: float 7s ease-in-out infinite;
        }

        .square-1 {
          width: 70px;
          height: 70px;
          background: linear-gradient(45deg, #007bff, #00aaff);
          top: 30%;
          right: 10%;
          animation: rotate 10s linear infinite;
        }

        .square-2 {
          width: 50px;
          height: 50px;
          background: linear-gradient(45deg, #00d4ff, #007bff);
          bottom: 40%;
          right: 30%;
          animation: float 9s ease-in-out infinite, rotate 15s linear infinite reverse;
        }

        .triangle-1 {
          width: 0;
          height: 0;
          border-left: 40px solid transparent;
          border-right: 40px solid transparent;
          border-bottom: 70px solid rgba(0, 123, 255, 0.3);
          top: 80%;
          left: 70%;
          animation: float 5s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .container {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .section-title {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .heading-container {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease;
        }
        
        .heading-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        .main-heading {
          font-size: 2.5rem;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 1rem;
          color: #ffffff;
          text-transform: uppercase;
          position: relative;
        }
        
        .heading-underline {
          height: 4px;
          width: 0;
          background: linear-gradient(90deg, transparent, #007bff, transparent);
          margin: 0 auto;
          transition: width 1.5s ease;
        }
        
        .heading-visible .heading-underline {
          width: 100px;
        }
        
        .heading-subtitle {
          margin-top: 1rem;
          font-size: 1.2rem;
          color: #007bff;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease 0.5s;
        }
        
        .heading-visible .heading-subtitle {
          opacity: 0.9;
          transform: translateY(0);
        }
        
        .pricing-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          margin-top: 3rem;
        }
        
        .pricing-card {
          flex: 1;
          min-width: 280px;
          max-width: 350px;
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          opacity: 0;
          transform: translateY(30px);
          animation: cardAppear 0.8s forwards;
          position: relative;
          z-index: 3;
        }
        
        .pricing-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 25px rgba(0, 123, 255, 0.2);
        }
        
        .pricing-card.basic {
          border-top: 4px solid #007bff;
        }
        
        .pricing-card.premium {
          border-top: 4px solid #00aaff;
        }
        
        .pricing-card.luxury {
          border-top: 4px solid #00d4ff;
        }
        
        @keyframes cardAppear {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .pricing-header {
          text-align: center;
          padding-bottom: 1.5rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .pricing-header h3 {
          font-size: 1.5rem;
          color: #ffffff;
          margin-bottom: 1rem;
        }
        
        .price {
          font-size: 1.8rem;
          font-weight: 700;
          color: #007bff;
        }
        
        .pricing-features {
          flex: 1;
          margin-bottom: 1.5rem;
        }
        
        .feature {
          margin-bottom: 0.75rem;
          position: relative;
        }
        
        .feature-name {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0;
          cursor: pointer;
          color: #ffffff;
          transition: color 0.3s ease;
          user-select: none;
        }
        
        .feature-name:hover {
          color: #007bff;
        }
        
        .arrow {
          color: #ffffff;
          font-size: 1rem;
          font-weight: bold;
          transition: transform 0.3s ease;
          transform: rotate(90deg);
          display: inline-block;
          width: 16px;
          height: 16px;
          text-align: center;
          line-height: 16px;
        }
        
        .arrow.rotated {
          transform: rotate(270deg);
        }
        
        .feature-details {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          padding: 0 0.75rem;
          background-color: rgba(0, 123, 255, 0.1);
          border-radius: 5px;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          transition: all 0.3s ease;
          margin-top: 0.5rem;
        }
        
        .feature-details.show {
          max-height: 200px;
          opacity: 1;
          padding: 0.75rem;
        }
        
        .feature-details p {
          margin: 0;
          line-height: 1.5;
        }
        
        .btn-pricing {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background-color: #007bff;
          color: #ffffff;
          border: none;
          border-radius: 5px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 1px;
          align-self: center;
          font-size: 0.9rem;
        }
        
        .btn-pricing:hover {
          background-color: #0056b3;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 123, 255, 0.4);
        }
        
        @media (max-width: 992px) {
          .pricing-container {
            gap: 1.5rem;
          }
          .main-heading {
            font-size: 2.2rem;
          }
          .floating-shape {
            opacity: 0.05;
          }
        }
        
        @media (max-width: 768px) {
          .pricing-card {
            flex-basis: calc(50% - 1.5rem);
            min-width: 250px;
          }
          .main-heading {
            font-size: 2rem;
          }
          .heading-container {
            opacity: 1;
            transform: translateY(0);
          }
          .pricing-section {
            padding: 3rem 0;
          }
        }
        
        @media (max-width: 576px) {
          .pricing-card {
            flex-basis: 100%;
            min-width: unset;
            margin: 0 10px;
          }
          .main-heading {
            font-size: 1.8rem;
          }
          .heading-subtitle {
            font-size: 1rem;
          }
          .container {
            padding: 0 15px;
          }
        }

        @media (max-width: 480px) {
          .main-heading {
            font-size: 1.6rem;
            letter-spacing: 1px;
          }
          .pricing-card {
            padding: 1.5rem;
          }
          .floating-shape {
            display: none;
          }
        }
      `})]})},Hc=()=>{const r=y.useRef(null),[o,u]=y.useState(!1);y.useEffect(()=>{const v=r.current,z=()=>{const S=window.scrollY,M=v.getBoundingClientRect().top+window.scrollY;if(S>M-window.innerHeight&&S<M+v.offsetHeight){const k=(S-(M-window.innerHeight))*.5;v.style.transform=`translateX(-${k}px)`}};return window.addEventListener("scroll",z),()=>{window.removeEventListener("scroll",z)}},[]);const c=`
    @keyframes subtleGradient {
      0%, 100% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
    }

    @keyframes elegantFade {
      0%, 100% {
        opacity: 0.3;
      }
      50% {
        opacity: 0.6;
      }
    }

    @keyframes professionalFloat {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-8px);
      }
    }

    @keyframes textElegance {
      0% {
        background-position: 0% 50%;
      }
      100% {
        background-position: 100% 50%;
      }
    }

    @keyframes subtleOverlay {
      0%, 100% {
        opacity: 0.1;
      }
      50% {
        opacity: 0.3;
      }
    }
  `;y.useEffect(()=>{const v=document.createElement("style");return v.textContent=c,document.head.appendChild(v),()=>{document.head.contains(v)&&document.head.removeChild(v)}},[]);const d={background:`
      linear-gradient(135deg, 
        #1e3a8a 0%, 
        #2563eb 30%, 
        rgba(183, 156, 92, 0.8) 60%, 
        #1d4ed8 100%
      )
    `,backgroundSize:"300% 300%",animation:"subtleGradient 12s ease-in-out infinite",padding:"1.5rem 0",overflow:"hidden",position:"relative",minHeight:"100px",display:"flex",alignItems:"center",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.15)"},f=n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{position:"absolute",top:"20%",right:"10%",width:"120px",height:"120px",background:"linear-gradient(45deg, rgba(183, 156, 92, 0.1), rgba(255, 255, 255, 0.05))",borderRadius:"50%",animation:"professionalFloat 8s ease-in-out infinite",zIndex:1}}),n.jsx("div",{style:{position:"absolute",bottom:"20%",left:"5%",width:"80px",height:"80px",background:"linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(255, 255, 255, 0.05))",borderRadius:"50%",animation:"professionalFloat 10s ease-in-out infinite reverse",zIndex:1}}),n.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:`
            radial-gradient(circle at 30% 30%, rgba(183, 156, 92, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)
          `,animation:"subtleOverlay 15s ease-in-out infinite",zIndex:1}}),n.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:"2px",background:"linear-gradient(90deg, transparent, rgba(183, 156, 92, 0.6), transparent)",zIndex:2}}),n.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:"2px",background:"linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.6), transparent)",zIndex:2}})]}),h={width:"100%",height:"80px",overflow:"hidden",whiteSpace:"nowrap",position:"relative",zIndex:3,display:"flex",alignItems:"center"},x={display:"inline-block",whiteSpace:"nowrap",willChange:"transform"},b={display:"inline-block",marginRight:"60px",fontSize:"2.2rem",fontWeight:"700",textTransform:"uppercase",letterSpacing:"2px",color:"#ffffff",textShadow:"0 2px 8px rgba(0, 0, 0, 0.3)",position:"relative"},p={color:"rgba(183, 156, 92, 1)",fontWeight:"800",textShadow:"0 2px 8px rgba(183, 156, 92, 0.4)",position:"relative"};return n.jsxs("section",{style:d,children:[f,n.jsx("div",{style:h,children:n.jsx("div",{style:x,ref:r,children:Array(12).fill().map((v,z)=>n.jsxs("span",{style:b,children:["BOOK NOW"," ",n.jsx("span",{style:p,children:"BOOK NOW"})]},z))})}),n.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:`
            linear-gradient(90deg, 
              rgba(0, 0, 0, 0.05) 0%, 
              transparent 50%, 
              rgba(0, 0, 0, 0.05) 100%
            )
          `,zIndex:2,pointerEvents:"none"}}),n.jsx("style",{jsx:!0,children:`
        @media (max-width: 768px) {
          .banner-text {
            font-size: 1.8rem !important;
            margin-right: 40px !important;
            letter-spacing: 1.5px !important;
          }
          
          .banner-content {
            height: 60px !important;
          }
        }

        @media (max-width: 480px) {
          .banner-text {
            font-size: 1.4rem !important;
            margin-right: 30px !important;
            letter-spacing: 1px !important;
          }
        }
      `})]})},qc=()=>{const r=y.useRef(null),[o,u]=y.useState([]),[c,d]=y.useState(!1),[f,h]=y.useState(!1),[x,b]=y.useState(typeof window<"u"?window.innerWidth:1200);y.useEffect(()=>{const Z=()=>{b(window.innerWidth)};return window.addEventListener("resize",Z),()=>window.removeEventListener("resize",Z)},[]),y.useEffect(()=>{const Z=new IntersectionObserver(oe=>{oe.forEach(we=>{we.isIntersecting&&(d(!0),setTimeout(()=>h(!0),300),setTimeout(()=>u([0]),1e3),setTimeout(()=>u([0,1]),1200),setTimeout(()=>u([0,1,2]),1400))})},{threshold:.2});return r.current&&Z.observe(r.current),()=>{r.current&&Z.unobserve(r.current)}},[]);const p=`
    @keyframes wordReveal {
      0% {
        opacity: 0;
        transform: translateY(50px) rotateX(45deg) scale(0.8);
      }
      100% {
        opacity: 1;
        transform: translateY(0) rotateX(0deg) scale(1);
      }
    }

    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    @keyframes cardFadeUp {
      0% {
        opacity: 0;
        transform: translateY(40px) scale(0.95);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @keyframes subtitleFadeUp {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes backgroundFloat {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-8px);
      }
    }

    /* Mobile-specific animations */
    @media (max-width: 768px) {
      @keyframes wordReveal {
        0% {
          opacity: 0;
          transform: translateY(30px) scale(0.9);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      @keyframes cardFadeUp {
        0% {
          opacity: 0;
          transform: translateY(20px) scale(0.98);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
    }
  `;y.useEffect(()=>{const Z=document.createElement("style");return Z.textContent=p,document.head.appendChild(Z),()=>{document.head.contains(Z)&&document.head.removeChild(Z)}},[]);const v=[{icon:"https://assurancedevelopers.com/wp-content/uploads/2024/07/5124556-1-1.png",title:"Consultation & Planning",description:"Strategic consultation meets architectural innovation. We decode your vision into precision blueprints with cutting-edge planning methodologies.",number:"01",color:"#e74c3c"},{icon:"https://assurancedevelopers.com/wp-content/uploads/2024/07/19198827-1.png",title:"Design & Development",description:"Where creativity meets engineering excellence. Our design studio transforms concepts into revolutionary architectural solutions.",number:"02",color:"#3498db"},{icon:"https://assurancedevelopers.com/wp-content/uploads/2024/07/20945160-1-2.png",title:"Construction & Handover",description:"Precision construction powered by advanced technology. From foundation to final handover, excellence in every detail.",number:"03",color:"#2ecc71"}],z={padding:x<768?"4rem 0":"8rem 0",background:`
      linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%),
      radial-gradient(circle at 20% 50%, rgba(183, 156, 92, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 50%, rgba(44, 62, 80, 0.08) 0%, transparent 50%)
    `,position:"relative",overflow:"hidden",color:"#2c3e50"},S={maxWidth:"1600px",margin:"0 auto",padding:x<768?"0 1rem":"0 2rem",position:"relative",zIndex:2},M={textAlign:"center",marginBottom:x<768?"3rem":"6rem",position:"relative",perspective:"1000px"},k={fontSize:x<480?"2.2rem":x<768?"2.8rem":x<1024?"3.5rem":"clamp(3rem, 5vw, 4.5rem)",fontWeight:"900",lineHeight:x<768?"1.2":"1.1",margin:"0 0 2rem 0",perspective:"1000px"},P=Z=>({display:"inline-block",marginRight:x<768?"10px":"20px",opacity:f?1:0,transform:f?"translateY(0) rotateX(0deg) scale(1)":"translateY(50px) rotateX(45deg) scale(0.8)",background:"linear-gradient(135deg, #2c3e50, #34495e, #B79C5C)",backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:f?`wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.5+Z*.2}s, gradientShift 4s ease-in-out infinite`:"none"}),R={fontSize:x<480?"1rem":x<768?"1.2rem":"1.4rem",color:"#64748b",maxWidth:"800px",margin:"0 auto",lineHeight:"1.8",padding:x<768?"0 1rem":"0",opacity:f?1:0,animation:f?"subtitleFadeUp 1s ease-out forwards 1.2s":"none"},Y={display:"grid",gridTemplateColumns:x<768?"1fr":x<1024?"repeat(auto-fit, minmax(300px, 1fr))":"repeat(3, 1fr)",gap:x<480?"2rem":x<768?"2.5rem":"3rem",marginTop:x<768?"2rem":"4rem",position:"relative"},w=(Z,oe)=>({position:"relative",background:"rgba(255, 255, 255, 0.9)",borderRadius:x<768?"20px":"24px",padding:x<480?"2rem 1rem":x<768?"2.5rem 1.5rem":"3rem 2rem",margin:x<768?"0 auto":"0",maxWidth:x<768?"400px":"none",width:"100%",border:"1px solid rgba(183, 156, 92, 0.2)",boxShadow:"0 10px 30px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(183, 156, 92, 0.1)",backdropFilter:"blur(10px)",transform:oe?"translateY(0) scale(1)":"translateY(40px) scale(0.95)",opacity:oe?1:0,animation:oe?`cardFadeUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards ${Z*.15}s`:"none",cursor:"pointer",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",overflow:"hidden"}),I={position:"absolute",top:"-15px",left:"50%",transform:"translateX(-50%)",width:x<480?"45px":x<768?"50px":"60px",height:x<480?"45px":x<768?"50px":"60px",borderRadius:"50%",background:"linear-gradient(135deg, #B79C5C, #2c3e50)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:x<480?"1rem":x<768?"1.2rem":"1.4rem",fontWeight:"800",color:"#ffffff",border:"3px solid rgba(255, 255, 255, 0.9)",zIndex:3,boxShadow:"0 8px 25px rgba(44, 62, 80, 0.3)",transition:"all 0.3s ease"},J={width:x<480?"70px":x<768?"80px":"100px",height:x<480?"70px":x<768?"80px":"100px",margin:x<768?"1.5rem auto":"2rem auto",borderRadius:"50%",background:"rgba(255, 255, 255, 0.8)",display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid rgba(183, 156, 92, 0.3)",boxShadow:"0 8px 25px rgba(44, 62, 80, 0.1)",position:"relative",transition:"all 0.3s ease"},K={width:"50%",height:"50%",objectFit:"contain",filter:"brightness(1.1) contrast(1.1)",transition:"all 0.3s ease"},he={textAlign:"center",position:"relative",zIndex:2},B={fontSize:x<480?"1.2rem":x<768?"1.3rem":"1.5rem",fontWeight:"700",color:"#2c3e50",marginBottom:"1rem",letterSpacing:"0.5px",lineHeight:"1.3",transition:"all 0.3s ease"},se={fontSize:x<480?"0.9rem":x<768?"0.95rem":"1rem",color:"#64748b",lineHeight:"1.6",transition:"all 0.3s ease"},D=n.jsx(n.Fragment,{children:x>=768&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{position:"absolute",top:"15%",right:"10%",width:"150px",height:"150px",background:"rgba(183, 156, 92, 0.05)",borderRadius:"50%",animation:"backgroundFloat 6s ease-in-out infinite",zIndex:1}}),n.jsx("div",{style:{position:"absolute",bottom:"20%",left:"8%",width:"120px",height:"120px",background:"rgba(44, 62, 80, 0.05)",borderRadius:"30%",animation:"backgroundFloat 8s ease-in-out infinite reverse",zIndex:1}})]})}),te=(Z,oe)=>{if(x<768)return;const we=Z.currentTarget,le=we.querySelector(".number-container"),ce=we.querySelector(".icon-container"),E=we.querySelector(".step-icon"),H=we.querySelector(".step-title"),re=we.querySelector(".step-description");oe?(we.style.transform="translateY(-15px) scale(1.02)",we.style.boxShadow="0 25px 50px rgba(44, 62, 80, 0.15), 0 15px 30px rgba(183, 156, 92, 0.2)",we.style.borderColor="rgba(183, 156, 92, 0.4)",le&&(le.style.transform="translateX(-50%) scale(1.1)",le.style.background="linear-gradient(135deg, #2c3e50, #B79C5C)"),ce&&(ce.style.transform="scale(1.1)",ce.style.borderColor="rgba(183, 156, 92, 0.5)",ce.style.background="rgba(255, 255, 255, 0.95)"),E&&(E.style.transform="scale(1.2)",E.style.filter="brightness(1.3) contrast(1.2)"),H&&(H.style.color="#B79C5C"),re&&(re.style.color="#2c3e50")):(we.style.transform="translateY(0) scale(1)",we.style.boxShadow="0 10px 30px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(183, 156, 92, 0.1)",we.style.borderColor="rgba(183, 156, 92, 0.2)",le&&(le.style.transform="translateX(-50%) scale(1)",le.style.background="linear-gradient(135deg, #B79C5C, #2c3e50)"),ce&&(ce.style.transform="scale(1)",ce.style.borderColor="rgba(183, 156, 92, 0.3)",ce.style.background="rgba(255, 255, 255, 0.8)"),E&&(E.style.transform="scale(1)",E.style.filter="brightness(1.1) contrast(1.1)"),H&&(H.style.color="#2c3e50"),re&&(re.style.color="#64748b"))};return n.jsxs("section",{style:z,ref:r,children:[D,n.jsxs("div",{style:S,children:[n.jsxs("div",{style:M,children:[n.jsxs("h2",{style:k,children:[n.jsx("span",{style:P(0),children:"How"}),n.jsx("span",{style:P(1),children:"We"}),n.jsx("span",{style:P(2),children:"Work?"})]}),n.jsx("p",{style:R,children:"Revolutionary construction methodology powered by cutting-edge technology and architectural innovation"})]}),n.jsx("div",{style:Y,children:v.map((Z,oe)=>{const we=o.includes(oe);return n.jsxs("div",{style:w(oe,we),onMouseEnter:le=>te(le,!0),onMouseLeave:le=>te(le,!1),onTouchStart:le=>{x<768&&(le.currentTarget.style.transform="scale(0.98)")},onTouchEnd:le=>{x<768&&(le.currentTarget.style.transform="scale(1)")},children:[n.jsx("div",{style:I,className:"number-container",children:Z.number}),n.jsx("div",{className:"icon-container",style:J,children:n.jsx("img",{src:Z.icon,alt:Z.title,style:K,className:"step-icon"})}),n.jsxs("div",{style:he,children:[n.jsx("h3",{style:B,className:"step-title",children:Z.title}),n.jsx("p",{style:se,className:"step-description",children:Z.description})]})]},oe)})})]})]})};var kh={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},wp=Gt.createContext&&Gt.createContext(kh),d5=["attr","size","title"];function f5(r,o){if(r==null)return{};var u=m5(r,o),c,d;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(r);for(d=0;d<f.length;d++)c=f[d],!(o.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(r,c)&&(u[c]=r[c])}return u}function m5(r,o){if(r==null)return{};var u={};for(var c in r)if(Object.prototype.hasOwnProperty.call(r,c)){if(o.indexOf(c)>=0)continue;u[c]=r[c]}return u}function es(){return es=Object.assign?Object.assign.bind():function(r){for(var o=1;o<arguments.length;o++){var u=arguments[o];for(var c in u)Object.prototype.hasOwnProperty.call(u,c)&&(r[c]=u[c])}return r},es.apply(this,arguments)}function jp(r,o){var u=Object.keys(r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);o&&(c=c.filter(function(d){return Object.getOwnPropertyDescriptor(r,d).enumerable})),u.push.apply(u,c)}return u}function ts(r){for(var o=1;o<arguments.length;o++){var u=arguments[o]!=null?arguments[o]:{};o%2?jp(Object(u),!0).forEach(function(c){p5(r,c,u[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(u)):jp(Object(u)).forEach(function(c){Object.defineProperty(r,c,Object.getOwnPropertyDescriptor(u,c))})}return r}function p5(r,o,u){return o=h5(o),o in r?Object.defineProperty(r,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[o]=u,r}function h5(r){var o=g5(r,"string");return typeof o=="symbol"?o:o+""}function g5(r,o){if(typeof r!="object"||!r)return r;var u=r[Symbol.toPrimitive];if(u!==void 0){var c=u.call(r,o);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(r)}function zh(r){return r&&r.map((o,u)=>Gt.createElement(o.tag,ts({key:u},o.attr),zh(o.child)))}function jt(r){return o=>Gt.createElement(x5,es({attr:ts({},r.attr)},o),zh(r.child))}function x5(r){var o=u=>{var{attr:c,size:d,title:f}=r,h=f5(r,d5),x=d||u.size||"1em",b;return u.className&&(b=u.className),r.className&&(b=(b?b+" ":"")+r.className),Gt.createElement("svg",es({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},u.attr,c,h,{className:b,style:ts(ts({color:r.color||u.color},u.style),r.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),f&&Gt.createElement("title",null,f),r.children)};return wp!==void 0?Gt.createElement(wp.Consumer,null,u=>o(u)):o(kh)}function b5(r){return jt({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"},child:[]}]})(r)}function du(r){return jt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"},child:[]}]})(r)}function y5(r){return jt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(r)}function Sp(r){return jt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(r)}function v5(r){return jt({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M616 192H480V24c0-13.26-10.74-24-24-24H312c-13.26 0-24 10.74-24 24v72h-64V16c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v80h-64V16c0-8.84-7.16-16-16-16H80c-8.84 0-16 7.16-16 16v80H24c-13.26 0-24 10.74-24 24v360c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V216c0-13.26-10.75-24-24-24zM128 404c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm128 192c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm160 96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12V76c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm160 288c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40z"},child:[]}]})(r)}function Cp(r){return jt({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(r)}function Pc(r){return jt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(r)}function w5(r){return jt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(r)}function j5(r){return jt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(r)}function Np(r){return jt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},child:[]}]})(r)}function Ep(r){return jt({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"},child:[]}]})(r)}function S5(r){return jt({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(r)}function Ap(r){return jt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(r)}function C5(r){return jt({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(r)}const Xc=()=>{const r=y.useRef(null),o=y.useRef([]),u=y.useRef(null),[c,d]=y.useState(!1),[f,h]=y.useState([]),[x,b]=y.useState(!1),[p,v]=y.useState(typeof window<"u"?window.innerWidth:1200),z=p<480?24:p<768?28:36;y.useEffect(()=>{const le=()=>{v(window.innerWidth)};return window.addEventListener("resize",le),()=>window.removeEventListener("resize",le)},[]),y.useEffect(()=>{const le=new IntersectionObserver(ce=>{ce.forEach(E=>{E.isIntersecting&&(d(!0),E.target.classList.add("section-visible"),setTimeout(()=>b(!0),300),setTimeout(()=>S(),1e3),setTimeout(()=>h([0]),1600),setTimeout(()=>h([0,1]),1700),setTimeout(()=>h([0,1,2]),1800),setTimeout(()=>h([0,1,2,3]),1900))})},{threshold:.3});return r.current&&le.observe(r.current),()=>{r.current&&le.unobserve(r.current)}},[]);const S=()=>{o.current.forEach((ce,E)=>{if(!ce)return;const H=parseInt(ce.getAttribute("data-target")),ge=H/(2500/50);let C=0;setTimeout(()=>{const q=()=>{C+=ge,C<H?(ce.textContent=Math.ceil(C),setTimeout(q,50)):ce.textContent=H};q()},E*200)})},M=`
    @keyframes wordReveal {
      0% {
        opacity: 0;
        transform: translateY(50px) rotateX(45deg) scale(0.8);
      }
      100% {
        opacity: 1;
        transform: translateY(0) rotateX(0deg) scale(1);
      }
    }

    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    @keyframes cardFadeUp {
      0% {
        opacity: 0;
        transform: translateY(30px) scale(0.95);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @keyframes subtitleFadeUp {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes underlineExpand {
      0% {
        width: 0;
        opacity: 0;
      }
      100% {
        width: 150px;
        opacity: 1;
      }
    }

    @keyframes backgroundFloat {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-15px);
      }
    }

    /* Mobile-specific animations */
    @media (max-width: 768px) {
      @keyframes wordReveal {
        0% {
          opacity: 0;
          transform: translateY(30px) scale(0.9);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      @keyframes cardFadeUp {
        0% {
          opacity: 0;
          transform: translateY(20px) scale(0.98);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
    }
  `;y.useEffect(()=>{const le=document.createElement("style");return le.textContent=M,document.head.appendChild(le),()=>{document.head.contains(le)&&document.head.removeChild(le)}},[]);const k=[{icon:n.jsx(y5,{size:z,color:"#B79C5C"}),value:15,suffix:"+",label:"YEARS LEGACY"},{icon:n.jsx(du,{size:z,color:"#3498db"}),value:12,suffix:"+",label:"LAKHS SQ.FT DELIVERED"},{icon:n.jsx(b5,{size:z,color:"#B79C5C"}),value:60,suffix:"+",label:"PROJECTS DELIVERED"},{icon:n.jsx(v5,{size:z,color:"#3498db"}),value:4,suffix:"",label:"CITIES",subtext:"Bangalore, Mangalore, Hyderabad, Chennai"}],P={padding:p<768?"4rem 0":"6rem 0",background:`
      linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%),
      radial-gradient(circle at 20% 50%, rgba(183, 156, 92, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 50%, rgba(52, 152, 219, 0.1) 0%, transparent 50%)
    `,color:"#ffffff",overflow:"hidden",position:"relative"},R={maxWidth:"1400px",margin:"0 auto",padding:p<768?"0 1rem":"0 2rem",position:"relative",zIndex:2},Y={textAlign:"center",marginBottom:p<768?"3rem":"5rem",position:"relative",perspective:"1000px"},w={fontSize:p<480?"1.9rem":p<768?"2.3rem":"clamp(3rem, 5vw, 4.5rem)",fontWeight:"900",lineHeight:p<768?"1.2":"1.1",margin:"0 0 2rem 0",perspective:"1000px",textTransform:"uppercase",letterSpacing:p<480?"1px":"3px"},I=le=>({display:"inline-block",marginRight:p<768?"10px":"20px",opacity:x?1:0,transform:x?"translateY(0) rotateX(0deg) scale(1)":"translateY(50px) rotateX(45deg) scale(0.8)",background:"linear-gradient(135deg, #ffffff 0%, #B79C5C 50%, #ffffff 100%)",backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:x?`wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.5+le*.2}s, gradientShift 4s ease-in-out infinite`:"none"}),J={fontSize:p<768?"1.1rem":"1.3rem",color:"#B79C5C",opacity:x?.9:0,animation:x?"subtitleFadeUp 1s ease-out forwards 1.2s":"none",letterSpacing:"1px",textTransform:"uppercase"},K={height:"4px",background:"linear-gradient(90deg, transparent, #B79C5C, transparent)",margin:"1rem auto",borderRadius:"2px",boxShadow:x?"0 0 20px rgba(183, 156, 92, 0.5)":"none",animation:x?"underlineExpand 1.5s ease-out forwards 1.4s":"none",width:"0"},he={display:"grid",gridTemplateColumns:p<768||p<1200?"repeat(2, 1fr)":"repeat(4, 1fr)",gridTemplateRows:p<768?"repeat(2, 1fr)":"auto",gap:p<480?"1rem":p<768?"1.5rem":"2rem",marginTop:p<768?"2rem":"4rem",maxWidth:p<768?"400px":"1200px",margin:`${p<768?"2rem":"4rem"} auto 0`,padding:p<768?"0 0.5rem":"0"},B=(le,ce)=>({display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",background:"rgba(30, 30, 30, 0.8)",borderRadius:p<768?"16px":"20px",padding:p<480?"1.2rem 0.8rem":p<768?"1.5rem 1rem":"2rem 1.5rem",border:`1px solid ${le%2===0?"rgba(183, 156, 92, 0.3)":"rgba(52, 152, 219, 0.3)"}`,position:"relative",overflow:"hidden",cursor:"pointer",transform:ce?"translateY(0) scale(1)":"translateY(30px) scale(0.95)",opacity:ce?1:0,animation:ce?`cardFadeUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards ${le*.1}s`:"none",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",minHeight:p<480?"160px":p<768?"180px":"280px",backdropFilter:"blur(10px)",boxShadow:`0 15px 35px ${le%2===0?"rgba(183, 156, 92, 0.1)":"rgba(52, 152, 219, 0.1)"}, 0 5px 15px rgba(0, 0, 0, 0.3)`}),se=le=>({width:p<480?"50px":p<768?"60px":"90px",height:p<480?"50px":p<768?"60px":"90px",marginBottom:p<768?"1rem":"1.5rem",display:"flex",justifyContent:"center",alignItems:"center",background:"rgba(40, 40, 40, 0.8)",borderRadius:"50%",border:`2px solid ${le%2===0?"rgba(183, 156, 92, 0.5)":"rgba(52, 152, 219, 0.5)"}`,position:"relative",boxShadow:`0 10px 25px ${le%2===0?"rgba(183, 156, 92, 0.2)":"rgba(52, 152, 219, 0.2)"}, 0 5px 15px rgba(0, 0, 0, 0.4)`,transition:"all 0.3s ease"}),D=le=>({color:le%2===0?"#B79C5C":"#3498db",transition:"all 0.3s ease",filter:"drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))",display:"flex",alignItems:"center",justifyContent:"center",width:p<480?"1.5rem":p<768?"1.8rem":"2.5rem",height:p<480?"1.5rem":p<768?"1.8rem":"2.5rem"}),te=le=>({fontSize:p<480?"1.8rem":p<768?"2.2rem":"2.8rem",fontWeight:"900",marginBottom:"0.5rem",background:`linear-gradient(135deg, #ffffff, ${le%2===0?"#B79C5C":"#3498db"})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",letterSpacing:"1px",transition:"all 0.3s ease"}),Z={fontSize:p<480?"0.7rem":p<768?"0.8rem":"0.9rem",textTransform:"uppercase",color:"rgba(255, 255, 255, 0.9)",letterSpacing:"0.5px",lineHeight:"1.3",fontWeight:"600",transition:"all 0.3s ease"},oe=n.jsx(n.Fragment,{children:p>=768&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{position:"absolute",top:"15%",right:"10%",width:"150px",height:"150px",background:"rgba(183, 156, 92, 0.05)",borderRadius:"50%",animation:"backgroundFloat 8s ease-in-out infinite",zIndex:1}}),n.jsx("div",{style:{position:"absolute",bottom:"20%",left:"8%",width:"120px",height:"120px",background:"rgba(52, 152, 219, 0.05)",borderRadius:"30%",animation:"backgroundFloat 10s ease-in-out infinite reverse",zIndex:1}})]})}),we=(le,ce,E)=>{if(p<768)return;const H=le.currentTarget,re=H.querySelector(".record-icon"),ge=H.querySelector(".icon-svg"),C=H.querySelector(".record-value"),q=H.querySelector(".record-label");E?(H.style.transform="translateY(-15px) scale(1.05)",H.style.boxShadow=`0 25px 50px ${ce%2===0?"rgba(183, 156, 92, 0.2)":"rgba(52, 152, 219, 0.2)"}, 0 15px 30px rgba(0, 0, 0, 0.4)`,H.style.borderColor=ce%2===0?"rgba(183, 156, 92, 0.6)":"rgba(52, 152, 219, 0.6)",re&&(re.style.transform="scale(1.15)",re.style.borderColor=ce%2===0?"rgba(183, 156, 92, 0.8)":"rgba(52, 152, 219, 0.8)",re.style.background="rgba(50, 50, 50, 0.9)"),ge&&(ge.style.transform="scale(1.2)",ge.style.filter="drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))"),C&&(C.style.transform="scale(1.1)"),q&&(q.style.color=ce%2===0?"#B79C5C":"#3498db")):(H.style.transform="translateY(0) scale(1)",H.style.boxShadow=`0 15px 35px ${ce%2===0?"rgba(183, 156, 92, 0.1)":"rgba(52, 152, 219, 0.1)"}, 0 5px 15px rgba(0, 0, 0, 0.3)`,H.style.borderColor=ce%2===0?"rgba(183, 156, 92, 0.3)":"rgba(52, 152, 219, 0.3)",re&&(re.style.transform="scale(1)",re.style.borderColor=ce%2===0?"rgba(183, 156, 92, 0.5)":"rgba(52, 152, 219, 0.5)",re.style.background="rgba(40, 40, 40, 0.8)"),ge&&(ge.style.transform="scale(1)",ge.style.filter="drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))"),C&&(C.style.transform="scale(1)"),q&&(q.style.color="rgba(255, 255, 255, 0.9)"))};return n.jsxs("section",{style:P,ref:r,children:[oe,n.jsxs("div",{style:R,children:[n.jsx("div",{style:Y,children:n.jsxs("div",{ref:u,children:[n.jsxs("h1",{style:w,children:[n.jsx("span",{style:I(0),children:"Our"}),n.jsx("span",{style:I(1),children:"Track"}),n.jsx("span",{style:I(2),children:"Record"})]}),n.jsx("div",{style:K}),n.jsx("p",{style:J,children:"Excellence in Numbers"})]})}),n.jsx("div",{style:he,children:k.map((le,ce)=>{const E=f.includes(ce);return n.jsxs("div",{style:B(ce,E),onMouseEnter:H=>we(H,ce,!0),onMouseLeave:H=>we(H,ce,!1),onTouchStart:H=>{p<768&&(H.currentTarget.style.transform="scale(0.98)")},onTouchEnd:H=>{p<768&&(H.currentTarget.style.transform="scale(1)")},children:[n.jsx("div",{className:"record-icon",style:se(ce),children:n.jsx("div",{className:"icon-svg",style:D(ce),children:le.icon})}),n.jsxs("div",{className:"record-detail",children:[n.jsxs("h3",{className:"record-value",style:te(ce),children:[n.jsx("span",{ref:H=>{H&&(o.current[ce]=H)},"data-target":le.value,children:"0"}),le.suffix]}),n.jsx("h5",{className:"record-label",style:Z,children:le.label}),le.subtext&&n.jsx("p",{style:{fontSize:"0.85rem",color:"rgba(255, 255, 255, 0.8)",marginTop:"0.5rem",textAlign:"center",fontWeight:"400",lineHeight:"1.4"},children:le.subtext})]})]},ce)})})]})]})},Tp=()=>{const[r,o]=y.useState(0),[u,c]=y.useState(!1),[d,f]=y.useState(!1),h=y.useRef(null),x=y.useRef(null),b=[{id:1,name:"Sangeeta Reddy",role:"Homeowner",testimonial:"Pavan Techno Constructions provided us with a beautiful and modern home at an affordable price. Their innovative designs and attention to detail truly made a difference. Highly recommended!",rating:5,project:"Villa Construction"},{id:2,name:"Anusha Patel",role:"Property Owner",testimonial:"I got my apartment renovated by Pavan Techno Constructions, and I must say their work exceeded my expectations. They used high-quality materials and completed the work within the given timeline.",rating:5,project:"Apartment Renovation"},{id:3,name:"Manoj Sharma",role:"Client",testimonial:"What I loved the most was their commitment to customer satisfaction. They listened to all my requirements and customized the house exactly how I wanted it. Great work and amazing experience!",rating:5,project:"Custom Home Design"}],p={"--primary-color":"#2c3e50","--accent-color":"#B79C5C","--light-color":"#ffffff","--text-color":"#495057","--secondary-color":"#f8f9fa","--shadow-color":"rgba(44, 62, 80, 0.1)","--border-radius":"16px","--transition":"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"},v=`
    @keyframes wordReveal {
      0% {
        opacity: 0;
        transform: translateY(100px) rotateX(90deg) scale(0.5);
      }
      100% {
        opacity: 1;
        transform: translateY(0) rotateX(0deg) scale(1);
      }
    }

    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    @keyframes cardSlideIn {
      0% {
        opacity: 0;
        transform: translateY(100px) scale(0.8);
        filter: blur(10px);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
        filter: blur(0px);
      }
    }

    @keyframes avatarPulse {
      0%, 100% {
        transform: scale(1);
        box-shadow: 0 0 20px rgba(183, 156, 92, 0.3);
      }
      50% {
        transform: scale(1.05);
        box-shadow: 0 0 30px rgba(183, 156, 92, 0.5);
      }
    }

    @keyframes floatAnimation {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    @keyframes starTwinkle {
      0%, 100% {
        opacity: 1;
        transform: scale(1);
      }
      50% {
        opacity: 0.7;
        transform: scale(1.1);
      }
    }

    @keyframes underlineExpand {
      0% {
        width: 0;
        opacity: 0;
      }
      100% {
        width: 80px;
        opacity: 1;
      }
    }

    @keyframes backgroundShift {
      0%, 100% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
    }

    @keyframes cardHover {
      0% {
        transform: translateY(0) scale(1) rotateX(0deg);
      }
      100% {
        transform: translateY(-10px) scale(1.02) rotateX(-2deg);
      }
    }
  `;y.useEffect(()=>{const V=document.createElement("style");return V.textContent=v,document.head.appendChild(V),()=>{document.head.contains(V)&&document.head.removeChild(V)}},[]);const z=()=>{o(V=>(V+1)%b.length)},S=()=>{o(V=>(V-1+b.length)%b.length)};y.useEffect(()=>{const V=new IntersectionObserver($=>{$.forEach(A=>{A.isIntersecting&&(c(!0),A.target.classList.add("section-visible"),setTimeout(()=>f(!0),300))})},{threshold:.3});return x.current&&V.observe(x.current),h.current=setInterval(()=>{z()},6e3),()=>{h.current&&clearInterval(h.current),x.current&&V.unobserve(x.current)}},[]);const M=V=>{o(V),h.current&&clearInterval(h.current),h.current=setInterval(()=>{z()},6e3)},k={...p,padding:"6rem 0",background:`
      linear-gradient(135deg, var(--light-color) 0%, var(--secondary-color) 50%, var(--light-color) 100%),
      radial-gradient(circle at 20% 80%, rgba(183, 156, 92, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(44, 62, 80, 0.05) 0%, transparent 50%)
    `,backgroundSize:"400% 400%",animation:u?"backgroundShift 15s ease-in-out infinite":"none",position:"relative",overflow:"hidden"},P={maxWidth:"1200px",margin:"0 auto",padding:"0 2rem",position:"relative",zIndex:2},R={textAlign:"center",marginBottom:"4rem",position:"relative",perspective:"1000px"},Y={fontSize:"clamp(3rem, 5vw, 4.5rem)",fontWeight:"900",lineHeight:"1.1",margin:"0 0 1rem 0",perspective:"1000px",position:"relative",display:"inline-block"},w=V=>({display:"inline-block",marginRight:"20px",opacity:d?1:0,transform:d?"translateY(0) rotateX(0deg) scale(1)":"translateY(100px) rotateX(90deg) scale(0.5)",background:"linear-gradient(135deg, #2c3e50, #34495e, #B79C5C)",backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:d?`wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.8+V*.2}s, gradientShift 4s ease-in-out infinite`:"none"}),I={position:"absolute",bottom:"-10px",left:"50%",transform:"translateX(-50%)",height:"4px",background:"linear-gradient(90deg, var(--primary-color), var(--accent-color), var(--primary-color))",borderRadius:"2px",animation:d?"underlineExpand 1s ease-out forwards 1.6s":"none",width:"0"},J={fontSize:"1.1rem",color:"var(--text-color)",opacity:d?1:0,animation:d?"cardSlideIn 1s ease-out forwards 1.8s":"none"},K={maxWidth:"900px",margin:"0 auto",position:"relative",overflow:"hidden",borderRadius:"var(--border-radius)",perspective:"1000px"},he={display:"flex",transition:"transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",transform:`translateX(-${r*100}%)`},B={flex:"0 0 100%",display:"flex",flexDirection:"column",alignItems:"center",padding:"3rem 2rem",background:`
      linear-gradient(135deg, var(--light-color) 0%, rgba(248, 249, 250, 0.8) 100%),
      linear-gradient(45deg, rgba(183, 156, 92, 0.03), rgba(44, 62, 80, 0.03))
    `,borderRadius:"var(--border-radius)",boxShadow:"0 15px 35px var(--shadow-color), 0 5px 15px rgba(183, 156, 92, 0.1)",border:"1px solid rgba(183, 156, 92, 0.1)",position:"relative",overflow:"hidden",transition:"var(--transition)",cursor:"pointer"},se={width:"100px",height:"100px",borderRadius:"50%",background:`
      linear-gradient(135deg, rgba(183, 156, 92, 0.1), rgba(44, 62, 80, 0.1)),
      var(--light-color)
    `,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"2rem",color:"var(--primary-color)",border:"4px solid rgba(183, 156, 92, 0.2)",boxShadow:"0 10px 30px rgba(183, 156, 92, 0.2)",animation:u?"avatarPulse 3s ease-in-out infinite, floatAnimation 4s ease-in-out infinite":"none",position:"relative",overflow:"hidden"},D={width:"50px",height:"50px",color:"var(--accent-color)",zIndex:2},te={textAlign:"center",position:"relative",zIndex:2},Z={fontSize:"1.5rem",fontWeight:"700",color:"var(--primary-color)",marginBottom:"0.5rem"},oe={fontSize:"0.9rem",color:"var(--accent-color)",marginBottom:"1rem",textTransform:"uppercase",letterSpacing:"1px",fontWeight:"600"},we={display:"flex",justifyContent:"center",gap:"0.3rem",marginBottom:"1.5rem"},le={width:"20px",height:"20px",color:"#ffd700",animation:"starTwinkle 2s ease-in-out infinite",animationDelay:V=>`${V*.2}s`},ce={fontSize:"1.1rem",fontStyle:"italic",color:"var(--text-color)",lineHeight:"1.8",position:"relative",padding:"0 2rem",marginBottom:"1rem"},E={fontSize:"0.9rem",color:"var(--accent-color)",fontWeight:"600",padding:"0.5rem 1rem",background:"rgba(183, 156, 92, 0.1)",borderRadius:"20px",border:"1px solid rgba(183, 156, 92, 0.2)"},H={display:"flex",alignItems:"center",justifyContent:"center",marginTop:"3rem",gap:"2rem"},re={background:"linear-gradient(135deg, var(--accent-color), var(--primary-color))",border:"none",width:"50px",height:"50px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"white",cursor:"pointer",transition:"var(--transition)",boxShadow:"0 5px 15px rgba(183, 156, 92, 0.3)"},ge={display:"flex",alignItems:"center",gap:"0.8rem"},C=V=>({width:"12px",height:"12px",borderRadius:"50%",background:V===r?"var(--accent-color)":"rgba(183, 156, 92, 0.3)",border:"none",cursor:"pointer",transition:"var(--transition)",transform:V===r?"scale(1.3)":"scale(1)",boxShadow:V===r?"0 0 10px rgba(183, 156, 92, 0.5)":"none"}),q=n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{position:"absolute",top:"10%",right:"5%",width:"200px",height:"200px",background:"linear-gradient(45deg, rgba(183, 156, 92, 0.05), rgba(44, 62, 80, 0.05))",borderRadius:"50%",animation:"floatAnimation 8s ease-in-out infinite",zIndex:1}}),n.jsx("div",{style:{position:"absolute",bottom:"15%",left:"3%",width:"150px",height:"150px",background:"linear-gradient(45deg, rgba(44, 62, 80, 0.05), rgba(183, 156, 92, 0.05))",borderRadius:"30%",animation:"floatAnimation 10s ease-in-out infinite reverse",zIndex:1}})]});return n.jsxs("section",{style:k,ref:x,children:[q,n.jsxs("div",{style:P,children:[n.jsxs("div",{style:R,children:[n.jsxs("h2",{style:Y,children:[n.jsx("span",{style:w(0),children:"What"}),n.jsx("span",{style:w(1),children:"Our"}),n.jsx("span",{style:w(2),children:"Clients"}),n.jsx("span",{style:w(3),children:"Say"}),n.jsx("div",{style:I})]}),n.jsx("p",{style:J,children:"Trusted by hundreds of satisfied customers across multiple cities"})]}),n.jsxs("div",{style:K,children:[n.jsx("div",{style:he,children:b.map((V,$)=>n.jsxs("div",{style:B,onMouseEnter:A=>{A.currentTarget.style.transform="translateY(-10px) scale(1.02) rotateX(-2deg)",A.currentTarget.style.boxShadow="0 25px 50px rgba(183, 156, 92, 0.15), 0 10px 25px var(--shadow-color)"},onMouseLeave:A=>{A.currentTarget.style.transform="translateY(0) scale(1) rotateX(0deg)",A.currentTarget.style.boxShadow="0 15px 35px var(--shadow-color), 0 5px 15px rgba(183, 156, 92, 0.1)"},children:[n.jsxs("div",{style:se,children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",style:D,children:n.jsx("path",{d:"M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c39.77 0 72 32.23 72 72S295.8 272 256 272c-39.77 0-72-32.23-72-72S216.2 128 256 128zM256 448c-52.93 0-100.9-21.53-135.7-56.29C136.5 349.9 176.5 320 224 320h64c47.54 0 87.54 29.88 103.7 71.71C356.9 426.5 308.9 448 256 448z"})}),n.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:`
                      linear-gradient(45deg, 
                        transparent 30%, 
                        rgba(183, 156, 92, 0.1) 50%, 
                        transparent 70%
                      )
                    `,backgroundSize:"200% 200%",animation:"backgroundShift 3s linear infinite",borderRadius:"50%",zIndex:1}})]}),n.jsxs("div",{style:te,children:[n.jsx("h4",{style:Z,children:V.name}),n.jsx("p",{style:oe,children:V.role}),n.jsx("div",{style:we,children:[...Array(V.rating)].map((A,ie)=>n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",fill:"currentColor",style:{...le,animationDelay:`${ie*.2}s`},children:n.jsx("path",{d:"M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"})},ie))}),n.jsxs("blockquote",{style:ce,children:['"',V.testimonial,'"']}),n.jsx("div",{style:E,children:V.project})]}),n.jsx("div",{style:{position:"absolute",bottom:0,right:0,width:"100px",height:"100px",background:"linear-gradient(45deg, rgba(183, 156, 92, 0.03), transparent)",pointerEvents:"none"}})]},$))}),n.jsxs("div",{style:H,children:[n.jsx("button",{style:re,onClick:S,onMouseEnter:V=>{V.currentTarget.style.transform="scale(1.1) rotateZ(-5deg)",V.currentTarget.style.boxShadow="0 10px 25px rgba(183, 156, 92, 0.5)"},onMouseLeave:V=>{V.currentTarget.style.transform="scale(1) rotateZ(0deg)",V.currentTarget.style.boxShadow="0 5px 15px rgba(183, 156, 92, 0.3)"},children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",fill:"currentColor",style:{width:"16px",height:"16px"},children:n.jsx("path",{d:"M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"})})}),n.jsx("div",{style:ge,children:b.map((V,$)=>n.jsx("button",{style:C($),onClick:()=>M($)},$))}),n.jsx("button",{style:re,onClick:z,onMouseEnter:V=>{V.currentTarget.style.transform="scale(1.1) rotateZ(5deg)",V.currentTarget.style.boxShadow="0 10px 25px rgba(183, 156, 92, 0.5)"},onMouseLeave:V=>{V.currentTarget.style.transform="scale(1) rotateZ(0deg)",V.currentTarget.style.boxShadow="0 5px 15px rgba(183, 156, 92, 0.3)"},children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",fill:"currentColor",style:{width:"16px",height:"16px"},children:n.jsx("path",{d:"M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"})})})]})]})]}),n.jsx("style",{jsx:!0,children:`
        @media (max-width: 768px) {
          h2 {
            font-size: 2.2rem !important;
          }
          
          .testimonial-card {
            padding: 2rem 1.5rem !important;
          }
          
          .avatar {
            width: 80px !important;
            height: 80px !important;
          }
          
          .name {
            font-size: 1.3rem !important;
          }
          
          .quote {
            font-size: 1rem !important;
            padding: 0 1rem !important;
          }
          
          .controls {
            gap: 1rem !important;
          }
          
          .control-btn {
            width: 40px !important;
            height: 40px !important;
          }
        }
        
        @media (max-width: 480px) {
          h2 {
            font-size: 1.8rem !important;
          }
          
          .testimonial-card {
            padding: 1.5rem 1rem !important;
          }
          
          .quote {
            font-size: 0.9rem !important;
          }
        }
      `})]})},kp=()=>{var Oe,F,be;const[r,o]=y.useState("all"),[u,c]=y.useState([]),[d,f]=y.useState(!1),[h,x]=y.useState(null),[b,p]=y.useState(0),[v,z]=y.useState(!1),[S,M]=y.useState([]),[k,P]=y.useState(!1),[R,Y]=y.useState({x:0,y:0}),[w,I]=y.useState(typeof window<"u"?window.innerWidth:1200),J=y.useRef(null);y.useEffect(()=>{const W=()=>{I(window.innerWidth)};return window.addEventListener("resize",W),()=>window.removeEventListener("resize",W)},[]);const K=[{id:1,category:"residential",image:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Modern Villa Estate",description:"Luxurious modern villa with panoramic views and contemporary design elements featuring premium finishes",year:"2023",location:"Bengaluru",gallery:["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:2,category:"commercial",image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Corporate Office Tower",description:"State-of-the-art corporate headquarters with sustainable design features and smart building technology",year:"2022",location:"Hyderabad",gallery:["https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:3,category:"interior",image:"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Luxury Apartment Interior",description:"High-end residential interior design with custom furniture and premium materials throughout the space",year:"2023",location:"Chennai",gallery:["https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1616137466211-f939a420be84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:4,category:"renovation",image:"https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Historic Building Renovation",description:"Careful restoration of a heritage structure with modern amenities while preserving historical elements",year:"2021",location:"Mangalore",gallery:["https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1581235707960-5a1d318a2a5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:5,category:"layout",image:"https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Urban Planning Project",description:"Comprehensive urban development plan with mixed-use spaces, green areas and sustainable infrastructure",year:"2022",location:"Bengaluru",gallery:["https://images.unsplash.com/photo-1524055988636-436cfa46e59e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:6,category:"residential",image:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Luxury Family Home",description:"Custom-designed family residence with premium amenities, smart home features and sustainable elements",year:"2023",location:"Hyderabad",gallery:["https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600566752447-f5069ffcada1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:7,category:"commercial",image:"https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Retail Complex Development",description:"Modern shopping center with innovative design, optimized customer flow and integrated digital experiences",year:"2021",location:"Chennai",gallery:["https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1604014056132-70b975a35d40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:8,category:"interior",image:"https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Corporate Office Interior",description:"Modern workspace design with ergonomic furniture, collaborative areas and productivity-focused layout",year:"2022",location:"Mangalore",gallery:["https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:9,category:"renovation",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Residential Remodeling",description:"Complete home transformation with open concept design, updated systems and contemporary finishes",year:"2023",location:"Bengaluru",gallery:["https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600566752447-f5069ffcada1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:10,category:"layout",image:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Residential Community Planning",description:"Master-planned residential community with integrated amenities, green spaces and pedestrian-friendly design",year:"2021",location:"Hyderabad",gallery:["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:11,category:"residential",image:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Waterfront Residence",description:"Exclusive waterfront property with panoramic views, custom architectural details and luxury amenities",year:"2022",location:"Chennai",gallery:["https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600566752447-f5069ffcada1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:12,category:"commercial",image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Mixed-Use Development",description:"Integrated commercial and residential complex with shared amenities and efficient space utilization",year:"2023",location:"Mangalore",gallery:["https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]}],he=[{id:"all",label:"All Projects",color:"#2c3e50",icon:"🏗️"},{id:"residential",label:"Residential",color:"#B79C5C",icon:"🏠"},{id:"commercial",label:"Commercial",color:"#3498db",icon:"🏢"},{id:"interior",label:"Interior",color:"#e74c3c",icon:"🎨"},{id:"renovation",label:"Renovation",color:"#9b59b6",icon:"🔨"},{id:"layout",label:"Layout",color:"#27ae60",icon:"📐"}],B=`
    @keyframes wordReveal {
      0% {
        opacity: 0;
        transform: translateY(50px) rotateX(45deg) scale(0.8);
        filter: blur(8px);
      }
      100% {
        opacity: 1;
        transform: translateY(0) rotateX(0deg) scale(1);
        filter: blur(0px);
      }
    }

    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      33% { background-position: 50% 100%; }
      66% { background-position: 100% 50%; }
    }

    @keyframes titleUnderline {
      0% {
        width: 0;
        opacity: 0;
        transform: scaleX(0);
      }
      100% {
        width: 120px;
        opacity: 1;
        transform: scaleX(1);
      }
    }

    @keyframes filterButtonFloat {
      0% {
        opacity: 0;
        transform: translateY(30px) scale(0.9);
        filter: blur(5px);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
        filter: blur(0px);
      }
    }

    @keyframes galleryItemMagnetize {
      0% {
        opacity: 0;
        transform: translateY(40px) scale(0.9);
        filter: blur(8px);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
        filter: blur(0px);
      }
    }

    @keyframes backgroundFloat {
      0%, 100% {
        transform: translateY(0) rotate(0deg) scale(1);
      }
      25% {
        transform: translateY(-10px) rotate(1deg) scale(1.01);
      }
      50% {
        transform: translateY(-15px) rotate(0deg) scale(1.02);
      }
      75% {
        transform: translateY(-8px) rotate(-1deg) scale(1.01);
      }
    }

    @keyframes morphShape {
      0%, 100% {
        border-radius: 50% 40% 30% 70%;
        transform: rotate(0deg) scale(1);
      }
      25% {
        border-radius: 30% 60% 70% 40%;
        transform: rotate(90deg) scale(1.05);
      }
      50% {
        border-radius: 70% 30% 50% 60%;
        transform: rotate(180deg) scale(0.95);
      }
      75% {
        border-radius: 40% 70% 30% 50%;
        transform: rotate(270deg) scale(1.02);
      }
    }

    @keyframes lightboxEntrance {
      0% {
        opacity: 0;
        transform: scale(0.5);
        filter: blur(20px);
      }
      100% {
        opacity: 1;
        transform: scale(1);
        filter: blur(0px);
      }
    }

    @keyframes parallaxFloat {
      0%, 100% {
        transform: translateY(0px) translateX(0px);
      }
      50% {
        transform: translateY(-8px) translateX(2px);
      }
    }

    @keyframes filterGlow {
      0%, 100% {
        box-shadow: 0 8px 25px rgba(183, 156, 92, 0.2);
      }
      50% {
        box-shadow: 0 8px 35px rgba(183, 156, 92, 0.4), 0 0 20px rgba(183, 156, 92, 0.3);
      }
    }

    @keyframes cardHoverLift {
      0% {
        transform: translateY(0) scale(1) rotateX(0deg);
        box-shadow: 0 15px 35px rgba(44, 62, 80, 0.08);
      }
      100% {
        transform: translateY(-15px) scale(1.03) rotateX(-5deg);
        box-shadow: 0 35px 70px rgba(44, 62, 80, 0.15), 0 15px 30px rgba(183, 156, 92, 0.2);
      }
    }

    @keyframes overlayReveal {
      0% {
        opacity: 0;
        transform: translateY(100%);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes shimmerEffect {
      0% {
        transform: translateX(-200px) skewX(-15deg);
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: translateX(400px) skewX(-15deg);
        opacity: 0;
      }
    }

    @keyframes subtitleFadeUp {
      0% {
        opacity: 0;
        transform: translateY(20px) scale(0.95);
        filter: blur(3px);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
        filter: blur(0px);
      }
    }

    /* Mobile-specific simpler animations */
    @media (max-width: 768px) {
      @keyframes wordReveal {
        0% {
          opacity: 0;
          transform: translateY(30px) scale(0.9);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      @keyframes galleryItemMagnetize {
        0% {
          opacity: 0;
          transform: translateY(20px) scale(0.95);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
    }
  `;y.useEffect(()=>{if(w<768)return;const W=Se=>{if(J.current){const ue=J.current.getBoundingClientRect(),Ne=(Se.clientX-ue.left)/ue.width,ke=(Se.clientY-ue.top)/ue.height;Y({x:Ne,y:ke})}};return document.addEventListener("mousemove",W),()=>document.removeEventListener("mousemove",W)},[w]),y.useEffect(()=>{const W=document.createElement("style");return W.textContent=B,document.head.appendChild(W),()=>{document.head.contains(W)&&document.head.removeChild(W)}},[]),y.useEffect(()=>{const W=new IntersectionObserver(Se=>{Se.forEach(ue=>{ue.isIntersecting&&(z(!0),setTimeout(()=>P(!0),300),setTimeout(()=>{(r==="all"?K:K.filter(ke=>ke.category===r)).forEach((ke,gt)=>{setTimeout(()=>{M(pt=>[...pt,gt])},gt*100)})},1500))})},{threshold:.1});return J.current&&W.observe(J.current),()=>{J.current&&W.unobserve(J.current)}},[r]),y.useEffect(()=>{c(r==="all"?K:K.filter(W=>W.category===r)),M([])},[r]);const se=W=>{o(W)},D=W=>{x(W),p(0),f(!0),document.body.style.overflow="hidden"},te=()=>{f(!1),x(null),p(0),document.body.style.overflow="unset"},Z=W=>{h!=null&&h.gallery&&p(W==="next"?Se=>(Se+1)%h.gallery.length:Se=>(Se-1+h.gallery.length)%h.gallery.length)},oe=()=>h!=null&&h.gallery?h.gallery[b]:h==null?void 0:h.image,we={padding:w<768?"4rem 0":"8rem 0",background:`
      radial-gradient(ellipse at top left, rgba(255, 255, 255, 1) 0%, rgba(248, 250, 252, 0.95) 40%),
      radial-gradient(ellipse at bottom right, rgba(241, 245, 249, 0.9) 0%, rgba(226, 232, 240, 0.8) 60%),
      linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.95) 100%)
    `,position:"relative",overflow:"hidden",minHeight:w<768?"auto":"100vh"},le=w>=768?n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{position:"absolute",top:"10%",right:"8%",width:"280px",height:"280px",background:"linear-gradient(135deg, rgba(183, 156, 92, 0.08), rgba(52, 152, 219, 0.06))",animation:"morphShape 20s ease-in-out infinite, backgroundFloat 8s ease-in-out infinite",zIndex:1,transform:`translate(${R.x*15}px, ${R.y*10}px)`}}),n.jsx("div",{style:{position:"absolute",bottom:"15%",left:"5%",width:"200px",height:"200px",background:"linear-gradient(225deg, rgba(231, 76, 60, 0.06), rgba(155, 89, 182, 0.08))",animation:"morphShape 25s ease-in-out infinite reverse, backgroundFloat 12s ease-in-out infinite",zIndex:1,transform:`translate(${R.x*-20}px, ${R.y*15}px)`}}),n.jsx("div",{style:{position:"absolute",top:"30%",left:"15%",width:"150px",height:"150px",background:"linear-gradient(45deg, rgba(39, 174, 96, 0.05), rgba(241, 196, 15, 0.07))",animation:"morphShape 30s ease-in-out infinite, backgroundFloat 10s ease-in-out infinite reverse",zIndex:1,transform:`translate(${R.x*25}px, ${R.y*-12}px)`}}),[...Array(6)].map((W,Se)=>n.jsx("div",{style:{position:"absolute",left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,width:`${4+Math.random()*6}px`,height:`${4+Math.random()*6}px`,background:`linear-gradient(45deg, rgba(183, 156, 92, ${.3+Math.random()*.4}), rgba(52, 152, 219, ${.2+Math.random()*.3}))`,borderRadius:"50%",animation:`parallaxFloat ${8+Math.random()*6}s ease-in-out infinite`,animationDelay:`${Math.random()*5}s`,zIndex:1,transform:`translate(${R.x*(10+Math.random()*20)}px, ${R.y*(5+Math.random()*15)}px)`}},Se))]}):null,ce={maxWidth:"1600px",margin:"0 auto",padding:w<768?"0 1rem":"0 3rem",position:"relative",zIndex:2},E={textAlign:"center",marginBottom:w<768?"3rem":"5rem",position:"relative",perspective:"1200px"},H={fontSize:w<480?"2rem":w<768?"2.5rem":"clamp(3.5rem, 6vw, 5.5rem)",fontWeight:"900",lineHeight:"1.1",margin:"0 0 2rem 0",perspective:"1200px",position:"relative",display:"inline-block"},re=W=>({display:"inline-block",marginRight:w<768?"15px":"25px",opacity:k?1:0,transform:k?"translateY(0) rotateX(0deg) scale(1)":"translateY(50px) rotateX(45deg) scale(0.8)",background:"linear-gradient(135deg, #2c3e50 0%, #34495e 30%, #B79C5C 60%, #3498db 100%)",backgroundSize:"400% 400%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:k?`wordReveal 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.8+W*.2}s, gradientShift 6s ease-in-out infinite`:"none",textShadow:k?"0 10px 30px rgba(44, 62, 80, 0.1)":"none"}),ge={position:"absolute",bottom:"-15px",left:"50%",transform:"translateX(-50%)",height:"6px",background:"linear-gradient(90deg, transparent, #B79C5C, #3498db, #B79C5C, transparent)",borderRadius:"3px",animation:k?"titleUnderline 1.5s ease-out forwards 2s":"none",width:"0"},C={fontSize:w<768?"1.1rem":"1.3rem",color:"#64748b",fontWeight:"300",letterSpacing:w<768?"1px":"2px",lineHeight:"1.8",maxWidth:"700px",margin:"0 auto",padding:w<768?"0 1rem":"0",opacity:k?1:0,animation:k?"subtitleFadeUp 1s ease-out forwards 2.3s":"none"},q={display:"flex",justifyContent:"center",flexWrap:"wrap",gap:w<768?"0.8rem":"1.5rem",marginBottom:w<768?"2rem":"4rem",opacity:k?1:0,animation:k?"filterButtonFloat 1s ease-out forwards 2.6s":"none"},V=(W,Se,ue)=>({padding:w<480?"0.6rem 1rem":w<768?"0.75rem 1.5rem":"1rem 2rem",background:Se?`linear-gradient(135deg, ${W.color}, rgba(44, 62, 80, 0.9))`:"rgba(255, 255, 255, 0.8)",border:`2px solid ${Se?"transparent":"rgba(183, 156, 92, 0.2)"}`,borderRadius:"25px",color:Se?"white":"#64748b",fontWeight:"600",cursor:"pointer",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",boxShadow:Se?"0 15px 35px rgba(44, 62, 80, 0.2), 0 5px 15px rgba(183, 156, 92, 0.3)":"0 8px 25px rgba(44, 62, 80, 0.08)",position:"relative",overflow:"hidden",textTransform:"uppercase",letterSpacing:"1px",fontSize:w<480?"0.75rem":w<768?"0.8rem":"0.9rem",backdropFilter:"blur(20px)",display:"flex",alignItems:"center",gap:w<768?"4px":"8px",animation:Se?"filterGlow 2s ease-in-out infinite":"none",transform:`translateY(${Se?-3:0}px)`,animationDelay:`${ue*.1}s`}),$={display:"grid",gridTemplateColumns:w<768?"1fr":w<1024?"repeat(2, 1fr)":w<1400?"repeat(3, 1fr)":"repeat(auto-fill, minmax(380px, 1fr))",gap:w<768?"2rem":"3rem",marginTop:w<768?"2rem":"3rem",perspective:"1200px"},A=(W,Se)=>({position:"relative",borderRadius:w<768?"20px":"24px",overflow:"hidden",boxShadow:"0 15px 35px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(183, 156, 92, 0.1)",cursor:"pointer",height:w<480?"280px":w<768?"320px":"350px",background:"rgba(255, 255, 255, 0.9)",border:"1px solid rgba(255, 255, 255, 0.2)",backdropFilter:"blur(20px)",transform:Se?"translateY(0) scale(1)":"translateY(40px) scale(0.9)",opacity:Se?1:0,animation:Se?`galleryItemMagnetize 1s cubic-bezier(0.23, 1, 0.32, 1) forwards ${W*.1}s`:"none",transition:"all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",transformStyle:"preserve-3d"}),ie={width:"100%",height:"70%",objectFit:"cover",transition:"all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",filter:"brightness(0.95) contrast(1.05) saturate(1.1)"},ne={position:"absolute",top:0,left:0,width:"100%",height:"70%",background:`
      radial-gradient(circle at center, transparent 0%, rgba(44, 62, 80, 0.7) 100%),
      linear-gradient(to top, rgba(44, 62, 80, 0.9) 0%, transparent 60%)
    `,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:w<768?"1rem":"2rem",opacity:0,transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",color:"white",textAlign:"center"},Ce={position:"absolute",bottom:0,left:0,right:0,padding:w<768?"1rem":"1.5rem",background:"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(20px)",borderTop:"1px solid rgba(183, 156, 92, 0.2)"},me={fontSize:w<768?"1.2rem":"1.5rem",fontWeight:"700",marginBottom:"0.5rem",transform:"translateY(20px)",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",transitionDelay:"0.1s"},ae={fontSize:w<768?"0.9rem":"1rem",opacity:.9,transform:"translateY(20px)",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",transitionDelay:"0.2s",lineHeight:"1.5"},xe={position:"absolute",top:0,left:"-200px",width:"100px",height:"100%",background:"linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)",animation:w>=768?"shimmerEffect 3s ease-in-out infinite":"none",zIndex:3},De=(W,Se,ue)=>{const Ne=W.currentTarget,ke=Ne.querySelector("img"),gt=Ne.querySelector(".overlay"),pt=Ne.querySelectorAll(".overlay-element"),Dt=Ne.querySelector(".shimmer");ue?(w>=768?(Ne.style.animation="cardHoverLift 0.6s ease-out forwards",ke&&(ke.style.transform="scale(1.15) rotate(3deg)"),Dt&&(Dt.style.animation="shimmerEffect 1s ease-out")):Ne.style.transform="scale(0.98)",gt&&(gt.style.opacity="1"),pt.forEach(Zt=>{Zt.style.transform="translateY(0)"})):(w>=768?(Ne.style.animation="none",Ne.style.transform="translateY(0) scale(1) rotateX(0deg)",Ne.style.boxShadow="0 15px 35px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(183, 156, 92, 0.1)",ke&&(ke.style.transform="scale(1) rotate(0deg)")):Ne.style.transform="scale(1)",gt&&(gt.style.opacity="0"),pt.forEach(Zt=>{Zt.style.transform="translateY(20px)"}))};return n.jsxs("section",{style:we,ref:J,children:[le,n.jsxs("div",{style:ce,children:[n.jsxs("div",{style:E,children:[n.jsxs("h2",{style:H,children:[n.jsx("span",{style:re(0),children:"Our"}),n.jsx("span",{style:re(1),children:"Project"}),n.jsx("span",{style:re(2),children:"Portfolio"}),n.jsx("div",{style:ge})]}),n.jsx("p",{style:C,children:"Discover our curated collection of architectural masterpieces and design excellence that define contemporary living"})]}),n.jsx("div",{style:q,children:he.map((W,Se)=>n.jsxs("button",{style:V(W,r===W.id,Se),onClick:()=>se(W.id),onMouseEnter:ue=>{w>=768&&r!==W.id&&(ue.currentTarget.style.transform="translateY(-8px) scale(1.05)",ue.currentTarget.style.boxShadow="0 20px 40px rgba(44, 62, 80, 0.15), 0 10px 25px rgba(183, 156, 92, 0.2)",ue.currentTarget.style.borderColor="rgba(183, 156, 92, 0.5)",ue.currentTarget.style.background="rgba(255, 255, 255, 0.95)",ue.currentTarget.style.color=W.color)},onMouseLeave:ue=>{w>=768&&r!==W.id&&(ue.currentTarget.style.transform="translateY(0) scale(1)",ue.currentTarget.style.boxShadow="0 8px 25px rgba(44, 62, 80, 0.08)",ue.currentTarget.style.borderColor="rgba(183, 156, 92, 0.2)",ue.currentTarget.style.background="rgba(255, 255, 255, 0.8)",ue.currentTarget.style.color="#64748b")},children:[n.jsx("span",{style:{fontSize:w<768?"1rem":"1.1rem"},children:W.icon}),W.label]},W.id))}),n.jsx("div",{style:$,children:u.map((W,Se)=>{var Ne;const ue=S.includes(Se);return n.jsxs("div",{style:A(Se,ue),onClick:()=>D(W),onMouseEnter:ke=>De(ke,Se,!0),onMouseLeave:ke=>De(ke,Se,!1),onTouchStart:ke=>De(ke,Se,!0),onTouchEnd:ke=>De(ke,Se,!1),children:[n.jsx("div",{style:xe,className:"shimmer"}),n.jsx("img",{src:W.image,alt:W.title,style:ie}),n.jsxs("div",{className:"overlay",style:ne,children:[n.jsx("h3",{className:"overlay-element",style:me,children:W.gallery?`View Gallery (${W.gallery.length} images)`:"View Project"}),n.jsx("p",{className:"overlay-element",style:ae,children:W.gallery?"Click to explore image gallery":"Click to explore details"})]}),n.jsxs("div",{style:Ce,children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"0.5rem",flexDirection:w<480?"column":"row",gap:w<480?"0.5rem":"0"},children:[n.jsx("h3",{style:{fontSize:w<768?"1.1rem":"1.3rem",fontWeight:"700",color:"#2c3e50",margin:0,flex:1},children:W.title}),n.jsx("span",{style:{fontSize:"0.8rem",color:"#B79C5C",fontWeight:"600",background:"rgba(183, 156, 92, 0.1)",padding:"0.25rem 0.75rem",borderRadius:"12px",marginLeft:w<480?"0":"1rem"},children:W.year})]}),n.jsx("p",{style:{fontSize:w<768?"0.8rem":"0.9rem",color:"#64748b",lineHeight:"1.4",margin:"0 0 0.5rem 0"},children:W.description}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:w<480?"column":"row",gap:w<480?"0.5rem":"0"},children:[n.jsx("span",{style:{fontSize:"0.8rem",color:"#94a3b8",display:"flex",alignItems:"center",gap:"0.5rem"},children:W.location}),n.jsx("span",{style:{fontSize:"0.8rem",color:((Ne=he.find(ke=>ke.id===W.category))==null?void 0:Ne.color)||"#64748b",fontWeight:"600",textTransform:"uppercase",letterSpacing:"0.5px"},children:W.category})]})]})]},W.id)})})]}),d&&n.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.95)",zIndex:1e3,display:"flex",justifyContent:"center",alignItems:"center",animation:"lightboxEntrance 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards",backdropFilter:"blur(20px)",padding:w<768?"1rem":"2rem"},onClick:te,children:n.jsxs("div",{style:{position:"relative",width:"100%",maxWidth:w<768?"100%":"1200px",background:"rgba(255, 255, 255, 0.95)",borderRadius:w<768?"16px":"24px",overflow:"hidden",boxShadow:"0 50px 100px rgba(0, 0, 0, 0.3)",backdropFilter:"blur(30px)",border:"1px solid rgba(255, 255, 255, 0.2)",maxHeight:"90vh"},onClick:W=>W.stopPropagation(),children:[n.jsx("button",{style:{position:"absolute",top:w<768?"1rem":"1.5rem",right:w<768?"1rem":"1.5rem",background:"rgba(0, 0, 0, 0.7)",border:"none",width:w<768?"50px":"60px",height:w<768?"50px":"60px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:w<768?"1.2rem":"1.5rem",cursor:"pointer",zIndex:10,transition:"all 0.3s ease",backdropFilter:"blur(10px)"},onClick:te,onMouseEnter:W=>{w>=768&&(W.currentTarget.style.background="#B79C5C",W.currentTarget.style.transform="scale(1.1) rotate(90deg)")},onMouseLeave:W=>{w>=768&&(W.currentTarget.style.background="rgba(0, 0, 0, 0.7)",W.currentTarget.style.transform="scale(1) rotate(0deg)")},children:"×"}),n.jsx("div",{style:{width:"100%",height:w<768?"50vh":"70vh",maxHeight:"400px"},children:n.jsx("img",{src:oe(),alt:h==null?void 0:h.title,style:{width:"100%",height:"100%",objectFit:"cover"}})}),n.jsxs("div",{style:{padding:w<768?"1.5rem":"3rem",background:"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(20px)",maxHeight:w<768?"40vh":"auto",overflowY:"auto"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"1rem",flexDirection:w<768?"column":"row",gap:w<768?"1rem":"0"},children:[n.jsx("h3",{style:{color:"#2c3e50",fontSize:w<768?"1.5rem":"2.2rem",fontWeight:"700",margin:0,flex:1},children:h==null?void 0:h.title}),n.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center",flexWrap:"wrap"},children:[(h==null?void 0:h.gallery)&&n.jsxs("span",{style:{fontSize:w<768?"0.9rem":"1rem",color:"#3498db",fontWeight:"600",background:"rgba(52, 152, 219, 0.1)",padding:"0.5rem 1rem",borderRadius:"20px"},children:[b+1," / ",h.gallery.length]}),n.jsx("span",{style:{fontSize:w<768?"0.9rem":"1rem",color:"#B79C5C",fontWeight:"600",background:"rgba(183, 156, 92, 0.1)",padding:"0.5rem 1rem",borderRadius:"20px"},children:h==null?void 0:h.year}),n.jsxs("span",{style:{fontSize:w<768?"0.9rem":"1rem",color:"#64748b",display:"flex",alignItems:"center",gap:"0.5rem"},children:["📍 ",h==null?void 0:h.location]})]})]}),n.jsx("p",{style:{marginBottom:"1.5rem",color:"#64748b",fontSize:w<768?"1rem":"1.2rem",lineHeight:"1.7"},children:h==null?void 0:h.description}),n.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:n.jsxs("span",{style:{fontSize:w<768?"0.9rem":"1rem",color:((Oe=he.find(W=>W.id===(h==null?void 0:h.category)))==null?void 0:Oe.color)||"#64748b",fontWeight:"600",textTransform:"uppercase",letterSpacing:"1px",background:`rgba(${(F=he.find(W=>W.id===(h==null?void 0:h.category)))==null?void 0:F.color.slice(1).match(/.{2}/g).map(W=>parseInt(W,16)).join(", ")}, 0.1)`||"rgba(100, 116, 139, 0.1)",padding:"0.75rem 1.5rem",borderRadius:"25px"},children:[(be=he.find(W=>W.id===(h==null?void 0:h.category)))==null?void 0:be.icon," ",h==null?void 0:h.category]})})]}),(h==null?void 0:h.gallery)&&n.jsxs("div",{style:{position:"absolute",top:"50%",transform:"translateY(-50%)",width:"100%",display:"flex",justifyContent:"space-between",padding:w<768?"0 1rem":"0 2rem",zIndex:10,pointerEvents:"none"},children:[n.jsx("button",{style:{background:"rgba(0, 0, 0, 0.7)",border:"none",width:w<768?"50px":"70px",height:w<768?"50px":"70px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:w<768?"1.2rem":"1.8rem",cursor:"pointer",transition:"all 0.3s ease",pointerEvents:"auto",backdropFilter:"blur(10px)"},onClick:()=>Z("prev"),onMouseEnter:W=>{w>=768&&(W.currentTarget.style.background="#2c3e50",W.currentTarget.style.transform="scale(1.1) rotateZ(-10deg)")},onMouseLeave:W=>{w>=768&&(W.currentTarget.style.background="rgba(0, 0, 0, 0.7)",W.currentTarget.style.transform="scale(1) rotateZ(0deg)")},children:"‹"}),n.jsx("button",{style:{background:"rgba(0, 0, 0, 0.7)",border:"none",width:w<768?"50px":"70px",height:w<768?"50px":"70px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:w<768?"1.2rem":"1.8rem",cursor:"pointer",transition:"all 0.3s ease",pointerEvents:"auto",backdropFilter:"blur(10px)"},onClick:()=>Z("next"),onMouseEnter:W=>{w>=768&&(W.currentTarget.style.background="#2c3e50",W.currentTarget.style.transform="scale(1.1) rotateZ(10deg)")},onMouseLeave:W=>{w>=768&&(W.currentTarget.style.background="rgba(0, 0, 0, 0.7)",W.currentTarget.style.transform="scale(1) rotateZ(0deg)")},children:"›"})]})]})})]})},zp=()=>{const[r,o]=y.useState({name:"",email:"",phone:"",package:"",message:""}),[u,c]=y.useState({message:"",isError:!1,isSubmitting:!1}),d=y.useRef(null),f=y.useRef(null);y.useEffect(()=>{const b=new IntersectionObserver(p=>{p.forEach(v=>{v.isIntersecting&&(v.target.classList.add("section-visible"),f.current&&f.current.classList.add("heading-visible"))})},{threshold:.2});return d.current&&b.observe(d.current),()=>{d.current&&b.unobserve(d.current)}},[]);const h=b=>{const{name:p,value:v}=b.target;o(z=>({...z,[p]:v}))},x=async()=>{if(!r.name||!r.email||!r.phone||!r.package||!r.message){c({message:"Please fill in all required fields.",isError:!0,isSubmitting:!1}),setTimeout(()=>{c({message:"",isError:!1,isSubmitting:!1})},3e3);return}c({message:"",isError:!1,isSubmitting:!0});try{if(!(await fetch("http://localhost:3001/api/data",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).ok)throw new Error("Failed to send data");c({message:"Thank you! Your message has been sent successfully.",isError:!1,isSubmitting:!1}),o({name:"",email:"",phone:"",package:"",message:""}),setTimeout(()=>{c({message:"",isError:!1,isSubmitting:!1})},5e3)}catch{c({message:"Failed to send message. Please try again later.",isError:!0,isSubmitting:!1}),setTimeout(()=>{c({message:"",isError:!1,isSubmitting:!1})},5e3)}};return n.jsxs(n.Fragment,{children:[n.jsxs("section",{id:"contact",className:"contact-section",ref:d,children:[n.jsxs("div",{className:"animated-background",children:[n.jsx("div",{className:"floating-shape circle-1"}),n.jsx("div",{className:"floating-shape circle-2"}),n.jsx("div",{className:"floating-shape circle-3"}),n.jsx("div",{className:"floating-shape square-1"}),n.jsx("div",{className:"floating-shape triangle-1"})]}),n.jsxs("div",{className:"container",children:[n.jsx("div",{className:"section-title",children:n.jsxs("div",{className:"heading-container",ref:f,children:[n.jsx("h1",{className:"main-heading",children:"GET IN TOUCH"}),n.jsx("div",{className:"heading-underline"}),n.jsx("p",{className:"heading-subtitle",children:"We'd Love to Hear From You"})]})}),n.jsxs("div",{className:"contact-container",children:[n.jsxs("div",{className:"contact-info",children:[n.jsx("div",{className:"contact-map",children:n.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6050645764435!2d77.5693744!3d12.9330859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15515dc1da7d%3A0xcd0ee36e6cf73082!2sPavan%20Techno%20Constructions!5e0!3m2!1sen!2sin!4v1738318615550!5m2!1sen!2sin",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Pavan Techno Constructions Location"})}),n.jsxs("div",{className:"contact-details",children:[n.jsxs("div",{className:"contact-detail-item",style:{animationDelay:"0.8s"},children:[n.jsx("div",{className:"icon",children:n.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"})})}),n.jsxs("div",{className:"info",children:[n.jsx("h4",{children:"Our Location"}),n.jsx("p",{children:"Metro pillar no 116, Building no 28, Near, Vanivilas Rd, next to Nakoda Residency, Vishweshwarapura, Basavanagudi, Bengaluru, Karnataka 560004"})]})]}),n.jsxs("div",{className:"contact-detail-item",style:{animationDelay:"1.0s"},children:[n.jsx("div",{className:"icon",children:n.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"})})}),n.jsxs("div",{className:"info",children:[n.jsx("h4",{children:"Call Us"}),n.jsx("p",{children:"+91 9738906052"}),n.jsx("p",{children:"+91 8722906052"})]})]}),n.jsxs("div",{className:"contact-detail-item",style:{animationDelay:"1.2s"},children:[n.jsx("div",{className:"icon",children:n.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"})})}),n.jsxs("div",{className:"info",children:[n.jsx("h4",{children:"Email Us"}),n.jsx("p",{children:"pavantechnoconstructions.info@gmail.com"})]})]})]})]}),n.jsxs("div",{className:"contact-form-container",children:[n.jsxs("div",{className:"form-header",children:[n.jsx("h3",{children:"Send us a Message"}),n.jsx("p",{children:"Let's discuss your project requirements"})]}),n.jsxs("div",{className:"contact-form",children:[n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"name",children:"Full Name"}),n.jsx("input",{type:"text",name:"name",id:"name",placeholder:"Enter your full name",value:r.name,onChange:h})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"email",children:"Email Address"}),n.jsx("input",{type:"email",name:"email",id:"email",placeholder:"Enter your email address",value:r.email,onChange:h})]})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"phone",children:"Phone Number"}),n.jsx("input",{type:"tel",name:"phone",id:"phone",placeholder:"Enter your phone number",value:r.phone,onChange:h})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"package",children:"Select Package"}),n.jsxs("select",{name:"package",id:"package",value:r.package,onChange:h,children:[n.jsx("option",{value:"",disabled:!0,children:"Choose a package"}),n.jsx("option",{value:"basic",children:"Basic Package"}),n.jsx("option",{value:"premium",children:"Premium Package"}),n.jsx("option",{value:"luxury",children:"Luxury Package"}),n.jsx("option",{value:"custom",children:"Custom Project"})]})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"message",children:"Your Message"}),n.jsx("textarea",{name:"message",id:"message",placeholder:"Tell us about your project requirements",rows:"5",value:r.message,onChange:h})]}),n.jsx("div",{className:"form-status",children:u.message&&n.jsx("div",{className:`status-message ${u.isError?"error":"success"}`,children:u.message})}),n.jsxs("button",{onClick:x,className:"btn btn-primary",disabled:u.isSubmitting,children:[n.jsx("span",{children:u.isSubmitting?"Sending...":"Send Message"}),n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"})})]})]})]})]})]})]}),n.jsx("style",{jsx:!0,children:`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes titleSlideUp {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes slideUp {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideRight {
          0% {
            transform: translateX(-30px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideLeft {
          0% {
            transform: translateX(30px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .contact-section {
          padding: 6rem 0;
          background-color: #000000;
          color: #ffffff;
          overflow: hidden;
          position: relative;
          min-height: 100vh;
        }

        .animated-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .floating-shape {
          position: absolute;
          opacity: 0.1;
        }

        .circle-1 {
          width: 120px;
          height: 120px;
          background: linear-gradient(45deg, #007bff, #0056b3);
          border-radius: 50%;
          top: 10%;
          left: 10%;
          animation: float 8s ease-in-out infinite;
        }

        .circle-2 {
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, #B79C5C, #8b7355);
          border-radius: 50%;
          top: 70%;
          right: 15%;
          animation: float 6s ease-in-out infinite reverse;
        }

        .circle-3 {
          width: 60px;
          height: 60px;
          background: linear-gradient(45deg, #007bff, #4dabf7);
          border-radius: 50%;
          bottom: 30%;
          left: 20%;
          animation: float 7s ease-in-out infinite;
        }

        .square-1 {
          width: 70px;
          height: 70px;
          background: linear-gradient(45deg, #B79C5C, #007bff);
          top: 40%;
          right: 10%;
          animation: rotate 10s linear infinite;
        }

        .triangle-1 {
          width: 0;
          height: 0;
          border-left: 40px solid transparent;
          border-right: 40px solid transparent;
          border-bottom: 70px solid rgba(183, 156, 92, 0.3);
          top: 20%;
          right: 30%;
          animation: float 5s ease-in-out infinite;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }
        
        .section-title {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .heading-container {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease;
        }
        
        .section-visible .heading-container {
          animation: titleSlideUp 0.8s forwards 0.3s;
        }
        
        .main-heading {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          letter-spacing: 3px;
          margin-bottom: 1.5rem;
          color: #ffffff;
          text-transform: uppercase;
          position: relative;
          background: linear-gradient(135deg, #007bff, #B79C5C);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .heading-underline {
          height: 4px;
          width: 0;
          background: linear-gradient(90deg, transparent, #007bff, #B79C5C, transparent);
          margin: 0 auto;
          transition: width 1.5s ease 1s;
          border-radius: 2px;
        }
        
        .heading-visible .heading-underline {
          width: 120px;
        }
        
        .heading-subtitle {
          margin-top: 1.5rem;
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          color: #B79C5C;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease 1.5s;
          font-weight: 300;
          letter-spacing: 1px;
        }
        
        .heading-visible .heading-subtitle {
          opacity: 0.9;
          transform: translateY(0);
        }
        
        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-top: 3rem;
          opacity: 0;
        }

        .section-visible .contact-container {
          animation: fadeIn 1s forwards 0.5s;
        }
        
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        
        .contact-map {
          height: 300px;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 123, 255, 0.2);
          transform: translateY(30px);
          opacity: 0;
          border: 2px solid rgba(183, 156, 92, 0.2);
        }

        .section-visible .contact-map {
          animation: slideUp 0.8s forwards 0.6s;
        }
        
        .contact-map iframe {
          width: 100%;
          height: 100%;
          border: none;
          filter: grayscale(20%) brightness(0.9);
        }
        
        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .contact-detail-item {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.1), rgba(183, 156, 92, 0.1));
          padding: 2rem;
          border-radius: 15px;
          border: 1px solid rgba(183, 156, 92, 0.2);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(-30px);
          opacity: 0;
          backdrop-filter: blur(10px);
        }

        .section-visible .contact-detail-item {
          animation: slideRight 0.8s forwards;
        }
        
        .contact-detail-item:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 123, 255, 0.15);
          border-color: rgba(183, 156, 92, 0.4);
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.15), rgba(183, 156, 92, 0.15));
        }
        
        .contact-detail-item .icon {
          flex-shrink: 0;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: #ffffff;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5rem;
          box-shadow: 0 8px 20px rgba(0, 123, 255, 0.3);
          transition: all 0.3s ease;
        }

        .contact-detail-item:hover .icon {
          background: linear-gradient(135deg, #B79C5C, #8b7355);
          transform: scale(1.1) rotate(5deg);
        }
        
        .contact-detail-item .info h4 {
          color: #B79C5C;
          margin-bottom: 0.8rem;
          font-size: 1.2rem;
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        
        .contact-detail-item .info p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
          margin-bottom: 0.3rem;
          line-height: 1.6;
        }

        .contact-form-container {
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.05), rgba(183, 156, 92, 0.05));
          padding: 3rem;
          border-radius: 20px;
          border: 1px solid rgba(183, 156, 92, 0.2);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(20px);
          transform: translateX(30px);
          opacity: 0;
        }

        .section-visible .contact-form-container {
          animation: slideLeft 0.8s forwards 0.8s;
        }

        .form-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .form-header h3 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #007bff;
          margin-bottom: 0.5rem;
          letter-spacing: 1px;
        }

        .form-header p {
          color: #B79C5C;
          font-size: 1rem;
          opacity: 0.9;
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        
        .form-group {
          position: relative;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.8rem;
          color: #B79C5C;
          font-weight: 600;
          font-size: 0.95rem;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        
        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 1rem 1.2rem;
          font-size: 1rem;
          background: rgba(255, 255, 255, 0.95);
          border: 2px solid rgba(183, 156, 92, 0.2);
          border-radius: 10px;
          color: #000;
          transition: all 0.3s ease;
          font-family: inherit;
        }
        
        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          background: rgba(255, 255, 255, 1);
          border-color: #007bff;
          box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.1);
          transform: translateY(-2px);
        }
        
        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(0, 0, 0, 0.5);
        }
        
        .form-group select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23007bff' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          padding-right: 3rem;
        }
        
        .form-status {
          min-height: 40px;
          display: flex;
          align-items: center;
        }
        
        .status-message {
          padding: 1rem 1.5rem;
          border-radius: 10px;
          font-size: 0.95rem;
          width: 100%;
          text-align: center;
          font-weight: 500;
        }
        
        .status-message.error {
          background: rgba(220, 53, 69, 0.1);
          color: #dc3545;
          border: 1px solid rgba(220, 53, 69, 0.3);
        }
        
        .status-message.success {
          background: rgba(40, 167, 69, 0.1);
          color: #28a745;
          border: 1px solid rgba(40, 167, 69, 0.3);
        }
        
        .btn-primary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          padding: 1.2rem 2.5rem;
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: #ffffff;
          border: none;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 1px;
          text-transform: uppercase;
          position: relative;
          overflow: hidden;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #B79C5C, #8b7355);
          transition: left 0.3s ease;
          z-index: -1;
        }
        
        .btn-primary:hover::before {
          left: 0;
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(0, 123, 255, 0.4);
        }
        
        .btn-primary:disabled {
          background: #6c757d;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .btn-primary:disabled::before {
          display: none;
        }

        /* Mobile Responsiveness */
        @media (max-width: 1200px) {
          .contact-container {
            gap: 3rem;
          }
        }
        
        @media (max-width: 992px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .contact-form-container {
            order: -1;
          }
          
          .contact-info,
          .contact-form-container {
            transform: translateX(0);
          }

          .section-visible .contact-info,
          .section-visible .contact-form-container {
            animation: fadeIn 1s forwards 0.3s;
          }
          
          .main-heading {
            font-size: 2.5rem;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
        
        @media (max-width: 768px) {
          .contact-section {
            padding: 4rem 0;
          }

          .container {
            padding: 0 1rem;
          }

          .contact-form-container {
            padding: 2rem;
          }
          
          .contact-detail-item {
            padding: 1.5rem;
            gap: 1rem;
          }

          .contact-detail-item .icon {
            width: 50px;
            height: 50px;
          }
          
          .main-heading {
            font-size: 2rem;
            letter-spacing: 2px;
          }

          .heading-subtitle {
            font-size: 1.1rem;
          }
        }
        
        @media (max-width: 576px) {
          .contact-section {
            padding: 3rem 0;
          }

          .contact-map {
            height: 250px;
          }
          
          .contact-detail-item {
            padding: 1.25rem;
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .contact-form-container {
            padding: 1.5rem;
          }
          
          .main-heading {
            font-size: 1.8rem;
          }

          .form-header h3 {
            font-size: 1.5rem;
          }

          .btn-primary {
            padding: 1rem 2rem;
            font-size: 1rem;
          }

          /* Disable complex animations on mobile */
          .floating-shape {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 0.5rem;
          }

          .contact-form-container {
            padding: 1rem;
          }

          .main-heading {
            font-size: 1.6rem;
            letter-spacing: 1px;
          }
        }
      `})]})},en=()=>{const r=new Date().getFullYear(),[o,u]=y.useState(!1),[c,d]=y.useState(typeof window<"u"?window.innerWidth:1200);y.useEffect(()=>{const x=()=>{d(window.innerWidth)};return window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[]),y.useEffect(()=>{const x=new IntersectionObserver(p=>{p.forEach(v=>{v.isIntersecting&&u(!0)})},{threshold:.1}),b=document.querySelector(".footer");return b&&x.observe(b),()=>{b&&x.unobserve(b)}},[]);const f=[{icon:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",href:"https://www.facebook.com/profile.php?id=61575157293939#",label:"Facebook"},{icon:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",href:"https://www.instagram.com/pavantechnoconstructions/",label:"Instagram"}],h=[{name:"Home",href:"#home"},{name:"About",href:"#about"},{name:"Services",href:"#services"},{name:"Pricing",href:"#pricing"},{name:"Gallery",href:"#gallery"},{name:"Contact",href:"#contact"}];return n.jsxs(n.Fragment,{children:[n.jsxs("footer",{className:`footer ${o?"visible":""}`,children:[n.jsxs("div",{className:"footer-bg-elements",children:[n.jsx("div",{className:"bg-circle-1"}),n.jsx("div",{className:"bg-circle-2"}),n.jsx("div",{className:"bg-square-1"}),n.jsx("div",{className:"bg-triangle-1"})]}),n.jsx("div",{className:"footer-top",children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"footer-grid",children:[n.jsxs("div",{className:"footer-info",children:[n.jsx("div",{className:"footer-branding",children:n.jsx("div",{className:"footer-logo",children:n.jsxs("div",{style:{display:"inline-flex",alignItems:"center",background:"linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)",padding:"10px 15px",borderRadius:"8px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.12)",marginBottom:"20px",border:"1px solid rgba(255, 255, 255, 0.2)"},children:[n.jsx("div",{style:{width:"60px",height:"60px",borderRadius:"50%",overflow:"hidden",marginRight:"12px",border:"2px solid #B79C5C"},children:n.jsx("img",{src:"/pavan-techno-constructions/images/WhatsApp Image 2025-06-16 at 14.53.39_aa8e7adb.jpg",alt:"Pavan Techno Constructions",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})}),n.jsxs("div",{children:[n.jsx("h3",{style:{margin:"0",fontSize:"18px",fontWeight:"700",color:"#1e293b",letterSpacing:"0.5px",lineHeight:"1.2"},children:"PAVAN TECHNO"}),n.jsx("p",{style:{margin:"2px 0 0 0",fontSize:"14px",color:"#B79C5C",fontWeight:"500",letterSpacing:"1px"},children:"CONSTRUCTIONS"})]})]})})}),n.jsx("p",{children:"We at Pavan Techno Constructions prioritize a cost-effective construction process with high quality outcomes. With over 9 years of experience, we've built a foundation of trust, ethics, and shared success."}),n.jsx("div",{className:"social-links",children:f.map((x,b)=>n.jsx("a",{href:x.href,className:"social-link","aria-label":x.label,style:{animationDelay:`${b*.1}s`},children:n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:x.icon})})},b))})]}),n.jsxs("div",{className:"footer-links",children:[n.jsx("h4",{children:"Quick Links"}),n.jsx("ul",{children:h.map((x,b)=>n.jsx("li",{style:{animationDelay:`${b*.1}s`},children:n.jsx("a",{href:x.href,children:x.name})},b))})]}),n.jsxs("div",{className:"footer-contact",children:[n.jsx("h4",{children:"Contact Us"}),n.jsxs("div",{className:"contact-items",children:[n.jsxs("div",{className:"contact-item",style:{animationDelay:"0.2s"},children:[n.jsx("div",{className:"contact-icon",children:n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"})})}),n.jsxs("div",{className:"contact-text",children:[n.jsx("span",{className:"contact-label",children:"Address"}),n.jsx("p",{children:"Metro pillar no 116, Building no 28, Near, Vanivilas Rd, next to Nakoda Residency, Vishweshwarapura, Basavanagudi, Bengaluru, Karnataka 560004"})]})]}),n.jsxs("div",{className:"contact-item",style:{animationDelay:"0.4s"},children:[n.jsx("div",{className:"contact-icon",children:n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"})})}),n.jsxs("div",{className:"contact-text",children:[n.jsx("span",{className:"contact-label",children:"Phone"}),n.jsxs("p",{children:["+91 9738906052",n.jsx("br",{}),"+91 8722906052"]})]})]}),n.jsxs("div",{className:"contact-item",style:{animationDelay:"0.6s"},children:[n.jsx("div",{className:"contact-icon",children:n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"})})}),n.jsxs("div",{className:"contact-text",children:[n.jsx("span",{className:"contact-label",children:"Email"}),n.jsx("p",{children:"pavantechnoconstructions.info@gmail.com"})]})]})]})]})]})})}),n.jsx("div",{className:"footer-bottom",children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"footer-bottom-content",children:[n.jsxs("p",{children:["© ",r," All Rights Reserved By"," ",n.jsx("a",{href:"https://gconnectsolutions.com/",target:"_blank",rel:"noopener noreferrer",children:"G Connect Solutions"})]}),n.jsxs("div",{className:"footer-policy",children:[n.jsx("a",{href:"Privacy.html",children:"Privacy Policy"}),n.jsx("span",{className:"separator",children:"|"}),n.jsx("a",{href:"#terms",children:"Terms of Service"})]})]})})})]}),n.jsx("style",{jsx:!0,children:`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
          }
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }

        .footer {
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%);
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .footer-bg-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .bg-circle-1 {
          position: absolute;
          top: 10%;
          right: 10%;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(0, 123, 255, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          animation: float 8s ease-in-out infinite;
        }

        .bg-circle-2 {
          position: absolute;
          bottom: 20%;
          left: 5%;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(183, 156, 92, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite reverse;
        }

        .bg-square-1 {
          position: absolute;
          top: 60%;
          right: 20%;
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, rgba(0, 123, 255, 0.05), rgba(183, 156, 92, 0.05));
          transform: rotate(45deg);
          animation: rotate 15s linear infinite;
        }

        .bg-triangle-1 {
          position: absolute;
          top: 30%;
          left: 15%;
          width: 0;
          height: 0;
          border-left: 40px solid transparent;
          border-right: 40px solid transparent;
          border-bottom: 70px solid rgba(183, 156, 92, 0.08);
          animation: float 10s ease-in-out infinite;
        }

        .footer-top {
          padding: 5rem 0 3rem;
          position: relative;
          z-index: 2;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 2fr;
          gap: 4rem;
          align-items: start;
        }

        .footer-info,
        .footer-links,
        .footer-contact {
          opacity: 0;
        }

        .footer.visible .footer-info {
          animation: fadeInLeft 0.8s forwards 0.2s;
        }

        .footer.visible .footer-links {
          animation: fadeInUp 0.8s forwards 0.4s;
        }

        .footer.visible .footer-contact {
          animation: fadeInRight 0.8s forwards 0.6s;
        }

        .footer-logo {
          margin-bottom: 2rem;
          display: flex;
          justify-content: flex-start;
        }
        
        @media (max-width: 768px) {
          .footer-logo {
            justify-content: center;
          }
        }
        
        @media (max-width: 480px) {
          .footer-logo > div {
            padding: 8px 12px;
          }
          
          .footer-logo h3 {
            font-size: 16px;
          }
          
          .footer-logo p {
            font-size: 12px;
          }
        }

        .footer-logo-container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 140px; /* Smaller container size */
          height: auto;
        }

        .footer-logo-img {
          width: 140px; /* Smaller image size */
          height: auto;
          object-fit: contain;
          border-radius: 8px;
          margin-bottom: 1rem;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
          border: 1px solid rgba(183, 156, 92, 0.3);
          background: rgba(255, 255, 255, 0.1);
          padding: 5px;
        }

        .footer-logo-img:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          border-color: rgba(0, 123, 255, 0.4);
        }

        .logo-container h2 {
          font-size: 2rem;
          font-weight: 900;
          margin: 0;
          background: linear-gradient(135deg, #007bff, #B79C5C);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 1px;
        }

        .logo-container span {
          display: block;
          font-size: 0.9rem;
          color: #B79C5C;
          font-weight: 300;
          letter-spacing: 2px;
          margin-top: 0.2rem;
        }

        .footer-info p {
          margin-bottom: 2rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
        }

        .social-links {
          display: flex;
          gap: 1.5rem; /* Increased gap between icons */
        }

        .social-link {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px; /* Slightly larger icons */
          height: 50px;
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.2), rgba(183, 156, 92, 0.2));
          color: #ffffff;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(183, 156, 92, 0.3);
          position: relative;
          overflow: hidden;
          opacity: 0;
        }

        .footer.visible .social-link {
          animation: fadeInUp 0.6s forwards;
        }

        .social-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #007bff, #B79C5C);
          transition: left 0.3s ease;
          z-index: -1;
        }

        .social-link:hover::before {
          left: 0;
        }

        .social-link:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 15px 30px rgba(0, 123, 255, 0.3);
          border-color: #B79C5C;
        }

        .social-link svg {
          width: 24px; /* Larger SVG icons */
          height: 24px;
        }

        .footer-links h4,
        .footer-contact h4 {
          color: #ffffff;
          margin-bottom: 2rem;
          position: relative;
          font-size: 1.4rem;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .footer-links h4::after,
        .footer-contact h4::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #007bff, #B79C5C);
          border-radius: 2px;
        }

        .footer-links ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 1rem;
          opacity: 0;
        }

        .footer.visible .footer-links li {
          animation: fadeInLeft 0.6s forwards;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          font-size: 1rem;
          position: relative;
          padding: 0.5rem 0;
        }

        .footer-links a::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #007bff, #B79C5C);
          transition: width 0.3s ease;
        }

        .footer-links a:hover::before {
          width: 100%;
        }

        .footer-links a:hover {
          color: #B79C5C;
          transform: translateX(8px);
        }

        .contact-items {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .contact-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          opacity: 0;
        }

        .footer.visible .contact-item {
          animation: fadeInRight 0.6s forwards;
        }

        .contact-icon {
          flex-shrink: 0;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: #ffffff;
          border-radius: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 8px 20px rgba(0, 123, 255, 0.3);
          transition: all 0.3s ease;
        }

        .contact-item:hover .contact-icon {
          background: linear-gradient(135deg, #B79C5C, #8b7355);
          transform: scale(1.1) rotate(5deg);
        }

        .contact-text {
          flex: 1;
        }

        .contact-label {
          display: block;
          color: #B79C5C;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .contact-text p {
          margin: 0;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .footer-bottom {
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.1), rgba(183, 156, 92, 0.1));
          border-top: 1px solid rgba(183, 156, 92, 0.2);
          padding: 2rem 0;
          position: relative;
          z-index: 2;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-bottom p {
          margin: 0;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
        }

        .footer-bottom a {
          color: #B79C5C;
          text-decoration: none;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .footer-bottom a:hover {
          color: #007bff;
          text-decoration: underline;
        }

        .footer-policy {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .footer-policy a {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          border-bottom: 1px solid transparent;
          padding-bottom: 2px;
        }

        .footer-policy a:hover {
          border-color: #B79C5C;
          color: #B79C5C;
        }

        .separator {
          color: rgba(255, 255, 255, 0.3);
          font-size: 0.8rem;
        }

        /* Mobile Responsiveness */
        @media (max-width: 1200px) {
          .footer-grid {
            gap: 3rem;
          }
        }

        @media (max-width: 992px) {
          .footer-grid {
            gap: 3rem;
          }
          
          .footer-logo-img {
            width: 130px;
          }
        }

        @media (max-width: 768px) {
          .footer-top {
            padding: 4rem 0 2rem;
          }

          .container {
            padding: 0 1rem;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .footer-info {
            grid-column: auto;
            text-align: center;
          }

          .social-links {
            justify-content: center;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }

          .contact-item {
            flex-direction: column;
            text-align: center;
            align-items: center;
          }

          .bg-circle-1,
          .bg-circle-2 {
            opacity: 0.5;
          }
        }

        @media (max-width: 576px) {
          .footer-top {
            padding: 3rem 0 1.5rem;
          }

          .logo-container h2 {
            font-size: 1.6rem;
          }

          .footer-links h4,
          .footer-contact h4 {
            font-size: 1.2rem;
          }

          .social-link {
            width: 45px;
            height: 45px;
          }

          .contact-icon {
            width: 45px;
            height: 45px;
          }

          .bg-square-1,
          .bg-triangle-1 {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 0.5rem;
          }

          .footer-policy {
            flex-direction: column;
            gap: 0.5rem;
          }

          .separator {
            display: none;
          }
        }

        .footer-branding {
          margin-bottom: 1.5rem;
        }

        .footer-logo {
          display: inline-block;
          transition: all 0.3s ease;
        }

        .footer-logo:hover img {
          transform: translateY(-3px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
        }

        .footer-brand-container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: auto;
          height: auto;
        }

        .footer-brand-container {
          position: relative;
          overflow: hidden;
        }
        
        .footer-brand-container:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2) !important;
        }
        
        .footer-brand-container:hover .footer-brand-img {
          transform: scale(1.05);
          filter: contrast(1.15) brightness(1.1) !important;
        }
        
        .footer-brand-container::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(183, 156, 92, 0.2) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        
        .footer-brand-container:hover::after {
          opacity: 1;
        }

        /* Media queries for responsive design */
        @media (max-width: 768px) {
          .footer-branding {
            justify-content: center;
            margin-bottom: 1.5rem;
          }
          
          .footer-brand-container {
            align-items: center;
            transform: scale(1.1) !important;
          }
          
          .footer-brand-img {
            width: 120px !important;
          }
        }
      `})]})},N5=({closePopup:r})=>{const[o,u]=y.useState({name:"",email:"",phone:"",service:"",message:""});y.useEffect(()=>(document.body.classList.add("no-scroll"),()=>{document.body.classList.remove("no-scroll")}),[]);const c=f=>{const{name:h,value:x}=f.target;u(b=>({...b,[h]:x}))},d=f=>{if(f.preventDefault(),!o.name||!o.email||!o.phone||!o.service||!o.message){alert("Please fill in all required fields.");return}alert("Form submitted successfully! We will contact you soon."),r()};return n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"popup-overlay",onClick:r,children:n.jsxs("div",{className:"popup-container",onClick:f=>f.stopPropagation(),children:[n.jsx("button",{className:"close-popup",onClick:r,children:"×"}),n.jsxs("div",{className:"popup-header",children:[n.jsx("div",{className:"header-icon",children:n.jsx("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",children:n.jsx("path",{d:"M3 8L12 13L21 8M3 8V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V8M3 8C3 7.44772 3.44772 7 4 7H20C20.5523 7 21 7.44772 21 8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),n.jsx("h3",{children:"Get Your Quote"}),n.jsx("p",{children:"Fill out the form below and we'll get back to you within 24 hours"})]}),n.jsxs("div",{className:"popup-form",children:[n.jsxs("div",{className:"form-grid",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"popup-name",children:"Full Name *"}),n.jsx("input",{type:"text",name:"name",id:"popup-name",className:"form-control",placeholder:"Enter your full name",value:o.name,onChange:c,required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"popup-email",children:"Email Address *"}),n.jsx("input",{type:"email",name:"email",id:"popup-email",className:"form-control",placeholder:"Enter your email",value:o.email,onChange:c,required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"popup-phone",children:"Phone Number *"}),n.jsx("input",{type:"tel",name:"phone",id:"popup-phone",className:"form-control",placeholder:"Enter your phone number",value:o.phone,onChange:c,required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"popup-service",children:"Package *"}),n.jsxs("select",{name:"service",id:"popup-service",className:"form-control",value:o.service,onChange:c,required:!0,children:[n.jsx("option",{value:"",disabled:!0,children:"Select a package"}),n.jsx("option",{value:"Basic Package",children:"Basic Package - RS.1600/- + GST"}),n.jsx("option",{value:"Premium Package",children:"Premium Package - RS.1800/- + GST"}),n.jsx("option",{value:"Luxury Package",children:"Luxury Package - RS.2150/- + GST"})]})]})]}),n.jsxs("div",{className:"form-group full-width",children:[n.jsx("label",{htmlFor:"popup-message",children:"Project Details *"}),n.jsx("textarea",{name:"message",id:"popup-message",rows:"4",className:"form-control",placeholder:"Tell us about your construction project...",value:o.message,onChange:c,required:!0})]}),n.jsxs("div",{className:"form-actions",children:[n.jsx("button",{type:"button",className:"btn btn-secondary",onClick:r,children:"Cancel"}),n.jsx("button",{type:"button",className:"btn btn-primary",onClick:d,children:"Submit Request"})]})]})]})}),n.jsx("style",{jsx:!0,global:!0,children:`
        .no-scroll {
          overflow: hidden !important;
        }
      `}),n.jsx("style",{jsx:!0,children:`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .popup-container {
          background: #ffffff;
          border-radius: 16px;
          max-width: 600px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          animation: slideIn 0.4s ease;
        }

        .close-popup {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          border-radius: 50%;
          font-size: 24px;
          font-weight: 300;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          z-index: 1;
        }

        .close-popup:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }

        .popup-header {
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: white;
          padding: 40px 30px 30px;
          text-align: center;
          border-radius: 16px 16px 0 0;
        }

        .header-icon {
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          color: white;
        }

        .popup-header h3 {
          font-size: 1.8rem;
          font-weight: 700;
          margin: 0 0 10px 0;
          color: white;
        }

        .popup-header p {
          margin: 0;
          opacity: 0.9;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .popup-form {
          padding: 30px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        .form-group label {
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 8px;
          font-size: 0.9rem;
        }

        .form-control {
          padding: 12px 16px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 0.95rem;
          transition: all 0.2s ease;
          background: #ffffff;
          color: #2d3748;
          font-family: inherit;
        }

        .form-control:focus {
          outline: none;
          border-color: #007bff;
          box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
          transform: translateY(-1px);
        }

        .form-control::placeholder {
          color: #a0aec0;
        }

        select.form-control {
          cursor: pointer;
        }

        textarea.form-control {
          resize: vertical;
          min-height: 100px;
          font-family: inherit;
        }

        .form-actions {
          display: flex;
          gap: 15px;
          justify-content: flex-end;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e2e8f0;
        }

        .btn {
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          min-width: 120px;
          font-family: inherit;
        }

        .btn-primary {
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: white;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 123, 255, 0.4);
        }

        .btn-secondary {
          background: #6c757d;
          color: white;
        }

        .btn-secondary:hover {
          background: #5a6268;
          transform: translateY(-2px);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .popup-overlay {
            padding: 10px;
          }

          .popup-container {
            max-height: 95vh;
            border-radius: 12px;
          }

          .popup-header {
            padding: 30px 20px 25px;
            border-radius: 12px 12px 0 0;
          }

          .popup-header h3 {
            font-size: 1.5rem;
          }

          .popup-form {
            padding: 20px;
          }

          .form-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .close-popup {
            top: 15px;
            right: 15px;
            width: 35px;
            height: 35px;
            font-size: 20px;
          }

          .form-actions {
            flex-direction: column-reverse;
          }

          .btn {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .popup-overlay {
            align-items: flex-start;
            padding: 5px;
          }

          .popup-container {
            margin-top: 10px;
            border-radius: 8px;
          }

          .popup-header {
            padding: 25px 15px 20px;
            border-radius: 8px 8px 0 0;
          }

          .popup-header h3 {
            font-size: 1.3rem;
          }

          .popup-header p {
            font-size: 0.85rem;
          }

          .popup-form {
            padding: 15px;
          }

          .form-control {
            padding: 10px 12px;
            font-size: 0.9rem;
          }

          .header-icon {
            width: 50px;
            height: 50px;
            margin-bottom: 15px;
          }
        }

        /* Scrollbar Styles */
        .popup-container::-webkit-scrollbar {
          width: 6px;
        }

        .popup-container::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }

        .popup-container::-webkit-scrollbar-thumb {
          background: #007bff;
          border-radius: 3px;
        }

        .popup-container::-webkit-scrollbar-thumb:hover {
          background: #0056b3;
        }
      `})]})},E5=()=>{const[r,o]=y.useState(""),[u,c]=y.useState(""),[d,f]=y.useState(!1),[h,x]=y.useState("");y.useEffect(()=>{localStorage.getItem("adminToken")&&f(!0)},[]);const b=p=>{p.preventDefault(),r==="admin"&&u==="pavantechno2024"?(localStorage.setItem("adminToken","admin-session-token"),f(!0),x("")):x("Invalid username or password")};return d?n.jsx(qp,{to:"/admin-dashboard"}):n.jsx("div",{className:"admin-login-container",children:n.jsxs("div",{className:"admin-login-card",children:[n.jsx("h2",{children:"Admin Login"}),h&&n.jsx("div",{className:"error-message",children:h}),n.jsxs("form",{onSubmit:b,children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"username",children:"Username"}),n.jsx("input",{type:"text",id:"username",value:r,onChange:p=>o(p.target.value),required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"password",children:"Password"}),n.jsx("input",{type:"password",id:"password",value:u,onChange:p=>c(p.target.value),required:!0})]}),n.jsx("button",{type:"submit",className:"btn btn-primary",children:"Login"})]})]})})},A5=()=>{const[r,o]=y.useState(!0),[u,c]=y.useState("overview"),[d,f]=y.useState(!1),[h,x]=y.useState(!1),[b,p]=y.useState(!1),[v,z]=y.useState("add"),[S,M]=y.useState(null),[k,P]=y.useState([]),[R,Y]=y.useState([]),[w,I]=y.useState({username:"",currentPassword:"",newPassword:"",confirmPassword:""}),[J,K]=y.useState(""),[he,B]=y.useState({text:"",type:""}),[se,D]=y.useState({text:"",type:""}),[te,Z]=y.useState({id:"",title:"",type:"residential",description:"",year:new Date().getFullYear().toString(),location:"",image:null,imagePreview:null}),[oe,we]=y.useState(null),[le,ce]=y.useState(null),[E,H]=y.useState(null);y.useEffect(()=>{localStorage.getItem("adminToken")||o(!1),f(!0),ce(null),H(null),fetch("http://localhost:3001/api/admin-credentials").then(be=>be.json()).then(be=>{I(W=>({...W,username:be.username||""})),fetch("http://localhost:3001/adminCredentials.json").then(W=>W.json()).then(W=>K(W.password))}),fetch("http://localhost:3001/api/gallery").then(be=>be.json()).then(be=>{P(be),f(!1)}).catch(be=>{ce("Failed to fetch gallery data"),f(!1)}),fetch("http://localhost:3001/api/data").then(be=>{if(!be.ok)throw new Error("Failed to fetch contact data");return be.json()}).then(be=>{Y(be.data||[]),f(!1)}).catch(be=>{H("Error loading contact data: "+be.message),Y([]),f(!1)})},[]);const re=()=>{localStorage.removeItem("adminToken"),o(!1)},ge=F=>{const{name:be,value:W}=F.target;I(Se=>({...Se,[be]:W}))},C=async F=>{if(F.preventDefault(),!w.username||w.username.length<4){B({text:"Username must be at least 4 characters",type:"error"});return}try{if(!(await fetch("http://localhost:3001/api/admin-credentials",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:w.username,password:J})})).ok)throw new Error("Failed to update username");B({text:"Username updated successfully!",type:"success"})}catch(be){B({text:"Failed to update username: "+be.message,type:"error"})}setTimeout(()=>{B({text:"",type:""})},3e3)},q=async F=>{if(F.preventDefault(),!w.currentPassword||!w.newPassword||!w.confirmPassword){B({text:"Please fill in all password fields",type:"error"});return}if(w.newPassword.length<8){B({text:"New password must be at least 8 characters",type:"error"});return}if(w.newPassword!==w.confirmPassword){B({text:"New passwords do not match",type:"error"});return}if(w.currentPassword!==J){B({text:"Current password is incorrect",type:"error"});return}try{if(!(await fetch("http://localhost:3001/api/admin-credentials",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:w.username,password:w.newPassword})})).ok)throw new Error("Failed to update password");B({text:"Password updated successfully!",type:"success"}),K(w.newPassword),I(W=>({...W,currentPassword:"",newPassword:"",confirmPassword:""}))}catch(be){B({text:"Failed to update password: "+be.message,type:"error"})}setTimeout(()=>{B({text:"",type:""})},3e3)},V=F=>{const be=F.target.files[0];if(be){const W=new FileReader;W.onloadend=()=>{Z(Se=>({...Se,image:be,imagePreview:W.result}))},W.readAsDataURL(be)}},$=()=>{z("add"),Z({id:`P-${new Date().getFullYear()}-${Math.floor(Math.random()*100)}`,title:"",type:"residential",description:"",year:new Date().getFullYear().toString(),location:"",image:null,imagePreview:null}),D({text:"",type:""}),p(!0)},A=F=>{z("edit"),Z({...F,imagePreview:F.image}),M(F),D({text:"",type:""}),p(!0)},ie=async F=>{if(F.preventDefault(),!te.title||!te.description){D({text:"Please fill in all required fields",type:"error"});return}try{let be;if(v==="add"){const ue=new FormData;if(ue.append("title",te.title),ue.append("description",te.description),te.image&&ue.append("image",te.image),be=await fetch("http://localhost:3001/api/gallery",{method:"POST",body:ue}),!be.ok)throw new Error("Failed to upload project");D({text:"Project added successfully!",type:"success"})}else{if(be=await fetch(`http://localhost:3001/api/gallery/${S.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:te.title,description:te.description})}),!be.ok)throw new Error("Failed to update project");D({text:"Project updated successfully!",type:"success"})}const Se=await(await fetch("http://localhost:3001/api/gallery")).json();P(Se),p(!1)}catch(be){D({text:be.message,type:"error"})}setTimeout(()=>D({text:"",type:""}),2e3)},ne=(F,be)=>{Y(W=>W.map(Se=>Se.id===F?{...Se,status:be}:Se))},Ce=F=>{window.confirm("Are you sure you want to delete this contact inquiry?")&&Y(be=>be.filter(W=>W.id!==F))};if(!r)return n.jsx(qp,{to:"/admin"});const me={padding:"12px 16px",borderBottom:"2px solid #eee",background:"#f5f7fa",color:"#222",fontWeight:600,textAlign:"left",fontSize:"1em"},ae={padding:"10px 14px",fontSize:"0.98em",color:"#333",background:"#fff",verticalAlign:"top"},xe={marginRight:8,padding:"4px 10px",border:"none",borderRadius:"6px",background:"#e9ecef",color:"#23408e",cursor:"pointer",fontSize:"0.97em",fontWeight:500},De=oe?R.filter(F=>F.status===oe):R,Oe={projects:{total:k.length,residential:k.filter(F=>F.type==="residential").length,commercial:k.filter(F=>F.type==="commercial").length,interior:k.filter(F=>F.type==="interior").length,inProgress:12},contacts:{total:R.length,unread:R.filter(F=>F.status==="unread").length,read:R.filter(F=>F.status==="read").length,replied:R.filter(F=>F.status==="replied").length},revenue:{monthly:"₹32,50,000",yearly:"₹3,85,00,000"},recentProjects:k.slice(0,4),recentContacts:R.filter(F=>F.status==="unread").slice(0,3)};return n.jsxs("div",{className:"admin-dashboard-container",children:[n.jsxs("div",{className:"admin-sidebar",children:[n.jsxs("div",{className:"admin-brand",children:[n.jsx("h2",{children:"Pavan Techno"}),n.jsx("p",{children:"Admin Panel"})]}),n.jsx("nav",{className:"admin-nav",children:n.jsxs("ul",{children:[n.jsxs("li",{className:u==="overview"?"active":"",onClick:()=>c("overview"),children:[n.jsx(Sp,{})," ",n.jsx("span",{children:"Overview"})]}),n.jsxs("li",{className:u==="projects"?"active":"",onClick:()=>c("projects"),children:[n.jsx(du,{})," ",n.jsx("span",{children:"Projects"})]}),n.jsxs("li",{className:u==="contacts"?"active":"",onClick:()=>c("contacts"),children:[n.jsx(Pc,{})," ",n.jsx("span",{children:"Contact Details"}),Oe.contacts.unread>1&&n.jsx("span",{className:"notification-badge",children:Oe.contacts.unread})]})]})}),n.jsxs("div",{className:"admin-logout",onClick:re,children:[n.jsx(Ep,{})," ",n.jsx("span",{children:"Logout"})]})]}),n.jsxs("div",{className:"admin-main",children:[n.jsxs("div",{className:"admin-header",children:[n.jsx("h1",{children:u.charAt(0).toUpperCase()+u.slice(1)}),n.jsxs("div",{className:"admin-user",onClick:()=>x(!0),children:[n.jsx("span",{children:w.username}),n.jsx("div",{className:"admin-avatar",children:w.username.charAt(0).toUpperCase()})]})]}),n.jsx("div",{className:"admin-content",children:d?n.jsxs("div",{className:"admin-loading",children:[n.jsx("div",{className:"spinner"}),n.jsx("p",{children:"Loading dashboard data..."})]}):n.jsxs(n.Fragment,{children:[u==="overview"&&n.jsxs("div",{className:"overview-content",children:[n.jsxs("div",{className:"stats-grid",children:[n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-icon projects-icon",children:n.jsx(du,{})}),n.jsxs("div",{className:"stat-details",children:[n.jsx("h3",{children:"Total Projects"}),n.jsx("p",{className:"stat-value",children:Oe.projects.total}),n.jsxs("p",{className:"stat-info",children:[n.jsx("span",{className:"highlight",children:Oe.projects.inProgress})," in progress"]})]})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-icon revenue-icon",children:n.jsx(Sp,{})}),n.jsxs("div",{className:"stat-details",children:[n.jsx("h3",{children:"Monthly Revenue"}),n.jsx("p",{className:"stat-value",children:Oe.revenue.monthly}),n.jsx("p",{className:"stat-info",children:n.jsxs("span",{className:"highlight",children:["Yearly: ",Oe.revenue.yearly]})})]})]}),n.jsxs("div",{className:"stat-card",children:[n.jsx("div",{className:"stat-icon contacts-icon",children:n.jsx(Pc,{})}),n.jsxs("div",{className:"stat-details",children:[n.jsx("h3",{children:"Contact Inquiries"}),n.jsx("p",{className:"stat-value",children:Oe.contacts.total}),n.jsxs("p",{className:"stat-info",children:[n.jsx("span",{className:"highlight",children:Oe.contacts.unread})," unread messages"]})]})]})]}),n.jsxs("div",{className:"admin-panel",children:[n.jsxs("div",{className:"panel-header",children:[n.jsx("h3",{children:"Recent Projects"}),n.jsx("button",{className:"view-all-btn",onClick:()=>c("projects"),children:"View All"})]}),n.jsx("div",{className:"panel-content",children:n.jsxs("table",{className:"admin-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"ID"}),n.jsx("th",{children:"Project Name"}),n.jsx("th",{children:"Type"}),n.jsx("th",{children:"Location"}),n.jsx("th",{children:"Year"}),n.jsx("th",{children:"Actions"})]})}),n.jsx("tbody",{children:Oe.recentProjects.map(F=>n.jsxs("tr",{children:[n.jsx("td",{children:F.id}),n.jsx("td",{children:F.title}),n.jsx("td",{children:F.type.charAt(0).toUpperCase()+F.type.slice(1)}),n.jsx("td",{children:F.location}),n.jsx("td",{children:F.year}),n.jsx("td",{children:n.jsxs("div",{className:"action-buttons",children:[n.jsx("button",{className:"action-btn edit-btn",onClick:()=>A(F),title:"Edit Project",children:n.jsx(Cp,{})}),n.jsx("button",{className:"action-btn delete-btn",onClick:()=>handleDeleteProject(F.id),title:"Delete Project",children:n.jsx(Ap,{})})]})})]},F.id))})]})})]}),Oe.contacts.unread>0&&n.jsxs("div",{className:"admin-panel",children:[n.jsxs("div",{className:"panel-header",children:[n.jsx("h3",{children:"Unread Messages"}),n.jsx("button",{className:"view-all-btn",onClick:()=>c("contacts"),children:"View All"})]}),n.jsx("div",{className:"panel-content",children:n.jsx("div",{className:"contact-cards",children:Oe.recentContacts.map(F=>n.jsxs("div",{className:"contact-card",children:[n.jsxs("div",{className:"contact-info",children:[n.jsx("h4",{children:F.name}),n.jsx("p",{children:F.email}),n.jsx("p",{children:F.phone})]}),n.jsxs("div",{className:"contact-message",children:[n.jsx("h5",{children:F.subject}),n.jsx("p",{children:F.message})]}),n.jsxs("div",{className:"contact-actions",children:[n.jsx("button",{className:"btn btn-primary",onClick:()=>ne(F.id,"read"),children:"Mark as Read"}),n.jsx("button",{className:"btn btn-danger",onClick:()=>Ce(F.id),children:"Delete"})]})]},F.id))})})]})]}),u==="projects"&&n.jsxs("div",{className:"projects-content",children:[le&&n.jsx("div",{className:"error-message",style:{color:"red",margin:"1rem 0"},children:le}),n.jsxs("div",{className:"projects-header",children:[n.jsx("h2",{children:"Project Management"}),n.jsxs("button",{className:"btn btn-primary add-btn",onClick:$,children:[n.jsx(j5,{})," Add New Project"]})]}),b&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"modal-card",children:[n.jsx("h3",{children:v==="add"?"Add New Project":"Edit Project"}),n.jsxs("form",{onSubmit:ie,style:{display:"flex",flexDirection:"column",gap:12},children:[n.jsx("input",{name:"title",value:te.title,onChange:F=>Z({...te,title:F.target.value}),placeholder:"Title",required:!0}),n.jsx("textarea",{name:"description",value:te.description,onChange:F=>Z({...te,description:F.target.value}),placeholder:"Description",required:!0}),n.jsx("input",{name:"type",value:te.type,onChange:F=>Z({...te,type:F.target.value}),placeholder:"Type (residential, commercial, etc.)"}),n.jsx("input",{name:"year",value:te.year,onChange:F=>Z({...te,year:F.target.value}),placeholder:"Year"}),n.jsx("input",{name:"location",value:te.location,onChange:F=>Z({...te,location:F.target.value}),placeholder:"Location"}),n.jsx("input",{type:"file",accept:"image/*",onChange:V}),te.imagePreview&&n.jsx("img",{src:te.imagePreview,alt:"Preview",style:{width:120,margin:"0 auto"}}),se.text&&n.jsx("div",{style:{color:se.type==="error"?"red":"green",marginBottom:8},children:se.text}),n.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[n.jsx("button",{type:"button",onClick:()=>p(!1),style:{background:"#eee",color:"#333"},children:"Cancel"}),n.jsx("button",{type:"submit",className:"btn btn-primary",children:v==="add"?"Add Project":"Save Changes"})]})]})]})}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"18px 0 12px 0"},children:[n.jsx("h3",{style:{margin:0},children:"Current Gallery Projects"}),n.jsx("button",{className:"btn btn-secondary",onClick:()=>{f(!0),fetch("http://localhost:3001/api/gallery").then(F=>F.json()).then(F=>{P(F),f(!1)}).catch(()=>f(!1))},style:{padding:"5px 14px",fontSize:15},children:"Refresh"})]}),n.jsx("div",{className:"projects-grid",children:k.map(F=>n.jsxs("div",{className:"project-card",children:[n.jsxs("div",{className:"project-image",children:[n.jsx("img",{src:F.image,alt:F.title}),n.jsxs("div",{className:"project-actions",children:[n.jsx("button",{className:"project-action-btn edit-btn",onClick:()=>A(F),title:"Edit Project",children:n.jsx(Cp,{})}),n.jsx("button",{className:"project-action-btn delete-btn",onClick:()=>handleDeleteProject(F.id||F._id),title:"Delete Project",children:n.jsx(Ap,{})})]})]}),n.jsxs("div",{className:"project-details",children:[n.jsx("h3",{children:F.title}),n.jsxs("div",{className:"project-meta",children:[n.jsx("span",{className:"project-type",children:F.type&&F.type.charAt(0).toUpperCase()+F.type.slice(1)}),n.jsx("span",{className:"project-year",children:F.year})]}),n.jsx("p",{className:"project-location",children:F.location}),n.jsx("p",{className:"project-description",children:F.description})]})]},F.id||F._id))})]}),u==="contacts"&&n.jsx("div",{className:"contacts-content",children:E?n.jsx("div",{className:"error-message",style:{color:"red",margin:"1rem 0"},children:E}):n.jsxs(Gt.Fragment,{children:[n.jsxs("div",{className:"contacts-header",children:[n.jsxs("div",{className:"header-content",children:[n.jsx("h2",{children:"Contact Details"}),n.jsx("p",{className:"section-description",children:"View and manage all user-submitted contact inquiries."})]}),n.jsx("div",{className:"header-actions"})]}),n.jsx("div",{className:"contacts-table-container",style:{overflowX:"auto",marginTop:"2rem"},children:d?n.jsxs("div",{style:{textAlign:"center",padding:"2rem"},children:[n.jsx("div",{className:"spinner"}),n.jsx("p",{children:"Loading contact data..."})]}):De.length===0?n.jsxs("div",{className:"empty-state",style:{textAlign:"center",margin:"2rem 0"},children:[n.jsx("div",{className:"empty-icon",style:{fontSize:"2rem",color:"#888"},children:n.jsx(Pc,{})}),n.jsx("h3",{children:"No inquiries found"}),n.jsx("p",{children:"There are no contact inquiries matching your current filter."})]}):n.jsxs("table",{className:"contacts-table",style:{width:"100%",borderCollapse:"collapse",background:"#fff",borderRadius:"10px",overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,0.07)"},children:[n.jsx("thead",{style:{background:"#f5f7fa"},children:n.jsxs("tr",{children:[n.jsx("th",{style:me,children:"#"}),n.jsx("th",{style:me,children:"Name"}),n.jsx("th",{style:me,children:"Email"}),n.jsx("th",{style:me,children:"Phone"}),n.jsx("th",{style:me,children:"Package"}),n.jsx("th",{style:me,children:"Message"}),n.jsx("th",{style:me,children:"Date"}),n.jsx("th",{style:me,children:"Status"}),n.jsx("th",{style:me,children:"Actions"})]})}),n.jsx("tbody",{children:De.map((F,be)=>n.jsxs("tr",{style:{borderBottom:"1px solid #eee"},children:[n.jsx("td",{style:ae,children:be+1}),n.jsx("td",{style:ae,children:F.name}),n.jsx("td",{style:ae,children:F.email}),n.jsx("td",{style:ae,children:F.phone}),n.jsx("td",{style:ae,children:F.package}),n.jsx("td",{style:{...ae,maxWidth:250,whiteSpace:"pre-line",wordBreak:"break-word"},children:F.message}),n.jsx("td",{style:ae,children:F.date||"-"}),n.jsx("td",{style:ae,children:n.jsx("span",{className:`status-badge ${F.status}`,style:{padding:"4px 10px",borderRadius:"12px",background:F.status==="unread"?"#ffe3e3":F.status==="replied"?"#e3ffe8":"#e3eaff",color:F.status==="unread"?"#d7263d":F.status==="replied"?"#218838":"#23408e",fontWeight:500,fontSize:"0.95em"},children:F.status?F.status.charAt(0).toUpperCase()+F.status.slice(1):"-"})}),n.jsxs("td",{style:ae,children:[F.status==="unread"&&n.jsx("button",{className:"action-btn read-btn",style:xe,onClick:()=>ne(F.id,"read"),title:"Mark as Read",children:"Mark as Read"}),F.status!=="replied"&&n.jsx("button",{className:"action-btn reply-btn",style:xe,onClick:()=>ne(F.id,"replied"),title:"Mark as Replied",children:"Mark as Replied"}),n.jsx("button",{className:"action-btn delete-btn",style:xe,onClick:()=>Ce(F.id),title:"Delete Inquiry",children:"Delete"})]})]},F.id||be))})]})})]})})]})})]}),h&&n.jsx("div",{className:"modal-overlay",children:n.jsxs("div",{className:"profile-modal",children:[n.jsxs("div",{className:"profile-modal-header",children:[n.jsx("h2",{children:"Admin Profile"}),n.jsx("button",{className:"close-btn",onClick:()=>x(!1),children:n.jsx(S5,{})})]}),he.text&&n.jsx("div",{className:`profile-message ${he.type}`,children:he.text}),n.jsxs("div",{className:"profile-content",children:[n.jsxs("div",{className:"profile-section",children:[n.jsxs("h3",{children:[n.jsx(C5,{})," Update Username"]}),n.jsxs("form",{onSubmit:C,children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"username",children:"Username"}),n.jsx("input",{type:"text",id:"username",name:"username",value:w.username,onChange:ge,placeholder:"Enter username",required:!0,autoComplete:"off"})]}),n.jsxs("button",{type:"submit",className:"btn btn-primary",children:[n.jsx(Np,{})," Update Username"]})]})]}),n.jsxs("div",{className:"profile-section",children:[n.jsxs("h3",{children:[n.jsx(w5,{})," Change Password"]}),n.jsxs("form",{onSubmit:q,children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"currentPassword",children:"Current Password"}),n.jsx("input",{type:"password",id:"currentPassword",name:"currentPassword",value:w.currentPassword,onChange:ge,placeholder:"Enter current password",required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"newPassword",children:"New Password"}),n.jsx("input",{type:"password",id:"newPassword",name:"newPassword",value:w.newPassword,onChange:ge,placeholder:"Enter new password",required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"confirmPassword",children:"Confirm New Password"}),n.jsx("input",{type:"password",id:"confirmPassword",name:"confirmPassword",value:w.confirmPassword,onChange:ge,placeholder:"Confirm new password",required:!0})]}),n.jsxs("button",{type:"submit",className:"btn btn-primary",children:[n.jsx(Np,{})," Update Password"]})]})]}),n.jsx("div",{className:"profile-footer",children:n.jsxs("button",{className:"btn btn-danger",onClick:re,children:[n.jsx(Ep,{})," Logout"]})})]})]})}),n.jsx("style",{jsx:!0,children:`
        /* Reset and base styles */
        :root {
          --primary-color: #007bff;
          --primary-hover: #0056b3;
          --secondary-color: #6c757d;
          --success-color: #28a745;
          --danger-color: #dc3545;
          --warning-color: #ffc107;
          --info-color: #17a2b8;
          --light-color: #f8f9fa;
          --dark-color: #343a40;
          --border-color: #dee2e6;
          --border-radius: 8px;
          --box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          --transition: all 0.3s ease;
        }

        /* Contact Header and Filters styles */
        .contacts-content {
          padding: 1.5rem;
          background-color: #f8f9fa;
          border-radius: 12px;
          height: 100%;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }
        
        .contacts-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #e9ecef;
        }
        
        .header-content h2 {
          margin: 0 0 0.75rem 0;
          color: #2c3e50;
          font-weight: 700;
          font-size: 2rem;
          position: relative;
        }
        
        .header-content h2:after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, var(--primary-color), #4dabf7);
          border-radius: 2px;
        }
        
        .section-description {
          color: #6c757d;
          margin: 1rem 0 0;
          font-size: 1.1rem;
          line-height: 1.5;
          max-width: 600px;
        }
        
        .header-actions {
          display: flex;
          align-items: center;
        }
        
        .search-container {
          position: relative;
          width: 300px;
        }
        
        .search-input {
          width: 100%;
          padding: 0.8rem 2.5rem 0.8rem 1.2rem;
          border: 1px solid #ced4da;
          border-radius: 8px;
          font-size: 0.95rem;
          transition: all 0.3s;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        
        .search-input:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
        }
        
        .search-btn {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          border: none;
          color: #6c757d;
          cursor: pointer;
          font-size: 1rem;
          padding: 0.25rem;
          border-radius: 4px;
          transition: var(--transition);
        }

        .search-btn:hover {
          color: var(--primary-color);
          background-color: rgba(0, 123, 255, 0.1);
        }
        
        /* Enhanced Filter Styles */
        .contacts-filters-container {
          margin-bottom: 2rem;
          background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
          border-radius: 16px;
          padding: 1.5rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.05);
          position: relative;
          overflow: hidden;
        }

        .contacts-filters-container:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--primary-color), #4dabf7, #28a745, #ffc107);
          border-radius: 16px 16px 0 0;
        }
        
        .filters-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: #495057;
          margin-bottom: 1.25rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .filters-title:before {
          content: '🎯';
          font-size: 1rem;
        }
        
        .contacts-filters {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          align-items: center;
        }
        
        .filter-btn {
          background: #ffffff;
          border: 2px solid #e9ecef;
          padding: 0.8rem 1.5rem;
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #495057;
          min-width: 130px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          position: relative;
          overflow: hidden;
          text-decoration: none;
          user-select: none;
        }

        .filter-btn:before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }
        
        .filter-btn:hover {
          background: #f8f9fa;
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          border-color: #ced4da;
        }

        .filter-btn:hover:before {
          left: 100%;
        }
        
        .filter-btn.active {
          background: linear-gradient(135deg, var(--primary-color) 0%, #0056b3 100%);
          color: white;
          border-color: var(--primary-color);
          box-shadow: 0 6px 20px rgba(0,123,255,0.4);
          transform: translateY(-2px);
        }
        
        .filter-btn.active:hover {
          background: linear-gradient(135deg, #0056b3 0%, #004085 100%);
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 25px rgba(0,123,255,0.5);
        }
        
        .filter-icon {
          display: inline-block;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          flex-shrink: 0;
          position: relative;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .filter-icon.all {
          background: conic-gradient(from 0deg, #007bff 0deg 90deg, #6c757d 90deg 180deg, #28a745 180deg 270deg, #ffc107 270deg 360deg);
          animation: rotate 3s linear infinite;
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .filter-btn.active .filter-icon.all {
          animation-play-state: paused;
        }
        
        .filter-icon.unread {
          background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
          position: relative;
        }

        .filter-icon.unread:after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .filter-icon.read {
          background: linear-gradient(135deg, #6c757d 0%, #495057 100%);
          position: relative;
        }

        .filter-icon.read:after {
          content: '✓';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 8px;
          font-weight: bold;
        }
        
        .filter-icon.replied {
          background: linear-gradient(135deg, #28a745 0%, #1e7e34 100%);
          position: relative;
        }

        .filter-icon.replied:after {
          content: '↵';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 8px;
          font-weight: bold;

      {activeTab === 'projects' && (
        <div>
          <h2>Projects</h2>
          <form onSubmit={handleProjectSubmit}>
            <input type="text" value={projectName} onChange={(event) => setProjectName(event.target.value)} placeholder="Project Name" />
            <textarea value={projectDescription} onChange={(event) => setProjectDescription(event.target.value)} placeholder="Project Description" />
            <input type="file" onChange={handleImageChange} />
            <button type="submit" disabled={loading}>Create Project</button>
          </form>
          <ul>
            {projects.map((project) => (
              <li key={project._id}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <img src={project.image} alt={project.name} />
                <button onClick={() => handleProjectDelete(project._id)}>Delete</button>
                <button onClick={() => handleProjectEdit(project._id, projectName, projectDescription)}>Edit</button>
              </li>
            ))}
          </ul>
        </div>
      )}
        /* Pulse animation for unread count */
        .filter-btn[class*="unread"].active .count-badge {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(255,255,255,0.7); }
          70% { box-shadow: 0 0 0 10px rgba(255,255,255,0); }
          100% { box-shadow: 0 0 0 0 rgba(255,255,255,0); }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .contacts-header {
            flex-direction: column;
            gap: 1.5rem;
          }
          
          .header-actions {
            width: 100%;
          }
          
          .search-container {
            width: 100%;
          }

          .contacts-filters-container {
            padding: 1rem;
          }
          
          .contacts-filters {
            justify-content: center;
            gap: 0.75rem;
          }
          
          .filter-btn {
            padding: 0.7rem 1.2rem;
            font-size: 0.9rem;
            min-width: 110px;
          }
        }
        
        @media (max-width: 576px) {
          .contacts-filters {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .filter-btn {
            width: 100%;
            justify-content: space-between;
            min-width: unset;
          }

          .filter-label {
            flex: 1;
            text-align: left;
            margin-left: 0.5rem;
          }
        }

        /* Additional enhancements */
        .filter-btn:focus {
          outline: 2px solid var(--primary-color);
          outline-offset: 2px;
        }

        .filter-btn:active {
          transform: translateY(-1px) scale(0.98);
          transition: all 0.1s;
        }

        /* Loading state for filters */
        .filter-btn.loading {
          opacity: 0.7;
          cursor: not-allowed;
          pointer-events: none;
        }

        .filter-btn.loading .count-badge {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .contacts-filters-container {
            background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
            border-color: #4a5568;
          }

          .filter-btn {
            background: #2d3748;
            border-color: #4a5568;
            color: #e2e8f0;
          }

          .filter-btn:hover {
            background: #4a5568;
          }

          .count-badge {
            background: rgba(255,255,255,0.1);
            border-color: rgba(255,255,255,0.2);
          }
        }
      `})]})},T5="/pavan-techno-constructions/assets/s-1-D80USzrT.jpg",k5="/pavan-techno-constructions/assets/arti-D1dJ_XDz.jpg",z5="/pavan-techno-constructions/assets/rs-BDWbg-Wg.jpg",R5="/pavan-techno-constructions/assets/ld-BqerUQ4p.jpg",M5="/pavan-techno-constructions/assets/interior-BlveVF9V.webp",D5="/pavan-techno-constructions/assets/cs1-T7T-fMyg.png",O5=({openPopup:r})=>{const[o,u]=y.useState(!1),[c,d]=y.useState(null),[f,h]=y.useState("workshop"),[x,b]=y.useState("overview"),p=y.useRef(null);y.useEffect(()=>{const S=new IntersectionObserver(M=>{M.forEach(k=>{k.isIntersecting&&u(!0)})},{threshold:.1});return p.current&&S.observe(p.current),()=>{p.current&&S.unobserve(p.current)}},[]);const v=[{id:1,title:"Building Construction",icon:"🏗️",image:T5,description:"From start to end, whether it's residential or commercial project, we deliver quality construction tailored to your needs, ensuring durability and elegance.",features:["Residential Projects","Commercial Buildings","Quality Materials","Durable Construction"],price:"Starting from ₹1,600/sq ft",category:"structural"},{id:2,title:"Architectural Services",icon:"📐",image:k5,description:"We believe in constantly researching and developing ways to make the entire construction process more efficient and quality driven.",features:["Conceptual Designs","Floor Planning","Site Plans","Dream Home Consultation"],price:"Starting from ₹25/sq ft",category:"design"},{id:3,title:"Renovation",icon:"🔨",image:z5,description:"We undertake renovation work for all commercial, residential and factory layout. From demolishing to rebuilding with custom redesigns.",features:["Commercial Renovation","Residential Makeover","Factory Layout","Custom Redesigns"],price:"Starting from ₹600/sq ft",category:"renovation"},{id:4,title:"Layout Development",icon:"📋",image:R5,description:"Our layout development expertise is designed to transform your project goals into reality, which is a perfect balance of form and function.",features:["Project Planning","Space Optimization","Functional Design","Goal-oriented Solutions"],price:"Starting from ₹35/sq ft",category:"planning"},{id:5,title:"Interior Designing",icon:"🎨",image:M5,description:"We create stunning interior designs for commercial, residential, and industrial spaces. From concept to completion, we bring your vision to life.",features:["Commercial Interiors","Residential Design","Industrial Spaces","Concept to Completion"],price:"Starting from ₹800/sq ft",category:"interiors"},{id:6,title:"Customer Satisfaction",icon:"⭐",image:D5,description:"Our expert architects help you with creating conceptual designs, developing floor plans and preparing site plans, which reflect your dream home expectations.",features:["Expert Consultation","Dream Home Planning","Quality Assurance","Client-focused Approach"],price:"Included in all services",category:"support"}],z=[{icon:"🏆",value:"60+",label:"Projects Completed",detail:"Across all service categories"},{icon:"📅",value:"15+",label:"Years Experience",detail:"Professional expertise"},{icon:"😊",value:"100%",label:"Client Satisfaction",detail:"Quality guaranteed"},{icon:"🔧",value:"24/7",label:"Support Available",detail:"Round-the-clock assistance"}];return n.jsxs("div",{className:"workshop-page",ref:p,children:[n.jsx("div",{className:"workshop-header",children:n.jsxs("div",{className:"header-grid",children:[n.jsx("div",{className:"blueprint-corner tl"}),n.jsx("div",{className:"blueprint-corner tr"}),n.jsx("div",{className:"blueprint-corner bl"}),n.jsx("div",{className:"blueprint-corner br"}),n.jsxs("div",{className:"header-content",children:[n.jsxs("div",{className:"project-label",children:[n.jsx("span",{className:"label-text",children:"PROJECT:"}),n.jsx("span",{className:"label-value",children:"CONSTRUCTION SERVICES"})]}),n.jsxs("div",{className:"project-label",children:[n.jsx("span",{className:"label-text",children:"COMPANY:"}),n.jsx("span",{className:"label-value",children:"PAVAN TECHNO CONSTRUCTIONS"})]}),n.jsxs("div",{className:"project-label",children:[n.jsx("span",{className:"label-text",children:"STATUS:"}),n.jsx("span",{className:"label-value",children:"ACTIVE OPERATIONS"})]}),n.jsx("h1",{className:`workshop-title ${o?"visible":""}`,children:"CONSTRUCTION SERVICES"}),n.jsx("p",{className:`workshop-subtitle ${o?"visible":""}`,children:"Professional construction services delivered through specialized workstations"}),n.jsxs("div",{className:"view-selector",children:[n.jsxs("button",{className:`selector-btn ${f==="workshop"?"active":""}`,onClick:()=>h("workshop"),children:[n.jsx("span",{className:"btn-symbol",children:"▦"}),"Workshop View"]}),n.jsxs("button",{className:`selector-btn ${f==="catalog"?"active":""}`,onClick:()=>h("catalog"),children:[n.jsx("span",{className:"btn-symbol",children:"≡"}),"Service Catalog"]})]})]})]})}),f==="workshop"&&n.jsx("div",{className:"workshop-floor",children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"floor-plan",children:[n.jsxs("div",{className:"plan-header",children:[n.jsx("h2",{children:"WORKSHOP FLOOR PLAN"}),n.jsx("div",{className:"plan-details"})]}),n.jsx("div",{className:"workstations-grid",children:v.map((S,M)=>n.jsx("div",{className:`workstation ${c===S.id?"active":""}`,onClick:()=>d(c===S.id?null:S.id),children:n.jsxs("div",{className:"station-frame",children:[n.jsxs("div",{className:"frame-corners",children:[n.jsx("span",{className:"corner tl"}),n.jsx("span",{className:"corner tr"}),n.jsx("span",{className:"corner bl"}),n.jsx("span",{className:"corner br"})]}),n.jsxs("div",{className:"station-header",children:[n.jsxs("div",{className:"station-id",children:[" ",S.station]}),n.jsx("div",{className:"station-code",children:S.code})]}),n.jsxs("div",{className:"station-image",children:[n.jsx("img",{src:S.image,alt:S.title}),n.jsx("div",{className:"image-overlay",children:n.jsx("div",{className:"overlay-icon",children:S.icon})})]}),n.jsxs("div",{className:"station-info",children:[n.jsx("h3",{children:S.title}),n.jsx("div",{className:"station-status",children:n.jsx("span",{className:"status-dot"})})]}),c===S.id&&n.jsxs("div",{className:"station-details",children:[n.jsxs("div",{className:"details-section",children:[n.jsx("h4",{children:"SERVICE OVERVIEW"}),n.jsx("p",{children:S.description})]}),n.jsxs("div",{className:"details-section",children:[n.jsx("h4",{children:"KEY FEATURES"}),n.jsx("div",{className:"features-grid",children:S.features.map((k,P)=>n.jsxs("div",{className:"feature-item",children:[n.jsx("span",{className:"feature-bullet",children:"●"}),k]},P))})]}),n.jsxs("div",{className:"pricing-section",children:[n.jsxs("div",{className:"price-info",children:[n.jsx("span",{className:"price-label",children:"PRICING:"}),n.jsx("span",{className:"price-value",children:S.price})]}),n.jsxs("button",{className:"quote-btn",onClick:r,children:["REQUEST QUOTE",n.jsx("span",{className:"btn-arrow",children:"→"})]})]})]})]})},S.id))})]})})}),f==="catalog"&&n.jsx("div",{className:"service-catalog",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"catalog-header",children:[n.jsx("h2",{children:"SERVICE CATALOG"}),n.jsxs("div",{className:"catalog-tabs",children:[n.jsx("button",{className:`tab-btn ${x==="overview"?"active":""}`,onClick:()=>b("overview"),children:"OVERVIEW"}),n.jsx("button",{className:`tab-btn ${x==="technical"?"active":""}`,onClick:()=>b("technical"),children:"TECHNICAL SPECS"}),n.jsx("button",{className:`tab-btn ${x==="pricing"?"active":""}`,onClick:()=>b("pricing"),children:"PRICING"})]})]}),n.jsx("div",{className:"catalog-content",children:v.map(S=>n.jsxs("div",{className:"catalog-item",children:[n.jsxs("div",{className:"item-header",children:[n.jsxs("div",{className:"item-id",children:[n.jsx("span",{className:"item-code",children:S.code}),n.jsx("span",{className:"item-category",children:S.category.toUpperCase()})]}),n.jsx("h3",{children:S.title})]}),n.jsxs("div",{className:"item-body",children:[n.jsxs("div",{className:"item-image",children:[n.jsx("img",{src:S.image,alt:S.title}),n.jsx("div",{className:"item-badge",children:S.icon})]}),n.jsxs("div",{className:"item-content",children:[x==="overview"&&n.jsxs("div",{className:"overview-content",children:[n.jsx("p",{children:S.description}),n.jsx("div",{className:"features-list",children:S.features.map((M,k)=>n.jsx("span",{className:"feature-tag",children:M},k))})]}),x==="technical"&&n.jsx("div",{className:"technical-content",children:n.jsx("div",{className:"tech-specs",children:Object.entries(S.specifications).map(([M,k])=>n.jsxs("div",{className:"tech-row",children:[n.jsx("span",{className:"tech-label",children:M}),n.jsx("span",{className:"tech-value",children:k})]},M))})}),x==="pricing"&&n.jsxs("div",{className:"pricing-content",children:[n.jsx("div",{className:"price-display",children:n.jsx("span",{className:"price-amount",children:S.price})}),n.jsx("button",{className:"catalog-quote-btn",onClick:r,children:"GET DETAILED QUOTE"})]})]})]})]},S.id))})]})}),n.jsx("div",{className:"workshop-stats",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"stats-header",children:[n.jsx("h2",{children:"WORKSHOP PERFORMANCE METRICS"}),n.jsx("div",{className:"metrics-line"})]}),n.jsx("div",{className:"stats-grid",children:z.map((S,M)=>n.jsx("div",{className:"stat-panel",children:n.jsxs("div",{className:"panel-frame",children:[n.jsx("div",{className:"panel-header",children:n.jsx("div",{className:"panel-icon",children:S.icon})}),n.jsx("div",{className:"panel-value",children:S.value}),n.jsx("div",{className:"panel-label",children:S.label}),n.jsx("div",{className:"panel-detail",children:S.detail})]})},M))})]})}),n.jsx("div",{className:"quality-section",children:n.jsx("div",{className:"container",children:n.jsx("div",{className:"quality-grid",children:n.jsxs("div",{className:"quality-content",children:[n.jsx("div",{className:"content-header",children:n.jsx("h2",{children:"QUALITY ASSURANCE PROTOCOL"})}),n.jsxs("div",{className:"assurance-items",children:[n.jsxs("div",{className:"assurance-item",children:[n.jsx("div",{className:"item-marker",children:"01"}),n.jsxs("div",{className:"item-data",children:[n.jsx("h4",{children:"15+ Years Experience"}),n.jsx("p",{children:"Proven track record in delivering quality construction projects across various sectors"})]})]}),n.jsxs("div",{className:"assurance-item",children:[n.jsx("div",{className:"item-marker",children:"02"}),n.jsxs("div",{className:"item-data",children:[n.jsx("h4",{children:"60+ Projects Completed"}),n.jsx("p",{children:"Successfully delivered projects across residential, commercial, and industrial sectors"})]})]}),n.jsxs("div",{className:"assurance-item",children:[n.jsx("div",{className:"item-marker",children:"03"}),n.jsxs("div",{className:"item-data",children:[n.jsx("h4",{children:"Quality Materials"}),n.jsx("p",{children:"We use only premium quality materials from trusted suppliers ensuring longevity"})]})]})]})]})})})}),n.jsx("style",{jsx:!0,children:`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .workshop-page {
          font-family: 'Roboto Mono', 'Courier New', monospace;
          background: #f8f9fa;
          min-height: 100vh;
          color: #2D3748;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Workshop Header */
        .workshop-header {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 80px 20px;
          position: relative;
        }

        .workshop-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(183, 156, 92, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(183, 156, 92, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .header-grid {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          background: white;
          border: 3px solid #2D3748;
          padding: 60px;
        }

        .blueprint-corner {
          position: absolute;
          width: 25px;
          height: 25px;
          border: 3px solid #B79C5C;
        }

        .blueprint-corner.tl { top: -3px; left: -3px; border-right: none; border-bottom: none; }
        .blueprint-corner.tr { top: -3px; right: -3px; border-left: none; border-bottom: none; }
        .blueprint-corner.bl { bottom: -3px; left: -3px; border-right: none; border-top: none; }
        .blueprint-corner.br { bottom: -3px; right: -3px; border-left: none; border-top: none; }

        .header-content {
          text-align: center;
        }

        .project-label {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 10px;
          font-size: 12px;
          letter-spacing: 2px;
        }

        .label-text {
          font-weight: 700;
          color: #B79C5C;
        }

        .label-value {
          color: #2D3748;
        }

        .workshop-title {
          font-size: 4rem;
          font-weight: 900;
          letter-spacing: 4px;
          color: #2D3748;
          margin: 40px 0 20px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease;
        }

        .workshop-title.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .workshop-subtitle {
          font-size: 16px;
          color: #666;
          margin-bottom: 40px;
          letter-spacing: 1px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 1s ease 0.3s;
        }

        .workshop-subtitle.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .view-selector {
          display: flex;
          gap: 20px;
          justify-content: center;
        }

        .selector-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px 25px;
          border: 2px solid #2D3748;
          background: transparent;
          color: #2D3748;
          font-family: inherit;
          font-weight: 600;
          font-size: 12px;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .selector-btn.active {
          background: #2D3748;
          color: white;
        }

        .selector-btn:hover:not(.active) {
          background: #B79C5C;
          color: white;
          border-color: #B79C5C;
        }

        .btn-symbol {
          font-size: 14px;
        }

        /* Workshop Floor */
        .workshop-floor {
          padding: 80px 0;
          background: white;
        }

        .floor-plan {
          background: white;
          border: 2px solid #2D3748;
          padding: 40px;
        }

        .plan-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 2px solid #B79C5C;
        }

        .plan-header h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: 2px;
        }

        .plan-details {
          display: flex;
          gap: 30px;
          font-size: 11px;
          font-weight: 600;
          color: #666;
          letter-spacing: 1px;
        }

        .workstations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
        }

        .workstation {
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .workstation:hover {
          transform: scale(1.02);
        }

        .station-frame {
          position: relative;
          background: #f8f9fa;
          border: 2px solid #2D3748;
          padding: 25px;
          transition: all 0.3s ease;
        }

        .workstation.active .station-frame {
          background: white;
          border-color: #B79C5C;
          box-shadow: 0 15px 35px rgba(183, 156, 92, 0.2);
        }

        .frame-corners {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .corner {
          position: absolute;
          width: 15px;
          height: 15px;
          border: 2px solid #B79C5C;
        }

        .corner.tl { top: -2px; left: -2px; border-right: none; border-bottom: none; }
        .corner.tr { top: -2px; right: -2px; border-left: none; border-bottom: none; }
        .corner.bl { bottom: -2px; left: -2px; border-right: none; border-top: none; }
        .corner.br { bottom: -2px; right: -2px; border-left: none; border-top: none; }

        .station-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .station-id {
          font-size: 14px;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: 2px;
        }

        .station-code {
          font-size: 11px;
          color: #B79C5C;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .station-image {
          position: relative;
          height: 180px;
          overflow: hidden;
          margin-bottom: 20px;
          border: 1px solid #2D3748;
        }

        .station-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .workstation:hover .station-image img {
          transform: scale(1.1);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(45, 55, 72, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .workstation:hover .image-overlay {
          opacity: 1;
        }

        .overlay-icon {
          font-size: 3rem;
          color: white;
        }

        .station-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .station-info h3 {
          font-size: 18px;
          font-weight: 600;
          color: #2D3748;
        }

        .station-status {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 10px;
          font-weight: 600;
          color: #666;
          letter-spacing: 1px;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .station-details {
          margin-top: 30px;
          padding-top: 30px;
          border-top: 2px solid #B79C5C;
          animation: slideDown 0.5s ease;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .details-section {
          margin-bottom: 25px;
        }

        .details-section h4 {
          font-size: 12px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 2px;
          margin-bottom: 15px;
        }

        .details-section p {
          font-size: 14px;
          line-height: 1.6;
          color: #666;
        }

        .spec-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .spec-item {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .spec-label {
          font-size: 10px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 1px;
        }

        .spec-value {
          font-size: 12px;
          color: #2D3748;
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #666;
        }

        .feature-bullet {
          color: #B79C5C;
          font-size: 14px;
        }

        .pricing-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #f8f9fa;
          padding: 20px;
          border: 1px solid #2D3748;
        }

        .price-info {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .price-label {
          font-size: 10px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 1px;
        }

        .price-value {
          font-size: 16px;
          font-weight: 700;
          color: #2D3748;
        }

        .quote-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: #2D3748;
          color: white;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }

        .quote-btn:hover {
          background: #B79C5C;
        }

        .btn-arrow {
          transition: transform 0.3s ease;
        }

        .quote-btn:hover .btn-arrow {
          transform: translateX(5px);
        }

        /* Service Catalog */
        .service-catalog {
          padding: 80px 0;
          background: white;
        }

        .catalog-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .catalog-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: 2px;
          margin-bottom: 30px;
        }

        .catalog-tabs {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .tab-btn {
          padding: 12px 25px;
          border: 2px solid #2D3748;
          background: transparent;
          color: #2D3748;
          font-family: inherit;
          font-weight: 600;
          font-size: 11px;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tab-btn.active {
          background: #2D3748;
          color: white;
        }

        .tab-btn:hover:not(.active) {
          background: #B79C5C;
          color: white;
          border-color: #B79C5C;
        }

        .catalog-content {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .catalog-item {
          background: #f8f9fa;
          border: 2px solid #2D3748;
          padding: 30px;
        }

        .item-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid #B79C5C;
        }

        .item-id {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .item-code {
          font-size: 12px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 2px;
        }

        .item-category {
          font-size: 10px;
          color: #666;
          letter-spacing: 1px;
        }

        .item-header h3 {
          font-size: 24px;
          font-weight: 600;
          color: #2D3748;
        }

        .item-body {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 30px;
        }

        .item-image {
          position: relative;
          height: 150px;
          border: 2px solid #2D3748;
          overflow: hidden;
        }

        .item-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .item-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(45, 55, 72, 0.9);
          color: white;
          padding: 8px;
          border-radius: 4px;
          font-size: 20px;
        }

        .overview-content p {
          font-size: 14px;
          line-height: 1.6;
          color: #666;
          margin-bottom: 20px;
        }

        .features-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .feature-tag {
          padding: 6px 12px;
          background: white;
          border: 1px solid #B79C5C;
          color: #B79C5C;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .tech-specs {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .tech-row {
          display: flex;
          justify-content: space-between;
          padding: 15px;
          background: white;
          border: 1px solid #2D3748;
        }

        .tech-label {
          font-size: 12px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 1px;
        }

        .tech-value {
          font-size: 12px;
          color: #2D3748;
        }

        .pricing-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .price-display {
          text-align: center;
          padding: 30px;
          background: white;
          border: 2px solid #B79C5C;
        }

        .price-amount {
          font-size: 24px;
          font-weight: 700;
          color: #B79C5C;
        }

        .catalog-quote-btn {
          padding: 15px 30px;
          background: #2D3748;
          color: white;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-weight: 600;
          font-size: 12px;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }

        .catalog-quote-btn:hover {
          background: #B79C5C;
        }

        /* Workshop Statistics */
        .workshop-stats {
          padding: 80px 0;
          background: #f8f9fa;
        }

        .stats-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .stats-header h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: 2px;
          margin-bottom: 20px;
        }

        .metrics-line {
          width: 100px;
          height: 3px;
          background: #B79C5C;
          margin: 0 auto;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .stat-panel {
          background: white;
          border: 2px solid #2D3748;
          padding: 30px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .stat-panel:hover {
          border-color: #B79C5C;
          transform: translateY(-5px);
        }

        .panel-frame {
          position: relative;
        }

        .panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .panel-icon {
          font-size: 2rem;
        }

        .panel-id {
          font-size: 10px;
          color: #B79C5C;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .panel-value {
          font-size: 3rem;
          font-weight: 800;
          color: #B79C5C;
          margin-bottom: 10px;
        }

        .panel-label {
          font-size: 14px;
          font-weight: 600;
          color: #2D3748;
          margin-bottom: 5px;
        }

        .panel-detail {
          font-size: 11px;
          color: #666;
          letter-spacing: 1px;
        }

        /* Quality Assurance */
        .quality-section {
          padding: 80px 0;
          background: white;
        }

        .quality-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .content-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 2px solid #B79C5C;
        }

        .content-header h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: 2px;
        }

        .protocol-id {
          font-size: 12px;
          color: #B79C5C;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .assurance-items {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .assurance-item {
          display: flex;
          gap: 20px;
          padding: 25px;
          background: #f8f9fa;
          border: 1px solid #2D3748;
        }

        .item-marker {
          width: 40px;
          height: 40px;
          background: #2D3748;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 14px;
          flex-shrink: 0;
        }

        .item-data h4 {
          font-size: 16px;
          font-weight: 600;
          color: #2D3748;
          margin-bottom: 10px;
        }

        .item-data p {
          font-size: 14px;
          line-height: 1.6;
          color: #666;
        }

        .certification-panel {
          background: #f8f9fa;
          border: 2px solid #2D3748;
          padding: 30px;
          height: fit-content;
        }

        .cert-header {
          margin-bottom: 30px;
          text-align: center;
        }

        .cert-header h3 {
          font-size: 16px;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: 1px;
        }

        .cert-items {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cert-item {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .cert-badge {
          width: 40px;
          height: 40px;
          background: #B79C5C;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 10px;
          letter-spacing: 1px;
        }

        .cert-item span {
          font-size: 12px;
          color: #2D3748;
          font-weight: 600;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .workshop-title {
            font-size: 2.5rem;
            letter-spacing: 2px;
          }
          
          .workstations-grid {
            grid-template-columns: 1fr;
          }
          
          .item-body {
            grid-template-columns: 1fr;
          }
          
          .quality-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .spec-grid,
          .features-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .workshop-title {
            font-size: 1.6rem;
          }
          
          .view-selector {
            flex-direction: column;
            align-items: center;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
          }
          
          .plan-details {
            flex-direction: column;
            gap: 10px;
          }
          
          .header-grid {
            padding: 40px 20px;
          }
        }
          /* Responsive Design */
        @media (max-width: 768px) {
          .workshop-title {
            font-size: 2.5rem;
            letter-spacing: 2px;
          }
          
          .workstations-grid {
            grid-template-columns: 1fr;
          }
          
          .item-body {
            grid-template-columns: 1fr;
          }
          
          .quality-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .spec-grid,
          .features-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .workshop-title {
            font-size: 1.25rem;
            letter-spacing: 0px;
            line-height: 1.1;
            word-break: break-word;
            hyphens: auto;
          }
          
          .header-grid {
            padding: 30px 10px;
          }
          
          .project-label {
            flex-direction: column;
            gap: 5px;
            font-size: 10px;
          }
          
          .selector-btn {
            padding: 12px 15px;
            font-size: 10px;
          }
        }

        @media (max-width: 360px) {
          .workshop-title {
            font-size: 1.1rem;
            letter-spacing: 0px;
            line-height: 1.1;
          }
          
          .header-grid {
            padding: 25px 10px;
          }
        }

        @media (max-width: 320px) {
          .workshop-title {
            font-size: 1.3rem;
            letter-spacing: 0px;
            word-break: break-word;
          }
          
          .header-grid {
            padding: 25px 10px;
          }
        }
      `})]})},B5=({openPopup:r})=>{const[o,u]=y.useState(!1),[c,d]=y.useState("residential"),[f,h]=y.useState(null),[x,b]=y.useState("estimates"),p=y.useRef(null);y.useEffect(()=>{const M=new IntersectionObserver(k=>{k.forEach(P=>{P.isIntersecting&&u(!0)})},{threshold:.1});return p.current&&M.observe(p.current),()=>{p.current&&M.unobserve(p.current)}},[]);const v=[{id:"residential",label:"RESIDENTIAL",icon:"🏠",color:"#B79C5C"},{id:"commercial",label:"COMMERCIAL",icon:"🏢",color:"#2D3748"},{id:"interior",label:"INTERIOR",icon:"🎨",color:"#B79C5C"},{id:"renovation",label:"RENOVATION",icon:"🔨",color:"#2D3748"}],S={residential:[{title:"STANDARD RESIDENTIAL",baseRate:"₹1,600",totalCost:"₹16,00,000",area:"1000 sq ft",timeline:"6-8 months",description:"Cost-effective residential construction with standard specifications",costBreakdown:{"Site Preparation":"8%","Foundation Work":"15%","Structural Framework":"25%","Roofing & Waterproofing":"12%","Electrical & Plumbing":"18%","Finishing & Paint":"15%","Fixtures & Fittings":"7%"},included:["Architectural Planning","Structural Design","Site Supervision","Quality Control","Material Supply","Labor Management"],status:"STANDARD"},{title:"PREMIUM RESIDENTIAL",baseRate:"₹2,200",totalCost:"₹22,00,000",area:"1000 sq ft",timeline:"8-10 months",description:"Enhanced residential construction with premium specifications",costBreakdown:{"Site Preparation":"6%","Foundation Work":"14%","Structural Framework":"24%","Roofing & Waterproofing":"12%","Electrical & Plumbing":"20%","Finishing & Paint":"18%","Fixtures & Fittings":"6%"},included:["3D Architectural Design","Structural Engineering","Project Management","Quality Assurance","Premium Material Supply","Skilled Labor Team","Interior Consultation"],status:"RECOMMENDED"},{title:"LUXURY RESIDENTIAL",classification:"LUXURY CLASS",baseRate:"₹3,500",totalCost:"₹35,00,000",area:"1000 sq ft",timeline:"12-15 months",description:"High-end residential construction with luxury specifications",costBreakdown:{"Site Preparation":"5%","Foundation Work":"12%","Structural Framework":"22%","Roofing & Waterproofing":"10%","Electrical & Plumbing":"22%","Finishing & Paint":"22%","Fixtures & Fittings":"7%"},specifications:["Steel Frame Structure","Imported Premium Materials","Smart Home Automation","Luxury Plumbing Systems","Marble & Hardwood Flooring","Designer Paint & Textures","24 Months Warranty"],included:["Custom Architectural Design","Structural Engineering","Project Management","Quality Control","Luxury Material Supply","Expert Craftsmen","Interior Design","Landscape Planning"],compliance:["NBC 2016","IS Codes","Green Building","LEED Standards"],status:"PREMIUM"}],commercial:[{title:"STANDARD COMMERCIAL",code:"COM-STD-001",classification:"COMMERCIAL GRADE",baseRate:"₹1,800",totalCost:"₹18,00,000",area:"1000 sq ft",timeline:"8-10 months",description:"Standard commercial construction for offices and retail",costBreakdown:{"Site Preparation":"7%","Foundation Work":"16%","Structural Framework":"28%","Roofing & Waterproofing":"10%","Electrical & HVAC":"20%",Finishing:"14%","Commercial Fittings":"5%"},specifications:["Commercial RCC Structure","Fire-Resistant Materials","Commercial Electrical Setup","HVAC Ready Infrastructure","Commercial Grade Flooring","Weather Resistant Finishes","12 Months Warranty"],included:["Commercial Planning","Structural Design","MEP Engineering","Project Coordination","Material Supply","Commercial Installation"],compliance:["NBC 2016","Fire Safety","Commercial Codes"],status:"STANDARD"},{title:"PREMIUM COMMERCIAL",code:"COM-PREM-002",classification:"PREMIUM COMMERCIAL",baseRate:"₹2,800",totalCost:"₹28,00,000",area:"1000 sq ft",timeline:"10-12 months",description:"Modern commercial construction with advanced systems",costBreakdown:{"Site Preparation":"6%","Foundation Work":"15%","Structural Framework":"26%","Roofing & Waterproofing":"9%","Electrical & HVAC":"24%",Finishing:"16%","Premium Fittings":"4%"},specifications:["Steel Frame Commercial","Premium Fire Safety Systems","Advanced Electrical & HVAC","Smart Building Infrastructure","Premium Commercial Flooring","High-Performance Finishes","18 Months Warranty"],included:["Modern Commercial Design","MEP Engineering","Building Automation","Project Management","Premium Materials","Professional Installation","System Integration"],compliance:["NBC 2016","Fire Safety","Green Building","IGBC"],status:"RECOMMENDED"},{title:"LUXURY COMMERCIAL",code:"COM-LUX-003",classification:"LUXURY COMMERCIAL",baseRate:"₹4,200",totalCost:"₹42,00,000",area:"1000 sq ft",timeline:"12-18 months",description:"High-end commercial spaces with luxury finishes",costBreakdown:{"Site Preparation":"4%","Foundation Work":"13%","Structural Framework":"24%","Roofing & Waterproofing":"8%","Electrical & HVAC":"26%",Finishing:"20%","Luxury Fittings":"5%"},specifications:["Premium Steel Structure","Luxury Fire Safety Systems","Smart Building Automation","Advanced HVAC Systems","Luxury Commercial Flooring","Designer Finishes","24 Months Warranty"],included:["Luxury Commercial Design","Advanced MEP Systems","Building Management Systems","Project Management","Luxury Materials","Expert Installation","Complete Integration","Maintenance Package"],compliance:["NBC 2016","LEED Platinum","Green Building","IGBC"],status:"PREMIUM"}],interior:[{title:"BASIC INTERIOR",code:"INT-BAS-001",classification:"ESSENTIAL INTERIOR",baseRate:"₹800",totalCost:"₹8,00,000",area:"1000 sq ft",timeline:"2-3 months",description:"Essential interior design and execution",costBreakdown:{"Space Planning":"10%","Electrical Work":"20%","Furniture & Fixtures":"35%","Flooring & Tiling":"15%","Paint & Finishes":"12%",Installation:"8%"},specifications:["Basic Space Planning","Standard Lighting","Modular Furniture","Laminate Flooring","Standard Paint","Basic Fixtures","6 Months Warranty"],included:["Interior Planning","Furniture Design","Electrical Layout","Material Supply","Installation Service","Basic Styling"],compliance:["Interior Standards","Safety Codes"],status:"STANDARD"},{title:"PREMIUM INTERIOR",code:"INT-PREM-002",classification:"DESIGNER INTERIOR",baseRate:"₹1,500",totalCost:"₹15,00,000",area:"1000 sq ft",timeline:"3-4 months",description:"Complete interior design transformation",costBreakdown:{"Design & Planning":"12%","Electrical & Lighting":"22%","Custom Furniture":"30%","Premium Flooring":"18%","Designer Finishes":"15%",Installation:"3%"},specifications:["Professional Space Planning","Designer Lighting Solutions","Custom Furniture Design","Premium Flooring Options","Designer Paint & Textures","Premium Fixtures","12 Months Warranty"],included:["3D Interior Design","Custom Furniture","Lighting Design","Premium Materials","Professional Installation","Interior Styling","Project Management"],compliance:["Interior Standards","Design Codes","Safety Standards"],status:"RECOMMENDED"},{title:"LUXURY INTERIOR",code:"INT-LUX-003",classification:"LUXURY INTERIOR",baseRate:"₹2,500",totalCost:"₹25,00,000",area:"1000 sq ft",timeline:"4-6 months",description:"Bespoke luxury interior design",costBreakdown:{"Luxury Design":"15%","Smart Lighting":"20%","Bespoke Furniture":"25%","Luxury Flooring":"20%","Designer Finishes":"17%",Installation:"3%"},specifications:["Luxury Space Planning","Smart Lighting Systems","Bespoke Furniture","Luxury Flooring Materials","Designer Paint & Textures","Luxury Fixtures & Art","18 Months Warranty"],included:["Luxury Interior Design","Bespoke Furniture","Smart Home Integration","Luxury Materials","Expert Installation","Interior Styling","Project Management","Maintenance Package"],compliance:["Luxury Standards","Design Excellence","Safety Codes"],status:"PREMIUM"}],renovation:[{title:"BASIC RENOVATION",classification:"ESSENTIAL RENOVATION",baseRate:"₹600",totalCost:"₹6,00,000",area:"1000 sq ft",timeline:"2-3 months",description:"Essential renovation and repair work",costBreakdown:{"Assessment & Planning":"8%",Demolition:"15%","Structural Repairs":"25%","Electrical Updates":"20%","Plumbing Updates":"15%","Finishing Work":"17%"},specifications:["Structural Assessment","Basic Electrical Updates","Plumbing Repairs","Standard Paint Refresh","Basic Fixture Replacement","Cleaning Service","6 Months Warranty"],included:["Renovation Planning","Demolition Work","Basic Repairs","Material Supply","Installation Service","Cleanup"],compliance:["Building Codes","Safety Standards"],status:"STANDARD"},{title:"COMPLETE RENOVATION",classification:"COMPREHENSIVE RENOVATION",baseRate:"₹1,200",totalCost:"₹12,00,000",area:"1000 sq ft",timeline:"4-5 months",description:"Complete renovation with modern upgrades",costBreakdown:{"Planning & Design":"10%",Demolition:"12%","Structural Work":"22%","Electrical Upgrade":"22%","Plumbing Upgrade":"18%","Premium Finishing":"16%"},specifications:["Complete Renovation Design","Modern Electrical Systems","Advanced Plumbing","Premium Paint & Finishes","Modern Fixture Installation","Structural Modifications","12 Months Warranty"],included:["Renovation Design","Comprehensive Demolition","System Upgrades","Premium Materials","Professional Installation","Project Management","Deep Cleaning"],compliance:["NBC 2016","Safety Standards","Modern Codes"],status:"RECOMMENDED"},{title:"LUXURY RENOVATION",classification:"LUXURY RENOVATION",baseRate:"₹2,000",totalCost:"₹20,00,000",area:"1000 sq ft",timeline:"6-8 months",description:"Premium renovation with luxury upgrades",costBreakdown:{"Luxury Design":"12%","Selective Demolition":"10%","Premium Structural":"20%","Smart Electrical":"24%","Luxury Plumbing":"20%","Designer Finishing":"14%"},specifications:["Luxury Renovation Design","Smart Home Integration","Luxury Plumbing Systems","Designer Finishes","Luxury Fixture Installation","Architectural Modifications","18 Months Warranty"],included:["Luxury Design Planning","Precision Demolition","Premium Upgrades","Luxury Materials","Expert Installation","Project Management","Professional Staging","Maintenance Package"],compliance:["NBC 2016","Luxury Standards","Green Building"],status:"PREMIUM"}]}[c];return n.jsxs("div",{className:"estimation-lab",ref:p,children:[n.jsx("div",{className:"lab-header",children:n.jsxs("div",{className:"header-frame",children:[n.jsxs("div",{className:"blueprint-corners",children:[n.jsx("span",{className:"corner tl"}),n.jsx("span",{className:"corner tr"}),n.jsx("span",{className:"corner bl"}),n.jsx("span",{className:"corner br"})]}),n.jsxs("div",{className:"header-content",children:[n.jsxs("div",{className:"lab-info",children:[n.jsxs("div",{className:"info-line",children:[n.jsx("span",{className:"info-label",children:"PROJECT TYPE:"}),n.jsx("span",{className:"info-value",children:"CONSTRUCTION COST ESTIMATION"})]}),n.jsxs("div",{className:"info-line",children:[n.jsx("span",{className:"info-label",children:"PRICING STRUCTURE:"}),n.jsx("span",{className:"info-value",children:"TRANSPARENT & COMPETITIVE"})]})]}),n.jsx("h1",{className:`lab-title ${o?"visible":""}`,children:"CONSTRUCTION PRICING"}),n.jsx("p",{className:`lab-subtitle ${o?"visible":""}`,children:"Professional cost estimation and project analysis for construction projects"}),n.jsxs("div",{className:"view-controls",children:[n.jsxs("button",{className:`control-btn ${x==="estimates"?"active":""}`,onClick:()=>b("estimates"),children:[n.jsx("span",{className:"btn-icon",children:"📋"}),"Cost Estimates"]}),n.jsxs("button",{className:`control-btn ${x==="breakdown"?"active":""}`,onClick:()=>b("breakdown"),children:[n.jsx("span",{className:"btn-icon",children:"📊"}),"Cost Breakdown"]})]})]})]})}),n.jsx("div",{className:"category-lab",children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"lab-section-header",children:[n.jsx("h2",{children:"PROJECT CLASSIFICATION"}),n.jsx("div",{className:"classification-grid",children:v.map(M=>n.jsxs("div",{className:`classification-card ${c===M.id?"active":""}`,onClick:()=>d(M.id),children:[n.jsxs("div",{className:"card-header",children:[n.jsx("div",{className:"card-code",children:M.code}),n.jsx("div",{className:"card-icon",children:M.icon})]}),n.jsx("div",{className:"card-title",children:M.label}),n.jsxs("div",{className:"card-status",children:[n.jsx("span",{className:"status-indicator"}),"AVAILABLE"]})]},M.id))})]})})}),x==="estimates"&&n.jsx("div",{className:"estimates-section",children:n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"estimates-header",children:[n.jsxs("h2",{children:["PROJECT ESTIMATES - ",c.toUpperCase()]}),n.jsx("div",{className:"estimates-meta"})]}),n.jsx("div",{className:"estimates-grid",children:S.map((M,k)=>n.jsxs("div",{className:`estimate-sheet ${M.status.toLowerCase()}`,onClick:()=>h(f===k?null:k),children:[n.jsxs("div",{className:"sheet-header",children:[n.jsxs("div",{className:"estimate-id",children:[n.jsx("span",{className:"id-code",children:M.code}),n.jsx("span",{className:"id-class",children:M.classification})]}),n.jsx("div",{className:"estimate-status",children:n.jsx("span",{className:`status-badge ${M.status.toLowerCase()}`,children:M.status})})]}),n.jsxs("div",{className:"sheet-content",children:[n.jsx("h3",{children:M.title}),n.jsx("p",{className:"estimate-description",children:M.description}),n.jsxs("div",{className:"cost-display",children:[n.jsxs("div",{className:"base-rate",children:[n.jsx("span",{className:"rate-label",children:"BASE RATE:"}),n.jsxs("span",{className:"rate-value",children:[M.baseRate,"/sq ft"]})]}),n.jsxs("div",{className:"total-cost",children:[n.jsx("span",{className:"cost-label",children:"ESTIMATED COST:"}),n.jsx("span",{className:"cost-value",children:M.totalCost})]})]}),n.jsxs("div",{className:"project-specs",children:[n.jsxs("div",{className:"spec-item",children:[n.jsx("span",{className:"spec-label",children:"AREA:"}),n.jsx("span",{className:"spec-value",children:M.area})]}),n.jsxs("div",{className:"spec-item",children:[n.jsx("span",{className:"spec-label",children:"TIMELINE:"}),n.jsx("span",{className:"spec-value",children:M.timeline})]})]}),f===k&&n.jsxs("div",{className:"detailed-estimate",children:[n.jsxs("div",{className:"detail-section",children:[n.jsx("h4",{children:"COST BREAKDOWN"}),n.jsx("div",{className:"breakdown-grid",children:Object.entries(M.costBreakdown).map(([P,R])=>n.jsxs("div",{className:"breakdown-item",children:[n.jsx("span",{className:"item-name",children:P}),n.jsx("span",{className:"item-percentage",children:R})]},P))})]}),n.jsxs("div",{className:"detail-section",children:[n.jsx("h4",{children:"INCLUDED SERVICES"}),n.jsx("div",{className:"included-grid",children:M.included.map((P,R)=>n.jsxs("div",{className:"included-item",children:[n.jsx("span",{className:"include-check",children:"✓"}),P]},R))})]}),n.jsx("div",{className:"estimate-footer",children:n.jsxs("button",{className:"request-quote-btn",onClick:r,children:["REQUEST DETAILED QUOTE",n.jsx("span",{className:"btn-arrow",children:"→"})]})})]})]})]},k))})]})}),x==="breakdown"&&n.jsx("div",{className:"breakdown-section",children:n.jsxs("div",{className:"container",children:[n.jsx("div",{className:"breakdown-header",children:n.jsxs("h2",{children:["COST ANALYSIS - ",c.toUpperCase()]})}),n.jsx("div",{className:"analysis-grid",children:S.map((M,k)=>n.jsxs("div",{className:"analysis-card",children:[n.jsxs("div",{className:"analysis-header",children:[n.jsx("h3",{children:M.title}),n.jsx("div",{className:"analysis-code",children:M.code})]}),n.jsxs("div",{className:"cost-chart",children:[n.jsx("div",{className:"chart-title",children:"COST DISTRIBUTION"}),n.jsx("div",{className:"chart-bars",children:Object.entries(M.costBreakdown).map(([P,R],Y)=>n.jsxs("div",{className:"chart-bar",children:[n.jsxs("div",{className:"bar-info",children:[n.jsx("span",{className:"bar-label",children:P}),n.jsx("span",{className:"bar-percentage",children:R})]}),n.jsx("div",{className:"bar-visual",children:n.jsx("div",{className:"bar-fill",style:{width:R}})})]},Y))})]}),n.jsxs("div",{className:"analysis-summary",children:[n.jsxs("div",{className:"summary-row",children:[n.jsx("span",{children:"Base Rate:"}),n.jsxs("span",{children:[M.baseRate,"/sq ft"]})]}),n.jsxs("div",{className:"summary-row",children:[n.jsx("span",{children:"Total Cost:"}),n.jsx("span",{children:M.totalCost})]}),n.jsxs("div",{className:"summary-row",children:[n.jsx("span",{children:"Timeline:"}),n.jsx("span",{children:M.timeline})]})]})]},k))})]})}),n.jsx("div",{className:"lab-statistics",children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"stats-frame",children:[n.jsx("div",{className:"stats-header",children:n.jsx("h2",{children:"ESTIMATION LAB METRICS"})}),n.jsxs("div",{className:"metrics-grid",children:[n.jsxs("div",{className:"metric-panel",children:[n.jsx("div",{className:"panel-icon",children:"📋"}),n.jsxs("div",{className:"panel-data",children:[n.jsx("span",{className:"metric-value",children:"60+"}),n.jsx("span",{className:"metric-label",children:"Estimates Delivered"})]})]}),n.jsxs("div",{className:"metric-panel",children:[n.jsx("div",{className:"panel-icon",children:"💰"}),n.jsxs("div",{className:"panel-data",children:[n.jsx("span",{className:"metric-value",children:"95%"}),n.jsx("span",{className:"metric-label",children:"Cost Accuracy"})]})]}),n.jsxs("div",{className:"metric-panel",children:[n.jsx("div",{className:"panel-icon",children:"⏱️"}),n.jsxs("div",{className:"panel-data",children:[n.jsx("span",{className:"metric-value",children:"24hrs"}),n.jsx("span",{className:"metric-label",children:"Quote Turnaround"})]})]}),n.jsxs("div",{className:"metric-panel",children:[n.jsx("div",{className:"panel-icon",children:"🛡️"}),n.jsxs("div",{className:"panel-data",children:[n.jsx("span",{className:"metric-value",children:"100%"}),n.jsx("span",{className:"metric-label",children:"Transparency"})]})]})]})]})})}),n.jsx("style",{jsx:!0,children:`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .estimation-lab {
          font-family: 'Roboto Mono', 'Courier New', monospace;
          background: #f8f9fa;
          min-height: 100vh;
          color: #2D3748;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Lab Header */
        .lab-header {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 80px 20px;
          position: relative;
        }

        .lab-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(183, 156, 92, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(183, 156, 92, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .header-frame {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          background: white;
          border: 3px solid #2D3748;
          padding: 60px;
        }

        .blueprint-corners {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .corner {
          position: absolute;
          width: 25px;
          height: 25px;
          border: 3px solid #B79C5C;
        }

        .corner.tl { top: -3px; left: -3px; border-right: none; border-bottom: none; }
        .corner.tr { top: -3px; right: -3px; border-left: none; border-bottom: none; }
        .corner.bl { bottom: -3px; left: -3px; border-right: none; border-top: none; }
        .corner.br { bottom: -3px; right: -3px; border-left: none; border-top: none; }

        .header-content {
          text-align: center;
        }

        .lab-info {
          margin-bottom: 40px;
        }

        .info-line {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 8px;
          font-size: 12px;
          letter-spacing: 2px;
        }

        .info-label {
          font-weight: 700;
          color: #B79C5C;
        }

        .info-value {
          color: #2D3748;
        }

        .lab-title {
          font-size: 4rem;
          font-weight: 900;
          letter-spacing: 4px;
          color: #2D3748;
          margin: 40px 0 20px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease;
          word-wrap: break-word;
          hyphens: auto;
          line-height: 1.1;
        }

        .lab-title.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .lab-subtitle {
          font-size: 16px;
          color: #666;
          margin-bottom: 40px;
          letter-spacing: 1px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 1s ease 0.3s;
          line-height: 1.4;
        }

        .lab-subtitle.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .view-controls {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .control-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px 25px;
          border: 2px solid #2D3748;
          background: transparent;
          color: #2D3748;
          font-family: inherit;
          font-weight: 600;
          font-size: 12px;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .control-btn.active {
          background: #2D3748;
          color: white;
        }

        .control-btn:hover:not(.active) {
          background: #B79C5C;
          color: white;
          border-color: #B79C5C;
        }

        .btn-icon {
          font-size: 14px;
        }

        /* Category Lab */
        .category-lab {
          padding: 80px 0;
          background: white;
        }

        .lab-section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .lab-section-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: 2px;
          margin-bottom: 40px;
        }

        .classification-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .classification-card {
          background: #f8f9fa;
          border: 2px solid #2D3748;
          padding: 30px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .classification-card.active {
          background: white;
          border-color: #B79C5C;
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(183, 156, 92, 0.2);
        }

        .classification-card:hover:not(.active) {
          border-color: #B79C5C;
          transform: translateY(-3px);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .card-code {
          font-size: 12px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 2px;
        }

        .card-icon {
          font-size: 2rem;
        }

        .card-title {
          font-size: 18px;
          font-weight: 600;
          color: #2D3748;
          margin-bottom: 15px;
          letter-spacing: 1px;
        }

        .card-status {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 10px;
          font-weight: 600;
          color: #666;
          letter-spacing: 1px;
        }

        .status-indicator {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        /* Estimates Section */
        .estimates-section {
          padding: 80px 0;
          background: #f8f9fa;
        }

        .estimates-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 60px;
          padding-bottom: 20px;
          border-bottom: 2px solid #B79C5C;
        }

        .estimates-header h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: 2px;
        }

        .estimates-meta {
          display: flex;
          gap: 30px;
          font-size: 11px;
          font-weight: 600;
          color: #666;
          letter-spacing: 1px;
        }

        .estimates-grid {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .estimate-sheet {
          background: white;
          border: 2px solid #2D3748;
          padding: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .estimate-sheet:hover {
          border-color: #B79C5C;
          box-shadow: 0 10px 25px rgba(183, 156, 92, 0.15);
        }

        .estimate-sheet.recommended {
          border-color: #B79C5C;
          background: linear-gradient(135deg, #ffffff 0%, rgba(183, 156, 92, 0.02) 100%);
        }

        .sheet-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 25px;
          padding-bottom: 15px;
          border-bottom: 1px solid #e9ecef;
        }

        .estimate-id {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .id-code {
          font-size: 14px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 2px;
        }

        .id-class {
          font-size: 11px;
          color: #666;
          letter-spacing: 1px;
        }

        .status-badge {
          padding: 6px 12px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          border-radius: 4px;
        }

        .status-badge.standard {
          background: #e9ecef;
          color: #2D3748;
        }

        .status-badge.recommended {
          background: #B79C5C;
          color: white;
        }

        .status-badge.premium {
          background: #2D3748;
          color: white;
        }

        .sheet-content h3 {
          font-size: 24px;
          font-weight: 600;
          color: #2D3748;
          margin-bottom: 10px;
        }

        .estimate-description {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 25px;
        }

        .cost-display {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 25px;
          padding: 20px;
          background: #f8f9fa;
          border: 1px solid #2D3748;
        }

        .base-rate, .total-cost {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .rate-label, .cost-label {
          font-size: 10px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 1px;
        }

        .rate-value, .cost-value {
          font-size: 20px;
          font-weight: 700;
          color: #2D3748;
        }

        .project-specs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .spec-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px;
          background: #f8f9fa;
          border: 1px solid #e9ecef;
        }

        .spec-label {
          font-size: 11px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 1px;
        }

        .spec-value {
          font-size: 12px;
          color: #2D3748;
          font-weight: 600;
        }

        .detailed-estimate {
          margin-top: 30px;
          padding-top: 30px;
          border-top: 2px solid #B79C5C;
          animation: slideDown 0.5s ease;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .detail-section {
          margin-bottom: 30px;
        }

        .detail-section h4 {
          font-size: 14px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 2px;
          margin-bottom: 20px;
        }

        .breakdown-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
        }

        .breakdown-item {
          display: flex;
          justify-content: space-between;
          padding: 12px;
          background: #f8f9fa;
          border: 1px solid #2D3748;
        }

        .item-name {
          font-size: 11px;
          color: #2D3748;
          font-weight: 600;
        }

        .item-percentage {
          font-size: 11px;
          color: #B79C5C;
          font-weight: 700;
        }

        .specs-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 10px;
        }

        .spec-line {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          color: #666;
        }

        .spec-bullet {
          color: #B79C5C;
          font-size: 14px;
        }

        .included-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 10px;
        }

        .included-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          color: #666;
        }

        .include-check {
          color: #22c55e;
          font-weight: 700;
        }

        .estimate-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e9ecef;
        }

        .compliance-info {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .compliance-label {
          font-size: 10px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 1px;
        }

        .compliance-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .compliance-tag {
          padding: 4px 8px;
          background: #f8f9fa;
          border: 1px solid #B79C5C;
          color: #B79C5C;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .request-quote-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: #2D3748;
          color: white;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }

        .request-quote-btn:hover {
          background: #B79C5C;
        }

        .btn-arrow {
          transition: transform 0.3s ease;
        }

        .request-quote-btn:hover .btn-arrow {
          transform: translateX(5px);
        }

        /* Breakdown Section */
        .breakdown-section {
          padding: 80px 0;
          background: white;
        }

        .breakdown-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .breakdown-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: 2px;
        }

        .analysis-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
        }

        .analysis-card {
          background: #f8f9fa;
          border: 2px solid #2D3748;
          padding: 30px;
        }

        .analysis-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          padding-bottom: 15px;
          border-bottom: 1px solid #B79C5C;
        }

        .analysis-header h3 {
          font-size: 18px;
          font-weight: 600;
          color: #2D3748;
        }

        .analysis-code {
          font-size: 11px;
          color: #B79C5C;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .cost-chart {
          margin-bottom: 30px;
        }

        .chart-title {
          font-size: 12px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 2px;
          margin-bottom: 20px;
        }

        .chart-bars {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .chart-bar {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .bar-info {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
        }

        .bar-label {
          color: #2D3748;
          font-weight: 600;
        }

        .bar-percentage {
          color: #B79C5C;
          font-weight: 700;
        }

        .bar-visual {
          height: 8px;
          background: #e9ecef;
          border-radius: 4px;
          overflow: hidden;
        }

        .bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #B79C5C, #2D3748);
          border-radius: 4px;
          transition: width 0.5s ease;
        }

        .analysis-summary {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          padding: 10px;
          background: white;
          border: 1px solid #2D3748;
          font-size: 12px;
        }

        .summary-row span:first-child {
          color: #666;
          font-weight: 600;
        }

        .summary-row span:last-child {
          color: #2D3748;
          font-weight: 700;
        }

        /* Lab Statistics */
        .lab-statistics {
          padding: 80px 0;
          background: #f8f9fa;
        }

        .stats-frame {
          background: white;
          border: 2px solid #2D3748;
          padding: 40px;
        }

        .stats-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 2px solid #B79C5C;
        }

        .stats-header h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: 2px;
        }

        .metrics-id {
          font-size: 12px;
          color: #B79C5C;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .metric-panel {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 25px;
          background: #f8f9fa;
          border: 1px solid #2D3748;
          transition: all 0.3s ease;
        }

        .metric-panel:hover {
          border-color: #B79C5C;
          transform: translateY(-5px);
        }

        .panel-icon {
          font-size: 2.5rem;
        }

        .panel-data {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .metric-value {
          font-size: 2rem;
          font-weight: 800;
          color: #B79C5C;
        }

        .metric-label {
          font-size: 12px;
          color: #2D3748;
          font-weight: 600;
          letter-spacing: 1px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .lab-header {
            padding: 60px 15px;
          }
          
          .header-frame {
            padding: 40px 20px;
          }
          
          .lab-title {
            font-size: 2.8rem;
            letter-spacing: 2px;
            line-height: 1.2;
          }
          
          .lab-subtitle {
            font-size: 14px;
            line-height: 1.5;
          }
          
          .estimates-header {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
          
          .estimates-meta {
            justify-content: center;
            flex-wrap: wrap;
          }
          
          .cost-display {
            grid-template-columns: 1fr;
          }
          
          .project-specs {
            grid-template-columns: 1fr;
          }
          
          .estimate-footer {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
          
          .classification-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          
          .analysis-grid {
            grid-template-columns: 1fr;
          }
          
          .lab-section-header h2 {
            font-size: 2rem;
          }
          
          .breakdown-header h2 {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .lab-header {
            padding: 40px 10px;
          }
          
          .header-frame {
            padding: 30px 15px;
          }
          
          .lab-title {
            font-size: 1.8rem;
            letter-spacing: 1px;
            line-height: 1.3;
            word-break: break-word;
          }
          
          .lab-subtitle {
            font-size: 12px;
            line-height: 1.6;
            padding: 0 10px;
          }
          
          .view-controls {
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }
          
          .control-btn {
            width: 100%;
            max-width: 250px;
            justify-content: center;
          }
          
          .classification-grid {
            grid-template-columns: 1fr;
          }
          
          .breakdown-grid {
            grid-template-columns: 1fr;
          }
          
          .included-grid {
            grid-template-columns: 1fr;
          }
          
          .estimates-meta {
            flex-direction: column;
            gap: 10px;
          }
          
          .info-line {
            flex-direction: column;
            gap: 5px;
          }
          
          .analysis-grid {
            grid-template-columns: 1fr;
          }
          
          .analysis-card {
            padding: 20px;
          }
          
          .lab-section-header h2 {
            font-size: 1.5rem;
          }
          
          .breakdown-header h2 {
            font-size: 1.5rem;
          }
          
          .estimates-header h2 {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 375px) {
          .lab-title {
            font-size: 1.5rem;
            letter-spacing: 0.5px;
            line-height: 1.4;
          }
          
          .header-frame {
            padding: 20px 10px;
          }
          
          .container {
            padding: 0 15px;
          }
          
          .estimate-sheet {
            padding: 20px;
          }
          
          .classification-card {
            padding: 20px;
          }
        }
          
      `})]})},L5="/pavan-techno-constructions/assets/a1-sGu83T9_.gif",Y5="/pavan-techno-constructions/assets/a2-CyeHT3-A.gif",U5="/pavan-techno-constructions/assets/a3-CwZT0UDn.gif",_5="/pavan-techno-constructions/assets/a4-Bt8HQudn.gif",H5="/pavan-techno-constructions/assets/g6-Bkoah0kI.jpeg",q5="/pavan-techno-constructions/assets/after2-CC4aGAP5.jpeg",P5=()=>{const[r,o]=y.useState(!1),[u,c]=y.useState(""),[d,f]=y.useState(!1),[h,x]=y.useState(null),[b,p]=y.useState("featured"),[v,z]=y.useState("blueprint"),S=y.useRef(null),M=y.useRef(null),k=y.useRef(null),P=E=>{const H=S.current,re=M.current,ge=k.current;if(!H||!re||!ge)return;const C=H.getBoundingClientRect();let q=E.pageX-C.left;q<0&&(q=0),q>C.width&&(q=C.width),re.style.clipPath=`inset(0 ${C.width-q}px 0 0)`,ge.style.left=`${q}px`},R=()=>f(!0),Y=()=>f(!1),w=E=>{d&&P(E)},I=()=>f(!0),J=()=>f(!1),K=E=>{if(d){const H=E.touches[0];P(H)}};y.useEffect(()=>(window.addEventListener("mouseup",Y),window.addEventListener("mousemove",w),window.addEventListener("touchend",J),window.addEventListener("touchmove",K),()=>{window.removeEventListener("mouseup",Y),window.removeEventListener("mousemove",w),window.removeEventListener("touchend",J),window.removeEventListener("touchmove",K)}),[d]);const[he,B]=y.useState([]),[se,D]=y.useState(!0),[te,Z]=y.useState(null);y.useEffect(()=>{fetch("http://localhost:3001/api/gallery").then(E=>{if(!E.ok)throw new Error("Failed to fetch gallery projects");return E.json()}).then(E=>{B(E),D(!1)}).catch(E=>{Z(E.message),D(!1)})},[]);const oe=[{src:L5,title:"Foundation Work",type:"Process Documentation",year:"2024",area:"Various",duration:"Ongoing"},{src:Y5,title:"Structural Development",type:"Process Documentation",year:"2024",area:"Various",duration:"Ongoing"},{src:U5,title:"Interior Finishing",type:"Process Documentation",year:"2024",area:"Various",duration:"Ongoing"},{src:_5,title:"Final Installation",type:"Process Documentation",year:"2024",area:"Various",duration:"Ongoing"}],we=E=>{c(E),o(!0)},le=()=>{o(!1),c("")},ce=E=>{E.target===E.currentTarget&&le()};return n.jsxs("div",{className:"portfolio-page",children:[n.jsx("div",{className:"blueprint-header",children:n.jsx("div",{className:"container",children:n.jsxs("div",{className:"header-grid",children:[n.jsxs("div",{className:"title-block",children:[n.jsx("div",{className:"blueprint-corner tl"}),n.jsx("div",{className:"blueprint-corner tr"}),n.jsx("div",{className:"blueprint-corner bl"}),n.jsx("div",{className:"blueprint-corner br"}),n.jsx("div",{className:"project-info",children:n.jsxs("div",{className:"info-line",children:[n.jsx("span",{className:"label",children:"PROJECT:"}),n.jsx("span",{className:"value",children:"CONSTRUCTION PORTFOLIO"})]})}),n.jsx("h1",{className:"main-title",children:"PROJECT GALLERY"}),n.jsx("div",{className:"title-underline"})]}),n.jsx("div",{className:"view-controls",children:n.jsxs("div",{className:"control-panel",children:[n.jsx("div",{className:"panel-header",children:"VIEW MODE"}),n.jsxs("div",{className:"mode-buttons",children:[n.jsxs("button",{className:`mode-btn ${v==="blueprint"?"active":""}`,onClick:()=>z("blueprint"),children:[n.jsx("span",{className:"btn-symbol",children:"▦"}),"Blueprint"]}),n.jsxs("button",{className:`mode-btn ${v==="timeline"?"active":""}`,onClick:()=>z("timeline"),children:[n.jsx("span",{className:"btn-symbol",children:"≡"}),"Timeline"]})]})]})})]})})}),n.jsx("div",{className:"technical-section",children:n.jsxs("div",{className:"container",children:[n.jsx("div",{className:"drawing-header",children:n.jsx("h2",{children:"BEFORE & AFTER ANALYSIS"})}),n.jsxs("div",{className:"blueprint-frame",children:[n.jsxs("div",{className:"frame-markers",children:[n.jsx("div",{className:"marker top-left",children:"A"}),n.jsx("div",{className:"marker top-right",children:"B"}),n.jsx("div",{className:"marker bottom-left",children:"C"}),n.jsx("div",{className:"marker bottom-right",children:"D"})]}),n.jsxs("div",{className:"comparison-wrapper",ref:S,children:[n.jsx("img",{src:H5,alt:"Before",className:"before-image",ref:M}),n.jsx("img",{src:q5,alt:"After",className:"after-image"}),n.jsx("div",{className:"technical-slider",ref:k,onMouseDown:R,onTouchStart:I,children:n.jsxs("div",{className:"slider-guide",children:[n.jsx("div",{className:"guide-line"}),n.jsx("div",{className:"slider-handle",children:n.jsxs("div",{className:"handle-cross",children:[n.jsx("div",{className:"cross-h"}),n.jsx("div",{className:"cross-v"})]})})]})}),n.jsxs("div",{className:"technical-label before",children:[n.jsx("div",{className:"label-box",children:"BEFORE"}),n.jsx("div",{className:"dimension-line"})]}),n.jsxs("div",{className:"technical-label after",children:[n.jsx("div",{className:"label-box",children:"AFTER"}),n.jsx("div",{className:"dimension-line"})]})]})]})]})}),n.jsx("div",{className:"gallery-section",children:n.jsx("div",{className:"container",children:n.jsxs(n.Fragment,{children:[v==="blueprint"&&n.jsxs("div",{className:"blueprint-layout",children:[n.jsxs("div",{className:"project-section",children:[n.jsx("div",{className:"section-header",children:n.jsxs("div",{className:"section-title",children:[n.jsx("span",{className:"section-symbol",children:"■"}),"PROJECTS",n.jsxs("span",{className:"project-count",children:["(",he.length,")"]})]})}),n.jsx("div",{className:"section-content expanded",children:se?n.jsx("div",{style:{padding:24},children:"Loading projects..."}):n.jsx("div",{className:"blueprint-grid",children:he.map((E,H)=>n.jsx("div",{className:"blueprint-card",onClick:()=>we(E.image),children:n.jsxs("div",{className:"card-frame",children:[n.jsx("div",{className:"frame-corner tl"}),n.jsx("div",{className:"frame-corner tr"}),n.jsx("div",{className:"frame-corner bl"}),n.jsx("div",{className:"frame-corner br"}),n.jsx("img",{src:E.image,alt:E.title}),n.jsx("div",{className:"card-overlay",children:n.jsxs("div",{className:"project-details",children:[n.jsxs("div",{className:"detail-line",children:[n.jsx("span",{className:"detail-label",children:"TITLE:"}),n.jsx("span",{className:"detail-value",children:E.title})]}),n.jsxs("div",{className:"detail-line",children:[n.jsx("span",{className:"detail-label",children:"TYPE:"}),n.jsx("span",{className:"detail-value",children:E.type})]}),n.jsxs("div",{className:"detail-line",children:[n.jsx("span",{className:"detail-label",children:"YEAR:"}),n.jsx("span",{className:"detail-value",children:E.year})]}),n.jsxs("div",{className:"detail-line",children:[n.jsx("span",{className:"detail-label",children:"LOCATION:"}),n.jsx("span",{className:"detail-value",children:E.location})]}),n.jsxs("div",{className:"detail-line",children:[n.jsx("span",{className:"detail-label",children:"DESCRIPTION:"}),n.jsx("span",{className:"detail-value",children:E.description})]})]})})]})},E._id||H))})})]}),n.jsxs("div",{className:"project-section",children:[n.jsx("div",{className:"section-header",children:n.jsxs("div",{className:"section-title",children:[n.jsx("span",{className:"section-symbol",children:"■"}),"PROCESS",n.jsxs("span",{className:"project-count",children:["(",oe.length,")"]})]})}),n.jsx("div",{className:"section-content expanded",children:n.jsx("div",{className:"blueprint-grid",children:oe.map((E,H)=>n.jsx("div",{className:"blueprint-card",onClick:()=>we(E.src),children:n.jsxs("div",{className:"card-frame",children:[n.jsx("div",{className:"frame-corner tl"}),n.jsx("div",{className:"frame-corner tr"}),n.jsx("div",{className:"frame-corner bl"}),n.jsx("div",{className:"frame-corner br"}),n.jsx("img",{src:E.src,alt:E.title}),n.jsx("div",{className:"card-overlay",children:n.jsxs("div",{className:"project-details",children:[n.jsxs("div",{className:"detail-line",children:[n.jsx("span",{className:"detail-label",children:"TITLE:"}),n.jsx("span",{className:"detail-value",children:E.title})]}),n.jsxs("div",{className:"detail-line",children:[n.jsx("span",{className:"detail-label",children:"TYPE:"}),n.jsx("span",{className:"detail-value",children:E.type})]}),n.jsxs("div",{className:"detail-line",children:[n.jsx("span",{className:"detail-label",children:"YEAR:"}),n.jsx("span",{className:"detail-value",children:E.year})]})]})})]})},H))})})]})]}),v==="timeline"&&n.jsx("div",{className:"timeline-layout",children:n.jsxs("div",{className:"timeline-axis",children:[n.jsx("div",{className:"axis-line"}),he.map((E,H)=>n.jsxs("div",{className:`timeline-item ${H%2===0?"left":"right"}`,onClick:()=>we(E.image),children:[n.jsxs("div",{className:"timeline-marker",children:[n.jsx("div",{className:"marker-dot"}),n.jsx("div",{className:"marker-line"})]}),n.jsxs("div",{className:"timeline-card",children:[n.jsxs("div",{className:"card-header",children:[n.jsx("span",{className:"card-year",children:E.year}),n.jsx("span",{className:"card-type",children:E.type})]}),n.jsx("img",{src:E.image,alt:E.title}),n.jsxs("div",{className:"card-info",children:[n.jsx("h3",{children:E.title}),n.jsxs("div",{className:"card-specs",children:[n.jsx("span",{children:E.location}),n.jsx("span",{children:E.description})]})]})]})]},E._id||H))]})})]})})}),r&&n.jsx("div",{className:"technical-modal",onClick:ce,children:n.jsxs("div",{className:"modal-frame",children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("div",{className:"modal-title",children:"PROJECT DETAIL VIEW"}),n.jsx("button",{className:"modal-close",onClick:le,children:n.jsx("span",{className:"close-symbol",children:"×"})})]}),n.jsx("div",{className:"modal-content",children:n.jsx("img",{src:u,alt:"Project Detail"})}),n.jsx("div",{className:"modal-footer",children:n.jsx("div",{className:"footer-line"})})]})}),n.jsx("style",{jsx:!0,children:`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .portfolio-page {
          font-family: 'Roboto Mono', 'Courier New', monospace;
          background: #f8f9fa;
          min-height: 100vh;
          color: #2D3748;
          padding-top: 80px; /* Added padding to prevent navbar overlap */
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Blueprint Header */
        .blueprint-header {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 40px 0; /* Reduced from 60px to 40px */
          border-bottom: 2px solid #B79C5C;
          position: relative;
          margin-top: 20px; /* Added margin-top for additional spacing */
        }

        .blueprint-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 20px 20px, #B79C5C 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.1;
        }

        .header-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
          align-items: start;
        }

        .title-block {
          position: relative;
          background: white;
          padding: 40px;
          border: 2px solid #2D3748;
        }

        .blueprint-corner {
          position: absolute;
          width: 20px;
          height: 20px;
          border: 2px solid #B79C5C;
        }

        .blueprint-corner.tl { top: -2px; left: -2px; border-right: none; border-bottom: none; }
        .blueprint-corner.tr { top: -2px; right: -2px; border-left: none; border-bottom: none; }
        .blueprint-corner.bl { bottom: -2px; left: -2px; border-right: none; border-top: none; }
        .blueprint-corner.br { bottom: -2px; right: -2px; border-left: none; border-top: none; }

        .project-info {
          margin-bottom: 30px;
        }

        .info-line {
          display: flex;
          margin-bottom: 8px;
          font-size: 12px;
          letter-spacing: 1px;
        }

        .label {
          width: 80px;
          font-weight: 700;
          color: #B79C5C;
        }

        .value {
          color: #2D3748;
        }

        .main-title {
          font-size: 3rem;
          font-weight: 900;
          letter-spacing: 4px;
          color: #2D3748;
          margin-bottom: 15px;
        }

        .title-underline {
          width: 100px;
          height: 4px;
          background: #B79C5C;
        }

        .view-controls {
          display: flex;
          justify-content: center;
        }

        .control-panel {
          background: white;
          border: 2px solid #2D3748;
          padding: 25px;
          width: 100%;
        }

        .panel-header {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #B79C5C;
          margin-bottom: 20px;
          text-align: center;
        }

        .mode-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .mode-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border: 1px solid #2D3748;
          background: transparent;
          color: #2D3748;
          cursor: pointer;
          font-family: inherit;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: all 0.2s ease;
        }

        .mode-btn.active {
          background: #2D3748;
          color: white;
        }

        .mode-btn:hover:not(.active) {
          background: #B79C5C;
          color: white;
          border-color: #B79C5C;
        }

        .btn-symbol {
          font-size: 14px;
        }

        /* Technical Section */
        .technical-section {
          padding: 80px 0;
          background: white;
        }

        .drawing-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 1px solid #2D3748;
        }

        .drawing-header h2 {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: #2D3748;
        }

        .drawing-number {
          font-size: 12px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 1px;
        }

        .blueprint-frame {
          position: relative;
          background: white;
          border: 2px solid #2D3748;
          padding: 30px;
        }

        .frame-markers {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .marker {
          position: absolute;
          width: 20px;
          height: 20px;
          background: #B79C5C;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
        }

        .marker.top-left { top: -10px; left: -10px; }
        .marker.top-right { top: -10px; right: -10px; }
        .marker.bottom-left { bottom: -10px; left: -10px; }
        .marker.bottom-right { bottom: -10px; right: -10px; }

        .comparison-wrapper {
          position: relative;
          height: 500px;
          overflow: hidden;
        }

        .comparison-wrapper img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .before-image {
          z-index: 2;
          clip-path: inset(0 50% 0 0);
        }

        .after-image {
          z-index: 1;
        }

        .technical-slider {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 2px;
          cursor: ew-resize;
          z-index: 3;
          transform: translateX(-50%);
        }

        .slider-guide {
          position: relative;
          height: 100%;
        }

        .guide-line {
          width: 2px;
          height: 100%;
          background: #B79C5C;
        }

        .slider-handle {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 30px;
          height: 30px;
          background: white;
          border: 2px solid #B79C5C;
          transform: translate(-50%, -50%);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .handle-cross {
          position: relative;
          width: 12px;
          height: 12px;
        }

        .cross-h, .cross-v {
          position: absolute;
          background: #B79C5C;
        }

        .cross-h {
          width: 12px;
          height: 2px;
          top: 5px;
        }

        .cross-v {
          width: 2px;
          height: 12px;
          left: 5px;
        }

        .technical-label {
          position: absolute;
          top: 20px;
          z-index: 4;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .label-box {
          background: #2D3748;
          color: white;
          padding: 8px 16px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .dimension-line {
          width: 40px;
          height: 2px;
          background: #B79C5C;
        }

        .technical-label.before {
          left: 20px;
        }

        .technical-label.after {
          right: 20px;
          flex-direction: row-reverse;
        }

        /* Gallery Section */
        .gallery-section {
          padding: 80px 0;
          background: #f8f9fa;
        }

        /* Blueprint Layout */
        .blueprint-layout {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .project-section {
          background: white;
          border: 2px solid #2D3748;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 30px;
          background: #2D3748;
          color: white;
          cursor: pointer;
          user-select: none;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .section-symbol {
          color: #B79C5C;
        }

        .project-count {
          color: #B79C5C;
          font-size: 12px;
        }

        .toggle-symbol {
          font-size: 20px;
          font-weight: 700;
          transition: transform 0.3s ease;
        }

        .toggle-symbol.expanded {
          transform: rotate(45deg);
        }

        .section-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
        }

        .section-content.expanded {
          max-height: 2000px;
        }

        .blueprint-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          padding: 30px;
        }

        .blueprint-card {
          position: relative;
          cursor: pointer;
          background: white;
        }

        .card-frame {
          position: relative;
          border: 2px solid #2D3748;
          overflow: hidden;
        }

        .frame-corner {
          position: absolute;
          width: 15px;
          height: 15px;
          border: 2px solid #B79C5C;
          z-index: 2;
        }

        .frame-corner.tl { top: -2px; left: -2px; border-right: none; border-bottom: none; }
        .frame-corner.tr { top: -2px; right: -2px; border-left: none; border-bottom: none; }
        .frame-corner.bl { bottom: -2px; left: -2px; border-right: none; border-top: none; }
        .frame-corner.br { bottom: -2px; right: -2px; border-left: none; border-top: none; }

        .blueprint-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .blueprint-card:hover img {
          transform: scale(1.05);
        }

        .card-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(45, 55, 72, 0.95));
          color: white;
          padding: 30px 20px 20px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .blueprint-card:hover .card-overlay {
          opacity: 1;
        }

        .project-details {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .detail-line {
          display: flex;
          font-size: 11px;
          letter-spacing: 1px;
        }

        .detail-label {
          width: 50px;
          font-weight: 700;
          color: #B79C5C;
        }

        .detail-value {
          flex: 1;
        }

        /* Hexagon Layout */
        .hexagon-layout,
        .hex-grid,
        .hex-item,
        .hexagon,
        .hex-inner,
        .hex-overlay,
        .hex-content,
        .hex-number,
        .hex-title {
          display: none;
        }

        /* Timeline Layout */
        .timeline-layout {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .timeline-axis {
          position: relative;
          padding: 40px 0;
        }

        .axis-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 4px;
          background: #B79C5C;
          transform: translateX(-50%);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 60px;
          display: flex;
          align-items: center;
        }

        .timeline-item.left {
          justify-content: flex-end;
          padding-right: 60px;
        }

        .timeline-item.right {
          justify-content: flex-start;
          padding-left: 60px;
        }

        .timeline-marker {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .marker-dot {
          width: 16px;
          height: 16px;
          background: #2D3748;
          border: 4px solid #B79C5C;
          border-radius: 50%;
          z-index: 2;
        }

        .marker-line {
          width: 2px;
          height: 40px;
          background: #2D3748;
        }

        .timeline-card {
          background: white;
          border: 2px solid #2D3748;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
          max-width: 300px;
        }

        .timeline-card:hover {
          border-color: #B79C5C;
          transform: scale(1.02);
        }

        .card-header {
          background: #2D3748;
          color: white;
          padding: 12px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .card-year {
          font-weight: 700;
          font-size: 14px;
        }

        .card-type {
          font-size: 10px;
          color: #B79C5C;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .timeline-card img {
          width: 100%;
          height: 150px;
          object-fit: cover;
        }

        .card-info {
          padding: 16px;
        }

        .card-info h3 {
          font-size: 14px;
          font-weight: 600;
          color: #2D3748;
          margin-bottom: 8px;
        }

        .card-specs {
          display: flex;
          gap: 15px;
        }

        .card-specs span {
          font-size: 10px;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Technical Modal */
        .technical-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(45, 55, 72, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal-frame {
          background: white;
          border: 3px solid #2D3748;
          max-width: 90vw;
          max-height: 90vh;
          position: relative;
        }

        .modal-header {
          background: #2D3748;
          color: white;
          padding: 15px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .modal-title {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .modal-close {
          background: #B79C5C;
          color: white;
          border: none;
          width: 30px;
          height: 30px;
          cursor: pointer;
          font-size: 16px;
          font-weight: 700;
        }

        .modal-close:hover {
          background: white;
          color: #B79C5C;
        }

        .modal-content img {
          max-width: 100%;
          max-height: 70vh;
          display: block;
        }

        .modal-footer {
          padding: 15px 20px;
        }

        .footer-line {
          height: 2px;
          background: #B79C5C;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .header-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .main-title {
            font-size: 2rem;
            letter-spacing: 2px;
          }
          
          .mode-buttons {
            flex-direction: row;
            justify-content: center;
          }
          
          .comparison-wrapper {
            height: 300px;
          }
          
          .blueprint-grid {
            grid-template-columns: 1fr;
          }
          
          .hex-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .timeline-item {
            flex-direction: column;
            padding: 0;
          }
          
          .timeline-item.left,
          .timeline-item.right {
            padding: 0;
          }
          
          .axis-line {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .main-title {
            font-size: 1.5rem;
          }
          
          .hex-grid {
            grid-template-columns: 1fr;
          }
          
          .hexagon {
            width: 150px;
            height: 130px;
          }
          
          .timeline-card {
            max-width: 100%;
          }
        }
          /* Responsive Design */
        @media (max-width: 768px) {
          .header-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .main-title {
            font-size: 2rem;
            letter-spacing: 2px;
          }
          
          .control-panel {
            padding: 20px 15px;
          }
          
          .mode-buttons {
            flex-direction: row;
            justify-content: center;
            gap: 8px;
          }
          
          .mode-btn {
            padding: 10px 12px;
            font-size: 10px;
            gap: 8px;
            flex: 1;
            justify-content: center;
            min-width: 0;
          }
          
          .btn-symbol {
            font-size: 12px;
          }
      `})]})},X5=()=>{const[r,o]=y.useState({name:"",email:"",phone:"",package:"",message:""}),[u,c]=y.useState({message:"",isError:!1,isSubmitting:!1}),d=y.useRef(null),f=y.useRef(null);y.useEffect(()=>{const b=new IntersectionObserver(p=>{p.forEach(v=>{v.isIntersecting&&(v.target.classList.add("section-visible"),f.current&&f.current.classList.add("heading-visible"))})},{threshold:.2});return d.current&&b.observe(d.current),()=>{d.current&&b.unobserve(d.current)}},[]);const h=b=>{const{name:p,value:v}=b.target;o(z=>({...z,[p]:v}))},x=async()=>{if(!r.name||!r.email||!r.phone||!r.package||!r.message){c({message:"Please fill in all required fields.",isError:!0,isSubmitting:!1}),setTimeout(()=>{c({message:"",isError:!1,isSubmitting:!1})},3e3);return}c({message:"",isError:!1,isSubmitting:!0});try{if(!(await fetch("http://localhost:3001/api/data",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).ok)throw new Error("Failed to send data");c({message:"Thank you! Your message has been sent successfully.",isError:!1,isSubmitting:!1}),o({name:"",email:"",phone:"",package:"",message:""}),setTimeout(()=>{c({message:"",isError:!1,isSubmitting:!1})},5e3)}catch{c({message:"Failed to send message. Please try again later.",isError:!0,isSubmitting:!1}),setTimeout(()=>{c({message:"",isError:!1,isSubmitting:!1})},5e3)}};return n.jsxs(n.Fragment,{children:[n.jsxs("section",{className:"contact-page",ref:d,children:[n.jsxs("div",{className:"animated-background",children:[n.jsx("div",{className:"floating-shape circle-1"}),n.jsx("div",{className:"floating-shape circle-2"}),n.jsx("div",{className:"floating-shape circle-3"}),n.jsx("div",{className:"floating-shape square-1"}),n.jsx("div",{className:"floating-shape triangle-1"})]}),n.jsxs("div",{className:"container",children:[n.jsx("div",{className:"section-title",children:n.jsxs("div",{className:"heading-container",ref:f,children:[n.jsx("h1",{className:"main-heading",children:"GET IN TOUCH"}),n.jsx("div",{className:"heading-underline"}),n.jsx("p",{className:"heading-subtitle",children:"We'd Love to Hear From You"})]})}),n.jsx("div",{className:"form-wrapper",children:n.jsxs("div",{className:"contact-form-container",children:[n.jsxs("div",{className:"form-header",children:[n.jsx("h3",{children:"Send us a Message"}),n.jsx("p",{children:"Let's discuss your project requirements"})]}),n.jsxs("div",{className:"contact-form",children:[n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"name",children:"Full Name"}),n.jsx("input",{type:"text",name:"name",id:"name",placeholder:"Enter your full name",value:r.name,onChange:h})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"email",children:"Email Address"}),n.jsx("input",{type:"email",name:"email",id:"email",placeholder:"Enter your email address",value:r.email,onChange:h})]})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"phone",children:"Phone Number"}),n.jsx("input",{type:"tel",name:"phone",id:"phone",placeholder:"Enter your phone number",value:r.phone,onChange:h})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"package",children:"Select Package"}),n.jsxs("select",{name:"package",id:"package",value:r.package,onChange:h,children:[n.jsx("option",{value:"",disabled:!0,children:"Choose a package"}),n.jsx("option",{value:"basic",children:"Basic Package"}),n.jsx("option",{value:"premium",children:"Premium Package"}),n.jsx("option",{value:"luxury",children:"Luxury Package"}),n.jsx("option",{value:"custom",children:"Custom Project"})]})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"message",children:"Your Message"}),n.jsx("textarea",{name:"message",id:"message",placeholder:"Tell us about your project requirements",rows:"5",value:r.message,onChange:h})]}),n.jsx("div",{className:"form-status",children:u.message&&n.jsx("div",{className:`status-message ${u.isError?"error":"success"}`,children:u.message})}),n.jsxs("button",{onClick:x,className:"btn btn-primary",disabled:u.isSubmitting,children:[n.jsx("span",{children:u.isSubmitting?"Sending...":"Send Message"}),n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:n.jsx("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"})})]})]})]})})]})]}),n.jsx("style",{jsx:!0,children:`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes titleSlideUp {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes slideUp {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .contact-page {
          padding: 8rem 0 6rem;
          background-color: #000000;
          color: #ffffff;
          overflow: hidden;
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .animated-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .floating-shape {
          position: absolute;
          opacity: 0.1;
        }

        .circle-1 {
          width: 120px;
          height: 120px;
          background: linear-gradient(45deg, #007bff, #0056b3);
          border-radius: 50%;
          top: 10%;
          left: 10%;
          animation: float 8s ease-in-out infinite;
        }

        .circle-2 {
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, #B79C5C, #8b7355);
          border-radius: 50%;
          top: 70%;
          right: 15%;
          animation: float 6s ease-in-out infinite reverse;
        }

        .circle-3 {
          width: 60px;
          height: 60px;
          background: linear-gradient(45deg, #007bff, #4dabf7);
          border-radius: 50%;
          bottom: 30%;
          left: 20%;
          animation: float 7s ease-in-out infinite;
        }

        .square-1 {
          width: 70px;
          height: 70px;
          background: linear-gradient(45deg, #B79C5C, #007bff);
          top: 40%;
          right: 10%;
          animation: rotate 10s linear infinite;
        }

        .triangle-1 {
          width: 0;
          height: 0;
          border-left: 40px solid transparent;
          border-right: 40px solid transparent;
          border-bottom: 70px solid rgba(183, 156, 92, 0.3);
          top: 20%;
          right: 30%;
          animation: float 5s ease-in-out infinite;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
          width: 100%;
        }
        
        .section-title {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .heading-container {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease;
        }
        
        .section-visible .heading-container {
          animation: titleSlideUp 0.8s forwards 0.3s;
        }
        
        .main-heading {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          letter-spacing: 3px;
          margin-bottom: 1.5rem;
          color: #ffffff;
          text-transform: uppercase;
          position: relative;
          background: linear-gradient(135deg, #007bff, #B79C5C);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .heading-underline {
          height: 4px;
          width: 0;
          background: linear-gradient(90deg, transparent, #007bff, #B79C5C, transparent);
          margin: 0 auto;
          transition: width 1.5s ease 1s;
          border-radius: 2px;
        }
        
        .heading-visible .heading-underline {
          width: 120px;
        }
        
        .heading-subtitle {
          margin-top: 1.5rem;
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          color: #B79C5C;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease 1.5s;
          font-weight: 300;
          letter-spacing: 1px;
        }
        
        .heading-visible .heading-subtitle {
          opacity: 0.9;
          transform: translateY(0);
        }

        .form-wrapper {
          display: flex;
          justify-content: center;
          opacity: 0;
        }

        .section-visible .form-wrapper {
          animation: fadeIn 1s forwards 0.5s;
        }

        .contact-form-container {
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.05), rgba(183, 156, 92, 0.05));
          padding: 3rem;
          border-radius: 20px;
          border: 1px solid rgba(183, 156, 92, 0.2);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(20px);
          transform: translateY(30px);
          opacity: 0;
          max-width: 700px;
          width: 100%;
        }

        .section-visible .contact-form-container {
          animation: slideUp 0.8s forwards 0.8s;
        }

        .form-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .form-header h3 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #007bff;
          margin-bottom: 0.5rem;
          letter-spacing: 1px;
        }

        .form-header p {
          color: #B79C5C;
          font-size: 1rem;
          opacity: 0.9;
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        
        .form-group {
          position: relative;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.8rem;
          color: #B79C5C;
          font-weight: 600;
          font-size: 0.95rem;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        
        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 1rem 1.2rem;
          font-size: 1rem;
          background: rgba(255, 255, 255, 0.95);
          border: 2px solid rgba(183, 156, 92, 0.2);
          border-radius: 10px;
          color: #000;
          transition: all 0.3s ease;
          font-family: inherit;
        }
        
        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          background: rgba(255, 255, 255, 1);
          border-color: #007bff;
          box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.1);
          transform: translateY(-2px);
        }
        
        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(0, 0, 0, 0.5);
        }
        
        .form-group select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23007bff' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          padding-right: 3rem;
        }
        
        .form-status {
          min-height: 40px;
          display: flex;
          align-items: center;
        }
        
        .status-message {
          padding: 1rem 1.5rem;
          border-radius: 10px;
          font-size: 0.95rem;
          width: 100%;
          text-align: center;
          font-weight: 500;
        }
        
        .status-message.error {
          background: rgba(220, 53, 69, 0.1);
          color: #dc3545;
          border: 1px solid rgba(220, 53, 69, 0.3);
        }
        
        .status-message.success {
          background: rgba(40, 167, 69, 0.1);
          color: #28a745;
          border: 1px solid rgba(40, 167, 69, 0.3);
        }
        
        .btn-primary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          padding: 1.2rem 2.5rem;
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: #ffffff;
          border: none;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 1px;
          text-transform: uppercase;
          position: relative;
          overflow: hidden;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #B79C5C, #8b7355);
          transition: left 0.3s ease;
          z-index: -1;
        }
        
        .btn-primary:hover::before {
          left: 0;
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(0, 123, 255, 0.4);
        }
        
        .btn-primary:disabled {
          background: #6c757d;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .btn-primary:disabled::before {
          display: none;
        }

        /* Mobile Responsiveness */
        @media (max-width: 992px) {
          .form-row {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .main-heading {
            font-size: 2.5rem;
          }
        }
        
        @media (max-width: 768px) {
          .contact-page {
            padding: 6rem 0 4rem;
          }

          .container {
            padding: 0 1rem;
          }

          .contact-form-container {
            padding: 2rem;
          }
          
          .main-heading {
            font-size: 2rem;
            letter-spacing: 2px;
          }

          .heading-subtitle {
            font-size: 1.1rem;
          }
        }
        
        @media (max-width: 576px) {
          .contact-page {
            padding: 5rem 0 3rem;
          }

          .contact-form-container {
            padding: 1.5rem;
          }
          
          .main-heading {
            font-size: 1.8rem;
          }

          .form-header h3 {
            font-size: 1.5rem;
          }

          .btn-primary {
            padding: 1rem 2rem;
            font-size: 1rem;
          }

          /* Disable complex animations on mobile */
          .floating-shape {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 0.5rem;
          }

          .contact-form-container {
            padding: 1rem;
          }

          .main-heading {
            font-size: 1.6rem;
            letter-spacing: 1px;
          }
        }
      `})]})},F5="admin",I5="pavantechno2024",V5=()=>{const[r,o]=y.useState([]),[u,c]=y.useState([]),[d,f]=y.useState(!0),[h,x]=y.useState(null),[b,p]=y.useState(null),[v,z]=y.useState(()=>!!localStorage.getItem("adminLoggedIn")),[S,M]=y.useState(null),[k,P]=y.useState(""),[R,Y]=y.useState(""),[w,I]=y.useState(!1),[J,K]=y.useState(null),[he,B]=y.useState(null),[se,D]=y.useState(null),[te,Z]=y.useState({title:"",description:"",type:"",year:"",location:"",image:null}),[oe,we]=y.useState({title:"",description:"",type:"",year:"",location:"",image:null}),[le,ce]=y.useState(null),[E,H]=y.useState(null),re=()=>{fetch("/api/gallery").then(ae=>ae.json()).then(ae=>{o(ae),f(!1)}).catch(ae=>{x("Failed to fetch project data"),f(!1)})};y.useEffect(()=>{v&&re()},[v]);const ge=()=>{fetch("/api/assets").then(ae=>ae.json()).then(ae=>c(ae)).catch(()=>p("Failed to fetch assets"))};y.useEffect(()=>{v&&ge()},[v]);const C=async ae=>{if(window.confirm("Are you sure you want to delete this project?"))try{(await fetch(`/api/gallery/${ae}`,{method:"DELETE"})).ok?o(r.filter(De=>De._id!==ae)):alert("Failed to delete project")}catch{alert("Error deleting project")}},q=ae=>{const xe=r.find(De=>De._id===ae);D(ae),Z({title:xe.title||"",description:xe.description||"",type:xe.type||"",year:xe.year||"",location:xe.location||"",image:null})},V=async ae=>{ae.preventDefault();try{const xe=new FormData;xe.append("title",te.title),xe.append("description",te.description),xe.append("type",te.type),xe.append("year",te.year),xe.append("location",te.location),te.image&&xe.append("image",te.image),(await fetch(`/api/gallery/${se}`,{method:"PUT",body:xe})).ok?(re(),D(null)):alert("Failed to update project")}catch{alert("Error updating project")}},$=ae=>{const{name:xe,value:De,files:Oe}=ae.target;Z(xe==="image"?{...te,image:Oe[0]}:{...te,[xe]:De})},A=ae=>{const{name:xe,value:De,files:Oe}=ae.target;we(xe==="image"?{...oe,image:Oe[0]}:{...oe,[xe]:De})},ie=async ae=>{ae.preventDefault(),ce(null),H(null);const xe=new FormData;xe.append("title",oe.title),xe.append("description",oe.description),xe.append("type",oe.type),xe.append("year",oe.year),xe.append("location",oe.location),oe.image&&xe.append("image",oe.image);try{(await fetch("/api/gallery",{method:"POST",body:xe})).ok?(we({title:"",description:"",type:"",year:"",location:"",image:null}),H("Project uploaded successfully!"),re()):ce("Failed to upload project")}catch{ce("Failed to upload project")}},ne=ae=>{ae.preventDefault(),k===F5&&R===I5?(z(!0),localStorage.setItem("adminLoggedIn","1"),M(null)):M("Invalid credentials")},Ce=()=>{z(!1),localStorage.removeItem("adminLoggedIn")},me=async ae=>{ae.preventDefault(),I(!0),K(null),B(null);const xe=ae.target.asset.files[0];if(!xe){K("No file selected"),I(!1);return}const De=new FormData;De.append("asset",xe);try{const Oe=await fetch("/api/assets/upload",{method:"POST",body:De}),F=await Oe.json();Oe.ok?(B("File uploaded successfully!"),ge()):K(F.error||"Upload failed")}catch{K("Upload failed")}I(!1),ae.target.reset()};return v?d?n.jsx("div",{children:"Loading..."}):h?n.jsx("div",{children:h}):n.jsxs("div",{style:{padding:24},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("h2",{children:"Admin Project Management"}),n.jsx("button",{onClick:Ce,children:"Logout"})]}),n.jsxs("div",{style:{marginBottom:32},children:[n.jsx("h3",{children:"Upload New Asset (Frontend)"}),n.jsxs("form",{onSubmit:me,children:[n.jsx("input",{type:"file",name:"asset",accept:"image/*",required:!0}),n.jsx("button",{type:"submit",disabled:w,style:{marginLeft:8},children:w?"Uploading...":"Upload"})]}),J&&n.jsx("div",{style:{color:"red"},children:J}),he&&n.jsx("div",{style:{color:"green"},children:he})]}),n.jsxs("div",{style:{marginBottom:32},children:[n.jsx("h3",{children:"Assets in src/assets (Frontend)"}),b&&n.jsx("div",{style:{color:"red"},children:b}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:16},children:u.map(ae=>n.jsxs("div",{style:{textAlign:"center"},children:[n.jsx("img",{src:require(`../assets/${ae.filename}`),alt:ae.filename,width:100,style:{border:"1px solid #ccc",borderRadius:4}}),n.jsx("div",{style:{marginTop:8},children:ae.filename})]},ae.filename))})]}),n.jsxs("div",{style:{margin:"32px 0",padding:24,border:"1px solid #ddd",borderRadius:8,background:"#fafbfc",maxWidth:600},children:[n.jsx("h3",{style:{marginBottom:16},children:"Add New Project to Gallery"}),n.jsxs("form",{onSubmit:ie,style:{display:"flex",flexDirection:"column",gap:14},children:[n.jsxs("div",{style:{display:"flex",gap:16},children:[n.jsxs("div",{style:{flex:1},children:[n.jsxs("label",{htmlFor:"project-title",style:{fontWeight:500},children:["Title",n.jsx("span",{style:{color:"red"},children:" *"})]}),n.jsx("input",{id:"project-title",name:"title",value:oe.title,onChange:A,placeholder:"Project Title",required:!0,style:{width:"100%",padding:6}})]}),n.jsxs("div",{style:{flex:1},children:[n.jsx("label",{htmlFor:"project-type",style:{fontWeight:500},children:"Type"}),n.jsx("input",{id:"project-type",name:"type",value:oe.type,onChange:A,placeholder:"e.g. Residential, Commercial",style:{width:"100%",padding:6}})]})]}),n.jsxs("div",{style:{display:"flex",gap:16},children:[n.jsxs("div",{style:{flex:1},children:[n.jsx("label",{htmlFor:"project-year",style:{fontWeight:500},children:"Year"}),n.jsx("input",{id:"project-year",name:"year",value:oe.year,onChange:A,placeholder:"e.g. 2024",style:{width:"100%",padding:6}})]}),n.jsxs("div",{style:{flex:1},children:[n.jsx("label",{htmlFor:"project-location",style:{fontWeight:500},children:"Location"}),n.jsx("input",{id:"project-location",name:"location",value:oe.location,onChange:A,placeholder:"City, State",style:{width:"100%",padding:6}})]})]}),n.jsxs("div",{children:[n.jsxs("label",{htmlFor:"project-description",style:{fontWeight:500},children:["Description",n.jsx("span",{style:{color:"red"},children:" *"})]}),n.jsx("textarea",{id:"project-description",name:"description",value:oe.description,onChange:A,placeholder:"Short description of the project",required:!0,rows:2,style:{width:"100%",padding:6,resize:"vertical"}})]}),n.jsxs("div",{children:[n.jsxs("label",{htmlFor:"project-image",style:{fontWeight:500},children:["Project Image",n.jsx("span",{style:{color:"red"},children:" *"})]}),n.jsx("input",{id:"project-image",name:"image",type:"file",accept:"image/*",onChange:A,required:!0,style:{display:"block",marginTop:4}}),n.jsx("small",{style:{color:"#555"},children:"Upload a clear image (JPG, PNG, etc). Max size: 5MB."})]}),n.jsx("button",{type:"submit",style:{marginTop:8,padding:"8px 0",background:"#2c3e50",color:"white",border:"none",borderRadius:4,fontWeight:600,fontSize:16,cursor:"pointer"},children:d?"Uploading...":"Add Project"})]}),le&&n.jsx("div",{style:{color:"red",marginTop:8},children:le}),E&&n.jsx("div",{style:{color:"green",marginTop:8},children:E})]}),n.jsxs("table",{border:"1",cellPadding:"8",cellSpacing:"0",style:{width:"100%",marginTop:16},children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Image"}),n.jsx("th",{children:"Title"}),n.jsx("th",{children:"Description"}),n.jsx("th",{children:"Type"}),n.jsx("th",{children:"Year"}),n.jsx("th",{children:"Location"}),n.jsx("th",{children:"Actions"})]})}),n.jsx("tbody",{children:r.map(ae=>se===ae._id?n.jsx("tr",{style:{background:"#f9f9f9"},children:n.jsx("td",{colSpan:7,children:n.jsxs("form",{onSubmit:V,style:{display:"flex",gap:8,alignItems:"center"},children:[n.jsx("input",{name:"title",value:te.title,onChange:$,placeholder:"Title",required:!0}),n.jsx("input",{name:"description",value:te.description,onChange:$,placeholder:"Description",required:!0}),n.jsx("input",{name:"type",value:te.type,onChange:$,placeholder:"Type"}),n.jsx("input",{name:"year",value:te.year,onChange:$,placeholder:"Year"}),n.jsx("input",{name:"location",value:te.location,onChange:$,placeholder:"Location"}),n.jsx("input",{name:"image",type:"file",accept:"image/*",onChange:$}),n.jsx("button",{type:"submit",children:"Save"}),n.jsx("button",{type:"button",onClick:()=>D(null),style:{color:"red"},children:"Cancel"})]})})},ae._id):n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("img",{src:ae.image,alt:ae.title,width:100})}),n.jsx("td",{children:ae.title}),n.jsx("td",{children:ae.description}),n.jsx("td",{children:ae.type}),n.jsx("td",{children:ae.year}),n.jsx("td",{children:ae.location}),n.jsxs("td",{children:[n.jsx("button",{onClick:()=>q(ae._id),children:"Edit"}),n.jsx("button",{onClick:()=>C(ae._id),style:{marginLeft:8,color:"red"},children:"Delete"})]})]},ae._id))})]})]}):n.jsxs("div",{style:{padding:24,maxWidth:400,margin:"40px auto",border:"1px solid #ccc",borderRadius:8},children:[n.jsx("h2",{children:"Admin Login"}),n.jsxs("form",{onSubmit:ne,children:[n.jsx("div",{style:{marginBottom:12},children:n.jsx("input",{type:"text",placeholder:"Username",value:k,onChange:ae=>P(ae.target.value),required:!0})}),n.jsx("div",{style:{marginBottom:12},children:n.jsx("input",{type:"password",placeholder:"Password",value:R,onChange:ae=>Y(ae.target.value),required:!0})}),n.jsx("button",{type:"submit",children:"Login"}),S&&n.jsx("div",{style:{color:"red",marginTop:8},children:S})]})]})},G5=()=>{const[r,o]=y.useState([]),[u,c]=y.useState(!0),[d,f]=y.useState(null);return y.useEffect(()=>{fetch("http://localhost:3001/api/data").then(h=>{if(!h.ok)throw new Error("Network response was not ok");return h.json()}).then(h=>{o(h.data||[]),c(!1)}).catch(h=>{f(h.message),c(!1)})},[]),u?n.jsx("div",{children:"Loading..."}):d?n.jsxs("div",{children:["Error: ",d]}):n.jsxs("div",{style:{padding:"2rem"},children:[n.jsx("h2",{children:"All Saved Data"}),r.length===0?n.jsx("p",{children:"No data found."}):n.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[n.jsx("thead",{children:n.jsx("tr",{children:Object.keys(r[0]).map(h=>n.jsx("th",{style:{border:"1px solid #ccc",padding:"8px"},children:h},h))})}),n.jsx("tbody",{children:r.map((h,x)=>n.jsx("tr",{children:Object.values(h).map((b,p)=>n.jsx("td",{style:{border:"1px solid #ccc",padding:"8px"},children:b.toString()},p))},x))})]})]})};function Q5(){const[r,o]=y.useState(!1),[u,c]=y.useState(!1);y.useEffect(()=>{const h=()=>{window.scrollY>100?c(!0):c(!1)};return window.addEventListener("scroll",h),()=>{window.removeEventListener("scroll",h)}},[]);const d=()=>{o(!0)},f=()=>{o(!1)};return n.jsx(v2,{children:n.jsxs("div",{className:"app",children:[n.jsx(r5,{scrolled:u}),n.jsxs(Zx,{children:[n.jsx(Xt,{path:"/",element:n.jsxs(n.Fragment,{children:[n.jsx(xp,{openPopup:d}),n.jsx(Uc,{openPopup:d}),n.jsx(yp,{}),n.jsx(vp,{openPopup:d}),n.jsx(bp,{openPopup:d}),n.jsx(_c,{openPopup:d}),n.jsx(Hc,{}),n.jsx(qc,{}),n.jsx(Xc,{}),n.jsx(Tp,{}),n.jsx(kp,{}),n.jsx(zp,{}),n.jsx(en,{})]})}),n.jsx(Xt,{path:"/about",element:n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{paddingTop:"70px"},children:[n.jsx(_c,{openPopup:d}),n.jsx(Uc,{openPopup:d}),n.jsx(qc,{}),n.jsx(Xc,{}),n.jsx(Hc,{})]}),n.jsx(en,{})]})}),n.jsx(Xt,{path:"/services",element:n.jsxs(n.Fragment,{children:[n.jsx(O5,{openPopup:d}),n.jsx(en,{})]})}),n.jsx(Xt,{path:"/pricing",element:n.jsxs(n.Fragment,{children:[n.jsx(B5,{openPopup:d}),n.jsx(en,{})]})}),n.jsx(Xt,{path:"/gallery",element:n.jsxs(n.Fragment,{children:[n.jsx(P5,{}),n.jsx(en,{})]})}),n.jsx(Xt,{path:"/data-list",element:n.jsx(G5,{})}),n.jsx(Xt,{path:"/contact",element:n.jsxs(n.Fragment,{children:[n.jsx(X5,{}),n.jsx(en,{})]})}),n.jsx(Xt,{path:"/admin",element:n.jsx(E5,{})}),n.jsx(Xt,{path:"/admin/projects",element:n.jsx(V5,{})}),n.jsx(Xt,{path:"/admin-dashboard",element:n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{paddingTop:"70px"},children:n.jsx(A5,{})}),n.jsx(en,{})]})}),n.jsx(Xt,{path:"*",element:n.jsxs(n.Fragment,{children:[n.jsx(xp,{openPopup:d}),n.jsx(Uc,{openPopup:d}),n.jsx(yp,{}),n.jsx(vp,{openPopup:d}),n.jsx(bp,{openPopup:d}),n.jsx(_c,{openPopup:d}),n.jsx(Hc,{}),n.jsx(qc,{}),n.jsx(Xc,{}),n.jsx(Tp,{}),n.jsx(kp,{}),n.jsx(zp,{}),n.jsx(en,{})]})})]}),r&&n.jsx(N5,{closePopup:f})]})})}rx.createRoot(document.getElementById("root")).render(n.jsx(Gt.StrictMode,{children:n.jsx(Q5,{})}));
