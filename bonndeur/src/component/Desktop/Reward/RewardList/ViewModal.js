import React, { Component,useState,useContext } from 'react';
import {Row,Col,Button,Modal,Input,InputNumber,notification,Select,DatePicker } from 'antd';
import { LoadingOutlined,WarningOutlined,CheckOutlined } from '@ant-design/icons';
import {RewardContext} from '../../../../ContextApi/RewardContext';
import moment from 'moment';
import TimePicker from 'react-time-picker';
const dateFormat = 'YYYY-MM-DD';
const {Option} = Select;

var types="";
var descriptions="";
var icontypes="";
var colorss="";

function ViewModal (props){
    const [rewardName,
        setRewardName,
        rewardTarget,
        setRewardTarget,
        rewardPrize,
        setRewardPrize,
        rewardSales,
        setRewardSales,
        rewardId, 
        setRewardId,
        startDate,
        setStartDate,
        startTime,
        setStartTime,
        endDate,
        setEndDate,
        endTime,
        setEndTime,
        updatemodals,
        setUpdateModals,
        viewmodals,
        setViewModals,
        reward, 
        setReward,
    ] =  useContext(RewardContext);
    
    
    
    const handleCancel = () => {
        setViewModals(false);
       
    };
    
   
    
        return (
            <React.Fragment>
                <Row>
       
                    
                    <Modal
                        visible={viewmodals}
                        title="View Reward Inforation"
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
                                    {/* Reward Information */}
                                    <Col span={24}>
                                        <h4 className="modal-label">Reward Information</h4>
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={8}>
                                                <h4 className="modal-label">Reward Name</h4>
                                            </Col>
                                            <Col span={16}>
                                                <Input value={rewardName} 
                                                    className="modal-input" 
                                                    placeholder="Enter reward name"
                                                    disabled />
                                            </Col>
                                            <Col span={8}>
                                                <h4 className="modal-label">Reward Prize</h4>
                                            </Col>
                                            <Col span={16}>
                                                <Input value={rewardPrize} 
                                                    className="modal-input" 
                                                    placeholder="Enter reward prize"
                                                    disabled />
                                            </Col>
                                            <Col span={8}>
                                                <h4 className="modal-label">Required Sales</h4>
                                            </Col>
                                            <Col span={16}>
                                                <InputNumber value={rewardSales} 
                                                    className="modal-input" 
                                                    placeholder="Enter reward required sales"
                                                    disabled />
                                            </Col>
                                            <Col span={8}>
                                                <h4 className="modal-label">Target Customer</h4>
                                            </Col>
                                            <Col span={16}>
                                                <Select defaultValue={rewardTarget} className="staff-task-select"  disabled>
                                                    <Option value="Distributor">Distributor</Option>
                                                    <Option value="Reseller">Reseller</Option>
                                                </Select>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                        <h4 className="modal-label">Start Date/Time</h4>
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={8}>
                                                <h4 className="modal-label">Date</h4>
                                            </Col>
                                            <Col span={16}>
                                                <DatePicker defaultValue={moment(`${startDate}`, dateFormat)} format={dateFormat} disabled/>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={8}>
                                                <h4 className="modal-label">Time</h4>
                                            </Col>
                                            <Col span={16}>
                                                <TimePicker
                                                value={startTime}
                                                disabled
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                        <h4 className="modal-label">End Date/Time</h4>
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={8}>
                                                <h4 className="modal-label">Date</h4>
                                            </Col>
                                            <Col span={16}>
                                            <DatePicker defaultValue={moment(`${endDate}`, dateFormat)} format={dateFormat} disabled/>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={8}>
                                                <h4 className="modal-label">Time</h4>
                                            </Col>
                                            <Col span={16}>
                                                <TimePicker
                                                value={endTime}
                                                disabled
                                                />
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