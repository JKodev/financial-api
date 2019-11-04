import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CurrencyInputDto } from '../dto';
import { Currency } from '../models';
import { CurrencyEntity } from '../entities/currency.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CurrencyService {
  constructor(
    @InjectRepository(CurrencyEntity)
    private readonly currencyRepository: Repository<CurrencyEntity>,
  ) {}

  create(data: CurrencyInputDto): Promise<Currency> {
    const money = new CurrencyEntity();
    money.name = data.name;
    money.code = data.code;
    money.symbol = data.symbol;
    return this.currencyRepository.save(money);
  }

  findAll(): Promise<Currency[]> {
    return this.currencyRepository.find();
  }

  findOne(currencyId: number): Promise<Currency> {
    return this.currencyRepository.findOne(currencyId);
  }
}
