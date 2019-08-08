import React from 'react'
import { Layout, Menu } from 'antd'
import { router } from 'dva'

const { Header } = Layout
const { Link } = router

const renderGroupItem = (projects) => {
  return projects.map(({ name, path }, index) => {
    return (
      <Menu.Item key={index}>
        <Link to={path}>{name}</Link>
      </Menu.Item>
    )
  })
}

const renderGroup = (menus) => {
  return menus.map(({ name, projects }, index) => {
    return (
      <Menu.SubMenu key={index} title={name}>
        {renderGroupItem(projects)}
      </Menu.SubMenu>
    )
  })
}

const TopHeader = ({ className, menus }) => {
  return (
    <Header className={`${className}`}>
      <Menu
        mode="horizontal"
      >
        {renderGroup(menus)}
      </Menu>
    </Header>
  )
}

export default TopHeader
