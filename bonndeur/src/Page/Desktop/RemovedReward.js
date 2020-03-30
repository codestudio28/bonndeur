import React, { Component,useState,useContext } from 'react';
import { Layout,Row,Col} from 'antd';
import Breadcrumb from '../../component/Desktop/Breadcrumb';
import RecordTable from '../../component/Desktop/Reward/RemovedReward/RecordTable';
import {RewardProvider} from '../../ContextApi/RewardContext';
const {Content } = Layout;
class RemovedReward extends Component {
    render() {
        return (
            // <React.Fragment>
                <Content>
                    <Row>
                        <Col span={24} className="admin-container">
                            <Row>
                                <Col span={24} className="admin-content">
                                    <Breadcrumb label="Reward / Removed Reward"/>
                                    <RewardProvider>
                                      
                                        <RecordTable/>
                                     </RewardProvider>
                                </Col>
                               
                            </Row>
                        </Col>
                    </Row>
                </Content>
            // </React.Fragment>
        );
    }
}

export default RemovedReward;