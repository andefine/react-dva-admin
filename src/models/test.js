// import * as sightseeingApi from 'proA/api/sightseeing'
// import { saga } from 'dva'

// const { delay } = saga

// const namespace = 'test'

// const state = {
//   sightseeingCars: [],
//   sightseeingCarsParam: {},
//   test: '1'
// }

// const reducers = {
//   saveSightseeingCars(state, { payload }) {
//     const { sightseeingCars, sightseeingCarsParam } = payload
//     return {
//       ...state,
//       sightseeingCars,
//       sightseeingCarsParam,
//     }
//   },

//   changeTest(state, { payload: test }) {
//     return { ...state, test }
//   }
// }

// const effects = {
//   *loadSightseeingCars({ payload }, { call, put }) {
//     const res = yield call(sightseeingApi.getSightseeingCars)
//     const { data: { data: sightseeingCars, ...sightseeingCarsParam } } = res

//     yield put({
//       type: 'saveSightseeingCars',
//       payload: { sightseeingCars, sightseeingCarsParam },
//     })
//   },

//   *timeout(action, { call, put }) {
//     yield call(delay, 2000)
//     yield put({
//       type: 'changeTest',
//       payload: '2'
//     })
//   }
// }

// const subscriptions = {

// }

// export default {
//   namespace,
//   state,
//   effects,
//   reducers,
//   subscriptions,
// }
