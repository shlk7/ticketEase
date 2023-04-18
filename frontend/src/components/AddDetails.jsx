import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
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
    const currUser = JSON.parse(localStorage.getItem("user"));
    console.log(currUser);

    axios
      .post(`http://localhost:9090/addingTrain/${currUser.id}`, {
        id: id,
        name: name,
        fromwhere: fromwhere,
        whereto: whereto,
      })
      .then((response) => {
        if (Object.keys(response.data).length === 0) {
          alert("Can't create train");
        } else {
          navigate("/details");
        }
      });
  };

  return (
    <div
      className="mx-auto card text-info bg-dark mb-3"
      style={{ width: "60rem", marginTop: "10rem" }}
    >
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

        <div className="text-center">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Home;
