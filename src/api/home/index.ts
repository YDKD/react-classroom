import { baseRequest } from '@/service'

/**
 * @return {*}
 * @description: 获取高性价比房源信息
 * @author: YDKD
 */
export function getGoodPriceApi() {
  return baseRequest.request({
    url: '/home/goodprice',
    method: 'GET'
  })
}

/**
 * @return {*}
 * @description: 获取高分房源信息
 * @author: YDKD
 */
export function getHighScoreAPi() {
  return baseRequest.request({
    url: '/home/highscore',
    method: 'GET'
  })
}
