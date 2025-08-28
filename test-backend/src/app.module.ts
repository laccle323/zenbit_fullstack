import { Module } from '@nestjs/common';
import { AuthModule } from "./auth/auth.module";
import { DatabaseModule } from "./_core/database/database";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    AuthModule
  ]
})
export class AppModule {}
