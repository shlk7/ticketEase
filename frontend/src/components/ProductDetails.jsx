import React from "react";
import axios from "axios";
// import { Container, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ProductDetails(item) {
  const navigate = useNavigate();

  const clickHandler = (e) => {
    e.preventDefault();
    // alert("Clicked!");
    navigate(`/details/${item.id}`);
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    // alert("Clicked!");

    axios
      .delete(`http://localhost:9090/deleting/${item.id}`)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">Id:{item.id}</li>
        <li className="list-group-item">Name:{item.name}</li>
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
          onClick={deleteHandler}
        >
          Delete
        </button>
        <br></br>
      </ul>
    </div>
  );
}

export default ProductDetails;
