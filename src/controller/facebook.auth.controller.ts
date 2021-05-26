import { Controller, Get, UseGuards, HttpStatus, Req } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";

@Controller()
export class FacebookAuthController {
  @Get("/facebook")
  @UseGuards(AuthGuard("facebook"))
  async facebookLogin(): Promise<any> {
    return HttpStatus.OK;
  }

  @Get("/facebook-profile")
  @UseGuards(AuthGuard("facebook"))
  async facebookLoginRedirect(@Req() req: Request): Promise<any> {
    return {
      statusCode: HttpStatus.OK,
      data: req.user
    };
  }
}