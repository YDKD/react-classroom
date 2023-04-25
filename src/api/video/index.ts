import { localRequest } from '@/service'
import {
  IAddQuestionScore,
  IReqVideo,
  IReqVideoListParams,
  ISearchVideo
} from './type'

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

/**
 * @param {IVideoQuery} params 查询参数
 * @description: 获取视频列表
 * @author: YDKD
 */
export function searchVideoByKeysApi(params: ISearchVideo) {
  return localRequest.request({
    url: '/video/search',
    method: 'GET',
    params
  })
}

/**
 * @param {IVideoQuery} params 查询参数
 * @description: 获取用户收藏的视频列表
 * @author: YDKD
 */
export function getUserCollectionVideoApi(params?: any) {
  return localRequest.request({
    url: '/video/collection',
    method: 'GET',
    params
  })
}
