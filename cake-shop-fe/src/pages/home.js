import { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import Card from "../Card";
import { makeStyles } from "@material-ui/styles";
import DrawerAppBar from "../Appbar";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";
import BasicExample from "../components/ProductCardV2";
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
    if(localStorage.getItem('isLogged')==="true"){
      axios
      .get("http://localhost:8081/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
    console.log(products);
    }else{
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
      {/* <Grid container spacing={4} className={classes.gridContainer}> */}
        {/* <DrawerAppBar /> */}
        <ResultsContainer>
          {products.map((product)=><BasicExample></BasicExample>)}
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