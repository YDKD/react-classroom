import { createSlice } from '@reduxjs/toolkit'

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    name: 'Initial Name'
  },
  reducers: {
    setName(state, { payload }) {
      state.name = payload
    }
  }
})

export const { setName } = homeSlice.actions
export default homeSlice.reducer
