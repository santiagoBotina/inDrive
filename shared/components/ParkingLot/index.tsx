import { useReservationContext } from "@/app/reservation/providers/reservation.context";
import { ParkingLot as ParkingLotEntity } from "@/core/domain/model/ParkingLot";
import { Spot as SpotEntity } from "@/core/domain/model/Spot";
import { memo } from "react";
import { Spot } from "../Spot";
import styles from "./ParkingLot.module.css";

interface Props {
  parkingLot: ParkingLotEntity;
  spots: SpotEntity[];
}

type isSpotSelected = {
  selectedSpot: number | null;
  spotNumber: number;
};

function Component({ parkingLot, spots }: Props) {
  const { selectedSpot, handleSelectSpot } = useReservationContext();

  const isSpotSelected = ({
    selectedSpot,
    spotNumber,
  }: isSpotSelected): boolean => {
    return selectedSpot === spotNumber;
  };

  return (
    <div className={styles.wrapper}>
      {spots.map(({ ID, number, reserved }) => {
        return (
          <Spot
            key={ID}
            number={number}
            available={!reserved}
            isSpotSelected={isSpotSelected({
              selectedSpot,
              spotNumber: number,
            })}
            setSelectedSpot={() => handleSelectSpot(number, !reserved)}
          />
        );
      })}
    </div>
  );
}

const ParkingLot = memo(Component);

export { ParkingLot };
