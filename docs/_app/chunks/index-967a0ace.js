function w(){}const W=t=>t;function at(t,e){for(const n in e)t[n]=e[n];return t}function Z(t){return t()}function X(){return Object.create(null)}function v(t){t.forEach(Z)}function T(t){return typeof t=="function"}function Pt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function Dt(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function ft(t){return Object.keys(t).length===0}function _t(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Lt(t,e,n){t.$$.on_destroy.push(_t(e,n))}function Tt(t,e,n,r){if(t){const s=tt(t,e,n,r);return t[0](s)}}function tt(t,e,n,r){return t[1]&&r?at(n.ctx.slice(),t[1](r(e))):n.ctx}function zt(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],i=Math.max(e.dirty.length,s.length);for(let l=0;l<i;l+=1)o[l]=e.dirty[l]|s[l];return o}return e.dirty|s}return e.dirty}function Bt(t,e,n,r,s,o){if(s){const i=tt(e,n,r,o);t.p(i,s)}}function Ft(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Ht(t){return t==null?"":t}const et=typeof window!="undefined";let G=et?()=>window.performance.now():()=>Date.now(),J=et?t=>requestAnimationFrame(t):w;const k=new Set;function nt(t){k.forEach(e=>{e.c(t)||(k.delete(e),e.f())}),k.size!==0&&J(nt)}function K(t){let e;return k.size===0&&J(nt),{promise:new Promise(n=>{k.add(e={c:t,f:n})}),abort(){k.delete(e)}}}let z=!1;function dt(){z=!0}function ht(){z=!1}function mt(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function pt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,_=(s>0&&e[n[s]].claim_order<=u?s+1:mt(1,s,a=>e[n[a]].claim_order,u))-1;r[c]=n[_]+1;const f=_+1;n[f]=c,s=Math.max(f,s)}const o=[],i=[];let l=e.length-1;for(let c=n[s]+1;c!=0;c=r[c-1]){for(o.push(e[c-1]);l>=c;l--)i.push(e[l]);l--}for(;l>=0;l--)i.push(e[l]);o.reverse(),i.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<i.length;c++){for(;u<o.length&&i[c].claim_order>=o[u].claim_order;)u++;const _=u<o.length?o[u]:null;t.insertBefore(i[c],_)}}function yt(t,e){t.appendChild(e)}function it(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function gt(t){const e=rt("style");return bt(it(t),e),e.sheet}function bt(t,e){yt(t.head||t,e)}function xt(t,e){if(z){for(pt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function It(t,e,n){z&&!n?xt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function $t(t){t.parentNode.removeChild(t)}function Wt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function rt(t){return document.createElement(t)}function Q(t){return document.createTextNode(t)}function Gt(){return Q(" ")}function Jt(){return Q("")}function Kt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Qt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function wt(t){return Array.from(t.childNodes)}function vt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function st(t,e,n,r,s=!1){vt(t);const o=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const l=t[i];if(e(l)){const c=n(l);return c===void 0?t.splice(i,1):t[i]=c,s||(t.claim_info.last_index=i),l}}for(let i=t.claim_info.last_index-1;i>=0;i--){const l=t[i];if(e(l)){const c=n(l);return c===void 0?t.splice(i,1):t[i]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,l}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function kt(t,e,n,r){return st(t,s=>s.nodeName===e,s=>{const o=[];for(let i=0;i<s.attributes.length;i++){const l=s.attributes[i];n[l.name]||o.push(l.name)}o.forEach(i=>s.removeAttribute(i))},()=>r(e))}function Ut(t,e,n){return kt(t,e,n,rt)}function Et(t,e){return st(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>Q(e),!0)}function Vt(t){return Et(t," ")}function Xt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Yt(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Zt(t,e,n){t.classList[n?"add":"remove"](e)}function At(t,e,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,!1,e),r}function te(t,e=document.body){return Array.from(e.querySelectorAll(t))}const O=new Map;let P=0;function Ct(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Nt(t,e){const n={stylesheet:gt(e),rules:{}};return O.set(t,n),n}function D(t,e,n,r,s,o,i,l=0){const c=16.666/r;let u=`{
`;for(let m=0;m<=1;m+=c){const g=e+(n-e)*o(m);u+=m*100+`%{${i(g,1-g)}}
`}const _=u+`100% {${i(n,1-n)}}
}`,f=`__svelte_${Ct(_)}_${l}`,a=it(t),{stylesheet:d,rules:h}=O.get(a)||Nt(a,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${r}ms linear ${s}ms 1 both`,P+=1,f}function L(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),s=n.length-r.length;s&&(t.style.animation=r.join(", "),P-=s,P||jt())}function jt(){J(()=>{P||(O.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),O.clear())})}let j;function N(t){j=t}function B(){if(!j)throw new Error("Function called outside component initialization");return j}function ee(t){B().$$.on_mount.push(t)}function ne(t){B().$$.after_update.push(t)}function ie(t,e){B().$$.context.set(t,e)}function re(t){return B().$$.context.get(t)}const C=[],Y=[],q=[],H=[],ct=Promise.resolve();let I=!1;function lt(){I||(I=!0,ct.then(ot))}function se(){return lt(),ct}function E(t){q.push(t)}function ce(t){H.push(t)}const F=new Set;let M=0;function ot(){const t=j;do{for(;M<C.length;){const e=C[M];M++,N(e),St(e.$$)}for(N(null),C.length=0,M=0;Y.length;)Y.pop()();for(let e=0;e<q.length;e+=1){const n=q[e];F.has(n)||(F.add(n),n())}q.length=0}while(C.length);for(;H.length;)H.pop()();I=!1,F.clear(),N(t)}function St(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}let A;function U(){return A||(A=Promise.resolve(),A.then(()=>{A=null})),A}function $(t,e,n){t.dispatchEvent(At(`${e?"intro":"outro"}${n}`))}const R=new Set;let y;function le(){y={r:0,c:[],p:y}}function oe(){y.r||v(y.c),y=y.p}function Mt(t,e){t&&t.i&&(R.delete(t),t.i(e))}function ue(t,e,n,r){if(t&&t.o){if(R.has(t))return;R.add(t),y.c.push(()=>{R.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const V={duration:0};function ae(t,e,n){let r=e(t,n),s=!1,o,i,l=0;function c(){o&&L(t,o)}function u(){const{delay:f=0,duration:a=300,easing:d=W,tick:h=w,css:p}=r||V;p&&(o=D(t,0,1,a,f,d,p,l++)),h(0,1);const m=G()+f,g=m+a;i&&i.abort(),s=!0,E(()=>$(t,!0,"start")),i=K(b=>{if(s){if(b>=g)return h(1,0),$(t,!0,"end"),c(),s=!1;if(b>=m){const x=d((b-m)/a);h(x,1-x)}}return s})}let _=!1;return{start(){_||(_=!0,L(t),T(r)?(r=r(),U().then(u)):u())},invalidate(){_=!1},end(){s&&(c(),s=!1)}}}function fe(t,e,n){let r=e(t,n),s=!0,o;const i=y;i.r+=1;function l(){const{delay:c=0,duration:u=300,easing:_=W,tick:f=w,css:a}=r||V;a&&(o=D(t,1,0,u,c,_,a));const d=G()+c,h=d+u;E(()=>$(t,!1,"start")),K(p=>{if(s){if(p>=h)return f(0,1),$(t,!1,"end"),--i.r||v(i.c),!1;if(p>=d){const m=_((p-d)/u);f(1-m,m)}}return s})}return T(r)?U().then(()=>{r=r(),l()}):l(),{end(c){c&&r.tick&&r.tick(1,0),s&&(o&&L(t,o),s=!1)}}}function _e(t,e,n,r){let s=e(t,n),o=r?0:1,i=null,l=null,c=null;function u(){c&&L(t,c)}function _(a,d){const h=a.b-o;return d*=Math.abs(h),{a:o,b:a.b,d:h,duration:d,start:a.start,end:a.start+d,group:a.group}}function f(a){const{delay:d=0,duration:h=300,easing:p=W,tick:m=w,css:g}=s||V,b={start:G()+d,b:a};a||(b.group=y,y.r+=1),i||l?l=b:(g&&(u(),c=D(t,o,a,h,d,p,g)),a&&m(0,1),i=_(b,h),E(()=>$(t,a,"start")),K(x=>{if(l&&x>l.start&&(i=_(l,h),l=null,$(t,i.b,"start"),g&&(u(),c=D(t,o,i.b,i.duration,0,p,s.css))),i){if(x>=i.end)m(o=i.b,1-o),$(t,i.b,"end"),l||(i.b?u():--i.group.r||v(i.group.c)),i=null;else if(x>=i.start){const ut=x-i.start;o=i.a+i.d*p(ut/i.duration),m(o,1-o)}}return!!(i||l)}))}return{run(a){T(s)?U().then(()=>{s=s(),f(a)}):f(a)},end(){u(),i=l=null}}}function de(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const i=t[o],l=e[o];if(l){for(const c in i)c in l||(r[c]=1);for(const c in l)s[c]||(n[c]=l[c],s[c]=1);t[o]=l}else for(const c in i)s[c]=1}for(const i in r)i in n||(n[i]=void 0);return n}function he(t){return typeof t=="object"&&t!==null?t:{}}function me(t,e,n){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function pe(t){t&&t.c()}function ye(t,e){t&&t.l(e)}function qt(t,e,n,r){const{fragment:s,on_mount:o,on_destroy:i,after_update:l}=t.$$;s&&s.m(e,n),r||E(()=>{const c=o.map(Z).filter(T);i?i.push(...c):v(c),t.$$.on_mount=[]}),l.forEach(E)}function Rt(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ot(t,e){t.$$.dirty[0]===-1&&(C.push(t),lt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ge(t,e,n,r,s,o,i,l=[-1]){const c=j;N(t);const u=t.$$={fragment:null,ctx:null,props:o,update:w,not_equal:s,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:X(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};i&&i(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(f,a,...d)=>{const h=d.length?d[0]:a;return u.ctx&&s(u.ctx[f],u.ctx[f]=h)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](h),_&&Ot(t,f)),a}):[],u.update(),_=!0,v(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){dt();const f=wt(e.target);u.fragment&&u.fragment.l(f),f.forEach($t)}else u.fragment&&u.fragment.c();e.intro&&Mt(t.$$.fragment),qt(t,e.target,e.anchor,e.customElement),ht(),ot()}N(c)}class be{$destroy(){Rt(this,1),this.$destroy=w}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!ft(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{he as A,Rt as B,at as C,se as D,w as E,Tt as F,Bt as G,Ft as H,zt as I,xt as J,Kt as K,ce as L,Wt as M,Y as N,me as O,Ht as P,v as Q,Lt as R,be as S,Zt as T,E as U,_e as V,re as W,ae as X,fe as Y,te as Z,Dt as _,wt as a,Qt as b,Ut as c,$t as d,rt as e,Yt as f,It as g,Et as h,ge as i,Xt as j,Gt as k,Jt as l,Vt as m,le as n,ue as o,oe as p,Mt as q,ie as r,Pt as s,Q as t,ne as u,ee as v,pe as w,ye as x,qt as y,de as z};
