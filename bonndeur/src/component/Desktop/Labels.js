import React, { Component } from 'react';
import { Row, Col} from 'antd';

class Labels extends Component {
    render() {
        return (
            <React.Fragment>
                 <Col span={24} style={{
                        textAlign:'center',
                        marginTop:'1.8em'
                    }}>
                        <div className="label-design">
                            {this.props.label}
                        </div>
                    </Col>
            </React.Fragment>
        );
    }
}



export default Labels;