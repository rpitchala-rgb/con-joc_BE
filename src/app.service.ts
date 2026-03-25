import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  private users =[
    {
      "id":"1",
      "name":"suresh",
      "phone":"7938390292"
    },
    {
      "id":"2",
      "name":"ramesh",
      "phone":"4567900q"
    }

  ]
  getHello(): any {
    return this.users;
  }
}
