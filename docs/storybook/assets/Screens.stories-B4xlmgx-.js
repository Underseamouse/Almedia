import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as c}from"./index-Bc2G9s8g.js";import{A,L as u}from"./Ambient-99c8bLGp.js";import{B}from"./BreathingOrb-B6EMT7ca.js";import{A as h,T as R}from"./AwardStat-BeCYR9Jj.js";import{B as I}from"./Button-BCScP9TS.js";const n=({show:a,delay:t=0,children:r})=>e.jsx("div",{style:{opacity:a?1:0,transform:a?"none":"translateY(14px)",filter:a?"blur(0)":"blur(6px)",transition:`opacity var(--dur-reveal) var(--ease-out) ${t}ms,
                   transform var(--dur-reveal) var(--ease-out) ${t}ms,
                   filter var(--dur-reveal) var(--ease-out) ${t}ms`},children:r}),o=({stage:a,autoPlay:t=!0,onStart:r})=>{const[w,p]=c.useState(0),s=a??w;return c.useEffect(()=>{if(a!==void 0||!t)return;const T=setTimeout(()=>p(1),1100),k=setTimeout(()=>p(2),2100);return()=>{clearTimeout(T),clearTimeout(k)}},[a,t]),e.jsx(A,{style:{width:402,height:874,borderRadius:44,border:"1px solid rgba(255,255,255,0.06)"},children:e.jsxs("div",{style:{height:"100%",display:"grid",gridTemplateRows:"auto 1fr auto",padding:"60px var(--space-6) var(--space-8)"},children:[e.jsx("div",{style:{display:"grid",placeItems:"center",minHeight:32},children:e.jsx(n,{show:s>=1,children:e.jsx(u,{size:30})})}),e.jsx("div",{style:{display:"grid",placeItems:"center",alignContent:"start",gap:"var(--space-8)",paddingTop:"var(--space-6)"},children:s===0?e.jsx("div",{style:{display:"grid",placeItems:"center",height:420},children:e.jsxs("div",{style:{position:"relative",display:"grid",placeItems:"center"},children:[e.jsx(B,{size:120,count:30}),e.jsx("span",{style:{position:"absolute"},children:e.jsx(u,{variant:"mark",size:40})})]})}):e.jsxs(e.Fragment,{children:[e.jsx(n,{show:s>=1,delay:80,children:e.jsxs("div",{style:{textAlign:"center",display:"grid",gap:"var(--space-2)"},children:[e.jsxs("h1",{style:{font:"500 var(--h-sm)/var(--h-sm-lh) var(--font)",letterSpacing:"var(--tracking)",color:"var(--text-primary)",margin:0},children:["Hey! I'm here to help you",e.jsx("br",{}),"earn real cash"]}),e.jsx("p",{style:{font:"400 var(--t-lg)/var(--t-lg-lh) var(--font)",letterSpacing:"var(--tracking)",color:"var(--text-secondary)",margin:0},children:"Rated by people who actually got paid."})]})}),e.jsx(n,{show:s>=2,delay:120,children:e.jsx(h,{value:"Rated 4.7/5",label:e.jsx(R,{}),source:e.jsx("span",{style:{font:"500 12px/18px var(--font)",color:"var(--text-primary)"},children:"Based on 242,605 reviews"})})}),e.jsx(n,{show:s>=2,delay:260,children:e.jsx(h,{value:"10,000,000 +",label:e.jsxs(e.Fragment,{children:["Downloads",e.jsx("br",{}),"on Google Play"]})})})]})}),e.jsx(n,{show:s>=2,delay:400,children:e.jsxs("div",{style:{display:"grid",gap:"var(--space-3)"},children:[e.jsx(I,{variant:"primary",onClick:r,children:"Let's go"}),e.jsxs("p",{style:{textAlign:"center",margin:0,font:"400 var(--t-md)/var(--t-md-lh) var(--font)",letterSpacing:"var(--tracking)",color:"var(--text-secondary)"},children:["Already have an account?"," ",e.jsx("a",{href:"#",style:{color:"var(--action-primary)",fontWeight:600,textDecoration:"none"},children:"Log in"})]})]})})]})})};o.__docgenInfo={description:`The first screen of the first session, as three beats rather than three screens.

Beat 1 is the mark alone while the app wakes. Beat 2 says what this is. Beat 3
brings the evidence and the action. Nothing navigates — the content arrives on
one surface, so the user never feels they are being marched through a funnel
before they have been told anything.`,methods:[],displayName:"TrustScreen",props:{stage:{required:!1,tsType:{name:"union",raw:"0 | 1 | 2",elements:[{name:"literal",value:"0"},{name:"literal",value:"1"},{name:"literal",value:"2"}]},description:"0 splash · 1 headline · 2 full. Drive it, or let it run itself."},autoPlay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onStart:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const z={title:"Screens/Trust cold-open",component:o,parameters:{layout:"centered"}},i={name:"Staged reveal (autoplay)",parameters:{docs:{description:{story:"The whole first screen as three beats on one surface: the mark while the app wakes, then what this is, then the evidence and the action. Reload the story to replay."}}},render:()=>e.jsx(o,{autoPlay:!0})},l={name:"Step through the beats",render:()=>{const[a,t]=c.useState(0);return e.jsxs("div",{style:{display:"grid",gap:"var(--space-4)",justifyItems:"center"},children:[e.jsx(o,{stage:a,autoPlay:!1}),e.jsx("div",{style:{display:"flex",gap:"var(--space-2)"},children:[0,1,2].map(r=>e.jsxs("button",{onClick:()=>t(r),style:{padding:"8px 18px",borderRadius:"var(--rounded-02)",cursor:"pointer",font:"600 13px/20px var(--font)",border:"1px solid var(--border-default)",background:a===r?"var(--action-primary)":"var(--surface-container)",color:a===r?"var(--text-on-primary)":"var(--text-primary)"},children:["Beat ",r+1]},r))})]})}},d={name:"All three beats",parameters:{layout:"fullscreen"},render:()=>e.jsx("div",{style:{display:"flex",gap:"var(--space-8)",padding:"var(--space-8)",background:"#0d0e18",overflowX:"auto"},children:[0,1,2].map(a=>e.jsx(o,{stage:a,autoPlay:!1},a))})};var v,m,y;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Staged reveal (autoplay)',
  parameters: {
    docs: {
      description: {
        story: 'The whole first screen as three beats on one surface: the mark while the app wakes, then what this is, then the evidence and the action. Reload the story to replay.'
      }
    }
  },
  render: () => <TrustScreen autoPlay />
}`,...(y=(m=i.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var g,x,f;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Step through the beats',
  render: () => {
    const [stage, setStage] = useState<Stage>(0);
    return <div style={{
      display: 'grid',
      gap: 'var(--space-4)',
      justifyItems: 'center'
    }}>
        <TrustScreen stage={stage} autoPlay={false} />
        <div style={{
        display: 'flex',
        gap: 'var(--space-2)'
      }}>
          {([0, 1, 2] as Stage[]).map(s => <button key={s} onClick={() => setStage(s)} style={{
          padding: '8px 18px',
          borderRadius: 'var(--rounded-02)',
          cursor: 'pointer',
          font: '600 13px/20px var(--font)',
          border: '1px solid var(--border-default)',
          background: stage === s ? 'var(--action-primary)' : 'var(--surface-container)',
          color: stage === s ? 'var(--text-on-primary)' : 'var(--text-primary)'
        }}>
              Beat {s + 1}
            </button>)}
        </div>
      </div>;
  }
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var j,b,S;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'All three beats',
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--space-8)',
    padding: 'var(--space-8)',
    background: '#0d0e18',
    overflowX: 'auto'
  }}>
      {([0, 1, 2] as Stage[]).map(s => <TrustScreen key={s} stage={s} autoPlay={false} />)}
    </div>
}`,...(S=(b=d.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const D=["Autoplay","Manual","SideBySide"];export{i as Autoplay,l as Manual,d as SideBySide,D as __namedExportsOrder,z as default};
