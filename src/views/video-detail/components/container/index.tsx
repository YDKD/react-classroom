import { memo } from 'react'
import ContainerWrapper from './styled'
import { IVideoListItem } from '@/views/home/types'
import config from '@/config'
import VideoPlayer from '@/components/video-player'

interface IProps {
  videoData: IVideoListItem
  joinStudy?: () => void
  children?: React.ReactNode
}

const fileUploadUrl = config.fileUploadUrl

const Container = memo((props: IProps) => {
  const { videoData } = props

  return (
    <ContainerWrapper>
      <div className="max-w-6xl mx-auto">
        <div className="desc mt-12 px-3">
          <div className="left">
            <div className="title">课程介绍</div>
            <div className="text">{videoData.description}</div>
          </div>
          <div className="right">
            <div className="cover">
              <div className="video">
                <VideoPlayer videoData={videoData} />
              </div>
            </div>
          </div>
        </div>

        {props.children}
      </div>
    </ContainerWrapper>
  )
})

export default Container
