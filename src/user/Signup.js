import React, { useState } from 'react'
import {Container , Form , Button} from "react-bootstrap"

export default function Signup(props) {

    const [newUser , setnewUser] = useState({});

    const ChangeHandler = (e) =>{
        const user ={...newUser}
        user[e.target.name] = e.target.value
        setnewUser(user);
        console.log(user)
    }

    const registerHandler =() =>{
        console.log('nn')
        props.register(newUser)
    }
  return (
    <div>
        <br></br>
        <br></br>
        <h1 style={{marginLeft:"20px"}}>CREAT ACCOUNT </h1>

        <Container>

            <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control name="firstName" onChange={ChangeHandler}></Form.Control>
            </Form.Group>

            <Form.Group>
            <Form.Label>Lat Name</Form.Label>
            <Form.Control name="lastName" onChange={ChangeHandler}></Form.Control>
            </Form.Group>

            <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control name="emailAddress" onChange={ChangeHandler}></Form.Control>
            </Form.Group>

            <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" onChange={ChangeHandler}></Form.Control>
            </Form.Group>
            <br></br>

            <Button href="/home" variant="outline-secondary" onClick={registerHandler}> Register </Button>

        </Container>
    </div>
  )
}
