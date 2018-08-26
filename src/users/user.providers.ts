import { Connection } from 'typeorm';
import { User } from './user.entity';
import { DbConnectionToken, UserRepositoryToken } from '../constants';

export const userProviders = [
  {
    provide: UserRepositoryToken,
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: [DbConnectionToken],
  },
];
