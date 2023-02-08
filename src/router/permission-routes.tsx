import React from 'react'
import { IRoute } from 'types'

const AccountSettings = React.lazy(() => import('@/views/account-settings'))

const permissionRoutes: IRoute[] = [
  {
    path: '/account-settings',
    name: 'AccountSettings',
    element: AccountSettings
  }
]

export default permissionRoutes
