import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{A as o,L as b}from"./Ambient-99c8bLGp.js";import{W as m,G as h}from"./GameBoard-CP0EwnsO.js";import{B as w}from"./Button-BCScP9TS.js";import"./index-Bc2G9s8g.js";const r=({balance:u="€0",headline:g="Play games you actually enjoy — and get paid for it",body:y="Every task and action turns into real money in your wallet.",cta:f="Next",animated:s=!0,onNext:v})=>e.jsx(o,{animated:s,style:{width:402,height:874,borderRadius:44,border:"1px solid rgba(255,255,255,0.06)"},children:e.jsxs("div",{style:{height:"100%",display:"grid",gridTemplateRows:"auto auto 1fr auto",padding:"60px 0 var(--space-8)",justifyItems:"center"},children:[e.jsx("div",{style:{paddingTop:"var(--space-6)",paddingBottom:"var(--space-6)"},children:e.jsx(b,{size:32})}),e.jsx("div",{style:{padding:"var(--space-6) 0"},children:e.jsx(m,{balance:u,animated:s})}),e.jsx("div",{style:{display:"grid",placeItems:"center",width:"100%"},children:e.jsx(h,{animated:s})}),e.jsxs("div",{style:{width:"100%",display:"grid",gap:"var(--space-6)",padding:"0 var(--space-6)"},children:[e.jsxs("div",{style:{display:"grid",gap:"var(--space-3)"},children:[e.jsx("h1",{style:{font:"500 var(--h-sm)/var(--h-sm-lh) var(--font)",letterSpacing:"var(--tracking)",color:"var(--text-primary)",margin:0},children:g}),e.jsx("p",{style:{font:"400 var(--t-lg)/var(--t-lg-lh) var(--font)",letterSpacing:"var(--tracking)",color:"var(--text-secondary)",margin:0},children:y})]}),e.jsx(w,{variant:"primary",onClick:v,children:f})]})]})});r.__docgenInfo={description:`The game screen — comp 181-8798, the visual target for the whole flow.

Its job is a single promise made visible: *this is a game you'd play anyway,
and it pays*. So the composition puts the board dead centre and lets three
quieter elements frame it — the wordmark for trust, the gold wallet for the
stakes, and one green CTA for the way forward. Nothing else competes.

It is assembled entirely from library parts (Ambient · Logo · WalletPill ·
GameBoard · Button) on the token grid — no bespoke values — which is the
point of a storybook screen: proof the components compose into the real thing.`,methods:[],displayName:"GameScreen",props:{balance:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'€0'",computed:!1}},headline:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Play games you actually enjoy — and get paid for it'",computed:!1}},body:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Every task and action turns into real money in your wallet.'",computed:!1}},cta:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Next'",computed:!1}},animated:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onNext:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const B={title:"Screens/Game screen",component:r,parameters:{layout:"centered"}},a={name:"Full screen",parameters:{docs:{description:{story:"Comp 181-8798, the visual target for the whole flow, assembled from library parts only — Ambient · Logo · WalletPill · GameBoard · Button on the token grid, no bespoke values. The board sits dead centre; the wordmark, the gold wallet and the one green CTA frame it without competing. That’s the job of a storybook screen: proof the components compose into the real thing."}}},render:()=>e.jsx(r,{})},t={name:"Anatomy",parameters:{layout:"fullscreen",docs:{description:{story:"The same screen pulled apart into the three framing pieces and their tokens. Reading top to bottom: trust (wordmark), stakes (wallet), play (board) — then the promise in words and the way forward."}}},render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--space-8)",padding:"var(--space-8)",background:"#0d0e18",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(r,{animated:!1}),e.jsxs("div",{style:{display:"grid",gap:"var(--space-8)"},children:[e.jsx(o,{animated:!1,style:{padding:"var(--space-8) var(--space-10)",borderRadius:"var(--rounded-06)"},children:e.jsx("div",{style:{display:"grid",placeItems:"center"},children:e.jsx(m,{balance:"€0",animated:!1})})}),e.jsx(o,{animated:!1,style:{padding:"var(--space-6)",borderRadius:"var(--rounded-06)"},children:e.jsx(h,{animated:!1,highlight:["1,0","1,1","2,2"]})})]})]})};var n,i,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Full screen',
  parameters: {
    docs: {
      description: {
        story: 'Comp 181-8798, the visual target for the whole flow, assembled from library parts only — Ambient · Logo · WalletPill · GameBoard · Button on the token grid, no bespoke values. The board sits dead centre; the wordmark, the gold wallet and the one green CTA frame it without competing. That’s the job of a storybook screen: proof the components compose into the real thing.'
      }
    }
  },
  render: () => <GameScreen />
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var l,p,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Anatomy',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'The same screen pulled apart into the three framing pieces and their tokens. Reading top to bottom: trust (wordmark), stakes (wallet), play (board) — then the promise in words and the way forward.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--space-8)',
    padding: 'var(--space-8)',
    background: '#0d0e18',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <GameScreen animated={false} />
      <div style={{
      display: 'grid',
      gap: 'var(--space-8)'
    }}>
        <Ambient animated={false} style={{
        padding: 'var(--space-8) var(--space-10)',
        borderRadius: 'var(--rounded-06)'
      }}>
          <div style={{
          display: 'grid',
          placeItems: 'center'
        }}>
            <WalletPill balance="€0" animated={false} />
          </div>
        </Ambient>
        <Ambient animated={false} style={{
        padding: 'var(--space-6)',
        borderRadius: 'var(--rounded-06)'
      }}>
          <GameBoard animated={false} highlight={['1,0', '1,1', '2,2']} />
        </Ambient>
      </div>
    </div>
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const G=["Default","Anatomy"];export{t as Anatomy,a as Default,G as __namedExportsOrder,B as default};
