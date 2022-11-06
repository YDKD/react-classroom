import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

import 'normalize.css'
import '@/style/index.less'

const App = memo(() => {
  return (
    <div className="app">
      <div className="header">Header</div>
      <div className="container">{useRoutes(routes)}</div>
      <div className="footer">footer</div>
    </div>
  )
})

export default App
