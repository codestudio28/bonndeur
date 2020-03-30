import React, { Component } from 'react';
import {Row,Col } from 'antd';
import CardReward from './CardReward';
class RewardDisplay extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col span={24} style={{
                        marginTop:'1em'
                    }}>
                        <Row>
                            <Col span={12}>
                                <CardReward title="TOP DISTRIBUTORS"/>
                            </Col>
                            <Col span={12}>
                                <CardReward title="TOP RESELLERS"/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}



export default RewardDisplay;