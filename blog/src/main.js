import Vue from 'vue'
import VueTypedJs from 'vue-typed-js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import animated from 'animate.css'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueTypedJs)
Vue.use(ElementUI)
Vue.use(animated)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')