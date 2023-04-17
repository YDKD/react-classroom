import { memo } from 'react'
import BannerWrapper from './styled'
import { IVideoListItem } from '@/views/home/types'
import config from '@/config'
import { Button, Popconfirm } from 'antd'

interface IProps {
  videoData: IVideoListItem
  joinStudy?: () => void
  startChallenge?: () => void
}
// banner图
const Banner = memo((props: IProps) => {
  const { videoData } = props

  return (
    <BannerWrapper>
      <div className="meng">
        <div className="inner">
          <p className="text-2xl text-white">{videoData.title}</p>
          <div className="desc">
            {videoData.description.slice(0, 20) + '...'}
          </div>

          <div className="detail">
            <div className="tag">视频标签：{videoData.tagName}</div>
            <div className="tag">已加入人数：{videoData.flowCount}人</div>
          </div>

          <div className="join-btn" onClick={props.joinStudy}>
            {videoData.hasFollow === '1' ? '已加入学习' : '加入学习'}
          </div>

          <Popconfirm
            title="即将开启答题挑战，是否继续？"
            onConfirm={props.startChallenge}
            okText="确定"
            cancelText="取消"
          >
            <div className="challenge-btn">挑战答题</div>
          </Popconfirm>
        </div>
      </div>
    </BannerWrapper>
  )
})

export default Banner
