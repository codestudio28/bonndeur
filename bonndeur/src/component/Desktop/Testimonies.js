import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
class Testimonies extends Component {
    
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
              breakpoint: { max: 1024, min: 768 },
              items: 2,
            },
            mobile: {
              breakpoint: { max: 768, min: 0 },
              items: 1,
            },
          };
        return (
           <React.Fragment>
               <Carousel responsive={responsive}>
                    <div>
                    <img alt="" className="testimonies-carousel" src="https://res.cloudinary.com/lipacity/image/upload/v1584861847/test2_kcmvnj.png" />
                    
                    </div>
                    <div  >
                    <img alt="" className="testimonies-carousel" src="https://res.cloudinary.com/lipacity/image/upload/v1584861848/test1_czibr3.png" />
                    </div>
                    <div >
                        <img alt="" className="testimonies-carousel" src="https://res.cloudinary.com/lipacity/image/upload/v1584861848/test3_vpoop3.png" />   
                    </div>
                   
                </Carousel>
              
           </React.Fragment>
        );
    }
}



export default Testimonies;