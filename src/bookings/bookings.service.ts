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
		const booking = new this.bookingModel(dto);
		return booking.save();
	}

	applyCoupon(dto: CreateBookingDto): CreateBookingDto | undefined {

		if (dto.couponCode && coupons.find(coupon => coupon.code === dto.couponCode)) {
			const coupon = coupons.find(coupon => coupon.code === dto.couponCode);
			switch (coupon.type) {
				case "percent":
					dto.price = dto.price - Math.round(dto.price * parseInt(coupon.amount, 10) / 100);
				case "absolute":
					dto.price = dto.price - parseInt(coupon.amount, 10);
			}
			if (dto.price < 0) {
				dto.price = 0;
			}
			return dto;
		}
		return undefined;
	}

	calculatePrice(dto: CreateBookingDto): CreateBookingDto {
		dto.actualPrice = dto.plotArea;
		dto.price = dto.plotArea;
		if (dto.plotArea > 25) {
			// a discount of 15%
			dto.price = dto.price - Math.round(dto.price * 0.15);
		} else if (25 <= dto.plotArea && dto.plotArea > 15) {
			// a discount of 10%
			dto.price = dto.price - Math.round(dto.price * 0.1);
		}
		if (dto.price < 0) {
			dto.price = 0;
		}

		return dto;
	}
}
