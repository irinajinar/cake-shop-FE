import React from "react";
import styled from "styled-components";

function ProductTypeCard({ isSelected, Icon }) {
  return (
    <BoxContainer>
      <Icon fontSize="medium" />
    </BoxContainer>
  );
}

export default ProductTypeCard;

const BoxContainer = styled.div`
  width: 100px;
  height: 75px;
  display: flex;
  border-radius: 20px;
  margin: 10px;
  align-items: center;
  background-color: gray;
  justify-content: center;

  :hover {
    opacity: 0.8;
  }

  cursor: pointer;
`;