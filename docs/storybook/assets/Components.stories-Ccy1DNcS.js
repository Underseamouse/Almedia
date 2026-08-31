import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as c}from"./index-Bc2G9s8g.js";import{B as d}from"./Button-BCScP9TS.js";import{A as G,T as xe}from"./AwardStat-BeCYR9Jj.js";import{M as we,P as ke,a as je,b as Se,c as Te}from"./sampleArt-BAzi8iLL.js";import{A as z,L as v}from"./Ambient-99c8bLGp.js";import{G as Ae,W as B}from"./GameBoard-CP0EwnsO.js";const me=({value:a,suffix:r="",decimals:i=2,duration:n=700,className:t,style:s})=>{const[m,o]=c.useState(a),p=c.useRef(a.toFixed(i)),l=c.useRef(0);c.useEffect(()=>{const u=m,h=a;if(u===h)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){o(h);return}const ve=performance.now(),N=ye=>{const V=Math.min((ye-ve)/n,1),be=1-Math.pow(1-V,3);o(u+(h-u)*be),V<1&&(l.current=requestAnimationFrame(N))};return l.current=requestAnimationFrame(N),()=>cancelAnimationFrame(l.current)},[a,n]);const f=m.toFixed(i),ge=p.current;return p.current=f,e.jsxs("span",{className:t,style:{display:"inline-flex",...s},children:[e.jsx("style",{children:`
        @keyframes fc-digit-in {
          from { opacity: 0; transform: translateY(-0.42em); filter: blur(5px); }
          to   { opacity: 1; transform: none;                filter: blur(0); }
        }
        .fc-digit { display: inline-block; font-variant-numeric: tabular-nums; }
        .fc-digit--changed {
          animation: fc-digit-in var(--dur-base) var(--ease-out) both;
        }
      `}),f.split("").map((u,h)=>e.jsx("span",{className:`fc-digit${ge[h]!==u?" fc-digit--changed":""}`,style:{animationDelay:`${h*22}ms`},children:u},`${h}-${u}`)),r&&e.jsx("span",{style:{marginLeft:"0.22em"},children:r})]})};me.__docgenInfo={description:`A number that counts to its new value, with each changed digit flipping.

Two things happen at once: the value tweens (so the eye follows the amount
going up) and only the digits that actually changed animate (so the ones
that didn't stay put and stay readable). Tweening alone feels like a
spreadsheet; flipping alone hides how far it moved.`,methods:[],displayName:"AnimatedNumber",props:{value:{required:!0,tsType:{name:"number"},description:""},suffix:{required:!1,tsType:{name:"string"},description:"Appended verbatim — currency stays outside the animated digits.",defaultValue:{value:"''",computed:!1}},decimals:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},duration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"700",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const fe=({value:a,total:r=40,currency:i="zł",label:n="earned so far",complete:t=!1})=>{const s=Math.max(0,Math.min(1,a/r));return e.jsxs("div",{style:{display:"grid",gap:"var(--space-2)",justifyItems:"center",width:"100%"},children:[e.jsx("style",{children:`
        @keyframes fc-meter-glow {
          0%,100% { box-shadow: 0 0 0 0 rgba(44,252,158,0); }
          50%     { box-shadow: 0 0 18px 0 rgba(44,252,158,0.45); }
        }
      `}),e.jsx("div",{style:{font:"700 var(--h-sm)/var(--h-sm-lh) var(--font)",letterSpacing:"var(--tracking)",color:t?"var(--main-400)":"var(--text-primary)",transition:"color var(--dur-base) var(--ease-out)"},children:e.jsx(me,{value:a,suffix:i})}),e.jsx("div",{role:"progressbar","aria-valuenow":Math.round(s*100),"aria-valuemin":0,"aria-valuemax":100,style:{width:"100%",height:"var(--track)",borderRadius:"var(--rounded-full)",background:"var(--gb-300)",overflow:"hidden"},children:e.jsx("div",{style:{width:`${s*100}%`,height:"100%",borderRadius:"var(--rounded-full)",background:t?"var(--main-400)":"var(--action-primary)",transition:"width var(--dur-slow) var(--ease-out), background var(--dur-base) var(--ease-out)",animation:t?"fc-meter-glow 2.2s var(--ease-inout) infinite":void 0}})}),e.jsx("div",{style:{font:"400 var(--t-md)/var(--t-md-lh) var(--font)",letterSpacing:"var(--tracking)",color:"var(--text-secondary)"},children:t?"unlocked — all yours":n})]})};fe.__docgenInfo={description:`Progress toward the guaranteed starter reward.

The amount is fixed before the user answers anything; the meter only reveals
it in instalments. That distinction is the whole reason this component is
careful with its wording — "earned so far" describes a running total, and
must never imply the final figure moves with the answers.`,methods:[],displayName:"EarningsMeter",props:{value:{required:!0,tsType:{name:"number"},description:"Earned so far."},total:{required:!1,tsType:{name:"number"},description:"The guaranteed total. Fixed — never derive it from the answers.",defaultValue:{value:"40",computed:!1}},currency:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'zł'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'earned so far'",computed:!1}},complete:{required:!1,tsType:{name:"boolean"},description:"Full state glows and swaps the label.",defaultValue:{value:"false",computed:!1}}}};const R=({label:a,selected:r=!1,disabled:i=!1,onSelect:n,shape:t="card"})=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
      .fc-sel {
        display: flex; align-items: center; gap: var(--space-2);
        width: 100%; text-align: left; cursor: pointer;
        background: var(--surface-container);
        border: var(--border-thin) solid var(--border-default);
        color: var(--text-primary);
        font-family: var(--font); font-weight: 500;
        letter-spacing: var(--tracking);
        transition:
          border-color var(--dur-fast) var(--ease-out),
          background   var(--dur-fast) var(--ease-out),
          transform    var(--dur-instant) var(--ease-out);
      }
      .fc-sel:active:not(:disabled) { transform: scale(0.985); }
      .fc-sel:focus-visible { outline: var(--border-thick) solid var(--action-primary); outline-offset: 2px; }
      .fc-sel:disabled { opacity: 0.5; cursor: not-allowed; }
      .fc-sel[data-selected='true'] {
        border-color: var(--border-selected);
        border-width: var(--border-thick);
        background: var(--main-25);
      }
      .fc-sel__radio {
        flex: none; width: var(--icon-lg); height: var(--icon-lg);
        border-radius: 50%; border: var(--border-thick) solid var(--text-secondary);
        display: grid; place-items: center;
        transition: border-color var(--dur-fast) var(--ease-out);
      }
      .fc-sel[data-selected='true'] .fc-sel__radio { border-color: var(--action-primary); }
      .fc-sel__dot {
        width: 100%; height: 100%; border-radius: 50%;
        background: var(--action-primary);
        transform: scale(0);
        transition: transform var(--dur-fast) var(--ease-spring);
      }
      .fc-sel[data-selected='true'] .fc-sel__dot { transform: scale(1); }
    `}),e.jsxs("button",{className:"fc-sel","data-selected":r,disabled:i,onClick:n,"aria-pressed":r,style:{padding:t==="pill"?"0 var(--space-5)":"var(--space-4)",height:t==="pill"?"var(--control-md)":void 0,borderRadius:t==="pill"?"var(--rounded-02)":"var(--rounded-03)",fontSize:"var(--t-lg)",justifyContent:t==="pill"?"center":void 0,color:t==="pill"&&r?"var(--action-primary)":void 0},children:[e.jsx("span",{style:{flex:1},children:a}),t==="card"&&e.jsx("span",{className:"fc-sel__radio",children:e.jsx("span",{className:"fc-sel__dot"})})]})]});R.__docgenInfo={description:"A single choice.\n\nUse `card` when there are three or more options or the label can wrap; use\n`pill` for a binary yes/no. The label is allowed to wrap and grow the box —\na clipped answer is worse than an uneven grid.",methods:[],displayName:"SelectorCard",props:{label:{required:!0,tsType:{name:"string"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},shape:{required:!1,tsType:{name:"union",raw:"'card' | 'pill'",elements:[{name:"literal",value:"'card'"},{name:"literal",value:"'pill'"}]},description:"card = quiz answer with a radio · pill = binary yes/no",defaultValue:{value:"'card'",computed:!1}}}};const q=({children:a,mood:r="neutral",typing:i=!1,size:n=56})=>{const t=r==="celebrating"?n*1.35:n,s=typeof a=="string"?a.split(" "):null,[m,o]=c.useState(i&&s?0:1/0);return c.useEffect(()=>{if(!i||!s)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){o(1/0);return}o(0);const l=setInterval(()=>{o(f=>f>=s.length?(clearInterval(l),f):f+1)},55);return()=>clearInterval(l)},[i,typeof a=="string"?a:""]),e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"var(--space-3)"},children:[e.jsx("style",{children:`
        @keyframes fc-coin-bob {
          0%,100% { transform: translateY(0) rotate(-2deg); }
          50%     { transform: translateY(-5px) rotate(2deg); }
        }
        @keyframes fc-word-in {
          from { opacity: 0; transform: translateY(3px); filter: blur(3px); }
          to   { opacity: 1; transform: none; filter: blur(0); }
        }
        .fc-word { display: inline-block; animation: fc-word-in var(--dur-base) var(--ease-out) both; }
      `}),e.jsxs("div",{style:{flex:"none",width:t,height:t,borderRadius:"50%",background:"linear-gradient(160deg, var(--gold-light), var(--gold))",animation:`fc-coin-bob ${r==="celebrating"?1.6:3.4}s var(--ease-inout) infinite`,position:"relative",boxShadow:"0 6px 18px -4px rgba(255,199,0,0.4)"},children:[e.jsx("span",{style:_(t,.3)}),e.jsx("span",{style:_(t,.62)}),e.jsx("svg",{viewBox:"0 0 20 10",style:{position:"absolute",left:"32%",top:"55%",width:t*.36,height:t*.18},fill:"none",children:e.jsx("path",{d:"M1 1 Q10 9 19 1",stroke:"var(--gb-900)",strokeWidth:"2.2",strokeLinecap:"round"})})]}),e.jsx("div",{style:{flex:1,background:"var(--surface-container)",borderRadius:"var(--rounded-03)",padding:"var(--space-3) var(--space-4)",font:"500 var(--t-lg)/var(--t-lg-lh) var(--font)",letterSpacing:"var(--tracking)",color:"var(--text-primary)"},children:s?s.map((p,l)=>e.jsxs("span",{className:"fc-word",style:{animationDelay:`${l*45}ms`,visibility:l<m?"visible":"hidden"},children:[p,l<s.length-1?" ":""]},l)):a})]})},_=(a,r)=>({position:"absolute",left:`${r*100}%`,top:"34%",width:a*.09,height:a*.12,borderRadius:"50%",background:"var(--gb-900)"});q.__docgenInfo={description:`The narrator of the flow: the brand coin, given a face and a speech bubble.

Deliberately built from the existing coin rather than a new mascot — a
custom character is an illustration project, and reusing the brand asset
keeps the voice on-brand for free.

The coin bobs continuously. It is the only thing on a quiz screen that moves
while the user is reading, which is what makes the screen feel occupied
rather than static.`,methods:[],displayName:"CoinVoice",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},mood:{required:!1,tsType:{name:"union",raw:"'neutral' | 'celebrating'",elements:[{name:"literal",value:"'neutral'"},{name:"literal",value:"'celebrating'"}]},description:"",defaultValue:{value:"'neutral'",computed:!1}},typing:{required:!1,tsType:{name:"boolean"},description:"Reveal the line word by word, as if it were being said.",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"56",computed:!1}}}};const M=({title:a,meta:r,amount:i,kind:n="guaranteed",artwork:t,live:s=!1,onStart:m})=>{const o=n==="guaranteed",p=e.jsxs("button",{onClick:m,style:{display:"flex",alignItems:"center",gap:"var(--space-3)",width:"100%",textAlign:"left",padding:"var(--space-3)",borderRadius:"var(--rounded-04)",background:"var(--surface-container)",border:0,cursor:"pointer",fontFamily:"var(--font)"},children:[t?e.jsx(ke,{src:t,width:64,height:64,cell:8,duration:1.3,radius:"var(--rounded-02)"}):e.jsx("div",{style:{width:64,height:64,flex:"none",borderRadius:"var(--rounded-02)",background:"var(--surface-input)"}}),e.jsxs("div",{style:{flex:1,display:"grid",gap:2},children:[e.jsx("div",{style:{font:"600 var(--t-lg)/var(--t-lg-lh) var(--font)",letterSpacing:"var(--tracking)",color:"var(--text-primary)"},children:a}),e.jsx("div",{style:{font:"500 var(--t-sm)/var(--t-sm-lh) var(--font)",letterSpacing:"var(--tracking)",color:"var(--text-secondary)"},children:r}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-2)",marginTop:2},children:[e.jsx("span",{style:{padding:"2px var(--space-2)",borderRadius:"var(--rounded-full)",background:o?"var(--main-25)":"var(--surface-elevated-border)",color:o?"var(--action-primary)":"var(--text-secondary)",font:"600 var(--t-sm)/var(--t-sm-lh) var(--font)",letterSpacing:"var(--tracking)"},children:o?"Guaranteed":"Estimated"}),e.jsx("span",{style:{font:"600 var(--t-lg)/var(--t-lg-lh) var(--font)",letterSpacing:"var(--tracking)",color:"var(--text-primary)"},children:o?i:`up to ${i}`})]})]})]});return s?e.jsx(we,{variant:"travel",tone:"brand",radius:"var(--rounded-04)",speed:"3s",children:p}):p};M.__docgenInfo={description:`One offer in the matched list.

The badge is the honest part. A guaranteed reward is stated flat ("40.00 zł");
an estimated one is always prefixed "up to", because the original app's habit
of showing a ceiling as if it were a payout is the single defect this whole
redesign is answering.`,methods:[],displayName:"OfferCard",props:{title:{required:!0,tsType:{name:"string"},description:""},meta:{required:!0,tsType:{name:"string"},description:""},amount:{required:!0,tsType:{name:"string"},description:""},kind:{required:!1,tsType:{name:"union",raw:"'guaranteed' | 'estimated'",elements:[{name:"literal",value:"'guaranteed'"},{name:"literal",value:"'estimated'"}]},description:"guaranteed = the reward is certain · estimated = a ceiling, and must read as one",defaultValue:{value:"'guaranteed'",computed:!1}},artwork:{required:!1,tsType:{name:"string"},description:""},live:{required:!1,tsType:{name:"boolean"},description:"Marks the card as the one currently being claimed.",defaultValue:{value:"false",computed:!1}},onStart:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const I=({children:a,padding:r="var(--space-5) var(--space-3)",radius:i="var(--rounded-05)",blur:n=28,style:t})=>e.jsxs("div",{style:{position:"relative",padding:r,borderRadius:i,background:"linear-gradient(160deg, rgba(255,255,255,0.14), rgba(255,255,255,0.045))",backdropFilter:`blur(${n}px)`,WebkitBackdropFilter:`blur(${n}px)`,boxShadow:"0 10px 28px -6px rgba(0,0,0,0.3)",...t},children:[e.jsx("span",{"aria-hidden":!0,style:{position:"absolute",inset:0,borderRadius:"inherit",padding:1,background:"linear-gradient(150deg, rgba(255,255,255,0.34), rgba(255,255,255,0.10) 45%, rgba(255,255,255,0.05))",WebkitMask:"linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",WebkitMaskComposite:"xor",mask:"linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",maskComposite:"exclude",pointerEvents:"none"}}),a]});I.__docgenInfo={description:`A frosted panel.

Only reaches for glass when there is ambient colour underneath — over flat
black it degrades into a slightly lighter rectangle and costs a repaint for
nothing. Pair it with \`Ambient\`.

The edge is a gradient rather than a flat stroke: light collects on the top
corner and falls away, which is the detail that actually sells the material.`,methods:[],displayName:"GlassCard",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},padding:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'var(--space-5) var(--space-3)'",computed:!1}},radius:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'var(--rounded-05)'",computed:!1}},blur:{required:!1,tsType:{name:"number"},description:"Frosting strength. Needs something coloured behind it to be worth having.",defaultValue:{value:"28",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const Ve={title:"Components"},g=({w:a=354,children:r})=>e.jsx("div",{style:{width:a,display:"grid",gap:"var(--space-3)"},children:r}),y={parameters:{docs:{description:{story:"One action per screen. Geometry is measured off freecash.com (38/44 tall, radius 8, px-5). Press scales down instead of shifting colour — invisible under a thumb on dark — and focus is a 2px green ring, the one state that must survive keyboard use. Hover is intentionally absent: mobile-first, so Focus was prioritised over a pointer-only state."}}},render:()=>e.jsxs(g,{children:[e.jsx(d,{variant:"primary",children:"Let's go"}),e.jsx(d,{variant:"secondary",children:"Maybe later"}),e.jsx(d,{variant:"outline",children:"See all offers"}),e.jsx(d,{variant:"ghost",children:"Skip"}),e.jsx(d,{variant:"primary",loading:!0,children:"Loading"}),e.jsx(d,{variant:"primary",disabled:!0,children:"Disabled"}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-3)"},children:[e.jsx(d,{size:"small",variant:"secondary",block:!1,children:"Sign in"}),e.jsx(d,{size:"small",variant:"primary",block:!1,children:"Sign up"})]})]})},b={name:"Award stat",parameters:{docs:{description:{story:"The wreath borrows the grammar of an award, so the number reads as conferred by other people rather than claimed by the app. Verified public figures only."}}},render:()=>e.jsx(z,{style:{width:402,padding:"var(--space-8) 0",borderRadius:"var(--rounded-06)"},animated:!1,children:e.jsxs("div",{style:{display:"grid",gap:"var(--space-8)"},children:[e.jsx(G,{value:"Rated 4.7/5",crest:null,label:e.jsx(xe,{}),source:e.jsx("span",{style:{font:"500 12px/18px var(--font)",color:"var(--text-primary)"},children:"Based on 242,605 reviews"})}),e.jsx(G,{value:"10,000,000 +",label:e.jsxs(e.Fragment,{children:["Downloads",e.jsx("br",{}),"on Google Play"]})})]})})},x={name:"Earnings meter",parameters:{docs:{description:{story:"Eight steps of 5.00 zł reach exactly the guaranteed 40.00. Press Next to watch the digits flip and the bar fill — the amount is fixed in advance, the meter only reveals it in instalments."}}},render:()=>{const[a,r]=c.useState(1),i=Math.min(a*5,40),n=i>=40;return e.jsxs(g,{children:[e.jsx(fe,{value:i,complete:n}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",marginTop:"var(--space-4)"},children:[e.jsx(d,{variant:"secondary",onClick:()=>r(1),children:"Reset"}),e.jsx(d,{variant:"primary",onClick:()=>r(t=>Math.min(t+1,8)),disabled:n,children:n?"Unlocked":"Next [+5.00 zł]"})]}),e.jsxs("p",{style:{font:"400 12px/18px var(--font)",color:"var(--text-secondary)",textAlign:"center"},children:["step ",Math.min(a,8)," of 8"]})]})}},w={parameters:{docs:{description:{story:"The quiz’s answer control, in two shapes: a full-width card for lists and a pill for yes/no. Selection is carried by a green border, not a fill — the chosen answer reads as marked, not as a new button competing with the CTA. Long labels wrap and grow the height rather than truncating, so a real answer is never clipped."}}},render:()=>{const[a,r]=c.useState("A few times a week"),[i,n]=c.useState(null),t=["Daily","A few times a week","Once a week","Less than once a week"];return e.jsxs(g,{children:[t.map(s=>e.jsx(R,{label:s,selected:a===s,onSelect:()=>r(s)},s)),e.jsx("div",{style:{display:"flex",gap:"var(--space-3)",marginTop:"var(--space-4)"},children:["Yes","No"].map(s=>e.jsx(R,{shape:"pill",label:s,selected:i===s,onSelect:()=>n(s)},s))}),e.jsx(R,{label:"Disabled option",disabled:!0})]})}},k={name:"Coin voice",parameters:{docs:{description:{story:"The guide that walks the user through the quiz — the coin, speaking. It types its line on entry so the screen feels answered-to rather than pre-written, and shifts to a celebrating mood at the reward. It talks; it never asks for anything, so it can’t be mistaken for a form field."}}},render:()=>e.jsxs(g,{children:[e.jsx(q,{typing:!0,children:"Hey! I'm here to help you turn spare time into real cash."}),e.jsx(q,{children:"Got it, Alex. How old are you?"}),e.jsx(q,{mood:"celebrating",children:"You did it, Alex! Your starter reward is ready."})]})},j={parameters:{docs:{description:{story:"The reward, told honestly. A guaranteed payout is written flat (“40.00 zł”); an estimate always carries “up to”. Showing a ceiling as if it were the payout is the exact defect this redesign answers — so the distinction is baked into the component, not left to whoever fills it in. Artwork loads through the pixel-reveal so the wait reads as focusing."}}},render:()=>e.jsxs(g,{children:[e.jsx(M,{title:"Disney Solitaire",meta:"~5 min · install & play",amount:"40.00 zł",kind:"guaranteed",artwork:je,live:!0}),e.jsx(M,{title:"Monopoly GO!",meta:"~45 min · roll & earn",amount:"7,468 zł",kind:"estimated",artwork:Se}),e.jsx(M,{title:"Survey — 12 questions",meta:"~8 min · answer honestly",amount:"18 zł",kind:"estimated",artwork:Te})]})},S={name:"Glass card",parameters:{docs:{description:{story:"A frosted panel for the trust stats. It only earns its keep over ambient colour — the gradient edge catches light on the top corner, which is the detail that sells the material. Over flat black it degrades to a lighter rectangle for a repaint, so it is always paired with Ambient."}}},render:()=>e.jsx(z,{style:{width:402,padding:"var(--space-8)",borderRadius:"var(--rounded-06)"},children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-3)"},children:[e.jsxs(I,{style:{flex:1,textAlign:"center"},children:[e.jsx("div",{className:"fc-h-sm",children:"4.7/5"}),e.jsx("div",{className:"fc-t-sm",style:{color:"var(--text-secondary)"},children:"Trustpilot"})]}),e.jsxs(I,{style:{flex:1,textAlign:"center"},children:[e.jsx("div",{className:"fc-h-sm",children:"10M+"}),e.jsx("div",{className:"fc-t-sm",style:{color:"var(--text-secondary)"},children:"Downloads"})]})]})})},T={name:"Logo",parameters:{docs:{description:{story:"The real lockup, exported from the comp — not an approximation. “FREE” takes the brand green and “CASH” the text ink, as two separate inks, so the mark can be re-coloured for a light surface without redrawing it. Mark-only for the splash and avatars; full lockup in headers."}}},render:()=>e.jsxs("div",{style:{display:"grid",gap:"var(--space-6)",justifyItems:"start"},children:[e.jsx(v,{size:40}),e.jsx(v,{size:28}),e.jsx(v,{variant:"mark",size:40}),e.jsx("div",{style:{display:"flex",gap:"var(--space-6)",alignItems:"center",background:"#fff",padding:"var(--space-4)",borderRadius:"var(--rounded-03)"},children:e.jsx(v,{size:28,ink:"var(--gb-900)"})}),e.jsx("p",{style:{font:"400 12px/18px var(--font)",color:"var(--text-secondary)",maxWidth:340},children:'The real lockup, exported from the comp. "CASH" takes the text ink, so the mark can be re-inked for a light surface without redrawing it.'})]})},A={name:"Wallet pill",parameters:{docs:{description:{story:"The running balance from comp 214-9615. The rim is Warning 600 — a darker gold than the Gold token — because a rim must read as an edge, and bright gold on near-black blooms into a glow instead of holding a line. That bright gold is spent instead on the soft halo behind the pill. The bottom border is heavier (3px) so the pill sits on the surface, the same physical-edge trick the primary button uses."}}},render:()=>e.jsx(z,{style:{width:402,padding:"var(--space-12) 0",borderRadius:"var(--rounded-06)"},animated:!1,children:e.jsxs("div",{style:{display:"grid",placeItems:"center",gap:"var(--space-8)"},children:[e.jsx(B,{balance:"€0"}),e.jsx(B,{balance:"€12.40"}),e.jsx(B,{balance:"€128.75",glow:!1,animated:!1})]})})},C={name:"Game board",parameters:{docs:{description:{story:"The Match-3 board that anchors the game screen (comp 221-9710). It carries the product’s whole promise in one glance — this is a real game, not a wall of survey rows. Tiles are a flat 10%-white cell with a single 3D emoji so the glyph does the talking and the grid never competes with the CTA. Toggle the highlighted set to stage the winning move."}}},render:()=>e.jsx(z,{style:{width:402,padding:"var(--space-8) 0",borderRadius:"var(--rounded-06)"},animated:!1,children:e.jsx("div",{style:{display:"grid",placeItems:"center"},children:e.jsx(Ae,{highlight:["1,0","1,1","2,2"],animated:!1})})})};var P,D,E;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'One action per screen. Geometry is measured off freecash.com (38/44 tall, radius 8, px-5). Press scales down instead of shifting colour — invisible under a thumb on dark — and focus is a 2px green ring, the one state that must survive keyboard use. Hover is intentionally absent: mobile-first, so Focus was prioritised over a pointer-only state.'
      }
    }
  },
  render: () => <Stack>
      <Button variant="primary">Let's go</Button>
      <Button variant="secondary">Maybe later</Button>
      <Button variant="outline">See all offers</Button>
      <Button variant="ghost">Skip</Button>
      <Button variant="primary" loading>Loading</Button>
      <Button variant="primary" disabled>Disabled</Button>
      <div style={{
      display: 'flex',
      gap: 'var(--space-3)'
    }}>
        <Button size="small" variant="secondary" block={false}>Sign in</Button>
        <Button size="small" variant="primary" block={false}>Sign up</Button>
      </div>
    </Stack>
}`,...(E=(D=y.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var O,L,F;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Award stat',
  parameters: {
    docs: {
      description: {
        story: 'The wreath borrows the grammar of an award, so the number reads as conferred by other people rather than claimed by the app. Verified public figures only.'
      }
    }
  },
  render: () => <Ambient style={{
    width: 402,
    padding: 'var(--space-8) 0',
    borderRadius: 'var(--rounded-06)'
  }} animated={false}>
      <div style={{
      display: 'grid',
      gap: 'var(--space-8)'
    }}>
        <AwardStat value="Rated 4.7/5" crest={null} label={<TrustpilotStars />} source={<span style={{
        font: '500 12px/18px var(--font)',
        color: 'var(--text-primary)'
      }}>
              Based on 242,605 reviews
            </span>} />
        <AwardStat value="10,000,000 +" label={<>Downloads<br />on Google Play</>} />
      </div>
    </Ambient>
}`,...(F=(L=b.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var W,Y,$;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Earnings meter',
  parameters: {
    docs: {
      description: {
        story: 'Eight steps of 5.00 zł reach exactly the guaranteed 40.00. Press Next to watch the digits flip and the bar fill — the amount is fixed in advance, the meter only reveals it in instalments.'
      }
    }
  },
  render: () => {
    const [step, setStep] = useState(1);
    const value = Math.min(step * 5, 40);
    const done = value >= 40;
    return <Stack>
        <EarningsMeter value={value} complete={done} />
        <div style={{
        display: 'flex',
        gap: 'var(--space-3)',
        marginTop: 'var(--space-4)'
      }}>
          <Button variant="secondary" onClick={() => setStep(1)}>Reset</Button>
          <Button variant="primary" onClick={() => setStep(s => Math.min(s + 1, 8))} disabled={done}>
            {done ? 'Unlocked' : \`Next [+5.00 zł]\`}
          </Button>
        </div>
        <p style={{
        font: '400 12px/18px var(--font)',
        color: 'var(--text-secondary)',
        textAlign: 'center'
      }}>
          step {Math.min(step, 8)} of 8
        </p>
      </Stack>;
  }
}`,...($=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var H,U,Q;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The quiz’s answer control, in two shapes: a full-width card for lists and a pill for yes/no. Selection is carried by a green border, not a fill — the chosen answer reads as marked, not as a new button competing with the CTA. Long labels wrap and grow the height rather than truncating, so a real answer is never clipped.'
      }
    }
  },
  render: () => {
    const [picked, setPicked] = useState('A few times a week');
    const [yn, setYn] = useState<string | null>(null);
    const options = ['Daily', 'A few times a week', 'Once a week', 'Less than once a week'];
    return <Stack>
        {options.map(o => <SelectorCard key={o} label={o} selected={picked === o} onSelect={() => setPicked(o)} />)}
        <div style={{
        display: 'flex',
        gap: 'var(--space-3)',
        marginTop: 'var(--space-4)'
      }}>
          {['Yes', 'No'].map(o => <SelectorCard key={o} shape="pill" label={o} selected={yn === o} onSelect={() => setYn(o)} />)}
        </div>
        <SelectorCard label="Disabled option" disabled />
      </Stack>;
  }
}`,...(Q=(U=w.parameters)==null?void 0:U.docs)==null?void 0:Q.source}}};var J,K,X;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Coin voice',
  parameters: {
    docs: {
      description: {
        story: 'The guide that walks the user through the quiz — the coin, speaking. It types its line on entry so the screen feels answered-to rather than pre-written, and shifts to a celebrating mood at the reward. It talks; it never asks for anything, so it can’t be mistaken for a form field.'
      }
    }
  },
  render: () => <Stack>
      <CoinVoice typing>Hey! I'm here to help you turn spare time into real cash.</CoinVoice>
      <CoinVoice>Got it, Alex. How old are you?</CoinVoice>
      <CoinVoice mood="celebrating">You did it, Alex! Your starter reward is ready.</CoinVoice>
    </Stack>
}`,...(X=(K=k.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Z,ee,ae;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The reward, told honestly. A guaranteed payout is written flat (“40.00 zł”); an estimate always carries “up to”. Showing a ceiling as if it were the payout is the exact defect this redesign answers — so the distinction is baked into the component, not left to whoever fills it in. Artwork loads through the pixel-reveal so the wait reads as focusing.'
      }
    }
  },
  render: () => <Stack>
      <OfferCard title="Disney Solitaire" meta="~5 min · install & play" amount="40.00 zł" kind="guaranteed" artwork={artSolitaire} live />
      <OfferCard title="Monopoly GO!" meta="~45 min · roll & earn" amount="7,468 zł" kind="estimated" artwork={artMonopoly} />
      <OfferCard title="Survey — 12 questions" meta="~8 min · answer honestly" amount="18 zł" kind="estimated" artwork={artSurvey} />
    </Stack>
}`,...(ae=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,re,se;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Glass card',
  parameters: {
    docs: {
      description: {
        story: 'A frosted panel for the trust stats. It only earns its keep over ambient colour — the gradient edge catches light on the top corner, which is the detail that sells the material. Over flat black it degrades to a lighter rectangle for a repaint, so it is always paired with Ambient.'
      }
    }
  },
  render: () => <Ambient style={{
    width: 402,
    padding: 'var(--space-8)',
    borderRadius: 'var(--rounded-06)'
  }}>
      <div style={{
      display: 'flex',
      gap: 'var(--space-3)'
    }}>
        <GlassCard style={{
        flex: 1,
        textAlign: 'center'
      }}>
          <div className="fc-h-sm">4.7/5</div>
          <div className="fc-t-sm" style={{
          color: 'var(--text-secondary)'
        }}>Trustpilot</div>
        </GlassCard>
        <GlassCard style={{
        flex: 1,
        textAlign: 'center'
      }}>
          <div className="fc-h-sm">10M+</div>
          <div className="fc-t-sm" style={{
          color: 'var(--text-secondary)'
        }}>Downloads</div>
        </GlassCard>
      </div>
    </Ambient>
}`,...(se=(re=S.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,ne,oe;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Logo',
  parameters: {
    docs: {
      description: {
        story: 'The real lockup, exported from the comp — not an approximation. “FREE” takes the brand green and “CASH” the text ink, as two separate inks, so the mark can be re-coloured for a light surface without redrawing it. Mark-only for the splash and avatars; full lockup in headers.'
      }
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--space-6)',
    justifyItems: 'start'
  }}>
      <Logo size={40} />
      <Logo size={28} />
      <Logo variant="mark" size={40} />
      <div style={{
      display: 'flex',
      gap: 'var(--space-6)',
      alignItems: 'center',
      background: '#fff',
      padding: 'var(--space-4)',
      borderRadius: 'var(--rounded-03)'
    }}>
        <Logo size={28} ink="var(--gb-900)" />
      </div>
      <p style={{
      font: '400 12px/18px var(--font)',
      color: 'var(--text-secondary)',
      maxWidth: 340
    }}>
        The real lockup, exported from the comp. "CASH" takes the text ink, so the
        mark can be re-inked for a light surface without redrawing it.
      </p>
    </div>
}`,...(oe=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var le,de,ce;A.parameters={...A.parameters,docs:{...(le=A.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Wallet pill',
  parameters: {
    docs: {
      description: {
        story: 'The running balance from comp 214-9615. The rim is Warning 600 — a darker gold than the Gold token — because a rim must read as an edge, and bright gold on near-black blooms into a glow instead of holding a line. That bright gold is spent instead on the soft halo behind the pill. The bottom border is heavier (3px) so the pill sits on the surface, the same physical-edge trick the primary button uses.'
      }
    }
  },
  render: () => <Ambient style={{
    width: 402,
    padding: 'var(--space-12) 0',
    borderRadius: 'var(--rounded-06)'
  }} animated={false}>
      <div style={{
      display: 'grid',
      placeItems: 'center',
      gap: 'var(--space-8)'
    }}>
        <WalletPill balance="€0" />
        <WalletPill balance="€12.40" />
        <WalletPill balance="€128.75" glow={false} animated={false} />
      </div>
    </Ambient>
}`,...(ce=(de=A.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,ue,he;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'Game board',
  parameters: {
    docs: {
      description: {
        story: 'The Match-3 board that anchors the game screen (comp 221-9710). It carries the product’s whole promise in one glance — this is a real game, not a wall of survey rows. Tiles are a flat 10%-white cell with a single 3D emoji so the glyph does the talking and the grid never competes with the CTA. Toggle the highlighted set to stage the winning move.'
      }
    }
  },
  render: () => <Ambient style={{
    width: 402,
    padding: 'var(--space-8) 0',
    borderRadius: 'var(--rounded-06)'
  }} animated={false}>
      <div style={{
      display: 'grid',
      placeItems: 'center'
    }}>
        <GameBoard highlight={['1,0', '1,1', '2,2']} animated={false} />
      </div>
    </Ambient>
}`,...(he=(ue=C.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};const Ge=["Buttons","Award","Meter","Selectors","Voice","Offers","Glass","Brand","Wallet","Board"];export{b as Award,C as Board,T as Brand,y as Buttons,S as Glass,x as Meter,j as Offers,w as Selectors,k as Voice,A as Wallet,Ge as __namedExportsOrder,Ve as default};
