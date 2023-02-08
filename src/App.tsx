import { memo, useEffect } from 'react'
import { Outlet, useNavigate, useRoutes } from 'react-router-dom'

import 'normalize.css'
import '@/style/index.less'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

const App = memo(() => {
  return (
    <div className="app">
      <AppHeader />
      <div className="main-container">
        <Outlet />
      </div>
      <div className="footer">
        <AppFooter />
      </div>
    </div>
  )
})

export default App
