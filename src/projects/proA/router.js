const router = {
  name: 'proA',
  path: '/proA',
  models: () => [
    import(/* webpackChunkName: 'proA_SightseeingModel' */ 'proA/pages/Sightseeing/model'),
    import(/* webpackChunkName: 'proA_Page2Model' */ 'proA/pages/Page2/model'),
  ],
  component: () => import(/* webpackChunkName: 'proA' */ 'proA/layout/ProLayout'),
}

export default router
