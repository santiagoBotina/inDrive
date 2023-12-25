import { memo } from "react";
import { Card } from "../Card";
import styles from "./Spot.module.css";

interface Props {
  number: number;
  available: boolean;
  isUserSelected: boolean;
}

function isAvailableClass(available: boolean): string {
  return available ? styles.available : styles.unavailable;
}

function isUserSelectedClass(isUserSelected: boolean): string | null {
  return isUserSelected ? styles.selected : null;
}

function Component({ number, available, isUserSelected }: Props) {
  return (
    <Card
      className={`
        ${isAvailableClass(available)}
        ${isUserSelectedClass(isUserSelected)}
      `}
    >
      <h1>{number}</h1>
      {!available && (
        <i className={styles.notAvailableMesasge}>No disponible</i>
      )}
    </Card>
  );
}

const Spot = memo(Component);

export { Spot };
