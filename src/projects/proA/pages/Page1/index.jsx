import React from 'react'

import styles from './index.module.scss'

const Page1 = ({
  className = '',
  match,
}) => {
  const { path, url } = match
  
  return (
    <div className={`${className} ${styles['root']}`}>
      Page1 <br/>
      当前 path: {path} <br/>
      当前 url: {url}
    </div>
  )
}

export default Page1
