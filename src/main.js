/*
 * @Author: 杜康 banshee1115@163.com
 * @Date: 2023-10-09 10:41:36
 * @LastEditors: 杜康 banshee1115@163.com
 * @LastEditTime: 2023-10-09 14:57:26
 * @FilePath: /JinMa-demo/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'animate.css';
import './main.css'

Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'small', zIndex: 3000 })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
