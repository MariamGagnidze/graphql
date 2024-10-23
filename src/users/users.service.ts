import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schema/users.schema';
import { CreateUserDto } from './dtos/create-user.dto';
import { QueryParamsDto } from './dtos/queryparams.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: any): Promise<User> {
    return this.userModel.create(createUserDto); 
  }

  async findAll(queryParams: QueryParamsDto) {
    let { page, take, age } = queryParams;

    take = take > 100 ? 100 : take;

    const query = age ? { age } : {};

    return this.userModel
      .find()
      .skip((page - 1) * take)
      .limit(take)
      .populate('expenses', 'name amount');
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).populate('expenses'); 
  }
  
  

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
  }
  
  async remove(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
  
}
