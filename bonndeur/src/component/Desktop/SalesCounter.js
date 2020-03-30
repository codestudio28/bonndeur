import React, { Component } from 'react';
import {Row,Col } from 'antd';
import CardCounter from './CardCounter';
class SalesCounter extends Component {
    render() {
        return (
           <React.Fragment>
               <Row style={{
                   marginTop:'2em'
               }}>
                   <Col span={6}>
                       <CardCounter 
                            colors="#1890FF"
                            saleslabel="Php. 2M+"
                            salestitle="Total Sales"/>
                   </Col>
                   <Col span={6}>
                       <CardCounter 
                            colors="#52C41A"
                            saleslabel="Php. 1.3M+"
                            salestitle="Total Sales as of this Year"/>
                   </Col>
                   <Col span={6}>
                       <CardCounter 
                            colors="#722ED1"
                            saleslabel="Php. 125K+"
                            salestitle="Total Sales as of this Month"/>
                   </Col>
                   <Col span={6}>
                       <CardCounter 
                            colors="#13C2C2"
                            saleslabel="Php. 35K+"
                            salestitle="Total Sales as of Today"/>
                   </Col>
               </Row>
           </React.Fragment>
        );
    }
}



export default SalesCounter;