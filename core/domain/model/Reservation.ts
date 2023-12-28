import { UUID } from "crypto";

export enum ReservationType {
  ONE_TIME = "ONE_TIME",
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
}


export class Reservation {
  constructor(
    public ID: string,
    public userID: UUID,
    public spotID: string,
    public createdAt: Date,
    public updatedAt: Date,
    public vehiclePlate: string,
    public reservationType: ReservationType,
    public reservedUntil: Date
  ) {}
}