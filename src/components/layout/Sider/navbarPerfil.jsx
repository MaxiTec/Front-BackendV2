import React from 'react'
import { Menu, Dropdown, Icon } from 'antd';
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3d menu item</a>
    </Menu.Item>
  </Menu>
);
const NavBarPerfil =()=> (
      <div className="siderMenu__profile">
        <div className="siderMenu__profile__image">
          <img src ="http://via.placeholder.com/100x150" />
        </div>
        <div className="siderMenu__navBar">
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
            Hola Juan <Icon type="down" />
          </a>
        </Dropdown>
        </div>
      </div>
);
      
export default NavBarPerfil