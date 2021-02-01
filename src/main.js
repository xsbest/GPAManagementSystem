import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import qs from 'qs'
Vue.prototype.qs = qs

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://81.71.142.81:9000/'
axios.interceptors.response.use(config => {
  config.headers.Authorization = config.data.message
  return config
}, err => {
  return err.response
})
axios.interceptors.request.use(config => {
  // console.log(config)
  // config.headers.Authorization =
  // console.log(config)
  return config
})
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$http = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
