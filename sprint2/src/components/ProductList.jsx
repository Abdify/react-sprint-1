import React, { useContext } from "react";
import useProducts from "../hooks/usePorducts";

const ProductList = () => {
  const { products } = useProducts();

  const {} = useContext();

  return (
    <div>
      {products.map((product) => (
        <Product product={product} />
      ))}
      <Button1 />
      <Button2 />
    </div>
  );
};

export default ProductList;
