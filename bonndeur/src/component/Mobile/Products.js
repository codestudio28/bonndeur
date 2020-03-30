import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardProducts from './CardProducts';
class Products extends Component {
    
    render() {
        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5,
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 2,
            },
          };
        return (
           <React.Fragment>
               <Carousel responsive={responsive}>
                    <div className="product-div">
                        <CardProducts 
                                type="#2f54eb" 
                                image="https://res.cloudinary.com/lipacity/image/upload/v1584788103/three_kfbg7l.jpg"
                                label="Perfume 1"
                                price="Php. 300.00"/>
                            
                    </div>
                    <div  className="product-div">
                        <CardProducts 
                                type="#eb2f96" 
                                image="https://res.cloudinary.com/lipacity/image/upload/v1584788099/two_piqcff.jpg"
                                label="Perfume 2"
                                price="Php. 300.00"/>
                    </div>
                    <div  className="product-div">
                        <CardProducts 
                                type="#2f54eb" 
                                image="https://res.cloudinary.com/lipacity/image/upload/v1584788093/one_zv8atf.jpg"
                                label="Perfume 3"
                                price="Php. 300.00"/>
                          
                    </div>
                    <div  className="product-div">
                        <CardProducts 
                                type="#eb2f96" 
                                image="https://res.cloudinary.com/lipacity/image/upload/v1584875084/perfume_w9dgux.png"
                                label="Perfume 4"
                                price="Php. 300.00"/>
                    </div>
                </Carousel>
              
           </React.Fragment>
        );
    }
}



export default Products;