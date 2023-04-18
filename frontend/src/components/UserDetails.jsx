import axios from "axios";
import { useEffect, useState } from "react";

function UserDetails(props) {
  let currUser = {};
  if (JSON.parse(localStorage.getItem("user")))
    currUser = JSON.parse(localStorage.getItem("user"))

  return (
    <div
      className="mx-auto card text-info bg-dark mb-3"
      style={{ width: "18rem", marginTop: "20rem" }}
    >
      <div className="card-body text-center">
        <p>Id:{currUser.id}</p>
        <p>EmailId: {currUser.email}</p>
        <p>Password: {currUser.password}</p>
        <p>IsLoggedIn:{currUser.loggedIn}</p>
      </div>
    </div>
  );
}

export default UserDetails;
