import { useNavigate } from "react-router-dom";

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
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={userDetailsHandler}>
                  User Details
                </a>
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
