import IconGlobal from '@/assets/svg/IconGlobal'
import IconMenu from '@/assets/svg/IconMenu'
import IconPerson from '@/assets/svg/IconPerson'
import React, { memo } from 'react'
import AhRightWrapper from './style'

const AhRight = memo(() => {
  return (
    <AhRightWrapper>
      <div className="btns">
        <div>
          <span>登录</span>
        </div>
        <div>
          <span>注册</span>
        </div>
        <div className="icon">
          <span>
            <IconGlobal />
          </span>
        </div>
      </div>

      <div className="profile">
        <IconMenu />
        <div className="right">
          <IconPerson />
        </div>
      </div>
    </AhRightWrapper>
  )
})

export default AhRight
