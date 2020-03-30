import React, { Component } from 'react';
import { Flex, WhiteSpace, Badge,Card } from 'antd-mobile';

class CardProducts extends Component {
   
    
    render() {
       var typecolor=this.props.type;
        return (
           <React.Fragment>
                <Flex.Item>
                    {console.log(typecolor)}
                               <Card className="featured-card"> 
                                <Badge style={{
                                    fontSize:'1em',
                                    paddingLeft:'-1em',
                                    backgroundColor:`${typecolor}`
                                }} text="  " corner>
                                   <Card.Body>
                                        <Flex>
                                            <Flex.Item align="center">
                                                <img className="featured-image"
                                                src={this.props.image}/>
                                            </Flex.Item>
                                        </Flex>
                                        <WhiteSpace size="lg"/>
                                        <Flex>
                                            <Flex.Item align="center">
                                        <h4>{this.props.label}</h4>
                                            </Flex.Item>
                                        </Flex>
                                        <Flex>
                                            <Flex.Item align="center">
                                            <h5>{this.props.price}</h5>
                                            </Flex.Item>
                                        </Flex>
                                   </Card.Body>
                                   </Badge>
                               </Card>
                            </Flex.Item>
           </React.Fragment>
        );
    }
}


export default CardProducts;