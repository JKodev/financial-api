import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AccountTypeEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 500})
  slug: string;
  @Column({ length: 10 })
  name: string;
}
