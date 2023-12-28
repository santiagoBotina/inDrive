import { HTMLAttributes, memo } from "react";
import styles from "./Button.module.css";

export type ButtonTypes = "button" | "submit" | "reset";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | string;
  buttonType?: ButtonTypes;
  disabled?: boolean;
  onClick: () => void;
}

function Component({
  children,
  buttonType = "button",
  onClick,
  className,
  disabled = false,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${disabled && styles.disabled} ${className}`}
      disabled={disabled}
      type={buttonType}
    >
      {children}
    </button>
  );
}

const Button = memo(Component);

export { Button };
