import { ParkingLot as ParkingLotEntity } from "@/core/domain/model/ParkingLot";
import { Spot } from "@/core/domain/model/Spot";
import { Button } from "@/shared/components/Button";
import { Header } from "@/shared/components/Header";
import { ParkingLot } from "@/shared/components/ParkingLot";
import { MutableRefObject, memo } from "react";
import { useParkingLot } from "../../hooks/useParkingLot";
import styles from "./SelectSpot.module.css";
import { useReservationContext } from "../../providers/reservation.context";

interface Props {
  selectSpotRef: MutableRefObject<null>;
  mockParkingLot: ParkingLotEntity;
  mockSpots: Spot[];
  selectTimeRef: MutableRefObject<null>;
}

function Component({
  selectSpotRef,
  mockParkingLot,
  mockSpots,
  selectTimeRef,
}: Props) {
  const { handleScroll } = useParkingLot();
  const { selectedSpot } = useReservationContext();

  return (
    <section className={styles.spotSelection} ref={selectSpotRef}>
      <Header
        title="Realizar reservación en Parqueadero #1"
        subtitle="Selecciona el spot que quieras"
      >
        <em className={`${styles.underlinedText}`}>
          Nota: Puedes seleccionar SOLO <span>1 spot</span>
        </em>
      </Header>
      <ParkingLot parkingLot={mockParkingLot} spots={mockSpots} />
      <Button
        className={styles.selectTimeButton}
        disabled={!selectedSpot}
        onClick={() => handleScroll(selectTimeRef)}
      >
        Seleccionar fecha de reserva
      </Button>
    </section>
  );
}

const SelectSpot = memo(Component);

export { SelectSpot };
