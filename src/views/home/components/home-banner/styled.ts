import styled from 'styled-components'

import coverBg from '@/assets/img/cover.jpg'

const HomeBannerWrapper = styled.div`
  .home-bg {
    height: 529px;
    background: url(${coverBg}) no-repeat no-repeat center;
    background-size: cover;
  }

  .carousel-wrap {
    height: 529px;
    overflow: hidden;
  }
`

export default HomeBannerWrapper
