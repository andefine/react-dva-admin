import request from '@/utils/request'

export const test = () => request({
  baseURL: 'mock',
  url: '/api/test',
  method: 'get',
})
