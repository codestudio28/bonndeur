import React, { Component,useState,useContext } from 'react';
import { Layout,Row,Col} from 'antd';
import Breadcrumb from '../../component/Desktop/Breadcrumb';
import AddRecord from '../../component/Desktop/Staff/StaffList/AddRecord';
import RecordTable from '../../component/Desktop/Staff/StaffList/RecordTable';
import {StaffProvider} from '../../ContextApi/StaffContext';
const {Content } = Layout;
class StaffList extends Component {
    render() {
        return (
            // <React.Fragment>
                <Content>
                    <Row>
                        <Col span={24} className="admin-container">
                            <Row>
                                <Col span={24} className="admin-content">
                                    <Breadcrumb label="Staff / Staff List"/>
                                    <StaffProvider>
                                        <AddRecord/>
                                        <RecordTable/>
                                     </StaffProvider>
                                </Col>
                               
                            </Row>
                        </Col>
                    </Row>
                </Content>
            // </React.Fragment>
        );
    }
}

export default StaffList;