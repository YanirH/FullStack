import ReactDOM from 'react-dom/client'
import './index.css'
import { Layout } from './components/LayoutArea/Layout/Layout.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Layout />
  </BrowserRouter>
)
