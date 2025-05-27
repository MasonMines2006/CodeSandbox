import ListGroup from "./components/ListGroup/ListGroup.tsx";
import Alert from "./components/Alert.tsx";
import Button from "./components/Button.tsx";
import { useState } from "react";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London"];
  const handleSelectItem = (item: string) => {
    console.log("Selected item:", item);
    // You can also set state or do anything else here
  };
  return (
    <>
      <h1>My First React App</h1>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>
    </>
  );
}
export default App;
