import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants";

function CreateProduct() {


  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  function nameHandler(e) {
    setName(e.target.value);
  }

  function fileHandler(e) {
    setImage(e.target.files[0]);
  }

  function handleCreate(){

    const formdata=new FormData()
    
    formdata.append('name',name)
    formdata.append('image', image)


    fetch(BASE_URL + "/create", {
      method: "POST",
      headers: {

      },
      body:formdata
    })
      .then((res) => {
        console.log(res)
      })
      // .then((resp) => {
      //   console.log(resp);
      // });

  }

  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 3 }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={name} placeholder="Enter Name" onChange={nameHandler}/>
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" onChange={fileHandler}/>
            </Form.Group>
          </Form>

          <Button variant="primary" onClick={handleCreate}>Create Product</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateProduct;
