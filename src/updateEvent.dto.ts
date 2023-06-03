import { PartialType } from '@nestjs/mapped-types';
import { CreateEventDto } from './createEvent.dto';

export default class UpdateEventDto extends PartialType(CreateEventDto) {}
