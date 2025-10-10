import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user-dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // create user

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(createUserDto);
    return await this.userRepository.save(newUser);
  }

  // Without database (Manually use)------------------------------->>
  // private users = [
  //   {
  //     id: '1',
  //     name: 'Tonmoy Sutradhar',
  //     age: 20,
  //   },
  //   {
  //     id: '2',
  //     name: 'Meghla Sutradhar',
  //     age: 15,
  //   },
  //   {
  //     id: '3',
  //     name: 'Bimol Sutradhar',
  //     age: 40,
  //   },
  //   {
  //     id: '4',
  //     name: 'Kalpona Sutradhar',
  //     age: 30,
  //   },
  // ];

  // getUsers() {
  //   return this.users;
  // }

  // getSingleUser(id: string) {
  //   return this.users.find((user) => user.id === id);
  // }

  // createUser(name: string, age: number) {
  //   const newUser = { id: (this.users.length + 1).toString(), name, age };
  //   this.users.push(newUser);
  //   return this.users;
  // }
}
