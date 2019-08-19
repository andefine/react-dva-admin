import React from 'react'
import { connect, router } from 'dva'
import { Table, Badge, Dropdown, Menu } from 'antd'

import styles from './index.module.scss'

const { withRouter } = router

class SightseeingModel extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch({ type: 'proA/page1/loadSightseeingCars' })
  }

  handlePaginationChanged = (page, pageSize) => {
    const { dispatch } = this.props
    dispatch({
      type: 'proA/page1/loadSightseeingCars',
      payload: { page, pageSize }
    })
  }

  handleRepair = () => {}

  handleDelete = () => {}
  
  render() {
    const { className = '', sightseeingCars, sightseeingCarsParam } = this.props
    const { page, pageSize, total } = sightseeingCarsParam

    const menu = (
      <Menu className={ styles.sightseeingCar_menuStyle }>
        <div id = { styles.sanjiao_top }></div>
        <Menu.Item>
          <span onClick = { this.handleRepair }> 报修 </span>
        </Menu.Item>
        <Menu.Divider></Menu.Divider>
        <Menu.Item>
          <span onClick = { this.handleDelete }> 删除 </span>
        </Menu.Item>
      </Menu>
    );

    const columns = [
      {
        title: '序号',
        dataIndex: 'id',
      },
      {
        title: '观光车名称',
        dataIndex: 'sightseeingName',
      },
      {
        title: '车辆型号',
        dataIndex: 'typeName',
      },
      {
        title: '车牌号',
        dataIndex: 'carNumber',
      },
      {
        title: '车辆状态',
        dataIndex: 'sightseeingStates',
        render(sightseeingStates) {
          let badgeProps = {}
          switch (sightseeingStates) {
            case 0:
              badgeProps = {
                status: 'success',
                text: '正常',
              }
              break
            case 1:
              badgeProps = {
                status: 'error',
                text: '损坏',
              }
              break
            default:
              badgeProps = {
                status: 'success',
                text: '正常',
              }
              break
          }
          return <Badge {...badgeProps}></Badge>
        },
      },
      {
        title: '运营状态',
        dataIndex: 'operatingState',
      },
      {
        title: '司机名称',
        dataIndex: 'driverName',
        // render: (text, record) => (
        //   <span>
        //     {record.driverName == null ? '— — —' : record.driverName}
        //   </span>
        // ),
        render: (driverName) => (
          <span>
            {driverName === null ? '— — —' : driverName}
          </span>
        ),
      },
      {
        title: '线路名称',
        dataIndex: 'routeName',
        // render: (text, record) => (
        //   <span>
        //     {record.routeName == null ? '— — —' : record.routeName}
        //   </span>
        // ),
      },
      {
        title: '管理人员',
        dataIndex: 'manageId',
        // render: (text, record) => {
        //   let routeList = this.state.adminDataList.map(items => {
        //     // console.log(items);
        //     let manageIdText = []
        //     if (record.manageId === items.id) {
        //       manageIdText.push(items.realName);
        //     }
    
        //     return (
        //       <span key={items.id}>
        //         <span>{manageIdText == null ? '— — —' : manageIdText}</span>
        //       </span>
        //     )
    
        //   })
        //   return routeList;
        // },
        render: (manageId) => {
          const { managesById } = this.props
          return <span>{managesById[manageId] && managesById[manageId].realName}</span>
        },
      },
      {
        title: '操作',
        dataIndex: 'operation',
        // render: (text, record) => (
        //   <span className={ styles.driverManagement_operation }>
        //     <a onClick={() => this.detailsLink(record)}> 详情 </a>
        //     <span className={ styles.driver_empty }></span>
        //     {/* <Dropdown overlay={<MenuMultiplexing/>} trigger={['click']}> */}
        //     <Dropdown overlay={menu} trigger={['click']}>
        //       <a className="ant-dropdown-link" > 更多 </a>
        //     </Dropdown>
        //   </span>
        // ),
        render: (text, record) => (
          <div>
            <span style={{ cursor: 'pointer', color: 'blue' }}>详情</span>
            &nbsp;
            <span className={ styles.driver_empty }></span>
            <Dropdown overlay={menu} trigger={['click']}>
              <span style={{ cursor: 'pointer', color: 'blue' }}>更多</span>
            </Dropdown>
          </div>
        )
      }
    ]

    return (
      <div className={`${className} ${styles['root']}`}>
        <Table
          rowKey={item => item.id}
          columns={columns}
          dataSource={sightseeingCars}
          pagination={{
            current: page || 1,
            total: total || 0,
            pageSize: pageSize || 1,
            showTotal: total => `共 ${total} 条`,
            onChange: this.handlePaginationChanged,
            showSizeChanger: true,
            pageSizeOptions: ['3', '10', '20', '30', '40'],
            onShowSizeChange: this.handlePaginationChanged,
          }}
        ></Table>
      </div>
    )
  }
}

const mapStateToProps = ({ 'proA/page1': page1 }) => {
  const { sightseeingCars, sightseeingCarsParam, manages } = page1

  const managesById = manages.reduce((acc, item) => {
    const { id } = item
    acc[id] = item
    return acc
  }, {})
  
  return { sightseeingCars, sightseeingCarsParam, managesById }
}

// export default connect(mapStateToProps)(SightseeingModel)
export default withRouter(connect(mapStateToProps)(SightseeingModel))
