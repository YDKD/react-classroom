import { memo } from 'react'
import BannerWrapper from './styled'
import { IVideoListItem } from '@/views/home/types'

interface IProps {
  videoData: IVideoListItem
}

const Banner = memo((props: IProps) => {
  const { videoData } = props
  console.log('videoData: ', videoData)
  return (
    <BannerWrapper>
      <div className="meng">
        <div className="inner">
          <p className="text-2xl text-white">{videoData.title}</p>
          <div className="desc">{videoData.description}</div>

          <div className="detail">
            <div className="tag">视频标签：{videoData.tagName}</div>
            <div className="tag">已加入人数：{videoData.flowCount}人</div>
          </div>
        </div>
      </div>
    </BannerWrapper>
  )
})

export default Banner
