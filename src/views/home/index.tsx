import { AppDispatch, RootState } from '@/store'
import { getGoodPriceAction } from '@/store/features/home'
import { memo, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import HomeBanner from './components/home-banner'
import HomeSection from './components/home-section'
import HomeWrapper from './styled'
import { IGoodPrice } from './types'

const Home = memo(() => {
  // 从store中获取数据
  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector(
    (state: RootState) => ({
      goodPriceInfo: state.home.goodPrice as IGoodPrice,
      highScoreInfo: state.home.highScore as IGoodPrice,
      discountInfo: state.home.discount as IGoodPrice
    }),
    shallowEqual
  )

  // 获取派发函数
  const dispatch = useDispatch<AppDispatch>()

  // 获取请求的数据
  useEffect(() => {
    dispatch(getGoodPriceAction())
  }, [dispatch])

  return (
    <HomeWrapper className="home-container">
      <HomeBanner />

      <div className="home-wrapper">
        {/* 折扣模块 */}
        <HomeSection infoData={discountInfo} col={3} />

        {/* 高性价比模块 */}
        <HomeSection infoData={goodPriceInfo} />

        {/* 高评分模块 */}
        <HomeSection infoData={highScoreInfo} />
      </div>
    </HomeWrapper>
  )
})

export default Home
