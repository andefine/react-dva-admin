import React from 'react'
import { Layout, Menu } from 'antd'
import { router } from 'dva'

const { Sider } = Layout
const { Link, withRouter } = router

const SiderMenu = ({ menus, match }) => {
  const { path: proPath } = match

  return (
    <Sider>
      <Menu
        mode="inline"
        theme="dark"
      >
        {
          menus.map(({ name, path }, index) => {
            return (
              <Menu.Item key={index}>
                <Link to={`${proPath}${path}`}>{name}</Link>
              </Menu.Item>
            )
          })
        }
      </Menu>
    </Sider>
  )
}

export default withRouter(SiderMenu)
