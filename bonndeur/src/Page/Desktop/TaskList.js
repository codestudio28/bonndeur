import React, { Component,useState,useContext } from 'react';
import { Layout,Row,Col} from 'antd';
import Breadcrumb from '../../component/Desktop/Breadcrumb';
import AddRecord from '../../component/Desktop/Task/TaskList/AddRecord';
import RecordTable from '../../component/Desktop/Task/TaskList/RecordTable';
import {TaskProvider} from '../../ContextApi/TaskContext';
const {Content } = Layout;
class TaskList extends Component {
    render() {
        return (
            // <React.Fragment>
                <Content>
                    <Row>
                        <Col span={24} className="admin-container">
                            <Row>
                                <Col span={24} className="admin-content">
                                    <Breadcrumb label="Task / Task List"/>
                                    <TaskProvider>
                                        <AddRecord/>
                                        <RecordTable/>
                                     </TaskProvider>
                                </Col>
                               
                            </Row>
                        </Col>
                    </Row>
                </Content>
            // </React.Fragment>
        );
    }
}

export default TaskList;