import React from 'react'
import {Icon,Menu} from 'antd';
import MyMenu from './MyMenu'
import Brand from './brand'
import NavBarPerfil from './navbarPerfil'
const { SubMenu } = Menu;
const SiderMenu =()=> (
      <div className="siderMenu">
        <Brand/>
        <NavBarPerfil/>
        <MyMenu/>
      </div>
);
      
export default SiderMenu