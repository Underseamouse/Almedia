import InfiniteCarousel from '../components/InfiniteCarousel.jsx'
import TrustRow from '../components/TrustRow.jsx'
import './Onboarding.css'

/*
  Только «середина» онбординга — карусель + текст + Trustpilot.
  Reveal на CSS-анимациях (не Framer-варианты): предопределённое движение,
  надёжно доигрывает до конца и не оставляет «залипших» transform, которые
  ломали раскладку. Статус-бар, лого, кнопка — в общем шелле (App).
*/
export default function OnboardingContent() {
  return (
    <div className="ob-content">
      <div className="ob-hero ob-fade">
        <InfiniteCarousel />
      </div>

      <div className="ob-bottom">
        <div className="ob-copy ob-rise" style={{ '--d': '0.12s' }}>
          <h1 className="ob-title">Hey! I'm here to help you earn real cash</h1>
          <p className="ob-sub">Rated by people who actually got paid.</p>
        </div>

        <div className="ob-rise" style={{ '--d': '0.22s', width: '100%' }}>
          <TrustRow />
        </div>
      </div>
    </div>
  )
}
