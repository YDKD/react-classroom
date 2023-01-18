import React, { memo } from 'react'
import AppFooterWrapper from './style'
import { list as footerData } from './config'

import systemConfig from '@/config'

const AppFooter = memo(() => {
  return (
    <AppFooterWrapper>
      <div className="wrapper">
        <div className="service">
          {footerData.map((item) => {
            return (
              <div className="item" key={item.id}>
                <div className="name">{item.name}</div>
                <div className="list">
                  {item.list.map((iten) => {
                    return (
                      <div className="iten" key={iten}>
                        {iten}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
        <div className="statement">
          © 2022 {systemConfig.websiteTitle} 版权所有
        </div>
      </div>
    </AppFooterWrapper>
  )
})

export default AppFooter
