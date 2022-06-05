import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Container, Modal, Table } from 'react-bootstrap'

const Users1 = () => {

  const [data, setData] = useState([])
  const [RowData, SetRowData] = useState([])
  const [ViewShow, SetViewShow] = useState(false)
  const handleViewShow = () => { SetViewShow(true) }
  const hanldeViewClose = () => { SetViewShow(false) }
  //FOr Edit Model
  const [ViewEdit, SetEditShow] = useState(false)
  const handleEditShow = () => { SetEditShow(true) }
  const hanldeEditClose = () => { SetEditShow(false) }
  //FOr Delete Model
  const [ViewDelete, SetDeleteShow] = useState(false)
  const handleDeleteShow = () => { SetDeleteShow(true) }
  const hanldeDeleteClose = () => { SetDeleteShow(false) }
  //FOr Add New Data Model
  const [ViewPost, SetPostShow] = useState(false)
  const handlePostShow = () => { SetPostShow(true) }
  const hanldePostClose = () => { SetPostShow(false) }

  //Define here local state that store the form Data
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [phone, setphone] = useState("")
  const [address, setaddress] = useState("")

  const [Delete, setDelete] = useState(false)

  //Id for update record and Delete
  const [id, setId] = useState("");

  

  const GetUsersData = () => {
    //here we will get all employee data
    const url = 'https://lokinder007.github.io/jsonapi/users.json'
    axios.get(url)
      .then(res => {
        // alert('Success')
        setData(res.data)
        // console.log(res)
      })
      .catch(err => {
        alert('Somthing went wrong.')
      })
  }
  const handleSubmite = () => {
    const url = 'https://lokinder007.github.io/jsonapi/users.json'
    const Credentials = { name, email, phone, address }
    axios.post(url, Credentials)
      .then(res => {
        // alert('Success')
        setData(res.data)
        // console.log(res)
      })
      .catch(err => {
        alert('Somthing went wrong.')
      })
  }
  const handleEdit = () => {
    const url = `https://lokinder007.github.io/jsonapi/users.json/${id}`
    const Credentials = { name, email, phone, address }
    axios.put(url, Credentials)
      .then(res => {
        // alert('Success')
        window.location.reload()
        // console.log(res)
      })
      .catch(err => {
        alert('Somthing went wrong.')
      })
  }
  //handle Delete Function 
  const handleDelete = () => {
    const url = `https://lokinder007.github.io/jsonapi/users.json/${id}`
    axios.delete(url)
      .then(res => {
        // alert('Success')
        window.location.reload()
        // console.log(res)
      })
      .catch(err => {
        alert('Somthing went wrong.')
      })
  }

  //call this function in useEffect

  useEffect(() => {
    GetUsersData();
  }, [])

  return (
    <>
      <Container>
        <h1 className='m-4'>List of Users</h1>


        <Table striped bordered hover size="sm" variant='info'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.length > 0 &&
              data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.address}</td>
                    <td style={{ minWidth: 190 }}>
                      <Button size='sm' variant='primary' onClick={() => { handleViewShow(SetRowData(item)) }}>View</Button>|
                      <Button size='sm' variant='warning' onClick={() => { handleEditShow(SetRowData(item), setId(item.id)) }}>Edit</Button>|
                      <Button size='sm' variant='danger' onClick={() => { handleViewShow(SetRowData(item), setId(item.id), setDelete(true)) }}>Delete</Button>|
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>

        {/* View Modal */}
        <div className='model-box-view'>
          <Modal
            show={ViewShow}
            onHide={hanldeViewClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>View Users Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <div className='form-group'>
                  <input type="text" className='form-control' value={RowData.name} readOnly />
                </div>
                <div className='form-group mt-3'>
                  <input type="email" className='form-control' value={RowData.email} readOnly />
                </div>
                <div className='form-group mt-3'>
                  <input type="text" className='form-control' value={RowData.phone} readOnly />
                </div>
                <div className='form-group mt-3'>
                  <input type="text" className='form-control' value={RowData.address} readOnly />
                </div>
                {
                  Delete && (
                    <Button type='submit' className='btn btn-danger mt-4' onClick={handleDelete}>Delete Employee</Button>
                  )
                }
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={hanldeViewClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
        {/* Modal for submit data to database */}
        <div className='model-box-view'>
          <Modal
            show={ViewPost}
            onHide={hanldePostClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add New User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <div className='form-group'>
                  <input type="text" className='form-control' onChange={(e) => setname(e.target.value)} placeholder="Please enter Name" />
                </div>
                <div className='form-group mt-3'>
                  <input type="email" className='form-control' onChange={(e) => setemail(e.target.value)} placeholder="Please enter email" />
                </div>
                <div className='form-group mt-3'>
                  <input type="text" className='form-control' onChange={(e) => setphone(e.target.value)} placeholder="Please enter Phone" />
                </div>
                <div className='form-group mt-3'>
                  <input type="text" className='form-control' onChange={(e) => setaddress(e.target.value)} placeholder="Please enter Address" />
                </div>
                <Button type='submit' className='btn btn-success mt-4' onClick={handleSubmite}>Add User</Button>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={hanldePostClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
        {/* Modal for Edit employee record */}
        <div className='model-box-view'>
          <Modal
            show={ViewEdit}
            onHide={hanldeEditClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Edit User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <div className='form-group'>
                  <label>Name</label>
                  <input type="text" className='form-control' onChange={(e) => setname(e.target.value)} placeholder="Please enter Name" defaultValue={RowData.name} />
                </div>
                <div className='form-group mt-3'>
                  <label>Email</label>
                  <input type="email" className='form-control' onChange={(e) => setemail(e.target.value)} placeholder="Please enter email" defaultValue={RowData.email} />
                </div>
                <div className='form-group mt-3'>
                  <label>Phone</label>
                  <input type="text" className='form-control' onChange={(e) => setphone(e.target.value)} placeholder="Please enter Phone" defaultValue={RowData.number} />
                </div>
                <div className='form-group mt-3'>
                  <label>Address</label>
                  <input type="text" className='form-control' onChange={(e) => setaddress(e.target.value)} placeholder="Please enter Address" defaultValue={RowData.address} />
                </div>
                <Button type='submit' className='btn btn-warning mt-4' onClick={handleEdit}>Edit User</Button>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={hanldeEditClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>

        <div className='row'>
          <div className='mt-5 mb-4'>
            <Button variant='primary' onClick={() => { handlePostShow() }}><i className='fa fa-plu'></i>
              Add New User
            </Button>
          </div>
        </div>

      </Container>
    </>
  )
}

export default Users1