import { Module } from '@nestjs/common';
import Entities from './entities';
import Services from './services';
import Resolvers from './resolvers';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature(Entities)],
  providers: [
    ...Resolvers,
    ...Services,
  ],
})
export class AccountModule {}
