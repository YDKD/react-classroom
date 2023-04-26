import React, { memo } from 'react'
import HomeBannerWrapper from './styled'
import Carousel from '@/components/carousel'
import config from '@/config'

const imgList = [
  'M00/00/00/jNLVbmRI29aEQya2AAAAAAQHIbs624.jpg',
  'M00/00/00/jNLVbmRI2_OEcAGOAAAAAOKekOo672.jpg',
  'M00/00/00/jNLVbmRI3A2Ee9cTAAAAAECeRBk273.jpg',
  'M00/00/00/jNLVbmRI3BqEI4FSAAAAAMcYtyA481.jpg'
].map((item) => {
  return config.fileUploadUrl + item
})

const HomeBanner = memo(() => {
  return (
    <HomeBannerWrapper>
      {/* <div className="home-bg"></div> */}
      <div className="carousel-wrap">
        <Carousel autoplay imgList={imgList} />
      </div>
    </HomeBannerWrapper>
  )
})

export default HomeBanner
