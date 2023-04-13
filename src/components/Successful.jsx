import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Successful() {
  const navigate = useNavigate();
  const { pnr } = useParams();
  // console.log(pnr);

  const ticketHandler = (e) => {
    e.preventDefault();
    navigate(`/ticketDetails/${pnr}`);
  };

  return (
    <div>
      <p>Congratualions, your ticket has been successfully booked!</p>
      <p>PNR:{pnr}</p>
      <p>Now Bug off,MC!</p>

      <button
        type="button"
        className="list-group-item list-group-item-action active"
        onClick={ticketHandler}
      >
        Get Ticket Details
      </button>
    </div>
  );
}
export default Successful;
