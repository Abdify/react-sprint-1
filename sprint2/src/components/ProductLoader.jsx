import React, { useEffect, useState } from "react";

const ProductLoader = ({ children, id }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`.com/${id}`);
  }, []);
  return (
    <div>
      {React.Children.map(children, (child) => {
        React.cloneElement(child, {
          product,
        });
      })}
    </div>
  );
};

export default ProductLoader;
