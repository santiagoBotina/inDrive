import { createContext } from "react";

interface ReservationProvider {
  selectedSpot: number | null;
  handleSelectSpot: (spotNumber: number, isAvailable: boolean) => void;
}

export const ReservationProvider = createContext<ReservationProvider>({
  selectedSpot: null,
  handleSelectSpot: () => {},
});
