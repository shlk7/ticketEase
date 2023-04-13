import axios from "axios";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";
import { useNavigate } from "react-router-dom";

function ListingsDetails(props) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const addDeatilHandler = (e) => {
    e.preventDefault();
    // alert("Clicked!");
    navigate(`/addDetails`);
  };

  useEffect(() => {
    axios
      .get("http://localhost:9090/trains")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Container>
        {/* {data.map(item=> <p key={item.id}>ID: {item.id}</p> )} */}
        {data.map((item) => (
          <ProductDetails {...item} key={item.id} />
        ))}

        <button
          type="button"
          className="list-group-item list-group-item-action active"
          onClick={addDeatilHandler}
        >
          Add new Deatil
        </button>
      </Container>
    </div>
  );
}

export default ListingsDetails;
