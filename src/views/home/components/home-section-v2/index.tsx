import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import React, { memo, useCallback, useState } from 'react'
import HomeSectionWrapper from './style'

interface IProps {
  infoData: Record<string, any>
  col?: number
}

const HomeSectionV2 = memo((props: IProps) => {
  /** 从props获取数据 */
  const { infoData } = props

  /** 定义内部的state */
  const initialName = infoData.dest_list && Object.keys(infoData.dest_list)[0]
  const [name, setName] = useState(initialName)
  const tabNames = infoData.dest_address?.map(
    (item: { name: any }) => item.name
  )
  // useEffect(() => {
  //   setName("xxxxx")
  // }, [infoData])

  /** 事件处理函数 */
  const tabClickHandle = useCallback(function (_index: any, name: any) {
    setName(name)
  }, [])

  return (
    <HomeSectionWrapper>
      <SectionHeader
        title={props.infoData?.title}
        subTitle={props.infoData?.subtitle}
      />

      <SectionTabs tabList={tabNames} tabClick={tabClickHandle} />

      <SectionRooms list={infoData.dest_list?.[name]} col={props.col ?? 4} />
      <SectionFooter />
    </HomeSectionWrapper>
  )
})

export default HomeSectionV2
