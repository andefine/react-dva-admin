import React from 'react'
import { router } from 'dva'
import { Layout } from 'antd'

import SiderMenu from '@/components/SiderMenu'

import Sightseeing from 'proA/pages/Sightseeing'
import SightseeingDetail from 'proA/pages/SightseeingDetail'
import Page2 from 'proA/pages/Page2'

const { Switch, Route, Redirect } = router
const { Content } = Layout

const siderMenus = [
  {
    name: 'Sightseeing',
    path: '/Sightseeing',
    component: Sightseeing,
  },
  {
    name: 'page 2',
    path: '/Page2',
    component: Page2,
  },
]

const renderRoutes = (match) => {
  const { path: projPath } = match
  
  return (
    <Switch>
      <Redirect exact from="/proA" to={`${projPath}${siderMenus[0].path}`}></Redirect>
      <Route path={`${projPath}/Sightseeing/:id`} component={SightseeingDetail}></Route>
      {siderMenus.map(({ path, component }, index) => {
        return (
          <Route key={index} path={`${projPath}${path}`} component={component}></Route>
        )
      })}
    </Switch>
  )
}

const ProLayout = ({ match }) => {
  return (
    <Layout>
      <SiderMenu menus={siderMenus}></SiderMenu>
      <Content>
        {renderRoutes(match)}
      </Content>
    </Layout>
  )
}

export default ProLayout
