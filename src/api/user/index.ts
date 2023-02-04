import { localRequest } from '@/service'
import { IBaseResponse } from '@/service/request/type'
import { IRegisterData, ISendEmail, IUserLogin } from './type'

export function sendEmailCodeApi(data: ISendEmail) {
  return localRequest.request({
    url: '/user/email-code',
    method: 'POST',
    data
  })
}

/**
 * @param {IRegisterData} data 注册数据
 * @return {Promise<IBaseResponse>}
 * @description: 用户注册
 * @author: YDKD
 */
export function registerUserApi(data: IRegisterData) {
  return localRequest.request({
    url: '/user/register',
    method: 'POST',
    data
  })
}

/**
 * @param {IRegisterData} data 修改数据
 * @return {Promise<IBaseResponse>}
 * @description: 用户注册
 * @author: YDKD
 */
export function updateUserApi(data: IRegisterData) {
  return localRequest.request({
    url: '/user',
    method: 'PUT',
    data
  })
}

/**
 * @param {IUserLogin} data 注册数据
 * @return {Promise<IBaseResponse>}
 * @description: 用户注册
 * @author: YDKD
 */
export function loginApi(data: IUserLogin) {
  return localRequest.request({
    url: '/user/dts',
    method: 'POST',
    data
  })
}
