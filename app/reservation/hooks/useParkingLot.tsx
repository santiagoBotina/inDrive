import { RefObject, useState } from "react";

export const useParkingLot = () => {
  const [selectedSpot, setSelectedSpot] = useState<number | null>(null);
  const [reservationType, setReservationType] = useState<string | null>(null);

  const handleSelectSpot = (spotNumber: number, isAvailable: boolean) => {
    if (!isAvailable) return null;

    if (selectedSpot && selectedSpot === spotNumber) {
      return setSelectedSpot(null);
    }
    setSelectedSpot(spotNumber);
  };

  const handleScroll = (ref: RefObject<HTMLInputElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return {
    selectedSpot,
    reservationType,
    handleSelectSpot,
    handleScroll,
    setReservationType,
  };
};
