import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MultFormProvider from './context/GlobalFormContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <MultFormProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </MultFormProvider>
)
