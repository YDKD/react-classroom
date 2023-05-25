import React, { memo } from 'react'
import AppFooterWrapper from './style'

import systemConfig from '@/config'

const AppFooter = memo(() => {
  return (
    <AppFooterWrapper>
      <div className="wrapper">
        <div className="title mb-2">打造免费的在线学习平台</div>
        <span className="subTitle">
          本站所有资源均来自互联网，仅供学习交流使用，请勿用于商业用途！
        </span>
        <div className="statement">
          © 2023 {systemConfig.websiteTitle} 版权所有
        </div>
        <div className="beian text-center">
          <a
            rel="noopener noreferrer"
            href="https://beian.miit.gov.cn/"
            target="_blank"
          ></a>
        </div>
      </div>
    </AppFooterWrapper>
  )
})

export default AppFooter
