import { AccountTypeEntity, CurrencyEntity } from '../../shared/entities';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MovementEntity } from '../../movement/entities/movement.entity';

@Entity()
export class AccountEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @ManyToOne(
    type => AccountTypeEntity,
    accountType => accountType.accounts,
  )
  accountType: AccountTypeEntity;
  @ManyToOne(
    type => CurrencyEntity,
    currency => currency.accounts,
  )
  currency: CurrencyEntity;

  @OneToMany(
    type => MovementEntity,
    movement => movement.account,
  )
  movements: MovementEntity[];
}
