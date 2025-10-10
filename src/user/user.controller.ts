import { Body, Controller, Get, Param, Post } from '@nestjs/common';
// import { createUserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user-dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async createUser(@Body() createUserDto: CreateUserDto) {
    await this.userService.create(createUserDto);
    return { message: 'User created successfully' };
  }

  // Without database----------------------------------->>>
  // @Get()
  // getUser() {
  //   return this.userService.getUsers();
  // }

  // service id
  // @Get(':id')
  // getSingleUserById(@Param('id') id: string) {
  //   return this.userService.getSingleUser(id);
  // }

  // Handling Get with ID
  // @Get(':id')
  // getUserById(@Param('id') id: string) {
  //   return id;
  // }

  // Post req
  // @Post()
  // createUser(@Body() dto: createUserDto) {
  //   return {
  //     name: dto.name,
  //     age: dto.age,
  //   };
  // }

  // service
  // @Post()
  // createServiceUser(@Body() dto: createUserDto) {
  //   const newUser = this.userService.createUser(dto.name, dto.age);
  //   return newUser;
  // }--------------------------------------------------->>
}
