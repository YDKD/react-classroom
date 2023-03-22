import React from 'react'
import { IRoute } from 'types'

const AccountSettings = React.lazy(() => import('@/views/account-settings'))

const permissionRoutes: IRoute[] = [
  {
    path: 'account-settings',
    name: 'AccountSettings',
    element: AccountSettings
  },
  {
    path: 'video/detail',
    name: 'Video',
    element: React.lazy(() => import('@/views/video-detail'))
  }
]

export default permissionRoutes
