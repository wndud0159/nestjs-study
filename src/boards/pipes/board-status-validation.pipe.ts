import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { BoardStatus } from '../board-status.enum';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOption = [BoardStatus.PUBLIC, BoardStatus.PRIVATE];

  transform(value: any, metadata: ArgumentMetadata) {
    console.log('metadata: ', metadata);
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException('send message');
    }

    return value;
  }

  isStatusValid(value: any) {
    const index = this.StatusOption.indexOf(value);
    return index !== -1;
  }
}
