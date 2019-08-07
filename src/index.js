import dva from 'dva'
import { createBrowserHistory } from 'history'
import './styles/index.css'

const app = dva({
  history: createBrowserHistory(),
})

app.model(require('./models/app').default)

app.router(require('@/router').default)

app.start('#root')
