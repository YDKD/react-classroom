import { testRequest } from '@/service'

/**
 * @return {*}
 * @description: 获取高性价比房源信息
 * @author: YDKD
 */
export function getUser(params: any) {
  return testRequest.request({
    url: '/user/list',
    method: 'GET',
    params
  })
}
