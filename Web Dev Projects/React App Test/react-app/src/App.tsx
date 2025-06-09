import "bootstrap/dist/css/bootstrap.css";
import Form from "./components/MiniProject/Form";
import ListGroup from "./components/ListGroup/ListGroup";
import React, { useState } from "react";

const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
const [selectItem, setSelectItem] = useState("null");
function App() {
  return (
    <div className="container mt-5">
      <Form />
      <ListGroup items={items} heading="Womp Womp" onSelectItem={selectItem} />
    </div>
  );
}
export default App;
