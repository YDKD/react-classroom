import { memo, useEffect, useState } from 'react'

import { IAreaItem, IVideoListItem } from './types'

import HomeBanner from './components/home-banner'
import HomeWrapper from './styled'
import { getVideoAreaList, getVideoByAreaId } from '@/api/video'
import Area from './components/area-wrapper'
import { webConfig } from '@/constants'
import { IReqVideoListParams } from '@/api/video/type'
import { Spin } from 'antd'
import { TableParams } from 'types/common'
import { PaginationConfig } from 'antd/es/pagination'
import SectionVideo from './components/section-video'
import { setVideoData } from '@/store/features/video'

const Home = memo(() => {
  const [areaList, setAreaList] = useState<IAreaItem[]>([])
  const [activeAreaId, setActiveAreaId] = useState<number>(
    webConfig.defaultActiveAreaId
  )
  const [loadingArea, setLoadingArea] = useState(false)
  const [videoList, setVideoList] = useState<IVideoListItem[]>([])
  const [paginationParams, setPaginationParams] = useState<PaginationConfig>({
    current: 1,
    pageSize: 10,
    total: 0
  })
  const [loadingVideo, setLoadingVideo] = useState(false)

  const getVideoList = () => {
    const params: IReqVideoListParams = {
      areaId: activeAreaId,
      size: paginationParams.pageSize || 10,
      no: paginationParams.current || 1
    }

    setLoadingVideo(true)

    getVideoByAreaId(params).then((res) => {
      const { data } = res
      setLoadingVideo(false)
      setVideoList(data.list)
      setPaginationParams({
        ...paginationParams,
        total: data.total
      })
    })
  }

  const init = () => {
    setLoadingArea(true)
    getVideoAreaList().then((res) => {
      setLoadingArea(false)
      const { data } = res

      setAreaList(data)
      setActiveAreaId(data[0].id)

      getVideoList()
    })
  }

  const tabClick = (activeAreaId: number) => {
    setActiveAreaId(activeAreaId)
  }

  useEffect(() => {
    init()
  }, [])

  useEffect(() => {
    getVideoList()
  }, [activeAreaId, paginationParams.current, paginationParams.pageSize])

  return (
    <HomeWrapper className="home-container">
      <HomeBanner />

      <div className="home-wrapper">
        {/* 分区部分 */}
        <div className="area-content">
          <Spin spinning={loadingArea}>
            <Area
              tabs={areaList}
              activeAreaId={activeAreaId}
              tabClick={tabClick}
            />
          </Spin>
        </div>

        {/* 视频列表部分 */}
        <SectionVideo list={videoList} col={4} />
      </div>
    </HomeWrapper>
  )
})

export default Home
