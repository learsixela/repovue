import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  data:{
    msjGlobal:'Hola',
  },
  msjGlobal:'Hola3',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
