import { IGoodPriceItem } from '@/views/home/types'
import React, { memo } from 'react'
import RoomItem from '../room-item'
import SectionRoomsWrapper from './styled'

interface IRoomListProps {
  list?: IGoodPriceItem[]
  col?: number
}

const SectionRooms = memo((props: IRoomListProps) => {
  console.log('props', props.col)

  return (
    <SectionRoomsWrapper col={props.col}>
      <div className="list">
        {props?.list?.map((item) => {
          return (
            <div className="list-item" key={item.id}>
              <RoomItem {...item} />
            </div>
          )
        })}
      </div>
    </SectionRoomsWrapper>
  )
})

export default SectionRooms
