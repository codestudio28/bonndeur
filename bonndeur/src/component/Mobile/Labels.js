import React, { Component } from 'react';
import { Flex, Badge, WhiteSpace } from 'antd-mobile';

class Labels extends Component {
    render() {
        return (
           <React.Fragment>
                <WhiteSpace size="lg"/>
                <Flex className="flexs"> 
                            <Flex.Item  align="center">
                                <Badge style={{
                                    backgroundColor:'#DACD3B',
                                    color:'#000000'
                                }}className="badgedesign" text={this.props.label}/>
                            </Flex.Item>
                        </Flex>
           </React.Fragment>
        );
    }
}



export default Labels;