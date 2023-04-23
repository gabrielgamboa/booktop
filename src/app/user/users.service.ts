import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/user.entity';
import { hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async createUser(data: CreateUserDto): Promise<User> {
    const saltOrRounds = 10;
    const passwordHash = await hash(data.password, saltOrRounds);

    console.log({
      ...data,
      typeUser: 1,
      password: passwordHash,
    });

    return await this.usersRepository.save({
      ...data,
      typeUser: 1,
      password: passwordHash,
    });
  }

  async getAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }
}