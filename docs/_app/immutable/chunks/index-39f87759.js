function p(){}const at=t=>t;function G(t,n){for(const e in n)t[e]=n[e];return t}function M(t){return t()}function T(){return Object.create(null)}function g(t){t.forEach(M)}function O(t){return typeof t=="function"}function _t(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function I(t){return Object.keys(t).length===0}function J(t,...n){if(t==null)return p;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function dt(t,n,e){t.$$.on_destroy.push(J(n,e))}function ht(t,n,e,i){if(t){const r=L(t,n,e,i);return t[0](r)}}function L(t,n,e,i){return t[1]&&i?G(e.ctx.slice(),t[1](i(n))):e.ctx}function mt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(n.dirty.length,r.length);for(let u=0;u<c;u+=1)o[u]=n.dirty[u]|r[u];return o}return n.dirty|r}return n.dirty}function pt(t,n,e,i,r,o){if(r){const c=L(n,e,i,o);t.p(c,r)}}function yt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function gt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function xt(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}function $t(t,n,e){return t.set(e),n}const z=typeof window<"u";let bt=z?()=>window.performance.now():()=>Date.now(),B=z?t=>requestAnimationFrame(t):p;const d=new Set;function H(t){d.forEach(n=>{n.c(t)||(d.delete(n),n.f())}),d.size!==0&&B(H)}function wt(t){let n;return d.size===0&&B(H),{promise:new Promise(e=>{d.add(n={c:t,f:e})}),abort(){d.delete(n)}}}let E=!1;function K(){E=!0}function Q(){E=!1}function U(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function V(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let l=0;l<n.length;l++){const a=n[l];a.claim_order!==void 0&&s.push(a)}n=s}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let s=0;s<n.length;s++){const l=n[s].claim_order,a=(r>0&&n[e[r]].claim_order<=l?r+1:U(1,r,$=>n[e[$]].claim_order,l))-1;i[s]=e[a]+1;const f=a+1;e[f]=s,r=Math.max(f,r)}const o=[],c=[];let u=n.length-1;for(let s=e[r]+1;s!=0;s=i[s-1]){for(o.push(n[s-1]);u>=s;u--)c.push(n[u]);u--}for(;u>=0;u--)c.push(n[u]);o.reverse(),c.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<c.length;s++){for(;l<o.length&&c[s].claim_order>=o[l].claim_order;)l++;const a=l<o.length?o[l]:null;t.insertBefore(c[s],a)}}function X(t,n){if(E){for(V(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function vt(t,n,e){E&&!e?X(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function Y(t){t.parentNode.removeChild(t)}function Et(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function Z(t){return document.createElement(t)}function j(t){return document.createTextNode(t)}function kt(){return j(" ")}function At(){return j("")}function Nt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function St(t){return function(n){return n.preventDefault(),t.call(this,n)}}function tt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function jt(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in n)n[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=n[i]:i==="__value"?t.value=t[i]=n[i]:e[i]&&e[i].set?t[i]=n[i]:tt(t,i,n[i])}function nt(t){return Array.from(t.childNodes)}function et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function q(t,n,e,i,r=!1){et(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(n(u)){const s=e(u);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(n(u)){const s=e(u);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function it(t,n,e,i){return q(t,r=>r.nodeName===n,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const u=r.attributes[c];e[u.name]||o.push(u.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(n))}function Ct(t,n,e){return it(t,n,e,Z)}function rt(t,n){return q(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>j(n),!0)}function Dt(t){return rt(t," ")}function Tt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Pt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Mt(t,n,e){t.classList[e?"add":"remove"](n)}function ct(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}function Ot(t,n){const e=[];let i=0;for(const r of n.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,e.push(r)):o===`HEAD_${t}_START`&&(i+=1,e.push(r))}else i>0&&e.push(r);return e}function Lt(t,n){return new t(n)}let y;function m(t){y=t}function x(){if(!y)throw new Error("Function called outside component initialization");return y}function zt(t){x().$$.on_mount.push(t)}function Bt(t){x().$$.after_update.push(t)}function Ht(){const t=x();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const o=ct(n,e,{cancelable:i});return r.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}function qt(t,n){return x().$$.context.set(t,n),n}function Ft(t){return x().$$.context.get(t)}function Rt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const h=[],P=[],w=[],A=[],F=Promise.resolve();let N=!1;function R(){N||(N=!0,F.then(W))}function Wt(){return R(),F}function S(t){w.push(t)}function Gt(t){A.push(t)}const k=new Set;let b=0;function W(){const t=y;do{for(;b<h.length;){const n=h[b];b++,m(n),st(n.$$)}for(m(null),h.length=0,b=0;P.length;)P.pop()();for(let n=0;n<w.length;n+=1){const e=w[n];k.has(e)||(k.add(e),e())}w.length=0}while(h.length);for(;A.length;)A.pop()();N=!1,k.clear(),m(t)}function st(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}const v=new Set;let _;function It(){_={r:0,c:[],p:_}}function Jt(){_.r||g(_.c),_=_.p}function ot(t,n){t&&t.i&&(v.delete(t),t.i(n))}function Kt(t,n,e,i){if(t&&t.o){if(v.has(t))return;v.add(t),_.c.push(()=>{v.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Qt(t,n){const e={},i={},r={$$scope:1};let o=t.length;for(;o--;){const c=t[o],u=n[o];if(u){for(const s in c)s in u||(i[s]=1);for(const s in u)r[s]||(e[s]=u[s],r[s]=1);t[o]=u}else for(const s in c)r[s]=1}for(const c in i)c in e||(e[c]=void 0);return e}function Ut(t){return typeof t=="object"&&t!==null?t:{}}function Vt(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function Xt(t){t&&t.c()}function Yt(t,n){t&&t.l(n)}function ut(t,n,e,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(n,e),i||S(()=>{const c=t.$$.on_mount.map(M).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...c):g(c),t.$$.on_mount=[]}),o.forEach(S)}function lt(t,n){const e=t.$$;e.fragment!==null&&(g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ft(t,n){t.$$.dirty[0]===-1&&(h.push(t),R(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Zt(t,n,e,i,r,o,c,u=[-1]){const s=y;m(t);const l=t.$$={fragment:null,ctx:[],props:o,update:p,not_equal:r,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(s?s.$$.context:[])),callbacks:T(),dirty:u,skip_bound:!1,root:n.target||s.$$.root};c&&c(l.root);let a=!1;if(l.ctx=e?e(t,n.props||{},(f,$,...C)=>{const D=C.length?C[0]:$;return l.ctx&&r(l.ctx[f],l.ctx[f]=D)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](D),a&&ft(t,f)),$}):[],l.update(),a=!0,g(l.before_update),l.fragment=i?i(l.ctx):!1,n.target){if(n.hydrate){K();const f=nt(n.target);l.fragment&&l.fragment.l(f),f.forEach(Y)}else l.fragment&&l.fragment.c();n.intro&&ot(t.$$.fragment),ut(t,n.target,n.anchor,n.customElement),Q(),W()}m(s)}class tn{$destroy(){lt(this,1),this.$destroy=p}$on(n,e){if(!O(e))return p;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!I(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Rt as $,Wt as A,p as B,ht as C,pt as D,yt as E,mt as F,X as G,dt as H,G as I,bt as J,wt as K,at as L,jt as M,Mt as N,Nt as O,St as P,Qt as Q,g as R,tn as S,xt as T,gt as U,J as V,P as W,Ht as X,Et as Y,Vt as Z,Gt as _,kt as a,O as a0,Ut as a1,qt as a2,$t as a3,Ft as a4,Ot as a5,vt as b,Dt as c,Jt as d,At as e,ot as f,It as g,Y as h,Zt as i,Bt as j,Z as k,Ct as l,nt as m,tt as n,zt as o,Pt as p,j as q,rt as r,_t as s,Kt as t,Tt as u,Lt as v,Xt as w,Yt as x,ut as y,lt as z};