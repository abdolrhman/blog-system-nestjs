import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }
  async createUser(user: User): Promise<User> {
    return await this.usersRepository.save(user);
  }

  async getUser(_id: number): Promise<User[]> {
    return await this.usersRepository.find({
      select: ['fullName', 'jobTitle'],
      where: [{ id: _id }],
    });
  }
}
