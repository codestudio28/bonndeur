import React, { Component } from 'react';
import { Layout,Row,Col } from 'antd';
import Headers from '../../component/Desktop/Headers';
import Navigations from '../../component/Desktop/Navigations';
import Footers from '../../component/Desktop/Footers';
const { Header, Footer, Content } = Layout;
class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Layout className="layout-body">
                    <Headers/>
                    <Navigations/>
                    
                    <Footers/>
                </Layout>
            </React.Fragment>
        );
    }
}



export default Home;