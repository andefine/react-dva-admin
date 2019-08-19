import page1Model from 'proA/pages/Page1/model'
import page2Model from 'proA/pages/Page2/model'

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
