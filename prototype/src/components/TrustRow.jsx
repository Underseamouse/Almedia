import tpLogo from '../assets/tp-logo.svg'
import tpStars from '../assets/tp-stars.svg'
import './TrustRow.css'

export default function TrustRow() {
  return (
    <div className="trust">
      <div className="trust-col trust-col-l">
        <img className="tp-logo" src={tpLogo} alt="Trustpilot" />
        <span className="trust-cap">242,605 reviews</span>
      </div>
      <div className="trust-col trust-col-r">
        <span className="trust-cap">Rated 4.7/5</span>
        <img className="tp-stars" src={tpStars} alt="4.7 out of 5" />
      </div>
    </div>
  )
}
