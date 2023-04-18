import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const navigate = useNavigate();

  const clickHandler = (e) => {
    e.preventDefault();
    navigate(`/details`);
  };

  const checkHandler = (e) => {
    e.preventDefault();
    navigate(`/checkTicket`);
  };

  const signupHandler = (e) => {
    e.preventDefault();
    navigate(`/Signup`);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    navigate(`/login`);
  };

  const logoutHandler = (e) => {
    e.preventDefault();
    const currUser = JSON.parse(localStorage.getItem("user"));
    localStorage.removeItem("user");

    axios
      .get(`http://localhost:9090/logout/${currUser.id}`)
      .then((res) => {
        alert("logged out");
      })
      .catch((err) => {
        console.log(err);
      });
    navigate(`/`);
  };

  const userDetailsHandler = (e) => {
    e.preventDefault();
    navigate(`/userDetails`);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={process.env.PUBLIC_URL + "/Images/newlogo.png"}
              alt="Your Logo"
              width="50"
              height="50"
              className="d-inline-block align-text-top"
            />
          </a>
          <div className=" navbar-collapse justify-content-center">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={checkHandler}>
                  Check Tickets
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div
            className=" navbar-collapse justify-content-end"
            style={{ flexGrow: 0 }}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={loginHandler}>
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={signupHandler}>
                  Signup
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={logoutHandler}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="text-center" style={{ marginTop: "70px" }}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={clickHandler}
        >
          Get Train Details
        </button>
      </div>

      <div className="text-center" style={{ marginTop: "70px" }}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={userDetailsHandler}
        >
          User Details
        </button>
      </div>

      <div
        className="text-center"
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          marginTop: "235px",
          color: "ButtonShadow",
        }}
      >
        <p>A journey of a thousand miles begins with a single step</p>
      </div>
    </div>
  );
}

export default Home;
