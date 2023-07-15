import React from "react";

const Input = ({ type, label, name, id, ...rest }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} name={name} id={id} {...rest} />
    </>
  );
};

export default Input;
