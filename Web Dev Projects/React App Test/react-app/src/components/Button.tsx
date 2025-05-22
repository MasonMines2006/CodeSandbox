interface ButtonProps {
  children: string;
  onClick: () => void;
  color: string;
}

function Button({ children, onClick, color }: ButtonProps) {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
