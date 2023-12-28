"use client";
import { ParkingLot as ParkingLotEntity } from "@/core/domain/model/ParkingLot";
import { Spot } from "@/core/domain/model/Spot";
import { Header } from "@/shared/components/Header";
import { ParkingLot } from "@/shared/components/ParkingLot";
import { inParkingFont } from "@/theme/appFonts";
import styles from "./Reservation.module.css";
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
  const { selectedSpot, handleSelectSpot } = useParkingLot();

  const providerValues = {
    selectedSpot,
    handleSelectSpot,
  };

  return (
    <ReservationProvider.Provider value={providerValues}>
      <main className={`${styles.main} ${inParkingFont.className}`}>
        <Header
          title="Realizar reservación en Parqueadero #1"
          subtitle="Selecciona el spot que quieras"
        >
          <em className={`${styles.underlinedText}`}>
            Nota: Puedes seleccionar SOLO <span>1 spot</span>
          </em>
        </Header>
        <ParkingLot parkingLot={mockParkingLot} spots={mockSpots} />
      </main>
    </ReservationProvider.Provider>
  );
}
