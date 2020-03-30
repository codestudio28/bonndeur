import React, { Component } from 'react';
import {Row,Col, Badge, Avatar } from 'antd';

class Ranked extends Component {
    render() {
        return (
            <React.Fragment>
               <Col span={24}>
                  <table className="table-ranked">
                    <th className="th-rank">
                        <Badge className="reward-label-rank" count={this.props.ranked} />
                    </th>
                    <th className="th-profile">
                        <Avatar
                            className="reward-avatar"
                        src={this.props.profile} />
                    </th>
                      <th className="th-name">
                        <h4 className="reward-name">{this.props.name}</h4>
                        <h4 className="reward-address"><i>{this.props.address}</i></h4>
                      </th>
                      <th className="th-sales">
                        <h4 className="reward-name">{this.props.sales}</h4>
                      </th>
                  </table>
                        
                    
                </Col>
            </React.Fragment>
        );
    }
}


export default Ranked;