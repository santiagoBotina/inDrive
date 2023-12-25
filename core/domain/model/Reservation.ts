import { UUID } from "crypto";

export class Reservation {
  constructor(
    public ID: string,
    public userID: UUID,
    public spotID: string,
    public createdAt: Date,
    public updatedAt: Date,
    public reservedUntil: Date,
  ) {}
}