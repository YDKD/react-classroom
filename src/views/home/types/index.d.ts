interface IAreaItem {
  id: number
  areaName: string
  createTime: string
}

interface IUserInfo {
  userId: string
  email: string
  phone: string
  avatar: string
  create_time: string
  birth: string
  followed: string
  nick: string
}

interface IVideoListItem {
  id: number
  createTime: string
  flowCount: number
  description: string
  maxScore: number
  tagName: string
  duration: string
  hasFollow: string
  id: number
  thumbnail: string
  title: string
  type: string
  updateTime: string
  url: string
  userId: number
  videoTag: null
  areaName: string
  /**
   * 耗时
   */
  consumeTime: number
}

export { IAreaItem, IUserInfo, IVideoListItem }
