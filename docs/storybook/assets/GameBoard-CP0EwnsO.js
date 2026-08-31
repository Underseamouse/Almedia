import{j as e}from"./jsx-runtime-DFAAy_2V.js";const p=({balance:t="€0",glow:r=!0,animated:i=!0,style:n})=>e.jsxs("div",{style:{position:"relative",display:"inline-flex",...n},children:[e.jsx("style",{children:`
      @keyframes fc-wallet-glow {
        0%,100% { opacity: 0.55; transform: translate(-50%, -50%) scale(1); }
        50%     { opacity: 0.85; transform: translate(-50%, -50%) scale(1.08); }
      }
    `}),r&&e.jsx("span",{"aria-hidden":!0,style:{position:"absolute",top:"50%",left:"50%",width:"150%",height:"260%",transform:"translate(-50%, -50%)",background:"radial-gradient(closest-side, rgba(255,199,0,0.45), rgba(255,199,0,0) 72%)",filter:"blur(4px)",pointerEvents:"none",animation:i?"fc-wallet-glow 3.4s var(--ease-inout) infinite":void 0}}),e.jsxs("div",{style:{position:"relative",display:"inline-flex",alignItems:"center",gap:"var(--space-4)",background:"var(--gb-transparent)",border:"var(--border-thin) solid var(--warning-600)",borderBottomWidth:"3px",borderRadius:"var(--rounded-04)",padding:"var(--space-2) var(--space-4)"},children:[e.jsx("span",{style:{fontSize:"var(--icon-lg)",lineHeight:1},role:"img","aria-label":"coins",children:"🪙"}),e.jsx("span",{style:{font:"600 var(--t-lg)/var(--t-lg-lh) var(--font)",letterSpacing:"var(--tracking)",color:"var(--text-primary)",whiteSpace:"nowrap"},children:t})]})]});p.__docgenInfo={description:`The running balance, carried at the top of the game screen.

Two decisions come straight from comp 214-9615 and both are deliberate:

1. The rim is Warning 600 (#d19100), a *darker* gold than the Gold token —
   a rim has to read as an edge, and bright gold on the near-black ground
   blooms into a glow instead of holding a line. The bright gold is spent on
   the soft halo behind the pill, where bloom is the point.

2. The bottom border is heavier than the other three (3px vs 1px). That is
   the same physical-edge trick the primary button uses — a lit top and a
   shadowed underside — so the pill sits *on* the surface rather than in it.

The fill is the 80%-navy token, not a solid, so the ambient light bleeds
through and ties the pill to the ground it floats over.`,methods:[],displayName:"WalletPill",props:{balance:{required:!1,tsType:{name:"string"},description:"Balance, already formatted with its currency.",defaultValue:{value:"'€0'",computed:!1}},glow:{required:!1,tsType:{name:"boolean"},description:"The gold glow behind the pill. On for the hero, off in a dense header.",defaultValue:{value:"true",computed:!1}},animated:{required:!1,tsType:{name:"boolean"},description:"Breathe the glow. Falls still under prefers-reduced-motion (global).",defaultValue:{value:"true",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const c={W:"🍉",C:"🍬",P:"🥔",E:"🍳",R:"🥕"},m=[["P","W","E","R","W"],["C","C","P","E","W"],["E","R","C","W","P"],["R","P","E","C","R"]],u=({layout:t=m,highlight:r=[],animated:i=!0,style:n})=>{const d=new Set(r);return e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 56px)",gap:"var(--space-2)",...n},children:[e.jsx("style",{children:`
        @keyframes fc-tile-float {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-3px); }
        }
      `}),t.flatMap((h,l)=>h.map((o,s)=>{const a=d.has(`${l},${s}`);return e.jsx("div",{style:{width:56,height:56,display:"grid",placeItems:"center",background:a?"rgba(255,255,255,0.16)":"var(--white-10)",borderRadius:"var(--rounded-02)",boxShadow:a?"0 0 0 2px var(--border-selected)":void 0,transform:a?"translateY(-3px)":void 0,transition:"transform var(--dur-base) var(--ease-spring), background var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",animation:i&&!a?`fc-tile-float 4s var(--ease-inout) ${(l+s)%5*.3}s infinite`:void 0},children:e.jsx("span",{style:{fontSize:40,lineHeight:1},role:"img","aria-label":o,children:c[o]})},`${l},${s}`)}))]})};u.__docgenInfo={description:`The Match-3 board that fills the middle of the game screen.

It carries the product's core promise in one glance — *this is a real game,
not a wall of survey rows*. The grammar is deliberately minimal: tiles are a
flat 10%-white cell (\`rounded-02\`) with a single 3D emoji, so the emoji does
all the talking and the grid never competes with the CTA below it.

Geometry is the comp's: 5×4, 8px gutters, a 48px glyph in a 56px cell. In the
live prototype these tiles swap and clear on a scripted Match-3; here the
board is static, with an optional idle float and a \`highlight\` set to stage
the winning move for documentation.`,methods:[],displayName:"GameBoard",props:{layout:{required:!1,tsType:{name:"Array",elements:[{name:"Array",elements:[{name:"union",raw:"keyof typeof TILE",elements:[{name:"literal",value:"W"},{name:"literal",value:"C"},{name:"literal",value:"P"},{name:"literal",value:"E"},{name:"literal",value:"R"}]}],raw:"TileKey[]"}],raw:"TileKey[][]"},description:"Rows of tile keys. Defaults to the opening board.",defaultValue:{value:`[
  ['P', 'W', 'E', 'R', 'W'],
  ['C', 'C', 'P', 'E', 'W'],
  ['E', 'R', 'C', 'W', 'P'],
  ['R', 'P', 'E', 'C', 'R']
]`,computed:!1}},highlight:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:'Tiles at these "r,c" coords lift and brighten — the scripted match.',defaultValue:{value:"[]",computed:!1}},animated:{required:!1,tsType:{name:"boolean"},description:"Idle float, so the board reads as alive rather than a screenshot.",defaultValue:{value:"true",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};export{u as G,p as W};
