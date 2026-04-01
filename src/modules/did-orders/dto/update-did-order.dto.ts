import { PartialType } from '@nestjs/mapped-types';
import { CreateDidOrderDto } from './create-did-order.dto';

export class UpdateDidOrderDto extends PartialType(CreateDidOrderDto) {}
