import { MutableRefObject, memo } from "react";
import styles from './SelectReservationDate.module.css'
import { useReservationContext } from "../../providers/reservation.context";
import { Header } from "@/shared/components/Header";
import Image from "next/image";
import { Button } from "@/shared/components/Button";
import { useParkingLot } from "../../hooks/useParkingLot";

interface Props {
  selectTimeRef: MutableRefObject<null>;
  selectSpotRef: MutableRefObject<null>;
}

function Component({ selectTimeRef, selectSpotRef }: Props) {
  const { selectedSpot } = useReservationContext();
  const { handleScroll } = useParkingLot();

  return (
    <section ref={selectTimeRef} className={`${styles.selectTime}`}>
      {selectedSpot !== null ? (
        <>
          <Header
            title={`Selecciona tu fecha de reserva para el spot #${selectedSpot}`}
          >
            <p>Selecciona el tiempo que mejor se ajuste a tus necesidades</p>
          </Header>
          <Image src={"/car.svg"} alt="pink-car" width={200} height={200} />
          <p>Seleccione la fokin fecha</p>
          <input type="datetime-local" />
        </>
      ) : (
        <>
          <Header title="Antes de continuar, por favor selecciona un spot!" />
          <Image
            src={"/train-fence.svg"}
            alt="train-fence"
            width={200}
            height={200}
          />
          <Button
            className={styles.selectTimeButton}
            onClick={() => handleScroll(selectSpotRef)}
          >
            Volver a seleccionar spot
          </Button>
        </>
      )}
    </section>
  );
}

const SelectReservationDate = memo(Component)

export { SelectReservationDate }