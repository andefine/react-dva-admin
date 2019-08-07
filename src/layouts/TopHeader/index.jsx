import React from 'react'
import { Layout, Menu } from 'antd'
import { router } from 'dva'

const { Header } = Layout
const { Link } = router

const renderGroupItem = (menusFirstLevel) => {
  return menusFirstLevel.map(({ name, path }, index) => {
    return (
      <Menu.Item key={index}>
        <Link to={path}>{name}</Link>
      </Menu.Item>
    )
  })
}

const renderGroup = (menus) => {
  return menus.map(({ name, menusFirstLevel }, index) => {
    return (
      <Menu.SubMenu key={index} title={name}>
        {renderGroupItem(menusFirstLevel)}
      </Menu.SubMenu>
    )
  })
}

const TopHeader = ({ className, menus }) => {
  return (
    <Header className={`${className}`}>
      <Menu
        theme="dark"
        mode="horizontal"
      >
        {renderGroup(menus)}
      </Menu>
    </Header>
  )
}

export default TopHeader
