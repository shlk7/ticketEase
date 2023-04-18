import axios from "axios";
import { useEffect, useState } from "react";

function UserDetails(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetching data from the api
    axios
      .get(`http://localhost:9090/user`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    // saving the data to localstorage
    localStorage.setItem("dataKey", JSON.stringify(data));
  }, [data]);

  return (
    <div
      className="mx-auto card text-info bg-dark mb-3"
      style={{ width: "18rem", marginTop: "20rem" }}
    >
      <div className="card-body text-center">
        <p>Id:{data.id}</p>
        <p>EmailId: {data.email}</p>
        <p>Password: {data.password}</p>
        <p>IsLoggedIn:{data.loggedIn}</p>
      </div>
    </div>
  );
}

export default UserDetails;
