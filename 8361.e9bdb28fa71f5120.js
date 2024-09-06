"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8361],{8361:(q,O,y)=>{y.r(O),y.d(O,{startInputShims:()=>Z});var w=y(467),l=y(8476),T=y(909),m=y(4920),R=y(4379);y(8438);const M=new WeakMap,P=(e,t,s,o=0,r=!1)=>{M.has(e)!==s&&(s?k(e,t,o,r):G(e,t))},k=(e,t,s,o=!1)=>{const r=t.parentNode,n=t.cloneNode(!1);n.classList.add("cloned-input"),n.tabIndex=-1,o&&(n.disabled=!0),r.appendChild(n),M.set(e,n);const a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${a}px,${s}px,0) scale(0)`},G=(e,t)=>{const s=M.get(e);s&&(M.delete(e),s.remove()),e.style.pointerEvents="",t.style.transform=""},C="input, textarea, [no-blur], [contenteditable]",N="$ionPaddingTimer",p=(e,t,s)=>{const o=e[N];o&&clearTimeout(o),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[N]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),s&&s()},120)},F=(e,t,s)=>{e.addEventListener("focusout",()=>{t&&p(t,0,s)},{once:!0})};let A=0;const B="data-ionic-skip-scroll-assist",V=(e,t,s,o,r,n,i,a=!1)=>{const _=n&&(void 0===i||i.mode===R.a.None);let L=!1;const c=void 0!==l.w?l.w.innerHeight:0,f=S=>{!1!==L?W(e,t,s,o,S.detail.keyboardHeight,_,a,c,!1):L=!0},u=()=>{L=!1,null==l.w||l.w.removeEventListener("ionKeyboardDidShow",f),e.removeEventListener("focusout",u)},h=function(){var S=(0,w.A)(function*(){t.hasAttribute(B)?t.removeAttribute(B):(W(e,t,s,o,r,_,a,c),null==l.w||l.w.addEventListener("ionKeyboardDidShow",f),e.addEventListener("focusout",u))});return function(){return S.apply(this,arguments)}}();return e.addEventListener("focusin",h),()=>{e.removeEventListener("focusin",h),null==l.w||l.w.removeEventListener("ionKeyboardDidShow",f),e.removeEventListener("focusout",u)}},x=e=>{document.activeElement!==e&&(e.setAttribute(B,"true"),e.focus())},W=function(){var e=(0,w.A)(function*(t,s,o,r,n,i,a=!1,_=0,L=!0){if(!o&&!r)return;const c=((e,t,s,o)=>{var r;return((e,t,s,o)=>{const r=e.top,n=e.bottom,i=t.top,_=i+15,c=Math.min(t.bottom,o-s)-50-n,f=_-r,u=Math.round(c<0?-c:f>0?-f:0),h=Math.min(u,r-i),g=Math.abs(h)/.3;return{scrollAmount:h,scrollDuration:Math.min(400,Math.max(150,g)),scrollPadding:s,inputSafeY:4-(r-_)}})((null!==(r=e.closest("ion-item,[ion-item]"))&&void 0!==r?r:e).getBoundingClientRect(),t.getBoundingClientRect(),s,o)})(t,o||r,n,_);if(o&&Math.abs(c.scrollAmount)<4)return x(s),void(i&&null!==o&&(p(o,A),F(s,o,()=>A=0)));if(P(t,s,!0,c.inputSafeY,a),x(s),(0,m.r)(()=>t.click()),i&&o&&(A=c.scrollPadding,p(o,A)),typeof window<"u"){let f;const u=function(){var S=(0,w.A)(function*(){void 0!==f&&clearTimeout(f),window.removeEventListener("ionKeyboardDidShow",h),window.removeEventListener("ionKeyboardDidShow",u),o&&(yield(0,T.c)(o,0,c.scrollAmount,c.scrollDuration)),P(t,s,!1,c.inputSafeY),x(s),i&&F(s,o,()=>A=0)});return function(){return S.apply(this,arguments)}}(),h=()=>{window.removeEventListener("ionKeyboardDidShow",h),window.addEventListener("ionKeyboardDidShow",u)};if(o){const S=yield(0,T.g)(o);if(L&&c.scrollAmount>S.scrollHeight-S.clientHeight-S.scrollTop)return"password"===s.type?(c.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",h)):window.addEventListener("ionKeyboardDidShow",u),void(f=setTimeout(u,1e3))}u()}});return function(s,o,r,n,i,a){return e.apply(this,arguments)}}(),Z=function(){var e=(0,w.A)(function*(t,s){if(void 0===l.d)return;const o="ios"===s,r="android"===s,n=t.getNumber("keyboardHeight",290),i=t.getBoolean("scrollAssist",!0),a=t.getBoolean("hideCaretOnScroll",o),_=t.getBoolean("inputBlurring",!1),L=t.getBoolean("scrollPadding",!0),c=Array.from(l.d.querySelectorAll("ion-input, ion-textarea")),f=new WeakMap,u=new WeakMap,h=yield R.K.getResizeMode(),S=function(){var v=(0,w.A)(function*(d){yield new Promise(I=>(0,m.c)(d,I));const K=d.shadowRoot||d,D=K.querySelector("input")||K.querySelector("textarea"),b=(0,T.f)(d),j=b?null:d.closest("ion-footer");if(D){if(b&&a&&!f.has(d)){const I=((e,t,s)=>{if(!s||!t)return()=>{};const o=a=>{(e=>e===e.getRootNode().activeElement)(t)&&P(e,t,a)},r=()=>P(e,t,!1),n=()=>o(!0),i=()=>o(!1);return(0,m.a)(s,"ionScrollStart",n),(0,m.a)(s,"ionScrollEnd",i),t.addEventListener("blur",r),()=>{(0,m.b)(s,"ionScrollStart",n),(0,m.b)(s,"ionScrollEnd",i),t.removeEventListener("blur",r)}})(d,D,b);f.set(d,I)}if("date"!==D.type&&"datetime-local"!==D.type&&(b||j)&&i&&!u.has(d)){const I=V(d,D,b,j,n,L,h,r);u.set(d,I)}}});return function(K){return v.apply(this,arguments)}}();_&&(()=>{let e=!0,t=!1;const s=document;(0,m.a)(s,"ionScrollStart",()=>{t=!0}),s.addEventListener("focusin",()=>{e=!0},!0),s.addEventListener("touchend",i=>{if(t)return void(t=!1);const a=s.activeElement;if(!a||a.matches(C))return;const _=i.target;_!==a&&(_.matches(C)||_.closest(C)||(e=!1,setTimeout(()=>{e||a.blur()},50)))},!1)})();for(const v of c)S(v);l.d.addEventListener("ionInputDidLoad",v=>{S(v.detail)}),l.d.addEventListener("ionInputDidUnload",v=>{(v=>{if(a){const d=f.get(v);d&&d(),f.delete(v)}if(i){const d=u.get(v);d&&d(),u.delete(v)}})(v.detail)})});return function(s,o){return e.apply(this,arguments)}}()}}]);