import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Entities from './entities';
import Resolvers from './resolvers';
import Services from './services';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature(Entities)],
  providers: [
    ...Resolvers,
    ...Services,
  ],
  exports: [
    ...Services,
  ],
})
export class SharedModule {}
