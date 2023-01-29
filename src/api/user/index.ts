import { localRequest } from '@/service'
import { IBaseResponse } from '@/service/request/type'

export function sendEmailCodeApi(data: ISendEmail) {
  return localRequest.request({
    url: '/user/email-code',
    method: 'POST',
    data
  })
}

export function resgiterApi(data: any) {
  return localRequest.request({
    url: '/user/register',
    method: 'POST',
    data
  })
}
