import { useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();

  const [pnr, setpnr] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("Clicked!");
    navigate(`/ticketDetails/${pnr}`);
  };

  return (
    <Container
      className="mx-auto card text-info bg-dark mb-3"
      style={{ width: "18rem", marginTop: "20rem" }}
    >
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlid="formBasicEmail">
          <Form.Label>Enter PNR No.</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your PNR No."
            onChange={(e) => setpnr(e.target.value)}
          />
        </Form.Group>
        <div className="text-center">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Home;
