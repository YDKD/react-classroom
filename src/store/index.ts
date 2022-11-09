import { configureStore } from '@reduxjs/toolkit'

import homeReducer from './features/home'

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    home: homeReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
