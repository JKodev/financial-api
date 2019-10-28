import { Query, Resolver } from '@nestjs/graphql';
import { Currency } from '../models/currency';
import { CurrencyService } from '../services/currency.service';

@Resolver(of => Currency)
export class CurrencyResolver {
  constructor(private readonly moneyService: CurrencyService) {}

  @Query(returns => [Currency])
  currencies(): Promise<Currency[]> {
    return this.moneyService.findAll();
  }
}
