import React, { memo } from 'react'

interface IProps {
  title: string
  subTitle?: string
}

const SectionHeader = memo((props: IProps) => {
  return (
    <section>
      <h2>{props.title}</h2>
      {props.subTitle && <h3>{props.subTitle}</h3>}
    </section>
  )
})

export default SectionHeader
