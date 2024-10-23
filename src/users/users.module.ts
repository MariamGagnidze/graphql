import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver'; 
import { UserSchema } from './schema/users.schema'; 
import { ExpensesModule } from '../expenses/expenses.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    forwardRef(() => ExpensesModule),
  ],
  providers: [UsersService, UsersResolver], 
  exports: [UsersService],
})
export class UsersModule {}
