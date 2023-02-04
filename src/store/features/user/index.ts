import { getUserInfoApi } from '@/api/user'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getUserInfo = createAsyncThunk(
  'user/getUserInfo',
  async (payload, { dispatch }) => {
    getUserInfoApi().then((res) => {
      dispatch(setUser(res.data))
    })
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {}
  },
  reducers: {
    setUser(state, { payload }) {
      state.user = payload
    }
  }
})

const { setUser } = userSlice.actions

export default userSlice.reducer
