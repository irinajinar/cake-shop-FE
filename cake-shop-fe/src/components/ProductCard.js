import React from "react";
import styled from "styled-components";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


function ProductCard({ fieldId, image, name, productType, price, quantity }) {
  return (
    <ProductCardContainer>
      <Card
        style={{
          width: "18rem",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12)",
          padding: "2px",
        }}
      >
        <ImageContainer>
          {/* <Card.Img variant="top" src={logo} alt="Logo" /> */}
        </ImageContainer>

        <Card.Body>
          <NameContainer>
            <Card.Title>{name}</Card.Title>
          </NameContainer>
          <DescriptionContainer>
            <Card.Text>{productType}</Card.Text>
          </DescriptionContainer>
          <DescriptionContainer>
            <Card.Text>{price}</Card.Text>
          </DescriptionContainer>
          <DescriptionContainer>
            <Card.Text>{quantity}</Card.Text>
          </DescriptionContainer>
          <Link to={"/field/" + fieldId}>
            <Button variant="primary">Order from us!</Button>
          </Link>
        </Card.Body>
      </Card>
    </ProductCardContainer>
  );
}

export default ProductCard;

const ImageContainer = styled.div``;

const NameContainer = styled.div``;

const DescriptionContainer = styled.div``;

const ProductCardContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-basis: auto;

  /* > Card {
    background-color: black;
    width: 18rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
    padding: 10px;
  } */
`;
