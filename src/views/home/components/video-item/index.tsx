import { dic_video_type } from '@/dictionary'
import { montageUrl } from '@/utils'
import { memo } from 'react'
import { IVideoListItem } from '../../types'
import VideoItemWrapper from './styled'

interface IProps {
  handleItemClick: (id: number) => void
  videoData: IVideoListItem
}

const VideoItem = memo((props: IProps) => {
  const { videoData, handleItemClick } = props
  return (
    <VideoItemWrapper>
      <div className="inner" onClick={(e) => handleItemClick(videoData.id)}>
        <div className="cover">
          <img src={montageUrl(videoData.thumbnail)} alt={videoData.title} />
        </div>
        <div className="content">
          <div className="info">
            <div className="title">{videoData.title}</div>
            <div className="type">{dic_video_type[videoData.type]}</div>
          </div>
          <div className="desc">{videoData.description}</div>
        </div>
      </div>
    </VideoItemWrapper>
  )
})

export default VideoItem
