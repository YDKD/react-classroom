import { configureStore } from '@reduxjs/toolkit'

import homeReducer from './features/home'

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    home: homeReducer
  }
})

export default store
