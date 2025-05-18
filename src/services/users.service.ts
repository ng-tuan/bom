import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    if (!createUserDto.password) {
      throw new BadRequestException('Password is required');
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const now = new Date();

    const user = this.usersRepository.create({
      user_id: uuidv4(),
      user_name: createUserDto.user_name,
      password: hashedPassword,
      created_at: now,
      updated_at: now,
      failed_login_attempts: 0,
      account_locked: false,
    });

    return this.usersRepository.save(user);
  }
}
