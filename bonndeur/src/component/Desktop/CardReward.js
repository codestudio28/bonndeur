import React, { Component } from 'react';
import {Row,Col, Card, Badge, Avatar } from 'antd';
import Ranked from './Ranked';
class CardReward extends Component {
    render() {
        return (
            <React.Fragment>
                <Card className="card-reward">
                    <Row>
                        <Col span={24} style={{
                            textAlign:'center'
                        }}>
                            <h4 className="reward-label">{this.props.title}</h4>
                        </Col>
                        <Col span={24}>
                            <Row>

                           
                            <Ranked
                                ranked="1"
                                profile="https://res.cloudinary.com/lipacity/image/upload/v1583983908/lipacity/bgfdeyznds9graqcsh3l.png"
                                name="Harry Dela Cruz"
                                address="Lipa City, Batangas"
                                sales="Php. 2,000,000.00"
                            />
                             <Ranked
                                ranked="2"
                                profile="https://res.cloudinary.com/lipacity/image/upload/v1583983908/lipacity/bgfdeyznds9graqcsh3l.png"
                                name="Thomas Santos"
                                address="Calamba City, Laguna"
                                sales="Php. 1,576,000.00"
                            />
                             <Ranked
                                ranked="3"
                                profile="https://res.cloudinary.com/lipacity/image/upload/v1583983908/lipacity/bgfdeyznds9graqcsh3l.png"
                                name="Jenny Cleofe"
                                address="Cebu City, Cebu"
                                sales="Php. 1,234,560.00"
                            />
                             </Row>
                        </Col>
                    </Row>

                </Card>
            </React.Fragment>
        );
    }
}



export default CardReward;