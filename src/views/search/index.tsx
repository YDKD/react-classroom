import { memo, useEffect, useState } from 'react'
import SearchWrapper from './style'
import shiZhanImg from '@/assets/img/shizhan-title.png'
import ListItem from './c-cpms/list-item'
import { getAreaCategoryByAreaId, getVideoAreaList } from '@/api/video'

interface IListItem {
  name: string
  value: number
}

const Search = memo(() => {
  const [direction, setDirection] = useState(1)
  const [directionList, setDirectionList] = useState<IListItem[]>([])
  const [category, setCategory] = useState(1)
  const [categoryList, setCategoryList] = useState<IListItem[]>([])
  const [type, setType] = useState(1)

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
        setCategoryList(_list)
        setCategory(_list[0]?.value)
      }
    })
  }, [direction])

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
            setActiveValue={(index: number) => setDirection(index)}
          />
          <ListItem
            title="分类："
            list={categoryList}
            activeValue={category}
            setActiveValue={(index: number) => setCategory(index)}
          />
        </div>
      </div>
    </SearchWrapper>
  )
})

export default Search
