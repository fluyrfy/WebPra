import Vue from 'vue'
import App from './App.vue'
import router from './router'
//完整引入所有組件
import MintUI from 'mint-ui'
//單引入mint-ui樣式表
import 'mint-ui/lib/style.css'
//在vue中註冊mint
import './font/iconfont.css'

Vue.use(MintUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
