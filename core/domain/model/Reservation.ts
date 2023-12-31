import { UUID } from "crypto";

export enum ReservationType {
  "ONE_TIME" = "Una vez",
  "WEEKLY" = "Por semana",
  "MONTHLY" = "Por mes",
}

export const RESERVATION_TYPE = {
  "Una vez": "ONE_TIME",
  "Por semana": "WEEKLY",
  "Por mes": "MONTHLY",
};

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
