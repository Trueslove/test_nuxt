import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5fea8560 = () => interopDefault(import('../pages/fun.vue' /* webpackChunkName: "pages/fun" */))
const _b6f05e0e = () => interopDefault(import('../pages/more-fun/index.vue' /* webpackChunkName: "pages/more-fun/index" */))
const _41dc30f3 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _9cd261d6 = () => interopDefault(import('../pages/_test/index.vue' /* webpackChunkName: "pages/_test/index" */))
const _a03fa466 = () => interopDefault(import('../pages/_test/_slug.vue' /* webpackChunkName: "pages/_test/_slug" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/fun",
    component: _5fea8560,
    name: "fun"
  }, {
    path: "/more-fun",
    component: _b6f05e0e,
    name: "more-fun"
  }, {
    path: "/",
    component: _41dc30f3,
    name: "index"
  }, {
    path: "/:test",
    component: _9cd261d6,
    name: "test"
  }, {
    path: "/:test/:slug",
    component: _a03fa466,
    name: "test-slug"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
