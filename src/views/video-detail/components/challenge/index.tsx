import { memo, useEffect, useState } from 'react'
import ChallengeWrapper from './styled'
import { IVideoListItem } from '@/views/home/types'
import { Button, Popconfirm } from 'antd'
import Countdown from '@/components/count-down'

interface IProps {
  videoData: IVideoListItem
  logout?: () => void
}

// 答题模块
const Challenge = memo((props: IProps) => {
  const [consumeTime, setConsumeTime] = useState(0)

  const [completed, setCompleted] = useState(false)

  const handleTimeElapsed = (milliseconds: number) => {
    setConsumeTime(milliseconds)
  }

  return (
    <ChallengeWrapper>
      <div className="logout">
        <Popconfirm
          title="是否退出答题？"
          onConfirm={props.logout}
          okText="确定"
          cancelText="取消"
        >
          <Button type="primary">退出答题</Button>
        </Popconfirm>
        <div className="timer">
          倒计时：
          <Countdown
            minutes={1}
            seconds={0}
            completed={completed}
            handleTimeElapsed={handleTimeElapsed}
          />
        </div>
      </div>
      <div className="footer">
        <Button type="primary" onClick={() => setCompleted(true)}>
          提交
        </Button>
      </div>
    </ChallengeWrapper>
  )
})

export default Challenge
