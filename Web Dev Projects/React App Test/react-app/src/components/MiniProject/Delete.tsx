import React from "react";
interface Props {
  onDelete: () => void;
}
const Delete = ({ onDelete }: Props) => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={onDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default Delete;
