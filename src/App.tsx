import { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

import 'normalize.css'
import '@/style/index.less'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

const App = memo(() => {
  return (
    <div className="app">
      <AppHeader />
      <div className="container">{useRoutes(routes)}</div>
      <div className="footer">
        <AppFooter />
      </div>
    </div>
  )
})

export default App
