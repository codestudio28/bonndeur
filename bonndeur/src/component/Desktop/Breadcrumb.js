import React, { Component } from 'react';
import {Row,Col } from 'antd';
class Breadcrumb extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col span={24}>
                        <h4 className="breadcrumb">You are here: {this.props.label}</h4>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}



export default Breadcrumb;