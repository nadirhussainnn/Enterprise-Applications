import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import { BASE_URL } from '../constants';

function Register() {

    const navigate=useNavigate()
    
    const[email, setEmail]=useState('')
    const[password, setPass]=useState('')

    function emailHandler(e){
        setEmail(e.target.value)
    }

    function passHandler(e){
        setPass(e.target.value)
    }

    function login(){
        navigate('/')
    }

    function register(){

        fetch(BASE_URL+'/register', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({email, password})
        }).then(res=>res.json()).then(resp=>{
            console.log(resp)
        })
    }

  return (
    <Container>
    <Row>
        <Col md={{span:4, offset:3}}>

    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={emailHandler}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword" onChange={passHandler}>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" onClick={login}>
        Login
      </Button>

      <Button variant="primary" onClick={register}>
        Register
      </Button>
    </Form>
    </Col>    
        </Row>        
    </Container>

  );
}

export default Register;