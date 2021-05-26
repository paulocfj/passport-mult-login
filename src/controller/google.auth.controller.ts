import { Controller, Get, UseGuards, HttpStatus, Req } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";

@Controller()
export class GoogleAuthController {
  @Get()
  @UseGuards(AuthGuard("google"))
  async googleLogin(): Promise<any> {
    return HttpStatus.OK;
  }

  @Get("/google-profile")
  @UseGuards(AuthGuard("google"))
  async googleProfile(@Req() req: Request): Promise<any> {
    return {
      statusCode: HttpStatus.OK,
      data: req.user
    };
  }
}