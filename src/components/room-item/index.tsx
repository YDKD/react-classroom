import { IGoodPriceItem } from '@/views/home/types'
import React, { memo } from 'react'
import RoomItemWrapper from './styled'
import Rating from '@mui/material/Rating'

const RoomItem = memo((props: IGoodPriceItem) => {
  return (
    <RoomItemWrapper
      theme={{
        verifyColor: props?.verify_info?.text_color
      }}
    >
      <div className="inner">
        <div className="cover">
          <img src={props.picture_url} alt={props.name} />
        </div>
        <div className="title">{props.verify_info.messages.join('.')}</div>
        <div className="desc">{props.name}</div>
        <div className="price">¥{props.price}/晚</div>
        <div className="rate">
          <Rating
            name="read-only"
            value={props.star_rating}
            defaultValue={0}
            precision={0.5}
            readOnly
            sx={{ color: props.star_rating_color, fontSize: 12 }}
          />
          {props.bottom_info && (
            <div className="bottom-info">
              <span
                className="comment"
                style={{
                  color: props.bottom_info?.content_color,
                  fontSize: props.bottom_info?.font_size + 'px'
                }}
              >
                {props.reviews_count + '.' + props.bottom_info?.content}
              </span>
            </div>
          )}
        </div>
      </div>
    </RoomItemWrapper>
  )
})

export default RoomItem
