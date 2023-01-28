/*
 * @Version: 1.0
 * @Autor: YDKD
 * @Date: 2022-11-06 20:47:43
 * @LastEditors: YDKD
 * @LastEditTime: 2023-01-28 16:01:41
 */

import generateEnv from './utils/generateEnv'
generateEnv()

const server = {
  port: 3000,
  hmr: true,
  host: '0.0.0.0',
  proxy: {
    '/airbnb/api': {
      target: process.env.VITE_REQUEST_URL,
      changeOrigin: true,
      rewrite: (p: string) => p.replace(/^\/airbnb\/api/, '/airbnb/api')
    },
    '/api': {
      target: process.env.VITE_LOCAL_REQUEST_URL,
      changeOrigin: true,
      rewrite: (p: string) => p.replace(/^\/api/, '/api')
    }
  }
}

export default server
