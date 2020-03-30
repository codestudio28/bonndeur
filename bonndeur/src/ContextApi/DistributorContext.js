import React, { useState,createContext } from 'react';

export const DistributorContext = createContext(null);


export const DistributorProvider = (props) => {
    const [firstname,setFirstName] = useState('');
    const [middlename,setMiddleName] = useState('');
    const [lastname,setLastName] = useState('');
    // Permanent Address
    const [paddress1,setPAddress1] = useState('');
    const [paddress2,setPAddress2] = useState('');
    const [pcity,setPCity] = useState('');
    const [pprovince,setPProvince] = useState('');
    const [ppostalcode,setPPostalCode] = useState('');
    // Shipping Address
    const [saddress1,setSAddress1] = useState('');
    const [saddress2,setSAddress2] = useState('');
    const [scity,setSCity] = useState('');
    const [sprovince,setSProvince] = useState('');
    const [spostalcode,setSPostalCode] = useState('');

    const [mobile,setMobile] = useState('');
    const [email,setEmail] = useState('');

    const [image,setImage] = useState('');
    const [distributorId, setDistributorId] = useState('');
    const [updatemodals,setUpdateModals]=useState(false);
    const [viewmodals,setViewModals]=useState(false);

    const [distributor, setDistributor] = useState([
        {
            id:1,
            image:'https://res.cloudinary.com/bonndeur/image/upload/v1585302275/bondeurproduct/sqpxj0hlf1rvhyv93jmj.png',
            email:'a@gmail.com',
            mobile:'09151234567',
            firstname:'Jerwin',
            middlename:'Pinangang',
            lastname:'Cruz',
            paddress1:'212 Makiling',
            paddress2:'Palingon',
            pcity:'Calamba',
            pprovince:'Laguna',
            ppostalcode:'4027',
            saddress1:'212 Makiling',
            saddress2:'Palingon',
            scity:'Calamba',
            sprovince:'Laguna',
            spostalcode:'4027',
            totalordered:'200000',
            status:'ACTIVE'
        }
    ]);

    return (
        <DistributorContext.Provider 
        value={[
           firstname,
           setFirstName,
           middlename,
           setMiddleName,
           lastname,
           setLastName,
           paddress1,
           setPAddress1,
           paddress2,
           setPAddress2,
           pcity,
           setPCity,
           pprovince,
           setPProvince,
           ppostalcode,
           setPPostalCode,
           saddress1,
           setSAddress1,
           saddress2,
           setSAddress2,
           scity,
           setSCity,
           sprovince,
           setSProvince,
           spostalcode,
           setSPostalCode,
           mobile,
           setMobile,
           email,
           setEmail,
           image,
           setImage,
           distributorId,
           setDistributorId,
           updatemodals,
           setUpdateModals,
           viewmodals,
           setViewModals,
           distributor,
           setDistributor,
            ]}>
            {props.children}
        </DistributorContext.Provider>
    );
}