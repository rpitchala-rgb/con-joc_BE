import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    const result =  this.appService.getHello();
    const message = "Success";
    const status = 200;

    return {result,message,status}
  }
}
