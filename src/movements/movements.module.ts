import { Module } from '@nestjs/common';
import { MovementsService } from './movements.service';

@Module({
  providers: [MovementsService]
})
export class MovementsModule {}
