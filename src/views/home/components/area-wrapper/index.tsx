import ScrollView from '@/base-ui/scroll-view'
import classNames from 'classnames'
import { memo, useState } from 'react'
import { IAreaItem } from '../../types'
import AreaWrapper from './styled'
interface IProps {
  tabs: IAreaItem[]
  activeAreaId: number
  tabClick: (index: number) => void
}

const Area = memo((props: IProps) => {
  const { tabs = [], tabClick, activeAreaId } = props

  function itemClickHandle(activeAreaId: number) {
    tabClick(activeAreaId)
  }

  return (
    <AreaWrapper>
      <ScrollView>
        {tabs.map((item) => {
          return (
            <div
              key={item.id}
              className={classNames('item', {
                active: item.id === activeAreaId
              })}
              onClick={(e) => itemClickHandle(item.id)}
            >
              {item.areaName}
            </div>
          )
        })}
      </ScrollView>
    </AreaWrapper>
  )
})

export default Area
