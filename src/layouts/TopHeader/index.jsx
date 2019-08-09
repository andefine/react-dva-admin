import React from 'react'
import { Layout, Icon } from 'antd'
import { router } from 'dva'

import styles from './index.module.scss'

const { Header } = Layout
const { Link } = router

const renderListItem = (projects) => {
  return projects.map(({ name, path }, index) => {
    return (
      <div key={index} className={styles['list-item']}>
        <Link to={path}>{name}</Link>
      </div>
    )
  })
}

const renderListGroup = (menus) => {
  return menus.map(({ name, projects }, index) => {
    return (
      <div key={index} className={styles['list-group']}>
        <div className={styles['list-title']}>{name}</div>
        {renderListItem(projects)}
      </div>
    )
  })
}

const TopHeader = ({ className = '', menus }) => {
  return (
    <Header className={`${className} ${styles['root']}`}>
      <div className={styles['product']}>
        产品
        <Icon type="down"></Icon>
        <div className={styles['list']}>
          {renderListGroup(menus)}
        </div>
      </div>
    </Header>
  )
}

export default TopHeader
