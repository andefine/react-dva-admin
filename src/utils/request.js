/*
 * @Description: 请求方法。
 使用方式：
 request({
   baseURL: 'xxx', // 可选，默认项在 '@/src/config' 文件中，不同环境值也会不同
   url: 'xxx', // 请求路径，必选
   method: 'xxx', // 请求方法，可选，默认 'GET'。我们这里基本上都是 'GET' 或者 'POST'。为 GET 时，需要传入 params ，为 POST 时，需要传入 data。
   params: {}, // 请求地址后面会跟上的参数，可选。对应 GET 方法。
   data: {}, // 请求体中的参数，可选。对应 POST 方法。
   // 其他参数请看 axios 文档。
 })
 * @Date: 2019-08-08 14:52:07
 * @LastEditTime: 2019-08-08 19:06:44
 */
import axios from 'axios'
import { baseURL, key1, key2 } from '@/config'
import md5Encryption from './md5Encryption'

/**
 * 根据不同的 sourceId 选择对应的 key
 * @param {number} sourceId 1 或者 2
 * @returns {string} key1 或者 key2
 */
const chooseKey = (sourceId) => {
  switch (sourceId) {
    case 1:
      return key1
    case 2:
      return key2
  
    default:
      return key1
  }
}

/**
 * 根据传入的 params 或者 data 重新生成对应的 params 或者 data。
 * 因为我们使用时可能会用到 GET 或者 POST 方法，两者的属性中有一个 sourceId 或者没有，
 * 没有的话就默认为 1, 根据这个 sourceId 来进行参数的签名。添加一个 signed 值。
 * 样例： { a: 1, b: 'str' } -> { a: 1, b: 'str', sourceId: 1, signed: 'xxx'}
 * @param {Object} obj 
 */
const regenerateParamsOrData = (obj) => {
  const { sourceId = 1 } = obj
  const newObj = { ...params, sourceId }

  const key = chooseKey(sourceId)
  const signed = md5Encryption(newObj, key)

  return { ...obj, signed }
}

/**
 * 对传入的参数进行签名。
 * 可针对 GET 和 POST 方法，做相应处理。
 * @param {Object} param 传给 axois 的参数
 */
const signConfig = ({
  method = 'GET',
  params = {},
  data = {},
  ...restConfig
} = {}) => {
  method = method.toUpperCase()

  let newParams = {}
  let newData = {}

  if (method === 'GET') {
    newParams = regenerateParamsOrData(params)
  }

  if (method === 'POST') {
    newData = regenerateParamsOrData(data)
  }

  return {
    ...restConfig,
    method,
    params: newParams,
    data: newData,
  }
}

// 这里本应该使用 request 来命名，但是在拦截器中会使用到 request 属性，以免混淆，直接使用了 instance。其他地方引入时可命名为 request
const instance = axios.create({
  baseURL,
})

// Add a request interceptor
instance.interceptors.request.use(config => {
  // Do something before request is sent
  const signedConfig = signConfig(config)
  return signedConfig
}, error => {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
instance.interceptors.response.use(response => {
  // Do something with response data
  if (response.status === 200) {
    return response.data
  }

  return response
}, error => {
  // Do something with response error
  return Promise.reject(error)
})

export default instance
