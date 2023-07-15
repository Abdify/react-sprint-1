import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Slider from "./components/Slider";
import SliderContainer from "./components/SliderContainer";

function App() {
  const [theme, steTheme] = useState("light");

  return (
    <>
      <Input label="Product Name" name="productName" theme={theme} />

      <SliderContainer>
        {(isActive) => {
          return <Slider isActive={isActive} />;
        }}
        {/* <Slider />
        <Slider />
        <Slider />
        <Slider /> */}
      </SliderContainer>

      {/* <Form action="">
        <FormInput name="email" label="Email" />
      </Form> */}
    </>
  );
}

export default App;
