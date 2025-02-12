import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityManager } from '@mikro-orm/postgresql';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: EntityRepository<User>,
    private readonly em: EntityManager,
  ) {}

  async createUser(userData: CreateUserDto) {
    const newUser = this.userRepository.create(userData);
    await this.em.persistAndFlush(newUser);
    return newUser;
  }

  async getByLogin(login: string) {
    const user = await this.userRepository.findOne({ login });

    if (!user) {
      return new HttpException(
        `User with login ${login} not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    return user;
  }

  async getById(id: string) {
    const user = await this.userRepository.findOne({ id });

    if (user) {
      return user;
    }

    throw new HttpException(
      `User with id ${id} not found`,
      HttpStatus.NOT_FOUND,
    );
  }

  async getAllUsers() {
    return this.userRepository.findAll();
  }
}
