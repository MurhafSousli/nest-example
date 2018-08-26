import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserRepositoryToken } from '../constants';

@Injectable()
export class UsersService {
  constructor(
    @Inject(UserRepositoryToken)
    private readonly userRepository: Repository<User>,
  ) {}

  async findOneByToken(token): any {
    return await this.userRepository.find
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }
}
