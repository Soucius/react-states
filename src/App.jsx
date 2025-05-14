import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./index.css";
import Header from "./components/Header";
import AddItemForm from "./components/AddItemFrom";
import FilterButtons from "./components/FilterButtons";
import ListItems from "./components/ListItems";
import ClearButton from "./components/ClearButton";

const products = [
  { id: 1, name: "Egg", completed: true },
  { id: 2, name: "Cheese", completed: true },
  { id: 3, name: "Olives", completed: false },
  { id: 4, name: "Meat", completed: false },
  { id: 5, name: "Chicken", completed: true },
];

export default function App() {
  return (
    <div className="container">
      <Header />

      <AddItemForm />

      <FilterButtons />

      <ListItems products={products} />

      <ClearButton />
    </div>
  );
}
