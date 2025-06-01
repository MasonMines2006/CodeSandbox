import styles from "./Button.module.css";

interface ButtonProps {
  children: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger";
}

function Button({ children, onClick, color }: ButtonProps) {
  return (
    <button
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
