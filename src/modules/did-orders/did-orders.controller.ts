import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DidOrdersService } from './did-orders.service';
import { CreateDidOrderDto } from './dto/create-did-order.dto';
import { UpdateDidOrderDto } from './dto/update-did-order.dto';
import { SearchDidOrderDto } from './dto/search-did-order.dto';
import { ResponseService } from 'src/shared/common-modules/response/response.service';

@Controller('projectx/did-orders')
export class DidOrdersController {
  constructor(private readonly didOrdersService: DidOrdersService,
    private readonly responseService:ResponseService
  ) {}

  @Get("get-did-orders/search")
  async getDidOrderAction(@Body() dto: SearchDidOrderDto): Promise<any> {
    try{
      const result = await this.didOrdersService.getFilteredDidOrders(dto);
      return this.responseService.success(result);

     
    }catch(error){
      throw new Error(error);
    }
  }

  @Get('options')
  async getOptions() {
    return this.didOrdersService.getOptions();
  }

 
}
