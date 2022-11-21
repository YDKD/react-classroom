import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import React, { memo } from 'react'
import HomeSectionWrapper from './style'

interface IProps {
  infoData: Record<string, any>
  col?: number
}

const HomeSection = memo((props: IProps) => {
  return (
    <HomeSectionWrapper>
      <SectionHeader title={props.infoData?.title} />
      <SectionRooms list={props.infoData?.list} col={props.col ?? 4} />
    </HomeSectionWrapper>
  )
})

export default HomeSection
