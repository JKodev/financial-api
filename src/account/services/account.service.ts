import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountEntity } from '../entities';
import { Repository } from 'typeorm';
import { AccountInputDto } from '../dto';
import { Account } from '../models';
import { AccountTypeService, CurrencyService } from '../../shared/services';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(AccountEntity)
    private readonly accountRepository: Repository<AccountEntity>,
    private readonly accountTypeService: AccountTypeService,
    private readonly currencyService: CurrencyService,
  ) {}

  async create(data: AccountInputDto): Promise<Account> {
    const account = new Account();
    const accountType = await this.accountTypeService.findOne(data.accountTypeId);
    const currency = await this.currencyService.findOne(data.currencyId);
    account.name = data.name;
    account.accountType = accountType;
    account.currency = currency;
    return this.accountRepository.save(account);
  }

  findAll(): Promise<Account[]> {
    return this.accountRepository.find({ relations: [ 'currency', 'accountType']});
  }
}
