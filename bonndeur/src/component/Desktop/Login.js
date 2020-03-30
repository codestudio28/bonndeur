import React, { Component } from 'react';
import { Row, Col,Card,Input, Button } from 'antd';

class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col span={22} style={{
                        marginTop:'3em'
                    }}>
                        <Row>
                            <Col span={4}>
                            </Col>
                            <Col span={16}>
                                <Card title="Login" className="card-login">
                                    <Row>
                                        <Col span={24} className="input-div">
                                            <Input size="large" placeholder="Email" prefix={<i className="fa fa-user"></i>} />
                                        </Col>
                                        <Col span={24} className="input-div">
                                            <Input.Password size="large" placeholder="Password" prefix={<i className="fa fa-lock"></i>} />
                                        </Col>
                                        <Col span={24} className="input-div" style={{
                                            textAlign:'right'
                                        }}>
                                            <Button className="primary-buttons">Login</Button>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                            <Col span={4}>
                            </Col>
                        </Row>
                        
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}


export default Login;