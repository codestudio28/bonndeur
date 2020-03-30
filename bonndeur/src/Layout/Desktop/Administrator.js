import React, { Component } from 'react';
import { Layout} from 'antd';
import AdminSidePanel from '../../component/Desktop/AdminSidePanel';
import AdminHeader from '../../component/Desktop/AdminHeader';
import AdminFooter from '../../component/Desktop/AdminFooter';
import Contents from '../../component/Desktop/Contents';

class Administrator extends Component {
    render() {
        return (
            <React.Fragment>
                <Layout className="admin-layout">
                   <AdminSidePanel/>
                    <Layout>
                        <AdminHeader/>
                        <Contents/>
                        <AdminFooter/>
                    </Layout>
                </Layout>
            </React.Fragment>
        );
    }
}


export default Administrator;