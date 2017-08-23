import React, { Component } from 'react'
// import LayoutContainer from '../components/layout/Layout'
import { Layout } from 'antd'
import BreadCrumbs from '../components/Breadcrumbs/'
import Footer from '../components/layout/Footer'
import SiderMenu from '../components/layout/Sider/index'
// import Home from '../pages/Home'
import EditarHotel from '../pages/editarHoteles'
const { Content, Sider } = Layout
class App extends Component {
  // constructor (props) {
  //   super(props)
  // }
  render () {
    return (
      <Layout className='layout'>
        <Layout>
          <Sider
            width='280'
            className='layout__sidebar'
            breakpoint='sm'collapsedWidth='0'
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type)
            }}>
            <SiderMenu />
          </Sider>
          <Layout>
            <BreadCrumbs />
            <Content className='layout__content container-fluid'>
              <EditarHotel />
            </Content>
          </Layout>
        </Layout>
        <Footer />
      </Layout>
    )
  }
}
export default App
