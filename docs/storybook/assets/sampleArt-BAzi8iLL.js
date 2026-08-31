import{j as S}from"./jsx-runtime-DFAAy_2V.js";import{r as y}from"./index-Bc2G9s8g.js";const E=({src:r,width:e=240,height:t=160,cell:a=12,duration:u=1.6,radius:p="var(--rounded-04)",replayKey:g=0,className:x})=>{const m=y.useRef(null),v=y.useRef(0),[N,j]=y.useState(!1);return y.useEffect(()=>{const l=m.current;if(!l)return;const o=l.getContext("2d");if(!o)return;const h=Math.min(window.devicePixelRatio||1,2);l.width=e*h,l.height=t*h,l.style.width=`${e}px`,l.style.height=`${t}px`,o.setTransform(h,0,0,h,0,0);const i=new Image;return i.crossOrigin="anonymous",i.onerror=()=>j(!0),i.onload=()=>{const n=Math.ceil(e/a),c=Math.ceil(t/a),w=document.createElement("canvas");w.width=n,w.height=c;const b=w.getContext("2d",{willReadFrequently:!0});if(!b)return;b.drawImage(i,0,0,n,c);const R=b.getImageData(0,0,n,c).data,T=[];for(let d=0;d<c;d++)for(let s=0;s<n;s++){const f=s/n*.55+d/c*.35;T.push(f+Math.random()*.22)}const A=Math.max(...T),C=window.matchMedia("(prefers-reduced-motion: reduce)").matches,F=performance.now(),$=d=>{const s=C?1:Math.min((d-F)/(u*1e3),1);if(o.clearRect(0,0,e,t),o.drawImage(i,0,0,e,t),s<1){let f=0;for(let q=0;q<c;q++)for(let k=0;k<n;k++,f++){const I=T[f]/A;if(s>=I)continue;const M=f*4,G=.55+.45*Math.sin(d/90+f*1.7),P=1-Math.min((I-s)/.22,1);o.globalAlpha=Math.max(0,1-P*.85)*G,o.fillStyle=`rgb(${R[M]},${R[M+1]},${R[M+2]})`,o.fillRect(k*a,q*a,a+.5,a+.5)}o.globalAlpha=1,v.current=requestAnimationFrame($)}};v.current=requestAnimationFrame($)},i.src=r,()=>cancelAnimationFrame(v.current)},[r,e,t,a,u,g]),N?S.jsx("div",{style:{width:e,height:t,borderRadius:p,background:"var(--surface-input)",display:"grid",placeItems:"center",color:"var(--text-secondary)",font:"500 12px/18px var(--font)"},children:"artwork unavailable"}):S.jsx("canvas",{ref:m,className:x,style:{borderRadius:p,display:"block"}})};E.__docgenInfo={description:`Image loader that generates rather than fades.

The picture arrives as a grid of colour cells sampled from itself, which
flicker briefly and then dissolve along a diagonal wavefront. Because the
cells are the image's own palette, the placeholder already looks like the
artwork — the reveal reads as focusing, not as a swap.

Offer artwork is the slowest thing on the matched-offers screen; this makes
the wait feel deliberate instead of broken.`,methods:[],displayName:"PixelReveal",props:{src:{required:!0,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"240",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"160",computed:!1}},cell:{required:!1,tsType:{name:"number"},description:'Cell edge in px. Bigger cells read as chunkier "generating".',defaultValue:{value:"12",computed:!1}},duration:{required:!1,tsType:{name:"number"},description:"Seconds from first paint to fully revealed.",defaultValue:{value:"1.6",computed:!1}},radius:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'var(--rounded-04)'",computed:!1}},replayKey:{required:!1,tsType:{name:"number"},description:"Replay whenever this changes — handy for the Storybook control.",defaultValue:{value:"0",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const O=({variant:r="travel",tone:e="mono",radius:t,width:a=1,speed:u,className:p="",style:g,children:x})=>{const m=["fc-outline",`fc-outline--${r==="bloom"?"pulse":r}`,r==="bloom"?"fc-outline--bloom":"",`fc-outline--${e}`,p].filter(Boolean).join(" ");return S.jsx("div",{className:m,style:{"--fc-outline-radius":t,"--fc-outline-width":`${a}px`,"--fc-outline-speed":u,...g},children:x})};O.__docgenInfo={description:`A hairline animated stroke around any element.

The stroke is a conic gradient masked down to the border box, so it follows
whatever radius the element already has instead of needing its own shape.
Used to mark the one thing on screen that is currently live — a loading
card, a focused field, the offer being claimed.`,methods:[],displayName:"MonoOutline",props:{variant:{required:!1,tsType:{name:"union",raw:"'travel' | 'pulse' | 'bloom'",elements:[{name:"literal",value:"'travel'"},{name:"literal",value:"'pulse'"},{name:"literal",value:"'bloom'"}]},description:"travel = one arc sweeps the edge · pulse = the ring breathes · bloom = pulse + outer halo",defaultValue:{value:"'travel'",computed:!1}},tone:{required:!1,tsType:{name:"union",raw:"'mono' | 'brand' | 'gold'",elements:[{name:"literal",value:"'mono'"},{name:"literal",value:"'brand'"},{name:"literal",value:"'gold'"}]},description:"mono is achromatic by design — it frames without competing with the brand green.",defaultValue:{value:"'mono'",computed:!1}},radius:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},speed:{required:!1,tsType:{name:"string"},description:"Full cycle time. Slower reads as ambient; faster reads as busy."},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const V=r=>`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320">${r}</svg>`)}`,U=V(`
  <defs>
    <radialGradient id="a" cx="35%" cy="30%">
      <stop offset="0%" stop-color="#7ad3ff"/>
      <stop offset="55%" stop-color="#2b6bd6"/>
      <stop offset="100%" stop-color="#16215c"/>
    </radialGradient>
  </defs>
  <rect width="320" height="320" fill="url(#a)"/>
  <circle cx="240" cy="80" r="52" fill="#ffd84d" opacity="0.9"/>
  <rect x="40" y="180" width="90" height="120" rx="10" fill="#fff" opacity="0.92" transform="rotate(-12 85 240)"/>
  <rect x="120" y="190" width="90" height="120" rx="10" fill="#fff" opacity="0.8" transform="rotate(6 165 250)"/>
  <circle cx="90" cy="90" r="34" fill="#ff5d8f" opacity="0.85"/>
`),D=V(`
  <defs>
    <linearGradient id="b" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ff9a3c"/>
      <stop offset="50%" stop-color="#e0402f"/>
      <stop offset="100%" stop-color="#5b1146"/>
    </linearGradient>
  </defs>
  <rect width="320" height="320" fill="url(#b)"/>
  <rect x="70" y="70" width="180" height="180" rx="24" fill="#ffe9b0" opacity="0.9"/>
  <circle cx="160" cy="160" r="58" fill="#1f8f5a"/>
  <circle cx="160" cy="160" r="26" fill="#ffd84d"/>
  <rect x="18" y="240" width="60" height="60" rx="12" fill="#2b6bd6" opacity="0.8"/>
`),K=V(`
  <defs>
    <linearGradient id="c" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#33e08a"/>
      <stop offset="100%" stop-color="#065f46"/>
    </linearGradient>
  </defs>
  <rect width="320" height="320" fill="url(#c)"/>
  <rect x="60" y="50" width="200" height="220" rx="18" fill="#f5fff9" opacity="0.94"/>
  <rect x="88" y="92" width="144" height="16" rx="8" fill="#0f5132" opacity="0.5"/>
  <rect x="88" y="130" width="110" height="16" rx="8" fill="#0f5132" opacity="0.32"/>
  <rect x="88" y="168" width="132" height="16" rx="8" fill="#0f5132" opacity="0.32"/>
  <circle cx="232" cy="238" r="30" fill="#ffc700"/>
`);export{O as M,E as P,U as a,D as b,K as c};
