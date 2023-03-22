import { configureStore } from '@reduxjs/toolkit'

import homeReducer from './features/home'
import userReducer from './features/user'
import videoReducer from './features/video'

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    home: homeReducer,
    user: userReducer,
    video: videoReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
