import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ExpensesService } from './expenses.service';
import { CreateExpenseDto } from './dtos/create-expense.dto'; 
import { Expense } from './schema/expense.schema';

@Resolver(() => Expense)
export class ExpensesResolver {
  constructor(private readonly expensesService: ExpensesService) {}

  @Query(() => [Expense])
  async expenses() {
    return this.expensesService.findAll();
  }

  @Query(() => Expense)
  async expense(@Args('id') id: string) {
    return this.expensesService.findOne(id);
  }

  @Mutation(() => Expense) 
  async createExpense(
    @Args('createExpenseDto') createExpenseDto: CreateExpenseDto,
    @Args('userId') userId: string, 
  ): Promise<Expense> {
    return this.expensesService.create(userId, createExpenseDto);
  }
  

  @Mutation(() => Expense)
  async updateExpense(
    @Args('id') id: string,
    @Args('updateExpenseDto') updateExpenseDto: CreateExpenseDto,
  ) {
    return this.expensesService.update(id, updateExpenseDto);
  }

  @Mutation(() => Expense)
  async deleteExpense(@Args('id') id: string) {
    return this.expensesService.remove(id);
  }
}
