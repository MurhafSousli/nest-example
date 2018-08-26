import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // async findOneByToken(token): any {
  //   return await this.userRepository.find
  // }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }
}
