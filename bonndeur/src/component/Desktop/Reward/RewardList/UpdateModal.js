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

function UpdateModal (props){
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
    
    const [addmodals,setAddModals]=useState(false);
    const [addloading,setAddLoading]=useState(false);
   
    const handleOk = () => {
        if((rewardName.length===0)||(rewardPrize.length===0)||
        (rewardSales.length===0)||(rewardTarget.length===0)){
                types="Warning";
                descriptions="Do not leave a blank space";
                icontypes="BLANK";
                colorss="#ffc53d";   
                openNotification(types,descriptions,icontypes,colorss);
        }else{
            var status="ACTIVE";
            const newreward={
                rewardname:rewardName,
                rewardtarget:rewardTarget,
                rewardprize:rewardPrize,
                rewardsales:rewardSales,
                startDateTime:startDate+" "+startTime,
                startDate:startDate,
                startTime:startTime,
                endDateTime:endDate+" "+endTime,
                endDate:endDate,
                endTime:endTime,
                status:status
               
            }
            alert("Reward id: "+rewardId);
           console.log(newreward);
            setAddLoading(true);
                setTimeout(() => {
                    setAddModals(false);
                    setAddLoading(false);
            }, 3000);

            types="Success";
            descriptions="Successfully update reward information";
            icontypes="OK";
            colorss="#ffc53d";   
            openNotification(types,descriptions,icontypes,colorss);
        }
      

    };
    
    const handleCancel = () => {
        setUpdateModals(false);
       
    };
    
    const set_RewardName=(e)=>{
       setRewardName(e.target.value);
    }
    const set_RewardPrize=(e)=>{
        setRewardPrize(e.target.value);
     }
     const set_RewardSales=(value)=>{
        setRewardSales(value);
     }
     const set_Target=(value)=>{
        setRewardTarget(value);
     }
     const set_StartDate=(date, dateString)=>{
        setStartDate(dateString); 
     }
     const set_StartTime=(value)=>{
        setStartTime(value);
     }
     const set_EndDate=(date, dateString)=>{
        setEndDate(dateString); 
     }
     const set_EndTime=(value)=>{
        setEndTime(value);
      
     }
    const openNotification = (type,description,icontype,colors) => {

        if(icontype==="BLANK"){
            notification.open({
                message: type,
                description: description,
                onClick: () => {
                    console.log('Notification Clicked!');
                },
                icon: <WarningOutlined/>,
            });
        }else if(icontype==="OK"){
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
                        title="Update Reward Inforation"
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
                                                    onChange={set_RewardName} />
                                            </Col>
                                            <Col span={8}>
                                                <h4 className="modal-label">Reward Prize</h4>
                                            </Col>
                                            <Col span={16}>
                                                <Input value={rewardPrize} 
                                                    className="modal-input" 
                                                    placeholder="Enter reward prize"
                                                    onChange={set_RewardPrize} />
                                            </Col>
                                            <Col span={8}>
                                                <h4 className="modal-label">Required Sales</h4>
                                            </Col>
                                            <Col span={16}>
                                                <InputNumber value={rewardSales} 
                                                    className="modal-input" 
                                                    placeholder="Enter reward required sales"
                                                    onChange={set_RewardSales} />
                                            </Col>
                                            <Col span={8}>
                                                <h4 className="modal-label">Target Customer</h4>
                                            </Col>
                                            <Col span={16}>
                                                <Select defaultValue={rewardTarget} className="staff-task-select"  onChange={set_Target}>
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
                                            <DatePicker onChange={set_StartDate} defaultValue={moment(`${startDate}`, dateFormat)} format={dateFormat} />
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
                                                onChange={set_StartTime}
                                                value={startTime}
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
                                            <DatePicker onChange={set_EndDate} defaultValue={moment(`${endDate}`, dateFormat)} format={dateFormat} />
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
                                                onChange={set_EndTime}
                                                value={endTime}
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



export default UpdateModal;