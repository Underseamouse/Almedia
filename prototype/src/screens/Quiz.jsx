import { useEffect, useRef, useState } from 'react'
import { BorderBeam } from 'border-beam'
import { QUIZ } from './quizData.js'
import './Quiz.css'

/*
  Опросник внутри шторки. Шаги из quizData: input / statement / choice,
  затем «Analysing your answers» (2 c) — после чего onDone открывает
  разблокированные офферы, а шторка закрывается.
*/
const fill = (t, name) => (t || '').replace('{name}', name || 'there')

/*
  Ответы, имя и текущий шаг живут выше, в Offers: шторка при закрытии
  размонтируется, и локальный стейт унёс бы с собой весь пройденный опросник.
  Тап мимо листа — слишком лёгкое движение, чтобы стоить девяти шагов.
*/
export default function Quiz({ step, setStep, name, setName, answers, setAnswers, onClose, onDone }) {
  const inputRef = useRef(null)
  const [analysing, setAnalysing] = useState(false)
  const timer = useRef(null)

  const total = QUIZ.length
  const q = QUIZ[step]
  const pct = analysing ? 100 : ((step + 1) / (total + 1)) * 100

  useEffect(() => () => clearTimeout(timer.current), [])

  /* Фокус в поле имени ставим руками с preventScroll. Обычный autoFocus
     заставляет браузер «доскроллить» до поля ближайшего прокручиваемого
     предка — а им оказывается сам .shell, и весь кадр уезжал вверх на 397px
     вместе со шторкой. */
  useEffect(() => {
    if (q?.kind === 'input') inputRef.current?.focus({ preventScroll: true })
  }, [q])

  const next = () => {
    if (step < total - 1) { setStep((s) => s + 1); return }
    setAnalysing(true)
    timer.current = setTimeout(() => onDone(), 2000)   // 2 c анализа
  }
  const back = () => {
    if (step === 0) { onClose(); return }
    setStep((s) => s - 1)
  }
  const pick = (v) => setAnswers((a) => ({ ...a, [q.id]: v }))

  if (analysing) {
    return (
      <div className="quiz">
        <div className="quiz-analysing">
          <span className="orb" aria-hidden="true" />
          <p className="quiz-analysing-text">Analysing your answers</p>
        </div>
      </div>
    )
  }

  /* Next гаснет, пока шаг не отвечен. statement отвечать нечем — он всегда готов.
     «Prefer not to say» остаётся отдельным выходом для необязательных вопросов. */
  const canNext =
    q.kind === 'input' ? name.trim().length > 0
    : q.kind === 'choice' ? answers[q.id] != null
    : true

  return (
    <div className="quiz">
      <div className="quiz-head">
        <button className="quiz-back" onClick={back} aria-label={step === 0 ? 'Close' : 'Back'}>
          {q.closeIcon ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20 12H5M11 6l-6 6 6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
        <div className="quiz-track"><div className="quiz-fill" style={{ width: `${pct}%` }} /></div>
      </div>

      {/* Заголовок — отдельный блок с собственным p-24 (Figma 293:10202),
          тело ниже начинается сразу с разделителя. */}
      <div className="quiz-copy" key={`c-${q.id}`}>
        {q.eyebrow && <p className="quiz-eyebrow">{fill(q.eyebrow, name)}</p>}
        <h1 className={`quiz-title${q.kind === 'statement' ? ' quiz-title--statement' : ''}`}>
          {fill(q.title, name)}
        </h1>
      </div>

      <div className="quiz-body" key={q.id}>
        {q.divider && <div className="quiz-divider" />}
        {q.hint && <p className="quiz-hint">{q.hint}</p>}

        {q.kind === 'input' && (
          <BorderBeam
            className="quiz-input-beam"
            colorVariant="sunset"
            strength={1}
            size="md"
            borderRadius={12}
            brightness={2.6}
            saturation={1.6}
          >
            <input
              ref={inputRef}
              className="quiz-input"
              placeholder={q.placeholder}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </BorderBeam>
        )}

        {q.kind === 'choice' && (
          <>
            <div className={`quiz-options quiz-options--${q.cols}`}>
              {q.options.map((o) => (
                <button
                  key={o}
                  className={`quiz-option${answers[q.id] === o ? ' is-picked' : ''}`}
                  onClick={() => pick(o)}
                >
                  {o}
                </button>
              ))}
            </div>
            {q.skip && (
              <button className="quiz-skip" onClick={next}>Prefer not to say</button>
            )}
          </>
        )}
      </div>

      <div className="quiz-cta">
        <button className="btn-primary" onClick={next} disabled={!canNext}>
          <span className="btn-label">Next</span>
        </button>
      </div>
    </div>
  )
}
