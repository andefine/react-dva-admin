import * as sightseeingApi from 'proA/api/sightseeing'

export default {
  namespace: 'proA/page1',

  state: {
    sightseeingCars: [],
    sightseeingCarsParam: {},
    manages: [],
  },

  reducers: {
    saveManages(state, { payload: manages }) {
      return { ...state, manages }
    },
    
    saveSightseeingCars(state, { payload }) {
      const { sightseeingCars, sightseeingCarsParam } = payload
      return {
        ...state,
        sightseeingCars,
        sightseeingCarsParam,
      }
    }
  },

  effects: {
    *loadManages(action, { call, put }) {
      const { data: manages } = yield call(sightseeingApi.getManages)
      yield put({ type: 'saveManages', payload: manages })
    },

    *loadSightseeingCars({ payload }, { call, put }) {
      const { scenicId = 1, page = 1, pageSize = 3 } = payload || {}
      const res = yield call(
        sightseeingApi.getSightseeingCars,
        { scenicId, page, pageSize },
      )
      const { data: { data: sightseeingCars, ...sightseeingCarsParam } } = res
      yield put({
        type: 'saveSightseeingCars',
        payload: { sightseeingCars, sightseeingCarsParam }
      })
    },
  },

  subscriptions: {
    setup({ dispatch }) {
      dispatch({ type: 'loadManages' })
    },
  },
}
