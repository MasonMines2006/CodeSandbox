import "bootstrap/dist/css/bootstrap.css";
import Form from "./components/MiniProject/Form";
import React, { useState } from "react";
import ShoppingList from "./components/MiniProject/ShoppingList";

function App() {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  const [selectItem, setSelectItem] = useState("null");
  const [data, setData] = useState({});
  const handleSubmit = (formData: any) => {
    console.log("Submitted to App:", formData);
    setData(formData);
  };
  return (
    <div className="container mt-5">
      <Form data={data} onSubmit={handleSubmit} />
      <ShoppingList data={data} />
    </div>
  );
}
export default App;
