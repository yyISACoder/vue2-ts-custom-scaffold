import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/index'
import App from './App.vue'
import router from './routes/index'
import './assets/style/reset.scss'

Vue.use(VueRouter)

new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount('#root')
