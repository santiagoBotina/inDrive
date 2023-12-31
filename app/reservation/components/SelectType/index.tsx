import { RESERVATION_TYPE } from "@/core/domain/model/Reservation";
import { Button } from "@/shared/components/Button";
import { memo } from "react";
import { useReservationContext } from "../../providers/reservation.context";
import styles from "./SelectType.module.css";

function Component() {
  const {
    reservationType,
    setReservationType,
    handleScroll,
    selectTypeRef,
    selectSpotRef,
  } = useReservationContext();
  const reservationTypeArr = Object.keys(RESERVATION_TYPE);

  return (
    <section className={styles.typeSelection} ref={selectTypeRef}>
      <h1 className={styles.title}>Selecciona el tipo de tu reserva:</h1>
      <ul className={styles.typeList}>
        {reservationTypeArr.map((type) => {
          const formattedType =
            RESERVATION_TYPE[type as keyof typeof RESERVATION_TYPE];
          return (
            <li
              key={type}
              onClick={() => setReservationType(formattedType)}
              className={`${
                reservationType === formattedType ? styles.selected : null
              }`}
            >
              -{type}
            </li>
          );
        })}
      </ul>
      <Button
        className={styles.btn}
        onClick={() => handleScroll(selectSpotRef!)}
        disabled={!reservationType}
      >
        Ir a seleccionar spot
      </Button>
    </section>
  );
}

const SelectType = memo(Component);

export { SelectType };
