const ifNotAuthenticated = (to, from, next) => {
  if (!sessionStorage.getItem('jToken')) {
    next()
    return
  }

  next('/app')
}

const ifAuthenticated = (to, from, next) => {
  if (sessionStorage.getItem('jToken')) {
    next()
    return
  }

  next('/login')
}

const redirectToApp = (to, from, next) => {
  next('/app')
}

const routes = [
  {
    path: '/',
    beforeEnter: redirectToApp
  },
  {
    path: '/app',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue'), beforeEnter: ifAuthenticated },
      { path: '/workout/create', component: () => import('pages/CreateWorkout.vue'), beforeEnter: ifAuthenticated },
      { path: '/workout/show/raw', component: () => import('pages/ShowWorkouts.vue'), beforeEnter: ifAuthenticated },
      { path: '/workout/show/grouped', component: () => import('pages/ShowWorkoutsByExercise.vue'), beforeEnter: ifAuthenticated },
      { path: '/workout/show/pb', component: () => import('pages/ShowPBs.vue'), beforeEnter: ifAuthenticated },
      { path: '/quote/add', component: () => import('pages/AddQuote.vue') },
      { path: '/support/contact', component: () => import('pages/Contact.vue'), beforeEnter: ifAuthenticated },
      { path: '/login', component: () => import('pages/Login.vue'), beforeEnter: ifNotAuthenticated },
      { path: '/register', component: () => import('pages/Register.vue'), beforeEnter: ifNotAuthenticated },
    ]
  },
  {
    path: '/noview',
    component: () => import('layouts/NoLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Warn.vue')}
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
