import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import {useFormik} from 'formik'
import { BASE_URL } from "../constants";
import { useNavigate } from "react-router-dom";

function Register() {

    const navigate=useNavigate()
    const formik=useFormik({
        initialValues:{
            email:'',
            password:'',
        },
        
        onSubmit:(values)=>{
            console.log(JSON.stringify(values))
            fetch(`${BASE_URL}/register`, {
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(values)
            }).then(res=>res.json()).then(response=>{
                if(response.success){
                    navigate('/login')
                }
            })
        },

        validate:values=>{
            const errors={}

            if(!values.email){
                errors.email='Email is required'
            }
            if(!values.password){
                errors.password='Password is required'
            }
            return errors
        }
    })
    

  return (
    <Container className="mt-4">
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <Form onSubmit={formik.handleSubmit} className="shadow-sm p-4">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              <Form.Text className="text-muted">
                {formik.errors?formik.errors.email:''}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
              <Form.Text className="text-muted">
                {formik.touched.password && formik.errors?formik.errors.password:''}
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
