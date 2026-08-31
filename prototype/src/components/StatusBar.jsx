import './StatusBar.css'

export default function StatusBar() {
  return (
    <div className="statusbar">
      <div className="sb-left">
        <span className="sb-time">9:41</span>
        <svg className="sb-loc" width="13" height="13" viewBox="0 0 14 14" fill="none">
          <path d="M12.6 1.4 1.9 5.7c-.6.24-.56 1.12.06 1.3l4.2 1.24 1.24 4.2c.18.62 1.06.66 1.3.06L14 1.8c.2-.5-.3-1-.8-.8Z" fill="#fff"/>
        </svg>
      </div>

      <div className="sb-island" />

      <div className="sb-right">
        {/* signal */}
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
          <rect x="0" y="8" width="3" height="4" rx="1" fill="#fff"/>
          <rect x="5" y="5.5" width="3" height="6.5" rx="1" fill="#fff"/>
          <rect x="10" y="3" width="3" height="9" rx="1" fill="rgba(255,255,255,.35)"/>
          <rect x="15" y="0.5" width="3" height="11.5" rx="1" fill="rgba(255,255,255,.35)"/>
        </svg>
        {/* wifi */}
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
          <path d="M8.5 2C11.6 2 14.4 3.2 16.4 5.2l-1.5 1.5C13.2 5 11 4 8.5 4S3.8 5 2.1 6.7L.6 5.2C2.6 3.2 5.4 2 8.5 2Z" fill="#fff"/>
          <path d="M8.5 5.6c1.9 0 3.6.7 4.9 2l-1.5 1.5c-.9-.9-2.1-1.4-3.4-1.4s-2.5.5-3.4 1.4L3.6 7.6c1.3-1.3 3-2 4.9-2Z" fill="#fff"/>
          <path d="M8.5 9c.7 0 1.3.3 1.8.7L8.5 11.5 6.7 9.7C7.2 9.3 7.8 9 8.5 9Z" fill="#fff"/>
        </svg>
        {/* battery */}
        <div className="sb-batt">
          <span className="sb-batt-num">32</span>
          <div className="sb-batt-body"><i style={{ width: '32%' }} /></div>
          <span className="sb-batt-cap" />
        </div>
      </div>
    </div>
  )
}
