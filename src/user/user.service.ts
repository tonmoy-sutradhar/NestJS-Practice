import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    {
      id: '1',
      name: 'Tonmoy Sutradhar',
      age: 20,
    },
    {
      id: '2',
      name: 'Meghla Sutradhar',
      age: 15,
    },
    {
      id: '3',
      name: 'Bimol Sutradhar',
      age: 40,
    },
    {
      id: '4',
      name: 'Kalpona Sutradhar',
      age: 30,
    },
  ];

  getUsers() {
    return this.users;
  }

  getSingleUser(id: string) {
    return this.users.find((user) => user.id === id);
  }

  createUser(name: string, age: number) {
    const newUser = { id: (this.users.length + 1).toString(), name, age };
    this.users.push(newUser);
    return this.users;
  }
}
