import React from 'react';

export type ButtonStyle = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'small' | 'medium';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  variant?: ButtonStyle;
  size?: ButtonSize;
  loading?: boolean;
  /** Fills the container. Buttons are full-width on every real screen. */
  block?: boolean;
  style?: React.CSSProperties;
}

/**
 * The one action per screen.
 *
 * Geometry is measured off freecash.com — 38 / 44 tall, radius 8, 20 of
 * horizontal padding — so a button built here drops into the live product.
 *
 * Every filled variant carries a hairline of its own family: primary a darker
 * green (Main 800), secondary a lighter grey (Gray Blue 100). On a near-black
 * background a flat fill has no edge and the shape goes soft; the hairline
 * gives it one without reading as an outlined button.
 *
 * Press scales down rather than shifting colour — under a thumb on a dark UI a
 * colour change is invisible, a size change is not. Focus is a 2px green ring,
 * the one state that has to survive being seen from a keyboard.
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  loading = false,
  block = true,
  disabled,
  children,
  style,
  ...rest
}) => (
  <>
    <style>{`
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
    `}</style>

    <button
      className={`fc-btn fc-btn--${variant}`}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      style={{
        height: size === 'small' ? 'var(--control-sm)' : 'var(--control-md)',
        fontSize: size === 'small' ? 'var(--t-md)' : 'var(--t-lg)',
        width: block ? '100%' : undefined,
        ...style
      }}
      {...rest}
    >
      {loading ? <span className="fc-btn__spinner" /> : children}
    </button>
  </>
);
