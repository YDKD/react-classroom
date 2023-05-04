import { memo } from 'react'
import ListItemWrapper from './style'
import classNames from 'classnames'

interface IListItem {
  name: string
  value: number
}

interface IProps {
  title: string
  list: IListItem[]
  activeValue?: number
  setActiveValue?: (index: number) => void
}

const ListItem = memo((props: IProps) => {
  const handleItemClick = (item: IListItem) => {
    console.log(item)
    props.setActiveValue && props.setActiveValue(item.value)
  }

  return (
    <ListItemWrapper>
      <div className="title">{props.title}</div>
      <div className="list">
        {props.list.map((item, index) => {
          return (
            <div
              className={classNames('item', {
                active: item.value === props.activeValue
              })}
              key={item.value}
              onClick={() => handleItemClick(item)}
            >
              <span className="text">{item.name}</span>
            </div>
          )
        })}
      </div>
    </ListItemWrapper>
  )
})

export default ListItem
