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
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlid="formBasicEmail">
          <Form.Label>pnr</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter PNR"
            onChange={(e) => setpnr(e.target.value)}
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
