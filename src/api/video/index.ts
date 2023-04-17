import { localRequest } from '@/service'
import { IReqVideo, IReqVideoListParams } from './type'

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
    method: 'POSt',
    data
  })
}
