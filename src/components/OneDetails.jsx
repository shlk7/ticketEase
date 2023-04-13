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
    <div>
      <p>{data.id}</p>
      <p>{data.name}</p>
      <p>{data.fromwhere}</p>
      <p>{data.whereto}</p>
      <p>Available Tickets:{data.availability}</p>
      { data.availability > 0 && (<button
        type="button"
        className="list-group-item list-group-item-action active"
        onClick={clickHandler}
      >
        Book Ticket
      </button>) }
    </div>
  );
}
export default OneDetail;
