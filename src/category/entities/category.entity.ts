import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MovementEntity } from '../../movement/entities/movement.entity';

@Entity()
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 10 })
  slug: string;
  @Column({ length: 10 })
  name: string;
  @OneToMany(
    type => MovementEntity,
    movement => movement.category,
  )
  movements: MovementEntity;
}
