import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const clickHandler = (e) => {
    e.preventDefault();
    // alert("Clicked!");
    navigate(`/details`);
  };

  const checkHandler = (e) => {
    e.preventDefault();
    // alert("Clicked!");
    navigate(`/checkTicket`);
  };

  return (
    <div>
      This is Home Page
      <button
        type="button"
        className="list-group-item list-group-item-action active"
        onClick={clickHandler}
      >
        Get Full Details
      </button>
      <button
        type="button"
        className="list-group-item list-group-item-action active"
        onClick={checkHandler}
      >
        Check Ticket
      </button>
    </div>
  );
}

export default Home;
