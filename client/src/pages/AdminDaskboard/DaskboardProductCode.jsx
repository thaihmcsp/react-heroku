import React, { useState, useEffect } from 'react';
import { Modal, Button, Input, Table, Tag, Space} from 'antd';
import axios from '../../config/axios';
const { Column, ColumnGroup } = Table;

function DaskboardProductCode() {
  const [listCode, setListCode] = useState([])
  useEffect(() => {
    async function getListCode (){
      const res = await axios.get('/productCode')
      setListCode(res.data)
    }
    getListCode ()
  }, [])
  
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async (event) => {
    const code = document.querySelector('#productCode').value
    const name = document.querySelector('#productName').value
    console.log(code, name);
    try {
      await axios.post('/productCode',{code, name})
      const newData = await axios.get('/productCode')
      console.log(newData);
      setListCode(newData.data)
    } catch (error) {
      
    }
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  async function deleteCode (id){
    try {
      const res = await axios.delete(`/productCode/${id}`)
      const newData = await axios.get('/productCode')
      setListCode(newData.data)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='DaskboardProductCode'>
      <h1>DaskboardProductCode</h1>
      <div className='DaskboardProductCode-table'>
        <Button type="primary" onClick={showModal}>
          Add New Product Code
        </Button>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <Input name='code' placeholder="Product Code" id='productCode'/>      
          <Input name='name' placeholder="Product Name" id='productName'/>      
        </Modal>
        <Table dataSource={listCode}>
          <Column title="Mã sản phẩm" dataIndex="code" key="code" />
          <Column title="Tên" dataIndex="name" key="name" />
          <Column title="Sản phẩm con" dataIndex="branch" key="branch" />
          <Column title="Tồn kho" dataIndex="storage" key="storage" />
          <Column
            title="Action"
            key="action"
            render={(text, record) => {
              return(
                <Space size="middle">
                  <a onClick={showModal}>Edit</a>
                  <a onClick={()=>{deleteCode(text.key)}}>Delete</a>
                </Space>
              )
            }}
          />
        </Table>
      </div>
    </div>
  )
}

export default DaskboardProductCode
