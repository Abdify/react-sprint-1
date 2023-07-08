import React from "react";
import Table from "../components/Table";

const Orders = () => {
  const data = [
    { id: "1", product: "Mango", price: "200", orderDate: "12/1/11" },
    { id: "2", product: "Mango", price: "200", orderDate: "12/1/11" },
    { id: "3", product: "Mango", price: "200", orderDate: "12/1/11" },
    { id: "4", product: "Mango", price: "200", orderDate: "12/1/11" },
    { id: "5", product: "Mango", price: "200", orderDate: "12/1/11" },
    { id: "6", product: "Mango", price: "200", orderDate: "12/1/11" },
  ];

  const orderTableColumns = [
    { label: "Id", value: "id" },
    { label: "Product Name", value: "product" },
    { label: "Price", value: "price" },
    { label: "Order Date", value: "orderDate" },
  ];

  return (
    <div>
      <Table columns={orderTableColumns} data={data} />
    </div>
  );
};

export default Orders;
