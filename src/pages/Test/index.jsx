import React from 'react'
import { connect } from 'dva'

class Test extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    const res = dispatch({
      type: 'proA_page2/test'
    })
    console.log('Test', res)
  }
  
  render() {
    return (
      <div className="">Test</div>
    )
  }
}

export default connect()(Test)
