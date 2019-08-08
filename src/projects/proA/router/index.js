const router = {
  name: 'proA',
  path: '/proA',
  component: () => import(/* webpackChunkName: 'proA' */ 'proA/layout/ProLayout'),
}

export default router
