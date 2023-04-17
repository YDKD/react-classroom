import { memo } from 'react'
import DetailInformationWrapper from './styled'
import { IVideoListItem } from '@/views/home/types'
import config from '@/config'
import VideoPlayer from '@/components/video-player'
import IconFont from '@/components/icon'
import { formatSeconds } from '@/utils'

interface IProps {
  videoData: IVideoListItem
  joinStudy?: () => void
}

const DetailInformation = memo((props: IProps) => {
  const { videoData } = props

  return (
    <DetailInformationWrapper>
      <div className="item">
        <div className="icon">
          <IconFont
            iconName="icon-rili"
            customStyle={{
              fontSize: '32px'
            }}
          />
        </div>
        <div className="text">
          <div className="title">开课时间</div>
          <div className="desc">{videoData.createTime}</div>
        </div>
      </div>
      <div className="item">
        <div className="icon">
          <IconFont
            iconName="icon-leijixuexishichang"
            customStyle={{
              fontSize: '32px'
            }}
          />
        </div>
        <div className="text">
          <div className="title">课长时间</div>
          <div className="desc">
            {formatSeconds(Number(videoData.duration))}
          </div>
        </div>
      </div>
      <div className="item">
        <div className="icon">
          <IconFont
            iconName="icon-wj-cj"
            customStyle={{
              fontSize: '32px'
            }}
          />
        </div>
        <div className="text">
          <div className="title">答题最高分</div>
          <div className="desc">{videoData.maxScore || 0}分</div>
        </div>
      </div>
      <div className="item">
        <div className="icon">
          <IconFont
            iconName="icon-zonghaoshishichang"
            customStyle={{
              fontSize: '32px'
            }}
          />
        </div>
        <div className="text">
          <div className="title">用时最短</div>
          <div className="desc">
            {formatSeconds(videoData.consumeTime) || 0}
          </div>
        </div>
      </div>
    </DetailInformationWrapper>
  )
})

export default DetailInformation
