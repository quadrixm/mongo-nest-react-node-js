import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
	@Post()
	create(): string {
		return 'This action creates a new user';
	}
}
