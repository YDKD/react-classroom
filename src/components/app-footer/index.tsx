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
        <div className="beian text-center">
          <a
            rel="noopener noreferrer"
            href="https://beian.miit.gov.cn/"
            target="_blank"
          >
            蜀ICP备2023001680号-1
          </a>
        </div>
      </div>
    </AppFooterWrapper>
  )
})

export default AppFooter
