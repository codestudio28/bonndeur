import React, { useState, useContext } from 'react';
import { Table, Row, Col, Button, Modal, Input, InputNumber, notification, Popconfirm } from 'antd';
import { LoadingOutlined,WarningOutlined,SearchOutlined,CheckOutlined} from '@ant-design/icons';
import {ProductContext} from '../../../../ContextApi/ProductContext';


var types="";
var descriptions="";
var icontypes="";
var colorss="";

function AddQuantityModal(props) {
const [products,
    setProducts,
    productName,
    setProductName,
    updatemodals,
    setUpdateModals,
    description,
    setDescription,
    price,
    setPrice,
    imageidleimage,
    setIdleImage,
    viewmodals,
    setViewModals,
    quantity,
    setQuantity,
    addquantitymodals,
    setAddQuantityModals,
    productId,
    setproductId,
    ] =  useContext(ProductContext);
    const [addquantity,setAddQuantity]=useState(0);
    const [loading,setLoading]=useState(false);

    const handleCancel=()=>{
        setAddQuantityModals(false);
    }
    const handleOk=()=>{

        if(addquantity===null){
            types="Warning";
            descriptions="Do not leave a blank space";
            icontypes="BLANK";
            colorss="#ffc53d";   
            openNotification(types,descriptions,icontypes,colorss);
        }else{
            setLoading(true)
            console.log(addquantity);
            console.log("product id: "+productId);

            types="Success";
            descriptions="Successfully add quantity";
            icontypes="OK";
            colorss="#ffc53d";   
            openNotification(types,descriptions,icontypes,colorss);

        }
       
    }
    const set_AddQuantity=(value)=>{
        setAddQuantity(value);
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
            <Modal
                visible={addquantitymodals}
                title="Add Product Quantity"
                onOk={handleCancel}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                            </Button>,
                   <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                   
                   Submit
                       </Button>,
                ]}
            >
                <Row>
                  
                   <Col span={24}>
                        <img className="modal-image"
                            src={imageidleimage} />
                    </Col>
                    <Col span={24} style={{
                                marginTop: '2em'
                            }}>
                        <Row>
                            <Col span={8}>
                                <h4 className="modal-label">Product Name</h4>
                            </Col>
                            <Col span={16}>
                                <Input value={productName}
                                    className="modal-input"
                                    placeholder="Enter product name"
                                    disabled />
                            </Col>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <Row>
                            <Col span={8}>
                                <h4 className="modal-label">Description</h4>
                            </Col>
                            <Col span={16}>
                                <Input value={description}
                                    className="modal-input"
                                    placeholder="Enter product description"
                                    disabled />
                            </Col>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <Row>
                            <Col span={8}>
                                <h4 className="modal-label">Price</h4>
                            </Col>
                            <Col span={16}>
                                <InputNumber value={price}
                                    className="modal-input"
                                    min={0}
                                    placeholder="Enter product price"
                                   disabled />
                            </Col>
                        </Row>
                    </Col> 
                    <Col span={24}>
                        <Row>
                            <Col span={8}>
                                <h4 className="modal-label">Quantity</h4>
                            </Col>
                            <Col span={16}>
                                <InputNumber value={addquantity}
                                    className="modal-input"
                                    min={0}
                                    placeholder="Enter product quantity"
                                    onChange={set_AddQuantity}
                                    />
                            </Col>
                        </Row>
                    </Col> 
                </Row>
            </Modal>
        </React.Fragment>
    );
}

export default AddQuantityModal;