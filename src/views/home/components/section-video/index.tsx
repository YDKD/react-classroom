import config from '@/config'
import { router } from '@/router'
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

  const handleItemClick = (videoId: number) => {
    router.navigate(`${config.adminPrefix}/video/detail`, {
      formMethod: 'get',
      state: {
        videoId
      }
    })
  }

  return (
    <VideoWrapper theme={{ col: props.col }}>
      <div className="list">
        {list.map((item) => {
          return (
            <div className="video-list-item" key={item.id}>
              <VideoItem videoData={item} handleItemClick={handleItemClick} />
            </div>
          )
        })}
      </div>
    </VideoWrapper>
  )
})

export default SectionVideo
