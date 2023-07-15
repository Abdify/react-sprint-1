import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {}, []);

  return { products: products };
};

export default useProducts;
