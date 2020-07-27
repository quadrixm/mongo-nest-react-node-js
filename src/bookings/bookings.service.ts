import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking } from './schemas/booking.schema';
import { CreateBookingDto } from './dto/create-booking.dto';

@Injectable()
export class BookingsService {
	constructor(@InjectModel(Booking.name) private bookingModel: Model<Booking>) {}

	async create(createBookingDto: CreateBookingDto): Promise<Booking> {
		const booking = new this.bookingModel(createBookingDto);
		return booking.save();
	}
}
