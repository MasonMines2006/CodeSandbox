import { useState } from "react";

interface ExpandableTextProps {
  children: string;
  onClick: () => void;
  isExpanded: boolean;
  maxLength?: number;
}

function ExpandableText({
  children,
  onClick,
  isExpanded,
  maxLength = 100,
}: ExpandableTextProps) {
  return (
    <>
      <h1>Expandable Text Component</h1>
      <p>
        {isExpanded || children.length <= maxLength
          ? children
          : `${children.slice(0, maxLength)}...`}
      </p>
      <button onClick={onClick}>{!isExpanded ? "Expand" : "Contract"}</button>
    </>
  );
}
export default ExpandableText;
