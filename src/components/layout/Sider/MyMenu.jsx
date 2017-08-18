import React from 'react'
import { Layout, Icon,Menu} from 'antd';
const { SubMenu } = Menu;
const { Sider } = Layout;
const MyMenu =()=> (
        <Menu mode="inline" theme="dark">
        <SubMenu key="sub1" title={<span><span className="fa fa-building-o fa-fw fa-2x"></span><span>Hoteles</span></span>}>
          <Menu.Item key="1"><a href="#" className="link">Link</a></Menu.Item>
          <Menu.Item key="2"><a href="#" className="link">Link</a></Menu.Item>
          <Menu.Item key="3"><a href="#" className="link">Link</a></Menu.Item>
          <Menu.Item key="4"><a href="#" className="link">Link</a></Menu.Item>
          <Menu.Item key="5"><a href="#" className="link">Link</a></Menu.Item>
          <Menu.Item key="6"><a href="#" className="link">Link</a></Menu.Item>
          <Menu.Item key="7"><a href="#" className="link">Link</a></Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigtion Dos</span></span>}>
          <Menu.Item key="5"><a href="#" className="link">Link</a></Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
          <Menu.Item key="9"><a href="#" className="link">Link</a></Menu.Item>
          <Menu.Item key="10"><a href="#" className="link">Link</a></Menu.Item>
        </SubMenu>
      </Menu>
);
      
export default MyMenu