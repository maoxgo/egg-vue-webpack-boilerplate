import Vue from 'vue';

import VueRouter from 'vue-router';

import ListView from './list';

Vue.use(VueRouter);

export default function createRouter() {
  return new VueRouter({
    mode: 'history',
    base: '/spa',
    routes: [
      {
        path: '/',
        component: ListView
      },
      {
        path: '/list',
        component: ListView
      },
      {
        path: '/detail/:id',
        component: () => import('./detail')
      }
    ]
  });
}

