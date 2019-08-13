import * as userManageApi from '@/api/userManage'

const localStoreAccount = (username, password) => {
  localStorage.setItem('account', JSON.stringify({ username, password }))
}

export default {
 
  namespace: 'app',

  state: {
    hasLogged: false,
    // 是否正在登录
    isLogining: false,
    user: {},
    errMsg: '',
  },

  effects: {
    * login({ username: userName, password }, { call, put }) {
      yield put({ type: 'loginStart' })
      const res = yield call(userManageApi.login, userName, password)
      const { data: user, errorCode, message } = res

      if (errorCode !== 200) {
        yield put({ type: 'loginFailed', errMsg: message })
        return
      }
      
      localStoreAccount(userName, password)
      yield put({ type: 'loginSuccessed', user })
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
        errMsg: '',
      }
    },

    loginFailed(state, { errMsg }) {
      return {
        ...state,
        isLogining: false,
        errMsg,
      }
    }
  },

  subscriptions: {
    
  },

}