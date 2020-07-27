import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking } from './schemas/booking.schema';
import { CreateBookingDto } from './dto/create-booking.dto';
import { coupons } from './coupons';

@Injectable()
export class BookingsService {
	constructor(@InjectModel(Booking.name) private bookingModel: Model<Booking>) {}

	async create(dto: CreateBookingDto): Promise<Booking> {
		// If coupons applied then return price with coupon and if it is not valid, returning simple pricing.
		dto = this.applyCoupon(dto) || this.calculatePrice(dto);

		const booking = new this.bookingModel(dto);
		return booking.save();
	}

	applyCoupon(dto: CreateBookingDto): CreateBookingDto | undefined {

		const coupon = dto.couponCode && coupons.find(coupon => coupon.code === dto.couponCode);

		if (coupon) {
			// Calculate the price first and then applying coupon
			dto = this.calculatePrice(dto);

			const { price } = dto;

			switch (coupon.type) {
				case "percentage":
					dto.price = price - (price * parseInt(coupon.amount, 10) / 100);
					break;
				case "absolute":
					dto.price = price - parseInt(coupon.amount, 10);
					break;
			}

			dto.price = dto.price > 0 ? Math.round(dto.price * 100) / 100 : 0;

			return dto;
		}
		return undefined;
	}

	calculatePrice(dto: CreateBookingDto): CreateBookingDto {
		dto.actualPrice = dto.plotArea;
		dto.price = dto.plotArea;

		const {plotArea, price} = dto;

		if (plotArea > 25) {
			// a discount of 15%
			dto.price = price - (price * 0.15);
		} else if (plotArea <= 25 && plotArea > 15) {
			// a discount of 10%
			dto.price = price - (price * 0.1);
		}

		dto.price = dto.price > 0 ? Math.round(dto.price * 100) / 100 : 0;

		return dto;
	}
}
