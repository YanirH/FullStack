import ReactDOM from 'react-dom/client'
import './index.css'
import { Layout } from './components/LayoutArea/Layout/Layout.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './Redux/Store.ts'
import { interceptor } from './Utils/Interceptor.ts'

interceptor.create()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </Provider>
)
