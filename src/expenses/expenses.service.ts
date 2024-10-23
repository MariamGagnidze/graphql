import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Expense } from './schema/expense.schema';
import { CreateExpenseDto } from './dtos/create-expense.dto';

@Injectable()
export class ExpensesService {
  constructor(@InjectModel(Expense.name) private expenseModel: Model<Expense>) {}

  async create(userId: string, createExpenseDto: CreateExpenseDto) {
    const expense = await this.expenseModel.create({
      ...createExpenseDto,
      userId,
    });
    return expense;
  }

  async findAll(): Promise<Expense[]> {
    return this.expenseModel.find(); 
  }

  async findOne(id: string): Promise<Expense> {
    return this.expenseModel.findById(id); 
  }

  async update(id: string, updateExpenseDto: CreateExpenseDto): Promise<Expense> {
    return this.expenseModel.findByIdAndUpdate(id, updateExpenseDto, { new: true }); 
  }

  async remove(id: string): Promise<Expense> {
    return this.expenseModel.findByIdAndDelete(id); 
  }
}
