import { Injectable } from '@angular/core';
import {API_BASE_URL} from "./constants";
import {HttpClient} from "@angular/common/http";
import {CreateUserDto} from "./create-user.dto";
import {User} from "./user";
import {CreateBookingDto} from "./create-booking.dto";
import {Booking} from "./booking";

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  url = `${API_BASE_URL}/bookings`;

  constructor(private httpClient: HttpClient) { }

  public create(bookingDto: CreateBookingDto) {
    return this.httpClient.post<Booking>(`${this.url}`, bookingDto);
  }

  public applyCoupon(bookingDto: CreateBookingDto) {
    return this.httpClient.post<CreateBookingDto>(`${this.url}/apply-coupon`, bookingDto);
  }

  public calculatePrice(bookingDto: CreateBookingDto) {
    return this.httpClient.post<CreateBookingDto>(`${this.url}/calculate-price`, bookingDto);
  }
}
