import React from 'react'
import { router } from 'dva'

import Login from '@/pages/Login'
import MainLayout from '@/layouts/MainLayout'
import proA from 'proA/router'

const { Router, Switch, Route } = router

const menus = [
  {
    name: '智慧管理',
    projects: [
      proA,
    ],
  },
  {
    name: '智慧服务',
    projects: [],
  },
  {
    name: '智慧营销',
    projects: [],
  },
  {
    name: '大数据',
    projects: [],
  },
]

function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/Login" component={Login}></Route>
        <Route path="/" render={() => {
          return <MainLayout app={app} menus={menus}></MainLayout>
        }}></Route>
      </Switch>
    </Router>
  )
}

export default RouterConfig
