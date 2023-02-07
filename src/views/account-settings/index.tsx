import FastEntranceItem from '@/components/fast-entrance-item'
import { RootState } from '@/store'
import { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { IUserInfo } from '../home/types'
import AccountSettingWrapper from './style'

import { settingConfigList } from './config'

const AccountSetting = memo(() => {
  const { userInfo } = useSelector(
    (state: RootState) => ({
      userInfo: state.user.userInfo as IUserInfo | null
    }),
    shallowEqual
  )

  return (
    <AccountSettingWrapper>
      <div className="md:container md:mx-auto px-32 wrapper">
        <div className="header my-8">
          <h1 className="font-bold">账号</h1>
          <div className="sub flex items-center">
            <span className="font-bold text-lg pr-2">
              {userInfo?.nick + ','}
            </span>
            <span>{userInfo?.email}</span>
          </div>
        </div>

        <div className="setting-container flex flex-wrap">
          {settingConfigList.map((item, index) => {
            return (
              <div className="item" key={item.id}>
                <FastEntranceItem
                  id={item.id}
                  title={item.title}
                  subTitle={item.subTitle}
                  icon={item.icon}
                  link={item.link}
                />
              </div>
            )
          })}
        </div>
      </div>
    </AccountSettingWrapper>
  )
})

export default AccountSetting
