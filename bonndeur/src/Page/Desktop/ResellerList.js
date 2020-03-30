import React, { Component,useState,useContext } from 'react';
import { Layout,Row,Col} from 'antd';
import Breadcrumb from '../../component/Desktop/Breadcrumb';
import AddRecord from '../../component/Desktop/Reseller/ResellerList/AddRecord';
import RecordTable from '../../component/Desktop/Reseller/ResellerList/RecordTable';
import {ResellerProvider} from '../../ContextApi/ResellerContext';
const {Content } = Layout;
class ResellerList extends Component {
    render() {
        return (
            // <React.Fragment>
                <Content>
                    <Row>
                        <Col span={24} className="admin-container">
                            <Row>
                                <Col span={24} className="admin-content">
                                    <Breadcrumb label="Reseller / Reseller List"/>
                                    <ResellerProvider>
                                        <AddRecord/>
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

export default ResellerList;