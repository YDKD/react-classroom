import { memo } from 'react'
import AhCenter from './components/ah-center'
import AhLeft from './components/ah-left'
import AhRight from './components/ah-right'
import AppWrappper from './style'

const AppHeader = memo(() => {
  return (
    <AppWrappper>
      <AhLeft />
      <AhCenter />
      <AhRight />
    </AppWrappper>
  )
})

export default AppHeader
