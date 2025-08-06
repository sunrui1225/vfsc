import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import path from 'path';
function resolve(dir) {
  return path.join(__dirname, dir)
}

// https://vite.dev/config/
export default defineConfig({
  server:{
    port:9094
  },
  plugins: [vue(),vueJsx()],
  // esbuild: {
  //   loader: 'jsx',
  //   include: [
  //     'src/**/*.js',
  //     'src/**/*.vue',
  //     'src/**/*.jsx',
  //     'node_modules/**/*.js'
  //   ]
  // },

  resolve:{
    extensions:[".js",'.vue','.json','jsx'],
    alias:{
      "@":resolve('src')
    }
  }
})