import React from 'react'
import { router } from 'dva'

import MainLayout from '@/layouts/MainLayout'
import proA from 'proA/router'

const { Router } = router

const menus = [
  {
    name: '智慧管理',
    menusFirstLevel: [
      proA,
    ],
  },
  {
    name: '智慧服务',
    menusFirstLevel: [],
  },
  {
    name: '智慧营销',
    menusFirstLevel: [],
  },
  {
    name: '大数据',
    menusFirstLevel: [],
  },
]

function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <MainLayout app={app} menus={menus}></MainLayout>
      {/* <Switch>
        <Redirect exact from="/" to={routesConfig[0].path}></Redirect>

        {
          menuGlobal.map(({ path, models, component }, index) => (
            <Route
              key={index}
              path={path}
              exact
              component={dynamic({
                app,
                models,
                component,
              })}
            ></Route>
          ))
        }
      </Switch> */}
    </Router>
  )
}

export default RouterConfig
