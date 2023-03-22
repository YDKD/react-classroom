import { dic_video_type } from '@/dictionary'
import { montageUrl } from '@/utils'
import { memo } from 'react'
import { IVideoListItem } from '../../types'
import VideoItemWrapper from './styled'
const VideoItem = memo((props: IVideoListItem) => {
  return (
    <VideoItemWrapper>
      <div className="inner">
        <div className="cover">
          <img src={montageUrl(props.thumbnail)} alt={props.title} />
        </div>
        <div className="content">
          <div className="info">
            <div className="title">{props.title}</div>
            <div className="type">{dic_video_type[props.type]}</div>
          </div>
          <div className="desc">{props.description}</div>
        </div>
      </div>
    </VideoItemWrapper>
  )
})

export default VideoItem
