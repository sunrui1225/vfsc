import getters from './getters'
import { createStore } from 'vuex'
//
// // https://webpack.js.org/guides/dependency-management/#requirecontext
// const modulesFiles = require.context('./modules', true, /\.js$/)
//
// // you do not need `import app from './modules/app'`
// // it will auto require all vuex module from modules file
// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//   // set './app.js' => 'app'
//   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//   const value = modulesFiles(modulePath)
//   modules[moduleName] = value.default
//   return modules
// }, {})

// 使用 Vite 的 Glob 导入替代 require.context
const modulesFiles = import.meta.glob('./modules/**/*.js', {
  eager: true,  // 立即导入所有模块
  import: 'default'  // 只导入默认导出
})

// 转换模块路径为模块名
const modules = Object.keys(modulesFiles).reduce((modules, modulePath) => {
  // 将 './app.js' 转换为 'app'
  // 将 './user/list.js' 转换为 'user/list'
  const moduleName = modulePath
      .replace(/^\.\/(.*)\.js$/, '$1')  // 移除开头的 './' 和结尾的 '.js'
      .replace(/^modules\//, '')       // 移除开头的 'modules/'（如果需要）

  // 获取模块内容（已经是默认导出）
  const value = modulesFiles[modulePath]

  // 添加到模块对象
  modules[moduleName] = value
  return modules
}, {})


const store = createStore({
  getters,
  modules
})

export default store
