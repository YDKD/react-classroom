import IStote from '@/store/types'
import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

const Home = memo(() => {
  // 从store中获取数据
  const { name } = useSelector((state: IStote) => state.home, shallowEqual)

  return <div>{name}</div>
})

export default Home
