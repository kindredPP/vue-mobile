import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../components/Home.vue'], resolve),
      name:"Home"
    },
    {
      path: '/search',
      component: resolve => require(['../components/Search.vue'], resolve),
      name:"Search"
    }
  ]
})