import React, { Component, useState, useContext } from 'react';
import { Row, Col, Button, Modal, Input, InputNumber, notification,Select } from 'antd';
import { LoadingOutlined, WarningOutlined, CheckOutlined } from '@ant-design/icons';
import { StaffContext } from '../../../../ContextApi/StaffContext';

const { Option } = Select;

var types = "";
var descriptions = "";
var icontypes = "";
var colorss = "";

function AddRecord(props) {
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

    const [addmodals, setAddModals] = useState(false);
    const [addloading, setAddLoading] = useState(false);
    const showModal = () => {
        setFirstName('');
        setMiddleName('');
        setLastName('');
        setUsername('');
        setPassword('');
        setImage('');
        setAddModals(true);
    };
    const handleOk = () => {
        console.log(task);
        if ((firstname.length === 0) || (middlename.length === 0) || (lastname.length === 0) || (username.length === 0) || (task === "Choose Task")) {
            types = "Warning";
            descriptions = "Do not leave a blank space";
            icontypes = "BLANK";
            colorss = "#ffc53d";
            openNotification(types, descriptions, icontypes, colorss);
        } else {
            var newpassword = "1234567";
            var profileimage = "https://res.cloudinary.com/bonndeur/image/upload/v1585302275/bondeurproduct/sqpxj0hlf1rvhyv93jmj.png";
            var status = "ACTIVE";
            const newStaff = {
                firstname: firstname,
                middlename: middlename,
                lastname: lastname,
                username: username,
                password: newpassword,
                image: profileimage,
                task: task,
                status: status,

            }
            console.log(newStaff);
            setAddLoading(true);
            setTimeout(() => {
                setAddModals(false);
                setAddLoading(false);
            }, 3000);

            types = "Success";
            descriptions = "Successfully add new staff";
            icontypes = "OK";
            colorss = "#ffc53d";
            openNotification(types, descriptions, icontypes, colorss);
        }


    };

    const listTask = tasklist.map(record=>{
        if(record.status==="ACTIVE"){
            return(
              <Option value={record.taskname}>{record.taskname}</Option>
            )
        }
    })

    const handleCancel = () => {
        setAddModals(false);

    };

    const set_Username = (e) => {
        setUsername(e.target.value);
    }
    const set_FirstName = (e) => {
        setFirstName(e.target.value);
    }
    const set_MiddleName = (e) => {
        setMiddleName(e.target.value);
    }
    const set_LastName = (e) => {
        setLastName(e.target.value);
    }
    const set_Task = (value) => {
        setTask(value);
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

                <Col span={24} className="add-button-div">
                    <Button
                        onClick={showModal}
                        className="add-button">
                        <i className="fas fa-plus">&nbsp;&nbsp;</i>
                            Add Staff
                        </Button>
                    <Modal
                        visible={addmodals}
                        title="Add New Staff"
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
                                                <h4 className="modal-label">First Name</h4>
                                            </Col>
                                            <Col span={16}>
                                                <Input value={firstname}
                                                    className="modal-input"
                                                    placeholder="Enter first name"
                                                    onChange={set_FirstName} />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={8}>
                                                <h4 className="modal-label">Middle Name</h4>
                                            </Col>
                                            <Col span={16}>
                                                <Input value={middlename}
                                                    className="modal-input"
                                                    placeholder="Enter middle name"
                                                    onChange={set_MiddleName} />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={8}>
                                                <h4 className="modal-label">Last Name</h4>
                                            </Col>
                                            <Col span={16}>
                                                <Input value={lastname}
                                                    className="modal-input"
                                                    placeholder="Enter last name"
                                                    onChange={set_LastName} />
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
                                        <Input value={username}
                                            className="modal-input"
                                            placeholder="Enter username"
                                            onChange={set_Username} />
                                    </Col>
                                </Row>
                            </Col>
                           
                            <Col span={24}>
                                <Row>
                                    <Col span={8}>
                                        <h4 className="modal-label">Task</h4>
                                    </Col>
                                    <Col span={16}>
                                    <Select defaultValue={task} className="staff-task-select"  onChange={set_Task}>
                                        {listTask}
                                    </Select>
                                    </Col>
                                </Row>
                            </Col>
                            

                        </Row>
                    </Modal>
                </Col>
            </Row>
        </React.Fragment>
    );
}



export default AddRecord;