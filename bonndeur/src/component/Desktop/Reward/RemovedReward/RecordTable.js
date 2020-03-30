import React, { Component,useState,useContext } from 'react';
import { Table, Input, Button,Row,Col,Popconfirm,notification } from 'antd';
import Highlighter from 'react-highlight-words';
import {RewardContext} from '../../../../ContextApi/RewardContext';

import { LoadingOutlined,WarningOutlined,SearchOutlined,CheckOutlined} from '@ant-design/icons';

var types="";
var descriptions="";
var icontypes="";
var colorss="";

const RecordTable =()=>{
  const [rewardName,
    setRewardName,
    rewardTarget,
    setRewardTarget,
    rewardPrize,
    setRewardPrize,
    rewardSales,
    setRewardSales,
    rewardId, 
    setRewardId,
    startDate,
    setStartDate,
    startTime,
    setStartTime,
    endDate,
    setEndDate,
    endTime,
    setEndTime,
    updatemodals,
    setUpdateModals,
    viewmodals,
    setViewModals,
    reward, 
    setReward,
] =  useContext(RewardContext);
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

    
   
    const retrieveRecord=(value)=>{
        alert("Retrieve records here. The key/id is: "+value);
            types="Success";
            descriptions="Successfully retrieve records";
            icontypes="OK";
            colorss="#ffc53d";   
            openNotification(types,descriptions,icontypes,colorss);


    }

    reward.map((record,index)=>{
      if(record.status==="REMOVED"){
        newRecord.push({
          key:record.id,
          rewardname:record.rewardname,
          rewardtarget:record.rewardtarget,
          rewardprize:record.rewardprize,
          rewardsales:record.rewardsales,
          startDateTime:record.startDateTime,
          startDate:record.startDate,
          startTime:record.startTime,
          endDateTime:record.endDateTime,
          endDate:record.endDate,
          startTime:record.startTime,
          status:record.status,
        })
      }
     
    });


    const columns = [
        {
          title: 'Reward Name',
          dataIndex: 'rewardname',
          key: 'rewardname',
          ...getColumnSearchProps('rewardname'),
        },
        {
          title: 'Reward Target',
          dataIndex: 'rewardtarget',
          key: 'rewardtarget',
          ...getColumnSearchProps('rewardtarget'),
        },
        {
            title: 'Reward Prize',
            dataIndex: 'rewardprize',
            key: 'rewardprize',
            ...getColumnSearchProps('rewardprize'),
          },
        {
          title: 'Reward Sales',
          dataIndex: 'rewardsales',
          key: 'rewardsales',
          ...getColumnSearchProps('rewardsales'),
        },
        {
            title: 'Start Date/Time',
            dataIndex: 'startDateTime',
            key: 'startDateTime',
            ...getColumnSearchProps('startDateTime'),
        },
      {
        title: 'End Date/Time',
        dataIndex: 'endDateTime',
        key: 'endDateTime',
        ...getColumnSearchProps('endDateTime'),
    },
    {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <span>
              
              <Popconfirm placement="topLeft" title="Do you want to retrieve this record?" onConfirm={(event)=>retrieveRecord(record.key)} okText="Yes" cancelText="No">
                <Button className="retrieve-button-action">
                    <i className="fas fa-sync"></i>
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
                   
                   
                </Col>
            </Row>
           
        </React.Fragment>
    
    );
  
}

export default RecordTable; 