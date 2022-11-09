import { getGoodPriceApi } from '@/api/home'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// 导出异步获取商品价格的方法
export const getGoodPriceAction = createAsyncThunk('goodPrice', async () => {
  const res = await getGoodPriceApi()
  return res
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPrice: {}
  },
  reducers: {
    setGoodPrice(state, { payload }) {
      state.goodPrice = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getGoodPriceAction.fulfilled, (state, { payload }) => {
      state.goodPrice = payload as any
    })
  }
})

export const { setGoodPrice } = homeSlice.actions
export default homeSlice.reducer
