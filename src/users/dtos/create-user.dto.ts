import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsNumber, IsString, Min, Max } from 'class-validator';

@InputType() 
export class CreateUserDto {
  @Field() 
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field() 
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field() 
  @IsNotEmpty()
  @IsNumber()
  @Min(3)
  @Max(80)
  age: number;

  @Field() 
  @IsNotEmpty()
  password: string;
}
