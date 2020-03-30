import React, { Component } from 'react';
import { NavBar,Flex} from 'antd-mobile';

class Footers extends Component {
    render() {
        return (
            <React.Fragment>
               <NavBar className="navigation"
                    mode="dark"
                  
                    >
                        <Flex>
                            <Flex.Item>
                                <i className="fab fa-lg fa-facebook"></i>
                            </Flex.Item>
                            <Flex.Item>
                                <i className="fab fa-lg fa-facebook-messenger"></i>
                            </Flex.Item>
                              <Flex.Item>
                                <i className="fab fa-lg fa-twitter"></i>
                            </Flex.Item>
                            <Flex.Item>
                                <i className="fab fa-lg fa-instagram"></i>
                            </Flex.Item>
                          
                        </Flex>
                    </NavBar>
           </React.Fragment>
        );
    }
}


export default Footers;