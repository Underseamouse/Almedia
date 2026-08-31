import React from 'react';
import './MonoOutline.css';

export interface MonoOutlineProps {
  /** travel = one arc sweeps the edge · pulse = the ring breathes · bloom = pulse + outer halo */
  variant?: 'travel' | 'pulse' | 'bloom';
  /** mono is achromatic by design — it frames without competing with the brand green. */
  tone?: 'mono' | 'brand' | 'gold';
  radius?: string;
  width?: number;
  /** Full cycle time. Slower reads as ambient; faster reads as busy. */
  speed?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

/**
 * A hairline animated stroke around any element.
 *
 * The stroke is a conic gradient masked down to the border box, so it follows
 * whatever radius the element already has instead of needing its own shape.
 * Used to mark the one thing on screen that is currently live — a loading
 * card, a focused field, the offer being claimed.
 */
export const MonoOutline: React.FC<MonoOutlineProps> = ({
  variant = 'travel',
  tone = 'mono',
  radius,
  width = 1,
  speed,
  className = '',
  style,
  children
}) => {
  const classes = [
    'fc-outline',
    `fc-outline--${variant === 'bloom' ? 'pulse' : variant}`,
    variant === 'bloom' ? 'fc-outline--bloom' : '',
    `fc-outline--${tone}`,
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classes}
      style={
        {
          '--fc-outline-radius': radius,
          '--fc-outline-width': `${width}px`,
          '--fc-outline-speed': speed,
          ...style
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};
