import React, { Component } from 'react';
import { Layout,Row,Col} from 'antd';
import Breadcrumb from './Breadcrumb';
import RewardDisplay from './RewardDisplay';
import SalesCounter from './SalesCounter';
import SalesChart from './SalesChart';
const {Content } = Layout;
class Contents extends Component {
    render() {
        return (
            <React.Fragment>
                <Content>
                    <Row>
                        <Col span={24} className="admin-container">
                            <Row>
                                <Col span={24} className="admin-content">
                                    <Breadcrumb label="Dashboard"/>
                                    <RewardDisplay/>
                                    <SalesCounter/>
                                    <SalesChart/>
                                </Col>
                               
                            </Row>
                        </Col>
                    </Row>
                </Content>
            </React.Fragment>
        );
    }
}

export default Contents;