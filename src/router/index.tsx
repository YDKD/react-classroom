// import { lazyLoadComponent } from "@/utils";
import React from 'react'
import { Navigate } from 'react-router-dom'
import { IRoute } from 'types/router'

const Home = React.lazy(() => import('@/views/home'))

// 路由配置
const routes: IRoute[] = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />
  }
]

export default routes
