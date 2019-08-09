import dva from 'dva'
import { createBrowserHistory } from 'history'

import * as userManageApi from '@/api/userManage'
import './styles/index.css'

// 这样可以仅在开发环境中引入 mockjs 依赖，生成环境将不会依赖 mockjs。mock 就只在这里引入，其他地方不用引入。
(process.env.NODE_ENV === 'development') && require('@/mock')

// userManageApi.login('13712345678', '1234')
// userManageApi.checkLoginStatus()

const app = dva({
  history: createBrowserHistory(),
})

app.model(require('./models/app').default)

app.router(require('@/router').default)

app.start('#root')
