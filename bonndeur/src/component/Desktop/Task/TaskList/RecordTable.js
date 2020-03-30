import React, { Component,useState,useContext } from 'react';
import { Table, Input, Button,Row,Col,Popconfirm,notification } from 'antd';
import Highlighter from 'react-highlight-words';
import { TaskContext } from '../../../../ContextApi/TaskContext';
import UpdateModal from './UpdateModal';
import ViewModal from './ViewModal';
import { LoadingOutlined,WarningOutlined,SearchOutlined,CheckOutlined} from '@ant-design/icons';

var types="";
var descriptions="";
var icontypes="";
var colorss="";

const RecordTable =()=>{
  const [  task,
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
] = useContext(TaskContext);
const [searchText,setSearchText] = useState('');
const [searchedColumn,setSearchedColumn] = useState('');
let searchInput;
const newRecord=[];
const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
          
        setTimeout(() => searchInput.select());
      }
    },
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
   setSearchText(selectedKeys[0]);
   setSearchedColumn(dataIndex);
  
  };

   const handleReset = clearFilters => {
    clearFilters();
    setSearchText('');
 
  };

    const updateRecord=(value)=>{
        setTaskId(value);
        tasklist.map(record=>{
            if(record.id===value){
                setTask(record.taskname);
            }
        })
          setUpdateModals(true); 
    }
    const viewRecord=(value)=>{
      setTaskId(value);
      tasklist.map(record=>{
          if(record.id===value){
              setTask(record.taskname);
          }
      })
        
        setViewModals(true);
    }
   
    const removeRecord=(value)=>{
        alert("Remove records here. The key/id is: "+value);
            types="Success";
            descriptions="Successfully removed records";
            icontypes="OK";
            colorss="#ffc53d";   
            openNotification(types,descriptions,icontypes,colorss);


    }

    tasklist.map((record,index)=>{
      if(record.status==="ACTIVE"){
        newRecord.push({
            key:record.id,
            taskname:record.taskname,
            modulelist:record.modulelist,
            status:record.status,
        })
      }
     
    });

    

    const columns = [
        {
        title: 'Task',
        dataIndex: 'taskname',
        key: 'taskname',
        ...getColumnSearchProps('taskname'),
        },
        {
          title: 'List of Modules',
          dataIndex: 'List of Modules Here',
          key: 'modulelist',
          ...getColumnSearchProps('modulelist'),
          },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <span>
              <Button className="edit-button-action" onClick={(event)=>updateRecord(record.key)}>
                  <i className="fa fa-pencil"></i>
              </Button>
            
              <Button className="view-button-action" onClick={(event)=>viewRecord(record.key)}>
                  <i className="fas fa-eye"></i>
              </Button>
              <Popconfirm placement="topLeft" title="Do you want to remove this record?" onConfirm={(event)=>removeRecord(record.key)} okText="Yes" cancelText="No">
                <Button className="remove-button-action">
                    <i className="fas fa-trash"></i>
                </Button>
              </Popconfirm>
            </span>
          )
        },
      ];

      const openNotification = (type,description,icontype,colors) => {
        if(icontype==="BLANK"){
            notification.open({
                message: type,
                description: description,
                onClick: () => {
                    console.log('Notification Clicked!');
                },
                icon: <WarningOutlined/>,
            });
        }else if(icontype==="OK"){
            notification.open({
                message: type,
                description: description,
                onClick: () => {
                    console.log('Notification Clicked!');
                },
                icon: <CheckOutlined />,
            });
        }
      
    }
    return (
        <React.Fragment>
            <Row>
                <Col span={24} style={{
                    marginTop:'2em'
                }}>
                <Table columns={columns} 
                    dataSource={newRecord}
                    pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5','10', '20', '30']}}  />
                    {updatemodals &&
                        <UpdateModal/>
                    }
                     {viewmodals &&
                        <ViewModal/>
                    }
                   
                </Col>
            </Row>
           
        </React.Fragment>
    
    );
  
}

export default RecordTable; 