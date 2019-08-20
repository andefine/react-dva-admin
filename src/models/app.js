import * as userManageApi from '@/api/userManage'
import { message } from 'antd'

const setAccountToLocalStorage = (username, password) => {
  localStorage.setItem('account', JSON.stringify({ username, password }))
}

const timeout = (delay) => new Promise(resolve => {
  setTimeout(resolve, delay)
})

export default {
 
  namespace: 'app',

  state: {
    // 是否正在登录
    isLogining: false,
    // 是否已登录
    hasLogged: false,
    user: {},
  },

  effects: {
    *test(action, { call }) {
      yield call(timeout, 2000)
    },
    
    *login({ username, password }, { call, put }) {
      yield put({ type: 'loginStart' })
      const res = yield call(userManageApi.login, username, password)
      const { data: user, errorCode, message: errMsg } = res

      if (errorCode !== 200) {
        yield put({ type: 'loginFailed' })
        message.error(errMsg)
        return
      }
      
      setAccountToLocalStorage(username, password)
      yield put({ type: 'loginSuccessed', user })
      message.success(errMsg)
    },
  },

  reducers: {
    loginStart(state) {
      return {
        ...state,
        isLogining: true,
      }
    },
    
    loginSuccessed(state, { user }) {
      return {
        ...state,
        hasLogged: true,
        isLogining: false,
        user,
      }
    },

    loginFailed(state) {
      return {
        ...state,
        isLogining: false,
      }
    },

    logout(state) {
      localStorage.removeItem('account')
      return {
        ...state,
        isLogining: false,
        hasLogged: false,
      }
    },
  },

  subscriptions: {
    setup({ dispatch }) {
      const account = localStorage.getItem('account')
      if (account !== null) {
        console.log('app setup')
        const { username, password } = JSON.parse(account)
        dispatch({ type: 'login', username, password })
      }
    }
  },

}