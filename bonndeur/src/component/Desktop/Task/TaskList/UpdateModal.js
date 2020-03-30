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
function UpdateModal(props) {
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
    const showModal = () => {
        setAddModals(true);
    };
    const handleOk = () => {
        if ((task.length === 0) || (submodule.length === 0) ||(modules === "Choose Module")||(submodule === "Choose Sub Module")) {
            types = "Warning";
            descriptions = "Do not leave a blank space";
            icontypes = "BLANK";
            colorss = "#ffc53d";
            openNotification(types, descriptions, icontypes, colorss);
        } else {
            
            const newTask = {
                taskname:task,
                modulelist:addmodule,
               
            }
            alert("Task ID: "+taskId);
            console.log(newTask)
            setAddLoading(true);
            setTimeout(() => {
                setUpdateModals(false);
                setAddLoading(false);
            }, 3000);

            types = "Success";
            descriptions = "Successfully update task";
            icontypes = "OK";
            colorss = "#ffc53d";
            openNotification(types, descriptions, icontypes, colorss);
        }


    };

    if(triggers===0){
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
      triggers++;
    }
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
    

    const mod = modulelist.map(record=>{
        return(
            <Option value={record.module}>{record.module}</Option>
        )
    })
    const submod = submodulelist.map(record=>{
        if(record.module===modules){
            return(
                <Option value={record.submodule}>{record.submodule}</Option>
            )
        }
       
    })
    const handleCancel = () => {
        setUpdateModals(false);

    };

    const set_TaskName = (e) => {
        setTask(e.target.value);
    }
    
    const set_Module=(value)=>{
        setModules(value);
        setTrigger(count);
    
    }
    const set_SubModule=(value)=>{
        setSubModule(value);
    }
   const setAddModule=()=>{
       count++;
     const newmod ={
         id:1,
         module:modules,
         submodule:submodule
     }
     addmodule.push(newmod);
     console.log(addmodule);
     setTrigger(count);
   }
    
   
    const openNotification = (type, description, icontype, colors) => {

        if (icontype === "BLANK") {
            notification.open({
                message: type,
                description: description,
                onClick: () => {
                    console.log('Notification Clicked!');
                },
                icon: <WarningOutlined />,
            });
        } else if (icontype === "OK") {
            notification.open({
                message: type,
                description: description,
                onClick: () => {
                    console.log('Notification Clicked!');
                },
                icon: <CheckOutlined />,
            });
        }

    }
    return (
        <React.Fragment>
            <Row>

               
                    <Modal
                        visible={updatemodals}
                        title="Update Task"
                        onOk={handleOk}
                        onCancel={handleCancel}
                        footer={[
                            <Button key="back" onClick={handleCancel}>
                                Return
                            </Button>,
                            <Button key="submit" type="primary" loading={addloading} onClick={handleOk}>
                                Submit
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
                                                    onChange={set_TaskName} />
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
                                    <Col span={24} style={{
                                        marginTop:'2em'
                                    }}>
                                        <Row>
                                            <Col span={8}>
                                                <h4 className="modal-label">Module</h4>
                                            </Col>
                                            <Col span={16}>
                                                <Select defaultValue={modules} className="staff-task-select"  onChange={set_Module}>
                                                    {mod}
                                                </Select>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={8}>
                                                <h4 className="modal-label">Sub Module</h4>
                                            </Col>
                                            <Col span={16}>
                                                <Select defaultValue={submodule} 
                                                className="staff-task-select"  
                                                onChange={set_SubModule}
                                                >
                                                {submod}
                                                </Select>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={24} style={{
                                        marginTop:'1em' 
                                    }}>
                                        <Row>
                                            <Col span={8}>
                                                
                                            </Col>
                                            <Col span={16} style={{
                                                textAlign:'right'
                                            }}>
                                                <Button 
                                                onClick={setAddModule}
                                                className="add-button-action">Add Modules</Button>
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



export default UpdateModal;