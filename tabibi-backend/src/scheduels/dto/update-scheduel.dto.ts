import { PartialType } from '@nestjs/mapped-types';
import { CreateScheduelDto } from './create-scheduel.dto';

export class UpdateScheduelDto extends PartialType(CreateScheduelDto) {}
