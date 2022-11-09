import { IGoodPriceItem } from '@/views/home/types'
import React, { memo } from 'react'
import RoomItemWrapper from './styled'

const RoomItem = memo((props: IGoodPriceItem) => {
  console.log('roomItem', props)

  return (
    <RoomItemWrapper>
      <div className="img">
        <img src={props.picture_url} alt={props.name} />
      </div>
      <div className="info" style={{ color: props.verify_info.text_color }}>
        {props.verify_info.messages.join('.')}
      </div>
    </RoomItemWrapper>
  )
})

export default RoomItem
