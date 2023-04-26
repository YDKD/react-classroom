import React, { memo, useRef } from 'react'
import { Carousel, Button } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { CarouselProps, CarouselRef } from 'antd/es/carousel'
import CarouselWrapper from './styled'

interface IProps extends CarouselProps {
  imgList: string[]
}

const DisplayPanel = memo((props: IProps) => {
  const carouselEL = useRef<CarouselRef>(null)
  return (
    <CarouselWrapper>
      <Button
        className="leftButton"
        style={{ left: 55 }}
        onClick={() => {
          carouselEL.current?.prev()
        }}
        icon={<LeftOutlined />}
      ></Button>
      <Button
        className="rightButton"
        style={{ right: 55 }}
        onClick={() => {
          carouselEL.current?.next()
        }}
        icon={<RightOutlined />}
      ></Button>
      <Carousel {...props} autoplay={false} ref={carouselEL}>
        {props.imgList.map((item, index) => {
          return (
            <div className="img-item" key={item}>
              <img src={item} />
            </div>
          )
        })}
      </Carousel>
    </CarouselWrapper>
  )
})
export default DisplayPanel
