import { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/styles";
import DrawerAppBar from "../Appbar";
import styled from "styled-components";
import ProductCartRow from "../components/ProductCartRow";
import { useNavigate } from "react-router-dom";
import { Table } from "@material-ui/core";
import { TableBody } from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "60px",
    paddingRight: "20px",
  },
});

function CartPage() {
  const [products, setProducts] = useState([]);
  const classes = useStyles();
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const [totalPrice, setTotalPrice] = useState([]);
  useEffect(() => {
    console.log(userId);
    if (localStorage.getItem("isLogged") === "true") {
      axios
        .get(`http://localhost:8081/cart/products/user/${userId}`)
        .then((response) => {
          setProducts(response.data.productList);
          setTotalPrice(response.data.totalPrice);
        })
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
      <h1>CART LIST</h1>
      <ResultsContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center">PRODUCT NAME</TableCell>
              <TableCell align="center">CATEGORY</TableCell>
              <TableCell align="center">PRICE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <ProductCartRow
                name={product.name}
                productType={product.productType}
                productId={product.productId}
                price={product.price}
              ></ProductCartRow>
            ))}
          </TableBody>
        </Table>
        {/* BUTON SI TOTAL */}
      </ResultsContainer>
      <LoginInnerContainer>
        Total price: {totalPrice} Ron
        <Button>Buy</Button>
      </LoginInnerContainer>
    </div>
  );
}

export default CartPage;

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

const LoginInnerContainer = styled.div`
  padding: 30px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;

  > button {
    margin-top: 30px;
    margin: 0 auto;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
    width: 100px;
    height: 40px;
    font-size: 16px;
  }
`;
