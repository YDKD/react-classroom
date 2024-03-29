import { getDiscoutnApi, getGoodPriceApi, getHighScoreAPi } from '@/api/home'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// 导出异步获取商品价格的方法
export const getGoodPriceAction = createAsyncThunk(
  'goodPrice',
  (payload, { dispatch }) => {
    // COMMENT: 如果这里存在多个异步请求，可以使用 .then 来代替 async/await

    getGoodPriceApi().then((res) => {
      dispatch(setGoodPrice(res))
    })

    getHighScoreAPi().then((res) => {
      dispatch(setHighScore(res))
    })

    getDiscoutnApi().then((res) => {
      dispatch(setDiscount(res))
    })
  }
)

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPrice: {},
    highScore: {},
    discount: {}
  },
  reducers: {
    setGoodPrice(state, { payload }) {
      state.goodPrice = payload
    },
    setHighScore(state, { payload }) {
      state.highScore = payload
    },
    setDiscount(state, { payload }) {
      state.discount = payload
    }
  }
})

export const { setGoodPrice, setHighScore, setDiscount } = homeSlice.actions
export default homeSlice.reducer
