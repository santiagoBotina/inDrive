import { memo } from "react";
import { Card } from "../Card";
import styles from "./Spot.module.css";

interface Props {
  number: number;
  available: boolean;
  isSpotSelected: boolean;
  setSelectedSpot: (spotNumber: number) => void;
}

function isAvailableClass(available: boolean): string {
  return available ? styles.available : styles.unavailable;
}

function isSpotSelectedClass(isSpotSelected: boolean): string | null {
  return isSpotSelected ? styles.selected : null;
}

function Component({
  number,
  available,
  isSpotSelected,
  setSelectedSpot,
}: Props) {
  return (
    <Card
      onClick={() => setSelectedSpot(number)}
      className={`
        ${isAvailableClass(available)}
        ${isSpotSelectedClass(isSpotSelected)}
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
