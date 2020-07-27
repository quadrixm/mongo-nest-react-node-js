export class CreateBookingDto {
	userId: string;
	plotArea: number;
	actualPrice?: number;
	price?: number;
	couponCode?: string;
}
