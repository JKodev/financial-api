import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AccountEntity } from '../../account/entities/account.entity';

@Entity()
export class AccountTypeEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 500 })
  slug: string;
  @Column({ length: 500 })
  name: string;
  @OneToMany(
    type => AccountEntity,
    account => account.accountType,
  )
  accounts: AccountEntity;
}
