// 导入Vue3的createApp函数
import { createApp } from 'vue'
// 导入样式文件
import './style.css'
// 导入Element Plus UI库
import ElementPlus from 'element-plus'
// 导入Element Plus的样式文件
import 'element-plus/dist/index.css'
// 导入Vue应用的主组件
import App from './App.vue'
// 导入Vue路由
import router from './router'
// 导入Element Plus的图标库
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 导入axios库，用于发送HTTP请求
import axios from 'axios'
// 设置axios的默认基础URL
// 创建Vue应用实例
const app = createApp(App)

// 遍历Element Plus的图标库，并将图标组件注册到Vue应用中
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 将axios实例挂载到Vue的全局属性上，这样你就可以在你的Vue组件中通过this.$http来访问axios实例了
app.config.globalProperties.$http = axios
// 使用Vue路由
app.use(router)
// 使用Element Plus UI库
app.use(ElementPlus)
// 将Vue应用挂载到id为'app'的HTML元素上
app.mount('#app')
