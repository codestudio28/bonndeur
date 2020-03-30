import React, { useState, useContext } from 'react';
import { Table, Row, Col, Button, Modal, Input, InputNumber, notification, Popconfirm } from 'antd';
import { LoadingOutlined,WarningOutlined,SearchOutlined,CheckOutlined} from '@ant-design/icons';
import {ProductContext} from '../../../../ContextApi/ProductContext';


var types="";
var descriptions="";
var icontypes="";
var colorss="";

function UpdateModal(props) {
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
    const [imageloading,setImageLoading]=useState(false);
    const [imageUrl,setImageUrl]=useState(false);
    const [updateloading,setUpdateLoading]=useState(false);
    const handleCancel=()=>{
        setUpdateModals(false);
    }
    const handleOk=()=>{
        setUpdateLoading(true);
        if((productName.length===0)||(description.length===0)||(price===null)){
            types="Warning";
            descriptions="Do not leave a blank space";
            icontypes="BLANK";
            colorss="#ffc53d";   
            openNotification(types,descriptions,icontypes,colorss);
        }else{
            const newproduct={
                key: '5',
                productname: productName,
                description: description,
                price: price,
                image: imageidleimage,
                quantity: 0,
            }

            types="Success";
            descriptions="Successfully update product information";
            icontypes="OK";
            colorss="#ffc53d";   
            openNotification(types,descriptions,icontypes,colorss);

            alert("See console to see object to pass");
            console.log(newproduct);
            console.log("product id: "+productId);
            setUpdateModals(false);
            setUpdateLoading(false);
          
        }
    }

    // Uploading image to cloudinary
    const uploadImage = async e => {
        var image = 'null';
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'bondeurproduct');
        setImageLoading(true);
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/bonndeur/image/upload',
            {
                method: 'POST',
                body: data
            }
        );
        const file = await res.json();
        image = file.secure_url;
        if(image!=='null'){
            setIdleImage(image);
            setImageUrl(true);
            setImageLoading(false);
        }else{

        }
    }
    // Get Product name
    const set_ProductName=(e)=>{
        setProductName(e.target.value);
    }
    const set_Description=(e)=>{
        setDescription(e.target.value);
    }
    const set_Price=(value)=>{
        setPrice(value);
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
                visible={updatemodals}
                title="Update Product Information"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                            </Button>,
                    <Button key="submit" type="primary" loading={updateloading} onClick={handleOk}>
                   
                        Submit
                            </Button>,
                ]}
            >
                <Row>
                  
                   <Col span={24}>
                        <Row>
                            <Col span={24}>
                                {imageloading &&
                                    <Row>
                                        <Col span={24} style={{
                                            textAlign: 'center'
                                        }}>
                                            <LoadingOutlined className="icon-antdesign" />
                                        </Col>
                                    </Row>

                                }
                                {!imageloading &&
                                    <img className="modal-image"
                                        src={imageidleimage} />
                                }

                            </Col>
                            <Col span={8} style={{
                                marginTop: '2em'
                            }}>
                                <h4 className="modal-label">Product Image</h4>
                            </Col>
                            <Col span={16} style={{
                                marginTop: '2em'
                            }}>
                                <input type="file"
                                    name="file"
                                    placeholder="Upload an image"
                                    onChange={uploadImage}
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <Row>
                            <Col span={8}>
                                <h4 className="modal-label">Product Name</h4>
                            </Col>
                            <Col span={16}>
                                <Input value={productName}
                                    className="modal-input"
                                    placeholder="Enter product name"
                                    onChange={set_ProductName} />
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
                                    onChange={set_Description} />
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
                                    onChange={set_Price} />
                            </Col>
                        </Row>
                    </Col> 
                </Row>
            </Modal>
        </React.Fragment>
    );
}

export default UpdateModal;