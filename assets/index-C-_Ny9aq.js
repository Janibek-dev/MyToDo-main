(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function hc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const he={},Fs=[],Lt=()=>{},Ym=()=>!1,qo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),dc=t=>t.startsWith("onUpdate:"),Ae=Object.assign,fc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Qm=Object.prototype.hasOwnProperty,le=(t,e)=>Qm.call(t,e),H=Array.isArray,$s=t=>gr(t)==="[object Map]",zo=t=>gr(t)==="[object Set]",ju=t=>gr(t)==="[object Date]",q=t=>typeof t=="function",ye=t=>typeof t=="string",Vt=t=>typeof t=="symbol",de=t=>t!==null&&typeof t=="object",Tf=t=>(de(t)||q(t))&&q(t.then)&&q(t.catch),wf=Object.prototype.toString,gr=t=>wf.call(t),Xm=t=>gr(t).slice(8,-1),Cf=t=>gr(t)==="[object Object]",pc=t=>ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Li=hc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Jm=/-(\w)/g,ut=Yo(t=>t.replace(Jm,(e,n)=>n?n.toUpperCase():"")),Zm=/\B([A-Z])/g,Mn=Yo(t=>t.replace(Zm,"-$1").toLowerCase()),Qo=Yo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Oa=Yo(t=>t?`on${Qo(t)}`:""),rs=(t,e)=>!Object.is(t,e),Yr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},yl=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},ao=t=>{const e=parseFloat(t);return isNaN(e)?t:e},ev=t=>{const e=ye(t)?Number(t):NaN;return isNaN(e)?t:e};let Ku;const Xo=()=>Ku||(Ku=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _c(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ye(s)?iv(s):_c(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(ye(t)||de(t))return t}const tv=/;(?![^(]*\))/g,nv=/:([^]+)/,sv=/\/\*[^]*?\*\//g;function iv(t){const e={};return t.replace(sv,"").split(tv).forEach(n=>{if(n){const s=n.split(nv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function tn(t){let e="";if(ye(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=tn(t[n]);s&&(e+=s+" ")}else if(de(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const rv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ov=hc(rv);function If(t){return!!t||t===""}function av(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Jo(t[s],e[s]);return n}function Jo(t,e){if(t===e)return!0;let n=ju(t),s=ju(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Vt(t),s=Vt(e),n||s)return t===e;if(n=H(t),s=H(e),n||s)return n&&s?av(t,e):!1;if(n=de(t),s=de(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Jo(t[o],e[o]))return!1}}return String(t)===String(e)}function lv(t,e){return t.findIndex(n=>Jo(n,e))}const Sf=t=>!!(t&&t.__v_isRef===!0),Me=t=>ye(t)?t:t==null?"":H(t)||de(t)&&(t.toString===wf||!q(t.toString))?Sf(t)?Me(t.value):JSON.stringify(t,Af,2):String(t),Af=(t,e)=>Sf(e)?Af(t,e.value):$s(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Ra(s,r)+" =>"]=i,n),{})}:zo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ra(n))}:Vt(e)?Ra(e):de(e)&&!H(e)&&!Cf(e)?String(e):e,Ra=(t,e="")=>{var n;return Vt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ge;class cv{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ge,!e&&Ge&&(this.index=(Ge.scopes||(Ge.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ge;try{return Ge=this,e()}finally{Ge=n}}}on(){++this._on===1&&(this.prevScope=Ge,Ge=this)}off(){this._on>0&&--this._on===0&&(Ge=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function uv(){return Ge}let pe;const Pa=new WeakSet;class Nf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ge&&Ge.active&&Ge.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Pa.has(this)&&(Pa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Rf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Gu(this),Pf(this);const e=pe,n=bt;pe=this,bt=!0;try{return this.fn()}finally{kf(this),pe=e,bt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)vc(e);this.deps=this.depsTail=void 0,Gu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Pa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){bl(this)&&this.run()}get dirty(){return bl(this)}}let Of=0,Mi,Fi;function Rf(t,e=!1){if(t.flags|=8,e){t.next=Fi,Fi=t;return}t.next=Mi,Mi=t}function gc(){Of++}function mc(){if(--Of>0)return;if(Fi){let e=Fi;for(Fi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Mi;){let e=Mi;for(Mi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Pf(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function kf(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),vc(s),hv(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function bl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Df(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Df(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Xi)||(t.globalVersion=Xi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!bl(t))))return;t.flags|=2;const e=t.dep,n=pe,s=bt;pe=t,bt=!0;try{Pf(t);const i=t.fn(t._value);(e.version===0||rs(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{pe=n,bt=s,kf(t),t.flags&=-3}}function vc(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)vc(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function hv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let bt=!0;const xf=[];function nn(){xf.push(bt),bt=!1}function sn(){const t=xf.pop();bt=t===void 0?!0:t}function Gu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=pe;pe=void 0;try{e()}finally{pe=n}}}let Xi=0;class dv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Lf{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!pe||!bt||pe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==pe)n=this.activeLink=new dv(pe,this),pe.deps?(n.prevDep=pe.depsTail,pe.depsTail.nextDep=n,pe.depsTail=n):pe.deps=pe.depsTail=n,Mf(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=pe.depsTail,n.nextDep=void 0,pe.depsTail.nextDep=n,pe.depsTail=n,pe.deps===n&&(pe.deps=s)}return n}trigger(e){this.version++,Xi++,this.notify(e)}notify(e){gc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{mc()}}}function Mf(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Mf(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Tl=new WeakMap,os=Symbol(""),wl=Symbol(""),Ji=Symbol("");function ke(t,e,n){if(bt&&pe){let s=Tl.get(t);s||Tl.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new Lf),i.map=s,i.key=n),i.track()}}function Gt(t,e,n,s,i,r){const o=Tl.get(t);if(!o){Xi++;return}const a=l=>{l&&l.trigger()};if(gc(),e==="clear")o.forEach(a);else{const l=H(t),c=l&&pc(n);if(l&&n==="length"){const u=Number(s);o.forEach((h,d)=>{(d==="length"||d===Ji||!Vt(d)&&d>=u)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Ji)),e){case"add":l?c&&a(o.get("length")):(a(o.get(os)),$s(t)&&a(o.get(wl)));break;case"delete":l||(a(o.get(os)),$s(t)&&a(o.get(wl)));break;case"set":$s(t)&&a(o.get(os));break}}mc()}function Is(t){const e=ae(t);return e===t?e:(ke(e,"iterate",Ji),Tt(t)?e:e.map(Fe))}function Zo(t){return ke(t=ae(t),"iterate",Ji),t}const fv={__proto__:null,[Symbol.iterator](){return ka(this,Symbol.iterator,Fe)},concat(...t){return Is(this).concat(...t.map(e=>H(e)?Is(e):e))},entries(){return ka(this,"entries",t=>(t[1]=Fe(t[1]),t))},every(t,e){return jt(this,"every",t,e,void 0,arguments)},filter(t,e){return jt(this,"filter",t,e,n=>n.map(Fe),arguments)},find(t,e){return jt(this,"find",t,e,Fe,arguments)},findIndex(t,e){return jt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return jt(this,"findLast",t,e,Fe,arguments)},findLastIndex(t,e){return jt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return jt(this,"forEach",t,e,void 0,arguments)},includes(...t){return Da(this,"includes",t)},indexOf(...t){return Da(this,"indexOf",t)},join(t){return Is(this).join(t)},lastIndexOf(...t){return Da(this,"lastIndexOf",t)},map(t,e){return jt(this,"map",t,e,void 0,arguments)},pop(){return wi(this,"pop")},push(...t){return wi(this,"push",t)},reduce(t,...e){return qu(this,"reduce",t,e)},reduceRight(t,...e){return qu(this,"reduceRight",t,e)},shift(){return wi(this,"shift")},some(t,e){return jt(this,"some",t,e,void 0,arguments)},splice(...t){return wi(this,"splice",t)},toReversed(){return Is(this).toReversed()},toSorted(t){return Is(this).toSorted(t)},toSpliced(...t){return Is(this).toSpliced(...t)},unshift(...t){return wi(this,"unshift",t)},values(){return ka(this,"values",Fe)}};function ka(t,e,n){const s=Zo(t),i=s[e]();return s!==t&&!Tt(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const pv=Array.prototype;function jt(t,e,n,s,i,r){const o=Zo(t),a=o!==t&&!Tt(t),l=o[e];if(l!==pv[e]){const h=l.apply(t,r);return a?Fe(h):h}let c=n;o!==t&&(a?c=function(h,d){return n.call(this,Fe(h),d,t)}:n.length>2&&(c=function(h,d){return n.call(this,h,d,t)}));const u=l.call(o,c,s);return a&&i?i(u):u}function qu(t,e,n,s){const i=Zo(t);let r=n;return i!==t&&(Tt(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,Fe(a),l,t)}),i[e](r,...s)}function Da(t,e,n){const s=ae(t);ke(s,"iterate",Ji);const i=s[e](...n);return(i===-1||i===!1)&&Tc(n[0])?(n[0]=ae(n[0]),s[e](...n)):i}function wi(t,e,n=[]){nn(),gc();const s=ae(t)[e].apply(t,n);return mc(),sn(),s}const _v=hc("__proto__,__v_isRef,__isVue"),Ff=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Vt));function gv(t){Vt(t)||(t=String(t));const e=ae(this);return ke(e,"has",t),e.hasOwnProperty(t)}class $f{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Sv:Wf:r?Hf:Vf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=H(e);if(!i){let l;if(o&&(l=fv[n]))return l;if(n==="hasOwnProperty")return gv}const a=Reflect.get(e,n,Ve(e)?e:s);return(Vt(n)?Ff.has(n):_v(n))||(i||ke(e,"get",n),r)?a:Ve(a)?o&&pc(n)?a:a.value:de(a)?i?Bf(a):yc(a):a}}class Uf extends $f{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const l=ls(r);if(!Tt(s)&&!ls(s)&&(r=ae(r),s=ae(s)),!H(e)&&Ve(r)&&!Ve(s))return l?!1:(r.value=s,!0)}const o=H(e)&&pc(n)?Number(n)<e.length:le(e,n),a=Reflect.set(e,n,s,Ve(e)?e:i);return e===ae(i)&&(o?rs(s,r)&&Gt(e,"set",n,s):Gt(e,"add",n,s)),a}deleteProperty(e,n){const s=le(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Gt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Vt(n)||!Ff.has(n))&&ke(e,"has",n),s}ownKeys(e){return ke(e,"iterate",H(e)?"length":os),Reflect.ownKeys(e)}}class mv extends $f{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const vv=new Uf,Ev=new mv,yv=new Uf(!0);const Cl=t=>t,Lr=t=>Reflect.getPrototypeOf(t);function bv(t,e,n){return function(...s){const i=this.__v_raw,r=ae(i),o=$s(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Cl:e?lo:Fe;return!e&&ke(r,"iterate",l?wl:os),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Mr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Tv(t,e){const n={get(i){const r=this.__v_raw,o=ae(r),a=ae(i);t||(rs(i,a)&&ke(o,"get",i),ke(o,"get",a));const{has:l}=Lr(o),c=e?Cl:t?lo:Fe;if(l.call(o,i))return c(r.get(i));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&ke(ae(i),"iterate",os),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=ae(r),a=ae(i);return t||(rs(i,a)&&ke(o,"has",i),ke(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,l=ae(a),c=e?Cl:t?lo:Fe;return!t&&ke(l,"iterate",os),a.forEach((u,h)=>i.call(r,c(u),c(h),o))}};return Ae(n,t?{add:Mr("add"),set:Mr("set"),delete:Mr("delete"),clear:Mr("clear")}:{add(i){!e&&!Tt(i)&&!ls(i)&&(i=ae(i));const r=ae(this);return Lr(r).has.call(r,i)||(r.add(i),Gt(r,"add",i,i)),this},set(i,r){!e&&!Tt(r)&&!ls(r)&&(r=ae(r));const o=ae(this),{has:a,get:l}=Lr(o);let c=a.call(o,i);c||(i=ae(i),c=a.call(o,i));const u=l.call(o,i);return o.set(i,r),c?rs(r,u)&&Gt(o,"set",i,r):Gt(o,"add",i,r),this},delete(i){const r=ae(this),{has:o,get:a}=Lr(r);let l=o.call(r,i);l||(i=ae(i),l=o.call(r,i)),a&&a.call(r,i);const c=r.delete(i);return l&&Gt(r,"delete",i,void 0),c},clear(){const i=ae(this),r=i.size!==0,o=i.clear();return r&&Gt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=bv(i,t,e)}),n}function Ec(t,e){const n=Tv(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(le(n,i)&&i in s?n:s,i,r)}const wv={get:Ec(!1,!1)},Cv={get:Ec(!1,!0)},Iv={get:Ec(!0,!1)};const Vf=new WeakMap,Hf=new WeakMap,Wf=new WeakMap,Sv=new WeakMap;function Av(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nv(t){return t.__v_skip||!Object.isExtensible(t)?0:Av(Xm(t))}function yc(t){return ls(t)?t:bc(t,!1,vv,wv,Vf)}function Ov(t){return bc(t,!1,yv,Cv,Hf)}function Bf(t){return bc(t,!0,Ev,Iv,Wf)}function bc(t,e,n,s,i){if(!de(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=Nv(t);if(r===0)return t;const o=i.get(t);if(o)return o;const a=new Proxy(t,r===2?s:n);return i.set(t,a),a}function Us(t){return ls(t)?Us(t.__v_raw):!!(t&&t.__v_isReactive)}function ls(t){return!!(t&&t.__v_isReadonly)}function Tt(t){return!!(t&&t.__v_isShallow)}function Tc(t){return t?!!t.__v_raw:!1}function ae(t){const e=t&&t.__v_raw;return e?ae(e):t}function Rv(t){return!le(t,"__v_skip")&&Object.isExtensible(t)&&yl(t,"__v_skip",!0),t}const Fe=t=>de(t)?yc(t):t,lo=t=>de(t)?Bf(t):t;function Ve(t){return t?t.__v_isRef===!0:!1}function Pv(t){return Ve(t)?t.value:t}const kv={get:(t,e,n)=>e==="__v_raw"?t:Pv(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ve(i)&&!Ve(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function jf(t){return Us(t)?t:new Proxy(t,kv)}class Dv{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Lf(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Xi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&pe!==this)return Rf(this,!0),!0}get value(){const e=this.dep.track();return Df(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function xv(t,e,n=!1){let s,i;return q(t)?s=t:(s=t.get,i=t.set),new Dv(s,i,n)}const Fr={},co=new WeakMap;let Yn;function Lv(t,e=!1,n=Yn){if(n){let s=co.get(n);s||co.set(n,s=[]),s.push(t)}}function Mv(t,e,n=he){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:l}=n,c=C=>i?C:Tt(C)||i===!1||i===0?qt(C,1):qt(C);let u,h,d,_,g=!1,v=!1;if(Ve(t)?(h=()=>t.value,g=Tt(t)):Us(t)?(h=()=>c(t),g=!0):H(t)?(v=!0,g=t.some(C=>Us(C)||Tt(C)),h=()=>t.map(C=>{if(Ve(C))return C.value;if(Us(C))return c(C);if(q(C))return l?l(C,2):C()})):q(t)?e?h=l?()=>l(t,2):t:h=()=>{if(d){nn();try{d()}finally{sn()}}const C=Yn;Yn=u;try{return l?l(t,3,[_]):t(_)}finally{Yn=C}}:h=Lt,e&&i){const C=h,U=i===!0?1/0:i;h=()=>qt(C(),U)}const N=uv(),k=()=>{u.stop(),N&&N.active&&fc(N.effects,u)};if(r&&e){const C=e;e=(...U)=>{C(...U),k()}}let x=v?new Array(t.length).fill(Fr):Fr;const M=C=>{if(!(!(u.flags&1)||!u.dirty&&!C))if(e){const U=u.run();if(i||g||(v?U.some((G,Q)=>rs(G,x[Q])):rs(U,x))){d&&d();const G=Yn;Yn=u;try{const Q=[U,x===Fr?void 0:v&&x[0]===Fr?[]:x,_];x=U,l?l(e,3,Q):e(...Q)}finally{Yn=G}}}else u.run()};return a&&a(M),u=new Nf(h),u.scheduler=o?()=>o(M,!1):M,_=C=>Lv(C,!1,u),d=u.onStop=()=>{const C=co.get(u);if(C){if(l)l(C,4);else for(const U of C)U();co.delete(u)}},e?s?M(!0):x=u.run():o?o(M.bind(null,!0),!0):u.run(),k.pause=u.pause.bind(u),k.resume=u.resume.bind(u),k.stop=k,k}function qt(t,e=1/0,n){if(e<=0||!de(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ve(t))qt(t.value,e,n);else if(H(t))for(let s=0;s<t.length;s++)qt(t[s],e,n);else if(zo(t)||$s(t))t.forEach(s=>{qt(s,e,n)});else if(Cf(t)){for(const s in t)qt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&qt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function mr(t,e,n,s){try{return s?t(...s):t()}catch(i){ea(i,e,n)}}function Ct(t,e,n,s){if(q(t)){const i=mr(t,e,n,s);return i&&Tf(i)&&i.catch(r=>{ea(r,e,n)}),i}if(H(t)){const i=[];for(let r=0;r<t.length;r++)i.push(Ct(t[r],e,n,s));return i}}function ea(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||he;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,l,c)===!1)return}a=a.parent}if(r){nn(),mr(r,null,10,[t,l,c]),sn();return}}Fv(t,n,i,s,o)}function Fv(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const $e=[];let Dt=-1;const Vs=[];let vn=null,Os=0;const Kf=Promise.resolve();let uo=null;function Gf(t){const e=uo||Kf;return t?e.then(this?t.bind(this):t):e}function $v(t){let e=Dt+1,n=$e.length;for(;e<n;){const s=e+n>>>1,i=$e[s],r=Zi(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function wc(t){if(!(t.flags&1)){const e=Zi(t),n=$e[$e.length-1];!n||!(t.flags&2)&&e>=Zi(n)?$e.push(t):$e.splice($v(e),0,t),t.flags|=1,qf()}}function qf(){uo||(uo=Kf.then(Yf))}function Uv(t){H(t)?Vs.push(...t):vn&&t.id===-1?vn.splice(Os+1,0,t):t.flags&1||(Vs.push(t),t.flags|=1),qf()}function zu(t,e,n=Dt+1){for(;n<$e.length;n++){const s=$e[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;$e.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function zf(t){if(Vs.length){const e=[...new Set(Vs)].sort((n,s)=>Zi(n)-Zi(s));if(Vs.length=0,vn){vn.push(...e);return}for(vn=e,Os=0;Os<vn.length;Os++){const n=vn[Os];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}vn=null,Os=0}}const Zi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Yf(t){try{for(Dt=0;Dt<$e.length;Dt++){const e=$e[Dt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),mr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Dt<$e.length;Dt++){const e=$e[Dt];e&&(e.flags&=-2)}Dt=-1,$e.length=0,zf(),uo=null,($e.length||Vs.length)&&Yf()}}let Ye=null,Qf=null;function ho(t){const e=Ye;return Ye=t,Qf=t&&t.type.__scopeId||null,e}function er(t,e=Ye,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&rh(-1);const r=ho(e);let o;try{o=t(...i)}finally{ho(r),s._d&&rh(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Jn(t,e){if(Ye===null)return t;const n=ra(Ye),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=he]=e[i];r&&(q(r)&&(r={mounted:r,updated:r}),r.deep&&qt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Gn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(nn(),Ct(l,n,8,[t.el,a,t,e]),sn())}}const Vv=Symbol("_vte"),Xf=t=>t.__isTeleport,En=Symbol("_leaveCb"),$r=Symbol("_enterCb");function Jf(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return rp(()=>{t.isMounted=!0}),ap(()=>{t.isUnmounting=!0}),t}const at=[Function,Array],Zf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:at,onEnter:at,onAfterEnter:at,onEnterCancelled:at,onBeforeLeave:at,onLeave:at,onAfterLeave:at,onLeaveCancelled:at,onBeforeAppear:at,onAppear:at,onAfterAppear:at,onAppearCancelled:at},ep=t=>{const e=t.subTree;return e.component?ep(e.component):e},Hv={name:"BaseTransition",props:Zf,setup(t,{slots:e}){const n=Np(),s=Jf();return()=>{const i=e.default&&Cc(e.default(),!0);if(!i||!i.length)return;const r=tp(i),o=ae(t),{mode:a}=o;if(s.isLeaving)return xa(r);const l=Yu(r);if(!l)return xa(r);let c=tr(l,o,s,n,h=>c=h);l.type!==Ue&&cs(l,c);let u=n.subTree&&Yu(n.subTree);if(u&&u.type!==Ue&&!Zn(l,u)&&ep(n).type!==Ue){let h=tr(u,o,s,n);if(cs(u,h),a==="out-in"&&l.type!==Ue)return s.isLeaving=!0,h.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete h.afterLeave,u=void 0},xa(r);a==="in-out"&&l.type!==Ue?h.delayLeave=(d,_,g)=>{const v=np(s,u);v[String(u.key)]=u,d[En]=()=>{_(),d[En]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function tp(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Ue){e=n;break}}return e}const Wv=Hv;function np(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function tr(t,e,n,s,i){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:d,onLeave:_,onAfterLeave:g,onLeaveCancelled:v,onBeforeAppear:N,onAppear:k,onAfterAppear:x,onAppearCancelled:M}=e,C=String(t.key),U=np(n,t),G=(F,B)=>{F&&Ct(F,s,9,B)},Q=(F,B)=>{const z=B[1];G(F,B),H(F)?F.every(D=>D.length<=1)&&z():F.length<=1&&z()},ne={mode:o,persisted:a,beforeEnter(F){let B=l;if(!n.isMounted)if(r)B=N||l;else return;F[En]&&F[En](!0);const z=U[C];z&&Zn(t,z)&&z.el[En]&&z.el[En](),G(B,[F])},enter(F){let B=c,z=u,D=h;if(!n.isMounted)if(r)B=k||c,z=x||u,D=M||h;else return;let Y=!1;const me=F[$r]=Ne=>{Y||(Y=!0,Ne?G(D,[F]):G(z,[F]),ne.delayedLeave&&ne.delayedLeave(),F[$r]=void 0)};B?Q(B,[F,me]):me()},leave(F,B){const z=String(t.key);if(F[$r]&&F[$r](!0),n.isUnmounting)return B();G(d,[F]);let D=!1;const Y=F[En]=me=>{D||(D=!0,B(),me?G(v,[F]):G(g,[F]),F[En]=void 0,U[z]===t&&delete U[z])};U[z]=t,_?Q(_,[F,Y]):Y()},clone(F){const B=tr(F,e,n,s,i);return i&&i(B),B}};return ne}function xa(t){if(ta(t))return t=Rn(t),t.children=null,t}function Yu(t){if(!ta(t))return Xf(t.type)&&t.children?tp(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&q(n.default))return n.default()}}function cs(t,e){t.shapeFlag&6&&t.component?(t.transition=e,cs(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Cc(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===qe?(o.patchFlag&128&&i++,s=s.concat(Cc(o.children,e,a))):(e||o.type!==Ue)&&s.push(a!=null?Rn(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function sp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function $i(t,e,n,s,i=!1){if(H(t)){t.forEach((g,v)=>$i(g,e&&(H(e)?e[v]:e),n,s,i));return}if(Ui(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&$i(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?ra(s.component):s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===he?a.refs={}:a.refs,h=a.setupState,d=ae(h),_=h===he?()=>!1:g=>le(d,g);if(c!=null&&c!==l&&(ye(c)?(u[c]=null,_(c)&&(h[c]=null)):Ve(c)&&(c.value=null)),q(l))mr(l,a,12,[o,u]);else{const g=ye(l),v=Ve(l);if(g||v){const N=()=>{if(t.f){const k=g?_(l)?h[l]:u[l]:l.value;i?H(k)&&fc(k,r):H(k)?k.includes(r)||k.push(r):g?(u[l]=[r],_(l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else g?(u[l]=o,_(l)&&(h[l]=o)):v&&(l.value=o,t.k&&(u[t.k]=o))};o?(N.id=-1,nt(N,n)):N()}}}Xo().requestIdleCallback;Xo().cancelIdleCallback;const Ui=t=>!!t.type.__asyncLoader,ta=t=>t.type.__isKeepAlive;function Bv(t,e){ip(t,"a",e)}function jv(t,e){ip(t,"da",e)}function ip(t,e,n=Re){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(na(e,s,n),n){let i=n.parent;for(;i&&i.parent;)ta(i.parent.vnode)&&Kv(s,e,n,i),i=i.parent}}function Kv(t,e,n,s){const i=na(e,t,s,!0);lp(()=>{fc(s[e],i)},n)}function na(t,e,n=Re,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{nn();const a=vr(n),l=Ct(e,n,t,o);return a(),sn(),l});return s?i.unshift(r):i.push(r),r}}const un=t=>(e,n=Re)=>{(!sr||t==="sp")&&na(t,(...s)=>e(...s),n)},Gv=un("bm"),rp=un("m"),qv=un("bu"),op=un("u"),ap=un("bum"),lp=un("um"),zv=un("sp"),Yv=un("rtg"),Qv=un("rtc");function Xv(t,e=Re){na("ec",t,e)}const Jv="components";function Il(t,e){return eE(Jv,t,!0,e)||t}const Zv=Symbol.for("v-ndc");function eE(t,e,n=!0,s=!1){const i=Ye||Re;if(i){const r=i.type;{const a=HE(r,!1);if(a&&(a===e||a===ut(e)||a===Qo(ut(e))))return r}const o=Qu(i[t]||r[t],e)||Qu(i.appContext[t],e);return!o&&s?r:o}}function Qu(t,e){return t&&(t[e]||t[ut(e)]||t[Qo(ut(e))])}function La(t,e,n,s){let i;const r=n,o=H(t);if(o||ye(t)){const a=o&&Us(t);let l=!1,c=!1;a&&(l=!Tt(t),c=ls(t),t=Zo(t)),i=new Array(t.length);for(let u=0,h=t.length;u<h;u++)i[u]=e(l?c?lo(Fe(t[u])):Fe(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,r)}else if(de(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=e(t[u],u,l,r)}}else i=[];return i}const Sl=t=>t?Op(t)?ra(t):Sl(t.parent):null,Vi=Ae(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Sl(t.parent),$root:t=>Sl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>up(t),$forceUpdate:t=>t.f||(t.f=()=>{wc(t.update)}),$nextTick:t=>t.n||(t.n=Gf.bind(t.proxy)),$watch:t=>TE.bind(t)}),Ma=(t,e)=>t!==he&&!t.__isScriptSetup&&le(t,e),tE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Ma(s,e))return o[e]=1,s[e];if(i!==he&&le(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&le(c,e))return o[e]=3,r[e];if(n!==he&&le(n,e))return o[e]=4,n[e];Al&&(o[e]=0)}}const u=Vi[e];let h,d;if(u)return e==="$attrs"&&ke(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==he&&le(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,le(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Ma(i,e)?(i[e]=n,!0):s!==he&&le(s,e)?(s[e]=n,!0):le(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==he&&le(t,o)||Ma(e,o)||(a=r[0])&&le(a,o)||le(s,o)||le(Vi,o)||le(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:le(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Xu(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Al=!0;function nE(t){const e=up(t),n=t.proxy,s=t.ctx;Al=!1,e.beforeCreate&&Ju(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:g,activated:v,deactivated:N,beforeDestroy:k,beforeUnmount:x,destroyed:M,unmounted:C,render:U,renderTracked:G,renderTriggered:Q,errorCaptured:ne,serverPrefetch:F,expose:B,inheritAttrs:z,components:D,directives:Y,filters:me}=e;if(c&&sE(c,s,null),o)for(const te in o){const re=o[te];q(re)&&(s[te]=re.bind(n))}if(i){const te=i.call(n,n);de(te)&&(t.data=yc(te))}if(Al=!0,r)for(const te in r){const re=r[te],xe=q(re)?re.bind(n,n):q(re.get)?re.get.bind(n,n):Lt,Wt=!q(re)&&q(re.set)?re.set.bind(n):Lt,pt=BE({get:xe,set:Wt});Object.defineProperty(s,te,{enumerable:!0,configurable:!0,get:()=>pt.value,set:Pe=>pt.value=Pe})}if(a)for(const te in a)cp(a[te],s,n,te);if(l){const te=q(l)?l.call(n):l;Reflect.ownKeys(te).forEach(re=>{cE(re,te[re])})}u&&Ju(u,t,"c");function se(te,re){H(re)?re.forEach(xe=>te(xe.bind(n))):re&&te(re.bind(n))}if(se(Gv,h),se(rp,d),se(qv,_),se(op,g),se(Bv,v),se(jv,N),se(Xv,ne),se(Qv,G),se(Yv,Q),se(ap,x),se(lp,C),se(zv,F),H(B))if(B.length){const te=t.exposed||(t.exposed={});B.forEach(re=>{Object.defineProperty(te,re,{get:()=>n[re],set:xe=>n[re]=xe})})}else t.exposed||(t.exposed={});U&&t.render===Lt&&(t.render=U),z!=null&&(t.inheritAttrs=z),D&&(t.components=D),Y&&(t.directives=Y),F&&sp(t)}function sE(t,e,n=Lt){H(t)&&(t=Nl(t));for(const s in t){const i=t[s];let r;de(i)?"default"in i?r=Qr(i.from||s,i.default,!0):r=Qr(i.from||s):r=Qr(i),Ve(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Ju(t,e,n){Ct(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function cp(t,e,n,s){let i=s.includes(".")?wp(n,s):()=>n[s];if(ye(t)){const r=e[t];q(r)&&$a(i,r)}else if(q(t))$a(i,t.bind(n));else if(de(t))if(H(t))t.forEach(r=>cp(r,e,n,s));else{const r=q(t.handler)?t.handler.bind(n):e[t.handler];q(r)&&$a(i,r,t)}}function up(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>fo(l,c,o,!0)),fo(l,e,o)),de(e)&&r.set(e,l),l}function fo(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&fo(t,r,n,!0),i&&i.forEach(o=>fo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=iE[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const iE={data:Zu,props:eh,emits:eh,methods:ki,computed:ki,beforeCreate:Le,created:Le,beforeMount:Le,mounted:Le,beforeUpdate:Le,updated:Le,beforeDestroy:Le,beforeUnmount:Le,destroyed:Le,unmounted:Le,activated:Le,deactivated:Le,errorCaptured:Le,serverPrefetch:Le,components:ki,directives:ki,watch:oE,provide:Zu,inject:rE};function Zu(t,e){return e?t?function(){return Ae(q(t)?t.call(this,this):t,q(e)?e.call(this,this):e)}:e:t}function rE(t,e){return ki(Nl(t),Nl(e))}function Nl(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Le(t,e){return t?[...new Set([].concat(t,e))]:e}function ki(t,e){return t?Ae(Object.create(null),t,e):e}function eh(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:Ae(Object.create(null),Xu(t),Xu(e??{})):e}function oE(t,e){if(!t)return e;if(!e)return t;const n=Ae(Object.create(null),t);for(const s in e)n[s]=Le(t[s],e[s]);return n}function hp(){return{app:null,config:{isNativeTag:Ym,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let aE=0;function lE(t,e){return function(s,i=null){q(s)||(s=Ae({},s)),i!=null&&!de(i)&&(i=null);const r=hp(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:aE++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:KE,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&q(u.install)?(o.add(u),u.install(c,...h)):q(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!l){const _=c._ceVNode||Se(s,i);return _.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),t(_,u,d),l=!0,c._container=u,u.__vue_app__=c,ra(_.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Ct(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Hs;Hs=c;try{return u()}finally{Hs=h}}};return c}}let Hs=null;function cE(t,e){if(Re){let n=Re.provides;const s=Re.parent&&Re.parent.provides;s===n&&(n=Re.provides=Object.create(s)),n[t]=e}}function Qr(t,e,n=!1){const s=Re||Ye;if(s||Hs){let i=Hs?Hs._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&q(e)?e.call(s&&s.proxy):e}}const dp={},fp=()=>Object.create(dp),pp=t=>Object.getPrototypeOf(t)===dp;function uE(t,e,n,s=!1){const i={},r=fp();t.propsDefaults=Object.create(null),_p(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Ov(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function hE(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ae(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(sa(t.emitsOptions,d))continue;const _=e[d];if(l)if(le(r,d))_!==r[d]&&(r[d]=_,c=!0);else{const g=ut(d);i[g]=Ol(l,a,g,_,t,!1)}else _!==r[d]&&(r[d]=_,c=!0)}}}else{_p(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!le(e,h)&&((u=Mn(h))===h||!le(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Ol(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!le(e,h))&&(delete r[h],c=!0)}c&&Gt(t.attrs,"set","")}function _p(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Li(l))continue;const c=e[l];let u;i&&le(i,u=ut(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:sa(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ae(n),c=a||he;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Ol(i,l,h,c[h],t,!le(c,h))}}return o}function Ol(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=le(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&q(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=vr(i);s=c[n]=l.call(null,e),u()}}else s=l;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Mn(n))&&(s=!0))}return s}const dE=new WeakMap;function gp(t,e,n=!1){const s=n?dE:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!q(t)){const u=h=>{l=!0;const[d,_]=gp(h,e,!0);Ae(o,d),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return de(t)&&s.set(t,Fs),Fs;if(H(r))for(let u=0;u<r.length;u++){const h=ut(r[u]);th(h)&&(o[h]=he)}else if(r)for(const u in r){const h=ut(u);if(th(h)){const d=r[u],_=o[h]=H(d)||q(d)?{type:d}:Ae({},d),g=_.type;let v=!1,N=!0;if(H(g))for(let k=0;k<g.length;++k){const x=g[k],M=q(x)&&x.name;if(M==="Boolean"){v=!0;break}else M==="String"&&(N=!1)}else v=q(g)&&g.name==="Boolean";_[0]=v,_[1]=N,(v||le(_,"default"))&&a.push(h)}}const c=[o,a];return de(t)&&s.set(t,c),c}function th(t){return t[0]!=="$"&&!Li(t)}const Ic=t=>t[0]==="_"||t==="$stable",Sc=t=>H(t)?t.map(xt):[xt(t)],fE=(t,e,n)=>{if(e._n)return e;const s=er((...i)=>Sc(e(...i)),n);return s._c=!1,s},mp=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Ic(i))continue;const r=t[i];if(q(r))e[i]=fE(i,r,s);else if(r!=null){const o=Sc(r);e[i]=()=>o}}},vp=(t,e)=>{const n=Sc(e);t.slots.default=()=>n},Ep=(t,e,n)=>{for(const s in e)(n||!Ic(s))&&(t[s]=e[s])},pE=(t,e,n)=>{const s=t.slots=fp();if(t.vnode.shapeFlag&32){const i=e.__;i&&yl(s,"__",i,!0);const r=e._;r?(Ep(s,e,n),n&&yl(s,"_",r,!0)):mp(e,s)}else e&&vp(t,e)},_E=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=he;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:Ep(i,e,n):(r=!e.$stable,mp(e,i)),o=e}else e&&(vp(t,e),o={default:1});if(r)for(const a in i)!Ic(a)&&o[a]==null&&delete i[a]},nt=OE;function gE(t){return mE(t)}function mE(t,e){const n=Xo();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=Lt,insertStaticContent:g}=t,v=(f,p,m,w=null,E=null,b=null,O=void 0,A=null,I=!!p.dynamicChildren)=>{if(f===p)return;f&&!Zn(f,p)&&(w=Bt(f),Pe(f,E,b,!0),f=null),p.patchFlag===-2&&(I=!1,p.dynamicChildren=null);const{type:T,ref:$,shapeFlag:R}=p;switch(T){case ia:N(f,p,m,w);break;case Ue:k(f,p,m,w);break;case Ua:f==null&&x(p,m,w,O);break;case qe:D(f,p,m,w,E,b,O,A,I);break;default:R&1?U(f,p,m,w,E,b,O,A,I):R&6?Y(f,p,m,w,E,b,O,A,I):(R&64||R&128)&&T.process(f,p,m,w,E,b,O,A,I,Kn)}$!=null&&E?$i($,f&&f.ref,b,p||f,!p):$==null&&f&&f.ref!=null&&$i(f.ref,null,b,f,!0)},N=(f,p,m,w)=>{if(f==null)s(p.el=a(p.children),m,w);else{const E=p.el=f.el;p.children!==f.children&&c(E,p.children)}},k=(f,p,m,w)=>{f==null?s(p.el=l(p.children||""),m,w):p.el=f.el},x=(f,p,m,w)=>{[f.el,f.anchor]=g(f.children,p,m,w,f.el,f.anchor)},M=({el:f,anchor:p},m,w)=>{let E;for(;f&&f!==p;)E=d(f),s(f,m,w),f=E;s(p,m,w)},C=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),i(f),f=m;i(p)},U=(f,p,m,w,E,b,O,A,I)=>{p.type==="svg"?O="svg":p.type==="math"&&(O="mathml"),f==null?G(p,m,w,E,b,O,A,I):F(f,p,E,b,O,A,I)},G=(f,p,m,w,E,b,O,A)=>{let I,T;const{props:$,shapeFlag:R,transition:L,dirs:j}=f;if(I=f.el=o(f.type,b,$&&$.is,$),R&8?u(I,f.children):R&16&&ne(f.children,I,null,w,E,Fa(f,b),O,A),j&&Gn(f,null,w,"created"),Q(I,f,f.scopeId,O,w),$){for(const ce in $)ce!=="value"&&!Li(ce)&&r(I,ce,null,$[ce],b,w);"value"in $&&r(I,"value",null,$.value,b),(T=$.onVnodeBeforeMount)&&Pt(T,w,f)}j&&Gn(f,null,w,"beforeMount");const Z=vE(E,L);Z&&L.beforeEnter(I),s(I,p,m),((T=$&&$.onVnodeMounted)||Z||j)&&nt(()=>{T&&Pt(T,w,f),Z&&L.enter(I),j&&Gn(f,null,w,"mounted")},E)},Q=(f,p,m,w,E)=>{if(m&&_(f,m),w)for(let b=0;b<w.length;b++)_(f,w[b]);if(E){let b=E.subTree;if(p===b||Ip(b.type)&&(b.ssContent===p||b.ssFallback===p)){const O=E.vnode;Q(f,O,O.scopeId,O.slotScopeIds,E.parent)}}},ne=(f,p,m,w,E,b,O,A,I=0)=>{for(let T=I;T<f.length;T++){const $=f[T]=A?yn(f[T]):xt(f[T]);v(null,$,p,m,w,E,b,O,A)}},F=(f,p,m,w,E,b,O)=>{const A=p.el=f.el;let{patchFlag:I,dynamicChildren:T,dirs:$}=p;I|=f.patchFlag&16;const R=f.props||he,L=p.props||he;let j;if(m&&qn(m,!1),(j=L.onVnodeBeforeUpdate)&&Pt(j,m,p,f),$&&Gn(p,f,m,"beforeUpdate"),m&&qn(m,!0),(R.innerHTML&&L.innerHTML==null||R.textContent&&L.textContent==null)&&u(A,""),T?B(f.dynamicChildren,T,A,m,w,Fa(p,E),b):O||re(f,p,A,null,m,w,Fa(p,E),b,!1),I>0){if(I&16)z(A,R,L,m,E);else if(I&2&&R.class!==L.class&&r(A,"class",null,L.class,E),I&4&&r(A,"style",R.style,L.style,E),I&8){const Z=p.dynamicProps;for(let ce=0;ce<Z.length;ce++){const ie=Z[ce],je=R[ie],Ke=L[ie];(Ke!==je||ie==="value")&&r(A,ie,je,Ke,E,m)}}I&1&&f.children!==p.children&&u(A,p.children)}else!O&&T==null&&z(A,R,L,m,E);((j=L.onVnodeUpdated)||$)&&nt(()=>{j&&Pt(j,m,p,f),$&&Gn(p,f,m,"updated")},w)},B=(f,p,m,w,E,b,O)=>{for(let A=0;A<p.length;A++){const I=f[A],T=p[A],$=I.el&&(I.type===qe||!Zn(I,T)||I.shapeFlag&198)?h(I.el):m;v(I,T,$,null,w,E,b,O,!0)}},z=(f,p,m,w,E)=>{if(p!==m){if(p!==he)for(const b in p)!Li(b)&&!(b in m)&&r(f,b,p[b],null,E,w);for(const b in m){if(Li(b))continue;const O=m[b],A=p[b];O!==A&&b!=="value"&&r(f,b,A,O,E,w)}"value"in m&&r(f,"value",p.value,m.value,E)}},D=(f,p,m,w,E,b,O,A,I)=>{const T=p.el=f?f.el:a(""),$=p.anchor=f?f.anchor:a("");let{patchFlag:R,dynamicChildren:L,slotScopeIds:j}=p;j&&(A=A?A.concat(j):j),f==null?(s(T,m,w),s($,m,w),ne(p.children||[],m,$,E,b,O,A,I)):R>0&&R&64&&L&&f.dynamicChildren?(B(f.dynamicChildren,L,m,E,b,O,A),(p.key!=null||E&&p===E.subTree)&&yp(f,p,!0)):re(f,p,m,$,E,b,O,A,I)},Y=(f,p,m,w,E,b,O,A,I)=>{p.slotScopeIds=A,f==null?p.shapeFlag&512?E.ctx.activate(p,m,w,O,I):me(p,m,w,E,b,O,I):Ne(f,p,I)},me=(f,p,m,w,E,b,O)=>{const A=f.component=ME(f,w,E);if(ta(f)&&(A.ctx.renderer=Kn),FE(A,!1,O),A.asyncDep){if(E&&E.registerDep(A,se,O),!f.el){const I=A.subTree=Se(Ue);k(null,I,p,m)}}else se(A,f,p,m,E,b,O)},Ne=(f,p,m)=>{const w=p.component=f.component;if(AE(f,p,m))if(w.asyncDep&&!w.asyncResolved){te(w,p,m);return}else w.next=p,w.update();else p.el=f.el,w.vnode=p},se=(f,p,m,w,E,b,O)=>{const A=()=>{if(f.isMounted){let{next:R,bu:L,u:j,parent:Z,vnode:ce}=f;{const Ot=bp(f);if(Ot){R&&(R.el=ce.el,te(f,R,O)),Ot.asyncDep.then(()=>{f.isUnmounted||A()});return}}let ie=R,je;qn(f,!1),R?(R.el=ce.el,te(f,R,O)):R=ce,L&&Yr(L),(je=R.props&&R.props.onVnodeBeforeUpdate)&&Pt(je,Z,R,ce),qn(f,!0);const Ke=sh(f),Nt=f.subTree;f.subTree=Ke,v(Nt,Ke,h(Nt.el),Bt(Nt),f,E,b),R.el=Ke.el,ie===null&&NE(f,Ke.el),j&&nt(j,E),(je=R.props&&R.props.onVnodeUpdated)&&nt(()=>Pt(je,Z,R,ce),E)}else{let R;const{el:L,props:j}=p,{bm:Z,m:ce,parent:ie,root:je,type:Ke}=f,Nt=Ui(p);qn(f,!1),Z&&Yr(Z),!Nt&&(R=j&&j.onVnodeBeforeMount)&&Pt(R,ie,p),qn(f,!0);{je.ce&&je.ce._def.shadowRoot!==!1&&je.ce._injectChildStyle(Ke);const Ot=f.subTree=sh(f);v(null,Ot,m,w,f,E,b),p.el=Ot.el}if(ce&&nt(ce,E),!Nt&&(R=j&&j.onVnodeMounted)){const Ot=p;nt(()=>Pt(R,ie,Ot),E)}(p.shapeFlag&256||ie&&Ui(ie.vnode)&&ie.vnode.shapeFlag&256)&&f.a&&nt(f.a,E),f.isMounted=!0,p=m=w=null}};f.scope.on();const I=f.effect=new Nf(A);f.scope.off();const T=f.update=I.run.bind(I),$=f.job=I.runIfDirty.bind(I);$.i=f,$.id=f.uid,I.scheduler=()=>wc($),qn(f,!0),T()},te=(f,p,m)=>{p.component=f;const w=f.vnode.props;f.vnode=p,f.next=null,hE(f,p.props,w,m),_E(f,p.children,m),nn(),zu(f),sn()},re=(f,p,m,w,E,b,O,A,I=!1)=>{const T=f&&f.children,$=f?f.shapeFlag:0,R=p.children,{patchFlag:L,shapeFlag:j}=p;if(L>0){if(L&128){Wt(T,R,m,w,E,b,O,A,I);return}else if(L&256){xe(T,R,m,w,E,b,O,A,I);return}}j&8?($&16&&_t(T,E,b),R!==T&&u(m,R)):$&16?j&16?Wt(T,R,m,w,E,b,O,A,I):_t(T,E,b,!0):($&8&&u(m,""),j&16&&ne(R,m,w,E,b,O,A,I))},xe=(f,p,m,w,E,b,O,A,I)=>{f=f||Fs,p=p||Fs;const T=f.length,$=p.length,R=Math.min(T,$);let L;for(L=0;L<R;L++){const j=p[L]=I?yn(p[L]):xt(p[L]);v(f[L],j,m,null,E,b,O,A,I)}T>$?_t(f,E,b,!0,!1,R):ne(p,m,w,E,b,O,A,I,R)},Wt=(f,p,m,w,E,b,O,A,I)=>{let T=0;const $=p.length;let R=f.length-1,L=$-1;for(;T<=R&&T<=L;){const j=f[T],Z=p[T]=I?yn(p[T]):xt(p[T]);if(Zn(j,Z))v(j,Z,m,null,E,b,O,A,I);else break;T++}for(;T<=R&&T<=L;){const j=f[R],Z=p[L]=I?yn(p[L]):xt(p[L]);if(Zn(j,Z))v(j,Z,m,null,E,b,O,A,I);else break;R--,L--}if(T>R){if(T<=L){const j=L+1,Z=j<$?p[j].el:w;for(;T<=L;)v(null,p[T]=I?yn(p[T]):xt(p[T]),m,Z,E,b,O,A,I),T++}}else if(T>L)for(;T<=R;)Pe(f[T],E,b,!0),T++;else{const j=T,Z=T,ce=new Map;for(T=Z;T<=L;T++){const tt=p[T]=I?yn(p[T]):xt(p[T]);tt.key!=null&&ce.set(tt.key,T)}let ie,je=0;const Ke=L-Z+1;let Nt=!1,Ot=0;const Ti=new Array(Ke);for(T=0;T<Ke;T++)Ti[T]=0;for(T=j;T<=R;T++){const tt=f[T];if(je>=Ke){Pe(tt,E,b,!0);continue}let Rt;if(tt.key!=null)Rt=ce.get(tt.key);else for(ie=Z;ie<=L;ie++)if(Ti[ie-Z]===0&&Zn(tt,p[ie])){Rt=ie;break}Rt===void 0?Pe(tt,E,b,!0):(Ti[Rt-Z]=T+1,Rt>=Ot?Ot=Rt:Nt=!0,v(tt,p[Rt],m,null,E,b,O,A,I),je++)}const Wu=Nt?EE(Ti):Fs;for(ie=Wu.length-1,T=Ke-1;T>=0;T--){const tt=Z+T,Rt=p[tt],Bu=tt+1<$?p[tt+1].el:w;Ti[T]===0?v(null,Rt,m,Bu,E,b,O,A,I):Nt&&(ie<0||T!==Wu[ie]?pt(Rt,m,Bu,2):ie--)}}},pt=(f,p,m,w,E=null)=>{const{el:b,type:O,transition:A,children:I,shapeFlag:T}=f;if(T&6){pt(f.component.subTree,p,m,w);return}if(T&128){f.suspense.move(p,m,w);return}if(T&64){O.move(f,p,m,Kn);return}if(O===qe){s(b,p,m);for(let R=0;R<I.length;R++)pt(I[R],p,m,w);s(f.anchor,p,m);return}if(O===Ua){M(f,p,m);return}if(w!==2&&T&1&&A)if(w===0)A.beforeEnter(b),s(b,p,m),nt(()=>A.enter(b),E);else{const{leave:R,delayLeave:L,afterLeave:j}=A,Z=()=>{f.ctx.isUnmounted?i(b):s(b,p,m)},ce=()=>{R(b,()=>{Z(),j&&j()})};L?L(b,Z,ce):ce()}else s(b,p,m)},Pe=(f,p,m,w=!1,E=!1)=>{const{type:b,props:O,ref:A,children:I,dynamicChildren:T,shapeFlag:$,patchFlag:R,dirs:L,cacheIndex:j}=f;if(R===-2&&(E=!1),A!=null&&(nn(),$i(A,null,m,f,!0),sn()),j!=null&&(p.renderCache[j]=void 0),$&256){p.ctx.deactivate(f);return}const Z=$&1&&L,ce=!Ui(f);let ie;if(ce&&(ie=O&&O.onVnodeBeforeUnmount)&&Pt(ie,p,f),$&6)At(f.component,m,w);else{if($&128){f.suspense.unmount(m,w);return}Z&&Gn(f,null,p,"beforeUnmount"),$&64?f.type.remove(f,p,m,Kn,w):T&&!T.hasOnce&&(b!==qe||R>0&&R&64)?_t(T,p,m,!1,!0):(b===qe&&R&384||!E&&$&16)&&_t(I,p,m),w&&jn(f)}(ce&&(ie=O&&O.onVnodeUnmounted)||Z)&&nt(()=>{ie&&Pt(ie,p,f),Z&&Gn(f,null,p,"unmounted")},m)},jn=f=>{const{type:p,el:m,anchor:w,transition:E}=f;if(p===qe){fn(m,w);return}if(p===Ua){C(f);return}const b=()=>{i(m),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(f.shapeFlag&1&&E&&!E.persisted){const{leave:O,delayLeave:A}=E,I=()=>O(m,b);A?A(f.el,b,I):I()}else b()},fn=(f,p)=>{let m;for(;f!==p;)m=d(f),i(f),f=m;i(p)},At=(f,p,m)=>{const{bum:w,scope:E,job:b,subTree:O,um:A,m:I,a:T,parent:$,slots:{__:R}}=f;nh(I),nh(T),w&&Yr(w),$&&H(R)&&R.forEach(L=>{$.renderCache[L]=void 0}),E.stop(),b&&(b.flags|=8,Pe(O,f,p,m)),A&&nt(A,p),nt(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},_t=(f,p,m,w=!1,E=!1,b=0)=>{for(let O=b;O<f.length;O++)Pe(f[O],p,m,w,E)},Bt=f=>{if(f.shapeFlag&6)return Bt(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const p=d(f.anchor||f.el),m=p&&p[Vv];return m?d(m):p};let gt=!1;const Cs=(f,p,m)=>{f==null?p._vnode&&Pe(p._vnode,null,null,!0):v(p._vnode||null,f,p,null,null,null,m),p._vnode=f,gt||(gt=!0,zu(),zf(),gt=!1)},Kn={p:v,um:Pe,m:pt,r:jn,mt:me,mc:ne,pc:re,pbc:B,n:Bt,o:t};return{render:Cs,hydrate:void 0,createApp:lE(Cs)}}function Fa({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function qn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function vE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function yp(t,e,n=!1){const s=t.children,i=e.children;if(H(s)&&H(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=yn(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&yp(o,a)),a.type===ia&&(a.el=o.el),a.type===Ue&&!a.el&&(a.el=o.el)}}function EE(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function bp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:bp(e)}function nh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const yE=Symbol.for("v-scx"),bE=()=>Qr(yE);function $a(t,e,n){return Tp(t,e,n)}function Tp(t,e,n=he){const{immediate:s,deep:i,flush:r,once:o}=n,a=Ae({},n),l=e&&s||!e&&r!=="post";let c;if(sr){if(r==="sync"){const _=bE();c=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=Lt,_.resume=Lt,_.pause=Lt,_}}const u=Re;a.call=(_,g,v)=>Ct(_,u,g,v);let h=!1;r==="post"?a.scheduler=_=>{nt(_,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(_,g)=>{g?_():wc(_)}),a.augmentJob=_=>{e&&(_.flags|=4),h&&(_.flags|=2,u&&(_.id=u.uid,_.i=u))};const d=Mv(t,e,a);return sr&&(c?c.push(d):l&&d()),d}function TE(t,e,n){const s=this.proxy,i=ye(t)?t.includes(".")?wp(s,t):()=>s[t]:t.bind(s,s);let r;q(e)?r=e:(r=e.handler,n=e);const o=vr(this),a=Tp(i,r.bind(s),n);return o(),a}function wp(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const wE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${ut(e)}Modifiers`]||t[`${Mn(e)}Modifiers`];function CE(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||he;let i=n;const r=e.startsWith("update:"),o=r&&wE(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>ye(u)?u.trim():u)),o.number&&(i=n.map(ao)));let a,l=s[a=Oa(e)]||s[a=Oa(ut(e))];!l&&r&&(l=s[a=Oa(Mn(e))]),l&&Ct(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ct(c,t,6,i)}}function Cp(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!q(t)){const l=c=>{const u=Cp(c,e,!0);u&&(a=!0,Ae(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(de(t)&&s.set(t,null),null):(H(r)?r.forEach(l=>o[l]=null):Ae(o,r),de(t)&&s.set(t,o),o)}function sa(t,e){return!t||!qo(e)?!1:(e=e.slice(2).replace(/Once$/,""),le(t,e[0].toLowerCase()+e.slice(1))||le(t,Mn(e))||le(t,e))}function sh(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:_,ctx:g,inheritAttrs:v}=t,N=ho(t);let k,x;try{if(n.shapeFlag&4){const C=i||s,U=C;k=xt(c.call(U,C,u,h,_,d,g)),x=a}else{const C=e;k=xt(C.length>1?C(h,{attrs:a,slots:o,emit:l}):C(h,null)),x=e.props?a:IE(a)}}catch(C){Hi.length=0,ea(C,t,1),k=Se(Ue)}let M=k;if(x&&v!==!1){const C=Object.keys(x),{shapeFlag:U}=M;C.length&&U&7&&(r&&C.some(dc)&&(x=SE(x,r)),M=Rn(M,x,!1,!0))}return n.dirs&&(M=Rn(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&cs(M,n.transition),k=M,ho(N),k}const IE=t=>{let e;for(const n in t)(n==="class"||n==="style"||qo(n))&&((e||(e={}))[n]=t[n]);return e},SE=(t,e)=>{const n={};for(const s in t)(!dc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function AE(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?ih(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!sa(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?ih(s,o,c):!0:!!o;return!1}function ih(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!sa(n,r))return!0}return!1}function NE({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ip=t=>t.__isSuspense;function OE(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Uv(t)}const qe=Symbol.for("v-fgt"),ia=Symbol.for("v-txt"),Ue=Symbol.for("v-cmt"),Ua=Symbol.for("v-stc"),Hi=[];let st=null;function ve(t=!1){Hi.push(st=t?null:[])}function RE(){Hi.pop(),st=Hi[Hi.length-1]||null}let nr=1;function rh(t,e=!1){nr+=t,t<0&&st&&e&&(st.hasOnce=!0)}function Sp(t){return t.dynamicChildren=nr>0?st||Fs:null,RE(),nr>0&&st&&st.push(t),t}function Te(t,e,n,s,i,r){return Sp(P(t,e,n,s,i,r,!0))}function po(t,e,n,s,i){return Sp(Se(t,e,n,s,i,!0))}function _o(t){return t?t.__v_isVNode===!0:!1}function Zn(t,e){return t.type===e.type&&t.key===e.key}const Ap=({key:t})=>t??null,Xr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ye(t)||Ve(t)||q(t)?{i:Ye,r:t,k:e,f:!!n}:t:null);function P(t,e=null,n=null,s=0,i=null,r=t===qe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ap(e),ref:e&&Xr(e),scopeId:Qf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ye};return a?(Ac(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=ye(n)?8:16),nr>0&&!o&&st&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&st.push(l),l}const Se=PE;function PE(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Zv)&&(t=Ue),_o(t)){const a=Rn(t,e,!0);return n&&Ac(a,n),nr>0&&!r&&st&&(a.shapeFlag&6?st[st.indexOf(t)]=a:st.push(a)),a.patchFlag=-2,a}if(WE(t)&&(t=t.__vccOpts),e){e=kE(e);let{class:a,style:l}=e;a&&!ye(a)&&(e.class=tn(a)),de(l)&&(Tc(l)&&!H(l)&&(l=Ae({},l)),e.style=_c(l))}const o=ye(t)?1:Ip(t)?128:Xf(t)?64:de(t)?4:q(t)?2:0;return P(t,e,n,s,i,o,r,!0)}function kE(t){return t?Tc(t)||pp(t)?Ae({},t):t:null}function Rn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?DE(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Ap(c),ref:e&&e.ref?n&&r?H(r)?r.concat(Xr(e)):[r,Xr(e)]:Xr(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==qe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Rn(t.ssContent),ssFallback:t.ssFallback&&Rn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&cs(u,l.clone(u)),u}function Ws(t=" ",e=0){return Se(ia,null,t,e)}function Bs(t="",e=!1){return e?(ve(),po(Ue,null,t)):Se(Ue,null,t)}function xt(t){return t==null||typeof t=="boolean"?Se(Ue):H(t)?Se(qe,null,t.slice()):_o(t)?yn(t):Se(ia,null,String(t))}function yn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Rn(t)}function Ac(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Ac(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!pp(e)?e._ctx=Ye:i===3&&Ye&&(Ye.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else q(e)?(e={default:e,_ctx:Ye},n=32):(e=String(e),s&64?(n=16,e=[Ws(e)]):n=8);t.children=e,t.shapeFlag|=n}function DE(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=tn([e.class,s.class]));else if(i==="style")e.style=_c([e.style,s.style]);else if(qo(i)){const r=e[i],o=s[i];o&&r!==o&&!(H(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Pt(t,e,n,s=null){Ct(t,e,7,[n,s])}const xE=hp();let LE=0;function ME(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||xE,r={uid:LE++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new cv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gp(s,i),emitsOptions:Cp(s,i),emit:null,emitted:null,propsDefaults:he,inheritAttrs:s.inheritAttrs,ctx:he,data:he,props:he,attrs:he,slots:he,refs:he,setupState:he,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=CE.bind(null,r),t.ce&&t.ce(r),r}let Re=null;const Np=()=>Re||Ye;let go,Rl;{const t=Xo(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};go=e("__VUE_INSTANCE_SETTERS__",n=>Re=n),Rl=e("__VUE_SSR_SETTERS__",n=>sr=n)}const vr=t=>{const e=Re;return go(t),t.scope.on(),()=>{t.scope.off(),go(e)}},oh=()=>{Re&&Re.scope.off(),go(null)};function Op(t){return t.vnode.shapeFlag&4}let sr=!1;function FE(t,e=!1,n=!1){e&&Rl(e);const{props:s,children:i}=t.vnode,r=Op(t);uE(t,s,r,e),pE(t,i,n||e);const o=r?$E(t,e):void 0;return e&&Rl(!1),o}function $E(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,tE);const{setup:s}=n;if(s){nn();const i=t.setupContext=s.length>1?VE(t):null,r=vr(t),o=mr(s,t,0,[t.props,i]),a=Tf(o);if(sn(),r(),(a||t.sp)&&!Ui(t)&&sp(t),a){if(o.then(oh,oh),e)return o.then(l=>{ah(t,l)}).catch(l=>{ea(l,t,0)});t.asyncDep=o}else ah(t,o)}else Rp(t)}function ah(t,e,n){q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:de(e)&&(t.setupState=jf(e)),Rp(t)}function Rp(t,e,n){const s=t.type;t.render||(t.render=s.render||Lt);{const i=vr(t);nn();try{nE(t)}finally{sn(),i()}}}const UE={get(t,e){return ke(t,"get",""),t[e]}};function VE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,UE),slots:t.slots,emit:t.emit,expose:e}}function ra(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(jf(Rv(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Vi)return Vi[n](t)},has(e,n){return n in e||n in Vi}})):t.proxy}function HE(t,e=!0){return q(t)?t.displayName||t.name:t.name||e&&t.__name}function WE(t){return q(t)&&"__vccOpts"in t}const BE=(t,e)=>xv(t,e,sr);function jE(t,e,n){const s=arguments.length;return s===2?de(e)&&!H(e)?_o(e)?Se(t,null,[e]):Se(t,e):Se(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&_o(n)&&(n=[n]),Se(t,e,n))}const KE="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pl;const lh=typeof window<"u"&&window.trustedTypes;if(lh)try{Pl=lh.createPolicy("vue",{createHTML:t=>t})}catch{}const Pp=Pl?t=>Pl.createHTML(t):t=>t,GE="http://www.w3.org/2000/svg",qE="http://www.w3.org/1998/Math/MathML",Kt=typeof document<"u"?document:null,ch=Kt&&Kt.createElement("template"),zE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Kt.createElementNS(GE,t):e==="mathml"?Kt.createElementNS(qE,t):n?Kt.createElement(t,{is:n}):Kt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Kt.createTextNode(t),createComment:t=>Kt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Kt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{ch.innerHTML=Pp(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=ch.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},pn="transition",Ci="animation",Xs=Symbol("_vtc"),kp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Dp=Ae({},Zf,kp),YE=t=>(t.displayName="Transition",t.props=Dp,t),Nc=YE((t,{slots:e})=>jE(Wv,xp(t),e)),zn=(t,e=[])=>{H(t)?t.forEach(n=>n(...e)):t&&t(...e)},uh=t=>t?H(t)?t.some(e=>e.length>1):t.length>1:!1;function xp(t){const e={};for(const D in t)D in kp||(e[D]=t[D]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,g=QE(i),v=g&&g[0],N=g&&g[1],{onBeforeEnter:k,onEnter:x,onEnterCancelled:M,onLeave:C,onLeaveCancelled:U,onBeforeAppear:G=k,onAppear:Q=x,onAppearCancelled:ne=M}=e,F=(D,Y,me,Ne)=>{D._enterCancelled=Ne,mn(D,Y?u:a),mn(D,Y?c:o),me&&me()},B=(D,Y)=>{D._isLeaving=!1,mn(D,h),mn(D,_),mn(D,d),Y&&Y()},z=D=>(Y,me)=>{const Ne=D?Q:x,se=()=>F(Y,D,me);zn(Ne,[Y,se]),hh(()=>{mn(Y,D?l:r),kt(Y,D?u:a),uh(Ne)||dh(Y,s,v,se)})};return Ae(e,{onBeforeEnter(D){zn(k,[D]),kt(D,r),kt(D,o)},onBeforeAppear(D){zn(G,[D]),kt(D,l),kt(D,c)},onEnter:z(!1),onAppear:z(!0),onLeave(D,Y){D._isLeaving=!0;const me=()=>B(D,Y);kt(D,h),D._enterCancelled?(kt(D,d),kl()):(kl(),kt(D,d)),hh(()=>{D._isLeaving&&(mn(D,h),kt(D,_),uh(C)||dh(D,s,N,me))}),zn(C,[D,me])},onEnterCancelled(D){F(D,!1,void 0,!0),zn(M,[D])},onAppearCancelled(D){F(D,!0,void 0,!0),zn(ne,[D])},onLeaveCancelled(D){B(D),zn(U,[D])}})}function QE(t){if(t==null)return null;if(de(t))return[Va(t.enter),Va(t.leave)];{const e=Va(t);return[e,e]}}function Va(t){return ev(t)}function kt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Xs]||(t[Xs]=new Set)).add(e)}function mn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[Xs];n&&(n.delete(e),n.size||(t[Xs]=void 0))}function hh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let XE=0;function dh(t,e,n,s){const i=t._endId=++XE,r=()=>{i===t._endId&&s()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=Lp(t,e);if(!o)return s();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),r()},d=_=>{_.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function Lp(t,e){const n=window.getComputedStyle(t),s=g=>(n[g]||"").split(", "),i=s(`${pn}Delay`),r=s(`${pn}Duration`),o=fh(i,r),a=s(`${Ci}Delay`),l=s(`${Ci}Duration`),c=fh(a,l);let u=null,h=0,d=0;e===pn?o>0&&(u=pn,h=o,d=r.length):e===Ci?c>0&&(u=Ci,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?pn:Ci:null,d=u?u===pn?r.length:l.length:0);const _=u===pn&&/\b(transform|all)(,|$)/.test(s(`${pn}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:_}}function fh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>ph(n)+ph(t[s])))}function ph(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function kl(){return document.body.offsetHeight}function JE(t,e,n){const s=t[Xs];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const _h=Symbol("_vod"),ZE=Symbol("_vsh"),ey=Symbol(""),ty=/(^|;)\s*display\s*:/;function ny(t,e,n){const s=t.style,i=ye(n);let r=!1;if(n&&!i){if(e)if(ye(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Jr(s,a,"")}else for(const o in e)n[o]==null&&Jr(s,o,"");for(const o in n)o==="display"&&(r=!0),Jr(s,o,n[o])}else if(i){if(e!==n){const o=s[ey];o&&(n+=";"+o),s.cssText=n,r=ty.test(n)}}else e&&t.removeAttribute("style");_h in t&&(t[_h]=r?s.display:"",t[ZE]&&(s.display="none"))}const gh=/\s*!important$/;function Jr(t,e,n){if(H(n))n.forEach(s=>Jr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=sy(t,e);gh.test(n)?t.setProperty(Mn(s),n.replace(gh,""),"important"):t[s]=n}}const mh=["Webkit","Moz","ms"],Ha={};function sy(t,e){const n=Ha[e];if(n)return n;let s=ut(e);if(s!=="filter"&&s in t)return Ha[e]=s;s=Qo(s);for(let i=0;i<mh.length;i++){const r=mh[i]+s;if(r in t)return Ha[e]=r}return e}const vh="http://www.w3.org/1999/xlink";function Eh(t,e,n,s,i,r=ov(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(vh,e.slice(6,e.length)):t.setAttributeNS(vh,e,n):n==null||r&&!If(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Vt(n)?String(n):n)}function yh(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Pp(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=If(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function es(t,e,n,s){t.addEventListener(e,n,s)}function iy(t,e,n,s){t.removeEventListener(e,n,s)}const bh=Symbol("_vei");function ry(t,e,n,s,i=null){const r=t[bh]||(t[bh]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=oy(e);if(s){const c=r[e]=cy(s,i);es(t,a,c,l)}else o&&(iy(t,a,o,l),r[e]=void 0)}}const Th=/(?:Once|Passive|Capture)$/;function oy(t){let e;if(Th.test(t)){e={};let s;for(;s=t.match(Th);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Mn(t.slice(2)),e]}let Wa=0;const ay=Promise.resolve(),ly=()=>Wa||(ay.then(()=>Wa=0),Wa=Date.now());function cy(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ct(uy(s,n.value),e,5,[s])};return n.value=t,n.attached=ly(),n}function uy(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const wh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,hy=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?JE(t,s,o):e==="style"?ny(t,n,s):qo(e)?dc(e)||ry(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dy(t,e,s,o))?(yh(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Eh(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ye(s))?yh(t,ut(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Eh(t,e,s,o))};function dy(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&wh(e)&&q(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return wh(e)&&ye(n)?!1:e in t}const Mp=new WeakMap,Fp=new WeakMap,mo=Symbol("_moveCb"),Ch=Symbol("_enterCb"),fy=t=>(delete t.props.mode,t),py=fy({name:"TransitionGroup",props:Ae({},Dp,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Np(),s=Jf();let i,r;return op(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!Ey(i[0].el,n.vnode.el,o)){i=[];return}i.forEach(gy),i.forEach(my);const a=i.filter(vy);kl(),a.forEach(l=>{const c=l.el,u=c.style;kt(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c[mo]=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",h),c[mo]=null,mn(c,o))};c.addEventListener("transitionend",h)}),i=[]}),()=>{const o=ae(t),a=xp(o);let l=o.tag||qe;if(i=[],r)for(let c=0;c<r.length;c++){const u=r[c];u.el&&u.el instanceof Element&&(i.push(u),cs(u,tr(u,a,s,n)),Mp.set(u,u.el.getBoundingClientRect()))}r=e.default?Cc(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&cs(u,tr(u,a,s,n))}return Se(l,null,r)}}}),_y=py;function gy(t){const e=t.el;e[mo]&&e[mo](),e[Ch]&&e[Ch]()}function my(t){Fp.set(t,t.el.getBoundingClientRect())}function vy(t){const e=Mp.get(t),n=Fp.get(t),s=e.left-n.left,i=e.top-n.top;if(s||i){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${i}px)`,r.transitionDuration="0s",t}}function Ey(t,e,n){const s=t.cloneNode(),i=t[Xs];i&&i.forEach(a=>{a.split(/\s+/).forEach(l=>l&&s.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&s.classList.add(a)),s.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(s);const{hasTransform:o}=Lp(s);return r.removeChild(s),o}const vo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>Yr(e,n):e};function yy(t){t.target.composing=!0}function Ih(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const js=Symbol("_assign"),Eo={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[js]=vo(i);const r=s||i.props&&i.props.type==="number";es(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=ao(a)),t[js](a)}),n&&es(t,"change",()=>{t.value=t.value.trim()}),e||(es(t,"compositionstart",yy),es(t,"compositionend",Ih),es(t,"change",Ih))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[js]=vo(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?ao(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===l)||(t.value=l))}},Ba={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=zo(e);es(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ao(yo(o)):yo(o));t[js](t.multiple?i?new Set(r):r:r[0]),t._assigning=!0,Gf(()=>{t._assigning=!1})}),t[js]=vo(s)},mounted(t,{value:e}){Sh(t,e)},beforeUpdate(t,e,n){t[js]=vo(n)},updated(t,{value:e}){t._assigning||Sh(t,e)}};function Sh(t,e){const n=t.multiple,s=H(e);if(!(n&&!s&&!zo(e))){for(let i=0,r=t.options.length;i<r;i++){const o=t.options[i],a=yo(o);if(n)if(s){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=lv(e,a)>-1}else o.selected=e.has(a);else if(Jo(yo(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function yo(t){return"_value"in t?t._value:t.value}const by=["ctrl","shift","alt","meta"],Ty={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>by.some(n=>t[`${n}Key`]&&!e.includes(n))},wy=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const a=Ty[e[o]];if(a&&a(i,e))return}return t(i,...r)})},Cy={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Iy=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=i=>{if(!("key"in i))return;const r=Mn(i.key);if(e.some(o=>o===r||Cy[o]===r))return t(i)})},Sy=Ae({patchProp:hy},zE);let Ah;function Ay(){return Ah||(Ah=gE(Sy))}const Ny=(...t)=>{const e=Ay().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Ry(s);if(!i)return;const r=e._component;!q(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Oy(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Oy(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Ry(t){return ye(t)?document.querySelector(t):t}const Py=()=>{};var Nh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t,e){if(!t)throw ui(e)},ui=function(t){return new Error("Firebase Database ("+$p.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ky=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Oc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Up(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ky(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new Dy;const d=r<<2|a>>4;if(s.push(d),c!==64){const _=a<<4&240|c>>2;if(s.push(_),h!==64){const g=c<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Dy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vp=function(t){const e=Up(t);return Oc.encodeByteArray(e,!0)},bo=function(t){return Vp(t).replace(/\./g,"")},To=function(t){try{return Oc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(t){return Hp(void 0,t)}function Hp(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Ly(n)||(t[n]=Hp(t[n],e[n]));return t}function Ly(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy=()=>My().__FIREBASE_DEFAULTS__,$y=()=>{if(typeof process>"u"||typeof Nh>"u")return;const t=Nh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Uy=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&To(t[1]);return e&&JSON.parse(e)},Rc=()=>{try{return Py()||Fy()||$y()||Uy()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Wp=t=>Rc()?.emulatorHosts?.[t],Vy=t=>{const e=Wp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Bp=()=>Rc()?.config,jp=t=>Rc()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Kp(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...t};return[bo(JSON.stringify(n)),bo(JSON.stringify(o)),""].join(".")}const Wi={};function Wy(){const t={prod:[],emulator:[]};for(const e of Object.keys(Wi))Wi[e]?t.emulator.push(e):t.prod.push(e);return t}function By(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Oh=!1;function Gp(t,e){if(typeof window>"u"||typeof document>"u"||!hi(window.location.host)||Wi[t]===e||Wi[t]||Oh)return;Wi[t]=e;function n(d){return`__firebase__banner__${d}`}const s="__firebase__banner",r=Wy().prod.length>0;function o(){const d=document.getElementById(s);d&&d.remove()}function a(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function l(d,_){d.setAttribute("width","24"),d.setAttribute("id",_),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function c(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{Oh=!0,o()},d}function u(d,_){d.setAttribute("id",_),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function h(){const d=By(s),_=n("text"),g=document.getElementById(_)||document.createElement("span"),v=n("learnmore"),N=document.getElementById(v)||document.createElement("a"),k=n("preprendIcon"),x=document.getElementById(k)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const M=d.element;a(M),u(N,v);const C=c();l(x,k),M.append(x,g,N,C),document.body.appendChild(M)}r?(g.innerText="Preview backend disconnected.",x.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(x.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,g.innerText="Preview backend running in this workspace."),g.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",h):h()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function jy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ky(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gy(){const t=Be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function qy(){return $p.NODE_ADMIN===!0}function zy(){try{return typeof indexedDB=="object"}catch{return!1}}function Yy(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy="FirebaseError";class Fn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Qy,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Er.prototype.create)}}class Er{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Xy(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Fn(i,a,s)}}function Xy(t,e){return t.replace(Jy,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Jy=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(t){return JSON.parse(t)}function Ie(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ir(To(r[0])||""),n=ir(To(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Zy=function(t){const e=zp(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},eb=function(t){const e=zp(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Js(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Dl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wo(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function us(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Rh(r)&&Rh(o)){if(!us(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Rh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Di(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function xi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function nb(t,e){const n=new sb(t,e);return n.subscribe.bind(n)}class sb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");ib(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=ja),i.error===void 0&&(i.error=ja),i.complete===void 0&&(i.complete=ja);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ib(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ja(){}function kc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,S(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},aa=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){return t&&t._delegate?t._delegate:t}class hs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new oa;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lb(e))try{this.getOrInitializeService({instanceIdentifier:Qn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qn){return this.instances.has(e)}getOptions(e=Qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ab(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Qn){return this.component?this.component.multipleInstances?e:Qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ab(t){return t===Qn?void 0:t}function lb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ob(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const ub={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},hb=ue.INFO,db={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},fb=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=db[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dc{constructor(e){this.name=e,this._logLevel=hb,this._logHandler=fb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ub[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const pb=(t,e)=>e.some(n=>t instanceof n);let Ph,kh;function _b(){return Ph||(Ph=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gb(){return kh||(kh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yp=new WeakMap,xl=new WeakMap,Qp=new WeakMap,Ka=new WeakMap,xc=new WeakMap;function mb(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Sn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Yp.set(n,t)}).catch(()=>{}),xc.set(e,t),e}function vb(t){if(xl.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});xl.set(t,e)}let Ll={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Eb(t){Ll=t(Ll)}function yb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ga(this),e,...n);return Qp.set(s,e.sort?e.sort():[e]),Sn(s)}:gb().includes(t)?function(...e){return t.apply(Ga(this),e),Sn(Yp.get(this))}:function(...e){return Sn(t.apply(Ga(this),e))}}function bb(t){return typeof t=="function"?yb(t):(t instanceof IDBTransaction&&vb(t),pb(t,_b())?new Proxy(t,Ll):t)}function Sn(t){if(t instanceof IDBRequest)return mb(t);if(Ka.has(t))return Ka.get(t);const e=bb(t);return e!==t&&(Ka.set(t,e),xc.set(e,t)),e}const Ga=t=>xc.get(t);function Tb(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Sn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Sn(o.result),l.oldVersion,l.newVersion,Sn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const wb=["get","getKey","getAll","getAllKeys","count"],Cb=["put","add","delete","clear"],qa=new Map;function Dh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qa.get(e))return qa.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Cb.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||wb.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return qa.set(e,r),r}Eb(t=>({...t,get:(e,n,s)=>Dh(e,n)||t.get(e,n,s),has:(e,n)=>!!Dh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Sb(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Sb(t){return t.getComponent()?.type==="VERSION"}const Ml="@firebase/app",xh="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new Dc("@firebase/app"),Ab="@firebase/app-compat",Nb="@firebase/analytics-compat",Ob="@firebase/analytics",Rb="@firebase/app-check-compat",Pb="@firebase/app-check",kb="@firebase/auth",Db="@firebase/auth-compat",xb="@firebase/database",Lb="@firebase/data-connect",Mb="@firebase/database-compat",Fb="@firebase/functions",$b="@firebase/functions-compat",Ub="@firebase/installations",Vb="@firebase/installations-compat",Hb="@firebase/messaging",Wb="@firebase/messaging-compat",Bb="@firebase/performance",jb="@firebase/performance-compat",Kb="@firebase/remote-config",Gb="@firebase/remote-config-compat",qb="@firebase/storage",zb="@firebase/storage-compat",Yb="@firebase/firestore",Qb="@firebase/ai",Xb="@firebase/firestore-compat",Jb="firebase",Zb="12.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="[DEFAULT]",eT={[Ml]:"fire-core",[Ab]:"fire-core-compat",[Ob]:"fire-analytics",[Nb]:"fire-analytics-compat",[Pb]:"fire-app-check",[Rb]:"fire-app-check-compat",[kb]:"fire-auth",[Db]:"fire-auth-compat",[xb]:"fire-rtdb",[Lb]:"fire-data-connect",[Mb]:"fire-rtdb-compat",[Fb]:"fire-fn",[$b]:"fire-fn-compat",[Ub]:"fire-iid",[Vb]:"fire-iid-compat",[Hb]:"fire-fcm",[Wb]:"fire-fcm-compat",[Bb]:"fire-perf",[jb]:"fire-perf-compat",[Kb]:"fire-rc",[Gb]:"fire-rc-compat",[qb]:"fire-gcs",[zb]:"fire-gcs-compat",[Yb]:"fire-fst",[Xb]:"fire-fst-compat",[Qb]:"fire-vertex","fire-js":"fire-js",[Jb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=new Map,tT=new Map,$l=new Map;function Lh(t,e){try{t.container.addComponent(e)}catch(n){rn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zs(t){const e=t.name;if($l.has(e))return rn.debug(`There were multiple attempts to register component ${e}.`),!1;$l.set(e,t);for(const n of rr.values())Lh(n,t);for(const n of tT.values())Lh(n,t);return!0}function Lc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function lt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},An=new Er("app","Firebase",nT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new hs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw An.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=Zb;function Xp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:Fl,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw An.create("bad-app-name",{appName:String(i)});if(n||(n=Bp()),!n)throw An.create("no-options");const r=rr.get(i);if(r){if(us(n,r.options)&&us(s,r.config))return r;throw An.create("duplicate-app",{appName:i})}const o=new cb(i);for(const l of $l.values())o.addComponent(l);const a=new sT(n,s,o);return rr.set(i,a),a}function Mc(t=Fl){const e=rr.get(t);if(!e&&t===Fl&&Bp())return Xp();if(!e)throw An.create("no-app",{appName:t});return e}function iT(){return Array.from(rr.values())}function Nn(t,e,n){let s=eT[t]??t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rn.warn(o.join(" "));return}Zs(new hs(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT="firebase-heartbeat-database",oT=1,or="firebase-heartbeat-store";let za=null;function Jp(){return za||(za=Tb(rT,oT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(or)}catch(n){console.warn(n)}}}}).catch(t=>{throw An.create("idb-open",{originalErrorMessage:t.message})})),za}async function aT(t){try{const n=(await Jp()).transaction(or),s=await n.objectStore(or).get(Zp(t));return await n.done,s}catch(e){if(e instanceof Fn)rn.warn(e.message);else{const n=An.create("idb-get",{originalErrorMessage:e?.message});rn.warn(n.message)}}}async function Mh(t,e){try{const s=(await Jp()).transaction(or,"readwrite");await s.objectStore(or).put(e,Zp(t)),await s.done}catch(n){if(n instanceof Fn)rn.warn(n.message);else{const s=An.create("idb-set",{originalErrorMessage:n?.message});rn.warn(s.message)}}}function Zp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT=1024,cT=30;class uT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dT(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Fh();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>cT){const i=fT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){rn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Fh(),{heartbeatsToSend:n,unsentEntries:s}=hT(this._heartbeatsCache.heartbeats),i=bo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return rn.warn(e),""}}}function Fh(){return new Date().toISOString().substring(0,10)}function hT(t,e=lT){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),$h(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$h(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class dT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zy()?Yy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await aT(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Mh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Mh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function $h(t){return bo(JSON.stringify({version:2,heartbeats:t})).length}function fT(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(t){Zs(new hs("platform-logger",e=>new Ib(e),"PRIVATE")),Zs(new hs("heartbeat",e=>new uT(e),"PRIVATE")),Nn(Ml,xh,t),Nn(Ml,xh,"esm2020"),Nn("fire-js","")}pT("");function e_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _T=e_,t_=new Er("auth","Firebase",e_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=new Dc("@firebase/auth");function gT(t,...e){Co.logLevel<=ue.WARN&&Co.warn(`Auth (${fi}): ${t}`,...e)}function Zr(t,...e){Co.logLevel<=ue.ERROR&&Co.error(`Auth (${fi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t,...e){throw Fc(t,...e)}function Mt(t,...e){return Fc(t,...e)}function n_(t,e,n){const s={..._T(),[e]:n};return new Er("auth","Firebase",s).create(e,{appName:t.name})}function Xt(t){return n_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Fc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return t_.create(t,...e)}function W(t,e,...n){if(!t)throw Fc(e,...n)}function zt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zr(e),new Error(e)}function on(t,e){t||zt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(){return typeof self<"u"&&self.location?.href||""}function mT(){return Uh()==="http:"||Uh()==="https:"}function Uh(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mT()||Ky()||"connection"in navigator)?navigator.onLine:!0}function ET(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,n){this.shortDelay=e,this.longDelay=n,on(n>e,"Short delay should be less than long delay!"),this.isMobile=Pc()||qp()}get(){return vT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(t,e){on(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],TT=new yr(3e4,6e4);function $n(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Un(t,e,n,s,i={}){return i_(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=di({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...r};return jy()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&hi(t.emulatorConfig.host)&&(c.credentials="include"),s_.fetch()(await r_(t,t.config.apiHost,n,a),c)})}async function i_(t,e,n){t._canInitEmulator=!1;const s={...yT,...e};try{const i=new CT(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ur(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ur(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ur(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ur(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw n_(t,u,c);It(t,u)}}catch(i){if(i instanceof Fn)throw i;It(t,"network-request-failed",{message:String(i)})}}async function br(t,e,n,s,i={}){const r=await Un(t,e,n,s,i);return"mfaPendingCredential"in r&&It(t,"multi-factor-auth-required",{_serverResponse:r}),r}async function r_(t,e,n,s){const i=`${e}${n}?${s}`,r=t,o=r.config.emulator?$c(t.config,i):`${t.config.apiScheme}://${i}`;return bT.includes(n)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function wT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class CT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Mt(this.auth,"network-request-failed")),TT.get())})}}function Ur(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Mt(t,e,s);return i.customData._tokenResponse=n,i}function Vh(t){return t!==void 0&&t.enterprise!==void 0}class IT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return wT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ST(t,e){return Un(t,"GET","/v2/recaptchaConfig",$n(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AT(t,e){return Un(t,"POST","/v1/accounts:delete",e)}async function Io(t,e){return Un(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function NT(t,e=!1){const n=et(t),s=await n.getIdToken(e),i=Uc(s);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r?.sign_in_provider;return{claims:i,token:s,authTime:Bi(Ya(i.auth_time)),issuedAtTime:Bi(Ya(i.iat)),expirationTime:Bi(Ya(i.exp)),signInProvider:o||null,signInSecondFactor:r?.sign_in_second_factor||null}}function Ya(t){return Number(t)*1e3}function Uc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Zr("JWT malformed, contained fewer than 3 sections"),null;try{const i=To(n);return i?JSON.parse(i):(Zr("Failed to decode base64 JWT payload"),null)}catch(i){return Zr("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Hh(t){const e=Uc(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ar(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Fn&&OT(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function OT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bi(this.lastLoginAt),this.creationTime=Bi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(t){const e=t.auth,n=await t.getIdToken(),s=await ar(t,Io(e,{idToken:n}));W(s?.users.length,e,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const r=i.providerUserInfo?.length?o_(i.providerUserInfo):[],o=kT(t.providerData,r),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!o?.length,c=a?l:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Vl(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,u)}async function PT(t){const e=et(t);await So(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kT(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function o_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DT(t,e){const n=await i_(t,{},async()=>{const s=di({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=await r_(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:s};return t.emulatorConfig&&hi(t.emulatorConfig.host)&&(l.credentials="include"),s_.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function xT(t,e){return Un(t,"POST","/v2/accounts:revokeToken",$n(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=Hh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await DT(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Ks;return s&&(W(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(W(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(W(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ks,this.toJSON())}_performRefresh(){return zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vt{constructor({uid:e,auth:n,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new RT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Vl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ar(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return NT(this,e)}reload(){return PT(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await So(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(lt(this.auth.app))return Promise.reject(Xt(this.auth));const e=await this.getIdToken();return await ar(this,AT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,i=n.email??void 0,r=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:h,emailVerified:d,isAnonymous:_,providerData:g,stsTokenManager:v}=n;W(h&&v,e,"internal-error");const N=Ks.fromJSON(this.name,v);W(typeof h=="string",e,"internal-error"),_n(s,e.name),_n(i,e.name),W(typeof d=="boolean",e,"internal-error"),W(typeof _=="boolean",e,"internal-error"),_n(r,e.name),_n(o,e.name),_n(a,e.name),_n(l,e.name),_n(c,e.name),_n(u,e.name);const k=new vt({uid:h,auth:e,email:i,emailVerified:d,displayName:s,isAnonymous:_,photoURL:o,phoneNumber:r,tenantId:a,stsTokenManager:N,createdAt:c,lastLoginAt:u});return g&&Array.isArray(g)&&(k.providerData=g.map(x=>({...x}))),l&&(k._redirectEventId=l),k}static async _fromIdTokenResponse(e,n,s=!1){const i=new Ks;i.updateFromServerResponse(n);const r=new vt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await So(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];W(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?o_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!r?.length,a=new Ks;a.updateFromIdToken(s);const l=new vt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Vl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!r?.length};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh=new Map;function Yt(t){on(t instanceof Function,"Expected a class definition");let e=Wh.get(t);return e?(on(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wh.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}a_.type="NONE";const Bh=a_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(t,e,n){return`firebase:${t}:${e}:${n}`}class Gs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=eo(this.userKey,i.apiKey,r),this.fullPersistenceKey=eo("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Io(this.auth,{idToken:e}).catch(()=>{});return n?vt._fromGetAccountInfoResponse(this.auth,n,e):null}return vt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Gs(Yt(Bh),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Yt(Bh);const o=eo(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){let h;if(typeof u=="string"){const d=await Io(e,{idToken:u}).catch(()=>{});if(!d)break;h=await vt._fromGetAccountInfoResponse(e,d,u)}else h=vt._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Gs(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Gs(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(h_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(l_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(f_(e))return"Blackberry";if(p_(e))return"Webos";if(c_(e))return"Safari";if((e.includes("chrome/")||u_(e))&&!e.includes("edge/"))return"Chrome";if(d_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if(s?.length===2)return s[1]}return"Other"}function l_(t=Be()){return/firefox\//i.test(t)}function c_(t=Be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function u_(t=Be()){return/crios\//i.test(t)}function h_(t=Be()){return/iemobile/i.test(t)}function d_(t=Be()){return/android/i.test(t)}function f_(t=Be()){return/blackberry/i.test(t)}function p_(t=Be()){return/webos/i.test(t)}function Vc(t=Be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function LT(t=Be()){return Vc(t)&&!!window.navigator?.standalone}function MT(){return Gy()&&document.documentMode===10}function __(t=Be()){return Vc(t)||d_(t)||p_(t)||f_(t)||/windows phone/i.test(t)||h_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(t,e=[]){let n;switch(t){case"Browser":n=jh(Be());break;case"Worker":n=`${jh(Be())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fi}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $T(t,e={}){return Un(t,"GET","/v2/passwordPolicy",$n(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT=6;class VT{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??UT,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kh(this),this.idTokenSubscription=new Kh(this),this.beforeStateQueue=new FT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=t_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yt(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Gs.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Io(this,{idToken:e}),s=await vt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(lt(this.app)){const r=this.app.settings.authIdToken;return r?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(r).then(o,o))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=this.redirectUser?._redirectEventId,o=s?._redirectEventId,a=await this.tryRedirectSignIn(e);(!r||r===o)&&a?.user&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(r){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(r))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await So(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ET()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(lt(this.app))return Promise.reject(Xt(this));const n=e?et(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return lt(this.app)?Promise.reject(Xt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return lt(this.app)?Promise.reject(Xt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $T(this),n=new VT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Er("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await xT(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yt(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Gs.create(this,[Yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=g_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(lt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&gT(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ys(t){return et(t)}class Kh{constructor(e){this.auth=e,this.observer=null,this.addObserver=nb(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let la={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function WT(t){la=t}function m_(t){return la.loadJS(t)}function BT(){return la.recaptchaEnterpriseScript}function jT(){return la.gapiScript}function KT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class GT{constructor(){this.enterprise=new qT}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class qT{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const zT="recaptcha-enterprise",v_="NO_RECAPTCHA";class YT{constructor(e){this.type=zT,this.auth=ys(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{ST(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new IT(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(r,o,a){const l=window.grecaptcha;Vh(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(v_)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new GT().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{s(this.auth).then(a=>{if(!n&&Vh(window.grecaptcha))i(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=BT();l.length!==0&&(l+=a),m_(l).then(()=>{i(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Gh(t,e,n,s=!1,i=!1){const r=new YT(t);let o;if(i)o=v_;else try{o=await r.verify(n)}catch{o=await r.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Hl(t,e,n,s,i){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await Gh(t,e,n,n==="getOobCode");return s(t,r)}else return s(t,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Gh(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(t,e){const n=Lc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(us(r,e??{}))return i;It(i,"already-initialized")}return n.initialize({options:e})}function XT(t,e){const n=e?.persistence||[],s=(Array.isArray(n)?n:[n]).map(Yt);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e?.popupRedirectResolver)}function JT(t,e,n){const s=ys(t);W(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=E_(e),{host:o,port:a}=ZT(e),l=a===null?"":`:${a}`,c={url:`${r}//${o}${l}/`},u=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){W(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),W(us(c,s.config.emulator)&&us(u,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=c,s.emulatorConfig=u,s.settings.appVerificationDisabledForTesting=!0,hi(o)?(Kp(`${r}//${o}${l}`),Gp("Auth",!0)):ew()}function E_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ZT(t){const e=E_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:qh(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:qh(o)}}}function qh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ew(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zt("not implemented")}_getIdTokenResponse(e){return zt("not implemented")}_linkToIdToken(e,n){return zt("not implemented")}_getReauthenticationResolver(e){return zt("not implemented")}}async function tw(t,e){return Un(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nw(t,e){return br(t,"POST","/v1/accounts:signInWithPassword",$n(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sw(t,e){return br(t,"POST","/v1/accounts:signInWithEmailLink",$n(t,e))}async function iw(t,e){return br(t,"POST","/v1/accounts:signInWithEmailLink",$n(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends Hc{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new lr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new lr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hl(e,n,"signInWithPassword",nw);case"emailLink":return sw(e,{email:this._email,oobCode:this._password});default:It(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hl(e,s,"signUpPassword",tw);case"emailLink":return iw(e,{idToken:n,email:this._email,oobCode:this._password});default:It(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qs(t,e){return br(t,"POST","/v1/accounts:signInWithIdp",$n(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw="http://localhost";class ds extends Hc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ds(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):It("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,...r}=n;if(!s||!i)return null;const o=new ds(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,qs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qs(e,n)}buildRequest(){const e={requestUri:rw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=di(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function aw(t){const e=Di(xi(t)).link,n=e?Di(xi(e)).deep_link_id:null,s=Di(xi(t)).deep_link_id;return(s?Di(xi(s)).link:null)||s||n||e||t}class Wc{constructor(e){const n=Di(xi(e)),s=n.apiKey??null,i=n.oobCode??null,r=ow(n.mode??null);W(s&&i&&r,"argument-error"),this.apiKey=s,this.operation=r,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=aw(e);try{return new Wc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(){this.providerId=pi.PROVIDER_ID}static credential(e,n){return lr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Wc.parseLink(n);return W(s,"argument-error"),lr._fromEmailAndCode(e,s.code,s.tenantId)}}pi.PROVIDER_ID="password";pi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";pi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends y_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends Tr{constructor(){super("facebook.com")}static credential(e){return ds._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Tr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ds._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return wn.credential(n,s)}catch{return null}}}wn.GOOGLE_SIGN_IN_METHOD="google.com";wn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Tr{constructor(){super("github.com")}static credential(e){return ds._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.GITHUB_SIGN_IN_METHOD="github.com";Cn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends Tr{constructor(){super("twitter.com")}static credential(e,n){return ds._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return In.credential(n,s)}catch{return null}}}In.TWITTER_SIGN_IN_METHOD="twitter.com";In.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lw(t,e){return br(t,"POST","/v1/accounts:signUp",$n(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await vt._fromIdTokenResponse(e,s,i),o=zh(s);return new fs({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=zh(s);return new fs({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function zh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao extends Fn{constructor(e,n,s,i){super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Ao.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Ao(e,n,s,i)}}function b_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ao._fromErrorAndOperation(t,r,e,s):r})}async function cw(t,e,n=!1){const s=await ar(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fs._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uw(t,e,n=!1){const{auth:s}=t;if(lt(s.app))return Promise.reject(Xt(s));const i="reauthenticate";try{const r=await ar(t,b_(s,i,e,t),n);W(r.idToken,s,"internal-error");const o=Uc(r.idToken);W(o,s,"internal-error");const{sub:a}=o;return W(t.uid===a,s,"user-mismatch"),fs._forOperation(t,i,r)}catch(r){throw r?.code==="auth/user-not-found"&&It(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T_(t,e,n=!1){if(lt(t.app))return Promise.reject(Xt(t));const s="signIn",i=await b_(t,s,e),r=await fs._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function hw(t,e){return T_(ys(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w_(t){const e=ys(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function dw(t,e,n){if(lt(t.app))return Promise.reject(Xt(t));const s=ys(t),o=await Hl(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",lw).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&w_(t),l}),a=await fs._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function fw(t,e,n){return lt(t.app)?Promise.reject(Xt(t)):hw(et(t),pi.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&w_(t),s})}function pw(t,e,n,s){return et(t).onIdTokenChanged(e,n,s)}function _w(t,e,n){return et(t).beforeAuthStateChanged(e,n)}function gw(t,e,n,s){return et(t).onAuthStateChanged(e,n,s)}function mw(t){return et(t).signOut()}const No="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(No,"1"),this.storage.removeItem(No),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw=1e3,Ew=10;class I_ extends C_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=__(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);MT()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ew):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},vw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}I_.type="LOCAL";const yw=I_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_ extends C_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}S_.type="SESSION";const A_=S_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new ca(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await bw(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ca.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Bc("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return window}function ww(t){Ft().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(){return typeof Ft().WorkerGlobalScope<"u"&&typeof Ft().importScripts=="function"}async function Cw(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Iw(){return navigator?.serviceWorker?.controller||null}function Sw(){return N_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_="firebaseLocalStorageDb",Aw=1,Oo="firebaseLocalStorage",R_="fbase_key";class wr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ua(t,e){return t.transaction([Oo],e?"readwrite":"readonly").objectStore(Oo)}function Nw(){const t=indexedDB.deleteDatabase(O_);return new wr(t).toPromise()}function Wl(){const t=indexedDB.open(O_,Aw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Oo,{keyPath:R_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Oo)?e(s):(s.close(),await Nw(),e(await Wl()))})})}async function Yh(t,e,n){const s=ua(t,!0).put({[R_]:e,value:n});return new wr(s).toPromise()}async function Ow(t,e){const n=ua(t,!1).get(e),s=await new wr(n).toPromise();return s===void 0?null:s.value}function Qh(t,e){const n=ua(t,!0).delete(e);return new wr(n).toPromise()}const Rw=800,Pw=3;class P_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Pw)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return N_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ca._getInstance(Sw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Cw(),!this.activeServiceWorker)return;this.sender=new Tw(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Iw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wl();return await Yh(e,No,"1"),await Qh(e,No),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Yh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Ow(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=ua(i,!1).getAll();return new wr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Rw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}P_.type="LOCAL";const kw=P_;new yr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dw(t,e){return e?Yt(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc extends Hc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xw(t){return T_(t.auth,new jc(t),t.bypassAuthState)}function Lw(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),uw(n,new jc(t),t.bypassAuthState)}async function Mw(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),cw(n,new jc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xw;case"linkViaPopup":case"linkViaRedirect":return Mw;case"reauthViaPopup":case"reauthViaRedirect":return Lw;default:It(this.auth,"internal-error")}}resolve(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw=new yr(2e3,1e4);class xs extends k_{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,xs.currentPopupAction&&xs.currentPopupAction.cancel(),xs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){on(this.filter.length===1,"Popup operations only handle one event");const e=Bc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xs.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Fw.get())};e()}}xs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w="pendingRedirect",to=new Map;class Uw extends k_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=to.get(this.auth._key());if(!e){try{const s=await Vw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}to.set(this.auth._key(),e)}return this.bypassAuthState||to.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Vw(t,e){const n=Bw(e),s=Ww(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Hw(t,e){to.set(t._key(),e)}function Ww(t){return Yt(t._redirectPersistence)}function Bw(t){return eo($w,t.config.apiKey,t.name)}async function jw(t,e,n=!1){if(lt(t.app))return Promise.reject(Xt(t));const s=ys(t),i=Dw(s,e),o=await new Uw(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=600*1e3;class Gw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!D_(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";n.onError(Mt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Kw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xh(e))}saveEventToCache(e){this.cachedEventUids.add(Xh(e)),this.lastProcessedEventTime=Date.now()}}function Xh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function D_({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function qw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return D_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zw(t,e={}){return Un(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Qw=/^https?/;async function Xw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zw(t);for(const n of e)try{if(Jw(n))return}catch{}It(t,"unauthorized-domain")}function Jw(t){const e=Ul(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Qw.test(n))return!1;if(Yw.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw=new yr(3e4,6e4);function Jh(){const t=Ft().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function eC(t){return new Promise((e,n)=>{function s(){Jh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jh(),n(Mt(t,"network-request-failed"))},timeout:Zw.get()})}if(Ft().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Ft().gapi?.load)s();else{const i=KT("iframefcb");return Ft()[i]=()=>{gapi.load?s():n(Mt(t,"network-request-failed"))},m_(`${jT()}?onload=${i}`).catch(r=>n(r))}}).catch(e=>{throw no=null,e})}let no=null;function tC(t){return no=no||eC(t),no}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC=new yr(5e3,15e3),sC="__/auth/iframe",iC="emulator/auth/iframe",rC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function aC(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$c(e,iC):`https://${t.config.authDomain}/${sC}`,s={apiKey:e.apiKey,appName:t.name,v:fi},i=oC.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${di(s).slice(1)}`}async function lC(t){const e=await tC(t),n=Ft().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:aC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rC,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Mt(t,"network-request-failed"),a=Ft().setTimeout(()=>{r(o)},nC.get());function l(){Ft().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uC=500,hC=600,dC="_blank",fC="http://localhost";class Zh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pC(t,e,n,s=uC,i=hC){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l={...cC,width:s.toString(),height:i.toString(),top:r,left:o},c=Be().toLowerCase();n&&(a=u_(c)?dC:n),l_(c)&&(e=e||fC,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[_,g])=>`${d}${_}=${g},`,"");if(LT(c)&&a!=="_self")return _C(e||"",a),new Zh(null);const h=window.open(e||"",a,u);W(h,t,"popup-blocked");try{h.focus()}catch{}return new Zh(h)}function _C(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC="__/auth/handler",mC="emulator/auth/handler",vC=encodeURIComponent("fac");async function ed(t,e,n,s,i,r){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:fi,eventId:i};if(e instanceof y_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Dl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof Tr){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${vC}=${encodeURIComponent(l)}`:"";return`${EC(t)}?${di(a).slice(1)}${c}`}function EC({config:t}){return t.emulator?$c(t,mC):`https://${t.authDomain}/${gC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="webStorageSupport";class yC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=A_,this._completeRedirectFn=jw,this._overrideRedirectResult=Hw}async _openPopup(e,n,s,i){on(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const r=await ed(e,n,s,Ul(),i);return pC(e,r,Bc())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await ed(e,n,s,Ul(),i);return ww(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(on(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await lC(e),s=new Gw(e);return n.register("authEvent",i=>(W(i?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Qa,{type:Qa},i=>{const r=i?.[0]?.[Qa];r!==void 0&&n(!!r),It(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Xw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return __()||c_()||Vc()}}const bC=yC;var td="@firebase/auth",nd="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function CC(t){Zs(new hs("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:g_(t)},c=new HT(s,i,r,l);return XT(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Zs(new hs("auth-internal",e=>{const n=ys(e.getProvider("auth").getImmediate());return(s=>new TC(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nn(td,nd,wC(t)),Nn(td,nd,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=300,SC=jp("authIdTokenMaxAge")||IC;let sd=null;const AC=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>SC)return;const i=n?.token;sd!==i&&(sd=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function bn(t=Mc()){const e=Lc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=QT(t,{popupRedirectResolver:bC,persistence:[kw,yw,A_]}),s=jp("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=AC(r.toString());_w(n,o,()=>o(n.currentUser)),pw(n,a=>o(a))}}const i=Wp("auth");return i&&JT(n,`http://${i}`),n}function NC(){return document.getElementsByTagName("head")?.[0]??document}WT({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Mt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",NC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});CC("Browser");const ha=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},OC={name:"AuthPage",props:{darkMode:Boolean},data(){return{email:"",password:"",isLoginMode:!0,error:""}},methods:{toggleMode(){this.isLoginMode=!this.isLoginMode,this.error=""},async handleSubmit(){const t=bn();try{this.isLoginMode?await fw(t,this.email,this.password):await dw(t,this.email,this.password),this.error=""}catch(e){this.error=this.isLoginMode?"Неверный email или пароль":"Ошибка регистрации. Пароль должен содержать минимум 6 символов.",console.error(e)}}}},RC={class:"auth-container animate__animated animate__fadeIn"},PC={class:"auth-card"},kC={class:"auth-header"},DC={class:"form-floating mb-3"},xC={class:"form-floating mb-4"},LC={type:"submit",class:"btn btn-primary w-100 py-2 mb-3"},MC={class:"text-center"},FC={key:0,class:"alert alert-danger mt-3"};function $C(t,e,n,s,i,r){return ve(),Te("div",RC,[P("div",PC,[P("div",kC,[e[4]||(e[4]=P("i",{class:"bi bi-person-circle fs-1 mb-3"},null,-1)),P("h2",null,Me(i.isLoginMode?"Вход":"Регистрация"),1)]),P("form",{onSubmit:e[3]||(e[3]=wy((...o)=>r.handleSubmit&&r.handleSubmit(...o),["prevent"])),class:"auth-form"},[P("div",DC,[Jn(P("input",{type:"email",class:"form-control",id:"email","onUpdate:modelValue":e[0]||(e[0]=o=>i.email=o),placeholder:"name@example.com",required:""},null,512),[[Eo,i.email]]),e[5]||(e[5]=P("label",{for:"email"},"Email",-1))]),P("div",xC,[Jn(P("input",{type:"password",class:"form-control",id:"password","onUpdate:modelValue":e[1]||(e[1]=o=>i.password=o),placeholder:"Пароль",required:""},null,512),[[Eo,i.password]]),e[6]||(e[6]=P("label",{for:"password"},"Пароль",-1))]),P("button",LC,[P("i",{class:tn(["bi",i.isLoginMode?"bi-box-arrow-in-right":"bi-person-plus"])},null,2),Ws(" "+Me(i.isLoginMode?"Войти":"Зарегистрироваться"),1)]),P("div",MC,[P("button",{onClick:e[2]||(e[2]=(...o)=>r.toggleMode&&r.toggleMode(...o)),class:"btn btn-link",type:"button"},Me(i.isLoginMode?"Создать аккаунт":"Уже есть аккаунт?"),1)])],32),Se(Nc,{name:"fade"},{default:er(()=>[i.error?(ve(),Te("div",FC,[e[7]||(e[7]=P("i",{class:"bi bi-exclamation-triangle-fill me-2"},null,-1)),Ws(" "+Me(i.error),1)])):Bs("",!0)]),_:1})])])}const UC=ha(OC,[["render",$C],["__scopeId","data-v-79c91073"]]);var id={};const rd="@firebase/database",od="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let x_="";function VC(t){x_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ie(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ir(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return hn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new HC(e)}}catch{}return new WC},ts=L_("localStorage"),BC=L_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=new Dc("@firebase/database"),jC=function(){let t=1;return function(){return t++}}(),M_=function(t){const e=rb(t),n=new tb;n.update(e);const s=n.digest();return Oc.encodeByteArray(s)},Cr=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Cr.apply(null,s):typeof s=="object"?e+=Ie(s):e+=s,e+=" "}return e};let ji=null,ad=!0;const KC=function(t,e){S(!0,"Can't turn on custom loggers persistently."),zs.logLevel=ue.VERBOSE,ji=zs.log.bind(zs)},De=function(...t){if(ad===!0&&(ad=!1,ji===null&&BC.get("logging_enabled")===!0&&KC()),ji){const e=Cr.apply(null,t);ji(e)}},Ir=function(t){return function(...e){De(t,...e)}},Bl=function(...t){const e="FIREBASE INTERNAL ERROR: "+Cr(...t);zs.error(e)},an=function(...t){const e=`FIREBASE FATAL ERROR: ${Cr(...t)}`;throw zs.error(e),new Error(e)},Je=function(...t){const e="FIREBASE WARNING: "+Cr(...t);zs.warn(e)},GC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Je("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},F_=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},qC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ei="[MIN_NAME]",ps="[MAX_NAME]",_i=function(t,e){if(t===e)return 0;if(t===ei||e===ps)return-1;if(e===ei||t===ps)return 1;{const n=ld(t),s=ld(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},zC=function(t,e){return t===e?0:t<e?-1:1},Ii=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ie(e))},Kc=function(t){if(typeof t!="object"||t===null)return Ie(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ie(e[s]),n+=":",n+=Kc(t[e[s]]);return n+="}",n},$_=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ze(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const U_=function(t){S(!F_(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},YC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},QC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function XC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const JC=new RegExp("^-?(0*)\\d{1,10}$"),ZC=-2147483648,eI=2147483647,ld=function(t){if(JC.test(t)){const e=Number(t);if(e>=ZC&&e<=eI)return e}return null},gi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Je("Exception was thrown by user callback.",n),e},Math.floor(0))}},tI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ki=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,lt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){Je(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(De("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Je(e)}}class so{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}so.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc="5",V_="v",H_="s",W_="r",B_="f",j_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,K_="ls",G_="p",jl="ac",q_="websocket",z_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ts.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ts.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function iI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Q_(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let s;if(e===q_)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===z_)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);iI(t)&&(n.ns=t.namespace);const i=[];return Ze(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(){this.counters_={}}incrementCounter(e,n=1){hn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return xy(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa={},Ja={};function qc(t){const e=t.toString();return Xa[e]||(Xa[e]=new rI),Xa[e]}function oI(t,e){const n=t.toString();return Ja[n]||(Ja[n]=e()),Ja[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&gi(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd="start",lI="close",cI="pLPCommand",uI="pRTLPCB",X_="id",J_="pw",Z_="ser",hI="cb",dI="seg",fI="ts",pI="d",_I="dframe",eg=1870,tg=30,gI=eg-tg,mI=25e3,vI=3e4;class Ls{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ir(e),this.stats_=qc(n),this.urlFn=l=>(this.appCheckToken&&(l[jl]=this.appCheckToken),Q_(n,z_,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new aI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(vI)),qC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new zc((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===cd)this.id=a,this.password=l;else if(o===lI)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[cd]="t",s[Z_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[hI]=this.scriptTagHolder.uniqueCallbackIdentifier),s[V_]=Gc,this.transportSessionId&&(s[H_]=this.transportSessionId),this.lastSessionId&&(s[K_]=this.lastSessionId),this.applicationId&&(s[G_]=this.applicationId),this.appCheckToken&&(s[jl]=this.appCheckToken),typeof location<"u"&&location.hostname&&j_.test(location.hostname)&&(s[W_]=B_);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ls.forceAllow_=!0}static forceDisallow(){Ls.forceDisallow_=!0}static isAvailable(){return Ls.forceAllow_?!0:!Ls.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!YC()&&!QC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Vp(n),i=$_(s,gI);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[_I]="t",s[X_]=e,s[J_]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ie(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class zc{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=jC(),window[cI+this.uniqueCallbackIdentifier]=e,window[uI+this.uniqueCallbackIdentifier]=n,this.myIFrame=zc.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){De("frame writing exception"),a.stack&&De(a.stack),De(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||De("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[X_]=this.myID,e[J_]=this.myPW,e[Z_]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+tg+s.length<=eg;){const o=this.pendingSegs.shift();s=s+"&"+dI+i+"="+o.seg+"&"+fI+i+"="+o.ts+"&"+pI+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(mI)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{De("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI=16384,yI=45e3;let Ro=null;typeof MozWebSocket<"u"?Ro=MozWebSocket:typeof WebSocket<"u"&&(Ro=WebSocket);class mt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ir(this.connId),this.stats_=qc(n),this.connURL=mt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[V_]=Gc,typeof location<"u"&&location.hostname&&j_.test(location.hostname)&&(o[W_]=B_),n&&(o[H_]=n),s&&(o[K_]=s),i&&(o[jl]=i),r&&(o[G_]=r),Q_(e,q_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ts.set("previous_websocket_failure",!0);try{let s;qy(),this.mySock=new Ro(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){mt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ro!==null&&!mt.forceDisallow_}static previouslyFailed(){return ts.isInMemoryStorage||ts.get("previous_websocket_failure")===!0}markConnectionHealthy(){ts.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ir(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=$_(n,EI);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(yI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}mt.responsesRequiredToBeHealthy=2;mt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{static get ALL_TRANSPORTS(){return[Ls,mt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=mt&&mt.isAvailable();let s=n&&!mt.previouslyFailed();if(e.webSocketOnly&&(n||Je("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[mt];else{const i=this.transports_=[];for(const r of cr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);cr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}cr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI=6e4,TI=5e3,wI=10*1024,CI=100*1024,Za="t",ud="d",II="s",hd="r",SI="e",dd="o",fd="a",pd="n",_d="p",AI="h";class NI{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ir("c:"+this.id+":"),this.transportManager_=new cr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ki(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>CI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>wI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Za in e){const n=e[Za];n===fd?this.upgradeIfSecondaryHealthy_():n===hd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===dd&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ii("t",e),s=Ii("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:_d,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:fd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:pd,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ii("t",e),s=Ii("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ii(Za,e);if(ud in e){const s=e[ud];if(n===AI){const i={...s};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===pd){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===II?this.onConnectionShutdown_(s):n===hd?this.onReset_(s):n===SI?Bl("Server Error: "+s):n===dd?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Bl("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Gc!==s&&Je("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Ki(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(bI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ki(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(TI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:_d,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ts.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po extends sg{static getInstance(){return new Po}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Pc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd=32,md=768;class fe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function oe(){return new fe("")}function X(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Pn(t){return t.pieces_.length-t.pieceNum_}function _e(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new fe(t.pieces_,e)}function ig(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function OI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function rg(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function og(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new fe(e,0)}function be(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof fe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new fe(n,0)}function ee(t){return t.pieceNum_>=t.pieces_.length}function Qe(t,e){const n=X(t),s=X(e);if(n===null)return e;if(n===s)return Qe(_e(t),_e(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Yc(t,e){if(Pn(t)!==Pn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Et(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Pn(t)>Pn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class RI{constructor(e,n){this.errorPrefix_=n,this.parts_=rg(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=aa(this.parts_[s]);ag(this)}}function PI(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=aa(e),ag(t)}function kI(t){const e=t.parts_.pop();t.byteLength_-=aa(e),t.parts_.length>0&&(t.byteLength_-=1)}function ag(t){if(t.byteLength_>md)throw new Error(t.errorPrefix_+"has a key path longer than "+md+" bytes ("+t.byteLength_+").");if(t.parts_.length>gd)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+gd+") or object contains a cycle "+Xn(t))}function Xn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc extends sg{static getInstance(){return new Qc}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=1e3,DI=300*1e3,vd=30*1e3,xI=1.3,LI=3e4,MI="server_kill",Ed=3;class Jt extends ng{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Jt.nextPersistentConnectionId_++,this.log_=Ir("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Si,this.maxReconnectDelay_=DI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Qc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Po.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ie(r)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new oa,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Jt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&hn(e,"w")){const s=Js(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Je(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||eb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=vd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Zy(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ie(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Bl("Unrecognized action received from server: "+Ie(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Si,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Si,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>LI&&(this.reconnectDelay_=Si),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*xI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Jt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){S(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?De("getToken() completed but was canceled"):(De("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new NI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Je(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(MI)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Je(h),l())}}}interrupt(e){De("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){De("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Dl(this.interruptReasons_)&&(this.reconnectDelay_=Si,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Kc(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new fe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){De("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ed&&(this.reconnectDelay_=vd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){De("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ed&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+x_.replace(/\./g,"-")]=1,Pc()?e["framework.cordova"]=1:qp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Po.getInstance().currentlyOnline();return Dl(this.interruptReasons_)&&e}}Jt.nextPersistentConnectionId_=0;Jt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new J(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new J(ei,e),i=new J(ei,n);return this.compare(s,i)!==0}minPost(){return J.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vr;class lg extends da{static get __EMPTY_NODE(){return Vr}static set __EMPTY_NODE(e){Vr=e}compare(e,n){return _i(e.name,n.name)}isDefinedOn(e){throw ui("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return J.MIN}maxPost(){return new J(ps,Vr)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new J(e,Vr)}toString(){return".key"}}const Ys=new lg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ce{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ce.RED,this.left=i??Xe.EMPTY_NODE,this.right=r??Xe.EMPTY_NODE}copy(e,n,s,i,r){return new Ce(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Xe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Xe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ce.RED=!0;Ce.BLACK=!1;class FI{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ce(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Xe{constructor(e,n=Xe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Xe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ce.BLACK,null,null))}remove(e){return new Xe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ce.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Hr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Hr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Hr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Hr(this.root_,null,this.comparator_,!0,e)}}Xe.EMPTY_NODE=new FI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $I(t,e){return _i(t.name,e.name)}function Xc(t,e){return _i(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kl;function UI(t){Kl=t}const cg=function(t){return typeof t=="number"?"number:"+U_(t):"string:"+t},ug=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&hn(e,".sv"),"Priority must be a string or number.")}else S(t===Kl||t.isEmpty(),"priority of unexpected type.");S(t===Kl||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yd;class we{static set __childrenNodeConstructor(e){yd=e}static get __childrenNodeConstructor(){return yd}constructor(e,n=we.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ug(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new we(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ee(e)?this:X(e)===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:we.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=X(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(S(s!==".priority"||Pn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,we.__childrenNodeConstructor.EMPTY_NODE.updateChild(_e(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+cg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=U_(this.value_):e+=this.value_,this.lazyHash_=M_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===we.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof we.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=we.VALUE_TYPE_ORDER.indexOf(n),r=we.VALUE_TYPE_ORDER.indexOf(s);return S(i>=0,"Unknown leaf type: "+n),S(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}we.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hg,dg;function VI(t){hg=t}function HI(t){dg=t}class WI extends da{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?_i(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return J.MIN}maxPost(){return new J(ps,new we("[PRIORITY-POST]",dg))}makePost(e,n){const s=hg(e);return new J(n,new we("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ee=new WI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=Math.log(2);class jI{constructor(e){const n=r=>parseInt(Math.log(r)/BI,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ko=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Ce(d,h.node,Ce.BLACK,null,null);{const _=parseInt(u/2,10)+l,g=i(l,_),v=i(_+1,c);return h=t[_],d=n?n(h):h,new Ce(d,h.node,Ce.BLACK,g,v)}},r=function(l){let c=null,u=null,h=t.length;const d=function(g,v){const N=h-g,k=h;h-=g;const x=i(N+1,k),M=t[N],C=n?n(M):M;_(new Ce(C,M.node,v,null,x))},_=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const v=l.nextBitIsOne(),N=Math.pow(2,l.count-(g+1));v?d(N,Ce.BLACK):(d(N,Ce.BLACK),d(N,Ce.RED))}return u},o=new jI(t.length),a=r(o);return new Xe(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let el;const Ss={};class Qt{static get Default(){return S(Ss&&Ee,"ChildrenNode.ts has not been loaded"),el=el||new Qt({".priority":Ss},{".priority":Ee}),el}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Js(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Xe?n:null}hasIndex(e){return hn(this.indexSet_,e.toString())}addIndex(e,n){S(e!==Ys,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(J.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=ko(s,e.getCompare()):a=Ss;const l=e.toString(),c={...this.indexSet_};c[l]=e;const u={...this.indexes_};return u[l]=a,new Qt(u,c)}addToIndexes(e,n){const s=wo(this.indexes_,(i,r)=>{const o=Js(this.indexSet_,r);if(S(o,"Missing index implementation for "+r),i===Ss)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(J.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),ko(a,o.getCompare())}else return Ss;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new J(e.name,a))),l.insert(e,e.node)}});return new Qt(s,this.indexSet_)}removeFromIndexes(e,n){const s=wo(this.indexes_,i=>{if(i===Ss)return i;{const r=n.get(e.name);return r?i.remove(new J(e.name,r)):i}});return new Qt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ai;class K{static get EMPTY_NODE(){return Ai||(Ai=new K(new Xe(Xc),null,Qt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&ug(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ai}updatePriority(e){return this.children_.isEmpty()?this:new K(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ai:n}}getChild(e){const n=X(e);return n===null?this:this.getImmediateChild(n).getChild(_e(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new J(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Ai:this.priorityNode_;return new K(i,o,r)}}updateChild(e,n){const s=X(e);if(s===null)return n;{S(X(e)!==".priority"||Pn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(_e(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Ee,(o,a)=>{n[o]=a.val(e),s++,r&&K.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+cg(this.getPriority().val())+":"),this.forEachChild(Ee,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":M_(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new J(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new J(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new J(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,J.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,J.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Sr?-1:0}withIndex(e){if(e===Ys||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new K(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ys||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ee),i=n.getIterator(Ee);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ys?null:this.indexMap_.get(e.toString())}}K.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class KI extends K{constructor(){super(new Xe(Xc),K.EMPTY_NODE,Qt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return K.EMPTY_NODE}isEmpty(){return!1}}const Sr=new KI;Object.defineProperties(J,{MIN:{value:new J(ei,K.EMPTY_NODE)},MAX:{value:new J(ps,Sr)}});lg.__EMPTY_NODE=K.EMPTY_NODE;we.__childrenNodeConstructor=K;UI(Sr);HI(Sr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI=!0;function Oe(t,e=null){if(t===null)return K.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new we(n,Oe(e))}if(!(t instanceof Array)&&GI){const n=[];let s=!1;if(Ze(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Oe(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new J(o,l)))}}),n.length===0)return K.EMPTY_NODE;const r=ko(n,$I,o=>o.name,Xc);if(s){const o=ko(n,Ee.getCompare());return new K(r,Oe(e),new Qt({".priority":o},{".priority":Ee}))}else return new K(r,Oe(e),Qt.Default)}else{let n=K.EMPTY_NODE;return Ze(t,(s,i)=>{if(hn(t,s)&&s.substring(0,1)!=="."){const r=Oe(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Oe(e))}}VI(Oe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI extends da{constructor(e){super(),this.indexPath_=e,S(!ee(e)&&X(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?_i(e.name,n.name):r}makePost(e,n){const s=Oe(e),i=K.EMPTY_NODE.updateChild(this.indexPath_,s);return new J(n,i)}maxPost(){const e=K.EMPTY_NODE.updateChild(this.indexPath_,Sr);return new J(ps,e)}toString(){return rg(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI extends da{compare(e,n){const s=e.node.compareTo(n.node);return s===0?_i(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return J.MIN}maxPost(){return J.MAX}makePost(e,n){const s=Oe(e);return new J(n,s)}toString(){return".value"}}const YI=new zI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(t){return{type:"value",snapshotNode:t}}function ti(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ur(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function hr(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function QI(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ur(n,a)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ti(n,s)):o.trackChildChange(hr(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ee,(i,r)=>{n.hasChild(i)||s.trackChildChange(ur(i,r))}),n.isLeafNode()||n.forEachChild(Ee,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(hr(i,r,o))}else s.trackChildChange(ti(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?K.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e){this.indexedFilter_=new Jc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=dr.getStartPost_(e),this.endPost_=dr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new J(n,s))||(s=K.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=K.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(K.EMPTY_NODE);const r=this;return n.forEachChild(Ee,(o,a)=>{r.matches(new J(o,a))||(i=i.updateImmediateChild(o,K.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new dr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new J(n,s))||(s=K.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=K.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=K.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(K.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,K.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const a=e;S(a.numChildren()===this.limit_,"");const l=new J(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,l);if(u&&!s.isEmpty()&&_>=0)return r?.trackChildChange(hr(n,s,h)),a.updateImmediateChild(n,s);{r?.trackChildChange(ur(n,h));const v=a.updateImmediateChild(n,K.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r?.trackChildChange(ti(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(ur(c.name,c.node)),r.trackChildChange(ti(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,K.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ee}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ei}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ps}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ee}copy(){const e=new Zc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function JI(t){return t.loadsAllData()?new Jc(t.getIndex()):t.hasLimit()?new XI(t):new dr(t)}function bd(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ee?n="$priority":t.index_===YI?n="$value":t.index_===Ys?n="$key":(S(t.index_ instanceof qI,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ie(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ie(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ie(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ie(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ie(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Td(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ee&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do extends ng{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ir("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Do.getListenId_(e,s),a={};this.listens_[o]=a;const l=bd(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Js(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Do.getListenId_(e,n);delete this.listens_[s]}get(e){const n=bd(e._queryParams),s=e._path.toString(),i=new oa;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+di(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ir(a.responseText)}catch{Je("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Je("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(){this.rootNode_=K.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(){return{value:null,children:new Map}}function pg(t,e,n){if(ee(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=X(e);t.children.has(s)||t.children.set(s,xo());const i=t.children.get(s);e=_e(e),pg(i,e,n)}}function Gl(t,e,n){t.value!==null?n(e,t.value):eS(t,(s,i)=>{const r=new fe(e.toString()+"/"+s);Gl(i,r,n)})}function eS(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Ze(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd=10*1e3,nS=30*1e3,sS=300*1e3;class iS{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new tS(e);const s=wd+(nS-wd)*Math.random();Ki(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ze(e,(i,r)=>{r>0&&hn(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Ki(this.reportStats_.bind(this),Math.floor(Math.random()*2*sS))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(yt||(yt={}));function _g(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function eu(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function tu(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=yt.ACK_USER_WRITE,this.source=_g()}operationForChild(e){if(ee(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new fe(e));return new Lo(oe(),n,this.revert)}}else return S(X(this.path)===e,"operationForChild called for unrelated child."),new Lo(_e(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n){this.source=e,this.path=n,this.type=yt.LISTEN_COMPLETE}operationForChild(e){return ee(this.path)?new fr(this.source,oe()):new fr(this.source,_e(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=yt.OVERWRITE}operationForChild(e){return ee(this.path)?new _s(this.source,oe(),this.snap.getImmediateChild(e)):new _s(this.source,_e(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=yt.MERGE}operationForChild(e){if(ee(this.path)){const n=this.children.subtree(new fe(e));return n.isEmpty()?null:n.value?new _s(this.source,oe(),n.value):new pr(this.source,oe(),n)}else return S(X(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new pr(this.source,_e(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ee(e))return this.isFullyInitialized()&&!this.filtered_;const n=X(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function oS(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(QI(o.childName,o.snapshotNode))}),Ni(t,i,"child_removed",e,s,n),Ni(t,i,"child_added",e,s,n),Ni(t,i,"child_moved",r,s,n),Ni(t,i,"child_changed",e,s,n),Ni(t,i,"value",e,s,n),i}function Ni(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>lS(t,a,l)),o.forEach(a=>{const l=aS(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function aS(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function lS(t,e,n){if(e.childName==null||n.childName==null)throw ui("Should only compare child_ events.");const s=new J(e.childName,e.snapshotNode),i=new J(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(t,e){return{eventCache:t,serverCache:e}}function Gi(t,e,n,s){return fa(new gs(e,n,s),t.serverCache)}function gg(t,e,n,s){return fa(t.eventCache,new gs(e,n,s))}function ql(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ms(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tl;const cS=()=>(tl||(tl=new Xe(zC)),tl);class ge{static fromObject(e){let n=new ge(null);return Ze(e,(s,i)=>{n=n.set(new fe(s),i)}),n}constructor(e,n=cS()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:oe(),value:this.value};if(ee(e))return null;{const s=X(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(_e(e),n);return r!=null?{path:be(new fe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ee(e))return this;{const n=X(e),s=this.children.get(n);return s!==null?s.subtree(_e(e)):new ge(null)}}set(e,n){if(ee(e))return new ge(n,this.children);{const s=X(e),r=(this.children.get(s)||new ge(null)).set(_e(e),n),o=this.children.insert(s,r);return new ge(this.value,o)}}remove(e){if(ee(e))return this.children.isEmpty()?new ge(null):new ge(null,this.children);{const n=X(e),s=this.children.get(n);if(s){const i=s.remove(_e(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ge(null):new ge(this.value,r)}else return this}}get(e){if(ee(e))return this.value;{const n=X(e),s=this.children.get(n);return s?s.get(_e(e)):null}}setTree(e,n){if(ee(e))return n;{const s=X(e),r=(this.children.get(s)||new ge(null)).setTree(_e(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ge(this.value,o)}}fold(e){return this.fold_(oe(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(be(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,oe(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ee(e))return null;{const r=X(e),o=this.children.get(r);return o?o.findOnPath_(_e(e),be(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,oe(),n)}foreachOnPath_(e,n,s){if(ee(e))return this;{this.value&&s(n,this.value);const i=X(e),r=this.children.get(i);return r?r.foreachOnPath_(_e(e),be(n,i),s):new ge(null)}}foreach(e){this.foreach_(oe(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(be(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.writeTree_=e}static empty(){return new wt(new ge(null))}}function qi(t,e,n){if(ee(e))return new wt(new ge(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Qe(i,e);return r=r.updateChild(o,n),new wt(t.writeTree_.set(i,r))}else{const i=new ge(n),r=t.writeTree_.setTree(e,i);return new wt(r)}}}function Cd(t,e,n){let s=t;return Ze(n,(i,r)=>{s=qi(s,be(e,i),r)}),s}function Id(t,e){if(ee(e))return wt.empty();{const n=t.writeTree_.setTree(e,new ge(null));return new wt(n)}}function zl(t,e){return bs(t,e)!=null}function bs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Qe(n.path,e)):null}function Sd(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ee,(s,i)=>{e.push(new J(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new J(s,i.value))}),e}function On(t,e){if(ee(e))return t;{const n=bs(t,e);return n!=null?new wt(new ge(n)):new wt(t.writeTree_.subtree(e))}}function Yl(t){return t.writeTree_.isEmpty()}function ni(t,e){return mg(oe(),t.writeTree_,e)}function mg(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(S(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=mg(be(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(be(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(t,e){return bg(e,t)}function uS(t,e,n,s,i){S(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=qi(t.visibleWrites,e,n)),t.lastWriteId=s}function hS(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function dS(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&fS(a,s.path)?i=!1:Et(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return pS(t),!0;if(s.snap)t.visibleWrites=Id(t.visibleWrites,s.path);else{const a=s.children;Ze(a,l=>{t.visibleWrites=Id(t.visibleWrites,be(s.path,l))})}return!0}else return!1}function fS(t,e){if(t.snap)return Et(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Et(be(t.path,n),e))return!0;return!1}function pS(t){t.visibleWrites=vg(t.allWrites,_S,oe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function _S(t){return t.visible}function vg(t,e,n){let s=wt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Et(n,o)?(a=Qe(n,o),s=qi(s,a,r.snap)):Et(o,n)&&(a=Qe(o,n),s=qi(s,oe(),r.snap.getChild(a)));else if(r.children){if(Et(n,o))a=Qe(n,o),s=Cd(s,a,r.children);else if(Et(o,n))if(a=Qe(o,n),ee(a))s=Cd(s,oe(),r.children);else{const l=Js(r.children,X(a));if(l){const c=l.getChild(_e(a));s=qi(s,oe(),c)}}}else throw ui("WriteRecord should have .snap or .children")}}return s}function Eg(t,e,n,s,i){if(!s&&!i){const r=bs(t.visibleWrites,e);if(r!=null)return r;{const o=On(t.visibleWrites,e);if(Yl(o))return n;if(n==null&&!zl(o,oe()))return null;{const a=n||K.EMPTY_NODE;return ni(o,a)}}}else{const r=On(t.visibleWrites,e);if(!i&&Yl(r))return n;if(!i&&n==null&&!zl(r,oe()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Et(c.path,e)||Et(e,c.path))},a=vg(t.allWrites,o,e),l=n||K.EMPTY_NODE;return ni(a,l)}}}function gS(t,e,n){let s=K.EMPTY_NODE;const i=bs(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ee,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=On(t.visibleWrites,e);return n.forEachChild(Ee,(o,a)=>{const l=ni(On(r,new fe(o)),a);s=s.updateImmediateChild(o,l)}),Sd(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=On(t.visibleWrites,e);return Sd(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function mS(t,e,n,s,i){S(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=be(e,n);if(zl(t.visibleWrites,r))return null;{const o=On(t.visibleWrites,r);return Yl(o)?i.getChild(n):ni(o,i.getChild(n))}}function vS(t,e,n,s){const i=be(e,n),r=bs(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=On(t.visibleWrites,i);return ni(o,s.getNode().getImmediateChild(n))}else return null}function ES(t,e){return bs(t.visibleWrites,e)}function yS(t,e,n,s,i,r,o){let a;const l=On(t.visibleWrites,e),c=bs(l,oe());if(c!=null)a=c;else if(n!=null)a=ni(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function bS(){return{visibleWrites:wt.empty(),allWrites:[],lastWriteId:-1}}function Mo(t,e,n,s){return Eg(t.writeTree,t.treePath,e,n,s)}function su(t,e){return gS(t.writeTree,t.treePath,e)}function Ad(t,e,n,s){return mS(t.writeTree,t.treePath,e,n,s)}function Fo(t,e){return ES(t.writeTree,be(t.treePath,e))}function TS(t,e,n,s,i,r){return yS(t.writeTree,t.treePath,e,n,s,i,r)}function iu(t,e,n){return vS(t.writeTree,t.treePath,e,n)}function yg(t,e){return bg(be(t.treePath,e),t.writeTree)}function bg(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,hr(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ur(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,ti(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,hr(s,e.snapshotNode,i.oldSnap));else throw ui("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Tg=new CS;class ru{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new gs(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return iu(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ms(this.viewCache_),r=TS(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IS(t){return{filter:t}}function SS(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function AS(t,e,n,s,i){const r=new wS;let o,a;if(n.type===yt.OVERWRITE){const c=n;c.source.fromUser?o=Ql(t,e,c.path,c.snap,s,i,r):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ee(c.path),o=$o(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===yt.MERGE){const c=n;c.source.fromUser?o=OS(t,e,c.path,c.children,s,i,r):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Xl(t,e,c.path,c.children,s,i,a,r))}else if(n.type===yt.ACK_USER_WRITE){const c=n;c.revert?o=kS(t,e,c.path,s,i,r):o=RS(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===yt.LISTEN_COMPLETE)o=PS(t,e,n.path,s,r);else throw ui("Unknown operation type: "+n.type);const l=r.getChanges();return NS(e,o,l),{viewCache:o,changes:l}}function NS(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ql(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(fg(ql(e)))}}function wg(t,e,n,s,i,r){const o=e.eventCache;if(Fo(s,n)!=null)return e;{let a,l;if(ee(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ms(e),u=c instanceof K?c:K.EMPTY_NODE,h=su(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Mo(s,ms(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=X(n);if(c===".priority"){S(Pn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Ad(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=_e(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Ad(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=iu(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Gi(e,a,o.isFullyInitialized()||ee(n),t.filter.filtersNodes())}}function $o(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ee(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),_,null)}else{const _=X(n);if(!l.isCompleteForPath(n)&&Pn(n)>1)return e;const g=_e(n),N=l.getNode().getImmediateChild(_).updateChild(g,s);_===".priority"?c=u.updatePriority(l.getNode(),N):c=u.updateChild(l.getNode(),_,N,g,Tg,null)}const h=gg(e,c,l.isFullyInitialized()||ee(n),u.filtersNodes()),d=new ru(i,h,r);return wg(t,h,n,i,d,a)}function Ql(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new ru(i,e,r);if(ee(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Gi(e,c,!0,t.filter.filtersNodes());else{const h=X(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Gi(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=_e(n),_=a.getNode().getImmediateChild(h);let g;if(ee(d))g=s;else{const v=u.getCompleteChild(h);v!=null?ig(d)===".priority"&&v.getChild(og(d)).isEmpty()?g=v:g=v.updateChild(d,s):g=K.EMPTY_NODE}if(_.equals(g))l=e;else{const v=t.filter.updateChild(a.getNode(),h,g,d,u,o);l=Gi(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Nd(t,e){return t.eventCache.isCompleteForChild(e)}function OS(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=be(n,l);Nd(e,X(u))&&(a=Ql(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=be(n,l);Nd(e,X(u))||(a=Ql(t,a,u,c,i,r,o))}),a}function Od(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Xl(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ee(n)?c=s:c=new ge(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),g=Od(t,_,d);l=$o(t,l,new fe(h),g,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const g=e.serverCache.getNode().getImmediateChild(h),v=Od(t,g,d);l=$o(t,l,new fe(h),v,i,r,o,a)}}),l}function RS(t,e,n,s,i,r,o){if(Fo(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(ee(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return $o(t,e,n,l.getNode().getChild(n),i,r,a,o);if(ee(n)){let c=new ge(null);return l.getNode().forEachChild(Ys,(u,h)=>{c=c.set(new fe(u),h)}),Xl(t,e,n,c,i,r,a,o)}else return e}else{let c=new ge(null);return s.foreach((u,h)=>{const d=be(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Xl(t,e,n,c,i,r,a,o)}}function PS(t,e,n,s,i){const r=e.serverCache,o=gg(e,r.getNode(),r.isFullyInitialized()||ee(n),r.isFiltered());return wg(t,o,n,s,Tg,i)}function kS(t,e,n,s,i,r){let o;if(Fo(s,n)!=null)return e;{const a=new ru(s,e,i),l=e.eventCache.getNode();let c;if(ee(n)||X(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Mo(s,ms(e));else{const h=e.serverCache.getNode();S(h instanceof K,"serverChildren would be complete if leaf node"),u=su(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=X(n);let h=iu(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,_e(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,K.EMPTY_NODE,_e(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Mo(s,ms(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Fo(s,oe())!=null,Gi(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Jc(s.getIndex()),r=JI(s);this.processor_=IS(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(K.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(K.EMPTY_NODE,a.getNode(),null),u=new gs(l,o.isFullyInitialized(),i.filtersNodes()),h=new gs(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=fa(h,u),this.eventGenerator_=new rS(this.query_)}get query(){return this.query_}}function xS(t){return t.viewCache_.serverCache.getNode()}function LS(t,e){const n=ms(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ee(e)&&!n.getImmediateChild(X(e)).isEmpty())?n.getChild(e):null}function Rd(t){return t.eventRegistrations_.length===0}function MS(t,e){t.eventRegistrations_.push(e)}function Pd(t,e,n){const s=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function kd(t,e,n,s){e.type===yt.MERGE&&e.source.queryId!==null&&(S(ms(t.viewCache_),"We should always have a full cache before handling merges"),S(ql(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=AS(t.processor_,i,e,n,s);return SS(t.processor_,r.viewCache),S(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Cg(t,r.changes,r.viewCache.eventCache.getNode(),null)}function FS(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ee,(r,o)=>{s.push(ti(r,o))}),n.isFullyInitialized()&&s.push(fg(n.getNode())),Cg(t,s,n.getNode(),e)}function Cg(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return oS(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo;class $S{constructor(){this.views=new Map}}function US(t){S(!Uo,"__referenceConstructor has already been defined"),Uo=t}function VS(){return S(Uo,"Reference.ts has not been loaded"),Uo}function HS(t){return t.views.size===0}function ou(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return S(r!=null,"SyncTree gave us an op for an invalid query."),kd(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(kd(o,e,n,s));return r}}function WS(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Mo(n,i?s:null),l=!1;a?l=!0:s instanceof K?(a=su(n,s),l=!1):(a=K.EMPTY_NODE,l=!1);const c=fa(new gs(a,l,!1),new gs(s,i,!1));return new DS(e,c)}return o}function BS(t,e,n,s,i,r){const o=WS(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),MS(o,n),FS(o,n)}function jS(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=kn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Pd(c,n,s)),Rd(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Pd(l,n,s)),Rd(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!kn(t)&&r.push(new(VS())(e._repo,e._path)),{removed:r,events:o}}function Ig(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Qs(t,e){let n=null;for(const s of t.views.values())n=n||LS(s,e);return n}function Sg(t,e){if(e._queryParams.loadsAllData())return pa(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Ag(t,e){return Sg(t,e)!=null}function kn(t){return pa(t)!=null}function pa(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vo;function KS(t){S(!Vo,"__referenceConstructor has already been defined"),Vo=t}function GS(){return S(Vo,"Reference.ts has not been loaded"),Vo}let qS=1;class Dd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ge(null),this.pendingWriteTree_=bS(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ng(t,e,n,s,i){return uS(t.pendingWriteTree_,e,n,s,i),i?Ar(t,new _s(_g(),e,n)):[]}function ns(t,e,n=!1){const s=hS(t.pendingWriteTree_,e);if(dS(t.pendingWriteTree_,e)){let r=new ge(null);return s.snap!=null?r=r.set(oe(),!0):Ze(s.children,o=>{r=r.set(new fe(o),!0)}),Ar(t,new Lo(s.path,r,n))}else return[]}function _a(t,e,n){return Ar(t,new _s(eu(),e,n))}function zS(t,e,n){const s=ge.fromObject(n);return Ar(t,new pr(eu(),e,s))}function YS(t,e){return Ar(t,new fr(eu(),e))}function QS(t,e,n){const s=lu(t,n);if(s){const i=cu(s),r=i.path,o=i.queryId,a=Qe(r,e),l=new fr(tu(o),a);return uu(t,r,l)}else return[]}function Jl(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Ag(o,e))){const l=jS(o,e,n,s);HS(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,_)=>kn(_));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=ZS(d);for(let g=0;g<_.length;++g){const v=_[g],N=v.query,k=Pg(t,v);t.listenProvider_.startListening(zi(N),Ho(t,N),k.hashFn,k.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(zi(e),null):c.forEach(d=>{const _=t.queryToTagMap.get(ga(d));t.listenProvider_.stopListening(zi(d),_)}))}eA(t,c)}return a}function XS(t,e,n,s){const i=lu(t,s);if(i!=null){const r=cu(i),o=r.path,a=r.queryId,l=Qe(o,e),c=new _s(tu(a),l,n);return uu(t,o,c)}else return[]}function JS(t,e,n,s){const i=lu(t,s);if(i){const r=cu(i),o=r.path,a=r.queryId,l=Qe(o,e),c=ge.fromObject(n),u=new pr(tu(a),l,c);return uu(t,o,u)}else return[]}function xd(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const g=Qe(d,i);r=r||Qs(_,g),o=o||kn(_)});let a=t.syncPointTree_.get(i);a?(o=o||kn(a),r=r||Qs(a,oe())):(a=new $S,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=K.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,g)=>{const v=Qs(g,oe());v&&(r=r.updateImmediateChild(_,v))}));const c=Ag(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=ga(e);S(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=tA();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const u=nu(t.pendingWriteTree_,i);let h=BS(a,e,n,u,r,l);if(!c&&!o&&!s){const d=Sg(a,e);h=h.concat(nA(t,e,d))}return h}function au(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Qe(o,e),c=Qs(a,l);if(c)return c});return Eg(i,e,r,n,!0)}function Ar(t,e){return Og(e,t.syncPointTree_,null,nu(t.pendingWriteTree_,oe()))}function Og(t,e,n,s){if(ee(t.path))return Rg(t,e,n,s);{const i=e.get(oe());n==null&&i!=null&&(n=Qs(i,oe()));let r=[];const o=X(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=yg(s,o);r=r.concat(Og(a,l,c,u))}return i&&(r=r.concat(ou(i,t,s,n))),r}}function Rg(t,e,n,s){const i=e.get(oe());n==null&&i!=null&&(n=Qs(i,oe()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=yg(s,o),u=t.operationForChild(o);u&&(r=r.concat(Rg(u,a,l,c)))}),i&&(r=r.concat(ou(i,t,s,n))),r}function Pg(t,e){const n=e.query,s=Ho(t,n);return{hashFn:()=>(xS(e)||K.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?QS(t,n._path,s):YS(t,n._path);{const r=XC(i,n);return Jl(t,n,null,r)}}}}function Ho(t,e){const n=ga(e);return t.queryToTagMap.get(n)}function ga(t){return t._path.toString()+"$"+t._queryIdentifier}function lu(t,e){return t.tagToQueryMap.get(e)}function cu(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new fe(t.substr(0,e))}}function uu(t,e,n){const s=t.syncPointTree_.get(e);S(s,"Missing sync point for query tag that we're tracking");const i=nu(t.pendingWriteTree_,e);return ou(s,n,i,null)}function ZS(t){return t.fold((e,n,s)=>{if(n&&kn(n))return[pa(n)];{let i=[];return n&&(i=Ig(n)),Ze(s,(r,o)=>{i=i.concat(o)}),i}})}function zi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(GS())(t._repo,t._path):t}function eA(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=ga(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function tA(){return qS++}function nA(t,e,n){const s=e._path,i=Ho(t,e),r=Pg(t,n),o=t.listenProvider_.startListening(zi(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)S(!kn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!ee(c)&&u&&kn(u))return[pa(u).query];{let d=[];return u&&(d=d.concat(Ig(u).map(_=>_.query))),Ze(h,(_,g)=>{d=d.concat(g)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(zi(u),Ho(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new hu(n)}node(){return this.node_}}class du{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=be(this.path_,e);return new du(this.syncTree_,n)}node(){return au(this.syncTree_,this.path_)}}const sA=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ld=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return iA(t[".sv"],e,n);if(typeof t[".sv"]=="object")return rA(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},iA=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},rA=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&S(!1,"Unexpected increment value: "+s);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},oA=function(t,e,n,s){return fu(e,new du(n,t),s)},kg=function(t,e,n){return fu(t,new hu(e),n)};function fu(t,e,n){const s=t.getPriority().val(),i=Ld(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Ld(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new we(a,Oe(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new we(i))),o.forEachChild(Ee,(a,l)=>{const c=fu(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function _u(t,e){let n=e instanceof fe?e:new fe(e),s=t,i=X(n);for(;i!==null;){const r=Js(s.node.children,i)||{children:{},childCount:0};s=new pu(i,s,r),n=_e(n),i=X(n)}return s}function mi(t){return t.node.value}function Dg(t,e){t.node.value=e,Zl(t)}function xg(t){return t.node.childCount>0}function aA(t){return mi(t)===void 0&&!xg(t)}function ma(t,e){Ze(t.node.children,(n,s)=>{e(new pu(n,t,s))})}function Lg(t,e,n,s){n&&e(t),ma(t,i=>{Lg(i,e,!0)})}function lA(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Nr(t){return new fe(t.parent===null?t.name:Nr(t.parent)+"/"+t.name)}function Zl(t){t.parent!==null&&cA(t.parent,t.name,t)}function cA(t,e,n){const s=aA(n),i=hn(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Zl(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Zl(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA=/[\[\].#$\/\u0000-\u001F\u007F]/,hA=/[\[\].#$\u0000-\u001F\u007F]/,nl=10*1024*1024,Mg=function(t){return typeof t=="string"&&t.length!==0&&!uA.test(t)},Fg=function(t){return typeof t=="string"&&t.length!==0&&!hA.test(t)},dA=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Fg(t)},fA=function(t,e,n,s){gu(kc(t,"value"),e,n)},gu=function(t,e,n){const s=n instanceof fe?new RI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Xn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Xn(s)+" with contents = "+e.toString());if(F_(e))throw new Error(t+"contains "+e.toString()+" "+Xn(s));if(typeof e=="string"&&e.length>nl/3&&aa(e)>nl)throw new Error(t+"contains a string greater than "+nl+" utf8 bytes "+Xn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ze(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Mg(o)))throw new Error(t+" contains an invalid key ("+o+") "+Xn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);PI(s,o),gu(t,a,s),kI(s)}),i&&r)throw new Error(t+' contains ".value" child '+Xn(s)+" in addition to actual children.")}},$g=function(t,e,n,s){if(!Fg(n))throw new Error(kc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},pA=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),$g(t,e,n)},Ug=function(t,e){if(X(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},_A=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Mg(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!dA(n))throw new Error(kc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function mu(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Yc(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Vg(t,e,n){mu(t,n),Hg(t,s=>Yc(s,e))}function ln(t,e,n){mu(t,n),Hg(t,s=>Et(s,e)||Et(e,s))}function Hg(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(mA(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function mA(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();ji&&De("event: "+n.toString()),gi(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA="repo_interrupt",EA=25;class yA{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new gA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=xo(),this.transactionQueueTree_=new pu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function bA(t,e,n){if(t.stats_=qc(t.repoInfo_),t.forceRestClient_||tI())t.server_=new Do(t.repoInfo_,(s,i,r,o)=>{Md(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Fd(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ie(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Jt(t.repoInfo_,e,(s,i,r,o)=>{Md(t,s,i,r,o)},s=>{Fd(t,s)},s=>{wA(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=oI(t.repoInfo_,()=>new iS(t.stats_,t.server_)),t.infoData_=new ZI,t.infoSyncTree_=new Dd({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=_a(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Eu(t,"connected",!1),t.serverSyncTree_=new Dd({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);ln(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function TA(t){const n=t.infoData_.getNode(new fe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function vu(t){return sA({timestamp:TA(t)})}function Md(t,e,n,s,i){t.dataUpdateCount++;const r=new fe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=wo(n,c=>Oe(c));o=JS(t.serverSyncTree_,r,l,i)}else{const l=Oe(n);o=XS(t.serverSyncTree_,r,l,i)}else if(s){const l=wo(n,c=>Oe(c));o=zS(t.serverSyncTree_,r,l)}else{const l=Oe(n);o=_a(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=va(t,r)),ln(t.eventQueue_,a,o)}function Fd(t,e){Eu(t,"connected",e),e===!1&&IA(t)}function wA(t,e){Ze(e,(n,s)=>{Eu(t,n,s)})}function Eu(t,e,n){const s=new fe("/.info/"+e),i=Oe(n);t.infoData_.updateSnapshot(s,i);const r=_a(t.infoSyncTree_,s,i);ln(t.eventQueue_,s,r)}function Wg(t){return t.nextWriteId_++}function CA(t,e,n,s,i){yu(t,"set",{path:e.toString(),value:n,priority:s});const r=vu(t),o=Oe(n,s),a=au(t.serverSyncTree_,e),l=kg(o,a,r),c=Wg(t),u=Ng(t.serverSyncTree_,e,l,c,!0);mu(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const g=d==="ok";g||Je("set at "+e+" failed: "+d);const v=ns(t.serverSyncTree_,c,!g);ln(t.eventQueue_,e,v),NA(t,i,d,_)});const h=qg(t,e);va(t,h),ln(t.eventQueue_,h,[])}function IA(t){yu(t,"onDisconnectEvents");const e=vu(t),n=xo();Gl(t.onDisconnect_,oe(),(i,r)=>{const o=oA(i,r,t.serverSyncTree_,e);pg(n,i,o)});let s=[];Gl(n,oe(),(i,r)=>{s=s.concat(_a(t.serverSyncTree_,i,r));const o=qg(t,i);va(t,o)}),t.onDisconnect_=xo(),ln(t.eventQueue_,oe(),s)}function SA(t,e,n){let s;X(e._path)===".info"?s=xd(t.infoSyncTree_,e,n):s=xd(t.serverSyncTree_,e,n),Vg(t.eventQueue_,e._path,s)}function ec(t,e,n){let s;X(e._path)===".info"?s=Jl(t.infoSyncTree_,e,n):s=Jl(t.serverSyncTree_,e,n),Vg(t.eventQueue_,e._path,s)}function AA(t){t.persistentConnection_&&t.persistentConnection_.interrupt(vA)}function yu(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),De(n,...e)}function NA(t,e,n,s){e&&gi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Bg(t,e,n){return au(t.serverSyncTree_,e,n)||K.EMPTY_NODE}function bu(t,e=t.transactionQueueTree_){if(e||Ea(t,e),mi(e)){const n=Kg(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&OA(t,Nr(e),n)}else xg(e)&&ma(e,n=>{bu(t,n)})}function OA(t,e,n){const s=n.map(c=>c.currentWriteId),i=Bg(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];S(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Qe(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{yu(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(ns(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Ea(t,_u(t.transactionQueueTree_,e)),bu(t,t.transactionQueueTree_),ln(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)gi(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Je("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}va(t,e)}},o)}function va(t,e){const n=jg(t,e),s=Nr(n),i=Kg(t,n);return RA(t,i,s),s}function RA(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Qe(n,l.path);let u=!1,h;if(S(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(ns(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=EA)u=!0,h="maxretry",i=i.concat(ns(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Bg(t,l.path,o);l.currentInputSnapshot=d;const _=e[a].update(d.val());if(_!==void 0){gu("transaction failed: Data returned ",_,l.path);let g=Oe(_);typeof _=="object"&&_!=null&&hn(_,".priority")||(g=g.updatePriority(d.getPriority()));const N=l.currentWriteId,k=vu(t),x=kg(g,d,k);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=x,l.currentWriteId=Wg(t),o.splice(o.indexOf(N),1),i=i.concat(Ng(t.serverSyncTree_,l.path,x,l.currentWriteId,l.applyLocally)),i=i.concat(ns(t.serverSyncTree_,N,!0))}else u=!0,h="nodata",i=i.concat(ns(t.serverSyncTree_,l.currentWriteId,!0))}ln(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Ea(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)gi(s[a]);bu(t,t.transactionQueueTree_)}function jg(t,e){let n,s=t.transactionQueueTree_;for(n=X(e);n!==null&&mi(s)===void 0;)s=_u(s,n),e=_e(e),n=X(e);return s}function Kg(t,e){const n=[];return Gg(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Gg(t,e,n){const s=mi(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);ma(e,i=>{Gg(t,i,n)})}function Ea(t,e){const n=mi(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Dg(e,n.length>0?n:void 0)}ma(e,s=>{Ea(t,s)})}function qg(t,e){const n=Nr(jg(t,e)),s=_u(t.transactionQueueTree_,e);return lA(s,i=>{sl(t,i)}),sl(t,s),Lg(s,i=>{sl(t,i)}),n}function sl(t,e){const n=mi(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ns(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Dg(e,void 0):n.length=r+1,ln(t.eventQueue_,Nr(e),i);for(let o=0;o<s.length;o++)gi(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PA(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function kA(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Je(`Invalid query segment '${n}' in query '${t}'`)}return e}const $d=function(t,e){const n=DA(t),s=n.namespace;n.domain==="firebase.com"&&an(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&an("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||GC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Y_(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new fe(n.pathString)}},DA=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=PA(t.substring(u,h)));const d=kA(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ie(this.snapshot.exportVal())}}class LA{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ee(this._path)?null:ig(this._path)}get ref(){return new Vn(this._repo,this._path)}get _queryIdentifier(){const e=Td(this._queryParams),n=Kc(e);return n==="{}"?"default":n}get _queryObject(){return Td(this._queryParams)}isEqual(e){if(e=et(e),!(e instanceof Tu))return!1;const n=this._repo===e._repo,s=Yc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+OI(this._path)}}class Vn extends Tu{constructor(e,n){super(e,n,new Zc,!1)}get parent(){const e=og(this._path);return e===null?null:new Vn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Wo{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new fe(e),s=tc(this.ref,e);return new Wo(this._node.getChild(n),s,Ee)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Wo(i,tc(this.ref,s),Ee)))}hasChild(e){const n=new fe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Oi(t,e){return t=et(t),t._checkNotDeleted("ref"),e!==void 0?tc(t._root,e):t._root}function tc(t,e){return t=et(t),X(t._path)===null?pA("child","path",e):$g("child","path",e),new Vn(t._repo,be(t._path,e))}function FA(t){return Ug("remove",t._path),nc(t,null)}function nc(t,e){t=et(t),Ug("set",t._path),fA("set",e,t._path);const n=new oa;return CA(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class wu{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new xA("value",this,new Wo(e.snapshotNode,new Vn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new LA(this,e,n):null}matches(e){return e instanceof wu?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function $A(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=n,c=(u,h)=>{ec(t._repo,t,a),l(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new MA(n,r||void 0),a=new wu(o);return SA(t._repo,t,a),()=>ec(t._repo,t,a)}function UA(t,e,n,s){return $A(t,"value",e,n,s)}function VA(t,e,n){ec(t._repo,t,null)}US(Vn);KS(Vn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA="FIREBASE_DATABASE_EMULATOR_HOST",sc={};let WA=!1;function BA(t,e,n,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=hi(r);t.repoInfo_=new Y_(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function jA(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||an("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),De("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=$d(r,i),a=o.repoInfo,l;typeof process<"u"&&id&&(l=id[HA]),l?(r=`http://${l}?ns=${a.namespace}`,o=$d(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new sI(t.name,t.options,e);_A("Invalid Firebase Database URL",o),ee(o.path)||an("Database URL must point to the root of a Firebase Database (not including a child path).");const u=GA(a,t,c,new nI(t,n));return new qA(u,t)}function KA(t,e){const n=sc[e];(!n||n[t.key]!==t)&&an(`Database ${e}(${t.repoInfo_}) has already been deleted.`),AA(t),delete n[t.key]}function GA(t,e,n,s){let i=sc[e.name];i||(i={},sc[e.name]=i);let r=i[t.toURLString()];return r&&an("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new yA(t,WA,n,s),i[t.toURLString()]=r,r}class qA{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(bA(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Vn(this._repo,oe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(KA(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&an("Cannot call "+e+" on a deleted database.")}}function zA(t=Mc(),e){const n=Lc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Vy("database");s&&YA(n,...s)}return n}function YA(t,e,n,s={}){t=et(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&us(s,r.repoInfo_.emulatorOptions))return;an("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&an('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new so(so.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:Hy(s.mockUserToken,t.app.options.projectId);o=new so(a)}hi(e)&&(Kp(e),Gp("Database",!0)),BA(r,i,s,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(t){VC(fi),Zs(new hs("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return jA(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Nn(rd,od,t),Nn(rd,od,"esm2020")}Jt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Jt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};QA();var XA="firebase",JA="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nn(XA,JA,"app");const ZA={apiKey:"AIzaSyCcQyIgIZuiHAqrC8KO1NgyQBdCrpyZw-o",authDomain:"todo-6b22d.firebaseapp.com",databaseURL:"https://todo-6b22d-default-rtdb.firebaseio.com",projectId:"todo-6b22d",storageBucket:"todo-6b22d.firebasestorage.app",messagingSenderId:"162634566882",appId:"1:162634566882:web:fb5379430e74ac5233a2bb",measurementId:"G-E2GCZF7V41"},zg=iT().length?Mc():Xp(ZA),eN=bn(zg),Rs=zA(zg),tN={name:"TaskItem",props:{todo:{type:Object,required:!0}},methods:{formatDate(t){return new Date(t).toLocaleDateString()},daysLeft(t){const e=new Date,s=new Date(t)-e;return Math.max(Math.ceil(s/(1e3*60*60*24)),0)},isExpired(t){return!t||this.todo.completed?!1:new Date(t)<new Date},completeTodo(){const t={...this.todo,completed:!0,completedAt:new Date().toISOString()};this.$emit("update",t)},emitCompletionChange(){const t={...this.todo,completed:!this.todo.completed};this.$emit("update",t)}}},nN={class:"task-content"},sN=["checked"],iN={class:"task-text"},rN={key:0,class:"badge bg-secondary"},oN={key:1,class:"task-deadline"},aN={key:0,class:"ms-2 text-muted small"},lN={class:"task-actions"},cN=["disabled"];function uN(t,e,n,s,i,r){return ve(),Te("div",{class:tn(["task-item",{"task-completed":n.todo.completed,"task-expired":r.isExpired(n.todo.deadline)}])},[P("div",nN,[P("input",{type:"checkbox",class:"form-check-input",checked:n.todo.completed,onChange:e[0]||(e[0]=(...o)=>r.emitCompletionChange&&r.emitCompletionChange(...o))},null,40,sN),P("span",iN,Me(n.todo.text),1),n.todo.category?(ve(),Te("span",rN,Me(n.todo.category),1)):Bs("",!0),n.todo.deadline?(ve(),Te("span",oN,[e[3]||(e[3]=P("i",{class:"bi bi-calendar me-1"},null,-1)),P("span",{class:tn({"text-danger":r.isExpired(n.todo.deadline)})},Me(r.formatDate(n.todo.deadline)),3),n.todo.completed?Bs("",!0):(ve(),Te("span",aN," ⏰ Осталось: "+Me(r.daysLeft(n.todo.deadline))+" дн. ",1))])):Bs("",!0)]),P("div",lN,[P("button",{onClick:e[1]||(e[1]=(...o)=>r.completeTodo&&r.completeTodo(...o)),class:"btn btn-sm btn-success complete-btn",title:"Завершить задачу",disabled:n.todo.completed},e[4]||(e[4]=[P("i",{class:"bi bi-check-circle"},null,-1)]),8,cN),P("button",{onClick:e[2]||(e[2]=o=>t.$emit("delete",n.todo.id)),class:"btn btn-sm btn-danger",title:"Удалить задачу"},e[5]||(e[5]=[P("i",{class:"bi bi-trash"},null,-1)]))])],2)}const hN=ha(tN,[["render",uN],["__scopeId","data-v-e84d76ea"]]),dN={components:{TodoItem:hN},props:{darkMode:Boolean},data(){return{newTodoText:"",newTodoCategory:"",newTodoDeadline:"",categories:["Работа","Учеба","Личное","Другое"],filterStatus:"all",filterCategory:"",todos:[],loading:!0,addError:null,connectionError:null,isOnline:navigator.onLine,retryCount:0}},computed:{activeTodosCount(){return this.todos.filter(t=>!t.completed).length},completedTodosCount(){return this.todos.filter(t=>t.completed).length},filteredTodos(){return this.todos.filter(t=>{const e=this.filterStatus==="all"||this.filterStatus==="active"&&!t.completed||this.filterStatus==="completed"&&t.completed,n=!this.filterCategory||t.category===this.filterCategory;return e&&n})}},mounted(){window.addEventListener("online",this.handleNetworkChange),window.addEventListener("offline",this.handleNetworkChange),this.loadTodos()},beforeUnmount(){window.removeEventListener("online",this.handleNetworkChange),window.removeEventListener("offline",this.handleNetworkChange),this.removeListeners()},methods:{handleNetworkChange(){this.isOnline=navigator.onLine,this.isOnline?this.loadTodos():this.connectionError="Оффлайн режим. Проверьте подключение к интернету"},removeListeners(){const e=bn().currentUser;if(e){const n=Oi(Rs,`users/${e.uid}/todos`);VA(n)}},async loadTodos(){if(!this.isOnline){this.connectionError="Оффлайн режим. Проверьте подключение к интернету";return}try{this.loading=!0,this.connectionError=null;const e=bn().currentUser;if(!e)throw new Error("Требуется авторизация");this.removeListeners();const n=Oi(Rs,`users/${e.uid}/todos`);UA(n,s=>{this.connectionError=null,this.retryCount=0;const i=s.val();this.todos=i?Object.keys(i).map(r=>({id:r,...i[r]})):[],this.loading=!1},s=>{this.handleConnectionError(s)})}catch(t){this.handleConnectionError(t)}},handleConnectionError(t){console.error("Ошибка соединения:",t),this.loading=!1,this.connectionError=this.getErrorMessage(t),this.retryCount<3&&(this.retryCount++,setTimeout(()=>{this.loadTodos()},5e3))},getErrorMessage(t){return t.message.includes("PERMISSION_DENIED")?"Ошибка доступа. Проверьте авторизацию":t.message.includes("WebSocket")?"Проблема с подключением к серверу":t.message},async addTodo(){if(this.addError=null,!this.newTodoText.trim()){this.addError="Введите текст задачи";return}try{const e=bn().currentUser;if(!e)throw new Error("Требуется авторизация");const n=Oi(Rs,`users/${e.uid}/todos/${Date.now()}`),s={text:this.newTodoText.trim(),completed:!1,createdAt:new Date().toISOString(),...this.newTodoCategory&&{category:this.newTodoCategory},...this.newTodoDeadline&&{deadline:this.newTodoDeadline}};await nc(n,s),this.newTodoText="",this.newTodoCategory="",this.newTodoDeadline=""}catch(t){console.error("Ошибка добавления задачи:",t),this.addError=this.getErrorMessage(t)}},async updateTodo(t){try{const n=bn().currentUser;if(!n)throw new Error("Требуется авторизация");const s=Oi(Rs,`users/${n.uid}/todos/${t.id}`);await nc(s,t)}catch(e){console.error("Ошибка обновления задачи:",e)}},async deleteTodo(t){try{const n=bn().currentUser;if(!n)throw new Error("Требуется авторизация");const s=Oi(Rs,`users/${n.uid}/todos/${t}`);await FA(s)}catch(e){console.error("Ошибка удаления задачи:",e)}},resetFilters(){this.filterStatus="all",this.filterCategory=""},async logout(){try{await mw(bn())}catch(t){console.error("Ошибка выхода:",t)}},toggleDarkMode(){this.$emit("toggle-dark-mode")}}},fN={key:0,class:"connection-alert"},pN={class:"alert alert-warning d-flex align-items-center mb-0"},_N={class:"todo-app"},gN={class:"app-header"},mN={class:"app-controls"},vN={class:"stats"},EN={class:"badge bg-primary"},yN={class:"badge bg-success"},bN={class:"actions"},TN=["title"],wN={class:"add-task-card card"},CN={class:"card-body"},IN={class:"add-task-form"},SN=["value"],AN=["disabled"],NN={key:0,class:"text-danger mt-2 small"},ON={class:"filters"},RN={class:"filter-group"},PN={class:"filter-group"},kN=["value"],DN={class:"tasks-container"},xN={key:0,class:"loading-state"},LN={key:1,class:"tasks-list"},MN={key:2,class:"empty-state"};function FN(t,e,n,s,i,r){const o=Il("TodoItem");return ve(),Te("div",{class:tn(["app-container",{"dark-mode":n.darkMode}])},[Se(Nc,{name:"fade"},{default:er(()=>[i.connectionError?(ve(),Te("div",fN,[P("div",pN,[e[11]||(e[11]=P("i",{class:"bi bi-wifi-off me-2"},null,-1)),P("div",null,Me(i.connectionError),1),P("button",{onClick:e[0]||(e[0]=(...a)=>r.loadTodos&&r.loadTodos(...a)),class:"btn btn-sm btn-outline-primary ms-auto"}," Повторить ")])])):Bs("",!0)]),_:1}),P("div",_N,[P("div",gN,[e[13]||(e[13]=P("h1",{class:"app-title"},[P("i",{class:"bi bi-check2-circle"}),Ws(" Мои задачи ")],-1)),P("div",mN,[P("div",vN,[P("span",EN,Me(r.activeTodosCount)+" активных",1),P("span",yN,Me(r.completedTodosCount)+" завершено",1)]),P("div",bN,[P("button",{onClick:e[1]||(e[1]=(...a)=>r.toggleDarkMode&&r.toggleDarkMode(...a)),class:"btn btn-sm btn-icon",title:n.darkMode?"Светлая тема":"Тёмная тема"},[P("i",{class:tn(["bi",n.darkMode?"bi-sun":"bi-moon"])},null,2)],8,TN),P("button",{onClick:e[2]||(e[2]=(...a)=>r.logout&&r.logout(...a)),class:"btn btn-sm btn-icon btn-danger"},e[12]||(e[12]=[P("i",{class:"bi bi-box-arrow-right"},null,-1)]))])])]),P("div",wN,[P("div",CN,[P("div",IN,[Jn(P("input",{"onUpdate:modelValue":e[3]||(e[3]=a=>i.newTodoText=a),type:"text",class:"form-control task-input",placeholder:"Новая задача...",onKeyup:e[4]||(e[4]=Iy((...a)=>r.addTodo&&r.addTodo(...a),["enter"]))},null,544),[[Eo,i.newTodoText]]),Jn(P("select",{class:"form-select","onUpdate:modelValue":e[5]||(e[5]=a=>i.newTodoCategory=a),style:{"max-width":"150px"}},[e[14]||(e[14]=P("option",{value:""},"Категория",-1)),(ve(!0),Te(qe,null,La(i.categories,a=>(ve(),Te("option",{key:a,value:a},Me(a),9,SN))),128))],512),[[Ba,i.newTodoCategory]]),Jn(P("input",{"onUpdate:modelValue":e[6]||(e[6]=a=>i.newTodoDeadline=a),type:"date",class:"form-control date-input"},null,512),[[Eo,i.newTodoDeadline]]),P("button",{onClick:e[7]||(e[7]=(...a)=>r.addTodo&&r.addTodo(...a)),class:"btn btn-primary add-btn",disabled:!i.newTodoText.trim()},e[15]||(e[15]=[P("i",{class:"bi bi-plus-lg"},null,-1),Ws(" Добавить ")]),8,AN)]),i.addError?(ve(),Te("div",NN,[e[16]||(e[16]=P("i",{class:"bi bi-exclamation-triangle-fill me-1"},null,-1)),Ws(" "+Me(i.addError),1)])):Bs("",!0)])]),P("div",ON,[P("div",RN,[e[18]||(e[18]=P("label",null,"Статус:",-1)),Jn(P("select",{"onUpdate:modelValue":e[8]||(e[8]=a=>i.filterStatus=a),class:"form-select"},e[17]||(e[17]=[P("option",{value:"all"},"Все",-1),P("option",{value:"active"},"Активные",-1),P("option",{value:"completed"},"Завершённые",-1)]),512),[[Ba,i.filterStatus]])]),P("div",PN,[e[20]||(e[20]=P("label",null,"Категория:",-1)),Jn(P("select",{class:"form-select form-select-sm","onUpdate:modelValue":e[9]||(e[9]=a=>i.filterCategory=a)},[e[19]||(e[19]=P("option",{value:""},"Все категории",-1)),(ve(!0),Te(qe,null,La(i.categories,a=>(ve(),Te("option",{key:a,value:a},Me(a),9,kN))),128))],512),[[Ba,i.filterCategory]])])]),P("div",DN,[i.loading?(ve(),Te("div",xN,e[21]||(e[21]=[P("div",{class:"spinner-border text-primary",role:"status"},[P("span",{class:"visually-hidden"},"Загрузка...")],-1),P("p",{class:"mt-2"},"Загрузка задач...",-1)]))):r.filteredTodos.length>0?(ve(),Te("div",LN,[Se(_y,{name:"task-list",tag:"div"},{default:er(()=>[(ve(!0),Te(qe,null,La(r.filteredTodos,a=>(ve(),po(o,{key:a.id,todo:a,onUpdate:r.updateTodo,onDelete:r.deleteTodo},null,8,["todo","onUpdate","onDelete"]))),128))]),_:1})])):(ve(),Te("div",MN,[e[22]||(e[22]=P("i",{class:"bi bi-inbox fs-1"},null,-1)),e[23]||(e[23]=P("p",{class:"mt-2"},"Задачи не найдены",-1)),P("button",{onClick:e[10]||(e[10]=(...a)=>r.resetFilters&&r.resetFilters(...a)),class:"btn btn-link"},"Сбросить фильтры")]))])])],2)}const $N=ha(dN,[["render",FN],["__scopeId","data-v-3951162c"]]),UN={name:"App",components:{AuthPage:UC,TodoList:$N},data(){return{user:null,darkMode:!1}},mounted(){const t=localStorage.getItem("darkMode");t?this.darkMode=t==="true":this.darkMode=window.matchMedia("(prefers-color-scheme: dark)").matches,gw(this.$auth,e=>{this.user=e})},methods:{toggleDarkMode(){this.darkMode=!this.darkMode,localStorage.setItem("darkMode",this.darkMode)}}};function VN(t,e,n,s,i,r){const o=Il("TodoList"),a=Il("AuthPage");return ve(),Te("div",{class:tn(["app",{"dark-mode":i.darkMode}])},[Se(Nc,{name:"fade",mode:"out-in"},{default:er(()=>[i.user?(ve(),po(o,{onToggleDarkMode:r.toggleDarkMode,"dark-mode":i.darkMode,key:"todo-list"},null,8,["onToggleDarkMode","dark-mode"])):(ve(),po(a,{"dark-mode":i.darkMode,key:"auth"},null,8,["dark-mode"]))]),_:1})],2)}const HN=ha(UN,[["render",VN]]);var He="top",it="bottom",rt="right",We="left",ya="auto",vi=[He,it,rt,We],vs="start",si="end",Yg="clippingParents",Cu="viewport",Ps="popper",Qg="reference",ic=vi.reduce(function(t,e){return t.concat([e+"-"+vs,e+"-"+si])},[]),Iu=[].concat(vi,[ya]).reduce(function(t,e){return t.concat([e,e+"-"+vs,e+"-"+si])},[]),Xg="beforeRead",Jg="read",Zg="afterRead",em="beforeMain",tm="main",nm="afterMain",sm="beforeWrite",im="write",rm="afterWrite",om=[Xg,Jg,Zg,em,tm,nm,sm,im,rm];function Ht(t){return t?(t.nodeName||"").toLowerCase():null}function ot(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Es(t){var e=ot(t).Element;return t instanceof e||t instanceof Element}function ct(t){var e=ot(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Su(t){if(typeof ShadowRoot>"u")return!1;var e=ot(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function WN(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var s=e.styles[n]||{},i=e.attributes[n]||{},r=e.elements[n];!ct(r)||!Ht(r)||(Object.assign(r.style,s),Object.keys(i).forEach(function(o){var a=i[o];a===!1?r.removeAttribute(o):r.setAttribute(o,a===!0?"":a)}))})}function BN(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(s){var i=e.elements[s],r=e.attributes[s]||{},o=Object.keys(e.styles.hasOwnProperty(s)?e.styles[s]:n[s]),a=o.reduce(function(l,c){return l[c]="",l},{});!ct(i)||!Ht(i)||(Object.assign(i.style,a),Object.keys(r).forEach(function(l){i.removeAttribute(l)}))})}}const Au={name:"applyStyles",enabled:!0,phase:"write",fn:WN,effect:BN,requires:["computeStyles"]};function $t(t){return t.split("-")[0]}var as=Math.max,Bo=Math.min,ii=Math.round;function rc(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function am(){return!/^((?!chrome|android).)*safari/i.test(rc())}function ri(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var s=t.getBoundingClientRect(),i=1,r=1;e&&ct(t)&&(i=t.offsetWidth>0&&ii(s.width)/t.offsetWidth||1,r=t.offsetHeight>0&&ii(s.height)/t.offsetHeight||1);var o=Es(t)?ot(t):window,a=o.visualViewport,l=!am()&&n,c=(s.left+(l&&a?a.offsetLeft:0))/i,u=(s.top+(l&&a?a.offsetTop:0))/r,h=s.width/i,d=s.height/r;return{width:h,height:d,top:u,right:c+h,bottom:u+d,left:c,x:c,y:u}}function Nu(t){var e=ri(t),n=t.offsetWidth,s=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-s)<=1&&(s=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:s}}function lm(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&Su(n)){var s=e;do{if(s&&t.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}function cn(t){return ot(t).getComputedStyle(t)}function jN(t){return["table","td","th"].indexOf(Ht(t))>=0}function Hn(t){return((Es(t)?t.ownerDocument:t.document)||window.document).documentElement}function ba(t){return Ht(t)==="html"?t:t.assignedSlot||t.parentNode||(Su(t)?t.host:null)||Hn(t)}function Ud(t){return!ct(t)||cn(t).position==="fixed"?null:t.offsetParent}function KN(t){var e=/firefox/i.test(rc()),n=/Trident/i.test(rc());if(n&&ct(t)){var s=cn(t);if(s.position==="fixed")return null}var i=ba(t);for(Su(i)&&(i=i.host);ct(i)&&["html","body"].indexOf(Ht(i))<0;){var r=cn(i);if(r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].indexOf(r.willChange)!==-1||e&&r.willChange==="filter"||e&&r.filter&&r.filter!=="none")return i;i=i.parentNode}return null}function Or(t){for(var e=ot(t),n=Ud(t);n&&jN(n)&&cn(n).position==="static";)n=Ud(n);return n&&(Ht(n)==="html"||Ht(n)==="body"&&cn(n).position==="static")?e:n||KN(t)||e}function Ou(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Yi(t,e,n){return as(t,Bo(e,n))}function GN(t,e,n){var s=Yi(t,e,n);return s>n?n:s}function cm(){return{top:0,right:0,bottom:0,left:0}}function um(t){return Object.assign({},cm(),t)}function hm(t,e){return e.reduce(function(n,s){return n[s]=t,n},{})}var qN=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,um(typeof e!="number"?e:hm(e,vi))};function zN(t){var e,n=t.state,s=t.name,i=t.options,r=n.elements.arrow,o=n.modifiersData.popperOffsets,a=$t(n.placement),l=Ou(a),c=[We,rt].indexOf(a)>=0,u=c?"height":"width";if(!(!r||!o)){var h=qN(i.padding,n),d=Nu(r),_=l==="y"?He:We,g=l==="y"?it:rt,v=n.rects.reference[u]+n.rects.reference[l]-o[l]-n.rects.popper[u],N=o[l]-n.rects.reference[l],k=Or(r),x=k?l==="y"?k.clientHeight||0:k.clientWidth||0:0,M=v/2-N/2,C=h[_],U=x-d[u]-h[g],G=x/2-d[u]/2+M,Q=Yi(C,G,U),ne=l;n.modifiersData[s]=(e={},e[ne]=Q,e.centerOffset=Q-G,e)}}function YN(t){var e=t.state,n=t.options,s=n.element,i=s===void 0?"[data-popper-arrow]":s;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||lm(e.elements.popper,i)&&(e.elements.arrow=i))}const dm={name:"arrow",enabled:!0,phase:"main",fn:zN,effect:YN,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function oi(t){return t.split("-")[1]}var QN={top:"auto",right:"auto",bottom:"auto",left:"auto"};function XN(t,e){var n=t.x,s=t.y,i=e.devicePixelRatio||1;return{x:ii(n*i)/i||0,y:ii(s*i)/i||0}}function Vd(t){var e,n=t.popper,s=t.popperRect,i=t.placement,r=t.variation,o=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,u=t.roundOffsets,h=t.isFixed,d=o.x,_=d===void 0?0:d,g=o.y,v=g===void 0?0:g,N=typeof u=="function"?u({x:_,y:v}):{x:_,y:v};_=N.x,v=N.y;var k=o.hasOwnProperty("x"),x=o.hasOwnProperty("y"),M=We,C=He,U=window;if(c){var G=Or(n),Q="clientHeight",ne="clientWidth";if(G===ot(n)&&(G=Hn(n),cn(G).position!=="static"&&a==="absolute"&&(Q="scrollHeight",ne="scrollWidth")),G=G,i===He||(i===We||i===rt)&&r===si){C=it;var F=h&&G===U&&U.visualViewport?U.visualViewport.height:G[Q];v-=F-s.height,v*=l?1:-1}if(i===We||(i===He||i===it)&&r===si){M=rt;var B=h&&G===U&&U.visualViewport?U.visualViewport.width:G[ne];_-=B-s.width,_*=l?1:-1}}var z=Object.assign({position:a},c&&QN),D=u===!0?XN({x:_,y:v},ot(n)):{x:_,y:v};if(_=D.x,v=D.y,l){var Y;return Object.assign({},z,(Y={},Y[C]=x?"0":"",Y[M]=k?"0":"",Y.transform=(U.devicePixelRatio||1)<=1?"translate("+_+"px, "+v+"px)":"translate3d("+_+"px, "+v+"px, 0)",Y))}return Object.assign({},z,(e={},e[C]=x?v+"px":"",e[M]=k?_+"px":"",e.transform="",e))}function JN(t){var e=t.state,n=t.options,s=n.gpuAcceleration,i=s===void 0?!0:s,r=n.adaptive,o=r===void 0?!0:r,a=n.roundOffsets,l=a===void 0?!0:a,c={placement:$t(e.placement),variation:oi(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Vd(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Vd(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Ru={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:JN,data:{}};var Wr={passive:!0};function ZN(t){var e=t.state,n=t.instance,s=t.options,i=s.scroll,r=i===void 0?!0:i,o=s.resize,a=o===void 0?!0:o,l=ot(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&c.forEach(function(u){u.addEventListener("scroll",n.update,Wr)}),a&&l.addEventListener("resize",n.update,Wr),function(){r&&c.forEach(function(u){u.removeEventListener("scroll",n.update,Wr)}),a&&l.removeEventListener("resize",n.update,Wr)}}const Pu={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ZN,data:{}};var eO={left:"right",right:"left",bottom:"top",top:"bottom"};function io(t){return t.replace(/left|right|bottom|top/g,function(e){return eO[e]})}var tO={start:"end",end:"start"};function Hd(t){return t.replace(/start|end/g,function(e){return tO[e]})}function ku(t){var e=ot(t),n=e.pageXOffset,s=e.pageYOffset;return{scrollLeft:n,scrollTop:s}}function Du(t){return ri(Hn(t)).left+ku(t).scrollLeft}function nO(t,e){var n=ot(t),s=Hn(t),i=n.visualViewport,r=s.clientWidth,o=s.clientHeight,a=0,l=0;if(i){r=i.width,o=i.height;var c=am();(c||!c&&e==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:r,height:o,x:a+Du(t),y:l}}function sO(t){var e,n=Hn(t),s=ku(t),i=(e=t.ownerDocument)==null?void 0:e.body,r=as(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=as(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-s.scrollLeft+Du(t),l=-s.scrollTop;return cn(i||n).direction==="rtl"&&(a+=as(n.clientWidth,i?i.clientWidth:0)-r),{width:r,height:o,x:a,y:l}}function xu(t){var e=cn(t),n=e.overflow,s=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+s)}function fm(t){return["html","body","#document"].indexOf(Ht(t))>=0?t.ownerDocument.body:ct(t)&&xu(t)?t:fm(ba(t))}function Qi(t,e){var n;e===void 0&&(e=[]);var s=fm(t),i=s===((n=t.ownerDocument)==null?void 0:n.body),r=ot(s),o=i?[r].concat(r.visualViewport||[],xu(s)?s:[]):s,a=e.concat(o);return i?a:a.concat(Qi(ba(o)))}function oc(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function iO(t,e){var n=ri(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function Wd(t,e,n){return e===Cu?oc(nO(t,n)):Es(e)?iO(e,n):oc(sO(Hn(t)))}function rO(t){var e=Qi(ba(t)),n=["absolute","fixed"].indexOf(cn(t).position)>=0,s=n&&ct(t)?Or(t):t;return Es(s)?e.filter(function(i){return Es(i)&&lm(i,s)&&Ht(i)!=="body"}):[]}function oO(t,e,n,s){var i=e==="clippingParents"?rO(t):[].concat(e),r=[].concat(i,[n]),o=r[0],a=r.reduce(function(l,c){var u=Wd(t,c,s);return l.top=as(u.top,l.top),l.right=Bo(u.right,l.right),l.bottom=Bo(u.bottom,l.bottom),l.left=as(u.left,l.left),l},Wd(t,o,s));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function pm(t){var e=t.reference,n=t.element,s=t.placement,i=s?$t(s):null,r=s?oi(s):null,o=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,l;switch(i){case He:l={x:o,y:e.y-n.height};break;case it:l={x:o,y:e.y+e.height};break;case rt:l={x:e.x+e.width,y:a};break;case We:l={x:e.x-n.width,y:a};break;default:l={x:e.x,y:e.y}}var c=i?Ou(i):null;if(c!=null){var u=c==="y"?"height":"width";switch(r){case vs:l[c]=l[c]-(e[u]/2-n[u]/2);break;case si:l[c]=l[c]+(e[u]/2-n[u]/2);break}}return l}function ai(t,e){e===void 0&&(e={});var n=e,s=n.placement,i=s===void 0?t.placement:s,r=n.strategy,o=r===void 0?t.strategy:r,a=n.boundary,l=a===void 0?Yg:a,c=n.rootBoundary,u=c===void 0?Cu:c,h=n.elementContext,d=h===void 0?Ps:h,_=n.altBoundary,g=_===void 0?!1:_,v=n.padding,N=v===void 0?0:v,k=um(typeof N!="number"?N:hm(N,vi)),x=d===Ps?Qg:Ps,M=t.rects.popper,C=t.elements[g?x:d],U=oO(Es(C)?C:C.contextElement||Hn(t.elements.popper),l,u,o),G=ri(t.elements.reference),Q=pm({reference:G,element:M,placement:i}),ne=oc(Object.assign({},M,Q)),F=d===Ps?ne:G,B={top:U.top-F.top+k.top,bottom:F.bottom-U.bottom+k.bottom,left:U.left-F.left+k.left,right:F.right-U.right+k.right},z=t.modifiersData.offset;if(d===Ps&&z){var D=z[i];Object.keys(B).forEach(function(Y){var me=[rt,it].indexOf(Y)>=0?1:-1,Ne=[He,it].indexOf(Y)>=0?"y":"x";B[Y]+=D[Ne]*me})}return B}function aO(t,e){e===void 0&&(e={});var n=e,s=n.placement,i=n.boundary,r=n.rootBoundary,o=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,c=l===void 0?Iu:l,u=oi(s),h=u?a?ic:ic.filter(function(g){return oi(g)===u}):vi,d=h.filter(function(g){return c.indexOf(g)>=0});d.length===0&&(d=h);var _=d.reduce(function(g,v){return g[v]=ai(t,{placement:v,boundary:i,rootBoundary:r,padding:o})[$t(v)],g},{});return Object.keys(_).sort(function(g,v){return _[g]-_[v]})}function lO(t){if($t(t)===ya)return[];var e=io(t);return[Hd(t),e,Hd(e)]}function cO(t){var e=t.state,n=t.options,s=t.name;if(!e.modifiersData[s]._skip){for(var i=n.mainAxis,r=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!0:o,l=n.fallbackPlacements,c=n.padding,u=n.boundary,h=n.rootBoundary,d=n.altBoundary,_=n.flipVariations,g=_===void 0?!0:_,v=n.allowedAutoPlacements,N=e.options.placement,k=$t(N),x=k===N,M=l||(x||!g?[io(N)]:lO(N)),C=[N].concat(M).reduce(function(fn,At){return fn.concat($t(At)===ya?aO(e,{placement:At,boundary:u,rootBoundary:h,padding:c,flipVariations:g,allowedAutoPlacements:v}):At)},[]),U=e.rects.reference,G=e.rects.popper,Q=new Map,ne=!0,F=C[0],B=0;B<C.length;B++){var z=C[B],D=$t(z),Y=oi(z)===vs,me=[He,it].indexOf(D)>=0,Ne=me?"width":"height",se=ai(e,{placement:z,boundary:u,rootBoundary:h,altBoundary:d,padding:c}),te=me?Y?rt:We:Y?it:He;U[Ne]>G[Ne]&&(te=io(te));var re=io(te),xe=[];if(r&&xe.push(se[D]<=0),a&&xe.push(se[te]<=0,se[re]<=0),xe.every(function(fn){return fn})){F=z,ne=!1;break}Q.set(z,xe)}if(ne)for(var Wt=g?3:1,pt=function(At){var _t=C.find(function(Bt){var gt=Q.get(Bt);if(gt)return gt.slice(0,At).every(function(Cs){return Cs})});if(_t)return F=_t,"break"},Pe=Wt;Pe>0;Pe--){var jn=pt(Pe);if(jn==="break")break}e.placement!==F&&(e.modifiersData[s]._skip=!0,e.placement=F,e.reset=!0)}}const _m={name:"flip",enabled:!0,phase:"main",fn:cO,requiresIfExists:["offset"],data:{_skip:!1}};function Bd(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function jd(t){return[He,rt,it,We].some(function(e){return t[e]>=0})}function uO(t){var e=t.state,n=t.name,s=e.rects.reference,i=e.rects.popper,r=e.modifiersData.preventOverflow,o=ai(e,{elementContext:"reference"}),a=ai(e,{altBoundary:!0}),l=Bd(o,s),c=Bd(a,i,r),u=jd(l),h=jd(c);e.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}const gm={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:uO};function hO(t,e,n){var s=$t(t),i=[We,He].indexOf(s)>=0?-1:1,r=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=r[0],a=r[1];return o=o||0,a=(a||0)*i,[We,rt].indexOf(s)>=0?{x:a,y:o}:{x:o,y:a}}function dO(t){var e=t.state,n=t.options,s=t.name,i=n.offset,r=i===void 0?[0,0]:i,o=Iu.reduce(function(u,h){return u[h]=hO(h,e.rects,r),u},{}),a=o[e.placement],l=a.x,c=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[s]=o}const mm={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:dO};function fO(t){var e=t.state,n=t.name;e.modifiersData[n]=pm({reference:e.rects.reference,element:e.rects.popper,placement:e.placement})}const Lu={name:"popperOffsets",enabled:!0,phase:"read",fn:fO,data:{}};function pO(t){return t==="x"?"y":"x"}function _O(t){var e=t.state,n=t.options,s=t.name,i=n.mainAxis,r=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!1:o,l=n.boundary,c=n.rootBoundary,u=n.altBoundary,h=n.padding,d=n.tether,_=d===void 0?!0:d,g=n.tetherOffset,v=g===void 0?0:g,N=ai(e,{boundary:l,rootBoundary:c,padding:h,altBoundary:u}),k=$t(e.placement),x=oi(e.placement),M=!x,C=Ou(k),U=pO(C),G=e.modifiersData.popperOffsets,Q=e.rects.reference,ne=e.rects.popper,F=typeof v=="function"?v(Object.assign({},e.rects,{placement:e.placement})):v,B=typeof F=="number"?{mainAxis:F,altAxis:F}:Object.assign({mainAxis:0,altAxis:0},F),z=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,D={x:0,y:0};if(G){if(r){var Y,me=C==="y"?He:We,Ne=C==="y"?it:rt,se=C==="y"?"height":"width",te=G[C],re=te+N[me],xe=te-N[Ne],Wt=_?-ne[se]/2:0,pt=x===vs?Q[se]:ne[se],Pe=x===vs?-ne[se]:-Q[se],jn=e.elements.arrow,fn=_&&jn?Nu(jn):{width:0,height:0},At=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:cm(),_t=At[me],Bt=At[Ne],gt=Yi(0,Q[se],fn[se]),Cs=M?Q[se]/2-Wt-gt-_t-B.mainAxis:pt-gt-_t-B.mainAxis,Kn=M?-Q[se]/2+Wt+gt+Bt+B.mainAxis:Pe+gt+Bt+B.mainAxis,xr=e.elements.arrow&&Or(e.elements.arrow),f=xr?C==="y"?xr.clientTop||0:xr.clientLeft||0:0,p=(Y=z?.[C])!=null?Y:0,m=te+Cs-p-f,w=te+Kn-p,E=Yi(_?Bo(re,m):re,te,_?as(xe,w):xe);G[C]=E,D[C]=E-te}if(a){var b,O=C==="x"?He:We,A=C==="x"?it:rt,I=G[U],T=U==="y"?"height":"width",$=I+N[O],R=I-N[A],L=[He,We].indexOf(k)!==-1,j=(b=z?.[U])!=null?b:0,Z=L?$:I-Q[T]-ne[T]-j+B.altAxis,ce=L?I+Q[T]+ne[T]-j-B.altAxis:R,ie=_&&L?GN(Z,I,ce):Yi(_?Z:$,I,_?ce:R);G[U]=ie,D[U]=ie-I}e.modifiersData[s]=D}}const vm={name:"preventOverflow",enabled:!0,phase:"main",fn:_O,requiresIfExists:["offset"]};function gO(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function mO(t){return t===ot(t)||!ct(t)?ku(t):gO(t)}function vO(t){var e=t.getBoundingClientRect(),n=ii(e.width)/t.offsetWidth||1,s=ii(e.height)/t.offsetHeight||1;return n!==1||s!==1}function EO(t,e,n){n===void 0&&(n=!1);var s=ct(e),i=ct(e)&&vO(e),r=Hn(e),o=ri(t,i,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(s||!s&&!n)&&((Ht(e)!=="body"||xu(r))&&(a=mO(e)),ct(e)?(l=ri(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):r&&(l.x=Du(r))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function yO(t){var e=new Map,n=new Set,s=[];t.forEach(function(r){e.set(r.name,r)});function i(r){n.add(r.name);var o=[].concat(r.requires||[],r.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var l=e.get(a);l&&i(l)}}),s.push(r)}return t.forEach(function(r){n.has(r.name)||i(r)}),s}function bO(t){var e=yO(t);return om.reduce(function(n,s){return n.concat(e.filter(function(i){return i.phase===s}))},[])}function TO(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function wO(t){var e=t.reduce(function(n,s){var i=n[s.name];return n[s.name]=i?Object.assign({},i,s,{options:Object.assign({},i.options,s.options),data:Object.assign({},i.data,s.data)}):s,n},{});return Object.keys(e).map(function(n){return e[n]})}var Kd={placement:"bottom",modifiers:[],strategy:"absolute"};function Gd(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(s){return!(s&&typeof s.getBoundingClientRect=="function")})}function Ta(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,s=n===void 0?[]:n,i=e.defaultOptions,r=i===void 0?Kd:i;return function(a,l,c){c===void 0&&(c=r);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},Kd,r),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},h=[],d=!1,_={state:u,setOptions:function(k){var x=typeof k=="function"?k(u.options):k;v(),u.options=Object.assign({},r,u.options,x),u.scrollParents={reference:Es(a)?Qi(a):a.contextElement?Qi(a.contextElement):[],popper:Qi(l)};var M=bO(wO([].concat(s,u.options.modifiers)));return u.orderedModifiers=M.filter(function(C){return C.enabled}),g(),_.update()},forceUpdate:function(){if(!d){var k=u.elements,x=k.reference,M=k.popper;if(Gd(x,M)){u.rects={reference:EO(x,Or(M),u.options.strategy==="fixed"),popper:Nu(M)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(B){return u.modifiersData[B.name]=Object.assign({},B.data)});for(var C=0;C<u.orderedModifiers.length;C++){if(u.reset===!0){u.reset=!1,C=-1;continue}var U=u.orderedModifiers[C],G=U.fn,Q=U.options,ne=Q===void 0?{}:Q,F=U.name;typeof G=="function"&&(u=G({state:u,options:ne,name:F,instance:_})||u)}}}},update:TO(function(){return new Promise(function(N){_.forceUpdate(),N(u)})}),destroy:function(){v(),d=!0}};if(!Gd(a,l))return _;_.setOptions(c).then(function(N){!d&&c.onFirstUpdate&&c.onFirstUpdate(N)});function g(){u.orderedModifiers.forEach(function(N){var k=N.name,x=N.options,M=x===void 0?{}:x,C=N.effect;if(typeof C=="function"){var U=C({state:u,name:k,instance:_,options:M}),G=function(){};h.push(U||G)}})}function v(){h.forEach(function(N){return N()}),h=[]}return _}}var CO=Ta(),IO=[Pu,Lu,Ru,Au],SO=Ta({defaultModifiers:IO}),AO=[Pu,Lu,Ru,Au,mm,_m,vm,dm,gm],Mu=Ta({defaultModifiers:AO});const Em=Object.freeze(Object.defineProperty({__proto__:null,afterMain:nm,afterRead:Zg,afterWrite:rm,applyStyles:Au,arrow:dm,auto:ya,basePlacements:vi,beforeMain:em,beforeRead:Xg,beforeWrite:sm,bottom:it,clippingParents:Yg,computeStyles:Ru,createPopper:Mu,createPopperBase:CO,createPopperLite:SO,detectOverflow:ai,end:si,eventListeners:Pu,flip:_m,hide:gm,left:We,main:tm,modifierPhases:om,offset:mm,placements:Iu,popper:Ps,popperGenerator:Ta,popperOffsets:Lu,preventOverflow:vm,read:Jg,reference:Qg,right:rt,start:vs,top:He,variationPlacements:ic,viewport:Cu,write:im},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.7 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const gn=new Map,il={set(t,e,n){gn.has(t)||gn.set(t,new Map);const s=gn.get(t);if(!s.has(e)&&s.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return}s.set(e,n)},get(t,e){return gn.has(t)&&gn.get(t).get(e)||null},remove(t,e){if(!gn.has(t))return;const n=gn.get(t);n.delete(e),n.size===0&&gn.delete(t)}},NO=1e6,OO=1e3,ac="transitionend",ym=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,(e,n)=>`#${CSS.escape(n)}`)),t),RO=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),PO=t=>{do t+=Math.floor(Math.random()*NO);while(document.getElementById(t));return t},kO=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const s=Number.parseFloat(e),i=Number.parseFloat(n);return!s&&!i?0:(e=e.split(",")[0],n=n.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(n))*OO)},bm=t=>{t.dispatchEvent(new Event(ac))},Zt=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),Dn=t=>Zt(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(ym(t)):null,Ei=t=>{if(!Zt(t)||t.getClientRects().length===0)return!1;const e=getComputedStyle(t).getPropertyValue("visibility")==="visible",n=t.closest("details:not([open])");if(!n)return e;if(n!==t){const s=t.closest("summary");if(s&&s.parentNode!==n||s===null)return!1}return e},xn=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",Tm=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?Tm(t.parentNode):null},jo=()=>{},Rr=t=>{t.offsetHeight},wm=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,rl=[],DO=t=>{document.readyState==="loading"?(rl.length||document.addEventListener("DOMContentLoaded",()=>{for(const e of rl)e()}),rl.push(t)):t()},ht=()=>document.documentElement.dir==="rtl",ft=t=>{DO(()=>{const e=wm();if(e){const n=t.NAME,s=e.fn[n];e.fn[n]=t.jQueryInterface,e.fn[n].Constructor=t,e.fn[n].noConflict=()=>(e.fn[n]=s,t.jQueryInterface)}})},ze=(t,e=[],n=t)=>typeof t=="function"?t.call(...e):n,Cm=(t,e,n=!0)=>{if(!n){ze(t);return}const i=kO(e)+5;let r=!1;const o=({target:a})=>{a===e&&(r=!0,e.removeEventListener(ac,o),ze(t))};e.addEventListener(ac,o),setTimeout(()=>{r||bm(e)},i)},Fu=(t,e,n,s)=>{const i=t.length;let r=t.indexOf(e);return r===-1?!n&&s?t[i-1]:t[0]:(r+=n?1:-1,s&&(r=(r+i)%i),t[Math.max(0,Math.min(r,i-1))])},xO=/[^.]*(?=\..*)\.|.*/,LO=/\..*/,MO=/::\d+$/,ol={};let qd=1;const Im={mouseenter:"mouseover",mouseleave:"mouseout"},FO=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Sm(t,e){return e&&`${e}::${qd++}`||t.uidEvent||qd++}function Am(t){const e=Sm(t);return t.uidEvent=e,ol[e]=ol[e]||{},ol[e]}function $O(t,e){return function n(s){return $u(s,{delegateTarget:t}),n.oneOff&&y.off(t,s.type,e),e.apply(t,[s])}}function UO(t,e,n){return function s(i){const r=t.querySelectorAll(e);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(const a of r)if(a===o)return $u(i,{delegateTarget:o}),s.oneOff&&y.off(t,i.type,e,n),n.apply(o,[i])}}function Nm(t,e,n=null){return Object.values(t).find(s=>s.callable===e&&s.delegationSelector===n)}function Om(t,e,n){const s=typeof e=="string",i=s?n:e||n;let r=Rm(t);return FO.has(r)||(r=t),[s,i,r]}function zd(t,e,n,s,i){if(typeof e!="string"||!t)return;let[r,o,a]=Om(e,n,s);e in Im&&(o=(g=>function(v){if(!v.relatedTarget||v.relatedTarget!==v.delegateTarget&&!v.delegateTarget.contains(v.relatedTarget))return g.call(this,v)})(o));const l=Am(t),c=l[a]||(l[a]={}),u=Nm(c,o,r?n:null);if(u){u.oneOff=u.oneOff&&i;return}const h=Sm(o,e.replace(xO,"")),d=r?UO(t,n,o):$O(t,o);d.delegationSelector=r?n:null,d.callable=o,d.oneOff=i,d.uidEvent=h,c[h]=d,t.addEventListener(a,d,r)}function lc(t,e,n,s,i){const r=Nm(e[n],s,i);r&&(t.removeEventListener(n,r,!!i),delete e[n][r.uidEvent])}function VO(t,e,n,s){const i=e[n]||{};for(const[r,o]of Object.entries(i))r.includes(s)&&lc(t,e,n,o.callable,o.delegationSelector)}function Rm(t){return t=t.replace(LO,""),Im[t]||t}const y={on(t,e,n,s){zd(t,e,n,s,!1)},one(t,e,n,s){zd(t,e,n,s,!0)},off(t,e,n,s){if(typeof e!="string"||!t)return;const[i,r,o]=Om(e,n,s),a=o!==e,l=Am(t),c=l[o]||{},u=e.startsWith(".");if(typeof r<"u"){if(!Object.keys(c).length)return;lc(t,l,o,r,i?n:null);return}if(u)for(const h of Object.keys(l))VO(t,l,h,e.slice(1));for(const[h,d]of Object.entries(c)){const _=h.replace(MO,"");(!a||e.includes(_))&&lc(t,l,o,d.callable,d.delegationSelector)}},trigger(t,e,n){if(typeof e!="string"||!t)return null;const s=wm(),i=Rm(e),r=e!==i;let o=null,a=!0,l=!0,c=!1;r&&s&&(o=s.Event(e,n),s(t).trigger(o),a=!o.isPropagationStopped(),l=!o.isImmediatePropagationStopped(),c=o.isDefaultPrevented());const u=$u(new Event(e,{bubbles:a,cancelable:!0}),n);return c&&u.preventDefault(),l&&t.dispatchEvent(u),u.defaultPrevented&&o&&o.preventDefault(),u}};function $u(t,e={}){for(const[n,s]of Object.entries(e))try{t[n]=s}catch{Object.defineProperty(t,n,{configurable:!0,get(){return s}})}return t}function Yd(t){if(t==="true")return!0;if(t==="false")return!1;if(t===Number(t).toString())return Number(t);if(t===""||t==="null")return null;if(typeof t!="string")return t;try{return JSON.parse(decodeURIComponent(t))}catch{return t}}function al(t){return t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const en={setDataAttribute(t,e,n){t.setAttribute(`data-bs-${al(e)}`,n)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${al(e)}`)},getDataAttributes(t){if(!t)return{};const e={},n=Object.keys(t.dataset).filter(s=>s.startsWith("bs")&&!s.startsWith("bsConfig"));for(const s of n){let i=s.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1),e[i]=Yd(t.dataset[s])}return e},getDataAttribute(t,e){return Yd(t.getAttribute(`data-bs-${al(e)}`))}};class Pr{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,n){const s=Zt(n)?en.getDataAttribute(n,"config"):{};return{...this.constructor.Default,...typeof s=="object"?s:{},...Zt(n)?en.getDataAttributes(n):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,n=this.constructor.DefaultType){for(const[s,i]of Object.entries(n)){const r=e[s],o=Zt(r)?"element":RO(r);if(!new RegExp(i).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${i}".`)}}}const HO="5.3.7";class St extends Pr{constructor(e,n){super(),e=Dn(e),e&&(this._element=e,this._config=this._getConfig(n),il.set(this._element,this.constructor.DATA_KEY,this))}dispose(){il.remove(this._element,this.constructor.DATA_KEY),y.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,n,s=!0){Cm(e,n,s)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return il.get(Dn(e),this.DATA_KEY)}static getOrCreateInstance(e,n={}){return this.getInstance(e)||new this(e,typeof n=="object"?n:null)}static get VERSION(){return HO}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const ll=t=>{let e=t.getAttribute("data-bs-target");if(!e||e==="#"){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&n!=="#"?n.trim():null}return e?e.split(",").map(n=>ym(n)).join(","):null},V={find(t,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,t))},findOne(t,e=document.documentElement){return Element.prototype.querySelector.call(e,t)},children(t,e){return[].concat(...t.children).filter(n=>n.matches(e))},parents(t,e){const n=[];let s=t.parentNode.closest(e);for(;s;)n.push(s),s=s.parentNode.closest(e);return n},prev(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(e,t).filter(n=>!xn(n)&&Ei(n))},getSelectorFromElement(t){const e=ll(t);return e&&V.findOne(e)?e:null},getElementFromSelector(t){const e=ll(t);return e?V.findOne(e):null},getMultipleElementsFromSelector(t){const e=ll(t);return e?V.find(e):[]}},wa=(t,e="hide")=>{const n=`click.dismiss${t.EVENT_KEY}`,s=t.NAME;y.on(document,n,`[data-bs-dismiss="${s}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),xn(this))return;const r=V.getElementFromSelector(this)||this.closest(`.${s}`);t.getOrCreateInstance(r)[e]()})},WO="alert",BO="bs.alert",Pm=`.${BO}`,jO=`close${Pm}`,KO=`closed${Pm}`,GO="fade",qO="show";class Ca extends St{static get NAME(){return WO}close(){if(y.trigger(this._element,jO).defaultPrevented)return;this._element.classList.remove(qO);const n=this._element.classList.contains(GO);this._queueCallback(()=>this._destroyElement(),this._element,n)}_destroyElement(){this._element.remove(),y.trigger(this._element,KO),this.dispose()}static jQueryInterface(e){return this.each(function(){const n=Ca.getOrCreateInstance(this);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}wa(Ca,"close");ft(Ca);const zO="button",YO="bs.button",QO=`.${YO}`,XO=".data-api",JO="active",Qd='[data-bs-toggle="button"]',ZO=`click${QO}${XO}`;class Ia extends St{static get NAME(){return zO}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(JO))}static jQueryInterface(e){return this.each(function(){const n=Ia.getOrCreateInstance(this);e==="toggle"&&n[e]()})}}y.on(document,ZO,Qd,t=>{t.preventDefault();const e=t.target.closest(Qd);Ia.getOrCreateInstance(e).toggle()});ft(Ia);const eR="swipe",yi=".bs.swipe",tR=`touchstart${yi}`,nR=`touchmove${yi}`,sR=`touchend${yi}`,iR=`pointerdown${yi}`,rR=`pointerup${yi}`,oR="touch",aR="pen",lR="pointer-event",cR=40,uR={endCallback:null,leftCallback:null,rightCallback:null},hR={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Ko extends Pr{constructor(e,n){super(),this._element=e,!(!e||!Ko.isSupported())&&(this._config=this._getConfig(n),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return uR}static get DefaultType(){return hR}static get NAME(){return eR}dispose(){y.off(this._element,yi)}_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),ze(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=cR)return;const n=e/this._deltaX;this._deltaX=0,n&&ze(n>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(y.on(this._element,iR,e=>this._start(e)),y.on(this._element,rR,e=>this._end(e)),this._element.classList.add(lR)):(y.on(this._element,tR,e=>this._start(e)),y.on(this._element,nR,e=>this._move(e)),y.on(this._element,sR,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===aR||e.pointerType===oR)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const dR="carousel",fR="bs.carousel",Wn=`.${fR}`,km=".data-api",pR="ArrowLeft",_R="ArrowRight",gR=500,Ri="next",As="prev",ks="left",ro="right",mR=`slide${Wn}`,cl=`slid${Wn}`,vR=`keydown${Wn}`,ER=`mouseenter${Wn}`,yR=`mouseleave${Wn}`,bR=`dragstart${Wn}`,TR=`load${Wn}${km}`,wR=`click${Wn}${km}`,Dm="carousel",Br="active",CR="slide",IR="carousel-item-end",SR="carousel-item-start",AR="carousel-item-next",NR="carousel-item-prev",xm=".active",Lm=".carousel-item",OR=xm+Lm,RR=".carousel-item img",PR=".carousel-indicators",kR="[data-bs-slide], [data-bs-slide-to]",DR='[data-bs-ride="carousel"]',xR={[pR]:ro,[_R]:ks},LR={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},MR={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class kr extends St{constructor(e,n){super(e,n),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=V.findOne(PR,this._element),this._addEventListeners(),this._config.ride===Dm&&this.cycle()}static get Default(){return LR}static get DefaultType(){return MR}static get NAME(){return dR}next(){this._slide(Ri)}nextWhenVisible(){!document.hidden&&Ei(this._element)&&this.next()}prev(){this._slide(As)}pause(){this._isSliding&&bm(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){y.one(this._element,cl,()=>this.cycle());return}this.cycle()}}to(e){const n=this._getItems();if(e>n.length-1||e<0)return;if(this._isSliding){y.one(this._element,cl,()=>this.to(e));return}const s=this._getItemIndex(this._getActive());if(s===e)return;const i=e>s?Ri:As;this._slide(i,n[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&y.on(this._element,vR,e=>this._keydown(e)),this._config.pause==="hover"&&(y.on(this._element,ER,()=>this.pause()),y.on(this._element,yR,()=>this._maybeEnableCycle())),this._config.touch&&Ko.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const s of V.find(RR,this._element))y.on(s,bR,i=>i.preventDefault());const n={leftCallback:()=>this._slide(this._directionToOrder(ks)),rightCallback:()=>this._slide(this._directionToOrder(ro)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),gR+this._config.interval))}};this._swipeHelper=new Ko(this._element,n)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const n=xR[e.key];n&&(e.preventDefault(),this._slide(this._directionToOrder(n)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const n=V.findOne(xm,this._indicatorsElement);n.classList.remove(Br),n.removeAttribute("aria-current");const s=V.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);s&&(s.classList.add(Br),s.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const n=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=n||this._config.defaultInterval}_slide(e,n=null){if(this._isSliding)return;const s=this._getActive(),i=e===Ri,r=n||Fu(this._getItems(),s,i,this._config.wrap);if(r===s)return;const o=this._getItemIndex(r),a=_=>y.trigger(this._element,_,{relatedTarget:r,direction:this._orderToDirection(e),from:this._getItemIndex(s),to:o});if(a(mR).defaultPrevented||!s||!r)return;const c=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=r;const u=i?SR:IR,h=i?AR:NR;r.classList.add(h),Rr(r),s.classList.add(u),r.classList.add(u);const d=()=>{r.classList.remove(u,h),r.classList.add(Br),s.classList.remove(Br,h,u),this._isSliding=!1,a(cl)};this._queueCallback(d,s,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains(CR)}_getActive(){return V.findOne(OR,this._element)}_getItems(){return V.find(Lm,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return ht()?e===ks?As:Ri:e===ks?Ri:As}_orderToDirection(e){return ht()?e===As?ks:ro:e===As?ro:ks}static jQueryInterface(e){return this.each(function(){const n=kr.getOrCreateInstance(this,e);if(typeof e=="number"){n.to(e);return}if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}y.on(document,wR,kR,function(t){const e=V.getElementFromSelector(this);if(!e||!e.classList.contains(Dm))return;t.preventDefault();const n=kr.getOrCreateInstance(e),s=this.getAttribute("data-bs-slide-to");if(s){n.to(s),n._maybeEnableCycle();return}if(en.getDataAttribute(this,"slide")==="next"){n.next(),n._maybeEnableCycle();return}n.prev(),n._maybeEnableCycle()});y.on(window,TR,()=>{const t=V.find(DR);for(const e of t)kr.getOrCreateInstance(e)});ft(kr);const FR="collapse",$R="bs.collapse",Dr=`.${$R}`,UR=".data-api",VR=`show${Dr}`,HR=`shown${Dr}`,WR=`hide${Dr}`,BR=`hidden${Dr}`,jR=`click${Dr}${UR}`,ul="show",Ms="collapse",jr="collapsing",KR="collapsed",GR=`:scope .${Ms} .${Ms}`,qR="collapse-horizontal",zR="width",YR="height",QR=".collapse.show, .collapse.collapsing",cc='[data-bs-toggle="collapse"]',XR={parent:null,toggle:!0},JR={parent:"(null|element)",toggle:"boolean"};class _r extends St{constructor(e,n){super(e,n),this._isTransitioning=!1,this._triggerArray=[];const s=V.find(cc);for(const i of s){const r=V.getSelectorFromElement(i),o=V.find(r).filter(a=>a===this._element);r!==null&&o.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return XR}static get DefaultType(){return JR}static get NAME(){return FR}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(QR).filter(a=>a!==this._element).map(a=>_r.getOrCreateInstance(a,{toggle:!1}))),e.length&&e[0]._isTransitioning||y.trigger(this._element,VR).defaultPrevented)return;for(const a of e)a.hide();const s=this._getDimension();this._element.classList.remove(Ms),this._element.classList.add(jr),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(jr),this._element.classList.add(Ms,ul),this._element.style[s]="",y.trigger(this._element,HR)},o=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback(i,this._element,!0),this._element.style[s]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||y.trigger(this._element,WR).defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,Rr(this._element),this._element.classList.add(jr),this._element.classList.remove(Ms,ul);for(const i of this._triggerArray){const r=V.getElementFromSelector(i);r&&!this._isShown(r)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(jr),this._element.classList.add(Ms),y.trigger(this._element,BR)};this._element.style[n]="",this._queueCallback(s,this._element,!0)}_isShown(e=this._element){return e.classList.contains(ul)}_configAfterMerge(e){return e.toggle=!!e.toggle,e.parent=Dn(e.parent),e}_getDimension(){return this._element.classList.contains(qR)?zR:YR}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(cc);for(const n of e){const s=V.getElementFromSelector(n);s&&this._addAriaAndCollapsedClass([n],this._isShown(s))}}_getFirstLevelChildren(e){const n=V.find(GR,this._config.parent);return V.find(e,this._config.parent).filter(s=>!n.includes(s))}_addAriaAndCollapsedClass(e,n){if(e.length)for(const s of e)s.classList.toggle(KR,!n),s.setAttribute("aria-expanded",n)}static jQueryInterface(e){const n={};return typeof e=="string"&&/show|hide/.test(e)&&(n.toggle=!1),this.each(function(){const s=_r.getOrCreateInstance(this,n);if(typeof e=="string"){if(typeof s[e]>"u")throw new TypeError(`No method named "${e}"`);s[e]()}})}}y.on(document,jR,cc,function(t){(t.target.tagName==="A"||t.delegateTarget&&t.delegateTarget.tagName==="A")&&t.preventDefault();for(const e of V.getMultipleElementsFromSelector(this))_r.getOrCreateInstance(e,{toggle:!1}).toggle()});ft(_r);const Xd="dropdown",ZR="bs.dropdown",Ts=`.${ZR}`,Uu=".data-api",eP="Escape",Jd="Tab",tP="ArrowUp",Zd="ArrowDown",nP=2,sP=`hide${Ts}`,iP=`hidden${Ts}`,rP=`show${Ts}`,oP=`shown${Ts}`,Mm=`click${Ts}${Uu}`,Fm=`keydown${Ts}${Uu}`,aP=`keyup${Ts}${Uu}`,Ds="show",lP="dropup",cP="dropend",uP="dropstart",hP="dropup-center",dP="dropdown-center",ss='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',fP=`${ss}.${Ds}`,oo=".dropdown-menu",pP=".navbar",_P=".navbar-nav",gP=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",mP=ht()?"top-end":"top-start",vP=ht()?"top-start":"top-end",EP=ht()?"bottom-end":"bottom-start",yP=ht()?"bottom-start":"bottom-end",bP=ht()?"left-start":"right-start",TP=ht()?"right-start":"left-start",wP="top",CP="bottom",IP={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},SP={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Ut extends St{constructor(e,n){super(e,n),this._popper=null,this._parent=this._element.parentNode,this._menu=V.next(this._element,oo)[0]||V.prev(this._element,oo)[0]||V.findOne(oo,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return IP}static get DefaultType(){return SP}static get NAME(){return Xd}toggle(){return this._isShown()?this.hide():this.show()}show(){if(xn(this._element)||this._isShown())return;const e={relatedTarget:this._element};if(!y.trigger(this._element,rP,e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(_P))for(const s of[].concat(...document.body.children))y.on(s,"mouseover",jo);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ds),this._element.classList.add(Ds),y.trigger(this._element,oP,e)}}hide(){if(xn(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!y.trigger(this._element,sP,e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))y.off(s,"mouseover",jo);this._popper&&this._popper.destroy(),this._menu.classList.remove(Ds),this._element.classList.remove(Ds),this._element.setAttribute("aria-expanded","false"),en.removeDataAttribute(this._menu,"popper"),y.trigger(this._element,iP,e),this._element.focus()}}_getConfig(e){if(e=super._getConfig(e),typeof e.reference=="object"&&!Zt(e.reference)&&typeof e.reference.getBoundingClientRect!="function")throw new TypeError(`${Xd.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(typeof Em>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let e=this._element;this._config.reference==="parent"?e=this._parent:Zt(this._config.reference)?e=Dn(this._config.reference):typeof this._config.reference=="object"&&(e=this._config.reference);const n=this._getPopperConfig();this._popper=Mu(e,this._menu,n)}_isShown(){return this._menu.classList.contains(Ds)}_getPlacement(){const e=this._parent;if(e.classList.contains(cP))return bP;if(e.classList.contains(uP))return TP;if(e.classList.contains(hP))return wP;if(e.classList.contains(dP))return CP;const n=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return e.classList.contains(lP)?n?vP:mP:n?yP:EP}_detectNavbar(){return this._element.closest(pP)!==null}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(en.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...ze(this._config.popperConfig,[void 0,e])}}_selectMenuItem({key:e,target:n}){const s=V.find(gP,this._menu).filter(i=>Ei(i));s.length&&Fu(s,n,e===Zd,!s.includes(n)).focus()}static jQueryInterface(e){return this.each(function(){const n=Ut.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}static clearMenus(e){if(e.button===nP||e.type==="keyup"&&e.key!==Jd)return;const n=V.find(fP);for(const s of n){const i=Ut.getInstance(s);if(!i||i._config.autoClose===!1)continue;const r=e.composedPath(),o=r.includes(i._menu);if(r.includes(i._element)||i._config.autoClose==="inside"&&!o||i._config.autoClose==="outside"&&o||i._menu.contains(e.target)&&(e.type==="keyup"&&e.key===Jd||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const a={relatedTarget:i._element};e.type==="click"&&(a.clickEvent=e),i._completeHide(a)}}static dataApiKeydownHandler(e){const n=/input|textarea/i.test(e.target.tagName),s=e.key===eP,i=[tP,Zd].includes(e.key);if(!i&&!s||n&&!s)return;e.preventDefault();const r=this.matches(ss)?this:V.prev(this,ss)[0]||V.next(this,ss)[0]||V.findOne(ss,e.delegateTarget.parentNode),o=Ut.getOrCreateInstance(r);if(i){e.stopPropagation(),o.show(),o._selectMenuItem(e);return}o._isShown()&&(e.stopPropagation(),o.hide(),r.focus())}}y.on(document,Fm,ss,Ut.dataApiKeydownHandler);y.on(document,Fm,oo,Ut.dataApiKeydownHandler);y.on(document,Mm,Ut.clearMenus);y.on(document,aP,Ut.clearMenus);y.on(document,Mm,ss,function(t){t.preventDefault(),Ut.getOrCreateInstance(this).toggle()});ft(Ut);const $m="backdrop",AP="fade",ef="show",tf=`mousedown.bs.${$m}`,NP={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},OP={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Um extends Pr{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return NP}static get DefaultType(){return OP}static get NAME(){return $m}show(e){if(!this._config.isVisible){ze(e);return}this._append();const n=this._getElement();this._config.isAnimated&&Rr(n),n.classList.add(ef),this._emulateAnimation(()=>{ze(e)})}hide(e){if(!this._config.isVisible){ze(e);return}this._getElement().classList.remove(ef),this._emulateAnimation(()=>{this.dispose(),ze(e)})}dispose(){this._isAppended&&(y.off(this._element,tf),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(AP),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=Dn(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),y.on(e,tf,()=>{ze(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){Cm(e,this._getElement(),this._config.isAnimated)}}const RP="focustrap",PP="bs.focustrap",Go=`.${PP}`,kP=`focusin${Go}`,DP=`keydown.tab${Go}`,xP="Tab",LP="forward",nf="backward",MP={autofocus:!0,trapElement:null},FP={autofocus:"boolean",trapElement:"element"};class Vm extends Pr{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return MP}static get DefaultType(){return FP}static get NAME(){return RP}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),y.off(document,Go),y.on(document,kP,e=>this._handleFocusin(e)),y.on(document,DP,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,y.off(document,Go))}_handleFocusin(e){const{trapElement:n}=this._config;if(e.target===document||e.target===n||n.contains(e.target))return;const s=V.focusableChildren(n);s.length===0?n.focus():this._lastTabNavDirection===nf?s[s.length-1].focus():s[0].focus()}_handleKeydown(e){e.key===xP&&(this._lastTabNavDirection=e.shiftKey?nf:LP)}}const sf=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",rf=".sticky-top",Kr="padding-right",of="margin-right";class uc{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Kr,n=>n+e),this._setElementAttributes(sf,Kr,n=>n+e),this._setElementAttributes(rf,of,n=>n-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Kr),this._resetElementAttributes(sf,Kr),this._resetElementAttributes(rf,of)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,n,s){const i=this.getWidth(),r=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+i)return;this._saveInitialAttribute(o,n);const a=window.getComputedStyle(o).getPropertyValue(n);o.style.setProperty(n,`${s(Number.parseFloat(a))}px`)};this._applyManipulationCallback(e,r)}_saveInitialAttribute(e,n){const s=e.style.getPropertyValue(n);s&&en.setDataAttribute(e,n,s)}_resetElementAttributes(e,n){const s=i=>{const r=en.getDataAttribute(i,n);if(r===null){i.style.removeProperty(n);return}en.removeDataAttribute(i,n),i.style.setProperty(n,r)};this._applyManipulationCallback(e,s)}_applyManipulationCallback(e,n){if(Zt(e)){n(e);return}for(const s of V.find(e,this._element))n(s)}}const $P="modal",UP="bs.modal",dt=`.${UP}`,VP=".data-api",HP="Escape",WP=`hide${dt}`,BP=`hidePrevented${dt}`,Hm=`hidden${dt}`,Wm=`show${dt}`,jP=`shown${dt}`,KP=`resize${dt}`,GP=`click.dismiss${dt}`,qP=`mousedown.dismiss${dt}`,zP=`keydown.dismiss${dt}`,YP=`click${dt}${VP}`,af="modal-open",QP="fade",lf="show",hl="modal-static",XP=".modal.show",JP=".modal-dialog",ZP=".modal-body",ek='[data-bs-toggle="modal"]',tk={backdrop:!0,focus:!0,keyboard:!0},nk={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class li extends St{constructor(e,n){super(e,n),this._dialog=V.findOne(JP,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new uc,this._addEventListeners()}static get Default(){return tk}static get DefaultType(){return nk}static get NAME(){return $P}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||y.trigger(this._element,Wm,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(af),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){!this._isShown||this._isTransitioning||y.trigger(this._element,WP).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(lf),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){y.off(window,dt),y.off(this._dialog,dt),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Um({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Vm({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const n=V.findOne(ZP,this._dialog);n&&(n.scrollTop=0),Rr(this._element),this._element.classList.add(lf);const s=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,y.trigger(this._element,jP,{relatedTarget:e})};this._queueCallback(s,this._dialog,this._isAnimated())}_addEventListeners(){y.on(this._element,zP,e=>{if(e.key===HP){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),y.on(window,KP,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),y.on(this._element,qP,e=>{y.one(this._element,GP,n=>{if(!(this._element!==e.target||this._element!==n.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(af),this._resetAdjustments(),this._scrollBar.reset(),y.trigger(this._element,Hm)})}_isAnimated(){return this._element.classList.contains(QP)}_triggerBackdropTransition(){if(y.trigger(this._element,BP).defaultPrevented)return;const n=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;s==="hidden"||this._element.classList.contains(hl)||(n||(this._element.style.overflowY="hidden"),this._element.classList.add(hl),this._queueCallback(()=>{this._element.classList.remove(hl),this._queueCallback(()=>{this._element.style.overflowY=s},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,n=this._scrollBar.getWidth(),s=n>0;if(s&&!e){const i=ht()?"paddingLeft":"paddingRight";this._element.style[i]=`${n}px`}if(!s&&e){const i=ht()?"paddingRight":"paddingLeft";this._element.style[i]=`${n}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,n){return this.each(function(){const s=li.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof s[e]>"u")throw new TypeError(`No method named "${e}"`);s[e](n)}})}}y.on(document,YP,ek,function(t){const e=V.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),y.one(e,Wm,i=>{i.defaultPrevented||y.one(e,Hm,()=>{Ei(this)&&this.focus()})});const n=V.findOne(XP);n&&li.getInstance(n).hide(),li.getOrCreateInstance(e).toggle(this)});wa(li);ft(li);const sk="offcanvas",ik="bs.offcanvas",dn=`.${ik}`,Bm=".data-api",rk=`load${dn}${Bm}`,ok="Escape",cf="show",uf="showing",hf="hiding",ak="offcanvas-backdrop",jm=".offcanvas.show",lk=`show${dn}`,ck=`shown${dn}`,uk=`hide${dn}`,df=`hidePrevented${dn}`,Km=`hidden${dn}`,hk=`resize${dn}`,dk=`click${dn}${Bm}`,fk=`keydown.dismiss${dn}`,pk='[data-bs-toggle="offcanvas"]',_k={backdrop:!0,keyboard:!0,scroll:!1},gk={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Ln extends St{constructor(e,n){super(e,n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return _k}static get DefaultType(){return gk}static get NAME(){return sk}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||y.trigger(this._element,lk,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new uc().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(uf);const s=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(cf),this._element.classList.remove(uf),y.trigger(this._element,ck,{relatedTarget:e})};this._queueCallback(s,this._element,!0)}hide(){if(!this._isShown||y.trigger(this._element,uk).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(hf),this._backdrop.hide();const n=()=>{this._element.classList.remove(cf,hf),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new uc().reset(),y.trigger(this._element,Km)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{if(this._config.backdrop==="static"){y.trigger(this._element,df);return}this.hide()},n=!!this._config.backdrop;return new Um({className:ak,isVisible:n,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:n?e:null})}_initializeFocusTrap(){return new Vm({trapElement:this._element})}_addEventListeners(){y.on(this._element,fk,e=>{if(e.key===ok){if(this._config.keyboard){this.hide();return}y.trigger(this._element,df)}})}static jQueryInterface(e){return this.each(function(){const n=Ln.getOrCreateInstance(this,e);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}y.on(document,dk,pk,function(t){const e=V.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),xn(this))return;y.one(e,Km,()=>{Ei(this)&&this.focus()});const n=V.findOne(jm);n&&n!==e&&Ln.getInstance(n).hide(),Ln.getOrCreateInstance(e).toggle(this)});y.on(window,rk,()=>{for(const t of V.find(jm))Ln.getOrCreateInstance(t).show()});y.on(window,hk,()=>{for(const t of V.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(t).position!=="fixed"&&Ln.getOrCreateInstance(t).hide()});wa(Ln);ft(Ln);const mk=/^aria-[\w-]*$/i,Gm={"*":["class","dir","id","lang","role",mk],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},vk=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Ek=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,yk=(t,e)=>{const n=t.nodeName.toLowerCase();return e.includes(n)?vk.has(n)?!!Ek.test(t.nodeValue):!0:e.filter(s=>s instanceof RegExp).some(s=>s.test(n))};function bk(t,e,n){if(!t.length)return t;if(n&&typeof n=="function")return n(t);const i=new window.DOMParser().parseFromString(t,"text/html"),r=[].concat(...i.body.querySelectorAll("*"));for(const o of r){const a=o.nodeName.toLowerCase();if(!Object.keys(e).includes(a)){o.remove();continue}const l=[].concat(...o.attributes),c=[].concat(e["*"]||[],e[a]||[]);for(const u of l)yk(u,c)||o.removeAttribute(u.nodeName)}return i.body.innerHTML}const Tk="TemplateFactory",wk={allowList:Gm,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Ck={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Ik={entry:"(string|element|function|null)",selector:"(string|element)"};class Sk extends Pr{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return wk}static get DefaultType(){return Ck}static get NAME(){return Tk}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[i,r]of Object.entries(this._config.content))this._setContent(e,r,i);const n=e.children[0],s=this._resolvePossibleFunction(this._config.extraClass);return s&&n.classList.add(...s.split(" ")),n}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[n,s]of Object.entries(e))super._typeCheckConfig({selector:n,entry:s},Ik)}_setContent(e,n,s){const i=V.findOne(s,e);if(i){if(n=this._resolvePossibleFunction(n),!n){i.remove();return}if(Zt(n)){this._putElementInTemplate(Dn(n),i);return}if(this._config.html){i.innerHTML=this._maybeSanitize(n);return}i.textContent=n}}_maybeSanitize(e){return this._config.sanitize?bk(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return ze(e,[void 0,this])}_putElementInTemplate(e,n){if(this._config.html){n.innerHTML="",n.append(e);return}n.textContent=e.textContent}}const Ak="tooltip",Nk=new Set(["sanitize","allowList","sanitizeFn"]),dl="fade",Ok="modal",Gr="show",Rk=".tooltip-inner",ff=`.${Ok}`,pf="hide.bs.modal",Pi="hover",fl="focus",pl="click",Pk="manual",kk="hide",Dk="hidden",xk="show",Lk="shown",Mk="inserted",Fk="click",$k="focusin",Uk="focusout",Vk="mouseenter",Hk="mouseleave",Wk={AUTO:"auto",TOP:"top",RIGHT:ht()?"left":"right",BOTTOM:"bottom",LEFT:ht()?"right":"left"},Bk={allowList:Gm,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},jk={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class bi extends St{constructor(e,n){if(typeof Em>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(e,n),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Bk}static get DefaultType(){return jk}static get NAME(){return Ak}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),y.off(this._element.closest(ff),pf,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const e=y.trigger(this._element,this.constructor.eventName(xk)),s=(Tm(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!s)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:r}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(r.append(i),y.trigger(this._element,this.constructor.eventName(Mk))),this._popper=this._createPopper(i),i.classList.add(Gr),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))y.on(a,"mouseover",jo);const o=()=>{y.trigger(this._element,this.constructor.eventName(Lk)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||y.trigger(this._element,this.constructor.eventName(kk)).defaultPrevented)return;if(this._getTipElement().classList.remove(Gr),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))y.off(i,"mouseover",jo);this._activeTrigger[pl]=!1,this._activeTrigger[fl]=!1,this._activeTrigger[Pi]=!1,this._isHovered=null;const s=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),y.trigger(this._element,this.constructor.eventName(Dk)))};this._queueCallback(s,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const n=this._getTemplateFactory(e).toHtml();if(!n)return null;n.classList.remove(dl,Gr),n.classList.add(`bs-${this.constructor.NAME}-auto`);const s=PO(this.constructor.NAME).toString();return n.setAttribute("id",s),this._isAnimated()&&n.classList.add(dl),n}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new Sk({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[Rk]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(dl)}_isShown(){return this.tip&&this.tip.classList.contains(Gr)}_createPopper(e){const n=ze(this._config.placement,[this,e,this._element]),s=Wk[n.toUpperCase()];return Mu(this._element,e,this._getPopperConfig(s))}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_resolvePossibleFunction(e){return ze(e,[this._element,this._element])}_getPopperConfig(e){const n={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:s=>{this._getTipElement().setAttribute("data-popper-placement",s.state.placement)}}]};return{...n,...ze(this._config.popperConfig,[void 0,n])}}_setListeners(){const e=this._config.trigger.split(" ");for(const n of e)if(n==="click")y.on(this._element,this.constructor.eventName(Fk),this._config.selector,s=>{const i=this._initializeOnDelegatedTarget(s);i._activeTrigger[pl]=!(i._isShown()&&i._activeTrigger[pl]),i.toggle()});else if(n!==Pk){const s=n===Pi?this.constructor.eventName(Vk):this.constructor.eventName($k),i=n===Pi?this.constructor.eventName(Hk):this.constructor.eventName(Uk);y.on(this._element,s,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusin"?fl:Pi]=!0,o._enter()}),y.on(this._element,i,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusout"?fl:Pi]=o._element.contains(r.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},y.on(this._element.closest(ff),pf,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,n){clearTimeout(this._timeout),this._timeout=setTimeout(e,n)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const n=en.getDataAttributes(this._element);for(const s of Object.keys(n))Nk.has(s)&&delete n[s];return e={...n,...typeof e=="object"&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=e.container===!1?document.body:Dn(e.container),typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title=="number"&&(e.title=e.title.toString()),typeof e.content=="number"&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const[n,s]of Object.entries(this._config))this.constructor.Default[n]!==s&&(e[n]=s);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each(function(){const n=bi.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}}ft(bi);const Kk="popover",Gk=".popover-header",qk=".popover-body",zk={...bi.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Yk={...bi.DefaultType,content:"(null|string|element|function)"};class Vu extends bi{static get Default(){return zk}static get DefaultType(){return Yk}static get NAME(){return Kk}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Gk]:this._getTitle(),[qk]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){const n=Vu.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}}ft(Vu);const Qk="scrollspy",Xk="bs.scrollspy",Hu=`.${Xk}`,Jk=".data-api",Zk=`activate${Hu}`,_f=`click${Hu}`,eD=`load${Hu}${Jk}`,tD="dropdown-item",Ns="active",nD='[data-bs-spy="scroll"]',_l="[href]",sD=".nav, .list-group",gf=".nav-link",iD=".nav-item",rD=".list-group-item",oD=`${gf}, ${iD} > ${gf}, ${rD}`,aD=".dropdown",lD=".dropdown-toggle",cD={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},uD={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Sa extends St{constructor(e,n){super(e,n),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return cD}static get DefaultType(){return uD}static get NAME(){return Qk}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=Dn(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold=="string"&&(e.threshold=e.threshold.split(",").map(n=>Number.parseFloat(n))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(y.off(this._config.target,_f),y.on(this._config.target,_f,_l,e=>{const n=this._observableSections.get(e.target.hash);if(n){e.preventDefault();const s=this._rootElement||window,i=n.offsetTop-this._element.offsetTop;if(s.scrollTo){s.scrollTo({top:i,behavior:"smooth"});return}s.scrollTop=i}}))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(n=>this._observerCallback(n),e)}_observerCallback(e){const n=o=>this._targetLinks.get(`#${o.target.id}`),s=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(n(o))},i=(this._rootElement||document.documentElement).scrollTop,r=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const o of e){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(n(o));continue}const a=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(r&&a){if(s(o),!i)return;continue}!r&&!a&&s(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=V.find(_l,this._config.target);for(const n of e){if(!n.hash||xn(n))continue;const s=V.findOne(decodeURI(n.hash),this._element);Ei(s)&&(this._targetLinks.set(decodeURI(n.hash),n),this._observableSections.set(n.hash,s))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(Ns),this._activateParents(e),y.trigger(this._element,Zk,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(tD)){V.findOne(lD,e.closest(aD)).classList.add(Ns);return}for(const n of V.parents(e,sD))for(const s of V.prev(n,oD))s.classList.add(Ns)}_clearActiveClass(e){e.classList.remove(Ns);const n=V.find(`${_l}.${Ns}`,e);for(const s of n)s.classList.remove(Ns)}static jQueryInterface(e){return this.each(function(){const n=Sa.getOrCreateInstance(this,e);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}y.on(window,eD,()=>{for(const t of V.find(nD))Sa.getOrCreateInstance(t)});ft(Sa);const hD="tab",dD="bs.tab",ws=`.${dD}`,fD=`hide${ws}`,pD=`hidden${ws}`,_D=`show${ws}`,gD=`shown${ws}`,mD=`click${ws}`,vD=`keydown${ws}`,ED=`load${ws}`,yD="ArrowLeft",mf="ArrowRight",bD="ArrowUp",vf="ArrowDown",gl="Home",Ef="End",is="active",yf="fade",ml="show",TD="dropdown",qm=".dropdown-toggle",wD=".dropdown-menu",vl=`:not(${qm})`,CD='.list-group, .nav, [role="tablist"]',ID=".nav-item, .list-group-item",SD=`.nav-link${vl}, .list-group-item${vl}, [role="tab"]${vl}`,zm='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',El=`${SD}, ${zm}`,AD=`.${is}[data-bs-toggle="tab"], .${is}[data-bs-toggle="pill"], .${is}[data-bs-toggle="list"]`;class ci extends St{constructor(e){super(e),this._parent=this._element.closest(CD),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),y.on(this._element,vD,n=>this._keydown(n)))}static get NAME(){return hD}show(){const e=this._element;if(this._elemIsActive(e))return;const n=this._getActiveElem(),s=n?y.trigger(n,fD,{relatedTarget:e}):null;y.trigger(e,_D,{relatedTarget:n}).defaultPrevented||s&&s.defaultPrevented||(this._deactivate(n,e),this._activate(e,n))}_activate(e,n){if(!e)return;e.classList.add(is),this._activate(V.getElementFromSelector(e));const s=()=>{if(e.getAttribute("role")!=="tab"){e.classList.add(ml);return}e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),y.trigger(e,gD,{relatedTarget:n})};this._queueCallback(s,e,e.classList.contains(yf))}_deactivate(e,n){if(!e)return;e.classList.remove(is),e.blur(),this._deactivate(V.getElementFromSelector(e));const s=()=>{if(e.getAttribute("role")!=="tab"){e.classList.remove(ml);return}e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),y.trigger(e,pD,{relatedTarget:n})};this._queueCallback(s,e,e.classList.contains(yf))}_keydown(e){if(![yD,mf,bD,vf,gl,Ef].includes(e.key))return;e.stopPropagation(),e.preventDefault();const n=this._getChildren().filter(i=>!xn(i));let s;if([gl,Ef].includes(e.key))s=n[e.key===gl?0:n.length-1];else{const i=[mf,vf].includes(e.key);s=Fu(n,e.target,i,!0)}s&&(s.focus({preventScroll:!0}),ci.getOrCreateInstance(s).show())}_getChildren(){return V.find(El,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,n){this._setAttributeIfNotExists(e,"role","tablist");for(const s of n)this._setInitialAttributesOnChild(s)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const n=this._elemIsActive(e),s=this._getOuterElement(e);e.setAttribute("aria-selected",n),s!==e&&this._setAttributeIfNotExists(s,"role","presentation"),n||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const n=V.getElementFromSelector(e);n&&(this._setAttributeIfNotExists(n,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(n,"aria-labelledby",`${e.id}`))}_toggleDropDown(e,n){const s=this._getOuterElement(e);if(!s.classList.contains(TD))return;const i=(r,o)=>{const a=V.findOne(r,s);a&&a.classList.toggle(o,n)};i(qm,is),i(wD,ml),s.setAttribute("aria-expanded",n)}_setAttributeIfNotExists(e,n,s){e.hasAttribute(n)||e.setAttribute(n,s)}_elemIsActive(e){return e.classList.contains(is)}_getInnerElement(e){return e.matches(El)?e:V.findOne(El,e)}_getOuterElement(e){return e.closest(ID)||e}static jQueryInterface(e){return this.each(function(){const n=ci.getOrCreateInstance(this);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}y.on(document,mD,zm,function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),!xn(this)&&ci.getOrCreateInstance(this).show()});y.on(window,ED,()=>{for(const t of V.find(AD))ci.getOrCreateInstance(t)});ft(ci);const ND="toast",OD="bs.toast",Bn=`.${OD}`,RD=`mouseover${Bn}`,PD=`mouseout${Bn}`,kD=`focusin${Bn}`,DD=`focusout${Bn}`,xD=`hide${Bn}`,LD=`hidden${Bn}`,MD=`show${Bn}`,FD=`shown${Bn}`,$D="fade",bf="hide",qr="show",zr="showing",UD={animation:"boolean",autohide:"boolean",delay:"number"},VD={animation:!0,autohide:!0,delay:5e3};class Aa extends St{constructor(e,n){super(e,n),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return VD}static get DefaultType(){return UD}static get NAME(){return ND}show(){if(y.trigger(this._element,MD).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add($D);const n=()=>{this._element.classList.remove(zr),y.trigger(this._element,FD),this._maybeScheduleHide()};this._element.classList.remove(bf),Rr(this._element),this._element.classList.add(qr,zr),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this.isShown()||y.trigger(this._element,xD).defaultPrevented)return;const n=()=>{this._element.classList.add(bf),this._element.classList.remove(zr,qr),y.trigger(this._element,LD)};this._element.classList.add(zr),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(qr),super.dispose()}isShown(){return this._element.classList.contains(qr)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,n){switch(e.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=n;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=n;break}}if(n){this._clearTimeout();return}const s=e.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){y.on(this._element,RD,e=>this._onInteraction(e,!0)),y.on(this._element,PD,e=>this._onInteraction(e,!1)),y.on(this._element,kD,e=>this._onInteraction(e,!0)),y.on(this._element,DD,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const n=Aa.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}wa(Aa);ft(Aa);const Na=Ny(HN);Na.config.globalProperties.$auth=eN;Na.config.globalProperties.$db=Rs;Na.directive("prevent-auto-submit",{mounted(t){t.addEventListener("submit",e=>{e.isTrusted||(e.preventDefault(),e.stopImmediatePropagation())})}});Na.mount("#app");
