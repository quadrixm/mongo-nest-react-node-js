import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { Booking } from './schemas/booking.schema';
import { BookingsService } from './bookings.service';

@Controller('bookings')
export class BookingsController {

	constructor(private readonly bookingsService: BookingsService) {
	}

	@Get()
	find(): string {
		return 'This return bookings';
	}

	@Post()
	async create(@Body('data') bookingDto: CreateBookingDto): Promise<Booking> {
		return this.bookingsService.create(bookingDto);
	}

	@Post('apply-coupon')
	applyCoupon(@Body('data') bookingDto: CreateBookingDto): CreateBookingDto {
		let createBookingDto = this.bookingsService.applyCoupon(bookingDto);
		if (createBookingDto) {
			return createBookingDto;
		} else {
			throw new HttpException({
				status: HttpStatus.NOT_FOUND,
				error: 'Invalid Coupon',
			}, HttpStatus.NOT_FOUND);
		};
	}

	@Post('calculate-price')
	calculatePrice(@Body('data') bookingDto: CreateBookingDto): CreateBookingDto {
		return this.bookingsService.calculatePrice(bookingDto);
	}
}
