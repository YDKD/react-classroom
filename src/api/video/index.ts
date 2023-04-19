import { localRequest } from '@/service'
import { IAddQuestionScore, IReqVideo, IReqVideoListParams } from './type'

/**
 * @description: 获取视频分类列表
 * @returns
 */
export function getVideoAreaList() {
  return localRequest.request({
    url: '/video/area',
    method: 'GET'
  })
}

/**
 * @description: 获取视频分类列表
 * @returns
 */
export function getVideoByAreaId(params: IReqVideoListParams) {
  return localRequest.request({
    url: '/video/videos',
    method: 'GET',
    params
  })
}

/**
 * @description: 获取视频分类列表
 * @returns
 */
export function getVideoByVideoId(params: IReqVideo) {
  return localRequest.request({
    url: '/video/video-info',
    method: 'GET',
    params
  })
}

/**
 * @description: 视频收藏
 * @returns
 */
export function videoCollectionApi(data: IReqVideo) {
  return localRequest.request({
    url: '/video/video-collection',
    method: 'POST',
    data
  })
}

/**
 * @description: 根据视频ID，获取视频题目ID
 * @returns
 */
export function queryQuestionApi(params: IReqVideo) {
  return localRequest.request({
    url: '/video/question/query',
    method: 'GET',
    params
  })
}

/**
 * @description: 添加答题记录
 * @returns
 */
export function addQuestionRecordApi(data: IAddQuestionScore) {
  return localRequest.request({
    url: '/video/question/score',
    method: 'POST',
    data
  })
}
