import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';
import { AccountEntity } from '../../account/entities/account.entity';
import { MovementEntity } from '../../movement/entities/movement.entity';

@Entity()
export class CurrencyEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ length: 500})
  name: string;

  @Column({ length: 10 })
  code: string;

  @Column({ length: 10 })
  symbol: string;

  @OneToMany(
    type => AccountEntity,
    account => account.currency,
  )
  accounts: AccountEntity[];

  @OneToMany(
    type => MovementEntity,
    movement => movement.currency,
  )
  movements: MovementEntity[];
}
