import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import 'antd/dist/antd.css';
import 'antd-mobile/dist/antd-mobile.css';
import 'react-alice-carousel/lib/alice-carousel.css'
import Home from './Layout/Mobile/Home';
import HomeDesktop from './Layout/Desktop/Home';
import AdminDesktop from './Layout/Desktop/Administrator';
import AdminProductList from './Layout/Desktop/AdminProductList';
import AdminRemovedProductList from './Layout/Desktop/AdminRemovedProduct';
import AdminDistributor from './Layout/Desktop/AdminDistributor';
import AdminRemovedDistributor from './Layout/Desktop/AdminRemovedDistributor';
import AdminReseller from './Layout/Desktop/AdminReseller';
import AdminRemovedReseller from './Layout/Desktop/AdminRemovedReseller';
import AdminStaff from './Layout/Desktop/AdminStaff';
import AdminRemovedStaff from './Layout/Desktop/AdminRemovedStaff';
import AdminTask from './Layout/Desktop/AdminTask';
import AdminRemovedTask from './Layout/Desktop/AdminRemovedTask';
import AdminReward from './Layout/Desktop/AdminReward';
import AdminRemovedReward from './Layout/Desktop/AdminRemovedReward';
function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
              <HomeDesktop/>
          </Route>
          <Route  exact path="/admin">
              <AdminDesktop/>
          </Route>
          <Route  exact path="/admin-product-list">
              <AdminProductList/>
          </Route>
          <Route  exact path="/admin-removed-product">
              <AdminRemovedProductList/>
          </Route>
          <Route  exact path="/admin-distributor">
              <AdminDistributor/>
          </Route>
          <Route  exact path="/admin-removed-distributor">
              <AdminRemovedDistributor/>
          </Route>
          <Route  exact path="/admin-reseller">
              <AdminReseller/>
          </Route>
          <Route  exact path="/admin-removed-reseller">
              <AdminRemovedReseller/>
          </Route>
          <Route  exact path="/admin-staff">
              <AdminStaff/>
          </Route>
          <Route  exact path="/admin-removed-staff">
              <AdminRemovedStaff/>
          </Route>
          <Route  exact path="/admin-task">
              <AdminTask/>
          </Route>
          <Route  exact path="/admin-removed-task">
              <AdminRemovedTask/>
          </Route>
          <Route  exact path="/admin-reward">
              <AdminReward/>
          </Route>
          <Route  exact path="/admin-removed-reward">
              <AdminRemovedReward/>
          </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
