import { defineConfig } from 'vite'

import { alias, setupPlugins } from './vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
  return {
    resolve: {
      alias: alias
    },
    plugins: [react()]
  }
})
