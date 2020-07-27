import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { BookingsModule } from './bookings/bookings.module';

@Module({
	imports: [
		MongooseModule.forRoot('mongodb://localhost:27017/mow-a-lawn-db'),
		AuthModule,
		BookingsModule,
	],
	controllers: [
		AppController,
	],
	providers: [
		AppService,
	],
})
export class AppModule {
}
