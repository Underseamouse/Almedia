import './GlassCard.css'

/*
  Стеклянная карточка онбординга (Figma 283-4649 и далее): 270×290, radius 24.
  Рецепт из макета: цветная заливка rgba(tint, .65) + слой #d9d9d9 в
  mix-blend-multiply на 80% (даёт приглушённое «стекло») + две большие
  размытые сферы по углам + едва заметный noise.
*/
export default function GlassCard({
  tint,
  under,
  blobA = 'rgba(255,255,255,0.30)',
  blobB = 'rgba(0,0,0,0.28)',
  top,
  bottom,
  className = '',
  children,
}) {
  return (
    <div className={`glass-card ${className}`}>
      <span className="glass-card-tint" style={{ background: tint }} />
      {/* слой ПОД multiply (Figma: image 12 у карточки подарка) */}
      {under}
      <span className="glass-card-mult" />
      <span className="glass-card-blob glass-card-blob--tr" style={{ background: blobA }} />
      <span className="glass-card-blob glass-card-blob--bl" style={{ background: blobB }} />
      <span className="glass-card-noise" />
      <div className="glass-card-body">
        {top ? <p className="glass-card-top">{top}</p> : null}
        <div className="glass-card-content">{children}</div>
        {bottom ? <p className="glass-card-bottom">{bottom}</p> : null}
      </div>
    </div>
  )
}
