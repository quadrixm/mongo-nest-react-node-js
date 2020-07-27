import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthService } from './auth.service';
import { User } from './schemas/user.schema';

@Controller('auth')
export class AuthController {

	constructor(private readonly authService: AuthService) {
	}

	@Get()
	find(): string {
		return 'This action returns users';
	}

	@Post()
	async create(@Body() userData: CreateUserDto): Promise<User> {
		return this.authService.create(userData);
	}
}
