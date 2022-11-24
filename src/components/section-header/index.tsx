import React, { memo } from 'react'
import SectionHeaderWrapper from './style'

interface IProps {
  title: string
  subTitle?: string
}

const SectionHeader = memo((props: IProps) => {
  return (
    <SectionHeaderWrapper>
      <h2>{props.title}</h2>
      {props.subTitle && <span className="sub-title">{props.subTitle}</span>}
    </SectionHeaderWrapper>
  )
})

export default SectionHeader
