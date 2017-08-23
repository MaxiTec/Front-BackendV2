import React from 'react'
import {Menu} from 'antd'
const { SubMenu } = Menu
const MyMenu = () => (
  <Menu mode='inline' theme='dark' className='menu'>
    <SubMenu key='sub1' title={<span className='menu__subtitle'><span className='fa fa-building-o fa-fw fa-2x' /><span>Hoteles</span></span>}>
      <Menu.Item key='1'><a href='#' className='link'>Facilidades</a></Menu.Item>
      <Menu.Item key='2'><a href='#' className='link'>Amenidades</a></Menu.Item>
      <Menu.Item key='3'><a href='#' className='link'>Habitaciones</a></Menu.Item>
      <Menu.Item key='4'><a href='#' className='link'>Galerias</a></Menu.Item>
      <Menu.Item key='5'><a href='#' className='link'>Testimoniales</a></Menu.Item>
    </SubMenu>
    <SubMenu key='sub2' title={
      <span className='menu__subtitle'>
        <span className='fa fa-facebook fa-fw fa-2x' />
        <span>Hoteles</span>
      </span>}>
      <Menu.Item key='5'><a href='#' className='link'>Link</a></Menu.Item>
    </SubMenu>
  </Menu>
)
export default MyMenu
