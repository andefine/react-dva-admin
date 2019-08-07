import React from 'react'
import { Layout, Menu } from 'antd'
import { router } from 'dva'

const { Sider } = Layout
const { Link } = router

const SiderMenu = ({ menus, firstLevelIndex, secondLevelIndex }) => {
  const projectRouter = menus[firstLevelIndex].menusFirstLevel[secondLevelIndex]
  const { path: pathFirst, menusSecondLevel } = projectRouter

  return (
    <Sider>
      <Menu
        mode="inline"
        theme="dark"
      >
        {
          menusSecondLevel.map(({ name, path }, index) => {
            return (
              <Menu.Item key={index}>
                <Link to={`${pathFirst}${path}`}>{name}</Link>
              </Menu.Item>
            )
          })
        }
      </Menu>
    </Sider>
  )
}

export default SiderMenu
