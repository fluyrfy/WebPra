import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Home from "./components/weixin/Home.vue"
import Exam01 from "./components/exam/Exam01.vue" //引入自訂義組件 名字定義為Exam01

Vue.use(Router)
export default new Router({
  routes: [
    {path:'/Home',component:Home},
    {path:'/',component:HelloContainer},
    {path:'/Exam01',component:Exam01},
  ]
})
