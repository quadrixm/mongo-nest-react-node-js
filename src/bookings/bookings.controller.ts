import { Controller, Post } from '@nestjs/common';

@Controller('bookings')
export class BookingsController {
	@Post()
	create(): string {
		return 'This action creates a booking';
	}

	@Post('applyCoupon')
	applyCoupon(): string {
		return 'This calculate the price after applying coupon';
	}

	@Post('price')
	price(): string {
		return 'This action adds calculate all the price';
	}
}
