import React, { Component } from 'react';
import { Layout, Row, Col,Tabs } from 'antd';
const { Header } = Layout;


class Headers extends Component {
    render() {
        return (
            <React.Fragment>
                <Header className="header-nav">
                    <Row>
                        <Col span={4}>
                            <img className="tabletlogo" src="https://res.cloudinary.com/lipacity/image/upload/v1584868172/minilogo_j7vvau.png" />
                        </Col>
                        <Col span={20}>
                        
                        </Col>
                       
                    </Row>
                </Header>
                
            </React.Fragment>
        );
    }
}


export default Headers;