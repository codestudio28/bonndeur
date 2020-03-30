import React, { Component } from 'react';
import { Layout, Row, Col, Tabs } from 'antd';
import Carousel from './Carousel';
import Labels from '../Desktop/Labels';
import FeaturedProducts from './FeaturedProducts';
import Testimonies from './Testimonies';
import Products from './Products';
import AllProducts from './AllProducts';
import Login from './Login';
const { TabPane } = Tabs;
const { Content } = Layout;
class Navigations extends Component {
    state = {
        loading: false,
        visible: false,
      };
      showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false, visible: false });
        }, 3000);
      };
    
      handleCancel = () => {
        this.setState({ visible: false });
      };
    render() {
        var { loading,visible } = this.state;
        return (
            <React.Fragment>
                <Content>
                    <Row>
                        <Col span={2}>
                        </Col>
                        <Col span={22} className="navi-div">
                            <Tabs defaultActiveKey="1" className="navi-tab">
                                <TabPane tab="HOME" key="HOME">
                                    <Row>
                                        <Col span={24} className="tab-body">
                                            <Row>
                                                <Col span={22}>
                                                    <Carousel/>
                                                </Col>
                                                <Col span={2}>
                                                    
                                                </Col>
                                                <Col span={22}>
                                                    <Labels label="FEATURED PRODUCTS"/>
                                                </Col>
                                                <Col span={2}>
                                                    
                                                </Col>
                                                <Col span={22} style={{
                                                    marginTop:'1em'
                                                }}>
                                                    <FeaturedProducts/>
                                                </Col>
                                                <Col span={2}>
                                                    
                                                </Col>
                                                <Col span={22}>
                                                    <Labels label="PRODUCTS"/>
                                                </Col>
                                                <Col span={2}>
                                                    
                                                </Col>
                                                <Col span={22} style={{
                                                    marginTop:'1em'
                                                }}>
                                                    <Products/>
                                                </Col>
                                                <Col span={2}>
                                                    
                                                </Col>
                                                <Col span={22}>
                                                    <Labels label="SOME GREAT TESTIMONIALS"/>
                                                </Col>
                                                <Col span={2}>
                                                    
                                                </Col>
                                                <Col span={22} style={{
                                                    marginTop:'1em'
                                                }}>
                                                    <Testimonies/>
                                                </Col>
                                                <Col span={2}>
                                                    
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tab="PRODUCTS" key="PRODUCTS">
                                    <Row>
                                        <Col span={24} className="tab-body">
                                            <AllProducts/>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tab="TESTIMONIES" key="TESTIMONIES">
                                    <Row>
                                        <Col span={24} className="tab-body">
                                            TESTIMONIES
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tab="ABOUT US" key="ABOUT US">
                                    <Row>
                                        <Col span={24} className="tab-body">
                                            ABOUT US
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tab="LOGIN" key="LOGIN">
                                    <Row>
                                        <Col span={24} className="tab-body">
                                           <Login/>
                                        </Col>
                                    </Row>
                                </TabPane>
                            </Tabs>
                        </Col>
                     
                    </Row>

                </Content>

            </React.Fragment>
        );
    }
}



export default Navigations;