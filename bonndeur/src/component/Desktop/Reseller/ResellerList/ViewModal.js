import React, { Component,useState,useContext } from 'react';
import {Row,Col,Button,Modal,Input,InputNumber,notification} from 'antd';
import { LoadingOutlined,WarningOutlined,CheckOutlined } from '@ant-design/icons';
import {ResellerContext} from '../../../../ContextApi/ResellerContext';

var types="";
var descriptions="";
var icontypes="";
var colorss="";

function ViewModal (props){
    const [ firstname,
        setFirstName,
        middlename,
        setMiddleName,
        lastname,
        setLastName,
        paddress1,
        setPAddress1,
        paddress2,
        setPAddress2,
        pcity,
        setPCity,
        pprovince,
        setPProvince,
        ppostalcode,
        setPPostalCode,
        saddress1,
        setSAddress1,
        saddress2,
        setSAddress2,
        scity,
        setSCity,
        sprovince,
        setSProvince,
        spostalcode,
        setSPostalCode,
        mobile,
        setMobile,
        email,
        setEmail,
        image,
        setImage,
        resellerId, 
        setResellerId,
        updatemodals,
        setUpdateModals,
        viewmodals,
        setViewModals,
        reseller, 
        setReseller,
    ] =  useContext(ResellerContext);
    
    const [addmodals,setAddModals]=useState(false);
    const [addloading,setAddLoading]=useState(false);
 
   
    
    const handleCancel = () => {
        setViewModals(false);
       
    };
    
    
   
    
        return (
            <React.Fragment>
               
       
                   
                    <Modal
                        visible={viewmodals}
                        title="View Reseller's Informations"
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
                                   
                                    {/* Personal Information */}
                                    <Col span={24}>
                                        <img 
                                        className="client-image"
                                        src={image}/>
                                    </Col>
                                    <Col span={24} style={{
                                        marginTop:'2em'
                                    }}>
                                        <h4 className="modal-label">Personal Information</h4>
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={8}>
                                                <h4 className="modal-label">First Name</h4>
                                            </Col>
                                            <Col span={16}>
                                                <Input value={firstname} 
                                                    className="modal-input" 
                                                    placeholder="Enter first name"
                                                    disabled />
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
                                                    disabled />
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
                                                    disabled />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            {/* Contact */}
                                    <Col span={24}>
                                        <h4 className="modal-label">Contact Information</h4>
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={8}>
                                                <h4 className="modal-label">Email</h4>
                                            </Col>
                                            <Col span={16}>
                                                <Input value={email} 
                                                    className="modal-input" 
                                                    placeholder="Enter email"
                                                    disabled />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={8}>
                                                <h4 className="modal-label">Mobile Number</h4>
                                            </Col>
                                            <Col span={16}>
                                                <Input value={mobile} 
                                                    className="modal-input" 
                                                    placeholder="Enter mobile number"
                                                    disabled />
                                            </Col>
                                        </Row>
                                    </Col>
                             {/* Permanent Address */}
                                    <Col span={24}>
                                        <h4 className="modal-label">Permanent Address</h4>
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={8}>
                                                <h4 className="modal-label">Address 1</h4>
                                            </Col>
                                            <Col span={16}>
                                                <Input value={paddress1} 
                                                    className="modal-input" 
                                                    placeholder="Enter house number, street"
                                                    disabled />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={8}>
                                                <h4 className="modal-label">Address 2</h4>
                                            </Col>
                                            <Col span={16}>
                                                <Input value={paddress2} 
                                                    className="modal-input" 
                                                    placeholder="Enter barangay"
                                                    disabled />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={8}>
                                                <h4 className="modal-label">City</h4>
                                            </Col>
                                            <Col span={16}>
                                                <Input value={pcity} 
                                                    className="modal-input" 
                                                    placeholder="Enter city"
                                                    disabled />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={8}>
                                                <h4 className="modal-label">Province</h4>
                                            </Col>
                                            <Col span={16}>
                                                <Input value={pprovince} 
                                                    className="modal-input" 
                                                    placeholder="Enter province"
                                                    disabled />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={8}>
                                                <h4 className="modal-label">Postal Code</h4>
                                            </Col>
                                            <Col span={16}>
                                                <Input value={ppostalcode} 
                                                    className="modal-input" 
                                                    placeholder="Enter postal code"
                                                    disabled />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                        <h4 className="modal-label">Shipping Address</h4>
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={8}>
                                                <h4 className="modal-label">Address 1</h4>
                                            </Col>
                                            <Col span={16}>
                                                <Input value={saddress1} 
                                                    className="modal-input" 
                                                    placeholder="Enter house number, street"
                                                    disabled />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={8}>
                                                <h4 className="modal-label">Address 2</h4>
                                            </Col>
                                            <Col span={16}>
                                                <Input value={saddress2} 
                                                    className="modal-input" 
                                                    placeholder="Enter barangay"
                                                    disabled />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={8}>
                                                <h4 className="modal-label">City</h4>
                                            </Col>
                                            <Col span={16}>
                                                <Input value={scity} 
                                                    className="modal-input" 
                                                    placeholder="Enter city"
                                                    disabled />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={8}>
                                                <h4 className="modal-label">Province</h4>
                                            </Col>
                                            <Col span={16}>
                                                <Input value={sprovince} 
                                                    className="modal-input" 
                                                    placeholder="Enter province"
                                                    disabled />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={24}>
                                        <Row>
                                            <Col span={8}>
                                                <h4 className="modal-label">Postal Code</h4>
                                            </Col>
                                            <Col span={16}>
                                                <Input value={spostalcode} 
                                                    className="modal-input" 
                                                    placeholder="Enter postal code"
                                                    disabled />
                                            </Col>
                                        </Row>
                                    </Col>
                          
                        </Row>
                        </Modal>
                  
            </React.Fragment>
        );
}



export default ViewModal;