import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'user login', description: 'Login user' })
  readonly login: string;

  @ApiProperty({ example: '12345678', description: 'Password user' })
  readonly password: string;
}
