import React, { useState,createContext } from 'react';

export const ProductContext = createContext(null);


export const ProductProvider = (props) => {
    const [productName, setProductName] = useState('');
    const [productId, setproductId] = useState('');
    const [updatemodals,setUpdateModals]=useState(false);
    const [viewmodals,setViewModals]=useState(false);
    const [addquantitymodals,setAddQuantityModals]=useState(false);
    const [description,setDescription]=useState('');
    const [price,setPrice]=useState(0);
    const [quantity,setQuantity]=useState(0);
    const [imageidleimage, setIdleImage] = useState('https://res.cloudinary.com/bonndeur/image/upload/v1585293960/perfume_w9c0p9.png');
    const [products, setProducts] = useState([

        {
            key: '1',
            productname: 'Product 1',
            description: 'This is product 1',
            category: 'Category 1',
            variance: 'Variance 1',
            price: '300.00',
            quantity: '5',
            image: 'https://res.cloudinary.com/bonndeur/image/upload/v1585293960/perfume_w9c0p9.png',
            status: 'REMOVED',
        },
        {
            key: '2',
            productname: 'Product 2',
            description: 'This is product 2',
            category: 'Category 1',
            variance: 'Variance 1',
            price: '400.00',
            quantity: '10',
            image: 'https://res.cloudinary.com/bonndeur/image/upload/v1585293675/sample.jpg',
            status: 'ACTIVE',
        },
        {
            key: '3',
            productname: 'Product 3',
            description: 'This is product 3',
            category: 'Category 1',
            variance: 'Variance 1',
            price: '400.00',
            quantity: '10',
            image: 'https://res.cloudinary.com/bonndeur/image/upload/v1585293675/sample.jpg',
            status: 'ACTIVE',
        },
        {
            key: '4',
            productname: 'Product 4',
            description: 'This is product 4',
            category: 'Category 2',
            variance: 'Variance 1',
            price: '400.00',
            quantity: '10',
            image: 'https://res.cloudinary.com/bonndeur/image/upload/v1585293675/sample.jpg',
            status: 'ACTIVE',
        },
        {
            key: '5',
            productname: 'Product 5',
            description: 'This is product 5',
            category: 'Category 2',
            variance: 'Variance 1',
            price: '400.00',
            quantity: '10',
            image: 'https://res.cloudinary.com/bonndeur/image/upload/v1585293675/sample.jpg',
            status: 'ACTIVE',
        },
        {
            key: '6',
            productname: 'Product 6',
            description: 'This is product 6',
            category: 'Category 3',
            variance: 'Variance 1',
            price: '400.00',
            quantity: '10',
            image: 'https://res.cloudinary.com/bonndeur/image/upload/v1585293675/sample.jpg',
            status: 'ACTIVE',
        },
        {
            key: '7',
            productname: 'Product 7',
            description: 'This is product 7',
            category: 'Category 3',
            variance: 'Variance 2',
            price: '400.00',
            quantity: '10',
            image: 'https://res.cloudinary.com/bonndeur/image/upload/v1585293675/sample.jpg',
            status: 'ACTIVE',
        },
        {
            key: '8',
            productname: 'Product 8',
            description: 'This is product 8',
            category: 'Category 4',
            variance: 'Variance 1',
            price: '400.00',
            quantity: '10',
            image: 'https://res.cloudinary.com/bonndeur/image/upload/v1585293675/sample.jpg',
            status: 'ACTIVE',
        },
        {
            key: '9',
            productname: 'Product 9',
            description: 'This is product 9',
            category: 'Category 4',
            variance: 'Variance 1',
            price: '400.00',
            quantity: '10',
            image: 'https://res.cloudinary.com/bonndeur/image/upload/v1585293675/sample.jpg',
            status: 'ACTIVE',
        },
        {
            key: '10',
            productname: 'Product 10',
            description: 'This is product 10',
            category: 'Category 4',
            variance: 'Variance 2',
            price: '400.00',
            quantity: '10',
            image: 'https://res.cloudinary.com/bonndeur/image/upload/v1585293675/sample.jpg',
            status: 'ACTIVE',
        },
        {
            key: '11',
            productname: 'Product 11',
            description: 'This is product 11',
            category: 'Category 5',
            variance: 'Variance 1',
            price: '400.00',
            quantity: '10',
            image: 'https://res.cloudinary.com/bonndeur/image/upload/v1585293675/sample.jpg',
            status: 'ACTIVE',
        },
        {
            key: '12',
            productname: 'Product 12',
            description: 'This is product 12',
            category: 'Category 5',
            variance: 'Variance 2',
            price: '400.00',
            quantity: '10',
            image: 'https://res.cloudinary.com/bonndeur/image/upload/v1585293675/sample.jpg',
            status: 'ACTIVE',
        },

    ])
    return (
        <ProductContext.Provider 
        value={[
            products,
            setProducts,
            productName,
            setProductName,
            updatemodals,
            setUpdateModals,
            description,
            setDescription,
            price,
            setPrice,
            imageidleimage,
            setIdleImage,
            viewmodals,
            setViewModals,
            quantity,
            setQuantity,
            addquantitymodals,
            setAddQuantityModals,
            productId,
            setproductId,
            ]}>
            {props.children}
        </ProductContext.Provider>
    );
}