import { memo, useState } from 'react'
import SearchWrapper from './style'
import shiZhanImg from '@/assets/img/shizhan-title.png'
import ListItem from './c-cpms/list-item'

const Search = memo(() => {
  const [direction, setDirection] = useState(1)
  const [type, setType] = useState(1)

  const directionList = [
    {
      name: '前端开发',
      value: 1
    },
    {
      name: '后端开发',
      value: 2
    },
    {
      name: '移动开发',
      value: 3
    },
    {
      name: '计算机基础',
      value: 4
    }
  ]

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
            title="方向"
            list={directionList}
            activeValue={direction}
            setActiveValue={(index: number) => setDirection(index)}
          />
        </div>
      </div>
    </SearchWrapper>
  )
})

export default Search
