
import Vue from 'vue'
const requireComponent = require.context(
  './components', // 组件所在目录的相对路径
  false, // 是否查询其子目录
  /Base[A-Z]\w+\.(vue|js)$/ // 匹配基础组件文件名的正则表达式
)
requireComponent.keys().forEach(fileName => {
  // 获取文件名
  var names = fileName.split('/').pop().replace(/\.\w+$/, '')// BaseBtn
  // 获取组件配置
  const componentConfig = requireComponent(fileName)
  // 若该组件是通过"export default"导出的，优先使用".default"，
  // 否则退回到使用模块的根
  Vue.component(names, componentConfig.default || componentConfig)
})
