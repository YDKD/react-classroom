import { memo } from 'react'
import AhCenter from './components/ah-center'
import AhLeft from './components/ah-left'
import AhRight from './components/ah-right'
import AppWrapper from './style'

const AppHeader = memo(() => {
  return (
    <AppWrapper>
      <AhLeft />
      {/* <AhCenter /> */}
      <AhRight />
    </AppWrapper>
  )
})

export default AppHeader
