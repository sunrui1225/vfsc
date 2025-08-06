import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path';
function resolve(dir) {
  return path.join(__dirname, dir)
}

// https://vite.dev/config/
export default defineConfig({
  server:{
    port:9094
  },
  plugins: [vue()],


  resolve:{
    extensions:[".js",'.vue','.json','jsx'],
    alias:{
      "@":resolve('src')
    }
  }
})