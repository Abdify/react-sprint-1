import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Slider from "./components/Slider";
import SliderContainer from "./components/SliderContainer";

/**
 * HOC
 * Compound Component
 * Render Props
 * Hook
 * Provider
 * Container-presentational
 */
function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`bg-primary ${theme}`}>
      <select name="" id="">
        <option onClick={() => setTheme("light")}>Light</option>
        <option onClick={() => setTheme("dark")}>Dark</option>
        <option onClick={() => setTheme("midnight")}>Midnight</option>
      </select>
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
      <p className="text-success">hello</p>
      {/* <Form action="">
        <FormInput name="email" label="Email" />
      </Form> */}
    </div>
  );
}

export default App;
