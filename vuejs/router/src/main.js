import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
// 生产提示
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
