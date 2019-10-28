import { AccountTypeService } from '../services/accountType.service';
import { AccountType } from '../models/accountType';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver(of => AccountType)
export class AccountTypeResolver {
  constructor(private readonly accountTypeService: AccountTypeService) {}

  @Query(returns => [AccountType])
  accountTypes(): Promise<AccountType[]> {
    return this.accountTypeService.findAll();
  }
}
