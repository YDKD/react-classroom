import { addUser } from '@/api/home'
import IStote from '@/store/types'
import { memo, useEffect } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

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

  return <div>{name}</div>
})

export default Home
