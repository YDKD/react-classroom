import config from '@/config'
import { router } from '@/router'
import { memo } from 'react'
import { IVideoListItem } from '../../types'
import VideoItem from '../video-item'
import VideoWrapper from './styled'
import { Empty } from 'antd'

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
      {list.length > 0 ? (
        <div className="list">
          {list.map((item) => {
            return (
              <div className="video-list-item" key={item.id}>
                <VideoItem videoData={item} handleItemClick={handleItemClick} />
              </div>
            )
          })}
        </div>
      ) : (
        <Empty
          image="https://static3.sycdn.imooc.com/static/img/search/empty.png"
          description="此分类下暂无相关学习视频数据"
        />
      )}
    </VideoWrapper>
  )
})

export default SectionVideo
