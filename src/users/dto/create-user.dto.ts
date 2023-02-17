import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MaxLength(255)
  name: string;
}
