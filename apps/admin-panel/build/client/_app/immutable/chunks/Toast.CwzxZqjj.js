import{s as U,z as h,A as N,K as W,B as S,C as X,m as C,a as z,e as Y,v as A,g as J,c as Z,b as x,f as b,l as K,i as d,u as y,p as v,q as I,J as $}from"./scheduler.DFZBBKhI.js";import{S as ee,i as te,c as T,a as B,m as F,t as m,b as g,d as j,g as M,f as P}from"./index.LUCKkj9k.js";import{g as se,a as le,t as V}from"./bundle-mjs.CuhWIVwh.js";import{T as oe,C as ae}from"./CloseButton.vrK9mPVw.js";import{F as ne}from"./Frame.DNz3Vx4g.js";const re=a=>({close:a&131072}),w=a=>({close:a[17]}),ie=a=>({}),G=a=>({});function H(a){let e,o;return e=new ne({props:{rounded:!0,color:"none",class:a[3],$$slots:{default:[fe]},$$scope:{ctx:a}}}),{c(){T(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,l){F(e,t,l),o=!0},p(t,l){const s={};l&8&&(s.class=t[3]),l&8192&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){o||(m(e.$$.fragment,t),o=!0)},o(t){g(e.$$.fragment,t),o=!1},d(t){j(e,t)}}}function fe(a){let e;const o=a[11].icon,t=C(o,a,a[13],G);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,s){t&&t.m(l,s),e=!0},p(l,s){t&&t.p&&(!e||s&8192)&&y(t,o,l,l[13],e?I(o,l[13],s,ie):v(l[13]),G)},i(l){e||(m(t,l),e=!0)},o(l){g(t,l),e=!1},d(l){t&&t.d(l)}}}function L(a){let e;const o=a[11]["close-button"],t=C(o,a,a[13],w),l=t||ce(a);return{c(){l&&l.c()},l(s){l&&l.l(s)},m(s,n){l&&l.m(s,n),e=!0},p(s,n){t?t.p&&(!e||n&139264)&&y(t,o,s,s[13],e?I(o,s[13],n,re):v(s[13]),w):l&&l.p&&(!e||n&131072)&&l.p(s,e?n:-1)},i(s){e||(m(l,s),e=!0)},o(s){g(l,s),e=!1},d(s){l&&l.d(s)}}}function ce(a){let e,o;return e=new ae({props:{class:ge}}),e.$on("click",function(){$(a[17])&&a[17].apply(this,arguments)}),{c(){T(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,l){F(e,t,l),o=!0},p(t,l){a=t},i(t){o||(m(e.$$.fragment,t),o=!0)},o(t){g(e.$$.fragment,t),o=!1},d(t){j(e,t)}}}function ue(a){let e,o,t,l,s,n=a[5].icon&&H(a);const _=a[11].default,u=C(_,a,a[13],null);let i=a[0]&&L(a);return{c(){n&&n.c(),e=z(),o=Y("div"),u&&u.c(),t=z(),i&&i.c(),l=A(),this.h()},l(r){n&&n.l(r),e=J(r),o=Z(r,"DIV",{class:!0});var f=x(o);u&&u.l(f),f.forEach(b),t=J(r),i&&i.l(r),l=A(),this.h()},h(){K(o,"class",a[1])},m(r,f){n&&n.m(r,f),d(r,e,f),d(r,o,f),u&&u.m(o,null),d(r,t,f),i&&i.m(r,f),d(r,l,f),s=!0},p(r,f){r[5].icon?n?(n.p(r,f),f&32&&m(n,1)):(n=H(r),n.c(),m(n,1),n.m(e.parentNode,e)):n&&(M(),g(n,1,1,()=>{n=null}),P()),u&&u.p&&(!s||f&8192)&&y(u,_,r,r[13],s?I(_,r[13],f,null):v(r[13]),null),(!s||f&2)&&K(o,"class",r[1]),r[0]?i?(i.p(r,f),f&1&&m(i,1)):(i=L(r),i.c(),m(i,1),i.m(l.parentNode,l)):i&&(M(),g(i,1,1,()=>{i=null}),P())},i(r){s||(m(n),m(u,r),m(i),s=!0)},o(r){g(n),g(u,r),g(i),s=!1},d(r){r&&(b(e),b(o),b(t),b(l)),n&&n.d(r),u&&u.d(r),i&&i.d(r)}}}function me(a){let e,o;const t=[{rounded:!0},{dismissable:a[0]},{color:"none"},{role:"alert"},a[4],{class:a[2]}];let l={$$slots:{default:[ue,({close:s})=>({17:s}),({close:s})=>s?131072:0]},$$scope:{ctx:a}};for(let s=0;s<t.length;s+=1)l=h(l,t[s]);return e=new oe({props:l}),e.$on("close",a[12]),{c(){T(e.$$.fragment)},l(s){B(e.$$.fragment,s)},m(s,n){F(e,s,n),o=!0},p(s,[n]){const _=n&21?se(t,[t[0],n&1&&{dismissable:s[0]},t[2],t[3],n&16&&le(s[4]),n&4&&{class:s[2]}]):{};n&139307&&(_.$$scope={dirty:n,ctx:s}),e.$set(_)},i(s){o||(m(e.$$.fragment,s),o=!0)},o(s){g(e.$$.fragment,s),o=!1},d(s){j(e,s)}}}const ge="-mx-1.5 -my-1.5 text-gray-400 hover:text-gray-900 focus:!ring-gray-300 hover:bg-gray-100 dark:text-gray-500 dark:hover:text-white dark:hover:bg-gray-700";function _e(a,e,o){const t=["dismissable","color","position","divClass","defaultIconClass","contentClass","align"];let l=N(e,t),{$$slots:s={},$$scope:n}=e;const _=W(s);let{dismissable:u=!0}=e,{color:i="primary"}=e,{position:r="none"}=e,{divClass:f="w-full max-w-xs p-4 text-gray-500 bg-white shadow dark:text-gray-400 dark:bg-gray-800 gap-3"}=e,{defaultIconClass:p="w-8 h-8"}=e,{contentClass:q="w-full text-sm font-normal"}=e,{align:k=!0}=e;const O={"top-left":"absolute top-5 start-5","top-right":"absolute top-5 end-5","bottom-left":"absolute bottom-5 start-5","bottom-right":"absolute bottom-5 end-5",none:""};let D;const Q={primary:"text-primary-500 bg-primary-100 dark:bg-primary-800 dark:text-primary-200",gray:"text-gray-500 bg-gray-100 dark:bg-gray-700 dark:text-gray-200",red:"text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200",yellow:"text-yellow-500 bg-yellow-100 dark:bg-yellow-800 dark:text-yellow-200",green:"text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200",blue:"text-blue-500 bg-blue-100 dark:bg-blue-800 dark:text-blue-200",indigo:"text-indigo-500 bg-indigo-100 dark:bg-indigo-800 dark:text-indigo-200",purple:"text-purple-500 bg-purple-100 dark:bg-purple-800 dark:text-purple-200",orange:"text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200",none:""};let E;function R(c){X.call(this,a,c)}return a.$$set=c=>{o(16,e=h(h({},e),S(c))),o(4,l=N(e,t)),"dismissable"in c&&o(0,u=c.dismissable),"color"in c&&o(6,i=c.color),"position"in c&&o(7,r=c.position),"divClass"in c&&o(8,f=c.divClass),"defaultIconClass"in c&&o(9,p=c.defaultIconClass),"contentClass"in c&&o(1,q=c.contentClass),"align"in c&&o(10,k=c.align),"$$scope"in c&&o(13,n=c.$$scope)},a.$$.update=()=>{o(2,D=V("flex",k?"items-center":"items-start",f,O[r],e.class)),a.$$.dirty&576&&o(3,E=V("inline-flex items-center justify-center shrink-0",Q[i],p))},e=S(e),[u,q,D,E,l,_,i,r,f,p,k,s,R,n]}class Ce extends ee{constructor(e){super(),te(this,e,_e,me,U,{dismissable:0,color:6,position:7,divClass:8,defaultIconClass:9,contentClass:1,align:10})}}export{Ce as T};
