import React, { useState,createContext } from 'react';

export const StaffContext = createContext(null);


export const StaffProvider = (props) => {
    const [firstname,setFirstName] = useState('');
    const [middlename,setMiddleName] = useState('');
    const [lastname,setLastName] = useState('');

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [task,setTask] = useState('Choose Task');
    
    const [image,setImage] = useState('');

    const [staffId, setStaffId] = useState('');
    const [updatemodals,setUpdateModals]=useState(false);
    const [viewmodals,setViewModals]=useState(false);

    const [staff, setStaff] = useState([
        {
            id:1,
            image:'https://res.cloudinary.com/bonndeur/image/upload/v1585302275/bondeurproduct/sqpxj0hlf1rvhyv93jmj.png',
            username:'John',
            firstname:'John',
            middlename:'Santos',
            lastname:'Cruz',
            task:'Task 1',
            status:'REMOVED'
        },
        {
            id:2,
            image:'https://res.cloudinary.com/bonndeur/image/upload/v1585302275/bondeurproduct/sqpxj0hlf1rvhyv93jmj.png',
            username:'Mich',
            firstname:'Michelle',
            middlename:'Vera',
            lastname:'Garcia',
            task:'Task 2',
            status:'ACTIVE'
        }
    ]);
    const [tasklist, setTaskList] = useState([
        {
            id:1,
            taskname:'Task 1',
            modulelist:[
                {
                    id:1,
                    modulename:'PRODUCT',
                    submodule:'PRODUCT LIST',
                },
                {
                    id:2,
                    modulename:'PRODUCT',
                    submodule:'REMOVED PRODUCT',
                },
                {
                    id:3,
                    modulename:'TRANSACTION',
                    submodule:'ORDER LIST',
                },
            ],
            status:'ACTIVE'
        },
        {
            id:2,
            taskname:'Task 2',
            modulelist:[
                {
                    id:1,
                    modulename:'PRODUCT',
                    submodule:'PRODUCT LIST',
                },
                {
                    id:3,
                    modulename:'TRANSACTION',
                    submodule:'ORDER LIST',
                },
            ],
            status:'ACTIVE'
        },
    ]);
        
  
    return (
        <StaffContext.Provider 
        value={[
           firstname,
           setFirstName,
           middlename,
           setMiddleName,
           lastname,
           setLastName,
           username,
           setUsername,
           password,
           setPassword,
           image,
           setImage,
           staffId,
           setStaffId,
           task,
           setTask,
           tasklist,
           setTaskList,
           updatemodals,
           setUpdateModals,
           viewmodals,
           setViewModals,
           staff,
           setStaff,
            ]}>
            {props.children}
        </StaffContext.Provider>
    );
}