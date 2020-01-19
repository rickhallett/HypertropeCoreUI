const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/workout/create', component: () => import('pages/CreateWorkout.vue') },
      { path: '/workout/show/raw', component: () => import('pages/ShowWorkouts.vue') },
      { path: '/workout/show/grouped', component: () => import('pages/ShowWorkoutsByExercise.vue') },
      { path: '/workout/show/pb', component: () => import('pages/ShowPBs.vue') },
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
