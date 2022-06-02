import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'

const Users = () => {

  const [data, setData] = useState([{ email: 'loki@gmail.com' }])

  useEffect(() => {
    axios.get('https://reqres.in/api/users?page=1')
      .then(res => {
        // alert('Success')
        console.log(res.data)
        setData(res?.data?.data)
      })
      .catch(err => {
        alert('Somthing went wrong.')
      })

    // fetch('https://reqres.in/api/users?page=1')
    // .then((res) => res.json())
    // .then((data) => {
    //   console.log(data)
    //   setData(data?.data)
    // })
  }, [])

  return (
    <>
      <Container>
        <h1 className='m-4'>List of Users</h1>

        <table className='m-auto'>
          <tr>
            <th>ID</th>
            <th>EMAIL</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
          </tr>
          {
            data.length > 0 &&
            data.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                </tr>
              )
            })
          }
        </table> <br /><br />

        <Table striped bordered hover size="sm" variant='info'>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>EMAIL</th>
            </tr>
          </thead>
          <tbody>
            {
              data.length > 0 &&
              data.map((item) => {
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>

        <b>Users Name</b>
        <ol type='1'>
        {
          data.map((name) => {
            return (
                <li>{name.first_name} </li>
                )
              })
            }
            </ol>


      </Container>
    </>
  )
}

export default Users