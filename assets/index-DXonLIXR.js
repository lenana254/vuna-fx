var Dc=Object.defineProperty;var ta=e=>{throw TypeError(e)};var jc=(e,n,t)=>n in e?Dc(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var O=(e,n,t)=>jc(e,typeof n!="symbol"?n+"":n,t),Fc=(e,n,t)=>n.has(e)||ta("Cannot "+t);var ra=(e,n,t)=>n.has(e)?ta("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(e):n.set(e,t);var hr=(e,n,t)=>(Fc(e,n,"access private method"),t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();function Oc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kl={exports:{}},ki={},wl={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sr=Symbol.for("react.element"),Bc=Symbol.for("react.portal"),Hc=Symbol.for("react.fragment"),$c=Symbol.for("react.strict_mode"),Uc=Symbol.for("react.profiler"),Yc=Symbol.for("react.provider"),qc=Symbol.for("react.context"),Vc=Symbol.for("react.forward_ref"),Qc=Symbol.for("react.suspense"),Kc=Symbol.for("react.memo"),Gc=Symbol.for("react.lazy"),ia=Symbol.iterator;function Zc(e){return e===null||typeof e!="object"?null:(e=ia&&e[ia]||e["@@iterator"],typeof e=="function"?e:null)}var vl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_l=Object.assign,Sl={};function gt(e,n,t){this.props=e,this.context=n,this.refs=Sl,this.updater=t||vl}gt.prototype.isReactComponent={};gt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};gt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function xl(){}xl.prototype=gt.prototype;function is(e,n,t){this.props=e,this.context=n,this.refs=Sl,this.updater=t||vl}var os=is.prototype=new xl;os.constructor=is;_l(os,gt.prototype);os.isPureReactComponent=!0;var oa=Array.isArray,Tl=Object.prototype.hasOwnProperty,ss={current:null},Pl={key:!0,ref:!0,__self:!0,__source:!0};function El(e,n,t){var r,i={},o=null,s=null;if(n!=null)for(r in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=""+n.key),n)Tl.call(n,r)&&!Pl.hasOwnProperty(r)&&(i[r]=n[r]);var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:sr,type:e,key:o,ref:s,props:i,_owner:ss.current}}function Xc(e,n){return{$$typeof:sr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function as(e){return typeof e=="object"&&e!==null&&e.$$typeof===sr}function Jc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var sa=/\/+/g;function Di(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Jc(""+e.key):n.toString(36)}function Lr(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case sr:case Bc:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Di(s,0):r,oa(i)?(t="",e!=null&&(t=e.replace(sa,"$&/")+"/"),Lr(i,n,t,"",function(u){return u})):i!=null&&(as(i)&&(i=Xc(i,t+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(sa,"$&/")+"/")+e)),n.push(i)),1;if(s=0,r=r===""?".":r+":",oa(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Di(o,a);s+=Lr(o,n,t,l,i)}else if(l=Zc(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Di(o,a++),s+=Lr(o,n,t,l,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function pr(e,n,t){if(e==null)return e;var r=[],i=0;return Lr(e,r,"","",function(o){return n.call(t,o,i++)}),r}function ed(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Ir={transition:null},nd={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Ir,ReactCurrentOwner:ss};function Cl(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:pr,forEach:function(e,n,t){pr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return pr(e,function(){n++}),n},toArray:function(e){return pr(e,function(n){return n})||[]},only:function(e){if(!as(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=gt;L.Fragment=Hc;L.Profiler=Uc;L.PureComponent=is;L.StrictMode=$c;L.Suspense=Qc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nd;L.act=Cl;L.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=_l({},e.props),i=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=ss.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in n)Tl.call(n,l)&&!Pl.hasOwnProperty(l)&&(r[l]=n[l]===void 0&&a!==void 0?a[l]:n[l])}var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:sr,type:e.type,key:i,ref:o,props:r,_owner:s}};L.createContext=function(e){return e={$$typeof:qc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Yc,_context:e},e.Consumer=e};L.createElement=El;L.createFactory=function(e){var n=El.bind(null,e);return n.type=e,n};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Vc,render:e}};L.isValidElement=as;L.lazy=function(e){return{$$typeof:Gc,_payload:{_status:-1,_result:e},_init:ed}};L.memo=function(e,n){return{$$typeof:Kc,type:e,compare:n===void 0?null:n}};L.startTransition=function(e){var n=Ir.transition;Ir.transition={};try{e()}finally{Ir.transition=n}};L.unstable_act=Cl;L.useCallback=function(e,n){return fe.current.useCallback(e,n)};L.useContext=function(e){return fe.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};L.useEffect=function(e,n){return fe.current.useEffect(e,n)};L.useId=function(){return fe.current.useId()};L.useImperativeHandle=function(e,n,t){return fe.current.useImperativeHandle(e,n,t)};L.useInsertionEffect=function(e,n){return fe.current.useInsertionEffect(e,n)};L.useLayoutEffect=function(e,n){return fe.current.useLayoutEffect(e,n)};L.useMemo=function(e,n){return fe.current.useMemo(e,n)};L.useReducer=function(e,n,t){return fe.current.useReducer(e,n,t)};L.useRef=function(e){return fe.current.useRef(e)};L.useState=function(e){return fe.current.useState(e)};L.useSyncExternalStore=function(e,n,t){return fe.current.useSyncExternalStore(e,n,t)};L.useTransition=function(){return fe.current.useTransition()};L.version="18.3.1";wl.exports=L;var Ye=wl.exports;const td=Oc(Ye);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rd=Ye,id=Symbol.for("react.element"),od=Symbol.for("react.fragment"),sd=Object.prototype.hasOwnProperty,ad=rd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ld={key:!0,ref:!0,__self:!0,__source:!0};function Wl(e,n,t){var r,i={},o=null,s=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(s=n.ref);for(r in n)sd.call(n,r)&&!ld.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:id,type:e,key:o,ref:s,props:i,_owner:ad.current}}ki.Fragment=od;ki.jsx=Wl;ki.jsxs=Wl;kl.exports=ki;var S=kl.exports,uo={},Rl={exports:{}},Te={},bl={exports:{}},Ml={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(P,b){var M=P.length;P.push(b);e:for(;0<M;){var K=M-1>>>1,ee=P[K];if(0<i(ee,b))P[K]=b,P[M]=ee,M=K;else break e}}function t(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var b=P[0],M=P.pop();if(M!==b){P[0]=M;e:for(var K=0,ee=P.length,dr=ee>>>1;K<dr;){var Pn=2*(K+1)-1,Ni=P[Pn],En=Pn+1,fr=P[En];if(0>i(Ni,M))En<ee&&0>i(fr,Ni)?(P[K]=fr,P[En]=M,K=En):(P[K]=Ni,P[Pn]=M,K=Pn);else if(En<ee&&0>i(fr,M))P[K]=fr,P[En]=M,K=En;else break e}}return b}function i(P,b){var M=P.sortIndex-b.sortIndex;return M!==0?M:P.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],h=1,m=null,f=3,g=!1,w=!1,v=!1,A=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(P){for(var b=t(u);b!==null;){if(b.callback===null)r(u);else if(b.startTime<=P)r(u),b.sortIndex=b.expirationTime,n(l,b);else break;b=t(u)}}function y(P){if(v=!1,p(P),!w)if(t(l)!==null)w=!0,zi(x);else{var b=t(u);b!==null&&Ai(y,b.startTime-P)}}function x(P,b){w=!1,v&&(v=!1,d(R),R=-1),g=!0;var M=f;try{for(p(b),m=t(l);m!==null&&(!(m.expirationTime>b)||P&&!Le());){var K=m.callback;if(typeof K=="function"){m.callback=null,f=m.priorityLevel;var ee=K(m.expirationTime<=b);b=e.unstable_now(),typeof ee=="function"?m.callback=ee:m===t(l)&&r(l),p(b)}else r(l);m=t(l)}if(m!==null)var dr=!0;else{var Pn=t(u);Pn!==null&&Ai(y,Pn.startTime-b),dr=!1}return dr}finally{m=null,f=M,g=!1}}var E=!1,C=null,R=-1,Q=5,I=-1;function Le(){return!(e.unstable_now()-I<Q)}function wt(){if(C!==null){var P=e.unstable_now();I=P;var b=!0;try{b=C(!0,P)}finally{b?vt():(E=!1,C=null)}}else E=!1}var vt;if(typeof c=="function")vt=function(){c(wt)};else if(typeof MessageChannel<"u"){var na=new MessageChannel,Nc=na.port2;na.port1.onmessage=wt,vt=function(){Nc.postMessage(null)}}else vt=function(){A(wt,0)};function zi(P){C=P,E||(E=!0,vt())}function Ai(P,b){R=A(function(){P(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,zi(x))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return t(l)},e.unstable_next=function(P){switch(f){case 1:case 2:case 3:var b=3;break;default:b=f}var M=f;f=b;try{return P()}finally{f=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,b){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var M=f;f=P;try{return b()}finally{f=M}},e.unstable_scheduleCallback=function(P,b,M){var K=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?K+M:K):M=K,P){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=M+ee,P={id:h++,callback:b,priorityLevel:P,startTime:M,expirationTime:ee,sortIndex:-1},M>K?(P.sortIndex=M,n(u,P),t(l)===null&&P===t(u)&&(v?(d(R),R=-1):v=!0,Ai(y,M-K))):(P.sortIndex=ee,n(l,P),w||g||(w=!0,zi(x))),P},e.unstable_shouldYield=Le,e.unstable_wrapCallback=function(P){var b=f;return function(){var M=f;f=b;try{return P.apply(this,arguments)}finally{f=M}}}})(Ml);bl.exports=Ml;var ud=bl.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cd=Ye,xe=ud;function k(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ll=new Set,$t={};function Bn(e,n){ut(e,n),ut(e+"Capture",n)}function ut(e,n){for($t[e]=n,e=0;e<n.length;e++)Ll.add(n[e])}var Je=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),co=Object.prototype.hasOwnProperty,dd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,aa={},la={};function fd(e){return co.call(la,e)?!0:co.call(aa,e)?!1:dd.test(e)?la[e]=!0:(aa[e]=!0,!1)}function hd(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function pd(e,n,t,r){if(n===null||typeof n>"u"||hd(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function he(e,n,t,r,i,o,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=s}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];oe[n]=new he(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var ls=/[\-:]([a-z])/g;function us(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(ls,us);oe[n]=new he(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(ls,us);oe[n]=new he(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(ls,us);oe[n]=new he(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function cs(e,n,t,r){var i=oe.hasOwnProperty(n)?oe[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(pd(n,t,i,r)&&(t=null),r||i===null?fd(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var rn=cd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mr=Symbol.for("react.element"),Yn=Symbol.for("react.portal"),qn=Symbol.for("react.fragment"),ds=Symbol.for("react.strict_mode"),fo=Symbol.for("react.profiler"),Il=Symbol.for("react.provider"),zl=Symbol.for("react.context"),fs=Symbol.for("react.forward_ref"),ho=Symbol.for("react.suspense"),po=Symbol.for("react.suspense_list"),hs=Symbol.for("react.memo"),sn=Symbol.for("react.lazy"),Al=Symbol.for("react.offscreen"),ua=Symbol.iterator;function _t(e){return e===null||typeof e!="object"?null:(e=ua&&e[ua]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,ji;function Rt(e){if(ji===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ji=n&&n[1]||""}return`
`+ji+e}var Fi=!1;function Oi(e,n){if(!e||Fi)return"";Fi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Fi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Rt(e):""}function md(e){switch(e.tag){case 5:return Rt(e.type);case 16:return Rt("Lazy");case 13:return Rt("Suspense");case 19:return Rt("SuspenseList");case 0:case 2:case 15:return e=Oi(e.type,!1),e;case 11:return e=Oi(e.type.render,!1),e;case 1:return e=Oi(e.type,!0),e;default:return""}}function mo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qn:return"Fragment";case Yn:return"Portal";case fo:return"Profiler";case ds:return"StrictMode";case ho:return"Suspense";case po:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case zl:return(e.displayName||"Context")+".Consumer";case Il:return(e._context.displayName||"Context")+".Provider";case fs:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case hs:return n=e.displayName||null,n!==null?n:mo(e.type)||"Memo";case sn:n=e._payload,e=e._init;try{return mo(e(n))}catch{}}return null}function gd(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mo(n);case 8:return n===ds?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nl(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function yd(e){var n=Nl(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function gr(e){e._valueTracker||(e._valueTracker=yd(e))}function Dl(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Nl(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Yr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function go(e,n){var t=n.checked;return q({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function ca(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=vn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function jl(e,n){n=n.checked,n!=null&&cs(e,"checked",n,!1)}function yo(e,n){jl(e,n);var t=vn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ko(e,n.type,t):n.hasOwnProperty("defaultValue")&&ko(e,n.type,vn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function da(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ko(e,n,t){(n!=="number"||Yr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var bt=Array.isArray;function rt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+vn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function wo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(k(91));return q({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fa(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(k(92));if(bt(t)){if(1<t.length)throw Error(k(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:vn(t)}}function Fl(e,n){var t=vn(n.value),r=vn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function ha(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Ol(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Ol(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yr,Bl=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(yr=yr||document.createElement("div"),yr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ut(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var It={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kd=["Webkit","ms","Moz","O"];Object.keys(It).forEach(function(e){kd.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),It[n]=It[e]})});function Hl(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||It.hasOwnProperty(e)&&It[e]?(""+n).trim():n+"px"}function $l(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Hl(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var wd=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _o(e,n){if(n){if(wd[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(k(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(k(61))}if(n.style!=null&&typeof n.style!="object")throw Error(k(62))}}function So(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xo=null;function ps(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var To=null,it=null,ot=null;function pa(e){if(e=ur(e)){if(typeof To!="function")throw Error(k(280));var n=e.stateNode;n&&(n=xi(n),To(e.stateNode,e.type,n))}}function Ul(e){it?ot?ot.push(e):ot=[e]:it=e}function Yl(){if(it){var e=it,n=ot;if(ot=it=null,pa(e),n)for(e=0;e<n.length;e++)pa(n[e])}}function ql(e,n){return e(n)}function Vl(){}var Bi=!1;function Ql(e,n,t){if(Bi)return e(n,t);Bi=!0;try{return ql(e,n,t)}finally{Bi=!1,(it!==null||ot!==null)&&(Vl(),Yl())}}function Yt(e,n){var t=e.stateNode;if(t===null)return null;var r=xi(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(k(231,n,typeof t));return t}var Po=!1;if(Je)try{var St={};Object.defineProperty(St,"passive",{get:function(){Po=!0}}),window.addEventListener("test",St,St),window.removeEventListener("test",St,St)}catch{Po=!1}function vd(e,n,t,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(h){this.onError(h)}}var zt=!1,qr=null,Vr=!1,Eo=null,_d={onError:function(e){zt=!0,qr=e}};function Sd(e,n,t,r,i,o,s,a,l){zt=!1,qr=null,vd.apply(_d,arguments)}function xd(e,n,t,r,i,o,s,a,l){if(Sd.apply(this,arguments),zt){if(zt){var u=qr;zt=!1,qr=null}else throw Error(k(198));Vr||(Vr=!0,Eo=u)}}function Hn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Kl(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ma(e){if(Hn(e)!==e)throw Error(k(188))}function Td(e){var n=e.alternate;if(!n){if(n=Hn(e),n===null)throw Error(k(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return ma(i),e;if(o===r)return ma(i),n;o=o.sibling}throw Error(k(188))}if(t.return!==r.return)t=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===t){s=!0,t=i,r=o;break}if(a===r){s=!0,r=i,t=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===t){s=!0,t=o,r=i;break}if(a===r){s=!0,r=o,t=i;break}a=a.sibling}if(!s)throw Error(k(189))}}if(t.alternate!==r)throw Error(k(190))}if(t.tag!==3)throw Error(k(188));return t.stateNode.current===t?e:n}function Gl(e){return e=Td(e),e!==null?Zl(e):null}function Zl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Zl(e);if(n!==null)return n;e=e.sibling}return null}var Xl=xe.unstable_scheduleCallback,ga=xe.unstable_cancelCallback,Pd=xe.unstable_shouldYield,Ed=xe.unstable_requestPaint,G=xe.unstable_now,Cd=xe.unstable_getCurrentPriorityLevel,ms=xe.unstable_ImmediatePriority,Jl=xe.unstable_UserBlockingPriority,Qr=xe.unstable_NormalPriority,Wd=xe.unstable_LowPriority,eu=xe.unstable_IdlePriority,wi=null,qe=null;function Rd(e){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(wi,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:Ld,bd=Math.log,Md=Math.LN2;function Ld(e){return e>>>=0,e===0?32:31-(bd(e)/Md|0)|0}var kr=64,wr=4194304;function Mt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Kr(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=t&268435455;if(s!==0){var a=s&~i;a!==0?r=Mt(a):(o&=s,o!==0&&(r=Mt(o)))}else s=t&~i,s!==0?r=Mt(s):o!==0&&(r=Mt(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-De(n),i=1<<t,r|=e[t],n&=~i;return r}function Id(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zd(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-De(o),a=1<<s,l=i[s];l===-1?(!(a&t)||a&r)&&(i[s]=Id(a,n)):l<=n&&(e.expiredLanes|=a),o&=~a}}function Co(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function nu(){var e=kr;return kr<<=1,!(kr&4194240)&&(kr=64),e}function Hi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ar(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-De(n),e[n]=t}function Ad(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-De(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function gs(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-De(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var j=0;function tu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ru,ys,iu,ou,su,Wo=!1,vr=[],fn=null,hn=null,pn=null,qt=new Map,Vt=new Map,ln=[],Nd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ya(e,n){switch(e){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":hn=null;break;case"mouseover":case"mouseout":pn=null;break;case"pointerover":case"pointerout":qt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vt.delete(n.pointerId)}}function xt(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=ur(n),n!==null&&ys(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Dd(e,n,t,r,i){switch(n){case"focusin":return fn=xt(fn,e,n,t,r,i),!0;case"dragenter":return hn=xt(hn,e,n,t,r,i),!0;case"mouseover":return pn=xt(pn,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return qt.set(o,xt(qt.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Vt.set(o,xt(Vt.get(o)||null,e,n,t,r,i)),!0}return!1}function au(e){var n=Rn(e.target);if(n!==null){var t=Hn(n);if(t!==null){if(n=t.tag,n===13){if(n=Kl(t),n!==null){e.blockedOn=n,su(e.priority,function(){iu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ro(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);xo=r,t.target.dispatchEvent(r),xo=null}else return n=ur(t),n!==null&&ys(n),e.blockedOn=t,!1;n.shift()}return!0}function ka(e,n,t){zr(e)&&t.delete(n)}function jd(){Wo=!1,fn!==null&&zr(fn)&&(fn=null),hn!==null&&zr(hn)&&(hn=null),pn!==null&&zr(pn)&&(pn=null),qt.forEach(ka),Vt.forEach(ka)}function Tt(e,n){e.blockedOn===n&&(e.blockedOn=null,Wo||(Wo=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,jd)))}function Qt(e){function n(i){return Tt(i,e)}if(0<vr.length){Tt(vr[0],e);for(var t=1;t<vr.length;t++){var r=vr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(fn!==null&&Tt(fn,e),hn!==null&&Tt(hn,e),pn!==null&&Tt(pn,e),qt.forEach(n),Vt.forEach(n),t=0;t<ln.length;t++)r=ln[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<ln.length&&(t=ln[0],t.blockedOn===null);)au(t),t.blockedOn===null&&ln.shift()}var st=rn.ReactCurrentBatchConfig,Gr=!0;function Fd(e,n,t,r){var i=j,o=st.transition;st.transition=null;try{j=1,ks(e,n,t,r)}finally{j=i,st.transition=o}}function Od(e,n,t,r){var i=j,o=st.transition;st.transition=null;try{j=4,ks(e,n,t,r)}finally{j=i,st.transition=o}}function ks(e,n,t,r){if(Gr){var i=Ro(e,n,t,r);if(i===null)Xi(e,n,r,Zr,t),ya(e,r);else if(Dd(i,e,n,t,r))r.stopPropagation();else if(ya(e,r),n&4&&-1<Nd.indexOf(e)){for(;i!==null;){var o=ur(i);if(o!==null&&ru(o),o=Ro(e,n,t,r),o===null&&Xi(e,n,r,Zr,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else Xi(e,n,r,null,t)}}var Zr=null;function Ro(e,n,t,r){if(Zr=null,e=ps(r),e=Rn(e),e!==null)if(n=Hn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Kl(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Zr=e,null}function lu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cd()){case ms:return 1;case Jl:return 4;case Qr:case Wd:return 16;case eu:return 536870912;default:return 16}default:return 16}}var cn=null,ws=null,Ar=null;function uu(){if(Ar)return Ar;var e,n=ws,t=n.length,r,i="value"in cn?cn.value:cn.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var s=t-e;for(r=1;r<=s&&n[t-r]===i[o-r];r++);return Ar=i.slice(e,1<r?1-r:void 0)}function Nr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function _r(){return!0}function wa(){return!1}function Pe(e){function n(t,r,i,o,s){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?_r:wa,this.isPropagationStopped=wa,this}return q(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=_r)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=_r)},persist:function(){},isPersistent:_r}),n}var yt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vs=Pe(yt),lr=q({},yt,{view:0,detail:0}),Bd=Pe(lr),$i,Ui,Pt,vi=q({},lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_s,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pt&&(Pt&&e.type==="mousemove"?($i=e.screenX-Pt.screenX,Ui=e.screenY-Pt.screenY):Ui=$i=0,Pt=e),$i)},movementY:function(e){return"movementY"in e?e.movementY:Ui}}),va=Pe(vi),Hd=q({},vi,{dataTransfer:0}),$d=Pe(Hd),Ud=q({},lr,{relatedTarget:0}),Yi=Pe(Ud),Yd=q({},yt,{animationName:0,elapsedTime:0,pseudoElement:0}),qd=Pe(Yd),Vd=q({},yt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qd=Pe(Vd),Kd=q({},yt,{data:0}),_a=Pe(Kd),Gd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Xd[e])?!!n[e]:!1}function _s(){return Jd}var ef=q({},lr,{key:function(e){if(e.key){var n=Gd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Nr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_s,charCode:function(e){return e.type==="keypress"?Nr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nf=Pe(ef),tf=q({},vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sa=Pe(tf),rf=q({},lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_s}),of=Pe(rf),sf=q({},yt,{propertyName:0,elapsedTime:0,pseudoElement:0}),af=Pe(sf),lf=q({},vi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uf=Pe(lf),cf=[9,13,27,32],Ss=Je&&"CompositionEvent"in window,At=null;Je&&"documentMode"in document&&(At=document.documentMode);var df=Je&&"TextEvent"in window&&!At,cu=Je&&(!Ss||At&&8<At&&11>=At),xa=" ",Ta=!1;function du(e,n){switch(e){case"keyup":return cf.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vn=!1;function ff(e,n){switch(e){case"compositionend":return fu(n);case"keypress":return n.which!==32?null:(Ta=!0,xa);case"textInput":return e=n.data,e===xa&&Ta?null:e;default:return null}}function hf(e,n){if(Vn)return e==="compositionend"||!Ss&&du(e,n)?(e=uu(),Ar=ws=cn=null,Vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return cu&&n.locale!=="ko"?null:n.data;default:return null}}var pf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!pf[e.type]:n==="textarea"}function hu(e,n,t,r){Ul(r),n=Xr(n,"onChange"),0<n.length&&(t=new vs("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Nt=null,Kt=null;function mf(e){Tu(e,0)}function _i(e){var n=Gn(e);if(Dl(n))return e}function gf(e,n){if(e==="change")return n}var pu=!1;if(Je){var qi;if(Je){var Vi="oninput"in document;if(!Vi){var Ea=document.createElement("div");Ea.setAttribute("oninput","return;"),Vi=typeof Ea.oninput=="function"}qi=Vi}else qi=!1;pu=qi&&(!document.documentMode||9<document.documentMode)}function Ca(){Nt&&(Nt.detachEvent("onpropertychange",mu),Kt=Nt=null)}function mu(e){if(e.propertyName==="value"&&_i(Kt)){var n=[];hu(n,Kt,e,ps(e)),Ql(mf,n)}}function yf(e,n,t){e==="focusin"?(Ca(),Nt=n,Kt=t,Nt.attachEvent("onpropertychange",mu)):e==="focusout"&&Ca()}function kf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _i(Kt)}function wf(e,n){if(e==="click")return _i(n)}function vf(e,n){if(e==="input"||e==="change")return _i(n)}function _f(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Fe=typeof Object.is=="function"?Object.is:_f;function Gt(e,n){if(Fe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!co.call(n,i)||!Fe(e[i],n[i]))return!1}return!0}function Wa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ra(e,n){var t=Wa(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Wa(t)}}function gu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?gu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function yu(){for(var e=window,n=Yr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Yr(e.document)}return n}function xs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Sf(e){var n=yu(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&gu(t.ownerDocument.documentElement,t)){if(r!==null&&xs(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ra(t,o);var s=Ra(t,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var xf=Je&&"documentMode"in document&&11>=document.documentMode,Qn=null,bo=null,Dt=null,Mo=!1;function ba(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Mo||Qn==null||Qn!==Yr(r)||(r=Qn,"selectionStart"in r&&xs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dt&&Gt(Dt,r)||(Dt=r,r=Xr(bo,"onSelect"),0<r.length&&(n=new vs("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Qn)))}function Sr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Kn={animationend:Sr("Animation","AnimationEnd"),animationiteration:Sr("Animation","AnimationIteration"),animationstart:Sr("Animation","AnimationStart"),transitionend:Sr("Transition","TransitionEnd")},Qi={},ku={};Je&&(ku=document.createElement("div").style,"AnimationEvent"in window||(delete Kn.animationend.animation,delete Kn.animationiteration.animation,delete Kn.animationstart.animation),"TransitionEvent"in window||delete Kn.transitionend.transition);function Si(e){if(Qi[e])return Qi[e];if(!Kn[e])return e;var n=Kn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in ku)return Qi[e]=n[t];return e}var wu=Si("animationend"),vu=Si("animationiteration"),_u=Si("animationstart"),Su=Si("transitionend"),xu=new Map,Ma="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sn(e,n){xu.set(e,n),Bn(n,[e])}for(var Ki=0;Ki<Ma.length;Ki++){var Gi=Ma[Ki],Tf=Gi.toLowerCase(),Pf=Gi[0].toUpperCase()+Gi.slice(1);Sn(Tf,"on"+Pf)}Sn(wu,"onAnimationEnd");Sn(vu,"onAnimationIteration");Sn(_u,"onAnimationStart");Sn("dblclick","onDoubleClick");Sn("focusin","onFocus");Sn("focusout","onBlur");Sn(Su,"onTransitionEnd");ut("onMouseEnter",["mouseout","mouseover"]);ut("onMouseLeave",["mouseout","mouseover"]);ut("onPointerEnter",["pointerout","pointerover"]);ut("onPointerLeave",["pointerout","pointerover"]);Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ef=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lt));function La(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,xd(r,n,void 0,e),e.currentTarget=null}function Tu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;La(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;La(i,a,u),o=l}}}if(Vr)throw e=Eo,Vr=!1,Eo=null,e}function B(e,n){var t=n[No];t===void 0&&(t=n[No]=new Set);var r=e+"__bubble";t.has(r)||(Pu(n,e,2,!1),t.add(r))}function Zi(e,n,t){var r=0;n&&(r|=4),Pu(t,e,r,n)}var xr="_reactListening"+Math.random().toString(36).slice(2);function Zt(e){if(!e[xr]){e[xr]=!0,Ll.forEach(function(t){t!=="selectionchange"&&(Ef.has(t)||Zi(t,!1,e),Zi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[xr]||(n[xr]=!0,Zi("selectionchange",!1,n))}}function Pu(e,n,t,r){switch(lu(n)){case 1:var i=Fd;break;case 4:i=Od;break;default:i=ks}t=i.bind(null,n,t,e),i=void 0,!Po||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Xi(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Rn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Ql(function(){var u=o,h=ps(t),m=[];e:{var f=xu.get(e);if(f!==void 0){var g=vs,w=e;switch(e){case"keypress":if(Nr(t)===0)break e;case"keydown":case"keyup":g=nf;break;case"focusin":w="focus",g=Yi;break;case"focusout":w="blur",g=Yi;break;case"beforeblur":case"afterblur":g=Yi;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=va;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=$d;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=of;break;case wu:case vu:case _u:g=qd;break;case Su:g=af;break;case"scroll":g=Bd;break;case"wheel":g=uf;break;case"copy":case"cut":case"paste":g=Qd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Sa}var v=(n&4)!==0,A=!v&&e==="scroll",d=v?f!==null?f+"Capture":null:f;v=[];for(var c=u,p;c!==null;){p=c;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,d!==null&&(y=Yt(c,d),y!=null&&v.push(Xt(c,y,p)))),A)break;c=c.return}0<v.length&&(f=new g(f,w,null,t,h),m.push({event:f,listeners:v}))}}if(!(n&7)){e:{if(f=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",f&&t!==xo&&(w=t.relatedTarget||t.fromElement)&&(Rn(w)||w[en]))break e;if((g||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,g?(w=t.relatedTarget||t.toElement,g=u,w=w?Rn(w):null,w!==null&&(A=Hn(w),w!==A||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=u),g!==w)){if(v=va,y="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=Sa,y="onPointerLeave",d="onPointerEnter",c="pointer"),A=g==null?f:Gn(g),p=w==null?f:Gn(w),f=new v(y,c+"leave",g,t,h),f.target=A,f.relatedTarget=p,y=null,Rn(h)===u&&(v=new v(d,c+"enter",w,t,h),v.target=p,v.relatedTarget=A,y=v),A=y,g&&w)n:{for(v=g,d=w,c=0,p=v;p;p=Un(p))c++;for(p=0,y=d;y;y=Un(y))p++;for(;0<c-p;)v=Un(v),c--;for(;0<p-c;)d=Un(d),p--;for(;c--;){if(v===d||d!==null&&v===d.alternate)break n;v=Un(v),d=Un(d)}v=null}else v=null;g!==null&&Ia(m,f,g,v,!1),w!==null&&A!==null&&Ia(m,A,w,v,!0)}}e:{if(f=u?Gn(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var x=gf;else if(Pa(f))if(pu)x=vf;else{x=kf;var E=yf}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(x=wf);if(x&&(x=x(e,u))){hu(m,x,t,h);break e}E&&E(e,f,u),e==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&ko(f,"number",f.value)}switch(E=u?Gn(u):window,e){case"focusin":(Pa(E)||E.contentEditable==="true")&&(Qn=E,bo=u,Dt=null);break;case"focusout":Dt=bo=Qn=null;break;case"mousedown":Mo=!0;break;case"contextmenu":case"mouseup":case"dragend":Mo=!1,ba(m,t,h);break;case"selectionchange":if(xf)break;case"keydown":case"keyup":ba(m,t,h)}var C;if(Ss)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Vn?du(e,t)&&(R="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(cu&&t.locale!=="ko"&&(Vn||R!=="onCompositionStart"?R==="onCompositionEnd"&&Vn&&(C=uu()):(cn=h,ws="value"in cn?cn.value:cn.textContent,Vn=!0)),E=Xr(u,R),0<E.length&&(R=new _a(R,e,null,t,h),m.push({event:R,listeners:E}),C?R.data=C:(C=fu(t),C!==null&&(R.data=C)))),(C=df?ff(e,t):hf(e,t))&&(u=Xr(u,"onBeforeInput"),0<u.length&&(h=new _a("onBeforeInput","beforeinput",null,t,h),m.push({event:h,listeners:u}),h.data=C))}Tu(m,n)})}function Xt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Xr(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Yt(e,t),o!=null&&r.unshift(Xt(e,o,i)),o=Yt(e,n),o!=null&&r.push(Xt(e,o,i))),e=e.return}return r}function Un(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ia(e,n,t,r,i){for(var o=n._reactName,s=[];t!==null&&t!==r;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Yt(t,o),l!=null&&s.unshift(Xt(t,l,a))):i||(l=Yt(t,o),l!=null&&s.push(Xt(t,l,a)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var Cf=/\r\n?/g,Wf=/\u0000|\uFFFD/g;function za(e){return(typeof e=="string"?e:""+e).replace(Cf,`
`).replace(Wf,"")}function Tr(e,n,t){if(n=za(n),za(e)!==n&&t)throw Error(k(425))}function Jr(){}var Lo=null,Io=null;function zo(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ao=typeof setTimeout=="function"?setTimeout:void 0,Rf=typeof clearTimeout=="function"?clearTimeout:void 0,Aa=typeof Promise=="function"?Promise:void 0,bf=typeof queueMicrotask=="function"?queueMicrotask:typeof Aa<"u"?function(e){return Aa.resolve(null).then(e).catch(Mf)}:Ao;function Mf(e){setTimeout(function(){throw e})}function Ji(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Qt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Qt(n)}function mn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Na(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var kt=Math.random().toString(36).slice(2),He="__reactFiber$"+kt,Jt="__reactProps$"+kt,en="__reactContainer$"+kt,No="__reactEvents$"+kt,Lf="__reactListeners$"+kt,If="__reactHandles$"+kt;function Rn(e){var n=e[He];if(n)return n;for(var t=e.parentNode;t;){if(n=t[en]||t[He]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Na(e);e!==null;){if(t=e[He])return t;e=Na(e)}return n}e=t,t=e.parentNode}return null}function ur(e){return e=e[He]||e[en],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function xi(e){return e[Jt]||null}var Do=[],Zn=-1;function xn(e){return{current:e}}function H(e){0>Zn||(e.current=Do[Zn],Do[Zn]=null,Zn--)}function F(e,n){Zn++,Do[Zn]=e.current,e.current=n}var _n={},ue=xn(_n),ge=xn(!1),zn=_n;function ct(e,n){var t=e.type.contextTypes;if(!t)return _n;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function ye(e){return e=e.childContextTypes,e!=null}function ei(){H(ge),H(ue)}function Da(e,n,t){if(ue.current!==_n)throw Error(k(168));F(ue,n),F(ge,t)}function Eu(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(k(108,gd(e)||"Unknown",i));return q({},t,r)}function ni(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_n,zn=ue.current,F(ue,e),F(ge,ge.current),!0}function ja(e,n,t){var r=e.stateNode;if(!r)throw Error(k(169));t?(e=Eu(e,n,zn),r.__reactInternalMemoizedMergedChildContext=e,H(ge),H(ue),F(ue,e)):H(ge),F(ge,t)}var Ke=null,Ti=!1,eo=!1;function Cu(e){Ke===null?Ke=[e]:Ke.push(e)}function zf(e){Ti=!0,Cu(e)}function Tn(){if(!eo&&Ke!==null){eo=!0;var e=0,n=j;try{var t=Ke;for(j=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ke=null,Ti=!1}catch(i){throw Ke!==null&&(Ke=Ke.slice(e+1)),Xl(ms,Tn),i}finally{j=n,eo=!1}}return null}var Xn=[],Jn=0,ti=null,ri=0,Ee=[],Ce=0,An=null,Ge=1,Ze="";function Cn(e,n){Xn[Jn++]=ri,Xn[Jn++]=ti,ti=e,ri=n}function Wu(e,n,t){Ee[Ce++]=Ge,Ee[Ce++]=Ze,Ee[Ce++]=An,An=e;var r=Ge;e=Ze;var i=32-De(r)-1;r&=~(1<<i),t+=1;var o=32-De(n)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Ge=1<<32-De(n)+i|t<<i|r,Ze=o+e}else Ge=1<<o|t<<i|r,Ze=e}function Ts(e){e.return!==null&&(Cn(e,1),Wu(e,1,0))}function Ps(e){for(;e===ti;)ti=Xn[--Jn],Xn[Jn]=null,ri=Xn[--Jn],Xn[Jn]=null;for(;e===An;)An=Ee[--Ce],Ee[Ce]=null,Ze=Ee[--Ce],Ee[Ce]=null,Ge=Ee[--Ce],Ee[Ce]=null}var Se=null,_e=null,$=!1,Ne=null;function Ru(e,n){var t=We(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Fa(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Se=e,_e=mn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Se=e,_e=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=An!==null?{id:Ge,overflow:Ze}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=We(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Se=e,_e=null,!0):!1;default:return!1}}function jo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fo(e){if($){var n=_e;if(n){var t=n;if(!Fa(e,n)){if(jo(e))throw Error(k(418));n=mn(t.nextSibling);var r=Se;n&&Fa(e,n)?Ru(r,t):(e.flags=e.flags&-4097|2,$=!1,Se=e)}}else{if(jo(e))throw Error(k(418));e.flags=e.flags&-4097|2,$=!1,Se=e}}}function Oa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function Pr(e){if(e!==Se)return!1;if(!$)return Oa(e),$=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!zo(e.type,e.memoizedProps)),n&&(n=_e)){if(jo(e))throw bu(),Error(k(418));for(;n;)Ru(e,n),n=mn(n.nextSibling)}if(Oa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){_e=mn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}_e=null}}else _e=Se?mn(e.stateNode.nextSibling):null;return!0}function bu(){for(var e=_e;e;)e=mn(e.nextSibling)}function dt(){_e=Se=null,$=!1}function Es(e){Ne===null?Ne=[e]:Ne.push(e)}var Af=rn.ReactCurrentBatchConfig;function Et(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(k(309));var r=t.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},n._stringRef=o,n)}if(typeof e!="string")throw Error(k(284));if(!t._owner)throw Error(k(290,e))}return e}function Er(e,n){throw e=Object.prototype.toString.call(n),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ba(e){var n=e._init;return n(e._payload)}function Mu(e){function n(d,c){if(e){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c)}}function t(d,c){if(!e)return null;for(;c!==null;)n(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=wn(d,c),d.index=0,d.sibling=null,d}function o(d,c,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=2,c):p):(d.flags|=2,c)):(d.flags|=1048576,c)}function s(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,p,y){return c===null||c.tag!==6?(c=ao(p,d.mode,y),c.return=d,c):(c=i(c,p),c.return=d,c)}function l(d,c,p,y){var x=p.type;return x===qn?h(d,c,p.props.children,y,p.key):c!==null&&(c.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===sn&&Ba(x)===c.type)?(y=i(c,p.props),y.ref=Et(d,c,p),y.return=d,y):(y=$r(p.type,p.key,p.props,null,d.mode,y),y.ref=Et(d,c,p),y.return=d,y)}function u(d,c,p,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=lo(p,d.mode,y),c.return=d,c):(c=i(c,p.children||[]),c.return=d,c)}function h(d,c,p,y,x){return c===null||c.tag!==7?(c=In(p,d.mode,y,x),c.return=d,c):(c=i(c,p),c.return=d,c)}function m(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ao(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case mr:return p=$r(c.type,c.key,c.props,null,d.mode,p),p.ref=Et(d,null,c),p.return=d,p;case Yn:return c=lo(c,d.mode,p),c.return=d,c;case sn:var y=c._init;return m(d,y(c._payload),p)}if(bt(c)||_t(c))return c=In(c,d.mode,p,null),c.return=d,c;Er(d,c)}return null}function f(d,c,p,y){var x=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return x!==null?null:a(d,c,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case mr:return p.key===x?l(d,c,p,y):null;case Yn:return p.key===x?u(d,c,p,y):null;case sn:return x=p._init,f(d,c,x(p._payload),y)}if(bt(p)||_t(p))return x!==null?null:h(d,c,p,y,null);Er(d,p)}return null}function g(d,c,p,y,x){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(p)||null,a(c,d,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case mr:return d=d.get(y.key===null?p:y.key)||null,l(c,d,y,x);case Yn:return d=d.get(y.key===null?p:y.key)||null,u(c,d,y,x);case sn:var E=y._init;return g(d,c,p,E(y._payload),x)}if(bt(y)||_t(y))return d=d.get(p)||null,h(c,d,y,x,null);Er(c,y)}return null}function w(d,c,p,y){for(var x=null,E=null,C=c,R=c=0,Q=null;C!==null&&R<p.length;R++){C.index>R?(Q=C,C=null):Q=C.sibling;var I=f(d,C,p[R],y);if(I===null){C===null&&(C=Q);break}e&&C&&I.alternate===null&&n(d,C),c=o(I,c,R),E===null?x=I:E.sibling=I,E=I,C=Q}if(R===p.length)return t(d,C),$&&Cn(d,R),x;if(C===null){for(;R<p.length;R++)C=m(d,p[R],y),C!==null&&(c=o(C,c,R),E===null?x=C:E.sibling=C,E=C);return $&&Cn(d,R),x}for(C=r(d,C);R<p.length;R++)Q=g(C,d,R,p[R],y),Q!==null&&(e&&Q.alternate!==null&&C.delete(Q.key===null?R:Q.key),c=o(Q,c,R),E===null?x=Q:E.sibling=Q,E=Q);return e&&C.forEach(function(Le){return n(d,Le)}),$&&Cn(d,R),x}function v(d,c,p,y){var x=_t(p);if(typeof x!="function")throw Error(k(150));if(p=x.call(p),p==null)throw Error(k(151));for(var E=x=null,C=c,R=c=0,Q=null,I=p.next();C!==null&&!I.done;R++,I=p.next()){C.index>R?(Q=C,C=null):Q=C.sibling;var Le=f(d,C,I.value,y);if(Le===null){C===null&&(C=Q);break}e&&C&&Le.alternate===null&&n(d,C),c=o(Le,c,R),E===null?x=Le:E.sibling=Le,E=Le,C=Q}if(I.done)return t(d,C),$&&Cn(d,R),x;if(C===null){for(;!I.done;R++,I=p.next())I=m(d,I.value,y),I!==null&&(c=o(I,c,R),E===null?x=I:E.sibling=I,E=I);return $&&Cn(d,R),x}for(C=r(d,C);!I.done;R++,I=p.next())I=g(C,d,R,I.value,y),I!==null&&(e&&I.alternate!==null&&C.delete(I.key===null?R:I.key),c=o(I,c,R),E===null?x=I:E.sibling=I,E=I);return e&&C.forEach(function(wt){return n(d,wt)}),$&&Cn(d,R),x}function A(d,c,p,y){if(typeof p=="object"&&p!==null&&p.type===qn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case mr:e:{for(var x=p.key,E=c;E!==null;){if(E.key===x){if(x=p.type,x===qn){if(E.tag===7){t(d,E.sibling),c=i(E,p.props.children),c.return=d,d=c;break e}}else if(E.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===sn&&Ba(x)===E.type){t(d,E.sibling),c=i(E,p.props),c.ref=Et(d,E,p),c.return=d,d=c;break e}t(d,E);break}else n(d,E);E=E.sibling}p.type===qn?(c=In(p.props.children,d.mode,y,p.key),c.return=d,d=c):(y=$r(p.type,p.key,p.props,null,d.mode,y),y.ref=Et(d,c,p),y.return=d,d=y)}return s(d);case Yn:e:{for(E=p.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){t(d,c.sibling),c=i(c,p.children||[]),c.return=d,d=c;break e}else{t(d,c);break}else n(d,c);c=c.sibling}c=lo(p,d.mode,y),c.return=d,d=c}return s(d);case sn:return E=p._init,A(d,c,E(p._payload),y)}if(bt(p))return w(d,c,p,y);if(_t(p))return v(d,c,p,y);Er(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(t(d,c.sibling),c=i(c,p),c.return=d,d=c):(t(d,c),c=ao(p,d.mode,y),c.return=d,d=c),s(d)):t(d,c)}return A}var ft=Mu(!0),Lu=Mu(!1),ii=xn(null),oi=null,et=null,Cs=null;function Ws(){Cs=et=oi=null}function Rs(e){var n=ii.current;H(ii),e._currentValue=n}function Oo(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function at(e,n){oi=e,Cs=et=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(me=!0),e.firstContext=null)}function be(e){var n=e._currentValue;if(Cs!==e)if(e={context:e,memoizedValue:n,next:null},et===null){if(oi===null)throw Error(k(308));et=e,oi.dependencies={lanes:0,firstContext:e}}else et=et.next=e;return n}var bn=null;function bs(e){bn===null?bn=[e]:bn.push(e)}function Iu(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,bs(n)):(t.next=i.next,i.next=t),n.interleaved=t,nn(e,r)}function nn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var an=!1;function Ms(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xe(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function gn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,nn(e,t)}return i=r.interleaved,i===null?(n.next=n,bs(r)):(n.next=i.next,i.next=n),r.interleaved=n,nn(e,t)}function Dr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,gs(e,t)}}function Ha(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=s:o=o.next=s,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function si(e,n,t,r){var i=e.updateQueue;an=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==s&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(o!==null){var m=i.baseState;s=0,h=u=l=null,a=o;do{var f=a.lane,g=a.eventTime;if((r&f)===f){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,v=a;switch(f=n,g=t,v.tag){case 1:if(w=v.payload,typeof w=="function"){m=w.call(g,m,f);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,f=typeof w=="function"?w.call(g,m,f):w,f==null)break e;m=q({},m,f);break e;case 2:an=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=g,l=m):h=h.next=g,s|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(h===null&&(l=m),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=h,n=i.shared.interleaved,n!==null){i=n;do s|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);Dn|=s,e.lanes=s,e.memoizedState=m}}function $a(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var cr={},Ve=xn(cr),er=xn(cr),nr=xn(cr);function Mn(e){if(e===cr)throw Error(k(174));return e}function Ls(e,n){switch(F(nr,n),F(er,e),F(Ve,cr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:vo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=vo(n,e)}H(Ve),F(Ve,n)}function ht(){H(Ve),H(er),H(nr)}function Au(e){Mn(nr.current);var n=Mn(Ve.current),t=vo(n,e.type);n!==t&&(F(er,e),F(Ve,t))}function Is(e){er.current===e&&(H(Ve),H(er))}var U=xn(0);function ai(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var no=[];function zs(){for(var e=0;e<no.length;e++)no[e]._workInProgressVersionPrimary=null;no.length=0}var jr=rn.ReactCurrentDispatcher,to=rn.ReactCurrentBatchConfig,Nn=0,Y=null,X=null,ne=null,li=!1,jt=!1,tr=0,Nf=0;function se(){throw Error(k(321))}function As(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Fe(e[t],n[t]))return!1;return!0}function Ns(e,n,t,r,i,o){if(Nn=o,Y=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,jr.current=e===null||e.memoizedState===null?Of:Bf,e=t(r,i),jt){o=0;do{if(jt=!1,tr=0,25<=o)throw Error(k(301));o+=1,ne=X=null,n.updateQueue=null,jr.current=Hf,e=t(r,i)}while(jt)}if(jr.current=ui,n=X!==null&&X.next!==null,Nn=0,ne=X=Y=null,li=!1,n)throw Error(k(300));return e}function Ds(){var e=tr!==0;return tr=0,e}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?Y.memoizedState=ne=e:ne=ne.next=e,ne}function Me(){if(X===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var n=ne===null?Y.memoizedState:ne.next;if(n!==null)ne=n,X=e;else{if(e===null)throw Error(k(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},ne===null?Y.memoizedState=ne=e:ne=ne.next=e}return ne}function rr(e,n){return typeof n=="function"?n(e):n}function ro(e){var n=Me(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=X,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var h=u.lane;if((Nn&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=m,s=r):l=l.next=m,Y.lanes|=h,Dn|=h}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Fe(r,n.memoizedState)||(me=!0),n.memoizedState=r,n.baseState=s,n.baseQueue=l,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,Y.lanes|=o,Dn|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function io(e){var n=Me(),t=n.queue;if(t===null)throw Error(k(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Fe(o,n.memoizedState)||(me=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function Nu(){}function Du(e,n){var t=Y,r=Me(),i=n(),o=!Fe(r.memoizedState,i);if(o&&(r.memoizedState=i,me=!0),r=r.queue,js(Ou.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||ne!==null&&ne.memoizedState.tag&1){if(t.flags|=2048,ir(9,Fu.bind(null,t,r,i,n),void 0,null),te===null)throw Error(k(349));Nn&30||ju(t,n,i)}return i}function ju(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Y.updateQueue,n===null?(n={lastEffect:null,stores:null},Y.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Fu(e,n,t,r){n.value=t,n.getSnapshot=r,Bu(n)&&Hu(e)}function Ou(e,n,t){return t(function(){Bu(n)&&Hu(e)})}function Bu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Fe(e,t)}catch{return!0}}function Hu(e){var n=nn(e,1);n!==null&&je(n,e,1,-1)}function Ua(e){var n=Be();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rr,lastRenderedState:e},n.queue=e,e=e.dispatch=Ff.bind(null,Y,e),[n.memoizedState,e]}function ir(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Y.updateQueue,n===null?(n={lastEffect:null,stores:null},Y.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function $u(){return Me().memoizedState}function Fr(e,n,t,r){var i=Be();Y.flags|=e,i.memoizedState=ir(1|n,t,void 0,r===void 0?null:r)}function Pi(e,n,t,r){var i=Me();r=r===void 0?null:r;var o=void 0;if(X!==null){var s=X.memoizedState;if(o=s.destroy,r!==null&&As(r,s.deps)){i.memoizedState=ir(n,t,o,r);return}}Y.flags|=e,i.memoizedState=ir(1|n,t,o,r)}function Ya(e,n){return Fr(8390656,8,e,n)}function js(e,n){return Pi(2048,8,e,n)}function Uu(e,n){return Pi(4,2,e,n)}function Yu(e,n){return Pi(4,4,e,n)}function qu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Vu(e,n,t){return t=t!=null?t.concat([e]):null,Pi(4,4,qu.bind(null,n,e),t)}function Fs(){}function Qu(e,n){var t=Me();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&As(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Ku(e,n){var t=Me();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&As(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Gu(e,n,t){return Nn&21?(Fe(t,n)||(t=nu(),Y.lanes|=t,Dn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=t)}function Df(e,n){var t=j;j=t!==0&&4>t?t:4,e(!0);var r=to.transition;to.transition={};try{e(!1),n()}finally{j=t,to.transition=r}}function Zu(){return Me().memoizedState}function jf(e,n,t){var r=kn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Xu(e))Ju(n,t);else if(t=Iu(e,n,t,r),t!==null){var i=de();je(t,e,r,i),ec(t,n,r)}}function Ff(e,n,t){var r=kn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Xu(e))Ju(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var s=n.lastRenderedState,a=o(s,t);if(i.hasEagerState=!0,i.eagerState=a,Fe(a,s)){var l=n.interleaved;l===null?(i.next=i,bs(n)):(i.next=l.next,l.next=i),n.interleaved=i;return}}catch{}finally{}t=Iu(e,n,i,r),t!==null&&(i=de(),je(t,e,r,i),ec(t,n,r))}}function Xu(e){var n=e.alternate;return e===Y||n!==null&&n===Y}function Ju(e,n){jt=li=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function ec(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,gs(e,t)}}var ui={readContext:be,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},Of={readContext:be,useCallback:function(e,n){return Be().memoizedState=[e,n===void 0?null:n],e},useContext:be,useEffect:Ya,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Fr(4194308,4,qu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Fr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Fr(4,2,e,n)},useMemo:function(e,n){var t=Be();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Be();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=jf.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var n=Be();return e={current:e},n.memoizedState=e},useState:Ua,useDebugValue:Fs,useDeferredValue:function(e){return Be().memoizedState=e},useTransition:function(){var e=Ua(!1),n=e[0];return e=Df.bind(null,e[1]),Be().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Y,i=Be();if($){if(t===void 0)throw Error(k(407));t=t()}else{if(t=n(),te===null)throw Error(k(349));Nn&30||ju(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,Ya(Ou.bind(null,r,o,e),[e]),r.flags|=2048,ir(9,Fu.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Be(),n=te.identifierPrefix;if($){var t=Ze,r=Ge;t=(r&~(1<<32-De(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=tr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Nf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Bf={readContext:be,useCallback:Qu,useContext:be,useEffect:js,useImperativeHandle:Vu,useInsertionEffect:Uu,useLayoutEffect:Yu,useMemo:Ku,useReducer:ro,useRef:$u,useState:function(){return ro(rr)},useDebugValue:Fs,useDeferredValue:function(e){var n=Me();return Gu(n,X.memoizedState,e)},useTransition:function(){var e=ro(rr)[0],n=Me().memoizedState;return[e,n]},useMutableSource:Nu,useSyncExternalStore:Du,useId:Zu,unstable_isNewReconciler:!1},Hf={readContext:be,useCallback:Qu,useContext:be,useEffect:js,useImperativeHandle:Vu,useInsertionEffect:Uu,useLayoutEffect:Yu,useMemo:Ku,useReducer:io,useRef:$u,useState:function(){return io(rr)},useDebugValue:Fs,useDeferredValue:function(e){var n=Me();return X===null?n.memoizedState=e:Gu(n,X.memoizedState,e)},useTransition:function(){var e=io(rr)[0],n=Me().memoizedState;return[e,n]},useMutableSource:Nu,useSyncExternalStore:Du,useId:Zu,unstable_isNewReconciler:!1};function ze(e,n){if(e&&e.defaultProps){n=q({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Bo(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:q({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ei={isMounted:function(e){return(e=e._reactInternals)?Hn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=de(),i=kn(e),o=Xe(r,i);o.payload=n,t!=null&&(o.callback=t),n=gn(e,o,i),n!==null&&(je(n,e,i,r),Dr(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=de(),i=kn(e),o=Xe(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=gn(e,o,i),n!==null&&(je(n,e,i,r),Dr(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=de(),r=kn(e),i=Xe(t,r);i.tag=2,n!=null&&(i.callback=n),n=gn(e,i,r),n!==null&&(je(n,e,r,t),Dr(n,e,r))}};function qa(e,n,t,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):n.prototype&&n.prototype.isPureReactComponent?!Gt(t,r)||!Gt(i,o):!0}function nc(e,n,t){var r=!1,i=_n,o=n.contextType;return typeof o=="object"&&o!==null?o=be(o):(i=ye(n)?zn:ue.current,r=n.contextTypes,o=(r=r!=null)?ct(e,i):_n),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ei,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function Va(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Ei.enqueueReplaceState(n,n.state,null)}function Ho(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Ms(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=be(o):(o=ye(n)?zn:ue.current,i.context=ct(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Bo(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Ei.enqueueReplaceState(i,i.state,null),si(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function pt(e,n){try{var t="",r=n;do t+=md(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function oo(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function $o(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var $f=typeof WeakMap=="function"?WeakMap:Map;function tc(e,n,t){t=Xe(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){di||(di=!0,Jo=r),$o(e,n)},t}function rc(e,n,t){t=Xe(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){$o(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){$o(e,n),typeof r!="function"&&(yn===null?yn=new Set([this]):yn.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),t}function Qa(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new $f;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=rh.bind(null,e,n,t),n.then(e,e))}function Ka(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ga(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Xe(-1,1),n.tag=2,gn(t,n,1))),t.lanes|=1),e)}var Uf=rn.ReactCurrentOwner,me=!1;function ce(e,n,t,r){n.child=e===null?Lu(n,null,t,r):ft(n,e.child,t,r)}function Za(e,n,t,r,i){t=t.render;var o=n.ref;return at(n,i),r=Ns(e,n,t,r,o,i),t=Ds(),e!==null&&!me?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,tn(e,n,i)):($&&t&&Ts(n),n.flags|=1,ce(e,n,r,i),n.child)}function Xa(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!Vs(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,ic(e,n,o,r,i)):(e=$r(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(t=t.compare,t=t!==null?t:Gt,t(s,r)&&e.ref===n.ref)return tn(e,n,i)}return n.flags|=1,e=wn(o,r),e.ref=n.ref,e.return=n,n.child=e}function ic(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(Gt(o,r)&&e.ref===n.ref)if(me=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(me=!0);else return n.lanes=e.lanes,tn(e,n,i)}return Uo(e,n,t,r,i)}function oc(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(tt,we),we|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,F(tt,we),we|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,F(tt,we),we|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,F(tt,we),we|=r;return ce(e,n,i,t),n.child}function sc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Uo(e,n,t,r,i){var o=ye(t)?zn:ue.current;return o=ct(n,o),at(n,i),t=Ns(e,n,t,r,o,i),r=Ds(),e!==null&&!me?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,tn(e,n,i)):($&&r&&Ts(n),n.flags|=1,ce(e,n,t,i),n.child)}function Ja(e,n,t,r,i){if(ye(t)){var o=!0;ni(n)}else o=!1;if(at(n,i),n.stateNode===null)Or(e,n),nc(n,t,r),Ho(n,t,r,i),r=!0;else if(e===null){var s=n.stateNode,a=n.memoizedProps;s.props=a;var l=s.context,u=t.contextType;typeof u=="object"&&u!==null?u=be(u):(u=ye(t)?zn:ue.current,u=ct(n,u));var h=t.getDerivedStateFromProps,m=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Va(n,s,r,u),an=!1;var f=n.memoizedState;s.state=f,si(n,r,s,i),l=n.memoizedState,a!==r||f!==l||ge.current||an?(typeof h=="function"&&(Bo(n,t,h,r),l=n.memoizedState),(a=an||qa(n,t,a,r,f,l,u))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{s=n.stateNode,zu(e,n),a=n.memoizedProps,u=n.type===n.elementType?a:ze(n.type,a),s.props=u,m=n.pendingProps,f=s.context,l=t.contextType,typeof l=="object"&&l!==null?l=be(l):(l=ye(t)?zn:ue.current,l=ct(n,l));var g=t.getDerivedStateFromProps;(h=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==m||f!==l)&&Va(n,s,r,l),an=!1,f=n.memoizedState,s.state=f,si(n,r,s,i);var w=n.memoizedState;a!==m||f!==w||ge.current||an?(typeof g=="function"&&(Bo(n,t,g,r),w=n.memoizedState),(u=an||qa(n,t,u,r,f,w,l)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,l)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=w),s.props=r,s.state=w,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),r=!1)}return Yo(e,n,t,r,o,i)}function Yo(e,n,t,r,i,o){sc(e,n);var s=(n.flags&128)!==0;if(!r&&!s)return i&&ja(n,t,!1),tn(e,n,o);r=n.stateNode,Uf.current=n;var a=s&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&s?(n.child=ft(n,e.child,null,o),n.child=ft(n,null,a,o)):ce(e,n,a,o),n.memoizedState=r.state,i&&ja(n,t,!0),n.child}function ac(e){var n=e.stateNode;n.pendingContext?Da(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Da(e,n.context,!1),Ls(e,n.containerInfo)}function el(e,n,t,r,i){return dt(),Es(i),n.flags|=256,ce(e,n,t,r),n.child}var qo={dehydrated:null,treeContext:null,retryLane:0};function Vo(e){return{baseLanes:e,cachePool:null,transitions:null}}function lc(e,n,t){var r=n.pendingProps,i=U.current,o=!1,s=(n.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),F(U,i&1),e===null)return Fo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(s=r.children,e=r.fallback,o?(r=n.mode,o=n.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ri(s,r,0,null),e=In(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Vo(t),n.memoizedState=qo,e):Os(n,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Yf(e,n,s,r,a,i,t);if(o){o=r.fallback,s=n.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=l,n.deletions=null):(r=wn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=wn(a,o):(o=In(o,s,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,s=e.child.memoizedState,s=s===null?Vo(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~t,n.memoizedState=qo,r}return o=e.child,e=o.sibling,r=wn(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Os(e,n){return n=Ri({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Cr(e,n,t,r){return r!==null&&Es(r),ft(n,e.child,null,t),e=Os(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Yf(e,n,t,r,i,o,s){if(t)return n.flags&256?(n.flags&=-257,r=oo(Error(k(422))),Cr(e,n,s,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=Ri({mode:"visible",children:r.children},i,0,null),o=In(o,i,s,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&ft(n,e.child,null,s),n.child.memoizedState=Vo(s),n.memoizedState=qo,o);if(!(n.mode&1))return Cr(e,n,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(k(419)),r=oo(o,r,void 0),Cr(e,n,s,r)}if(a=(s&e.childLanes)!==0,me||a){if(r=te,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,nn(e,i),je(r,e,i,-1))}return qs(),r=oo(Error(k(421))),Cr(e,n,s,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=ih.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,_e=mn(i.nextSibling),Se=n,$=!0,Ne=null,e!==null&&(Ee[Ce++]=Ge,Ee[Ce++]=Ze,Ee[Ce++]=An,Ge=e.id,Ze=e.overflow,An=n),n=Os(n,r.children),n.flags|=4096,n)}function nl(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Oo(e.return,n,t)}function so(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function uc(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(ce(e,n,r.children,t),r=U.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nl(e,t,n);else if(e.tag===19)nl(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(U,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&ai(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),so(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&ai(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}so(n,!0,t,null,o);break;case"together":so(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Or(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function tn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Dn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(k(153));if(n.child!==null){for(e=n.child,t=wn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=wn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function qf(e,n,t){switch(n.tag){case 3:ac(n),dt();break;case 5:Au(n);break;case 1:ye(n.type)&&ni(n);break;case 4:Ls(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;F(ii,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(F(U,U.current&1),n.flags|=128,null):t&n.child.childLanes?lc(e,n,t):(F(U,U.current&1),e=tn(e,n,t),e!==null?e.sibling:null);F(U,U.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return uc(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(U,U.current),r)break;return null;case 22:case 23:return n.lanes=0,oc(e,n,t)}return tn(e,n,t)}var cc,Qo,dc,fc;cc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Qo=function(){};dc=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Mn(Ve.current);var o=null;switch(t){case"input":i=go(e,i),r=go(e,r),o=[];break;case"select":i=q({},i,{value:void 0}),r=q({},r,{value:void 0}),o=[];break;case"textarea":i=wo(e,i),r=wo(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Jr)}_o(t,r);var s;t=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&($t.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(t||(t={}),t[s]=l[s])}else t||(o||(o=[]),o.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&($t.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&B("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}t&&(o=o||[]).push("style",t);var u=o;(n.updateQueue=u)&&(n.flags|=4)}};fc=function(e,n,t,r){t!==r&&(n.flags|=4)};function Ct(e,n){if(!$)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ae(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Vf(e,n,t){var r=n.pendingProps;switch(Ps(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(n),null;case 1:return ye(n.type)&&ei(),ae(n),null;case 3:return r=n.stateNode,ht(),H(ge),H(ue),zs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Pr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ne!==null&&(ts(Ne),Ne=null))),Qo(e,n),ae(n),null;case 5:Is(n);var i=Mn(nr.current);if(t=n.type,e!==null&&n.stateNode!=null)dc(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(k(166));return ae(n),null}if(e=Mn(Ve.current),Pr(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[He]=n,r[Jt]=o,e=(n.mode&1)!==0,t){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(i=0;i<Lt.length;i++)B(Lt[i],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":ca(r,o),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},B("invalid",r);break;case"textarea":fa(r,o),B("invalid",r)}_o(t,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Tr(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Tr(r.textContent,a,e),i=["children",""+a]):$t.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&B("scroll",r)}switch(t){case"input":gr(r),da(r,o,!0);break;case"textarea":gr(r),ha(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Jr)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ol(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(t,{is:r.is}):(e=s.createElement(t),t==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,t),e[He]=n,e[Jt]=r,cc(e,n,!1,!1),n.stateNode=e;e:{switch(s=So(t,r),t){case"dialog":B("cancel",e),B("close",e),i=r;break;case"iframe":case"object":case"embed":B("load",e),i=r;break;case"video":case"audio":for(i=0;i<Lt.length;i++)B(Lt[i],e);i=r;break;case"source":B("error",e),i=r;break;case"img":case"image":case"link":B("error",e),B("load",e),i=r;break;case"details":B("toggle",e),i=r;break;case"input":ca(e,r),i=go(e,r),B("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=q({},r,{value:void 0}),B("invalid",e);break;case"textarea":fa(e,r),i=wo(e,r),B("invalid",e);break;default:i=r}_o(t,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?$l(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Bl(e,l)):o==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Ut(e,l):typeof l=="number"&&Ut(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&($t.hasOwnProperty(o)?l!=null&&o==="onScroll"&&B("scroll",e):l!=null&&cs(e,o,l,s))}switch(t){case"input":gr(e),da(e,r,!1);break;case"textarea":gr(e),ha(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?rt(e,!!r.multiple,o,!1):r.defaultValue!=null&&rt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Jr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ae(n),null;case 6:if(e&&n.stateNode!=null)fc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(k(166));if(t=Mn(nr.current),Mn(Ve.current),Pr(n)){if(r=n.stateNode,t=n.memoizedProps,r[He]=n,(o=r.nodeValue!==t)&&(e=Se,e!==null))switch(e.tag){case 3:Tr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Tr(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[He]=n,n.stateNode=r}return ae(n),null;case 13:if(H(U),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&_e!==null&&n.mode&1&&!(n.flags&128))bu(),dt(),n.flags|=98560,o=!1;else if(o=Pr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[He]=n}else dt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ae(n),o=!1}else Ne!==null&&(ts(Ne),Ne=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||U.current&1?J===0&&(J=3):qs())),n.updateQueue!==null&&(n.flags|=4),ae(n),null);case 4:return ht(),Qo(e,n),e===null&&Zt(n.stateNode.containerInfo),ae(n),null;case 10:return Rs(n.type._context),ae(n),null;case 17:return ye(n.type)&&ei(),ae(n),null;case 19:if(H(U),o=n.memoizedState,o===null)return ae(n),null;if(r=(n.flags&128)!==0,s=o.rendering,s===null)if(r)Ct(o,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(s=ai(e),s!==null){for(n.flags|=128,Ct(o,!1),r=s.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return F(U,U.current&1|2),n.child}e=e.sibling}o.tail!==null&&G()>mt&&(n.flags|=128,r=!0,Ct(o,!1),n.lanes=4194304)}else{if(!r)if(e=ai(s),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ct(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!$)return ae(n),null}else 2*G()-o.renderingStartTime>mt&&t!==1073741824&&(n.flags|=128,r=!0,Ct(o,!1),n.lanes=4194304);o.isBackwards?(s.sibling=n.child,n.child=s):(t=o.last,t!==null?t.sibling=s:n.child=s,o.last=s)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=G(),n.sibling=null,t=U.current,F(U,r?t&1|2:t&1),n):(ae(n),null);case 22:case 23:return Ys(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?we&1073741824&&(ae(n),n.subtreeFlags&6&&(n.flags|=8192)):ae(n),null;case 24:return null;case 25:return null}throw Error(k(156,n.tag))}function Qf(e,n){switch(Ps(n),n.tag){case 1:return ye(n.type)&&ei(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ht(),H(ge),H(ue),zs(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Is(n),null;case 13:if(H(U),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(k(340));dt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return H(U),null;case 4:return ht(),null;case 10:return Rs(n.type._context),null;case 22:case 23:return Ys(),null;case 24:return null;default:return null}}var Wr=!1,le=!1,Kf=typeof WeakSet=="function"?WeakSet:Set,T=null;function nt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){V(e,n,r)}else t.current=null}function Ko(e,n,t){try{t()}catch(r){V(e,n,r)}}var tl=!1;function Gf(e,n){if(Lo=Gr,e=yu(),xs(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var s=0,a=-1,l=-1,u=0,h=0,m=e,f=null;n:for(;;){for(var g;m!==t||i!==0&&m.nodeType!==3||(a=s+i),m!==o||r!==0&&m.nodeType!==3||(l=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(g=m.firstChild)!==null;)f=m,m=g;for(;;){if(m===e)break n;if(f===t&&++u===i&&(a=s),f===o&&++h===r&&(l=s),(g=m.nextSibling)!==null)break;m=f,f=m.parentNode}m=g}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Io={focusedElem:e,selectionRange:t},Gr=!1,T=n;T!==null;)if(n=T,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,T=e;else for(;T!==null;){n=T;try{var w=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,A=w.memoizedState,d=n.stateNode,c=d.getSnapshotBeforeUpdate(n.elementType===n.type?v:ze(n.type,v),A);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(y){V(n,n.return,y)}if(e=n.sibling,e!==null){e.return=n.return,T=e;break}T=n.return}return w=tl,tl=!1,w}function Ft(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ko(n,t,o)}i=i.next}while(i!==r)}}function Ci(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Go(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function hc(e){var n=e.alternate;n!==null&&(e.alternate=null,hc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[He],delete n[Jt],delete n[No],delete n[Lf],delete n[If])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function pc(e){return e.tag===5||e.tag===3||e.tag===4}function rl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Jr));else if(r!==4&&(e=e.child,e!==null))for(Zo(e,n,t),e=e.sibling;e!==null;)Zo(e,n,t),e=e.sibling}function Xo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xo(e,n,t),e=e.sibling;e!==null;)Xo(e,n,t),e=e.sibling}var re=null,Ae=!1;function on(e,n,t){for(t=t.child;t!==null;)mc(e,n,t),t=t.sibling}function mc(e,n,t){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(wi,t)}catch{}switch(t.tag){case 5:le||nt(t,n);case 6:var r=re,i=Ae;re=null,on(e,n,t),re=r,Ae=i,re!==null&&(Ae?(e=re,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):re.removeChild(t.stateNode));break;case 18:re!==null&&(Ae?(e=re,t=t.stateNode,e.nodeType===8?Ji(e.parentNode,t):e.nodeType===1&&Ji(e,t),Qt(e)):Ji(re,t.stateNode));break;case 4:r=re,i=Ae,re=t.stateNode.containerInfo,Ae=!0,on(e,n,t),re=r,Ae=i;break;case 0:case 11:case 14:case 15:if(!le&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ko(t,n,s),i=i.next}while(i!==r)}on(e,n,t);break;case 1:if(!le&&(nt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){V(t,n,a)}on(e,n,t);break;case 21:on(e,n,t);break;case 22:t.mode&1?(le=(r=le)||t.memoizedState!==null,on(e,n,t),le=r):on(e,n,t);break;default:on(e,n,t)}}function il(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Kf),n.forEach(function(r){var i=oh.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Ie(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,s=n,a=s;e:for(;a!==null;){switch(a.tag){case 5:re=a.stateNode,Ae=!1;break e;case 3:re=a.stateNode.containerInfo,Ae=!0;break e;case 4:re=a.stateNode.containerInfo,Ae=!0;break e}a=a.return}if(re===null)throw Error(k(160));mc(o,s,i),re=null,Ae=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){V(i,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)gc(n,e),n=n.sibling}function gc(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ie(n,e),Oe(e),r&4){try{Ft(3,e,e.return),Ci(3,e)}catch(v){V(e,e.return,v)}try{Ft(5,e,e.return)}catch(v){V(e,e.return,v)}}break;case 1:Ie(n,e),Oe(e),r&512&&t!==null&&nt(t,t.return);break;case 5:if(Ie(n,e),Oe(e),r&512&&t!==null&&nt(t,t.return),e.flags&32){var i=e.stateNode;try{Ut(i,"")}catch(v){V(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=t!==null?t.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&jl(i,o),So(a,s);var u=So(a,o);for(s=0;s<l.length;s+=2){var h=l[s],m=l[s+1];h==="style"?$l(i,m):h==="dangerouslySetInnerHTML"?Bl(i,m):h==="children"?Ut(i,m):cs(i,h,m,u)}switch(a){case"input":yo(i,o);break;case"textarea":Fl(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?rt(i,!!o.multiple,g,!1):f!==!!o.multiple&&(o.defaultValue!=null?rt(i,!!o.multiple,o.defaultValue,!0):rt(i,!!o.multiple,o.multiple?[]:"",!1))}i[Jt]=o}catch(v){V(e,e.return,v)}}break;case 6:if(Ie(n,e),Oe(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){V(e,e.return,v)}}break;case 3:if(Ie(n,e),Oe(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Qt(n.containerInfo)}catch(v){V(e,e.return,v)}break;case 4:Ie(n,e),Oe(e);break;case 13:Ie(n,e),Oe(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||($s=G())),r&4&&il(e);break;case 22:if(h=t!==null&&t.memoizedState!==null,e.mode&1?(le=(u=le)||h,Ie(n,e),le=u):Ie(n,e),Oe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(T=e,h=e.child;h!==null;){for(m=T=h;T!==null;){switch(f=T,g=f.child,f.tag){case 0:case 11:case 14:case 15:Ft(4,f,f.return);break;case 1:nt(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){r=f,t=f.return;try{n=r,w.props=n.memoizedProps,w.state=n.memoizedState,w.componentWillUnmount()}catch(v){V(r,t,v)}}break;case 5:nt(f,f.return);break;case 22:if(f.memoizedState!==null){sl(m);continue}}g!==null?(g.return=f,T=g):sl(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,l=m.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Hl("display",s))}catch(v){V(e,e.return,v)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(v){V(e,e.return,v)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ie(n,e),Oe(e),r&4&&il(e);break;case 21:break;default:Ie(n,e),Oe(e)}}function Oe(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(pc(t)){var r=t;break e}t=t.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ut(i,""),r.flags&=-33);var o=rl(e);Xo(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=rl(e);Zo(e,a,s);break;default:throw Error(k(161))}}catch(l){V(e,e.return,l)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Zf(e,n,t){T=e,yc(e)}function yc(e,n,t){for(var r=(e.mode&1)!==0;T!==null;){var i=T,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Wr;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||le;a=Wr;var u=le;if(Wr=s,(le=l)&&!u)for(T=i;T!==null;)s=T,l=s.child,s.tag===22&&s.memoizedState!==null?al(i):l!==null?(l.return=s,T=l):al(i);for(;o!==null;)T=o,yc(o),o=o.sibling;T=i,Wr=a,le=u}ol(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,T=o):ol(e)}}function ol(e){for(;T!==null;){var n=T;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:le||Ci(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!le)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:ze(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&$a(n,o,r);break;case 3:var s=n.updateQueue;if(s!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}$a(n,s,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var l=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Qt(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}le||n.flags&512&&Go(n)}catch(f){V(n,n.return,f)}}if(n===e){T=null;break}if(t=n.sibling,t!==null){t.return=n.return,T=t;break}T=n.return}}function sl(e){for(;T!==null;){var n=T;if(n===e){T=null;break}var t=n.sibling;if(t!==null){t.return=n.return,T=t;break}T=n.return}}function al(e){for(;T!==null;){var n=T;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ci(4,n)}catch(l){V(n,t,l)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(l){V(n,i,l)}}var o=n.return;try{Go(n)}catch(l){V(n,o,l)}break;case 5:var s=n.return;try{Go(n)}catch(l){V(n,s,l)}}}catch(l){V(n,n.return,l)}if(n===e){T=null;break}var a=n.sibling;if(a!==null){a.return=n.return,T=a;break}T=n.return}}var Xf=Math.ceil,ci=rn.ReactCurrentDispatcher,Bs=rn.ReactCurrentOwner,Re=rn.ReactCurrentBatchConfig,z=0,te=null,Z=null,ie=0,we=0,tt=xn(0),J=0,or=null,Dn=0,Wi=0,Hs=0,Ot=null,pe=null,$s=0,mt=1/0,Qe=null,di=!1,Jo=null,yn=null,Rr=!1,dn=null,fi=0,Bt=0,es=null,Br=-1,Hr=0;function de(){return z&6?G():Br!==-1?Br:Br=G()}function kn(e){return e.mode&1?z&2&&ie!==0?ie&-ie:Af.transition!==null?(Hr===0&&(Hr=nu()),Hr):(e=j,e!==0||(e=window.event,e=e===void 0?16:lu(e.type)),e):1}function je(e,n,t,r){if(50<Bt)throw Bt=0,es=null,Error(k(185));ar(e,t,r),(!(z&2)||e!==te)&&(e===te&&(!(z&2)&&(Wi|=t),J===4&&un(e,ie)),ke(e,r),t===1&&z===0&&!(n.mode&1)&&(mt=G()+500,Ti&&Tn()))}function ke(e,n){var t=e.callbackNode;zd(e,n);var r=Kr(e,e===te?ie:0);if(r===0)t!==null&&ga(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&ga(t),n===1)e.tag===0?zf(ll.bind(null,e)):Cu(ll.bind(null,e)),bf(function(){!(z&6)&&Tn()}),t=null;else{switch(tu(r)){case 1:t=ms;break;case 4:t=Jl;break;case 16:t=Qr;break;case 536870912:t=eu;break;default:t=Qr}t=Pc(t,kc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function kc(e,n){if(Br=-1,Hr=0,z&6)throw Error(k(327));var t=e.callbackNode;if(lt()&&e.callbackNode!==t)return null;var r=Kr(e,e===te?ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=hi(e,r);else{n=r;var i=z;z|=2;var o=vc();(te!==e||ie!==n)&&(Qe=null,mt=G()+500,Ln(e,n));do try{nh();break}catch(a){wc(e,a)}while(!0);Ws(),ci.current=o,z=i,Z!==null?n=0:(te=null,ie=0,n=J)}if(n!==0){if(n===2&&(i=Co(e),i!==0&&(r=i,n=ns(e,i))),n===1)throw t=or,Ln(e,0),un(e,r),ke(e,G()),t;if(n===6)un(e,r);else{if(i=e.current.alternate,!(r&30)&&!Jf(i)&&(n=hi(e,r),n===2&&(o=Co(e),o!==0&&(r=o,n=ns(e,o))),n===1))throw t=or,Ln(e,0),un(e,r),ke(e,G()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(k(345));case 2:Wn(e,pe,Qe);break;case 3:if(un(e,r),(r&130023424)===r&&(n=$s+500-G(),10<n)){if(Kr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){de(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ao(Wn.bind(null,e,pe,Qe),n);break}Wn(e,pe,Qe);break;case 4:if(un(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var s=31-De(r);o=1<<s,s=n[s],s>i&&(i=s),r&=~o}if(r=i,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Xf(r/1960))-r,10<r){e.timeoutHandle=Ao(Wn.bind(null,e,pe,Qe),r);break}Wn(e,pe,Qe);break;case 5:Wn(e,pe,Qe);break;default:throw Error(k(329))}}}return ke(e,G()),e.callbackNode===t?kc.bind(null,e):null}function ns(e,n){var t=Ot;return e.current.memoizedState.isDehydrated&&(Ln(e,n).flags|=256),e=hi(e,n),e!==2&&(n=pe,pe=t,n!==null&&ts(n)),e}function ts(e){pe===null?pe=e:pe.push.apply(pe,e)}function Jf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!Fe(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function un(e,n){for(n&=~Hs,n&=~Wi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-De(n),r=1<<t;e[t]=-1,n&=~r}}function ll(e){if(z&6)throw Error(k(327));lt();var n=Kr(e,0);if(!(n&1))return ke(e,G()),null;var t=hi(e,n);if(e.tag!==0&&t===2){var r=Co(e);r!==0&&(n=r,t=ns(e,r))}if(t===1)throw t=or,Ln(e,0),un(e,n),ke(e,G()),t;if(t===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Wn(e,pe,Qe),ke(e,G()),null}function Us(e,n){var t=z;z|=1;try{return e(n)}finally{z=t,z===0&&(mt=G()+500,Ti&&Tn())}}function jn(e){dn!==null&&dn.tag===0&&!(z&6)&&lt();var n=z;z|=1;var t=Re.transition,r=j;try{if(Re.transition=null,j=1,e)return e()}finally{j=r,Re.transition=t,z=n,!(z&6)&&Tn()}}function Ys(){we=tt.current,H(tt)}function Ln(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Rf(t)),Z!==null)for(t=Z.return;t!==null;){var r=t;switch(Ps(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ei();break;case 3:ht(),H(ge),H(ue),zs();break;case 5:Is(r);break;case 4:ht();break;case 13:H(U);break;case 19:H(U);break;case 10:Rs(r.type._context);break;case 22:case 23:Ys()}t=t.return}if(te=e,Z=e=wn(e.current,null),ie=we=n,J=0,or=null,Hs=Wi=Dn=0,pe=Ot=null,bn!==null){for(n=0;n<bn.length;n++)if(t=bn[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}t.pending=r}bn=null}return e}function wc(e,n){do{var t=Z;try{if(Ws(),jr.current=ui,li){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}li=!1}if(Nn=0,ne=X=Y=null,jt=!1,tr=0,Bs.current=null,t===null||t.return===null){J=1,or=n,Z=null;break}e:{var o=e,s=t.return,a=t,l=n;if(n=ie,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=Ka(s);if(g!==null){g.flags&=-257,Ga(g,s,a,o,n),g.mode&1&&Qa(o,u,n),n=g,l=u;var w=n.updateQueue;if(w===null){var v=new Set;v.add(l),n.updateQueue=v}else w.add(l);break e}else{if(!(n&1)){Qa(o,u,n),qs();break e}l=Error(k(426))}}else if($&&a.mode&1){var A=Ka(s);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Ga(A,s,a,o,n),Es(pt(l,a));break e}}o=l=pt(l,a),J!==4&&(J=2),Ot===null?Ot=[o]:Ot.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var d=tc(o,l,n);Ha(o,d);break e;case 1:a=l;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(yn===null||!yn.has(p)))){o.flags|=65536,n&=-n,o.lanes|=n;var y=rc(o,a,n);Ha(o,y);break e}}o=o.return}while(o!==null)}Sc(t)}catch(x){n=x,Z===t&&t!==null&&(Z=t=t.return);continue}break}while(!0)}function vc(){var e=ci.current;return ci.current=ui,e===null?ui:e}function qs(){(J===0||J===3||J===2)&&(J=4),te===null||!(Dn&268435455)&&!(Wi&268435455)||un(te,ie)}function hi(e,n){var t=z;z|=2;var r=vc();(te!==e||ie!==n)&&(Qe=null,Ln(e,n));do try{eh();break}catch(i){wc(e,i)}while(!0);if(Ws(),z=t,ci.current=r,Z!==null)throw Error(k(261));return te=null,ie=0,J}function eh(){for(;Z!==null;)_c(Z)}function nh(){for(;Z!==null&&!Pd();)_c(Z)}function _c(e){var n=Tc(e.alternate,e,we);e.memoizedProps=e.pendingProps,n===null?Sc(e):Z=n,Bs.current=null}function Sc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Qf(t,n),t!==null){t.flags&=32767,Z=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,Z=null;return}}else if(t=Vf(t,n,we),t!==null){Z=t;return}if(n=n.sibling,n!==null){Z=n;return}Z=n=e}while(n!==null);J===0&&(J=5)}function Wn(e,n,t){var r=j,i=Re.transition;try{Re.transition=null,j=1,th(e,n,t,r)}finally{Re.transition=i,j=r}return null}function th(e,n,t,r){do lt();while(dn!==null);if(z&6)throw Error(k(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Ad(e,o),e===te&&(Z=te=null,ie=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Rr||(Rr=!0,Pc(Qr,function(){return lt(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=Re.transition,Re.transition=null;var s=j;j=1;var a=z;z|=4,Bs.current=null,Gf(e,t),gc(t,e),Sf(Io),Gr=!!Lo,Io=Lo=null,e.current=t,Zf(t),Ed(),z=a,j=s,Re.transition=o}else e.current=t;if(Rr&&(Rr=!1,dn=e,fi=i),o=e.pendingLanes,o===0&&(yn=null),Rd(t.stateNode),ke(e,G()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(di)throw di=!1,e=Jo,Jo=null,e;return fi&1&&e.tag!==0&&lt(),o=e.pendingLanes,o&1?e===es?Bt++:(Bt=0,es=e):Bt=0,Tn(),null}function lt(){if(dn!==null){var e=tu(fi),n=Re.transition,t=j;try{if(Re.transition=null,j=16>e?16:e,dn===null)var r=!1;else{if(e=dn,dn=null,fi=0,z&6)throw Error(k(331));var i=z;for(z|=4,T=e.current;T!==null;){var o=T,s=o.child;if(T.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(T=u;T!==null;){var h=T;switch(h.tag){case 0:case 11:case 15:Ft(8,h,o)}var m=h.child;if(m!==null)m.return=h,T=m;else for(;T!==null;){h=T;var f=h.sibling,g=h.return;if(hc(h),h===u){T=null;break}if(f!==null){f.return=g,T=f;break}T=g}}}var w=o.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var A=v.sibling;v.sibling=null,v=A}while(v!==null)}}T=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,T=s;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ft(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,T=d;break e}T=o.return}}var c=e.current;for(T=c;T!==null;){s=T;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,T=p;else e:for(s=c;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ci(9,a)}}catch(x){V(a,a.return,x)}if(a===s){T=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,T=y;break e}T=a.return}}if(z=i,Tn(),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(wi,e)}catch{}r=!0}return r}finally{j=t,Re.transition=n}}return!1}function ul(e,n,t){n=pt(t,n),n=tc(e,n,1),e=gn(e,n,1),n=de(),e!==null&&(ar(e,1,n),ke(e,n))}function V(e,n,t){if(e.tag===3)ul(e,e,t);else for(;n!==null;){if(n.tag===3){ul(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yn===null||!yn.has(r))){e=pt(t,e),e=rc(n,e,1),n=gn(n,e,1),e=de(),n!==null&&(ar(n,1,e),ke(n,e));break}}n=n.return}}function rh(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=de(),e.pingedLanes|=e.suspendedLanes&t,te===e&&(ie&t)===t&&(J===4||J===3&&(ie&130023424)===ie&&500>G()-$s?Ln(e,0):Hs|=t),ke(e,n)}function xc(e,n){n===0&&(e.mode&1?(n=wr,wr<<=1,!(wr&130023424)&&(wr=4194304)):n=1);var t=de();e=nn(e,n),e!==null&&(ar(e,n,t),ke(e,t))}function ih(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),xc(e,t)}function oh(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(n),xc(e,t)}var Tc;Tc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ge.current)me=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return me=!1,qf(e,n,t);me=!!(e.flags&131072)}else me=!1,$&&n.flags&1048576&&Wu(n,ri,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Or(e,n),e=n.pendingProps;var i=ct(n,ue.current);at(n,t),i=Ns(null,n,r,e,i,t);var o=Ds();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ye(r)?(o=!0,ni(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ms(n),i.updater=Ei,n.stateNode=i,i._reactInternals=n,Ho(n,r,e,t),n=Yo(null,n,r,!0,o,t)):(n.tag=0,$&&o&&Ts(n),ce(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Or(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=ah(r),e=ze(r,e),i){case 0:n=Uo(null,n,r,e,t);break e;case 1:n=Ja(null,n,r,e,t);break e;case 11:n=Za(null,n,r,e,t);break e;case 14:n=Xa(null,n,r,ze(r.type,e),t);break e}throw Error(k(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:ze(r,i),Uo(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:ze(r,i),Ja(e,n,r,i,t);case 3:e:{if(ac(n),e===null)throw Error(k(387));r=n.pendingProps,o=n.memoizedState,i=o.element,zu(e,n),si(n,r,null,t);var s=n.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=pt(Error(k(423)),n),n=el(e,n,r,t,i);break e}else if(r!==i){i=pt(Error(k(424)),n),n=el(e,n,r,t,i);break e}else for(_e=mn(n.stateNode.containerInfo.firstChild),Se=n,$=!0,Ne=null,t=Lu(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(dt(),r===i){n=tn(e,n,t);break e}ce(e,n,r,t)}n=n.child}return n;case 5:return Au(n),e===null&&Fo(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,zo(r,i)?s=null:o!==null&&zo(r,o)&&(n.flags|=32),sc(e,n),ce(e,n,s,t),n.child;case 6:return e===null&&Fo(n),null;case 13:return lc(e,n,t);case 4:return Ls(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ft(n,null,r,t):ce(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:ze(r,i),Za(e,n,r,i,t);case 7:return ce(e,n,n.pendingProps,t),n.child;case 8:return ce(e,n,n.pendingProps.children,t),n.child;case 12:return ce(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,s=i.value,F(ii,r._currentValue),r._currentValue=s,o!==null)if(Fe(o.value,s)){if(o.children===i.children&&!ge.current){n=tn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Xe(-1,t&-t),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}o.lanes|=t,l=o.alternate,l!==null&&(l.lanes|=t),Oo(o.return,t,n),a.lanes|=t;break}l=l.next}}else if(o.tag===10)s=o.type===n.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(k(341));s.lanes|=t,a=s.alternate,a!==null&&(a.lanes|=t),Oo(s,t,n),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===n){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ce(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,at(n,t),i=be(i),r=r(i),n.flags|=1,ce(e,n,r,t),n.child;case 14:return r=n.type,i=ze(r,n.pendingProps),i=ze(r.type,i),Xa(e,n,r,i,t);case 15:return ic(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:ze(r,i),Or(e,n),n.tag=1,ye(r)?(e=!0,ni(n)):e=!1,at(n,t),nc(n,r,i),Ho(n,r,i,t),Yo(null,n,r,!0,e,t);case 19:return uc(e,n,t);case 22:return oc(e,n,t)}throw Error(k(156,n.tag))};function Pc(e,n){return Xl(e,n)}function sh(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,n,t,r){return new sh(e,n,t,r)}function Vs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ah(e){if(typeof e=="function")return Vs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fs)return 11;if(e===hs)return 14}return 2}function wn(e,n){var t=e.alternate;return t===null?(t=We(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function $r(e,n,t,r,i,o){var s=2;if(r=e,typeof e=="function")Vs(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case qn:return In(t.children,i,o,n);case ds:s=8,i|=8;break;case fo:return e=We(12,t,n,i|2),e.elementType=fo,e.lanes=o,e;case ho:return e=We(13,t,n,i),e.elementType=ho,e.lanes=o,e;case po:return e=We(19,t,n,i),e.elementType=po,e.lanes=o,e;case Al:return Ri(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Il:s=10;break e;case zl:s=9;break e;case fs:s=11;break e;case hs:s=14;break e;case sn:s=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return n=We(s,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function In(e,n,t,r){return e=We(7,e,r,n),e.lanes=t,e}function Ri(e,n,t,r){return e=We(22,e,r,n),e.elementType=Al,e.lanes=t,e.stateNode={isHidden:!1},e}function ao(e,n,t){return e=We(6,e,null,n),e.lanes=t,e}function lo(e,n,t){return n=We(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function lh(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hi(0),this.expirationTimes=Hi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Qs(e,n,t,r,i,o,s,a,l){return e=new lh(e,n,t,a,l),n===1?(n=1,o===!0&&(n|=8)):n=0,o=We(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ms(o),e}function uh(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yn,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Ec(e){if(!e)return _n;e=e._reactInternals;e:{if(Hn(e)!==e||e.tag!==1)throw Error(k(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ye(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(k(171))}if(e.tag===1){var t=e.type;if(ye(t))return Eu(e,t,n)}return n}function Cc(e,n,t,r,i,o,s,a,l){return e=Qs(t,r,!0,e,i,o,s,a,l),e.context=Ec(null),t=e.current,r=de(),i=kn(t),o=Xe(r,i),o.callback=n??null,gn(t,o,i),e.current.lanes=i,ar(e,i,r),ke(e,r),e}function bi(e,n,t,r){var i=n.current,o=de(),s=kn(i);return t=Ec(t),n.context===null?n.context=t:n.pendingContext=t,n=Xe(o,s),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=gn(i,n,s),e!==null&&(je(e,i,s,o),Dr(e,i,s)),s}function pi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cl(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ks(e,n){cl(e,n),(e=e.alternate)&&cl(e,n)}function ch(){return null}var Wc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Gs(e){this._internalRoot=e}Mi.prototype.render=Gs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(k(409));bi(e,n,null,null)};Mi.prototype.unmount=Gs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;jn(function(){bi(null,e,null,null)}),n[en]=null}};function Mi(e){this._internalRoot=e}Mi.prototype.unstable_scheduleHydration=function(e){if(e){var n=ou();e={blockedOn:null,target:e,priority:n};for(var t=0;t<ln.length&&n!==0&&n<ln[t].priority;t++);ln.splice(t,0,e),t===0&&au(e)}};function Zs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Li(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function dl(){}function dh(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=pi(s);o.call(u)}}var s=Cc(n,r,e,0,null,!1,!1,"",dl);return e._reactRootContainer=s,e[en]=s.current,Zt(e.nodeType===8?e.parentNode:e),jn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=pi(l);a.call(u)}}var l=Qs(e,0,!1,null,null,!1,!1,"",dl);return e._reactRootContainer=l,e[en]=l.current,Zt(e.nodeType===8?e.parentNode:e),jn(function(){bi(n,l,t,r)}),l}function Ii(e,n,t,r,i){var o=t._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=pi(s);a.call(l)}}bi(n,s,e,i)}else s=dh(t,n,e,i,r);return pi(s)}ru=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Mt(n.pendingLanes);t!==0&&(gs(n,t|1),ke(n,G()),!(z&6)&&(mt=G()+500,Tn()))}break;case 13:jn(function(){var r=nn(e,1);if(r!==null){var i=de();je(r,e,1,i)}}),Ks(e,1)}};ys=function(e){if(e.tag===13){var n=nn(e,134217728);if(n!==null){var t=de();je(n,e,134217728,t)}Ks(e,134217728)}};iu=function(e){if(e.tag===13){var n=kn(e),t=nn(e,n);if(t!==null){var r=de();je(t,e,n,r)}Ks(e,n)}};ou=function(){return j};su=function(e,n){var t=j;try{return j=e,n()}finally{j=t}};To=function(e,n,t){switch(n){case"input":if(yo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=xi(r);if(!i)throw Error(k(90));Dl(r),yo(r,i)}}}break;case"textarea":Fl(e,t);break;case"select":n=t.value,n!=null&&rt(e,!!t.multiple,n,!1)}};ql=Us;Vl=jn;var fh={usingClientEntryPoint:!1,Events:[ur,Gn,xi,Ul,Yl,Us]},Wt={findFiberByHostInstance:Rn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hh={bundleType:Wt.bundleType,version:Wt.version,rendererPackageName:Wt.rendererPackageName,rendererConfig:Wt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gl(e),e===null?null:e.stateNode},findFiberByHostInstance:Wt.findFiberByHostInstance||ch,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var br=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!br.isDisabled&&br.supportsFiber)try{wi=br.inject(hh),qe=br}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fh;Te.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zs(n))throw Error(k(200));return uh(e,n,null,t)};Te.createRoot=function(e,n){if(!Zs(e))throw Error(k(299));var t=!1,r="",i=Wc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Qs(e,1,!1,null,null,t,!1,r,i),e[en]=n.current,Zt(e.nodeType===8?e.parentNode:e),new Gs(n)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Gl(n),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return jn(e)};Te.hydrate=function(e,n,t){if(!Li(n))throw Error(k(200));return Ii(null,e,n,!0,t)};Te.hydrateRoot=function(e,n,t){if(!Zs(e))throw Error(k(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",s=Wc;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),n=Cc(n,null,e,1,t??null,i,!1,o,s),e[en]=n.current,Zt(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Mi(n)};Te.render=function(e,n,t){if(!Li(n))throw Error(k(200));return Ii(null,e,n,!1,t)};Te.unmountComponentAtNode=function(e){if(!Li(e))throw Error(k(40));return e._reactRootContainer?(jn(function(){Ii(null,null,e,!1,function(){e._reactRootContainer=null,e[en]=null})}),!0):!1};Te.unstable_batchedUpdates=Us;Te.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Li(t))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Ii(e,n,t,!1,r)};Te.version="18.3.1-next-f1338f8080-20240426";function Rc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rc)}catch(e){console.error(e)}}Rc(),Rl.exports=Te;var ph=Rl.exports,fl=ph;uo.createRoot=fl.createRoot,uo.hydrateRoot=fl.hydrateRoot;const mh=[{label:"Curriculum",hash:"#/"},{label:"Reference",hash:"#/reference"},{label:"Appendices",hash:"#/appendices"}];function gh({currentHash:e,totalComplete:n}){return e.split("/")[0]+""+(e.split("/")[1]??""),S.jsx("nav",{className:"nav",role:"navigation","aria-label":"Main navigation",children:S.jsxs("div",{className:"nav__inner",children:[S.jsx("a",{className:"nav__brand",href:"#/",children:"VunaFX"}),S.jsx("div",{className:"nav__links",children:mh.map(({label:t,hash:r})=>{const i=r==="#/"?e==="#/"||e==="#":e.startsWith(r);return S.jsx("a",{href:r,className:`nav__link${i?" nav__link--active":""}`,children:t},r)})}),S.jsxs("span",{className:"nav__progress",children:[n," / 52 weeks"]})]})})}const bc=[{id:1,name:"Compressed Foundations",label:"Phase 1",weeks:[1,2,3,4],description:"Build the conceptual and mechanical foundation. No live money. Pure study and setup."},{id:2,name:"Demo with Rigor",label:"Phase 2",weeks:[5,6,7,8,9,10,11,12],description:"Accumulate 50–100 journaled demo trades on one setup. Prove potential edge before risking real money."},{id:3,name:"Live Micro-Size",label:"Phase 3",weeks:[13,14,15,16,17,18,19,20,21,22,23,24,25,26],description:"Translate demo edge to live trading at tiny size. Goal is execution proof, not income."},{id:4,name:"Scale on Demonstrated Edge",label:"Phase 4",weeks:[27,28,29,30,31,32,33,34,35,36,37,38,39],description:"Scale capital first, then risk %, only on demonstrated positive expectancy."},{id:5,name:"Compounding & Honest Assessment",label:"Phase 5",weeks:[40,41,42,43,44,45,46,47,48,49,50,51,52],description:"Compound the demonstrated edge. Prepare for the Month 12 honest assessment."}],Ur=[{number:1,title:"Forex Market Fundamentals",phase:1},{number:2,title:"Leverage, Margin, and the Mathematics of Risk",phase:1},{number:3,title:"Position Sizing and Broker Mechanics",phase:1},{number:4,title:"SMC Foundations: Market Structure",phase:1},{number:5,title:"Liquidity Concepts",phase:2},{number:6,title:"The Part A Eval",phase:2},{number:7,title:"Defining Your ONE Setup",phase:2},{number:8,title:"Demo Trading: First 5 Trades",phase:2},{number:9,title:"Demo Trading: Trades 6–15",phase:2},{number:10,title:"Demo Trading: Trades 16–25",phase:2},{number:11,title:"Demo Trading: Trades 26–40",phase:2},{number:12,title:"Demo Trading: Trades 41–50+ (Phase 2 Gate)",phase:2},{number:13,title:"First Live Trades (Week 1 of 2)",phase:3},{number:14,title:"First Live Trades (Week 2 of 2)",phase:3},{number:15,title:"Building the Live Sample (Week 1 of 8)",phase:3},{number:16,title:"Building the Live Sample (Week 2 of 8)",phase:3},{number:17,title:"Building the Live Sample (Week 3 of 8)",phase:3},{number:18,title:"Building the Live Sample (Week 4 of 8)",phase:3},{number:19,title:"Building the Live Sample (Week 5 of 8)",phase:3},{number:20,title:"Building the Live Sample (Week 6 of 8)",phase:3},{number:21,title:"Building the Live Sample (Week 7 of 8)",phase:3},{number:22,title:"Building the Live Sample (Week 8 of 8)",phase:3},{number:23,title:"Mid-Phase Review and Adjustment (Week 1 of 4)",phase:3},{number:24,title:"Mid-Phase Review and Adjustment (Week 2 of 4)",phase:3},{number:25,title:"Mid-Phase Review and Adjustment (Week 3 of 4)",phase:3},{number:26,title:"Mid-Phase Review: Phase 3 Decision (Week 4 of 4)",phase:3},{number:27,title:"Scaling Capital (Week 1 of 6)",phase:4},{number:28,title:"Scaling Capital (Week 2 of 6)",phase:4},{number:29,title:"Scaling Capital (Week 3 of 6)",phase:4},{number:30,title:"Scaling Capital (Week 4 of 6)",phase:4},{number:31,title:"Scaling Capital (Week 5 of 6)",phase:4},{number:32,title:"Scaling Capital (Week 6 of 6)",phase:4},{number:33,title:"Scaling Risk (Week 1 of 7)",phase:4},{number:34,title:"Scaling Risk (Week 2 of 7)",phase:4},{number:35,title:"Scaling Risk (Week 3 of 7)",phase:4},{number:36,title:"Scaling Risk (Week 4 of 7): 0.75% → 1% Decision",phase:4},{number:37,title:"Scaling Risk (Week 5 of 7): First Weeks at 1%",phase:4},{number:38,title:"Scaling Risk (Week 6 of 7)",phase:4},{number:39,title:"Scaling Risk (Week 7 of 7): Phase 4 Completion",phase:4},{number:40,title:"Steady State Execution (Week 1 of 9)",phase:5},{number:41,title:"Steady State Execution (Week 2 of 9)",phase:5},{number:42,title:"Steady State Execution (Week 3 of 9)",phase:5},{number:43,title:"Steady State Execution (Week 4 of 9)",phase:5},{number:44,title:"Steady State Execution (Week 5 of 9)",phase:5},{number:45,title:"Steady State Execution (Week 6 of 9)",phase:5},{number:46,title:"Steady State Execution (Week 7 of 9)",phase:5},{number:47,title:"Steady State Execution (Week 8 of 9)",phase:5},{number:48,title:"Steady State Execution (Week 9 of 9)",phase:5},{number:49,title:"The Month 12 Assessment (Week 1 of 4)",phase:5},{number:50,title:"The Month 12 Assessment (Week 2 of 4): Formal Assessment",phase:5},{number:51,title:"The Month 12 Assessment (Week 3 of 4): Year 2 Planning",phase:5},{number:52,title:"The Month 12 Assessment (Week 4 of 4): Close Out Year 1",phase:5}];function yh(e){return bc.find(n=>n.weeks.includes(e))}function kh(e,n,t){const r=t?t.slice(0,1200).replace(/\n{3,}/g,`

`):"",i=`I'm working through the VunaFX 52-week forex trading curriculum.

I'm on Week ${e}: ${n}.

Here's the week content:

${r}

Please be my study partner. Summarise the key points for this week in 3–4 bullet points, then ask me one question to test my understanding. If I answer correctly, move to the next concept. If not, explain it more clearly.`;return`https://claude.ai/new?q=${encodeURIComponent(i)}`}function hl({completed:e,total:n,label:t}){const r=n===0?0:Math.round(e/n*100);return S.jsxs("div",{children:[t&&S.jsxs("div",{className:"progress-meta",children:[S.jsx("span",{children:t}),S.jsxs("span",{children:[r,"%"]})]}),S.jsx("div",{className:"progress-bar",role:"progressbar","aria-valuenow":r,"aria-valuemin":0,"aria-valuemax":100,children:S.jsx("div",{className:"progress-bar__fill",style:{width:`${r}%`}})})]})}function wh({isComplete:e,toggleWeek:n,completedCount:t,totalComplete:r}){return S.jsxs("main",{className:"page page--wide",children:[S.jsxs("div",{className:"home-header",children:[S.jsx("h1",{children:"52-Week Forex Trading Curriculum"}),S.jsx("p",{children:"One pair · One session · One setup · Track your progress week by week."}),S.jsxs("div",{className:"overall-progress",children:[S.jsxs("div",{className:"progress-meta",children:[S.jsx("strong",{children:"Overall progress"}),S.jsxs("span",{children:[r," of 52 weeks complete"]})]}),S.jsx(hl,{completed:r,total:52})]})]}),bc.map(i=>{const o=Ur.filter(a=>i.weeks.includes(a.number)),s=t(i.weeks);return S.jsxs("section",{className:"phase-section",children:[S.jsxs("div",{className:"phase-header",children:[S.jsxs("div",{className:"phase-title-row",children:[S.jsx("span",{className:"phase-badge","data-phase":i.id,children:i.label}),S.jsx("h2",{className:"phase-name",children:i.name})]}),S.jsx("p",{className:"phase-desc",children:i.description}),S.jsxs("div",{className:"phase-progress-row",children:[S.jsx(hl,{completed:s,total:i.weeks.length}),S.jsxs("span",{className:"phase-progress-count mono",children:[s,"/",i.weeks.length]})]})]}),S.jsx("div",{className:"week-grid",children:o.map(a=>{const l=e(a.number);return S.jsxs("div",{className:`week-card${l?" week-card--done":""}`,onClick:()=>{window.location.hash=`#/week/${a.number}`},role:"listitem",children:[S.jsx("button",{className:`week-card__check${l?" week-card__check--done":""}`,"aria-label":l?`Mark week ${a.number} incomplete`:`Mark week ${a.number} complete`,onClick:u=>{u.stopPropagation(),n(a.number)}}),S.jsxs("div",{className:"week-card__body",children:[S.jsxs("div",{className:"week-card__number",children:["Week ",String(a.number).padStart(2,"0")]}),S.jsx("div",{className:"week-card__title",children:a.title})]})]},a.number)})})]},i.id)})]})}const vh=`# Week 1 — Forex Market Fundamentals

**Phase:** PHASE 1 — Compressed Foundations (Weeks 1–4)
**Phase goal:** Build the conceptual and mechanical foundation for trading. No live money. No demo trading yet. Pure study and setup.

> **Mindset for this phase:** You are an apprentice before you are a tradesman. The temptation to "just try a few trades to see" will be strong by Week 2. Resist it. Three weeks of patience here costs nothing. Three weeks of impatience can cost your entire stake.

---

## Learning objectives
- Understand what forex actually is and how it differs from stock investing (which you already know)
- Master the vocabulary of currency pairs, quotes, and trading sessions
- Understand what moves currency markets at a high level

## Core concepts (defined from scratch)

- **Forex (FX):** The foreign exchange market — where currencies are traded against each other. Unlike stocks (which represent ownership), forex trades represent a bet on the relative value of one currency vs. another.
- **Currency pair:** Two currencies quoted together, e.g., EUR/USD. The first is the *base* currency; the second is the *quote* currency. "EUR/USD at 1.0850" means 1 euro costs 1.0850 US dollars.
- **Majors / Minors / Exotics:** *Majors* are pairs involving USD and another top-7 currency (EUR/USD, GBP/USD, USD/JPY, etc.). *Minors* are non-USD pairs of major currencies (EUR/GBP, GBP/JPY). *Exotics* involve a major + emerging market currency (USD/TRY, USD/ZAR). **You will only trade a major.**
- **Pip:** The smallest standard price increment. For most pairs, 1 pip = 0.0001 (the 4th decimal). For JPY pairs, 1 pip = 0.01 (the 2nd decimal). Memorize this difference — it is the #1 cause of beginner position-sizing errors.
- **Spread:** The difference between the buy (ask) price and sell (bid) price. This is the broker's markup — your first cost on every trade.
- **Bid / Ask:** Bid = price at which you can sell. Ask = price at which you can buy. You always buy at the higher price and sell at the lower price. The difference is the spread.
- **Trading sessions:** The forex market is 24/5, but liquidity concentrates in three sessions: Asian (Tokyo), London, and New York. **You will trade one session only, likely London or the London-NY overlap.**

## Reading
- Babypips "School of Pipsology" — Preschool and Kindergarten (free, babypips.com)
- HFM's own educational content on their website (know your broker)

## Practical exercises
1. Open a demo account on HFM with MT5. Do not place any trades yet.
2. Identify the three sessions on the clock in your timezone ([your two timezones] — know both, since you move between them).
3. Watch EUR/USD for 30 minutes during the Asian session and 30 minutes during the London open. Note the difference in candle size and speed.
4. Write out the difference between your stock investing experience and forex trading in your own words. Give to trainer.

## Trainer check-in topics
- Their trading history on HFM: what account type, what pair, what session
- Why they chose SMC as a methodology
- Ask: *"What were your three worst months in the last two years, what caused them, and what did you change?"*

## Self-assessment questions
- Can you explain to someone what a pip is, and why it's different for JPY pairs?
- Can you explain what EUR/USD at 1.0850 actually means, physically?
- Do you understand why the spread exists and who benefits from it?

## Common pitfalls at this stage
- Treating forex like stocks. It is not. Leverage changes the game fundamentally.
- Getting excited by 24/5 access and thinking you should always be trading. You should almost never be trading.

## Red flags
- If you find yourself wanting to place a real trade this week, stop and re-read the Operating Principles.
`,_h=`# Week 2 — Leverage, Margin, and the Mathematics of Risk

**Phase:** PHASE 1 — Compressed Foundations (Weeks 1–4)

---

## Learning objectives
- Understand leverage and margin deeply — this is the single concept that separates forex from stock investing
- Internalize why 1-2% risk per trade is the professional standard
- Understand drawdown mathematics and why it punishes oversizing

## Core concepts

- **Leverage:** The ability to control a large position with a small deposit. "1:500 leverage" means $1 controls $500 of currency. HFM offers leverage up to 1:1000 on some account types. **Leverage is a loaded weapon pointed at your account.** It does not create wealth; it amplifies outcomes — including losses — by the same factor.
- **Margin:** The deposit required to open a leveraged position. If you open a 1-lot EUR/USD position (worth $108,500 at 1.0850) with 1:100 leverage, your required margin is $1,085.
- **Lot size:** The standard unit of forex trading.
  - 1 standard lot = 100,000 units of base currency
  - 1 mini lot = 10,000 units (0.1 standard)
  - 1 micro lot = 1,000 units (0.01 standard)
  **You will trade micro lots for months. This is normal.**
- **Pip value:** What one pip is worth in your account currency, per lot. For EUR/USD on a USD-denominated account:
  - 1 standard lot: $10/pip
  - 1 mini lot: $1/pip
  - 1 micro lot: $0.10/pip
- **Margin call / Stop-out:** When your account equity drops below a certain % of required margin, the broker warns you (margin call) and then force-closes your positions (stop-out). On HFM, know these levels exactly.
- **Drawdown:** The decline from a peak in account equity to a subsequent trough. If your account goes from $2,000 to $1,700, that's a 15% drawdown.

## The drawdown recovery table (memorize this)

| Drawdown | Gain Required to Recover |
|---|---|
| 10% | 11% |
| 20% | 25% |
| 30% | 43% |
| 50% | 100% |
| 75% | 300% |
| 90% | 900% |

This is why professional traders cap risk per trade at 1-2%. Drawdowns compound asymmetrically. A 50% loss requires a 100% gain to recover — which, at 2% per winner, is 50 consecutive perfect trades with no losses. Impossible.

## The 1% risk rule

With 1% risk per trade:
- 10 consecutive losses = ~10% drawdown. Recoverable.
- 20 consecutive losses = ~18% drawdown. Painful but survivable.

With 5% risk per trade:
- 10 consecutive losses = ~40% drawdown. Career-threatening.
- 20 consecutive losses = ~64% drawdown. Account effectively dead.

## Reading
- Van Tharp, *Trade Your Way to Financial Freedom* — chapters on position sizing (you can find summaries online if you don't want the full book yet)
- HFM's margin and leverage documentation for your specific account type

## Practical exercises
1. Calculate your required margin for a 0.1 lot EUR/USD position at 1:500 leverage. Do it by hand.
2. Calculate your required margin for a 0.01 lot EUR/USD position at 1:500 leverage. By hand.
3. Build a drawdown recovery calculator in a spreadsheet. Input: drawdown %. Output: gain required. Use it to understand why 1% risk matters.
4. Look up HFM's exact margin call and stop-out levels. Write them down.

## Trainer check-in topics
- Their actual risk per trade. If they say anything higher than 2%, ask them to walk you through their drawdown history.
- How they handle a losing streak.

## Self-assessment questions
- Can you explain, in under 60 seconds, why risking 5% per trade is mathematically different (not just "riskier") than risking 1%?
- Do you know what happens to your pending orders on HFM if EUR/USD gaps 100 pips on NFP Friday?

## Common pitfalls
- "But bigger size means bigger profits when I'm right!" — True, and bigger losses when you're wrong, and you will be wrong a lot. The asymmetry of drawdown math means oversizing destroys compounding even if your win rate is positive.

## Red flags
- If you catch yourself thinking "I'd rather risk more and make real money faster," re-read the drawdown table. That thought is why most beginners blow up.
`,Sh=`# Week 3 — Position Sizing and Broker Mechanics

**Phase:** PHASE 1 — Compressed Foundations (Weeks 1–4)

---

## Learning objectives
- Master the position-sizing formula for any pair, any account size
- Know HFM's exact mechanics cold
- Configure MT5 correctly for your trading

## Core concepts

### The position-sizing formula

\`\`\`
Position size (lots) = (Account balance × Risk %) / (Stop distance in pips × Pip value per lot)
\`\`\`

**Worked example:**
- Account: $2,000
- Risk: 1% = $20
- Trade: Long EUR/USD, entry 1.0850, stop 1.0820
- Stop distance: 30 pips
- Pip value per standard lot EUR/USD: $10

Position size = $20 / (30 × $10) = $20 / $300 = **0.067 lots** (round down to 0.06)

### JPY pair gotcha

- Pip value per standard lot for JPY pairs depends on the current rate and is approximately $8-10, but the pip itself is the 2nd decimal (0.01), not the 4th.
- Use a pip value calculator (HFM provides one; so does myfxbook) until the math is second nature.

### Order types you need to know
- **Market order:** Buy/sell immediately at current price. Fast but subject to slippage.
- **Limit order:** Buy below current price, or sell above. For planned entries.
- **Stop order:** Buy above current price, or sell below. For breakout entries.
- **Stop-loss (SL):** Automatic exit order to cap your loss. **Every trade has one. Always. No exceptions.**
- **Take-profit (TP):** Automatic exit order to capture profit.

### Swap / Rollover
- Overnight fee (credit or debit) for holding a leveraged position past 5pm NY time
- Based on the interest rate differential between the two currencies
- **Wednesday night is triple swap** — to account for weekend settlement. This is the #1 "surprise cost" for beginners.

### Spreads — what to expect on HFM for EUR/USD
- Standard account: ~1.0-1.5 pips typical
- Premium/Zero account: ~0.0-0.3 pips + commission
- Widens significantly during news events and Asian session

## Practical exercises
1. Calculate position size for 5 different trade scenarios your trainer gives you. By hand. Then verify with a calculator.
2. On MT5 demo, practice placing: market order, limit order, stop order, adding SL/TP to an existing position, closing a partial position.
3. Set up your MT5 charts the way your trainer uses them (timeframes, drawing tools, colors). Save as a template.
4. Find and screenshot HFM's swap rates for EUR/USD on your account type. Calculate the cost of holding 0.1 lot long for one week, including Wednesday triple.

## Trainer check-in topics
- Their MT5 setup — screenshot and replicate
- Their specific order-entry routine
- Their rules for managing a trade once it's open

## Self-assessment questions
- Can you calculate position size in under 30 seconds for any pair, any account, any stop distance?
- Do you know the difference between a stop-loss order and a stop order (for entry)?
- Can you explain Wednesday triple swap to someone who's never heard of it?

## Common pitfalls
- Forgetting to set a stop-loss "just this once"
- Mis-calculating pip value on JPY pairs
- Not accounting for spread when calculating stop distance

## Red flags
- If you open a trade and realize 5 minutes later you didn't set a stop, close it. That's a rule violation. Log it.
`,xh=`# Week 4 — SMC Foundations: Market Structure

**Phase:** PHASE 1 — Compressed Foundations (Weeks 1–4)

---

## Learning objectives
- Understand what "market structure" means in the SMC framework
- Identify trends, ranges, and structural shifts on a chart
- Begin reading charts the way your trainer reads them

## Core concepts

- **Market structure:** The pattern of highs and lows that define whether a market is trending, ranging, or shifting. SMC trading is built on reading structure correctly.

- **Uptrend (bullish structure):** A sequence of higher highs (HH) and higher lows (HL). As long as price keeps making HH and HL, the trend is intact.

- **Downtrend (bearish structure):** A sequence of lower highs (LH) and lower lows (LL). As long as this continues, the trend is intact.

- **Range / Consolidation:** Price oscillating between a defined high and low without making new HH/HL or LH/LL. Most of the time (~70%), markets range.

- **Break of Structure (BOS):** When price breaks the most recent significant high (in an uptrend) or low (in a downtrend), confirming trend continuation.

- **Change of Character (CHOCH):** When price breaks a structural level in the *opposite* direction of the prevailing trend, signaling a potential trend reversal. BOS = continuation. CHOCH = reversal.

- **Higher timeframe (HTF) vs. lower timeframe (LTF):** Structure on the 4-hour chart is more meaningful than on the 15-minute. SMC traders typically identify bias on HTF and execute on LTF.

### The distinction that matters
- **BOS:** Price continues in the direction of the existing trend — a "confirmation." In an uptrend, price takes out the previous high.
- **CHOCH:** Price breaks against the existing trend — a "warning." In an uptrend, price takes out the previous low that should have held.

A CHOCH does not confirm a reversal by itself. It opens the door to one.

## Reading
- YouTube: The Inner Circle Trader (ICT) — his "Free Mentorship" series if your trainer endorses ICT specifically. **Do not rabbit-hole. One or two videos per week max.**
- Ask your trainer for their two or three recommended SMC resources. Use only those.

## Practical exercises
1. Open EUR/USD on the 4-hour chart. Identify the current trend state (uptrend / downtrend / range) and mark it. Share with trainer.
2. Mark the last 5 BOS events on the chart. Mark the last CHOCH, if any.
3. Do the same for the 1-hour chart. Notice how structure can be bullish on HTF and bearish on LTF simultaneously.
4. Watch live price for 1 hour during London session. Just watch. Don't trade. Notice where price "wants" to go and where it hesitates.

## Trainer check-in topics
- How they define a "significant" high or low vs. noise
- Their hierarchy of timeframes — which one sets bias, which one gives entries
- Ask them to walk through a recent trade showing the BOS or CHOCH that triggered it

## Self-assessment questions
- Can you look at any chart and, within 30 seconds, identify the current trend state and the last BOS?
- Can you explain the difference between BOS and CHOCH to someone who has never heard the terms?
- Do you understand why timeframe alignment matters?

## Common pitfalls
- Seeing BOS everywhere, including in noise. Significance matters.
- Over-relying on LTF and ignoring HTF bias. You will take counter-trend trades and lose.
- Confusing a pullback with a CHOCH.

## Red flags
- If charts still look like random noise at the end of Week 4, extend the phase by a week. Do not push to demo trading until structure is visually obvious to you.

---

## PHASE 1 CHECKPOINT — End of Week 4

Before proceeding, confirm with your trainer:

- [ ] You can explain leverage, margin, and drawdown math from scratch
- [ ] You can calculate position size in under 30 seconds for any scenario
- [ ] MT5 is fully configured and you can execute all order types fluently
- [ ] You know HFM's exact spreads, swap rates, margin call level, and stop-out level for your account
- [ ] You can identify trend state, BOS, and CHOCH on any chart within 30 seconds
- [ ] Your journaling infrastructure is set up and tested (with fake trades)
- [ ] Your trainer has reviewed this plan and given you their edits
- [ ] You have printed the Kill Switches page and it is next to your trading screen

**If any box is unchecked, extend Phase 1 by one week. Do not skip forward.**
`,Th=`# Week 5 — Liquidity Concepts (Trainer's Module 3)

**Phase:** PHASE 2 — Demo with Rigor (Weeks 5–12)
**Phase goal:** Accumulate 50-100 journaled demo trades with a defined setup and rigorous process. Prove to yourself (and your trainer) that you have a potential edge before risking a cent of real money.

> **Critical principle for this phase:** Demo-trade exactly as if it were live. Same position sizing (relative to demo account size). Same rules. Same journaling. The only thing different is the money at stake.

---

## Learning objectives
- Understand what liquidity is in the market microstructure sense
- Identify buy-side and sell-side liquidity pools on a chart
- Understand why stop hunts happen and what equal highs/lows signal

## Core concepts

- **Liquidity (in SMC terms):** Areas of the chart where significant clusters of pending orders (especially stop-losses) likely sit. Price is "drawn" toward these areas because large market participants need liquidity to fill their positions.

- **Buy-side liquidity (BSL):** Liquidity that sits *above* the current price. It is called "buy-side" because the stops above the market are buy orders (stops to close short positions, or stops to enter breakout longs). When price rallies into BSL, it triggers those buys.

- **Sell-side liquidity (SSL):** Liquidity that sits *below* current price. Stops below the market are sell orders. When price drops into SSL, it triggers those sells.

- **Equal highs / Equal lows:** When price tests the same level multiple times, stop-losses cluster just beyond it. Equal highs = BSL just above. Equal lows = SSL just below. These are "magnet" levels.

- **Stop hunt (liquidity sweep / liquidity grab):** When price briefly spikes through a level (taking out the stops clustered there) and then reverses. This is often the *actual* start of a move, not the fake-out most retail traders see it as.

- **The SMC trader's perspective:** Retail traders place stops at obvious levels (below support, above resistance, below equal lows, above equal highs). Large players push price into those stops to create liquidity for their own orders. As a trader, your job is to position yourself *after* the stop hunt, not before it.

### The trade thesis (simplified)

1. Identify where retail stops are (equal highs/lows, obvious swing levels)
2. Wait for price to sweep that liquidity
3. Look for a shift in market structure (mini-CHOCH on LTF)
4. Enter in the direction of the reversal, with stop beyond the sweep

This is the skeleton of most SMC setups. Your specific setup (to be defined in Week 7-8) will add precision.

## Practical exercises
1. On 20 historical chart examples (your trainer provides), identify: where was the BSL? Where was the SSL? Where did price sweep liquidity, and what happened after?
2. Watch one London session live. Mark the equal highs and equal lows before session open. See if price sweeps them.
3. Study 10 examples where price approached liquidity but did *not* sweep it. What was different?

## Trainer check-in topics
- Their specific liquidity-based setup(s)
- How they distinguish a genuine sweep from a minor wick
- What timeframe they use to identify liquidity vs. execute the trade

## Self-assessment questions
- Can you look at any chart and mark the nearest BSL and SSL in under 30 seconds?
- Can you explain why stop hunts happen, in terms of order flow?
- Do you understand the difference between price "reaching" a level and price "sweeping" it?

## Common pitfalls
- Seeing liquidity sweeps everywhere. Not every wick is a sweep.
- Entering before the sweep completes. Patience is the edge here.
`,Ph=`# Week 6 — The Part A Eval

**Phase:** PHASE 2 — Demo with Rigor (Weeks 5–12)

---

**This week is different. You take the formal eval. If you pass at ≥80, you begin demo trading in Week 7. If you pass at 70-79, you retake failed sections before proceeding. If you fail (<70), you study for two more weeks and retake.**

**The full eval is in Appendix A of this curriculum.** Take it cold — no notes, 90 minutes, trainer administers.

## After the eval

- **If passed:** Week 7 begins demo trading. Skip to week-07.md.
- **If not passed:** Repeat weeks 1-5 content focused on failed sections. Retake in Week 8.

## Scoring Summary (from Appendix A)

| Score | Result |
|---|---|
| 90-100 | Exceptional. Move to demo trading in Week 7. |
| 80-89 | Pass. Begin demo trading in Week 7. |
| 70-79 | Partial. Retake failed sections before demo. |
| Below 70 | Not ready. Two more weeks of study. Retake Week 8. |
`,Eh=`# Week 7 — Defining Your ONE Setup

**Phase:** PHASE 2 — Demo with Rigor (Weeks 5–12)

---

## Learning objectives
- With your trainer, define the single setup you will trade for the next 3 months minimum
- Write the setup rules in unambiguous language
- Understand why specialization compounds faster than diversification

## Core principle

You will pick **one setup**. You will trade only that setup. For at least 3 months. No exceptions.

This is the single most important decision in this phase. It is also the one most beginners get wrong by picking too many setups or changing setup every time they have a losing week.

## How to choose your setup with your trainer

1. Ask them: *"If you had to teach me only one setup, what would it be?"* Use that.
2. Setup should have clear, objective entry criteria. "It looks good" is not a setup. "Price sweeps equal lows on M15 during London session, then forms a bullish CHOCH within 3 candles, entry on retest of the order block that created the CHOCH, stop below the sweep low, target at the next M15 BSL" — that is a setup.
3. Setup should have backtestable entry, stop, and target rules.

## Write your setup in this template

\`\`\`
SETUP NAME: [e.g., "London Sweep + CHOCH"]

TIMEFRAME (for bias): _______ (e.g., H4)
TIMEFRAME (for entry): _______ (e.g., M15)
SESSION: _______ (e.g., London open, 08:00-11:00 [your local time])
PAIR: _______ (e.g., EUR/USD)

BIAS CONDITIONS (must all be true):
1. _____________________________
2. _____________________________
3. _____________________________

TRIGGER CONDITIONS (must all be true):
1. _____________________________
2. _____________________________
3. _____________________________

ENTRY: _____________________________
STOP: _____________________________
TARGET: _____________________________
MINIMUM R:R: _____ (typically 1:2 or better)

DISQUALIFYING CONDITIONS (do NOT take the trade if):
1. _____________________________
2. _____________________________
\`\`\`

## Practical exercises
1. With your trainer, complete the setup template above.
2. Find 20 historical examples of your setup on EUR/USD charts. Mark each one. Calculate: if you had taken all 20, what would your win rate and average R be?
3. Have your trainer review the 20 examples. How many do they agree are valid? How many do they reject as false signals?

## Trainer check-in topics
- Their answer to: "If I only trade this one setup, what's the realistic win rate I should expect?"
- The top 3 reasons this setup fails and how to spot those conditions in advance
`,Ch=`# Week 8 — Demo Trading: First 5 Trades

**Phase:** PHASE 2 — Demo with Rigor (Weeks 5–12)
**Block:** 50-Trade Demo Sample (Weeks 8–12)

> This week is the opening of the 50-trade demo block. Weeks 8 through 12 form a single continuous block focused on accumulating a statistically meaningful sample of journaled demo trades on your one defined setup.

---

## Block learning objectives (Weeks 8–12)
- Execute your defined setup on demo, with full journaling, until you accumulate 50+ trades
- Calculate your actual expectancy and compare to hypothesis
- Build the mental muscle of waiting for your setup and ignoring everything else

## Block principles

- **Quality over quantity.** If your setup only appears 2-3 times per week, take only those 2-3 trades. Do not force trades because you "want to practice."
- **Full journal discipline from trade 1.** Every trade. Both screenshots. Every spreadsheet column. No exceptions.
- **Weekly trainer review, every week.** Sunday night send + 20-minute review within 48 hours.
- **Size as if live.** On your demo account, use position sizing as if this were your real capital. If your real capital will be $500 (10% of a $5,000 allocation, for example), set your demo to $500 and size accordingly.

## Expected pace

2-4 trades per week is normal for a selective SMC setup. At this pace, 50 trades takes 13-25 weeks. You have 5 weeks (8-12). If you only hit 20-30 trades by end of Week 12, that's fine — demo trading extends into Phase 3 until you hit 50.

---

## Week 8 milestone — First 5 trades

**Target:** Complete your first 5 demo trades on your defined setup.

Expect rule violations. Log them honestly. Review every trade with trainer.

**Focus for this week:**
- Confirm your setup template is unambiguous. If you struggle to decide "is this my setup?", the rules need more specificity.
- Screenshot both entry and exit for all 5 trades — no exceptions, even when you know the trade is a loser.
- Submit Sunday accountability send.
`,Wh=`# Week 9 — Demo Trading: Trades 6–15

**Phase:** PHASE 2 — Demo with Rigor (Weeks 5–12)
**Block:** 50-Trade Demo Sample (Weeks 8–12)

> This week continues the 50-trade demo block. See week-08.md for the full block overview, learning objectives, and principles.

---

## Week 9 milestone — Trades 6–15

**Target:** Reach trade 15 on your defined setup.

You'll start seeing patterns in your own mistakes. The most common at this stage: entering before your trigger fully forms. Patience is the edge.

**Focus for this week:**
- Review your Week 8 trades with trainer before placing any new ones. What was your most common error?
- Track "trades I wanted to take but didn't" in a separate section of your journal. These are valuable data — they reveal whether your discipline is holding.
- If you had any rule violations in Week 8, name the specific rule and write down what you'll do differently.

**Question to reflect on after each trade:**
- Did I wait for all trigger conditions before entering? Y/N
- Was the stop placed exactly where my setup rules specify? Y/N
- Did I take a screenshot at entry before touching anything else? Y/N
`,Rh=`# Week 10 — Demo Trading: Trades 16–25

**Phase:** PHASE 2 — Demo with Rigor (Weeks 5–12)
**Block:** 50-Trade Demo Sample (Weeks 8–12)

> This week continues the 50-trade demo block. See week-08.md for the full block overview, learning objectives, and principles.

---

## Week 10 milestone — Trades 16–25

**Target:** Reach trade 25 on your defined setup.

This is where boredom kicks in and you'll want to take non-setup trades. Do not. Log "trades I wanted to take but didn't" separately — these are valuable data. The discipline of *not* trading is as important as the discipline of trading correctly.

**Focus for this week:**
- Calculate your running win rate and average R across all trades so far. Is it close to your hypothesis from the 20 historical examples in Week 7?
- If your win rate is significantly lower than expected, bring the last 10 trades to trainer. Are you executing the setup correctly, or has the setup changed in your mind?
- Double-check: are you trading *only* during your designated session? Any off-session trades count as rule violations.

**The boredom trap:**
Weeks 9-10 are when most demo traders start taking "practice" trades outside their setup. These trades corrupt your data and train bad habits. If you're bored, review old chart examples from Week 7 instead. Never fill boredom with a trade.
`,bh=`# Week 11 — Demo Trading: Trades 26–40

**Phase:** PHASE 2 — Demo with Rigor (Weeks 5–12)
**Block:** 50-Trade Demo Sample (Weeks 8–12)

> This week continues the 50-trade demo block. See week-08.md for the full block overview, learning objectives, and principles.

---

## Week 11 milestone — Trades 26–40

**Target:** Reach trade 40 on your defined setup.

Calculate running expectancy. Is it positive? Is your win rate matching your hypothesis? If there is massive divergence, stop and review with trainer before continuing.

**Focus for this week:**
- Run a full mid-sample stats calculation:
  - Win rate (%)
  - Average winner (R)
  - Average loser (R)
  - Expectancy = (win% × avg winner) − (loss% × avg loser)
  - Rule adherence rate (%)
- Compare these numbers to your Week 7 hypothesis. Bring the comparison to trainer.

**Interpreting divergence:**

| Situation | Likely cause | Action |
|---|---|---|
| Win rate 10%+ below hypothesis | Execution issue — entering suboptimal setups | Review last 10 entries with trainer |
| Win rate roughly matches, but expectancy negative | Cutting winners too early or letting losers run | Check R-outcomes on each trade |
| Rule adherence below 90% | Discipline issue | One week of reduced size until adherence recovers |

**Reminder:** At this stage, positive expectancy is a nice-to-have; 90%+ rule adherence is mandatory. You cannot assess whether your setup has edge if you're not executing it cleanly.
`,Mh=`# Week 12 — Demo Trading: Trades 41–50+ (Phase 2 Gate)

**Phase:** PHASE 2 — Demo with Rigor (Weeks 5–12)
**Block:** 50-Trade Demo Sample (Weeks 8–12)

> This is the final week of the 50-trade demo block. See week-08.md for the full block overview, learning objectives, and principles.

---

## Week 12 milestone — Trades 41–50+

**Target:** Cross the 50-trade threshold. Assess Phase 2 gate criteria.

**Phase 2 gate:** Do you have ≥50 trades with positive expectancy, ≥90% rule adherence, and a drawdown you could psychologically survive on a live account? If yes, proceed to Phase 3. If no, continue demo until all three are true.

---

## Common pitfalls across the full demo phase

- Taking "extra" trades outside your setup because you're bored
- Moving your stop because "price looks like it'll come back"
- Skipping journal entries after losers because it feels bad
- Believing demo success means you're "ready" — demo and live are psychologically different

## Red flags

- Win rate below 30% (setup may be broken or execution poor)
- Rule adherence below 80% (you're not ready for live money)
- Inability to wait for setup conditions (overtrading signals poor discipline)

---

## PHASE 2 CHECKPOINT — End of Week 12

Before proceeding to live trading:

- [ ] 50+ journaled demo trades on your one setup
- [ ] Positive expectancy over the sample (even if barely positive)
- [ ] Rule adherence rate ≥90%
- [ ] You can articulate your edge in the template sentence with specific numbers
- [ ] Maximum drawdown during demo was psychologically tolerable
- [ ] Trainer signs off on readiness for live

**If any box is unchecked, stay in Phase 2. There is no penalty for taking longer. There is enormous penalty for going live unready.**
`,Lh=`# Week 13 — First Live Trades (Week 1 of 2)

**Phase:** PHASE 3 — Live Micro-Size (Weeks 13–26)
**Phase goal:** Translate your demonstrated demo edge to live trading at tiny size. The goal of this phase is not income. The goal is to prove you can execute your edge with real money on the line without deviation.

## Capital deployment

- Live account size: **10-20% of your total allocated capital**
- The other 80-90% stays in reserve. Do not fund the live account with more until Phase 4.
- Risk per trade: **0.5% of the live account**
- Why 0.5%, not 1%: Live money triggers emotional responses demo does not. Half size lets you learn the psychology without catastrophic cost if your edge disappears under real conditions.

---

## Block: First Live Trades (Weeks 13–14)

**The transition is real.** You will feel every pip. Trades that felt easy on demo will feel agonizing. This is expected. The purpose of these two weeks is to *experience* it, not to make money.

## Rules for Weeks 13–14

- Maximum 2 trades per day
- Maximum 4 trades per week (even if setup appears more often)
- Every trade gets same-day journal + trainer notification
- No position size changes, even on "high conviction" setups
- If you feel physical stress (racing heart, tight chest) during a trade: close your platform for 24 hours after exit

## Focus for Week 13

This is your first week with real money on the line. Before placing any trade:
1. Confirm your setup template is in front of you — physical printout or second monitor.
2. Confirm position size calculator is open and the result verified before entry.
3. Set your stop-loss *before* you click buy/sell.

Notice how the emotional experience differs from demo. Write one sentence in your journal after each trade about what you felt — not for analysis, just to have the record.
`,Ih=`# Week 14 — First Live Trades (Week 2 of 2)

**Phase:** PHASE 3 — Live Micro-Size (Weeks 13–26)
**Block:** First Live Trades (Weeks 13–14)

> This week continues the first live trades block. See week-13.md for the full block overview, rules, and capital deployment details.

---

## Focus for Week 14

By now you have at least 2-4 live trades under your belt. The novelty of live trading has begun to wear off — which is when the second risk appears: habituation. Don't become numb to real money on the line. Respect it, but don't fear it.

## Self-assessment at end of Week 14

Answer these honestly. Share answers with trainer:

- Did my execution match my demo execution?
- What emotions surfaced that didn't exist on demo?
- Did I follow every rule?
- Did I want to break the 4-trade-per-week cap? Why?

## Transition to Weeks 15–22

If Week 14 self-assessment is positive (rule adherence ≥90%, no kill switch triggers), proceed to the Building the Live Sample block (week-15.md). The trade cap of 4 per week is lifted; the maximum is now 3 trades per day.

If you feel unready — if the emotional weight of live trading is distorting your execution — stay at the Week 13-14 rules for one more week before progressing.
`,zh=`# Week 15 — Building the Live Sample (Week 1 of 8)

**Phase:** PHASE 3 — Live Micro-Size (Weeks 13–26)
**Block:** Building the Live Sample (Weeks 15–22)

> Weeks 15 through 22 form a single continuous block focused on accumulating 50-80 live trades. The shared structure, weekly pattern, and diagnostic table below apply to all eight weeks. Each week's file notes its specific focus.

---

## Block target

**50-80 live trades by end of Week 22.**

---

## Weekly pattern (applies every week in this block)

- **Monday:** Review weekend charts, mark key levels, identify bias
- **Tuesday–Friday:** Execute setup when it appears. Maximum 3 trades per day.
- **Sunday:** Accountability send + trainer review

## Monthly pattern

- Last Sunday of each month: Calculate monthly stats
- Review with trainer against hypothesis from demo phase
- If live stats diverge significantly from demo: diagnose before continuing

## What to watch for

| Observation | Likely cause | Action |
|---|---|---|
| Live win rate 10%+ below demo | Emotional execution (exiting winners early, moving stops on losers) | Reduce to 1 trade per day, focus on adherence |
| Live drawdown feels unbearable at 0.5% | Account size is too large relative to your psychology | Reduce live capital, stay at 0.5% |
| Overtrading — 5+ trades per day | Emotional need to "make it back" or FOMO | Implement hard daily trade cap, trainer review |
| Perfect rule adherence but losing money | Edge may be weaker than demo suggested | Stay on course, extend sample to 100+ trades before judging |

---

## Focus for Week 15

You've just come off 2 weeks of cautious entry into live trading. This week the training wheels come off — maximum 3 trades per day, standard journaling discipline.

Before this week begins:
- Confirm your setup template is still written exactly as defined in Week 7. No silent edits.
- Confirm your demo expectancy from Phase 2. That's your benchmark. Post it somewhere visible.
- Confirm your live account funding is at 10-20% of total allocation.
`,Ah=`# Week 16 — Building the Live Sample (Week 2 of 8)

**Phase:** PHASE 3 — Live Micro-Size (Weeks 13–26)
**Block:** Building the Live Sample (Weeks 15–22)

> See week-15.md for the full block overview, weekly pattern, monthly pattern, and diagnostic table.

---

## Focus for Week 16

By now you have roughly 2-8 live trades from Weeks 13-15. This week, run your first live stats snapshot — even if your sample is small, the habit of calculating matters.

**Calculate and record:**
- Trades taken (total live, not demo)
- Win rate (%)
- Average winner (R)
- Average loser (R)
- Expectancy per trade (R)
- Rule adherence (%)

**Compare to your demo stats from Phase 2.** Note any divergence, even if it seems small. Share with trainer at Sunday review.

**Key discipline check:** Are you trading *only* your one setup? Not a variation of it, not "something similar." The exact setup defined in Week 7. If the setup hasn't appeared this week, the correct number of trades this week is zero.
`,Nh=`# Week 17 — Building the Live Sample (Week 3 of 8)

**Phase:** PHASE 3 — Live Micro-Size (Weeks 13–26)
**Block:** Building the Live Sample (Weeks 15–22)

> See week-15.md for the full block overview, weekly pattern, monthly pattern, and diagnostic table.

---

## Focus for Week 17

End of Month 4 territory. The statistics from the Appendix B Month 4 Survival Guide apply directly here.

**Month 4 is when most beginners break.** You've had enough wins to feel confident and not enough losses to stay humble. A losing streak may arrive this week or next.

**When the streak hits, work through this in order:**

1. **Check rule adherence.** Did you follow every rule on every losing trade? If yes, the losses are variance and your system is working. If no, the losses are execution failures disguised as setup failures.
2. **Check setup quality.** Are you taking A+ setups only, or marginal ones because you're impatient?
3. **Check market conditions.** Is the current environment suited to your setup?
4. **Reduce size, do not stop.** If drawdown hits 10%+, halve position size for the next week.
5. **Extra trainer review.** Month 4 = double your weekly review time if needed.

**The Month 4 non-negotiables:**
- Do not increase position size to "catch up"
- Do not take trades outside your setup
- Do not change your setup in the middle of a drawdown
- Do not quit during the streak
`,Dh=`# Week 18 — Building the Live Sample (Week 4 of 8)

**Phase:** PHASE 3 — Live Micro-Size (Weeks 13–26)
**Block:** Building the Live Sample (Weeks 15–22)

> See week-15.md for the full block overview, weekly pattern, monthly pattern, and diagnostic table.

---

## Focus for Week 18

You are approaching the halfway point of the live sample block. This is a good week for a mid-block check-in with your trainer — not an emergency review, but a structured one.

**Agenda for this week's trainer review:**
1. Run full stats: win rate, average R, expectancy, rule adherence, max drawdown to date.
2. Show trainer 3 trades: your best-executed (regardless of outcome), your worst-executed, and one you're uncertain about.
3. Ask: *"Looking at my last 3-4 weeks of live trades, what is the single biggest gap between my execution and my setup rules?"*

**Mindset check:**
Live trading at micro-size is supposed to be boring. If it doesn't feel boring — if you feel excited, anxious, or compelled to trade more — that emotional signal needs examination. Calm, process-focused execution is the target state.
`,jh=`# Week 19 — Building the Live Sample (Week 5 of 8)

**Phase:** PHASE 3 — Live Micro-Size (Weeks 13–26)
**Block:** Building the Live Sample (Weeks 15–22)

> See week-15.md for the full block overview, weekly pattern, monthly pattern, and diagnostic table.

---

## Focus for Week 19

By Week 19 you have roughly 20-35 live trades. The sample is becoming statistically meaningful — but not yet conclusive. Resist drawing firm conclusions.

**Common mistake at this stage:** "I have a 55% win rate over 25 trades — I've proven my edge." You have not. 25 trades is too small a sample to distinguish skill from variance. Stay the course.

**Equally common mistake:** "I have a 35% win rate over 25 trades — my setup doesn't work." Also potentially wrong. A 45%-win-rate setup has significant variance at 25 trades. The 50-100 trade threshold from Phase 2 applies to live trading too.

**This week's self-assessment:**
- Am I executing the same setup I defined in Week 7, or has it silently drifted?
- Have I added any unofficial "filters" that my rules don't include?
- Have I removed any trigger conditions to justify marginal setups?

If you answer yes to any of these, bring it to trainer. Setup creep is invisible until it isn't.
`,Fh=`# Week 20 — Building the Live Sample (Week 6 of 8)

**Phase:** PHASE 3 — Live Micro-Size (Weeks 13–26)
**Block:** Building the Live Sample (Weeks 15–22)

> See week-15.md for the full block overview, weekly pattern, monthly pattern, and diagnostic table.

---

## Focus for Week 20

End of Month 5 territory. Run your monthly stats review (last Sunday of the month).

**Monthly stats to calculate and record:**

| Metric | Value |
|---|---|
| Total live trades | |
| Wins | |
| Losses | |
| Win rate % | |
| Average winner (R) | |
| Average loser (R) | |
| Expectancy per trade (R) | |
| Max drawdown % (month) | |
| Rule adherence % | |

**Compare to:**
- Your demo expectancy from Phase 2
- Last month's live stats

**The question that matters:** Is the trajectory improving, flat, or worsening? One bad month is variance. A worsening trend across two months needs diagnosis.

**Sunday accountability this week:** Include your monthly stats table in the send to trainer. Not just the weekly snapshot — the full running totals since Phase 3 began.
`,Oh=`# Week 21 — Building the Live Sample (Week 7 of 8)

**Phase:** PHASE 3 — Live Micro-Size (Weeks 13–26)
**Block:** Building the Live Sample (Weeks 15–22)

> See week-15.md for the full block overview, weekly pattern, monthly pattern, and diagnostic table.

---

## Focus for Week 21

One week before the end of this block. Begin preparing your end-of-block assessment for Week 22.

**By the end of Week 21, have ready:**
- Running cumulative stats: all live trades since Week 13, not just recent ones
- A written answer to: *"Does my live performance so far justify continuing to Phase 4, or does it suggest I need more time in Phase 3?"*
- Three specific execution improvements you've made since Week 13

**Diagnostic self-check using the block's watch-for table:**

1. Is my live win rate within 10% of my demo win rate?
2. Does the live drawdown feel manageable at 0.5% risk?
3. Am I staying at 3 or fewer trades per day?
4. If my rule adherence is perfect but I'm losing, am I staying the course for the full sample?

If any answer triggers concern, raise it at Sunday review — don't wait for the end-of-block assessment.
`,Bh=`# Week 22 — Building the Live Sample (Week 8 of 8)

**Phase:** PHASE 3 — Live Micro-Size (Weeks 13–26)
**Block:** Building the Live Sample (Weeks 15–22)

> This is the final week of the Building the Live Sample block. See week-15.md for the full block overview.

---

## Focus for Week 22

End-of-block assessment. By end of this week, you should be approaching 50-80 live trades.

**Complete a full stats review:**
- All live trades from Week 13 to Week 22
- Win rate, average winner (R), average loser (R), expectancy, max drawdown, rule adherence

**Share with trainer at this week's review.** The conversation should answer:
- Is my live expectancy positive?
- Is my rule adherence ≥90%?
- Has any kill switch been triggered?

**Proceeding to Weeks 23-26:**
If your stats are solid, you proceed to the Mid-Phase Review block (week-23.md), which prepares the Week 26 decision on whether to advance to Phase 4.

If your stats show concern — particularly negative expectancy or rule adherence below 90% — stay in the execution pattern of this block for additional weeks before moving to the review block. There is no shame in extending Phase 3.
`,Hh=`# Week 23 — Mid-Phase Review and Adjustment (Week 1 of 4)

**Phase:** PHASE 3 — Live Micro-Size (Weeks 13–26)
**Block:** Mid-Phase Review and Adjustment (Weeks 23–26)

> Weeks 23 through 26 form the review and decision block of Phase 3. The target by end of Week 26 is 100+ live trades and a clear picture of whether your edge holds under live conditions. The Week 26 decision framework applies to all four weeks.

---

## Block target

**100+ live trades by end of Week 26, with stats calculated and a clear Phase 4 decision.**

## Week 26 decision framework (reference throughout this block)

| Scenario | Action |
|---|---|
| Positive expectancy, ≥90% rule adherence, drawdown <10% | Proceed to Phase 4 |
| Positive expectancy, rule adherence 80-90% | Extend Phase 3 by 4 weeks, focus on adherence |
| Break-even expectancy, ≥90% rule adherence | Setup may need refinement with trainer. Extend Phase 3. |
| Negative expectancy | Stop. Return to demo. Re-examine setup with trainer. Do not proceed to Phase 4. |
| Any drawdown ≥15% at any point | Kill switch triggered. Return to demo. Diagnose. |

---

## Focus for Week 23

Continue executing your live setup under the same weekly and monthly patterns from the previous block. This week's specific task: identify which scenario in the decision framework above you are currently tracking toward.

**Assessment questions for trainer review:**
- Based on current trajectory, which of the five decision scenarios am I heading toward?
- What would need to change in the next 3 weeks to change that outcome?
- Is there anything about my setup execution that needs to be refined before the Week 26 decision?
`,$h=`# Week 24 — Mid-Phase Review and Adjustment (Week 2 of 4)

**Phase:** PHASE 3 — Live Micro-Size (Weeks 13–26)
**Block:** Mid-Phase Review and Adjustment (Weeks 23–26)

> See week-23.md for the full block overview and the Week 26 decision framework.

---

## Focus for Week 24

Continue executing your live setup. This week, run an extended stats calculation if you haven't already — aiming for a clean view of your full live sample.

**Extended stats review:**
- Calculate expectancy not just as a single number, but broken out by:
  - Win rate on A+ setups vs. marginal setups (if you've been tracking setup quality)
  - Performance by day of week — is there a pattern?
  - Performance by week of month — any pattern?

This isn't about over-optimizing. It's about understanding whether any external factor is distorting your edge measurement.

**Trainer question this week:** *"If I had to describe my edge in one sentence with specific numbers right now, what would I say?"* If you can't answer with numbers, your sample still isn't clear enough — keep executing.

**Kill switch audit:** Review all six kill switches. Have any come close to triggering this phase? Note them. Understanding your near-misses is as important as avoiding them.
`,Uh=`# Week 25 — Mid-Phase Review and Adjustment (Week 3 of 4)

**Phase:** PHASE 3 — Live Micro-Size (Weeks 13–26)
**Block:** Mid-Phase Review and Adjustment (Weeks 23–26)

> See week-23.md for the full block overview and the Week 26 decision framework.

---

## Focus for Week 25

One week before the Phase 3 decision. Prepare your Week 26 assessment package.

**Prepare the following for next week's trainer review:**

1. **Full cumulative stats:** All live trades from Week 13 to Week 25. Win rate, average R winner, average R loser, expectancy, max drawdown, rule adherence rate.

2. **Decision framework pre-assessment:** Which of the five scenarios in week-23.md applies to you right now? Be honest — write it down before the trainer review, not after.

3. **Three-sentence honest assessment:**
   - *"My live performance shows..."* (one sentence with numbers)
   - *"The biggest gap between my demo and live performance is..."* (one sentence)
   - *"My recommendation for Phase 4 readiness is..."* (one sentence)

4. **Trainer's view:** Give your trainer the decision framework table from week-23.md before the review. Ask them to assign your scenario independently, without seeing your pre-assessment. Compare.

If your pre-assessment and trainer's assessment agree, you have clarity. If they diverge, spend time in the review understanding why.
`,Yh=`# Week 26 — Mid-Phase Review and Adjustment (Week 4 of 4): Phase 3 Decision

**Phase:** PHASE 3 — Live Micro-Size (Weeks 13–26)
**Block:** Mid-Phase Review and Adjustment (Weeks 23–26)

> This is the final week of Phase 3's review block. See week-23.md for the full block overview.

---

## Focus for Week 26

Apply the decision framework. Execute the outcome.

## Week 26 decision framework

| Scenario | Action |
|---|---|
| Positive expectancy, ≥90% rule adherence, drawdown <10% | Proceed to Phase 4 |
| Positive expectancy, rule adherence 80-90% | Extend Phase 3 by 4 weeks, focus on adherence |
| Break-even expectancy, ≥90% rule adherence | Setup may need refinement with trainer. Extend Phase 3. |
| Negative expectancy | Stop. Return to demo. Re-examine setup with trainer. Do not proceed to Phase 4. |
| Any drawdown ≥15% at any point | Kill switch triggered. Return to demo. Diagnose. |

## Executing the decision

**If proceeding to Phase 4:** Read week-27.md before making any capital changes. The first move in Phase 4 is increasing live capital — not increasing risk %. Understand the sequence before acting.

**If extending Phase 3:** Define specifically what needs to improve (adherence, setup quality, emotional execution) and set a concrete target date for re-assessment. Do not extend indefinitely without a milestone.

**If returning to demo:** This is not failure. It is the system working. Return to the Phase 2 pattern (week-08.md through week-12.md) until your demo stats re-establish positive expectancy with high adherence.

---

**Whatever the outcome: you now have more live trading data than most retail traders accumulate in a year. The journal is your asset. Guard it.**
`,qh=`# Week 27 — Scaling Capital (Week 1 of 6)

**Phase:** PHASE 4 — Scale on Demonstrated Edge (Weeks 27–39)
**Phase goal:** If — and only if — Phase 3 demonstrated positive expectancy, begin scaling capital and risk per trade. This is where the math of compounding starts to matter.

## Pre-Phase 4 requirements (all must be true before this week begins)

- 150+ live trades (not demo + live combined; 150 live)
- Positive expectancy calculated over the full sample
- Maximum drawdown stayed below 15%
- Rule adherence ≥90%
- Trainer co-signs readiness

---

## Block: Scaling Capital (Weeks 27–32)

**First: increase live capital, not risk %.**

- Move from 10-20% of total allocation to 40-50%
- Keep risk at 0.5% per trade
- Why this sequence: you are testing whether your edge survives larger dollar amounts at the same % — which is a psychological test, not a statistical one

## Expected psychological effects

- Stops that were "just numbers" now represent real money
- Winners feel more satisfying; losers hurt more
- You may notice subtle hesitation on entries

## If hesitation appears

- Log it in the journal
- Discuss with trainer
- Do not push through it with willpower — diagnose the cause

---

## Focus for Week 27

Before funding the live account further:
1. Calculate the exact dollar amount that represents 40-50% of your total allocation.
2. Move funds in one transaction — not gradually. Gradual transfers create gradual psychological adjustment that masks the real test.
3. Place your first trade at the new capital level. Notice the difference.

Do not increase risk % this week. 0.5% remains the ceiling for this entire block.
`,Vh=`# Week 28 — Scaling Capital (Week 2 of 6)

**Phase:** PHASE 4 — Scale on Demonstrated Edge (Weeks 27–39)
**Block:** Scaling Capital (Weeks 27–32)

> See week-27.md for the full block overview, capital transition instructions, and psychological context.

---

## Focus for Week 28

You now have at least a week of trading at the higher capital level. The psychological effects described in week-27.md may be emerging.

**Journal entry required this week (in addition to trade-by-trade capture):**
Write one paragraph on how trading at the new capital level *feels* compared to Phase 3. Specifically:
- Did you hesitate on any entries that you would not have hesitated on before?
- Did you exit any winners early because the dollar amount felt large?
- Did any losses produce a stronger emotional response than you expected?

This is data. Bring it to trainer review.

**Stats check:** Run your stats at the new capital level — even if you only have 4-8 trades at this size. Confirm the setup is executing the same way. If win rate or average R has shifted, identify why before attributing it to the capital change.
`,Qh=`# Week 29 — Scaling Capital (Week 3 of 6)

**Phase:** PHASE 4 — Scale on Demonstrated Edge (Weeks 27–39)
**Block:** Scaling Capital (Weeks 27–32)

> See week-27.md for the full block overview.

---

## Focus for Week 29

By Week 29 the new capital level should be starting to feel more normal. If it still feels uncomfortable, that is important information — it means your psychological threshold has not yet adjusted to this account size. Do not scale further until it does.

**Check:** Has your execution quality held at the higher capital level?
- Win rate: within 5% of Phase 3 average?
- Rule adherence: still ≥90%?
- Any new patterns in your mistakes?

**If execution quality has held:** You are on track to begin the risk % scaling discussion in Week 33.

**If execution quality has dropped:** Stay at this capital level for as many additional weeks as needed before considering risk % changes. Rushing this stage is how Phase 4 becomes Phase 3 in reverse.

**Reminder:** At this stage you are still at 0.5% risk per trade. The only change from Phase 3 is the absolute dollar amount at risk on each trade. The percentage discipline hasn't moved.
`,Kh=`# Week 30 — Scaling Capital (Week 4 of 6)

**Phase:** PHASE 4 — Scale on Demonstrated Edge (Weeks 27–39)
**Block:** Scaling Capital (Weeks 27–32)

> See week-27.md for the full block overview.

---

## Focus for Week 30

Mid-point of the capital scaling block. Run a full stats review at the new capital level.

**Stats to calculate:**
- All trades at the new capital level (since Week 27)
- Win rate, average winner (R), average loser (R), expectancy
- Rule adherence
- Max drawdown at the new capital level

**Compare to:** Your Phase 3 stats from the same metrics. The numbers should be similar. Large divergence is a signal that the capital change is affecting your execution.

**Monthly stats review** (if this falls at month-end): Include both Phase 3 cumulative stats and Phase 4 stats separately. You want to know whether Phase 4 performance is tracking to Phase 3 or diverging.

**Trainer question:** *"Based on my Phase 4 performance so far, what is your honest assessment of whether I'm ready to begin scaling risk % in Week 33?"* Record their answer.
`,Gh=`# Week 31 — Scaling Capital (Week 5 of 6)

**Phase:** PHASE 4 — Scale on Demonstrated Edge (Weeks 27–39)
**Block:** Scaling Capital (Weeks 27–32)

> See week-27.md for the full block overview.

---

## Focus for Week 31

Prepare for the transition to risk % scaling in Week 33. This week is a bridge.

**Pre-risk-scaling checklist:**
- [ ] Trading at 40-50% capital allocation for 4+ weeks
- [ ] Execution quality (win rate, adherence) is comparable to Phase 3 stats
- [ ] No kill switch has triggered since capital increase
- [ ] The psychological weight of the new capital level feels manageable
- [ ] Trainer has reviewed and agrees you are ready to begin risk % increase

**If any box is unchecked:** Stay in the capital scaling block for additional weeks. There is no fixed deadline for moving to Week 33.

**Income math reality check (from the curriculum):**
With a 1R average winner, 45% win rate, 2:1 R:R:
- Expectancy: 0.35R per trade
- 40 trades per month × 0.35R × 0.5% risk = ~7% monthly *in theory*
- Reality with variance: some months +10%, some months -5%

At the risk levels you're currently trading, do the math on what your account size produces. This is useful grounding before risk % increases.
`,Zh=`# Week 32 — Scaling Capital (Week 6 of 6)

**Phase:** PHASE 4 — Scale on Demonstrated Edge (Weeks 27–39)
**Block:** Scaling Capital (Weeks 27–32)

> This is the final week of the Scaling Capital block. See week-27.md for the full block overview.

---

## Focus for Week 32

Final week at 0.5% risk before transitioning to risk % scaling (Week 33). Use this week to consolidate and confirm readiness.

**End-of-block stats review:**
Calculate the full Phase 4 (capital scaling) stats:
- All trades from Weeks 27-32
- Compare to full Phase 3 stats

**The key question:** Does my edge survive capital scaling? If your Phase 4 stats broadly match Phase 3 stats (within normal variance), the answer is yes. If they have significantly diverged, delay the risk % increase and diagnose.

**Transitioning to Week 33:**
The next block increases risk % from 0.5% to 0.75%. This is a psychological change as much as a mechanical one. The dollar amount per pip will increase materially. Prepare for this in advance — don't just change the number in your position size calculator and assume nothing will feel different.

Review the income math from week-31.md. Understand what 0.75% risk means in dollar terms on your specific account.
`,Xh=`# Week 33 — Scaling Risk (Week 1 of 7)

**Phase:** PHASE 4 — Scale on Demonstrated Edge (Weeks 27–39)
**Block:** Scaling Risk (Weeks 33–39)

> Capital scaling (Weeks 27-32) is complete. This block increases risk % carefully. See week-27.md for Phase 4 prerequisites.

---

## Block overview: Scaling Risk

**If capital scaling went smoothly, increase risk %:**

- Move from 0.5% to 0.75% per trade (not 1% — yet)
- Stay at 0.75% for 4 weeks minimum
- If stats hold, move to 1% for the remaining weeks of Phase 4

**Do not move above 1%.** Even professional traders rarely exceed 2%. 1% is your ceiling until Phase 5.

---

## The income math at 1% risk

With a 1R average winner, 45% win rate, 2:1 R:R:
- Expectancy: (0.45 × 2) − (0.55 × 1) = 0.35R per trade
- 40 trades per month × 0.35R × 1% = ~14% monthly account growth *in theory*
- Reality: variance is brutal. Some months +20%. Some months -8%. Average over the year might be 5-10% if your edge is real.

**Do the math on your account size:**
- $10,000 account at 8% average monthly = $800/month
- $50,000 account at 8% average monthly = $4,000/month
- Your constraint may be capital, not skill

This is important to confront now: **if your edge is real but your capital is too small, no amount of skill will produce meaningful income in the short term.** The decision then becomes whether to (a) scale capital from other sources, (b) accept a longer timeline, or (c) treat trading as a skill that pays later rather than now.

---

## Focus for Week 33

This week you begin trading at 0.75% risk. Before the first trade:
1. Recalculate your position size formula with the new risk %.
2. Confirm what 0.75% of your current balance is in dollar terms.
3. Confirm what this means per pip on EUR/USD at your typical stop distance.

After the first trade: note whether 0.75% feels materially different from 0.5%. It should. If it doesn't, your position sizes may have been incorrect before.
`,Jh=`# Week 34 — Scaling Risk (Week 2 of 7)

**Phase:** PHASE 4 — Scale on Demonstrated Edge (Weeks 27–39)
**Block:** Scaling Risk (Weeks 33–39)

> See week-33.md for the full block overview, risk % sequence, and income math.

---

## Focus for Week 34

Second week at 0.75% risk. The novelty of the increase should be fading — which is when execution drift is most likely to appear.

**Check for these specific forms of execution drift at higher risk:**
- Cutting winners short because the dollar amount is "enough" (this destroys your R:R)
- Widening stops to avoid being taken out (this changes your actual risk %)
- Skipping marginal setups due to loss aversion (this can reduce your trade frequency and distort stats)

All three are common responses to higher dollar risk. None are acceptable. Log any instance in the journal.

**Stats review:** After a week at the new risk level, compare:
- Average R outcome vs. Phase 3 average
- Win rate vs. Phase 3 average
- Any anomalies in stop-loss behavior?

Bring to trainer Sunday review.
`,ep=`# Week 35 — Scaling Risk (Week 3 of 7)

**Phase:** PHASE 4 — Scale on Demonstrated Edge (Weeks 27–39)
**Block:** Scaling Risk (Weeks 33–39)

> See week-33.md for the full block overview.

---

## Focus for Week 35

Week 3 at 0.75% risk. Minimum of 1 more week at this level before considering the move to 1%.

**The 4-week minimum at 0.75% exists for a reason:** It takes time for the psychology to recalibrate. The first two weeks are adjustment. Weeks 3-4 are the real test — are you executing consistently under the new normal, or are there lingering effects?

**Self-assessment this week:**
- In the last 3 weeks at 0.75%, has my rule adherence stayed at 90%+?
- Has my average R outcome changed compared to Phase 3?
- Have I found myself consciously aware of the dollar amount during trades in a way that affects decisions?

If adherence has dropped below 90% at 0.75%, do not proceed to 1% until it recovers. The cause will almost certainly be psychological (loss aversion or greed), not mechanical.

**Monthly stats review** (if applicable): Calculate running totals for Phase 4. Compare Phase 4 stats to Phase 3 stats across the same metrics.
`,np=`# Week 36 — Scaling Risk (Week 4 of 7): 0.75% → 1% Decision

**Phase:** PHASE 4 — Scale on Demonstrated Edge (Weeks 27–39)
**Block:** Scaling Risk (Weeks 33–39)

> See week-33.md for the full block overview.

---

## Focus for Week 36

You have now been trading at 0.75% for 4 weeks (the minimum). This week is the decision point: stay at 0.75% or move to 1%.

**Decision criteria:**

| Condition | Met? |
|---|---|
| 4+ weeks at 0.75% with no rule adherence drop | Y / N |
| Phase 4 stats (at 0.75%) broadly match Phase 3 stats | Y / N |
| No kill switch triggered since risk % increase | Y / N |
| Trainer agrees readiness for 1% | Y / N |

**If all conditions met:** Begin 1% risk starting next trade (Week 37).

**If any condition not met:** Stay at 0.75% for another 2-4 weeks. Identify specifically what needs to improve.

**Recalculate the income math at 1% for your exact account balance.** Know, before you flip the switch, what a losing streak of 5 trades costs you in dollars at 1%. That number should not surprise you mid-streak.
`,tp=`# Week 37 — Scaling Risk (Week 5 of 7): First Weeks at 1%

**Phase:** PHASE 4 — Scale on Demonstrated Edge (Weeks 27–39)
**Block:** Scaling Risk (Weeks 33–39)

> See week-33.md for the full block overview.

---

## Focus for Week 37

If the Week 36 decision was to move to 1%, this is your first week at full professional risk. If you're still at 0.75%, continue the Week 35-36 focus and return here when ready.

**At 1% risk:**
- Your position sizes are now double what they were in Phase 3
- A losing streak of 10 consecutive trades represents ~9-10% drawdown (approaching kill switch territory)
- A winning week has real dollar significance

**The ceiling:** 1% is the maximum for this entire year. Do not let a good week tempt you to go to 1.5% or 2%. The curriculum is explicit: 1% is the ceiling until Phase 5 (Year 2).

**This week's discipline focus:** The 1% ceiling is meaningless if you silently start taking two simultaneous positions or adding to winners beyond your setup rules. Position size discipline applies to the total dollars at risk at any moment, not just per-trade. Confirm you never have more than 1% of account at risk across all open trades.
`,rp=`# Week 38 — Scaling Risk (Week 6 of 7)

**Phase:** PHASE 4 — Scale on Demonstrated Edge (Weeks 27–39)
**Block:** Scaling Risk (Weeks 33–39)

> See week-33.md for the full block overview.

---

## Focus for Week 38

Continue executing at 1% risk. Two weeks remaining in Phase 4.

**Monthly stats review** (if applicable): Compare Phase 4 stats (capital + risk scaling combined) to Phase 3. Calculate the annualized return implied by your Phase 4 monthly average.

**Realistic income projection exercise:**

Using your actual Phase 4 stats (not hypothetical):
1. Average trades per month in Phase 4: ____
2. Actual expectancy per trade (from your stats): ____
3. Risk % (1%): ____
4. Implied monthly return: (trades × expectancy × risk %)
5. On your current account balance, what does this produce in dollars?

This number, grounded in *your* actual data (not textbook examples), is the most honest income projection you can make. Share it with trainer. Compare it to what would constitute meaningful income for you. This is the conversation Phase 5 builds on.
`,ip=`# Week 39 — Scaling Risk (Week 7 of 7): Phase 4 Completion

**Phase:** PHASE 4 — Scale on Demonstrated Edge (Weeks 27–39)
**Block:** Scaling Risk (Weeks 33–39)

> This is the final week of Phase 4. See week-33.md for the full block overview.

---

## Focus for Week 39

Final week of Phase 4. Prepare for the Phase 5 transition.

**End-of-Phase 4 full stats review:**
- All trades from Phase 3 and Phase 4 combined
- Phase 4 alone (Weeks 27-39)
- Trend: is performance improving, stable, or worsening across phases?

**The key question before Phase 5:** *"If I continue executing this edge at this size, does the math produce meaningful income at my account size?"* Use the actual numbers from Week 38.

If yes: Phase 5 is compounding and steady-state execution. Proceed to week-40.md.

If no: The constraint is capital, not skill. Phase 5 planning should include a capital strategy discussion with trainer — options include patient compounding on small capital, seeking additional capital from external sources, or exploring prop firm challenges (with caution; that's a Year 2 conversation).

**Reminder of the Year 1 boundary:** 1% maximum risk. One pair. One session. One setup. These constraints don't lift until you have 300+ live trades with demonstrated edge and a Year 2 plan. You're approaching that milestone — don't get ahead of it.
`,op=`# Week 40 — Steady State Execution (Week 1 of 9)

**Phase:** PHASE 5 — Compounding and Honest Assessment (Weeks 40–52)
**Phase goal:** Compound your demonstrated edge. Prepare for the Month 12 honest assessment. Avoid the traps of late-stage overconfidence.

---

## Block: Steady State Execution (Weeks 40–48)

- Maintain 1% risk per trade
- Maintain one pair, one session, one setup (adding complexity is Year 2's problem)
- Weekly trainer reviews continue
- Monthly stats reviews continue
- Kill switches remain in force

**New trap in this phase:** "I'm profitable, so I can loosen up." You cannot. The discipline that got you here is the only thing keeping you here.

---

## Focus for Week 40

Welcome to Phase 5. The process is identical to Phase 4 — but the context has shifted. You are now compounding a demonstrated edge, not proving one.

**This week: re-read the Operating Principles in meta.md.** All eight of them. After 9+ months of trading, some will hit differently than they did in Week 1.

**Phase 5 discipline check:**
- Are the Kill Switches still posted next to your trading screen?
- Is your Sunday accountability ritual still intact?
- Is your journal still capturing every trade with both screenshots and the full spreadsheet row?

If any of these have slipped, restore them before placing another trade. The infrastructure is what makes compounding sustainable.
`,sp=`# Week 41 — Steady State Execution (Week 2 of 9)

**Phase:** PHASE 5 — Compounding and Honest Assessment (Weeks 40–52)
**Block:** Steady State Execution (Weeks 40–48)

> See week-40.md for the full block overview and Phase 5 context.

---

## Focus for Week 41

Execute your setup. Journal every trade. Send Sunday accountability.

**The trap of Phase 5:** Late-stage overconfidence tends to manifest as small compromises, not dramatic ones. Watch for:
- Slightly looser entry criteria ("it's close enough")
- Slightly wider stops ("give it room")
- Adding a second trade before the first one closes ("they're different setups")
- Adjusting position size upward "just this once"

None of these feel like violations when they happen. They are all violations. Log them if they occur.

**Compounding math check:** Calculate what your account balance would be in 12 months from today if you maintain your current monthly return rate. Compare to your starting balance at the beginning of Phase 5. This is your compounding trajectory — not guaranteed, but indicative.
`,ap=`# Week 42 — Steady State Execution (Week 3 of 9)

**Phase:** PHASE 5 — Compounding and Honest Assessment (Weeks 40–52)
**Block:** Steady State Execution (Weeks 40–48)

> See week-40.md for the full block overview.

---

## Focus for Week 42

Monthly stats review (if applicable). Calculate and record all standard metrics for the month. Compare to Phase 4 monthly averages.

**Year-to-date summary:** At this point in the curriculum, calculate:
- Total live trades taken (all phases)
- Overall win rate
- Overall expectancy
- Maximum drawdown experienced at any point
- Current account balance vs. starting Phase 3 balance

This is your Year 1 story in numbers. You will need it for the Month 12 assessment.

**Trainer question this month:** *"Looking at my full year of data, what is the one thing I should focus on in the final 10 weeks to maximize Year 1 outcomes?"* Record their answer and act on it.
`,lp=`# Week 43 — Steady State Execution (Week 4 of 9)

**Phase:** PHASE 5 — Compounding and Honest Assessment (Weeks 40–52)
**Block:** Steady State Execution (Weeks 40–48)

> See week-40.md for the full block overview.

---

## Focus for Week 43

Execute. Journal. Review. Repeat.

**Mid-block check (halfway through Weeks 40-48):** No major adjustments expected — that's the point. This block is about proving you can maintain a process without breaking it under the complacency of success.

**Self-assessment:**
- Rule adherence this month: _____%
- Any kill switch near-misses? Log them.
- Is your setup still written down exactly as defined in Week 7, or has it drifted in your head?

**If the setup has drifted:** Write out your current understanding of the setup rules, then compare to the Week 7 template in week-07.md. Bring any divergence to trainer. Unintentional setup drift is one of the most common ways profitable traders lose their edge over time.
`,up=`# Week 44 — Steady State Execution (Week 5 of 9)

**Phase:** PHASE 5 — Compounding and Honest Assessment (Weeks 40–52)
**Block:** Steady State Execution (Weeks 40–48)

> See week-40.md for the full block overview.

---

## Focus for Week 44

Execute. Journal. Review. Repeat.

**Monthly stats review** (if applicable). This month's stats should now be going into a Year-to-Date tracker that spans all of Phase 3, Phase 4, and Phase 5.

**8 weeks until Month 12 assessment.** Begin thinking about what the honest assessment will look like. Not yet — just begin thinking.

The Month 12 question is: *Have I demonstrated an edge across 300+ live trades, with drawdowns I survived without breaking rules, at a scale where more capital would produce meaningful income?*

Do you know how many live trades you have? If you're not near 300, what is a realistic path to that number by Week 52? (You may not get there — and that's okay. The assessment is honest regardless of the number.)
`,cp=`# Week 45 — Steady State Execution (Week 6 of 9)

**Phase:** PHASE 5 — Compounding and Honest Assessment (Weeks 40–52)
**Block:** Steady State Execution (Weeks 40–48)

> See week-40.md for the full block overview.

---

## Focus for Week 45

Execute. Journal. Review. Repeat.

**Year-end prep begins:** Start gathering the data you'll need for the Month 12 assessment. You'll need:

1. Total live trades (Phase 3 onward)
2. Overall win rate across all live trades
3. Overall expectancy across all live trades
4. Month-by-month P&L in R (not just dollars — R shows whether the edge was consistent)
5. Maximum drawdown at any single point
6. Rule adherence rate across the full year
7. Number of kill switch triggers (and what happened after each)

Most of this is already in your journal spreadsheet. Begin compiling it into a summary document this week — even informally. It's much easier to do gradually than all at once in Week 52.
`,dp=`# Week 46 — Steady State Execution (Week 7 of 9)

**Phase:** PHASE 5 — Compounding and Honest Assessment (Weeks 40–52)
**Block:** Steady State Execution (Weeks 40–48)

> See week-40.md for the full block overview.

---

## Focus for Week 46

Execute. Journal. Review. Repeat.

**Monthly stats review** (if applicable).

**6 weeks out from Month 12 assessment.** Continue compiling the Year-to-Date summary started in Week 45. This week, add:
- Month-by-month R performance (the trend line matters as much as the total)
- A list of the three biggest lessons from the year — one from Phase 1-2, one from Phase 3, one from Phase 4-5

These lessons are for the assessment conversation with trainer in Weeks 49-52. Beginning to articulate them now, before the assessment context creates pressure to sound good, produces more honest answers.

**Kill switch audit:** How many kill switches have you triggered this year, and what did you do? Log the count and outcomes. This is a measure of your discipline architecture working — triggers are not failures, they are the system functioning.
`,fp=`# Week 47 — Steady State Execution (Week 8 of 9)

**Phase:** PHASE 5 — Compounding and Honest Assessment (Weeks 40–52)
**Block:** Steady State Execution (Weeks 40–48)

> See week-40.md for the full block overview.

---

## Focus for Week 47

Execute. Journal. Review. Repeat.

**5 weeks until Month 12 assessment.** The final block (Weeks 49-52) is dedicated to the honest assessment. This is the last full execution week before that shift in focus.

**Pre-assessment review with trainer this week:** Ask them:
1. *"What is your honest assessment of where I am compared to where this curriculum hoped I'd be at Week 47?"*
2. *"What do you think I should prioritize in the final 5 weeks?"*
3. *"If you were designing Year 2 for me based on what you've seen this year, what would it focus on?"*

Record their answers. They will inform the Week 49-52 assessment.

**Don't let the approaching finish line cause you to trade differently.** There is no prize for a strong final 5 weeks and no penalty for a mediocre final 5 weeks. The Year 1 assessment covers the entire year. Execute your process as usual.
`,hp=`# Week 48 — Steady State Execution (Week 9 of 9)

**Phase:** PHASE 5 — Compounding and Honest Assessment (Weeks 40–52)
**Block:** Steady State Execution (Weeks 40–48)

> This is the final week of the Steady State Execution block. See week-40.md for the full block overview.

---

## Focus for Week 48

Final week of steady-state execution before the Month 12 assessment block begins.

**End-of-block checklist:**
- [ ] Year-to-Date stats compiled (from Week 45 task)
- [ ] Month-by-month R performance documented
- [ ] Three biggest Year 1 lessons written down
- [ ] Kill switch history documented
- [ ] Trainer pre-assessment completed (Week 47 task)

**Before proceeding to Week 49:** Confirm you have clean, complete data for the full live trading period. Missing journal entries from earlier phases will undermine the assessment. If any trades are missing data, reconstruct what you can from screenshots and memory — then close that gap permanently going forward.

**Transitioning to Weeks 49-52:** The next four weeks shift focus from execution to assessment and Year 2 planning. You will still trade — the process continues — but the primary activity is honest reflection, not new learning.
`,pp=`# Week 49 — The Month 12 Assessment (Week 1 of 4)

**Phase:** PHASE 5 — Compounding and Honest Assessment (Weeks 40–52)
**Block:** The Month 12 Assessment (Weeks 49–52)

---

## The honest question

*Have I demonstrated an edge across 300+ live trades, with drawdowns I survived without breaking rules, at a scale where more capital would produce meaningful income?*

This question has three components. Answer each separately before combining them.

---

## Block overview: Weeks 49–52

These four weeks serve a different purpose than any previous block. You are still trading — the process doesn't stop — but the primary activity is honest reflection and Year 2 planning.

**Week 49:** Assemble your complete Year 1 data package
**Week 50:** Conduct the formal assessment with trainer
**Week 51:** Determine your Year 2 path based on honest outcomes
**Week 52:** Final week — close out Year 1, begin Year 2 planning

---

## Focus for Week 49

**Assemble the Year 1 data package:**

1. Total live trades from Phase 3 onward
2. Complete stats: win rate, average winner (R), average loser (R), expectancy per trade
3. Month-by-month P&L in R (not dollars)
4. Maximum drawdown experienced at any point
5. Rule adherence rate across the full year
6. Kill switch triggers: how many, which ones, and what happened after each
7. Your three biggest lessons from the year

Compile this into a single document. Share with trainer before Week 50.
`,mp=`# Week 50 — The Month 12 Assessment (Week 2 of 4): Formal Assessment

**Phase:** PHASE 5 — Compounding and Honest Assessment (Weeks 40–52)
**Block:** The Month 12 Assessment (Weeks 49–52)

> See week-49.md for the full block overview and data package requirements.

---

## Focus for Week 50

**Conduct the formal Month 12 assessment with trainer.** This is a dedicated session — not a standard weekly review. Block 60-90 minutes.

## Assessment structure

**Part 1 — Data review (trainer-led):**
Trainer reviews the Year 1 data package from Week 49. They ask questions; you answer.

**Part 2 — The honest question:**
You answer the three-component question from week-49.md:
1. Have I demonstrated an edge? (What does the expectancy number say, over how many trades?)
2. Did I survive the drawdowns? (What was the maximum? Did you break rules? Did any kill switch trigger without recovery?)
3. Does the scale produce meaningful income? (At your current account size and expectancy, what is the realistic monthly income?)

**Part 3 — Scenario assignment:**

| Scenario | Year 2 path |
|---|---|
| Yes to all three | Begin planning Year 2 expansion |
| Edge proven, but income not meaningful at current scale | Capital strategy discussion |
| Edge partially proven (limited sample, borderline stats) | Year 2 = extended Phase 3/4 with larger sample target |
| Edge not proven | Year 2 = diagnosis and rebuild |
| Blew up | 30-day pause. Full post-mortem. |

Record the scenario you're assigned. This drives Week 51.
`,gp=`# Week 51 — The Month 12 Assessment (Week 3 of 4): Year 2 Planning

**Phase:** PHASE 5 — Compounding and Honest Assessment (Weeks 40–52)
**Block:** The Month 12 Assessment (Weeks 49–52)

> See week-49.md for the full block overview. See week-50.md for the formal assessment and scenario framework.

---

## Focus for Week 51

Based on your Week 50 scenario, begin building the Year 2 plan.

---

## Year 2 paths

### If you demonstrated edge (positive answer to all three questions)

You are in a tiny minority. Begin planning for Year 2:
- Year 2 may include: adding a second setup, expanding to a second pair, increasing capital from external sources, exploring prop firm challenges.
- **Your Year 1 data is your proof. Guard it. Continue the journal forever.**
- Do not add complexity in Year 2 until your Year 1 setup is operating on autopilot. The second setup should be the *only* new thing you add.

### If the edge is real but capital is too small

- The issue is not skill. Acknowledge that clearly.
- Year 2 planning includes a capital strategy: patient compounding, external capital sources, or prop firm challenge (with full awareness of prop firm risks and payout structures).
- Continue the Year 1 process in the meantime — do not change the setup while solving the capital problem.

### If the edge is partially proven or break-even

- Year 2 = extended Phase 3/4. Target 300+ live trades before reassessing.
- Review setup with trainer: is the setup itself sound, or does it need refinement?
- Do not add new complexity until the existing setup is clearly positive over a large sample.

### If the edge is not proven or you blew up

- It happens. The question is what you learned.
- Do not re-enter the market for 30 days minimum. Emotional residue distorts judgment.
- With trainer, do a full post-mortem. Be honest about which kill switch you ignored.
- Each has a different Year 2 path — diagnose before deciding.

---

Write your Year 2 plan this week. Even a rough draft. Share with trainer.
`,yp=`# Week 52 — The Month 12 Assessment (Week 4 of 4): Close Out Year 1

**Phase:** PHASE 5 — Compounding and Honest Assessment (Weeks 40–52)
**Block:** The Month 12 Assessment (Weeks 49–52)

> See week-49.md for the full block overview.

---

## Focus for Week 52

Close out Year 1. Begin Year 2.

---

## Year 1 close-out checklist

- [ ] Year 1 data package finalized and archived (not just on your computer — backed up)
- [ ] All journal entries complete (no missing trades)
- [ ] Final stats calculated and recorded
- [ ] Formal assessment completed with trainer (Week 50)
- [ ] Year 2 plan drafted (Week 51) and shared with trainer
- [ ] The Kill Switches are still posted next to your trading screen

---

## The final note

You still have more information than 99% of retail traders who tried this in Year 1.

Your Year 1 data is your most valuable asset — more valuable than any signal group, course, or guru. It is *yours*. It tells you specifically what your edge is (or isn't), where your psychology breaks down, and what environment your setup works in.

**Continue the journal forever.** The Sunday accountability ritual doesn't end because the curriculum ends. The trainer relationship doesn't end. The discipline that got you here is the discipline that keeps you here.

---

*End of Year 1 curriculum. Execute daily. Review weekly. Assess monthly. Good luck.*
`,kp=`# The 12-Month Forex Trading Curriculum
## A Deliberate Path to Demonstrated Edge

**Student:** [Student]
**Trainer:** [Trainer]
**Broker / Platform:** HFM Kenya / MetaTrader 5
**Start Date:** _______________
**Reframed Goal (Month 12):** *Demonstrated edge across 300+ live trades at a scale where additional capital would produce meaningful income.*

---

## How to Use This Document

This is a **working curriculum**, not a reference book. It is designed to be executed week-by-week over 12 months, with your trainer as your mentor and this document as your structure.

**Each week contains:**
- Learning objectives
- Core concepts (defined from scratch the first time they appear)
- Practical exercises
- Trainer check-in topics
- Self-assessment questions
- Common pitfalls and red flags

**Before you start:**
1. Read the **Operating Principles** and **Kill Switches** sections below. Print the Kill Switches page and keep it where you trade.
2. Set up your journaling infrastructure (see *Journaling System* section) before Week 1.
3. Share this document with your trainer. Ask them: *"What would you change or remove?"* — not for approval.
4. Commit to the Sunday accountability ritual. It is the single load-bearing habit in this entire system.

---

# PART ONE: FOUNDATIONS

## Operating Principles

These principles govern every decision in this curriculum. When in doubt, return to them.

1. **Risk management comes before pattern recognition.** Most retail curricula teach this backwards. We do not.
2. **One pair, one session, one setup** until you are consistently profitable. Specialists compound faster than generalists.
3. **Journal ruthlessness is 80% of learning speed.** The version of journaling you'll actually do is infinitely more valuable than the version you won't.
4. **The fast path is the disciplined path.** Every beginner who tries to skip foundations ends up redoing them — after blowing capital.
5. **Edge is a statistical claim, not a feeling.** You do not have an edge until you can prove it over 50+ trades.
6. **Rule adherence is the leading indicator; P&L is the lagging one.** Measure what you control.
7. **Scale only on demonstrated edge.** Capital size follows proof, not hope.
8. **Kill switches are non-negotiable.** They exist for the version of you who will want to break them.

---

## The Three-Layer Stack (Mental Model)

Every skilled trader operates across three layers. Most retail education teaches Layer 3 first, which is why most retail traders fail.

- **Layer 1 — Foundation:** Risk management, position sizing, expectancy math, psychological discipline. This is 80% of survival.
- **Layer 2 — Engine:** A defined edge — a setup with positive expected value you can articulate statistically.
- **Layer 3 — Finish:** Pattern recognition, entry refinement, market structure reading (where SMC lives).

This curriculum builds all three in parallel, but Layer 1 is non-negotiable from Day 1.

---

## Kill Switches (Print This Page)

**Tape this next to your trading screen. Do not modify. Do not negotiate with it.**

| Trigger | Action |
|---|---|
| **-15% drawdown on live account** | Stop. Return to demo. Diagnose with trainer before resuming live trading. |
| **Three rule violations in one week** | Stop for the rest of the week. Trainer review required before resuming. |
| **Missed Sunday accountability send to trainer** | Next week is demo-only. No live trades, regardless of how you feel. |
| **Trading outside your one pair / one session / one setup** | Immediate stop. 48-hour cooling period. Trainer review before resuming. |
| **Two consecutive losing weeks** | Reduce position size by 50% for the following week. Automatic. No judgment call. |
| **Emotional state: anger, revenge, FOMO, desperation** | Close platform. Walk away. Do not trade again that day. |

**Why these exist:** You will not break them when you are calm. You will want to break them when you are tilted. That is precisely when they save you.

---

## The Journaling System

**Principle:** Separate *capture* (must be frictionless) from *analysis* (must be rigorous, but only once a week).

### Per-Trade Capture (90 seconds, non-negotiable)

**1. Two screenshots per trade:**
- At entry: full chart with your setup visible, stop-loss and take-profit marked
- At exit: same chart showing where price went

Store in folder: \`/TradingJournal/YYYY-MM/YYYY-MM-DD_PAIR_SETUP/\`
Example: \`/TradingJournal/2026-05/2026-05-14_EURUSD_BOS-retest/\`

**2. One row in the spreadsheet:**

| Column | Example | Notes |
|---|---|---|
| Date | 2026-05-14 | |
| Pair | EUR/USD | |
| Session | London | |
| Setup | BOS-retest | From your pre-defined list of 1-3 setups |
| Entry | 1.0850 | |
| Stop | 1.0820 | |
| Target | 1.0910 | |
| Lot Size | 0.05 | |
| R Risked | 1.0% | Always the same until Phase 4 |
| R Outcome | +2.0R | Multiples of risk; +2R = 2x what you risked |
| Rule Adherence | Y | Did you follow every rule? Y or N. No "mostly." |
| Notes (optional, max 10 words) | "entered early, stop too tight" | Only if something specific |

**That's it. No prose. No feelings. Just data.**

### Weekly Review (20 minutes, with trainer, every week)

Every Sunday evening:
1. Send trainer the spreadsheet snapshot (screenshot or file) — **this is your accountability trigger**
2. Schedule 20 minutes within 48 hours
3. Trainer reviews screenshots + spreadsheet and asks questions. You answer.

**Questions the trainer should ask (give them this list):**
- Which trade this week was your best-executed, regardless of outcome?
- Which trade was your worst-executed, regardless of outcome?
- Where did you violate a rule? Why?
- What pattern do you see across your losses this week?
- If you took this week's trades again tomorrow, what would you change?

### Monthly Stats Review (30 minutes, solo, last Sunday of each month)

Calculate and record:
- Total trades taken
- Win rate (%)
- Average winner (in R)
- Average loser (in R)
- Expectancy per trade (in R) — *formula: (win% × avg winner) − (loss% × avg loser)*
- Maximum drawdown (%)
- Rule adherence rate (%)

**The number that matters most in the first 6 months is rule adherence rate, not P&L.** Track it. Share it. If it drops below 90%, something is wrong.
`,wp=`# Appendices

---

## Appendix A — The Part A Eval (Week 6)

**Instructions:**
- Time limit: 90 minutes
- Closed-book except where noted
- Trainer administers and scores
- Trainer picks chart for Section 3.1 on the day of the test

### Section 1 — Risk Math (20 points)

**1.1 (8 pts)** Account balance: $2,000. Risk per trade: 1%. Trade: Long EUR/USD, entry 1.0850, stop-loss 1.0820. Calculate:
- Dollar risk ($)
- Stop distance in pips
- Position size in standard lots (to 2 decimal places)
- Show the formula

**1.2 (6 pts)** Same account, same risk %. Trade: Short GBP/JPY, entry 189.40, stop 189.95. Calculate position size in standard lots. *Note: JPY pairs have different pip conventions.*

**1.3 (6 pts)** Explain in 3 sentences or fewer why professional traders rarely risk more than 1-2% per trade, referencing drawdown mathematics.

**Pass threshold:** 16/20. Missing 1.1 or 1.2 entirely = fail regardless of total.

### Section 2 — Drawdown & Expectancy Math (15 points)

**2.1 (5 pts)** Your account drops 30%. What percentage gain is required to return to breakeven? Show the math.

**2.2 (5 pts)** Your system has: 45% win rate, average winner = 2R, average loser = 1R. Calculate expectancy per trade in R. Is this system tradeable? Why?

**2.3 (5 pts)** Same system, over a 100-trade sample: what is the realistic range of outcomes (best case / worst case / expected)? Qualitative answer accepted — demonstrating understanding of variance.

### Section 3 — Market Structure & SMC Concepts (25 points)

**3.1 (10 pts)** On a chart provided by trainer, identify:
- Current trend state (bullish / bearish / ranging)
- Most recent BOS or CHOCH — mark it
- Nearest BSL and SSL
- Where you would expect price to draw toward next, and why

**3.2 (8 pts)** Explain in your own words: functional difference between BOS and CHOCH. Why does the distinction matter for trade direction?

**3.3 (7 pts)** Describe: what is a stop hunt, why does it happen, how do equal highs/lows relate to it? Use an example.

### Section 4 — Your Edge, In Writing (15 points)

Complete this with specifics — no hedging:

*"My edge is: I enter on [specific setup] when [specific market conditions including session, structure state, and confluence]. My stop is placed at [specific structural location]. My target is [specific level or R-multiple]. I expect to win approximately [X]% of the time at an average R-multiple of [Y]. I will not take the trade if [specific disqualifying conditions]."*

**Scoring:** 3 points per blank filled with specificity. Vague answers score zero.

### Section 5 — Pre-Mortem (15 points)

Describe the **three most likely ways you blow up your account in the first 6 months**, and for each, name the specific rule in your plan that prevents it.

Good answers identify *your personal* failure modes. Generic answers score low.

**5 points per failure mode, fully specified with prevention rule.**

### Section 6 — HFM Broker Mechanics (10 points)

**6.1 (3 pts)** Spread on EUR/USD during London session vs. Asian session on your HFM account type? (Open-book)

**6.2 (3 pts)** Swap/rollover rate on long EUR/USD, and why Wednesday night is 3x?

**6.3 (2 pts)** HFM's margin call level? Stop-out level?

**6.4 (2 pts)** What happens to pending orders during a news gap?

### Scoring Summary

- **90-100:** Exceptional. Move to demo trading in Week 7.
- **80-89:** Pass. Begin demo trading in Week 7.
- **70-79:** Partial. Retake failed sections before demo.
- **Below 70:** Not ready. Two more weeks of study. Retake Week 8.

---

## Appendix B — Month 4 Survival Guide

**Month 4 is when most beginners break.** You've had enough wins to feel confident and not enough losses to stay humble. A losing streak will arrive. The question is whether you survive it with your system intact.

### What Month 4 typically looks like

- A 5-7 trade losing streak (normal, statistically expected)
- Account drawdown of 8-12% (below kill switch, but painful)
- Emotional urge to "make it back" by either (a) trading more, (b) sizing bigger, or (c) abandoning your setup for something that "seems to be working"
- Social pressure ("how's the trading going?") that makes losses feel larger than they are
- Boredom between setups that tempts you to take non-setup trades

### The Month 4 checklist

When the streak hits, work through this in order:

1. **Check rule adherence.** Did you follow every rule on every losing trade? If yes, the losses are just variance and your system is working. If no, the losses are execution failures disguised as setup failures.

2. **Check setup quality.** Are you taking A+ setups only, or are you taking marginal setups because you're impatient? Review last 10 trades with trainer.

3. **Check market conditions.** Is the current market environment suited to your setup? (Range-bound SMC setups often struggle in strong trending weeks, and vice versa.) This is information, not a reason to abandon.

4. **Reduce size, do not stop.** If drawdown hits 10%+, halve your position size for the next week. Do not stop trading entirely unless kill switch triggers — staying active at reduced size preserves the learning feedback loop.

5. **Extra trainer review.** Month 4 = double your weekly review time if needed. Use their experience.

### The Month 4 rules (non-negotiable)

- **Do not increase position size to "catch up."** This is how accounts die.
- **Do not take trades outside your setup.** Your one setup has the data behind it. Your new setup has none.
- **Do not change your setup in the middle of a drawdown.** Changes happen from a position of stability, not desperation.
- **Do not quit during the streak.** Quit *after* you've returned to baseline and can make the decision calmly. (You probably won't want to quit then. Which is the point.)

### What to tell yourself

A losing streak is evidence of variance, not evidence of failure. Over 50 trades, a 45%-win-rate system has a ~15% probability of a 7-trade losing streak. That is not a bug — it is arithmetic. The discipline of continuing to execute your edge through the streak is what separates you from the 80% who will quit or oversize and blow up.

---

## Appendix C — Resources

### Books (in order of priority)

1. **Mark Douglas, *Trading in the Zone*** — trading psychology. Read in Weeks 1-4.
2. **Van Tharp, *Trade Your Way to Financial Freedom*** — position sizing and system design. Read in Weeks 3-6.
3. **Brett Steenbarger, *The Daily Trading Coach*** — ongoing psychology. Read in bits over Phase 3.

### Free online resources

- **babypips.com School of Pipsology** — complete beginner foundation. Weeks 1-2.
- **HFM's education center** — for broker-specific mechanics.
- **MyFXBook's position size calculator** — bookmark it.

### SMC-specific resources

Ask your trainer for their two or three recommended sources. Use only those. The SMC space on YouTube is 90% noise and overlapping gurus. Your trainer is your signal.

### Tools

- **MT5** — your trading platform (HFM provides)
- **TradingView** — for cleaner chart analysis (free tier sufficient)
- **Google Sheets / Excel** — for your trade journal spreadsheet
- **Any screenshot tool** — for entry/exit captures (built-in OS tools are fine)

### What NOT to use

- Telegram signal groups
- Paid "SMC mentorship" courses from social media traders
- Any tool or service that promises "90% win rate" or "guaranteed profits"
- Multiple YouTube gurus simultaneously (pick one, stay)

---

## Appendix D — Glossary

*In order of appearance in the curriculum*

**Forex (FX):** The foreign exchange market. Currencies traded against each other.

**Currency pair:** Two currencies quoted together (EUR/USD). First = base; second = quote.

**Majors / Minors / Exotics:** Major pairs involve USD; minors are cross-pairs of major currencies; exotics involve emerging market currencies.

**Pip:** Smallest standard price increment. 0.0001 for most pairs; 0.01 for JPY pairs.

**Spread:** Difference between bid (sell) and ask (buy) price. Your cost per trade.

**Bid / Ask:** Bid = sell price; Ask = buy price.

**Trading sessions:** Asian (Tokyo), London, New York. Liquidity concentrates in each.

**Leverage:** Ability to control a large position with a small deposit.

**Margin:** Deposit required to open a leveraged position.

**Lot:** Standard trading unit. Standard lot = 100,000 units base currency. Mini = 10,000. Micro = 1,000.

**Pip value:** Dollar value of one pip, per lot.

**Margin call / Stop-out:** Broker warnings and forced liquidations when equity drops below thresholds.

**Drawdown:** Decline from equity peak to trough.

**Market order / Limit order / Stop order:** Execution at current price / at better price / at worse price (breakout).

**Stop-loss (SL):** Automatic exit order capping loss.

**Take-profit (TP):** Automatic exit order capturing profit.

**Swap / Rollover:** Overnight fee for holding leveraged positions. Wednesday = triple.

**Market structure:** Pattern of highs and lows defining trend, range, or shift.

**Higher high (HH) / Higher low (HL):** Uptrend components.

**Lower high (LH) / Lower low (LL):** Downtrend components.

**Break of Structure (BOS):** Price breaks previous significant high/low in trend direction (continuation).

**Change of Character (CHOCH):** Price breaks significant level against prevailing trend (potential reversal).

**Higher timeframe (HTF) / Lower timeframe (LTF):** Larger/smaller candle periods. HTF sets bias; LTF gives entries.

**Liquidity:** Areas of chart with clustered pending orders (stops).

**Buy-side liquidity (BSL):** Stops above current price.

**Sell-side liquidity (SSL):** Stops below current price.

**Equal highs / Equal lows:** Repeated tests of a level — stops cluster just beyond.

**Stop hunt / Liquidity sweep:** Price spikes through a level, triggers stops, reverses.

**Order block:** Candle or cluster where significant orders were placed; often acts as support/resistance.

**Fair value gap (FVG):** Imbalance where price moved too fast to fill all orders. Often revisited.

**R / R-multiple:** Risk unit. 1R = amount risked. A 2R winner = 2x the risk captured.

**Expectancy:** Average expected profit per trade, accounting for win rate and R-multiples.

---

## Appendix E — Journaling Templates

### Folder structure

\`\`\`
TradingJournal/
├── 2026-05/
│   ├── 2026-05-14_EURUSD_BOS-retest/
│   │   ├── entry.png
│   │   └── exit.png
│   ├── 2026-05-15_EURUSD_BOS-retest/
│   │   ├── entry.png
│   │   └── exit.png
│   └── ...
├── 2026-06/
└── ...
\`\`\`

### Spreadsheet columns (copy into Google Sheets)

| Date | Pair | Session | Setup | Entry | Stop | Target | Lot Size | R Risked | R Outcome | Adherence Y/N | Notes (optional, ≤10 words) |
|---|---|---|---|---|---|---|---|---|---|---|---|

### Monthly stats template

| Metric | Value |
|---|---|
| Total trades | |
| Wins | |
| Losses | |
| Win rate % | |
| Average winner (R) | |
| Average loser (R) | |
| Expectancy per trade (R) | |
| Max drawdown % | |
| Rule adherence % | |
| Largest win (R) | |
| Largest loss (R) | |
| Notes (1-2 sentences) | |

### Sunday accountability message template

To send to trainer every Sunday by 9pm:

\`\`\`
Week ending [date]
Trades taken: [#]
Wins/Losses: [#/#]
R for the week: [+/- #R]
Rule violations: [# and brief note]
One thing I noticed this week: [one sentence]
Attached: spreadsheet snapshot
\`\`\`

---

## Appendix F — The One-Page Summary (For Reference)

**The Goal:** Demonstrated edge across 300+ live trades by Month 12.

**The Path:**
1. Weeks 1-4: Foundations. No trading.
2. Week 6: Part A Eval.
3. Weeks 5-12: Demo trading. 50+ trades on one setup.
4. Weeks 13-26: Live at 0.5% risk, 10-20% of capital.
5. Weeks 27-39: Scale capital first, then risk to 1%.
6. Weeks 40-52: Compound. Honest Month 12 assessment.

**The Rules:**
- One pair. One session. One setup.
- Stop-loss on every trade.
- 0.5% risk going live; 1% maximum ever (this year).
- Journal every trade: two screenshots + one spreadsheet row.
- Sunday accountability to trainer.
- Kill switches are non-negotiable.

**The Mindset:**
- Rule adherence > P&L.
- Edge is statistical, not emotional.
- The fast path is the disciplined path.
- You are building a skill, not chasing a payday.
`,vp=Object.assign({"../curriculum/week-01.md":vh,"../curriculum/week-02.md":_h,"../curriculum/week-03.md":Sh,"../curriculum/week-04.md":xh,"../curriculum/week-05.md":Th,"../curriculum/week-06.md":Ph,"../curriculum/week-07.md":Eh,"../curriculum/week-08.md":Ch,"../curriculum/week-09.md":Wh,"../curriculum/week-10.md":Rh,"../curriculum/week-11.md":bh,"../curriculum/week-12.md":Mh,"../curriculum/week-13.md":Lh,"../curriculum/week-14.md":Ih,"../curriculum/week-15.md":zh,"../curriculum/week-16.md":Ah,"../curriculum/week-17.md":Nh,"../curriculum/week-18.md":Dh,"../curriculum/week-19.md":jh,"../curriculum/week-20.md":Fh,"../curriculum/week-21.md":Oh,"../curriculum/week-22.md":Bh,"../curriculum/week-23.md":Hh,"../curriculum/week-24.md":$h,"../curriculum/week-25.md":Uh,"../curriculum/week-26.md":Yh,"../curriculum/week-27.md":qh,"../curriculum/week-28.md":Vh,"../curriculum/week-29.md":Qh,"../curriculum/week-30.md":Kh,"../curriculum/week-31.md":Gh,"../curriculum/week-32.md":Zh,"../curriculum/week-33.md":Xh,"../curriculum/week-34.md":Jh,"../curriculum/week-35.md":ep,"../curriculum/week-36.md":np,"../curriculum/week-37.md":tp,"../curriculum/week-38.md":rp,"../curriculum/week-39.md":ip,"../curriculum/week-40.md":op,"../curriculum/week-41.md":sp,"../curriculum/week-42.md":ap,"../curriculum/week-43.md":lp,"../curriculum/week-44.md":up,"../curriculum/week-45.md":cp,"../curriculum/week-46.md":dp,"../curriculum/week-47.md":fp,"../curriculum/week-48.md":hp,"../curriculum/week-49.md":pp,"../curriculum/week-50.md":mp,"../curriculum/week-51.md":gp,"../curriculum/week-52.md":yp}),_p=Object.assign({"../curriculum/meta.md":kp}),Sp=Object.assign({"../curriculum/appendices.md":wp});function xp(e){const t=`../curriculum/week-${String(e).padStart(2,"0")}.md`;return vp[t]??null}function Tp(){return _p["../curriculum/meta.md"]??null}function Pp(){return Sp["../curriculum/appendices.md"]??null}function Xs(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let $n=Xs();function Mc(e){$n=e}const Lc=/[&<>"']/,Ep=new RegExp(Lc.source,"g"),Ic=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Cp=new RegExp(Ic.source,"g"),Wp={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},pl=e=>Wp[e];function ve(e,n){if(n){if(Lc.test(e))return e.replace(Ep,pl)}else if(Ic.test(e))return e.replace(Cp,pl);return e}const Rp=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function bp(e){return e.replace(Rp,(n,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const Mp=/(^|[^\[])\^/g;function D(e,n){e=typeof e=="string"?e:e.source,n=n||"";const t={replace:(r,i)=>(i=typeof i=="object"&&"source"in i?i.source:i,i=i.replace(Mp,"$1"),e=e.replace(r,i),t),getRegex:()=>new RegExp(e,n)};return t}function ml(e){try{e=encodeURI(e).replace(/%25/g,"%")}catch{return null}return e}const mi={exec:()=>null};function gl(e,n){const t=e.replace(/\|/g,(o,s,a)=>{let l=!1,u=s;for(;--u>=0&&a[u]==="\\";)l=!l;return l?"|":" |"}),r=t.split(/ \|/);let i=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),n)if(r.length>n)r.splice(n);else for(;r.length<n;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(/\\\|/g,"|");return r}function Mr(e,n,t){const r=e.length;if(r===0)return"";let i=0;for(;i<r&&e.charAt(r-i-1)===n;)i++;return e.slice(0,r-i)}function Lp(e,n){if(e.indexOf(n[1])===-1)return-1;let t=0;for(let r=0;r<e.length;r++)if(e[r]==="\\")r++;else if(e[r]===n[0])t++;else if(e[r]===n[1]&&(t--,t<0))return r;return-1}function yl(e,n,t,r){const i=n.href,o=n.title?ve(n.title):null,s=e[1].replace(/\\([\[\]])/g,"$1");if(e[0].charAt(0)!=="!"){r.state.inLink=!0;const a={type:"link",raw:t,href:i,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,a}return{type:"image",raw:t,href:i,title:o,text:ve(s)}}function Ip(e,n){const t=e.match(/^(\s+)(?:```)/);if(t===null)return n;const r=t[1];return n.split(`
`).map(i=>{const o=i.match(/^\s+/);if(o===null)return i;const[s]=o;return s.length>=r.length?i.slice(r.length):i}).join(`
`)}class gi{constructor(n){O(this,"options");O(this,"rules");O(this,"lexer");this.options=n||$n}space(n){const t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(n){const t=this.rules.block.code.exec(n);if(t){const r=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?r:Mr(r,`
`)}}}fences(n){const t=this.rules.block.fences.exec(n);if(t){const r=t[0],i=Ip(r,t[3]||"");return{type:"code",raw:r,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:i}}}heading(n){const t=this.rules.block.heading.exec(n);if(t){let r=t[2].trim();if(/#$/.test(r)){const i=Mr(r,"#");(this.options.pedantic||!i||/ $/.test(i))&&(r=i.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(n){const t=this.rules.block.hr.exec(n);if(t)return{type:"hr",raw:t[0]}}blockquote(n){const t=this.rules.block.blockquote.exec(n);if(t){const r=Mr(t[0].replace(/^ *>[ \t]?/gm,""),`
`),i=this.lexer.state.top;this.lexer.state.top=!0;const o=this.lexer.blockTokens(r);return this.lexer.state.top=i,{type:"blockquote",raw:t[0],tokens:o,text:r}}}list(n){let t=this.rules.block.list.exec(n);if(t){let r=t[1].trim();const i=r.length>1,o={type:"list",raw:"",ordered:i,start:i?+r.slice(0,-1):"",loose:!1,items:[]};r=i?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=i?r:"[*+-]");const s=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let a="",l="",u=!1;for(;n;){let h=!1;if(!(t=s.exec(n))||this.rules.block.hr.test(n))break;a=t[0],n=n.substring(a.length);let m=t[2].split(`
`,1)[0].replace(/^\t+/,d=>" ".repeat(3*d.length)),f=n.split(`
`,1)[0],g=0;this.options.pedantic?(g=2,l=m.trimStart()):(g=t[2].search(/[^ ]/),g=g>4?1:g,l=m.slice(g),g+=t[1].length);let w=!1;if(!m&&/^ *$/.test(f)&&(a+=f+`
`,n=n.substring(f.length+1),h=!0),!h){const d=new RegExp(`^ {0,${Math.min(3,g-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),c=new RegExp(`^ {0,${Math.min(3,g-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),p=new RegExp(`^ {0,${Math.min(3,g-1)}}(?:\`\`\`|~~~)`),y=new RegExp(`^ {0,${Math.min(3,g-1)}}#`);for(;n;){const x=n.split(`
`,1)[0];if(f=x,this.options.pedantic&&(f=f.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),p.test(f)||y.test(f)||d.test(f)||c.test(n))break;if(f.search(/[^ ]/)>=g||!f.trim())l+=`
`+f.slice(g);else{if(w||m.search(/[^ ]/)>=4||p.test(m)||y.test(m)||c.test(m))break;l+=`
`+f}!w&&!f.trim()&&(w=!0),a+=x+`
`,n=n.substring(x.length+1),m=f.slice(g)}}o.loose||(u?o.loose=!0:/\n *\n *$/.test(a)&&(u=!0));let v=null,A;this.options.gfm&&(v=/^\[[ xX]\] /.exec(l),v&&(A=v[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),o.items.push({type:"list_item",raw:a,task:!!v,checked:A,loose:!1,text:l,tokens:[]}),o.raw+=a}o.items[o.items.length-1].raw=a.trimEnd(),o.items[o.items.length-1].text=l.trimEnd(),o.raw=o.raw.trimEnd();for(let h=0;h<o.items.length;h++)if(this.lexer.state.top=!1,o.items[h].tokens=this.lexer.blockTokens(o.items[h].text,[]),!o.loose){const m=o.items[h].tokens.filter(g=>g.type==="space"),f=m.length>0&&m.some(g=>/\n.*\n/.test(g.raw));o.loose=f}if(o.loose)for(let h=0;h<o.items.length;h++)o.items[h].loose=!0;return o}}html(n){const t=this.rules.block.html.exec(n);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(n){const t=this.rules.block.def.exec(n);if(t){const r=t[1].toLowerCase().replace(/\s+/g," "),i=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",o=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:r,raw:t[0],href:i,title:o}}}table(n){const t=this.rules.block.table.exec(n);if(t){if(!/[:|]/.test(t[2]))return;const r={type:"table",raw:t[0],header:gl(t[1]).map(i=>({text:i,tokens:[]})),align:t[2].replace(/^\||\| *$/g,"").split("|"),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(r.header.length===r.align.length){let i=r.align.length,o,s,a,l;for(o=0;o<i;o++){const u=r.align[o];u&&(/^ *-+: *$/.test(u)?r.align[o]="right":/^ *:-+: *$/.test(u)?r.align[o]="center":/^ *:-+ *$/.test(u)?r.align[o]="left":r.align[o]=null)}for(i=r.rows.length,o=0;o<i;o++)r.rows[o]=gl(r.rows[o],r.header.length).map(u=>({text:u,tokens:[]}));for(i=r.header.length,s=0;s<i;s++)r.header[s].tokens=this.lexer.inline(r.header[s].text);for(i=r.rows.length,s=0;s<i;s++)for(l=r.rows[s],a=0;a<l.length;a++)l[a].tokens=this.lexer.inline(l[a].text);return r}}}lheading(n){const t=this.rules.block.lheading.exec(n);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(n){const t=this.rules.block.paragraph.exec(n);if(t){const r=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:r,tokens:this.lexer.inline(r)}}}text(n){const t=this.rules.block.text.exec(n);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){const t=this.rules.inline.escape.exec(n);if(t)return{type:"escape",raw:t[0],text:ve(t[1])}}tag(n){const t=this.rules.inline.tag.exec(n);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(n){const t=this.rules.inline.link.exec(n);if(t){const r=t[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const s=Mr(r.slice(0,-1),"\\");if((r.length-s.length)%2===0)return}else{const s=Lp(t[2],"()");if(s>-1){const l=(t[0].indexOf("!")===0?5:4)+t[1].length+s;t[2]=t[2].substring(0,s),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let i=t[2],o="";if(this.options.pedantic){const s=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);s&&(i=s[1],o=s[3])}else o=t[3]?t[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(r)?i=i.slice(1):i=i.slice(1,-1)),yl(t,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:o&&o.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(n,t){let r;if((r=this.rules.inline.reflink.exec(n))||(r=this.rules.inline.nolink.exec(n))){let i=(r[2]||r[1]).replace(/\s+/g," ");if(i=t[i.toLowerCase()],!i){const o=r[0].charAt(0);return{type:"text",raw:o,text:o}}return yl(r,i,r[0],this.lexer)}}emStrong(n,t,r=""){let i=this.rules.inline.emStrong.lDelim.exec(n);if(!i||i[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const s=[...i[0]].length-1;let a,l,u=s,h=0;const m=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(m.lastIndex=0,t=t.slice(-1*n.length+s);(i=m.exec(t))!=null;){if(a=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!a)continue;if(l=[...a].length,i[3]||i[4]){u+=l;continue}else if((i[5]||i[6])&&s%3&&!((s+l)%3)){h+=l;continue}if(u-=l,u>0)continue;l=Math.min(l,l+u+h);const f=[...i[0]][0].length,g=n.slice(0,s+i.index+f+l);if(Math.min(s,l)%2){const v=g.slice(1,-1);return{type:"em",raw:g,text:v,tokens:this.lexer.inlineTokens(v)}}const w=g.slice(2,-2);return{type:"strong",raw:g,text:w,tokens:this.lexer.inlineTokens(w)}}}}codespan(n){const t=this.rules.inline.code.exec(n);if(t){let r=t[2].replace(/\n/g," ");const i=/[^ ]/.test(r),o=/^ /.test(r)&&/ $/.test(r);return i&&o&&(r=r.substring(1,r.length-1)),r=ve(r,!0),{type:"codespan",raw:t[0],text:r}}}br(n){const t=this.rules.inline.br.exec(n);if(t)return{type:"br",raw:t[0]}}del(n){const t=this.rules.inline.del.exec(n);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(n){const t=this.rules.inline.autolink.exec(n);if(t){let r,i;return t[2]==="@"?(r=ve(t[1]),i="mailto:"+r):(r=ve(t[1]),i=r),{type:"link",raw:t[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}url(n){let t;if(t=this.rules.inline.url.exec(n)){let r,i;if(t[2]==="@")r=ve(t[0]),i="mailto:"+r;else{let o;do o=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])[0];while(o!==t[0]);r=ve(t[0]),t[1]==="www."?i="http://"+t[0]:i=t[0]}return{type:"link",raw:t[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(n){const t=this.rules.inline.text.exec(n);if(t){let r;return this.lexer.state.inRawBlock?r=t[0]:r=ve(t[0]),{type:"text",raw:t[0],text:r}}}}const W={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:mi,lheading:/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};W._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;W._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;W.def=D(W.def).replace("label",W._label).replace("title",W._title).getRegex();W.bullet=/(?:[*+-]|\d{1,9}[.)])/;W.listItemStart=D(/^( *)(bull) */).replace("bull",W.bullet).getRegex();W.list=D(W.list).replace(/bull/g,W.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+W.def.source+")").getRegex();W._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";W._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;W.html=D(W.html,"i").replace("comment",W._comment).replace("tag",W._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();W.lheading=D(W.lheading).replace(/bull/g,W.bullet).getRegex();W.paragraph=D(W._paragraph).replace("hr",W.hr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",W._tag).getRegex();W.blockquote=D(W.blockquote).replace("paragraph",W.paragraph).getRegex();W.normal={...W};W.gfm={...W.normal,table:"^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};W.gfm.table=D(W.gfm.table).replace("hr",W.hr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",W._tag).getRegex();W.gfm.paragraph=D(W._paragraph).replace("hr",W.hr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",W.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",W._tag).getRegex();W.pedantic={...W.normal,html:D(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",W._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:mi,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:D(W.normal._paragraph).replace("hr",W.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",W.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const _={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:mi,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:mi,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};_._punctuation="\\p{P}$+<=>`^|~";_.punctuation=D(_.punctuation,"u").replace(/punctuation/g,_._punctuation).getRegex();_.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;_.anyPunctuation=/\\[punct]/g;_._escapes=/\\([punct])/g;_._comment=D(W._comment).replace("(?:-->|$)","-->").getRegex();_.emStrong.lDelim=D(_.emStrong.lDelim,"u").replace(/punct/g,_._punctuation).getRegex();_.emStrong.rDelimAst=D(_.emStrong.rDelimAst,"gu").replace(/punct/g,_._punctuation).getRegex();_.emStrong.rDelimUnd=D(_.emStrong.rDelimUnd,"gu").replace(/punct/g,_._punctuation).getRegex();_.anyPunctuation=D(_.anyPunctuation,"gu").replace(/punct/g,_._punctuation).getRegex();_._escapes=D(_._escapes,"gu").replace(/punct/g,_._punctuation).getRegex();_._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;_._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;_.autolink=D(_.autolink).replace("scheme",_._scheme).replace("email",_._email).getRegex();_._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;_.tag=D(_.tag).replace("comment",_._comment).replace("attribute",_._attribute).getRegex();_._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;_._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;_._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;_.link=D(_.link).replace("label",_._label).replace("href",_._href).replace("title",_._title).getRegex();_.reflink=D(_.reflink).replace("label",_._label).replace("ref",W._label).getRegex();_.nolink=D(_.nolink).replace("ref",W._label).getRegex();_.reflinkSearch=D(_.reflinkSearch,"g").replace("reflink",_.reflink).replace("nolink",_.nolink).getRegex();_.normal={..._};_.pedantic={..._.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:D(/^!?\[(label)\]\((.*?)\)/).replace("label",_._label).getRegex(),reflink:D(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",_._label).getRegex()};_.gfm={..._.normal,escape:D(_.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};_.gfm.url=D(_.gfm.url,"i").replace("email",_.gfm._extended_email).getRegex();_.breaks={..._.gfm,br:D(_.br).replace("{2,}","*").getRegex(),text:D(_.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class $e{constructor(n){O(this,"tokens");O(this,"options");O(this,"state");O(this,"tokenizer");O(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=n||$n,this.options.tokenizer=this.options.tokenizer||new gi,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:W.normal,inline:_.normal};this.options.pedantic?(t.block=W.pedantic,t.inline=_.pedantic):this.options.gfm&&(t.block=W.gfm,this.options.breaks?t.inline=_.breaks:t.inline=_.gfm),this.tokenizer.rules=t}static get rules(){return{block:W,inline:_}}static lex(n,t){return new $e(t).lex(n)}static lexInline(n,t){return new $e(t).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(n,t=[]){this.options.pedantic?n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n=n.replace(/^( *)(\t+)/gm,(a,l,u)=>l+"    ".repeat(u.length));let r,i,o,s;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(r=a.call({lexer:this},n,t))?(n=n.substring(r.raw.length),t.push(r),!0):!1))){if(r=this.tokenizer.space(n)){n=n.substring(r.raw.length),r.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(r);continue}if(r=this.tokenizer.code(n)){n=n.substring(r.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+r.raw,i.text+=`
`+r.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(r);continue}if(r=this.tokenizer.fences(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.heading(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.hr(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.blockquote(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.list(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.html(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(n)){n=n.substring(r.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+r.raw,i.text+=`
`+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});continue}if(r=this.tokenizer.table(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.lheading(n)){n=n.substring(r.raw.length),t.push(r);continue}if(o=n,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const l=n.slice(1);let u;this.options.extensions.startBlock.forEach(h=>{u=h.call({lexer:this},l),typeof u=="number"&&u>=0&&(a=Math.min(a,u))}),a<1/0&&a>=0&&(o=n.substring(0,a+1))}if(this.state.top&&(r=this.tokenizer.paragraph(o))){i=t[t.length-1],s&&i.type==="paragraph"?(i.raw+=`
`+r.raw,i.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(r),s=o.length!==n.length,n=n.substring(r.raw.length);continue}if(r=this.tokenizer.text(n)){n=n.substring(r.raw.length),i=t[t.length-1],i&&i.type==="text"?(i.raw+=`
`+r.raw,i.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(r);continue}if(n){const a="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){let r,i,o,s=n,a,l,u;if(this.tokens.links){const h=Object.keys(this.tokens.links);if(h.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(s))!=null;)h.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(s=s.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(s))!=null;)s=s.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(s))!=null;)s=s.slice(0,a.index)+"++"+s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;n;)if(l||(u=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(h=>(r=h.call({lexer:this},n,t))?(n=n.substring(r.raw.length),t.push(r),!0):!1))){if(r=this.tokenizer.escape(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(n)){n=n.substring(r.raw.length),i=t[t.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):t.push(r);continue}if(r=this.tokenizer.link(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(r.raw.length),i=t[t.length-1],i&&r.type==="text"&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(n,s,u)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(n)){n=n.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(n)){n=n.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(n))){n=n.substring(r.raw.length),t.push(r);continue}if(o=n,this.options.extensions&&this.options.extensions.startInline){let h=1/0;const m=n.slice(1);let f;this.options.extensions.startInline.forEach(g=>{f=g.call({lexer:this},m),typeof f=="number"&&f>=0&&(h=Math.min(h,f))}),h<1/0&&h>=0&&(o=n.substring(0,h+1))}if(r=this.tokenizer.inlineText(o)){n=n.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(u=r.raw.slice(-1)),l=!0,i=t[t.length-1],i&&i.type==="text"?(i.raw+=r.raw,i.text+=r.text):t.push(r);continue}if(n){const h="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return t}}class yi{constructor(n){O(this,"options");this.options=n||$n}code(n,t,r){var o;const i=(o=(t||"").match(/^\S*/))==null?void 0:o[0];return n=n.replace(/\n$/,"")+`
`,i?'<pre><code class="language-'+ve(i)+'">'+(r?n:ve(n,!0))+`</code></pre>
`:"<pre><code>"+(r?n:ve(n,!0))+`</code></pre>
`}blockquote(n){return`<blockquote>
${n}</blockquote>
`}html(n,t){return n}heading(n,t,r){return`<h${t}>${n}</h${t}>
`}hr(){return`<hr>
`}list(n,t,r){const i=t?"ol":"ul",o=t&&r!==1?' start="'+r+'"':"";return"<"+i+o+`>
`+n+"</"+i+`>
`}listitem(n,t,r){return`<li>${n}</li>
`}checkbox(n){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(n){return`<p>${n}</p>
`}table(n,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+t+`</table>
`}tablerow(n){return`<tr>
${n}</tr>
`}tablecell(n,t){const r=t.header?"th":"td";return(t.align?`<${r} align="${t.align}">`:`<${r}>`)+n+`</${r}>
`}strong(n){return`<strong>${n}</strong>`}em(n){return`<em>${n}</em>`}codespan(n){return`<code>${n}</code>`}br(){return"<br>"}del(n){return`<del>${n}</del>`}link(n,t,r){const i=ml(n);if(i===null)return r;n=i;let o='<a href="'+n+'"';return t&&(o+=' title="'+t+'"'),o+=">"+r+"</a>",o}image(n,t,r){const i=ml(n);if(i===null)return r;n=i;let o=`<img src="${n}" alt="${r}"`;return t&&(o+=` title="${t}"`),o+=">",o}text(n){return n}}class Js{strong(n){return n}em(n){return n}codespan(n){return n}del(n){return n}html(n){return n}text(n){return n}link(n,t,r){return""+r}image(n,t,r){return""+r}br(){return""}}class Ue{constructor(n){O(this,"options");O(this,"renderer");O(this,"textRenderer");this.options=n||$n,this.options.renderer=this.options.renderer||new yi,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Js}static parse(n,t){return new Ue(t).parse(n)}static parseInline(n,t){return new Ue(t).parseInline(n)}parse(n,t=!0){let r="";for(let i=0;i<n.length;i++){const o=n[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const s=o,a=this.options.extensions.renderers[s.type].call({parser:this},s);if(a!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(s.type)){r+=a||"";continue}}switch(o.type){case"space":continue;case"hr":{r+=this.renderer.hr();continue}case"heading":{const s=o;r+=this.renderer.heading(this.parseInline(s.tokens),s.depth,bp(this.parseInline(s.tokens,this.textRenderer)));continue}case"code":{const s=o;r+=this.renderer.code(s.text,s.lang,!!s.escaped);continue}case"table":{const s=o;let a="",l="";for(let h=0;h<s.header.length;h++)l+=this.renderer.tablecell(this.parseInline(s.header[h].tokens),{header:!0,align:s.align[h]});a+=this.renderer.tablerow(l);let u="";for(let h=0;h<s.rows.length;h++){const m=s.rows[h];l="";for(let f=0;f<m.length;f++)l+=this.renderer.tablecell(this.parseInline(m[f].tokens),{header:!1,align:s.align[f]});u+=this.renderer.tablerow(l)}r+=this.renderer.table(a,u);continue}case"blockquote":{const s=o,a=this.parse(s.tokens);r+=this.renderer.blockquote(a);continue}case"list":{const s=o,a=s.ordered,l=s.start,u=s.loose;let h="";for(let m=0;m<s.items.length;m++){const f=s.items[m],g=f.checked,w=f.task;let v="";if(f.task){const A=this.renderer.checkbox(!!g);u?f.tokens.length>0&&f.tokens[0].type==="paragraph"?(f.tokens[0].text=A+" "+f.tokens[0].text,f.tokens[0].tokens&&f.tokens[0].tokens.length>0&&f.tokens[0].tokens[0].type==="text"&&(f.tokens[0].tokens[0].text=A+" "+f.tokens[0].tokens[0].text)):f.tokens.unshift({type:"text",text:A+" "}):v+=A+" "}v+=this.parse(f.tokens,u),h+=this.renderer.listitem(v,w,!!g)}r+=this.renderer.list(h,a,l);continue}case"html":{const s=o;r+=this.renderer.html(s.text,s.block);continue}case"paragraph":{const s=o;r+=this.renderer.paragraph(this.parseInline(s.tokens));continue}case"text":{let s=o,a=s.tokens?this.parseInline(s.tokens):s.text;for(;i+1<n.length&&n[i+1].type==="text";)s=n[++i],a+=`
`+(s.tokens?this.parseInline(s.tokens):s.text);r+=t?this.renderer.paragraph(a):a;continue}default:{const s='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return r}parseInline(n,t){t=t||this.renderer;let r="";for(let i=0;i<n.length;i++){const o=n[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const s=this.options.extensions.renderers[o.type].call({parser:this},o);if(s!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){r+=s||"";continue}}switch(o.type){case"escape":{const s=o;r+=t.text(s.text);break}case"html":{const s=o;r+=t.html(s.text);break}case"link":{const s=o;r+=t.link(s.href,s.title,this.parseInline(s.tokens,t));break}case"image":{const s=o;r+=t.image(s.href,s.title,s.text);break}case"strong":{const s=o;r+=t.strong(this.parseInline(s.tokens,t));break}case"em":{const s=o;r+=t.em(this.parseInline(s.tokens,t));break}case"codespan":{const s=o;r+=t.codespan(s.text);break}case"br":{r+=t.br();break}case"del":{const s=o;r+=t.del(this.parseInline(s.tokens,t));break}case"text":{const s=o;r+=t.text(s.text);break}default:{const s='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return r}}class Ht{constructor(n){O(this,"options");this.options=n||$n}preprocess(n){return n}postprocess(n){return n}}O(Ht,"passThroughHooks",new Set(["preprocess","postprocess"]));var On,rs,zc;class zp{constructor(...n){ra(this,On);O(this,"defaults",Xs());O(this,"options",this.setOptions);O(this,"parse",hr(this,On,rs).call(this,$e.lex,Ue.parse));O(this,"parseInline",hr(this,On,rs).call(this,$e.lexInline,Ue.parseInline));O(this,"Parser",Ue);O(this,"Renderer",yi);O(this,"TextRenderer",Js);O(this,"Lexer",$e);O(this,"Tokenizer",gi);O(this,"Hooks",Ht);this.use(...n)}walkTokens(n,t){var i,o;let r=[];for(const s of n)switch(r=r.concat(t.call(this,s)),s.type){case"table":{const a=s;for(const l of a.header)r=r.concat(this.walkTokens(l.tokens,t));for(const l of a.rows)for(const u of l)r=r.concat(this.walkTokens(u.tokens,t));break}case"list":{const a=s;r=r.concat(this.walkTokens(a.items,t));break}default:{const a=s;(o=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&o[a.type]?this.defaults.extensions.childTokens[a.type].forEach(l=>{r=r.concat(this.walkTokens(a[l],t))}):a.tokens&&(r=r.concat(this.walkTokens(a.tokens,t)))}}return r}use(...n){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(r=>{const i={...r};if(i.async=this.defaults.async||i.async||!1,r.extensions&&(r.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){const s=t.renderers[o.name];s?t.renderers[o.name]=function(...a){let l=o.renderer.apply(this,a);return l===!1&&(l=s.apply(this,a)),l}:t.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const s=t[o.level];s?s.unshift(o.tokenizer):t[o.level]=[o.tokenizer],o.start&&(o.level==="block"?t.startBlock?t.startBlock.push(o.start):t.startBlock=[o.start]:o.level==="inline"&&(t.startInline?t.startInline.push(o.start):t.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(t.childTokens[o.name]=o.childTokens)}),i.extensions=t),r.renderer){const o=this.defaults.renderer||new yi(this.defaults);for(const s in r.renderer){const a=r.renderer[s],l=s,u=o[l];o[l]=(...h)=>{let m=a.apply(o,h);return m===!1&&(m=u.apply(o,h)),m||""}}i.renderer=o}if(r.tokenizer){const o=this.defaults.tokenizer||new gi(this.defaults);for(const s in r.tokenizer){const a=r.tokenizer[s],l=s,u=o[l];o[l]=(...h)=>{let m=a.apply(o,h);return m===!1&&(m=u.apply(o,h)),m}}i.tokenizer=o}if(r.hooks){const o=this.defaults.hooks||new Ht;for(const s in r.hooks){const a=r.hooks[s],l=s,u=o[l];Ht.passThroughHooks.has(s)?o[l]=h=>{if(this.defaults.async)return Promise.resolve(a.call(o,h)).then(f=>u.call(o,f));const m=a.call(o,h);return u.call(o,m)}:o[l]=(...h)=>{let m=a.apply(o,h);return m===!1&&(m=u.apply(o,h)),m}}i.hooks=o}if(r.walkTokens){const o=this.defaults.walkTokens,s=r.walkTokens;i.walkTokens=function(a){let l=[];return l.push(s.call(this,a)),o&&(l=l.concat(o.call(this,a))),l}}this.defaults={...this.defaults,...i}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,t){return $e.lex(n,t??this.defaults)}parser(n,t){return Ue.parse(n,t??this.defaults)}}On=new WeakSet,rs=function(n,t){return(r,i)=>{const o={...i},s={...this.defaults,...o};this.defaults.async===!0&&o.async===!1&&(s.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),s.async=!0);const a=hr(this,On,zc).call(this,!!s.silent,!!s.async);if(typeof r>"u"||r===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));if(s.hooks&&(s.hooks.options=s),s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(r):r).then(l=>n(l,s)).then(l=>s.walkTokens?Promise.all(this.walkTokens(l,s.walkTokens)).then(()=>l):l).then(l=>t(l,s)).then(l=>s.hooks?s.hooks.postprocess(l):l).catch(a);try{s.hooks&&(r=s.hooks.preprocess(r));const l=n(r,s);s.walkTokens&&this.walkTokens(l,s.walkTokens);let u=t(l,s);return s.hooks&&(u=s.hooks.postprocess(u)),u}catch(l){return a(l)}}},zc=function(n,t){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const i="<p>An error occurred:</p><pre>"+ve(r.message+"",!0)+"</pre>";return t?Promise.resolve(i):i}if(t)return Promise.reject(r);throw r}};const Fn=new zp;function N(e,n){return Fn.parse(e,n)}N.options=N.setOptions=function(e){return Fn.setOptions(e),N.defaults=Fn.defaults,Mc(N.defaults),N};N.getDefaults=Xs;N.defaults=$n;N.use=function(...e){return Fn.use(...e),N.defaults=Fn.defaults,Mc(N.defaults),N};N.walkTokens=function(e,n){return Fn.walkTokens(e,n)};N.parseInline=Fn.parseInline;N.Parser=Ue;N.parser=Ue.parse;N.Renderer=yi;N.TextRenderer=Js;N.Lexer=$e;N.lexer=$e.lex;N.Tokenizer=gi;N.Hooks=Ht;N.parse=N;N.options;N.setOptions;N.use;N.walkTokens;N.parseInline;Ue.parse;$e.lex;N.setOptions({gfm:!0,breaks:!1});function ea({content:e,className:n=""}){const t=Ye.useMemo(()=>e?N(e):'<p class="state-empty">Content not found.</p>',[e]);return S.jsx("div",{className:`markdown-content ${n}`,dangerouslySetInnerHTML:{__html:t}})}function Ap({weekNumber:e,isComplete:n,toggleWeek:t}){const r=Ur.find(h=>h.number===e),i=r?yh(e):null,o=xp(e),s=e>1?Ur.find(h=>h.number===e-1):null,a=e<52?Ur.find(h=>h.number===e+1):null,l=n(e);if(!r)return S.jsx("main",{className:"page",children:S.jsxs("div",{className:"state-empty",children:["Week ",e," not found."]})});const u=kh(e,r.title,o);return S.jsxs("main",{className:"page",children:[S.jsx("button",{className:"week-view__back",onClick:()=>{window.location.hash="#/"},"aria-label":"Back to curriculum",children:"← Curriculum"}),S.jsxs("div",{className:"week-view__header",children:[i&&S.jsx("div",{className:"week-view__phase-badge",children:S.jsxs("span",{className:"phase-badge","data-phase":i.id,children:[i.label," · ",i.name]})}),S.jsxs("h1",{className:"week-view__title",children:["Week ",String(e).padStart(2,"0")," — ",r.title]}),S.jsx("p",{className:"week-view__sub",children:l?"✓ Completed":"Not yet complete"})]}),S.jsxs("div",{className:"week-view__actions",children:[S.jsx("button",{className:`btn ${l?"btn-primary--done btn-primary":"btn-primary"}`,onClick:()=>t(e),children:l?"✓ Completed":"Mark Complete"}),S.jsx("a",{className:"btn btn-claude",href:u,target:"_blank",rel:"noopener noreferrer",title:"Open this week's content as a study session in Claude",children:"✦ Study with Claude"})]}),S.jsx(ea,{content:o}),S.jsxs("div",{className:"week-view__nav",children:[S.jsxs("button",{className:"week-view__nav-btn",onClick:()=>s&&(window.location.hash=`#/week/${s.number}`),disabled:!s,children:["← ",s?`Week ${s.number}`:""]}),S.jsxs("button",{className:"week-view__nav-btn",onClick:()=>a&&(window.location.hash=`#/week/${a.number}`),disabled:!a,children:[a?`Week ${a.number}`:""," →"]})]})]})}function Np(){const e=Tp();return S.jsxs("main",{className:"page",children:[S.jsxs("div",{className:"ref-header",children:[S.jsx("h1",{children:"Reference"}),S.jsx("p",{children:"Operating principles, kill switches, journaling system, and the three-layer stack."})]}),S.jsx(ea,{content:e})]})}function Dp(){const e=Pp();return S.jsxs("main",{className:"page",children:[S.jsxs("div",{className:"ref-header",children:[S.jsx("h1",{children:"Appendices"}),S.jsx("p",{children:"Part A eval, Month 4 survival guide, resources, glossary, and journaling templates."})]}),S.jsx(ea,{content:e})]})}const Ac="vunafx_progress";function jp(){try{const e=localStorage.getItem(Ac);return e?JSON.parse(e):{}}catch{return{}}}function Fp(e){try{localStorage.setItem(Ac,JSON.stringify(e))}catch{}}function Op(){const[e,n]=Ye.useState(jp),t=Ye.useCallback(s=>!!e[s],[e]),r=Ye.useCallback(s=>{n(a=>{const l={...a};return l[s]?delete l[s]:l[s]=!0,Fp(l),l})},[]),i=s=>s.filter(a=>!!e[a]).length,o=Object.keys(e).length;return{isComplete:t,toggleWeek:r,completedCount:i,totalComplete:o}}function Bp(){const[e,n]=Ye.useState(()=>window.location.hash||"#/");return Ye.useEffect(()=>{const t=()=>n(window.location.hash||"#/");return window.addEventListener("hashchange",t),()=>window.removeEventListener("hashchange",t)},[]),e}function Hp(e){const n=e.replace(/^#\/?/,"");if(!n||n==="/")return{page:"home"};const t=n.split("/");if(t[0]==="week"&&t[1]){const r=parseInt(t[1],10);if(!isNaN(r)&&r>=1&&r<=52)return{page:"week",param:r}}return t[0]==="reference"?{page:"reference"}:t[0]==="appendices"?{page:"appendices"}:{page:"home"}}function $p(){const e=Bp(),n=Hp(e),{isComplete:t,toggleWeek:r,completedCount:i,totalComplete:o}=Op();return Ye.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[e]),S.jsxs("div",{className:"app",children:[S.jsx(gh,{currentHash:e,totalComplete:o}),n.page==="home"&&S.jsx(wh,{isComplete:t,toggleWeek:r,completedCount:i,totalComplete:o}),n.page==="week"&&S.jsx(Ap,{weekNumber:n.param,isComplete:t,toggleWeek:r}),n.page==="reference"&&S.jsx(Np,{}),n.page==="appendices"&&S.jsx(Dp,{})]})}uo.createRoot(document.getElementById("root")).render(S.jsx(td.StrictMode,{children:S.jsx($p,{})}));
