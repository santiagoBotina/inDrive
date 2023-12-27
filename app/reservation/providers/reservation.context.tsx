import { useContext } from "react";
import { ReservationProvider } from "./reservation.provider";

export const useReservationContext = () => useContext(ReservationProvider);
