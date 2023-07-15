import React from "react";
import Input from "./Input";

const FormInput = (props) => {
  const { register } = useForm();
  return (
    <>
      <Input {...register(props.name)} {...props} />
      {errors["email"] && errors["email"].message}
    </>
  );
};

export default FormInput;
