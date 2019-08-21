import React from 'react'
import { router } from 'dva'

import Login from '@/pages/Login'
import Test from '@/pages/Test'
import MainLayout from '@/layout/MainLayout'
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

const RouterConfig = ({ history, app }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/Test" component={Test}></Route>
        <Route path="/Login" component={Login}></Route>
        <Route path="/" render={() => {
          return <MainLayout app={app} menus={menus}></MainLayout>
        }}></Route>
      </Switch>
    </Router>
  )
}

export default RouterConfig
