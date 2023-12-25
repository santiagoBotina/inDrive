import { UUID } from "crypto";

export class Spot {
  constructor(
    public ID: string,
    public ParkingLotID: UUID,
    public reserved: boolean,
    public reservedUntil: Date | null,
    public number: number
  ) {}
}
