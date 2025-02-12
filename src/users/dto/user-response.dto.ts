import { IsString } from 'class-validator';

export class UserResponse {
  @IsString()
  id: string;

  @IsString()
  login: string;

  @IsString()
  password: string;
}
