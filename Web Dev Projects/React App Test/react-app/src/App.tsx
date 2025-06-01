import React, { useState } from "react";
import ExpandableText from "./components/ExpandableText";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <ExpandableText
      onClick={handleClick}
      maxLength={100}
      isExpanded={isExpanded}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </ExpandableText>
  );
}
export default App;
