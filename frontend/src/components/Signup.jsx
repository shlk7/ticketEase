import { useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

function Home() {
  const navigate = useNavigate();

  const [eMaildId, seteMaildId] = useState();
  const [passwrd, setpasswrd] = useState();
  const [confirmPasswrd, setconfirmPasswrd] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwrd !== "" && passwrd === confirmPasswrd) {
      axios
        .post("http://localhost:9090/addUser", {
          email: eMaildId,
          password: passwrd,
        })
        .then((response) => {
          alert("Successful signup");
          console.log(response);

          navigate("/login");
        });
    } else {
      alert("Password didn't match. Try again");
    }
  };

  return (
    <Container>
      <div
        className="card mx-auto"
        style={{
          width: "18rem",
          border: "none",
          marginTop: "10rem",
          backgroundColor: "transparent",
        }}
      >
        <img
          src={
            process.env.PUBLIC_URL +
            "/Images/TravelEaseOnline-logos_transparent.png"
          }
          className="card-img-top"
          alt="..."
        />
        <p
          className="text-center"
          style={{ fontWeight: "bold", color: "ButtonShadow" }}
        >
          CREATE ACCOUNT
        </p>
        <div className="card-body">
          <Form onSubmit={handleSubmit}>
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
                type="password"
                placeholder="Enter Your Password"
                onChange={(e) => setpasswrd(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Your Password"
                onChange={(e) => setconfirmPasswrd(e.target.value)}
              />
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit">
                Register
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Container>
  );
}

export default Home;
