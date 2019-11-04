import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub} from 'apollo-server-express';
import { Account } from '../models';
import { AccountService } from '../services';
import { AccountInputDto } from '../dto';
import { Ctx, FieldResolver, Root } from 'type-graphql';
import { AccountTypeService, CurrencyService } from '../../shared/services';
import { AccountEntity } from '../entities';

const pubSub = new PubSub();

@Resolver(type => Account)
export class AccountResolver {
  constructor(
    private readonly accountService: AccountService,
    private readonly accountTypeService: AccountTypeService,
    private readonly currencyService: CurrencyService,
  ) {}

  @Query(returns => [Account])
  accounts(@Ctx() ctx): Promise<Account[]> {
    return this.accountService.findAll();
  }

  @Mutation(returns => Account)
  async addAccount(
    @Args('newAccountData')
    newAccountData: AccountInputDto,
  ): Promise<Account> {
    const account = await this.accountService.create(newAccountData);
    await pubSub.publish(
      'accountAdded',
      { accountAdded: account },
    );
    return account;
  }

  @Subscription(returns => Account)
  accountAdded() {
    return pubSub.asyncIterator('accountAdded');
  }
}
