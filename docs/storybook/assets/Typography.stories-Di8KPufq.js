import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{P as g,H as x,S as i,M as t}from"./_docs-B6y56cop.js";import"./index-Bc2G9s8g.js";const T={title:"Foundations/Typography",parameters:{layout:"fullscreen",docs:{description:{component:`Foundations / Typography

Poppins, one ramp of 11 steps, one tracking value. The page is a specimen,
not a spec sheet: every line is set in the real class at its real size, so
you read the type, not a description of it. The spec strip sits underneath.`}}}},y="Turn spare time into real cash",o=[{cls:"fc-h-2xl",name:"Heading 2xl",weight:"Bold 700",size:56,lh:84,use:"Reserved — a single hero number"},{cls:"fc-h-xl",name:"Heading xl",weight:"Bold 700",size:48,lh:72,use:"Splash headline"},{cls:"fc-h-lg",name:"Heading lg",weight:"Bold 700",size:40,lh:60,use:"Big reward figure"},{cls:"fc-h-md",name:"Heading md",weight:"Bold 700",size:32,lh:48,use:"Screen title"},{cls:"fc-h-sm",name:"Heading sm",weight:"SemiBold 600",size:24,lh:36,use:"Section title · meter value · the game headline"},{cls:"fc-h-xs",name:"Heading xs",weight:"SemiBold 600",size:20,lh:30,use:"Card title"},{cls:"fc-t-xl",name:"Text xl",weight:"Regular 400",size:18,lh:27,use:"Lead paragraph"},{cls:"fc-t-lg",name:"Text lg",weight:"Regular 400",size:16,lh:24,use:"Body — the default (447 nodes on freecash.com)"},{cls:"fc-t-md",name:"Text md",weight:"Regular 400",size:14,lh:21,use:"Secondary body, captions"},{cls:"fc-t-sm",name:"Text sm",weight:"Regular 400",size:12,lh:18,use:"Meta, field labels"},{cls:"fc-t-xs",name:"Text xs",weight:"Regular 400",size:10,lh:15,use:"Legal, timestamps"}],n=({step:s})=>e.jsxs("div",{style:{padding:"var(--space-5) 0",borderBottom:"1px solid var(--border-subtle)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"baseline",justifyContent:"space-between",gap:"var(--space-4)",marginBottom:"var(--space-3)",flexWrap:"wrap"},children:[e.jsx("span",{style:{font:"600 12px/18px var(--font)",color:"var(--text-primary)"},children:s.name}),e.jsxs("span",{style:{display:"flex",gap:"var(--space-4)",flexWrap:"wrap"},children:[e.jsxs(t,{dim:!0,children:[".",s.cls]}),e.jsx(t,{dim:!0,children:s.weight}),e.jsxs(t,{dim:!0,children:[s.size,"/",s.lh]}),e.jsx(t,{dim:!0,children:"+2%"})]})]}),e.jsx("div",{className:s.cls,style:{color:"var(--text-primary)"},children:y}),e.jsx("div",{style:{font:"400 12px/18px var(--font)",color:"var(--text-secondary)",marginTop:"var(--space-2)"},children:s.use})]}),a={name:"Type scale",parameters:{docs:{description:{story:"The full ramp, Heading 2xl down to Text xs. Line-height is a flat 1.5 across every step — that is the Freecash spec, and it runs loose on the display sizes; flagged for their team rather than silently corrected. Tracking is the brand’s 2%, on everything."}}},render:()=>e.jsxs(g,{children:[e.jsx(x,{eyebrow:"Foundations · Typography",title:"Type scale",lead:e.jsx(e.Fragment,{children:"Poppins across 11 steps. Sizes and line-heights are the exact px values from Typographies.pdf, confirmed against freecash.com — 16px carries the body, 14px the support."})}),e.jsx(i,{title:"Headings",note:"Bold at the top of the ramp, SemiBold at sm/xs where weight would otherwise shout.",children:o.filter(s=>s.cls.startsWith("fc-h")).map(s=>e.jsx(n,{step:s},s.cls))}),e.jsx(i,{title:"Text",note:"All Regular. Emphasis inside body copy comes from a heavier weight on the run, not a different step.",children:o.filter(s=>s.cls.startsWith("fc-t")).map(s=>e.jsx(n,{step:s},s.cls))})]})},f=[{w:400,name:"Regular",note:"Body, secondary copy"},{w:500,name:"Medium",note:"The game headline, quiet emphasis"},{w:600,name:"SemiBold",note:"Buttons, headings sm/xs, values"},{w:700,name:"Bold",note:"Display headings, hero numbers"}],r={parameters:{docs:{description:{story:"Figma ships each ramp step in four weights (44 styles total). These are the four; Poppins Light 300 is loaded but unused in the flow. A step and a weight are independent choices — pick the size for hierarchy, the weight for emphasis."}}},render:()=>e.jsxs(g,{children:[e.jsx(x,{eyebrow:"Foundations · Typography",title:"Weights",lead:"One size, four weights — the axis of emphasis that sits across the ramp."}),e.jsx("div",{style:{display:"grid",gap:2},children:f.map(s=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto",alignItems:"baseline",gap:"var(--space-4)",padding:"var(--space-4) 0",borderBottom:"1px solid var(--border-subtle)"},children:[e.jsxs("span",{style:{font:`${s.w} 28px/40px var(--font)`,letterSpacing:"var(--tracking)",color:"var(--text-primary)"},children:[s.name," · ",y]}),e.jsxs("span",{style:{display:"flex",gap:"var(--space-4)",alignItems:"baseline"},children:[e.jsx("span",{style:{font:"400 12px/18px var(--font)",color:"var(--text-secondary)"},children:s.note}),e.jsx(t,{dim:!0,children:s.w})]})]},s.w))})]})};var l,p,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Type scale',
  parameters: {
    docs: {
      description: {
        story: 'The full ramp, Heading 2xl down to Text xs. Line-height is a flat 1.5 across every step — that is the Freecash spec, and it runs loose on the display sizes; flagged for their team rather than silently corrected. Tracking is the brand’s 2%, on everything.'
      }
    }
  },
  render: () => <Page>
      <Header eyebrow="Foundations · Typography" title="Type scale" lead={<>Poppins across 11 steps. Sizes and line-heights are the exact px values from Typographies.pdf, confirmed against freecash.com — 16px carries the body, 14px the support.</>} />
      <Section title="Headings" note="Bold at the top of the ramp, SemiBold at sm/xs where weight would otherwise shout.">
        {RAMP.filter(s => s.cls.startsWith('fc-h')).map(s => <Specimen key={s.cls} step={s} />)}
      </Section>
      <Section title="Text" note="All Regular. Emphasis inside body copy comes from a heavier weight on the run, not a different step.">
        {RAMP.filter(s => s.cls.startsWith('fc-t')).map(s => <Specimen key={s.cls} step={s} />)}
      </Section>
    </Page>
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var h,c,m;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Figma ships each ramp step in four weights (44 styles total). These are the four; Poppins Light 300 is loaded but unused in the flow. A step and a weight are independent choices — pick the size for hierarchy, the weight for emphasis.'
      }
    }
  },
  render: () => <Page>
      <Header eyebrow="Foundations · Typography" title="Weights" lead="One size, four weights — the axis of emphasis that sits across the ramp." />
      <div style={{
      display: 'grid',
      gap: 2
    }}>
        {WEIGHTS.map(wt => <div key={wt.w} style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        alignItems: 'baseline',
        gap: 'var(--space-4)',
        padding: 'var(--space-4) 0',
        borderBottom: '1px solid var(--border-subtle)'
      }}>
            <span style={{
          font: \`\${wt.w} 28px/40px var(--font)\`,
          letterSpacing: 'var(--tracking)',
          color: 'var(--text-primary)'
        }}>
              {wt.name} · {SAMPLE}
            </span>
            <span style={{
          display: 'flex',
          gap: 'var(--space-4)',
          alignItems: 'baseline'
        }}>
              <span style={{
            font: '400 12px/18px var(--font)',
            color: 'var(--text-secondary)'
          }}>{wt.note}</span>
              <Mono dim>{wt.w}</Mono>
            </span>
          </div>)}
      </div>
    </Page>
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const b=["Scale","Weights"];export{a as Scale,r as Weights,b as __namedExportsOrder,T as default};
