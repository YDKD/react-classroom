import { AppDispatch, RootState } from '@/store'
import { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { IUserInfo, IVideoListItem } from '../home/types'
import VideoDetailWrapper from './styled'
import VideoPlayer from '@/components/video-player'
import { getVideoAction } from '@/store/features/video'
import Banner from './components/banner'
import { message } from 'antd'

const videoDetail = memo(() => {
  const dispatch = useDispatch<AppDispatch>()

  const { state } = useLocation()
  const { videoId } = state

  // 从store中获取到视频详情数据
  const { videoData, userInfo } = useSelector(
    (state: RootState) => ({
      videoData: state.video.videoData as IVideoListItem | null,
      userInfo: state.user.userInfo as IUserInfo | null
    }),
    shallowEqual
  )

  const joinStudy = () => {
    // 1. 判断用户是否登录
    // 2. 如果已经登录，直接加入学习
    // 3. 如果没有登录，跳转到登录页面
    if (userInfo) {
      console.log('加入学习')
    } else {
      // 提示用户进行登录
      message.warning('请先登录')
    }
  }

  useEffect(() => {
    // 根据videoId获取到当前视频的详情数据
    dispatch(getVideoAction(videoId))
  }, [])

  return (
    <VideoDetailWrapper>
      {/* banner部分 */}
      {videoData && (
        <>
          <Banner videoData={videoData} joinStudy={joinStudy} />
          <VideoPlayer videoData={videoData} />
        </>
      )}
    </VideoDetailWrapper>
  )
})

export default videoDetail
