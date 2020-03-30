import React, { Component } from 'react';
import { Layout, Row, Col} from 'antd';
const { Footer } = Layout;


class Footers extends Component {
    render() {
        return (
            <React.Fragment>
                <Footer className="footer-nav">
                    <Row>
                        <Col span={12}>
                            <Row>
                                <Col span={24}>
                                    <h3>FOLLOW US:</h3>
                                </Col>
                                <Col span={24}>
                                    <i className="footer-icon fab fa-3x fa-facebook"></i>
                                    <i className="footer-icon fab fa-3x fa-facebook-messenger"></i>
                                    <i className="footer-icon fab fa-3x fa-instagram"></i>
                                    <i className="footer-icon fab fa-3x fa-twitter"></i>
                                </Col>
                            </Row>
                            
                        </Col>
                        <Col span={12}>
                            <Row>
                                <Col span={24}>
                                    <Row>
                                        <Col span={8}>
                                        </Col>
                                        <Col span={2}>
                                            <i className="about-icon fas fa-map-marker"></i>
                                        </Col>
                                        <Col span={14}>
                                            <h6>Sabang Lipa City, Batangas</h6>
                                        </Col>       
                                    </Row>
                                </Col>
                                <Col span={24}>
                                    <Row>
                                        <Col span={8}>
                                        </Col>
                                        <Col span={2}>
                                            <i className="about-icon fas fa-phone"></i>
                                        </Col>
                                        <Col span={14}>
                                            <h6>435 1234</h6>
                                        </Col>       
                                    </Row>
                                </Col>
                                <Col span={24}>
                                    <Row>
                                        <Col span={8}>
                                        </Col>
                                        <Col span={2}>
                                            <i className="about-icon fas fa-mobile-alt"></i>
                                        </Col>
                                        <Col span={14}>
                                            <h6>+63 9151234567</h6>
                                        </Col>       
                                    </Row>
                                </Col>
                                <Col span={24}>
                                    <Row>
                                        <Col span={8}>
                                        </Col>
                                        <Col span={2}>
                                            <i className="about-icon fas fa-envelope"></i>
                                        </Col>
                                        <Col span={14}>
                                            <h6>bonndeur@gmail.com</h6>
                                        </Col>       
                                    </Row>
                                </Col>
                                
                            </Row>
                        </Col>
                        
                    </Row>
                </Footer>
            </React.Fragment>
        );
    }
}


export default Footers;