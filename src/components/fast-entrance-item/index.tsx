import { IFastEntranceItem } from '@/views/account-settings/type'
import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import IconFont from '../icon'
import FastEntranceItemWrapper from './style'

const FastEntranceItem = memo((props: IFastEntranceItem) => {
  const navigateTo = useNavigate()
  return (
    <FastEntranceItemWrapper>
      <div className="content" onClick={() => navigateTo(props.link)}>
        <div className="top">
          <IconFont
            iconName={props.icon}
            customStyle={{
              fontSize: '32px'
            }}
          />
        </div>
        <div className="bottom">
          <div className="title font-semibold">{props.title}</div>
          <div className="sub-title">{props.subTitle}</div>
        </div>
      </div>
    </FastEntranceItemWrapper>
  )
})

export default FastEntranceItem
