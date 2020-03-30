import React, { Component,useState,useContext } from 'react';
import {Row,Col,Button,Modal,Input,InputNumber,notification,Select} from 'antd';
import { LoadingOutlined,WarningOutlined,CheckOutlined } from '@ant-design/icons';
import { StaffContext } from '../../../../ContextApi/StaffContext';

const { Option } = Select;

var types="";
var descriptions="";
var icontypes="";
var colorss="";

function ViewModal (props){
    const [firstname,
        setFirstName,
        middlename,
        setMiddleName,
        lastname,
        setLastName,
        username,
        setUsername,
        password,
        setPassword,
        image,
        setImage,
        staffId,
        setStaffId,
        task,
        setTask,
        tasklist,
        setTaskList,
        updatemodals,
        setUpdateModals,
        viewmodals,
        setViewModals,
        staff,
        setStaff,
    ] = useContext(StaffContext);
    
    const [addmodals,setAddModals]=useState(false);
    const [addloading,setAddLoading]=useState(false);
    
    var modules;
    const listTask = tasklist.map((record,index) => {
        if (record.taskname === task) {
            // record.taskname.modulist
            modules = record.modulelist.map(records=>{
               return(
                    <tr>
                        <td>{records.modulename}</td>
                        <td>{records.submodule}</td>
                    </tr>
               )
            })
            

        }
    })

    const handleCancel = () => {
        setViewModals(false);
       
    };
    
        return (
            <React.Fragment>
               
               <Modal
                        visible={viewmodals}
                        title="View Staff Information"
                        onOk={handleCancel}
                        onCancel={handleCancel}
                        footer={[
                            <Button key="back" onClick={handleCancel}>
                                Return
                            </Button>,
                            
                        ]}
                    >
                        <Row>
                            <Col span={24}>
                                <Row>
                                    <Col span={24}>
                                        <img 
                                        className="client-image"
                                        src={image}/>
                                    </Col>
                                    <Col span={24} style={{
                                        margnTop:'2em'
                                    }}>
                                        <Row>
                                            <Col span={8}>
                                                <h4 className="modal-label">First Name</h4>
                                            </Col>
                                            <Col span={16}>
                    <h4 className="modal-label-view">{firstname}</h4>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={8}>
                                                <h4 className="modal-label">Middle Name</h4>
                                            </Col>
                                            <Col span={16}>
                    <h4 className="modal-label-view">{middlename}</h4>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={8}>
                                                <h4 className="modal-label">Last Name</h4>
                                            </Col>
                                            <Col span={16}>
                    <h4 className="modal-label-view">{lastname}</h4>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={24}>
                                <Row>
                                    <Col span={8}>
                                        <h4 className="modal-label">Username</h4>
                                    </Col>
                                   
                                    <Col span={16}>
                    <h4 className="modal-label-view">{username}</h4>
                                    </Col>
                                </Row>
                            </Col>
                           
                            <Col span={24}>
                                <Row>
                                    <Col span={8}>
                                        <h4 className="modal-label">Task</h4>
                                    </Col>
                                    <Col span={16}>
                                <h4 className="modal-label-view">{task}</h4>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={24}>
                                <Row>
                                    <Col span={24}>
                                <h4 className="modal-label">List of Modules under {task}</h4>
                                    </Col>
                                    <Col span={4}>

                                    </Col>
                                    <Col span={20}>
                                        <table style={{
                                            width:'100%'
                                        }}>
                                            <tr>
                                                <th className="table-module">MODULE</th>
                                                <th className="table-module">SUBMODULE</th>
                                            </tr>
                                            {modules}
                                        </table>
                                    </Col>
                                </Row>
                            </Col>
                            

                        </Row>
                    </Modal>
                  
            </React.Fragment>
        );
}



export default ViewModal;