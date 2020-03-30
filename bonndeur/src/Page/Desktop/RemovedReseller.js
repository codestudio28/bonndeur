import React, { Component,useState,useContext } from 'react';
import { Layout,Row,Col} from 'antd';
import Breadcrumb from '../../component/Desktop/Breadcrumb';
import RecordTable from '../../component/Desktop/Reseller/RemovedReseller/RecordTable';
import {ResellerProvider} from '../../ContextApi/ResellerContext';
const {Content } = Layout;
class RemovedReseller extends Component {
    render() {
        return (
            // <React.Fragment>
                <Content>
                    <Row>
                        <Col span={24} className="admin-container">
                            <Row>
                                <Col span={24} className="admin-content">
                                    <Breadcrumb label="Reseller / Removed Reseller"/>
                                    <ResellerProvider>
                                        <RecordTable/>
                                     </ResellerProvider>
                                </Col>
                               
                            </Row>
                        </Col>
                    </Row>
                </Content>
            // </React.Fragment>
        );
    }
}

export default RemovedReseller;