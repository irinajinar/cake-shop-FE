import { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/styles";
import DrawerAppBar from "../Appbar";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "60px",
    paddingRight: "20px",
  },
});

function HomePage() {
  const [products, setProducts] = useState([]);
  const classes = useStyles();
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("isLogged") === "true") {
      axios
        .get("http://localhost:8081/products")
        .then((response) => setProducts(response.data))
        .catch((error) => console.log(error));
      console.log(products);
    } else {
      navigate("/login");
    }
  }, []);

  const options = {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  };

  return (
    <div>
      <DrawerAppBar />
      <h1>Product List</h1>
      <ResultsContainer>
        {products.map((product) => (
          <ProductCard
            name={product.name}
            price={product.price}
            productType={product.productType}
            productId={product.id}
            userId={localStorage.getItem("userId")}
            description="Delicious cakes!"
          />
        ))}
      </ResultsContainer>
    </div>
  );
}

export default HomePage;

const HomeContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;

const ResultsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
`;
