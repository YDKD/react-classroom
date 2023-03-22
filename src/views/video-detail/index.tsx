import { AppDispatch, RootState } from '@/store'
import { getVideoAction } from '@/store/features/video'
import { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { IVideoListItem } from '../home/types'
import Player from 'xgplayer'
import config from '@/config'

const videoDetail = memo(() => {
  const dispatch = useDispatch<AppDispatch>()

  const { state } = useLocation()
  const { videoId } = state

  // 获取派发函数

  // 从store中获取到视频详情数据
  const { videoData } = useSelector(
    (state: RootState) => ({
      videoData: state.video.videoData as IVideoListItem | null
    }),
    shallowEqual
  )

  // 根据videoId获取到当前视频的详情数据

  useEffect(() => {
    dispatch(getVideoAction(videoId))
  }, [])

  useEffect(() => {
    console.log('videoData', videoData?.url || '')
    const player = new Player({
      id: 'mse',
      url: config.fileUploadUrl + videoData?.url
    })
  }, [videoData])

  return <div id="mse"></div>
})

export default videoDetail
