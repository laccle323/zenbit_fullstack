import { Request, Controller, Post, UseGuards } from "@nestjs/common";
import { response } from "../_core/helpers/response";
import { LocalGuard } from "./guards/local.guard";
import { RefreshGuard } from "./guards/refresh.guard";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {

  constructor(private readonly authSvc: AuthService) {}

  @UseGuards(LocalGuard)
  @Post("login")
  async login(@Request() req: any) {
    return response(await this.authSvc.login(req.user));
  }

  @UseGuards(RefreshGuard)
  @Post('refresh')
  async refresh(@Request() req: any) {
    return response(await this.authSvc.refresh(req.user));
  }
}
