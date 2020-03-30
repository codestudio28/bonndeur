import React, { Component } from 'react';
import { Row, Col } from 'antd';
import CardProduct from './CardProduct';
import Labels from './Labels';

class AllProducts extends Component {
    render() {
        return (
            <Row>
                <Col span={22}>
                    <Labels label="FEATURED PRODUCTS" />
                </Col>
                <Col span={22}>
                    <Row>
                        <Col span={6}>
                            <CardProduct />
                        </Col>
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
                </Col>
                <Col span={22}>
                    <Labels label="PRODUCTS" />
                </Col>
                <Col span={22}>
                    <Row>
                        <Col span={6}>
                            <CardProduct />
                        </Col>
                        <Col span={6}>
                            <CardProduct />
                        </Col>
                        <Col span={6}>
                            <CardProduct />
                        </Col>
                        <Col span={6}>
                            <CardProduct />
                        </Col>
                        <Col span={6}>
                            <CardProduct />
                        </Col>
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
                </Col>
            </Row>

        );
    }
}


export default AllProducts;