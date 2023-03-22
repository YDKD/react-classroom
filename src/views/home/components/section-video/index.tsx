import { memo } from 'react'
import { IVideoListItem } from '../../types'
import VideoItem from '../video-item'
import VideoWrapper from './styled'

interface IProps {
  list: IVideoListItem[]
  col?: number
}

const SectionVideo = memo((props: IProps) => {
  const { list } = props
  return (
    <VideoWrapper theme={{ col: props.col }}>
      <div className="list">
        {list.map((item) => {
          return (
            <div className="video-list-item" key={item.id}>
              <VideoItem {...item} />
            </div>
          )
        })}
      </div>
    </VideoWrapper>
  )
})

export default SectionVideo
