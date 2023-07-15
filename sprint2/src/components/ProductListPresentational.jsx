import React from "react";
import ProductLoader from "./ProductLoader";

const ProductList = ({ id }) => {
  return (
    <>
      {products.map((product) => {
        <ProductLoader id={product.id}>
          {/* Presentational Component */}
          <Product />
        </ProductLoader>;
      })}
    </>
  );
};

export default ProductList;
