export function configRouter (router) {
  router.map({
    '/home': {
      component: require('./views/home.vue')
    },
    '/about': {
      component: require('./views/about.vue')
    },
    '/news/:id': {
      name: 'news',
      component: require('./views/news.vue')
    },
    '/contact': {
      component: require('./views/contact.vue')
    },
    '/hire': {
      component: require('./views/hire.vue')
    },
    '*': {
      component: require('./views/not-found.vue')
    }
  });

  // redirect
  router.redirect({
    '/': '/home'
  });

  // global before
  // 3 options:
  // 1. return a boolean
  // 2. return a Promise that resolves to a boolean
  // 3. call transition.next() or transition.abort()
  router.beforeEach((transition) => {
      if (transition.to.path === '/forbidden') {
      router.app.authenticating = true;
      setTimeout(() => {
        router.app.authenticating = false;
      alert('this route is forbidden by a global before hook');
      transition.abort();
    }, 3000);
    } else {
      transition.next();
    }
  });
}
