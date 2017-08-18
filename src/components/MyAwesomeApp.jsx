import React, { Component } from 'react'
import { DatePicker } from 'antd';
// import {Layout,LocaleProvider,Menu,SubMenu} from 'antd';
import { LocaleProvider,Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content,Footer} = Layout;
import esES from 'antd/lib/locale-provider/es_ES';
class MyAwesomeApp extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }
  render() {
    return(
      <LocaleProvider locale={esES}>
          <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: "100vh" }}>
            Content
          </Content>
        </Layout>
      </Layout>
      </LocaleProvider>
    )
  }
}
export default MyAwesomeApp