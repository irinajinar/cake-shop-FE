import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import cake from "../images/cake.jpg";
import chocolate from "../images/chocolate.jpg";
import eclair from "../images/eclair.jpg";
import macarons from "../images/macarons.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CheckBoxOutlineBlankTwoTone } from "@material-ui/icons";

function ProductCard({
  productType,
  price,
  name,
  productId,
  userId,
  description,
}) {
  const navigate = useNavigate();
  const options = {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  };
  const handleImage =  () => {
    console.log(productType);
    switch (productType) {
      case "CAKE":
        return cake;
      case "CHOCOLATE":
        return chocolate;

        case "MACARONS":
        return macarons;

        case "ECLAIR":
        return eclair;
        
      default:
      // code block
    }
  };
  const handleAddProductToCart = async () => {
    axios
      .post(
        "http://localhost:8081/cart/product",
        {
          userId: `${userId}`,
          productId: `${productId}`,
        },
        options
      )
      .then((response) => {
        console.log(response.data);
        navigate("/cart");
      });
  };

  return (
    <Card
      style={{
        width: "18rem",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12)",
        padding: "2px",
        margin: "10px"
      }}
    >
      <ImageContainer>
        <Card.Img variant="top" src={handleImage()} />
      </ImageContainer>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Title>{productType}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <ButtonAndPriceContainer>
          <div>Price: {price} RON</div>
          <Button onClick={handleAddProductToCart}>Add to cart</Button>
        </ButtonAndPriceContainer>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
const ButtonAndPriceContainer = styled.div`
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;

  > button {
    margin-top: 25px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center; /* center the image horizontally */
  align-items: center; /* center the image vertically */
  height: 200px;

  > img {
    object-fit: contain;
    margin-bottom: 40px;
    max-width: 100%; /* make sure the image doesn't exceed the container width */
    max-height: 100%;
  }
`;
