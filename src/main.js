/**
 * Boot up the Vue instance and wire up the router.
 */
'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import { configRouter } from './route-config';

import './assets/less/index.less';

Vue.use(VueRouter);
Vue.use(require('vue-resource'));

// create router
const router = new VueRouter({
  history: true,
  hashbang: false,
  saveScrollPosition: true
});

// configure router
configRouter(router);

// boostrap the app
const App = Vue.extend(require('./app.vue'));
router.start(App, '#app');

// just for debugging
window.router = router;
