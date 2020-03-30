import React, { useState, useContext } from 'react';
import { Table, Row, Col, Button, Modal, Input, InputNumber, notification, Popconfirm } from 'antd';
import { LoadingOutlined,WarningOutlined,SearchOutlined} from '@ant-design/icons';
import {ProductContext} from '../../../../ContextApi/ProductContext';


var types="";
var descriptions="";
var icontypes="";
var colorss="";

function ViewModal(props) {
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
    const handleCancel=()=>{
        setViewModals(false);
    }
    
 
   
    return (
        <React.Fragment>
            <Modal
                visible={viewmodals}
                title="View Product Information"
                onOk={handleCancel}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
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
                                <InputNumber value={quantity}
                                    className="modal-input"
                                    min={0}
                                    placeholder="Enter product price"
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