import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '',
    name: 'Layout',
    component: () => import('@/components/Layout.vue'),
    children: [

    ]
  }
]
const createRouter = () =>
  new Router({
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return {
          x: 0,
          y: 0
        }
      }
    },
    routes: constantRouterMap
  })

const router = createRouter()

export default router
