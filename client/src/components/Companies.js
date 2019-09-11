import React, { useState, useEffect } from 'react';
import { Table, Icon, Card, Modal, Input, Button } from 'antd';
import Company from './Company';
import { getCompanies } from '../actions';
const { Column, ColumnGroup } = Table;

const Companies = ({ companies, deleteCompany, updateCompany, isTableView, ...rest }) => {
  const [modalVisible, setModalVisible] = useState({ status: false, record: {} });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('');
  const [key, setKey] = useState('');
  const [companyData, setCompanyData] = useState({
     name: "",
     email: "",
     region: ""
  });

  let columns;

  if (isTableView) {
    columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Region',
        dataIndex: 'region',
        key: 'region',
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
      }
    ];
  }

  const updateCompanyHandler = (e, updatedData) => {
    e.preventDefault();
    debugger;

    updateCompany(updatedData)
    .then((response) => {
      setModalVisible({ status: false, record: {}});
      setCompanyData({
         key: "",
         name: "",
         email: "",
         region: ""
      });
    })
  }

  const handleInputChange = e => {
    const value = e.target.value;

    setCompanyData({
      ...companyData,
      [e.target.name]: value
    });
  }

  const deleteCompanyHandler = key => {
    deleteCompany(key);
  }

  return (
    <>
      {isTableView &&
        <Table dataSource={companies}>
          <Column title="Name" dataIndex="name" key="name" />
          <Column title="Email" dataIndex="email" key="email" />
          <Column title="Region" dataIndex="region" key="region" />
          <Column title="Status" dataIndex="status" key="status" />
          <Column
            title="Action"
            key="action"
            render={(text, record) => {
              if (record.status === "Pending approval") {
                return <div onClick={e => updateCompanyHandler(e, Object.assign({}, record, { status: 'Accepted' }))}
                style={{ color: 'green', cursor: 'pointer' }}>Approve</div>
              }

              return (
                <>
                  <div onClick={() => setModalVisible({ status: true, record: record })} style={{ color: "orange", cursor: "pointer", display: 'inline-block', marginRight: '10px' }}>Update</div>
                  <Icon onClick={() => deleteCompanyHandler(record.key)} type="close-circle" style={{ color: "red", cursor: "pointer", display: 'inline-block' }}/>
                </>
              )
            }}
          />
        </Table>
      }

      {modalVisible &&
        <Modal
          title="Update Company"
          visible={modalVisible.status}
          onOk={e => updateCompanyHandler(e, {
            key: modalVisible.record.key,
            name: companyData.name || modalVisible.record.name,
            email: companyData.email || modalVisible.record.email,
            region: companyData.region || modalVisible.record.region,
            status: modalVisible.record.status
          })}
          onCancel={() => setModalVisible({status: false})}
        >
          <form onSubmit={updateCompanyHandler}>
            <label>
              Name:
              <Input name="name" value={companyData.name || modalVisible.record.name} onChange={handleInputChange} />
            </label>
            <label>
              Email:
              <Input name="email" value={companyData.email || modalVisible.record.email} onChange={handleInputChange} />
            </label>
            <label>
              Region:
              <Input name="region" value={companyData.region || modalVisible.record.region} onChange={handleInputChange}/>
            </label>
            <input type="submit" value="Submit" hidden/>
          </form>
          </Modal>
      }

      {!isTableView && <div className="block--cards">
        {companies.map((company) => {
          return (
            <Card key={company.key} title={company.name} bordered={true} style={{ width: 400, margin: "20px" }}>
              {company.logo && <img src={company.logo} style={{ height: '50px' }}></img>}
              {company.email && <div><a href={`mailto:${company.email}`}>{company.email}</a></div>}
              {company.region && <div>Region: {company.region}</div>}
              <strong>{company.status}</strong>
            </Card>
          )
        })}
        </div>
      }
    </>
  )
}

export default Companies
