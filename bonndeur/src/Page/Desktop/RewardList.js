import React, { Component,useState,useContext } from 'react';
import { Layout,Row,Col} from 'antd';
import Breadcrumb from '../../component/Desktop/Breadcrumb';
import AddRecord from '../../component/Desktop/Reward/RewardList/AddRecord';
import RecordTable from '../../component/Desktop/Reward/RewardList/RecordTable';
import {RewardProvider} from '../../ContextApi/RewardContext';
const {Content } = Layout;
class RewardList extends Component {
    render() {
        return (
            // <React.Fragment>
                <Content>
                    <Row>
                        <Col span={24} className="admin-container">
                            <Row>
                                <Col span={24} className="admin-content">
                                    <Breadcrumb label="Reward / Reward List"/>
                                    <RewardProvider>
                                        <AddRecord/>
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

export default RewardList;