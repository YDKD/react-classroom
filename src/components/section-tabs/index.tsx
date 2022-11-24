import React, { memo, useState } from 'react'
import classNames from 'classnames'
import { SectionTabsWrapper } from './styled'


interface IProps {
  tabList: Array<string>
  tabClick: (index: number, item: string) => void
}

const SectionTabs = memo((props: IProps) => {
  const { tabList = [], tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  function itemClickHandle(index: number, item: string) {
    setCurrentIndex(index)
    tabClick(index, item)
  }

  return (
    <SectionTabsWrapper>
      <div className="tab-list">
        {tabList.map((item, index) => {
          return (
            <div
              onClick={(e) => itemClickHandle(index, item)}
              className={classNames('tab-list-item', {
                active: index === currentIndex
              })}
              key={index}
            >
              {item}
            </div>
          )
        })}
      </div>
    </SectionTabsWrapper>
  )
})

export default SectionTabs
