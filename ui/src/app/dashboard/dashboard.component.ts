import { Component, OnInit } from '@angular/core';
import {CreateUserDto} from "../create-user.dto";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {CreateBookingDto} from "../create-booking.dto";
import {BookingsService} from "../bookings.service";
import {User} from "../user";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  authUser: User;
  bookingDto: CreateBookingDto;

  constructor(private authService: AuthService, private bookingsService: BookingsService, private router: Router) {
    this.bookingDto = new CreateBookingDto();
  }

  ngOnInit() {
    this.authUser = this.authService.getUser();
    if (!this.authUser || !this.authUser._id) {
      this.router.navigate(['/']).catch(
        (reason: any) => {
          console.warn(reason + 'Route not found');
        }
      );
    }
    this.bookingDto = new CreateBookingDto();
    this.bookingDto.userId = this.authUser._id;
  }

  getDiscount() {
    return Math.round((this.bookingDto.actualPrice - this.bookingDto.price) * 100) / 100;
  }

  validate() {
    if (!this.bookingDto.userId) {
      alert('User not found. Please register yourself first.');
      return false;
    }

    if (!this.bookingDto.plotArea) {
      alert('Please enter a plot area');
      return false;
    }

    return true;
  }

  onSubmit() {
    console.log(this.bookingDto);
    if (!this.validate()) {
      return;
    }
    this.bookingsService.create(this.bookingDto).subscribe(res => {
      console.log(res);
      this.bookingDto = new CreateBookingDto();
      this.bookingDto.userId = this.authUser._id;
      alert(`Booking done successfully. Your booking id is ${res._id}`)
    }, er => alert(er));
  }

  onContinue() {
    console.log(this.bookingDto);
    if (!this.validate()) {
      return;
    }
    this.bookingsService.calculatePrice(this.bookingDto).subscribe(res => {
      console.log(res);
      this.bookingDto = res;
    }, er => alert(er));
  }

  onCouponApply() {
    console.log(this.bookingDto);
    if (!this.validate()) {
      return;
    }
    this.bookingsService.applyCoupon(this.bookingDto).subscribe(res => {
      console.log(res);
      this.bookingDto = res;
    }, er => {
      console.log(er);
      alert(er.error.error);
    });
  }

  onLogout() {
    this.authService.removeUser();
    this.router.navigate(['/']).catch(
      (reason: any) => {
        console.warn(reason + 'Route not found');
      }
    );
  }

}
