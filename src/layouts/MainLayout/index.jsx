import React from 'react'
import { Layout } from 'antd'
import { router, dynamic } from 'dva'

import TopHeader from '../TopHeader'
import SiderMenu from '../SiderMenu'
import Login from '@/pages/Login'

import styles from './index.module.scss'

const { Content } = Layout
const { Switch, Route, Redirect } = router

const renderSiderAndContent = ({
  app,
  menus,
  firstLevelIndex,
  secondLevelIndex,
}) => {
  return (
    <Layout className={styles['main']}>
      <SiderMenu
        menus={menus}
        firstLevelIndex={firstLevelIndex}
        secondLevelIndex={secondLevelIndex}
      ></SiderMenu>
      <Content>

        <Switch>
          {
            menus.reduce(
              (resArr, { menusFirstLevel }, indexFirst) => {
                menusFirstLevel.forEach(({ path: pathFirst, menusSecondLevel }, indexSecond) => {
                  const key = `${indexFirst}-${indexSecond}`
                  const to = `${pathFirst}${menusSecondLevel[0].path}`
                  resArr.push(
                    <Redirect key={key} exact from={pathFirst} to={to}></Redirect>
                  )

                  menusSecondLevel.forEach(({ path, component }, indexThird) => {
                    const key = `${indexFirst}-${indexSecond}-${indexThird}`
                    resArr.push(
                      <Route
                        key={key}
                        path={`${pathFirst}${path}`}
                        component={dynamic({
                          app,
                          component,
                        })}
                      ></Route>
                    )
                  })
                })
                return resArr
              },
              []
            )
          }
        </Switch>

      </Content>
    </Layout>
  )
}

const renderMainAreaRoute = (app, menus) => {
  console.log(menus)
  return (
    <Switch>
      <Redirect
        exact
        from='/'
        to={menus[0].menusFirstLevel[0].path}
      ></Redirect>
      {
        menus.reduce(
          (resArr, { menusFirstLevel }, firstLevelIndex) => {
            menusFirstLevel.forEach(({ path }, secondLevelIndex) => {
              resArr.push(
                <Route
                  key={`${firstLevelIndex}-${secondLevelIndex}`}
                  path={path}
                  render={() => {
                    return renderSiderAndContent({
                      app,
                      menus,
                      firstLevelIndex,
                      secondLevelIndex,
                    })
                  }}
                ></Route>
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
      <TopHeader className={styles['header']} menus={menus}></TopHeader>
      {renderMainAreaRoute(app, menus)}
    </Layout>
    // <Switch>
    //   <Route exact path="/" render={() => {
    //     return (
    //     )
    //   }}></Route>
    //   <Route path="/Login" component={Login}></Route>
    // </Switch>
  )
}

export default MainLayout
