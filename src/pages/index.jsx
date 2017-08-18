import React, { Component } from 'react'
// import LayoutContainer from '../components/layout/Layout'
import { Layout, Icon,Menu,Button} from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import BreadCrumbs from '../components/Breadcrumbs/'
import Footer from '../components/layout/Footer'
import SiderMenu from '../components/layout/Sider/index'
import Home from '../pages/Home'
class App extends Component {
  render() {
    return(
        <Layout className="layout">
          <Layout>
            <Sider 
            width="280" 
            className="layout__sidebar" 
            breakpoint="sm"collapsedWidth="0"
            onCollapse={(collapsed, type) => { console.log(collapsed, type);
            }}>
            <SiderMenu/>
            </Sider>
            <Layout>
            <BreadCrumbs/>
            <Content className="layout__content container-fluid">
                <Home/>
            </Content>
            </Layout>
          </Layout>
          <Footer/>
        </Layout>
    )
  }
}
export default App