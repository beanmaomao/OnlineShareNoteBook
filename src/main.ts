// 引入createApp用于创建应用
import {createApp} from 'vue'
// 引入App根组件
import App from './App.vue'
// 引入路由器
import router from './router'
//子子 引入show,write,read组件
import Show from './components/Show.vue'
import Write from './components/Write.vue'
import Read from './components/Read.vue'
//全局引入axios
import axios from 'axios'
// 创建一个应用
const app = createApp(App)
 // 使用路由器并挂载整个应用到app容器中
app.use(router).mount('#app')
//创建全局挂载对象
app.config.globalProperties.$axios=axios

