import React, { Component } from 'react';
import { NavBar,Modal, Button} from 'antd-mobile';
const prompt = Modal.prompt;
class Headers extends Component {
   
    render() {
        return (
           <React.Fragment>
               <NavBar className="navigation"
                    mode="dark"
                    leftContent={[
                       <img style={{
                           width:'2em',
                           height:'2em'
                       }}src="https://res.cloudinary.com/lipacity/image/upload/v1584868172/minilogo_j7vvau.png"/>
                       ,
                        
                    ]}
                    rightContent={[
                       
                    <i className="fa fa-lg fa-sign-in-alt"
                        onClick={(event)=>this.showModal()}
                    ></i>
                   
                        // <img 
                        //     style={{
                        //     width:'2.5em',
                        //     height:'2.5em',
                        //     borderRadius:'50%'
                        //     }}
                        // src="https://res.cloudinary.com/lipacity/image/upload/v1581656466/201912240254avatar_eoq2pa.png"/>
                    ]}
                    >COD Pinas
                   
                    </NavBar>
                    
           </React.Fragment>
        );
    }
}


export default Headers;