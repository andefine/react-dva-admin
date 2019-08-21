import * as userManageApi from '@/api/userManage'

const setAccountToLocalStorage = (username, password) => {
  localStorage.setItem('account', JSON.stringify({ username, password }))
}

const namespace = 'app'

const state = {
  // 是否正在登录
  isLogining: false,
  // 是否已登录。
  hasLogged: false,
  user: {},
}

const effects = {
  *login({ username, password }, { call, put, ...rest }) {
    yield put({ type: 'loginStart' })
    const res = yield call(userManageApi.login, username, password)
    const { data: user, errorCode, message: errMsg } = res

    if (errorCode !== 200) {
      yield put({ type: 'loginFailed' })
      return { errorCode, errMsg }
    }
    
    setAccountToLocalStorage(username, password)
    yield put({ type: 'loginSuccessed', user })
    return { errorCode, errMsg }
  },
}

const reducers = {
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
      user: {},
    }
  },
}

const subscriptions = {
  setup({ dispatch }) {
    const account = localStorage.getItem('account')
    if (account !== null) {
      const { username, password } = JSON.parse(account)
      dispatch({ type: 'login', username, password })
    }
  }
}

export default {
  namespace,
  state,
  reducers,
  effects,
  subscriptions,
}
