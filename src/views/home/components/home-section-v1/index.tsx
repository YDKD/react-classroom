import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import React, { memo } from 'react'
import HomeSectionWrapper from './style'

interface IProps {
  infoData: Record<string, any>
  col?: number
}

const HomeSectionV1 = memo((props: IProps) => {
  return (
    <HomeSectionWrapper>
      <SectionHeader
        title={props.infoData?.title}
        subTitle={props.infoData?.subtitle}
      />
      <SectionRooms list={props.infoData?.list} col={props.col ?? 4} />
      <SectionFooter />
    </HomeSectionWrapper>
  )
})

export default HomeSectionV1
