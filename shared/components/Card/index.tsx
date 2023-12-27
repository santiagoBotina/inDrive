import { ReactNode, memo } from "react";
import styles from "./Card.module.css";

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

function Component({ children, className, onClick }: Props) {
  return (
    <div className={`${styles.card} ${className || null}`} onClick={onClick}>
      {children}
    </div>
  );
}

const Card = memo(Component);

export { Card };
