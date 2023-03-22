import { getDiscoutnApi, getGoodPriceApi, getHighScoreAPi } from '@/api/home'
import { getVideoByVideoId } from '@/api/video'
import { IVideoListItem } from '@/views/home/types'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// 导出异步获取商品价格的方法
export const getVideoAction = createAsyncThunk(
  'video',
  (payload: any, { dispatch }) => {
    // COMMENT: 如果这里存在多个异步请求，可以使用 .then 来代替 async/await
    const params = {
      videoId: payload
    }
    getVideoByVideoId(params).then((res) => {
      dispatch(setVideoData(res.data))
    })
  }
)

const videoSlice = createSlice({
  name: 'home',
  initialState: {
    videoData: null
  },
  reducers: {
    setVideoData(state, { payload }) {
      state.videoData = payload
      console.log('payload', payload)
    }
  }
})

export const { setVideoData } = videoSlice.actions
export default videoSlice.reducer
