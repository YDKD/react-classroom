import React, { memo } from 'react'
import { SectionFooterWrapper } from './style'

import { RightOutlined } from '@ant-design/icons'

interface IProps {
  name?: string
  custom?: boolean
}

const defaultText = '显示全部'

const SectionFooter = memo((props: IProps) => {
  const { name, custom } = props

  let showMessage = ''

  if (name) {
    showMessage = custom ? name : `查看更多${name}房源`
  } else {
    showMessage = defaultText
  }

  return (
    <SectionFooterWrapper>
      <span>{showMessage}</span>
      <RightOutlined />
    </SectionFooterWrapper>
  )
})

export default SectionFooter
