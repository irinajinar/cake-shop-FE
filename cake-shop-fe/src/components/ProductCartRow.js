import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

function ProductCardRow({ productType, price, name, productId, decription }) {
  return (
    <TableRow key={productId}>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">{productType}</TableCell>
      <TableCell align="center">{price} Ron</TableCell>
      <TableCell align="center">{productId}</TableCell>
    </TableRow>
  );
}

export default ProductCardRow;
