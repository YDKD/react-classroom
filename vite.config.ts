import { defineConfig } from 'vite'

import { alias, generateEnv, setupPlugins, server } from './vite'

export default defineConfig(({ command, mode }) => {
  // generate env
  generateEnv(command)

  return {
    server: {
      port: 3000,
      hmr: true,
      host: '0.0.0.0',
      proxy: {
        '/airbnb': {
          ws: true,
          target: 'http://codercba.com:1888',
          changeOrigin: true,
          rewrite: (p: string) => p.replace(/^\/airbnb/, '/airbnb')
        },
        '/api': {
          target: 'http://localhost:6060',
          changeOrigin: true,
          rewrite: (p: string) => p.replace(/^\/api/, '')
        }
      }
    },
    resolve: {
      alias: alias,
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', 'md']
    },
    plugins: [setupPlugins()]
  }
})
