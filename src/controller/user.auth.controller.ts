import { Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";
import { AuthService } from "src/service/auth.service";

@Controller()
export class UserAuthController {
    constructor(
        private authService: AuthService,
    ){}

    @UseGuards(AuthGuard('local'))
    @Post('auth/login')
    async login(@Req() req: Request) {
        return this.authService.login(req.user);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Req() req: Request) {
        return req.user;
    }
}