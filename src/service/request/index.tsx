import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { FossRequestConfig, FossRequestInterceptor } from './type'

import { REQUEST_LOADING_STATUS, REQUEST_LOADING_TIPS } from '@/global'
import FossLoading from '@/components/foss-loading'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'

const dom = document.createElement('div')
dom.setAttribute('id', 'loading')

const root = createRoot(dom)

class FossRequest {
  requestInstance: AxiosInstance
  interceptors?: FossRequestInterceptor
  showRequestLoading: boolean
  requestCountNum: number

  constructor(config: FossRequestConfig) {
    this.requestInstance = axios.create(config)
    this.interceptors = config.interceptors
    this.showRequestLoading =
      config.showRequestLoading ?? REQUEST_LOADING_STATUS

    this.requestCountNum = 0

    // add global instance interceptor
    this.requestInstance.interceptors.request.use(
      (req) => {
        // console.log('全局实例的请求拦截')

        if (this.showRequestLoading) {
          this.showLoading()
        }

        return req
      },
      (error) => {
        console.log('请求失败', error)
        this.hideLoading()
      }
    )
    this.requestInstance.interceptors.response.use(
      (res) => {
        // console.log('全局实例的响应拦截')

        // remove requestLoading
        this.hideLoading()

        const data = res.data
        const returnCode = data.returnCode
        if (returnCode != '-10001') {
          return res.data
        } else {
          // Error Message Tips
          console.log('Elemessage错误')
        }
      },
      (error) => {
        // remove request loading
        this.hideLoading()

        const errorCode = error.response.status
        // use Router to handle
        switch (errorCode) {
          case 404:
            console.log('404错误')
            break
          case 500:
            console.log('服务内部错误')
            break
          default:
            break
        }
      }
    )

    // add request instance interceptor
    this.requestInstance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.requestInstance.interceptors.response.use(
      this.interceptors?.reponseInterceptor,
      this.interceptors?.reponseInterceptorCatch
    )
  }

  showLoading() {
    if (this.requestCountNum == 0) {
      const dom = document.createElement('div')
      dom.setAttribute('id', 'loading')
      document.body.appendChild(dom)
      root.render(<FossLoading spinning={true} tip={REQUEST_LOADING_TIPS} />)
    }
    this.requestCountNum++
  }

  hideLoading() {
    this.requestCountNum--
    if (this.requestCountNum === 0) {
      document.body.removeChild(document.getElementById('loading')!)
    }
  }

  request<T>(config: FossRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // single request interceptor
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      // handle request loading
      if (config.showRequestLoading == false) {
        this.showRequestLoading = false
      }

      this.requestInstance
        .request<any, T>(config)
        .then((res) => {
          // single reponse interceptor
          if (config.interceptors?.reponseInterceptor) {
            res = config.interceptors.reponseInterceptor(res)
          }

          resolve(res)
        })
        .catch((error) => {
          reject(error)
          // console.log(error)
        })
        .finally(() => {
          // initial request loading
          this.showRequestLoading = REQUEST_LOADING_STATUS
        })
    })
  }
}

export default FossRequest
