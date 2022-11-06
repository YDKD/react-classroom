import { Spin } from 'antd'
import type { SpinProps } from 'antd/lib/spin'
import React, { memo } from 'react'

type IProps = SpinProps

const FossLoading = memo((props: IProps) => {
  console.log('123123', 123123)

  return <Spin tip={props.tip} size="large" spinning={props.spinning} />
})

export default FossLoading
