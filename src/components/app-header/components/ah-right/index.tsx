import IconGlobal from '@/assets/svg/IconGlobal'
import IconMenu from '@/assets/svg/IconMenu'
import IconPerson from '@/assets/svg/IconPerson'
import React, { memo, useEffect, useState } from 'react'
import AhRightWrapper from './style'

const AhRight = memo(() => {
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    function windowHandleClick() {
      setIsShow(false)
    }
    window.addEventListener('click', windowHandleClick, true)

    return () => {
      window.removeEventListener('click', windowHandleClick, true)
    }
  }, [])

  function profileClickHandle() {
    setIsShow(true)
  }

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

      <div className="profile" onClick={() => profileClickHandle()}>
        <IconMenu />
        <div className="right">
          <IconPerson />
        </div>

        {isShow && (
          <div className="profile-content">
            <div className="profile-content-item">注册</div>
            <div className="profile-content-item line">登录</div>
            <div className="profile-content-item">出租房源</div>
            <div className="profile-content-item">开展体验</div>
            <div className="profile-content-item">帮助</div>
          </div>
        )}
      </div>
    </AhRightWrapper>
  )
})

export default AhRight
