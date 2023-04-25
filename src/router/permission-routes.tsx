import React, { lazy } from 'react'
import { IRoute } from 'types'

const AccountSettings = React.lazy(() => import('@/views/account-settings'))
const Collection = React.lazy(() => import('@/views/collection'))
const Profile = React.lazy(() => import('@/views/profile'))

const permissionRoutes: IRoute[] = [
  {
    path: 'account-settings',
    name: 'AccountSettings',
    element: AccountSettings
  },
  {
    path: 'collection',
    name: '收藏',
    element: Collection
  },
  {
    path: 'profile',
    name: '个人管理',
    element: Profile
  },
  {
    path: 'video/detail',
    name: 'Video',
    element: React.lazy(() => import('@/views/video-detail'))
  }
]

export default permissionRoutes
