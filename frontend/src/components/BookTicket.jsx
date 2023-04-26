import { useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Home() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [pnr, setpnr] = useState();
  const [personName, setpersonName] = useState();
  const [personNumber, setpersonNumber] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("Clicked!");
    const currUser = JSON.parse(localStorage.getItem("user"));
    console.log(currUser);

    axios
      .post(`http://localhost:9090/addTicket/${currUser.id}`, {
        pnr: pnr,
        personName: personName,
        personNumber: personNumber,
        trainNumber: id,
      })
      .then((response) => {
        console.log(response);
        console.log(Object.keys(response.data).length);
        alert("Congratualtions, your ticket has been booked Successfully ");
        navigate("/");
      });
  };

  return (
    <Container>
      <p>Train Number: {id}</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlid="formBasicEmail">
          <Form.Label>pnr</Form.Label>
          <Form.Control
            type="number"
            placeholder="First Name"
            onChange={(e) => setpnr(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>personName</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            onChange={(e) => setpersonName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>personNumber</Form.Label>
          <Form.Control
            type="text"
            placeholder="Address"
            onChange={(e) => setpersonNumber(e.target.value)}
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
