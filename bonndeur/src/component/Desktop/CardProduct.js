import React, { Component } from 'react';
import { Row, Col,Card} from 'antd';

class CardProduct extends Component {
    render() {
        return (
           <React.Fragment>
               <Card className="card-product">
                   <Row>
                       <Col span={24}>
                           <img 
                           className="card-image"
                           src="https://res.cloudinary.com/lipacity/image/upload/v1584788103/three_kfbg7l.jpg"/>
                       </Col>
                       <Col span={24}>
                           <h4>Perfume 1</h4>
                        </Col>
                        <Col span={24}>
                           <h5>Php. 300.00</h5>
                        </Col>
                   </Row>
               </Card>
           </React.Fragment>
        );
    }
}



export default CardProduct;