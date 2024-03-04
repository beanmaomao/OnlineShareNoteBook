// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
import {createRouter,createWebHistory} from 'vue-router'
// 引入一个一个可能要呈现组件
import Show from '@/components/Show.vue'
import Write from '@/components/Write.vue'
import Read from '@/components/Read.vue'
import Login from '@/components/Login.vue'
// 第二步：创建路由器
const router = createRouter({
  history:createWebHistory(), //路由器的工作模式（稍后讲解）
  routes:[ //一个一个的路由规则
    {
      path:'/show',
      component:Show
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/write',
      component:Write
    },
    {
      path:'/read',
      component:Read
    },
  ]
})

// 暴露出去router
export default router