import React, { lazy } from 'react'
import { IRoute } from 'types'

const AccountSettings = React.lazy(() => import('@/views/account-settings'))
const Collection = React.lazy(() => import('@/views/collection'))

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
    path: 'video/detail',
    name: 'Video',
    element: React.lazy(() => import('@/views/video-detail'))
  }
]

export default permissionRoutes
