import { AccountEntity } from '../../account/entities/account.entity';
import { CurrencyEntity } from '../../shared/entities/currency.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryEntity } from '../../category/entities/category.entity';

@Entity()
export class MovementEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 500 })
  description: string;
  @Column({ type: 'float', precision: 13, scale: 2 })
  amount: number;

  @ManyToOne(
    type => AccountEntity,
    account => account.movements,
  )
  account: AccountEntity;
  @ManyToOne(
    type => CurrencyEntity,
    currency => currency.movements,
  )
  currency: CurrencyEntity;
  @ManyToOne(
    type => CategoryEntity,
    category => category.movements,
  )
  category: CategoryEntity;

  @Column({ type: 'datetime' })
  expirationDate: Date;
  @Column({ type: 'datetime' })
  payday: Date;
}
