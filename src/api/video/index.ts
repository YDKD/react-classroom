import { localRequest } from '@/service'
import { IReqVideoListParams } from './type'

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
