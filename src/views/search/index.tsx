import { memo, useEffect, useState } from 'react'

import SearchWrapper from './style'
import shiZhanImg from '@/assets/img/shizhan-title.png'
import ListItem from './c-cpms/list-item'
import {
  getAreaCategoryByAreaId,
  getVideoAreaList,
  getVideoList as getVideoListApi
} from '@/api/video'
import { IVideoListItem } from '../home/types'
import { PaginationConfig } from 'antd/es/pagination/Pagination'
import { IReqVideoListParams } from '@/api/video/type'
import SectionVideo from '../home/components/section-video'

interface IListItem {
  name: string
  value: number
}

const Search = memo(() => {
  const [direction, setDirection] = useState(1)
  const [directionList, setDirectionList] = useState<IListItem[]>([])
  const [category, setCategory] = useState(0)
  const [categoryList, setCategoryList] = useState<IListItem[]>([])
  const [type, setType] = useState(1)
  const [videoList, setVideoList] = useState<IVideoListItem[]>([])

  const [paginationParams, setPaginationParams] = useState<PaginationConfig>({
    current: 1,
    pageSize: 10,
    total: 0
  })

  const [requestParams, setRequestParams] = useState<IReqVideoListParams>({
    areaId: direction,
    size: paginationParams.pageSize || 10,
    no: paginationParams.current || 1
  })

  function getVideoList() {
    getVideoListApi(requestParams).then((res) => {
      if (res.status === 200) {
        const { data } = res
        setVideoList(data.list)
        setPaginationParams({
          ...paginationParams,
          total: data.total
        })
      }
    })
  }

  useEffect(() => {
    getVideoAreaList().then((res) => {
      if (res.status === 200) {
        const _list = res.data.map((item: any) => {
          return {
            name: item.areaName,
            value: item.id
          }
        })
        setDirectionList(_list)
        setDirection(_list[0].value)
      }
    })
  }, [])

  useEffect(() => {
    const params = {
      areaId: direction
    }

    getAreaCategoryByAreaId(params).then((res) => {
      if (res.status === 200) {
        const _list = res.data.map((item: any) => {
          return {
            name: item.name,
            value: item.id
          }
        })

        _list.unshift({
          name: '全部',
          value: 0
        })

        setCategoryList(_list)
        setCategory(_list[0]?.value)
      }
    })
  }, [direction])

  useEffect(() => {
    const params: IReqVideoListParams = {
      areaId: direction,
      size: paginationParams.pageSize || 10,
      no: paginationParams.current || 1
    }

    if (category !== 0) {
      params.categoryId = category
    }

    // 重置分页
    setPaginationParams({
      ...paginationParams,
      current: 1,
      total: 0
    })

    setRequestParams(params)
  }, [direction, category, paginationParams.current])

  useEffect(() => {
    getVideoList()
  }, [requestParams])

  return (
    <SearchWrapper>
      <div className="header">
        <div className="header-wrap w143">
          <div className="banner">
            <div className="title">
              <img className="h-full" src={shiZhanImg} alt="" />
            </div>
            <div className="text pl-2 tracking-widest">
              <span>实战推荐</span>
            </div>
          </div>
        </div>
        <div className="list-wrap w143">
          <ListItem
            title="方向："
            list={directionList}
            activeValue={direction}
            setActiveValue={(activeValue: number) => setDirection(activeValue)}
          />
          <ListItem
            title="分类："
            list={categoryList}
            activeValue={category}
            setActiveValue={(activeValue: number) => setCategory(activeValue)}
          />
        </div>
      </div>

      <div className="video-list w143">
        {/* 视频列表部分 */}
        <SectionVideo list={videoList} col={4} />
      </div>
    </SearchWrapper>
  )
})

export default Search
