import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/components/HomePage'
import Text2ImageGenerator from '@/components/Text2ImageGenerator'
import Image2ImageGenerator from '@/components/Image2ImageGenerator'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: HomePage },
  { path: '/text-to-image', component: Text2ImageGenerator },
  { path: '/image-to-image', component: Image2ImageGenerator },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  routes
})

export default router