import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ResponseService } from '../common-modules/response/response.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService,
        private readonly responseService: ResponseService
    ) {}

    @Post('login')
    async login(@Body() loginDto: LoginDto) {
        try {
            const result = await this.authService.login(loginDto);
            const responseOptions = {
                success: true,
                code: 200,
                message: "Success"
            }
            //return this.responseService.createSuccessResponse(responseOptions,result., );
        } catch (error) {
            const status = error.message === "Invalid credentials" ? 404 : 500;
            const message = error.message === "Invalid credentials" ? "Invalid credentials" : "getErrorMessage";
            return this.responseService.createErrorResponse(status, message);
        }

    }
}