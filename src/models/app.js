import * as userManageApi from '@/api/userManage'

export default {
 
  namespace: 'app',

  state: {
    user: {},
  },

  effects: {
    * login({ username: userName, password }, { call, put }) {
      console.log('login effects')
      const { data: user } = yield call(userManageApi.login, userName, password)
      yield put({ type: 'saveUser', user })
    },
  },

  reducers: {
    saveUser(state, { user }) {
      return {
        ...state,
        user,
      }
    }
  },

  subscriptions: {
    
  },

}