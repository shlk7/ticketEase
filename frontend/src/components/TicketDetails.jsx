import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function TicketDetails(props) {
  const { pnr } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:9090/tickets/${pnr}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pnr]);

  return (
    <div
      className="mx-auto card text-info bg-dark mb-3"
      style={{ width: "18rem", marginTop: "20rem" }}
    >
      <div className="card-body text-center">
      <p>PNR:{data.pnr}</p>
      <p>Name: {data.personName}</p>
      <p>Mobile Number: {data.personNumber}</p>
      <p>Train Number:{data.trainNumber}</p>
    </div>
    </div>
  );
}
export default TicketDetails;
