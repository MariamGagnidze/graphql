import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateExpenseDto } from './create-expense.dto';  

@InputType()
export class UpdateExpenseDto extends PartialType(CreateExpenseDto) {
}
