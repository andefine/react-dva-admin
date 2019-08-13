import request from '@/utils/request'

export const getData = () => request({
  url: '/sightseeing/sightseeingList',
  params: {
    sourceId: 2,
    scenicId: 1,
    page: 1,
    pageSize: 20,
  }
})
