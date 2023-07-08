import { AiFillEdit, AiOutlineArrowRight } from "react-icons/ai";
import Button from "./components/Button";
import Table from "./components/Table";
import Orders from "./pages/Orders";
const App = () => {
  const columns = [
    {
      label: "Product Name",
      value: "name",
    },
    {
      label: "Color",
      value: "color",
    },
    {
      label: "Category",
      value: "category",
    },
    {
      label: "Action",
      content: (item) => {
        return (
          <div>
            <AiFillEdit onClick={() => console.log(item)} />
          </div>
        );
      },
    },
  ];
  const data = [
    { name: "Apple", color: "Red", category: "Fruits" },
    { name: "Mango", color: "Red", category: "Fruits" },
    { name: "Mango", color: "Red", category: "Fruits" },
    { name: "Mango", color: "Red", category: "Fruits" },
    { name: "Mango", color: "Red", category: "Fruits" },
    { name: "Mango", color: "Red", category: "Fruits" },
  ];

  return (
    <div>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>

        <Button className="p-3" variant="outlined" color="success">
          Read More <AiOutlineArrowRight />
        </Button>
      </div>

      <Button color="primary">Submit</Button>

      <Button color="primary" className="p-3">
        Read More <AiOutlineArrowRight />
      </Button>

      <Table columns={columns} data={data} />

      <Orders />
    </div>
  );
};

export default App;
