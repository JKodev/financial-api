import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class CurrencyEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 500})
  name: string;
  @Column({ length: 10 })
  code: string;
  @Column({ length: 10 })
  symbol: string;
}
