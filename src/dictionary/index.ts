interface IIndex {
  [key: string]: any
}

/**
 * 视频分区字典
 */
const dic_area = {
  '0': '编程类',
  '1': '考研类',
  '2': '绘画类'
} as IIndex

/**
 * 视频类型字典
 */
const dic_video_type = {
  '0': '原创',
  '1': '转载'
} as IIndex

export { dic_area, dic_video_type }
