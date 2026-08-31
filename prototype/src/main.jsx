import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/tokens.css'
import './styles/global.css'

// StrictMode намеренно выключен: он дважды монтирует эффекты в dev,
// а хореография доски заскриптована и должна проиграться один раз.
createRoot(document.getElementById('root')).render(<App />)
