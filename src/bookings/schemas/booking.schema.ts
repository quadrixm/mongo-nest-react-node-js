import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Booking extends Document {
	@Prop({required: true})
	userId: string;

	@Prop({required: true})
	plotArea: number;

	@Prop({required: true})
	actualPrice: number;

	@Prop({required: true})
	price: number;

	@Prop()
	couponCode: string;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
