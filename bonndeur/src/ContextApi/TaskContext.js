import React, { useState,createContext } from 'react';

export const TaskContext = createContext(null);


export const TaskProvider = (props) => {
    

    const [task,setTask] = useState('');
    const [modules,setModules] = useState('PRODUCT');
    const [submodule,setSubModule] = useState('PRODUCT LIST');
  
    const [taskId, setTaskId] = useState('');
    const [updatemodals,setUpdateModals]=useState(false);
    const [viewmodals,setViewModals]=useState(false);

    const [modulelist, setModuleList] = useState([
        {
            id:1,
            module:'PRODUCT',
        },
        {
            id:2,
            module:'TRANSACTION',
        },
        {
            id:3,
            module:'DISTRIBUTOR',
        },
        {
            id:4,
            module:'RESELLER',
        },
        {
            id:5,
            module:'STAFF',
        },
        {
            id:6,
            module:'TASK',
        },
        {
            id:7,
            module:'REWARD',
        },
        {
            id:8,
            module:'REPORT',
        },
    ])
    const [submodulelist, setSubModuleList] = useState([
        {
            id:1,
            module:'PRODUCT',
            submodule:'PRODUCT LIST'
        },
        {
            id:2,
            module:'PRODUCT',
            submodule:'REMOVED PRODUCT'
        },
        {
            id:3,
            module:'TRANSACTION',
            submodule:'ORDER LIST'
        },
        {
            id:4,
            module:'TRANSACTION',
            submodule:'REMOVED ORDER'
        },
        {
            id:5,
            module:'DISTRIBUTOR',
            submodule:'DISTRIBUTOR LIST'
        },
        {
            id:6,
            module:'DISTRIBUTOR',
            submodule:'REMOVED DISTRIBUTOR'
        },
        {
            id:7,
            module:'RESELLER',
            submodule:'RESELLER LIST'
        },
        {
            id:8,
            module:'RESELLER',
            submodule:'REMOVED RESELLER'
        },
        {
            id:9,
            module:'STAFF',
            submodule:'STAFF LIST'
        },
        {
            id:10,
            module:'STAFF',
            submodule:'REMOVED STAFF'
        },
        {
            id:11,
            module:'TASK',
            submodule:'TASK LIST'
        },
        {
            id:12,
            module:'TASK',
            submodule:'REMOVED TASK'
        },
        {
            id:13,
            module:'REWARD',
            submodule:'REWARD LIST'
        },
        {
            id:14,
            module:'REWARD',
            submodule:'REMOVED REWARD'
        },
        {
            id:15,
            module:'REPORT ',
            submodule:'SALES'
        },
        {
            id:16,
            module:'REPORT',
            submodule:'INVENTORY'
        },
        {
            id:17,
            module:'REPORT',
            submodule:'MARKETING'
        },
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
            status:'REMOVED'
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
        <TaskContext.Provider 
        value={[
           task,
           setTask,
           modules,
           setModules,
           submodule,
           setSubModule,
           taskId,
           setTaskId,
           updatemodals,
           setUpdateModals,
           viewmodals,
           setViewModals,
           tasklist,
           setTaskList,
           modulelist,
           setModuleList,
           submodulelist,
           setSubModuleList,
            ]}>
            {props.children}
        </TaskContext.Provider>
    );
}