import IconFont from '@/components/icon'
import React, { memo } from 'react'
import AhLeftWrapper from './style'
import systemConfig from '@/config'

const AhLeft = memo(() => {
  return (
    <AhLeftWrapper>
      <div className="logo">
        <IconFont
          iconName="icon-ketang"
          customStyle={{
            fontSize: '32px'
          }}
        />

        <span className="title">{systemConfig.websiteTitle}</span>
      </div>
    </AhLeftWrapper>
  )
})

export default AhLeft
