import { ParkingLot as ParkingLotEntity } from "@/core/domain/model/ParkingLot";
import { Spot as SpotEntity } from "@/core/domain/model/Spot";
import { memo } from "react";
import { Spot } from "../Spot";
import styles from "./ParkingLot.module.css";

interface Props {
  parkingLot: ParkingLotEntity;
  spots: SpotEntity[];
}

function Component({ parkingLot, spots }: Props) {
  return (
    <div className={styles.wrapper}>
      {spots.map((spot) => {
        return (
          <Spot
            key={spot.ID}
            number={spot.number}
            available={!spot.reserved}
            isUserSelected={false}
          />
        );
      })}
    </div>
  );
}

const ParkingLot = memo(Component);

export { ParkingLot };
