import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class CreateExpenseDto {
  @Field() 
  @IsNotEmpty()
  name: string;

  @Field()
  @IsNotEmpty()
  description: string;

  @Field()
  @IsNumber()
  amount: number;

  @Field()
  @IsNotEmpty()
  date: Date;
}
