import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.prototype.$domain = 'https://localhost:5001'
// Vue.prototype.$domain = 'https://hypertropecore3.azurewebsites.net'

Vue.use(VueRouter)

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  return Router
}
