import React from 'react'
import { router, connect } from 'dva'
import { Spin } from 'antd'

const { Route, Redirect } = router

const PrivateRoute = ({
  dispatch,
  hasLogged,
  isLogining,
  component: Component,
  ...rest
}) => {
  if (isLogining) {
    console.log('isLogining')
    return (
      <div className="">
        <Spin></Spin>
      </div>
    )
  }
  
  let isAuthed = false
  if (!hasLogged) {
    const account = JSON.parse(localStorage.getItem('account'))
    
    if (account) {
      const { username, password } = account
      dispatch({ type: 'app/login', username, password })
    }
  }

  if (hasLogged) {
    isAuthed = true
  }
  
  return (
    <Route {...rest} render={(props) => {
      return (
        isAuthed ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to="/Login"></Redirect>
        )
      )
    }}></Route>
  )
}

const mapStateToProps = ({ app }) => {
  return {
    hasLogged: app.hasLogged,
    isLogining: app.isLogining,
  }
}

export default connect(mapStateToProps)(PrivateRoute)
