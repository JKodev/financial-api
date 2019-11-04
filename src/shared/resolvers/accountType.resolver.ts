import { AccountTypeService } from '../services/accountType.service';
import { AccountType } from '../models/accountType';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { AccountTypeInputDto } from '../dto';

const pubSub = new PubSub();

@Resolver(of => AccountType)
export class AccountTypeResolver {
  constructor(private readonly accountTypeService: AccountTypeService) {}

  @Query(returns => [AccountType])
  accountTypes(): Promise<AccountType[]> {
    return this.accountTypeService.findAll();
  }

  @Mutation(returns => AccountType)
  async addAccountType(
    @Args('newAccountTypeData')
    newAccountTypeData: AccountTypeInputDto,
  ): Promise<AccountType> {
    const accountType = await this.accountTypeService.create(newAccountTypeData);
    await pubSub.publish(
      'accountTypeAdded',
      { accountTypeAdded: accountType },
    );
    return accountType;
  }

  @Subscription(returns => AccountType)
  accountTypeAdded() {
    return pubSub.asyncIterator('accountTypeAdded');
  }
}
