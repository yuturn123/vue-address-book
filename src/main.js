import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false

new Vue({
  router,

  //以上は以下の省略形
  //router: router,
  store,

  render: h => h(App)
}).$mount('#app')
