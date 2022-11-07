import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import store from '@/store'
import App from './App'
import { ThemeProvider } from 'styled-components'
import defaultTheme from './assets/theme/default'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback="loading">
        <Provider store={store}>
          <ThemeProvider theme={defaultTheme}>
            <App />
          </ThemeProvider>
        </Provider>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
)
