import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";

import { DbUserModule } from "../_core/database/user";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { LocalStrategy } from "./strategies/local.strategy";
import { RefreshStrategy } from "./strategies/refresh.strategy";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";


@Module({
  imports: [
    PassportModule,
    JwtModule.register({}),
    DbUserModule
  ],
  providers: [
    LocalStrategy,
    JwtStrategy,
    RefreshStrategy,
    AuthService
  ],
  exports: [
    LocalStrategy,
    JwtStrategy,
    RefreshStrategy,
    AuthService
  ],
  controllers: [AuthController]
})
export class AuthModule {}
