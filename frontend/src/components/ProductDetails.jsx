import React from "react";
// import { Container, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ProductDetails(item) {
  const navigate = useNavigate();

  const clickHandler = (e) => {
    e.preventDefault();
    // alert("Clicked!");
    navigate(`/details/${item.id}`);
  };

  return (
    <div className="row row-cols-3 text-center">
      <div className="col mx-auto" style={{ marginTop: "2rem" }}>
        <ul className="list-group bg-dark mb-3">
          <li className="list-group-item text-info bg-dark ">Id:{item.id}</li>
          <li className="list-group-item text-info bg-dark">
            Name:{item.name}
          </li>
          <button
            type="button"
            className="list-group-item list-group-item-action active"
            onClick={clickHandler}
          >
            Get Full Details
          </button>
        </ul>
      </div>
    </div>
  );
}

export default ProductDetails;
