import{j as e}from"./jsx-runtime-DFAAy_2V.js";const d=({variant:t="primary",size:r="medium",loading:a=!1,block:n=!0,disabled:o,children:i,style:s,...l})=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
      .fc-btn {
        --fc-btn-edge: transparent;
        display: inline-flex; align-items: center; justify-content: center;
        gap: var(--space-2);
        border: var(--border-thin) solid var(--fc-btn-edge);
        border-radius: var(--rounded-02);
        padding-inline: var(--space-5);
        cursor: pointer;
        font-family: var(--font); font-weight: 600;
        letter-spacing: var(--tracking);
        transition:
          transform  var(--dur-instant) var(--ease-out),
          background var(--dur-fast) var(--ease-out),
          box-shadow var(--dur-fast) var(--ease-out),
          opacity    var(--dur-fast) var(--ease-out);
        -webkit-tap-highlight-color: transparent;
      }
      .fc-btn:active:not(:disabled) { transform: scale(0.975); }
      .fc-btn:focus-visible {
        outline: var(--border-thick) solid var(--action-primary);
        outline-offset: 2px;
      }
      .fc-btn:disabled { cursor: not-allowed; }

      /* primary — green fill, darker green edge, brand bloom */
      .fc-btn--primary {
        background: var(--action-primary);
        color: var(--text-on-primary);
        --fc-btn-edge: var(--main-800);
        box-shadow: 0 8px 24px -4px rgba(1, 214, 118, 0.32);
      }
      .fc-btn--primary:hover:not(:disabled) { background: var(--main-400); }
      .fc-btn--primary:active:not(:disabled) { background: var(--action-primary-pressed); }

      /* secondary — grey fill, lighter grey edge, no bloom */
      .fc-btn--secondary {
        background: var(--action-secondary);
        color: var(--text-primary);
        --fc-btn-edge: var(--gb-100);
      }
      .fc-btn--secondary:active:not(:disabled) {
        background: var(--gb-300);
        --fc-btn-edge: var(--gb-200);
      }

      /* outline — the edge is the button */
      .fc-btn--outline {
        background: transparent;
        color: var(--action-primary);
        --fc-btn-edge: var(--border-selected);
      }
      .fc-btn--outline:active:not(:disabled) { background: var(--main-25); }

      .fc-btn--ghost { background: transparent; color: var(--text-secondary); }
      .fc-btn--ghost:hover:not(:disabled) { color: var(--text-primary); }

      /* Disabled drops the edge and the bloom — a flat, obviously inert slab.
         Scoped away from the busy state: a loading button is also non-clickable,
         but it must keep its colour, or "sending" looks identical to "you can't". */
      .fc-btn--primary:disabled:not([aria-busy='true']),
      .fc-btn--secondary:disabled:not([aria-busy='true']),
      .fc-btn--outline:disabled:not([aria-busy='true']) {
        color: var(--text-disabled);
        box-shadow: none;
      }
      .fc-btn--primary:disabled:not([aria-busy='true'])   { background: var(--action-disabled); --fc-btn-edge: transparent; }
      .fc-btn--secondary:disabled:not([aria-busy='true']) { background: var(--surface-container); --fc-btn-edge: transparent; }
      .fc-btn--outline:disabled:not([aria-busy='true'])   { --fc-btn-edge: var(--border-default); }

      .fc-btn[aria-busy='true'] { cursor: progress; }
      .fc-btn__spinner {
        width: 18px; height: 18px; border-radius: 50%;
        border: var(--border-thick) solid currentColor;
        border-top-color: transparent;
        animation: fc-btn-spin 0.7s linear infinite;
      }
      @keyframes fc-btn-spin { to { transform: rotate(360deg); } }
    `}),e.jsx("button",{className:`fc-btn fc-btn--${t}`,disabled:o||a,"aria-busy":a||void 0,style:{height:r==="small"?"var(--control-sm)":"var(--control-md)",fontSize:r==="small"?"var(--t-md)":"var(--t-lg)",width:n?"100%":void 0,...s},...l,children:a?e.jsx("span",{className:"fc-btn__spinner"}):i})]});d.__docgenInfo={description:`The one action per screen.

Geometry is measured off freecash.com — 38 / 44 tall, radius 8, 20 of
horizontal padding — so a button built here drops into the live product.

Every filled variant carries a hairline of its own family: primary a darker
green (Main 800), secondary a lighter grey (Gray Blue 100). On a near-black
background a flat fill has no edge and the shape goes soft; the hairline
gives it one without reading as an outlined button.

Press scales down rather than shifting colour — under a thumb on a dark UI a
colour change is invisible, a size change is not. Focus is a 2px green ring,
the one state that has to survive being seen from a keyboard.`,methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'outline' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},block:{required:!1,tsType:{name:"boolean"},description:"Fills the container. Buttons are full-width on every real screen.",defaultValue:{value:"true",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}},composes:["Omit"]};export{d as B};
