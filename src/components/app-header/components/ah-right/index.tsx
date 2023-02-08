import { logoutApi } from '@/api/user'
import IconGlobal from '@/assets/svg/IconGlobal'
import IconMenu from '@/assets/svg/IconMenu'
import IconPerson from '@/assets/svg/IconPerson'
import { RootState } from '@/store'
import LoginAndRegisterModal from '@/views/home/components/modal/LoginAndRegisterModal'
import { IUserInfo } from '@/views/home/types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import AhRightWrapper from './style'
import { TBtnClickType } from './type'

import useToken from '@/hooks/tools/useToken'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { webConfig } from '@/constants'

const { removeValue } = useToken()

const AhRight = memo(() => {
  const [isShow, setIsShow] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [clickType, setClickType] = useState<TBtnClickType>('login')
  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate()

  const profileContentRef = useRef<HTMLDivElement>(null)

  const { userInfo } = useSelector(
    (state: RootState) => ({
      userInfo: state.user.userInfo as IUserInfo | null
    }),
    shallowEqual
  )

  useEffect(() => {
    function windowHandleClick(e: MouseEvent) {
      if (profileContentRef.current?.contains(e.target as Node)) {
        return
      }
      setIsShow(false)
    }
    window.addEventListener('click', windowHandleClick, true)

    return () => {
      window.removeEventListener('click', windowHandleClick, true)
    }
  }, [])

  useEffect(() => {
    console.log('userInfo', userInfo)
    if (userInfo) {
      setIsLogin(!!userInfo)
    }
  }, [userInfo])

  /**
   * @return {*}
   * @description: 个人中心面板点击
   * @author: YDKD
   */
  function profileClickHandle() {
    setIsShow(true)
  }

  /**
   * @description: 退出
   * @author: YDKD
   */
  const logout = () => {
    setIsLogin(false)

    // 退出登录
    logoutApi()
      .then(() => {
        message.success('退出成功')
      })
      .finally(() => {
        setIsShow(false)
        removeValue(['access_token', 'refresh_token'])
        navigate(webConfig.rootUrl)
      })
  }

  /**
   * @param {*} type
   * @return {*}
   * @description: 登录注册按钮点击事件
   * @author: YDKD
   */
  function handleBtnClick(type: TBtnClickType) {
    setClickType(type)
    setIsShow(false)
    setModalOpen(true)
  }

  /**
   * @param {string} path 路径
   * @return {*}
   * @description: 链接跳转事件
   * @author: YDKD
   */
  function handleNavigate(path: string) {
    navigate(path)
    setIsShow(false)
  }

  return (
    <AhRightWrapper>
      <div className="btns">
        {!isLogin && (
          <>
            <div onClick={() => handleBtnClick('register')}>
              <span>注册</span>
            </div>
            <div onClick={() => handleBtnClick('login')}>
              <span>登录</span>
            </div>
          </>
        )}
        {/* <div className="icon">
          <span>
            <IconGlobal />
          </span>
        </div> */}
      </div>

      <LoginAndRegisterModal
        modalOpen={modalOpen}
        clickType={clickType}
        setModalOpen={setModalOpen}
        setClickType={handleBtnClick}
      />

      <div className="profile" onClick={profileClickHandle}>
        <IconMenu />
        <div className="right">
          <IconPerson />
        </div>

        {isShow && (
          <div className="profile-content" ref={profileContentRef}>
            {isLogin ? (
              <>
                <div className="profile-content-item">通知</div>
                <div
                  className="profile-content-item line"
                  onClick={() => handleNavigate('account-settings')}
                >
                  账号
                </div>
                <div className="profile-content-item" onClick={logout}>
                  退出
                </div>
              </>
            ) : (
              <>
                <div
                  className="profile-content-item"
                  onClick={() => handleBtnClick('register')}
                >
                  注册
                </div>
                <div
                  className="profile-content-item"
                  onClick={() => handleBtnClick('login')}
                >
                  登录
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </AhRightWrapper>
  )
})

export default AhRight
