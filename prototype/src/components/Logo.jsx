import mark from '../assets/logo-mark.svg'
import word from '../assets/logo-word.svg'

/* Размеры из Figma 293:8929 — знак 36.57×32, начертание 156.57×18.29,
   зазор 4.57. Блок ровно 32 в высоту: с py-16 это даёт хедер 64. */
export default function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4.57 }}>
      <img src={mark} alt="" style={{ height: 32, width: 'auto', display: 'block' }} />
      <img src={word} alt="Freecash" style={{ height: 18.29, width: 'auto', display: 'block' }} />
    </div>
  )
}
