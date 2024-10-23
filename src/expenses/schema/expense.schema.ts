import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@Schema({ timestamps: true })
@ObjectType()
export class Expense extends Document {
  @Field(() => ID)
  _id: string;

  @Field()
  @Prop({ required: true })
  name: string;

  @Field()
  @Prop({ required: true })
  amount: number;

  @Field({ nullable: true })
  @Prop()
  description: string;

  @Field(() => Date)
  @Prop({ required: true, type: Date })
  date: Date;

  @Field(() => String)
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId; 
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);
