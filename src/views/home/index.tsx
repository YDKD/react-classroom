import { addUser } from '@/api/home'
import IStote from '@/store/types'
import { memo, useEffect } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import HomeBanner from './components/home-banner'
import HomeWrapper from './styled'

const Home = memo(() => {
  useEffect(() => {
    const data = {
      username: 'YDKD',
      password: '123456a'
    }
    addUser(data)
  }, [])

  // 从store中获取数据
  const { name } = useSelector((state: IStote) => state.home, shallowEqual)

  return (
    <HomeWrapper className="home-container">
      <HomeBanner />
    </HomeWrapper>
  )
})

export default Home
