import React from 'react';

export interface SelectorCardProps {
  label: string;
  selected?: boolean;
  disabled?: boolean;
  onSelect?: () => void;
  /** card = quiz answer with a radio · pill = binary yes/no */
  shape?: 'card' | 'pill';
}

/**
 * A single choice.
 *
 * Use `card` when there are three or more options or the label can wrap; use
 * `pill` for a binary yes/no. The label is allowed to wrap and grow the box —
 * a clipped answer is worse than an uneven grid.
 */
export const SelectorCard: React.FC<SelectorCardProps> = ({
  label,
  selected = false,
  disabled = false,
  onSelect,
  shape = 'card'
}) => (
  <>
    <style>{`
      .fc-sel {
        display: flex; align-items: center; gap: var(--space-2);
        width: 100%; text-align: left; cursor: pointer;
        background: var(--surface-container);
        border: var(--border-thin) solid var(--border-default);
        color: var(--text-primary);
        font-family: var(--font); font-weight: 500;
        letter-spacing: var(--tracking);
        transition:
          border-color var(--dur-fast) var(--ease-out),
          background   var(--dur-fast) var(--ease-out),
          transform    var(--dur-instant) var(--ease-out);
      }
      .fc-sel:active:not(:disabled) { transform: scale(0.985); }
      .fc-sel:focus-visible { outline: var(--border-thick) solid var(--action-primary); outline-offset: 2px; }
      .fc-sel:disabled { opacity: 0.5; cursor: not-allowed; }
      .fc-sel[data-selected='true'] {
        border-color: var(--border-selected);
        border-width: var(--border-thick);
        background: var(--main-25);
      }
      .fc-sel__radio {
        flex: none; width: var(--icon-lg); height: var(--icon-lg);
        border-radius: 50%; border: var(--border-thick) solid var(--text-secondary);
        display: grid; place-items: center;
        transition: border-color var(--dur-fast) var(--ease-out);
      }
      .fc-sel[data-selected='true'] .fc-sel__radio { border-color: var(--action-primary); }
      .fc-sel__dot {
        width: 100%; height: 100%; border-radius: 50%;
        background: var(--action-primary);
        transform: scale(0);
        transition: transform var(--dur-fast) var(--ease-spring);
      }
      .fc-sel[data-selected='true'] .fc-sel__dot { transform: scale(1); }
    `}</style>
    <button
      className="fc-sel"
      data-selected={selected}
      disabled={disabled}
      onClick={onSelect}
      aria-pressed={selected}
      style={{
        padding: shape === 'pill' ? '0 var(--space-5)' : 'var(--space-4)',
        height: shape === 'pill' ? 'var(--control-md)' : undefined,
        borderRadius: shape === 'pill' ? 'var(--rounded-02)' : 'var(--rounded-03)',
        fontSize: 'var(--t-lg)',
        justifyContent: shape === 'pill' ? 'center' : undefined,
        color: shape === 'pill' && selected ? 'var(--action-primary)' : undefined
      }}
    >
      <span style={{ flex: 1 }}>{label}</span>
      {shape === 'card' && (
        <span className="fc-sel__radio">
          <span className="fc-sel__dot" />
        </span>
      )}
    </button>
  </>
);
