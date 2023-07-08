import "./App.css";
import Button from "./components/Button";

function App() {
  function padLeft(padding: number | string, input: string) {
    if (typeof padding === "number") {
      return " ".repeat(padding) + input;
    } else {
      return " ".repeat(parseInt(padding)) + input;
    }
  }

  type ObjType = {
    _id: string;
    age: number;
    hobbies: string[];
  };

  type ObjType2 = Omit<ObjType, "_id">;

  const obj: ObjType = {
    _id: "sdfsdf",
    age: 1,
    hobbies: ["gardening", "swimming"],
  };

  const obj2: ObjType2 = {
    age: 1,
    hobbies: ["gardening", "swimming"],
  };

  return (
    <>
      <Button color="success" variant="outlined">
        Submit
      </Button>
    </>
  );
}

export default App;
