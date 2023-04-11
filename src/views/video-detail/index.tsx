import { AppDispatch, RootState } from '@/store'
import { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { IVideoListItem } from '../home/types'
import VideoDetailWrapper from './styled'
import VideoPlayer from '@/components/video-player'
import { getVideoAction } from '@/store/features/video'
import Banner from './components/banner'

const videoDetail = memo(() => {
  const dispatch = useDispatch<AppDispatch>()

  const { state } = useLocation()
  const { videoId } = state

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

  return (
    <VideoDetailWrapper>
      {/* banner部分 */}
      {videoData && (
        <>
          <Banner videoData={videoData} />
          <VideoPlayer videoData={videoData} />
        </>
      )}
    </VideoDetailWrapper>
  )
})

export default videoDetail
