// JavaScript source code
import React from "react"
import { Link } from "gatsby"
import { Menu, Button } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PlusOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;

export default class PageMenu extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
      return (
          <div style={{ width: 256, height: 600, float: `left`, borderColor: `#F3F5F6`}}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="light"
          inlineCollapsed={this.state.collapsed}
              >
          <SubMenu key="sub1" icon={<PlusOutlined />} title={<Link to={`/sub1`}>信任模型</Link>} >
          </SubMenu>
          <SubMenu key="sub2" icon={<PlusOutlined />} title={<Link to={`/sub1`}>设计哲学</Link>} >
          </SubMenu>
          <SubMenu key="sub2" icon={<PlusOutlined />} title={<Link to={`/sub1`}>工作量证明</Link>} >
          </SubMenu>
        </Menu>
      </div>
    );
  }
}