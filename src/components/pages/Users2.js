import React, { useEffect, useState } from 'react'
import { Button, Container, Modal, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { UserService } from '../../services/UserService'
import Spinner from '../layout/Spinner'


const Users2 = () => {
    
    let [query, setQuery] = useState({
        text: ''
    });

    let [state, setState] = useState({
        loading: false,
        users: [],
        filteredUsers: [],
        errorMassage: ''
    });

    useEffect(() => {
        async function fetchData() {
            try {
                setState({ ...state, loading: true });
                let response = await UserService.getALLUsers();
                console.log(response.data);
                setState({
                    ...state,
                    loading: false,
                    users: response.data,
                    filteredUsers: response.data
                });
            }
            catch (error) {
                setState({
                    ...state,
                    loading: false,
                    errorMessage: error.message
                })
            }
        };
        fetchData();
    }, []);

    // const handleSubmit = () => {
    //     // const url = 'https://lokinder007.github.io/jsonapi/users.json'
    //     const url = 'http://localhost:9000/users'
    //     const Credentials = { name, email, phone, address }
    //     axios.post(url, Credentials)
    //         .then(res => {
    //             alert('User Added Successfully')
    //             setData([Credentials, ...data])
    //             window.location.reload()
    //             // console.log(res)
    //         })
    //         .catch(err => {
    //             alert('Somthing went wrong.')
    //         })
    // }
   
    //   const handleEdit = (userId) => {
    //     // const url = `https://lokinder007.github.io/jsonapi/users.json/${id}`
    //     const url = 'http://localhost:9000/users/${userId}'
    //     const Credentials = { name, email, phone, address }
    //     axios.put(url, Credentials)
    //       .then(res => {
    //         alert('User Edited Successfully')
    //         window.location.reload()
    //         console.log(res)
    //       })
    //       .catch(err => {
    //         alert('Somthing went wrong.')
    //       })
    //   }

    // delete contact
    let clickDelete = async (userId) => {
        try {
            let response = await UserService.deleteUser(userId);
            if (response) {
                setState({ ...state, loading: true });
                let response = await UserService.getALLUsers();
                setState({
                    ...state,
                    loading: false,
                    users: response.data,
                    filteredUsers: response.data
                });
            }
        }
        catch (error) {
            setState({
                ...state,
                loading: false,
                errorMessage: error.message
            })
        }
    };

    // search users
    let searchUsers = (event) => {
        event.preventDefault();
        setQuery({ ...query, text: event.target.value });
        let theUsers = state.users.filter(user => {
            return user.name.toLowerCase().includes(event.target.value.toLowerCase())
        });
        setState({
            ...state,
            filteredUsers: theUsers
        });
    };


    let { loading, users, filteredUsers, errorMessage } = state;

    return (
        <>
            <Container>
                <section className="user-search ">
                    <div className="container">
                        <div className="grid">

                            <div className="row text-center">
                                <div className="col">
                                    <p className="h3 fw-bold text-primary" >
                                        User Manager
                                        <Link to="/users/add" className="btn btn-danger ms-2">
                                            <i className="fa fa-plus-circle me-1" />
                                            Add User
                                        </Link>
                                    </p>
                                    <p className="fst-italic">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Quidem voluptas officia officiis vero quibusdam ab maiores,
                                        quasi tenetur corporis sapiente veniam, ipsa expedita alias
                                        amet unde eum quas laboriosam voluptate provident.
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <form className="row" onSubmit={searchUsers}>
                                        <div className="col">
                                            <div className="mb-2">
                                                <input
                                                    name="text"
                                                    value={query.text}
                                                    // onChange={(e)=>setQuery(e.target.value)}
                                                    onChange={searchUsers}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Search Names..."
                                                />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="mb-2">
                                                <input type="submit" className="btn btn-primary" value="Search" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {
                    loading ? <Spinner /> : <>

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
                                        filteredUsers.length > 0 &&
                                        filteredUsers.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.phone}</td>
                                                    <td>{item.address}</td>
                                                    <td style={{ minWidth: 190 }}>
                                                        <Button size='sm' variant='primary'>View</Button>|
                                                        <Button size='sm' variant='warning'>Edit</Button>|
                                                        <Button size='sm' variant='danger' onClick={() => clickDelete(item.id)}>Delete</Button>|
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>

                            {/* Modal for submit data to database */}
                            {/* <div className='model-box-view'>
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
                                            <Button type='submit' className='btn btn-success mt-4' onClick={handleSubmit}>Add User</Button>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant='secondary' onClick={hanldePostClose}>Close</Button>
                                    </Modal.Footer>
                                </Modal>
                            </div> */}

                        </Container>
                    </>
                }

            </Container>
        </>
    )
}

export default Users2