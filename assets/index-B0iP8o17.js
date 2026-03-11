(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();var vu={exports:{}},bo={},xu={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function $_(){if(Ap)return pt;Ap=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function y(O,re,Ue){this.props=O,this.context=re,this.refs=T,this.updater=Ue||S}y.prototype.isReactComponent={},y.prototype.setState=function(O,re){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,re,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function g(){}g.prototype=y.prototype;function D(O,re,Ue){this.props=O,this.context=re,this.refs=T,this.updater=Ue||S}var b=D.prototype=new g;b.constructor=D,E(b,y.prototype),b.isPureReactComponent=!0;var C=Array.isArray,V=Object.prototype.hasOwnProperty,I={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function B(O,re,Ue){var ee,de={},Me=null,ve=null;if(re!=null)for(ee in re.ref!==void 0&&(ve=re.ref),re.key!==void 0&&(Me=""+re.key),re)V.call(re,ee)&&!U.hasOwnProperty(ee)&&(de[ee]=re[ee]);var Ae=arguments.length-2;if(Ae===1)de.children=Ue;else if(1<Ae){for(var Ne=Array(Ae),Ze=0;Ze<Ae;Ze++)Ne[Ze]=arguments[Ze+2];de.children=Ne}if(O&&O.defaultProps)for(ee in Ae=O.defaultProps,Ae)de[ee]===void 0&&(de[ee]=Ae[ee]);return{$$typeof:s,type:O,key:Me,ref:ve,props:de,_owner:I.current}}function P(O,re){return{$$typeof:s,type:O.type,key:re,ref:O.ref,props:O.props,_owner:O._owner}}function A(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function z(O){var re={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ue){return re[Ue]})}var J=/\/+/g;function Z(O,re){return typeof O=="object"&&O!==null&&O.key!=null?z(""+O.key):re.toString(36)}function le(O,re,Ue,ee,de){var Me=typeof O;(Me==="undefined"||Me==="boolean")&&(O=null);var ve=!1;if(O===null)ve=!0;else switch(Me){case"string":case"number":ve=!0;break;case"object":switch(O.$$typeof){case s:case e:ve=!0}}if(ve)return ve=O,de=de(ve),O=ee===""?"."+Z(ve,0):ee,C(de)?(Ue="",O!=null&&(Ue=O.replace(J,"$&/")+"/"),le(de,re,Ue,"",function(Ze){return Ze})):de!=null&&(A(de)&&(de=P(de,Ue+(!de.key||ve&&ve.key===de.key?"":(""+de.key).replace(J,"$&/")+"/")+O)),re.push(de)),1;if(ve=0,ee=ee===""?".":ee+":",C(O))for(var Ae=0;Ae<O.length;Ae++){Me=O[Ae];var Ne=ee+Z(Me,Ae);ve+=le(Me,re,Ue,Ne,de)}else if(Ne=x(O),typeof Ne=="function")for(O=Ne.call(O),Ae=0;!(Me=O.next()).done;)Me=Me.value,Ne=ee+Z(Me,Ae++),ve+=le(Me,re,Ue,Ne,de);else if(Me==="object")throw re=String(O),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return ve}function fe(O,re,Ue){if(O==null)return O;var ee=[],de=0;return le(O,ee,"","",function(Me){return re.call(Ue,Me,de++)}),ee}function oe(O){if(O._status===-1){var re=O._result;re=re(),re.then(function(Ue){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ue)},function(Ue){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ue)}),O._status===-1&&(O._status=0,O._result=re)}if(O._status===1)return O._result.default;throw O._result}var ce={current:null},W={transition:null},ue={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:W,ReactCurrentOwner:I};function se(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:fe,forEach:function(O,re,Ue){fe(O,function(){re.apply(this,arguments)},Ue)},count:function(O){var re=0;return fe(O,function(){re++}),re},toArray:function(O){return fe(O,function(re){return re})||[]},only:function(O){if(!A(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},pt.Component=y,pt.Fragment=n,pt.Profiler=a,pt.PureComponent=D,pt.StrictMode=r,pt.Suspense=h,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,pt.act=se,pt.cloneElement=function(O,re,Ue){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var ee=E({},O.props),de=O.key,Me=O.ref,ve=O._owner;if(re!=null){if(re.ref!==void 0&&(Me=re.ref,ve=I.current),re.key!==void 0&&(de=""+re.key),O.type&&O.type.defaultProps)var Ae=O.type.defaultProps;for(Ne in re)V.call(re,Ne)&&!U.hasOwnProperty(Ne)&&(ee[Ne]=re[Ne]===void 0&&Ae!==void 0?Ae[Ne]:re[Ne])}var Ne=arguments.length-2;if(Ne===1)ee.children=Ue;else if(1<Ne){Ae=Array(Ne);for(var Ze=0;Ze<Ne;Ze++)Ae[Ze]=arguments[Ze+2];ee.children=Ae}return{$$typeof:s,type:O.type,key:de,ref:Me,props:ee,_owner:ve}},pt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},pt.createElement=B,pt.createFactory=function(O){var re=B.bind(null,O);return re.type=O,re},pt.createRef=function(){return{current:null}},pt.forwardRef=function(O){return{$$typeof:f,render:O}},pt.isValidElement=A,pt.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:oe}},pt.memo=function(O,re){return{$$typeof:m,type:O,compare:re===void 0?null:re}},pt.startTransition=function(O){var re=W.transition;W.transition={};try{O()}finally{W.transition=re}},pt.unstable_act=se,pt.useCallback=function(O,re){return ce.current.useCallback(O,re)},pt.useContext=function(O){return ce.current.useContext(O)},pt.useDebugValue=function(){},pt.useDeferredValue=function(O){return ce.current.useDeferredValue(O)},pt.useEffect=function(O,re){return ce.current.useEffect(O,re)},pt.useId=function(){return ce.current.useId()},pt.useImperativeHandle=function(O,re,Ue){return ce.current.useImperativeHandle(O,re,Ue)},pt.useInsertionEffect=function(O,re){return ce.current.useInsertionEffect(O,re)},pt.useLayoutEffect=function(O,re){return ce.current.useLayoutEffect(O,re)},pt.useMemo=function(O,re){return ce.current.useMemo(O,re)},pt.useReducer=function(O,re,Ue){return ce.current.useReducer(O,re,Ue)},pt.useRef=function(O){return ce.current.useRef(O)},pt.useState=function(O){return ce.current.useState(O)},pt.useSyncExternalStore=function(O,re,Ue){return ce.current.useSyncExternalStore(O,re,Ue)},pt.useTransition=function(){return ce.current.useTransition()},pt.version="18.3.1",pt}var Rp;function jf(){return Rp||(Rp=1,xu.exports=$_()),xu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cp;function K_(){if(Cp)return bo;Cp=1;var s=jf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,m){var _,v={},x=null,S=null;m!==void 0&&(x=""+m),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(_ in h)r.call(h,_)&&!l.hasOwnProperty(_)&&(v[_]=h[_]);if(f&&f.defaultProps)for(_ in h=f.defaultProps,h)v[_]===void 0&&(v[_]=h[_]);return{$$typeof:e,type:f,key:x,ref:S,props:v,_owner:a.current}}return bo.Fragment=n,bo.jsx=u,bo.jsxs=u,bo}var Pp;function Z_(){return Pp||(Pp=1,vu.exports=K_()),vu.exports}var F=Z_(),Qn=jf(),el={},yu={exports:{}},Dn={},Su={exports:{}},Mu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bp;function Q_(){return bp||(bp=1,(function(s){function e(W,ue){var se=W.length;W.push(ue);e:for(;0<se;){var O=se-1>>>1,re=W[O];if(0<a(re,ue))W[O]=ue,W[se]=re,se=O;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var ue=W[0],se=W.pop();if(se!==ue){W[0]=se;e:for(var O=0,re=W.length,Ue=re>>>1;O<Ue;){var ee=2*(O+1)-1,de=W[ee],Me=ee+1,ve=W[Me];if(0>a(de,se))Me<re&&0>a(ve,de)?(W[O]=ve,W[Me]=se,O=Me):(W[O]=de,W[ee]=se,O=ee);else if(Me<re&&0>a(ve,se))W[O]=ve,W[Me]=se,O=Me;else break e}}return ue}function a(W,ue){var se=W.sortIndex-ue.sortIndex;return se!==0?se:W.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],m=[],_=1,v=null,x=3,S=!1,E=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(W){for(var ue=n(m);ue!==null;){if(ue.callback===null)r(m);else if(ue.startTime<=W)r(m),ue.sortIndex=ue.expirationTime,e(h,ue);else break;ue=n(m)}}function C(W){if(T=!1,b(W),!E)if(n(h)!==null)E=!0,oe(V);else{var ue=n(m);ue!==null&&ce(C,ue.startTime-W)}}function V(W,ue){E=!1,T&&(T=!1,g(B),B=-1),S=!0;var se=x;try{for(b(ue),v=n(h);v!==null&&(!(v.expirationTime>ue)||W&&!z());){var O=v.callback;if(typeof O=="function"){v.callback=null,x=v.priorityLevel;var re=O(v.expirationTime<=ue);ue=s.unstable_now(),typeof re=="function"?v.callback=re:v===n(h)&&r(h),b(ue)}else r(h);v=n(h)}if(v!==null)var Ue=!0;else{var ee=n(m);ee!==null&&ce(C,ee.startTime-ue),Ue=!1}return Ue}finally{v=null,x=se,S=!1}}var I=!1,U=null,B=-1,P=5,A=-1;function z(){return!(s.unstable_now()-A<P)}function J(){if(U!==null){var W=s.unstable_now();A=W;var ue=!0;try{ue=U(!0,W)}finally{ue?Z():(I=!1,U=null)}}else I=!1}var Z;if(typeof D=="function")Z=function(){D(J)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,fe=le.port2;le.port1.onmessage=J,Z=function(){fe.postMessage(null)}}else Z=function(){y(J,0)};function oe(W){U=W,I||(I=!0,Z())}function ce(W,ue){B=y(function(){W(s.unstable_now())},ue)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(W){W.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,oe(V))},s.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<W?Math.floor(1e3/W):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(W){switch(x){case 1:case 2:case 3:var ue=3;break;default:ue=x}var se=x;x=ue;try{return W()}finally{x=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(W,ue){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var se=x;x=W;try{return ue()}finally{x=se}},s.unstable_scheduleCallback=function(W,ue,se){var O=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?O+se:O):se=O,W){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=se+re,W={id:_++,callback:ue,priorityLevel:W,startTime:se,expirationTime:re,sortIndex:-1},se>O?(W.sortIndex=se,e(m,W),n(h)===null&&W===n(m)&&(T?(g(B),B=-1):T=!0,ce(C,se-O))):(W.sortIndex=re,e(h,W),E||S||(E=!0,oe(V))),W},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(W){var ue=x;return function(){var se=x;x=ue;try{return W.apply(this,arguments)}finally{x=se}}}})(Mu)),Mu}var Lp;function J_(){return Lp||(Lp=1,Su.exports=Q_()),Su.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp;function ev(){if(Dp)return Dn;Dp=1;var s=jf(),e=J_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function x(t){return h.call(v,t)?!0:h.call(_,t)?!1:m.test(t)?v[t]=!0:(_[t]=!0,!1)}function S(t,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,o,c){if(i===null||typeof i>"u"||S(t,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,o,c,d,p,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function D(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,D);y[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,D);y[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,D);y[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function b(t,i,o,c){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,d,c)&&(o=null),c||d===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,c=d.attributeNamespace,o===null?t.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,c?t.setAttributeNS(c,i,o):t.setAttribute(i,o))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),I=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),z=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),W=Symbol.iterator;function ue(t){return t===null||typeof t!="object"?null:(t=W&&t[W]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,O;function re(t){if(O===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+t}var Ue=!1;function ee(t,i){if(!t||Ue)return"";Ue=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ie){var c=ie}Reflect.construct(t,[],i)}else{try{i.call()}catch(ie){c=ie}t.call(i.prototype)}else{try{throw Error()}catch(ie){c=ie}t()}}catch(ie){if(ie&&c&&typeof ie.stack=="string"){for(var d=ie.stack.split(`
`),p=c.stack.split(`
`),M=d.length-1,N=p.length-1;1<=M&&0<=N&&d[M]!==p[N];)N--;for(;1<=M&&0<=N;M--,N--)if(d[M]!==p[N]){if(M!==1||N!==1)do if(M--,N--,0>N||d[M]!==p[N]){var H=`
`+d[M].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=M&&0<=N);break}}}finally{Ue=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?re(t):""}function de(t){switch(t.tag){case 5:return re(t.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return t=ee(t.type,!1),t;case 11:return t=ee(t.type.render,!1),t;case 1:return t=ee(t.type,!0),t;default:return""}}function Me(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case I:return"Portal";case P:return"Profiler";case B:return"StrictMode";case Z:return"Suspense";case le:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case J:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fe:return i=t.displayName||null,i!==null?i:Me(t.type)||"Memo";case oe:i=t._payload,t=t._init;try{return Me(t(i))}catch{}}return null}function ve(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(i);case 8:return i===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ne(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(t){var i=Ne(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){c=""+M,p.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(M){c=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function me(t){t._valueTracker||(t._valueTracker=Ze(t))}function Re(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return t&&(c=Ne(t)?t.checked?"true":"false":t.value),t=c,t!==o?(i.setValue(t),!0):!1}function Qe(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function k(t,i){var o=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function ln(t,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=Ae(i.value!=null?i.value:o),t._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function mt(t,i){i=i.checked,i!=null&&b(t,"checked",i,!1)}function dt(t,i){mt(t,i);var o=Ae(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Ct(t,i.type,o):i.hasOwnProperty("defaultValue")&&Ct(t,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function $e(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Ct(t,i,o){(i!=="number"||Qe(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var je=Array.isArray;function L(t,i,o,c){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&c&&(t[o].defaultSelected=!0)}else{for(o=""+Ae(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,c&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function w(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function te(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(je(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Ae(o)}}function ge(t,i){var o=Ae(i.value),c=Ae(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),c!=null&&(t.defaultValue=""+c)}function xe(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function he(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qe(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?he(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ce,ke=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,d){MSApp.execUnsafeLocalFunction(function(){return t(i,o,c,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ce.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ft(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Te={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ze=["Webkit","ms","Moz","O"];Object.keys(Te).forEach(function(t){ze.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Te[i]=Te[t]})});function Je(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Te.hasOwnProperty(t)&&Te[t]?(""+i).trim():i+"px"}function it(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,d=Je(o,i[o],c);o==="float"&&(o="cssFloat"),c?t.setProperty(o,d):t[o]=d}}var He=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ht(t,i){if(i){if(He[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function ot(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function j(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pe=null,ae=null,pe=null;function Ie(t){if(t=mo(t)){if(typeof Pe!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ma(i),Pe(t.stateNode,t.type,i))}}function De(t){ae?pe?pe.push(t):pe=[t]:ae=t}function at(){if(ae){var t=ae,i=pe;if(pe=ae=null,Ie(t),i)for(t=0;t<i.length;t++)Ie(i[t])}}function Dt(t,i){return t(i)}function Kt(){}var yt=!1;function An(t,i,o){if(yt)return t(i,o);yt=!0;try{return Dt(t,i,o)}finally{yt=!1,(ae!==null||pe!==null)&&(Kt(),at())}}function yn(t,i){var o=t.stateNode;if(o===null)return null;var c=ma(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Jr=!1;if(f)try{var Wi={};Object.defineProperty(Wi,"passive",{get:function(){Jr=!0}}),window.addEventListener("test",Wi,Wi),window.removeEventListener("test",Wi,Wi)}catch{Jr=!1}function Mi(t,i,o,c,d,p,M,N,H){var ie=Array.prototype.slice.call(arguments,3);try{i.apply(o,ie)}catch(ye){this.onError(ye)}}var Ei=!1,Tr=null,wr=!1,Xi=null,qo={onError:function(t){Ei=!0,Tr=t}};function es(t,i,o,c,d,p,M,N,H){Ei=!1,Tr=null,Mi.apply(qo,arguments)}function Yo(t,i,o,c,d,p,M,N,H){if(es.apply(this,arguments),Ei){if(Ei){var ie=Tr;Ei=!1,Tr=null}else throw Error(n(198));wr||(wr=!0,Xi=ie)}}function di(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function $o(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Ko(t){if(di(t)!==t)throw Error(n(188))}function Hl(t){var i=t.alternate;if(!i){if(i=di(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,c=i;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return Ko(d),t;if(p===c)return Ko(d),i;p=p.sibling}throw Error(n(188))}if(o.return!==c.return)o=d,c=p;else{for(var M=!1,N=d.child;N;){if(N===o){M=!0,o=d,c=p;break}if(N===c){M=!0,c=d,o=p;break}N=N.sibling}if(!M){for(N=p.child;N;){if(N===o){M=!0,o=p,c=d;break}if(N===c){M=!0,c=p,o=d;break}N=N.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==c)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function Zo(t){return t=Hl(t),t!==null?Qo(t):null}function Qo(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Qo(t);if(i!==null)return i;t=t.sibling}return null}var Jo=e.unstable_scheduleCallback,R=e.unstable_cancelCallback,q=e.unstable_shouldYield,ne=e.unstable_requestPaint,K=e.unstable_now,Y=e.unstable_getCurrentPriorityLevel,Ee=e.unstable_ImmediatePriority,be=e.unstable_UserBlockingPriority,Fe=e.unstable_NormalPriority,Ve=e.unstable_LowPriority,rt=e.unstable_IdlePriority,nt=null,We=null;function vt(t){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(nt,t,void 0,(t.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:xt,Ht=Math.log,Ut=Math.LN2;function xt(t){return t>>>=0,t===0?32:31-(Ht(t)/Ut|0)|0}var Ke=64,Vt=4194304;function _t(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function dn(t,i){var o=t.pendingLanes;if(o===0)return 0;var c=0,d=t.suspendedLanes,p=t.pingedLanes,M=o&268435455;if(M!==0){var N=M&~d;N!==0?c=_t(N):(p&=M,p!==0&&(c=_t(p)))}else M=o&~d,M!==0?c=_t(M):p!==0&&(c=_t(p));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)o=31-lt(i),d=1<<o,c|=t[o],i&=~d;return c}function ji(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sn(t,i){for(var o=t.suspendedLanes,c=t.pingedLanes,d=t.expirationTimes,p=t.pendingLanes;0<p;){var M=31-lt(p),N=1<<M,H=d[M];H===-1?((N&o)===0||(N&c)!==0)&&(d[M]=ji(N,i)):H<=i&&(t.expiredLanes|=N),p&=~N}}function Ti(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function bt(){var t=Ke;return Ke<<=1,(Ke&4194240)===0&&(Ke=64),t}function hn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function tn(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-lt(i),t[i]=o}function cn(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-lt(o),p=1<<d;i[d]=0,c[d]=-1,t[d]=-1,o&=~p}}function nn(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var c=31-lt(o),d=1<<c;d&i|t[c]&i&&(t[c]|=i),o&=~d}}var St=0;function hi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var sd,Vl,od,ad,ld,Gl=!1,ea=[],qi=null,Yi=null,$i=null,Qs=new Map,Js=new Map,Ki=[],_g="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cd(t,i){switch(t){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":Qs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Js.delete(i.pointerId)}}function eo(t,i,o,c,d,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},i!==null&&(i=mo(i),i!==null&&Vl(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function vg(t,i,o,c,d){switch(i){case"focusin":return qi=eo(qi,t,i,o,c,d),!0;case"dragenter":return Yi=eo(Yi,t,i,o,c,d),!0;case"mouseover":return $i=eo($i,t,i,o,c,d),!0;case"pointerover":var p=d.pointerId;return Qs.set(p,eo(Qs.get(p)||null,t,i,o,c,d)),!0;case"gotpointercapture":return p=d.pointerId,Js.set(p,eo(Js.get(p)||null,t,i,o,c,d)),!0}return!1}function ud(t){var i=Ar(t.target);if(i!==null){var o=di(i);if(o!==null){if(i=o.tag,i===13){if(i=$o(o),i!==null){t.blockedOn=i,ld(t.priority,function(){od(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ta(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Xl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var c=new o.constructor(o.type,o);At=c,o.target.dispatchEvent(c),At=null}else return i=mo(o),i!==null&&Vl(i),t.blockedOn=o,!1;i.shift()}return!0}function fd(t,i,o){ta(t)&&o.delete(i)}function xg(){Gl=!1,qi!==null&&ta(qi)&&(qi=null),Yi!==null&&ta(Yi)&&(Yi=null),$i!==null&&ta($i)&&($i=null),Qs.forEach(fd),Js.forEach(fd)}function to(t,i){t.blockedOn===i&&(t.blockedOn=null,Gl||(Gl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,xg)))}function no(t){function i(d){return to(d,t)}if(0<ea.length){to(ea[0],t);for(var o=1;o<ea.length;o++){var c=ea[o];c.blockedOn===t&&(c.blockedOn=null)}}for(qi!==null&&to(qi,t),Yi!==null&&to(Yi,t),$i!==null&&to($i,t),Qs.forEach(i),Js.forEach(i),o=0;o<Ki.length;o++)c=Ki[o],c.blockedOn===t&&(c.blockedOn=null);for(;0<Ki.length&&(o=Ki[0],o.blockedOn===null);)ud(o),o.blockedOn===null&&Ki.shift()}var ts=C.ReactCurrentBatchConfig,na=!0;function yg(t,i,o,c){var d=St,p=ts.transition;ts.transition=null;try{St=1,Wl(t,i,o,c)}finally{St=d,ts.transition=p}}function Sg(t,i,o,c){var d=St,p=ts.transition;ts.transition=null;try{St=4,Wl(t,i,o,c)}finally{St=d,ts.transition=p}}function Wl(t,i,o,c){if(na){var d=Xl(t,i,o,c);if(d===null)lc(t,i,c,ia,o),cd(t,c);else if(vg(d,t,i,o,c))c.stopPropagation();else if(cd(t,c),i&4&&-1<_g.indexOf(t)){for(;d!==null;){var p=mo(d);if(p!==null&&sd(p),p=Xl(t,i,o,c),p===null&&lc(t,i,c,ia,o),p===d)break;d=p}d!==null&&c.stopPropagation()}else lc(t,i,c,null,o)}}var ia=null;function Xl(t,i,o,c){if(ia=null,t=j(c),t=Ar(t),t!==null)if(i=di(t),i===null)t=null;else if(o=i.tag,o===13){if(t=$o(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ia=t,null}function dd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y()){case Ee:return 1;case be:return 4;case Fe:case Ve:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Zi=null,jl=null,ra=null;function hd(){if(ra)return ra;var t,i=jl,o=i.length,c,d="value"in Zi?Zi.value:Zi.textContent,p=d.length;for(t=0;t<o&&i[t]===d[t];t++);var M=o-t;for(c=1;c<=M&&i[o-c]===d[p-c];c++);return ra=d.slice(t,1<c?1-c:void 0)}function sa(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function oa(){return!0}function pd(){return!1}function On(t){function i(o,c,d,p,M){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var N in t)t.hasOwnProperty(N)&&(o=t[N],this[N]=o?o(p):p[N]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?oa:pd,this.isPropagationStopped=pd,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=oa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=oa)},persist:function(){},isPersistent:oa}),i}var ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ql=On(ns),io=se({},ns,{view:0,detail:0}),Mg=On(io),Yl,$l,ro,aa=se({},io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ro&&(ro&&t.type==="mousemove"?(Yl=t.screenX-ro.screenX,$l=t.screenY-ro.screenY):$l=Yl=0,ro=t),Yl)},movementY:function(t){return"movementY"in t?t.movementY:$l}}),md=On(aa),Eg=se({},aa,{dataTransfer:0}),Tg=On(Eg),wg=se({},io,{relatedTarget:0}),Kl=On(wg),Ag=se({},ns,{animationName:0,elapsedTime:0,pseudoElement:0}),Rg=On(Ag),Cg=se({},ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Pg=On(Cg),bg=se({},ns,{data:0}),gd=On(bg),Lg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ng={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ig(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Ng[t])?!!i[t]:!1}function Zl(){return Ig}var Ug=se({},io,{key:function(t){if(t.key){var i=Lg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=sa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Dg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zl,charCode:function(t){return t.type==="keypress"?sa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Fg=On(Ug),Og=se({},aa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_d=On(Og),kg=se({},io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zl}),Bg=On(kg),zg=se({},ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hg=On(zg),Vg=se({},aa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Gg=On(Vg),Wg=[9,13,27,32],Ql=f&&"CompositionEvent"in window,so=null;f&&"documentMode"in document&&(so=document.documentMode);var Xg=f&&"TextEvent"in window&&!so,vd=f&&(!Ql||so&&8<so&&11>=so),xd=" ",yd=!1;function Sd(t,i){switch(t){case"keyup":return Wg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Md(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var is=!1;function jg(t,i){switch(t){case"compositionend":return Md(i);case"keypress":return i.which!==32?null:(yd=!0,xd);case"textInput":return t=i.data,t===xd&&yd?null:t;default:return null}}function qg(t,i){if(is)return t==="compositionend"||!Ql&&Sd(t,i)?(t=hd(),ra=jl=Zi=null,is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return vd&&i.locale!=="ko"?null:i.data;default:return null}}var Yg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ed(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Yg[t.type]:i==="textarea"}function Td(t,i,o,c){De(c),i=da(i,"onChange"),0<i.length&&(o=new ql("onChange","change",null,o,c),t.push({event:o,listeners:i}))}var oo=null,ao=null;function $g(t){Vd(t,0)}function la(t){var i=ls(t);if(Re(i))return t}function Kg(t,i){if(t==="change")return i}var wd=!1;if(f){var Jl;if(f){var ec="oninput"in document;if(!ec){var Ad=document.createElement("div");Ad.setAttribute("oninput","return;"),ec=typeof Ad.oninput=="function"}Jl=ec}else Jl=!1;wd=Jl&&(!document.documentMode||9<document.documentMode)}function Rd(){oo&&(oo.detachEvent("onpropertychange",Cd),ao=oo=null)}function Cd(t){if(t.propertyName==="value"&&la(ao)){var i=[];Td(i,ao,t,j(t)),An($g,i)}}function Zg(t,i,o){t==="focusin"?(Rd(),oo=i,ao=o,oo.attachEvent("onpropertychange",Cd)):t==="focusout"&&Rd()}function Qg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return la(ao)}function Jg(t,i){if(t==="click")return la(i)}function e_(t,i){if(t==="input"||t==="change")return la(i)}function t_(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Jn=typeof Object.is=="function"?Object.is:t_;function lo(t,i){if(Jn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!h.call(i,d)||!Jn(t[d],i[d]))return!1}return!0}function Pd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bd(t,i){var o=Pd(t);t=0;for(var c;o;){if(o.nodeType===3){if(c=t+o.textContent.length,t<=i&&c>=i)return{node:o,offset:i-t};t=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Pd(o)}}function Ld(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Ld(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Dd(){for(var t=window,i=Qe();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Qe(t.document)}return i}function tc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function n_(t){var i=Dd(),o=t.focusedElem,c=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Ld(o.ownerDocument.documentElement,o)){if(c!==null&&tc(o)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!t.extend&&p>c&&(d=c,c=p,p=d),d=bd(o,p);var M=bd(o,c);d&&M&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),p>c?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var i_=f&&"documentMode"in document&&11>=document.documentMode,rs=null,nc=null,co=null,ic=!1;function Nd(t,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;ic||rs==null||rs!==Qe(c)||(c=rs,"selectionStart"in c&&tc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),co&&lo(co,c)||(co=c,c=da(nc,"onSelect"),0<c.length&&(i=new ql("onSelect","select",null,i,o),t.push({event:i,listeners:c}),i.target=rs)))}function ca(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var ss={animationend:ca("Animation","AnimationEnd"),animationiteration:ca("Animation","AnimationIteration"),animationstart:ca("Animation","AnimationStart"),transitionend:ca("Transition","TransitionEnd")},rc={},Id={};f&&(Id=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function ua(t){if(rc[t])return rc[t];if(!ss[t])return t;var i=ss[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Id)return rc[t]=i[o];return t}var Ud=ua("animationend"),Fd=ua("animationiteration"),Od=ua("animationstart"),kd=ua("transitionend"),Bd=new Map,zd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(t,i){Bd.set(t,i),l(i,[t])}for(var sc=0;sc<zd.length;sc++){var oc=zd[sc],r_=oc.toLowerCase(),s_=oc[0].toUpperCase()+oc.slice(1);Qi(r_,"on"+s_)}Qi(Ud,"onAnimationEnd"),Qi(Fd,"onAnimationIteration"),Qi(Od,"onAnimationStart"),Qi("dblclick","onDoubleClick"),Qi("focusin","onFocus"),Qi("focusout","onBlur"),Qi(kd,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),o_=new Set("cancel close invalid load scroll toggle".split(" ").concat(uo));function Hd(t,i,o){var c=t.type||"unknown-event";t.currentTarget=o,Yo(c,i,void 0,t),t.currentTarget=null}function Vd(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var c=t[o],d=c.event;c=c.listeners;e:{var p=void 0;if(i)for(var M=c.length-1;0<=M;M--){var N=c[M],H=N.instance,ie=N.currentTarget;if(N=N.listener,H!==p&&d.isPropagationStopped())break e;Hd(d,N,ie),p=H}else for(M=0;M<c.length;M++){if(N=c[M],H=N.instance,ie=N.currentTarget,N=N.listener,H!==p&&d.isPropagationStopped())break e;Hd(d,N,ie),p=H}}}if(wr)throw t=Xi,wr=!1,Xi=null,t}function Nt(t,i){var o=i[pc];o===void 0&&(o=i[pc]=new Set);var c=t+"__bubble";o.has(c)||(Gd(i,t,2,!1),o.add(c))}function ac(t,i,o){var c=0;i&&(c|=4),Gd(o,t,c,i)}var fa="_reactListening"+Math.random().toString(36).slice(2);function fo(t){if(!t[fa]){t[fa]=!0,r.forEach(function(o){o!=="selectionchange"&&(o_.has(o)||ac(o,!1,t),ac(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[fa]||(i[fa]=!0,ac("selectionchange",!1,i))}}function Gd(t,i,o,c){switch(dd(i)){case 1:var d=yg;break;case 4:d=Sg;break;default:d=Wl}o=d.bind(null,i,o,t),d=void 0,!Jr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function lc(t,i,o,c,d){var p=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var M=c.tag;if(M===3||M===4){var N=c.stateNode.containerInfo;if(N===d||N.nodeType===8&&N.parentNode===d)break;if(M===4)for(M=c.return;M!==null;){var H=M.tag;if((H===3||H===4)&&(H=M.stateNode.containerInfo,H===d||H.nodeType===8&&H.parentNode===d))return;M=M.return}for(;N!==null;){if(M=Ar(N),M===null)return;if(H=M.tag,H===5||H===6){c=p=M;continue e}N=N.parentNode}}c=c.return}An(function(){var ie=p,ye=j(o),Se=[];e:{var _e=Bd.get(t);if(_e!==void 0){var Oe=ql,Ge=t;switch(t){case"keypress":if(sa(o)===0)break e;case"keydown":case"keyup":Oe=Fg;break;case"focusin":Ge="focus",Oe=Kl;break;case"focusout":Ge="blur",Oe=Kl;break;case"beforeblur":case"afterblur":Oe=Kl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Oe=md;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Oe=Tg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Oe=Bg;break;case Ud:case Fd:case Od:Oe=Rg;break;case kd:Oe=Hg;break;case"scroll":Oe=Mg;break;case"wheel":Oe=Gg;break;case"copy":case"cut":case"paste":Oe=Pg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Oe=_d}var Xe=(i&4)!==0,Wt=!Xe&&t==="scroll",$=Xe?_e!==null?_e+"Capture":null:_e;Xe=[];for(var X=ie,Q;X!==null;){Q=X;var we=Q.stateNode;if(Q.tag===5&&we!==null&&(Q=we,$!==null&&(we=yn(X,$),we!=null&&Xe.push(ho(X,we,Q)))),Wt)break;X=X.return}0<Xe.length&&(_e=new Oe(_e,Ge,null,o,ye),Se.push({event:_e,listeners:Xe}))}}if((i&7)===0){e:{if(_e=t==="mouseover"||t==="pointerover",Oe=t==="mouseout"||t==="pointerout",_e&&o!==At&&(Ge=o.relatedTarget||o.fromElement)&&(Ar(Ge)||Ge[wi]))break e;if((Oe||_e)&&(_e=ye.window===ye?ye:(_e=ye.ownerDocument)?_e.defaultView||_e.parentWindow:window,Oe?(Ge=o.relatedTarget||o.toElement,Oe=ie,Ge=Ge?Ar(Ge):null,Ge!==null&&(Wt=di(Ge),Ge!==Wt||Ge.tag!==5&&Ge.tag!==6)&&(Ge=null)):(Oe=null,Ge=ie),Oe!==Ge)){if(Xe=md,we="onMouseLeave",$="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(Xe=_d,we="onPointerLeave",$="onPointerEnter",X="pointer"),Wt=Oe==null?_e:ls(Oe),Q=Ge==null?_e:ls(Ge),_e=new Xe(we,X+"leave",Oe,o,ye),_e.target=Wt,_e.relatedTarget=Q,we=null,Ar(ye)===ie&&(Xe=new Xe($,X+"enter",Ge,o,ye),Xe.target=Q,Xe.relatedTarget=Wt,we=Xe),Wt=we,Oe&&Ge)t:{for(Xe=Oe,$=Ge,X=0,Q=Xe;Q;Q=os(Q))X++;for(Q=0,we=$;we;we=os(we))Q++;for(;0<X-Q;)Xe=os(Xe),X--;for(;0<Q-X;)$=os($),Q--;for(;X--;){if(Xe===$||$!==null&&Xe===$.alternate)break t;Xe=os(Xe),$=os($)}Xe=null}else Xe=null;Oe!==null&&Wd(Se,_e,Oe,Xe,!1),Ge!==null&&Wt!==null&&Wd(Se,Wt,Ge,Xe,!0)}}e:{if(_e=ie?ls(ie):window,Oe=_e.nodeName&&_e.nodeName.toLowerCase(),Oe==="select"||Oe==="input"&&_e.type==="file")var Ye=Kg;else if(Ed(_e))if(wd)Ye=e_;else{Ye=Qg;var et=Zg}else(Oe=_e.nodeName)&&Oe.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Ye=Jg);if(Ye&&(Ye=Ye(t,ie))){Td(Se,Ye,o,ye);break e}et&&et(t,_e,ie),t==="focusout"&&(et=_e._wrapperState)&&et.controlled&&_e.type==="number"&&Ct(_e,"number",_e.value)}switch(et=ie?ls(ie):window,t){case"focusin":(Ed(et)||et.contentEditable==="true")&&(rs=et,nc=ie,co=null);break;case"focusout":co=nc=rs=null;break;case"mousedown":ic=!0;break;case"contextmenu":case"mouseup":case"dragend":ic=!1,Nd(Se,o,ye);break;case"selectionchange":if(i_)break;case"keydown":case"keyup":Nd(Se,o,ye)}var tt;if(Ql)e:{switch(t){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else is?Sd(t,o)&&(st="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(st="onCompositionStart");st&&(vd&&o.locale!=="ko"&&(is||st!=="onCompositionStart"?st==="onCompositionEnd"&&is&&(tt=hd()):(Zi=ye,jl="value"in Zi?Zi.value:Zi.textContent,is=!0)),et=da(ie,st),0<et.length&&(st=new gd(st,t,null,o,ye),Se.push({event:st,listeners:et}),tt?st.data=tt:(tt=Md(o),tt!==null&&(st.data=tt)))),(tt=Xg?jg(t,o):qg(t,o))&&(ie=da(ie,"onBeforeInput"),0<ie.length&&(ye=new gd("onBeforeInput","beforeinput",null,o,ye),Se.push({event:ye,listeners:ie}),ye.data=tt))}Vd(Se,i)})}function ho(t,i,o){return{instance:t,listener:i,currentTarget:o}}function da(t,i){for(var o=i+"Capture",c=[];t!==null;){var d=t,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=yn(t,o),p!=null&&c.unshift(ho(t,p,d)),p=yn(t,i),p!=null&&c.push(ho(t,p,d))),t=t.return}return c}function os(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wd(t,i,o,c,d){for(var p=i._reactName,M=[];o!==null&&o!==c;){var N=o,H=N.alternate,ie=N.stateNode;if(H!==null&&H===c)break;N.tag===5&&ie!==null&&(N=ie,d?(H=yn(o,p),H!=null&&M.unshift(ho(o,H,N))):d||(H=yn(o,p),H!=null&&M.push(ho(o,H,N)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var a_=/\r\n?/g,l_=/\u0000|\uFFFD/g;function Xd(t){return(typeof t=="string"?t:""+t).replace(a_,`
`).replace(l_,"")}function ha(t,i,o){if(i=Xd(i),Xd(t)!==i&&o)throw Error(n(425))}function pa(){}var cc=null,uc=null;function fc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var dc=typeof setTimeout=="function"?setTimeout:void 0,c_=typeof clearTimeout=="function"?clearTimeout:void 0,jd=typeof Promise=="function"?Promise:void 0,u_=typeof queueMicrotask=="function"?queueMicrotask:typeof jd<"u"?function(t){return jd.resolve(null).then(t).catch(f_)}:dc;function f_(t){setTimeout(function(){throw t})}function hc(t,i){var o=i,c=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(c===0){t.removeChild(d),no(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=d}while(o);no(i)}function Ji(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function qd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var as=Math.random().toString(36).slice(2),pi="__reactFiber$"+as,po="__reactProps$"+as,wi="__reactContainer$"+as,pc="__reactEvents$"+as,d_="__reactListeners$"+as,h_="__reactHandles$"+as;function Ar(t){var i=t[pi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[wi]||o[pi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=qd(t);t!==null;){if(o=t[pi])return o;t=qd(t)}return i}t=o,o=t.parentNode}return null}function mo(t){return t=t[pi]||t[wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ma(t){return t[po]||null}var mc=[],cs=-1;function er(t){return{current:t}}function It(t){0>cs||(t.current=mc[cs],mc[cs]=null,cs--)}function Lt(t,i){cs++,mc[cs]=t.current,t.current=i}var tr={},pn=er(tr),Rn=er(!1),Rr=tr;function us(t,i){var o=t.type.contextTypes;if(!o)return tr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in o)d[p]=i[p];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function Cn(t){return t=t.childContextTypes,t!=null}function ga(){It(Rn),It(pn)}function Yd(t,i,o){if(pn.current!==tr)throw Error(n(168));Lt(pn,i),Lt(Rn,o)}function $d(t,i,o){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(n(108,ve(t)||"Unknown",d));return se({},o,c)}function _a(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,Rr=pn.current,Lt(pn,t),Lt(Rn,Rn.current),!0}function Kd(t,i,o){var c=t.stateNode;if(!c)throw Error(n(169));o?(t=$d(t,i,Rr),c.__reactInternalMemoizedMergedChildContext=t,It(Rn),It(pn),Lt(pn,t)):It(Rn),Lt(Rn,o)}var Ai=null,va=!1,gc=!1;function Zd(t){Ai===null?Ai=[t]:Ai.push(t)}function p_(t){va=!0,Zd(t)}function nr(){if(!gc&&Ai!==null){gc=!0;var t=0,i=St;try{var o=Ai;for(St=1;t<o.length;t++){var c=o[t];do c=c(!0);while(c!==null)}Ai=null,va=!1}catch(d){throw Ai!==null&&(Ai=Ai.slice(t+1)),Jo(Ee,nr),d}finally{St=i,gc=!1}}return null}var fs=[],ds=0,xa=null,ya=0,Gn=[],Wn=0,Cr=null,Ri=1,Ci="";function Pr(t,i){fs[ds++]=ya,fs[ds++]=xa,xa=t,ya=i}function Qd(t,i,o){Gn[Wn++]=Ri,Gn[Wn++]=Ci,Gn[Wn++]=Cr,Cr=t;var c=Ri;t=Ci;var d=32-lt(c)-1;c&=~(1<<d),o+=1;var p=32-lt(i)+d;if(30<p){var M=d-d%5;p=(c&(1<<M)-1).toString(32),c>>=M,d-=M,Ri=1<<32-lt(i)+d|o<<d|c,Ci=p+t}else Ri=1<<p|o<<d|c,Ci=t}function _c(t){t.return!==null&&(Pr(t,1),Qd(t,1,0))}function vc(t){for(;t===xa;)xa=fs[--ds],fs[ds]=null,ya=fs[--ds],fs[ds]=null;for(;t===Cr;)Cr=Gn[--Wn],Gn[Wn]=null,Ci=Gn[--Wn],Gn[Wn]=null,Ri=Gn[--Wn],Gn[Wn]=null}var kn=null,Bn=null,Ft=!1,ei=null;function Jd(t,i){var o=Yn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function eh(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,kn=t,Bn=Ji(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,kn=t,Bn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Cr!==null?{id:Ri,overflow:Ci}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Yn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,kn=t,Bn=null,!0):!1;default:return!1}}function xc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yc(t){if(Ft){var i=Bn;if(i){var o=i;if(!eh(t,i)){if(xc(t))throw Error(n(418));i=Ji(o.nextSibling);var c=kn;i&&eh(t,i)?Jd(c,o):(t.flags=t.flags&-4097|2,Ft=!1,kn=t)}}else{if(xc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ft=!1,kn=t}}}function th(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kn=t}function Sa(t){if(t!==kn)return!1;if(!Ft)return th(t),Ft=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!fc(t.type,t.memoizedProps)),i&&(i=Bn)){if(xc(t))throw nh(),Error(n(418));for(;i;)Jd(t,i),i=Ji(i.nextSibling)}if(th(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Bn=Ji(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Bn=null}}else Bn=kn?Ji(t.stateNode.nextSibling):null;return!0}function nh(){for(var t=Bn;t;)t=Ji(t.nextSibling)}function hs(){Bn=kn=null,Ft=!1}function Sc(t){ei===null?ei=[t]:ei.push(t)}var m_=C.ReactCurrentBatchConfig;function go(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var c=o.stateNode}if(!c)throw Error(n(147,t));var d=c,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(M){var N=d.refs;M===null?delete N[p]:N[p]=M},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Ma(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function ih(t){var i=t._init;return i(t._payload)}function rh(t){function i($,X){if(t){var Q=$.deletions;Q===null?($.deletions=[X],$.flags|=16):Q.push(X)}}function o($,X){if(!t)return null;for(;X!==null;)i($,X),X=X.sibling;return null}function c($,X){for($=new Map;X!==null;)X.key!==null?$.set(X.key,X):$.set(X.index,X),X=X.sibling;return $}function d($,X){return $=ur($,X),$.index=0,$.sibling=null,$}function p($,X,Q){return $.index=Q,t?(Q=$.alternate,Q!==null?(Q=Q.index,Q<X?($.flags|=2,X):Q):($.flags|=2,X)):($.flags|=1048576,X)}function M($){return t&&$.alternate===null&&($.flags|=2),$}function N($,X,Q,we){return X===null||X.tag!==6?(X=du(Q,$.mode,we),X.return=$,X):(X=d(X,Q),X.return=$,X)}function H($,X,Q,we){var Ye=Q.type;return Ye===U?ye($,X,Q.props.children,we,Q.key):X!==null&&(X.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===oe&&ih(Ye)===X.type)?(we=d(X,Q.props),we.ref=go($,X,Q),we.return=$,we):(we=ja(Q.type,Q.key,Q.props,null,$.mode,we),we.ref=go($,X,Q),we.return=$,we)}function ie($,X,Q,we){return X===null||X.tag!==4||X.stateNode.containerInfo!==Q.containerInfo||X.stateNode.implementation!==Q.implementation?(X=hu(Q,$.mode,we),X.return=$,X):(X=d(X,Q.children||[]),X.return=$,X)}function ye($,X,Q,we,Ye){return X===null||X.tag!==7?(X=Or(Q,$.mode,we,Ye),X.return=$,X):(X=d(X,Q),X.return=$,X)}function Se($,X,Q){if(typeof X=="string"&&X!==""||typeof X=="number")return X=du(""+X,$.mode,Q),X.return=$,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case V:return Q=ja(X.type,X.key,X.props,null,$.mode,Q),Q.ref=go($,null,X),Q.return=$,Q;case I:return X=hu(X,$.mode,Q),X.return=$,X;case oe:var we=X._init;return Se($,we(X._payload),Q)}if(je(X)||ue(X))return X=Or(X,$.mode,Q,null),X.return=$,X;Ma($,X)}return null}function _e($,X,Q,we){var Ye=X!==null?X.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Ye!==null?null:N($,X,""+Q,we);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case V:return Q.key===Ye?H($,X,Q,we):null;case I:return Q.key===Ye?ie($,X,Q,we):null;case oe:return Ye=Q._init,_e($,X,Ye(Q._payload),we)}if(je(Q)||ue(Q))return Ye!==null?null:ye($,X,Q,we,null);Ma($,Q)}return null}function Oe($,X,Q,we,Ye){if(typeof we=="string"&&we!==""||typeof we=="number")return $=$.get(Q)||null,N(X,$,""+we,Ye);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case V:return $=$.get(we.key===null?Q:we.key)||null,H(X,$,we,Ye);case I:return $=$.get(we.key===null?Q:we.key)||null,ie(X,$,we,Ye);case oe:var et=we._init;return Oe($,X,Q,et(we._payload),Ye)}if(je(we)||ue(we))return $=$.get(Q)||null,ye(X,$,we,Ye,null);Ma(X,we)}return null}function Ge($,X,Q,we){for(var Ye=null,et=null,tt=X,st=X=0,on=null;tt!==null&&st<Q.length;st++){tt.index>st?(on=tt,tt=null):on=tt.sibling;var Et=_e($,tt,Q[st],we);if(Et===null){tt===null&&(tt=on);break}t&&tt&&Et.alternate===null&&i($,tt),X=p(Et,X,st),et===null?Ye=Et:et.sibling=Et,et=Et,tt=on}if(st===Q.length)return o($,tt),Ft&&Pr($,st),Ye;if(tt===null){for(;st<Q.length;st++)tt=Se($,Q[st],we),tt!==null&&(X=p(tt,X,st),et===null?Ye=tt:et.sibling=tt,et=tt);return Ft&&Pr($,st),Ye}for(tt=c($,tt);st<Q.length;st++)on=Oe(tt,$,st,Q[st],we),on!==null&&(t&&on.alternate!==null&&tt.delete(on.key===null?st:on.key),X=p(on,X,st),et===null?Ye=on:et.sibling=on,et=on);return t&&tt.forEach(function(fr){return i($,fr)}),Ft&&Pr($,st),Ye}function Xe($,X,Q,we){var Ye=ue(Q);if(typeof Ye!="function")throw Error(n(150));if(Q=Ye.call(Q),Q==null)throw Error(n(151));for(var et=Ye=null,tt=X,st=X=0,on=null,Et=Q.next();tt!==null&&!Et.done;st++,Et=Q.next()){tt.index>st?(on=tt,tt=null):on=tt.sibling;var fr=_e($,tt,Et.value,we);if(fr===null){tt===null&&(tt=on);break}t&&tt&&fr.alternate===null&&i($,tt),X=p(fr,X,st),et===null?Ye=fr:et.sibling=fr,et=fr,tt=on}if(Et.done)return o($,tt),Ft&&Pr($,st),Ye;if(tt===null){for(;!Et.done;st++,Et=Q.next())Et=Se($,Et.value,we),Et!==null&&(X=p(Et,X,st),et===null?Ye=Et:et.sibling=Et,et=Et);return Ft&&Pr($,st),Ye}for(tt=c($,tt);!Et.done;st++,Et=Q.next())Et=Oe(tt,$,st,Et.value,we),Et!==null&&(t&&Et.alternate!==null&&tt.delete(Et.key===null?st:Et.key),X=p(Et,X,st),et===null?Ye=Et:et.sibling=Et,et=Et);return t&&tt.forEach(function(Y_){return i($,Y_)}),Ft&&Pr($,st),Ye}function Wt($,X,Q,we){if(typeof Q=="object"&&Q!==null&&Q.type===U&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case V:e:{for(var Ye=Q.key,et=X;et!==null;){if(et.key===Ye){if(Ye=Q.type,Ye===U){if(et.tag===7){o($,et.sibling),X=d(et,Q.props.children),X.return=$,$=X;break e}}else if(et.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===oe&&ih(Ye)===et.type){o($,et.sibling),X=d(et,Q.props),X.ref=go($,et,Q),X.return=$,$=X;break e}o($,et);break}else i($,et);et=et.sibling}Q.type===U?(X=Or(Q.props.children,$.mode,we,Q.key),X.return=$,$=X):(we=ja(Q.type,Q.key,Q.props,null,$.mode,we),we.ref=go($,X,Q),we.return=$,$=we)}return M($);case I:e:{for(et=Q.key;X!==null;){if(X.key===et)if(X.tag===4&&X.stateNode.containerInfo===Q.containerInfo&&X.stateNode.implementation===Q.implementation){o($,X.sibling),X=d(X,Q.children||[]),X.return=$,$=X;break e}else{o($,X);break}else i($,X);X=X.sibling}X=hu(Q,$.mode,we),X.return=$,$=X}return M($);case oe:return et=Q._init,Wt($,X,et(Q._payload),we)}if(je(Q))return Ge($,X,Q,we);if(ue(Q))return Xe($,X,Q,we);Ma($,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,X!==null&&X.tag===6?(o($,X.sibling),X=d(X,Q),X.return=$,$=X):(o($,X),X=du(Q,$.mode,we),X.return=$,$=X),M($)):o($,X)}return Wt}var ps=rh(!0),sh=rh(!1),Ea=er(null),Ta=null,ms=null,Mc=null;function Ec(){Mc=ms=Ta=null}function Tc(t){var i=Ea.current;It(Ea),t._currentValue=i}function wc(t,i,o){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===o)break;t=t.return}}function gs(t,i){Ta=t,Mc=ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Pn=!0),t.firstContext=null)}function Xn(t){var i=t._currentValue;if(Mc!==t)if(t={context:t,memoizedValue:i,next:null},ms===null){if(Ta===null)throw Error(n(308));ms=t,Ta.dependencies={lanes:0,firstContext:t}}else ms=ms.next=t;return i}var br=null;function Ac(t){br===null?br=[t]:br.push(t)}function oh(t,i,o,c){var d=i.interleaved;return d===null?(o.next=o,Ac(i)):(o.next=d.next,d.next=o),i.interleaved=o,Pi(t,c)}function Pi(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var ir=!1;function Rc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ah(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function rr(t,i,o){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(Mt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Pi(t,o)}return d=c.interleaved,d===null?(i.next=i,Ac(c)):(i.next=d.next,d.next=i),c.interleaved=i,Pi(t,o)}function wa(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,nn(t,o)}}function lh(t,i){var o=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?d=p=M:p=p.next=M,o=o.next}while(o!==null);p===null?d=p=i:p=p.next=i}else d=p=i;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Aa(t,i,o,c){var d=t.updateQueue;ir=!1;var p=d.firstBaseUpdate,M=d.lastBaseUpdate,N=d.shared.pending;if(N!==null){d.shared.pending=null;var H=N,ie=H.next;H.next=null,M===null?p=ie:M.next=ie,M=H;var ye=t.alternate;ye!==null&&(ye=ye.updateQueue,N=ye.lastBaseUpdate,N!==M&&(N===null?ye.firstBaseUpdate=ie:N.next=ie,ye.lastBaseUpdate=H))}if(p!==null){var Se=d.baseState;M=0,ye=ie=H=null,N=p;do{var _e=N.lane,Oe=N.eventTime;if((c&_e)===_e){ye!==null&&(ye=ye.next={eventTime:Oe,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var Ge=t,Xe=N;switch(_e=i,Oe=o,Xe.tag){case 1:if(Ge=Xe.payload,typeof Ge=="function"){Se=Ge.call(Oe,Se,_e);break e}Se=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=Xe.payload,_e=typeof Ge=="function"?Ge.call(Oe,Se,_e):Ge,_e==null)break e;Se=se({},Se,_e);break e;case 2:ir=!0}}N.callback!==null&&N.lane!==0&&(t.flags|=64,_e=d.effects,_e===null?d.effects=[N]:_e.push(N))}else Oe={eventTime:Oe,lane:_e,tag:N.tag,payload:N.payload,callback:N.callback,next:null},ye===null?(ie=ye=Oe,H=Se):ye=ye.next=Oe,M|=_e;if(N=N.next,N===null){if(N=d.shared.pending,N===null)break;_e=N,N=_e.next,_e.next=null,d.lastBaseUpdate=_e,d.shared.pending=null}}while(!0);if(ye===null&&(H=Se),d.baseState=H,d.firstBaseUpdate=ie,d.lastBaseUpdate=ye,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Nr|=M,t.lanes=M,t.memoizedState=Se}}function ch(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],d=c.callback;if(d!==null){if(c.callback=null,c=o,typeof d!="function")throw Error(n(191,d));d.call(c)}}}var _o={},mi=er(_o),vo=er(_o),xo=er(_o);function Lr(t){if(t===_o)throw Error(n(174));return t}function Cc(t,i){switch(Lt(xo,i),Lt(vo,t),Lt(mi,_o),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:qe(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=qe(i,t)}It(mi),Lt(mi,i)}function _s(){It(mi),It(vo),It(xo)}function uh(t){Lr(xo.current);var i=Lr(mi.current),o=qe(i,t.type);i!==o&&(Lt(vo,t),Lt(mi,o))}function Pc(t){vo.current===t&&(It(mi),It(vo))}var kt=er(0);function Ra(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var bc=[];function Lc(){for(var t=0;t<bc.length;t++)bc[t]._workInProgressVersionPrimary=null;bc.length=0}var Ca=C.ReactCurrentDispatcher,Dc=C.ReactCurrentBatchConfig,Dr=0,Bt=null,Zt=null,rn=null,Pa=!1,yo=!1,So=0,g_=0;function mn(){throw Error(n(321))}function Nc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Jn(t[o],i[o]))return!1;return!0}function Ic(t,i,o,c,d,p){if(Dr=p,Bt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ca.current=t===null||t.memoizedState===null?y_:S_,t=o(c,d),yo){p=0;do{if(yo=!1,So=0,25<=p)throw Error(n(301));p+=1,rn=Zt=null,i.updateQueue=null,Ca.current=M_,t=o(c,d)}while(yo)}if(Ca.current=Da,i=Zt!==null&&Zt.next!==null,Dr=0,rn=Zt=Bt=null,Pa=!1,i)throw Error(n(300));return t}function Uc(){var t=So!==0;return So=0,t}function gi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?Bt.memoizedState=rn=t:rn=rn.next=t,rn}function jn(){if(Zt===null){var t=Bt.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var i=rn===null?Bt.memoizedState:rn.next;if(i!==null)rn=i,Zt=t;else{if(t===null)throw Error(n(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},rn===null?Bt.memoizedState=rn=t:rn=rn.next=t}return rn}function Mo(t,i){return typeof i=="function"?i(t):i}function Fc(t){var i=jn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=Zt,d=c.baseQueue,p=o.pending;if(p!==null){if(d!==null){var M=d.next;d.next=p.next,p.next=M}c.baseQueue=d=p,o.pending=null}if(d!==null){p=d.next,c=c.baseState;var N=M=null,H=null,ie=p;do{var ye=ie.lane;if((Dr&ye)===ye)H!==null&&(H=H.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),c=ie.hasEagerState?ie.eagerState:t(c,ie.action);else{var Se={lane:ye,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};H===null?(N=H=Se,M=c):H=H.next=Se,Bt.lanes|=ye,Nr|=ye}ie=ie.next}while(ie!==null&&ie!==p);H===null?M=c:H.next=N,Jn(c,i.memoizedState)||(Pn=!0),i.memoizedState=c,i.baseState=M,i.baseQueue=H,o.lastRenderedState=c}if(t=o.interleaved,t!==null){d=t;do p=d.lane,Bt.lanes|=p,Nr|=p,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Oc(t){var i=jn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=o.dispatch,d=o.pending,p=i.memoizedState;if(d!==null){o.pending=null;var M=d=d.next;do p=t(p,M.action),M=M.next;while(M!==d);Jn(p,i.memoizedState)||(Pn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,c]}function fh(){}function dh(t,i){var o=Bt,c=jn(),d=i(),p=!Jn(c.memoizedState,d);if(p&&(c.memoizedState=d,Pn=!0),c=c.queue,kc(mh.bind(null,o,c,t),[t]),c.getSnapshot!==i||p||rn!==null&&rn.memoizedState.tag&1){if(o.flags|=2048,Eo(9,ph.bind(null,o,c,d,i),void 0,null),sn===null)throw Error(n(349));(Dr&30)!==0||hh(o,i,d)}return d}function hh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function ph(t,i,o,c){i.value=o,i.getSnapshot=c,gh(i)&&_h(t)}function mh(t,i,o){return o(function(){gh(i)&&_h(t)})}function gh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Jn(t,o)}catch{return!0}}function _h(t){var i=Pi(t,1);i!==null&&ri(i,t,1,-1)}function vh(t){var i=gi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:t},i.queue=t,t=t.dispatch=x_.bind(null,Bt,t),[i.memoizedState,t]}function Eo(t,i,o,c){return t={tag:t,create:i,destroy:o,deps:c,next:null},i=Bt.updateQueue,i===null?(i={lastEffect:null,stores:null},Bt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(c=o.next,o.next=t,t.next=c,i.lastEffect=t)),t}function xh(){return jn().memoizedState}function ba(t,i,o,c){var d=gi();Bt.flags|=t,d.memoizedState=Eo(1|i,o,void 0,c===void 0?null:c)}function La(t,i,o,c){var d=jn();c=c===void 0?null:c;var p=void 0;if(Zt!==null){var M=Zt.memoizedState;if(p=M.destroy,c!==null&&Nc(c,M.deps)){d.memoizedState=Eo(i,o,p,c);return}}Bt.flags|=t,d.memoizedState=Eo(1|i,o,p,c)}function yh(t,i){return ba(8390656,8,t,i)}function kc(t,i){return La(2048,8,t,i)}function Sh(t,i){return La(4,2,t,i)}function Mh(t,i){return La(4,4,t,i)}function Eh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Th(t,i,o){return o=o!=null?o.concat([t]):null,La(4,4,Eh.bind(null,i,t),o)}function Bc(){}function wh(t,i){var o=jn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Nc(i,c[1])?c[0]:(o.memoizedState=[t,i],t)}function Ah(t,i){var o=jn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Nc(i,c[1])?c[0]:(t=t(),o.memoizedState=[t,i],t)}function Rh(t,i,o){return(Dr&21)===0?(t.baseState&&(t.baseState=!1,Pn=!0),t.memoizedState=o):(Jn(o,i)||(o=bt(),Bt.lanes|=o,Nr|=o,t.baseState=!0),i)}function __(t,i){var o=St;St=o!==0&&4>o?o:4,t(!0);var c=Dc.transition;Dc.transition={};try{t(!1),i()}finally{St=o,Dc.transition=c}}function Ch(){return jn().memoizedState}function v_(t,i,o){var c=lr(t);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},Ph(t))bh(i,o);else if(o=oh(t,i,o,c),o!==null){var d=En();ri(o,t,c,d),Lh(o,i,c)}}function x_(t,i,o){var c=lr(t),d={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(Ph(t))bh(i,d);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,N=p(M,o);if(d.hasEagerState=!0,d.eagerState=N,Jn(N,M)){var H=i.interleaved;H===null?(d.next=d,Ac(i)):(d.next=H.next,H.next=d),i.interleaved=d;return}}catch{}finally{}o=oh(t,i,d,c),o!==null&&(d=En(),ri(o,t,c,d),Lh(o,i,c))}}function Ph(t){var i=t.alternate;return t===Bt||i!==null&&i===Bt}function bh(t,i){yo=Pa=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Lh(t,i,o){if((o&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,nn(t,o)}}var Da={readContext:Xn,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},y_={readContext:Xn,useCallback:function(t,i){return gi().memoizedState=[t,i===void 0?null:i],t},useContext:Xn,useEffect:yh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,ba(4194308,4,Eh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return ba(4194308,4,t,i)},useInsertionEffect:function(t,i){return ba(4,2,t,i)},useMemo:function(t,i){var o=gi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var c=gi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=v_.bind(null,Bt,t),[c.memoizedState,t]},useRef:function(t){var i=gi();return t={current:t},i.memoizedState=t},useState:vh,useDebugValue:Bc,useDeferredValue:function(t){return gi().memoizedState=t},useTransition:function(){var t=vh(!1),i=t[0];return t=__.bind(null,t[1]),gi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var c=Bt,d=gi();if(Ft){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),sn===null)throw Error(n(349));(Dr&30)!==0||hh(c,i,o)}d.memoizedState=o;var p={value:o,getSnapshot:i};return d.queue=p,yh(mh.bind(null,c,p,t),[t]),c.flags|=2048,Eo(9,ph.bind(null,c,p,o,i),void 0,null),o},useId:function(){var t=gi(),i=sn.identifierPrefix;if(Ft){var o=Ci,c=Ri;o=(c&~(1<<32-lt(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=So++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=g_++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},S_={readContext:Xn,useCallback:wh,useContext:Xn,useEffect:kc,useImperativeHandle:Th,useInsertionEffect:Sh,useLayoutEffect:Mh,useMemo:Ah,useReducer:Fc,useRef:xh,useState:function(){return Fc(Mo)},useDebugValue:Bc,useDeferredValue:function(t){var i=jn();return Rh(i,Zt.memoizedState,t)},useTransition:function(){var t=Fc(Mo)[0],i=jn().memoizedState;return[t,i]},useMutableSource:fh,useSyncExternalStore:dh,useId:Ch,unstable_isNewReconciler:!1},M_={readContext:Xn,useCallback:wh,useContext:Xn,useEffect:kc,useImperativeHandle:Th,useInsertionEffect:Sh,useLayoutEffect:Mh,useMemo:Ah,useReducer:Oc,useRef:xh,useState:function(){return Oc(Mo)},useDebugValue:Bc,useDeferredValue:function(t){var i=jn();return Zt===null?i.memoizedState=t:Rh(i,Zt.memoizedState,t)},useTransition:function(){var t=Oc(Mo)[0],i=jn().memoizedState;return[t,i]},useMutableSource:fh,useSyncExternalStore:dh,useId:Ch,unstable_isNewReconciler:!1};function ti(t,i){if(t&&t.defaultProps){i=se({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function zc(t,i,o,c){i=t.memoizedState,o=o(c,i),o=o==null?i:se({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Na={isMounted:function(t){return(t=t._reactInternals)?di(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var c=En(),d=lr(t),p=bi(c,d);p.payload=i,o!=null&&(p.callback=o),i=rr(t,p,d),i!==null&&(ri(i,t,d,c),wa(i,t,d))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var c=En(),d=lr(t),p=bi(c,d);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=rr(t,p,d),i!==null&&(ri(i,t,d,c),wa(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=En(),c=lr(t),d=bi(o,c);d.tag=2,i!=null&&(d.callback=i),i=rr(t,d,c),i!==null&&(ri(i,t,c,o),wa(i,t,c))}};function Dh(t,i,o,c,d,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,p,M):i.prototype&&i.prototype.isPureReactComponent?!lo(o,c)||!lo(d,p):!0}function Nh(t,i,o){var c=!1,d=tr,p=i.contextType;return typeof p=="object"&&p!==null?p=Xn(p):(d=Cn(i)?Rr:pn.current,c=i.contextTypes,p=(c=c!=null)?us(t,d):tr),i=new i(o,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Na,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=p),i}function Ih(t,i,o,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==t&&Na.enqueueReplaceState(i,i.state,null)}function Hc(t,i,o,c){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},Rc(t);var p=i.contextType;typeof p=="object"&&p!==null?d.context=Xn(p):(p=Cn(i)?Rr:pn.current,d.context=us(t,p)),d.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(zc(t,i,p,o),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Na.enqueueReplaceState(d,d.state,null),Aa(t,o,d,c),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function vs(t,i){try{var o="",c=i;do o+=de(c),c=c.return;while(c);var d=o}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:d,digest:null}}function Vc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Gc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var E_=typeof WeakMap=="function"?WeakMap:Map;function Uh(t,i,o){o=bi(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){za||(za=!0,ru=c),Gc(t,i)},o}function Fh(t,i,o){o=bi(-1,o),o.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;o.payload=function(){return c(d)},o.callback=function(){Gc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Gc(t,i),typeof c!="function"&&(or===null?or=new Set([this]):or.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Oh(t,i,o){var c=t.pingCache;if(c===null){c=t.pingCache=new E_;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(o)||(d.add(o),t=O_.bind(null,t,i,o),i.then(t,t))}function kh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Bh(t,i,o,c,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=bi(-1,1),i.tag=2,rr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var T_=C.ReactCurrentOwner,Pn=!1;function Mn(t,i,o,c){i.child=t===null?sh(i,null,o,c):ps(i,t.child,o,c)}function zh(t,i,o,c,d){o=o.render;var p=i.ref;return gs(i,d),c=Ic(t,i,o,c,p,d),o=Uc(),t!==null&&!Pn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Li(t,i,d)):(Ft&&o&&_c(i),i.flags|=1,Mn(t,i,c,d),i.child)}function Hh(t,i,o,c,d){if(t===null){var p=o.type;return typeof p=="function"&&!fu(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,Vh(t,i,p,c,d)):(t=ja(o.type,null,c,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&d)===0){var M=p.memoizedProps;if(o=o.compare,o=o!==null?o:lo,o(M,c)&&t.ref===i.ref)return Li(t,i,d)}return i.flags|=1,t=ur(p,c),t.ref=i.ref,t.return=i,i.child=t}function Vh(t,i,o,c,d){if(t!==null){var p=t.memoizedProps;if(lo(p,c)&&t.ref===i.ref)if(Pn=!1,i.pendingProps=c=p,(t.lanes&d)!==0)(t.flags&131072)!==0&&(Pn=!0);else return i.lanes=t.lanes,Li(t,i,d)}return Wc(t,i,o,c,d)}function Gh(t,i,o){var c=i.pendingProps,d=c.children,p=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Lt(ys,zn),zn|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Lt(ys,zn),zn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:o,Lt(ys,zn),zn|=c}else p!==null?(c=p.baseLanes|o,i.memoizedState=null):c=o,Lt(ys,zn),zn|=c;return Mn(t,i,d,o),i.child}function Wh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Wc(t,i,o,c,d){var p=Cn(o)?Rr:pn.current;return p=us(i,p),gs(i,d),o=Ic(t,i,o,c,p,d),c=Uc(),t!==null&&!Pn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Li(t,i,d)):(Ft&&c&&_c(i),i.flags|=1,Mn(t,i,o,d),i.child)}function Xh(t,i,o,c,d){if(Cn(o)){var p=!0;_a(i)}else p=!1;if(gs(i,d),i.stateNode===null)Ua(t,i),Nh(i,o,c),Hc(i,o,c,d),c=!0;else if(t===null){var M=i.stateNode,N=i.memoizedProps;M.props=N;var H=M.context,ie=o.contextType;typeof ie=="object"&&ie!==null?ie=Xn(ie):(ie=Cn(o)?Rr:pn.current,ie=us(i,ie));var ye=o.getDerivedStateFromProps,Se=typeof ye=="function"||typeof M.getSnapshotBeforeUpdate=="function";Se||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(N!==c||H!==ie)&&Ih(i,M,c,ie),ir=!1;var _e=i.memoizedState;M.state=_e,Aa(i,c,M,d),H=i.memoizedState,N!==c||_e!==H||Rn.current||ir?(typeof ye=="function"&&(zc(i,o,ye,c),H=i.memoizedState),(N=ir||Dh(i,o,N,c,_e,H,ie))?(Se||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=H),M.props=c,M.state=H,M.context=ie,c=N):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{M=i.stateNode,ah(t,i),N=i.memoizedProps,ie=i.type===i.elementType?N:ti(i.type,N),M.props=ie,Se=i.pendingProps,_e=M.context,H=o.contextType,typeof H=="object"&&H!==null?H=Xn(H):(H=Cn(o)?Rr:pn.current,H=us(i,H));var Oe=o.getDerivedStateFromProps;(ye=typeof Oe=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(N!==Se||_e!==H)&&Ih(i,M,c,H),ir=!1,_e=i.memoizedState,M.state=_e,Aa(i,c,M,d);var Ge=i.memoizedState;N!==Se||_e!==Ge||Rn.current||ir?(typeof Oe=="function"&&(zc(i,o,Oe,c),Ge=i.memoizedState),(ie=ir||Dh(i,o,ie,c,_e,Ge,H)||!1)?(ye||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(c,Ge,H),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(c,Ge,H)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||N===t.memoizedProps&&_e===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&_e===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ge),M.props=c,M.state=Ge,M.context=H,c=ie):(typeof M.componentDidUpdate!="function"||N===t.memoizedProps&&_e===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&_e===t.memoizedState||(i.flags|=1024),c=!1)}return Xc(t,i,o,c,p,d)}function Xc(t,i,o,c,d,p){Wh(t,i);var M=(i.flags&128)!==0;if(!c&&!M)return d&&Kd(i,o,!1),Li(t,i,p);c=i.stateNode,T_.current=i;var N=M&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&M?(i.child=ps(i,t.child,null,p),i.child=ps(i,null,N,p)):Mn(t,i,N,p),i.memoizedState=c.state,d&&Kd(i,o,!0),i.child}function jh(t){var i=t.stateNode;i.pendingContext?Yd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Yd(t,i.context,!1),Cc(t,i.containerInfo)}function qh(t,i,o,c,d){return hs(),Sc(d),i.flags|=256,Mn(t,i,o,c),i.child}var jc={dehydrated:null,treeContext:null,retryLane:0};function qc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Yh(t,i,o){var c=i.pendingProps,d=kt.current,p=!1,M=(i.flags&128)!==0,N;if((N=M)||(N=t!==null&&t.memoizedState===null?!1:(d&2)!==0),N?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Lt(kt,d&1),t===null)return yc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=c.children,t=c.fallback,p?(c=i.mode,p=i.child,M={mode:"hidden",children:M},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=M):p=qa(M,c,0,null),t=Or(t,c,o,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=qc(o),i.memoizedState=jc,t):Yc(i,M));if(d=t.memoizedState,d!==null&&(N=d.dehydrated,N!==null))return w_(t,i,M,c,N,d,o);if(p){p=c.fallback,M=i.mode,d=t.child,N=d.sibling;var H={mode:"hidden",children:c.children};return(M&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=H,i.deletions=null):(c=ur(d,H),c.subtreeFlags=d.subtreeFlags&14680064),N!==null?p=ur(N,p):(p=Or(p,M,o,null),p.flags|=2),p.return=i,c.return=i,c.sibling=p,i.child=c,c=p,p=i.child,M=t.child.memoizedState,M=M===null?qc(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=t.childLanes&~o,i.memoizedState=jc,c}return p=t.child,t=p.sibling,c=ur(p,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=c,i.memoizedState=null,c}function Yc(t,i){return i=qa({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ia(t,i,o,c){return c!==null&&Sc(c),ps(i,t.child,null,o),t=Yc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function w_(t,i,o,c,d,p,M){if(o)return i.flags&256?(i.flags&=-257,c=Vc(Error(n(422))),Ia(t,i,M,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=c.fallback,d=i.mode,c=qa({mode:"visible",children:c.children},d,0,null),p=Or(p,d,M,null),p.flags|=2,c.return=i,p.return=i,c.sibling=p,i.child=c,(i.mode&1)!==0&&ps(i,t.child,null,M),i.child.memoizedState=qc(M),i.memoizedState=jc,p);if((i.mode&1)===0)return Ia(t,i,M,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var N=c.dgst;return c=N,p=Error(n(419)),c=Vc(p,c,void 0),Ia(t,i,M,c)}if(N=(M&t.childLanes)!==0,Pn||N){if(c=sn,c!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|M))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Pi(t,d),ri(c,t,d,-1))}return uu(),c=Vc(Error(n(421))),Ia(t,i,M,c)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=k_.bind(null,t),d._reactRetry=i,null):(t=p.treeContext,Bn=Ji(d.nextSibling),kn=i,Ft=!0,ei=null,t!==null&&(Gn[Wn++]=Ri,Gn[Wn++]=Ci,Gn[Wn++]=Cr,Ri=t.id,Ci=t.overflow,Cr=i),i=Yc(i,c.children),i.flags|=4096,i)}function $h(t,i,o){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),wc(t.return,i,o)}function $c(t,i,o,c,d){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=o,p.tailMode=d)}function Kh(t,i,o){var c=i.pendingProps,d=c.revealOrder,p=c.tail;if(Mn(t,i,c.children,o),c=kt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$h(t,o,i);else if(t.tag===19)$h(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(Lt(kt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&Ra(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),$c(i,!1,d,o,p);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Ra(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}$c(i,!0,o,null,p);break;case"together":$c(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ua(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Li(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Nr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=ur(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=ur(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function A_(t,i,o){switch(i.tag){case 3:jh(i),hs();break;case 5:uh(i);break;case 1:Cn(i.type)&&_a(i);break;case 4:Cc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Lt(Ea,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Lt(kt,kt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Yh(t,i,o):(Lt(kt,kt.current&1),t=Li(t,i,o),t!==null?t.sibling:null);Lt(kt,kt.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(t.flags&128)!==0){if(c)return Kh(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Lt(kt,kt.current),c)break;return null;case 22:case 23:return i.lanes=0,Gh(t,i,o)}return Li(t,i,o)}var Zh,Kc,Qh,Jh;Zh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Kc=function(){},Qh=function(t,i,o,c){var d=t.memoizedProps;if(d!==c){t=i.stateNode,Lr(mi.current);var p=null;switch(o){case"input":d=k(t,d),c=k(t,c),p=[];break;case"select":d=se({},d,{value:void 0}),c=se({},c,{value:void 0}),p=[];break;case"textarea":d=w(t,d),c=w(t,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=pa)}ht(o,c);var M;o=null;for(ie in d)if(!c.hasOwnProperty(ie)&&d.hasOwnProperty(ie)&&d[ie]!=null)if(ie==="style"){var N=d[ie];for(M in N)N.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(a.hasOwnProperty(ie)?p||(p=[]):(p=p||[]).push(ie,null));for(ie in c){var H=c[ie];if(N=d!=null?d[ie]:void 0,c.hasOwnProperty(ie)&&H!==N&&(H!=null||N!=null))if(ie==="style")if(N){for(M in N)!N.hasOwnProperty(M)||H&&H.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in H)H.hasOwnProperty(M)&&N[M]!==H[M]&&(o||(o={}),o[M]=H[M])}else o||(p||(p=[]),p.push(ie,o)),o=H;else ie==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,N=N?N.__html:void 0,H!=null&&N!==H&&(p=p||[]).push(ie,H)):ie==="children"?typeof H!="string"&&typeof H!="number"||(p=p||[]).push(ie,""+H):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(a.hasOwnProperty(ie)?(H!=null&&ie==="onScroll"&&Nt("scroll",t),p||N===H||(p=[])):(p=p||[]).push(ie,H))}o&&(p=p||[]).push("style",o);var ie=p;(i.updateQueue=ie)&&(i.flags|=4)}},Jh=function(t,i,o,c){o!==c&&(i.flags|=4)};function To(t,i){if(!Ft)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function gn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,c=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=c,t.childLanes=o,i}function R_(t,i,o){var c=i.pendingProps;switch(vc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(i),null;case 1:return Cn(i.type)&&ga(),gn(i),null;case 3:return c=i.stateNode,_s(),It(Rn),It(pn),Lc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(Sa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ei!==null&&(au(ei),ei=null))),Kc(t,i),gn(i),null;case 5:Pc(i);var d=Lr(xo.current);if(o=i.type,t!==null&&i.stateNode!=null)Qh(t,i,o,c,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return gn(i),null}if(t=Lr(mi.current),Sa(i)){c=i.stateNode,o=i.type;var p=i.memoizedProps;switch(c[pi]=i,c[po]=p,t=(i.mode&1)!==0,o){case"dialog":Nt("cancel",c),Nt("close",c);break;case"iframe":case"object":case"embed":Nt("load",c);break;case"video":case"audio":for(d=0;d<uo.length;d++)Nt(uo[d],c);break;case"source":Nt("error",c);break;case"img":case"image":case"link":Nt("error",c),Nt("load",c);break;case"details":Nt("toggle",c);break;case"input":ln(c,p),Nt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Nt("invalid",c);break;case"textarea":te(c,p),Nt("invalid",c)}ht(o,p),d=null;for(var M in p)if(p.hasOwnProperty(M)){var N=p[M];M==="children"?typeof N=="string"?c.textContent!==N&&(p.suppressHydrationWarning!==!0&&ha(c.textContent,N,t),d=["children",N]):typeof N=="number"&&c.textContent!==""+N&&(p.suppressHydrationWarning!==!0&&ha(c.textContent,N,t),d=["children",""+N]):a.hasOwnProperty(M)&&N!=null&&M==="onScroll"&&Nt("scroll",c)}switch(o){case"input":me(c),$e(c,p,!0);break;case"textarea":me(c),xe(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=pa)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=he(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=M.createElement(o,{is:c.is}):(t=M.createElement(o),o==="select"&&(M=t,c.multiple?M.multiple=!0:c.size&&(M.size=c.size))):t=M.createElementNS(t,o),t[pi]=i,t[po]=c,Zh(t,i,!1,!1),i.stateNode=t;e:{switch(M=ot(o,c),o){case"dialog":Nt("cancel",t),Nt("close",t),d=c;break;case"iframe":case"object":case"embed":Nt("load",t),d=c;break;case"video":case"audio":for(d=0;d<uo.length;d++)Nt(uo[d],t);d=c;break;case"source":Nt("error",t),d=c;break;case"img":case"image":case"link":Nt("error",t),Nt("load",t),d=c;break;case"details":Nt("toggle",t),d=c;break;case"input":ln(t,c),d=k(t,c),Nt("invalid",t);break;case"option":d=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},d=se({},c,{value:void 0}),Nt("invalid",t);break;case"textarea":te(t,c),d=w(t,c),Nt("invalid",t);break;default:d=c}ht(o,d),N=d;for(p in N)if(N.hasOwnProperty(p)){var H=N[p];p==="style"?it(t,H):p==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&ke(t,H)):p==="children"?typeof H=="string"?(o!=="textarea"||H!=="")&&ft(t,H):typeof H=="number"&&ft(t,""+H):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?H!=null&&p==="onScroll"&&Nt("scroll",t):H!=null&&b(t,p,H,M))}switch(o){case"input":me(t),$e(t,c,!1);break;case"textarea":me(t),xe(t);break;case"option":c.value!=null&&t.setAttribute("value",""+Ae(c.value));break;case"select":t.multiple=!!c.multiple,p=c.value,p!=null?L(t,!!c.multiple,p,!1):c.defaultValue!=null&&L(t,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=pa)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return gn(i),null;case 6:if(t&&i.stateNode!=null)Jh(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(o=Lr(xo.current),Lr(mi.current),Sa(i)){if(c=i.stateNode,o=i.memoizedProps,c[pi]=i,(p=c.nodeValue!==o)&&(t=kn,t!==null))switch(t.tag){case 3:ha(c.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ha(c.nodeValue,o,(t.mode&1)!==0)}p&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[pi]=i,i.stateNode=c}return gn(i),null;case 13:if(It(kt),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ft&&Bn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)nh(),hs(),i.flags|=98560,p=!1;else if(p=Sa(i),c!==null&&c.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[pi]=i}else hs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;gn(i),p=!1}else ei!==null&&(au(ei),ei=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(kt.current&1)!==0?Qt===0&&(Qt=3):uu())),i.updateQueue!==null&&(i.flags|=4),gn(i),null);case 4:return _s(),Kc(t,i),t===null&&fo(i.stateNode.containerInfo),gn(i),null;case 10:return Tc(i.type._context),gn(i),null;case 17:return Cn(i.type)&&ga(),gn(i),null;case 19:if(It(kt),p=i.memoizedState,p===null)return gn(i),null;if(c=(i.flags&128)!==0,M=p.rendering,M===null)if(c)To(p,!1);else{if(Qt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Ra(t),M!==null){for(i.flags|=128,To(p,!1),c=M.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)p=o,t=c,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,t=M.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Lt(kt,kt.current&1|2),i.child}t=t.sibling}p.tail!==null&&K()>Ss&&(i.flags|=128,c=!0,To(p,!1),i.lanes=4194304)}else{if(!c)if(t=Ra(M),t!==null){if(i.flags|=128,c=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),To(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!Ft)return gn(i),null}else 2*K()-p.renderingStartTime>Ss&&o!==1073741824&&(i.flags|=128,c=!0,To(p,!1),i.lanes=4194304);p.isBackwards?(M.sibling=i.child,i.child=M):(o=p.last,o!==null?o.sibling=M:i.child=M,p.last=M)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=K(),i.sibling=null,o=kt.current,Lt(kt,c?o&1|2:o&1),i):(gn(i),null);case 22:case 23:return cu(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(zn&1073741824)!==0&&(gn(i),i.subtreeFlags&6&&(i.flags|=8192)):gn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function C_(t,i){switch(vc(i),i.tag){case 1:return Cn(i.type)&&ga(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return _s(),It(Rn),It(pn),Lc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Pc(i),null;case 13:if(It(kt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));hs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return It(kt),null;case 4:return _s(),null;case 10:return Tc(i.type._context),null;case 22:case 23:return cu(),null;case 24:return null;default:return null}}var Fa=!1,_n=!1,P_=typeof WeakSet=="function"?WeakSet:Set,Be=null;function xs(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){Gt(t,i,c)}else o.current=null}function Zc(t,i,o){try{o()}catch(c){Gt(t,i,c)}}var ep=!1;function b_(t,i){if(cc=na,t=Dd(),tc(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var M=0,N=-1,H=-1,ie=0,ye=0,Se=t,_e=null;t:for(;;){for(var Oe;Se!==o||d!==0&&Se.nodeType!==3||(N=M+d),Se!==p||c!==0&&Se.nodeType!==3||(H=M+c),Se.nodeType===3&&(M+=Se.nodeValue.length),(Oe=Se.firstChild)!==null;)_e=Se,Se=Oe;for(;;){if(Se===t)break t;if(_e===o&&++ie===d&&(N=M),_e===p&&++ye===c&&(H=M),(Oe=Se.nextSibling)!==null)break;Se=_e,_e=Se.parentNode}Se=Oe}o=N===-1||H===-1?null:{start:N,end:H}}else o=null}o=o||{start:0,end:0}}else o=null;for(uc={focusedElem:t,selectionRange:o},na=!1,Be=i;Be!==null;)if(i=Be,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Be=t;else for(;Be!==null;){i=Be;try{var Ge=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ge!==null){var Xe=Ge.memoizedProps,Wt=Ge.memoizedState,$=i.stateNode,X=$.getSnapshotBeforeUpdate(i.elementType===i.type?Xe:ti(i.type,Xe),Wt);$.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var Q=i.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(we){Gt(i,i.return,we)}if(t=i.sibling,t!==null){t.return=i.return,Be=t;break}Be=i.return}return Ge=ep,ep=!1,Ge}function wo(t,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&t)===t){var p=d.destroy;d.destroy=void 0,p!==void 0&&Zc(i,o,p)}d=d.next}while(d!==c)}}function Oa(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function Qc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function tp(t){var i=t.alternate;i!==null&&(t.alternate=null,tp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[pi],delete i[po],delete i[pc],delete i[d_],delete i[h_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function np(t){return t.tag===5||t.tag===3||t.tag===4}function ip(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||np(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jc(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=pa));else if(c!==4&&(t=t.child,t!==null))for(Jc(t,i,o),t=t.sibling;t!==null;)Jc(t,i,o),t=t.sibling}function eu(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(eu(t,i,o),t=t.sibling;t!==null;)eu(t,i,o),t=t.sibling}var un=null,ni=!1;function sr(t,i,o){for(o=o.child;o!==null;)rp(t,i,o),o=o.sibling}function rp(t,i,o){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(nt,o)}catch{}switch(o.tag){case 5:_n||xs(o,i);case 6:var c=un,d=ni;un=null,sr(t,i,o),un=c,ni=d,un!==null&&(ni?(t=un,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):un.removeChild(o.stateNode));break;case 18:un!==null&&(ni?(t=un,o=o.stateNode,t.nodeType===8?hc(t.parentNode,o):t.nodeType===1&&hc(t,o),no(t)):hc(un,o.stateNode));break;case 4:c=un,d=ni,un=o.stateNode.containerInfo,ni=!0,sr(t,i,o),un=c,ni=d;break;case 0:case 11:case 14:case 15:if(!_n&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,M=p.destroy;p=p.tag,M!==void 0&&((p&2)!==0||(p&4)!==0)&&Zc(o,i,M),d=d.next}while(d!==c)}sr(t,i,o);break;case 1:if(!_n&&(xs(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(N){Gt(o,i,N)}sr(t,i,o);break;case 21:sr(t,i,o);break;case 22:o.mode&1?(_n=(c=_n)||o.memoizedState!==null,sr(t,i,o),_n=c):sr(t,i,o);break;default:sr(t,i,o)}}function sp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new P_),i.forEach(function(c){var d=B_.bind(null,t,c);o.has(c)||(o.add(c),c.then(d,d))})}}function ii(t,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c];try{var p=t,M=i,N=M;e:for(;N!==null;){switch(N.tag){case 5:un=N.stateNode,ni=!1;break e;case 3:un=N.stateNode.containerInfo,ni=!0;break e;case 4:un=N.stateNode.containerInfo,ni=!0;break e}N=N.return}if(un===null)throw Error(n(160));rp(p,M,d),un=null,ni=!1;var H=d.alternate;H!==null&&(H.return=null),d.return=null}catch(ie){Gt(d,i,ie)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)op(i,t),i=i.sibling}function op(t,i){var o=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ii(i,t),_i(t),c&4){try{wo(3,t,t.return),Oa(3,t)}catch(Xe){Gt(t,t.return,Xe)}try{wo(5,t,t.return)}catch(Xe){Gt(t,t.return,Xe)}}break;case 1:ii(i,t),_i(t),c&512&&o!==null&&xs(o,o.return);break;case 5:if(ii(i,t),_i(t),c&512&&o!==null&&xs(o,o.return),t.flags&32){var d=t.stateNode;try{ft(d,"")}catch(Xe){Gt(t,t.return,Xe)}}if(c&4&&(d=t.stateNode,d!=null)){var p=t.memoizedProps,M=o!==null?o.memoizedProps:p,N=t.type,H=t.updateQueue;if(t.updateQueue=null,H!==null)try{N==="input"&&p.type==="radio"&&p.name!=null&&mt(d,p),ot(N,M);var ie=ot(N,p);for(M=0;M<H.length;M+=2){var ye=H[M],Se=H[M+1];ye==="style"?it(d,Se):ye==="dangerouslySetInnerHTML"?ke(d,Se):ye==="children"?ft(d,Se):b(d,ye,Se,ie)}switch(N){case"input":dt(d,p);break;case"textarea":ge(d,p);break;case"select":var _e=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Oe=p.value;Oe!=null?L(d,!!p.multiple,Oe,!1):_e!==!!p.multiple&&(p.defaultValue!=null?L(d,!!p.multiple,p.defaultValue,!0):L(d,!!p.multiple,p.multiple?[]:"",!1))}d[po]=p}catch(Xe){Gt(t,t.return,Xe)}}break;case 6:if(ii(i,t),_i(t),c&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,p=t.memoizedProps;try{d.nodeValue=p}catch(Xe){Gt(t,t.return,Xe)}}break;case 3:if(ii(i,t),_i(t),c&4&&o!==null&&o.memoizedState.isDehydrated)try{no(i.containerInfo)}catch(Xe){Gt(t,t.return,Xe)}break;case 4:ii(i,t),_i(t);break;case 13:ii(i,t),_i(t),d=t.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(iu=K())),c&4&&sp(t);break;case 22:if(ye=o!==null&&o.memoizedState!==null,t.mode&1?(_n=(ie=_n)||ye,ii(i,t),_n=ie):ii(i,t),_i(t),c&8192){if(ie=t.memoizedState!==null,(t.stateNode.isHidden=ie)&&!ye&&(t.mode&1)!==0)for(Be=t,ye=t.child;ye!==null;){for(Se=Be=ye;Be!==null;){switch(_e=Be,Oe=_e.child,_e.tag){case 0:case 11:case 14:case 15:wo(4,_e,_e.return);break;case 1:xs(_e,_e.return);var Ge=_e.stateNode;if(typeof Ge.componentWillUnmount=="function"){c=_e,o=_e.return;try{i=c,Ge.props=i.memoizedProps,Ge.state=i.memoizedState,Ge.componentWillUnmount()}catch(Xe){Gt(c,o,Xe)}}break;case 5:xs(_e,_e.return);break;case 22:if(_e.memoizedState!==null){cp(Se);continue}}Oe!==null?(Oe.return=_e,Be=Oe):cp(Se)}ye=ye.sibling}e:for(ye=null,Se=t;;){if(Se.tag===5){if(ye===null){ye=Se;try{d=Se.stateNode,ie?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(N=Se.stateNode,H=Se.memoizedProps.style,M=H!=null&&H.hasOwnProperty("display")?H.display:null,N.style.display=Je("display",M))}catch(Xe){Gt(t,t.return,Xe)}}}else if(Se.tag===6){if(ye===null)try{Se.stateNode.nodeValue=ie?"":Se.memoizedProps}catch(Xe){Gt(t,t.return,Xe)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===t)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===t)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===t)break e;ye===Se&&(ye=null),Se=Se.return}ye===Se&&(ye=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ii(i,t),_i(t),c&4&&sp(t);break;case 21:break;default:ii(i,t),_i(t)}}function _i(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(np(o)){var c=o;break e}o=o.return}throw Error(n(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(ft(d,""),c.flags&=-33);var p=ip(t);eu(t,p,d);break;case 3:case 4:var M=c.stateNode.containerInfo,N=ip(t);Jc(t,N,M);break;default:throw Error(n(161))}}catch(H){Gt(t,t.return,H)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function L_(t,i,o){Be=t,ap(t)}function ap(t,i,o){for(var c=(t.mode&1)!==0;Be!==null;){var d=Be,p=d.child;if(d.tag===22&&c){var M=d.memoizedState!==null||Fa;if(!M){var N=d.alternate,H=N!==null&&N.memoizedState!==null||_n;N=Fa;var ie=_n;if(Fa=M,(_n=H)&&!ie)for(Be=d;Be!==null;)M=Be,H=M.child,M.tag===22&&M.memoizedState!==null?up(d):H!==null?(H.return=M,Be=H):up(d);for(;p!==null;)Be=p,ap(p),p=p.sibling;Be=d,Fa=N,_n=ie}lp(t)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,Be=p):lp(t)}}function lp(t){for(;Be!==null;){var i=Be;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:_n||Oa(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!_n)if(o===null)c.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:ti(i.type,o.memoizedProps);c.componentDidUpdate(d,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&ch(i,p,c);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}ch(i,M,o)}break;case 5:var N=i.stateNode;if(o===null&&i.flags&4){o=N;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&o.focus();break;case"img":H.src&&(o.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ie=i.alternate;if(ie!==null){var ye=ie.memoizedState;if(ye!==null){var Se=ye.dehydrated;Se!==null&&no(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}_n||i.flags&512&&Qc(i)}catch(_e){Gt(i,i.return,_e)}}if(i===t){Be=null;break}if(o=i.sibling,o!==null){o.return=i.return,Be=o;break}Be=i.return}}function cp(t){for(;Be!==null;){var i=Be;if(i===t){Be=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Be=o;break}Be=i.return}}function up(t){for(;Be!==null;){var i=Be;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Oa(4,i)}catch(H){Gt(i,o,H)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(H){Gt(i,d,H)}}var p=i.return;try{Qc(i)}catch(H){Gt(i,p,H)}break;case 5:var M=i.return;try{Qc(i)}catch(H){Gt(i,M,H)}}}catch(H){Gt(i,i.return,H)}if(i===t){Be=null;break}var N=i.sibling;if(N!==null){N.return=i.return,Be=N;break}Be=i.return}}var D_=Math.ceil,ka=C.ReactCurrentDispatcher,tu=C.ReactCurrentOwner,qn=C.ReactCurrentBatchConfig,Mt=0,sn=null,Yt=null,fn=0,zn=0,ys=er(0),Qt=0,Ao=null,Nr=0,Ba=0,nu=0,Ro=null,bn=null,iu=0,Ss=1/0,Di=null,za=!1,ru=null,or=null,Ha=!1,ar=null,Va=0,Co=0,su=null,Ga=-1,Wa=0;function En(){return(Mt&6)!==0?K():Ga!==-1?Ga:Ga=K()}function lr(t){return(t.mode&1)===0?1:(Mt&2)!==0&&fn!==0?fn&-fn:m_.transition!==null?(Wa===0&&(Wa=bt()),Wa):(t=St,t!==0||(t=window.event,t=t===void 0?16:dd(t.type)),t)}function ri(t,i,o,c){if(50<Co)throw Co=0,su=null,Error(n(185));tn(t,o,c),((Mt&2)===0||t!==sn)&&(t===sn&&((Mt&2)===0&&(Ba|=o),Qt===4&&cr(t,fn)),Ln(t,c),o===1&&Mt===0&&(i.mode&1)===0&&(Ss=K()+500,va&&nr()))}function Ln(t,i){var o=t.callbackNode;Sn(t,i);var c=dn(t,t===sn?fn:0);if(c===0)o!==null&&R(o),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(o!=null&&R(o),i===1)t.tag===0?p_(dp.bind(null,t)):Zd(dp.bind(null,t)),u_(function(){(Mt&6)===0&&nr()}),o=null;else{switch(hi(c)){case 1:o=Ee;break;case 4:o=be;break;case 16:o=Fe;break;case 536870912:o=rt;break;default:o=Fe}o=yp(o,fp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function fp(t,i){if(Ga=-1,Wa=0,(Mt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Ms()&&t.callbackNode!==o)return null;var c=dn(t,t===sn?fn:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=Xa(t,c);else{i=c;var d=Mt;Mt|=2;var p=pp();(sn!==t||fn!==i)&&(Di=null,Ss=K()+500,Ur(t,i));do try{U_();break}catch(N){hp(t,N)}while(!0);Ec(),ka.current=p,Mt=d,Yt!==null?i=0:(sn=null,fn=0,i=Qt)}if(i!==0){if(i===2&&(d=Ti(t),d!==0&&(c=d,i=ou(t,d))),i===1)throw o=Ao,Ur(t,0),cr(t,c),Ln(t,K()),o;if(i===6)cr(t,c);else{if(d=t.current.alternate,(c&30)===0&&!N_(d)&&(i=Xa(t,c),i===2&&(p=Ti(t),p!==0&&(c=p,i=ou(t,p))),i===1))throw o=Ao,Ur(t,0),cr(t,c),Ln(t,K()),o;switch(t.finishedWork=d,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:Fr(t,bn,Di);break;case 3:if(cr(t,c),(c&130023424)===c&&(i=iu+500-K(),10<i)){if(dn(t,0)!==0)break;if(d=t.suspendedLanes,(d&c)!==c){En(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=dc(Fr.bind(null,t,bn,Di),i);break}Fr(t,bn,Di);break;case 4:if(cr(t,c),(c&4194240)===c)break;for(i=t.eventTimes,d=-1;0<c;){var M=31-lt(c);p=1<<M,M=i[M],M>d&&(d=M),c&=~p}if(c=d,c=K()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*D_(c/1960))-c,10<c){t.timeoutHandle=dc(Fr.bind(null,t,bn,Di),c);break}Fr(t,bn,Di);break;case 5:Fr(t,bn,Di);break;default:throw Error(n(329))}}}return Ln(t,K()),t.callbackNode===o?fp.bind(null,t):null}function ou(t,i){var o=Ro;return t.current.memoizedState.isDehydrated&&(Ur(t,i).flags|=256),t=Xa(t,i),t!==2&&(i=bn,bn=o,i!==null&&au(i)),t}function au(t){bn===null?bn=t:bn.push.apply(bn,t)}function N_(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var d=o[c],p=d.getSnapshot;d=d.value;try{if(!Jn(p(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function cr(t,i){for(i&=~nu,i&=~Ba,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-lt(i),c=1<<o;t[o]=-1,i&=~c}}function dp(t){if((Mt&6)!==0)throw Error(n(327));Ms();var i=dn(t,0);if((i&1)===0)return Ln(t,K()),null;var o=Xa(t,i);if(t.tag!==0&&o===2){var c=Ti(t);c!==0&&(i=c,o=ou(t,c))}if(o===1)throw o=Ao,Ur(t,0),cr(t,i),Ln(t,K()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Fr(t,bn,Di),Ln(t,K()),null}function lu(t,i){var o=Mt;Mt|=1;try{return t(i)}finally{Mt=o,Mt===0&&(Ss=K()+500,va&&nr())}}function Ir(t){ar!==null&&ar.tag===0&&(Mt&6)===0&&Ms();var i=Mt;Mt|=1;var o=qn.transition,c=St;try{if(qn.transition=null,St=1,t)return t()}finally{St=c,qn.transition=o,Mt=i,(Mt&6)===0&&nr()}}function cu(){zn=ys.current,It(ys)}function Ur(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,c_(o)),Yt!==null)for(o=Yt.return;o!==null;){var c=o;switch(vc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ga();break;case 3:_s(),It(Rn),It(pn),Lc();break;case 5:Pc(c);break;case 4:_s();break;case 13:It(kt);break;case 19:It(kt);break;case 10:Tc(c.type._context);break;case 22:case 23:cu()}o=o.return}if(sn=t,Yt=t=ur(t.current,null),fn=zn=i,Qt=0,Ao=null,nu=Ba=Nr=0,bn=Ro=null,br!==null){for(i=0;i<br.length;i++)if(o=br[i],c=o.interleaved,c!==null){o.interleaved=null;var d=c.next,p=o.pending;if(p!==null){var M=p.next;p.next=d,c.next=M}o.pending=c}br=null}return t}function hp(t,i){do{var o=Yt;try{if(Ec(),Ca.current=Da,Pa){for(var c=Bt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Pa=!1}if(Dr=0,rn=Zt=Bt=null,yo=!1,So=0,tu.current=null,o===null||o.return===null){Qt=1,Ao=i,Yt=null;break}e:{var p=t,M=o.return,N=o,H=i;if(i=fn,N.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var ie=H,ye=N,Se=ye.tag;if((ye.mode&1)===0&&(Se===0||Se===11||Se===15)){var _e=ye.alternate;_e?(ye.updateQueue=_e.updateQueue,ye.memoizedState=_e.memoizedState,ye.lanes=_e.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Oe=kh(M);if(Oe!==null){Oe.flags&=-257,Bh(Oe,M,N,p,i),Oe.mode&1&&Oh(p,ie,i),i=Oe,H=ie;var Ge=i.updateQueue;if(Ge===null){var Xe=new Set;Xe.add(H),i.updateQueue=Xe}else Ge.add(H);break e}else{if((i&1)===0){Oh(p,ie,i),uu();break e}H=Error(n(426))}}else if(Ft&&N.mode&1){var Wt=kh(M);if(Wt!==null){(Wt.flags&65536)===0&&(Wt.flags|=256),Bh(Wt,M,N,p,i),Sc(vs(H,N));break e}}p=H=vs(H,N),Qt!==4&&(Qt=2),Ro===null?Ro=[p]:Ro.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var $=Uh(p,H,i);lh(p,$);break e;case 1:N=H;var X=p.type,Q=p.stateNode;if((p.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(or===null||!or.has(Q)))){p.flags|=65536,i&=-i,p.lanes|=i;var we=Fh(p,N,i);lh(p,we);break e}}p=p.return}while(p!==null)}gp(o)}catch(Ye){i=Ye,Yt===o&&o!==null&&(Yt=o=o.return);continue}break}while(!0)}function pp(){var t=ka.current;return ka.current=Da,t===null?Da:t}function uu(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),sn===null||(Nr&268435455)===0&&(Ba&268435455)===0||cr(sn,fn)}function Xa(t,i){var o=Mt;Mt|=2;var c=pp();(sn!==t||fn!==i)&&(Di=null,Ur(t,i));do try{I_();break}catch(d){hp(t,d)}while(!0);if(Ec(),Mt=o,ka.current=c,Yt!==null)throw Error(n(261));return sn=null,fn=0,Qt}function I_(){for(;Yt!==null;)mp(Yt)}function U_(){for(;Yt!==null&&!q();)mp(Yt)}function mp(t){var i=xp(t.alternate,t,zn);t.memoizedProps=t.pendingProps,i===null?gp(t):Yt=i,tu.current=null}function gp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=R_(o,i,zn),o!==null){Yt=o;return}}else{if(o=C_(o,i),o!==null){o.flags&=32767,Yt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qt=6,Yt=null;return}}if(i=i.sibling,i!==null){Yt=i;return}Yt=i=t}while(i!==null);Qt===0&&(Qt=5)}function Fr(t,i,o){var c=St,d=qn.transition;try{qn.transition=null,St=1,F_(t,i,o,c)}finally{qn.transition=d,St=c}return null}function F_(t,i,o,c){do Ms();while(ar!==null);if((Mt&6)!==0)throw Error(n(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(cn(t,p),t===sn&&(Yt=sn=null,fn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ha||(Ha=!0,yp(Fe,function(){return Ms(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=qn.transition,qn.transition=null;var M=St;St=1;var N=Mt;Mt|=4,tu.current=null,b_(t,o),op(o,t),n_(uc),na=!!cc,uc=cc=null,t.current=o,L_(o),ne(),Mt=N,St=M,qn.transition=p}else t.current=o;if(Ha&&(Ha=!1,ar=t,Va=d),p=t.pendingLanes,p===0&&(or=null),vt(o.stateNode),Ln(t,K()),i!==null)for(c=t.onRecoverableError,o=0;o<i.length;o++)d=i[o],c(d.value,{componentStack:d.stack,digest:d.digest});if(za)throw za=!1,t=ru,ru=null,t;return(Va&1)!==0&&t.tag!==0&&Ms(),p=t.pendingLanes,(p&1)!==0?t===su?Co++:(Co=0,su=t):Co=0,nr(),null}function Ms(){if(ar!==null){var t=hi(Va),i=qn.transition,o=St;try{if(qn.transition=null,St=16>t?16:t,ar===null)var c=!1;else{if(t=ar,ar=null,Va=0,(Mt&6)!==0)throw Error(n(331));var d=Mt;for(Mt|=4,Be=t.current;Be!==null;){var p=Be,M=p.child;if((Be.flags&16)!==0){var N=p.deletions;if(N!==null){for(var H=0;H<N.length;H++){var ie=N[H];for(Be=ie;Be!==null;){var ye=Be;switch(ye.tag){case 0:case 11:case 15:wo(8,ye,p)}var Se=ye.child;if(Se!==null)Se.return=ye,Be=Se;else for(;Be!==null;){ye=Be;var _e=ye.sibling,Oe=ye.return;if(tp(ye),ye===ie){Be=null;break}if(_e!==null){_e.return=Oe,Be=_e;break}Be=Oe}}}var Ge=p.alternate;if(Ge!==null){var Xe=Ge.child;if(Xe!==null){Ge.child=null;do{var Wt=Xe.sibling;Xe.sibling=null,Xe=Wt}while(Xe!==null)}}Be=p}}if((p.subtreeFlags&2064)!==0&&M!==null)M.return=p,Be=M;else e:for(;Be!==null;){if(p=Be,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:wo(9,p,p.return)}var $=p.sibling;if($!==null){$.return=p.return,Be=$;break e}Be=p.return}}var X=t.current;for(Be=X;Be!==null;){M=Be;var Q=M.child;if((M.subtreeFlags&2064)!==0&&Q!==null)Q.return=M,Be=Q;else e:for(M=X;Be!==null;){if(N=Be,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:Oa(9,N)}}catch(Ye){Gt(N,N.return,Ye)}if(N===M){Be=null;break e}var we=N.sibling;if(we!==null){we.return=N.return,Be=we;break e}Be=N.return}}if(Mt=d,nr(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(nt,t)}catch{}c=!0}return c}finally{St=o,qn.transition=i}}return!1}function _p(t,i,o){i=vs(o,i),i=Uh(t,i,1),t=rr(t,i,1),i=En(),t!==null&&(tn(t,1,i),Ln(t,i))}function Gt(t,i,o){if(t.tag===3)_p(t,t,o);else for(;i!==null;){if(i.tag===3){_p(i,t,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(or===null||!or.has(c))){t=vs(o,t),t=Fh(i,t,1),i=rr(i,t,1),t=En(),i!==null&&(tn(i,1,t),Ln(i,t));break}}i=i.return}}function O_(t,i,o){var c=t.pingCache;c!==null&&c.delete(i),i=En(),t.pingedLanes|=t.suspendedLanes&o,sn===t&&(fn&o)===o&&(Qt===4||Qt===3&&(fn&130023424)===fn&&500>K()-iu?Ur(t,0):nu|=o),Ln(t,i)}function vp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Vt,Vt<<=1,(Vt&130023424)===0&&(Vt=4194304)));var o=En();t=Pi(t,i),t!==null&&(tn(t,i,o),Ln(t,o))}function k_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),vp(t,o)}function B_(t,i){var o=0;switch(t.tag){case 13:var c=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),vp(t,o)}var xp;xp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Rn.current)Pn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Pn=!1,A_(t,i,o);Pn=(t.flags&131072)!==0}else Pn=!1,Ft&&(i.flags&1048576)!==0&&Qd(i,ya,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Ua(t,i),t=i.pendingProps;var d=us(i,pn.current);gs(i,o),d=Ic(null,i,c,t,d,o);var p=Uc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Cn(c)?(p=!0,_a(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Rc(i),d.updater=Na,i.stateNode=d,d._reactInternals=i,Hc(i,c,t,o),i=Xc(null,i,c,!0,p,o)):(i.tag=0,Ft&&p&&_c(i),Mn(null,i,d,o),i=i.child),i;case 16:c=i.elementType;e:{switch(Ua(t,i),t=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=H_(c),t=ti(c,t),d){case 0:i=Wc(null,i,c,t,o);break e;case 1:i=Xh(null,i,c,t,o);break e;case 11:i=zh(null,i,c,t,o);break e;case 14:i=Hh(null,i,c,ti(c.type,t),o);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ti(c,d),Wc(t,i,c,d,o);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ti(c,d),Xh(t,i,c,d,o);case 3:e:{if(jh(i),t===null)throw Error(n(387));c=i.pendingProps,p=i.memoizedState,d=p.element,ah(t,i),Aa(i,c,null,o);var M=i.memoizedState;if(c=M.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=vs(Error(n(423)),i),i=qh(t,i,c,o,d);break e}else if(c!==d){d=vs(Error(n(424)),i),i=qh(t,i,c,o,d);break e}else for(Bn=Ji(i.stateNode.containerInfo.firstChild),kn=i,Ft=!0,ei=null,o=sh(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(hs(),c===d){i=Li(t,i,o);break e}Mn(t,i,c,o)}i=i.child}return i;case 5:return uh(i),t===null&&yc(i),c=i.type,d=i.pendingProps,p=t!==null?t.memoizedProps:null,M=d.children,fc(c,d)?M=null:p!==null&&fc(c,p)&&(i.flags|=32),Wh(t,i),Mn(t,i,M,o),i.child;case 6:return t===null&&yc(i),null;case 13:return Yh(t,i,o);case 4:return Cc(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=ps(i,null,c,o):Mn(t,i,c,o),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ti(c,d),zh(t,i,c,d,o);case 7:return Mn(t,i,i.pendingProps,o),i.child;case 8:return Mn(t,i,i.pendingProps.children,o),i.child;case 12:return Mn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,p=i.memoizedProps,M=d.value,Lt(Ea,c._currentValue),c._currentValue=M,p!==null)if(Jn(p.value,M)){if(p.children===d.children&&!Rn.current){i=Li(t,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var N=p.dependencies;if(N!==null){M=p.child;for(var H=N.firstContext;H!==null;){if(H.context===c){if(p.tag===1){H=bi(-1,o&-o),H.tag=2;var ie=p.updateQueue;if(ie!==null){ie=ie.shared;var ye=ie.pending;ye===null?H.next=H:(H.next=ye.next,ye.next=H),ie.pending=H}}p.lanes|=o,H=p.alternate,H!==null&&(H.lanes|=o),wc(p.return,o,i),N.lanes|=o;break}H=H.next}}else if(p.tag===10)M=p.type===i.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(n(341));M.lanes|=o,N=M.alternate,N!==null&&(N.lanes|=o),wc(M,o,i),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===i){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}Mn(t,i,d.children,o),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,gs(i,o),d=Xn(d),c=c(d),i.flags|=1,Mn(t,i,c,o),i.child;case 14:return c=i.type,d=ti(c,i.pendingProps),d=ti(c.type,d),Hh(t,i,c,d,o);case 15:return Vh(t,i,i.type,i.pendingProps,o);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ti(c,d),Ua(t,i),i.tag=1,Cn(c)?(t=!0,_a(i)):t=!1,gs(i,o),Nh(i,c,d),Hc(i,c,d,o),Xc(null,i,c,!0,t,o);case 19:return Kh(t,i,o);case 22:return Gh(t,i,o)}throw Error(n(156,i.tag))};function yp(t,i){return Jo(t,i)}function z_(t,i,o,c){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,i,o,c){return new z_(t,i,o,c)}function fu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function H_(t){if(typeof t=="function")return fu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===J)return 11;if(t===fe)return 14}return 2}function ur(t,i){var o=t.alternate;return o===null?(o=Yn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function ja(t,i,o,c,d,p){var M=2;if(c=t,typeof t=="function")fu(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case U:return Or(o.children,d,p,i);case B:M=8,d|=8;break;case P:return t=Yn(12,o,i,d|2),t.elementType=P,t.lanes=p,t;case Z:return t=Yn(13,o,i,d),t.elementType=Z,t.lanes=p,t;case le:return t=Yn(19,o,i,d),t.elementType=le,t.lanes=p,t;case ce:return qa(o,d,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:M=10;break e;case z:M=9;break e;case J:M=11;break e;case fe:M=14;break e;case oe:M=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Yn(M,o,i,d),i.elementType=t,i.type=c,i.lanes=p,i}function Or(t,i,o,c){return t=Yn(7,t,c,i),t.lanes=o,t}function qa(t,i,o,c){return t=Yn(22,t,c,i),t.elementType=ce,t.lanes=o,t.stateNode={isHidden:!1},t}function du(t,i,o){return t=Yn(6,t,null,i),t.lanes=o,t}function hu(t,i,o){return i=Yn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function V_(t,i,o,c,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hn(0),this.expirationTimes=hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hn(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function pu(t,i,o,c,d,p,M,N,H){return t=new V_(t,i,o,N,H),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Yn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rc(p),t}function G_(t,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:c==null?null:""+c,children:t,containerInfo:i,implementation:o}}function Sp(t){if(!t)return tr;t=t._reactInternals;e:{if(di(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Cn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Cn(o))return $d(t,o,i)}return i}function Mp(t,i,o,c,d,p,M,N,H){return t=pu(o,c,!0,t,d,p,M,N,H),t.context=Sp(null),o=t.current,c=En(),d=lr(o),p=bi(c,d),p.callback=i??null,rr(o,p,d),t.current.lanes=d,tn(t,d,c),Ln(t,c),t}function Ya(t,i,o,c){var d=i.current,p=En(),M=lr(d);return o=Sp(o),i.context===null?i.context=o:i.pendingContext=o,i=bi(p,M),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=rr(d,i,M),t!==null&&(ri(t,d,M,p),wa(t,d,M)),M}function $a(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ep(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function mu(t,i){Ep(t,i),(t=t.alternate)&&Ep(t,i)}function W_(){return null}var Tp=typeof reportError=="function"?reportError:function(t){console.error(t)};function gu(t){this._internalRoot=t}Ka.prototype.render=gu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ya(t,i,null,null)},Ka.prototype.unmount=gu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Ir(function(){Ya(null,t,null,null)}),i[wi]=null}};function Ka(t){this._internalRoot=t}Ka.prototype.unstable_scheduleHydration=function(t){if(t){var i=ad();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Ki.length&&i!==0&&i<Ki[o].priority;o++);Ki.splice(o,0,t),o===0&&ud(t)}};function _u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Za(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function wp(){}function X_(t,i,o,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var ie=$a(M);p.call(ie)}}var M=Mp(i,c,t,0,null,!1,!1,"",wp);return t._reactRootContainer=M,t[wi]=M.current,fo(t.nodeType===8?t.parentNode:t),Ir(),M}for(;d=t.lastChild;)t.removeChild(d);if(typeof c=="function"){var N=c;c=function(){var ie=$a(H);N.call(ie)}}var H=pu(t,0,!1,null,null,!1,!1,"",wp);return t._reactRootContainer=H,t[wi]=H.current,fo(t.nodeType===8?t.parentNode:t),Ir(function(){Ya(i,H,o,c)}),H}function Qa(t,i,o,c,d){var p=o._reactRootContainer;if(p){var M=p;if(typeof d=="function"){var N=d;d=function(){var H=$a(M);N.call(H)}}Ya(i,M,t,d)}else M=X_(o,i,t,d,c);return $a(M)}sd=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=_t(i.pendingLanes);o!==0&&(nn(i,o|1),Ln(i,K()),(Mt&6)===0&&(Ss=K()+500,nr()))}break;case 13:Ir(function(){var c=Pi(t,1);if(c!==null){var d=En();ri(c,t,1,d)}}),mu(t,1)}},Vl=function(t){if(t.tag===13){var i=Pi(t,134217728);if(i!==null){var o=En();ri(i,t,134217728,o)}mu(t,134217728)}},od=function(t){if(t.tag===13){var i=lr(t),o=Pi(t,i);if(o!==null){var c=En();ri(o,t,i,c)}mu(t,i)}},ad=function(){return St},ld=function(t,i){var o=St;try{return St=t,i()}finally{St=o}},Pe=function(t,i,o){switch(i){case"input":if(dt(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==t&&c.form===t.form){var d=ma(c);if(!d)throw Error(n(90));Re(c),dt(c,d)}}}break;case"textarea":ge(t,o);break;case"select":i=o.value,i!=null&&L(t,!!o.multiple,i,!1)}},Dt=lu,Kt=Ir;var j_={usingClientEntryPoint:!1,Events:[mo,ls,ma,De,at,lu]},Po={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},q_={bundleType:Po.bundleType,version:Po.version,rendererPackageName:Po.rendererPackageName,rendererConfig:Po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Zo(t),t===null?null:t.stateNode},findFiberByHostInstance:Po.findFiberByHostInstance||W_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ja.isDisabled&&Ja.supportsFiber)try{nt=Ja.inject(q_),We=Ja}catch{}}return Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j_,Dn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_u(i))throw Error(n(200));return G_(t,i,null,o)},Dn.createRoot=function(t,i){if(!_u(t))throw Error(n(299));var o=!1,c="",d=Tp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=pu(t,1,!1,null,null,o,!1,c,d),t[wi]=i.current,fo(t.nodeType===8?t.parentNode:t),new gu(i)},Dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Zo(i),t=t===null?null:t.stateNode,t},Dn.flushSync=function(t){return Ir(t)},Dn.hydrate=function(t,i,o){if(!Za(i))throw Error(n(200));return Qa(null,t,i,!0,o)},Dn.hydrateRoot=function(t,i,o){if(!_u(t))throw Error(n(405));var c=o!=null&&o.hydratedSources||null,d=!1,p="",M=Tp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=Mp(i,null,t,1,o??null,d,!1,p,M),t[wi]=i.current,fo(t),c)for(t=0;t<c.length;t++)o=c[t],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new Ka(i)},Dn.render=function(t,i,o){if(!Za(i))throw Error(n(200));return Qa(null,t,i,!1,o)},Dn.unmountComponentAtNode=function(t){if(!Za(t))throw Error(n(40));return t._reactRootContainer?(Ir(function(){Qa(null,null,t,!1,function(){t._reactRootContainer=null,t[wi]=null})}),!0):!1},Dn.unstable_batchedUpdates=lu,Dn.unstable_renderSubtreeIntoContainer=function(t,i,o,c){if(!Za(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Qa(t,i,o,!1,c)},Dn.version="18.3.1-next-f1338f8080-20240426",Dn}var Np;function tv(){if(Np)return yu.exports;Np=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),yu.exports=ev(),yu.exports}var Ip;function nv(){if(Ip)return el;Ip=1;var s=tv();return el.createRoot=s.createRoot,el.hydrateRoot=s.hydrateRoot,el}var iv=nv();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qf="172",rv=0,Up=1,sv=2,km=1,ov=2,ki=3,Mr=0,Un=1,xi=2,yr=0,Bs=1,Fp=2,Op=3,kp=4,av=5,qr=100,lv=101,cv=102,uv=103,fv=104,dv=200,hv=201,pv=202,mv=203,rf=204,sf=205,gv=206,_v=207,vv=208,xv=209,yv=210,Sv=211,Mv=212,Ev=213,Tv=214,of=0,af=1,lf=2,Vs=3,cf=4,uf=5,ff=6,df=7,Bm=0,wv=1,Av=2,Sr=0,Rv=1,Cv=2,Pv=3,bv=4,Lv=5,Dv=6,Nv=7,zm=300,Gs=301,Ws=302,hf=303,pf=304,Bl=306,mf=1e3,$r=1001,gf=1002,ui=1003,Iv=1004,tl=1005,Si=1006,Eu=1007,Kr=1008,Vi=1009,Hm=1010,Vm=1011,zo=1012,Yf=1013,Zr=1014,Bi=1015,Ho=1016,$f=1017,Kf=1018,Xs=1020,Gm=35902,Wm=1021,Xm=1022,ci=1023,jm=1024,qm=1025,zs=1026,js=1027,Ym=1028,Zf=1029,$m=1030,Qf=1031,Jf=1033,Rl=33776,Cl=33777,Pl=33778,bl=33779,_f=35840,vf=35841,xf=35842,yf=35843,Sf=36196,Mf=37492,Ef=37496,Tf=37808,wf=37809,Af=37810,Rf=37811,Cf=37812,Pf=37813,bf=37814,Lf=37815,Df=37816,Nf=37817,If=37818,Uf=37819,Ff=37820,Of=37821,Ll=36492,kf=36494,Bf=36495,Km=36283,zf=36284,Hf=36285,Vf=36286,Uv=3200,Fv=3201,Ov=0,kv=1,xr="",Kn="srgb",qs="srgb-linear",Nl="linear",Pt="srgb",Es=7680,Bp=519,Bv=512,zv=513,Hv=514,Zm=515,Vv=516,Gv=517,Wv=518,Xv=519,zp=35044,Hp="300 es",zi=2e3,Il=2001;class $s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(n);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tu=Math.PI/180,Gf=180/Math.PI;function Vo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[n&63|128]+vn[n>>8&255]+"-"+vn[n>>16&255]+vn[n>>24&255]+vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]).toLowerCase()}function gt(s,e,n){return Math.max(e,Math.min(n,s))}function jv(s,e){return(s%e+e)%e}function wu(s,e,n){return(1-n)*s+n*e}function Lo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Nn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class wt{constructor(e=0,n=0){wt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*a+e.x,this.y=l*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(e,n,r,a,l,u,f,h,m){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,u,f,h,m)}set(e,n,r,a,l,u,f,h,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=f,_[3]=n,_[4]=l,_[5]=h,_[6]=r,_[7]=u,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,u=r[0],f=r[3],h=r[6],m=r[1],_=r[4],v=r[7],x=r[2],S=r[5],E=r[8],T=a[0],y=a[3],g=a[6],D=a[1],b=a[4],C=a[7],V=a[2],I=a[5],U=a[8];return l[0]=u*T+f*D+h*V,l[3]=u*y+f*b+h*I,l[6]=u*g+f*C+h*U,l[1]=m*T+_*D+v*V,l[4]=m*y+_*b+v*I,l[7]=m*g+_*C+v*U,l[2]=x*T+S*D+E*V,l[5]=x*y+S*b+E*I,l[8]=x*g+S*C+E*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],h=e[6],m=e[7],_=e[8];return n*u*_-n*f*m-r*l*_+r*f*h+a*l*m-a*u*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],h=e[6],m=e[7],_=e[8],v=_*u-f*m,x=f*h-_*l,S=m*l-u*h,E=n*v+r*x+a*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=v*T,e[1]=(a*m-_*r)*T,e[2]=(f*r-a*u)*T,e[3]=x*T,e[4]=(_*n-a*h)*T,e[5]=(a*l-f*n)*T,e[6]=S*T,e[7]=(r*h-m*n)*T,e[8]=(u*n-r*l)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,l,u,f){const h=Math.cos(l),m=Math.sin(l);return this.set(r*h,r*m,-r*(h*u+m*f)+u+e,-a*m,a*h,-a*(-m*u+h*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Au.makeScale(e,n)),this}rotate(e){return this.premultiply(Au.makeRotation(-e)),this}translate(e,n){return this.premultiply(Au.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Au=new ct;function Qm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ul(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function qv(){const s=Ul("canvas");return s.style.display="block",s}const Vp={};function Os(s){s in Vp||(Vp[s]=!0,console.warn(s))}function Yv(s,e,n){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}function $v(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Kv(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Gp=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wp=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zv(){const s={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(a,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Pt&&(a.r=Hi(a.r),a.g=Hi(a.g),a.b=Hi(a.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Pt&&(a.r=Hs(a.r),a.g=Hs(a.g),a.b=Hs(a.b))),a},fromWorkingColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},toWorkingColorSpace:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===xr?Nl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,u){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[qs]:{primaries:e,whitePoint:r,transfer:Nl,toXYZ:Gp,fromXYZ:Wp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:e,whitePoint:r,transfer:Pt,toXYZ:Gp,fromXYZ:Wp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),s}const Tt=Zv();function Hi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Hs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ts;class Qv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ts===void 0&&(Ts=Ul("canvas")),Ts.width=e.width,Ts.height=e.height;const r=Ts.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ts}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ul("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=Hi(l[u]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Hi(n[r]/255)*255):n[r]=Hi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jv=0;class Jm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=Vo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,f=a.length;u<f;u++)a[u].isDataTexture?l.push(Ru(a[u].image)):l.push(Ru(a[u]))}else l=Ru(a);r.url=l}return n||(e.images[this.uuid]=r),r}}function Ru(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Qv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let e0=0;class Fn extends $s{constructor(e=Fn.DEFAULT_IMAGE,n=Fn.DEFAULT_MAPPING,r=$r,a=$r,l=Si,u=Kr,f=ci,h=Vi,m=Fn.DEFAULT_ANISOTROPY,_=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Vo(),this.name="",this.source=new Jm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=h,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mf:e.x=e.x-Math.floor(e.x);break;case $r:e.x=e.x<0?0:1;break;case gf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mf:e.y=e.y-Math.floor(e.y);break;case $r:e.y=e.y<0?0:1;break;case gf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=zm;Fn.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,n=0,r=0,a=1){jt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a+u[12]*l,this.y=u[1]*n+u[5]*r+u[9]*a+u[13]*l,this.z=u[2]*n+u[6]*r+u[10]*a+u[14]*l,this.w=u[3]*n+u[7]*r+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,l;const h=e.elements,m=h[0],_=h[4],v=h[8],x=h[1],S=h[5],E=h[9],T=h[2],y=h[6],g=h[10];if(Math.abs(_-x)<.01&&Math.abs(v-T)<.01&&Math.abs(E-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+T)<.1&&Math.abs(E+y)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const b=(m+1)/2,C=(S+1)/2,V=(g+1)/2,I=(_+x)/4,U=(v+T)/4,B=(E+y)/4;return b>C&&b>V?b<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(b),a=I/r,l=U/r):C>V?C<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(C),r=I/a,l=B/a):V<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(V),r=U/l,a=B/l),this.set(r,a,l,n),this}let D=Math.sqrt((y-E)*(y-E)+(v-T)*(v-T)+(x-_)*(x-_));return Math.abs(D)<.001&&(D=1),this.x=(y-E)/D,this.y=(v-T)/D,this.z=(x-_)/D,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this.w=gt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this.w=gt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class t0 extends $s{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new jt(0,0,e,n),this.scissorTest=!1,this.viewport=new jt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Fn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const n=Object.assign({},e.texture.image);return this.texture.source=new Jm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qr extends t0{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class eg extends Fn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ui,this.minFilter=ui,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class n0 extends Fn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ui,this.minFilter=ui,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Go{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,l,u,f){let h=r[a+0],m=r[a+1],_=r[a+2],v=r[a+3];const x=l[u+0],S=l[u+1],E=l[u+2],T=l[u+3];if(f===0){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=v;return}if(f===1){e[n+0]=x,e[n+1]=S,e[n+2]=E,e[n+3]=T;return}if(v!==T||h!==x||m!==S||_!==E){let y=1-f;const g=h*x+m*S+_*E+v*T,D=g>=0?1:-1,b=1-g*g;if(b>Number.EPSILON){const V=Math.sqrt(b),I=Math.atan2(V,g*D);y=Math.sin(y*I)/V,f=Math.sin(f*I)/V}const C=f*D;if(h=h*y+x*C,m=m*y+S*C,_=_*y+E*C,v=v*y+T*C,y===1-f){const V=1/Math.sqrt(h*h+m*m+_*_+v*v);h*=V,m*=V,_*=V,v*=V}}e[n]=h,e[n+1]=m,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,a,l,u){const f=r[a],h=r[a+1],m=r[a+2],_=r[a+3],v=l[u],x=l[u+1],S=l[u+2],E=l[u+3];return e[n]=f*E+_*v+h*S-m*x,e[n+1]=h*E+_*x+m*v-f*S,e[n+2]=m*E+_*S+f*x-h*v,e[n+3]=_*E-f*v-h*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,m=f(r/2),_=f(a/2),v=f(l/2),x=h(r/2),S=h(a/2),E=h(l/2);switch(u){case"XYZ":this._x=x*_*v+m*S*E,this._y=m*S*v-x*_*E,this._z=m*_*E+x*S*v,this._w=m*_*v-x*S*E;break;case"YXZ":this._x=x*_*v+m*S*E,this._y=m*S*v-x*_*E,this._z=m*_*E-x*S*v,this._w=m*_*v+x*S*E;break;case"ZXY":this._x=x*_*v-m*S*E,this._y=m*S*v+x*_*E,this._z=m*_*E+x*S*v,this._w=m*_*v-x*S*E;break;case"ZYX":this._x=x*_*v-m*S*E,this._y=m*S*v+x*_*E,this._z=m*_*E-x*S*v,this._w=m*_*v+x*S*E;break;case"YZX":this._x=x*_*v+m*S*E,this._y=m*S*v+x*_*E,this._z=m*_*E-x*S*v,this._w=m*_*v-x*S*E;break;case"XZY":this._x=x*_*v-m*S*E,this._y=m*S*v-x*_*E,this._z=m*_*E+x*S*v,this._w=m*_*v+x*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],l=n[8],u=n[1],f=n[5],h=n[9],m=n[2],_=n[6],v=n[10],x=r+f+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-h)*S,this._y=(l-m)*S,this._z=(u-a)*S}else if(r>f&&r>v){const S=2*Math.sqrt(1+r-f-v);this._w=(_-h)/S,this._x=.25*S,this._y=(a+u)/S,this._z=(l+m)/S}else if(f>v){const S=2*Math.sqrt(1+f-r-v);this._w=(l-m)/S,this._x=(a+u)/S,this._y=.25*S,this._z=(h+_)/S}else{const S=2*Math.sqrt(1+v-r-f);this._w=(u-a)/S,this._x=(l+m)/S,this._y=(h+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,l=e._z,u=e._w,f=n._x,h=n._y,m=n._z,_=n._w;return this._x=r*_+u*f+a*m-l*h,this._y=a*_+u*h+l*f-r*m,this._z=l*_+u*m+r*h-a*f,this._w=u*_-r*f-a*h-l*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,u=this._w;let f=u*e._w+r*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=r,this._y=a,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-n;return this._w=S*u+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*l+n*this._z,this.normalize(),this}const m=Math.sqrt(h),_=Math.atan2(m,f),v=Math.sin((1-n)*_)/m,x=Math.sin(n*_)/m;return this._w=u*v+this._w*x,this._x=r*v+this._x*x,this._y=a*v+this._y*x,this._z=l*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,n=0,r=0){G.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Xp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Xp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*a,this.y=l[1]*n+l[4]*r+l[7]*a,this.z=l[2]*n+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=e.elements,u=1/(l[3]*n+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*a+l[12])*u,this.y=(l[1]*n+l[5]*r+l[9]*a+l[13])*u,this.z=(l[2]*n+l[6]*r+l[10]*a+l[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,l=e.x,u=e.y,f=e.z,h=e.w,m=2*(u*a-f*r),_=2*(f*n-l*a),v=2*(l*r-u*n);return this.x=n+h*m+u*v-f*_,this.y=r+h*_+f*m-l*v,this.z=a+h*v+l*_-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*a,this.y=l[1]*n+l[5]*r+l[9]*a,this.z=l[2]*n+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,l=e.z,u=n.x,f=n.y,h=n.z;return this.x=a*h-l*f,this.y=l*u-r*h,this.z=r*f-a*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Cu.copy(this).projectOnVector(e),this.sub(Cu)}reflect(e){return this.sub(Cu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cu=new G,Xp=new Go;class Wo{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(si.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(si.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=si.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,si):si.fromBufferAttribute(l,u),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),nl.copy(r.boundingBox)),nl.applyMatrix4(e.matrixWorld),this.union(nl)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Do),il.subVectors(this.max,Do),ws.subVectors(e.a,Do),As.subVectors(e.b,Do),Rs.subVectors(e.c,Do),dr.subVectors(As,ws),hr.subVectors(Rs,As),kr.subVectors(ws,Rs);let n=[0,-dr.z,dr.y,0,-hr.z,hr.y,0,-kr.z,kr.y,dr.z,0,-dr.x,hr.z,0,-hr.x,kr.z,0,-kr.x,-dr.y,dr.x,0,-hr.y,hr.x,0,-kr.y,kr.x,0];return!Pu(n,ws,As,Rs,il)||(n=[1,0,0,0,1,0,0,0,1],!Pu(n,ws,As,Rs,il))?!1:(rl.crossVectors(dr,hr),n=[rl.x,rl.y,rl.z],Pu(n,ws,As,Rs,il))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ni=[new G,new G,new G,new G,new G,new G,new G,new G],si=new G,nl=new Wo,ws=new G,As=new G,Rs=new G,dr=new G,hr=new G,kr=new G,Do=new G,il=new G,rl=new G,Br=new G;function Pu(s,e,n,r,a){for(let l=0,u=s.length-3;l<=u;l+=3){Br.fromArray(s,l);const f=a.x*Math.abs(Br.x)+a.y*Math.abs(Br.y)+a.z*Math.abs(Br.z),h=e.dot(Br),m=n.dot(Br),_=r.dot(Br);if(Math.max(-Math.max(h,m,_),Math.min(h,m,_))>f)return!1}return!0}const i0=new Wo,No=new G,bu=new G;class Xo{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):i0.setFromPoints(e).getCenter(r);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const n=No.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(No,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(bu)),this.expandByPoint(No.copy(e.center).sub(bu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new G,Lu=new G,sl=new G,pr=new G,Du=new G,ol=new G,Nu=new G;class ed{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,n),Ii.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Lu.copy(e).add(n).multiplyScalar(.5),sl.copy(n).sub(e).normalize(),pr.copy(this.origin).sub(Lu);const l=e.distanceTo(n)*.5,u=-this.direction.dot(sl),f=pr.dot(this.direction),h=-pr.dot(sl),m=pr.lengthSq(),_=Math.abs(1-u*u);let v,x,S,E;if(_>0)if(v=u*h-f,x=u*f-h,E=l*_,v>=0)if(x>=-E)if(x<=E){const T=1/_;v*=T,x*=T,S=v*(v+u*x+2*f)+x*(u*v+x+2*h)+m}else x=l,v=Math.max(0,-(u*x+f)),S=-v*v+x*(x+2*h)+m;else x=-l,v=Math.max(0,-(u*x+f)),S=-v*v+x*(x+2*h)+m;else x<=-E?(v=Math.max(0,-(-u*l+f)),x=v>0?-l:Math.min(Math.max(-l,-h),l),S=-v*v+x*(x+2*h)+m):x<=E?(v=0,x=Math.min(Math.max(-l,-h),l),S=x*(x+2*h)+m):(v=Math.max(0,-(u*l+f)),x=v>0?l:Math.min(Math.max(-l,-h),l),S=-v*v+x*(x+2*h)+m);else x=u>0?-l:l,v=Math.max(0,-(u*x+f)),S=-v*v+x*(x+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Lu).addScaledVector(sl,x),S}intersectSphere(e,n){Ii.subVectors(e.center,this.origin);const r=Ii.dot(this.direction),a=Ii.dot(Ii)-r*r,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,l,u,f,h;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),_>=0?(l=(e.min.y-x.y)*_,u=(e.max.y-x.y)*_):(l=(e.max.y-x.y)*_,u=(e.min.y-x.y)*_),r>u||l>a||((l>r||isNaN(r))&&(r=l),(u<a||isNaN(a))&&(a=u),v>=0?(f=(e.min.z-x.z)*v,h=(e.max.z-x.z)*v):(f=(e.max.z-x.z)*v,h=(e.min.z-x.z)*v),r>h||f>a)||((f>r||r!==r)&&(r=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,n,r,a,l){Du.subVectors(n,e),ol.subVectors(r,e),Nu.crossVectors(Du,ol);let u=this.direction.dot(Nu),f;if(u>0){if(a)return null;f=1}else if(u<0)f=-1,u=-u;else return null;pr.subVectors(this.origin,e);const h=f*this.direction.dot(ol.crossVectors(pr,ol));if(h<0)return null;const m=f*this.direction.dot(Du.cross(pr));if(m<0||h+m>u)return null;const _=-f*pr.dot(Nu);return _<0?null:this.at(_/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,n,r,a,l,u,f,h,m,_,v,x,S,E,T,y){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,u,f,h,m,_,v,x,S,E,T,y)}set(e,n,r,a,l,u,f,h,m,_,v,x,S,E,T,y){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=l,g[5]=u,g[9]=f,g[13]=h,g[2]=m,g[6]=_,g[10]=v,g[14]=x,g[3]=S,g[7]=E,g[11]=T,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Cs.setFromMatrixColumn(e,0).length(),l=1/Cs.setFromMatrixColumn(e,1).length(),u=1/Cs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(a),m=Math.sin(a),_=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const x=u*_,S=u*v,E=f*_,T=f*v;n[0]=h*_,n[4]=-h*v,n[8]=m,n[1]=S+E*m,n[5]=x-T*m,n[9]=-f*h,n[2]=T-x*m,n[6]=E+S*m,n[10]=u*h}else if(e.order==="YXZ"){const x=h*_,S=h*v,E=m*_,T=m*v;n[0]=x+T*f,n[4]=E*f-S,n[8]=u*m,n[1]=u*v,n[5]=u*_,n[9]=-f,n[2]=S*f-E,n[6]=T+x*f,n[10]=u*h}else if(e.order==="ZXY"){const x=h*_,S=h*v,E=m*_,T=m*v;n[0]=x-T*f,n[4]=-u*v,n[8]=E+S*f,n[1]=S+E*f,n[5]=u*_,n[9]=T-x*f,n[2]=-u*m,n[6]=f,n[10]=u*h}else if(e.order==="ZYX"){const x=u*_,S=u*v,E=f*_,T=f*v;n[0]=h*_,n[4]=E*m-S,n[8]=x*m+T,n[1]=h*v,n[5]=T*m+x,n[9]=S*m-E,n[2]=-m,n[6]=f*h,n[10]=u*h}else if(e.order==="YZX"){const x=u*h,S=u*m,E=f*h,T=f*m;n[0]=h*_,n[4]=T-x*v,n[8]=E*v+S,n[1]=v,n[5]=u*_,n[9]=-f*_,n[2]=-m*_,n[6]=S*v+E,n[10]=x-T*v}else if(e.order==="XZY"){const x=u*h,S=u*m,E=f*h,T=f*m;n[0]=h*_,n[4]=-v,n[8]=m*_,n[1]=x*v+T,n[5]=u*_,n[9]=S*v-E,n[2]=E*v-S,n[6]=f*_,n[10]=T*v+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(r0,e,s0)}lookAt(e,n,r){const a=this.elements;return Hn.subVectors(e,n),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),mr.crossVectors(r,Hn),mr.lengthSq()===0&&(Math.abs(r.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),mr.crossVectors(r,Hn)),mr.normalize(),al.crossVectors(Hn,mr),a[0]=mr.x,a[4]=al.x,a[8]=Hn.x,a[1]=mr.y,a[5]=al.y,a[9]=Hn.y,a[2]=mr.z,a[6]=al.z,a[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,u=r[0],f=r[4],h=r[8],m=r[12],_=r[1],v=r[5],x=r[9],S=r[13],E=r[2],T=r[6],y=r[10],g=r[14],D=r[3],b=r[7],C=r[11],V=r[15],I=a[0],U=a[4],B=a[8],P=a[12],A=a[1],z=a[5],J=a[9],Z=a[13],le=a[2],fe=a[6],oe=a[10],ce=a[14],W=a[3],ue=a[7],se=a[11],O=a[15];return l[0]=u*I+f*A+h*le+m*W,l[4]=u*U+f*z+h*fe+m*ue,l[8]=u*B+f*J+h*oe+m*se,l[12]=u*P+f*Z+h*ce+m*O,l[1]=_*I+v*A+x*le+S*W,l[5]=_*U+v*z+x*fe+S*ue,l[9]=_*B+v*J+x*oe+S*se,l[13]=_*P+v*Z+x*ce+S*O,l[2]=E*I+T*A+y*le+g*W,l[6]=E*U+T*z+y*fe+g*ue,l[10]=E*B+T*J+y*oe+g*se,l[14]=E*P+T*Z+y*ce+g*O,l[3]=D*I+b*A+C*le+V*W,l[7]=D*U+b*z+C*fe+V*ue,l[11]=D*B+b*J+C*oe+V*se,l[15]=D*P+b*Z+C*ce+V*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],l=e[12],u=e[1],f=e[5],h=e[9],m=e[13],_=e[2],v=e[6],x=e[10],S=e[14],E=e[3],T=e[7],y=e[11],g=e[15];return E*(+l*h*v-a*m*v-l*f*x+r*m*x+a*f*S-r*h*S)+T*(+n*h*S-n*m*x+l*u*x-a*u*S+a*m*_-l*h*_)+y*(+n*m*v-n*f*S-l*u*v+r*u*S+l*f*_-r*m*_)+g*(-a*f*_-n*h*v+n*f*x+a*u*v-r*u*x+r*h*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],h=e[6],m=e[7],_=e[8],v=e[9],x=e[10],S=e[11],E=e[12],T=e[13],y=e[14],g=e[15],D=v*y*m-T*x*m+T*h*S-f*y*S-v*h*g+f*x*g,b=E*x*m-_*y*m-E*h*S+u*y*S+_*h*g-u*x*g,C=_*T*m-E*v*m+E*f*S-u*T*S-_*f*g+u*v*g,V=E*v*h-_*T*h-E*f*x+u*T*x+_*f*y-u*v*y,I=n*D+r*b+a*C+l*V;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/I;return e[0]=D*U,e[1]=(T*x*l-v*y*l-T*a*S+r*y*S+v*a*g-r*x*g)*U,e[2]=(f*y*l-T*h*l+T*a*m-r*y*m-f*a*g+r*h*g)*U,e[3]=(v*h*l-f*x*l-v*a*m+r*x*m+f*a*S-r*h*S)*U,e[4]=b*U,e[5]=(_*y*l-E*x*l+E*a*S-n*y*S-_*a*g+n*x*g)*U,e[6]=(E*h*l-u*y*l-E*a*m+n*y*m+u*a*g-n*h*g)*U,e[7]=(u*x*l-_*h*l+_*a*m-n*x*m-u*a*S+n*h*S)*U,e[8]=C*U,e[9]=(E*v*l-_*T*l-E*r*S+n*T*S+_*r*g-n*v*g)*U,e[10]=(u*T*l-E*f*l+E*r*m-n*T*m-u*r*g+n*f*g)*U,e[11]=(_*f*l-u*v*l-_*r*m+n*v*m+u*r*S-n*f*S)*U,e[12]=V*U,e[13]=(_*T*a-E*v*a+E*r*x-n*T*x-_*r*y+n*v*y)*U,e[14]=(E*f*a-u*T*a-E*r*h+n*T*h+u*r*y-n*f*y)*U,e[15]=(u*v*a-_*f*a+_*r*h-n*v*h-u*r*x+n*f*x)*U,this}scale(e){const n=this.elements,r=e.x,a=e.y,l=e.z;return n[0]*=r,n[4]*=a,n[8]*=l,n[1]*=r,n[5]*=a,n[9]*=l,n[2]*=r,n[6]*=a,n[10]*=l,n[3]*=r,n[7]*=a,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),l=1-r,u=e.x,f=e.y,h=e.z,m=l*u,_=l*f;return this.set(m*u+r,m*f-a*h,m*h+a*f,0,m*f+a*h,_*f+r,_*h-a*u,0,m*h-a*f,_*h+a*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,l,u){return this.set(1,r,l,0,e,1,u,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,l=n._x,u=n._y,f=n._z,h=n._w,m=l+l,_=u+u,v=f+f,x=l*m,S=l*_,E=l*v,T=u*_,y=u*v,g=f*v,D=h*m,b=h*_,C=h*v,V=r.x,I=r.y,U=r.z;return a[0]=(1-(T+g))*V,a[1]=(S+C)*V,a[2]=(E-b)*V,a[3]=0,a[4]=(S-C)*I,a[5]=(1-(x+g))*I,a[6]=(y+D)*I,a[7]=0,a[8]=(E+b)*U,a[9]=(y-D)*U,a[10]=(1-(x+T))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let l=Cs.set(a[0],a[1],a[2]).length();const u=Cs.set(a[4],a[5],a[6]).length(),f=Cs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],oi.copy(this);const m=1/l,_=1/u,v=1/f;return oi.elements[0]*=m,oi.elements[1]*=m,oi.elements[2]*=m,oi.elements[4]*=_,oi.elements[5]*=_,oi.elements[6]*=_,oi.elements[8]*=v,oi.elements[9]*=v,oi.elements[10]*=v,n.setFromRotationMatrix(oi),r.x=l,r.y=u,r.z=f,this}makePerspective(e,n,r,a,l,u,f=zi){const h=this.elements,m=2*l/(n-e),_=2*l/(r-a),v=(n+e)/(n-e),x=(r+a)/(r-a);let S,E;if(f===zi)S=-(u+l)/(u-l),E=-2*u*l/(u-l);else if(f===Il)S=-u/(u-l),E=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=_,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,l,u,f=zi){const h=this.elements,m=1/(n-e),_=1/(r-a),v=1/(u-l),x=(n+e)*m,S=(r+a)*_;let E,T;if(f===zi)E=(u+l)*v,T=-2*v;else if(f===Il)E=l*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*_,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=T,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Cs=new G,oi=new zt,r0=new G(0,0,0),s0=new G(1,1,1),mr=new G,al=new G,Hn=new G,jp=new zt,qp=new Go;class Gi{constructor(e=0,n=0,r=0,a=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,l=a[0],u=a[4],f=a[8],h=a[1],m=a[5],_=a[9],v=a[2],x=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(gt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-gt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return jp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return qp.setFromEuler(this),this.setFromQuaternion(qp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class tg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let o0=0;const Yp=new G,Ps=new Go,Ui=new zt,ll=new G,Io=new G,a0=new G,l0=new Go,$p=new G(1,0,0),Kp=new G(0,1,0),Zp=new G(0,0,1),Qp={type:"added"},c0={type:"removed"},bs={type:"childadded",child:null},Iu={type:"childremoved",child:null};class wn extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=Vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const e=new G,n=new Gi,r=new Go,a=new G(1,1,1);function l(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new zt},normalMatrix:{value:new ct}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis($p,e)}rotateY(e){return this.rotateOnAxis(Kp,e)}rotateZ(e){return this.rotateOnAxis(Zp,e)}translateOnAxis(e,n){return Yp.copy(e).applyQuaternion(this.quaternion),this.position.add(Yp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis($p,e)}translateY(e){return this.translateOnAxis(Kp,e)}translateZ(e){return this.translateOnAxis(Zp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ll.copy(e):ll.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Io,ll,this.up):Ui.lookAt(ll,Io,this.up),this.quaternion.setFromRotationMatrix(Ui),a&&(Ui.extractRotation(a.matrixWorld),Ps.setFromRotationMatrix(Ui),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qp),bs.child=e,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(c0),Iu.child=e,this.dispatchEvent(Iu),Iu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qp),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,e,a0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,l0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let m=0,_=h.length;m<_;m++){const v=h[m];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,m=this.material.length;h<m;h++)f.push(l(e.materials,this.material[h]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(e.animations,h))}}if(n){const f=u(e.geometries),h=u(e.materials),m=u(e.textures),_=u(e.images),v=u(e.shapes),x=u(e.skeletons),S=u(e.animations),E=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=a,r;function u(f){const h=[];for(const m in f){const _=f[m];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}wn.DEFAULT_UP=new G(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new G,Fi=new G,Uu=new G,Oi=new G,Ls=new G,Ds=new G,Jp=new G,Fu=new G,Ou=new G,ku=new G,Bu=new jt,zu=new jt,Hu=new jt;class li{constructor(e=new G,n=new G,r=new G){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ai.subVectors(e,n),a.cross(ai);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,n,r,a,l){ai.subVectors(a,n),Fi.subVectors(r,n),Uu.subVectors(e,n);const u=ai.dot(ai),f=ai.dot(Fi),h=ai.dot(Uu),m=Fi.dot(Fi),_=Fi.dot(Uu),v=u*m-f*f;if(v===0)return l.set(0,0,0),null;const x=1/v,S=(m*h-f*_)*x,E=(u*_-f*h)*x;return l.set(1-S-E,E,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,n,r,a,l,u,f,h){return this.getBarycoord(e,n,r,a,Oi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Oi.x),h.addScaledVector(u,Oi.y),h.addScaledVector(f,Oi.z),h)}static getInterpolatedAttribute(e,n,r,a,l,u){return Bu.setScalar(0),zu.setScalar(0),Hu.setScalar(0),Bu.fromBufferAttribute(e,n),zu.fromBufferAttribute(e,r),Hu.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(Bu,l.x),u.addScaledVector(zu,l.y),u.addScaledVector(Hu,l.z),u}static isFrontFacing(e,n,r,a){return ai.subVectors(r,n),Fi.subVectors(e,n),ai.cross(Fi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ai.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return li.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,l){return li.getInterpolation(e,this.a,this.b,this.c,n,r,a,l)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,l=this.c;let u,f;Ls.subVectors(a,r),Ds.subVectors(l,r),Fu.subVectors(e,r);const h=Ls.dot(Fu),m=Ds.dot(Fu);if(h<=0&&m<=0)return n.copy(r);Ou.subVectors(e,a);const _=Ls.dot(Ou),v=Ds.dot(Ou);if(_>=0&&v<=_)return n.copy(a);const x=h*v-_*m;if(x<=0&&h>=0&&_<=0)return u=h/(h-_),n.copy(r).addScaledVector(Ls,u);ku.subVectors(e,l);const S=Ls.dot(ku),E=Ds.dot(ku);if(E>=0&&S<=E)return n.copy(l);const T=S*m-h*E;if(T<=0&&m>=0&&E<=0)return f=m/(m-E),n.copy(r).addScaledVector(Ds,f);const y=_*E-S*v;if(y<=0&&v-_>=0&&S-E>=0)return Jp.subVectors(l,a),f=(v-_)/(v-_+(S-E)),n.copy(a).addScaledVector(Jp,f);const g=1/(y+T+x);return u=T*g,f=x*g,n.copy(r).addScaledVector(Ls,u).addScaledVector(Ds,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ng={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},cl={h:0,s:0,l:0};function Vu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Rt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Tt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Tt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Tt.workingColorSpace){if(e=jv(e,1),n=gt(n,0,1),r=gt(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,u=2*r-l;this.r=Vu(u,l,e+1/3),this.g=Vu(u,l,e),this.b=Vu(u,l,e-1/3)}return Tt.toWorkingColorSpace(this,a),this}setStyle(e,n=Kn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],f=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kn){const r=ng[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return Tt.fromWorkingColorSpace(xn.copy(this),e),Math.round(gt(xn.r*255,0,255))*65536+Math.round(gt(xn.g*255,0,255))*256+Math.round(gt(xn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Tt.workingColorSpace){Tt.fromWorkingColorSpace(xn.copy(this),n);const r=xn.r,a=xn.g,l=xn.b,u=Math.max(r,a,l),f=Math.min(r,a,l);let h,m;const _=(f+u)/2;if(f===u)h=0,m=0;else{const v=u-f;switch(m=_<=.5?v/(u+f):v/(2-u-f),u){case r:h=(a-l)/v+(a<l?6:0);break;case a:h=(l-r)/v+2;break;case l:h=(r-a)/v+4;break}h/=6}return e.h=h,e.s=m,e.l=_,e}getRGB(e,n=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(xn.copy(this),n),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Kn){Tt.fromWorkingColorSpace(xn.copy(this),e);const n=xn.r,r=xn.g,a=xn.b;return e!==Kn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+n,gr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(gr),e.getHSL(cl);const r=wu(gr.h,cl.h,n),a=wu(gr.s,cl.s,n),l=wu(gr.l,cl.l,n);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*a,this.g=l[1]*n+l[4]*r+l[7]*a,this.b=l[2]*n+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new Rt;Rt.NAMES=ng;let u0=0;class Ks extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Vo(),this.name="",this.type="Material",this.blending=Bs,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rf,this.blendDst=sf,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(r.blending=this.blending),this.side!==Mr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==rf&&(r.blendSrc=this.blendSrc),this.blendDst!==sf&&(r.blendDst=this.blendDst),this.blendEquation!==qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(n){const l=a(e.textures),u=a(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class vr extends Ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=Bm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new G,ul=new wt;class fi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=zp,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ul.fromBufferAttribute(this,n),ul.applyMatrix3(e),this.setXY(n,ul.x,ul.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix3(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyMatrix4(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.applyNormalMatrix(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)$t.fromBufferAttribute(this,n),$t.transformDirection(e),this.setXYZ(n,$t.x,$t.y,$t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Lo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Nn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Lo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Lo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Lo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Lo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Nn(n,this.array),r=Nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Nn(n,this.array),r=Nn(r,this.array),a=Nn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,l){return e*=this.itemSize,this.normalized&&(n=Nn(n,this.array),r=Nn(r,this.array),a=Nn(a,this.array),l=Nn(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zp&&(e.usage=this.usage),e}}class ig extends fi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class rg extends fi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class qt extends fi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let f0=0;const $n=new zt,Gu=new wn,Ns=new G,Vn=new Wo,Uo=new Wo,an=new G;class Xt extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=Vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qm(e)?rg:ig)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ct().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,n,r){return $n.makeTranslation(e,n,r),this.applyMatrix4($n),this}scale(e,n,r){return $n.makeScale(e,n,r),this.applyMatrix4($n),this}lookAt(e){return Gu.lookAt(e),Gu.updateMatrix(),this.applyMatrix4(Gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new qt(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const l=e[a];n.setXYZ(a,l.x,l.y,l.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const l=n[r];Vn.setFromBufferAttribute(l),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const r=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const f=n[l];Uo.setFromBufferAttribute(f),this.morphTargetsRelative?(an.addVectors(Vn.min,Uo.min),Vn.expandByPoint(an),an.addVectors(Vn.max,Uo.max),Vn.expandByPoint(an)):(Vn.expandByPoint(Uo.min),Vn.expandByPoint(Uo.max))}Vn.getCenter(r);let a=0;for(let l=0,u=e.count;l<u;l++)an.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(an));if(n)for(let l=0,u=n.length;l<u;l++){const f=n[l],h=this.morphTargetsRelative;for(let m=0,_=f.count;m<_;m++)an.fromBufferAttribute(f,m),h&&(Ns.fromBufferAttribute(e,m),an.add(Ns)),a=Math.max(a,r.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let B=0;B<r.count;B++)f[B]=new G,h[B]=new G;const m=new G,_=new G,v=new G,x=new wt,S=new wt,E=new wt,T=new G,y=new G;function g(B,P,A){m.fromBufferAttribute(r,B),_.fromBufferAttribute(r,P),v.fromBufferAttribute(r,A),x.fromBufferAttribute(l,B),S.fromBufferAttribute(l,P),E.fromBufferAttribute(l,A),_.sub(m),v.sub(m),S.sub(x),E.sub(x);const z=1/(S.x*E.y-E.x*S.y);isFinite(z)&&(T.copy(_).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(z),y.copy(v).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(z),f[B].add(T),f[P].add(T),f[A].add(T),h[B].add(y),h[P].add(y),h[A].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let B=0,P=D.length;B<P;++B){const A=D[B],z=A.start,J=A.count;for(let Z=z,le=z+J;Z<le;Z+=3)g(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const b=new G,C=new G,V=new G,I=new G;function U(B){V.fromBufferAttribute(a,B),I.copy(V);const P=f[B];b.copy(P),b.sub(V.multiplyScalar(V.dot(P))).normalize(),C.crossVectors(I,P);const z=C.dot(h[B])<0?-1:1;u.setXYZW(B,b.x,b.y,b.z,z)}for(let B=0,P=D.length;B<P;++B){const A=D[B],z=A.start,J=A.count;for(let Z=z,le=z+J;Z<le;Z+=3)U(e.getX(Z+0)),U(e.getX(Z+1)),U(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new fi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new G,l=new G,u=new G,f=new G,h=new G,m=new G,_=new G,v=new G;if(e)for(let x=0,S=e.count;x<S;x+=3){const E=e.getX(x+0),T=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(n,E),l.fromBufferAttribute(n,T),u.fromBufferAttribute(n,y),_.subVectors(u,l),v.subVectors(a,l),_.cross(v),f.fromBufferAttribute(r,E),h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,y),f.add(_),h.add(_),m.add(_),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,S=n.count;x<S;x+=3)a.fromBufferAttribute(n,x+0),l.fromBufferAttribute(n,x+1),u.fromBufferAttribute(n,x+2),_.subVectors(u,l),v.subVectors(a,l),_.cross(v),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)an.fromBufferAttribute(e,n),an.normalize(),e.setXYZ(n,an.x,an.y,an.z)}toNonIndexed(){function e(f,h){const m=f.array,_=f.itemSize,v=f.normalized,x=new m.constructor(h.length*_);let S=0,E=0;for(let T=0,y=h.length;T<y;T++){f.isInterleavedBufferAttribute?S=h[T]*f.data.stride+f.offset:S=h[T]*_;for(let g=0;g<_;g++)x[E++]=m[S++]}return new fi(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Xt,r=this.index.array,a=this.attributes;for(const f in a){const h=a[f],m=e(h,r);n.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const h=[],m=l[f];for(let _=0,v=m.length;_<v;_++){const x=m[_],S=e(x,r);h.push(S)}n.morphAttributes[f]=h}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const m=u[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],_=[];for(let v=0,x=m.length;v<x;v++){const S=m[v];_.push(S.toJSON(e.data))}_.length>0&&(a[h]=_,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const l=e.morphAttributes;for(const m in l){const _=[],v=l[m];for(let x=0,S=v.length;x<S;x++)_.push(v[x].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,_=u.length;m<_;m++){const v=u[m];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const em=new zt,zr=new ed,fl=new Xo,tm=new G,dl=new G,hl=new G,pl=new G,Wu=new G,ml=new G,nm=new G,gl=new G;class Ot extends wn{constructor(e=new Xt,n=new vr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){ml.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const _=f[h],v=l[h];_!==0&&(Wu.fromBufferAttribute(v,e),u?ml.addScaledVector(Wu,_):ml.addScaledVector(Wu.sub(n),_))}n.add(ml)}return n}raycast(e,n){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),fl.copy(r.boundingSphere),fl.applyMatrix4(l),zr.copy(e.ray).recast(e.near),!(fl.containsPoint(zr.origin)===!1&&(zr.intersectSphere(fl,tm)===null||zr.origin.distanceToSquared(tm)>(e.far-e.near)**2))&&(em.copy(l).invert(),zr.copy(e.ray).applyMatrix4(em),!(r.boundingBox!==null&&zr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,zr)))}_computeIntersections(e,n,r){let a;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,m=l.attributes.uv,_=l.attributes.uv1,v=l.attributes.normal,x=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let E=0,T=x.length;E<T;E++){const y=x[E],g=u[y.materialIndex],D=Math.max(y.start,S.start),b=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let C=D,V=b;C<V;C+=3){const I=f.getX(C),U=f.getX(C+1),B=f.getX(C+2);a=_l(this,g,e,r,m,_,v,I,U,B),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const E=Math.max(0,S.start),T=Math.min(f.count,S.start+S.count);for(let y=E,g=T;y<g;y+=3){const D=f.getX(y),b=f.getX(y+1),C=f.getX(y+2);a=_l(this,u,e,r,m,_,v,D,b,C),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(u))for(let E=0,T=x.length;E<T;E++){const y=x[E],g=u[y.materialIndex],D=Math.max(y.start,S.start),b=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let C=D,V=b;C<V;C+=3){const I=C,U=C+1,B=C+2;a=_l(this,g,e,r,m,_,v,I,U,B),a&&(a.faceIndex=Math.floor(C/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const E=Math.max(0,S.start),T=Math.min(h.count,S.start+S.count);for(let y=E,g=T;y<g;y+=3){const D=y,b=y+1,C=y+2;a=_l(this,u,e,r,m,_,v,D,b,C),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function d0(s,e,n,r,a,l,u,f){let h;if(e.side===Un?h=r.intersectTriangle(u,l,a,!0,f):h=r.intersectTriangle(a,l,u,e.side===Mr,f),h===null)return null;gl.copy(f),gl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(gl);return m<n.near||m>n.far?null:{distance:m,point:gl.clone(),object:s}}function _l(s,e,n,r,a,l,u,f,h,m){s.getVertexPosition(f,dl),s.getVertexPosition(h,hl),s.getVertexPosition(m,pl);const _=d0(s,e,n,r,dl,hl,pl,nm);if(_){const v=new G;li.getBarycoord(nm,dl,hl,pl,v),a&&(_.uv=li.getInterpolatedAttribute(a,f,h,m,v,new wt)),l&&(_.uv1=li.getInterpolatedAttribute(l,f,h,m,v,new wt)),u&&(_.normal=li.getInterpolatedAttribute(u,f,h,m,v,new G),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:f,b:h,c:m,normal:new G,materialIndex:0};li.getNormal(dl,hl,pl,x.normal),_.face=x,_.barycoord=v}return _}class yi extends Xt{constructor(e=1,n=1,r=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:l,depthSegments:u};const f=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const h=[],m=[],_=[],v=[];let x=0,S=0;E("z","y","x",-1,-1,r,n,e,u,l,0),E("z","y","x",1,-1,r,n,-e,u,l,1),E("x","z","y",1,1,e,r,n,a,u,2),E("x","z","y",1,-1,e,r,-n,a,u,3),E("x","y","z",1,-1,e,n,r,a,l,4),E("x","y","z",-1,-1,e,n,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new qt(m,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(v,2));function E(T,y,g,D,b,C,V,I,U,B,P){const A=C/U,z=V/B,J=C/2,Z=V/2,le=I/2,fe=U+1,oe=B+1;let ce=0,W=0;const ue=new G;for(let se=0;se<oe;se++){const O=se*z-Z;for(let re=0;re<fe;re++){const Ue=re*A-J;ue[T]=Ue*D,ue[y]=O*b,ue[g]=le,m.push(ue.x,ue.y,ue.z),ue[T]=0,ue[y]=0,ue[g]=I>0?1:-1,_.push(ue.x,ue.y,ue.z),v.push(re/U),v.push(1-se/B),ce+=1}}for(let se=0;se<B;se++)for(let O=0;O<U;O++){const re=x+O+fe*se,Ue=x+O+fe*(se+1),ee=x+(O+1)+fe*(se+1),de=x+(O+1)+fe*se;h.push(re,Ue,de),h.push(Ue,ee,de),W+=6}f.addGroup(S,W,P),S+=W,x+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ys(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Tn(s){const e={};for(let n=0;n<s.length;n++){const r=Ys(s[n]);for(const a in r)e[a]=r[a]}return e}function h0(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function sg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const p0={clone:Ys,merge:Tn};var m0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Er extends Ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m0,this.fragmentShader=g0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=h0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?n.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[a]={type:"m4",value:u.toArray()}:n.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class og extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=zi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new G,im=new wt,rm=new wt;class Zn extends og{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Gf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gf*2*Math.atan(Math.tan(Tu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,n){return this.getViewBounds(e,im,rm),n.subVectors(rm,im)}setViewOffset(e,n,r,a,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Tu*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,m=u.fullHeight;l+=u.offsetX*a/h,n-=u.offsetY*r/m,a*=u.width/h,r*=u.height/m}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Is=-90,Us=1;class _0 extends wn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Zn(Is,Us,e,n);a.layers=this.layers,this.add(a);const l=new Zn(Is,Us,e,n);l.layers=this.layers,this.add(l);const u=new Zn(Is,Us,e,n);u.layers=this.layers,this.add(u);const f=new Zn(Is,Us,e,n);f.layers=this.layers,this.add(f);const h=new Zn(Is,Us,e,n);h.layers=this.layers,this.add(h);const m=new Zn(Is,Us,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,l,u,f,h]=n;for(const m of n)this.remove(m);if(e===zi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Il)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,m,_]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,l),e.setRenderTarget(r,1,a),e.render(n,u),e.setRenderTarget(r,2,a),e.render(n,f),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(v,x,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class ag extends Fn{constructor(e,n,r,a,l,u,f,h,m,_){e=e!==void 0?e:[],n=n!==void 0?n:Gs,super(e,n,r,a,l,u,f,h,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class v0 extends Qr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new ag(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Si}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new yi(5,5,5),l=new Er({name:"CubemapFromEquirect",uniforms:Ys(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Un,blending:yr});l.uniforms.tEquirect.value=n;const u=new Ot(a,l),f=n.minFilter;return n.minFilter===Kr&&(n.minFilter=Si),new _0(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n,r,a){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,a);e.setRenderTarget(l)}}class x0 extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Xu=new G,y0=new G,S0=new ct;class Wr{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Xu.subVectors(r,n).cross(y0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Xu),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||S0.getNormalMatrix(e),a=this.coplanarPoint(Xu).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new Xo,vl=new G;class lg{constructor(e=new Wr,n=new Wr,r=new Wr,a=new Wr,l=new Wr,u=new Wr){this.planes=[e,n,r,a,l,u]}set(e,n,r,a,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(a),f[4].copy(l),f[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=zi){const r=this.planes,a=e.elements,l=a[0],u=a[1],f=a[2],h=a[3],m=a[4],_=a[5],v=a[6],x=a[7],S=a[8],E=a[9],T=a[10],y=a[11],g=a[12],D=a[13],b=a[14],C=a[15];if(r[0].setComponents(h-l,x-m,y-S,C-g).normalize(),r[1].setComponents(h+l,x+m,y+S,C+g).normalize(),r[2].setComponents(h+u,x+_,y+E,C+D).normalize(),r[3].setComponents(h-u,x-_,y-E,C-D).normalize(),r[4].setComponents(h-f,x-v,y-T,C-b).normalize(),n===zi)r[5].setComponents(h+f,x+v,y+T,C+b).normalize();else if(n===Il)r[5].setComponents(f,v,T,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(vl.x=a.normal.x>0?e.max.x:e.min.x,vl.y=a.normal.y>0?e.max.y:e.min.y,vl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(vl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cg extends Ks{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fl=new G,Ol=new G,sm=new zt,Fo=new ed,xl=new Xo,ju=new G,om=new G;class Xr extends wn{constructor(e=new Xt,n=new cg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,l=n.count;a<l;a++)Fl.fromBufferAttribute(n,a-1),Ol.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=Fl.distanceTo(Ol);e.setAttribute("lineDistance",new qt(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),xl.copy(r.boundingSphere),xl.applyMatrix4(a),xl.radius+=l,e.ray.intersectsSphere(xl)===!1)return;sm.copy(a).invert(),Fo.copy(e.ray).applyMatrix4(sm);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,m=this.isLineSegments?2:1,_=r.index,x=r.attributes.position;if(_!==null){const S=Math.max(0,u.start),E=Math.min(_.count,u.start+u.count);for(let T=S,y=E-1;T<y;T+=m){const g=_.getX(T),D=_.getX(T+1),b=yl(this,e,Fo,h,g,D);b&&n.push(b)}if(this.isLineLoop){const T=_.getX(E-1),y=_.getX(S),g=yl(this,e,Fo,h,T,y);g&&n.push(g)}}else{const S=Math.max(0,u.start),E=Math.min(x.count,u.start+u.count);for(let T=S,y=E-1;T<y;T+=m){const g=yl(this,e,Fo,h,T,T+1);g&&n.push(g)}if(this.isLineLoop){const T=yl(this,e,Fo,h,E-1,S);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function yl(s,e,n,r,a,l){const u=s.geometry.attributes.position;if(Fl.fromBufferAttribute(u,a),Ol.fromBufferAttribute(u,l),n.distanceSqToSegment(Fl,Ol,ju,om)>r)return;ju.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(ju);if(!(h<e.near||h>e.far))return{distance:h,point:om.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const am=new G,lm=new G;class M0 extends Xr{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let a=0,l=n.count;a<l;a+=2)am.fromBufferAttribute(n,a),lm.fromBufferAttribute(n,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+am.distanceTo(lm);e.setAttribute("lineDistance",new qt(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ug extends Ks{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const cm=new zt,Wf=new ed,Sl=new Xo,Ml=new G;class E0 extends wn{constructor(e=new Xt,n=new ug){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Sl.copy(r.boundingSphere),Sl.applyMatrix4(a),Sl.radius+=l,e.ray.intersectsSphere(Sl)===!1)return;cm.copy(a).invert(),Wf.copy(e.ray).applyMatrix4(cm);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,m=r.index,v=r.attributes.position;if(m!==null){const x=Math.max(0,u.start),S=Math.min(m.count,u.start+u.count);for(let E=x,T=S;E<T;E++){const y=m.getX(E);Ml.fromBufferAttribute(v,y),um(Ml,y,h,a,e,n,this)}}else{const x=Math.max(0,u.start),S=Math.min(v.count,u.start+u.count);for(let E=x,T=S;E<T;E++)Ml.fromBufferAttribute(v,E),um(Ml,E,h,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function um(s,e,n,r,a,l,u){const f=Wf.distanceSqToPoint(s);if(f<n){const h=new G;Wf.closestPointToPoint(s,h),h.applyMatrix4(r);const m=a.ray.origin.distanceTo(h);if(m<a.near||m>a.far)return;l.push({distance:m,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class In extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class fg extends Fn{constructor(e,n,r,a,l,u,f,h,m,_=zs){if(_!==zs&&_!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===zs&&(r=Zr),r===void 0&&_===js&&(r=Xs),super(null,a,l,u,f,h,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:ui,this.minFilter=h!==void 0?h:ui,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class T0{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const r=this.getUtoTmapping(e);return this.getPoint(r,n)}getPoints(e=5){const n=[];for(let r=0;r<=e;r++)n.push(this.getPoint(r/e));return n}getSpacedPoints(e=5){const n=[];for(let r=0;r<=e;r++)n.push(this.getPointAt(r/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let r,a=this.getPoint(0),l=0;n.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(a),n.push(l),a=r;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const r=this.getLengths();let a=0;const l=r.length;let u;n?u=n:u=e*r[l-1];let f=0,h=l-1,m;for(;f<=h;)if(a=Math.floor(f+(h-f)/2),m=r[a]-u,m<0)f=a+1;else if(m>0)h=a-1;else{h=a;break}if(a=h,r[a]===u)return a/(l-1);const _=r[a],x=r[a+1]-_,S=(u-_)/x;return(a+S)/(l-1)}getTangent(e,n){let a=e-1e-4,l=e+1e-4;a<0&&(a=0),l>1&&(l=1);const u=this.getPoint(a),f=this.getPoint(l),h=n||(u.isVector2?new wt:new G);return h.copy(f).sub(u).normalize(),h}getTangentAt(e,n){const r=this.getUtoTmapping(e);return this.getTangent(r,n)}computeFrenetFrames(e,n){const r=new G,a=[],l=[],u=[],f=new G,h=new zt;for(let S=0;S<=e;S++){const E=S/e;a[S]=this.getTangentAt(E,new G)}l[0]=new G,u[0]=new G;let m=Number.MAX_VALUE;const _=Math.abs(a[0].x),v=Math.abs(a[0].y),x=Math.abs(a[0].z);_<=m&&(m=_,r.set(1,0,0)),v<=m&&(m=v,r.set(0,1,0)),x<=m&&r.set(0,0,1),f.crossVectors(a[0],r).normalize(),l[0].crossVectors(a[0],f),u[0].crossVectors(a[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),u[S]=u[S-1].clone(),f.crossVectors(a[S-1],a[S]),f.length()>Number.EPSILON){f.normalize();const E=Math.acos(gt(a[S-1].dot(a[S]),-1,1));l[S].applyMatrix4(h.makeRotationAxis(f,E))}u[S].crossVectors(a[S],l[S])}if(n===!0){let S=Math.acos(gt(l[0].dot(l[e]),-1,1));S/=e,a[0].dot(f.crossVectors(l[0],l[e]))>0&&(S=-S);for(let E=1;E<=e;E++)l[E].applyMatrix4(h.makeRotationAxis(a[E],S*E)),u[E].crossVectors(a[E],l[E])}return{tangents:a,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function td(){let s=0,e=0,n=0,r=0;function a(l,u,f,h){s=l,e=f,n=-3*l+3*u-2*f-h,r=2*l-2*u+f+h}return{initCatmullRom:function(l,u,f,h,m){a(u,f,m*(f-l),m*(h-u))},initNonuniformCatmullRom:function(l,u,f,h,m,_,v){let x=(u-l)/m-(f-l)/(m+_)+(f-u)/_,S=(f-u)/_-(h-u)/(_+v)+(h-f)/v;x*=_,S*=_,a(u,f,x,S)},calc:function(l){const u=l*l,f=u*l;return s+e*l+n*u+r*f}}}const El=new G,qu=new td,Yu=new td,$u=new td;class fm extends T0{constructor(e=[],n=!1,r="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=r,this.tension=a}getPoint(e,n=new G){const r=n,a=this.points,l=a.length,u=(l-(this.closed?0:1))*e;let f=Math.floor(u),h=u-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:h===0&&f===l-1&&(f=l-2,h=1);let m,_;this.closed||f>0?m=a[(f-1)%l]:(El.subVectors(a[0],a[1]).add(a[0]),m=El);const v=a[f%l],x=a[(f+1)%l];if(this.closed||f+2<l?_=a[(f+2)%l]:(El.subVectors(a[l-1],a[l-2]).add(a[l-1]),_=El),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(v),S),T=Math.pow(v.distanceToSquared(x),S),y=Math.pow(x.distanceToSquared(_),S);T<1e-4&&(T=1),E<1e-4&&(E=T),y<1e-4&&(y=T),qu.initNonuniformCatmullRom(m.x,v.x,x.x,_.x,E,T,y),Yu.initNonuniformCatmullRom(m.y,v.y,x.y,_.y,E,T,y),$u.initNonuniformCatmullRom(m.z,v.z,x.z,_.z,E,T,y)}else this.curveType==="catmullrom"&&(qu.initCatmullRom(m.x,v.x,x.x,_.x,this.tension),Yu.initCatmullRom(m.y,v.y,x.y,_.y,this.tension),$u.initCatmullRom(m.z,v.z,x.z,_.z,this.tension));return r.set(qu.calc(h),Yu.calc(h),$u.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const a=e.points[n];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,r=this.points.length;n<r;n++){const a=this.points[n];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,r=e.points.length;n<r;n++){const a=e.points[n];this.points.push(new G().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class kl extends Xt{constructor(e=1,n=1,r=1,a=32,l=1,u=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:a,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:h};const m=this;a=Math.floor(a),l=Math.floor(l);const _=[],v=[],x=[],S=[];let E=0;const T=[],y=r/2;let g=0;D(),u===!1&&(e>0&&b(!0),n>0&&b(!1)),this.setIndex(_),this.setAttribute("position",new qt(v,3)),this.setAttribute("normal",new qt(x,3)),this.setAttribute("uv",new qt(S,2));function D(){const C=new G,V=new G;let I=0;const U=(n-e)/r;for(let B=0;B<=l;B++){const P=[],A=B/l,z=A*(n-e)+e;for(let J=0;J<=a;J++){const Z=J/a,le=Z*h+f,fe=Math.sin(le),oe=Math.cos(le);V.x=z*fe,V.y=-A*r+y,V.z=z*oe,v.push(V.x,V.y,V.z),C.set(fe,U,oe).normalize(),x.push(C.x,C.y,C.z),S.push(Z,1-A),P.push(E++)}T.push(P)}for(let B=0;B<a;B++)for(let P=0;P<l;P++){const A=T[P][B],z=T[P+1][B],J=T[P+1][B+1],Z=T[P][B+1];(e>0||P!==0)&&(_.push(A,z,Z),I+=3),(n>0||P!==l-1)&&(_.push(z,J,Z),I+=3)}m.addGroup(g,I,0),g+=I}function b(C){const V=E,I=new wt,U=new G;let B=0;const P=C===!0?e:n,A=C===!0?1:-1;for(let J=1;J<=a;J++)v.push(0,y*A,0),x.push(0,A,0),S.push(.5,.5),E++;const z=E;for(let J=0;J<=a;J++){const le=J/a*h+f,fe=Math.cos(le),oe=Math.sin(le);U.x=P*oe,U.y=y*A,U.z=P*fe,v.push(U.x,U.y,U.z),x.push(0,A,0),I.x=fe*.5+.5,I.y=oe*.5*A+.5,S.push(I.x,I.y),E++}for(let J=0;J<a;J++){const Z=V+J,le=z+J;C===!0?_.push(le,le+1,Z):_.push(le+1,le,Z),B+=3}m.addGroup(g,B,C===!0?1:2),g+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nd extends Xt{constructor(e=[],n=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:a};const l=[],u=[];f(a),m(r),_(),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(l.slice(),3)),this.setAttribute("uv",new qt(u,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function f(D){const b=new G,C=new G,V=new G;for(let I=0;I<n.length;I+=3)S(n[I+0],b),S(n[I+1],C),S(n[I+2],V),h(b,C,V,D)}function h(D,b,C,V){const I=V+1,U=[];for(let B=0;B<=I;B++){U[B]=[];const P=D.clone().lerp(C,B/I),A=b.clone().lerp(C,B/I),z=I-B;for(let J=0;J<=z;J++)J===0&&B===I?U[B][J]=P:U[B][J]=P.clone().lerp(A,J/z)}for(let B=0;B<I;B++)for(let P=0;P<2*(I-B)-1;P++){const A=Math.floor(P/2);P%2===0?(x(U[B][A+1]),x(U[B+1][A]),x(U[B][A])):(x(U[B][A+1]),x(U[B+1][A+1]),x(U[B+1][A]))}}function m(D){const b=new G;for(let C=0;C<l.length;C+=3)b.x=l[C+0],b.y=l[C+1],b.z=l[C+2],b.normalize().multiplyScalar(D),l[C+0]=b.x,l[C+1]=b.y,l[C+2]=b.z}function _(){const D=new G;for(let b=0;b<l.length;b+=3){D.x=l[b+0],D.y=l[b+1],D.z=l[b+2];const C=y(D)/2/Math.PI+.5,V=g(D)/Math.PI+.5;u.push(C,1-V)}E(),v()}function v(){for(let D=0;D<u.length;D+=6){const b=u[D+0],C=u[D+2],V=u[D+4],I=Math.max(b,C,V),U=Math.min(b,C,V);I>.9&&U<.1&&(b<.2&&(u[D+0]+=1),C<.2&&(u[D+2]+=1),V<.2&&(u[D+4]+=1))}}function x(D){l.push(D.x,D.y,D.z)}function S(D,b){const C=D*3;b.x=e[C+0],b.y=e[C+1],b.z=e[C+2]}function E(){const D=new G,b=new G,C=new G,V=new G,I=new wt,U=new wt,B=new wt;for(let P=0,A=0;P<l.length;P+=9,A+=6){D.set(l[P+0],l[P+1],l[P+2]),b.set(l[P+3],l[P+4],l[P+5]),C.set(l[P+6],l[P+7],l[P+8]),I.set(u[A+0],u[A+1]),U.set(u[A+2],u[A+3]),B.set(u[A+4],u[A+5]),V.copy(D).add(b).add(C).divideScalar(3);const z=y(V);T(I,A+0,D,z),T(U,A+2,b,z),T(B,A+4,C,z)}}function T(D,b,C,V){V<0&&D.x===1&&(u[b]=D.x-1),C.x===0&&C.z===0&&(u[b]=V/2/Math.PI+.5)}function y(D){return Math.atan2(D.z,-D.x)}function g(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nd(e.vertices,e.indices,e.radius,e.details)}}class id extends nd{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,l,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new id(e.radius,e.detail)}}class jo extends Xt{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const l=e/2,u=n/2,f=Math.floor(r),h=Math.floor(a),m=f+1,_=h+1,v=e/f,x=n/h,S=[],E=[],T=[],y=[];for(let g=0;g<_;g++){const D=g*x-u;for(let b=0;b<m;b++){const C=b*v-l;E.push(C,-D,0),T.push(0,0,1),y.push(b/f),y.push(1-g/h)}}for(let g=0;g<h;g++)for(let D=0;D<f;D++){const b=D+m*g,C=D+m*(g+1),V=D+1+m*(g+1),I=D+1+m*g;S.push(b,C,I),S.push(C,V,I)}this.setIndex(S),this.setAttribute("position",new qt(E,3)),this.setAttribute("normal",new qt(T,3)),this.setAttribute("uv",new qt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.width,e.height,e.widthSegments,e.heightSegments)}}class ko extends Xt{constructor(e=1,n=32,r=16,a=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:a,phiLength:l,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const h=Math.min(u+f,Math.PI);let m=0;const _=[],v=new G,x=new G,S=[],E=[],T=[],y=[];for(let g=0;g<=r;g++){const D=[],b=g/r;let C=0;g===0&&u===0?C=.5/n:g===r&&h===Math.PI&&(C=-.5/n);for(let V=0;V<=n;V++){const I=V/n;v.x=-e*Math.cos(a+I*l)*Math.sin(u+b*f),v.y=e*Math.cos(u+b*f),v.z=e*Math.sin(a+I*l)*Math.sin(u+b*f),E.push(v.x,v.y,v.z),x.copy(v).normalize(),T.push(x.x,x.y,x.z),y.push(I+C,1-b),D.push(m++)}_.push(D)}for(let g=0;g<r;g++)for(let D=0;D<n;D++){const b=_[g][D+1],C=_[g][D],V=_[g+1][D],I=_[g+1][D+1];(g!==0||u>0)&&S.push(b,C,I),(g!==r-1||h<Math.PI)&&S.push(C,V,I)}this.setIndex(S),this.setAttribute("position",new qt(E,3)),this.setAttribute("normal",new qt(T,3)),this.setAttribute("uv",new qt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Bo extends Xt{constructor(e=1,n=.4,r=12,a=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:a,arc:l},r=Math.floor(r),a=Math.floor(a);const u=[],f=[],h=[],m=[],_=new G,v=new G,x=new G;for(let S=0;S<=r;S++)for(let E=0;E<=a;E++){const T=E/a*l,y=S/r*Math.PI*2;v.x=(e+n*Math.cos(y))*Math.cos(T),v.y=(e+n*Math.cos(y))*Math.sin(T),v.z=n*Math.sin(y),f.push(v.x,v.y,v.z),_.x=e*Math.cos(T),_.y=e*Math.sin(T),x.subVectors(v,_).normalize(),h.push(x.x,x.y,x.z),m.push(E/a),m.push(S/r)}for(let S=1;S<=r;S++)for(let E=1;E<=a;E++){const T=(a+1)*S+E-1,y=(a+1)*(S-1)+E-1,g=(a+1)*(S-1)+E,D=(a+1)*S+E;u.push(T,y,D),u.push(y,g,D)}this.setIndex(u),this.setAttribute("position",new qt(f,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class w0 extends Ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class A0 extends Ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class R0 extends og{constructor(e=-1,n=1,r=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,f-=_*this.view.offsetY,h=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class C0 extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function dm(s,e,n,r){const a=P0(r);switch(n){case Wm:return s*e;case jm:return s*e;case qm:return s*e*2;case Ym:return s*e/a.components*a.byteLength;case Zf:return s*e/a.components*a.byteLength;case $m:return s*e*2/a.components*a.byteLength;case Qf:return s*e*2/a.components*a.byteLength;case Xm:return s*e*3/a.components*a.byteLength;case ci:return s*e*4/a.components*a.byteLength;case Jf:return s*e*4/a.components*a.byteLength;case Rl:case Cl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Pl:case bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case vf:case yf:return Math.max(s,16)*Math.max(e,8)/4;case _f:case xf:return Math.max(s,8)*Math.max(e,8)/2;case Sf:case Mf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ef:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Tf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Af:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Rf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Pf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case bf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Lf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Df:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case If:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Uf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ff:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Of:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ll:case kf:case Bf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Km:case zf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Hf:case Vf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function P0(s){switch(s){case Vi:case Hm:return{byteLength:1,components:1};case zo:case Vm:case Ho:return{byteLength:2,components:1};case $f:case Kf:return{byteLength:2,components:4};case Zr:case Yf:case Bi:return{byteLength:4,components:1};case Gm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qf);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dg(){let s=null,e=!1,n=null,r=null;function a(l,u){n(l,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function b0(s){const e=new WeakMap;function n(f,h){const m=f.array,_=f.usage,v=m.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,m,_),f.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,h,m){const _=h.array,v=h.updateRanges;if(s.bindBuffer(m,f),v.length===0)s.bufferSubData(m,0,_);else{v.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<v.length;S++){const E=v[x],T=v[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++x,v[x]=T)}v.length=x+1;for(let S=0,E=v.length;S<E;S++){const T=v[S];s.bufferSubData(m,T.start*_.BYTES_PER_ELEMENT,_,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,h));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,h),m.version=f.version}}return{get:a,remove:l,update:u}}var L0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,D0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,N0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,I0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,F0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,O0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,k0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,z0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,H0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,V0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,G0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,W0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,X0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,J0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ex=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ix=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ox=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ax="gl_FragColor = linearToOutputTexel( gl_FragColor );",lx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ux=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,px=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_x=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ex=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Tx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ax=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Px=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Dx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ix=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ux=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ox=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$x=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ey=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ty=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ny=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ry=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,oy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ay=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ly=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,hy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,py=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,my=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_y=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,My=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ey=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ty=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Py=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const by=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ly=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ny=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Oy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ky=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,By=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Xy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$y=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ky=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:L0,alphahash_pars_fragment:D0,alphamap_fragment:N0,alphamap_pars_fragment:I0,alphatest_fragment:U0,alphatest_pars_fragment:F0,aomap_fragment:O0,aomap_pars_fragment:k0,batching_pars_vertex:B0,batching_vertex:z0,begin_vertex:H0,beginnormal_vertex:V0,bsdfs:G0,iridescence_fragment:W0,bumpmap_pars_fragment:X0,clipping_planes_fragment:j0,clipping_planes_pars_fragment:q0,clipping_planes_pars_vertex:Y0,clipping_planes_vertex:$0,color_fragment:K0,color_pars_fragment:Z0,color_pars_vertex:Q0,color_vertex:J0,common:ex,cube_uv_reflection_fragment:tx,defaultnormal_vertex:nx,displacementmap_pars_vertex:ix,displacementmap_vertex:rx,emissivemap_fragment:sx,emissivemap_pars_fragment:ox,colorspace_fragment:ax,colorspace_pars_fragment:lx,envmap_fragment:cx,envmap_common_pars_fragment:ux,envmap_pars_fragment:fx,envmap_pars_vertex:dx,envmap_physical_pars_fragment:Ex,envmap_vertex:hx,fog_vertex:px,fog_pars_vertex:mx,fog_fragment:gx,fog_pars_fragment:_x,gradientmap_pars_fragment:vx,lightmap_pars_fragment:xx,lights_lambert_fragment:yx,lights_lambert_pars_fragment:Sx,lights_pars_begin:Mx,lights_toon_fragment:Tx,lights_toon_pars_fragment:wx,lights_phong_fragment:Ax,lights_phong_pars_fragment:Rx,lights_physical_fragment:Cx,lights_physical_pars_fragment:Px,lights_fragment_begin:bx,lights_fragment_maps:Lx,lights_fragment_end:Dx,logdepthbuf_fragment:Nx,logdepthbuf_pars_fragment:Ix,logdepthbuf_pars_vertex:Ux,logdepthbuf_vertex:Fx,map_fragment:Ox,map_pars_fragment:kx,map_particle_fragment:Bx,map_particle_pars_fragment:zx,metalnessmap_fragment:Hx,metalnessmap_pars_fragment:Vx,morphinstance_vertex:Gx,morphcolor_vertex:Wx,morphnormal_vertex:Xx,morphtarget_pars_vertex:jx,morphtarget_vertex:qx,normal_fragment_begin:Yx,normal_fragment_maps:$x,normal_pars_fragment:Kx,normal_pars_vertex:Zx,normal_vertex:Qx,normalmap_pars_fragment:Jx,clearcoat_normal_fragment_begin:ey,clearcoat_normal_fragment_maps:ty,clearcoat_pars_fragment:ny,iridescence_pars_fragment:iy,opaque_fragment:ry,packing:sy,premultiplied_alpha_fragment:oy,project_vertex:ay,dithering_fragment:ly,dithering_pars_fragment:cy,roughnessmap_fragment:uy,roughnessmap_pars_fragment:fy,shadowmap_pars_fragment:dy,shadowmap_pars_vertex:hy,shadowmap_vertex:py,shadowmask_pars_fragment:my,skinbase_vertex:gy,skinning_pars_vertex:_y,skinning_vertex:vy,skinnormal_vertex:xy,specularmap_fragment:yy,specularmap_pars_fragment:Sy,tonemapping_fragment:My,tonemapping_pars_fragment:Ey,transmission_fragment:Ty,transmission_pars_fragment:wy,uv_pars_fragment:Ay,uv_pars_vertex:Ry,uv_vertex:Cy,worldpos_vertex:Py,background_vert:by,background_frag:Ly,backgroundCube_vert:Dy,backgroundCube_frag:Ny,cube_vert:Iy,cube_frag:Uy,depth_vert:Fy,depth_frag:Oy,distanceRGBA_vert:ky,distanceRGBA_frag:By,equirect_vert:zy,equirect_frag:Hy,linedashed_vert:Vy,linedashed_frag:Gy,meshbasic_vert:Wy,meshbasic_frag:Xy,meshlambert_vert:jy,meshlambert_frag:qy,meshmatcap_vert:Yy,meshmatcap_frag:$y,meshnormal_vert:Ky,meshnormal_frag:Zy,meshphong_vert:Qy,meshphong_frag:Jy,meshphysical_vert:eS,meshphysical_frag:tS,meshtoon_vert:nS,meshtoon_frag:iS,points_vert:rS,points_frag:sS,shadow_vert:oS,shadow_frag:aS,sprite_vert:lS,sprite_frag:cS},Le={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},vi={basic:{uniforms:Tn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Tn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Rt(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Tn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Tn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Tn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Rt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Tn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Tn([Le.points,Le.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Tn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Tn([Le.common,Le.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Tn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Tn([Le.sprite,Le.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:Tn([Le.common,Le.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:Tn([Le.lights,Le.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};vi.physical={uniforms:Tn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Tl={r:0,b:0,g:0},Vr=new Gi,uS=new zt;function fS(s,e,n,r,a,l,u){const f=new Rt(0);let h=l===!0?0:1,m,_,v=null,x=0,S=null;function E(b){let C=b.isScene===!0?b.background:null;return C&&C.isTexture&&(C=(b.backgroundBlurriness>0?n:e).get(C)),C}function T(b){let C=!1;const V=E(b);V===null?g(f,h):V&&V.isColor&&(g(V,1),C=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,u):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(b,C){const V=E(C);V&&(V.isCubeTexture||V.mapping===Bl)?(_===void 0&&(_=new Ot(new yi(1,1,1),new Er({name:"BackgroundCubeMaterial",uniforms:Ys(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(I,U,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Vr.copy(C.backgroundRotation),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),_.material.uniforms.envMap.value=V,_.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(uS.makeRotationFromEuler(Vr)),_.material.toneMapped=Tt.getTransfer(V.colorSpace)!==Pt,(v!==V||x!==V.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,v=V,x=V.version,S=s.toneMapping),_.layers.enableAll(),b.unshift(_,_.geometry,_.material,0,0,null)):V&&V.isTexture&&(m===void 0&&(m=new Ot(new jo(2,2),new Er({name:"BackgroundMaterial",uniforms:Ys(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=V,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(V.colorSpace)!==Pt,V.matrixAutoUpdate===!0&&V.updateMatrix(),m.material.uniforms.uvTransform.value.copy(V.matrix),(v!==V||x!==V.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,v=V,x=V.version,S=s.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null))}function g(b,C){b.getRGB(Tl,sg(s)),r.buffers.color.setClear(Tl.r,Tl.g,Tl.b,C,u)}function D(){_!==void 0&&(_.geometry.dispose(),_.material.dispose()),m!==void 0&&(m.geometry.dispose(),m.material.dispose())}return{getClearColor:function(){return f},setClearColor:function(b,C=1){f.set(b),h=C,g(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(b){h=b,g(f,h)},render:T,addToRenderList:y,dispose:D}}function dS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let l=a,u=!1;function f(A,z,J,Z,le){let fe=!1;const oe=v(Z,J,z);l!==oe&&(l=oe,m(l.object)),fe=S(A,Z,J,le),fe&&E(A,Z,J,le),le!==null&&e.update(le,s.ELEMENT_ARRAY_BUFFER),(fe||u)&&(u=!1,C(A,z,J,Z),le!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function h(){return s.createVertexArray()}function m(A){return s.bindVertexArray(A)}function _(A){return s.deleteVertexArray(A)}function v(A,z,J){const Z=J.wireframe===!0;let le=r[A.id];le===void 0&&(le={},r[A.id]=le);let fe=le[z.id];fe===void 0&&(fe={},le[z.id]=fe);let oe=fe[Z];return oe===void 0&&(oe=x(h()),fe[Z]=oe),oe}function x(A){const z=[],J=[],Z=[];for(let le=0;le<n;le++)z[le]=0,J[le]=0,Z[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:J,attributeDivisors:Z,object:A,attributes:{},index:null}}function S(A,z,J,Z){const le=l.attributes,fe=z.attributes;let oe=0;const ce=J.getAttributes();for(const W in ce)if(ce[W].location>=0){const se=le[W];let O=fe[W];if(O===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(O=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(O=A.instanceColor)),se===void 0||se.attribute!==O||O&&se.data!==O.data)return!0;oe++}return l.attributesNum!==oe||l.index!==Z}function E(A,z,J,Z){const le={},fe=z.attributes;let oe=0;const ce=J.getAttributes();for(const W in ce)if(ce[W].location>=0){let se=fe[W];se===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(se=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(se=A.instanceColor));const O={};O.attribute=se,se&&se.data&&(O.data=se.data),le[W]=O,oe++}l.attributes=le,l.attributesNum=oe,l.index=Z}function T(){const A=l.newAttributes;for(let z=0,J=A.length;z<J;z++)A[z]=0}function y(A){g(A,0)}function g(A,z){const J=l.newAttributes,Z=l.enabledAttributes,le=l.attributeDivisors;J[A]=1,Z[A]===0&&(s.enableVertexAttribArray(A),Z[A]=1),le[A]!==z&&(s.vertexAttribDivisor(A,z),le[A]=z)}function D(){const A=l.newAttributes,z=l.enabledAttributes;for(let J=0,Z=z.length;J<Z;J++)z[J]!==A[J]&&(s.disableVertexAttribArray(J),z[J]=0)}function b(A,z,J,Z,le,fe,oe){oe===!0?s.vertexAttribIPointer(A,z,J,le,fe):s.vertexAttribPointer(A,z,J,Z,le,fe)}function C(A,z,J,Z){T();const le=Z.attributes,fe=J.getAttributes(),oe=z.defaultAttributeValues;for(const ce in fe){const W=fe[ce];if(W.location>=0){let ue=le[ce];if(ue===void 0&&(ce==="instanceMatrix"&&A.instanceMatrix&&(ue=A.instanceMatrix),ce==="instanceColor"&&A.instanceColor&&(ue=A.instanceColor)),ue!==void 0){const se=ue.normalized,O=ue.itemSize,re=e.get(ue);if(re===void 0)continue;const Ue=re.buffer,ee=re.type,de=re.bytesPerElement,Me=ee===s.INT||ee===s.UNSIGNED_INT||ue.gpuType===Yf;if(ue.isInterleavedBufferAttribute){const ve=ue.data,Ae=ve.stride,Ne=ue.offset;if(ve.isInstancedInterleavedBuffer){for(let Ze=0;Ze<W.locationSize;Ze++)g(W.location+Ze,ve.meshPerAttribute);A.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ze=0;Ze<W.locationSize;Ze++)y(W.location+Ze);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let Ze=0;Ze<W.locationSize;Ze++)b(W.location+Ze,O/W.locationSize,ee,se,Ae*de,(Ne+O/W.locationSize*Ze)*de,Me)}else{if(ue.isInstancedBufferAttribute){for(let ve=0;ve<W.locationSize;ve++)g(W.location+ve,ue.meshPerAttribute);A.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ve=0;ve<W.locationSize;ve++)y(W.location+ve);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let ve=0;ve<W.locationSize;ve++)b(W.location+ve,O/W.locationSize,ee,se,O*de,O/W.locationSize*ve*de,Me)}}else if(oe!==void 0){const se=oe[ce];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(W.location,se);break;case 3:s.vertexAttrib3fv(W.location,se);break;case 4:s.vertexAttrib4fv(W.location,se);break;default:s.vertexAttrib1fv(W.location,se)}}}}D()}function V(){B();for(const A in r){const z=r[A];for(const J in z){const Z=z[J];for(const le in Z)_(Z[le].object),delete Z[le];delete z[J]}delete r[A]}}function I(A){if(r[A.id]===void 0)return;const z=r[A.id];for(const J in z){const Z=z[J];for(const le in Z)_(Z[le].object),delete Z[le];delete z[J]}delete r[A.id]}function U(A){for(const z in r){const J=r[z];if(J[A.id]===void 0)continue;const Z=J[A.id];for(const le in Z)_(Z[le].object),delete Z[le];delete J[A.id]}}function B(){P(),u=!0,l!==a&&(l=a,m(l.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:B,resetDefaultState:P,dispose:V,releaseStatesOfGeometry:I,releaseStatesOfProgram:U,initAttributes:T,enableAttribute:y,disableUnusedAttributes:D}}function hS(s,e,n){let r;function a(m){r=m}function l(m,_){s.drawArrays(r,m,_),n.update(_,r,1)}function u(m,_,v){v!==0&&(s.drawArraysInstanced(r,m,_,v),n.update(_,r,v))}function f(m,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,v);let S=0;for(let E=0;E<v;E++)S+=_[E];n.update(S,r,1)}function h(m,_,v,x){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)u(m[E],_[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,_,0,x,0,v);let E=0;for(let T=0;T<v;T++)E+=_[T]*x[T];n.update(E,r,1)}}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function pS(s,e,n,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(U){return!(U!==ci&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(U){const B=U===Ho&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Vi&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Bi&&!B)}function h(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=h(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),V=E>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:D,maxVaryings:b,maxFragmentUniforms:C,vertexTextures:V,maxSamples:I}}function mS(s){const e=this;let n=null,r=0,a=!1,l=!1;const u=new Wr,f=new ct,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||r!==0||a;return a=x,r=v.length,S},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,x){n=_(v,x,0)},this.setState=function(v,x,S){const E=v.clippingPlanes,T=v.clipIntersection,y=v.clipShadows,g=s.get(v);if(!a||E===null||E.length===0||l&&!y)l?_(null):m();else{const D=l?0:r,b=D*4;let C=g.clippingState||null;h.value=C,C=_(E,x,b,S);for(let V=0;V!==b;++V)C[V]=n[V];g.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,x,S,E){const T=v!==null?v.length:0;let y=null;if(T!==0){if(y=h.value,E!==!0||y===null){const g=S+T*4,D=x.matrixWorldInverse;f.getNormalMatrix(D),(y===null||y.length<g)&&(y=new Float32Array(g));for(let b=0,C=S;b!==T;++b,C+=4)u.copy(v[b]).applyMatrix4(D,f),u.normal.toArray(y,C),y[C+3]=u.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function gS(s){let e=new WeakMap;function n(u,f){return f===hf?u.mapping=Gs:f===pf&&(u.mapping=Ws),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===hf||f===pf)if(e.has(u)){const h=e.get(u).texture;return n(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const m=new v0(h.height);return m.fromEquirectangularTexture(s,u),e.set(u,m),u.addEventListener("dispose",a),n(m.texture,u.mapping)}else return null}}return u}function a(u){const f=u.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const ks=4,hm=[.125,.215,.35,.446,.526,.582],Yr=20,Ku=new R0,pm=new Rt;let Zu=null,Qu=0,Ju=0,ef=!1;const jr=(1+Math.sqrt(5))/2,Fs=1/jr,mm=[new G(-jr,Fs,0),new G(jr,Fs,0),new G(-Fs,0,jr),new G(Fs,0,jr),new G(0,jr,-Fs),new G(0,jr,Fs),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class gm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Zu=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),Ju=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zu,Qu,Ju),this._renderer.xr.enabled=ef,e.scissorTest=!1,wl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Gs||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zu=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),Ju=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:Ho,format:ci,colorSpace:qs,depthBuffer:!1},a=_m(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_m(e,n,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_S(l)),this._blurMaterial=vS(l,e,n)}return a}_compileMaterial(e){const n=new Ot(this._lodPlanes[0],e);this._renderer.compile(n,Ku)}_sceneToCubeUV(e,n,r,a){const f=new Zn(90,1,n,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(pm),_.toneMapping=Sr,_.autoClear=!1;const S=new vr({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),E=new Ot(new yi,S);let T=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,T=!0):(S.color.copy(pm),T=!0);for(let g=0;g<6;g++){const D=g%3;D===0?(f.up.set(0,h[g],0),f.lookAt(m[g],0,0)):D===1?(f.up.set(0,0,h[g]),f.lookAt(0,m[g],0)):(f.up.set(0,h[g],0),f.lookAt(0,0,m[g]));const b=this._cubeSize;wl(a,D*b,g>2?b:0,b,b),_.setRenderTarget(a),T&&_.render(E,f),_.render(e,f)}E.geometry.dispose(),E.material.dispose(),_.toneMapping=x,_.autoClear=v,e.background=y}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Gs||e.mapping===Ws;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=xm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vm());const l=a?this._cubemapMaterial:this._equirectMaterial,u=new Ot(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;wl(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(u,Ku)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=mm[(a-l-1)%mm.length];this._blur(e,l-1,l,u,f)}n.autoClear=r}_blur(e,n,r,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,a,"latitudinal",l),this._halfBlur(u,e,r,r,a,"longitudinal",l)}_halfBlur(e,n,r,a,l,u,f){const h=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new Ot(this._lodPlanes[a],m),x=m.uniforms,S=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Yr-1),T=l/E,y=isFinite(l)?1+Math.floor(_*T):Yr;y>Yr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Yr}`);const g=[];let D=0;for(let U=0;U<Yr;++U){const B=U/T,P=Math.exp(-B*B/2);g.push(P),U===0?D+=P:U<y&&(D+=2*P)}for(let U=0;U<g.length;U++)g[U]=g[U]/D;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=u==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:b}=this;x.dTheta.value=E,x.mipInt.value=b-r;const C=this._sizeLods[a],V=3*C*(a>b-ks?a-b+ks:0),I=4*(this._cubeSize-C);wl(n,V,I,3*C,2*C),h.setRenderTarget(n),h.render(v,Ku)}}function _S(s){const e=[],n=[],r=[];let a=s;const l=s-ks+1+hm.length;for(let u=0;u<l;u++){const f=Math.pow(2,a);n.push(f);let h=1/f;u>s-ks?h=hm[u-s+ks-1]:u===0&&(h=0),r.push(h);const m=1/(f-2),_=-m,v=1+m,x=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,E=6,T=3,y=2,g=1,D=new Float32Array(T*E*S),b=new Float32Array(y*E*S),C=new Float32Array(g*E*S);for(let I=0;I<S;I++){const U=I%3*2/3-1,B=I>2?0:-1,P=[U,B,0,U+2/3,B,0,U+2/3,B+1,0,U,B,0,U+2/3,B+1,0,U,B+1,0];D.set(P,T*E*I),b.set(x,y*E*I);const A=[I,I,I,I,I,I];C.set(A,g*E*I)}const V=new Xt;V.setAttribute("position",new fi(D,T)),V.setAttribute("uv",new fi(b,y)),V.setAttribute("faceIndex",new fi(C,g)),e.push(V),a>ks&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function _m(s,e,n){const r=new Qr(s,e,n);return r.texture.mapping=Bl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function wl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function vS(s,e,n){const r=new Float32Array(Yr),a=new G(0,1,0);return new Er({name:"SphericalGaussianBlur",defines:{n:Yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function vm(){return new Er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function xm(){return new Er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function rd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function xS(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const h=f.mapping,m=h===hf||h===pf,_=h===Gs||h===Ws;if(m||_){let v=e.get(f);const x=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return n===null&&(n=new gm(s)),v=m?n.fromEquirectangular(f,v):n.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const S=f.image;return m&&S&&S.height>0||_&&S&&a(S)?(n===null&&(n=new gm(s)),v=m?n.fromEquirectangular(f):n.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function a(f){let h=0;const m=6;for(let _=0;_<m;_++)f[_]!==void 0&&h++;return h===m}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function yS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Os("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function SS(s,e,n,r){const a={},l=new WeakMap;function u(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",u),delete a[x.id];const S=l.get(x);S&&(e.remove(S),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function f(v,x){return a[x.id]===!0||(x.addEventListener("dispose",u),a[x.id]=!0,n.memory.geometries++),x}function h(v){const x=v.attributes;for(const S in x)e.update(x[S],s.ARRAY_BUFFER)}function m(v){const x=[],S=v.index,E=v.attributes.position;let T=0;if(S!==null){const D=S.array;T=S.version;for(let b=0,C=D.length;b<C;b+=3){const V=D[b+0],I=D[b+1],U=D[b+2];x.push(V,I,I,U,U,V)}}else if(E!==void 0){const D=E.array;T=E.version;for(let b=0,C=D.length/3-1;b<C;b+=3){const V=b+0,I=b+1,U=b+2;x.push(V,I,I,U,U,V)}}else return;const y=new(Qm(x)?rg:ig)(x,1);y.version=T;const g=l.get(v);g&&e.remove(g),l.set(v,y)}function _(v){const x=l.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&m(v)}else m(v);return l.get(v)}return{get:f,update:h,getWireframeAttribute:_}}function MS(s,e,n){let r;function a(x){r=x}let l,u;function f(x){l=x.type,u=x.bytesPerElement}function h(x,S){s.drawElements(r,S,l,x*u),n.update(S,r,1)}function m(x,S,E){E!==0&&(s.drawElementsInstanced(r,S,l,x*u,E),n.update(S,r,E))}function _(x,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,x,0,E);let y=0;for(let g=0;g<E;g++)y+=S[g];n.update(y,r,1)}function v(x,S,E,T){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)m(x[g]/u,S[g],T[g]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,l,x,0,T,0,E);let g=0;for(let D=0;D<E;D++)g+=S[D]*T[D];n.update(g,r,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function ES(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=f*(l/3);break;case s.LINES:n.lines+=f*(l/2);break;case s.LINE_STRIP:n.lines+=f*(l-1);break;case s.LINE_LOOP:n.lines+=f*l;break;case s.POINTS:n.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function TS(s,e,n){const r=new WeakMap,a=new jt;function l(u,f,h){const m=u.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=_!==void 0?_.length:0;let x=r.get(f);if(x===void 0||x.count!==v){let A=function(){B.dispose(),r.delete(f),f.removeEventListener("dispose",A)};var S=A;x!==void 0&&x.texture.dispose();const E=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,g=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],b=f.morphAttributes.color||[];let C=0;E===!0&&(C=1),T===!0&&(C=2),y===!0&&(C=3);let V=f.attributes.position.count*C,I=1;V>e.maxTextureSize&&(I=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const U=new Float32Array(V*I*4*v),B=new eg(U,V,I,v);B.type=Bi,B.needsUpdate=!0;const P=C*4;for(let z=0;z<v;z++){const J=g[z],Z=D[z],le=b[z],fe=V*I*4*z;for(let oe=0;oe<J.count;oe++){const ce=oe*P;E===!0&&(a.fromBufferAttribute(J,oe),U[fe+ce+0]=a.x,U[fe+ce+1]=a.y,U[fe+ce+2]=a.z,U[fe+ce+3]=0),T===!0&&(a.fromBufferAttribute(Z,oe),U[fe+ce+4]=a.x,U[fe+ce+5]=a.y,U[fe+ce+6]=a.z,U[fe+ce+7]=0),y===!0&&(a.fromBufferAttribute(le,oe),U[fe+ce+8]=a.x,U[fe+ce+9]=a.y,U[fe+ce+10]=a.z,U[fe+ce+11]=le.itemSize===4?a.w:1)}}x={count:v,texture:B,size:new wt(V,I)},r.set(f,x),f.addEventListener("dispose",A)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const T=f.morphTargetsRelative?1:1-E;h.getUniforms().setValue(s,"morphTargetBaseInfluence",T),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function wS(s,e,n,r){let a=new WeakMap;function l(h){const m=r.render.frame,_=h.geometry,v=e.get(h,_);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==m&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return v}function u(){a=new WeakMap}function f(h){const m=h.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:l,dispose:u}}const hg=new Fn,ym=new fg(1,1),pg=new eg,mg=new n0,gg=new ag,Sm=[],Mm=[],Em=new Float32Array(16),Tm=new Float32Array(9),wm=new Float32Array(4);function Zs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let l=Sm[a];if(l===void 0&&(l=new Float32Array(a),Sm[a]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=n,s[u].toArray(l,f)}return l}function Jt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function en(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function zl(s,e){let n=Mm[e];n===void 0&&(n=new Int32Array(e),Mm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function AS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function RS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;s.uniform2fv(this.addr,e),en(n,e)}}function CS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Jt(n,e))return;s.uniform3fv(this.addr,e),en(n,e)}}function PS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;s.uniform4fv(this.addr,e),en(n,e)}}function bS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;wm.set(r),s.uniformMatrix2fv(this.addr,!1,wm),en(n,r)}}function LS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;Tm.set(r),s.uniformMatrix3fv(this.addr,!1,Tm),en(n,r)}}function DS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;Em.set(r),s.uniformMatrix4fv(this.addr,!1,Em),en(n,r)}}function NS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function IS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;s.uniform2iv(this.addr,e),en(n,e)}}function US(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;s.uniform3iv(this.addr,e),en(n,e)}}function FS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;s.uniform4iv(this.addr,e),en(n,e)}}function OS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function kS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;s.uniform2uiv(this.addr,e),en(n,e)}}function BS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;s.uniform3uiv(this.addr,e),en(n,e)}}function zS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;s.uniform4uiv(this.addr,e),en(n,e)}}function HS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(ym.compareFunction=Zm,l=ym):l=hg,n.setTexture2D(e||l,a)}function VS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||mg,a)}function GS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||gg,a)}function WS(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||pg,a)}function XS(s){switch(s){case 5126:return AS;case 35664:return RS;case 35665:return CS;case 35666:return PS;case 35674:return bS;case 35675:return LS;case 35676:return DS;case 5124:case 35670:return NS;case 35667:case 35671:return IS;case 35668:case 35672:return US;case 35669:case 35673:return FS;case 5125:return OS;case 36294:return kS;case 36295:return BS;case 36296:return zS;case 35678:case 36198:case 36298:case 36306:case 35682:return HS;case 35679:case 36299:case 36307:return VS;case 35680:case 36300:case 36308:case 36293:return GS;case 36289:case 36303:case 36311:case 36292:return WS}}function jS(s,e){s.uniform1fv(this.addr,e)}function qS(s,e){const n=Zs(e,this.size,2);s.uniform2fv(this.addr,n)}function YS(s,e){const n=Zs(e,this.size,3);s.uniform3fv(this.addr,n)}function $S(s,e){const n=Zs(e,this.size,4);s.uniform4fv(this.addr,n)}function KS(s,e){const n=Zs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function ZS(s,e){const n=Zs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function QS(s,e){const n=Zs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function JS(s,e){s.uniform1iv(this.addr,e)}function eM(s,e){s.uniform2iv(this.addr,e)}function tM(s,e){s.uniform3iv(this.addr,e)}function nM(s,e){s.uniform4iv(this.addr,e)}function iM(s,e){s.uniform1uiv(this.addr,e)}function rM(s,e){s.uniform2uiv(this.addr,e)}function sM(s,e){s.uniform3uiv(this.addr,e)}function oM(s,e){s.uniform4uiv(this.addr,e)}function aM(s,e,n){const r=this.cache,a=e.length,l=zl(n,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let u=0;u!==a;++u)n.setTexture2D(e[u]||hg,l[u])}function lM(s,e,n){const r=this.cache,a=e.length,l=zl(n,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let u=0;u!==a;++u)n.setTexture3D(e[u]||mg,l[u])}function cM(s,e,n){const r=this.cache,a=e.length,l=zl(n,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let u=0;u!==a;++u)n.setTextureCube(e[u]||gg,l[u])}function uM(s,e,n){const r=this.cache,a=e.length,l=zl(n,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let u=0;u!==a;++u)n.setTexture2DArray(e[u]||pg,l[u])}function fM(s){switch(s){case 5126:return jS;case 35664:return qS;case 35665:return YS;case 35666:return $S;case 35674:return KS;case 35675:return ZS;case 35676:return QS;case 5124:case 35670:return JS;case 35667:case 35671:return eM;case 35668:case 35672:return tM;case 35669:case 35673:return nM;case 5125:return iM;case 36294:return rM;case 36295:return sM;case 36296:return oM;case 35678:case 36198:case 36298:case 36306:case 35682:return aM;case 35679:case 36299:case 36307:return lM;case 35680:case 36300:case 36308:case 36293:return cM;case 36289:case 36303:case 36311:case 36292:return uM}}class dM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=XS(n.type)}}class hM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=fM(n.type)}}class pM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const f=a[l];f.setValue(e,n[f.id],r)}}}const tf=/(\w+)(\])?(\[|\.)?/g;function Am(s,e){s.seq.push(e),s.map[e.id]=e}function mM(s,e,n){const r=s.name,a=r.length;for(tf.lastIndex=0;;){const l=tf.exec(r),u=tf.lastIndex;let f=l[1];const h=l[2]==="]",m=l[3];if(h&&(f=f|0),m===void 0||m==="["&&u+2===a){Am(n,m===void 0?new dM(f,s,e):new hM(f,s,e));break}else{let v=n.map[f];v===void 0&&(v=new pM(f),Am(n,v)),n=v}}}class Dl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(n,a),u=e.getUniformLocation(n,l.name);mM(l,u,this)}}setValue(e,n,r,a){const l=this.map[n];l!==void 0&&l.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let l=0,u=n.length;l!==u;++l){const f=n[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in n&&r.push(u)}return r}}function Rm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const gM=37297;let _M=0;function vM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=a;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return r.join(`
`)}const Cm=new ct;function xM(s){Tt._getMatrix(Cm,Tt.workingColorSpace,s);const e=`mat3( ${Cm.elements.map(n=>n.toFixed(4))} )`;switch(Tt.getTransfer(s)){case Nl:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Pm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const u=parseInt(l[1]);return n.toUpperCase()+`

`+a+`

`+vM(s.getShaderSource(e),u)}else return a}function yM(s,e){const n=xM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function SM(s,e){let n;switch(e){case Rv:n="Linear";break;case Cv:n="Reinhard";break;case Pv:n="Cineon";break;case bv:n="ACESFilmic";break;case Dv:n="AgX";break;case Nv:n="Neutral";break;case Lv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Al=new G;function MM(){Tt.getLuminanceCoefficients(Al);const s=Al.x.toFixed(4),e=Al.y.toFixed(4),n=Al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function EM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function TM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function wM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),n[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return n}function Oo(s){return s!==""}function bm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xf(s){return s.replace(AM,CM)}const RM=new Map;function CM(s,e){let n=ut[e];if(n===void 0){const r=RM.get(e);if(r!==void 0)n=ut[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Xf(n)}const PM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dm(s){return s.replace(PM,bM)}function bM(s,e,n,r){let a="";for(let l=parseInt(e);l<parseInt(n);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Nm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function LM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===km?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===ov?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function DM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Gs:case Ws:e="ENVMAP_TYPE_CUBE";break;case Bl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function NM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ws:e="ENVMAP_MODE_REFRACTION";break}return e}function IM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Bm:e="ENVMAP_BLENDING_MULTIPLY";break;case wv:e="ENVMAP_BLENDING_MIX";break;case Av:e="ENVMAP_BLENDING_ADD";break}return e}function UM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function FM(s,e,n,r){const a=s.getContext(),l=n.defines;let u=n.vertexShader,f=n.fragmentShader;const h=LM(n),m=DM(n),_=NM(n),v=IM(n),x=UM(n),S=EM(n),E=TM(l),T=a.createProgram();let y,g,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Oo).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Oo).join(`
`),g.length>0&&(g+=`
`)):(y=[Nm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),g=[Nm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Sr?"#define TONE_MAPPING":"",n.toneMapping!==Sr?ut.tonemapping_pars_fragment:"",n.toneMapping!==Sr?SM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,yM("linearToOutputTexel",n.outputColorSpace),MM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Oo).join(`
`)),u=Xf(u),u=bm(u,n),u=Lm(u,n),f=Xf(f),f=bm(f,n),f=Lm(f,n),u=Dm(u),f=Dm(f),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===Hp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Hp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const b=D+y+u,C=D+g+f,V=Rm(a,a.VERTEX_SHADER,b),I=Rm(a,a.FRAGMENT_SHADER,C);a.attachShader(T,V),a.attachShader(T,I),n.index0AttributeName!==void 0?a.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function U(z){if(s.debug.checkShaderErrors){const J=a.getProgramInfoLog(T).trim(),Z=a.getShaderInfoLog(V).trim(),le=a.getShaderInfoLog(I).trim();let fe=!0,oe=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(fe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,T,V,I);else{const ce=Pm(a,V,"vertex"),W=Pm(a,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+J+`
`+ce+`
`+W)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(Z===""||le==="")&&(oe=!1);oe&&(z.diagnostics={runnable:fe,programLog:J,vertexShader:{log:Z,prefix:y},fragmentShader:{log:le,prefix:g}})}a.deleteShader(V),a.deleteShader(I),B=new Dl(a,T),P=wM(a,T)}let B;this.getUniforms=function(){return B===void 0&&U(this),B};let P;this.getAttributes=function(){return P===void 0&&U(this),P};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(T,gM)),A},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=_M++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=V,this.fragmentShader=I,this}let OM=0;class kM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new BM(e),n.set(e,r)),r}}class BM{constructor(e){this.id=OM++,this.code=e,this.usedTimes=0}}function zM(s,e,n,r,a,l,u){const f=new tg,h=new kM,m=new Set,_=[],v=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return m.add(P),P===0?"uv":`uv${P}`}function y(P,A,z,J,Z){const le=J.fog,fe=Z.geometry,oe=P.isMeshStandardMaterial?J.environment:null,ce=(P.isMeshStandardMaterial?n:e).get(P.envMap||oe),W=ce&&ce.mapping===Bl?ce.image.height:null,ue=E[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const se=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,O=se!==void 0?se.length:0;let re=0;fe.morphAttributes.position!==void 0&&(re=1),fe.morphAttributes.normal!==void 0&&(re=2),fe.morphAttributes.color!==void 0&&(re=3);let Ue,ee,de,Me;if(ue){const yt=vi[ue];Ue=yt.vertexShader,ee=yt.fragmentShader}else Ue=P.vertexShader,ee=P.fragmentShader,h.update(P),de=h.getVertexShaderID(P),Me=h.getFragmentShaderID(P);const ve=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),Ne=Z.isInstancedMesh===!0,Ze=Z.isBatchedMesh===!0,me=!!P.map,Re=!!P.matcap,Qe=!!ce,k=!!P.aoMap,ln=!!P.lightMap,mt=!!P.bumpMap,dt=!!P.normalMap,$e=!!P.displacementMap,Ct=!!P.emissiveMap,je=!!P.metalnessMap,L=!!P.roughnessMap,w=P.anisotropy>0,te=P.clearcoat>0,ge=P.dispersion>0,xe=P.iridescence>0,he=P.sheen>0,qe=P.transmission>0,Ce=w&&!!P.anisotropyMap,ke=te&&!!P.clearcoatMap,ft=te&&!!P.clearcoatNormalMap,Te=te&&!!P.clearcoatRoughnessMap,ze=xe&&!!P.iridescenceMap,Je=xe&&!!P.iridescenceThicknessMap,it=he&&!!P.sheenColorMap,He=he&&!!P.sheenRoughnessMap,ht=!!P.specularMap,ot=!!P.specularColorMap,At=!!P.specularIntensityMap,j=qe&&!!P.transmissionMap,Pe=qe&&!!P.thicknessMap,ae=!!P.gradientMap,pe=!!P.alphaMap,Ie=P.alphaTest>0,De=!!P.alphaHash,at=!!P.extensions;let Dt=Sr;P.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Dt=s.toneMapping);const Kt={shaderID:ue,shaderType:P.type,shaderName:P.name,vertexShader:Ue,fragmentShader:ee,defines:P.defines,customVertexShaderID:de,customFragmentShaderID:Me,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Ze,batchingColor:Ze&&Z._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&Z.instanceColor!==null,instancingMorph:Ne&&Z.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:qs,alphaToCoverage:!!P.alphaToCoverage,map:me,matcap:Re,envMap:Qe,envMapMode:Qe&&ce.mapping,envMapCubeUVHeight:W,aoMap:k,lightMap:ln,bumpMap:mt,normalMap:dt,displacementMap:x&&$e,emissiveMap:Ct,normalMapObjectSpace:dt&&P.normalMapType===kv,normalMapTangentSpace:dt&&P.normalMapType===Ov,metalnessMap:je,roughnessMap:L,anisotropy:w,anisotropyMap:Ce,clearcoat:te,clearcoatMap:ke,clearcoatNormalMap:ft,clearcoatRoughnessMap:Te,dispersion:ge,iridescence:xe,iridescenceMap:ze,iridescenceThicknessMap:Je,sheen:he,sheenColorMap:it,sheenRoughnessMap:He,specularMap:ht,specularColorMap:ot,specularIntensityMap:At,transmission:qe,transmissionMap:j,thicknessMap:Pe,gradientMap:ae,opaque:P.transparent===!1&&P.blending===Bs&&P.alphaToCoverage===!1,alphaMap:pe,alphaTest:Ie,alphaHash:De,combine:P.combine,mapUv:me&&T(P.map.channel),aoMapUv:k&&T(P.aoMap.channel),lightMapUv:ln&&T(P.lightMap.channel),bumpMapUv:mt&&T(P.bumpMap.channel),normalMapUv:dt&&T(P.normalMap.channel),displacementMapUv:$e&&T(P.displacementMap.channel),emissiveMapUv:Ct&&T(P.emissiveMap.channel),metalnessMapUv:je&&T(P.metalnessMap.channel),roughnessMapUv:L&&T(P.roughnessMap.channel),anisotropyMapUv:Ce&&T(P.anisotropyMap.channel),clearcoatMapUv:ke&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:ft&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:it&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:He&&T(P.sheenRoughnessMap.channel),specularMapUv:ht&&T(P.specularMap.channel),specularColorMapUv:ot&&T(P.specularColorMap.channel),specularIntensityMapUv:At&&T(P.specularIntensityMap.channel),transmissionMapUv:j&&T(P.transmissionMap.channel),thicknessMapUv:Pe&&T(P.thicknessMap.channel),alphaMapUv:pe&&T(P.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(dt||w),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!fe.attributes.uv&&(me||pe),fog:!!le,useFog:P.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ae,skinning:Z.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:re,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Dt,decodeVideoTexture:me&&P.map.isVideoTexture===!0&&Tt.getTransfer(P.map.colorSpace)===Pt,decodeVideoTextureEmissive:Ct&&P.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(P.emissiveMap.colorSpace)===Pt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===xi,flipSided:P.side===Un,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:at&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&P.extensions.multiDraw===!0||Ze)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Kt.vertexUv1s=m.has(1),Kt.vertexUv2s=m.has(2),Kt.vertexUv3s=m.has(3),m.clear(),Kt}function g(P){const A=[];if(P.shaderID?A.push(P.shaderID):(A.push(P.customVertexShaderID),A.push(P.customFragmentShaderID)),P.defines!==void 0)for(const z in P.defines)A.push(z),A.push(P.defines[z]);return P.isRawShaderMaterial===!1&&(D(A,P),b(A,P),A.push(s.outputColorSpace)),A.push(P.customProgramCacheKey),A.join()}function D(P,A){P.push(A.precision),P.push(A.outputColorSpace),P.push(A.envMapMode),P.push(A.envMapCubeUVHeight),P.push(A.mapUv),P.push(A.alphaMapUv),P.push(A.lightMapUv),P.push(A.aoMapUv),P.push(A.bumpMapUv),P.push(A.normalMapUv),P.push(A.displacementMapUv),P.push(A.emissiveMapUv),P.push(A.metalnessMapUv),P.push(A.roughnessMapUv),P.push(A.anisotropyMapUv),P.push(A.clearcoatMapUv),P.push(A.clearcoatNormalMapUv),P.push(A.clearcoatRoughnessMapUv),P.push(A.iridescenceMapUv),P.push(A.iridescenceThicknessMapUv),P.push(A.sheenColorMapUv),P.push(A.sheenRoughnessMapUv),P.push(A.specularMapUv),P.push(A.specularColorMapUv),P.push(A.specularIntensityMapUv),P.push(A.transmissionMapUv),P.push(A.thicknessMapUv),P.push(A.combine),P.push(A.fogExp2),P.push(A.sizeAttenuation),P.push(A.morphTargetsCount),P.push(A.morphAttributeCount),P.push(A.numDirLights),P.push(A.numPointLights),P.push(A.numSpotLights),P.push(A.numSpotLightMaps),P.push(A.numHemiLights),P.push(A.numRectAreaLights),P.push(A.numDirLightShadows),P.push(A.numPointLightShadows),P.push(A.numSpotLightShadows),P.push(A.numSpotLightShadowsWithMaps),P.push(A.numLightProbes),P.push(A.shadowMapType),P.push(A.toneMapping),P.push(A.numClippingPlanes),P.push(A.numClipIntersection),P.push(A.depthPacking)}function b(P,A){f.disableAll(),A.supportsVertexTextures&&f.enable(0),A.instancing&&f.enable(1),A.instancingColor&&f.enable(2),A.instancingMorph&&f.enable(3),A.matcap&&f.enable(4),A.envMap&&f.enable(5),A.normalMapObjectSpace&&f.enable(6),A.normalMapTangentSpace&&f.enable(7),A.clearcoat&&f.enable(8),A.iridescence&&f.enable(9),A.alphaTest&&f.enable(10),A.vertexColors&&f.enable(11),A.vertexAlphas&&f.enable(12),A.vertexUv1s&&f.enable(13),A.vertexUv2s&&f.enable(14),A.vertexUv3s&&f.enable(15),A.vertexTangents&&f.enable(16),A.anisotropy&&f.enable(17),A.alphaHash&&f.enable(18),A.batching&&f.enable(19),A.dispersion&&f.enable(20),A.batchingColor&&f.enable(21),P.push(f.mask),f.disableAll(),A.fog&&f.enable(0),A.useFog&&f.enable(1),A.flatShading&&f.enable(2),A.logarithmicDepthBuffer&&f.enable(3),A.reverseDepthBuffer&&f.enable(4),A.skinning&&f.enable(5),A.morphTargets&&f.enable(6),A.morphNormals&&f.enable(7),A.morphColors&&f.enable(8),A.premultipliedAlpha&&f.enable(9),A.shadowMapEnabled&&f.enable(10),A.doubleSided&&f.enable(11),A.flipSided&&f.enable(12),A.useDepthPacking&&f.enable(13),A.dithering&&f.enable(14),A.transmission&&f.enable(15),A.sheen&&f.enable(16),A.opaque&&f.enable(17),A.pointsUvs&&f.enable(18),A.decodeVideoTexture&&f.enable(19),A.decodeVideoTextureEmissive&&f.enable(20),A.alphaToCoverage&&f.enable(21),P.push(f.mask)}function C(P){const A=E[P.type];let z;if(A){const J=vi[A];z=p0.clone(J.uniforms)}else z=P.uniforms;return z}function V(P,A){let z;for(let J=0,Z=_.length;J<Z;J++){const le=_[J];if(le.cacheKey===A){z=le,++z.usedTimes;break}}return z===void 0&&(z=new FM(s,A,P,l),_.push(z)),z}function I(P){if(--P.usedTimes===0){const A=_.indexOf(P);_[A]=_[_.length-1],_.pop(),P.destroy()}}function U(P){h.remove(P)}function B(){h.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:C,acquireProgram:V,releaseProgram:I,releaseShaderCache:U,programs:_,dispose:B}}function HM(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function a(u,f,h){s.get(u)[f]=h}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:l}}function VM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Im(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Um(){const s=[];let e=0;const n=[],r=[],a=[];function l(){e=0,n.length=0,r.length=0,a.length=0}function u(v,x,S,E,T,y){let g=s[e];return g===void 0?(g={id:v.id,object:v,geometry:x,material:S,groupOrder:E,renderOrder:v.renderOrder,z:T,group:y},s[e]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=S,g.groupOrder=E,g.renderOrder=v.renderOrder,g.z=T,g.group=y),e++,g}function f(v,x,S,E,T,y){const g=u(v,x,S,E,T,y);S.transmission>0?r.push(g):S.transparent===!0?a.push(g):n.push(g)}function h(v,x,S,E,T,y){const g=u(v,x,S,E,T,y);S.transmission>0?r.unshift(g):S.transparent===!0?a.unshift(g):n.unshift(g)}function m(v,x){n.length>1&&n.sort(v||VM),r.length>1&&r.sort(x||Im),a.length>1&&a.sort(x||Im)}function _(){for(let v=e,x=s.length;v<x;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:l,push:f,unshift:h,finish:_,sort:m}}function GM(){let s=new WeakMap;function e(r,a){const l=s.get(r);let u;return l===void 0?(u=new Um,s.set(r,[u])):a>=l.length?(u=new Um,l.push(u)):u=l[a],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function WM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new G,color:new Rt};break;case"SpotLight":n={position:new G,direction:new G,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":n={color:new Rt,position:new G,halfWidth:new G,halfHeight:new G};break}return s[e.id]=n,n}}}function XM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let jM=0;function qM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function YM(s){const e=new WM,n=XM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new G);const a=new G,l=new zt,u=new zt;function f(m){let _=0,v=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,E=0,T=0,y=0,g=0,D=0,b=0,C=0,V=0,I=0,U=0;m.sort(qM);for(let P=0,A=m.length;P<A;P++){const z=m[P],J=z.color,Z=z.intensity,le=z.distance,fe=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)_+=J.r*Z,v+=J.g*Z,x+=J.b*Z;else if(z.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(z.sh.coefficients[oe],Z);U++}else if(z.isDirectionalLight){const oe=e.get(z);if(oe.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ce=z.shadow,W=n.get(z);W.shadowIntensity=ce.intensity,W.shadowBias=ce.bias,W.shadowNormalBias=ce.normalBias,W.shadowRadius=ce.radius,W.shadowMapSize=ce.mapSize,r.directionalShadow[S]=W,r.directionalShadowMap[S]=fe,r.directionalShadowMatrix[S]=z.shadow.matrix,D++}r.directional[S]=oe,S++}else if(z.isSpotLight){const oe=e.get(z);oe.position.setFromMatrixPosition(z.matrixWorld),oe.color.copy(J).multiplyScalar(Z),oe.distance=le,oe.coneCos=Math.cos(z.angle),oe.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),oe.decay=z.decay,r.spot[T]=oe;const ce=z.shadow;if(z.map&&(r.spotLightMap[V]=z.map,V++,ce.updateMatrices(z),z.castShadow&&I++),r.spotLightMatrix[T]=ce.matrix,z.castShadow){const W=n.get(z);W.shadowIntensity=ce.intensity,W.shadowBias=ce.bias,W.shadowNormalBias=ce.normalBias,W.shadowRadius=ce.radius,W.shadowMapSize=ce.mapSize,r.spotShadow[T]=W,r.spotShadowMap[T]=fe,C++}T++}else if(z.isRectAreaLight){const oe=e.get(z);oe.color.copy(J).multiplyScalar(Z),oe.halfWidth.set(z.width*.5,0,0),oe.halfHeight.set(0,z.height*.5,0),r.rectArea[y]=oe,y++}else if(z.isPointLight){const oe=e.get(z);if(oe.color.copy(z.color).multiplyScalar(z.intensity),oe.distance=z.distance,oe.decay=z.decay,z.castShadow){const ce=z.shadow,W=n.get(z);W.shadowIntensity=ce.intensity,W.shadowBias=ce.bias,W.shadowNormalBias=ce.normalBias,W.shadowRadius=ce.radius,W.shadowMapSize=ce.mapSize,W.shadowCameraNear=ce.camera.near,W.shadowCameraFar=ce.camera.far,r.pointShadow[E]=W,r.pointShadowMap[E]=fe,r.pointShadowMatrix[E]=z.shadow.matrix,b++}r.point[E]=oe,E++}else if(z.isHemisphereLight){const oe=e.get(z);oe.skyColor.copy(z.color).multiplyScalar(Z),oe.groundColor.copy(z.groundColor).multiplyScalar(Z),r.hemi[g]=oe,g++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=x;const B=r.hash;(B.directionalLength!==S||B.pointLength!==E||B.spotLength!==T||B.rectAreaLength!==y||B.hemiLength!==g||B.numDirectionalShadows!==D||B.numPointShadows!==b||B.numSpotShadows!==C||B.numSpotMaps!==V||B.numLightProbes!==U)&&(r.directional.length=S,r.spot.length=T,r.rectArea.length=y,r.point.length=E,r.hemi.length=g,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=C+V-I,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=U,B.directionalLength=S,B.pointLength=E,B.spotLength=T,B.rectAreaLength=y,B.hemiLength=g,B.numDirectionalShadows=D,B.numPointShadows=b,B.numSpotShadows=C,B.numSpotMaps=V,B.numLightProbes=U,r.version=jM++)}function h(m,_){let v=0,x=0,S=0,E=0,T=0;const y=_.matrixWorldInverse;for(let g=0,D=m.length;g<D;g++){const b=m[g];if(b.isDirectionalLight){const C=r.directional[v];C.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),v++}else if(b.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),S++}else if(b.isRectAreaLight){const C=r.rectArea[E];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(y),u.identity(),l.copy(b.matrixWorld),l.premultiply(y),u.extractRotation(l),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),E++}else if(b.isPointLight){const C=r.point[x];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(y),x++}else if(b.isHemisphereLight){const C=r.hemi[T];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(y),T++}}}return{setup:f,setupView:h,state:r}}function Fm(s){const e=new YM(s),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function l(_){n.push(_)}function u(_){r.push(_)}function f(){e.setup(n)}function h(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:u}}function $M(s){let e=new WeakMap;function n(a,l=0){const u=e.get(a);let f;return u===void 0?(f=new Fm(s),e.set(a,[f])):l>=u.length?(f=new Fm(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const KM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function QM(s,e,n){let r=new lg;const a=new wt,l=new wt,u=new jt,f=new w0({depthPacking:Fv}),h=new A0,m={},_=n.maxTextureSize,v={[Mr]:Un,[Un]:Mr,[xi]:xi},x=new Er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:KM,fragmentShader:ZM}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new Xt;E.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ot(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=km;let g=this.type;this.render=function(I,U,B){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;const P=s.getRenderTarget(),A=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),J=s.state;J.setBlending(yr),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const Z=g!==ki&&this.type===ki,le=g===ki&&this.type!==ki;for(let fe=0,oe=I.length;fe<oe;fe++){const ce=I[fe],W=ce.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;a.copy(W.mapSize);const ue=W.getFrameExtents();if(a.multiply(ue),l.copy(W.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(l.x=Math.floor(_/ue.x),a.x=l.x*ue.x,W.mapSize.x=l.x),a.y>_&&(l.y=Math.floor(_/ue.y),a.y=l.y*ue.y,W.mapSize.y=l.y)),W.map===null||Z===!0||le===!0){const O=this.type!==ki?{minFilter:ui,magFilter:ui}:{};W.map!==null&&W.map.dispose(),W.map=new Qr(a.x,a.y,O),W.map.texture.name=ce.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const se=W.getViewportCount();for(let O=0;O<se;O++){const re=W.getViewport(O);u.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),J.viewport(u),W.updateMatrices(ce,O),r=W.getFrustum(),C(U,B,W.camera,ce,this.type)}W.isPointLightShadow!==!0&&this.type===ki&&D(W,B),W.needsUpdate=!1}g=this.type,y.needsUpdate=!1,s.setRenderTarget(P,A,z)};function D(I,U){const B=e.update(T);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Qr(a.x,a.y)),x.uniforms.shadow_pass.value=I.map.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(U,null,B,x,T,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(U,null,B,S,T,null)}function b(I,U,B,P){let A=null;const z=B.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(z!==void 0)A=z;else if(A=B.isPointLight===!0?h:f,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const J=A.uuid,Z=U.uuid;let le=m[J];le===void 0&&(le={},m[J]=le);let fe=le[Z];fe===void 0&&(fe=A.clone(),le[Z]=fe,U.addEventListener("dispose",V)),A=fe}if(A.visible=U.visible,A.wireframe=U.wireframe,P===ki?A.side=U.shadowSide!==null?U.shadowSide:U.side:A.side=U.shadowSide!==null?U.shadowSide:v[U.side],A.alphaMap=U.alphaMap,A.alphaTest=U.alphaTest,A.map=U.map,A.clipShadows=U.clipShadows,A.clippingPlanes=U.clippingPlanes,A.clipIntersection=U.clipIntersection,A.displacementMap=U.displacementMap,A.displacementScale=U.displacementScale,A.displacementBias=U.displacementBias,A.wireframeLinewidth=U.wireframeLinewidth,A.linewidth=U.linewidth,B.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const J=s.properties.get(A);J.light=B}return A}function C(I,U,B,P,A){if(I.visible===!1)return;if(I.layers.test(U.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&A===ki)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,I.matrixWorld);const Z=e.update(I),le=I.material;if(Array.isArray(le)){const fe=Z.groups;for(let oe=0,ce=fe.length;oe<ce;oe++){const W=fe[oe],ue=le[W.materialIndex];if(ue&&ue.visible){const se=b(I,ue,P,A);I.onBeforeShadow(s,I,U,B,Z,se,W),s.renderBufferDirect(B,null,Z,se,I,W),I.onAfterShadow(s,I,U,B,Z,se,W)}}}else if(le.visible){const fe=b(I,le,P,A);I.onBeforeShadow(s,I,U,B,Z,fe,null),s.renderBufferDirect(B,null,Z,fe,I,null),I.onAfterShadow(s,I,U,B,Z,fe,null)}}const J=I.children;for(let Z=0,le=J.length;Z<le;Z++)C(J[Z],U,B,P,A)}function V(I){I.target.removeEventListener("dispose",V);for(const B in m){const P=m[B],A=I.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}const JM={[of]:af,[lf]:ff,[cf]:df,[Vs]:uf,[af]:of,[ff]:lf,[df]:cf,[uf]:Vs};function eE(s,e){function n(){let j=!1;const Pe=new jt;let ae=null;const pe=new jt(0,0,0,0);return{setMask:function(Ie){ae!==Ie&&!j&&(s.colorMask(Ie,Ie,Ie,Ie),ae=Ie)},setLocked:function(Ie){j=Ie},setClear:function(Ie,De,at,Dt,Kt){Kt===!0&&(Ie*=Dt,De*=Dt,at*=Dt),Pe.set(Ie,De,at,Dt),pe.equals(Pe)===!1&&(s.clearColor(Ie,De,at,Dt),pe.copy(Pe))},reset:function(){j=!1,ae=null,pe.set(-1,0,0,0)}}}function r(){let j=!1,Pe=!1,ae=null,pe=null,Ie=null;return{setReversed:function(De){if(Pe!==De){const at=e.get("EXT_clip_control");Pe?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT);const Dt=Ie;Ie=null,this.setClear(Dt)}Pe=De},getReversed:function(){return Pe},setTest:function(De){De?ve(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(De){ae!==De&&!j&&(s.depthMask(De),ae=De)},setFunc:function(De){if(Pe&&(De=JM[De]),pe!==De){switch(De){case of:s.depthFunc(s.NEVER);break;case af:s.depthFunc(s.ALWAYS);break;case lf:s.depthFunc(s.LESS);break;case Vs:s.depthFunc(s.LEQUAL);break;case cf:s.depthFunc(s.EQUAL);break;case uf:s.depthFunc(s.GEQUAL);break;case ff:s.depthFunc(s.GREATER);break;case df:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=De}},setLocked:function(De){j=De},setClear:function(De){Ie!==De&&(Pe&&(De=1-De),s.clearDepth(De),Ie=De)},reset:function(){j=!1,ae=null,pe=null,Ie=null,Pe=!1}}}function a(){let j=!1,Pe=null,ae=null,pe=null,Ie=null,De=null,at=null,Dt=null,Kt=null;return{setTest:function(yt){j||(yt?ve(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(yt){Pe!==yt&&!j&&(s.stencilMask(yt),Pe=yt)},setFunc:function(yt,An,yn){(ae!==yt||pe!==An||Ie!==yn)&&(s.stencilFunc(yt,An,yn),ae=yt,pe=An,Ie=yn)},setOp:function(yt,An,yn){(De!==yt||at!==An||Dt!==yn)&&(s.stencilOp(yt,An,yn),De=yt,at=An,Dt=yn)},setLocked:function(yt){j=yt},setClear:function(yt){Kt!==yt&&(s.clearStencil(yt),Kt=yt)},reset:function(){j=!1,Pe=null,ae=null,pe=null,Ie=null,De=null,at=null,Dt=null,Kt=null}}}const l=new n,u=new r,f=new a,h=new WeakMap,m=new WeakMap;let _={},v={},x=new WeakMap,S=[],E=null,T=!1,y=null,g=null,D=null,b=null,C=null,V=null,I=null,U=new Rt(0,0,0),B=0,P=!1,A=null,z=null,J=null,Z=null,le=null;const fe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,ce=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(W)[1]),oe=ce>=1):W.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),oe=ce>=2);let ue=null,se={};const O=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),Ue=new jt().fromArray(O),ee=new jt().fromArray(re);function de(j,Pe,ae,pe){const Ie=new Uint8Array(4),De=s.createTexture();s.bindTexture(j,De),s.texParameteri(j,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(j,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let at=0;at<ae;at++)j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,Ie):s.texImage2D(Pe+at,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ie);return De}const Me={};Me[s.TEXTURE_2D]=de(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=de(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[s.TEXTURE_2D_ARRAY]=de(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=de(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ve(s.DEPTH_TEST),u.setFunc(Vs),mt(!1),dt(Up),ve(s.CULL_FACE),k(yr);function ve(j){_[j]!==!0&&(s.enable(j),_[j]=!0)}function Ae(j){_[j]!==!1&&(s.disable(j),_[j]=!1)}function Ne(j,Pe){return v[j]!==Pe?(s.bindFramebuffer(j,Pe),v[j]=Pe,j===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Pe),j===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Ze(j,Pe){let ae=S,pe=!1;if(j){ae=x.get(Pe),ae===void 0&&(ae=[],x.set(Pe,ae));const Ie=j.textures;if(ae.length!==Ie.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let De=0,at=Ie.length;De<at;De++)ae[De]=s.COLOR_ATTACHMENT0+De;ae.length=Ie.length,pe=!0}}else ae[0]!==s.BACK&&(ae[0]=s.BACK,pe=!0);pe&&s.drawBuffers(ae)}function me(j){return E!==j?(s.useProgram(j),E=j,!0):!1}const Re={[qr]:s.FUNC_ADD,[lv]:s.FUNC_SUBTRACT,[cv]:s.FUNC_REVERSE_SUBTRACT};Re[uv]=s.MIN,Re[fv]=s.MAX;const Qe={[dv]:s.ZERO,[hv]:s.ONE,[pv]:s.SRC_COLOR,[rf]:s.SRC_ALPHA,[yv]:s.SRC_ALPHA_SATURATE,[vv]:s.DST_COLOR,[gv]:s.DST_ALPHA,[mv]:s.ONE_MINUS_SRC_COLOR,[sf]:s.ONE_MINUS_SRC_ALPHA,[xv]:s.ONE_MINUS_DST_COLOR,[_v]:s.ONE_MINUS_DST_ALPHA,[Sv]:s.CONSTANT_COLOR,[Mv]:s.ONE_MINUS_CONSTANT_COLOR,[Ev]:s.CONSTANT_ALPHA,[Tv]:s.ONE_MINUS_CONSTANT_ALPHA};function k(j,Pe,ae,pe,Ie,De,at,Dt,Kt,yt){if(j===yr){T===!0&&(Ae(s.BLEND),T=!1);return}if(T===!1&&(ve(s.BLEND),T=!0),j!==av){if(j!==y||yt!==P){if((g!==qr||C!==qr)&&(s.blendEquation(s.FUNC_ADD),g=qr,C=qr),yt)switch(j){case Bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fp:s.blendFunc(s.ONE,s.ONE);break;case Op:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case kp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Op:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case kp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}D=null,b=null,V=null,I=null,U.set(0,0,0),B=0,y=j,P=yt}return}Ie=Ie||Pe,De=De||ae,at=at||pe,(Pe!==g||Ie!==C)&&(s.blendEquationSeparate(Re[Pe],Re[Ie]),g=Pe,C=Ie),(ae!==D||pe!==b||De!==V||at!==I)&&(s.blendFuncSeparate(Qe[ae],Qe[pe],Qe[De],Qe[at]),D=ae,b=pe,V=De,I=at),(Dt.equals(U)===!1||Kt!==B)&&(s.blendColor(Dt.r,Dt.g,Dt.b,Kt),U.copy(Dt),B=Kt),y=j,P=!1}function ln(j,Pe){j.side===xi?Ae(s.CULL_FACE):ve(s.CULL_FACE);let ae=j.side===Un;Pe&&(ae=!ae),mt(ae),j.blending===Bs&&j.transparent===!1?k(yr):k(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),u.setFunc(j.depthFunc),u.setTest(j.depthTest),u.setMask(j.depthWrite),l.setMask(j.colorWrite);const pe=j.stencilWrite;f.setTest(pe),pe&&(f.setMask(j.stencilWriteMask),f.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),f.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Ct(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function mt(j){A!==j&&(j?s.frontFace(s.CW):s.frontFace(s.CCW),A=j)}function dt(j){j!==rv?(ve(s.CULL_FACE),j!==z&&(j===Up?s.cullFace(s.BACK):j===sv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),z=j}function $e(j){j!==J&&(oe&&s.lineWidth(j),J=j)}function Ct(j,Pe,ae){j?(ve(s.POLYGON_OFFSET_FILL),(Z!==Pe||le!==ae)&&(s.polygonOffset(Pe,ae),Z=Pe,le=ae)):Ae(s.POLYGON_OFFSET_FILL)}function je(j){j?ve(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function L(j){j===void 0&&(j=s.TEXTURE0+fe-1),ue!==j&&(s.activeTexture(j),ue=j)}function w(j,Pe,ae){ae===void 0&&(ue===null?ae=s.TEXTURE0+fe-1:ae=ue);let pe=se[ae];pe===void 0&&(pe={type:void 0,texture:void 0},se[ae]=pe),(pe.type!==j||pe.texture!==Pe)&&(ue!==ae&&(s.activeTexture(ae),ue=ae),s.bindTexture(j,Pe||Me[j]),pe.type=j,pe.texture=Pe)}function te(){const j=se[ue];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function ge(){try{s.compressedTexImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function xe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function he(){try{s.texSubImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function qe(){try{s.texSubImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ke(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ft(){try{s.texStorage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Te(){try{s.texStorage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ze(){try{s.texImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Je(){try{s.texImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function it(j){Ue.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),Ue.copy(j))}function He(j){ee.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),ee.copy(j))}function ht(j,Pe){let ae=m.get(Pe);ae===void 0&&(ae=new WeakMap,m.set(Pe,ae));let pe=ae.get(j);pe===void 0&&(pe=s.getUniformBlockIndex(Pe,j.name),ae.set(j,pe))}function ot(j,Pe){const pe=m.get(Pe).get(j);h.get(Pe)!==pe&&(s.uniformBlockBinding(Pe,pe,j.__bindingPointIndex),h.set(Pe,pe))}function At(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},ue=null,se={},v={},x=new WeakMap,S=[],E=null,T=!1,y=null,g=null,D=null,b=null,C=null,V=null,I=null,U=new Rt(0,0,0),B=0,P=!1,A=null,z=null,J=null,Z=null,le=null,Ue.set(0,0,s.canvas.width,s.canvas.height),ee.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:ve,disable:Ae,bindFramebuffer:Ne,drawBuffers:Ze,useProgram:me,setBlending:k,setMaterial:ln,setFlipSided:mt,setCullFace:dt,setLineWidth:$e,setPolygonOffset:Ct,setScissorTest:je,activeTexture:L,bindTexture:w,unbindTexture:te,compressedTexImage2D:ge,compressedTexImage3D:xe,texImage2D:ze,texImage3D:Je,updateUBOMapping:ht,uniformBlockBinding:ot,texStorage2D:ft,texStorage3D:Te,texSubImage2D:he,texSubImage3D:qe,compressedTexSubImage2D:Ce,compressedTexSubImage3D:ke,scissor:it,viewport:He,reset:At}}function tE(s,e,n,r,a,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new wt,_=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,w){return S?new OffscreenCanvas(L,w):Ul("canvas")}function T(L,w,te){let ge=1;const xe=je(L);if((xe.width>te||xe.height>te)&&(ge=te/Math.max(xe.width,xe.height)),ge<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const he=Math.floor(ge*xe.width),qe=Math.floor(ge*xe.height);v===void 0&&(v=E(he,qe));const Ce=w?E(he,qe):v;return Ce.width=he,Ce.height=qe,Ce.getContext("2d").drawImage(L,0,0,he,qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+he+"x"+qe+")."),Ce}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),L;return L}function y(L){return L.generateMipmaps}function g(L){s.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(L,w,te,ge,xe=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let he=w;if(w===s.RED&&(te===s.FLOAT&&(he=s.R32F),te===s.HALF_FLOAT&&(he=s.R16F),te===s.UNSIGNED_BYTE&&(he=s.R8)),w===s.RED_INTEGER&&(te===s.UNSIGNED_BYTE&&(he=s.R8UI),te===s.UNSIGNED_SHORT&&(he=s.R16UI),te===s.UNSIGNED_INT&&(he=s.R32UI),te===s.BYTE&&(he=s.R8I),te===s.SHORT&&(he=s.R16I),te===s.INT&&(he=s.R32I)),w===s.RG&&(te===s.FLOAT&&(he=s.RG32F),te===s.HALF_FLOAT&&(he=s.RG16F),te===s.UNSIGNED_BYTE&&(he=s.RG8)),w===s.RG_INTEGER&&(te===s.UNSIGNED_BYTE&&(he=s.RG8UI),te===s.UNSIGNED_SHORT&&(he=s.RG16UI),te===s.UNSIGNED_INT&&(he=s.RG32UI),te===s.BYTE&&(he=s.RG8I),te===s.SHORT&&(he=s.RG16I),te===s.INT&&(he=s.RG32I)),w===s.RGB_INTEGER&&(te===s.UNSIGNED_BYTE&&(he=s.RGB8UI),te===s.UNSIGNED_SHORT&&(he=s.RGB16UI),te===s.UNSIGNED_INT&&(he=s.RGB32UI),te===s.BYTE&&(he=s.RGB8I),te===s.SHORT&&(he=s.RGB16I),te===s.INT&&(he=s.RGB32I)),w===s.RGBA_INTEGER&&(te===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),te===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),te===s.UNSIGNED_INT&&(he=s.RGBA32UI),te===s.BYTE&&(he=s.RGBA8I),te===s.SHORT&&(he=s.RGBA16I),te===s.INT&&(he=s.RGBA32I)),w===s.RGB&&te===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),w===s.RGBA){const qe=xe?Nl:Tt.getTransfer(ge);te===s.FLOAT&&(he=s.RGBA32F),te===s.HALF_FLOAT&&(he=s.RGBA16F),te===s.UNSIGNED_BYTE&&(he=qe===Pt?s.SRGB8_ALPHA8:s.RGBA8),te===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),te===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function C(L,w){let te;return L?w===null||w===Zr||w===Xs?te=s.DEPTH24_STENCIL8:w===Bi?te=s.DEPTH32F_STENCIL8:w===zo&&(te=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Zr||w===Xs?te=s.DEPTH_COMPONENT24:w===Bi?te=s.DEPTH_COMPONENT32F:w===zo&&(te=s.DEPTH_COMPONENT16),te}function V(L,w){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==ui&&L.minFilter!==Si?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function I(L){const w=L.target;w.removeEventListener("dispose",I),B(w),w.isVideoTexture&&_.delete(w)}function U(L){const w=L.target;w.removeEventListener("dispose",U),A(w)}function B(L){const w=r.get(L);if(w.__webglInit===void 0)return;const te=L.source,ge=x.get(te);if(ge){const xe=ge[w.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&P(L),Object.keys(ge).length===0&&x.delete(te)}r.remove(L)}function P(L){const w=r.get(L);s.deleteTexture(w.__webglTexture);const te=L.source,ge=x.get(te);delete ge[w.__cacheKey],u.memory.textures--}function A(L){const w=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(w.__webglFramebuffer[ge]))for(let xe=0;xe<w.__webglFramebuffer[ge].length;xe++)s.deleteFramebuffer(w.__webglFramebuffer[ge][xe]);else s.deleteFramebuffer(w.__webglFramebuffer[ge]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[ge])}else{if(Array.isArray(w.__webglFramebuffer))for(let ge=0;ge<w.__webglFramebuffer.length;ge++)s.deleteFramebuffer(w.__webglFramebuffer[ge]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ge=0;ge<w.__webglColorRenderbuffer.length;ge++)w.__webglColorRenderbuffer[ge]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[ge]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const te=L.textures;for(let ge=0,xe=te.length;ge<xe;ge++){const he=r.get(te[ge]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),u.memory.textures--),r.remove(te[ge])}r.remove(L)}let z=0;function J(){z=0}function Z(){const L=z;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),z+=1,L}function le(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function fe(L,w){const te=r.get(L);if(L.isVideoTexture&&$e(L),L.isRenderTargetTexture===!1&&L.version>0&&te.__version!==L.version){const ge=L.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(te,L,w);return}}n.bindTexture(s.TEXTURE_2D,te.__webglTexture,s.TEXTURE0+w)}function oe(L,w){const te=r.get(L);if(L.version>0&&te.__version!==L.version){ee(te,L,w);return}n.bindTexture(s.TEXTURE_2D_ARRAY,te.__webglTexture,s.TEXTURE0+w)}function ce(L,w){const te=r.get(L);if(L.version>0&&te.__version!==L.version){ee(te,L,w);return}n.bindTexture(s.TEXTURE_3D,te.__webglTexture,s.TEXTURE0+w)}function W(L,w){const te=r.get(L);if(L.version>0&&te.__version!==L.version){de(te,L,w);return}n.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture,s.TEXTURE0+w)}const ue={[mf]:s.REPEAT,[$r]:s.CLAMP_TO_EDGE,[gf]:s.MIRRORED_REPEAT},se={[ui]:s.NEAREST,[Iv]:s.NEAREST_MIPMAP_NEAREST,[tl]:s.NEAREST_MIPMAP_LINEAR,[Si]:s.LINEAR,[Eu]:s.LINEAR_MIPMAP_NEAREST,[Kr]:s.LINEAR_MIPMAP_LINEAR},O={[Bv]:s.NEVER,[Xv]:s.ALWAYS,[zv]:s.LESS,[Zm]:s.LEQUAL,[Hv]:s.EQUAL,[Wv]:s.GEQUAL,[Vv]:s.GREATER,[Gv]:s.NOTEQUAL};function re(L,w){if(w.type===Bi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Si||w.magFilter===Eu||w.magFilter===tl||w.magFilter===Kr||w.minFilter===Si||w.minFilter===Eu||w.minFilter===tl||w.minFilter===Kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,ue[w.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,ue[w.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,ue[w.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,se[w.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,se[w.minFilter]),w.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,O[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ui||w.minFilter!==tl&&w.minFilter!==Kr||w.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Ue(L,w){let te=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",I));const ge=w.source;let xe=x.get(ge);xe===void 0&&(xe={},x.set(ge,xe));const he=le(w);if(he!==L.__cacheKey){xe[he]===void 0&&(xe[he]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,te=!0),xe[he].usedTimes++;const qe=xe[L.__cacheKey];qe!==void 0&&(xe[L.__cacheKey].usedTimes--,qe.usedTimes===0&&P(w)),L.__cacheKey=he,L.__webglTexture=xe[he].texture}return te}function ee(L,w,te){let ge=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ge=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ge=s.TEXTURE_3D);const xe=Ue(L,w),he=w.source;n.bindTexture(ge,L.__webglTexture,s.TEXTURE0+te);const qe=r.get(he);if(he.version!==qe.__version||xe===!0){n.activeTexture(s.TEXTURE0+te);const Ce=Tt.getPrimaries(Tt.workingColorSpace),ke=w.colorSpace===xr?null:Tt.getPrimaries(w.colorSpace),ft=w.colorSpace===xr||Ce===ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Te=T(w.image,!1,a.maxTextureSize);Te=Ct(w,Te);const ze=l.convert(w.format,w.colorSpace),Je=l.convert(w.type);let it=b(w.internalFormat,ze,Je,w.colorSpace,w.isVideoTexture);re(ge,w);let He;const ht=w.mipmaps,ot=w.isVideoTexture!==!0,At=qe.__version===void 0||xe===!0,j=he.dataReady,Pe=V(w,Te);if(w.isDepthTexture)it=C(w.format===js,w.type),At&&(ot?n.texStorage2D(s.TEXTURE_2D,1,it,Te.width,Te.height):n.texImage2D(s.TEXTURE_2D,0,it,Te.width,Te.height,0,ze,Je,null));else if(w.isDataTexture)if(ht.length>0){ot&&At&&n.texStorage2D(s.TEXTURE_2D,Pe,it,ht[0].width,ht[0].height);for(let ae=0,pe=ht.length;ae<pe;ae++)He=ht[ae],ot?j&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,He.width,He.height,ze,Je,He.data):n.texImage2D(s.TEXTURE_2D,ae,it,He.width,He.height,0,ze,Je,He.data);w.generateMipmaps=!1}else ot?(At&&n.texStorage2D(s.TEXTURE_2D,Pe,it,Te.width,Te.height),j&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Te.width,Te.height,ze,Je,Te.data)):n.texImage2D(s.TEXTURE_2D,0,it,Te.width,Te.height,0,ze,Je,Te.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ot&&At&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,it,ht[0].width,ht[0].height,Te.depth);for(let ae=0,pe=ht.length;ae<pe;ae++)if(He=ht[ae],w.format!==ci)if(ze!==null)if(ot){if(j)if(w.layerUpdates.size>0){const Ie=dm(He.width,He.height,w.format,w.type);for(const De of w.layerUpdates){const at=He.data.subarray(De*Ie/He.data.BYTES_PER_ELEMENT,(De+1)*Ie/He.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,De,He.width,He.height,1,ze,at)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,He.width,He.height,Te.depth,ze,He.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ae,it,He.width,He.height,Te.depth,0,He.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?j&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,He.width,He.height,Te.depth,ze,Je,He.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ae,it,He.width,He.height,Te.depth,0,ze,Je,He.data)}else{ot&&At&&n.texStorage2D(s.TEXTURE_2D,Pe,it,ht[0].width,ht[0].height);for(let ae=0,pe=ht.length;ae<pe;ae++)He=ht[ae],w.format!==ci?ze!==null?ot?j&&n.compressedTexSubImage2D(s.TEXTURE_2D,ae,0,0,He.width,He.height,ze,He.data):n.compressedTexImage2D(s.TEXTURE_2D,ae,it,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?j&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,He.width,He.height,ze,Je,He.data):n.texImage2D(s.TEXTURE_2D,ae,it,He.width,He.height,0,ze,Je,He.data)}else if(w.isDataArrayTexture)if(ot){if(At&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,it,Te.width,Te.height,Te.depth),j)if(w.layerUpdates.size>0){const ae=dm(Te.width,Te.height,w.format,w.type);for(const pe of w.layerUpdates){const Ie=Te.data.subarray(pe*ae/Te.data.BYTES_PER_ELEMENT,(pe+1)*ae/Te.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,Te.width,Te.height,1,ze,Je,Ie)}w.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,ze,Je,Te.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,it,Te.width,Te.height,Te.depth,0,ze,Je,Te.data);else if(w.isData3DTexture)ot?(At&&n.texStorage3D(s.TEXTURE_3D,Pe,it,Te.width,Te.height,Te.depth),j&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,ze,Je,Te.data)):n.texImage3D(s.TEXTURE_3D,0,it,Te.width,Te.height,Te.depth,0,ze,Je,Te.data);else if(w.isFramebufferTexture){if(At)if(ot)n.texStorage2D(s.TEXTURE_2D,Pe,it,Te.width,Te.height);else{let ae=Te.width,pe=Te.height;for(let Ie=0;Ie<Pe;Ie++)n.texImage2D(s.TEXTURE_2D,Ie,it,ae,pe,0,ze,Je,null),ae>>=1,pe>>=1}}else if(ht.length>0){if(ot&&At){const ae=je(ht[0]);n.texStorage2D(s.TEXTURE_2D,Pe,it,ae.width,ae.height)}for(let ae=0,pe=ht.length;ae<pe;ae++)He=ht[ae],ot?j&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,ze,Je,He):n.texImage2D(s.TEXTURE_2D,ae,it,ze,Je,He);w.generateMipmaps=!1}else if(ot){if(At){const ae=je(Te);n.texStorage2D(s.TEXTURE_2D,Pe,it,ae.width,ae.height)}j&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,ze,Je,Te)}else n.texImage2D(s.TEXTURE_2D,0,it,ze,Je,Te);y(w)&&g(ge),qe.__version=he.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function de(L,w,te){if(w.image.length!==6)return;const ge=Ue(L,w),xe=w.source;n.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+te);const he=r.get(xe);if(xe.version!==he.__version||ge===!0){n.activeTexture(s.TEXTURE0+te);const qe=Tt.getPrimaries(Tt.workingColorSpace),Ce=w.colorSpace===xr?null:Tt.getPrimaries(w.colorSpace),ke=w.colorSpace===xr||qe===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const ft=w.isCompressedTexture||w.image[0].isCompressedTexture,Te=w.image[0]&&w.image[0].isDataTexture,ze=[];for(let pe=0;pe<6;pe++)!ft&&!Te?ze[pe]=T(w.image[pe],!0,a.maxCubemapSize):ze[pe]=Te?w.image[pe].image:w.image[pe],ze[pe]=Ct(w,ze[pe]);const Je=ze[0],it=l.convert(w.format,w.colorSpace),He=l.convert(w.type),ht=b(w.internalFormat,it,He,w.colorSpace),ot=w.isVideoTexture!==!0,At=he.__version===void 0||ge===!0,j=xe.dataReady;let Pe=V(w,Je);re(s.TEXTURE_CUBE_MAP,w);let ae;if(ft){ot&&At&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,ht,Je.width,Je.height);for(let pe=0;pe<6;pe++){ae=ze[pe].mipmaps;for(let Ie=0;Ie<ae.length;Ie++){const De=ae[Ie];w.format!==ci?it!==null?ot?j&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie,0,0,De.width,De.height,it,De.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie,ht,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?j&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie,0,0,De.width,De.height,it,He,De.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie,ht,De.width,De.height,0,it,He,De.data)}}}else{if(ae=w.mipmaps,ot&&At){ae.length>0&&Pe++;const pe=je(ze[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,ht,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Te){ot?j&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ze[pe].width,ze[pe].height,it,He,ze[pe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ht,ze[pe].width,ze[pe].height,0,it,He,ze[pe].data);for(let Ie=0;Ie<ae.length;Ie++){const at=ae[Ie].image[pe].image;ot?j&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie+1,0,0,at.width,at.height,it,He,at.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie+1,ht,at.width,at.height,0,it,He,at.data)}}else{ot?j&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,it,He,ze[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ht,it,He,ze[pe]);for(let Ie=0;Ie<ae.length;Ie++){const De=ae[Ie];ot?j&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie+1,0,0,it,He,De.image[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie+1,ht,it,He,De.image[pe])}}}y(w)&&g(s.TEXTURE_CUBE_MAP),he.__version=xe.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Me(L,w,te,ge,xe,he){const qe=l.convert(te.format,te.colorSpace),Ce=l.convert(te.type),ke=b(te.internalFormat,qe,Ce,te.colorSpace),ft=r.get(w),Te=r.get(te);if(Te.__renderTarget=w,!ft.__hasExternalTextures){const ze=Math.max(1,w.width>>he),Je=Math.max(1,w.height>>he);xe===s.TEXTURE_3D||xe===s.TEXTURE_2D_ARRAY?n.texImage3D(xe,he,ke,ze,Je,w.depth,0,qe,Ce,null):n.texImage2D(xe,he,ke,ze,Je,0,qe,Ce,null)}n.bindFramebuffer(s.FRAMEBUFFER,L),dt(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,xe,Te.__webglTexture,0,mt(w)):(xe===s.TEXTURE_2D||xe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ge,xe,Te.__webglTexture,he),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(L,w,te){if(s.bindRenderbuffer(s.RENDERBUFFER,L),w.depthBuffer){const ge=w.depthTexture,xe=ge&&ge.isDepthTexture?ge.type:null,he=C(w.stencilBuffer,xe),qe=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=mt(w);dt(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,he,w.width,w.height):te?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,he,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,he,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,qe,s.RENDERBUFFER,L)}else{const ge=w.textures;for(let xe=0;xe<ge.length;xe++){const he=ge[xe],qe=l.convert(he.format,he.colorSpace),Ce=l.convert(he.type),ke=b(he.internalFormat,qe,Ce,he.colorSpace),ft=mt(w);te&&dt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,ke,w.width,w.height):dt(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,ke,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ke,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(w.depthTexture);ge.__renderTarget=w,(!ge.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),fe(w.depthTexture,0);const xe=ge.__webglTexture,he=mt(w);if(w.depthTexture.format===zs)dt(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0);else if(w.depthTexture.format===js)dt(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Ne(L){const w=r.get(L),te=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const ge=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ge){const xe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ge.removeEventListener("dispose",xe)};ge.addEventListener("dispose",xe),w.__depthDisposeCallback=xe}w.__boundDepthTexture=ge}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");Ae(w.__webglFramebuffer,L)}else if(te){w.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[ge]),w.__webglDepthbuffer[ge]===void 0)w.__webglDepthbuffer[ge]=s.createRenderbuffer(),ve(w.__webglDepthbuffer[ge],L,!1);else{const xe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=w.__webglDepthbuffer[ge];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,he)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),ve(w.__webglDepthbuffer,L,!1);else{const ge=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,xe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,xe)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ze(L,w,te){const ge=r.get(L);w!==void 0&&Me(ge.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),te!==void 0&&Ne(L)}function me(L){const w=L.texture,te=r.get(L),ge=r.get(w);L.addEventListener("dispose",U);const xe=L.textures,he=L.isWebGLCubeRenderTarget===!0,qe=xe.length>1;if(qe||(ge.__webglTexture===void 0&&(ge.__webglTexture=s.createTexture()),ge.__version=w.version,u.memory.textures++),he){te.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0){te.__webglFramebuffer[Ce]=[];for(let ke=0;ke<w.mipmaps.length;ke++)te.__webglFramebuffer[Ce][ke]=s.createFramebuffer()}else te.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){te.__webglFramebuffer=[];for(let Ce=0;Ce<w.mipmaps.length;Ce++)te.__webglFramebuffer[Ce]=s.createFramebuffer()}else te.__webglFramebuffer=s.createFramebuffer();if(qe)for(let Ce=0,ke=xe.length;Ce<ke;Ce++){const ft=r.get(xe[Ce]);ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture(),u.memory.textures++)}if(L.samples>0&&dt(L)===!1){te.__webglMultisampledFramebuffer=s.createFramebuffer(),te.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Ce=0;Ce<xe.length;Ce++){const ke=xe[Ce];te.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,te.__webglColorRenderbuffer[Ce]);const ft=l.convert(ke.format,ke.colorSpace),Te=l.convert(ke.type),ze=b(ke.internalFormat,ft,Te,ke.colorSpace,L.isXRRenderTarget===!0),Je=mt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,ze,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,te.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(te.__webglDepthRenderbuffer=s.createRenderbuffer(),ve(te.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){n.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),re(s.TEXTURE_CUBE_MAP,w);for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0)for(let ke=0;ke<w.mipmaps.length;ke++)Me(te.__webglFramebuffer[Ce][ke],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ke);else Me(te.__webglFramebuffer[Ce],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(w)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(qe){for(let Ce=0,ke=xe.length;Ce<ke;Ce++){const ft=xe[Ce],Te=r.get(ft);n.bindTexture(s.TEXTURE_2D,Te.__webglTexture),re(s.TEXTURE_2D,ft),Me(te.__webglFramebuffer,L,ft,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),y(ft)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ce=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ce,ge.__webglTexture),re(Ce,w),w.mipmaps&&w.mipmaps.length>0)for(let ke=0;ke<w.mipmaps.length;ke++)Me(te.__webglFramebuffer[ke],L,w,s.COLOR_ATTACHMENT0,Ce,ke);else Me(te.__webglFramebuffer,L,w,s.COLOR_ATTACHMENT0,Ce,0);y(w)&&g(Ce),n.unbindTexture()}L.depthBuffer&&Ne(L)}function Re(L){const w=L.textures;for(let te=0,ge=w.length;te<ge;te++){const xe=w[te];if(y(xe)){const he=D(L),qe=r.get(xe).__webglTexture;n.bindTexture(he,qe),g(he),n.unbindTexture()}}}const Qe=[],k=[];function ln(L){if(L.samples>0){if(dt(L)===!1){const w=L.textures,te=L.width,ge=L.height;let xe=s.COLOR_BUFFER_BIT;const he=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,qe=r.get(L),Ce=w.length>1;if(Ce)for(let ke=0;ke<w.length;ke++)n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let ke=0;ke<w.length;ke++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(xe|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(xe|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,qe.__webglColorRenderbuffer[ke]);const ft=r.get(w[ke]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ft,0)}s.blitFramebuffer(0,0,te,ge,0,0,te,ge,xe,s.NEAREST),h===!0&&(Qe.length=0,k.length=0,Qe.push(s.COLOR_ATTACHMENT0+ke),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Qe.push(he),k.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,k)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Qe))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let ke=0;ke<w.length;ke++){n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,qe.__webglColorRenderbuffer[ke]);const ft=r.get(w[ke]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,ft,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){const w=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function mt(L){return Math.min(a.maxSamples,L.samples)}function dt(L){const w=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function $e(L){const w=u.render.frame;_.get(L)!==w&&(_.set(L,w),L.update())}function Ct(L,w){const te=L.colorSpace,ge=L.format,xe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||te!==qs&&te!==xr&&(Tt.getTransfer(te)===Pt?(ge!==ci||xe!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),w}function je(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=Z,this.resetTextureUnits=J,this.setTexture2D=fe,this.setTexture2DArray=oe,this.setTexture3D=ce,this.setTextureCube=W,this.rebindTextures=Ze,this.setupRenderTarget=me,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=dt}function nE(s,e){function n(r,a=xr){let l;const u=Tt.getTransfer(a);if(r===Vi)return s.UNSIGNED_BYTE;if(r===$f)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Kf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Gm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Hm)return s.BYTE;if(r===Vm)return s.SHORT;if(r===zo)return s.UNSIGNED_SHORT;if(r===Yf)return s.INT;if(r===Zr)return s.UNSIGNED_INT;if(r===Bi)return s.FLOAT;if(r===Ho)return s.HALF_FLOAT;if(r===Wm)return s.ALPHA;if(r===Xm)return s.RGB;if(r===ci)return s.RGBA;if(r===jm)return s.LUMINANCE;if(r===qm)return s.LUMINANCE_ALPHA;if(r===zs)return s.DEPTH_COMPONENT;if(r===js)return s.DEPTH_STENCIL;if(r===Ym)return s.RED;if(r===Zf)return s.RED_INTEGER;if(r===$m)return s.RG;if(r===Qf)return s.RG_INTEGER;if(r===Jf)return s.RGBA_INTEGER;if(r===Rl||r===Cl||r===Pl||r===bl)if(u===Pt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Rl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Cl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Pl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===bl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Rl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Cl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Pl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===bl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===_f||r===vf||r===xf||r===yf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===_f)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===vf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===xf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===yf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Sf||r===Mf||r===Ef)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Sf||r===Mf)return u===Pt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Ef)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Tf||r===wf||r===Af||r===Rf||r===Cf||r===Pf||r===bf||r===Lf||r===Df||r===Nf||r===If||r===Uf||r===Ff||r===Of)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Tf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===wf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Af)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Rf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Cf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Pf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===bf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Lf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Df)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Nf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===If)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Uf)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ff)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Of)return u===Pt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ll||r===kf||r===Bf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Ll)return u===Pt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===kf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Bf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Km||r===zf||r===Hf||r===Vf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Ll)return l.COMPRESSED_RED_RGTC1_EXT;if(r===zf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Hf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Vf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const iE={type:"move"};class nf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,l=null,u=null;const f=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const T of e.hand.values()){const y=n.getJointPose(T,r),g=this._getHandJoint(m,T);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=_.position.distanceTo(v.position),S=.02,E=.005;m.inputState.pinching&&x>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(iE)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new In;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const rE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class oE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Fn,l=e.properties.get(a);l.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Er({vertexShader:rE,fragmentShader:sE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ot(new jo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aE extends $s{constructor(e,n){super();const r=this;let a=null,l=1,u=null,f="local-floor",h=1,m=null,_=null,v=null,x=null,S=null,E=null;const T=new oE,y=n.getContextAttributes();let g=null,D=null;const b=[],C=[],V=new wt;let I=null;const U=new Zn;U.viewport=new jt;const B=new Zn;B.viewport=new jt;const P=[U,B],A=new C0;let z=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let de=b[ee];return de===void 0&&(de=new nf,b[ee]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ee){let de=b[ee];return de===void 0&&(de=new nf,b[ee]=de),de.getGripSpace()},this.getHand=function(ee){let de=b[ee];return de===void 0&&(de=new nf,b[ee]=de),de.getHandSpace()};function Z(ee){const de=C.indexOf(ee.inputSource);if(de===-1)return;const Me=b[de];Me!==void 0&&(Me.update(ee.inputSource,ee.frame,m||u),Me.dispatchEvent({type:ee.type,data:ee.inputSource}))}function le(){a.removeEventListener("select",Z),a.removeEventListener("selectstart",Z),a.removeEventListener("selectend",Z),a.removeEventListener("squeeze",Z),a.removeEventListener("squeezestart",Z),a.removeEventListener("squeezeend",Z),a.removeEventListener("end",le),a.removeEventListener("inputsourceschange",fe);for(let ee=0;ee<b.length;ee++){const de=C[ee];de!==null&&(C[ee]=null,b[ee].disconnect(de))}z=null,J=null,T.reset(),e.setRenderTarget(g),S=null,x=null,v=null,a=null,D=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(I),e.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){l=ee,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){f=ee,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(ee){m=ee},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(ee){if(a=ee,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",Z),a.addEventListener("selectstart",Z),a.addEventListener("selectend",Z),a.addEventListener("squeeze",Z),a.addEventListener("squeezestart",Z),a.addEventListener("squeezeend",Z),a.addEventListener("end",le),a.addEventListener("inputsourceschange",fe),y.xrCompatible!==!0&&await n.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(V),a.enabledFeatures!==void 0&&a.enabledFeatures.includes("layers")){let Me=null,ve=null,Ae=null;y.depth&&(Ae=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Me=y.stencil?js:zs,ve=y.stencil?Xs:Zr);const Ne={colorFormat:n.RGBA8,depthFormat:Ae,scaleFactor:l};v=new XRWebGLBinding(a,n),x=v.createProjectionLayer(Ne),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),D=new Qr(x.textureWidth,x.textureHeight,{format:ci,type:Vi,depthTexture:new fg(x.textureWidth,x.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}else{const Me={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,n,Me),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new Qr(S.framebufferWidth,S.framebufferHeight,{format:ci,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}D.isXRRenderTarget=!0,this.setFoveation(h),m=null,u=await a.requestReferenceSpace(f),Ue.setContext(a),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function fe(ee){for(let de=0;de<ee.removed.length;de++){const Me=ee.removed[de],ve=C.indexOf(Me);ve>=0&&(C[ve]=null,b[ve].disconnect(Me))}for(let de=0;de<ee.added.length;de++){const Me=ee.added[de];let ve=C.indexOf(Me);if(ve===-1){for(let Ne=0;Ne<b.length;Ne++)if(Ne>=C.length){C.push(Me),ve=Ne;break}else if(C[Ne]===null){C[Ne]=Me,ve=Ne;break}if(ve===-1)break}const Ae=b[ve];Ae&&Ae.connect(Me)}}const oe=new G,ce=new G;function W(ee,de,Me){oe.setFromMatrixPosition(de.matrixWorld),ce.setFromMatrixPosition(Me.matrixWorld);const ve=oe.distanceTo(ce),Ae=de.projectionMatrix.elements,Ne=Me.projectionMatrix.elements,Ze=Ae[14]/(Ae[10]-1),me=Ae[14]/(Ae[10]+1),Re=(Ae[9]+1)/Ae[5],Qe=(Ae[9]-1)/Ae[5],k=(Ae[8]-1)/Ae[0],ln=(Ne[8]+1)/Ne[0],mt=Ze*k,dt=Ze*ln,$e=ve/(-k+ln),Ct=$e*-k;if(de.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Ct),ee.translateZ($e),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ae[10]===-1)ee.projectionMatrix.copy(de.projectionMatrix),ee.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const je=Ze+$e,L=me+$e,w=mt-Ct,te=dt+(ve-Ct),ge=Re*me/L*je,xe=Qe*me/L*je;ee.projectionMatrix.makePerspective(w,te,ge,xe,je,L),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ue(ee,de){de===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(de.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(a===null)return;let de=ee.near,Me=ee.far;T.texture!==null&&(T.depthNear>0&&(de=T.depthNear),T.depthFar>0&&(Me=T.depthFar)),A.near=B.near=U.near=de,A.far=B.far=U.far=Me,(z!==A.near||J!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),z=A.near,J=A.far),U.layers.mask=ee.layers.mask|2,B.layers.mask=ee.layers.mask|4,A.layers.mask=U.layers.mask|B.layers.mask;const ve=ee.parent,Ae=A.cameras;ue(A,ve);for(let Ne=0;Ne<Ae.length;Ne++)ue(Ae[Ne],ve);Ae.length===2?W(A,U,B):A.projectionMatrix.copy(U.projectionMatrix),se(ee,A,ve)};function se(ee,de,Me){Me===null?ee.matrix.copy(de.matrixWorld):(ee.matrix.copy(Me.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(de.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(de.projectionMatrix),ee.projectionMatrixInverse.copy(de.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Gf*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function(ee){h=ee,x!==null&&(x.fixedFoveation=ee),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ee)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(A)};let O=null;function re(ee,de){if(_=de.getViewerPose(m||u),E=de,_!==null){const Me=_.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let ve=!1;Me.length!==A.cameras.length&&(A.cameras.length=0,ve=!0);for(let Ne=0;Ne<Me.length;Ne++){const Ze=Me[Ne];let me=null;if(S!==null)me=S.getViewport(Ze);else{const Qe=v.getViewSubImage(x,Ze);me=Qe.viewport,Ne===0&&(e.setRenderTargetTextures(D,Qe.colorTexture,x.ignoreDepthValues?void 0:Qe.depthStencilTexture),e.setRenderTarget(D))}let Re=P[Ne];Re===void 0&&(Re=new Zn,Re.layers.enable(Ne),Re.viewport=new jt,P[Ne]=Re),Re.matrix.fromArray(Ze.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Ze.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(me.x,me.y,me.width,me.height),Ne===0&&(A.matrix.copy(Re.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ve===!0&&A.cameras.push(Re)}const Ae=a.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ne=v.getDepthInformation(Me[0]);Ne&&Ne.isValid&&Ne.texture&&T.init(e,Ne,a.renderState)}}for(let Me=0;Me<b.length;Me++){const ve=C[Me],Ae=b[Me];ve!==null&&Ae!==void 0&&Ae.update(ve,de,m||u)}O&&O(ee,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),E=null}const Ue=new dg;Ue.setAnimationLoop(re),this.setAnimationLoop=function(ee){O=ee},this.dispose=function(){}}}const Gr=new Gi,lE=new zt;function cE(s,e){function n(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,sg(s)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function a(y,g,D,b,C){g.isMeshBasicMaterial||g.isMeshLambertMaterial?l(y,g):g.isMeshToonMaterial?(l(y,g),v(y,g)):g.isMeshPhongMaterial?(l(y,g),_(y,g)):g.isMeshStandardMaterial?(l(y,g),x(y,g),g.isMeshPhysicalMaterial&&S(y,g,C)):g.isMeshMatcapMaterial?(l(y,g),E(y,g)):g.isMeshDepthMaterial?l(y,g):g.isMeshDistanceMaterial?(l(y,g),T(y,g)):g.isMeshNormalMaterial?l(y,g):g.isLineBasicMaterial?(u(y,g),g.isLineDashedMaterial&&f(y,g)):g.isPointsMaterial?h(y,g,D,b):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function l(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,n(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Un&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,n(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Un&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,n(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,n(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const D=e.get(g),b=D.envMap,C=D.envMapRotation;b&&(y.envMap.value=b,Gr.copy(C),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),y.envMapRotation.value.setFromMatrix4(lE.makeRotationFromEuler(Gr)),y.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,y.aoMapTransform))}function u(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform))}function f(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function h(y,g,D,b){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*D,y.scale.value=b*.5,g.map&&(y.map.value=g.map,n(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function v(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function S(y,g,D){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Un&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,g){g.matcap&&(y.matcap.value=g.matcap)}function T(y,g){const D=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function uE(s,e,n,r){let a={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(D,b){const C=b.program;r.uniformBlockBinding(D,C)}function m(D,b){let C=a[D.id];C===void 0&&(E(D),C=_(D),a[D.id]=C,D.addEventListener("dispose",y));const V=b.program;r.updateUBOMapping(D,V);const I=e.render.frame;l[D.id]!==I&&(x(D),l[D.id]=I)}function _(D){const b=v();D.__bindingPointIndex=b;const C=s.createBuffer(),V=D.__size,I=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,V,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,C),C}function v(){for(let D=0;D<f;D++)if(u.indexOf(D)===-1)return u.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const b=a[D.id],C=D.uniforms,V=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let I=0,U=C.length;I<U;I++){const B=Array.isArray(C[I])?C[I]:[C[I]];for(let P=0,A=B.length;P<A;P++){const z=B[P];if(S(z,I,P,V)===!0){const J=z.__offset,Z=Array.isArray(z.value)?z.value:[z.value];let le=0;for(let fe=0;fe<Z.length;fe++){const oe=Z[fe],ce=T(oe);typeof oe=="number"||typeof oe=="boolean"?(z.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,J+le,z.__data)):oe.isMatrix3?(z.__data[0]=oe.elements[0],z.__data[1]=oe.elements[1],z.__data[2]=oe.elements[2],z.__data[3]=0,z.__data[4]=oe.elements[3],z.__data[5]=oe.elements[4],z.__data[6]=oe.elements[5],z.__data[7]=0,z.__data[8]=oe.elements[6],z.__data[9]=oe.elements[7],z.__data[10]=oe.elements[8],z.__data[11]=0):(oe.toArray(z.__data,le),le+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,J,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(D,b,C,V){const I=D.value,U=b+"_"+C;if(V[U]===void 0)return typeof I=="number"||typeof I=="boolean"?V[U]=I:V[U]=I.clone(),!0;{const B=V[U];if(typeof I=="number"||typeof I=="boolean"){if(B!==I)return V[U]=I,!0}else if(B.equals(I)===!1)return B.copy(I),!0}return!1}function E(D){const b=D.uniforms;let C=0;const V=16;for(let U=0,B=b.length;U<B;U++){const P=Array.isArray(b[U])?b[U]:[b[U]];for(let A=0,z=P.length;A<z;A++){const J=P[A],Z=Array.isArray(J.value)?J.value:[J.value];for(let le=0,fe=Z.length;le<fe;le++){const oe=Z[le],ce=T(oe),W=C%V,ue=W%ce.boundary,se=W+ue;C+=ue,se!==0&&V-se<ce.storage&&(C+=V-se),J.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=C,C+=ce.storage}}}const I=C%V;return I>0&&(C+=V-I),D.__size=C,D.__cache={},this}function T(D){const b={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(b.boundary=4,b.storage=4):D.isVector2?(b.boundary=8,b.storage=8):D.isVector3||D.isColor?(b.boundary=16,b.storage=12):D.isVector4?(b.boundary=16,b.storage=16):D.isMatrix3?(b.boundary=48,b.storage=48):D.isMatrix4?(b.boundary=64,b.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),b}function y(D){const b=D.target;b.removeEventListener("dispose",y);const C=u.indexOf(b.__bindingPointIndex);u.splice(C,1),s.deleteBuffer(a[b.id]),delete a[b.id],delete l[b.id]}function g(){for(const D in a)s.deleteBuffer(a[D]);u=[],a={},l={}}return{bind:h,update:m,dispose:g}}class fE{constructor(e={}){const{canvas:n=qv(),context:r=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=u;const E=new Uint32Array(4),T=new Int32Array(4);let y=null,g=null;const D=[],b=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=Sr,this.toneMappingExposure=1;const C=this;let V=!1,I=0,U=0,B=null,P=-1,A=null;const z=new jt,J=new jt;let Z=null;const le=new Rt(0);let fe=0,oe=n.width,ce=n.height,W=1,ue=null,se=null;const O=new jt(0,0,oe,ce),re=new jt(0,0,oe,ce);let Ue=!1;const ee=new lg;let de=!1,Me=!1;this.transmissionResolutionScale=1;const ve=new zt,Ae=new zt,Ne=new G,Ze=new jt,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function Qe(){return B===null?W:1}let k=r;function ln(R,q){return n.getContext(R,q)}try{const R={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${qf}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",Ie,!1),n.addEventListener("webglcontextcreationerror",De,!1),k===null){const q="webgl2";if(k=ln(q,R),k===null)throw ln(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let mt,dt,$e,Ct,je,L,w,te,ge,xe,he,qe,Ce,ke,ft,Te,ze,Je,it,He,ht,ot,At,j;function Pe(){mt=new yS(k),mt.init(),ot=new nE(k,mt),dt=new pS(k,mt,e,ot),$e=new eE(k,mt),dt.reverseDepthBuffer&&x&&$e.buffers.depth.setReversed(!0),Ct=new ES(k),je=new HM,L=new tE(k,mt,$e,je,dt,ot,Ct),w=new gS(C),te=new xS(C),ge=new b0(k),At=new dS(k,ge),xe=new SS(k,ge,Ct,At),he=new wS(k,xe,ge,Ct),it=new TS(k,dt,L),Te=new mS(je),qe=new zM(C,w,te,mt,dt,At,Te),Ce=new cE(C,je),ke=new GM,ft=new $M(mt),Je=new fS(C,w,te,$e,he,S,h),ze=new QM(C,he,dt),j=new uE(k,Ct,dt,$e),He=new hS(k,mt,Ct),ht=new MS(k,mt,Ct),Ct.programs=qe.programs,C.capabilities=dt,C.extensions=mt,C.properties=je,C.renderLists=ke,C.shadowMap=ze,C.state=$e,C.info=Ct}Pe();const ae=new aE(C,k);this.xr=ae,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=mt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=mt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(oe,ce,!1))},this.getSize=function(R){return R.set(oe,ce)},this.setSize=function(R,q,ne=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=R,ce=q,n.width=Math.floor(R*W),n.height=Math.floor(q*W),ne===!0&&(n.style.width=R+"px",n.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(oe*W,ce*W).floor()},this.setDrawingBufferSize=function(R,q,ne){oe=R,ce=q,W=ne,n.width=Math.floor(R*ne),n.height=Math.floor(q*ne),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(z)},this.getViewport=function(R){return R.copy(O)},this.setViewport=function(R,q,ne,K){R.isVector4?O.set(R.x,R.y,R.z,R.w):O.set(R,q,ne,K),$e.viewport(z.copy(O).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(re)},this.setScissor=function(R,q,ne,K){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,q,ne,K),$e.scissor(J.copy(re).multiplyScalar(W).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(R){$e.setScissorTest(Ue=R)},this.setOpaqueSort=function(R){ue=R},this.setTransparentSort=function(R){se=R},this.getClearColor=function(R){return R.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(R=!0,q=!0,ne=!0){let K=0;if(R){let Y=!1;if(B!==null){const Ee=B.texture.format;Y=Ee===Jf||Ee===Qf||Ee===Zf}if(Y){const Ee=B.texture.type,be=Ee===Vi||Ee===Zr||Ee===zo||Ee===Xs||Ee===$f||Ee===Kf,Fe=Je.getClearColor(),Ve=Je.getClearAlpha(),rt=Fe.r,nt=Fe.g,We=Fe.b;be?(E[0]=rt,E[1]=nt,E[2]=We,E[3]=Ve,k.clearBufferuiv(k.COLOR,0,E)):(T[0]=rt,T[1]=nt,T[2]=We,T[3]=Ve,k.clearBufferiv(k.COLOR,0,T))}else K|=k.COLOR_BUFFER_BIT}q&&(K|=k.DEPTH_BUFFER_BIT),ne&&(K|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",Ie,!1),n.removeEventListener("webglcontextcreationerror",De,!1),Je.dispose(),ke.dispose(),ft.dispose(),je.dispose(),w.dispose(),te.dispose(),he.dispose(),At.dispose(),j.dispose(),qe.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Jr),ae.removeEventListener("sessionend",Wi),Mi.stop()};function pe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const R=Ct.autoReset,q=ze.enabled,ne=ze.autoUpdate,K=ze.needsUpdate,Y=ze.type;Pe(),Ct.autoReset=R,ze.enabled=q,ze.autoUpdate=ne,ze.needsUpdate=K,ze.type=Y}function De(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function at(R){const q=R.target;q.removeEventListener("dispose",at),Dt(q)}function Dt(R){Kt(R),je.remove(R)}function Kt(R){const q=je.get(R).programs;q!==void 0&&(q.forEach(function(ne){qe.releaseProgram(ne)}),R.isShaderMaterial&&qe.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,ne,K,Y,Ee){q===null&&(q=me);const be=Y.isMesh&&Y.matrixWorld.determinant()<0,Fe=$o(R,q,ne,K,Y);$e.setMaterial(K,be);let Ve=ne.index,rt=1;if(K.wireframe===!0){if(Ve=xe.getWireframeAttribute(ne),Ve===void 0)return;rt=2}const nt=ne.drawRange,We=ne.attributes.position;let vt=nt.start*rt,lt=(nt.start+nt.count)*rt;Ee!==null&&(vt=Math.max(vt,Ee.start*rt),lt=Math.min(lt,(Ee.start+Ee.count)*rt)),Ve!==null?(vt=Math.max(vt,0),lt=Math.min(lt,Ve.count)):We!=null&&(vt=Math.max(vt,0),lt=Math.min(lt,We.count));const Ht=lt-vt;if(Ht<0||Ht===1/0)return;At.setup(Y,K,Fe,ne,Ve);let Ut,xt=He;if(Ve!==null&&(Ut=ge.get(Ve),xt=ht,xt.setIndex(Ut)),Y.isMesh)K.wireframe===!0?($e.setLineWidth(K.wireframeLinewidth*Qe()),xt.setMode(k.LINES)):xt.setMode(k.TRIANGLES);else if(Y.isLine){let Ke=K.linewidth;Ke===void 0&&(Ke=1),$e.setLineWidth(Ke*Qe()),Y.isLineSegments?xt.setMode(k.LINES):Y.isLineLoop?xt.setMode(k.LINE_LOOP):xt.setMode(k.LINE_STRIP)}else Y.isPoints?xt.setMode(k.POINTS):Y.isSprite&&xt.setMode(k.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)xt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))xt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ke=Y._multiDrawStarts,Vt=Y._multiDrawCounts,_t=Y._multiDrawCount,dn=Ve?ge.get(Ve).bytesPerElement:1,ji=je.get(K).currentProgram.getUniforms();for(let Sn=0;Sn<_t;Sn++)ji.setValue(k,"_gl_DrawID",Sn),xt.render(Ke[Sn]/dn,Vt[Sn])}else if(Y.isInstancedMesh)xt.renderInstances(vt,Ht,Y.count);else if(ne.isInstancedBufferGeometry){const Ke=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Vt=Math.min(ne.instanceCount,Ke);xt.renderInstances(vt,Ht,Vt)}else xt.render(vt,Ht)};function yt(R,q,ne){R.transparent===!0&&R.side===xi&&R.forceSinglePass===!1?(R.side=Un,R.needsUpdate=!0,es(R,q,ne),R.side=Mr,R.needsUpdate=!0,es(R,q,ne),R.side=xi):es(R,q,ne)}this.compile=function(R,q,ne=null){ne===null&&(ne=R),g=ft.get(ne),g.init(q),b.push(g),ne.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),R!==ne&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights();const K=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Ee=Y.material;if(Ee)if(Array.isArray(Ee))for(let be=0;be<Ee.length;be++){const Fe=Ee[be];yt(Fe,ne,Y),K.add(Fe)}else yt(Ee,ne,Y),K.add(Ee)}),b.pop(),g=null,K},this.compileAsync=function(R,q,ne=null){const K=this.compile(R,q,ne);return new Promise(Y=>{function Ee(){if(K.forEach(function(be){je.get(be).currentProgram.isReady()&&K.delete(be)}),K.size===0){Y(R);return}setTimeout(Ee,10)}mt.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let An=null;function yn(R){An&&An(R)}function Jr(){Mi.stop()}function Wi(){Mi.start()}const Mi=new dg;Mi.setAnimationLoop(yn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(R){An=R,ae.setAnimationLoop(R),R===null?Mi.stop():Mi.start()},ae.addEventListener("sessionstart",Jr),ae.addEventListener("sessionend",Wi),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(q),q=ae.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,q,B),g=ft.get(R,b.length),g.init(q),b.push(g),Ae.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ee.setFromProjectionMatrix(Ae),Me=this.localClippingEnabled,de=Te.init(this.clippingPlanes,Me),y=ke.get(R,D.length),y.init(),D.push(y),ae.enabled===!0&&ae.isPresenting===!0){const Ee=C.xr.getDepthSensingMesh();Ee!==null&&Ei(Ee,q,-1/0,C.sortObjects)}Ei(R,q,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(ue,se),Re=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Re&&Je.addToRenderList(y,R),this.info.render.frame++,de===!0&&Te.beginShadows();const ne=g.state.shadowsArray;ze.render(ne,R,q),de===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=y.opaque,Y=y.transmissive;if(g.setupLights(),q.isArrayCamera){const Ee=q.cameras;if(Y.length>0)for(let be=0,Fe=Ee.length;be<Fe;be++){const Ve=Ee[be];wr(K,Y,R,Ve)}Re&&Je.render(R);for(let be=0,Fe=Ee.length;be<Fe;be++){const Ve=Ee[be];Tr(y,R,Ve,Ve.viewport)}}else Y.length>0&&wr(K,Y,R,q),Re&&Je.render(R),Tr(y,R,q);B!==null&&U===0&&(L.updateMultisampleRenderTarget(B),L.updateRenderTargetMipmap(B)),R.isScene===!0&&R.onAfterRender(C,R,q),At.resetDefaultState(),P=-1,A=null,b.pop(),b.length>0?(g=b[b.length-1],de===!0&&Te.setGlobalState(C.clippingPlanes,g.state.camera)):g=null,D.pop(),D.length>0?y=D[D.length-1]:y=null};function Ei(R,q,ne,K){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)ne=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ee.intersectsSprite(R)){K&&Ze.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ae);const be=he.update(R),Fe=R.material;Fe.visible&&y.push(R,be,Fe,ne,Ze.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ee.intersectsObject(R))){const be=he.update(R),Fe=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ze.copy(R.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ze.copy(be.boundingSphere.center)),Ze.applyMatrix4(R.matrixWorld).applyMatrix4(Ae)),Array.isArray(Fe)){const Ve=be.groups;for(let rt=0,nt=Ve.length;rt<nt;rt++){const We=Ve[rt],vt=Fe[We.materialIndex];vt&&vt.visible&&y.push(R,be,vt,ne,Ze.z,We)}}else Fe.visible&&y.push(R,be,Fe,ne,Ze.z,null)}}const Ee=R.children;for(let be=0,Fe=Ee.length;be<Fe;be++)Ei(Ee[be],q,ne,K)}function Tr(R,q,ne,K){const Y=R.opaque,Ee=R.transmissive,be=R.transparent;g.setupLightsView(ne),de===!0&&Te.setGlobalState(C.clippingPlanes,ne),K&&$e.viewport(z.copy(K)),Y.length>0&&Xi(Y,q,ne),Ee.length>0&&Xi(Ee,q,ne),be.length>0&&Xi(be,q,ne),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function wr(R,q,ne,K){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[K.id]===void 0&&(g.state.transmissionRenderTarget[K.id]=new Qr(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?Ho:Vi,minFilter:Kr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const Ee=g.state.transmissionRenderTarget[K.id],be=K.viewport||z;Ee.setSize(be.z*C.transmissionResolutionScale,be.w*C.transmissionResolutionScale);const Fe=C.getRenderTarget();C.setRenderTarget(Ee),C.getClearColor(le),fe=C.getClearAlpha(),fe<1&&C.setClearColor(16777215,.5),C.clear(),Re&&Je.render(ne);const Ve=C.toneMapping;C.toneMapping=Sr;const rt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),g.setupLightsView(K),de===!0&&Te.setGlobalState(C.clippingPlanes,K),Xi(R,ne,K),L.updateMultisampleRenderTarget(Ee),L.updateRenderTargetMipmap(Ee),mt.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let We=0,vt=q.length;We<vt;We++){const lt=q[We],Ht=lt.object,Ut=lt.geometry,xt=lt.material,Ke=lt.group;if(xt.side===xi&&Ht.layers.test(K.layers)){const Vt=xt.side;xt.side=Un,xt.needsUpdate=!0,qo(Ht,ne,K,Ut,xt,Ke),xt.side=Vt,xt.needsUpdate=!0,nt=!0}}nt===!0&&(L.updateMultisampleRenderTarget(Ee),L.updateRenderTargetMipmap(Ee))}C.setRenderTarget(Fe),C.setClearColor(le,fe),rt!==void 0&&(K.viewport=rt),C.toneMapping=Ve}function Xi(R,q,ne){const K=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,Ee=R.length;Y<Ee;Y++){const be=R[Y],Fe=be.object,Ve=be.geometry,rt=K===null?be.material:K,nt=be.group;Fe.layers.test(ne.layers)&&qo(Fe,q,ne,Ve,rt,nt)}}function qo(R,q,ne,K,Y,Ee){R.onBeforeRender(C,q,ne,K,Y,Ee),R.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(C,q,ne,K,R,Ee),Y.transparent===!0&&Y.side===xi&&Y.forceSinglePass===!1?(Y.side=Un,Y.needsUpdate=!0,C.renderBufferDirect(ne,q,K,Y,R,Ee),Y.side=Mr,Y.needsUpdate=!0,C.renderBufferDirect(ne,q,K,Y,R,Ee),Y.side=xi):C.renderBufferDirect(ne,q,K,Y,R,Ee),R.onAfterRender(C,q,ne,K,Y,Ee)}function es(R,q,ne){q.isScene!==!0&&(q=me);const K=je.get(R),Y=g.state.lights,Ee=g.state.shadowsArray,be=Y.state.version,Fe=qe.getParameters(R,Y.state,Ee,q,ne),Ve=qe.getProgramCacheKey(Fe);let rt=K.programs;K.environment=R.isMeshStandardMaterial?q.environment:null,K.fog=q.fog,K.envMap=(R.isMeshStandardMaterial?te:w).get(R.envMap||K.environment),K.envMapRotation=K.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,rt===void 0&&(R.addEventListener("dispose",at),rt=new Map,K.programs=rt);let nt=rt.get(Ve);if(nt!==void 0){if(K.currentProgram===nt&&K.lightsStateVersion===be)return di(R,Fe),nt}else Fe.uniforms=qe.getUniforms(R),R.onBeforeCompile(Fe,C),nt=qe.acquireProgram(Fe,Ve),rt.set(Ve,nt),K.uniforms=Fe.uniforms;const We=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(We.clippingPlanes=Te.uniform),di(R,Fe),K.needsLights=Hl(R),K.lightsStateVersion=be,K.needsLights&&(We.ambientLightColor.value=Y.state.ambient,We.lightProbe.value=Y.state.probe,We.directionalLights.value=Y.state.directional,We.directionalLightShadows.value=Y.state.directionalShadow,We.spotLights.value=Y.state.spot,We.spotLightShadows.value=Y.state.spotShadow,We.rectAreaLights.value=Y.state.rectArea,We.ltc_1.value=Y.state.rectAreaLTC1,We.ltc_2.value=Y.state.rectAreaLTC2,We.pointLights.value=Y.state.point,We.pointLightShadows.value=Y.state.pointShadow,We.hemisphereLights.value=Y.state.hemi,We.directionalShadowMap.value=Y.state.directionalShadowMap,We.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,We.spotShadowMap.value=Y.state.spotShadowMap,We.spotLightMatrix.value=Y.state.spotLightMatrix,We.spotLightMap.value=Y.state.spotLightMap,We.pointShadowMap.value=Y.state.pointShadowMap,We.pointShadowMatrix.value=Y.state.pointShadowMatrix),K.currentProgram=nt,K.uniformsList=null,nt}function Yo(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Dl.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function di(R,q){const ne=je.get(R);ne.outputColorSpace=q.outputColorSpace,ne.batching=q.batching,ne.batchingColor=q.batchingColor,ne.instancing=q.instancing,ne.instancingColor=q.instancingColor,ne.instancingMorph=q.instancingMorph,ne.skinning=q.skinning,ne.morphTargets=q.morphTargets,ne.morphNormals=q.morphNormals,ne.morphColors=q.morphColors,ne.morphTargetsCount=q.morphTargetsCount,ne.numClippingPlanes=q.numClippingPlanes,ne.numIntersection=q.numClipIntersection,ne.vertexAlphas=q.vertexAlphas,ne.vertexTangents=q.vertexTangents,ne.toneMapping=q.toneMapping}function $o(R,q,ne,K,Y){q.isScene!==!0&&(q=me),L.resetTextureUnits();const Ee=q.fog,be=K.isMeshStandardMaterial?q.environment:null,Fe=B===null?C.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:qs,Ve=(K.isMeshStandardMaterial?te:w).get(K.envMap||be),rt=K.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,nt=!!ne.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),We=!!ne.morphAttributes.position,vt=!!ne.morphAttributes.normal,lt=!!ne.morphAttributes.color;let Ht=Sr;K.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ht=C.toneMapping);const Ut=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,xt=Ut!==void 0?Ut.length:0,Ke=je.get(K),Vt=g.state.lights;if(de===!0&&(Me===!0||R!==A)){const cn=R===A&&K.id===P;Te.setState(K,R,cn)}let _t=!1;K.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Vt.state.version||Ke.outputColorSpace!==Fe||Y.isBatchedMesh&&Ke.batching===!1||!Y.isBatchedMesh&&Ke.batching===!0||Y.isBatchedMesh&&Ke.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ke.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ke.instancing===!1||!Y.isInstancedMesh&&Ke.instancing===!0||Y.isSkinnedMesh&&Ke.skinning===!1||!Y.isSkinnedMesh&&Ke.skinning===!0||Y.isInstancedMesh&&Ke.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ke.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ke.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ke.instancingMorph===!1&&Y.morphTexture!==null||Ke.envMap!==Ve||K.fog===!0&&Ke.fog!==Ee||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Te.numPlanes||Ke.numIntersection!==Te.numIntersection)||Ke.vertexAlphas!==rt||Ke.vertexTangents!==nt||Ke.morphTargets!==We||Ke.morphNormals!==vt||Ke.morphColors!==lt||Ke.toneMapping!==Ht||Ke.morphTargetsCount!==xt)&&(_t=!0):(_t=!0,Ke.__version=K.version);let dn=Ke.currentProgram;_t===!0&&(dn=es(K,q,Y));let ji=!1,Sn=!1,Ti=!1;const bt=dn.getUniforms(),hn=Ke.uniforms;if($e.useProgram(dn.program)&&(ji=!0,Sn=!0,Ti=!0),K.id!==P&&(P=K.id,Sn=!0),ji||A!==R){$e.buffers.depth.getReversed()?(ve.copy(R.projectionMatrix),$v(ve),Kv(ve),bt.setValue(k,"projectionMatrix",ve)):bt.setValue(k,"projectionMatrix",R.projectionMatrix),bt.setValue(k,"viewMatrix",R.matrixWorldInverse);const nn=bt.map.cameraPosition;nn!==void 0&&nn.setValue(k,Ne.setFromMatrixPosition(R.matrixWorld)),dt.logarithmicDepthBuffer&&bt.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&bt.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),A!==R&&(A=R,Sn=!0,Ti=!0)}if(Y.isSkinnedMesh){bt.setOptional(k,Y,"bindMatrix"),bt.setOptional(k,Y,"bindMatrixInverse");const cn=Y.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),bt.setValue(k,"boneTexture",cn.boneTexture,L))}Y.isBatchedMesh&&(bt.setOptional(k,Y,"batchingTexture"),bt.setValue(k,"batchingTexture",Y._matricesTexture,L),bt.setOptional(k,Y,"batchingIdTexture"),bt.setValue(k,"batchingIdTexture",Y._indirectTexture,L),bt.setOptional(k,Y,"batchingColorTexture"),Y._colorsTexture!==null&&bt.setValue(k,"batchingColorTexture",Y._colorsTexture,L));const tn=ne.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&it.update(Y,ne,dn),(Sn||Ke.receiveShadow!==Y.receiveShadow)&&(Ke.receiveShadow=Y.receiveShadow,bt.setValue(k,"receiveShadow",Y.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(hn.envMap.value=Ve,hn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&q.environment!==null&&(hn.envMapIntensity.value=q.environmentIntensity),Sn&&(bt.setValue(k,"toneMappingExposure",C.toneMappingExposure),Ke.needsLights&&Ko(hn,Ti),Ee&&K.fog===!0&&Ce.refreshFogUniforms(hn,Ee),Ce.refreshMaterialUniforms(hn,K,W,ce,g.state.transmissionRenderTarget[R.id]),Dl.upload(k,Yo(Ke),hn,L)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Dl.upload(k,Yo(Ke),hn,L),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&bt.setValue(k,"center",Y.center),bt.setValue(k,"modelViewMatrix",Y.modelViewMatrix),bt.setValue(k,"normalMatrix",Y.normalMatrix),bt.setValue(k,"modelMatrix",Y.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const cn=K.uniformsGroups;for(let nn=0,St=cn.length;nn<St;nn++){const hi=cn[nn];j.update(hi,dn),j.bind(hi,dn)}}return dn}function Ko(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Hl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(R,q,ne){je.get(R.texture).__webglTexture=q,je.get(R.depthTexture).__webglTexture=ne;const K=je.get(R);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=ne===void 0,K.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,q){const ne=je.get(R);ne.__webglFramebuffer=q,ne.__useDefaultFramebuffer=q===void 0};const Zo=k.createFramebuffer();this.setRenderTarget=function(R,q=0,ne=0){B=R,I=q,U=ne;let K=!0,Y=null,Ee=!1,be=!1;if(R){const Ve=je.get(R);if(Ve.__useDefaultFramebuffer!==void 0)$e.bindFramebuffer(k.FRAMEBUFFER,null),K=!1;else if(Ve.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(Ve.__hasExternalTextures)L.rebindTextures(R,je.get(R.texture).__webglTexture,je.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const We=R.depthTexture;if(Ve.__boundDepthTexture!==We){if(We!==null&&je.has(We)&&(R.width!==We.image.width||R.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}const rt=R.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(be=!0);const nt=je.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(nt[q])?Y=nt[q][ne]:Y=nt[q],Ee=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?Y=je.get(R).__webglMultisampledFramebuffer:Array.isArray(nt)?Y=nt[ne]:Y=nt,z.copy(R.viewport),J.copy(R.scissor),Z=R.scissorTest}else z.copy(O).multiplyScalar(W).floor(),J.copy(re).multiplyScalar(W).floor(),Z=Ue;if(ne!==0&&(Y=Zo),$e.bindFramebuffer(k.FRAMEBUFFER,Y)&&K&&$e.drawBuffers(R,Y),$e.viewport(z),$e.scissor(J),$e.setScissorTest(Z),Ee){const Ve=je.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ve.__webglTexture,ne)}else if(be){const Ve=je.get(R.texture),rt=q;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ve.__webglTexture,ne,rt)}else if(R!==null&&ne!==0){const Ve=je.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ve.__webglTexture,ne)}P=-1},this.readRenderTargetPixels=function(R,q,ne,K,Y,Ee,be){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=je.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&be!==void 0&&(Fe=Fe[be]),Fe){$e.bindFramebuffer(k.FRAMEBUFFER,Fe);try{const Ve=R.texture,rt=Ve.format,nt=Ve.type;if(!dt.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-K&&ne>=0&&ne<=R.height-Y&&k.readPixels(q,ne,K,Y,ot.convert(rt),ot.convert(nt),Ee)}finally{const Ve=B!==null?je.get(B).__webglFramebuffer:null;$e.bindFramebuffer(k.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(R,q,ne,K,Y,Ee,be){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=je.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&be!==void 0&&(Fe=Fe[be]),Fe){const Ve=R.texture,rt=Ve.format,nt=Ve.type;if(!dt.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=R.width-K&&ne>=0&&ne<=R.height-Y){$e.bindFramebuffer(k.FRAMEBUFFER,Fe);const We=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,We),k.bufferData(k.PIXEL_PACK_BUFFER,Ee.byteLength,k.STREAM_READ),k.readPixels(q,ne,K,Y,ot.convert(rt),ot.convert(nt),0);const vt=B!==null?je.get(B).__webglFramebuffer:null;$e.bindFramebuffer(k.FRAMEBUFFER,vt);const lt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Yv(k,lt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,We),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ee),k.deleteBuffer(We),k.deleteSync(lt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,q=null,ne=0){R.isTexture!==!0&&(Os("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,R=arguments[1]);const K=Math.pow(2,-ne),Y=Math.floor(R.image.width*K),Ee=Math.floor(R.image.height*K),be=q!==null?q.x:0,Fe=q!==null?q.y:0;L.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,ne,0,0,be,Fe,Y,Ee),$e.unbindTexture()};const Qo=k.createFramebuffer(),Jo=k.createFramebuffer();this.copyTextureToTexture=function(R,q,ne=null,K=null,Y=0,Ee=null){R.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,R=arguments[1],q=arguments[2],Ee=arguments[3]||0,ne=null),Ee===null&&(Y!==0?(Os("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=Y,Y=0):Ee=0);let be,Fe,Ve,rt,nt,We,vt,lt,Ht;const Ut=R.isCompressedTexture?R.mipmaps[Ee]:R.image;if(ne!==null)be=ne.max.x-ne.min.x,Fe=ne.max.y-ne.min.y,Ve=ne.isBox3?ne.max.z-ne.min.z:1,rt=ne.min.x,nt=ne.min.y,We=ne.isBox3?ne.min.z:0;else{const tn=Math.pow(2,-Y);be=Math.floor(Ut.width*tn),Fe=Math.floor(Ut.height*tn),R.isDataArrayTexture?Ve=Ut.depth:R.isData3DTexture?Ve=Math.floor(Ut.depth*tn):Ve=1,rt=0,nt=0,We=0}K!==null?(vt=K.x,lt=K.y,Ht=K.z):(vt=0,lt=0,Ht=0);const xt=ot.convert(q.format),Ke=ot.convert(q.type);let Vt;q.isData3DTexture?(L.setTexture3D(q,0),Vt=k.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(L.setTexture2DArray(q,0),Vt=k.TEXTURE_2D_ARRAY):(L.setTexture2D(q,0),Vt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,q.unpackAlignment);const _t=k.getParameter(k.UNPACK_ROW_LENGTH),dn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),ji=k.getParameter(k.UNPACK_SKIP_PIXELS),Sn=k.getParameter(k.UNPACK_SKIP_ROWS),Ti=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ut.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ut.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,rt),k.pixelStorei(k.UNPACK_SKIP_ROWS,nt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,We);const bt=R.isDataArrayTexture||R.isData3DTexture,hn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const tn=je.get(R),cn=je.get(q),nn=je.get(tn.__renderTarget),St=je.get(cn.__renderTarget);$e.bindFramebuffer(k.READ_FRAMEBUFFER,nn.__webglFramebuffer),$e.bindFramebuffer(k.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let hi=0;hi<Ve;hi++)bt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,je.get(R).__webglTexture,Y,We+hi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,je.get(q).__webglTexture,Ee,Ht+hi)),k.blitFramebuffer(rt,nt,be,Fe,vt,lt,be,Fe,k.DEPTH_BUFFER_BIT,k.NEAREST);$e.bindFramebuffer(k.READ_FRAMEBUFFER,null),$e.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Y!==0||R.isRenderTargetTexture||je.has(R)){const tn=je.get(R),cn=je.get(q);$e.bindFramebuffer(k.READ_FRAMEBUFFER,Qo),$e.bindFramebuffer(k.DRAW_FRAMEBUFFER,Jo);for(let nn=0;nn<Ve;nn++)bt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,tn.__webglTexture,Y,We+nn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,tn.__webglTexture,Y),hn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,cn.__webglTexture,Ee,Ht+nn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,cn.__webglTexture,Ee),Y!==0?k.blitFramebuffer(rt,nt,be,Fe,vt,lt,be,Fe,k.COLOR_BUFFER_BIT,k.NEAREST):hn?k.copyTexSubImage3D(Vt,Ee,vt,lt,Ht+nn,rt,nt,be,Fe):k.copyTexSubImage2D(Vt,Ee,vt,lt,rt,nt,be,Fe);$e.bindFramebuffer(k.READ_FRAMEBUFFER,null),$e.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else hn?R.isDataTexture||R.isData3DTexture?k.texSubImage3D(Vt,Ee,vt,lt,Ht,be,Fe,Ve,xt,Ke,Ut.data):q.isCompressedArrayTexture?k.compressedTexSubImage3D(Vt,Ee,vt,lt,Ht,be,Fe,Ve,xt,Ut.data):k.texSubImage3D(Vt,Ee,vt,lt,Ht,be,Fe,Ve,xt,Ke,Ut):R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ee,vt,lt,be,Fe,xt,Ke,Ut.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ee,vt,lt,Ut.width,Ut.height,xt,Ut.data):k.texSubImage2D(k.TEXTURE_2D,Ee,vt,lt,be,Fe,xt,Ke,Ut);k.pixelStorei(k.UNPACK_ROW_LENGTH,_t),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,dn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ji),k.pixelStorei(k.UNPACK_SKIP_ROWS,Sn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ti),Ee===0&&q.generateMipmaps&&k.generateMipmap(Vt),$e.unbindTexture()},this.copyTextureToTexture3D=function(R,q,ne=null,K=null,Y=0){return R.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,K=arguments[1]||null,R=arguments[2],q=arguments[3],Y=arguments[4]||0),Os('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,q,ne,K,Y)},this.initRenderTarget=function(R){je.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),$e.unbindTexture()},this.resetState=function(){I=0,U=0,B=null,$e.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Tt._getUnpackColorSpace()}}function dE(){const s=Qn.useRef(null);return Qn.useEffect(()=>{const e=s.current;if(!e)return;const n=new x0,r=new Zn(60,window.innerWidth/window.innerHeight,.1,1e3);r.position.z=55;const a=new fE({canvas:e,alpha:!0,antialias:!0});a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.setSize(window.innerWidth,window.innerHeight);const l=(me,Re=.18)=>new vr({color:me,wireframe:!0,transparent:!0,opacity:Re}),u=(me,Re=.8)=>new vr({color:me,transparent:!0,opacity:Re}),f=(me,Re=.35)=>new cg({color:me,transparent:!0,opacity:Re}),h=new Xt,m=new Float32Array(3e3*3);for(let me=0;me<3e3*3;me++)m[me]=(Math.random()-.5)*230;h.setAttribute("position",new fi(m,3));const _=new E0(h,new ug({color:16777215,size:.1,transparent:!0,opacity:.5}));n.add(_);const v=new In,x=new Ot(new ko(.75,16,16),u(54527,.9));v.add(x),[0,Math.PI/3,-Math.PI/3].forEach(me=>{const Re=new Ot(new Bo(3.4,.07,8,64),new vr({color:54527,transparent:!0,opacity:.55}));Re.rotation.x=me,v.add(Re)}),v.position.set(28,5,-14),n.add(v);const E=new In;for(let me=0;me<4;me++){const Re=new Ot(new kl(2.3,2.3,.38,26),l(8141549,.22));Re.position.y=me*.72-1.1,E.add(Re)}const T=new Ot(new kl(.14,.14,3.2,8),l(8141549,.14));T.position.y=.4,E.add(T),E.position.set(-30,-5,-18),n.add(E);const y=new In,g=(me,Re,Qe)=>{const k=new Xt().setFromPoints(me);y.add(new Xr(k,f(Re,Qe)))};g([new G(-4,0,0),new G(4,0,0)],16096779,.45);const D=new fm([new G(-1,0,0),new G(.2,1.6,0),new G(2.2,1.6,0),new G(3.2,0,0)]);g(D.getPoints(32),16096779,.32);const b=[[-4,0],[-1,0],[.2,1.6],[2.2,1.6],[3.2,0],[4,0]],C=new ko(.24,8,8);b.forEach(([me,Re])=>{const Qe=new Ot(C,u(16096779,.78));Qe.position.set(me,Re,0),y.add(Qe)}),y.position.set(-22,15,-20),n.add(y);const V=new In;V.add(new Ot(new Bo(1.9,.3,10,42),l(16096779,.22))),V.add(new Ot(new Bo(.62,.12,8,22),l(16096779,.22)));for(let me=0;me<12;me++){const Re=me/12*Math.PI*2,Qe=new Ot(new yi(.3,.68,.2),l(16096779,.2));Qe.position.set(Math.cos(Re)*2.3,Math.sin(Re)*2.3,0),Qe.rotation.z=Re,V.add(Qe)}V.position.set(37,-13,-22),n.add(V);const I=new In;I.add(new Ot(new yi(5.6,4,.22),l(1096065,.2))),I.add(new Ot(new yi(5.6,.55,.25),new vr({color:1096065,transparent:!0,opacity:.15}))).position;const U=new Ot(new yi(5.6,.55,.25),new vr({color:1096065,transparent:!0,opacity:.15}));U.position.y=1.72,I.add(U),[3.2,2,3.8,1.6].forEach((me,Re)=>{const Qe=new Ot(new jo(me,.13),new vr({color:1096065,transparent:!0,opacity:.38,side:xi}));Qe.position.set(-2.6+me/2-.4,.9-Re*.62,.15),I.add(Qe)}),I.position.set(-27,17,-22),n.add(I);const B=new In,P=[[0,0,0],[3.6,1.4,0],[3.6,-1.4,0],[-3.6,1.4,0],[-3.6,-1.4,0],[0,3.2,0]],A=new ko(.36,10,10);P.forEach(([me,Re,Qe])=>{const k=new Ot(A,u(54527,.62));k.position.set(me,Re,Qe),B.add(k)}),[[0,1],[0,2],[0,3],[0,4],[0,5],[1,2],[3,4],[1,5]].forEach(([me,Re])=>{const Qe=new Xt().setFromPoints([new G(...P[me]),new G(...P[Re])]);B.add(new Xr(Qe,f(54527,.2)))}),B.position.set(27,-15,-20),n.add(B);const J=new In,Z=[],le=[];for(let me=0;me<200;me++){const Re=me/200*Math.PI*6,Qe=me*.065-6.5;Z.push(new G(Math.cos(Re)*1.5,Qe,Math.sin(Re)*1.5)),le.push(new G(Math.cos(Re+Math.PI)*1.5,Qe,Math.sin(Re+Math.PI)*1.5))}J.add(new Xr(new Xt().setFromPoints(Z),f(54527,.38))),J.add(new Xr(new Xt().setFromPoints(le),f(8141549,.38)));for(let me=0;me<14;me++){const Re=Math.floor(me/14*200),Qe=Re/200*Math.PI*6,k=Re*.065-6.5,ln=new Xt().setFromPoints([new G(Math.cos(Qe)*1.5,k,Math.sin(Qe)*1.5),new G(Math.cos(Qe+Math.PI)*1.5,k,Math.sin(Qe+Math.PI)*1.5)]);J.add(new Xr(ln,f(16777215,.1)))}J.position.set(-36,3,-26),n.add(J);const fe=new Ot(new id(3,1),l(8141549,.14));fe.position.set(40,18,-28),n.add(fe);const oe=new In;for(let me=0;me<3;me++){const Re=new Ot(new yi(4.2,.75,2.6),l(54527,.12));Re.position.y=me*1.1-1.1,oe.add(Re)}oe.position.set(-40,-14,-28),n.add(oe);const ce=new In,W=[new G(-2,1,0),new G(-3,0,0),new G(-3,0,0),new G(-2,-1,0),new G(1,1,0),new G(2,0,0),new G(2,0,0),new G(1,-1,0),new G(-.4,1,0),new G(.4,-1,0)],ue=new Xt().setFromPoints(W);ce.add(new M0(ue,f(54527,.45))),ce.position.set(10,20,-20),ce.scale.set(1.6,1.6,1.6),n.add(ce);const se=new In,O=me=>{const Re=[new G(me+.5,1.4,0),new G(me+.1,1,0),new G(me+.1,.2,0),new G(me-.3,0,0),new G(me+.1,-.2,0),new G(me+.1,-1,0),new G(me+.5,-1.4,0)],Qe=new fm(Re),k=new Xt().setFromPoints(Qe.getPoints(30));return new Xr(k,f(8141549,.4))};se.add(O(-1.5)),se.add(O(1.5)),se.position.set(14,-20,-18),se.scale.set(1.8,1.8,1.8),n.add(se);let re=0,Ue=0,ee=0,de=0;const Me=me=>{re=(me.clientX/window.innerWidth-.5)*2,Ue=(me.clientY/window.innerHeight-.5)*2};document.addEventListener("mousemove",Me);const ve=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",ve);const Ae=performance.now();let Ne;function Ze(){Ne=requestAnimationFrame(Ze);const me=(performance.now()-Ae)/1e3;_.rotation.y=me*.014,_.rotation.x=me*.005,v.rotation.y=me*.42,x.scale.setScalar(1+Math.sin(me*2.2)*.09),E.rotation.y=me*.28,E.position.y=-5+Math.sin(me*.48)*1.1,y.position.y=15+Math.sin(me*.38+1)*.9,V.rotation.z=me*.65,I.position.y=17+Math.sin(me*.33+2.1)*1,I.rotation.x=Math.sin(me*.18)*.06,I.rotation.y=Math.sin(me*.13)*.08,B.rotation.y=me*.14,B.position.y=-15+Math.sin(me*.44+.8)*1.1,J.rotation.y=me*.22,fe.rotation.x=me*.24,fe.rotation.y=me*.33,oe.position.y=-14+Math.sin(me*.52+3)*.9,ce.position.y=20+Math.sin(me*.3+.5)*1.2,ce.rotation.z=Math.sin(me*.12)*.08,se.position.y=-20+Math.sin(me*.28+1.5)*1.1,ee+=(re*5-ee)*.022,de+=(-Ue*3.5-de)*.022,r.position.x=ee,r.position.y=de,r.lookAt(n.position),a.render(n,r)}return Ze(),()=>{cancelAnimationFrame(Ne),window.removeEventListener("resize",ve),document.removeEventListener("mousemove",Me),n.traverse(me=>{me.geometry&&me.geometry.dispose(),me.material&&(Array.isArray(me.material)?me.material.forEach(Re=>Re.dispose()):me.material.dispose())}),a.dispose()}},[]),F.jsx("canvas",{ref:s,id:"bg-canvas"})}const hE=[{label:"About",href:"#about"},{label:"Skills",href:"#skills"},{label:"Experience",href:"#experience"},{label:"Projects",href:"#projects"},{label:"Education",href:"#education"}];function pE(){const[s,e]=Qn.useState(!1),[n,r]=Qn.useState(!1),[a,l]=Qn.useState("");Qn.useEffect(()=>{const f=()=>{e(window.scrollY>50);let h="";document.querySelectorAll("section[id]").forEach(m=>{window.scrollY>=m.offsetTop-130&&(h=m.id)}),l(h)};return window.addEventListener("scroll",f,{passive:!0}),()=>window.removeEventListener("scroll",f)},[]);const u=Qn.useCallback((f,h)=>{var m;f.preventDefault(),(m=document.querySelector(h))==null||m.scrollIntoView({behavior:"smooth"}),r(!1)},[]);return F.jsx("nav",{id:"navbar",className:s?"scrolled":"",children:F.jsxs("div",{className:"nav-container",children:[F.jsx("div",{className:"logo",children:F.jsxs("a",{href:"#hero",onClick:f=>u(f,"#hero"),children:[F.jsx("span",{className:"logo-bracket",children:"<"}),"NG",F.jsx("span",{className:"logo-bracket",children:"/>"})]})}),F.jsxs("div",{className:`nav-links${n?" open":""}`,children:[hE.map(f=>F.jsx("a",{href:f.href,className:a===f.href.slice(1)?"active-nav":"",onClick:h=>u(h,f.href),children:f.label},f.href)),F.jsx("a",{href:"#contact",className:"nav-cta",onClick:f=>u(f,"#contact"),children:"Hire Me"})]}),F.jsxs("button",{className:`hamburger${n?" open":""}`,onClick:()=>r(f=>!f),"aria-label":"Toggle navigation menu",children:[F.jsx("span",{}),F.jsx("span",{}),F.jsx("span",{})]})]})})}const Om=["Software Dev Engineer I","Full Stack Developer","React & Spring Boot Dev","AI Integration Specialist","Production Systems Builder"],mE=[{num:"1+",label:"Year Experience"},{num:"4+",label:"Projects Built"},{num:"10+",label:"Technologies"},{num:"99.9%",label:"Client Uptime"}];function gE(){const[s,e]=Qn.useState(""),n=Qn.useRef({pi:0,ci:0,deleting:!1,timerId:null});Qn.useEffect(()=>{const a=n.current;function l(){const u=Om[a.pi];a.deleting?(a.ci=Math.max(0,a.ci-1),e(u.substring(0,a.ci))):(a.ci=Math.min(u.length,a.ci+1),e(u.substring(0,a.ci)));let f=80;!a.deleting&&a.ci===u.length?(f=2200,a.deleting=!0):a.deleting&&a.ci===0?(a.deleting=!1,a.pi=(a.pi+1)%Om.length,f=450):f=a.deleting?38:80,a.timerId=setTimeout(l,f)}return a.timerId=setTimeout(l,1300),()=>clearTimeout(a.timerId)},[]);const r=a=>{var l;return(l=document.querySelector(a))==null?void 0:l.scrollIntoView({behavior:"smooth"})};return F.jsxs("section",{id:"hero",children:[F.jsxs("div",{className:"hero-content",children:[F.jsxs("div",{className:"hero-badge",children:[F.jsx("span",{className:"badge-dot"}),"Open to new opportunities"]}),F.jsxs("h1",{className:"hero-title",children:[F.jsx("span",{className:"greeting",children:"Hello, I'm"}),F.jsx("span",{className:"name",children:"Naveen G"})]}),F.jsxs("h2",{className:"hero-subtitle",children:[F.jsx("span",{className:"typed-text",children:s}),F.jsx("span",{className:"cursor",children:"|"})]}),F.jsxs("p",{className:"hero-desc",children:["SDE I at ",F.jsx("strong",{children:"KaptureCX"})," · Building scalable, production-grade applications with Java, Spring Boot, React & Node.js · Passionate about AI-driven solutions."]}),F.jsxs("div",{className:"hero-cta",children:[F.jsx("button",{className:"btn btn-primary",onClick:()=>r("#projects"),children:"View My Work"}),F.jsx("button",{className:"btn btn-outline",onClick:()=>r("#contact"),children:"Get In Touch"})]}),F.jsx("div",{className:"hero-stats",children:mE.map((a,l)=>F.jsxs("div",{className:"stat-group",children:[l>0&&F.jsx("div",{className:"stat-divider"}),F.jsxs("div",{className:"stat",children:[F.jsx("span",{className:"stat-num",children:a.num}),F.jsx("span",{className:"stat-label",children:a.label})]})]},a.num))})]}),F.jsxs("div",{className:"scroll-indicator",children:[F.jsx("div",{className:"scroll-line"}),F.jsx("span",{children:"Scroll"})]})]})}const _E="/portfolio/assets/new4-rmccU4NS.jpg",vE=()=>F.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:F.jsx("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"})}),xE=()=>F.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:F.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})}),yE=()=>F.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:F.jsx("path",{d:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"})}),SE=[{icon:"🏢",text:"SDE I @ KaptureCX, Bangalore — Jan 2025 to Present"},{icon:"🎓",text:"B.E CSE · Sona College of Technology, Salem · CGPA 8.82"},{icon:"📍",text:"Salem, Tamil Nadu · Open to Relocation"}];function ME(){const s=e=>{var n;return(n=document.querySelector(e))==null?void 0:n.scrollIntoView({behavior:"smooth"})};return F.jsx("section",{id:"about",children:F.jsx("div",{className:"container",children:F.jsxs("div",{className:"about-grid",children:[F.jsxs("div",{className:"about-image","data-reveal":!0,children:[F.jsxs("div",{className:"image-wrapper",children:[F.jsx("img",{src:_E,alt:"Naveen G"}),F.jsx("div",{className:"image-glow"})]}),F.jsxs("div",{className:"social-links",children:[F.jsx("a",{href:"https://github.com/naveen52004",target:"_blank",rel:"noreferrer",className:"social-link",title:"GitHub",children:F.jsx(vE,{})}),F.jsx("a",{href:"https://www.linkedin.com/in/naveen-g-366101225/",target:"_blank",rel:"noreferrer",className:"social-link",title:"LinkedIn",children:F.jsx(xE,{})}),F.jsx("a",{href:"mailto:naveenkalai001@gmail.com",className:"social-link",title:"Email",children:F.jsx(yE,{})})]})]}),F.jsxs("div",{className:"about-content","data-reveal":!0,children:[F.jsx("div",{className:"section-tag",children:"About Me"}),F.jsxs("h2",{className:"section-title",children:["Crafting Digital Experiences ",F.jsx("span",{className:"highlight",children:"With Purpose"})]}),F.jsxs("p",{className:"about-text",children:["I'm a ",F.jsx("strong",{children:"Software Development Engineer I at KaptureCX, Bangalore"}),", where I build scalable, production-grade systems for international enterprise clients. With hands-on experience across the full stack, I love turning complex problems into elegant solutions."]}),F.jsxs("p",{className:"about-text",children:["I've integrated AI-driven features into production workflows alongside AI engineering teams, and delivered critical solutions for clients like ",F.jsx("strong",{children:"BigBasket"})," and"," ",F.jsx("strong",{children:"Zepto"}),", maintaining ",F.jsx("strong",{children:"99.9% uptime"}),". Reduced config complexity by ",F.jsx("strong",{children:"40%"})," with Redux architecture overhauls."]}),F.jsx("div",{className:"about-highlights",children:SE.map(e=>F.jsxs("div",{className:"highlight-item",children:[F.jsx("span",{className:"hi-icon",children:e.icon}),F.jsx("span",{children:e.text})]},e.text))}),F.jsx("button",{className:"btn btn-primary",onClick:()=>s("#contact"),children:"Let's Connect"})]})]})})})}const EE=[{icon:"⚡",title:"Languages",tags:["Java","JavaScript","TypeScript","Python","C"]},{icon:"🎨",title:"Frontend",tags:["React","Redux","HTML5","CSS3","Tailwind CSS","Bootstrap"]},{icon:"⚙️",title:"Backend",tags:["Spring Boot","Node.js","Express.js","Kafka","Redis"]},{icon:"🗄️",title:"Databases",tags:["MySQL","MongoDB"]},{icon:"🤖",title:"AI & APIs",tags:["OpenAI","Gemini AI","REST APIs","Twitter/X API"]},{icon:"🔧",title:"DevOps & Tools",tags:["Git","Docker","Postman","Microservices"]}];function TE(){return F.jsx("section",{id:"skills",children:F.jsxs("div",{className:"container",children:[F.jsxs("div",{className:"section-header",children:[F.jsx("div",{className:"section-tag",children:"Technical Stack"}),F.jsxs("h2",{className:"section-title",children:["Skills & ",F.jsx("span",{className:"highlight",children:"Technologies"})]}),F.jsx("p",{className:"section-desc",children:"Battle-tested technologies I use to build production-ready applications"})]}),F.jsx("div",{className:"skills-grid",children:EE.map(s=>F.jsxs("div",{className:"skill-category","data-reveal":!0,children:[F.jsxs("h3",{className:"category-title",children:[F.jsx("span",{className:"cat-icon",children:s.icon}),s.title]}),F.jsx("div",{className:"skill-tags",children:s.tags.map(e=>F.jsx("span",{className:"skill-tag",children:e},e))})]},s.title))})]})})}const wE=[F.jsxs(F.Fragment,{children:["Delivered scalable, production-ready solutions for international clients including ",F.jsx("strong",{children:"Cruise"})," (ship booking platform) and ",F.jsx("strong",{children:"FairBill"})," (utility management)"]}),F.jsxs(F.Fragment,{children:["Revamped the ",F.jsx("strong",{children:"Cruise Booking Flow"})," using React, Node.js & Express.js — improving dynamic flow handling and enabling enhanced self-serve capabilities"]}),F.jsxs(F.Fragment,{children:["Collaborated closely with AI engineering teams to integrate ",F.jsx("strong",{children:"AI-driven features"})," into production workflows"]}),F.jsxs(F.Fragment,{children:["Designed and implemented RESTful APIs including ",F.jsx("strong",{children:"Twitter/X integration"})," to auto-generate customer tickets, boosting automation efficiency"]}),F.jsxs(F.Fragment,{children:["Improved frontend modularity using ",F.jsx("strong",{children:"Redux"}),", reducing configuration complexity by ",F.jsx("strong",{children:"40%"})," and improving scalability for SMB clients"]}),F.jsxs(F.Fragment,{children:["Resolved critical production issues for ",F.jsx("strong",{children:"BigBasket"})," and ",F.jsx("strong",{children:"Zepto"}),", maintaining ",F.jsx("strong",{children:"99.9% uptime"})]}),F.jsx(F.Fragment,{children:"Worked cross-functionally with QA engineers, product managers, and designers — from ideation to production"})],AE=["React","Redux","Node.js","Express.js","Java","Spring Boot","TypeScript","REST APIs"],RE=[{label:"Full-Time",cls:"badge-green"},{label:"Full Stack",cls:"badge-blue"},{label:"AI Integration",cls:"badge-purple"},{label:"Enterprise",cls:"badge-orange"}];function CE(){return F.jsx("section",{id:"experience",children:F.jsxs("div",{className:"container",children:[F.jsxs("div",{className:"section-header",children:[F.jsx("div",{className:"section-tag",children:"Work History"}),F.jsxs("h2",{className:"section-title",children:["Professional ",F.jsx("span",{className:"highlight",children:"Experience"})]})]}),F.jsx("div",{className:"experience-timeline",children:F.jsxs("div",{className:"exp-card","data-reveal":!0,children:[F.jsx("div",{className:"exp-card-top-bar"}),F.jsxs("div",{className:"exp-header",children:[F.jsxs("div",{className:"exp-company",children:[F.jsx("div",{className:"company-logo",children:"KCX"}),F.jsxs("div",{className:"company-info",children:[F.jsx("h3",{children:"Software Development Engineer I"}),F.jsx("span",{className:"company-name",children:"KaptureCX  ·  Bangalore, India"})]})]}),F.jsx("span",{className:"exp-date",children:"Jan 2025 — Present"})]}),F.jsx("div",{className:"exp-badges",children:RE.map(s=>F.jsx("span",{className:`badge ${s.cls}`,children:s.label},s.label))}),F.jsx("ul",{className:"exp-list",children:wE.map((s,e)=>F.jsx("li",{children:s},e))}),F.jsx("div",{className:"exp-stack",children:AE.map(s=>F.jsx("span",{children:s},s))})]})})]})})}const PE=[{id:"01",icon:"🤖",title:"AI-Powered Dynamic Dashboard Builder",desc:F.jsxs(F.Fragment,{children:["Led development of an AI-based dashboard builder enabling non-technical users to create data visualizations using ",F.jsx("strong",{children:"natural language and voice commands"}),". Reduced time-to-insight by ",F.jsx("strong",{children:"70%"})," for business users."]}),features:["Voice-to-text input with dynamic query generation","Real-time bar, line, pie & table charts with persistent dashboards","Reusable REST APIs and frontend components for BI workflows"],stack:["React","Redux","Node.js","OpenAI","Tailwind CSS"],featured:!0,accent:""},{id:"02",icon:"🎨",title:"Kapture AI Studio",desc:F.jsxs(F.Fragment,{children:["AI-powered UI to generate chatbot themes from uploaded website screenshots using ",F.jsx("strong",{children:"Gemini AI"}),". Enables dynamic, on-brand theme customization for enterprise deployments."]}),features:["JSON-based theme config via Gemini AI + manual Redux controls","Backend workflows for config persistence & runtime theme loading"],stack:["React","Redux","Gemini AI","Java","SQL"],featured:!1,accent:"accent-purple"},{id:"03",icon:"🔍",title:"PFDNet — Photo Forgery Detection",desc:F.jsxs(F.Fragment,{children:["Deep learning system using ",F.jsx("strong",{children:"Invertible Neural Networks"})," to detect image forgery. Addresses cybersecurity and deepfake threats with high detection accuracy."]}),features:["INN architecture for precise tampered-region detection","Run-Length Encoding (RLE) for lossless compression & self-recovery"],stack:["Python","Deep Learning","INN","RLE"],featured:!1,accent:"accent-orange"},{id:"04",icon:"🍽️",title:"Food Recipe Website",desc:F.jsx(F.Fragment,{children:"Full-stack recipe platform with authentication, responsive UI, and intuitive navigation. Secure PHP + MySQL backend for data handling and session management."}),features:["User authentication & secure session management","Responsive, accessible recipe browsing experience"],stack:["HTML","CSS","JavaScript","PHP","MySQL"],featured:!1,accent:"accent-green"}];function bE({project:s}){const{id:e,icon:n,title:r,desc:a,features:l,stack:u,featured:f,accent:h}=s;return F.jsxs("div",{className:`project-card${f?" featured":""}`,"data-reveal":!0,children:[F.jsx("div",{className:`project-top-accent${h?` ${h}`:""}`}),F.jsxs("div",{className:"project-content",children:[F.jsxs("div",{className:"project-header",children:[F.jsx("span",{className:"project-num",children:e}),F.jsx("div",{className:"project-icon-wrap",children:n})]}),F.jsx("h3",{className:"project-title",children:r}),F.jsx("p",{className:"project-desc",children:a}),F.jsx("ul",{className:"project-features",children:l.map((m,_)=>F.jsx("li",{children:m},_))}),F.jsx("div",{className:"project-footer",children:F.jsx("div",{className:"project-stack",children:u.map(m=>F.jsx("span",{children:m},m))})})]})]})}function LE(){return F.jsx("section",{id:"projects",children:F.jsxs("div",{className:"container",children:[F.jsxs("div",{className:"section-header",children:[F.jsx("div",{className:"section-tag",children:"Portfolio"}),F.jsxs("h2",{className:"section-title",children:["Featured ",F.jsx("span",{className:"highlight",children:"Projects"})]}),F.jsx("p",{className:"section-desc",children:"Things I've built that I'm proud of"})]}),F.jsx("div",{className:"projects-grid",children:PE.map(s=>F.jsx(bE,{project:s},s.id))})]})})}const DE=[{title:"Java Full Stack Developer",issuer:"Wipro TalentNext",details:"Spring Boot · React · MySQL"},{title:"Salesforce Developer Internship",issuer:"Salesforce",details:"Enterprise CRM Development"}];function NE(){return F.jsx("section",{id:"education",children:F.jsx("div",{className:"container",children:F.jsxs("div",{className:"edu-cert-grid",children:[F.jsxs("div",{className:"edu-side","data-reveal":!0,children:[F.jsx("div",{className:"section-tag",children:"Academic Background"}),F.jsx("h2",{className:"section-title-sm",children:"Education"}),F.jsxs("div",{className:"edu-card",children:[F.jsx("div",{className:"edu-icon-wrap",children:"🎓"}),F.jsxs("div",{className:"edu-info",children:[F.jsx("h3",{children:"B.E — Computer Science & Engineering"}),F.jsx("span",{className:"edu-school",children:"Sona College of Technology, Salem"}),F.jsxs("div",{className:"edu-meta",children:[F.jsx("span",{className:"edu-year",children:"2021 — 2025"}),F.jsx("span",{className:"edu-cgpa",children:"CGPA: 8.82"})]}),F.jsx("p",{className:"edu-note",children:"Coursework: Data Structures, Web Development, Software Engineering, AI/ML"})]})]})]}),F.jsxs("div",{className:"cert-side","data-reveal":!0,children:[F.jsx("div",{className:"section-tag",children:"Achievements"}),F.jsx("h2",{className:"section-title-sm",children:"Certifications"}),F.jsx("div",{className:"cert-list",children:DE.map(s=>F.jsxs("div",{className:"cert-card",children:[F.jsx("div",{className:"cert-check",children:"✓"}),F.jsxs("div",{className:"cert-info",children:[F.jsx("h3",{children:s.title}),F.jsx("span",{className:"cert-issuer",children:s.issuer}),F.jsx("p",{children:s.details})]})]},s.title))})]})]})})})}const IE=[{icon:"📧",label:"Email",value:"naveenkalai001@gmail.com",href:"mailto:naveenkalai001@gmail.com"},{icon:"📱",label:"Phone",value:"+91 8870214619",href:"tel:+918870214619"},{icon:"💼",label:"LinkedIn",value:"naveen-g-366101225",href:"https://www.linkedin.com/in/naveen-g-366101225/"},{icon:"🐙",label:"GitHub",value:"naveen52004",href:"https://github.com/naveen52004"}];function UE(){return F.jsx("section",{id:"contact",children:F.jsxs("div",{className:"container",children:[F.jsxs("div",{className:"section-header",children:[F.jsx("div",{className:"section-tag",children:"Get In Touch"}),F.jsxs("h2",{className:"section-title",children:["Let's ",F.jsx("span",{className:"highlight",children:"Connect"})]}),F.jsx("p",{className:"section-desc",children:"Open to full-time roles, interesting projects, or just a good conversation about tech."})]}),F.jsx("div",{className:"contact-grid",children:IE.map(s=>F.jsxs("a",{href:s.href,className:"contact-card",target:s.href.startsWith("http")?"_blank":void 0,rel:s.href.startsWith("http")?"noreferrer":void 0,"data-reveal":!0,children:[F.jsx("div",{className:"contact-icon-wrap",children:s.icon}),F.jsx("h3",{children:s.label}),F.jsx("span",{children:s.value})]},s.label))})]})})}const FE=[{label:"GitHub",href:"https://github.com/naveen52004"},{label:"LinkedIn",href:"https://www.linkedin.com/in/naveen-g-366101225/"},{label:"Instagram",href:"https://www.instagram.com/g_n_a_v_e_e_n_/"},{label:"Email",href:"mailto:naveenkalai001@gmail.com"}];function OE(){return F.jsx("footer",{id:"footer",children:F.jsxs("div",{className:"footer-inner",children:[F.jsxs("div",{className:"footer-logo",children:[F.jsx("span",{className:"logo-bracket",children:"<"}),"NG",F.jsx("span",{className:"logo-bracket",children:"/>"})]}),F.jsxs("p",{children:["Designed & Built by ",F.jsx("strong",{children:"Naveen G"})," · Salem, Tamil Nadu"]}),F.jsx("div",{className:"footer-links",children:FE.map(s=>F.jsx("a",{href:s.href,target:"_blank",rel:"noreferrer",children:s.label},s.label))})]})})}function kE(){return Qn.useEffect(()=>{const s=new IntersectionObserver(e=>{e.forEach((n,r)=>{n.isIntersecting&&(setTimeout(()=>n.target.classList.add("visible"),r*80),s.unobserve(n.target))})},{threshold:.1});return document.querySelectorAll("[data-reveal]").forEach(e=>s.observe(e)),()=>s.disconnect()},[]),F.jsxs(F.Fragment,{children:[F.jsx(dE,{}),F.jsx(pE,{}),F.jsxs("main",{children:[F.jsx(gE,{}),F.jsx(ME,{}),F.jsx(TE,{}),F.jsx(CE,{}),F.jsx(LE,{}),F.jsx(NE,{}),F.jsx(UE,{})]}),F.jsx(OE,{})]})}iv.createRoot(document.getElementById("root")).render(F.jsx(Qn.StrictMode,{children:F.jsx(kE,{})}));
