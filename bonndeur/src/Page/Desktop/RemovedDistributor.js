import React, { Component,useState,useContext } from 'react';
import { Layout,Row,Col} from 'antd';
import Breadcrumb from '../../component/Desktop/Breadcrumb';
import RecordTable from '../../component/Desktop/Distributor/RemovedDistributor/RecordTable';
import {DistributorProvider} from '../../ContextApi/DistributorContext';
const {Content } = Layout;
class RemovedDistributor extends Component {
    render() {
        return (
            // <React.Fragment>
                <Content>
                    <Row>
                        <Col span={24} className="admin-container">
                            <Row>
                                <Col span={24} className="admin-content">
                                    <Breadcrumb label="Distributor / Removed Distributor"/>
                                    <DistributorProvider>
                                        <RecordTable/>
                                     </DistributorProvider>
                                </Col>
                               
                            </Row>
                        </Col>
                    </Row>
                </Content>
            // </React.Fragment>
        );
    }
}

export default RemovedDistributor;