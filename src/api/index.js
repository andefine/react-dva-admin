import request from '@/utils/request'

export const test = () => request({
  url: '/test',
  method: 'GET',
  headers: {
    unionid: 'shfgoisdjf',
  },
  params: {
    id: 1,
  },
})
