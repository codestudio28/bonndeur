import React, { Component } from 'react';
import { Row, Col } from 'antd';
import CardProduct from './CardProduct';

class Products extends Component {
    render() {
        return (
            <React.Fragment>
               
                <Row >
                   
                        <Col span={6}>
                            <CardProduct />
                        </Col>
                        <Col span={6}>
                            <CardProduct />
                        </Col>
                        <Col span={6}>
                            <CardProduct />
                        </Col>
                    
                   
                  
                </Row>
               
                
            </React.Fragment>
        );
    }
}



export default Products;