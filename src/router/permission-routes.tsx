import React from 'react'

const AccountSettings = React.lazy(() => import('@/views/account-settings'))

const permissionRoutes = [
  {
    path: '/account-settings',
    element: <AccountSettings />
  }
]

export default permissionRoutes
