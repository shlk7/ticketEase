import { useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

function Home() {
  const navigate = useNavigate();

  const [eMaildId, seteMaildId] = useState();
  const [passwrd, setpasswrd] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("Clicked!");

    axios
      .post("http://localhost:9090/user", {
        eMaildId: eMaildId,
        passwrd: passwrd,
      })
      .then((response) => {
        console.log(response);

        navigate("/login");
      });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email id</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Email ID"
            onChange={(e) => seteMaildId(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Password"
            onChange={(e) => setpasswrd(e.target.value)}
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
