import dva from 'dva'
import { createBrowserHistory } from 'history'
import { createLogger } from 'redux-logger'

import './styles/index.css'

// 这样可以仅在开发环境中引入 mockjs 依赖，生成环境将不会依赖 mockjs。mock 就只在这里引入，其他地方不用引入。
(process.env.NODE_ENV === 'development') && require('/mock')

const app = dva({
  history: createBrowserHistory(),
})

if (process.env.NODE_ENV === 'development') {
  app.use({
    onAction: createLogger(),
  })
}

app.model(require('./models/app').default)

app.router(require('@/router').default)

app.start('#root')