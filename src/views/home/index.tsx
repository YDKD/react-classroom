import { memo } from 'react'

import { IGoodPrice } from './types'

import HomeBanner from './components/home-banner'
import HomeWrapper from './styled'

const Home = memo(() => {
  // 从store中获取数据
  // const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector(
  //   (state: RootState) => ({
  //     goodPriceInfo: state.home.goodPrice as IGoodPrice,
  //     highScoreInfo: state.home.highScore as IGoodPrice,
  //     discountInfo: state.home.discount as IGoodPrice
  //   }),
  //   shallowEqual
  // )

  return (
    <HomeWrapper className="home-container">
      <HomeBanner />

      <div className="home-wrapper">
        <h1 className="h">Home Container</h1>
      </div>
    </HomeWrapper>
  )
})

export default Home
