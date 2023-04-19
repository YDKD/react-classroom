import { memo, useEffect, useState } from 'react'
import ChallengeWrapper from './styled'
import { IVideoListItem } from '@/views/home/types'
import { Button, Popconfirm, message } from 'antd'
import Countdown from '@/components/count-down'

// @ts-ignore
import Quiz from 'react-quiz-component'
import { IAddQuestionScore, IQuestionItem } from '@/api/video/type'
import { addQuestionRecordApi } from '@/api/video'

export const quiz = {
  quizTitle: '',
  quizSynopsis: '',
  nrOfQuestions: '0',
  questions: [],
  appLocale: {
    landingHeaderText: '总共：<questionLength> 题',
    question: '问题：',
    startQuizBtn: '开始答题',
    resultFilterAll: '全部',
    resultPagePoint: '你当前所得分数为 <correctPoints>， 总分为 <totalPoints>.',
    singleSelectionTagText: '单选题',
    multipleSelectionTagText: '多选题',
    pickNumberOfSelection: '选择 <numberOfSelection>',
    resultFilterCorrect: '正确答题',
    resultFilterIncorrect: '错误答题',
    prevQuestionBtn: '上一提',
    nextQuestionBtn: '下一题',
    resultPageHeaderText:
      '你已经完成所有答题. 总共正确题数 <correctIndexLength> / <questionLength>.'
  }
}

interface IProps {
  videoData: IVideoListItem
  logout?: () => void
  questionList: IQuestionItem[]
}

let userCorrectPoints = 0

// 答题模块
const Challenge = memo((props: IProps) => {
  const [consumeTime, setConsumeTime] = useState(0)

  const [completed, setCompleted] = useState(false)

  const handleTimeElapsed = (milliseconds: number) => {
    setConsumeTime(milliseconds)
  }

  const handleQuiz = () => {
    const { videoData, questionList } = props

    quiz.quizTitle = '“' + videoData.title + '“' + ' 答题'
    quiz.quizSynopsis = ''
    quiz.nrOfQuestions = questionList.length + ''
    quiz.questions = questionList.map((item) => {
      return {
        question: item.question,
        questionType: 'text',
        answerSelectionType: item.answerSelectionType,
        answers: JSON.parse(item.options),
        correctAnswer: JSON.parse(item.answer) + '',
        messageForCorrectAnswer: '正确',
        messageForIncorrectAnswer: '错误',
        explanation: item.explanation,
        point: item.point + ''
      }
    }) as any
  }

  // 处理拼装答题信息
  handleQuiz()

  // 每选择一题，就会触发一次
  const onQuestionSubmit = (args1: any) => {
    const { isCorrect, question } = args1
    if (isCorrect) {
      userCorrectPoints += Number(question.point)
    }
  }

  // 答题完成后触发
  const onComplete = (args2: any) => {
    userCorrectPoints = args2.correctPoints
  }

  const submitScore = () => {
    // 清除定时器
    setCompleted(true)

    // 提交答题记录
    const data: IAddQuestionScore = {
      consumeTime: consumeTime,
      quizId: props.questionList.map((item) => item.id).join(','),
      score: userCorrectPoints,
      videoId: props.videoData.id
    }

    console.log('data', data)
    addQuestionRecordApi(data).then((res) => {
      if (res.status === 200) {
        message.success('提交成功')
      } else {
        message.error('提交失败')
      }
    })
  }

  return (
    <ChallengeWrapper>
      <div className="logout">
        <Popconfirm
          title="退出答题将不会保留答题记录，是否继续退出？"
          onConfirm={props.logout}
          okText="确定"
          cancelText="取消"
        >
          <Button type="primary">退出答题</Button>
        </Popconfirm>
        <div className="timer">
          倒计时：
          <Countdown
            minutes={30}
            seconds={0}
            completed={completed}
            handleTimeElapsed={handleTimeElapsed}
          />
        </div>
      </div>
      <div className="question-wrapper">
        {/* 答题组件 */}
        <Quiz
          quiz={quiz}
          onQuestionSubmit={onQuestionSubmit}
          onComplete={onComplete}
        />
      </div>

      <div className="footer">
        <Button type="primary" onClick={submitScore}>
          提交
        </Button>
      </div>
    </ChallengeWrapper>
  )
})

export default Challenge
