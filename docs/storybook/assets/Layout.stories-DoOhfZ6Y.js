import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{u as l,P as a,H as t,S as o,d as s,M as k}from"./_docs-B6y56cop.js";import"./index-Bc2G9s8g.js";const P={title:"Foundations/Space & Radius",parameters:{layout:"fullscreen",docs:{description:{component:`Foundations / Space & Radius

The non-colour primitives: the radius scale (Freecash’s own, named in their
production CSS), the 4px spacing grid, control heights, and border widths.
Radius / spacing / size are not in the PDFs — they were measured off
freecash.com (computed styles on 792 elements), and that provenance is noted
on each scale.`}}}},S=[{token:"--rounded-01",source:"observed"},{token:"--rounded-02",source:"observed · buttons, inputs"},{token:"--rounded-03",source:"interpolated"},{token:"--rounded-04",source:"observed · wallet pill"},{token:"--rounded-05",source:"interpolated"},{token:"--rounded-06",source:"interpolated"},{token:"--rounded-07",source:"observed"},{token:"--rounded-full",source:"observed · pills, avatar, track"}],n={parameters:{docs:{description:{story:"Freecash names its own radius scale in markup — rounded-01=4, rounded-02=8, rounded-07=32, rounded-full. Steps 03–06 are interpolated between them and marked as such. The correction that mattered: buttons are rounded-02 (8px), not pills — the pill radius is reserved for badges, tabs, avatar and the progress track."}}},render:()=>l()?e.jsxs(a,{children:[e.jsx(t,{eyebrow:"Foundations · Radius",title:"Corner radius",lead:"The named scale from the live product. Values read from tokens.css."}),e.jsx(o,{title:"Scale",children:e.jsx("div",{style:{display:"flex",gap:"var(--space-5)",flexWrap:"wrap"},children:S.map(r=>e.jsxs("div",{style:{textAlign:"center",width:96},children:[e.jsx("div",{style:{width:80,height:80,margin:"0 auto",borderRadius:`var(${r.token})`,background:"var(--surface-container)",border:"2px solid var(--action-primary)"}}),e.jsxs("div",{style:{font:"600 12px/16px var(--font)",color:"var(--text-primary)",marginTop:8},children:[r.token.replace("--rounded-","")," · ",s(r.token),"px"]}),e.jsx("div",{style:{font:"400 10px/15px var(--font)",color:"var(--text-secondary)"},children:r.source})]},r.token))})})]}):e.jsx(a,{children:e.jsx(t,{eyebrow:"Foundations",title:"Space & Radius"})})},w=["--space-1","--space-2","--space-2-75","--space-3","--space-4","--space-5","--space-6","--space-8","--space-10","--space-12"],i={parameters:{docs:{description:{story:"A Tailwind 4px grid, confirmed against the site (gap-1=4 … gap-8=32). Two off-grid steps earn their place: 2-75 (11px, the small button’s py-2.75) and 5 (20px, every button’s px-5). Dots in variable names are illegal in Figma, hence 2-75."}}},render:()=>l()?e.jsxs(a,{children:[e.jsx(t,{eyebrow:"Foundations · Spacing",title:"Spacing grid",lead:"4px base. Padding and gap only ever come from this scale."}),e.jsx(o,{title:"Scale",children:e.jsx("div",{style:{display:"grid",gap:"var(--space-3)"},children:w.map(r=>{const p=s(r);return e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"140px 60px 1fr",gap:"var(--space-4)",alignItems:"center"},children:[e.jsx(k,{children:r}),e.jsxs("span",{style:{font:"400 12px/18px var(--font)",color:"var(--text-secondary)"},children:[p,"px"]}),e.jsx("div",{style:{height:16,width:p,background:"var(--action-primary)",borderRadius:3}})]},r)})})})]}):e.jsx(a,{children:e.jsx(t,{eyebrow:"Foundations",title:"Space & Radius"})})},j=[{token:"--control-sm",label:"Small — 38 (web only, below the 44 touch min)"},{token:"--control-md",label:"Medium — 44, the touch minimum"},{token:"--control-lg",label:"Large — 48, primary CTA and inputs"}],R=["--icon-sm","--icon-md","--icon-lg"],F=[{token:"--border-thin",label:"Hairline — default control edge"},{token:"--border-thick",label:"Focus ring, selected border"},{token:"--border-ring",label:"Loader stroke"}],d={name:"Size & border",parameters:{docs:{description:{story:"Control heights measured on freecash.com — Sign In (38), primary CTA (44), input (48). On a 375px screen these do not change; only width does. Border widths are the three strokes the system uses."}}},render:()=>l()?e.jsxs(a,{children:[e.jsx(t,{eyebrow:"Foundations · Size",title:"Control size & border",lead:"Fixed heights and icon boxes. Widths fill; heights hold."}),e.jsx(o,{title:"Control height",children:e.jsx("div",{style:{display:"grid",gap:"var(--space-3)"},children:j.map(r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-4)"},children:[e.jsxs("div",{style:{height:`var(${r.token})`,width:120,borderRadius:"var(--rounded-02)",background:"var(--surface-container)",border:"1px solid var(--border-subtle)",display:"grid",placeItems:"center",font:"600 12px/16px var(--font)",color:"var(--text-secondary)"},children:[s(r.token),"px"]}),e.jsx("span",{style:{font:"400 13px/19px var(--font)",color:"var(--text-primary)"},children:r.label})]},r.token))})}),e.jsx(o,{title:"Icon box",children:e.jsx("div",{style:{display:"flex",gap:"var(--space-6)",alignItems:"flex-end"},children:R.map(r=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{width:`var(${r})`,height:`var(${r})`,background:"var(--action-primary)",borderRadius:4,margin:"0 auto"}}),e.jsxs("div",{style:{font:"400 11px/16px var(--font)",color:"var(--text-secondary)",marginTop:6},children:[r.replace("--icon-","")," · ",s(r)]})]},r))})}),e.jsx(o,{title:"Border width",children:e.jsx("div",{style:{display:"grid",gap:"var(--space-4)"},children:F.map(r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--space-4)"},children:[e.jsx("div",{style:{width:120,borderTop:`var(${r.token}) solid var(--action-primary)`}}),e.jsxs(k,{dim:!0,children:[r.token," · ",s(r.token),"px"]}),e.jsx("span",{style:{font:"400 13px/19px var(--font)",color:"var(--text-primary)"},children:r.label})]},r.token))})})]}):e.jsx(a,{children:e.jsx(t,{eyebrow:"Foundations",title:"Space & Radius"})})};var u,v,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Freecash names its own radius scale in markup — rounded-01=4, rounded-02=8, rounded-07=32, rounded-full. Steps 03–06 are interpolated between them and marked as such. The correction that mattered: buttons are rounded-02 (8px), not pills — the pill radius is reserved for badges, tabs, avatar and the progress track.'
      }
    }
  },
  render: () => {
    const ready = useResolved();
    if (!ready) return <Page><Header eyebrow="Foundations" title="Space & Radius" /></Page>;
    return <Page>
        <Header eyebrow="Foundations · Radius" title="Corner radius" lead="The named scale from the live product. Values read from tokens.css." />
        <Section title="Scale">
          <div style={{
          display: 'flex',
          gap: 'var(--space-5)',
          flexWrap: 'wrap'
        }}>
            {RADII.map(r => <div key={r.token} style={{
            textAlign: 'center',
            width: 96
          }}>
                <div style={{
              width: 80,
              height: 80,
              margin: '0 auto',
              borderRadius: \`var(\${r.token})\`,
              background: 'var(--surface-container)',
              border: '2px solid var(--action-primary)'
            }} />
                <div style={{
              font: '600 12px/16px var(--font)',
              color: 'var(--text-primary)',
              marginTop: 8
            }}>
                  {r.token.replace('--rounded-', '')} · {readLen(r.token)}px
                </div>
                <div style={{
              font: '400 10px/15px var(--font)',
              color: 'var(--text-secondary)'
            }}>{r.source}</div>
              </div>)}
          </div>
        </Section>
      </Page>;
  }
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var x,y,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A Tailwind 4px grid, confirmed against the site (gap-1=4 … gap-8=32). Two off-grid steps earn their place: 2-75 (11px, the small button’s py-2.75) and 5 (20px, every button’s px-5). Dots in variable names are illegal in Figma, hence 2-75.'
      }
    }
  },
  render: () => {
    const ready = useResolved();
    if (!ready) return <Page><Header eyebrow="Foundations" title="Space & Radius" /></Page>;
    return <Page>
        <Header eyebrow="Foundations · Spacing" title="Spacing grid" lead="4px base. Padding and gap only ever come from this scale." />
        <Section title="Scale">
          <div style={{
          display: 'grid',
          gap: 'var(--space-3)'
        }}>
            {SPACES.map(s => {
            const px = readLen(s);
            return <div key={s} style={{
              display: 'grid',
              gridTemplateColumns: '140px 60px 1fr',
              gap: 'var(--space-4)',
              alignItems: 'center'
            }}>
                  <Mono>{s}</Mono>
                  <span style={{
                font: '400 12px/18px var(--font)',
                color: 'var(--text-secondary)'
              }}>{px}px</span>
                  <div style={{
                height: 16,
                width: px,
                background: 'var(--action-primary)',
                borderRadius: 3
              }} />
                </div>;
          })}
          </div>
        </Section>
      </Page>;
  }
}`,...(g=(y=i.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var m,b,f;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Size & border',
  parameters: {
    docs: {
      description: {
        story: 'Control heights measured on freecash.com — Sign In (38), primary CTA (44), input (48). On a 375px screen these do not change; only width does. Border widths are the three strokes the system uses.'
      }
    }
  },
  render: () => {
    const ready = useResolved();
    if (!ready) return <Page><Header eyebrow="Foundations" title="Space & Radius" /></Page>;
    return <Page>
        <Header eyebrow="Foundations · Size" title="Control size & border" lead="Fixed heights and icon boxes. Widths fill; heights hold." />
        <Section title="Control height">
          <div style={{
          display: 'grid',
          gap: 'var(--space-3)'
        }}>
            {CONTROLS.map(c => <div key={c.token} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-4)'
          }}>
                <div style={{
              height: \`var(\${c.token})\`,
              width: 120,
              borderRadius: 'var(--rounded-02)',
              background: 'var(--surface-container)',
              border: '1px solid var(--border-subtle)',
              display: 'grid',
              placeItems: 'center',
              font: '600 12px/16px var(--font)',
              color: 'var(--text-secondary)'
            }}>
                  {readLen(c.token)}px
                </div>
                <span style={{
              font: '400 13px/19px var(--font)',
              color: 'var(--text-primary)'
            }}>{c.label}</span>
              </div>)}
          </div>
        </Section>
        <Section title="Icon box">
          <div style={{
          display: 'flex',
          gap: 'var(--space-6)',
          alignItems: 'flex-end'
        }}>
            {ICONS.map(i => <div key={i} style={{
            textAlign: 'center'
          }}>
                <div style={{
              width: \`var(\${i})\`,
              height: \`var(\${i})\`,
              background: 'var(--action-primary)',
              borderRadius: 4,
              margin: '0 auto'
            }} />
                <div style={{
              font: '400 11px/16px var(--font)',
              color: 'var(--text-secondary)',
              marginTop: 6
            }}>
                  {i.replace('--icon-', '')} · {readLen(i)}
                </div>
              </div>)}
          </div>
        </Section>
        <Section title="Border width">
          <div style={{
          display: 'grid',
          gap: 'var(--space-4)'
        }}>
            {BORDERS.map(b => <div key={b.token} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-4)'
          }}>
                <div style={{
              width: 120,
              borderTop: \`var(\${b.token}) solid var(--action-primary)\`
            }} />
                <Mono dim>{b.token} · {readLen(b.token)}px</Mono>
                <span style={{
              font: '400 13px/19px var(--font)',
              color: 'var(--text-primary)'
            }}>{b.label}</span>
              </div>)}
          </div>
        </Section>
      </Page>;
  }
}`,...(f=(b=d.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const A=["Radius","Spacing","Size"];export{n as Radius,d as Size,i as Spacing,A as __namedExportsOrder,P as default};
