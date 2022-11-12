import { IGoodPriceItem } from '@/views/home/types'
import React, { memo } from 'react'
import RoomItem from '../room-item'
import SectionRoomsWrapper from './styled'

interface IRoomListProps {
  list?: IGoodPriceItem[]
}

const SectionRooms = memo((props: IRoomListProps) => {
  return (
    <SectionRoomsWrapper>
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
