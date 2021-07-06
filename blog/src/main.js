import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import vuescroll from 'vuescroll'
import animated from 'animate.css'
import loading from '@/components/loading'
import $ from 'jquery'
import api from './api/api'
import App from './App.vue'
import router from './router'
import store from './store'
var wx = require('./utils/common')

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(animated)
Vue.use(loading)
Vue.use(wx)
Vue.use(vuescroll)
Vue.prototype.$vuescrollConfig = {
  bar: {
    background: 'rgba(80,80,80,.85)'
  }
};

Vue.prototype.$api = api
Vue.prototype.$ = $

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
