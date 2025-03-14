import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { User } from 'src/users/entities/user.entity';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authenticationService: AuthenticationService) {
    super({
      usernameField: 'login',
    });
  }

  async validate(login: string, password: string): Promise<User> {
    return this.authenticationService.getAuthenticatedUser(login, password);
  }
}
