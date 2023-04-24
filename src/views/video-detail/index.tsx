import { AppDispatch, RootState } from '@/store'
import { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { IUserInfo, IVideoListItem } from '../home/types'
import VideoDetailWrapper from './styled'
import { getVideoAction } from '@/store/features/video'
import Banner from './components/banner'
import { Modal, message } from 'antd'
import { queryQuestionApi, videoCollectionApi } from '@/api/video'
import Container from './components/container'
import DetailInformation from './components/detail-information'
import Challenge from './components/challenge'
import { IQuestionItem } from '@/api/video/type'

const videoDetail = memo(() => {
  const dispatch = useDispatch<AppDispatch>()

  const [showChallenge, setShowChallenge] = useState<boolean>(false)

  const [questionList, setQuestionList] = useState<IQuestionItem[]>([])

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
      if (videoData?.hasFollow === '0') {
        const data = {
          videoId: videoId
        }

        videoCollectionApi(data).then((res) => {
          if (res.status === 200) {
            message.success(res.msg)

            // 重新获取视频详情数据
            dispatch(getVideoAction(videoId))
          }
        })
      }
    } else {
      // 提示用户进行登录
      message.warning('请先登录')
    }
  }

  /**
   * 开始答题
   */
  const startChallenge = () => {
    // 根据当前视频的id，获取到当前视频的答题数据
    const params = {
      videoId: videoId
    }

    queryQuestionApi(params).then((res) => {
      if (res.status === 200) {
        // 将答题数据存储到store中
        if (res.data?.length > 0) {
          setQuestionList(res.data)
          setShowChallenge(true)
        } else {
          // 未创建题目
          message.warning('暂未创建题目')
        }
      }
    })

    // setShowChallenge(true)
  }

  /**
   * 退出答题
   */
  const logout = () => {
    setShowChallenge(false)
  }

  useEffect(() => {
    // 根据videoId获取到当前视频的详情数据
    dispatch(getVideoAction(videoId))
  }, [showChallenge, videoId])

  return (
    <VideoDetailWrapper>
      {/* banner部分 */}
      {videoData &&
        (showChallenge ? (
          // 答题
          <Challenge
            videoData={videoData}
            questionList={questionList}
            logout={logout}
          />
        ) : (
          // 视频详情
          <>
            {/* 背景图 */}
            <Banner
              videoData={videoData}
              joinStudy={joinStudy}
              startChallenge={startChallenge}
            />

            {/* 内容部分 */}
            <Container videoData={videoData}>
              {/* 视频详情 */}
              <DetailInformation videoData={videoData} />
            </Container>
          </>
        ))}
    </VideoDetailWrapper>
  )
})

export default videoDetail
