import React, { Component } from 'react';
import { Layout, Row,Col,Avatar,Badge } from 'antd';
const { Header} = Layout;

class AdminHeader extends Component {
    render() {
        return (
            <React.Fragment>
                <Header className="admin-header">
                    <Row>
                        <Col span={24} className="admin-header-div">
                            <Row>
                            <   Col span={20}>
                                </Col>
                                <Col span={2}>
                                    <Badge count={99} >
                                    <i className="adminheader-icon fas fa-bell"></i>
                                    </Badge>
                                </Col>
                                <Col span={2}>
                                <Avatar 
                                    className="avatar-icon"
                                    src="https://res.cloudinary.com/lipacity/image/upload/v1581656466/201912240254avatar_eoq2pa.png"/>
                                </Col>
                            </Row>
                           
                            
                        </Col>
                    </Row>    
                </Header>
            </React.Fragment>
        );
    }
}



export default AdminHeader;