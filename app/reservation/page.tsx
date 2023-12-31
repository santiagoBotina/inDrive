"use client";
import { ParkingLot as ParkingLotEntity } from "@/core/domain/model/ParkingLot";
import { Spot } from "@/core/domain/model/Spot";
import { inParkingFont } from "@/theme/appFonts";
import { useRef } from "react";
import styles from "./Reservation.module.css";
import { SelectReservationDate } from "./components/SelectReservationDate";
import { SelectSpot } from "./components/SelectSpot";
import { useParkingLot } from "./hooks/useParkingLot";
import { ReservationProvider } from "./providers/reservation.provider";

const mockSpots: Spot[] = [
  {
    ID: "random1",
    ParkingLotID: "123-123-123-123-123",
    reserved: true,
    reservedUntil: new Date("2023-12-28"),
    number: 1,
  },
  {
    ID: "random2",
    ParkingLotID: "123-123-123-123-123",
    reserved: false,
    reservedUntil: new Date("2023-12-26"),
    number: 2,
  },
  {
    ID: "random3",
    ParkingLotID: "123-123-123-123-123",
    reserved: true,
    reservedUntil: new Date("2023-12-27"),
    number: 3,
  },
  {
    ID: "random4",
    ParkingLotID: "123-123-123-123-123",
    reserved: false,
    reservedUntil: new Date("2023-12-29"),
    number: 4,
  },
  {
    ID: "random5",
    ParkingLotID: "123-123-123-123-123",
    reserved: false,
    reservedUntil: new Date("2023-12-26"),
    number: 5,
  },
  {
    ID: "random6",
    ParkingLotID: "123-123-123-123-123",
    reserved: true,
    reservedUntil: new Date("2023-12-27"),
    number: 6,
  },
  {
    ID: "random7",
    ParkingLotID: "123-123-123-123-123",
    reserved: true,
    reservedUntil: new Date("2023-12-29"),
    number: 7,
  },
];

const mockParkingLot: ParkingLotEntity = {
  ID: "123-123-123-123-123",
  availableSpots: mockSpots,
  spotsQuantity: mockSpots.length,
  closingTime: new Date("2023-12-29"),
  openingTime: new Date("2023-12-29"),
};

export default function ReservationPage() {
  const selectSpotRef = useRef(null);
  const selectTimeRef = useRef(null);
  const { selectedSpot, handleSelectSpot } = useParkingLot();

  const providerValues = {
    selectedSpot,
    handleSelectSpot,
  };

  return (
    <ReservationProvider.Provider value={providerValues}>
      <main className={`${styles.main} ${inParkingFont.className}`}>
        <SelectSpot
          selectSpotRef={selectSpotRef}
          mockParkingLot={mockParkingLot}
          mockSpots={mockSpots}
          selectTimeRef={selectTimeRef}
        />
        <SelectReservationDate
          selectTimeRef={selectTimeRef}
          selectSpotRef={selectSpotRef}
        />
      </main>
    </ReservationProvider.Provider>
  );
}
