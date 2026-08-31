import './BorderBeam.css'

/*
  BorderBeam (по мотивам magic-ui / Jakubantalik Libraries): тонкое
  крутящееся свечение поверх существующей обводки. Кладётся ВНУТРЬ
  элемента с position:relative и border-radius — текущий бордер не трогаем.
  colorVariant="mono" → один цвет. size — толщина/длина дуги.
*/
export default function BorderBeam({ color = '#fff', hi, size = 'md', duration = 4 }) {
  const thickness = size === 'sm' ? 1.2 : size === 'lg' ? 2.2 : 1.6
  return (
    <span
      className="border-beam"
      style={{
        '--bb-color': color,
        '--bb-hi': hi || color,
        '--bb-thickness': `${thickness}px`,
        '--bb-dur': `${duration}s`,
      }}
    />
  )
}
