import React, { Component, useState, useContext } from 'react';
import { Row, Col, Button, Modal, Input, InputNumber, notification,Select } from 'antd';
import { LoadingOutlined, WarningOutlined, CheckOutlined } from '@ant-design/icons';
import { TaskContext } from '../../../../ContextApi/TaskContext';

const { Option } = Select;
var addmodule=[];
var addmod;
var types = "";
var descriptions = "";
var icontypes = "";
var colorss = "";
var count=0;
var triggers=0;
function ViewModal(props) {
    const [  
        task,
        setTask,
        modules,
        setModules,
        submodule,
        setSubModule,
        taskId,
        setTaskId,
        updatemodals,
        setUpdateModals,
        viewmodals,
        setViewModals,
        tasklist,
        setTaskList,
        modulelist,
        setModuleList,
        submodulelist,
        setSubModuleList,
    ] = useContext(TaskContext);

    const [addmodals, setAddModals] = useState(false);
    const [addloading, setAddLoading] = useState(false);
    const [trigger, setTrigger] = useState(count);
  
    
        addmodule=[];
        tasklist.map(record=>{
                if(task===record.taskname){
                   record.modulelist.map(records=>{
                       addmodule.push({
                           id:records.id,
                           module:records.modulename,
                           submodule:records.submodule
                       })
                   })
                }
        })
      
    addmod=addmodule.map(record=>{
        return(
            <tr>
                <td>
                    {record.module}
                </td>
                <td>
                    {record.submodule}
                </td>
            </tr>
        )
    })
   
    const handleCancel = () => {
        setViewModals(false);

    };

    const set_TaskName = (e) => {
        setTask(e.target.value);
    }
    
    return (
        <React.Fragment>
            <Row>

               
                    <Modal
                        visible={viewmodals}
                        title="View Task"
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
                                        <Row>
                                            <Col span={8}>
                                                <h4 className="modal-label">Task Name</h4>
                                            </Col>
                                            <Col span={16}>
                                                <Input value={task}
                                                    className="modal-input"
                                                    placeholder="Enter task name"
                                                    onChange={set_TaskName}
                                                    disabled />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={24}>
                                                <h4 className="modal-label">List of Modules:</h4>
                                            </Col>
                                            <Col span={4}>
                                               
                                            </Col>
                                            <Col span={20}>
                                               <table style={{
                                                   width:'100%'
                                               }}>
                                                   <tr>
                                                       <th className="table-module">Modules</th>
                                                       <th className="table-module">Sub Modules</th>
                                                   </tr>
                                                    {addmod}
                                               </table>
                                            </Col>
                                        </Row>
                                    </Col>
                                   
                                   
                                </Row>
                            </Col>
                           
                        </Row>
                    </Modal>
              
            </Row>
        </React.Fragment>
    );
}



export default ViewModal;