import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as z}from"./index-Bc2G9s8g.js";import{B as d}from"./BreathingOrb-B6EMT7ca.js";import{M as A,a as O,b as R,c as B,P as I}from"./sampleArt-BAzi8iLL.js";import{A as M,L as k}from"./Ambient-99c8bLGp.js";const C={title:"Effects"},t={name:"Breathing orb",parameters:{docs:{description:{story:'The splash mark. A ring of dots that breathes in place — it never spins, because spinning reads as "working" and this screen is only ever on for a second.'}}},render:r=>e.jsxs("div",{style:{display:"flex",gap:"var(--space-12)",alignItems:"center"},children:[e.jsxs("div",{style:{position:"relative",display:"grid",placeItems:"center"},children:[e.jsx(d,{...r}),e.jsx("span",{style:{position:"absolute"},children:e.jsx(k,{variant:"mark",size:r.size*.34})})]}),e.jsxs("div",{style:{display:"grid",gap:"var(--space-6)"},children:[e.jsx(d,{size:48,count:22}),e.jsx(d,{size:32,count:16,color:"var(--gold)"})]})]}),args:{size:140,count:34,speed:1,depth:.12},argTypes:{size:{control:{type:"range",min:32,max:260,step:4}},count:{control:{type:"range",min:8,max:80,step:1}},speed:{control:{type:"range",min:.2,max:3,step:.1}},depth:{control:{type:"range",min:0,max:.4,step:.01}}}},S=({label:r,children:a})=>e.jsx("div",{style:{width:210,height:116,borderRadius:"var(--rounded-04)",background:"var(--surface-container)",display:"grid",placeItems:"center",font:"500 13px/20px var(--font)",color:"var(--text-secondary)"},children:a??r}),s={name:"Mono outline",parameters:{docs:{description:{story:"A hairline stroke that marks the one live thing on screen. Mono stays achromatic on purpose — it frames content without competing with the brand green, so it can sit on a card that already has a green badge."}}},render:()=>e.jsx("div",{style:{display:"grid",gap:"var(--space-6)"},children:["travel","pulse","bloom"].map(r=>e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)",alignItems:"center"},children:[e.jsx("code",{style:{width:72,font:"400 12px/18px ui-monospace, monospace",color:"var(--text-secondary)"},children:r}),["mono","brand","gold"].map(a=>e.jsx(A,{variant:r,tone:a,radius:"var(--rounded-04)",children:e.jsx(S,{label:a})},a))]},r))})},n={name:"Pixel reveal (image loader)",parameters:{docs:{description:{story:"Artwork arrives as a grid of colours sampled from itself, flickers, then dissolves along a diagonal. Because the placeholder is the image's own palette, the wait reads as focusing rather than swapping."}}},render:r=>{const[a,j]=z.useState(0);return e.jsxs("div",{style:{display:"grid",gap:"var(--space-4)",justifyItems:"start"},children:[e.jsx("div",{style:{display:"flex",gap:"var(--space-4)"},children:[O,R,B].map((i,w)=>e.jsx(I,{src:i,replayKey:a,...r},w))}),e.jsx("button",{onClick:()=>j(i=>i+1),style:{padding:"8px 16px",borderRadius:"var(--rounded-02)",border:"1px solid var(--border-default)",background:"var(--surface-container)",color:"var(--text-primary)",font:"500 13px/20px var(--font)",cursor:"pointer"},children:"Replay"})]})},args:{width:168,height:168,cell:12,duration:1.6},argTypes:{cell:{control:{type:"range",min:4,max:32,step:1}},duration:{control:{type:"range",min:.4,max:4,step:.1}}}},o={name:"Ambient ground",parameters:{layout:"centered"},render:r=>e.jsx(M,{...r,style:{width:402,height:500,borderRadius:"var(--rounded-06)"},children:e.jsxs("div",{style:{display:"grid",placeItems:"center",height:"100%",gap:"var(--space-3)"},children:[e.jsx(k,{}),e.jsx("p",{style:{font:"400 14px/21px var(--font)",color:"var(--text-secondary)"},children:"drifting light + grain"})]})}),args:{grain:.055,animated:!0},argTypes:{grain:{control:{type:"range",min:0,max:.2,step:.005}}}};var p,l,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Breathing orb',
  parameters: {
    docs: {
      description: {
        story: 'The splash mark. A ring of dots that breathes in place — it never spins, because spinning reads as "working" and this screen is only ever on for a second.'
      }
    }
  },
  render: (args: any) => <div style={{
    display: 'flex',
    gap: 'var(--space-12)',
    alignItems: 'center'
  }}>
      <div style={{
      position: 'relative',
      display: 'grid',
      placeItems: 'center'
    }}>
        <BreathingOrb {...args} />
        <span style={{
        position: 'absolute'
      }}>
          <Logo variant="mark" size={args.size * 0.34} />
        </span>
      </div>
      <div style={{
      display: 'grid',
      gap: 'var(--space-6)'
    }}>
        <BreathingOrb size={48} count={22} />
        <BreathingOrb size={32} count={16} color="var(--gold)" />
      </div>
    </div>,
  args: {
    size: 140,
    count: 34,
    speed: 1,
    depth: 0.12
  },
  argTypes: {
    size: {
      control: {
        type: 'range',
        min: 32,
        max: 260,
        step: 4
      }
    },
    count: {
      control: {
        type: 'range',
        min: 8,
        max: 80,
        step: 1
      }
    },
    speed: {
      control: {
        type: 'range',
        min: 0.2,
        max: 3,
        step: 0.1
      }
    },
    depth: {
      control: {
        type: 'range',
        min: 0,
        max: 0.4,
        step: 0.01
      }
    }
  }
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var g,m,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Mono outline',
  parameters: {
    docs: {
      description: {
        story: 'A hairline stroke that marks the one live thing on screen. Mono stays achromatic on purpose — it frames content without competing with the brand green, so it can sit on a card that already has a green badge.'
      }
    }
  },
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--space-6)'
  }}>
      {(['travel', 'pulse', 'bloom'] as const).map(variant => <div key={variant} style={{
      display: 'flex',
      gap: 'var(--space-6)',
      alignItems: 'center'
    }}>
          <code style={{
        width: 72,
        font: '400 12px/18px ui-monospace, monospace',
        color: 'var(--text-secondary)'
      }}>
            {variant}
          </code>
          {(['mono', 'brand', 'gold'] as const).map(tone => <MonoOutline key={tone} variant={variant} tone={tone} radius="var(--rounded-04)">
              <Panel label={tone} />
            </MonoOutline>)}
        </div>)}
    </div>
}`,...(y=(m=s.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var u,h,v;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Pixel reveal (image loader)',
  parameters: {
    docs: {
      description: {
        story: "Artwork arrives as a grid of colours sampled from itself, flickers, then dissolves along a diagonal. Because the placeholder is the image's own palette, the wait reads as focusing rather than swapping."
      }
    }
  },
  render: (args: any) => {
    const [k, setK] = useState(0);
    return <div style={{
      display: 'grid',
      gap: 'var(--space-4)',
      justifyItems: 'start'
    }}>
        <div style={{
        display: 'flex',
        gap: 'var(--space-4)'
      }}>
          {[artSolitaire, artMonopoly, artSurvey].map((src, i) => <PixelReveal key={i} src={src} replayKey={k} {...args} />)}
        </div>
        <button onClick={() => setK(n => n + 1)} style={{
        padding: '8px 16px',
        borderRadius: 'var(--rounded-02)',
        border: '1px solid var(--border-default)',
        background: 'var(--surface-container)',
        color: 'var(--text-primary)',
        font: '500 13px/20px var(--font)',
        cursor: 'pointer'
      }}>
          Replay
        </button>
      </div>;
  },
  args: {
    width: 168,
    height: 168,
    cell: 12,
    duration: 1.6
  },
  argTypes: {
    cell: {
      control: {
        type: 'range',
        min: 4,
        max: 32,
        step: 1
      }
    },
    duration: {
      control: {
        type: 'range',
        min: 0.4,
        max: 4,
        step: 0.1
      }
    }
  }
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var x,f,b;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Ambient ground',
  parameters: {
    layout: 'centered'
  },
  render: (args: any) => <Ambient {...args} style={{
    width: 402,
    height: 500,
    borderRadius: 'var(--rounded-06)'
  }}>
      <div style={{
      display: 'grid',
      placeItems: 'center',
      height: '100%',
      gap: 'var(--space-3)'
    }}>
        <Logo />
        <p style={{
        font: '400 14px/21px var(--font)',
        color: 'var(--text-secondary)'
      }}>
          drifting light + grain
        </p>
      </div>
    </Ambient>,
  args: {
    grain: 0.055,
    animated: true
  },
  argTypes: {
    grain: {
      control: {
        type: 'range',
        min: 0,
        max: 0.2,
        step: 0.005
      }
    }
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const _=["Orb","Outline","Reveal","Background"];export{o as Background,t as Orb,s as Outline,n as Reveal,_ as __namedExportsOrder,C as default};
