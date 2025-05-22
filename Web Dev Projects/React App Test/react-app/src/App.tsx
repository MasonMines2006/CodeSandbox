import ListGroup from "./components/ListGroup";
import Alert from "./components/alert.tsx";
import Button from "./components/Button.tsx";

function App() {
  console.log("App component is rendering");
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

  const handleSelectItem = (item: string) => {
    console.log("Selected item:", item);
  };
  return (
    <div>
      <Alert>
        Hello <span> World</span>
      </Alert>

      <Button onClick={() => console.log("Button clicked!")} color="primary">
        Click Me
      </Button>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <p>More content goes here...</p>
    </div>
  );
}
export default App;
