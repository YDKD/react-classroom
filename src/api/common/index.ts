import { localRequest } from '@/service'
import { IEncryptData } from './type'

export function encryptData(params: IEncryptData) {
  return localRequest.request({
    url: '/common/encrypt',
    method: 'GET',
    params: params
  })
}
