import { getUserInfoApi } from '@/api/user'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getUserInfo = createAsyncThunk(
  'user/getUserInfo',
  async (payload, { dispatch }) => {
    getUserInfoApi().then((res) => {
      dispatch(setUserInfo(res.data))
    })
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null
  },
  reducers: {
    setUserInfo(state, { payload }) {
      state.userInfo = payload
    }
  }
})

const { setUserInfo } = userSlice.actions

export default userSlice.reducer
