import SightseeingModel from 'proA/pages/Sightseeing/model'
import page2Model from 'proA/pages/Page2/model'

const router = {
  name: 'proA',
  path: '/proA',
  models: () => [
    SightseeingModel,
    page2Model,
  ],
  component: () => import(/* webpackChunkName: 'proA' */ 'proA/layout/ProLayout'),
}

export default router
