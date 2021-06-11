import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get(':id')
  get(@Param() params) {
    return this.service.getUser(params.id);
  }

  @Get()
  findAll() {
    return this.service.getUsers();
  }

  @Post()
  create(@Body() user: User) {
    return this.service.createUser(user);
  }
}
