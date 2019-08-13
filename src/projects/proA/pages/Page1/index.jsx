import React from 'react'
import { connect } from 'dva'

import styles from './index.module.scss'

class Page1 extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch({ type: 'proA/page1/loadList' })
  }
  
  render() {
    const { className, match, list, listParam } = this.props
    const { path, url } = match

    return (
      <div className={`${className} ${styles['root']}`}>
        Page1 <br/>
        当前 path: {path} <br/>
        当前 url: {url}

        <div className="">
          {list.map(({ id, sightseeingName, carNumber, typeName }) => {
            return (
              <div key={id} className="">
                {`${sightseeingName}    ${carNumber}   ${typeName}`}
              </div>
            )
          })}
          <div className="">{`page: ${listParam.page}, pageSize: ${listParam.pageSize} total: ${listParam.total}`}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ 'proA/page1': page1 }) => {
  const { list, listParam } = page1
  return { list, listParam }
}

export default connect(mapStateToProps)(Page1)
