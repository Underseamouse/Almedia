import './StepHeader.css'

/*
  Хедер шаговых экранов (Figma 283-4649): стрелка «назад» + прогресс-бар
  + «Skip» справа. Заполнение = step / total.
*/
export default function StepHeader({ step, total = 5, onBack, onSkip, showSkip = true }) {
  const pct = Math.max(0, Math.min(1, step / total)) * 100
  return (
    <div className="stephead">
      <button className="stephead-back" onClick={onBack} aria-label="Back">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M20 12H5M11 6l-6 6 6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="stephead-track">
        <div className="stephead-fill" style={{ width: `${pct}%` }} />
      </div>
      {showSkip ? (
        <button className="stephead-skip" onClick={onSkip}>Skip</button>
      ) : null}
    </div>
  )
}
