import { useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

function Home() {
  const navigate = useNavigate();

  const [id, setid] = useState();
  const [name, setname] = useState();
  const [fromwhere, setfromwhere] = useState();
  const [whereto, setwhereto] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("Clicked!");

    axios
      .post("http://localhost:9090/addingTrain", {
        id: id,
        name: name,
        fromwhere: fromwhere,
        whereto: whereto
      })
      .then((response) => {
        console.log(response);

        navigate("/details");
      });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Id</Form.Label>
          <Form.Control
            type="number"
            placeholder="First Name"
            onChange={(e) => setid(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            onChange={(e) => setname(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>fromwhere</Form.Label>
          <Form.Control
            type="text"
            placeholder="Address"
            onChange={(e) => setfromwhere(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>whereto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Available"
            onChange={(e) => setwhereto(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Home;