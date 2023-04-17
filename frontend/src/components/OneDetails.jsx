import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function OneDetail(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});

  const clickHandler = (e) => {
    e.preventDefault();
    // alert("Clicked!");
    navigate(`/bookTicket/${data.id}`);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:9090/trains/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div
      className="mx-auto card text-info bg-dark mb-3"
      style={{ width: "18rem", marginTop: "20rem" }}
    >
      <div className="card-body text-center">
        <p>Train Number:{data.id}</p>
        <p>Name:{data.name}</p>
        <p>From:{data.fromwhere}</p>
        <p>Where:{data.whereto}</p>
        <p>Available Tickets:{data.availability}</p>
        {data.availability > 0 && (
          <div className="text-center">
            <button
              type="button"
              className="btn btn-primary"
              onClick={clickHandler}
            >
              Book Ticket
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default OneDetail;
