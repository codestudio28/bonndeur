import React, { Component,useState,useContext } from 'react';
import { Layout,Row,Col} from 'antd';
import Breadcrumb from '../../component/Desktop/Breadcrumb';
import AddRecord from '../../component/Desktop/Product/ProductList/AddRecord';
import RecordTable from '../../component/Desktop/Product/ProductList/RecordTable';
import {ProductProvider} from '../../ContextApi/ProductContext';
const {Content } = Layout;
class ProductList extends Component {
    render() {
        return (
            // <React.Fragment>
                <Content>
                    <Row>
                        <Col span={24} className="admin-container">
                            <Row>
                                <Col span={24} className="admin-content">
                                    <Breadcrumb label="Product / Product List"/>
                                    <ProductProvider>
                                        <AddRecord/>
                                        <RecordTable/>
                                     </ProductProvider>
                                </Col>
                               
                            </Row>
                        </Col>
                    </Row>
                </Content>
            // </React.Fragment>
        );
    }
}

export default ProductList;