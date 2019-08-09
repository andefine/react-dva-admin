import request from '@/utils/request'

/**
 * 登录
 * @param {string} userName 账号（必传）
 * @param {string} password 密码（必传）
 */
export const login = (userName, password) => request({
  url: '/userManage/login',
  method: 'post',
  data: { userName, password },
})

/**
 * 查询用户的登录状态
 */
export const checkLoginStatus = () => request({
  url: '/userManage/getManage',
})
