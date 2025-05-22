import { useState } from "react";
interface ListGroupProps {
  items: string[];
  heading: string;
  // item : string => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //Hook
  let [selectedIndex, setSelectedIndex] = useState(-1);

  const message = items.map((item, index) => (
    <li
      key={item}
      className={
        selectedIndex === index ? "list-group-item active" : "list-group-item"
      }
      onClick={() => {
        setSelectedIndex(index);
        onSelectItem(item);
      }}
    >
      {item}
    </li>
  ));
  const getMessage = () => message;

  return (
    <>
      <h1>List of {heading}</h1>
      <ul className="list-group">
        {items.length === 0 && <li>No Itesm Found </li>}
        {getMessage()}
      </ul>
    </>
  );
}

export default ListGroup;
