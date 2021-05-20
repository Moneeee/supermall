import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()/* 默认$bus没有值，所以new 一个实例 */
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
