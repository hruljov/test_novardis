import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: resolve => require(['../components/Hello.vue'], resolve),
      meta: {
        breadcrumbs: ['Главная']
      }

    }
  ]
})
