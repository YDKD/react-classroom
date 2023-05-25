import React, { memo } from 'react'
import HomeBannerWrapper from './styled'
import Carousel from '@/components/carousel'
import config from '@/config'

const imgList = [
  'https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLDmYHogib25feibHoDwqEAyy5xQq2OCwQALeUTva6U5qobfRcppDKxLqPH1ibgeNUFE6M/356',
  'https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLBia3JuRMDbpaSNUgljlG1f2fwlDoPQOADBAFRZxFPmfbfwHKyuibZeHia4Vlk3l6Z0gI/356',
  'https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLDicW7qVW61jAgxpoZib2F7YW0tlnwZEcfTeicQT6audykhPNvWXfEXVCdZj2c8LbkDia0/356'
]

// const imgList = [
//   'M00/00/00/jNLVbmRI29aEQya2AAAAAAQHIbs624.jpg',
//   'M00/00/00/jNLVbmRI2_OEcAGOAAAAAOKekOo672.jpg',
//   'M00/00/00/jNLVbmRI3A2Ee9cTAAAAAECeRBk273.jpg',
//   'M00/00/00/jNLVbmRI3BqEI4FSAAAAAMcYtyA481.jpg'
// ].map((item) => {
//   return config.fileUploadUrl + item
// })

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
