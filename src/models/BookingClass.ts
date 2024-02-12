export class BookingClass {
  constructor(
    public restaurantId: string,
    public date: string,
    public time: string,
    public numberOfGuests: number,
    public customer: {
      name: string;
      lastname: string;
      email: string;
      phone: string;
    }
  ) {}
}
