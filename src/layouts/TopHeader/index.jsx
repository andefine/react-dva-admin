import React, { Component } from 'react'
import { Layout, Icon, Menu } from 'antd'
import { router, connect } from 'dva'

import styles from './index.module.scss'

const { Header } = Layout
const { Link } = router

class TopHeader extends Component {
  handleClickMenu = (e) => {
    const { dispatch } = this.props
    switch (e.key) {
      case 'logout':
        dispatch({ type: 'app/logout' })
        break
    
      default:
        break
    }
  }
  
  renderListItem(projects) {
    return projects.map(({ name, path }, index) => {
      return (
        <div key={index} className={styles['list-item']}>
          <Link to={path}>{name}</Link>
        </div>
      )
    })
  }
  
  renderListGroup(menus) {
    return menus.map(({ name, projects }, index) => {
      return (
        <div key={index} className={styles['list-group']}>
          <div className={styles['list-title']}>{name}</div>
          {this.renderListItem(projects)}
        </div>
      )
    })
  }
  
  render() {
    const { className = '', menus, user } = this.props
    
    return (
      <Header className={`${className} ${styles['root']}`}>
        <div className={styles['product']}>
          产品
          <Icon type="down"></Icon>
          <div className={styles['list']}>
            {this.renderListGroup(menus)}
          </div>
        </div>

        <Menu mode="horizontal" onClick={this.handleClickMenu}>
          <Menu.SubMenu
            title={user.manage && user.manage.userName}
          >
            <Menu.Item key="logout">退出登录</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Header>
    )
  }
}

// const renderListItem = (projects) => {
  
// }

// const renderListGroup = (menus) => {
  
// }

// const TopHeader = ({ className = '', menus, user }) => {
//   return (
    
//   )
// }

const mapStateToProps = ({ app }) => {
  const { user } = app
  return { user }
}

export default connect(mapStateToProps)(TopHeader)
