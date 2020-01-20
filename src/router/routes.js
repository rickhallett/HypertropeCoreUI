const routes = [
  {
    path: '/app',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/workout/create', component: () => import('pages/CreateWorkout.vue') },
      { path: '/workout/show/raw', component: () => import('pages/ShowWorkouts.vue') },
      { path: '/workout/show/grouped', component: () => import('pages/ShowWorkoutsByExercise.vue') },
      { path: '/workout/show/pb', component: () => import('pages/ShowPBs.vue') },
      { path: '/quote/add', component: () => import('pages/AddQuote.vue') },
      { path: '/support/contact', component: () => import('pages/Contact.vue') },
      { path: '/login', component: () => import('pages/Login.vue') },
      { path: '/register', component: () => import('pages/Register.vue') },
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
