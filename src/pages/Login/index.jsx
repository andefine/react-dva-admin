import React from 'react'

import styles from './index.module.scss'

const Login = ({ match, location }) => {
  console.log(match)
  console.log(location)
  return (
    <div className={styles['login']}>
      <span className={styles['login-span']}>登录页</span>
    </div>
  )
}

export default Login
