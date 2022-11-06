import { defineConfig } from 'vite'

import { alias, generateEnv, setupPlugins, server } from './vite'

export default defineConfig(({ command, mode }) => {
  // generate env
  generateEnv(command)

  return {
    server: server,
    resolve: {
      alias: alias,
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', 'md']
    },
    plugins: [setupPlugins()]
  }
})
