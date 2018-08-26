import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, InsertResult, DeleteResult, UpdateResult } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async insert(body: User): Promise<InsertResult> {
    return await this.userRepository.insert(body);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  async update(id: string, body: User): Promise<UpdateResult> {
    return await this.userRepository.update(id, body);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.userRepository.delete(id);
  }
}
