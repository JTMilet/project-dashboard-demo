/*
 * @Author: 杜康 banshee1115@163.com
 * @Date: 2023-10-09 10:41:36
 * @LastEditors: 杜康 banshee1115@163.com
 * @LastEditTime: 2023-10-09 10:49:41
 * @FilePath: /JinMa-demo/src/router/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'Home',
    component: () => import('../views/home/Index')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
