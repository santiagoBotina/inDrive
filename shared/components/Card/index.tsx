import { ReactNode, memo } from "react";
import styles from "./Card.module.css";

interface Props {
  children: ReactNode;
  className?: string;
}

function Component({ children, className }: Props) {
  return (
    <div className={`${styles.card} ${className || null}`}>{children}</div>
  );
}

const Card = memo(Component);

export { Card };
