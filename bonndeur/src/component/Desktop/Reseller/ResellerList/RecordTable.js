import React, { Component,useState,useContext } from 'react';
import { Table, Input, Button,Row,Col,Popconfirm,notification } from 'antd';
import Highlighter from 'react-highlight-words';
import {ResellerContext} from '../../../../ContextApi/ResellerContext';
import UpdateModal from './UpdateModal';
import ViewModal from './ViewModal';
import { LoadingOutlined,WarningOutlined,SearchOutlined,CheckOutlined} from '@ant-design/icons';

var types="";
var descriptions="";
var icontypes="";
var colorss="";

const RecordTable =()=>{
    const [ firstname,
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
        resellerId, 
        setResellerId,
        updatemodals,
        setUpdateModals,
        viewmodals,
        setViewModals,
        reseller, 
        setReseller,
    ] =  useContext(ResellerContext);
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
        setResellerId(value);
        reseller.map(record=>{
            if(record.id===value){
                setFirstName(record.firstname);
                setMiddleName(record.middlename);
                setLastName(record.lastname);
                setEmail(record.email);
                setMobile(record.mobile);
                setPAddress1(record.paddress1);
                setPAddress2(record.paddress2);
                setPCity(record.pcity);
                setPProvince(record.pprovince);
                setPPostalCode(record.ppostalcode);
                setSAddress1(record.saddress1);
                setSAddress2(record.saddress2);
                setSCity(record.scity);
                setSProvince(record.sprovince);
                setSPostalCode(record.spostalcode);
            }
        })
        setUpdateModals(true); 
    }
    const viewRecord=(value)=>{
      
        setResellerId(value);
        reseller.map(record=>{
            if(record.id===value){
                setFirstName(record.firstname);
                setMiddleName(record.middlename);
                setLastName(record.lastname);
                setEmail(record.email);
                setMobile(record.mobile);
                setPAddress1(record.paddress1);
                setPAddress2(record.paddress2);
                setPCity(record.pcity);
                setPProvince(record.pprovince);
                setPPostalCode(record.ppostalcode);
                setSAddress1(record.saddress1);
                setSAddress2(record.saddress2);
                setSCity(record.scity);
                setSProvince(record.sprovince);
                setSPostalCode(record.spostalcode);
                setImage(record.image);
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

    reseller.map((record,index)=>{
      if(record.status==="ACTIVE"){
        newRecord.push({
            key:record.id,
            image:record.image,
            email:record.email,
            mobile:record.mobile,
            firstname:record.firstname,
            middlename:record.middlename,
            lastname:record.lastname,
            paddress1:record.paddress1,
            paddress2:record.paddress2,
            pcity:record.pcity,
            pprovince:record.pprovince,
            ppostalcode:record.ppostalcode,
            saddress1:record.saddress1,
            saddress2:record.saddress2,
            scity:record.scity,
            sprovince:record.sprovince,
            spostalcode:record.spostalcode,
            totalordered:record.totalordered,
            status:record.status,
        })
      }
     
    });


    const columns = [
        {
          title: 'First Name',
          dataIndex: 'firstname',
          key: 'firstname',
          ...getColumnSearchProps('firstname'),
        },
        {
          title: 'Middle Name',
          dataIndex: 'middlename',
          key: 'middlename',
          ...getColumnSearchProps('middlename'),
        },
        {
            title: 'Last Name',
            dataIndex: 'lastname',
            key: 'lastname',
            ...getColumnSearchProps('lastname'),
          },
        {
          title: 'City',
          dataIndex: 'pcity',
          key: 'pcity',
          ...getColumnSearchProps('pcity'),
        },
        {
            title: 'Province',
            dataIndex: 'pprovince',
            key: 'pprovince',
            ...getColumnSearchProps('pprovince'),
          },
          {
            title: 'Total Ordered (PHP.)',
            dataIndex: 'totalordered',
            key: 'totalordered',
            ...getColumnSearchProps('totalordered'),
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