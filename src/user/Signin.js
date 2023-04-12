import React,{useState} from 'react'
import {Container , Form , Button} from "react-bootstrap"
// import { useNavigate } from 'react-router';
// import { Redirect } from 'react-router-dom';

export default function Signin(props) {

    const [User , setUser] = useState({});

    const ChangeHandler = (e) =>{
        const user ={...User}
        user[e.target.name] = e.target.value
        setUser(user);
        console.log(user)
    }

    const SignInHandler = () => {
        props.login(User);
    };

    
  return (
    <div>
      <br></br>
    <h1>LOGIN</h1>

    <Container>

        <Form.Group>
        <Form.Label>Email Address</Form.Label>
        <Form.Control name="emailAddress" onChange={ChangeHandler}></Form.Control>
        </Form.Group>

        <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" onChange={ChangeHandler}></Form.Control>
        </Form.Group>
<br></br>

        <Button varient="primary" onClick={SignInHandler}> Login </Button>

    </Container>
</div>
  )
}
