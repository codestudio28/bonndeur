import React, { Component,useState,useContext } from 'react';
import { Layout,Row,Col} from 'antd';
import Breadcrumb from '../../component/Desktop/Breadcrumb';
import AddRecord from '../../component/Desktop/Distributor/DistributorList/AddRecord';
import RecordTable from '../../component/Desktop/Distributor/DistributorList/RecordTable';
import {DistributorProvider} from '../../ContextApi/DistributorContext';
const {Content } = Layout;
class DistributorList extends Component {
    render() {
        return (
            // <React.Fragment>
                <Content>
                    <Row>
                        <Col span={24} className="admin-container">
                            <Row>
                                <Col span={24} className="admin-content">
                                    <Breadcrumb label="Distributor / Distributor List"/>
                                    <DistributorProvider>
                                        <AddRecord/>
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

export default DistributorList;