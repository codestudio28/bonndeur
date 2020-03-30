import React, { Component,useState,useContext } from 'react';
import { Layout,Row,Col} from 'antd';
import Breadcrumb from '../../component/Desktop/Breadcrumb';
import RecordTable from '../../component/Desktop/Product/RemoveProduct/RecordTable';
import {ProductProvider} from '../../ContextApi/ProductContext';
const {Content } = Layout;
class RemovedProduct extends Component {
    render() {
        return (
            // <React.Fragment>
                <Content>
                    <Row>
                        <Col span={24} className="admin-container">
                            <Row>
                                <Col span={24} className="admin-content">
                                    <Breadcrumb label="Product / Removed Product"/>
                                    <ProductProvider>
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

export default RemovedProduct;