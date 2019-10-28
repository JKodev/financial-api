import { Module } from '@nestjs/common';
import { SharedService } from './shared.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurrencyEntity } from './entities/currency.entity';
import { CurrencyResolver } from './resolvers/currency.resolver';
import { CurrencyService } from './services/currency.service';
import { AccountTypeResolver } from './resolvers/accountType.resolver';
import { AccountTypeService } from './services/accountType.service';
import { AccountTypeEntity } from './entities/accountType.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CurrencyEntity, AccountTypeEntity])],
  providers: [
    CurrencyResolver, CurrencyService,
    AccountTypeResolver, AccountTypeService,
  ],
})
export class SharedModule {}
