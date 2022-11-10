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
      {props.subTitle && <h3>{props.subTitle}</h3>}
    </SectionHeaderWrapper>
  )
})

export default SectionHeader
