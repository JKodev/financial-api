import { Query, Resolver, Args, Subscription, Mutation } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { CurrencyService } from '../services';
import { CurrencyInputDto } from '../dto';
import { Currency } from '../models';

const pubSub = new PubSub();

@Resolver(of => Currency)
export class CurrencyResolver {
  constructor(private readonly currencyService: CurrencyService) {}

  @Query(returns => [Currency])
  currencies(): Promise<Currency[]> {
    return this.currencyService.findAll();
  }

  @Mutation(returns => Currency)
  async addCurrency(
    @Args('newCurrencyData')
    newCurrencyData: CurrencyInputDto,
  ): Promise<Currency> {
    const currency = await this.currencyService.create(newCurrencyData);
    await pubSub.publish(
    'currencyAdded',
    { currencyAdded: currency },
    );
    return currency;
  }

  @Subscription(returns => Currency)
  currencyAdded() {
    return pubSub.asyncIterator('currencyAdded');
  }
}
