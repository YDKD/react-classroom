import IconSearch from '@/assets/svg/IconSearch'
import React, { memo } from 'react'
import AhCenterWrapper from './style'

const AhCenter = memo(() => {
  return (
    <AhCenterWrapper>
      <div className="search">
        <div className="text">搜索房源和体验</div>
        <div className="icon">
          <IconSearch />
        </div>
      </div>
    </AhCenterWrapper>
  )
})

export default AhCenter
