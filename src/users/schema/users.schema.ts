import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Expense } from '../../expenses/schema/expense.schema';

@Schema()
@ObjectType()
export class User extends Document {
  @Field(() => ID)
  _id: string;

  @Field()
  @Prop({ required: true })
  name: string;

  @Field()
  @Prop({ required: true, unique: true })
  email: string;

  @Field()
  @Prop({ required: true })
  age: number;

  @Field(() => [Expense], { nullable: true }) 
  @Prop({ type: [{ type: Types.ObjectId, ref: 'Expense' }] }) 
  expenses: Types.ObjectId[]; 
}

export const UserSchema = SchemaFactory.createForClass(User);
