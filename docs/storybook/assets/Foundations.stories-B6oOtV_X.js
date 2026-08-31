import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{R as d}from"./index-Bc2G9s8g.js";import{P as l,H as p,M as h}from"./_docs-B6y56cop.js";const u={title:"Foundations/Overview",parameters:{layout:"fullscreen",docs:{description:{component:`Foundations / Overview

The front door. Explains where the tokens come from, the one rule that keeps
the system honest, and how the rest of the Foundations pages are laid out.`}}}},t=({title:r,children:a})=>e.jsxs("div",{style:{background:"var(--surface-container)",border:"1px solid var(--border-subtle)",borderRadius:"var(--rounded-04)",padding:"var(--space-5)"},children:[e.jsx("h3",{style:{font:"600 15px/22px var(--font)",letterSpacing:"var(--tracking)",margin:"0 0 var(--space-2)"},children:r}),e.jsx("p",{style:{font:"400 13px/20px var(--font)",color:"var(--text-secondary)",margin:0},children:a})]}),s={render:()=>e.jsxs(l,{children:[e.jsx(p,{eyebrow:"Freecash · Onboarding",title:"Foundations",lead:e.jsx(e.Fragment,{children:"The design language for the Freecash onboarding redesign, as a running library. This section is the source of truth for colour, type, space and motion; everything downstream — effects, components, screens — is built from it."})}),e.jsxs("div",{style:{marginBottom:"var(--space-12)"},children:[e.jsx("h2",{style:{font:"600 20px/28px var(--font)",letterSpacing:"var(--tracking)",margin:"0 0 var(--space-4)"},children:"Where the values come from"}),e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-3)",flexWrap:"wrap",marginBottom:"var(--space-4)"},children:["design-system/*.pdf","Figma variables","tokens.css","these pages"].map((r,a,n)=>e.jsxs(d.Fragment,{children:[e.jsx("span",{style:{font:"600 13px/19px var(--font)",padding:"8px 14px",borderRadius:"var(--rounded-full)",background:a===n.length-1?"var(--action-primary)":"var(--surface-container)",color:a===n.length-1?"var(--text-on-primary)":"var(--text-primary)",border:"1px solid var(--border-subtle)"},children:r}),a<n.length-1&&e.jsx("span",{style:{color:"var(--text-secondary)"},children:"→"})]},r))}),e.jsxs("p",{style:{font:"400 14px/22px var(--font)",color:"var(--text-secondary)",maxWidth:640,margin:0},children:["Colour and type trace back to the Freecash PDFs; radius, spacing and size were measured off freecash.com (computed styles, not guesses) because the PDFs are silent on them; motion is new, added here. ",e.jsx(h,{children:"tokens.css"})," mirrors the Figma variable collections 1:1, and every page in this section reads its values live from it — the docs can’t drift from the tokens."]})]}),e.jsxs("div",{style:{marginBottom:"var(--space-12)"},children:[e.jsx("h2",{style:{font:"600 20px/28px var(--font)",letterSpacing:"var(--tracking)",margin:"0 0 var(--space-3)"},children:"The one rule"}),e.jsx("p",{style:{font:"400 15px/24px var(--font)",color:"var(--text-primary)",maxWidth:640,margin:0},children:"No value — colour, type, space — exists outside the tokens without a written “why”. Where a screen departs from the system, the deviation is documented, not silent. That is what keeps a minimal system from quietly accumulating one-off exceptions."})]}),e.jsxs("div",{children:[e.jsx("h2",{style:{font:"600 20px/28px var(--font)",letterSpacing:"var(--tracking)",margin:"0 0 var(--space-4)"},children:"What’s in this section"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))",gap:"var(--space-4)"},children:[e.jsx(t,{title:"Color",children:"Raw scales, the ~22 semantic aliases screens may touch, and computed WCAG contrast for every text/surface pairing."}),e.jsx(t,{title:"Typography",children:"Poppins, 11 steps as a live specimen, plus the four-weight emphasis axis."}),e.jsx(t,{title:"Space & Radius",children:"The named radius scale, the 4px spacing grid, control heights and border widths — all measured on the live site."}),e.jsx(t,{title:"Motion",children:"Durations grouped by travel distance, four intent-carrying curves, and a playground to feel them."})]})]})]})};var o,i,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <Page>
      <Header eyebrow="Freecash · Onboarding" title="Foundations" lead={<>The design language for the Freecash onboarding redesign, as a running library. This section is the source of truth for colour, type, space and motion; everything downstream — effects, components, screens — is built from it.</>} />

      <div style={{
      marginBottom: 'var(--space-12)'
    }}>
        <h2 style={{
        font: '600 20px/28px var(--font)',
        letterSpacing: 'var(--tracking)',
        margin: '0 0 var(--space-4)'
      }}>
          Where the values come from
        </h2>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        flexWrap: 'wrap',
        marginBottom: 'var(--space-4)'
      }}>
          {['design-system/*.pdf', 'Figma variables', 'tokens.css', 'these pages'].map((s, i, a) => <React.Fragment key={s}>
              <span style={{
            font: '600 13px/19px var(--font)',
            padding: '8px 14px',
            borderRadius: 'var(--rounded-full)',
            background: i === a.length - 1 ? 'var(--action-primary)' : 'var(--surface-container)',
            color: i === a.length - 1 ? 'var(--text-on-primary)' : 'var(--text-primary)',
            border: '1px solid var(--border-subtle)'
          }}>
                {s}
              </span>
              {i < a.length - 1 && <span style={{
            color: 'var(--text-secondary)'
          }}>→</span>}
            </React.Fragment>)}
        </div>
        <p style={{
        font: '400 14px/22px var(--font)',
        color: 'var(--text-secondary)',
        maxWidth: 640,
        margin: 0
      }}>
          Colour and type trace back to the Freecash PDFs; radius, spacing and size were measured off
          freecash.com (computed styles, not guesses) because the PDFs are silent on them; motion is new,
          added here. <Mono>tokens.css</Mono> mirrors the Figma variable collections 1:1, and every page in
          this section reads its values live from it — the docs can’t drift from the tokens.
        </p>
      </div>

      <div style={{
      marginBottom: 'var(--space-12)'
    }}>
        <h2 style={{
        font: '600 20px/28px var(--font)',
        letterSpacing: 'var(--tracking)',
        margin: '0 0 var(--space-3)'
      }}>
          The one rule
        </h2>
        <p style={{
        font: '400 15px/24px var(--font)',
        color: 'var(--text-primary)',
        maxWidth: 640,
        margin: 0
      }}>
          No value — colour, type, space — exists outside the tokens without a written “why”. Where a
          screen departs from the system, the deviation is documented, not silent. That is what keeps a
          minimal system from quietly accumulating one-off exceptions.
        </p>
      </div>

      <div>
        <h2 style={{
        font: '600 20px/28px var(--font)',
        letterSpacing: 'var(--tracking)',
        margin: '0 0 var(--space-4)'
      }}>
          What’s in this section
        </h2>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: 'var(--space-4)'
      }}>
          <Card title="Color">Raw scales, the ~22 semantic aliases screens may touch, and computed WCAG contrast for every text/surface pairing.</Card>
          <Card title="Typography">Poppins, 11 steps as a live specimen, plus the four-weight emphasis axis.</Card>
          <Card title="Space & Radius">The named radius scale, the 4px spacing grid, control heights and border widths — all measured on the live site.</Card>
          <Card title="Motion">Durations grouped by travel distance, four intent-carrying curves, and a playground to feel them.</Card>
        </div>
      </div>
    </Page>
}`,...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const x=["Overview"];export{s as Overview,x as __namedExportsOrder,u as default};
