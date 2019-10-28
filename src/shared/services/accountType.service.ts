import { InjectRepository } from '@nestjs/typeorm';
import { AccountTypeEntity } from '../entities/accountType.entity';
import { Repository } from 'typeorm';
import { AccountTypeInputDto } from '../dto/accountType.input.dto';
import { AccountType } from '../models/accountType';

export class AccountTypeService {
  constructor(
    @InjectRepository(AccountTypeEntity)
    private readonly accountTypeRepository: Repository<AccountTypeEntity>,
  ) {}

  create(data: AccountTypeInputDto): Promise<AccountType> {
    const accountType = new AccountType();
    accountType.slug = data.slug;
    accountType.name = data.name;
    return this.accountTypeRepository.save(accountType);
  }

  findAll(): Promise<AccountType[]> {
    return this.accountTypeRepository.find();
  }
}
