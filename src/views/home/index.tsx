import RoomItem from '@/components/room-item'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import { AppDispatch, RootState } from '@/store'
import { getGoodPriceAction } from '@/store/features/home'
import { memo, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import HomeBanner from './components/home-banner'
import HomeWrapper from './styled'
import { IGoodPrice } from './types'

const Home = memo(() => {
  // 从store中获取数据
  const { goodPriceInfo } = useSelector(
    (state: RootState) => ({
      goodPriceInfo: state.home.goodPrice as IGoodPrice
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

      <div className="content">
        <SectionHeader title={goodPriceInfo.title} />
        <SectionRooms list={goodPriceInfo.list} />
      </div>
    </HomeWrapper>
  )
})

export default Home
