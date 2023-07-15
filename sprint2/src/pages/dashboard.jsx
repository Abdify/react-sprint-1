import React from "react";
import WithAuth from "../patterns/hoc/withAuth";

const Dashboard = () => {
  const { products } = useProducts();

  return <div></div>;
};

export default WithAuth(Dashboard);
