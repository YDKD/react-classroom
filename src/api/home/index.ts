import { baseRequest } from '@/service'
import { IAddUser } from './types'

export function addUser(data: IAddUser) {
  return baseRequest.request({
    url: '/user/login',
    method: 'POST',
    data: data
  })
}
