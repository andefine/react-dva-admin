import React from 'react'
import { Layout } from 'antd'
import { router, dynamic } from 'dva'

import TopHeader from '../TopHeader'

import styles from './index.module.scss'

const { Switch, Route } = router

const renderProjectRoutes = (app, menus) => {
  return (
    <Switch>
      {
        menus.reduce(
          (resArr, { projects }, titleIndex) => {
            projects.forEach(({ path, models, component }, proIndex) => {
              const key = `${titleIndex}-${proIndex}`
              console.log(models)
              resArr.push(
                <Route key={key} path={path} component={dynamic({
                  app,
                  models,
                  component,
                })}></Route>
              )
            })
            return resArr
          },
          []
        )
      }
    </Switch>
  )
}

const MainLayout = ({ app, menus }) => {
  return (
    <Layout className={styles['root']}>
      <TopHeader menus={menus}></TopHeader>
      {renderProjectRoutes(app, menus)}
    </Layout>
  )
}

export default MainLayout
