import React from 'react'
import { Form, Icon, Input, Button, message } from 'antd'
import { connect, router } from 'dva'

import styles from './index.module.scss'

const { Redirect } = router

class Login extends React.Component {
  
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if (err) {
        return
      }

      const { dispatch } = this.props
      const { username, password } = values

      const { errorCode, errMsg } = await dispatch({
        type: 'app/login',
        username,
        password,
      })

      if (errorCode !== 200) {
        return message.error(errMsg)
      }
      message.success(errMsg)
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { isLogining, hasLogged, location } = this.props
    const { from } = location.state || { from: { pathname: '/' } }

    if (hasLogged) {
      return <Redirect to={from}></Redirect>
    }

    return (
      <div className={styles['root']}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              loading={isLogining}
              htmlType="submit"
              className={styles['submit-btn']}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = ({ app }) => {
  const { isLogining, hasLogged } = app
  return { isLogining, hasLogged }
}

export default connect(
  mapStateToProps,
)(Form.create({ name: 'login' })(Login))
