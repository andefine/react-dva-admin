import * as api from 'proA/api'

export default {
  namespace: 'proA/page1',
  state: {
    name: 'page1',
    list: [],
    listParam: {},
  },
  reducers: {
    saveList(state, { list, listParam }) {
      return {
        ...state,
        list,
        listParam,
      }
    }
  },
  effects: {
    * loadList(param, { call, put }) {
      const res = yield call(api.getData)
      const { data: { data: list, ...listParam } } = res
      yield put({ type: 'saveList', list, listParam })
    }
  },
  subscriptions: {},
}
