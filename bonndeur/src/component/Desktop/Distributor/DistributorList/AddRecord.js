import React, { Component,useState,useContext } from 'react';
import {Row,Col,Button,Modal,Input,InputNumber,notification} from 'antd';
import { LoadingOutlined,WarningOutlined,CheckOutlined } from '@ant-design/icons';
import {DistributorContext} from '../../../../ContextApi/DistributorContext';

var types="";
var descriptions="";
var icontypes="";
var colorss="";

function AddRecord (props){
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
        distributorId,
        setDistributorId,
        updatemodals,
        setUpdateModals,
        viewmodals,
        setViewModals,
        distributor,
        setDistributor,
    ] =  useContext(DistributorContext);
    
    const [addmodals,setAddModals]=useState(false);
    const [addloading,setAddLoading]=useState(false);
    const showModal = () => {
        setFirstName('');
        setMiddleName('');
        setLastName('');
        setEmail('');
        setMobile('');
        setPAddress1('');
        setPAddress2('');
        setPCity('');
        setPProvince('');
        setPPostalCode('');
        setSAddress1('');
        setSAddress2('');
        setSCity('');
        setSProvince('');
        setSPostalCode('');
        setImage('');
        setAddModals(true);
    };
    const handleOk = () => {
        if((firstname.length===0)||(middlename.length===0)||(lastname.length===0)||(email.length===0)||
         (mobile.length===0)||(paddress1.length===0)||(paddress2.length===0)||(pcity.length===0)||
         (pprovince.length===0)||(ppostalcode.length===0)||(saddress1.length===0)||(saddress2.length===0)||
         (scity.length===0)||(sprovince.length===0)||(spostalcode.length===0)){
                types="Warning";
                descriptions="Do not leave a blank space";
                icontypes="BLANK";
                colorss="#ffc53d";   
                openNotification(types,descriptions,icontypes,colorss);
        }else{
            const newdistributor={
                firstname: firstname,
                middlename:middlename,
                lastname: lastname,
                email: email,
                mobile: mobile,
                paddress1: paddress1,
                paddress2:paddress2,
                pcity: pcity,
                pprovince: pprovince,
                ppostalcode: ppostalcode,
                saddress1: saddress1,
                saddress2:saddress2,
                scity: scity,
                sprovince: sprovince,
                spostalcode: spostalcode,
               
            }
           console.log(newdistributor);
            setAddLoading(true);
                setTimeout(() => {
                    setAddModals(false);
                    setAddLoading(false);
            }, 3000);

            types="Success";
            descriptions="Successfully add new distributor";
            icontypes="OK";
            colorss="#ffc53d";   
            openNotification(types,descriptions,icontypes,colorss);
        }
      

    };
    
    const handleCancel = () => {
        setAddModals(false);
       
    };
    
    const set_Email=(e)=>{
       setEmail(e.target.value);
    }
    const set_FirstName=(e)=>{
        setFirstName(e.target.value);
    }
    const set_MiddleName=(e)=>{
        setMiddleName(e.target.value);
    }
    const set_LastName=(e)=>{
        setLastName(e.target.value);
    }
    const set_MobileNumber=(e)=>{
        setMobile(e.target.value);
    }
    const set_PAddress1=(e)=>{
        setPAddress1(e.target.value);
    }
    const set_PAddress2=(e)=>{
        setPAddress2(e.target.value);
    }
    const set_PCity=(e)=>{
        setPCity(e.target.value);
    }
    const set_PProvince=(e)=>{
        setPProvince(e.target.value);
    }
    const set_PPostalCode=(e)=>{
        setPPostalCode(e.target.value);
    }
    const set_SAddress1=(e)=>{
        setSAddress1(e.target.value);
    }
    const set_SAddress2=(e)=>{
        setSAddress2(e.target.value);
    }
    const set_SCity=(e)=>{
        setSCity(e.target.value);
    }
    const set_SProvince=(e)=>{
        setSProvince(e.target.value);
    }
    const set_SPostalCode=(e)=>{
        setSPostalCode(e.target.value);
    }
    const copyAddress=()=>{
        setSAddress1(paddress1);
        setSAddress2(paddress2);
        setSCity(pcity);
        setSProvince(pprovince);
        setSPostalCode(ppostalcode);
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
       
                    <Col span={24} className="add-button-div">
                        <Button 
                            onClick={showModal}
                            className="add-button">
                            <i className="fas fa-plus">&nbsp;&nbsp;</i>
                            Add Distributor 
                        </Button>
                    <Modal
                        visible={addmodals}
                        title="Add New Distributor"
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
                                    {/* Personal Information */}
                                    <Col span={24}>
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
                                                    onChange={set_Email} />
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
                                                    onChange={set_MobileNumber} />
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
                                                    onChange={set_PAddress1} />
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
                                                    onChange={set_PAddress2} />
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
                                                    onChange={set_PCity} />
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
                                                    onChange={set_PProvince} />
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
                                                    onChange={set_PPostalCode} />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={12}>
                                        <h4 className="modal-label">Shipping Address</h4>
                                    </Col>
                                    <Col span={12} style={{
                                        textAlign:'right'
                                    }}>
                                        <Button type="primary" 
                                        onClick={copyAddress}>Same as permanent address</Button>
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
                                                    onChange={set_SAddress1} />
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
                                                    onChange={set_SAddress2} />
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
                                                    onChange={set_SCity} />
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
                                                    onChange={set_SProvince} />
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
                                                    onChange={set_SPostalCode} />
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