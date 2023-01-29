import { getGoodPriceAction } from '@/store/features/home'
import { memo, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { AppDispatch, RootState } from '@/store'

import { IGoodPrice } from './types'

import HomeBanner from './components/home-banner'
import HomeSectionV1 from './components/home-section-v1'
import HomSetionV2 from './components/home-section-v2'
import HomeWrapper from './styled'
import { getUser } from '@/api/test'

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

    const params = {
      pageNum: 1,
      pageSize: 2
    }

    getUser(params).then((res) => {
      console.log('res', res)
    })
  }, [dispatch])

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
