import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as u,R as te}from"./index-Bc2G9s8g.js";const i=({tint:t,glow:r,top:a,bottom:s,children:o,style:n})=>e.jsxs("div",{style:{position:"relative",width:270,height:290,borderRadius:"var(--rounded-06)",overflow:"hidden",background:t,isolation:"isolate",...n},children:[e.jsx("span",{"aria-hidden":!0,style:{position:"absolute",bottom:"-38%",left:"-34%",width:258,height:258,borderRadius:"50%",background:`radial-gradient(closest-side, ${r}, transparent 70%)`,opacity:.6,pointerEvents:"none"}}),e.jsx("span",{"aria-hidden":!0,style:{position:"absolute",top:"-34%",right:"-30%",width:258,height:258,borderRadius:"50%",background:`radial-gradient(closest-side, ${r}, transparent 70%)`,opacity:.5,pointerEvents:"none"}}),e.jsxs("div",{style:{position:"relative",height:"100%",display:"grid",gridTemplateRows:"auto 1fr auto",alignItems:"center",padding:"var(--space-6)",textAlign:"center"},children:[e.jsx("div",{style:{minHeight:a?21:0},children:a&&e.jsx("div",{style:A,children:a})}),e.jsx("div",{style:{display:"grid",placeItems:"center"},children:o}),e.jsx("div",{style:{minHeight:s?21:0},children:s&&e.jsx("div",{style:A,children:s})})]})]}),A={font:"600 var(--t-md)/var(--t-md-lh) var(--font)",letterSpacing:"var(--tracking)",color:"var(--text-primary)"},d={play:{tint:"linear-gradient(155deg, #269866 0%, #147a4c 45%, #0f6f44 100%)",glow:"rgba(64, 220, 150, 0.55)"},balance:{tint:"linear-gradient(160deg, #144a80 0%, #144375 50%, #143f6d 100%)",glow:"rgba(41, 150, 250, 0.5)"},withdraw:{tint:"linear-gradient(160deg, #bbb262 0%, #ada35d 55%, #a49d5d 100%)",glow:"rgba(255, 231, 122, 0.55)"},reward:{tint:"linear-gradient(160deg, #373743 0%, #302f3b 55%, #2b2a36 100%)",glow:"rgba(150, 110, 210, 0.45)"}};i.__docgenInfo={description:`The shared shell for the four onboarding cards (Figma frames 79 / 93 / 94 …).

Every card in the set is the same object: a 270×290 rounded-24 tile, a
translucent colour wash, two out-of-focus glow blobs bleeding in from
opposite corners, and a caption. Only the hero in the middle changes. Pulling
that skeleton into one component is what lets the four cards read as a family
and keeps each story down to *just* its hero.

The tint is the colour as it actually composites in the comp (the Figma card
sits a #d9d9d9 multiply scrim over a saturated fill; rather than reproduce
that stack, each tint is sampled from the rendered frame — same result, half
the DOM).`,methods:[],displayName:"OnboardingCard",props:{tint:{required:!0,tsType:{name:"string"},description:"Full CSS background — the composited tint measured off each Figma card."},glow:{required:!0,tsType:{name:"string"},description:"Colour of the two soft glow blobs (bottom-left + top-right), as in the comp."},top:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional label pinned near the top (card 3)."},bottom:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional label pinned near the bottom (all cards)."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The hero, centred."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const $=["🍉","🍬","🥔","🍳","🥕"],ae={"🍉":"#e0405a","🍬":"#3d7bff","🥔":"#c98a3c","🍳":"#ffd24d","🥕":"#ff7a2f"},F=[{swap:[4,5],line:[4,5,6],type:"🍉"},{swap:[9,13],line:[1,5,9],type:"🍬"},{swap:[10,11],line:[8,9,10],type:"🥕"},{swap:[2,6],line:[6,7,3],type:"🍳"},{swap:[12,13],line:[12,13,14],type:"🥔"},{swap:[7,11],line:[3,7,11],type:"🍉"}],re=["🥔","🍉","🍳","🥕","🍬","🍉","🍬","🥔","🍳","🥕","🍉","🍬","🥕","🥔","🍳","🍉"],oe=()=>{const[t,r]=u.useState(!1);return u.useEffect(()=>{var o;const a=window.matchMedia("(prefers-reduced-motion: reduce)");r(a.matches);const s=()=>r(a.matches);return(o=a.addEventListener)==null||o.call(a,"change",s),()=>{var n;return(n=a.removeEventListener)==null?void 0:n.call(a,"change",s)}},[]),t},se=t=>{let r=t;for(;r===t;)r=$[Math.floor(Math.random()*$.length)];return r},T=({tile:t=48})=>{const[r,a]=u.useState(re),[s,o]=u.useState({}),[n,p]=u.useState("#e0405a"),S=oe(),l=u.useRef(!0);return u.useEffect(()=>{if(l.current=!0,S)return;const m=[],h=b=>new Promise(y=>m.push(window.setTimeout(y,b))),g=(b,y)=>a(c=>c.map((f,O)=>b.includes(O)?y:f));return(async()=>{let b=0;for(;l.current;){const{swap:y,line:c,type:f}=F[b%F.length];if(p(ae[f]),o({[y[0]]:"swap",[y[1]]:"swap"}),g([y[0],y[1]],f),await h(380),!l.current||(o({[c[0]]:"pop",[c[1]]:"pop",[c[2]]:"pop"}),g(c,f),await h(440),!l.current)||(a(O=>O.map((J,ee)=>c.includes(ee)?se(f):J)),o({[c[0]]:"drop",[c[1]]:"drop",[c[2]]:"drop"}),await h(440),!l.current))break;o({}),await h(520),b++}})(),()=>{l.current=!1,m.forEach(clearTimeout)}},[S]),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:`repeat(4, ${t}px)`,gap:6},children:[e.jsx("style",{children:`
        @keyframes fc-m3-drop { from { transform: translateY(-22px); opacity: 0; } to { transform: none; opacity: 1; } }
      `}),r.map((m,h)=>{const g=s[h];return e.jsx("div",{style:{width:t,height:t,display:"grid",placeItems:"center",borderRadius:"var(--rounded-02)",background:"var(--white-10)",transform:g==="swap"?"scale(1.1)":g==="pop"?"scale(0.2)":void 0,opacity:g==="pop"?0:1,boxShadow:g==="pop"?`0 0 16px 3px ${n}`:void 0,transition:"transform 320ms var(--ease-spring), opacity 320ms var(--ease-out), box-shadow 320ms var(--ease-out)",animation:g==="drop"?"fc-m3-drop 380ms var(--ease-out)":void 0},children:e.jsx("span",{style:{fontSize:Math.round(t*.62),lineHeight:1},role:"img","aria-label":"tile",children:m})},h)})]})};T.__docgenInfo={description:`A Match-3 board that plays *itself* — the hero of the "play on your own pace"
card.

It runs a fixed loop rather than a real solver: each beat nudges a pair,
lands three of one type in a line, flashes them out in that tile's payout
colour, then drops fresh tiles into the gap. Scripted because the card only
needs to *read* as a live game in a two-second glance — a real engine would
be motion nobody watches long enough to verify. Honours reduced-motion by
holding a still board.`,methods:[],displayName:"MiniMatch3",props:{tile:{required:!1,tsType:{name:"number"},description:"Tile edge in px. The card sizes it to fill the 208px hero.",defaultValue:{value:"48",computed:!1}}}};const ne=({w:t})=>{const r=t*.44,a=t*.16,s=t/2,o=t/2-1,n=r/2,p=te.useId();return e.jsxs("svg",{width:t,height:r+a,viewBox:`0 0 ${t} ${r+a}`,style:{display:"block"},children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:`rim${p}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0",stopColor:"#e5a505"}),e.jsx("stop",{offset:"1",stopColor:"#c98600"})]}),e.jsxs("linearGradient",{id:`face${p}`,x1:"0.2",y1:"0",x2:"0.8",y2:"1",children:[e.jsx("stop",{offset:"0",stopColor:"#ffe24d"}),e.jsx("stop",{offset:"0.55",stopColor:"#ffd000"}),e.jsx("stop",{offset:"1",stopColor:"#f7c000"})]})]}),e.jsx("path",{d:`M${s-o},${n+a/2} a${o},${n} 0 1,0 ${o*2},0 v${a} a${o},${n} 0 1,1 -${o*2},0 Z`,fill:`url(#rim${p})`}),e.jsx("ellipse",{cx:s,cy:n+a/2,rx:o,ry:n,fill:`url(#face${p})`}),e.jsx("ellipse",{cx:s,cy:n+a/2-n*.28,rx:o*.62,ry:n*.42,fill:"#fff2a8",opacity:.55})]})},R=({count:t=7,coin:r=84,replayKey:a=0})=>{const s=r*.16,o=r*.44,n=s+o*.16,p=o+s+n*(t-1);return e.jsxs("div",{style:{position:"relative",width:r+24,height:p+24,display:"grid",placeItems:"end center"},children:[e.jsx("style",{children:`
        @keyframes fc-coin-drop {
          0%   { transform: translateY(-46px) scaleY(0.7); opacity: 0; }
          60%  { opacity: 1; }
          80%  { transform: translateY(2px) scaleY(1.08); }
          100% { transform: translateY(0) scaleY(1); opacity: 1; }
        }
        @keyframes fc-coin-bob {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-3px); }
        }
        @keyframes fc-coin-top-tilt {
          0%,100% { transform: rotate(-4deg); }
          50%     { transform: rotate(4deg); }
        }
      `}),e.jsx("div",{style:{position:"relative",width:r,height:p,animation:"fc-coin-bob 3.6s var(--ease-inout) infinite",animationDelay:`${t*.09+.5}s`},children:Array.from({length:t}).map((S,l)=>{const m=l,h=l===t-1;return e.jsx("div",{style:{position:"absolute",left:0,bottom:m*n,width:r,transformOrigin:"center bottom",animation:"fc-coin-drop 620ms var(--ease-spring) both",animationDelay:`${m*90}ms`,zIndex:m},children:e.jsx("div",{style:h?{animation:"fc-coin-top-tilt 3.6s var(--ease-inout) infinite",animationDelay:`${t*.09+.7}s`,transformOrigin:"center bottom"}:void 0,children:e.jsx(ne,{w:r})})},l)})})]},a)};R.__docgenInfo={description:`A growing stack of coins — the hero of the "watch your balance grow" card.

The source Lottie hard-codes six coins in two columns; this rebuilds the same
motion parametrically so the **count is a prop** (the balance is custom, so
the pile has to be). Each coin drops in with a spring and a squash, staggered
bottom-to-top, then the whole stack settles into a slow idle bob and the top
coin gives a small tilt — the three moves the Lottie reads as "alive". The
step between coins is the rim height, so any count stacks cleanly.`,methods:[],displayName:"CoinStack",props:{count:{required:!1,tsType:{name:"number"},description:"How many coins in the stack. This is the custom bit — drive it.",defaultValue:{value:"7",computed:!1}},coin:{required:!1,tsType:{name:"number"},description:"Coin width in px.",defaultValue:{value:"84",computed:!1}},replayKey:{required:!1,tsType:{name:"number"},description:"Replay trigger — bump to re-drop the whole stack.",defaultValue:{value:"0",computed:!1}}}};const ie=""+new URL("visa-DTFuKyLh.png",import.meta.url).href,de=""+new URL("amazon-CeRAiXZZ.png",import.meta.url).href,le=""+new URL("paypal-CU0GEll1.png",import.meta.url).href,ce=[{src:ie,alt:"VISA",rot:-3,z:1},{src:de,alt:"Amazon",rot:6,z:3},{src:le,alt:"PayPal",rot:-7,z:2}],E=({size:t=68,animated:r=!0})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7},children:[e.jsx("style",{children:`
      @keyframes fc-pay-sway {
        0%,100% { transform: rotate(var(--r)) translateY(0); }
        50%     { transform: rotate(var(--r)) translateY(-3px); }
      }
    `}),ce.map((a,s)=>e.jsx("div",{style:{"--r":`${a.rot}deg`,width:t,height:t,borderRadius:12,overflow:"hidden",zIndex:a.z,transform:`rotate(${a.rot}deg)`,boxShadow:"0 6px 14px -4px rgba(0,0,0,0.35)",animation:r?`fc-pay-sway 4s var(--ease-inout) ${s*.4}s infinite`:void 0},children:e.jsx("img",{src:a.src,alt:a.alt,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})},a.alt))]});E.__docgenInfo={description:"",methods:[],displayName:"PaymentLogos",props:{size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"68",computed:!1}},animated:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const pe=""+new URL("rosette-DwPGczyQ.png",import.meta.url).href,M=({size:t=200,animated:r=!0})=>e.jsxs("div",{style:{position:"relative",width:t,height:t,animation:r?"fc-badge-float 4.5s var(--ease-inout) infinite":void 0},children:[e.jsx("style",{children:`
      @keyframes fc-badge-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
      @keyframes fc-badge-shine { 0% { transform: translateX(-120%) rotate(8deg); } 60%,100% { transform: translateX(220%) rotate(8deg); } }
    `}),e.jsx("span",{"aria-hidden":!0,style:{position:"absolute",inset:"8%",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(255,180,60,0.5), transparent 70%)",filter:"blur(6px)"}}),e.jsx("img",{src:pe,alt:"€10 starter reward",style:{position:"relative",width:"100%",height:"100%",objectFit:"contain",display:"block"}}),r&&e.jsx("span",{"aria-hidden":!0,style:{position:"absolute",top:0,left:0,width:"35%",height:"100%",background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",animation:"fc-badge-shine 5s ease-in-out infinite",pointerEvents:"none"}})]});M.__docgenInfo={description:`The award rosette from the "here is your starter reward" card.

The medallion is the exact Figma export (a glossy scalloped badge with the
€10 figure), committed rather than hot-linked so it survives past the asset
URL's 7-day life. The amount is baked into the artwork — if the reward ever
needs to be dynamic, that becomes an SVG rebuild; for the onboarding it is a
fixed, verified number, so the image is the honest source.

The only motion is a slow float and a sweep of light across the badge, which
borrows the grammar of a prize being presented.`,methods:[],displayName:"RewardBadge",props:{size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"200",computed:!1}},animated:{required:!1,tsType:{name:"boolean"},description:"Idle shine + float.",defaultValue:{value:"true",computed:!1}}}};const me={title:"Onboarding/Cards",parameters:{layout:"centered",docs:{description:{component:`Onboarding / Cards

The four value-prop cards from the onboarding carousel (Figma 283-5134,
283-5260, 291-7670, 291-8062). Each is the same OnboardingCard shell with a
different animated hero — ported with its logic, not as a flat picture.`}}}},w={name:"1 · Play on your own pace",parameters:{docs:{description:{story:"The game promise, made literal — a Match-3 board that plays itself. The hero (MiniMatch3) runs a scripted swap → match → clear → refill loop in each tile’s payout colour, so in a glance the card says “this is a real game you’d play anyway”. Scripted, not solved: nobody watches an onboarding card long enough to audit real match logic, so the budget goes to the feel. Holds still under reduced-motion."}}},render:()=>e.jsx(i,{...d.play,bottom:"Play on your own pace",children:e.jsx(T,{})})},v={name:"2 · Watch your balance grow",parameters:{docs:{description:{story:"The blue card is an empty placeholder in Figma — the coins were always meant to be added in code. This rebuilds the icons8 coin Lottie parametrically: same drop-with-squash, settle and idle bob, but the coin count is a prop, because the balance is custom. Use the control to change how tall the pile grows and replay the drop."}}},render:t=>{const[r,a]=u.useState(0);return e.jsxs("div",{style:{display:"grid",gap:"var(--space-4)",justifyItems:"center"},children:[e.jsx(i,{...d.balance,bottom:"Watch your balance grow",children:e.jsx(R,{count:t.count,replayKey:r})}),e.jsx("button",{onClick:()=>a(s=>s+1),style:I,children:"Replay drop"})]})},args:{count:7},argTypes:{count:{control:{type:"range",min:1,max:12,step:1}}}},x={name:"3 · Fast withdraw to",parameters:{docs:{description:{story:"The trust-in-payout card. The three logos are the exact Figma exports (VISA / Amazon / PayPal), committed into the repo — brand marks have to be pixel-right and the Figma URLs expire in a week. Each keeps the comp’s slight rotation so the row fans rather than lines up, with a soft idle sway. Two labels frame it: the promise on top, the fallback (“or through Bank transfer”) below."}}},render:()=>e.jsx(i,{...d.withdraw,top:"Fast withdraw to:",bottom:"or through Bank transfer",children:e.jsx(E,{})})},k={name:"4 · Starter reward",parameters:{docs:{description:{story:"The payoff card, closing the carousel. The €10 rosette is the committed Figma export; the amount is baked into the artwork because in onboarding it is a fixed, verified number, not a variable. The only motion is a slow float and a light sweep across the medallion — the grammar of a prize being handed over."}}},render:()=>e.jsx(i,{...d.reward,bottom:"Here is your starter reward.",children:e.jsx(M,{})})},j={name:"All four",parameters:{layout:"fullscreen",docs:{description:{story:"The set side by side — one shell, four heroes, four measured tints. Read left to right it is the pitch: play · earn · cash out · get rewarded."}}},render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)",padding:"var(--space-8)",background:"#0d0e18",flexWrap:"wrap",justifyContent:"center"},children:[e.jsx(i,{...d.play,bottom:"Play on your own pace",children:e.jsx(T,{})}),e.jsx(i,{...d.balance,bottom:"Watch your balance grow",children:e.jsx(R,{count:7})}),e.jsx(i,{...d.withdraw,top:"Fast withdraw to:",bottom:"or through Bank transfer",children:e.jsx(E,{})}),e.jsx(i,{...d.reward,bottom:"Here is your starter reward.",children:e.jsx(M,{})})]})},C={parameters:{docs:{description:{story:"The cards as the user meets them — one at a time, with dots and next/back. This is the composition the four cards are built for: a paced walk through the value props before the first action."}}},render:()=>{const t=[e.jsx(i,{...d.play,bottom:"Play on your own pace",children:e.jsx(T,{})},"p"),e.jsx(i,{...d.balance,bottom:"Watch your balance grow",children:e.jsx(R,{count:7})},"b"),e.jsx(i,{...d.withdraw,top:"Fast withdraw to:",bottom:"or through Bank transfer",children:e.jsx(E,{})},"w"),e.jsx(i,{...d.reward,bottom:"Here is your starter reward.",children:e.jsx(M,{})},"r")],[r,a]=u.useState(0);return e.jsxs("div",{style:{display:"grid",gap:"var(--space-5)",justifyItems:"center"},children:[e.jsx("div",{style:{width:270,height:290,overflow:"hidden",borderRadius:"var(--rounded-06)"},children:e.jsx("div",{style:{display:"flex",width:270*t.length,transform:`translateX(-${r*270}px)`,transition:"transform var(--dur-slow) var(--ease-out)"},children:t.map((s,o)=>e.jsx("div",{style:{width:270},children:s},o))})}),e.jsx("div",{style:{display:"flex",gap:8},children:t.map((s,o)=>e.jsx("button",{onClick:()=>a(o),"aria-label":`Card ${o+1}`,style:{width:o===r?22:8,height:8,borderRadius:"var(--rounded-full)",border:"none",cursor:"pointer",background:o===r?"var(--action-primary)":"var(--gb-300)",transition:"width var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)"}},o))}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-3)"},children:[e.jsx("button",{onClick:()=>a(s=>Math.max(0,s-1)),disabled:r===0,style:I,children:"Back"}),e.jsx("button",{onClick:()=>a(s=>Math.min(t.length-1,s+1)),disabled:r===t.length-1,style:{...I,background:"var(--action-primary)",color:"var(--text-on-primary)",borderColor:"transparent"},children:"Next"})]})]})}},I={padding:"8px 18px",borderRadius:"var(--rounded-02)",border:"1px solid var(--border-default)",background:"var(--surface-container)",color:"var(--text-primary)",font:"600 13px/20px var(--font)",cursor:"pointer"};var P,_,H;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: '1 · Play on your own pace',
  parameters: {
    docs: {
      description: {
        story: 'The game promise, made literal — a Match-3 board that plays itself. The hero (MiniMatch3) runs a scripted swap → match → clear → refill loop in each tile’s payout colour, so in a glance the card says “this is a real game you’d play anyway”. Scripted, not solved: nobody watches an onboarding card long enough to audit real match logic, so the budget goes to the feel. Holds still under reduced-motion.'
      }
    }
  },
  render: () => <OnboardingCard {...CARD_THEME.play} bottom="Play on your own pace">
      <MiniMatch3 />
    </OnboardingCard>
}`,...(H=(_=w.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var L,B,D;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '2 · Watch your balance grow',
  parameters: {
    docs: {
      description: {
        story: 'The blue card is an empty placeholder in Figma — the coins were always meant to be added in code. This rebuilds the icons8 coin Lottie parametrically: same drop-with-squash, settle and idle bob, but the coin count is a prop, because the balance is custom. Use the control to change how tall the pile grows and replay the drop.'
      }
    }
  },
  render: (args: {
    count: number;
  }) => {
    const [k, setK] = useState(0);
    return <div style={{
      display: 'grid',
      gap: 'var(--space-4)',
      justifyItems: 'center'
    }}>
        <OnboardingCard {...CARD_THEME.balance} bottom="Watch your balance grow">
          <CoinStack count={args.count} replayKey={k} />
        </OnboardingCard>
        <button onClick={() => setK(n => n + 1)} style={btn}>Replay drop</button>
      </div>;
  },
  args: {
    count: 7
  },
  argTypes: {
    count: {
      control: {
        type: 'range',
        min: 1,
        max: 12,
        step: 1
      }
    }
  }
}`,...(D=(B=v.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var z,q,N;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '3 · Fast withdraw to',
  parameters: {
    docs: {
      description: {
        story: 'The trust-in-payout card. The three logos are the exact Figma exports (VISA / Amazon / PayPal), committed into the repo — brand marks have to be pixel-right and the Figma URLs expire in a week. Each keeps the comp’s slight rotation so the row fans rather than lines up, with a soft idle sway. Two labels frame it: the promise on top, the fallback (“or through Bank transfer”) below.'
      }
    }
  },
  render: () => <OnboardingCard {...CARD_THEME.withdraw} top="Fast withdraw to:" bottom="or through Bank transfer">
      <PaymentLogos />
    </OnboardingCard>
}`,...(N=(q=x.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var W,Y,V;k.parameters={...k.parameters,docs:{...(W=k.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: '4 · Starter reward',
  parameters: {
    docs: {
      description: {
        story: 'The payoff card, closing the carousel. The €10 rosette is the committed Figma export; the amount is baked into the artwork because in onboarding it is a fixed, verified number, not a variable. The only motion is a slow float and a light sweep across the medallion — the grammar of a prize being handed over.'
      }
    }
  },
  render: () => <OnboardingCard {...CARD_THEME.reward} bottom="Here is your starter reward.">
      <RewardBadge />
    </OnboardingCard>
}`,...(V=(Y=k.parameters)==null?void 0:Y.docs)==null?void 0:V.source}}};var U,G,K;j.parameters={...j.parameters,docs:{...(U=j.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'All four',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'The set side by side — one shell, four heroes, four measured tints. Read left to right it is the pitch: play · earn · cash out · get rewarded.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--space-6)',
    padding: 'var(--space-8)',
    background: '#0d0e18',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}>
      <OnboardingCard {...CARD_THEME.play} bottom="Play on your own pace"><MiniMatch3 /></OnboardingCard>
      <OnboardingCard {...CARD_THEME.balance} bottom="Watch your balance grow"><CoinStack count={7} /></OnboardingCard>
      <OnboardingCard {...CARD_THEME.withdraw} top="Fast withdraw to:" bottom="or through Bank transfer"><PaymentLogos /></OnboardingCard>
      <OnboardingCard {...CARD_THEME.reward} bottom="Here is your starter reward."><RewardBadge /></OnboardingCard>
    </div>
}`,...(K=(G=j.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var X,Z,Q;C.parameters={...C.parameters,docs:{...(X=C.parameters)==null?void 0:X.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The cards as the user meets them — one at a time, with dots and next/back. This is the composition the four cards are built for: a paced walk through the value props before the first action.'
      }
    }
  },
  render: () => {
    const slides = [<OnboardingCard key="p" {...CARD_THEME.play} bottom="Play on your own pace"><MiniMatch3 /></OnboardingCard>, <OnboardingCard key="b" {...CARD_THEME.balance} bottom="Watch your balance grow"><CoinStack count={7} /></OnboardingCard>, <OnboardingCard key="w" {...CARD_THEME.withdraw} top="Fast withdraw to:" bottom="or through Bank transfer"><PaymentLogos /></OnboardingCard>, <OnboardingCard key="r" {...CARD_THEME.reward} bottom="Here is your starter reward."><RewardBadge /></OnboardingCard>];
    const [i, setI] = useState(0);
    return <div style={{
      display: 'grid',
      gap: 'var(--space-5)',
      justifyItems: 'center'
    }}>
        <div style={{
        width: 270,
        height: 290,
        overflow: 'hidden',
        borderRadius: 'var(--rounded-06)'
      }}>
          <div style={{
          display: 'flex',
          width: 270 * slides.length,
          transform: \`translateX(-\${i * 270}px)\`,
          transition: 'transform var(--dur-slow) var(--ease-out)'
        }}>
            {slides.map((s, k) => <div key={k} style={{
            width: 270
          }}>{s}</div>)}
          </div>
        </div>
        <div style={{
        display: 'flex',
        gap: 8
      }}>
          {slides.map((_, k) => <button key={k} onClick={() => setI(k)} aria-label={\`Card \${k + 1}\`} style={{
          width: k === i ? 22 : 8,
          height: 8,
          borderRadius: 'var(--rounded-full)',
          border: 'none',
          cursor: 'pointer',
          background: k === i ? 'var(--action-primary)' : 'var(--gb-300)',
          transition: 'width var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)'
        }} />)}
        </div>
        <div style={{
        display: 'flex',
        gap: 'var(--space-3)'
      }}>
          <button onClick={() => setI(v => Math.max(0, v - 1))} disabled={i === 0} style={btn}>Back</button>
          <button onClick={() => setI(v => Math.min(slides.length - 1, v + 1))} disabled={i === slides.length - 1} style={{
          ...btn,
          background: 'var(--action-primary)',
          color: 'var(--text-on-primary)',
          borderColor: 'transparent'
        }}>Next</button>
        </div>
      </div>;
  }
}`,...(Q=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:Q.source}}};const ge=["Play","Balance","Withdraw","Reward","AllFour","Carousel"];export{j as AllFour,v as Balance,C as Carousel,w as Play,k as Reward,x as Withdraw,ge as __namedExportsOrder,me as default};
