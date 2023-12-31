import {
  Dispatch,
  MutableRefObject,
  RefObject,
  SetStateAction,
  createContext,
} from "react";

type RefOrNull = MutableRefObject<null> | null;

interface ReservationProvider {
  selectedSpot: number | null;
  reservationType: string | null;
  handleSelectSpot: (spotNumber: number, isAvailable: boolean) => void;
  handleScroll: (ref: RefObject<HTMLInputElement>) => void;
  setReservationType: Dispatch<SetStateAction<string | null>>;
  selectTypeRef: RefOrNull;
  selectSpotRef: RefOrNull;
  selectTimeRef: RefOrNull;
}

export const ReservationProvider = createContext<ReservationProvider>({
  selectedSpot: null,
  reservationType: null,
  handleSelectSpot: () => {},
  handleScroll: () => {},
  setReservationType: () => {},
  selectTypeRef: null,
  selectTimeRef: null,
  selectSpotRef: null,
});
