const devBaseURL = 'https://test.qqmmsh.com/mxomsapi'
const prodBaseURL = 'https://test.qqmmsh.com/mxomsapi'

let actualBaseURL = ''
if (process.env.NODE_ENV === 'development') {
  actualBaseURL = devBaseURL
}
if (process.env.NODE_ENV === 'production') {
  // 暂时两个一样
  actualBaseURL = prodBaseURL
}

export const baseURL = actualBaseURL

// key和sourceId配对使用，由后端定义
export const key1 = 'kB50erItBe3ci4R7fsuyWuX4Raq7OGMv' // 对应 sourceId 为 1
export const key2 = 'kB50erIyBe3ci4R7fsuyWuX4Raq7OGMv' // 对应 sourceId 为 2
