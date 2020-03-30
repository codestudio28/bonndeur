import React, { Component } from 'react';
import Headers from '../../component/Mobile/Headers'
import Carousel from '../../component/Mobile/Carousel';
import { Flex, Badge } from 'antd-mobile';
import CardProducts from '../../component/Mobile/CardProducts';
import Labels from '../../component/Mobile/Labels';
import Testimonies from '../../component/Mobile/Testimonies';
import Navigation from '../../component/Mobile/Navigation';
import Footers from '../../component/Mobile/Footers';
import Products from '../../component/Mobile/Products';
class Home extends Component {
    render() {
        return (
            <React.Fragment>
                 <Headers/>
                 <Navigation/>
                    <div className="flex-container">
                        <Flex className="flexs">
                            <Flex.Item>
                                <Carousel />
                            </Flex.Item>
                        </Flex>
                       <Labels label="FEATURED PRODUCTS"/>
                     
                        <Flex className="flexs"> 
                            <CardProducts 
                                type="#2f54eb" 
                                image="https://res.cloudinary.com/lipacity/image/upload/v1584788103/three_kfbg7l.jpg"
                                label="Perfume 1"
                                price="Php. 300.00"/>
                            <CardProducts 
                                type="#eb2f96" 
                                image="https://res.cloudinary.com/lipacity/image/upload/v1584788099/two_piqcff.jpg"
                                label="Perfume 2"
                                price="Php. 300.00"/>
                        </Flex>
                        <Flex className="flexs"> 
                            <CardProducts 
                                type="#2f54eb" 
                                image="https://res.cloudinary.com/lipacity/image/upload/v1584788093/one_zv8atf.jpg"
                                label="Perfume 3"
                                price="Php. 300.00"/>
                            <CardProducts 
                                type="#eb2f96" 
                                image="https://res.cloudinary.com/lipacity/image/upload/v1584875084/perfume_w9dgux.png"
                                label="Perfume 4"
                                price="Php. 300.00"/>
                        </Flex>
                        <Labels label="PRODUCTS"/>
                        <Flex className="flexs">
                            <Flex.Item align="center">
                               <Products/>
                            </Flex.Item>
                        </Flex>
                        <Labels label="SOME GREAT TESTIMONIES"/>
                        <Flex className="flexs">
                            <Flex.Item align="center">
                                <Testimonies/>
                            </Flex.Item>
                        </Flex>
                        
                    </div>
                <Footers/>
                     
                        
                    
                 
                 
            </React.Fragment>
        );
    }
}

export default Home;