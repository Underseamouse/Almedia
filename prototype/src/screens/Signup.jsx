import collage from '../assets/signup-collage.jpg'
import apple from '../assets/social/apple.png'
import google from '../assets/social/google.png'
import facebook from '../assets/social/facebook.png'
import './Signup.css'

/*
  Финальный экран (Figma 291-8361). В новой версии он БЕЗ степпера и без
  виджета баланса: коллаж игр сверху (lighten 20%), текст и кнопки снизу,
  разделитель между соцкнопками и «Continue with email».
*/
const SOCIAL = [
  { icon: apple, label: 'Continue with Apple', w: 19 },
  { icon: google, label: 'Continue with Google', w: 24 },
  { icon: facebook, label: 'Continue with Facebook', w: 24 },
]

export default function Signup({ onDone }) {
  return (
    <div className="signup">
      <div className="signup-bg" aria-hidden="true">
        <img className="signup-bg-img" src={collage} alt="" />
        <div className="signup-bg-fade" />
      </div>

      <div className="signup-bottom">
        <div className="signup-copy">
          <h1 className="signup-title">Sign up or log in to continue earning</h1>
          <p className="signup-sub">Create your account to claim it and see offers matched to you.</p>
        </div>

        <div className="signup-actions">
          {SOCIAL.map((b, i) => (
            <button
              key={b.label}
              className="su-btn su-rise"
              style={{ '--d': `${0.06 + i * 0.06}s` }}
              onClick={onDone}
            >
              <img src={b.icon} alt="" style={{ width: b.w, height: 24, objectFit: 'contain' }} />
              <span>{b.label}</span>
            </button>
          ))}

          <div className="su-divider" />

          <button className="btn-primary su-rise" style={{ '--d': '0.26s' }} onClick={onDone}>
            <span className="btn-label">Continue with email</span>
          </button>
        </div>
      </div>
    </div>
  )
}
