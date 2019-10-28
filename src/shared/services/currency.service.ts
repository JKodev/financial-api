import { Injectable } from '@nestjs/common';
import { CurrencyInputDto } from '../dto/currency.input.dto';
import { Currency } from '../models/currency';
import { InjectRepository } from '@nestjs/typeorm';
import { CurrencyEntity } from '../entities/currency.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CurrencyService {
  constructor(
    @InjectRepository(CurrencyEntity)
    private readonly moneyRepository: Repository<CurrencyEntity>,
  ) {}

  create(data: CurrencyInputDto): Promise<Currency> {
    const money = new CurrencyEntity();
    money.name = data.name;
    money.code = data.code;
    money.symbol = data.symbol;
    return this.moneyRepository.save(money);
  }

  findAll(): Promise<Currency[]> {
    return this.moneyRepository.find();
  }
}
