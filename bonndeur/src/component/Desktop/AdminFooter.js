import React, { Component } from 'react';
import { Layout, Row,Col } from 'antd';
const { Footer} = Layout;

class AdminFooter extends Component {
    render() {
        return (
           <React.Fragment>
               <Footer className="admin-footer">Design by: Code Cola Studio</Footer>
           </React.Fragment>
        );
    }
}

export default AdminFooter;