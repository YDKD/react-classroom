import React, { memo } from 'react'
import AppFooterWrapper from './style'

import systemConfig from '@/config'

const AppFooter = memo(() => {
  return (
    <AppFooterWrapper>
      <div className="wrapper">
        <div className="title">创新课堂，美好未来</div>
        <span className="subTitle">Innovative Classroom, Bright Future</span>
        <div className="statement">
          © 2022 {systemConfig.websiteTitle} 版权所有
        </div>
      </div>
    </AppFooterWrapper>
  )
})

export default AppFooter
