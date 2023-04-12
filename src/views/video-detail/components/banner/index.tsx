import { memo } from 'react'
import BannerWrapper from './styled'
import { IVideoListItem } from '@/views/home/types'
import config from '@/config'

interface IProps {
  videoData: IVideoListItem
  joinStudy?: () => void
}

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
        </div>
      </div>
    </BannerWrapper>
  )
})

export default Banner
