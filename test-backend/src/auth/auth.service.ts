import { ForbiddenException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { JwtService } from "@nestjs/jwt";

import { User } from "../_core/database/user";
import { makeHash } from "../_core/helpers/functions";
import { success } from "../_core/helpers/response";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    private readonly jwtSvc: JwtService
  ) {}

  async getTokens(user: any) {

    const [access, refresh] = await Promise.all([
      this.jwtSvc.signAsync(
        { user },
        { secret: process.env.ACCESS_TOKEN_SECRET, expiresIn: `${process.env.ACCESS_TOKEN_EXPIRE}s` }
      ),
      this.jwtSvc.signAsync(
        { user },
        { secret: process.env.REFRESH_TOKEN_SECRET, expiresIn: `${process.env.REFRESH_TOKEN_EXPIRE}s` }
      )
    ]);

    return { access, refresh }
  }

  async validateUser(email: string, password: string) {
    const user = await this.userRepo.findOneBy({ email: email });
    if (user && (makeHash(password + process.env.SALT) === user.password)) {
      return user.viewModel();
    }
    return null;
  }

  async login(data: any) {
    const tokens = await this.getTokens(data);
    return success('', { me: data, tokens: tokens });
  }

  async refresh(data: any) {
    const { refreshToken, ...user } = data;

    if (!user || !refreshToken)
      throw new ForbiddenException('Access Denied.');

    // get authorize tokens
    const tokens = await this.getTokens(user);
    return success('', { me: user, tokens: tokens });
  }
}
