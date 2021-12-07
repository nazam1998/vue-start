import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Pricing',
    component: ()=> import('@/components/Pricing.vue')
  },
  {
    path: '/article',
    name: 'Article',
    component: () => import('@/components/Article.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: ()=> import('@/components/SignUp.vue')
  },
  {
    path: '/testimonial',
    name: 'Testimonial',
    component: ()=> import('@/components/Testimonial.vue')
  },
  {
    path: '/rps',
    name: 'RockPaperScissors',
    component: ()=> import('@/components/RockPaperScissors.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: ()=> import('@/components/NotFound.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
