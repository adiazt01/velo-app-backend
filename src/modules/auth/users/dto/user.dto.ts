import {
  IsDate,
  IsEmail,
  IsOptional,
  IsString,
  IsStrongPassword,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UserDto {
  @IsUUID()
  id: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(3)
  @MaxLength(50)
  name: string;

  @IsStrongPassword()
  @IsOptional()
  password?: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  constructor(partial: Partial<UserDto> = {}) {
    Object.assign(this, partial);
  }
}
