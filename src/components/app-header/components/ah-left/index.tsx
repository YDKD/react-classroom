import IconFont from '@/components/icon'
import React, { memo } from 'react'
import AhLeftWrapper from './style'
import systemConfig from '@/config'
import { useNavigate } from 'react-router-dom'

const AhLeft = memo(() => {
  const navigate = useNavigate()
  return (
    <AhLeftWrapper>
      <div className="logo">
        <IconFont
          iconName="icon-ketang"
          customStyle={{
            fontSize: '32px'
          }}
        />

        <span
          className="title cursor-pointer"
          onClick={() => navigate('/home')}
        >
          {systemConfig.websiteTitle}
        </span>
      </div>
    </AhLeftWrapper>
  )
})

export default AhLeft
