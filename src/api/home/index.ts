import { baseRequest } from '@/service'

export function getGoodPriceApi() {
  return baseRequest.request({
    url: '/home/goodprice',
    method: 'GET'
  })
}
