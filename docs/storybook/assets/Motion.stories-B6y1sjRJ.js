import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as o}from"./index-Bc2G9s8g.js";import{P as y,H as x,S as i,M as l}from"./_docs-B6y56cop.js";const M={title:"Foundations/Motion",parameters:{layout:"fullscreen",docs:{description:{component:`Foundations / Motion

The one part of the system with no Figma source — Figma has no motion
primitives, so these tokens are new here. The organising idea: durations are
grouped by how far a thing travels, not by which component owns it, so
unrelated elements animating at once stay in step.`}}}},h=[{token:"--dur-instant",ms:90,use:"Colour / opacity swap on press"},{token:"--dur-fast",ms:160,use:"Small state changes, icon swaps"},{token:"--dur-base",ms:240,use:"The default — most enter / exit"},{token:"--dur-slow",ms:400,use:"Long distances — the meter filling"},{token:"--dur-reveal",ms:600,use:"Staged screen reveals"}],f=[{token:"--ease-out",curve:"cubic-bezier(.22,1,.36,1)",use:"Decelerate — entering"},{token:"--ease-in",curve:"cubic-bezier(.64,0,.78,0)",use:"Accelerate — leaving"},{token:"--ease-inout",curve:"cubic-bezier(.65,0,.35,1)",use:"Symmetric — moving in place"},{token:"--ease-spring",curve:"cubic-bezier(.34,1.56,.64,1)",use:"Overshoot — playful confirmations"}],a={name:"Duration & easing",parameters:{docs:{description:{story:"Five durations, four curves. Every animated component references these, so the whole app runs on one clock. Reduced-motion is honoured globally in tokens.css — motion is decoration, never the message."}}},render:()=>e.jsxs(y,{children:[e.jsx(x,{eyebrow:"Foundations · Motion",title:"Motion",lead:"New to this system — Figma carries no motion. Durations scale with travel distance; curves carry intent."}),e.jsx(i,{title:"Duration",children:e.jsx("div",{style:{display:"grid",gap:"var(--space-3)"},children:h.map(r=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"150px 60px 1fr",gap:"var(--space-4)",alignItems:"center"},children:[e.jsx(l,{children:r.token}),e.jsxs("span",{style:{font:"400 12px/18px var(--font)",color:"var(--text-secondary)"},children:[r.ms,"ms"]}),e.jsx("span",{style:{font:"400 13px/19px var(--font)",color:"var(--text-primary)"},children:r.use})]},r.token))})}),e.jsx(i,{title:"Easing",note:"Curves are the grammar: things enter with ease-out, leave with ease-in, and confirm with a spring.",children:e.jsx("div",{style:{display:"grid",gap:"var(--space-3)"},children:f.map(r=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"150px 1fr",gap:"var(--space-4)",alignItems:"baseline"},children:[e.jsx(l,{children:r.token}),e.jsxs("span",{style:{font:"400 13px/19px var(--font)",color:"var(--text-primary)"},children:[r.use," ",e.jsxs("span",{style:{color:"var(--text-secondary)"},children:["· ",r.curve]})]})]},r.token))})})]})},s={parameters:{docs:{description:{story:"Feel the tokens. Pick a duration and a curve, then trigger — the same 240px travel makes the difference between curves obvious, and shows why the spring is kept for confirmations only."}}},render:()=>{const[r,b]=o.useState("--dur-base"),[n,k]=o.useState("--ease-out"),[w,S]=o.useState(!1);return e.jsxs(y,{children:[e.jsx(x,{eyebrow:"Foundations · Motion",title:"Playground",lead:"Same distance, different tokens."}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)",flexWrap:"wrap",marginBottom:"var(--space-8)"},children:[e.jsxs("label",{style:{font:"400 13px/19px var(--font)",color:"var(--text-secondary)"},children:["Duration ",e.jsx("select",{value:r,onChange:t=>b(t.target.value),style:d,children:h.map(t=>e.jsxs("option",{value:t.token,children:[t.token," · ",t.ms,"ms"]},t.token))})]}),e.jsxs("label",{style:{font:"400 13px/19px var(--font)",color:"var(--text-secondary)"},children:["Easing ",e.jsx("select",{value:n,onChange:t=>k(t.target.value),style:d,children:f.map(t=>e.jsx("option",{value:t.token,children:t.token},t.token))})]}),e.jsx("button",{onClick:()=>S(t=>!t),style:j,children:"Trigger"})]}),e.jsx("div",{style:{position:"relative",height:64,background:"var(--surface-container)",borderRadius:"var(--rounded-03)",border:"1px solid var(--border-subtle)"},children:e.jsx("div",{style:{position:"absolute",top:8,left:8,width:48,height:48,borderRadius:"var(--rounded-02)",background:"var(--action-primary)",transform:w?"translateX(240px)":"translateX(0)",transition:`transform var(${r}) var(${n})`}})})]})}},d={marginLeft:6,background:"var(--surface-input)",color:"var(--text-primary)",border:"1px solid var(--border-default)",borderRadius:"var(--rounded-02)",padding:"6px 10px",font:"400 13px/19px var(--font)"},j={background:"var(--action-primary)",color:"var(--text-on-primary)",border:"none",borderRadius:"var(--rounded-02)",padding:"8px 18px",font:"600 13px/19px var(--font)",cursor:"pointer"};var c,p,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Duration & easing',
  parameters: {
    docs: {
      description: {
        story: 'Five durations, four curves. Every animated component references these, so the whole app runs on one clock. Reduced-motion is honoured globally in tokens.css — motion is decoration, never the message.'
      }
    }
  },
  render: () => <Page>
      <Header eyebrow="Foundations · Motion" title="Motion" lead="New to this system — Figma carries no motion. Durations scale with travel distance; curves carry intent." />
      <Section title="Duration">
        <div style={{
        display: 'grid',
        gap: 'var(--space-3)'
      }}>
          {DURATIONS.map(d => <div key={d.token} style={{
          display: 'grid',
          gridTemplateColumns: '150px 60px 1fr',
          gap: 'var(--space-4)',
          alignItems: 'center'
        }}>
              <Mono>{d.token}</Mono>
              <span style={{
            font: '400 12px/18px var(--font)',
            color: 'var(--text-secondary)'
          }}>{d.ms}ms</span>
              <span style={{
            font: '400 13px/19px var(--font)',
            color: 'var(--text-primary)'
          }}>{d.use}</span>
            </div>)}
        </div>
      </Section>
      <Section title="Easing" note="Curves are the grammar: things enter with ease-out, leave with ease-in, and confirm with a spring.">
        <div style={{
        display: 'grid',
        gap: 'var(--space-3)'
      }}>
          {EASES.map(e => <div key={e.token} style={{
          display: 'grid',
          gridTemplateColumns: '150px 1fr',
          gap: 'var(--space-4)',
          alignItems: 'baseline'
        }}>
              <Mono>{e.token}</Mono>
              <span style={{
            font: '400 13px/19px var(--font)',
            color: 'var(--text-primary)'
          }}>
                {e.use} <span style={{
              color: 'var(--text-secondary)'
            }}>· {e.curve}</span>
              </span>
            </div>)}
        </div>
      </Section>
    </Page>
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var v,m,g;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Feel the tokens. Pick a duration and a curve, then trigger — the same 240px travel makes the difference between curves obvious, and shows why the spring is kept for confirmations only.'
      }
    }
  },
  render: () => {
    const [dur, setDur] = useState('--dur-base');
    const [ease, setEase] = useState('--ease-out');
    const [on, setOn] = useState(false);
    return <Page>
        <Header eyebrow="Foundations · Motion" title="Playground" lead="Same distance, different tokens." />
        <div style={{
        display: 'flex',
        gap: 'var(--space-6)',
        flexWrap: 'wrap',
        marginBottom: 'var(--space-8)'
      }}>
          <label style={{
          font: '400 13px/19px var(--font)',
          color: 'var(--text-secondary)'
        }}>
            Duration&nbsp;
            <select value={dur} onChange={e => setDur(e.target.value)} style={selectStyle}>
              {DURATIONS.map(d => <option key={d.token} value={d.token}>{d.token} · {d.ms}ms</option>)}
            </select>
          </label>
          <label style={{
          font: '400 13px/19px var(--font)',
          color: 'var(--text-secondary)'
        }}>
            Easing&nbsp;
            <select value={ease} onChange={e => setEase(e.target.value)} style={selectStyle}>
              {EASES.map(e => <option key={e.token} value={e.token}>{e.token}</option>)}
            </select>
          </label>
          <button onClick={() => setOn(v => !v)} style={triggerStyle}>Trigger</button>
        </div>
        <div style={{
        position: 'relative',
        height: 64,
        background: 'var(--surface-container)',
        borderRadius: 'var(--rounded-03)',
        border: '1px solid var(--border-subtle)'
      }}>
          <div style={{
          position: 'absolute',
          top: 8,
          left: 8,
          width: 48,
          height: 48,
          borderRadius: 'var(--rounded-02)',
          background: 'var(--action-primary)',
          transform: on ? 'translateX(240px)' : 'translateX(0)',
          transition: \`transform var(\${dur}) var(\${ease})\`
        }} />
        </div>
      </Page>;
  }
}`,...(g=(m=s.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const T=["Tokens","Playground"];export{s as Playground,a as Tokens,T as __namedExportsOrder,M as default};
