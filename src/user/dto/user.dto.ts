import { IsNotEmpty, IsNumber } from 'class-validator';

export class createUserDto {
  @IsNotEmpty({ message: 'Name should not be empty' })
  name: string;

  @IsNumber()
  age: number;
}
