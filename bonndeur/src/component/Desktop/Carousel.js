import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel'
class Carousel extends Component {
    render() {
        return (
           <React.Fragment>
               <AliceCarousel dotsDisabled={false}
                              buttonsDisabled={true}
                              mouseTrackingEnabled>
                <img alt="" className="tablet-carousel" src="https://res.cloudinary.com/lipacity/image/upload/v1584785140/banner_ga6soe.jpg" />
                <img alt="" className="tablet-carousel" src="https://res.cloudinary.com/lipacity/image/upload/v1584785140/banner_ga6soe.jpg" />
               </AliceCarousel>
              
           </React.Fragment>
        );
    }
}



export default Carousel;