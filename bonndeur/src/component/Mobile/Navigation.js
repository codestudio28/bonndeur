import React, { Component } from 'react';
import {Flex} from 'antd-mobile';


class Navigation extends Component {
    
    render() {
        return (
            <React.Fragment>
                <div className="flex-container navbars" >
                    <Flex>
                        <Flex.Item align="center" className="nav-active">
                            <i className="fa fa-2x fa-home"></i>
                        </Flex.Item>
                        <Flex.Item align="center" className="nav-idle">
                            <i className="fa fa-2x fa-shopping-basket"></i>
                        </Flex.Item>
                        <Flex.Item align="center" className="nav-idle">
                            <i className="fa fa-2x fa-cubes"></i>
                        </Flex.Item>
                        <Flex.Item align="center" className="nav-idle">
                            <i className="fa fa-2x fa-comment-dots"></i>
                        </Flex.Item>
                        <Flex.Item align="center" className="nav-idle">
                            <i className="fa fa-2x fa-info-circle"></i>
                        </Flex.Item>
                    </Flex>
                </div>
                
            </React.Fragment>
        );
    }
}



export default Navigation;