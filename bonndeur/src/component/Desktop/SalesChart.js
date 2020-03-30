import React, { Component } from 'react';
import {Row,Col } from 'antd';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
const data = [
    {
      name: 'JAN', BonnDeur: 4000, Others: 2400, amt: 2400,
    },
    {
      name: 'FEB', BonnDeur: 3000, Others: 1398, amt: 2210,
    },
    {
      name: 'MAR', BonnDeur: 2000, Others: 9800, amt: 2290,
    },
    {
      name: 'APR', BonnDeur: 2780, Others: 3908, amt: 2000,
    },
    {
      name: 'MAY', BonnDeur: 1890, Others: 4800, amt: 2181,
    },
    {
      name: 'JUN', BonnDeur: 2390, Others: 3800, amt: 2500,
    },
    {
      name: 'JUL', BonnDeur: 3490, Others: 4300, amt: 2100,
    },
    {
        name: 'AUG', BonnDeur: 3490, Others: 4300, amt: 2100,
    },
    {
        name: 'SEP', BonnDeur: 3490, Others: 4300, amt: 2100,
    },
    {
        name: 'OCT', BonnDeur: 3490, Others: 4300, amt: 2100,
    },
    {
        name: 'NOV', BonnDeur: 3490, Others: 4300, amt: 2100,
    },
    {
        name: 'DEC', BonnDeur: 3490, Others: 4300, amt: 2100,
    },
  ];
class SalesChart extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col span={24} style={{
                        marginTop:'2em',
                        textAlign:'center'
                    }}>
                    <BarChart 
                        width={800}
                        height={300}
                        data={data}
                        margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="BonnDeur" fill="#8884d8" />
                        <Bar dataKey="Others" fill="#82ca9d" />
                    </BarChart>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}



export default SalesChart;