import candyCrush from '../assets/banners/candy-crush.jpg'
import candyCrush2 from '../assets/banners/candy-crush-2.jpg'
import blossomBlast from '../assets/banners/blossom-blast.jpg'
import petRescue from '../assets/banners/pet-rescue.jpg'
import petRescue2 from '../assets/banners/pet-rescue-2.jpg'
import diceDreams from '../assets/banners/dice-dreams.jpg'
import diceDreams2 from '../assets/banners/dice-dreams-2.jpg'
import gardenscapes from '../assets/banners/gardenscapes.jpg'
import pirateKings from '../assets/banners/pirate-kings.jpg'
import './InfiniteCarousel.css'

/*
  Бесконечная вертикальная карусель баннеров игр (Figma 271-11338).
  3 колонки едут в разные стороны разной скоростью (параллакс), низ уходит
  в градиент. Петля бесшовная: список колонки дублируется, translateY 0→-50%.
*/
const COLUMNS = [
  { imgs: [candyCrush, gardenscapes, diceDreams], dir: 'up', dur: 26 },
  { imgs: [blossomBlast, pirateKings, petRescue], dir: 'down', dur: 32 },
  { imgs: [diceDreams2, candyCrush2, petRescue2], dir: 'up', dur: 22 },
]

export default function InfiniteCarousel() {
  return (
    <div className="carousel">
      {COLUMNS.map((col, i) => (
        <div key={i} className="carousel-col">
          <div className={`carousel-track ${col.dir}`} style={{ animationDuration: `${col.dur}s` }}>
            {[...col.imgs, ...col.imgs].map((src, j) => (
              <div key={j} className="cover">
                <img src={src} alt="" loading="eager" draggable="false" />
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="carousel-fade" />
      <div className="carousel-fade-top" />
    </div>
  )
}
