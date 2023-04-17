import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
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
    <div
      className="card mx-auto"
      style={{
        width: "18rem",
        border: "none",
        marginTop: "8rem",
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
        className="text-center "
        style={{ fontWeight: "bold", fontSize: "27px",color:"#2B547E" }}
      >
        WELCOME BACK!
      </p>
      <p
        className="text-center text-info"
        style={{ fontWeight: "bold", fontSize: "27px" }}
      >
        Login to your account
      </p>
      <div className="card-body text-light">
        <Form onSubmit={handleSubmit}>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Email address"
              onChange={(e) => seteMaildId(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            style={{ fontWeight: "bold", fontSize: "20px" }}
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Password"
              onChange={(e) => setpasswrd(e.target.value)}
            />
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Home;
