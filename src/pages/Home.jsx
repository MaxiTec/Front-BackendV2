import React, { Component } from 'react'
// import LayoutContainer from '../components/layout/Layout'
import { Layout, Icon,Menu,Button} from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import Footer from '../components/layout/Footer'
import SiderMenu from '../components/layout/Sider/index'
class Home extends Component {
  render() {
    return(
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus maxime officia numquam aut necessitatibus et quidem voluptatibus iste! Consequatur ut ullam rerum. Corrupti enim rem reprehenderit, consequuntur velit quia non.</p>
    )
  }
}
export default Home