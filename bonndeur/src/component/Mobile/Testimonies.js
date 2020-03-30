import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel'

class Testimonies extends Component {
    render() {
        return (
           <React.Fragment>
                <AliceCarousel dotsDisabled={false}
                              buttonsDisabled={true}
                              mouseTrackingEnabled>
                <img alt="" className="mobile-testimonies" src="https://res.cloudinary.com/lipacity/image/upload/v1584861847/test2_kcmvnj.png" />
                <img alt="" className="mobile-testimonies" src="https://res.cloudinary.com/lipacity/image/upload/v1584861848/test3_vpoop3.png" />
                <img alt="" className="mobile-testimonies" src="https://res.cloudinary.com/lipacity/image/upload/v1584861848/test1_czibr3.png" />
               </AliceCarousel>
           </React.Fragment>
        );
    }
}



export default Testimonies;