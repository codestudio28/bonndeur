import React, { Component,useState,useContext } from 'react';
import {Row,Col,Button,Modal,Input,InputNumber,notification} from 'antd';
import { LoadingOutlined,WarningOutlined } from '@ant-design/icons';
import {ProductContext} from '../../../../ContextApi/ProductContext';

var types="";
var descriptions="";
var icontypes="";
var colorss="";

const AddRecord =()=>{
    const [products,setProducts] =  useContext(ProductContext);
    const [productname, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [addmodal, setAddModal] = useState(false);
    const [addloading, setAddLoading] = useState(false);
    const [imageloading, setImageLoading] = useState(false);
    const [imageidleimage, setIdleImage] = useState("https://res.cloudinary.com/bonndeur/image/upload/v1585293960/perfume_w9c0p9.png");
    const [imageUrl, setImageUrl] = useState(false);
    const showModal = () => {
        setAddModal(true);
    };
    const handleOk = () => {
        if((productname.length===0)||(description.length===0)||(price===null)||(imageUrl===false)){
            types="Warning";
            descriptions="Do not leave a blank space";
            icontypes="BLANK";
            colorss="#ffc53d";   
            openNotification(types,descriptions,icontypes,colorss);
        }else{
            const newproduct={
                key: '5',
                productname: productname,
                description: description,
                price: price,
                quantity: 0,
            }
            
            setAddLoading(true);
            setTimeout(() => {
                setAddModal(false);
                setAddLoading(false);
            }, 3000);
        }

    };
    
    const handleCancel = () => {
        setAddModal(false);
       
    };
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
        console.log(file.secure_url);
        image = file.secure_url;
        console.log(image);
        if(image!=='null'){
            setIdleImage(image);
            setImageUrl(true);
            setImageLoading(false);
        }else{

        }
    }
    const set_ProductName=(e)=>{
        setProductName(e.target.value);
        console.log(productname);
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
                            Create Product 
                        </Button>
                    <Modal
                        visible={addmodal}
                        title="Create New Product"
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
                                        {imageloading && 
                                            <Row>
                                                <Col span={24} style={{
                                                    textAlign:'center'
                                                }}>
                                                    <LoadingOutlined className="icon-antdesign"/>
                                                </Col>
                                            </Row>
                                           
                                        }
                                        {!imageloading && 
                                             <img className="modal-image"
                                             src={imageidleimage}/>
                                        }
                                       
                                    </Col>
                                    <Col span={8} style={{
                                        marginTop:'2em'
                                    }}>
                                        <h4 className="modal-label">Product Image</h4>
                                    </Col>
                                    <Col span={16} style={{
                                        marginTop:'2em'
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
                                        <Input value={productname} 
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
                                            onChange={set_Description}/>
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
                    </Col>
                </Row>
            </React.Fragment>
        );
}



export default AddRecord;