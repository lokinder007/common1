import { Button } from 'bootstrap'
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleApi = () => {

    }

    return (
        <Container>
            <h1>Log In Page</h1>
            Email : <input value={email} onChange={handleEmail} type='text' /> <br />
            Password : <input value={password} onChange={handlePassword} type='text' /> <br />  <br />
            <button onClick={handleApi} >Login</button>
            {/* <Button onClick={handleApi}>Login</Button> */}
            <Link to="/signup">GO TO SIGNUP</Link>
        </Container>
    )
}

export default Login