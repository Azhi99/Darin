import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4c7a9e0a = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _77d83a10 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _35a26b3a = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _0506648b = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _d0dfd656 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _96b8b89e = () => interopDefault(import('..\\pages\\products.vue' /* webpackChunkName: "pages/products" */))
const _92d8070e = () => interopDefault(import('..\\pages\\dashboard\\items.vue' /* webpackChunkName: "pages/dashboard/items" */))
const _62a3f0bc = () => interopDefault(import('..\\pages\\dashboard\\login.vue' /* webpackChunkName: "pages/dashboard/login" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _4c7a9e0a,
    name: "404___en"
  }, {
    path: "/about",
    component: _77d83a10,
    name: "about___en"
  }, {
    path: "/contact",
    component: _35a26b3a,
    name: "contact___en"
  }, {
    path: "/dashboard",
    component: _0506648b,
    name: "dashboard___en"
  }, {
    path: "/ku",
    component: _d0dfd656,
    name: "index___ku"
  }, {
    path: "/products",
    component: _96b8b89e,
    name: "products___en"
  }, {
    path: "/dashboard/items",
    component: _92d8070e,
    name: "dashboard-items___en"
  }, {
    path: "/dashboard/login",
    component: _62a3f0bc,
    name: "dashboard-login___en"
  }, {
    path: "/ku/404",
    component: _4c7a9e0a,
    name: "404___ku"
  }, {
    path: "/ku/about",
    component: _77d83a10,
    name: "about___ku"
  }, {
    path: "/ku/contact",
    component: _35a26b3a,
    name: "contact___ku"
  }, {
    path: "/ku/dashboard",
    component: _0506648b,
    name: "dashboard___ku"
  }, {
    path: "/ku/products",
    component: _96b8b89e,
    name: "products___ku"
  }, {
    path: "/ku/dashboard/items",
    component: _92d8070e,
    name: "dashboard-items___ku"
  }, {
    path: "/ku/dashboard/login",
    component: _62a3f0bc,
    name: "dashboard-login___ku"
  }, {
    path: "/",
    component: _d0dfd656,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
