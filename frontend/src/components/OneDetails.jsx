import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function OneDetail(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});
  const [user, setUser] = useState({});

  const clickHandler = (e) => {
    e.preventDefault();

    if (Object.keys(user).length === 0) {
      alert("Please login to continue");
      navigate(`/login`);
    } else navigate(`/bookTicket/${data.id}`);
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user")))
      setUser(JSON.parse(localStorage.getItem("user")));

    axios
      .get(`http://localhost:9090/trains/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const deleteHandler = (e) => {
    e.preventDefault();

    axios
      .delete(`http://localhost:9090/deleteTrain/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        alert("Post deleted!");
        setData(null);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate(`/details`);
  };

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
        <br></br>
        {user.admin && (
          <div className="text-center">
            <button
              type="button"
              className="btn btn-primary"
              onClick={deleteHandler}
            >
              Delete Train
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default OneDetail;
