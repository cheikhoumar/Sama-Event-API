function A(){}const ct=t=>t;function P(t,e){for(const n in e)t[n]=e[n];return t}function q(t){return t()}function st(){return Object.create(null)}function H(t){t.forEach(q)}function B(t){return typeof t=="function"}function lt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let m;function ot(t,e){return t===e?!0:(m||(m=document.createElement("a")),m.href=e,t===m.href)}function ut(t){return Object.keys(t).length===0}function L(t,...e){if(t==null){for(const r of e)r(void 0);return A}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function at(t,e,n){t.$$.on_destroy.push(L(e,n))}function ft(t,e,n,r){if(t){const i=C(t,e,n,r);return t[0](i)}}function C(t,e,n,r){return t[1]&&r?P(n.ctx.slice(),t[1](r(e))):n.ctx}function _t(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const o=[],c=Math.max(e.dirty.length,i.length);for(let l=0;l<c;l+=1)o[l]=e.dirty[l]|i[l];return o}return e.dirty|i}return e.dirty}function dt(t,e,n,r,i,o){if(i){const c=C(e,n,r,o);t.p(c,i)}}function ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function mt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function pt(t,e){const n={};e=new Set(e);for(const r in t)!e.has(r)&&r[0]!=="$"&&(n[r]=t[r]);return n}function yt(t){const e={};for(const n in t)e[n]=!0;return e}function bt(t,e,n){return t.set(n),e}function gt(t){return t&&B(t.destroy)?t.destroy:A}function xt(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const M=["",!0,1,"true","contenteditable"];let y=!1;function wt(){y=!0}function vt(){y=!1}function R(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function F(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&s.push(a)}e=s}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let s=0;s<e.length;s++){const u=e[s].claim_order,a=(i>0&&e[n[i]].claim_order<=u?i+1:R(1,i,T=>e[n[T]].claim_order,u))-1;r[s]=n[a]+1;const k=a+1;n[k]=s,i=Math.max(k,i)}const o=[],c=[];let l=e.length-1;for(let s=n[i]+1;s!=0;s=r[s-1]){for(o.push(e[s-1]);l>=s;l--)c.push(e[l]);l--}for(;l>=0;l--)c.push(e[l]);o.reverse(),c.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<c.length;s++){for(;u<o.length&&c[s].claim_order>=o[u].claim_order;)u++;const a=u<o.length?o[u]:null;t.insertBefore(c[s],a)}}function z(t,e){t.appendChild(e)}function I(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Et(t){const e=j("style");return e.textContent="/* empty */",U(I(t),e),e.sheet}function U(t,e){return z(t.head||t,e),e.sheet}function W(t,e){if(y){for(F(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function kt(t,e,n){y&&!n?W(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Nt(t){t.parentNode&&t.parentNode.removeChild(t)}function At(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function j(t){return document.createElement(t)}function G(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function Ct(){return v(" ")}function jt(){return v("")}function Dt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Ot(t){return function(e){return e.preventDefault(),t.call(this,e)}}function St(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function E(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const J=["width","height"];function K(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)e[r]==null?t.removeAttribute(r):r==="style"?t.style.cssText=e[r]:r==="__value"?t.value=t[r]=e[r]:n[r]&&n[r].set&&J.indexOf(r)===-1?t[r]=e[r]:E(t,r,e[r])}function Tt(t,e){for(const n in e)E(t,n,e[n])}function Q(t,e){Object.keys(e).forEach(n=>{V(t,n,e[n])})}function V(t,e,n){const r=e.toLowerCase();r in t?t[r]=typeof t[r]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:E(t,e,n)}function Pt(t){return/-/.test(t)?Q:K}function qt(t){return t.dataset.svelteH}function Ht(t){return Array.from(t.childNodes)}function X(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function D(t,e,n,r,i=!1){X(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const l=t[c];if(e(l)){const s=n(l);return s===void 0?t.splice(c,1):t[c]=s,i||(t.claim_info.last_index=c),l}}for(let c=t.claim_info.last_index-1;c>=0;c--){const l=t[c];if(e(l)){const s=n(l);return s===void 0?t.splice(c,1):t[c]=s,i?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,l}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function O(t,e,n,r){return D(t,i=>i.nodeName===e,i=>{const o=[];for(let c=0;c<i.attributes.length;c++){const l=i.attributes[c];n[l.name]||o.push(l.name)}o.forEach(c=>i.removeAttribute(c))},()=>r(e))}function Bt(t,e,n){return O(t,e,n,j)}function Lt(t,e,n){return O(t,e,n,G)}function Y(t,e){return D(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>v(e),!0)}function Mt(t){return Y(t," ")}function Z(t,e){e=""+e,t.data!==e&&(t.data=e)}function $(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Rt(t,e,n){~M.indexOf(n)?$(t,e):Z(t,e)}function Ft(t,e){t.value=e??""}function zt(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function tt(t,e,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:r})}function It(t,e){const n=[];let r=0;for(const i of e.childNodes)if(i.nodeType===8){const o=i.textContent.trim();o===`HEAD_${t}_END`?(r-=1,n.push(i)):o===`HEAD_${t}_START`&&(r+=1,n.push(i))}else r>0&&n.push(i);return n}function Ut(t,e){return new t(e)}let p;function b(t){p=t}function h(){if(!p)throw new Error("Function called outside component initialization");return p}function Wt(t){h().$$.on_mount.push(t)}function Gt(t){h().$$.after_update.push(t)}function Jt(){const t=h();return(e,n,{cancelable:r=!1}={})=>{const i=t.$$.callbacks[e];if(i){const o=tt(e,n,{cancelable:r});return i.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}function Kt(t,e){return h().$$.context.set(t,e),e}function Qt(t){return h().$$.context.get(t)}function Vt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const d=[],N=[];let _=[];const x=[],S=Promise.resolve();let w=!1;function et(){w||(w=!0,S.then(rt))}function Xt(){return et(),S}function nt(t){_.push(t)}function Yt(t){x.push(t)}const g=new Set;let f=0;function rt(){if(f!==0)return;const t=p;do{try{for(;f<d.length;){const e=d[f];f++,b(e),it(e.$$)}}catch(e){throw d.length=0,f=0,e}for(b(null),d.length=0,f=0;N.length;)N.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];g.has(n)||(g.add(n),n())}_.length=0}while(d.length);for(;x.length;)x.pop()();w=!1,g.clear(),b(t)}function it(t){if(t.fragment!==null){t.update(),H(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(nt)}}function Zt(t){const e=[],n=[];_.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),_=e}export{nt as $,pt as A,mt as B,Vt as C,G as D,Lt as E,Tt as F,Dt as G,H,Qt as I,B as J,yt as K,K as L,Pt as M,Ft as N,gt as O,Kt as P,Jt as Q,Gt as R,Wt as S,zt as T,Ut as U,Xt as V,Ot as W,St as X,It as Y,xt as Z,ct as _,Ct as a,I as a0,Et as a1,tt as a2,st as a3,rt as a4,ut as a5,Zt as a6,p as a7,b as a8,q as a9,d as aa,et as ab,wt as ac,vt as ad,bt as ae,Rt as af,Ht as b,Bt as c,Y as d,j as e,Nt as f,Mt as g,W as h,kt as i,Z as j,at as k,E as l,ft as m,A as n,ot as o,ht as p,_t as q,N as r,lt as s,v as t,dt as u,jt as v,Yt as w,qt as x,At as y,P as z};
