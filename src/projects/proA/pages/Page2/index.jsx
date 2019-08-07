import React from 'react'

import styles from './index.module.scss'

const Page2 = ({ className }) => {
  return (
    <div className={`${className} ${styles['root']}`}>
      Page2
    </div>
  )
}

export default Page2
