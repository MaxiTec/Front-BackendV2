import React, { Component } from 'react'
// import LayoutContainer from '../components/layout/Layout'
import { Table, Icon, Switch, Input } from 'antd'
const Search = Input.Search
const { Column } = Table
const data = [{
  key: '1',
  firstName: 'John',
  lastName: 'Brown',
  active: 1,
  age: 32,
  address: 'New York No. 1 Lake Park'
}, {
  key: '2',
  firstName: 'Jim',
  lastName: 'Green',
  active: 1,
  age: 42,
  address: 'London No. 1 Lake Park'
}, {
  key: '3',
  firstName: 'Aleh',
  lastName: 'Black',
  active: 1,
  age: 32,
  address: 'Sidney No. 1 Lake Park'
},
{
  key: '4',
  firstName: 'Pablo',
  lastName: 'Black',
  active: 1,
  age: 32,
  address: 'Sidney No. 1 Lake Park'
},
{
  key: '5',
  firstName: 'Vivi',
  lastName: 'Black',
  active: 1,
  age: 32,
  address: 'Sidney No. 1 Lake Park'
},
{
  key: '6',
  firstName: 'Alan',
  lastName: 'Black',
  active: 1,
  age: 32,
  address: 'Sidney No. 1 Lake Park'
},
{
  key: '7',
  firstName: 'Betaza',
  lastName: 'Black',
  active: 1,
  age: 32,
  address: 'Sidney No. 1 Lake Park'
},
{
  key: '8',
  firstName: 'chamu',
  lastName: 'Black',
  active: 0,
  age: 32,
  address: 'Sidney No. 1 Lake Park'
}
]
function onChange (pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter)
}
function onChangeSwitch (checked) {
  console.log(`switch to ${checked}`)
}

class Home extends Component {
  // constructor (...props) {
  //   super(...props)
  // }
  render () {
    return (
      <section className='mainContainer'>
        <div className='titleSection'>
          <h1>Listado de Hoteles</h1>
          <a href='#' className='btn btn-default no-margin'>
            <span className='fa ion-android-add fa-fw fa-lg' />
          </a>
        </div>
        <div className='Buscar'>
          <Search
            placeholder='input search text'
            style={{ width: 200 }}
            onSearch={value => console.log(value)} />
        </div>
        <Table dataSource={data} size='small' bordered={false} onChange={onChange} scroll={{ x: 500 }} pagination={false}>
          <Column
            title='Hoteles'
            dataIndex='firstName'
            key='firstName'
            sorter={(a, b) => a.firstName.localeCompare(b.firstName)}
            filters={
            [
                      { text: 'John', value: 'John' },
                      { text: 'Jim', value: 'Jim' }
            ]
                  }
            onFilter={(value, record) => record.firstName.includes(value)}
                />
          {/* <Column
                title="Age"
                dataIndex="age"
                key="age"
                sorter={(a, b) => a.age - b.age}
              /> */}
          {/* <Column
                title="Address"
                dataIndex="address"
                key="address"
              /> */}
          <Column
            title='Activo'
            dataIndex='active'
            key='active'
            render={(text, record, index) => (
              <span>
                <Switch defaultChecked={false} onChange={onChangeSwitch} checkedChildren={<Icon style={{ fontSize: 12}} type='check' />} unCheckedChildren={<Icon style={{ fontSize: 12}} type='cross' />} />
              </span>
                )}
              />
          <Column
            title=''
            key='action'
            width={60}
            render={(text, record, index) => (
              <span>
                <a href={index} className='btn btn-default'>
                  <span className='fa lnr lnr-pencil fa-fw fa-lg' />
                </a>
              </span>
                )}
              />
        </Table>
      </section>
    )
  }
}
export default Home
