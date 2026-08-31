import './CardDeck.css'

/*
  Карусель карточек (Figma 283-4649 / 291-*): активная карточка по центру,
  соседние — со сдвигом 294px (270 + gap 24) и наклоном ±4°, как в макете.
  При смене active вся лента плавно едет.
*/
const STEP = 294
const TILT = 4

export default function CardDeck({ cards, active }) {
  return (
    <div className="deck">
      {cards.map((card, i) => {
        const d = i - active
        const isActive = d === 0
        return (
          <div
            key={card.key}
            className={`deck-slot${isActive ? ' is-active' : ''}`}
            style={{
              transform: `translateX(${d * STEP}px) rotate(${Math.sign(d) * TILT}deg)`,
              zIndex: isActive ? 2 : 1,
            }}
            aria-hidden={!isActive}
          >
            {card.node}
          </div>
        )
      })}
    </div>
  )
}
