import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './views/Index.vue'
import Index from './views/Details.vue'
import Index from './views/Products.vue'

Vue.use(VueRouter)

const routes = [
  {path:"/",component:Index},
  {path:"/index",component:Index},
  {path:"/details",component:Details},
  {path:"/products",component:Products},
  {path:"/*",component:{template:`<h2 style="color:red text-align:center">404: Not Found</h2>`}},
]

const router = new VueRouter({
  routes
})

export default router
