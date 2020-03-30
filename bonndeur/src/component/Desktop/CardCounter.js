import React, { Component } from 'react';
import { Card,Row,Col } from 'antd';


class CardCounter extends Component {
    render() {
        return (
           <React.Fragment>
               <Card className="card-counter" style={{
                   backgroundColor:`${this.props.colors}`
               }}>
                   <Row>
                       <Col span={24} className="label-sales-div">
                            <span className="label-sales">
                                {this.props.saleslabel}
                            </span>
                       </Col>
                       <Col span={24} className="label-sales-div">
                            <span className="label-sales-title">
                            {this.props.salestitle}
                            </span>
                       </Col>
                   </Row>
               </Card>
           </React.Fragment>
        );
    }
}



export default CardCounter;