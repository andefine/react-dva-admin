import React from 'react'
import { Layout } from 'antd'

import SiderMenu from '@/components/SiderMenu'

import Page1 from 'proA/pages/Page1'
import Page2 from 'proA/pages/Page2'

const { Content } = Layout

const siderMenus = [
  {
    name: 'page 1',
    path: '/Page1',
    component: Page1,
  },
  {
    name: 'page 2',
    path: '/Page2',
    component: Page2,
  },
]

const ProLayout = () => {
  return (
    <Layout>
      <SiderMenu menus={siderMenus}></SiderMenu>
      <Content></Content>
    </Layout>
  )
}

export default ProLayout
