import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@fontsource-variable/roboto-flex'
import { BrowserRouter } from 'react-router-dom'
import ApiContext from './context/Api.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ApiContext>
      <App />
    </ApiContext>
  </BrowserRouter>
)
