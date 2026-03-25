import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

  private users = [
    {
      id: 1,
      email: 'john@gmail.com',
      password: bcrypt.hashSync('123456', 10),
      role: 'admin'
    },
    {
      id: 2,
      email: 'maria@gmail.com',
      password: bcrypt.hashSync('abcdef', 10),
      role: 'agent'
    },
  ];

  async findByEmail(email: string): Promise<any> {
    return this.users.find(user => user.email === email);
  }

}