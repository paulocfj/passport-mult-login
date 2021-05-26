import { Injectable } from '@nestjs/common';
import { IUser } from 'src/interface/user.interface';

export type User = IUser;

@Injectable()
export class UserService {
  private readonly users:IUser[] = [
    {
      userId: 1,
      username: 'João',
      password: '123456',
    },
    {
      userId: 2,
      username: 'maria',
      password: '123654',
    }
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}