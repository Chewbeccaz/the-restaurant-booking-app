export class BookingClass {
  constructor(
    public resturantID: string,
    public date: string,
    public time: string,
    public numberOfGuest: number,
    public customer: {
      name: string;
      lastname: string;
      email: string;
      phone: string;
    }
  ) {}
}
