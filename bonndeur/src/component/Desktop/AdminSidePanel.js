import React, { Component } from 'react';
import { Layout, Menu,Row,Col } from 'antd';
import './index.css';
import {
    NavLink
  } from "react-router-dom";
const { Sider } = Layout;
const { SubMenu } = Menu;
class AdminSidePanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
            hover: false
        }
    }
 
    onCollapse = collapsed => {
   
        this.setState({ collapsed });
    };
   
    render() {
        var menustyle;
        const toggleHover=()=>{
            this.setState({hover: !this.state.hover})
            if(this.setState.hover){
                menustyle = {color: '#000000',
                             backgroundColor:'white'
                            }
            }else{
                menustyle = {color: 'green',
                backgroundColor:'white'
                            }
            }
           
        }
        return (
            <React.Fragment>
                <Sider style={{
                    backgroundColor:'#000000'
                }}
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        // console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        // console.log(collapsed, type);
                    }}
                >
                    <Row>
                        <Col span={24} className="side-logo">
                            <img className="img-logo"
                                 src="https://res.cloudinary.com/lipacity/image/upload/v1584868172/minilogo_j7vvau.png"
                            />
                        </Col>
                        <Col span={24} className="side-menu">
                        <Menu className="menu-side"
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                            >
                           >
                            <Menu.Item key="DASHBOARD" className="menu-item-solo">
                                <i className="fas fa-tachometer-alt">&nbsp;&nbsp;&nbsp;</i>DASHBOARD
                            </Menu.Item>
                            <SubMenu className="submenu-item" 
                                     key="PRODUCT" 
                                    title={
                                    <React.Fragment>
                                    <i className="fas fa-cube">&nbsp;&nbsp;&nbsp;</i>
                                        PRODUCT
                                   </React.Fragment>
                                    }>
                                <Menu.Item className="menu-item" key="PRODUCT LIST">PRODUCT LIST</Menu.Item>
                                <Menu.Item className="menu-item" key="REMOVED PRODUCT">REMOVED PRODUCT</Menu.Item>
                            </SubMenu>
                            <SubMenu className="submenu-item" 
                                     key="TRANSACTION" 
                                    title={
                                    <React.Fragment>
                                    <i className="fas fa-shopping-cart">&nbsp;&nbsp;&nbsp;</i>
                                        TRANSACTION
                                   </React.Fragment>
                                    }>
                                <Menu.Item className="menu-item" key="ORDER LIST">ORDER LIST</Menu.Item>
                                <Menu.Item className="menu-item" key="REMOVED ORDER">REMOVED ORDER</Menu.Item>
                            </SubMenu>
                            <SubMenu className="submenu-item" 
                                     key="DISTRIBUTOR" 
                                    title={
                                    <React.Fragment>
                                    <i className="fas fa-truck">&nbsp;&nbsp;&nbsp;</i>
                                        DISTRIBUTOR
                                   </React.Fragment>
                                    }>
                                <Menu.Item className="menu-item" key="DISTRIBUTOR LIST">DISTRIBUTOR LIST</Menu.Item>
                                <Menu.Item className="menu-item" key="REMOVED DISTRIBUTOR">REMOVED DISTRIBUTOR</Menu.Item>
                            </SubMenu>
                            <SubMenu className="submenu-item" 
                                     key="RESELLER" 
                                    title={
                                    <React.Fragment>
                                    <i className="fas fa-user-friends">&nbsp;&nbsp;&nbsp;</i>
                                        RESELLER
                                   </React.Fragment>
                                    }>
                                <Menu.Item className="menu-item" key="RESELLER LIST">RESELLER LIST</Menu.Item>
                                <Menu.Item className="menu-item" key="REMOVED RESELLER">REMOVED RESELLER</Menu.Item>
                            </SubMenu>
                            <SubMenu className="submenu-item" 
                                     key="STAFF" 
                                    title={
                                    <React.Fragment>
                                    <i className="fas fa-user">&nbsp;&nbsp;&nbsp;</i>
                                        STAFF
                                   </React.Fragment>
                                    }>
                                <Menu.Item className="menu-item" key="STAFF LIST">STAFF LIST</Menu.Item>
                                <Menu.Item className="menu-item" key="REMOVED STAFF">REMOVED STAFF</Menu.Item>
                            </SubMenu>
                            <SubMenu className="submenu-item" 
                                     key="TASK" 
                                    title={
                                    <React.Fragment>
                                    <i className="fas fa-tasks">&nbsp;&nbsp;&nbsp;</i>
                                        TASK
                                   </React.Fragment>
                                    }>
                                <Menu.Item className="menu-item" key="TASK LIST">TASK LIST</Menu.Item>
                                <Menu.Item className="menu-item" key="REMOVED TASK">REMOVED TASK</Menu.Item>
                            </SubMenu>
                            <SubMenu className="submenu-item" 
                                     key="REWARD" 
                                    title={
                                    <React.Fragment>
                                    <i className="fas fa-gift">&nbsp;&nbsp;&nbsp;</i>
                                        REWARD
                                   </React.Fragment>
                                    }>
                                <Menu.Item className="menu-item" key="REWARD LIST">REWARD LIST</Menu.Item>
                                <Menu.Item className="menu-item" key="REMOVED REWARD">REMOVED REWARD</Menu.Item>
                            </SubMenu>
                            <SubMenu className="submenu-item" 
                                     key="REPORT" 
                                    title={
                                    <React.Fragment>
                                    <i className="fas fa-chart-bar">&nbsp;&nbsp;&nbsp;</i>
                                        REPORT
                                   </React.Fragment>
                                    }>
                                <Menu.Item className="menu-item" key="SALES">SALES</Menu.Item>
                                <Menu.Item className="menu-item" key="INVENTORY">INVENTORY</Menu.Item>
                                <Menu.Item className="menu-item" key="MARKETING">MARKETING</Menu.Item>
                            </SubMenu>
                            <SubMenu className="submenu-item" 
                                     key="ACCOUNT" 
                                    title={
                                    <React.Fragment>
                                    <i className="fas fa-user-circle">&nbsp;&nbsp;&nbsp;</i>
                                        ACCOUNT
                                   </React.Fragment>
                                    }>
                                <Menu.Item className="menu-item" key="UPDATE INFORMATION">UPDATE INFORMATION</Menu.Item>
                                <Menu.Item className="menu-item" key="CHANGE PASSWORD">CHANGE PASSWORD</Menu.Item>
                            </SubMenu>
                            </Menu>
                        </Col>
                    </Row>
                   
                </Sider>
            </React.Fragment>
        );
    }
}



export default AdminSidePanel;