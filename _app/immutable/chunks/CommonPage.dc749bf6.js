import{s as S,q as V,N as j,a as v,f as T,c as y,g as C,h as k,d as p,j as q,i as g,J as w,Y as J,P as N,Q,R,l as Y,m as z,p as A}from"./scheduler.15df8748.js";import{S as B,i as F,f as G,b as D,d as E,m as I,a as d,t as $,e as M}from"./index.4d7b2f74.js";import{M as H}from"./MainTitle.05d771f6.js";import{T as K}from"./TabTitle.6681b8d6.js";function L(l){let e;return{c(){e=Y(l[0])},l(s){e=z(s,l[0])},m(s,r){g(s,e,r)},p(s,r){r&1&&A(e,s[0])},d(s){s&&p(e)}}}function O(l){let e,s,r,f,i,_,n,m;function P(t){l[2](t)}let b={};l[0]!==void 0&&(b.title=l[0]),e=new K({props:b}),V.push(()=>G(e,"title",P)),i=new H({props:{$$slots:{default:[L]},$$scope:{ctx:l}}});const u=l[1].default,o=j(u,l,l[3],null);return{c(){D(e.$$.fragment),r=v(),f=T("div"),D(i.$$.fragment),_=v(),n=T("div"),o&&o.c(),this.h()},l(t){E(e.$$.fragment,t),r=y(t),f=C(t,"DIV",{class:!0});var a=k(f);E(i.$$.fragment,a),_=y(a),n=C(a,"DIV",{class:!0});var c=k(n);o&&o.l(c),c.forEach(p),a.forEach(p),this.h()},h(){q(n,"class","col gap-5 flex-1"),q(f,"class","flex-1 col gap-5 px-2 sm:px-4 md:px-6 py-4 sm:py-8 md:py-12")},m(t,a){I(e,t,a),g(t,r,a),g(t,f,a),I(i,f,null),w(f,_),w(f,n),o&&o.m(n,null),m=!0},p(t,[a]){const c={};!s&&a&1&&(s=!0,c.title=t[0],J(()=>s=!1)),e.$set(c);const h={};a&9&&(h.$$scope={dirty:a,ctx:t}),i.$set(h),o&&o.p&&(!m||a&8)&&N(o,u,t,t[3],m?R(u,t[3],a,null):Q(t[3]),null)},i(t){m||(d(e.$$.fragment,t),d(i.$$.fragment,t),d(o,t),m=!0)},o(t){$(e.$$.fragment,t),$(i.$$.fragment,t),$(o,t),m=!1},d(t){t&&(p(r),p(f)),M(e,t),M(i),o&&o.d(t)}}}function U(l,e,s){let{$$slots:r={},$$scope:f}=e,{title:i="Title"}=e;function _(n){i=n,s(0,i)}return l.$$set=n=>{"title"in n&&s(0,i=n.title),"$$scope"in n&&s(3,f=n.$$scope)},[i,r,_,f]}class tt extends B{constructor(e){super(),F(this,e,U,O,S,{title:0})}}export{tt as C};
