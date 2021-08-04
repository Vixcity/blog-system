import Vue from 'vue'

// elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'

// 滚动插件
import vuescroll from 'vuescroll'

// 动画css
import animated from 'animate.css'

// loading效果
import loading from '@/components/loading'

// 看图插件
import lightGallery from 'lightgallery.js'
import 'lightgallery.js/dist/css/lightgallery.min.css'

// 富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme
import Emoji from 'quill-emoji'
import 'quill-emoji/dist/quill-emoji.css'

// Jquery
import $ from 'jquery'
import api from './api/api'
import App from './App.vue'
import router from './router'
import store from './store'
var wx = require('./utils/common')

Vue.config.productionTip = false
// 图片查看插件
Vue.use(lightGallery)
Vue.use(ElementUI)
Vue.use(animated)
Vue.use(loading)
Vue.use(wx)
// 滚动条插件
Vue.use(vuescroll)
// 富文本编辑器插件
Vue.use(VueQuillEditor)
Vue.use(Emoji)

Vue.prototype.$vuescrollConfig = {
  bar: {
    background: 'rgba(80,80,80,.85)'
  }
};

Vue.prototype.$api = api
Vue.prototype.$ = $

// 引入layui
Vue.prototype.$layui = window.layui

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
