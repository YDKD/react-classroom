interface IReqVideoListParams {
  areaId: number
  categoryId?: number
  size: number
  no: number
}

interface IReqVideo {
  videoId: number
}

interface IQuestionItem {
  id: number
  quizTitle: string
  videoId: number
  question: string
  answerSelectionType: string
  options: string
  answer: string
  explanation: string
  difficulty: string
  point: number
  createTime: string
}

interface IAddQuestionScore {
  videoId: number
  quizId: string
  score: number
  consumeTime: number
}

interface ISearchVideo {
  keyword: string
}

export type {
  IReqVideoListParams,
  IReqVideo,
  IQuestionItem,
  IAddQuestionScore,
  ISearchVideo
}
