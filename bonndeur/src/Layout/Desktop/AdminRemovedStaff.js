import React, { Component } from 'react';
import { Layout} from 'antd';
import AdminSidePanel from '../../component/Desktop/AdminSidePanel';
import AdminHeader from '../../component/Desktop/AdminHeader';
import AdminFooter from '../../component/Desktop/AdminFooter';
import RemovedStaff from '../../Page/Desktop/RemovedStaff';

class AdminStaff extends Component {
    render() {
        return (
            <React.Fragment>
                <Layout className="admin-layout">
                   <AdminSidePanel/>
                    <Layout>
                        <AdminHeader/>
                        <RemovedStaff/>
                        <AdminFooter/>
                    </Layout>
                </Layout>
            </React.Fragment>
        );
    }
}


export default AdminStaff;