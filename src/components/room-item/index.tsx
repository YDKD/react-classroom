import { IGoodPriceItem } from '@/views/home/types'
import React, { memo } from 'react'
import RoomItemWrapper from './styled'

const RoomItem = memo((props: IGoodPriceItem) => {
  console.log('roomItem', props)

  return (
    <RoomItemWrapper verifyColor={props?.verify_info?.text_color}>
      <div className="inner">
        <div className="cover">
          <img src={props.picture_url} alt={props.name} />
        </div>
        <div className="title">{props.verify_info.messages.join('.')}</div>
        <div className="desc">{props.name}</div>
        <div className="price">¥{props.price}/晚</div>
      </div>
    </RoomItemWrapper>
  )
})

export default RoomItem
