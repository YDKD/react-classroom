import React from 'react'
import { Navigate } from 'react-router-dom'
import { IRoute } from 'types/router'
import permissionRoutes from './permission-routes'

const Home = React.lazy(() => import('@/views/home'))
const SystemError = React.lazy(() => import('@/views/ErrorPages/SystemError'))
const Forbidden = React.lazy(() => import('@/views/ErrorPages/Forbidden'))
const NotFound = React.lazy(() => import('@/views/ErrorPages/NotFound'))

// 路由配置
const routes: IRoute[] = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/error/system-error',
    element: <SystemError />
  },
  {
    path: '/error/not-found',
    element: <NotFound />
  },
  {
    path: '/error/forbidden',
    element: <Forbidden />
  },
  ...permissionRoutes
]

export default routes
