import page1Model from 'proA/models/page1'
import page2Model from 'proA/models/page2'

const router = {
  name: 'proA',
  path: '/proA',
  models: () => [
    page1Model,
    page2Model,
  ],
  component: () => import(/* webpackChunkName: 'proA' */ 'proA/layout/ProLayout'),
}

export default router
