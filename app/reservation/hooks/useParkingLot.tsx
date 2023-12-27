import { useState } from "react";

export const useParkingLot = () => {
  const [selectedSpot, setSelectedSpot] = useState<number | null>(null);

  const handleSelectSpot = (spotNumber: number, isAvailable: boolean) => {
    if (!isAvailable) return null;

    if (selectedSpot) {
      return setSelectedSpot(null);
    }
    setSelectedSpot(spotNumber);
  };

  return {
    selectedSpot,
    handleSelectSpot,
  };
};
