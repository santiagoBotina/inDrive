import { Spot } from "./Spot";

export class ParkingLot {
  constructor(
    public ID: string,
    public spotsQuantity: number,
    public availableSpots: Spot[],
    public openingTime: Date,
    public closingTime: Date
  ) {}
}
