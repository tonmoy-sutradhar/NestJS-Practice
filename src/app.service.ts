import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hey, Tonmoy Sutradhar. Kemon acho tmi!';
  }
}
