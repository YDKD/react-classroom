import React, { memo } from 'react'
import HomeBannerWrapper from './styled'

const HomeBanner = memo(() => {
  return (
    <HomeBannerWrapper>
      <div className="home-bg"></div>
    </HomeBannerWrapper>
  )
})

export default HomeBanner
