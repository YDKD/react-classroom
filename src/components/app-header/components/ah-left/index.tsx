import IconHeader from '@/assets/svg/IconHeader'
import React, { memo } from 'react'
import AhLeftWrapper from './style'

const AhLeft = memo(() => {
  return (
    <AhLeftWrapper>
      <div className="logo">
        <IconHeader />
      </div>
    </AhLeftWrapper>
  )
})

export default AhLeft
