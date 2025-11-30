import { createRoot } from 'react-dom/client'

import App from './App.jsx'

import './assets/styles/app.scss'
import './assets/styles/admin.scss'
import './assets/styles/index.css'

createRoot(document.getElementById('root')).render(
    <App />
)
