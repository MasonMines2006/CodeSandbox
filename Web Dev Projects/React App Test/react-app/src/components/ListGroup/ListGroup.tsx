import { useState } from "react";
// import styles from "./ListGroup.module.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

interface ListItemProps {
  active?: boolean;
}
const ListItem = styled.li<ListItemProps>`
  padding: 10px;
  background-color: ${(props) => (props.active ? "blue" : "none")};
`;

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
    <ListItem
      active={selectedIndex === index}
      key={item}
      className={
        selectedIndex === index
          ? "ListItem-group-item active"
          : "list-group-item"
      }
      onClick={() => {
        setSelectedIndex(index);
        onSelectItem(item);
      }}
    >
      {item}
    </ListItem>
  ));
  const getMessage = () => message;

  return (
    <>
      <h1>List of {heading}</h1>
      <List>
        {items.length === 0 && <li>No Items Found </li>}
        {getMessage()}
      </List>
    </>
  );
}

export default ListGroup;
