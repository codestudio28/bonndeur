import React, { Component,useState,useContext } from 'react';
import { Layout,Row,Col} from 'antd';
import Breadcrumb from '../../component/Desktop/Breadcrumb';
import RecordTable from '../../component/Desktop/Staff/RemovedStaff/RecordTable';
import {StaffProvider} from '../../ContextApi/StaffContext';
const {Content } = Layout;
class RemovedStaff extends Component {
    render() {
        return (
            // <React.Fragment>
                <Content>
                    <Row>
                        <Col span={24} className="admin-container">
                            <Row>
                                <Col span={24} className="admin-content">
                                    <Breadcrumb label="Staff / Removed Staff"/>
                                    <StaffProvider>
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

export default RemovedStaff;